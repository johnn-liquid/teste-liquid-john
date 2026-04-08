# T1.6 — Policy & Governance Model

> **Layer:** T1 — Governance
> 

> **Last updated:** April 2026
> 

---

## Authorization Model

| Level | Who Can See | Who Can Decide | Who Can Automate |
| --- | --- | --- | --- |
| **Workspace data** | All workspace members (per role) | Workspace admins | Users with agent creation permission |
| **Cross-workspace entity data** | Liquid internal only (Operating Side) | Liquid data team + DPO | Monitoring Agents (Liquid-controlled) |
| **Policy definitions** | Workspace members | Workspace admins + Policy editors | Policy Builder (human creates, agents follow) |
| **Billing data** | Workspace billing admin | Workspace owner | System (automatic tracking) |
| **Audit trails** | Workspace admins (own data), Operating Side (all) | Nobody (immutable) | System (automatic recording) |
| **Liquidity operations** | Channel participants | Human approvers + Operating Side | Agents within channel (per autonomy map) |

## Audit Trail Requirements

- **Immutability:** Once recorded, audit entries cannot be modified or deleted
- **Completeness:** Every agent action, policy evaluation, data access, and human decision is logged
- **Retention:** Minimum 5 years (align with financial regulation requirements)
- **Queryability:** Audit data must be searchable by entity, user, agent, action type, time range
- **Export:** Audit data exportable for external auditors

## Explainability Rules

- Every credit decision must include: data sources used, policy evaluated, score rationale, human approver (if applicable)
- Every kernel score must include: inputs per dimension, formula applied, circuit breakers checked
- Every agent decision must be traceable via AgDR (Agent Decision Record)

## OWASP Agentic AI Top 10 Checklist

| Risk | Mitigation in Liquid |
| --- | --- |
| Goal hijacking | Policies are unbreakable; agent cannot change its own objectives |
| Tool misuse | MCP tool access scoped per agent role; Autonomy Map limits |
| Identity abuse | Agent identity is not conflated with user identity; separate auth |
| Memory poisoning | Memory updates validated; suspicious patterns flagged |
| Cascading failures | Circuit breakers per context; blast radius containment |
| Rogue agents | All agents registered in AgentDefinition; no ad-hoc agents |

---

## Connection to Other Reports

- **→ T1.1 Product Constitution:** Principles this model enforces
- **→ T1.2 Autonomy Map:** Permission levels referenced here
- **→ BC11 Governance & Audit:** Technical implementation
- **→ 5.5 Agentic Architecture:** Agent-specific governance