# 6.3 — Commercial & Billing Architecture

> **Layer:** 6 — Execution & Platform
> 

> **Question this answers:** How do we price, bill, and capture revenue?
> 

> **Last updated:** April 2026
> 

> **Sources:** Liquid OS Arquitetura Agêntica Report (Parts 2, 3, 12), CEO Braindump, Brain Dumps, Report 1.6 (Thesis Pack)
> 

---

## 1. Revenue Architecture — The Inversion

### Key Learning (from 2 Years of Operations)

Liquid sold decision and monitoring products for 2 years. Learning: **willingness-to-pay for insight and preparation is low.** The market is not precautionary — if the product only delivers insight (not actual liquidity), significant fees cannot be charged.

### The Model Inversion

**Old model (tested, low WTP):** Diagnosis → Preparation/governance → Prescription/insight → Limited fee (SaaS per seat)

**New model (to build):** Liquidity score = **free** (acquisition) → Prescription = **qualified lead** (conversion) → Execution of liquidity = **fee on transaction** (monetization)

---

## 2. Four Revenue Layers

| Layer | Model | Revenue Driver | % of Target Revenue |
| --- | --- | --- | --- |
| **Layer 0: Community/SEO** | Free | Knowledge base, published dashboards, liquidity scores | 0% direct (acquisition engine) |
| **Layer 1: Stage (PLG SaaS)** | Subscription + usage | Working units consumed (queries, agent actions, dashboards) | ~15% of target ARR |
| **Layer 2: Hubs (Enterprise)** | Fee on transaction | Capital that flows through liquidity operations | ~80% of target revenue |
| **Layer 3: Token Layer** | Infrastructure fee | Digital representation and tracking | ~5% (future) |

### Series A Revenue Mix Target

- **80% from capital flow** (Hubs: origination, repasse, intermediation)
- **15% from SaaS** (Stage: software recurring on the rail)
- **5% from infrastructure** (Token layer, data fees)

---

## 3. The 5 Execution Modes (Fee Structures)

### Mode 1: Societal Restructuring

**Trigger:** Structure dimension score < 30 (SCP, PF direta)

**Action:** Liquid orchestrates migration SCP → SPE

**Fee:** Setup fixed R$5-15k + spread on unlocked credit

**Volume:** Low frequency, high value per operation

### Mode 2: Securitization / Anticipation

**Trigger:** Cash Flow dimension < 40 with existing receivables

**Action:** Liquid matches with securitizer/FIDC

**Fee:** Origination 0.5-2% on securitized volume

**Example:** R$50M securitization × 1% = R$500k

**Volume:** Medium frequency, very high value

### Mode 3: Exit Facilitation (Secondary)

**Trigger:** Investor dimension < 30

**Action:** Liquid operates as marketplace for illiquid positions

**Fee:** Spread 1-3% on transaction

**Volume:** Growing as platform gains network

### Mode 4: Credit Origination

**Trigger:** Creditor dimension < 40 or asset with excess equity

**Action:** Liquid as intelligent correspondent

**Fee:** Commission 0.5-1.5% on originated credit

**Example:** Commitment-to-fund: 300 ops/month × R$150k avg × 1% = R$450k/month potential

**Volume:** High frequency, medium value

### Mode 5: Direct Transaction (iBuyer)

**Trigger:** Market dimension < 30 and Asset dimension > 50

**Action:** Marketplace transaction or niche iBuyer

**Fee:** 2-4% intermediation or 5-15% spread

**Volume:** Low frequency, highest value per transaction

---

## 4. SaaS Pricing Structure

| Tier | Target | Monthly Price Range | Includes |
| --- | --- | --- | --- |
| **Free / Community** | Anyone | R$0 | Dashboard viewing, basic liquidity score, content access |
| **Professional** | Small incorporadoras, brokers | R$2-5k/month | Credit analysis, basic agents, limited actions |
| **Business** | Mid incorporadoras | R$5-20k/month | Full agent suite, policy builder, channels, team agents |
| **Enterprise** | Large incorporadoras, banks, funds | R$20-50k+/month | Everything + Hub access, liquidity operations, dedicated agents, custom connectors |

**Minimum ticket is elevated** — Liquid is not a low-cost play. Intelligence must be high and, to some degree, exclusive to partners.

---

## 5. Billable Events

| Event | Billing Type | Measurement |
| --- | --- | --- |
| **Bureau query** | Per-action | Per query per bureau source |
| **Agent task execution** | Per-action (working unit) | Token consumption + bureau cost + overhead |
| **Policy evaluation** | Per-action | Per policy execution |
| **Dashboard creation** | Per-action | Per dashboard created/updated |
| **Monitoring Agent cycle** | Subscription | Per entity monitored per month |
| **Liquidity scoring** | Per-action (or free for acquisition) | Per scoring execution |
| **Liquidity transaction** | Take rate | % of transaction value |
| **Storage (KB/Files)** | Subscription | Per GB per month |
| **Orbital Agent outreach** | Per-action | Per external message sent |

---

## 6. Billing Audit Trail

Mandatory for fintech operations:

- Every billable event is logged with timestamp, user, workspace, action type, cost calculation
- Billing reconciliation runs daily
- Client can view detailed consumption in Settings → Costs & Billing
- Operating Side has global billing overview across all clients
- Take rate calculations are auditable and linked to transaction records

---

## 7. Case Study: Moura Leite Revenue Projection

From the Arquitetura Agêntica Report:

- **Asset:** R$300M portfolio, 22,104 contracts, R$50M securitization target
- **Execution Mode:** Mode 2 (Securitization)
- **Fee:** 1% on R$50M = **R$500,000**
- **SaaS revenue during process:** R$20-50k/month enterprise subscription
- **Timeline compression:** 3-4 months manual → 4-6 weeks with agents
- **Total revenue per operation:** ~R$600-700k (fee + SaaS during process)

---

## 8. Connection to Other Reports

- **→ 1.5 Financial Reality:** Financial targets these structures must achieve
- **→ 1.6 Strategic Thesis Pack:** Economics thesis this implements
- **→ 3.4 Growth Architecture:** How pricing supports PLG motion
- **→ 5.3 Domain Model (BC9):** Billing bounded context entities
- **→ 7.2 Company Outcomes:** Revenue metrics this architecture must produce
- **→ T1.1 Product Constitution:** C9 — every action has a cost, every cost has a limit