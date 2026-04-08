# T4.4 — KB Architecture for Agents

> **Layer:** T4 — Context Engineering
> 

> **Last updated:** April 2026
> 

> **Research:** LinkedIn encodes domain knowledge as playbooks consumed directly by agents. The New Stack identifies 6 emerging agentic KB patterns.
> 

---

## KB Components

### Playbooks (rules + procedures per domain)

| Playbook | Content | Consumer |
| --- | --- | --- |
| **Credit Analysis Playbook** | Step-by-step procedure for analyzing PF/PJ credit: which bureaus to query, in what order, how to interpret results, when to invoke Policy, how to handle edge cases | Credit Analyst Agent |
| **Repasse Playbook** | Full repasse lifecycle procedure: qualification criteria, bank routing logic, document requirements per bank, status transitions, escalation points | Repasse Coordinator Agent |
| **Kernel Scoring Playbook** | How to score each dimension: inputs, formulas, bands, circuit breakers, macro state adjustments | Kernel Agents |
| **Securitization Playbook** | Steps for structuring CRI: data requirements, term sheet generation, counterparty matching | Skill Agent (Structuring) |
| **Monitoring Playbook** | What to monitor per entity type, signal detection patterns, alert thresholds | Monitoring Agents |

### Living Glossary ([domain-terms.md](http://domain-terms.md))

From Report 5.1 — Ubiquitous Language. Updated automatically via Spec Ambiguity Resolver.

### ADR Index

From Report 3.5 — ADRs indexed and queryable by bounded context.

### Pattern Library

Approved architectural patterns with examples: how to add a new connector, how to create a new agent type, how to add a dimension to the kernel.

### Anti-Pattern Registry

Patterns that have already failed: hardcoded business rules (use Policy instead), average instead of min for scoring, auto-merging entities without human review.

### Retrieval Strategy

| Method | When | Latency |
| --- | --- | --- |
| **Direct file load** | Context files always loaded per T4.1 rules | Instant (part of context window) |
| **Semantic search** | Agent needs specific knowledge from large KB | < 2 seconds |
| **Graph traversal** | Entity relationships needed ("who is connected to this SPE?") | < 5 seconds |
| **Keyword search** | Agent needs specific ADR or policy by identifier | < 1 second |

---

## Connection to Other Reports

- **→ T4.1 Context File Architecture:** How KB is structured in files
- **→ T4.2 Context Window Strategy:** How to manage KB within token limits
- **→ 5.5.3 Agent Sources & Knowledge:** Which agents consume which KB
- **→ 5.6 Data Architecture:** Data sources that feed KBs
- **→ T3.4 Learning Loop:** How KBs evolve from feedback