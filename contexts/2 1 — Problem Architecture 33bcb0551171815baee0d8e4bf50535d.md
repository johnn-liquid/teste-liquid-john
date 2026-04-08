# 2.1 — Problem Architecture

> **Layer:** 2 — Problem & Opportunity Framing
> 

> **Question this answers:** Which pain do we attack first? How does the macro-problem decompose?
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump, Brain Dumps, Thesis Pack, Territory Research, Panorama dos Produtos, Soma Repasse KB
> 

---

## 1. Macro-Problem

**The real estate credit and financial asset market operates with massive information asymmetry, fragmented infrastructure, and manual processes that systematically destroy liquidity.**

Despite being the largest asset class in the world, real estate suffers from:

- No unified intelligence layer across the credit lifecycle
- No standardization across originators, servicers, banks, securitizers, or regulators
- Decisions of enormous financial consequence (credit approval, portfolio pricing, risk assessment) made with incomplete data, siloed tools, and subjective human judgment
- Operational processes (repasse, portfolio transactions, monitoring) that scale linearly with headcount
- Regulatory complexity that creates compliance overhead without corresponding infrastructure support

The result: **liquidity that should exist doesn’t.** Transactions that should happen don’t. Assets that should be priced accurately aren’t. Capital that should flow is blocked by friction.

---

## 2. Decomposition into Sub-Problems

### SP1: Intelligence Fragmentation

**Description:** Market intelligence about real estate credit is scattered across bureaus, public records, news, regulatory filings, and institutional knowledge. No single source provides a comprehensive, verified, real-time view.

**Who feels it:** Every stakeholder — incorporadoras need to assess buyer creditworthiness, banks need portfolio risk views, funds need due diligence data, securitizers need data quality.

**Current cost:** Millions in consulting fees, manual research hours, and decisions made on incomplete information. Wrong credit decisions cost R$50K-500K+ per default.

**How solved today:** Bureau queries (point-in-time, not continuous), manual market research, consultancies, internal analyst teams, Bloomberg (general finance, not RE-specific).

**Why current solutions fail:** Fragmented (no single view), stale (point-in-time, not continuous), expensive (consulting fees), not actionable (data without workflow), not governed (no audit trail on how data informed decisions).

---

### SP2: Credit Decision Opacity

**Description:** Credit decisions in real estate are made through opaque processes — custom spreadsheets, manual bureau checks, subjective analyst judgment. No standardized, auditable, reproducible decision framework.

**Who feels it:** Incorporadoras (need consistent buyer approval), banks (need compliant decision trails), buyers (get inconsistent treatment), regulators (can’t audit decisions).

**Current cost:** Inconsistent approvals, compliance risk, slow processing (days to weeks per decision), high analyst headcount.

**How solved today:** Internal bank credit departments, manual spreadsheet analysis, basic scoring models, Liquid Pass v1 (for existing clients).

**Why current solutions fail:** Not scalable (linear headcount), not auditable (spreadsheets don’t create compliance trails), not intelligent (rule-based without contextual reasoning), siloed (each institution has its own process).

---

### SP3: Operational Friction in Repasse

**Description:** Mortgage transfer (repasse) — the process of transferring a buyer from developer financing to bank financing — is a complex, multi-stakeholder, document-heavy operation that currently requires dedicated human teams at every step.

**Who feels it:** Incorporadoras (cash flow depends on timely repasse), buyers (stuck in limbo during transfer), banks (processing bottleneck), Soma team (operational burden).

**Current cost:** ~962 contracts managed manually via [Monday.com](http://Monday.com) CRM. Each contract requires multiple human touchpoints across qualification, credit analysis, legal review, document collection, bank submission, registry, and settlement. Estimated 20-40 hours of human work per contract.

**How solved today:** Manual analyst teams (like Soma), bank internal processing teams, small specialized repasse brokerages.

**Why current solutions fail:** Doesn’t scale (linear headcount), error-prone (manual document handling), slow (weeks to months per contract), no intelligence layer (can’t predict issues or optimize routing).

---

### SP4: Portfolio Opacity and Illiquidity

**Description:** Real estate portfolios (mortgage books, receivables, CRIs) are difficult to assess, price, and trade because of inconsistent data quality, lack of standardization, and information asymmetry between buyer and seller.

**Who feels it:** Portfolio holders (can’t efficiently sell/trade), potential buyers/funds (can’t efficiently evaluate), securitizers (data quality blocks issuance), market as a whole (reduced liquidity).

**Current cost:** Transactions that take months instead of days. Pricing discounts of 10-30% due to information risk. Deals that never happen because assessment cost exceeds perceived benefit.

**How solved today:** Manual due diligence, specialized consultancies, internal risk teams, basic portfolio analytics tools.

**Why current solutions fail:** Too slow for market dynamics, too expensive for smaller portfolios, not continuous (point-in-time assessments become stale), no marketplace or matching mechanism.

---

### SP5: Compliance Without Infrastructure

**Description:** The real estate credit market is regulated (Bacen, CVM, LGPD, consumer protection) but participants lack purpose-built infrastructure to manage compliance. They retrofit compliance onto tools not designed for it.

**Who feels it:** Every regulated participant — banks, securitizers, originators, servicers.

**Current cost:** Legal fees, audit costs, manual compliance processes, regulatory fines, reputational risk.

**How solved today:** Legal departments, compliance consultants, manual audit processes, basic reporting tools.

**Why current solutions fail:** Reactive (audit after the fact, not governance by design), expensive (manual compliance), fragile (human error in manual processes), not scalable.

---

### SP6: Stakeholder Disconnection

**Description:** The multiple participants in a real estate credit lifecycle (developer, buyer, bank, broker, servicer, fund, securitizer, regulator) operate in separate systems with no shared context. Information is re-entered, re-verified, and re-processed at each handoff.

**Who feels it:** Everyone in the chain. Each handoff creates delay, cost, and error risk.

**Current cost:** Duplicated work, data inconsistencies, communication overhead, transaction delays.

**How solved today:** Email, phone calls, manual document sharing, spreadsheets, disconnected CRMs.

**Why current solutions fail:** No shared context, no shared workflow, no shared intelligence. Each participant operates in isolation.

---

## 3. Priority Problem (Wedge)

**SP3 (Operational Friction in Repasse) + SP2 (Credit Decision Opacity) combined is the wedge.**

Why this combination:

- **Validated:** Soma Repasse already operates here with ~962 contracts and 5 incorporadoras + 4 banks
- **Revenue-generating:** Repasse operations directly generate service fees
- **Path to liquidity:** Repasse is the most direct connection between credit origination and asset liquidity
- **Technology ready:** Liquid Pass v2 provides the credit decision engine; Soma provides the operational process knowledge
- **Expandable:** Once the repasse workflow is agentified, the same agent architecture can extend to other sub-problems

---

## 4. Adjacent Problems (Future Expansion)

| Phase | Problem | Entry Point |
| --- | --- | --- |
| **Phase 1 (Now)** | SP3 + SP2: Repasse operations + Credit decisioning | Soma Repasse + Liquid Pass |
| **Phase 2 (6-12 months)** | SP1 + SP4: Intelligence layer + Portfolio assessment | Monitoring Agents + Transação Carteira |
| **Phase 3 (12-24 months)** | SP6: Multi-stakeholder connectivity | Platform network effects |
| **Phase 4 (24+ months)** | SP5: Compliance infrastructure | Policy Builder maturity + regulatory integration |

---

## 5. Frequency, Criticality, and Urgency

| Sub-Problem | Frequency | Criticality | Urgency | Combined Score |
| --- | --- | --- | --- | --- |
| SP3: Repasse friction | Daily (ongoing operations) | High (blocks cash flow) | High (existing clients need it) | **Highest** |
| SP2: Credit decision opacity | Per transaction | Critical (wrong decisions = losses) | High (compliance pressure) | **High** |
| SP1: Intelligence fragmentation | Continuous | High (affects all decisions) | Medium (pain is chronic, not acute) | **Medium-High** |
| SP4: Portfolio illiquidity | Per transaction/quarter | High (blocks capital flow) | Medium (market tolerates current pace) | **Medium** |
| SP5: Compliance gaps | Continuous | Critical (regulatory risk) | Medium (until enforcement action) | **Medium** |
| SP6: Stakeholder disconnection | Every interaction | Medium (friction, not failure) | Low (workarounds exist) | **Lower** |

---

## 6. Connection to Other Reports

- **→ 2.2 Human System Map:** Who exactly feels each problem (detailed actor mapping)
- **→ 2.3 Market Painpoints:** Validated vs. assumed pains per segment
- **→ 2.4 Opportunity Map:** How these problems translate into opportunities
- **→ 3.1 Product-Company Definition:** How the product addresses the wedge
- **→ 3.2 Capability Map:** Which capabilities solve which sub-problems
- **→ 5.2 Bounded Context Map:** How sub-problems map to bounded contexts