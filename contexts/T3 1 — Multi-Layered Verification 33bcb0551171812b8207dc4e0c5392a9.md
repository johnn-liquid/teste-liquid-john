# T3.1 — Multi-Layered Verification

> **Layer:** T3 — Feedback (Cross-Cutting)
> 

> **Last updated:** April 2026
> 

> **Research:** Spotify Honk uses 3-layer verification. LLM-as-judge vetoes ~25% of sessions for scope creep. Agents self-correct 50% when verification fails.
> 

---

## Verification Layers

### Layer 1: Deterministic

- Lint, type-check, tests, schema validation
- Activated by file detection (e.g., changed `.ts` → run eslint + jest)
- **ALWAYS runs.** No human approval needed to execute this layer.
- Pass/fail: binary. If fail, agent attempts self-correction before escalating.

### Layer 2: LLM-as-Judge

- Model evaluates diff against original spec
- Detects: scope creep, pattern violations, unnecessary complexity, Ubiquitous Language violations
- **Expected veto rate: ~25%** of sessions (based on Spotify data)
- When vetoed: agent receives specific feedback and attempts correction

### Layer 3: Self-Correction

- When Layer 1 or 2 fails, agent attempts to fix the issue
- **Expected success rate: ~50%** (based on Spotify data)
- Max self-correction attempts: 3
- If all attempts fail: escalate to human

### Layer 4: Human Review

- At points defined by Autonomy Map (T1.2)
- Required for: domain model changes, policy modifications, billing logic, security-sensitive operations
- Human review focuses on the spec (T4.3), not the code

## Liquid-Specific Additions

### Layer 5: Policy Compliance Check

- For any agent action that invokes a Policy: verify that the Policy result was followed, not overridden
- **100% compliance required** (Product Constitution C3)
- Any deviation = critical alert + automatic rollback

### Layer 6: Audit Trail Verification

- For any domain operation: verify that an audit record was created in BC11
- Missing audit record = deployment blocked

---

## Connection to Other Reports

- **→ T1.2 Autonomy Map:** Defines when each layer applies
- **→ T1.4 Quality Gates:** Checklists within each verification layer
- **→ 6.1 Development Architecture:** PEV Loop verification step
- **→ T3.4 Learning Loop:** Verification results feed learning