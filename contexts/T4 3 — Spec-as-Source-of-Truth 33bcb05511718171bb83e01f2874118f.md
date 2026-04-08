# T4.3 — Spec-as-Source-of-Truth

> **Layer:** T4 — Context Engineering
> 

> **Last updated:** April 2026
> 

> **Research:** Sean Grove (OpenAI): "Specifications, not code, should be the fundamental unit of programming."
> 

---

## Core Principle

Specs are version-controlled in git as primary artifacts. Code is derived from specs (regenerable). Spec changes trigger code re-generation. Human review focuses on the spec, not the code.

## Workflow

1. **Spec creation:** Human or agent creates spec using Feature Proposal or Technical Spec template (T2.1)
2. **Spec review:** Human validates spec against Product Constitution, ADRs, domain model
3. **Code generation:** Agent generates code from approved spec (PEV Loop, 6.1)
4. **Verification:** Multi-layered verification (T3.1) checks code against spec
5. **Spec versioning:** Spec and code committed together; spec is the source of truth
6. **Spec history:** Feeds decision log and procedural memory

## Directory Structure

```
/specs
  /features
    FEAT-001-agentic-repasse.md
    FEAT-002-kernel-scoring.md
  /technical
    TECH-001-entity-resolution.md
  /adrs
    ADR-001-unified-platform.md
    ...
/src (generated from specs)
```

## Implications for Liquid

- Context Map reports (this project) serve as the highest-level specs
- Feature specs reference Context Map sections
- Agent-generated code always traces back to a spec
- When reality diverges from spec, update the spec first, then regenerate code

---

## Connection to Other Reports

- **→ T4.1 Context File Architecture:** Specs are part of the file architecture
- **→ 6.1 Development Architecture:** PEV Loop implements this workflow
- **→ T2.1 Output Templates:** Spec templates
- **→ T3.1 Verification:** LLM-as-judge verifies code against spec