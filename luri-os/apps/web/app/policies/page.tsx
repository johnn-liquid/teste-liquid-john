"use client"

import * as React from "react"
import { Shield, Plus, ChevronRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const POLICIES = [
  {
    id: "POL-001", name: "Score Mínimo de Crédito", category: "Crédito", status: "active", updated: "08/04/2026",
    desc: "Define o score mínimo necessário para aprovação de crédito imobiliário. Aplica-se a todas as modalidades.",
    rules: [
      { label: "Score mínimo Serasa", value: "680 pontos", status: "ok" },
      { label: "Score mínimo SPC",    value: "650 pontos", status: "ok" },
      { label: "Consulta obrigatória",value: "Serasa + SPC + Receita", status: "ok" },
    ],
    affectedContracts: 8,
  },
  {
    id: "POL-002", name: "Comprometimento de Renda", category: "Renda", status: "active", updated: "01/04/2026",
    desc: "Limite máximo de comprometimento da renda bruta familiar para cálculo de parcelas.",
    rules: [
      { label: "Comprometimento máximo", value: "40% da renda bruta", status: "ok" },
      { label: "Renda mínima",           value: "R$ 3.500 / mês",     status: "ok" },
      { label: "Comprovação",            value: "Últimos 3 meses",     status: "ok" },
    ],
    affectedContracts: 14,
  },
  {
    id: "POL-003", name: "Documentação MCMV", category: "Documentação", status: "active", updated: "15/03/2026",
    desc: "Lista de documentos obrigatórios para financiamento via Minha Casa Minha Vida.",
    rules: [
      { label: "RG + CPF",               value: "Obrigatório",  status: "ok" },
      { label: "Comprovante de renda",    value: "Obrigatório",  status: "ok" },
      { label: "Extrato bancário",        value: "6 meses",      status: "ok" },
      { label: "Certidão negativa",       value: "Federal + Estadual", status: "ok" },
    ],
    affectedContracts: 22,
  },
  {
    id: "POL-004", name: "Limite de Financiamento", category: "Crédito", status: "draft", updated: "05/04/2026",
    desc: "Tetos de financiamento por faixa de renda e modalidade. Em revisão para adequação MCMV 2026.",
    rules: [
      { label: "Faixa 1 (até R$2k)",   value: "até R$120k", status: "warning" },
      { label: "Faixa 2 (R$2k–R$4k)", value: "até R$264k", status: "ok" },
      { label: "Faixa 3 (R$4k–R$8k)", value: "até R$350k", status: "ok" },
    ],
    affectedContracts: 0,
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  "Crédito":       "bg-[var(--chart-1)]/15 text-[var(--chart-1)] border-0",
  "Renda":         "bg-[var(--purple)]/15 text-[var(--purple)] border-0",
  "Documentação":  "bg-[var(--yellow)]/15 text-[var(--yellow)] border-0",
}

export default function PoliciesPage() {
  const [selected, setSelected] = React.useState(POLICIES[0])

  return (
    <PageShell
      breadcrumb={<span className="text-sm font-medium">Policies</span>}
      actions={<Button size="sm" variant="secondary"><Plus className="w-3.5 h-3.5 mr-1" />Nova Policy</Button>}
      noPadding
    >
      <div className="flex flex-1 min-h-0">
        {/* List */}
        <ScrollArea className="w-80 border-r border-border flex-shrink-0">
          <div className="p-3 space-y-1.5">
            {POLICIES.map((policy) => (
              <button
                key={policy.id}
                className={cn(
                  "w-full text-left p-3 rounded-lg border transition-colors",
                  selected?.id === policy.id
                    ? "border-border bg-accent"
                    : "border-transparent hover:bg-accent/50"
                )}
                onClick={() => setSelected(policy)}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs font-medium leading-tight">{policy.name}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <Badge className={`text-[10px] h-4 px-1.5 ${CATEGORY_COLORS[policy.category] ?? "bg-muted text-muted-foreground border-0"}`}>
                    {policy.category}
                  </Badge>
                  <Badge className={`text-[10px] h-4 px-1.5 border-0 ${policy.status === "active" ? "bg-[var(--green)]/15 text-[var(--green)]" : "bg-muted text-muted-foreground"}`}>
                    {policy.status === "active" ? "Ativa" : "Rascunho"}
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>

        {/* Detail */}
        {selected && (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-2xl">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-[11px] text-muted-foreground font-mono mb-1">{selected.id}</div>
                  <h2 className="text-base font-semibold">{selected.name}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={`text-[10px] border-0 ${selected.status === "active" ? "bg-[var(--green)]/15 text-[var(--green)]" : "bg-muted text-muted-foreground"}`}>
                    {selected.status === "active" ? "Ativa" : "Rascunho"}
                  </Badge>
                  <Button size="sm" variant="outline">Editar</Button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{selected.desc}</p>
              <div className="text-[11px] text-muted-foreground mb-4">Atualizada em {selected.updated}</div>

              <Separator className="mb-4" />

              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Regras</div>
              <Card className="mb-4">
                <CardContent className="p-0">
                  {selected.rules.map((rule, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-border last:border-0">
                      <span className="text-xs text-muted-foreground">{rule.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium">{rule.value}</span>
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${rule.status === "ok" ? "bg-[var(--green)]" : "bg-[var(--yellow)]"}`} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {selected.affectedContracts > 0 && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--chart-2)]" />
                  Esta policy afeta {selected.affectedContracts} contratos em análise
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </PageShell>
  )
}
