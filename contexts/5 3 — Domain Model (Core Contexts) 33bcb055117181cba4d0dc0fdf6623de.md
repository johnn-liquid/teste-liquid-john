# 5.3 — Domain Model (Core Contexts)

> **Layer:** 5 — Domain & System
> 

> **Question this answers:** What are the entities, aggregates, events, and invariants per bounded context?
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump, Liquid OS Arquitetura Agêntica Report, 5.2 Bounded Context Map
> 

> **Note:** This report covers core contexts only. Supporting and generic contexts will be detailed in subsequent iterations.
> 

---

## BC2: Client & Entity Management

### Entities

| Entity | Identity | Key Attributes | Lifecycle |
| --- | --- | --- | --- |
| **MarketEntity** | CPF or CNPJ (globally unique) | type (PF/PJ), name, document, status, risk_profile, liquidity_profile | Created → Active → Monitored → Archived |
| **EntityProfile** | entity_id + version | structured data, bureau history, monitoring data, verified_by_liquid flag | Continuously enriched |
| **DomainEntity** | entity_id + type_schema | SPE, buyer, seller, guarantor, contract, unit — modular schemas per vertical | Created from template → Populated → Active |
| **Inventory** | inventory_id | Concrete instance — Unit 138, Contract 217. The transactable item. | Created → Active → In Transaction → Settled |

### Aggregates

| Aggregate Root | Boundary | Invariants |
| --- | --- | --- |
| **MarketEntity** | MarketEntity + EntityProfile(s) | Same CPF/CNPJ = same entity across entire system (no duplicates). Entity cannot be deleted, only archived. Merge requires human approval. |
| **DomainEntity** | DomainEntity + related Inventory items | Schema must match registered template. Inventory item cannot belong to two active transactions simultaneously. |

### Domain Events

| Event | Payload | Emitted When | Consumed By |
| --- | --- | --- | --- |
| `EntityCreated` | entity_id, type, document | New entity registered | BC3, BC11 |
| `EntityEnriched` | entity_id, data_source, data_summary | Monitoring Agent or bureau adds data | BC3, BC4, BC6 |
| `EntityMerged` | source_ids, target_id, human_approver | Two entity records merged | All contexts |
| `InventoryCreated` | inventory_id, entity_id, type, value | New transactable item registered | BC4 |

---

## BC4: Liquidity Operations (with Kernel)

### Entities

| Entity | Identity | Key Attributes |
| --- | --- | --- |
| **LiquidityScore** | asset_id + timestamp | 9 dimension scores (L1-L5), effective_score = min(9), gargalo_dimension, override_conditions, macro_state_at_time |
| **LiquidityChannel** | channel_id | trigger_type, status, client_workspace_id, operating_side_channel_id, participants, transaction_type |
| **Transaction** | transaction_id | type (securitization/credit/secondary/restructuring/direct), value, take_rate, status, parties, audit_trail |
| **ExecutionMode** | mode_id | One of 5 modes: restructuring, securitization, exit_facilitation, credit_origination, direct_transaction |

### The Liquidity Kernel (Core Domain Logic)

The **Kernel de Liquidez** is the computational heart of Liquid. It scores any real estate asset/operation across 9 dimensions:

| Dimension | What It Measures | Score Range |
| --- | --- | --- |
| D1: Asset | Ability to convert physical property to cash | L1 (80-100) to L5 (0-19) |
| D2: Cash Flow | Ability to monetize recurring/programmed flows without selling asset | L1-L5 |
| D3: Investor | Ability of investor to convert their position to cash | L1-L5 |
| D4: Creditor | Ability of creditor to recycle capital (sell/securitize/collateralize credit) | L1-L5 |
| D5: Developer | Developer’s ability to access capital at each stage | L1-L5 |
| D6: Structure | How easily the legal form allows position transfer | L1-L5 |
| D7: Guarantee | Speed and certainty of guarantee execution | L1-L5 |
| D8: Vehicle | Does the investment vehicle offer exit? | L1-L5 |
| D9: Market | Does a functional market exist? | L1-L5 |

**Central equation:** `effective_liquidity = min(score_1, score_2, ... score_9)`

**Bottleneck:** `gargalo = argmin(scores)` — the weakest link determines everything.

**Why min() not average:** Average hides bottlenecks. 8 dimensions at L1 + 1 at L5: average says L2 (ok), min() says L5 (blocked). This is the core differentiation vs any traditional scorecard.

**Circuit breakers (override to L5):** Pending litigation, SCP without governance, token without secondary market, repurchase without funding, incomplete data preventing evaluation.

### Invariants

- Effective liquidity score is ALWAYS min(9 dimensions) — no averaging, no weighting
- Circuit breakers override calculated score to L5 regardless of other dimensions
- Score cannot be computed if critical data is missing (must flag, not estimate)
- Every score computation is logged with full input data for audit
- Macro state (Selic, IPCA) modulates all dimensions and must be current

### Domain Events

| Event | Payload | Consumed By |
| --- | --- | --- |
| `LiquidityScored` | asset_id, 9 scores, effective, gargalo, prescriptions | BC5, BC6, BC12 |
| `LiquidityTriggered` | asset_id, trigger_type, execution_mode | BC5 (creates Channel), BC6 (activates agents), BC9 (prepares billing) |
| `TransactionInitiated` | transaction_id, type, value, parties | BC9, BC11 |
| `TransactionCompleted` | transaction_id, final_value, take_rate | BC9, BC11 |
| `GargaloDetected` | entity_id, dimension, score, prescription | BC12 (alert), BC6 (activate skill agent) |

---

## BC6: Agent Orchestration

### Entities

| Entity | Identity | Key Attributes |
| --- | --- | --- |
| **AgentDefinition** | agent_id | role, type (core/team/orbital/kernel/system), skills, connectors, policies, autonomy_level, bounded_contexts |
| **AgentInstance** | instance_id | agent_definition_id, status (idle/working/error), current_task, memory_state |
| **Topology** | topology_id | pattern (orchestrator-worker/pipeline/fan-out/hierarchical), agents involved, trigger |
| **Handoff** | handoff_id | from_agent, to_agent, task_context, status |

### 5 Topological Patterns (from Arquitetura Agêntica Report)

1. **Liquidity Diagnosis** — Entity + Kernel + Skill(research) + Skill(viz) → Score + prescriptions
2. **Commitment-to-Fund** — Skill(underwriting) + Skill(pricing) + Kernel(creditor,guarantee) + Entity(bank) → Credit commitment
3. **Securitization Matching** — Entity(incorporadora) + Kernel(9dim) + Skill(structuring) + Entity(securitizadoras) → Term sheet match (AGENT-DRIVEN, no human trigger)
4. **Continuous Monitoring** — Entity(CRI/SPE) + Kernel(guarantee,market) + Skill(alert) → Degradation alerts
5. **Cross-Institutional Agent-to-Agent** — Agent(Fund) + Agent(Incorporadora) + Orchestrator(mediator) + Kernel → Mediated transaction proposal (Liquid always mediator)

### Invariants

- Orchestrator is singleton per task session
- Agents NEVER bypass Policy evaluation
- Orbital Agents are NEVER invoked directly by users
- Cross-institutional agents NEVER communicate directly — Liquid mediates all
- Agent autonomy level cannot exceed what’s defined in AgentDefinition

---

## BC7: Policy Engine

### Entities

| Entity | Identity | Key Attributes |
| --- | --- | --- |
| **Policy** | policy_id + version | name, type, rules (decision graph), connectors, created_by, workspace_id, is_liquid_default |
| **PolicyExecution** | execution_id | policy_id, inputs, output (deterministic), timestamp, agent_that_called |
| **DecisionGraph** | graph_id | nodes (12 types from Liquid Pass v2), edges, entry_point, terminal_nodes |

### Invariants

- Policy output is ALWAYS deterministic: same inputs = same output
- Agents cannot modify, override, or ignore a Policy result
- Policy changes require human approval and are version-controlled
- Every PolicyExecution is logged immutably
- Liquid-default policies cannot be modified by clients (only by Liquid team)

---

## Connection to Other Reports

- **→ 5.2 Bounded Context Map:** Context boundaries this model implements
- **→ 5.4 Process Architecture:** How these entities interact in cross-context flows
- **→ 5.5 Agentic Architecture:** Agent roles that operate on these entities
- **→ T2.2 Domain Contracts:** Interface contracts between these contexts
- **→ 5.1 Ubiquitous Language:** Terms used in these models