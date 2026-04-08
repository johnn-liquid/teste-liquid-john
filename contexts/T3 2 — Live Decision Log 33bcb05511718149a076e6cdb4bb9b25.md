# T3.2 — Live Decision Log

> **Layer:** T3 — Feedback
> 

> **Last updated:** April 2026
> 

---

## Purpose

Operational, continuous log of decisions made by both humans and agents. Different from historical Decision Log (1.3) which captures past strategic decisions. This is a live, running record.

## For Each Decision (Human or Agent)

| Field | Description |
| --- | --- |
| **Decision** | What was decided |
| **Decider** | Human name or Agent ID |
| **Bounded context** | Which context affected |
| **Alternatives considered** | What other options existed |
| **Reasoning** | Why this choice |
| **Observed result** | What happened after |
| **Would repeat?** | Yes/No with explanation |
| **Patterns emerged** | Any generalizable insight |
| **Unstable components** | Areas that showed fragility |

## Cadence

- **Agent decisions:** Logged automatically via AgDR (T2.1)
- **Human decisions:** Logged by decision-maker or meeting recorder
- **Review:** Weekly review by Context Engineers identifies patterns
- **Promotion:** Decisions that prove correct after 3+ occurrences become candidates for permanent rules in Product Constitution (T1.1) or context files (T4.1)

---

## Connection: T3.3, T3.4, T1.1, T2.1