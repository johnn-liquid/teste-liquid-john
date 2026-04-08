# 4.3 — Interaction Model

> **Layer:** 4 — Design
> 

> **Question this answers:** Where does the agentic layer meet the UX? How do all actors interact?
> 

> **Last updated:** April 2026
> 

---

## 1. Interaction Channels

### Human → System (Direct)

- Forms (workspace setup, user profile, connector configuration)
- Policy Builder (visual no-code policy creation)
- Dashboard configuration (data source selection, visualization choices)
- Settings (permissions, billing preferences)
- File uploads (knowledge base, documents)

### Human → Agent (Conversational)

- **Natural language prompts** in Task chat ("Analyze credit for CPF 123.456.789-00")
- **Commands** to specific agents ("@credit-analyst run CA-600 for this buyer")
- **Delegations** ("Create a repasse channel for Empreendimento XYZ")
- **Approvals** ("Approve this credit decision" / "Reject and explain why")
- **Configuration** ("Monitor Cyrela quarterly reports and alert me on changes")

### Agent → Human (Proactive)

- **Suggestions** ("Based on this portfolio, I recommend contacting Fund X for potential transaction")
- **Alerts** ("Risk score for Buyer Y has dropped below threshold")
- **Narratives** ("Here’s your weekly portfolio health summary...")
- **Decision requests** ("Policy requires human approval for this credit amount. Please review.")
- **Status updates** ("Repasse for contract #217 advanced to bank submission stage")
- **Cost notifications** ("This action will consume X working units. Proceed?")

### Agent → Agent (Internal)

- **Handoffs** (Orchestrator → Skill Agent: "Execute credit analysis skill")
- **Delegations** (Credit Agent → Orbital Agent: "Collect Open Finance consent from buyer via WhatsApp")
- **Escalations** (Skill Agent → Orchestrator: "I need additional data from bureau connector")
- **Results** (Orbital Agent → Credit Agent: "Consent received, here’s the data")
- **Trigger notifications** (Liquidity Agent → Orchestrator: "Asset meets liquidity criteria")

### System → System (Events)

- Domain events crossing bounded contexts (see 5.2)
- Webhook integrations with external systems
- Bureau API responses
- Open Finance data feeds
- Billing events

---

## 2. Events and Notifications

| Event | Trigger | Who Gets Notified | Channel |
| --- | --- | --- | --- |
| Task completed | Agent finishes analysis | Task creator | Inbox + in-chat |
| Policy evaluation | Agent hits policy checkpoint | Task creator (if manual approval needed) | Inbox |
| Liquidity trigger | Asset meets liquidity criteria | Workspace admins + Operating Side | Inbox + Liquidity Channel created |
| Routine completed | Scheduled agent task finishes | Routine creator | Inbox |
| Risk alert | Monitoring Agent detects anomaly | Dashboard followers + relevant users | Inbox + Dashboard update |
| Repasse status change | Process advances to new stage | Repasse coordinator + buyer (via Orbital) | Inbox + Channel update |
| Cost threshold | Usage approaches billing limit | Workspace billing admin | Inbox + email |
| New team member | User added to workspace | Workspace admins | Inbox |

---

## 3. Timelines and Operational Narratives

Every entity in the system has a **timeline** — a chronological narrative of everything that happened:

- Task timeline: every message, agent action, artifact created, policy evaluated, status change
- Channel timeline: all tasks, status changes, agent actions within the channel
- Entity timeline: all queries, assessments, changes related to a market entity
- Liquidity Channel timeline: full operational narrative from trigger to transaction completion

Timelines are the primary audit artifact. They are immutable (per Product Constitution C4) and always available.

---

## 4. Connection to Other Reports

- **→ 4.1 Design System:** How interactions are visually represented
- **→ 4.2 UX Functional Architecture:** Where these interactions happen in the UI
- **→ 5.5 Agentic Architecture:** Agent roles and communication protocols
- **→ 5.5.8 Human-in-the-Loop:** Detailed spec of human intervention points
- **→ T2.3 Agent Protocol Contracts:** Technical contracts for agent interactions
- **→ BC12 Notifications:** Implementation of notification routing