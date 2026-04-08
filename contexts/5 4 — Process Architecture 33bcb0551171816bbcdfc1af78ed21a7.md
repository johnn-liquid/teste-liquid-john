# 5.4 — Process Architecture

> **Layer:** 5 — Domain & System
> 

> **Question this answers:** How do cross-context flows work? What events connect everything?
> 

> **Last updated:** April 2026
> 

> **Sources:** 5.2 Bounded Context Map, 5.3 Domain Model, 5.5 Agentic Architecture, Liquid OS Arquitetura Agêntica Report
> 

---

## 1. Primary Cross-Context Flows

### Flow 1: Credit Analysis (Wedge Operation)

```
User creates Task (BC5)
  → Orchestrator receives (BC6)
  → Orchestrator invokes Credit Analyst Agent (BC6)
  → Credit Agent queries bureaus via Connectors (BC8)
  → Credit Agent calls Policy Engine for deterministic decision (BC7)
  → Policy Engine returns result + audit record (BC7 → BC11)
  → Credit Agent compiles report artifact (BC6)
  → Orchestrator delivers to user (BC6 → BC5)
  → If score indicates liquidity potential:
      → Liquidity Agent invoked (BC4)
      → Kernel scores 9 dimensions (BC4)
      → If trigger criteria met → LiquidityTriggered event
```

### Flow 2: Liquidity Channel Activation

```
LiquidityTriggered event emitted (BC4)
  → BC5 creates Channel de Liquidez on Client Side
  → BC5 creates mirror Channel on Operating Side
  → BC12 notifies client workspace admins (Inbox)
  → BC12 notifies Operating Side team (Inbox)
  → BC6 assigns relevant agents to channel:
      - Liquidity Agent (assessment)
      - Repasse Coordinator or Skill Agents (per execution mode)
      - Entity Agents for relevant market entities
  → BC9 prepares billing context for transaction
  → BC11 begins audit trail for the operation
  → Human-in-the-loop: Operating Side team reviews and approves
```

### Flow 3: Securitization Matching (Agent-Driven, No Human Trigger)

```
Entity Agent detects receivable accumulation above threshold (BC3)
  → Publishes event to Orchestrator (BC6)
  → Orchestrator invokes Kernel Agents for 9-dimension scoring (BC4)
  → Kernel identifies gargalo and prescribes execution mode (BC4)
  → If Mode 2 (securitization): Skill Agent (structuring) creates term sheet (BC6)
  → Entity Agents for securitizadoras check appetite (BC3)
  → Orchestrator presents match to user (BC6 → BC5)
  → If user approves: LiquidityTriggered → Flow 2
```

### Flow 4: Commitment-to-Fund (High Volume)

```
Incorporadora submits CPF + property via Task (BC5)
  → Skill Agent (underwriting) evaluates PF creditworthiness (BC6+BC8)
  → Skill Agent (pricing) generates financial simulation (BC6)
  → Kernel Agents score Creditor + Guarantee dimensions (BC4)
  → Entity Agents consult bank partners for terms (BC3)
  → Commitment letter generated (BC6)
  → Delivered to user in < 48 hours (BC5)
  → BC9 logs billable action
  Revenue: take rate 1-2% of VGV
  Target: 300 ops/month
```

### Flow 5: Continuous Monitoring (Background)

```
Entity Agent detects covenant degradation (BC3, continuous)
  → Kernel Agents re-score affected dimensions (BC4)
  → If score drops below threshold:
      → Skill Agent (alert) generates alert (BC6)
      → BC12 delivers alert to subscribed users (Inbox + Dashboard)
      → BC11 logs the detection and alert
```

---

## 2. Handoffs Between Contexts

| From | To | Handoff Mechanism | SLA |
| --- | --- | --- | --- |
| BC5 (Tasks) → BC6 (Agents) | Task assignment | Domain event `TaskCreated` | < 5 seconds |
| BC6 (Agents) → BC8 (Connectors) | Bureau query | MCP tool invocation | < 30 seconds per bureau |
| BC6 (Agents) → BC7 (Policy) | Policy evaluation | MCP tool invocation | < 5 seconds |
| BC4 (Liquidity) → BC5 (Tasks) | Channel creation | Domain event `LiquidityTriggered` | < 30 seconds |
| BC3 (Intelligence) → BC6 (Agents) | Entity update | Domain event `EntityEnriched` | Minutes (async) |
| BC4 (Liquidity) → BC9 (Billing) | Transaction billing | Domain event `TransactionCompleted` | < 1 minute |

---

## 3. Critical States and Exception Points

| Exception | Context | Handling |
| --- | --- | --- |
| Bureau API timeout | BC8 | Retry 3x with backoff; if all fail, return partial result with warning |
| Policy evaluation error | BC7 | Cannot proceed — agent stops, logs error, notifies user |
| Entity resolution ambiguity | BC2 | Flag for human review; cannot auto-merge |
| Kernel data incomplete | BC4 | Circuit breaker: cannot compute score, flag missing data |
| Orbital Agent no response | BC6 | Timeout after configurable period; escalate to human |
| Cross-institutional agent conflict | BC6 | Orchestrator mediates; if unresolvable, escalate to Operating Side |

---

## 4. Communication Protocols (from Arquitetura Agêntica Report)

| Protocol | When | Latency | Pattern |
| --- | --- | --- | --- |
| **Synchronous (Request-Response)** | User asks question in Stage | 2-30 seconds | Orchestrator fan-out parallel, barrier wait, merge |
| **Asynchronous (Event-Driven)** | Entity Agent detects signal, no human trigger | Minutes to hours | Publish-subscribe via internal event bus |
| **Cross-Institutional (Mediated)** | Agents of different organizations interact | Hours to days | Mandatory Orchestrator mediation; validates permissions, filters sensitive data, ensures CVM/LGPD compliance |

---

## 5. Connection to Other Reports

- **→ 5.2 Bounded Context Map:** Context boundaries these flows cross
- **→ 5.3 Domain Model:** Events referenced here are defined there
- **→ 5.5 Agentic Architecture:** Agent topologies that execute these flows
- **→ T2.2 Domain Contracts:** Formal contracts for cross-context communication
- **→ 6.2 Operational Architecture:** Failure modes when these flows break