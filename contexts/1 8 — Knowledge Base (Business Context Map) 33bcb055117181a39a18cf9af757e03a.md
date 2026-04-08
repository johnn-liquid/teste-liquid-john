# 1.8 — Knowledge Base (Business Context Map)

> **Layer:** 1 — Strategy
> 

> **Question this answers:** How is all business context organized, structured, and made consumable by both humans and agents?
> 

> **Last updated:** April 2026
> 

> **Sources:** All prior Layer 1 reports, Context Map v3, Brain Dumps, Territory Research
> 

---

## 1. Purpose

This report compiles the meta-structure of the Strategy Layer into a navigable knowledge base. It defines where each type of business knowledge lives, how it's organized into depth layers, and how it bridges from human documentation to agent-consumable context.

---

## 2. Compilation of Strategy Layer — Structured Knowledge Base

### Depth Layers

| Layer | Content | Audience | Format |
| --- | --- | --- | --- |
| **Executive Summary** | One-paragraph answers to: What is Liquid? Why now? How does it make money? What's the moat? | Investors, board, new team members | Prose — max 500 words |
| **Strategic Detail** | Full reports 1.1–1.7 with analysis, tables, trade-offs, risks | CEO, product leads, architects | Reports (this project) |
| **Raw Data** | Territory research (22 chapters Brazil, regional analyses), thesis iterations (20+ documents), company diagnostics, product KBs | Researchers, analysts, agents | Notion pages, linked documents |

### Knowledge Domain Map

| Domain | Source of Truth | Report(s) | Depth Available |
| --- | --- | --- | --- |
| **Market overview** | Report 1.1 + Territory section | 1.1, 1.7 | Executive → Detail → Raw (22 chapters) |
| **Competitive landscape** | Report 1.1 + Cenário Competitivo page | 1.1 | Executive → Detail |
| **Foundational principles** | Report 1.2 | 1.2 | Executive → Detail |
| **Legacy & assets** | Report 1.3 + Panorama dos Produtos | 1.3 | Executive → Detail → Raw (product KBs) |
| **Company state** | Report 1.4 + Diagnóstico Liquid Hoje | 1.4 | Executive → Detail → Raw |
| **Financials** | Report 1.5 (⚠️ gaps) | 1.5 | Partial — needs CEO input |
| **Strategic thesis** | Report 1.6 + Thesis Pack (20+ docs) | 1.6 | Executive → Detail → Raw (extensive) |
| **Liquidity mechanics** | Report 1.7 + Liquidez RE (5 regions) | 1.7 | Executive → Detail → Raw (very deep) |
| **Credit decisioning** | Liquid Pass KB (v1 + v2) | 1.3 | Detail → Raw (product documentation) |
| **Repasse operations** | Soma Repasse KB | 1.3 | Detail → Raw (service blueprint, CRM data) |
| **Portfolio transactions** | Transação Carteira KB | 1.3 | Detail → Raw |
| **Regulatory context** | Territory ch.13 + distributed across docs | 1.2, 1.7 | Partial — needs legal consolidation |

---

## 3. Inputs and KBs That Feed the Context

### Primary Inputs

| Input | Location | Nature | Update Frequency |
| --- | --- | --- | --- |
| **CEO Braindump (original audio)** | Notion: Sobre o novo Produto Brain Dump | Foundational vision — raw transcription | One-time (April 2026) |
| **Structured braindumps** | Notion: Brain Dumps collection | Strategic mental notes, evolving thinking | Periodic (as CEO records) |
| **Territory Research** | Notion: Territory section | Market research by region | Periodic (as research expands) |
| **Product KBs** | Notion: Panorama dos Produtos | Technical and operational documentation per product | Ongoing |
| **Thesis Pack** | Notion: Thesis section | Strategic positioning iterations | Stable (canonical version exists) |
| **Company Diagnostics** | Notion: Company section | Current state assessments | Periodic |
| **Context Map Reports** | Notion: Pre-Report section (this project) | Structured documentation per Context Map section | This project |

### Secondary Inputs

| Input | Location | Nature |
| --- | --- | --- |
| **Agents/Skills DB** | Notion: Skills database (referenced in braindump) | Agent profiles and capabilities |
| **Competitor research** | Notion: Cenário Competitivo | Competitive analysis |
| **Dow Code work** | Referenced in braindump | Prior credit rules implementation |
| **Gil's dashboard prototype** | Referenced in braindump (Data Blast) | Dashboard creation proof of concept |

---

## 4. Sources of Truth by Knowledge Domain

| Knowledge Domain | Source of Truth | Fallback | Owner |
| --- | --- | --- | --- |
| **Product vision & principles** | CEO Braindump + Report 1.2 | Thesis Pack canonical version | CEO |
| **Market intelligence** | Territory Research + Monitoring Agents (future) | Public market reports | Research / Agents |
| **Credit rules & policies** | Liquid Pass v2 codebase + Policy definitions | Liquid Pass v1 legacy | Engineering |
| **Operational processes** | Soma Repasse service blueprint | [Monday.com](http://Monday.com) CRM data | Operations |
| **Technical architecture** | Context Map Layer 5 reports (to be created) | Current codebase | CTO / Engineering |
| **Financial data** | Internal financial records (⚠️ not documented) | CEO estimates | CFO / CEO |
| **Regulatory requirements** | ⚠️ No consolidated source exists | Distributed across Territory ch.13 + product docs | Legal (gap) |
| **Client data** | CRM + Liquid Pass production data | Soma operational records | Sales / Operations |

---

## 5. Agent Bridge: How This KB Materializes into Consumable Context

> **Detailed specification in → T4.4 KB Architecture for Agents**
> 

### Bridge Architecture (Conceptual)

```
Human Documentation (Notion)           Agent-Consumable Context
┌─────────────────────────┐           ┌─────────────────────────┐
│ Strategy Reports (1.1-1.8)│  ──→    │ Root context file        │
│ Problem Reports (2.1-2.4) │  ──→    │ (CLAUDE.md / AGENTS.md)  │
│ Product Reports (3.1-3.7) │  ──→    │                          │
│ Domain Reports (5.1-5.9)  │  ──→    │ Per-context files         │
│ Cross-cutting (T1-T4)     │  ──→    │ Per-agent files           │
└─────────────────────────┘           │ Playbooks                │
                                       │ Living glossary          │
                                       │ ADR index                │
                                       └─────────────────────────┘
```

### Materialization Rules

1. **Root context file** loads: Product Constitution (T1.1) + Ubiquitous Language (5.1) + Bounded Context overview (5.2). Max 200-300 lines. Pointers, not copies.
2. **Per-context files** load: Relevant domain model, invariants, events, contracts from the specific bounded context the agent is working in.
3. **Per-agent files** load: Role-specific instructions, skills, tools, limits, output templates.
4. **Dynamic loading** based on task: Agent loads only the context relevant to current work (not everything upfront).
5. **Playbooks** encode operational procedures (e.g., "how to analyze a repasse portfolio") in agent-consumable format.

### Priority for Agent Context

| Priority | Content | Rationale |
| --- | --- | --- |
| **Always loaded** | Product Constitution, Ubiquitous Language, current bounded context | Core governance + immediate work scope |
| **Auto-attached** | Relevant ADRs, domain model for affected files | Prevents repeated mistakes |
| **On-demand** | Market data, competitive intel, financial context | Loaded when agent judges it relevant |
| **Never loaded** | Raw braindumps, full thesis iterations, historical data | Too noisy; summarized versions suffice |

---

## 6. Knowledge Gaps Requiring Attention

| Gap | Impact | Resolution Path |
| --- | --- | --- |
| **No consolidated regulatory source** | Agents can't reason about compliance constraints | Create dedicated regulatory KB (legal + product) |
| **Financial data undocumented** | Can't make resource allocation decisions | CEO/CFO input for Report 1.5 |
| **Partner principles undocumented** | Potential strategic misalignment | Document sócio's principles |
| **Gil's dashboard work undocumented** | Lost context for dashboard capabilities | Interview Gil, document findings |
| **Dow Code credit rules undocumented** | Can't integrate prior work into Policy Builder | Map existing rules to policy model |
| **Client feedback/validation data absent** | Assumptions untested | Establish customer feedback collection process |

---

## 7. Connection to Other Reports

- **→ T4.1 Context File Architecture:** How these KBs become agent-consumable files
- **→ T4.4 KB Architecture for Agents:** Detailed specification of playbooks, glossary, retrieval strategy
- **→ 5.1 Ubiquitous Language:** The living glossary that agents consume
- **→ 5.5.3 Agent Sources & Knowledge:** Which agents consume which knowledge sources
- **→ All Layer 1 reports:** This report indexes and meta-organizes all of them