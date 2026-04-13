"use client"

import * as React from "react"
import { BookOpen, Search, Plus, FileText, Table2, BarChart3 } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const ITEMS = [
  { id: "kb-01", title: "Tabela de Juros MCMV 2026",         type: "table",  category: "Taxas",       updated: "08/04/2026", size: "12 KB",  desc: "Taxas vigentes para todas as faixas Minha Casa Minha Vida, atualizadas Abr/2026." },
  { id: "kb-02", title: "Manual de Políticas de Crédito",    type: "doc",    category: "Políticas",   updated: "01/04/2026", size: "48 KB",  desc: "Compêndio de todas as políticas de aprovação e limitações por banco e modalidade." },
  { id: "kb-03", title: "Relatório de Mercado Q1 2026",      type: "report", category: "Mercado",     updated: "31/03/2026", size: "2.1 MB", desc: "Análise trimestral do mercado de crédito imobiliário: volumes, tendências, projeções." },
  { id: "kb-04", title: "Circuito Bacen 3.934/2025",         type: "doc",    category: "Regulatório", updated: "15/03/2026", size: "84 KB",  desc: "Circular do Banco Central sobre limites de comprometimento de renda e garantias." },
  { id: "kb-05", title: "Tabela LTV por Banco",              type: "table",  category: "Taxas",       updated: "10/03/2026", size: "8 KB",   desc: "Loan-to-Value máximo aceito por cada banco financiador para imóveis residenciais." },
  { id: "kb-06", title: "Guia de Documentação FGTS",         type: "doc",    category: "Documentação",updated: "05/03/2026", size: "24 KB",  desc: "Checklist completo de documentos para uso do FGTS em financiamento imobiliário." },
  { id: "kb-07", title: "Histórico de Score × Aprovação",    type: "report", category: "Análise",     updated: "28/02/2026", size: "3.8 MB", desc: "Análise correlacional entre score de crédito e taxa de aprovação por instituição." },
  { id: "kb-08", title: "Resolução CMN 4.966 — Resumo",      type: "doc",    category: "Regulatório", updated: "20/02/2026", size: "36 KB",  desc: "Critérios de elegibilidade habitacional segundo a Resolução CMN mais recente." },
]

const TYPE_ICON: Record<string, React.ReactNode> = {
  doc:    <FileText className="w-4 h-4" />,
  table:  <Table2 className="w-4 h-4" />,
  report: <BarChart3 className="w-4 h-4" />,
}
const CATEGORY_COLORS: Record<string, string> = {
  "Taxas":         "bg-[var(--chart-1)]/15 text-[var(--chart-1)] border-0",
  "Políticas":     "bg-[var(--green)]/15 text-[var(--green)] border-0",
  "Mercado":       "bg-[var(--purple)]/15 text-[var(--purple)] border-0",
  "Regulatório":   "bg-[var(--yellow)]/15 text-[var(--yellow)] border-0",
  "Documentação":  "bg-[var(--orange)]/15 text-[var(--orange)] border-0",
  "Análise":       "bg-[var(--chart-2)]/15 text-[var(--chart-2)] border-0",
}

export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const filtered = ITEMS.filter(item =>
    !query || item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <PageShell
      breadcrumb={<span className="text-sm font-medium">Knowledge Base</span>}
      actions={<Button size="sm" variant="secondary"><Plus className="w-3.5 h-3.5 mr-1" />Adicionar</Button>}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar na base de conhecimento..."
            className="pl-8 h-8 text-sm"
          />
        </div>
        <div className="flex gap-1.5">
          {["Todos","Taxas","Políticas","Mercado","Regulatório"].map(cat => (
            <button
              key={cat}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                cat === "Todos" && !query
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filtered.map(item => (
          <Card key={item.id} className="hover:border-border/60 transition-colors cursor-pointer group">
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
                  {TYPE_ICON[item.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium leading-tight mb-1">{item.title}</div>
                  <div className="flex items-center gap-1.5">
                    <Badge className={`text-[10px] h-4 px-1.5 ${CATEGORY_COLORS[item.category] ?? "bg-muted text-muted-foreground border-0"}`}>
                      {item.category}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground">{item.size}</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Atualizado em {item.updated}</span>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="ghost" className="h-6 text-xs px-2">Visualizar</Button>
                  <Button size="sm" variant="ghost" className="h-6 text-xs px-2">Exportar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <BookOpen className="w-10 h-10 text-muted-foreground mb-3" />
          <p className="text-sm text-muted-foreground">Nenhum item encontrado para "{query}"</p>
        </div>
      )}
    </PageShell>
  )
}
