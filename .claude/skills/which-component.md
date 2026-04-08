---
name: which-component
description: Dado um cenário descrito em linguagem natural, responde qual componente ou pattern usar, com justificativa.
---

# /which-component

Dado um cenário descrito em linguagem natural, responde qual componente ou pattern usar, com justificativa.

## Comportamento

O agente deve:
1. Identificar o tipo de dado ou interação descrita
2. Percorrer as árvores de decisão do `rulebook.md`
3. Mapear para componente (`components/`) ou pattern (`patterns/`)
4. Justificar a escolha com referência à documentação

## Output esperado

```
COMPONENTE INDICADO: [Nome canônico]
Arquivo: components/[grupo]/[arquivo].md
Variante recomendada: [variante]
Justificativa: [por que este componente/pattern]
Alternativa se não aplicar: [outro componente/pattern]
```

## Restrições

- Se o cenário não mapeia para nenhum componente ou pattern existente → declarar o gap explicitamente
- Não inventar novo componente — sugerir composição de existentes

## Exemplos de invocação

```
/which-component preciso exibir a evolução mensal de receita dos últimos 6 meses
/which-component preciso mostrar ao usuário que o agente está processando uma tarefa que vai levar alguns minutos
```
