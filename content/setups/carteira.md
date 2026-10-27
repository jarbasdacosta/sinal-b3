---
title: Carteira de setups
date: 2026-10-27
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 27/10/2026 09:50 BRT · dados de 01/11/2021 a 26/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 9 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 39.890** (+32% ao ano · pior queda −5% · Sharpe 1,62)
> - CDI: **R\$ 18.128** (+13% ao ano) · Ibovespa: **R\$ 16.732** (+11% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 38.657, +32% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.128.848, +160% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: ainda sem pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| # | Setup | Sharpe | Retorno ÷ queda | Teste ÷ treino | Meses > CDI | Correlação | Op./mês |
|---|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | 1,59 | 4,0 | 150% | 72% | 0,17 | 12,6 |
| 2º | [**Bollinger**](rompimento-da-bollinger) | 1,61 | 3,5 | 150% | 65% | 0,24 | 4,2 |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | 1,10 | 1,6 | 150% | 63% | 0,07 | 7,7 |
| 4º | [**ADX**](adx-da-manha) | 1,03 | 1,6 | 150% | 63% | 0,20 | 29,3 |
| 5º | [**Tendência**](tendencia-forte-do-dia) | 1,28 | 2,1 | 81% | 60% | 0,25 | 28,7 |
| 6º | [**MACD**](macd-na-tendencia) | 0,93 | 1,1 | 150% | 63% | 0,24 | 14,7 |
| 7º | [**Pullback**](pullback-na-media) | 1,20 | 2,8 | 28% | 60% | −0,06 | 5,0 |
| 8º | [**Onda**](vai-na-onda) | 0,70 | 0,9 | 150% | 57% | 0,15 | 19,4 |
| 9º | [**Quinta**](primeira-vela-de-quinta) | 0,88 | 1,1 | 62% | 50% | −0,12 | 1,8 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| # | Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | +43% | **+67%** | −7% | **−11%** | sem operações |
| 2º | [**Bollinger**](rompimento-da-bollinger) | +26% | **+52%** | −4% | **−7%** | sem operações |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | +31% | **+47%** | −12% | **−14%** | sem operações |
| 4º | [**ADX**](adx-da-manha) | +37% | **+65%** | −15% | **−31%** | sem operações |
| 5º | [**Tendência**](tendencia-forte-do-dia) | +46% | **+70%** | −16% | **−24%** | sem operações |
| 6º | [**MACD**](macd-na-tendencia) | +30% | **+40%** | −15% | **−11%** | sem operações |
| 7º | [**Pullback**](pullback-na-media) | +26% | **+32%** | −5% | **−9%** | sem operações |
| 8º | [**Onda**](vai-na-onda) | +29% | **+40%** | −19% | **−20%** | sem operações |
| 9º | [**Quinta**](primeira-vela-de-quinta) | +17% | **+19%** | −4% | **−3%** | sem operações |

- **IFR de Tendência:** entra na força medida pelo IFR · 10h–11h e 14h–16h
- **Rompimento da Bollinger:** rompimento da banda de Bollinger a favor da tendência · 10h15–11h e 14h–17h30
- **Primeira Vela de 80 Minutos:** força da primeira vela do dia, alvo longo com stop móvel · entra 10h20
- **ADX da Manhã:** pega o começo da tendência (ADX subindo), stop curto · 10h–11h
- **Tendência Forte do Dia:** segue a tendência já formada (rompimento longe da abertura) · o dia todo, até 17h
- **MACD na Tendência:** tendência do dia confirmada pelo MACD, com break even · 9h–11h30 e 14h–16h
- **Pullback na Média:** entra na volta da correção até a média · 10h30–12h30 e 14h45–15h45
- **Vai na Onda:** segue o fluxo: 3 velas a favor renovando o extremo do dia com volume · 9h45–16h
- **Primeira Vela de Quinta:** rompimento da primeira vela do dia (dia da semana escolhido) · 9h15

*Correlação = com os outros setups (baixa é bom para a carteira). Como o ranking é feito: cada setup ganha uma posição em 4 critérios — **Sharpe** (retorno acima do CDI por oscilação), **retorno acima do CDI ÷ pior queda** (quanto rende para cada 1% de queda que você aguenta), **teste ÷ treino** (quanto do resultado por operação de 2021–2023 se manteve em 2024 em diante; 100% = manteve tudo) e **meses acima do CDI**. Vale a média das 4 posições. Correlação baixa com os outros é bom para a carteira, mas não entra na nota de cada setup.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes:

| Perfil | Combinação | 1 contrato: ao ano · queda | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** | Sharpe treino → teste |
|---|---|---|---|---|---|
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | +32% · −2,6% | +52% · −5,1% | **+160% · −17,1%** | 2,34 → 2,11 |
| 📈 Maior retorno | Tendência | +46% · −16,1% | +70% · −23,6% | **+70% · −23,6%** | 1,58 → 1,12 |
| 🛡️ Menor queda | Pullback + Bollinger | +26% · −2,1% | +43% · −4,0% | **+78% · −8,6%** | 2,24 → 1,65 |

*R\$ 10 mil viraram, na recomendada: R\$ 38.657 com 1 contrato por R\$ 10 mil · R\$ 78.066 com 1% dividido entre os setups · **R\$ 1.128.848 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · MACD = MACD na Tendência · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

**Por que a recomendada é IFR de Tendência + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios ao mesmo tempo — Sharpe 2,19, rende 7,1× acima do CDI para cada 1% de pior queda, e o Sharpe ficou em 2,34 no treino e 2,11 no teste (não depende de um período só). A correlação média entre os setups dela é 0,01: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, MACD na Tendência, Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR + Quinta + Pullback + Bollinger ⚠️ | +28% | −1,6% | 9,1 | 2,52 → 2,16 | +20% | −0,01 | +43% · −3,5% | **+173% · −17,1%** |
| 2 | IFR + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +29% | −2,1% | 7,4 | 2,15 → 2,28 | +23% | −0,04 | +44% · −3,3% | **+246% · −20,5%** |
| 3 | IFR + Pullback + Bollinger ⭐ | +32% | −2,6% | 7,1 | 2,34 → 2,11 | +22% | 0,01 | +52% · −5,1% | **+160% · −17,1%** |
| 4 | IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | +29% | −2,2% | 7,5 | 1,98 → 2,10 | +23% | −0,14 | +42% · −3,3% | **+162% · −16,4%** |
| 5 | IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | +32% | −3,1% | 6,2 | 2,02 → 2,24 | +25% | 0,02 | +51% · −4,4% | **+230% · −20,4%** |
| 6 | IFR + Quinta + Pullback ⚠️ | +28% | −2,0% | 8,0 | 2,34 → 1,88 | +19% | −0,09 | +39% · −3,5% | **+106% · −12,8%** |
| 7 | 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +25% | −2,0% | 6,3 | 1,95 → 2,05 | +22% | −0,07 | +38% · −3,1% | **+141% · −15,2%** |
| 8 | IFR + Quinta + Bollinger ⚠️ | +28% | −2,9% | 5,3 | 1,93 → 2,09 | +22% | 0,05 | +46% · −4,8% | **+134% · −17,4%** |
| 9 | IFR + 1ª vela 80 + Pullback ⚠️ | +34% | −3,0% | 7,1 | 1,84 → 2,04 | +26% | −0,13 | +50% · −4,7% | **+150% · −16,3%** |
| 10 | IFR + Pullback | +34% | −3,5% | 6,1 | 2,15 → 1,80 | +21% | −0,17 | +50% · −5,9% | **+96% · −12,9%** |
| 11 | IFR + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +35% | −5,0% | 4,4 | 2,09 → 1,94 | +25% | 0,09 | +55% · −6,7% | **+354% · −35,7%** |
| 12 | 1ª vela 80 + Quinta + Pullback + Bollinger + Tendência ⚠️ | +29% | −3,3% | 5,0 | 2,13 → 1,82 | +22% | −0,01 | +45% · −4,9% | **+245% · −29,1%** |
| 13 | Quinta + Pullback + Bollinger ⚠️ | +23% | −1,6% | 6,1 | 2,51 → 1,72 | +17% | −0,02 | +34% · −2,4% | **+87% · −8,2%** |
| 14 | IFR + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +33% | −4,2% | 4,8 | 2,08 → 1,84 | +24% | −0,05 | +48% · −5,2% | **+266% · −30,2%** |
| 15 | IFR + Quinta + Pullback + Bollinger + Tendência ⚠️ | +32% | −4,4% | 4,3 | 2,34 → 1,81 | +21% | 0,06 | +49% · −6,0% | **+282% · −33,2%** |
| 16 | ADX + IFR + Quinta + Pullback + Bollinger ⚠️ | +30% | −4,1% | 4,2 | 1,85 → 2,12 | +20% | 0,08 | +49% · −6,4% | **+274% · −34,9%** |
| 17 | IFR + MACD + Quinta + Pullback + Bollinger ⚠️ | +28% | −3,6% | 4,4 | 1,93 → 1,90 | +23% | 0,04 | +42% · −4,1% | **+225% · −25,8%** |
| 18 | 1ª vela 80 + Pullback + Bollinger ⚠️ | +28% | −3,3% | 4,6 | 1,78 → 1,98 | +24% | −0,01 | +45% · −4,1% | **+130% · −15,3%** |
| 19 | IFR + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +33% | −4,9% | 4,1 | 1,89 → 1,94 | +26% | 0,09 | +52% · −6,6% | **+312% · −35,3%** |
| 20 | IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | +37% | −5,7% | 4,3 | 1,98 → 1,80 | +25% | 0,02 | +56% · −6,9% | **+249% · −30,1%** |
| 21 | 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +33% | −4,6% | 4,3 | 2,01 → 1,78 | +23% | 0,07 | +52% · −6,5% | **+229% · −28,8%** |
| 22 | ADX + IFR + Pullback + Bollinger | +33% | −4,7% | 4,4 | 1,71 → 2,08 | +21% | 0,14 | +58% · −7,9% | **+256% · −34,2%** |
| 23 | Pullback + Bollinger | +26% | −2,1% | 6,1 | 2,24 → 1,65 | +17% | −0,05 | +43% · −4,0% | **+78% · −8,6%** |
| 24 | ADX + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | +33% | −4,0% | 5,1 | 1,61 → 2,20 | +23% | 0,10 | +56% · −6,9% | **+339% · −38,7%** |
| 25 | IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | +29% | −3,7% | 4,4 | 1,66 → 2,21 | +24% | 0,03 | +47% · −4,4% | **+197% · −20,9%** |
| 26 | IFR + Bollinger | +34% | −4,8% | 4,4 | 1,70 → 2,04 | +26% | 0,25 | +61% · −7,7% | **+123% · −16,6%** |
| 27 | Quinta + Bollinger ⚠️ | +21% | −1,5% | 5,8 | 1,82 → 1,77 | +18% | 0,01 | +35% · −2,8% | **+60% · −8,4%** |
| 28 | ADX + IFR + Pullback + Bollinger + Tendência | +36% | −6,3% | 3,7 | 1,89 → 1,89 | +25% | 0,19 | +61% · −9,5% | **+376% · −45,8%** |
| 29 | IFR + Pullback + Bollinger + Tendência | +35% | −5,9% | 3,8 | 2,23 → 1,76 | +22% | 0,14 | +57% · −8,0% | **+265% · −33,2%** |
| 30 | ADX + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | +31% | −3,8% | 4,9 | 1,58 → 2,10 | +21% | −0,03 | +48% · −6,0% | **+253% · −34,2%** |
| 31 | ADX + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | +38% | −6,1% | 4,1 | 1,71 → 1,91 | +28% | 0,09 | +60% · −8,8% | **+348% · −44,2%** |
| 32 | IFR + MACD + Pullback + Bollinger | +31% | −4,8% | 3,8 | 1,79 → 1,85 | +24% | 0,11 | +49% · −5,6% | **+210% · −25,7%** |
| 33 | IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | +37% | −6,5% | 3,7 | 1,79 → 1,90 | +29% | 0,24 | +61% · −8,6% | **+293% · −35,2%** |
| 34 | ADX + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +34% | −5,5% | 3,8 | 1,72 → 1,90 | +26% | 0,13 | +57% · −8,4% | **+335% · −43,8%** |
| 35 | 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +30% | −4,5% | 3,9 | 1,78 → 1,79 | +25% | 0,04 | +48% · −5,9% | **+198% · −27,0%** |
| 36 | IFR + Quinta + Pullback + Tendência ⚠️ | +33% | −4,9% | 4,1 | 2,23 → 1,63 | +20% | 0,01 | +47% · −6,1% | **+192% · −27,5%** |
| 37 | IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | +35% | −5,6% | 3,9 | 1,76 → 1,80 | +27% | −0,00 | +51% · −6,8% | **+217% · −29,7%** |
| 38 | 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +30% | −3,7% | 4,8 | 1,99 → 1,62 | +22% | −0,11 | +43% · −7,3% | **+162% · −31,1%** |
| 39 | ADX + IFR + Quinta + Pullback + Tendência ⚠️ | +34% | −5,9% | 3,6 | 1,89 → 1,80 | +23% | 0,08 | +53% · −8,0% | **+286% · −44,1%** |
| 40 | IFR + MACD + Quinta + Pullback ⚠️ | +29% | −3,6% | 4,5 | 1,77 → 1,71 | +22% | −0,03 | +40% · −4,4% | **+147% · −19,4%** |
| 41 | IFR + Quinta ⚠️ | +30% | −3,6% | 4,7 | 1,66 → 1,82 | +22% | −0,10 | +42% · −5,2% | **+76% · −11,3%** |
| 42 | ADX + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +32% | −4,7% | 4,1 | 1,69 → 1,80 | +25% | −0,01 | +49% · −7,0% | **+252% · −41,9%** |
| 43 | Quinta + Pullback + Bollinger + Tendência ⚠️ | +29% | −3,8% | 4,2 | 2,34 → 1,56 | +18% | 0,04 | +44% · −5,2% | **+174% · −24,6%** |
| 44 | IFR + Quinta + Bollinger + Tendência ⚠️ | +33% | −5,8% | 3,5 | 2,02 → 1,77 | +23% | 0,14 | +53% · −7,8% | **+231% · −32,8%** |
| 45 | ADX + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +28% | −3,5% | 4,3 | 1,52 → 2,07 | +20% | 0,03 | +45% · −6,5% | **+235% · −36,9%** |
| 46 | ADX + IFR + Quinta + Pullback ⚠️ | +31% | −5,1% | 3,6 | 1,69 → 1,94 | +19% | 0,02 | +48% · −7,8% | **+185% · −32,5%** |
| 47 | 1ª vela 80 + Quinta + Pullback ⚠️ | +25% | −2,2% | 5,4 | 1,68 → 1,67 | +21% | −0,22 | +33% · −5,6% | **+80% · −18,6%** |
| 48 | IFR + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +30% | −4,6% | 3,7 | 1,67 → 1,90 | +24% | −0,04 | +42% · −3,4% | **+211% · −22,5%** |
| 49 | MACD + Quinta + Pullback + Bollinger ⚠️ | +25% | −3,4% | 3,6 | 1,89 → 1,72 | +21% | 0,01 | +36% · −2,8% | **+129% · −16,2%** |
| 50 | ADX + IFR + 1ª vela 80 + Pullback ⚠️ | +35% | −4,8% | 4,7 | 1,47 → 2,06 | +22% | 0,02 | +56% · −7,7% | **+237% · −33,5%** |
| 51 | ADX + IFR + Pullback + Tendência | +39% | −7,3% | 3,6 | 1,79 → 1,76 | +25% | 0,15 | +63% · −10,9% | **+268% · −45,9%** |
| 52 | IFR + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +32% | −5,6% | 3,4 | 1,71 → 2,00 | +25% | 0,11 | +49% · −4,9% | **+288% · −28,5%** |
| 53 | ADX + IFR + Quinta + Bollinger + Tendência ⚠️ | +34% | −6,2% | 3,5 | 1,69 → 1,90 | +26% | 0,20 | +57% · −9,3% | **+333% · −45,4%** |
| 54 | IFR + 1ª vela 80 + Bollinger ⚠️ | +34% | −5,4% | 3,8 | 1,50 → 2,16 | +26% | 0,20 | +57% · −6,4% | **+183% · −20,8%** |
| 55 | IFR + 1ª vela 80 + Quinta ⚠️ | +30% | −3,8% | 4,6 | 1,43 → 2,02 | +24% | −0,13 | +44% · −4,3% | **+125% · −14,2%** |
| 56 | ADX + IFR + MACD + Pullback + Bollinger | +33% | −5,2% | 3,9 | 1,52 → 1,96 | +22% | 0,16 | +54% · −7,7% | **+313% · −41,1%** |
| 57 | ADX + Quinta + Pullback + Bollinger + Tendência ⚠️ | +31% | −5,7% | 3,1 | 1,93 → 1,77 | +22% | 0,11 | +50% · −7,8% | **+273% · −44,5%** |
| 58 | ADX + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | +31% | −3,8% | 4,8 | 1,32 → 2,18 | +22% | 0,12 | +53% · −7,2% | **+296% · −39,6%** |
| 59 | IFR + Pullback + Tendência | +39% | −7,2% | 3,6 | 2,11 → 1,58 | +21% | 0,09 | +58% · −8,7% | **+179% · −27,9%** |
| 60 | ADX + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | +38% | −6,8% | 3,6 | 1,54 → 1,98 | +28% | 0,27 | +64% · −10,1% | **+400% · −48,2%** |
| 61 | ADX + Pullback + Bollinger + Tendência | +34% | −6,7% | 3,2 | 1,81 → 1,73 | +23% | 0,19 | +59% · −11,3% | **+256% · −46,3%** |
| 62 | 1ª vela 80 + Pullback + Tendência ⚠️ | +35% | −5,5% | 4,0 | 1,87 → 1,56 | +23% | −0,07 | +51% · −10,2% | **+150% · −30,8%** |
| 63 | IFR + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +36% | −6,7% | 3,4 | 1,74 → 1,72 | +28% | 0,12 | +53% · −7,2% | **+300% · −37,6%** |
| 64 | ADX + IFR + Pullback | +36% | −6,2% | 3,7 | 1,54 → 1,89 | +20% | 0,06 | +59% · −10,0% | **+172% · −31,8%** |
| 65 | ADX + IFR + MACD + Quinta + Pullback ⚠️ | +31% | −4,4% | 4,2 | 1,49 → 1,87 | +21% | 0,04 | +47% · −6,4% | **+233% · −36,6%** |
| 66 | MACD + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +32% | −5,8% | 3,4 | 1,77 → 1,71 | +26% | 0,15 | +50% · −6,5% | **+285% · −35,0%** |
| 67 | IFR + 1ª vela 80 + Tendência ⚠️ | +41% | −8,0% | 3,5 | 1,65 → 1,76 | +30% | 0,18 | +63% · −9,6% | **+202% · −29,7%** |
| 68 | ADX + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | +36% | −6,0% | 3,8 | 1,51 → 1,91 | +27% | 0,09 | +56% · −8,7% | **+309% · −43,8%** |
| 69 | ADX + 1ª vela 80 + Pullback + Tendência ⚠️ | +36% | −6,4% | 3,6 | 1,59 → 1,76 | +27% | 0,05 | +57% · −10,0% | **+235% · −43,3%** |
| 70 | MACD + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +26% | −4,5% | 3,0 | 1,71 → 1,92 | +23% | 0,00 | +39% · −3,4% | **+191% · −21,6%** |
| 71 | IFR + Bollinger + Tendência | +39% | −8,3% | 3,1 | 1,89 → 1,72 | +25% | 0,34 | +65% · −11,0% | **+215% · −32,8%** |
| 72 | ADX + 1ª vela 80 + Pullback + Bollinger ⚠️ | +31% | −4,5% | 4,0 | 1,39 → 2,03 | +21% | 0,10 | +53% · −8,4% | **+219% · −36,2%** |
| 73 | IFR + MACD + Pullback | +33% | −5,3% | 3,8 | 1,62 → 1,65 | +25% | 0,03 | +47% · −6,4% | **+135% · −19,9%** |
| 74 | ADX + IFR + Quinta + Bollinger ⚠️ | +31% | −4,7% | 3,8 | 1,37 → 2,07 | +20% | 0,17 | +53% · −8,0% | **+221% · −35,2%** |
| 75 | IFR + MACD + Pullback + Bollinger + Tendência | +35% | −6,9% | 3,1 | 1,88 → 1,69 | +25% | 0,20 | +54% · −8,1% | **+320% · −40,4%** |
| 76 | 1ª vela 80 + Bollinger + Tendência ⚠️ | +35% | −6,6% | 3,3 | 1,65 → 1,74 | +28% | 0,23 | +58% · −8,4% | **+185% · −27,0%** |
| 77 | Pullback + Bollinger + Tendência | +33% | −5,8% | 3,5 | 2,19 → 1,50 | +19% | 0,11 | +53% · −7,5% | **+161% · −24,6%** |
| 78 | ADX + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +32% | −5,4% | 3,5 | 1,49 → 1,91 | +26% | 0,13 | +53% · −8,6% | **+296% · −44,4%** |
| 79 | IFR + Quinta + Pullback + Bollinger + Onda ⚠️ | +29% | −4,1% | 3,8 | 1,42 → 1,91 | +23% | 0,01 | +43% · −4,2% | **+225% · −25,9%** |
| 80 | IFR + MACD + 1ª vela 80 + Pullback ⚠️ | +33% | −6,1% | 3,3 | 1,56 → 1,85 | +26% | 0,03 | +48% · −4,6% | **+197% · −22,4%** |
| 81 | ADX + IFR + Bollinger + Tendência | +39% | −8,2% | 3,2 | 1,58 → 1,86 | +28% | 0,35 | +68% · −12,0% | **+313% · −45,4%** |
| 82 | ADX + IFR + 1ª vela 80 + Bollinger ⚠️ | +35% | −4,9% | 4,6 | 1,20 → 2,14 | +23% | 0,25 | +62% · −9,3% | **+278% · −39,0%** |
| 83 | ADX + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | +34% | −5,4% | 4,0 | 1,36 → 1,95 | +23% | 0,08 | +53% · −7,3% | **+289% · −40,1%** |
| 84 | MACD + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +31% | −5,1% | 3,5 | 1,74 → 1,60 | +25% | −0,01 | +42% · −5,8% | **+209% · −31,7%** |
| 85 | ADX + MACD + Quinta + Pullback + Bollinger ⚠️ | +28% | −4,3% | 3,5 | 1,51 → 1,88 | +19% | 0,08 | +44% · −7,1% | **+220% · −39,1%** |
| 86 | IFR + MACD + Quinta + Pullback + Tendência ⚠️ | +33% | −6,1% | 3,3 | 1,87 → 1,59 | +23% | 0,07 | +46% · −6,6% | **+239% · −35,3%** |
| 87 | ADX + IFR + Quinta + Tendência ⚠️ | +36% | −7,2% | 3,3 | 1,57 → 1,77 | +26% | 0,16 | +58% · −10,2% | **+236% · −42,6%** |
| 88 | IFR + Quinta + Tendência ⚠️ | +35% | −7,0% | 3,2 | 1,88 → 1,58 | +23% | 0,07 | +52% · −8,5% | **+153% · −27,0%** |
| 89 | ADX + Quinta + Pullback + Bollinger ⚠️ | +27% | −4,9% | 2,9 | 1,67 → 1,87 | +18% | 0,08 | +44% · −7,5% | **+168% · −32,4%** |
| 90 | MACD + Quinta + Pullback + Bollinger + Tendência ⚠️ | +29% | −5,2% | 3,1 | 1,95 → 1,56 | +22% | 0,09 | +43% · −5,8% | **+224% · −32,6%** |
| 91 | ADX + IFR + 1ª vela 80 + Tendência ⚠️ | +40% | −8,0% | 3,5 | 1,42 → 1,88 | +30% | 0,22 | +67% · −11,3% | **+290% · −43,7%** |
| 92 | IFR + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +32% | −5,0% | 3,8 | 1,29 → 2,00 | +26% | 0,09 | +49% · −4,8% | **+286% · −28,7%** |
| 93 | 1ª vela 80 + Quinta + Tendência ⚠️ | +32% | −5,4% | 3,5 | 1,60 → 1,58 | +25% | −0,13 | +46% · −7,8% | **+127% · −25,2%** |
| 94 | IFR + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +36% | −7,4% | 3,1 | 1,56 → 1,79 | +30% | 0,31 | +57% · −8,6% | **+348% · −42,2%** |
| 95 | ADX + IFR + Bollinger | +36% | −5,8% | 4,0 | 1,21 → 2,03 | +21% | 0,34 | +66% · −11,3% | **+206% · −34,5%** |
| 96 | IFR | +43% | −7,5% | 4,0 | 1,40 → 1,73 | +28% | — | +67% · −11,2% | **+67% · −11,2%** |
| 97 | ADX + IFR + MACD + Pullback + Tendência | +37% | −8,0% | 3,1 | 1,60 → 1,72 | +27% | 0,19 | +58% · −10,0% | **+316% · −50,5%** |
| 98 | ADX + IFR + MACD + Pullback | +35% | −5,9% | 3,7 | 1,38 → 1,83 | +22% | 0,10 | +54% · −8,3% | **+218% · −36,0%** |
| 99 | IFR + 1ª vela 80 ⚠️ | +37% | −6,4% | 3,8 | 1,26 → 1,96 | +28% | 0,06 | +58% · −6,5% | **+114% · −14,1%** |
| 100 | ADX + IFR + 1ª vela 80 + Quinta ⚠️ | +33% | −4,4% | 4,5 | 1,15 → 2,05 | +21% | 0,03 | +52% · −7,7% | **+204% · −34,4%** |
| 101 | ADX + 1ª vela 80 + Quinta + Pullback ⚠️ | +28% | −4,1% | 3,8 | 1,33 → 1,86 | +19% | −0,07 | +43% · −6,8% | **+154% · −31,6%** |
| 102 | 1ª vela 80 + Pullback ⚠️ | +29% | −3,8% | 4,3 | 1,49 → 1,57 | +24% | −0,29 | +40% · −8,7% | **+72% · −17,9%** |
| 103 | ADX + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +31% | −5,3% | 3,4 | 1,33 → 1,97 | +22% | 0,13 | +50% · −8,2% | **+275% · −42,6%** |
| 104 | IFR + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +34% | −6,6% | 3,2 | 1,53 → 1,71 | +29% | 0,11 | +49% · −7,1% | **+264% · −37,2%** |
| 105 | IFR + Pullback + Bollinger + Tendência + Onda | +35% | −7,0% | 3,1 | 1,54 → 1,73 | +29% | 0,17 | +54% · −8,0% | **+317% · −40,6%** |
| 106 | IFR + MACD + Quinta + Bollinger + Tendência ⚠️ | +33% | −6,8% | 2,9 | 1,67 → 1,68 | +26% | 0,21 | +50% · −7,9% | **+281% · −40,0%** |
| 107 | ADX + MACD + Pullback + Bollinger + Tendência | +34% | −7,2% | 2,9 | 1,62 → 1,71 | +26% | 0,21 | +55% · −9,5% | **+309% · −50,4%** |
| 108 | MACD + Pullback + Bollinger | +28% | −5,1% | 2,9 | 1,70 → 1,65 | +23% | 0,06 | +42% · −4,5% | **+119% · −16,1%** |
| 109 | ADX + 1ª vela 80 + Bollinger + Tendência ⚠️ | +36% | −7,3% | 3,2 | 1,39 → 1,87 | +28% | 0,27 | +63% · −11,0% | **+278% · −43,8%** |
| 110 | ADX + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +35% | −6,9% | 3,2 | 1,47 → 1,73 | +27% | 0,12 | +54% · −8,7% | **+285% · −47,8%** |
| 111 | Bollinger | +26% | −3,6% | 3,5 | 1,37 → 1,78 | +18% | — | +52% · −6,9% | **+52% · −6,9%** |
| 112 | MACD + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +30% | −5,8% | 3,1 | 1,54 → 1,71 | +25% | 0,14 | +46% · −6,4% | **+249% · −34,6%** |
| 113 | Quinta + Bollinger + Tendência ⚠️ | +30% | −5,6% | 3,0 | 1,97 → 1,52 | +21% | 0,09 | +47% · −7,3% | **+136% · −24,1%** |
| 114 | IFR + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +30% | −4,3% | 4,0 | 1,24 → 1,89 | +24% | −0,06 | +42% · −4,2% | **+208% · −22,7%** |
| 115 | IFR + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +36% | −6,8% | 3,4 | 1,41 → 1,74 | +31% | 0,11 | +53% · −7,2% | **+294% · −37,8%** |
| 116 | ADX + MACD + Quinta + Pullback + Tendência ⚠️ | +32% | −6,3% | 3,0 | 1,61 → 1,61 | +24% | 0,08 | +48% · −9,4% | **+232% · −48,8%** |
| 117 | ADX + IFR + MACD + Quinta + Bollinger ⚠️ | +31% | −5,1% | 3,6 | 1,23 → 1,95 | +21% | 0,19 | +51% · −8,0% | **+273% · −41,8%** |
| 118 | 1ª vela 80 + Quinta + Bollinger ⚠️ | +25% | −3,6% | 3,4 | 1,26 → 1,97 | +15% | −0,02 | +39% · −4,0% | **+106% · −14,4%** |
| 119 | ADX + Pullback + Bollinger | +30% | −5,8% | 3,0 | 1,49 → 1,82 | +19% | 0,14 | +54% · −9,9% | **+156% · −31,7%** |
| 120 | IFR + Pullback + Bollinger + Onda | +32% | −5,4% | 3,5 | 1,31 → 1,87 | +25% | 0,09 | +49% · −5,6% | **+210% · −25,9%** |
| 121 | MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +34% | −6,8% | 3,1 | 1,64 → 1,56 | +27% | 0,09 | +49% · −8,0% | **+195% · −32,8%** |
| 122 | ADX + Quinta + Bollinger + Tendência ⚠️ | +32% | −6,8% | 2,8 | 1,57 → 1,75 | +25% | 0,19 | +54% · −9,9% | **+224% · −43,2%** |
| 123 | IFR + Quinta + Pullback + Tendência + Onda ⚠️ | +33% | −6,2% | 3,2 | 1,51 → 1,62 | +28% | 0,04 | +46% · −6,6% | **+236% · −35,5%** |
| 124 | ADX + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | +34% | −5,7% | 3,8 | 1,14 → 2,02 | +24% | 0,28 | +58% · −8,9% | **+333% · −45,1%** |
| 125 | IFR + MACD + Pullback + Tendência | +37% | −8,1% | 3,0 | 1,78 → 1,55 | +25% | 0,18 | +53% · −8,6% | **+223% · −35,3%** |
| 126 | MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +29% | −6,1% | 2,6 | 1,57 → 1,86 | +24% | 0,08 | +44% · −4,8% | **+178% · −22,3%** |
| 127 | Quinta + Pullback + Tendência ⚠️ | +30% | −4,9% | 3,5 | 2,19 → 1,26 | +17% | −0,03 | +40% · −7,0% | **+107% · −23,8%** |
| 128 | ADX + 1ª vela 80 + Quinta + Tendência ⚠️ | +34% | −6,3% | 3,3 | 1,35 → 1,77 | +26% | 0,03 | +53% · −9,5% | **+206% · −40,1%** |
| 129 | ADX + Quinta + Pullback + Tendência ⚠️ | +32% | −7,1% | 2,7 | 1,80 → 1,59 | +21% | 0,06 | +49% · −10,8% | **+186% · −44,7%** |
| 130 | ADX + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +29% | −4,9% | 3,3 | 1,28 → 1,86 | +21% | −0,02 | +43% · −6,9% | **+201% · −38,3%** |
| 131 | IFR + MACD + Quinta + Bollinger ⚠️ | +29% | −5,5% | 3,0 | 1,43 → 1,83 | +23% | 0,14 | +45% · −5,5% | **+179% · −25,6%** |
| 132 | ADX + MACD + Pullback + Bollinger | +30% | −5,8% | 3,1 | 1,37 → 1,83 | +20% | 0,14 | +51% · −9,2% | **+205% · −38,5%** |
| 133 | IFR + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +30% | −6,1% | 2,8 | 1,40 → 1,97 | +23% | 0,11 | +46% · −5,4% | **+249% · −29,5%** |
| 134 | ADX + IFR + 1ª vela 80 ⚠️ | +38% | −6,0% | 4,2 | 1,03 → 2,00 | +23% | 0,18 | +64% · −10,7% | **+190% · −33,8%** |
| 135 | ADX + IFR + Tendência | +43% | −10,1% | 3,0 | 1,46 → 1,73 | +30% | 0,35 | +72% · −14,8% | **+220% · −45,2%** |
| 136 | MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +26% | −4,7% | 2,9 | 1,51 → 1,70 | +22% | −0,11 | +35% · −3,2% | **+120% · −17,1%** |
| 137 | ADX + IFR + Pullback + Bollinger + Onda | +33% | −6,0% | 3,4 | 1,19 → 1,94 | +23% | 0,14 | +55% · −7,7% | **+306% · −39,6%** |
| 138 | 1ª vela 80 + Pullback + Bollinger + Tendência + Onda ⚠️ | +32% | −6,2% | 3,2 | 1,37 → 1,72 | +27% | 0,14 | +50% · −6,5% | **+279% · −35,2%** |
| 139 | ADX + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | +32% | −5,3% | 3,7 | 1,10 → 1,94 | +22% | 0,09 | +50% · −7,6% | **+252% · −41,0%** |
| 140 | MACD + Pullback + Bollinger + Tendência | +32% | −7,0% | 2,8 | 1,83 → 1,51 | +23% | 0,19 | +50% · −7,9% | **+209% · −32,6%** |
| 141 | IFR + Tendência | +45% | −11,3% | 2,8 | 1,74 → 1,53 | +26% | 0,41 | +70% · −13,5% | **+141% · −27,0%** |
| 142 | ADX + IFR + MACD + Bollinger + Tendência | +37% | −8,7% | 2,8 | 1,42 → 1,79 | +28% | 0,37 | +63% · −11,3% | **+365% · −51,2%** |
| 143 | ADX + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | +39% | −8,5% | 3,0 | 1,31 → 1,80 | +29% | 0,28 | +61% · −10,5% | **+337% · −49,1%** |
| 144 | ADX + Pullback + Tendência | +37% | −8,8% | 2,8 | 1,68 → 1,54 | +23% | 0,12 | +60% · −16,1% | **+172% · −46,6%** |
| 145 | IFR + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +36% | −7,5% | 3,1 | 1,27 → 1,84 | +28% | 0,24 | +57% · −8,6% | **+345% · −42,3%** |
| 146 | IFR + MACD + Bollinger + Tendência | +37% | −8,9% | 2,7 | 1,57 → 1,64 | +28% | 0,40 | +59% · −10,3% | **+264% · −40,0%** |
| 147 | ADX + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | +34% | −5,7% | 3,8 | 1,07 → 1,92 | +24% | 0,08 | +54% · −7,2% | **+279% · −37,9%** |
| 148 | IFR + MACD + 1ª vela 80 + Tendência ⚠️ | +38% | −8,7% | 2,9 | 1,44 → 1,67 | +32% | 0,30 | +58% · −9,3% | **+247% · −37,2%** |
| 149 | ADX + 1ª vela 80 + Pullback ⚠️ | +32% | −5,6% | 3,5 | 1,19 → 1,80 | +20% | −0,04 | +52% · −9,5% | **+142% · −30,9%** |
| 150 | IFR + Quinta + Pullback + Onda ⚠️ | +29% | −4,7% | 3,5 | 1,25 → 1,71 | +23% | −0,05 | +40% · −4,9% | **+146% · −22,7%** |
| 151 | ADX + IFR + Pullback + Tendência + Onda | +37% | −8,1% | 3,0 | 1,33 → 1,73 | +28% | 0,17 | +58% · −10,0% | **+306% · −49,0%** |
| 152 | IFR + 1ª vela 80 + Pullback + Onda ⚠️ | +33% | −5,6% | 3,6 | 1,14 → 1,84 | +26% | 0,04 | +48% · −5,1% | **+193% · −22,8%** |
| 153 | ADX + MACD + Quinta + Pullback ⚠️ | +28% | −5,0% | 3,1 | 1,33 → 1,69 | +19% | −0,01 | +41% · −7,6% | **+143% · −33,9%** |
| 154 | ADX + Bollinger + Tendência | +37% | −8,7% | 2,8 | 1,43 → 1,70 | +27% | 0,38 | +67% · −15,3% | **+208% · −45,6%** |
| 155 | ADX + IFR + MACD + Quinta + Tendência ⚠️ | +35% | −7,9% | 2,9 | 1,40 → 1,72 | +26% | 0,20 | +55% · −9,8% | **+280% · −47,2%** |
| 156 | ADX + 1ª vela 80 + Quinta + Bollinger ⚠️ | +28% | −4,5% | 3,5 | 1,02 → 2,02 | +19% | 0,11 | +48% · −8,8% | **+187% · −37,3%** |
| 157 | ADX + IFR + Quinta ⚠️ | +33% | −6,3% | 3,2 | 1,16 → 1,89 | +19% | 0,10 | +53% · −9,9% | **+145% · −29,7%** |
| 158 | ADX + IFR + MACD + Bollinger | +35% | −6,8% | 3,2 | 1,12 → 1,91 | +23% | 0,33 | +60% · −10,3% | **+256% · −41,3%** |
| 159 | IFR + Quinta + Bollinger + Tendência + Onda ⚠️ | +33% | −6,9% | 2,9 | 1,36 → 1,74 | +29% | 0,12 | +51% · −7,9% | **+281% · −40,1%** |
| 160 | ADX + IFR + Quinta + Pullback + Onda ⚠️ | +31% | −5,4% | 3,4 | 1,15 → 1,83 | +21% | 0,02 | +47% · −6,6% | **+227% · −34,5%** |
| 161 | ADX + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +35% | −7,6% | 2,9 | 1,29 → 1,81 | +27% | 0,31 | +58% · −10,3% | **+331% · −49,6%** |
| 162 | 1ª vela 80 + Quinta + Pullback + Tendência + Onda ⚠️ | +31% | −5,6% | 3,2 | 1,33 → 1,61 | +27% | −0,02 | +43% · −6,0% | **+204% · −32,8%** |
| 163 | IFR + MACD + Pullback + Bollinger + Onda | +31% | −5,9% | 3,2 | 1,20 → 1,79 | +25% | 0,15 | +48% · −6,2% | **+261% · −33,7%** |
| 164 | MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +34% | −7,6% | 2,8 | 1,43 → 1,67 | +26% | 0,33 | +54% · −8,4% | **+233% · −34,5%** |
| 165 | Quinta + Pullback + Bollinger + Tendência + Onda ⚠️ | +29% | −5,9% | 2,8 | 1,48 → 1,58 | +26% | 0,05 | +44% · −6,0% | **+221% · −32,9%** |
| 166 | 1ª vela 80 + Tendência ⚠️ | +39% | −8,9% | 3,0 | 1,46 → 1,52 | +30% | 0,06 | +60% · −12,3% | **+116% · −24,9%** |
| 167 | IFR + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +30% | −5,4% | 3,2 | 1,04 → 2,01 | +20% | 0,04 | +46% · −4,9% | **+249% · −29,0%** |
| 168 | IFR + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +34% | −6,7% | 3,1 | 1,23 → 1,75 | +28% | 0,04 | +50% · −7,1% | **+260% · −37,4%** |
| 169 | IFR + Pullback + Tendência + Onda | +37% | −8,2% | 2,9 | 1,42 → 1,58 | +31% | 0,16 | +54% · −8,6% | **+220% · −35,5%** |
| 170 | ADX + MACD + Pullback + Tendência | +36% | −8,4% | 2,7 | 1,51 → 1,57 | +26% | 0,16 | +55% · −12,9% | **+216% · −50,7%** |
| 171 | IFR + MACD + Quinta + Tendência ⚠️ | +34% | −7,9% | 2,7 | 1,55 → 1,54 | +26% | 0,18 | +49% · −8,5% | **+194% · −34,8%** |
| 172 | ADX + MACD + Quinta + Bollinger + Tendência ⚠️ | +32% | −7,0% | 2,7 | 1,40 → 1,72 | +25% | 0,21 | +52% · −9,3% | **+273% · −47,7%** |
| 173 | MACD + Quinta + Pullback ⚠️ | +25% | −3,9% | 3,0 | 1,65 → 1,39 | +20% | −0,10 | +31% · −4,6% | **+72% · −14,9%** |
| 174 | ADX + MACD + 1ª vela 80 + Pullback ⚠️ | +32% | −6,3% | 3,1 | 1,17 → 1,82 | +22% | 0,03 | +49% · −8,9% | **+187% · −37,7%** |
| 175 | ADX + IFR + MACD + 1ª vela 80 ⚠️ | +36% | −6,7% | 3,5 | 1,00 → 1,90 | +24% | 0,24 | +58% · −9,8% | **+235% · −40,4%** |
| 176 | ADX + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +33% | −6,9% | 3,0 | 1,26 → 1,73 | +26% | 0,11 | +51% · −9,0% | **+251% · −45,8%** |
| 177 | IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | +33% | −8,0% | 2,5 | 1,28 → 1,93 | +24% | 0,29 | +53% · −7,0% | **+233% · −29,5%** |
| 178 | ADX + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | +34% | −5,8% | 3,7 | 0,89 → 2,02 | +23% | 0,22 | +58% · −8,3% | **+326% · −42,7%** |
| 179 | MACD + Quinta + Pullback + Tendência ⚠️ | +30% | −6,1% | 2,8 | 1,81 → 1,37 | +21% | 0,03 | +41% · −7,6% | **+147% · −31,4%** |
| 180 | IFR + Quinta + Bollinger + Onda ⚠️ | +29% | −4,8% | 3,4 | 1,02 → 1,88 | +23% | 0,02 | +45% · −5,7% | **+180% · −26,2%** |
| 181 | Bollinger + Tendência | +36% | −9,2% | 2,5 | 1,79 → 1,46 | +23% | 0,36 | +63% · −11,8% | **+125% · −24,0%** |
| 182 | ADX + 1ª vela 80 + Tendência ⚠️ | +39% | −9,0% | 3,0 | 1,24 → 1,73 | +30% | 0,17 | +65% · −13,6% | **+191% · −42,0%** |
| 183 | ADX + IFR + MACD + Quinta ⚠️ | +32% | −6,0% | 3,3 | 1,07 → 1,81 | +21% | 0,13 | +50% · −8,7% | **+187% · −36,9%** |
| 184 | Pullback + Tendência | +36% | −7,6% | 3,1 | 2,03 → 1,18 | +16% | 0,03 | +52% · −12,0% | **+97% · −25,6%** |
| 185 | ADX + IFR + Quinta + Bollinger + Onda ⚠️ | +31% | −5,5% | 3,3 | 0,96 → 1,95 | +22% | 0,11 | +51% · −7,5% | **+270% · −39,2%** |
| 186 | IFR + MACD + Quinta + Pullback + Onda ⚠️ | +30% | −5,1% | 3,3 | 1,16 → 1,68 | +24% | 0,01 | +40% · −4,8% | **+189% · −28,1%** |
| 187 | MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +32% | −6,7% | 2,8 | 1,40 → 1,56 | +26% | 0,06 | +44% · −7,0% | **+168% · −29,5%** |
| 188 | MACD + Quinta + Bollinger + Tendência ⚠️ | +30% | −6,9% | 2,5 | 1,58 → 1,51 | +25% | 0,18 | +46% · −7,6% | **+180% · −32,1%** |
| 189 | 1ª vela 80 + Quinta + Bollinger + Tendência + Onda ⚠️ | +31% | −5,9% | 3,0 | 1,17 → 1,74 | +21% | 0,07 | +47% · −6,4% | **+247% · −34,7%** |
| 190 | ADX + IFR + Bollinger + Tendência + Onda | +37% | −8,8% | 2,8 | 1,19 → 1,82 | +28% | 0,29 | +63% · −11,3% | **+358% · −51,6%** |
| 191 | ADX + Pullback + Bollinger + Tendência + Onda | +34% | −7,8% | 2,7 | 1,30 → 1,71 | +27% | 0,19 | +56% · −9,4% | **+300% · −47,8%** |
| 192 | IFR + MACD + Bollinger | +33% | −7,8% | 2,6 | 1,28 → 1,77 | +26% | 0,35 | +54% · −7,9% | **+166% · −25,4%** |
| 193 | IFR + MACD + 1ª vela 80 + Quinta ⚠️ | +31% | −6,8% | 2,6 | 1,23 → 1,83 | +24% | 0,03 | +44% · −5,2% | **+167% · −23,5%** |
| 194 | ADX + IFR | +41% | −8,5% | 3,3 | 1,00 → 1,83 | +20% | 0,32 | +71% · −14,3% | **+134% · −29,5%** |
| 195 | ADX + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +29% | −5,5% | 3,0 | 1,02 → 1,96 | +20% | 0,14 | +47% · −8,5% | **+239% · −43,4%** |
| 196 | ADX + IFR + MACD + Tendência | +40% | −10,3% | 2,6 | 1,31 → 1,68 | +29% | 0,37 | +64% · −12,7% | **+263% · −49,8%** |
| 197 | ADX + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +35% | −7,5% | 3,0 | 1,18 → 1,72 | +28% | 0,12 | +54% · −8,9% | **+273% · −46,0%** |
| 198 | ADX + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | +39% | −8,6% | 3,0 | 1,09 → 1,82 | +29% | 0,22 | +62% · −10,5% | **+326% · −49,4%** |
| 199 | ADX + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +31% | −5,7% | 3,2 | 0,98 → 1,91 | +22% | 0,13 | +51% · −7,6% | **+266% · −39,0%** |
| 200 | ADX + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | +32% | −5,2% | 3,8 | 0,85 → 1,93 | +23% | 0,03 | +50% · −7,7% | **+245% · −37,5%** |
| 201 | 1ª vela 80 + Quinta + Pullback + Bollinger + Onda ⚠️ | +26% | −4,8% | 2,8 | 1,14 → 1,85 | +19% | −0,02 | +39% · −3,8% | **+189% · −21,9%** |
| 202 | IFR + Bollinger + Tendência + Onda | +37% | −9,0% | 2,6 | 1,27 → 1,71 | +32% | 0,29 | +59% · −10,3% | **+264% · −40,1%** |
| 203 | ADX + IFR + Pullback + Onda | +35% | −7,1% | 3,1 | 1,06 → 1,80 | +22% | 0,10 | +55% · −8,6% | **+211% · −34,5%** |
| 204 | Pullback + Bollinger + Tendência + Onda | +32% | −7,6% | 2,6 | 1,38 → 1,54 | +29% | 0,17 | +50% · −7,7% | **+207% · −32,8%** |
| 205 | IFR + Pullback + Onda | +33% | −6,6% | 3,1 | 1,13 → 1,65 | +26% | 0,06 | +48% · −7,3% | **+134% · −23,4%** |
| 206 | 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +34% | −7,2% | 2,9 | 1,24 → 1,56 | +29% | 0,10 | +49% · −7,6% | **+190% · −32,4%** |
| 207 | ADX + IFR + Quinta + Tendência + Onda ⚠️ | +35% | −8,0% | 2,8 | 1,16 → 1,73 | +27% | 0,12 | +55% · −9,9% | **+273% · −47,4%** |
| 208 | IFR + 1ª vela 80 + Tendência + Onda ⚠️ | +38% | −8,8% | 2,9 | 1,15 → 1,72 | +30% | 0,23 | +58% · −9,3% | **+244% · −37,3%** |
| 209 | ADX + MACD + Bollinger + Tendência | +36% | −9,2% | 2,5 | 1,29 → 1,68 | +28% | 0,38 | +61% · −12,3% | **+256% · −49,9%** |
| 210 | IFR + MACD + Pullback + Tendência + Onda | +36% | −8,7% | 2,6 | 1,32 → 1,57 | +30% | 0,22 | +51% · −8,6% | **+265% · −42,4%** |
| 211 | IFR + MACD + Tendência | +40% | −11,1% | 2,5 | 1,44 → 1,50 | +30% | 0,47 | +60% · −11,8% | **+180% · −34,8%** |
| 212 | IFR + MACD + Quinta ⚠️ | +30% | −6,2% | 2,8 | 1,22 → 1,63 | +23% | 0,06 | +42% · −5,8% | **+111% · −19,2%** |
| 213 | ADX + IFR + MACD + Pullback + Onda | +34% | −7,0% | 3,0 | 1,02 → 1,77 | +23% | 0,13 | +52% · −8,1% | **+257% · −41,4%** |
| 214 | MACD + 1ª vela 80 + Pullback ⚠️ | +30% | −7,1% | 2,4 | 1,36 → 1,63 | +25% | −0,05 | +41% · −4,7% | **+110% · −16,8%** |
| 215 | IFR + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +33% | −7,0% | 2,9 | 1,09 → 1,78 | +26% | 0,11 | +47% · −5,3% | **+241% · −30,7%** |
| 216 | ADX + 1ª vela 80 + Bollinger ⚠️ | +32% | −6,4% | 3,0 | 0,86 → 1,97 | +19% | 0,30 | +59% · −12,1% | **+174% · −36,7%** |
| 217 | ADX + Quinta + Tendência ⚠️ | +34% | −8,9% | 2,4 | 1,40 → 1,56 | +25% | 0,10 | +54% · −14,5% | **+148% · −43,4%** |
| 218 | IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | +33% | −7,0% | 2,9 | 0,93 → 1,97 | +21% | 0,21 | +53% · −6,4% | **+233% · −28,2%** |
| 219 | ADX + Quinta + Pullback + Bollinger + Onda ⚠️ | +28% | −5,3% | 2,8 | 1,07 → 1,80 | +20% | 0,05 | +44% · −6,9% | **+214% · −35,3%** |
| 220 | ADX + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +35% | −7,8% | 2,9 | 1,03 → 1,82 | +24% | 0,25 | +59% · −10,0% | **+322% · −47,9%** |
| 221 | ADX + Quinta + Pullback + Tendência + Onda ⚠️ | +32% | −7,2% | 2,6 | 1,26 → 1,60 | +25% | 0,05 | +48% · −8,3% | **+223% · −46,5%** |
| 222 | ADX + Quinta + Pullback ⚠️ | +27% | −6,4% | 2,2 | 1,43 → 1,56 | +16% | 0,03 | +41% · −9,7% | **+102% · −30,6%** |
| 223 | ADX + MACD + 1ª vela 80 + Tendência ⚠️ | +37% | −9,0% | 2,7 | 1,17 → 1,70 | +29% | 0,26 | +59% · −11,5% | **+235% · −46,9%** |
| 224 | MACD + Pullback + Tendência | +34% | −8,7% | 2,5 | 1,69 → 1,31 | +23% | 0,15 | +48% · −11,0% | **+135% · −32,6%** |
| 225 | ADX + IFR + Bollinger + Onda | +35% | −7,2% | 3,1 | 0,85 → 1,92 | +23% | 0,24 | +60% · −9,8% | **+252% · −39,2%** |
| 226 | IFR + Quinta + Tendência + Onda ⚠️ | +34% | −8,1% | 2,7 | 1,23 → 1,60 | +30% | 0,06 | +50% · −8,5% | **+193% · −35,0%** |
| 227 | ADX + MACD + Pullback | +32% | −7,1% | 2,7 | 1,18 → 1,63 | +20% | 0,01 | +49% · −10,9% | **+132% · −36,3%** |
| 228 | ADX + IFR + 1ª vela 80 + Onda ⚠️ | +36% | −6,8% | 3,5 | 0,76 → 1,89 | +24% | 0,18 | +59% · −9,7% | **+229% · −39,3%** |
| 229 | ADX + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +29% | −5,2% | 3,1 | 0,93 → 1,78 | +21% | −0,03 | +43% · −6,5% | **+193% · −34,6%** |
| 230 | MACD + Pullback + Bollinger + Tendência + Onda | +32% | −7,8% | 2,5 | 1,29 → 1,56 | +29% | 0,22 | +48% · −7,8% | **+255% · −40,0%** |
| 231 | ADX + MACD + Quinta + Tendência ⚠️ | +33% | −8,2% | 2,5 | 1,27 → 1,58 | +26% | 0,15 | +51% · −11,8% | **+188% · −47,8%** |
| 232 | Quinta + Pullback ⚠️ | +21% | −2,7% | 3,1 | 2,18 → 0,85 | +14% | −0,02 | +26% · −4,2% | **+39% · −9,3%** |
| 233 | MACD + Bollinger + Tendência | +34% | −9,7% | 2,2 | 1,45 → 1,46 | +27% | 0,44 | +55% · −10,7% | **+167% · −32,1%** |
| 234 | IFR + Bollinger + Onda | +33% | −6,8% | 3,0 | 0,89 → 1,84 | +24% | 0,20 | +55% · −7,9% | **+167% · −25,4%** |
| 235 | ADX + IFR + MACD | +38% | −8,4% | 3,0 | 0,95 → 1,77 | +22% | 0,30 | +61% · −12,0% | **+174% · −36,2%** |
| 236 | MACD + 1ª vela 80 + Tendência ⚠️ | +37% | −9,4% | 2,5 | 1,28 → 1,51 | +29% | 0,31 | +54% · −10,3% | **+155% · −30,7%** |
| 237 | IFR + MACD + Pullback + Onda | +33% | −6,8% | 2,9 | 1,06 → 1,64 | +26% | 0,13 | +46% · −6,3% | **+176% · −28,1%** |
| 238 | IFR + 1ª vela 80 + Quinta + Onda ⚠️ | +31% | −5,9% | 3,0 | 0,87 → 1,85 | +21% | −0,05 | +44% · −5,2% | **+166% · −23,3%** |
| 239 | MACD + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +33% | −7,7% | 2,7 | 1,19 → 1,57 | +27% | 0,17 | +47% · −7,1% | **+235% · −37,2%** |
| 240 | ADX + Quinta + Bollinger + Tendência + Onda ⚠️ | +32% | −7,3% | 2,6 | 1,10 → 1,72 | +26% | 0,13 | +52% · −9,1% | **+267% · −45,0%** |
| 241 | 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +34% | −7,8% | 2,7 | 1,08 → 1,70 | +22% | 0,26 | +54% · −8,4% | **+231% · −34,7%** |
| 242 | MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +26% | −6,6% | 2,1 | 1,16 → 1,84 | +17% | 0,09 | +40% · −5,3% | **+150% · −23,6%** |
| 243 | ADX + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +33% | −7,0% | 2,9 | 0,99 → 1,73 | +24% | 0,05 | +51% · −8,6% | **+242% · −43,5%** |
| 244 | Quinta + Pullback + Bollinger + Onda ⚠️ | +25% | −4,6% | 2,7 | 1,15 → 1,63 | +22% | −0,02 | +37% · −4,4% | **+129% · −20,0%** |
| 245 | 1ª vela 80 + Bollinger ⚠️ | +29% | −6,6% | 2,4 | 1,03 → 1,89 | +14% | 0,29 | +50% · −7,5% | **+96% · −16,3%** |
| 246 | Quinta + Pullback + Tendência + Onda ⚠️ | +30% | −6,9% | 2,5 | 1,34 → 1,39 | +25% | 0,01 | +41% · −6,4% | **+144% · −27,2%** |
| 247 | ADX + MACD + 1ª vela 80 + Bollinger ⚠️ | +32% | −7,1% | 2,7 | 0,90 → 1,92 | +20% | 0,29 | +55% · −10,9% | **+223% · −42,8%** |
| 248 | ADX + IFR + Tendência + Onda | +40% | −10,4% | 2,6 | 1,08 → 1,70 | +30% | 0,28 | +65% · −12,7% | **+256% · −48,2%** |
| 249 | Quinta + Tendência ⚠️ | +31% | −7,4% | 2,5 | 1,77 → 1,21 | +19% | −0,10 | +44% · −9,8% | **+78% · −21,7%** |
| 250 | MACD + Pullback | +28% | −6,1% | 2,6 | 1,44 → 1,29 | +23% | −0,16 | +37% · −7,6% | **+64% · −15,6%** |
| 251 | IFR + MACD + Bollinger + Tendência + Onda | +36% | −9,3% | 2,4 | 1,17 → 1,66 | +30% | 0,35 | +56% · −9,9% | **+312% · −46,5%** |
| 252 | 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +29% | −6,2% | 2,6 | 1,03 → 1,80 | +20% | 0,10 | +44% · −5,0% | **+176% · −22,2%** |
| 253 | ADX + Tendência | +43% | −12,3% | 2,4 | 1,26 → 1,51 | +29% | 0,32 | +72% · −24,1% | **+136% · −45,8%** |
| 254 | IFR + MACD + 1ª vela 80 ⚠️ | +35% | −9,4% | 2,4 | 1,10 → 1,77 | +26% | 0,26 | +52% · −7,3% | **+155% · −23,5%** |
| 255 | IFR + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +37% | −9,2% | 2,6 | 1,09 → 1,67 | +28% | 0,30 | +54% · −9,1% | **+288% · −44,0%** |
| 256 | ADX + MACD + Quinta + Bollinger ⚠️ | +28% | −6,1% | 2,5 | 0,99 → 1,83 | +19% | 0,16 | +46% · −9,6% | **+175% · −39,3%** |
| 257 | ADX + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +29% | −5,4% | 3,0 | 0,73 → 1,91 | +17% | 0,08 | +47% · −7,6% | **+233% · −41,0%** |
| 258 | IFR + MACD + Quinta + Bollinger + Onda ⚠️ | +30% | −6,3% | 2,6 | 0,96 → 1,79 | +23% | 0,12 | +44% · −6,1% | **+228% · −33,5%** |
| 259 | ADX + IFR + Quinta + Onda ⚠️ | +32% | −6,5% | 3,0 | 0,80 → 1,80 | +21% | 0,03 | +50% · −8,6% | **+183% · −34,0%** |
| 260 | ADX + Pullback + Tendência + Onda | +36% | −9,3% | 2,5 | 1,18 → 1,56 | +27% | 0,16 | +55% · −11,6% | **+208% · −49,2%** |
| 261 | ADX + IFR + MACD + 1ª vela 80 + Onda ⚠️ | +35% | −7,5% | 3,0 | 0,77 → 1,85 | +23% | 0,23 | +55% · −8,7% | **+274% · −43,3%** |
| 262 | MACD + Quinta + Pullback + Tendência + Onda ⚠️ | +30% | −7,1% | 2,5 | 1,26 → 1,44 | +28% | 0,07 | +41% · −6,4% | **+185% · −35,0%** |
| 263 | ADX + IFR + MACD + Bollinger + Onda | +34% | −7,7% | 2,8 | 0,85 → 1,86 | +24% | 0,28 | +56% · −9,5% | **+301% · −45,6%** |
| 264 | ADX + Quinta + Bollinger ⚠️ | +27% | −5,9% | 2,4 | 1,01 → 1,82 | +17% | 0,18 | +48% · −10,4% | **+130% · −32,8%** |
| 265 | MACD + Quinta + Pullback + Bollinger + Onda ⚠️ | +26% | −5,5% | 2,5 | 1,10 → 1,67 | +22% | 0,03 | +38% · −4,6% | **+175% · −25,3%** |
| 266 | ADX + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +32% | −6,5% | 3,0 | 0,86 → 1,76 | +23% | 0,10 | +48% · −7,4% | **+225% · −40,5%** |
| 267 | ADX + MACD + Pullback + Bollinger + Onda | +31% | −6,8% | 2,6 | 0,95 → 1,78 | +22% | 0,16 | +49% · −7,8% | **+249% · −41,3%** |
| 268 | Quinta + Bollinger + Tendência + Onda ⚠️ | +30% | −7,0% | 2,4 | 1,17 → 1,56 | +24% | 0,07 | +46% · −7,6% | **+180% · −32,3%** |
| 269 | 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +32% | −6,9% | 2,7 | 1,03 → 1,58 | +22% | −0,02 | +45% · −6,6% | **+165% · −29,2%** |
| 270 | ADX + MACD + Pullback + Tendência + Onda | +35% | −8,9% | 2,5 | 1,13 → 1,59 | +27% | 0,19 | +53% · −9,9% | **+251% · −53,5%** |
| 271 | ADX + 1ª vela 80 + Quinta ⚠️ | +29% | −5,5% | 3,0 | 0,78 → 1,80 | +19% | −0,04 | +46% · −10,0% | **+118% · −31,8%** |
| 272 | MACD + Quinta + Bollinger ⚠️ | +25% | −5,9% | 2,0 | 1,18 → 1,64 | +19% | 0,09 | +37% · −4,6% | **+96% · −16,7%** |
| 273 | ADX + Pullback + Bollinger + Onda | +31% | −6,9% | 2,6 | 0,96 → 1,76 | +21% | 0,14 | +51% · −8,9% | **+199% · −35,1%** |
| 274 | MACD + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +33% | −8,3% | 2,5 | 1,04 → 1,67 | +22% | 0,32 | +52% · −8,4% | **+280% · −41,6%** |
| 275 | MACD + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +29% | −7,0% | 2,3 | 1,02 → 1,78 | +20% | 0,15 | +44% · −5,2% | **+227% · −28,2%** |
| 276 | IFR + MACD + Quinta + Tendência + Onda ⚠️ | +34% | −8,6% | 2,4 | 1,14 → 1,58 | +29% | 0,16 | +48% · −8,5% | **+234% · −42,0%** |
| 277 | IFR + Tendência + Onda | +40% | −11,3% | 2,4 | 1,14 → 1,56 | +35% | 0,32 | +61% · −11,8% | **+179% · −34,9%** |
| 278 | ADX + Pullback | +32% | −8,7% | 2,2 | 1,24 → 1,48 | +16% | 0,02 | +52% · −14,8% | **+93% · −31,2%** |
| 279 | MACD + Quinta + Tendência ⚠️ | +31% | −8,5% | 2,2 | 1,42 → 1,31 | +25% | 0,11 | +43% · −9,7% | **+113% · −29,2%** |
| 280 | ADX + IFR + MACD + Tendência + Onda | +38% | −10,4% | 2,4 | 1,03 → 1,68 | +29% | 0,32 | +60% · −11,8% | **+296% · −53,1%** |
| 281 | ADX + 1ª vela 80 + Pullback + Onda ⚠️ | +32% | −6,7% | 2,9 | 0,83 → 1,74 | +22% | 0,06 | +50% · −8,4% | **+179% · −35,1%** |
| 282 | IFR + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +33% | −8,3% | 2,4 | 0,91 → 1,87 | +21% | 0,27 | +51% · −6,8% | **+285% · −35,8%** |
| 283 | IFR + Quinta + Onda ⚠️ | +30% | −5,8% | 3,0 | 0,82 → 1,67 | +24% | −0,10 | +42% · −6,7% | **+112% · −22,0%** |
| 284 | ADX + IFR + MACD + Quinta + Onda ⚠️ | +32% | −6,9% | 2,8 | 0,80 → 1,77 | +22% | 0,10 | +49% · −8,0% | **+225% · −41,0%** |
| 285 | ADX + 1ª vela 80 + Tendência + Onda ⚠️ | +37% | −9,1% | 2,7 | 0,91 → 1,69 | +25% | 0,21 | +59% · −11,1% | **+226% · −45,1%** |
| 286 | ADX + Bollinger + Tendência + Onda | +36% | −9,4% | 2,4 | 1,01 → 1,69 | +28% | 0,29 | +61% · −11,8% | **+250% · −47,0%** |
| 287 | ADX + MACD + 1ª vela 80 + Quinta ⚠️ | +30% | −6,4% | 2,6 | 0,84 → 1,81 | +20% | 0,04 | +45% · −9,3% | **+159% · −38,5%** |
| 288 | ADX + MACD + Tendência | +39% | −11,5% | 2,3 | 1,16 → 1,54 | +29% | 0,35 | +62% · −17,5% | **+175% · −50,0%** |
| 289 | Pullback + Tendência + Onda | +34% | −9,6% | 2,3 | 1,24 → 1,34 | +26% | 0,19 | +49% · −8,8% | **+133% · −27,1%** |
| 290 | IFR + MACD | +37% | −9,9% | 2,4 | 1,05 → 1,57 | +27% | 0,41 | +54% · −9,0% | **+101% · −19,0%** |
| 291 | MACD + Quinta + Bollinger + Tendência + Onda ⚠️ | +30% | −7,8% | 2,2 | 1,09 → 1,56 | +24% | 0,16 | +45% · −7,8% | **+225% · −39,5%** |
| 292 | IFR + 1ª vela 80 + Onda ⚠️ | +35% | −8,3% | 2,7 | 0,76 → 1,80 | +21% | 0,18 | +53% · −7,3% | **+153% · −23,2%** |
| 293 | ADX + MACD + Quinta + Pullback + Onda ⚠️ | +29% | −6,2% | 2,6 | 0,91 → 1,66 | +21% | 0,01 | +42% · −6,8% | **+180% · −36,9%** |
| 294 | MACD + 1ª vela 80 + Bollinger ⚠️ | +30% | −9,5% | 1,8 | 0,99 → 1,78 | +16% | 0,33 | +47% · −7,7% | **+138% · −24,3%** |
| 295 | MACD + Pullback + Tendência + Onda | +34% | −9,3% | 2,2 | 1,17 → 1,41 | +30% | 0,22 | +47% · −8,4% | **+172% · −34,9%** |
| 296 | MACD + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +32% | −7,6% | 2,4 | 1,00 → 1,58 | +22% | 0,10 | +44% · −7,0% | **+207% · −36,7%** |
| 297 | ADX + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +32% | −7,1% | 2,7 | 0,67 → 1,85 | +17% | 0,26 | +52% · −8,9% | **+267% · −45,2%** |
| 298 | ADX + MACD + Bollinger + Tendência + Onda | +35% | −9,6% | 2,3 | 0,98 → 1,68 | +26% | 0,32 | +57% · −11,1% | **+296% · −51,4%** |
| 299 | ADX + 1ª vela 80 + Bollinger + Onda ⚠️ | +32% | −7,0% | 2,7 | 0,62 → 1,88 | +16% | 0,24 | +55% · −10,6% | **+218% · −42,6%** |
| 300 | ADX + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +36% | −9,4% | 2,5 | 0,90 → 1,68 | +24% | 0,26 | +56% · −10,3% | **+269% · −49,9%** |
| 301 | 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +27% | −5,5% | 2,5 | 0,96 → 1,62 | +20% | −0,10 | +35% · −4,8% | **+117% · −21,7%** |
| 302 | IFR + MACD + Tendência + Onda | +38% | −11,1% | 2,3 | 1,06 → 1,54 | +33% | 0,38 | +56% · −11,0% | **+219% · −41,9%** |
| 303 | ADX + IFR + Onda | +38% | −9,0% | 2,8 | 0,70 → 1,77 | +23% | 0,19 | +61% · −11,5% | **+170% · −34,0%** |
| 304 | IFR + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +31% | −7,5% | 2,4 | 0,86 → 1,78 | +21% | 0,06 | +43% · −5,4% | **+210% · −30,5%** |
| 305 | MACD + Tendência | +38% | −13,4% | 1,9 | 1,28 → 1,26 | +29% | 0,58 | +55% · −15,6% | **+103% · −30,3%** |
| 306 | MACD + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +27% | −6,3% | 2,3 | 0,96 → 1,66 | +20% | −0,02 | +37% · −4,1% | **+160% · −25,5%** |
| 307 | IFR + MACD + Bollinger + Onda | +33% | −8,2% | 2,4 | 0,86 → 1,75 | +24% | 0,29 | +51% · −8,0% | **+213% · −33,3%** |
| 308 | ADX + Quinta + Pullback + Onda ⚠️ | +28% | −6,2% | 2,5 | 0,90 → 1,59 | +19% | −0,01 | +42% · −7,7% | **+138% · −31,1%** |
| 309 | Pullback + Bollinger + Onda | +28% | −6,4% | 2,3 | 1,00 → 1,58 | +23% | 0,10 | +43% · −6,2% | **+118% · −20,0%** |
| 310 | ADX + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +30% | −6,2% | 2,8 | 0,62 → 1,76 | +17% | 0,05 | +45% · −7,7% | **+196% · −41,2%** |
| 311 | ADX + Quinta + Tendência + Onda ⚠️ | +33% | −8,7% | 2,4 | 0,97 → 1,58 | +26% | 0,06 | +51% · −10,4% | **+183% · −45,7%** |
| 312 | Bollinger + Tendência + Onda | +34% | −9,9% | 2,2 | 1,05 → 1,52 | +26% | 0,30 | +56% · −10,6% | **+167% · −32,2%** |
| 313 | MACD + Pullback + Bollinger + Onda | +29% | −7,1% | 2,2 | 0,98 → 1,63 | +23% | 0,14 | +43% · −6,0% | **+162% · −25,3%** |
| 314 | 1ª vela 80 + Tendência + Onda ⚠️ | +37% | −9,7% | 2,5 | 0,93 → 1,54 | +23% | 0,24 | +54% · −9,4% | **+153% · −29,1%** |
| 315 | ADX + MACD + Bollinger | +32% | −8,5% | 2,2 | 0,83 → 1,78 | +21% | 0,34 | +56% · −13,1% | **+162% · −38,7%** |
| 316 | ADX + MACD + Quinta + Bollinger + Onda ⚠️ | +29% | −6,3% | 2,5 | 0,70 → 1,78 | +19% | 0,12 | +46% · −8,0% | **+218% · −42,0%** |
| 317 | ADX + Bollinger | +32% | −7,9% | 2,4 | 0,79 → 1,76 | +18% | 0,46 | +63% · −16,1% | **+119% · −32,1%** |
| 318 | ADX + IFR + MACD + Onda | +36% | −9,0% | 2,6 | 0,72 → 1,74 | +24% | 0,25 | +56% · −10,4% | **+210% · −40,9%** |
| 319 | Tendência | +46% | −16,1% | 2,1 | 1,58 → 1,12 | +22% | — | +70% · −23,6% | **+70% · −23,6%** |
| 320 | ADX + MACD + Quinta + Tendência + Onda ⚠️ | +33% | −8,9% | 2,3 | 0,95 → 1,59 | +26% | 0,13 | +49% · −9,7% | **+222% · −50,1%** |
| 321 | Pullback | +26% | −4,6% | 2,8 | 1,87 → 0,63 | +11% | — | +32% · −9,1% | **+32% · −9,1%** |
| 322 | ADX + 1ª vela 80 + Quinta + Onda ⚠️ | +30% | −6,2% | 2,7 | 0,56 → 1,75 | +16% | −0,02 | +45% · −9,2% | **+154% · −39,0%** |
| 323 | MACD + Bollinger + Tendência + Onda | +34% | −10,1% | 2,1 | 1,00 → 1,53 | +25% | 0,37 | +52% · −10,1% | **+210% · −39,5%** |
| 324 | IFR + MACD + Quinta + Onda ⚠️ | +30% | −7,2% | 2,4 | 0,80 → 1,64 | +24% | 0,05 | +42% · −6,2% | **+150% · −27,8%** |
| 325 | MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +35% | −9,9% | 2,3 | 0,91 → 1,54 | +23% | 0,32 | +51% · −9,1% | **+193% · −36,7%** |
| 326 | IFR + Onda | +37% | −9,2% | 2,6 | 0,68 → 1,62 | +27% | 0,19 | +55% · −11,1% | **+102% · −22,7%** |
| 327 | ADX + 1ª vela 80 ⚠️ | +35% | −8,8% | 2,5 | 0,62 → 1,74 | +20% | 0,14 | +60% · −15,9% | **+108% · −32,0%** |
| 328 | ADX + MACD + 1ª vela 80 ⚠️ | +34% | −8,9% | 2,4 | 0,71 → 1,76 | +20% | 0,21 | +54% · −12,7% | **+147% · −37,9%** |
| 329 | ADX + Quinta + Bollinger + Onda ⚠️ | +28% | −6,3% | 2,4 | 0,66 → 1,78 | +18% | 0,07 | +47% · −8,4% | **+172% · −36,2%** |
| 330 | IFR + MACD + 1ª vela 80 + Onda ⚠️ | +34% | −9,6% | 2,2 | 0,77 → 1,74 | +21% | 0,27 | +50% · −7,0% | **+195% · −30,3%** |
| 331 | ADX + MACD + Pullback + Onda | +32% | −8,0% | 2,4 | 0,81 → 1,62 | +22% | 0,10 | +48% · −8,7% | **+167% · −39,3%** |
| 332 | 1ª vela 80 + Quinta ⚠️ | +24% | −4,9% | 2,3 | 0,86 → 1,57 | +14% | −0,35 | +33% · −5,7% | **+54% · −13,7%** |
| 333 | Quinta + Tendência + Onda ⚠️ | +31% | −8,8% | 2,1 | 1,00 → 1,36 | +26% | −0,04 | +43% · −8,3% | **+112% · −26,6%** |
| 334 | MACD + 1ª vela 80 + Quinta ⚠️ | +27% | −7,6% | 1,8 | 0,90 → 1,62 | +16% | −0,06 | +36% · −5,0% | **+88% · −17,8%** |
| 335 | ADX + MACD + 1ª vela 80 + Onda ⚠️ | +33% | −8,1% | 2,5 | 0,53 → 1,73 | +17% | 0,22 | +51% · −10,4% | **+182% · −42,6%** |
| 336 | 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +27% | −6,3% | 2,2 | 0,71 → 1,82 | +13% | 0,01 | +40% · −5,0% | **+149% · −24,5%** |
| 337 | MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +30% | −8,1% | 2,1 | 0,86 → 1,61 | +20% | 0,11 | +41% · −5,6% | **+148% · −24,7%** |
| 338 | ADX + Tendência + Onda | +39% | −11,8% | 2,2 | 0,87 → 1,54 | +30% | 0,25 | +62% · −16,3% | **+169% · −48,4%** |
| 339 | MACD + Quinta + Pullback + Onda ⚠️ | +26% | −6,2% | 2,2 | 0,92 → 1,46 | +22% | −0,03 | +34% · −5,0% | **+107% · −22,9%** |
| 340 | MACD + Bollinger | +28% | −9,5% | 1,6 | 0,93 → 1,56 | +20% | 0,39 | +47% · −7,6% | **+87% · −16,2%** |
| 341 | MACD + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +27% | −7,3% | 2,0 | 0,75 → 1,78 | +15% | 0,09 | +41% · −5,4% | **+196% · −31,2%** |
| 342 | MACD + Quinta + Tendência + Onda ⚠️ | +31% | −9,2% | 2,0 | 0,96 → 1,41 | +25% | 0,11 | +43% · −8,3% | **+149% · −34,4%** |
| 343 | ADX + MACD + Tendência + Onda | +37% | −11,4% | 2,1 | 0,87 → 1,56 | +28% | 0,30 | +57% · −13,1% | **+208% · −52,6%** |
| 344 | 1ª vela 80 + Pullback + Onda ⚠️ | +30% | −7,7% | 2,2 | 0,84 → 1,56 | +20% | 0,06 | +41% · −6,4% | **+107% · −21,5%** |
| 345 | ADX + MACD + Bollinger + Onda | +32% | −8,1% | 2,3 | 0,60 → 1,74 | +19% | 0,27 | +53% · −10,3% | **+203% · −41,4%** |
| 346 | Quinta + Pullback + Onda ⚠️ | +25% | −5,5% | 2,2 | 0,91 → 1,29 | +21% | −0,08 | +31% · −5,5% | **+71% · −19,2%** |
| 347 | ADX + MACD + Quinta ⚠️ | +29% | −7,5% | 2,1 | 0,76 → 1,63 | +18% | 0,04 | +44% · −11,1% | **+109% · −34,1%** |
| 348 | ADX + Pullback + Onda | +32% | −8,6% | 2,2 | 0,78 → 1,54 | +20% | 0,08 | +49% · −10,4% | **+127% · −34,2%** |
| 349 | ADX + 1ª vela 80 + Onda ⚠️ | +34% | −8,6% | 2,4 | 0,46 → 1,71 | +15% | 0,17 | +54% · −13,8% | **+142% · −40,7%** |
| 350 | Tendência + Onda | +38% | −13,7% | 1,9 | 0,88 → 1,30 | +28% | 0,36 | +56% · −13,1% | **+102% · −26,5%** |
| 351 | IFR + MACD + Onda | +35% | −10,0% | 2,2 | 0,70 → 1,59 | +25% | 0,31 | +50% · −8,8% | **+138% · −27,6%** |
| 352 | MACD + Tendência + Onda | +36% | −12,7% | 1,8 | 0,86 → 1,37 | +27% | 0,43 | +51% · −11,6% | **+137% · −34,4%** |
| 353 | MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +30% | −9,5% | 1,8 | 0,64 → 1,74 | +14% | 0,30 | +46% · −7,1% | **+182% · −30,9%** |
| 354 | ADX + MACD + Quinta + Onda ⚠️ | +29% | −7,4% | 2,2 | 0,54 → 1,63 | +19% | 0,02 | +44% · −8,7% | **+143% · −37,0%** |
| 355 | MACD + Pullback + Onda | +29% | −8,6% | 1,9 | 0,80 → 1,40 | +24% | 0,11 | +39% · −7,1% | **+97% · −22,8%** |
| 356 | ADX + Bollinger + Onda | +32% | −8,8% | 2,2 | 0,53 → 1,73 | +18% | 0,23 | +57% · −11,5% | **+159% · −35,5%** |
| 357 | MACD + Quinta + Bollinger + Onda ⚠️ | +26% | −7,1% | 1,9 | 0,66 → 1,63 | +16% | 0,07 | +39% · −5,3% | **+137% · −24,7%** |
| 358 | 1ª vela 80 + Bollinger + Onda ⚠️ | +30% | −8,6% | 1,9 | 0,57 → 1,77 | +11% | 0,25 | +48% · −7,3% | **+138% · −24,8%** |
| 359 | MACD + Quinta ⚠️ | +24% | −7,1% | 1,5 | 0,81 → 1,28 | +20% | −0,14 | +29% · −4,4% | **+47% · −9,7%** |
| 360 | MACD + 1ª vela 80 ⚠️ | +31% | −12,4% | 1,5 | 0,71 → 1,54 | +15% | 0,31 | +44% · −8,5% | **+80% · −17,9%** |
| 361 | ADX + MACD | +35% | −11,8% | 1,9 | 0,60 → 1,57 | +19% | 0,17 | +56% · −17,7% | **+99% · −35,8%** |
| 362 | Quinta + Bollinger + Onda ⚠️ | +25% | −6,5% | 1,8 | 0,60 → 1,62 | +14% | −0,07 | +38% · −5,3% | **+97% · −17,6%** |
| 363 | ADX + Quinta ⚠️ | +28% | −8,8% | 1,7 | 0,68 → 1,49 | +14% | 0,08 | +44% · −13,8% | **+74% · −27,5%** |
| 364 | Pullback + Onda | +28% | −8,7% | 1,8 | 0,76 → 1,21 | +22% | 0,16 | +37% · −9,5% | **+63% · −19,9%** |
| 365 | MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +28% | −8,9% | 1,7 | 0,58 → 1,61 | +14% | 0,01 | +37% · −6,4% | **+125% · −28,0%** |
| 366 | ADX + MACD + Onda | +33% | −10,2% | 2,0 | 0,43 → 1,59 | +19% | 0,19 | +52% · −11,9% | **+132% · −38,6%** |
| 367 | ADX + Quinta + Onda ⚠️ | +29% | −7,8% | 2,1 | 0,45 → 1,56 | +18% | −0,08 | +44% · −10,8% | **+106% · −30,6%** |
| 368 | MACD + Bollinger + Onda | +29% | −9,8% | 1,7 | 0,53 → 1,58 | +15% | 0,30 | +45% · −7,6% | **+126% · −24,5%** |
| 369 | 1ª vela 80 ⚠️ | +31% | −11,7% | 1,6 | 0,59 → 1,44 | +9% | — | +47% · −13,6% | **+47% · −13,6%** |
| 370 | 1ª vela 80 + Quinta + Onda ⚠️ | +27% | −8,1% | 1,7 | 0,49 → 1,57 | +11% | −0,15 | +36% · −6,4% | **+87% · −23,6%** |
| 371 | Quinta ⚠️ | +17% | −3,7% | 1,1 | 1,22 → 0,67 | +15% | — | +19% · −2,6% | **+19% · −2,6%** |
| 372 | MACD + 1ª vela 80 + Onda ⚠️ | +31% | −12,0% | 1,5 | 0,46 → 1,57 | +12% | 0,31 | +44% · −8,7% | **+114% · −27,4%** |
| 373 | ADX + Onda | +34% | −12,1% | 1,8 | 0,32 → 1,51 | +18% | 0,06 | +56% · −16,1% | **+96% · −33,6%** |
| 374 | ADX | +37% | −15,4% | 1,6 | 0,45 → 1,41 | +12% | — | +65% · −30,8% | **+65% · −30,8%** |
| 375 | MACD + Quinta + Onda ⚠️ | +26% | −8,7% | 1,6 | 0,45 → 1,41 | +15% | −0,06 | +34% · −6,3% | **+79% · −23,8%** |
| 376 | Bollinger + Onda | +28% | −10,0% | 1,5 | 0,42 → 1,55 | +12% | 0,17 | +48% · −8,5% | **+88% · −18,0%** |
| 377 | MACD | +30% | −15,4% | 1,1 | 0,52 → 1,17 | +21% | — | +40% · −10,5% | **+40% · −10,5%** |
| 378 | 1ª vela 80 + Onda ⚠️ | +31% | −12,5% | 1,5 | 0,34 → 1,51 | +8% | 0,29 | +45% · −11,3% | **+79% · −24,2%** |
| 379 | MACD + Onda | +31% | −13,4% | 1,3 | 0,31 → 1,35 | +13% | 0,34 | +41% · −9,8% | **+70% · −23,6%** |
| 380 | Quinta + Onda ⚠️ | +24% | −8,6% | 1,3 | 0,30 → 1,24 | +12% | −0,38 | +30% · −8,2% | **+47% · −20,0%** |
| 381 | Onda | +29% | −18,7% | 0,9 | 0,11 → 1,15 | +5% | — | +40% · −19,8% | **+40% · −19,8%** |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+11%* | *−20,9%* | — | — | — | — | — | — |

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
| 2026* | +43,2% | +52,1% | +30,4% | +26,9% | +7,5% | +20,9% | +18,2% | +72,0% | +40,0% | +32,7% | +30,3% | +96,9% | +11,5% | +9,6% | Rec. 1% |
| **Acumulado no período** | **+381,4%** | **+478,7%** | **+267,5%** | **+285,0%** | **+116,1%** | **+207,5%** | **+207,9%** | **+547,0%** | **+256,8%** | **+298,9%** | **+286,6%** | **+11188,5%** | **+81,3%** | **+67,3%** | **Rec. 1%** |
| **R\$ 10.000 viraram** | **R\$ 48.141** | **R\$ 57.869** | **R\$ 36.752** | **R\$ 38.500** | **R\$ 21.613** | **R\$ 30.751** | **R\$ 30.789** | **R\$ 64.704** | **R\$ 35.680** | **R\$ 39.890** | **R\$ 38.657** | **R\$ 1.128.848** | **R\$ 18.128** | **R\$ 16.732** | |
| **Média ao ano** | **+37,5%** | **+42,7%** | **+30,2%** | **+31,4%** | **+16,9%** | **+25,6%** | **+25,6%** | **+46,0%** | **+29,4%** | **+32,3%** | **+31,5%** | **+160,5%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

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
> | out/2026 | +4,4% | +12,4% | −5,5% | −6,2% | +2,5% | −0,2% | −1,2% | +7,9% | −9,3% | +1,5% | +3,6% | +11,2% | +0,9% | −5,2% |
> | **Acumulado** | **+381,4%** | **+478,7%** | **+267,5%** | **+285,0%** | **+116,1%** | **+207,5%** | **+207,9%** | **+547,0%** | **+256,8%** | **+298,9%** | **+286,6%** | **+11188,5%** | **+81,3%** | **+67,3%** |

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
| 2026* | +60,6% | +65,9% | +33,7% | +33,6% | +8,8% | +20,4% | +24,4% | +89,8% | +38,9% | +42,0% | +187,7% | +36,7% | +96,9% | +11,5% | +9,6% | Todos ⚠️ |
| **Acumulado no período** | **+1093,2%** | **+1170,7%** | **+427,0%** | **+561,5%** | **+131,2%** | **+298,6%** | **+692,6%** | **+1267,6%** | **+431,1%** | **+638,3%** | **+49614,6%** | **+680,7%** | **+11188,5%** | **+81,3%** | **+67,3%** | **Todos ⚠️** |
| **R\$ 10.000 viraram** | **R\$ 119.316** | **R\$ 127.075** | **R\$ 52.701** | **R\$ 66.153** | **R\$ 23.123** | **R\$ 39.858** | **R\$ 79.258** | **R\$ 136.757** | **R\$ 53.107** | **R\$ 73.835** | **R\$ 4.971.458** | **R\$ 78.066** | **R\$ 1.128.848** | **R\$ 18.128** | **R\$ 16.732** | |
| **Média ao ano** | **+65,2%** | **+67,4%** | **+40,0%** | **+46,6%** | **+18,5%** | **+32,3%** | **+52,1%** | **+69,9%** | **+40,2%** | **+49,9%** | **+251,7%** | **+51,6%** | **+160,5%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

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
> | out/2026 | +5,8% | +15,5% | −2,5% | −5,0% | +1,8% | +0,1% | −2,1% | +8,3% | −6,0% | +3,1% | +10,5% | +4,3% | +11,2% | +0,9% | −5,2% |
> | **Acumulado** | **+1093,2%** | **+1170,7%** | **+427,0%** | **+561,5%** | **+131,2%** | **+298,6%** | **+692,6%** | **+1267,6%** | **+431,1%** | **+638,3%** | **+49614,6%** | **+680,7%** | **+11188,5%** | **+81,3%** | **+67,3%** |

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +32% | −3% | −5% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +75% | −8% | −12% | −18% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+160%** | **−17%** | −22% | −32% |
| Risco fixo de 2% por operação | 2,00% | +422% | −33% | −39% | −55% |
| Kelly ¼ | 2,95% | +918% | −44% | −56% | −73% |
| Kelly ½ | 5,91% | +2933% | −72% | −83% | −95% |
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
| ADX da Manhã | 267 pts | R\$ 56 | 1,8 | 3,5 | 8,9 | 17,7 | 35,4 |
| IFR de Tendência ⭐ | 357 pts | R\$ 74 | 1,3 | 2,7 | 6,7 | 13,5 | 26,9 |
| MACD na Tendência | 755 pts | R\$ 154 | 0,6 | 1,3 | 3,2 | 6,5 | 13,0 |
| Primeira Vela de 80 Minutos | 566 pts | R\$ 116 | 0,9 | 1,7 | 4,3 | 8,6 | 17,2 |
| Primeira Vela de Quinta | 755 pts | R\$ 154 | 0,6 | 1,3 | 3,2 | 6,5 | 13,0 |
| Pullback na Média ⭐ | 550 pts | R\$ 113 | 0,9 | 1,8 | 4,4 | 8,8 | 17,7 |
| Rompimento da Bollinger ⭐ | 317 pts | R\$ 66 | 1,5 | 3,0 | 7,5 | 15,1 | 30,1 |
| Tendência Forte do Dia | 550 pts | R\$ 113 | 0,9 | 1,8 | 4,4 | 8,8 | 17,7 |
| Vai na Onda | 755 pts | R\$ 154 | 0,6 | 1,3 | 3,2 | 6,5 | 13,0 |

*Stops calculados com o ATR (3.670 pts) e o preço (178.265) de hoje — mudam todo dia. ⭐ = setups da combinação recomendada. Com risco de 0,5%, use a metade. Confira a margem de day trade da sua corretora para o número de contratos.*

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R\$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- **Risco 1%:** cada setup arrisca 1% do capital total em cada operação (contratos = capital × 1% ÷ (stop + custo) em R\$). Se dois setups estiverem posicionados ao mesmo tempo, o risco aberto é de 2%.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
