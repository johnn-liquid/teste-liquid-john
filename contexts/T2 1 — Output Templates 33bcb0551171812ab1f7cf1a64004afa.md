# T2.1 — Output Templates

> **Layer:** T2 — Contracts (Cross-Cutting)
> 

> **Last updated:** April 2026
> 

---

## Template: Context Analysis

Objective, scope, entities involved, relevant events, invariants, risks, dependencies, success metrics, open questions.

## Template: Feature Proposal

Problem it solves, hypothesis, expected impact (with metric), bounded contexts affected, data/UI/agent layer changes, risks, test plan, acceptance criteria.

## Template: Technical Spec

Context and motivation, proposed solution, affected aggregates and entities, new/changed domain events, API contracts, data migrations, impact on other contexts, rollout plan, rollback strategy.

## Template: Bug Report

Expected vs actual behavior, steps to reproduce, affected bounded context, severity, user impact, root cause hypothesis.

## Template: Task (Executable Unit)

- Task objective (one sentence)
- Minimum necessary context (reference to spec, ADR, or feature proposal)
- Affected bounded context
- Type: feature / refactor / fix / infra / docs
- Risk level (from Change Safety Matrix, T1.2)
- Autonomy level allowed
- Dependencies (tasks that must be completed first)
- Files/modules involved (explicit scope)
- Acceptance criteria (verifiable by test or inspection)
- Rollback criteria
- Owner: agent or human
- Consult before executing: relevant ADRs, context failure modes

## Template: Agent Decision Record (AgDR)

- Decision made
- Agent that made it
- Affected bounded context
- Alternatives considered
- Reasoning (summarized chain of thought)
- Confidence level
- Observed result
- Human validated/rejected
- Should this become a permanent rule?

## Template: Liquidity Score Report

- Asset/entity identifier
- 9 dimension scores with inputs used
- Effective score = min(9)
- Gargalo dimension identified
- Circuit breakers triggered (if any)
- Macro state at time of scoring
- Prescriptions (routes to improve liquidity)
- Recommended execution mode
- Confidence level

---

## Connection to Other Reports

- **→ T1.1 Product Constitution:** Templates enforce principles
- **→ 5.5 Agentic Architecture:** Agents produce outputs using these templates
- **→ T3.1 Verification:** Templates are verified against these standards
- **→ 6.1 Development Architecture:** PEV Loop uses these templates