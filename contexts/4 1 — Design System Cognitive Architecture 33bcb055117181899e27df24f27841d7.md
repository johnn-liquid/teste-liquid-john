# 4.1 — Design System: Cognitive Architecture

> **Layer:** 4 — Design
> 

> **Question this answers:** How does the user cognitively organize and navigate the system?
> 

> **Last updated:** April 2026
> 

> **Sources:** CEO Braindump (entity descriptions, interface vision), Brain Dumps (interface notes), Referências (Claude, Perplexity, Notion)
> 

---

## 1. Cognitive Organization Principles

Liquid is not a collection of features. It is a **cognitive system** organized around three mental models:

### Mental Model 1: The Workspace as Office

The user thinks of their Workspace as their office. Inside it, they have: team members (agents), projects (channels), a desk (tasks), a filing cabinet (knowledge base), rules posted on the wall (policies), and an inbox. This metaphor must be consistent throughout.

### Mental Model 2: The Chat as Command Center

The primary interaction is conversational (LLM chat). From a single conversation, the user can: analyze credit, create dashboards, route tasks, configure policies, monitor portfolios. The chat is the starting point for everything, not a sidebar feature.

### Mental Model 3: The Funnel as Journey

Stakeholders enter wide (intelligence, exploration) and naturally move deeper (operations, agents, policies, channels) toward liquidity. The UX should make this progression feel natural, not forced.

---

## 2. Information Hierarchy

| Level | What’s Visible | When |
| --- | --- | --- |
| **L1: Global Navigation** | Workspace switcher, user status, main sections (Tasks, Channels, Dashboards, Agents, Inbox, Files, Settings) | Always visible |
| **L2: Section Context** | Current section’s primary view (channel list, dashboard grid, agent list, etc.) | When section is active |
| **L3: Entity Detail** | Full entity view (task conversation, dashboard data, agent configuration, policy builder) | When entity is selected |
| **L4: Supporting Context** | Related entities, connected data, audit trail, cost information | Progressive disclosure |

---

## 3. Key Design Decisions

### Chat-First Interface

Inspired by Claude/ChatGPT but specialized. The chat (Task) is the primary workspace. From it, the user can invoke agents, trigger skills, see policy evaluations, receive artifacts. Unlike generic chat interfaces, Liquid’s chat has domain-specific superpowers: credit analysis results inline, policy decisions displayed with rationale, repasse status updates.

### Status-Rich Entities

Unlike simple document apps, Liquid’s entities carry rich status. A Task has credit analysis status. A Channel has process stage. An Agent has health/performance indicators. These statuses must be visible at a glance (color, icon, position) without requiring the user to open each entity.

### Operating Side Mirrors Client Side

Both sides share UI components but differ in: permission level, data scope, available actions, visible entities (e.g., "Clients" entity only on Operating Side). A Liquid team member should feel at home in both interfaces.

### Progressive Disclosure for Complexity

New users see a simple interface (chat, basic dashboards). As they deepen engagement, more capabilities reveal themselves (channels, policies, agent configuration, routines). Never front-load all complexity.

---

## 4. Visibility of State, Risk, and Action

| Element | Visual Treatment |
| --- | --- |
| **Risk level** | Color-coded (red/yellow/green) with numerical score |
| **Process stage** | Progress indicator with named stages |
| **Agent status** | Activity indicator (working/idle/error) |
| **Cost consumption** | Visible when actions generate cost (per Product Constitution C9) |
| **Policy compliance** | Checkmark/warning for policy evaluation results |
| **Liquidity potential** | Indicator when assets approach liquidity threshold |
| **Verified data** | "Verified by Liquid" badge on data from Monitoring Agents |

---

## 5. Design Tokens (Preliminary)

To be refined by design team:

- **Typography:** Clean, readable, professional (financial industry standard)
- **Color palette:** Dark mode primary (financial/professional); light mode available; risk colors standardized
- **Spacing:** Generous — dense data but not cluttered
- **Grid:** Responsive; desktop-optimized (primary use case) with mobile companion
- **Icons:** Consistent icon system for entities, statuses, actions

---

## 6. Connection to Other Reports

- **→ 4.2 UX Functional Architecture:** Screen/view mapping
- **→ 4.3 Interaction Model:** How humans and agents interact within this design
- **→ 5.1 Ubiquitous Language:** Terms used in the interface
- **→ 3.1 Product-Company Definition:** What the product communicates
- **→ T4.1 Context File Architecture:** How design rules are consumed by agents building UI