# T1.1 — Product Constitution + Conflict Resolution

> **Layer:** T1 — Governance (Cross-Cutting)
> 

> **Question this answers:** What can and cannot be done? How to decide when there’s ambiguity?
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump, Report 1.2 (Non-Negotiables), Context Map v3, Brain Dumps
> 

---

## 1. Product Constitution

These are decision principles and non-negotiables. Short, direct, no room for interpretation. Every agent and every human must follow these.

---

### C1: Liquidity is the destination, always.

Every feature, every agent, every workflow must be traceable to its contribution toward generating liquidity. If it doesn’t contribute to bringing assets closer to liquidity (directly or by building the infrastructure that enables it), it needs a strong justification.

### C2: Governance is infrastructure, not decoration.

Audit trails, deterministic policies, and compliance checks are not optional features. They are part of the system’s foundation. A feature without governance support in a regulated context does not ship.

### C3: Agents operate under policies, never above them.

No agent may override a Policy. Policies are deterministic and unbreakable. When an agent encounters a policy, it follows the policy’s output. No reasoning, no creativity, no "I think this case is different." If a policy produces the wrong result, a human changes the policy — never the agent.

### C4: The entity is sacred.

Entity resolution (same CPF = same entity across the system) is a foundational data principle. No process, no shortcut, no "we’ll fix it later" may create duplicate entities. If entity resolution is uncertain, the system flags for human review rather than creating a potential duplicate.

### C5: English-first for technology, local for users.

All code, documentation, APIs, and internal naming follow English conventions. User-facing content adapts per locale. Business rules are modular per jurisdiction. This is non-negotiable and cannot be deferred.

### C6: The human has the last word on high-stakes decisions.

Credit approvals, liquidity triggers, portfolio transactions, and any action with financial or legal consequences require human-in-the-loop confirmation unless explicitly configured otherwise by the client via Policy.

### C7: Speed beats elegance, except when it doesn’t.

In general, ship fast, iterate, learn. **Exceptions where elegance/correctness wins over speed:** (a) anything touching billing or financial calculations, (b) entity resolution, (c) compliance/audit trails, (d) policy engine logic, (e) security and authentication.

### C8: The platform is the product and the funnel.

Product decisions that don’t consider growth implications are incomplete. Marketing and sales are not separate departments — they are product features. Every interface should ask: does this help acquire, activate, retain, or expand?

### C9: Every action has a cost, every cost has a limit.

Token consumption, bureau queries, and infrastructure usage must be tracked, attributed, and controlled. No unbounded agent loops. No unmetered external API calls. Every action has a measurable cost and a configured ceiling.

### C10: Data verified by Liquid > data from public sources.

When Liquid’s Monitoring Agents have structured and verified data about an entity, that data takes precedence over raw public data. The proprietary knowledge base is the preferred source of truth, with public data as supplement.

---

## 2. Conflict Resolution Protocol

### Priority Hierarchy Between Concerns

When two decisions, principles, or layers conflict, this hierarchy arbitrates:

1. **Security and regulatory compliance** (LGPD, Bacen, CVM) — always first
2. **Data integrity** (entity resolution, audit trail, no data loss)
3. **Production system stability** (don’t break what’s working)
4. **Financial accuracy** (billing, transaction calculations)
5. **User experience** (client-facing quality)
6. **Delivery speed** (velocity of shipping)
7. **Technical elegance** (code quality, architecture purity)

### Application Rules

| Situation | Resolution |
| --- | --- |
| Two concerns at the **same level** conflict | Escalate to human decision-maker |
| Lower-level concern **blocks** a higher-level one | Higher level prevails; record the trade-off in an AgDR (Agent Decision Record) |
| Execution Intent (3.6) **contradicts** this hierarchy | The hierarchy prevails, but human must be notified |
| No clear rule exists | Agent stops, records the conflict with context, and requests human decision |
| A non-negotiable principle (C1-C10) conflicts with a pragmatic need | The principle prevails in the short term; if recurring, the principle may be reviewed by CEO but never by agents |

### Escalation Protocol

1. **Agent detects conflict** → Stops current action
2. **Agent documents** → Logs the conflict: what conflicted, which principles/rules, what options exist
3. **Agent notifies** → Sends notification to appropriate human (via Inbox)
4. **Human decides** → Makes the call
5. **Decision recorded** → Stored as AgDR
6. **Pattern detection** → If same conflict recurs 3+ times, it becomes a candidate for a new rule in this Constitution

---

## 3. Decision Principles for Common Situations

### When to prioritize speed over elegance

- Non-critical UI changes, content updates, experiment setups
- Features in exploration phase (3.6 "In Exploration")
- Internal tools that don’t face clients

### When to prioritize stability over innovation

- Any change to production systems serving paying clients
- Changes to entity resolution, billing, or audit systems
- During active liquidity operations

### When a provisional solution is acceptable

- When it’s explicitly time-boxed (max 30 days)
- When it doesn’t touch core domain logic (entities, policies, billing)
- When it has a clear migration path to the permanent solution
- When it’s documented in an ADR with a revisit trigger

### When something requires mandatory human intervention

- Any liquidity trigger activation
- Credit approval/denial for amounts > configured threshold
- Policy changes (creation, modification, deletion)
- Entity merge/split decisions
- Billing plan changes
- Cross-tenant data operations
- Changes to this Product Constitution

### What constitutes a serious regression

- Any loss of audit trail data
- Entity duplication
- Billing calculation errors
- Policy bypass by agents
- Authentication/authorization failures
- Data exposure between tenants

---

## 4. Amendment Process

This Constitution is a living document. Amendments require:

1. Written proposal with reasoning
2. CEO approval
3. Impact assessment on existing agents and workflows
4. Documentation in the Decision Log (T3.2)
5. Update to root context file (T4.1) so all agents consume the new version

**Amendments never retroactively change past decisions.** They only affect future actions.

---

## 5. Connection to Other Reports

- **→ 1.2 Non-Negotiables:** The seven principles that this Constitution operationalizes
- **→ T1.2 Autonomy Map:** What agents can and cannot do at each level
- **→ T1.4 Quality Gates:** Specific checklists derived from these principles
- **→ T2.1 Output Templates:** How decisions (including conflicts) are documented
- **→ T4.1 Context File Architecture:** How this Constitution is loaded into agent context
- **→ 5.5.8 Human-in-the-Loop:** Detailed specification of when humans intervene