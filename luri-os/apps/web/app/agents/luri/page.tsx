import { PageShell } from "@/components/page-shell"
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import Link from "next/link"
import { MessageSquare, Settings } from "lucide-react"

const AGENTS = [
  {
    id: "luri",    name: "Luri Credit",   emoji: "🤖", status: "live",  dot: "var(--green)",
    model: "Claude 3.5 Sonnet", tasks: 48, accuracy: "96%", avgTime: "1.2h",
    desc: "Agente especialista em análise de crédito imobiliário. Acessa bureaux (Serasa, SPC), verifica políticas e recomenda aprovação ou reprovação com justificativa.",
    capabilities: ["Análise de crédito", "Consulta bureaux", "Verificação de políticas", "Geração de relatórios", "Encaminhamento para repasse"],
    currentTask: "Analisando REP-2847 · Fernanda Lima — verificação de docs",
  },
  {
    id: "bureau",  name: "Bureau Agent",  emoji: "🔍", status: "idle",  dot: "var(--chart-1)",
    model: "Claude 3 Haiku", tasks: 142, accuracy: "99%", avgTime: "4.3min",
    desc: "Agente de consulta automatizada a bureaux de crédito. Executa queries paralelas em Serasa, SPC e Receita Federal.",
    capabilities: ["Consulta Serasa", "Consulta SPC", "Verificação Receita Federal", "Histórico de pagamentos", "Score consolidado"],
    currentTask: null,
  },
  {
    id: "market",  name: "Market Agent",  emoji: "📊", status: "idle",  dot: "var(--yellow)",
    model: "Claude 3.5 Haiku", tasks: 12, accuracy: "88%", avgTime: "8.1h",
    desc: "Monitora taxas de financiamento, índices econômicos e variações de mercado. Gera relatórios semanais de inteligência.",
    capabilities: ["Monitoramento de taxas", "Análise FIPE", "Relatórios de mercado", "Alertas de variação", "Projeções"],
    currentTask: null,
  },
  {
    id: "orbital", name: "Orbital Agent", emoji: "🛰️", status: "idle",  dot: "var(--purple)",
    model: "Claude 3 Opus", tasks: 3, accuracy: "100%", avgTime: "24h",
    desc: "Agente orquestrador de longa duração. Gerencia pipelines complexos multi-etapa e coordena os outros agentes.",
    capabilities: ["Orquestração de agentes", "Pipelines multi-etapa", "Monitoramento contínuo", "Relatórios executivos"],
    currentTask: null,
  },
]

export default function AgentsPage() {
  return (
    <PageShell
      breadcrumb={<span className="text-sm font-medium">Agents</span>}
    >
      <div className="grid grid-cols-2 gap-4">
        {AGENTS.map((agent) => (
          <Card key={agent.id} className="flex flex-col">
            <CardContent className="p-4 flex-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{agent.emoji}</span>
                  <div>
                    <div className="text-sm font-semibold">{agent.name}</div>
                    <div className="text-[11px] text-muted-foreground">{agent.model}</div>
                  </div>
                </div>
                <Badge className={`text-[10px] border-0 ${agent.status === "live"
                  ? "bg-[var(--green)]/15 text-[var(--green)] animate-[livepulse_2s_ease-in-out_infinite]"
                  : "bg-muted text-muted-foreground"}`}>
                  {agent.status}
                </Badge>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{agent.desc}</p>

              {agent.currentTask && (
                <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg bg-[var(--green)]/10 border border-[var(--green)]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-[livepulse_2s_ease-in-out_infinite]" />
                  <span className="text-[11px] text-[var(--green)]">{agent.currentTask}</span>
                </div>
              )}

              <Separator className="my-3" />

              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { label: "Tasks", value: agent.tasks },
                  { label: "Precisão", value: agent.accuracy },
                  { label: "Tempo médio", value: agent.avgTime },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-2 rounded-lg bg-muted/50">
                    <div className="text-sm font-semibold">{value}</div>
                    <div className="text-[10px] text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {agent.capabilities.map((cap) => (
                  <span key={cap} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{cap}</span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1 gap-1.5" asChild>
                  <Link href="/tasks"><MessageSquare className="w-3.5 h-3.5" />Chat</Link>
                </Button>
                <Button size="sm" variant="outline" className="gap-1.5">
                  <Settings className="w-3.5 h-3.5" />Config
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
