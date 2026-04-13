"use client"

import * as React from "react"
import { Search, ArrowRight, RotateCcw, ExternalLink } from "lucide-react"

import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import { ThemeToggle } from "@/components/theme-toggle"

const FOCUS_CHIPS = ["Todos", "Imóveis", "Políticas", "Mercado", "KB"]
const SUGGESTIONS = [
  "Qual a tabela de juros MCMV 2026?",
  "Score mínimo Bradesco para financiamento",
  "Como funciona o repasse direto Caixa?",
  "Comprometimento máximo de renda para FGV?",
]

const SOURCES = [
  { title: "Tabela MCMV 2026 — CEF",         domain: "cef.gov.br",   snippet: "Taxas atualizadas para 2026..." },
  { title: "Circular Bacen 3.934/2025",       domain: "bacen.gov.br", snippet: "Limites de comprometimento de renda..." },
  { title: "Manual do Tomador — Bradesco",    domain: "bradesco.com.br", snippet: "Score mínimo e documentação..." },
  { title: "Resolução CMN 4.966",             domain: "planalto.gov.br", snippet: "Critérios de elegibilidade habitacional..." },
]

const ANSWER = `O score mínimo para financiamento habitacional via MCMV no Bradesco em 2026 é **680 pontos** (Serasa ou SPC).

**Condições principais:**
- Renda bruta familiar: R$2.000 a R$8.000 (Faixa 2)
- Comprometimento máximo: **30% da renda bruta**
- Entrada mínima: 5% do valor do imóvel
- Taxa efetiva: a partir de **5,00% a.a. + TR**

**Documentação necessária:**
1. RG, CPF e comprovante de residência
2. Comprovante de renda dos últimos 3 meses
3. Extrato bancário (6 meses)
4. Certidão negativa de débitos federais`

const FOLLOWUPS = [
  "Como calcular a capacidade de financiamento?",
  "Quais bancos têm menor taxa em 2026?",
  "Processo de solicitação no Bradesco",
]

export function PesquisaView() {
  const [query, setQuery] = React.useState("")
  const [focus, setFocus] = React.useState("Todos")
  const [state, setState] = React.useState<"empty" | "loading" | "results">("empty")
  const [followup, setFollowup] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  function doSearch(q: string) {
    if (!q.trim()) return
    setState("loading")
    setTimeout(() => setState("results"), 1400)
  }

  function reset() {
    setState("empty")
    setQuery("")
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Topbar */}
      <header className="flex items-center gap-2 h-12 px-4 border-b border-border flex-shrink-0">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4" />
        <span className="text-sm font-medium">Pesquisa</span>
        {state === "results" && (
          <Button variant="ghost" size="sm" className="ml-auto h-7 text-xs gap-1" onClick={reset}>
            <RotateCcw className="w-3 h-3" /> Nova pesquisa
          </Button>
        )}
        <ThemeToggle />
      </header>

      {/* Empty state */}
      {state === "empty" && (
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold mb-1">Pesquisa Inteligente</h2>
          <p className="text-sm text-muted-foreground mb-6 text-center max-w-xs">
            Consulte políticas de crédito, taxas, regulamentações e dados de mercado imobiliário.
          </p>

          {/* Search input */}
          <div className="w-full max-w-xl mb-4">
            <div className="flex items-center gap-2 border border-border rounded-xl px-4 py-3 bg-card focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20 transition-all">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === "Enter" && doSearch(query)}
                placeholder="Faça uma pergunta sobre crédito imobiliário..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <Button size="sm" className="h-7 text-xs" onClick={() => doSearch(query)} disabled={!query.trim()}>
                Pesquisar
              </Button>
            </div>
          </div>

          {/* Focus chips */}
          <div className="flex gap-2 mb-6">
            {FOCUS_CHIPS.map(c => (
              <button
                key={c}
                onClick={() => setFocus(c)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  focus === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Suggestions */}
          <div className="w-full max-w-xl">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Sugeridas</div>
            <div className="grid grid-cols-2 gap-2">
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  className="text-left text-xs p-3 rounded-lg border border-border hover:bg-accent transition-colors flex items-start gap-2"
                  onClick={() => { setQuery(s); doSearch(s) }}
                >
                  <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-muted-foreground" />
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Loading */}
      {state === "loading" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          <div className="flex gap-1.5">
            {[0,1,2].map(i => (
              <span key={i} className="w-2 h-2 rounded-full bg-primary animate-[tdot_1.4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.16}s` }} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Consultando fontes...</p>
        </div>
      )}

      {/* Results */}
      {state === "results" && (
        <div className="flex-1 overflow-hidden flex">
          {/* Sources sidebar */}
          <div className="w-64 border-r border-border flex-shrink-0 overflow-y-auto p-3 space-y-2">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider px-1 mb-1">Fontes</div>
            {SOURCES.map((s, i) => (
              <Card key={i} className="hover:bg-accent/50 transition-colors cursor-pointer">
                <CardContent className="p-3">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <div className="text-xs font-medium leading-tight">{s.title}</div>
                    <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                  </div>
                  <div className="text-[10px] text-muted-foreground">{s.domain}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Answer */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-2xl">
              <div className="text-lg font-semibold mb-1">{query || "Score mínimo Bradesco para financiamento"}</div>
              <Badge className="mb-4 bg-[var(--green)]/15 text-[var(--green)] border-0 text-[10px]">
                ● {SOURCES.length} fontes consultadas
              </Badge>

              <div className="prose prose-sm prose-invert max-w-none">
                {ANSWER.split("\n").map((line, i) => {
                  if (!line.trim()) return <br key={i} />
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <p key={i} className="font-semibold text-sm mt-3 mb-1">{line.replace(/\*\*/g, "")}</p>
                  }
                  if (line.startsWith("- ") || line.match(/^\d+\./)) {
                    return <p key={i} className="text-sm text-muted-foreground ml-3">{line}</p>
                  }
                  return (
                    <p key={i} className="text-sm leading-relaxed" dangerouslySetInnerHTML={{
                      __html: line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    }} />
                  )
                })}
              </div>

              {/* Follow-ups */}
              <div className="mt-6 border-t border-border pt-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Perguntas relacionadas</div>
                <div className="space-y-1.5">
                  {FOLLOWUPS.map(f => (
                    <button
                      key={f}
                      className="w-full text-left text-sm px-3 py-2 rounded-lg border border-border hover:bg-accent transition-colors flex items-center gap-2"
                      onClick={() => { setQuery(f); doSearch(f) }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Follow-up input */}
              <div className="mt-4 flex gap-2">
                <input
                  value={followup}
                  onChange={e => setFollowup(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && followup.trim()) { setQuery(followup); setFollowup(""); doSearch(followup) } }}
                  placeholder="Fazer pergunta de acompanhamento..."
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all"
                />
                <Button size="sm" onClick={() => { if (followup.trim()) { setQuery(followup); setFollowup(""); doSearch(followup) } }} disabled={!followup.trim()}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
