# 1.5 — Financial Reality

> **Layer:** 1 — Strategy
> 

> **Question this answers:** What are the economic constraints and targets?
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump, Brain Dumps Collection, Thesis Pack, Company Diagnostics
> 

> **Note:** This report contains significant gaps because financial data was not detailed in the available sources. Sections marked with ⚠️ require CEO/CFO input.
> 

---

## 1. Current Financials ⚠️

### Revenue Sources

| Source | Type | Status | Estimated Contribution |
| --- | --- | --- | --- |
| **Liquid Pass (SaaS)** | Recurring subscription | Active, recurring clients | Not quantified |
| **Soma Repasse (operations)** | Service fees per operation | Active, ~962 contracts | Not quantified |
| **Transação Carteira** | Transaction-based | Early stage | Not quantified |
| **Liquid Consulting** | Advisory/consulting | Ideation | Not yet generating revenue |

### Cost Structure (Estimated Categories)

| Category | Nature | Estimated Weight |
| --- | --- | --- |
| **Team (payroll)** | Fixed | Likely largest expense |
| **Cloud infrastructure** | Variable/fixed | Moderate |
| **Bureau API costs** | Variable (per query) | Per-transaction cost component |
| **LLM token costs** | Variable | Growing as agent usage scales |
| **Office / operational** | Fixed | Standard |
| **Legal / compliance** | Variable | Currently minimal (gap) |

### Key Financial Metrics ⚠️

| Metric | Status |
| --- | --- |
| Current MRR/ARR | **Not documented** — needs CEO input |
| Monthly burn rate | **Not documented** — needs CEO input |
| Gross margin | **Not documented** — likely varies significantly between SaaS (high) and operations (lower) |
| Net margin | **Not documented** |

---

## 2. Runway ⚠️

**Not explicitly documented.** The braindumps imply urgency ("executar rápido", "trazer receita para dentro o tempo todo", "manter o drive de trazer receita") which suggests runway is a concern but not quantified.

**Action required:** CEO/CFO to document current cash position, monthly burn, and resulting runway in months.

---

## 3. Investment Capacity ⚠️

**Not documented.** Key questions:

- Is there external investment (angels, VCs, grants)?
- Is the company bootstrapped?
- What is the max investment available for platform development before next revenue milestone?
- Is Series A fundraising planned (thesis documents suggest pitch-oriented materials exist)?

---

## 4. Economic Limits

### Cost Per Feature/Agent/Client

No unit economics calculated. This is a critical gap for the agentic billing model.

**What needs to be calculated:**

| Metric | Why It Matters | Status |
| --- | --- | --- |
| **Cost per agent action** | Must be lower than revenue per action for billing model to work | Not calculated |
| **Cost per bureau query** | Direct COGS component of credit analysis | Known (from Pass) but not documented here |
| **Cost per token** | Scales with agent usage | Known (from Anthropic pricing) but not projected |
| **Cost per repasse operation** | Operational cost of manual + agent-assisted repasse | Not calculated |
| **Cost per client onboarding** | Critical for PLG economics | Not calculated |
| **LTV/CAC ratio** | Fundamental business health metric | Not calculated |

---

## 5. Unit Economics Targets

### Revenue Target

The CEO stated target is clear: **10x revenue multiplication within the year, targeting $10M ARR run rate.**

### Unit Economics Framework (To Be Calculated)

**For SaaS Layer:**

- Average Revenue Per Workspace (ARPW)
- Cost to Serve Per Workspace
- Gross Margin Per Workspace
- Expected LTV
- Acceptable CAC

**For Agentic Billing Layer:**

- Average Revenue Per Agent Action
- Cost Per Agent Action (tokens + bureau + infrastructure)
- Margin Per Action
- Expected Actions Per Client Per Month

**For Liquidity Layer:**

- Average Take Rate Per Transaction
- Average Transaction Size
- Cost Per Transaction (operational + legal + compliance)
- Margin Per Transaction
- Expected Transactions Per Month

### Subscription Strategy

Brain dumps mention: "A assinatura é alta, com ticket mínimo elevado e planos estruturados a partir disso." This indicates a premium pricing strategy with elevated minimum ticket, not a low-cost/high-volume play.

---

## 6. Revenue Scenario Modeling

### Scenario A: SaaS Only (No Liquidity)

If liquidity transactions take longer than expected:

- Revenue = Subscription fees + agentic billing
- Target: Must sustain operations independently
- Risk: Can it reach $10M ARR on SaaS alone?

### Scenario B: SaaS + Early Liquidity

If liquidity transactions begin within 6 months:

- Revenue = SaaS base + transaction take rate
- Target: Liquidity accelerates revenue growth
- Requirement: Pipeline of liquidable assets must be established

### Scenario C: Full Model (SaaS + Billing + Liquidity)

All three revenue layers active:

- Revenue = SaaS + per-action billing + take rate
- Target: $10M ARR run rate
- Timeline: 12-18 months

**Critical question from analyses:** "If liquidity doesn't happen in 12 months, do SaaS + billing sustain the operation? What's the breakeven without the take rate?"

---

## 7. Financial Risks

| Risk | Probability | Impact | Mitigation |
| --- | --- | --- | --- |
| **Liquidity revenue takes > 12 months** | Medium-High | High — changes thesis | SaaS must be self-sustaining; consulting as bridge |
| **Token costs higher than revenue per action** | Medium | High — breaks unit economics | Optimize context engineering; cache results; batch operations |
| **Client concentration** | High (current state) | High — single client loss is material | Diversify client base aggressively |
| **Bureau cost inflation** | Low-Medium | Medium | Negotiate volume agreements; diversify data sources |
| **Fundraising failure** | Unknown | High if dependent on external capital | Maintain path to profitability on current resources |
| **FX risk (global ambition, BR base)** | Medium | Medium | Price in USD for international; manage BR operational costs |

---

## 8. Actions Required

1. **⚠️ Quantify current MRR/ARR, burn rate, and runway** — CEO/CFO input needed
2. **⚠️ Calculate unit economics per layer** (SaaS, agentic billing, liquidity)
3. **⚠️ Define breakeven scenario without liquidity revenue**
4. **⚠️ Document investment status and fundraising plans**
5. **Build financial model** with the three scenarios above
6. **Calculate cost-per-agent-action** with current token pricing and bureau costs

---

## 9. Connection to Other Reports

- **→ 1.1 Business & Market Overview:** Market sizing that informs revenue potential
- **→ 1.4 Company State:** Team costs and operational structure
- **→ 6.3 Commercial & Billing Architecture:** Technical implementation of the revenue model
- **→ 7.2 Company Outcomes:** Target metrics this financial reality must achieve
- **→ 7.4 Forecasting:** Detailed financial projections