---
title: Carteira de setups
date: 2026-10-29
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 29/10/2026 19:40 BRT · dados de 01/11/2021 a 29/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 9 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 40.743** (+33% ao ano · pior queda −5% · Sharpe 1,63)
> - CDI: **R\$ 18.147** (+13% ao ano) · Ibovespa: **R\$ 16.029** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 38.957, +32% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.160.658, +161% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+1,0%** em 3 pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| # | Setup | Sharpe | Retorno ÷ queda | Teste ÷ treino | Meses > CDI | Correlação | Op./mês |
|---|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | 1,61 | 4,1 | 150% | 72% | 0,19 | 12,6 |
| 2º | [**Bollinger**](rompimento-da-bollinger) | 1,61 | 3,5 | 150% | 65% | 0,22 | 4,2 |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | 1,12 | 1,5 | 150% | 63% | 0,06 | 7,8 |
| 4º | [**ADX**](adx-da-manha) | 1,04 | 1,6 | 150% | 63% | 0,20 | 29,4 |
| 5º | [**Tendência**](tendencia-forte-do-dia) | 1,33 | 2,2 | 90% | 60% | 0,24 | 28,8 |
| 6º | [**Pullback**](pullback-na-media) | 1,20 | 2,8 | 28% | 60% | −0,07 | 5,0 |
| 7º | [**MACD**](macd-na-tendencia) | 0,95 | 1,1 | 150% | 63% | 0,23 | 14,7 |
| 8º | [**Onda**](vai-na-onda) | 0,73 | 0,9 | 150% | 57% | 0,14 | 19,4 |
| 9º | [**Quinta**](primeira-vela-de-quinta) | 0,88 | 1,1 | 62% | 50% | −0,11 | 1,8 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| # | Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | +43% | **+68%** | −7% | **−11%** | 3 op · +0,96R |
| 2º | [**Bollinger**](rompimento-da-bollinger) | +26% | **+52%** | −4% | **−7%** | sem operações |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | +32% | **+47%** | −13% | **−14%** | 3 op · +0,91R |
| 4º | [**ADX**](adx-da-manha) | +38% | **+66%** | −15% | **−31%** | 6 op · +0,55R |
| 5º | [**Tendência**](tendencia-forte-do-dia) | +48% | **+72%** | −16% | **−24%** | 3 op · +2,14R |
| 6º | [**Pullback**](pullback-na-media) | +26% | **+32%** | −5% | **−9%** | sem operações |
| 7º | [**MACD**](macd-na-tendencia) | +31% | **+40%** | −17% | **−11%** | 4 op · +0,48R |
| 8º | [**Onda**](vai-na-onda) | +30% | **+41%** | −19% | **−20%** | 3 op · +0,54R |
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
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | +32% · −2,6% | +52% · −5,1% | **+161% · −17,1%** | 2,34 → 2,13 |
| 📈 Maior retorno | Tendência | +48% · −16,1% | +72% · −23,6% | **+72% · −23,6%** | 1,58 → 1,20 |
| 🛡️ Menor queda | Pullback + Bollinger | +26% · −2,1% | +43% · −4,0% | **+78% · −8,6%** | 2,24 → 1,64 |

*R\$ 10 mil viraram, na recomendada: R\$ 38.957 com 1 contrato por R\$ 10 mil · R\$ 78.859 com 1% dividido entre os setups · **R\$ 1.160.658 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · MACD = MACD na Tendência · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

**Por que a recomendada é IFR de Tendência + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios ao mesmo tempo — Sharpe 2,20, rende 7,2× acima do CDI para cada 1% de pior queda, e o Sharpe ficou em 2,34 no treino e 2,13 no teste (não depende de um período só). A correlação média entre os setups dela é 0,00: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, MACD na Tendência, Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR + Quinta + Pullback + Bollinger ⚠️ | +28% | −1,6% | 9,2 | 2,52 → 2,18 | +20% | −0,01 | +43% · −3,5% | **+174% · −17,1%** |
| 2 | IFR + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +29% | −2,1% | 7,5 | 2,15 → 2,31 | +23% | −0,04 | +44% · −3,3% | **+249% · −20,5%** |
| 3 | IFR + Pullback + Bollinger ⭐ | +32% | −2,6% | 7,2 | 2,34 → 2,13 | +22% | 0,00 | +52% · −5,1% | **+161% · −17,1%** |
| 4 | IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | +30% | −2,2% | 7,7 | 1,98 → 2,13 | +23% | −0,14 | +42% · −3,3% | **+165% · −16,4%** |
| 5 | IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | +32% | −3,1% | 6,3 | 2,02 → 2,26 | +25% | 0,01 | +51% · −4,4% | **+233% · −20,4%** |
| 6 | IFR + Quinta + Pullback ⚠️ | +29% | −2,0% | 8,1 | 2,34 → 1,91 | +19% | −0,09 | +39% · −3,5% | **+106% · −12,8%** |
| 7 | 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +25% | −2,0% | 6,4 | 1,95 → 2,07 | +22% | −0,07 | +38% · −3,1% | **+142% · −15,2%** |
| 8 | IFR + Quinta + Bollinger ⚠️ | +28% | −2,9% | 5,3 | 1,93 → 2,12 | +22% | 0,05 | +46% · −4,8% | **+135% · −17,4%** |
| 9 | IFR + 1ª vela 80 + Pullback ⚠️ | +34% | −3,0% | 7,2 | 1,84 → 2,07 | +26% | −0,13 | +50% · −4,7% | **+152% · −16,3%** |
| 10 | IFR + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +35% | −5,0% | 4,6 | 2,09 → 1,99 | +25% | 0,09 | +56% · −6,7% | **+362% · −35,7%** |
| 11 | 1ª vela 80 + Quinta + Pullback + Bollinger + Tendência ⚠️ | +30% | −3,3% | 5,2 | 2,13 → 1,87 | +22% | −0,01 | +45% · −4,9% | **+250% · −29,1%** |
| 12 | IFR + Pullback | +35% | −3,5% | 6,2 | 2,15 → 1,83 | +21% | −0,17 | +51% · −5,9% | **+97% · −12,9%** |
| 13 | IFR + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +34% | −4,2% | 5,0 | 2,08 → 1,89 | +24% | −0,04 | +48% · −5,2% | **+273% · −30,2%** |
| 14 | IFR + Quinta + Pullback + Bollinger + Tendência ⚠️ | +32% | −4,4% | 4,4 | 2,34 → 1,86 | +21% | 0,06 | +49% · −6,0% | **+288% · −33,2%** |
| 15 | Quinta + Pullback + Bollinger ⚠️ | +23% | −1,6% | 6,1 | 2,51 → 1,71 | +17% | −0,02 | +34% · −2,4% | **+87% · −8,2%** |
| 16 | IFR + MACD + Quinta + Pullback + Bollinger ⚠️ | +29% | −3,6% | 4,5 | 1,93 → 1,92 | +23% | 0,04 | +43% · −4,1% | **+227% · −25,8%** |
| 17 | ADX + IFR + Quinta + Pullback + Bollinger ⚠️ | +30% | −4,1% | 4,2 | 1,85 → 2,14 | +20% | 0,08 | +50% · −6,4% | **+277% · −34,9%** |
| 18 | IFR + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +34% | −4,9% | 4,2 | 1,89 → 1,98 | +26% | 0,09 | +53% · −6,6% | **+319% · −35,3%** |
| 19 | IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | +38% | −5,7% | 4,4 | 1,98 → 1,85 | +25% | 0,02 | +57% · −6,9% | **+255% · −30,1%** |
| 20 | 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +33% | −4,6% | 4,5 | 2,01 → 1,83 | +23% | 0,05 | +52% · −6,5% | **+234% · −28,8%** |
| 21 | 1ª vela 80 + Pullback + Bollinger ⚠️ | +28% | −3,6% | 4,3 | 1,78 → 2,00 | +24% | −0,03 | +45% · −4,1% | **+130% · −15,3%** |
| 22 | ADX + IFR + Pullback + Bollinger | +34% | −4,7% | 4,4 | 1,71 → 2,10 | +21% | 0,13 | +58% · −7,9% | **+259% · −34,2%** |
| 23 | Pullback + Bollinger | +26% | −2,1% | 6,1 | 2,24 → 1,64 | +17% | −0,05 | +43% · −4,0% | **+78% · −8,6%** |
| 24 | IFR + Pullback + Bollinger + Tendência | +36% | −5,9% | 3,9 | 2,23 → 1,82 | +22% | 0,13 | +58% · −8,0% | **+270% · −33,2%** |
| 25 | IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | +30% | −3,7% | 4,5 | 1,66 → 2,23 | +24% | 0,03 | +47% · −4,4% | **+199% · −20,9%** |
| 26 | IFR + Bollinger | +34% | −4,8% | 4,5 | 1,70 → 2,06 | +26% | 0,23 | +61% · −7,7% | **+124% · −16,6%** |
| 27 | ADX + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | +34% | −4,0% | 5,2 | 1,61 → 2,22 | +23% | 0,10 | +57% · −6,9% | **+344% · −38,7%** |
| 28 | ADX + IFR + Pullback + Bollinger + Tendência | +37% | −6,3% | 3,8 | 1,89 → 1,94 | +25% | 0,19 | +62% · −9,5% | **+384% · −45,8%** |
| 29 | Quinta + Bollinger ⚠️ | +21% | −1,5% | 5,8 | 1,82 → 1,77 | +18% | 0,01 | +35% · −2,8% | **+60% · −8,4%** |
| 30 | IFR + Quinta + Pullback + Tendência ⚠️ | +34% | −4,9% | 4,2 | 2,23 → 1,69 | +20% | 0,02 | +48% · −6,1% | **+196% · −27,5%** |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+10%* | *−20,9%* | — | — | — | — | — | — |

> [!example]- Combinações 31 a 60 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 31 | ADX + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | +38% | −6,1% | 4,2 | 1,71 → 1,95 | +28% | 0,09 | +61% · −8,8% | **+358% · −44,2%** |
> | 32 | ADX + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | +32% | −3,8% | 5,0 | 1,58 → 2,12 | +21% | −0,02 | +49% · −6,0% | **+258% · −34,2%** |
> | 33 | 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +31% | −3,7% | 5,0 | 1,99 → 1,68 | +22% | −0,11 | +43% · −7,3% | **+166% · −31,1%** |
> | 34 | IFR + MACD + Pullback + Bollinger | +32% | −4,8% | 3,9 | 1,79 → 1,87 | +24% | 0,11 | +49% · −5,6% | **+212% · −25,7%** |
> | 35 | IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | +38% | −6,5% | 3,8 | 1,79 → 1,95 | +29% | 0,23 | +62% · −8,6% | **+300% · −35,2%** |
> | 36 | ADX + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +35% | −5,5% | 4,0 | 1,72 → 1,94 | +26% | 0,12 | +58% · −8,4% | **+343% · −43,8%** |
> | 37 | IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | +35% | −5,6% | 4,1 | 1,76 → 1,85 | +27% | 0,02 | +52% · −6,8% | **+223% · −29,7%** |
> | 38 | 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +31% | −4,5% | 4,0 | 1,78 → 1,84 | +25% | 0,04 | +48% · −5,9% | **+203% · −27,0%** |
> | 39 | Quinta + Pullback + Bollinger + Tendência ⚠️ | +29% | −3,8% | 4,3 | 2,34 → 1,62 | +18% | 0,03 | +44% · −5,2% | **+176% · −24,6%** |
> | 40 | ADX + IFR + Quinta + Pullback + Tendência ⚠️ | +35% | −5,9% | 3,7 | 1,89 → 1,84 | +23% | 0,09 | +54% · −8,0% | **+293% · −44,1%** |
> | 41 | IFR + MACD + Quinta + Pullback ⚠️ | +29% | −3,6% | 4,6 | 1,77 → 1,74 | +22% | −0,02 | +40% · −4,4% | **+148% · −19,4%** |
> | 42 | IFR + Quinta + Bollinger + Tendência ⚠️ | +34% | −5,8% | 3,6 | 2,02 → 1,82 | +23% | 0,14 | +53% · −7,8% | **+235% · −32,8%** |
> | 43 | IFR + Quinta ⚠️ | +30% | −3,6% | 4,7 | 1,66 → 1,85 | +22% | −0,08 | +42% · −5,2% | **+76% · −11,3%** |
> | 44 | ADX + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +33% | −4,7% | 4,2 | 1,69 → 1,84 | +25% | −0,01 | +50% · −7,0% | **+258% · −41,9%** |
> | 45 | 1ª vela 80 + Quinta + Pullback ⚠️ | +25% | −2,2% | 5,5 | 1,68 → 1,70 | +21% | −0,22 | +33% · −5,6% | **+81% · −18,6%** |
> | 46 | ADX + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +28% | −3,5% | 4,4 | 1,52 → 2,09 | +20% | 0,03 | +46% · −6,5% | **+237% · −36,9%** |
> | 47 | ADX + IFR + Pullback + Tendência | +40% | −7,3% | 3,7 | 1,79 → 1,81 | +25% | 0,16 | +63% · −10,9% | **+275% · −45,9%** |
> | 48 | ADX + IFR + Quinta + Pullback ⚠️ | +31% | −5,1% | 3,6 | 1,69 → 1,96 | +19% | 0,03 | +49% · −7,8% | **+188% · −32,5%** |
> | 49 | ADX + IFR + 1ª vela 80 + Pullback ⚠️ | +36% | −4,8% | 4,8 | 1,47 → 2,08 | +22% | 0,02 | +57% · −7,7% | **+241% · −33,5%** |
> | 50 | IFR + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +30% | −4,6% | 3,8 | 1,67 → 1,92 | +24% | −0,04 | +42% · −3,4% | **+214% · −22,5%** |
> | 51 | IFR + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +32% | −5,6% | 3,4 | 1,71 → 2,01 | +25% | 0,10 | +49% · −4,9% | **+292% · −28,5%** |
> | 52 | IFR + 1ª vela 80 + Bollinger ⚠️ | +34% | −5,4% | 3,9 | 1,50 → 2,18 | +26% | 0,20 | +57% · −6,4% | **+185% · −20,8%** |
> | 53 | ADX + IFR + Quinta + Bollinger + Tendência ⚠️ | +35% | −6,2% | 3,6 | 1,69 → 1,94 | +26% | 0,21 | +58% · −9,3% | **+341% · −45,4%** |
> | 54 | MACD + Quinta + Pullback + Bollinger ⚠️ | +25% | −3,4% | 3,6 | 1,89 → 1,73 | +21% | 0,00 | +36% · −2,8% | **+130% · −16,2%** |
> | 55 | IFR + Pullback + Tendência | +39% | −7,2% | 3,7 | 2,11 → 1,64 | +21% | 0,10 | +59% · −8,7% | **+183% · −27,9%** |
> | 56 | IFR + 1ª vela 80 + Quinta ⚠️ | +31% | −3,8% | 4,8 | 1,43 → 2,05 | +24% | −0,11 | +45% · −4,3% | **+127% · −14,2%** |
> | 57 | ADX + Quinta + Pullback + Bollinger + Tendência ⚠️ | +31% | −5,7% | 3,2 | 1,93 → 1,82 | +22% | 0,11 | +51% · −7,8% | **+278% · −44,5%** |
> | 58 | 1ª vela 80 + Pullback + Tendência ⚠️ | +36% | −5,5% | 4,2 | 1,87 → 1,62 | +23% | −0,09 | +52% · −10,2% | **+154% · −30,8%** |
> | 59 | ADX + IFR + MACD + Pullback + Bollinger | +33% | −5,2% | 4,0 | 1,52 → 1,98 | +22% | 0,16 | +55% · −7,7% | **+317% · −41,1%** |
> | 60 | IFR + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +37% | −6,7% | 3,6 | 1,74 → 1,76 | +28% | 0,12 | +53% · −7,2% | **+309% · −37,6%** |

> [!example]- Combinações 61 a 90 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 61 | ADX + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | +32% | −3,8% | 4,9 | 1,32 → 2,20 | +22% | 0,12 | +53% · −7,2% | **+301% · −39,6%** |
> | 62 | MACD + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +33% | −5,8% | 3,5 | 1,77 → 1,75 | +26% | 0,13 | +50% · −6,5% | **+291% · −35,0%** |
> | 63 | ADX + Pullback + Bollinger + Tendência | +35% | −6,7% | 3,3 | 1,81 → 1,78 | +23% | 0,18 | +59% · −11,3% | **+261% · −46,3%** |
> | 64 | ADX + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | +38% | −6,8% | 3,7 | 1,54 → 2,02 | +28% | 0,27 | +65% · −10,1% | **+411% · −48,2%** |
> | 65 | IFR + 1ª vela 80 + Tendência ⚠️ | +42% | −8,0% | 3,6 | 1,65 → 1,81 | +30% | 0,20 | +64% · −9,6% | **+208% · −29,7%** |
> | 66 | ADX + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | +36% | −6,0% | 3,9 | 1,51 → 1,95 | +27% | 0,10 | +57% · −8,7% | **+318% · −43,8%** |
> | 67 | IFR + Bollinger + Tendência | +39% | −8,3% | 3,2 | 1,89 → 1,78 | +25% | 0,33 | +66% · −11,0% | **+220% · −32,8%** |
> | 68 | ADX + IFR + MACD + Quinta + Pullback ⚠️ | +31% | −4,4% | 4,3 | 1,49 → 1,89 | +21% | 0,05 | +47% · −6,4% | **+237% · −36,6%** |
> | 69 | Pullback + Bollinger + Tendência | +33% | −5,8% | 3,6 | 2,19 → 1,56 | +19% | 0,09 | +53% · −7,5% | **+164% · −24,6%** |
> | 70 | ADX + IFR + Pullback | +36% | −6,2% | 3,8 | 1,54 → 1,91 | +20% | 0,06 | +59% · −10,0% | **+174% · −31,8%** |
> | 71 | IFR + MACD + Pullback + Bollinger + Tendência | +35% | −6,9% | 3,2 | 1,88 → 1,73 | +25% | 0,20 | +54% · −8,1% | **+327% · −40,4%** |
> | 72 | ADX + 1ª vela 80 + Pullback + Tendência ⚠️ | +37% | −6,4% | 3,8 | 1,59 → 1,80 | +27% | 0,04 | +58% · −10,0% | **+242% · −43,3%** |
> | 73 | ADX + 1ª vela 80 + Pullback + Bollinger ⚠️ | +31% | −4,5% | 4,1 | 1,39 → 2,04 | +21% | 0,09 | +53% · −8,4% | **+222% · −36,2%** |
> | 74 | 1ª vela 80 + Bollinger + Tendência ⚠️ | +36% | −6,6% | 3,5 | 1,65 → 1,79 | +28% | 0,21 | +59% · −8,4% | **+189% · −27,0%** |
> | 75 | IFR + MACD + Pullback | +34% | −5,3% | 3,9 | 1,62 → 1,68 | +25% | 0,03 | +48% · −6,4% | **+137% · −19,9%** |
> | 76 | ADX + IFR + Quinta + Bollinger ⚠️ | +31% | −4,7% | 3,9 | 1,37 → 2,09 | +20% | 0,17 | +54% · −8,0% | **+224% · −35,2%** |
> | 77 | ADX + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +33% | −5,4% | 3,7 | 1,49 → 1,95 | +26% | 0,12 | +54% · −8,6% | **+304% · −44,4%** |
> | 78 | MACD + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +31% | −5,1% | 3,6 | 1,74 → 1,64 | +25% | −0,02 | +43% · −5,8% | **+215% · −31,7%** |
> | 79 | IFR + Quinta + Pullback + Bollinger + Onda ⚠️ | +29% | −4,1% | 3,9 | 1,42 → 1,94 | +23% | 0,01 | +43% · −4,2% | **+227% · −25,9%** |
> | 80 | IFR + Quinta + Tendência ⚠️ | +36% | −7,0% | 3,3 | 1,88 → 1,64 | +23% | 0,11 | +53% · −8,5% | **+156% · −27,0%** |
> | 81 | IFR + MACD + 1ª vela 80 + Pullback ⚠️ | +34% | −6,1% | 3,4 | 1,56 → 1,87 | +26% | 0,02 | +48% · −4,6% | **+200% · −22,4%** |
> | 82 | ADX + IFR + Bollinger + Tendência | +39% | −8,2% | 3,3 | 1,58 → 1,91 | +28% | 0,35 | +69% · −12,0% | **+321% · −45,4%** |
> | 83 | IFR + MACD + Quinta + Pullback + Tendência ⚠️ | +33% | −6,1% | 3,4 | 1,87 → 1,63 | +23% | 0,08 | +47% · −6,6% | **+245% · −35,3%** |
> | 84 | ADX + IFR + 1ª vela 80 + Bollinger ⚠️ | +35% | −4,9% | 4,6 | 1,20 → 2,17 | +23% | 0,25 | +62% · −9,3% | **+282% · −39,0%** |
> | 85 | ADX + MACD + Quinta + Pullback + Bollinger ⚠️ | +28% | −4,3% | 3,5 | 1,51 → 1,90 | +19% | 0,08 | +44% · −7,1% | **+222% · −39,1%** |
> | 86 | ADX + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | +35% | −5,4% | 4,0 | 1,36 → 1,97 | +23% | 0,08 | +54% · −7,3% | **+295% · −40,1%** |
> | 87 | MACD + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +27% | −4,8% | 2,9 | 1,71 → 1,93 | +23% | −0,01 | +39% · −3,6% | **+193% · −23,0%** |
> | 88 | MACD + Quinta + Pullback + Bollinger + Tendência ⚠️ | +30% | −5,2% | 3,2 | 1,95 → 1,61 | +22% | 0,08 | +44% · −5,8% | **+228% · −32,6%** |
> | 89 | ADX + IFR + Quinta + Tendência ⚠️ | +37% | −7,2% | 3,4 | 1,57 → 1,81 | +26% | 0,18 | +59% · −10,2% | **+242% · −42,6%** |
> | 90 | ADX + IFR + 1ª vela 80 + Tendência ⚠️ | +41% | −8,0% | 3,6 | 1,42 → 1,92 | +30% | 0,23 | +68% · −11,3% | **+299% · −43,7%** |

> [!example]- Combinações 91 a 120 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 91 | 1ª vela 80 + Quinta + Tendência ⚠️ | +33% | −5,4% | 3,7 | 1,60 → 1,64 | +25% | −0,12 | +46% · −7,8% | **+130% · −25,2%** |
> | 92 | IFR + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +32% | −5,0% | 3,9 | 1,29 → 2,04 | +26% | 0,08 | +50% · −4,8% | **+289% · −28,7%** |
> | 93 | ADX + Quinta + Pullback + Bollinger ⚠️ | +27% | −4,9% | 2,9 | 1,67 → 1,88 | +18% | 0,08 | +45% · −7,5% | **+169% · −32,4%** |
> | 94 | IFR + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +37% | −7,4% | 3,2 | 1,56 → 1,83 | +30% | 0,30 | +58% · −8,6% | **+357% · −42,2%** |
> | 95 | Quinta + Bollinger + Tendência ⚠️ | +30% | −5,6% | 3,1 | 1,97 → 1,59 | +21% | 0,08 | +48% · −7,3% | **+139% · −24,1%** |
> | 96 | IFR | +43% | −7,5% | 4,1 | 1,40 → 1,76 | +28% | — | +68% · −11,2% | **+68% · −11,2%** |
> | 97 | ADX + IFR + Bollinger | +36% | −5,8% | 4,0 | 1,21 → 2,05 | +21% | 0,34 | +66% · −11,3% | **+209% · −34,5%** |
> | 98 | ADX + IFR + MACD + Pullback + Tendência | +38% | −8,0% | 3,1 | 1,60 → 1,76 | +27% | 0,19 | +59% · −10,0% | **+325% · −50,5%** |
> | 99 | ADX + IFR + MACD + Pullback | +35% | −5,9% | 3,8 | 1,38 → 1,85 | +22% | 0,10 | +55% · −8,3% | **+221% · −36,0%** |
> | 100 | ADX + IFR + 1ª vela 80 + Quinta ⚠️ | +33% | −4,4% | 4,6 | 1,15 → 2,07 | +21% | 0,04 | +53% · −7,7% | **+208% · −34,4%** |
> | 101 | IFR + 1ª vela 80 ⚠️ | +38% | −6,4% | 3,9 | 1,26 → 1,98 | +28% | 0,09 | +59% · −6,5% | **+116% · −14,1%** |
> | 102 | ADX + 1ª vela 80 + Quinta + Pullback ⚠️ | +29% | −4,1% | 3,8 | 1,33 → 1,88 | +19% | −0,07 | +44% · −6,8% | **+156% · −31,6%** |
> | 103 | IFR + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +35% | −6,6% | 3,3 | 1,53 → 1,75 | +29% | 0,12 | +50% · −7,1% | **+272% · −37,2%** |
> | 104 | ADX + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +31% | −5,3% | 3,5 | 1,33 → 1,98 | +22% | 0,12 | +51% · −8,2% | **+279% · −42,6%** |
> | 105 | IFR + Pullback + Bollinger + Tendência + Onda | +35% | −7,0% | 3,2 | 1,54 → 1,78 | +29% | 0,16 | +55% · −8,0% | **+324% · −40,6%** |
> | 106 | IFR + MACD + Quinta + Bollinger + Tendência ⚠️ | +33% | −6,8% | 3,0 | 1,67 → 1,72 | +26% | 0,21 | +51% · −7,9% | **+288% · −40,0%** |
> | 107 | ADX + MACD + Pullback + Bollinger + Tendência | +34% | −7,2% | 3,0 | 1,62 → 1,75 | +26% | 0,20 | +56% · −9,5% | **+316% · −50,4%** |
> | 108 | ADX + 1ª vela 80 + Bollinger + Tendência ⚠️ | +37% | −7,3% | 3,3 | 1,39 → 1,91 | +28% | 0,26 | +64% · −11,0% | **+285% · −43,8%** |
> | 109 | Quinta + Pullback + Tendência ⚠️ | +30% | −4,9% | 3,6 | 2,19 → 1,33 | +17% | −0,02 | +41% · −7,0% | **+109% · −23,8%** |
> | 110 | MACD + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +31% | −5,8% | 3,2 | 1,54 → 1,74 | +25% | 0,13 | +47% · −6,4% | **+255% · −34,6%** |
> | 111 | ADX + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +36% | −6,9% | 3,3 | 1,47 → 1,77 | +27% | 0,10 | +55% · −8,7% | **+293% · −47,8%** |
> | 112 | IFR + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +37% | −6,8% | 3,5 | 1,41 → 1,80 | +31% | 0,11 | +54% · −7,2% | **+302% · −37,8%** |
> | 113 | IFR + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +30% | −4,3% | 4,1 | 1,24 → 1,92 | +24% | −0,06 | +42% · −4,2% | **+211% · −22,7%** |
> | 114 | MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +35% | −6,8% | 3,2 | 1,64 → 1,60 | +27% | 0,07 | +49% · −8,0% | **+200% · −32,8%** |
> | 115 | 1ª vela 80 + Pullback ⚠️ | +29% | −4,3% | 3,9 | 1,49 → 1,59 | +24% | −0,31 | +41% · −8,7% | **+72% · −17,9%** |
> | 116 | ADX + MACD + Quinta + Pullback + Tendência ⚠️ | +33% | −6,3% | 3,1 | 1,61 → 1,66 | +24% | 0,08 | +48% · −9,4% | **+237% · −48,8%** |
> | 117 | IFR + MACD + Pullback + Tendência | +37% | −8,1% | 3,1 | 1,78 → 1,59 | +25% | 0,18 | +54% · −8,6% | **+229% · −35,3%** |
> | 118 | ADX + Quinta + Bollinger + Tendência ⚠️ | +33% | −6,8% | 2,9 | 1,57 → 1,80 | +25% | 0,19 | +55% · −9,9% | **+228% · −43,2%** |
> | 119 | ADX + IFR + MACD + Quinta + Bollinger ⚠️ | +31% | −5,1% | 3,6 | 1,23 → 1,97 | +21% | 0,19 | +51% · −8,0% | **+277% · −41,8%** |
> | 120 | IFR + Pullback + Bollinger + Onda | +32% | −5,4% | 3,5 | 1,31 → 1,90 | +25% | 0,09 | +50% · −5,6% | **+212% · −25,9%** |

> [!example]- Combinações 121 a 150 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 121 | IFR + Quinta + Pullback + Tendência + Onda ⚠️ | +33% | −6,2% | 3,3 | 1,51 → 1,68 | +28% | 0,04 | +47% · −6,6% | **+242% · −35,5%** |
> | 122 | Bollinger | +26% | −3,6% | 3,5 | 1,37 → 1,78 | +18% | — | +52% · −6,9% | **+52% · −6,9%** |
> | 123 | ADX + Quinta + Pullback + Tendência ⚠️ | +33% | −7,1% | 2,8 | 1,80 → 1,64 | +21% | 0,06 | +50% · −10,8% | **+190% · −44,7%** |
> | 124 | ADX + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | +35% | −5,7% | 3,9 | 1,14 → 2,03 | +24% | 0,28 | +58% · −8,9% | **+340% · −45,1%** |
> | 125 | 1ª vela 80 + Quinta + Bollinger ⚠️ | +25% | −3,6% | 3,4 | 1,26 → 1,99 | +15% | −0,02 | +40% · −4,1% | **+107% · −15,1%** |
> | 126 | MACD + Pullback + Bollinger | +28% | −5,4% | 2,8 | 1,70 → 1,67 | +23% | 0,05 | +42% · −4,5% | **+119% · −16,1%** |
> | 127 | ADX + 1ª vela 80 + Quinta + Tendência ⚠️ | +34% | −6,3% | 3,4 | 1,35 → 1,81 | +26% | 0,03 | +54% · −9,5% | **+211% · −40,1%** |
> | 128 | ADX + Pullback + Bollinger | +30% | −5,8% | 3,0 | 1,49 → 1,83 | +19% | 0,14 | +54% · −9,9% | **+157% · −31,7%** |
> | 129 | IFR + Tendência | +46% | −11,3% | 3,0 | 1,74 → 1,59 | +26% | 0,47 | +72% · −13,5% | **+145% · −27,0%** |
> | 130 | ADX + IFR + Tendência | +44% | −10,1% | 3,1 | 1,46 → 1,78 | +30% | 0,37 | +73% · −14,8% | **+226% · −45,2%** |
> | 131 | ADX + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +29% | −4,9% | 3,4 | 1,28 → 1,88 | +21% | −0,03 | +43% · −6,9% | **+205% · −38,3%** |
> | 132 | MACD + Pullback + Bollinger + Tendência | +33% | −7,0% | 2,9 | 1,83 → 1,56 | +23% | 0,17 | +50% · −7,9% | **+213% · −32,6%** |
> | 133 | IFR + MACD + Quinta + Bollinger ⚠️ | +29% | −5,5% | 3,0 | 1,43 → 1,85 | +23% | 0,14 | +45% · −5,5% | **+180% · −25,6%** |
> | 134 | IFR + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +30% | −6,1% | 2,8 | 1,40 → 1,99 | +23% | 0,12 | +46% · −5,4% | **+253% · −29,5%** |
> | 135 | ADX + IFR + 1ª vela 80 ⚠️ | +39% | −6,0% | 4,3 | 1,03 → 2,02 | +23% | 0,19 | +65% · −10,7% | **+194% · −33,8%** |
> | 136 | 1ª vela 80 + Pullback + Bollinger + Tendência + Onda ⚠️ | +33% | −6,2% | 3,3 | 1,37 → 1,78 | +27% | 0,12 | +51% · −6,5% | **+286% · −35,2%** |
> | 137 | ADX + MACD + Pullback + Bollinger | +31% | −5,8% | 3,1 | 1,37 → 1,85 | +20% | 0,13 | +51% · −9,2% | **+207% · −38,5%** |
> | 138 | ADX + IFR + Pullback + Bollinger + Onda | +33% | −6,0% | 3,4 | 1,19 → 1,97 | +23% | 0,14 | +55% · −7,7% | **+311% · −39,6%** |
> | 139 | ADX + Pullback + Tendência | +38% | −8,8% | 2,9 | 1,68 → 1,60 | +23% | 0,11 | +61% · −16,1% | **+176% · −46,6%** |
> | 140 | ADX + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | +33% | −5,3% | 3,8 | 1,10 → 1,96 | +22% | 0,10 | +50% · −7,6% | **+257% · −41,0%** |
> | 141 | ADX + IFR + MACD + Bollinger + Tendência | +38% | −8,7% | 2,9 | 1,42 → 1,83 | +28% | 0,36 | +63% · −11,3% | **+375% · −51,2%** |
> | 142 | ADX + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | +39% | −8,5% | 3,1 | 1,31 → 1,84 | +29% | 0,28 | +62% · −10,5% | **+348% · −49,1%** |
> | 143 | IFR + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +37% | −7,5% | 3,2 | 1,27 → 1,89 | +28% | 0,23 | +58% · −8,6% | **+355% · −42,3%** |
> | 144 | IFR + MACD + 1ª vela 80 + Tendência ⚠️ | +39% | −8,7% | 3,1 | 1,44 → 1,71 | +32% | 0,31 | +58% · −9,3% | **+255% · −37,2%** |
> | 145 | IFR + MACD + Bollinger + Tendência | +37% | −8,9% | 2,8 | 1,57 → 1,69 | +28% | 0,39 | +60% · −10,3% | **+270% · −40,0%** |
> | 146 | MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +29% | −6,7% | 2,4 | 1,57 → 1,87 | +24% | 0,07 | +44% · −5,1% | **+180% · −23,8%** |
> | 147 | ADX + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | +35% | −5,7% | 3,9 | 1,07 → 1,96 | +24% | 0,08 | +54% · −7,2% | **+284% · −37,9%** |
> | 148 | ADX + Bollinger + Tendência | +38% | −8,7% | 2,9 | 1,43 → 1,75 | +27% | 0,36 | +68% · −15,3% | **+213% · −45,6%** |
> | 149 | ADX + IFR + Pullback + Tendência + Onda | +38% | −8,1% | 3,1 | 1,33 → 1,78 | +28% | 0,17 | +59% · −10,0% | **+315% · −49,0%** |
> | 150 | ADX + 1ª vela 80 + Pullback ⚠️ | +33% | −5,6% | 3,6 | 1,19 → 1,83 | +20% | −0,05 | +52% · −9,5% | **+144% · −30,9%** |

> [!example]- Combinações 151 a 180 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 151 | IFR + 1ª vela 80 + Pullback + Onda ⚠️ | +34% | −5,6% | 3,7 | 1,14 → 1,88 | +26% | 0,04 | +49% · −5,1% | **+197% · −22,8%** |
> | 152 | 1ª vela 80 + Tendência ⚠️ | +41% | −8,9% | 3,1 | 1,46 → 1,58 | +30% | 0,04 | +61% · −12,3% | **+119% · −24,9%** |
> | 153 | MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +27% | −5,1% | 2,7 | 1,51 → 1,72 | +22% | −0,11 | +35% · −3,2% | **+122% · −17,1%** |
> | 154 | ADX + IFR + MACD + Quinta + Tendência ⚠️ | +36% | −7,9% | 2,9 | 1,40 → 1,76 | +26% | 0,21 | +55% · −9,8% | **+288% · −47,2%** |
> | 155 | IFR + Quinta + Pullback + Onda ⚠️ | +29% | −4,7% | 3,5 | 1,25 → 1,74 | +23% | −0,05 | +40% · −4,9% | **+147% · −22,7%** |
> | 156 | IFR + Quinta + Bollinger + Tendência + Onda ⚠️ | +33% | −6,9% | 3,0 | 1,36 → 1,79 | +29% | 0,12 | +51% · −7,9% | **+288% · −40,1%** |
> | 157 | ADX + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +36% | −7,6% | 3,0 | 1,29 → 1,84 | +27% | 0,29 | +59% · −10,3% | **+340% · −49,6%** |
> | 158 | 1ª vela 80 + Quinta + Pullback + Tendência + Onda ⚠️ | +31% | −5,6% | 3,3 | 1,33 → 1,66 | +27% | −0,03 | +43% · −6,0% | **+209% · −32,8%** |
> | 159 | MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +35% | −7,6% | 2,9 | 1,43 → 1,70 | +26% | 0,31 | +54% · −8,4% | **+239% · −34,5%** |
> | 160 | ADX + 1ª vela 80 + Quinta + Bollinger ⚠️ | +29% | −4,5% | 3,5 | 1,02 → 2,04 | +19% | 0,11 | +49% · −8,8% | **+190% · −37,3%** |
> | 161 | Quinta + Pullback + Bollinger + Tendência + Onda ⚠️ | +30% | −5,9% | 2,9 | 1,48 → 1,64 | +26% | 0,05 | +44% · −6,0% | **+225% · −32,9%** |
> | 162 | IFR + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +35% | −6,7% | 3,3 | 1,23 → 1,80 | +28% | 0,05 | +50% · −7,1% | **+268% · −37,4%** |
> | 163 | ADX + IFR + Quinta + Pullback + Onda ⚠️ | +31% | −5,4% | 3,4 | 1,15 → 1,86 | +21% | 0,02 | +47% · −6,6% | **+230% · −34,5%** |
> | 164 | ADX + MACD + Quinta + Pullback ⚠️ | +28% | −5,0% | 3,1 | 1,33 → 1,71 | +19% | −0,01 | +42% · −7,6% | **+145% · −33,9%** |
> | 165 | IFR + Pullback + Tendência + Onda | +38% | −8,2% | 3,0 | 1,42 → 1,64 | +31% | 0,16 | +55% · −8,6% | **+226% · −35,5%** |
> | 166 | ADX + IFR + Quinta ⚠️ | +33% | −6,3% | 3,2 | 1,16 → 1,91 | +19% | 0,11 | +53% · −9,9% | **+147% · −29,7%** |
> | 167 | ADX + IFR + MACD + Bollinger | +35% | −6,8% | 3,3 | 1,12 → 1,93 | +23% | 0,33 | +60% · −10,3% | **+260% · −41,3%** |
> | 168 | IFR + MACD + Quinta + Tendência ⚠️ | +35% | −7,9% | 2,8 | 1,55 → 1,59 | +26% | 0,20 | +50% · −8,5% | **+199% · −34,8%** |
> | 169 | IFR + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +30% | −5,4% | 3,2 | 1,04 → 2,04 | +20% | 0,04 | +46% · −4,9% | **+253% · −29,0%** |
> | 170 | IFR + MACD + Pullback + Bollinger + Onda | +32% | −5,9% | 3,2 | 1,20 → 1,82 | +25% | 0,15 | +48% · −6,2% | **+265% · −33,7%** |
> | 171 | ADX + MACD + Pullback + Tendência | +37% | −8,4% | 2,8 | 1,51 → 1,62 | +26% | 0,15 | +56% · −12,9% | **+222% · −50,7%** |
> | 172 | MACD + Quinta + Pullback + Tendência ⚠️ | +31% | −6,1% | 3,0 | 1,81 → 1,42 | +21% | 0,03 | +41% · −7,6% | **+150% · −31,4%** |
> | 173 | Pullback + Tendência | +37% | −7,6% | 3,2 | 2,03 → 1,26 | +16% | 0,01 | +53% · −12,0% | **+99% · −25,6%** |
> | 174 | Bollinger + Tendência | +37% | −9,2% | 2,6 | 1,79 → 1,53 | +23% | 0,31 | +64% · −11,8% | **+127% · −24,0%** |
> | 175 | ADX + MACD + Quinta + Bollinger + Tendência ⚠️ | +32% | −7,0% | 2,8 | 1,40 → 1,75 | +25% | 0,21 | +52% · −9,3% | **+280% · −47,7%** |
> | 176 | ADX + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +34% | −6,9% | 3,1 | 1,26 → 1,77 | +26% | 0,11 | +51% · −9,0% | **+259% · −45,8%** |
> | 177 | MACD + Quinta + Pullback ⚠️ | +25% | −3,9% | 3,1 | 1,65 → 1,41 | +20% | −0,10 | +31% · −4,6% | **+72% · −14,9%** |
> | 178 | ADX + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | +35% | −5,8% | 3,8 | 0,89 → 2,05 | +23% | 0,22 | +58% · −8,3% | **+333% · −42,7%** |
> | 179 | ADX + MACD + 1ª vela 80 + Pullback ⚠️ | +33% | −6,3% | 3,2 | 1,17 → 1,83 | +22% | 0,02 | +50% · −8,9% | **+191% · −37,7%** |
> | 180 | ADX + IFR + MACD + 1ª vela 80 ⚠️ | +37% | −6,7% | 3,6 | 1,00 → 1,92 | +24% | 0,24 | +59% · −9,8% | **+241% · −40,4%** |

> [!example]- Combinações 181 a 210 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 181 | IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | +33% | −8,0% | 2,6 | 1,28 → 1,95 | +24% | 0,28 | +53% · −7,0% | **+237% · −29,5%** |
> | 182 | ADX + 1ª vela 80 + Tendência ⚠️ | +40% | −9,0% | 3,1 | 1,24 → 1,77 | +30% | 0,17 | +66% · −13,6% | **+197% · −42,0%** |
> | 183 | IFR + Quinta + Bollinger + Onda ⚠️ | +29% | −4,8% | 3,5 | 1,02 → 1,92 | +23% | 0,02 | +45% · −5,7% | **+182% · −26,2%** |
> | 184 | MACD + Quinta + Bollinger + Tendência ⚠️ | +31% | −6,9% | 2,6 | 1,58 → 1,56 | +25% | 0,18 | +46% · −7,6% | **+184% · −32,1%** |
> | 185 | MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +32% | −6,7% | 2,9 | 1,40 → 1,60 | +26% | 0,06 | +45% · −7,0% | **+173% · −29,5%** |
> | 186 | 1ª vela 80 + Quinta + Bollinger + Tendência + Onda ⚠️ | +31% | −5,9% | 3,1 | 1,17 → 1,79 | +21% | 0,06 | +47% · −6,4% | **+252% · −34,7%** |
> | 187 | ADX + IFR + MACD + Quinta ⚠️ | +33% | −6,0% | 3,3 | 1,07 → 1,84 | +21% | 0,14 | +50% · −8,7% | **+190% · −36,9%** |
> | 188 | ADX + IFR + Quinta + Bollinger + Onda ⚠️ | +31% | −5,5% | 3,4 | 0,96 → 1,98 | +22% | 0,11 | +52% · −7,5% | **+274% · −39,2%** |
> | 189 | IFR + MACD + Quinta + Pullback + Onda ⚠️ | +30% | −5,1% | 3,3 | 1,16 → 1,71 | +24% | 0,02 | +41% · −4,8% | **+192% · −28,1%** |
> | 190 | ADX + IFR + Bollinger + Tendência + Onda | +38% | −8,8% | 2,9 | 1,19 → 1,86 | +28% | 0,28 | +64% · −11,3% | **+367% · −51,6%** |
> | 191 | ADX + Pullback + Bollinger + Tendência + Onda | +34% | −7,8% | 2,8 | 1,30 → 1,76 | +27% | 0,18 | +56% · −9,4% | **+307% · −47,8%** |
> | 192 | ADX + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +36% | −7,5% | 3,1 | 1,18 → 1,76 | +28% | 0,10 | +55% · −8,9% | **+281% · −46,0%** |
> | 193 | ADX + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | +39% | −8,6% | 3,1 | 1,09 → 1,87 | +29% | 0,22 | +63% · −10,5% | **+337% · −49,4%** |
> | 194 | ADX + IFR + MACD + Tendência | +41% | −10,3% | 2,7 | 1,31 → 1,72 | +29% | 0,38 | +65% · −12,7% | **+271% · −49,8%** |
> | 195 | IFR + MACD + Bollinger | +33% | −7,8% | 2,7 | 1,28 → 1,80 | +26% | 0,35 | +54% · −7,9% | **+167% · −25,4%** |
> | 196 | ADX + IFR | +41% | −8,5% | 3,3 | 1,00 → 1,86 | +20% | 0,33 | +71% · −14,3% | **+136% · −29,5%** |
> | 197 | ADX + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +29% | −5,5% | 3,0 | 1,02 → 1,97 | +20% | 0,13 | +47% · −8,5% | **+242% · −43,4%** |
> | 198 | IFR + MACD + 1ª vela 80 + Quinta ⚠️ | +31% | −6,8% | 2,7 | 1,23 → 1,85 | +24% | 0,04 | +44% · −5,2% | **+170% · −23,5%** |
> | 199 | ADX + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | +33% | −5,2% | 3,9 | 0,85 → 1,96 | +23% | 0,04 | +51% · −7,7% | **+250% · −37,5%** |
> | 200 | IFR + Bollinger + Tendência + Onda | +37% | −9,0% | 2,7 | 1,27 → 1,76 | +32% | 0,28 | +60% · −10,3% | **+270% · −40,1%** |
> | 201 | ADX + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +31% | −5,7% | 3,2 | 0,98 → 1,94 | +22% | 0,12 | +51% · −7,6% | **+270% · −39,0%** |
> | 202 | ADX + IFR + Pullback + Onda | +35% | −7,1% | 3,2 | 1,06 → 1,83 | +22% | 0,10 | +55% · −8,6% | **+215% · −34,5%** |
> | 203 | Pullback + Bollinger + Tendência + Onda | +33% | −7,6% | 2,7 | 1,38 → 1,60 | +29% | 0,15 | +51% · −7,7% | **+210% · −32,8%** |
> | 204 | 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +35% | −7,2% | 3,1 | 1,24 → 1,62 | +29% | 0,08 | +50% · −7,6% | **+195% · −32,4%** |
> | 205 | IFR + 1ª vela 80 + Tendência + Onda ⚠️ | +39% | −8,8% | 3,0 | 1,15 → 1,77 | +30% | 0,23 | +59% · −9,3% | **+251% · −37,3%** |
> | 206 | ADX + IFR + Quinta + Tendência + Onda ⚠️ | +36% | −8,0% | 2,9 | 1,16 → 1,78 | +27% | 0,13 | +56% · −9,9% | **+281% · −47,4%** |
> | 207 | IFR + MACD + Tendência | +41% | −11,1% | 2,6 | 1,44 → 1,55 | +30% | 0,48 | +61% · −11,8% | **+185% · −34,8%** |
> | 208 | 1ª vela 80 + Quinta + Pullback + Bollinger + Onda ⚠️ | +27% | −5,0% | 2,8 | 1,14 → 1,89 | +19% | −0,02 | +39% · −3,9% | **+191% · −23,0%** |
> | 209 | IFR + MACD + Pullback + Tendência + Onda | +36% | −8,7% | 2,7 | 1,32 → 1,62 | +30% | 0,21 | +52% · −8,6% | **+272% · −42,4%** |
> | 210 | ADX + MACD + Bollinger + Tendência | +36% | −9,2% | 2,6 | 1,29 → 1,72 | +28% | 0,36 | +61% · −12,3% | **+262% · −49,9%** |

> [!example]- Combinações 211 a 240 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 211 | ADX + Quinta + Tendência ⚠️ | +35% | −8,9% | 2,5 | 1,40 → 1,62 | +25% | 0,12 | +55% · −14,5% | **+152% · −43,4%** |
> | 212 | IFR + Pullback + Onda | +34% | −6,6% | 3,1 | 1,13 → 1,69 | +26% | 0,06 | +48% · −7,3% | **+136% · −23,4%** |
> | 213 | IFR + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +33% | −7,0% | 2,9 | 1,09 → 1,81 | +26% | 0,11 | +47% · −5,3% | **+246% · −30,7%** |
> | 214 | IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | +34% | −7,0% | 3,0 | 0,93 → 2,00 | +21% | 0,20 | +54% · −6,4% | **+237% · −28,2%** |
> | 215 | ADX + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +36% | −7,8% | 3,0 | 1,03 → 1,86 | +24% | 0,24 | +59% · −10,0% | **+330% · −47,9%** |
> | 216 | ADX + IFR + MACD + Pullback + Onda | +35% | −7,0% | 3,1 | 1,02 → 1,80 | +23% | 0,13 | +52% · −8,1% | **+262% · −41,4%** |
> | 217 | IFR + MACD + Quinta ⚠️ | +30% | −6,2% | 2,9 | 1,22 → 1,66 | +23% | 0,08 | +42% · −5,8% | **+113% · −19,2%** |
> | 218 | ADX + MACD + 1ª vela 80 + Tendência ⚠️ | +38% | −9,0% | 2,8 | 1,17 → 1,73 | +29% | 0,25 | +60% · −11,5% | **+242% · −46,9%** |
> | 219 | MACD + Pullback + Tendência | +35% | −8,7% | 2,6 | 1,69 → 1,37 | +23% | 0,13 | +49% · −11,0% | **+138% · −32,6%** |
> | 220 | ADX + Quinta + Pullback + Tendência + Onda ⚠️ | +33% | −7,2% | 2,7 | 1,26 → 1,65 | +25% | 0,05 | +48% · −8,3% | **+229% · −46,5%** |
> | 221 | ADX + Quinta + Pullback + Bollinger + Onda ⚠️ | +28% | −5,3% | 2,9 | 1,07 → 1,83 | +20% | 0,05 | +44% · −6,9% | **+216% · −35,3%** |
> | 222 | ADX + 1ª vela 80 + Bollinger ⚠️ | +33% | −6,4% | 3,1 | 0,86 → 1,99 | +19% | 0,29 | +59% · −12,1% | **+176% · −36,7%** |
> | 223 | ADX + Quinta + Pullback ⚠️ | +27% | −6,4% | 2,2 | 1,43 → 1,57 | +16% | 0,03 | +41% · −9,7% | **+103% · −30,6%** |
> | 224 | IFR + Quinta + Tendência + Onda ⚠️ | +35% | −8,1% | 2,8 | 1,23 → 1,66 | +30% | 0,08 | +50% · −8,5% | **+198% · −35,0%** |
> | 225 | ADX + IFR + 1ª vela 80 + Onda ⚠️ | +37% | −6,8% | 3,6 | 0,76 → 1,93 | +24% | 0,18 | +59% · −9,7% | **+234% · −39,3%** |
> | 226 | MACD + Bollinger + Tendência | +35% | −9,7% | 2,3 | 1,45 → 1,52 | +27% | 0,41 | +56% · −10,7% | **+170% · −32,1%** |
> | 227 | Quinta + Tendência ⚠️ | +32% | −7,4% | 2,7 | 1,77 → 1,29 | +19% | −0,07 | +45% · −9,8% | **+80% · −21,7%** |
> | 228 | MACD + 1ª vela 80 + Pullback ⚠️ | +30% | −7,9% | 2,2 | 1,36 → 1,65 | +25% | −0,07 | +41% · −4,9% | **+111% · −17,3%** |
> | 229 | MACD + Pullback + Bollinger + Tendência + Onda | +33% | −7,8% | 2,6 | 1,29 → 1,61 | +29% | 0,20 | +49% · −7,8% | **+261% · −40,0%** |
> | 230 | ADX + IFR + Bollinger + Onda | +35% | −7,2% | 3,1 | 0,85 → 1,95 | +23% | 0,24 | +61% · −9,8% | **+256% · −39,2%** |
> | 231 | ADX + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +29% | −5,2% | 3,2 | 0,93 → 1,82 | +21% | −0,03 | +44% · −6,5% | **+196% · −34,6%** |
> | 232 | ADX + MACD + Quinta + Tendência ⚠️ | +34% | −8,2% | 2,6 | 1,27 → 1,62 | +26% | 0,16 | +52% · −11,8% | **+193% · −47,8%** |
> | 233 | 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +35% | −7,8% | 2,8 | 1,08 → 1,76 | +22% | 0,23 | +55% · −8,4% | **+236% · −34,7%** |
> | 234 | ADX + MACD + Pullback | +32% | −7,1% | 2,8 | 1,18 → 1,65 | +20% | 0,00 | +50% · −10,9% | **+133% · −36,3%** |
> | 235 | MACD + 1ª vela 80 + Tendência ⚠️ | +38% | −9,4% | 2,6 | 1,28 → 1,55 | +29% | 0,29 | +54% · −10,3% | **+160% · −30,7%** |
> | 236 | MACD + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +34% | −7,7% | 2,8 | 1,19 → 1,62 | +27% | 0,14 | +48% · −7,1% | **+242% · −37,2%** |
> | 237 | ADX + Quinta + Bollinger + Tendência + Onda ⚠️ | +33% | −7,3% | 2,7 | 1,10 → 1,77 | +26% | 0,13 | +53% · −9,1% | **+273% · −45,0%** |
> | 238 | ADX + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +34% | −7,0% | 3,0 | 0,99 → 1,78 | +24% | 0,05 | +52% · −8,6% | **+249% · −43,5%** |
> | 239 | IFR + 1ª vela 80 + Quinta + Onda ⚠️ | +31% | −5,9% | 3,1 | 0,87 → 1,89 | +21% | −0,04 | +44% · −5,2% | **+169% · −23,3%** |
> | 240 | Quinta + Pullback + Tendência + Onda ⚠️ | +31% | −6,9% | 2,6 | 1,34 → 1,45 | +25% | 0,00 | +41% · −6,4% | **+147% · −27,2%** |

> [!example]- Combinações 241 a 270 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 241 | IFR + MACD + Pullback + Onda | +33% | −6,8% | 3,0 | 1,06 → 1,67 | +26% | 0,12 | +46% · −6,3% | **+178% · −28,1%** |
> | 242 | IFR + Bollinger + Onda | +34% | −6,8% | 3,1 | 0,89 → 1,87 | +24% | 0,20 | +55% · −7,9% | **+169% · −25,4%** |
> | 243 | ADX + IFR + MACD | +38% | −8,4% | 3,0 | 0,95 → 1,79 | +22% | 0,31 | +62% · −12,0% | **+177% · −36,2%** |
> | 244 | ADX + IFR + Tendência + Onda | +41% | −10,4% | 2,7 | 1,08 → 1,76 | +30% | 0,28 | +66% · −12,7% | **+264% · −48,2%** |
> | 245 | IFR + MACD + Bollinger + Tendência + Onda | +36% | −9,3% | 2,5 | 1,17 → 1,71 | +30% | 0,34 | +56% · −9,9% | **+320% · −46,5%** |
> | 246 | IFR + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +38% | −9,2% | 2,7 | 1,09 → 1,72 | +28% | 0,29 | +55% · −9,1% | **+297% · −44,0%** |
> | 247 | ADX + Tendência | +44% | −12,3% | 2,5 | 1,26 → 1,57 | +29% | 0,32 | +74% · −24,1% | **+140% · −45,8%** |
> | 248 | MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +27% | −7,0% | 2,0 | 1,16 → 1,85 | +17% | 0,08 | +40% · −5,5% | **+151% · −24,9%** |
> | 249 | ADX + MACD + 1ª vela 80 + Bollinger ⚠️ | +32% | −7,1% | 2,8 | 0,90 → 1,93 | +20% | 0,28 | +55% · −10,9% | **+227% · −42,8%** |
> | 250 | IFR + MACD + 1ª vela 80 ⚠️ | +36% | −9,4% | 2,5 | 1,10 → 1,80 | +26% | 0,27 | +53% · −7,3% | **+157% · −23,5%** |
> | 251 | Quinta + Pullback ⚠️ | +21% | −2,7% | 3,1 | 2,18 → 0,85 | +14% | −0,02 | +26% · −4,2% | **+39% · −9,3%** |
> | 252 | Quinta + Pullback + Bollinger + Onda ⚠️ | +25% | −4,6% | 2,7 | 1,15 → 1,66 | +22% | −0,02 | +37% · −4,4% | **+129% · −20,0%** |
> | 253 | 1ª vela 80 + Bollinger ⚠️ | +29% | −7,1% | 2,3 | 1,03 → 1,91 | +14% | 0,28 | +51% · −7,5% | **+97% · −16,3%** |
> | 254 | ADX + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +29% | −5,4% | 3,1 | 0,73 → 1,95 | +17% | 0,07 | +48% · −7,6% | **+237% · −41,0%** |
> | 255 | ADX + Pullback + Tendência + Onda | +36% | −9,3% | 2,6 | 1,18 → 1,62 | +27% | 0,15 | +56% · −11,6% | **+213% · −49,2%** |
> | 256 | MACD + Quinta + Pullback + Tendência + Onda ⚠️ | +31% | −7,1% | 2,5 | 1,26 → 1,50 | +28% | 0,06 | +41% · −6,4% | **+190% · −35,0%** |
> | 257 | ADX + MACD + Quinta + Bollinger ⚠️ | +28% | −6,1% | 2,6 | 0,99 → 1,84 | +19% | 0,16 | +47% · −9,6% | **+177% · −39,3%** |
> | 258 | 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +33% | −6,9% | 2,9 | 1,03 → 1,64 | +22% | −0,03 | +45% · −6,6% | **+169% · −29,2%** |
> | 259 | IFR + MACD + Quinta + Bollinger + Onda ⚠️ | +30% | −6,3% | 2,7 | 0,96 → 1,82 | +23% | 0,11 | +45% · −6,1% | **+231% · −33,5%** |
> | 260 | ADX + IFR + MACD + 1ª vela 80 + Onda ⚠️ | +36% | −7,5% | 3,1 | 0,77 → 1,88 | +23% | 0,23 | +56% · −8,7% | **+280% · −43,3%** |
> | 261 | Quinta + Bollinger + Tendência + Onda ⚠️ | +31% | −7,0% | 2,5 | 1,17 → 1,62 | +24% | 0,06 | +47% · −7,6% | **+183% · −32,3%** |
> | 262 | ADX + IFR + MACD + Bollinger + Onda | +34% | −7,7% | 2,8 | 0,85 → 1,89 | +24% | 0,27 | +57% · −9,5% | **+307% · −45,6%** |
> | 263 | ADX + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +32% | −6,5% | 3,0 | 0,86 → 1,79 | +23% | 0,09 | +48% · −7,4% | **+230% · −40,5%** |
> | 264 | ADX + IFR + Quinta + Onda ⚠️ | +33% | −6,5% | 3,1 | 0,80 → 1,84 | +21% | 0,04 | +51% · −8,6% | **+187% · −34,0%** |
> | 265 | MACD + Quinta + Tendência ⚠️ | +32% | −8,5% | 2,3 | 1,42 → 1,37 | +25% | 0,12 | +44% · −9,7% | **+116% · −29,2%** |
> | 266 | MACD + Quinta + Pullback + Bollinger + Onda ⚠️ | +27% | −5,5% | 2,5 | 1,10 → 1,70 | +22% | 0,03 | +38% · −4,6% | **+176% · −25,3%** |
> | 267 | MACD + Pullback | +29% | −6,7% | 2,4 | 1,44 → 1,31 | +23% | −0,18 | +37% · −7,6% | **+64% · −15,6%** |
> | 268 | ADX + MACD + Pullback + Bollinger + Onda | +31% | −6,8% | 2,7 | 0,95 → 1,80 | +22% | 0,15 | +49% · −7,8% | **+253% · −41,3%** |
> | 269 | ADX + Quinta + Bollinger ⚠️ | +27% | −5,9% | 2,4 | 1,01 → 1,83 | +17% | 0,18 | +48% · −10,4% | **+131% · −32,8%** |
> | 270 | MACD + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +34% | −8,3% | 2,6 | 1,04 → 1,71 | +22% | 0,29 | +52% · −8,4% | **+287% · −41,6%** |

> [!example]- Combinações 271 a 300 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 271 | ADX + MACD + Pullback + Tendência + Onda | +36% | −8,9% | 2,5 | 1,13 → 1,63 | +27% | 0,17 | +53% · −9,9% | **+258% · −53,5%** |
> | 272 | 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +29% | −6,9% | 2,4 | 1,03 → 1,84 | +20% | 0,08 | +45% · −5,4% | **+177% · −23,7%** |
> | 273 | IFR + MACD + Quinta + Tendência + Onda ⚠️ | +34% | −8,6% | 2,5 | 1,14 → 1,63 | +29% | 0,16 | +49% · −8,5% | **+241% · −42,0%** |
> | 274 | IFR + Tendência + Onda | +41% | −11,3% | 2,5 | 1,14 → 1,62 | +35% | 0,33 | +62% · −11,8% | **+184% · −34,9%** |
> | 275 | ADX + 1ª vela 80 + Quinta ⚠️ | +30% | −5,5% | 3,0 | 0,78 → 1,82 | +19% | −0,03 | +47% · −10,0% | **+120% · −31,8%** |
> | 276 | ADX + IFR + MACD + Tendência + Onda | +39% | −10,4% | 2,5 | 1,03 → 1,73 | +29% | 0,32 | +61% · −11,8% | **+306% · −53,1%** |
> | 277 | MACD + Quinta + Bollinger ⚠️ | +25% | −5,9% | 2,0 | 1,18 → 1,65 | +19% | 0,09 | +37% · −4,6% | **+97% · −16,7%** |
> | 278 | ADX + Pullback + Bollinger + Onda | +31% | −6,9% | 2,6 | 0,96 → 1,79 | +21% | 0,13 | +51% · −8,9% | **+201% · −35,1%** |
> | 279 | ADX + Bollinger + Tendência + Onda | +36% | −9,4% | 2,5 | 1,01 → 1,74 | +28% | 0,27 | +62% · −11,8% | **+256% · −47,0%** |
> | 280 | IFR + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +33% | −8,3% | 2,5 | 0,91 → 1,90 | +21% | 0,26 | +51% · −6,8% | **+290% · −35,8%** |
> | 281 | ADX + 1ª vela 80 + Tendência + Onda ⚠️ | +38% | −9,1% | 2,8 | 0,91 → 1,74 | +25% | 0,19 | +60% · −11,1% | **+233% · −45,1%** |
> | 282 | ADX + MACD + Tendência | +40% | −11,5% | 2,4 | 1,16 → 1,58 | +29% | 0,35 | +63% · −17,5% | **+180% · −50,0%** |
> | 283 | ADX + 1ª vela 80 + Pullback + Onda ⚠️ | +33% | −6,7% | 2,9 | 0,83 → 1,78 | +22% | 0,05 | +50% · −8,4% | **+183% · −35,1%** |
> | 284 | ADX + Pullback | +32% | −8,7% | 2,2 | 1,24 → 1,50 | +16% | 0,01 | +53% · −14,8% | **+94% · −31,2%** |
> | 285 | IFR + Quinta + Onda ⚠️ | +30% | −5,8% | 3,0 | 0,82 → 1,71 | +24% | −0,09 | +43% · −6,7% | **+113% · −22,0%** |
> | 286 | ADX + IFR + MACD + Quinta + Onda ⚠️ | +33% | −6,9% | 2,9 | 0,80 → 1,80 | +22% | 0,10 | +49% · −8,0% | **+230% · −41,0%** |
> | 287 | Pullback + Tendência + Onda | +35% | −9,6% | 2,4 | 1,24 → 1,40 | +26% | 0,16 | +49% · −8,8% | **+136% · −27,1%** |
> | 288 | MACD + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +30% | −7,8% | 2,2 | 1,02 → 1,81 | +20% | 0,13 | +44% · −5,6% | **+229% · −30,3%** |
> | 289 | ADX + MACD + 1ª vela 80 + Quinta ⚠️ | +30% | −6,4% | 2,7 | 0,84 → 1,82 | +20% | 0,04 | +46% · −9,3% | **+162% · −38,5%** |
> | 290 | MACD + Quinta + Bollinger + Tendência + Onda ⚠️ | +31% | −7,8% | 2,3 | 1,09 → 1,61 | +24% | 0,15 | +46% · −7,8% | **+230% · −39,5%** |
> | 291 | IFR + MACD | +37% | −9,9% | 2,5 | 1,05 → 1,59 | +27% | 0,43 | +54% · −9,0% | **+103% · −19,0%** |
> | 292 | IFR + 1ª vela 80 + Onda ⚠️ | +36% | −8,3% | 2,8 | 0,76 → 1,84 | +21% | 0,18 | +54% · −7,3% | **+156% · −23,2%** |
> | 293 | MACD + Pullback + Tendência + Onda | +34% | −9,3% | 2,3 | 1,17 → 1,46 | +30% | 0,20 | +47% · −8,4% | **+176% · −34,9%** |
> | 294 | MACD + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +32% | −7,6% | 2,6 | 1,00 → 1,63 | +22% | 0,09 | +45% · −7,0% | **+213% · −36,7%** |
> | 295 | ADX + MACD + Bollinger + Tendência + Onda | +36% | −9,6% | 2,4 | 0,98 → 1,72 | +26% | 0,30 | +58% · −11,1% | **+304% · −51,4%** |
> | 296 | ADX + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +37% | −9,4% | 2,6 | 0,90 → 1,73 | +24% | 0,25 | +57% · −10,3% | **+277% · −49,9%** |
> | 297 | ADX + MACD + Quinta + Pullback + Onda ⚠️ | +29% | −6,2% | 2,6 | 0,91 → 1,69 | +21% | 0,01 | +42% · −6,8% | **+183% · −36,9%** |
> | 298 | IFR + MACD + Tendência + Onda | +39% | −11,1% | 2,3 | 1,06 → 1,60 | +33% | 0,38 | +56% · −11,0% | **+225% · −41,9%** |
> | 299 | Tendência | +48% | −16,1% | 2,2 | 1,58 → 1,20 | +22% | — | +72% · −23,6% | **+72% · −23,6%** |
> | 300 | MACD + Tendência | +40% | −13,4% | 2,0 | 1,28 → 1,31 | +29% | 0,55 | +57% · −15,6% | **+106% · −30,3%** |

> [!example]- Combinações 301 a 330 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 301 | ADX + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +32% | −7,1% | 2,8 | 0,67 → 1,88 | +17% | 0,25 | +53% · −8,9% | **+272% · −45,2%** |
> | 302 | MACD + 1ª vela 80 + Bollinger ⚠️ | +30% | −10,3% | 1,7 | 0,99 → 1,79 | +16% | 0,31 | +48% · −8,2% | **+140% · −25,7%** |
> | 303 | ADX + 1ª vela 80 + Bollinger + Onda ⚠️ | +32% | −7,0% | 2,8 | 0,62 → 1,91 | +16% | 0,23 | +55% · −10,6% | **+221% · −42,6%** |
> | 304 | IFR + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +31% | −7,5% | 2,5 | 0,86 → 1,81 | +21% | 0,07 | +44% · −5,4% | **+214% · −30,5%** |
> | 305 | ADX + IFR + Onda | +38% | −9,0% | 2,8 | 0,70 → 1,80 | +23% | 0,20 | +62% · −11,5% | **+173% · −34,0%** |
> | 306 | Bollinger + Tendência + Onda | +35% | −9,9% | 2,3 | 1,05 → 1,58 | +26% | 0,27 | +57% · −10,6% | **+170% · −32,2%** |
> | 307 | IFR + MACD + Bollinger + Onda | +33% | −8,2% | 2,5 | 0,86 → 1,78 | +24% | 0,29 | +52% · −8,0% | **+215% · −33,3%** |
> | 308 | ADX + Quinta + Tendência + Onda ⚠️ | +34% | −8,7% | 2,4 | 0,97 → 1,63 | +26% | 0,06 | +52% · −10,4% | **+188% · −45,7%** |
> | 309 | 1ª vela 80 + Tendência + Onda ⚠️ | +38% | −9,7% | 2,6 | 0,93 → 1,60 | +23% | 0,21 | +55% · −9,4% | **+157% · −29,1%** |
> | 310 | ADX + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +31% | −6,2% | 2,8 | 0,62 → 1,79 | +17% | 0,05 | +45% · −7,7% | **+200% · −41,2%** |
> | 311 | 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +27% | −5,8% | 2,4 | 0,96 → 1,65 | +20% | −0,10 | +36% · −4,8% | **+119% · −21,7%** |
> | 312 | Pullback + Bollinger + Onda | +28% | −6,4% | 2,3 | 1,00 → 1,60 | +23% | 0,09 | +43% · −6,2% | **+119% · −20,0%** |
> | 313 | MACD + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +28% | −6,8% | 2,2 | 0,96 → 1,69 | +20% | −0,03 | +37% · −4,3% | **+162% · −25,5%** |
> | 314 | ADX + MACD + Quinta + Tendência + Onda ⚠️ | +34% | −8,9% | 2,4 | 0,95 → 1,64 | +26% | 0,13 | +50% · −9,7% | **+229% · −50,1%** |
> | 315 | ADX + Quinta + Pullback + Onda ⚠️ | +28% | −6,2% | 2,5 | 0,90 → 1,62 | +19% | −0,01 | +42% · −7,7% | **+140% · −31,1%** |
> | 316 | ADX + IFR + MACD + Onda | +37% | −9,0% | 2,6 | 0,72 → 1,77 | +24% | 0,25 | +57% · −10,4% | **+215% · −40,9%** |
> | 317 | ADX + MACD + Quinta + Bollinger + Onda ⚠️ | +29% | −6,3% | 2,6 | 0,70 → 1,81 | +19% | 0,11 | +46% · −8,0% | **+221% · −42,0%** |
> | 318 | ADX + MACD + Bollinger | +32% | −8,5% | 2,3 | 0,83 → 1,80 | +21% | 0,33 | +57% · −13,1% | **+164% · −38,7%** |
> | 319 | MACD + Pullback + Bollinger + Onda | +29% | −7,6% | 2,1 | 0,98 → 1,66 | +23% | 0,13 | +43% · −6,0% | **+163% · −25,3%** |
> | 320 | ADX + Bollinger | +32% | −7,9% | 2,5 | 0,79 → 1,77 | +18% | 0,45 | +63% · −16,1% | **+120% · −32,1%** |
> | 321 | MACD + Bollinger + Tendência + Onda | +34% | −10,1% | 2,2 | 1,00 → 1,58 | +25% | 0,34 | +53% · −10,1% | **+215% · −39,5%** |
> | 322 | ADX + 1ª vela 80 + Quinta + Onda ⚠️ | +30% | −6,2% | 2,8 | 0,56 → 1,79 | +16% | −0,03 | +46% · −9,2% | **+157% · −39,0%** |
> | 323 | MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +36% | −9,9% | 2,4 | 0,91 → 1,59 | +23% | 0,29 | +52% · −9,1% | **+198% · −36,7%** |
> | 324 | IFR + MACD + Quinta + Onda ⚠️ | +31% | −7,2% | 2,5 | 0,80 → 1,67 | +24% | 0,06 | +42% · −6,2% | **+152% · −27,8%** |
> | 325 | Pullback | +26% | −4,6% | 2,8 | 1,87 → 0,62 | +11% | — | +32% · −9,1% | **+32% · −9,1%** |
> | 326 | ADX + MACD + 1ª vela 80 ⚠️ | +35% | −8,9% | 2,4 | 0,71 → 1,78 | +20% | 0,20 | +55% · −12,7% | **+150% · −37,9%** |
> | 327 | Quinta + Tendência + Onda ⚠️ | +32% | −8,8% | 2,2 | 1,00 → 1,43 | +26% | −0,04 | +44% · −8,3% | **+115% · −26,6%** |
> | 328 | IFR + Onda | +37% | −9,2% | 2,6 | 0,68 → 1,65 | +27% | 0,19 | +55% · −11,1% | **+103% · −22,7%** |
> | 329 | IFR + MACD + 1ª vela 80 + Onda ⚠️ | +35% | −9,6% | 2,3 | 0,77 → 1,77 | +21% | 0,26 | +50% · −7,0% | **+199% · −30,3%** |
> | 330 | ADX + 1ª vela 80 ⚠️ | +36% | −8,8% | 2,6 | 0,62 → 1,76 | +20% | 0,15 | +61% · −15,9% | **+110% · −32,0%** |

> [!example]- Combinações 331 a 360 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 331 | ADX + Quinta + Bollinger + Onda ⚠️ | +28% | −6,3% | 2,5 | 0,66 → 1,80 | +18% | 0,07 | +47% · −8,4% | **+174% · −36,2%** |
> | 332 | ADX + MACD + Pullback + Onda | +32% | −8,0% | 2,4 | 0,81 → 1,65 | +22% | 0,09 | +48% · −8,7% | **+170% · −39,3%** |
> | 333 | ADX + Tendência + Onda | +40% | −11,8% | 2,3 | 0,87 → 1,60 | +30% | 0,24 | +63% · −16,3% | **+174% · −48,4%** |
> | 334 | ADX + MACD + 1ª vela 80 + Onda ⚠️ | +34% | −8,1% | 2,6 | 0,53 → 1,76 | +17% | 0,20 | +52% · −10,4% | **+186% · −42,6%** |
> | 335 | MACD + Quinta + Tendência + Onda ⚠️ | +32% | −9,2% | 2,1 | 0,96 → 1,47 | +25% | 0,10 | +43% · −8,3% | **+153% · −34,4%** |
> | 336 | 1ª vela 80 + Quinta ⚠️ | +25% | −5,2% | 2,3 | 0,86 → 1,60 | +14% | −0,34 | +33% · −5,7% | **+55% · −13,7%** |
> | 337 | ADX + MACD + Tendência + Onda | +38% | −11,4% | 2,2 | 0,87 → 1,61 | +28% | 0,29 | +58% · −13,1% | **+214% · −52,6%** |
> | 338 | MACD + 1ª vela 80 + Quinta ⚠️ | +27% | −8,2% | 1,7 | 0,90 → 1,63 | +16% | −0,06 | +36% · −5,4% | **+90% · −19,3%** |
> | 339 | MACD + Quinta + Pullback + Onda ⚠️ | +27% | −6,3% | 2,2 | 0,92 → 1,49 | +22% | −0,04 | +34% · −5,0% | **+108% · −22,9%** |
> | 340 | 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +27% | −6,5% | 2,2 | 0,71 → 1,86 | +13% | 0,00 | +41% · −5,1% | **+151% · −25,7%** |
> | 341 | MACD + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +28% | −7,9% | 1,9 | 0,75 → 1,81 | +15% | 0,09 | +41% · −5,7% | **+199% · −33,0%** |
> | 342 | MACD + Bollinger | +29% | −10,1% | 1,6 | 0,93 → 1,58 | +20% | 0,38 | +47% · −7,9% | **+87% · −16,8%** |
> | 343 | MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +31% | −9,2% | 1,9 | 0,86 → 1,64 | +20% | 0,09 | +42% · −5,9% | **+150% · −25,6%** |
> | 344 | ADX + MACD + Bollinger + Onda | +32% | −8,1% | 2,4 | 0,60 → 1,77 | +19% | 0,26 | +53% · −10,3% | **+206% · −41,4%** |
> | 345 | Quinta + Pullback + Onda ⚠️ | +25% | −5,5% | 2,2 | 0,91 → 1,32 | +21% | −0,08 | +31% · −5,5% | **+71% · −19,2%** |
> | 346 | ADX + Pullback + Onda | +32% | −8,6% | 2,3 | 0,78 → 1,57 | +20% | 0,08 | +50% · −10,4% | **+128% · −34,2%** |
> | 347 | ADX + MACD + Quinta ⚠️ | +29% | −7,5% | 2,2 | 0,76 → 1,65 | +18% | 0,05 | +44% · −11,1% | **+111% · −34,1%** |
> | 348 | 1ª vela 80 + Pullback + Onda ⚠️ | +30% | −8,6% | 2,0 | 0,84 → 1,60 | +20% | 0,04 | +41% · −6,4% | **+109% · −21,5%** |
> | 349 | ADX + 1ª vela 80 + Onda ⚠️ | +35% | −8,6% | 2,5 | 0,46 → 1,74 | +15% | 0,16 | +55% · −13,8% | **+145% · −40,7%** |
> | 350 | Tendência + Onda | +40% | −13,7% | 2,0 | 0,88 → 1,37 | +28% | 0,32 | +57% · −13,1% | **+105% · −26,5%** |
> | 351 | MACD + Tendência + Onda | +37% | −12,7% | 1,9 | 0,86 → 1,43 | +27% | 0,40 | +52% · −11,6% | **+141% · −34,4%** |
> | 352 | IFR + MACD + Onda | +35% | −10,0% | 2,3 | 0,70 → 1,63 | +25% | 0,31 | +51% · −8,8% | **+141% · −27,6%** |
> | 353 | MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +31% | −10,5% | 1,7 | 0,64 → 1,77 | +14% | 0,28 | +47% · −7,8% | **+185% · −33,0%** |
> | 354 | ADX + MACD + Quinta + Onda ⚠️ | +30% | −7,4% | 2,3 | 0,54 → 1,66 | +19% | 0,02 | +44% · −8,7% | **+145% · −37,0%** |
> | 355 | ADX + Bollinger + Onda | +32% | −8,8% | 2,2 | 0,53 → 1,76 | +18% | 0,22 | +57% · −11,5% | **+161% · −35,5%** |
> | 356 | MACD + Quinta + Bollinger + Onda ⚠️ | +27% | −7,2% | 1,9 | 0,66 → 1,67 | +16% | 0,06 | +39% · −5,3% | **+138% · −24,7%** |
> | 357 | MACD + Pullback + Onda | +30% | −9,4% | 1,8 | 0,80 → 1,44 | +24% | 0,10 | +39% · −7,1% | **+98% · −22,8%** |
> | 358 | 1ª vela 80 + Bollinger + Onda ⚠️ | +30% | −9,5% | 1,8 | 0,57 → 1,81 | +11% | 0,23 | +48% · −7,6% | **+139% · −25,6%** |
> | 359 | MACD + Quinta ⚠️ | +24% | −7,1% | 1,6 | 0,81 → 1,31 | +20% | −0,12 | +30% · −4,4% | **+47% · −9,7%** |
> | 360 | MACD + 1ª vela 80 ⚠️ | +32% | −13,7% | 1,4 | 0,71 → 1,56 | +15% | 0,28 | +45% · −9,3% | **+81% · −19,4%** |

> [!example]- Combinações 361 a 381 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 361 | Quinta + Bollinger + Onda ⚠️ | +25% | −6,5% | 1,9 | 0,60 → 1,64 | +14% | −0,07 | +38% · −5,3% | **+98% · −17,6%** |
> | 362 | ADX + Quinta ⚠️ | +28% | −8,8% | 1,7 | 0,68 → 1,51 | +14% | 0,09 | +44% · −13,8% | **+74% · −27,5%** |
> | 363 | ADX + MACD | +35% | −11,8% | 1,9 | 0,60 → 1,59 | +19% | 0,17 | +57% · −17,7% | **+101% · −35,8%** |
> | 364 | Pullback + Onda | +29% | −8,7% | 1,8 | 0,76 → 1,24 | +22% | 0,16 | +38% · −9,5% | **+63% · −19,9%** |
> | 365 | MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +28% | −9,6% | 1,6 | 0,58 → 1,65 | +14% | 0,00 | +38% · −6,4% | **+127% · −29,5%** |
> | 366 | ADX + MACD + Onda | +34% | −10,2% | 2,1 | 0,43 → 1,62 | +19% | 0,18 | +52% · −11,9% | **+134% · −38,6%** |
> | 367 | ADX + Quinta + Onda ⚠️ | +29% | −7,8% | 2,1 | 0,45 → 1,59 | +18% | −0,08 | +44% · −10,8% | **+108% · −30,6%** |
> | 368 | MACD + Bollinger + Onda | +30% | −10,5% | 1,6 | 0,53 → 1,62 | +15% | 0,29 | +46% · −7,6% | **+127% · −24,5%** |
> | 369 | 1ª vela 80 + Quinta + Onda ⚠️ | +27% | −8,5% | 1,7 | 0,49 → 1,61 | +11% | −0,15 | +36% · −6,4% | **+89% · −23,6%** |
> | 370 | 1ª vela 80 ⚠️ | +32% | −12,8% | 1,5 | 0,59 → 1,48 | +9% | — | +47% · −13,6% | **+47% · −13,6%** |
> | 371 | ADX + Onda | +35% | −12,1% | 1,8 | 0,32 → 1,54 | +18% | 0,06 | +57% · −16,1% | **+98% · −33,6%** |
> | 372 | Quinta ⚠️ | +17% | −3,7% | 1,1 | 1,22 → 0,66 | +15% | — | +18% · −2,6% | **+18% · −2,6%** |
> | 373 | MACD + 1ª vela 80 + Onda ⚠️ | +32% | −13,5% | 1,4 | 0,46 → 1,60 | +12% | 0,28 | +44% · −9,1% | **+116% · −29,5%** |
> | 374 | ADX | +38% | −15,4% | 1,6 | 0,45 → 1,42 | +12% | — | +66% · −30,8% | **+66% · −30,8%** |
> | 375 | Bollinger + Onda | +29% | −10,0% | 1,6 | 0,42 → 1,58 | +12% | 0,17 | +48% · −8,5% | **+88% · −18,0%** |
> | 376 | MACD + Quinta + Onda ⚠️ | +27% | −8,9% | 1,6 | 0,45 → 1,45 | +15% | −0,06 | +34% · −6,3% | **+80% · −23,8%** |
> | 377 | 1ª vela 80 + Onda ⚠️ | +32% | −13,8% | 1,4 | 0,34 → 1,55 | +8% | 0,26 | +45% · −11,3% | **+80% · −24,2%** |
> | 378 | MACD | +31% | −16,7% | 1,1 | 0,52 → 1,20 | +21% | — | +40% · −10,5% | **+40% · −10,5%** |
> | 379 | MACD + Onda | +31% | −14,5% | 1,3 | 0,31 → 1,39 | +13% | 0,31 | +41% · −9,8% | **+71% · −23,6%** |
> | 380 | Quinta + Onda ⚠️ | +24% | −8,6% | 1,3 | 0,30 → 1,27 | +12% | −0,38 | +30% · −8,2% | **+48% · −20,0%** |
> | 381 | Onda | +30% | −18,7% | 0,9 | 0,11 → 1,19 | +5% | — | +41% · −19,8% | **+41% · −19,8%** |

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
> - **IFR** e **Onda**: 45% dos dias em que pelo menos um deles operou
> - **MACD** e **1ª vela 80**: 31% dos dias em que pelo menos um deles operou
> - **MACD** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **MACD** e **Pullback**: 17% dos dias em que pelo menos um deles operou
> - **MACD** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **MACD** e **Tendência**: 67% dos dias em que pelo menos um deles operou
> - **MACD** e **Onda**: 51% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Quinta**: 13% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Pullback**: 15% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Bollinger**: 17% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Tendência**: 35% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Onda**: 37% dos dias em que pelo menos um deles operou
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
| 2026* | +45,9% | +55,3% | +34,4% | +31,3% | +7,6% | +21,1% | +18,3% | +85,8% | +44,1% | +35,5% | +31,3% | +102,5% | +11,6% | +5,0% | Rec. 1% |
| **Acumulado no período** | **+390,3%** | **+490,9%** | **+278,9%** | **+298,1%** | **+116,3%** | **+207,8%** | **+208,2%** | **+599,0%** | **+267,3%** | **+307,4%** | **+289,6%** | **+11506,6%** | **+81,5%** | **+60,3%** | **Rec. 1%** |
| **R\$ 10.000 viraram** | **R\$ 49.030** | **R\$ 59.087** | **R\$ 37.888** | **R\$ 39.809** | **R\$ 21.635** | **R\$ 30.782** | **R\$ 30.820** | **R\$ 69.895** | **R\$ 36.729** | **R\$ 40.743** | **R\$ 38.957** | **R\$ 1.160.658** | **R\$ 18.147** | **R\$ 16.029** | |
| **Média ao ano** | **+37,9%** | **+43,2%** | **+30,9%** | **+32,2%** | **+16,9%** | **+25,5%** | **+25,5%** | **+48,1%** | **+30,1%** | **+32,8%** | **+31,6%** | **+161,4%** | **+12,8%** | **+10,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 29/10/2026.

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
> | out/2026 | +6,4% | +14,8% | −2,5% | −3,0% | +2,6% | −0,0% | −1,1% | +16,5% | −6,6% | +3,6% | +4,4% | +14,3% | +1,0% | −9,2% |
> | **Acumulado** | **+390,3%** | **+490,9%** | **+278,9%** | **+298,1%** | **+116,3%** | **+207,8%** | **+208,2%** | **+599,0%** | **+267,3%** | **+307,4%** | **+289,6%** | **+11506,6%** | **+81,5%** | **+60,3%** |

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
| 2026* | +65,6% | +70,6% | +36,3% | +37,2% | +8,9% | +20,5% | +24,5% | +101,8% | +41,2% | +45,0% | +214,4% | +38,1% | +102,5% | +11,6% | +5,0% | Todos ⚠️ |
| **Acumulado no período** | **+1130,0%** | **+1206,6%** | **+437,2%** | **+579,3%** | **+131,5%** | **+299,0%** | **+693,4%** | **+1353,9%** | **+440,0%** | **+654,2%** | **+54226,9%** | **+688,6%** | **+11506,6%** | **+81,5%** | **+60,3%** | **Todos ⚠️** |
| **R\$ 10.000 viraram** | **R\$ 123.000** | **R\$ 130.656** | **R\$ 53.719** | **R\$ 67.935** | **R\$ 23.147** | **R\$ 39.899** | **R\$ 79.339** | **R\$ 145.388** | **R\$ 54.002** | **R\$ 75.418** | **R\$ 5.432.691** | **R\$ 78.859** | **R\$ 1.160.658** | **R\$ 18.147** | **R\$ 16.029** | |
| **Média ao ano** | **+66,1%** | **+68,1%** | **+40,5%** | **+47,3%** | **+18,5%** | **+32,3%** | **+52,0%** | **+71,8%** | **+40,6%** | **+50,4%** | **+257,0%** | **+51,8%** | **+161,4%** | **+12,8%** | **+10,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 29/10/2026.

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
> | out/2026 | +9,1% | +18,7% | −0,6% | −2,5% | +1,9% | +0,2% | −2,0% | +15,2% | −4,4% | +5,3% | +20,8% | +5,3% | +14,3% | +1,0% | −9,2% |
> | **Acumulado** | **+1130,0%** | **+1206,6%** | **+437,2%** | **+579,3%** | **+131,5%** | **+299,0%** | **+693,4%** | **+1353,9%** | **+440,0%** | **+654,2%** | **+54226,9%** | **+688,6%** | **+11506,6%** | **+81,5%** | **+60,3%** |

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +32% | −3% | −5% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +75% | −8% | −11% | −17% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+161%** | **−17%** | −22% | −33% |
| Risco fixo de 2% por operação | 2,00% | +426% | −33% | −40% | −54% |
| Kelly ¼ | 2,95% | +922% | −44% | −56% | −73% |
| Kelly ½ | 5,91% | +2967% | −72% | −84% | −95% |
| Kelly cheio | 11,81% | +1820% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,66% | +310% | −30% | −36% | −51% |
| Larry Williams 5% | 3,32% | +920% | −53% | −60% | −76% |
| Larry Williams 10% | 6,64% | +2354% | −81% | −87% | −97% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros). **Sorteio:** a ordem das operações foi embaralhada 2.000 vezes — a queda de verdade depende da sorte na sequência, e a ordem real foi das mais favoráveis. Planeje pela queda do sorteio, não pela real.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: IFR de Tendência 7,7% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
- **Larry Williams:** no campeonato de 1987 ele usou o Kelly como fração do capital ÷ **margem** por contrato — a conta foi de US\$ 10 mil a ~US\$ 2,1 milhões, caiu para ~US\$ 700 mil e terminou o ano em ~US\$ 1,1 milhão. Depois ele passou a usar **contratos = capital × risco% ÷ maior perda já vista por contrato**, com ~5% (cauteloso), 10–12% (moderado) e 15–18% (agressivo). Esses percentuais eram para poucas operações por ano; estes setups operam muitas vezes por mês e a maior perda deles é ~1,5 vezes o stop típico, então **Larry com 2,5% ≈ arriscar 1,7% por operação** — perto do tamanho sugerido.

### Calculadora de contratos (risco de 1% por operação)

**contratos = capital × 1% ÷ ((stop em pts + 15) × R\$ 0,20)** — arredonde para baixo. Calcule para cada setup, a cada operação, com o capital do momento (assim a posição cresce quando ganha e diminui quando perde).

| Setup | Stop hoje | Risco por contrato | R\$ 10.000 | R\$ 20.000 | R\$ 50.000 | R\$ 100.000 | R\$ 200.000 |
|---|---|---|---|---|---|---|---|
| ADX da Manhã | 257 pts | R\$ 54 | 1,8 | 3,7 | 9,2 | 18,4 | 36,8 |
| IFR de Tendência ⭐ | 342 pts | R\$ 71 | 1,4 | 2,8 | 7,0 | 14,0 | 28,0 |
| MACD na Tendência | 919 pts | R\$ 187 | 0,5 | 1,1 | 2,7 | 5,4 | 10,7 |
| Primeira Vela de 80 Minutos | 688 pts | R\$ 141 | 0,7 | 1,4 | 3,6 | 7,1 | 14,2 |
| Primeira Vela de Quinta | 919 pts | R\$ 187 | 0,5 | 1,1 | 2,7 | 5,4 | 10,7 |
| Pullback na Média ⭐ | 670 pts | R\$ 137 | 0,7 | 1,5 | 3,7 | 7,3 | 14,6 |
| Rompimento da Bollinger ⭐ | 386 pts | R\$ 80 | 1,2 | 2,5 | 6,2 | 12,5 | 25,0 |
| Tendência Forte do Dia | 670 pts | R\$ 137 | 0,7 | 1,5 | 3,7 | 7,3 | 14,6 |
| Vai na Onda | 919 pts | R\$ 187 | 0,5 | 1,1 | 2,7 | 5,4 | 10,7 |

*Stops calculados com o ATR (4.465 pts) e o preço (171.145) de hoje — mudam todo dia. ⭐ = setups da combinação recomendada. Com risco de 0,5%, use a metade. Confira a margem de day trade da sua corretora para o número de contratos.*

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R\$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- **Risco 1%:** cada setup arrisca 1% do capital total em cada operação (contratos = capital × 1% ÷ (stop + custo) em R\$). Se dois setups estiverem posicionados ao mesmo tempo, o risco aberto é de 2%.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
