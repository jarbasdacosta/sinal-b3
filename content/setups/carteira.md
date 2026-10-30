---
title: Carteira de setups
date: 2026-10-30
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 30/10/2026 18:42 BRT · dados de 01/11/2021 a 29/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 10 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 40.639** (+33% ao ano · pior queda −5% · Sharpe 1,62)
> - CDI: **R\$ 18.156** (+13% ao ano) · Ibovespa: **R\$ 16.029** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pôr do Sol (17h45) + Pullback na Média + Rompimento da Bollinger** — R\$ 33.620, +28% ao ano, pior queda −2%. **Arriscando 1% por operação: R\$ 1.546.247, +177% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+0,9%** em 3 pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| # | Setup | Sharpe | Retorno ÷ queda | Teste ÷ treino | Meses > CDI | Correlação | Op./mês |
|---|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | 1,61 | 4,1 | 150% | 72% | 0,16 | 12,6 |
| 2º | [**Bollinger**](rompimento-da-bollinger) | 1,61 | 3,5 | 150% | 65% | 0,19 | 4,2 |
| 3º | [**Pôr do sol**](por-do-sol) | 1,11 | 1,4 | 150% | 65% | −0,01 | 8,2 |
| 4º | [**1ª vela 80**](primeira-vela-80-min) | 1,12 | 1,5 | 150% | 63% | 0,06 | 7,8 |
| 5º | [**ADX**](adx-da-manha) | 1,04 | 1,6 | 150% | 63% | 0,17 | 29,4 |
| 6º | [**Tendência**](tendencia-forte-do-dia) | 1,33 | 2,2 | 90% | 60% | 0,22 | 28,8 |
| 7º | [**Pullback**](pullback-na-media) | 1,20 | 2,8 | 28% | 60% | −0,08 | 5,0 |
| 8º | [**MACD**](macd-na-tendencia) | 0,95 | 1,1 | 150% | 63% | 0,20 | 14,7 |
| 9º | [**Onda**](vai-na-onda) | 0,73 | 0,9 | 150% | 57% | 0,11 | 19,4 |
| 10º | [**Quinta**](primeira-vela-de-quinta) | 0,88 | 1,1 | 62% | 50% | −0,08 | 1,8 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| # | Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | +43% | **+68%** | −7% | **−11%** | 3 op · +0,96R |
| 2º | [**Bollinger**](rompimento-da-bollinger) | +26% | **+52%** | −4% | **−7%** | sem operações |
| 3º | [**Pôr do sol**](por-do-sol) | +17% | **+20%** | −3% | **−3%** | 1 op · +0,17R |
| 4º | [**1ª vela 80**](primeira-vela-80-min) | +32% | **+47%** | −13% | **−14%** | 3 op · +0,91R |
| 5º | [**ADX**](adx-da-manha) | +38% | **+66%** | −15% | **−31%** | 6 op · +0,55R |
| 6º | [**Tendência**](tendencia-forte-do-dia) | +48% | **+72%** | −16% | **−24%** | 3 op · +2,14R |
| 7º | [**Pullback**](pullback-na-media) | +26% | **+32%** | −5% | **−9%** | sem operações |
| 8º | [**MACD**](macd-na-tendencia) | +31% | **+40%** | −17% | **−11%** | 4 op · +0,48R |
| 9º | [**Onda**](vai-na-onda) | +30% | **+41%** | −19% | **−20%** | 3 op · +0,54R |
| 10º | [**Quinta**](primeira-vela-de-quinta) | +17% | **+18%** | −4% | **−3%** | sem operações |

- **IFR de Tendência:** entra na força medida pelo IFR · 10h–11h e 14h–16h
- **Rompimento da Bollinger:** rompimento da banda de Bollinger a favor da tendência · 10h15–11h e 14h–17h30
- **Pôr do Sol (17h45):** scalp no fim do pregão, a favor do dia · 17h50 às 18h10
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
| ⭐ **Recomendada** (IFR + Pôr do sol + Pullback + Bollinger) | 1831 | 39,7% | 523 pts | 231 pts | 2,27 | **68,0 pts** | +0,26 R | 124.568 pts | R\$ 24.914 |
| [ADX](adx-da-manha) | 1792 | 18,4% | 1.113 pts | 213 pts | 5,22 | **30,3 pts** | +0,14 R | 54.278 pts | R\$ 10.856 |
| [IFR](ifr-de-tendencia) | 771 | 32,6% | 815 pts | 275 pts | 2,97 | **80,1 pts** | +0,28 R | 61.777 pts | R\$ 12.355 |
| [MACD](macd-na-tendencia) | 898 | 22,0% | 998 pts | 225 pts | 4,45 | **45,1 pts** | +0,13 R | 40.484 pts | R\$ 8.097 |
| [Pôr do sol](por-do-sol) | 498 | 53,2% | 120 pts | 101 pts | 1,19 | **16,6 pts** | +0,06 R | 8.244 pts | R\$ 1.649 |
| [1ª vela 80](primeira-vela-80-min) | 475 | 21,7% | 1.357 pts | 262 pts | 5,17 | **88,6 pts** | +0,30 R | 42.092 pts | R\$ 8.418 |
| [Quinta](primeira-vela-de-quinta) | 108 | 63,9% | 396 pts | 469 pts | 0,84 | **83,4 pts** | +0,23 R | 9.006 pts | R\$ 1.801 |
| [Pullback](pullback-na-media) | 303 | 38,0% | 729 pts | 300 pts | 2,43 | **90,7 pts** | +0,28 R | 27.482 pts | R\$ 5.496 |
| [Bollinger](rompimento-da-bollinger) | 259 | 36,7% | 622 pts | 195 pts | 3,18 | **104,5 pts** | +0,60 R | 27.064 pts | R\$ 5.413 |
| [Tendência](tendencia-forte-do-dia) | 1754 | 34,5% | 721 pts | 317 pts | 2,28 | **41,9 pts** | +0,13 R | 73.564 pts | R\$ 14.713 |
| [Onda](vai-na-onda) | 1185 | 35,4% | 882 pts | 429 pts | 2,05 | **35,4 pts** | +0,11 R | 41.939 pts | R\$ 8.388 |
| Todos os 10 juntos | 8043 | 30,5% | 782 pts | 274 pts | 2,86 | **48,0 pts** | +0,17 R | 385.931 pts | R\$ 77.186 |

*Taxa de acerto = operações no lucro ÷ total. Payoff = ganho médio ÷ perda média. **Expectativa matemática** = quanto a operação rende em média (acerto × ganho médio − erro × perda média); em **R** é o mesmo em múltiplos do risco (stop + custo), que é o que o tamanho de 1% usa. Lucro total em pontos, já com o custo de 15 pontos por operação.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes:

| Perfil | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano · queda | Sharpe treino → teste |
|---|---|---|---|---|---|
| ⭐ **Equilíbrio** (recomendada) | IFR + Pôr do sol + Pullback + Bollinger | **+177% · −17,2%** | +43% · −3,5% | +28% · −1,6% | 2,38 → 2,25 |
| 📈 Maior retorno | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% · −16,1% | 1,58 → 1,20 |
| 🛡️ Menor queda | Pôr do sol + Bollinger | **+61% · −7,9%** | +35% · −3,1% | +21% · −1,2% | 1,52 → 2,15 |

*R\$ 10 mil viraram, na recomendada: R\$ 33.620 com 1 contrato por R\$ 10 mil · R\$ 59.376 com 1% dividido entre os setups · **R\$ 1.546.247 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · MACD = MACD na Tendência · Pôr do sol = Pôr do Sol (17h45) · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

**Por que a recomendada é IFR de Tendência + Pôr do Sol (17h45) + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios ao mesmo tempo — Sharpe 2,29, rende 9,4× acima do CDI para cada 1% de pior queda, e o Sharpe ficou em 2,38 no treino e 2,25 no teste (não depende de um período só). A correlação média entre os setups dela é −0,04: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, MACD na Tendência, Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+191% · −17,3%** | +38% · −2,5% | +26% | −1,2% | 10,8 | 2,56 → 2,30 | +20% | −0,01 |
| 2 | IFR + Pôr do sol + Pullback + Bollinger ⭐ | **+177% · −17,2%** | +43% · −3,5% | +28% | −1,6% | 9,4 | 2,38 → 2,25 | +21% | −0,04 |
| 3 | IFR + Quinta + Pullback + Bollinger ⚠️ | **+174% · −17,1%** | +43% · −3,5% | +28% | −1,6% | 9,2 | 2,52 → 2,18 | +20% | −0,01 |
| 4 | IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+119% · −13,0%** | +34% · −2,6% | +25% | −1,5% | 8,5 | 2,40 → 2,04 | +19% | −0,04 |
| 5 | IFR + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+249% · −20,5%** | +44% · −3,3% | +29% | −2,1% | 7,5 | 2,15 → 2,31 | +23% | −0,04 |
| 6 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+180% · −16,5%** | +37% · −2,7% | +27% | −1,6% | 8,8 | 2,03 → 2,23 | +21% | −0,07 |
| 7 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+252% · −20,5%** | +45% · −3,2% | +29% | −2,1% | 7,5 | 2,07 → 2,35 | +22% | −0,01 |
| 8 | IFR + Pullback + Bollinger | **+161% · −17,1%** | +52% · −5,1% | +32% | −2,6% | 7,2 | 2,34 → 2,13 | +22% | 0,00 |
| 9 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+156% · −15,3%** | +34% · −2,5% | +24% | −1,3% | 8,1 | 2,01 → 2,21 | +20% | −0,03 |
| 10 | IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+233% · −20,4%** | +51% · −4,4% | +32% | −3,1% | 6,3 | 2,02 → 2,26 | +25% | 0,01 |
| 11 | IFR + Pôr do sol + Pullback | **+108% · −12,9%** | +40% · −3,5% | +28% | −1,8% | 8,4 | 2,21 → 1,97 | +20% | −0,11 |
| 12 | IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+165% · −16,4%** | +42% · −3,3% | +30% | −2,2% | 7,7 | 1,98 → 2,13 | +23% | −0,14 |
| 13 | Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+98% · −9,1%** | +31% · −1,9% | +21% | −1,3% | 6,2 | 2,56 → 1,94 | +17% | −0,01 |
| 14 | IFR + Quinta + Pullback ⚠️ | **+106% · −12,8%** | +39% · −3,5% | +29% | −2,0% | 8,1 | 2,34 → 1,91 | +19% | −0,09 |
| 15 | Pôr do sol + Quinta + Bollinger ⚠️ | **+69% · −8,5%** | +30% · −1,6% | +20% | −0,8% | 8,1 | 1,92 → 2,11 | +17% | 0,05 |
| 16 | IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+149% · −17,1%** | +39% · −3,3% | +25% | −2,2% | 5,7 | 2,01 → 2,26 | +19% | 0,05 |
| 17 | IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+167% · −16,4%** | +42% · −3,2% | +30% | −2,1% | 8,0 | 1,90 → 2,16 | +22% | −0,08 |
| 18 | 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+142% · −15,2%** | +38% · −3,1% | +25% | −2,0% | 6,4 | 1,95 → 2,07 | +22% | −0,07 |
| 19 | Pôr do sol + Pullback + Bollinger | **+89% · −9,1%** | +35% · −2,5% | +23% | −1,6% | 6,0 | 2,30 → 1,89 | +18% | −0,08 |
| 20 | IFR + Quinta + Bollinger ⚠️ | **+135% · −17,4%** | +46% · −4,8% | +28% | −2,9% | 5,3 | 1,93 → 2,12 | +22% | 0,05 |
| 21 | Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+144% · −14,2%** | +38% · −3,1% | +25% | −2,1% | 6,0 | 1,85 → 2,14 | +21% | −0,03 |
| 22 | IFR + 1ª vela 80 + Pullback ⚠️ | **+152% · −16,3%** | +50% · −4,7% | +34% | −3,0% | 7,2 | 1,84 → 2,07 | +26% | −0,13 |
| 23 | Pôr do sol + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+253% · −27,3%** | +46% · −4,8% | +30% | −3,3% | 5,2 | 2,05 → 1,90 | +23% | 0,02 |
| 24 | IFR + Pullback | **+97% · −12,9%** | +51% · −5,9% | +35% | −3,5% | 6,2 | 2,15 → 1,83 | +21% | −0,17 |
| 25 | 1ª vela 80 + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+250% · −29,1%** | +45% · −4,9% | +30% | −3,3% | 5,2 | 2,13 → 1,87 | +22% | −0,01 |
| 26 | IFR + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+362% · −35,7%** | +56% · −6,7% | +35% | −5,0% | 4,6 | 2,09 → 1,99 | +25% | 0,09 |
| 27 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+276% · −30,2%** | +49% · −5,2% | +34% | −4,2% | 5,0 | 2,02 → 1,91 | +25% | 0,01 |
| 28 | IFR + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+273% · −30,2%** | +48% · −5,2% | +34% | −4,2% | 5,0 | 2,08 → 1,89 | +24% | −0,04 |
| 29 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+217% · −20,8%** | +41% · −3,2% | +27% | −2,6% | 5,3 | 1,72 → 2,33 | +21% | 0,04 |
| 30 | Quinta + Pullback + Bollinger ⚠️ | **+87% · −8,2%** | +34% · −2,4% | +23% | −1,6% | 6,1 | 2,51 → 1,71 | +17% | −0,02 |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+10%* | *−20,9%* | — | — | — | — | — | — |

> [!example]- Combinações 31 a 60 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 31 | IFR + Pôr do sol + Bollinger | **+137% · −16,7%** | +47% · −4,8% | +28% | −3,3% | 4,8 | 1,79 → 2,21 | +21% | 0,04 |
> | 32 | IFR + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+288% · −33,2%** | +49% · −6,0% | +32% | −4,4% | 4,4 | 2,34 → 1,86 | +21% | 0,06 |
> | 33 | IFR + Pôr do sol + Pullback + Bollinger + Tendência | **+291% · −33,3%** | +50% · −6,0% | +32% | −4,4% | 4,4 | 2,27 → 1,89 | +22% | 0,06 |
> | 34 | IFR + MACD + Quinta + Pullback + Bollinger ⚠️ | **+227% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 4,5 | 1,93 → 1,92 | +23% | 0,04 |
> | 35 | IFR + Pôr do sol + Quinta ⚠️ | **+87% · −13,2%** | +35% · −4,0% | +25% | −2,2% | 5,6 | 1,76 → 2,01 | +18% | 0,03 |
> | 36 | ADX + IFR + Pôr do sol + Pullback + Bollinger | **+280% · −33,7%** | +50% · −6,1% | +30% | −3,7% | 4,7 | 1,76 → 2,18 | +19% | 0,05 |
> | 37 | ADX + IFR + Quinta + Pullback + Bollinger ⚠️ | **+277% · −34,9%** | +50% · −6,4% | +30% | −4,1% | 4,2 | 1,85 → 2,14 | +20% | 0,08 |
> | 38 | IFR + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+214% · −27,6%** | +42% · −4,7% | +30% | −3,6% | 4,9 | 2,27 → 1,76 | +20% | 0,02 |
> | 39 | IFR + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+319% · −35,3%** | +53% · −6,6% | +34% | −4,9% | 4,2 | 1,89 → 1,98 | +26% | 0,09 |
> | 40 | Pôr do sol + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+193% · −24,7%** | +39% · −4,2% | +27% | −2,9% | 4,8 | 2,38 → 1,72 | +19% | 0,03 |
> | 41 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+182% · −29,7%** | +38% · −5,3% | +28% | −2,6% | 6,0 | 2,03 → 1,76 | +22% | −0,04 |
> | 42 | Pôr do sol + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+220% · −26,8%** | +42% · −4,3% | +28% | −3,2% | 4,7 | 1,83 → 1,92 | +24% | 0,05 |
> | 43 | IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+256% · −30,1%** | +57% · −6,9% | +38% | −5,7% | 4,4 | 1,98 → 1,85 | +25% | 0,02 |
> | 44 | IFR + MACD + Pôr do sol + Pullback + Bollinger | **+230% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 4,4 | 1,83 → 1,96 | +22% | 0,04 |
> | 45 | 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+234% · −28,8%** | +52% · −6,5% | +33% | −4,6% | 4,5 | 2,01 → 1,83 | +23% | 0,05 |
> | 46 | MACD + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+144% · −16,2%** | +33% · −2,1% | +23% | −2,4% | 4,4 | 1,93 → 1,86 | +19% | 0,00 |
> | 47 | IFR + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+255% · −32,9%** | +46% · −5,9% | +30% | −4,3% | 4,0 | 2,06 → 1,90 | +23% | 0,10 |
> | 48 | IFR + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+323% · −35,3%** | +53% · −6,6% | +33% | −4,9% | 4,2 | 1,83 → 2,01 | +27% | 0,15 |
> | 49 | Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+92% · −18,6%** | +30% · −3,8% | +23% | −1,5% | 7,0 | 1,76 → 1,86 | +19% | −0,08 |
> | 50 | Pullback + Bollinger | **+78% · −8,6%** | +43% · −4,0% | +26% | −2,1% | 6,1 | 2,24 → 1,64 | +17% | −0,05 |
> | 51 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+241% · −29,8%** | +45% · −5,1% | +32% | −4,1% | 4,6 | 1,81 → 1,92 | +26% | 0,04 |
> | 52 | 1ª vela 80 + Pullback + Bollinger ⚠️ | **+130% · −15,3%** | +45% · −4,1% | +28% | −3,6% | 4,3 | 1,78 → 2,00 | +24% | −0,03 |
> | 53 | ADX + IFR + Pullback + Bollinger | **+259% · −34,2%** | +58% · −7,9% | +34% | −4,7% | 4,4 | 1,71 → 2,10 | +21% | 0,13 |
> | 54 | ADX + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+344% · −38,7%** | +57% · −6,9% | +34% | −4,0% | 5,2 | 1,61 → 2,22 | +23% | 0,10 |
> | 55 | IFR + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+163% · −19,5%** | +36% · −3,2% | +27% | −2,9% | 4,7 | 1,81 → 1,83 | +20% | −0,01 |
> | 56 | IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+199% · −20,9%** | +47% · −4,4% | +30% | −3,7% | 4,5 | 1,66 → 2,23 | +24% | 0,03 |
> | 57 | IFR + Pullback + Bollinger + Tendência | **+270% · −33,2%** | +58% · −8,0% | +36% | −5,9% | 3,9 | 2,23 → 1,82 | +22% | 0,13 |
> | 58 | IFR + Bollinger | **+124% · −16,6%** | +61% · −7,7% | +34% | −4,8% | 4,5 | 1,70 → 2,06 | +26% | 0,23 |
> | 59 | Quinta + Bollinger ⚠️ | **+60% · −8,4%** | +35% · −2,8% | +21% | −1,5% | 5,8 | 1,82 → 1,77 | +18% | 0,01 |
> | 60 | ADX + IFR + Pullback + Bollinger + Tendência | **+384% · −45,8%** | +62% · −9,5% | +37% | −6,3% | 3,8 | 1,89 → 1,94 | +25% | 0,19 |

> [!example]- Combinações 61 a 90 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 61 | ADX + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+258% · −34,2%** | +49% · −6,0% | +32% | −3,8% | 5,0 | 1,58 → 2,12 | +21% | −0,02 |
> | 62 | Pôr do sol + Bollinger | **+61% · −7,9%** | +35% · −3,1% | +21% | −1,2% | 7,1 | 1,52 → 2,15 | +17% | −0,06 |
> | 63 | IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+202% · −20,8%** | +47% · −4,4% | +30% | −3,7% | 4,5 | 1,57 → 2,28 | +23% | 0,10 |
> | 64 | ADX + IFR + Pôr do sol + Pullback + Tendência | **+297% · −42,6%** | +54% · −8,0% | +35% | −5,5% | 4,0 | 1,83 → 1,87 | +24% | 0,08 |
> | 65 | IFR + Quinta + Pullback + Tendência ⚠️ | **+197% · −27,5%** | +48% · −6,1% | +34% | −4,9% | 4,2 | 2,23 → 1,69 | +20% | 0,02 |
> | 66 | IFR + Pôr do sol + Pullback + Tendência | **+199% · −27,6%** | +48% · −6,1% | +34% | −5,0% | 4,2 | 2,15 → 1,71 | +21% | 0,03 |
> | 67 | 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+166% · −31,1%** | +43% · −7,3% | +31% | −3,7% | 5,0 | 1,99 → 1,68 | +22% | −0,11 |
> | 68 | Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+169% · −29,2%** | +44% · −6,8% | +31% | −3,7% | 5,0 | 1,91 → 1,70 | +23% | −0,04 |
> | 69 | ADX + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+358% · −44,2%** | +61% · −8,8% | +38% | −6,1% | 4,2 | 1,71 → 1,95 | +28% | 0,09 |
> | 70 | IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+300% · −35,2%** | +62% · −8,6% | +38% | −6,5% | 3,8 | 1,79 → 1,95 | +29% | 0,23 |
> | 71 | IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+140% · −15,9%** | +38% · −3,5% | +27% | −2,6% | 5,6 | 1,51 → 2,16 | +21% | −0,01 |
> | 72 | IFR + MACD + Pullback + Bollinger | **+212% · −25,7%** | +49% · −5,6% | +32% | −4,8% | 3,9 | 1,79 → 1,87 | +24% | 0,11 |
> | 73 | Pôr do sol + Pullback + Bollinger + Tendência | **+179% · −24,6%** | +44% · −5,4% | +29% | −3,9% | 4,2 | 2,24 → 1,66 | +19% | 0,02 |
> | 74 | IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+223% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 4,1 | 1,76 → 1,85 | +27% | 0,02 |
> | 75 | 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+203% · −27,0%** | +48% · −5,9% | +31% | −4,5% | 4,0 | 1,78 → 1,84 | +25% | 0,04 |
> | 76 | ADX + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+261% · −32,9%** | +49% · −5,9% | +32% | −3,7% | 5,0 | 1,51 → 2,15 | +20% | −0,00 |
> | 77 | ADX + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+205% · −33,9%** | +43% · −6,3% | +28% | −4,2% | 3,7 | 1,74 → 2,05 | +18% | 0,02 |
> | 78 | Quinta + Pullback + Bollinger + Tendência ⚠️ | **+177% · −24,6%** | +44% · −5,2% | +29% | −3,8% | 4,3 | 2,34 → 1,62 | +18% | 0,03 |
> | 79 | ADX + IFR + Quinta + Pullback + Tendência ⚠️ | **+294% · −44,1%** | +54% · −8,0% | +35% | −5,9% | 3,7 | 1,89 → 1,84 | +23% | 0,09 |
> | 80 | ADX + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+343% · −43,8%** | +58% · −8,4% | +35% | −5,5% | 4,0 | 1,72 → 1,94 | +26% | 0,12 |
> | 81 | IFR + MACD + Quinta + Pullback ⚠️ | **+148% · −19,4%** | +40% · −4,4% | +29% | −3,6% | 4,6 | 1,77 → 1,74 | +22% | −0,02 |
> | 82 | IFR + Pôr do sol + Bollinger + Tendência | **+239% · −32,8%** | +54% · −7,9% | +33% | −5,8% | 3,5 | 1,94 → 1,86 | +24% | 0,16 |
> | 83 | IFR + Quinta + Bollinger + Tendência ⚠️ | **+235% · −32,8%** | +53% · −7,8% | +34% | −5,8% | 3,6 | 2,02 → 1,82 | +23% | 0,14 |
> | 84 | IFR + Quinta ⚠️ | **+76% · −11,3%** | +42% · −5,2% | +30% | −3,6% | 4,7 | 1,66 → 1,85 | +22% | −0,08 |
> | 85 | IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+226% · −29,7%** | +53% · −6,8% | +35% | −5,6% | 4,0 | 1,70 → 1,87 | +28% | 0,12 |
> | 86 | ADX + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+258% · −41,9%** | +50% · −7,0% | +33% | −4,7% | 4,2 | 1,69 → 1,84 | +25% | −0,01 |
> | 87 | Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+206% · −26,8%** | +49% · −5,9% | +31% | −4,5% | 4,0 | 1,70 → 1,87 | +25% | 0,12 |
> | 88 | ADX + Pôr do sol + Pullback + Bollinger + Tendência | **+282% · −43,0%** | +51% · −7,3% | +31% | −5,3% | 3,5 | 1,86 → 1,85 | +23% | 0,08 |
> | 89 | 1ª vela 80 + Quinta + Pullback ⚠️ | **+81% · −18,6%** | +33% · −5,6% | +25% | −2,2% | 5,5 | 1,68 → 1,70 | +21% | −0,22 |
> | 90 | ADX + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+237% · −36,9%** | +46% · −6,5% | +28% | −3,5% | 4,4 | 1,52 → 2,09 | +20% | 0,03 |

> [!example]- Combinações 91 a 120 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 91 | IFR + MACD + Pôr do sol + Pullback | **+151% · −19,5%** | +40% · −4,4% | +29% | −3,6% | 4,6 | 1,67 → 1,77 | +21% | −0,02 |
> | 92 | ADX + IFR + Pullback + Tendência | **+275% · −45,9%** | +63% · −10,9% | +40% | −7,3% | 3,7 | 1,79 → 1,81 | +25% | 0,16 |
> | 93 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+262% · −40,0%** | +50% · −6,9% | +33% | −4,7% | 4,3 | 1,63 → 1,86 | +24% | 0,02 |
> | 94 | ADX + IFR + 1ª vela 80 + Pullback ⚠️ | **+241% · −33,5%** | +57% · −7,7% | +36% | −4,8% | 4,8 | 1,47 → 2,08 | +22% | 0,02 |
> | 95 | IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+172% · −27,1%** | +44% · −6,0% | +31% | −4,8% | 3,8 | 1,93 → 1,73 | +23% | 0,09 |
> | 96 | ADX + IFR + Quinta + Pullback ⚠️ | **+188% · −32,5%** | +49% · −7,8% | +31% | −5,1% | 3,6 | 1,69 → 1,96 | +19% | 0,03 |
> | 97 | IFR + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+214% · −22,5%** | +42% · −3,4% | +30% | −4,6% | 3,8 | 1,67 → 1,92 | +24% | −0,04 |
> | 98 | Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+153% · −24,1%** | +40% · −5,0% | +27% | −3,7% | 3,7 | 2,03 → 1,70 | +21% | 0,08 |
> | 99 | IFR + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+292% · −28,5%** | +49% · −4,9% | +32% | −5,6% | 3,4 | 1,71 → 2,01 | +25% | 0,10 |
> | 100 | IFR + 1ª vela 80 + Bollinger ⚠️ | **+185% · −20,8%** | +57% · −6,4% | +34% | −5,4% | 3,9 | 1,50 → 2,18 | +26% | 0,20 |
> | 101 | ADX + IFR + Pôr do sol + Pullback | **+191% · −33,5%** | +49% · −7,7% | +31% | −4,8% | 3,8 | 1,60 → 2,00 | +18% | −0,01 |
> | 102 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+241% · −35,7%** | +46% · −6,1% | +28% | −3,5% | 4,4 | 1,45 → 2,13 | +19% | 0,04 |
> | 103 | ADX + IFR + Quinta + Bollinger + Tendência ⚠️ | **+341% · −45,4%** | +58% · −9,3% | +35% | −6,2% | 3,6 | 1,69 → 1,94 | +26% | 0,21 |
> | 104 | MACD + Quinta + Pullback + Bollinger ⚠️ | **+130% · −16,2%** | +36% · −2,8% | +25% | −3,4% | 3,6 | 1,89 → 1,73 | +21% | 0,00 |
> | 105 | Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+144% · −23,4%** | +39% · −5,0% | +29% | −3,6% | 4,4 | 1,66 → 1,73 | +24% | −0,00 |
> | 106 | IFR + 1ª vela 80 + Quinta ⚠️ | **+127% · −14,2%** | +45% · −4,3% | +31% | −3,8% | 4,8 | 1,43 → 2,05 | +24% | −0,11 |
> | 107 | IFR + Pullback + Tendência | **+183% · −27,9%** | +59% · −8,7% | +39% | −7,2% | 3,7 | 2,11 → 1,64 | +21% | 0,10 |
> | 108 | ADX + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+243% · −35,0%** | +47% · −6,1% | +28% | −3,7% | 4,1 | 1,43 → 2,18 | +18% | 0,11 |
> | 109 | MACD + Pôr do sol + Pullback + Bollinger | **+132% · −16,2%** | +37% · −3,1% | +25% | −3,5% | 3,5 | 1,74 → 1,80 | +20% | −0,01 |
> | 110 | ADX + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+278% · −44,5%** | +51% · −7,8% | +31% | −5,7% | 3,2 | 1,93 → 1,82 | +22% | 0,11 |
> | 111 | IFR + Pôr do sol | **+78% · −12,3%** | +43% · −5,9% | +30% | −3,8% | 4,4 | 1,51 → 1,93 | +20% | −0,03 |
> | 112 | IFR + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+217% · −22,5%** | +42% · −3,5% | +30% | −4,6% | 3,8 | 1,60 → 1,94 | +23% | 0,00 |
> | 113 | 1ª vela 80 + Pullback + Tendência ⚠️ | **+154% · −30,8%** | +52% · −10,2% | +36% | −5,5% | 4,2 | 1,87 → 1,62 | +23% | −0,09 |
> | 114 | Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+83% · −17,6%** | +34% · −5,3% | +25% | −2,5% | 4,9 | 1,57 → 1,76 | +20% | −0,12 |
> | 115 | ADX + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+301% · −39,6%** | +53% · −7,2% | +32% | −3,8% | 4,9 | 1,32 → 2,20 | +22% | 0,12 |
> | 116 | ADX + IFR + MACD + Pullback + Bollinger | **+317% · −41,1%** | +55% · −7,7% | +33% | −5,2% | 4,0 | 1,52 → 1,98 | +22% | 0,16 |
> | 117 | ADX + IFR + Pôr do sol + Bollinger + Tendência | **+345% · −45,4%** | +58% · −9,4% | +35% | −6,2% | 3,5 | 1,63 → 1,97 | +25% | 0,20 |
> | 118 | IFR + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+309% · −37,6%** | +53% · −7,2% | +37% | −6,7% | 3,6 | 1,74 → 1,76 | +28% | 0,12 |
> | 119 | Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+119% · −14,7%** | +34% · −2,6% | +23% | −2,3% | 4,5 | 1,36 → 2,15 | +16% | 0,03 |
> | 120 | ADX + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+186% · −31,8%** | +40% · −5,9% | +25% | −3,8% | 3,1 | 1,74 → 2,00 | +17% | 0,05 |

> [!example]- Combinações 121 a 150 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 121 | MACD + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+291% · −35,0%** | +50% · −6,5% | +33% | −5,8% | 3,5 | 1,77 → 1,75 | +26% | 0,13 |
> | 122 | ADX + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+412% · −48,2%** | +65% · −10,1% | +38% | −6,8% | 3,7 | 1,54 → 2,02 | +28% | 0,27 |
> | 123 | ADX + Pullback + Bollinger + Tendência | **+261% · −46,3%** | +59% · −11,3% | +35% | −6,7% | 3,3 | 1,81 → 1,78 | +23% | 0,18 |
> | 124 | IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+129% · −15,0%** | +45% · −4,6% | +31% | −3,8% | 4,7 | 1,34 → 2,10 | +23% | 0,05 |
> | 125 | ADX + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+318% · −43,8%** | +57% · −8,7% | +36% | −6,0% | 3,9 | 1,51 → 1,95 | +27% | 0,10 |
> | 126 | IFR + 1ª vela 80 + Tendência ⚠️ | **+208% · −29,7%** | +64% · −9,6% | +42% | −8,0% | 3,6 | 1,65 → 1,81 | +30% | 0,20 |
> | 127 | ADX + IFR + MACD + Quinta + Pullback ⚠️ | **+237% · −36,6%** | +47% · −6,4% | +31% | −4,4% | 4,3 | 1,49 → 1,89 | +21% | 0,05 |
> | 128 | ADX + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+305% · −38,7%** | +53% · −7,4% | +32% | −3,6% | 5,2 | 1,26 → 2,24 | +21% | 0,14 |
> | 129 | IFR + Bollinger + Tendência | **+220% · −32,8%** | +66% · −11,0% | +39% | −8,3% | 3,2 | 1,89 → 1,78 | +25% | 0,33 |
> | 130 | ADX + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+262% · −40,7%** | +51% · −7,9% | +33% | −5,5% | 3,6 | 1,61 → 1,88 | +23% | 0,12 |
> | 131 | Pullback + Bollinger + Tendência | **+164% · −24,6%** | +53% · −7,5% | +33% | −5,8% | 3,6 | 2,19 → 1,56 | +19% | 0,09 |
> | 132 | ADX + IFR + Pullback | **+174% · −31,8%** | +59% · −10,0% | +36% | −6,2% | 3,8 | 1,54 → 1,91 | +20% | 0,06 |
> | 133 | ADX + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+322% · −43,6%** | +58% · −8,6% | +36% | −6,0% | 3,9 | 1,46 → 1,97 | +26% | 0,14 |
> | 134 | IFR + MACD + Pullback + Bollinger + Tendência | **+327% · −40,4%** | +54% · −8,1% | +35% | −6,9% | 3,2 | 1,88 → 1,73 | +25% | 0,20 |
> | 135 | ADX + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+222% · −36,2%** | +53% · −8,4% | +31% | −4,5% | 4,1 | 1,39 → 2,04 | +21% | 0,09 |
> | 136 | ADX + 1ª vela 80 + Pullback + Tendência ⚠️ | **+242% · −43,3%** | +58% · −10,0% | +37% | −6,4% | 3,8 | 1,59 → 1,80 | +27% | 0,04 |
> | 137 | Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+121% · −21,2%** | +36% · −4,9% | +27% | −3,5% | 4,0 | 2,23 → 1,44 | +18% | 0,01 |
> | 138 | 1ª vela 80 + Bollinger + Tendência ⚠️ | **+189% · −27,0%** | +59% · −8,4% | +36% | −6,6% | 3,5 | 1,65 → 1,79 | +28% | 0,21 |
> | 139 | ADX + IFR + Quinta + Bollinger ⚠️ | **+224% · −35,2%** | +54% · −8,0% | +31% | −4,7% | 3,9 | 1,37 → 2,09 | +20% | 0,17 |
> | 140 | IFR + MACD + Pullback | **+137% · −19,9%** | +48% · −6,4% | +34% | −5,3% | 3,9 | 1,62 → 1,68 | +25% | 0,03 |
> | 141 | ADX + IFR + Pôr do sol + Bollinger | **+227% · −34,3%** | +54% · −8,3% | +31% | −4,2% | 4,4 | 1,28 → 2,14 | +19% | 0,14 |
> | 142 | ADX + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+304% · −44,4%** | +54% · −8,6% | +33% | −5,4% | 3,7 | 1,49 → 1,95 | +26% | 0,12 |
> | 143 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+172% · −31,0%** | +39% · −4,8% | +26% | −3,2% | 4,1 | 1,40 → 1,98 | +18% | −0,03 |
> | 144 | ADX + IFR + MACD + Pôr do sol + Pullback | **+240% · −35,7%** | +48% · −6,1% | +31% | −4,4% | 4,2 | 1,42 → 1,91 | +20% | 0,03 |
> | 145 | ADX + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+226% · −33,9%** | +46% · −5,9% | +30% | −3,2% | 5,3 | 1,21 → 2,15 | +19% | 0,04 |
> | 146 | MACD + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+215% · −31,7%** | +43% · −5,8% | +31% | −5,1% | 3,6 | 1,74 → 1,64 | +25% | −0,02 |
> | 147 | IFR + Quinta + Pullback + Bollinger + Onda ⚠️ | **+227% · −25,9%** | +43% · −4,2% | +29% | −4,1% | 3,9 | 1,42 → 1,94 | +23% | 0,01 |
> | 148 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+217% · −31,5%** | +43% · −5,8% | +31% | −5,1% | 3,6 | 1,68 → 1,66 | +26% | 0,04 |
> | 149 | IFR + Quinta + Tendência ⚠️ | **+156% · −27,0%** | +53% · −8,5% | +36% | −7,0% | 3,3 | 1,88 → 1,64 | +23% | 0,11 |
> | 150 | ADX + IFR + 1ª vela 80 + Bollinger ⚠️ | **+282% · −39,0%** | +62% · −9,3% | +35% | −4,9% | 4,6 | 1,20 → 2,17 | +23% | 0,25 |

> [!example]- Combinações 151 a 180 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 151 | IFR + MACD + Quinta + Pullback + Tendência ⚠️ | **+245% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 3,4 | 1,87 → 1,63 | +23% | 0,08 |
> | 152 | ADX + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+307% · −43,4%** | +54% · −8,3% | +33% | −5,4% | 3,7 | 1,43 → 1,98 | +25% | 0,16 |
> | 153 | IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+200% · −22,4%** | +48% · −4,6% | +34% | −6,1% | 3,4 | 1,56 → 1,87 | +26% | 0,02 |
> | 154 | ADX + IFR + Bollinger + Tendência | **+321% · −45,4%** | +69% · −12,0% | +40% | −8,2% | 3,3 | 1,58 → 1,91 | +28% | 0,35 |
> | 155 | ADX + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+295% · −40,1%** | +54% · −7,3% | +35% | −5,4% | 4,0 | 1,36 → 1,97 | +23% | 0,08 |
> | 156 | IFR + Pôr do sol + Tendência | **+159% · −27,1%** | +53% · −8,6% | +36% | −7,1% | 3,3 | 1,80 → 1,68 | +25% | 0,16 |
> | 157 | ADX + MACD + Quinta + Pullback + Bollinger ⚠️ | **+222% · −39,1%** | +44% · −7,1% | +28% | −4,3% | 3,5 | 1,51 → 1,90 | +19% | 0,08 |
> | 158 | IFR + MACD + Pôr do sol + Pullback + Tendência | **+248% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 3,3 | 1,81 → 1,65 | +24% | 0,10 |
> | 159 | ADX + Pôr do sol + Pullback + Bollinger | **+172% · −31,1%** | +45% · −7,2% | +27% | −4,3% | 3,2 | 1,56 → 1,95 | +17% | 0,03 |
> | 160 | MACD + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+193% · −23,0%** | +39% · −3,6% | +27% | −4,8% | 2,9 | 1,71 → 1,93 | +23% | −0,01 |
> | 161 | IFR + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+197% · −25,4%** | +40% · −4,0% | +27% | −4,1% | 3,4 | 1,48 → 1,94 | +21% | 0,09 |
> | 162 | ADX + MACD + Pôr do sol + Pullback + Bollinger | **+225% · −38,0%** | +44% · −6,8% | +28% | −4,1% | 3,7 | 1,41 → 1,94 | +19% | 0,05 |
> | 163 | ADX + IFR + Quinta + Tendência ⚠️ | **+242% · −42,6%** | +59% · −10,2% | +37% | −7,2% | 3,4 | 1,57 → 1,81 | +26% | 0,18 |
> | 164 | MACD + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+228% · −32,6%** | +44% · −5,8% | +30% | −5,2% | 3,2 | 1,95 → 1,61 | +22% | 0,08 |
> | 165 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+230% · −39,1%** | +47% · −7,0% | +31% | −4,6% | 3,9 | 1,40 → 1,88 | +23% | 0,05 |
> | 166 | ADX + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+248% · −40,0%** | +48% · −7,3% | +29% | −5,4% | 3,1 | 1,62 → 1,87 | +22% | 0,13 |
> | 167 | IFR + Pôr do sol + Pullback + Bollinger + Onda | **+230% · −25,9%** | +43% · −4,3% | +29% | −4,1% | 3,8 | 1,35 → 1,97 | +22% | 0,02 |
> | 168 | ADX + IFR + 1ª vela 80 + Tendência ⚠️ | **+299% · −43,7%** | +68% · −11,3% | +41% | −8,0% | 3,6 | 1,42 → 1,92 | +30% | 0,23 |
> | 169 | ADX + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+207% · −41,4%** | +44% · −7,3% | +29% | −5,6% | 2,9 | 1,85 → 1,72 | +22% | 0,04 |
> | 170 | MACD + Pôr do sol + Pullback + Bollinger + Tendência | **+231% · −32,7%** | +44% · −5,9% | +30% | −5,3% | 3,2 | 1,86 → 1,64 | +23% | 0,08 |
> | 171 | 1ª vela 80 + Quinta + Tendência ⚠️ | **+130% · −25,2%** | +46% · −7,8% | +33% | −5,4% | 3,7 | 1,60 → 1,64 | +25% | −0,12 |
> | 172 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+135% · −17,0%** | +32% · −2,5% | +25% | −3,7% | 3,3 | 1,56 → 1,82 | +20% | −0,06 |
> | 173 | IFR + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+289% · −28,7%** | +50% · −4,8% | +32% | −5,0% | 3,9 | 1,29 → 2,04 | +26% | 0,08 |
> | 174 | ADX + Quinta + Pullback + Bollinger ⚠️ | **+170% · −32,4%** | +45% · −7,5% | +27% | −4,9% | 2,9 | 1,67 → 1,88 | +18% | 0,08 |
> | 175 | ADX + IFR + Pôr do sol + Tendência | **+245% · −41,8%** | +59% · −10,3% | +37% | −7,2% | 3,3 | 1,50 → 1,84 | +25% | 0,18 |
> | 176 | IFR + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+358% · −42,2%** | +58% · −8,6% | +37% | −7,4% | 3,2 | 1,56 → 1,83 | +30% | 0,30 |
> | 177 | ADX + IFR + 1ª vela 80 + Quinta ⚠️ | **+208% · −34,4%** | +53% · −7,7% | +33% | −4,4% | 4,6 | 1,15 → 2,07 | +21% | 0,04 |
> | 178 | Pôr do sol + Bollinger + Tendência | **+141% · −24,1%** | +48% · −7,4% | +30% | −5,6% | 3,1 | 1,85 → 1,64 | +22% | 0,10 |
> | 179 | ADX + IFR + Bollinger | **+209% · −34,5%** | +66% · −11,3% | +36% | −5,8% | 4,0 | 1,21 → 2,05 | +21% | 0,34 |
> | 180 | Quinta + Bollinger + Tendência ⚠️ | **+139% · −24,1%** | +48% · −7,3% | +30% | −5,6% | 3,1 | 1,97 → 1,59 | +21% | 0,08 |

> [!example]- Combinações 181 a 210 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 181 | IFR | **+68% · −11,2%** | +68% · −11,2% | +43% | −7,5% | 4,1 | 1,40 → 1,76 | +28% | — |
> | 182 | Pôr do sol + Pullback + Tendência | **+111% · −22,5%** | +41% · −7,0% | +30% | −4,5% | 3,8 | 2,08 → 1,37 | +18% | −0,02 |
> | 183 | ADX + IFR + MACD + Pullback | **+221% · −36,0%** | +55% · −8,3% | +35% | −5,9% | 3,8 | 1,38 → 1,85 | +22% | 0,10 |
> | 184 | IFR + 1ª vela 80 ⚠️ | **+116% · −14,1%** | +59% · −6,5% | +38% | −6,4% | 3,9 | 1,26 → 1,98 | +28% | 0,09 |
> | 185 | ADX + IFR + MACD + Pullback + Tendência | **+325% · −50,5%** | +59% · −10,0% | +38% | −8,0% | 3,1 | 1,60 → 1,76 | +27% | 0,19 |
> | 186 | Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+133% · −23,1%** | +47% · −7,1% | +33% | −5,3% | 3,7 | 1,52 → 1,67 | +27% | 0,06 |
> | 187 | ADX + 1ª vela 80 + Quinta + Pullback ⚠️ | **+156% · −31,6%** | +44% · −6,8% | +29% | −4,1% | 3,8 | 1,33 → 1,88 | +19% | −0,07 |
> | 188 | ADX + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+211% · −33,2%** | +53% · −8,1% | +33% | −4,1% | 4,9 | 1,09 → 2,10 | +20% | 0,09 |
> | 189 | IFR + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+272% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 3,3 | 1,53 → 1,75 | +29% | 0,12 |
> | 190 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+196% · −23,4%** | +39% · −3,7% | +27% | −5,0% | 2,8 | 1,61 → 1,97 | +22% | 0,03 |
> | 191 | IFR + MACD + Quinta + Bollinger + Tendência ⚠️ | **+288% · −40,0%** | +51% · −7,9% | +33% | −6,8% | 3,0 | 1,67 → 1,72 | +26% | 0,21 |
> | 192 | ADX + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+279% · −42,6%** | +51% · −8,2% | +31% | −5,3% | 3,5 | 1,33 → 1,98 | +22% | 0,12 |
> | 193 | IFR + Pullback + Bollinger + Tendência + Onda | **+324% · −40,6%** | +55% · −8,0% | +35% | −7,0% | 3,2 | 1,54 → 1,78 | +29% | 0,16 |
> | 194 | ADX + Pôr do sol + Pullback + Tendência | **+193% · −43,2%** | +50% · −10,1% | +33% | −6,6% | 3,0 | 1,72 → 1,67 | +23% | 0,03 |
> | 195 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+207% · −37,2%** | +43% · −6,5% | +26% | −3,1% | 4,3 | 1,09 → 2,13 | +18% | 0,08 |
> | 196 | ADX + MACD + Pullback + Bollinger + Tendência | **+316% · −50,4%** | +56% · −9,5% | +34% | −7,2% | 3,0 | 1,62 → 1,75 | +26% | 0,20 |
> | 197 | ADX + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+285% · −43,8%** | +64% · −11,0% | +37% | −7,3% | 3,3 | 1,39 → 1,91 | +28% | 0,26 |
> | 198 | ADX + Pôr do sol + Bollinger + Tendência | **+231% · −42,0%** | +55% · −9,5% | +33% | −6,2% | 3,2 | 1,49 → 1,83 | +24% | 0,17 |
> | 199 | ADX + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+160% · −33,4%** | +37% · −5,5% | +26% | −3,6% | 3,7 | 1,38 → 1,80 | +17% | −0,01 |
> | 200 | ADX + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+293% · −47,8%** | +55% · −8,7% | +36% | −6,9% | 3,3 | 1,47 → 1,77 | +27% | 0,10 |
> | 201 | Quinta + Pullback + Tendência ⚠️ | **+109% · −23,8%** | +41% · −7,0% | +30% | −4,9% | 3,6 | 2,19 → 1,33 | +17% | −0,02 |
> | 202 | MACD + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+255% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,2 | 1,54 → 1,74 | +25% | 0,13 |
> | 203 | IFR + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+211% · −22,7%** | +42% · −4,2% | +30% | −4,3% | 4,1 | 1,24 → 1,92 | +24% | −0,06 |
> | 204 | IFR + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+302% · −37,8%** | +54% · −7,2% | +37% | −6,8% | 3,5 | 1,41 → 1,80 | +31% | 0,11 |
> | 205 | 1ª vela 80 + Pullback ⚠️ | **+72% · −17,9%** | +41% · −8,7% | +29% | −4,3% | 3,9 | 1,49 → 1,59 | +24% | −0,31 |
> | 206 | IFR + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+275% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 3,3 | 1,48 → 1,77 | +29% | 0,19 |
> | 207 | MACD + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+165% · −30,1%** | +37% · −5,6% | +28% | −4,5% | 3,3 | 1,85 → 1,50 | +21% | 0,03 |
> | 208 | ADX + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+159% · −31,5%** | +44% · −6,4% | +29% | −4,1% | 3,8 | 1,26 → 1,92 | +18% | −0,04 |
> | 209 | MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+200% · −32,8%** | +49% · −8,0% | +35% | −6,8% | 3,2 | 1,64 → 1,60 | +27% | 0,07 |
> | 210 | IFR + MACD + Pôr do sol + Bollinger + Tendência | **+291% · −40,0%** | +51% · −8,0% | +33% | −6,8% | 3,0 | 1,61 → 1,75 | +27% | 0,23 |

> [!example]- Combinações 211 a 240 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 211 | Pôr do sol + Quinta + Pullback ⚠️ | **+48% · −9,1%** | +24% · −2,6% | +20% | −1,7% | 4,0 | 2,27 → 1,18 | +16% | 0,02 |
> | 212 | IFR + MACD + Pullback + Tendência | **+229% · −35,3%** | +54% · −8,6% | +37% | −8,1% | 3,1 | 1,78 → 1,59 | +25% | 0,18 |
> | 213 | ADX + MACD + Quinta + Pullback + Tendência ⚠️ | **+237% · −48,8%** | +48% · −9,4% | +33% | −6,3% | 3,1 | 1,61 → 1,66 | +24% | 0,08 |
> | 214 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+214% · −22,7%** | +43% · −4,3% | +30% | −4,1% | 4,2 | 1,18 → 1,94 | +23% | 0,00 |
> | 215 | IFR + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+162% · −20,9%** | +36% · −4,0% | +27% | −3,6% | 3,9 | 1,30 → 1,82 | +21% | −0,03 |
> | 216 | ADX + Quinta + Bollinger + Tendência ⚠️ | **+228% · −43,2%** | +55% · −9,9% | +33% | −6,8% | 2,9 | 1,57 → 1,80 | +25% | 0,19 |
> | 217 | ADX + IFR + MACD + Quinta + Bollinger ⚠️ | **+277% · −41,8%** | +51% · −8,0% | +31% | −5,1% | 3,6 | 1,23 → 1,97 | +21% | 0,19 |
> | 218 | IFR + Pullback + Bollinger + Onda | **+212% · −25,9%** | +50% · −5,6% | +32% | −5,4% | 3,5 | 1,31 → 1,90 | +25% | 0,09 |
> | 219 | IFR + Quinta + Pullback + Tendência + Onda ⚠️ | **+242% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 3,3 | 1,51 → 1,68 | +28% | 0,04 |
> | 220 | ADX + Quinta + Pullback + Tendência ⚠️ | **+190% · −44,7%** | +50% · −10,8% | +33% | −7,1% | 2,8 | 1,80 → 1,64 | +21% | 0,06 |
> | 221 | ADX + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+340% · −45,1%** | +58% · −8,9% | +35% | −5,7% | 3,9 | 1,14 → 2,03 | +24% | 0,28 |
> | 222 | MACD + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+258% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,2 | 1,47 → 1,77 | +24% | 0,19 |
> | 223 | Bollinger | **+52% · −6,9%** | +52% · −6,9% | +26% | −3,6% | 3,5 | 1,37 → 1,78 | +18% | — |
> | 224 | MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+83% · −14,4%** | +28% · −3,0% | +23% | −3,2% | 3,1 | 1,71 → 1,56 | +18% | −0,05 |
> | 225 | MACD + Pullback + Bollinger | **+119% · −16,1%** | +42% · −4,5% | +28% | −5,4% | 2,8 | 1,70 → 1,67 | +23% | 0,05 |
> | 226 | ADX + 1ª vela 80 + Quinta + Tendência ⚠️ | **+211% · −40,1%** | +54% · −9,5% | +34% | −6,3% | 3,4 | 1,35 → 1,81 | +26% | 0,03 |
> | 227 | 1ª vela 80 + Quinta + Bollinger ⚠️ | **+107% · −15,1%** | +40% · −4,1% | +25% | −3,6% | 3,4 | 1,26 → 1,99 | +15% | −0,02 |
> | 228 | ADX + Pullback + Bollinger | **+157% · −31,7%** | +54% · −9,9% | +30% | −5,8% | 3,0 | 1,49 → 1,83 | +19% | 0,14 |
> | 229 | IFR + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+216% · −34,9%** | +44% · −6,5% | +31% | −6,0% | 3,1 | 1,59 → 1,65 | +26% | 0,14 |
> | 230 | ADX + IFR + Tendência | **+226% · −45,2%** | +73% · −14,8% | +44% | −10,1% | 3,1 | 1,46 → 1,78 | +30% | 0,37 |
> | 231 | ADX + IFR + Pôr do sol + Quinta ⚠️ | **+162% · −30,5%** | +45% · −7,6% | +29% | −4,8% | 3,3 | 1,24 → 2,01 | +17% | 0,08 |
> | 232 | IFR + Tendência | **+145% · −27,0%** | +72% · −13,5% | +46% | −11,3% | 3,0 | 1,74 → 1,59 | +26% | 0,47 |
> | 233 | ADX + MACD + Pôr do sol + Pullback + Tendência | **+240% · −47,6%** | +48% · −8,8% | +32% | −6,4% | 3,1 | 1,54 → 1,68 | +24% | 0,07 |
> | 234 | IFR + Pôr do sol + Pullback + Tendência + Onda | **+244% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 3,3 | 1,46 → 1,70 | +27% | 0,08 |
> | 235 | ADX + IFR + MACD + Pôr do sol + Bollinger | **+281% · −41,0%** | +52% · −7,8% | +31% | −5,1% | 3,6 | 1,16 → 2,00 | +20% | 0,18 |
> | 236 | ADX + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+205% · −38,3%** | +43% · −6,9% | +29% | −4,9% | 3,4 | 1,28 → 1,88 | +21% | −0,03 |
> | 237 | ADX + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+214% · −38,5%** | +54% · −9,0% | +34% | −6,2% | 3,5 | 1,29 → 1,84 | +25% | 0,10 |
> | 238 | MACD + Pullback + Bollinger + Tendência | **+213% · −32,6%** | +50% · −7,9% | +33% | −7,0% | 2,9 | 1,83 → 1,56 | +23% | 0,17 |
> | 239 | ADX + IFR + 1ª vela 80 ⚠️ | **+194% · −33,8%** | +65% · −10,7% | +39% | −6,0% | 4,3 | 1,03 → 2,02 | +23% | 0,19 |
> | 240 | MACD + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+200% · −32,2%** | +41% · −5,7% | +28% | −5,2% | 2,9 | 1,62 → 1,64 | +24% | 0,12 |

> [!example]- Combinações 241 a 270 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 241 | IFR + MACD + Quinta + Bollinger ⚠️ | **+180% · −25,6%** | +45% · −5,5% | +29% | −5,5% | 3,0 | 1,43 → 1,85 | +23% | 0,14 |
> | 242 | IFR + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+253% · −29,5%** | +46% · −5,4% | +30% | −6,1% | 2,8 | 1,40 → 1,99 | +23% | 0,12 |
> | 243 | ADX + MACD + Pullback + Bollinger | **+207% · −38,5%** | +51% · −9,2% | +31% | −5,8% | 3,1 | 1,37 → 1,85 | +20% | 0,13 |
> | 244 | 1ª vela 80 + Pullback + Bollinger + Tendência + Onda ⚠️ | **+286% · −35,2%** | +51% · −6,5% | +33% | −6,2% | 3,3 | 1,37 → 1,78 | +27% | 0,12 |
> | 245 | ADX + IFR + Pullback + Bollinger + Onda | **+311% · −39,6%** | +55% · −7,7% | +33% | −6,0% | 3,4 | 1,19 → 1,97 | +23% | 0,14 |
> | 246 | ADX + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+208% · −37,2%** | +44% · −6,5% | +29% | −4,7% | 3,5 | 1,22 → 1,91 | +20% | −0,00 |
> | 247 | ADX + Pullback + Tendência | **+176% · −46,6%** | +61% · −16,1% | +38% | −8,8% | 2,9 | 1,68 → 1,60 | +23% | 0,11 |
> | 248 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+188% · −29,0%** | +40% · −5,0% | +29% | −5,0% | 3,3 | 1,44 → 1,67 | +24% | 0,07 |
> | 249 | IFR + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+199% · −25,9%** | +40% · −4,1% | +27% | −3,7% | 3,8 | 1,08 → 1,99 | +21% | 0,02 |
> | 250 | ADX + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+257% · −41,0%** | +50% · −7,6% | +33% | −5,3% | 3,8 | 1,10 → 1,96 | +22% | 0,10 |
> | 251 | ADX + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+208% · −36,5%** | +44% · −6,4% | +29% | −4,3% | 3,9 | 1,12 → 1,91 | +19% | 0,09 |
> | 252 | ADX + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+260% · −39,9%** | +51% · −7,3% | +33% | −5,0% | 4,0 | 1,04 → 1,98 | +21% | 0,14 |
> | 253 | Pôr do sol + Quinta + Tendência ⚠️ | **+91% · −18,6%** | +36% · −5,5% | +27% | −4,3% | 3,3 | 1,84 → 1,41 | +20% | 0,07 |
> | 254 | ADX + IFR + MACD + Bollinger + Tendência | **+375% · −51,2%** | +63% · −11,3% | +38% | −8,7% | 2,9 | 1,42 → 1,83 | +28% | 0,36 |
> | 255 | IFR + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+257% · −29,5%** | +46% · −5,3% | +30% | −6,1% | 2,8 | 1,33 → 2,02 | +23% | 0,16 |
> | 256 | ADX + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+348% · −49,1%** | +62% · −10,5% | +39% | −8,5% | 3,1 | 1,31 → 1,84 | +29% | 0,28 |
> | 257 | IFR + MACD + Pôr do sol + Bollinger | **+183% · −25,4%** | +45% · −5,5% | +29% | −5,5% | 3,0 | 1,33 → 1,89 | +22% | 0,15 |
> | 258 | IFR + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+355% · −42,3%** | +58% · −8,6% | +37% | −7,5% | 3,2 | 1,27 → 1,89 | +28% | 0,23 |
> | 259 | IFR + MACD + Bollinger + Tendência | **+270% · −40,0%** | +60% · −10,3% | +37% | −8,9% | 2,8 | 1,57 → 1,69 | +28% | 0,39 |
> | 260 | MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+180% · −23,8%** | +44% · −5,1% | +29% | −6,7% | 2,4 | 1,57 → 1,87 | +24% | 0,07 |
> | 261 | IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+255% · −37,2%** | +58% · −9,3% | +39% | −8,7% | 3,1 | 1,44 → 1,71 | +32% | 0,31 |
> | 262 | ADX + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+284% · −37,9%** | +54% · −7,2% | +35% | −5,7% | 3,9 | 1,07 → 1,96 | +24% | 0,08 |
> | 263 | IFR + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+186% · −23,5%** | +39% · −4,4% | +28% | −5,1% | 3,0 | 1,28 → 1,93 | +22% | 0,05 |
> | 264 | ADX + Bollinger + Tendência | **+213% · −45,6%** | +68% · −15,3% | +38% | −8,7% | 2,9 | 1,43 → 1,75 | +27% | 0,36 |
> | 265 | IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+197% · −22,8%** | +49% · −5,1% | +34% | −5,6% | 3,7 | 1,14 → 1,88 | +26% | 0,04 |
> | 266 | ADX + 1ª vela 80 + Pullback ⚠️ | **+144% · −30,9%** | +52% · −9,5% | +33% | −5,6% | 3,6 | 1,19 → 1,83 | +20% | −0,05 |
> | 267 | MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+122% · −17,1%** | +35% · −3,2% | +27% | −5,1% | 2,7 | 1,51 → 1,72 | +22% | −0,11 |
> | 268 | IFR + MACD + Pôr do sol + Quinta ⚠️ | **+126% · −21,0%** | +36% · −5,0% | +27% | −4,3% | 3,3 | 1,28 → 1,76 | +20% | 0,06 |
> | 269 | IFR + Quinta + Pullback + Onda ⚠️ | **+147% · −22,7%** | +40% · −4,9% | +29% | −4,7% | 3,5 | 1,25 → 1,74 | +23% | −0,05 |
> | 270 | ADX + IFR + Pullback + Tendência + Onda | **+315% · −49,0%** | +59% · −10,0% | +38% | −8,1% | 3,1 | 1,33 → 1,78 | +28% | 0,17 |

> [!example]- Combinações 271 a 300 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 271 | 1ª vela 80 + Tendência ⚠️ | **+120% · −24,9%** | +61% · −12,3% | +41% | −8,9% | 3,1 | 1,46 → 1,58 | +30% | 0,04 |
> | 272 | ADX + IFR + MACD + Quinta + Tendência ⚠️ | **+289% · −47,2%** | +55% · −9,8% | +36% | −7,9% | 2,9 | 1,40 → 1,76 | +26% | 0,21 |
> | 273 | Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+109% · −15,5%** | +40% · −4,2% | +25% | −4,0% | 3,1 | 1,14 → 2,08 | +15% | 0,10 |
> | 274 | IFR + Quinta + Bollinger + Tendência + Onda ⚠️ | **+288% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 3,0 | 1,36 → 1,79 | +29% | 0,12 |
> | 275 | ADX + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+193% · −36,5%** | +49% · −8,5% | +29% | −4,1% | 3,8 | 0,94 → 2,09 | +19% | 0,14 |
> | 276 | ADX + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+190% · −37,3%** | +49% · −8,8% | +29% | −4,5% | 3,5 | 1,02 → 2,04 | +19% | 0,11 |
> | 277 | ADX + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+340% · −49,6%** | +59% · −10,3% | +36% | −7,6% | 3,0 | 1,29 → 1,84 | +27% | 0,29 |
> | 278 | 1ª vela 80 + Quinta + Pullback + Tendência + Onda ⚠️ | **+209% · −32,8%** | +43% · −6,0% | +31% | −5,6% | 3,3 | 1,33 → 1,66 | +27% | −0,03 |
> | 279 | Quinta + Pullback + Bollinger + Tendência + Onda ⚠️ | **+225% · −32,9%** | +44% · −6,0% | +30% | −5,9% | 2,9 | 1,48 → 1,64 | +26% | 0,05 |
> | 280 | ADX + IFR + Pôr do sol | **+150% · −30,3%** | +54% · −9,9% | +33% | −5,9% | 3,4 | 1,08 → 1,96 | +18% | 0,08 |
> | 281 | MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+239% · −34,5%** | +54% · −8,4% | +35% | −7,6% | 2,9 | 1,43 → 1,70 | +26% | 0,31 |
> | 282 | ADX + IFR + Quinta + Pullback + Onda ⚠️ | **+230% · −34,5%** | +48% · −6,6% | +31% | −5,4% | 3,4 | 1,15 → 1,86 | +21% | 0,02 |
> | 283 | IFR + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+268% · −37,4%** | +50% · −7,1% | +35% | −6,7% | 3,3 | 1,23 → 1,80 | +28% | 0,05 |
> | 284 | IFR + Pullback + Tendência + Onda | **+226% · −35,5%** | +55% · −8,6% | +38% | −8,2% | 3,0 | 1,42 → 1,64 | +31% | 0,16 |
> | 285 | ADX + IFR + MACD + Bollinger | **+260% · −41,3%** | +60% · −10,3% | +35% | −6,8% | 3,3 | 1,12 → 1,93 | +23% | 0,33 |
> | 286 | ADX + IFR + Quinta ⚠️ | **+148% · −29,7%** | +53% · −9,9% | +33% | −6,3% | 3,2 | 1,16 → 1,91 | +19% | 0,11 |
> | 287 | IFR + MACD + Quinta + Tendência ⚠️ | **+199% · −34,8%** | +50% · −8,5% | +35% | −7,9% | 2,8 | 1,55 → 1,59 | +26% | 0,20 |
> | 288 | ADX + MACD + Quinta + Pullback ⚠️ | **+145% · −33,9%** | +42% · −7,6% | +28% | −5,0% | 3,1 | 1,33 → 1,71 | +19% | −0,01 |
> | 289 | ADX + MACD + Pôr do sol + Pullback | **+147% · −32,7%** | +42% · −7,2% | +28% | −4,7% | 3,3 | 1,23 → 1,74 | +18% | −0,04 |
> | 290 | ADX + MACD + Pullback + Tendência | **+222% · −50,7%** | +56% · −12,9% | +37% | −8,4% | 2,8 | 1,51 → 1,62 | +26% | 0,15 |
> | 291 | IFR + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+253% · −29,0%** | +46% · −4,9% | +30% | −5,4% | 3,2 | 1,04 → 2,04 | +20% | 0,04 |
> | 292 | Bollinger + Tendência | **+128% · −24,0%** | +64% · −11,8% | +37% | −9,2% | 2,6 | 1,79 → 1,53 | +23% | 0,31 |
> | 293 | ADX + IFR + MACD + Pôr do sol + Tendência | **+292% · −47,1%** | +56% · −9,9% | +36% | −7,9% | 2,9 | 1,35 → 1,77 | +25% | 0,22 |
> | 294 | IFR + Pôr do sol + Bollinger + Tendência + Onda | **+291% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 3,0 | 1,31 → 1,81 | +28% | 0,15 |
> | 295 | MACD + Quinta + Pullback + Tendência ⚠️ | **+150% · −31,4%** | +41% · −7,6% | +31% | −6,1% | 3,0 | 1,81 → 1,42 | +21% | 0,03 |
> | 296 | IFR + MACD + Pullback + Bollinger + Onda | **+265% · −33,7%** | +48% · −6,2% | +32% | −5,9% | 3,2 | 1,20 → 1,82 | +25% | 0,15 |
> | 297 | ADX + MACD + Quinta + Bollinger + Tendência ⚠️ | **+280% · −47,7%** | +52% · −9,3% | +32% | −7,0% | 2,8 | 1,40 → 1,75 | +25% | 0,21 |
> | 298 | IFR + Pôr do sol + Pullback + Onda | **+150% · −20,4%** | +41% · −4,7% | +29% | −4,7% | 3,5 | 1,18 → 1,77 | +22% | −0,01 |
> | 299 | Pullback + Tendência | **+99% · −25,6%** | +53% · −12,0% | +37% | −7,6% | 3,2 | 2,03 → 1,26 | +16% | 0,01 |
> | 300 | MACD + Pôr do sol + Pullback + Tendência | **+152% · −31,3%** | +41% · −7,5% | +31% | −6,1% | 2,9 | 1,73 → 1,45 | +23% | 0,04 |

> [!example]- Combinações 301 a 330 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 301 | IFR + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+271% · −37,4%** | +51% · −7,1% | +35% | −6,7% | 3,2 | 1,19 → 1,82 | +27% | 0,14 |
> | 302 | ADX + IFR + Pôr do sol + Pullback + Onda | **+233% · −34,6%** | +48% · −6,7% | +31% | −5,5% | 3,4 | 1,10 → 1,89 | +20% | 0,02 |
> | 303 | Pôr do sol + Pullback + Bollinger + Tendência + Onda | **+228% · −32,9%** | +44% · −6,0% | +30% | −6,0% | 2,8 | 1,42 → 1,66 | +26% | 0,07 |
> | 304 | Pôr do sol + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+212% · −32,1%** | +43% · −5,9% | +31% | −5,6% | 3,3 | 1,28 → 1,68 | +26% | 0,04 |
> | 305 | ADX + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+259% · −45,8%** | +51% · −9,0% | +34% | −6,9% | 3,1 | 1,26 → 1,77 | +26% | 0,11 |
> | 306 | ADX + IFR + MACD + 1ª vela 80 ⚠️ | **+241% · −40,4%** | +59% · −9,8% | +37% | −6,7% | 3,6 | 1,00 → 1,92 | +24% | 0,24 |
> | 307 | MACD + Quinta + Pullback ⚠️ | **+72% · −14,9%** | +31% · −4,6% | +25% | −3,9% | 3,1 | 1,65 → 1,41 | +20% | −0,10 |
> | 308 | IFR + MACD + Pôr do sol + Tendência | **+202% · −34,9%** | +50% · −8,5% | +35% | −8,0% | 2,8 | 1,48 → 1,61 | +28% | 0,24 |
> | 309 | ADX + Pôr do sol + Quinta + Tendência ⚠️ | **+167% · −39,7%** | +46% · −9,0% | +30% | −6,6% | 2,6 | 1,46 → 1,70 | +22% | 0,09 |
> | 310 | ADX + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+333% · −42,7%** | +58% · −8,3% | +35% | −5,8% | 3,8 | 0,89 → 2,05 | +23% | 0,22 |
> | 311 | ADX + MACD + 1ª vela 80 + Pullback ⚠️ | **+191% · −37,7%** | +50% · −8,9% | +33% | −6,3% | 3,2 | 1,17 → 1,83 | +22% | 0,02 |
> | 312 | ADX + 1ª vela 80 + Tendência ⚠️ | **+197% · −42,0%** | +66% · −13,6% | +40% | −9,0% | 3,1 | 1,24 → 1,77 | +30% | 0,17 |
> | 313 | IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+237% · −29,5%** | +53% · −7,0% | +33% | −8,0% | 2,6 | 1,28 → 1,95 | +24% | 0,28 |
> | 314 | IFR + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+256% · −28,3%** | +47% · −4,9% | +30% | −5,3% | 3,2 | 0,98 → 2,07 | +20% | 0,11 |
> | 315 | ADX + Pôr do sol + Quinta + Pullback ⚠️ | **+116% · −31,8%** | +36% · −7,5% | +25% | −4,9% | 2,4 | 1,51 → 1,70 | +15% | 0,02 |
> | 316 | MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+124% · −17,0%** | +36% · −3,1% | +27% | −5,4% | 2,6 | 1,41 → 1,75 | +21% | −0,05 |
> | 317 | MACD + Quinta + Bollinger + Tendência ⚠️ | **+184% · −32,1%** | +46% · −7,6% | +31% | −6,9% | 2,6 | 1,58 → 1,56 | +25% | 0,18 |
> | 318 | IFR + Quinta + Bollinger + Onda ⚠️ | **+182% · −26,2%** | +45% · −5,7% | +29% | −4,8% | 3,5 | 1,02 → 1,92 | +23% | 0,02 |
> | 319 | ADX + MACD + Pôr do sol + Bollinger + Tendência | **+283% · −46,7%** | +53% · −9,2% | +32% | −7,1% | 2,8 | 1,34 → 1,78 | +24% | 0,21 |
> | 320 | ADX + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+262% · −44,8%** | +52% · −8,7% | +34% | −6,9% | 3,1 | 1,21 → 1,79 | +25% | 0,15 |
> | 321 | MACD + Pôr do sol + Pullback | **+74% · −15,0%** | +31% · −4,6% | +25% | −4,1% | 2,9 | 1,50 → 1,47 | +19% | −0,12 |
> | 322 | MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+173% · −29,5%** | +45% · −7,0% | +32% | −6,7% | 2,9 | 1,40 → 1,60 | +26% | 0,06 |
> | 323 | ADX + IFR + MACD + Quinta ⚠️ | **+190% · −36,9%** | +50% · −8,7% | +33% | −6,0% | 3,3 | 1,07 → 1,84 | +21% | 0,14 |
> | 324 | 1ª vela 80 + Quinta + Bollinger + Tendência + Onda ⚠️ | **+252% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 3,1 | 1,17 → 1,79 | +21% | 0,06 |
> | 325 | ADX + IFR + Quinta + Bollinger + Onda ⚠️ | **+274% · −39,2%** | +52% · −7,5% | +31% | −5,5% | 3,4 | 0,96 → 1,98 | +22% | 0,11 |
> | 326 | IFR + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+215% · −35,1%** | +44% · −6,5% | +31% | −6,1% | 3,0 | 1,27 → 1,71 | +26% | 0,06 |
> | 327 | IFR + MACD + Quinta + Pullback + Onda ⚠️ | **+192% · −28,1%** | +41% · −4,8% | +30% | −5,1% | 3,3 | 1,16 → 1,71 | +24% | 0,02 |
> | 328 | ADX + IFR + Bollinger + Tendência + Onda | **+368% · −51,6%** | +64% · −11,3% | +38% | −8,8% | 2,9 | 1,19 → 1,86 | +28% | 0,28 |
> | 329 | ADX + Pullback + Bollinger + Tendência + Onda | **+307% · −47,8%** | +56% · −9,4% | +34% | −7,8% | 2,8 | 1,30 → 1,76 | +27% | 0,18 |
> | 330 | MACD + Pôr do sol + Bollinger + Tendência | **+186% · −32,2%** | +46% · −7,6% | +31% | −6,9% | 2,6 | 1,49 → 1,59 | +26% | 0,20 |

> [!example]- Combinações 331 a 360 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 331 | ADX + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+281% · −46,0%** | +55% · −8,9% | +36% | −7,5% | 3,1 | 1,18 → 1,76 | +28% | 0,10 |
> | 332 | ADX + IFR + MACD + Pôr do sol | **+193% · −35,9%** | +51% · −8,4% | +33% | −5,8% | 3,4 | 1,00 → 1,87 | +20% | 0,13 |
> | 333 | ADX + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+246% · −42,3%** | +48% · −8,1% | +29% | −5,1% | 3,2 | 0,95 → 2,00 | +19% | 0,16 |
> | 334 | ADX + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+337% · −49,4%** | +63% · −10,5% | +39% | −8,6% | 3,1 | 1,09 → 1,87 | +29% | 0,22 |
> | 335 | Pôr do sol + Quinta + Pullback + Bollinger + Onda ⚠️ | **+143% · −20,5%** | +33% · −3,4% | +23% | −3,5% | 3,0 | 1,21 → 1,76 | +20% | −0,02 |
> | 336 | ADX + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+193% · −38,8%** | +41% · −7,1% | +26% | −4,3% | 3,1 | 1,05 → 1,94 | +18% | 0,10 |
> | 337 | MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+175% · −29,3%** | +46% · −7,0% | +32% | −6,7% | 2,9 | 1,33 → 1,62 | +26% | 0,16 |
> | 338 | IFR + Pôr do sol + Bollinger + Onda | **+185% · −25,5%** | +46% · −5,5% | +29% | −4,9% | 3,4 | 0,95 → 1,95 | +23% | 0,07 |
> | 339 | Pôr do sol + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+255% · −34,7%** | +48% · −6,4% | +31% | −5,9% | 3,1 | 1,12 → 1,81 | +21% | 0,14 |
> | 340 | ADX + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+211% · −44,4%** | +45% · −7,9% | +31% | −6,3% | 2,8 | 1,31 → 1,68 | +23% | 0,11 |
> | 341 | ADX + IFR | **+136% · −29,5%** | +71% · −14,3% | +41% | −8,5% | 3,3 | 1,00 → 1,86 | +20% | 0,33 |
> | 342 | IFR + MACD + Pôr do sol + Pullback + Onda | **+194% · −28,1%** | +41% · −4,9% | +30% | −5,1% | 3,3 | 1,10 → 1,73 | +23% | 0,04 |
> | 343 | ADX + IFR + MACD + Tendência | **+271% · −49,8%** | +65% · −12,7% | +41% | −10,3% | 2,7 | 1,31 → 1,72 | +29% | 0,38 |
> | 344 | ADX + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+242% · −43,4%** | +47% · −8,5% | +29% | −5,5% | 3,0 | 1,02 → 1,97 | +20% | 0,13 |
> | 345 | IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+170% · −23,5%** | +44% · −5,2% | +31% | −6,8% | 2,7 | 1,23 → 1,85 | +24% | 0,04 |
> | 346 | ADX + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+250% · −37,5%** | +51% · −7,7% | +33% | −5,2% | 3,9 | 0,85 → 1,96 | +23% | 0,04 |
> | 347 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+184% · −22,6%** | +39% · −4,2% | +28% | −4,5% | 3,4 | 0,92 → 1,95 | +20% | −0,01 |
> | 348 | ADX + IFR + Pôr do sol + Bollinger + Onda | **+277% · −39,4%** | +52% · −7,5% | +31% | −5,6% | 3,3 | 0,90 → 2,01 | +21% | 0,12 |
> | 349 | IFR + MACD + Bollinger | **+167% · −25,4%** | +54% · −7,9% | +34% | −7,8% | 2,7 | 1,28 → 1,80 | +26% | 0,35 |
> | 350 | ADX + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+133% · −31,2%** | +40% · −7,0% | +26% | −3,5% | 3,9 | 0,86 → 1,93 | +17% | 0,02 |
> | 351 | IFR + Bollinger + Tendência + Onda | **+270% · −40,1%** | +60% · −10,3% | +38% | −9,0% | 2,7 | 1,27 → 1,76 | +32% | 0,28 |
> | 352 | ADX + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+270% · −39,0%** | +51% · −7,6% | +31% | −5,7% | 3,2 | 0,98 → 1,94 | +22% | 0,12 |
> | 353 | ADX + IFR + Pullback + Onda | **+215% · −34,5%** | +55% · −8,6% | +35% | −7,1% | 3,2 | 1,06 → 1,83 | +22% | 0,10 |
> | 354 | IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+251% · −37,3%** | +59% · −9,3% | +39% | −8,8% | 3,0 | 1,15 → 1,77 | +30% | 0,23 |
> | 355 | 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+195% · −32,4%** | +50% · −7,6% | +35% | −7,2% | 3,1 | 1,24 → 1,62 | +29% | 0,08 |
> | 356 | ADX + Pôr do sol + Quinta + Bollinger ⚠️ | **+145% · −32,7%** | +41% · −7,2% | +25% | −4,4% | 2,7 | 1,10 → 1,97 | +16% | 0,11 |
> | 357 | ADX + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+253% · −38,2%** | +51% · −7,8% | +33% | −5,3% | 3,8 | 0,80 → 1,98 | +22% | 0,10 |
> | 358 | Pullback + Bollinger + Tendência + Onda | **+210% · −32,8%** | +51% · −7,7% | +33% | −7,6% | 2,7 | 1,38 → 1,60 | +29% | 0,15 |
> | 359 | Pôr do sol + Quinta + Pullback + Tendência + Onda ⚠️ | **+161% · −27,3%** | +37% · −5,2% | +28% | −5,4% | 2,8 | 1,38 → 1,52 | +24% | 0,01 |
> | 360 | 1ª vela 80 + Quinta + Pullback + Bollinger + Onda ⚠️ | **+191% · −23,0%** | +39% · −3,9% | +27% | −5,0% | 2,8 | 1,14 → 1,89 | +19% | −0,02 |

> [!example]- Combinações 361 a 390 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 361 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+166% · −24,6%** | +36% · −4,0% | +25% | −5,2% | 2,3 | 1,22 → 1,95 | +17% | 0,07 |
> | 362 | ADX + IFR + Quinta + Tendência + Onda ⚠️ | **+281% · −47,4%** | +56% · −9,9% | +36% | −8,0% | 2,9 | 1,16 → 1,78 | +27% | 0,13 |
> | 363 | IFR + MACD + Tendência | **+185% · −34,8%** | +61% · −11,8% | +41% | −11,1% | 2,6 | 1,44 → 1,55 | +30% | 0,48 |
> | 364 | IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+173% · −23,5%** | +44% · −5,5% | +31% | −6,7% | 2,7 | 1,16 → 1,87 | +24% | 0,13 |
> | 365 | ADX + Pôr do sol + Tendência | **+154% · −42,3%** | +55% · −13,7% | +35% | −8,2% | 2,7 | 1,32 → 1,65 | +24% | 0,11 |
> | 366 | ADX + MACD + Bollinger + Tendência | **+262% · −49,9%** | +61% · −12,3% | +36% | −9,2% | 2,6 | 1,29 → 1,72 | +28% | 0,36 |
> | 367 | IFR + Pullback + Onda | **+136% · −23,4%** | +48% · −7,3% | +34% | −6,6% | 3,1 | 1,13 → 1,69 | +26% | 0,06 |
> | 368 | IFR + MACD + Pullback + Tendência + Onda | **+272% · −42,4%** | +52% · −8,6% | +36% | −8,7% | 2,7 | 1,32 → 1,62 | +30% | 0,21 |
> | 369 | ADX + Quinta + Tendência ⚠️ | **+152% · −43,4%** | +55% · −14,5% | +35% | −8,9% | 2,5 | 1,40 → 1,62 | +25% | 0,12 |
> | 370 | ADX + IFR + Pôr do sol + Tendência + Onda | **+284% · −47,5%** | +56% · −9,9% | +36% | −8,0% | 2,9 | 1,11 → 1,80 | +26% | 0,16 |
> | 371 | IFR + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+246% · −30,7%** | +47% · −5,3% | +33% | −7,0% | 2,9 | 1,09 → 1,81 | +26% | 0,11 |
> | 372 | MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+109% · −16,2%** | +33% · −3,1% | +23% | −4,0% | 2,5 | 1,26 → 1,80 | +19% | 0,06 |
> | 373 | IFR + MACD + Quinta ⚠️ | **+113% · −19,2%** | +42% · −5,8% | +30% | −6,2% | 2,9 | 1,22 → 1,66 | +23% | 0,08 |
> | 374 | ADX + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+330% · −47,9%** | +59% · −10,0% | +36% | −7,8% | 3,0 | 1,03 → 1,86 | +24% | 0,24 |
> | 375 | ADX + IFR + MACD + Pullback + Onda | **+262% · −41,4%** | +52% · −8,1% | +35% | −7,0% | 3,1 | 1,02 → 1,80 | +23% | 0,13 |
> | 376 | MACD + Pullback + Tendência | **+138% · −32,6%** | +49% · −11,0% | +35% | −8,7% | 2,6 | 1,69 → 1,37 | +23% | 0,13 |
> | 377 | IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+237% · −28,2%** | +54% · −6,4% | +34% | −7,0% | 3,0 | 0,93 → 2,00 | +21% | 0,20 |
> | 378 | MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+129% · −27,8%** | +38% · −6,5% | +28% | −6,0% | 2,6 | 1,46 → 1,45 | +24% | 0,10 |
> | 379 | ADX + MACD + 1ª vela 80 + Tendência ⚠️ | **+242% · −46,9%** | +60% · −11,5% | +38% | −9,0% | 2,8 | 1,17 → 1,73 | +29% | 0,25 |
> | 380 | Pôr do sol + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+185% · −29,3%** | +40% · −5,0% | +29% | −5,2% | 3,2 | 1,07 → 1,70 | +21% | 0,01 |
> | 381 | ADX + Quinta + Pullback + Tendência + Onda ⚠️ | **+229% · −46,5%** | +48% · −8,3% | +33% | −7,2% | 2,7 | 1,26 → 1,65 | +25% | 0,05 |
> | 382 | Pôr do sol + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+193% · −22,9%** | +39% · −3,9% | +27% | −5,0% | 2,7 | 1,08 → 1,92 | +19% | 0,03 |
> | 383 | ADX + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+178% · −38,0%** | +40% · −6,8% | +27% | −4,5% | 3,2 | 0,89 → 1,90 | +19% | 0,04 |
> | 384 | Pôr do sol + Quinta + Bollinger + Tendência + Onda ⚠️ | **+200% · −32,4%** | +41% · −5,7% | +28% | −5,5% | 2,8 | 1,21 → 1,69 | +23% | 0,05 |
> | 385 | ADX + Quinta + Pullback + Bollinger + Onda ⚠️ | **+216% · −35,3%** | +44% · −6,9% | +28% | −5,3% | 2,9 | 1,07 → 1,83 | +20% | 0,05 |
> | 386 | IFR + Quinta + Tendência + Onda ⚠️ | **+198% · −35,0%** | +50% · −8,5% | +35% | −8,1% | 2,8 | 1,23 → 1,66 | +30% | 0,08 |
> | 387 | ADX + 1ª vela 80 + Bollinger ⚠️ | **+176% · −36,7%** | +59% · −12,1% | +33% | −6,4% | 3,1 | 0,86 → 1,99 | +19% | 0,29 |
> | 388 | ADX + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+203% · −34,1%** | +45% · −6,8% | +30% | −5,0% | 3,3 | 0,85 → 1,90 | +19% | 0,02 |
> | 389 | ADX + Quinta + Pullback ⚠️ | **+103% · −30,6%** | +41% · −9,7% | +27% | −6,4% | 2,2 | 1,43 → 1,57 | +16% | 0,03 |
> | 390 | ADX + IFR + 1ª vela 80 + Onda ⚠️ | **+234% · −39,3%** | +59% · −9,7% | +37% | −6,8% | 3,6 | 0,76 → 1,93 | +24% | 0,18 |

> [!example]- Combinações 391 a 420 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 391 | MACD + Bollinger + Tendência | **+170% · −32,1%** | +56% · −10,7% | +35% | −9,7% | 2,3 | 1,45 → 1,52 | +27% | 0,41 |
> | 392 | ADX + Pôr do sol + Pullback + Tendência + Onda | **+231% · −46,0%** | +49% · −8,4% | +32% | −7,3% | 2,7 | 1,21 → 1,67 | +24% | 0,06 |
> | 393 | Pôr do sol + Tendência | **+82% · −20,0%** | +45% · −9,7% | +32% | −7,4% | 2,6 | 1,65 → 1,34 | +22% | 0,06 |
> | 394 | MACD + 1ª vela 80 + Pullback ⚠️ | **+111% · −17,3%** | +41% · −4,9% | +30% | −7,9% | 2,2 | 1,36 → 1,65 | +25% | −0,07 |
> | 395 | MACD + Pullback + Bollinger + Tendência + Onda | **+261% · −40,0%** | +49% · −7,8% | +33% | −7,8% | 2,6 | 1,29 → 1,61 | +29% | 0,20 |
> | 396 | Quinta + Tendência ⚠️ | **+80% · −21,7%** | +45% · −9,8% | +32% | −7,4% | 2,7 | 1,77 → 1,29 | +19% | −0,07 |
> | 397 | IFR + MACD + Pôr do sol | **+115% · −20,2%** | +43% · −6,6% | +30% | −6,1% | 2,8 | 1,12 → 1,70 | +22% | 0,12 |
> | 398 | ADX + IFR + Bollinger + Onda | **+256% · −39,2%** | +61% · −9,8% | +35% | −7,2% | 3,1 | 0,85 → 1,95 | +23% | 0,24 |
> | 399 | IFR + Pôr do sol + Tendência + Onda | **+200% · −35,0%** | +51% · −8,5% | +35% | −8,1% | 2,7 | 1,18 → 1,67 | +29% | 0,15 |
> | 400 | ADX + MACD + Quinta + Tendência ⚠️ | **+193% · −47,8%** | +52% · −11,8% | +34% | −8,2% | 2,6 | 1,27 → 1,62 | +26% | 0,16 |
> | 401 | ADX + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+196% · −34,6%** | +44% · −6,5% | +29% | −5,2% | 3,2 | 0,93 → 1,82 | +21% | −0,03 |
> | 402 | ADX + Pôr do sol + Pullback | **+105% · −32,9%** | +42% · −9,7% | +27% | −6,0% | 2,4 | 1,32 → 1,63 | +15% | −0,06 |
> | 403 | IFR + Pôr do sol + Quinta + Onda ⚠️ | **+126% · −20,2%** | +37% · −4,8% | +27% | −4,1% | 3,4 | 0,88 → 1,79 | +21% | −0,03 |
> | 404 | 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+236% · −34,7%** | +55% · −8,4% | +35% | −7,8% | 2,8 | 1,08 → 1,76 | +22% | 0,23 |
> | 405 | ADX + MACD + Pullback | **+133% · −36,3%** | +50% · −10,9% | +32% | −7,1% | 2,8 | 1,18 → 1,65 | +20% | 0,00 |
> | 406 | MACD + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+242% · −37,2%** | +48% · −7,1% | +34% | −7,7% | 2,8 | 1,19 → 1,62 | +27% | 0,14 |
> | 407 | MACD + 1ª vela 80 + Tendência ⚠️ | **+160% · −30,7%** | +55% · −10,3% | +38% | −9,4% | 2,6 | 1,28 → 1,55 | +29% | 0,29 |
> | 408 | ADX + Pôr do sol + Pullback + Bollinger + Onda | **+219% · −35,5%** | +45% · −6,9% | +28% | −5,3% | 2,8 | 1,01 → 1,86 | +19% | 0,04 |
> | 409 | ADX + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+250% · −43,5%** | +52% · −8,6% | +34% | −7,0% | 3,0 | 0,99 → 1,78 | +24% | 0,05 |
> | 410 | ADX + Quinta + Bollinger + Tendência + Onda ⚠️ | **+273% · −45,0%** | +53% · −9,1% | +33% | −7,3% | 2,7 | 1,10 → 1,77 | +26% | 0,13 |
> | 411 | IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+169% · −23,3%** | +44% · −5,2% | +31% | −5,9% | 3,1 | 0,87 → 1,89 | +21% | −0,04 |
> | 412 | Quinta + Pullback + Tendência + Onda ⚠️ | **+147% · −27,2%** | +41% · −6,4% | +31% | −6,9% | 2,6 | 1,34 → 1,45 | +25% | 0,00 |
> | 413 | Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+64% · −15,3%** | +29% · −3,6% | +22% | −3,1% | 3,0 | 0,99 → 1,80 | +15% | −0,01 |
> | 414 | ADX + IFR + MACD | **+177% · −36,2%** | +62% · −12,0% | +38% | −8,4% | 3,0 | 0,95 → 1,79 | +22% | 0,31 |
> | 415 | IFR + MACD + Pullback + Onda | **+178% · −28,1%** | +46% · −6,3% | +33% | −6,8% | 3,0 | 1,06 → 1,67 | +26% | 0,12 |
> | 416 | IFR + Bollinger + Onda | **+169% · −25,4%** | +55% · −7,9% | +34% | −6,8% | 3,1 | 0,89 → 1,87 | +24% | 0,20 |
> | 417 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+199% · −36,7%** | +44% · −6,5% | +29% | −5,1% | 3,2 | 0,88 → 1,84 | +20% | 0,01 |
> | 418 | ADX + IFR + Tendência + Onda | **+264% · −48,2%** | +66% · −12,7% | +41% | −10,4% | 2,7 | 1,08 → 1,76 | +30% | 0,28 |
> | 419 | IFR + MACD + Bollinger + Tendência + Onda | **+320% · −46,5%** | +56% · −9,9% | +36% | −9,3% | 2,5 | 1,17 → 1,71 | +30% | 0,34 |
> | 420 | IFR + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+297% · −44,0%** | +55% · −9,1% | +38% | −9,2% | 2,7 | 1,09 → 1,72 | +28% | 0,29 |

> [!example]- Combinações 421 a 450 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 421 | ADX + MACD + Pôr do sol + Tendência | **+196% · −46,9%** | +52% · −11,1% | +34% | −8,3% | 2,6 | 1,20 → 1,64 | +25% | 0,17 |
> | 422 | ADX + Pôr do sol + Bollinger + Tendência + Onda | **+277% · −45,1%** | +53% · −9,2% | +32% | −7,4% | 2,7 | 1,05 → 1,79 | +25% | 0,15 |
> | 423 | ADX + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+252% · −43,4%** | +52% · −8,5% | +34% | −7,0% | 3,0 | 0,95 → 1,79 | +24% | 0,11 |
> | 424 | ADX + Tendência | **+140% · −45,8%** | +74% · −24,1% | +44% | −12,3% | 2,5 | 1,26 → 1,57 | +29% | 0,32 |
> | 425 | MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+151% · −24,9%** | +40% · −5,5% | +27% | −7,0% | 2,0 | 1,16 → 1,85 | +17% | 0,08 |
> | 426 | Quinta + Pullback + Bollinger + Onda ⚠️ | **+130% · −20,0%** | +37% · −4,4% | +25% | −4,6% | 2,7 | 1,15 → 1,66 | +22% | −0,02 |
> | 427 | ADX + MACD + 1ª vela 80 + Bollinger ⚠️ | **+227% · −42,8%** | +55% · −10,9% | +32% | −7,1% | 2,8 | 0,90 → 1,93 | +20% | 0,28 |
> | 428 | IFR + MACD + 1ª vela 80 ⚠️ | **+157% · −23,5%** | +53% · −7,3% | +36% | −9,4% | 2,5 | 1,10 → 1,80 | +26% | 0,27 |
> | 429 | Quinta + Pullback ⚠️ | **+39% · −9,3%** | +26% · −4,2% | +21% | −2,7% | 3,1 | 2,18 → 0,85 | +14% | −0,02 |
> | 430 | IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+171% · −22,2%** | +45% · −5,2% | +31% | −5,9% | 3,1 | 0,82 → 1,91 | +20% | 0,08 |
> | 431 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+132% · −22,4%** | +32% · −4,1% | +25% | −4,1% | 2,9 | 1,01 → 1,74 | +19% | −0,05 |
> | 432 | ADX + Pôr do sol + 1ª vela 80 ⚠️ | **+122% · −30,8%** | +47% · −9,5% | +29% | −4,9% | 3,4 | 0,70 → 1,87 | +17% | 0,06 |
> | 433 | Pôr do sol + Pullback + Tendência + Onda | **+149% · −27,2%** | +42% · −6,4% | +31% | −7,0% | 2,6 | 1,28 → 1,47 | +24% | 0,05 |
> | 434 | 1ª vela 80 + Bollinger ⚠️ | **+97% · −16,3%** | +51% · −7,5% | +29% | −7,1% | 2,3 | 1,03 → 1,91 | +14% | 0,28 |
> | 435 | ADX + Pullback + Tendência + Onda | **+213% · −49,2%** | +56% · −11,6% | +37% | −9,3% | 2,6 | 1,18 → 1,62 | +27% | 0,15 |
> | 436 | ADX + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+237% · −41,0%** | +48% · −7,6% | +29% | −5,4% | 3,1 | 0,73 → 1,95 | +17% | 0,07 |
> | 437 | ADX + MACD + Quinta + Bollinger ⚠️ | **+177% · −39,3%** | +47% · −9,6% | +28% | −6,1% | 2,6 | 0,99 → 1,84 | +19% | 0,16 |
> | 438 | MACD + Quinta + Pullback + Tendência + Onda ⚠️ | **+190% · −35,0%** | +42% · −6,4% | +31% | −7,1% | 2,5 | 1,26 → 1,50 | +28% | 0,06 |
> | 439 | ADX + Pôr do sol + Bollinger | **+134% · −32,0%** | +49% · −10,0% | +27% | −5,2% | 2,7 | 0,89 → 1,91 | +16% | 0,11 |
> | 440 | IFR + MACD + Quinta + Bollinger + Onda ⚠️ | **+231% · −33,5%** | +45% · −6,1% | +30% | −6,3% | 2,7 | 0,96 → 1,82 | +23% | 0,11 |
> | 441 | 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+169% · −29,2%** | +45% · −6,6% | +33% | −6,9% | 2,9 | 1,03 → 1,64 | +22% | −0,03 |
> | 442 | ADX + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+280% · −43,3%** | +56% · −8,7% | +36% | −7,5% | 3,1 | 0,77 → 1,88 | +23% | 0,23 |
> | 443 | Quinta + Bollinger + Tendência + Onda ⚠️ | **+183% · −32,3%** | +47% · −7,6% | +31% | −7,0% | 2,5 | 1,17 → 1,62 | +24% | 0,06 |
> | 444 | MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+154% · −25,3%** | +41% · −5,6% | +27% | −7,2% | 1,9 | 1,06 → 1,90 | +16% | 0,15 |
> | 445 | ADX + MACD + Pôr do sol + Bollinger | **+179% · −38,1%** | +47% · −9,2% | +28% | −5,7% | 2,7 | 0,90 → 1,89 | +18% | 0,14 |
> | 446 | ADX + IFR + Quinta + Onda ⚠️ | **+187% · −34,0%** | +51% · −8,6% | +33% | −6,5% | 3,1 | 0,80 → 1,84 | +21% | 0,04 |
> | 447 | ADX + IFR + MACD + Bollinger + Onda | **+307% · −45,6%** | +57% · −9,5% | +34% | −7,7% | 2,8 | 0,85 → 1,89 | +24% | 0,27 |
> | 448 | ADX + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+230% · −40,5%** | +48% · −7,4% | +32% | −6,5% | 3,0 | 0,86 → 1,79 | +23% | 0,09 |
> | 449 | MACD + Quinta + Tendência ⚠️ | **+116% · −29,2%** | +44% · −9,7% | +32% | −8,5% | 2,3 | 1,42 → 1,37 | +25% | 0,12 |
> | 450 | Pôr do sol + Pullback + Bollinger + Onda | **+132% · −20,4%** | +37% · −4,5% | +25% | −4,6% | 2,6 | 1,06 → 1,70 | +21% | −0,00 |

> [!example]- Combinações 451 a 480 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 451 | ADX + MACD + Pullback + Tendência + Onda | **+258% · −53,5%** | +53% · −9,9% | +36% | −8,9% | 2,6 | 1,13 → 1,63 | +27% | 0,17 |
> | 452 | MACD + Quinta + Pullback + Bollinger + Onda ⚠️ | **+176% · −25,3%** | +38% · −4,6% | +27% | −5,5% | 2,5 | 1,10 → 1,70 | +22% | 0,03 |
> | 453 | ADX + MACD + Pullback + Bollinger + Onda | **+253% · −41,3%** | +49% · −7,8% | +31% | −6,8% | 2,7 | 0,95 → 1,80 | +22% | 0,15 |
> | 454 | MACD + Pôr do sol + Pullback + Tendência + Onda | **+192% · −35,0%** | +42% · −6,4% | +31% | −7,1% | 2,5 | 1,20 → 1,52 | +27% | 0,10 |
> | 455 | IFR + MACD + Quinta + Tendência + Onda ⚠️ | **+241% · −42,0%** | +49% · −8,5% | +34% | −8,6% | 2,5 | 1,14 → 1,63 | +29% | 0,16 |
> | 456 | ADX + Quinta + Bollinger ⚠️ | **+131% · −32,8%** | +48% · −10,4% | +27% | −5,9% | 2,4 | 1,01 → 1,83 | +17% | 0,18 |
> | 457 | MACD + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+287% · −41,6%** | +52% · −8,4% | +34% | −8,3% | 2,6 | 1,04 → 1,71 | +22% | 0,29 |
> | 458 | MACD + Pullback | **+64% · −15,6%** | +37% · −7,6% | +29% | −6,7% | 2,4 | 1,44 → 1,31 | +23% | −0,18 |
> | 459 | Pôr do sol + Pullback | **+40% · −8,6%** | +26% · −3,7% | +21% | −3,0% | 2,7 | 1,97 → 0,99 | +16% | −0,13 |
> | 460 | IFR + Tendência + Onda | **+184% · −34,9%** | +62% · −11,8% | +41% | −11,3% | 2,5 | 1,14 → 1,62 | +35% | 0,33 |
> | 461 | IFR + MACD + Pôr do sol + Bollinger + Onda | **+234% · −33,3%** | +45% · −6,1% | +30% | −6,3% | 2,7 | 0,90 → 1,84 | +22% | 0,15 |
> | 462 | ADX + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+240% · −41,6%** | +48% · −7,7% | +29% | −5,5% | 3,0 | 0,67 → 1,97 | +16% | 0,12 |
> | 463 | 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+177% · −23,7%** | +45% · −5,4% | +29% | −6,9% | 2,4 | 1,03 → 1,84 | +20% | 0,08 |
> | 464 | Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+172% · −29,2%** | +46% · −6,6% | +32% | −6,9% | 2,9 | 0,98 → 1,66 | +22% | 0,11 |
> | 465 | Pôr do sol + Bollinger + Tendência + Onda | **+186% · −32,3%** | +47% · −7,6% | +31% | −7,1% | 2,5 | 1,10 → 1,65 | +24% | 0,12 |
> | 466 | ADX + IFR + MACD + Tendência + Onda | **+306% · −53,1%** | +61% · −11,8% | +39% | −10,4% | 2,5 | 1,03 → 1,73 | +29% | 0,32 |
> | 467 | ADX + 1ª vela 80 + Quinta ⚠️ | **+120% · −31,8%** | +47% · −10,0% | +30% | −5,5% | 3,0 | 0,78 → 1,82 | +19% | −0,03 |
> | 468 | Pôr do sol + Quinta ⚠️ | **+26% · −4,9%** | +19% · −2,0% | +17% | −1,9% | 2,1 | 1,45 → 1,34 | +13% | 0,22 |
> | 469 | MACD + Pôr do sol + Tendência | **+118% · −29,0%** | +44% · −9,6% | +32% | −8,5% | 2,3 | 1,33 → 1,40 | +27% | 0,19 |
> | 470 | ADX + IFR + Pôr do sol + Onda | **+189% · −34,1%** | +51% · −8,7% | +33% | −6,5% | 3,0 | 0,75 → 1,86 | +20% | 0,06 |
> | 471 | IFR + MACD + Pôr do sol + Tendência + Onda | **+243% · −42,0%** | +49% · −8,5% | +34% | −8,6% | 2,5 | 1,10 → 1,64 | +29% | 0,22 |
> | 472 | ADX + Pullback + Bollinger + Onda | **+201% · −35,1%** | +51% · −8,9% | +31% | −6,9% | 2,6 | 0,96 → 1,79 | +21% | 0,13 |
> | 473 | MACD + Quinta + Bollinger ⚠️ | **+97% · −16,7%** | +37% · −4,6% | +25% | −5,9% | 2,0 | 1,18 → 1,65 | +19% | 0,09 |
> | 474 | ADX + Bollinger + Tendência + Onda | **+256% · −47,0%** | +62% · −11,8% | +36% | −9,4% | 2,5 | 1,01 → 1,74 | +28% | 0,27 |
> | 475 | ADX + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+204% · −42,3%** | +45% · −7,9% | +31% | −6,8% | 2,6 | 1,01 → 1,69 | +23% | 0,05 |
> | 476 | ADX + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+154% · −33,0%** | +38% · −6,3% | +26% | −4,8% | 2,8 | 0,95 → 1,70 | +18% | −0,02 |
> | 477 | IFR + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+290% · −35,8%** | +51% · −6,8% | +33% | −8,3% | 2,5 | 0,91 → 1,90 | +21% | 0,26 |
> | 478 | ADX + 1ª vela 80 + Tendência + Onda ⚠️ | **+233% · −45,1%** | +60% · −11,1% | +38% | −9,1% | 2,8 | 0,91 → 1,74 | +25% | 0,19 |
> | 479 | ADX + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+165% · −37,4%** | +46% · −8,9% | +30% | −6,0% | 2,9 | 0,77 → 1,86 | +20% | 0,09 |
> | 480 | ADX + MACD + Tendência | **+180% · −50,0%** | +63% · −17,5% | +40% | −11,5% | 2,4 | 1,16 → 1,58 | +29% | 0,35 |

> [!example]- Combinações 481 a 510 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 481 | ADX + Pullback | **+94% · −31,2%** | +53% · −14,8% | +32% | −8,7% | 2,2 | 1,24 → 1,50 | +16% | 0,01 |
> | 482 | ADX + 1ª vela 80 + Pullback + Onda ⚠️ | **+183% · −35,1%** | +50% · −8,4% | +33% | −6,7% | 2,9 | 0,83 → 1,78 | +22% | 0,05 |
> | 483 | IFR + Quinta + Onda ⚠️ | **+114% · −22,0%** | +43% · −6,7% | +31% | −5,8% | 3,0 | 0,82 → 1,71 | +24% | −0,09 |
> | 484 | ADX + IFR + MACD + Quinta + Onda ⚠️ | **+230% · −41,0%** | +49% · −8,0% | +33% | −6,9% | 2,9 | 0,80 → 1,80 | +22% | 0,10 |
> | 485 | MACD + Pôr do sol + Pullback + Bollinger + Onda | **+179% · −25,7%** | +38% · −4,6% | +26% | −5,7% | 2,4 | 1,03 → 1,73 | +22% | 0,05 |
> | 486 | Pullback + Tendência + Onda | **+136% · −27,1%** | +49% · −8,8% | +35% | −9,6% | 2,4 | 1,24 → 1,40 | +26% | 0,16 |
> | 487 | MACD + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+229% · −30,3%** | +44% · −5,6% | +30% | −7,8% | 2,2 | 1,02 → 1,81 | +20% | 0,13 |
> | 488 | ADX + MACD + 1ª vela 80 + Quinta ⚠️ | **+162% · −38,5%** | +46% · −9,3% | +30% | −6,4% | 2,7 | 0,84 → 1,82 | +20% | 0,04 |
> | 489 | MACD + Quinta + Bollinger + Tendência + Onda ⚠️ | **+230% · −39,5%** | +46% · −7,8% | +31% | −7,8% | 2,3 | 1,09 → 1,61 | +24% | 0,15 |
> | 490 | ADX + IFR + MACD + Pôr do sol + Onda | **+233% · −41,0%** | +49% · −8,0% | +33% | −6,9% | 2,8 | 0,76 → 1,82 | +21% | 0,13 |
> | 491 | IFR + MACD | **+103% · −19,0%** | +54% · −9,0% | +37% | −9,9% | 2,5 | 1,05 → 1,59 | +27% | 0,43 |
> | 492 | IFR + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+167% · −27,7%** | +38% · −5,4% | +28% | −5,5% | 2,8 | 0,85 → 1,74 | +22% | 0,04 |
> | 493 | MACD + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+213% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,6 | 1,00 → 1,63 | +22% | 0,09 |
> | 494 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+172% · −38,0%** | +41% · −7,3% | +27% | −4,8% | 3,1 | 0,61 → 1,85 | +16% | −0,00 |
> | 495 | IFR + 1ª vela 80 + Onda ⚠️ | **+156% · −23,2%** | +54% · −7,3% | +36% | −8,3% | 2,8 | 0,76 → 1,84 | +21% | 0,18 |
> | 496 | MACD + Pullback + Tendência + Onda | **+176% · −34,9%** | +47% · −8,4% | +34% | −9,3% | 2,3 | 1,17 → 1,46 | +30% | 0,20 |
> | 497 | ADX + MACD + Bollinger + Tendência + Onda | **+304% · −51,4%** | +58% · −11,1% | +36% | −9,6% | 2,4 | 0,98 → 1,72 | +26% | 0,30 |
> | 498 | IFR + Pôr do sol + Onda | **+115% · −19,6%** | +43% · −6,3% | +30% | −5,9% | 3,0 | 0,74 → 1,74 | +23% | 0,02 |
> | 499 | ADX + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+277% · −49,9%** | +57% · −10,3% | +37% | −9,4% | 2,6 | 0,90 → 1,73 | +24% | 0,25 |
> | 500 | IFR + MACD + Tendência + Onda | **+225% · −41,9%** | +56% · −11,0% | +39% | −11,1% | 2,3 | 1,06 → 1,60 | +33% | 0,38 |
> | 501 | ADX + MACD + Quinta + Pullback + Onda ⚠️ | **+183% · −36,9%** | +42% · −6,8% | +29% | −6,2% | 2,6 | 0,91 → 1,69 | +21% | 0,01 |
> | 502 | MACD + Pôr do sol + Bollinger + Tendência + Onda | **+233% · −39,6%** | +46% · −7,8% | +31% | −7,8% | 2,3 | 1,04 → 1,63 | +24% | 0,19 |
> | 503 | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% | −16,1% | 2,2 | 1,58 → 1,20 | +22% | — |
> | 504 | MACD + Pôr do sol + Bollinger | **+99% · −16,5%** | +38% · −4,6% | +25% | −6,0% | 2,0 | 1,02 → 1,73 | +19% | 0,09 |
> | 505 | Pôr do sol + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+165% · −25,2%** | +36% · −3,7% | +25% | −4,7% | 2,6 | 0,77 → 1,94 | +14% | 0,01 |
> | 506 | MACD + 1ª vela 80 + Bollinger ⚠️ | **+140% · −25,7%** | +48% · −8,2% | +30% | −10,3% | 1,7 | 0,99 → 1,79 | +16% | 0,31 |
> | 507 | ADX + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+190% · −36,1%** | +41% · −6,6% | +26% | −4,9% | 2,7 | 0,72 → 1,88 | +18% | 0,04 |
> | 508 | MACD + Tendência | **+106% · −30,3%** | +57% · −15,6% | +40% | −13,4% | 2,0 | 1,28 → 1,31 | +29% | 0,55 |
> | 509 | ADX + MACD + Pôr do sol + Quinta ⚠️ | **+123% · −33,6%** | +38% · −7,6% | +26% | −5,0% | 2,6 | 0,83 → 1,75 | +16% | 0,04 |
> | 510 | ADX + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+272% · −45,2%** | +53% · −8,9% | +32% | −7,1% | 2,8 | 0,67 → 1,88 | +17% | 0,25 |

> [!example]- Combinações 511 a 540 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 511 | MACD + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+215% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,6 | 0,95 → 1,64 | +22% | 0,18 |
> | 512 | IFR + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+214% · −30,5%** | +44% · −5,4% | +31% | −7,5% | 2,5 | 0,86 → 1,81 | +21% | 0,07 |
> | 513 | ADX + 1ª vela 80 + Bollinger + Onda ⚠️ | **+221% · −42,6%** | +55% · −10,6% | +33% | −7,0% | 2,8 | 0,62 → 1,91 | +16% | 0,23 |
> | 514 | MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+101% · −19,3%** | +32% · −3,8% | +24% | −5,7% | 2,1 | 0,98 → 1,75 | +16% | 0,01 |
> | 515 | Bollinger + Tendência + Onda | **+170% · −32,2%** | +57% · −10,6% | +35% | −9,9% | 2,3 | 1,05 → 1,58 | +26% | 0,27 |
> | 516 | ADX + IFR + Onda | **+173% · −34,0%** | +62% · −11,5% | +38% | −9,0% | 2,8 | 0,70 → 1,80 | +23% | 0,20 |
> | 517 | ADX + Quinta + Tendência + Onda ⚠️ | **+188% · −45,7%** | +52% · −10,4% | +34% | −8,7% | 2,5 | 0,97 → 1,63 | +26% | 0,06 |
> | 518 | IFR + MACD + Bollinger + Onda | **+215% · −33,3%** | +52% · −8,0% | +33% | −8,2% | 2,5 | 0,86 → 1,78 | +24% | 0,29 |
> | 519 | 1ª vela 80 + Tendência + Onda ⚠️ | **+157% · −29,1%** | +55% · −9,4% | +38% | −9,7% | 2,6 | 0,93 → 1,60 | +23% | 0,21 |
> | 520 | Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+128% · −26,6%** | +38% · −5,8% | +28% | −6,4% | 2,4 | 1,05 → 1,50 | +24% | 0,01 |
> | 521 | ADX + MACD + Pôr do sol + Pullback + Onda | **+185% · −36,0%** | +42% · −6,8% | +29% | −6,3% | 2,6 | 0,85 → 1,71 | +20% | 0,02 |
> | 522 | IFR + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+217% · −30,4%** | +44% · −5,8% | +31% | −7,5% | 2,5 | 0,81 → 1,83 | +20% | 0,15 |
> | 523 | 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+119% · −21,7%** | +36% · −4,8% | +27% | −5,8% | 2,4 | 0,96 → 1,65 | +20% | −0,10 |
> | 524 | ADX + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+200% · −41,2%** | +45% · −7,7% | +31% | −6,2% | 2,8 | 0,62 → 1,79 | +17% | 0,05 |
> | 525 | MACD + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+162% · −25,5%** | +37% · −4,3% | +28% | −6,8% | 2,2 | 0,96 → 1,69 | +20% | −0,03 |
> | 526 | Pullback + Bollinger + Onda | **+119% · −20,0%** | +43% · −6,2% | +28% | −6,4% | 2,3 | 1,00 → 1,60 | +23% | 0,09 |
> | 527 | Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+82% · −17,7%** | +28% · −4,2% | +23% | −3,9% | 2,6 | 0,98 → 1,43 | +19% | −0,04 |
> | 528 | ADX + MACD + Quinta + Tendência + Onda ⚠️ | **+229% · −50,1%** | +50% · −9,7% | +34% | −8,9% | 2,4 | 0,95 → 1,64 | +26% | 0,13 |
> | 529 | ADX + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+203% · −41,6%** | +45% · −7,7% | +30% | −6,2% | 2,9 | 0,58 → 1,81 | +17% | 0,11 |
> | 530 | MACD + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+120% · −23,2%** | +31% · −4,1% | +25% | −4,9% | 2,4 | 0,97 → 1,57 | +20% | −0,03 |
> | 531 | ADX + Pôr do sol + Tendência + Onda | **+190% · −45,2%** | +52% · −10,1% | +34% | −8,7% | 2,4 | 0,92 → 1,65 | +25% | 0,10 |
> | 532 | ADX + Quinta + Pullback + Onda ⚠️ | **+140% · −31,1%** | +42% · −7,7% | +28% | −6,2% | 2,5 | 0,90 → 1,62 | +19% | −0,01 |
> | 533 | ADX + IFR + MACD + Onda | **+215% · −40,9%** | +57% · −10,4% | +37% | −9,0% | 2,6 | 0,72 → 1,77 | +24% | 0,25 |
> | 534 | ADX + MACD + Bollinger | **+164% · −38,7%** | +57% · −13,1% | +32% | −8,5% | 2,3 | 0,83 → 1,80 | +21% | 0,33 |
> | 535 | MACD + Pullback + Bollinger + Onda | **+163% · −25,3%** | +43% · −6,0% | +29% | −7,6% | 2,1 | 0,98 → 1,66 | +23% | 0,13 |
> | 536 | ADX + MACD + Quinta + Bollinger + Onda ⚠️ | **+221% · −42,0%** | +46% · −8,0% | +29% | −6,3% | 2,6 | 0,70 → 1,81 | +19% | 0,11 |
> | 537 | ADX + Bollinger | **+120% · −32,1%** | +63% · −16,1% | +32% | −7,9% | 2,5 | 0,79 → 1,77 | +18% | 0,45 |
> | 538 | MACD + Bollinger + Tendência + Onda | **+215% · −39,5%** | +53% · −10,1% | +34% | −10,1% | 2,2 | 1,00 → 1,58 | +25% | 0,34 |
> | 539 | MACD + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+167% · −34,5%** | +39% · −6,3% | +29% | −7,1% | 2,3 | 1,00 → 1,53 | +24% | 0,08 |
> | 540 | ADX + MACD + Pôr do sol + Tendência + Onda | **+232% · −49,7%** | +50% · −9,7% | +34% | −8,9% | 2,3 | 0,90 → 1,66 | +25% | 0,16 |

> [!example]- Combinações 541 a 570 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 541 | Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+121% · −23,0%** | +36% · −5,0% | +27% | −5,8% | 2,4 | 0,89 → 1,68 | +19% | −0,01 |
> | 542 | MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+199% · −36,7%** | +52% · −9,1% | +36% | −9,9% | 2,4 | 0,91 → 1,59 | +23% | 0,29 |
> | 543 | ADX + 1ª vela 80 + Quinta + Onda ⚠️ | **+157% · −39,0%** | +46% · −9,2% | +30% | −6,2% | 2,8 | 0,56 → 1,79 | +16% | −0,03 |
> | 544 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+165% · −25,8%** | +37% · −4,4% | +28% | −7,0% | 2,2 | 0,91 → 1,71 | +20% | 0,03 |
> | 545 | ADX + MACD + Pôr do sol + Bollinger + Onda | **+224% · −41,2%** | +46% · −7,7% | +29% | −6,4% | 2,6 | 0,64 → 1,83 | +19% | 0,13 |
> | 546 | IFR + MACD + Quinta + Onda ⚠️ | **+152% · −27,8%** | +42% · −6,2% | +31% | −7,2% | 2,5 | 0,80 → 1,67 | +24% | 0,06 |
> | 547 | ADX + Pôr do sol + Pullback + Onda | **+142% · −33,7%** | +42% · −7,7% | +28% | −6,2% | 2,5 | 0,84 → 1,65 | +18% | −0,01 |
> | 548 | Quinta + Tendência + Onda ⚠️ | **+115% · −26,6%** | +44% · −8,3% | +32% | −8,8% | 2,2 | 1,00 → 1,43 | +26% | −0,04 |
> | 549 | ADX + MACD + 1ª vela 80 ⚠️ | **+150% · −37,9%** | +55% · −12,7% | +35% | −8,9% | 2,4 | 0,71 → 1,78 | +20% | 0,20 |
> | 550 | Pullback | **+32% · −9,1%** | +32% · −9,1% | +26% | −4,6% | 2,8 | 1,87 → 0,62 | +11% | — |
> | 551 | IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+200% · −30,3%** | +50% · −7,0% | +35% | −9,6% | 2,3 | 0,77 → 1,77 | +21% | 0,26 |
> | 552 | ADX + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+159% · −39,7%** | +46% · −9,4% | +30% | −6,3% | 2,7 | 0,51 → 1,81 | +16% | 0,06 |
> | 553 | IFR + Onda | **+103% · −22,7%** | +55% · −11,1% | +37% | −9,2% | 2,6 | 0,68 → 1,65 | +27% | 0,19 |
> | 554 | IFR + MACD + Pôr do sol + Onda | **+155% · −27,7%** | +43% · −6,7% | +31% | −7,2% | 2,5 | 0,74 → 1,69 | +23% | 0,13 |
> | 555 | ADX + 1ª vela 80 ⚠️ | **+110% · −32,0%** | +61% · −15,9% | +36% | −8,8% | 2,6 | 0,62 → 1,76 | +20% | 0,15 |
> | 556 | ADX + MACD + Pullback + Onda | **+170% · −39,3%** | +48% · −8,7% | +32% | −8,0% | 2,4 | 0,81 → 1,65 | +22% | 0,09 |
> | 557 | ADX + Quinta + Bollinger + Onda ⚠️ | **+174% · −36,2%** | +47% · −8,4% | +28% | −6,3% | 2,5 | 0,66 → 1,80 | +18% | 0,07 |
> | 558 | ADX + Tendência + Onda | **+174% · −48,4%** | +63% · −16,3% | +40% | −11,8% | 2,3 | 0,87 → 1,60 | +30% | 0,24 |
> | 559 | MACD + Quinta + Tendência + Onda ⚠️ | **+153% · −34,4%** | +43% · −8,3% | +32% | −9,2% | 2,1 | 0,96 → 1,47 | +25% | 0,10 |
> | 560 | ADX + MACD + Tendência + Onda | **+214% · −52,6%** | +58% · −13,1% | +38% | −11,4% | 2,2 | 0,87 → 1,61 | +28% | 0,29 |
> | 561 | 1ª vela 80 + Quinta ⚠️ | **+55% · −13,7%** | +33% · −5,7% | +25% | −5,2% | 2,3 | 0,86 → 1,60 | +14% | −0,34 |
> | 562 | MACD + Quinta + Pullback + Onda ⚠️ | **+108% · −22,9%** | +34% · −5,0% | +27% | −6,3% | 2,2 | 0,92 → 1,49 | +22% | −0,04 |
> | 563 | Pôr do sol + Tendência + Onda | **+117% · −26,6%** | +45% · −8,3% | +32% | −8,9% | 2,2 | 0,93 → 1,45 | +25% | 0,09 |
> | 564 | ADX + MACD + 1ª vela 80 + Onda ⚠️ | **+186% · −42,6%** | +52% · −10,4% | +34% | −8,1% | 2,6 | 0,53 → 1,76 | +17% | 0,20 |
> | 565 | 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+151% · −25,7%** | +41% · −5,1% | +27% | −6,5% | 2,2 | 0,71 → 1,86 | +13% | 0,00 |
> | 566 | MACD + 1ª vela 80 + Quinta ⚠️ | **+90% · −19,3%** | +36% · −5,4% | +27% | −8,2% | 1,7 | 0,90 → 1,63 | +16% | −0,06 |
> | 567 | MACD + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+199% · −33,0%** | +41% · −5,7% | +28% | −7,9% | 1,9 | 0,75 → 1,81 | +15% | 0,09 |
> | 568 | MACD + Bollinger | **+87% · −16,8%** | +47% · −7,9% | +29% | −10,1% | 1,6 | 0,93 → 1,58 | +20% | 0,38 |
> | 569 | ADX + Pôr do sol + Bollinger + Onda | **+176% · −35,4%** | +47% · −8,5% | +28% | −6,4% | 2,4 | 0,59 → 1,84 | +18% | 0,07 |
> | 570 | MACD + Pôr do sol + Quinta ⚠️ | **+57% · −12,1%** | +26% · −3,7% | +22% | −4,4% | 2,0 | 0,92 → 1,48 | +18% | 0,02 |

> [!example]- Combinações 571 a 600 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 571 | MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+150% · −25,6%** | +42% · −5,9% | +31% | −9,2% | 1,9 | 0,86 → 1,64 | +20% | 0,09 |
> | 572 | MACD + Pôr do sol + Tendência + Onda | **+155% · −34,4%** | +44% · −8,3% | +32% | −9,2% | 2,1 | 0,90 → 1,49 | +25% | 0,18 |
> | 573 | Quinta + Pullback + Onda ⚠️ | **+71% · −19,2%** | +31% · −5,5% | +25% | −5,5% | 2,2 | 0,91 → 1,32 | +21% | −0,08 |
> | 574 | Pôr do sol + 1ª vela 80 ⚠️ | **+56% · −15,1%** | +34% · −6,5% | +25% | −5,0% | 2,4 | 0,73 → 1,68 | +13% | 0,09 |
> | 575 | MACD + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+152% · −24,6%** | +35% · −4,1% | +25% | −5,4% | 2,2 | 0,72 → 1,75 | +16% | 0,04 |
> | 576 | Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+153% · −25,1%** | +41% · −5,1% | +27% | −6,5% | 2,1 | 0,64 → 1,89 | +13% | 0,10 |
> | 577 | MACD + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+201% · −32,5%** | +41% · −5,8% | +28% | −8,1% | 1,9 | 0,69 → 1,84 | +15% | 0,16 |
> | 578 | ADX + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+160% · −36,7%** | +39% · −6,7% | +27% | −5,8% | 2,5 | 0,59 → 1,72 | +19% | 0,01 |
> | 579 | ADX + MACD + Bollinger + Onda | **+206% · −41,4%** | +53% · −10,3% | +32% | −8,1% | 2,4 | 0,60 → 1,77 | +19% | 0,26 |
> | 580 | ADX + MACD + Quinta ⚠️ | **+111% · −34,1%** | +44% · −11,1% | +29% | −7,5% | 2,2 | 0,76 → 1,65 | +18% | 0,05 |
> | 581 | ADX + Pullback + Onda | **+128% · −34,2%** | +50% · −10,4% | +32% | −8,6% | 2,3 | 0,78 → 1,57 | +20% | 0,08 |
> | 582 | MACD + Pôr do sol + Pullback + Onda | **+110% · −23,1%** | +34% · −5,1% | +27% | −6,5% | 2,1 | 0,85 → 1,52 | +21% | 0,00 |
> | 583 | Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+109% · −18,2%** | +33% · −3,8% | +23% | −4,4% | 2,3 | 0,68 → 1,76 | +15% | −0,02 |
> | 584 | ADX + MACD + Pôr do sol | **+113% · −32,9%** | +45% · −10,5% | +29% | −7,1% | 2,3 | 0,67 → 1,69 | +17% | 0,02 |
> | 585 | 1ª vela 80 + Pullback + Onda ⚠️ | **+109% · −21,5%** | +42% · −6,4% | +30% | −8,6% | 2,0 | 0,84 → 1,60 | +20% | 0,04 |
> | 586 | MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+92% · −19,0%** | +36% · −5,5% | +27% | −8,6% | 1,7 | 0,80 → 1,67 | +16% | 0,11 |
> | 587 | ADX + Pôr do sol + Quinta ⚠️ | **+85% · −29,4%** | +37% · −9,6% | +24% | −6,0% | 1,9 | 0,80 → 1,66 | +13% | 0,08 |
> | 588 | Tendência + Onda | **+105% · −26,5%** | +57% · −13,1% | +40% | −13,7% | 2,0 | 0,88 → 1,37 | +28% | 0,32 |
> | 589 | ADX + 1ª vela 80 + Onda ⚠️ | **+145% · −40,7%** | +55% · −13,8% | +35% | −8,6% | 2,5 | 0,46 → 1,74 | +15% | 0,16 |
> | 590 | IFR + MACD + Onda | **+141% · −27,6%** | +51% · −8,8% | +35% | −10,0% | 2,3 | 0,70 → 1,63 | +25% | 0,31 |
> | 591 | MACD + Tendência + Onda | **+141% · −34,4%** | +52% · −11,6% | +37% | −12,7% | 1,9 | 0,86 → 1,43 | +27% | 0,40 |
> | 592 | Pôr do sol + Pullback + Onda | **+73% · −16,0%** | +32% · −5,2% | +25% | −5,6% | 2,1 | 0,83 → 1,35 | +20% | −0,03 |
> | 593 | MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+185% · −33,0%** | +47% · −7,8% | +31% | −10,5% | 1,7 | 0,64 → 1,77 | +14% | 0,28 |
> | 594 | ADX + Pôr do sol + Quinta + Onda ⚠️ | **+120% · −31,1%** | +38% · −8,1% | +26% | −5,6% | 2,4 | 0,52 → 1,67 | +17% | −0,03 |
> | 595 | ADX + Bollinger + Onda | **+161% · −35,5%** | +57% · −11,5% | +32% | −8,8% | 2,2 | 0,53 → 1,76 | +18% | 0,22 |
> | 596 | ADX + MACD + Quinta + Onda ⚠️ | **+146% · −37,0%** | +44% · −8,7% | +30% | −7,4% | 2,3 | 0,54 → 1,66 | +19% | 0,02 |
> | 597 | MACD + Quinta + Bollinger + Onda ⚠️ | **+138% · −24,7%** | +39% · −5,3% | +27% | −7,2% | 1,9 | 0,66 → 1,67 | +16% | 0,06 |
> | 598 | MACD + Pullback + Onda | **+98% · −22,8%** | +39% · −7,1% | +30% | −9,4% | 1,8 | 0,80 → 1,44 | +24% | 0,10 |
> | 599 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+140% · −29,5%** | +34% · −5,0% | +26% | −7,1% | 1,9 | 0,63 → 1,72 | +15% | 0,02 |
> | 600 | ADX + MACD + Pôr do sol + Onda | **+148% · −36,1%** | +44% · −8,5% | +30% | −7,5% | 2,3 | 0,48 → 1,68 | +19% | 0,06 |

> [!example]- Combinações 601 a 630 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 601 | 1ª vela 80 + Bollinger + Onda ⚠️ | **+139% · −25,6%** | +48% · −7,6% | +30% | −9,5% | 1,8 | 0,57 → 1,81 | +11% | 0,23 |
> | 602 | MACD + Quinta ⚠️ | **+47% · −9,7%** | +30% · −4,4% | +24% | −7,1% | 1,6 | 0,81 → 1,31 | +20% | −0,12 |
> | 603 | Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+100% · −24,8%** | +32% · −4,7% | +25% | −5,6% | 2,1 | 0,55 → 1,71 | +13% | −0,04 |
> | 604 | MACD + Pôr do sol + Bollinger + Onda | **+141% · −24,6%** | +39% · −5,4% | +26% | −7,4% | 1,8 | 0,59 → 1,70 | +16% | 0,11 |
> | 605 | MACD + 1ª vela 80 ⚠️ | **+81% · −19,4%** | +45% · −9,3% | +32% | −13,7% | 1,4 | 0,71 → 1,56 | +15% | 0,28 |
> | 606 | Pullback + Onda | **+63% · −19,9%** | +38% · −9,5% | +29% | −8,7% | 1,8 | 0,76 → 1,24 | +22% | 0,16 |
> | 607 | Quinta + Bollinger + Onda ⚠️ | **+98% · −17,6%** | +38% · −5,3% | +25% | −6,5% | 1,9 | 0,60 → 1,64 | +14% | −0,07 |
> | 608 | ADX + MACD | **+101% · −35,8%** | +57% · −17,7% | +35% | −11,8% | 1,9 | 0,60 → 1,59 | +19% | 0,17 |
> | 609 | ADX + Quinta ⚠️ | **+74% · −27,5%** | +44% · −13,8% | +28% | −8,8% | 1,7 | 0,68 → 1,51 | +14% | 0,09 |
> | 610 | Pôr do sol | **+20% · −3,0%** | +20% · −3,0% | +17% | −2,7% | 1,4 | 0,79 → 1,34 | +12% | — |
> | 611 | Pôr do sol + Bollinger + Onda | **+100% · −18,1%** | +38% · −5,5% | +25% | −6,2% | 1,9 | 0,51 → 1,70 | +14% | 0,00 |
> | 612 | ADX + MACD + Onda | **+134% · −38,6%** | +52% · −11,9% | +34% | −10,2% | 2,1 | 0,43 → 1,62 | +19% | 0,18 |
> | 613 | ADX + Quinta + Onda ⚠️ | **+108% · −30,6%** | +44% · −10,8% | +29% | −7,8% | 2,1 | 0,45 → 1,59 | +18% | −0,08 |
> | 614 | MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+127% · −29,5%** | +38% · −6,4% | +28% | −9,6% | 1,6 | 0,58 → 1,65 | +14% | 0,00 |
> | 615 | ADX + Pôr do sol | **+76% · −31,0%** | +45% · −13,7% | +28% | −8,2% | 1,8 | 0,57 → 1,58 | +12% | −0,07 |
> | 616 | MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+129% · −29,0%** | +38% · −6,5% | +28% | −9,4% | 1,6 | 0,52 → 1,67 | +14% | 0,13 |
> | 617 | ADX + Pôr do sol + Onda | **+110% · −31,2%** | +45% · −10,9% | +29% | −7,9% | 2,1 | 0,39 → 1,62 | +17% | −0,04 |
> | 618 | MACD + Pôr do sol + Quinta + Onda ⚠️ | **+90% · −22,6%** | +30% · −5,2% | +24% | −6,2% | 1,8 | 0,51 → 1,53 | +16% | −0,02 |
> | 619 | MACD + Bollinger + Onda | **+127% · −24,5%** | +46% · −7,6% | +30% | −10,5% | 1,6 | 0,53 → 1,62 | +15% | 0,29 |
> | 620 | MACD + Pôr do sol | **+49% · −11,2%** | +30% · −5,4% | +24% | −7,5% | 1,5 | 0,65 → 1,38 | +19% | −0,04 |
> | 621 | 1ª vela 80 + Quinta + Onda ⚠️ | **+89% · −23,6%** | +36% · −6,4% | +27% | −8,5% | 1,7 | 0,49 → 1,61 | +11% | −0,15 |
> | 622 | 1ª vela 80 ⚠️ | **+47% · −13,6%** | +47% · −13,6% | +32% | −12,8% | 1,5 | 0,59 → 1,48 | +9% | — |
> | 623 | Quinta ⚠️ | **+18% · −2,6%** | +18% · −2,6% | +17% | −3,7% | 1,1 | 1,22 → 0,66 | +15% | — |
> | 624 | Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+91% · −25,4%** | +37% · −7,2% | +27% | −8,3% | 1,7 | 0,41 → 1,64 | +11% | 0,08 |
> | 625 | MACD + 1ª vela 80 + Onda ⚠️ | **+116% · −29,5%** | +44% · −9,1% | +32% | −13,5% | 1,4 | 0,46 → 1,60 | +12% | 0,28 |
> | 626 | ADX + Onda | **+98% · −33,6%** | +57% · −16,1% | +35% | −12,1% | 1,8 | 0,32 → 1,54 | +18% | 0,06 |
> | 627 | Pôr do sol + Quinta + Onda ⚠️ | **+57% · −16,3%** | +27% · −4,3% | +22% | −5,2% | 1,7 | 0,39 → 1,40 | +14% | −0,09 |
> | 628 | ADX | **+66% · −30,8%** | +66% · −30,8% | +38% | −15,4% | 1,6 | 0,45 → 1,42 | +12% | — |
> | 629 | Bollinger + Onda | **+88% · −18,0%** | +48% · −8,5% | +29% | −10,0% | 1,6 | 0,42 → 1,58 | +12% | 0,17 |
> | 630 | MACD + Quinta + Onda ⚠️ | **+80% · −23,8%** | +34% · −6,3% | +27% | −8,9% | 1,6 | 0,45 → 1,45 | +15% | −0,06 |

> [!example]- Combinações 631 a 637 de 637 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 631 | MACD | **+40% · −10,5%** | +40% · −10,5% | +31% | −16,7% | 1,1 | 0,52 → 1,20 | +21% | — |
> | 632 | MACD + Pôr do sol + Onda | **+81% · −21,7%** | +34% · −6,8% | +27% | −9,1% | 1,5 | 0,38 → 1,48 | +15% | 0,06 |
> | 633 | 1ª vela 80 + Onda ⚠️ | **+80% · −24,2%** | +45% · −11,3% | +32% | −13,8% | 1,4 | 0,34 → 1,55 | +8% | 0,26 |
> | 634 | MACD + Onda | **+71% · −23,6%** | +42% · −9,8% | +31% | −14,5% | 1,3 | 0,31 → 1,39 | +13% | 0,31 |
> | 635 | Quinta + Onda ⚠️ | **+48% · −20,0%** | +30% · −8,2% | +24% | −8,6% | 1,3 | 0,30 → 1,27 | +12% | −0,38 |
> | 636 | Pôr do sol + Onda | **+49% · −16,1%** | +31% · −6,4% | +24% | −8,2% | 1,4 | 0,20 → 1,32 | +11% | −0,10 |
> | 637 | Onda | **+41% · −19,8%** | +41% · −19,8% | +30% | −18,7% | 0,9 | 0,11 → 1,19 | +5% | — |

*⚠️ = tem setup com dia da semana escolhido pelo autor do vídeo (fora da recomendação). Ao ano e pior queda com 1 contrato por R\$ 10 mil (capital dividido). Correlação = média entre os setups da combinação. Retorno ÷ queda = retorno ao ano acima do CDI dividido pela pior queda (2 = rendeu por ano o dobro da pior queda). **1% dividido** = 1% de risco repartido entre os setups (0,5% cada com 2, 0,33% com 3, 0,25% com 4): o mesmo risco total em todas as linhas, a comparação mais justa entre combinações. **1% por setup** = cada setup arrisca 1% do capital total em cada operação (veja abaixo) — com mais setups, mais risco aberto ao mesmo tempo, por isso as combinações grandes rendem e caem mais.*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

![Correlação mensal entre os setups](setups/img/carteira_correlacao.png)

*Correlação do resultado mensal.*

> [!example]- Quantas vezes operaram no mesmo dia (clique para abrir)
> - **ADX** e **IFR**: 48% dos dias em que pelo menos um deles operou
> - **ADX** e **MACD**: 54% dos dias em que pelo menos um deles operou
> - **ADX** e **Pôr do sol**: 39% dos dias em que pelo menos um deles operou
> - **ADX** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **ADX** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **ADX** e **Pullback**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **Bollinger**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **Tendência**: 65% dos dias em que pelo menos um deles operou
> - **ADX** e **Onda**: 65% dos dias em que pelo menos um deles operou
> - **IFR** e **MACD**: 55% dos dias em que pelo menos um deles operou
> - **IFR** e **Pôr do sol**: 43% dos dias em que pelo menos um deles operou
> - **IFR** e **1ª vela 80**: 29% dos dias em que pelo menos um deles operou
> - **IFR** e **Quinta**: 6% dos dias em que pelo menos um deles operou
> - **IFR** e **Pullback**: 10% dos dias em que pelo menos um deles operou
> - **IFR** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **IFR** e **Tendência**: 50% dos dias em que pelo menos um deles operou
> - **IFR** e **Onda**: 45% dos dias em que pelo menos um deles operou
> - **MACD** e **Pôr do sol**: 46% dos dias em que pelo menos um deles operou
> - **MACD** e **1ª vela 80**: 31% dos dias em que pelo menos um deles operou
> - **MACD** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **MACD** e **Pullback**: 17% dos dias em que pelo menos um deles operou
> - **MACD** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **MACD** e **Tendência**: 67% dos dias em que pelo menos um deles operou
> - **MACD** e **Onda**: 51% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **1ª vela 80**: 27% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Quinta**: 9% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Pullback**: 18% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Tendência**: 48% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Onda**: 42% dos dias em que pelo menos um deles operou
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

*Com 1 contrato por R\$ 10 mil (capital dividido). Todos = os 10 setups juntos · Recomendada = IFR + Pôr do sol + Pullback + Bollinger · Rec. 1% = a recomendada arriscando 1% por operação.*

| Ano | ⭐ Rec. 1% | ⭐ Recomendada | ADX | IFR | MACD | Pôr do sol | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | +7,0% | +2,9% | +2,1% | −3,6% | −2,9% | +3,9% | +7,7% | +4,0% | +7,5% | +4,0% | −1,7% | −3,9% | +1,4% | +1,3% | −0,7% | 1ª vela 80 |
| 2022 | +286,1% | +32,8% | +29,8% | +51,5% | +20,7% | +16,5% | +9,1% | +18,1% | +47,1% | +18,2% | +58,4% | +5,0% | +25,5% | +12,3% | +4,7% | ⭐ Rec. 1% |
| 2023 | +92,1% | +20,7% | +12,0% | +28,3% | +25,7% | +11,6% | +27,7% | +15,3% | +19,7% | +22,8% | +50,3% | +26,9% | +21,4% | +13,0% | +22,3% | ⭐ Rec. 1% |
| 2024 | +146,6% | +21,5% | +36,5% | +30,7% | +36,6% | +21,5% | +37,8% | +16,4% | +10,8% | +23,1% | +21,6% | +62,1% | +33,0% | +10,8% | −10,4% | ⭐ Rec. 1% |
| 2025 | +292,4% | +33,0% | +65,9% | +55,3% | +40,1% | +17,1% | +46,7% | +21,9% | +21,2% | +40,2% | +32,2% | +22,7% | +45,0% | +14,2% | +34,0% | ⭐ Rec. 1% |
| 2026* | +101,5% | +26,1% | +45,9% | +55,4% | +34,5% | +11,2% | +31,3% | +7,7% | +21,1% | +18,4% | +85,9% | +44,2% | +36,4% | +11,6% | +5,0% | ⭐ Rec. 1% |
| **Acumulado no período** | **+15362,5%** | **+236,2%** | **+390,5%** | **+491,2%** | **+279,1%** | **+113,6%** | **+298,3%** | **+116,5%** | **+208,0%** | **+208,4%** | **+599,3%** | **+267,5%** | **+306,4%** | **+81,6%** | **+60,3%** | **⭐ Rec. 1%** |
| **R\$ 10.000 viraram** | **R\$ 1.546.247** | **R\$ 33.620** | **R\$ 49.055** | **R\$ 59.118** | **R\$ 37.908** | **R\$ 21.361** | **R\$ 39.829** | **R\$ 21.646** | **R\$ 30.798** | **R\$ 30.836** | **R\$ 69.931** | **R\$ 36.747** | **R\$ 40.639** | **R\$ 18.156** | **R\$ 16.029** | |
| **Média ao ano** | **+177,0%** | **+27,8%** | **+37,9%** | **+43,2%** | **+30,9%** | **+16,6%** | **+32,2%** | **+16,9%** | **+25,5%** | **+25,6%** | **+48,1%** | **+30,1%** | **+32,8%** | **+12,8%** | **+10,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 29/10/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ⭐ Rec. 1% | ⭐ Recomendada | ADX | IFR | MACD | Pôr do sol | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | +3,0% | +1,3% | +1,3% | −1,9% | −0,3% | +1,6% | +1,9% | +1,6% | +2,6% | +2,8% | −2,9% | −8,9% | +0,6% | +0,6% | −3,4% |
> | dez/2021 | +3,8% | +1,6% | +0,8% | −1,8% | −2,6% | +2,3% | +5,6% | +2,4% | +4,8% | +1,1% | +1,2% | +5,5% | +0,9% | +0,7% | +2,9% |
> | jan/2022 | +28,8% | +3,8% | +2,7% | +6,4% | +3,0% | +1,4% | +2,1% | +1,4% | +5,1% | +2,0% | −0,1% | −0,7% | +3,1% | +0,7% | +7,0% |
> | fev/2022 | +1,7% | +1,0% | −1,1% | −2,6% | −1,9% | +3,5% | −0,0% | +0,7% | +2,7% | +0,5% | −1,1% | +1,1% | −0,4% | +0,8% | +0,9% |
> | mar/2022 | +25,2% | +3,7% | +4,5% | +7,8% | +5,7% | +1,1% | −3,1% | +0,9% | +2,6% | +3,3% | +10,1% | +9,0% | +3,2% | +0,9% | +6,1% |
> | abr/2022 | +11,2% | +1,8% | −4,1% | +0,6% | +1,9% | +1,2% | −0,9% | +2,2% | +2,2% | +3,2% | +4,8% | −2,0% | −0,2% | +0,8% | −10,1% |
> | mai/2022 | +3,5% | +1,5% | +6,6% | +2,0% | −0,2% | +1,5% | +13,8% | +1,9% | +2,2% | +0,2% | −1,2% | +0,4% | +4,7% | +1,0% | +3,2% |
> | jun/2022 | +11,3% | +2,5% | −1,2% | +3,5% | +0,9% | +2,0% | −4,0% | +3,4% | +3,6% | +0,7% | +3,3% | +0,1% | +0,3% | +1,0% | −11,5% |
> | jul/2022 | +3,1% | +1,4% | −2,9% | +1,0% | +1,3% | +1,4% | −0,2% | +1,0% | +2,5% | +0,5% | −0,6% | −5,0% | +0,1% | +1,0% | +4,7% |
> | ago/2022 | +38,0% | +5,0% | +12,3% | +11,5% | +5,2% | +0,5% | +6,7% | +0,2% | +4,7% | +3,6% | +12,6% | +10,3% | +7,2% | +1,2% | +6,2% |
> | set/2022 | −2,7% | +0,9% | −1,7% | −1,2% | +7,2% | +1,8% | −1,0% | +2,9% | +2,8% | +0,3% | +8,3% | −3,0% | +1,0% | +1,1% | +0,5% |
> | out/2022 | +15,0% | +3,0% | +6,3% | +6,2% | +1,6% | −0,5% | −2,9% | −0,1% | +4,4% | +1,7% | +4,1% | −1,5% | +2,2% | +1,0% | +5,5% |
> | nov/2022 | +8,5% | +2,6% | −1,0% | +1,7% | −6,0% | −0,6% | −3,1% | +1,0% | +6,8% | +2,4% | +0,3% | +4,5% | −1,8% | +1,0% | −3,1% |
> | dez/2022 | +6,3% | +1,7% | +7,2% | +6,2% | +1,0% | +2,1% | +2,8% | +1,2% | −0,2% | −1,4% | +7,6% | −6,8% | +3,9% | +1,1% | −2,4% |
> | jan/2023 | +18,5% | +3,2% | −0,1% | +2,0% | +4,5% | +1,8% | +4,3% | +1,1% | +3,3% | +5,7% | +14,1% | +7,2% | +2,5% | +1,1% | +3,4% |
> | fev/2023 | +3,2% | +1,2% | +7,9% | +1,4% | −0,5% | +3,2% | +1,3% | +2,7% | −1,4% | +1,6% | +7,4% | −9,5% | +2,6% | +0,9% | −7,5% |
> | mar/2023 | +1,3% | +1,4% | −2,9% | +0,4% | +5,9% | +2,1% | +1,7% | +0,3% | +2,3% | +0,8% | +3,1% | −3,7% | +1,4% | +1,2% | −2,9% |
> | abr/2023 | −3,9% | +0,4% | +7,4% | +2,2% | −4,4% | −0,5% | −0,7% | +0,8% | +0,3% | −0,6% | −2,0% | +1,4% | +0,7% | +0,9% | +2,5% |
> | mai/2023 | +2,7% | +1,6% | +3,9% | +0,7% | +2,8% | +0,2% | +4,3% | +1,1% | +4,8% | +0,5% | −2,2% | +1,7% | +2,4% | +1,1% | +3,7% |
> | jun/2023 | +12,2% | +2,0% | −4,6% | +1,3% | +2,1% | +1,1% | +3,0% | +1,8% | +0,7% | +4,9% | +10,0% | +7,4% | +0,6% | +1,1% | +9,0% |
> | jul/2023 | +10,4% | +2,1% | +3,2% | +5,9% | +5,1% | +0,3% | +5,8% | +1,0% | +0,1% | +2,0% | +4,8% | −1,7% | +4,1% | +1,1% | +3,3% |
> | ago/2023 | +5,6% | +1,8% | +0,6% | +5,1% | −0,1% | +0,5% | −3,6% | +1,0% | +1,0% | +0,5% | +2,9% | +5,6% | +0,5% | +1,1% | −5,1% |
> | set/2023 | +7,5% | +1,3% | −1,6% | +0,1% | +0,5% | +0,7% | −0,8% | +1,6% | +0,9% | +3,6% | +0,4% | −3,5% | −0,2% | +1,0% | +0,7% |
> | out/2023 | +8,7% | +2,0% | +1,0% | +3,6% | +2,6% | +0,7% | +1,2% | +0,9% | +3,0% | +0,6% | +0,5% | +6,1% | +1,9% | +1,0% | −2,9% |
> | nov/2023 | +7,5% | +1,6% | +3,4% | +2,1% | +3,6% | +0,3% | +9,6% | +0,7% | +2,4% | +1,6% | +2,7% | +5,7% | +3,8% | +0,9% | +12,5% |
> | dez/2023 | −4,5% | +0,4% | −5,7% | +0,6% | +1,6% | +0,7% | −0,7% | +1,4% | +0,7% | −0,3% | +1,1% | +8,9% | −0,7% | +0,9% | +5,4% |
> | jan/2024 | +9,0% | +1,6% | +10,5% | −0,9% | +0,4% | +2,2% | +7,5% | +0,3% | +1,4% | +3,6% | +5,6% | +4,0% | +3,9% | +1,0% | −4,8% |
> | fev/2024 | +12,9% | +2,3% | +7,2% | +5,8% | +9,9% | +2,1% | +1,8% | +1,3% | −0,1% | +1,2% | +9,9% | +2,8% | +5,4% | +0,8% | +1,0% |
> | mar/2024 | +3,0% | +1,2% | −5,6% | +1,5% | −0,7% | +1,3% | +0,8% | +1,9% | +2,1% | +0,0% | +1,7% | −1,3% | −0,6% | +0,8% | −0,7% |
> | abr/2024 | +12,3% | +2,3% | +3,2% | +5,1% | −1,0% | +1,4% | +2,8% | +1,5% | +0,5% | +2,2% | −7,4% | +5,2% | +2,3% | +0,9% | −1,7% |
> | mai/2024 | −3,6% | +0,2% | −4,0% | −1,4% | −1,5% | +1,9% | +4,6% | +1,4% | −0,6% | +1,0% | −0,3% | +0,8% | −0,1% | +0,8% | −3,0% |
> | jun/2024 | +8,4% | +1,7% | −0,9% | +1,3% | +4,0% | +1,7% | +1,5% | +0,8% | +2,7% | +1,0% | −0,1% | +0,5% | +1,6% | +0,8% | +1,5% |
> | jul/2024 | +8,7% | +1,8% | −1,9% | +3,6% | −0,7% | +2,0% | +3,6% | +1,4% | +0,4% | +1,1% | −1,1% | +7,1% | +1,3% | +0,9% | +3,0% |
> | ago/2024 | +11,6% | +1,8% | +4,7% | +2,1% | +5,8% | +1,8% | +6,2% | +1,1% | +0,1% | +3,2% | +2,7% | +3,4% | +4,1% | +0,9% | +6,5% |
> | set/2024 | +16,9% | +2,7% | +2,2% | +2,2% | +2,2% | +0,7% | +0,8% | +0,7% | +6,2% | +1,9% | +4,8% | +10,5% | +1,6% | +0,8% | −3,1% |
> | out/2024 | +2,3% | +0,9% | +6,2% | +1,4% | +3,6% | +1,6% | −1,7% | +1,6% | −1,4% | +2,1% | −2,5% | +0,6% | +2,2% | +0,9% | −1,6% |
> | nov/2024 | +5,8% | +1,4% | +2,3% | +4,5% | +3,2% | +1,2% | +2,5% | +0,7% | −2,0% | +1,9% | +0,1% | +5,7% | +2,8% | +0,8% | −3,1% |
> | dez/2024 | +8,2% | +1,8% | +9,0% | +2,2% | +7,1% | +1,6% | +2,2% | +2,5% | +1,2% | +1,9% | +7,4% | +10,7% | +4,4% | +0,8% | −4,3% |
> | jan/2025 | +17,8% | +3,0% | +8,6% | +5,3% | +9,0% | +2,3% | +6,4% | +1,0% | +1,3% | +2,9% | +11,9% | +8,5% | +6,4% | +1,0% | +4,9% |
> | fev/2025 | +18,5% | +3,2% | +5,5% | +6,0% | +4,1% | +1,5% | +2,1% | +2,4% | +3,2% | +2,0% | +4,5% | +5,4% | +3,9% | +1,0% | −2,6% |
> | mar/2025 | +8,5% | +1,2% | +7,3% | −0,4% | +2,4% | −0,2% | +5,2% | +0,6% | −0,5% | +6,0% | +8,4% | +1,4% | +2,9% | +1,0% | +6,1% |
> | abr/2025 | −4,7% | +0,3% | +0,7% | +0,1% | −7,1% | +1,4% | +1,7% | +3,4% | +0,3% | −0,8% | −6,7% | −7,0% | −0,6% | +1,1% | +3,7% |
> | mai/2025 | +26,4% | +4,0% | +10,5% | +6,8% | +4,0% | +2,7% | +5,9% | +1,8% | +2,0% | +4,6% | +5,4% | +8,2% | +6,0% | +1,1% | +1,5% |
> | jun/2025 | +6,9% | +2,0% | +2,0% | +2,3% | +0,6% | +0,6% | +0,2% | +1,9% | +3,8% | +1,1% | −4,5% | +2,0% | +1,2% | +1,1% | +1,3% |
> | jul/2025 | +5,9% | +1,8% | +4,0% | +0,9% | +2,1% | +1,2% | +2,5% | +2,1% | +2,9% | +2,3% | −0,9% | −1,4% | +2,2% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +5,8% | +8,2% | +14,6% | +13,1% | +1,2% | +6,8% | +2,0% | −0,7% | +8,5% | +6,9% | +1,5% | +8,8% | +1,2% | +6,3% |
> | set/2025 | −5,8% | +0,1% | +3,8% | −3,5% | −3,3% | +0,9% | +2,9% | +0,5% | +1,6% | +1,3% | −2,4% | +2,8% | +0,2% | +1,2% | +3,4% |
> | out/2025 | +13,6% | +2,7% | +5,1% | +2,1% | +1,7% | +2,0% | +1,4% | +2,6% | +3,6% | +3,2% | −2,9% | −0,0% | +2,5% | +1,3% | +2,3% |
> | nov/2025 | +8,3% | +2,0% | +7,3% | +5,9% | +7,6% | +0,2% | +5,5% | +1,1% | −0,8% | +3,0% | +7,8% | −1,9% | +5,3% | +1,1% | +6,4% |
> | dez/2025 | +13,3% | +2,9% | −9,7% | +5,7% | +1,5% | +2,1% | −1,2% | +0,7% | +2,9% | +0,6% | +2,5% | +2,2% | −0,4% | +1,1% | +1,3% |
> | jan/2026 | +11,7% | +2,4% | +7,3% | +4,8% | +10,5% | −0,9% | +5,6% | +3,0% | −0,2% | +5,8% | +11,3% | +0,9% | +5,5% | +1,2% | +12,6% |
> | fev/2026 | −1,7% | +0,2% | −10,0% | +1,6% | +3,1% | +1,1% | +13,8% | −2,1% | −2,0% | +0,1% | −6,6% | +3,9% | +1,7% | +1,0% | +4,1% |
> | mar/2026 | +3,4% | +2,1% | +1,9% | +1,2% | +9,2% | +1,1% | −1,7% | +1,2% | +5,3% | +0,5% | +15,3% | +15,5% | +2,4% | +1,2% | −0,7% |
> | abr/2026 | +25,3% | +5,2% | +23,4% | +7,0% | +1,4% | +2,2% | +5,1% | +1,0% | +2,2% | +9,5% | +5,8% | +5,0% | +7,7% | +1,1% | −0,1% |
> | mai/2026 | +0,5% | +1,2% | −1,8% | +5,1% | +3,6% | +0,1% | −1,8% | +2,1% | +0,4% | −0,9% | −2,8% | −4,6% | +1,1% | +1,1% | −7,2% |
> | jun/2026 | −4,8% | +0,4% | −2,9% | −2,6% | −3,2% | +1,7% | −0,4% | +1,1% | +3,4% | −0,9% | −0,5% | −2,7% | −1,4% | +1,1% | −1,0% |
> | jul/2026 | +8,8% | +2,7% | −0,1% | +8,9% | +6,1% | +1,5% | +10,1% | −1,1% | +0,3% | +0,2% | +13,5% | +27,4% | +5,4% | +1,2% | +3,5% |
> | ago/2026 | +14,7% | +3,6% | +1,9% | +5,8% | +5,1% | +1,4% | +4,8% | −1,4% | +4,1% | +3,1% | +9,9% | +1,7% | +3,9% | +1,1% | −0,3% |
> | set/2026 | +2,1% | +1,6% | +16,4% | −0,6% | −2,3% | −0,3% | −3,5% | +1,1% | +6,0% | +1,2% | +4,2% | +1,0% | +1,9% | +1,1% | +5,0% |
> | out/2026 | +16,2% | +4,1% | +6,4% | +14,8% | −2,5% | +3,0% | −2,9% | +2,6% | +0,0% | −1,0% | +16,6% | −6,6% | +3,8% | +1,0% | −9,2% |
> | **Acumulado** | **+15362,5%** | **+236,2%** | **+390,5%** | **+491,2%** | **+279,1%** | **+113,6%** | **+298,3%** | **+116,5%** | **+208,0%** | **+208,4%** | **+599,3%** | **+267,5%** | **+306,4%** | **+81,6%** | **+60,3%** |

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = IFR + Pôr do sol + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **Todos ⚠️** = os 10 setups com 1% cada: até 10% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| Ano | ⭐ Recomendada | ⭐ Recomendada ÷ | ADX | IFR | MACD | Pôr do sol | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos ÷ | Todos ⚠️ | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | +7,0% | +2,8% | +2,0% | −9,3% | −2,8% | +4,7% | +10,2% | +4,2% | +10,2% | +6,4% | −2,9% | −3,7% | +1,2% | −2,0% | +1,3% | −0,7% | Pullback |
| 2022 | +286,1% | +55,7% | +51,0% | +108,3% | +27,8% | +21,1% | +7,2% | +19,1% | +70,5% | +30,1% | +94,7% | +8,2% | +43,3% | +174,1% | +12,3% | +4,7% | ⭐ Recomendada |
| 2023 | +92,1% | +30,4% | +7,4% | +45,0% | +30,3% | +10,0% | +36,6% | +16,4% | +24,7% | +40,6% | +78,7% | +36,6% | +27,8% | +64,2% | +13,0% | +22,3% | ⭐ Recomendada |
| 2024 | +146,6% | +36,9% | +71,5% | +48,1% | +51,6% | +33,5% | +73,1% | +19,2% | +9,6% | +56,8% | +31,5% | +97,1% | +57,4% | +398,3% | +10,8% | −10,4% | Todos ⚠️ |
| 2025 | +292,4% | +58,5% | +161,6% | +88,9% | +60,7% | +18,5% | +77,3% | +23,5% | +29,0% | +108,7% | +62,2% | +36,3% | +79,6% | +708,2% | +14,2% | +34,0% | Todos ⚠️ |
| 2026* | +101,5% | +31,0% | +65,7% | +70,7% | +36,3% | +11,1% | +37,3% | +9,0% | +20,5% | +24,6% | +101,9% | +41,3% | +45,7% | +220,6% | +11,6% | +5,0% | Todos ⚠️ |
| **Acumulado no período** | **+15362,5%** | **+493,8%** | **+1130,6%** | **+1207,2%** | **+437,5%** | **+145,0%** | **+579,7%** | **+131,6%** | **+299,2%** | **+693,8%** | **+1354,6%** | **+440,3%** | **+662,8%** | **+56824,4%** | **+81,6%** | **+60,3%** | **Todos ⚠️** |
| **R\$ 10.000 viraram** | **R\$ 1.546.247** | **R\$ 59.376** | **R\$ 123.064** | **R\$ 130.723** | **R\$ 53.747** | **R\$ 24.505** | **R\$ 67.969** | **R\$ 23.158** | **R\$ 39.919** | **R\$ 79.379** | **R\$ 145.463** | **R\$ 54.029** | **R\$ 76.281** | **R\$ 5.692.445** | **R\$ 18.156** | **R\$ 16.029** | |
| **Média ao ano** | **+177,0%** | **+43,3%** | **+66,1%** | **+68,1%** | **+40,5%** | **+19,9%** | **+47,3%** | **+18,5%** | **+32,3%** | **+52,0%** | **+71,8%** | **+40,6%** | **+50,8%** | **+260,4%** | **+12,8%** | **+10,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 29/10/2026.

> [!example]- Mês a mês arriscando 1% por operação (clique para abrir)
> | Mês | ⭐ Recomendada | ⭐ Recomendada ÷ | ADX | IFR | MACD | Pôr do sol | 1ª vela 80 | Quinta | Pullback | Bollinger | Tendência | Onda | Todos ÷ | Todos ⚠️ | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | +3,0% | +1,3% | +2,1% | −4,8% | −0,3% | +1,9% | +2,2% | +1,5% | +3,0% | +5,1% | −3,9% | −8,4% | +0,3% | −1,7% | +0,6% | −3,4% |
> | dez/2021 | +3,8% | +1,5% | −0,0% | −4,7% | −2,5% | +2,8% | +7,8% | +2,6% | +7,0% | +1,2% | +1,1% | +5,1% | +0,8% | −0,3% | +0,7% | +2,9% |
> | jan/2022 | +28,8% | +7,3% | +5,7% | +13,6% | +3,8% | +2,0% | +3,2% | +1,6% | +8,7% | +4,8% | −0,2% | −0,7% | +5,8% | +26,0% | +0,7% | +7,0% |
> | fev/2022 | +1,7% | +1,0% | −4,6% | −6,1% | −2,7% | +6,0% | −0,8% | +0,7% | +4,7% | −0,1% | −2,5% | +2,0% | −1,7% | −11,4% | +0,8% | +0,9% |
> | mar/2022 | +25,2% | +6,7% | +10,4% | +15,7% | +6,7% | +1,3% | −5,0% | +0,9% | +3,6% | +6,3% | +16,3% | +10,8% | +5,8% | +25,2% | +0,9% | +6,1% |
> | abr/2022 | +11,2% | +3,5% | −12,3% | +0,6% | +2,1% | +1,5% | −2,2% | +2,7% | +3,4% | +8,2% | +8,2% | −3,4% | −2,0% | −13,3% | +0,8% | −10,1% |
> | mai/2022 | +3,5% | +1,7% | +16,7% | +2,9% | −0,4% | +1,7% | +17,3% | +2,0% | +3,0% | −1,0% | −2,5% | +1,3% | +7,7% | +34,8% | +1,0% | +3,2% |
> | jun/2022 | +11,3% | +3,6% | −5,5% | +6,8% | +0,8% | +2,4% | −6,6% | +3,9% | +4,7% | +0,2% | +4,9% | −0,2% | −0,3% | −7,1% | +1,0% | −11,5% |
> | jul/2022 | +3,1% | +1,8% | −11,1% | +0,9% | +1,9% | +1,6% | −1,6% | +0,9% | +4,1% | +0,3% | −1,1% | −6,9% | −1,7% | −13,7% | +1,0% | +4,7% |
> | ago/2022 | +38,0% | +9,7% | +32,9% | +23,5% | +6,5% | +0,1% | +10,8% | +0,1% | +7,5% | +8,0% | +22,4% | +12,6% | +14,6% | +76,8% | +1,2% | +6,2% |
> | set/2022 | −2,7% | +0,2% | −7,1% | −3,9% | +7,8% | +2,1% | −1,9% | +3,0% | +3,4% | −0,9% | +11,7% | −2,9% | −0,5% | −8,5% | +1,1% | +0,5% |
> | out/2022 | +15,0% | +4,7% | +14,5% | +11,0% | +1,9% | −1,0% | −4,0% | −0,1% | +5,7% | +2,4% | +5,3% | −0,9% | +4,6% | +15,8% | +1,0% | +5,5% |
> | nov/2022 | +8,5% | +2,9% | −5,2% | +2,2% | −4,3% | −0,5% | −3,0% | +1,0% | +6,5% | +3,3% | +0,4% | +3,6% | −2,0% | −14,8% | +1,0% | −3,1% |
> | dez/2022 | +6,3% | +2,6% | +17,7% | +12,3% | +1,4% | +2,3% | +3,3% | +1,0% | −0,4% | −3,9% | +8,9% | −5,5% | +7,6% | +31,0% | +1,1% | −2,4% |
> | jan/2023 | +18,5% | +5,3% | −2,8% | +2,8% | +4,5% | +2,0% | +5,1% | +1,1% | +4,4% | +12,1% | +18,3% | +7,3% | +2,5% | +5,2% | +1,1% | +3,4% |
> | fev/2023 | +3,2% | +1,5% | +20,2% | +1,8% | −0,6% | +4,3% | +1,4% | +2,8% | −2,6% | +2,6% | +11,1% | −10,6% | +5,4% | +23,7% | +0,9% | −7,5% |
> | mar/2023 | +1,3% | +1,3% | −11,3% | −0,6% | +6,8% | +2,7% | +1,8% | +0,2% | +2,9% | −0,1% | +4,6% | −4,3% | −0,1% | −8,0% | +1,2% | −2,9% |
> | abr/2023 | −3,9% | −0,2% | +20,2% | +3,3% | −5,2% | −1,4% | −1,3% | +0,8% | −0,1% | −3,1% | −3,5% | +1,7% | +3,0% | +9,2% | +0,9% | +2,5% |
> | mai/2023 | +2,7% | +1,7% | +8,6% | +0,5% | +3,1% | −0,4% | +6,8% | +1,0% | +7,3% | −0,8% | −4,6% | +1,7% | +4,0% | +13,3% | +1,1% | +3,7% |
> | jun/2023 | +12,2% | +3,9% | −13,7% | +1,6% | +2,3% | +1,3% | +4,7% | +2,0% | +0,3% | +12,5% | +17,7% | +10,4% | −0,7% | −9,1% | +1,1% | +9,0% |
> | jul/2023 | +10,4% | +3,4% | +5,8% | +10,5% | +6,2% | −0,2% | +9,2% | +1,0% | −0,5% | +4,0% | +7,7% | −2,1% | +6,4% | +27,8% | +1,1% | +3,3% |
> | ago/2023 | +5,6% | +2,3% | −0,7% | +9,0% | −0,3% | −0,0% | −6,8% | +1,1% | +0,9% | −0,8% | +4,4% | +6,8% | +0,3% | −4,6% | +1,1% | −5,1% |
> | set/2023 | +7,5% | +2,6% | −5,5% | −0,7% | +0,5% | +0,4% | −2,2% | +1,9% | +0,8% | +10,0% | +0,3% | −5,8% | −1,4% | −11,1% | +1,0% | +0,7% |
> | out/2023 | +8,7% | +2,9% | +0,7% | +6,3% | +3,5% | +0,6% | +1,2% | +0,9% | +5,0% | −0,2% | +0,0% | +8,1% | +2,6% | +8,1% | +1,0% | −2,9% |
> | nov/2023 | +7,5% | +2,6% | +7,3% | +3,5% | +4,4% | −0,2% | +15,9% | +0,8% | +4,0% | +3,1% | +4,0% | +6,8% | +6,2% | +25,3% | +0,9% | +12,5% |
> | dez/2023 | −4,5% | −0,4% | −14,2% | +0,4% | +2,2% | +0,5% | −2,4% | +1,7% | +0,4% | −3,1% | +2,3% | +14,6% | −2,8% | −16,8% | +0,9% | +5,4% |
> | jan/2024 | +9,0% | +3,0% | +24,2% | −2,3% | +0,3% | +3,3% | +14,6% | −0,0% | +1,3% | +9,7% | +9,7% | +5,3% | +7,8% | +37,5% | +1,0% | −4,8% |
> | fev/2024 | +12,9% | +3,8% | +16,0% | +9,8% | +13,8% | +3,3% | +2,9% | +1,7% | −1,0% | +3,0% | +18,8% | +3,8% | +9,2% | +46,0% | +0,8% | +1,0% |
> | mar/2024 | +3,0% | +1,4% | −14,1% | +2,0% | −1,7% | +2,0% | +0,6% | +2,7% | +3,8% | −2,2% | +2,9% | −2,7% | −2,4% | −14,9% | +0,8% | −0,7% |
> | abr/2024 | +12,3% | +3,8% | +6,2% | +8,5% | −1,4% | +1,8% | +3,8% | +1,7% | +0,4% | +4,3% | −13,6% | +7,0% | +3,9% | +14,7% | +0,9% | −1,7% |
> | mai/2024 | −3,6% | −0,3% | −10,5% | −3,2% | −2,1% | +3,0% | +8,9% | +1,7% | −2,2% | +1,3% | −1,1% | +1,2% | −0,9% | −9,0% | +0,8% | −3,0% |
> | jun/2024 | +8,4% | +2,7% | −3,9% | +1,7% | +6,0% | +2,7% | +3,1% | +0,7% | +4,3% | +1,9% | −0,9% | −0,4% | +2,1% | +6,2% | +0,8% | +1,5% |
> | jul/2024 | +8,7% | +2,9% | −6,0% | +5,8% | −1,0% | +3,7% | +8,6% | +1,8% | +0,0% | +2,0% | −2,5% | +14,0% | +2,2% | +5,2% | +0,9% | +3,0% |
> | ago/2024 | +11,6% | +3,6% | +9,3% | +2,8% | +8,3% | +2,8% | +11,5% | +1,6% | −0,8% | +9,5% | +5,4% | +5,0% | +7,0% | +31,7% | +0,9% | +6,5% |
> | set/2024 | +16,9% | +4,8% | +3,4% | +3,1% | +3,3% | +0,4% | +1,4% | +0,7% | +11,4% | +4,1% | +8,8% | +15,9% | +2,5% | +6,4% | +0,8% | −3,1% |
> | out/2024 | +2,3% | +1,3% | +13,3% | +1,7% | +5,0% | +2,4% | −4,2% | +1,8% | −3,8% | +5,1% | −6,1% | +1,1% | +3,6% | +13,5% | +0,9% | −1,6% |
> | nov/2024 | +5,8% | +2,2% | +3,8% | +7,4% | +4,9% | +1,7% | +3,3% | +0,7% | −4,6% | +4,1% | −0,7% | +8,8% | +4,3% | +15,6% | +0,8% | −3,1% |
> | dez/2024 | +8,2% | +2,7% | +21,3% | +3,5% | +8,2% | +2,2% | +3,1% | +2,7% | +1,2% | +3,7% | +11,1% | +12,6% | +7,6% | +36,0% | +0,8% | −4,3% |
> | jan/2025 | +17,8% | +5,3% | +19,5% | +9,1% | +12,1% | +3,3% | +10,2% | +1,0% | +1,4% | +6,8% | +21,4% | +11,4% | +11,1% | +55,9% | +1,0% | +4,9% |
> | fev/2025 | +18,5% | +5,3% | +11,8% | +10,1% | +5,0% | +1,9% | +2,9% | +2,9% | +5,0% | +3,9% | +7,2% | +7,1% | +6,5% | +27,9% | +1,0% | −2,6% |
> | mar/2025 | +8,5% | +2,9% | +16,4% | −1,4% | +2,8% | −1,0% | +8,0% | +0,8% | −1,2% | +15,8% | +13,2% | +2,3% | +5,0% | +20,9% | +1,0% | +6,1% |
> | abr/2025 | −4,7% | −0,3% | +0,4% | −0,8% | −5,3% | +1,5% | +2,6% | +3,0% | +0,7% | −2,9% | −9,0% | −4,8% | −0,1% | −6,7% | +1,1% | +3,7% |
> | mai/2025 | +26,4% | +7,1% | +22,7% | +10,9% | +5,2% | +3,4% | +9,8% | +2,0% | +2,7% | +11,2% | +10,3% | +10,4% | +10,5% | +50,7% | +1,1% | +1,5% |
> | jun/2025 | +6,9% | +2,6% | +2,5% | +3,0% | +1,0% | +0,4% | +0,1% | +2,0% | +5,7% | +1,3% | −7,0% | +2,6% | +1,5% | +1,8% | +1,1% | +1,3% |
> | jul/2025 | +5,9% | +2,6% | +6,9% | +0,4% | +2,6% | +1,1% | +3,0% | +2,2% | +4,3% | +4,3% | −2,3% | −1,8% | +2,9% | +7,7% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +11,0% | +17,5% | +24,8% | +15,3% | +1,2% | +9,7% | +2,1% | −1,8% | +21,6% | +10,2% | +1,5% | +13,7% | +74,4% | +1,2% | +6,3% |
> | set/2025 | −5,8% | −0,6% | +6,4% | −6,4% | −4,5% | +0,7% | +4,0% | +0,2% | +1,9% | +1,7% | −5,1% | +3,8% | +0,0% | −5,4% | +1,2% | +3,4% |
> | out/2025 | +13,6% | +4,3% | +8,9% | +2,6% | +1,7% | +2,4% | +1,3% | +3,1% | +5,2% | +6,7% | −6,2% | −0,3% | +3,5% | +11,2% | +1,3% | +2,3% |
> | nov/2025 | +8,3% | +2,9% | +13,4% | +8,4% | +10,5% | −0,5% | +8,8% | +1,1% | −2,4% | +6,5% | +14,5% | −2,4% | +8,2% | +36,6% | +1,1% | +6,4% |
> | dez/2025 | +13,3% | +4,3% | −19,1% | +7,8% | +3,8% | +2,8% | −0,9% | +1,0% | +4,8% | +1,3% | +7,5% | +2,8% | −1,5% | −13,1% | +1,1% | +1,3% |
> | jan/2026 | +11,7% | +3,9% | +12,6% | +6,2% | +11,1% | −1,0% | +8,1% | +3,1% | −1,0% | +11,4% | +16,8% | +3,2% | +7,5% | +30,7% | +1,2% | +12,6% |
> | fev/2026 | −1,7% | +0,3% | −16,9% | +1,8% | +2,2% | +1,2% | +11,6% | −1,0% | −1,3% | −0,4% | −5,4% | +2,9% | −0,4% | −6,2% | +1,0% | +4,1% |
> | mar/2026 | +3,4% | +1,8% | +2,0% | +1,1% | +6,4% | +1,1% | −1,0% | +1,2% | +4,6% | +0,2% | +13,4% | +9,6% | +2,1% | +3,0% | +1,2% | −0,7% |
> | abr/2026 | +25,3% | +6,9% | +38,5% | +8,5% | +2,2% | +2,2% | +5,9% | +1,0% | +2,6% | +14,4% | +6,6% | +5,2% | +11,0% | +55,0% | +1,1% | −0,1% |
> | mai/2026 | +0,5% | +1,0% | −4,5% | +6,1% | +3,2% | +0,0% | −2,0% | +2,0% | +0,3% | −2,4% | −3,1% | −3,5% | +0,7% | −3,1% | +1,1% | −7,2% |
> | jun/2026 | −4,8% | −0,4% | −6,5% | −4,0% | −2,5% | +1,7% | −0,5% | +1,1% | +3,7% | −2,9% | −0,5% | −1,7% | −2,3% | −15,4% | +1,1% | −1,0% |
> | jul/2026 | +8,8% | +3,2% | −1,6% | +11,7% | +6,1% | +1,6% | +12,2% | −0,8% | +0,4% | −0,8% | +16,5% | +24,1% | +6,1% | +24,1% | +1,2% | +3,5% |
> | ago/2026 | +14,7% | +4,5% | +2,1% | +7,6% | +4,5% | +1,4% | +4,9% | −0,9% | +4,0% | +4,7% | +11,3% | +1,6% | +4,3% | +14,5% | +1,1% | −0,3% |
> | set/2026 | +2,1% | +1,6% | +27,8% | −1,1% | −0,4% | −0,2% | −3,0% | +1,1% | +5,7% | +1,6% | +5,0% | +0,8% | +4,4% | +15,5% | +1,1% | +5,0% |
> | out/2026 | +16,2% | +4,7% | +9,2% | +18,8% | −0,6% | +2,7% | −2,4% | +2,0% | +0,3% | −2,0% | +15,2% | −4,4% | +5,5% | +21,8% | +1,0% | −9,2% |
> | **Acumulado** | **+15362,5%** | **+493,8%** | **+1130,6%** | **+1207,2%** | **+437,5%** | **+145,0%** | **+579,7%** | **+131,6%** | **+299,2%** | **+693,8%** | **+1354,6%** | **+440,3%** | **+662,8%** | **+56824,4%** | **+81,6%** | **+60,3%** |

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pôr do Sol (17h45) + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,15% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,15% | +28% | −2% | −3% | −5% |
| Risco fixo de 0,5% por operação | 0,50% | +80% | −8% | −11% | −16% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+177%** | **−17%** | −21% | −31% |
| Risco fixo de 2% por operação | 2,00% | +486% | −33% | −39% | −53% |
| Kelly ¼ | 2,85% | +1069% | −44% | −54% | −71% |
| Kelly ½ | 5,70% | +3752% | −72% | −82% | −94% |
| Kelly cheio | 11,41% | +2564% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,70% | +349% | −30% | −35% | −49% |
| Larry Williams 5% | 3,39% | +1098% | −54% | −59% | −76% |
| Larry Williams 10% | 6,78% | +3084% | −81% | −87% | −96% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros). **Sorteio:** a ordem das operações foi embaralhada 2.000 vezes — a queda de verdade depende da sorte na sequência, e a ordem real foi das mais favoráveis. Planeje pela queda do sorteio, não pela real.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: IFR de Tendência 7,7% · Pôr do Sol (17h45) 10,3% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
- **Larry Williams:** no campeonato de 1987 ele usou o Kelly como fração do capital ÷ **margem** por contrato — a conta foi de US\$ 10 mil a ~US\$ 2,1 milhões, caiu para ~US\$ 700 mil e terminou o ano em ~US\$ 1,1 milhão. Depois ele passou a usar **contratos = capital × risco% ÷ maior perda já vista por contrato**, com ~5% (cauteloso), 10–12% (moderado) e 15–18% (agressivo). Esses percentuais eram para poucas operações por ano; estes setups operam muitas vezes por mês e a maior perda deles é ~1,5 vezes o stop típico, então **Larry com 2,5% ≈ arriscar 1,7% por operação** — perto do tamanho sugerido.

### Calculadora de contratos (risco de 1% por operação)

**contratos = capital × 1% ÷ ((stop em pts + 15) × R\$ 0,20)** — arredonde para baixo. Calcule para cada setup, a cada operação, com o capital do momento (assim a posição cresce quando ganha e diminui quando perde).

| Setup | Stop hoje | Risco por contrato | R\$ 10.000 | R\$ 20.000 | R\$ 50.000 | R\$ 100.000 | R\$ 200.000 |
|---|---|---|---|---|---|---|---|
| ADX da Manhã | 257 pts | R\$ 54 | 1,8 | 3,7 | 9,2 | 18,4 | 36,8 |
| IFR de Tendência ⭐ | 342 pts | R\$ 71 | 1,4 | 2,8 | 7,0 | 14,0 | 28,0 |
| MACD na Tendência | 919 pts | R\$ 187 | 0,5 | 1,1 | 2,7 | 5,4 | 10,7 |
| Pôr do Sol (17h45) ⭐ | 689 pts | R\$ 141 | 0,7 | 1,4 | 3,6 | 7,1 | 14,2 |
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
