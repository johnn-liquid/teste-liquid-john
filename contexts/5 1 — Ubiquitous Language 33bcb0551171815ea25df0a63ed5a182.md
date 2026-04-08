# 5.1 — Ubiquitous Language

> **Layer:** 5 — Domain & System
> 

> **Question this answers:** What words do we use, and what do they mean exactly?
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump, All reports, Soma Repasse KB, Liquid Pass KB, Territory Research
> 

> **Research:** Daniel Schleicher (2026) demonstrated that maintaining a living glossary as single source of truth eliminates entire classes of errors when agents operate on code.
> 

---

## 1. Primary Domain Glossary

### Core Entities

| Term | Definition | Context | NOT to be confused with |
| --- | --- | --- | --- |
| **User** | A human person interacting with the platform. The highest-level identity entity. One User can have multiple Workspaces. | Identity & Workspace | Agent (which is not a human) |
| **Workspace** | An organizational grouping where roles, permissions, agents, and data scope are defined. Equivalent to a Company account. | Identity & Workspace | User (User belongs to Workspace, not the other way around) |
| **Task** | A single interaction unit between a User and an Agent (or system). Can be on-demand (blank canvas) or directed (to a specific agent). Also referred to as "Issue" in some contexts. | Tasks & Cases | Routine (which is recurring); Channel (which is a process container) |
| **Channel** | An abstraction for a process or workflow. Contains Tasks, has its own Knowledge Base, can be visualized as kanban or list. | Tasks & Cases | Dashboard (which displays data); Inbox (which is notifications) |
| **Channel de Liquidez** | A special class of Channel activated only by a Liquidity Trigger. Creates a governed tunnel between Client Side and Operating Side. | Liquidity Operations | Regular Channel (which any user can create) |
| **Dashboard** | An interactive data panel that can be created by users, agents, or provided by Liquid. Can be private, shared, or published (SEO-indexable). | Market Entity Intelligence / Growth | Channel (Dashboards display data; Channels manage processes) |
| **Agent** | A virtual team member that performs tasks using Skills, Connectors, and Policies. Can be created by Liquid or by the client. | Agent Orchestration | User (who is human); Skill (which is a capability, not an entity) |
| **Skill** | A specific capability that an Agent can access. Skills produce artifacts (analyses, interfaces, documents). Always accessed through an Agent, never directly. | Agent Orchestration | Policy (which is deterministic); Connector (which provides data) |
| **Policy** | A deterministic, unbreakable rule created via Policy Builder. Produces predictable outputs. Agents cannot override policies. "Policy as Code." | Governance & Audit | Skill (which is flexible/creative); Guideline (which is advisory) |
| **Connector** | An integration with an external data source or software (CRM, ERP, Bureau, API). Provides data to Agents, Skills, and Policies. | Connectors & Data Ingestion | Skill (which processes data); Agent (which uses Connectors) |
| **Routine** | A scheduled, recurring Task executed by one or more Agents. Combines Skills across Channels. | Tasks & Cases | Task (which is one-time/on-demand) |
| **Inbox** | A notification center for pending actions, completed tasks, invitations, and triggers. | Notifications | Channel (which is for processes); Dashboard (which is for data) |
| **Knowledge Base (KB) / Files** | A structured repository of context documents within a Workspace (global) or within a Channel (local). An agent in background restructures content for agent consumption. | Client Management | Dashboard (KB stores documents; Dashboards display data) |

### Business Domain Terms

| Term | Definition | Context |
| --- | --- | --- |
| **Liquidity** | Any monetary transaction across the real estate asset lifecycle that Liquid can originate, intermediate, structure, or operate. | Liquidity Operations |
| **Liquidity Trigger** | The specific condition or event that activates a Channel de Liquidez. Criteria TBD but must be verifiable and automatable. | Liquidity Operations |
| **Take Rate** | The percentage fee Liquid charges on the value of a liquidity transaction. | Billing |
| **Repasse** | The process of transferring a buyer from developer financing to bank financing. A core liquidity operation. | Liquidity Operations |
| **Working Unit** | A billable unit of work performed by the platform (read, write, or agent action). | Billing |
| **Entity** (domain) | A pre-configured structure representing a participant or object in the market: SPE, buyer, guarantor, seller, financier, contract, unit. Unique in the system root (same CPF = same entity). | Market Entity Intelligence |
| **Inventory** | Concrete instances of domain entities — the actual items that can be transacted. E.g., Unit 138, Contract of Unit 217. | Market Entity Intelligence |
| **SPE** (Sociedade de Propósito Específico) | Special Purpose Entity created for a specific real estate development. | Market Entity Intelligence |
| **CRI** (Certificado de Recebíveis Imobiliários) | Real estate receivables certificate — a securitized financial instrument backed by RE receivables. | Liquidity Operations |
| **CA-600** | Standardized credit analysis documentation format used in Brazilian real estate. | Tasks & Cases |

### Agent Architecture Terms

| Term | Definition | Context |
| --- | --- | --- |
| **Orchestrator** | Core Agent that routes tasks between agents and users. Decides sequencing and synchronization. | Agent Orchestration |
| **Monitoring Agent** (Entity Agent) | Agent with persistence function — continuously monitors a market entity in background, building proprietary knowledge base. | Market Entity Intelligence |
| **Skill Agent** | Agent that executes specific Skills on demand. Creates artifacts. Not running in parallel. | Agent Orchestration |
| **Liquidity Agent** | Agent that analyzes assets for liquidity potential. Can give trigger or return improvement recommendations. | Liquidity Operations |
| **Team Agent** | Agent created by the client for their specific tasks. Client’s domain. | Agent Orchestration |
| **Orbital Agent** | Distributed sub-agent operating in external platforms (WhatsApp, email). Never called directly by users — always invoked by another agent. | Agent Orchestration |
| **Astro** (System Agent) | Internal agent that assists in building and maintaining the Liquid platform itself. Bug detection, issue creation, resolution. | Internal / Operating Side |
| **Infra Agent** | Internal agent working on core data infrastructure and pipeline. Invisible to clients. | Internal / Operating Side |

### Platform Architecture Terms

| Term | Definition |
| --- | --- |
| **Client Side** | The platform interface where external clients operate. |
| **Operating Side** | The platform interface where Liquid’s internal team operates. Mirrored UI, elevated permissions. |
| **Policy Builder** | No-code tool for creating deterministic Policies (motor de decisão). |
| **Entity Resolution** | The process of ensuring a single entity (identified by CPF/CNPJ) is unique across the entire system, regardless of which tenant queries it. |

---

## 2. Prohibited or Ambiguous Terms

| Term | Problem | Use Instead |
| --- | --- | --- |
| **"Chatbot"** | Implies simple Q&A, not agentic capabilities | "Agent" or "Agentic platform" |
| **"AI Assistant"** | Too passive; Liquid agents execute, not just assist | "Agent" with specific role |
| **"Feature"** | Too generic; loses connection to domain model | "Capability" (3.2) or "Skill" |
| **"Admin panel"** | Implies separate, lesser interface | "Operating Side" |
| **"Customer"** | Ambiguous — is it the company or the person? | "User" (person) or "Workspace" (company) or "Client" (Operating Side view) |
| **"Deal"** | Informal, imprecise | "Transaction" or "Liquidity Operation" |
| **"Score"** | Too generic | "Risk Assessment" or "Credit Score" (specify type) |
| **"Rule"** | Ambiguous — business rule? policy? invariant? | "Policy" (deterministic), "Invariant" (domain), "Guideline" (advisory) |

---

## 3. Accepted Synonyms

| Primary Term | Accepted Synonyms | Context |
| --- | --- | --- |
| Task | Issue | Used interchangeably in agent interaction contexts |
| Workspace | Company | "Company" used in user-facing context; "Workspace" in technical |
| Channel de Liquidez | Liquidity Channel | English contexts |
| Monitoring Agent | Entity Agent | Name TBD — both accepted until final decision |
| Operating Side | Liquid Side | Both acceptable; "Operating Side" preferred |

---

## 4. Semantic Rule

> **If the business says X, the code uses X.**
> 

No translation between business language and code. If the domain calls it a "Policy," the code class is `Policy`, not `Rule` or `BusinessRule` or `DecisionLogic`. If the domain calls it a "Channel de Liquidez," the code entity is `LiquidityChannel`, not `SpecialWorkflow` or `TransactionPipeline`.

---

## 5. Spec Ambiguity Resolver

Process to flag ambiguous terms during spec writing:

1. Writer encounters a term not in this glossary
2. Writer flags it with `[TERM_REVIEW: {term}]` in the spec
3. Domain review session resolves the term
4. Term is added to this glossary with definition
5. Glossary update is propagated to root context file (T4.1)

---

## 6. Connection to Other Reports

- **→ T4.1 Context File Architecture:** This glossary is imported into root context file
- **→ 5.2 Bounded Context Map:** Each context owns specific terms
- **→ 5.3 Domain Model:** Terms become entities, value objects, and events
- **→ 2.2 Human System Map:** How different actors use different vocabulary for the same concepts
- **→ T2.2 Domain Contracts:** Terms define the contract language between contexts