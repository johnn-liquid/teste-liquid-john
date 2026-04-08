# T3.4 — Learning Loop

> **Layer:** T3 — Feedback (Cross-Cutting)
> 

> **Last updated:** April 2026
> 

---

## How Signals Become Learning

| Signal Source | Learning Mechanism | Output |
| --- | --- | --- |
| **Human rejection of agent output** | Pattern analysis on rejections | Updated quality gates (T1.4), new rules in context files (T4.1) |
| **Policy evaluation mismatch** | Policy result vs expected outcome tracking | Policy calibration update, new policy proposals |
| **Kernel score vs actual outcome** | Track scored vs realized liquidity | Kernel threshold recalibration (by Context Engineers) |
| **Self-correction patterns** | Track what agents correct and how | New procedural memory (.md files) for common fixes |
| **Recurring errors** | Same mistake 3+ times | New rule in Product Constitution or context file |
| **Successful operations** | Track what worked and patterns | Reinforced templates, expanded playbooks |
| **Agent Decision Records (AgDRs)** | Accumulated decisions with outcomes | AgDRs that prove correct become permanent rules |
| **Client feedback** | Direct feedback on agent quality | Feature adjustments, agent skill improvements |
| **Transaction outcomes** | Completed liquidity transactions | Matching algorithm improvement, pricing calibration |

## Feedback Cadences

| Cadence | What Happens |
| --- | --- |
| **Real-time** | Self-correction (Layer 3 verification) |
| **Daily** | Rejection pattern review, error flagging |
| **Weekly** | Context engineer reviews AgDRs, proposes new rules |
| **Sprint** | Quality gate updates, procedural memory extraction |
| **Quarterly** | Kernel recalibration, comprehensive learning review |

## Procedural Memory Extraction

After complex task completion, extract generalizable skills as `.md` files:

1. Agent completes a complex task successfully
2. System prompts: "Extract generalizable pattern from this task"
3. Agent produces skill description with: trigger conditions, steps, edge cases, verification criteria
4. Context Engineer reviews and approves
5. Skill stored in procedural memory, version-controlled in git
6. Available to all agents of same type without fine-tuning

---

## Connection to Other Reports

- **→ T3.1 Verification:** Signals come from verification layers
- **→ T3.3 Outcome Signals:** What signals are collected
- **→ T4.1 Context Files:** Where learned rules are stored
- **→ 5.5.4 Agent Memory:** Procedural memory system
- **→ T1.1 Product Constitution:** Recurring conflicts become new rules