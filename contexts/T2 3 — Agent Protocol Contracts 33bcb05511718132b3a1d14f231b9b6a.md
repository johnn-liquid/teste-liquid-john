# T2.3 — Agent Protocol Contracts

> **Layer:** T2 — Contracts (Cross-Cutting)
> 

> **Last updated:** April 2026
> 

---

## MCP Contracts (Vertical: Agent → Tools)

| MCP Server | Agent(s) | Resources | Tools | Bounded Context |
| --- | --- | --- | --- | --- |
| `mcp-bureaus` | Credit Analyst | Bureau schemas, query history | query_serasa, query_equifax, query_ph3a, query_open_finance | BC8 |
| `mcp-policy-engine` | All agents | Active policies, evaluation history | evaluate_policy, list_policies | BC7 |
| `mcp-entity-store` | All agents | Entity profiles, entity search | get_entity, search_entities, update_entity | BC2 |
| `mcp-knowledge-base` | All agents | KB documents, search | search_kb, get_document | BC2, BC3 |
| `mcp-dashboard` | Dashboard Builder | Dashboard templates, data viz | create_dashboard, update_dashboard | BC3, BC5 |
| `mcp-billing` | Orchestrator | Usage tracking | log_action, get_usage | BC9 |
| `mcp-notifications` | All agents | Notification templates | send_notification, create_inbox_item | BC12 |
| `mcp-kernel` | Kernel Agents, Liquidity Agent | Scoring models, calibration data | score_dimension, aggregate_score, check_circuit_breakers | BC4 |

## A2A Contracts (Horizontal: Agent ↔ Agent)

**Agent Cards (JSON manifest per agent):**

Every agent publishes a card with: name, role, capabilities, bounded contexts, autonomy level, input/output schemas, availability.

**Task Lifecycle:** submitted → working → completed / failed

**Cross-Institutional Rules (from Arquitetura Agêntica Report):**

- Agents from different organizations NEVER communicate directly
- Liquid’s Orchestrator always mediates
- Data filtering: sensitive data stripped before cross-org sharing
- Compliance: CVM/LGPD validation on every cross-org message
- Audit: every cross-org interaction fully logged

## Handoff Protocol

| Element | Specification |
| --- | --- |
| **Handoff message schema** | { from_agent, to_agent, task_context, priority, timeout_seconds, required_output_template } |
| **Escalation** | If receiving agent cannot complete, return to sender with reason |
| **Timeout** | Default 60s for synchronous; configurable for async |
| **Retry** | Max 3 retries before human escalation |

---

## Connection to Other Reports

- **→ 5.5.7 Protocol Architecture:** MCP + A2A detailed spec
- **→ T2.2 Domain Contracts:** Context-level contracts these agents use
- **→ T1.2 Autonomy Map:** Permission levels per agent
- **→ 5.5 Agentic Architecture:** Agent definitions and roles