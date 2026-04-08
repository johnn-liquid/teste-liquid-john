# T3.3 — Outcome Signals

> **Layer:** T3 — Feedback
> 

> **Last updated:** April 2026
> 

---

## Signals the System Collects

| Signal | Source | What It Tells Us |
| --- | --- | --- |
| **Agent output approved/rejected** | Human review | Agent quality, template adequacy, context sufficiency |
| **Output sent back for rework** | Human feedback | Specific areas of agent weakness |
| **Bug in production from agent code** | Production monitoring | Agent code quality, verification gap |
| **Feature adopted/abandoned by users** | Usage analytics | Product-market fit per feature |
| **Metric improved/worsened** | Measurement system (7.3) | Whether changes are working |
| **Operational complexity increased** | Team feedback | Whether automation actually helps |
| **Kernel score vs actual outcome** | Transaction results | Kernel calibration accuracy |
| **Policy evaluation vs real-world result** | Credit default tracking | Policy quality |
| **Repasse completion time** | Operational data | Workflow efficiency |
| **Client NPS/satisfaction** | Surveys, feedback | Overall value delivery |
| **Cost per agent action trend** | Billing data | Unit economics health |
| **Entity resolution accuracy** | Human review of flagged entities | Data quality |

## Signal Routing

| Signal Type | Routes To |
| --- | --- |
| Quality signals | T3.1 (verification improvement), T1.4 (gate updates) |
| Product signals | 3.6 (priority adjustment), 3.2 (capability maturity update) |
| Learning signals | T3.4 (learning loop), 5.5.4 (agent memory) |
| Business signals | 7.2 (company outcomes), 7.4 (forecast update) |
| Governance signals | T1.1 (constitution update), T1.6 (policy update) |

---

## Connection: T3.1, T3.2, T3.4, 7.3