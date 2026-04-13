"use client"

import * as React from "react"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"
import { CheckCheck } from "lucide-react"

const MESSAGES = [
  { id: 1, from: "Luri Credit", subject: "Alerta · Fernanda Lima", body: "Os documentos bancários de Fernanda Lima (REP-2847) vencem em 2 dias. Recomendo contato imediato para renovação. Score atual: 738. Limite aprovado: R$387k.", time: "há 5 min", unread: true, type: "alert" },
  { id: 2, from: "Luri Credit", subject: "Task concluída · Carlos Eduardo Souza", body: "Análise de crédito concluída. Cliente aprovado com score 742 (Serasa) e 688 (SPC). Comprometimento de renda: 34,2%. Limite sugerido: R$520k. Pronto para encaminhar ao banco.", time: "há 32 min", unread: true, type: "success" },
  { id: 3, from: "Sistema", subject: "Policy atualizada · Score mínimo", body: "A política de crédito foi atualizada. Score mínimo alterado de 650 para 680 pontos. Esta mudança afeta 8 contratos em análise. Revisão necessária em: REP-2815, REP-2811, REP-2808.", time: "há 1h", unread: true, type: "info" },
  { id: 4, from: "Bureau Agent", subject: "Serasa · REP-2831 Roberto Mendes", body: "Consulta Serasa concluída. Score: 692 pontos. Situação: sem restrições. Renda informada compatível com declaração. Processo pode seguir para encaminhamento ao Bradesco.", time: "há 2h", unread: false, type: "info" },
  { id: 5, from: "Market Agent", subject: "Relatório semanal · Taxas FIPE", body: "Variação das taxas de financiamento esta semana: Bradesco +0.02pp, Caixa manteve, Itaú -0.05pp. Melhor taxa atual: 5,00% a.a. + TR (Itaú). Recomendação: priorizar encaminhamentos Itaú.", time: "há 4h", unread: false, type: "report" },
  { id: 6, from: "Sistema", subject: "Backup Knowledge Base · Concluído", body: "Backup da base de conhecimento realizado com sucesso. 48 documentos, 12 políticas e 3 tabelas de juros foram sincronizados. Próximo backup automático em 24h.", time: "ontem", unread: false, type: "system" },
]

const TYPE_BADGE: Record<string, string> = {
  alert:   "bg-[var(--yellow)]/15 text-[var(--yellow)] border-0",
  success: "bg-[var(--green)]/15 text-[var(--green)] border-0",
  info:    "bg-[var(--chart-1)]/15 text-[var(--chart-1)] border-0",
  report:  "bg-[var(--purple)]/15 text-[var(--purple)] border-0",
  system:  "bg-muted text-muted-foreground border-0",
}
const TYPE_LABEL: Record<string, string> = {
  alert: "Alerta", success: "Concluído", info: "Info", report: "Relatório", system: "Sistema",
}

export default function InboxPage() {
  const [selected, setSelected] = React.useState(MESSAGES[0])

  return (
    <PageShell
      breadcrumb={<span className="text-sm font-medium">Inbox</span>}
      actions={
        <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
          <CheckCheck className="w-3.5 h-3.5" /> Marcar tudo como lido
        </Button>
      }
      noPadding
    >
      <div className="flex flex-1 min-h-0">
        {/* List */}
        <div className="w-80 border-r border-border flex-shrink-0 flex flex-col">
          <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium">
              {MESSAGES.filter(m => m.unread).length} não lidos
            </span>
          </div>
          <ScrollArea className="flex-1">
            {MESSAGES.map((msg) => (
              <button
                key={msg.id}
                className={cn(
                  "w-full text-left px-4 py-3 border-b border-border hover:bg-accent/50 transition-colors",
                  selected?.id === msg.id && "bg-accent"
                )}
                onClick={() => setSelected(msg)}
              >
                <div className="flex items-start gap-2 mb-0.5">
                  {msg.unread && <span className="w-1.5 h-1.5 rounded-full bg-[var(--chart-2)] flex-shrink-0 mt-1.5" />}
                  {!msg.unread && <span className="w-1.5 h-1.5 flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 justify-between">
                      <span className={cn("text-xs", msg.unread ? "font-semibold" : "font-medium text-muted-foreground")}>{msg.from}</span>
                      <span className="text-[10px] text-muted-foreground flex-shrink-0">{msg.time}</span>
                    </div>
                    <div className={cn("text-xs truncate mt-0.5", msg.unread ? "text-foreground" : "text-muted-foreground")}>
                      {msg.subject}
                    </div>
                    <div className="text-[11px] text-muted-foreground truncate mt-0.5">
                      {msg.body.slice(0, 60)}…
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </ScrollArea>
        </div>

        {/* Detail */}
        {selected && (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-2xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-base font-semibold mb-1">{selected.subject}</h2>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>De: <strong className="text-foreground">{selected.from}</strong></span>
                    <span>·</span>
                    <span>{selected.time}</span>
                  </div>
                </div>
                <Badge className={`text-[10px] flex-shrink-0 ${TYPE_BADGE[selected.type]}`}>
                  {TYPE_LABEL[selected.type]}
                </Badge>
              </div>
              <Separator className="mb-4" />
              <p className="text-sm leading-relaxed text-muted-foreground">{selected.body}</p>
              <div className="flex gap-2 mt-6">
                <Button size="sm">Responder</Button>
                <Button size="sm" variant="outline">Arquivar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageShell>
  )
}
