---
title: Carteira de setups
date: 2026-10-27
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 27/10/2026 08:55 BRT · dados de 01/11/2021 a 26/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 8 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 46.029** (+36% ao ano · pior queda −7% · Sharpe 1,67)
> - CDI: **R\$ 18.119** (+13% ao ano) · Ibovespa: **R\$ 16.732** (+11% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 38.638, +31% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.128.296, +160% ao ano, pior queda −17%** (veja o tamanho de posição).

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| # | Setup | Sharpe | Retorno ÷ queda | Teste ÷ treino | Meses > CDI | Correlação | Op./mês |
|---|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | 1,59 | 4,0 | 150% | 72% | 0,19 | 12,6 |
| 2º | [**Bollinger**](rompimento-da-bollinger) | 1,61 | 3,5 | 150% | 65% | 0,25 | 4,2 |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | 1,10 | 1,6 | 150% | 63% | 0,12 | 7,7 |
| 4º | [**ADX**](adx-da-manha) | 1,03 | 1,6 | 150% | 63% | 0,20 | 29,3 |
| 5º | [**Tendência**](tendencia-forte-do-dia) | 1,28 | 2,1 | 81% | 60% | 0,28 | 28,7 |
| 6º | [**Pullback**](pullback-na-media) | 1,20 | 2,8 | 28% | 60% | −0,06 | 5,0 |
| 7º | [**MACD**](macd-na-tendencia) | 0,79 | 1,0 | 150% | 58% | 0,19 | 15,3 |
| 8º | [**Onda**](vai-na-onda) | 0,70 | 0,9 | 150% | 57% | 0,20 | 19,4 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| # | Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) |
|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | +43% | **+67%** | −7% | **−11%** |
| 2º | [**Bollinger**](rompimento-da-bollinger) | +26% | **+52%** | −4% | **−7%** |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | +31% | **+47%** | −12% | **−14%** |
| 4º | [**ADX**](adx-da-manha) | +37% | **+65%** | −15% | **−31%** |
| 5º | [**Tendência**](tendencia-forte-do-dia) | +46% | **+70%** | −16% | **−24%** |
| 6º | [**Pullback**](pullback-na-media) | +26% | **+32%** | −5% | **−9%** |
| 7º | [**MACD**](macd-na-tendencia) | +26% | **+31%** | −12% | **−11%** |
| 8º | [**Onda**](vai-na-onda) | +29% | **+40%** | −19% | **−20%** |

- **IFR de Tendência:** entra na força medida pelo IFR · 10h–11h e 14h–16h
- **Rompimento da Bollinger:** rompimento da banda de Bollinger a favor da tendência · 10h15–11h e 14h–17h30
- **Primeira Vela de 80 Minutos:** força da primeira vela do dia, alvo longo com stop móvel · entra 10h20
- **ADX da Manhã:** pega o começo da tendência (ADX subindo), stop curto · 10h–11h
- **Tendência Forte do Dia:** segue a tendência já formada (rompimento longe da abertura) · o dia todo, até 17h
- **Pullback na Média:** entra na volta da correção até a média · 10h30–12h30 e 14h45–15h45
- **MACD na Tendência:** tendência do dia confirmada pelo MACD, com break even e stop móvel · 9h–11h30 e 14h–16h
- **Vai na Onda:** segue o fluxo: 3 velas a favor renovando o extremo do dia com volume · 9h45–16h

*Correlação = com os outros setups (baixa é bom para a carteira). Como o ranking é feito: cada setup ganha uma posição em 4 critérios — **Sharpe** (retorno acima do CDI por oscilação), **retorno acima do CDI ÷ pior queda** (quanto rende para cada 1% de queda que você aguenta), **teste ÷ treino** (quanto do resultado por operação de 2021–2023 se manteve em 2024 em diante; 100% = manteve tudo) e **meses acima do CDI**. Vale a média das 4 posições. Correlação baixa com os outros é bom para a carteira, mas não entra na nota de cada setup.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes:

| Perfil | Combinação | 1 contrato: ao ano · queda | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** | Sharpe treino → teste |
|---|---|---|---|---|---|
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | +31% · −2,6% | +52% · −5,1% | **+160% · −17,1%** | 2,34 → 2,11 |
| 📈 Maior retorno | Tendência | +46% · −16,1% | +70% · −23,6% | **+70% · −23,6%** | 1,58 → 1,12 |
| 🛡️ Menor queda | Pullback + Bollinger | +26% · −2,1% | +43% · −4,0% | **+78% · −8,6%** | 2,24 → 1,65 |

*R\$ 10 mil viraram, na recomendada: R\$ 38.638 com 1 contrato por R\$ 10 mil · R\$ 78.027 com 1% dividido entre os setups · **R\$ 1.128.296 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · MACD = MACD na Tendência · 1ª vela 80 = Primeira Vela de 80 Minutos · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

**Por que a recomendada é IFR de Tendência + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios ao mesmo tempo — Sharpe 2,19, rende 7,1× acima do CDI para cada 1% de pior queda, e o Sharpe ficou em 2,34 no treino e 2,11 no teste (não depende de um período só). A correlação média entre os setups dela é 0,01: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com Tendência Forte do Dia, ADX da Manhã, MACD na Tendência, Primeira Vela de 80 Minutos, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR + Pullback + Bollinger ⭐ | +31% | −2,6% | 7,1 | 2,34 → 2,11 | +22% | 0,01 | +52% · −5,1% | **+160% · −17,1%** |
| 2 | IFR + Pullback + 1ª vela 80 + Bollinger | +32% | −3,1% | 6,2 | 2,02 → 2,24 | +25% | 0,02 | +51% · −4,4% | **+230% · −20,4%** |
| 3 | IFR + Pullback + 1ª vela 80 | +34% | −3,0% | 7,1 | 1,84 → 2,04 | +26% | −0,13 | +50% · −4,7% | **+150% · −16,3%** |
| 4 | Tendência + IFR + Pullback + 1ª vela 80 + Bollinger | +35% | −5,0% | 4,4 | 2,09 → 1,94 | +25% | 0,09 | +55% · −6,7% | **+354% · −35,7%** |
| 5 | IFR + Pullback | +34% | −3,5% | 6,1 | 2,15 → 1,80 | +21% | −0,17 | +50% · −5,9% | **+96% · −12,9%** |
| 6 | Pullback + 1ª vela 80 + Bollinger | +28% | −3,3% | 4,6 | 1,78 → 1,98 | +24% | −0,01 | +45% · −4,1% | **+130% · −15,3%** |
| 7 | IFR + Pullback + MACD + Bollinger | +30% | −4,0% | 4,4 | 1,86 → 1,83 | +20% | 0,07 | +47% · −5,4% | **+194% · −23,8%** |
| 8 | ADX + IFR + Pullback + Bollinger | +33% | −4,7% | 4,4 | 1,71 → 2,08 | +21% | 0,14 | +58% · −7,9% | **+256% · −34,2%** |
| 9 | Tendência + Pullback + 1ª vela 80 + Bollinger | +33% | −4,6% | 4,3 | 2,01 → 1,78 | +23% | 0,07 | +52% · −6,5% | **+229% · −28,8%** |
| 10 | Tendência + IFR + Pullback + 1ª vela 80 | +37% | −5,7% | 4,3 | 1,98 → 1,80 | +25% | 0,02 | +56% · −6,9% | **+249% · −30,1%** |
| 11 | Pullback + Bollinger | +26% | −2,1% | 6,1 | 2,24 → 1,65 | +17% | −0,05 | +43% · −4,0% | **+78% · −8,6%** |
| 12 | ADX + IFR + Pullback + 1ª vela 80 + Bollinger | +33% | −4,0% | 5,1 | 1,61 → 2,20 | +23% | 0,10 | +56% · −6,9% | **+338% · −38,7%** |
| 13 | IFR + Bollinger | +34% | −4,8% | 4,4 | 1,70 → 2,04 | +26% | 0,25 | +61% · −7,7% | **+123% · −16,6%** |
| 14 | Tendência + IFR + Pullback + Bollinger | +35% | −5,9% | 3,8 | 2,23 → 1,76 | +22% | 0,14 | +57% · −8,0% | **+265% · −33,2%** |
| 15 | Tendência + ADX + IFR + Pullback + Bollinger | +36% | −6,3% | 3,7 | 1,89 → 1,89 | +25% | 0,19 | +61% · −9,5% | **+375% · −45,8%** |
| 16 | Tendência + ADX + IFR + Pullback + 1ª vela 80 | +38% | −6,1% | 4,1 | 1,71 → 1,91 | +28% | 0,09 | +60% · −8,8% | **+348% · −44,2%** |
| 17 | IFR + Pullback + MACD + 1ª vela 80 + Bollinger | +31% | −4,9% | 3,6 | 1,76 → 2,01 | +23% | 0,08 | +47% · −4,8% | **+270% · −26,9%** |
| 18 | Tendência + IFR + 1ª vela 80 + Bollinger | +37% | −6,5% | 3,7 | 1,79 → 1,90 | +29% | 0,24 | +61% · −8,6% | **+293% · −35,2%** |
| 19 | Tendência + ADX + Pullback + 1ª vela 80 + Bollinger | +34% | −5,5% | 3,8 | 1,72 → 1,90 | +26% | 0,13 | +57% · −8,4% | **+335% · −43,8%** |
| 20 | ADX + IFR + Pullback + 1ª vela 80 | +35% | −4,8% | 4,7 | 1,47 → 2,06 | +22% | 0,02 | +56% · −7,7% | **+237% · −33,5%** |
| 21 | IFR + 1ª vela 80 + Bollinger | +34% | −5,4% | 3,8 | 1,50 → 2,16 | +26% | 0,20 | +57% · −6,4% | **+183% · −20,8%** |
| 22 | ADX + IFR + Pullback + MACD + Bollinger | +32% | −4,9% | 4,0 | 1,55 → 1,96 | +22% | 0,13 | +53% · −7,6% | **+295% · −39,8%** |
| 23 | Tendência + ADX + IFR + Pullback | +39% | −7,3% | 3,6 | 1,79 → 1,76 | +25% | 0,15 | +63% · −10,9% | **+268% · −45,9%** |
| 24 | Tendência + IFR + Pullback + MACD + 1ª vela 80 | +35% | −6,0% | 3,7 | 1,78 → 1,71 | +23% | 0,09 | +51% · −6,7% | **+283% · −35,8%** |
| 25 | Tendência + Pullback + MACD + 1ª vela 80 + Bollinger | +31% | −5,2% | 3,6 | 1,81 → 1,70 | +22% | 0,12 | +48% · −6,0% | **+267% · −33,2%** |
| 26 | Tendência + ADX + IFR + 1ª vela 80 + Bollinger | +37% | −6,8% | 3,6 | 1,54 → 1,98 | +28% | 0,27 | +64% · −10,1% | **+400% · −48,2%** |
| 27 | Tendência + IFR + Pullback | +39% | −7,2% | 3,6 | 2,11 → 1,58 | +21% | 0,09 | +58% · −8,7% | **+179% · −27,9%** |
| 28 | Tendência + Pullback + 1ª vela 80 | +35% | −5,5% | 4,0 | 1,87 → 1,56 | +23% | −0,07 | +51% · −10,2% | **+150% · −30,8%** |
| 29 | ADX + IFR + Pullback | +36% | −6,2% | 3,7 | 1,54 → 1,89 | +20% | 0,06 | +59% · −10,0% | **+172% · −31,8%** |
| 30 | IFR + Pullback + MACD + 1ª vela 80 | +32% | −5,3% | 3,6 | 1,61 → 1,85 | +23% | −0,00 | +45% · −5,2% | **+182% · −23,0%** |
| 31 | Tendência + ADX + Pullback + Bollinger | +34% | −6,7% | 3,2 | 1,81 → 1,73 | +23% | 0,19 | +59% · −11,3% | **+256% · −46,3%** |
| 32 | Tendência + IFR + 1ª vela 80 | +41% | −8,0% | 3,5 | 1,65 → 1,76 | +30% | 0,18 | +63% · −9,6% | **+202% · −29,7%** |
| 33 | Tendência + IFR + Pullback + MACD + Bollinger | +34% | −6,2% | 3,3 | 1,94 → 1,67 | +20% | 0,16 | +52% · −7,6% | **+301% · −38,7%** |
| 34 | ADX + Pullback + 1ª vela 80 + Bollinger | +31% | −4,5% | 4,0 | 1,39 → 2,03 | +21% | 0,10 | +53% · −8,4% | **+219% · −36,2%** |
| 35 | IFR + Pullback + MACD | +32% | −4,8% | 4,0 | 1,68 → 1,60 | +19% | −0,03 | +44% · −6,3% | **+122% · −19,8%** |
| 36 | Tendência + IFR + Bollinger | +39% | −8,3% | 3,1 | 1,89 → 1,72 | +25% | 0,34 | +65% · −11,0% | **+215% · −32,8%** |
| 37 | Tendência + ADX + Pullback + 1ª vela 80 | +36% | −6,4% | 3,6 | 1,59 → 1,76 | +27% | 0,05 | +57% · −10,0% | **+235% · −43,3%** |
| 38 | Tendência + Pullback + Bollinger | +33% | −5,8% | 3,5 | 2,19 → 1,50 | +19% | 0,11 | +53% · −7,5% | **+161% · −24,6%** |
| 39 | Tendência + 1ª vela 80 + Bollinger | +35% | −6,6% | 3,3 | 1,65 → 1,74 | +28% | 0,23 | +58% · −8,4% | **+185% · −27,0%** |
| 40 | ADX + IFR + 1ª vela 80 + Bollinger | +35% | −4,9% | 4,6 | 1,20 → 2,14 | +23% | 0,25 | +62% · −9,3% | **+278% · −39,0%** |
| 41 | Tendência + IFR + MACD + 1ª vela 80 + Bollinger | +35% | −6,7% | 3,3 | 1,59 → 1,79 | +26% | 0,26 | +55% · −8,1% | **+330% · −40,5%** |
| 42 | Tendência + ADX + IFR + Bollinger | +39% | −8,2% | 3,2 | 1,58 → 1,86 | +28% | 0,35 | +68% · −12,0% | **+313% · −45,4%** |
| 43 | ADX + IFR + Pullback + MACD + 1ª vela 80 | +33% | −5,4% | 3,8 | 1,38 → 1,96 | +24% | 0,05 | +52% · −7,0% | **+272% · −38,6%** |
| 44 | Tendência + ADX + IFR + Pullback + MACD | +36% | −7,3% | 3,2 | 1,63 → 1,71 | +23% | 0,15 | +56% · −9,6% | **+300% · −50,8%** |
| 45 | ADX + IFR + Pullback + MACD | +34% | −5,5% | 3,8 | 1,41 → 1,81 | +22% | 0,05 | +52% · −8,1% | **+203% · −35,9%** |
| 46 | IFR + Pullback + 1ª vela 80 + Bollinger + Onda | +32% | −5,0% | 3,8 | 1,29 → 2,00 | +26% | 0,09 | +49% · −4,8% | **+285% · −28,7%** |
| 47 | Tendência + ADX + Pullback + MACD + Bollinger | +33% | −6,5% | 3,1 | 1,65 → 1,70 | +21% | 0,17 | +53% · −9,8% | **+292% · −50,9%** |
| 48 | Tendência + ADX + IFR + 1ª vela 80 | +40% | −8,0% | 3,5 | 1,42 → 1,88 | +30% | 0,22 | +67% · −11,3% | **+290% · −43,7%** |
| 49 | IFR | +43% | −7,5% | 4,0 | 1,40 → 1,73 | +28% | — | +67% · −11,2% | **+67% · −11,2%** |
| 50 | ADX + IFR + Bollinger | +36% | −5,8% | 4,0 | 1,21 → 2,03 | +21% | 0,34 | +66% · −11,3% | **+206% · −34,5%** |
| 51 | Tendência + ADX + Pullback + MACD + 1ª vela 80 | +34% | −6,3% | 3,4 | 1,50 → 1,73 | +24% | 0,09 | +52% · −8,6% | **+270% · −47,9%** |
| 52 | IFR + 1ª vela 80 | +37% | −6,4% | 3,8 | 1,26 → 1,96 | +28% | 0,06 | +58% · −6,5% | **+114% · −14,1%** |
| 53 | Tendência + IFR + Pullback + Bollinger + Onda | +35% | −7,0% | 3,1 | 1,54 → 1,73 | +29% | 0,17 | +54% · −8,0% | **+317% · −40,6%** |
| 54 | Pullback + 1ª vela 80 | +29% | −3,8% | 4,3 | 1,49 → 1,57 | +24% | −0,29 | +40% · −8,7% | **+72% · −17,9%** |
| 55 | Pullback + MACD + 1ª vela 80 + Bollinger | +28% | −5,3% | 2,8 | 1,61 → 1,85 | +21% | 0,07 | +42% · −4,1% | **+163% · −20,1%** |
| 56 | ADX + Pullback + MACD + 1ª vela 80 + Bollinger | +30% | −5,3% | 3,2 | 1,34 → 1,98 | +22% | 0,11 | +49% · −7,7% | **+258% · −41,1%** |
| 57 | Tendência + Pullback + MACD + 1ª vela 80 | +33% | −6,0% | 3,3 | 1,68 → 1,54 | +21% | 0,06 | +46% · −8,3% | **+181% · −34,1%** |
| 58 | Tendência + IFR + Pullback + MACD | +35% | −7,3% | 3,1 | 1,82 → 1,52 | +19% | 0,13 | +51% · −8,5% | **+208% · −33,4%** |
| 59 | Bollinger | +26% | −3,6% | 3,5 | 1,37 → 1,78 | +18% | — | +52% · −6,9% | **+52% · −6,9%** |
| 60 | Tendência + ADX + 1ª vela 80 + Bollinger | +36% | −7,3% | 3,2 | 1,39 → 1,87 | +28% | 0,27 | +63% · −11,0% | **+278% · −43,8%** |
| 61 | Tendência + IFR + Pullback + 1ª vela 80 + Onda | +36% | −6,8% | 3,4 | 1,41 → 1,74 | +31% | 0,11 | +53% · −7,2% | **+294% · −37,8%** |
| 62 | ADX + Pullback + Bollinger | +30% | −5,8% | 3,0 | 1,49 → 1,82 | +19% | 0,14 | +54% · −9,9% | **+156% · −31,7%** |
| 63 | IFR + Pullback + Bollinger + Onda | +31% | −5,4% | 3,5 | 1,31 → 1,87 | +25% | 0,09 | +49% · −5,6% | **+210% · −25,9%** |
| 64 | ADX + IFR + MACD + 1ª vela 80 + Bollinger | +33% | −5,6% | 3,6 | 1,15 → 2,03 | +24% | 0,24 | +56% · −8,6% | **+316% · −43,7%** |
| 65 | Pullback + MACD + Bollinger | +26% | −4,6% | 2,9 | 1,76 → 1,55 | +16% | 0,03 | +39% · −4,5% | **+106% · −14,3%** |
| 66 | ADX + Pullback + MACD + Bollinger | +29% | −5,4% | 3,1 | 1,39 → 1,81 | +21% | 0,11 | +48% · −8,8% | **+189% · −36,9%** |
| 67 | Tendência + IFR + MACD + 1ª vela 80 | +37% | −7,8% | 3,1 | 1,47 → 1,67 | +26% | 0,24 | +55% · −8,7% | **+233% · −35,4%** |
| 68 | Tendência + ADX + IFR + MACD + 1ª vela 80 | +38% | −7,8% | 3,2 | 1,33 → 1,81 | +28% | 0,23 | +59% · −10,0% | **+322% · −47,8%** |
| 69 | ADX + IFR + Pullback + Bollinger + Onda | +33% | −6,0% | 3,4 | 1,19 → 1,94 | +23% | 0,14 | +55% · −7,7% | **+306% · −39,6%** |
| 70 | Tendência + ADX + IFR + MACD + Bollinger | +36% | −8,0% | 2,9 | 1,45 → 1,79 | +25% | 0,31 | +61% · −10,8% | **+347% · −50,4%** |
| 71 | ADX + IFR + 1ª vela 80 | +38% | −6,0% | 4,2 | 1,03 → 2,00 | +23% | 0,18 | +64% · −10,7% | **+190% · −33,8%** |
| 72 | Tendência + ADX + IFR | +43% | −10,1% | 3,0 | 1,46 → 1,73 | +30% | 0,35 | +72% · −14,8% | **+220% · −45,2%** |
| 73 | Tendência + Pullback + MACD + Bollinger | +31% | −6,2% | 3,0 | 1,88 → 1,47 | +18% | 0,15 | +47% · −7,5% | **+193% · −31,3%** |
| 74 | Tendência + IFR + MACD + Bollinger | +35% | −8,1% | 2,8 | 1,61 → 1,63 | +23% | 0,33 | +56% · −9,7% | **+247% · −38,3%** |
| 75 | Tendência + Pullback + 1ª vela 80 + Bollinger + Onda | +32% | −6,2% | 3,2 | 1,37 → 1,72 | +27% | 0,14 | +50% · −6,5% | **+279% · −35,2%** |
| 76 | Tendência + IFR | +45% | −11,3% | 2,8 | 1,74 → 1,53 | +26% | 0,41 | +70% · −13,5% | **+141% · −27,0%** |
| 77 | Tendência + ADX + Pullback | +37% | −8,8% | 2,8 | 1,68 → 1,54 | +23% | 0,12 | +60% · −16,1% | **+172% · −46,6%** |
| 78 | Tendência + MACD + 1ª vela 80 + Bollinger | +33% | −6,8% | 2,9 | 1,47 → 1,66 | +23% | 0,28 | +51% · −7,8% | **+218% · −32,7%** |
| 79 | Tendência + ADX + MACD + 1ª vela 80 + Bollinger | +34% | −7,0% | 3,0 | 1,31 → 1,82 | +25% | 0,27 | +56% · −9,8% | **+315% · −48,3%** |
| 80 | IFR + Pullback + MACD + Bollinger + Onda | +30% | −5,2% | 3,4 | 1,23 → 1,79 | +26% | 0,11 | +46% · −5,6% | **+245% · −31,8%** |
| 81 | ADX + IFR + Pullback + 1ª vela 80 + Onda | +34% | −5,7% | 3,8 | 1,07 → 1,92 | +24% | 0,08 | +54% · −7,2% | **+279% · −37,9%** |
| 82 | Tendência + IFR + 1ª vela 80 + Bollinger + Onda | +36% | −7,5% | 3,1 | 1,27 → 1,84 | +28% | 0,24 | +57% · −8,6% | **+345% · −42,3%** |
| 83 | ADX + Pullback + 1ª vela 80 | +32% | −5,6% | 3,5 | 1,19 → 1,80 | +20% | −0,04 | +52% · −9,5% | **+142% · −30,9%** |
| 84 | IFR + Pullback + 1ª vela 80 + Onda | +33% | −5,6% | 3,6 | 1,14 → 1,84 | +26% | 0,04 | +48% · −5,1% | **+193% · −22,8%** |
| 85 | ADX + IFR + MACD + Bollinger | +33% | −6,4% | 3,2 | 1,13 → 1,91 | +23% | 0,27 | +57% · −10,1% | **+240% · −40,0%** |
| 86 | Tendência + ADX + IFR + Pullback + Onda | +37% | −8,1% | 3,0 | 1,33 → 1,73 | +28% | 0,17 | +58% · −10,0% | **+306% · −49,0%** |
| 87 | Tendência + ADX + Bollinger | +37% | −8,7% | 2,8 | 1,43 → 1,70 | +27% | 0,38 | +67% · −15,3% | **+208% · −45,6%** |
| 88 | Tendência + ADX + Pullback + MACD | +34% | −7,6% | 2,9 | 1,53 → 1,55 | +21% | 0,11 | +53% · −13,1% | **+202% · −51,1%** |
| 89 | IFR + MACD + 1ª vela 80 + Bollinger | +32% | −7,1% | 2,7 | 1,32 → 1,94 | +22% | 0,24 | +51% · −6,4% | **+218% · −27,5%** |
| 90 | Tendência + 1ª vela 80 | +39% | −8,9% | 3,0 | 1,46 → 1,52 | +30% | 0,06 | +60% · −12,3% | **+116% · −24,9%** |
| 91 | Tendência + IFR + Pullback + Onda | +37% | −8,2% | 2,9 | 1,42 → 1,58 | +31% | 0,16 | +54% · −8,6% | **+220% · −35,5%** |
| 92 | IFR + MACD + Bollinger | +31% | −6,7% | 2,8 | 1,32 → 1,75 | +23% | 0,26 | +51% · −7,3% | **+152% · −23,4%** |
| 93 | ADX + IFR + 1ª vela 80 + Bollinger + Onda | +34% | −5,8% | 3,7 | 0,89 → 2,02 | +23% | 0,22 | +58% · −8,3% | **+326% · −42,7%** |
| 94 | ADX + IFR + MACD + 1ª vela 80 | +35% | −6,6% | 3,4 | 1,00 → 1,92 | +24% | 0,19 | +56% · −9,3% | **+221% · −38,8%** |
| 95 | Tendência + ADX + 1ª vela 80 | +39% | −9,0% | 3,0 | 1,24 → 1,73 | +30% | 0,17 | +65% · −13,6% | **+191% · −42,0%** |
| 96 | Tendência + Bollinger | +36% | −9,2% | 2,5 | 1,79 → 1,46 | +23% | 0,36 | +63% · −11,8% | **+125% · −24,0%** |
| 97 | Tendência + ADX + IFR + MACD | +39% | −9,5% | 2,7 | 1,33 → 1,67 | +26% | 0,29 | +62% · −12,4% | **+248% · −50,4%** |
| 98 | Tendência + Pullback | +36% | −7,6% | 3,1 | 2,03 → 1,18 | +16% | 0,03 | +52% · −12,0% | **+97% · −25,6%** |
| 99 | ADX + Pullback + MACD + 1ª vela 80 | +31% | −6,3% | 2,9 | 1,18 → 1,81 | +22% | 0,01 | +47% · −8,3% | **+174% · −36,1%** |
| 100 | Tendência + ADX + IFR + Bollinger + Onda | +37% | −8,8% | 2,8 | 1,19 → 1,82 | +28% | 0,29 | +63% · −11,3% | **+358% · −51,6%** |
| 101 | Tendência + ADX + Pullback + Bollinger + Onda | +34% | −7,8% | 2,7 | 1,30 → 1,71 | +27% | 0,19 | +55% · −9,4% | **+300% · −47,8%** |
| 102 | ADX + IFR | +41% | −8,5% | 3,3 | 1,00 → 1,83 | +20% | 0,32 | +71% · −14,3% | **+134% · −29,5%** |
| 103 | Tendência + ADX + IFR + 1ª vela 80 + Onda | +39% | −8,6% | 3,0 | 1,09 → 1,82 | +29% | 0,22 | +62% · −10,5% | **+326% · −49,4%** |
| 104 | Tendência + ADX + Pullback + 1ª vela 80 + Onda | +35% | −7,5% | 3,0 | 1,18 → 1,72 | +28% | 0,12 | +54% · −8,9% | **+273% · −46,0%** |
| 105 | ADX + Pullback + 1ª vela 80 + Bollinger + Onda | +31% | −5,7% | 3,2 | 0,98 → 1,91 | +22% | 0,13 | +51% · −7,6% | **+266% · −39,0%** |
| 106 | IFR + Pullback + MACD + 1ª vela 80 + Onda | +32% | −6,3% | 3,0 | 1,11 → 1,79 | +24% | 0,08 | +45% · −4,8% | **+226% · −28,8%** |
| 107 | ADX + IFR + Pullback + Onda | +35% | −7,1% | 3,1 | 1,06 → 1,80 | +22% | 0,10 | +55% · −8,6% | **+211% · −34,5%** |
| 108 | Tendência + IFR + Bollinger + Onda | +37% | −9,0% | 2,6 | 1,27 → 1,71 | +32% | 0,29 | +59% · −10,3% | **+264% · −40,1%** |
| 109 | Tendência + IFR + MACD | +38% | −10,0% | 2,6 | 1,48 → 1,47 | +22% | 0,35 | +57% · −11,0% | **+167% · −33,0%** |
| 110 | Tendência + ADX + MACD + Bollinger | +34% | −8,4% | 2,6 | 1,31 → 1,67 | +24% | 0,32 | +58% · −12,8% | **+241% · −50,8%** |
| 111 | ADX + IFR + Pullback + MACD + Onda | +33% | −6,4% | 3,2 | 1,03 → 1,77 | +24% | 0,09 | +50% · −7,6% | **+243% · −39,8%** |
| 112 | Tendência + IFR + Pullback + MACD + Onda | +35% | −8,0% | 2,7 | 1,34 → 1,56 | +27% | 0,16 | +49% · −8,1% | **+250% · −40,8%** |
| 113 | Tendência + Pullback + 1ª vela 80 + Onda | +34% | −7,2% | 2,9 | 1,24 → 1,56 | +29% | 0,10 | +49% · −7,6% | **+190% · −32,4%** |
| 114 | IFR + Pullback + Onda | +33% | −6,6% | 3,1 | 1,13 → 1,65 | +26% | 0,06 | +48% · −7,3% | **+134% · −23,4%** |
| 115 | Pullback + MACD + 1ª vela 80 | +28% | −6,1% | 2,5 | 1,39 → 1,59 | +21% | −0,05 | +38% · −6,2% | **+98% · −20,6%** |
| 116 | Tendência + IFR + 1ª vela 80 + Onda | +38% | −8,8% | 2,9 | 1,15 → 1,72 | +30% | 0,23 | +58% · −9,3% | **+244% · −37,3%** |
| 117 | Tendência + Pullback + Bollinger + Onda | +32% | −7,6% | 2,6 | 1,38 → 1,54 | +29% | 0,17 | +50% · −7,7% | **+207% · −32,8%** |
| 118 | Tendência + ADX + MACD + 1ª vela 80 | +36% | −8,2% | 2,8 | 1,18 → 1,70 | +26% | 0,21 | +57% · −11,1% | **+222% · −47,3%** |
| 119 | IFR + 1ª vela 80 + Bollinger + Onda | +33% | −7,0% | 2,9 | 0,93 → 1,97 | +21% | 0,21 | +53% · −6,4% | **+233% · −28,2%** |
| 120 | ADX + 1ª vela 80 + Bollinger | +32% | −6,4% | 3,0 | 0,86 → 1,97 | +19% | 0,30 | +59% · −12,1% | **+174% · −36,7%** |
| 121 | IFR + Pullback + MACD + Onda | +32% | −6,1% | 3,1 | 1,08 → 1,62 | +26% | 0,07 | +44% · −6,1% | **+162% · −27,0%** |
| 122 | Tendência + ADX + 1ª vela 80 + Bollinger + Onda | +35% | −7,8% | 2,9 | 1,03 → 1,82 | +24% | 0,25 | +59% · −10,0% | **+322% · −47,9%** |
| 123 | Tendência + Pullback + MACD + Bollinger + Onda | +31% | −7,2% | 2,6 | 1,31 → 1,54 | +26% | 0,18 | +47% · −7,3% | **+240% · −38,3%** |
| 124 | Tendência + Pullback + MACD + 1ª vela 80 + Onda | +32% | −7,1% | 2,8 | 1,20 → 1,57 | +25% | 0,13 | +46% · −6,6% | **+221% · −35,7%** |
| 125 | Tendência + MACD + 1ª vela 80 | +35% | −8,4% | 2,6 | 1,31 → 1,49 | +25% | 0,25 | +50% · −9,7% | **+143% · −29,4%** |
| 126 | ADX + IFR + 1ª vela 80 + Onda | +36% | −6,8% | 3,5 | 0,76 → 1,89 | +24% | 0,18 | +59% · −9,7% | **+229% · −39,3%** |
| 127 | ADX + IFR + Bollinger + Onda | +35% | −7,2% | 3,1 | 0,85 → 1,92 | +23% | 0,24 | +60% · −9,8% | **+252% · −39,2%** |
| 128 | Tendência + Pullback + MACD | +33% | −7,6% | 2,6 | 1,73 → 1,25 | +16% | 0,09 | +45% · −10,5% | **+123% · −31,4%** |
| 129 | ADX + IFR + MACD | +36% | −7,7% | 3,0 | 0,96 → 1,76 | +23% | 0,21 | +58% · −11,6% | **+161% · −35,6%** |
| 130 | IFR + MACD + 1ª vela 80 | +34% | −8,3% | 2,5 | 1,13 → 1,77 | +23% | 0,19 | +49% · −6,5% | **+142% · −21,3%** |
| 131 | ADX + MACD + 1ª vela 80 + Bollinger | +31% | −6,5% | 2,8 | 0,89 → 1,93 | +17% | 0,26 | +52% · −10,3% | **+208% · −41,3%** |
| 132 | IFR + Bollinger + Onda | +33% | −6,8% | 3,0 | 0,89 → 1,84 | +24% | 0,20 | +55% · −7,9% | **+167% · −25,4%** |
| 133 | Tendência + IFR + MACD + Bollinger + Onda | +35% | −8,7% | 2,5 | 1,19 → 1,66 | +28% | 0,29 | +54% · −9,4% | **+296% · −45,0%** |
| 134 | Tendência + MACD + Bollinger | +33% | −8,7% | 2,3 | 1,49 → 1,42 | +20% | 0,35 | +52% · −9,8% | **+153% · −30,2%** |
| 135 | ADX + Pullback + MACD | +30% | −6,6% | 2,7 | 1,19 → 1,59 | +20% | −0,02 | +46% · −11,2% | **+120% · −36,8%** |
| 136 | Tendência + IFR + MACD + 1ª vela 80 + Onda | +36% | −8,5% | 2,7 | 1,10 → 1,68 | +26% | 0,25 | +53% · −8,6% | **+274% · −42,5%** |
| 137 | Tendência + 1ª vela 80 + Bollinger + Onda | +34% | −7,8% | 2,7 | 1,08 → 1,70 | +22% | 0,26 | +54% · −8,4% | **+231% · −34,7%** |
| 138 | ADX + IFR + MACD + 1ª vela 80 + Onda | +34% | −6,9% | 3,1 | 0,78 → 1,86 | +21% | 0,18 | +53% · −8,2% | **+260% · −41,8%** |
| 139 | 1ª vela 80 + Bollinger | +29% | −6,6% | 2,4 | 1,03 → 1,89 | +14% | 0,29 | +50% · −7,5% | **+96% · −16,3%** |
| 140 | Tendência + ADX + IFR + Onda | +40% | −10,4% | 2,6 | 1,08 → 1,70 | +30% | 0,28 | +65% · −12,7% | **+256% · −48,2%** |
| 141 | Tendência + ADX | +43% | −12,3% | 2,4 | 1,26 → 1,51 | +29% | 0,32 | +72% · −24,1% | **+136% · −45,8%** |
| 142 | ADX + IFR + MACD + Bollinger + Onda | +33% | −7,0% | 2,9 | 0,85 → 1,87 | +23% | 0,22 | +54% · −9,0% | **+286% · −44,0%** |
| 143 | Pullback + 1ª vela 80 + Bollinger + Onda | +29% | −6,3% | 2,6 | 1,03 → 1,80 | +20% | 0,10 | +44% · −5,1% | **+176% · −22,2%** |
| 144 | Pullback + MACD + 1ª vela 80 + Bollinger + Onda | +28% | −6,3% | 2,5 | 1,03 → 1,79 | +18% | 0,12 | +42% · −4,8% | **+211% · −26,2%** |
| 145 | Tendência + ADX + Pullback + MACD + Onda | +34% | −8,3% | 2,5 | 1,14 → 1,58 | +28% | 0,14 | +51% · −10,0% | **+237% · −53,7%** |
| 146 | ADX + Pullback + MACD + Bollinger + Onda | +30% | −6,4% | 2,6 | 0,96 → 1,77 | +22% | 0,12 | +47% · −7,6% | **+234% · −39,7%** |
| 147 | Tendência + ADX + Pullback + Onda | +36% | −9,3% | 2,5 | 1,18 → 1,56 | +27% | 0,16 | +55% · −11,6% | **+208% · −49,2%** |
| 148 | Tendência + MACD + 1ª vela 80 + Bollinger + Onda | +32% | −7,7% | 2,6 | 1,05 → 1,67 | +20% | 0,27 | +50% · −7,9% | **+265% · −40,0%** |
| 149 | IFR + MACD + 1ª vela 80 + Bollinger + Onda | +32% | −7,6% | 2,5 | 0,92 → 1,88 | +19% | 0,23 | +49% · −6,3% | **+269% · −33,9%** |
| 150 | ADX + Pullback + Bollinger + Onda | +30% | −6,9% | 2,6 | 0,96 → 1,76 | +21% | 0,14 | +51% · −8,9% | **+199% · −35,1%** |
| 151 | Tendência + ADX + IFR + MACD + Onda | +37% | −9,8% | 2,5 | 1,04 → 1,68 | +29% | 0,25 | +58% · −11,3% | **+283% · −52,9%** |
| 152 | ADX + Pullback + MACD + 1ª vela 80 + Onda | +31% | −6,4% | 2,8 | 0,86 → 1,76 | +20% | 0,08 | +46% · −7,4% | **+212% · −39,0%** |
| 153 | Tendência + IFR + Onda | +40% | −11,3% | 2,4 | 1,14 → 1,56 | +35% | 0,32 | +61% · −11,8% | **+179% · −34,9%** |
| 154 | ADX + Pullback | +32% | −8,7% | 2,2 | 1,24 → 1,48 | +16% | 0,02 | +52% · −14,8% | **+93% · −31,2%** |
| 155 | Tendência + ADX + MACD | +37% | −10,5% | 2,3 | 1,17 → 1,51 | +24% | 0,26 | +59% · −18,1% | **+162% · −50,9%** |
| 156 | ADX + Pullback + 1ª vela 80 + Onda | +32% | −6,7% | 2,9 | 0,83 → 1,74 | +22% | 0,06 | +50% · −8,4% | **+179% · −35,1%** |
| 157 | Tendência + ADX + 1ª vela 80 + Onda | +37% | −9,1% | 2,7 | 0,91 → 1,69 | +25% | 0,21 | +59% · −11,1% | **+226% · −45,1%** |
| 158 | Tendência + ADX + Bollinger + Onda | +36% | −9,4% | 2,4 | 1,01 → 1,69 | +28% | 0,29 | +61% · −11,8% | **+250% · −47,0%** |
| 159 | Tendência + Pullback + Onda | +34% | −9,6% | 2,3 | 1,24 → 1,34 | +26% | 0,19 | +49% · −8,8% | **+133% · −27,1%** |
| 160 | Tendência + Pullback + MACD + Onda | +32% | −8,5% | 2,3 | 1,18 → 1,38 | +26% | 0,16 | +45% · −8,1% | **+159% · −33,1%** |
| 161 | IFR + MACD + Bollinger + Onda | +31% | −7,4% | 2,5 | 0,87 → 1,75 | +21% | 0,22 | +49% · −7,4% | **+198% · −31,3%** |
| 162 | IFR + MACD | +34% | −8,9% | 2,4 | 1,08 → 1,52 | +22% | 0,24 | +49% · −8,6% | **+90% · −17,4%** |
| 163 | MACD + 1ª vela 80 + Bollinger | +28% | −8,3% | 1,8 | 1,00 → 1,77 | +13% | 0,29 | +44% · −6,8% | **+125% · −22,1%** |
| 164 | Tendência + ADX + MACD + Bollinger + Onda | +34% | −9,0% | 2,3 | 0,99 → 1,68 | +24% | 0,27 | +55% · −10,6% | **+282% · −52,2%** |
| 165 | IFR + 1ª vela 80 + Onda | +35% | −8,3% | 2,7 | 0,76 → 1,80 | +21% | 0,18 | +53% · −7,3% | **+153% · −23,2%** |
| 166 | ADX + MACD + 1ª vela 80 + Bollinger + Onda | +31% | −6,6% | 2,7 | 0,67 → 1,87 | +15% | 0,23 | +50% · −8,5% | **+253% · −44,1%** |
| 167 | Tendência + ADX + MACD + 1ª vela 80 + Onda | +35% | −8,8% | 2,5 | 0,91 → 1,69 | +22% | 0,22 | +54% · −9,9% | **+256% · −50,1%** |
| 168 | Tendência + IFR + MACD + Onda | +37% | −10,3% | 2,3 | 1,08 → 1,53 | +30% | 0,30 | +53% · −10,3% | **+206% · −40,3%** |
| 169 | ADX + IFR + Onda | +38% | −9,0% | 2,8 | 0,70 → 1,77 | +23% | 0,19 | +61% · −11,5% | **+170% · −34,0%** |
| 170 | ADX + 1ª vela 80 + Bollinger + Onda | +32% | −7,0% | 2,7 | 0,62 → 1,88 | +16% | 0,24 | +55% · −10,6% | **+218% · −42,6%** |
| 171 | Pullback + MACD + Bollinger + Onda | +27% | −6,3% | 2,3 | 0,99 → 1,60 | +20% | 0,10 | +40% · −5,6% | **+149% · −24,1%** |
| 172 | ADX + IFR + MACD + Onda | +35% | −8,2% | 2,7 | 0,72 → 1,74 | +24% | 0,18 | +54% · −9,8% | **+198% · −39,3%** |
| 173 | Tendência + Bollinger + Onda | +34% | −9,9% | 2,2 | 1,05 → 1,52 | +26% | 0,30 | +56% · −10,6% | **+167% · −32,2%** |
| 174 | Tendência + MACD | +36% | −11,9% | 2,0 | 1,30 → 1,19 | +18% | 0,40 | +51% · −14,9% | **+92% · −29,1%** |
| 175 | Tendência + 1ª vela 80 + Onda | +37% | −9,7% | 2,5 | 0,93 → 1,54 | +23% | 0,24 | +54% · −9,4% | **+153% · −29,1%** |
| 176 | Pullback + Bollinger + Onda | +28% | −6,4% | 2,3 | 1,00 → 1,58 | +23% | 0,10 | +43% · −6,2% | **+118% · −20,0%** |
| 177 | ADX + Bollinger | +32% | −7,9% | 2,4 | 0,79 → 1,76 | +18% | 0,46 | +63% · −16,1% | **+119% · −32,1%** |
| 178 | Tendência | +46% | −16,1% | 2,1 | 1,58 → 1,12 | +22% | — | +70% · −23,6% | **+70% · −23,6%** |
| 179 | Pullback + MACD | +26% | −6,1% | 2,2 | 1,48 → 1,12 | +13% | −0,15 | +33% · −7,4% | **+54% · −15,3%** |
| 180 | Pullback | +26% | −4,6% | 2,8 | 1,87 → 0,63 | +11% | — | +32% · −9,1% | **+32% · −9,1%** |
| 181 | Tendência + MACD + Bollinger + Onda | +32% | −9,3% | 2,1 | 1,01 → 1,51 | +22% | 0,30 | +50% · −9,4% | **+196% · −37,7%** |
| 182 | ADX + MACD + Bollinger | +30% | −7,9% | 2,2 | 0,83 → 1,76 | +20% | 0,28 | +53% · −12,5% | **+149% · −37,1%** |
| 183 | Tendência + MACD + 1ª vela 80 + Onda | +34% | −9,1% | 2,3 | 0,92 → 1,54 | +20% | 0,26 | +48% · −8,5% | **+180% · −34,9%** |
| 184 | ADX + MACD + 1ª vela 80 | +32% | −8,1% | 2,4 | 0,70 → 1,76 | +17% | 0,16 | +51% · −12,0% | **+135% · −36,3%** |
| 185 | IFR + Onda | +37% | −9,2% | 2,6 | 0,68 → 1,62 | +27% | 0,19 | +55% · −11,1% | **+102% · −22,7%** |
| 186 | IFR + MACD + 1ª vela 80 + Onda | +33% | −8,8% | 2,3 | 0,77 → 1,75 | +19% | 0,21 | +48% · −6,7% | **+183% · −28,3%** |
| 187 | ADX + 1ª vela 80 | +35% | −8,8% | 2,5 | 0,62 → 1,74 | +20% | 0,14 | +60% · −15,9% | **+108% · −32,0%** |
| 188 | ADX + Pullback + MACD + Onda | +31% | −7,6% | 2,4 | 0,81 → 1,61 | +22% | 0,06 | +45% · −8,4% | **+155% · −39,7%** |
| 189 | Pullback + MACD + 1ª vela 80 + Onda | +29% | −7,3% | 2,2 | 0,86 → 1,60 | +18% | 0,08 | +39% · −5,6% | **+136% · −23,5%** |
| 190 | Tendência + ADX + Onda | +39% | −11,8% | 2,2 | 0,87 → 1,54 | +30% | 0,25 | +62% · −16,3% | **+169% · −48,4%** |
| 191 | Tendência + ADX + MACD + Onda | +36% | −10,6% | 2,2 | 0,87 → 1,55 | +25% | 0,23 | +55% · −13,3% | **+196% · −52,9%** |
| 192 | ADX + MACD + Bollinger + Onda | +31% | −7,7% | 2,3 | 0,59 → 1,75 | +16% | 0,21 | +51% · −9,6% | **+190% · −39,8%** |
| 193 | MACD + Bollinger | +26% | −7,8% | 1,7 | 0,93 → 1,46 | +14% | 0,31 | +42% · −7,3% | **+76% · −15,0%** |
| 194 | ADX + MACD + 1ª vela 80 + Onda | +32% | −7,9% | 2,5 | 0,52 → 1,73 | +14% | 0,17 | +49% · −10,3% | **+171% · −42,2%** |
| 195 | Pullback + 1ª vela 80 + Onda | +30% | −7,7% | 2,2 | 0,84 → 1,56 | +20% | 0,06 | +41% · −6,4% | **+107% · −21,5%** |
| 196 | ADX + Pullback + Onda | +32% | −8,6% | 2,2 | 0,78 → 1,54 | +20% | 0,08 | +49% · −10,4% | **+127% · −34,2%** |
| 197 | IFR + MACD + Onda | +33% | −8,9% | 2,3 | 0,70 → 1,58 | +21% | 0,20 | +47% · −8,2% | **+127% · −25,5%** |
| 198 | ADX + 1ª vela 80 + Onda | +34% | −8,6% | 2,4 | 0,46 → 1,71 | +15% | 0,17 | +54% · −13,8% | **+142% · −40,7%** |
| 199 | MACD + 1ª vela 80 + Bollinger + Onda | +29% | −8,6% | 1,9 | 0,64 → 1,75 | +11% | 0,25 | +44% · −6,5% | **+169% · −28,0%** |
| 200 | Tendência + Onda | +38% | −13,7% | 1,9 | 0,88 → 1,30 | +28% | 0,36 | +56% · −13,1% | **+102% · −26,5%** |
| 201 | Tendência + MACD + Onda | +34% | −11,6% | 1,9 | 0,87 → 1,35 | +23% | 0,31 | +48% · −10,7% | **+126% · −32,5%** |
| 202 | Pullback + MACD + Onda | +28% | −7,5% | 2,0 | 0,80 → 1,35 | +20% | 0,06 | +36% · −6,8% | **+87% · −22,2%** |
| 203 | ADX + Bollinger + Onda | +32% | −8,8% | 2,2 | 0,53 → 1,73 | +18% | 0,23 | +57% · −11,5% | **+159% · −35,5%** |
| 204 | 1ª vela 80 + Bollinger + Onda | +30% | −8,6% | 1,9 | 0,57 → 1,77 | +11% | 0,25 | +48% · −7,3% | **+138% · −24,8%** |
| 205 | MACD + 1ª vela 80 | +29% | −10,8% | 1,5 | 0,70 → 1,50 | +10% | 0,28 | +40% · −7,2% | **+70% · −15,5%** |
| 206 | Pullback + Onda | +28% | −8,7% | 1,8 | 0,76 → 1,21 | +22% | 0,16 | +37% · −9,5% | **+63% · −19,9%** |
| 207 | ADX + MACD | +32% | −10,8% | 1,8 | 0,57 → 1,53 | +20% | 0,06 | +51% · −18,4% | **+89% · −36,8%** |
| 208 | ADX + MACD + Onda | +32% | −9,6% | 2,0 | 0,41 → 1,58 | +16% | 0,10 | +49% · −12,0% | **+121% · −39,0%** |
| 209 | MACD + Bollinger + Onda | +28% | −8,7% | 1,7 | 0,52 → 1,57 | +12% | 0,22 | +42% · −6,9% | **+114% · −22,3%** |
| 210 | 1ª vela 80 | +31% | −11,7% | 1,6 | 0,59 → 1,44 | +9% | — | +47% · −13,6% | **+47% · −13,6%** |
| 211 | MACD + 1ª vela 80 + Onda | +30% | −10,6% | 1,6 | 0,44 → 1,56 | +9% | 0,25 | +41% · −7,9% | **+103% · −26,7%** |
| 212 | ADX + Onda | +34% | −12,1% | 1,8 | 0,32 → 1,51 | +18% | 0,06 | +56% · −16,1% | **+96% · −33,6%** |
| 213 | ADX | +37% | −15,4% | 1,6 | 0,45 → 1,41 | +12% | — | +65% · −30,8% | **+65% · −30,8%** |
| 214 | Bollinger + Onda | +28% | −10,0% | 1,5 | 0,42 → 1,55 | +12% | 0,17 | +48% · −8,5% | **+88% · −18,0%** |
| 215 | MACD | +26% | −12,2% | 1,0 | 0,46 → 0,98 | +10% | — | +31% · −10,5% | **+31% · −10,5%** |
| 216 | 1ª vela 80 + Onda | +31% | −12,5% | 1,5 | 0,34 → 1,51 | +8% | 0,29 | +45% · −11,3% | **+79% · −24,2%** |
| 217 | MACD + Onda | +28% | −11,7% | 1,3 | 0,28 → 1,31 | +8% | 0,18 | +37% · −9,1% | **+61% · −22,3%** |
| 218 | Onda | +29% | −18,7% | 0,9 | 0,11 → 1,15 | +5% | — | +40% · −19,8% | **+40% · −19,8%** |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+11%* | *−20,9%* | — | — | — | — | — | — |

*Ao ano e pior queda com 1 contrato por R\$ 10 mil (capital dividido). Correlação = média entre os setups da combinação. Retorno ÷ queda = retorno ao ano acima do CDI dividido pela pior queda (2 = rendeu por ano o dobro da pior queda). **1% dividido** = 1% de risco repartido entre os setups (0,5% cada com 2, 0,33% com 3, 0,25% com 4): o mesmo risco total em todas as linhas, a comparação mais justa entre combinações. **1% por setup** = cada setup arrisca 1% do capital total em cada operação (veja abaixo) — com mais setups, mais risco aberto ao mesmo tempo, por isso as combinações grandes rendem e caem mais.*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

![Correlação mensal entre os setups](setups/img/carteira_correlacao.png)

*Correlação do resultado mensal.*

> [!example]- Quantas vezes operaram no mesmo dia (clique para abrir)
> - **Tendência** e **ADX**: 65% dos dias em que pelo menos um deles operou
> - **Tendência** e **IFR**: 50% dos dias em que pelo menos um deles operou
> - **Tendência** e **Pullback**: 27% dos dias em que pelo menos um deles operou
> - **Tendência** e **MACD**: 67% dos dias em que pelo menos um deles operou
> - **Tendência** e **1ª vela 80**: 35% dos dias em que pelo menos um deles operou
> - **Tendência** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **Tendência** e **Onda**: 65% dos dias em que pelo menos um deles operou
> - **ADX** e **IFR**: 48% dos dias em que pelo menos um deles operou
> - **ADX** e **Pullback**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **MACD**: 54% dos dias em que pelo menos um deles operou
> - **ADX** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **ADX** e **Bollinger**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **Onda**: 65% dos dias em que pelo menos um deles operou
> - **IFR** e **Pullback**: 10% dos dias em que pelo menos um deles operou
> - **IFR** e **MACD**: 55% dos dias em que pelo menos um deles operou
> - **IFR** e **1ª vela 80**: 29% dos dias em que pelo menos um deles operou
> - **IFR** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **IFR** e **Onda**: 45% dos dias em que pelo menos um deles operou
> - **Pullback** e **MACD**: 18% dos dias em que pelo menos um deles operou
> - **Pullback** e **1ª vela 80**: 15% dos dias em que pelo menos um deles operou
> - **Pullback** e **Bollinger**: 12% dos dias em que pelo menos um deles operou
> - **Pullback** e **Onda**: 22% dos dias em que pelo menos um deles operou
> - **MACD** e **1ª vela 80**: 31% dos dias em que pelo menos um deles operou
> - **MACD** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **MACD** e **Onda**: 51% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Bollinger**: 17% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Onda**: 36% dos dias em que pelo menos um deles operou
> - **Bollinger** e **Onda**: 18% dos dias em que pelo menos um deles operou

![Quedas da carteira](setups/img/carteira_queda.png)

## Ano a ano

*Com 1 contrato por R\$ 10 mil (capital dividido). Todos = os 8 setups juntos · Recomendada = IFR + Pullback + Bollinger · Rec. 1% = a recomendada arriscando 1% por operação.*

| Ano | Tendência | ADX | IFR | Pullback | MACD | 1ª vela 80 | Bollinger | Onda | Todos | Recomendada | Rec. 1% | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | −1,7% | +2,1% | −3,6% | +7,5% | +1,4% | +7,7% | +4,0% | −3,9% | +1,2% | +2,6% | +3,6% | +1,3% | −0,7% | 1ª vela 80 |
| 2022 | +58,4% | +29,8% | +51,5% | +47,1% | +10,2% | +9,1% | +18,2% | +5,0% | +39,3% | +38,6% | +258,9% | +12,3% | +4,7% | Rec. 1% |
| 2023 | +50,3% | +12,0% | +28,3% | +19,7% | +27,8% | +27,7% | +22,8% | +26,9% | +27,7% | +23,8% | +97,7% | +13,0% | +22,3% | Rec. 1% |
| 2024 | +21,6% | +36,5% | +30,7% | +10,8% | +14,2% | +37,8% | +23,1% | +62,1% | +22,9% | +21,5% | +105,5% | +10,8% | −10,4% | Rec. 1% |
| 2025 | +32,2% | +65,9% | +55,3% | +21,2% | +42,0% | +46,7% | +40,2% | +22,7% | +43,4% | +38,7% | +279,5% | +14,2% | +34,0% | Rec. 1% |
| 2026* | +71,9% | +43,1% | +52,0% | +20,9% | +32,9% | +26,9% | +18,1% | +39,9% | +45,2% | +30,2% | +96,8% | +11,4% | +9,6% | Rec. 1% |
| **Acumulado no período** | **+546,7%** | **+381,2%** | **+478,4%** | **+207,4%** | **+207,7%** | **+284,8%** | **+207,7%** | **+256,6%** | **+360,3%** | **+286,4%** | **+11183,0%** | **+81,2%** | **+67,3%** | **Rec. 1%** |
| **R\$ 10.000 viraram** | **R\$ 64.671** | **R\$ 48.116** | **R\$ 57.840** | **R\$ 30.735** | **R\$ 30.766** | **R\$ 38.481** | **R\$ 30.773** | **R\$ 35.662** | **R\$ 46.029** | **R\$ 38.638** | **R\$ 1.128.296** | **R\$ 18.119** | **R\$ 16.732** | |
| **Média ao ano** | **+46,0%** | **+37,5%** | **+42,7%** | **+25,5%** | **+25,6%** | **+31,4%** | **+25,6%** | **+29,4%** | **+36,2%** | **+31,5%** | **+160,5%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | Tendência | ADX | IFR | Pullback | MACD | 1ª vela 80 | Bollinger | Onda | Todos | Recomendada | Rec. 1% | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | −2,9% | +1,3% | −1,9% | +2,6% | +1,2% | +1,9% | +2,8% | −8,9% | +0,1% | +1,2% | +1,8% | +0,6% | −3,4% |
> | dez/2021 | +1,2% | +0,8% | −1,8% | +4,8% | +0,1% | +5,6% | +1,1% | +5,5% | +1,1% | +1,4% | +1,8% | +0,7% | +2,9% |
> | jan/2022 | −0,1% | +2,7% | +6,4% | +5,1% | −0,3% | +2,1% | +2,0% | −0,7% | +2,8% | +4,6% | +27,2% | +0,7% | +7,0% |
> | fev/2022 | −1,1% | −1,1% | −2,6% | +2,7% | −1,9% | −0,0% | +0,5% | +1,1% | −0,8% | +0,2% | −3,3% | +0,8% | +0,9% |
> | mar/2022 | +10,1% | +4,5% | +7,8% | +2,6% | +6,1% | −3,1% | +3,3% | +9,0% | +6,3% | +4,6% | +24,7% | +0,9% | +6,1% |
> | abr/2022 | +4,8% | −4,1% | +0,6% | +2,2% | +0,0% | −0,9% | +3,2% | −2,0% | +0,7% | +2,0% | +10,5% | +0,8% | −10,1% |
> | mai/2022 | −1,2% | +6,6% | +2,0% | +2,2% | +0,7% | +13,8% | +0,2% | +0,4% | +2,1% | +1,5% | +2,8% | +1,0% | +3,2% |
> | jun/2022 | +3,3% | −1,2% | +3,5% | +3,6% | +1,4% | −4,0% | +0,7% | +0,1% | +2,2% | +2,7% | +9,8% | +1,0% | −11,5% |
> | jul/2022 | −0,6% | −2,9% | +1,0% | +2,5% | +1,1% | −0,2% | +0,5% | −5,0% | +0,3% | +1,4% | +2,6% | +1,0% | +4,7% |
> | ago/2022 | +12,6% | +12,3% | +11,5% | +4,7% | +0,7% | +6,7% | +3,6% | +10,3% | +8,3% | +6,6% | +39,6% | +1,2% | +6,2% |
> | set/2022 | +8,3% | −1,7% | −1,2% | +2,8% | +5,8% | −1,0% | +0,3% | −3,0% | +2,8% | +0,6% | −3,7% | +1,1% | +0,5% |
> | out/2022 | +4,1% | +6,3% | +6,2% | +4,4% | −0,8% | −2,9% | +1,7% | −1,5% | +4,1% | +4,1% | +17,3% | +1,0% | +5,5% |
> | nov/2022 | +0,3% | −1,0% | +1,7% | +6,8% | −4,0% | −3,1% | +2,4% | +4,5% | +0,8% | +3,6% | +10,1% | +1,0% | −3,1% |
> | dez/2022 | +7,6% | +7,2% | +6,2% | −0,2% | +1,5% | +2,8% | −1,4% | −6,8% | +4,5% | +1,5% | +5,2% | +1,1% | −2,4% |
> | jan/2023 | +14,1% | −0,1% | +2,0% | +3,3% | +4,6% | +4,3% | +5,7% | +7,2% | +4,7% | +3,7% | +17,6% | +1,1% | +3,4% |
> | fev/2023 | +7,4% | +7,9% | +1,4% | −1,4% | −0,2% | +1,3% | +1,6% | −9,5% | +3,0% | +0,5% | −0,1% | +0,9% | −7,5% |
> | mar/2023 | +3,1% | −2,9% | +0,4% | +2,3% | +4,2% | +1,7% | +0,8% | −3,7% | +1,4% | +1,2% | −0,2% | +1,2% | −2,9% |
> | abr/2023 | −2,0% | +7,4% | +2,2% | +0,3% | −2,9% | −0,7% | −0,6% | +1,4% | +1,0% | +0,6% | −1,7% | +0,9% | +2,5% |
> | mai/2023 | −2,2% | +3,9% | +0,7% | +4,8% | +2,1% | +4,3% | +0,5% | +1,7% | +1,9% | +2,0% | +4,3% | +1,1% | +3,7% |
> | jun/2023 | +10,0% | −4,6% | +1,3% | +0,7% | +2,1% | +3,0% | +4,9% | +7,4% | +1,8% | +2,3% | +12,1% | +1,1% | +9,0% |
> | jul/2023 | +4,8% | +3,2% | +5,9% | +0,1% | +8,9% | +5,8% | +2,0% | −1,7% | +4,6% | +2,7% | +11,8% | +1,1% | +3,3% |
> | ago/2023 | +2,9% | +0,6% | +5,1% | +1,0% | +1,0% | −3,6% | +0,5% | +5,6% | +2,1% | +2,2% | +6,8% | +1,1% | −5,1% |
> | set/2023 | +0,4% | −1,6% | +0,1% | +0,9% | +1,4% | −0,8% | +3,6% | −3,5% | +0,3% | +1,6% | +8,1% | +1,0% | +0,7% |
> | out/2023 | +0,5% | +1,0% | +3,6% | +3,0% | +2,2% | +1,2% | +0,6% | +6,1% | +2,1% | +2,4% | +9,2% | +1,0% | −2,9% |
> | nov/2023 | +2,7% | +3,4% | +2,1% | +2,4% | +0,3% | +9,6% | +1,6% | +5,7% | +2,2% | +2,1% | +8,7% | +0,9% | +12,5% |
> | dez/2023 | +1,1% | −5,7% | +0,6% | +0,7% | +1,6% | −0,7% | −0,3% | +8,9% | −0,4% | +0,3% | −4,1% | +0,9% | +5,4% |
> | jan/2024 | +5,6% | +10,5% | −0,9% | +1,4% | +1,3% | +7,5% | +3,6% | +4,0% | +3,6% | +1,4% | +6,5% | +1,0% | −4,8% |
> | fev/2024 | +9,9% | +7,2% | +5,8% | −0,1% | +7,3% | +1,8% | +1,2% | +2,8% | +6,0% | +2,3% | +10,3% | +0,8% | +1,0% |
> | mar/2024 | +1,7% | −5,6% | +1,5% | +2,1% | −1,3% | +0,8% | +0,0% | −1,3% | −0,3% | +1,2% | +1,9% | +0,8% | −0,7% |
> | abr/2024 | −7,4% | +3,2% | +5,1% | +0,5% | −0,4% | +2,8% | +2,2% | +5,2% | +0,2% | +2,6% | +11,3% | +0,9% | −1,7% |
> | mai/2024 | −0,3% | −4,0% | −1,4% | −0,6% | −0,8% | +4,6% | +1,0% | +0,8% | −1,4% | −0,3% | −5,6% | +0,8% | −3,0% |
> | jun/2024 | −0,1% | −0,9% | +1,3% | +2,7% | +2,4% | +1,5% | +1,0% | +0,5% | +1,1% | +1,7% | +6,4% | +0,8% | +1,5% |
> | jul/2024 | −1,1% | −1,9% | +3,6% | +0,4% | −2,1% | +3,6% | +1,1% | +7,1% | −0,2% | +1,7% | +5,9% | +0,9% | +3,0% |
> | ago/2024 | +2,7% | +4,7% | +2,1% | +0,1% | +4,1% | +6,2% | +3,2% | +3,4% | +2,8% | +1,8% | +9,6% | +0,9% | +6,5% |
> | set/2024 | +4,8% | +2,2% | +2,2% | +6,2% | −0,5% | +0,8% | +1,9% | +10,5% | +3,0% | +3,4% | +17,3% | +0,8% | −3,1% |
> | out/2024 | −2,5% | +6,2% | +1,4% | −1,4% | +1,9% | −1,7% | +2,1% | +0,6% | +1,1% | +0,7% | +0,9% | +0,9% | −1,6% |
> | nov/2024 | +0,1% | +2,3% | +4,5% | −2,0% | −0,8% | +2,5% | +1,9% | +5,7% | +0,8% | +1,5% | +4,8% | +0,8% | −3,1% |
> | dez/2024 | +7,4% | +9,0% | +2,2% | +1,2% | +2,7% | +2,2% | +1,9% | +10,7% | +4,5% | +1,8% | +6,7% | +0,8% | −4,3% |
> | jan/2025 | +11,9% | +8,6% | +5,3% | +1,3% | +7,5% | +6,4% | +2,9% | +8,5% | +7,0% | +3,2% | +15,3% | +1,0% | +4,9% |
> | fev/2025 | +4,5% | +5,5% | +6,0% | +3,2% | +2,4% | +2,1% | +2,0% | +5,4% | +4,3% | +3,8% | +17,5% | +1,0% | −2,6% |
> | mar/2025 | +8,4% | +7,3% | −0,4% | −0,5% | +2,9% | +5,2% | +6,0% | +1,4% | +3,5% | +1,7% | +10,7% | +1,0% | +6,1% |
> | abr/2025 | −6,7% | +0,7% | +0,1% | +0,3% | −7,1% | +1,7% | −0,8% | −7,0% | −2,5% | −0,1% | −5,1% | +1,1% | +3,7% |
> | mai/2025 | +5,4% | +10,5% | +6,8% | +2,0% | +3,8% | +5,9% | +4,6% | +8,2% | +5,7% | +4,5% | +23,6% | +1,1% | +1,5% |
> | jun/2025 | −4,5% | +2,0% | +2,3% | +3,8% | +0,9% | +0,2% | +1,1% | +2,0% | +0,9% | +2,4% | +7,7% | +1,1% | +1,3% |
> | jul/2025 | −0,9% | +4,0% | +0,9% | +2,9% | +3,3% | +2,5% | +2,3% | −1,4% | +2,1% | +2,0% | +6,2% | +1,3% | −4,2% |
> | ago/2025 | +6,9% | +8,2% | +14,6% | −0,7% | +14,7% | +6,8% | +8,5% | +1,5% | +8,7% | +7,4% | +44,6% | +1,2% | +6,3% |
> | set/2025 | −2,4% | +3,8% | −3,5% | +1,6% | +0,4% | +2,9% | +1,3% | +2,8% | −0,0% | −0,2% | −5,3% | +1,2% | +3,4% |
> | out/2025 | −2,9% | +5,1% | +2,1% | +3,6% | +4,2% | +1,4% | +3,2% | −0,0% | +2,4% | +3,0% | +12,3% | +1,3% | +2,3% |
> | nov/2025 | +7,8% | +7,3% | +5,9% | −0,8% | +4,3% | +5,5% | +3,0% | −1,9% | +4,9% | +2,7% | +10,1% | +1,1% | +6,4% |
> | dez/2025 | +2,5% | −9,7% | +5,7% | +2,9% | −0,3% | −1,2% | +0,6% | +2,2% | +0,2% | +3,1% | +11,6% | +1,1% | +1,3% |
> | jan/2026 | +11,3% | +7,3% | +4,8% | −0,2% | +6,6% | +5,6% | +5,8% | +0,9% | +6,0% | +3,5% | +14,1% | +1,2% | +12,6% |
> | fev/2026 | −6,6% | −10,0% | +1,6% | −2,0% | +8,0% | +13,8% | +0,1% | +3,9% | −1,9% | −0,1% | −1,9% | +1,0% | +4,1% |
> | mar/2026 | +15,3% | +1,9% | +1,2% | +5,3% | +8,1% | −1,7% | +0,5% | +15,5% | +6,4% | +2,4% | +3,5% | +1,2% | −0,7% |
> | abr/2026 | +5,8% | +23,4% | +7,0% | +2,2% | −3,5% | +5,1% | +9,5% | +5,0% | +6,8% | +6,3% | +24,1% | +1,1% | −0,1% |
> | mai/2026 | −2,8% | −1,8% | +5,1% | +0,4% | +5,4% | −1,8% | −0,9% | −4,6% | +1,3% | +1,6% | +1,6% | +1,1% | −7,2% |
> | jun/2026 | −0,5% | −2,9% | −2,6% | +3,4% | −2,7% | −0,4% | −0,9% | −2,7% | −1,0% | −0,1% | −5,4% | +1,1% | −1,0% |
> | jul/2026 | +13,5% | −0,1% | +8,9% | +0,3% | +1,9% | +10,1% | +0,2% | +27,4% | +4,9% | +3,1% | +8,5% | +1,2% | +3,5% |
> | ago/2026 | +9,9% | +1,9% | +5,8% | +4,1% | +8,6% | +4,8% | +3,1% | +1,7% | +6,1% | +4,4% | +14,4% | +1,1% | −0,3% |
> | set/2026 | +4,2% | +16,4% | −0,6% | +6,0% | +3,0% | −3,5% | +1,2% | +1,0% | +5,9% | +2,2% | +3,4% | +1,1% | +5,0% |
> | out/2026 | +7,8% | +4,4% | +12,4% | −0,2% | −5,4% | −6,2% | −1,2% | −9,3% | +3,8% | +3,5% | +11,1% | +0,8% | −5,2% |
> | **Acumulado** | **+546,7%** | **+381,2%** | **+478,4%** | **+207,4%** | **+207,7%** | **+284,8%** | **+207,7%** | **+256,6%** | **+360,3%** | **+286,4%** | **+11183,0%** | **+81,2%** | **+67,3%** |

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = IFR + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **Todos ⚠️** = os 8 setups com 1% cada: até 8% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| Ano | Tendência | ADX | IFR | Pullback | MACD | 1ª vela 80 | Bollinger | Onda | Todos ÷ | Todos ⚠️ | Recomendada ÷ | Recomendada | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | −2,9% | +2,0% | −9,3% | +10,2% | +1,2% | +10,2% | +6,4% | −3,7% | +0,5% | −5,3% | +2,2% | +3,6% | +1,3% | −0,7% | Pullback |
| 2022 | +94,7% | +51,0% | +108,3% | +70,5% | +13,3% | +7,2% | +30,1% | +8,2% | +69,4% | +480,8% | +68,9% | +258,9% | +12,3% | +4,7% | Todos ⚠️ |
| 2023 | +78,7% | +7,4% | +45,0% | +24,7% | +32,8% | +36,6% | +40,6% | +36,6% | +39,1% | +136,3% | +37,8% | +97,7% | +13,0% | +22,3% | Todos ⚠️ |
| 2024 | +31,5% | +71,5% | +48,1% | +9,6% | +18,4% | +73,1% | +56,8% | +97,1% | +36,5% | +134,0% | +37,8% | +105,5% | +10,8% | −10,4% | Todos ⚠️ |
| 2025 | +62,2% | +161,6% | +88,9% | +29,0% | +62,3% | +77,3% | +108,7% | +36,3% | +80,2% | +644,0% | +74,2% | +279,5% | +14,2% | +34,0% | Todos ⚠️ |
| 2026* | +89,7% | +60,5% | +65,8% | +20,3% | +31,9% | +33,6% | +24,3% | +38,8% | +55,4% | +314,8% | +36,6% | +96,8% | +11,4% | +9,6% | Todos ⚠️ |
| **Acumulado no período** | **+1266,9%** | **+1092,6%** | **+1170,1%** | **+298,4%** | **+286,2%** | **+561,2%** | **+692,2%** | **+430,8%** | **+804,9%** | **+93801,7%** | **+680,3%** | **+11183,0%** | **+81,2%** | **+67,3%** | **Todos ⚠️** |
| **R\$ 10.000 viraram** | **R\$ 136.688** | **R\$ 119.255** | **R\$ 127.013** | **R\$ 39.838** | **R\$ 38.621** | **R\$ 66.119** | **R\$ 79.218** | **R\$ 53.080** | **R\$ 90.487** | **R\$ 9.390.166** | **R\$ 78.027** | **R\$ 1.128.296** | **R\$ 18.119** | **R\$ 16.732** | |
| **Média ao ano** | **+69,9%** | **+65,2%** | **+67,3%** | **+32,3%** | **+31,5%** | **+46,6%** | **+52,1%** | **+40,2%** | **+56,2%** | **+300,1%** | **+51,6%** | **+160,5%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

> [!example]- Mês a mês arriscando 1% por operação (clique para abrir)
> | Mês | Tendência | ADX | IFR | Pullback | MACD | 1ª vela 80 | Bollinger | Onda | Todos ÷ | Todos ⚠️ | Recomendada ÷ | Recomendada | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | −3,9% | +2,1% | −4,8% | +3,0% | +1,1% | +2,2% | +5,1% | −8,4% | −0,3% | −5,2% | +1,1% | +1,8% | +0,6% | −3,4% |
> | dez/2021 | +1,1% | −0,0% | −4,7% | +7,0% | +0,1% | +7,8% | +1,2% | +5,1% | +0,9% | −0,1% | +1,1% | +1,8% | +0,7% | +2,9% |
> | jan/2022 | −0,2% | +5,7% | +13,6% | +8,7% | −0,5% | +3,2% | +4,8% | −0,7% | +5,7% | +23,9% | +9,1% | +27,2% | +0,7% | +7,0% |
> | fev/2022 | −2,5% | −4,6% | −6,1% | +4,7% | −2,7% | −0,8% | −0,1% | +2,0% | −2,2% | −14,3% | −0,6% | −3,3% | +0,8% | +0,9% |
> | mar/2022 | +16,3% | +10,4% | +15,7% | +3,6% | +7,5% | −5,0% | +6,3% | +10,8% | +10,9% | +55,6% | +8,5% | +24,7% | +0,9% | +6,1% |
> | abr/2022 | +8,2% | −12,3% | +0,6% | +3,4% | −0,4% | −2,2% | +8,2% | −3,4% | −0,1% | −5,7% | +4,1% | +10,5% | +0,8% | −10,1% |
> | mai/2022 | −2,5% | +16,7% | +2,9% | +3,0% | +0,4% | +17,3% | −1,0% | +1,3% | +4,2% | +14,5% | +1,7% | +2,8% | +1,0% | +3,2% |
> | jun/2022 | +4,9% | −5,5% | +6,8% | +4,7% | +1,7% | −6,6% | +0,2% | −0,2% | +2,7% | +7,2% | +4,0% | +9,8% | +1,0% | −11,5% |
> | jul/2022 | −1,1% | −11,1% | +0,9% | +4,1% | +1,6% | −1,6% | +0,3% | −6,9% | −1,1% | −11,2% | +1,8% | +2,6% | +1,0% | +4,7% |
> | ago/2022 | +22,4% | +32,9% | +23,5% | +7,5% | +0,6% | +10,8% | +8,0% | +12,6% | +17,3% | +97,2% | +13,0% | +39,6% | +1,2% | +6,2% |
> | set/2022 | +11,7% | −7,1% | −3,9% | +3,4% | +6,3% | −1,9% | −0,9% | −2,9% | +2,1% | +3,1% | −0,5% | −3,7% | +1,1% | +0,5% |
> | out/2022 | +5,3% | +14,5% | +11,0% | +5,7% | −0,5% | −4,0% | +2,4% | −0,9% | +7,4% | +29,7% | +6,5% | +17,3% | +1,0% | +5,5% |
> | nov/2022 | +0,4% | −5,2% | +2,2% | +6,5% | −2,7% | −3,0% | +3,3% | +3,6% | +0,4% | −3,9% | +4,1% | +10,1% | +1,0% | −3,1% |
> | dez/2022 | +8,9% | +17,7% | +12,3% | −0,4% | +1,7% | +3,3% | −3,9% | −5,5% | +8,3% | +35,0% | +2,6% | +5,2% | +1,1% | −2,4% |
> | jan/2023 | +18,3% | −2,8% | +2,8% | +4,4% | +4,7% | +5,1% | +12,1% | +7,3% | +5,5% | +21,4% | +6,5% | +17,6% | +1,1% | +3,4% |
> | fev/2023 | +11,1% | +20,2% | +1,8% | −2,6% | −0,2% | +1,4% | +2,6% | −10,6% | +5,9% | +26,0% | +0,6% | −0,1% | +0,9% | −7,5% |
> | mar/2023 | +4,6% | −11,3% | −0,6% | +2,9% | +4,9% | +1,8% | −0,1% | −4,3% | +0,2% | −6,4% | +0,8% | −0,2% | +1,2% | −2,9% |
> | abr/2023 | −3,5% | +20,2% | +3,3% | −0,1% | −3,4% | −1,3% | −3,1% | +1,7% | +3,2% | +7,8% | +0,2% | −1,7% | +0,9% | +2,5% |
> | mai/2023 | −4,6% | +8,6% | +0,5% | +7,3% | +2,3% | +6,8% | −0,8% | +1,7% | +3,0% | +6,5% | +2,4% | +4,3% | +1,1% | +3,7% |
> | jun/2023 | +17,7% | −13,7% | +1,6% | +0,3% | +2,4% | +4,7% | +12,5% | +10,4% | +1,4% | +0,6% | +4,8% | +12,1% | +1,1% | +9,0% |
> | jul/2023 | +7,7% | +5,8% | +10,5% | −0,5% | +11,0% | +9,2% | +4,0% | −2,1% | +7,0% | +31,1% | +4,6% | +11,8% | +1,1% | +3,3% |
> | ago/2023 | +4,4% | −0,7% | +9,0% | +0,9% | +1,1% | −6,8% | −0,8% | +6,8% | +3,1% | +8,6% | +3,1% | +6,8% | +1,1% | −5,1% |
> | set/2023 | +0,3% | −5,5% | −0,7% | +0,8% | +1,8% | −2,2% | +10,0% | −5,8% | −0,6% | −7,9% | +3,4% | +8,1% | +1,0% | +0,7% |
> | out/2023 | +0,0% | +0,7% | +6,3% | +5,0% | +2,7% | +1,2% | −0,2% | +8,1% | +3,1% | +10,7% | +3,7% | +9,2% | +1,0% | −2,9% |
> | nov/2023 | +4,0% | +7,3% | +3,5% | +4,0% | +0,0% | +15,9% | +3,1% | +6,8% | +3,9% | +13,9% | +3,6% | +8,7% | +0,9% | +12,5% |
> | dez/2023 | +2,3% | −14,2% | +0,4% | +0,4% | +2,2% | −2,4% | −3,1% | +14,6% | −1,9% | −13,6% | −0,7% | −4,1% | +0,9% | +5,4% |
> | jan/2024 | +9,7% | +24,2% | −2,3% | +1,3% | +1,9% | +14,6% | +9,7% | +5,3% | +6,8% | +30,9% | +2,9% | +6,5% | +1,0% | −4,8% |
> | fev/2024 | +18,8% | +16,0% | +9,8% | −1,0% | +10,0% | +2,9% | +3,0% | +3,8% | +10,7% | +55,2% | +4,0% | +10,3% | +0,8% | +1,0% |
> | mar/2024 | +2,9% | −14,1% | +2,0% | +3,8% | −2,7% | +0,6% | −2,2% | −2,7% | −1,8% | −12,9% | +1,2% | +1,9% | +0,8% | −0,7% |
> | abr/2024 | −13,6% | +6,2% | +8,5% | +0,4% | −0,3% | +3,8% | +4,3% | +7,0% | +0,1% | −5,8% | +4,4% | +11,3% | +0,9% | −1,7% |
> | mai/2024 | −1,1% | −10,5% | −3,2% | −2,2% | −1,1% | +8,9% | +1,3% | +1,2% | −3,6% | −20,4% | −1,3% | −5,6% | +0,8% | −3,0% |
> | jun/2024 | −0,9% | −3,9% | +1,7% | +4,3% | +3,6% | +3,1% | +1,9% | −0,4% | +1,1% | +1,0% | +2,7% | +6,4% | +0,8% | +1,5% |
> | jul/2024 | −2,5% | −6,0% | +5,8% | +0,0% | −3,7% | +8,6% | +2,0% | +14,0% | −1,3% | −11,3% | +2,6% | +5,9% | +0,9% | +3,0% |
> | ago/2024 | +5,4% | +9,3% | +2,8% | −0,8% | +6,3% | +11,5% | +9,5% | +5,0% | +4,7% | +18,8% | +3,8% | +9,6% | +0,9% | +6,5% |
> | set/2024 | +8,8% | +3,4% | +3,1% | +11,4% | −0,7% | +1,4% | +4,1% | +15,9% | +5,3% | +21,4% | +6,2% | +17,3% | +0,8% | −3,1% |
> | out/2024 | −6,1% | +13,3% | +1,7% | −3,8% | +2,5% | −4,2% | +5,1% | +1,1% | +1,4% | +1,5% | +1,0% | +0,9% | +0,9% | −1,6% |
> | nov/2024 | −0,7% | +3,8% | +7,4% | −4,6% | −1,0% | +3,3% | +4,1% | +8,8% | +1,1% | −1,9% | +2,3% | +4,8% | +0,8% | −3,1% |
> | dez/2024 | +11,1% | +21,3% | +3,5% | +1,2% | +2,9% | +3,1% | +3,7% | +12,6% | +7,9% | +37,0% | +2,8% | +6,7% | +0,8% | −4,3% |
> | jan/2025 | +21,4% | +19,5% | +9,1% | +1,4% | +10,3% | +10,2% | +6,8% | +11,4% | +12,4% | +63,6% | +5,9% | +15,3% | +1,0% | +4,9% |
> | fev/2025 | +7,2% | +11,8% | +10,1% | +5,0% | +2,8% | +2,9% | +3,9% | +7,1% | +7,5% | +32,4% | +6,5% | +17,5% | +1,0% | −2,6% |
> | mar/2025 | +13,2% | +16,4% | −1,4% | −1,2% | +3,5% | +8,0% | +15,8% | +2,3% | +6,1% | +25,3% | +4,3% | +10,7% | +1,0% | +6,1% |
> | abr/2025 | −9,0% | +0,4% | −0,8% | +0,7% | −5,3% | +2,6% | −2,9% | −4,8% | −2,7% | −17,7% | −1,0% | −5,1% | +1,1% | +3,7% |
> | mai/2025 | +10,3% | +22,7% | +10,9% | +2,7% | +4,8% | +9,8% | +11,2% | +10,4% | +10,3% | +48,5% | +8,4% | +23,6% | +1,1% | +1,5% |
> | jun/2025 | −7,0% | +2,5% | +3,0% | +5,7% | +1,1% | +0,1% | +1,3% | +2,6% | +1,2% | −0,7% | +3,4% | +7,7% | +1,1% | +1,3% |
> | jul/2025 | −2,3% | +6,9% | +0,4% | +4,3% | +4,1% | +3,0% | +4,3% | −1,8% | +2,8% | +5,4% | +3,0% | +6,2% | +1,3% | −4,2% |
> | ago/2025 | +10,2% | +17,5% | +24,8% | −1,8% | +17,1% | +9,7% | +21,6% | +1,5% | +13,5% | +71,7% | +14,4% | +44,6% | +1,2% | +6,3% |
> | set/2025 | −5,1% | +6,4% | −6,4% | +1,9% | +0,1% | +4,0% | +1,7% | +3,8% | −0,6% | −8,7% | −1,0% | −5,3% | +1,2% | +3,4% |
> | out/2025 | −6,2% | +8,9% | +2,6% | +5,2% | +5,0% | +1,3% | +6,7% | −0,3% | +3,2% | +8,9% | +4,9% | +12,3% | +1,3% | +2,3% |
> | nov/2025 | +14,5% | +13,4% | +8,4% | −2,4% | +6,1% | +8,8% | +6,5% | −2,4% | +8,0% | +34,4% | +4,1% | +10,1% | +1,1% | +6,4% |
> | dez/2025 | +7,5% | −19,1% | +7,8% | +4,8% | +1,4% | −0,9% | +1,3% | +2,8% | +0,1% | −6,6% | +4,7% | +11,6% | +1,1% | +1,3% |
> | jan/2026 | +16,8% | +12,6% | +6,2% | −1,0% | +6,7% | +8,1% | +11,4% | +3,2% | +8,4% | +33,4% | +5,6% | +14,1% | +1,2% | +12,6% |
> | fev/2026 | −5,4% | −16,9% | +1,8% | −1,3% | +5,2% | +11,6% | −0,4% | +2,9% | −3,5% | −20,3% | +0,1% | −1,9% | +1,0% | +4,1% |
> | mar/2026 | +13,4% | +2,0% | +1,1% | +4,6% | +5,6% | −1,0% | +0,2% | +9,6% | +5,6% | +20,5% | +2,1% | +3,5% | +1,2% | −0,7% |
> | abr/2026 | +6,6% | +38,5% | +8,5% | +2,6% | −1,9% | +5,9% | +14,4% | +5,2% | +10,3% | +50,7% | +8,5% | +24,1% | +1,1% | −0,1% |
> | mai/2026 | −3,1% | −4,5% | +6,1% | +0,3% | +4,6% | −2,0% | −2,4% | −3,5% | +0,7% | −3,8% | +1,3% | +1,6% | +1,1% | −7,2% |
> | jun/2026 | −0,5% | −6,5% | −4,0% | +3,7% | −2,1% | −0,5% | −2,9% | −1,7% | −1,7% | −14,3% | −1,0% | −5,4% | +1,1% | −1,0% |
> | jul/2026 | +16,5% | −1,6% | +11,7% | +0,4% | +2,3% | +12,2% | −0,8% | +24,1% | +5,9% | +22,7% | +3,7% | +8,5% | +1,2% | +3,5% |
> | ago/2026 | +11,3% | +2,1% | +7,6% | +4,0% | +7,0% | +4,9% | +4,7% | +1,6% | +6,6% | +27,8% | +5,5% | +14,4% | +1,1% | −0,3% |
> | set/2026 | +5,0% | +27,8% | −1,1% | +5,7% | +3,8% | −3,0% | +1,6% | +0,8% | +8,2% | +35,4% | +2,1% | +3,4% | +1,1% | +5,0% |
> | out/2026 | +8,3% | +5,8% | +15,4% | +0,1% | −2,5% | −5,1% | −2,2% | −6,0% | +5,5% | +22,8% | +4,2% | +11,1% | +0,8% | −5,2% |
> | **Acumulado** | **+1266,9%** | **+1092,6%** | **+1170,1%** | **+298,4%** | **+286,2%** | **+561,2%** | **+692,2%** | **+430,8%** | **+804,9%** | **+93801,7%** | **+680,3%** | **+11183,0%** | **+81,2%** | **+67,3%** |

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +31% | −3% | −5% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +75% | −8% | −12% | −18% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+160%** | **−17%** | −22% | −32% |
| Risco fixo de 2% por operação | 2,00% | +422% | −33% | −39% | −55% |
| Kelly ¼ | 2,95% | +918% | −44% | −56% | −73% |
| Kelly ½ | 5,91% | +2932% | −72% | −83% | −95% |
| Kelly cheio | 11,82% | +1767% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,66% | +308% | −30% | −36% | −50% |
| Larry Williams 5% | 3,32% | +907% | −53% | −61% | −77% |
| Larry Williams 10% | 6,64% | +2291% | −81% | −87% | −97% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros). **Sorteio:** a ordem das operações foi embaralhada 2.000 vezes — a queda de verdade depende da sorte na sequência, e a ordem real foi das mais favoráveis. Planeje pela queda do sorteio, não pela real.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: IFR de Tendência 7,7% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
- **Larry Williams:** no campeonato de 1987 ele usou o Kelly como fração do capital ÷ **margem** por contrato — a conta foi de US\$ 10 mil a ~US\$ 2,1 milhões, caiu para ~US\$ 700 mil e terminou o ano em ~US\$ 1,1 milhão. Depois ele passou a usar **contratos = capital × risco% ÷ maior perda já vista por contrato**, com ~5% (cauteloso), 10–12% (moderado) e 15–18% (agressivo). Esses percentuais eram para poucas operações por ano; estes setups operam muitas vezes por mês e a maior perda deles é ~1,5 vezes o stop típico, então **Larry com 2,5% ≈ arriscar 1,7% por operação** — perto do tamanho sugerido.

### Calculadora de contratos (risco de 1% por operação)

**contratos = capital × 1% ÷ ((stop em pts + 15) × R\$ 0,20)** — arredonde para baixo. Calcule para cada setup, a cada operação, com o capital do momento (assim a posição cresce quando ganha e diminui quando perde).

| Setup | Stop hoje | Risco por contrato | R\$ 10.000 | R\$ 20.000 | R\$ 50.000 | R\$ 100.000 | R\$ 200.000 |
|---|---|---|---|---|---|---|---|
| Tendência Forte do Dia | 550 pts | R\$ 113 | 0,9 | 1,8 | 4,4 | 8,8 | 17,7 |
| ADX da Manhã | 267 pts | R\$ 56 | 1,8 | 3,5 | 8,9 | 17,7 | 35,4 |
| IFR de Tendência ⭐ | 357 pts | R\$ 74 | 1,3 | 2,7 | 6,7 | 13,5 | 26,9 |
| Pullback na Média ⭐ | 550 pts | R\$ 113 | 0,9 | 1,8 | 4,4 | 8,8 | 17,7 |
| MACD na Tendência | 755 pts | R\$ 154 | 0,6 | 1,3 | 3,2 | 6,5 | 13,0 |
| Primeira Vela de 80 Minutos | 566 pts | R\$ 116 | 0,9 | 1,7 | 4,3 | 8,6 | 17,2 |
| Rompimento da Bollinger ⭐ | 317 pts | R\$ 66 | 1,5 | 3,0 | 7,5 | 15,1 | 30,1 |
| Vai na Onda | 755 pts | R\$ 154 | 0,6 | 1,3 | 3,2 | 6,5 | 13,0 |

*Stops calculados com o ATR (3.670 pts) e o preço (178.265) de hoje — mudam todo dia. ⭐ = setups da combinação recomendada. Com risco de 0,5%, use a metade. Confira a margem de day trade da sua corretora para o número de contratos.*

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R\$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- **Risco 1%:** cada setup arrisca 1% do capital total em cada operação (contratos = capital × 1% ÷ (stop + custo) em R\$). Se dois setups estiverem posicionados ao mesmo tempo, o risco aberto é de 2%.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
