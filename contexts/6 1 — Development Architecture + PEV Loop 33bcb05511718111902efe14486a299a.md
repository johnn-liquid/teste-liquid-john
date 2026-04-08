# 6.1 — Development Architecture + PEV Loop

> **Layer:** 6 — Execution & Platform
> 

> **Last updated:** April 2026
> 

> **Sources:** Context Map v3, Brain Dumps (context engineering notes)
> 

---

## 1. Team Structure

From Brain Dumps, two distinct engineering roles:

**Machine Builders (YOS Engineers):** Build and operate the platform infrastructure — CI/CD, systems, services, databases, deployment. They construct the machine itself.

**Context Engineers:** Prepare the creation base, structure product context, organize feedback from agent responses. Includes: researchers, organizers, instructors, HQAs (High-Quality Assessors). They feed and refine the machine.

## 2. Development Flow (PEV Loop)

**Research → Plan → Execute → Verify**

| Phase | Actor | Output |
| --- | --- | --- |
| **Research** | Agent + Context Engineer | Agent reads context files (T4.1), queries bounded context (5.2), reads relevant ADRs (3.5) |
| **Plan** | Agent, validated by Human | Spec with all template fields (T2.1); human validates against Product Constitution (T1.1) and Autonomy Map (T1.2) |
| **Execute** | Agent within Autonomy Map limits | Code generated within bounded context boundaries; follows Ubiquitous Language (5.1) |
| **Verify** | Multi-layered | Layer 1: Deterministic (lint, types, tests). Layer 2: LLM-as-judge (diff vs spec). Layer 3: Self-correction (agent fixes). Layer 4: Human review |

## 3. Branch Strategy

| Branch | Purpose | Lifespan |
| --- | --- | --- |
| `main` | Production-ready code | Permanent |
| `develop` | Integration branch | Permanent |
| `feature/{context}/{description}` | Feature work within bounded context | Until merged |
| `fix/{context}/{description}` | Bug fixes | Until merged |
| `agent/{task-id}` | Agent-generated work (subject to full PEV verification) | Until verified and merged |

## 4. Code Ownership per Bounded Context

Each bounded context has a human owner responsible for:

- Approving changes to domain model (entities, invariants, events)
- Maintaining context file (T4.1)
- Reviewing agent-generated code for that context
- Ensuring Ubiquitous Language compliance

## 5. Quality Gates

From T1.4 (to be detailed):

- Every change passes deterministic verification (lint, types, tests)
- Domain changes require context owner review
- Security scan for OWASP Top 10 on all PRs
- Agent-generated code flagged for human review at risk level defined by Autonomy Map

## 6. Definition of Done

- Code compiles and passes all tests
- Follows Ubiquitous Language
- Doesn’t violate bounded context boundaries
- Has audit trail (for domain operations)
- Documentation/context file updated if needed
- Spec verified by LLM-as-judge
- Human approved at appropriate autonomy level

---

## Connection to Other Reports

- **→ T1.2 Autonomy Map:** Permission levels for agent development
- **→ T4.1 Context File Architecture:** Files agents read before coding
- **→ T3.1 Multi-Layered Verification:** Detailed verification spec
- **→ 5.2 Bounded Context Map:** Context boundaries for code ownership
- **→ T2.1 Output Templates:** Template for Task (executable unit)