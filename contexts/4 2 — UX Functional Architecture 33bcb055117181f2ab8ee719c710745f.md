# 4.2 — UX Functional Architecture

> **Layer:** 4 — Design
> 

> **Question this answers:** What views exist, how are entities distributed, and what journeys do users follow?
> 

> **Last updated:** April 2026
> 

---

## 1. View / Screen Map

### Client Side

| View | Primary Entities | Key Actions |
| --- | --- | --- |
| **Home / Dashboard Hub** | Dashboards (Liquid-provided + user-created) | View market intelligence, create dashboards, follow updates |
| **Tasks (Chat)** | Tasks, Agents | Create new task, converse with agents, receive artifacts, invoke skills |
| **Channels** | Channels, Tasks within channels, Knowledge Base | Browse channels, view kanban/list, manage process workflows |
| **Agents** | Agents (Liquid + Team) | Browse agents, create Team Agents, configure skills/connectors |
| **Inbox** | Notifications, pending actions | Respond to actions, review triggers, accept invitations |
| **Dashboards** | Dashboards | View, create, share, publish dashboards |
| **Routines** | Routines (scheduled tasks) | Create, schedule, monitor recurring agent tasks |
| **Files / KB** | Documents, knowledge artifacts | Upload, organize, browse knowledge base |
| **Settings** | Users, Roles, Billing, Activity Log | Manage workspace, permissions, billing, view audit trail |
| **Policy Builder** | Policies | Create, edit, test, deploy deterministic policies |
| **Connectors** | Data sources | Configure, test, manage external integrations |

### Operating Side (Additional Views)

| View | Primary Entities | Key Actions |
| --- | --- | --- |
| **Clients** | All client workspaces | Browse clients, view consumption, access logs |
| **Liquidity Board** | All active Liquidity Channels across clients | Monitor, filter, manage all liquidity operations |
| **Agent Admin** | All agents (internal + client-facing) | Configure, deploy, monitor agents |
| **Billing Admin** | Plans, client billing, consumption | Create plans, manage pricing, view financials |
| **Internal Channels** | Finance, CS, Bugs, Features channels | Internal operations with agent+human collaboration |

---

## 2. Primary Journeys per JTBD

### Journey 1: Credit Analysis (Analyst)

1. Open new Task (chat)
2. Request credit analysis for buyer (provide CPF or name)
3. Agent orchestrates bureau queries via Connectors
4. Agent applies Policy for deterministic decision
5. Agent presents structured credit report as artifact
6. Analyst reviews, approves/adjusts
7. Result stored in audit trail
8. If repasse eligible, suggest routing to Repasse Channel

### Journey 2: Repasse Management (Coordinator)

1. Navigate to Repasse Channel (or create via Task)
2. View kanban of all active repasse contracts
3. Select a contract → see full timeline (agent interactions, status changes, documents)
4. Agent suggests next action based on current status
5. If buyer data needed, Orbital Agent collects via WhatsApp
6. Agent prepares bank submission package
7. Human approves and submits
8. Status updates automatically as process advances

### Journey 3: Market Intelligence (Executive)

1. Open Dashboard Hub
2. Browse Liquid-provided market dashboards
3. Request custom dashboard via chat ("Show me MCMV repasse performance in SP")
4. Agent creates dashboard with data from Monitoring Agents + Connectors
5. Dashboard persists and auto-updates
6. Executive publishes dashboard (SEO-indexed) or shares internally

### Journey 4: Liquidity Operation (Triggered)

1. Liquidity Agent detects asset meeting liquidity criteria
2. System creates Channel de Liquidez (notification via Inbox)
3. Client reviews opportunity in Liquidity Channel
4. Operating Side agents + team begin analysis
5. Transaction structured collaboratively in channel
6. Human approvals at key decision points
7. Transaction executed, take rate calculated
8. Audit trail records entire process

---

## 3. Navigation Architecture

```
Global Nav (sidebar)
├─ Home (Dashboard Hub)
├─ Tasks (new + history)
├─ Channels
│   ├─ #general (default)
│   ├─ [user channels]
│   └─ [liquidity channels] (when triggered)
├─ Agents
├─ Inbox
├─ Dashboards
├─ Routines
├─ Files / KB
├─ Policies
├─ Connectors
└─ Settings
    ├─ Users & Permissions
    ├─ Activity Log
    └─ Billing
```

---

## 4. Connection to Other Reports

- **→ 4.1 Design System:** Visual and cognitive principles
- **→ 4.3 Interaction Model:** How agents interact within these views
- **→ 5.2 Bounded Context Map:** Which contexts power which views
- **→ 2.2 Human System Map:** Personas following these journeys
- **→ 3.1 Product-Company Definition:** Product scope these views realize