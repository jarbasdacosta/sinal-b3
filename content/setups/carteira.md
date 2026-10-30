---
title: Carteira de setups
date: 2026-10-30
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 30/10/2026 16:14 BRT · dados de 01/11/2021 a 29/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 9 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 40.764** (+33% ao ano · pior queda −5% · Sharpe 1,63)
> - CDI: **R\$ 18.156** (+13% ao ano) · Ibovespa: **R\$ 16.029** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 38.977, +32% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.161.253, +161% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+1,1%** em 3 pregões.

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

### Taxa de acerto, payoff e expectativa

Os mesmos setups vistos por operação, não por ano. [Ver todas as operações, uma a uma](operacoes).

| | Operações | Taxa de acerto | Ganho médio | Perda média | Payoff | Expectativa (pts) | Expectativa (R) | Lucro total | Lucro total (R\$, 1 contrato) |
|---|---|---|---|---|---|---|---|---|---|
| ⭐ **Recomendada** (IFR + Pullback + Bollinger) | 1333 | 34,6% | 754 pts | 265 pts | 2,84 | **87,3 pts** | +0,34 R | 116.324 pts | R\$ 23.265 |
| [ADX](adx-da-manha) | 1792 | 18,4% | 1.113 pts | 213 pts | 5,22 | **30,3 pts** | +0,14 R | 54.278 pts | R\$ 10.856 |
| [IFR](ifr-de-tendencia) | 771 | 32,6% | 815 pts | 275 pts | 2,97 | **80,1 pts** | +0,28 R | 61.777 pts | R\$ 12.355 |
| [MACD](macd-na-tendencia) | 898 | 22,0% | 998 pts | 225 pts | 4,45 | **45,1 pts** | +0,13 R | 40.484 pts | R\$ 8.097 |
| [1ª vela 80](primeira-vela-80-min) | 475 | 21,7% | 1.357 pts | 262 pts | 5,17 | **88,6 pts** | +0,30 R | 42.092 pts | R\$ 8.418 |
| [Quinta](primeira-vela-de-quinta) | 108 | 63,9% | 396 pts | 469 pts | 0,84 | **83,4 pts** | +0,23 R | 9.006 pts | R\$ 1.801 |
| [Pullback](pullback-na-media) | 303 | 38,0% | 729 pts | 300 pts | 2,43 | **90,7 pts** | +0,28 R | 27.482 pts | R\$ 5.496 |
| [Bollinger](rompimento-da-bollinger) | 259 | 36,7% | 622 pts | 195 pts | 3,18 | **104,5 pts** | +0,60 R | 27.064 pts | R\$ 5.413 |
| [Tendência](tendencia-forte-do-dia) | 1754 | 34,5% | 721 pts | 317 pts | 2,28 | **41,9 pts** | +0,13 R | 73.564 pts | R\$ 14.713 |
| [Onda](vai-na-onda) | 1185 | 35,4% | 882 pts | 429 pts | 2,05 | **35,4 pts** | +0,11 R | 41.939 pts | R\$ 8.388 |
| Todos os 9 juntos | 7545 | 29,0% | 863 pts | 281 pts | 3,07 | **50,1 pts** | +0,18 R | 377.687 pts | R\$ 75.537 |

*Taxa de acerto = operações no lucro ÷ total. Payoff = ganho médio ÷ perda média. **Expectativa matemática** = quanto a operação rende em média (acerto × ganho médio − erro × perda média); em **R** é o mesmo em múltiplos do risco (stop + custo), que é o que o tamanho de 1% usa. Lucro total em pontos, já com o custo de 15 pontos por operação.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes:

| Perfil | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano · queda | Sharpe treino → teste |
|---|---|---|---|---|---|
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | **+161% · −17,1%** | +52% · −5,1% | +32% · −2,6% | 2,34 → 2,13 |
| 📈 Maior retorno | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% · −16,1% | 1,58 → 1,20 |
| 🛡️ Menor queda | Pullback + Bollinger | **+78% · −8,6%** | +43% · −4,0% | +26% · −2,1% | 2,24 → 1,64 |

*R\$ 10 mil viraram, na recomendada: R\$ 38.977 com 1 contrato por R\$ 10 mil · R\$ 78.899 com 1% dividido entre os setups · **R\$ 1.161.253 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · MACD = MACD na Tendência · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

**Por que a recomendada é IFR de Tendência + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios ao mesmo tempo — Sharpe 2,20, rende 7,2× acima do CDI para cada 1% de pior queda, e o Sharpe ficou em 2,34 no treino e 2,13 no teste (não depende de um período só). A correlação média entre os setups dela é 0,00: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, MACD na Tendência, Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR + Quinta + Pullback + Bollinger ⚠️ | **+174% · −17,1%** | +43% · −3,5% | +28% | −1,6% | 9,2 | 2,52 → 2,18 | +20% | −0,01 |
| 2 | IFR + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+249% · −20,5%** | +44% · −3,3% | +29% | −2,1% | 7,5 | 2,15 → 2,31 | +23% | −0,04 |
| 3 | IFR + Pullback + Bollinger ⭐ | **+161% · −17,1%** | +52% · −5,1% | +32% | −2,6% | 7,2 | 2,34 → 2,13 | +22% | 0,00 |
| 4 | IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+165% · −16,4%** | +42% · −3,3% | +30% | −2,2% | 7,7 | 1,98 → 2,13 | +23% | −0,14 |
| 5 | IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+233% · −20,4%** | +51% · −4,4% | +32% | −3,1% | 6,3 | 2,02 → 2,26 | +25% | 0,01 |
| 6 | IFR + Quinta + Pullback ⚠️ | **+106% · −12,8%** | +39% · −3,5% | +29% | −2,0% | 8,1 | 2,34 → 1,91 | +19% | −0,09 |
| 7 | 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+142% · −15,2%** | +38% · −3,1% | +25% | −2,0% | 6,4 | 1,95 → 2,07 | +22% | −0,07 |
| 8 | IFR + Quinta + Bollinger ⚠️ | **+135% · −17,4%** | +46% · −4,8% | +28% | −2,9% | 5,3 | 1,93 → 2,12 | +22% | 0,05 |
| 9 | IFR + 1ª vela 80 + Pullback ⚠️ | **+152% · −16,3%** | +50% · −4,7% | +34% | −3,0% | 7,2 | 1,84 → 2,07 | +26% | −0,13 |
| 10 | IFR + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+362% · −35,7%** | +56% · −6,7% | +35% | −5,0% | 4,6 | 2,09 → 1,99 | +25% | 0,09 |
| 11 | 1ª vela 80 + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+250% · −29,1%** | +45% · −4,9% | +30% | −3,3% | 5,2 | 2,13 → 1,87 | +22% | −0,01 |
| 12 | IFR + Pullback | **+97% · −12,9%** | +51% · −5,9% | +35% | −3,5% | 6,2 | 2,15 → 1,83 | +21% | −0,17 |
| 13 | IFR + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+273% · −30,2%** | +48% · −5,2% | +34% | −4,2% | 5,0 | 2,08 → 1,89 | +24% | −0,04 |
| 14 | IFR + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+288% · −33,2%** | +49% · −6,0% | +32% | −4,4% | 4,4 | 2,34 → 1,86 | +21% | 0,06 |
| 15 | Quinta + Pullback + Bollinger ⚠️ | **+87% · −8,2%** | +34% · −2,4% | +23% | −1,6% | 6,1 | 2,51 → 1,71 | +17% | −0,02 |
| 16 | IFR + MACD + Quinta + Pullback + Bollinger ⚠️ | **+227% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 4,5 | 1,93 → 1,92 | +23% | 0,04 |
| 17 | ADX + IFR + Quinta + Pullback + Bollinger ⚠️ | **+277% · −34,9%** | +50% · −6,4% | +30% | −4,1% | 4,2 | 1,85 → 2,14 | +20% | 0,08 |
| 18 | IFR + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+319% · −35,3%** | +53% · −6,6% | +34% | −4,9% | 4,2 | 1,89 → 1,98 | +26% | 0,09 |
| 19 | IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+256% · −30,1%** | +57% · −6,9% | +38% | −5,7% | 4,4 | 1,98 → 1,85 | +25% | 0,02 |
| 20 | 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+234% · −28,8%** | +52% · −6,5% | +33% | −4,6% | 4,5 | 2,01 → 1,83 | +23% | 0,05 |
| 21 | 1ª vela 80 + Pullback + Bollinger ⚠️ | **+130% · −15,3%** | +45% · −4,1% | +28% | −3,6% | 4,3 | 1,78 → 2,00 | +24% | −0,03 |
| 22 | ADX + IFR + Pullback + Bollinger | **+259% · −34,2%** | +58% · −7,9% | +34% | −4,7% | 4,4 | 1,71 → 2,10 | +21% | 0,13 |
| 23 | Pullback + Bollinger | **+78% · −8,6%** | +43% · −4,0% | +26% | −2,1% | 6,1 | 2,24 → 1,64 | +17% | −0,05 |
| 24 | IFR + Pullback + Bollinger + Tendência | **+270% · −33,2%** | +58% · −8,0% | +36% | −5,9% | 3,9 | 2,23 → 1,82 | +22% | 0,13 |
| 25 | IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+199% · −20,9%** | +47% · −4,4% | +30% | −3,7% | 4,5 | 1,66 → 2,23 | +24% | 0,03 |
| 26 | IFR + Bollinger | **+124% · −16,6%** | +61% · −7,7% | +34% | −4,8% | 4,5 | 1,70 → 2,06 | +26% | 0,23 |
| 27 | ADX + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+344% · −38,7%** | +57% · −6,9% | +34% | −4,0% | 5,2 | 1,61 → 2,22 | +23% | 0,10 |
| 28 | ADX + IFR + Pullback + Bollinger + Tendência | **+384% · −45,8%** | +62% · −9,5% | +37% | −6,3% | 3,8 | 1,89 → 1,94 | +25% | 0,19 |
| 29 | Quinta + Bollinger ⚠️ | **+60% · −8,4%** | +35% · −2,8% | +21% | −1,5% | 5,8 | 1,82 → 1,77 | +18% | 0,01 |
| 30 | IFR + Quinta + Pullback + Tendência ⚠️ | **+197% · −27,5%** | +48% · −6,1% | +34% | −4,9% | 4,2 | 2,23 → 1,69 | +20% | 0,02 |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+10%* | *−20,9%* | — | — | — | — | — | — |

> [!example]- Combinações 31 a 60 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 31 | ADX + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+358% · −44,2%** | +61% · −8,8% | +38% | −6,1% | 4,2 | 1,71 → 1,95 | +28% | 0,09 |
> | 32 | ADX + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+258% · −34,2%** | +49% · −6,0% | +32% | −3,8% | 5,0 | 1,58 → 2,12 | +21% | −0,02 |
> | 33 | 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+166% · −31,1%** | +43% · −7,3% | +31% | −3,7% | 5,0 | 1,99 → 1,68 | +22% | −0,11 |
> | 34 | IFR + MACD + Pullback + Bollinger | **+212% · −25,7%** | +49% · −5,6% | +32% | −4,8% | 3,9 | 1,79 → 1,87 | +24% | 0,11 |
> | 35 | IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+300% · −35,2%** | +62% · −8,6% | +38% | −6,5% | 3,8 | 1,79 → 1,95 | +29% | 0,23 |
> | 36 | ADX + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+343% · −43,8%** | +58% · −8,4% | +35% | −5,5% | 4,0 | 1,72 → 1,94 | +26% | 0,12 |
> | 37 | IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+223% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 4,1 | 1,76 → 1,85 | +27% | 0,02 |
> | 38 | 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+203% · −27,0%** | +48% · −5,9% | +31% | −4,5% | 4,0 | 1,78 → 1,84 | +25% | 0,04 |
> | 39 | Quinta + Pullback + Bollinger + Tendência ⚠️ | **+177% · −24,6%** | +44% · −5,2% | +29% | −3,8% | 4,3 | 2,34 → 1,62 | +18% | 0,03 |
> | 40 | ADX + IFR + Quinta + Pullback + Tendência ⚠️ | **+294% · −44,1%** | +54% · −8,0% | +35% | −5,9% | 3,7 | 1,89 → 1,84 | +23% | 0,09 |
> | 41 | IFR + MACD + Quinta + Pullback ⚠️ | **+148% · −19,4%** | +40% · −4,4% | +29% | −3,6% | 4,6 | 1,77 → 1,74 | +22% | −0,02 |
> | 42 | IFR + Quinta + Bollinger + Tendência ⚠️ | **+235% · −32,8%** | +53% · −7,8% | +34% | −5,8% | 3,6 | 2,02 → 1,82 | +23% | 0,14 |
> | 43 | IFR + Quinta ⚠️ | **+76% · −11,3%** | +42% · −5,2% | +30% | −3,6% | 4,7 | 1,66 → 1,85 | +22% | −0,08 |
> | 44 | ADX + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+258% · −41,9%** | +50% · −7,0% | +33% | −4,7% | 4,2 | 1,69 → 1,84 | +25% | −0,01 |
> | 45 | 1ª vela 80 + Quinta + Pullback ⚠️ | **+81% · −18,6%** | +33% · −5,6% | +25% | −2,2% | 5,5 | 1,68 → 1,70 | +21% | −0,22 |
> | 46 | ADX + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+237% · −36,9%** | +46% · −6,5% | +28% | −3,5% | 4,4 | 1,52 → 2,09 | +20% | 0,03 |
> | 47 | ADX + IFR + Pullback + Tendência | **+275% · −45,9%** | +63% · −10,9% | +40% | −7,3% | 3,7 | 1,79 → 1,81 | +25% | 0,16 |
> | 48 | ADX + IFR + Quinta + Pullback ⚠️ | **+188% · −32,5%** | +49% · −7,8% | +31% | −5,1% | 3,6 | 1,69 → 1,96 | +19% | 0,03 |
> | 49 | ADX + IFR + 1ª vela 80 + Pullback ⚠️ | **+241% · −33,5%** | +57% · −7,7% | +36% | −4,8% | 4,8 | 1,47 → 2,08 | +22% | 0,02 |
> | 50 | IFR + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+214% · −22,5%** | +42% · −3,4% | +30% | −4,6% | 3,8 | 1,67 → 1,92 | +24% | −0,04 |
> | 51 | IFR + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+292% · −28,5%** | +49% · −4,9% | +32% | −5,6% | 3,4 | 1,71 → 2,01 | +25% | 0,10 |
> | 52 | IFR + 1ª vela 80 + Bollinger ⚠️ | **+185% · −20,8%** | +57% · −6,4% | +34% | −5,4% | 3,9 | 1,50 → 2,18 | +26% | 0,20 |
> | 53 | ADX + IFR + Quinta + Bollinger + Tendência ⚠️ | **+341% · −45,4%** | +58% · −9,3% | +35% | −6,2% | 3,6 | 1,69 → 1,94 | +26% | 0,21 |
> | 54 | MACD + Quinta + Pullback + Bollinger ⚠️ | **+130% · −16,2%** | +36% · −2,8% | +25% | −3,4% | 3,6 | 1,89 → 1,73 | +21% | 0,00 |
> | 55 | IFR + Pullback + Tendência | **+183% · −27,9%** | +59% · −8,7% | +39% | −7,2% | 3,7 | 2,11 → 1,64 | +21% | 0,10 |
> | 56 | IFR + 1ª vela 80 + Quinta ⚠️ | **+127% · −14,2%** | +45% · −4,3% | +31% | −3,8% | 4,8 | 1,43 → 2,05 | +24% | −0,11 |
> | 57 | ADX + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+278% · −44,5%** | +51% · −7,8% | +31% | −5,7% | 3,2 | 1,93 → 1,82 | +22% | 0,11 |
> | 58 | 1ª vela 80 + Pullback + Tendência ⚠️ | **+154% · −30,8%** | +52% · −10,2% | +36% | −5,5% | 4,2 | 1,87 → 1,62 | +23% | −0,09 |
> | 59 | ADX + IFR + MACD + Pullback + Bollinger | **+317% · −41,1%** | +55% · −7,7% | +33% | −5,2% | 4,0 | 1,52 → 1,98 | +22% | 0,16 |
> | 60 | IFR + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+309% · −37,6%** | +53% · −7,2% | +37% | −6,7% | 3,6 | 1,74 → 1,76 | +28% | 0,12 |

> [!example]- Combinações 61 a 90 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 61 | ADX + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+301% · −39,6%** | +53% · −7,2% | +32% | −3,8% | 4,9 | 1,32 → 2,20 | +22% | 0,12 |
> | 62 | MACD + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+291% · −35,0%** | +50% · −6,5% | +33% | −5,8% | 3,5 | 1,77 → 1,75 | +26% | 0,13 |
> | 63 | ADX + Pullback + Bollinger + Tendência | **+261% · −46,3%** | +59% · −11,3% | +35% | −6,7% | 3,3 | 1,81 → 1,78 | +23% | 0,18 |
> | 64 | ADX + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+412% · −48,2%** | +65% · −10,1% | +38% | −6,8% | 3,7 | 1,54 → 2,02 | +28% | 0,27 |
> | 65 | IFR + 1ª vela 80 + Tendência ⚠️ | **+208% · −29,7%** | +64% · −9,6% | +42% | −8,0% | 3,6 | 1,65 → 1,81 | +30% | 0,20 |
> | 66 | ADX + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+318% · −43,8%** | +57% · −8,7% | +36% | −6,0% | 3,9 | 1,51 → 1,95 | +27% | 0,10 |
> | 67 | IFR + Bollinger + Tendência | **+220% · −32,8%** | +66% · −11,0% | +39% | −8,3% | 3,2 | 1,89 → 1,78 | +25% | 0,33 |
> | 68 | ADX + IFR + MACD + Quinta + Pullback ⚠️ | **+237% · −36,6%** | +47% · −6,4% | +31% | −4,4% | 4,3 | 1,49 → 1,89 | +21% | 0,05 |
> | 69 | Pullback + Bollinger + Tendência | **+164% · −24,6%** | +53% · −7,5% | +33% | −5,8% | 3,6 | 2,19 → 1,56 | +19% | 0,09 |
> | 70 | ADX + IFR + Pullback | **+174% · −31,8%** | +59% · −10,0% | +36% | −6,2% | 3,8 | 1,54 → 1,91 | +20% | 0,06 |
> | 71 | IFR + MACD + Pullback + Bollinger + Tendência | **+327% · −40,4%** | +54% · −8,1% | +35% | −6,9% | 3,2 | 1,88 → 1,73 | +25% | 0,20 |
> | 72 | ADX + 1ª vela 80 + Pullback + Tendência ⚠️ | **+242% · −43,3%** | +58% · −10,0% | +37% | −6,4% | 3,8 | 1,59 → 1,80 | +27% | 0,04 |
> | 73 | ADX + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+222% · −36,2%** | +53% · −8,4% | +31% | −4,5% | 4,1 | 1,39 → 2,04 | +21% | 0,09 |
> | 74 | 1ª vela 80 + Bollinger + Tendência ⚠️ | **+189% · −27,0%** | +59% · −8,4% | +36% | −6,6% | 3,5 | 1,65 → 1,79 | +28% | 0,21 |
> | 75 | IFR + MACD + Pullback | **+137% · −19,9%** | +48% · −6,4% | +34% | −5,3% | 3,9 | 1,62 → 1,68 | +25% | 0,03 |
> | 76 | ADX + IFR + Quinta + Bollinger ⚠️ | **+224% · −35,2%** | +54% · −8,0% | +31% | −4,7% | 3,9 | 1,37 → 2,09 | +20% | 0,17 |
> | 77 | ADX + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+304% · −44,4%** | +54% · −8,6% | +33% | −5,4% | 3,7 | 1,49 → 1,95 | +26% | 0,12 |
> | 78 | MACD + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+215% · −31,7%** | +43% · −5,8% | +31% | −5,1% | 3,6 | 1,74 → 1,64 | +25% | −0,02 |
> | 79 | IFR + Quinta + Pullback + Bollinger + Onda ⚠️ | **+227% · −25,9%** | +43% · −4,2% | +29% | −4,1% | 3,9 | 1,42 → 1,94 | +23% | 0,01 |
> | 80 | IFR + Quinta + Tendência ⚠️ | **+156% · −27,0%** | +53% · −8,5% | +36% | −7,0% | 3,3 | 1,88 → 1,64 | +23% | 0,11 |
> | 81 | IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+200% · −22,4%** | +48% · −4,6% | +34% | −6,1% | 3,4 | 1,56 → 1,87 | +26% | 0,02 |
> | 82 | ADX + IFR + Bollinger + Tendência | **+321% · −45,4%** | +69% · −12,0% | +40% | −8,2% | 3,3 | 1,58 → 1,91 | +28% | 0,35 |
> | 83 | IFR + MACD + Quinta + Pullback + Tendência ⚠️ | **+245% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 3,4 | 1,87 → 1,63 | +23% | 0,08 |
> | 84 | ADX + IFR + 1ª vela 80 + Bollinger ⚠️ | **+282% · −39,0%** | +62% · −9,3% | +35% | −4,9% | 4,6 | 1,20 → 2,17 | +23% | 0,25 |
> | 85 | ADX + MACD + Quinta + Pullback + Bollinger ⚠️ | **+222% · −39,1%** | +44% · −7,1% | +28% | −4,3% | 3,5 | 1,51 → 1,90 | +19% | 0,08 |
> | 86 | ADX + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+295% · −40,1%** | +54% · −7,3% | +35% | −5,4% | 4,0 | 1,36 → 1,97 | +23% | 0,08 |
> | 87 | MACD + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+193% · −23,0%** | +39% · −3,6% | +27% | −4,8% | 2,9 | 1,71 → 1,93 | +23% | −0,01 |
> | 88 | MACD + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+228% · −32,6%** | +44% · −5,8% | +30% | −5,2% | 3,2 | 1,95 → 1,61 | +22% | 0,08 |
> | 89 | ADX + IFR + Quinta + Tendência ⚠️ | **+242% · −42,6%** | +59% · −10,2% | +37% | −7,2% | 3,4 | 1,57 → 1,81 | +26% | 0,18 |
> | 90 | ADX + IFR + 1ª vela 80 + Tendência ⚠️ | **+299% · −43,7%** | +68% · −11,3% | +41% | −8,0% | 3,6 | 1,42 → 1,92 | +30% | 0,23 |

> [!example]- Combinações 91 a 120 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 91 | 1ª vela 80 + Quinta + Tendência ⚠️ | **+130% · −25,2%** | +46% · −7,8% | +33% | −5,4% | 3,7 | 1,60 → 1,64 | +25% | −0,12 |
> | 92 | IFR + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+289% · −28,7%** | +50% · −4,8% | +32% | −5,0% | 3,9 | 1,29 → 2,04 | +26% | 0,08 |
> | 93 | ADX + Quinta + Pullback + Bollinger ⚠️ | **+170% · −32,4%** | +45% · −7,5% | +27% | −4,9% | 2,9 | 1,67 → 1,88 | +18% | 0,08 |
> | 94 | IFR + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+358% · −42,2%** | +58% · −8,6% | +37% | −7,4% | 3,2 | 1,56 → 1,83 | +30% | 0,30 |
> | 95 | Quinta + Bollinger + Tendência ⚠️ | **+139% · −24,1%** | +48% · −7,3% | +30% | −5,6% | 3,1 | 1,97 → 1,59 | +21% | 0,08 |
> | 96 | IFR | **+68% · −11,2%** | +68% · −11,2% | +43% | −7,5% | 4,1 | 1,40 → 1,76 | +28% | — |
> | 97 | ADX + IFR + Bollinger | **+209% · −34,5%** | +66% · −11,3% | +36% | −5,8% | 4,0 | 1,21 → 2,05 | +21% | 0,34 |
> | 98 | ADX + IFR + MACD + Pullback + Tendência | **+325% · −50,5%** | +59% · −10,0% | +38% | −8,0% | 3,1 | 1,60 → 1,76 | +27% | 0,19 |
> | 99 | ADX + IFR + MACD + Pullback | **+221% · −36,0%** | +55% · −8,3% | +35% | −5,9% | 3,8 | 1,38 → 1,85 | +22% | 0,10 |
> | 100 | ADX + IFR + 1ª vela 80 + Quinta ⚠️ | **+208% · −34,4%** | +53% · −7,7% | +33% | −4,4% | 4,6 | 1,15 → 2,07 | +21% | 0,04 |
> | 101 | IFR + 1ª vela 80 ⚠️ | **+116% · −14,1%** | +59% · −6,5% | +38% | −6,4% | 3,9 | 1,26 → 1,98 | +28% | 0,09 |
> | 102 | ADX + 1ª vela 80 + Quinta + Pullback ⚠️ | **+156% · −31,6%** | +44% · −6,8% | +29% | −4,1% | 3,8 | 1,33 → 1,88 | +19% | −0,07 |
> | 103 | IFR + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+272% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 3,3 | 1,53 → 1,75 | +29% | 0,12 |
> | 104 | ADX + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+279% · −42,6%** | +51% · −8,2% | +31% | −5,3% | 3,5 | 1,33 → 1,98 | +22% | 0,12 |
> | 105 | IFR + Pullback + Bollinger + Tendência + Onda | **+324% · −40,6%** | +55% · −8,0% | +35% | −7,0% | 3,2 | 1,54 → 1,78 | +29% | 0,16 |
> | 106 | IFR + MACD + Quinta + Bollinger + Tendência ⚠️ | **+288% · −40,0%** | +51% · −7,9% | +33% | −6,8% | 3,0 | 1,67 → 1,72 | +26% | 0,21 |
> | 107 | ADX + MACD + Pullback + Bollinger + Tendência | **+316% · −50,4%** | +56% · −9,5% | +34% | −7,2% | 3,0 | 1,62 → 1,75 | +26% | 0,20 |
> | 108 | ADX + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+285% · −43,8%** | +64% · −11,0% | +37% | −7,3% | 3,3 | 1,39 → 1,91 | +28% | 0,26 |
> | 109 | Quinta + Pullback + Tendência ⚠️ | **+109% · −23,8%** | +41% · −7,0% | +30% | −4,9% | 3,6 | 2,19 → 1,33 | +17% | −0,02 |
> | 110 | MACD + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+255% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,2 | 1,54 → 1,74 | +25% | 0,13 |
> | 111 | ADX + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+293% · −47,8%** | +55% · −8,7% | +36% | −6,9% | 3,3 | 1,47 → 1,77 | +27% | 0,10 |
> | 112 | IFR + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+302% · −37,8%** | +54% · −7,2% | +37% | −6,8% | 3,5 | 1,41 → 1,80 | +31% | 0,11 |
> | 113 | IFR + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+211% · −22,7%** | +42% · −4,2% | +30% | −4,3% | 4,1 | 1,24 → 1,92 | +24% | −0,06 |
> | 114 | MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+200% · −32,8%** | +49% · −8,0% | +35% | −6,8% | 3,2 | 1,64 → 1,60 | +27% | 0,07 |
> | 115 | 1ª vela 80 + Pullback ⚠️ | **+72% · −17,9%** | +41% · −8,7% | +29% | −4,3% | 3,9 | 1,49 → 1,59 | +24% | −0,31 |
> | 116 | ADX + MACD + Quinta + Pullback + Tendência ⚠️ | **+237% · −48,8%** | +48% · −9,4% | +33% | −6,3% | 3,1 | 1,61 → 1,66 | +24% | 0,08 |
> | 117 | IFR + MACD + Pullback + Tendência | **+229% · −35,3%** | +54% · −8,6% | +37% | −8,1% | 3,1 | 1,78 → 1,59 | +25% | 0,18 |
> | 118 | ADX + Quinta + Bollinger + Tendência ⚠️ | **+228% · −43,2%** | +55% · −9,9% | +33% | −6,8% | 2,9 | 1,57 → 1,80 | +25% | 0,19 |
> | 119 | ADX + IFR + MACD + Quinta + Bollinger ⚠️ | **+277% · −41,8%** | +51% · −8,0% | +31% | −5,1% | 3,6 | 1,23 → 1,97 | +21% | 0,19 |
> | 120 | IFR + Pullback + Bollinger + Onda | **+212% · −25,9%** | +50% · −5,6% | +32% | −5,4% | 3,5 | 1,31 → 1,90 | +25% | 0,09 |

> [!example]- Combinações 121 a 150 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 121 | IFR + Quinta + Pullback + Tendência + Onda ⚠️ | **+242% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 3,3 | 1,51 → 1,68 | +28% | 0,04 |
> | 122 | Bollinger | **+52% · −6,9%** | +52% · −6,9% | +26% | −3,6% | 3,5 | 1,37 → 1,78 | +18% | — |
> | 123 | ADX + Quinta + Pullback + Tendência ⚠️ | **+190% · −44,7%** | +50% · −10,8% | +33% | −7,1% | 2,8 | 1,80 → 1,64 | +21% | 0,06 |
> | 124 | ADX + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+340% · −45,1%** | +58% · −8,9% | +35% | −5,7% | 3,9 | 1,14 → 2,03 | +24% | 0,28 |
> | 125 | 1ª vela 80 + Quinta + Bollinger ⚠️ | **+107% · −15,1%** | +40% · −4,1% | +25% | −3,6% | 3,4 | 1,26 → 1,99 | +15% | −0,02 |
> | 126 | MACD + Pullback + Bollinger | **+119% · −16,1%** | +42% · −4,5% | +28% | −5,4% | 2,8 | 1,70 → 1,67 | +23% | 0,05 |
> | 127 | ADX + 1ª vela 80 + Quinta + Tendência ⚠️ | **+211% · −40,1%** | +54% · −9,5% | +34% | −6,3% | 3,4 | 1,35 → 1,81 | +26% | 0,03 |
> | 128 | ADX + Pullback + Bollinger | **+157% · −31,7%** | +54% · −9,9% | +30% | −5,8% | 3,0 | 1,49 → 1,83 | +19% | 0,14 |
> | 129 | IFR + Tendência | **+145% · −27,0%** | +72% · −13,5% | +46% | −11,3% | 3,0 | 1,74 → 1,59 | +26% | 0,47 |
> | 130 | ADX + IFR + Tendência | **+226% · −45,2%** | +73% · −14,8% | +44% | −10,1% | 3,1 | 1,46 → 1,78 | +30% | 0,37 |
> | 131 | ADX + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+205% · −38,3%** | +43% · −6,9% | +29% | −4,9% | 3,4 | 1,28 → 1,88 | +21% | −0,03 |
> | 132 | MACD + Pullback + Bollinger + Tendência | **+213% · −32,6%** | +50% · −7,9% | +33% | −7,0% | 2,9 | 1,83 → 1,56 | +23% | 0,17 |
> | 133 | IFR + MACD + Quinta + Bollinger ⚠️ | **+180% · −25,6%** | +45% · −5,5% | +29% | −5,5% | 3,0 | 1,43 → 1,85 | +23% | 0,14 |
> | 134 | IFR + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+253% · −29,5%** | +46% · −5,4% | +30% | −6,1% | 2,8 | 1,40 → 1,99 | +23% | 0,12 |
> | 135 | ADX + IFR + 1ª vela 80 ⚠️ | **+194% · −33,8%** | +65% · −10,7% | +39% | −6,0% | 4,3 | 1,03 → 2,02 | +23% | 0,19 |
> | 136 | 1ª vela 80 + Pullback + Bollinger + Tendência + Onda ⚠️ | **+286% · −35,2%** | +51% · −6,5% | +33% | −6,2% | 3,3 | 1,37 → 1,78 | +27% | 0,12 |
> | 137 | ADX + MACD + Pullback + Bollinger | **+207% · −38,5%** | +51% · −9,2% | +31% | −5,8% | 3,1 | 1,37 → 1,85 | +20% | 0,13 |
> | 138 | ADX + IFR + Pullback + Bollinger + Onda | **+311% · −39,6%** | +55% · −7,7% | +33% | −6,0% | 3,4 | 1,19 → 1,97 | +23% | 0,14 |
> | 139 | ADX + Pullback + Tendência | **+176% · −46,6%** | +61% · −16,1% | +38% | −8,8% | 2,9 | 1,68 → 1,60 | +23% | 0,11 |
> | 140 | ADX + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+257% · −41,0%** | +50% · −7,6% | +33% | −5,3% | 3,8 | 1,10 → 1,96 | +22% | 0,10 |
> | 141 | ADX + IFR + MACD + Bollinger + Tendência | **+375% · −51,2%** | +63% · −11,3% | +38% | −8,7% | 2,9 | 1,42 → 1,83 | +28% | 0,36 |
> | 142 | ADX + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+348% · −49,1%** | +62% · −10,5% | +39% | −8,5% | 3,1 | 1,31 → 1,84 | +29% | 0,28 |
> | 143 | IFR + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+355% · −42,3%** | +58% · −8,6% | +37% | −7,5% | 3,2 | 1,27 → 1,89 | +28% | 0,23 |
> | 144 | IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+255% · −37,2%** | +58% · −9,3% | +39% | −8,7% | 3,1 | 1,44 → 1,71 | +32% | 0,31 |
> | 145 | IFR + MACD + Bollinger + Tendência | **+270% · −40,0%** | +60% · −10,3% | +37% | −8,9% | 2,8 | 1,57 → 1,69 | +28% | 0,39 |
> | 146 | MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+180% · −23,8%** | +44% · −5,1% | +29% | −6,7% | 2,4 | 1,57 → 1,87 | +24% | 0,07 |
> | 147 | ADX + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+284% · −37,9%** | +54% · −7,2% | +35% | −5,7% | 3,9 | 1,07 → 1,96 | +24% | 0,08 |
> | 148 | ADX + Bollinger + Tendência | **+213% · −45,6%** | +68% · −15,3% | +38% | −8,7% | 2,9 | 1,43 → 1,75 | +27% | 0,36 |
> | 149 | ADX + IFR + Pullback + Tendência + Onda | **+315% · −49,0%** | +59% · −10,0% | +38% | −8,1% | 3,1 | 1,33 → 1,78 | +28% | 0,17 |
> | 150 | ADX + 1ª vela 80 + Pullback ⚠️ | **+144% · −30,9%** | +52% · −9,5% | +33% | −5,6% | 3,6 | 1,19 → 1,83 | +20% | −0,05 |

> [!example]- Combinações 151 a 180 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 151 | IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+197% · −22,8%** | +49% · −5,1% | +34% | −5,6% | 3,7 | 1,14 → 1,88 | +26% | 0,04 |
> | 152 | 1ª vela 80 + Tendência ⚠️ | **+120% · −24,9%** | +61% · −12,3% | +41% | −8,9% | 3,1 | 1,46 → 1,58 | +30% | 0,04 |
> | 153 | MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+122% · −17,1%** | +35% · −3,2% | +27% | −5,1% | 2,7 | 1,51 → 1,72 | +22% | −0,11 |
> | 154 | ADX + IFR + MACD + Quinta + Tendência ⚠️ | **+289% · −47,2%** | +55% · −9,8% | +36% | −7,9% | 2,9 | 1,40 → 1,76 | +26% | 0,21 |
> | 155 | IFR + Quinta + Pullback + Onda ⚠️ | **+147% · −22,7%** | +40% · −4,9% | +29% | −4,7% | 3,5 | 1,25 → 1,74 | +23% | −0,05 |
> | 156 | IFR + Quinta + Bollinger + Tendência + Onda ⚠️ | **+288% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 3,0 | 1,36 → 1,79 | +29% | 0,12 |
> | 157 | ADX + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+340% · −49,6%** | +59% · −10,3% | +36% | −7,6% | 3,0 | 1,29 → 1,84 | +27% | 0,29 |
> | 158 | 1ª vela 80 + Quinta + Pullback + Tendência + Onda ⚠️ | **+209% · −32,8%** | +43% · −6,0% | +31% | −5,6% | 3,3 | 1,33 → 1,66 | +27% | −0,03 |
> | 159 | MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+239% · −34,5%** | +54% · −8,4% | +35% | −7,6% | 2,9 | 1,43 → 1,70 | +26% | 0,31 |
> | 160 | ADX + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+190% · −37,3%** | +49% · −8,8% | +29% | −4,5% | 3,5 | 1,02 → 2,04 | +19% | 0,11 |
> | 161 | Quinta + Pullback + Bollinger + Tendência + Onda ⚠️ | **+225% · −32,9%** | +44% · −6,0% | +30% | −5,9% | 2,9 | 1,48 → 1,64 | +26% | 0,05 |
> | 162 | IFR + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+268% · −37,4%** | +50% · −7,1% | +35% | −6,7% | 3,3 | 1,23 → 1,80 | +28% | 0,05 |
> | 163 | ADX + IFR + Quinta + Pullback + Onda ⚠️ | **+230% · −34,5%** | +48% · −6,6% | +31% | −5,4% | 3,4 | 1,15 → 1,86 | +21% | 0,02 |
> | 164 | ADX + MACD + Quinta + Pullback ⚠️ | **+145% · −33,9%** | +42% · −7,6% | +28% | −5,0% | 3,1 | 1,33 → 1,71 | +19% | −0,01 |
> | 165 | IFR + Pullback + Tendência + Onda | **+226% · −35,5%** | +55% · −8,6% | +38% | −8,2% | 3,0 | 1,42 → 1,64 | +31% | 0,16 |
> | 166 | ADX + IFR + Quinta ⚠️ | **+148% · −29,7%** | +53% · −9,9% | +33% | −6,3% | 3,2 | 1,16 → 1,91 | +19% | 0,11 |
> | 167 | ADX + IFR + MACD + Bollinger | **+260% · −41,3%** | +60% · −10,3% | +35% | −6,8% | 3,3 | 1,12 → 1,93 | +23% | 0,33 |
> | 168 | IFR + MACD + Quinta + Tendência ⚠️ | **+199% · −34,8%** | +50% · −8,5% | +35% | −7,9% | 2,8 | 1,55 → 1,59 | +26% | 0,20 |
> | 169 | IFR + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+253% · −29,0%** | +46% · −4,9% | +30% | −5,4% | 3,2 | 1,04 → 2,04 | +20% | 0,04 |
> | 170 | IFR + MACD + Pullback + Bollinger + Onda | **+265% · −33,7%** | +48% · −6,2% | +32% | −5,9% | 3,2 | 1,20 → 1,82 | +25% | 0,15 |
> | 171 | ADX + MACD + Pullback + Tendência | **+222% · −50,7%** | +56% · −12,9% | +37% | −8,4% | 2,8 | 1,51 → 1,62 | +26% | 0,15 |
> | 172 | MACD + Quinta + Pullback + Tendência ⚠️ | **+150% · −31,4%** | +41% · −7,6% | +31% | −6,1% | 3,0 | 1,81 → 1,42 | +21% | 0,03 |
> | 173 | Pullback + Tendência | **+99% · −25,6%** | +53% · −12,0% | +37% | −7,6% | 3,2 | 2,03 → 1,26 | +16% | 0,01 |
> | 174 | Bollinger + Tendência | **+128% · −24,0%** | +64% · −11,8% | +37% | −9,2% | 2,6 | 1,79 → 1,53 | +23% | 0,31 |
> | 175 | ADX + MACD + Quinta + Bollinger + Tendência ⚠️ | **+280% · −47,7%** | +52% · −9,3% | +32% | −7,0% | 2,8 | 1,40 → 1,75 | +25% | 0,21 |
> | 176 | ADX + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+259% · −45,8%** | +51% · −9,0% | +34% | −6,9% | 3,1 | 1,26 → 1,77 | +26% | 0,11 |
> | 177 | MACD + Quinta + Pullback ⚠️ | **+72% · −14,9%** | +31% · −4,6% | +25% | −3,9% | 3,1 | 1,65 → 1,41 | +20% | −0,10 |
> | 178 | ADX + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+333% · −42,7%** | +58% · −8,3% | +35% | −5,8% | 3,8 | 0,89 → 2,05 | +23% | 0,22 |
> | 179 | ADX + MACD + 1ª vela 80 + Pullback ⚠️ | **+191% · −37,7%** | +50% · −8,9% | +33% | −6,3% | 3,2 | 1,17 → 1,83 | +22% | 0,02 |
> | 180 | ADX + IFR + MACD + 1ª vela 80 ⚠️ | **+241% · −40,4%** | +59% · −9,8% | +37% | −6,7% | 3,6 | 1,00 → 1,92 | +24% | 0,24 |

> [!example]- Combinações 181 a 210 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 181 | IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+237% · −29,5%** | +53% · −7,0% | +33% | −8,0% | 2,6 | 1,28 → 1,95 | +24% | 0,28 |
> | 182 | ADX + 1ª vela 80 + Tendência ⚠️ | **+197% · −42,0%** | +66% · −13,6% | +40% | −9,0% | 3,1 | 1,24 → 1,77 | +30% | 0,17 |
> | 183 | IFR + Quinta + Bollinger + Onda ⚠️ | **+182% · −26,2%** | +45% · −5,7% | +29% | −4,8% | 3,5 | 1,02 → 1,92 | +23% | 0,02 |
> | 184 | MACD + Quinta + Bollinger + Tendência ⚠️ | **+184% · −32,1%** | +46% · −7,6% | +31% | −6,9% | 2,6 | 1,58 → 1,56 | +25% | 0,18 |
> | 185 | MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+173% · −29,5%** | +45% · −7,0% | +32% | −6,7% | 2,9 | 1,40 → 1,60 | +26% | 0,06 |
> | 186 | 1ª vela 80 + Quinta + Bollinger + Tendência + Onda ⚠️ | **+252% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 3,1 | 1,17 → 1,79 | +21% | 0,06 |
> | 187 | ADX + IFR + MACD + Quinta ⚠️ | **+190% · −36,9%** | +50% · −8,7% | +33% | −6,0% | 3,3 | 1,07 → 1,84 | +21% | 0,14 |
> | 188 | ADX + IFR + Quinta + Bollinger + Onda ⚠️ | **+274% · −39,2%** | +52% · −7,5% | +31% | −5,5% | 3,4 | 0,96 → 1,98 | +22% | 0,11 |
> | 189 | IFR + MACD + Quinta + Pullback + Onda ⚠️ | **+192% · −28,1%** | +41% · −4,8% | +30% | −5,1% | 3,3 | 1,16 → 1,71 | +24% | 0,02 |
> | 190 | ADX + IFR + Bollinger + Tendência + Onda | **+368% · −51,6%** | +64% · −11,3% | +38% | −8,8% | 2,9 | 1,19 → 1,86 | +28% | 0,28 |
> | 191 | ADX + Pullback + Bollinger + Tendência + Onda | **+307% · −47,8%** | +56% · −9,4% | +34% | −7,8% | 2,8 | 1,30 → 1,76 | +27% | 0,18 |
> | 192 | ADX + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+281% · −46,0%** | +55% · −8,9% | +36% | −7,5% | 3,1 | 1,18 → 1,76 | +28% | 0,10 |
> | 193 | ADX + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+337% · −49,4%** | +63% · −10,5% | +39% | −8,6% | 3,1 | 1,09 → 1,87 | +29% | 0,22 |
> | 194 | ADX + IFR + MACD + Tendência | **+271% · −49,8%** | +65% · −12,7% | +41% | −10,3% | 2,7 | 1,31 → 1,72 | +29% | 0,38 |
> | 195 | IFR + MACD + Bollinger | **+167% · −25,4%** | +54% · −7,9% | +34% | −7,8% | 2,7 | 1,28 → 1,80 | +26% | 0,35 |
> | 196 | ADX + IFR | **+136% · −29,5%** | +71% · −14,3% | +41% | −8,5% | 3,3 | 1,00 → 1,86 | +20% | 0,33 |
> | 197 | ADX + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+242% · −43,4%** | +47% · −8,5% | +29% | −5,5% | 3,0 | 1,02 → 1,97 | +20% | 0,13 |
> | 198 | IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+170% · −23,5%** | +44% · −5,2% | +31% | −6,8% | 2,7 | 1,23 → 1,85 | +24% | 0,04 |
> | 199 | ADX + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+250% · −37,5%** | +51% · −7,7% | +33% | −5,2% | 3,9 | 0,85 → 1,96 | +23% | 0,04 |
> | 200 | IFR + Bollinger + Tendência + Onda | **+270% · −40,1%** | +60% · −10,3% | +38% | −9,0% | 2,7 | 1,27 → 1,76 | +32% | 0,28 |
> | 201 | ADX + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+270% · −39,0%** | +51% · −7,6% | +31% | −5,7% | 3,2 | 0,98 → 1,94 | +22% | 0,12 |
> | 202 | ADX + IFR + Pullback + Onda | **+215% · −34,5%** | +55% · −8,6% | +35% | −7,1% | 3,2 | 1,06 → 1,83 | +22% | 0,10 |
> | 203 | Pullback + Bollinger + Tendência + Onda | **+210% · −32,8%** | +51% · −7,7% | +33% | −7,6% | 2,7 | 1,38 → 1,60 | +29% | 0,15 |
> | 204 | 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+195% · −32,4%** | +50% · −7,6% | +35% | −7,2% | 3,1 | 1,24 → 1,62 | +29% | 0,08 |
> | 205 | IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+251% · −37,3%** | +59% · −9,3% | +39% | −8,8% | 3,0 | 1,15 → 1,77 | +30% | 0,23 |
> | 206 | ADX + IFR + Quinta + Tendência + Onda ⚠️ | **+281% · −47,4%** | +56% · −9,9% | +36% | −8,0% | 2,9 | 1,16 → 1,78 | +27% | 0,13 |
> | 207 | IFR + MACD + Tendência | **+185% · −34,8%** | +61% · −11,8% | +41% | −11,1% | 2,6 | 1,44 → 1,55 | +30% | 0,48 |
> | 208 | 1ª vela 80 + Quinta + Pullback + Bollinger + Onda ⚠️ | **+191% · −23,0%** | +39% · −3,9% | +27% | −5,0% | 2,8 | 1,14 → 1,89 | +19% | −0,02 |
> | 209 | IFR + MACD + Pullback + Tendência + Onda | **+272% · −42,4%** | +52% · −8,6% | +36% | −8,7% | 2,7 | 1,32 → 1,62 | +30% | 0,21 |
> | 210 | ADX + MACD + Bollinger + Tendência | **+262% · −49,9%** | +61% · −12,3% | +36% | −9,2% | 2,6 | 1,29 → 1,72 | +28% | 0,36 |

> [!example]- Combinações 211 a 240 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 211 | ADX + Quinta + Tendência ⚠️ | **+152% · −43,4%** | +55% · −14,5% | +35% | −8,9% | 2,5 | 1,40 → 1,62 | +25% | 0,12 |
> | 212 | IFR + Pullback + Onda | **+136% · −23,4%** | +48% · −7,3% | +34% | −6,6% | 3,1 | 1,13 → 1,69 | +26% | 0,06 |
> | 213 | IFR + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+246% · −30,7%** | +47% · −5,3% | +33% | −7,0% | 2,9 | 1,09 → 1,81 | +26% | 0,11 |
> | 214 | IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+237% · −28,2%** | +54% · −6,4% | +34% | −7,0% | 3,0 | 0,93 → 2,00 | +21% | 0,20 |
> | 215 | ADX + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+330% · −47,9%** | +59% · −10,0% | +36% | −7,8% | 3,0 | 1,03 → 1,86 | +24% | 0,24 |
> | 216 | ADX + IFR + MACD + Pullback + Onda | **+262% · −41,4%** | +52% · −8,1% | +35% | −7,0% | 3,1 | 1,02 → 1,80 | +23% | 0,13 |
> | 217 | IFR + MACD + Quinta ⚠️ | **+113% · −19,2%** | +42% · −5,8% | +30% | −6,2% | 2,9 | 1,22 → 1,66 | +23% | 0,08 |
> | 218 | ADX + MACD + 1ª vela 80 + Tendência ⚠️ | **+242% · −46,9%** | +60% · −11,5% | +38% | −9,0% | 2,8 | 1,17 → 1,73 | +29% | 0,25 |
> | 219 | MACD + Pullback + Tendência | **+138% · −32,6%** | +49% · −11,0% | +35% | −8,7% | 2,6 | 1,69 → 1,37 | +23% | 0,13 |
> | 220 | ADX + Quinta + Pullback + Tendência + Onda ⚠️ | **+229% · −46,5%** | +48% · −8,3% | +33% | −7,2% | 2,7 | 1,26 → 1,65 | +25% | 0,05 |
> | 221 | ADX + Quinta + Pullback + Bollinger + Onda ⚠️ | **+216% · −35,3%** | +44% · −6,9% | +28% | −5,3% | 2,9 | 1,07 → 1,83 | +20% | 0,05 |
> | 222 | ADX + 1ª vela 80 + Bollinger ⚠️ | **+176% · −36,7%** | +59% · −12,1% | +33% | −6,4% | 3,1 | 0,86 → 1,99 | +19% | 0,29 |
> | 223 | ADX + Quinta + Pullback ⚠️ | **+103% · −30,6%** | +41% · −9,7% | +27% | −6,4% | 2,2 | 1,43 → 1,57 | +16% | 0,03 |
> | 224 | IFR + Quinta + Tendência + Onda ⚠️ | **+198% · −35,0%** | +50% · −8,5% | +35% | −8,1% | 2,8 | 1,23 → 1,66 | +30% | 0,08 |
> | 225 | ADX + IFR + 1ª vela 80 + Onda ⚠️ | **+234% · −39,3%** | +59% · −9,7% | +37% | −6,8% | 3,6 | 0,76 → 1,93 | +24% | 0,18 |
> | 226 | MACD + Bollinger + Tendência | **+170% · −32,1%** | +56% · −10,7% | +35% | −9,7% | 2,3 | 1,45 → 1,52 | +27% | 0,41 |
> | 227 | Quinta + Tendência ⚠️ | **+80% · −21,7%** | +45% · −9,8% | +32% | −7,4% | 2,7 | 1,77 → 1,29 | +19% | −0,07 |
> | 228 | MACD + 1ª vela 80 + Pullback ⚠️ | **+111% · −17,3%** | +41% · −4,9% | +30% | −7,9% | 2,2 | 1,36 → 1,65 | +25% | −0,07 |
> | 229 | MACD + Pullback + Bollinger + Tendência + Onda | **+261% · −40,0%** | +49% · −7,8% | +33% | −7,8% | 2,6 | 1,29 → 1,61 | +29% | 0,20 |
> | 230 | ADX + IFR + Bollinger + Onda | **+256% · −39,2%** | +61% · −9,8% | +35% | −7,2% | 3,1 | 0,85 → 1,95 | +23% | 0,24 |
> | 231 | ADX + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+196% · −34,6%** | +44% · −6,5% | +29% | −5,2% | 3,2 | 0,93 → 1,82 | +21% | −0,03 |
> | 232 | ADX + MACD + Quinta + Tendência ⚠️ | **+193% · −47,8%** | +52% · −11,8% | +34% | −8,2% | 2,6 | 1,27 → 1,62 | +26% | 0,16 |
> | 233 | 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+236% · −34,7%** | +55% · −8,4% | +35% | −7,8% | 2,8 | 1,08 → 1,76 | +22% | 0,23 |
> | 234 | ADX + MACD + Pullback | **+133% · −36,3%** | +50% · −10,9% | +32% | −7,1% | 2,8 | 1,18 → 1,65 | +20% | 0,00 |
> | 235 | MACD + 1ª vela 80 + Tendência ⚠️ | **+160% · −30,7%** | +55% · −10,3% | +38% | −9,4% | 2,6 | 1,28 → 1,55 | +29% | 0,29 |
> | 236 | MACD + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+242% · −37,2%** | +48% · −7,1% | +34% | −7,7% | 2,8 | 1,19 → 1,62 | +27% | 0,14 |
> | 237 | ADX + Quinta + Bollinger + Tendência + Onda ⚠️ | **+273% · −45,0%** | +53% · −9,1% | +33% | −7,3% | 2,7 | 1,10 → 1,77 | +26% | 0,13 |
> | 238 | ADX + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+250% · −43,5%** | +52% · −8,6% | +34% | −7,0% | 3,0 | 0,99 → 1,78 | +24% | 0,05 |
> | 239 | IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+169% · −23,3%** | +44% · −5,2% | +31% | −5,9% | 3,1 | 0,87 → 1,89 | +21% | −0,04 |
> | 240 | Quinta + Pullback + Tendência + Onda ⚠️ | **+147% · −27,2%** | +41% · −6,4% | +31% | −6,9% | 2,6 | 1,34 → 1,45 | +25% | 0,00 |

> [!example]- Combinações 241 a 270 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 241 | IFR + MACD + Pullback + Onda | **+178% · −28,1%** | +46% · −6,3% | +33% | −6,8% | 3,0 | 1,06 → 1,67 | +26% | 0,12 |
> | 242 | IFR + Bollinger + Onda | **+169% · −25,4%** | +55% · −7,9% | +34% | −6,8% | 3,1 | 0,89 → 1,87 | +24% | 0,20 |
> | 243 | ADX + IFR + MACD | **+177% · −36,2%** | +62% · −12,0% | +38% | −8,4% | 3,0 | 0,95 → 1,79 | +22% | 0,31 |
> | 244 | ADX + IFR + Tendência + Onda | **+264% · −48,2%** | +66% · −12,7% | +41% | −10,4% | 2,7 | 1,08 → 1,76 | +30% | 0,28 |
> | 245 | IFR + MACD + Bollinger + Tendência + Onda | **+320% · −46,5%** | +56% · −9,9% | +36% | −9,3% | 2,5 | 1,17 → 1,71 | +30% | 0,34 |
> | 246 | IFR + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+297% · −44,0%** | +55% · −9,1% | +38% | −9,2% | 2,7 | 1,09 → 1,72 | +28% | 0,29 |
> | 247 | ADX + Tendência | **+140% · −45,8%** | +74% · −24,1% | +44% | −12,3% | 2,5 | 1,26 → 1,57 | +29% | 0,32 |
> | 248 | MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+151% · −24,9%** | +40% · −5,5% | +27% | −7,0% | 2,0 | 1,16 → 1,85 | +17% | 0,08 |
> | 249 | ADX + MACD + 1ª vela 80 + Bollinger ⚠️ | **+227% · −42,8%** | +55% · −10,9% | +32% | −7,1% | 2,8 | 0,90 → 1,93 | +20% | 0,28 |
> | 250 | IFR + MACD + 1ª vela 80 ⚠️ | **+157% · −23,5%** | +53% · −7,3% | +36% | −9,4% | 2,5 | 1,10 → 1,80 | +26% | 0,27 |
> | 251 | Quinta + Pullback ⚠️ | **+39% · −9,3%** | +26% · −4,2% | +21% | −2,7% | 3,1 | 2,18 → 0,85 | +14% | −0,02 |
> | 252 | Quinta + Pullback + Bollinger + Onda ⚠️ | **+130% · −20,0%** | +37% · −4,4% | +25% | −4,6% | 2,7 | 1,15 → 1,66 | +22% | −0,02 |
> | 253 | 1ª vela 80 + Bollinger ⚠️ | **+97% · −16,3%** | +51% · −7,5% | +29% | −7,1% | 2,3 | 1,03 → 1,91 | +14% | 0,28 |
> | 254 | ADX + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+237% · −41,0%** | +48% · −7,6% | +29% | −5,4% | 3,1 | 0,73 → 1,95 | +17% | 0,07 |
> | 255 | ADX + Pullback + Tendência + Onda | **+213% · −49,2%** | +56% · −11,6% | +37% | −9,3% | 2,6 | 1,18 → 1,62 | +27% | 0,15 |
> | 256 | MACD + Quinta + Pullback + Tendência + Onda ⚠️ | **+190% · −35,0%** | +42% · −6,4% | +31% | −7,1% | 2,5 | 1,26 → 1,50 | +28% | 0,06 |
> | 257 | ADX + MACD + Quinta + Bollinger ⚠️ | **+177% · −39,3%** | +47% · −9,6% | +28% | −6,1% | 2,6 | 0,99 → 1,84 | +19% | 0,16 |
> | 258 | 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+169% · −29,2%** | +45% · −6,6% | +33% | −6,9% | 2,9 | 1,03 → 1,64 | +22% | −0,03 |
> | 259 | IFR + MACD + Quinta + Bollinger + Onda ⚠️ | **+231% · −33,5%** | +45% · −6,1% | +30% | −6,3% | 2,7 | 0,96 → 1,82 | +23% | 0,11 |
> | 260 | ADX + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+280% · −43,3%** | +56% · −8,7% | +36% | −7,5% | 3,1 | 0,77 → 1,88 | +23% | 0,23 |
> | 261 | Quinta + Bollinger + Tendência + Onda ⚠️ | **+183% · −32,3%** | +47% · −7,6% | +31% | −7,0% | 2,5 | 1,17 → 1,62 | +24% | 0,06 |
> | 262 | ADX + IFR + MACD + Bollinger + Onda | **+307% · −45,6%** | +57% · −9,5% | +34% | −7,7% | 2,8 | 0,85 → 1,89 | +24% | 0,27 |
> | 263 | ADX + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+230% · −40,5%** | +48% · −7,4% | +32% | −6,5% | 3,0 | 0,86 → 1,79 | +23% | 0,09 |
> | 264 | ADX + IFR + Quinta + Onda ⚠️ | **+187% · −34,0%** | +51% · −8,6% | +33% | −6,5% | 3,1 | 0,80 → 1,84 | +21% | 0,04 |
> | 265 | MACD + Quinta + Tendência ⚠️ | **+116% · −29,2%** | +44% · −9,7% | +32% | −8,5% | 2,3 | 1,42 → 1,37 | +25% | 0,12 |
> | 266 | MACD + Quinta + Pullback + Bollinger + Onda ⚠️ | **+176% · −25,3%** | +38% · −4,6% | +27% | −5,5% | 2,5 | 1,10 → 1,70 | +22% | 0,03 |
> | 267 | MACD + Pullback | **+64% · −15,6%** | +37% · −7,6% | +29% | −6,7% | 2,4 | 1,44 → 1,31 | +23% | −0,18 |
> | 268 | ADX + MACD + Pullback + Bollinger + Onda | **+253% · −41,3%** | +49% · −7,8% | +31% | −6,8% | 2,7 | 0,95 → 1,80 | +22% | 0,15 |
> | 269 | ADX + Quinta + Bollinger ⚠️ | **+131% · −32,8%** | +48% · −10,4% | +27% | −5,9% | 2,4 | 1,01 → 1,83 | +17% | 0,18 |
> | 270 | MACD + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+287% · −41,6%** | +52% · −8,4% | +34% | −8,3% | 2,6 | 1,04 → 1,71 | +22% | 0,29 |

> [!example]- Combinações 271 a 300 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 271 | ADX + MACD + Pullback + Tendência + Onda | **+258% · −53,5%** | +53% · −9,9% | +36% | −8,9% | 2,6 | 1,13 → 1,63 | +27% | 0,17 |
> | 272 | 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+177% · −23,7%** | +45% · −5,4% | +29% | −6,9% | 2,4 | 1,03 → 1,84 | +20% | 0,08 |
> | 273 | IFR + MACD + Quinta + Tendência + Onda ⚠️ | **+241% · −42,0%** | +49% · −8,5% | +34% | −8,6% | 2,5 | 1,14 → 1,63 | +29% | 0,16 |
> | 274 | IFR + Tendência + Onda | **+184% · −34,9%** | +62% · −11,8% | +41% | −11,3% | 2,5 | 1,14 → 1,62 | +35% | 0,33 |
> | 275 | ADX + 1ª vela 80 + Quinta ⚠️ | **+120% · −31,8%** | +47% · −10,0% | +30% | −5,5% | 3,0 | 0,78 → 1,82 | +19% | −0,03 |
> | 276 | ADX + IFR + MACD + Tendência + Onda | **+306% · −53,1%** | +61% · −11,8% | +39% | −10,4% | 2,5 | 1,03 → 1,73 | +29% | 0,32 |
> | 277 | MACD + Quinta + Bollinger ⚠️ | **+97% · −16,7%** | +37% · −4,6% | +25% | −5,9% | 2,0 | 1,18 → 1,65 | +19% | 0,09 |
> | 278 | ADX + Pullback + Bollinger + Onda | **+201% · −35,1%** | +51% · −8,9% | +31% | −6,9% | 2,6 | 0,96 → 1,79 | +21% | 0,13 |
> | 279 | ADX + Bollinger + Tendência + Onda | **+256% · −47,0%** | +62% · −11,8% | +36% | −9,4% | 2,5 | 1,01 → 1,74 | +28% | 0,27 |
> | 280 | IFR + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+290% · −35,8%** | +51% · −6,8% | +33% | −8,3% | 2,5 | 0,91 → 1,90 | +21% | 0,26 |
> | 281 | ADX + 1ª vela 80 + Tendência + Onda ⚠️ | **+233% · −45,1%** | +60% · −11,1% | +38% | −9,1% | 2,8 | 0,91 → 1,74 | +25% | 0,19 |
> | 282 | ADX + MACD + Tendência | **+180% · −50,0%** | +63% · −17,5% | +40% | −11,5% | 2,4 | 1,16 → 1,58 | +29% | 0,35 |
> | 283 | ADX + 1ª vela 80 + Pullback + Onda ⚠️ | **+183% · −35,1%** | +50% · −8,4% | +33% | −6,7% | 2,9 | 0,83 → 1,78 | +22% | 0,05 |
> | 284 | ADX + Pullback | **+94% · −31,2%** | +53% · −14,8% | +32% | −8,7% | 2,2 | 1,24 → 1,50 | +16% | 0,01 |
> | 285 | IFR + Quinta + Onda ⚠️ | **+114% · −22,0%** | +43% · −6,7% | +31% | −5,8% | 3,0 | 0,82 → 1,71 | +24% | −0,09 |
> | 286 | ADX + IFR + MACD + Quinta + Onda ⚠️ | **+230% · −41,0%** | +49% · −8,0% | +33% | −6,9% | 2,9 | 0,80 → 1,80 | +22% | 0,10 |
> | 287 | Pullback + Tendência + Onda | **+136% · −27,1%** | +49% · −8,8% | +35% | −9,6% | 2,4 | 1,24 → 1,40 | +26% | 0,16 |
> | 288 | MACD + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+229% · −30,3%** | +44% · −5,6% | +30% | −7,8% | 2,2 | 1,02 → 1,81 | +20% | 0,13 |
> | 289 | ADX + MACD + 1ª vela 80 + Quinta ⚠️ | **+162% · −38,5%** | +46% · −9,3% | +30% | −6,4% | 2,7 | 0,84 → 1,82 | +20% | 0,04 |
> | 290 | MACD + Quinta + Bollinger + Tendência + Onda ⚠️ | **+230% · −39,5%** | +46% · −7,8% | +31% | −7,8% | 2,3 | 1,09 → 1,61 | +24% | 0,15 |
> | 291 | IFR + MACD | **+103% · −19,0%** | +54% · −9,0% | +37% | −9,9% | 2,5 | 1,05 → 1,59 | +27% | 0,43 |
> | 292 | IFR + 1ª vela 80 + Onda ⚠️ | **+156% · −23,2%** | +54% · −7,3% | +36% | −8,3% | 2,8 | 0,76 → 1,84 | +21% | 0,18 |
> | 293 | MACD + Pullback + Tendência + Onda | **+176% · −34,9%** | +47% · −8,4% | +34% | −9,3% | 2,3 | 1,17 → 1,46 | +30% | 0,20 |
> | 294 | MACD + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+213% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,6 | 1,00 → 1,63 | +22% | 0,09 |
> | 295 | ADX + MACD + Bollinger + Tendência + Onda | **+304% · −51,4%** | +58% · −11,1% | +36% | −9,6% | 2,4 | 0,98 → 1,72 | +26% | 0,30 |
> | 296 | ADX + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+277% · −49,9%** | +57% · −10,3% | +37% | −9,4% | 2,6 | 0,90 → 1,73 | +24% | 0,25 |
> | 297 | ADX + MACD + Quinta + Pullback + Onda ⚠️ | **+183% · −36,9%** | +42% · −6,8% | +29% | −6,2% | 2,6 | 0,91 → 1,69 | +21% | 0,01 |
> | 298 | IFR + MACD + Tendência + Onda | **+225% · −41,9%** | +56% · −11,0% | +39% | −11,1% | 2,3 | 1,06 → 1,60 | +33% | 0,38 |
> | 299 | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% | −16,1% | 2,2 | 1,58 → 1,20 | +22% | — |
> | 300 | MACD + Tendência | **+106% · −30,3%** | +57% · −15,6% | +40% | −13,4% | 2,0 | 1,28 → 1,31 | +29% | 0,55 |

> [!example]- Combinações 301 a 330 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 301 | ADX + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+272% · −45,2%** | +53% · −8,9% | +32% | −7,1% | 2,8 | 0,67 → 1,88 | +17% | 0,25 |
> | 302 | MACD + 1ª vela 80 + Bollinger ⚠️ | **+140% · −25,7%** | +48% · −8,2% | +30% | −10,3% | 1,7 | 0,99 → 1,79 | +16% | 0,31 |
> | 303 | ADX + 1ª vela 80 + Bollinger + Onda ⚠️ | **+221% · −42,6%** | +55% · −10,6% | +33% | −7,0% | 2,8 | 0,62 → 1,91 | +16% | 0,23 |
> | 304 | IFR + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+214% · −30,5%** | +44% · −5,4% | +31% | −7,5% | 2,5 | 0,86 → 1,81 | +21% | 0,07 |
> | 305 | ADX + IFR + Onda | **+173% · −34,0%** | +62% · −11,5% | +38% | −9,0% | 2,8 | 0,70 → 1,80 | +23% | 0,20 |
> | 306 | Bollinger + Tendência + Onda | **+170% · −32,2%** | +57% · −10,6% | +35% | −9,9% | 2,3 | 1,05 → 1,58 | +26% | 0,27 |
> | 307 | IFR + MACD + Bollinger + Onda | **+215% · −33,3%** | +52% · −8,0% | +33% | −8,2% | 2,5 | 0,86 → 1,78 | +24% | 0,29 |
> | 308 | ADX + Quinta + Tendência + Onda ⚠️ | **+188% · −45,7%** | +52% · −10,4% | +34% | −8,7% | 2,5 | 0,97 → 1,63 | +26% | 0,06 |
> | 309 | 1ª vela 80 + Tendência + Onda ⚠️ | **+157% · −29,1%** | +55% · −9,4% | +38% | −9,7% | 2,6 | 0,93 → 1,60 | +23% | 0,21 |
> | 310 | ADX + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+200% · −41,2%** | +45% · −7,7% | +31% | −6,2% | 2,8 | 0,62 → 1,79 | +17% | 0,05 |
> | 311 | 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+119% · −21,7%** | +36% · −4,8% | +27% | −5,8% | 2,4 | 0,96 → 1,65 | +20% | −0,10 |
> | 312 | Pullback + Bollinger + Onda | **+119% · −20,0%** | +43% · −6,2% | +28% | −6,4% | 2,3 | 1,00 → 1,60 | +23% | 0,09 |
> | 313 | MACD + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+162% · −25,5%** | +37% · −4,3% | +28% | −6,8% | 2,2 | 0,96 → 1,69 | +20% | −0,03 |
> | 314 | ADX + MACD + Quinta + Tendência + Onda ⚠️ | **+229% · −50,1%** | +50% · −9,7% | +34% | −8,9% | 2,4 | 0,95 → 1,64 | +26% | 0,13 |
> | 315 | ADX + Quinta + Pullback + Onda ⚠️ | **+140% · −31,1%** | +42% · −7,7% | +28% | −6,2% | 2,5 | 0,90 → 1,62 | +19% | −0,01 |
> | 316 | ADX + IFR + MACD + Onda | **+215% · −40,9%** | +57% · −10,4% | +37% | −9,0% | 2,6 | 0,72 → 1,77 | +24% | 0,25 |
> | 317 | ADX + MACD + Quinta + Bollinger + Onda ⚠️ | **+221% · −42,0%** | +46% · −8,0% | +29% | −6,3% | 2,6 | 0,70 → 1,81 | +19% | 0,11 |
> | 318 | ADX + MACD + Bollinger | **+164% · −38,7%** | +57% · −13,1% | +32% | −8,5% | 2,3 | 0,83 → 1,80 | +21% | 0,33 |
> | 319 | MACD + Pullback + Bollinger + Onda | **+163% · −25,3%** | +43% · −6,0% | +29% | −7,6% | 2,1 | 0,98 → 1,66 | +23% | 0,13 |
> | 320 | ADX + Bollinger | **+120% · −32,1%** | +63% · −16,1% | +32% | −7,9% | 2,5 | 0,79 → 1,77 | +18% | 0,45 |
> | 321 | MACD + Bollinger + Tendência + Onda | **+215% · −39,5%** | +53% · −10,1% | +34% | −10,1% | 2,2 | 1,00 → 1,58 | +25% | 0,34 |
> | 322 | ADX + 1ª vela 80 + Quinta + Onda ⚠️ | **+157% · −39,0%** | +46% · −9,2% | +30% | −6,2% | 2,8 | 0,56 → 1,79 | +16% | −0,03 |
> | 323 | MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+199% · −36,7%** | +52% · −9,1% | +36% | −9,9% | 2,4 | 0,91 → 1,59 | +23% | 0,29 |
> | 324 | IFR + MACD + Quinta + Onda ⚠️ | **+152% · −27,8%** | +42% · −6,2% | +31% | −7,2% | 2,5 | 0,80 → 1,67 | +24% | 0,06 |
> | 325 | Pullback | **+32% · −9,1%** | +32% · −9,1% | +26% | −4,6% | 2,8 | 1,87 → 0,62 | +11% | — |
> | 326 | ADX + MACD + 1ª vela 80 ⚠️ | **+150% · −37,9%** | +55% · −12,7% | +35% | −8,9% | 2,4 | 0,71 → 1,78 | +20% | 0,20 |
> | 327 | Quinta + Tendência + Onda ⚠️ | **+115% · −26,6%** | +44% · −8,3% | +32% | −8,8% | 2,2 | 1,00 → 1,43 | +26% | −0,04 |
> | 328 | IFR + Onda | **+103% · −22,7%** | +55% · −11,1% | +37% | −9,2% | 2,6 | 0,68 → 1,65 | +27% | 0,19 |
> | 329 | IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+200% · −30,3%** | +50% · −7,0% | +35% | −9,6% | 2,3 | 0,77 → 1,77 | +21% | 0,26 |
> | 330 | ADX + 1ª vela 80 ⚠️ | **+110% · −32,0%** | +61% · −15,9% | +36% | −8,8% | 2,6 | 0,62 → 1,76 | +20% | 0,15 |

> [!example]- Combinações 331 a 360 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 331 | ADX + Quinta + Bollinger + Onda ⚠️ | **+174% · −36,2%** | +47% · −8,4% | +28% | −6,3% | 2,5 | 0,66 → 1,80 | +18% | 0,07 |
> | 332 | ADX + MACD + Pullback + Onda | **+170% · −39,3%** | +48% · −8,7% | +32% | −8,0% | 2,4 | 0,81 → 1,65 | +22% | 0,09 |
> | 333 | ADX + Tendência + Onda | **+174% · −48,4%** | +63% · −16,3% | +40% | −11,8% | 2,3 | 0,87 → 1,60 | +30% | 0,24 |
> | 334 | ADX + MACD + 1ª vela 80 + Onda ⚠️ | **+186% · −42,6%** | +52% · −10,4% | +34% | −8,1% | 2,6 | 0,53 → 1,76 | +17% | 0,20 |
> | 335 | MACD + Quinta + Tendência + Onda ⚠️ | **+153% · −34,4%** | +43% · −8,3% | +32% | −9,2% | 2,1 | 0,96 → 1,47 | +25% | 0,10 |
> | 336 | 1ª vela 80 + Quinta ⚠️ | **+55% · −13,7%** | +33% · −5,7% | +25% | −5,2% | 2,3 | 0,86 → 1,60 | +14% | −0,34 |
> | 337 | ADX + MACD + Tendência + Onda | **+214% · −52,6%** | +58% · −13,1% | +38% | −11,4% | 2,2 | 0,87 → 1,61 | +28% | 0,29 |
> | 338 | MACD + 1ª vela 80 + Quinta ⚠️ | **+90% · −19,3%** | +36% · −5,4% | +27% | −8,2% | 1,7 | 0,90 → 1,63 | +16% | −0,06 |
> | 339 | MACD + Quinta + Pullback + Onda ⚠️ | **+108% · −22,9%** | +34% · −5,0% | +27% | −6,3% | 2,2 | 0,92 → 1,49 | +22% | −0,04 |
> | 340 | 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+151% · −25,7%** | +41% · −5,1% | +27% | −6,5% | 2,2 | 0,71 → 1,86 | +13% | 0,00 |
> | 341 | MACD + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+199% · −33,0%** | +41% · −5,7% | +28% | −7,9% | 1,9 | 0,75 → 1,81 | +15% | 0,09 |
> | 342 | MACD + Bollinger | **+87% · −16,8%** | +47% · −7,9% | +29% | −10,1% | 1,6 | 0,93 → 1,58 | +20% | 0,38 |
> | 343 | MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+150% · −25,6%** | +42% · −5,9% | +31% | −9,2% | 1,9 | 0,86 → 1,64 | +20% | 0,09 |
> | 344 | ADX + MACD + Bollinger + Onda | **+206% · −41,4%** | +53% · −10,3% | +32% | −8,1% | 2,4 | 0,60 → 1,77 | +19% | 0,26 |
> | 345 | Quinta + Pullback + Onda ⚠️ | **+71% · −19,2%** | +31% · −5,5% | +25% | −5,5% | 2,2 | 0,91 → 1,32 | +21% | −0,08 |
> | 346 | ADX + Pullback + Onda | **+128% · −34,2%** | +50% · −10,4% | +32% | −8,6% | 2,3 | 0,78 → 1,57 | +20% | 0,08 |
> | 347 | ADX + MACD + Quinta ⚠️ | **+111% · −34,1%** | +44% · −11,1% | +29% | −7,5% | 2,2 | 0,76 → 1,65 | +18% | 0,05 |
> | 348 | 1ª vela 80 + Pullback + Onda ⚠️ | **+109% · −21,5%** | +42% · −6,4% | +30% | −8,6% | 2,0 | 0,84 → 1,60 | +20% | 0,04 |
> | 349 | ADX + 1ª vela 80 + Onda ⚠️ | **+145% · −40,7%** | +55% · −13,8% | +35% | −8,6% | 2,5 | 0,46 → 1,74 | +15% | 0,16 |
> | 350 | Tendência + Onda | **+105% · −26,5%** | +57% · −13,1% | +40% | −13,7% | 2,0 | 0,88 → 1,37 | +28% | 0,32 |
> | 351 | MACD + Tendência + Onda | **+141% · −34,4%** | +52% · −11,6% | +37% | −12,7% | 1,9 | 0,86 → 1,43 | +27% | 0,40 |
> | 352 | IFR + MACD + Onda | **+141% · −27,6%** | +51% · −8,8% | +35% | −10,0% | 2,3 | 0,70 → 1,63 | +25% | 0,31 |
> | 353 | MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+185% · −33,0%** | +47% · −7,8% | +31% | −10,5% | 1,7 | 0,64 → 1,77 | +14% | 0,28 |
> | 354 | ADX + MACD + Quinta + Onda ⚠️ | **+146% · −37,0%** | +44% · −8,7% | +30% | −7,4% | 2,3 | 0,54 → 1,66 | +19% | 0,02 |
> | 355 | ADX + Bollinger + Onda | **+161% · −35,5%** | +57% · −11,5% | +32% | −8,8% | 2,2 | 0,53 → 1,76 | +18% | 0,22 |
> | 356 | MACD + Quinta + Bollinger + Onda ⚠️ | **+138% · −24,7%** | +39% · −5,3% | +27% | −7,2% | 1,9 | 0,66 → 1,67 | +16% | 0,06 |
> | 357 | MACD + Pullback + Onda | **+98% · −22,8%** | +39% · −7,1% | +30% | −9,4% | 1,8 | 0,80 → 1,44 | +24% | 0,10 |
> | 358 | 1ª vela 80 + Bollinger + Onda ⚠️ | **+139% · −25,6%** | +48% · −7,6% | +30% | −9,5% | 1,8 | 0,57 → 1,81 | +11% | 0,23 |
> | 359 | MACD + Quinta ⚠️ | **+47% · −9,7%** | +30% · −4,4% | +24% | −7,1% | 1,6 | 0,81 → 1,31 | +20% | −0,12 |
> | 360 | MACD + 1ª vela 80 ⚠️ | **+81% · −19,4%** | +45% · −9,3% | +32% | −13,7% | 1,4 | 0,71 → 1,56 | +15% | 0,28 |

> [!example]- Combinações 361 a 381 de 381 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 361 | Quinta + Bollinger + Onda ⚠️ | **+98% · −17,6%** | +38% · −5,3% | +25% | −6,5% | 1,9 | 0,60 → 1,64 | +14% | −0,07 |
> | 362 | ADX + Quinta ⚠️ | **+74% · −27,5%** | +44% · −13,8% | +28% | −8,8% | 1,7 | 0,68 → 1,51 | +14% | 0,09 |
> | 363 | ADX + MACD | **+101% · −35,8%** | +57% · −17,7% | +35% | −11,8% | 1,9 | 0,60 → 1,59 | +19% | 0,17 |
> | 364 | Pullback + Onda | **+63% · −19,9%** | +38% · −9,5% | +29% | −8,7% | 1,8 | 0,76 → 1,24 | +22% | 0,16 |
> | 365 | MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+127% · −29,5%** | +38% · −6,4% | +28% | −9,6% | 1,6 | 0,58 → 1,65 | +14% | 0,00 |
> | 366 | ADX + MACD + Onda | **+134% · −38,6%** | +52% · −11,9% | +34% | −10,2% | 2,1 | 0,43 → 1,62 | +19% | 0,18 |
> | 367 | ADX + Quinta + Onda ⚠️ | **+108% · −30,6%** | +44% · −10,8% | +29% | −7,8% | 2,1 | 0,45 → 1,59 | +18% | −0,08 |
> | 368 | MACD + Bollinger + Onda | **+127% · −24,5%** | +46% · −7,6% | +30% | −10,5% | 1,6 | 0,53 → 1,62 | +15% | 0,29 |
> | 369 | 1ª vela 80 + Quinta + Onda ⚠️ | **+89% · −23,6%** | +36% · −6,4% | +27% | −8,5% | 1,7 | 0,49 → 1,61 | +11% | −0,15 |
> | 370 | 1ª vela 80 ⚠️ | **+47% · −13,6%** | +47% · −13,6% | +32% | −12,8% | 1,5 | 0,59 → 1,48 | +9% | — |
> | 371 | ADX + Onda | **+98% · −33,6%** | +57% · −16,1% | +35% | −12,1% | 1,8 | 0,32 → 1,54 | +18% | 0,06 |
> | 372 | Quinta ⚠️ | **+18% · −2,6%** | +18% · −2,6% | +17% | −3,7% | 1,1 | 1,22 → 0,66 | +15% | — |
> | 373 | MACD + 1ª vela 80 + Onda ⚠️ | **+116% · −29,5%** | +44% · −9,1% | +32% | −13,5% | 1,4 | 0,46 → 1,60 | +12% | 0,28 |
> | 374 | ADX | **+66% · −30,8%** | +66% · −30,8% | +38% | −15,4% | 1,6 | 0,45 → 1,42 | +12% | — |
> | 375 | Bollinger + Onda | **+88% · −18,0%** | +48% · −8,5% | +29% | −10,0% | 1,6 | 0,42 → 1,58 | +12% | 0,17 |
> | 376 | MACD + Quinta + Onda ⚠️ | **+80% · −23,8%** | +34% · −6,3% | +27% | −8,9% | 1,6 | 0,45 → 1,45 | +15% | −0,06 |
> | 377 | 1ª vela 80 + Onda ⚠️ | **+80% · −24,2%** | +45% · −11,3% | +32% | −13,8% | 1,4 | 0,34 → 1,55 | +8% | 0,26 |
> | 378 | MACD | **+40% · −10,5%** | +40% · −10,5% | +31% | −16,7% | 1,1 | 0,52 → 1,20 | +21% | — |
> | 379 | MACD + Onda | **+71% · −23,6%** | +42% · −9,8% | +31% | −14,5% | 1,3 | 0,31 → 1,39 | +13% | 0,31 |
> | 380 | Quinta + Onda ⚠️ | **+48% · −20,0%** | +30% · −8,2% | +24% | −8,6% | 1,3 | 0,30 → 1,27 | +12% | −0,38 |
> | 381 | Onda | **+41% · −19,8%** | +41% · −19,8% | +30% | −18,7% | 0,9 | 0,11 → 1,19 | +5% | — |

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

| Ano | ⭐ Rec. 1% | ⭐ Recomendada | ADX | IFR | MACD | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | +3,6% | +2,6% | +2,1% | −3,6% | −2,9% | +7,7% | +4,0% | +7,5% | +4,0% | −1,7% | −3,9% | +1,5% | +1,3% | −0,7% | 1ª vela 80 |
| 2022 | +258,9% | +38,6% | +29,8% | +51,5% | +20,7% | +9,1% | +18,1% | +47,1% | +18,2% | +58,4% | +5,0% | +25,8% | +12,3% | +4,7% | ⭐ Rec. 1% |
| 2023 | +97,7% | +23,8% | +12,0% | +28,3% | +25,7% | +27,7% | +15,3% | +19,7% | +22,8% | +50,3% | +26,9% | +22,2% | +13,0% | +22,3% | ⭐ Rec. 1% |
| 2024 | +105,5% | +21,5% | +36,5% | +30,7% | +36,6% | +37,8% | +16,4% | +10,8% | +23,1% | +21,6% | +62,1% | +31,9% | +10,8% | −10,4% | ⭐ Rec. 1% |
| 2025 | +279,5% | +38,7% | +65,9% | +55,3% | +40,1% | +46,7% | +21,9% | +21,2% | +40,2% | +32,2% | +22,7% | +46,2% | +14,2% | +34,0% | ⭐ Rec. 1% |
| 2026* | +102,6% | +31,3% | +45,9% | +55,4% | +34,5% | +31,3% | +7,7% | +21,1% | +18,4% | +85,9% | +44,2% | +35,6% | +11,6% | +5,0% | ⭐ Rec. 1% |
| **Acumulado no período** | **+11512,5%** | **+289,8%** | **+390,5%** | **+491,2%** | **+279,1%** | **+298,3%** | **+116,5%** | **+208,0%** | **+208,4%** | **+599,3%** | **+267,5%** | **+307,6%** | **+81,6%** | **+60,3%** | **⭐ Rec. 1%** |
| **R\$ 10.000 viraram** | **R\$ 1.161.253** | **R\$ 38.977** | **R\$ 49.055** | **R\$ 59.118** | **R\$ 37.908** | **R\$ 39.829** | **R\$ 21.646** | **R\$ 30.798** | **R\$ 30.836** | **R\$ 69.931** | **R\$ 36.747** | **R\$ 40.764** | **R\$ 18.156** | **R\$ 16.029** | |
| **Média ao ano** | **+161,4%** | **+31,6%** | **+37,9%** | **+43,2%** | **+30,9%** | **+32,2%** | **+16,9%** | **+25,5%** | **+25,6%** | **+48,1%** | **+30,1%** | **+32,8%** | **+12,8%** | **+10,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 29/10/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ⭐ Rec. 1% | ⭐ Recomendada | ADX | IFR | MACD | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | +1,8% | +1,2% | +1,3% | −1,9% | −0,3% | +1,9% | +1,6% | +2,6% | +2,8% | −2,9% | −8,9% | +0,6% | +0,6% | −3,4% |
> | dez/2021 | +1,8% | +1,4% | +0,8% | −1,8% | −2,6% | +5,6% | +2,4% | +4,8% | +1,1% | +1,2% | +5,5% | +0,9% | +0,7% | +2,9% |
> | jan/2022 | +27,2% | +4,6% | +2,7% | +6,4% | +3,0% | +2,1% | +1,4% | +5,1% | +2,0% | −0,1% | −0,7% | +3,2% | +0,7% | +7,0% |
> | fev/2022 | −3,3% | +0,2% | −1,1% | −2,6% | −1,9% | −0,0% | +0,7% | +2,7% | +0,5% | −1,1% | +1,1% | −1,0% | +0,8% | +0,9% |
> | mar/2022 | +24,7% | +4,6% | +4,5% | +7,8% | +5,7% | −3,1% | +0,9% | +2,6% | +3,3% | +10,1% | +9,0% | +3,1% | +0,9% | +6,1% |
> | abr/2022 | +10,5% | +2,0% | −4,1% | +0,6% | +1,9% | −0,9% | +2,2% | +2,2% | +3,2% | +4,8% | −2,0% | −0,0% | +0,8% | −10,1% |
> | mai/2022 | +2,8% | +1,5% | +6,6% | +2,0% | −0,2% | +13,8% | +1,9% | +2,2% | +0,2% | −1,2% | +0,4% | +4,8% | +1,0% | +3,2% |
> | jun/2022 | +9,8% | +2,7% | −1,2% | +3,5% | +0,9% | −4,0% | +3,4% | +3,6% | +0,7% | +3,3% | +0,1% | +0,5% | +1,0% | −11,5% |
> | jul/2022 | +2,6% | +1,4% | −2,9% | +1,0% | +1,3% | −0,2% | +1,0% | +2,5% | +0,5% | −0,6% | −5,0% | +0,1% | +1,0% | +4,7% |
> | ago/2022 | +39,6% | +6,6% | +12,3% | +11,5% | +5,2% | +6,7% | +0,2% | +4,7% | +3,6% | +12,6% | +10,3% | +7,2% | +1,2% | +6,2% |
> | set/2022 | −3,7% | +0,6% | −1,7% | −1,2% | +7,2% | −1,0% | +2,9% | +2,8% | +0,3% | +8,3% | −3,0% | +1,2% | +1,1% | +0,5% |
> | out/2022 | +17,3% | +4,1% | +6,3% | +6,2% | +1,6% | −2,9% | −0,1% | +4,4% | +1,7% | +4,1% | −1,5% | +2,3% | +1,0% | +5,5% |
> | nov/2022 | +10,1% | +3,6% | −1,0% | +1,7% | −6,0% | −3,1% | +1,0% | +6,8% | +2,4% | +0,3% | +4,5% | −1,5% | +1,0% | −3,1% |
> | dez/2022 | +5,2% | +1,5% | +7,2% | +6,2% | +1,0% | +2,8% | +1,2% | −0,2% | −1,4% | +7,6% | −6,8% | +3,8% | +1,1% | −2,4% |
> | jan/2023 | +17,6% | +3,7% | −0,1% | +2,0% | +4,5% | +4,3% | +1,1% | +3,3% | +5,7% | +14,1% | +7,2% | +2,4% | +1,1% | +3,4% |
> | fev/2023 | −0,1% | +0,5% | +7,9% | +1,4% | −0,5% | +1,3% | +2,7% | −1,4% | +1,6% | +7,4% | −9,5% | +2,5% | +0,9% | −7,5% |
> | mar/2023 | −0,2% | +1,2% | −2,9% | +0,4% | +5,9% | +1,7% | +0,3% | +2,3% | +0,8% | +3,1% | −3,7% | +1,1% | +1,2% | −2,9% |
> | abr/2023 | −1,7% | +0,6% | +7,4% | +2,2% | −4,4% | −0,7% | +0,8% | +0,3% | −0,6% | −2,0% | +1,4% | +1,0% | +0,9% | +2,5% |
> | mai/2023 | +4,3% | +2,0% | +3,9% | +0,7% | +2,8% | +4,3% | +1,1% | +4,8% | +0,5% | −2,2% | +1,7% | +2,6% | +1,1% | +3,7% |
> | jun/2023 | +12,1% | +2,3% | −4,6% | +1,3% | +2,1% | +3,0% | +1,8% | +0,7% | +4,9% | +10,0% | +7,4% | +0,7% | +1,1% | +9,0% |
> | jul/2023 | +11,8% | +2,7% | +3,2% | +5,9% | +5,1% | +5,8% | +1,0% | +0,1% | +2,0% | +4,8% | −1,7% | +4,2% | +1,1% | +3,3% |
> | ago/2023 | +6,8% | +2,2% | +0,6% | +5,1% | −0,1% | −3,6% | +1,0% | +1,0% | +0,5% | +2,9% | +5,6% | +0,6% | +1,1% | −5,1% |
> | set/2023 | +8,1% | +1,6% | −1,6% | +0,1% | +0,5% | −0,8% | +1,6% | +0,9% | +3,6% | +0,4% | −3,5% | −0,0% | +1,0% | +0,7% |
> | out/2023 | +9,2% | +2,4% | +1,0% | +3,6% | +2,6% | +1,2% | +0,9% | +3,0% | +0,6% | +0,5% | +6,1% | +1,9% | +1,0% | −2,9% |
> | nov/2023 | +8,7% | +2,1% | +3,4% | +2,1% | +3,6% | +9,6% | +0,7% | +2,4% | +1,6% | +2,7% | +5,7% | +3,9% | +0,9% | +12,5% |
> | dez/2023 | −4,1% | +0,3% | −5,7% | +0,6% | +1,6% | −0,7% | +1,4% | +0,7% | −0,3% | +1,1% | +8,9% | −0,6% | +0,9% | +5,4% |
> | jan/2024 | +6,5% | +1,4% | +10,5% | −0,9% | +0,4% | +7,5% | +0,3% | +1,4% | +3,6% | +5,6% | +4,0% | +3,5% | +1,0% | −4,8% |
> | fev/2024 | +10,3% | +2,3% | +7,2% | +5,8% | +9,9% | +1,8% | +1,3% | −0,1% | +1,2% | +9,9% | +2,8% | +5,2% | +0,8% | +1,0% |
> | mar/2024 | +1,9% | +1,2% | −5,6% | +1,5% | −0,7% | +0,8% | +1,9% | +2,1% | +0,0% | +1,7% | −1,3% | −0,5% | +0,8% | −0,7% |
> | abr/2024 | +11,3% | +2,6% | +3,2% | +5,1% | −1,0% | +2,8% | +1,5% | +0,5% | +2,2% | −7,4% | +5,2% | +2,3% | +0,9% | −1,7% |
> | mai/2024 | −5,6% | −0,3% | −4,0% | −1,4% | −1,5% | +4,6% | +1,4% | −0,6% | +1,0% | −0,3% | +0,8% | −0,2% | +0,8% | −3,0% |
> | jun/2024 | +6,4% | +1,7% | −0,9% | +1,3% | +4,0% | +1,5% | +0,8% | +2,7% | +1,0% | −0,1% | +0,5% | +1,4% | +0,8% | +1,5% |
> | jul/2024 | +5,9% | +1,7% | −1,9% | +3,6% | −0,7% | +3,6% | +1,4% | +0,4% | +1,1% | −1,1% | +7,1% | +1,2% | +0,9% | +3,0% |
> | ago/2024 | +9,6% | +1,8% | +4,7% | +2,1% | +5,8% | +6,2% | +1,1% | +0,1% | +3,2% | +2,7% | +3,4% | +4,0% | +0,9% | +6,5% |
> | set/2024 | +17,3% | +3,4% | +2,2% | +2,2% | +2,2% | +0,8% | +0,7% | +6,2% | +1,9% | +4,8% | +10,5% | +1,7% | +0,8% | −3,1% |
> | out/2024 | +0,9% | +0,7% | +6,2% | +1,4% | +3,6% | −1,7% | +1,6% | −1,4% | +2,1% | −2,5% | +0,6% | +2,2% | +0,9% | −1,6% |
> | nov/2024 | +4,8% | +1,5% | +2,3% | +4,5% | +3,2% | +2,5% | +0,7% | −2,0% | +1,9% | +0,1% | +5,7% | +2,7% | +0,8% | −3,1% |
> | dez/2024 | +6,7% | +1,8% | +9,0% | +2,2% | +7,1% | +2,2% | +2,5% | +1,2% | +1,9% | +7,4% | +10,7% | +4,6% | +0,8% | −4,3% |
> | jan/2025 | +15,3% | +3,2% | +8,6% | +5,3% | +9,0% | +6,4% | +1,0% | +1,3% | +2,9% | +11,9% | +8,5% | +6,1% | +1,0% | +4,9% |
> | fev/2025 | +17,5% | +3,8% | +5,5% | +6,0% | +4,1% | +2,1% | +2,4% | +3,2% | +2,0% | +4,5% | +5,4% | +4,1% | +1,0% | −2,6% |
> | mar/2025 | +10,7% | +1,7% | +7,3% | −0,4% | +2,4% | +5,2% | +0,6% | −0,5% | +6,0% | +8,4% | +1,4% | +3,0% | +1,0% | +6,1% |
> | abr/2025 | −5,1% | −0,1% | +0,7% | +0,1% | −7,1% | +1,7% | +3,4% | +0,3% | −0,8% | −6,7% | −7,0% | −0,2% | +1,1% | +3,7% |
> | mai/2025 | +23,6% | +4,5% | +10,5% | +6,8% | +4,0% | +5,9% | +1,8% | +2,0% | +4,6% | +5,4% | +8,2% | +5,8% | +1,1% | +1,5% |
> | jun/2025 | +7,7% | +2,4% | +2,0% | +2,3% | +0,6% | +0,2% | +1,9% | +3,8% | +1,1% | −4,5% | +2,0% | +1,4% | +1,1% | +1,3% |
> | jul/2025 | +6,2% | +2,0% | +4,0% | +0,9% | +2,1% | +2,5% | +2,1% | +2,9% | +2,3% | −0,9% | −1,4% | +2,3% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +7,4% | +8,2% | +14,6% | +13,1% | +6,8% | +2,0% | −0,7% | +8,5% | +6,9% | +1,5% | +8,9% | +1,2% | +6,3% |
> | set/2025 | −5,3% | −0,2% | +3,8% | −3,5% | −3,3% | +2,9% | +0,5% | +1,6% | +1,3% | −2,4% | +2,8% | +0,1% | +1,2% | +3,4% |
> | out/2025 | +12,3% | +3,0% | +5,1% | +2,1% | +1,7% | +1,4% | +2,6% | +3,6% | +3,2% | −2,9% | −0,0% | +2,6% | +1,3% | +2,3% |
> | nov/2025 | +10,1% | +2,7% | +7,3% | +5,9% | +7,6% | +5,5% | +1,1% | −0,8% | +3,0% | +7,8% | −1,9% | +5,5% | +1,1% | +6,4% |
> | dez/2025 | +11,6% | +3,1% | −9,7% | +5,7% | +1,5% | −1,2% | +0,7% | +2,9% | +0,6% | +2,5% | +2,2% | −0,7% | +1,1% | +1,3% |
> | jan/2026 | +14,1% | +3,5% | +7,3% | +4,8% | +10,5% | +5,6% | +3,0% | −0,2% | +5,8% | +11,3% | +0,9% | +6,3% | +1,2% | +12,6% |
> | fev/2026 | −1,9% | −0,1% | −10,0% | +1,6% | +3,1% | +13,8% | −2,1% | −2,0% | +0,1% | −6,6% | +3,9% | +1,1% | +1,0% | +4,1% |
> | mar/2026 | +3,5% | +2,4% | +1,9% | +1,2% | +9,2% | −1,7% | +1,2% | +5,3% | +0,5% | +15,3% | +15,5% | +2,5% | +1,2% | −0,7% |
> | abr/2026 | +24,1% | +6,3% | +23,4% | +7,0% | +1,4% | +5,1% | +1,0% | +2,2% | +9,5% | +5,8% | +5,0% | +7,4% | +1,1% | −0,1% |
> | mai/2026 | +1,6% | +1,6% | −1,8% | +5,1% | +3,6% | −1,8% | +2,1% | +0,4% | −0,9% | −2,8% | −4,6% | +1,5% | +1,1% | −7,2% |
> | jun/2026 | −5,4% | −0,1% | −2,9% | −2,6% | −3,2% | −0,4% | +1,1% | +3,4% | −0,9% | −0,5% | −2,7% | −1,5% | +1,1% | −1,0% |
> | jul/2026 | +8,5% | +3,1% | −0,1% | +8,9% | +6,1% | +10,1% | −1,1% | +0,3% | +0,2% | +13,5% | +27,4% | +4,8% | +1,2% | +3,5% |
> | ago/2026 | +14,4% | +4,4% | +1,9% | +5,8% | +5,1% | +4,8% | −1,4% | +4,1% | +3,1% | +9,9% | +1,7% | +3,3% | +1,1% | −0,3% |
> | set/2026 | +3,4% | +2,2% | +16,4% | −0,6% | −2,3% | −3,5% | +1,1% | +6,0% | +1,2% | +4,2% | +1,0% | +2,2% | +1,1% | +5,0% |
> | out/2026 | +14,4% | +4,4% | +6,4% | +14,8% | −2,5% | −2,9% | +2,6% | +0,0% | −1,0% | +16,6% | −6,6% | +3,7% | +1,0% | −9,2% |
> | **Acumulado** | **+11512,5%** | **+289,8%** | **+390,5%** | **+491,2%** | **+279,1%** | **+298,3%** | **+116,5%** | **+208,0%** | **+208,4%** | **+599,3%** | **+267,5%** | **+307,6%** | **+81,6%** | **+60,3%** |

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = IFR + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **Todos ⚠️** = os 9 setups com 1% cada: até 9% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| Ano | ⭐ Recomendada | ⭐ Recomendada ÷ | ADX | IFR | MACD | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos ÷ | Todos ⚠️ | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | +3,6% | +2,2% | +2,0% | −9,3% | −2,8% | +10,2% | +4,2% | +10,2% | +6,4% | −2,9% | −3,7% | +1,1% | −2,5% | +1,3% | −0,7% | Pullback |
| 2022 | +258,9% | +68,9% | +51,0% | +108,3% | +27,8% | +7,2% | +19,1% | +70,5% | +30,1% | +94,7% | +8,2% | +42,8% | +170,1% | +12,3% | +4,7% | ⭐ Recomendada |
| 2023 | +97,7% | +37,8% | +7,4% | +45,0% | +30,3% | +36,6% | +16,4% | +24,7% | +40,6% | +78,7% | +36,6% | +29,3% | +74,1% | +13,0% | +22,3% | ⭐ Recomendada |
| 2024 | +105,5% | +37,8% | +71,5% | +48,1% | +51,6% | +73,1% | +19,2% | +9,6% | +56,8% | +31,5% | +97,1% | +53,9% | +348,9% | +10,8% | −10,4% | Todos ⚠️ |
| 2025 | +279,5% | +74,2% | +161,6% | +88,9% | +60,7% | +77,3% | +23,5% | +29,0% | +108,7% | +62,2% | +36,3% | +81,0% | +739,5% | +14,2% | +34,0% | Todos ⚠️ |
| 2026* | +102,6% | +38,1% | +65,7% | +70,7% | +36,3% | +37,3% | +9,0% | +20,5% | +24,6% | +101,9% | +41,3% | +45,1% | +214,6% | +11,6% | +5,0% | Todos ⚠️ |
| **Acumulado no período** | **+11512,5%** | **+689,0%** | **+1130,6%** | **+1207,2%** | **+437,5%** | **+579,7%** | **+131,6%** | **+299,2%** | **+693,8%** | **+1354,6%** | **+440,3%** | **+654,6%** | **+54255,9%** | **+81,6%** | **+60,3%** | **Todos ⚠️** |
| **R\$ 10.000 viraram** | **R\$ 1.161.253** | **R\$ 78.899** | **R\$ 123.064** | **R\$ 130.723** | **R\$ 53.747** | **R\$ 67.969** | **R\$ 23.158** | **R\$ 39.919** | **R\$ 79.379** | **R\$ 145.463** | **R\$ 54.029** | **R\$ 75.457** | **R\$ 5.435.595** | **R\$ 18.156** | **R\$ 16.029** | |
| **Média ao ano** | **+161,4%** | **+51,8%** | **+66,1%** | **+68,1%** | **+40,5%** | **+47,3%** | **+18,5%** | **+32,3%** | **+52,0%** | **+71,8%** | **+40,6%** | **+50,4%** | **+257,1%** | **+12,8%** | **+10,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 29/10/2026.

> [!example]- Mês a mês arriscando 1% por operação (clique para abrir)
> | Mês | ⭐ Recomendada | ⭐ Recomendada ÷ | ADX | IFR | MACD | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos ÷ | Todos ⚠️ | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | +1,8% | +1,1% | +2,1% | −4,8% | −0,3% | +2,2% | +1,5% | +3,0% | +5,1% | −3,9% | −8,4% | +0,3% | −2,0% | +0,6% | −3,4% |
> | dez/2021 | +1,8% | +1,1% | −0,0% | −4,7% | −2,5% | +7,8% | +2,6% | +7,0% | +1,2% | +1,1% | +5,1% | +0,8% | −0,5% | +0,7% | +2,9% |
> | jan/2022 | +27,2% | +9,1% | +5,7% | +13,6% | +3,8% | +3,2% | +1,6% | +8,7% | +4,8% | −0,2% | −0,7% | +5,8% | +25,3% | +0,7% | +7,0% |
> | fev/2022 | −3,3% | −0,6% | −4,6% | −6,1% | −2,7% | −0,8% | +0,7% | +4,7% | −0,1% | −2,5% | +2,0% | −2,7% | −15,8% | +0,8% | +0,9% |
> | mar/2022 | +24,7% | +8,5% | +10,4% | +15,7% | +6,7% | −5,0% | +0,9% | +3,6% | +6,3% | +16,3% | +10,8% | +5,7% | +24,7% | +0,9% | +6,1% |
> | abr/2022 | +10,5% | +4,1% | −12,3% | +0,6% | +2,1% | −2,2% | +2,7% | +3,4% | +8,2% | +8,2% | −3,4% | −1,8% | −12,3% | +0,8% | −10,1% |
> | mai/2022 | +2,8% | +1,7% | +16,7% | +2,9% | −0,4% | +17,3% | +2,0% | +3,0% | −1,0% | −2,5% | +1,3% | +7,7% | +35,1% | +1,0% | +3,2% |
> | jun/2022 | +9,8% | +4,0% | −5,5% | +6,8% | +0,8% | −6,6% | +3,9% | +4,7% | +0,2% | +4,9% | −0,2% | −0,0% | −5,7% | +1,0% | −11,5% |
> | jul/2022 | +2,6% | +1,8% | −11,1% | +0,9% | +1,9% | −1,6% | +0,9% | +4,1% | +0,3% | −1,1% | −6,9% | −1,8% | −14,1% | +1,0% | +4,7% |
> | ago/2022 | +39,6% | +13,0% | +32,9% | +23,5% | +6,5% | +10,8% | +0,1% | +7,5% | +8,0% | +22,4% | +12,6% | +14,6% | +76,7% | +1,2% | +6,2% |
> | set/2022 | −3,7% | −0,5% | −7,1% | −3,9% | +7,8% | −1,9% | +3,0% | +3,4% | −0,9% | +11,7% | −2,9% | −0,3% | −7,7% | +1,1% | +0,5% |
> | out/2022 | +17,3% | +6,5% | +14,5% | +11,0% | +1,9% | −4,0% | −0,1% | +5,7% | +2,4% | +5,3% | −0,9% | +4,8% | +16,9% | +1,0% | +5,5% |
> | nov/2022 | +10,1% | +4,1% | −5,2% | +2,2% | −4,3% | −3,0% | +1,0% | +6,5% | +3,3% | +0,4% | +3,6% | −1,7% | −13,4% | +1,0% | −3,1% |
> | dez/2022 | +5,2% | +2,6% | +17,7% | +12,3% | +1,4% | +3,3% | +1,0% | −0,4% | −3,9% | +8,9% | −5,5% | +7,4% | +29,7% | +1,1% | −2,4% |
> | jan/2023 | +17,6% | +6,5% | −2,8% | +2,8% | +4,5% | +5,1% | +1,1% | +4,4% | +12,1% | +18,3% | +7,3% | +2,3% | +4,3% | +1,1% | +3,4% |
> | fev/2023 | −0,1% | +0,6% | +20,2% | +1,8% | −0,6% | +1,4% | +2,8% | −2,6% | +2,6% | +11,1% | −10,6% | +5,1% | +22,0% | +0,9% | −7,5% |
> | mar/2023 | −0,2% | +0,8% | −11,3% | −0,6% | +6,8% | +1,8% | +0,2% | +2,9% | −0,1% | +4,6% | −4,3% | −0,6% | −10,2% | +1,2% | −2,9% |
> | abr/2023 | −1,7% | +0,2% | +20,2% | +3,3% | −5,2% | −1,3% | +0,8% | −0,1% | −3,1% | −3,5% | +1,7% | +3,5% | +11,5% | +0,9% | +2,5% |
> | mai/2023 | +4,3% | +2,4% | +8,6% | +0,5% | +3,1% | +6,8% | +1,0% | +7,3% | −0,8% | −4,6% | +1,7% | +4,3% | +14,9% | +1,1% | +3,7% |
> | jun/2023 | +12,1% | +4,8% | −13,7% | +1,6% | +2,3% | +4,7% | +2,0% | +0,3% | +12,5% | +17,7% | +10,4% | −0,6% | −8,4% | +1,1% | +9,0% |
> | jul/2023 | +11,8% | +4,6% | +5,8% | +10,5% | +6,2% | +9,2% | +1,0% | −0,5% | +4,0% | +7,7% | −2,1% | +6,7% | +29,4% | +1,1% | +3,3% |
> | ago/2023 | +6,8% | +3,1% | −0,7% | +9,0% | −0,3% | −6,8% | +1,1% | +0,9% | −0,8% | +4,4% | +6,8% | +0,5% | −3,6% | +1,1% | −5,1% |
> | set/2023 | +8,1% | +3,4% | −5,5% | −0,7% | +0,5% | −2,2% | +1,9% | +0,8% | +10,0% | +0,3% | −5,8% | −1,1% | −9,9% | +1,0% | +0,7% |
> | out/2023 | +9,2% | +3,7% | +0,7% | +6,3% | +3,5% | +1,2% | +0,9% | +5,0% | −0,2% | +0,0% | +8,1% | +2,7% | +8,4% | +1,0% | −2,9% |
> | nov/2023 | +8,7% | +3,6% | +7,3% | +3,5% | +4,4% | +15,9% | +0,8% | +4,0% | +3,1% | +4,0% | +6,8% | +6,4% | +26,6% | +0,9% | +12,5% |
> | dez/2023 | −4,1% | −0,7% | −14,2% | +0,4% | +2,2% | −2,4% | +1,7% | +0,4% | −3,1% | +2,3% | +14,6% | −2,6% | −15,8% | +0,9% | +5,4% |
> | jan/2024 | +6,5% | +2,9% | +24,2% | −2,3% | +0,3% | +14,6% | −0,0% | +1,3% | +9,7% | +9,7% | +5,3% | +7,1% | +33,4% | +1,0% | −4,8% |
> | fev/2024 | +10,3% | +4,0% | +16,0% | +9,8% | +13,8% | +2,9% | +1,7% | −1,0% | +3,0% | +18,8% | +3,8% | +8,9% | +44,2% | +0,8% | +1,0% |
> | mar/2024 | +1,9% | +1,2% | −14,1% | +2,0% | −1,7% | +0,6% | +2,7% | +3,8% | −2,2% | +2,9% | −2,7% | −2,2% | −14,3% | +0,8% | −0,7% |
> | abr/2024 | +11,3% | +4,4% | +6,2% | +8,5% | −1,4% | +3,8% | +1,7% | +0,4% | +4,3% | −13,6% | +7,0% | +3,9% | +14,7% | +0,9% | −1,7% |
> | mai/2024 | −5,6% | −1,3% | −10,5% | −3,2% | −2,1% | +8,9% | +1,7% | −2,2% | +1,3% | −1,1% | +1,2% | −1,2% | −10,1% | +0,8% | −3,0% |
> | jun/2024 | +6,4% | +2,7% | −3,9% | +1,7% | +6,0% | +3,1% | +0,7% | +4,3% | +1,9% | −0,9% | −0,4% | +1,7% | +4,2% | +0,8% | +1,5% |
> | jul/2024 | +5,9% | +2,6% | −6,0% | +5,8% | −1,0% | +8,6% | +1,8% | +0,0% | +2,0% | −2,5% | +14,0% | +1,8% | +3,6% | +0,9% | +3,0% |
> | ago/2024 | +9,6% | +3,8% | +9,3% | +2,8% | +8,3% | +11,5% | +1,6% | −0,8% | +9,5% | +5,4% | +5,0% | +6,8% | +30,3% | +0,9% | +6,5% |
> | set/2024 | +17,3% | +6,2% | +3,4% | +3,1% | +3,3% | +1,4% | +0,7% | +11,4% | +4,1% | +8,8% | +15,9% | +2,5% | +6,6% | +0,8% | −3,1% |
> | out/2024 | +0,9% | +1,0% | +13,3% | +1,7% | +5,0% | −4,2% | +1,8% | −3,8% | +5,1% | −6,1% | +1,1% | +3,4% | +12,9% | +0,9% | −1,6% |
> | nov/2024 | +4,8% | +2,3% | +3,8% | +7,4% | +4,9% | +3,3% | +0,7% | −4,6% | +4,1% | −0,7% | +8,8% | +4,1% | +14,3% | +0,8% | −3,1% |
> | dez/2024 | +6,7% | +2,8% | +21,3% | +3,5% | +8,2% | +3,1% | +2,7% | +1,2% | +3,7% | +11,1% | +12,6% | +7,7% | +36,6% | +0,8% | −4,3% |
> | jan/2025 | +15,3% | +5,9% | +19,5% | +9,1% | +12,1% | +10,2% | +1,0% | +1,4% | +6,8% | +21,4% | +11,4% | +10,6% | +52,7% | +1,0% | +4,9% |
> | fev/2025 | +17,5% | +6,5% | +11,8% | +10,1% | +5,0% | +2,9% | +2,9% | +5,0% | +3,9% | +7,2% | +7,1% | +6,7% | +29,0% | +1,0% | −2,6% |
> | mar/2025 | +10,7% | +4,3% | +16,4% | −1,4% | +2,8% | +8,0% | +0,8% | −1,2% | +15,8% | +13,2% | +2,3% | +5,4% | +23,0% | +1,0% | +6,1% |
> | abr/2025 | −5,1% | −1,0% | +0,4% | −0,8% | −5,3% | +2,6% | +3,0% | +0,7% | −2,9% | −9,0% | −4,8% | +0,2% | −5,4% | +1,1% | +3,7% |
> | mai/2025 | +23,6% | +8,4% | +22,7% | +10,9% | +5,2% | +9,8% | +2,0% | +2,7% | +11,2% | +10,3% | +10,4% | +10,1% | +48,5% | +1,1% | +1,5% |
> | jun/2025 | +7,7% | +3,4% | +2,5% | +3,0% | +1,0% | +0,1% | +2,0% | +5,7% | +1,3% | −7,0% | +2,6% | +1,9% | +3,4% | +1,1% | +1,3% |
> | jul/2025 | +6,2% | +3,0% | +6,9% | +0,4% | +2,6% | +3,0% | +2,2% | +4,3% | +4,3% | −2,3% | −1,8% | +3,1% | +9,0% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +14,4% | +17,5% | +24,8% | +15,3% | +9,7% | +2,1% | −1,8% | +21,6% | +10,2% | +1,5% | +13,9% | +75,8% | +1,2% | +6,3% |
> | set/2025 | −5,3% | −1,0% | +6,4% | −6,4% | −4,5% | +4,0% | +0,2% | +1,9% | +1,7% | −5,1% | +3,8% | −0,1% | −5,9% | +1,2% | +3,4% |
> | out/2025 | +12,3% | +4,9% | +8,9% | +2,6% | +1,7% | +1,3% | +3,1% | +5,2% | +6,7% | −6,2% | −0,3% | +3,7% | +11,8% | +1,3% | +2,3% |
> | nov/2025 | +10,1% | +4,1% | +13,4% | +8,4% | +10,5% | +8,8% | +1,1% | −2,4% | +6,5% | +14,5% | −2,4% | +8,5% | +38,7% | +1,1% | +6,4% |
> | dez/2025 | +11,6% | +4,7% | −19,1% | +7,8% | +3,8% | −0,9% | +1,0% | +4,8% | +1,3% | +7,5% | +2,8% | −1,8% | −14,6% | +1,1% | +1,3% |
> | jan/2026 | +14,1% | +5,6% | +12,6% | +6,2% | +11,1% | +8,1% | +3,1% | −1,0% | +11,4% | +16,8% | +3,2% | +8,4% | +36,1% | +1,2% | +12,6% |
> | fev/2026 | −1,9% | +0,1% | −16,9% | +1,8% | +2,2% | +11,6% | −1,0% | −1,3% | −0,4% | −5,4% | +2,9% | −0,8% | −8,2% | +1,0% | +4,1% |
> | mar/2026 | +3,5% | +2,1% | +2,0% | +1,1% | +6,4% | −1,0% | +1,2% | +4,6% | +0,2% | +13,4% | +9,6% | +2,2% | +3,3% | +1,2% | −0,7% |
> | abr/2026 | +24,1% | +8,5% | +38,5% | +8,5% | +2,2% | +5,9% | +1,0% | +2,6% | +14,4% | +6,6% | +5,2% | +10,7% | +53,3% | +1,1% | −0,1% |
> | mai/2026 | +1,6% | +1,3% | −4,5% | +6,1% | +3,2% | −2,0% | +2,0% | +0,3% | −2,4% | −3,1% | −3,5% | +1,0% | −1,4% | +1,1% | −7,2% |
> | jun/2026 | −5,4% | −1,0% | −6,5% | −4,0% | −2,5% | −0,5% | +1,1% | +3,7% | −2,9% | −0,5% | −1,7% | −2,4% | −15,9% | +1,1% | −1,0% |
> | jul/2026 | +8,5% | +3,7% | −1,6% | +11,7% | +6,1% | +12,2% | −0,8% | +0,4% | −0,8% | +16,5% | +24,1% | +5,6% | +21,3% | +1,2% | +3,5% |
> | ago/2026 | +14,4% | +5,5% | +2,1% | +7,6% | +4,5% | +4,9% | −0,9% | +4,0% | +4,7% | +11,3% | +1,6% | +3,8% | +11,8% | +1,1% | −0,3% |
> | set/2026 | +3,4% | +2,1% | +27,8% | −1,1% | −0,4% | −3,0% | +1,1% | +5,7% | +1,6% | +5,0% | +0,8% | +4,7% | +17,0% | +1,1% | +5,0% |
> | out/2026 | +14,4% | +5,4% | +9,2% | +18,8% | −0,6% | −2,4% | +2,0% | +0,3% | −2,0% | +15,2% | −4,4% | +5,4% | +20,8% | +1,0% | −9,2% |
> | **Acumulado** | **+11512,5%** | **+689,0%** | **+1130,6%** | **+1207,2%** | **+437,5%** | **+579,7%** | **+131,6%** | **+299,2%** | **+693,8%** | **+1354,6%** | **+440,3%** | **+654,6%** | **+54255,9%** | **+81,6%** | **+60,3%** |

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +32% | −3% | −5% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +75% | −8% | −11% | −17% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+161%** | **−17%** | −22% | −33% |
| Risco fixo de 2% por operação | 2,00% | +426% | −33% | −40% | −54% |
| Kelly ¼ | 2,95% | +923% | −44% | −56% | −73% |
| Kelly ½ | 5,91% | +2967% | −72% | −84% | −95% |
| Kelly cheio | 11,81% | +1821% | −96% | −99% | −100% |
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
