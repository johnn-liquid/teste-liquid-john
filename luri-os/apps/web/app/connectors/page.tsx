import { Plus, CheckCircle2, XCircle, Clock } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

const CONNECTED = [
  { name: "Serasa Experian",   category: "Bureau",    status: "connected", lastSync: "há 2 min",  queries: "1.284 / mês", icon: "🔍" },
  { name: "SPC Brasil",        category: "Bureau",    status: "connected", lastSync: "há 5 min",  queries: "1.142 / mês", icon: "🔍" },
  { name: "Receita Federal",   category: "Gov",       status: "connected", lastSync: "há 1h",    queries: "892 / mês",   icon: "🏛️" },
  { name: "Bradesco API",      category: "Banco",     status: "connected", lastSync: "há 15 min", queries: "432 / mês",   icon: "🏦" },
  { name: "Caixa Econômica",   category: "Banco",     status: "connected", lastSync: "há 30 min", queries: "318 / mês",   icon: "🏦" },
  { name: "Itaú Connect",      category: "Banco",     status: "connected", lastSync: "há 1h",    queries: "204 / mês",   icon: "🏦" },
  { name: "CRM Interno",       category: "Interno",   status: "connected", lastSync: "tempo real", queries: "—",          icon: "💼" },
  { name: "DocuSign",          category: "Assinatura",status: "error",     lastSync: "falhou",    queries: "—",           icon: "✍️" },
]

const AVAILABLE = [
  { name: "Santander Open",  category: "Banco",     icon: "🏦", desc: "Financiamento e análise via API Santander" },
  { name: "Itaú Unibanco",  category: "Banco",     icon: "🏦", desc: "Dados de crédito e limite do Itaú" },
  { name: "FGTS Digital",   category: "Gov",       icon: "🏛️", desc: "Consulta de saldo e simulação FGTS" },
  { name: "Boa Vista SCPC", category: "Bureau",    icon: "🔍", desc: "Score e histórico Boa Vista Serviços" },
  { name: "Zapier",         category: "Automação", icon: "⚡",  desc: "Automações e integrações via Zapier" },
  { name: "Slack",          category: "Comunicação",icon: "💬", desc: "Alertas e notificações no Slack" },
]

const STATUS_CONFIG = {
  connected: { icon: CheckCircle2, color: "text-[var(--green)]", label: "Conectado",   badgeClass: "bg-[var(--green)]/15 text-[var(--green)] border-0" },
  error:     { icon: XCircle,     color: "text-[var(--red)]",   label: "Erro",        badgeClass: "bg-[var(--red)]/15 text-[var(--red)] border-0" },
  pending:   { icon: Clock,       color: "text-[var(--yellow)]",label: "Pendente",    badgeClass: "bg-[var(--yellow)]/15 text-[var(--yellow)] border-0" },
}

const CATEGORY_COLORS: Record<string, string> = {
  "Bureau":     "bg-[var(--chart-1)]/15 text-[var(--chart-1)] border-0",
  "Gov":        "bg-[var(--purple)]/15 text-[var(--purple)] border-0",
  "Banco":      "bg-[var(--chart-2)]/15 text-[var(--chart-2)] border-0",
  "Interno":    "bg-muted text-muted-foreground border-0",
  "Assinatura": "bg-[var(--orange)]/15 text-[var(--orange)] border-0",
  "Automação":  "bg-[var(--yellow)]/15 text-[var(--yellow)] border-0",
  "Comunicação":"bg-[var(--green)]/15 text-[var(--green)] border-0",
}

export default function ConnectorsPage() {
  return (
    <PageShell
      breadcrumb={<span className="text-sm font-medium">Connectors</span>}
      actions={<Button size="sm" variant="secondary"><Plus className="w-3.5 h-3.5 mr-1" />Adicionar</Button>}
    >
      <div className="mb-6">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Conectados</div>
        <div className="grid grid-cols-2 gap-3">
          {CONNECTED.map((conn) => {
            const cfg = STATUS_CONFIG[conn.status as keyof typeof STATUS_CONFIG] ?? STATUS_CONFIG.pending
            const StatusIcon = cfg.icon
            return (
              <Card key={conn.name}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{conn.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{conn.name}</div>
                      <Badge className={`text-[10px] h-4 px-1.5 mt-0.5 ${CATEGORY_COLORS[conn.category] ?? "bg-muted text-muted-foreground border-0"}`}>
                        {conn.category}
                      </Badge>
                    </div>
                    <Badge className={`text-[10px] border-0 flex items-center gap-1 ${cfg.badgeClass}`}>
                      <StatusIcon className="w-3 h-3" />{cfg.label}
                    </Badge>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>Último sync: {conn.lastSync}</span>
                    <span>{conn.queries}</span>
                  </div>
                  {conn.status === "error" && (
                    <div className="mt-2">
                      <Button size="sm" variant="destructive" className="h-6 text-xs w-full">Reconectar</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div>
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disponíveis para conectar</div>
        <div className="grid grid-cols-3 gap-3">
          {AVAILABLE.map((conn) => (
            <Card key={conn.name} className="hover:border-border/60 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{conn.icon}</span>
                  <div>
                    <div className="text-sm font-medium">{conn.name}</div>
                    <Badge className={`text-[10px] h-4 px-1.5 ${CATEGORY_COLORS[conn.category] ?? "bg-muted text-muted-foreground border-0"}`}>
                      {conn.category}
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{conn.desc}</p>
                <Button size="sm" variant="secondary" className="w-full h-7 text-xs">Conectar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
