# 2.2 — Human System Map

> **Layer:** 2 — Problem & Opportunity Framing
> 

> **Question this answers:** Who are the humans in this system? Who decides, suffers, buys, operates?
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump, Soma Repasse KB, Territory Research, Brain Dumps, Thesis Pack
> 

---

## 1. Primary ICP (Ideal Customer Profile)

**Incorporadoras (Real Estate Developers) operating in Brazil with active sales portfolios requiring credit analysis, repasse operations, and portfolio management.**

Characteristics of the primary ICP:

- Mid-to-large incorporadoras with 100+ active contracts
- Operating in MCMV and/or mid-market segments
- Currently managing repasse manually or through small brokerages
- Pain: cash flow dependent on timely repasse completion
- Budget: High (R$50K-500K+/year for credit and operational services)
- Decision cycle: 2-6 months for platform adoption

**Secondary ICP: Financial institutions (banks, securitizadoras, FIDCs) seeking credit intelligence, portfolio assessment, or transaction intermediation.**

---

## 2. Priority Segments

| Segment | Size | Maturity | Urgency | Liquid Readiness |
| --- | --- | --- | --- | --- |
| **Mid-large incorporadoras (MCMV + mid-market)** | ~200-500 companies in Brazil | Medium — manual processes, some tech | High — cash flow depends on repasse | **Highest** — Soma already serves this |
| **Loteadoras (land developers)** | ~300-800 companies | Low — very manual | Medium | Medium — similar needs, different processes |
| **Securitizadoras** | ~30-50 active in Brazil | High — sophisticated but siloed | Medium | Medium — Transação Carteira validates |
| **Banks (RE credit departments)** | ~20-30 relevant banks | High — incumbent systems | Low (switching cost) | Lower — relationship exists via Soma but adoption harder |
| **Investment funds (FIIs, FIDCs)** | ~200-400 active RE funds | High | Medium | Lower — Askalon explored this, deprioritized |
| **Individual professionals (brokers, analysts)** | Thousands | Low | Low | Lowest — Personal version, not priority |

---

## 3. Actor Map Per Segment

### Segment: Incorporadora

| Role | Actor | Relationship to Liquid | Motivation | Pain |
| --- | --- | --- | --- | --- |
| **Buyer** | CFO / Financial Director | Purchases platform subscription, approves budget | Reduce repasse time, lower default rate, improve cash flow | Slow repasse, opaque credit decisions, manual operations |
| **User** | Credit Analyst / Repasse Coordinator | Uses platform daily for credit analysis, repasse tracking | Faster workflow, fewer manual tasks, better data | Spreadsheet hell, multi-system juggling, repetitive bureau queries |
| **Operator** | IT Manager / System Admin | Configures integrations, manages permissions | Reliable system, easy integration, low maintenance | Fragmented tools, manual data entry, no API standardization |
| **Approver** | CEO / Board | Authorizes strategic decisions, validates ROI | Competitive advantage, revenue acceleration | Can’t see portfolio health in real-time, decisions based on stale data |
| **Influencer** | External consultant / Auditor | Recommends tools, validates compliance | Reliable, auditable, compliant system | Lack of audit trails, inconsistent processes |

### Segment: Bank (RE Credit Department)

| Role | Actor | Relationship to Liquid | Motivation | Pain |
| --- | --- | --- | --- | --- |
| **Buyer** | Head of RE Credit | Adopts platform or receives Liquid-processed applications | Better quality credit files, faster processing | Low-quality applications, manual verification |
| **User** | Credit Analyst | Reviews credit decisions, validates Liquid analysis | Faster review cycles, confidence in data | Backlog of applications, inconsistent quality |
| **Regulator** | Compliance Officer | Validates that Liquid's processes meet regulatory requirements | Audit trail, LGPD compliance, Bacen compliance | Manual compliance processes |

### Segment: Securitizadora

| Role | Actor | Relationship to Liquid | Motivation | Pain |
| --- | --- | --- | --- | --- |
| **Buyer** | Head of Structuring | Uses Liquid for portfolio assessment and data quality | Better data for CRI structuring, faster due diligence | Inconsistent data from originators, manual reconciliation |
| **User** | Risk Analyst | Analyzes portfolio risk using Liquid intelligence | Comprehensive risk view, verified data | Fragmented data sources, manual analysis |

### Segment: Investment Fund

| Role | Actor | Relationship to Liquid | Motivation | Pain |
| --- | --- | --- | --- | --- |
| **Buyer** | Portfolio Manager | Uses Liquid for due diligence and monitoring | Better investment decisions, continuous monitoring | Point-in-time assessments become stale, expensive due diligence |

### Segment: Individual Professional

| Role | Actor | Relationship to Liquid | Motivation | Pain |
| --- | --- | --- | --- | --- |
| **User** | Broker / Independent Analyst / Buyer (PF) | Uses Personal version for market intelligence, credit pre-qualification | Market insight, competitive edge | No access to institutional-grade tools |

---

## 4. Tensions Between Actors

| Tension | Actors Involved | Nature |
| --- | --- | --- |
| **Speed vs. Compliance** | Incorporadora (wants fast approval) vs. Bank (needs compliant process) | Fundamental tension in credit — Liquid's Policy-as-Code addresses this |
| **Transparency vs. Advantage** | Seller (wants to highlight strengths) vs. Buyer (wants full disclosure) | Information asymmetry in portfolio transactions — Liquid's verified data addresses this |
| **Cost vs. Depth** | Small incorporadora (limited budget) vs. Large fund (demands deep analysis) | Pricing must serve both — tiered plans with usage-based billing |
| **Autonomy vs. Governance** | Credit analyst (wants flexibility) vs. Compliance officer (wants rules) | Policy Builder must balance analyst freedom with policy guardrails |
| **Privacy vs. Intelligence** | Client A (doesn’t want Client B to see their data) vs. Liquid (benefits from cross-tenant intelligence) | Entity-unique-in-root architecture must resolve this with privacy-preserving entity resolution |

---

## 5. Incentives Per Actor

| Actor | Gains from Liquid | Loses Without Liquid |
| --- | --- | --- |
| **Incorporadora CFO** | Faster cash flow via accelerated repasse, lower default rates | Continues burning money on slow manual operations |
| **Credit Analyst** | 10x productivity via agent-assisted analysis | Drowns in spreadsheets and manual bureau queries |
| **Bank Credit Head** | Higher quality incoming applications, faster processing | Receives inconsistent, low-quality credit files |
| **Securitizadora** | Better data quality for CRI structuring | Manual reconciliation, data quality risk |
| **Fund Manager** | Continuous monitoring instead of point-in-time | Stale assessments, missed risks |
| **Broker** | Market intelligence, competitive edge | No access to institutional data |

---

## 6. Language and Vocabulary

Each actor speaks differently about the same problems:

| Concept | Incorporadora Says | Bank Says | Fund Says | Liquid Term |
| --- | --- | --- | --- | --- |
| Credit assessment | "Análise de crédito" | "Avaliação de risco" | "Due diligence" | **Credit Analysis Task** |
| Portfolio sale | "Venda de carteira" | "Cessão de créditos" | "Portfolio acquisition" | **Liquidity Transaction** |
| Mortgage transfer | "Repasse" | "Financiamento habitacional" | N/A | **Repasse Operation** |
| Risk score | "Nota do comprador" | "Score de crédito" | "Risk rating" | **Risk Assessment** |
| Compliance | "Documentação" | "Compliance regulatório" | "Governance" | **Policy Compliance** |

> **Critical for Ubiquitous Language (5.1):** The platform must support multiple vocabulary layers — user-facing language adapts per persona, but internal domain model uses consistent terms.
> 

---

## 7. Jobs-to-be-Done Per Profile

### Incorporadora CFO

- **JTBD 1:** "Help me get buyers approved and transferred to bank financing as fast as possible so I can collect receivables."
- **JTBD 2:** "Show me the health of my entire portfolio in real-time so I can make decisions without waiting for monthly reports."
- **JTBD 3:** "Reduce my operational cost for credit analysis and repasse without sacrificing quality."

### Credit Analyst (Incorporadora or Bank)

- **JTBD 1:** "Analyze this buyer’s creditworthiness completely in minutes, not hours."
- **JTBD 2:** "Create a compliant, auditable credit decision trail without manual documentation."
- **JTBD 3:** "Alert me when something changes in a monitored portfolio that requires my attention."

### Securitizadora Structuring Head

- **JTBD 1:** "Assess this portfolio’s risk and data quality quickly so I can decide whether to structure a CRI."
- **JTBD 2:** "Monitor the underlying assets of my CRI continuously so I can catch problems early."

### Fund Portfolio Manager

- **JTBD 1:** "Evaluate this investment opportunity (portfolio, CRI, direct asset) with comprehensive risk analysis."
- **JTBD 2:** "Monitor my existing real estate investments continuously without relying on quarterly reports."

---

## 8. Connection to Other Reports

- **→ 2.1 Problem Architecture:** Which problems each actor feels most
- **→ 2.3 Market Painpoints:** Validated pains per actor
- **→ 3.1 Product-Company Definition:** Primary value proposition per persona
- **→ 4.2 UX Functional Architecture:** Journeys per JTBD
- **→ 5.1 Ubiquitous Language:** Vocabulary reconciliation across actors
- **→ 3.4 Growth Architecture:** Acquisition channels per segment