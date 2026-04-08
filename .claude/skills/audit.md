---
name: audit
description: Audita uma tela ou componente descrito e identifica violações do DS — valores hardcoded, componentes incorretos, hierarquia de botões errada, estados ausentes, tokens faltando.
---

# /audit

Audita uma tela ou componente descrito e identifica violações do DS — valores hardcoded, componentes incorretos, hierarquia de botões errada, estados ausentes, tokens faltando.

## Comportamento

O agente deve:
1. Ler a descrição da tela ou componente fornecida
2. Verificar cada elemento contra:
   - `tokens/colors.md` → algum valor hardcoded?
   - `components/` → componente correto para o caso?
   - `rulebook.md` → algum anti-pattern presente?
   - Hierarquia de botões → mais de 1 primary?
   - Estados → loading/empty/error ausentes?
3. Listar cada violação com: o que é, por que é violação, como corrigir

## Output esperado

Lista de violações no formato:

```
VIOLAÇÃO #1
Elemento: [nome ou descrição]
Problema: [o que está errado]
Regra violada: [qual regra do DS]
Correção: [como resolver]
```

Se não houver violações: `AUDITORIA APROVADA — Nenhuma violação identificada.`

## Restrições

- Não propor "melhorias" além das violações — apenas o que quebra as regras documentadas
- Não auditar o que não foi descrito — se a descrição é incompleta, listar o que não pode ser auditado

## Exemplos de invocação

```
/audit essa tela tem dois botões primários e fundo hardcoded #1e1e1e
/audit a tela de dashboard tem: título com font-size 28px hardcoded, dois botões "Salvar" e "Publicar" ambos com style primary, fundo da página em #222222
```
