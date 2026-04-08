# 3.5 — Strategic & Architectural Decisions (ADRs)

> **Layer:** 3 — Product Strategy
> 

> **Question this answers:** What did we decide, what did we reject, and why?
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump, All Layer 1 Reports, Critical Analyses
> 

---

## ADR-001: Unified Agentic Platform Over Isolated Products

**Status:** Decided

**Date:** Q1 2026

**What we chose:** Unify Liquid Pass, Liquid Play, Soma Repasse, and new capabilities into a single agentic platform (Liquid OS).

**What we rejected:** (A) Continue operating isolated products; (B) Build only new agentic product, sunset old ones immediately.

**Why:** Fragmented products create data silos, duplicate infrastructure, confuse market positioning, and make it impossible to build the liquidity funnel. The unified platform is the only architecture that supports the intelligence → operations → liquidity flow.

**Risks:** Migration complexity; must maintain legacy products during transition; scope is very large.

**Cost:** 3-6 months of platform architecture before feature parity with existing products.

**Trigger to revisit:** If platform unification takes > 12 months or existing client churn exceeds 20%.

---

## ADR-002: Agentic-First Architecture

**Status:** Decided

**Date:** Q1 2026

**What we chose:** Agent-native architecture from day one. The primary interface is agentic. All internal operations are agent-assisted.

**What we rejected:** (A) Traditional SaaS with AI features bolted on; (B) Agent layer as optional add-on.

**Why:** The market is moving from chatbots to agents. Building traditional first and adding agents later creates architectural debt that blocks the platform’s core value proposition.

**Risks:** LLM dependency; token cost management; agent architecture complexity may be underestimated.

**Supporting hypothesis:** LLMs continue to improve and become cheaper (Assumption A7).

**Trigger to revisit:** If LLM costs increase > 50% or capabilities regress significantly.

---

## ADR-003: Global Architecture, Local Go-to-Market

**Status:** Decided

**Date:** Q1 2026

**What we chose:** English-first infrastructure (code, docs, APIs), multi-language UI, multi-currency billing, modular business rules per jurisdiction. Go-to-market starts in Brazil.

**What we rejected:** (A) Build Brazil-specific, globalize later; (B) Full global launch from day one.

**Why:** Globalizing architecture later is extremely expensive (ADR-001 learned from Liquid Pass v1 constraints). But launching globally without a proven model wastes resources. Hybrid approach: global infra, local execution.

**Risks:** Higher initial development cost; potential over-engineering for markets not yet served.

**Trigger to revisit:** If no international expansion within 24 months.

---

## ADR-004: Entity-Unique-in-Root (Cross-Tenant Entity Resolution)

**Status:** Decided (Pending Legal Validation)

**Date:** Q1 2026

**What we chose:** A single CPF/CNPJ represents a single entity in Liquid’s root data layer, regardless of which tenant queries it.

**What we rejected:** (A) Each tenant has fully isolated entity data; (B) Optional entity sharing.

**Why:** Cross-tenant entity intelligence is the most valuable proprietary data asset Liquid can build. It enables better risk assessment, fraud detection, and market intelligence than any single-tenant view.

**Risks:** LGPD compliance uncertainty — cross-tenant data usage may require specific legal basis. Privacy engineering complexity is high. This is the most architecturally irreversible decision in the system.

**Dependencies:** Legal/DPO validation required before implementation.

**Trigger to revisit:** If legal counsel determines this violates LGPD without a viable remediation.

---

## ADR-005: Policy-as-Code for Governance

**Status:** Decided

**Date:** Q1 2026

**What we chose:** Deterministic policies created via no-code Policy Builder that are unbreakable by agents. Policies produce deterministic outputs that agents must follow.

**What we rejected:** (A) Agent-driven decisions with human oversight only; (B) Fully manual compliance processes.

**Why:** Regulated market requires deterministic, auditable decision points. Agents are powerful but non-deterministic — policies provide the guardrails that make agent autonomy safe.

**Risks:** Policy Builder UX must be simple enough for clients but powerful enough for real credit decisions. Too complex = nobody uses it. Too simple = doesn’t cover compliance needs.

**Foundation:** Liquid Pass v2’s decision graph engine (12 node types) provides the technical starting point.

**Trigger to revisit:** If client adoption of Policy Builder < 20% after 6 months.

---

## ADR-006: Two-Sided Platform (Client Side / Operating Side)

**Status:** Decided

**Date:** Q1 2026

**What we chose:** Mirrored UI for both client-facing and Liquid-internal operations, differentiated by permissions and context.

**What we rejected:** (A) Separate admin panel with different UI; (B) Client-only interface, internal tools as separate system.

**Why:** Reduces development cost (shared components), ensures consistency, and forces Liquid to dogfood its own platform. The platform should be good enough to run Liquid’s own operations.

**Risks:** Permission surface area increases; potential for confusing roles between sides.

**Trigger to revisit:** If permission-related security incidents occur or client confusion about interface is reported.

---

## ADR-007: Product-Led Growth as Primary Motion

**Status:** Decided (With Hybrid Caveat)

**Date:** Q1 2026

**What we chose:** PLG as primary growth motion: self-serve onboarding, SEO through published dashboards, autonomous client journey.

**What we rejected:** (A) Pure enterprise sales; (B) Pure PLG without sales assist.

**Why:** Enterprise sales alone doesn’t scale fast enough for $10M ARR target. PLG creates leverage. But regulated credit market may require human-assisted activation for compliance.

**Hybrid approach:** PLG for discovery and initial engagement; CS/sales-assisted for enterprise activation and liquidity operations.

**Risks:** PLG may not work for regulated B2B (Assumption A14 is unvalidated).

**Trigger to revisit:** If PLG conversion rate < 2% after 3 months of launch.

---

## ADR-008: Channel de Liquidez as Special Entity

**Status:** Decided (Pending Spec)

**Date:** Q1 2026

**What we chose:** A special class of Channel that only exists when a liquidity trigger is activated. When activated, it creates a governed tunnel between Client Side and Operating Side where Liquid’s agents and humans operate alongside the client.

**What we rejected:** (A) Liquidity as a separate product/module; (B) Liquidity handled entirely in background without client visibility.

**Why:** Liquidity is the moment of value capture. It must be visible, governed, and collaborative. The Channel metaphor extends the existing platform model without requiring a new paradigm.

**Risks:** Trigger criteria undefined; operational complexity of dual-side governance in single channel.

**Dependencies:** Spec required before implementation (identified as high-priority backlog item).

**Trigger to revisit:** If zero liquidity channels are activated in first 6 months.

---

## ADR-009: Orbital Agents as Distributed Sub-Agents

**Status:** Decided (Conceptual — No PoC Yet)

**Date:** Q1 2026

**What we chose:** Sub-agents that operate in external platforms (WhatsApp, email, SMS) to collect information and bring it back to the main agent flow. Never invoked directly by users.

**What we rejected:** (A) All interactions happen within the platform; (B) Simple webhook integrations without agent intelligence.

**Why:** Real estate credit operations require collecting information from people outside the platform (buyers, guarantors, bank contacts). Orbital Agents maintain agent intelligence while reaching external participants.

**Risks:** Regulatory complexity (WhatsApp BSP, LGPD consent), cost per channel, reliability of external APIs, each channel is essentially a product within the product.

**Dependencies:** WhatsApp BSP access, compliance framework for external outreach.

**Trigger to revisit:** If first Orbital Agent PoC takes > 3 months or regulatory blockers are identified.

---

## ADR-010: Monitoring Agents for Proprietary Knowledge Base

**Status:** Decided (Conceptual)

**Date:** Q1 2026

**What we chose:** Persistent agents that continuously monitor market entities (companies, funds, developers) and build a proprietary, verified knowledge base over time.

**What we rejected:** (A) Rely only on on-demand data queries; (B) License third-party market data exclusively.

**Why:** This is the primary data moat. Verified, structured, continuously updated data about market entities is more valuable than any single query. It enables cross-client intelligence without exposing individual client data.

**Risks:** Token cost for continuous monitoring; data verification quality; ROI measurement is difficult.

**Trigger to revisit:** If cost of monitoring exceeds 30% of revenue or data quality cannot be validated.

---

## Connection to Other Reports

- **→ T1.1 Product Constitution:** Governance rules these ADRs must follow
- **→ 1.2 Non-Negotiables:** Principles that constrain these decisions
- **→ 3.6 Execution Intent:** What’s being built now vs. later
- **→ 5.2 Bounded Context Map:** How these decisions shape the domain architecture
- **→ T3.2 Live Decision Log:** Ongoing decisions that may become new ADRs