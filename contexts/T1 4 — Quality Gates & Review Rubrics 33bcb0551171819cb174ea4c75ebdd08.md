# T1.4 — Quality Gates & Review Rubrics

> **Layer:** T1 — Governance
> 

> **Last updated:** April 2026
> 

---

## Universal Checklist (Any Change)

- [ ]  Respects Ubiquitous Language (5.1)?
- [ ]  Bounded context boundary violation?
- [ ]  Overlap between contexts?
- [ ]  Does the change increase hidden complexity?
- [ ]  Is there a human fallback for failure cases?
- [ ]  Impact on billing, governance, or metrics?
- [ ]  Audit trail created for the change?

## Domain Changes

- [ ]  Aggregate invariants still valid?
- [ ]  Domain events updated (emitted + consumed)?
- [ ]  Contracts with other contexts preserved (T2.2)?
- [ ]  Entity resolution rules respected?
- [ ]  Kernel scoring logic unaffected (or intentionally changed with documentation)?

## UX Changes

- [ ]  Respects cognitive principles from Design System (4.1)?
- [ ]  Cognitive load increased or decreased?
- [ ]  Progressive disclosure maintained?
- [ ]  Status/risk/action visibility preserved?

## Agent/Agentic Changes

- [ ]  Agent has the data it needs (sources defined)?
- [ ]  Output in standardized format (T2.1)?
- [ ]  Audit trail and explainability present?
- [ ]  Autonomy level respected (T1.2)?
- [ ]  Policy compliance enforced?

## Security (OWASP + LGPD)

- [ ]  Automated OWASP Top 10 check passed?
- [ ]  No secrets/credentials in generated code?
- [ ]  Dependency verification (supply chain)?
- [ ]  Data access permissions reviewed?
- [ ]  LGPD consent flow maintained?
- [ ]  Cross-tenant data isolation preserved?

---

## Connection: T1.1, T1.2, T3.1, 6.1