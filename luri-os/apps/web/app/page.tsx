import Link from "next/link"
import { TrendingUp, TrendingDown, Plus } from "lucide-react"

import { PageShell } from "@/components/page-shell"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"

function StatCard({ label, value, delta, up, sparkColor, sparkPoints }: {
  label: string; value: string; delta: string; up: boolean
  sparkColor: string; sparkPoints: string
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-[11px] text-muted-foreground uppercase tracking-wide mb-1">{label}</div>
        <div className="text-2xl font-semibold">{value}</div>
        <div className={`flex items-center gap-1 text-[11px] mt-0.5 ${up ? "text-[var(--green)]" : "text-[var(--red)]"}`}>
          {up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {delta}
        </div>
        <svg viewBox="0 0 80 30" fill="none" className="mt-1 w-full">
          <polyline points={sparkPoints} stroke={sparkColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points={`${sparkPoints} 80,30 0,30`} fill={sparkColor} fillOpacity=".15" />
        </svg>
      </CardContent>
    </Card>
  )
}

function StatusDot({ color, pulse }: { color: string; pulse?: boolean }) {
  return (
    <span
      className={`w-2 h-2 rounded-full flex-shrink-0 ${pulse ? "animate-[livepulse_2s_ease-in-out_infinite]" : ""}`}
      style={{ background: color }}
    />
  )
}

function BadgeStatus({ color, children }: { color: string; children: React.ReactNode }) {
  const styles: Record<string, string> = {
    green:  "bg-[var(--green)]/15 text-[var(--green)] border-0",
    yellow: "bg-[var(--yellow)]/15 text-[var(--yellow)] border-0",
    red:    "bg-[var(--red)]/15 text-[var(--red)] border-0",
    muted:  "bg-muted text-muted-foreground border-0",
  }
  return (
    <Badge className={`text-[10px] h-5 px-1.5 ${styles[color] ?? styles.muted}`}>{children}</Badge>
  )
}

export default function HomePage() {
  return (
    <PageShell
      breadcrumb={<span className="text-sm font-medium">Início</span>}
      actions={
        <Button size="sm" asChild>
          <Link href="/tasks"><Plus className="w-3.5 h-3.5 mr-1" />Nova Task</Link>
        </Button>
      }
    >
      {/* Hero */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold mb-1">Bom dia, Johnn 👋</h1>
          <p className="text-sm text-muted-foreground">
            Sua operação de repasse está{" "}
            <strong className="text-[var(--green)]">+18%</strong>{" "}
            acima do mês anterior. 3 contratos precisam de atenção.
          </p>
          <div className="flex gap-2 mt-3">
            <Button size="sm" asChild><Link href="/tasks">Abrir Chat com Luri</Link></Button>
            <Button size="sm" variant="secondary">Ver Channels</Button>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Badge className="bg-[var(--green)]/15 text-[var(--green)] border-0 text-xs">● Luri está online</Badge>
          <span className="text-[11px] text-muted-foreground">Última atividade: há 2 min</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <StatCard label="Contratos Ativos"  value="142"     delta="+18%"   up sparkColor="var(--chart-1)" sparkPoints="0,24 13,20 26,16 40,12 53,8 66,5 80,2" />
        <StatCard label="Volume Financeiro" value="R$38,4M" delta="+11,2%" up sparkColor="var(--chart-2)" sparkPoints="0,26 13,22 26,18 40,14 53,10 66,6 80,3" />
        <StatCard label="Taxa de Aprovação" value="74,6%"   delta="-2,1pp" up={false} sparkColor="var(--red)" sparkPoints="0,6 13,8 26,7 40,10 53,12 66,15 80,18" />
        <StatCard label="Score Médio"       value="712"     delta="+9 pts" up sparkColor="var(--green)" sparkPoints="0,20 13,18 26,14 40,12 53,10 66,8 80,6" />
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-[1fr_320px] gap-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Atividade Recente</span>
            <Button variant="ghost" size="sm" className="h-6 text-xs">Ver tudo →</Button>
          </div>
          <Card>
            <CardContent className="p-0">
              {[
                { dot: "var(--green)", pulse: true,  id: "REP-2847", name: "Fernanda Lima",        desc: "docs bancários solicitados",    meta: "Luri Credit · há 5 min",     badge: "Urgente",     badgeColor: "yellow" },
                { dot: "var(--green)",              id: "REP-2831", name: "Roberto Mendes",       desc: "encaminhado ao Bradesco",       meta: "Bureau · há 18 min",         badge: "Em andamento",badgeColor: "green"  },
                { dot: "var(--chart-1)",            id: "ANA-089",  name: "Carlos Eduardo Souza", desc: "crédito aprovado",              meta: "Policy Agent · há 32 min",   badge: "Aprovado",    badgeColor: "green"  },
                { dot: "var(--red)",                id: "REP-2819", name: "Ana Paula Costa",      desc: "score insuficiente",            meta: "Bureau · há 1h",             badge: "Bloqueado",   badgeColor: "red"    },
                { dot: "var(--muted-foreground)",   id: "KB-update",name: "Tabela MCMV 2026",     desc: "atualizada",                    meta: "Sistema · há 2h",            badge: "KB",          badgeColor: "muted"  },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                  <StatusDot color={item.dot} pulse={item.pulse} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs"><span className="font-mono text-muted-foreground mr-1">{item.id}</span>{item.name} — {item.desc}</div>
                    <div className="text-[11px] text-muted-foreground">{item.meta}</div>
                  </div>
                  <BadgeStatus color={item.badgeColor}>{item.badge}</BadgeStatus>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Agents</span>
              <Button variant="ghost" size="sm" className="h-6 text-xs" asChild><Link href="/agents/luri">Ver todos →</Link></Button>
            </div>
            <Card>
              <CardContent className="p-0">
                {[
                  { emoji: "🤖", name: "Luri Credit",  sub: "Analisando REP-2847", dot: "var(--green)",           pulse: true,  badge: "live",  badgeColor: "green" },
                  { emoji: "🔍", name: "Bureau Agent", sub: "Serasa concluído",    dot: "var(--chart-1)",                       badge: "idle",  badgeColor: "muted" },
                  { emoji: "📊", name: "Market Agent", sub: "Aguardando",          dot: "var(--muted-foreground)",              badge: "idle",  badgeColor: "muted" },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                    <StatusDot color={a.dot} pulse={a.pulse} />
                    <span className="text-sm">{a.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium">{a.name}</div>
                      <div className="text-[10px] text-muted-foreground">{a.sub}</div>
                    </div>
                    <BadgeStatus color={a.badgeColor}>{a.badge}</BadgeStatus>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Inbox</span>
              <Button variant="ghost" size="sm" className="h-6 text-xs" asChild><Link href="/inbox">3 novos →</Link></Button>
            </div>
            <Card>
              <CardContent className="p-0">
                {[
                  { title: "Alerta · Fernanda Lima",       sub: "Docs vencem em 2 dias",  time: "5m" },
                  { title: "Luri · Task concluída",        sub: "Carlos Eduardo aprovado", time: "32m" },
                  { title: "Sistema · Policy atualizada",  sub: "Score mínimo → 680",      time: "1h" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--chart-2)] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium">{item.title}</div>
                      <div className="text-[11px] text-muted-foreground">{item.sub}</div>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
