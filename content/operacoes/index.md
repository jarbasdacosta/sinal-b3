---
title: "🎯 Operações"
date: 2026-10-23
tags: [operacoes]
description: "Regras de compra testadas no Ibovespa, com placar ao vivo desde 23/10/2026"
---

Regras de **compra** testadas no Ibovespa 2000–2026 e **congeladas em 23/10/2026**. Daqui para frente cada operação entra no **placar ao vivo**, o único resultado sem nenhum ajuste ao histórico. Nenhuma regra de venda passou nos testes ([por quê](metodologia/o-que-nao-passou)).

> [!tip] 🎯 Operações — último candle
> - ⚠️ Tendência Diário: sinal de saída — zera abaixo de 203.052
>
> [Ver operações](operacoes/)

## 🟢 Posições em aberto

| Regra | Entrada | Stop | Agora | Candles | Sai quando | |
|---|---|---|---|---|---|---|
| [Tendência MME9 · Diário](operacoes/tendencia) | 02/10/26 a 187.835 | 169.052 | **+8,7%** | 13 | ⚠️ zera abaixo de **203.052** (vale por mais 3 candles) | simulada |
| [Tendência MME9 · Semanal](operacoes/tendencia) | 31/08/26 a 176.421 | 158.779 | **+15,7%** | 7 | quando um candle fechar abaixo da MME9 e o preço romper a mínima dele | simulada |
| [Diário · Nadaraya](operacoes/entradas) | 25/08/26 a 174.577 | 166.335 | **+16,9%** | 40 | quando a linha rápida do Nadaraya cruzar para baixo | simulada |

*Resultado até o último fechamento. Posições abertas antes de 23/10/2026 são simuladas no histórico e não entram no placar ao vivo.*

## Agora

| Regra | Situação | Nota |
|---|---|---|
| [📈 Tendência MME9 · Diário](operacoes/tendencia) | Diário 🟢 comprado desde 02/10 (+8,7%) · ⚠️ zera abaixo de 203.052 | 🧪 ao vivo |
| [📈 Tendência MME9 · Semanal](operacoes/tendencia) | Semanal 🟢 comprado desde 31/08 (+15,7%) | 🧪 ao vivo |
| [🎯 Diário · Nadaraya](operacoes/entradas) | 🟢 comprado desde 25/08 (+16,9%) | ✅ passou fora da amostra |
| [🎯 Semanal · Semáforo N2](operacoes/entradas) | — sem setup | ✅ o ganho vem do setup |
| [🎯 H4 · Semáforo N2](operacoes/entradas) | — sem setup | 🧪 em teste |
| [🎯 Diário · Semáforo N3 após ζ Fundo](operacoes/entradas) | — sem setup | 🧪 em observação |

## 🧪 Placar ao vivo (desde 23/10/2026)

_Nenhuma operação encerrada ainda._ Posições abertas antes de 23/10 aparecem como simuladas e não entram no placar.

## Páginas

- 📈 [Tendência MME9](operacoes/tendencia) — só compra, diário e semanal
- 🎯 [Entradas do método](operacoes/entradas) — Nadaraya, Semáforo, H4 e ζ
- 📋 [Últimas operações](operacoes/ultimas-operacoes) — as mais recentes de cada regra
- 📅 [Histórico por ano](operacoes/historico-por-ano) — todas as operações, ano a ano, desde 2000
- 📚 [Regras e testes](metodologia/regras-de-operacao) · 🧪 [O que não passou](metodologia/o-que-nao-passou)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.