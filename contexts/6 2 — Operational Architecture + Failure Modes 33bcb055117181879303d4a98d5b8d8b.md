# 6.2 — Operational Architecture + Failure Modes

> **Layer:** 6 — Execution & Platform
> 

> **Last updated:** April 2026
> 

---

## 1. Production Support

| Area | Responsibility | SLA |
| --- | --- | --- |
| **Platform availability** | 99.5% uptime target (initially) | P0 incident: response < 15 min |
| **Agent operations** | Monitor agent health, task completion, cost | P1: response < 1 hour |
| **Bureau integrations** | Monitor connector health, response times | P1: response < 1 hour |
| **Billing accuracy** | Verify billing calculations, reconciliation | P0: immediate on billing errors |

## 2. Failure Modes Map

| Failure Mode | Probability | Impact | Symptoms | Automatic Fallback | Human Fallback | Blast Radius |
| --- | --- | --- | --- | --- | --- | --- |
| **Bureau API offline** | Medium | High — credit analysis blocked | Timeout, error responses | Retry 3x, circuit breaker, return partial data with warning | Notify user, suggest retry later | BC8, BC6 (Credit Analyst) |
| **LLM provider outage** | Low | Critical — all agents blocked | API errors, timeouts | Queue tasks, retry on recovery | All agent operations pause; manual fallback | ALL contexts |
| **Entity resolution conflict** | Medium | Medium — potential data quality issue | Duplicate detection alert | Flag for review, do not auto-merge | Human resolves merge decision | BC2 |
| **Policy engine error** | Low | Critical — credit decisions unreliable | Unexpected outputs | Block operation, do not proceed without valid policy result | Escalate to engineering | BC7, BC6 |
| **Orbital Agent no response** | Medium | Medium — external data collection fails | Timeout on external platform | Retry, try alternate channel | Human manually collects data | BC6 (specific task) |
| **Billing calculation error** | Low | Critical — financial impact | Revenue discrepancy | Automatic reconciliation flag | Finance team reviews, corrects | BC9 |
| **Kernel data incomplete** | Medium | High — cannot produce liquidity score | Circuit breaker triggered | Return partial score with explicit gaps | Human reviews what’s missing | BC4 |
| **Cross-institutional message failure** | Medium | Medium | Delivery failure | Retry, queue for later delivery | Operating Side manually follows up | BC6 (cross-inst) |

## 3. Incident Severity Levels

| Severity | Definition | Response SLA | Examples |
| --- | --- | --- | --- |
| **P0 (Critical)** | System-wide impact or data integrity risk | < 15 min response | LLM outage, billing error, entity duplication, policy bypass |
| **P1 (High)** | Major feature blocked, client impact | < 1 hour | Bureau offline, agent failures, dashboard errors |
| **P2 (Medium)** | Degraded experience, workaround exists | < 4 hours | Slow performance, UI bugs, notification delays |
| **P3 (Low)** | Minor issue, no client impact | Next sprint | Cosmetic issues, minor inconsistencies |

---

## Connection to Other Reports

- **→ 5.2 Bounded Context Map:** Which contexts each failure affects
- **→ 5.5 Agentic Architecture:** Agent-specific failure modes
- **→ T1.1 Product Constitution:** C7 (speed vs correctness exceptions)
- **→ 7.3 Measurement Architecture:** Monitoring metrics that detect failures