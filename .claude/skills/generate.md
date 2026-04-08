---
name: generate
description: Gera uma tela completa, seção ou componente a partir de uma descrição em linguagem natural. Usa os patterns, componentes e tokens do DS sem desviar.
---

# /generate

Gera uma tela completa, seção ou componente a partir de uma descrição em linguagem natural. Usa os patterns, componentes e tokens do DS sem desviar.

## Comportamento

O agente deve:
1. Identificar o tipo de tela pedido (ListPage, DetailPage, FormFlow, AIWorkflow)
2. Selecionar o pattern correspondente em `patterns/`
3. Mapear os componentes necessários em `components/`
4. Aplicar tokens de `tokens/`
5. Verificar anti-patterns no `rulebook.md`
6. Se houver ambiguidade sobre entidade, ações primárias ou estados → perguntar antes de gerar

## Output esperado

Especificação estruturada da tela com:
- Pattern selecionado e justificativa
- Lista de componentes com suas variantes e estados
- Tokens aplicados por região
- Estados obrigatórios (loading, empty, error)
- Hierarquia de ações (qual é o botão primary)

## Restrições

- Nunca inventar componente fora do catálogo
- Nunca usar valor hardcoded
- Nunca usar light mode
- Se faltarem dados (entidade, ação principal, estados), perguntar antes de gerar
- Máximo 1 botão primary por viewport

## Exemplos de invocação

```
/generate uma página de listagem de projetos com filtro por status e botão de criar novo
/generate uma tela de onboarding com 3 passos: nome do workspace, convidar membros e configurar primeiro agente
```
