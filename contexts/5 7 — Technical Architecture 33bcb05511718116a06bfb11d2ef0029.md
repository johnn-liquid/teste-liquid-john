# 5.7 — Technical Architecture

> **Layer:** 5 — Domain & System
> 

> **Last updated:** April 2026
> 

> **Note:** Many decisions pending CTO/architect input. This report documents the architectural direction from braindump and Context Map; specific technology choices require validation.
> 

---

## 1. Technology Stack (Directional)

| Layer | Direction | Notes |
| --- | --- | --- |
| **Frontend** | React/Next.js or similar modern framework | Chat-first interface, responsive, dark mode primary |
| **Backend** | Node.js/TypeScript or Python | DDD/Hexagonal (proven in Liquid Pass v2) |
| **Agent framework** | Anthropic Claude (primary LLM) + MCP | Agent-first architecture (ADR-002) |
| **Database** | PostgreSQL (relational) + vector store (embeddings) | Entity resolution, audit trails, knowledge base |
| **Knowledge graph** | Neo4j or Kuzu | Entity relationships, market intelligence |
| **Event bus** | Kafka or RabbitMQ | Cross-context domain events |
| **Cache** | Redis | Session management, frequently accessed data |
| **Search** | Elasticsearch or similar | KB search, entity search, audit log search |
| **Infrastructure** | Cloud (AWS/GCP) | Multi-region ready (Global by Design) |
| **CI/CD** | GitHub Actions or GitLab CI | PEV Loop integration |
| **Monitoring** | Datadog or Grafana stack | Agent observability, system health |

## 2. Service Architecture (Bounded Context → Service)

Each bounded context maps to one or more services. Services communicate via domain events (async) or APIs (sync).

Core services: Identity Service, Entity Service, Intelligence Service, Liquidity Service, Task Service, Agent Orchestration Service, Policy Engine, Connector Gateway, Billing Service, Audit Service, Notification Service.

## 3. Security Architecture

| Concern | Approach |
| --- | --- |
| **Authentication** | OAuth 2.0 / OIDC for users; API keys for integrations; separate identity for agents |
| **Authorization** | RBAC within workspaces; ABAC for cross-tenant entity access |
| **Encryption** | TLS for transit; AES-256 for data at rest; field-level encryption for PII |
| **Secrets** | Vault or cloud-native secret management |
| **Agent isolation** | Sandbox per agent session; filesystem and network restrictions |
| **Data protection** | LGPD compliance: consent management, data minimization, right to deletion (with audit trail preservation) |

## 4. Scalability Considerations

| Concern | Approach |
| --- | --- |
| **Agent concurrency** | Horizontal scaling of agent workers; queue-based task distribution |
| **Token cost management** | Context window optimization (T4.2); caching; batch operations |
| **Data growth** | Entity store designed for billions of records; time-series for monitoring data |
| **Multi-tenancy** | Logical isolation at workspace level; physical isolation for enterprise tier |
| **Global** | Multi-region deployment ready; CDN for static assets; data residency controls |

---

## Connection to Other Reports

- **→ 5.2 Bounded Context Map:** Service boundaries
- **→ 5.5 Agentic Architecture:** Agent infrastructure requirements
- **→ 5.6 Data Architecture:** Data storage and pipeline
- **→ 5.8 Service Catalog:** Registry of all services
- **→ 6.1 Development Architecture:** Dev workflow on this stack
- **→ 6.2 Operational Architecture:** Running this in production