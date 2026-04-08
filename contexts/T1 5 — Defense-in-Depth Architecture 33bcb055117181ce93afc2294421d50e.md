# T1.5 — Defense-in-Depth Architecture

> **Layer:** T1 — Governance
> 

> **Last updated:** April 2026
> 

---

## 5 Defense Layers for Agent Actions

| Layer | Function | Latency Target | Liquid Implementation |
| --- | --- | --- | --- |
| **1. Input screening** | Validate prompt/input before processing | < 30ms | Input sanitization, injection detection, permission check |
| **2. Dialog/action control** | Verify agent has permission for requested action | 50-200ms | Autonomy Map (T1.2) check, workspace permission verification |
| **3. LLM generation** | Output generation by the model | Variable | Claude API with structured outputs where possible |
| **4. Output validation** | Validate generated output before delivery | < 50ms | Schema validation, policy compliance check, PII detection |
| **5. Business rules** | Human review if trigger activated | < 10ms (decision to escalate) | Liquidity trigger validation, credit threshold check, billing verification |

## Liquid-Specific Defense Points

- **Policy compliance gate (between Layer 3 and 4):** Every agent output that involves a decision must be checked against applicable Policies. If policy exists and wasn’t consulted, OUTPUT BLOCKED.
- **Entity resolution gate (Layer 2):** Any entity creation/modification passes through deduplication check before proceeding.
- **Cross-tenant gate (Layer 2):** Any data access that could cross tenant boundaries requires explicit authorization verification.
- **Billing gate (Layer 4):** Any action that generates cost must be logged before output is delivered to user.

---

## Connection: T1.1, T1.2, T1.3, T1.6, 5.5