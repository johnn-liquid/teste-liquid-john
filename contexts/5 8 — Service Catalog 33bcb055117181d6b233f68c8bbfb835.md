# 5.8 — Service Catalog

> **Layer:** 5 — Domain & System
> 

> **Last updated:** April 2026
> 

> **Research:** Spotify: "The companies that will succeed are the ones with good service catalogs, well-defined ownership, and CI systems tightly controlled."
> 

---

## Service Registry (Target State)

| Service | Bounded Context | Owner | Language | Status | Dependencies |
| --- | --- | --- | --- | --- | --- |
| `identity-service` | BC1 | Platform Team | TypeScript | To build | Auth provider |
| `entity-service` | BC2 | Data Team | TypeScript | To build | PostgreSQL, Neo4j |
| `intelligence-service` | BC3 | Intelligence Team | TypeScript/Python | To build | Entity service, vector store |
| `liquidity-service` | BC4 | Liquidity Team | TypeScript | To build | Entity, policy, billing services |
| `task-service` | BC5 | Platform Team | TypeScript | To build | Agent orchestration |
| `agent-orchestration` | BC6 | Agent Team | TypeScript/Python | To build | Claude API, MCP servers |
| `policy-engine` | BC7 | Policy Team | TypeScript | Partial (Pass v2) | Connectors |
| `connector-gateway` | BC8 | Integration Team | TypeScript | Partial (bureaus) | Bureau APIs, Open Finance |
| `billing-service` | BC9 | Finance Team | TypeScript | To build | Payment gateway |
| `growth-service` | BC10 | Growth Team | TypeScript | To build | Analytics, SEO |
| `audit-service` | BC11 | Compliance Team | TypeScript | Partial (Pass) | All services (event consumer) |
| `notification-service` | BC12 | Platform Team | TypeScript | To build | Email, WhatsApp BSP |

## MCP Servers (Agent Infrastructure)

| MCP Server | Provides | Status |
| --- | --- | --- |
| `mcp-bureaus` | Bureau data access tools | To build (connectors exist) |
| `mcp-policy-engine` | Policy evaluation tools | To build (engine exists) |
| `mcp-entity-store` | Entity CRUD tools | To build |
| `mcp-knowledge-base` | KB search tools | To build |
| `mcp-kernel` | Liquidity scoring tools | To build |
| `mcp-dashboard` | Dashboard creation tools | To build |
| `mcp-billing` | Usage tracking tools | To build |
| `mcp-notifications` | Notification tools | To build |

## Health and SLAs (Target)

| Tier | SLA | Services |
| --- | --- | --- |
| **Tier 1 (Critical)** | 99.9% uptime | Policy engine, entity service, billing, audit |
| **Tier 2 (Important)** | 99.5% uptime | Agent orchestration, liquidity, connectors, tasks |
| **Tier 3 (Standard)** | 99.0% uptime | Intelligence, growth, notifications, dashboards |

---

## Connection: 5.2, 5.7, 6.1, 6.2