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

| Regra | Situação | Nota | Validação ao vivo |
|---|---|---|---|
| [📈 Tendência MME9 · Diário](operacoes/tendencia) | Diário 🟢 comprado desde 02/10 (+8,7%) · ⚠️ zera abaixo de 203.052 | 🧪 em teste ao vivo | 0 de 10 operações ao vivo |
| [📈 Tendência MME9 · Semanal](operacoes/tendencia) | Semanal 🟢 comprado desde 31/08 (+15,7%) | 🧪 em teste ao vivo | 0 de 10 operações ao vivo |
| [🎯 Diário · Nadaraya](operacoes/entradas) | 🟢 comprado desde 25/08 (+16,9%) | ✅ passou fora da amostra | 0 de 10 operações ao vivo |
| [🎯 Semanal · Semáforo N2](operacoes/entradas) | — sem setup | ✅ o ganho vem do setup | 0 de 10 operações ao vivo |
| [🎯 H4 · Semáforo N2](operacoes/entradas) | — sem setup | 🧪 em teste | 0 de 10 operações ao vivo |
| [🎯 Diário · Semáforo N3 após ζ Fundo](operacoes/entradas) | — sem setup | 🧪 em observação | 0 de 10 operações ao vivo |

## 🧪 Placar ao vivo (desde 23/10/2026)

_Nenhuma operação encerrada ainda._ Posições abertas antes de 23/10 aparecem como simuladas e não entram no placar.
> [!note]- 📘 Como ler esta página (posições, placar e stops)
> - **🟢 Posições em aberto:** cada compra que está aberta agora, com preço de entrada, stop, resultado até o último fechamento, há quantos candles está aberta e **quando sai**. *Simulada* = começou antes de 23/10/2026 (mesmas regras, mas não conta no placar); **🧪 ao vivo** = começou depois.
> - **Agora:** a situação de cada regra — comprada, aguardando o gatilho (já houve o setup) ou sem setup.
> - **🧪 Placar ao vivo:** só operações encerradas que começaram a partir de 23/10/2026, com as regras congeladas. É o único resultado sem nenhum ajuste ao histórico.
> - **📅 Histórico por ano:** todas as operações simuladas desde 2000 e as ao vivo, ano a ano, por regra.
> - **Validação ao vivo** (critério definido em 23/10/2026, antes de qualquer resultado): com **10 operações ao vivo**, média positiva e resultado fora dos 25% piores que o histórico da regra permitiria → ✅ validada. A partir de 5 operações, se cair entre os 5% piores → ⚠️ abaixo do esperado; com 10, se continuar lá (ou a sequência de perdas for pior que a pior do histórico) → ❌ suspensão sugerida. **Nada é desligado sozinho:** chega um aviso no Telegram e a decisão é sua.
>
> **Stops** — toda operação entra com stop definido; se o preço abre além dele (gap), conta o preço de abertura:
>
> | Regra | Stop inicial | Move? | Saída normal |
> |---|---|---|---|
> | Tendência MME9 | 10% abaixo da entrada | não | candle fecha abaixo da MME9 e o preço rompe a mínima dele |
> | Diário · Nadaraya | menor mínima dos 5 pregões antes da entrada | não | linha rápida cruza para baixo, ou 60 pregões |
> | Semanal/H4 · Semáforo N2 e ζ → N3 | mínima do fundo do semáforo | vai para a entrada quando o lucro iguala o risco | topo do semáforo N3 fixo, ou 60 candles |
>
> Na Tendência e no Nadaraya o stop não acompanha o preço: o lucro é protegido pela **regra de saída**. Stops mais apertados pioraram o resultado nos testes. Avisos no Telegram: entrada, preparar compra, sinal de saída, saída e stops (H4 por volta das 14h e às 19h; o resto às 19h).


## Páginas

- 📈 [Tendência MME9](operacoes/tendencia) — só compra, diário e semanal
- 🎯 [Entradas do método](operacoes/entradas) — Nadaraya, Semáforo, H4 e ζ
- 📋 [Últimas operações](operacoes/ultimas-operacoes) — as mais recentes de cada regra
- 📅 [Histórico por ano](operacoes/historico-por-ano) — todas as operações, ano a ano, desde 2000
- 📚 [Regras e testes](metodologia/regras-de-operacao) · 🧪 [O que não passou](metodologia/o-que-nao-passou)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.