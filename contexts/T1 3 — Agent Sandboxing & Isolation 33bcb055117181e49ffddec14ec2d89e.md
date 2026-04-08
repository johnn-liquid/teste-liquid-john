# T1.3 — Agent Sandboxing & Isolation

> **Layer:** T1 — Governance
> 

> **Last updated:** April 2026
> 

> **Research:** Manual approval has become "security theater." Industry converging on automated enforcement via sandboxing. Hierarchy: MicroVMs > gVisor > OS-level > Docker (insufficient).
> 

---

## Isolation Architecture

| Layer | Mechanism | Scope |
| --- | --- | --- |
| **Filesystem** | Agent restricted to directories of its bounded context | Per agent session |
| **Network** | Connections only to approved MCP servers and services | Per agent role |
| **Execution** | MicroVM or gVisor sandbox per agent session | Per session |
| **Data** | Agent cannot access data outside its authorized scope (workspace, context) | Per RBAC + ABAC |
| **Cross-tenant** | Agent NEVER accesses another tenant’s data directly; entity resolution is Liquid-internal | System-wide invariant |

## Principle

> **Treat agents as "untrusted personnel, not predictable tools."**
> 

Agents have capabilities (skills, tools, knowledge) but their actions must be bounded by sandbox, verified by multi-layer checks (T3.1), and audited by governance (T1.6). No agent has unlimited access to anything.

## Liquid-Specific Considerations

- **Bureau data:** Agent can query bureaus only through `mcp-bureaus` server; raw credentials never exposed
- **Entity data:** Cross-tenant entity intelligence available only to Liquid-internal agents on Operating Side, never to client-side agents
- **Billing data:** Only billing-authorized agents can log billable actions
- **Policy modification:** No agent can modify a Policy; only humans through Policy Builder

---

## Connection: T1.1, T1.2, 5.5, 5.7