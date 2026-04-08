# T4.2 — Context Window Strategy

> **Layer:** T4 — Context Engineering
> 

> **Last updated:** April 2026
> 

> **Research:** Transformers create n² relationships between tokens. Recall accuracy degrades as context grows. Goal: smallest possible set of high-signal tokens.
> 

---

## Compaction Policy

- Auto-compaction at 95% of context window capacity
- Preserve: architectural decisions, unresolved bugs, current task context, active policy constraints
- Discard: redundant tool outputs, completed sub-task details, historical conversation that’s been summarized

## Preservation Priority

| Priority | Content | Rationale |
| --- | --- | --- |
| 1 (Always) | Product Constitution (C1-C10) | Governance |
| 2 (Always) | Current task objective + acceptance criteria | Focus |
| 3 (Always) | Active bounded context model | Domain accuracy |
| 4 (Preserve) | Relevant ADRs | Decision consistency |
| 5 (Preserve) | Unresolved issues/bugs | Continuity |
| 6 (Compact) | Tool outputs (keep summary, discard raw) | Space |
| 7 (Discard) | Completed sub-task conversations | Space |

## Context Budget per Bounded Context

Each context gets a proportional budget of the window. Core contexts (BC2, BC4, BC6, BC7) get larger budgets. Generic contexts (BC1, BC11, BC12) get minimal budgets.

## Initializer Agent Pattern

Dedicated agent to reconstruct context between sessions: reads last session summary, loads relevant context files, sets up working state for the primary agent.

## Dynamic Loading

Load relevant bounded context on-demand, not everything upfront. Agent requests context for specific bounded contexts as needed during task execution.

---

## Connection: T4.1, T4.4, 5.5.4