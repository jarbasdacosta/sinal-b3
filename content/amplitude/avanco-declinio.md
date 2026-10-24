---
title: "📈 Avanço e declínio"
date: 2026-10-23
description: "Linha de avanço e declínio do Ibovespa: ações que subiram menos as que caíram, acumulado"
tags: [amplitude]
---

*Atualizado 23/10/2026 22:05 · fechamento de 23/10/2026.*

Em cada pregão, conta quantas ações da carteira do Ibovespa **subiram** e quantas **caíram**. O saldo do dia (subiram − caíram) é somado dia após dia: essa é a **linha de avanço e declínio**. Ela mostra se a alta do índice é de muitas ações ou só de algumas grandes. A tese clássica: **topos de mercado vêm com divergência** — o Ibovespa faz um topo maior e a linha **não** faz.

> [!note] 23/10/2026: **54 subiram · 21 caíram** · saldo **+33** · linha 1.199
> **3 meses**: Ibovespa fora da máxima (topo em 09/10) · **6 meses**: Ibovespa fora da máxima (topo em 09/10) · **12 meses**: Ibovespa fora da máxima (topo em 09/10)

![Linha de avanço e declínio](graficos/linha_ad_20261023.png)

## Últimos pregões

| Data | Subiram | Caíram | Saldo | Linha | Ibovespa |
|---|---|---|---|---|---|
| 23/10/2026 | 54 | 21 | **+33** | 1.199 | 205.083 |
| 22/10/2026 | 15 | 61 | **-46** | 1.166 | 204.120 |
| 21/10/2026 | 20 | 55 | **-35** | 1.212 | 206.495 |
| 20/10/2026 | 72 | 5 | **+67** | 1.247 | 208.296 |
| 19/10/2026 | 50 | 27 | **+23** | 1.180 | 205.079 |
| 16/10/2026 | 36 | 38 | **-2** | 1.157 | 205.430 |
| 15/10/2026 | 9 | 68 | **-59** | 1.159 | 204.324 |
| 14/10/2026 | 27 | 49 | **-22** | 1.218 | 206.506 |
| 13/10/2026 | 16 | 61 | **-45** | 1.240 | 206.888 |
| 09/10/2026 | 61 | 14 | **+47** | 1.285 | 209.067 |
| 08/10/2026 | 59 | 16 | **+43** | 1.238 | 206.220 |
| 07/10/2026 | 44 | 33 | **+11** | 1.195 | 204.302 |

**Últimas divergências de 6 meses** (Ibovespa na máxima, linha não): 05/10/2026 · 08/04/2026 · 26/11/2025 · 27/10/2025 · 05/09/2025 · 03/07/2025 · 24/04/2025 · 13/08/2024

## Os grandes topos (Ibovespa caiu 20% ou mais depois)

| Topo do Ibovespa | Queda depois | Pico da linha | A linha virou antes? |
|---|---|---|---|
| 07/06/2021 · 130.776 | -23% | 20/07/2020 | ⚠ sim. 216 pregões antes |
| 23/01/2020 · 119.528 | -47% | 23/01/2020 | — não (confirmou) |
| 26/02/2018 · 87.653 | -20% | 26/02/2018 | — não (confirmou) |
| 02/09/2014 · 61.896 | -24% | 22/10/2013 | ⚠ sim. 211 pregões antes |
| 04/11/2010 · 72.996 | -33% | 04/11/2010 | — não (confirmou) |
| 20/05/2008 · 73.517 | -60% | 09/10/2007 | ⚠ sim. 146 pregões antes |
| 09/05/2006 · 41.979 | -22% | 09/05/2006 | — não (confirmou) |
| 26/01/2004 · 24.350 | -28% | 05/01/2004 | ⚠ sim. 15 pregões antes |

Em **4 de 8** grandes topos a linha já tinha virado antes do Ibovespa. Só entram topos que eram máxima de 12 meses (repiques dentro de uma queda ficam de fora).

## O que o teste mostrou (23/10/2026)

Carteiras reconstruídas por liquidez, 2001–2026, treino 2001–2013 × teste 2014–hoje. A pergunta honesta: **dado que o Ibovespa está na máxima, a linha não confirmar piora o que vem depois?**

| Situação | O que aconteceu depois | Confiança |
|---|---|---|
| Divergência (Ibovespa na máxima de 3, 6 ou 12 meses, linha não) | igual aos outros dias de máxima — em 60 pregões **+4,9%** × +5,2% (treino) e **+1,3%** × −0,1% (teste) | ❌ não antecipou queda |
| Divergência **forte** (linha ainda no 1/5 de baixo da sua faixa) | treino: **−5,4%** em 60 pregões (× +5,2%) e queda de 10%+ em **75%** das vezes (× 25%) — mas só 4 a 7 casos; no teste (14 casos) o efeito sumiu | ❌ não se repetiu |
| Topo **confirmado** (os dois na máxima) | um pouco melhor que as outras máximas | sem força estatística |
| Grandes topos | a linha virou antes em metade deles (2008: em out/2007; 2021: em jul/2020) | — |
| Divergência de alta nos fundos | não ajudou | ❌ |

**Por que é só contexto:** a divergência aparece em metade dos grandes topos, mas aparece **muito mais vezes sem topo nenhum** (cerca de 80 divergências de 3 meses em 25 anos, para 8 grandes topos). Por isso não há aviso no Telegram: serve para ver se a alta é de muitas ações ou de poucas.

> [!info]- Como é calculado e limites
> - Mesma base da [📊 Amplitude](amplitude/): cotações ajustadas do Yahoo; a carteira de cada época (a atual da B3 e, para o passado, reconstruída por liquidez em janeiro, maio e setembro).
> - Só as ações da carteira do Ibovespa (a linha clássica usa todas as ações da bolsa). Ações que fecharam o capital não têm cotação e ficam de fora. Ação parada no dia (sem variação) não conta.
> - O valor da linha não importa — o que importa é a direção e se ela acompanha os topos do índice.

[📊 Amplitude](amplitude/) · [🌎 Capital estrangeiro](estrangeiros/) · [Sinais](sinais-topo-fundo/)

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.