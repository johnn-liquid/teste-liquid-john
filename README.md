# Lurids — AI Design System

Design system estruturado para consumo por agentes de IA. Cobre interfaces de produtos com chat, agentes, artefatos gerados e fluxos conversacionais.

---

## Princípios

- **Dark mode only** — não existe modo claro
- **Tokens como fonte de verdade** — zero valores hardcoded
- **Catálogo fechado** — componentes fora da documentação são proibidos sem aprovação
- **Um botão primary por viewport** — hierarquia visual é lei
- **Ambiguidade → pergunta** — nunca suposições silenciosas
- **Geist Only** — única fonte permitida para todo o sistema
- **Base 14px** — o tamanho de texto base é 14px com escala proporcional
- **Primary White** — a cor primária de destaque é Branco Puro; Azul é exclusivo para Charts

---

## Estrutura

```
lurids/
├── SKILLS.md                   ← skills invocáveis por designers e agentes
├── ds/
│   ├── AI-INSTRUCTIONS.md      ← constituição: leia antes de qualquer outra coisa
│   ├── rulebook.md             ← árvores de decisão + anti-patterns
│   ├── tokens/
│   │   ├── colors.md           ← tokens de cor (dark mode)
│   │   ├── typography.md       ← escala tipográfica
│   │   ├── spacing.md          ← escala de espaçamento
│   │   ├── effects.md          ← radius, shadow, motion
│   │   └── globals.css         ← CSS custom properties (var(--token))
│   ├── components/
│   │   ├── artefatos/          ← outputs gerados pela IA
│   │   ├── chat-interacao/     ← interface conversacional
│   │   ├── sistema/            ← infraestrutura do produto
│   │   └── navegacao/          ← estrutura e orientação
│   └── patterns/               ← recipes de tela completa
```

---

## Componentes

### Artefatos — outputs da IA
| Componente | Uso |
|---|---|
| `Artifact — Card` | Entidade com múltiplos atributos |
| `Artifact — Chart` | Visualização quantitativa (bar, line, area, pie, scatter) |
| `Artifact — Datatable` | Múltiplos registros com colunas |
| `Artifact — Document` | Texto longo estruturado (relatório, e-mail, código) |
| `Artifact — Graph` | Relações entre entidades / diagrama |
| `Artifact — Input Request` | IA precisa de dados do usuário para continuar |
| `Artifact — KPI` | Valor numérico único com contexto |
| `Artifact — Link` | Fonte ou URL externa |
| `Artifact — List` | Lista de itens simples |

### Chat / Interação
`Chat` · `User Input` · `Structured Inputs` · `Text` · `Voice` · `Suggestions` · `Attachments`

### Sistema
`Agent Icon` · `Connectors` · `Files` · `Knowledge Base` · `Knowledge Base Indicator` · `Market` · `New Task` · `Skills`

### Navegação
`Account Switch` · `Navbar`

---

## Patterns de tela

| Pattern | Quando usar |
|---|---|
| `ListPage` | Coleção de registros com filtros |
| `DetailPage` | Detalhes de um item específico |
| `FormFlow` | Criação ou edição de dados estruturados |
| `AIWorkflow` | Interface de chat/conversa com agente |

---

## Skills

Skills são capacidades nomeadas que designers e agentes invocam diretamente. Documentação completa em [`SKILLS.md`](./SKILLS.md).

| Skill | O que faz |
|---|---|
| `/generate` | Gera tela completa a partir de descrição em linguagem natural |
| `/audit` | Audita violações do DS em uma tela descrita |
| `/which-component` | Indica o componente correto para um cenário |
| `/add-state` | Adiciona estado a um componente ou tela |
| `/token-check` | Consulta qual token usar para um valor visual |

**Exemplo de uso:**
```
/generate uma página de listagem de projetos com filtro por status e botão de criar novo
/audit essa tela tem dois botões primários e fundo hardcoded #1e1e1e
/which-component preciso exibir a evolução mensal de receita dos últimos 6 meses
/add-state loading para a tabela de agentes instalados
/token-check qual token usar para o fundo de um card elevado sobre a página
```

---

## Como um agente deve usar este DS

1. Ler `ds/AI-INSTRUCTIONS.md` primeiro — sempre
2. Consultar `ds/tokens/` para cores, tipografia, espaçamento e efeitos
3. Consultar `ds/components/` para o componente correto
4. Consultar `ds/patterns/` para o recipe de tela
5. Verificar `ds/rulebook.md` para árvores de decisão e anti-patterns
6. Se houver ambiguidade — **perguntar**, nunca supor

---

## Tokens

Todos os tokens são CSS custom properties definidas no escopo `.dark`.

```css
/* Exemplos */
var(--background)          /* fundo base da página */
var(--card)                /* superfície elevada */
var(--primary)             /* ação principal (Branco Puro) */
var(--foreground)          /* texto principal */
var(--muted-foreground)    /* metadados e texto secundário */
var(--text-base)           /* 14px base */
var(--space-4)             /* espaçamento base (16px) */
var(--radius-md)           /* radius padrão */
var(--duration-normal)     /* duração de transição padrão */
```

Valores hardcoded são proibidos em qualquer especificação gerada por este DS.

---

## Desenvolvimento

Para manter o repositório focado apenas nos artefatos do Design System, as seguintes pastas são ignoradas pelo Git:
- `tasks/` — Gerenciamento interno de tarefas e logs de execução.
- `testes/` — Suítes de testes e validações experimentais.
- Demais arquivos e pastas não explicitamente permitidos no `.gitignore`.
