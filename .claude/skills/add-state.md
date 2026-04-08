---
name: add-state
description: Adiciona a especificação de um estado a uma tela ou componente já descrito. Garante que o estado segue o padrão visual do DS.
---

# /add-state

Adiciona a especificação de um estado a uma tela ou componente já descrito. Garante que o estado segue o padrão visual do DS.

## Comportamento

O agente deve:
1. Identificar o componente ou tela-alvo
2. Verificar no arquivo do componente quais estados já são documentados
3. Definir o comportamento visual do estado pedido (tokens, animações, mensagens)
4. Verificar no `rulebook.md` se há árvore de decisão para o tipo de estado

## Output esperado

Especificação do estado com:
- Qual o gatilho para este estado
- O que muda visualmente (tokens, animações, layout)
- Duração/transição usando tokens de motion
- Mensagem ao usuário (se houver)

## Restrições

- Apenas estados documentados como possíveis no componente podem ser adicionados
- Se o estado pedido não está no catálogo do componente → declarar e perguntar
- Transições sempre usam `--duration-*` e `--ease-*`

## Exemplos de invocação

```
/add-state loading para a tabela de agentes instalados
/add-state error para o componente ArtifactDatatable mostrando falha na query de dados
```
