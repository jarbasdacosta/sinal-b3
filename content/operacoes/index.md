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
| [Tendência MME9 · Diário](operacoes/tendencia) | 02/10/26 a 187.835 | ⚡ 169.052 | **+8,7%** | 13 | ⚡ **zera abaixo de 203.052** — ordem stop, vale durante o pregão (por mais 3 candles) | simulada |
| [Tendência MME9 · Semanal](operacoes/tendencia) | 31/08/26 a 176.421 | ⚡ 158.779 | **+15,7%** | 7 | ⏱️ sinal no fechamento (candle fecha abaixo da MME9), depois ⚡ ordem stop na mínima dele | simulada |
| [Diário · Nadaraya](operacoes/entradas) | 25/08/26 a 174.577 | ⚡ 166.335 | **+16,9%** | 40 | ⏱️ no fechamento: quando a linha rápida do Nadaraya cruzar para baixo | simulada |

> [!warning] ⚡ = vale **durante o pregão** (ordem stop: deixe a ordem na plataforma; o sistema confere a cada 15 min, avisa 🚨 a 0,5% do nível e avisa quando executar) · ⏱️ = só no **fechamento** do candle

*Resultado até o último fechamento. Posições abertas antes de 23/10/2026 são simuladas no histórico e não entram no placar ao vivo.*

## Agora

| Regra | Situação | Nota | Validação ao vivo |
|---|---|---|---|
| [📈 Tendência MME9 · Diário](operacoes/tendencia) | Diário 🟢 comprado desde 02/10 (+8,7%) · ⚡ zera abaixo de 203.052 (durante o pregão) | 🧪 em teste ao vivo | 0 de 10 operações ao vivo |
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
> **Stops** — toda operação entra com stop definido; se o preço abre além dele (gap), conta o preço de abertura. **⚡ = vale durante o pregão** (ordem stop) · **⏱️ = só no fechamento do candle**:
>
> | Regra | Stop inicial | Move? | Saída normal |
> |---|---|---|---|
> | Tendência MME9 | ⚡ 10% abaixo da entrada | não | ⏱️ candle fecha abaixo da MME9 → ⚡ ordem stop na mínima dele |
> | Diário · Nadaraya | ⚡ menor mínima dos 5 pregões antes da entrada | não | ⏱️ linha rápida cruza para baixo, ou 60 pregões |
> | Semanal/H4 · Semáforo N2 e ζ → N3 | ⚡ mínima do fundo do semáforo | vai para a entrada quando o lucro iguala o risco | ⏱️ topo do semáforo N3 fixo, ou 60 candles |
>
> Na Tendência e no Nadaraya o stop não acompanha o preço: o lucro é protegido pela **regra de saída**. Stops mais apertados pioraram o resultado nos testes. Tudo que é ⚡ é conferido **a cada 15 min no pregão**, com aviso na hora no Telegram (e 🚨 quando o preço chega a 0,5% do nível); o que é ⏱️ sai na rodada das 19h (o H4 também por volta das 14h). Entradas da Tendência também são ⚡ (ordem stop de compra); as das Entradas do método são ⏱️.


## Páginas

- 📈 [Tendência MME9](operacoes/tendencia) — só compra, diário e semanal
- 🎯 [Entradas do método](operacoes/entradas) — Nadaraya, Semáforo, H4 e ζ
- 📋 [Últimas operações](operacoes/ultimas-operacoes) — as mais recentes de cada regra
- 📅 [Histórico por ano](operacoes/historico-por-ano) — todas as operações, ano a ano, desde 2000
- 🔔 [Linha do tempo](linha-do-tempo/) — cada ordem, stop e aviso com data e hora, do mais recente ao mais antigo
- 📚 [Regras e testes](metodologia/regras-de-operacao) · 🧪 [O que não passou](metodologia/o-que-nao-passou)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.