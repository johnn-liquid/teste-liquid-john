import { TrendingUp, TrendingDown, Activity } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

const MONTHS = ["Nov", "Dez", "Jan", "Fev", "Mar", "Abr"]
const VOLUMES = [24.1, 27.3, 29.6, 31.9, 34.5, 38.4]
const MAX_VOL = 40

const BANK_DATA = [
  { name: "Bradesco",  aprovados: 32, reprovados: 8,  taxa: "5.12%", color: "var(--chart-1)" },
  { name: "Caixa",     aprovados: 28, reprovados: 6,  taxa: "4.98%", color: "var(--chart-2)" },
  { name: "Itaú",      aprovados: 19, reprovados: 5,  taxa: "5.00%", color: "var(--chart-3)" },
  { name: "Santander", aprovados: 15, reprovados: 7,  taxa: "5.28%", color: "var(--chart-4)" },
]

const APPROVAL_HISTORY = [72.1, 73.8, 71.2, 74.0, 76.8, 74.6]

export default function DashboardsPage() {
  return (
    <PageShell breadcrumb={<span className="text-sm font-medium">Dashboards</span>}>
      <Tabs defaultValue="operacional">
        <TabsList className="mb-6">
          <TabsTrigger value="operacional">Operacional</TabsTrigger>
          <TabsTrigger value="bancos">Por Banco</TabsTrigger>
          <TabsTrigger value="agentes">Agentes</TabsTrigger>
        </TabsList>

        <TabsContent value="operacional" className="space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Volume Abr/26",     value: "R$38,4M", delta: "+11,2%", up: true  },
              { label: "Taxa Aprovação",     value: "74,6%",   delta: "-2,1pp", up: false },
              { label: "Ticket Médio",       value: "R$270k",  delta: "+4,8%",  up: true  },
              { label: "Tempo Médio Análise",value: "1,8 dias",delta: "-0,3d",  up: true  },
            ].map(({ label, value, delta, up }) => (
              <Card key={label}>
                <CardContent className="p-4">
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wide mb-1">{label}</div>
                  <div className="text-xl font-semibold">{value}</div>
                  <div className={`flex items-center gap-1 text-[11px] mt-0.5 ${up ? "text-[var(--green)]" : "text-[var(--red)]"}`}>
                    {up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {delta}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-[2fr_1fr] gap-4">
            {/* Volume bar chart */}
            <Card>
              <CardHeader className="pb-2 pt-4 px-4">
                <span className="text-sm font-medium">Volume Financeiro Mensal (R$M)</span>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="flex items-end gap-3 h-40">
                  {VOLUMES.map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-[10px] text-muted-foreground">R${v}M</span>
                      <div
                        className="w-full rounded-t-sm transition-all"
                        style={{
                          height: `${(v / MAX_VOL) * 100}%`,
                          background: i === VOLUMES.length - 1 ? "var(--chart-1)" : "var(--chart-2)",
                          opacity: i === VOLUMES.length - 1 ? 1 : 0.6,
                        }}
                      />
                      <span className="text-[10px] text-muted-foreground">{MONTHS[i]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Approval rate */}
            <Card>
              <CardHeader className="pb-2 pt-4 px-4">
                <span className="text-sm font-medium">Taxa de Aprovação (%)</span>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <svg viewBox="0 0 200 120" className="w-full">
                  <polyline
                    points={APPROVAL_HISTORY.map((v, i) => `${i * 40},${120 - (v - 68) * 6}`).join(" ")}
                    stroke="var(--green)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  />
                  {APPROVAL_HISTORY.map((v, i) => (
                    <g key={i}>
                      <circle cx={i * 40} cy={120 - (v - 68) * 6} r="3" fill="var(--green)" />
                      <text x={i * 40} y={120 - (v - 68) * 6 - 8} textAnchor="middle" fontSize="9" fill="currentColor" opacity=".6">
                        {v}%
                      </text>
                    </g>
                  ))}
                </svg>
                <div className="flex justify-between mt-1">
                  {MONTHS.map(m => <span key={m} className="text-[9px] text-muted-foreground">{m}</span>)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Status funnel */}
          <Card>
            <CardHeader className="pb-2 pt-4 px-4">
              <span className="text-sm font-medium">Funil de Crédito — Abril 2026</span>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="flex items-end gap-2 h-24">
                {[
                  { label: "Solicitados", value: 142, color: "var(--chart-1)" },
                  { label: "Em análise",  value: 112, color: "var(--chart-2)" },
                  { label: "Aprovados",   value: 106, color: "var(--green)" },
                  { label: "Encaminhados",value: 73,  color: "var(--chart-3)" },
                  { label: "Concluídos",  value: 51,  color: "var(--chart-4)" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-sm font-semibold">{value}</span>
                    <div className="w-full rounded-t-sm" style={{ height: `${(value / 142) * 80}px`, background: color }} />
                    <span className="text-[9px] text-muted-foreground text-center leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bancos" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {BANK_DATA.map((bank) => (
              <Card key={bank.name}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold">{bank.name}</span>
                    <Badge className="bg-muted text-muted-foreground border-0 text-[10px]">{bank.taxa}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Aprovados</div>
                      <div className="text-xl font-bold text-[var(--green)]">{bank.aprovados}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Reprovados</div>
                      <div className="text-xl font-bold text-[var(--red)]">{bank.reprovados}</div>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(bank.aprovados / (bank.aprovados + bank.reprovados)) * 100}%`, background: bank.color }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-[10px] text-muted-foreground">
                    <span>Taxa: {Math.round((bank.aprovados / (bank.aprovados + bank.reprovados)) * 100)}%</span>
                    <span>Total: {bank.aprovados + bank.reprovados}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="agentes" className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "Luri Credit",  tasks: 48, avgTime: "1.2h", status: "live",  dot: "var(--green)",           accuracy: 96 },
              { name: "Bureau Agent", tasks: 142, avgTime: "4.3min", status: "idle", dot: "var(--chart-1)",        accuracy: 99 },
              { name: "Market Agent", tasks: 12, avgTime: "8.1h",  status: "idle", dot: "var(--yellow)",          accuracy: 88 },
            ].map((agent) => (
              <Card key={agent.name}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full" style={{ background: agent.dot }} />
                    <span className="text-sm font-semibold">{agent.name}</span>
                    <Badge className={`ml-auto text-[10px] border-0 ${agent.status === "live" ? "bg-[var(--green)]/15 text-[var(--green)]" : "bg-muted text-muted-foreground"}`}>
                      {agent.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Tasks executadas", value: agent.tasks },
                      { label: "Tempo médio",       value: agent.avgTime },
                      { label: "Precisão",          value: `${agent.accuracy}%` },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[var(--green)]" style={{ width: `${agent.accuracy}%` }} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader className="pb-2 pt-4 px-4 flex-row items-center gap-2">
              <Activity className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Atividade dos Agentes — últimas 24h</span>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="space-y-3">
                {[
                  { time: "10:26", agent: "Luri Credit",  action: "Análise de crédito concluída · Carlos Eduardo Souza (742)", dot: "var(--green)" },
                  { time: "10:22", agent: "Bureau Agent", action: "Consulta Serasa concluída · Roberto Mendes (692)",          dot: "var(--chart-1)" },
                  { time: "09:45", agent: "Luri Credit",  action: "Solicitação de documentos · Fernanda Lima (REP-2847)",      dot: "var(--green)" },
                  { time: "08:30", agent: "Market Agent", action: "Relatório de taxas atualizado · Itaú -0.05pp",              dot: "var(--yellow)" },
                  { time: "07:15", agent: "Bureau Agent", action: "Score verificado · Ana Paula Costa (620 — bloqueada)",      dot: "var(--chart-1)" },
                ].map((ev, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs">
                    <span className="text-muted-foreground font-mono flex-shrink-0 mt-0.5">{ev.time}</span>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: ev.dot }} />
                    <div>
                      <span className="font-medium text-muted-foreground">{ev.agent}</span>
                      <span className="text-muted-foreground"> · {ev.action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageShell>
  )
}
