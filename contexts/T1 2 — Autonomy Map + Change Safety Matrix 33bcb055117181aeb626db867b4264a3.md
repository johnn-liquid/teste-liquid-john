# T1.2 — Autonomy Map + Change Safety Matrix

> **Layer:** T1 — Governance (Cross-Cutting)
> 

> **Last updated:** April 2026
> 

---

## Autonomy Levels by Action Type

| Level | Permission | Example in Liquid |
| --- | --- | --- |
| 1 | Research, structure, and suggest | Agent analyzes market entity and proposes risk assessment approach |
| 2 | Decompose tasks, write specs, propose architecture | Agent generates credit analysis spec with all fields |
| 3 | Generate output in safe, low-risk areas | Agent creates dashboard following templates, generates research report |
| 4 | Execute within explicit limits | Agent runs bureau queries, evaluates policies, produces credit report within Policy constraints |
| 5 | Complete workflow, propose to human | Agent completes full credit analysis, submits for human review |
| 6 | Execute sensitive changes with human approval | Agent recommends liquidity trigger activation; human confirms |

## Change Safety Matrix

| Change Type | Risk | Max Autonomy |
| --- | --- | --- |
| Dashboard content update | Low | Level 5 |
| KB document restructuring | Low | Level 4 |
| Credit analysis (below threshold) | Medium | Level 5 (human reviews) |
| Credit analysis (above threshold) | High | Level 6 (human must approve) |
| Policy creation/modification | Critical | Level 1 (suggest only) |
| Entity merge/split | Critical | Level 1 + mandatory human |
| Liquidity trigger activation | Critical | Level 6 (human must confirm) |
| Billing calculation changes | Critical | Level 1 + mandatory human |
| Cross-tenant data operations | Critical | Level 1 + mandatory human |
| Orbital Agent external outreach | Medium | Level 4 (within configured templates) |
| Transaction execution | Critical | Level 6 + dual human approval |

## Agent-Specific Autonomy

| Agent | Default Autonomy | Can Be Elevated To | Never Exceeds |
| --- | --- | --- | --- |
| Orchestrator | Level 3 | Level 4 | Level 4 |
| Credit Analyst | Level 4 | Level 5 | Level 5 |
| Monitoring Agent | Level 3 | Level 3 | Level 3 (background only) |
| Liquidity Agent | Level 4 | Level 5 | Level 6 (trigger requires human) |
| Kernel Agent | Level 3 | Level 3 | Level 3 (evaluator, never executor) |
| Skill Agent | Level 4 | Level 5 | Level 5 |
| Orbital Agent | Level 4 | Level 4 | Level 4 |
| Team Agent (client) | Level 3 | Level 5 (client configures) | Level 5 |

---

## Connection to Other Reports

- **→ T1.1 Product Constitution:** Principles these levels enforce
- **→ 5.5 Agentic Architecture:** Agent definitions include autonomy levels
- **→ T1.4 Quality Gates:** Checks applied at each autonomy level transition
- **→ 5.5.8 Human-in-the-Loop:** Detailed spec of human intervention points