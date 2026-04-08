---
name: token-check
description: Verifica se um valor visual tem equivalente semântico no DS. Responde qual token usar para um caso específico.
---

# /token-check

Verifica se um valor visual (cor, espaço, radius, tipografia) tem equivalente semântico no DS. Responde qual token usar para um caso específico.

## Comportamento

O agente deve:
1. Identificar o tipo de valor pedido (cor, espaçamento, tipografia, radius, shadow, motion)
2. Consultar o arquivo de token correspondente:
   - Cor → `tokens/colors.md`
   - Tipografia → `tokens/typography.md`
   - Espaço → `tokens/spacing.md`
   - Radius, shadow, motion → `tokens/effects.md`
3. Retornar o token semântico exato com o valor e o papel documentado

## Output esperado

```
TOKEN: var(--nome-do-token)
Valor: [valor OKLCH ou px]
Papel: [descrição do papel do token]
Arquivo: tokens/[arquivo].md
```

Se não existir token para o caso:
```
GAP: Não existe token semântico para [caso].
Token mais próximo: var(--token-similar)
Recomendação: criar token --[sugestão-de-nome] para este caso.
```

## Restrições

- Nunca sugerir valor hardcoded como resposta
- Se o caso não tem token, declarar o gap em vez de inventar um valor

## Exemplos de invocação

```
/token-check qual token usar para o fundo de um card elevado sobre a página
/token-check qual token usar para o fundo de um popover de configurações rápidas
```
