# 5.5 — Agentic Architecture

> **Layer:** 5 — Domain & System
> 

> **Question this answers:** How does the agent layer work? Roles, skills, memory, orchestration, protocols.
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump (agent architecture section), Context Map v3, Brain Dumps, Thesis Pack
> 

---

## 5.5.1 Agent Roles

| Agent | Bounded Context | Scope | Mode |
| --- | --- | --- | --- |
| **Orchestrator** | BC6 (Agent Orchestration) | Routes tasks between agents and users; decides sequencing and sync; detects when to invoke specialized agents | Always-on during Task |
| **Monitoring Agent** | BC3 (Market Intelligence) | Persistently monitors market entities (companies, funds, segments); builds proprietary knowledge base | Background, recurring |
| **Skill Agent** | BC6 (Agent Orchestration) | Executes specific skills on demand (credit analysis, dashboard creation, document processing, research) | On-demand |
| **Liquidity Agent** | BC4 (Liquidity Operations) | Analyzes assets for liquidity potential; produces standardized liquidity assessment; triggers liquidity pipeline | On-demand, background, or direct |
| **Credit Analyst Agent** | BC7 (Policy) + BC8 (Connectors) | Orchestrates credit analysis: bureau queries, policy evaluation, risk scoring, CA-600 generation | On-demand |
| **Repasse Coordinator Agent** | BC4 (Liquidity) + BC5 (Tasks) | Manages repasse workflow: buyer qualification, bank routing, document assembly, status tracking | On-demand within Channel |
| **Team Agent (Client-created)** | BC6 (Agent Orchestration) | Client-defined role with client-chosen skills, connectors, and scope | Client-configured |
| **Orbital Agent (WhatsApp)** | BC6 + BC12 (Notifications) | Distributed sub-agent for external outreach via WhatsApp; collects data from third parties | Invoked by other agents only |
| **Orbital Agent (Email)** | BC6 + BC12 | Same as above but via email channel | Invoked by other agents only |
| **Dashboard Builder Agent** | BC3 + BC5 | Specialized in creating high-quality data visualizations and persistent dashboards | On-demand |
| **KB Restructuring Agent** | BC2 (Entity) | Background agent that restructures Knowledge Base documents for optimal agent consumption | Background |
| **Astro (System Agent)** | Internal | Assists in building/maintaining the Liquid platform: bug detection, issue creation, resolution | Internal, assisted |
| **Infra Agent** | Internal | Data preparation, pipeline management, infrastructure monitoring | Internal, background |

---

## 5.5.2 Skills & Tools

| Skill | Available To | Description | Output |
| --- | --- | --- | --- |
| **Credit Analysis** | Credit Analyst Agent, Orchestrator | Full credit assessment with multi-bureau data | Credit report artifact |
| **Risk Scoring** | Credit Analyst Agent, Liquidity Agent | Numerical risk assessment based on policies + data | Risk score + rationale |
| **Bureau Query** | Credit Analyst Agent (via Connectors) | Query Serasa, Equifax, PH3A, Open Finance | Structured bureau data |
| **Financial Simulation** | Skill Agent | SAC/Price/SBPE mortgage calculations | Simulation results table |
| **CA-600 Generation** | Credit Analyst Agent | Standardized credit documentation | CA-600 document |
| **Dashboard Creation** | Dashboard Builder Agent | Create interactive data visualizations | Persistent dashboard |
| **Deep Research** | Skill Agent | Comprehensive research on entity/topic using multiple sources | Research report |
| **Document Processing** | Skill Agent | Extract, analyze, summarize uploaded documents | Structured data + summary |
| **Policy Evaluation** | Any agent (calls Policy Engine) | Execute deterministic policy and return result | Policy decision + rationale |
| **Liquidity Assessment** | Liquidity Agent | Analyze asset’s liquidity potential | Liquidity report + trigger recommendation |
| **Repasse Routing** | Repasse Coordinator | Determine optimal bank for buyer repasse | Routing recommendation |
| **External Outreach** | Orbital Agents | Contact external parties for data collection | Collected data + consent record |

---

## 5.5.3 Sources & Knowledge

| Agent | Data Sources | KB Access | Reliability Hierarchy |
| --- | --- | --- | --- |
| **Orchestrator** | Task context, user profile, workspace config | Root context file | Context > Configuration > Defaults |
| **Monitoring Agent** | Public data, news, regulatory filings, market reports | Market Intelligence KB (proprietary) | Liquid-verified > Primary source > Secondary > Public |
| **Credit Analyst** | Bureaus (Serasa, Equifax, PH3A), Open Finance, client-provided docs | Credit policies, entity data | Policy result > Bureau data > Client data > Estimated |
| **Liquidity Agent** | Portfolio data, market intelligence, transaction history | Liquidity KB, entity data | Verified data > Historical > Estimated |
| **Team Agent** | Client-configured connectors and data sources | Workspace KB, Channel KB | Per client configuration |
| **Orbital Agent** | External platform data (WhatsApp responses) | Minimal — task-specific context only | Direct input > Inferred |

---

## 5.5.4 Agent Memory

| Memory Type | Description | Scope | Implementation |
| --- | --- | --- | --- |
| **Short-term (RAM)** | Active session context. Current task, conversation history, loaded context. | Session | Context window management with auto-compaction at 95% (per Anthropic recommendation) |
| **Long-term (HD)** | Persistent storage across sessions. Entity data, user preferences, workspace config. | User, Agent, Organization | Database + vector store |
| **Episodic** | Records of past events with timestamps. What happened, what was decided, why. | Per entity, per agent | Audit trail (BC11) + agent decision records |
| **Semantic** | Factual knowledge and entity relationships. Market intelligence, entity profiles. | Organization-wide | Knowledge graph + vector store (Monitoring Agent output) |
| **Procedural** | Skills learned from experience. Generalizable patterns extracted after complex tasks. | Per skill category | `.md` files version-controlled in git (reusable without fine-tuning) |

---

## 5.5.5 Outputs

Each agent produces standardized outputs linked to Output Templates (T2.1):

| Agent | Output Type | Format |
| --- | --- | --- |
| Orchestrator | Task routing decisions, status updates | AgDR, status notification |
| Credit Analyst | Credit reports, risk scores, CA-600 | Structured artifact (PDF/JSON) |
| Liquidity Agent | Liquidity assessments, trigger recommendations | Structured artifact |
| Monitoring Agent | Entity updates, market alerts | KB entry update, alert notification |
| Dashboard Builder | Interactive dashboards | Persistent dashboard component |
| Repasse Coordinator | Status updates, document packages, routing recommendations | Channel updates, document artifacts |
| Orbital Agent | Collected data, consent records | Structured data returned to caller |

---

## 5.5.6 Chains & Orchestration Patterns

| Pattern | Description | Use Case |
| --- | --- | --- |
| **Orchestrator-Worker** (Default) | Orchestrator receives task, delegates to specialist agents, consolidates results | Most task interactions |
| **Sequential Pipeline** | Agent A → Agent B → Agent C in linear sequence | Repasse workflow (qualify → analyze → route → submit) |
| **Parallel Fan-out/Fan-in** | Multiple agents work simultaneously, results consolidated | Credit analysis (query 3 bureaus in parallel) |
| **Hierarchical Delegation** | Agent delegates sub-tasks to sub-agents | Credit Agent → Orbital Agent (collect consent) → return |

---

## 5.5.7 Protocol Architecture (MCP + A2A)

**MCP (Model Context Protocol)** — Vertical integration: how agents access tools, data, and services.

Planned MCP Servers per bounded context:

- `mcp-bureaus` — Bureau data access (Serasa, Equifax, PH3A)
- `mcp-open-finance` — Open Finance data access
- `mcp-policy-engine` — Policy evaluation
- `mcp-entity-store` — Entity data access (read/write)
- `mcp-knowledge-base` — KB search and retrieval
- `mcp-dashboard` — Dashboard creation and management
- `mcp-billing` — Usage tracking and billing events
- `mcp-notifications` — Inbox and notification delivery

**A2A (Agent-to-Agent Protocol)** — Horizontal coordination: how agents discover and collaborate.

- Agent Cards: JSON manifest with capabilities, published per agent
- Task lifecycle: submitted → working → completed/failed
- Used for: Orbital Agent coordination, cross-agent delegation, Operating Side → Client Side communication

---

## 5.5.8 Human-in-the-Loop

| Task Type | Human Position | Rationale |
| --- | --- | --- |
| **Market research** | Out-of-the-loop | Low risk; agent handles fully |
| **Basic credit query** | On-the-loop | Agent executes, human reviews summary |
| **Credit decision (below threshold)** | On-the-loop | Agent recommends, human approves via notification |
| **Credit decision (above threshold)** | In-the-loop | Human must actively review and decide |
| **Liquidity trigger activation** | In-the-loop | Always requires human confirmation |
| **Policy creation/modification** | In-the-loop | Policies affect all downstream decisions |
| **Entity merge/split** | In-the-loop | Irreversible data operation |
| **External outreach (Orbital)** | On-the-loop | Agent executes, human monitors |
| **Dashboard creation** | Out-of-the-loop | Low risk; user reviews result |
| **Routine execution** | Out-of-the-loop | Pre-configured; agent reports results |

---

## 5.5.9 Observability

| Metric | What It Measures | Target |
| --- | --- | --- |
| **Task completion rate** | % of tasks successfully completed by agents | > 90% |
| **Policy compliance rate** | % of agent actions that follow policy | 100% (non-negotiable) |
| **Human rejection rate** | % of agent outputs rejected by humans | < 10% |
| **Self-correction rate** | % of failures the agent fixes on its own | > 50% |
| **Average response time** | Time from task creation to first agent response | < 30 seconds |
| **Token cost per task** | Average token consumption per task type | Track and optimize |
| **Orbital Agent success rate** | % of external outreach that returns valid data | > 70% |

---

## Connection to Other Reports

- **→ 5.2 Bounded Context Map:** Which contexts agents operate in
- **→ 3.2 Capability Map:** Capabilities agents deliver
- **→ T1.1 Product Constitution:** Rules agents must follow (especially C3, C6, C9)
- **→ T1.2 Autonomy Map:** Permission levels per agent action
- **→ T2.3 Agent Protocol Contracts:** MCP/A2A contract details
- **→ T4.1 Context File Architecture:** Per-agent context files
- **→ 4.3 Interaction Model:** How agents interact with humans in the UI