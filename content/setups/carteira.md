---
title: Carteira de setups
date: 2026-10-27
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 27/10/2026 19:40 BRT · dados de 01/11/2021 a 27/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 9 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 39.593** (+32% ao ano · pior queda −5% · Sharpe 1,60)
> - CDI: **R\$ 18.128** (+13% ao ano) · Ibovespa: **R\$ 16.647** (+11% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 38.657, +31% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.128.848, +160% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+0,0%** em 1 pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| # | Setup | Sharpe | Retorno ÷ queda | Teste ÷ treino | Meses > CDI | Correlação | Op./mês |
|---|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | 1,59 | 4,0 | 150% | 72% | 0,16 | 12,6 |
| 2º | [**Bollinger**](rompimento-da-bollinger) | 1,61 | 3,5 | 150% | 65% | 0,24 | 4,2 |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | 1,08 | 1,4 | 150% | 63% | 0,07 | 7,8 |
| 4º | [**ADX**](adx-da-manha) | 1,03 | 1,6 | 150% | 63% | 0,20 | 29,3 |
| 5º | [**Tendência**](tendencia-forte-do-dia) | 1,28 | 2,1 | 81% | 60% | 0,25 | 28,7 |
| 6º | [**Pullback**](pullback-na-media) | 1,20 | 2,8 | 28% | 60% | −0,06 | 5,0 |
| 7º | [**MACD**](macd-na-tendencia) | 0,90 | 1,0 | 150% | 63% | 0,24 | 14,7 |
| 8º | [**Onda**](vai-na-onda) | 0,69 | 0,9 | 150% | 57% | 0,15 | 19,4 |
| 9º | [**Quinta**](primeira-vela-de-quinta) | 0,88 | 1,1 | 62% | 50% | −0,12 | 1,8 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| # | Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | +43% | **+67%** | −7% | **−11%** | sem operações |
| 2º | [**Bollinger**](rompimento-da-bollinger) | +26% | **+52%** | −4% | **−7%** | sem operações |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | +31% | **+46%** | −13% | **−14%** | 1 op · −1,02R |
| 4º | [**ADX**](adx-da-manha) | +37% | **+65%** | −15% | **−31%** | 1 op · −1,06R |
| 5º | [**Tendência**](tendencia-forte-do-dia) | +46% | **+70%** | −16% | **−24%** | sem operações |
| 6º | [**Pullback**](pullback-na-media) | +26% | **+32%** | −5% | **−9%** | sem operações |
| 7º | [**MACD**](macd-na-tendencia) | +30% | **+40%** | −17% | **−11%** | 1 op · −1,02R |
| 8º | [**Onda**](vai-na-onda) | +29% | **+40%** | −19% | **−20%** | 1 op · −1,02R |
| 9º | [**Quinta**](primeira-vela-de-quinta) | +17% | **+18%** | −4% | **−3%** | sem operações |

- **IFR de Tendência:** entra na força medida pelo IFR · 10h–11h e 14h–16h
- **Rompimento da Bollinger:** rompimento da banda de Bollinger a favor da tendência · 10h15–11h e 14h–17h30
- **Primeira Vela de 80 Minutos:** força da primeira vela do dia, alvo longo com stop móvel · entra 10h20
- **ADX da Manhã:** pega o começo da tendência (ADX subindo), stop curto · 10h–11h
- **Tendência Forte do Dia:** segue a tendência já formada (rompimento longe da abertura) · o dia todo, até 17h
- **Pullback na Média:** entra na volta da correção até a média · 10h30–12h30 e 14h45–15h45
- **MACD na Tendência:** tendência do dia confirmada pelo MACD, com break even · 9h–11h30 e 14h–16h
- **Vai na Onda:** segue o fluxo: 3 velas a favor renovando o extremo do dia com volume · 9h45–16h
- **Primeira Vela de Quinta:** rompimento da primeira vela do dia (dia da semana escolhido) · 9h15

*Correlação = com os outros setups (baixa é bom para a carteira). Como o ranking é feito: cada setup ganha uma posição em 4 critérios — **Sharpe** (retorno acima do CDI por oscilação), **retorno acima do CDI ÷ pior queda** (quanto rende para cada 1% de queda que você aguenta), **teste ÷ treino** (quanto do resultado por operação de 2021–2023 se manteve em 2024 em diante; 100% = manteve tudo) e **meses acima do CDI**. Vale a média das 4 posições. Correlação baixa com os outros é bom para a carteira, mas não entra na nota de cada setup.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes:

| Perfil | Combinação | 1 contrato: ao ano · queda | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** | Sharpe treino → teste |
|---|---|---|---|---|---|
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | +31% · −2,6% | +52% · −5,1% | **+160% · −17,1%** | 2,34 → 2,11 |
| 📈 Maior retorno | Tendência | +46% · −16,1% | +70% · −23,6% | **+70% · −23,6%** | 1,58 → 1,12 |
| 🛡️ Menor queda | Pullback + Bollinger | +26% · −2,1% | +43% · −4,0% | **+78% · −8,6%** | 2,24 → 1,65 |

*R\$ 10 mil viraram, na recomendada: R\$ 38.657 com 1 contrato por R\$ 10 mil · R\$ 78.066 com 1% dividido entre os setups · **R\$ 1.128.848 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · MACD = MACD na Tendência · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

**Por que a recomendada é IFR de Tendência + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios ao mesmo tempo — Sharpe 2,19, rende 7,1× acima do CDI para cada 1% de pior queda, e o Sharpe ficou em 2,34 no treino e 2,11 no teste (não depende de um período só). A correlação média entre os setups dela é 0,01: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, MACD na Tendência, Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR + Quinta + Pullback + Bollinger ⚠️ | +28% | −1,6% | 9,1 | 2,52 → 2,16 | +20% | −0,01 | +43% · −3,5% | **+173% · −17,1%** |
| 2 | IFR + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +29% | −2,1% | 7,4 | 2,15 → 2,26 | +23% | −0,04 | +44% · −3,3% | **+245% · −20,5%** |
| 3 | IFR + Pullback + Bollinger ⭐ | +31% | −2,6% | 7,1 | 2,34 → 2,11 | +22% | 0,01 | +52% · −5,1% | **+160% · −17,1%** |
| 4 | IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | +32% | −3,1% | 6,1 | 2,02 → 2,22 | +25% | 0,02 | +51% · −4,4% | **+229% · −20,4%** |
| 5 | IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | +29% | −2,2% | 7,5 | 1,98 → 2,08 | +23% | −0,14 | +42% · −3,3% | **+162% · −16,4%** |
| 6 | IFR + Quinta + Pullback ⚠️ | +28% | −2,0% | 8,0 | 2,34 → 1,88 | +19% | −0,09 | +39% · −3,5% | **+105% · −12,8%** |
| 7 | 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +25% | −2,0% | 6,1 | 1,95 → 2,02 | +22% | −0,06 | +38% · −3,1% | **+140% · −15,2%** |
| 8 | IFR + Quinta + Bollinger ⚠️ | +28% | −2,9% | 5,3 | 1,93 → 2,09 | +22% | 0,05 | +46% · −4,8% | **+134% · −17,4%** |
| 9 | IFR + 1ª vela 80 + Pullback ⚠️ | +34% | −3,0% | 7,0 | 1,84 → 2,02 | +26% | −0,13 | +50% · −4,7% | **+149% · −16,3%** |
| 10 | IFR + Pullback | +34% | −3,5% | 6,1 | 2,15 → 1,80 | +21% | −0,17 | +50% · −5,9% | **+96% · −12,9%** |
| 11 | IFR + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +35% | −5,0% | 4,4 | 2,09 → 1,93 | +25% | 0,09 | +55% · −6,7% | **+352% · −35,7%** |
| 12 | 1ª vela 80 + Quinta + Pullback + Bollinger + Tendência ⚠️ | +29% | −3,3% | 5,0 | 2,13 → 1,81 | +22% | −0,01 | +45% · −4,9% | **+244% · −29,1%** |
| 13 | Quinta + Pullback + Bollinger ⚠️ | +23% | −1,6% | 6,1 | 2,51 → 1,71 | +17% | −0,02 | +34% · −2,4% | **+87% · −8,2%** |
| 14 | IFR + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +33% | −4,2% | 4,8 | 2,08 → 1,83 | +24% | −0,05 | +48% · −5,2% | **+265% · −30,2%** |
| 15 | ADX + IFR + Quinta + Pullback + Bollinger ⚠️ | +30% | −4,1% | 4,2 | 1,85 → 2,11 | +20% | 0,08 | +49% · −6,4% | **+273% · −34,9%** |
| 16 | IFR + Quinta + Pullback + Bollinger + Tendência ⚠️ | +32% | −4,4% | 4,3 | 2,34 → 1,80 | +21% | 0,06 | +49% · −6,0% | **+282% · −33,2%** |
| 17 | IFR + MACD + Quinta + Pullback + Bollinger ⚠️ | +28% | −3,6% | 4,4 | 1,93 → 1,88 | +23% | 0,04 | +42% · −4,1% | **+224% · −25,8%** |
| 18 | IFR + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +33% | −4,9% | 4,1 | 1,89 → 1,93 | +26% | 0,09 | +52% · −6,6% | **+311% · −35,3%** |
| 19 | Pullback + Bollinger | +26% | −2,1% | 6,1 | 2,24 → 1,65 | +17% | −0,05 | +43% · −4,0% | **+78% · −8,6%** |
| 20 | ADX + IFR + Pullback + Bollinger | +33% | −4,7% | 4,4 | 1,71 → 2,07 | +21% | 0,14 | +58% · −7,9% | **+255% · −34,2%** |
| 21 | IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | +37% | −5,7% | 4,3 | 1,98 → 1,79 | +25% | 0,02 | +56% · −6,9% | **+248% · −30,1%** |
| 22 | IFR + Bollinger | +34% | −4,8% | 4,4 | 1,70 → 2,04 | +26% | 0,25 | +61% · −7,7% | **+123% · −16,6%** |
| 23 | 1ª vela 80 + Pullback + Bollinger ⚠️ | +28% | −3,7% | 4,1 | 1,78 → 1,95 | +24% | −0,01 | +45% · −4,1% | **+129% · −15,3%** |
| 24 | ADX + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | +33% | −4,0% | 5,1 | 1,61 → 2,18 | +23% | 0,10 | +56% · −6,9% | **+336% · −38,7%** |
| 25 | 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +33% | −4,6% | 4,3 | 2,01 → 1,76 | +23% | 0,07 | +52% · −6,5% | **+228% · −28,8%** |
| 26 | Quinta + Bollinger ⚠️ | +21% | −1,5% | 5,8 | 1,82 → 1,77 | +18% | 0,01 | +35% · −2,8% | **+60% · −8,4%** |
| 27 | IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | +29% | −3,7% | 4,4 | 1,66 → 2,19 | +24% | 0,03 | +47% · −4,4% | **+196% · −20,9%** |
| 28 | IFR + Pullback + Bollinger + Tendência | +35% | −5,9% | 3,8 | 2,23 → 1,76 | +22% | 0,14 | +57% · −8,0% | **+264% · −33,2%** |
| 29 | ADX + IFR + Pullback + Bollinger + Tendência | +36% | −6,3% | 3,7 | 1,89 → 1,89 | +25% | 0,19 | +61% · −9,5% | **+374% · −45,8%** |
| 30 | ADX + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | +31% | −3,8% | 4,9 | 1,58 → 2,08 | +21% | −0,03 | +48% · −6,0% | **+251% · −34,2%** |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+11%* | *−20,9%* | — | — | — | — | — | — |

> [!example]- Combinações 31 a 60 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 31 | ADX + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | +37% | −6,1% | 4,0 | 1,71 → 1,89 | +28% | 0,09 | +60% · −8,8% | **+346% · −44,2%** |
> | 32 | IFR + MACD + Pullback + Bollinger | +31% | −4,8% | 3,8 | 1,79 → 1,83 | +24% | 0,11 | +49% · −5,6% | **+209% · −25,7%** |
> | 33 | IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | +37% | −6,5% | 3,7 | 1,79 → 1,89 | +29% | 0,23 | +61% · −8,6% | **+292% · −35,2%** |
> | 34 | IFR + Quinta + Pullback + Tendência ⚠️ | +33% | −4,9% | 4,1 | 2,23 → 1,63 | +20% | 0,01 | +47% · −6,1% | **+192% · −27,5%** |
> | 35 | ADX + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +34% | −5,5% | 3,8 | 1,72 → 1,89 | +26% | 0,13 | +57% · −8,4% | **+333% · −43,8%** |
> | 36 | IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | +35% | −5,6% | 3,9 | 1,76 → 1,79 | +27% | −0,01 | +51% · −6,8% | **+216% · −29,7%** |
> | 37 | ADX + IFR + Quinta + Pullback + Tendência ⚠️ | +34% | −5,9% | 3,6 | 1,89 → 1,79 | +23% | 0,08 | +53% · −8,0% | **+285% · −44,1%** |
> | 38 | 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +30% | −4,5% | 3,9 | 1,78 → 1,77 | +25% | 0,04 | +47% · −5,9% | **+197% · −27,0%** |
> | 39 | IFR + Quinta ⚠️ | +30% | −3,6% | 4,7 | 1,66 → 1,81 | +22% | −0,10 | +42% · −5,2% | **+76% · −11,3%** |
> | 40 | IFR + MACD + Quinta + Pullback ⚠️ | +29% | −3,6% | 4,5 | 1,77 → 1,69 | +22% | −0,03 | +40% · −4,4% | **+146% · −19,4%** |
> | 41 | 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +30% | −3,7% | 4,8 | 1,99 → 1,61 | +22% | −0,11 | +42% · −7,3% | **+162% · −31,1%** |
> | 42 | IFR + Quinta + Bollinger + Tendência ⚠️ | +33% | −5,8% | 3,5 | 2,02 → 1,77 | +23% | 0,14 | +53% · −7,8% | **+230% · −32,8%** |
> | 43 | Quinta + Pullback + Bollinger + Tendência ⚠️ | +29% | −3,8% | 4,1 | 2,34 → 1,56 | +18% | 0,04 | +44% · −5,2% | **+174% · −24,6%** |
> | 44 | ADX + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +32% | −4,7% | 4,0 | 1,69 → 1,78 | +25% | −0,01 | +49% · −7,0% | **+250% · −41,9%** |
> | 45 | ADX + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +28% | −3,5% | 4,3 | 1,52 → 2,05 | +20% | 0,03 | +45% · −6,5% | **+233% · −36,9%** |
> | 46 | ADX + IFR + Quinta + Pullback ⚠️ | +31% | −5,1% | 3,6 | 1,69 → 1,93 | +19% | 0,02 | +48% · −7,8% | **+185% · −32,5%** |
> | 47 | IFR + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +30% | −4,6% | 3,6 | 1,67 → 1,87 | +24% | −0,04 | +41% · −3,4% | **+209% · −22,5%** |
> | 48 | ADX + IFR + Pullback + Tendência | +39% | −7,3% | 3,5 | 1,79 → 1,75 | +25% | 0,15 | +62% · −10,9% | **+267% · −45,9%** |
> | 49 | IFR + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +31% | −5,6% | 3,3 | 1,71 → 1,97 | +25% | 0,11 | +49% · −4,9% | **+286% · −28,5%** |
> | 50 | 1ª vela 80 + Quinta + Pullback ⚠️ | +25% | −2,2% | 5,3 | 1,68 → 1,64 | +21% | −0,21 | +33% · −5,6% | **+80% · −18,6%** |
> | 51 | ADX + IFR + 1ª vela 80 + Pullback ⚠️ | +35% | −4,8% | 4,6 | 1,47 → 2,04 | +22% | 0,01 | +56% · −7,7% | **+235% · −33,5%** |
> | 52 | ADX + IFR + Quinta + Bollinger + Tendência ⚠️ | +34% | −6,2% | 3,5 | 1,69 → 1,89 | +26% | 0,20 | +57% · −9,3% | **+332% · −45,4%** |
> | 53 | IFR + 1ª vela 80 + Bollinger ⚠️ | +33% | −5,4% | 3,8 | 1,50 → 2,14 | +26% | 0,20 | +57% · −6,4% | **+182% · −20,8%** |
> | 54 | MACD + Quinta + Pullback + Bollinger ⚠️ | +25% | −3,4% | 3,5 | 1,89 → 1,69 | +21% | 0,01 | +36% · −2,8% | **+129% · −16,2%** |
> | 55 | IFR + 1ª vela 80 + Quinta ⚠️ | +30% | −3,8% | 4,6 | 1,43 → 2,00 | +24% | −0,13 | +44% · −4,3% | **+124% · −14,2%** |
> | 56 | ADX + Quinta + Pullback + Bollinger + Tendência ⚠️ | +31% | −5,7% | 3,1 | 1,93 → 1,77 | +22% | 0,11 | +50% · −7,8% | **+272% · −44,5%** |
> | 57 | ADX + IFR + MACD + Pullback + Bollinger | +33% | −5,2% | 3,9 | 1,52 → 1,94 | +22% | 0,16 | +54% · −7,7% | **+311% · −41,1%** |
> | 58 | IFR + Pullback + Tendência | +39% | −7,2% | 3,6 | 2,11 → 1,57 | +21% | 0,09 | +58% · −8,7% | **+178% · −27,9%** |
> | 59 | ADX + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | +31% | −3,8% | 4,8 | 1,32 → 2,16 | +22% | 0,12 | +52% · −7,2% | **+294% · −39,6%** |
> | 60 | ADX + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | +37% | −6,8% | 3,6 | 1,54 → 1,97 | +28% | 0,26 | +64% · −10,1% | **+398% · −48,2%** |

> [!example]- Combinações 61 a 90 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 61 | ADX + Pullback + Bollinger + Tendência | +34% | −6,7% | 3,2 | 1,81 → 1,73 | +23% | 0,19 | +59% · −11,3% | **+255% · −46,3%** |
> | 62 | ADX + IFR + Pullback | +36% | −6,2% | 3,7 | 1,54 → 1,88 | +20% | 0,06 | +59% · −10,0% | **+171% · −31,8%** |
> | 63 | ADX + IFR + MACD + Quinta + Pullback ⚠️ | +31% | −4,4% | 4,2 | 1,49 → 1,85 | +21% | 0,04 | +47% · −6,4% | **+231% · −36,6%** |
> | 64 | 1ª vela 80 + Pullback + Tendência ⚠️ | +35% | −5,5% | 4,0 | 1,87 → 1,55 | +23% | −0,06 | +51% · −10,2% | **+150% · −30,8%** |
> | 65 | IFR + 1ª vela 80 + Tendência ⚠️ | +41% | −8,0% | 3,5 | 1,65 → 1,75 | +30% | 0,17 | +63% · −9,6% | **+201% · −29,7%** |
> | 66 | ADX + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | +35% | −6,0% | 3,7 | 1,51 → 1,90 | +27% | 0,08 | +56% · −8,7% | **+307% · −43,8%** |
> | 67 | IFR + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +36% | −6,7% | 3,4 | 1,74 → 1,70 | +28% | 0,12 | +53% · −7,2% | **+298% · −37,6%** |
> | 68 | IFR + Bollinger + Tendência | +39% | −8,3% | 3,1 | 1,89 → 1,72 | +25% | 0,34 | +65% · −11,0% | **+215% · −32,8%** |
> | 69 | MACD + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +32% | −5,8% | 3,3 | 1,77 → 1,69 | +26% | 0,15 | +50% · −6,5% | **+283% · −35,0%** |
> | 70 | ADX + 1ª vela 80 + Pullback + Tendência ⚠️ | +36% | −6,4% | 3,6 | 1,59 → 1,74 | +27% | 0,05 | +57% · −10,0% | **+234% · −43,3%** |
> | 71 | ADX + 1ª vela 80 + Pullback + Bollinger ⚠️ | +31% | −4,5% | 4,0 | 1,39 → 2,00 | +21% | 0,10 | +52% · −8,4% | **+217% · −36,2%** |
> | 72 | IFR + MACD + Pullback | +33% | −5,3% | 3,8 | 1,62 → 1,63 | +25% | 0,02 | +47% · −6,4% | **+134% · −19,9%** |
> | 73 | ADX + IFR + Quinta + Bollinger ⚠️ | +31% | −4,7% | 3,8 | 1,37 → 2,06 | +20% | 0,17 | +53% · −8,0% | **+221% · −35,2%** |
> | 74 | IFR + MACD + Pullback + Bollinger + Tendência | +34% | −6,9% | 3,1 | 1,88 → 1,67 | +25% | 0,20 | +54% · −8,1% | **+318% · −40,4%** |
> | 75 | 1ª vela 80 + Bollinger + Tendência ⚠️ | +35% | −6,6% | 3,3 | 1,65 → 1,72 | +28% | 0,23 | +58% · −8,4% | **+184% · −27,0%** |
> | 76 | Pullback + Bollinger + Tendência | +33% | −5,8% | 3,5 | 2,19 → 1,50 | +19% | 0,11 | +53% · −7,5% | **+161% · −24,6%** |
> | 77 | ADX + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +32% | −5,4% | 3,5 | 1,49 → 1,89 | +26% | 0,13 | +53% · −8,6% | **+294% · −44,4%** |
> | 78 | IFR + Quinta + Pullback + Bollinger + Onda ⚠️ | +28% | −4,1% | 3,8 | 1,42 → 1,89 | +23% | 0,01 | +43% · −4,2% | **+224% · −25,9%** |
> | 79 | ADX + IFR + Bollinger + Tendência | +39% | −8,2% | 3,2 | 1,58 → 1,86 | +28% | 0,35 | +68% · −12,0% | **+312% · −45,4%** |
> | 80 | IFR + MACD + 1ª vela 80 + Pullback ⚠️ | +33% | −6,1% | 3,3 | 1,56 → 1,82 | +26% | 0,03 | +48% · −4,6% | **+195% · −22,4%** |
> | 81 | ADX + IFR + 1ª vela 80 + Bollinger ⚠️ | +35% | −4,9% | 4,5 | 1,20 → 2,13 | +23% | 0,25 | +62% · −9,3% | **+276% · −39,0%** |
> | 82 | ADX + MACD + Quinta + Pullback + Bollinger ⚠️ | +28% | −4,3% | 3,4 | 1,51 → 1,86 | +19% | 0,08 | +44% · −7,1% | **+218% · −39,1%** |
> | 83 | ADX + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | +34% | −5,4% | 3,9 | 1,36 → 1,93 | +23% | 0,08 | +53% · −7,3% | **+286% · −40,1%** |
> | 84 | IFR + Quinta + Tendência ⚠️ | +35% | −7,0% | 3,2 | 1,88 → 1,58 | +23% | 0,07 | +52% · −8,5% | **+152% · −27,0%** |
> | 85 | ADX + IFR + Quinta + Tendência ⚠️ | +36% | −7,2% | 3,3 | 1,57 → 1,76 | +26% | 0,15 | +58% · −10,2% | **+235% · −42,6%** |
> | 86 | IFR + MACD + Quinta + Pullback + Tendência ⚠️ | +32% | −6,1% | 3,2 | 1,87 → 1,57 | +23% | 0,07 | +46% · −6,6% | **+238% · −35,3%** |
> | 87 | MACD + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +30% | −5,1% | 3,4 | 1,74 → 1,58 | +25% | −0,01 | +42% · −5,8% | **+208% · −31,7%** |
> | 88 | MACD + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +26% | −4,8% | 2,8 | 1,71 → 1,88 | +23% | 0,00 | +39% · −3,6% | **+190% · −23,0%** |
> | 89 | ADX + Quinta + Pullback + Bollinger ⚠️ | +27% | −4,9% | 2,9 | 1,67 → 1,86 | +18% | 0,08 | +44% · −7,5% | **+168% · −32,4%** |
> | 90 | ADX + IFR + 1ª vela 80 + Tendência ⚠️ | +40% | −8,0% | 3,4 | 1,42 → 1,86 | +30% | 0,21 | +66% · −11,3% | **+288% · −43,7%** |

> [!example]- Combinações 91 a 120 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 91 | MACD + Quinta + Pullback + Bollinger + Tendência ⚠️ | +29% | −5,2% | 3,1 | 1,95 → 1,54 | +22% | 0,09 | +43% · −5,8% | **+223% · −32,6%** |
> | 92 | IFR + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +31% | −5,0% | 3,7 | 1,29 → 1,98 | +26% | 0,09 | +49% · −4,8% | **+284% · −28,7%** |
> | 93 | IFR + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +36% | −7,4% | 3,1 | 1,56 → 1,77 | +30% | 0,31 | +57% · −8,6% | **+346% · −42,2%** |
> | 94 | IFR | +43% | −7,5% | 4,0 | 1,40 → 1,73 | +28% | — | +67% · −11,2% | **+67% · −11,2%** |
> | 95 | 1ª vela 80 + Quinta + Tendência ⚠️ | +32% | −5,4% | 3,5 | 1,60 → 1,57 | +25% | −0,13 | +45% · −7,8% | **+126% · −25,2%** |
> | 96 | ADX + IFR + Bollinger | +36% | −5,8% | 4,0 | 1,21 → 2,02 | +21% | 0,34 | +66% · −11,3% | **+206% · −34,5%** |
> | 97 | ADX + IFR + MACD + Pullback + Tendência | +37% | −8,0% | 3,0 | 1,60 → 1,70 | +27% | 0,19 | +58% · −10,0% | **+314% · −50,5%** |
> | 98 | ADX + IFR + MACD + Pullback | +35% | −5,9% | 3,7 | 1,38 → 1,81 | +22% | 0,09 | +54% · −8,3% | **+216% · −36,0%** |
> | 99 | ADX + IFR + 1ª vela 80 + Quinta ⚠️ | +32% | −4,4% | 4,5 | 1,15 → 2,03 | +21% | 0,02 | +52% · −7,7% | **+203% · −34,4%** |
> | 100 | ADX + 1ª vela 80 + Quinta + Pullback ⚠️ | +28% | −4,1% | 3,7 | 1,33 → 1,84 | +19% | −0,07 | +43% · −6,8% | **+153% · −31,6%** |
> | 101 | IFR + 1ª vela 80 ⚠️ | +37% | −6,4% | 3,8 | 1,26 → 1,93 | +28% | 0,05 | +58% · −6,5% | **+114% · −14,1%** |
> | 102 | IFR + Pullback + Bollinger + Tendência + Onda | +34% | −7,0% | 3,1 | 1,54 → 1,72 | +29% | 0,17 | +54% · −8,0% | **+316% · −40,6%** |
> | 103 | ADX + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +31% | −5,3% | 3,3 | 1,33 → 1,94 | +22% | 0,13 | +50% · −8,2% | **+273% · −42,6%** |
> | 104 | IFR + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +34% | −6,6% | 3,2 | 1,53 → 1,69 | +29% | 0,11 | +49% · −7,1% | **+262% · −37,2%** |
> | 105 | IFR + MACD + Quinta + Bollinger + Tendência ⚠️ | +32% | −6,8% | 2,9 | 1,67 → 1,67 | +26% | 0,20 | +50% · −7,9% | **+280% · −40,0%** |
> | 106 | Bollinger | +26% | −3,6% | 3,5 | 1,37 → 1,78 | +18% | — | +52% · −6,9% | **+52% · −6,9%** |
> | 107 | ADX + MACD + Pullback + Bollinger + Tendência | +34% | −7,2% | 2,9 | 1,62 → 1,70 | +26% | 0,21 | +55% · −9,5% | **+307% · −50,4%** |
> | 108 | Quinta + Bollinger + Tendência ⚠️ | +30% | −5,6% | 3,0 | 1,97 → 1,52 | +21% | 0,09 | +47% · −7,3% | **+136% · −24,1%** |
> | 109 | ADX + 1ª vela 80 + Bollinger + Tendência ⚠️ | +36% | −7,3% | 3,2 | 1,39 → 1,86 | +28% | 0,27 | +63% · −11,0% | **+276% · −43,8%** |
> | 110 | MACD + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +30% | −5,8% | 3,0 | 1,54 → 1,68 | +25% | 0,14 | +46% · −6,4% | **+247% · −34,6%** |
> | 111 | ADX + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +35% | −6,9% | 3,2 | 1,47 → 1,71 | +27% | 0,12 | +54% · −8,7% | **+282% · −47,8%** |
> | 112 | ADX + Pullback + Bollinger | +30% | −5,8% | 3,0 | 1,49 → 1,81 | +19% | 0,14 | +53% · −9,9% | **+155% · −31,7%** |
> | 113 | IFR + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +30% | −4,3% | 3,9 | 1,24 → 1,86 | +24% | −0,06 | +42% · −4,2% | **+206% · −22,7%** |
> | 114 | IFR + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +36% | −6,8% | 3,4 | 1,41 → 1,72 | +31% | 0,11 | +53% · −7,2% | **+292% · −37,8%** |
> | 115 | 1ª vela 80 + Pullback ⚠️ | +29% | −4,3% | 3,7 | 1,49 → 1,54 | +24% | −0,28 | +40% · −8,7% | **+71% · −17,9%** |
> | 116 | ADX + Quinta + Bollinger + Tendência ⚠️ | +32% | −6,8% | 2,8 | 1,57 → 1,74 | +25% | 0,19 | +54% · −9,9% | **+223% · −43,2%** |
> | 117 | ADX + MACD + Quinta + Pullback + Tendência ⚠️ | +32% | −6,3% | 3,0 | 1,61 → 1,60 | +24% | 0,08 | +47% · −9,4% | **+230% · −48,8%** |
> | 118 | ADX + IFR + MACD + Quinta + Bollinger ⚠️ | +31% | −5,1% | 3,5 | 1,23 → 1,93 | +21% | 0,18 | +51% · −8,0% | **+271% · −41,8%** |
> | 119 | IFR + Pullback + Bollinger + Onda | +31% | −5,4% | 3,4 | 1,31 → 1,85 | +25% | 0,09 | +49% · −5,6% | **+209% · −25,9%** |
> | 120 | IFR + Quinta + Pullback + Tendência + Onda ⚠️ | +33% | −6,2% | 3,2 | 1,51 → 1,61 | +28% | 0,04 | +46% · −6,6% | **+235% · −35,5%** |

> [!example]- Combinações 121 a 150 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 121 | ADX + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | +34% | −5,7% | 3,7 | 1,14 → 1,99 | +24% | 0,28 | +57% · −8,9% | **+330% · −45,1%** |
> | 122 | ADX + Quinta + Pullback + Tendência ⚠️ | +32% | −7,1% | 2,7 | 1,80 → 1,59 | +21% | 0,05 | +49% · −10,8% | **+185% · −44,7%** |
> | 123 | Quinta + Pullback + Tendência ⚠️ | +30% | −4,9% | 3,4 | 2,19 → 1,26 | +17% | −0,03 | +40% · −7,0% | **+107% · −23,8%** |
> | 124 | IFR + MACD + Pullback + Tendência | +36% | −8,1% | 2,9 | 1,78 → 1,53 | +25% | 0,18 | +53% · −8,6% | **+222% · −35,3%** |
> | 125 | MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +34% | −6,8% | 3,1 | 1,64 → 1,53 | +27% | 0,09 | +48% · −8,0% | **+194% · −32,8%** |
> | 126 | MACD + Pullback + Bollinger | +27% | −5,4% | 2,7 | 1,70 → 1,62 | +23% | 0,07 | +42% · −4,5% | **+118% · −16,1%** |
> | 127 | 1ª vela 80 + Quinta + Bollinger ⚠️ | +25% | −3,7% | 3,2 | 1,26 → 1,94 | +15% | −0,02 | +39% · −4,1% | **+105% · −15,1%** |
> | 128 | ADX + 1ª vela 80 + Quinta + Tendência ⚠️ | +33% | −6,3% | 3,3 | 1,35 → 1,75 | +26% | 0,02 | +53% · −9,5% | **+204% · −40,1%** |
> | 129 | IFR + MACD + Quinta + Bollinger ⚠️ | +29% | −5,5% | 2,9 | 1,43 → 1,81 | +23% | 0,13 | +45% · −5,5% | **+178% · −25,6%** |
> | 130 | ADX + MACD + Pullback + Bollinger | +30% | −5,8% | 3,0 | 1,37 → 1,81 | +20% | 0,14 | +50% · −9,2% | **+203% · −38,5%** |
> | 131 | ADX + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +29% | −4,9% | 3,2 | 1,28 → 1,83 | +21% | −0,02 | +43% · −6,9% | **+199% · −38,3%** |
> | 132 | ADX + IFR + Tendência | +43% | −10,1% | 3,0 | 1,46 → 1,72 | +30% | 0,35 | +72% · −14,8% | **+219% · −45,2%** |
> | 133 | IFR + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +29% | −6,1% | 2,7 | 1,40 → 1,94 | +23% | 0,11 | +45% · −5,4% | **+248% · −29,5%** |
> | 134 | ADX + IFR + 1ª vela 80 ⚠️ | +38% | −6,0% | 4,2 | 1,03 → 1,98 | +23% | 0,17 | +64% · −10,7% | **+188% · −33,8%** |
> | 135 | ADX + IFR + Pullback + Bollinger + Onda | +33% | −6,0% | 3,3 | 1,19 → 1,93 | +23% | 0,14 | +55% · −7,7% | **+304% · −39,6%** |
> | 136 | 1ª vela 80 + Pullback + Bollinger + Tendência + Onda ⚠️ | +32% | −6,2% | 3,2 | 1,37 → 1,70 | +27% | 0,14 | +50% · −6,5% | **+277% · −35,2%** |
> | 137 | IFR + Tendência | +45% | −11,3% | 2,8 | 1,74 → 1,53 | +26% | 0,41 | +70% · −13,5% | **+141% · −27,0%** |
> | 138 | ADX + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | +32% | −5,3% | 3,7 | 1,10 → 1,91 | +22% | 0,09 | +50% · −7,6% | **+249% · −41,0%** |
> | 139 | MACD + Pullback + Bollinger + Tendência | +32% | −7,0% | 2,8 | 1,83 → 1,50 | +23% | 0,19 | +50% · −7,9% | **+208% · −32,6%** |
> | 140 | ADX + IFR + MACD + Bollinger + Tendência | +37% | −8,7% | 2,8 | 1,42 → 1,78 | +28% | 0,36 | +62% · −11,3% | **+362% · −51,2%** |
> | 141 | ADX + Pullback + Tendência | +37% | −8,8% | 2,8 | 1,68 → 1,54 | +23% | 0,12 | +60% · −16,1% | **+172% · −46,6%** |
> | 142 | ADX + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | +38% | −8,5% | 3,0 | 1,31 → 1,78 | +29% | 0,27 | +61% · −10,5% | **+334% · −49,1%** |
> | 143 | MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +29% | −6,8% | 2,3 | 1,57 → 1,82 | +24% | 0,09 | +44% · −5,2% | **+177% · −23,8%** |
> | 144 | IFR + MACD + Bollinger + Tendência | +36% | −8,9% | 2,7 | 1,57 → 1,63 | +28% | 0,39 | +59% · −10,3% | **+263% · −40,0%** |
> | 145 | IFR + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +36% | −7,5% | 3,0 | 1,27 → 1,82 | +28% | 0,24 | +57% · −8,6% | **+343% · −42,3%** |
> | 146 | ADX + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | +34% | −5,7% | 3,7 | 1,07 → 1,90 | +24% | 0,08 | +53% · −7,2% | **+276% · −37,9%** |
> | 147 | IFR + MACD + 1ª vela 80 + Tendência ⚠️ | +38% | −8,7% | 2,9 | 1,44 → 1,65 | +32% | 0,30 | +57% · −9,3% | **+246% · −37,2%** |
> | 148 | ADX + 1ª vela 80 + Pullback ⚠️ | +32% | −5,6% | 3,4 | 1,19 → 1,78 | +20% | −0,04 | +51% · −9,5% | **+141% · −30,9%** |
> | 149 | ADX + Bollinger + Tendência | +37% | −8,7% | 2,8 | 1,43 → 1,70 | +27% | 0,38 | +67% · −15,3% | **+208% · −45,6%** |
> | 150 | ADX + IFR + Pullback + Tendência + Onda | +37% | −8,1% | 3,0 | 1,33 → 1,71 | +28% | 0,17 | +58% · −10,0% | **+304% · −49,0%** |

> [!example]- Combinações 151 a 180 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 151 | IFR + Quinta + Pullback + Onda ⚠️ | +29% | −4,7% | 3,5 | 1,25 → 1,69 | +23% | −0,05 | +40% · −4,9% | **+145% · −22,7%** |
> | 152 | ADX + IFR + Quinta ⚠️ | +33% | −6,3% | 3,2 | 1,16 → 1,88 | +19% | 0,10 | +53% · −9,9% | **+145% · −29,7%** |
> | 153 | ADX + IFR + MACD + Quinta + Tendência ⚠️ | +35% | −7,9% | 2,8 | 1,40 → 1,70 | +26% | 0,19 | +54% · −9,8% | **+278% · −47,2%** |
> | 154 | IFR + 1ª vela 80 + Pullback + Onda ⚠️ | +33% | −5,6% | 3,6 | 1,14 → 1,81 | +26% | 0,04 | +48% · −5,1% | **+192% · −22,8%** |
> | 155 | ADX + 1ª vela 80 + Quinta + Bollinger ⚠️ | +28% | −4,5% | 3,4 | 1,02 → 1,99 | +19% | 0,11 | +48% · −8,8% | **+186% · −37,3%** |
> | 156 | MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +26% | −5,2% | 2,6 | 1,51 → 1,66 | +22% | −0,10 | +35% · −3,2% | **+119% · −17,1%** |
> | 157 | ADX + MACD + Quinta + Pullback ⚠️ | +28% | −5,0% | 3,0 | 1,33 → 1,66 | +19% | −0,01 | +41% · −7,6% | **+142% · −33,9%** |
> | 158 | IFR + Quinta + Bollinger + Tendência + Onda ⚠️ | +33% | −6,9% | 2,9 | 1,36 → 1,73 | +29% | 0,12 | +51% · −7,9% | **+280% · −40,1%** |
> | 159 | ADX + IFR + Quinta + Pullback + Onda ⚠️ | +31% | −5,4% | 3,3 | 1,15 → 1,81 | +21% | 0,02 | +47% · −6,6% | **+225% · −34,5%** |
> | 160 | ADX + IFR + MACD + Bollinger | +34% | −6,8% | 3,2 | 1,12 → 1,89 | +23% | 0,33 | +59% · −10,3% | **+254% · −41,3%** |
> | 161 | ADX + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +35% | −7,6% | 2,9 | 1,29 → 1,79 | +27% | 0,31 | +58% · −10,3% | **+328% · −49,6%** |
> | 162 | Quinta + Pullback + Bollinger + Tendência + Onda ⚠️ | +29% | −5,9% | 2,8 | 1,48 → 1,57 | +26% | 0,05 | +43% · −6,0% | **+220% · −32,9%** |
> | 163 | 1ª vela 80 + Tendência ⚠️ | +39% | −8,9% | 3,0 | 1,46 → 1,50 | +30% | 0,05 | +60% · −12,3% | **+116% · −24,9%** |
> | 164 | MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +34% | −7,6% | 2,7 | 1,43 → 1,64 | +26% | 0,33 | +54% · −8,4% | **+232% · −34,5%** |
> | 165 | 1ª vela 80 + Quinta + Pullback + Tendência + Onda ⚠️ | +30% | −5,6% | 3,2 | 1,33 → 1,58 | +27% | −0,02 | +42% · −6,0% | **+202% · −32,8%** |
> | 166 | ADX + MACD + Pullback + Tendência | +36% | −8,4% | 2,7 | 1,51 → 1,56 | +26% | 0,16 | +55% · −12,9% | **+215% · −50,7%** |
> | 167 | IFR + MACD + Pullback + Bollinger + Onda | +31% | −5,9% | 3,1 | 1,20 → 1,76 | +25% | 0,15 | +48% · −6,2% | **+260% · −33,7%** |
> | 168 | IFR + Pullback + Tendência + Onda | +37% | −8,2% | 2,9 | 1,42 → 1,57 | +31% | 0,16 | +54% · −8,6% | **+219% · −35,5%** |
> | 169 | IFR + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +34% | −6,7% | 3,1 | 1,23 → 1,73 | +28% | 0,04 | +49% · −7,1% | **+259% · −37,4%** |
> | 170 | IFR + MACD + Quinta + Tendência ⚠️ | +34% | −7,9% | 2,7 | 1,55 → 1,53 | +26% | 0,17 | +49% · −8,5% | **+193% · −34,8%** |
> | 171 | ADX + MACD + Quinta + Bollinger + Tendência ⚠️ | +32% | −7,0% | 2,7 | 1,40 → 1,70 | +25% | 0,21 | +52% · −9,3% | **+271% · −47,7%** |
> | 172 | IFR + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +30% | −5,4% | 3,1 | 1,04 → 1,98 | +20% | 0,04 | +46% · −4,9% | **+247% · −29,0%** |
> | 173 | Bollinger + Tendência | +36% | −9,2% | 2,5 | 1,79 → 1,46 | +23% | 0,36 | +63% · −11,8% | **+125% · −24,0%** |
> | 174 | ADX + MACD + 1ª vela 80 + Pullback ⚠️ | +32% | −6,3% | 3,0 | 1,17 → 1,78 | +22% | 0,04 | +49% · −8,9% | **+185% · −37,7%** |
> | 175 | ADX + IFR + MACD + 1ª vela 80 ⚠️ | +36% | −6,7% | 3,5 | 1,00 → 1,88 | +24% | 0,23 | +58% · −9,8% | **+233% · −40,4%** |
> | 176 | IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | +33% | −8,0% | 2,5 | 1,28 → 1,90 | +24% | 0,28 | +53% · −7,0% | **+232% · −29,5%** |
> | 177 | ADX + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | +34% | −5,8% | 3,7 | 0,89 → 1,99 | +23% | 0,22 | +58% · −8,3% | **+323% · −42,7%** |
> | 178 | MACD + Quinta + Pullback ⚠️ | +24% | −3,9% | 3,0 | 1,65 → 1,36 | +20% | −0,10 | +31% · −4,6% | **+72% · −14,9%** |
> | 179 | ADX + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +33% | −6,9% | 2,9 | 1,26 → 1,71 | +26% | 0,10 | +50% · −9,0% | **+249% · −45,8%** |
> | 180 | MACD + Quinta + Pullback + Tendência ⚠️ | +30% | −6,1% | 2,8 | 1,81 → 1,35 | +21% | 0,03 | +40% · −7,6% | **+146% · −31,4%** |

> [!example]- Combinações 181 a 210 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 181 | IFR + Quinta + Bollinger + Onda ⚠️ | +29% | −4,8% | 3,4 | 1,02 → 1,86 | +23% | 0,02 | +45% · −5,7% | **+180% · −26,2%** |
> | 182 | Pullback + Tendência | +36% | −7,6% | 3,1 | 2,03 → 1,18 | +16% | 0,03 | +52% · −12,0% | **+97% · −25,6%** |
> | 183 | ADX + 1ª vela 80 + Tendência ⚠️ | +39% | −9,0% | 2,9 | 1,24 → 1,71 | +30% | 0,17 | +65% · −13,6% | **+190% · −42,0%** |
> | 184 | ADX + IFR + MACD + Quinta ⚠️ | +32% | −6,0% | 3,2 | 1,07 → 1,79 | +21% | 0,12 | +50% · −8,7% | **+186% · −36,9%** |
> | 185 | ADX + IFR + Quinta + Bollinger + Onda ⚠️ | +31% | −5,5% | 3,3 | 0,96 → 1,93 | +22% | 0,11 | +51% · −7,5% | **+268% · −39,2%** |
> | 186 | IFR + MACD + Quinta + Pullback + Onda ⚠️ | +29% | −5,1% | 3,2 | 1,16 → 1,65 | +24% | 0,01 | +40% · −4,8% | **+188% · −28,1%** |
> | 187 | MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +31% | −6,7% | 2,8 | 1,40 → 1,53 | +26% | 0,06 | +44% · −7,0% | **+167% · −29,5%** |
> | 188 | ADX + Pullback + Bollinger + Tendência + Onda | +34% | −7,8% | 2,7 | 1,30 → 1,69 | +27% | 0,19 | +55% · −9,4% | **+298% · −47,8%** |
> | 189 | MACD + Quinta + Bollinger + Tendência ⚠️ | +30% | −6,9% | 2,5 | 1,58 → 1,50 | +25% | 0,18 | +45% · −7,6% | **+179% · −32,1%** |
> | 190 | ADX + IFR + Bollinger + Tendência + Onda | +37% | −8,8% | 2,8 | 1,19 → 1,80 | +28% | 0,29 | +63% · −11,3% | **+355% · −51,6%** |
> | 191 | ADX + IFR | +41% | −8,5% | 3,3 | 1,00 → 1,83 | +20% | 0,32 | +70% · −14,3% | **+133% · −29,5%** |
> | 192 | 1ª vela 80 + Quinta + Bollinger + Tendência + Onda ⚠️ | +30% | −5,9% | 3,0 | 1,17 → 1,71 | +21% | 0,07 | +47% · −6,4% | **+245% · −34,7%** |
> | 193 | IFR + MACD + Bollinger | +33% | −7,8% | 2,6 | 1,28 → 1,75 | +26% | 0,34 | +54% · −7,9% | **+165% · −25,4%** |
> | 194 | ADX + IFR + MACD + Tendência | +40% | −10,3% | 2,6 | 1,31 → 1,67 | +29% | 0,36 | +64% · −12,7% | **+261% · −49,8%** |
> | 195 | IFR + MACD + 1ª vela 80 + Quinta ⚠️ | +30% | −6,8% | 2,6 | 1,23 → 1,80 | +24% | 0,03 | +43% · −5,2% | **+166% · −23,5%** |
> | 196 | ADX + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +29% | −5,5% | 2,9 | 1,02 → 1,93 | +20% | 0,14 | +47% · −8,5% | **+236% · −43,4%** |
> | 197 | ADX + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +35% | −7,5% | 3,0 | 1,18 → 1,69 | +28% | 0,12 | +54% · −8,9% | **+270% · −46,0%** |
> | 198 | ADX + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | +38% | −8,6% | 3,0 | 1,09 → 1,80 | +29% | 0,22 | +61% · −10,5% | **+323% · −49,4%** |
> | 199 | ADX + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | +32% | −5,2% | 3,7 | 0,85 → 1,90 | +23% | 0,03 | +50% · −7,7% | **+242% · −37,5%** |
> | 200 | IFR + Bollinger + Tendência + Onda | +37% | −9,0% | 2,6 | 1,27 → 1,69 | +32% | 0,29 | +59% · −10,3% | **+263% · −40,1%** |
> | 201 | ADX + IFR + Pullback + Onda | +35% | −7,1% | 3,1 | 1,06 → 1,78 | +22% | 0,09 | +54% · −8,6% | **+210% · −34,5%** |
> | 202 | ADX + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +31% | −5,7% | 3,1 | 0,98 → 1,88 | +22% | 0,13 | +50% · −7,6% | **+264% · −39,0%** |
> | 203 | Pullback + Bollinger + Tendência + Onda | +32% | −7,6% | 2,5 | 1,38 → 1,53 | +29% | 0,17 | +50% · −7,7% | **+206% · −32,8%** |
> | 204 | IFR + MACD + Tendência | +40% | −11,1% | 2,4 | 1,44 → 1,48 | +30% | 0,45 | +60% · −11,8% | **+179% · −34,8%** |
> | 205 | ADX + IFR + Quinta + Tendência + Onda ⚠️ | +35% | −8,0% | 2,8 | 1,16 → 1,72 | +27% | 0,11 | +55% · −9,9% | **+271% · −47,4%** |
> | 206 | 1ª vela 80 + Quinta + Pullback + Bollinger + Onda ⚠️ | +26% | −5,0% | 2,7 | 1,14 → 1,82 | +19% | −0,01 | +39% · −4,0% | **+188% · −23,0%** |
> | 207 | IFR + 1ª vela 80 + Tendência + Onda ⚠️ | +38% | −8,8% | 2,9 | 1,15 → 1,70 | +30% | 0,22 | +58% · −9,3% | **+242% · −37,3%** |
> | 208 | IFR + Pullback + Onda | +33% | −6,6% | 3,1 | 1,13 → 1,63 | +26% | 0,06 | +48% · −7,3% | **+134% · −23,4%** |
> | 209 | 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +34% | −7,2% | 2,9 | 1,24 → 1,54 | +29% | 0,11 | +49% · −7,6% | **+188% · −32,4%** |
> | 210 | ADX + MACD + Bollinger + Tendência | +35% | −9,2% | 2,5 | 1,29 → 1,66 | +28% | 0,38 | +60% · −12,3% | **+254% · −49,9%** |

> [!example]- Combinações 211 a 240 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 211 | IFR + MACD + Pullback + Tendência + Onda | +35% | −8,7% | 2,6 | 1,32 → 1,55 | +30% | 0,21 | +51% · −8,6% | **+263% · −42,4%** |
> | 212 | IFR + MACD + Quinta ⚠️ | +30% | −6,2% | 2,8 | 1,22 → 1,61 | +23% | 0,05 | +42% · −5,8% | **+111% · −19,2%** |
> | 213 | ADX + Quinta + Tendência ⚠️ | +34% | −8,9% | 2,4 | 1,40 → 1,55 | +25% | 0,10 | +54% · −14,5% | **+147% · −43,4%** |
> | 214 | ADX + Quinta + Pullback ⚠️ | +27% | −6,4% | 2,2 | 1,43 → 1,55 | +16% | 0,03 | +41% · −9,7% | **+102% · −30,6%** |
> | 215 | ADX + IFR + MACD + Pullback + Onda | +34% | −7,0% | 3,0 | 1,02 → 1,75 | +23% | 0,13 | +52% · −8,1% | **+254% · −41,4%** |
> | 216 | IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | +33% | −7,0% | 2,9 | 0,93 → 1,94 | +21% | 0,21 | +53% · −6,4% | **+232% · −28,2%** |
> | 217 | ADX + 1ª vela 80 + Bollinger ⚠️ | +32% | −6,4% | 3,0 | 0,86 → 1,94 | +19% | 0,30 | +59% · −12,1% | **+173% · −36,7%** |
> | 218 | ADX + Quinta + Pullback + Bollinger + Onda ⚠️ | +28% | −5,3% | 2,8 | 1,07 → 1,78 | +20% | 0,05 | +44% · −6,9% | **+213% · −35,3%** |
> | 219 | ADX + Quinta + Pullback + Tendência + Onda ⚠️ | +32% | −7,2% | 2,6 | 1,26 → 1,58 | +25% | 0,05 | +48% · −8,3% | **+221% · −46,5%** |
> | 220 | IFR + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +32% | −7,0% | 2,8 | 1,09 → 1,75 | +26% | 0,12 | +47% · −5,3% | **+239% · −30,7%** |
> | 221 | ADX + MACD + 1ª vela 80 + Tendência ⚠️ | +37% | −9,0% | 2,7 | 1,17 → 1,67 | +29% | 0,26 | +59% · −11,5% | **+233% · −46,9%** |
> | 222 | ADX + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +35% | −7,8% | 2,8 | 1,03 → 1,79 | +24% | 0,25 | +58% · −10,0% | **+319% · −47,9%** |
> | 223 | MACD + Pullback + Tendência | +34% | −8,7% | 2,5 | 1,69 → 1,30 | +23% | 0,15 | +48% · −11,0% | **+134% · −32,6%** |
> | 224 | IFR + Quinta + Tendência + Onda ⚠️ | +34% | −8,1% | 2,6 | 1,23 → 1,58 | +30% | 0,06 | +50% · −8,5% | **+192% · −35,0%** |
> | 225 | ADX + IFR + Bollinger + Onda | +35% | −7,2% | 3,0 | 0,85 → 1,90 | +23% | 0,24 | +60% · −9,8% | **+251% · −39,2%** |
> | 226 | MACD + 1ª vela 80 + Pullback ⚠️ | +29% | −7,9% | 2,1 | 1,36 → 1,59 | +25% | −0,03 | +41% · −4,9% | **+109% · −17,4%** |
> | 227 | Quinta + Pullback ⚠️ | +21% | −2,7% | 3,1 | 2,18 → 0,85 | +14% | −0,02 | +26% · −4,2% | **+39% · −9,3%** |
> | 228 | ADX + MACD + Pullback | +32% | −7,1% | 2,7 | 1,18 → 1,61 | +20% | 0,01 | +49% · −10,9% | **+131% · −36,3%** |
> | 229 | ADX + MACD + Quinta + Tendência ⚠️ | +33% | −8,2% | 2,5 | 1,27 → 1,56 | +26% | 0,15 | +51% · −11,8% | **+187% · −47,8%** |
> | 230 | ADX + IFR + 1ª vela 80 + Onda ⚠️ | +36% | −6,8% | 3,4 | 0,76 → 1,87 | +24% | 0,18 | +58% · −9,7% | **+227% · −39,3%** |
> | 231 | MACD + Pullback + Bollinger + Tendência + Onda | +32% | −7,8% | 2,4 | 1,29 → 1,53 | +29% | 0,22 | +48% · −7,8% | **+254% · −40,0%** |
> | 232 | ADX + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +29% | −5,2% | 3,1 | 0,93 → 1,75 | +21% | −0,02 | +43% · −6,5% | **+191% · −34,6%** |
> | 233 | MACD + Bollinger + Tendência | +34% | −9,7% | 2,2 | 1,45 → 1,45 | +27% | 0,44 | +55% · −10,7% | **+166% · −32,1%** |
> | 234 | IFR + Bollinger + Onda | +33% | −6,8% | 3,0 | 0,89 → 1,82 | +24% | 0,20 | +55% · −7,9% | **+167% · −25,4%** |
> | 235 | ADX + Quinta + Bollinger + Tendência + Onda ⚠️ | +32% | −7,3% | 2,6 | 1,10 → 1,71 | +26% | 0,13 | +52% · −9,1% | **+265% · −45,0%** |
> | 236 | ADX + IFR + MACD | +37% | −8,4% | 2,9 | 0,95 → 1,75 | +22% | 0,29 | +61% · −12,0% | **+172% · −36,2%** |
> | 237 | MACD + 1ª vela 80 + Tendência ⚠️ | +36% | −9,4% | 2,5 | 1,28 → 1,48 | +29% | 0,31 | +53% · −10,3% | **+154% · −30,7%** |
> | 238 | 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +34% | −7,8% | 2,7 | 1,08 → 1,68 | +22% | 0,26 | +54% · −8,4% | **+229% · −34,7%** |
> | 239 | MACD + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +33% | −7,7% | 2,6 | 1,19 → 1,54 | +27% | 0,17 | +47% · −7,1% | **+233% · −37,2%** |
> | 240 | IFR + MACD + Pullback + Onda | +32% | −6,8% | 2,9 | 1,06 → 1,61 | +26% | 0,13 | +46% · −6,3% | **+174% · −28,1%** |

> [!example]- Combinações 241 a 270 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 241 | Quinta + Pullback + Tendência + Onda ⚠️ | +30% | −6,9% | 2,5 | 1,34 → 1,37 | +25% | 0,01 | +41% · −6,4% | **+143% · −27,2%** |
> | 242 | IFR + 1ª vela 80 + Quinta + Onda ⚠️ | +30% | −5,9% | 3,0 | 0,87 → 1,82 | +21% | −0,05 | +44% · −5,2% | **+165% · −23,3%** |
> | 243 | ADX + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +33% | −7,0% | 2,9 | 0,99 → 1,70 | +24% | 0,05 | +51% · −8,6% | **+240% · −43,5%** |
> | 244 | Quinta + Tendência ⚠️ | +31% | −7,4% | 2,5 | 1,77 → 1,20 | +19% | −0,10 | +44% · −9,8% | **+78% · −21,7%** |
> | 245 | ADX + Tendência | +43% | −12,3% | 2,4 | 1,26 → 1,50 | +29% | 0,31 | +72% · −24,1% | **+135% · −45,8%** |
> | 246 | Quinta + Pullback + Bollinger + Onda ⚠️ | +25% | −4,6% | 2,6 | 1,15 → 1,61 | +22% | −0,02 | +36% · −4,4% | **+129% · −20,0%** |
> | 247 | ADX + IFR + Tendência + Onda | +40% | −10,4% | 2,6 | 1,08 → 1,69 | +30% | 0,27 | +64% · −12,7% | **+254% · −48,2%** |
> | 248 | IFR + MACD + Bollinger + Tendência + Onda | +35% | −9,3% | 2,4 | 1,17 → 1,64 | +30% | 0,34 | +55% · −9,9% | **+310% · −46,5%** |
> | 249 | MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +26% | −7,0% | 1,9 | 1,16 → 1,80 | +17% | 0,09 | +40% · −5,6% | **+148% · −25,0%** |
> | 250 | ADX + MACD + 1ª vela 80 + Bollinger ⚠️ | +32% | −7,1% | 2,7 | 0,90 → 1,88 | +20% | 0,30 | +54% · −10,9% | **+221% · −42,8%** |
> | 251 | IFR + MACD + 1ª vela 80 ⚠️ | +35% | −9,4% | 2,3 | 1,10 → 1,74 | +26% | 0,25 | +52% · −7,3% | **+153% · −23,5%** |
> | 252 | IFR + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +37% | −9,2% | 2,6 | 1,09 → 1,65 | +28% | 0,30 | +54% · −9,1% | **+285% · −44,0%** |
> | 253 | ADX + MACD + Quinta + Bollinger ⚠️ | +28% | −6,1% | 2,5 | 0,99 → 1,80 | +19% | 0,16 | +46% · −9,6% | **+173% · −39,3%** |
> | 254 | 1ª vela 80 + Bollinger ⚠️ | +29% | −7,1% | 2,2 | 1,03 → 1,86 | +14% | 0,29 | +50% · −7,5% | **+96% · −16,3%** |
> | 255 | ADX + Pullback + Tendência + Onda | +36% | −9,3% | 2,4 | 1,18 → 1,55 | +27% | 0,16 | +55% · −11,6% | **+206% · −49,2%** |
> | 256 | ADX + Quinta + Bollinger ⚠️ | +27% | −5,9% | 2,4 | 1,01 → 1,81 | +17% | 0,18 | +48% · −10,4% | **+130% · −32,8%** |
> | 257 | ADX + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +29% | −5,4% | 3,0 | 0,73 → 1,89 | +17% | 0,08 | +47% · −7,6% | **+231% · −41,0%** |
> | 258 | ADX + IFR + Quinta + Onda ⚠️ | +32% | −6,5% | 3,0 | 0,80 → 1,79 | +21% | 0,03 | +50% · −8,6% | **+182% · −34,0%** |
> | 259 | MACD + Quinta + Pullback + Tendência + Onda ⚠️ | +30% | −7,1% | 2,4 | 1,26 → 1,42 | +28% | 0,07 | +41% · −6,4% | **+184% · −35,0%** |
> | 260 | IFR + MACD + Quinta + Bollinger + Onda ⚠️ | +29% | −6,3% | 2,6 | 0,96 → 1,76 | +23% | 0,11 | +44% · −6,1% | **+226% · −33,5%** |
> | 261 | Quinta + Bollinger + Tendência + Onda ⚠️ | +30% | −7,0% | 2,4 | 1,17 → 1,55 | +24% | 0,07 | +46% · −7,6% | **+179% · −32,3%** |
> | 262 | ADX + IFR + MACD + Bollinger + Onda | +34% | −7,7% | 2,7 | 0,85 → 1,83 | +24% | 0,28 | +56% · −9,5% | **+298% · −45,6%** |
> | 263 | ADX + IFR + MACD + 1ª vela 80 + Onda ⚠️ | +35% | −7,5% | 2,9 | 0,77 → 1,82 | +23% | 0,23 | +55% · −8,7% | **+270% · −43,3%** |
> | 264 | ADX + MACD + Pullback + Bollinger + Onda | +30% | −6,8% | 2,6 | 0,95 → 1,75 | +22% | 0,16 | +49% · −7,8% | **+247% · −41,3%** |
> | 265 | ADX + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +32% | −6,5% | 2,9 | 0,86 → 1,72 | +23% | 0,11 | +48% · −7,4% | **+222% · −40,5%** |
> | 266 | 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +31% | −6,9% | 2,7 | 1,03 → 1,56 | +22% | −0,02 | +45% · −6,6% | **+164% · −29,2%** |
> | 267 | ADX + MACD + Pullback + Tendência + Onda | +35% | −8,9% | 2,4 | 1,13 → 1,56 | +27% | 0,19 | +52% · −9,9% | **+248% · −53,5%** |
> | 268 | MACD + Quinta + Pullback + Bollinger + Onda ⚠️ | +26% | −5,6% | 2,4 | 1,10 → 1,64 | +22% | 0,04 | +37% · −4,6% | **+173% · −25,3%** |
> | 269 | ADX + 1ª vela 80 + Quinta ⚠️ | +29% | −5,5% | 2,9 | 0,78 → 1,78 | +19% | −0,04 | +46% · −10,0% | **+117% · −31,8%** |
> | 270 | 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +29% | −7,0% | 2,3 | 1,03 → 1,77 | +20% | 0,10 | +44% · −5,5% | **+174% · −23,8%** |

> [!example]- Combinações 271 a 300 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 271 | ADX + Pullback + Bollinger + Onda | +30% | −6,9% | 2,5 | 0,96 → 1,74 | +21% | 0,14 | +51% · −8,9% | **+198% · −35,1%** |
> | 272 | IFR + MACD + Quinta + Tendência + Onda ⚠️ | +33% | −8,6% | 2,4 | 1,14 → 1,56 | +29% | 0,15 | +48% · −8,5% | **+232% · −42,0%** |
> | 273 | ADX + Pullback | +32% | −8,7% | 2,2 | 1,24 → 1,47 | +16% | 0,02 | +52% · −14,8% | **+92% · −31,2%** |
> | 274 | MACD + Quinta + Bollinger ⚠️ | +24% | −5,9% | 2,0 | 1,18 → 1,60 | +19% | 0,09 | +37% · −4,6% | **+96% · −16,7%** |
> | 275 | MACD + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +33% | −8,3% | 2,4 | 1,04 → 1,64 | +22% | 0,32 | +51% · −8,4% | **+277% · −41,6%** |
> | 276 | IFR + Tendência + Onda | +40% | −11,3% | 2,4 | 1,14 → 1,54 | +35% | 0,31 | +60% · −11,8% | **+178% · −34,9%** |
> | 277 | ADX + IFR + MACD + Tendência + Onda | +38% | −10,4% | 2,4 | 1,03 → 1,66 | +29% | 0,31 | +60% · −11,8% | **+293% · −53,1%** |
> | 278 | MACD + Pullback | +28% | −6,7% | 2,3 | 1,44 → 1,26 | +23% | −0,15 | +37% · −7,6% | **+63% · −15,6%** |
> | 279 | MACD + Quinta + Tendência ⚠️ | +31% | −8,5% | 2,2 | 1,42 → 1,30 | +25% | 0,10 | +43% · −9,7% | **+113% · −29,2%** |
> | 280 | ADX + Bollinger + Tendência + Onda | +35% | −9,4% | 2,4 | 1,01 → 1,67 | +28% | 0,29 | +61% · −11,8% | **+248% · −47,0%** |
> | 281 | IFR + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +32% | −8,3% | 2,4 | 0,91 → 1,83 | +21% | 0,27 | +51% · −6,8% | **+282% · −35,8%** |
> | 282 | IFR + Quinta + Onda ⚠️ | +30% | −5,8% | 2,9 | 0,82 → 1,65 | +24% | −0,10 | +42% · −6,7% | **+111% · −22,0%** |
> | 283 | ADX + 1ª vela 80 + Pullback + Onda ⚠️ | +32% | −6,7% | 2,8 | 0,83 → 1,71 | +22% | 0,07 | +49% · −8,4% | **+177% · −35,1%** |
> | 284 | ADX + MACD + Tendência | +39% | −11,5% | 2,2 | 1,16 → 1,52 | +29% | 0,35 | +62% · −17,5% | **+173% · −50,0%** |
> | 285 | ADX + IFR + MACD + Quinta + Onda ⚠️ | +32% | −6,9% | 2,8 | 0,80 → 1,75 | +22% | 0,09 | +48% · −8,0% | **+223% · −41,0%** |
> | 286 | ADX + 1ª vela 80 + Tendência + Onda ⚠️ | +37% | −9,1% | 2,6 | 0,91 → 1,67 | +25% | 0,21 | +59% · −11,1% | **+224% · −45,1%** |
> | 287 | Pullback + Tendência + Onda | +34% | −9,6% | 2,2 | 1,24 → 1,32 | +26% | 0,18 | +49% · −8,8% | **+132% · −27,1%** |
> | 288 | ADX + MACD + 1ª vela 80 + Quinta ⚠️ | +29% | −6,4% | 2,6 | 0,84 → 1,78 | +20% | 0,04 | +45% · −9,3% | **+158% · −38,5%** |
> | 289 | MACD + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +29% | −7,9% | 2,1 | 1,02 → 1,74 | +20% | 0,16 | +44% · −5,7% | **+224% · −30,3%** |
> | 290 | IFR + MACD | +36% | −9,9% | 2,4 | 1,05 → 1,54 | +27% | 0,39 | +54% · −9,0% | **+101% · −19,0%** |
> | 291 | MACD + Quinta + Bollinger + Tendência + Onda ⚠️ | +30% | −7,8% | 2,2 | 1,09 → 1,54 | +24% | 0,16 | +45% · −7,8% | **+223% · −39,5%** |
> | 292 | IFR + 1ª vela 80 + Onda ⚠️ | +35% | −8,3% | 2,7 | 0,76 → 1,77 | +21% | 0,18 | +53% · −7,3% | **+152% · −23,2%** |
> | 293 | ADX + MACD + Quinta + Pullback + Onda ⚠️ | +29% | −6,2% | 2,5 | 0,91 → 1,63 | +21% | 0,02 | +42% · −6,8% | **+178% · −36,9%** |
> | 294 | MACD + Pullback + Tendência + Onda | +33% | −9,3% | 2,2 | 1,17 → 1,38 | +30% | 0,22 | +47% · −8,4% | **+171% · −34,9%** |
> | 295 | ADX + MACD + Bollinger + Tendência + Onda | +35% | −9,6% | 2,3 | 0,98 → 1,66 | +26% | 0,32 | +57% · −11,1% | **+294% · −51,4%** |
> | 296 | MACD + 1ª vela 80 + Bollinger ⚠️ | +29% | −10,3% | 1,6 | 0,99 → 1,74 | +16% | 0,34 | +47% · −8,2% | **+137% · −25,7%** |
> | 297 | MACD + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +31% | −7,6% | 2,4 | 1,00 → 1,55 | +22% | 0,10 | +44% · −7,0% | **+205% · −36,7%** |
> | 298 | IFR + MACD + Tendência + Onda | +38% | −11,1% | 2,2 | 1,06 → 1,52 | +33% | 0,37 | +55% · −11,0% | **+217% · −41,9%** |
> | 299 | ADX + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +32% | −7,1% | 2,7 | 0,67 → 1,82 | +17% | 0,27 | +52% · −8,9% | **+264% · −45,2%** |
> | 300 | ADX + 1ª vela 80 + Bollinger + Onda ⚠️ | +32% | −7,0% | 2,7 | 0,62 → 1,85 | +16% | 0,24 | +55% · −10,6% | **+215% · −42,6%** |

> [!example]- Combinações 301 a 330 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 301 | ADX + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +36% | −9,4% | 2,4 | 0,90 → 1,66 | +24% | 0,26 | +55% · −10,3% | **+265% · −49,9%** |
> | 302 | ADX + IFR + Onda | +37% | −9,0% | 2,7 | 0,70 → 1,75 | +23% | 0,19 | +61% · −11,5% | **+169% · −34,0%** |
> | 303 | IFR + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +30% | −7,5% | 2,4 | 0,86 → 1,74 | +21% | 0,06 | +43% · −5,4% | **+207% · −30,5%** |
> | 304 | MACD + Tendência | +38% | −13,4% | 1,9 | 1,28 → 1,24 | +29% | 0,56 | +55% · −15,6% | **+103% · −30,3%** |
> | 305 | IFR + MACD + Bollinger + Onda | +32% | −8,2% | 2,4 | 0,86 → 1,72 | +24% | 0,29 | +51% · −8,0% | **+211% · −33,3%** |
> | 306 | ADX + Quinta + Tendência + Onda ⚠️ | +33% | −8,7% | 2,3 | 0,97 → 1,56 | +26% | 0,06 | +51% · −10,4% | **+181% · −45,7%** |
> | 307 | Pullback + Bollinger + Onda | +27% | −6,4% | 2,3 | 1,00 → 1,55 | +23% | 0,10 | +43% · −6,2% | **+118% · −20,0%** |
> | 308 | ADX + Quinta + Pullback + Onda ⚠️ | +28% | −6,2% | 2,5 | 0,90 → 1,57 | +19% | −0,01 | +42% · −7,7% | **+137% · −31,1%** |
> | 309 | Bollinger + Tendência + Onda | +34% | −9,9% | 2,2 | 1,05 → 1,50 | +26% | 0,30 | +56% · −10,6% | **+166% · −32,2%** |
> | 310 | ADX + Bollinger | +32% | −7,9% | 2,4 | 0,79 → 1,75 | +18% | 0,46 | +63% · −16,1% | **+119% · −32,1%** |
> | 311 | ADX + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +30% | −6,2% | 2,7 | 0,62 → 1,73 | +17% | 0,06 | +44% · −7,7% | **+193% · −41,2%** |
> | 312 | Tendência | +46% | −16,1% | 2,1 | 1,58 → 1,12 | +22% | — | +70% · −23,6% | **+70% · −23,6%** |
> | 313 | 1ª vela 80 + Tendência + Onda ⚠️ | +36% | −9,7% | 2,4 | 0,93 → 1,51 | +23% | 0,24 | +54% · −9,4% | **+151% · −29,1%** |
> | 314 | ADX + MACD + Bollinger | +32% | −8,5% | 2,2 | 0,83 → 1,75 | +21% | 0,34 | +56% · −13,1% | **+161% · −38,7%** |
> | 315 | ADX + MACD + Quinta + Bollinger + Onda ⚠️ | +29% | −6,3% | 2,5 | 0,70 → 1,75 | +19% | 0,12 | +46% · −8,0% | **+216% · −42,0%** |
> | 316 | ADX + IFR + MACD + Onda | +36% | −9,0% | 2,5 | 0,72 → 1,72 | +24% | 0,24 | +56% · −10,4% | **+208% · −40,9%** |
> | 317 | 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +26% | −5,8% | 2,3 | 0,96 → 1,58 | +20% | −0,09 | +35% · −4,8% | **+116% · −21,7%** |
> | 318 | MACD + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +27% | −6,9% | 2,1 | 0,96 → 1,62 | +20% | −0,02 | +36% · −4,3% | **+158% · −25,5%** |
> | 319 | ADX + MACD + Quinta + Tendência + Onda ⚠️ | +33% | −8,9% | 2,2 | 0,95 → 1,57 | +26% | 0,13 | +49% · −9,7% | **+220% · −50,1%** |
> | 320 | Pullback | +26% | −4,6% | 2,8 | 1,87 → 0,62 | +11% | — | +32% · −9,1% | **+32% · −9,1%** |
> | 321 | MACD + Pullback + Bollinger + Onda | +28% | −7,6% | 2,0 | 0,98 → 1,59 | +23% | 0,15 | +42% · −6,0% | **+161% · −25,3%** |
> | 322 | MACD + Bollinger + Tendência + Onda | +33% | −10,1% | 2,0 | 1,00 → 1,50 | +25% | 0,37 | +52% · −10,1% | **+208% · −39,5%** |
> | 323 | ADX + 1ª vela 80 + Quinta + Onda ⚠️ | +29% | −6,2% | 2,7 | 0,56 → 1,72 | +16% | −0,02 | +45% · −9,2% | **+152% · −39,0%** |
> | 324 | IFR + MACD + Quinta + Onda ⚠️ | +30% | −7,2% | 2,4 | 0,80 → 1,61 | +24% | 0,05 | +42% · −6,2% | **+149% · −27,8%** |
> | 325 | MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +35% | −9,9% | 2,2 | 0,91 → 1,51 | +23% | 0,33 | +50% · −9,1% | **+191% · −36,7%** |
> | 326 | IFR + Onda | +36% | −9,2% | 2,6 | 0,68 → 1,60 | +27% | 0,17 | +54% · −11,1% | **+102% · −22,7%** |
> | 327 | ADX + 1ª vela 80 ⚠️ | +35% | −8,8% | 2,5 | 0,62 → 1,71 | +20% | 0,14 | +59% · −15,9% | **+107% · −32,0%** |
> | 328 | ADX + MACD + 1ª vela 80 ⚠️ | +34% | −8,9% | 2,3 | 0,71 → 1,73 | +20% | 0,21 | +54% · −12,7% | **+146% · −37,9%** |
> | 329 | ADX + Quinta + Bollinger + Onda ⚠️ | +28% | −6,3% | 2,4 | 0,66 → 1,75 | +18% | 0,07 | +47% · −8,4% | **+171% · −36,2%** |
> | 330 | Quinta + Tendência + Onda ⚠️ | +31% | −8,8% | 2,1 | 1,00 → 1,34 | +26% | −0,04 | +43% · −8,3% | **+112% · −26,6%** |

> [!example]- Combinações 331 a 360 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 331 | ADX + MACD + Pullback + Onda | +31% | −8,0% | 2,3 | 0,81 → 1,59 | +22% | 0,10 | +47% · −8,7% | **+165% · −39,3%** |
> | 332 | IFR + MACD + 1ª vela 80 + Onda ⚠️ | +34% | −9,6% | 2,2 | 0,77 → 1,71 | +21% | 0,27 | +50% · −7,0% | **+193% · −30,3%** |
> | 333 | ADX + Tendência + Onda | +38% | −11,8% | 2,2 | 0,87 → 1,52 | +30% | 0,24 | +62% · −16,3% | **+168% · −48,4%** |
> | 334 | ADX + MACD + 1ª vela 80 + Onda ⚠️ | +33% | −8,1% | 2,5 | 0,53 → 1,69 | +17% | 0,23 | +51% · −10,4% | **+180% · −42,6%** |
> | 335 | MACD + Quinta + Tendência + Onda ⚠️ | +31% | −9,2% | 2,0 | 0,96 → 1,39 | +25% | 0,11 | +43% · −8,3% | **+148% · −34,4%** |
> | 336 | MACD + 1ª vela 80 + Quinta ⚠️ | +26% | −8,3% | 1,6 | 0,90 → 1,57 | +16% | −0,06 | +35% · −5,4% | **+88% · −19,4%** |
> | 337 | ADX + MACD + Tendência + Onda | +37% | −11,4% | 2,1 | 0,87 → 1,54 | +28% | 0,30 | +57% · −13,1% | **+205% · −52,6%** |
> | 338 | 1ª vela 80 + Quinta ⚠️ | +24% | −5,2% | 2,2 | 0,86 → 1,54 | +14% | −0,35 | +32% · −5,7% | **+54% · −13,7%** |
> | 339 | MACD + Quinta + Pullback + Onda ⚠️ | +26% | −6,4% | 2,1 | 0,92 → 1,42 | +22% | −0,03 | +34% · −5,0% | **+106% · −22,9%** |
> | 340 | 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +26% | −6,5% | 2,1 | 0,71 → 1,78 | +13% | 0,01 | +40% · −5,1% | **+148% · −25,7%** |
> | 341 | MACD + Bollinger | +28% | −10,1% | 1,5 | 0,93 → 1,53 | +20% | 0,40 | +47% · −7,9% | **+86% · −16,9%** |
> | 342 | MACD + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +27% | −7,9% | 1,8 | 0,75 → 1,74 | +15% | 0,10 | +40% · −5,8% | **+194% · −33,0%** |
> | 343 | Quinta + Pullback + Onda ⚠️ | +24% | −5,5% | 2,1 | 0,91 → 1,26 | +21% | −0,08 | +31% · −5,5% | **+71% · −19,2%** |
> | 344 | MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +30% | −9,3% | 1,8 | 0,86 → 1,57 | +20% | 0,12 | +41% · −6,0% | **+146% · −25,6%** |
> | 345 | ADX + MACD + Bollinger + Onda | +31% | −8,1% | 2,3 | 0,60 → 1,71 | +19% | 0,27 | +53% · −10,3% | **+201% · −41,4%** |
> | 346 | ADX + MACD + Quinta ⚠️ | +29% | −7,5% | 2,1 | 0,76 → 1,60 | +18% | 0,03 | +43% · −11,1% | **+108% · −34,1%** |
> | 347 | ADX + Pullback + Onda | +32% | −8,6% | 2,2 | 0,78 → 1,52 | +20% | 0,08 | +49% · −10,4% | **+126% · −34,2%** |
> | 348 | 1ª vela 80 + Pullback + Onda ⚠️ | +29% | −8,6% | 1,9 | 0,84 → 1,52 | +20% | 0,06 | +41% · −6,4% | **+106% · −21,5%** |
> | 349 | Tendência + Onda | +38% | −13,7% | 1,8 | 0,88 → 1,29 | +28% | 0,35 | +56% · −13,1% | **+102% · −26,5%** |
> | 350 | ADX + 1ª vela 80 + Onda ⚠️ | +34% | −8,6% | 2,4 | 0,46 → 1,68 | +15% | 0,17 | +54% · −13,8% | **+140% · −40,7%** |
> | 351 | IFR + MACD + Onda | +34% | −10,0% | 2,2 | 0,70 → 1,56 | +25% | 0,31 | +50% · −8,8% | **+137% · −27,6%** |
> | 352 | MACD + Tendência + Onda | +36% | −12,7% | 1,8 | 0,86 → 1,35 | +27% | 0,42 | +51% · −11,6% | **+136% · −34,4%** |
> | 353 | ADX + Bollinger + Onda | +32% | −8,8% | 2,2 | 0,53 → 1,71 | +18% | 0,23 | +56% · −11,5% | **+158% · −35,5%** |
> | 354 | ADX + MACD + Quinta + Onda ⚠️ | +29% | −7,4% | 2,2 | 0,54 → 1,60 | +19% | 0,02 | +43% · −8,7% | **+141% · −37,0%** |
> | 355 | MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +30% | −10,6% | 1,6 | 0,64 → 1,70 | +14% | 0,31 | +46% · −7,8% | **+180% · −33,0%** |
> | 356 | MACD + Quinta + Bollinger + Onda ⚠️ | +26% | −7,3% | 1,8 | 0,66 → 1,60 | +16% | 0,07 | +38% · −5,3% | **+136% · −24,7%** |
> | 357 | MACD + Pullback + Onda | +29% | −9,4% | 1,7 | 0,80 → 1,36 | +24% | 0,12 | +39% · −7,1% | **+97% · −22,8%** |
> | 358 | 1ª vela 80 + Bollinger + Onda ⚠️ | +29% | −9,5% | 1,7 | 0,57 → 1,73 | +11% | 0,26 | +48% · −7,6% | **+136% · −25,6%** |
> | 359 | MACD + Quinta ⚠️ | +24% | −7,1% | 1,5 | 0,81 → 1,25 | +20% | −0,14 | +29% · −4,4% | **+47% · −9,7%** |
> | 360 | ADX + Quinta ⚠️ | +27% | −8,8% | 1,7 | 0,68 → 1,48 | +14% | 0,08 | +44% · −13,8% | **+73% · −27,5%** |

> [!example]- Combinações 361 a 381 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 361 | ADX + MACD | +34% | −11,8% | 1,8 | 0,60 → 1,54 | +19% | 0,17 | +56% · −17,7% | **+98% · −35,8%** |
> | 362 | MACD + 1ª vela 80 ⚠️ | +31% | −13,7% | 1,3 | 0,71 → 1,50 | +15% | 0,33 | +44% · −9,3% | **+79% · −19,4%** |
> | 363 | Quinta + Bollinger + Onda ⚠️ | +24% | −6,5% | 1,8 | 0,60 → 1,59 | +14% | −0,06 | +37% · −5,3% | **+97% · −17,6%** |
> | 364 | Pullback + Onda | +28% | −8,7% | 1,7 | 0,76 → 1,18 | +22% | 0,16 | +37% · −9,5% | **+63% · −19,9%** |
> | 365 | ADX + Quinta + Onda ⚠️ | +29% | −7,8% | 2,0 | 0,45 → 1,54 | +18% | −0,08 | +44% · −10,8% | **+105% · −30,6%** |
> | 366 | ADX + MACD + Onda | +33% | −10,2% | 2,0 | 0,43 → 1,56 | +19% | 0,20 | +52% · −11,9% | **+130% · −38,6%** |
> | 367 | MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +27% | −9,6% | 1,5 | 0,58 → 1,57 | +14% | 0,02 | +37% · −6,4% | **+123% · −29,6%** |
> | 368 | MACD + Bollinger + Onda | +29% | −10,6% | 1,5 | 0,53 → 1,55 | +15% | 0,31 | +45% · −7,6% | **+125% · −24,5%** |
> | 369 | 1ª vela 80 + Quinta + Onda ⚠️ | +26% | −8,5% | 1,6 | 0,49 → 1,54 | +11% | −0,14 | +36% · −6,4% | **+87% · −23,6%** |
> | 370 | 1ª vela 80 ⚠️ | +31% | −12,8% | 1,4 | 0,59 → 1,41 | +9% | — | +46% · −13,6% | **+46% · −13,6%** |
> | 371 | Quinta ⚠️ | +17% | −3,7% | 1,1 | 1,22 → 0,67 | +15% | — | +18% · −2,6% | **+18% · −2,6%** |
> | 372 | ADX + Onda | +34% | −12,1% | 1,8 | 0,32 → 1,49 | +18% | 0,06 | +56% · −16,1% | **+95% · −33,6%** |
> | 373 | MACD + 1ª vela 80 + Onda ⚠️ | +31% | −13,5% | 1,3 | 0,46 → 1,52 | +12% | 0,33 | +43% · −9,2% | **+113% · −29,5%** |
> | 374 | ADX | +37% | −15,4% | 1,6 | 0,45 → 1,40 | +12% | — | +65% · −30,8% | **+65% · −30,8%** |
> | 375 | Bollinger + Onda | +28% | −10,0% | 1,5 | 0,42 → 1,53 | +12% | 0,18 | +47% · −8,5% | **+87% · −18,0%** |
> | 376 | MACD + Quinta + Onda ⚠️ | +26% | −8,9% | 1,5 | 0,45 → 1,37 | +15% | −0,06 | +33% · −6,3% | **+78% · −23,8%** |
> | 377 | MACD | +30% | −16,7% | 1,0 | 0,52 → 1,13 | +21% | — | +40% · −10,5% | **+40% · −10,5%** |
> | 378 | 1ª vela 80 + Onda ⚠️ | +31% | −13,8% | 1,3 | 0,34 → 1,47 | +8% | 0,31 | +44% · −11,3% | **+78% · −24,2%** |
> | 379 | MACD + Onda | +30% | −14,5% | 1,2 | 0,31 → 1,31 | +13% | 0,36 | +41% · −9,8% | **+70% · −23,6%** |
> | 380 | Quinta + Onda ⚠️ | +24% | −8,6% | 1,3 | 0,30 → 1,21 | +12% | −0,38 | +30% · −8,2% | **+47% · −20,0%** |
> | 381 | Onda | +29% | −18,7% | 0,9 | 0,11 → 1,12 | +5% | — | +40% · −19,8% | **+40% · −19,8%** |

*⚠️ = tem setup com dia da semana escolhido pelo autor do vídeo (fora da recomendação). Ao ano e pior queda com 1 contrato por R\$ 10 mil (capital dividido). Correlação = média entre os setups da combinação. Retorno ÷ queda = retorno ao ano acima do CDI dividido pela pior queda (2 = rendeu por ano o dobro da pior queda). **1% dividido** = 1% de risco repartido entre os setups (0,5% cada com 2, 0,33% com 3, 0,25% com 4): o mesmo risco total em todas as linhas, a comparação mais justa entre combinações. **1% por setup** = cada setup arrisca 1% do capital total em cada operação (veja abaixo) — com mais setups, mais risco aberto ao mesmo tempo, por isso as combinações grandes rendem e caem mais.*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

![Correlação mensal entre os setups](setups/img/carteira_correlacao.png)

*Correlação do resultado mensal.*

> [!example]- Quantas vezes operaram no mesmo dia (clique para abrir)
> - **ADX** e **IFR**: 48% dos dias em que pelo menos um deles operou
> - **ADX** e **MACD**: 54% dos dias em que pelo menos um deles operou
> - **ADX** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **ADX** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **ADX** e **Pullback**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **Bollinger**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **Tendência**: 65% dos dias em que pelo menos um deles operou
> - **ADX** e **Onda**: 65% dos dias em que pelo menos um deles operou
> - **IFR** e **MACD**: 55% dos dias em que pelo menos um deles operou
> - **IFR** e **1ª vela 80**: 29% dos dias em que pelo menos um deles operou
> - **IFR** e **Quinta**: 6% dos dias em que pelo menos um deles operou
> - **IFR** e **Pullback**: 10% dos dias em que pelo menos um deles operou
> - **IFR** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **IFR** e **Tendência**: 50% dos dias em que pelo menos um deles operou
> - **IFR** e **Onda**: 44% dos dias em que pelo menos um deles operou
> - **MACD** e **1ª vela 80**: 31% dos dias em que pelo menos um deles operou
> - **MACD** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **MACD** e **Pullback**: 18% dos dias em que pelo menos um deles operou
> - **MACD** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **MACD** e **Tendência**: 67% dos dias em que pelo menos um deles operou
> - **MACD** e **Onda**: 51% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Quinta**: 13% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Pullback**: 15% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Bollinger**: 17% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Tendência**: 35% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Onda**: 36% dos dias em que pelo menos um deles operou
> - **Quinta** e **Pullback**: 7% dos dias em que pelo menos um deles operou
> - **Quinta** e **Bollinger**: 5% dos dias em que pelo menos um deles operou
> - **Quinta** e **Tendência**: 9% dos dias em que pelo menos um deles operou
> - **Quinta** e **Onda**: 8% dos dias em que pelo menos um deles operou
> - **Pullback** e **Bollinger**: 12% dos dias em que pelo menos um deles operou
> - **Pullback** e **Tendência**: 27% dos dias em que pelo menos um deles operou
> - **Pullback** e **Onda**: 22% dos dias em que pelo menos um deles operou
> - **Bollinger** e **Tendência**: 21% dos dias em que pelo menos um deles operou
> - **Bollinger** e **Onda**: 18% dos dias em que pelo menos um deles operou
> - **Tendência** e **Onda**: 65% dos dias em que pelo menos um deles operou

![Quedas da carteira](setups/img/carteira_queda.png)

## Ano a ano

*Com 1 contrato por R\$ 10 mil (capital dividido). Todos = os 9 setups juntos · Recomendada = IFR + Pullback + Bollinger · Rec. 1% = a recomendada arriscando 1% por operação.*

| Ano | ADX | IFR | MACD | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos | Recomendada | Rec. 1% | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | +2,1% | −3,6% | −2,9% | +7,7% | +4,0% | +7,5% | +4,0% | −1,7% | −3,9% | +1,5% | +2,6% | +3,6% | +1,3% | −0,7% | 1ª vela 80 |
| 2022 | +29,8% | +51,5% | +20,7% | +9,1% | +18,1% | +47,1% | +18,2% | +58,4% | +5,0% | +25,8% | +38,6% | +258,9% | +12,3% | +4,7% | Rec. 1% |
| 2023 | +12,0% | +28,3% | +25,7% | +27,7% | +15,3% | +19,7% | +22,8% | +50,3% | +26,9% | +22,2% | +23,8% | +97,7% | +13,0% | +22,3% | Rec. 1% |
| 2024 | +36,5% | +30,7% | +36,6% | +37,8% | +16,4% | +10,8% | +23,1% | +21,6% | +62,1% | +31,9% | +21,5% | +105,5% | +10,8% | −10,4% | Rec. 1% |
| 2025 | +65,9% | +55,3% | +40,1% | +46,7% | +21,9% | +21,2% | +40,2% | +32,2% | +22,7% | +46,2% | +38,7% | +279,5% | +14,2% | +34,0% | Rec. 1% |
| 2026* | +42,4% | +52,1% | +28,0% | +25,2% | +7,5% | +20,9% | +18,2% | +72,0% | +37,5% | +31,7% | +30,3% | +96,9% | +11,5% | +9,1% | Rec. 1% |
| **Acumulado no período** | **+378,7%** | **+478,7%** | **+260,9%** | **+279,8%** | **+116,1%** | **+207,5%** | **+207,9%** | **+547,0%** | **+250,4%** | **+295,9%** | **+286,6%** | **+11188,5%** | **+81,3%** | **+66,5%** | **Rec. 1%** |
| **R\$ 10.000 viraram** | **R\$ 47.866** | **R\$ 57.869** | **R\$ 36.090** | **R\$ 37.978** | **R\$ 21.613** | **R\$ 30.751** | **R\$ 30.789** | **R\$ 64.704** | **R\$ 35.038** | **R\$ 39.593** | **R\$ 38.657** | **R\$ 1.128.848** | **R\$ 18.128** | **R\$ 16.647** | |
| **Média ao ano** | **+37,3%** | **+42,7%** | **+29,7%** | **+31,0%** | **+16,9%** | **+25,5%** | **+25,6%** | **+45,9%** | **+28,9%** | **+32,1%** | **+31,5%** | **+160,3%** | **+12,8%** | **+10,9%** | |

\* ano parcial: os dados vão de 01/11/2021 a 27/10/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ADX | IFR | MACD | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos | Recomendada | Rec. 1% | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | +1,3% | −1,9% | −0,3% | +1,9% | +1,6% | +2,6% | +2,8% | −2,9% | −8,9% | +0,6% | +1,2% | +1,8% | +0,6% | −3,4% |
> | dez/2021 | +0,8% | −1,8% | −2,6% | +5,6% | +2,4% | +4,8% | +1,1% | +1,2% | +5,5% | +0,9% | +1,4% | +1,8% | +0,7% | +2,9% |
> | jan/2022 | +2,7% | +6,4% | +3,0% | +2,1% | +1,4% | +5,1% | +2,0% | −0,1% | −0,7% | +3,2% | +4,6% | +27,2% | +0,7% | +7,0% |
> | fev/2022 | −1,1% | −2,6% | −1,9% | −0,0% | +0,7% | +2,7% | +0,5% | −1,1% | +1,1% | −1,0% | +0,2% | −3,3% | +0,8% | +0,9% |
> | mar/2022 | +4,5% | +7,8% | +5,7% | −3,1% | +0,9% | +2,6% | +3,3% | +10,1% | +9,0% | +3,1% | +4,6% | +24,7% | +0,9% | +6,1% |
> | abr/2022 | −4,1% | +0,6% | +1,9% | −0,9% | +2,2% | +2,2% | +3,2% | +4,8% | −2,0% | −0,0% | +2,0% | +10,5% | +0,8% | −10,1% |
> | mai/2022 | +6,6% | +2,0% | −0,2% | +13,8% | +1,9% | +2,2% | +0,2% | −1,2% | +0,4% | +4,8% | +1,5% | +2,8% | +1,0% | +3,2% |
> | jun/2022 | −1,2% | +3,5% | +0,9% | −4,0% | +3,4% | +3,6% | +0,7% | +3,3% | +0,1% | +0,5% | +2,7% | +9,8% | +1,0% | −11,5% |
> | jul/2022 | −2,9% | +1,0% | +1,3% | −0,2% | +1,0% | +2,5% | +0,5% | −0,6% | −5,0% | +0,1% | +1,4% | +2,6% | +1,0% | +4,7% |
> | ago/2022 | +12,3% | +11,5% | +5,2% | +6,7% | +0,2% | +4,7% | +3,6% | +12,6% | +10,3% | +7,2% | +6,6% | +39,6% | +1,2% | +6,2% |
> | set/2022 | −1,7% | −1,2% | +7,2% | −1,0% | +2,9% | +2,8% | +0,3% | +8,3% | −3,0% | +1,2% | +0,6% | −3,7% | +1,1% | +0,5% |
> | out/2022 | +6,3% | +6,2% | +1,6% | −2,9% | −0,1% | +4,4% | +1,7% | +4,1% | −1,5% | +2,3% | +4,1% | +17,3% | +1,0% | +5,5% |
> | nov/2022 | −1,0% | +1,7% | −6,0% | −3,1% | +1,0% | +6,8% | +2,4% | +0,3% | +4,5% | −1,5% | +3,6% | +10,1% | +1,0% | −3,1% |
> | dez/2022 | +7,2% | +6,2% | +1,0% | +2,8% | +1,2% | −0,2% | −1,4% | +7,6% | −6,8% | +3,8% | +1,5% | +5,2% | +1,1% | −2,4% |
> | jan/2023 | −0,1% | +2,0% | +4,5% | +4,3% | +1,1% | +3,3% | +5,7% | +14,1% | +7,2% | +2,4% | +3,7% | +17,6% | +1,1% | +3,4% |
> | fev/2023 | +7,9% | +1,4% | −0,5% | +1,3% | +2,7% | −1,4% | +1,6% | +7,4% | −9,5% | +2,5% | +0,5% | −0,1% | +0,9% | −7,5% |
> | mar/2023 | −2,9% | +0,4% | +5,9% | +1,7% | +0,3% | +2,3% | +0,8% | +3,1% | −3,7% | +1,1% | +1,2% | −0,2% | +1,2% | −2,9% |
> | abr/2023 | +7,4% | +2,2% | −4,4% | −0,7% | +0,8% | +0,3% | −0,6% | −2,0% | +1,4% | +1,0% | +0,6% | −1,7% | +0,9% | +2,5% |
> | mai/2023 | +3,9% | +0,7% | +2,8% | +4,3% | +1,1% | +4,8% | +0,5% | −2,2% | +1,7% | +2,6% | +2,0% | +4,3% | +1,1% | +3,7% |
> | jun/2023 | −4,6% | +1,3% | +2,1% | +3,0% | +1,8% | +0,7% | +4,9% | +10,0% | +7,4% | +0,7% | +2,3% | +12,1% | +1,1% | +9,0% |
> | jul/2023 | +3,2% | +5,9% | +5,1% | +5,8% | +1,0% | +0,1% | +2,0% | +4,8% | −1,7% | +4,2% | +2,7% | +11,8% | +1,1% | +3,3% |
> | ago/2023 | +0,6% | +5,1% | −0,1% | −3,6% | +1,0% | +1,0% | +0,5% | +2,9% | +5,6% | +0,6% | +2,2% | +6,8% | +1,1% | −5,1% |
> | set/2023 | −1,6% | +0,1% | +0,5% | −0,8% | +1,6% | +0,9% | +3,6% | +0,4% | −3,5% | −0,0% | +1,6% | +8,1% | +1,0% | +0,7% |
> | out/2023 | +1,0% | +3,6% | +2,6% | +1,2% | +0,9% | +3,0% | +0,6% | +0,5% | +6,1% | +1,9% | +2,4% | +9,2% | +1,0% | −2,9% |
> | nov/2023 | +3,4% | +2,1% | +3,6% | +9,6% | +0,7% | +2,4% | +1,6% | +2,7% | +5,7% | +3,9% | +2,1% | +8,7% | +0,9% | +12,5% |
> | dez/2023 | −5,7% | +0,6% | +1,6% | −0,7% | +1,4% | +0,7% | −0,3% | +1,1% | +8,9% | −0,6% | +0,3% | −4,1% | +0,9% | +5,4% |
> | jan/2024 | +10,5% | −0,9% | +0,4% | +7,5% | +0,3% | +1,4% | +3,6% | +5,6% | +4,0% | +3,5% | +1,4% | +6,5% | +1,0% | −4,8% |
> | fev/2024 | +7,2% | +5,8% | +9,9% | +1,8% | +1,3% | −0,1% | +1,2% | +9,9% | +2,8% | +5,2% | +2,3% | +10,3% | +0,8% | +1,0% |
> | mar/2024 | −5,6% | +1,5% | −0,7% | +0,8% | +1,9% | +2,1% | +0,0% | +1,7% | −1,3% | −0,5% | +1,2% | +1,9% | +0,8% | −0,7% |
> | abr/2024 | +3,2% | +5,1% | −1,0% | +2,8% | +1,5% | +0,5% | +2,2% | −7,4% | +5,2% | +2,3% | +2,6% | +11,3% | +0,9% | −1,7% |
> | mai/2024 | −4,0% | −1,4% | −1,5% | +4,6% | +1,4% | −0,6% | +1,0% | −0,3% | +0,8% | −0,2% | −0,3% | −5,6% | +0,8% | −3,0% |
> | jun/2024 | −0,9% | +1,3% | +4,0% | +1,5% | +0,8% | +2,7% | +1,0% | −0,1% | +0,5% | +1,4% | +1,7% | +6,4% | +0,8% | +1,5% |
> | jul/2024 | −1,9% | +3,6% | −0,7% | +3,6% | +1,4% | +0,4% | +1,1% | −1,1% | +7,1% | +1,2% | +1,7% | +5,9% | +0,9% | +3,0% |
> | ago/2024 | +4,7% | +2,1% | +5,8% | +6,2% | +1,1% | +0,1% | +3,2% | +2,7% | +3,4% | +4,0% | +1,8% | +9,6% | +0,9% | +6,5% |
> | set/2024 | +2,2% | +2,2% | +2,2% | +0,8% | +0,7% | +6,2% | +1,9% | +4,8% | +10,5% | +1,7% | +3,4% | +17,3% | +0,8% | −3,1% |
> | out/2024 | +6,2% | +1,4% | +3,6% | −1,7% | +1,6% | −1,4% | +2,1% | −2,5% | +0,6% | +2,2% | +0,7% | +0,9% | +0,9% | −1,6% |
> | nov/2024 | +2,3% | +4,5% | +3,2% | +2,5% | +0,7% | −2,0% | +1,9% | +0,1% | +5,7% | +2,7% | +1,5% | +4,8% | +0,8% | −3,1% |
> | dez/2024 | +9,0% | +2,2% | +7,1% | +2,2% | +2,5% | +1,2% | +1,9% | +7,4% | +10,7% | +4,6% | +1,8% | +6,7% | +0,8% | −4,3% |
> | jan/2025 | +8,6% | +5,3% | +9,0% | +6,4% | +1,0% | +1,3% | +2,9% | +11,9% | +8,5% | +6,1% | +3,2% | +15,3% | +1,0% | +4,9% |
> | fev/2025 | +5,5% | +6,0% | +4,1% | +2,1% | +2,4% | +3,2% | +2,0% | +4,5% | +5,4% | +4,1% | +3,8% | +17,5% | +1,0% | −2,6% |
> | mar/2025 | +7,3% | −0,4% | +2,4% | +5,2% | +0,6% | −0,5% | +6,0% | +8,4% | +1,4% | +3,0% | +1,7% | +10,7% | +1,0% | +6,1% |
> | abr/2025 | +0,7% | +0,1% | −7,1% | +1,7% | +3,4% | +0,3% | −0,8% | −6,7% | −7,0% | −0,2% | −0,1% | −5,1% | +1,1% | +3,7% |
> | mai/2025 | +10,5% | +6,8% | +4,0% | +5,9% | +1,8% | +2,0% | +4,6% | +5,4% | +8,2% | +5,8% | +4,5% | +23,6% | +1,1% | +1,5% |
> | jun/2025 | +2,0% | +2,3% | +0,6% | +0,2% | +1,9% | +3,8% | +1,1% | −4,5% | +2,0% | +1,4% | +2,4% | +7,7% | +1,1% | +1,3% |
> | jul/2025 | +4,0% | +0,9% | +2,1% | +2,5% | +2,1% | +2,9% | +2,3% | −0,9% | −1,4% | +2,3% | +2,0% | +6,2% | +1,3% | −4,2% |
> | ago/2025 | +8,2% | +14,6% | +13,1% | +6,8% | +2,0% | −0,7% | +8,5% | +6,9% | +1,5% | +8,9% | +7,4% | +44,6% | +1,2% | +6,3% |
> | set/2025 | +3,8% | −3,5% | −3,3% | +2,9% | +0,5% | +1,6% | +1,3% | −2,4% | +2,8% | +0,1% | −0,2% | −5,3% | +1,2% | +3,4% |
> | out/2025 | +5,1% | +2,1% | +1,7% | +1,4% | +2,6% | +3,6% | +3,2% | −2,9% | −0,0% | +2,6% | +3,0% | +12,3% | +1,3% | +2,3% |
> | nov/2025 | +7,3% | +5,9% | +7,6% | +5,5% | +1,1% | −0,8% | +3,0% | +7,8% | −1,9% | +5,5% | +2,7% | +10,1% | +1,1% | +6,4% |
> | dez/2025 | −9,7% | +5,7% | +1,5% | −1,2% | +0,7% | +2,9% | +0,6% | +2,5% | +2,2% | −0,7% | +3,1% | +11,6% | +1,1% | +1,3% |
> | jan/2026 | +7,3% | +4,8% | +10,5% | +5,6% | +3,0% | −0,2% | +5,8% | +11,3% | +0,9% | +6,3% | +3,5% | +14,1% | +1,2% | +12,6% |
> | fev/2026 | −10,0% | +1,6% | +3,1% | +13,8% | −2,1% | −2,0% | +0,1% | −6,6% | +3,9% | +1,1% | −0,1% | −1,9% | +1,0% | +4,1% |
> | mar/2026 | +1,9% | +1,2% | +9,2% | −1,7% | +1,2% | +5,3% | +0,5% | +15,3% | +15,5% | +2,5% | +2,4% | +3,5% | +1,2% | −0,7% |
> | abr/2026 | +23,4% | +7,0% | +1,4% | +5,1% | +1,0% | +2,2% | +9,5% | +5,8% | +5,0% | +7,4% | +6,3% | +24,1% | +1,1% | −0,1% |
> | mai/2026 | −1,8% | +5,1% | +3,6% | −1,8% | +2,1% | +0,4% | −0,9% | −2,8% | −4,6% | +1,5% | +1,6% | +1,6% | +1,1% | −7,2% |
> | jun/2026 | −2,9% | −2,6% | −3,2% | −0,4% | +1,1% | +3,4% | −0,9% | −0,5% | −2,7% | −1,5% | −0,1% | −5,4% | +1,1% | −1,0% |
> | jul/2026 | −0,1% | +8,9% | +6,1% | +10,1% | −1,1% | +0,3% | +0,2% | +13,5% | +27,4% | +4,8% | +3,1% | +8,5% | +1,2% | +3,5% |
> | ago/2026 | +1,9% | +5,8% | +5,1% | +4,8% | −1,4% | +4,1% | +3,1% | +9,9% | +1,7% | +3,3% | +4,4% | +14,4% | +1,1% | −0,3% |
> | set/2026 | +16,4% | −0,6% | −2,3% | −3,5% | +1,1% | +6,0% | +1,2% | +4,2% | +1,0% | +2,2% | +2,2% | +3,4% | +1,1% | +5,0% |
> | out/2026 | +3,8% | +12,4% | −7,2% | −7,5% | +2,5% | −0,2% | −1,2% | +7,9% | −10,9% | +0,7% | +3,6% | +11,2% | +0,9% | −5,7% |
> | **Acumulado** | **+378,7%** | **+478,7%** | **+260,9%** | **+279,8%** | **+116,1%** | **+207,5%** | **+207,9%** | **+547,0%** | **+250,4%** | **+295,9%** | **+286,6%** | **+11188,5%** | **+81,3%** | **+66,5%** |

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = IFR + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **Todos ⚠️** = os 9 setups com 1% cada: até 9% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| Ano | ADX | IFR | MACD | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos ÷ | Todos ⚠️ | Recomendada ÷ | Recomendada | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | +2,0% | −9,3% | −2,8% | +10,2% | +4,2% | +10,2% | +6,4% | −2,9% | −3,7% | +1,1% | −2,5% | +2,2% | +3,6% | +1,3% | −0,7% | Pullback |
| 2022 | +51,0% | +108,3% | +27,8% | +7,2% | +19,1% | +70,5% | +30,1% | +94,7% | +8,2% | +42,8% | +170,1% | +68,9% | +258,9% | +12,3% | +4,7% | Recomendada |
| 2023 | +7,4% | +45,0% | +30,3% | +36,6% | +16,4% | +24,7% | +40,6% | +78,7% | +36,6% | +29,3% | +74,1% | +37,8% | +97,7% | +13,0% | +22,3% | Recomendada |
| 2024 | +71,5% | +48,1% | +51,6% | +73,1% | +19,2% | +9,6% | +56,8% | +31,5% | +97,1% | +53,9% | +348,9% | +37,8% | +105,5% | +10,8% | −10,4% | Todos ⚠️ |
| 2025 | +161,6% | +88,9% | +60,7% | +77,3% | +23,5% | +29,0% | +108,7% | +62,2% | +36,3% | +81,0% | +739,5% | +74,2% | +279,5% | +14,2% | +34,0% | Todos ⚠️ |
| 2026* | +59,0% | +65,9% | +32,3% | +32,3% | +8,8% | +20,4% | +24,4% | +89,8% | +37,5% | +41,1% | +179,1% | +36,7% | +96,9% | +11,5% | +9,1% | Todos ⚠️ |
| **Acumulado no período** | **+1081,2%** | **+1170,7%** | **+421,7%** | **+554,9%** | **+131,2%** | **+298,6%** | **+692,6%** | **+1267,6%** | **+425,8%** | **+633,9%** | **+48123,1%** | **+680,7%** | **+11188,5%** | **+81,3%** | **+66,5%** | **Todos ⚠️** |
| **R\$ 10.000 viraram** | **R\$ 118.123** | **R\$ 127.075** | **R\$ 52.174** | **R\$ 65.491** | **R\$ 23.123** | **R\$ 39.858** | **R\$ 79.258** | **R\$ 136.757** | **R\$ 52.576** | **R\$ 73.392** | **R\$ 4.822.315** | **R\$ 78.066** | **R\$ 1.128.848** | **R\$ 18.128** | **R\$ 16.647** | |
| **Média ao ano** | **+64,8%** | **+67,3%** | **+39,7%** | **+46,3%** | **+18,5%** | **+32,3%** | **+52,0%** | **+69,8%** | **+39,9%** | **+49,7%** | **+249,2%** | **+51,6%** | **+160,3%** | **+12,8%** | **+10,9%** | |

\* ano parcial: os dados vão de 01/11/2021 a 27/10/2026.

> [!example]- Mês a mês arriscando 1% por operação (clique para abrir)
> | Mês | ADX | IFR | MACD | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos ÷ | Todos ⚠️ | Recomendada ÷ | Recomendada | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | +2,1% | −4,8% | −0,3% | +2,2% | +1,5% | +3,0% | +5,1% | −3,9% | −8,4% | +0,3% | −2,0% | +1,1% | +1,8% | +0,6% | −3,4% |
> | dez/2021 | −0,0% | −4,7% | −2,5% | +7,8% | +2,6% | +7,0% | +1,2% | +1,1% | +5,1% | +0,8% | −0,5% | +1,1% | +1,8% | +0,7% | +2,9% |
> | jan/2022 | +5,7% | +13,6% | +3,8% | +3,2% | +1,6% | +8,7% | +4,8% | −0,2% | −0,7% | +5,8% | +25,3% | +9,1% | +27,2% | +0,7% | +7,0% |
> | fev/2022 | −4,6% | −6,1% | −2,7% | −0,8% | +0,7% | +4,7% | −0,1% | −2,5% | +2,0% | −2,7% | −15,8% | −0,6% | −3,3% | +0,8% | +0,9% |
> | mar/2022 | +10,4% | +15,7% | +6,7% | −5,0% | +0,9% | +3,6% | +6,3% | +16,3% | +10,8% | +5,7% | +24,7% | +8,5% | +24,7% | +0,9% | +6,1% |
> | abr/2022 | −12,3% | +0,6% | +2,1% | −2,2% | +2,7% | +3,4% | +8,2% | +8,2% | −3,4% | −1,8% | −12,3% | +4,1% | +10,5% | +0,8% | −10,1% |
> | mai/2022 | +16,7% | +2,9% | −0,4% | +17,3% | +2,0% | +3,0% | −1,0% | −2,5% | +1,3% | +7,7% | +35,1% | +1,7% | +2,8% | +1,0% | +3,2% |
> | jun/2022 | −5,5% | +6,8% | +0,8% | −6,6% | +3,9% | +4,7% | +0,2% | +4,9% | −0,2% | −0,0% | −5,7% | +4,0% | +9,8% | +1,0% | −11,5% |
> | jul/2022 | −11,1% | +0,9% | +1,9% | −1,6% | +0,9% | +4,1% | +0,3% | −1,1% | −6,9% | −1,8% | −14,1% | +1,8% | +2,6% | +1,0% | +4,7% |
> | ago/2022 | +32,9% | +23,5% | +6,5% | +10,8% | +0,1% | +7,5% | +8,0% | +22,4% | +12,6% | +14,6% | +76,7% | +13,0% | +39,6% | +1,2% | +6,2% |
> | set/2022 | −7,1% | −3,9% | +7,8% | −1,9% | +3,0% | +3,4% | −0,9% | +11,7% | −2,9% | −0,3% | −7,7% | −0,5% | −3,7% | +1,1% | +0,5% |
> | out/2022 | +14,5% | +11,0% | +1,9% | −4,0% | −0,1% | +5,7% | +2,4% | +5,3% | −0,9% | +4,8% | +16,9% | +6,5% | +17,3% | +1,0% | +5,5% |
> | nov/2022 | −5,2% | +2,2% | −4,3% | −3,0% | +1,0% | +6,5% | +3,3% | +0,4% | +3,6% | −1,7% | −13,4% | +4,1% | +10,1% | +1,0% | −3,1% |
> | dez/2022 | +17,7% | +12,3% | +1,4% | +3,3% | +1,0% | −0,4% | −3,9% | +8,9% | −5,5% | +7,4% | +29,7% | +2,6% | +5,2% | +1,1% | −2,4% |
> | jan/2023 | −2,8% | +2,8% | +4,5% | +5,1% | +1,1% | +4,4% | +12,1% | +18,3% | +7,3% | +2,3% | +4,3% | +6,5% | +17,6% | +1,1% | +3,4% |
> | fev/2023 | +20,2% | +1,8% | −0,6% | +1,4% | +2,8% | −2,6% | +2,6% | +11,1% | −10,6% | +5,1% | +22,0% | +0,6% | −0,1% | +0,9% | −7,5% |
> | mar/2023 | −11,3% | −0,6% | +6,8% | +1,8% | +0,2% | +2,9% | −0,1% | +4,6% | −4,3% | −0,6% | −10,2% | +0,8% | −0,2% | +1,2% | −2,9% |
> | abr/2023 | +20,2% | +3,3% | −5,2% | −1,3% | +0,8% | −0,1% | −3,1% | −3,5% | +1,7% | +3,5% | +11,5% | +0,2% | −1,7% | +0,9% | +2,5% |
> | mai/2023 | +8,6% | +0,5% | +3,1% | +6,8% | +1,0% | +7,3% | −0,8% | −4,6% | +1,7% | +4,3% | +14,9% | +2,4% | +4,3% | +1,1% | +3,7% |
> | jun/2023 | −13,7% | +1,6% | +2,3% | +4,7% | +2,0% | +0,3% | +12,5% | +17,7% | +10,4% | −0,6% | −8,4% | +4,8% | +12,1% | +1,1% | +9,0% |
> | jul/2023 | +5,8% | +10,5% | +6,2% | +9,2% | +1,0% | −0,5% | +4,0% | +7,7% | −2,1% | +6,7% | +29,4% | +4,6% | +11,8% | +1,1% | +3,3% |
> | ago/2023 | −0,7% | +9,0% | −0,3% | −6,8% | +1,1% | +0,9% | −0,8% | +4,4% | +6,8% | +0,5% | −3,6% | +3,1% | +6,8% | +1,1% | −5,1% |
> | set/2023 | −5,5% | −0,7% | +0,5% | −2,2% | +1,9% | +0,8% | +10,0% | +0,3% | −5,8% | −1,1% | −9,9% | +3,4% | +8,1% | +1,0% | +0,7% |
> | out/2023 | +0,7% | +6,3% | +3,5% | +1,2% | +0,9% | +5,0% | −0,2% | +0,0% | +8,1% | +2,7% | +8,4% | +3,7% | +9,2% | +1,0% | −2,9% |
> | nov/2023 | +7,3% | +3,5% | +4,4% | +15,9% | +0,8% | +4,0% | +3,1% | +4,0% | +6,8% | +6,4% | +26,6% | +3,6% | +8,7% | +0,9% | +12,5% |
> | dez/2023 | −14,2% | +0,4% | +2,2% | −2,4% | +1,7% | +0,4% | −3,1% | +2,3% | +14,6% | −2,6% | −15,8% | −0,7% | −4,1% | +0,9% | +5,4% |
> | jan/2024 | +24,2% | −2,3% | +0,3% | +14,6% | −0,0% | +1,3% | +9,7% | +9,7% | +5,3% | +7,1% | +33,4% | +2,9% | +6,5% | +1,0% | −4,8% |
> | fev/2024 | +16,0% | +9,8% | +13,8% | +2,9% | +1,7% | −1,0% | +3,0% | +18,8% | +3,8% | +8,9% | +44,2% | +4,0% | +10,3% | +0,8% | +1,0% |
> | mar/2024 | −14,1% | +2,0% | −1,7% | +0,6% | +2,7% | +3,8% | −2,2% | +2,9% | −2,7% | −2,2% | −14,3% | +1,2% | +1,9% | +0,8% | −0,7% |
> | abr/2024 | +6,2% | +8,5% | −1,4% | +3,8% | +1,7% | +0,4% | +4,3% | −13,6% | +7,0% | +3,9% | +14,7% | +4,4% | +11,3% | +0,9% | −1,7% |
> | mai/2024 | −10,5% | −3,2% | −2,1% | +8,9% | +1,7% | −2,2% | +1,3% | −1,1% | +1,2% | −1,2% | −10,1% | −1,3% | −5,6% | +0,8% | −3,0% |
> | jun/2024 | −3,9% | +1,7% | +6,0% | +3,1% | +0,7% | +4,3% | +1,9% | −0,9% | −0,4% | +1,7% | +4,2% | +2,7% | +6,4% | +0,8% | +1,5% |
> | jul/2024 | −6,0% | +5,8% | −1,0% | +8,6% | +1,8% | +0,0% | +2,0% | −2,5% | +14,0% | +1,8% | +3,6% | +2,6% | +5,9% | +0,9% | +3,0% |
> | ago/2024 | +9,3% | +2,8% | +8,3% | +11,5% | +1,6% | −0,8% | +9,5% | +5,4% | +5,0% | +6,8% | +30,3% | +3,8% | +9,6% | +0,9% | +6,5% |
> | set/2024 | +3,4% | +3,1% | +3,3% | +1,4% | +0,7% | +11,4% | +4,1% | +8,8% | +15,9% | +2,5% | +6,6% | +6,2% | +17,3% | +0,8% | −3,1% |
> | out/2024 | +13,3% | +1,7% | +5,0% | −4,2% | +1,8% | −3,8% | +5,1% | −6,1% | +1,1% | +3,4% | +12,9% | +1,0% | +0,9% | +0,9% | −1,6% |
> | nov/2024 | +3,8% | +7,4% | +4,9% | +3,3% | +0,7% | −4,6% | +4,1% | −0,7% | +8,8% | +4,1% | +14,3% | +2,3% | +4,8% | +0,8% | −3,1% |
> | dez/2024 | +21,3% | +3,5% | +8,2% | +3,1% | +2,7% | +1,2% | +3,7% | +11,1% | +12,6% | +7,7% | +36,6% | +2,8% | +6,7% | +0,8% | −4,3% |
> | jan/2025 | +19,5% | +9,1% | +12,1% | +10,2% | +1,0% | +1,4% | +6,8% | +21,4% | +11,4% | +10,6% | +52,7% | +5,9% | +15,3% | +1,0% | +4,9% |
> | fev/2025 | +11,8% | +10,1% | +5,0% | +2,9% | +2,9% | +5,0% | +3,9% | +7,2% | +7,1% | +6,7% | +29,0% | +6,5% | +17,5% | +1,0% | −2,6% |
> | mar/2025 | +16,4% | −1,4% | +2,8% | +8,0% | +0,8% | −1,2% | +15,8% | +13,2% | +2,3% | +5,4% | +23,0% | +4,3% | +10,7% | +1,0% | +6,1% |
> | abr/2025 | +0,4% | −0,8% | −5,3% | +2,6% | +3,0% | +0,7% | −2,9% | −9,0% | −4,8% | +0,2% | −5,4% | −1,0% | −5,1% | +1,1% | +3,7% |
> | mai/2025 | +22,7% | +10,9% | +5,2% | +9,8% | +2,0% | +2,7% | +11,2% | +10,3% | +10,4% | +10,1% | +48,5% | +8,4% | +23,6% | +1,1% | +1,5% |
> | jun/2025 | +2,5% | +3,0% | +1,0% | +0,1% | +2,0% | +5,7% | +1,3% | −7,0% | +2,6% | +1,9% | +3,4% | +3,4% | +7,7% | +1,1% | +1,3% |
> | jul/2025 | +6,9% | +0,4% | +2,6% | +3,0% | +2,2% | +4,3% | +4,3% | −2,3% | −1,8% | +3,1% | +9,0% | +3,0% | +6,2% | +1,3% | −4,2% |
> | ago/2025 | +17,5% | +24,8% | +15,3% | +9,7% | +2,1% | −1,8% | +21,6% | +10,2% | +1,5% | +13,9% | +75,8% | +14,4% | +44,6% | +1,2% | +6,3% |
> | set/2025 | +6,4% | −6,4% | −4,5% | +4,0% | +0,2% | +1,9% | +1,7% | −5,1% | +3,8% | −0,1% | −5,9% | −1,0% | −5,3% | +1,2% | +3,4% |
> | out/2025 | +8,9% | +2,6% | +1,7% | +1,3% | +3,1% | +5,2% | +6,7% | −6,2% | −0,3% | +3,7% | +11,8% | +4,9% | +12,3% | +1,3% | +2,3% |
> | nov/2025 | +13,4% | +8,4% | +10,5% | +8,8% | +1,1% | −2,4% | +6,5% | +14,5% | −2,4% | +8,5% | +38,7% | +4,1% | +10,1% | +1,1% | +6,4% |
> | dez/2025 | −19,1% | +7,8% | +3,8% | −0,9% | +1,0% | +4,8% | +1,3% | +7,5% | +2,8% | −1,8% | −14,6% | +4,7% | +11,6% | +1,1% | +1,3% |
> | jan/2026 | +12,6% | +6,2% | +11,1% | +8,1% | +3,1% | −1,0% | +11,4% | +16,8% | +3,2% | +8,4% | +36,1% | +5,6% | +14,1% | +1,2% | +12,6% |
> | fev/2026 | −16,9% | +1,8% | +2,2% | +11,6% | −1,0% | −1,3% | −0,4% | −5,4% | +2,9% | −0,8% | −8,2% | +0,1% | −1,9% | +1,0% | +4,1% |
> | mar/2026 | +2,0% | +1,1% | +6,4% | −1,0% | +1,2% | +4,6% | +0,2% | +13,4% | +9,6% | +2,2% | +3,3% | +2,1% | +3,5% | +1,2% | −0,7% |
> | abr/2026 | +38,5% | +8,5% | +2,2% | +5,9% | +1,0% | +2,6% | +14,4% | +6,6% | +5,2% | +10,7% | +53,3% | +8,5% | +24,1% | +1,1% | −0,1% |
> | mai/2026 | −4,5% | +6,1% | +3,2% | −2,0% | +2,0% | +0,3% | −2,4% | −3,1% | −3,5% | +1,0% | −1,4% | +1,3% | +1,6% | +1,1% | −7,2% |
> | jun/2026 | −6,5% | −4,0% | −2,5% | −0,5% | +1,1% | +3,7% | −2,9% | −0,5% | −1,7% | −2,4% | −15,9% | −1,0% | −5,4% | +1,1% | −1,0% |
> | jul/2026 | −1,6% | +11,7% | +6,1% | +12,2% | −0,8% | +0,4% | −0,8% | +16,5% | +24,1% | +5,6% | +21,3% | +3,7% | +8,5% | +1,2% | +3,5% |
> | ago/2026 | +2,1% | +7,6% | +4,5% | +4,9% | −0,9% | +4,0% | +4,7% | +11,3% | +1,6% | +3,8% | +11,8% | +5,5% | +14,4% | +1,1% | −0,3% |
> | set/2026 | +27,8% | −1,1% | −0,4% | −3,0% | +1,1% | +5,7% | +1,6% | +5,0% | +0,8% | +4,7% | +17,0% | +2,1% | +3,4% | +1,1% | +5,0% |
> | out/2026 | +4,8% | +15,5% | −3,5% | −6,0% | +1,8% | +0,1% | −2,1% | +8,3% | −6,9% | +2,5% | +7,2% | +4,3% | +11,2% | +0,9% | −5,7% |
> | **Acumulado** | **+1081,2%** | **+1170,7%** | **+421,7%** | **+554,9%** | **+131,2%** | **+298,6%** | **+692,6%** | **+1267,6%** | **+425,8%** | **+633,9%** | **+48123,1%** | **+680,7%** | **+11188,5%** | **+81,3%** | **+66,5%** |

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +31% | −3% | −5% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +75% | −8% | −12% | −18% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+160%** | **−17%** | −22% | −32% |
| Risco fixo de 2% por operação | 2,00% | +421% | −33% | −39% | −55% |
| Kelly ¼ | 2,95% | +916% | −44% | −56% | −73% |
| Kelly ½ | 5,91% | +2924% | −72% | −83% | −95% |
| Kelly cheio | 11,82% | +1763% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,66% | +307% | −30% | −36% | −50% |
| Larry Williams 5% | 3,32% | +905% | −53% | −61% | −77% |
| Larry Williams 10% | 6,64% | +2285% | −81% | −87% | −97% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros). **Sorteio:** a ordem das operações foi embaralhada 2.000 vezes — a queda de verdade depende da sorte na sequência, e a ordem real foi das mais favoráveis. Planeje pela queda do sorteio, não pela real.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: IFR de Tendência 7,7% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
- **Larry Williams:** no campeonato de 1987 ele usou o Kelly como fração do capital ÷ **margem** por contrato — a conta foi de US\$ 10 mil a ~US\$ 2,1 milhões, caiu para ~US\$ 700 mil e terminou o ano em ~US\$ 1,1 milhão. Depois ele passou a usar **contratos = capital × risco% ÷ maior perda já vista por contrato**, com ~5% (cauteloso), 10–12% (moderado) e 15–18% (agressivo). Esses percentuais eram para poucas operações por ano; estes setups operam muitas vezes por mês e a maior perda deles é ~1,5 vezes o stop típico, então **Larry com 2,5% ≈ arriscar 1,7% por operação** — perto do tamanho sugerido.

### Calculadora de contratos (risco de 1% por operação)

**contratos = capital × 1% ÷ ((stop em pts + 15) × R\$ 0,20)** — arredonde para baixo. Calcule para cada setup, a cada operação, com o capital do momento (assim a posição cresce quando ganha e diminui quando perde).

| Setup | Stop hoje | Risco por contrato | R\$ 10.000 | R\$ 20.000 | R\$ 50.000 | R\$ 100.000 | R\$ 200.000 |
|---|---|---|---|---|---|---|---|
| ADX da Manhã | 267 pts | R\$ 56 | 1,8 | 3,5 | 8,9 | 17,7 | 35,4 |
| IFR de Tendência ⭐ | 357 pts | R\$ 74 | 1,3 | 2,7 | 6,7 | 13,5 | 26,9 |
| MACD na Tendência | 886 pts | R\$ 180 | 0,6 | 1,1 | 2,8 | 5,6 | 11,1 |
| Primeira Vela de 80 Minutos | 663 pts | R\$ 136 | 0,7 | 1,5 | 3,7 | 7,4 | 14,7 |
| Primeira Vela de Quinta | 886 pts | R\$ 180 | 0,6 | 1,1 | 2,8 | 5,6 | 11,1 |
| Pullback na Média ⭐ | 646 pts | R\$ 132 | 0,8 | 1,5 | 3,8 | 7,6 | 15,1 |
| Rompimento da Bollinger ⭐ | 372 pts | R\$ 77 | 1,3 | 2,6 | 6,5 | 12,9 | 25,9 |
| Tendência Forte do Dia | 646 pts | R\$ 132 | 0,8 | 1,5 | 3,8 | 7,6 | 15,1 |
| Vai na Onda | 886 pts | R\$ 180 | 0,6 | 1,1 | 2,8 | 5,6 | 11,1 |

*Stops calculados com o ATR (4.304 pts) e o preço (178.260) de hoje — mudam todo dia. ⭐ = setups da combinação recomendada. Com risco de 0,5%, use a metade. Confira a margem de day trade da sua corretora para o número de contratos.*

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R\$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- **Risco 1%:** cada setup arrisca 1% do capital total em cada operação (contratos = capital × 1% ÷ (stop + custo) em R\$). Se dois setups estiverem posicionados ao mesmo tempo, o risco aberto é de 2%.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
