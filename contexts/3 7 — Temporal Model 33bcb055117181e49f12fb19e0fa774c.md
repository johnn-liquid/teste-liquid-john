# 3.7 — Temporal Model

> **Layer:** 3 — Product Strategy
> 

> **Question this answers:** Where are we in time? What are the phases, milestones, and expected evolution?
> 

> **Last updated:** April 2026
> 

> **Sources:** Report 3.6 (Execution Intent), Report 2.4 (Opportunity Map), Report 3.2 (Capability Map), Brain Dumps (90-day focus, $10M ARR target)
> 

---

## 1. Current Product Phase

**Phase: Late Discovery / Early MVP**

Liquid has validated components (Liquid Pass production, Soma operations, portfolio transactions) but the unified agentic platform is pre-MVP. The company is in transition from isolated products to unified platform.

---

## 2. Milestones

| # | Milestone | Target Date | Completion Criteria | Phase |
| --- | --- | --- | --- | --- |
| M1 | **Context Map Foundation Complete** | May 2026 | Phase 1 + Phase 2 reports published, root context file created, team review complete | Discovery |
| M2 | **Platform Architecture Validated** | June 2026 | Entity model designed, bounded contexts implemented, basic agent orchestration running, tech stack decided | Discovery |
| M3 | **First Agentic Repasse** | July 2026 | One complete repasse workflow running with agent assistance; one real contract processed | MVP |
| M4 | **Policy Builder MVP** | Aug 2026 | Credit policy creation and deterministic enforcement working; at least 3 policies from Soma migrated | MVP |
| M5 | **Platform Beta (5 clients)** | Sep 2026 | Five incorporadoras actively using agentic repasse + credit analysis on new platform | MVP |
| M6 | **Intelligence Layer Live** | Nov 2026 | Market dashboard + basic Monitoring Agents + continuous portfolio monitoring active | PMF |
| M7 | **First Liquidity Transaction on Platform** | Dec 2026 | At least one portfolio transaction or structured liquidity operation completed with take rate | PMF |
| M8 | **$10M ARR Run Rate** | Dec 2026 | Monthly revenue × 12 ≥ $10M | PMF |
| M9 | **Series A Ready** | Q1 2027 | Metrics, narrative, and product demonstrating product-market fit | Scale |

---

## 3. Execution Cycle

**Cadence:** 2-week sprints within 13-week (90-day) strategic cycles.

| Level | Duration | Purpose | Artifact |
| --- | --- | --- | --- |
| **Strategic cycle** | 90 days | Set top 3 priorities, frozen items, trade-offs | Execution Intent update (3.6) |
| **Sprint** | 2 weeks | Deliver incremental capabilities | Sprint review |
| **Daily** | Daily | Agent + human sync on active tasks | Standup / async update |

---

## 4. Expected Maturity per Capability

From Report 3.2, capability maturity targets by milestone:

| Capability | Now | M3 (Jul) | M5 (Sep) | M7 (Dec) |
| --- | --- | --- | --- | --- |
| CAP-01: Data ingestion | 🟢 Functional | 🟢 Functional | 🟢 Robust | 🟢 Robust |
| CAP-03: Entity resolution | 🔴 Nonexistent | 🟡 Prototype | 🟢 Functional | 🟢 Functional |
| CAP-05: Risk calculation | 🟢 Functional | 🟢 Functional | 🟢 Robust | 🟢 Robust |
| CAP-10: Agent orchestration | 🔴 Nonexistent | 🟡 Prototype | 🟢 Functional | 🟢 Functional |
| CAP-11: Policy execution | 🟢 Functional | 🟢 Functional | 🟢 Robust | 🟢 Robust |
| CAP-12: Human+agent workflows | 🟡 Prototype | 🟢 Functional | 🟢 Functional | 🟢 Robust |
| CAP-13: Audit trails | 🟡 Prototype | 🟡 Prototype | 🟢 Functional | 🟢 Robust |
| CAP-14: Billing | 🔴 Nonexistent | 🔴 Nonexistent | 🟡 Prototype | 🟢 Functional |
| CAP-15: Repasse lifecycle | 🟡 Prototype | 🟢 Functional | 🟢 Functional | 🟢 Robust |
| CAP-16: Dashboards | 🟡 Prototype | 🟡 Prototype | 🟡 Prototype | 🟢 Functional |
| CAP-17: Orbital Agents | 🔴 Nonexistent | 🔴 Nonexistent | 🟡 Prototype | 🟡 Prototype |
| CAP-18: Liquidity transactions | 🟡 Prototype | 🟡 Prototype | 🟡 Prototype | 🟢 Functional |

---

## 5. Planning Horizon

| Horizon | Coverage | Confidence |
| --- | --- | --- |
| **0-13 weeks (current cycle)** | Committed plan with sprint-level detail | High |
| **13-26 weeks** | Milestone targets with flexibility on implementation | Medium |
| **26-52 weeks** | Directional goals (M7, M8) with significant uncertainty | Low |
| **52+ weeks** | Strategic aspirations (global expansion, new verticals) | Speculative |

---

## 6. Expected Evolution per Bounded Context

| Context | Current | M3 | M5 | M7 | Complexity Trend |
| --- | --- | --- | --- | --- | --- |
| BC1: Identity | Existing (basic) | Functional | Stable | Stable | → Flat |
| BC2: Entity | Nonexistent | Prototype | Functional | Functional | ↑ Grows significantly |
| BC3: Market Intel | Nonexistent | — | Prototype | Functional | ↑ Grows |
| BC4: Liquidity | Prototype (manual) | Prototype (agent) | Functional | Functional | ↑↑ Highest growth |
| BC5: Tasks | Nonexistent | Functional | Functional | Robust | → Stabilizes after M3 |
| BC6: Agent Orchestration | Nonexistent | Prototype | Functional | Functional | ↑↑ Core complexity |
| BC7: Policy | Functional (Pass v2) | Functional | Robust | Robust | → Stabilizes early |
| BC8: Connectors | Functional (bureaus) | Functional | Functional+ | Robust | ↑ Gradual expansion |
| BC9: Billing | Nonexistent | — | Prototype | Functional | ↑ Grows in M5-M7 |
| BC10: Growth | Nonexistent | — | Prototype | Functional | ↑ Grows in M5-M7 |
| BC11: Governance | Prototype | Prototype | Functional | Robust | ↑ Critical for compliance |
| BC12: Notifications | Nonexistent | Prototype | Functional | Functional | → Standard |

---

## 7. Connection to Other Reports

- **→ 3.6 Execution Intent:** Current cycle’s priorities within this timeline
- **→ 3.2 Capability Map:** Maturity levels referenced here
- **→ 5.2 Bounded Context Map:** Contexts referenced in evolution plan
- **→ 2.4 Opportunity Map:** Opportunity phases aligned with this timeline
- **→ 1.5 Financial Reality:** Financial constraints affecting timeline
- **→ 7.4 Forecasting:** Revenue projections aligned with milestones