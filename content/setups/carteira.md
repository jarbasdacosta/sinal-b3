---
title: Carteira de setups
date: 2026-10-28
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 28/10/2026 19:40 BRT · dados de 01/11/2021 a 28/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 9 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 41.141** (+33% ao ano · pior queda −5% · Sharpe 1,65)
> - CDI: **R\$ 18.137** (+13% ao ano) · Ibovespa: **R\$ 16.201** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 39.031, +32% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.171.808, +162% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+1,3%** em 2 pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| # | Setup | Sharpe | Retorno ÷ queda | Teste ÷ treino | Meses > CDI | Correlação | Op./mês |
|---|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | 1,62 | 4,1 | 150% | 72% | 0,19 | 12,6 |
| 2º | [**Bollinger**](rompimento-da-bollinger) | 1,61 | 3,5 | 150% | 65% | 0,22 | 4,2 |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | 1,14 | 1,5 | 150% | 63% | 0,06 | 7,8 |
| 4º | [**ADX**](adx-da-manha) | 1,06 | 1,7 | 150% | 63% | 0,20 | 29,3 |
| 5º | [**Tendência**](tendencia-forte-do-dia) | 1,34 | 2,2 | 91% | 60% | 0,24 | 28,7 |
| 6º | [**Pullback**](pullback-na-media) | 1,20 | 2,8 | 28% | 60% | −0,07 | 5,0 |
| 7º | [**MACD**](macd-na-tendencia) | 0,97 | 1,1 | 150% | 63% | 0,23 | 14,7 |
| 8º | [**Onda**](vai-na-onda) | 0,71 | 0,9 | 150% | 57% | 0,13 | 19,4 |
| 9º | [**Quinta**](primeira-vela-de-quinta) | 0,88 | 1,1 | 62% | 50% | −0,11 | 1,8 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| # | Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | +43% | **+68%** | −7% | **−11%** | 2 op · +1,96R |
| 2º | [**Bollinger**](rompimento-da-bollinger) | +26% | **+52%** | −4% | **−7%** | sem operações |
| 3º | [**1ª vela 80**](primeira-vela-80-min) | +33% | **+48%** | −13% | **−14%** | 2 op · +1,88R |
| 4º | [**ADX**](adx-da-manha) | +38% | **+67%** | −15% | **−31%** | 4 op · +1,36R |
| 5º | [**Tendência**](tendencia-forte-do-dia) | +49% | **+72%** | −16% | **−24%** | 2 op · +3,73R |
| 6º | [**Pullback**](pullback-na-media) | +26% | **+32%** | −5% | **−9%** | sem operações |
| 7º | [**MACD**](macd-na-tendencia) | +31% | **+41%** | −17% | **−11%** | 3 op · +0,98R |
| 8º | [**Onda**](vai-na-onda) | +30% | **+40%** | −19% | **−20%** | 2 op · +0,32R |
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
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | +32% · −2,6% | +52% · −5,1% | **+162% · −17,1%** | 2,34 → 2,14 |
| 📈 Maior retorno | Tendência | +49% · −16,1% | +72% · −23,6% | **+72% · −23,6%** | 1,58 → 1,22 |
| 🛡️ Menor queda | Pullback + Bollinger | +26% · −2,1% | +43% · −4,0% | **+78% · −8,6%** | 2,24 → 1,65 |

*R\$ 10 mil viraram, na recomendada: R\$ 39.031 com 1 contrato por R\$ 10 mil · R\$ 79.083 com 1% dividido entre os setups · **R\$ 1.171.808 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · MACD = MACD na Tendência · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

**Por que a recomendada é IFR de Tendência + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios ao mesmo tempo — Sharpe 2,21, rende 7,2× acima do CDI para cada 1% de pior queda, e o Sharpe ficou em 2,34 no treino e 2,14 no teste (não depende de um período só). A correlação média entre os setups dela é −0,00: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, MACD na Tendência, Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR + Quinta + Pullback + Bollinger ⚠️ | +28% | −1,6% | 9,2 | 2,52 → 2,19 | +20% | −0,01 | +43% · −3,5% | **+175% · −17,1%** |
| 2 | IFR + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +29% | −2,1% | 7,6 | 2,15 → 2,33 | +23% | −0,04 | +44% · −3,3% | **+251% · −20,5%** |
| 3 | IFR + Pullback + Bollinger ⭐ | +32% | −2,6% | 7,2 | 2,34 → 2,14 | +22% | −0,00 | +52% · −5,1% | **+162% · −17,1%** |
| 4 | IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | +30% | −2,2% | 7,7 | 1,98 → 2,16 | +23% | −0,14 | +42% · −3,3% | **+166% · −16,4%** |
| 5 | IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | +32% | −3,1% | 6,3 | 2,02 → 2,29 | +25% | 0,01 | +52% · −4,4% | **+235% · −20,4%** |
| 6 | IFR + Quinta + Pullback ⚠️ | +29% | −2,0% | 8,1 | 2,34 → 1,92 | +19% | −0,09 | +40% · −3,5% | **+107% · −12,8%** |
| 7 | 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +25% | −2,0% | 6,4 | 1,95 → 2,10 | +22% | −0,07 | +38% · −3,1% | **+142% · −15,2%** |
| 8 | IFR + Quinta + Bollinger ⚠️ | +29% | −2,9% | 5,3 | 1,93 → 2,13 | +22% | 0,05 | +46% · −4,8% | **+135% · −17,4%** |
| 9 | IFR + 1ª vela 80 + Pullback ⚠️ | +34% | −3,0% | 7,3 | 1,84 → 2,10 | +26% | −0,13 | +51% · −4,7% | **+153% · −16,3%** |
| 10 | 1ª vela 80 + Quinta + Pullback + Bollinger + Tendência ⚠️ | +30% | −3,3% | 5,3 | 2,13 → 1,90 | +22% | −0,01 | +45% · −4,9% | **+252% · −29,1%** |
| 11 | IFR + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +36% | −5,0% | 4,6 | 2,09 → 2,01 | +25% | 0,09 | +56% · −6,7% | **+365% · −35,7%** |
| 12 | IFR + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +34% | −4,2% | 5,0 | 2,08 → 1,92 | +24% | −0,03 | +49% · −5,2% | **+275% · −30,2%** |
| 13 | IFR + Pullback | +35% | −3,5% | 6,2 | 2,15 → 1,85 | +21% | −0,18 | +51% · −5,9% | **+97% · −12,9%** |
| 14 | IFR + Quinta + Pullback + Bollinger + Tendência ⚠️ | +32% | −4,4% | 4,5 | 2,34 → 1,88 | +21% | 0,06 | +49% · −6,0% | **+290% · −33,2%** |
| 15 | Quinta + Pullback + Bollinger ⚠️ | +23% | −1,6% | 6,1 | 2,51 → 1,71 | +17% | −0,02 | +34% · −2,4% | **+87% · −8,2%** |
| 16 | IFR + MACD + Quinta + Pullback + Bollinger ⚠️ | +29% | −3,6% | 4,5 | 1,93 → 1,95 | +23% | 0,04 | +43% · −4,1% | **+229% · −25,8%** |
| 17 | ADX + IFR + Quinta + Pullback + Bollinger ⚠️ | +30% | −4,1% | 4,2 | 1,85 → 2,16 | +20% | 0,08 | +50% · −6,4% | **+280% · −34,9%** |
| 18 | IFR + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +34% | −4,9% | 4,3 | 1,89 → 2,01 | +26% | 0,10 | +53% · −6,6% | **+322% · −35,3%** |
| 19 | IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | +38% | −5,7% | 4,5 | 1,98 → 1,88 | +25% | 0,02 | +57% · −6,9% | **+258% · −30,1%** |
| 20 | 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +34% | −4,6% | 4,5 | 2,01 → 1,85 | +23% | 0,04 | +53% · −6,5% | **+236% · −28,8%** |
| 21 | 1ª vela 80 + Pullback + Bollinger ⚠️ | +28% | −3,6% | 4,3 | 1,78 → 2,03 | +24% | −0,03 | +45% · −4,1% | **+131% · −15,3%** |
| 22 | ADX + IFR + Pullback + Bollinger | +34% | −4,7% | 4,5 | 1,71 → 2,12 | +21% | 0,13 | +58% · −7,9% | **+262% · −34,2%** |
| 23 | IFR + Pullback + Bollinger + Tendência | +36% | −5,9% | 3,9 | 2,23 → 1,84 | +22% | 0,13 | +58% · −8,0% | **+272% · −33,2%** |
| 24 | IFR + Bollinger | +35% | −4,8% | 4,5 | 1,70 → 2,08 | +26% | 0,22 | +61% · −7,7% | **+124% · −16,6%** |
| 25 | IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | +30% | −3,7% | 4,6 | 1,66 → 2,26 | +24% | 0,03 | +47% · −4,4% | **+201% · −20,9%** |
| 26 | Pullback + Bollinger | +26% | −2,1% | 6,1 | 2,24 → 1,65 | +17% | −0,05 | +43% · −4,0% | **+78% · −8,6%** |
| 27 | ADX + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | +34% | −4,0% | 5,2 | 1,61 → 2,25 | +23% | 0,10 | +57% · −6,9% | **+348% · −38,7%** |
| 28 | ADX + IFR + Pullback + Bollinger + Tendência | +37% | −6,3% | 3,8 | 1,89 → 1,96 | +25% | 0,19 | +62% · −9,5% | **+389% · −45,8%** |
| 29 | Quinta + Bollinger ⚠️ | +21% | −1,5% | 5,8 | 1,82 → 1,77 | +18% | 0,01 | +35% · −2,8% | **+60% · −8,4%** |
| 30 | IFR + Quinta + Pullback + Tendência ⚠️ | +34% | −4,9% | 4,3 | 2,23 → 1,71 | +20% | 0,03 | +48% · −6,1% | **+198% · −27,5%** |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+10%* | *−20,9%* | — | — | — | — | — | — |

> [!example]- Combinações 31 a 60 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 31 | 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +31% | −3,7% | 5,0 | 1,99 → 1,71 | +22% | −0,11 | +43% · −7,3% | **+168% · −31,1%** |
> | 32 | ADX + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | +39% | −6,1% | 4,2 | 1,71 → 1,98 | +28% | 0,10 | +61% · −8,8% | **+363% · −44,2%** |
> | 33 | ADX + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | +32% | −3,8% | 5,1 | 1,58 → 2,15 | +21% | −0,02 | +49% · −6,0% | **+261% · −34,2%** |
> | 34 | IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | +38% | −6,5% | 3,9 | 1,79 → 1,97 | +29% | 0,24 | +62% · −8,6% | **+303% · −35,2%** |
> | 35 | ADX + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +35% | −5,5% | 4,0 | 1,72 → 1,97 | +26% | 0,12 | +58% · −8,4% | **+347% · −43,8%** |
> | 36 | IFR + MACD + Pullback + Bollinger | +32% | −4,8% | 3,9 | 1,79 → 1,90 | +24% | 0,11 | +49% · −5,6% | **+213% · −25,7%** |
> | 37 | 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +31% | −4,5% | 4,1 | 1,78 → 1,87 | +25% | 0,04 | +48% · −5,9% | **+204% · −27,0%** |
> | 38 | IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | +36% | −5,6% | 4,1 | 1,76 → 1,88 | +27% | 0,03 | +52% · −6,8% | **+225% · −29,7%** |
> | 39 | Quinta + Pullback + Bollinger + Tendência ⚠️ | +29% | −3,8% | 4,3 | 2,34 → 1,64 | +18% | 0,03 | +44% · −5,2% | **+177% · −24,6%** |
> | 40 | ADX + IFR + Quinta + Pullback + Tendência ⚠️ | +35% | −5,9% | 3,8 | 1,89 → 1,87 | +23% | 0,09 | +54% · −8,0% | **+297% · −44,1%** |
> | 41 | IFR + MACD + Quinta + Pullback ⚠️ | +30% | −3,6% | 4,7 | 1,77 → 1,76 | +22% | −0,02 | +40% · −4,4% | **+150% · −19,4%** |
> | 42 | IFR + Quinta + Bollinger + Tendência ⚠️ | +34% | −5,8% | 3,6 | 2,02 → 1,84 | +23% | 0,14 | +53% · −7,8% | **+237% · −32,8%** |
> | 43 | IFR + Quinta ⚠️ | +30% | −3,6% | 4,8 | 1,66 → 1,86 | +22% | −0,08 | +43% · −5,2% | **+77% · −11,3%** |
> | 44 | ADX + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +33% | −4,7% | 4,3 | 1,69 → 1,87 | +25% | −0,01 | +50% · −7,0% | **+262% · −41,9%** |
> | 45 | 1ª vela 80 + Quinta + Pullback ⚠️ | +25% | −2,2% | 5,6 | 1,68 → 1,73 | +21% | −0,22 | +33% · −5,6% | **+81% · −18,6%** |
> | 46 | ADX + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +28% | −3,5% | 4,4 | 1,52 → 2,12 | +20% | 0,03 | +46% · −6,5% | **+240% · −36,9%** |
> | 47 | ADX + IFR + Pullback + Tendência | +40% | −7,3% | 3,7 | 1,79 → 1,83 | +25% | 0,16 | +64% · −10,9% | **+279% · −45,9%** |
> | 48 | IFR + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +30% | −4,6% | 3,8 | 1,67 → 1,95 | +24% | −0,04 | +42% · −3,4% | **+217% · −22,5%** |
> | 49 | ADX + IFR + 1ª vela 80 + Pullback ⚠️ | +36% | −4,8% | 4,8 | 1,47 → 2,11 | +22% | 0,02 | +57% · −7,7% | **+244% · −33,5%** |
> | 50 | ADX + IFR + Quinta + Pullback ⚠️ | +31% | −5,1% | 3,6 | 1,69 → 1,98 | +19% | 0,03 | +49% · −7,8% | **+190% · −32,5%** |
> | 51 | IFR + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +32% | −5,6% | 3,5 | 1,71 → 2,05 | +25% | 0,10 | +50% · −4,9% | **+295% · −28,5%** |
> | 52 | MACD + Quinta + Pullback + Bollinger ⚠️ | +25% | −3,4% | 3,6 | 1,89 → 1,76 | +21% | 0,00 | +36% · −2,8% | **+130% · −16,2%** |
> | 53 | IFR + 1ª vela 80 + Bollinger ⚠️ | +34% | −5,4% | 3,9 | 1,50 → 2,21 | +26% | 0,20 | +58% · −6,4% | **+187% · −20,8%** |
> | 54 | ADX + IFR + Quinta + Bollinger + Tendência ⚠️ | +35% | −6,2% | 3,6 | 1,69 → 1,96 | +26% | 0,21 | +58% · −9,3% | **+346% · −45,4%** |
> | 55 | IFR + Pullback + Tendência | +40% | −7,2% | 3,7 | 2,11 → 1,66 | +21% | 0,10 | +59% · −8,7% | **+184% · −27,9%** |
> | 56 | IFR + 1ª vela 80 + Quinta ⚠️ | +31% | −3,8% | 4,8 | 1,43 → 2,08 | +24% | −0,10 | +45% · −4,3% | **+128% · −14,2%** |
> | 57 | 1ª vela 80 + Pullback + Tendência ⚠️ | +36% | −5,5% | 4,2 | 1,87 → 1,65 | +23% | −0,09 | +52% · −10,2% | **+155% · −30,8%** |
> | 58 | ADX + Quinta + Pullback + Bollinger + Tendência ⚠️ | +31% | −5,7% | 3,2 | 1,93 → 1,84 | +22% | 0,11 | +51% · −7,8% | **+281% · −44,5%** |
> | 59 | ADX + IFR + MACD + Pullback + Bollinger | +34% | −5,2% | 4,0 | 1,52 → 2,01 | +22% | 0,16 | +55% · −7,7% | **+321% · −41,1%** |
> | 60 | IFR + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +37% | −6,7% | 3,6 | 1,74 → 1,79 | +28% | 0,12 | +54% · −7,2% | **+312% · −37,6%** |

> [!example]- Combinações 61 a 90 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 61 | MACD + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | +33% | −5,8% | 3,5 | 1,77 → 1,78 | +26% | 0,13 | +50% · −6,5% | **+294% · −35,0%** |
> | 62 | ADX + Pullback + Bollinger + Tendência | +35% | −6,7% | 3,3 | 1,81 → 1,80 | +23% | 0,17 | +60% · −11,3% | **+263% · −46,3%** |
> | 63 | ADX + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | +32% | −3,8% | 5,0 | 1,32 → 2,23 | +22% | 0,12 | +53% · −7,2% | **+304% · −39,6%** |
> | 64 | ADX + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | +39% | −6,8% | 3,8 | 1,54 → 2,05 | +28% | 0,27 | +66% · −10,1% | **+417% · −48,2%** |
> | 65 | IFR + 1ª vela 80 + Tendência ⚠️ | +42% | −8,0% | 3,7 | 1,65 → 1,84 | +30% | 0,21 | +65% · −9,6% | **+210% · −29,7%** |
> | 66 | ADX + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | +37% | −6,0% | 3,9 | 1,51 → 1,98 | +27% | 0,11 | +58% · −8,7% | **+323% · −43,8%** |
> | 67 | IFR + Bollinger + Tendência | +40% | −8,3% | 3,2 | 1,89 → 1,80 | +25% | 0,33 | +66% · −11,0% | **+222% · −32,8%** |
> | 68 | ADX + IFR + MACD + Quinta + Pullback ⚠️ | +32% | −4,4% | 4,3 | 1,49 → 1,92 | +21% | 0,05 | +47% · −6,4% | **+240% · −36,6%** |
> | 69 | Pullback + Bollinger + Tendência | +34% | −5,8% | 3,6 | 2,19 → 1,58 | +19% | 0,08 | +53% · −7,5% | **+164% · −24,6%** |
> | 70 | IFR + MACD + Pullback + Bollinger + Tendência | +35% | −6,9% | 3,3 | 1,88 → 1,76 | +25% | 0,20 | +54% · −8,1% | **+330% · −40,4%** |
> | 71 | ADX + IFR + Pullback | +36% | −6,2% | 3,8 | 1,54 → 1,94 | +20% | 0,06 | +60% · −10,0% | **+176% · −31,8%** |
> | 72 | ADX + 1ª vela 80 + Pullback + Tendência ⚠️ | +37% | −6,4% | 3,8 | 1,59 → 1,83 | +27% | 0,04 | +59% · −10,0% | **+245% · −43,3%** |
> | 73 | ADX + 1ª vela 80 + Pullback + Bollinger ⚠️ | +31% | −4,5% | 4,1 | 1,39 → 2,07 | +21% | 0,08 | +53% · −8,4% | **+224% · −36,2%** |
> | 74 | MACD + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | +31% | −5,1% | 3,7 | 1,74 → 1,68 | +25% | −0,01 | +43% · −5,8% | **+217% · −31,7%** |
> | 75 | 1ª vela 80 + Bollinger + Tendência ⚠️ | +36% | −6,6% | 3,5 | 1,65 → 1,82 | +28% | 0,21 | +59% · −8,4% | **+190% · −27,0%** |
> | 76 | ADX + IFR + Quinta + Bollinger ⚠️ | +31% | −4,7% | 3,9 | 1,37 → 2,11 | +20% | 0,17 | +54% · −8,0% | **+226% · −35,2%** |
> | 77 | ADX + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +33% | −5,4% | 3,7 | 1,49 → 1,98 | +26% | 0,12 | +54% · −8,6% | **+307% · −44,4%** |
> | 78 | IFR + MACD + Pullback | +34% | −5,3% | 3,9 | 1,62 → 1,71 | +25% | 0,03 | +48% · −6,4% | **+138% · −19,9%** |
> | 79 | IFR + MACD + Quinta + Pullback + Tendência ⚠️ | +33% | −6,1% | 3,4 | 1,87 → 1,66 | +23% | 0,09 | +47% · −6,6% | **+247% · −35,3%** |
> | 80 | IFR + Quinta + Tendência ⚠️ | +36% | −7,0% | 3,4 | 1,88 → 1,67 | +23% | 0,11 | +53% · −8,5% | **+158% · −27,0%** |
> | 81 | IFR + MACD + 1ª vela 80 + Pullback ⚠️ | +34% | −6,1% | 3,4 | 1,56 → 1,90 | +26% | 0,02 | +48% · −4,6% | **+202% · −22,4%** |
> | 82 | ADX + IFR + 1ª vela 80 + Bollinger ⚠️ | +36% | −4,9% | 4,7 | 1,20 → 2,19 | +23% | 0,25 | +63% · −9,3% | **+286% · −39,0%** |
> | 83 | ADX + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | +35% | −5,4% | 4,1 | 1,36 → 2,01 | +23% | 0,08 | +54% · −7,3% | **+299% · −40,1%** |
> | 84 | ADX + IFR + Bollinger + Tendência | +40% | −8,2% | 3,3 | 1,58 → 1,93 | +28% | 0,35 | +69% · −12,0% | **+325% · −45,4%** |
> | 85 | ADX + MACD + Quinta + Pullback + Bollinger ⚠️ | +28% | −4,3% | 3,5 | 1,51 → 1,93 | +19% | 0,07 | +44% · −7,1% | **+224% · −39,1%** |
> | 86 | IFR + Quinta + Pullback + Bollinger + Onda ⚠️ | +29% | −4,1% | 3,9 | 1,42 → 1,94 | +23% | 0,00 | +43% · −4,2% | **+227% · −25,9%** |
> | 87 | MACD + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | +27% | −4,8% | 3,0 | 1,71 → 1,97 | +23% | −0,01 | +39% · −3,6% | **+195% · −23,0%** |
> | 88 | MACD + Quinta + Pullback + Bollinger + Tendência ⚠️ | +30% | −5,2% | 3,3 | 1,95 → 1,64 | +22% | 0,08 | +44% · −5,8% | **+229% · −32,6%** |
> | 89 | ADX + IFR + Quinta + Tendência ⚠️ | +37% | −7,2% | 3,4 | 1,57 → 1,84 | +26% | 0,18 | +59% · −10,2% | **+245% · −42,6%** |
> | 90 | ADX + IFR + 1ª vela 80 + Tendência ⚠️ | +42% | −8,0% | 3,6 | 1,42 → 1,95 | +30% | 0,24 | +68% · −11,3% | **+303% · −43,7%** |

> [!example]- Combinações 91 a 120 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 91 | 1ª vela 80 + Quinta + Tendência ⚠️ | +33% | −5,4% | 3,7 | 1,60 → 1,67 | +25% | −0,11 | +47% · −7,8% | **+131% · −25,2%** |
> | 92 | IFR + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +37% | −7,4% | 3,3 | 1,56 → 1,86 | +30% | 0,31 | +58% · −8,6% | **+362% · −42,2%** |
> | 93 | ADX + Quinta + Pullback + Bollinger ⚠️ | +27% | −4,9% | 2,9 | 1,67 → 1,90 | +18% | 0,08 | +45% · −7,5% | **+171% · −32,4%** |
> | 94 | IFR + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +32% | −5,0% | 3,9 | 1,29 → 2,04 | +26% | 0,08 | +50% · −4,8% | **+291% · −28,7%** |
> | 95 | Quinta + Bollinger + Tendência ⚠️ | +30% | −5,6% | 3,1 | 1,97 → 1,61 | +21% | 0,08 | +48% · −7,3% | **+139% · −24,1%** |
> | 96 | ADX + IFR + MACD + Pullback | +35% | −5,9% | 3,8 | 1,38 → 1,88 | +22% | 0,10 | +55% · −8,3% | **+224% · −36,0%** |
> | 97 | ADX + IFR + Bollinger | +36% | −5,8% | 4,0 | 1,21 → 2,07 | +21% | 0,34 | +67% · −11,3% | **+211% · −34,5%** |
> | 98 | IFR + 1ª vela 80 ⚠️ | +38% | −6,4% | 4,0 | 1,26 → 2,01 | +28% | 0,10 | +59% · −6,5% | **+117% · −14,1%** |
> | 99 | ADX + IFR + 1ª vela 80 + Quinta ⚠️ | +33% | −4,4% | 4,7 | 1,15 → 2,10 | +21% | 0,05 | +53% · −7,7% | **+211% · −34,4%** |
> | 100 | ADX + 1ª vela 80 + Quinta + Pullback ⚠️ | +29% | −4,1% | 3,9 | 1,33 → 1,91 | +19% | −0,07 | +44% · −6,8% | **+158% · −31,6%** |
> | 101 | IFR | +43% | −7,5% | 4,1 | 1,40 → 1,78 | +28% | — | +68% · −11,2% | **+68% · −11,2%** |
> | 102 | ADX + IFR + MACD + Pullback + Tendência | +38% | −8,0% | 3,2 | 1,60 → 1,79 | +27% | 0,20 | +59% · −10,0% | **+330% · −50,5%** |
> | 103 | IFR + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +35% | −6,6% | 3,4 | 1,53 → 1,78 | +29% | 0,13 | +50% · −7,1% | **+275% · −37,2%** |
> | 104 | ADX + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +31% | −5,3% | 3,5 | 1,33 → 2,02 | +22% | 0,11 | +51% · −8,2% | **+283% · −42,6%** |
> | 105 | IFR + MACD + Quinta + Bollinger + Tendência ⚠️ | +33% | −6,8% | 3,0 | 1,67 → 1,75 | +26% | 0,21 | +51% · −7,9% | **+290% · −40,0%** |
> | 106 | MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +35% | −6,8% | 3,3 | 1,64 → 1,64 | +27% | 0,06 | +50% · −8,0% | **+202% · −32,8%** |
> | 107 | ADX + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | +36% | −6,9% | 3,4 | 1,47 → 1,80 | +27% | 0,10 | +55% · −8,7% | **+298% · −47,8%** |
> | 108 | IFR + Pullback + Bollinger + Tendência + Onda | +35% | −7,0% | 3,2 | 1,54 → 1,79 | +29% | 0,16 | +55% · −8,0% | **+326% · −40,6%** |
> | 109 | MACD + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | +31% | −5,8% | 3,2 | 1,54 → 1,78 | +25% | 0,13 | +47% · −6,4% | **+258% · −34,6%** |
> | 110 | ADX + MACD + Pullback + Bollinger + Tendência | +35% | −7,2% | 3,1 | 1,62 → 1,78 | +26% | 0,20 | +56% · −9,5% | **+320% · −50,4%** |
> | 111 | ADX + 1ª vela 80 + Bollinger + Tendência ⚠️ | +37% | −7,3% | 3,4 | 1,39 → 1,94 | +28% | 0,26 | +64% · −11,0% | **+289% · −43,8%** |
> | 112 | Quinta + Pullback + Tendência ⚠️ | +30% | −4,9% | 3,6 | 2,19 → 1,35 | +17% | −0,02 | +41% · −7,0% | **+109% · −23,8%** |
> | 113 | 1ª vela 80 + Pullback ⚠️ | +29% | −4,3% | 3,9 | 1,49 → 1,62 | +24% | −0,31 | +41% · −8,7% | **+73% · −17,9%** |
> | 114 | IFR + MACD + Pullback + Tendência | +38% | −8,1% | 3,1 | 1,78 → 1,62 | +25% | 0,19 | +54% · −8,6% | **+231% · −35,3%** |
> | 115 | IFR + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +37% | −6,8% | 3,5 | 1,41 → 1,81 | +31% | 0,10 | +54% · −7,2% | **+304% · −37,8%** |
> | 116 | ADX + MACD + Quinta + Pullback + Tendência ⚠️ | +33% | −6,3% | 3,1 | 1,61 → 1,69 | +24% | 0,08 | +48% · −9,4% | **+240% · −48,8%** |
> | 117 | IFR + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +30% | −4,3% | 4,1 | 1,24 → 1,93 | +24% | −0,06 | +42% · −4,2% | **+212% · −22,7%** |
> | 118 | ADX + IFR + MACD + Quinta + Bollinger ⚠️ | +32% | −5,1% | 3,7 | 1,23 → 2,00 | +21% | 0,19 | +52% · −8,0% | **+281% · −41,8%** |
> | 119 | MACD + Pullback + Bollinger | +28% | −5,4% | 2,8 | 1,70 → 1,70 | +23% | 0,05 | +43% · −4,5% | **+120% · −16,1%** |
> | 120 | ADX + Quinta + Pullback + Tendência ⚠️ | +33% | −7,1% | 2,8 | 1,80 → 1,67 | +21% | 0,06 | +50% · −10,8% | **+192% · −44,7%** |

> [!example]- Combinações 121 a 150 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 121 | ADX + Quinta + Bollinger + Tendência ⚠️ | +33% | −6,8% | 3,0 | 1,57 → 1,82 | +25% | 0,19 | +55% · −9,9% | **+231% · −43,2%** |
> | 122 | ADX + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | +35% | −5,7% | 3,9 | 1,14 → 2,07 | +24% | 0,28 | +59% · −8,9% | **+345% · −45,1%** |
> | 123 | IFR + Quinta + Pullback + Tendência + Onda ⚠️ | +33% | −6,2% | 3,3 | 1,51 → 1,68 | +28% | 0,04 | +47% · −6,6% | **+243% · −35,5%** |
> | 124 | ADX + 1ª vela 80 + Quinta + Tendência ⚠️ | +35% | −6,3% | 3,5 | 1,35 → 1,84 | +26% | 0,04 | +54% · −9,5% | **+214% · −40,1%** |
> | 125 | 1ª vela 80 + Quinta + Bollinger ⚠️ | +25% | −3,6% | 3,4 | 1,26 → 2,02 | +15% | −0,02 | +40% · −4,1% | **+107% · −15,1%** |
> | 126 | IFR + Pullback + Bollinger + Onda | +32% | −5,4% | 3,5 | 1,31 → 1,90 | +25% | 0,08 | +50% · −5,6% | **+212% · −25,9%** |
> | 127 | Bollinger | +26% | −3,6% | 3,5 | 1,37 → 1,78 | +18% | — | +52% · −6,9% | **+52% · −6,9%** |
> | 128 | IFR + Tendência | +47% | −11,3% | 3,0 | 1,74 → 1,61 | +26% | 0,48 | +72% · −13,5% | **+146% · −27,0%** |
> | 129 | ADX + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +30% | −4,9% | 3,4 | 1,28 → 1,92 | +21% | −0,03 | +44% · −6,9% | **+207% · −38,3%** |
> | 130 | ADX + IFR + Tendência | +44% | −10,1% | 3,1 | 1,46 → 1,80 | +30% | 0,38 | +74% · −14,8% | **+229% · −45,2%** |
> | 131 | ADX + Pullback + Bollinger | +30% | −5,8% | 3,0 | 1,49 → 1,84 | +19% | 0,13 | +54% · −9,9% | **+158% · −31,7%** |
> | 132 | MACD + Pullback + Bollinger + Tendência | +33% | −7,0% | 2,9 | 1,83 → 1,59 | +23% | 0,17 | +50% · −7,9% | **+214% · −32,6%** |
> | 133 | IFR + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +30% | −6,1% | 2,9 | 1,40 → 2,02 | +23% | 0,12 | +46% · −5,4% | **+256% · −29,5%** |
> | 134 | ADX + MACD + Pullback + Bollinger | +31% | −5,8% | 3,2 | 1,37 → 1,88 | +20% | 0,13 | +51% · −9,2% | **+209% · −38,5%** |
> | 135 | IFR + MACD + Quinta + Bollinger ⚠️ | +29% | −5,5% | 3,0 | 1,43 → 1,88 | +23% | 0,15 | +45% · −5,5% | **+182% · −25,6%** |
> | 136 | ADX + IFR + 1ª vela 80 ⚠️ | +39% | −6,0% | 4,4 | 1,03 → 2,06 | +23% | 0,20 | +65% · −10,7% | **+196% · −33,8%** |
> | 137 | 1ª vela 80 + Pullback + Bollinger + Tendência + Onda ⚠️ | +33% | −6,2% | 3,3 | 1,37 → 1,79 | +27% | 0,11 | +51% · −6,5% | **+287% · −35,2%** |
> | 138 | ADX + Pullback + Tendência | +38% | −8,8% | 2,9 | 1,68 → 1,62 | +23% | 0,11 | +61% · −16,1% | **+178% · −46,6%** |
> | 139 | ADX + IFR + Pullback + Bollinger + Onda | +33% | −6,0% | 3,4 | 1,19 → 1,98 | +23% | 0,13 | +55% · −7,7% | **+313% · −39,6%** |
> | 140 | ADX + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | +33% | −5,3% | 3,9 | 1,10 → 2,00 | +22% | 0,11 | +51% · −7,6% | **+261% · −41,0%** |
> | 141 | ADX + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | +40% | −8,5% | 3,2 | 1,31 → 1,87 | +29% | 0,29 | +63% · −10,5% | **+354% · −49,1%** |
> | 142 | IFR + MACD + 1ª vela 80 + Tendência ⚠️ | +40% | −8,7% | 3,1 | 1,44 → 1,75 | +32% | 0,32 | +59% · −9,3% | **+258% · −37,2%** |
> | 143 | ADX + IFR + MACD + Bollinger + Tendência | +38% | −8,7% | 2,9 | 1,42 → 1,86 | +28% | 0,37 | +64% · −11,3% | **+380% · −51,2%** |
> | 144 | IFR + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +37% | −7,5% | 3,2 | 1,27 → 1,90 | +28% | 0,23 | +58% · −8,6% | **+357% · −42,3%** |
> | 145 | MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | +29% | −6,7% | 2,5 | 1,57 → 1,91 | +24% | 0,06 | +44% · −5,1% | **+181% · −23,8%** |
> | 146 | IFR + MACD + Bollinger + Tendência | +38% | −8,9% | 2,8 | 1,57 → 1,72 | +28% | 0,40 | +60% · −10,3% | **+273% · −40,0%** |
> | 147 | ADX + 1ª vela 80 + Pullback ⚠️ | +33% | −5,6% | 3,6 | 1,19 → 1,86 | +20% | −0,05 | +53% · −9,5% | **+146% · −30,9%** |
> | 148 | 1ª vela 80 + Tendência ⚠️ | +41% | −8,9% | 3,2 | 1,46 → 1,61 | +30% | 0,05 | +62% · −12,3% | **+120% · −24,9%** |
> | 149 | ADX + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | +35% | −5,7% | 3,9 | 1,07 → 1,97 | +24% | 0,07 | +54% · −7,2% | **+287% · −37,9%** |
> | 150 | ADX + Bollinger + Tendência | +38% | −8,7% | 2,9 | 1,43 → 1,78 | +27% | 0,36 | +69% · −15,3% | **+215% · −45,6%** |

> [!example]- Combinações 151 a 180 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 151 | MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | +27% | −5,1% | 2,8 | 1,51 → 1,76 | +22% | −0,12 | +35% · −3,2% | **+123% · −17,1%** |
> | 152 | ADX + IFR + MACD + Quinta + Tendência ⚠️ | +36% | −7,9% | 3,0 | 1,40 → 1,79 | +26% | 0,22 | +56% · −9,8% | **+293% · −47,2%** |
> | 153 | ADX + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +36% | −7,6% | 3,1 | 1,29 → 1,88 | +27% | 0,29 | +60% · −10,3% | **+345% · −49,6%** |
> | 154 | ADX + IFR + Pullback + Tendência + Onda | +38% | −8,1% | 3,1 | 1,33 → 1,78 | +28% | 0,17 | +59% · −10,0% | **+318% · −49,0%** |
> | 155 | MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | +35% | −7,6% | 2,9 | 1,43 → 1,74 | +26% | 0,30 | +55% · −8,4% | **+241% · −34,5%** |
> | 156 | IFR + 1ª vela 80 + Pullback + Onda ⚠️ | +34% | −5,6% | 3,7 | 1,14 → 1,88 | +26% | 0,03 | +49% · −5,1% | **+197% · −22,8%** |
> | 157 | ADX + 1ª vela 80 + Quinta + Bollinger ⚠️ | +29% | −4,5% | 3,6 | 1,02 → 2,06 | +19% | 0,11 | +49% · −8,8% | **+192% · −37,3%** |
> | 158 | MACD + Quinta + Pullback + Tendência ⚠️ | +31% | −6,1% | 3,0 | 1,81 → 1,45 | +21% | 0,03 | +41% · −7,6% | **+151% · −31,4%** |
> | 159 | ADX + MACD + Quinta + Pullback ⚠️ | +29% | −5,0% | 3,2 | 1,33 → 1,74 | +19% | −0,01 | +42% · −7,6% | **+147% · −33,9%** |
> | 160 | IFR + MACD + Quinta + Tendência ⚠️ | +35% | −7,9% | 2,8 | 1,55 → 1,62 | +26% | 0,21 | +50% · −8,5% | **+201% · −34,8%** |
> | 161 | IFR + Quinta + Pullback + Onda ⚠️ | +29% | −4,7% | 3,5 | 1,25 → 1,73 | +23% | −0,05 | +40% · −4,9% | **+148% · −22,7%** |
> | 162 | 1ª vela 80 + Quinta + Pullback + Tendência + Onda ⚠️ | +31% | −5,6% | 3,3 | 1,33 → 1,67 | +27% | −0,03 | +43% · −6,0% | **+210% · −32,8%** |
> | 163 | IFR + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +35% | −6,7% | 3,3 | 1,23 → 1,81 | +28% | 0,05 | +50% · −7,1% | **+270% · −37,4%** |
> | 164 | ADX + MACD + Pullback + Tendência | +37% | −8,4% | 2,9 | 1,51 → 1,65 | +26% | 0,15 | +56% · −12,9% | **+225% · −50,7%** |
> | 165 | ADX + IFR + Quinta ⚠️ | +33% | −6,3% | 3,2 | 1,16 → 1,93 | +19% | 0,12 | +54% · −9,9% | **+149% · −29,7%** |
> | 166 | IFR + Quinta + Bollinger + Tendência + Onda ⚠️ | +33% | −6,9% | 3,0 | 1,36 → 1,80 | +29% | 0,11 | +51% · −7,9% | **+289% · −40,1%** |
> | 167 | ADX + IFR + MACD + Bollinger | +35% | −6,8% | 3,3 | 1,12 → 1,96 | +23% | 0,33 | +61% · −10,3% | **+263% · −41,3%** |
> | 168 | Bollinger + Tendência | +37% | −9,2% | 2,7 | 1,79 → 1,55 | +23% | 0,30 | +64% · −11,8% | **+128% · −24,0%** |
> | 169 | Pullback + Tendência | +37% | −7,6% | 3,2 | 2,03 → 1,28 | +16% | 0,00 | +53% · −12,0% | **+100% · −25,6%** |
> | 170 | ADX + IFR + Quinta + Pullback + Onda ⚠️ | +31% | −5,4% | 3,4 | 1,15 → 1,87 | +21% | 0,02 | +48% · −6,6% | **+232% · −34,5%** |
> | 171 | ADX + MACD + Quinta + Bollinger + Tendência ⚠️ | +33% | −7,0% | 2,8 | 1,40 → 1,78 | +25% | 0,21 | +53% · −9,3% | **+283% · −47,7%** |
> | 172 | Quinta + Pullback + Bollinger + Tendência + Onda ⚠️ | +30% | −5,9% | 2,9 | 1,48 → 1,64 | +26% | 0,04 | +44% · −6,0% | **+226% · −32,9%** |
> | 173 | ADX + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +34% | −6,9% | 3,1 | 1,26 → 1,80 | +26% | 0,11 | +52% · −9,0% | **+263% · −45,8%** |
> | 174 | MACD + Quinta + Pullback ⚠️ | +25% | −3,9% | 3,1 | 1,65 → 1,44 | +20% | −0,10 | +31% · −4,6% | **+73% · −14,9%** |
> | 175 | IFR + Pullback + Tendência + Onda | +38% | −8,2% | 3,0 | 1,42 → 1,65 | +31% | 0,16 | +55% · −8,6% | **+227% · −35,5%** |
> | 176 | IFR + MACD + Pullback + Bollinger + Onda | +32% | −5,9% | 3,2 | 1,20 → 1,83 | +25% | 0,14 | +48% · −6,2% | **+266% · −33,7%** |
> | 177 | IFR + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +30% | −5,4% | 3,2 | 1,04 → 2,05 | +20% | 0,04 | +46% · −4,9% | **+254% · −29,0%** |
> | 178 | ADX + 1ª vela 80 + Tendência ⚠️ | +41% | −9,0% | 3,1 | 1,24 → 1,80 | +30% | 0,18 | +67% · −13,6% | **+200% · −42,0%** |
> | 179 | ADX + MACD + 1ª vela 80 + Pullback ⚠️ | +33% | −6,3% | 3,2 | 1,17 → 1,87 | +22% | 0,02 | +50% · −8,9% | **+193% · −37,7%** |
> | 180 | ADX + IFR + MACD + 1ª vela 80 ⚠️ | +37% | −6,7% | 3,7 | 1,00 → 1,96 | +24% | 0,25 | +59% · −9,8% | **+244% · −40,4%** |

> [!example]- Combinações 181 a 210 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 181 | IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | +34% | −8,0% | 2,6 | 1,28 → 1,98 | +24% | 0,28 | +54% · −7,0% | **+239% · −29,5%** |
> | 182 | MACD + Quinta + Bollinger + Tendência ⚠️ | +31% | −6,9% | 2,6 | 1,58 → 1,59 | +25% | 0,18 | +46% · −7,6% | **+185% · −32,1%** |
> | 183 | ADX + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | +35% | −5,8% | 3,8 | 0,89 → 2,06 | +23% | 0,22 | +59% · −8,3% | **+336% · −42,7%** |
> | 184 | MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | +33% | −6,7% | 3,0 | 1,40 → 1,64 | +26% | 0,06 | +45% · −7,0% | **+174% · −29,5%** |
> | 185 | ADX + IFR + MACD + Quinta ⚠️ | +33% | −6,0% | 3,4 | 1,07 → 1,87 | +21% | 0,15 | +51% · −8,7% | **+193% · −36,9%** |
> | 186 | IFR + Quinta + Bollinger + Onda ⚠️ | +29% | −4,8% | 3,4 | 1,02 → 1,91 | +23% | 0,02 | +45% · −5,7% | **+182% · −26,2%** |
> | 187 | 1ª vela 80 + Quinta + Bollinger + Tendência + Onda ⚠️ | +31% | −5,9% | 3,1 | 1,17 → 1,80 | +21% | 0,06 | +47% · −6,4% | **+253% · −34,7%** |
> | 188 | ADX + IFR + Quinta + Bollinger + Onda ⚠️ | +31% | −5,5% | 3,4 | 0,96 → 1,98 | +22% | 0,10 | +52% · −7,5% | **+275% · −39,2%** |
> | 189 | IFR + MACD + Quinta + Pullback + Onda ⚠️ | +30% | −5,1% | 3,4 | 1,16 → 1,72 | +24% | 0,01 | +41% · −4,8% | **+193% · −28,1%** |
> | 190 | ADX + IFR + Bollinger + Tendência + Onda | +38% | −8,8% | 2,9 | 1,19 → 1,87 | +28% | 0,28 | +64% · −11,3% | **+371% · −51,6%** |
> | 191 | ADX + IFR + MACD + Tendência | +41% | −10,3% | 2,8 | 1,31 → 1,75 | +29% | 0,39 | +66% · −12,7% | **+275% · −49,8%** |
> | 192 | ADX + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +36% | −7,5% | 3,1 | 1,18 → 1,78 | +28% | 0,10 | +55% · −8,9% | **+283% · −46,0%** |
> | 193 | ADX + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +30% | −5,5% | 3,1 | 1,02 → 2,01 | +20% | 0,13 | +48% · −8,5% | **+246% · −43,4%** |
> | 194 | IFR + MACD + 1ª vela 80 + Quinta ⚠️ | +31% | −6,8% | 2,8 | 1,23 → 1,88 | +24% | 0,05 | +44% · −5,2% | **+172% · −23,5%** |
> | 195 | IFR + MACD + Bollinger | +34% | −7,8% | 2,7 | 1,28 → 1,83 | +26% | 0,35 | +55% · −7,9% | **+169% · −25,4%** |
> | 196 | ADX + Pullback + Bollinger + Tendência + Onda | +34% | −7,8% | 2,8 | 1,30 → 1,76 | +27% | 0,17 | +56% · −9,4% | **+309% · −47,8%** |
> | 197 | ADX + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | +40% | −8,6% | 3,1 | 1,09 → 1,88 | +29% | 0,22 | +63% · −10,5% | **+341% · −49,4%** |
> | 198 | ADX + IFR | +42% | −8,5% | 3,4 | 1,00 → 1,88 | +20% | 0,34 | +72% · −14,3% | **+137% · −29,5%** |
> | 199 | ADX + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | +33% | −5,2% | 3,9 | 0,85 → 1,97 | +23% | 0,04 | +51% · −7,7% | **+253% · −37,5%** |
> | 200 | IFR + Bollinger + Tendência + Onda | +38% | −9,0% | 2,7 | 1,27 → 1,77 | +32% | 0,27 | +60% · −10,3% | **+271% · −40,1%** |
> | 201 | IFR + MACD + Tendência | +42% | −11,1% | 2,6 | 1,44 → 1,58 | +30% | 0,50 | +61% · −11,8% | **+187% · −34,8%** |
> | 202 | ADX + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +31% | −5,7% | 3,2 | 0,98 → 1,94 | +22% | 0,11 | +51% · −7,6% | **+272% · −39,0%** |
> | 203 | IFR + 1ª vela 80 + Tendência + Onda ⚠️ | +39% | −8,8% | 3,0 | 1,15 → 1,78 | +30% | 0,23 | +59% · −9,3% | **+253% · −37,3%** |
> | 204 | 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +35% | −7,2% | 3,1 | 1,24 → 1,63 | +29% | 0,08 | +50% · −7,6% | **+196% · −32,4%** |
> | 205 | ADX + IFR + Pullback + Onda | +35% | −7,1% | 3,2 | 1,06 → 1,83 | +22% | 0,09 | +55% · −8,6% | **+217% · −34,5%** |
> | 206 | Pullback + Bollinger + Tendência + Onda | +33% | −7,6% | 2,7 | 1,38 → 1,60 | +29% | 0,15 | +51% · −7,7% | **+211% · −32,8%** |
> | 207 | ADX + MACD + Bollinger + Tendência | +37% | −9,2% | 2,6 | 1,29 → 1,75 | +28% | 0,36 | +62% · −12,3% | **+265% · −49,9%** |
> | 208 | ADX + IFR + Quinta + Tendência + Onda ⚠️ | +36% | −8,0% | 2,9 | 1,16 → 1,79 | +27% | 0,12 | +56% · −9,9% | **+284% · −47,4%** |
> | 209 | ADX + Quinta + Tendência ⚠️ | +35% | −8,9% | 2,5 | 1,40 → 1,64 | +25% | 0,12 | +55% · −14,5% | **+153% · −43,4%** |
> | 210 | MACD + Pullback + Tendência | +36% | −8,7% | 2,6 | 1,69 → 1,40 | +23% | 0,13 | +49% · −11,0% | **+139% · −32,6%** |

> [!example]- Combinações 211 a 240 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 211 | ADX + MACD + 1ª vela 80 + Tendência ⚠️ | +39% | −9,0% | 2,9 | 1,17 → 1,77 | +29% | 0,26 | +61% · −11,5% | **+246% · −46,9%** |
> | 212 | IFR + MACD + Pullback + Tendência + Onda | +36% | −8,7% | 2,7 | 1,32 → 1,64 | +30% | 0,21 | +52% · −8,6% | **+274% · −42,4%** |
> | 213 | IFR + MACD + Quinta ⚠️ | +31% | −6,2% | 2,9 | 1,22 → 1,69 | +23% | 0,09 | +42% · −5,8% | **+114% · −19,2%** |
> | 214 | 1ª vela 80 + Quinta + Pullback + Bollinger + Onda ⚠️ | +27% | −5,0% | 2,8 | 1,14 → 1,89 | +19% | −0,02 | +39% · −3,9% | **+191% · −23,0%** |
> | 215 | ADX + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +36% | −7,8% | 3,0 | 1,03 → 1,87 | +24% | 0,23 | +60% · −10,0% | **+334% · −47,9%** |
> | 216 | IFR + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +33% | −7,0% | 2,9 | 1,09 → 1,83 | +26% | 0,10 | +47% · −5,3% | **+247% · −30,7%** |
> | 217 | ADX + IFR + MACD + Pullback + Onda | +35% | −7,0% | 3,1 | 1,02 → 1,82 | +23% | 0,13 | +53% · −8,1% | **+264% · −41,4%** |
> | 218 | IFR + Pullback + Onda | +34% | −6,6% | 3,1 | 1,13 → 1,68 | +26% | 0,05 | +48% · −7,3% | **+136% · −23,4%** |
> | 219 | IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | +34% | −7,0% | 3,0 | 0,93 → 2,01 | +21% | 0,20 | +54% · −6,4% | **+238% · −28,2%** |
> | 220 | ADX + 1ª vela 80 + Bollinger ⚠️ | +33% | −6,4% | 3,1 | 0,86 → 2,02 | +19% | 0,29 | +60% · −12,1% | **+178% · −36,7%** |
> | 221 | ADX + Quinta + Pullback + Tendência + Onda ⚠️ | +33% | −7,2% | 2,7 | 1,26 → 1,66 | +25% | 0,05 | +49% · −8,3% | **+230% · −46,5%** |
> | 222 | ADX + Quinta + Pullback ⚠️ | +27% | −6,4% | 2,3 | 1,43 → 1,59 | +16% | 0,03 | +42% · −9,7% | **+104% · −30,6%** |
> | 223 | Quinta + Tendência ⚠️ | +33% | −7,4% | 2,7 | 1,77 → 1,31 | +19% | −0,06 | +45% · −9,8% | **+81% · −21,7%** |
> | 224 | MACD + 1ª vela 80 + Pullback ⚠️ | +31% | −7,9% | 2,2 | 1,36 → 1,69 | +25% | −0,08 | +41% · −4,9% | **+112% · −17,3%** |
> | 225 | MACD + Bollinger + Tendência | +36% | −9,7% | 2,3 | 1,45 → 1,54 | +27% | 0,41 | +56% · −10,7% | **+172% · −32,1%** |
> | 226 | ADX + MACD + Quinta + Tendência ⚠️ | +34% | −8,2% | 2,6 | 1,27 → 1,65 | +26% | 0,16 | +52% · −11,8% | **+196% · −47,8%** |
> | 227 | IFR + Quinta + Tendência + Onda ⚠️ | +35% | −8,1% | 2,8 | 1,23 → 1,66 | +30% | 0,07 | +50% · −8,5% | **+199% · −35,0%** |
> | 228 | ADX + Quinta + Pullback + Bollinger + Onda ⚠️ | +28% | −5,3% | 2,9 | 1,07 → 1,82 | +20% | 0,05 | +45% · −6,9% | **+217% · −35,3%** |
> | 229 | MACD + 1ª vela 80 + Tendência ⚠️ | +38% | −9,4% | 2,7 | 1,28 → 1,59 | +29% | 0,29 | +55% · −10,3% | **+162% · −30,7%** |
> | 230 | ADX + IFR + 1ª vela 80 + Onda ⚠️ | +37% | −6,8% | 3,6 | 0,76 → 1,94 | +24% | 0,18 | +59% · −9,7% | **+236% · −39,3%** |
> | 231 | ADX + MACD + Pullback | +33% | −7,1% | 2,8 | 1,18 → 1,68 | +20% | −0,00 | +50% · −10,9% | **+135% · −36,3%** |
> | 232 | MACD + Pullback + Bollinger + Tendência + Onda | +33% | −7,8% | 2,6 | 1,29 → 1,62 | +29% | 0,19 | +49% · −7,8% | **+262% · −40,0%** |
> | 233 | ADX + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +29% | −5,2% | 3,2 | 0,93 → 1,82 | +21% | −0,03 | +44% · −6,5% | **+198% · −34,6%** |
> | 234 | MACD + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | +34% | −7,7% | 2,8 | 1,19 → 1,64 | +27% | 0,14 | +48% · −7,1% | **+243% · −37,2%** |
> | 235 | ADX + IFR + Bollinger + Onda | +35% | −7,2% | 3,1 | 0,85 → 1,95 | +23% | 0,23 | +61% · −9,8% | **+258% · −39,2%** |
> | 236 | 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +35% | −7,8% | 2,9 | 1,08 → 1,76 | +22% | 0,22 | +55% · −8,4% | **+237% · −34,7%** |
> | 237 | ADX + IFR + MACD | +38% | −8,4% | 3,1 | 0,95 → 1,82 | +22% | 0,32 | +62% · −12,0% | **+179% · −36,2%** |
> | 238 | ADX + Quinta + Bollinger + Tendência + Onda ⚠️ | +33% | −7,3% | 2,7 | 1,10 → 1,78 | +26% | 0,13 | +53% · −9,1% | **+275% · −45,0%** |
> | 239 | ADX + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +34% | −7,0% | 3,0 | 0,99 → 1,79 | +24% | 0,05 | +52% · −8,6% | **+252% · −43,5%** |
> | 240 | IFR + MACD + Pullback + Onda | +33% | −6,8% | 3,0 | 1,06 → 1,68 | +26% | 0,12 | +47% · −6,3% | **+179% · −28,1%** |

> [!example]- Combinações 241 a 270 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 241 | ADX + Tendência | +44% | −12,3% | 2,6 | 1,26 → 1,59 | +29% | 0,33 | +74% · −24,1% | **+141% · −45,8%** |
> | 242 | IFR + MACD + Bollinger + Tendência + Onda | +36% | −9,3% | 2,5 | 1,17 → 1,72 | +30% | 0,33 | +56% · −9,9% | **+322% · −46,5%** |
> | 243 | IFR + 1ª vela 80 + Quinta + Onda ⚠️ | +31% | −5,9% | 3,1 | 0,87 → 1,89 | +21% | −0,04 | +44% · −5,2% | **+170% · −23,3%** |
> | 244 | MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | +27% | −7,0% | 2,0 | 1,16 → 1,89 | +17% | 0,08 | +40% · −5,5% | **+152% · −24,9%** |
> | 245 | Quinta + Pullback + Tendência + Onda ⚠️ | +31% | −6,9% | 2,6 | 1,34 → 1,45 | +25% | 0,00 | +41% · −6,4% | **+147% · −27,2%** |
> | 246 | ADX + MACD + 1ª vela 80 + Bollinger ⚠️ | +33% | −7,1% | 2,8 | 0,90 → 1,97 | +20% | 0,28 | +55% · −10,9% | **+230% · −42,8%** |
> | 247 | IFR + MACD + 1ª vela 80 ⚠️ | +36% | −9,4% | 2,5 | 1,10 → 1,83 | +26% | 0,27 | +53% · −7,3% | **+159% · −23,5%** |
> | 248 | ADX + IFR + Tendência + Onda | +41% | −10,4% | 2,7 | 1,08 → 1,76 | +30% | 0,28 | +66% · −12,7% | **+267% · −48,2%** |
> | 249 | IFR + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +38% | −9,2% | 2,7 | 1,09 → 1,74 | +28% | 0,29 | +55% · −9,1% | **+300% · −44,0%** |
> | 250 | IFR + Bollinger + Onda | +34% | −6,8% | 3,1 | 0,89 → 1,87 | +24% | 0,19 | +55% · −7,9% | **+169% · −25,4%** |
> | 251 | 1ª vela 80 + Bollinger ⚠️ | +29% | −7,1% | 2,4 | 1,03 → 1,94 | +14% | 0,27 | +51% · −7,5% | **+97% · −16,3%** |
> | 252 | Quinta + Pullback ⚠️ | +21% | −2,7% | 3,1 | 2,18 → 0,85 | +14% | −0,02 | +26% · −4,2% | **+39% · −9,3%** |
> | 253 | ADX + MACD + Quinta + Bollinger ⚠️ | +29% | −6,1% | 2,6 | 0,99 → 1,87 | +19% | 0,16 | +47% · −9,6% | **+179% · −39,3%** |
> | 254 | Quinta + Pullback + Bollinger + Onda ⚠️ | +25% | −4,6% | 2,7 | 1,15 → 1,64 | +22% | −0,02 | +37% · −4,4% | **+129% · −20,0%** |
> | 255 | MACD + Quinta + Pullback + Tendência + Onda ⚠️ | +31% | −7,1% | 2,6 | 1,26 → 1,51 | +28% | 0,06 | +42% · −6,4% | **+191% · −35,0%** |
> | 256 | ADX + IFR + MACD + 1ª vela 80 + Onda ⚠️ | +36% | −7,5% | 3,1 | 0,77 → 1,89 | +23% | 0,23 | +56% · −8,7% | **+284% · −43,3%** |
> | 257 | ADX + Pullback + Tendência + Onda | +37% | −9,3% | 2,6 | 1,18 → 1,62 | +27% | 0,14 | +56% · −11,6% | **+215% · −49,2%** |
> | 258 | MACD + Quinta + Tendência ⚠️ | +32% | −8,5% | 2,3 | 1,42 → 1,40 | +25% | 0,13 | +44% · −9,7% | **+117% · −29,2%** |
> | 259 | 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +33% | −6,9% | 2,9 | 1,03 → 1,65 | +22% | −0,03 | +46% · −6,6% | **+170% · −29,2%** |
> | 260 | ADX + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +29% | −5,4% | 3,1 | 0,73 → 1,95 | +17% | 0,07 | +48% · −7,6% | **+238% · −41,0%** |
> | 261 | IFR + MACD + Quinta + Bollinger + Onda ⚠️ | +30% | −6,3% | 2,7 | 0,96 → 1,83 | +23% | 0,11 | +45% · −6,1% | **+232% · −33,5%** |
> | 262 | MACD + Pullback | +29% | −6,7% | 2,4 | 1,44 → 1,35 | +23% | −0,18 | +37% · −7,6% | **+65% · −15,6%** |
> | 263 | Quinta + Bollinger + Tendência + Onda ⚠️ | +31% | −7,0% | 2,5 | 1,17 → 1,62 | +24% | 0,06 | +47% · −7,6% | **+184% · −32,3%** |
> | 264 | ADX + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +33% | −6,5% | 3,1 | 0,86 → 1,80 | +23% | 0,09 | +49% · −7,4% | **+232% · −40,5%** |
> | 265 | ADX + IFR + MACD + Bollinger + Onda | +35% | −7,7% | 2,8 | 0,85 → 1,90 | +24% | 0,27 | +57% · −9,5% | **+310% · −45,6%** |
> | 266 | ADX + MACD + Pullback + Tendência + Onda | +36% | −8,9% | 2,6 | 1,13 → 1,65 | +27% | 0,17 | +54% · −9,9% | **+260% · −53,5%** |
> | 267 | ADX + IFR + Quinta + Onda ⚠️ | +33% | −6,5% | 3,1 | 0,80 → 1,84 | +21% | 0,03 | +51% · −8,6% | **+188% · −34,0%** |
> | 268 | MACD + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | +34% | −8,3% | 2,6 | 1,04 → 1,73 | +22% | 0,29 | +52% · −8,4% | **+289% · −41,6%** |
> | 269 | ADX + Quinta + Bollinger ⚠️ | +27% | −5,9% | 2,5 | 1,01 → 1,85 | +17% | 0,18 | +48% · −10,4% | **+132% · −32,8%** |
> | 270 | IFR + MACD + Quinta + Tendência + Onda ⚠️ | +35% | −8,6% | 2,5 | 1,14 → 1,64 | +29% | 0,16 | +49% · −8,5% | **+243% · −42,0%** |

> [!example]- Combinações 271 a 300 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 271 | ADX + 1ª vela 80 + Quinta ⚠️ | +30% | −5,5% | 3,1 | 0,78 → 1,85 | +19% | −0,03 | +47% · −10,0% | **+122% · −31,8%** |
> | 272 | ADX + MACD + Pullback + Bollinger + Onda | +31% | −6,8% | 2,7 | 0,95 → 1,81 | +22% | 0,15 | +50% · −7,8% | **+254% · −41,3%** |
> | 273 | ADX + IFR + MACD + Tendência + Onda | +39% | −10,4% | 2,5 | 1,03 → 1,74 | +29% | 0,32 | +61% · −11,8% | **+310% · −53,1%** |
> | 274 | MACD + Quinta + Pullback + Bollinger + Onda ⚠️ | +27% | −5,5% | 2,5 | 1,10 → 1,70 | +22% | 0,03 | +38% · −4,6% | **+176% · −25,3%** |
> | 275 | MACD + Quinta + Bollinger ⚠️ | +25% | −5,9% | 2,1 | 1,18 → 1,68 | +19% | 0,09 | +37% · −4,6% | **+97% · −16,7%** |
> | 276 | IFR + Tendência + Onda | +41% | −11,3% | 2,5 | 1,14 → 1,62 | +35% | 0,31 | +62% · −11,8% | **+185% · −34,9%** |
> | 277 | 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +29% | −6,9% | 2,4 | 1,03 → 1,84 | +20% | 0,08 | +45% · −5,4% | **+177% · −23,7%** |
> | 278 | ADX + MACD + Tendência | +40% | −11,5% | 2,4 | 1,16 → 1,61 | +29% | 0,36 | +64% · −17,5% | **+182% · −50,0%** |
> | 279 | ADX + 1ª vela 80 + Tendência + Onda ⚠️ | +38% | −9,1% | 2,8 | 0,91 → 1,76 | +25% | 0,19 | +61% · −11,1% | **+236% · −45,1%** |
> | 280 | IFR + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +33% | −8,3% | 2,5 | 0,91 → 1,91 | +21% | 0,26 | +51% · −6,8% | **+292% · −35,8%** |
> | 281 | ADX + Bollinger + Tendência + Onda | +37% | −9,4% | 2,5 | 1,01 → 1,75 | +28% | 0,27 | +62% · −11,8% | **+258% · −47,0%** |
> | 282 | ADX + MACD + 1ª vela 80 + Quinta ⚠️ | +30% | −6,4% | 2,7 | 0,84 → 1,86 | +20% | 0,04 | +46% · −9,3% | **+165% · −38,5%** |
> | 283 | ADX + Pullback | +33% | −8,7% | 2,3 | 1,24 → 1,52 | +16% | 0,01 | +53% · −14,8% | **+94% · −31,2%** |
> | 284 | ADX + Pullback + Bollinger + Onda | +31% | −6,9% | 2,6 | 0,96 → 1,78 | +21% | 0,13 | +51% · −8,9% | **+202% · −35,1%** |
> | 285 | ADX + 1ª vela 80 + Pullback + Onda ⚠️ | +33% | −6,7% | 2,9 | 0,83 → 1,78 | +22% | 0,05 | +50% · −8,4% | **+184% · −35,1%** |
> | 286 | ADX + IFR + MACD + Quinta + Onda ⚠️ | +33% | −6,9% | 2,9 | 0,80 → 1,82 | +22% | 0,10 | +49% · −8,0% | **+232% · −41,0%** |
> | 287 | MACD + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | +30% | −7,8% | 2,2 | 1,02 → 1,82 | +20% | 0,13 | +44% · −5,6% | **+230% · −30,3%** |
> | 288 | IFR + MACD | +38% | −9,9% | 2,5 | 1,05 → 1,62 | +27% | 0,45 | +55% · −9,0% | **+104% · −19,0%** |
> | 289 | IFR + Quinta + Onda ⚠️ | +30% | −5,8% | 3,0 | 0,82 → 1,70 | +24% | −0,10 | +43% · −6,7% | **+114% · −22,0%** |
> | 290 | Pullback + Tendência + Onda | +35% | −9,6% | 2,4 | 1,24 → 1,40 | +26% | 0,15 | +49% · −8,8% | **+136% · −27,1%** |
> | 291 | MACD + Quinta + Bollinger + Tendência + Onda ⚠️ | +31% | −7,8% | 2,3 | 1,09 → 1,62 | +24% | 0,15 | +46% · −7,8% | **+231% · −39,5%** |
> | 292 | MACD + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | +33% | −7,6% | 2,6 | 1,00 → 1,64 | +22% | 0,09 | +45% · −7,0% | **+214% · −36,7%** |
> | 293 | MACD + Pullback + Tendência + Onda | +35% | −9,3% | 2,3 | 1,17 → 1,47 | +30% | 0,19 | +48% · −8,4% | **+177% · −34,9%** |
> | 294 | Tendência | +49% | −16,1% | 2,2 | 1,58 → 1,22 | +22% | — | +72% · −23,6% | **+72% · −23,6%** |
> | 295 | IFR + 1ª vela 80 + Onda ⚠️ | +36% | −8,3% | 2,8 | 0,76 → 1,84 | +21% | 0,18 | +54% · −7,3% | **+157% · −23,2%** |
> | 296 | MACD + 1ª vela 80 + Bollinger ⚠️ | +30% | −10,3% | 1,7 | 0,99 → 1,83 | +16% | 0,30 | +48% · −8,2% | **+141% · −25,7%** |
> | 297 | ADX + MACD + Bollinger + Tendência + Onda | +36% | −9,6% | 2,4 | 0,98 → 1,74 | +26% | 0,30 | +58% · −11,1% | **+307% · −51,4%** |
> | 298 | ADX + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +37% | −9,4% | 2,6 | 0,90 → 1,75 | +24% | 0,24 | +57% · −10,3% | **+281% · −49,9%** |
> | 299 | IFR + MACD + Tendência + Onda | +39% | −11,1% | 2,4 | 1,06 → 1,61 | +33% | 0,38 | +57% · −11,0% | **+227% · −41,9%** |
> | 300 | ADX + MACD + Quinta + Pullback + Onda ⚠️ | +29% | −6,2% | 2,6 | 0,91 → 1,70 | +21% | 0,01 | +42% · −6,8% | **+184% · −36,9%** |

> [!example]- Combinações 301 a 330 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 301 | MACD + Tendência | +40% | −13,4% | 2,1 | 1,28 → 1,35 | +29% | 0,56 | +57% · −15,6% | **+107% · −30,3%** |
> | 302 | ADX + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +33% | −7,1% | 2,8 | 0,67 → 1,90 | +17% | 0,25 | +53% · −8,9% | **+275% · −45,2%** |
> | 303 | IFR + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +31% | −7,5% | 2,5 | 0,86 → 1,82 | +21% | 0,07 | +44% · −5,4% | **+215% · −30,5%** |
> | 304 | ADX + 1ª vela 80 + Bollinger + Onda ⚠️ | +33% | −7,0% | 2,8 | 0,62 → 1,92 | +16% | 0,22 | +56% · −10,6% | **+223% · −42,6%** |
> | 305 | ADX + IFR + Onda | +38% | −9,0% | 2,8 | 0,70 → 1,80 | +23% | 0,19 | +62% · −11,5% | **+175% · −34,0%** |
> | 306 | Bollinger + Tendência + Onda | +35% | −9,9% | 2,3 | 1,05 → 1,58 | +26% | 0,26 | +57% · −10,6% | **+170% · −32,2%** |
> | 307 | IFR + MACD + Bollinger + Onda | +33% | −8,2% | 2,5 | 0,86 → 1,79 | +24% | 0,28 | +52% · −8,0% | **+216% · −33,3%** |
> | 308 | 1ª vela 80 + Tendência + Onda ⚠️ | +38% | −9,7% | 2,6 | 0,93 → 1,61 | +23% | 0,20 | +55% · −9,4% | **+158% · −29,1%** |
> | 309 | ADX + Quinta + Tendência + Onda ⚠️ | +34% | −8,7% | 2,5 | 0,97 → 1,64 | +26% | 0,06 | +52% · −10,4% | **+189% · −45,7%** |
> | 310 | ADX + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +31% | −6,2% | 2,9 | 0,62 → 1,81 | +17% | 0,05 | +45% · −7,7% | **+202% · −41,2%** |
> | 311 | 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +27% | −5,8% | 2,4 | 0,96 → 1,65 | +20% | −0,10 | +36% · −4,8% | **+119% · −21,7%** |
> | 312 | MACD + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | +28% | −6,8% | 2,2 | 0,96 → 1,70 | +20% | −0,04 | +37% · −4,3% | **+163% · −25,5%** |
> | 313 | ADX + MACD + Quinta + Tendência + Onda ⚠️ | +34% | −8,9% | 2,4 | 0,95 → 1,65 | +26% | 0,13 | +50% · −9,7% | **+231% · −50,1%** |
> | 314 | ADX + MACD + Bollinger | +32% | −8,5% | 2,3 | 0,83 → 1,83 | +21% | 0,33 | +57% · −13,1% | **+165% · −38,7%** |
> | 315 | ADX + IFR + MACD + Onda | +37% | −9,0% | 2,6 | 0,72 → 1,78 | +24% | 0,25 | +57% · −10,4% | **+217% · −40,9%** |
> | 316 | ADX + MACD + Quinta + Bollinger + Onda ⚠️ | +29% | −6,3% | 2,6 | 0,70 → 1,82 | +19% | 0,11 | +46% · −8,0% | **+222% · −42,0%** |
> | 317 | Pullback + Bollinger + Onda | +28% | −6,4% | 2,3 | 1,00 → 1,58 | +23% | 0,09 | +43% · −6,2% | **+118% · −20,0%** |
> | 318 | ADX + Bollinger | +32% | −7,9% | 2,5 | 0,79 → 1,79 | +18% | 0,44 | +64% · −16,1% | **+121% · −32,1%** |
> | 319 | ADX + Quinta + Pullback + Onda ⚠️ | +28% | −6,2% | 2,5 | 0,90 → 1,62 | +19% | −0,01 | +42% · −7,7% | **+140% · −31,1%** |
> | 320 | MACD + Bollinger + Tendência + Onda | +35% | −10,1% | 2,2 | 1,00 → 1,59 | +25% | 0,34 | +53% · −10,1% | **+216% · −39,5%** |
> | 321 | MACD + Pullback + Bollinger + Onda | +29% | −7,6% | 2,1 | 0,98 → 1,66 | +23% | 0,13 | +43% · −6,0% | **+163% · −25,3%** |
> | 322 | MACD + 1ª vela 80 + Tendência + Onda ⚠️ | +36% | −9,9% | 2,4 | 0,91 → 1,61 | +23% | 0,29 | +52% · −9,1% | **+200% · −36,7%** |
> | 323 | ADX + 1ª vela 80 + Quinta + Onda ⚠️ | +30% | −6,2% | 2,8 | 0,56 → 1,79 | +16% | −0,03 | +46% · −9,2% | **+158% · −39,0%** |
> | 324 | ADX + MACD + 1ª vela 80 ⚠️ | +35% | −8,9% | 2,5 | 0,71 → 1,82 | +20% | 0,20 | +55% · −12,7% | **+152% · −37,9%** |
> | 325 | IFR + MACD + Quinta + Onda ⚠️ | +31% | −7,2% | 2,5 | 0,80 → 1,68 | +24% | 0,06 | +42% · −6,2% | **+153% · −27,8%** |
> | 326 | ADX + 1ª vela 80 ⚠️ | +36% | −8,8% | 2,6 | 0,62 → 1,79 | +20% | 0,15 | +61% · −15,9% | **+111% · −32,0%** |
> | 327 | Pullback | +26% | −4,6% | 2,8 | 1,87 → 0,62 | +11% | — | +32% · −9,1% | **+32% · −9,1%** |
> | 328 | Quinta + Tendência + Onda ⚠️ | +32% | −8,8% | 2,2 | 1,00 → 1,42 | +26% | −0,05 | +44% · −8,3% | **+115% · −26,6%** |
> | 329 | IFR + MACD + 1ª vela 80 + Onda ⚠️ | +35% | −9,6% | 2,3 | 0,77 → 1,79 | +21% | 0,26 | +51% · −7,0% | **+201% · −30,3%** |
> | 330 | IFR + Onda | +37% | −9,2% | 2,6 | 0,68 → 1,64 | +27% | 0,17 | +55% · −11,1% | **+104% · −22,7%** |

> [!example]- Combinações 331 a 360 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 331 | ADX + MACD + Pullback + Onda | +32% | −8,0% | 2,4 | 0,81 → 1,66 | +22% | 0,09 | +48% · −8,7% | **+171% · −39,3%** |
> | 332 | 1ª vela 80 + Quinta ⚠️ | +25% | −5,2% | 2,3 | 0,86 → 1,63 | +14% | −0,33 | +33% · −5,7% | **+55% · −13,7%** |
> | 333 | ADX + Tendência + Onda | +40% | −11,8% | 2,3 | 0,87 → 1,60 | +30% | 0,23 | +64% · −16,3% | **+176% · −48,4%** |
> | 334 | ADX + Quinta + Bollinger + Onda ⚠️ | +28% | −6,3% | 2,5 | 0,66 → 1,80 | +18% | 0,06 | +47% · −8,4% | **+174% · −36,2%** |
> | 335 | MACD + 1ª vela 80 + Quinta ⚠️ | +27% | −8,2% | 1,8 | 0,90 → 1,67 | +16% | −0,06 | +36% · −5,4% | **+91% · −19,3%** |
> | 336 | ADX + MACD + 1ª vela 80 + Onda ⚠️ | +34% | −8,1% | 2,6 | 0,53 → 1,77 | +17% | 0,20 | +52% · −10,4% | **+188% · −42,6%** |
> | 337 | MACD + Quinta + Tendência + Onda ⚠️ | +32% | −9,2% | 2,1 | 0,96 → 1,48 | +25% | 0,10 | +43% · −8,3% | **+154% · −34,4%** |
> | 338 | ADX + MACD + Tendência + Onda | +38% | −11,4% | 2,2 | 0,87 → 1,62 | +28% | 0,29 | +58% · −13,1% | **+216% · −52,6%** |
> | 339 | MACD + Bollinger | +29% | −10,1% | 1,6 | 0,93 → 1,61 | +20% | 0,37 | +47% · −7,9% | **+88% · −16,8%** |
> | 340 | MACD + Quinta + Pullback + Onda ⚠️ | +27% | −6,3% | 2,2 | 0,92 → 1,49 | +22% | −0,04 | +34% · −5,0% | **+108% · −22,9%** |
> | 341 | MACD + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +28% | −7,9% | 1,9 | 0,75 → 1,82 | +15% | 0,08 | +41% · −5,7% | **+199% · −33,0%** |
> | 342 | 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | +27% | −6,5% | 2,2 | 0,71 → 1,85 | +13% | −0,00 | +41% · −5,1% | **+151% · −25,7%** |
> | 343 | MACD + 1ª vela 80 + Pullback + Onda ⚠️ | +31% | −9,2% | 1,9 | 0,86 → 1,66 | +20% | 0,08 | +42% · −5,9% | **+151% · −25,6%** |
> | 344 | ADX + MACD + Quinta ⚠️ | +29% | −7,5% | 2,2 | 0,76 → 1,68 | +18% | 0,05 | +44% · −11,1% | **+112% · −34,1%** |
> | 345 | ADX + MACD + Bollinger + Onda | +32% | −8,1% | 2,4 | 0,60 → 1,78 | +19% | 0,25 | +53% · −10,3% | **+207% · −41,4%** |
> | 346 | Quinta + Pullback + Onda ⚠️ | +25% | −5,5% | 2,2 | 0,91 → 1,30 | +21% | −0,08 | +31% · −5,5% | **+71% · −19,2%** |
> | 347 | ADX + Pullback + Onda | +32% | −8,6% | 2,3 | 0,78 → 1,57 | +20% | 0,07 | +50% · −10,4% | **+129% · −34,2%** |
> | 348 | 1ª vela 80 + Pullback + Onda ⚠️ | +30% | −8,6% | 2,0 | 0,84 → 1,59 | +20% | 0,03 | +42% · −6,4% | **+109% · −21,5%** |
> | 349 | ADX + 1ª vela 80 + Onda ⚠️ | +35% | −8,6% | 2,5 | 0,46 → 1,75 | +15% | 0,15 | +55% · −13,8% | **+146% · −40,7%** |
> | 350 | Tendência + Onda | +40% | −13,7% | 2,0 | 0,88 → 1,37 | +28% | 0,30 | +57% · −13,1% | **+105% · −26,5%** |
> | 351 | MACD + Tendência + Onda | +37% | −12,7% | 1,9 | 0,86 → 1,44 | +27% | 0,39 | +52% · −11,6% | **+142% · −34,4%** |
> | 352 | IFR + MACD + Onda | +36% | −10,0% | 2,3 | 0,70 → 1,64 | +25% | 0,31 | +51% · −8,8% | **+141% · −27,6%** |
> | 353 | MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | +31% | −10,5% | 1,7 | 0,64 → 1,78 | +14% | 0,27 | +47% · −7,8% | **+186% · −33,0%** |
> | 354 | ADX + MACD + Quinta + Onda ⚠️ | +30% | −7,4% | 2,3 | 0,54 → 1,67 | +19% | 0,02 | +44% · −8,7% | **+147% · −37,0%** |
> | 355 | ADX + Bollinger + Onda | +32% | −8,8% | 2,2 | 0,53 → 1,76 | +18% | 0,22 | +57% · −11,5% | **+162% · −35,5%** |
> | 356 | MACD + Quinta + Bollinger + Onda ⚠️ | +27% | −7,2% | 1,9 | 0,66 → 1,67 | +16% | 0,06 | +39% · −5,3% | **+138% · −24,7%** |
> | 357 | MACD + Pullback + Onda | +30% | −9,4% | 1,8 | 0,80 → 1,44 | +24% | 0,09 | +39% · −7,1% | **+99% · −22,8%** |
> | 358 | MACD + Quinta ⚠️ | +24% | −7,1% | 1,6 | 0,81 → 1,34 | +20% | −0,11 | +30% · −4,4% | **+48% · −9,7%** |
> | 359 | 1ª vela 80 + Bollinger + Onda ⚠️ | +30% | −9,5% | 1,8 | 0,57 → 1,80 | +11% | 0,23 | +48% · −7,6% | **+139% · −25,6%** |
> | 360 | MACD + 1ª vela 80 ⚠️ | +33% | −13,7% | 1,4 | 0,71 → 1,60 | +15% | 0,27 | +45% · −9,3% | **+82% · −19,4%** |

> [!example]- Combinações 361 a 381 de 381 (clique para abrir)
> | # | Combinação | Ao ano | Pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação | 1% dividido: ao ano · queda | **1% por setup: ao ano · queda** |
> |---|---|---|---|---|---|---|---|---|---|
> | 361 | ADX + MACD | +36% | −11,8% | 1,9 | 0,60 → 1,62 | +19% | 0,17 | +57% · −17,7% | **+102% · −35,8%** |
> | 362 | ADX + Quinta ⚠️ | +28% | −8,8% | 1,7 | 0,68 → 1,52 | +14% | 0,09 | +45% · −13,8% | **+75% · −27,5%** |
> | 363 | Quinta + Bollinger + Onda ⚠️ | +25% | −6,5% | 1,8 | 0,60 → 1,62 | +14% | −0,07 | +38% · −5,3% | **+97% · −17,6%** |
> | 364 | Pullback + Onda | +28% | −8,7% | 1,8 | 0,76 → 1,22 | +22% | 0,16 | +37% · −9,5% | **+63% · −19,9%** |
> | 365 | MACD + 1ª vela 80 + Quinta + Onda ⚠️ | +28% | −9,6% | 1,6 | 0,58 → 1,66 | +14% | 0,00 | +38% · −6,4% | **+127% · −29,5%** |
> | 366 | ADX + MACD + Onda | +34% | −10,2% | 2,1 | 0,43 → 1,63 | +19% | 0,18 | +53% · −11,9% | **+135% · −38,6%** |
> | 367 | ADX + Quinta + Onda ⚠️ | +29% | −7,8% | 2,1 | 0,45 → 1,59 | +18% | −0,08 | +44% · −10,8% | **+108% · −30,6%** |
> | 368 | MACD + Bollinger + Onda | +30% | −10,5% | 1,6 | 0,53 → 1,62 | +15% | 0,28 | +46% · −7,6% | **+127% · −24,5%** |
> | 369 | 1ª vela 80 + Quinta + Onda ⚠️ | +27% | −8,5% | 1,7 | 0,49 → 1,61 | +11% | −0,15 | +36% · −6,4% | **+89% · −23,6%** |
> | 370 | 1ª vela 80 ⚠️ | +33% | −12,8% | 1,5 | 0,59 → 1,51 | +9% | — | +48% · −13,6% | **+48% · −13,6%** |
> | 371 | Quinta ⚠️ | +17% | −3,7% | 1,1 | 1,22 → 0,67 | +15% | — | +18% · −2,6% | **+18% · −2,6%** |
> | 372 | MACD + 1ª vela 80 + Onda ⚠️ | +32% | −13,5% | 1,4 | 0,46 → 1,61 | +12% | 0,28 | +44% · −9,1% | **+117% · −29,5%** |
> | 373 | ADX + Onda | +35% | −12,1% | 1,8 | 0,32 → 1,54 | +18% | 0,05 | +57% · −16,1% | **+98% · −33,6%** |
> | 374 | ADX | +38% | −15,4% | 1,7 | 0,45 → 1,44 | +12% | — | +67% · −30,8% | **+67% · −30,8%** |
> | 375 | MACD + Quinta + Onda ⚠️ | +27% | −8,9% | 1,6 | 0,45 → 1,45 | +15% | −0,06 | +34% · −6,3% | **+80% · −23,8%** |
> | 376 | Bollinger + Onda | +28% | −10,0% | 1,6 | 0,42 → 1,56 | +12% | 0,17 | +48% · −8,5% | **+88% · −18,0%** |
> | 377 | MACD | +31% | −16,7% | 1,1 | 0,52 → 1,23 | +21% | — | +41% · −10,5% | **+41% · −10,5%** |
> | 378 | 1ª vela 80 + Onda ⚠️ | +32% | −13,8% | 1,4 | 0,34 → 1,55 | +8% | 0,26 | +45% · −11,3% | **+80% · −24,2%** |
> | 379 | MACD + Onda | +31% | −14,5% | 1,3 | 0,31 → 1,39 | +13% | 0,31 | +42% · −9,8% | **+71% · −23,6%** |
> | 380 | Quinta + Onda ⚠️ | +24% | −8,6% | 1,3 | 0,30 → 1,25 | +12% | −0,38 | +30% · −8,2% | **+47% · −20,0%** |
> | 381 | Onda | +30% | −18,7% | 0,9 | 0,11 → 1,16 | +5% | — | +40% · −19,8% | **+40% · −19,8%** |

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
| 2026* | +47,4% | +56,3% | +36,9% | +33,1% | +7,5% | +21,0% | +18,3% | +88,3% | +41,5% | +36,8% | +31,5% | +104,4% | +11,5% | +6,1% | Rec. 1% |
| **Acumulado no período** | **+395,5%** | **+494,9%** | **+285,9%** | **+303,6%** | **+116,2%** | **+207,7%** | **+208,0%** | **+608,3%** | **+260,7%** | **+311,4%** | **+290,3%** | **+11618,1%** | **+81,4%** | **+62,0%** | **Rec. 1%** |
| **R\$ 10.000 viraram** | **R\$ 49.549** | **R\$ 59.486** | **R\$ 38.591** | **R\$ 40.357** | **R\$ 21.624** | **R\$ 30.766** | **R\$ 30.804** | **R\$ 70.833** | **R\$ 36.065** | **R\$ 41.141** | **R\$ 39.031** | **R\$ 1.171.808** | **R\$ 18.137** | **R\$ 16.201** | |
| **Média ao ano** | **+38,2%** | **+43,4%** | **+31,4%** | **+32,6%** | **+16,9%** | **+25,5%** | **+25,6%** | **+48,6%** | **+29,6%** | **+33,1%** | **+31,7%** | **+162,1%** | **+12,8%** | **+10,3%** | |

\* ano parcial: os dados vão de 01/11/2021 a 28/10/2026.

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
> | out/2026 | +7,5% | +15,6% | −0,7% | −1,7% | +2,5% | −0,1% | −1,1% | +18,1% | −8,3% | +4,7% | +4,6% | +15,4% | +0,9% | −8,2% |
> | **Acumulado** | **+395,5%** | **+494,9%** | **+285,9%** | **+303,6%** | **+116,2%** | **+207,7%** | **+208,0%** | **+608,3%** | **+260,7%** | **+311,4%** | **+290,3%** | **+11618,1%** | **+81,4%** | **+62,0%** |

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
| 2026* | +68,9% | +72,2% | +37,6% | +38,5% | +8,9% | +20,4% | +24,4% | +103,7% | +39,8% | +46,4% | +230,8% | +38,5% | +104,4% | +11,5% | +6,1% | Todos ⚠️ |
| **Acumulado no período** | **+1154,5%** | **+1219,1%** | **+442,4%** | **+585,9%** | **+131,3%** | **+298,8%** | **+693,0%** | **+1367,9%** | **+434,6%** | **+661,4%** | **+57061,7%** | **+690,8%** | **+11618,1%** | **+81,4%** | **+62,0%** | **Todos ⚠️** |
| **R\$ 10.000 viraram** | **R\$ 125.450** | **R\$ 131.911** | **R\$ 54.235** | **R\$ 68.587** | **R\$ 23.135** | **R\$ 39.879** | **R\$ 79.299** | **R\$ 146.787** | **R\$ 53.462** | **R\$ 76.142** | **R\$ 5.716.171** | **R\$ 79.083** | **R\$ 1.171.808** | **R\$ 18.137** | **R\$ 16.201** | |
| **Média ao ano** | **+66,8%** | **+68,5%** | **+40,8%** | **+47,6%** | **+18,5%** | **+32,3%** | **+52,0%** | **+72,2%** | **+40,4%** | **+50,8%** | **+261,1%** | **+51,9%** | **+162,1%** | **+12,8%** | **+10,3%** | |

\* ano parcial: os dados vão de 01/11/2021 a 28/10/2026.

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
> | out/2026 | +11,3% | +19,8% | +0,3% | −1,5% | +1,9% | +0,2% | −2,1% | +16,3% | −5,4% | +6,3% | +27,1% | +5,6% | +15,4% | +0,9% | −8,2% |
> | **Acumulado** | **+1154,5%** | **+1219,1%** | **+442,4%** | **+585,9%** | **+131,3%** | **+298,8%** | **+693,0%** | **+1367,9%** | **+434,6%** | **+661,4%** | **+57061,7%** | **+690,8%** | **+11618,1%** | **+81,4%** | **+62,0%** |

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +32% | −3% | −4% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +75% | −8% | −11% | −17% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+162%** | **−17%** | −22% | −32% |
| Risco fixo de 2% por operação | 2,00% | +428% | −33% | −40% | −55% |
| Kelly ¼ | 2,95% | +928% | −44% | −55% | −72% |
| Kelly ½ | 5,91% | +2999% | −72% | −83% | −95% |
| Kelly cheio | 11,81% | +1856% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,66% | +312% | −30% | −36% | −50% |
| Larry Williams 5% | 3,32% | +929% | −53% | −61% | −77% |
| Larry Williams 10% | 6,64% | +2396% | −81% | −87% | −97% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros). **Sorteio:** a ordem das operações foi embaralhada 2.000 vezes — a queda de verdade depende da sorte na sequência, e a ordem real foi das mais favoráveis. Planeje pela queda do sorteio, não pela real.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: IFR de Tendência 7,7% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
- **Larry Williams:** no campeonato de 1987 ele usou o Kelly como fração do capital ÷ **margem** por contrato — a conta foi de US\$ 10 mil a ~US\$ 2,1 milhões, caiu para ~US\$ 700 mil e terminou o ano em ~US\$ 1,1 milhão. Depois ele passou a usar **contratos = capital × risco% ÷ maior perda já vista por contrato**, com ~5% (cauteloso), 10–12% (moderado) e 15–18% (agressivo). Esses percentuais eram para poucas operações por ano; estes setups operam muitas vezes por mês e a maior perda deles é ~1,5 vezes o stop típico, então **Larry com 2,5% ≈ arriscar 1,7% por operação** — perto do tamanho sugerido.

### Calculadora de contratos (risco de 1% por operação)

**contratos = capital × 1% ÷ ((stop em pts + 15) × R\$ 0,20)** — arredonde para baixo. Calcule para cada setup, a cada operação, com o capital do momento (assim a posição cresce quando ganha e diminui quando perde).

| Setup | Stop hoje | Risco por contrato | R\$ 10.000 | R\$ 20.000 | R\$ 50.000 | R\$ 100.000 | R\$ 200.000 |
|---|---|---|---|---|---|---|---|
| ADX da Manhã | 260 pts | R\$ 55 | 1,8 | 3,6 | 9,1 | 18,2 | 36,4 |
| IFR de Tendência ⭐ | 347 pts | R\$ 72 | 1,4 | 2,8 | 6,9 | 13,8 | 27,7 |
| MACD na Tendência | 867 pts | R\$ 176 | 0,6 | 1,1 | 2,8 | 5,7 | 11,3 |
| Primeira Vela de 80 Minutos | 649 pts | R\$ 133 | 0,8 | 1,5 | 3,8 | 7,5 | 15,1 |
| Primeira Vela de Quinta | 867 pts | R\$ 176 | 0,6 | 1,1 | 2,8 | 5,7 | 11,3 |
| Pullback na Média ⭐ | 632 pts | R\$ 129 | 0,8 | 1,5 | 3,9 | 7,7 | 15,5 |
| Rompimento da Bollinger ⭐ | 364 pts | R\$ 76 | 1,3 | 2,6 | 6,6 | 13,2 | 26,4 |
| Tendência Forte do Dia | 632 pts | R\$ 129 | 0,8 | 1,5 | 3,9 | 7,7 | 15,5 |
| Vai na Onda | 867 pts | R\$ 176 | 0,6 | 1,1 | 2,8 | 5,7 | 11,3 |

*Stops calculados com o ATR (4.212 pts) e o preço (173.325) de hoje — mudam todo dia. ⭐ = setups da combinação recomendada. Com risco de 0,5%, use a metade. Confira a margem de day trade da sua corretora para o número de contratos.*

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R\$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- **Risco 1%:** cada setup arrisca 1% do capital total em cada operação (contratos = capital × 1% ÷ (stop + custo) em R\$). Se dois setups estiverem posicionados ao mesmo tempo, o risco aberto é de 2%.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
