# 1.2 — Premises, Constraints & Non-Negotiables

> **Layer:** 1 — Strategy
> 

> **Question this answers:** What are the foundational beliefs and hard limits that constrain every decision?
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump (original + structured), Critical Analyses, Brain Dumps Collection, Thesis Pack
> 

---

## 1. Assumptions Underpinning the Strategy

These are beliefs the team holds to be true. They have not all been empirically validated. Each must be monitored and tested.

### Market Assumptions

| # | Assumption | Confidence | Validation Status | Risk if Wrong |
| --- | --- | --- | --- | --- |
| A1 | The market wants agents that execute tasks, not chatbots or copilots | High (industry trend) | Partially validated — general market trend confirmed, not validated with Liquid's specific ICP | If target market (real estate credit professionals) still prefers manual tools or spreadsheets, adoption stalls |
| A2 | Horizontal AI platforms (ChatGPT, Claude) are insufficient for regulated credit decisions | High | Validated by observation — no compliance layer, no audit trail, no domain governance | If LLMs add compliance features natively, Liquid's differentiation weakens |
| A3 | Real estate credit stakeholders will adopt an agentic platform | Medium | Not validated — no data from customer interviews about willingness to delegate to agents | Critical risk — the entire product thesis depends on this |
| A4 | The real estate market continues to grow and create more transactions | Medium-High | Macro data supports growth; MCMV expansion confirmed | Economic downturn could reduce transaction volume |
| A5 | Fragmentation in real estate credit persists (no dominant platform emerges) | Medium | Current landscape confirms fragmentation | A well-funded competitor could consolidate faster |
| A6 | Tokenization of real estate receivables will become viable | Low-Medium | Early-stage trend; regulatory framework incomplete | Not a core dependency, but affects secondary market thesis |

### Technology Assumptions

| # | Assumption | Confidence | Validation Status | Risk if Wrong |
| --- | --- | --- | --- | --- |
| A7 | LLM capabilities continue to improve and costs continue to fall | High | Industry consensus; confirmed by major providers | If costs plateau or increase, unit economics break |
| A8 | MCP/A2A protocols become industry standards for agent interop | High | 5,800+ MCP servers, Linux Foundation adoption | If fragmentation occurs, Liquid may back the wrong protocol |
| A9 | It is possible in 2026 to build a sophisticated agentic platform without being "elephantine" | Medium | Technical feasibility seems proven by others; not yet proven by Liquid | Execution risk — complexity may be underestimated |
| A10 | The technical team can build the Orchestrator + Orbital Agent + Entity Agent architecture | Low-Medium | Not mentioned in braindump; team capability unclear | This is the most critical execution risk |
| A11 | Token costs and LLM infrastructure are viable for the billing-per-action model | Medium | No unit economics calculation exists | If cost per agent action > revenue per action, model fails |

### Business Assumptions

| # | Assumption | Confidence | Validation Status | Risk if Wrong |
| --- | --- | --- | --- | --- |
| A12 | There is validated demand for an "agentic Bloomberg" of real estate credit | Low | No customer validation cited | Product-market fit risk |
| A13 | Stakeholders will pay high subscription fees (elevated minimum ticket) | Medium | Braindump states intent; no pricing validation | Revenue projection risk |
| A14 | Product-led growth works for a regulated credit platform | Medium-Low | PLG typically works for simpler tools; compliance onboarding may require human touch | If PLG doesn't work, CAC increases dramatically |
| A15 | The same UI can serve Client Side and Operating Side without confusion | Medium | Architectural hypothesis; not user-tested | UX risk and permission surface attack risk |
| A16 | Liquidity transactions will materialize within 6-12 months | Low-Medium | Soma Repasse and Transação Carteira show early operations, but at limited scale | If liquidity doesn't materialize, revenue thesis changes fundamentally |

---

## 2. External and Internal Deadlines

### External

| Deadline | Nature | Impact |
| --- | --- | --- |
| **PL 2338/2023 (AI Regulation)** | Pending Brazilian legislation on AI systems | May impose new obligations on AI-based credit decisions — must monitor proactively |
| **Open Finance Phase evolution** | Bacen-mandated expansion of data sharing | Creates opportunities (more data) and obligations (compliance) |
| **LGPD enforcement actions** | Increasing enforcement of data protection | Critical for entity resolution (CPF unique in root) and cross-tenant data handling |
| **Market window for agentic platforms** | 18-24 months estimated | If Liquid doesn't establish position, larger players fill the gap |

### Internal

| Deadline | Nature | Impact |
| --- | --- | --- |
| **$10M ARR run rate** | CEO-stated annual target | Defines pace of product development and go-to-market |
| **90-day focus cycle** | Braindump mentions 90-day focus on product + marketing as unified system | Current operating cadence |
| **Platform unification** | Transition from isolated products to unified platform | Must happen before new customer acquisition scales |
| **Runway constraints** | Not explicitly stated but implied | Every product decision must consider time-to-revenue |

---

## 3. Regulatory, Technical, and Financial Constraints

### Regulatory Constraints

1. **LGPD (Data Protection):** All personal data processing requires legal basis. Credit decisions involving personal data require special attention. The entity-unique-in-root architecture (same CPF across tenants) creates a specific LGPD challenge that needs legal validation.
2. **Bacen regulations:** Credit analysis and financial intermediation have specific requirements. The extent to which Liquid needs SCD/SEP registration depends on how directly it operates credit.
3. **CVM regulations:** If Liquid facilitates securitization or structured products, CVM compliance is required.
4. **Consumer credit regulations:** Negative credit decisions (denial, negative reporting) carry legal responsibility.
5. **Anti-money laundering (AML/KYC):** Financial operations require identity verification and transaction monitoring.

### Technical Constraints

1. **LLM dependency:** The entire platform depends on LLM providers (primarily Anthropic/Claude). No fallback if primary provider has extended outage.
2. **WhatsApp Business API:** Orbital Agents depend on BSP (Business Solution Provider) access for WhatsApp integration. Rate limits, costs, and compliance requirements apply.
3. **Bureau integrations:** Credit data depends on integrations with Serasa, Equifax, PH3A, Open Finance providers. Each has its own API limitations, costs, and SLAs.
4. **Context window limits:** Agent architecture must manage context within LLM limitations (token costs scale quadratically).

### Financial Constraints

1. **Pre-revenue or early-revenue stage:** Every feature decision must consider ROI and time-to-revenue.
2. **Token costs:** Agent operations consume tokens. Cost-per-action must be lower than revenue-per-action.
3. **Bureau query costs:** Each credit check has a monetary cost. Must be factored into pricing.
4. **Infrastructure costs:** Global, agentic, always-on platform architecture has significant baseline infrastructure costs.

---

## 4. Non-Negotiables (What Will Never Be Compromised)

These are the seven foundational principles declared in the CEO braindump. They function as architectural constraints — every decision must be compatible with all seven simultaneously.

### Principle 1: Global by Design

**Definition:** Architecture, interface, and documentation designed for multiple markets, languages, and currencies from day one.

**Operational implications:**

- All documentation and technology in English
- i18n/l10n infrastructure from the start
- Business rules are modular (per market/jurisdiction), not hardcoded
- Multi-currency support in billing and transaction logic
- No Brazil-specific assumptions baked into core architecture

**Tension:** Global architecture costs more and takes longer. Go-to-market is local (Brazil). The decision is to build global infrastructure, deploy local content/rules.

**Condition of validity:** Architecture actually supports i18n without refactoring.

**Irreversibility:** **HIGH** — migrating from local to global architecture later is extremely costly.

---

### Principle 2: Product-Led Growth (PLG)

**Definition:** The platform IS the sales funnel. Product, marketing, and sales are inseparable.

**Operational implications:**

- Self-serve onboarding (client can start without talking to sales)
- SEO optimization (especially for published dashboards)
- Social presence and content marketing integrated with product
- Growth metrics ARE product metrics (activation, retention, expansion)
- Go-to-market tests are product tests and vice versa

**Tension:** PLG works best for simple, self-explanatory tools. Regulated credit platforms may require human-assisted onboarding and compliance verification.

**Condition of validity:** Product can demonstrate value in self-service within first 5 minutes.

**Irreversibility:** **MEDIUM** — can add sales-led motions later.

---

### Principle 3: Community as Moat

**Definition:** No barriers to attracting stakeholders. The more participants, the better positioned Liquid is for liquidity.

**Operational implications:**

- Low/no friction entry for basic platform access
- Public dashboards and content that attract organic traffic
- Multi-stakeholder platform design (not single-persona)
- Network effects: more data → better intelligence → more trust → more usage → more data

**Tension:** Open community vs. high-value, exclusive intelligence. Braindump also mentions "access unlocked only for those who operate with Liquid."

**Condition of validity:** Community growth measurably correlates with liquidity pipeline.

**Irreversibility:** **LOW** — community strategy can evolve.

---

### Principle 4: Agentic-First

**Definition:** The platform is agent-native from architecture to interface. Not a feature — the core.

**Operational implications:**

- Architecture optimized for agent consumption (MCP, context engineering, token optimization)
- Agent layer is the primary interface for both internal operations and client experience
- Skills, connectors, and policies are first-class entities
- Internal operations (Liquid's own processes) also run on agents

**Tension:** Agents in regulated markets must be deterministic where policies require it. Agentic flexibility vs. compliance determinism.

**Condition of validity:** LLMs continue to evolve and become cheaper.

**Irreversibility:** **VERY HIGH** — the entire architecture depends on this. Cannot retrofit if initial approach is wrong.

---

### Principle 5: Liquidity-Driven

**Definition:** Everything converges to liquidity. The platform exists to get to the liquidity of the asset.

**Operational implications:**

- Liquidity trigger embedded by design in the user journey
- Agents internally detect liquidity opportunities even when user isn't looking
- Channel de Liquidez as special class that connects Client Side to Operating Side
- Revenue model is structured to capture value at the liquidity event
- The platform goes beyond read/write to **transactional** — software that takes decisions on assets

**Tension:** If liquidity doesn't materialize, the platform must still be viable as a SaaS. The wide funnel must generate enough revenue independently.

**Condition of validity:** Sufficient pipeline of liquidable assets exists and flows through the platform.

**Irreversibility:** **VERY HIGH** — pivoting away from liquidity changes the company's DNA.

---

### Principle 6: Regulated Market / Compliance

**Definition:** The platform operates under governance appropriate for credit decisions, risk assessment, and financial transactions.

**Operational implications:**

- Every indicator produced can be used for life-impacting decisions (credit approval/denial, hiring, financing)
- Audit trail is mandatory and immutable
- Policies (deterministic rules) are unbreakable by agents
- Data sources must be verified and authentic — no raw use of public computational interfaces
- Activity logging persists even if original queries are deleted
- Responsibility framework for agent decisions must be defined

**Tension:** Compliance adds friction. More governance = slower development. But less governance = existential regulatory risk.

**Condition of validity:** Regulatory environment maintains or increases requirements for governed AI decisions.

**Irreversibility:** **HIGH** — if compliance infrastructure is not built from day one, retrofitting is painful and risky.

---

### Principle 7: Transactional Power (Beyond Read/Write)

**Definition:** The software doesn't just read data and write reports. It takes decisions and executes transactions on assets.

**Operational implications:**

- Platform must support full transaction lifecycle (not just analysis)
- Billing architecture must handle transaction-based revenue (take rate)
- Legal framework must support Liquid's role in transactions
- Risk management for Liquid's own exposure in transactions

**Tension:** Transactional power carries financial and legal liability. Capital-light vs. capital-involved decisions.

**Condition of validity:** Legal and regulatory framework permits Liquid's transactional role.

**Irreversibility:** **HIGH** — defines the business model.

---

## 5. Critical External Dependencies

| Dependency | Nature | Risk Level | Mitigation |
| --- | --- | --- | --- |
| **Anthropic/Claude (LLM provider)** | Core intelligence engine | Critical — no fallback | Multi-model strategy (can switch to other providers); but MCP integration is Anthropic-centric |
| **Credit bureaus (Serasa, Equifax, PH3A)** | Data for credit decisions | High | Multi-bureau integration; contractual agreements |
| **Open Finance (Bacen)** | Consumer financial data | Medium-High | Orbital Agents as fallback for manual data collection |
| **WhatsApp Business API** | Channel for Orbital Agents | Medium | Alternative channels (SMS, email) as degraded fallback |
| **Cloud infrastructure (AWS/GCP/Azure)** | Platform hosting | Low (commodity) | Standard multi-cloud practices |
| **Regulatory bodies (Bacen, CVM, ANPD)** | Operating permissions | High | Proactive compliance; legal counsel |

---

## 6. Risks Specific to This Layer

1. **Assumption overload:** 16+ assumptions underpin the strategy, many unvalidated. Each unvalidated assumption is a potential point of failure.
2. **Non-negotiable conflict:** The seven principles can conflict (e.g., PLG vs. Regulated Market, Global vs. Local GTM, Agentic autonomy vs. Compliance determinism). The Conflict Resolution Protocol (T1.1) must arbitrate.
3. **Regulatory gap:** No specific regulatory mapping exists. The braindump acknowledges operating in "regulated market" but doesn't identify which specific regulations apply or what registrations are needed.
4. **Financial gap:** No runway, unit economics, or breakeven analysis is documented. Financial constraints are felt but not quantified.

---

## 7. Connection to Other Reports

- **→ 1.1 Business & Market Overview:** Market context that these premises operate within
- **→ 1.5 Financial Reality:** Quantification of the financial constraints mentioned here
- **→ T1.1 Product Constitution:** How these non-negotiables become executable governance rules
- **→ 3.5 Strategic & Architectural Decisions:** How trade-offs between principles are resolved
- **→ 5.5 Agentic Architecture:** Technical implications of the Agentic-First principle
- **→ 6.3 Commercial & Billing Architecture:** Implementation of the transactional/liquidity revenue model