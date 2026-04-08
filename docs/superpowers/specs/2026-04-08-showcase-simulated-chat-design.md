# Spec — Lurids DS Showcase: Simulated Chat Demo

**Data:** 2026-04-08
**Projeto:** `liquify/showcase` (Next.js)
**Objetivo:** Provar que UI gerada por IA consegue seguir o Lurids DS com precisão — sem alucinação de cores, tokens ou hierarquia visual. A simulação substitui o modelo real por cenários pré-escritos para validar o conceito de UI generativa antes da integração com a API.

---

## 1. Arquitetura

```
showcase/src/
├── app/
│   ├── globals.css          ← tokens Lurids DS (substituição completa)
│   ├── layout.tsx           ← Geist font + <html className="dark">
│   └── page.tsx             ← ChatDemo — única rota
├── components/
│   ├── chat/
│   │   ├── Chat.tsx         ← container principal (header + scroll + input)
│   │   ├── MessageList.tsx  ← lista de mensagens com auto-scroll
│   │   ├── MessageItem.tsx  ← bolha de mensagem (role: user | agent)
│   │   ├── TypingIndicator.tsx ← três pontos animados enquanto "IA processa"
│   │   ├── ChatInput.tsx    ← textarea + botão enviar
│   │   └── Suggestions.tsx  ← chips de intent clicáveis
│   └── artifacts/
│       ├── ArtifactKPI.tsx
│       ├── ArtifactCard.tsx
│       ├── ArtifactDatatable.tsx
│       ├── ArtifactChart.tsx
│       └── ArtifactList.tsx
└── data/
    └── scenarios.ts         ← cenários pré-escritos tipados
```

**Fluxo de dados (client-side, sem API):**

```
UserInput (texto ou clique em Suggestion)
  → lookup em scenarios.ts por keyword match
  → append MessageItem (role=user) imediatamente
  → mostrar TypingIndicator por 1200ms
  → append MessageItem (role=agent) com texto + Artifact correto
```

---

## 2. Correção de Tokens (`globals.css`)

O arquivo atual tem divergências em relação ao Lurids DS. Os valores abaixo são os canônicos do DS e devem substituir o `.dark` atual:

```css
.dark {
  --background:              oklch(0.141 0.005 285.823);
  --foreground:              oklch(0.985 0 0);
  --card:                    oklch(0.21 0.006 285.885);
  --card-foreground:         oklch(0.985 0 0);
  --popover:                 oklch(0.21 0.006 285.885);
  --popover-foreground:      oklch(0.985 0 0);
  --primary:                 oklch(1 0 0);              /* Branco Puro */
  --primary-foreground:      oklch(0.141 0.005 285.823);
  --secondary:               oklch(0.274 0.006 286.033);
  --secondary-foreground:    oklch(0.985 0 0);
  --muted:                   oklch(0.274 0.006 286.033);
  --muted-foreground:        oklch(0.705 0.015 286.067);
  --accent:                  oklch(0.274 0.006 286.033);
  --accent-foreground:       oklch(0.985 0 0);
  --destructive:             oklch(0.704 0.191 22.216);
  --border:                  oklch(1 0 0 / 10%);
  --input:                   oklch(1 0 0 / 15%);
  --ring:                    oklch(0.552 0.016 285.938);
  --chart-1:                 oklch(0.809 0.105 251.813); /* azul claro */
  --chart-2:                 oklch(0.623 0.214 259.815); /* azul médio */
  --chart-3:                 oklch(0.546 0.245 262.881); /* azul escuro */
  --chart-4:                 oklch(0.488 0.243 264.376); /* azul-violeta */
  --chart-5:                 oklch(0.424 0.199 265.638); /* violeta */
  --radius:                  0.875rem;
  --sidebar:                 oklch(0.21 0.006 285.885);
  --sidebar-foreground:      oklch(0.985 0 0);
  --sidebar-primary:         oklch(1 0 0);
  --sidebar-primary-foreground: oklch(0.141 0.005 285.823);
  --sidebar-accent:          oklch(0.274 0.006 286.033);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border:          oklch(1 0 0 / 10%);
  --sidebar-ring:            oklch(0.552 0.016 285.938);
}
```

Tokens adicionais a adicionar (ausentes no arquivo atual):

```css
@theme inline {
  /* Tipografia */
  --text-base: 14px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* Motion */
  --duration-fast:    150ms;
  --duration-normal:  250ms;
  --duration-slow:    400ms;
  --ease-out:         cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in-out:      cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 3. Cenários (`data/scenarios.ts`)

Cinco cenários do domínio Liquify. Cada cenário cobre um artifact type diferente.

### Tipo base

```typescript
export type ArtifactType =
  | { type: "kpi"; data: KPIData }
  | { type: "card"; data: CardData }
  | { type: "datatable"; data: DatatableData }
  | { type: "chart"; data: ChartData }
  | { type: "list"; data: ListData }

export interface Scenario {
  id: string
  keywords: string[]
  suggestionLabel: string   // texto exibido no chip de Suggestion
  userMessage: string       // mensagem exibida na bolha do usuário
  agentText: string         // texto da resposta do agente (antes do artifact)
  artifact: ArtifactType
}
```

### Cenário 1 — Taxa de Aprovação (ArtifactKPI)

- **Keywords:** `["taxa", "aprovação", "aprovacoes", "percentual"]`
- **Suggestion:** "Qual a taxa de aprovação?"
- **Artifact:** KPI com valor `73%`, label "Taxa de Aprovação — 30 dias", trend `+4.2%` positivo, descrição "Base: 148 análises"

### Cenário 2 — Análise de Crédito (ArtifactCard)

- **Keywords:** `["analise", "crédito", "cliente", "cpf", "perfil"]`
- **Suggestion:** "Analise o crédito do cliente"
- **Artifact:** Card com título "João Henrique Silva", subtítulo "CPF 432.xxx.xxx-21", atributos: Score Serasa `720 / Baixo Risco`, Renda Declarada `R$ 18.400/mês`, Comprometimento `23%`, Restrições `Nenhuma`, Resultado `Aprovado para R$ 850.000`

### Cenário 3 — Operações Pendentes (ArtifactDatatable)

- **Keywords:** `["operações", "operacoes", "pendentes", "fila", "tabela"]`
- **Suggestion:** "Mostre as operações pendentes"
- **Artifact:** Datatable com colunas: ID, Cliente, Valor, Etapa, Prioridade. 5 linhas de exemplo com status badges (Em análise, Aguardando doc., Pré-aprovado)

### Cenário 4 — Evolução de Aprovações (ArtifactChart)

- **Keywords:** `["evolução", "trimestre", "gráfico", "historico", "histórico"]`
- **Suggestion:** "Evolução de aprovações no trimestre"
- **Artifact:** Chart tipo `line`, eixo X = meses (Jan–Abr), série "Aprovações" com valores `[34, 41, 38, 52]`, cor `--chart-1`

### Cenário 5 — Documentos Pendentes (ArtifactList)

- **Keywords:** `["documentos", "docs", "faltando", "pendencia", "pendência"]`
- **Suggestion:** "Quais documentos estão faltando?"
- **Artifact:** List com itens: "Comprovante de renda (últimos 3 meses)", "Certidão negativa de débitos", "Contrato social atualizado", "Declaração de IR 2024". Cada item tem status: `pendente` ou `recebido`

### Cenário fallback

Se nenhuma keyword der match, resposta padrão sem artifact: "Entendi sua solicitação. Pode ser mais específico sobre o que deseja analisar? Posso ajudar com análise de crédito, operações pendentes, métricas de aprovação e documentação."

---

## 4. Componentes

### `Chat.tsx`

Layout com três zonas fixas:
- **Header** (`--sidebar` bg, `--border` bottom): nome do agente "Liquid Agent" + ícone `Bot` (lucide), badge "IA" em `--muted`
- **ScrollArea** (`--background` bg): `MessageList` com `overflow-y: auto`, scroll automático para o final a cada nova mensagem via `useEffect` + `ref`
- **InputArea** (`--background` bg, `--border` top): `Suggestions` acima, `ChatInput` embaixo

Largura máxima do conteúdo: `max-w-[768px] mx-auto`. Altura: `100dvh`.

### `MessageItem.tsx`

Dois layouts:
- **role=user**: alinhado à direita, bg `--muted`, radius `--radius-lg --radius-sm` no canto inferior direito, padding `--space-3 --space-4`, texto `body-lg` `--foreground`
- **role=agent**: alinhado à esquerda, sem bg, com avatar `Bot` (24px, `--muted` bg), texto `body-lg` `--foreground`

Artifact renderizado abaixo do texto do agente, dentro do mesmo `MessageItem`, com margem top `--space-3`.

### `TypingIndicator.tsx`

Três pontos `●●●` em `--muted-foreground`, animação de pulso sequencial (`animation-delay: 0ms, 150ms, 300ms`). Aparece no lugar do `MessageItem` do agente durante os 1200ms de delay. Usa `--duration-normal` para o fade-in/out.

### `Suggestions.tsx`

Row de chips horizontais (scroll horizontal em mobile). Cada chip: `Button variant="outline" size="sm"`. Desaparece após o primeiro envio (`showSuggestions` state). Renderiza os `suggestionLabel` de todos os cenários.

### `ChatInput.tsx`

`Textarea` (ShadCN) com `resize="none"`, altura automática (max 120px). Botão `Send` (lucide) como `Button variant="ghost" size="icon"`. Envio por `Enter` (sem `Shift`). Campo e botão desabilitados durante TypingIndicator.

### `ArtifactKPI.tsx`

```
ArtifactKPI
├── Header: label "KPI" em label-3 --muted-foreground
├── Value: heading-h4 --foreground (o número principal)
├── Label: label-1 --foreground
├── Trend: texto com ícone TrendingUp/Down, cor --foreground (positivo) ou --destructive (negativo)
└── Description: body-sm --muted-foreground
```

Background `--card`, border `--border`, radius `--radius-lg`, padding `--space-4`. Largura máxima 320px.

### `ArtifactCard.tsx`

```
ArtifactCard
├── Header: label "Card" label-3 --muted-foreground + ações (Copy icon, ghost sm)
├── Title: heading-card --card-foreground
├── Subtitle: body-md --muted-foreground
├── AttributeList: lista de pares
│   └── AttributeItem: key (label-3 --muted-foreground) + value (body-md --card-foreground)
└── Footer (opcional): Badge com resultado destacado
```

Background `--card`, border `--border`, radius `--radius-lg`, padding `--space-4`. Largura máxima 480px. Máximo 6 atributos visíveis.

### `ArtifactDatatable.tsx`

Tabela ShadCN (`Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell`). Header com `label-2 --muted-foreground`. Células com `body-md --foreground`. Linhas alternadas com `--accent` bg no hover. Status como `Badge` com variant `outline`. Bordas com `--border`. Sem paginação na simulação.

### `ArtifactChart.tsx`

Usa apenas CSS e SVG nativo (sem biblioteca de charts externa) para a simulação. Line chart simplificado: SVG com polyline, eixos X e Y com labels `body-sm --muted-foreground`, linha `stroke="var(--chart-1)"` strokeWidth 2, pontos como círculos `fill="var(--chart-1)"`. Background `--card`, padding `--space-4`, radius `--radius-lg`. Largura 100%, altura 200px.

> **Nota:** A ausência de biblioteca (Recharts, etc.) é intencional para a simulação — mantém o bundle mínimo e demonstra que o DS é suficiente para guiar até a implementação de chart custom.

### `ArtifactList.tsx`

Lista vertical. Cada item: ícone de status (CheckCircle2 verde/chart-2 ou Clock muted) + texto `body-md --foreground`. Separados por `--border` (divider de 1px). Background `--card`, padding `--space-4`, radius `--radius-lg`. Header: label "Lista" em `label-3 --muted-foreground`.

---

## 5. Interaction Flow Completo

```
Estado inicial:
  MessageList: vazio
  Suggestions: visíveis (5 chips)
  ChatInput: habilitado, placeholder "Pergunte ao Liquid Agent..."

Usuário clica em Suggestion ou digita + Enter:
  1. Append MessageItem (role=user, text=userMessage) → scroll to bottom
  2. Suggestions: ocultar (setShowSuggestions(false))
  3. ChatInput: desabilitar
  4. Append TypingIndicator
  5. setTimeout(1200ms):
       a. Remover TypingIndicator
       b. Append MessageItem (role=agent, text=agentText, artifact=<Artifact />)
       c. Scroll to bottom
       d. ChatInput: habilitar e focar

Usuário digita mensagem livre:
  → mesmo fluxo, mas com match por keywords
  → se fallback: agentText sem artifact
```

---

## 6. Decisões de Implementação

| Decisão | Escolha | Motivo |
|---|---|---|
| Estado | `useState` local em `Chat.tsx` | Sem necessidade de estado global nesta simulação |
| Tipo `Message` | `id, role, text, artifact?` | Tipagem mínima suficiente |
| Scroll automático | `useEffect` + `scrollIntoView` na última mensagem | Mais previsível que scrollTop manual |
| Match de cenário | `keywords.some(k => input.toLowerCase().includes(k))` | Simples e suficiente para demo |
| Animação typing | CSS `@keyframes` nativo | Sem dependência de biblioteca de animação |
| Font Geist | `next/font/google` com `variable` | Padrão Next.js para Geist |
| Dark mode | `<html className="dark">` no `layout.tsx` | Sem toggle — DS é dark-only |
| Chart library | Nenhuma (SVG nativo) | Bundle mínimo; recharts pode ser adicionado na fase real |

---

## 7. Sequência de Implementação

1. **Corrigir `globals.css`** — tokens Lurids DS canônicos + tokens adicionais
2. **Atualizar `layout.tsx`** — Geist font + `className="dark"` no `html`
3. **Criar `data/scenarios.ts`** — 5 cenários + tipos TypeScript
4. **Criar artifacts** (ordem: KPI → Card → List → Datatable → Chart)
5. **Criar componentes de chat** (ordem: MessageItem → TypingIndicator → Suggestions → ChatInput → MessageList → Chat)
6. **Atualizar `page.tsx`** — substituir conteúdo atual por `<Chat />`
7. **Teste visual** — verificar tokens aplicados, estados e fluxo completo

---

## 8. O que esta simulação prova

- Que os tokens do Lurids DS (cores, radius, tipografia, espaçamento) funcionam em código real sem valores hardcoded
- Que diferentes tipos de dados têm artifacts corretos e visualmente distintos
- Que a hierarquia visual (1 primary, superfícies corretas, texto sobre surface correto) é mantida sem intervenção do designer
- Que o conceito de UI generativa é viável: dado um cenário, a IA pode devolver uma view bem formada seguindo o DS

**O que esta simulação NÃO prova (escopo futuro):**
- Que um modelo de linguagem real segue o DS sem fine-tuning ou prompting estruturado
- Performance com dados reais e volume
- Responsividade mobile completa
