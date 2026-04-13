"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home, MessageSquare, ScanSearch, LayoutGrid, Inbox,
  LayoutDashboard, Shield, BookOpen, Link2, Settings,
  ChevronDown, ChevronsUpDown, Plus, Download, Search,
  Check,
} from "lucide-react"

import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup,
  SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import {
  Sheet, SheetContent, SheetHeader, SheetTitle,
} from "@workspace/ui/components/sheet"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

// ── Workspace data ────────────────────────────────────────────────
const WORKSPACES = [
  { id: "liquid",    name: "Liquid OS",       role: "Admin",  members: 5,  letter: "L", color: "bg-primary text-primary-foreground" },
  { id: "imoveis",  name: "Imóveis SP",      role: "Member", members: 12, letter: "I", color: "bg-[oklch(.55_.2_55/40%)] text-[var(--orange)]" },
  { id: "construtech", name: "Construtech RJ", role: "Admin", members: 3, letter: "C", color: "bg-[oklch(.5_.2_280/40%)] text-[var(--purple)]" },
  { id: "credito",  name: "Crédito Nacional", role: "Viewer", members: 28, letter: "N", color: "bg-[oklch(.5_.2_145/40%)] text-[var(--green)]" },
]

// ── Nav items ─────────────────────────────────────────────────────
const NAV_MAIN = [
  { href: "/",         label: "Início",   icon: Home },
  { href: "/tasks",    label: "Tasks",    icon: MessageSquare },
  { href: "/pesquisa", label: "Pesquisa", icon: ScanSearch },
]
const NAV_WORK = [
  { href: "/channels",   label: "Channels",   icon: LayoutGrid },
  { href: "/inbox",      label: "Inbox",      icon: Inbox,           badge: "3", badgeVariant: "destructive" as const },
  { href: "/dashboards", label: "Dashboards", icon: LayoutDashboard },
]
const NAV_AGENTS = [
  { href: "/agents/luri",   label: "Luri Credit",  dot: "var(--green)",   badge: "live" },
  { href: "/agents/bureau", label: "Bureau Agent", dot: "var(--chart-1)" },
  { href: "/agents/market", label: "Market Agent", dot: "var(--yellow)" },
  { href: "/agents/orbital",label: "Orbital Agent",dot: "var(--purple)" },
]
const NAV_CONFIG = [
  { href: "/policies",  label: "Policies",      icon: Shield },
  { href: "/knowledge", label: "Knowledge Base", icon: BookOpen },
  { href: "/connectors",label: "Connectors",     icon: Link2 },
  { href: "/settings",  label: "Settings",       icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [wsOpen, setWsOpen] = React.useState(false)
  const [activeWs, setActiveWs] = React.useState(WORKSPACES[0]!);

  return (
    <>
      <Sidebar>
        {/* ── Header ─────────────────────────────────── */}
        <SidebarHeader className="gap-0 pb-2">
          <div className="flex items-center gap-2 px-3 pt-3 pb-2">
            {/* Logo mark */}
            <div className="text-foreground flex-shrink-0 w-5 h-5">
              <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
                <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Z" fill="currentColor" fillOpacity=".25"/>
                <path d="M8 5a3 3 0 1 1 0 6A3 3 0 0 1 8 5Z" fill="currentColor"/>
              </svg>
            </div>
            {/* Workspace trigger */}
            <button
              className="flex-1 flex items-center gap-1 text-left text-sm font-medium hover:text-foreground text-sidebar-foreground truncate min-w-0"
              onClick={() => setWsOpen(true)}
            >
              <span className="truncate">{activeWs.name}</span>
              <ChevronDown className="w-3 h-3 text-muted-foreground flex-shrink-0" />
            </button>
            <Button variant="ghost" size="icon" className="w-6 h-6 flex-shrink-0">
              <Search className="w-3.5 h-3.5" />
            </Button>
          </div>
        </SidebarHeader>

        {/* ── Content ────────────────────────────────── */}
        <SidebarContent>
          {/* Main nav */}
          <SidebarGroup>
            <SidebarMenu>
              {NAV_MAIN.map(({ href, label, icon: Icon }) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton asChild isActive={pathname === href}>
                    <Link href={href}>
                      <Icon className="w-4 h-4" />
                      {label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          {/* Work */}
          <SidebarGroup>
            <SidebarGroupLabel>Work</SidebarGroupLabel>
            <SidebarMenu>
              {NAV_WORK.map(({ href, label, icon: Icon, badge }) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton asChild isActive={pathname === href}>
                    <Link href={href}>
                      <Icon className="w-4 h-4" />
                      {label}
                      {badge && (
                        <Badge variant="destructive" className="ml-auto h-4 px-1.5 text-[10px]">
                          {badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          {/* Agents */}
          <SidebarGroup>
            <SidebarGroupLabel>Agents</SidebarGroupLabel>
            <SidebarMenu>
              {NAV_AGENTS.map(({ href, label, dot, badge }) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton asChild isActive={pathname === href}>
                    <Link href={href}>
                      <span
                        className={cn("w-2 h-2 rounded-full flex-shrink-0", badge === "live" && "animate-[livepulse_2s_ease-in-out_infinite]")}
                        style={{ background: dot }}
                      />
                      {label}
                      {badge === "live" && (
                        <Badge className="ml-auto h-4 px-1.5 text-[10px] bg-[var(--green)]/20 text-[var(--green)] border-0">
                          live
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          {/* Config */}
          <SidebarGroup>
            <SidebarGroupLabel>Config</SidebarGroupLabel>
            <SidebarMenu>
              {NAV_CONFIG.map(({ href, label, icon: Icon }) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton asChild isActive={pathname === href}>
                    <Link href={href}>
                      <Icon className="w-4 h-4" />
                      {label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        {/* ── Footer ─────────────────────────────────── */}
        <SidebarFooter>
          <button
            className="flex items-center gap-2 w-full px-2 py-2 rounded-md hover:bg-sidebar-accent transition-colors"
            onClick={() => setWsOpen(true)}
          >
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold flex items-center justify-center flex-shrink-0">
              J
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="text-xs font-medium text-sidebar-foreground">Johnn Maia</div>
              <div className="text-[10px] text-muted-foreground truncate">{activeWs.name} · {activeWs.role}</div>
            </div>
            <ChevronsUpDown className="w-3 h-3 text-muted-foreground flex-shrink-0" />
          </button>
        </SidebarFooter>
      </Sidebar>

      {/* ── Workspace Switcher Sheet ──────────────── */}
      <Sheet open={wsOpen} onOpenChange={setWsOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetHeader className="px-4 pt-4 pb-3 border-b border-border">
            <SheetTitle className="text-sm">Workspaces</SheetTitle>
          </SheetHeader>
          <div className="py-1">
            {WORKSPACES.map((ws) => (
              <button
                key={ws.id}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-accent transition-colors text-left"
                onClick={() => { setActiveWs(ws); setWsOpen(false) }}
              >
                <div className={cn("w-8 h-8 rounded-md text-sm font-semibold flex items-center justify-center flex-shrink-0", ws.color)}>
                  {ws.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{ws.name}</div>
                  <div className="text-[11px] text-muted-foreground">{ws.role} · {ws.members} membros</div>
                </div>
                {activeWs.id === ws.id && <Check className="w-3.5 h-3.5 text-primary" />}
              </button>
            ))}
          </div>
          <Separator />
          <div className="py-1">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-accent transition-colors text-sm text-muted-foreground">
              <Plus className="w-4 h-4" /> Criar novo workspace
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-accent transition-colors text-sm text-muted-foreground">
              <Download className="w-4 h-4" /> Gerenciar workspaces
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
