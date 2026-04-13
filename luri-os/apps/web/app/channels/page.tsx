import { Plus } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"

const COLUMNS = [
  {
    title: "Em análise", dot: "var(--yellow)", count: 4,
    cards: [
      { id: "REP-2847", name: "Fernanda Lima",    badge: "Urgente",    badgeColor: "yellow", value: "R$387k", note: "Docs vencendo em 2 dias" },
      { id: "REP-2845", name: "Juliana Freitas",  badge: "Prioridade", badgeColor: "orange", value: "R$645k", note: "Cliente VIP — análise expedita" },
      { id: "REP-2843", name: "Paulo Rocha",      badge: "Normal",     badgeColor: "blue",   value: "R$298k", note: "Documentação recebida" },
      { id: "REP-2839", name: "Marina Alves",     badge: "Normal",     badgeColor: "blue",   value: "R$510k", note: "Score verificado" },
    ],
  },
  {
    title: "Em repasse", dot: "var(--chart-1)", count: 3,
    cards: [
      { id: "REP-2831", name: "Roberto Mendes",   badge: "Bradesco",   badgeColor: "blue",   value: "R$412k", note: "Encaminhado há 3 dias" },
      { id: "REP-2828", name: "Cláudia Santos",   badge: "Caixa",      badgeColor: "blue",   value: "R$523k", note: "Aguardando aprovação" },
      { id: "REP-2820", name: "Rafael Oliveira",  badge: "Itaú",       badgeColor: "purple", value: "R$350k", note: "Em análise no banco" },
    ],
  },
  {
    title: "Aprovados", dot: "var(--green)", count: 5,
    cards: [
      { id: "ANA-089",  name: "Carlos Eduardo",   badge: "Aprovado",   badgeColor: "green",  value: "R$520k", note: "Prontos para assinatura" },
      { id: "ANA-087",  name: "Márcia Lima",      badge: "Aprovado",   badgeColor: "green",  value: "R$380k", note: "Contrato gerado" },
      { id: "ANA-085",  name: "Diego Ferreira",   badge: "Aprovado",   badgeColor: "green",  value: "R$290k", note: "Assinatura pendente" },
    ],
  },
  {
    title: "Bloqueados", dot: "var(--red)", count: 2,
    cards: [
      { id: "REP-2819", name: "Ana Paula Costa",  badge: "Score",      badgeColor: "red",    value: "R$475k", note: "Score insuficiente (620)" },
      { id: "REP-2815", name: "Bruno Nascimento", badge: "Renda",      badgeColor: "red",    value: "R$298k", note: "Comprometimento >40%" },
    ],
  },
]

const BADGE_STYLES: Record<string, string> = {
  yellow: "bg-[var(--yellow)]/15 text-[var(--yellow)] border-0",
  orange: "bg-[var(--orange)]/15 text-[var(--orange)] border-0",
  green:  "bg-[var(--green)]/15 text-[var(--green)] border-0",
  red:    "bg-[var(--red)]/15 text-[var(--red)] border-0",
  blue:   "bg-blue-500/10 text-blue-400 border-0",
  purple: "bg-[var(--purple)]/15 text-[var(--purple)] border-0",
  muted:  "bg-muted text-muted-foreground border-0",
}

export default function ChannelsPage() {
  return (
    <PageShell
      breadcrumb={<span className="text-sm font-medium">Channels</span>}
      actions={<Button size="sm" variant="secondary"><Plus className="w-3.5 h-3.5 mr-1" />Novo Channel</Button>}
      noPadding
    >
      <div className="flex gap-4 p-6 overflow-x-auto h-full">
        {COLUMNS.map((col) => (
          <div key={col.title} className="w-72 flex-shrink-0 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1 px-1">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: col.dot }} />
              <span className="text-sm font-medium">{col.title}</span>
              <span className="text-xs text-muted-foreground ml-auto bg-muted px-1.5 py-0.5 rounded">{col.count}</span>
            </div>
            {col.cards.map((card) => (
              <Card key={card.id} className="hover:border-border/60 transition-colors cursor-pointer">
                <CardContent className="p-3">
                  <div className="text-xs font-medium mb-1">{card.id} · {card.name}</div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Badge className={`text-[10px] h-4 px-1.5 ${BADGE_STYLES[card.badgeColor] ?? BADGE_STYLES.muted}`}>{card.badge}</Badge>
                    <Badge className="text-[10px] h-4 px-1.5 bg-muted text-muted-foreground border-0">{card.value}</Badge>
                  </div>
                  <div className="text-[11px] text-muted-foreground">{card.note}</div>
                </CardContent>
              </Card>
            ))}
            <button className="w-full py-2 rounded-lg border border-dashed border-border text-xs text-muted-foreground hover:border-border/80 hover:text-foreground transition-colors">
              + Adicionar contrato
            </button>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
