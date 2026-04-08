# 3.6 — Execution Intent (Current Cycle)

> **Layer:** 3 — Product Strategy
> 

> **Question this answers:** Where do we act NOW? What’s frozen? What’s being explored?
> 

> **Last updated:** April 2026
> 

> **Volatility:** 🔴 HIGH — This is the most volatile block in the document. Must be updated every cycle.
> 

> **Sources:** CEO Braindump, Brain Dumps (90-day focus note), All Strategy Reports
> 

---

## 1. Current Cycle Priorities (Top 3 — No More)

### Priority 1: Complete Context Map Documentation

**What:** Finish all 56 reports of the Liquid OS Context Map, creating the documentation infrastructure that enables agent-assisted development and team alignment.

**Why:** Months of undocumented thinking must be externalized. Without this, the team cannot execute the unified platform vision. The documentation IS the infrastructure for agents.

**Definition of done:** All Phase 1 and Phase 2 reports complete. Root context file created. Team has reviewed and validated.

**Owner:** CEO + Context Engineering support

### Priority 2: Liquid OS Platform Architecture (Foundation)

**What:** Design and begin implementing the unified platform architecture — core entity model, bounded contexts, agent orchestration framework, Policy-as-Code engine foundation.

**Why:** The platform unification (ADR-001) cannot proceed without foundational architecture. This blocks everything downstream.

**Definition of done:** Entity model designed and validated; bounded context map implemented; basic agent orchestration working; Policy Builder MVP spec approved.

**Owner:** CTO / Architecture lead

### Priority 3: First Agentic Repasse Workflow

**What:** Take one Soma Repasse workflow (most standardized) and implement it as an agent-assisted process on the new platform. Proof that agents + policies + connectors can replace manual analyst work.

**Why:** This is the wedge (Report 2.4, CO1+CO2). If we can’t agentify repasse, the entire product thesis stalls. This also provides the first real test of the agent architecture.

**Definition of done:** One complete repasse workflow (from buyer qualification to bank submission) running with agent assistance on the new platform. At least one real contract processed.

**Owner:** Product + Engineering + Soma Operations

---

## 2. Frozen Focus (Explicitly NOT Touched This Cycle)

| Item | Why Frozen | Revisit Trigger |
| --- | --- | --- |
| **Market Intelligence Dashboard ("Agentic Bloomberg")** | Requires Monitoring Agents and data infrastructure not yet built; would distract from platform foundation | After Priority 2 is complete |
| **Portfolio Transaction Marketplace** | Requires network effects and multiple stakeholders on platform | After Phase 2 opportunities are active |
| **Tokenization layer** | Regulatory framework incomplete; not core to immediate revenue | If regulatory clarity emerges or investor demand requires it |
| **Cross-border expansion** | Architecture is global by design, but GTM focus is Brazil only | After platform proves PMF in Brazil |
| **Personal version** | Reduces focus from primary ICP (incorporadoras); features TBD | After enterprise version is stable |
| **Astro (System Agent building the app)** | Aspirational; current priority is building the platform, not building the builder | After development workflow (6.1) is mature |

---

## 3. In Exploration (No Commitment)

| Item | What’s Being Explored | Decision Trigger |
| --- | --- | --- |
| **Entity model design** (ADR-004) | How to implement entity-unique-in-root while respecting LGPD | Legal counsel input + architectural PoC |
| **Orbital Agents PoC** (ADR-009) | WhatsApp BSP integration feasibility, consent flow design | PoC result within 4-6 weeks |
| **Policy Builder UX** | What level of no-code complexity works for credit professionals | User research with Soma clients |
| **Pricing model** | Optimal pricing structure for SaaS + agentic billing + take rate | Market research + financial modeling |
| **Community strategy** | What form the stakeholder community takes (forum? content hub? marketplace?) | PLG strategy validation |

---

## 4. Active Prioritization Criteria

The rule in effect for this cycle:

> **"Platform foundation > Repasse agentification > Documentation > Everything else"**
> 

In case of conflict:

1. Does it contribute to platform architecture stability? → Do it
2. Does it contribute to the first agentic repasse workflow? → Do it
3. Does it contribute to Context Map completion? → Do it
4. Everything else → Backlog

---

## 5. Active Trade-offs

| Trade-off | What We Accept | What We Get |
| --- | --- | --- |
| Imperfect billing UX | Billing setup may be manual for first clients | Focus on core agentic workflows |
| Limited dashboard quality | First dashboards will be basic, not "Bloomberg-level" | Ship intelligence layer faster |
| Soma continues on [Monday.com](http://Monday.com) (temporary) | Manual operations continue for existing clients | Engineering focuses on new platform |
| English-only documentation | Excludes Portuguese-only team members temporarily | Maintains Global by Design principle |
| Single LLM provider (Claude) | Vendor dependency risk | Faster development with deep MCP integration |

---

## 6. Re-Prioritization Triggers

| Trigger | What Changes |
| --- | --- |
| **Existing client churn > 15%** | Legacy product maintenance becomes P0; pause new platform work |
| **Liquidity transaction opportunity arises** | Channel de Liquidez spec becomes urgent; fast-track to capture revenue |
| **Funding round closes** | Team expansion unlocks parallel tracks; review frozen items |
| **Regulatory enforcement action in market** | Compliance infrastructure becomes P0 |
| **LLM cost spike > 2x** | Re-evaluate agentic-first approach; optimize token usage |
| **Key hire (data architect, agent specialist)** | Unblock Priority 2; accelerate entity model and agent architecture |

---

## 7. 90-Day Horizon

Based on the braindump’s 90-day focus mandate:

| Week | Focus | Deliverable |
| --- | --- | --- |
| 1-2 | Context Map Phase 1 + 2 reports | Strategy and Problem layers documented |
| 3-4 | Platform architecture design | Entity model, bounded contexts, tech stack decision |
| 5-6 | Agent orchestration framework | Basic Orchestrator + Skill Agent working |
| 7-8 | Repasse workflow PoC | First end-to-end agent-assisted repasse |
| 9-10 | Policy Builder MVP | Credit policy creation and enforcement working |
| 11-12 | Integration + testing | End-to-end flow with real data; first real contract |
| 13 | Review + next cycle planning | Retrospective, decision on Phase 2 priorities |

---

## 8. Connection to Other Reports

- **→ 3.7 Temporal Model:** Longer-term timeline that this cycle fits into
- **→ 2.4 Opportunity Map:** Which opportunities we’re pursuing now vs. later
- **→ 3.5 ADRs:** Decisions that constrain this cycle’s options
- **→ T1.1 Product Constitution:** Principles that govern prioritization
- **→ 1.5 Financial Reality:** Financial constraints affecting timeline