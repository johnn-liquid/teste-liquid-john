# T4.1 — Context File Architecture

# Report T4.1 — Context File Architecture

> **Layer:** T4 — Context Engineering (Cross-Cutting)
> 

> **Question this answers:** How does each layer of documentation materialize into agent-consumable files?
> 

> **Last updated:** April 2026
> 

> **Sources:** Context Map v3, Anthropic research (Context Engineering, Sep 2025), [AGENTS.md](http://AGENTS.md) standard, Brain Dumps (context engineering notes)
> 

---

## 1. Purpose

This report defines how the Liquid OS Context Map documentation transforms from human-readable Notion pages into structured files that agents can efficiently consume. Without this bridge, context exists but agents cannot use it.

**Principle:** "Context engineering has replaced prompt engineering as the defining discipline of AI-assisted development." — Andrej Karpathy / Anthropic Sep 2025

---

## 2. File Architecture

### Root Context File ([AGENTS.md](http://AGENTS.md) or [CLAUDE.md](http://CLAUDE.md))

**Location:** Repository root

**Max size:** 200-300 lines

**Content:** Pointers, not copies

Structure:

```
# Liquid OS — Agent Context (Root)

## Product Constitution (from T1.1)
[C1-C10 principles, verbatim]

## Conflict Resolution Hierarchy
[Priority hierarchy from T1.1]

## Ubiquitous Language (from 5.1)
[Core terms only — 20-30 most critical]
@import ./docs/domain-terms.md

## Bounded Context Overview (from 5.2)
[List of contexts with one-line descriptions]
[Relationships summary]

## Current Cycle Focus (from 3.6)
[Top 3 priorities]
[Frozen items]
[Active trade-offs]

## Architecture Principles
- Agentic-first (ADR-002)
- Entity-unique-in-root (ADR-004)
- Policy-as-Code (ADR-005)
- Global by design (ADR-003)

## File Organization
@import ./docs/context-map.md (overview)
Per-context files: ./contexts/{context-name}/CONTEXT.md
Per-agent files: ./agents/{agent-role}/AGENT.md
ADRs: ./docs/adrs/ADR-{number}.md
```

---

### Per-Context Files

**Location:** `./contexts/{context-name}/CONTEXT.md`

**One file per bounded context** (from Report 5.2)

Example structure for `./contexts/liquidity-operations/CONTEXT.md`:

```
# Liquidity Operations Context

## Entities
- LiquidityChannel: [attributes, lifecycle]
- LiquidityTrigger: [conditions, thresholds]
- Transaction: [states, transitions]

## Invariants (rules that can NEVER be violated)
- A liquidity channel cannot be created without a valid trigger
- Transaction value must match verified asset valuation
- Human approval required for transactions above threshold

## Domain Events
- LiquidityTriggered: [schema, consumers]
- TransactionInitiated: [schema, consumers]
- TransactionCompleted: [schema, consumers]

## Policies
- LiquidityEligibilityPolicy: [deterministic rules]
- TransactionApprovalPolicy: [thresholds, escalation]

## Relevant ADRs
@import ../../docs/adrs/ADR-008.md (Channel de Liquidez)
@import ../../docs/adrs/ADR-005.md (Policy-as-Code)

## Contracts
- Events emitted: [list with schemas]
- Events consumed: [list with source contexts]
- APIs exposed: [endpoints]
```

Planned contexts (from 5.2, to be refined):

- `identity-workspace/`
- `client-management/`
- `market-entity-intelligence/`
- `liquidity-operations/`
- `tasks-cases/`
- `agent-orchestration/`
- `connectors-data-ingestion/`
- `billing/`
- `growth/`
- `governance-audit/`
- `notifications/`

---

### Per-Agent Files

**Location:** `./agents/{agent-role}/AGENT.md`

Example structure for `./agents/orchestrator/AGENT.md`:

```
# Orchestrator Agent

## Role
Orchestrate flow between user and specialized agents.
Decide routing, sequencing, and synchronization.

## Bounded Context
Primary: Agent Orchestration
Reads from: All contexts (metadata only)

## Skills
- Route tasks to appropriate agents
- Detect liquidity opportunities (invoke Liquidity Agent)
- Manage conversation context and state

## Tools (MCP)
- task-router: Route task to specific agent
- context-loader: Load bounded context on demand
- user-notifier: Send notifications to user inbox

## Limits
- Cannot execute domain operations directly
- Cannot override Policies
- Cannot access raw bureau data (must go through Credit Analysis agent)
- Max parallel agent invocations: 3

## Output Templates
@import ../../docs/templates/task-routing.md
@import ../../docs/templates/agent-handoff.md

## Decision Boundaries
- Autonomy Level: 3 (can route and coordinate, cannot make domain decisions)
- Escalation: If routing is ambiguous, ask user
- Timeout: If sub-agent doesn't respond in 60s, notify user
```

Planned agent roles:

- `orchestrator/`
- `monitoring-entity/`
- `skill-agent/`
- `liquidity-agent/`
- `credit-analyst/`
- `repasse-coordinator/`
- `orbital-whatsapp/`
- `dashboard-builder/`
- `infra-data/`

---

## 3. Rule Types

| Type | Behavior | Example |
| --- | --- | --- |
| **Always** | Loaded in every agent session | Product Constitution (C1-C10), Ubiquitous Language core terms |
| **Auto-attached** | Triggered by file/context pattern | `.billing.ts` → loads Billing context; `.policy.ts` → loads Policy governance rules |
| **Agent-requested** | Loaded when agent judges it relevant | Market intelligence data, competitive context, historical ADRs |

---

## 4. Import Hierarchy

Up to 5 levels of recursive `@import` inclusions:

```
Level 0: AGENTS.md (root)
  Level 1: ./docs/domain-terms.md
  Level 1: ./contexts/{context}/CONTEXT.md
    Level 2: ../../docs/adrs/ADR-{n}.md
    Level 2: ./models/{entity}.md
      Level 3: ./schemas/{schema}.json
  Level 1: ./agents/{role}/AGENT.md
    Level 2: ../../docs/templates/{template}.md
```

---

## 5. Iterative Principle

**Add a rule only when the agent repeats the same mistake twice.**

Don’t front-load every possible rule. Start minimal, observe agent behavior, and add rules/context as patterns emerge. Each new rule should be justified by a documented failure.

Process:

1. Agent makes mistake
2. Human corrects and documents
3. Agent makes same mistake again
4. New rule added to appropriate context file
5. Rule tagged with origin (which mistake prompted it)

---

## 6. First Version (MVP)

For the current cycle (Report 3.6), the minimal viable context file architecture:

1. [**AGENTS.md**](http://AGENTS.md) with Product Constitution + core Ubiquitous Language + current priorities
2. **One per-context file** for the first bounded context being built (likely `tasks-cases/` or `liquidity-operations/`)
3. **One per-agent file** for the Orchestrator (first agent to be implemented)
4. **ADR directory** with the 10 ADRs from Report 3.5

Everything else grows iteratively as the system develops.

---

## 7. Connection to Other Reports

- **→ T1.1 Product Constitution:** Content loaded into root context file
- **→ 5.1 Ubiquitous Language:** Living glossary referenced from root
- **→ 5.2 Bounded Context Map:** Determines the per-context file structure
- **→ 5.5 Agentic Architecture:** Determines the per-agent file structure
- **→ T4.2 Context Window Strategy:** How to manage what gets loaded when
- **→ T4.4 KB Architecture for Agents:** Detailed playbook and retrieval specification
- **→ 6.1 Development Architecture:** How context files integrate into the dev workflow