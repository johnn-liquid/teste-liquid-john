"use client"

import * as React from "react"
import Link from "next/link"
import { Plus, PanelRight, Download, MoreVertical, Send, X } from "lucide-react"

import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { Textarea } from "@workspace/ui/components/textarea"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

// ── Types ─────────────────────────────────────────────────────────
type Message = {
  id: string
  role: "agent" | "user"
  text: string
  time: string
  artifact?: "credit" | "kpi"
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1", role: "agent", time: "10:24",
    text: "Bom dia! Sou a Luri. Posso analisar crédito, acompanhar repasses e acessar inteligência de mercado. Como posso ajudar?",
  },
  {
    id: "2", role: "user", time: "10:25",
    text: "Análise de crédito: Carlos Eduardo Souza, CPF 123.456.789-00. E também o resumo do pipeline deste mês.",
  },
  {
    id: "3", role: "agent", time: "10:26",
    text: "Bureaux consultados — Serasa, SPC e Receita Federal. Análise concluída:",
    artifact: "credit",
  },
  {
    id: "4", role: "agent", time: "10:26",
    text: "Resumo do pipeline de repasse — Abril 2026:",
    artifact: "kpi",
  },
]

const SUGGESTIONS = [
  "Analisar crédito de comprador",
  "Ver pipeline do mês",
  "Gerar relatório de repasse",
]

// ── Agent avatar ──────────────────────────────────────────────────
function AgentAvatar() {
  return (
    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <circle cx="12" cy="8" r="5"/><path d="M3 21a9 9 0 0 1 18 0"/>
      </svg>
    </div>
  )
}

// ── Credit artifact ───────────────────────────────────────────────
function CreditArtifactFull() {
  return (
    <div className="p-5 space-y-4">
      <div>
        <div className="text-base font-semibold">Carlos Eduardo Souza</div>
        <div className="text-xs text-muted-foreground mt-0.5">CPF 123.456.789-00 · 08/04/2026</div>
        <Badge className="mt-2 bg-[var(--green)]/15 text-[var(--green)] border-0">Aprovado</Badge>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Score Serasa", value: "742" },
          { label: "Score SPC",   value: "688" },
          { label: "Comprometimento", value: "34,2%" },
          { label: "Limite Sugerido",  value: "R$520k" },
          { label: "Renda Bruta",      value: "R$12.400" },
          { label: "Capacidade",       value: "R$4.464" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-muted rounded-lg p-3">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
            <div className="text-sm font-semibold">{value}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">Score Gauge</div>
        <svg viewBox="0 0 200 110" className="w-full">
          <path d="M20 100 A80 80 0 0 1 180 100" stroke="var(--border)" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M20 100 A80 80 0 0 1 180 100" stroke="var(--green)" strokeWidth="16" fill="none" strokeLinecap="round" strokeDasharray="188 251" />
          <text x="100" y="95" textAnchor="middle" className="text-2xl font-bold" fill="currentColor" fontSize="28" fontWeight="700">742</text>
          <text x="100" y="112" textAnchor="middle" fill="var(--muted-foreground)" fontSize="11">Score Serasa</text>
        </svg>
      </div>
      <div className="flex gap-2 pt-2 border-t border-border">
        <Button size="sm" className="flex-1">Encaminhar para Repasse</Button>
        <Button size="sm" variant="outline">Ver Histórico</Button>
      </div>
    </div>
  )
}

// ── KPI artifact ──────────────────────────────────────────────────
function KpiArtifactFull() {
  const bars = [
    { label: "Bradesco", value: 38, color: "var(--chart-1)" },
    { label: "Caixa",    value: 52, color: "var(--chart-2)" },
    { label: "Itaú",     value: 29, color: "var(--chart-3)" },
    { label: "Santander",value: 23, color: "var(--chart-4)" },
  ]
  return (
    <div className="p-5 space-y-4">
      <div>
        <div className="text-base font-semibold">Pipeline Repasse — Abril 2026</div>
        <div className="text-xs text-muted-foreground mt-0.5">Atualizado em tempo real</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Em análise",  value: "38", color: "text-[var(--yellow)]" },
          { label: "Aprovados",   value: "24", color: "text-[var(--green)]" },
          { label: "Reprovados",  value: "7",  color: "text-[var(--red)]"  },
          { label: "Encaminhados",value: "73", color: "" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-muted rounded-lg p-3">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
            <div className={cn("text-2xl font-bold", color)}>{value}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-xs font-medium mb-3 text-muted-foreground uppercase tracking-wider">Distribuição por Banco</div>
        <div className="space-y-2">
          {bars.map(({ label, value, color }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground w-20 flex-shrink-0">{label}</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${value}%`, background: color }} />
              </div>
              <span className="text-xs font-medium w-6 text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Inline artifact card ──────────────────────────────────────────
function InlineArtifact({ type, onOpen }: { type: "credit" | "kpi"; onOpen: () => void }) {
  if (type === "credit") {
    return (
      <div className="mt-2 border border-border rounded-lg overflow-hidden bg-card">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/30">
          <span className="text-[11px] text-muted-foreground flex-1">Card · Análise de Crédito</span>
          <Badge className="bg-[var(--green)]/15 text-[var(--green)] border-0 text-[10px] h-4">Aprovado</Badge>
          <Button variant="ghost" size="sm" className="h-6 text-[11px] px-2" onClick={onOpen}>
            <PanelRight className="w-3 h-3 mr-1" /> Abrir
          </Button>
        </div>
        <div className="p-3">
          <div className="text-sm font-semibold">Carlos Eduardo Souza</div>
          <div className="text-[11px] text-muted-foreground mb-2">CPF 123.456.789-00 · 08/04/2026</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {[["Score Serasa","742"],["Score SPC","688"],["Comprometimento","34,2%"],["Limite Sugerido","R$520k"]].map(([l,v])=>(
              <div key={l}>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{l}</div>
                <div className="text-sm font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="mt-2 border border-border rounded-lg overflow-hidden bg-card">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/30">
        <span className="text-[11px] text-muted-foreground flex-1">KPI · Pipeline Repasse</span>
        <Button variant="ghost" size="sm" className="h-6 text-[11px] px-2" onClick={onOpen}>
          <PanelRight className="w-3 h-3 mr-1" /> Abrir
        </Button>
      </div>
      <div className="p-3 grid grid-cols-4 gap-2">
        {[["Em análise","38"],["Aprovados","24"],["Reprovados","7"],["Encaminhados","73"]].map(([l,v])=>(
          <div key={l} className="text-center">
            <div className="text-lg font-bold">{v}</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────
export function ChatView() {
  const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = React.useState("")
  const [typing, setTyping] = React.useState(false)
  const [artifactOpen, setArtifactOpen] = React.useState(false)
  const [artifactTab, setArtifactTab] = React.useState<"credit" | "kpi">("credit")
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, typing])

  function sendMessage(text: string) {
    if (!text.trim()) return
    const userMsg: Message = { id: Date.now().toString(), role: "user", text: text.trim(), time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const reply: Message = {
        id: (Date.now() + 1).toString(), role: "agent", time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
        text: "Certo, processando sua solicitação. Os dados estão sendo consultados nos bureaux integrados.",
      }
      setMessages(prev => [...prev, reply])
    }, 1800)
  }

  function openArtifact(tab: "credit" | "kpi") {
    setArtifactTab(tab)
    setArtifactOpen(true)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Topbar */}
      <header className="flex items-center gap-2 h-12 px-4 border-b border-border flex-shrink-0">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4" />
        <span className="text-xs text-muted-foreground">Tasks</span>
        <span className="text-xs text-muted-foreground">›</span>
        <span className="text-sm font-medium">Análise de Crédito — Abril 2026</span>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 gap-1.5 text-xs"
            onClick={() => setArtifactOpen(!artifactOpen)}
          >
            <PanelRight className="w-3.5 h-3.5" />
            Artefato
          </Button>
          <Button size="sm" variant="secondary" className="h-7 text-xs">
            <Plus className="w-3 h-3" /> Nova Task
          </Button>
          <ThemeToggle />
        </div>
      </header>

      {/* Split pane */}
      <div className="flex flex-1 min-h-0">

        {/* Chat */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border bg-card/50">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="12" cy="8" r="5"/><path d="M3 21a9 9 0 0 1 18 0"/>
                </svg>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[var(--green)] border-2 border-background" />
            </div>
            <div>
              <div className="text-sm font-semibold">Luri Credit Agent</div>
              <div className="text-[10px] text-[var(--green)]">Online</div>
            </div>
            <div className="ml-auto flex gap-1">
              <Button variant="ghost" size="icon" className="w-7 h-7"><Download className="w-3.5 h-3.5" /></Button>
              <Button variant="ghost" size="icon" className="w-7 h-7"><MoreVertical className="w-3.5 h-3.5" /></Button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
            <div className="max-w-2xl mx-auto space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex gap-3", msg.role === "user" && "flex-row-reverse")}>
                  {msg.role === "agent" ? (
                    <AgentAvatar />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold flex items-center justify-center flex-shrink-0">
                      J
                    </div>
                  )}
                  <div className={cn("flex-1 min-w-0", msg.role === "user" && "items-end flex flex-col")}>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-medium">{msg.role === "agent" ? "Luri" : "Você"}</span>
                      <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                    </div>
                    <div className={cn(
                      "text-sm leading-relaxed",
                      msg.role === "user" && "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-3 py-2 inline-block max-w-sm"
                    )}>
                      {msg.text}
                    </div>
                    {msg.artifact && (
                      <InlineArtifact type={msg.artifact} onOpen={() => openArtifact(msg.artifact!)} />
                    )}
                    {msg.id === "1" && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {SUGGESTIONS.map(s => (
                          <button key={s} className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-accent transition-colors" onClick={() => setInput(s)}>
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex gap-3">
                  <AgentAvatar />
                  <div className="flex items-center gap-1 px-3 py-2.5 bg-muted rounded-2xl rounded-tl-sm">
                    {[0, 1, 2].map(i => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-[tdot_1.4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.16}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-border">
            <div className="max-w-2xl mx-auto flex gap-2 items-end">
              <Textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input) } }}
                placeholder="Escreva uma mensagem para a Luri..."
                className="min-h-[40px] max-h-32 resize-none text-sm"
                rows={1}
              />
              <Button size="icon" className="h-10 w-10 flex-shrink-0" onClick={() => sendMessage(input)} disabled={!input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Artifact Panel */}
        {artifactOpen && (
          <div className="w-80 xl:w-96 border-l border-border flex flex-col flex-shrink-0">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
              <Tabs value={artifactTab} onValueChange={v => setArtifactTab(v as "credit" | "kpi")}>
                <TabsList className="h-7">
                  <TabsTrigger value="credit" className="text-xs h-6 px-2.5">Crédito</TabsTrigger>
                  <TabsTrigger value="kpi" className="text-xs h-6 px-2.5">KPI</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="ghost" size="icon" className="w-7 h-7" onClick={() => setArtifactOpen(false)}>
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
            <ScrollArea className="flex-1">
              {artifactTab === "credit" ? <CreditArtifactFull /> : <KpiArtifactFull />}
            </ScrollArea>
          </div>
        )}

      </div>
    </div>
  )
}
