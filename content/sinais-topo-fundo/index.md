---
title: Sinais de Topo e Fundo
date: 2026-10-22
tags: [sinais]
description: Candles de Oliver Velez + RSI, CCI, MACD-V e Bollinger no Ibovespa
---

Candles de Oliver Velez + RSI, CCI, MACD-V e Bollinger — só os sinais que tiveram vantagem estatística no Ibovespa (2000–2026), em cada tempo gráfico. É um módulo **separado** do Sinal de Crise (IMA + LPPL). Clique no código de um sinal para vê-lo marcado no gráfico. Baseado no trabalho de Oliver Velez (candles), J. Welles Wilder (RSI), Donald Lambert (CCI), John Bollinger (Bandas) e Alex Spiroglou (MACD-V), adaptado e testado no Ibovespa por Jarbas Daniel da Costa.

📘 [Tutorial — como ler e usar](sinais-topo-fundo/tutorial) · 📋 [Todos os sinais (fortes e moderados)](sinais-topo-fundo/todos-os-sinais)

> [!note] Nenhum sinal no fechamento de 22/10/2026
> Os blocos 🔥 aparecem aqui (e na página inicial) no dia em que surge um sinal **forte**.

> [!warning] 🔥 Sinal FORTE em formação (ainda pode sumir até o candle fechar)
> - Mensal · TOPO · **RSI75+MV** — RSI≥75 e MACD-V≥130 (62%, 2,7× o acaso)
> - Semanal · TOPO · **FD+CCI** — Fechou fora→dentro da BB superior + CCI≥200 (68%, 2,6× o acaso)
> 
> *Semanal confirma na sexta; mensal no último pregão do mês.*

## 🔥 Últimos sinais fortes

| Candle | Tempo gráfico | Tipo | Sinal | Força | Acerto | vs. acaso |
|---|---|---|---|---|---|---|
| **09/06/2026** | Diário | 🟢 FUNDO | **[FD+RSI](tecnico/#diário)** — Fechou fora→dentro da BB inferior + RSI≤30 | 🔥 **FORTE** | **71%** | 2,8× |
| **21/05/2026** | Diário | 🟢 FUNDO | **[BT+RSI](tecnico/#diário)** — Bottom tail + RSI≤30 | 🔥 **FORTE** | **73%** | 3,2× |
| **30/04/2026** | Mensal | 🔴 TOPO | **[TT+RSI](tecnico/#mensal)** — Top tail + RSI≥70 | 🔥 **FORTE** | **38%** | 2,5× |
| **30/04/2026** | Mensal | 🔴 TOPO | **[FD+CCI](tecnico/#mensal)** — Fechou fora→dentro da BB superior + CCI≥200 | 🔥 **FORTE** | **50%** | 2,7× |
| **28/02/2026** | Mensal | 🔴 TOPO | **[RSI75+MV](tecnico/#mensal)** — RSI≥75 e MACD-V≥130 | 🔥 **FORTE** | **62%** | 2,7× |
| **21/11/2025** | Semanal | 🔴 TOPO | **[FD+CCI](tecnico/#semanal)** — Fechou fora→dentro da BB superior + CCI≥200 | 🔥 **FORTE** | **68%** | 2,6× |
| **26/09/2025** | Semanal | 🔴 TOPO | **[FD+CCI](tecnico/#semanal)** — Fechou fora→dentro da BB superior + CCI≥200 | 🔥 **FORTE** | **68%** | 2,6× |
| **10/01/2025** | Semanal | 🟢 FUNDO | **[FD+RSI](tecnico/#semanal)** — Fechou fora→dentro da BB inferior + RSI≤30 | 🔥 **FORTE** | **88%** | 3,2× |
| **31/01/2024** | Mensal | 🔴 TOPO | **[FD+CCI](tecnico/#mensal)** — Fechou fora→dentro da BB superior + CCI≥200 | 🔥 **FORTE** | **50%** | 2,7× |
| **31/01/2024** | Mensal | 🔴 TOPO | **[S180](tecnico/#mensal)** — Bear 180 | 🔥 **FORTE** | **62%** | 4,3× |

Os moderados ficam em [Todos os sinais](sinais-topo-fundo/todos-os-sinais).

## Quais sinais são fortes

**Forte** = teve vantagem sobre o acaso em 2000–2014 **e** em 2015–2026, com pelo menos 2,5× o acaso. Entre parênteses, o acerto histórico. Os demais sinais validados são **moderados**.

| Tempo gráfico | 🟢 Fundo — fortes | 🔴 Topo — fortes |
|---|---|---|
| Mensal | — | **S180** (62%), **FD+CCI** (50%), **TT+RSI** (38%), **RSI75+MV** (62%) |
| Semanal | **BT+CCI** (73%), **FD+RSI** (88%), **FD+CCI** (89%), **B180+BB** (67%) | **FD+CCI** (68%) |
| Diário | **BT+RSI** (73%), **BT+CCI** (57%), **FD+RSI** (71%) | — |
| H4 | — | — |

*Atualizado em 22/10/2026 19:11 BRT (último pregão fechado: 22/10/2026). Dados: Yahoo (^BVSP); semanal e mensal reamostrados do diário; H4 do 60 min.*

> [!quote]- Aviso
> Estudo estatístico. Não constitui recomendação de investimento.