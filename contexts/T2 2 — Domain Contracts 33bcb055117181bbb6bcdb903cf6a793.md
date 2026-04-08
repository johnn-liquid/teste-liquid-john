# T2.2 — Domain Contracts

> **Layer:** T2 — Contracts (Cross-Cutting)
> 

> **Last updated:** April 2026
> 

---

## Contract Structure

For each bounded context, explicit and versioned contracts:

### BC4: Liquidity Operations (Example — Core)

**Events Emitted:**

- `LiquidityScored` — v1 — { asset_id, scores[9], effective, gargalo, prescriptions[], timestamp }
- `LiquidityTriggered` — v1 — { asset_id, trigger_type, execution_mode, workspace_id }
- `TransactionInitiated` — v1 — { transaction_id, type, value, parties[], channel_id }
- `TransactionCompleted` — v1 — { transaction_id, final_value, take_rate, settlement_date }

**Events Consumed:**

- `EntityEnriched` from BC2 — triggers re-scoring
- `PolicyEvaluated` from BC7 — compliance check on transaction
- `BureauDataReceived` from BC8 — fresh data for scoring

**APIs Exposed:**

- `POST /liquidity/score` — Score an asset across 9 dimensions
- `GET /liquidity/channels/{id}` — Channel status and timeline
- `POST /liquidity/transactions` — Initiate transaction (human approval required)

**Aggregate Invariants:**

- Effective score = min(9 dimensions) — NEVER averaged
- Circuit breakers override to L5 regardless of calculation
- Transaction cannot proceed without valid kernel score
- Channel cannot be created without valid trigger

### Contract Template (for remaining contexts)

Each bounded context must document: Events emitted (name, version, schema), Events consumed (name, source context), APIs exposed (endpoints, inputs, outputs, auth), Aggregate invariants (rules that can NEVER be violated), Pre/post-conditions for each operation.

---

## Connection to Other Reports

- **→ 5.2 Bounded Context Map:** Context relationships this formalizes
- **→ 5.3 Domain Model:** Entities and events referenced
- **→ 5.4 Process Architecture:** Flows these contracts enable
- **→ T2.3 Agent Protocol Contracts:** Agent-specific contracts