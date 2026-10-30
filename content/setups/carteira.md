---
title: Carteira de setups
date: 2026-10-30
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 30/10/2026 19:26 BRT · dados de 01/11/2021 a 30/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 15 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 41.030** (+33% ao ano · pior queda −11% · Sharpe 1,17)
> - CDI: **R\$ 18.156** (+13% ao ano) · Ibovespa: **R\$ 15.909** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pôr do Sol (17h45) + Pullback na Média + Rompimento da Bollinger** — R\$ 33.560, +28% ao ano, pior queda −2%. **Arriscando 1% por operação: R\$ 1.530.785, +176% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+0,6%** em 4 pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| # | Setup | Sharpe | Retorno ÷ queda | Teste ÷ treino | Meses > CDI | Correlação | Op./mês |
|---|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | 1,60 | 4,0 | 150% | 72% | 0,23 | 12,7 |
| 2º | [**Bollinger**](rompimento-da-bollinger) | 1,61 | 3,5 | 150% | 65% | 0,22 | 4,2 |
| 3º | [**Donchian**](donchian-com-medias) | 1,30 | 2,7 | 102% | 67% | 0,27 | 21,5 |
| 4º | [**Pôr do sol**](por-do-sol) | 1,11 | 1,4 | 150% | 65% | −0,06 | 8,2 |
| 5º | [**1ª vela 80**](primeira-vela-80-min) | 1,12 | 1,5 | 150% | 63% | 0,11 | 7,8 |
| 6º | [**ADX**](adx-da-manha) | 1,03 | 1,6 | 150% | 63% | 0,19 | 29,4 |
| 7º | [**Tendência**](tendencia-forte-do-dia) | 1,33 | 2,2 | 90% | 60% | 0,29 | 28,8 |
| 8º | [**Pullback**](pullback-na-media) | 1,20 | 2,8 | 28% | 60% | −0,04 | 5,0 |
| 9º | [**GPS médias**](gps-de-medias) | 1,07 | 1,5 | 62% | 65% | 0,24 | 20,1 |
| 10º | [**MACD**](macd-na-tendencia) | 0,94 | 1,1 | 150% | 63% | 0,25 | 14,7 |
| 11º | [**Onda**](vai-na-onda) | 0,73 | 0,9 | 150% | 57% | 0,16 | 19,4 |
| 12º | [**BB explosão**](explosao-da-bollinger) | 0,74 | 0,9 | 139% | 58% | 0,27 | 19,7 |
| 13º | [**Quinta**](primeira-vela-de-quinta) | 0,88 | 1,1 | 62% | 50% | −0,11 | 1,8 |
| 14º | [**VWAP**](bandas-de-vwap) | 0,46 | 0,3 | 146% | 57% | 0,26 | 25,6 |
| 15º | [**Rompe 200**](rompe-media-200) | 0,43 | 0,4 | 23% | 45% | 0,13 | 3,4 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| # | Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | +43% | **+68%** | −7% | **−11%** | 4 op · +0,46R |
| 2º | [**Bollinger**](rompimento-da-bollinger) | +26% | **+52%** | −4% | **−7%** | sem operações |
| 3º | [**Donchian**](donchian-com-medias) | +42% | **+83%** | −10% | **−24%** | 4 op · +1,26R |
| 4º | [**Pôr do sol**](por-do-sol) | +17% | **+20%** | −3% | **−3%** | 1 op · +0,17R |
| 5º | [**1ª vela 80**](primeira-vela-80-min) | +32% | **+47%** | −13% | **−14%** | 3 op · +0,91R |
| 6º | [**ADX**](adx-da-manha) | +38% | **+65%** | −15% | **−31%** | 8 op · +0,15R |
| 7º | [**Tendência**](tendencia-forte-do-dia) | +48% | **+72%** | −16% | **−24%** | 3 op · +2,14R |
| 8º | [**Pullback**](pullback-na-media) | +25% | **+32%** | −5% | **−9%** | sem operações |
| 9º | [**GPS médias**](gps-de-medias) | +36% | **+67%** | −15% | **−23%** | 4 op · +2,41R |
| 10º | [**MACD**](macd-na-tendencia) | +31% | **+40%** | −17% | **−11%** | 4 op · +0,48R |
| 11º | [**Onda**](vai-na-onda) | +30% | **+41%** | −19% | **−20%** | 3 op · +0,54R |
| 12º | [**BB explosão**](explosao-da-bollinger) | +26% | **+39%** | −14% | **−33%** | 3 op · +2,54R |
| 13º | [**Quinta**](primeira-vela-de-quinta) | +17% | **+18%** | −4% | **−3%** | sem operações |
| 14º | [**VWAP**](bandas-de-vwap) | +21% | **+25%** | −30% | **−20%** | 10 op · −0,52R |
| 15º | [**Rompe 200**](rompe-media-200) | +17% | **+20%** | −11% | **−10%** | sem operações |

- **IFR de Tendência:** entra na força medida pelo IFR · 10h–11h e 14h–16h
- **Rompimento da Bollinger:** rompimento da banda de Bollinger a favor da tendência · 10h15–11h e 14h–17h30
- **Donchian com Médias:** rompimento de canal a favor da tendência · 10h às 16h
- **Pôr do Sol (17h45):** scalp no fim do pregão, a favor do dia · 17h50 às 18h10
- **Primeira Vela de 80 Minutos:** força da primeira vela do dia, alvo longo com stop móvel · entra 10h20
- **ADX da Manhã:** pega o começo da tendência (ADX subindo), stop curto · 10h–11h
- **Tendência Forte do Dia:** segue a tendência já formada (rompimento longe da abertura) · o dia todo, até 17h
- **Pullback na Média:** entra na volta da correção até a média · 10h30–12h30 e 14h45–15h45
- **GPS de Médias:** tendência com alvo longo e stop curto · 10h–11h e 14h–16h
- **MACD na Tendência:** tendência do dia confirmada pelo MACD, com break even · 9h–11h30 e 14h–16h
- **Vai na Onda:** segue o fluxo: 3 velas a favor renovando o extremo do dia com volume · 9h45–16h
- **Explosão da Bollinger:** rompimento de volatilidade a favor da tendência · 10h às 16h (zera às 17h)
- **Primeira Vela de Quinta:** rompimento da primeira vela do dia (dia da semana escolhido) · 9h15
- **Bandas de VWAP:** rompimento da banda de VWAP a favor da média de 200 · 10h às 16h
- **Rompimento da Média de 200:** rompimento de média longa com alvo longo · 9h às 16h

*Correlação = com os outros setups (baixa é bom para a carteira). Como o ranking é feito: cada setup ganha uma posição em 4 critérios — **Sharpe** (retorno acima do CDI por oscilação), **retorno acima do CDI ÷ pior queda** (quanto rende para cada 1% de queda que você aguenta), **teste ÷ treino** (quanto do resultado por operação de 2021–2023 se manteve em 2024 em diante; 100% = manteve tudo) e **meses acima do CDI**. Vale a média das 4 posições. Correlação baixa com os outros é bom para a carteira, mas não entra na nota de cada setup.*

### Taxa de acerto, payoff e expectativa

Os mesmos setups vistos por operação, não por ano. [Ver todas as operações, uma a uma](operacoes).

| | Operações | Taxa de acerto | Ganho médio | Perda média | Payoff | Expectativa (pts) | Expectativa (R) | Lucro total | Lucro total (R\$, 1 contrato) |
|---|---|---|---|---|---|---|---|---|---|
| ⭐ **Recomendada** (IFR + Pôr do sol + Pullback + Bollinger) | 1832 | 39,6% | 523 pts | 231 pts | 2,26 | **67,8 pts** | +0,26 R | 124.214 pts | R\$ 24.843 |
| [ADX](adx-da-manha) | 1794 | 18,3% | 1.113 pts | 213 pts | 5,22 | **30,0 pts** | +0,13 R | 53.739 pts | R\$ 10.748 |
| [VWAP](bandas-de-vwap) | 1561 | 25,1% | 716 pts | 223 pts | 3,22 | **13,2 pts** | +0,04 R | 20.541 pts | R\$ 4.108 |
| [Donchian](donchian-com-medias) | 1314 | 19,6% | 1.023 pts | 193 pts | 5,31 | **46,1 pts** | +0,21 R | 60.588 pts | R\$ 12.118 |
| [BB explosão](explosao-da-bollinger) | 1204 | 25,9% | 739 pts | 224 pts | 3,30 | **25,4 pts** | +0,11 R | 30.625 pts | R\$ 6.125 |
| [GPS médias](gps-de-medias) | 1226 | 23,0% | 938 pts | 226 pts | 4,15 | **41,8 pts** | +0,19 R | 51.282 pts | R\$ 10.256 |
| [IFR](ifr-de-tendencia) | 772 | 32,5% | 815 pts | 275 pts | 2,97 | **79,6 pts** | +0,28 R | 61.424 pts | R\$ 12.285 |
| [MACD](macd-na-tendencia) | 898 | 22,0% | 998 pts | 225 pts | 4,45 | **45,1 pts** | +0,13 R | 40.484 pts | R\$ 8.097 |
| [Pôr do sol](por-do-sol) | 498 | 53,2% | 120 pts | 101 pts | 1,19 | **16,6 pts** | +0,06 R | 8.244 pts | R\$ 1.649 |
| [1ª vela 80](primeira-vela-80-min) | 475 | 21,7% | 1.357 pts | 262 pts | 5,17 | **88,6 pts** | +0,30 R | 42.092 pts | R\$ 8.418 |
| [Quinta](primeira-vela-de-quinta) | 108 | 63,9% | 396 pts | 469 pts | 0,84 | **83,4 pts** | +0,23 R | 9.006 pts | R\$ 1.801 |
| [Pullback](pullback-na-media) | 303 | 38,0% | 729 pts | 300 pts | 2,43 | **90,7 pts** | +0,28 R | 27.482 pts | R\$ 5.496 |
| [Rompe 200](rompe-media-200) | 205 | 39,0% | 793 pts | 429 pts | 1,85 | **48,1 pts** | +0,17 R | 9.858 pts | R\$ 1.972 |
| [Bollinger](rompimento-da-bollinger) | 259 | 36,7% | 622 pts | 195 pts | 3,18 | **104,5 pts** | +0,60 R | 27.064 pts | R\$ 5.413 |
| [Tendência](tendencia-forte-do-dia) | 1754 | 34,5% | 721 pts | 317 pts | 2,28 | **41,9 pts** | +0,13 R | 73.564 pts | R\$ 14.713 |
| [Onda](vai-na-onda) | 1185 | 35,4% | 882 pts | 429 pts | 2,05 | **35,4 pts** | +0,11 R | 41.939 pts | R\$ 8.388 |
| Todos os 15 juntos | 13556 | 27,8% | 800 pts | 252 pts | 3,18 | **41,2 pts** | +0,16 R | 557.933 pts | R\$ 111.587 |

*Taxa de acerto = operações no lucro ÷ total. Payoff = ganho médio ÷ perda média. **Expectativa matemática** = quanto a operação rende em média (acerto × ganho médio − erro × perda média); em **R** é o mesmo em múltiplos do risco (stop + custo), que é o que o tamanho de 1% usa. Lucro total em pontos, já com o custo de 15 pontos por operação.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes:

| Perfil | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano · queda | Sharpe treino → teste |
|---|---|---|---|---|---|
| ⭐ **Equilíbrio** (recomendada) | IFR + Pôr do sol + Pullback + Bollinger | **+176% · −17,2%** | +43% · −3,5% | +28% · −1,6% | 2,38 → 2,24 |
| 📈 Maior retorno | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% · −16,1% | 1,58 → 1,20 |
| 🛡️ Menor queda | Pôr do sol + Bollinger | **+61% · −7,9%** | +35% · −3,1% | +21% · −1,2% | 1,52 → 2,15 |

*R\$ 10 mil viraram, na recomendada: R\$ 33.560 com 1 contrato por R\$ 10 mil · R\$ 59.228 com 1% dividido entre os setups · **R\$ 1.530.785 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · VWAP = Bandas de VWAP · Donchian = Donchian com Médias · BB explosão = Explosão da Bollinger · GPS médias = GPS de Médias · MACD = MACD na Tendência · Pôr do sol = Pôr do Sol (17h45) · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Rompe 200 = Rompimento da Média de 200 · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

**Por que a recomendada é IFR de Tendência + Pôr do Sol (17h45) + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios ao mesmo tempo — Sharpe 2,29, rende 9,3× acima do CDI para cada 1% de pior queda, e o Sharpe ficou em 2,38 no treino e 2,24 no teste (não depende de um período só). A correlação média entre os setups dela é −0,04: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, Bandas de VWAP, Donchian com Médias, Explosão da Bollinger, GPS de Médias, MACD na Tendência, Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Rompimento da Média de 200, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+190% · −17,3%** | +38% · −2,5% | +25% | −1,2% | 10,7 | 2,56 → 2,28 | +20% | −0,01 |
| 2 | IFR + Pôr do sol + Pullback + Bollinger ⭐ | **+176% · −17,2%** | +43% · −3,5% | +28% | −1,6% | 9,3 | 2,38 → 2,24 | +21% | −0,04 |
| 3 | IFR + Quinta + Pullback + Bollinger ⚠️ | **+173% · −17,1%** | +43% · −3,5% | +28% | −1,6% | 9,1 | 2,52 → 2,17 | +20% | −0,01 |
| 4 | IFR + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+248% · −20,5%** | +44% · −3,3% | +29% | −2,1% | 7,5 | 2,15 → 2,30 | +23% | −0,04 |
| 5 | IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+118% · −13,0%** | +34% · −2,6% | +25% | −1,5% | 8,5 | 2,40 → 2,03 | +19% | −0,04 |
| 6 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+179% · −16,5%** | +37% · −2,7% | +27% | −1,6% | 8,8 | 2,03 → 2,22 | +21% | −0,07 |
| 7 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+251% · −20,5%** | +45% · −3,2% | +29% | −2,1% | 7,5 | 2,07 → 2,34 | +22% | −0,01 |
| 8 | IFR + Pullback + Bollinger | **+161% · −17,1%** | +52% · −5,1% | +32% | −2,6% | 7,1 | 2,34 → 2,12 | +22% | 0,00 |
| 9 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+156% · −15,3%** | +34% · −2,5% | +24% | −1,3% | 8,1 | 2,01 → 2,21 | +20% | −0,03 |
| 10 | IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+164% · −16,4%** | +42% · −3,3% | +30% | −2,2% | 7,6 | 1,98 → 2,12 | +23% | −0,14 |
| 11 | IFR + Pôr do sol + Pullback | **+108% · −12,9%** | +40% · −3,5% | +28% | −1,8% | 8,4 | 2,21 → 1,95 | +20% | −0,11 |
| 12 | IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+232% · −20,4%** | +51% · −4,4% | +32% | −3,1% | 6,2 | 2,02 → 2,25 | +25% | 0,01 |
| 13 | Pôr do sol + Quinta + Bollinger ⚠️ | **+69% · −8,5%** | +30% · −1,6% | +20% | −0,8% | 8,1 | 1,92 → 2,11 | +17% | 0,05 |
| 14 | IFR + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+191% · −21,5%** | +38% · −3,2% | +26% | −2,0% | 6,3 | 2,34 → 1,96 | +19% | 0,03 |
| 15 | IFR + Quinta + Pullback ⚠️ | **+106% · −12,8%** | +39% · −3,5% | +28% | −2,0% | 8,0 | 2,34 → 1,89 | +19% | −0,09 |
| 16 | Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+98% · −9,1%** | +31% · −1,9% | +21% | −1,3% | 6,2 | 2,56 → 1,94 | +17% | −0,01 |
| 17 | IFR + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+189% · −21,4%** | +38% · −3,0% | +26% | −1,9% | 6,6 | 2,45 → 1,91 | +18% | 0,05 |
| 18 | IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+166% · −16,4%** | +42% · −3,2% | +30% | −2,1% | 8,0 | 1,90 → 2,15 | +22% | −0,08 |
| 19 | Donchian + IFR + Quinta + Pullback + Bollinger ⚠️ | **+304% · −29,8%** | +51% · −5,6% | +31% | −2,6% | 6,8 | 2,20 → 1,93 | +20% | 0,03 |
| 20 | Donchian + IFR + Pôr do sol + Pullback + Bollinger | **+307% · −29,9%** | +52% · −5,6% | +31% | −2,7% | 6,6 | 2,11 → 1,96 | +21% | 0,02 |
| 21 | IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+148% · −17,1%** | +39% · −3,3% | +25% | −2,2% | 5,7 | 2,01 → 2,24 | +19% | 0,05 |
| 22 | 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+142% · −15,2%** | +38% · −3,1% | +25% | −2,0% | 6,4 | 1,95 → 2,07 | +22% | −0,07 |
| 23 | Donchian + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+210% · −24,6%** | +41% · −3,9% | +25% | −1,8% | 6,9 | 2,27 → 1,87 | +18% | −0,03 |
| 24 | Pôr do sol + Pullback + Bollinger | **+89% · −9,1%** | +35% · −2,5% | +23% | −1,6% | 6,0 | 2,30 → 1,89 | +18% | −0,08 |
| 25 | IFR + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+250% · −24,3%** | +45% · −3,9% | +29% | −3,1% | 5,3 | 2,03 → 2,09 | +22% | 0,08 |
| 26 | Donchian + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+287% · −29,2%** | +51% · −5,4% | +32% | −3,0% | 6,4 | 1,95 → 1,95 | +23% | −0,04 |
| 27 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+181% · −24,7%** | +38% · −4,1% | +27% | −2,2% | 6,4 | 1,92 → 1,98 | +22% | 0,01 |
| 28 | IFR + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+178% · −25,5%** | +37% · −4,3% | +27% | −2,5% | 5,7 | 1,99 → 1,96 | +21% | −0,02 |
| 29 | Donchian + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+269% · −28,8%** | +47% · −5,0% | +29% | −2,9% | 5,5 | 2,02 → 1,97 | +21% | −0,04 |
| 30 | Donchian + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+273% · −28,6%** | +48% · −4,8% | +29% | −2,9% | 5,5 | 1,94 → 2,00 | +22% | −0,01 |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+10%* | *−20,9%* | — | — | — | — | — | — |

> [!example]- Combinações 31 a 60 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 31 | IFR + 1ª vela 80 + Pullback ⚠️ | **+152% · −16,3%** | +50% · −4,7% | +34% | −3,0% | 7,2 | 1,84 → 2,06 | +26% | −0,13 |
> | 32 | Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+144% · −14,2%** | +38% · −3,1% | +25% | −2,1% | 6,0 | 1,85 → 2,14 | +21% | −0,03 |
> | 33 | Donchian + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+379% · −32,6%** | +58% · −6,4% | +34% | −4,0% | 5,3 | 1,96 → 2,04 | +24% | 0,08 |
> | 34 | IFR + Quinta + Bollinger ⚠️ | **+134% · −17,4%** | +46% · −4,8% | +28% | −2,9% | 5,3 | 1,93 → 2,10 | +22% | 0,05 |
> | 35 | Donchian + IFR + Pullback + Bollinger | **+285% · −29,8%** | +60% · −7,3% | +34% | −3,6% | 5,9 | 2,08 → 1,89 | +21% | 0,11 |
> | 36 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+290% · −29,2%** | +51% · −5,4% | +32% | −3,0% | 6,4 | 1,88 → 1,97 | +24% | −0,00 |
> | 37 | Donchian + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+228% · −26,3%** | +44% · −4,8% | +29% | −2,1% | 7,4 | 2,11 → 1,83 | +19% | −0,01 |
> | 38 | Donchian + Pôr do sol + Pullback + Bollinger | **+196% · −23,8%** | +47% · −4,9% | +27% | −2,2% | 6,7 | 2,12 → 1,80 | +18% | −0,04 |
> | 39 | IFR + Pullback | **+96% · −12,9%** | +51% · −5,9% | +34% | −3,5% | 6,1 | 2,15 → 1,82 | +21% | −0,17 |
> | 40 | IFR + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+163% · −21,1%** | +35% · −3,0% | +24% | −2,2% | 5,0 | 2,04 → 1,98 | +20% | 0,06 |
> | 41 | Pôr do sol + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+253% · −27,3%** | +45% · −4,8% | +30% | −3,3% | 5,2 | 2,05 → 1,90 | +23% | 0,02 |
> | 42 | 1ª vela 80 + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+250% · −29,1%** | +45% · −4,9% | +30% | −3,3% | 5,2 | 2,13 → 1,87 | +22% | −0,01 |
> | 43 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+198% · −35,1%** | +40% · −5,8% | +27% | −2,3% | 6,2 | 1,91 → 1,86 | +21% | −0,07 |
> | 44 | Donchian + Quinta + Pullback + Bollinger ⚠️ | **+193% · −24,2%** | +47% · −5,1% | +28% | −2,4% | 6,3 | 2,24 → 1,75 | +17% | −0,02 |
> | 45 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+275% · −30,2%** | +49% · −5,2% | +33% | −4,2% | 4,9 | 2,02 → 1,90 | +25% | 0,01 |
> | 46 | IFR + Pullback + Rompe 200 + Bollinger | **+175% · −21,4%** | +43% · −4,5% | +28% | −3,1% | 4,9 | 2,29 → 1,85 | +19% | 0,09 |
> | 47 | IFR + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+131% · −15,7%** | +32% · −2,8% | +24% | −1,7% | 6,3 | 2,33 → 1,74 | +18% | 0,02 |
> | 48 | IFR + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+271% · −30,2%** | +48% · −5,2% | +34% | −4,2% | 5,0 | 2,08 → 1,88 | +24% | −0,04 |
> | 49 | IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+165% · −24,6%** | +42% · −5,5% | +30% | −3,1% | 5,5 | 1,87 → 1,89 | +22% | 0,04 |
> | 50 | Donchian + IFR + 1ª vela 80 + Pullback ⚠️ | **+269% · −29,1%** | +59% · −7,1% | +36% | −4,2% | 5,6 | 1,85 → 1,90 | +24% | 0,04 |
> | 51 | Quinta + Pullback + Bollinger ⚠️ | **+87% · −8,2%** | +34% · −2,4% | +23% | −1,6% | 6,0 | 2,51 → 1,71 | +17% | −0,02 |
> | 52 | Donchian + IFR + Pôr do sol + Pullback | **+212% · −26,2%** | +51% · −6,4% | +32% | −3,0% | 6,3 | 1,99 → 1,78 | +20% | −0,00 |
> | 53 | IFR + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+361% · −35,7%** | +56% · −6,7% | +35% | −5,0% | 4,6 | 2,09 → 1,98 | +25% | 0,09 |
> | 54 | Donchian + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+252% · −28,5%** | +55% · −6,6% | +32% | −4,0% | 4,8 | 1,90 → 1,92 | +22% | 0,03 |
> | 55 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+216% · −20,8%** | +41% · −3,2% | +27% | −2,6% | 5,3 | 1,72 → 2,32 | +21% | 0,04 |
> | 56 | Donchian + IFR + Pullback + Rompe 200 + Bollinger | **+303% · −28,9%** | +52% · −5,0% | +31% | −3,2% | 5,6 | 2,10 → 1,76 | +19% | 0,14 |
> | 57 | IFR + Pôr do sol + Quinta ⚠️ | **+87% · −13,2%** | +35% · −4,0% | +25% | −2,2% | 5,5 | 1,76 → 2,00 | +18% | 0,03 |
> | 58 | IFR + Pôr do sol + Bollinger | **+136% · −16,7%** | +46% · −4,8% | +28% | −3,3% | 4,7 | 1,79 → 2,19 | +21% | 0,04 |
> | 59 | Donchian + IFR + Quinta + Pullback ⚠️ | **+210% · −26,1%** | +51% · −6,4% | +32% | −3,1% | 6,2 | 2,07 → 1,75 | +19% | 0,00 |
> | 60 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+182% · −29,7%** | +38% · −5,3% | +28% | −2,6% | 6,0 | 2,03 → 1,76 | +22% | −0,04 |

> [!example]- Combinações 61 a 90 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 61 | Donchian + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+269% · −28,7%** | +48% · −5,9% | +29% | −3,4% | 4,7 | 1,88 → 1,95 | +22% | 0,05 |
> | 62 | Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+92% · −18,6%** | +30% · −3,8% | +23% | −1,5% | 7,0 | 1,76 → 1,86 | +19% | −0,08 |
> | 63 | ADX + Donchian + IFR + Pullback + Bollinger | **+392% · −40,9%** | +64% · −8,6% | +35% | −4,2% | 5,4 | 1,75 → 1,96 | +23% | 0,16 |
> | 64 | Donchian + Pôr do sol + Quinta + Bollinger ⚠️ | **+168% · −22,6%** | +43% · −5,6% | +25% | −2,4% | 5,1 | 1,86 → 1,82 | +20% | −0,01 |
> | 65 | IFR + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+213% · −27,6%** | +42% · −4,7% | +30% | −3,6% | 4,8 | 2,27 → 1,75 | +20% | 0,02 |
> | 66 | ADX + IFR + Pôr do sol + Pullback + Bollinger | **+278% · −33,7%** | +50% · −6,1% | +30% | −3,7% | 4,7 | 1,76 → 2,16 | +19% | 0,05 |
> | 67 | IFR + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+287% · −33,2%** | +49% · −6,0% | +32% | −4,4% | 4,4 | 2,34 → 1,85 | +21% | 0,06 |
> | 68 | Pôr do sol + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+220% · −26,8%** | +42% · −4,3% | +28% | −3,2% | 4,7 | 1,83 → 1,92 | +24% | 0,05 |
> | 69 | Pôr do sol + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+193% · −24,7%** | +39% · −4,2% | +27% | −2,9% | 4,8 | 2,38 → 1,72 | +19% | 0,03 |
> | 70 | IFR + MACD + Quinta + Pullback + Bollinger ⚠️ | **+226% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 4,4 | 1,93 → 1,91 | +23% | 0,04 |
> | 71 | IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+148% · −21,0%** | +39% · −4,2% | +26% | −2,8% | 4,5 | 1,97 → 1,86 | +20% | 0,09 |
> | 72 | GPS médias + IFR + Pôr do sol + Pullback + Bollinger | **+273% · −29,9%** | +49% · −5,5% | +30% | −3,6% | 4,6 | 2,13 → 1,77 | +22% | 0,03 |
> | 73 | IFR + Pôr do sol + Pullback + Bollinger + Tendência | **+290% · −33,3%** | +49% · −6,0% | +32% | −4,4% | 4,3 | 2,27 → 1,88 | +22% | 0,06 |
> | 74 | Donchian + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+372% · −40,2%** | +59% · −7,9% | +35% | −4,5% | 5,0 | 1,97 → 1,76 | +22% | 0,12 |
> | 75 | Donchian + 1ª vela 80 + Quinta + Pullback ⚠️ | **+182% · −33,1%** | +46% · −7,6% | +29% | −3,1% | 5,4 | 1,87 → 1,77 | +21% | −0,12 |
> | 76 | Donchian + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+184% · −34,9%** | +46% · −7,4% | +29% | −3,1% | 5,4 | 1,79 → 1,79 | +22% | −0,06 |
> | 77 | Donchian + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+286% · −36,7%** | +51% · −7,1% | +32% | −4,1% | 4,8 | 1,88 → 1,80 | +21% | 0,11 |
> | 78 | Donchian + Pullback + Bollinger | **+180% · −23,4%** | +57% · −7,0% | +31% | −3,1% | 6,0 | 2,08 → 1,69 | +17% | 0,03 |
> | 79 | 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+234% · −28,8%** | +52% · −6,5% | +33% | −4,6% | 4,5 | 2,01 → 1,82 | +23% | 0,05 |
> | 80 | IFR + Pôr do sol + Pullback + Rompe 200 | **+120% · −14,8%** | +35% · −3,3% | +25% | −1,9% | 6,6 | 2,16 → 1,66 | +18% | 0,01 |
> | 81 | GPS médias + IFR + Quinta + Pullback + Bollinger ⚠️ | **+269% · −29,9%** | +49% · −5,5% | +30% | −3,6% | 4,7 | 2,21 → 1,73 | +21% | 0,04 |
> | 82 | IFR + MACD + Pôr do sol + Pullback + Bollinger | **+229% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 4,4 | 1,83 → 1,95 | +22% | 0,04 |
> | 83 | Donchian + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+383% · −40,8%** | +62% · −7,8% | +39% | −5,4% | 4,9 | 1,92 → 1,77 | +24% | 0,13 |
> | 84 | Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+159% · −24,3%** | +35% · −4,2% | +24% | −2,5% | 4,3 | 1,88 → 1,94 | +21% | 0,01 |
> | 85 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+240% · −29,8%** | +45% · −5,1% | +32% | −4,1% | 4,6 | 1,81 → 1,91 | +26% | 0,04 |
> | 86 | IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+254% · −30,1%** | +56% · −6,9% | +38% | −5,7% | 4,4 | 1,98 → 1,84 | +25% | 0,02 |
> | 87 | Donchian + IFR + Quinta + Bollinger ⚠️ | **+249% · −29,5%** | +56% · −7,8% | +32% | −4,2% | 4,5 | 1,83 → 1,87 | +22% | 0,10 |
> | 88 | ADX + Donchian + IFR + Quinta + Pullback ⚠️ | **+301% · −39,2%** | +56% · −7,7% | +33% | −4,0% | 5,2 | 1,74 → 1,87 | +21% | 0,06 |
> | 89 | Pullback + Bollinger | **+78% · −8,6%** | +43% · −4,0% | +26% | −2,1% | 6,1 | 2,24 → 1,64 | +17% | −0,05 |
> | 90 | MACD + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+144% · −16,2%** | +33% · −2,1% | +23% | −2,4% | 4,4 | 1,93 → 1,86 | +19% | 0,00 |

> [!example]- Combinações 91 a 120 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 91 | Quinta + Bollinger ⚠️ | **+59% · −8,4%** | +35% · −2,8% | +21% | −1,5% | 5,8 | 1,82 → 1,76 | +18% | 0,01 |
> | 92 | IFR + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+162% · −19,5%** | +36% · −3,2% | +27% | −2,9% | 4,7 | 1,81 → 1,82 | +20% | −0,01 |
> | 93 | IFR + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+318% · −35,3%** | +52% · −6,6% | +33% | −4,9% | 4,2 | 1,89 → 1,98 | +26% | 0,09 |
> | 94 | 1ª vela 80 + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+156% · −25,0%** | +34% · −4,3% | +24% | −2,6% | 4,2 | 1,97 → 1,89 | +20% | −0,00 |
> | 95 | ADX + IFR + Quinta + Pullback + Bollinger ⚠️ | **+274% · −34,9%** | +50% · −6,4% | +30% | −4,1% | 4,2 | 1,85 → 2,12 | +20% | 0,08 |
> | 96 | BB explosão + IFR + Pôr do sol + Pullback + Bollinger | **+215% · −33,1%** | +43% · −6,5% | +28% | −3,2% | 4,6 | 1,85 → 1,79 | +18% | 0,02 |
> | 97 | ADX + Donchian + Quinta + Pullback + Bollinger ⚠️ | **+291% · −38,9%** | +53% · −6,5% | +30% | −3,8% | 4,5 | 1,79 → 1,86 | +20% | 0,06 |
> | 98 | ADX + GPS médias + IFR + Pullback + Bollinger | **+347% · −46,2%** | +61% · −9,5% | +34% | −4,4% | 4,9 | 1,76 → 1,81 | +25% | 0,19 |
> | 99 | IFR + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+322% · −35,3%** | +53% · −6,6% | +33% | −4,9% | 4,2 | 1,83 → 2,00 | +27% | 0,15 |
> | 100 | Donchian + IFR + Pullback | **+195% · −26,3%** | +62% · −9,0% | +37% | −4,5% | 5,4 | 1,95 → 1,69 | +20% | 0,10 |
> | 101 | BB explosão + IFR + Quinta + Pullback + Bollinger ⚠️ | **+212% · −33,9%** | +43% · −6,5% | +28% | −3,2% | 4,6 | 1,94 → 1,75 | +17% | 0,05 |
> | 102 | 1ª vela 80 + Pullback + Bollinger ⚠️ | **+130% · −15,3%** | +45% · −4,1% | +28% | −3,6% | 4,3 | 1,78 → 2,00 | +24% | −0,03 |
> | 103 | IFR + Pôr do sol + Rompe 200 + Bollinger | **+150% · −21,1%** | +40% · −4,2% | +25% | −3,0% | 4,2 | 1,85 → 1,92 | +21% | 0,08 |
> | 104 | ADX + IFR + Pullback + Bollinger | **+257% · −34,2%** | +58% · −7,9% | +34% | −4,7% | 4,4 | 1,71 → 2,08 | +21% | 0,13 |
> | 105 | IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+118% · −15,6%** | +35% · −3,3% | +26% | −2,2% | 5,7 | 2,28 → 1,62 | +17% | 0,03 |
> | 106 | ADX + Donchian + Pôr do sol + Pullback + Bollinger | **+294% · −37,3%** | +53% · −6,6% | +30% | −3,6% | 4,7 | 1,71 → 1,90 | +19% | 0,03 |
> | 107 | ADX + Donchian + IFR + Pôr do sol + Pullback | **+304% · −39,8%** | +56% · −7,7% | +33% | −3,8% | 5,4 | 1,67 → 1,89 | +21% | 0,04 |
> | 108 | IFR + Bollinger | **+123% · −16,6%** | +61% · −7,7% | +34% | −4,8% | 4,5 | 1,70 → 2,05 | +26% | 0,24 |
> | 109 | IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+198% · −20,9%** | +47% · −4,4% | +30% | −3,7% | 4,5 | 1,66 → 2,22 | +24% | 0,03 |
> | 110 | ADX + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+341% · −38,7%** | +56% · −6,9% | +33% | −4,0% | 5,1 | 1,61 → 2,20 | +23% | 0,10 |
> | 111 | GPS médias + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+200% · −24,7%** | +42% · −4,0% | +28% | −2,6% | 5,7 | 2,14 → 1,63 | +20% | −0,03 |
> | 112 | Donchian + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+334% · −30,5%** | +55% · −5,8% | +32% | −4,5% | 4,3 | 1,74 → 2,02 | +25% | 0,07 |
> | 113 | Donchian + IFR + Pullback + Bollinger + Tendência | **+406% · −40,0%** | +63% · −7,9% | +37% | −5,6% | 4,4 | 2,07 → 1,73 | +21% | 0,20 |
> | 114 | Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+169% · −29,2%** | +43% · −6,8% | +31% | −3,7% | 5,0 | 1,91 → 1,70 | +23% | −0,04 |
> | 115 | IFR + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+254% · −32,9%** | +46% · −5,9% | +30% | −4,3% | 4,0 | 2,06 → 1,89 | +23% | 0,10 |
> | 116 | Donchian + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+332% · −36,3%** | +56% · −7,1% | +33% | −4,4% | 4,6 | 1,80 → 1,76 | +23% | 0,09 |
> | 117 | 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+166% · −31,1%** | +43% · −7,3% | +31% | −3,7% | 5,0 | 1,99 → 1,68 | +22% | −0,11 |
> | 118 | Donchian + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+286% · −42,0%** | +52% · −8,5% | +33% | −3,8% | 5,4 | 1,90 → 1,68 | +22% | 0,03 |
> | 119 | Donchian + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+283% · −42,6%** | +52% · −8,7% | +33% | −3,8% | 5,5 | 1,96 → 1,66 | +21% | −0,01 |
> | 120 | Donchian + IFR + Pôr do sol + Pullback + Rompe 200 | **+227% · −28,2%** | +45% · −5,5% | +29% | −2,9% | 5,6 | 2,02 → 1,64 | +18% | 0,06 |

> [!example]- Combinações 121 a 150 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 121 | ADX + IFR + Pullback + Rompe 200 + Bollinger | **+275% · −37,1%** | +50% · −6,9% | +30% | −4,2% | 4,1 | 1,77 → 1,97 | +22% | 0,13 |
> | 122 | Donchian + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+211% · −27,7%** | +42% · −4,8% | +25% | −2,2% | 5,6 | 2,13 → 1,61 | +17% | 0,01 |
> | 123 | Donchian + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+441% · −41,5%** | +67% · −8,3% | +39% | −6,1% | 4,3 | 1,78 → 1,84 | +26% | 0,28 |
> | 124 | GPS médias + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+346% · −43,6%** | +60% · −8,9% | +38% | −5,0% | 5,0 | 1,94 → 1,67 | +25% | 0,11 |
> | 125 | Donchian + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+335% · −36,2%** | +56% · −7,0% | +33% | −4,4% | 4,6 | 1,74 → 1,79 | +24% | 0,14 |
> | 126 | Donchian + IFR + Pôr do sol + Bollinger | **+252% · −29,3%** | +56% · −7,7% | +32% | −4,5% | 4,2 | 1,75 → 1,91 | +23% | 0,10 |
> | 127 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+254% · −27,0%** | +48% · −4,8% | +30% | −3,7% | 4,7 | 1,65 → 1,96 | +23% | 0,02 |
> | 128 | Donchian + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+225% · −28,9%** | +44% · −5,4% | +29% | −3,1% | 5,3 | 2,10 → 1,62 | +17% | 0,07 |
> | 129 | Donchian + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+343% · −36,6%** | +59% · −7,4% | +37% | −5,3% | 4,5 | 1,76 → 1,76 | +25% | 0,11 |
> | 130 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+338% · −30,5%** | +55% · −5,8% | +32% | −4,5% | 4,3 | 1,67 → 2,05 | +24% | 0,12 |
> | 131 | Donchian + Pôr do sol + Pullback + Bollinger + Tendência | **+304% · −38,1%** | +53% · −7,5% | +32% | −3,9% | 4,8 | 2,08 → 1,64 | +19% | 0,07 |
> | 132 | Donchian + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+266% · −28,6%** | +48% · −5,3% | +29% | −3,8% | 4,2 | 1,90 → 1,76 | +20% | 0,12 |
> | 133 | GPS médias + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+334% · −43,0%** | +57% · −8,8% | +34% | −4,2% | 5,1 | 1,98 → 1,64 | +23% | 0,11 |
> | 134 | IFR + Pullback + Bollinger + Tendência | **+269% · −33,2%** | +57% · −8,0% | +36% | −5,9% | 3,9 | 2,23 → 1,81 | +22% | 0,13 |
> | 135 | ADX + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+255% · −34,2%** | +49% · −6,0% | +32% | −3,8% | 5,0 | 1,58 → 2,11 | +21% | −0,02 |
> | 136 | IFR + Quinta + Pullback + Tendência ⚠️ | **+196% · −27,5%** | +48% · −6,1% | +34% | −4,9% | 4,2 | 2,23 → 1,68 | +20% | 0,02 |
> | 137 | Donchian + IFR + Pôr do sol + Pullback + Tendência | **+316% · −38,2%** | +56% · −8,1% | +35% | −4,8% | 4,7 | 2,01 → 1,65 | +21% | 0,11 |
> | 138 | Donchian + IFR + Quinta + Pullback + Tendência ⚠️ | **+313% · −39,9%** | +55% · −8,1% | +35% | −4,8% | 4,7 | 2,07 → 1,64 | +20% | 0,10 |
> | 139 | Donchian + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+270% · −36,8%** | +48% · −7,2% | +29% | −4,0% | 4,0 | 1,93 → 1,80 | +20% | 0,08 |
> | 140 | IFR + Pôr do sol + Pullback + Tendência | **+198% · −27,6%** | +48% · −6,1% | +33% | −5,0% | 4,2 | 2,15 → 1,70 | +21% | 0,03 |
> | 141 | Donchian + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+300% · −38,7%** | +52% · −7,6% | +32% | −3,9% | 4,9 | 2,16 → 1,61 | +18% | 0,08 |
> | 142 | ADX + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+355% · −44,2%** | +61% · −8,8% | +38% | −6,1% | 4,2 | 1,71 → 1,94 | +28% | 0,09 |
> | 143 | IFR + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+215% · −24,3%** | +41% · −3,8% | +27% | −3,6% | 4,0 | 1,73 → 2,09 | +23% | 0,08 |
> | 144 | Donchian + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+208% · −28,5%** | +41% · −5,0% | +25% | −2,4% | 5,3 | 2,24 → 1,58 | +16% | 0,03 |
> | 145 | Donchian + IFR + Pôr do sol + Quinta ⚠️ | **+183% · −25,7%** | +47% · −6,6% | +29% | −3,7% | 4,5 | 1,73 → 1,77 | +21% | 0,04 |
> | 146 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+153% · −18,9%** | +35% · −2,8% | +25% | −2,6% | 4,8 | 1,60 → 2,00 | +22% | 0,04 |
> | 147 | ADX + Donchian + IFR + 1ª vela 80 + Pullback ⚠️ | **+364% · −40,4%** | +63% · −8,4% | +37% | −4,5% | 5,3 | 1,59 → 1,97 | +24% | 0,09 |
> | 148 | IFR + MACD + Quinta + Pullback ⚠️ | **+148% · −19,4%** | +40% · −4,4% | +29% | −3,6% | 4,6 | 1,77 → 1,73 | +22% | −0,02 |
> | 149 | IFR + Quinta ⚠️ | **+76% · −11,3%** | +42% · −5,2% | +30% | −3,6% | 4,7 | 1,66 → 1,83 | +22% | −0,09 |
> | 150 | ADX + IFR + Pôr do sol + Pullback + Tendência | **+294% · −42,6%** | +54% · −8,0% | +35% | −5,5% | 4,0 | 1,83 → 1,85 | +24% | 0,08 |

> [!example]- Combinações 151 a 180 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 151 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+237% · −25,9%** | +44% · −4,1% | +27% | −3,4% | 4,1 | 1,68 → 2,00 | +22% | 0,01 |
> | 152 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+346% · −36,6%** | +59% · −7,4% | +37% | −5,3% | 4,5 | 1,71 → 1,78 | +26% | 0,18 |
> | 153 | Pôr do sol + Pullback + Bollinger + Tendência | **+179% · −24,6%** | +44% · −5,4% | +29% | −3,9% | 4,2 | 2,24 → 1,66 | +19% | 0,02 |
> | 154 | ADX + GPS médias + IFR + Quinta + Pullback ⚠️ | **+265% · −45,5%** | +53% · −9,4% | +32% | −4,2% | 4,7 | 1,75 → 1,71 | +23% | 0,07 |
> | 155 | GPS médias + IFR + Pullback + Bollinger + Tendência | **+368% · −42,1%** | +61% · −7,7% | +36% | −5,2% | 4,5 | 2,11 → 1,64 | +22% | 0,19 |
> | 156 | GPS médias + IFR + Pullback + Bollinger | **+252% · −29,9%** | +57% · −7,2% | +33% | −4,9% | 4,1 | 2,09 → 1,69 | +22% | 0,12 |
> | 157 | 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+202% · −27,0%** | +48% · −5,9% | +31% | −4,5% | 4,0 | 1,78 → 1,84 | +25% | 0,04 |
> | 158 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+256% · −30,5%** | +48% · −5,7% | +31% | −4,6% | 4,0 | 1,88 → 1,79 | +25% | −0,01 |
> | 159 | IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+222% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 4,0 | 1,76 → 1,84 | +27% | 0,02 |
> | 160 | GPS médias + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+397% · −40,2%** | +64% · −7,9% | +38% | −5,7% | 4,3 | 1,79 → 1,74 | +27% | 0,28 |
> | 161 | ADX + Donchian + IFR + Pullback + Rompe 200 | **+298% · −42,4%** | +56% · −7,8% | +33% | −4,4% | 4,7 | 1,69 → 1,75 | +21% | 0,15 |
> | 162 | BB explosão + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+153% · −34,8%** | +36% · −6,1% | +26% | −2,6% | 5,1 | 1,86 → 1,65 | +16% | −0,03 |
> | 163 | Donchian + 1ª vela 80 + Pullback ⚠️ | **+169% · −32,9%** | +56% · −10,5% | +34% | −4,4% | 4,7 | 1,75 → 1,70 | +22% | −0,06 |
> | 164 | IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+201% · −20,8%** | +47% · −4,4% | +29% | −3,7% | 4,5 | 1,57 → 2,27 | +23% | 0,10 |
> | 165 | ADX + Donchian + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+356% · −36,7%** | +60% · −7,2% | +33% | −4,3% | 4,8 | 1,59 → 1,98 | +23% | 0,10 |
> | 166 | Donchian + Pôr do sol + Quinta + Pullback ⚠️ | **+135% · −29,4%** | +38% · −5,6% | +25% | −2,2% | 5,6 | 2,12 → 1,57 | +17% | −0,05 |
> | 167 | ADX + Donchian + IFR + Pullback | **+282% · −41,4%** | +66% · −9,9% | +38% | −5,0% | 5,0 | 1,64 → 1,83 | +23% | 0,14 |
> | 168 | GPS médias + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+253% · −31,8%** | +48% · −5,7% | +31% | −4,6% | 4,0 | 1,94 → 1,76 | +24% | −0,04 |
> | 169 | ADX + IFR + Pullback + Bollinger + Tendência | **+381% · −45,8%** | +61% · −9,5% | +37% | −6,3% | 3,8 | 1,89 → 1,92 | +25% | 0,19 |
> | 170 | ADX + GPS médias + IFR + Pôr do sol + Pullback | **+269% · −44,1%** | +53% · −8,9% | +32% | −4,1% | 4,7 | 1,69 → 1,74 | +25% | 0,05 |
> | 171 | ADX + Donchian + Pullback + Bollinger | **+273% · −41,0%** | +62% · −9,2% | +33% | −4,6% | 4,5 | 1,66 → 1,82 | +21% | 0,13 |
> | 172 | IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+98% · −14,4%** | +31% · −3,0% | +23% | −2,4% | 4,4 | 1,82 → 1,70 | +20% | 0,06 |
> | 173 | Quinta + Pullback + Bollinger + Tendência ⚠️ | **+176% · −24,6%** | +44% · −5,2% | +29% | −3,8% | 4,3 | 2,34 → 1,62 | +18% | 0,03 |
> | 174 | 1ª vela 80 + Quinta + Pullback ⚠️ | **+81% · −18,6%** | +33% · −5,6% | +25% | −2,2% | 5,5 | 1,68 → 1,70 | +21% | −0,22 |
> | 175 | Donchian + Quinta + Bollinger ⚠️ | **+153% · −23,4%** | +51% · −8,0% | +28% | −3,4% | 4,5 | 1,81 → 1,69 | +19% | −0,02 |
> | 176 | Donchian + IFR + Quinta + Bollinger + Tendência ⚠️ | **+363% · −39,4%** | +60% · −7,9% | +35% | −5,5% | 4,1 | 1,91 → 1,73 | +22% | 0,19 |
> | 177 | Pôr do sol + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+110% · −16,2%** | +29% · −2,3% | +20% | −1,6% | 4,9 | 2,43 → 1,55 | +16% | 0,01 |
> | 178 | Donchian + IFR + Pôr do sol + Bollinger + Tendência | **+367% · −39,4%** | +60% · −7,9% | +35% | −5,5% | 4,1 | 1,85 → 1,75 | +23% | 0,20 |
> | 179 | Donchian + IFR + Pôr do sol + Rompe 200 + Bollinger | **+269% · −28,6%** | +49% · −5,3% | +29% | −4,0% | 4,0 | 1,81 → 1,78 | +21% | 0,12 |
> | 180 | Pôr do sol + Bollinger | **+61% · −7,9%** | +35% · −3,1% | +21% | −1,2% | 7,1 | 1,52 → 2,15 | +17% | −0,06 |

> [!example]- Combinações 181 a 210 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 181 | ADX + Donchian + Pullback + Rompe 200 + Bollinger | **+290% · −39,0%** | +53% · −6,5% | +30% | −3,9% | 4,4 | 1,72 → 1,73 | +20% | 0,12 |
> | 182 | IFR + MACD + Pullback + Bollinger | **+211% · −25,7%** | +49% · −5,6% | +32% | −4,8% | 3,9 | 1,79 → 1,86 | +24% | 0,11 |
> | 183 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+253% · −37,2%** | +48% · −7,1% | +31% | −3,7% | 5,0 | 1,72 → 1,69 | +23% | 0,04 |
> | 184 | ADX + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+341% · −43,8%** | +57% · −8,4% | +35% | −5,5% | 4,0 | 1,72 → 1,93 | +26% | 0,12 |
> | 185 | IFR + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+218% · −24,6%** | +42% · −3,8% | +27% | −3,6% | 4,0 | 1,65 → 2,13 | +23% | 0,11 |
> | 186 | ADX + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+257% · −41,9%** | +50% · −7,0% | +33% | −4,7% | 4,2 | 1,69 → 1,83 | +25% | −0,01 |
> | 187 | IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+299% · −35,2%** | +62% · −8,6% | +38% | −6,5% | 3,8 | 1,79 → 1,94 | +29% | 0,24 |
> | 188 | Donchian + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+182% · −21,9%** | +38% · −3,9% | +24% | −2,4% | 4,6 | 1,93 → 1,64 | +18% | 0,02 |
> | 189 | IFR + MACD + Pôr do sol + Pullback | **+150% · −19,5%** | +40% · −4,4% | +29% | −3,6% | 4,6 | 1,67 → 1,76 | +21% | −0,02 |
> | 190 | IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+225% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 4,0 | 1,70 → 1,87 | +28% | 0,12 |
> | 191 | Donchian + IFR + Bollinger | **+233% · −30,1%** | +70% · −10,7% | +37% | −5,9% | 4,1 | 1,70 → 1,82 | +24% | 0,28 |
> | 192 | Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+205% · −26,8%** | +49% · −5,9% | +31% | −4,5% | 4,0 | 1,70 → 1,87 | +25% | 0,12 |
> | 193 | ADX + Donchian + Pullback + Bollinger + Tendência | **+386% · −56,8%** | +65% · −12,0% | +36% | −5,8% | 4,1 | 1,81 → 1,74 | +22% | 0,20 |
> | 194 | Donchian + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+269% · −34,9%** | +49% · −6,7% | +30% | −3,8% | 4,5 | 1,92 → 1,65 | +20% | 0,09 |
> | 195 | GPS médias + IFR + Pôr do sol + Pullback | **+187% · −25,9%** | +48% · −5,4% | +31% | −3,7% | 4,9 | 2,02 → 1,58 | +21% | −0,03 |
> | 196 | ADX + Donchian + IFR + Pullback + Tendência | **+387% · −57,2%** | +68% · −12,0% | +40% | −6,7% | 4,1 | 1,77 → 1,74 | +24% | 0,23 |
> | 197 | IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+140% · −15,9%** | +38% · −3,5% | +27% | −2,6% | 5,5 | 1,51 → 2,15 | +21% | −0,01 |
> | 198 | IFR + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+271% · −35,4%** | +49% · −6,7% | +34% | −5,4% | 3,8 | 2,00 → 1,75 | +22% | 0,09 |
> | 199 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+312% · −37,0%** | +56% · −6,9% | +36% | −4,9% | 4,7 | 1,74 → 1,68 | +27% | 0,15 |
> | 200 | ADX + Donchian + 1ª vela 80 + Pullback + Tendência ⚠️ | **+358% · −55,2%** | +64% · −11,3% | +38% | −5,6% | 4,5 | 1,66 → 1,76 | +25% | 0,12 |
> | 201 | GPS médias + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+183% · −24,1%** | +39% · −4,1% | +24% | −2,5% | 4,7 | 2,26 → 1,54 | +19% | −0,02 |
> | 202 | GPS médias + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+308% · −39,0%** | +56% · −7,5% | +36% | −4,9% | 4,7 | 1,78 → 1,66 | +26% | 0,10 |
> | 203 | ADX + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+258% · −32,9%** | +49% · −5,9% | +31% | −3,7% | 5,0 | 1,51 → 2,13 | +20% | −0,01 |
> | 204 | Donchian + Pôr do sol + Bollinger | **+155% · −23,3%** | +52% · −7,9% | +28% | −3,5% | 4,3 | 1,67 → 1,76 | +21% | −0,03 |
> | 205 | ADX + IFR + Quinta + Pullback + Tendência ⚠️ | **+291% · −44,1%** | +54% · −8,0% | +35% | −5,9% | 3,7 | 1,89 → 1,83 | +23% | 0,09 |
> | 206 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+260% · −40,0%** | +50% · −6,9% | +33% | −4,7% | 4,2 | 1,63 → 1,85 | +24% | 0,02 |
> | 207 | Donchian + 1ª vela 80 + Pullback + Tendência ⚠️ | **+266% · −42,4%** | +60% · −11,2% | +38% | −5,1% | 4,8 | 1,87 → 1,62 | +22% | 0,08 |
> | 208 | Donchian + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+281% · −34,2%** | +52% · −7,0% | +33% | −4,7% | 4,4 | 1,84 → 1,66 | +22% | 0,13 |
> | 209 | GPS médias + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+336% · −36,0%** | +56% · −7,2% | +33% | −5,6% | 3,6 | 1,95 → 1,86 | +25% | 0,10 |
> | 210 | Donchian + IFR + 1ª vela 80 + Quinta ⚠️ | **+235% · −26,8%** | +55% · −6,4% | +34% | −4,8% | 4,4 | 1,60 → 1,88 | +26% | 0,01 |

> [!example]- Combinações 211 a 240 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 211 | ADX + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+203% · −33,9%** | +42% · −6,3% | +28% | −4,2% | 3,7 | 1,74 → 2,03 | +18% | 0,01 |
> | 212 | 1ª vela 80 + Pullback + Rompe 200 + Bollinger + Tendência ⚠️ | **+251% · −35,5%** | +46% · −6,8% | +30% | −4,6% | 3,8 | 2,03 → 1,72 | +21% | 0,08 |
> | 213 | Donchian + IFR + Pullback + Rompe 200 | **+209% · −28,3%** | +51% · −7,2% | +32% | −3,8% | 5,0 | 1,98 → 1,57 | +17% | 0,17 |
> | 214 | ADX + Donchian + GPS médias + IFR + Pullback | **+348% · −54,7%** | +67% · −11,5% | +38% | −4,9% | 5,0 | 1,68 → 1,65 | +24% | 0,21 |
> | 215 | BB explosão + IFR + Pullback + Bollinger | **+198% · −35,0%** | +49% · −8,4% | +30% | −4,4% | 4,0 | 1,80 → 1,70 | +17% | 0,13 |
> | 216 | GPS médias + IFR + Pôr do sol + Pullback + Tendência | **+286% · −41,7%** | +53% · −7,7% | +34% | −4,4% | 4,8 | 2,06 → 1,56 | +22% | 0,07 |
> | 217 | Donchian + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+312% · −37,4%** | +66% · −9,6% | +37% | −6,0% | 4,1 | 1,71 → 1,73 | +25% | 0,25 |
> | 218 | GPS médias + IFR + Quinta + Pullback ⚠️ | **+184% · −28,0%** | +47% · −5,6% | +31% | −3,7% | 4,9 | 2,10 → 1,54 | +20% | −0,02 |
> | 219 | Donchian + GPS médias + IFR + Pullback + Bollinger | **+375% · −39,0%** | +63% · −7,8% | +35% | −5,4% | 4,1 | 1,97 → 1,64 | +21% | 0,18 |
> | 220 | Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+144% · −23,4%** | +39% · −5,0% | +29% | −3,6% | 4,4 | 1,66 → 1,73 | +24% | −0,00 |
> | 221 | ADX + Donchian + IFR + Quinta + Bollinger ⚠️ | **+348% · −39,0%** | +60% · −8,3% | +33% | −4,1% | 5,0 | 1,53 → 1,95 | +22% | 0,16 |
> | 222 | GPS médias + IFR + Pôr do sol + Bollinger + Tendência | **+332% · −37,8%** | +57% · −7,2% | +34% | −5,1% | 4,2 | 1,90 → 1,65 | +24% | 0,19 |
> | 223 | BB explosão + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+201% · −34,7%** | +42% · −6,5% | +29% | −4,2% | 3,9 | 1,71 → 1,80 | +20% | −0,05 |
> | 224 | Donchian + IFR + MACD + Pullback + Bollinger | **+342% · −33,8%** | +56% · −6,7% | +34% | −5,4% | 3,9 | 1,76 → 1,77 | +24% | 0,18 |
> | 225 | ADX + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+255% · −36,4%** | +49% · −6,3% | +32% | −4,1% | 4,6 | 1,53 → 1,98 | +23% | 0,07 |
> | 226 | ADX + GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+321% · −43,3%** | +60% · −9,1% | +36% | −5,0% | 4,6 | 1,59 → 1,82 | +28% | 0,11 |
> | 227 | IFR + Pullback + Rompe 200 | **+107% · −15,3%** | +40% · −4,4% | +28% | −3,3% | 4,7 | 2,10 → 1,54 | +17% | 0,09 |
> | 228 | GPS médias + IFR + Quinta + Pullback + Tendência ⚠️ | **+283% · −43,4%** | +53% · −8,3% | +34% | −4,4% | 4,9 | 2,11 → 1,54 | +21% | 0,07 |
> | 229 | ADX + Donchian + 1ª vela 80 + Quinta + Pullback ⚠️ | **+269% · −44,0%** | +52% · −6,5% | +31% | −4,0% | 4,6 | 1,56 → 1,87 | +21% | −0,03 |
> | 230 | IFR + Quinta + Bollinger + Tendência ⚠️ | **+234% · −32,8%** | +53% · −7,8% | +34% | −5,8% | 3,6 | 2,02 → 1,81 | +23% | 0,14 |
> | 231 | GPS médias + IFR + Quinta + Bollinger + Tendência ⚠️ | **+328% · −37,8%** | +57% · −7,1% | +34% | −5,1% | 4,2 | 1,96 → 1,62 | +23% | 0,18 |
> | 232 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+256% · −42,9%** | +49% · −8,9% | +32% | −3,3% | 5,8 | 1,91 → 1,56 | +23% | 0,01 |
> | 233 | ADX + Donchian + Pôr do sol + Quinta + Pullback ⚠️ | **+218% · −43,1%** | +46% · −6,6% | +28% | −3,8% | 4,0 | 1,69 → 1,76 | +18% | −0,01 |
> | 234 | Donchian + IFR + MACD + Quinta + Pullback ⚠️ | **+258% · −33,6%** | +49% · −7,0% | +32% | −4,4% | 4,3 | 1,74 → 1,67 | +22% | 0,07 |
> | 235 | Donchian + IFR + 1ª vela 80 + Bollinger ⚠️ | **+315% · −30,4%** | +65% · −7,5% | +36% | −6,0% | 3,9 | 1,63 → 1,98 | +27% | 0,22 |
> | 236 | GPS médias + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+300% · −39,7%** | +53% · −7,6% | +32% | −4,5% | 4,3 | 1,76 → 1,66 | +26% | 0,14 |
> | 237 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+103% · −28,0%** | +28% · −5,1% | +22% | −2,3% | 4,0 | 1,80 → 1,67 | +19% | −0,02 |
> | 238 | IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+171% · −27,1%** | +44% · −6,0% | +31% | −4,8% | 3,8 | 1,93 → 1,72 | +23% | 0,09 |
> | 239 | Donchian + IFR + 1ª vela 80 + Tendência ⚠️ | **+323% · −36,5%** | +70% · −9,4% | +42% | −7,0% | 4,2 | 1,68 → 1,73 | +27% | 0,30 |
> | 240 | Donchian + IFR + Quinta ⚠️ | **+168% · −26,5%** | +56% · −9,2% | +34% | −4,9% | 4,3 | 1,68 → 1,68 | +22% | 0,07 |

> [!example]- Combinações 241 a 270 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 241 | IFR + Pôr do sol + Bollinger + Tendência | **+238% · −32,8%** | +53% · −7,9% | +33% | −5,8% | 3,5 | 1,94 → 1,85 | +24% | 0,16 |
> | 242 | Donchian + IFR + Pullback + Tendência | **+294% · −40,8%** | +65% · −10,5% | +40% | −6,4% | 4,3 | 1,98 → 1,60 | +20% | 0,23 |
> | 243 | Donchian + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+251% · −31,7%** | +48% · −5,9% | +30% | −4,4% | 3,9 | 1,67 → 1,80 | +23% | 0,08 |
> | 244 | Donchian + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+199% · −38,8%** | +41% · −7,9% | +27% | −3,6% | 4,0 | 1,83 → 1,67 | +20% | 0,01 |
> | 245 | ADX + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+236% · −36,9%** | +46% · −6,5% | +28% | −3,5% | 4,3 | 1,52 → 2,08 | +20% | 0,03 |
> | 246 | ADX + GPS médias + Pôr do sol + Pullback + Bollinger | **+258% · −40,3%** | +50% · −7,7% | +29% | −3,9% | 4,1 | 1,71 → 1,69 | +23% | 0,06 |
> | 247 | Donchian + IFR + MACD + Pôr do sol + Pullback | **+260% · −33,6%** | +49% · −7,0% | +32% | −4,4% | 4,3 | 1,68 → 1,69 | +23% | 0,07 |
> | 248 | Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+153% · −24,1%** | +40% · −5,0% | +27% | −3,7% | 3,7 | 2,03 → 1,70 | +21% | 0,08 |
> | 249 | Donchian + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+196% · −39,5%** | +41% · −8,1% | +27% | −3,6% | 3,9 | 1,90 → 1,65 | +19% | −0,02 |
> | 250 | ADX + GPS médias + IFR + Pullback | **+249% · −46,4%** | +62% · −12,4% | +36% | −5,3% | 4,5 | 1,65 → 1,67 | +25% | 0,16 |
> | 251 | IFR + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+213% · −22,5%** | +42% · −3,4% | +30% | −4,6% | 3,7 | 1,67 → 1,91 | +24% | −0,04 |
> | 252 | GPS médias + Pôr do sol + Pullback + Bollinger + Tendência | **+273% · −35,5%** | +50% · −6,2% | +31% | −3,5% | 5,1 | 2,12 → 1,51 | +20% | 0,05 |
> | 253 | ADX + IFR + Pullback + Tendência | **+273% · −45,9%** | +63% · −10,9% | +39% | −7,3% | 3,6 | 1,79 → 1,79 | +25% | 0,16 |
> | 254 | Donchian + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+197% · −25,1%** | +41% · −4,7% | +27% | −3,4% | 4,2 | 1,80 → 1,65 | +19% | 0,07 |
> | 255 | GPS médias + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+296% · −38,8%** | +53% · −7,4% | +32% | −4,5% | 4,3 | 1,81 → 1,63 | +25% | 0,09 |
> | 256 | Donchian + Pullback + Bollinger + Tendência | **+282% · −40,2%** | +62% · −10,1% | +36% | −5,4% | 4,3 | 2,05 → 1,57 | +18% | 0,17 |
> | 257 | GPS médias + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+253% · −44,7%** | +49% · −9,4% | +32% | −3,6% | 5,5 | 1,97 → 1,54 | +22% | −0,04 |
> | 258 | ADX + GPS médias + IFR + Pullback + Tendência | **+349% · −57,3%** | +65% · −12,5% | +39% | −6,4% | 4,1 | 1,80 → 1,65 | +25% | 0,21 |
> | 259 | Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+83% · −17,6%** | +34% · −5,3% | +25% | −2,5% | 4,9 | 1,57 → 1,76 | +20% | −0,12 |
> | 260 | ADX + Donchian + Pôr do sol + Pullback + Tendência | **+300% · −54,8%** | +57% · −11,3% | +34% | −5,2% | 4,2 | 1,75 → 1,66 | +22% | 0,09 |
> | 261 | ADX + GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+319% · −53,2%** | +61% · −10,2% | +37% | −5,5% | 4,4 | 1,67 → 1,65 | +26% | 0,12 |
> | 262 | ADX + IFR + Pôr do sol + Pullback + Rompe 200 | **+203% · −34,6%** | +43% · −6,3% | +28% | −4,1% | 3,8 | 1,67 → 1,86 | +20% | 0,03 |
> | 263 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+204% · −32,6%** | +43% · −6,3% | +29% | −4,2% | 3,9 | 1,65 → 1,83 | +21% | −0,03 |
> | 264 | 1ª vela 80 + Pullback + Tendência ⚠️ | **+154% · −30,8%** | +52% · −10,2% | +36% | −5,5% | 4,2 | 1,87 → 1,62 | +23% | −0,09 |
> | 265 | Donchian + IFR + Rompe 200 + Bollinger | **+250% · −28,5%** | +56% · −7,0% | +32% | −5,0% | 3,9 | 1,77 → 1,71 | +20% | 0,25 |
> | 266 | BB explosão + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+282% · −49,5%** | +54% · −9,6% | +36% | −5,7% | 4,0 | 1,76 → 1,67 | +21% | 0,11 |
> | 267 | ADX + GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+254% · −41,7%** | +50% · −8,2% | +29% | −4,0% | 4,1 | 1,78 → 1,65 | +22% | 0,10 |
> | 268 | ADX + IFR + Quinta + Pullback ⚠️ | **+186% · −32,5%** | +48% · −7,8% | +31% | −5,1% | 3,6 | 1,69 → 1,94 | +19% | 0,03 |
> | 269 | Donchian + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+226% · −37,1%** | +45% · −7,3% | +30% | −3,1% | 5,4 | 2,08 → 1,50 | +18% | 0,03 |
> | 270 | ADX + IFR + Pôr do sol + Pullback | **+189% · −33,5%** | +49% · −7,7% | +31% | −4,8% | 3,8 | 1,60 → 1,98 | +18% | −0,01 |

> [!example]- Combinações 271 a 300 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 271 | ADX + Pôr do sol + Pullback + Bollinger + Tendência | **+280% · −43,0%** | +51% · −7,3% | +31% | −5,3% | 3,4 | 1,86 → 1,84 | +23% | 0,08 |
> | 272 | MACD + Quinta + Pullback + Bollinger ⚠️ | **+130% · −16,2%** | +36% · −2,8% | +25% | −3,4% | 3,6 | 1,89 → 1,73 | +21% | 0,00 |
> | 273 | ADX + Donchian + GPS médias + Pullback + Bollinger | **+350% · −50,5%** | +64% · −9,8% | +34% | −4,7% | 4,5 | 1,70 → 1,62 | +22% | 0,19 |
> | 274 | Donchian + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+238% · −26,9%** | +55% · −6,3% | +34% | −4,8% | 4,3 | 1,54 → 1,91 | +25% | 0,10 |
> | 275 | ADX + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+200% · −32,5%** | +43% · −6,3% | +28% | −4,4% | 3,6 | 1,75 → 1,83 | +21% | 0,06 |
> | 276 | Donchian + GPS médias + IFR + Pôr do sol + Pullback | **+292% · −39,5%** | +55% · −7,1% | +33% | −4,4% | 4,5 | 1,91 → 1,56 | +21% | 0,06 |
> | 277 | GPS médias + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+270% · −37,4%** | +50% · −6,8% | +31% | −3,5% | 5,2 | 2,19 → 1,48 | +19% | 0,06 |
> | 278 | BB explosão + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+272% · −35,7%** | +50% · −7,2% | +31% | −5,2% | 3,5 | 1,73 → 1,90 | +21% | 0,09 |
> | 279 | Donchian + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+334% · −32,6%** | +55% · −6,1% | +32% | −5,4% | 3,6 | 1,69 → 1,90 | +24% | 0,21 |
> | 280 | ADX + GPS médias + Pullback + Bollinger + Tendência | **+346% · −55,0%** | +62% · −10,9% | +35% | −5,6% | 4,0 | 1,83 → 1,63 | +23% | 0,21 |
> | 281 | ADX + IFR + 1ª vela 80 + Pullback ⚠️ | **+239% · −33,5%** | +57% · −7,7% | +35% | −4,8% | 4,7 | 1,47 → 2,06 | +22% | 0,02 |
> | 282 | Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+182% · −37,4%** | +39% · −7,4% | +28% | −3,8% | 4,0 | 1,94 → 1,60 | +20% | 0,02 |
> | 283 | IFR + Pullback + Tendência | **+182% · −27,9%** | +58% · −8,7% | +39% | −7,2% | 3,7 | 2,11 → 1,63 | +21% | 0,10 |
> | 284 | Donchian + IFR + Bollinger + Tendência | **+342% · −39,3%** | +71% · −10,1% | +40% | −7,3% | 3,7 | 1,82 → 1,69 | +23% | 0,37 |
> | 285 | 1ª vela 80 + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+180% · −38,2%** | +38% · −7,7% | +28% | −3,8% | 4,0 | 2,00 → 1,58 | +19% | −0,02 |
> | 286 | ADX + IFR + Quinta + Bollinger + Tendência ⚠️ | **+338% · −45,4%** | +58% · −9,3% | +35% | −6,2% | 3,5 | 1,69 → 1,93 | +26% | 0,20 |
> | 287 | GPS médias + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+237% · −31,6%** | +46% · −6,1% | +28% | −4,2% | 3,5 | 1,91 → 1,74 | +23% | 0,06 |
> | 288 | GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+237% · −31,5%** | +56% · −7,4% | +35% | −6,1% | 3,6 | 1,84 → 1,72 | +25% | 0,04 |
> | 289 | Donchian + Pullback + Rompe 200 + Bollinger | **+194% · −28,2%** | +47% · −6,5% | +28% | −3,3% | 4,5 | 2,10 → 1,51 | +16% | 0,09 |
> | 290 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+254% · −31,0%** | +48% · −5,9% | +30% | −4,4% | 3,9 | 1,60 → 1,82 | +24% | 0,12 |
> | 291 | Donchian + GPS médias + IFR + Quinta + Pullback ⚠️ | **+289% · −41,2%** | +55% · −7,5% | +33% | −4,4% | 4,5 | 1,97 → 1,53 | +20% | 0,06 |
> | 292 | IFR + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+238% · −33,5%** | +45% · −6,1% | +32% | −5,3% | 3,5 | 1,81 → 1,76 | +23% | 0,08 |
> | 293 | ADX + Donchian + IFR + Pôr do sol + Bollinger | **+352% · −39,1%** | +60% · −8,3% | +33% | −4,1% | 5,0 | 1,46 → 1,98 | +21% | 0,15 |
> | 294 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+272% · −46,0%** | +52% · −6,6% | +31% | −4,0% | 4,6 | 1,50 → 1,90 | +21% | −0,01 |
> | 295 | IFR + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+318% · −38,7%** | +53% · −7,6% | +33% | −6,1% | 3,4 | 1,83 → 1,86 | +25% | 0,21 |
> | 296 | ADX + GPS médias + IFR + Quinta + Bollinger ⚠️ | **+307% · −43,6%** | +57% · −8,8% | +32% | −4,2% | 4,6 | 1,54 → 1,79 | +26% | 0,20 |
> | 297 | IFR + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+216% · −22,5%** | +42% · −3,5% | +30% | −4,6% | 3,7 | 1,60 → 1,93 | +23% | 0,00 |
> | 298 | IFR + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+291% · −28,5%** | +49% · −4,9% | +32% | −5,6% | 3,4 | 1,71 → 2,01 | +25% | 0,10 |
> | 299 | IFR + MACD + Pullback + Rompe 200 + Bollinger | **+227% · −29,7%** | +43% · −5,2% | +29% | −4,5% | 3,5 | 1,83 → 1,75 | +22% | 0,13 |
> | 300 | IFR + Pôr do sol | **+78% · −12,3%** | +43% · −5,9% | +29% | −3,8% | 4,4 | 1,51 → 1,92 | +20% | −0,04 |

> [!example]- Combinações 301 a 330 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 301 | MACD + Pôr do sol + Pullback + Bollinger | **+132% · −16,2%** | +37% · −3,1% | +25% | −3,5% | 3,5 | 1,74 → 1,80 | +20% | −0,01 |
> | 302 | GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+290% · −38,7%** | +66% · −9,6% | +41% | −6,6% | 4,2 | 1,70 → 1,63 | +28% | 0,28 |
> | 303 | ADX + GPS médias + IFR + Pullback + Rompe 200 | **+263% · −47,6%** | +54% · −10,0% | +32% | −4,5% | 4,4 | 1,70 → 1,61 | +22% | 0,17 |
> | 304 | Donchian + 1ª vela 80 + Quinta + Tendência ⚠️ | **+235% · −37,7%** | +56% · −9,4% | +35% | −5,0% | 4,4 | 1,69 → 1,62 | +23% | 0,03 |
> | 305 | IFR + Pullback + Rompe 200 + Bollinger + Tendência | **+286% · −36,8%** | +50% · −7,0% | +32% | −5,6% | 3,4 | 2,24 → 1,70 | +19% | 0,15 |
> | 306 | IFR + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+241% · −33,5%** | +46% · −6,1% | +32% | −5,3% | 3,5 | 1,75 → 1,78 | +25% | 0,13 |
> | 307 | GPS médias + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+253% · −37,5%** | +50% · −6,2% | +32% | −4,3% | 4,5 | 1,90 → 1,55 | +23% | 0,09 |
> | 308 | GPS médias + IFR + Pullback + Rompe 200 + Bollinger | **+269% · −32,1%** | +49% · −6,1% | +30% | −4,5% | 3,7 | 2,11 → 1,59 | +20% | 0,15 |
> | 309 | IFR + Rompe 200 + Bollinger | **+136% · −21,0%** | +47% · −6,3% | +28% | −4,5% | 3,4 | 1,77 → 1,80 | +21% | 0,21 |
> | 310 | ADX + Donchian + Quinta + Pullback + Tendência ⚠️ | **+297% · −56,2%** | +57% · −11,9% | +35% | −5,6% | 3,9 | 1,80 → 1,64 | +21% | 0,10 |
> | 311 | BB explosão + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+268% · −49,2%** | +51% · −9,6% | +32% | −4,8% | 4,0 | 1,77 → 1,63 | +19% | 0,12 |
> | 312 | Donchian + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+219% · −24,5%** | +51% · −5,5% | +29% | −4,6% | 3,6 | 1,63 → 1,91 | +24% | 0,00 |
> | 313 | Donchian + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+237% · −37,0%** | +56% · −9,2% | +35% | −5,0% | 4,4 | 1,63 → 1,64 | +25% | 0,13 |
> | 314 | Donchian + MACD + Quinta + Pullback + Bollinger ⚠️ | **+245% · −28,2%** | +46% · −5,0% | +28% | −4,3% | 3,7 | 1,83 → 1,67 | +21% | 0,05 |
> | 315 | Donchian + GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+352% · −42,0%** | +62% · −8,4% | +36% | −6,5% | 3,7 | 1,82 → 1,67 | +24% | 0,13 |
> | 316 | Donchian + BB explosão + IFR + Pullback + Bollinger | **+303% · −47,1%** | +57% · −9,5% | +33% | −5,0% | 4,0 | 1,74 → 1,63 | +17% | 0,20 |
> | 317 | IFR + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+307% · −37,6%** | +53% · −7,2% | +37% | −6,7% | 3,6 | 1,74 → 1,75 | +28% | 0,12 |
> | 318 | Donchian + MACD + Pôr do sol + Pullback + Bollinger | **+248% · −28,1%** | +46% · −5,0% | +28% | −4,3% | 3,6 | 1,74 → 1,70 | +22% | 0,04 |
> | 319 | 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+144% · −24,6%** | +39% · −5,7% | +25% | −3,8% | 3,3 | 1,82 → 1,82 | +20% | 0,05 |
> | 320 | IFR + 1ª vela 80 + Bollinger ⚠️ | **+184% · −20,8%** | +57% · −6,4% | +34% | −5,4% | 3,9 | 1,50 → 2,17 | +26% | 0,20 |
> | 321 | IFR + 1ª vela 80 + Tendência ⚠️ | **+207% · −29,7%** | +64% · −9,6% | +42% | −8,0% | 3,6 | 1,65 → 1,80 | +30% | 0,20 |
> | 322 | IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+139% · −18,8%** | +38% · −3,8% | +27% | −3,6% | 4,0 | 1,53 → 1,90 | +24% | 0,02 |
> | 323 | ADX + BB explosão + IFR + Pullback + Bollinger | **+284% · −53,8%** | +55% · −10,6% | +32% | −4,6% | 4,2 | 1,54 → 1,82 | +21% | 0,19 |
> | 324 | MACD + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+291% · −35,0%** | +50% · −6,5% | +33% | −5,8% | 3,5 | 1,77 → 1,75 | +26% | 0,13 |
> | 325 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+239% · −35,7%** | +46% · −6,1% | +28% | −3,5% | 4,3 | 1,45 → 2,12 | +19% | 0,04 |
> | 326 | ADX + GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+311% · −47,2%** | +57% · −9,7% | +32% | −4,9% | 4,0 | 1,57 → 1,79 | +26% | 0,14 |
> | 327 | BB explosão + IFR + Pôr do sol + Pullback | **+142% · −35,9%** | +41% · −8,4% | +28% | −3,5% | 4,3 | 1,72 → 1,59 | +16% | −0,04 |
> | 328 | ADX + Donchian + IFR + Bollinger + Tendência | **+442% · −55,4%** | +72% · −11,2% | +40% | −7,4% | 3,7 | 1,62 → 1,82 | +26% | 0,35 |
> | 329 | ADX + IFR + Pôr do sol + Bollinger + Tendência | **+342% · −45,4%** | +58% · −9,4% | +35% | −6,2% | 3,5 | 1,63 → 1,95 | +25% | 0,20 |
> | 330 | ADX + Donchian + Quinta + Bollinger + Tendência ⚠️ | **+346% · −54,3%** | +61% · −11,2% | +34% | −5,7% | 3,8 | 1,64 → 1,74 | +23% | 0,19 |

> [!example]- Combinações 331 a 360 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 331 | ADX + IFR + MACD + Pullback + Bollinger | **+314% · −41,1%** | +55% · −7,7% | +33% | −5,2% | 3,9 | 1,52 → 1,97 | +22% | 0,16 |
> | 332 | 1ª vela 80 + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+219% · −30,9%** | +42% · −5,4% | +28% | −4,5% | 3,4 | 1,83 → 1,74 | +22% | 0,07 |
> | 333 | Donchian + GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+393% · −48,8%** | +70% · −10,2% | +41% | −6,5% | 4,3 | 1,70 → 1,60 | +26% | 0,33 |
> | 334 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+225% · −38,3%** | +46% · −7,5% | +30% | −3,5% | 5,0 | 1,74 → 1,55 | +24% | 0,01 |
> | 335 | GPS médias + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+240% · −30,0%** | +47% · −5,3% | +29% | −3,4% | 4,7 | 1,97 → 1,51 | +21% | 0,07 |
> | 336 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+238% · −34,0%** | +45% · −6,0% | +28% | −4,5% | 3,3 | 1,90 → 1,75 | +23% | 0,01 |
> | 337 | Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+222% · −30,7%** | +43% · −5,4% | +28% | −4,5% | 3,4 | 1,76 → 1,77 | +23% | 0,11 |
> | 338 | Donchian + Pôr do sol + Pullback | **+124% · −29,2%** | +45% · −8,0% | +28% | −2,8% | 5,4 | 1,95 → 1,48 | +17% | −0,10 |
> | 339 | IFR + 1ª vela 80 + Quinta ⚠️ | **+126% · −14,2%** | +45% · −4,3% | +31% | −3,8% | 4,7 | 1,43 → 2,04 | +24% | −0,11 |
> | 340 | ADX + Donchian + Quinta + Pullback ⚠️ | **+200% · −41,3%** | +52% · −8,8% | +31% | −4,7% | 3,9 | 1,65 → 1,67 | +20% | 0,01 |
> | 341 | ADX + GPS médias + IFR + Pôr do sol + Bollinger | **+311% · −42,2%** | +58% · −8,8% | +32% | −3,8% | 5,1 | 1,48 → 1,82 | +25% | 0,18 |
> | 342 | ADX + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+408% · −48,2%** | +65% · −10,1% | +38% | −6,8% | 3,7 | 1,54 → 2,01 | +28% | 0,27 |
> | 343 | IFR + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+210% · −31,4%** | +42% · −5,5% | +30% | −4,8% | 3,6 | 2,23 → 1,57 | +18% | 0,08 |
> | 344 | Donchian + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+281% · −49,2%** | +52% · −10,9% | +33% | −5,0% | 4,1 | 1,90 → 1,55 | +20% | 0,12 |
> | 345 | Donchian + GPS médias + IFR + Bollinger + Tendência | **+419% · −50,9%** | +71% · −10,6% | +39% | −6,3% | 4,2 | 1,81 → 1,56 | +23% | 0,38 |
> | 346 | Donchian + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+340% · −42,8%** | +59% · −8,8% | +37% | −6,5% | 3,7 | 1,73 → 1,67 | +24% | 0,27 |
> | 347 | Donchian + IFR + Quinta + Tendência ⚠️ | **+260% · −37,2%** | +61% · −9,0% | +38% | −6,3% | 3,9 | 1,81 → 1,60 | +22% | 0,20 |
> | 348 | ADX + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+259% · −40,7%** | +50% · −7,9% | +33% | −5,5% | 3,6 | 1,61 → 1,86 | +23% | 0,12 |
> | 349 | GPS médias + IFR + Pullback + Tendência | **+265% · −44,3%** | +62% · −11,2% | +39% | −6,0% | 4,4 | 2,03 → 1,50 | +22% | 0,18 |
> | 350 | ADX + Donchian + IFR + Quinta + Tendência ⚠️ | **+348% · −54,6%** | +64% · −11,1% | +38% | −6,6% | 3,8 | 1,61 → 1,74 | +25% | 0,21 |
> | 351 | GPS médias + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+234% · −33,0%** | +45% · −5,8% | +28% | −4,5% | 3,3 | 1,97 → 1,70 | +22% | −0,01 |
> | 352 | IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+201% · −24,3%** | +47% · −5,2% | +30% | −4,8% | 3,5 | 1,59 → 2,04 | +25% | 0,19 |
> | 353 | Donchian + IFR + Pôr do sol | **+170% · −26,4%** | +57% · −9,2% | +34% | −5,3% | 4,0 | 1,59 → 1,71 | +23% | 0,09 |
> | 354 | Donchian + GPS médias + IFR + Pullback + Tendência | **+367% · −54,5%** | +67% · −11,8% | +40% | −5,6% | 4,8 | 1,94 → 1,49 | +21% | 0,26 |
> | 355 | Donchian + IFR + Pôr do sol + Tendência | **+263% · −35,7%** | +61% · −9,1% | +38% | −6,3% | 3,9 | 1,75 → 1,62 | +23% | 0,24 |
> | 356 | IFR + Pôr do sol + Pullback + Rompe 200 + Tendência | **+213% · −31,4%** | +42% · −5,6% | +30% | −4,9% | 3,6 | 2,16 → 1,59 | +19% | 0,08 |
> | 357 | Donchian + GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+343% · −53,4%** | +63% · −12,1% | +37% | −4,9% | 5,1 | 1,85 → 1,50 | +22% | 0,15 |
> | 358 | ADX + IFR + MACD + Quinta + Pullback ⚠️ | **+235% · −36,6%** | +47% · −6,4% | +31% | −4,4% | 4,2 | 1,49 → 1,87 | +21% | 0,05 |
> | 359 | ADX + GPS médias + IFR + Bollinger + Tendência | **+399% · −53,8%** | +70% · −11,1% | +39% | −7,1% | 3,7 | 1,65 → 1,72 | +27% | 0,37 |
> | 360 | ADX + Pullback + Bollinger + Tendência | **+259% · −46,3%** | +59% · −11,3% | +35% | −6,7% | 3,3 | 1,81 → 1,77 | +23% | 0,18 |

> [!example]- Combinações 361 a 390 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 361 | ADX + Donchian + Pôr do sol + Pullback | **+203% · −43,4%** | +53% · −8,5% | +31% | −4,4% | 4,1 | 1,57 → 1,71 | +19% | −0,02 |
> | 362 | Donchian + Quinta + Bollinger + Tendência ⚠️ | **+249% · −37,0%** | +57% · −9,1% | +33% | −5,2% | 3,9 | 1,88 → 1,57 | +20% | 0,13 |
> | 363 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+171% · −31,7%** | +38% · −6,0% | +26% | −3,5% | 3,7 | 1,88 → 1,59 | +22% | −0,08 |
> | 364 | ADX + 1ª vela 80 + Pullback + Tendência ⚠️ | **+240% · −43,3%** | +58% · −10,0% | +37% | −6,4% | 3,7 | 1,59 → 1,79 | +27% | 0,04 |
> | 365 | ADX + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+276% · −44,5%** | +51% · −7,8% | +31% | −5,7% | 3,2 | 1,93 → 1,81 | +22% | 0,11 |
> | 366 | ADX + GPS médias + IFR + Quinta + Tendência ⚠️ | **+313% · −54,8%** | +61% · −11,7% | +37% | −6,2% | 3,9 | 1,64 → 1,65 | +26% | 0,21 |
> | 367 | ADX + IFR + Pullback + Rompe 200 | **+186% · −33,0%** | +49% · −7,7% | +31% | −5,0% | 3,7 | 1,62 → 1,78 | +22% | 0,10 |
> | 368 | BB explosão + IFR + Quinta + Pullback ⚠️ | **+139% · −37,7%** | +40% · −9,1% | +28% | −3,6% | 4,2 | 1,80 → 1,55 | +15% | −0,01 |
> | 369 | ADX + Donchian + GPS médias + IFR + Bollinger | **+395% · −51,1%** | +72% · −10,3% | +38% | −5,1% | 4,8 | 1,52 → 1,71 | +26% | 0,35 |
> | 370 | ADX + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+315% · −43,8%** | +57% · −8,7% | +36% | −6,0% | 3,9 | 1,51 → 1,94 | +27% | 0,10 |
> | 371 | IFR + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+161% · −23,7%** | +36% · −3,8% | +27% | −3,7% | 3,8 | 1,81 → 1,62 | +21% | 0,04 |
> | 372 | GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+237% · −44,5%** | +57% · −12,0% | +36% | −4,7% | 5,0 | 1,88 → 1,50 | +23% | 0,05 |
> | 373 | Donchian + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+331% · −42,7%** | +56% · −8,7% | +33% | −5,6% | 3,6 | 1,76 → 1,66 | +22% | 0,22 |
> | 374 | Donchian + Pôr do sol + Bollinger + Tendência | **+252% · −35,9%** | +58% · −9,1% | +33% | −5,3% | 3,9 | 1,81 → 1,60 | +21% | 0,15 |
> | 375 | Pôr do sol + Pullback + Rompe 200 + Bollinger | **+101% · −16,0%** | +31% · −3,2% | +21% | −1,9% | 4,4 | 2,20 → 1,45 | +16% | −0,01 |
> | 376 | Pullback + Bollinger + Tendência | **+163% · −24,6%** | +53% · −7,5% | +33% | −5,8% | 3,6 | 2,19 → 1,56 | +19% | 0,09 |
> | 377 | BB explosão + IFR + Pullback + Bollinger + Tendência | **+297% · −51,7%** | +54% · −10,3% | +34% | −5,9% | 3,6 | 1,90 → 1,62 | +18% | 0,21 |
> | 378 | ADX + Donchian + IFR + Pôr do sol + Quinta ⚠️ | **+268% · −36,8%** | +53% · −7,4% | +31% | −3,7% | 5,0 | 1,44 → 1,89 | +20% | 0,08 |
> | 379 | ADX + IFR + Pullback | **+172% · −31,8%** | +59% · −10,0% | +36% | −6,2% | 3,7 | 1,54 → 1,89 | +20% | 0,06 |
> | 380 | IFR + MACD + Pôr do sol + Pullback + Rompe 200 | **+163% · −23,7%** | +36% · −3,9% | +27% | −3,7% | 3,7 | 1,72 → 1,64 | +22% | 0,03 |
> | 381 | GPS médias + IFR + Bollinger + Tendência | **+309% · −38,8%** | +68% · −9,4% | +39% | −6,8% | 3,8 | 1,86 → 1,59 | +25% | 0,36 |
> | 382 | ADX + Donchian + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+268% · −42,8%** | +52% · −6,9% | +31% | −4,4% | 4,2 | 1,52 → 1,76 | +23% | 0,07 |
> | 383 | ADX + Donchian + Pôr do sol + Pullback + Rompe 200 | **+217% · −41,8%** | +46% · −6,2% | +28% | −3,7% | 4,1 | 1,63 → 1,61 | +19% | 0,02 |
> | 384 | ADX + Donchian + IFR + 1ª vela 80 + Bollinger ⚠️ | **+417% · −41,6%** | +67% · −8,8% | +37% | −4,6% | 5,2 | 1,40 → 2,03 | +25% | 0,25 |
> | 385 | IFR + MACD + Pullback | **+136% · −19,9%** | +47% · −6,4% | +34% | −5,3% | 3,9 | 1,62 → 1,67 | +25% | 0,03 |
> | 386 | ADX + Donchian + IFR + Rompe 200 + Bollinger | **+346% · −41,4%** | +61% · −8,2% | +33% | −5,0% | 4,1 | 1,50 → 1,84 | +24% | 0,24 |
> | 387 | 1ª vela 80 + Bollinger + Tendência ⚠️ | **+188% · −27,0%** | +59% · −8,4% | +36% | −6,6% | 3,5 | 1,65 → 1,79 | +28% | 0,21 |
> | 388 | ADX + Donchian + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+412% · −53,3%** | +68% · −10,5% | +38% | −6,3% | 4,0 | 1,51 → 1,84 | +27% | 0,26 |
> | 389 | Donchian + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+158% · −32,3%** | +42% · −6,4% | +27% | −3,4% | 4,2 | 1,50 → 1,80 | +21% | −0,04 |
> | 390 | ADX + Donchian + IFR + 1ª vela 80 + Tendência ⚠️ | **+411% · −53,7%** | +71% · −10,5% | +41% | −7,2% | 4,0 | 1,51 → 1,83 | +29% | 0,28 |

> [!example]- Combinações 391 a 420 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 391 | ADX + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+237% · −39,0%** | +46% · −7,1% | +28% | −3,8% | 4,0 | 1,48 → 1,95 | +22% | 0,09 |
> | 392 | Donchian + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+222% · −25,7%** | +51% · −5,5% | +29% | −4,6% | 3,6 | 1,55 → 1,95 | +23% | 0,07 |
> | 393 | Donchian + Quinta + Pullback ⚠️ | **+122% · −27,7%** | +45% · −7,9% | +28% | −3,1% | 5,0 | 2,08 → 1,43 | +15% | −0,07 |
> | 394 | ADX + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+241% · −35,0%** | +46% · −6,1% | +28% | −3,7% | 4,1 | 1,43 → 2,16 | +18% | 0,11 |
> | 395 | GPS médias + IFR + Pôr do sol + Pullback + Rompe 200 | **+200% · −28,5%** | +42% · −5,0% | +28% | −3,5% | 4,2 | 2,04 → 1,48 | +19% | 0,05 |
> | 396 | ADX + Donchian + Pôr do sol + Quinta + Bollinger ⚠️ | **+258% · −35,7%** | +50% · −6,5% | +28% | −3,4% | 4,5 | 1,45 → 1,90 | +19% | 0,06 |
> | 397 | ADX + Donchian + Pullback + Tendência | **+279% · −57,2%** | +67% · −15,9% | +39% | −6,7% | 3,9 | 1,71 → 1,60 | +22% | 0,19 |
> | 398 | ADX + Donchian + Pôr do sol + Bollinger + Tendência | **+349% · −52,8%** | +61% · −10,6% | +34% | −5,7% | 3,8 | 1,58 → 1,76 | +24% | 0,18 |
> | 399 | GPS médias + IFR + Pullback | **+171% · −29,1%** | +58% · −8,8% | +35% | −5,4% | 4,2 | 1,98 → 1,49 | +21% | 0,07 |
> | 400 | GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+278% · −41,0%** | +62% · −10,5% | +36% | −6,0% | 3,9 | 1,72 → 1,60 | +27% | 0,26 |
> | 401 | GPS médias + Pôr do sol + Pullback + Bollinger | **+170% · −25,9%** | +44% · −5,5% | +26% | −3,5% | 3,9 | 2,11 → 1,49 | +20% | −0,04 |
> | 402 | Donchian + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+236% · −31,7%** | +45% · −5,8% | +27% | −4,3% | 3,3 | 1,71 → 1,80 | +21% | 0,05 |
> | 403 | Donchian + GPS médias + Pôr do sol + Pullback + Bollinger | **+283% · −35,0%** | +52% · −6,3% | +29% | −4,3% | 3,9 | 1,98 → 1,52 | +19% | 0,02 |
> | 404 | IFR + Bollinger + Tendência | **+219% · −32,8%** | +66% · −11,0% | +39% | −8,3% | 3,2 | 1,89 → 1,77 | +25% | 0,33 |
> | 405 | ADX + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+184% · −31,8%** | +39% · −5,9% | +25% | −3,8% | 3,1 | 1,74 → 1,98 | +17% | 0,05 |
> | 406 | Donchian + GPS médias + Pullback + Bollinger + Tendência | **+367% · −50,6%** | +64% · −10,0% | +36% | −4,9% | 4,7 | 1,99 → 1,46 | +19% | 0,21 |
> | 407 | MACD + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+214% · −31,7%** | +43% · −5,8% | +31% | −5,1% | 3,6 | 1,74 → 1,64 | +25% | −0,02 |
> | 408 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+217% · −31,5%** | +43% · −5,8% | +31% | −5,1% | 3,6 | 1,68 → 1,66 | +26% | 0,04 |
> | 409 | ADX + Donchian + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+322% · −49,1%** | +63% · −9,9% | +36% | −5,3% | 4,3 | 1,56 → 1,65 | +25% | 0,12 |
> | 410 | ADX + Donchian + IFR + Pôr do sol + Tendência | **+351% · −53,2%** | +65% · −10,6% | +38% | −6,6% | 3,8 | 1,56 → 1,76 | +26% | 0,22 |
> | 411 | Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+133% · −18,2%** | +32% · −2,6% | +22% | −2,4% | 3,7 | 1,50 → 1,98 | +17% | 0,04 |
> | 412 | Donchian + IFR + MACD + Pullback | **+241% · −34,1%** | +57% · −9,1% | +36% | −5,9% | 3,9 | 1,64 → 1,62 | +24% | 0,19 |
> | 413 | Donchian + IFR + Quinta + Rompe 200 ⚠️ | **+181% · −26,8%** | +47% · −6,4% | +30% | −4,2% | 4,0 | 1,75 → 1,56 | +19% | 0,13 |
> | 414 | ADX + GPS médias + Pullback + Bollinger | **+238% · −42,7%** | +58% · −11,0% | +32% | −5,0% | 3,9 | 1,66 → 1,61 | +23% | 0,18 |
> | 415 | IFR + MACD + Pullback + Bollinger + Tendência | **+325% · −40,4%** | +54% · −8,1% | +35% | −6,9% | 3,2 | 1,88 → 1,72 | +25% | 0,20 |
> | 416 | ADX + IFR + Pullback + Rompe 200 + Tendência | **+289% · −45,7%** | +54% · −9,0% | +35% | −6,7% | 3,3 | 1,83 → 1,72 | +22% | 0,16 |
> | 417 | ADX + Donchian + IFR + Bollinger | **+327% · −40,5%** | +72% · −10,5% | +38% | −5,4% | 4,6 | 1,42 → 1,92 | +24% | 0,30 |
> | 418 | IFR + Quinta + Rompe 200 ⚠️ | **+87% · −14,3%** | +35% · −3,6% | +25% | −3,1% | 4,1 | 1,73 → 1,57 | +19% | 0,08 |
> | 419 | Donchian + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+179% · −29,5%** | +39% · −5,9% | +27% | −3,4% | 4,0 | 1,72 → 1,56 | +21% | −0,01 |
> | 420 | Donchian + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+322% · −33,1%** | +56% · −6,5% | +35% | −6,5% | 3,5 | 1,62 → 1,78 | +27% | 0,13 |

> [!example]- Combinações 421 a 450 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 421 | Donchian + Pôr do sol + Rompe 200 + Bollinger | **+169% · −21,6%** | +44% · −5,1% | +25% | −3,2% | 3,9 | 1,76 → 1,57 | +18% | 0,03 |
> | 422 | GPS médias + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+197% · −30,6%** | +42% · −5,2% | +28% | −3,5% | 4,3 | 2,11 → 1,45 | +18% | 0,06 |
> | 423 | ADX + GPS médias + IFR + Pôr do sol + Tendência | **+316% · −53,9%** | +62% · −11,3% | +37% | −6,3% | 3,9 | 1,60 → 1,67 | +27% | 0,20 |
> | 424 | ADX + GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+369% · −51,9%** | +68% · −10,4% | +40% | −7,0% | 4,0 | 1,53 → 1,75 | +30% | 0,28 |
> | 425 | ADX + Donchian + 1ª vela 80 + Pullback ⚠️ | **+252% · −44,3%** | +61% · −8,5% | +35% | −5,1% | 4,4 | 1,46 → 1,83 | +23% | 0,03 |
> | 426 | ADX + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+319% · −43,6%** | +57% · −8,6% | +36% | −6,0% | 3,9 | 1,46 → 1,96 | +26% | 0,14 |
> | 427 | Donchian + GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+395% · −48,1%** | +67% · −10,1% | +37% | −6,3% | 3,9 | 1,73 → 1,58 | +25% | 0,29 |
> | 428 | IFR + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+251% · −36,4%** | +46% · −6,9% | +30% | −5,5% | 3,1 | 2,06 → 1,71 | +21% | 0,14 |
> | 429 | GPS médias + Pullback + Bollinger + Tendência | **+253% · −38,3%** | +58% · −8,9% | +34% | −4,9% | 4,4 | 2,09 → 1,44 | +20% | 0,15 |
> | 430 | Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+157% · −32,3%** | +36% · −6,0% | +26% | −3,7% | 3,6 | 1,72 → 1,63 | +22% | 0,03 |
> | 431 | GPS médias + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+252% · −37,2%** | +48% · −7,3% | +31% | −5,5% | 3,3 | 1,87 → 1,65 | +22% | 0,11 |
> | 432 | Donchian + IFR + Pullback + Rompe 200 + Tendência | **+309% · −43,0%** | +56% · −8,8% | +35% | −6,0% | 3,7 | 2,01 → 1,53 | +18% | 0,23 |
> | 433 | BB explosão + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+136% · −28,2%** | +33% · −4,8% | +22% | −2,5% | 3,9 | 1,89 → 1,53 | +15% | −0,02 |
> | 434 | ADX + GPS médias + Pôr do sol + Bollinger + Tendência | **+313% · −50,8%** | +59% · −9,5% | +33% | −5,4% | 3,8 | 1,61 → 1,65 | +25% | 0,19 |
> | 435 | IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+142% · −17,8%** | +39% · −3,5% | +27% | −3,6% | 4,0 | 1,45 → 1,93 | +24% | 0,09 |
> | 436 | Donchian + BB explosão + IFR + Pôr do sol + Pullback | **+232% · −47,6%** | +49% · −9,7% | +31% | −4,1% | 4,4 | 1,68 → 1,55 | +17% | 0,08 |
> | 437 | Donchian + Pôr do sol + Pullback + Tendência | **+211% · −38,1%** | +52% · −9,8% | +33% | −4,4% | 4,6 | 1,98 → 1,45 | +18% | 0,07 |
> | 438 | ADX + Donchian + Quinta + Pullback + Rompe 200 ⚠️ | **+215% · −39,6%** | +46% · −6,4% | +28% | −4,0% | 3,8 | 1,71 → 1,59 | +18% | 0,04 |
> | 439 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+202% · −46,8%** | +43% · −9,6% | +30% | −4,1% | 4,3 | 1,70 → 1,55 | +19% | 0,01 |
> | 440 | ADX + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+239% · −38,0%** | +47% · −6,8% | +28% | −4,1% | 3,8 | 1,47 → 1,97 | +21% | 0,14 |
> | 441 | ADX + Donchian + 1ª vela 80 + Quinta + Tendência ⚠️ | **+321% · −52,6%** | +60% · −10,4% | +36% | −5,5% | 4,2 | 1,49 → 1,76 | +26% | 0,09 |
> | 442 | ADX + GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+309% · −52,3%** | +58% · −10,1% | +33% | −5,5% | 3,8 | 1,67 → 1,62 | +24% | 0,20 |
> | 443 | Donchian + GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+280% · −34,2%** | +52% · −6,3% | +30% | −4,3% | 3,9 | 2,06 → 1,48 | +18% | 0,04 |
> | 444 | ADX + Donchian + MACD + Pullback + Bollinger | **+327% · −45,7%** | +58% · −7,8% | +33% | −5,0% | 4,0 | 1,50 → 1,78 | +22% | 0,17 |
> | 445 | BB explosão + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+326% · −47,5%** | +58% · −8,9% | +35% | −6,4% | 3,5 | 1,60 → 1,75 | +23% | 0,28 |
> | 446 | Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+121% · −21,2%** | +35% · −4,9% | +27% | −3,5% | 4,0 | 2,23 → 1,44 | +18% | 0,01 |
> | 447 | IFR + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+254% · −36,5%** | +46% · −7,0% | +30% | −5,6% | 3,1 | 1,98 → 1,74 | +22% | 0,15 |
> | 448 | ADX + Donchian + IFR + MACD + Pullback | **+330% · −46,3%** | +61% · −8,7% | +36% | −5,6% | 4,2 | 1,48 → 1,77 | +23% | 0,18 |
> | 449 | Donchian + GPS médias + IFR + Pullback | **+272% · −42,1%** | +65% · −10,3% | +37% | −5,9% | 4,1 | 1,88 → 1,49 | +20% | 0,19 |
> | 450 | Donchian + BB explosão + IFR + 1ª vela 80 + Pullback ⚠️ | **+286% · −44,8%** | +56% · −9,3% | +34% | −6,0% | 3,5 | 1,62 → 1,68 | +20% | 0,14 |

> [!example]- Combinações 451 a 480 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 451 | Donchian + BB explosão + IFR + Quinta + Pullback ⚠️ | **+229% · −49,1%** | +49% · −10,2% | +31% | −4,2% | 4,3 | 1,74 → 1,52 | +16% | 0,09 |
> | 452 | Donchian + IFR + 1ª vela 80 ⚠️ | **+220% · −26,7%** | +68% · −8,8% | +40% | −6,9% | 3,9 | 1,49 → 1,83 | +29% | 0,23 |
> | 453 | BB explosão + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+199% · −48,5%** | +43% · −10,2% | +30% | −4,1% | 4,3 | 1,76 → 1,52 | +18% | −0,03 |
> | 454 | ADX + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+302% · −44,4%** | +54% · −8,6% | +33% | −5,4% | 3,6 | 1,49 → 1,94 | +26% | 0,12 |
> | 455 | ADX + Donchian + GPS médias + IFR + Quinta ⚠️ | **+311% · −52,2%** | +63% · −10,8% | +36% | −4,6% | 5,0 | 1,51 → 1,63 | +25% | 0,19 |
> | 456 | Donchian + Quinta + Pullback + Tendência ⚠️ | **+208% · −39,8%** | +52% · −9,8% | +33% | −4,4% | 4,7 | 2,05 → 1,43 | +17% | 0,06 |
> | 457 | ADX + GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+367% · −51,9%** | +65% · −11,2% | +37% | −6,1% | 3,9 | 1,52 → 1,73 | +29% | 0,29 |
> | 458 | BB explosão + IFR + Pullback + Rompe 200 + Bollinger | **+212% · −37,3%** | +43% · −6,6% | +28% | −4,3% | 3,5 | 1,84 → 1,60 | +16% | 0,15 |
> | 459 | Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+239% · −30,9%** | +45% · −5,6% | +27% | −4,3% | 3,3 | 1,63 → 1,83 | +22% | 0,08 |
> | 460 | ADX + GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+234% · −41,3%** | +49% · −7,9% | +30% | −4,5% | 3,9 | 1,55 → 1,68 | +25% | −0,01 |
> | 461 | Pôr do sol + Pullback + Rompe 200 + Bollinger + Tendência | **+194% · −28,7%** | +39% · −4,9% | +27% | −4,0% | 3,5 | 2,23 → 1,52 | +18% | 0,05 |
> | 462 | BB explosão + IFR + 1ª vela 80 + Pullback ⚠️ | **+187% · −34,4%** | +49% · −8,4% | +32% | −5,6% | 3,5 | 1,60 → 1,75 | +20% | 0,02 |
> | 463 | ADX + GPS médias + Pôr do sol + Pullback + Tendência | **+269% · −52,9%** | +54% · −10,8% | +33% | −5,4% | 3,9 | 1,77 → 1,55 | +23% | 0,07 |
> | 464 | IFR + Quinta + Tendência ⚠️ | **+156% · −27,0%** | +53% · −8,5% | +36% | −7,0% | 3,3 | 1,88 → 1,64 | +23% | 0,10 |
> | 465 | Donchian + IFR + Pullback + Bollinger + Onda | **+338% · −33,7%** | +57% · −6,4% | +34% | −4,6% | 4,6 | 1,44 → 1,81 | +26% | 0,15 |
> | 466 | IFR + MACD + Quinta + Pullback + Tendência ⚠️ | **+244% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 3,4 | 1,87 → 1,63 | +23% | 0,08 |
> | 467 | GPS médias + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+306% · −43,9%** | +57% · −8,9% | +36% | −6,2% | 3,7 | 1,74 → 1,58 | +25% | 0,26 |
> | 468 | ADX + Donchian + GPS médias + IFR + Tendência | **+378% · −64,6%** | +76% · −15,5% | +42% | −7,4% | 4,0 | 1,59 → 1,60 | +26% | 0,41 |
> | 469 | BB explosão + IFR + Pôr do sol + Pullback + Tendência | **+227% · −49,3%** | +47% · −10,2% | +32% | −5,1% | 3,7 | 1,84 → 1,54 | +18% | 0,08 |
> | 470 | Donchian + IFR + Rompe 200 + Bollinger + Tendência | **+361% · −42,6%** | +60% · −8,7% | +35% | −6,7% | 3,3 | 1,87 → 1,63 | +21% | 0,31 |
> | 471 | ADX + Donchian + GPS médias + Pôr do sol + Pullback | **+272% · −49,4%** | +57% · −9,8% | +32% | −4,4% | 4,4 | 1,64 → 1,54 | +22% | 0,04 |
> | 472 | ADX + Donchian + IFR + 1ª vela 80 + Quinta ⚠️ | **+323% · −38,5%** | +59% · −7,9% | +35% | −4,4% | 5,0 | 1,37 → 1,96 | +23% | 0,08 |
> | 473 | Donchian + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+182% · −39,2%** | +46% · −10,3% | +29% | −4,7% | 3,6 | 1,79 → 1,58 | +19% | 0,06 |
> | 474 | Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+119% · −14,7%** | +34% · −2,6% | +23% | −2,3% | 4,5 | 1,36 → 2,15 | +16% | 0,03 |
> | 475 | IFR + Pôr do sol + Tendência | **+158% · −27,1%** | +53% · −8,6% | +36% | −7,1% | 3,3 | 1,80 → 1,67 | +25% | 0,16 |
> | 476 | BB explosão + IFR + Quinta + Pullback + Tendência ⚠️ | **+224% · −50,8%** | +47% · −10,7% | +32% | −5,1% | 3,8 | 1,90 → 1,52 | +17% | 0,09 |
> | 477 | Donchian + Bollinger | **+141% · −24,1%** | +69% · −12,5% | +34% | −5,7% | 3,7 | 1,62 → 1,62 | +20% | 0,13 |
> | 478 | Quinta + Pullback + Rompe 200 + Bollinger + Tendência ⚠️ | **+191% · −28,7%** | +39% · −4,8% | +27% | −3,9% | 3,5 | 2,33 → 1,49 | +17% | 0,06 |
> | 479 | Donchian + Quinta + Rompe 200 + Bollinger ⚠️ | **+167% · −22,5%** | +43% · −5,2% | +25% | −3,3% | 3,8 | 1,87 → 1,52 | +17% | 0,05 |
> | 480 | Donchian + GPS médias + IFR + Pôr do sol + Bollinger | **+337% · −39,8%** | +60% · −8,6% | +33% | −5,9% | 3,4 | 1,74 → 1,64 | +23% | 0,16 |

> [!example]- Combinações 481 a 510 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 481 | ADX + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+256% · −42,7%** | +50% · −7,9% | +33% | −6,0% | 3,3 | 1,64 → 1,73 | +23% | 0,07 |
> | 482 | IFR + MACD + Pôr do sol + Pullback + Tendência | **+247% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 3,3 | 1,81 → 1,65 | +24% | 0,10 |
> | 483 | BB explosão + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+250% · −46,6%** | +50% · −8,7% | +34% | −5,6% | 3,7 | 1,58 → 1,67 | +22% | 0,09 |
> | 484 | Donchian + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+315% · −46,5%** | +57% · −10,1% | +36% | −6,3% | 3,8 | 1,67 → 1,59 | +25% | 0,17 |
> | 485 | Donchian + GPS médias + IFR + Pôr do sol + Tendência | **+334% · −51,0%** | +63% · −10,2% | +37% | −5,5% | 4,5 | 1,76 → 1,50 | +23% | 0,25 |
> | 486 | ADX + Donchian + Pôr do sol + Quinta + Tendência ⚠️ | **+268% · −52,1%** | +54% · −10,5% | +33% | −5,2% | 3,8 | 1,57 → 1,67 | +23% | 0,10 |
> | 487 | ADX + Donchian + GPS médias + Pullback + Tendência | **+340% · −65,2%** | +68% · −14,9% | +39% | −5,9% | 4,4 | 1,74 → 1,50 | +22% | 0,23 |
> | 488 | ADX + Donchian + GPS médias + Quinta + Pullback ⚠️ | **+269% · −50,4%** | +56% · −10,2% | +32% | −4,4% | 4,4 | 1,70 → 1,51 | +21% | 0,07 |
> | 489 | IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+199% · −22,4%** | +48% · −4,6% | +33% | −6,1% | 3,4 | 1,56 → 1,86 | +26% | 0,03 |
> | 490 | ADX + IFR + MACD + Pôr do sol + Pullback | **+238% · −35,7%** | +47% · −6,1% | +31% | −4,4% | 4,2 | 1,42 → 1,90 | +20% | 0,03 |
> | 491 | Donchian + IFR + Pôr do sol + Rompe 200 | **+184% · −25,8%** | +47% · −6,1% | +29% | −4,5% | 3,7 | 1,67 → 1,59 | +20% | 0,13 |
> | 492 | ADX + Donchian + GPS médias + Bollinger + Tendência | **+389% · −63,7%** | +73% · −14,2% | +39% | −6,6% | 3,9 | 1,61 → 1,58 | +24% | 0,36 |
> | 493 | 1ª vela 80 + Quinta + Tendência ⚠️ | **+130% · −25,2%** | +46% · −7,8% | +33% | −5,4% | 3,7 | 1,60 → 1,64 | +25% | −0,12 |
> | 494 | Donchian + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+235% · −31,3%** | +55% · −7,6% | +34% | −5,9% | 3,5 | 1,56 → 1,75 | +24% | 0,24 |
> | 495 | Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+98% · −16,5%** | +31% · −3,3% | +21% | −1,9% | 4,5 | 2,36 → 1,37 | +15% | 0,03 |
> | 496 | ADX + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+186% · −34,1%** | +40% · −5,9% | +25% | −3,7% | 3,2 | 1,65 → 1,80 | +19% | 0,03 |
> | 497 | Donchian + GPS médias + IFR + Quinta + Bollinger ⚠️ | **+334% · −39,8%** | +59% · −8,7% | +33% | −5,9% | 3,4 | 1,80 → 1,61 | +22% | 0,16 |
> | 498 | ADX + Pullback + Rompe 200 + Bollinger + Tendência | **+276% · −44,6%** | +51% · −8,4% | +31% | −5,9% | 3,1 | 1,86 → 1,69 | +21% | 0,14 |
> | 499 | Donchian + GPS médias + IFR + Quinta + Tendência ⚠️ | **+331% · −52,0%** | +63% · −10,6% | +38% | −5,5% | 4,5 | 1,81 → 1,48 | +22% | 0,23 |
> | 500 | ADX + IFR + Bollinger + Tendência | **+318% · −45,4%** | +69% · −12,0% | +39% | −8,2% | 3,2 | 1,58 → 1,89 | +28% | 0,35 |
> | 501 | GPS médias + IFR + Pôr do sol + Bollinger | **+222% · −31,6%** | +53% · −7,9% | +31% | −5,6% | 3,2 | 1,78 → 1,70 | +25% | 0,11 |
> | 502 | IFR + Pôr do sol + Rompe 200 | **+89% · −14,4%** | +35% · −4,0% | +25% | −3,3% | 3,7 | 1,60 → 1,61 | +21% | 0,08 |
> | 503 | ADX + Donchian + Quinta + Rompe 200 + Bollinger ⚠️ | **+255% · −35,6%** | +50% · −6,4% | +28% | −3,8% | 4,0 | 1,49 → 1,74 | +21% | 0,10 |
> | 504 | Donchian + Pullback + Rompe 200 + Bollinger + Tendência | **+299% · −40,0%** | +53% · −7,9% | +32% | −5,2% | 3,7 | 2,08 → 1,49 | +17% | 0,17 |
> | 505 | GPS médias + IFR + Pôr do sol + Tendência | **+237% · −39,0%** | +58% · −9,0% | +36% | −5,9% | 4,0 | 1,80 → 1,51 | +24% | 0,18 |
> | 506 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+171% · −33,8%** | +38% · −6,4% | +25% | −3,5% | 3,5 | 1,59 → 1,69 | +21% | 0,01 |
> | 507 | IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+128% · −15,0%** | +45% · −4,6% | +31% | −3,8% | 4,7 | 1,34 → 2,08 | +23% | 0,05 |
> | 508 | ADX + Donchian + IFR + Quinta + Rompe 200 ⚠️ | **+264% · −39,4%** | +53% · −7,0% | +32% | −4,6% | 4,0 | 1,48 → 1,75 | +22% | 0,13 |
> | 509 | Donchian + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+250% · −45,0%** | +49% · −9,5% | +31% | −4,9% | 3,8 | 1,74 → 1,56 | +21% | 0,08 |
> | 510 | GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+167% · −25,0%** | +44% · −5,5% | +26% | −3,5% | 3,9 | 2,22 → 1,42 | +18% | −0,00 |

> [!example]- Combinações 511 a 540 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 511 | IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+222% · −33,4%** | +53% · −8,0% | +35% | −7,1% | 3,2 | 1,71 → 1,72 | +25% | 0,21 |
> | 512 | ADX + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+220% · −36,2%** | +53% · −8,4% | +31% | −4,5% | 4,0 | 1,39 → 2,03 | +21% | 0,09 |
> | 513 | ADX + GPS médias + Pullback + Rompe 200 + Bollinger | **+254% · −43,9%** | +51% · −8,9% | +29% | −4,2% | 3,8 | 1,72 → 1,55 | +21% | 0,15 |
> | 514 | IFR + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+185% · −31,0%** | +39% · −5,4% | +28% | −4,7% | 3,3 | 1,97 → 1,61 | +20% | 0,10 |
> | 515 | Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+253% · −44,4%** | +49% · −9,3% | +31% | −4,9% | 3,8 | 1,68 → 1,57 | +22% | 0,13 |
> | 516 | ADX + MACD + Quinta + Pullback + Bollinger ⚠️ | **+220% · −39,1%** | +44% · −7,1% | +28% | −4,3% | 3,5 | 1,51 → 1,88 | +19% | 0,08 |
> | 517 | Donchian + GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+344% · −42,1%** | +59% · −8,4% | +33% | −6,3% | 3,2 | 1,86 → 1,65 | +22% | 0,11 |
> | 518 | ADX + Donchian + GPS médias + Quinta + Bollinger ⚠️ | **+311% · −47,6%** | +61% · −9,3% | +32% | −4,4% | 4,4 | 1,52 → 1,60 | +23% | 0,16 |
> | 519 | BB explosão + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+185% · −31,0%** | +40% · −5,9% | +26% | −3,8% | 3,4 | 1,57 → 1,78 | +19% | 0,05 |
> | 520 | ADX + GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+235% · −41,4%** | +50% · −8,1% | +30% | −4,1% | 4,3 | 1,47 → 1,72 | +24% | 0,08 |
> | 521 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+223% · −32,2%** | +45% · −6,1% | +29% | −5,1% | 3,2 | 1,65 → 1,76 | +26% | 0,02 |
> | 522 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+237% · −41,9%** | +50% · −8,2% | +30% | −4,3% | 4,0 | 1,49 → 1,71 | +25% | 0,01 |
> | 523 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+170% · −31,0%** | +39% · −4,8% | +26% | −3,2% | 4,1 | 1,40 → 1,97 | +18% | −0,03 |
> | 524 | Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+80% · −12,3%** | +27% · −1,8% | +19% | −1,8% | 3,5 | 1,88 → 1,55 | +18% | 0,03 |
> | 525 | ADX + GPS médias + IFR + Bollinger | **+288% · −44,5%** | +68% · −11,7% | +36% | −5,3% | 4,5 | 1,44 → 1,75 | +28% | 0,37 |
> | 526 | Donchian + Pôr do sol + Quinta ⚠️ | **+103% · −25,3%** | +40% · −7,0% | +25% | −2,8% | 4,4 | 1,66 → 1,51 | +19% | −0,05 |
> | 527 | ADX + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+298% · −39,6%** | +53% · −7,2% | +32% | −3,8% | 4,9 | 1,32 → 2,19 | +22% | 0,12 |
> | 528 | GPS médias + IFR + Quinta + Tendência ⚠️ | **+234% · −40,2%** | +58% · −9,5% | +36% | −5,8% | 4,0 | 1,86 → 1,49 | +23% | 0,15 |
> | 529 | Donchian + 1ª vela 80 + Tendência ⚠️ | **+219% · −37,5%** | +70% · −13,2% | +41% | −7,3% | 3,9 | 1,59 → 1,57 | +26% | 0,26 |
> | 530 | GPS médias + IFR + Quinta + Bollinger ⚠️ | **+219% · −31,6%** | +53% · −7,9% | +31% | −5,6% | 3,2 | 1,86 → 1,65 | +23% | 0,12 |
> | 531 | GPS médias + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+294% · −37,6%** | +52% · −7,6% | +31% | −6,1% | 3,0 | 1,73 → 1,83 | +26% | 0,10 |
> | 532 | Donchian + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+148% · −31,0%** | +35% · −5,7% | +24% | −2,4% | 4,5 | 2,13 → 1,38 | +15% | 0,00 |
> | 533 | Donchian + GPS médias + Pôr do sol + Bollinger + Tendência | **+333% · −46,1%** | +60% · −8,9% | +34% | −4,7% | 4,5 | 1,80 → 1,47 | +22% | 0,18 |
> | 534 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+324% · −51,1%** | +61% · −9,8% | +36% | −5,5% | 4,2 | 1,44 → 1,78 | +26% | 0,14 |
> | 535 | ADX + Pôr do sol + Pullback + Bollinger | **+171% · −31,1%** | +45% · −7,2% | +27% | −4,3% | 3,2 | 1,56 → 1,93 | +17% | 0,03 |
> | 536 | GPS médias + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+202% · −37,1%** | +43% · −6,8% | +29% | −3,0% | 5,3 | 2,13 → 1,37 | +19% | −0,01 |
> | 537 | ADX + IFR + Quinta + Tendência ⚠️ | **+240% · −42,6%** | +59% · −10,2% | +37% | −7,2% | 3,4 | 1,57 → 1,80 | +26% | 0,17 |
> | 538 | ADX + GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+285% · −50,4%** | +57% · −9,3% | +35% | −5,3% | 4,2 | 1,50 → 1,65 | +27% | 0,10 |
> | 539 | MACD + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+228% · −32,6%** | +44% · −5,8% | +30% | −5,2% | 3,2 | 1,95 → 1,61 | +22% | 0,08 |
> | 540 | IFR + Quinta + Pullback + Bollinger + Onda ⚠️ | **+226% · −25,9%** | +43% · −4,2% | +29% | −4,1% | 3,9 | 1,42 → 1,94 | +23% | 0,01 |

> [!example]- Combinações 541 a 570 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 541 | BB explosão + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+182% · −34,1%** | +39% · −6,4% | +26% | −4,1% | 3,1 | 1,70 → 1,73 | +18% | −0,02 |
> | 542 | ADX + Donchian + GPS médias + IFR + Pôr do sol | **+314% · −51,2%** | +64% · −10,4% | +36% | −4,5% | 5,0 | 1,46 → 1,65 | +26% | 0,18 |
> | 543 | Donchian + GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+330% · −47,7%** | +60% · −9,0% | +34% | −4,6% | 4,6 | 1,86 → 1,45 | +20% | 0,17 |
> | 544 | ADX + Donchian + IFR + Quinta ⚠️ | **+248% · −38,1%** | +61% · −9,4% | +35% | −4,9% | 4,6 | 1,40 → 1,82 | +22% | 0,13 |
> | 545 | VWAP + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+263% · −43,2%** | +50% · −8,8% | +34% | −5,9% | 3,6 | 1,65 → 1,59 | +22% | 0,11 |
> | 546 | MACD + Pôr do sol + Pullback + Bollinger + Tendência | **+230% · −32,7%** | +44% · −5,9% | +30% | −5,3% | 3,2 | 1,86 → 1,63 | +23% | 0,08 |
> | 547 | ADX + GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+367% · −48,9%** | +64% · −9,9% | +36% | −5,5% | 4,2 | 1,40 → 1,88 | +29% | 0,29 |
> | 548 | GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+211% · −38,0%** | +53% · −9,6% | +34% | −4,8% | 4,4 | 1,65 → 1,51 | +26% | 0,09 |
> | 549 | ADX + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+305% · −43,4%** | +54% · −8,3% | +33% | −5,4% | 3,7 | 1,43 → 1,97 | +25% | 0,16 |
> | 550 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+312% · −48,0%** | +60% · −10,2% | +35% | −5,4% | 4,2 | 1,67 → 1,51 | +24% | 0,16 |
> | 551 | ADX + GPS médias + IFR + Rompe 200 + Bollinger | **+306% · −45,7%** | +58% · −9,5% | +32% | −5,1% | 3,8 | 1,51 → 1,70 | +25% | 0,28 |
> | 552 | ADX + GPS médias + IFR + MACD + Pullback | **+295% · −47,9%** | +58% · −10,0% | +35% | −5,7% | 4,0 | 1,50 → 1,67 | +27% | 0,17 |
> | 553 | ADX + BB explosão + IFR + Pullback + Tendência | **+287% · −65,6%** | +59% · −15,8% | +37% | −7,0% | 3,4 | 1,62 → 1,65 | +20% | 0,22 |
> | 554 | MACD + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+193% · −23,0%** | +39% · −3,6% | +27% | −4,8% | 2,9 | 1,71 → 1,93 | +23% | −0,01 |
> | 555 | Donchian + IFR + MACD + Pullback + Tendência | **+341% · −45,2%** | +60% · −10,2% | +38% | −7,3% | 3,5 | 1,75 → 1,57 | +23% | 0,28 |
> | 556 | BB explosão + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+236% · −46,4%** | +47% · −8,7% | +30% | −4,8% | 3,6 | 1,58 → 1,63 | +20% | 0,10 |
> | 557 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+253% · −45,0%** | +51% · −8,0% | +34% | −5,6% | 3,7 | 1,53 → 1,69 | +23% | 0,14 |
> | 558 | ADX + IFR + Pôr do sol + Rompe 200 + Bollinger | **+242% · −37,1%** | +47% · −7,2% | +28% | −4,0% | 3,9 | 1,40 → 2,01 | +21% | 0,12 |
> | 559 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+298% · −37,6%** | +52% · −7,6% | +31% | −6,1% | 3,0 | 1,67 → 1,86 | +27% | 0,14 |
> | 560 | Donchian + GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+308% · −49,6%** | +59% · −10,7% | +36% | −5,4% | 4,2 | 1,72 → 1,49 | +23% | 0,10 |
> | 561 | BB explosão + IFR + Pôr do sol + Bollinger + Tendência | **+267% · −47,4%** | +51% · −8,8% | +32% | −5,8% | 3,3 | 1,66 → 1,65 | +20% | 0,19 |
> | 562 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+135% · −17,0%** | +32% · −2,5% | +25% | −3,7% | 3,3 | 1,56 → 1,82 | +20% | −0,06 |
> | 563 | BB explosão + IFR + Quinta + Bollinger + Tendência ⚠️ | **+263% · −48,9%** | +51% · −9,4% | +32% | −5,8% | 3,3 | 1,72 → 1,62 | +19% | 0,19 |
> | 564 | ADX + Donchian + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+314% · −36,1%** | +56% · −6,8% | +31% | −4,1% | 4,5 | 1,35 → 1,97 | +22% | 0,09 |
> | 565 | GPS médias + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+295% · −43,3%** | +53% · −8,9% | +32% | −5,4% | 3,6 | 1,76 → 1,54 | +23% | 0,22 |
> | 566 | GPS médias + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+251% · −49,2%** | +49% · −10,9% | +32% | −4,7% | 4,2 | 1,91 → 1,44 | +21% | 0,10 |
> | 567 | 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+167% · −37,9%** | +44% · −9,8% | +31% | −5,2% | 3,5 | 1,89 → 1,52 | +20% | 0,03 |
> | 568 | ADX + BB explosão + IFR + 1ª vela 80 + Pullback ⚠️ | **+265% · −50,2%** | +54% · −9,5% | +34% | −4,7% | 4,4 | 1,39 → 1,85 | +24% | 0,10 |
> | 569 | GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+160% · −25,8%** | +44% · −6,0% | +28% | −4,4% | 3,5 | 1,78 → 1,55 | +23% | 0,02 |
> | 570 | ADX + GPS médias + Quinta + Pullback + Tendência ⚠️ | **+266% · −54,3%** | +54% · −11,2% | +34% | −5,8% | 3,6 | 1,83 → 1,52 | +22% | 0,08 |

> [!example]- Combinações 571 a 600 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 571 | ADX + Donchian + Pullback | **+186% · −41,7%** | +64% · −13,5% | +36% | −5,7% | 4,0 | 1,52 → 1,62 | +21% | 0,07 |
> | 572 | Donchian + IFR | **+155% · −27,2%** | +77% · −14,2% | +43% | −7,7% | 3,9 | 1,54 → 1,62 | +24% | 0,48 |
> | 573 | ADX + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+246% · −40,0%** | +47% · −7,3% | +29% | −5,4% | 3,1 | 1,62 → 1,86 | +22% | 0,13 |
> | 574 | IFR + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+196% · −25,4%** | +40% · −4,0% | +27% | −4,1% | 3,4 | 1,48 → 1,93 | +21% | 0,09 |
> | 575 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+265% · −41,7%** | +51% · −8,7% | +31% | −5,3% | 3,4 | 1,79 → 1,56 | +22% | −0,00 |
> | 576 | Donchian + GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+258% · −35,5%** | +52% · −7,7% | +31% | −4,9% | 3,7 | 1,74 → 1,53 | +22% | 0,07 |
> | 577 | ADX + Donchian + IFR + Tendência | **+327% · −55,7%** | +77% · −15,0% | +44% | −8,7% | 3,6 | 1,53 → 1,71 | +27% | 0,40 |
> | 578 | GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+208% · −40,0%** | +53% · −10,3% | +34% | −4,8% | 4,4 | 1,71 → 1,49 | +25% | 0,00 |
> | 579 | ADX + Donchian + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+358% · −62,2%** | +72% · −13,5% | +40% | −6,3% | 4,3 | 1,50 → 1,61 | +27% | 0,29 |
> | 580 | ADX + Donchian + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+327% · −38,5%** | +60% · −7,9% | +35% | −4,1% | 5,4 | 1,32 → 1,98 | +22% | 0,12 |
> | 581 | IFR + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+214% · −26,5%** | +42% · −4,3% | +30% | −5,5% | 3,1 | 1,61 → 1,78 | +25% | 0,08 |
> | 582 | ADX + Donchian + IFR + Pôr do sol + Rompe 200 | **+267% · −38,2%** | +53% · −6,8% | +31% | −4,3% | 4,3 | 1,42 → 1,77 | +22% | 0,12 |
> | 583 | GPS médias + Pôr do sol + Bollinger + Tendência | **+225% · −32,3%** | +54% · −7,4% | +32% | −4,8% | 4,0 | 1,86 → 1,47 | +23% | 0,13 |
> | 584 | BB explosão + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+201% · −39,9%** | +43% · −8,0% | +29% | −5,1% | 3,2 | 1,65 → 1,67 | +18% | 0,09 |
> | 585 | Donchian + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+230% · −30,7%** | +45% · −5,4% | +30% | −5,3% | 3,2 | 1,63 → 1,69 | +24% | −0,02 |
> | 586 | Donchian + MACD + Pullback + Bollinger | **+229% · −29,4%** | +53% · −7,0% | +31% | −5,7% | 3,2 | 1,71 → 1,62 | +22% | 0,14 |
> | 587 | Donchian + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+276% · −39,3%** | +52% · −7,7% | +33% | −5,9% | 3,5 | 1,86 → 1,53 | +19% | 0,19 |
> | 588 | Donchian + IFR + Tendência | **+244% · −38,7%** | +76% · −12,6% | +45% | −9,0% | 3,6 | 1,72 → 1,56 | +23% | 0,52 |
> | 589 | ADX + Donchian + GPS médias + Pôr do sol + Bollinger | **+315% · −47,5%** | +61% · −9,5% | +32% | −4,1% | 4,6 | 1,46 → 1,63 | +24% | 0,14 |
> | 590 | Donchian + GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+262% · −43,2%** | +51% · −9,0% | +31% | −5,3% | 3,4 | 1,85 → 1,53 | +21% | −0,03 |
> | 591 | ADX + BB explosão + IFR + Quinta + Pullback ⚠️ | **+213% · −51,9%** | +47% · −10,3% | +30% | −4,9% | 3,5 | 1,52 → 1,72 | +19% | 0,07 |
> | 592 | Donchian + MACD + Pullback + Bollinger + Tendência | **+335% · −46,2%** | +57% · −10,0% | +35% | −6,4% | 3,4 | 1,80 → 1,56 | +22% | 0,23 |
> | 593 | ADX + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+206% · −41,4%** | +43% · −7,3% | +29% | −5,6% | 2,9 | 1,85 → 1,71 | +22% | 0,04 |
> | 594 | GPS médias + IFR + Pullback + Rompe 200 + Tendência | **+280% · −46,3%** | +53% · −9,2% | +34% | −5,7% | 3,8 | 2,05 → 1,44 | +19% | 0,20 |
> | 595 | ADX + Donchian + Pôr do sol + Rompe 200 + Bollinger | **+258% · −34,7%** | +50% · −6,6% | +28% | −3,5% | 4,3 | 1,41 → 1,77 | +21% | 0,07 |
> | 596 | ADX + Donchian + Bollinger + Tendência | **+326% · −55,4%** | +73% · −15,1% | +39% | −7,6% | 3,5 | 1,55 → 1,71 | +25% | 0,34 |
> | 597 | Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+132% · −23,1%** | +47% · −7,1% | +33% | −5,3% | 3,7 | 1,52 → 1,67 | +27% | 0,06 |
> | 598 | Donchian + Pôr do sol + Quinta + Tendência ⚠️ | **+184% · −34,9%** | +48% · −8,8% | +31% | −4,3% | 4,2 | 1,80 → 1,46 | +19% | 0,08 |
> | 599 | ADX + IFR + Quinta + Bollinger ⚠️ | **+222% · −35,2%** | +53% · −8,0% | +31% | −4,7% | 3,9 | 1,37 → 2,07 | +20% | 0,17 |
> | 600 | IFR + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+356% · −42,2%** | +58% · −8,6% | +37% | −7,4% | 3,2 | 1,56 → 1,82 | +30% | 0,31 |

> [!example]- Combinações 601 a 630 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 601 | Donchian + IFR + Pôr do sol + Rompe 200 + Tendência | **+279% · −38,0%** | +53% · −7,6% | +33% | −6,0% | 3,4 | 1,80 → 1,55 | +20% | 0,21 |
> | 602 | Pôr do sol + Bollinger + Tendência | **+141% · −24,1%** | +48% · −7,4% | +30% | −5,6% | 3,1 | 1,85 → 1,64 | +22% | 0,10 |
> | 603 | Donchian + IFR + MACD + Pullback + Rompe 200 | **+256% · −35,8%** | +49% · −7,6% | +32% | −5,3% | 3,6 | 1,69 → 1,55 | +21% | 0,19 |
> | 604 | ADX + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+183% · −35,3%** | +40% · −6,1% | +25% | −4,2% | 2,9 | 1,75 → 1,75 | +19% | 0,07 |
> | 605 | ADX + MACD + Pôr do sol + Pullback + Bollinger | **+223% · −38,0%** | +44% · −6,8% | +28% | −4,1% | 3,7 | 1,41 → 1,92 | +19% | 0,05 |
> | 606 | ADX + Donchian + MACD + Quinta + Pullback ⚠️ | **+247% · −43,7%** | +50% · −7,8% | +31% | −4,6% | 4,0 | 1,48 → 1,68 | +21% | 0,05 |
> | 607 | GPS médias + IFR + Rompe 200 + Bollinger + Tendência | **+326% · −41,1%** | +57% · −8,2% | +34% | −6,4% | 3,4 | 1,90 → 1,53 | +22% | 0,30 |
> | 608 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+288% · −48,9%** | +58% · −9,3% | +35% | −5,2% | 4,2 | 1,46 → 1,67 | +28% | 0,13 |
> | 609 | ADX + Donchian + Quinta + Bollinger ⚠️ | **+239% · −38,5%** | +58% · −8,4% | +31% | −4,3% | 4,2 | 1,39 → 1,82 | +20% | 0,11 |
> | 610 | ADX + Quinta + Pullback + Bollinger ⚠️ | **+168% · −32,4%** | +44% · −7,5% | +27% | −4,9% | 2,9 | 1,67 → 1,87 | +18% | 0,08 |
> | 611 | GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+219% · −35,5%** | +52% · −8,6% | +30% | −6,0% | 3,0 | 1,86 → 1,66 | +24% | 0,07 |
> | 612 | Quinta + Bollinger + Tendência ⚠️ | **+138% · −24,1%** | +48% · −7,3% | +30% | −5,6% | 3,1 | 1,97 → 1,59 | +21% | 0,08 |
> | 613 | Donchian + BB explosão + 1ª vela 80 + Pullback + Tendência ⚠️ | **+277% · −60,5%** | +57% · −13,6% | +35% | −5,2% | 4,3 | 1,67 → 1,49 | +18% | 0,18 |
> | 614 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+186% · −31,9%** | +40% · −5,8% | +26% | −4,2% | 3,1 | 1,62 → 1,78 | +19% | −0,00 |
> | 615 | ADX + Donchian + Pullback + Rompe 200 | **+200% · −39,9%** | +53% · −9,2% | +31% | −4,6% | 3,9 | 1,59 → 1,54 | +19% | 0,09 |
> | 616 | 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+204% · −30,9%** | +49% · −7,1% | +31% | −6,0% | 3,0 | 1,71 → 1,69 | +23% | 0,17 |
> | 617 | ADX + GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+189% · −39,6%** | +43% · −7,6% | +27% | −4,0% | 3,5 | 1,70 → 1,54 | +22% | −0,00 |
> | 618 | ADX + GPS médias + IFR + Tendência | **+294% · −55,9%** | +73% · −15,6% | +42% | −8,3% | 3,6 | 1,56 → 1,62 | +28% | 0,39 |
> | 619 | MACD + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+145% · −20,6%** | +33% · −2,9% | +23% | −3,4% | 3,1 | 1,78 → 1,63 | +20% | 0,01 |
> | 620 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+228% · −39,1%** | +47% · −7,0% | +31% | −4,6% | 3,9 | 1,40 → 1,87 | +23% | 0,05 |
> | 621 | ADX + IFR + Rompe 200 + Bollinger + Tendência | **+337% · −48,3%** | +58% · −10,3% | +35% | −7,4% | 3,0 | 1,65 → 1,82 | +25% | 0,27 |
> | 622 | IFR + Pullback + Rompe 200 + Tendência | **+196% · −31,4%** | +48% · −7,4% | +34% | −6,5% | 3,2 | 2,12 → 1,52 | +19% | 0,15 |
> | 623 | ADX + Donchian + Pullback + Rompe 200 + Tendência | **+294% · −56,7%** | +57% · −12,1% | +35% | −6,3% | 3,5 | 1,76 → 1,54 | +19% | 0,17 |
> | 624 | BB explosão + Pôr do sol + Pullback + Bollinger + Tendência | **+213% · −49,2%** | +44% · −9,6% | +29% | −4,3% | 3,7 | 1,87 → 1,48 | +16% | 0,07 |
> | 625 | ADX + Donchian + BB explosão + IFR + Pullback | **+285% · −62,5%** | +61% · −14,3% | +35% | −5,7% | 4,0 | 1,49 → 1,64 | +20% | 0,23 |
> | 626 | ADX + IFR + Pôr do sol + Tendência | **+243% · −41,8%** | +59% · −10,3% | +37% | −7,2% | 3,3 | 1,50 → 1,83 | +25% | 0,18 |
> | 627 | ADX + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+292% · −40,1%** | +54% · −7,3% | +35% | −5,4% | 4,0 | 1,36 → 1,96 | +23% | 0,08 |
> | 628 | GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+222% · −33,3%** | +54% · −7,1% | +32% | −4,7% | 4,1 | 1,93 → 1,43 | +21% | 0,12 |
> | 629 | ADX + IFR + MACD + Pullback + Tendência | **+322% · −50,5%** | +59% · −10,0% | +38% | −8,0% | 3,1 | 1,60 → 1,75 | +27% | 0,19 |
> | 630 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+129% · −34,1%** | +33% · −6,6% | +24% | −3,3% | 3,4 | 1,59 → 1,61 | +18% | −0,09 |

> [!example]- Combinações 631 a 660 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 631 | Donchian + BB explosão + IFR + 1ª vela 80 + Tendência ⚠️ | **+323% · −59,3%** | +64% · −12,9% | +39% | −6,8% | 3,8 | 1,53 → 1,60 | +22% | 0,35 |
> | 632 | ADX + BB explosão + IFR + Pôr do sol + Pullback | **+216% · −51,0%** | +48% · −9,9% | +30% | −4,7% | 3,7 | 1,46 → 1,75 | +20% | 0,04 |
> | 633 | BB explosão + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+240% · −44,7%** | +47% · −8,1% | +30% | −4,8% | 3,6 | 1,52 → 1,66 | +21% | 0,14 |
> | 634 | ADX + GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+283% · −45,4%** | +56% · −8,6% | +34% | −4,8% | 4,4 | 1,38 → 1,80 | +27% | 0,11 |
> | 635 | Pôr do sol + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+167% · −28,2%** | +36% · −4,7% | +25% | −3,9% | 3,1 | 2,06 → 1,55 | +19% | 0,07 |
> | 636 | Donchian + GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+313% · −40,5%** | +58% · −8,4% | +34% | −7,0% | 3,1 | 1,65 → 1,65 | +25% | 0,10 |
> | 637 | ADX + BB explosão + Pullback + Bollinger + Tendência | **+281% · −65,8%** | +56% · −15,8% | +33% | −6,2% | 3,3 | 1,63 → 1,61 | +19% | 0,23 |
> | 638 | Donchian + GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+402% · −45,2%** | +66% · −9,9% | +36% | −7,9% | 3,0 | 1,66 → 1,73 | +26% | 0,28 |
> | 639 | ADX + IFR + 1ª vela 80 + Tendência ⚠️ | **+296% · −43,7%** | +67% · −11,3% | +41% | −8,0% | 3,6 | 1,42 → 1,90 | +30% | 0,23 |
> | 640 | ADX + Donchian + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+321% · −39,2%** | +60% · −7,5% | +35% | −5,1% | 4,3 | 1,36 → 1,86 | +25% | 0,21 |
> | 641 | IFR + MACD + Quinta + Bollinger + Tendência ⚠️ | **+287% · −40,0%** | +51% · −7,9% | +33% | −6,8% | 3,0 | 1,67 → 1,72 | +26% | 0,21 |
> | 642 | BB explosão + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+210% · −50,7%** | +44% · −10,2% | +29% | −4,2% | 3,8 | 1,94 → 1,45 | +15% | 0,09 |
> | 643 | ADX + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+169% · −34,5%** | +39% · −5,8% | +26% | −3,6% | 3,8 | 1,43 → 1,80 | +21% | −0,01 |
> | 644 | ADX + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+302% · −38,7%** | +53% · −7,4% | +31% | −3,6% | 5,2 | 1,26 → 2,22 | +21% | 0,14 |
> | 645 | ADX + Donchian + BB explosão + Pullback + Bollinger | **+284% · −62,5%** | +58% · −14,3% | +32% | −4,6% | 4,1 | 1,48 → 1,61 | +18% | 0,21 |
> | 646 | IFR + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+271% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 3,3 | 1,53 → 1,74 | +29% | 0,12 |
> | 647 | ADX + GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+231% · −45,0%** | +50% · −9,3% | +31% | −4,4% | 4,0 | 1,49 → 1,60 | +23% | 0,15 |
> | 648 | BB explosão + IFR + Pôr do sol + Pullback + Rompe 200 | **+153% · −38,2%** | +37% · −6,9% | +26% | −3,4% | 3,8 | 1,76 → 1,48 | +15% | 0,03 |
> | 649 | Donchian + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+310% · −31,6%** | +53% · −5,8% | +32% | −6,6% | 2,9 | 1,66 → 1,80 | +25% | 0,12 |
> | 650 | ADX + Donchian + GPS médias + Pôr do sol + Tendência | **+310% · −61,8%** | +65% · −13,8% | +37% | −5,8% | 4,1 | 1,55 → 1,52 | +24% | 0,19 |
> | 651 | Donchian + GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+211% · −34,6%** | +45% · −6,6% | +28% | −3,3% | 4,5 | 1,98 → 1,36 | +18% | −0,04 |
> | 652 | ADX + GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+225% · −39,1%** | +47% · −7,4% | +27% | −3,6% | 4,0 | 1,45 → 1,67 | +23% | 0,09 |
> | 653 | IFR + Pullback + Bollinger + Tendência + Onda | **+323% · −40,6%** | +55% · −8,0% | +35% | −7,0% | 3,2 | 1,54 → 1,78 | +29% | 0,16 |
> | 654 | ADX + Pôr do sol + Pullback + Tendência | **+191% · −43,2%** | +50% · −10,1% | +32% | −6,6% | 3,0 | 1,72 → 1,66 | +23% | 0,03 |
> | 655 | Donchian + BB explosão + IFR + Pullback + Tendência | **+297% · −62,5%** | +60% · −14,3% | +37% | −6,3% | 3,9 | 1,76 → 1,48 | +17% | 0,30 |
> | 656 | ADX + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+255% · −43,9%** | +51% · −8,8% | +33% | −6,6% | 3,0 | 1,63 → 1,73 | +23% | 0,15 |
> | 657 | Donchian + Bollinger + Tendência | **+233% · −38,5%** | +71% · −13,0% | +39% | −7,6% | 3,4 | 1,77 → 1,53 | +21% | 0,35 |
> | 658 | ADX + Donchian + GPS médias + Quinta + Tendência ⚠️ | **+307% · −63,0%** | +64% · −14,2% | +37% | −5,7% | 4,2 | 1,60 → 1,50 | +23% | 0,20 |
> | 659 | ADX + Donchian + GPS médias + IFR + 1ª vela 80 ⚠️ | **+365% · −50,5%** | +71% · −10,1% | +39% | −6,3% | 4,2 | 1,41 → 1,73 | +29% | 0,29 |
> | 660 | Donchian + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+265% · −36,1%** | +49% · −6,9% | +30% | −5,1% | 3,4 | 1,93 → 1,49 | +18% | 0,13 |

> [!example]- Combinações 661 a 690 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 661 | ADX + Donchian + GPS médias + IFR + Rompe 200 | **+307% · −55,1%** | +64% · −11,8% | +36% | −5,3% | 4,3 | 1,49 → 1,56 | +24% | 0,31 |
> | 662 | Donchian + IFR + Quinta + Pullback + Onda ⚠️ | **+253% · −33,3%** | +49% · −6,3% | +32% | −4,2% | 4,5 | 1,40 → 1,70 | +24% | 0,03 |
> | 663 | Donchian + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+268% · −35,0%** | +50% · −6,9% | +30% | −5,1% | 3,3 | 1,86 → 1,52 | +19% | 0,13 |
> | 664 | Donchian + GPS médias + IFR + Pullback + Rompe 200 | **+286% · −44,2%** | +55% · −8,5% | +33% | −5,4% | 3,8 | 1,92 → 1,43 | +18% | 0,21 |
> | 665 | ADX + MACD + Pullback + Bollinger + Tendência | **+314% · −50,4%** | +56% · −9,5% | +34% | −7,2% | 3,0 | 1,62 → 1,74 | +26% | 0,20 |
> | 666 | Donchian + BB explosão + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+321% · −58,9%** | +61% · −12,9% | +35% | −5,9% | 3,8 | 1,53 → 1,57 | +20% | 0,31 |
> | 667 | ADX + Donchian + IFR + Rompe 200 + Tendência | **+343% · −55,2%** | +65% · −11,9% | +38% | −7,8% | 3,2 | 1,59 → 1,66 | +23% | 0,31 |
> | 668 | ADX + GPS médias + Pullback + Tendência | **+249% · −55,4%** | +64% · −15,0% | +38% | −6,8% | 3,7 | 1,74 → 1,49 | +23% | 0,18 |
> | 669 | GPS médias + IFR + MACD + Pullback + Tendência | **+311% · −47,5%** | +58% · −9,5% | +37% | −6,9% | 3,6 | 1,79 → 1,50 | +25% | 0,22 |
> | 670 | MACD + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+143% · −20,5%** | +33% · −2,8% | +23% | −3,5% | 3,0 | 1,91 → 1,58 | +19% | 0,03 |
> | 671 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+318% · −37,0%** | +56% · −7,0% | +31% | −3,9% | 4,7 | 1,29 → 2,00 | +21% | 0,11 |
> | 672 | ADX + Donchian + IFR + Pôr do sol | **+251% · −37,1%** | +62% · −9,4% | +35% | −4,8% | 4,6 | 1,34 → 1,84 | +21% | 0,12 |
> | 673 | ADX + Donchian + Quinta + Tendência ⚠️ | **+248% · −54,7%** | +63% · −14,9% | +37% | −6,6% | 3,6 | 1,53 → 1,61 | +23% | 0,16 |
> | 674 | IFR + Rompe 200 + Bollinger + Tendência | **+235% · −36,4%** | +54% · −9,1% | +34% | −7,4% | 2,8 | 1,94 → 1,67 | +22% | 0,26 |
> | 675 | ADX + GPS médias + Bollinger + Tendência | **+290% · −53,5%** | +69% · −13,8% | +38% | −7,3% | 3,4 | 1,57 → 1,59 | +26% | 0,36 |
> | 676 | ADX + IFR + Pôr do sol + Bollinger | **+225% · −34,3%** | +54% · −8,3% | +31% | −4,2% | 4,3 | 1,28 → 2,12 | +19% | 0,14 |
> | 677 | Donchian + BB explosão + Pôr do sol + Pullback + Bollinger | **+222% · −44,3%** | +46% · −8,0% | +27% | −3,8% | 3,8 | 1,70 → 1,49 | +15% | 0,05 |
> | 678 | Donchian + IFR + MACD + Quinta + Bollinger ⚠️ | **+301% · −33,2%** | +53% · −7,1% | +32% | −5,9% | 3,2 | 1,53 → 1,75 | +25% | 0,18 |
> | 679 | MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+200% · −32,8%** | +49% · −8,0% | +35% | −6,8% | 3,2 | 1,64 → 1,60 | +27% | 0,07 |
> | 680 | Donchian + GPS médias + IFR + Tendência | **+311% · −53,1%** | +75% · −14,3% | +43% | −7,3% | 4,1 | 1,73 → 1,45 | +23% | 0,47 |
> | 681 | Donchian + IFR + MACD + Bollinger + Tendência | **+392% · −45,9%** | +65% · −9,7% | +38% | −8,0% | 3,2 | 1,60 → 1,64 | +26% | 0,42 |
> | 682 | Donchian + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+369% · −43,4%** | +64% · −9,1% | +40% | −7,8% | 3,5 | 1,51 → 1,67 | +29% | 0,36 |
> | 683 | ADX + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+313% · −46,8%** | +57% · −9,7% | +36% | −7,2% | 3,2 | 1,49 → 1,85 | +28% | 0,20 |
> | 684 | ADX + VWAP + IFR + Pullback + Bollinger | **+269% · −38,6%** | +51% · −7,9% | +31% | −4,9% | 3,7 | 1,44 → 1,74 | +18% | 0,18 |
> | 685 | Donchian + BB explosão + IFR + Bollinger + Tendência | **+343% · −61,1%** | +65% · −13,6% | +37% | −7,0% | 3,5 | 1,62 → 1,55 | +19% | 0,42 |
> | 686 | IFR + Pôr do sol + Pullback + Bollinger + Onda | **+229% · −25,9%** | +43% · −4,3% | +29% | −4,1% | 3,8 | 1,35 → 1,96 | +22% | 0,02 |
> | 687 | Donchian + GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+316% · −40,5%** | +59% · −8,4% | +34% | −6,9% | 3,1 | 1,60 → 1,67 | +26% | 0,15 |
> | 688 | ADX + Donchian + MACD + Pôr do sol + Pullback | **+250% · −43,1%** | +51% · −7,4% | +31% | −4,4% | 4,1 | 1,41 → 1,70 | +20% | 0,03 |
> | 689 | ADX + BB explosão + 1ª vela 80 + Pullback + Tendência ⚠️ | **+261% · −64,0%** | +55% · −15,1% | +35% | −6,0% | 3,6 | 1,49 → 1,65 | +22% | 0,12 |
> | 690 | BB explosão + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+199% · −46,4%** | +44% · −8,9% | +30% | −5,0% | 3,5 | 1,66 → 1,55 | +19% | 0,10 |

> [!example]- Combinações 691 a 720 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 691 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+196% · −23,4%** | +39% · −3,7% | +27% | −5,0% | 2,8 | 1,61 → 1,97 | +22% | 0,03 |
> | 692 | MACD + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+255% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,2 | 1,54 → 1,74 | +25% | 0,13 |
> | 693 | Donchian + GPS médias + Pôr do sol + Pullback + Tendência | **+287% · −49,1%** | +56% · −10,0% | +34% | −4,8% | 4,4 | 1,93 → 1,37 | +19% | 0,09 |
> | 694 | IFR | **+68% · −11,2%** | +68% · −11,2% | +43% | −7,5% | 4,0 | 1,40 → 1,74 | +28% | — |
> | 695 | Donchian + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+365% · −44,6%** | +61% · −9,5% | +36% | −6,9% | 3,4 | 1,52 → 1,67 | +27% | 0,32 |
> | 696 | Donchian + GPS médias + Quinta + Pullback + Tendência ⚠️ | **+284% · −50,6%** | +56% · −10,6% | +34% | −4,6% | 4,6 | 1,99 → 1,35 | +18% | 0,09 |
> | 697 | Donchian + BB explosão + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+277% · −44,2%** | +53% · −9,1% | +31% | −5,9% | 3,0 | 1,63 → 1,64 | +18% | 0,13 |
> | 698 | ADX + Donchian + GPS médias + Pullback | **+252% · −51,6%** | +66% · −13,8% | +36% | −5,6% | 4,2 | 1,61 → 1,48 | +22% | 0,17 |
> | 699 | 1ª vela 80 + Pullback ⚠️ | **+72% · −17,9%** | +41% · −8,7% | +29% | −4,3% | 3,9 | 1,49 → 1,59 | +24% | −0,31 |
> | 700 | ADX + GPS médias + MACD + Pullback + Bollinger | **+289% · −44,2%** | +55% · −8,9% | +32% | −5,6% | 3,4 | 1,52 → 1,65 | +26% | 0,18 |
> | 701 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+159% · −31,1%** | +43% · −7,5% | +28% | −4,7% | 3,2 | 1,76 → 1,53 | +23% | −0,07 |
> | 702 | Donchian + GPS médias + Pullback + Bollinger | **+263% · −36,6%** | +61% · −8,3% | +33% | −5,7% | 3,5 | 1,95 → 1,44 | +19% | 0,13 |
> | 703 | ADX + GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+233% · −43,1%** | +50% · −8,2% | +30% | −4,8% | 3,7 | 1,51 → 1,59 | +24% | 0,10 |
> | 704 | ADX + Donchian + Rompe 200 + Bollinger + Tendência | **+343% · −54,8%** | +62% · −11,4% | +35% | −7,0% | 3,1 | 1,61 → 1,65 | +22% | 0,25 |
> | 705 | Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+94% · −27,3%** | +30% · −6,6% | +23% | −3,2% | 3,2 | 1,64 → 1,57 | +20% | −0,02 |
> | 706 | ADX + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+299% · −41,6%** | +53% · −7,9% | +32% | −4,7% | 4,0 | 1,30 → 2,08 | +24% | 0,21 |
> | 707 | ADX + GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+287% · −46,0%** | +57% · −8,8% | +34% | −4,6% | 4,5 | 1,33 → 1,83 | +27% | 0,14 |
> | 708 | ADX + Donchian + GPS médias + IFR | **+292% · −53,4%** | +76% · −14,5% | +40% | −5,9% | 4,7 | 1,43 → 1,60 | +27% | 0,38 |
> | 709 | IFR + MACD + Pôr do sol + Bollinger + Tendência | **+290% · −40,0%** | +51% · −8,0% | +33% | −6,8% | 3,0 | 1,61 → 1,74 | +27% | 0,23 |
> | 710 | ADX + Donchian + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+314% · −38,5%** | +57% · −7,1% | +31% | −4,4% | 4,2 | 1,33 → 1,87 | +24% | 0,18 |
> | 711 | ADX + Donchian + Pôr do sol + Bollinger | **+242% · −37,3%** | +58% · −8,4% | +31% | −3,8% | 4,8 | 1,31 → 1,86 | +19% | 0,08 |
> | 712 | BB explosão + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+151% · −39,9%** | +36% · −7,5% | +26% | −3,5% | 3,7 | 1,84 → 1,45 | +14% | 0,06 |
> | 713 | GPS médias + IFR + MACD + Pullback + Bollinger | **+306% · −37,5%** | +54% · −7,6% | +33% | −7,0% | 2,9 | 1,79 → 1,65 | +25% | 0,17 |
> | 714 | Donchian + BB explosão + IFR + Pullback | **+214% · −49,9%** | +57% · −13,6% | +34% | −5,5% | 3,9 | 1,64 → 1,48 | +15% | 0,23 |
> | 715 | ADX + BB explosão + GPS médias + IFR + Pullback | **+249% · −63,2%** | +58% · −15,0% | +34% | −5,1% | 4,2 | 1,50 → 1,51 | +21% | 0,23 |
> | 716 | Donchian + 1ª vela 80 + Bollinger ⚠️ | **+204% · −25,4%** | +63% · −7,8% | +34% | −6,7% | 3,1 | 1,50 → 1,85 | +26% | 0,18 |
> | 717 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+233% · −32,5%** | +45% · −5,3% | +30% | −5,5% | 3,1 | 1,56 → 1,71 | +23% | 0,02 |
> | 718 | ADX + GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+238% · −50,0%** | +51% · −10,0% | +32% | −5,4% | 3,5 | 1,60 → 1,55 | +24% | 0,09 |
> | 719 | ADX + GPS médias + IFR + Pôr do sol + Rompe 200 | **+234% · −43,6%** | +50% · −8,8% | +30% | −4,2% | 4,2 | 1,43 → 1,63 | +24% | 0,13 |
> | 720 | GPS médias + IFR + Pullback + Rompe 200 | **+184% · −31,6%** | +48% · −6,8% | +31% | −4,8% | 3,7 | 2,00 → 1,40 | +19% | 0,16 |

> [!example]- Combinações 721 a 750 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 721 | Donchian + GPS médias + IFR + Bollinger | **+314% · −39,8%** | +70% · −11,1% | +37% | −7,7% | 3,1 | 1,71 → 1,58 | +24% | 0,35 |
> | 722 | IFR + MACD + Pullback + Tendência | **+228% · −35,3%** | +54% · −8,6% | +37% | −8,1% | 3,1 | 1,78 → 1,59 | +25% | 0,19 |
> | 723 | ADX + Donchian + IFR + 1ª vela 80 ⚠️ | **+304% · −38,4%** | +70% · −10,1% | +39% | −5,4% | 5,0 | 1,28 → 1,92 | +25% | 0,23 |
> | 724 | ADX + MACD + Quinta + Pullback + Tendência ⚠️ | **+236% · −48,8%** | +48% · −9,4% | +32% | −6,3% | 3,1 | 1,61 → 1,65 | +24% | 0,08 |
> | 725 | 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+92% · −28,0%** | +30% · −6,7% | +23% | −3,2% | 3,2 | 1,73 → 1,54 | +19% | −0,06 |
> | 726 | MACD + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+164% · −30,1%** | +37% · −5,6% | +28% | −4,5% | 3,3 | 1,85 → 1,50 | +21% | 0,03 |
> | 727 | GPS médias + IFR + Pôr do sol + Rompe 200 + Bollinger | **+238% · −33,8%** | +46% · −6,7% | +28% | −5,1% | 2,9 | 1,83 → 1,61 | +22% | 0,13 |
> | 728 | VWAP + IFR + Pullback + Bollinger + Tendência | **+279% · −38,5%** | +51% · −7,4% | +33% | −6,2% | 3,3 | 1,79 → 1,52 | +19% | 0,19 |
> | 729 | GPS médias + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+284% · −44,9%** | +54% · −9,3% | +35% | −6,4% | 3,5 | 1,70 → 1,51 | +26% | 0,12 |
> | 730 | Pôr do sol + Pullback + Tendência | **+111% · −22,5%** | +41% · −7,0% | +30% | −4,5% | 3,8 | 2,08 → 1,37 | +18% | −0,02 |
> | 731 | ADX + IFR + MACD + Pullback | **+219% · −36,0%** | +55% · −8,3% | +35% | −5,9% | 3,7 | 1,38 → 1,83 | +22% | 0,10 |
> | 732 | BB explosão + IFR + Pullback | **+128% · −38,7%** | +48% · −13,2% | +32% | −5,2% | 3,7 | 1,66 → 1,49 | +15% | 0,07 |
> | 733 | GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+225% · −43,3%** | +46% · −8,9% | +30% | −4,5% | 3,9 | 1,69 → 1,46 | +23% | 0,11 |
> | 734 | GPS médias + Pullback + Rompe 200 + Bollinger + Tendência | **+268% · −40,7%** | +50% · −8,1% | +31% | −4,8% | 3,7 | 2,11 → 1,37 | +18% | 0,16 |
> | 735 | Donchian + BB explosão + Quinta + Pullback + Bollinger ⚠️ | **+219% · −46,0%** | +46% · −8,6% | +27% | −4,0% | 3,7 | 1,78 → 1,45 | +14% | 0,07 |
> | 736 | ADX + IFR + Pôr do sol + Rompe 200 + Tendência | **+258% · −43,9%** | +51% · −8,9% | +33% | −6,7% | 3,0 | 1,57 → 1,75 | +24% | 0,15 |
> | 737 | ADX + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+291% · −47,8%** | +55% · −8,7% | +36% | −6,9% | 3,3 | 1,47 → 1,76 | +27% | 0,10 |
> | 738 | ADX + Pôr do sol + Bollinger + Tendência | **+230% · −42,0%** | +55% · −9,5% | +32% | −6,2% | 3,1 | 1,49 → 1,82 | +24% | 0,17 |
> | 739 | IFR + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+274% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 3,3 | 1,48 → 1,76 | +29% | 0,19 |
> | 740 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+176% · −43,9%** | +40% · −8,2% | +28% | −4,0% | 3,9 | 1,50 → 1,55 | +20% | 0,01 |
> | 741 | ADX + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+243% · −43,1%** | +48% · −8,3% | +29% | −5,8% | 2,9 | 1,64 → 1,71 | +22% | 0,14 |
> | 742 | ADX + Donchian + MACD + Pullback + Tendência | **+324% · −60,7%** | +62% · −13,5% | +38% | −7,5% | 3,3 | 1,56 → 1,60 | +25% | 0,22 |
> | 743 | GPS médias + MACD + Pullback + Bollinger + Tendência | **+304% · −41,8%** | +55% · −7,6% | +34% | −6,1% | 3,5 | 1,84 → 1,47 | +23% | 0,20 |
> | 744 | Donchian + Pullback + Tendência | **+194% · −42,0%** | +64% · −13,9% | +39% | −6,5% | 4,0 | 1,94 → 1,38 | +17% | 0,21 |
> | 745 | IFR + MACD + Pullback + Rompe 200 | **+149% · −23,7%** | +40% · −5,2% | +29% | −5,1% | 3,2 | 1,67 → 1,56 | +22% | 0,10 |
> | 746 | GPS médias + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+235% · −33,8%** | +46% · −6,7% | +28% | −5,1% | 2,9 | 1,91 → 1,57 | +21% | 0,14 |
> | 747 | ADX + Donchian + 1ª vela 80 + Tendência ⚠️ | **+301% · −53,7%** | +71% · −14,2% | +41% | −7,4% | 3,8 | 1,41 → 1,73 | +28% | 0,24 |
> | 748 | Donchian + BB explosão + IFR + Quinta + Bollinger ⚠️ | **+268% · −44,2%** | +53% · −8,9% | +31% | −5,5% | 3,3 | 1,55 → 1,61 | +18% | 0,18 |
> | 749 | IFR + Quinta + Pullback + Tendência + Onda ⚠️ | **+241% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 3,3 | 1,51 → 1,67 | +28% | 0,04 |
> | 750 | BB explosão + 1ª vela 80 + Pullback + Tendência ⚠️ | **+185% · −49,7%** | +50% · −13,0% | +34% | −5,5% | 3,8 | 1,66 → 1,48 | +18% | 0,06 |

> [!example]- Combinações 751 a 780 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 751 | ADX + Quinta + Bollinger + Tendência ⚠️ | **+227% · −43,2%** | +55% · −9,9% | +33% | −6,8% | 2,9 | 1,57 → 1,79 | +25% | 0,18 |
> | 752 | MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+83% · −14,4%** | +28% · −3,0% | +23% | −3,2% | 3,1 | 1,71 → 1,56 | +18% | −0,05 |
> | 753 | GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+156% · −33,3%** | +43% · −8,2% | +28% | −4,7% | 3,2 | 1,83 → 1,49 | +22% | −0,12 |
> | 754 | GPS médias + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+222% · −45,0%** | +46% · −9,5% | +30% | −4,5% | 3,9 | 1,75 → 1,44 | +22% | 0,06 |
> | 755 | GPS médias + IFR + MACD + Bollinger + Tendência | **+357% · −44,5%** | +62% · −9,2% | +37% | −7,6% | 3,2 | 1,64 → 1,57 | +27% | 0,38 |
> | 756 | GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+277% · −37,6%** | +61% · −9,8% | +35% | −8,0% | 2,8 | 1,63 → 1,79 | +29% | 0,27 |
> | 757 | Donchian + Pullback | **+112% · −27,5%** | +58% · −12,6% | +34% | −4,7% | 4,5 | 1,91 → 1,34 | +14% | 0,00 |
> | 758 | ADX + Donchian + GPS médias + Pôr do sol + Quinta ⚠️ | **+241% · −46,7%** | +53% · −9,0% | +30% | −3,7% | 4,6 | 1,45 → 1,53 | +23% | 0,05 |
> | 759 | BB explosão + IFR + Pullback + Tendência | **+209% · −52,1%** | +54% · −14,1% | +36% | −6,9% | 3,4 | 1,80 → 1,48 | +16% | 0,20 |
> | 760 | ADX + GPS médias + IFR + Rompe 200 + Tendência | **+309% · −57,5%** | +62% · −12,8% | +37% | −7,6% | 3,2 | 1,61 → 1,57 | +25% | 0,31 |
> | 761 | Donchian + IFR + Rompe 200 | **+168% · −28,8%** | +57% · −9,7% | +34% | −5,9% | 3,6 | 1,62 → 1,50 | +19% | 0,34 |
> | 762 | GPS médias + Pôr do sol + Pullback + Tendência | **+188% · −38,0%** | +49% · −9,0% | +32% | −4,3% | 4,4 | 2,03 → 1,33 | +19% | 0,00 |
> | 763 | Donchian + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+222% · −44,9%** | +45% · −8,7% | +30% | −4,4% | 3,9 | 2,08 → 1,35 | +16% | 0,09 |
> | 764 | ADX + Pôr do sol + Pullback + Rompe 200 + Tendência | **+205% · −42,2%** | +44% · −7,3% | +29% | −5,6% | 3,0 | 1,77 → 1,58 | +20% | 0,04 |
> | 765 | MACD + Pullback + Bollinger | **+119% · −16,1%** | +42% · −4,5% | +28% | −5,4% | 2,8 | 1,70 → 1,67 | +23% | 0,05 |
> | 766 | Donchian + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+220% · −31,5%** | +52% · −7,6% | +29% | −5,7% | 2,9 | 1,58 → 1,75 | +22% | 0,17 |
> | 767 | Donchian + GPS médias + Bollinger + Tendência | **+311% · −48,9%** | +71% · −11,9% | +38% | −6,3% | 4,1 | 1,77 → 1,41 | +21% | 0,37 |
> | 768 | Donchian + IFR + MACD + Quinta + Tendência ⚠️ | **+304% · −42,1%** | +57% · −9,0% | +36% | −7,2% | 3,3 | 1,59 → 1,56 | +25% | 0,26 |
> | 769 | ADX + Pullback + Rompe 200 + Bollinger | **+170% · −34,6%** | +45% · −7,8% | +27% | −4,8% | 3,0 | 1,58 → 1,69 | +20% | 0,10 |
> | 770 | GPS médias + IFR + Pôr do sol + Rompe 200 + Tendência | **+251% · −41,2%** | +50% · −7,4% | +32% | −5,6% | 3,5 | 1,84 → 1,45 | +22% | 0,18 |
> | 771 | Donchian + MACD + Pôr do sol + Pullback | **+166% · −30,0%** | +44% · −7,7% | +29% | −4,5% | 3,6 | 1,60 → 1,50 | +21% | 0,01 |
> | 772 | Donchian + IFR + Pullback + Tendência + Onda | **+333% · −43,0%** | +61% · −8,7% | +38% | −7,4% | 3,5 | 1,49 → 1,62 | +28% | 0,24 |
> | 773 | IFR + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+301% · −37,8%** | +54% · −7,2% | +37% | −6,8% | 3,5 | 1,41 → 1,79 | +31% | 0,11 |
> | 774 | Donchian + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+290% · −49,3%** | +70% · −13,6% | +40% | −7,1% | 3,9 | 1,64 → 1,46 | +25% | 0,31 |
> | 775 | ADX + Quinta + Pullback + Tendência ⚠️ | **+189% · −44,7%** | +49% · −10,8% | +33% | −7,1% | 2,8 | 1,80 → 1,63 | +21% | 0,06 |
> | 776 | ADX + Donchian + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+318% · −53,2%** | +61% · −10,6% | +36% | −6,7% | 3,4 | 1,47 → 1,68 | +25% | 0,20 |
> | 777 | GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+205% · −32,2%** | +51% · −8,0% | +32% | −6,8% | 2,9 | 1,60 → 1,68 | +27% | 0,02 |
> | 778 | ADX + GPS médias + IFR + Quinta ⚠️ | **+217% · −43,8%** | +58% · −11,5% | +34% | −5,4% | 3,9 | 1,42 → 1,65 | +27% | 0,16 |
> | 779 | IFR + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+215% · −34,9%** | +44% · −6,5% | +31% | −6,0% | 3,1 | 1,59 → 1,65 | +26% | 0,14 |
> | 780 | Donchian + MACD + Quinta + Pullback ⚠️ | **+164% · −30,0%** | +44% · −7,7% | +29% | −4,5% | 3,6 | 1,69 → 1,47 | +20% | 0,01 |

> [!example]- Combinações 781 a 810 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 781 | Donchian + BB explosão + Pullback + Bollinger + Tendência | **+294% · −62,2%** | +57% · −14,4% | +34% | −5,5% | 3,8 | 1,78 → 1,43 | +15% | 0,26 |
> | 782 | ADX + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+224% · −33,9%** | +46% · −5,9% | +30% | −3,2% | 5,2 | 1,21 → 2,13 | +19% | 0,04 |
> | 783 | Donchian + MACD + Quinta + Pullback + Tendência ⚠️ | **+254% · −45,4%** | +50% · −9,8% | +33% | −5,7% | 3,6 | 1,79 → 1,45 | +21% | 0,11 |
> | 784 | ADX + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+219% · −42,9%** | +57% · −10,7% | +34% | −5,7% | 3,7 | 1,45 → 1,64 | +27% | 0,07 |
> | 785 | ADX + BB explosão + IFR + Pullback + Rompe 200 | **+212% · −53,0%** | +48% · −11,4% | +30% | −4,9% | 3,6 | 1,48 → 1,61 | +18% | 0,15 |
> | 786 | GPS médias + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+248% · −42,4%** | +50% · −7,8% | +32% | −5,5% | 3,5 | 1,90 → 1,43 | +21% | 0,17 |
> | 787 | Donchian + Pôr do sol + Pullback + Rompe 200 + Tendência | **+224% · −41,8%** | +46% · −8,5% | +30% | −4,4% | 3,8 | 2,01 → 1,37 | +17% | 0,09 |
> | 788 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+172% · −33,3%** | +39% · −5,6% | +26% | −3,6% | 3,8 | 1,36 → 1,83 | +20% | −0,00 |
> | 789 | ADX + GPS médias + IFR + Pôr do sol | **+220% · −42,4%** | +58% · −10,9% | +34% | −4,5% | 4,7 | 1,36 → 1,68 | +26% | 0,14 |
> | 790 | ADX + Donchian + GPS médias + Rompe 200 + Bollinger | **+309% · −49,5%** | +61% · −10,0% | +32% | −5,1% | 3,8 | 1,49 → 1,53 | +22% | 0,25 |
> | 791 | ADX + IFR + MACD + Pullback + Rompe 200 | **+234% · −38,8%** | +47% · −7,1% | +31% | −5,6% | 3,3 | 1,45 → 1,76 | +23% | 0,11 |
> | 792 | ADX + 1ª vela 80 + Quinta + Pullback ⚠️ | **+155% · −31,6%** | +43% · −6,8% | +29% | −4,1% | 3,8 | 1,33 → 1,87 | +19% | −0,07 |
> | 793 | Donchian + IFR + MACD + Pôr do sol + Bollinger | **+304% · −33,0%** | +53% · −7,1% | +32% | −5,9% | 3,2 | 1,46 → 1,77 | +24% | 0,19 |
> | 794 | ADX + Donchian + Pôr do sol + Tendência | **+251% · −53,3%** | +63% · −14,2% | +37% | −6,6% | 3,6 | 1,47 → 1,63 | +24% | 0,16 |
> | 795 | GPS médias + IFR + Tendência | **+219% · −41,7%** | +72% · −14,1% | +43% | −8,4% | 3,6 | 1,77 → 1,45 | +25% | 0,43 |
> | 796 | ADX + GPS médias + Pôr do sol + Pullback | **+176% · −40,6%** | +49% · −10,3% | +30% | −4,6% | 3,6 | 1,57 → 1,50 | +23% | −0,02 |
> | 797 | GPS médias + IFR + MACD + Pôr do sol + Pullback | **+232% · −32,1%** | +47% · −6,0% | +31% | −6,0% | 3,0 | 1,72 → 1,57 | +24% | 0,03 |
> | 798 | ADX + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+158% · −33,4%** | +37% · −5,5% | +26% | −3,6% | 3,6 | 1,38 → 1,79 | +17% | −0,01 |
> | 799 | GPS médias + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+235% · −36,8%** | +45% · −7,2% | +28% | −5,4% | 2,8 | 1,89 → 1,58 | +21% | 0,11 |
> | 800 | GPS médias + Quinta + Pullback + Tendência ⚠️ | **+185% · −39,9%** | +49% · −9,7% | +32% | −4,1% | 4,7 | 2,10 → 1,29 | +18% | 0,00 |
> | 801 | IFR + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+288% · −28,7%** | +50% · −4,8% | +32% | −5,0% | 3,9 | 1,29 → 2,03 | +26% | 0,09 |
> | 802 | BB explosão + IFR + 1ª vela 80 + Tendência ⚠️ | **+234% · −47,9%** | +59% · −12,0% | +38% | −7,5% | 3,4 | 1,49 → 1,64 | +23% | 0,27 |
> | 803 | MACD + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+258% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,2 | 1,47 → 1,77 | +24% | 0,19 |
> | 804 | Donchian + MACD + Pôr do sol + Pullback + Tendência | **+256% · −45,2%** | +50% · −9,7% | +33% | −5,7% | 3,5 | 1,73 → 1,47 | +22% | 0,13 |
> | 805 | Donchian + IFR + Pôr do sol + Pullback + Onda | **+256% · −33,5%** | +49% · −6,4% | +32% | −4,3% | 4,4 | 1,35 → 1,71 | +24% | 0,05 |
> | 806 | ADX + Donchian + GPS médias + Pullback + Rompe 200 | **+266% · −53,4%** | +57% · −11,3% | +32% | −4,7% | 4,1 | 1,65 → 1,43 | +20% | 0,16 |
> | 807 | GPS médias + IFR + Bollinger | **+204% · −31,6%** | +65% · −10,9% | +35% | −7,9% | 2,9 | 1,73 → 1,61 | +26% | 0,34 |
> | 808 | IFR + Tendência | **+144% · −27,0%** | +71% · −13,5% | +46% | −11,3% | 3,0 | 1,74 → 1,58 | +26% | 0,46 |
> | 809 | Donchian + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+234% · −44,8%** | +57% · −12,1% | +35% | −6,6% | 3,4 | 1,65 → 1,51 | +22% | 0,23 |
> | 810 | Donchian + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+280% · −43,7%** | +53% · −9,3% | +34% | −6,2% | 3,5 | 1,50 → 1,59 | +26% | 0,14 |

> [!example]- Combinações 811 a 840 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 811 | GPS médias + IFR + MACD + Quinta + Pullback ⚠️ | **+230% · −32,6%** | +46% · −6,1% | +31% | −6,0% | 3,0 | 1,79 → 1,54 | +23% | 0,03 |
> | 812 | Donchian + GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+256% · −46,2%** | +53% · −8,8% | +32% | −4,0% | 4,8 | 1,80 → 1,37 | +20% | 0,08 |
> | 813 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+209% · −44,1%** | +46% · −9,3% | +29% | −4,9% | 3,3 | 1,55 → 1,55 | +18% | 0,01 |
> | 814 | Donchian + 1ª vela 80 + Quinta ⚠️ | **+143% · −30,4%** | +50% · −8,8% | +31% | −5,2% | 3,4 | 1,44 → 1,69 | +24% | −0,14 |
> | 815 | ADX + Donchian + MACD + 1ª vela 80 + Pullback ⚠️ | **+302% · −43,9%** | +57% · −7,8% | +34% | −5,7% | 3,8 | 1,36 → 1,79 | +23% | 0,10 |
> | 816 | ADX + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+283% · −43,8%** | +63% · −11,0% | +37% | −7,3% | 3,3 | 1,39 → 1,90 | +28% | 0,26 |
> | 817 | ADX + Donchian + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+368% · −54,4%** | +68% · −12,0% | +35% | −6,2% | 3,7 | 1,40 → 1,72 | +28% | 0,27 |
> | 818 | GPS médias + IFR + Pullback + Tendência + Onda | **+301% · −46,7%** | +58% · −9,1% | +37% | −7,0% | 3,5 | 1,52 → 1,53 | +29% | 0,19 |
> | 819 | ADX + Donchian + IFR + Rompe 200 | **+247% · −40,9%** | +62% · −9,9% | +35% | −5,7% | 3,9 | 1,38 → 1,71 | +24% | 0,26 |
> | 820 | ADX + IFR + 1ª vela 80 + Bollinger ⚠️ | **+279% · −39,0%** | +62% · −9,3% | +35% | −4,9% | 4,6 | 1,20 → 2,15 | +23% | 0,26 |
> | 821 | ADX + Donchian + GPS médias + Bollinger | **+293% · −48,9%** | +72% · −12,8% | +36% | −5,6% | 4,2 | 1,43 → 1,57 | +25% | 0,33 |
> | 822 | MACD + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+200% · −32,2%** | +41% · −5,7% | +28% | −5,2% | 2,9 | 1,62 → 1,64 | +24% | 0,12 |
> | 823 | ADX + MACD + Pôr do sol + Pullback + Tendência | **+239% · −47,6%** | +48% · −8,8% | +32% | −6,4% | 3,1 | 1,54 → 1,67 | +24% | 0,07 |
> | 824 | GPS médias + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+295% · −39,6%** | +52% · −8,2% | +31% | −7,0% | 2,6 | 1,68 → 1,73 | +25% | 0,24 |
> | 825 | Donchian + BB explosão + 1ª vela 80 + Quinta + Tendência ⚠️ | **+247% · −58,2%** | +53% · −12,8% | +33% | −5,2% | 4,0 | 1,52 → 1,48 | +19% | 0,13 |
> | 826 | Donchian + BB explosão + 1ª vela 80 + Quinta + Pullback ⚠️ | **+206% · −45,8%** | +45% · −9,7% | +29% | −4,9% | 3,3 | 1,61 → 1,53 | +17% | −0,02 |
> | 827 | ADX + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+246% · −42,1%** | +48% · −8,2% | +29% | −5,8% | 2,8 | 1,57 → 1,73 | +23% | 0,12 |
> | 828 | GPS médias + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+335% · −41,9%** | +61% · −8,3% | +39% | −8,1% | 3,2 | 1,54 → 1,60 | +30% | 0,32 |
> | 829 | MACD + Pullback + Bollinger + Tendência | **+212% · −32,6%** | +50% · −7,9% | +33% | −7,0% | 2,9 | 1,83 → 1,56 | +23% | 0,17 |
> | 830 | ADX + Donchian + Quinta + Rompe 200 + Tendência ⚠️ | **+263% · −54,2%** | +54% · −11,3% | +33% | −6,2% | 3,2 | 1,59 → 1,55 | +21% | 0,14 |
> | 831 | Donchian + MACD + Quinta + Bollinger + Tendência ⚠️ | **+298% · −43,4%** | +54% · −9,2% | +33% | −6,3% | 3,2 | 1,62 → 1,55 | +23% | 0,22 |
> | 832 | Donchian + IFR + MACD + Pôr do sol + Tendência | **+307% · −42,0%** | +57% · −9,1% | +36% | −7,2% | 3,3 | 1,54 → 1,58 | +26% | 0,29 |
> | 833 | Donchian + MACD + Pullback + Rompe 200 + Bollinger | **+245% · −30,0%** | +46% · −5,7% | +28% | −5,2% | 3,0 | 1,76 → 1,53 | +20% | 0,14 |
> | 834 | ADX + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+222% · −37,2%** | +46% · −6,5% | +30% | −4,1% | 4,1 | 1,26 → 1,98 | +22% | 0,07 |
> | 835 | ADX + BB explosão + IFR + Pullback | **+199% · −53,9%** | +55% · −14,1% | +34% | −5,7% | 3,6 | 1,41 → 1,68 | +20% | 0,15 |
> | 836 | ADX + Pullback + Bollinger | **+156% · −31,7%** | +54% · −9,9% | +30% | −5,8% | 3,0 | 1,49 → 1,81 | +19% | 0,14 |
> | 837 | ADX + BB explosão + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+253% · −50,5%** | +51% · −9,7% | +30% | −4,6% | 3,8 | 1,34 → 1,81 | +22% | 0,13 |
> | 838 | 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+143% · −32,8%** | +40% · −8,1% | +29% | −5,1% | 3,1 | 1,67 → 1,54 | +22% | −0,00 |
> | 839 | IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+169% · −30,9%** | +44% · −7,2% | +31% | −6,4% | 2,9 | 1,93 → 1,53 | +20% | 0,13 |
> | 840 | Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+145% · −32,1%** | +40% · −7,8% | +29% | −5,1% | 3,1 | 1,60 → 1,57 | +23% | 0,08 |

> [!example]- Combinações 841 a 870 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 841 | VWAP + IFR + Quinta + Pullback + Bollinger ⚠️ | **+191% · −26,8%** | +39% · −4,8% | +27% | −5,0% | 2,7 | 1,80 → 1,60 | +18% | 0,04 |
> | 842 | BB explosão + IFR + Bollinger + Tendência | **+247% · −50,2%** | +60% · −13,0% | +36% | −7,7% | 3,0 | 1,62 → 1,59 | +20% | 0,38 |
> | 843 | IFR + Pôr do sol + Pullback + Tendência + Onda | **+243% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 3,3 | 1,46 → 1,69 | +27% | 0,08 |
> | 844 | VWAP + IFR + Pôr do sol + Pullback + Bollinger | **+194% · −26,9%** | +40% · −4,8% | +26% | −5,0% | 2,7 | 1,72 → 1,63 | +17% | 0,05 |
> | 845 | IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+128% · −17,8%** | +45% · −5,1% | +31% | −5,3% | 3,4 | 1,38 → 1,83 | +26% | 0,19 |
> | 846 | IFR + Pôr do sol + Rompe 200 + Tendência | **+171% · −31,0%** | +45% · −7,3% | +31% | −6,4% | 2,9 | 1,85 → 1,56 | +21% | 0,15 |
> | 847 | Pôr do sol + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+133% · −29,5%** | +32% · −5,4% | +25% | −3,2% | 3,8 | 2,23 → 1,31 | +16% | 0,03 |
> | 848 | GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+208% · −32,2%** | +52% · −8,0% | +32% | −6,7% | 2,9 | 1,54 → 1,72 | +28% | 0,10 |
> | 849 | Donchian + BB explosão + IFR + Pôr do sol + Bollinger | **+271% · −42,5%** | +53% · −8,9% | +31% | −5,5% | 3,3 | 1,49 → 1,64 | +19% | 0,17 |
> | 850 | ADX + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+277% · −42,6%** | +51% · −8,2% | +31% | −5,3% | 3,4 | 1,33 → 1,97 | +22% | 0,12 |
> | 851 | Quinta + Pullback + Tendência ⚠️ | **+109% · −23,8%** | +41% · −7,0% | +30% | −4,9% | 3,6 | 2,19 → 1,33 | +17% | −0,02 |
> | 852 | ADX + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+268% · −51,6%** | +68% · −12,9% | +40% | −7,1% | 3,8 | 1,42 → 1,62 | +30% | 0,25 |
> | 853 | ADX + GPS médias + MACD + Pullback + Tendência | **+292% · −59,0%** | +59% · −12,6% | +37% | −7,2% | 3,3 | 1,59 → 1,52 | +26% | 0,19 |
> | 854 | GPS médias + 1ª vela 80 + Tendência ⚠️ | **+194% · −39,7%** | +65% · −14,0% | +40% | −6,8% | 3,9 | 1,61 → 1,44 | +28% | 0,21 |
> | 855 | Donchian + Pullback + Bollinger + Tendência + Onda | **+329% · −41,0%** | +58% · −7,8% | +35% | −6,5% | 3,4 | 1,49 → 1,60 | +26% | 0,20 |
> | 856 | Donchian + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+314% · −32,5%** | +56% · −6,5% | +35% | −5,6% | 4,0 | 1,31 → 1,81 | +27% | 0,11 |
> | 857 | Donchian + MACD + Pôr do sol + Bollinger + Tendência | **+301% · −43,3%** | +54% · −9,2% | +33% | −6,4% | 3,1 | 1,56 → 1,57 | +24% | 0,23 |
> | 858 | ADX + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+302% · −46,3%** | +54% · −9,3% | +33% | −6,7% | 3,0 | 1,46 → 1,84 | +26% | 0,19 |
> | 859 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+239% · −42,2%** | +49% · −6,5% | +29% | −3,6% | 4,6 | 1,25 → 1,90 | +20% | 0,01 |
> | 860 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+250% · −56,9%** | +53% · −12,2% | +33% | −5,2% | 4,0 | 1,47 → 1,50 | +20% | 0,18 |
> | 861 | Donchian + GPS médias + IFR + Pôr do sol | **+242% · −36,1%** | +61% · −10,0% | +35% | −6,5% | 3,3 | 1,64 → 1,49 | +23% | 0,16 |
> | 862 | Donchian + BB explosão + IFR + Quinta + Tendência ⚠️ | **+266% · −60,3%** | +57% · −13,5% | +35% | −6,2% | 3,6 | 1,61 → 1,47 | +18% | 0,26 |
> | 863 | Pullback + Rompe 200 + Bollinger + Tendência | **+177% · −28,6%** | +45% · −6,4% | +29% | −5,4% | 3,0 | 2,19 → 1,43 | +17% | 0,11 |
> | 864 | Donchian + BB explosão + IFR + Pôr do sol + Tendência | **+269% · −59,0%** | +57% · −13,0% | +35% | −6,3% | 3,6 | 1,56 → 1,49 | +19% | 0,27 |
> | 865 | ADX + GPS médias + Pullback + Rompe 200 + Tendência | **+263% · −56,0%** | +55% · −12,3% | +34% | −6,1% | 3,4 | 1,78 → 1,44 | +21% | 0,16 |
> | 866 | ADX + Donchian + GPS médias + MACD + Pullback | **+294% · −54,9%** | +61% · −11,7% | +35% | −6,0% | 3,7 | 1,48 → 1,52 | +25% | 0,18 |
> | 867 | Donchian + GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+249% · −34,6%** | +49% · −7,2% | +28% | −4,8% | 3,1 | 1,80 → 1,49 | +20% | 0,03 |
> | 868 | ADX + GPS médias + Pôr do sol + Tendência | **+223% · −51,2%** | +59% · −13,5% | +35% | −6,3% | 3,6 | 1,50 → 1,51 | +26% | 0,14 |
> | 869 | Donchian + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+227% · −29,6%** | +46% · −6,1% | +30% | −5,1% | 3,4 | 1,44 → 1,67 | +22% | 0,10 |
> | 870 | ADX + GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+282% · −47,1%** | +57% · −9,2% | +34% | −5,5% | 3,8 | 1,36 → 1,73 | +28% | 0,24 |

> [!example]- Combinações 871 a 900 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 871 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+205% · −33,4%** | +42% · −6,2% | +26% | −5,0% | 2,6 | 1,65 → 1,71 | +20% | 0,03 |
> | 872 | GPS médias + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+287% · −38,2%** | +53% · −7,8% | +34% | −8,0% | 2,7 | 1,64 → 1,67 | +28% | 0,11 |
> | 873 | ADX + BB explosão + Pôr do sol + Pullback + Bollinger | **+204% · −51,9%** | +45% · −10,4% | +27% | −4,1% | 3,4 | 1,43 → 1,69 | +19% | 0,06 |
> | 874 | IFR + 1ª vela 80 ⚠️ | **+115% · −14,1%** | +59% · −6,5% | +38% | −6,4% | 3,9 | 1,26 → 1,97 | +28% | 0,09 |
> | 875 | GPS médias + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+220% · −34,4%** | +45% · −6,7% | +29% | −6,0% | 2,7 | 1,66 → 1,63 | +24% | 0,09 |
> | 876 | Bollinger | **+52% · −6,9%** | +52% · −6,9% | +26% | −3,6% | 3,5 | 1,37 → 1,77 | +18% | — |
> | 877 | Donchian + IFR + Rompe 200 + Tendência | **+259% · −40,7%** | +61% · −9,9% | +38% | −7,8% | 3,2 | 1,77 → 1,49 | +20% | 0,38 |
> | 878 | BB explosão + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+186% · −46,3%** | +41% · −8,8% | +27% | −4,2% | 3,4 | 1,67 → 1,49 | +17% | 0,09 |
> | 879 | ADX + Pullback + Tendência | **+175% · −46,6%** | +60% · −16,1% | +38% | −8,8% | 2,8 | 1,68 → 1,59 | +23% | 0,11 |
> | 880 | Donchian + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+246% · −42,9%** | +60% · −11,5% | +35% | −7,0% | 3,1 | 1,76 → 1,49 | +22% | 0,07 |
> | 881 | BB explosão + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+237% · −36,0%** | +46% · −7,2% | +29% | −5,7% | 2,9 | 1,47 → 1,88 | +22% | 0,08 |
> | 882 | ADX + IFR + Tendência | **+224% · −45,2%** | +73% · −14,8% | +44% | −10,1% | 3,1 | 1,46 → 1,76 | +30% | 0,37 |
> | 883 | ADX + BB explosão + Quinta + Pullback + Bollinger ⚠️ | **+201% · −53,1%** | +44% · −10,9% | +27% | −4,5% | 3,1 | 1,50 → 1,64 | +18% | 0,10 |
> | 884 | Donchian + GPS médias + IFR + Quinta ⚠️ | **+239% · −37,0%** | +60% · −10,0% | +35% | −6,5% | 3,3 | 1,70 → 1,47 | +22% | 0,15 |
> | 885 | BB explosão + GPS médias + IFR + Pullback + Tendência | **+266% · −62,7%** | +58% · −15,1% | +36% | −6,0% | 3,9 | 1,78 → 1,38 | +18% | 0,26 |
> | 886 | ADX + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+203% · −44,0%** | +44% · −7,9% | +29% | −6,0% | 2,8 | 1,84 → 1,55 | +19% | 0,06 |
> | 887 | Donchian + GPS médias + IFR + Rompe 200 + Tendência | **+326% · −54,8%** | +64% · −11,7% | +38% | −6,8% | 3,7 | 1,77 → 1,41 | +21% | 0,38 |
> | 888 | ADX + Donchian + 1ª vela 80 + Bollinger ⚠️ | **+295% · −38,3%** | +66% · −9,0% | +35% | −5,2% | 4,3 | 1,24 → 1,93 | +23% | 0,22 |
> | 889 | GPS médias + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+173% · −28,1%** | +39% · −5,2% | +26% | −4,1% | 3,2 | 1,83 → 1,46 | +20% | 0,06 |
> | 890 | ADX + Donchian + Pôr do sol + Rompe 200 + Tendência | **+265% · −52,7%** | +54% · −10,7% | +33% | −6,2% | 3,2 | 1,53 → 1,57 | +22% | 0,13 |
> | 891 | ADX + Donchian + Rompe 200 + Bollinger | **+239% · −37,2%** | +58% · −8,3% | +31% | −4,7% | 3,9 | 1,36 → 1,69 | +22% | 0,18 |
> | 892 | ADX + Donchian + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+263% · −60,4%** | +57% · −13,6% | +33% | −5,0% | 4,1 | 1,36 → 1,65 | +21% | 0,13 |
> | 893 | ADX + GPS médias + Rompe 200 + Bollinger + Tendência | **+307% · −53,0%** | +59% · −10,8% | +34% | −6,7% | 3,1 | 1,63 → 1,54 | +23% | 0,27 |
> | 894 | BB explosão + IFR + Quinta + Bollinger ⚠️ | **+169% · −30,9%** | +45% · −7,7% | +28% | −5,1% | 3,0 | 1,51 → 1,68 | +18% | 0,12 |
> | 895 | Donchian + GPS médias + IFR + Rompe 200 + Bollinger | **+331% · −41,8%** | +60% · −8,8% | +33% | −6,8% | 3,0 | 1,76 → 1,52 | +21% | 0,30 |
> | 896 | ADX + Donchian + GPS médias + Tendência | **+288% · −63,9%** | +77% · −18,6% | +42% | −7,6% | 3,8 | 1,52 → 1,47 | +25% | 0,39 |
> | 897 | ADX + VWAP + IFR + Pullback + Tendência | **+275% · −53,9%** | +55% · −10,9% | +36% | −7,3% | 3,1 | 1,53 → 1,58 | +22% | 0,18 |
> | 898 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+283% · −43,6%** | +53% · −9,3% | +34% | −6,2% | 3,5 | 1,45 → 1,60 | +27% | 0,21 |
> | 899 | ADX + BB explosão + IFR + Bollinger + Tendência | **+330% · −64,9%** | +63% · −15,1% | +37% | −7,7% | 3,1 | 1,46 → 1,73 | +23% | 0,37 |
> | 900 | ADX + GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+273% · −48,4%** | +53% · −9,9% | +30% | −4,7% | 3,7 | 1,34 → 1,77 | +23% | 0,14 |

> [!example]- Combinações 901 a 930 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 901 | IFR + Pullback + Rompe 200 + Bollinger + Onda | **+227% · −29,8%** | +43% · −5,1% | +29% | −4,9% | 3,3 | 1,40 → 1,77 | +25% | 0,12 |
> | 902 | ADX + GPS médias + MACD + Quinta + Pullback ⚠️ | **+217% · −43,5%** | +48% · −8,7% | +30% | −5,2% | 3,3 | 1,50 → 1,54 | +25% | 0,04 |
> | 903 | ADX + GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+225% · −41,1%** | +47% · −8,6% | +27% | −3,7% | 3,9 | 1,41 → 1,57 | +23% | 0,11 |
> | 904 | IFR + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+195% · −29,3%** | +40% · −5,0% | +27% | −5,0% | 2,8 | 1,53 → 1,74 | +23% | 0,13 |
> | 905 | Donchian + GPS médias + IFR + 1ª vela 80 ⚠️ | **+294% · −40,5%** | +69% · −10,8% | +39% | −9,0% | 2,9 | 1,57 → 1,61 | +27% | 0,31 |
> | 906 | GPS médias + Pullback + Bollinger | **+155% · −27,7%** | +53% · −8,5% | +30% | −5,1% | 3,3 | 2,07 → 1,37 | +19% | 0,07 |
> | 907 | ADX + Donchian + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+286% · −48,5%** | +60% · −9,8% | +34% | −5,3% | 3,9 | 1,38 → 1,63 | +26% | 0,09 |
> | 908 | VWAP + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+309% · −40,3%** | +54% · −8,0% | +34% | −7,1% | 3,1 | 1,49 → 1,68 | +25% | 0,28 |
> | 909 | ADX + GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+283% · −51,2%** | +58% · −10,1% | +35% | −6,6% | 3,4 | 1,48 → 1,58 | +26% | 0,21 |
> | 910 | ADX + VWAP + IFR + Quinta + Pullback ⚠️ | **+198% · −39,1%** | +44% · −7,0% | +29% | −4,5% | 3,6 | 1,41 → 1,63 | +16% | 0,04 |
> | 911 | ADX + IFR + Rompe 200 + Bollinger | **+223% · −37,3%** | +54% · −9,0% | +31% | −5,5% | 3,3 | 1,33 → 1,93 | +23% | 0,23 |
> | 912 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+223% · −34,4%** | +45% · −6,7% | +29% | −6,0% | 2,7 | 1,60 → 1,65 | +25% | 0,13 |
> | 913 | IFR + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+161% · −20,9%** | +36% · −4,0% | +27% | −3,6% | 3,9 | 1,30 → 1,81 | +21% | −0,03 |
> | 914 | BB explosão + GPS médias + IFR + Bollinger + Tendência | **+306% · −59,8%** | +62% · −13,5% | +36% | −6,7% | 3,5 | 1,64 → 1,46 | +20% | 0,40 |
> | 915 | ADX + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+175% · −32,8%** | +40% · −6,2% | +26% | −4,1% | 3,3 | 1,36 → 1,88 | +19% | 0,07 |
> | 916 | ADX + Donchian + IFR | **+232% · −40,8%** | +77% · −12,8% | +42% | −6,8% | 4,2 | 1,29 → 1,78 | +24% | 0,33 |
> | 917 | ADX + Donchian + BB explosão + Quinta + Pullback ⚠️ | **+214% · −61,4%** | +50% · −14,2% | +30% | −4,6% | 3,8 | 1,47 → 1,49 | +17% | 0,09 |
> | 918 | IFR + MACD + Quinta + Bollinger ⚠️ | **+180% · −25,6%** | +45% · −5,5% | +29% | −5,5% | 3,0 | 1,43 → 1,84 | +23% | 0,14 |
> | 919 | Donchian + GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+305% · −41,4%** | +55% · −8,5% | +31% | −6,8% | 2,7 | 1,68 → 1,62 | +24% | 0,08 |
> | 920 | ADX + GPS médias + Quinta + Pullback ⚠️ | **+173% · −42,1%** | +49% · −10,8% | +30% | −4,9% | 3,4 | 1,65 → 1,46 | +22% | 0,03 |
> | 921 | GPS médias + IFR + MACD + Quinta + Tendência ⚠️ | **+276% · −44,3%** | +54% · −8,2% | +35% | −6,8% | 3,3 | 1,63 → 1,49 | +26% | 0,21 |
> | 922 | GPS médias + IFR + MACD + Pôr do sol + Tendência | **+279% · −43,2%** | +55% · −7,8% | +35% | −6,9% | 3,3 | 1,58 → 1,51 | +27% | 0,23 |
> | 923 | GPS médias + IFR + Pullback + Bollinger + Onda | **+300% · −35,2%** | +54% · −7,0% | +33% | −6,2% | 3,2 | 1,45 → 1,67 | +29% | 0,15 |
> | 924 | BB explosão + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+248% · −48,2%** | +51% · −9,7% | +34% | −6,8% | 3,0 | 1,55 → 1,59 | +21% | 0,24 |
> | 925 | GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+115% · −22,8%** | +35% · −5,2% | +24% | −2,3% | 4,8 | 2,13 → 1,23 | +18% | −0,07 |
> | 926 | Donchian + BB explosão + IFR + Pullback + Rompe 200 | **+227% · −51,7%** | +49% · −11,2% | +31% | −4,9% | 3,7 | 1,69 → 1,42 | +14% | 0,22 |
> | 927 | ADX + Donchian + MACD + Pullback + Rompe 200 | **+245% · −44,4%** | +51% · −8,0% | +31% | −5,2% | 3,6 | 1,44 → 1,58 | +22% | 0,12 |
> | 928 | ADX + GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+222% · −41,2%** | +47% · −8,2% | +27% | −4,2% | 3,4 | 1,49 → 1,54 | +22% | 0,14 |
> | 929 | GPS médias + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+240% · −34,2%** | +47% · −6,1% | +29% | −4,7% | 3,4 | 1,90 → 1,40 | +20% | 0,12 |
> | 930 | ADX + GPS médias + Pôr do sol + Pullback + Rompe 200 | **+189% · −41,9%** | +43% · −8,3% | +27% | −3,9% | 3,6 | 1,63 → 1,43 | +20% | 0,02 |

> [!example]- Combinações 931 a 960 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 931 | Donchian + GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+305% · −53,8%** | +60% · −12,2% | +36% | −6,3% | 3,6 | 1,68 → 1,42 | +22% | 0,27 |
> | 932 | BB explosão + Pôr do sol + Pullback + Bollinger | **+125% · −30,1%** | +37% · −6,3% | +24% | −3,4% | 3,2 | 1,71 → 1,46 | +15% | −0,03 |
> | 933 | Donchian + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+156% · −34,3%** | +42% · −8,6% | +27% | −4,7% | 3,0 | 1,53 → 1,59 | +20% | −0,00 |
> | 934 | ADX + 1ª vela 80 + Quinta + Tendência ⚠️ | **+210% · −40,1%** | +54% · −9,5% | +34% | −6,3% | 3,4 | 1,35 → 1,80 | +26% | 0,03 |
> | 935 | ADX + Donchian + BB explosão + Pullback + Tendência | **+276% · −73,1%** | +62% · −19,6% | +36% | −6,9% | 3,4 | 1,56 → 1,48 | +18% | 0,27 |
> | 936 | IFR + MACD + Bollinger + Tendência | **+269% · −40,0%** | +59% · −10,3% | +37% | −8,9% | 2,8 | 1,57 → 1,68 | +28% | 0,40 |
> | 937 | ADX + IFR + Bollinger | **+207% · −34,5%** | +66% · −11,3% | +36% | −5,8% | 4,0 | 1,21 → 2,03 | +21% | 0,34 |
> | 938 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+309% · −42,4%** | +56% · −8,5% | +31% | −6,8% | 2,7 | 1,62 → 1,65 | +25% | 0,12 |
> | 939 | ADX + Donchian + IFR + MACD + Bollinger | **+378% · −45,4%** | +65% · −9,2% | +36% | −6,3% | 3,8 | 1,29 → 1,84 | +24% | 0,34 |
> | 940 | ADX + GPS médias + IFR + 1ª vela 80 ⚠️ | **+266% · −46,9%** | +66% · −11,9% | +38% | −6,1% | 4,1 | 1,29 → 1,77 | +30% | 0,28 |
> | 941 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+188% · −29,0%** | +40% · −5,0% | +29% | −5,0% | 3,3 | 1,44 → 1,67 | +24% | 0,07 |
> | 942 | ADX + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+225% · −36,1%** | +46% · −7,1% | +30% | −3,9% | 4,4 | 1,20 → 2,01 | +22% | 0,10 |
> | 943 | GPS médias + Pullback + Bollinger + Tendência + Onda | **+295% · −41,2%** | +55% · −7,5% | +34% | −6,2% | 3,4 | 1,50 → 1,49 | +27% | 0,17 |
> | 944 | Donchian + Quinta + Pullback + Bollinger + Onda ⚠️ | **+242% · −29,4%** | +46% · −5,4% | +29% | −4,4% | 3,6 | 1,38 → 1,68 | +23% | 0,01 |
> | 945 | ADX + BB explosão + IFR + Quinta + Bollinger ⚠️ | **+250% · −51,7%** | +51% · −9,8% | +30% | −4,4% | 3,9 | 1,28 → 1,81 | +22% | 0,19 |
> | 946 | ADX + BB explosão + Pôr do sol + Pullback + Tendência | **+214% · −63,8%** | +49% · −15,2% | +31% | −5,9% | 3,1 | 1,56 → 1,53 | +19% | 0,08 |
> | 947 | IFR + Pullback + Bollinger + Onda | **+211% · −25,9%** | +50% · −5,6% | +32% | −5,4% | 3,5 | 1,31 → 1,90 | +25% | 0,09 |
> | 948 | MACD + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+214% · −37,0%** | +43% · −7,2% | +31% | −6,3% | 2,9 | 1,68 → 1,54 | +23% | 0,09 |
> | 949 | Donchian + GPS médias + Pullback + Tendência | **+266% · −51,3%** | +66% · −14,0% | +39% | −6,3% | 4,1 | 1,91 → 1,32 | +18% | 0,23 |
> | 950 | BB explosão + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+153% · −48,4%** | +37% · −9,5% | +27% | −3,4% | 4,1 | 1,87 → 1,33 | +15% | 0,01 |
> | 951 | GPS médias + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+237% · −35,8%** | +47% · −6,7% | +29% | −4,7% | 3,5 | 1,97 → 1,37 | +19% | 0,13 |
> | 952 | IFR + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+210% · −22,7%** | +42% · −4,2% | +30% | −4,3% | 4,1 | 1,24 → 1,92 | +24% | −0,06 |
> | 953 | GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+163% · −33,4%** | +45% · −7,2% | +30% | −3,8% | 4,5 | 1,86 → 1,32 | +21% | 0,02 |
> | 954 | BB explosão + GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+287% · −57,7%** | +61% · −12,8% | +38% | −7,6% | 3,3 | 1,55 → 1,50 | +23% | 0,33 |
> | 955 | ADX + Donchian + MACD + Pullback | **+231% · −46,4%** | +59% · −10,9% | +35% | −5,9% | 3,7 | 1,37 → 1,64 | +22% | 0,13 |
> | 956 | BB explosão + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+221% · −47,7%** | +55% · −12,1% | +33% | −6,4% | 3,2 | 1,47 → 1,60 | +21% | 0,26 |
> | 957 | Donchian + Pôr do sol + Pullback + Rompe 200 | **+136% · −30,5%** | +39% · −7,3% | +25% | −3,2% | 3,9 | 1,98 → 1,30 | +15% | 0,01 |
> | 958 | Donchian + Pôr do sol + 1ª vela 80 ⚠️ | **+146% · −32,1%** | +51% · −9,4% | +30% | −5,0% | 3,5 | 1,36 → 1,73 | +23% | 0,02 |
> | 959 | VWAP + IFR + Quinta + Pullback + Tendência ⚠️ | **+206% · −36,8%** | +43% · −7,0% | +31% | −5,3% | 3,4 | 1,78 → 1,42 | +18% | 0,05 |
> | 960 | ADX + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+158% · −31,5%** | +44% · −6,4% | +29% | −4,1% | 3,8 | 1,26 → 1,91 | +18% | −0,04 |

> [!example]- Combinações 961 a 990 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 961 | Donchian + BB explosão + IFR + Pôr do sol + Quinta ⚠️ | **+204% · −43,1%** | +46% · −8,2% | +29% | −4,7% | 3,4 | 1,47 → 1,54 | +18% | 0,08 |
> | 962 | ADX + GPS médias + MACD + Pôr do sol + Pullback | **+220% · −42,1%** | +48% · −8,3% | +30% | −5,0% | 3,5 | 1,44 → 1,57 | +24% | 0,02 |
> | 963 | 1ª vela 80 + Pullback + Bollinger + Tendência + Onda ⚠️ | **+285% · −35,2%** | +51% · −6,5% | +33% | −6,2% | 3,3 | 1,37 → 1,78 | +27% | 0,12 |
> | 964 | Donchian + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+198% · −37,0%** | +42% · −7,1% | +28% | −4,3% | 3,5 | 1,85 → 1,38 | +18% | 0,08 |
> | 965 | GPS médias + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+184% · −27,9%** | +39% · −4,9% | +24% | −3,8% | 3,1 | 2,11 → 1,37 | +18% | 0,02 |
> | 966 | GPS médias + MACD + Pôr do sol + Pullback + Tendência | **+232% · −41,5%** | +48% · −7,7% | +32% | −5,3% | 3,6 | 1,78 → 1,39 | +23% | 0,06 |
> | 967 | GPS médias + Bollinger + Tendência | **+207% · −34,9%** | +67% · −11,1% | +37% | −6,9% | 3,5 | 1,82 → 1,39 | +23% | 0,34 |
> | 968 | ADX + Donchian + BB explosão + Pôr do sol + Pullback | **+217% · −60,3%** | +51% · −13,7% | +30% | −4,3% | 4,0 | 1,41 → 1,52 | +18% | 0,06 |
> | 969 | IFR + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+252% · −29,5%** | +46% · −5,4% | +30% | −6,1% | 2,8 | 1,40 → 1,98 | +23% | 0,12 |
> | 970 | VWAP + IFR + Quinta + Bollinger + Tendência ⚠️ | **+246% · −38,0%** | +47% · −7,3% | +31% | −6,0% | 3,0 | 1,61 → 1,53 | +21% | 0,16 |
> | 971 | IFR + MACD + Pullback + Rompe 200 + Tendência | **+243% · −38,7%** | +47% · −7,6% | +33% | −7,3% | 2,8 | 1,81 → 1,52 | +22% | 0,18 |
> | 972 | VWAP + IFR + Pôr do sol + Pullback + Tendência | **+209% · −34,9%** | +44% · −7,0% | +31% | −5,4% | 3,4 | 1,72 → 1,43 | +19% | 0,07 |
> | 973 | ADX + IFR + Rompe 200 + Tendência | **+239% · −44,2%** | +59% · −11,5% | +37% | −8,7% | 2,8 | 1,53 → 1,69 | +25% | 0,26 |
> | 974 | ADX + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+225% · −42,3%** | +47% · −7,9% | +31% | −5,9% | 3,1 | 1,43 → 1,74 | +25% | 0,05 |
> | 975 | VWAP + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+232% · −38,6%** | +47% · −7,4% | +33% | −6,1% | 3,2 | 1,47 → 1,59 | +23% | 0,07 |
> | 976 | ADX + Donchian + BB explosão + IFR + Bollinger | **+327% · −62,3%** | +65% · −13,6% | +35% | −5,8% | 3,9 | 1,31 → 1,72 | +22% | 0,36 |
> | 977 | ADX + VWAP + Donchian + IFR + Pullback | **+281% · −50,1%** | +57% · −9,9% | +34% | −6,1% | 3,6 | 1,42 → 1,58 | +19% | 0,17 |
> | 978 | ADX + GPS médias + Quinta + Bollinger ⚠️ | **+207% · −40,1%** | +54% · −10,1% | +30% | −4,6% | 3,7 | 1,40 → 1,59 | +25% | 0,18 |
> | 979 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+277% · −48,9%** | +54% · −10,1% | +30% | −4,5% | 3,9 | 1,28 → 1,80 | +23% | 0,16 |
> | 980 | BB explosão + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+183% · −32,2%** | +40% · −6,2% | +26% | −4,7% | 2,8 | 1,59 → 1,59 | +17% | 0,13 |
> | 981 | ADX + BB explosão + IFR + Quinta + Tendência ⚠️ | **+256% · −63,5%** | +55% · −15,0% | +35% | −6,9% | 3,2 | 1,44 → 1,65 | +22% | 0,21 |
> | 982 | GPS médias + MACD + Quinta + Pullback + Tendência ⚠️ | **+229% · −43,2%** | +47% · −8,2% | +32% | −5,3% | 3,7 | 1,84 → 1,36 | +22% | 0,06 |
> | 983 | Donchian + Quinta + Pullback + Rompe 200 ⚠️ | **+134% · −31,2%** | +38% · −7,6% | +25% | −3,2% | 3,9 | 2,08 → 1,27 | +14% | 0,03 |
> | 984 | ADX + GPS médias + Quinta + Tendência ⚠️ | **+220% · −52,7%** | +59% · −14,0% | +35% | −6,8% | 3,3 | 1,56 → 1,48 | +25% | 0,15 |
> | 985 | ADX + MACD + Pullback + Rompe 200 + Bollinger | **+221% · −41,2%** | +44% · −7,7% | +28% | −5,2% | 2,9 | 1,45 → 1,76 | +22% | 0,11 |
> | 986 | Pôr do sol + Quinta + Tendência ⚠️ | **+91% · −18,6%** | +36% · −5,5% | +27% | −4,3% | 3,3 | 1,84 → 1,41 | +20% | 0,07 |
> | 987 | ADX + Donchian + Bollinger | **+223% · −41,0%** | +72% · −13,1% | +36% | −5,2% | 4,4 | 1,26 → 1,77 | +22% | 0,26 |
> | 988 | GPS médias + IFR + Pôr do sol | **+148% · −25,8%** | +52% · −8,4% | +32% | −6,3% | 3,1 | 1,64 → 1,50 | +25% | 0,06 |
> | 989 | Donchian + GPS médias + IFR + MACD + Tendência | **+347% · −56,5%** | +68% · −12,1% | +41% | −8,0% | 3,5 | 1,57 → 1,46 | +26% | 0,47 |
> | 990 | Donchian + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+305% · −44,6%** | +57% · −9,1% | +36% | −6,4% | 3,7 | 1,38 → 1,62 | +29% | 0,15 |

> [!example]- Combinações 991 a 1020 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 991 | VWAP + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+250% · −31,7%** | +46% · −6,0% | +30% | −7,0% | 2,4 | 1,60 → 1,79 | +21% | 0,12 |
> | 992 | IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+254% · −37,2%** | +58% · −9,3% | +39% | −8,7% | 3,1 | 1,44 → 1,71 | +32% | 0,31 |
> | 993 | Donchian + GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+310% · −42,5%** | +59% · −9,0% | +34% | −7,8% | 2,8 | 1,62 → 1,57 | +24% | 0,28 |
> | 994 | ADX + BB explosão + IFR + 1ª vela 80 + Tendência ⚠️ | **+308% · −62,8%** | +62% · −14,4% | +38% | −7,5% | 3,4 | 1,35 → 1,75 | +26% | 0,28 |
> | 995 | VWAP + IFR + Pôr do sol + Bollinger + Tendência | **+249% · −38,1%** | +48% · −7,4% | +31% | −6,1% | 3,0 | 1,55 → 1,55 | +22% | 0,19 |
> | 996 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+240% · −36,0%** | +47% · −7,2% | +29% | −5,7% | 2,9 | 1,40 → 1,92 | +23% | 0,11 |
> | 997 | Donchian + GPS médias + Pullback + Rompe 200 + Bollinger | **+279% · −39,1%** | +52% · −7,9% | +30% | −5,2% | 3,2 | 1,98 → 1,37 | +17% | 0,15 |
> | 998 | 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+119% · −18,1%** | +35% · −3,7% | +23% | −3,5% | 2,9 | 1,41 → 1,84 | +17% | 0,03 |
> | 999 | ADX + IFR + 1ª vela 80 + Quinta ⚠️ | **+206% · −34,4%** | +52% · −7,7% | +33% | −4,4% | 4,6 | 1,15 → 2,05 | +21% | 0,04 |
> | 1000 | BB explosão + IFR + MACD + Pullback + Bollinger | **+245% · −38,8%** | +48% · −7,5% | +31% | −6,6% | 2,7 | 1,55 → 1,66 | +21% | 0,17 |
> | 1001 | Donchian + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+371% · −38,2%** | +60% · −7,7% | +35% | −7,9% | 2,8 | 1,43 → 1,85 | +27% | 0,30 |
> | 1002 | Donchian + GPS médias + Pôr do sol + Pullback | **+197% · −35,0%** | +52% · −8,3% | +30% | −4,5% | 3,9 | 1,88 → 1,31 | +18% | −0,02 |
> | 1003 | Donchian + Rompe 200 + Bollinger | **+154% · −23,2%** | +52% · −7,5% | +28% | −4,8% | 3,2 | 1,70 → 1,45 | +17% | 0,15 |
> | 1004 | MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+179% · −23,8%** | +44% · −5,1% | +29% | −6,7% | 2,4 | 1,57 → 1,87 | +24% | 0,07 |
> | 1005 | ADX + MACD + Pullback + Bollinger | **+205% · −38,5%** | +51% · −9,2% | +31% | −5,8% | 3,1 | 1,37 → 1,84 | +20% | 0,13 |
> | 1006 | Donchian + GPS médias + Rompe 200 + Bollinger + Tendência | **+326% · −49,3%** | +61% · −9,7% | +34% | −5,9% | 3,6 | 1,81 → 1,37 | +19% | 0,30 |
> | 1007 | Donchian + Quinta + Tendência ⚠️ | **+169% · −37,9%** | +58% · −12,6% | +36% | −6,3% | 3,6 | 1,76 → 1,38 | +19% | 0,12 |
> | 1008 | Donchian + GPS médias + IFR + MACD + Pullback | **+315% · −46,0%** | +60% · −8,9% | +36% | −7,8% | 3,0 | 1,68 → 1,50 | +24% | 0,23 |
> | 1009 | Donchian + BB explosão + Pôr do sol + Bollinger + Tendência | **+266% · −58,8%** | +54% · −13,0% | +32% | −5,4% | 3,5 | 1,57 → 1,45 | +17% | 0,21 |
> | 1010 | MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+121% · −17,1%** | +35% · −3,2% | +27% | −5,1% | 2,7 | 1,51 → 1,72 | +22% | −0,11 |
> | 1011 | Donchian + Pôr do sol + Tendência | **+171% · −36,0%** | +58% · −12,5% | +36% | −6,3% | 3,6 | 1,68 → 1,41 | +20% | 0,17 |
> | 1012 | ADX + Donchian + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+290% · −49,4%** | +60% · −10,1% | +34% | −5,3% | 3,9 | 1,33 → 1,66 | +27% | 0,12 |
> | 1013 | ADX + IFR + MACD + Bollinger + Tendência | **+371% · −51,2%** | +63% · −11,3% | +38% | −8,7% | 2,9 | 1,42 → 1,82 | +28% | 0,36 |
> | 1014 | Donchian + BB explosão + Quinta + Bollinger + Tendência ⚠️ | **+263% · −60,1%** | +54% · −13,6% | +32% | −5,3% | 3,6 | 1,63 → 1,42 | +16% | 0,22 |
> | 1015 | MACD + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+195% · −25,9%** | +39% · −4,3% | +27% | −5,9% | 2,4 | 1,62 → 1,78 | +23% | 0,08 |
> | 1016 | BB explosão + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+170% · −33,8%** | +45% · −8,3% | +28% | −5,8% | 2,6 | 1,56 → 1,68 | +18% | 0,06 |
> | 1017 | BB explosão + Pullback + Bollinger + Tendência | **+196% · −51,9%** | +51% · −13,9% | +32% | −5,8% | 3,3 | 1,82 → 1,40 | +15% | 0,19 |
> | 1018 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+175% · −30,4%** | +39% · −5,7% | +27% | −4,7% | 3,1 | 1,37 → 1,82 | +22% | −0,01 |
> | 1019 | Donchian + BB explosão + IFR + 1ª vela 80 + Bollinger ⚠️ | **+330% · −43,9%** | +60% · −9,6% | +34% | −7,5% | 2,8 | 1,45 → 1,75 | +22% | 0,28 |
> | 1020 | Donchian + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+215% · −26,6%** | +43% · −5,4% | +27% | −4,8% | 2,9 | 1,47 → 1,69 | +21% | 0,07 |

> [!example]- Combinações 1021 a 1050 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1021 | Donchian + Rompe 200 + Bollinger + Tendência | **+249% · −37,6%** | +58% · −9,0% | +33% | −6,8% | 3,0 | 1,82 → 1,45 | +18% | 0,26 |
> | 1022 | Donchian + Quinta + Pullback + Tendência + Onda ⚠️ | **+247% · −40,3%** | +50% · −7,8% | +33% | −5,8% | 3,5 | 1,46 → 1,49 | +25% | 0,08 |
> | 1023 | GPS médias + MACD + Pôr do sol + Bollinger + Tendência | **+272% · −36,9%** | +52% · −7,1% | +32% | −6,0% | 3,2 | 1,61 → 1,48 | +25% | 0,19 |
> | 1024 | GPS médias + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+329% · −42,5%** | +58% · −8,4% | +35% | −7,9% | 2,9 | 1,55 → 1,58 | +29% | 0,31 |
> | 1025 | VWAP + Donchian + IFR + Pullback + Tendência | **+291% · −49,4%** | +57% · −10,5% | +36% | −6,6% | 3,6 | 1,68 → 1,40 | +18% | 0,24 |
> | 1026 | GPS médias + MACD + Quinta + Bollinger + Tendência ⚠️ | **+269% · −38,5%** | +51% · −7,0% | +32% | −5,9% | 3,2 | 1,67 → 1,46 | +24% | 0,18 |
> | 1027 | VWAP + Donchian + IFR + Pullback + Bollinger | **+293% · −38,0%** | +53% · −7,9% | +32% | −6,8% | 2,7 | 1,68 → 1,54 | +19% | 0,18 |
> | 1028 | ADX + Pullback + Rompe 200 + Tendência | **+188% · −45,4%** | +50% · −11,1% | +33% | −7,0% | 2,8 | 1,73 → 1,51 | +20% | 0,11 |
> | 1029 | ADX + Donchian + BB explosão + IFR + Tendência | **+313% · −72,2%** | +69% · −18,9% | +40% | −8,1% | 3,4 | 1,42 → 1,59 | +22% | 0,44 |
> | 1030 | VWAP + Donchian + IFR + Bollinger + Tendência | **+339% · −46,2%** | +61% · −9,6% | +36% | −7,3% | 3,2 | 1,55 → 1,49 | +21% | 0,36 |
> | 1031 | ADX + Donchian + IFR + MACD + Quinta ⚠️ | **+293% · −43,1%** | +57% · −8,3% | +35% | −5,5% | 4,0 | 1,27 → 1,76 | +23% | 0,18 |
> | 1032 | Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+159% · −33,6%** | +43% · −8,3% | +27% | −4,6% | 3,1 | 1,45 → 1,62 | +22% | 0,07 |
> | 1033 | ADX + VWAP + IFR + Pôr do sol + Pullback | **+200% · −41,0%** | +44% · −7,6% | +29% | −4,5% | 3,7 | 1,35 → 1,65 | +15% | 0,03 |
> | 1034 | ADX + Donchian + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+189% · −37,7%** | +43% · −5,9% | +26% | −3,9% | 3,5 | 1,38 → 1,63 | +19% | 0,02 |
> | 1035 | Donchian + IFR + Pullback + Rompe 200 + Onda | **+252% · −35,9%** | +50% · −7,0% | +32% | −5,3% | 3,6 | 1,39 → 1,58 | +25% | 0,18 |
> | 1036 | Donchian + MACD + 1ª vela 80 + Pullback ⚠️ | **+215% · −30,5%** | +52% · −7,1% | +33% | −7,4% | 2,8 | 1,53 → 1,64 | +25% | 0,08 |
> | 1037 | Donchian + IFR + Pullback + Onda | **+237% · −33,2%** | +57% · −8,2% | +36% | −5,7% | 4,0 | 1,32 → 1,66 | +27% | 0,16 |
> | 1038 | GPS médias + IFR + Quinta ⚠️ | **+145% · −25,8%** | +52% · −8,4% | +32% | −6,3% | 3,1 | 1,72 → 1,45 | +23% | 0,05 |
> | 1039 | MACD + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+134% · −26,3%** | +32% · −4,6% | +25% | −4,6% | 2,6 | 1,57 → 1,63 | +22% | −0,03 |
> | 1040 | Donchian + GPS médias + Quinta + Pullback ⚠️ | **+194% · −36,9%** | +51% · −8,7% | +30% | −4,5% | 3,9 | 1,95 → 1,28 | +17% | −0,01 |
> | 1041 | ADX + VWAP + Pullback + Bollinger + Tendência | **+267% · −53,6%** | +52% · −10,4% | +32% | −6,4% | 3,0 | 1,53 → 1,53 | +21% | 0,22 |
> | 1042 | ADX + IFR + MACD + Quinta + Bollinger ⚠️ | **+274% · −41,8%** | +51% · −8,0% | +31% | −5,1% | 3,6 | 1,23 → 1,95 | +21% | 0,19 |
> | 1043 | BB explosão + IFR + Pôr do sol + Bollinger | **+172% · −30,9%** | +46% · −7,7% | +28% | −5,1% | 3,0 | 1,42 → 1,74 | +19% | 0,10 |
> | 1044 | BB explosão + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+198% · −51,5%** | +44% · −11,6% | +30% | −5,3% | 3,3 | 1,70 → 1,42 | +17% | 0,10 |
> | 1045 | ADX + Donchian + GPS médias + Quinta ⚠️ | **+222% · −49,7%** | +62% · −13,1% | +34% | −5,0% | 4,1 | 1,41 → 1,46 | +23% | 0,12 |
> | 1046 | Pullback + Rompe 200 + Bollinger | **+89% · −16,3%** | +35% · −4,8% | +23% | −2,7% | 3,7 | 2,13 → 1,26 | +15% | 0,06 |
> | 1047 | GPS médias + Pôr do sol + Pullback + Rompe 200 + Tendência | **+201% · −40,6%** | +43% · −8,2% | +29% | −4,0% | 4,0 | 2,04 → 1,26 | +18% | 0,05 |
> | 1048 | ADX + VWAP + IFR + 1ª vela 80 + Pullback ⚠️ | **+249% · −37,9%** | +50% · −7,7% | +33% | −5,4% | 3,7 | 1,29 → 1,78 | +19% | 0,09 |
> | 1049 | 1ª vela 80 + Quinta + Bollinger ⚠️ | **+106% · −15,1%** | +39% · −4,1% | +25% | −3,6% | 3,4 | 1,26 → 1,99 | +15% | −0,02 |
> | 1050 | ADX + GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+186% · −43,3%** | +43% · −8,7% | +27% | −4,2% | 3,4 | 1,70 → 1,40 | +19% | 0,06 |

> [!example]- Combinações 1051 a 1080 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1051 | Donchian + BB explosão + Pôr do sol + Pullback + Tendência | **+226% · −60,4%** | +50% · −13,7% | +32% | −4,7% | 4,1 | 1,72 → 1,34 | +15% | 0,13 |
> | 1052 | IFR + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+270% · −40,5%** | +50% · −8,1% | +35% | −7,8% | 2,8 | 1,50 → 1,66 | +27% | 0,26 |
> | 1053 | ADX + BB explosão + IFR + Pôr do sol + Bollinger | **+253% · −50,8%** | +52% · −9,4% | +30% | −4,2% | 4,1 | 1,22 → 1,85 | +22% | 0,17 |
> | 1054 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+172% · −38,8%** | +38% · −8,0% | +26% | −4,6% | 2,9 | 1,80 → 1,45 | +21% | 0,01 |
> | 1055 | GPS médias + IFR + Rompe 200 + Bollinger | **+219% · −33,8%** | +53% · −8,6% | +31% | −6,7% | 2,7 | 1,79 → 1,52 | +22% | 0,28 |
> | 1056 | Quinta + Pullback + Bollinger + Tendência + Onda ⚠️ | **+225% · −32,9%** | +44% · −6,0% | +30% | −5,9% | 2,9 | 1,48 → 1,64 | +26% | 0,05 |
> | 1057 | Donchian + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+230% · −38,3%** | +45% · −7,6% | +30% | −6,4% | 2,7 | 1,58 → 1,58 | +22% | 0,11 |
> | 1058 | IFR + MACD + Pôr do sol + Rompe 200 + Bollinger | **+198% · −29,3%** | +40% · −5,1% | +27% | −5,0% | 2,8 | 1,44 → 1,78 | +23% | 0,13 |
> | 1059 | BB explosão + IFR + Pôr do sol + Tendência | **+186% · −47,7%** | +50% · −12,2% | +34% | −6,8% | 3,1 | 1,55 → 1,51 | +19% | 0,19 |
> | 1060 | ADX + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+213% · −38,5%** | +54% · −9,0% | +34% | −6,2% | 3,4 | 1,29 → 1,83 | +25% | 0,10 |
> | 1061 | ADX + Bollinger + Tendência | **+212% · −45,6%** | +68% · −15,3% | +38% | −8,7% | 2,9 | 1,43 → 1,74 | +27% | 0,36 |
> | 1062 | 1ª vela 80 + Tendência ⚠️ | **+119% · −24,9%** | +61% · −12,3% | +41% | −8,9% | 3,1 | 1,46 → 1,58 | +30% | 0,04 |
> | 1063 | IFR + MACD + Quinta + Tendência ⚠️ | **+198% · −34,8%** | +50% · −8,5% | +35% | −7,9% | 2,8 | 1,55 → 1,58 | +26% | 0,20 |
> | 1064 | IFR + MACD + Rompe 200 + Bollinger + Tendência | **+286% · −43,2%** | +51% · −9,0% | +33% | −8,0% | 2,5 | 1,63 → 1,62 | +25% | 0,30 |
> | 1065 | Donchian + IFR + MACD + Rompe 200 + Bollinger | **+300% · −36,1%** | +53% · −6,8% | +32% | −6,8% | 2,8 | 1,50 → 1,65 | +24% | 0,29 |
> | 1066 | ADX + GPS médias + IFR + Rompe 200 | **+216% · −45,9%** | +58% · −12,3% | +34% | −5,8% | 3,6 | 1,39 → 1,56 | +25% | 0,29 |
> | 1067 | BB explosão + IFR + MACD + Quinta + Pullback ⚠️ | **+179% · −41,6%** | +41% · −7,9% | +29% | −5,6% | 2,9 | 1,54 → 1,55 | +19% | 0,04 |
> | 1068 | BB explosão + IFR + Quinta + Tendência ⚠️ | **+183% · −49,3%** | +50% · −12,8% | +34% | −6,7% | 3,1 | 1,61 → 1,48 | +18% | 0,17 |
> | 1069 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+233% · −38,3%** | +48% · −7,3% | +29% | −5,8% | 2,8 | 1,60 → 1,54 | +23% | −0,00 |
> | 1070 | Donchian + IFR + MACD + Tendência | **+286% · −43,5%** | +67% · −11,7% | +41% | −9,4% | 3,0 | 1,51 → 1,53 | +27% | 0,52 |
> | 1071 | MACD + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+93% · −16,7%** | +27% · −2,7% | +22% | −2,7% | 3,3 | 1,74 → 1,40 | +19% | −0,01 |
> | 1072 | ADX + BB explosão + Quinta + Pullback + Tendência ⚠️ | **+212% · −64,9%** | +48% · −15,7% | +31% | −6,3% | 2,9 | 1,62 → 1,50 | +18% | 0,10 |
> | 1073 | Donchian + Pôr do sol + Pullback + Bollinger + Onda | **+244% · −29,6%** | +46% · −5,5% | +28% | −4,3% | 3,7 | 1,32 → 1,71 | +23% | 0,03 |
> | 1074 | Donchian + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+283% · −32,9%** | +52% · −6,2% | +33% | −7,0% | 2,9 | 1,40 → 1,77 | +26% | 0,12 |
> | 1075 | Pôr do sol + Quinta + Pullback ⚠️ | **+47% · −9,1%** | +24% · −2,6% | +20% | −1,7% | 4,0 | 2,27 → 1,17 | +16% | 0,02 |
> | 1076 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+213% · −22,7%** | +42% · −4,3% | +30% | −4,1% | 4,2 | 1,18 → 1,93 | +23% | 0,00 |
> | 1077 | Donchian + BB explosão + Quinta + Pullback + Tendência ⚠️ | **+223% · −63,2%** | +50% · −14,3% | +32% | −4,6% | 4,1 | 1,77 → 1,32 | +14% | 0,14 |
> | 1078 | ADX + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+203% · −38,3%** | +43% · −6,9% | +29% | −4,9% | 3,3 | 1,28 → 1,87 | +21% | −0,03 |
> | 1079 | Donchian + IFR + MACD + Bollinger | **+282% · −33,8%** | +62% · −9,2% | +36% | −7,8% | 2,9 | 1,43 → 1,71 | +27% | 0,37 |
> | 1080 | BB explosão + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+236% · −47,1%** | +48% · −9,7% | +30% | −6,0% | 2,9 | 1,54 → 1,54 | +19% | 0,22 |

> [!example]- Combinações 1081 a 1110 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1081 | ADX + GPS médias + Pôr do sol + Bollinger | **+210% · −40,9%** | +54% · −10,2% | +30% | −4,3% | 3,9 | 1,32 → 1,63 | +25% | 0,13 |
> | 1082 | ADX + GPS médias + IFR | **+202% · −44,7%** | +72% · −16,2% | +40% | −6,4% | 4,2 | 1,31 → 1,61 | +30% | 0,39 |
> | 1083 | VWAP + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+180% · −31,4%** | +39% · −5,7% | +28% | −6,0% | 2,5 | 1,56 → 1,68 | +19% | −0,04 |
> | 1084 | GPS médias + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+198% · −42,5%** | +43% · −8,7% | +29% | −4,0% | 4,1 | 2,11 → 1,23 | +17% | 0,06 |
> | 1085 | BB explosão + GPS médias + IFR + Pullback + Bollinger | **+266% · −50,3%** | +54% · −10,3% | +32% | −6,6% | 2,9 | 1,75 → 1,47 | +18% | 0,21 |
> | 1086 | Donchian + GPS médias + IFR + Pôr do sol + Rompe 200 | **+256% · −37,9%** | +52% · −7,4% | +31% | −5,8% | 3,1 | 1,70 → 1,44 | +21% | 0,17 |
> | 1087 | ADX + BB explosão + IFR + 1ª vela 80 + Bollinger ⚠️ | **+305% · −50,1%** | +58% · −9,6% | +34% | −5,0% | 4,1 | 1,18 → 1,92 | +26% | 0,27 |
> | 1088 | ADX + Donchian + IFR + MACD + Tendência | **+368% · −59,3%** | +69% · −12,8% | +41% | −9,1% | 3,1 | 1,40 → 1,68 | +29% | 0,41 |
> | 1089 | ADX + BB explosão + GPS médias + Pullback + Bollinger | **+246% · −60,9%** | +55% · −14,0% | +31% | −5,0% | 3,6 | 1,48 → 1,44 | +19% | 0,24 |
> | 1090 | BB explosão + IFR + Pullback + Rompe 200 + Tendência | **+222% · −52,9%** | +47% · −11,6% | +32% | −6,4% | 3,0 | 1,84 → 1,42 | +15% | 0,20 |
> | 1091 | ADX + Donchian + GPS médias + Pôr do sol + Rompe 200 | **+239% · −49,9%** | +54% · −10,1% | +30% | −4,4% | 3,9 | 1,42 → 1,44 | +22% | 0,10 |
> | 1092 | ADX + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+228% · −41,2%** | +47% · −7,8% | +31% | −5,8% | 3,1 | 1,37 → 1,76 | +26% | 0,09 |
> | 1093 | ADX + Donchian + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+236% · −38,7%** | +49% · −6,2% | +30% | −4,7% | 3,6 | 1,29 → 1,76 | +23% | 0,04 |
> | 1094 | Donchian + GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+260% · −48,4%** | +52% · −10,9% | +31% | −6,2% | 2,9 | 1,79 → 1,43 | +20% | 0,12 |
> | 1095 | GPS médias + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+181% · −28,7%** | +39% · −5,1% | +25% | −3,8% | 3,1 | 2,21 → 1,32 | +17% | 0,05 |
> | 1096 | ADX + GPS médias + IFR + MACD + Tendência | **+333% · −59,0%** | +66% · −13,2% | +40% | −8,7% | 3,1 | 1,43 → 1,61 | +30% | 0,38 |
> | 1097 | Bollinger + Tendência | **+127% · −24,0%** | +64% · −11,8% | +37% | −9,2% | 2,6 | 1,79 → 1,53 | +23% | 0,31 |
> | 1098 | VWAP + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+134% · −23,1%** | +33% · −3,9% | +25% | −4,0% | 3,0 | 1,69 → 1,47 | +16% | −0,03 |
> | 1099 | Donchian + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+226% · −42,4%** | +47% · −8,9% | +31% | −5,6% | 3,2 | 1,54 → 1,47 | +23% | 0,14 |
> | 1100 | ADX + Donchian + GPS médias + Rompe 200 + Tendência | **+302% · −63,6%** | +65% · −15,2% | +37% | −7,0% | 3,4 | 1,57 → 1,43 | +22% | 0,30 |
> | 1101 | ADX + Donchian + Tendência | **+232% · −55,8%** | +78% · −21,1% | +43% | −9,4% | 3,3 | 1,43 → 1,57 | +25% | 0,38 |
> | 1102 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+235% · −36,7%** | +47% · −7,0% | +32% | −6,1% | 3,2 | 1,42 → 1,61 | +24% | 0,15 |
> | 1103 | BB explosão + IFR + Pôr do sol + Quinta ⚠️ | **+119% · −30,3%** | +37% · −6,5% | +26% | −3,8% | 3,3 | 1,40 → 1,59 | +18% | 0,00 |
> | 1104 | Donchian + GPS médias + MACD + Pullback + Tendência | **+307% · −54,9%** | +61% · −11,7% | +37% | −6,7% | 3,7 | 1,73 → 1,36 | +22% | 0,26 |
> | 1105 | BB explosão + IFR + Pôr do sol + Rompe 200 + Bollinger | **+186% · −32,2%** | +41% · −6,2% | +26% | −4,7% | 2,7 | 1,51 → 1,63 | +18% | 0,11 |
> | 1106 | Donchian + BB explosão + IFR + 1ª vela 80 + Quinta ⚠️ | **+253% · −41,6%** | +52% · −8,7% | +32% | −6,5% | 3,0 | 1,43 → 1,67 | +21% | 0,10 |
> | 1107 | Donchian + BB explosão + Pôr do sol + Quinta + Pullback ⚠️ | **+161% · −43,6%** | +39% · −8,3% | +26% | −3,1% | 4,2 | 1,69 → 1,33 | +14% | −0,01 |
> | 1108 | ADX + MACD + Pullback + Tendência | **+220% · −50,7%** | +56% · −12,9% | +36% | −8,4% | 2,8 | 1,51 → 1,61 | +26% | 0,15 |
> | 1109 | ADX + BB explosão + 1ª vela 80 + Quinta + Pullback ⚠️ | **+186% · −48,9%** | +44% · −9,5% | +28% | −4,2% | 3,7 | 1,31 → 1,69 | +21% | −0,02 |
> | 1110 | Donchian + GPS médias + Pôr do sol + Tendência | **+240% · −47,5%** | +62% · −12,1% | +36% | −5,6% | 4,2 | 1,71 → 1,33 | +21% | 0,18 |

> [!example]- Combinações 1111 a 1140 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1111 | Donchian + GPS médias + Quinta + Tendência ⚠️ | **+237% · −48,6%** | +61% · −12,6% | +36% | −5,3% | 4,4 | 1,77 → 1,31 | +20% | 0,16 |
> | 1112 | ADX + GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+234% · −53,5%** | +51% · −11,5% | +32% | −5,8% | 3,3 | 1,62 → 1,44 | +22% | 0,13 |
> | 1113 | ADX + GPS médias + IFR + MACD + Bollinger | **+337% · −46,1%** | +62% · −9,5% | +35% | −6,6% | 3,4 | 1,32 → 1,73 | +29% | 0,35 |
> | 1114 | ADX + Donchian + MACD + Quinta + Bollinger ⚠️ | **+289% · −43,3%** | +54% · −7,0% | +31% | −4,8% | 3,8 | 1,26 → 1,77 | +21% | 0,17 |
> | 1115 | Pôr do sol + Rompe 200 + Bollinger + Tendência | **+154% · −28,2%** | +41% · −6,3% | +27% | −5,3% | 2,6 | 1,91 → 1,49 | +19% | 0,09 |
> | 1116 | Donchian + IFR + Bollinger + Tendência + Onda | **+389% · −46,0%** | +65% · −9,7% | +38% | −8,1% | 3,2 | 1,37 → 1,70 | +31% | 0,32 |
> | 1117 | ADX + GPS médias + Pôr do sol + Rompe 200 + Tendência | **+236% · −52,5%** | +51% · −11,1% | +32% | −5,8% | 3,2 | 1,56 → 1,46 | +23% | 0,12 |
> | 1118 | MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+239% · −34,5%** | +54% · −8,4% | +35% | −7,6% | 2,9 | 1,43 → 1,70 | +26% | 0,31 |
> | 1119 | Donchian + GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+253% · −39,3%** | +52% · −7,3% | +31% | −5,8% | 3,1 | 1,75 → 1,41 | +20% | 0,17 |
> | 1120 | BB explosão + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+227% · −53,7%** | +48% · −11,1% | +33% | −6,6% | 3,1 | 1,51 → 1,50 | +22% | 0,13 |
> | 1121 | ADX + BB explosão + IFR + Pôr do sol + Tendência | **+259% · −62,6%** | +56% · −14,4% | +35% | −7,0% | 3,2 | 1,39 → 1,67 | +23% | 0,21 |
> | 1122 | Donchian + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+177% · −31,9%** | +39% · −6,5% | +27% | −4,2% | 3,3 | 1,74 → 1,39 | +18% | 0,05 |
> | 1123 | BB explosão + IFR + Rompe 200 + Bollinger + Tendência | **+262% · −49,9%** | +51% · −9,8% | +32% | −7,1% | 2,7 | 1,67 → 1,53 | +18% | 0,30 |
> | 1124 | BB explosão + GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+244% · −58,6%** | +54% · −13,9% | +34% | −6,0% | 3,6 | 1,68 → 1,38 | +19% | 0,15 |
> | 1125 | GPS médias + IFR + Quinta + Pullback + Onda ⚠️ | **+223% · −31,9%** | +47% · −5,9% | +31% | −5,5% | 3,3 | 1,42 → 1,55 | +27% | 0,01 |
> | 1126 | Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+152% · −28,1%** | +41% · −6,3% | +27% | −5,3% | 2,7 | 2,01 → 1,46 | +18% | 0,09 |
> | 1127 | VWAP + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+247% · −42,6%** | +47% · −8,8% | +31% | −6,7% | 2,7 | 1,64 → 1,53 | +21% | 0,16 |
> | 1128 | ADX + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+209% · −33,2%** | +53% · −8,1% | +33% | −4,1% | 4,9 | 1,09 → 2,08 | +20% | 0,09 |
> | 1129 | GPS médias + MACD + Pôr do sol + Pullback + Bollinger | **+219% · −32,2%** | +44% · −6,1% | +27% | −5,8% | 2,5 | 1,78 → 1,54 | +23% | 0,02 |
> | 1130 | GPS médias + IFR + MACD + Pullback | **+215% · −33,6%** | +54% · −7,9% | +34% | −7,9% | 2,8 | 1,69 → 1,50 | +25% | 0,13 |
> | 1131 | Donchian + GPS médias + Pullback + Rompe 200 + Tendência | **+280% · −53,1%** | +56% · −11,5% | +34% | −5,4% | 3,9 | 1,94 → 1,27 | +17% | 0,22 |
> | 1132 | Donchian + GPS médias + IFR + Pullback + Onda | **+305% · −43,9%** | +60% · −9,2% | +36% | −6,8% | 3,4 | 1,42 → 1,52 | +28% | 0,20 |
> | 1133 | ADX + IFR + MACD + Quinta + Tendência ⚠️ | **+286% · −47,2%** | +55% · −9,8% | +36% | −7,9% | 2,9 | 1,40 → 1,74 | +26% | 0,21 |
> | 1134 | ADX + Donchian + IFR + Pullback + Onda | **+319% · −44,9%** | +61% · −8,5% | +37% | −5,7% | 4,2 | 1,23 → 1,78 | +24% | 0,16 |
> | 1135 | Donchian + MACD + Pôr do sol + Pullback + Rompe 200 | **+179% · −31,9%** | +39% · −6,6% | +27% | −4,2% | 3,3 | 1,66 → 1,41 | +19% | 0,04 |
> | 1136 | ADX + BB explosão + GPS médias + IFR + Tendência | **+278% · −71,4%** | +66% · −18,8% | +39% | −7,8% | 3,4 | 1,44 → 1,50 | +23% | 0,42 |
> | 1137 | IFR + MACD + Pôr do sol + Bollinger | **+182% · −25,4%** | +45% · −5,5% | +29% | −5,5% | 3,0 | 1,33 → 1,88 | +22% | 0,15 |
> | 1138 | GPS médias + IFR + Rompe 200 + Tendência | **+233% · −43,8%** | +58% · −10,9% | +36% | −7,4% | 3,2 | 1,81 → 1,39 | +21% | 0,34 |
> | 1139 | BB explosão + GPS médias + Pullback + Bollinger + Tendência | **+261% · −60,6%** | +55% · −13,4% | +33% | −5,1% | 3,9 | 1,80 → 1,31 | +16% | 0,24 |
> | 1140 | BB explosão + Quinta + Pullback + Bollinger ⚠️ | **+123% · −32,2%** | +37% · −6,7% | +24% | −3,5% | 3,1 | 1,83 → 1,39 | +13% | 0,02 |

> [!example]- Combinações 1141 a 1170 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1141 | GPS médias + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+169% · −39,5%** | +38% · −8,2% | +26% | −4,6% | 2,9 | 1,86 → 1,42 | +20% | −0,01 |
> | 1142 | GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+207% · −44,8%** | +53% · −12,1% | +34% | −6,1% | 3,5 | 1,66 → 1,40 | +23% | 0,21 |
> | 1143 | ADX + GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+266% · −44,8%** | +54% · −8,9% | +33% | −6,3% | 3,3 | 1,37 → 1,66 | +28% | 0,10 |
> | 1144 | ADX + Donchian + IFR + MACD + 1ª vela 80 ⚠️ | **+351% · −42,3%** | +64% · −8,9% | +38% | −6,1% | 4,1 | 1,20 → 1,84 | +25% | 0,28 |
> | 1145 | Donchian + MACD + Pullback + Tendência | **+238% · −46,3%** | +58% · −12,8% | +37% | −7,6% | 3,2 | 1,70 → 1,41 | +22% | 0,26 |
> | 1146 | ADX + Donchian + 1ª vela 80 + Quinta ⚠️ | **+220% · −40,4%** | +56% · −8,3% | +33% | −4,7% | 4,2 | 1,20 → 1,82 | +22% | 0,00 |
> | 1147 | VWAP + Donchian + IFR + 1ª vela 80 + Tendência ⚠️ | **+318% · −48,6%** | +60% · −10,2% | +38% | −7,9% | 3,1 | 1,46 → 1,54 | +24% | 0,31 |
> | 1148 | BB explosão + 1ª vela 80 + Quinta + Tendência ⚠️ | **+161% · −47,0%** | +45% · −11,9% | +31% | −5,4% | 3,4 | 1,45 → 1,48 | +20% | 0,01 |
> | 1149 | GPS médias + Pullback + Tendência | **+172% · −40,8%** | +59% · −14,0% | +37% | −6,1% | 4,0 | 1,99 → 1,25 | +19% | 0,11 |
> | 1150 | ADX + BB explosão + Quinta + Bollinger + Tendência ⚠️ | **+250% · −63,5%** | +52% · −15,0% | +31% | −6,0% | 3,1 | 1,43 → 1,61 | +20% | 0,21 |
> | 1151 | Donchian + IFR + Quinta + Bollinger + Onda ⚠️ | **+300% · −32,7%** | +53% · −6,1% | +32% | −5,1% | 3,7 | 1,24 → 1,81 | +25% | 0,09 |
> | 1152 | IFR + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+256% · −29,5%** | +46% · −5,3% | +30% | −6,1% | 2,8 | 1,33 → 2,01 | +23% | 0,16 |
> | 1153 | BB explosão + IFR + MACD + Pullback + Tendência | **+250% · −55,8%** | +52% · −12,0% | +35% | −7,6% | 2,9 | 1,61 → 1,49 | +20% | 0,24 |
> | 1154 | ADX + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+179% · −38,9%** | +41% · −7,1% | +27% | −5,6% | 2,6 | 1,55 → 1,60 | +21% | 0,07 |
> | 1155 | BB explosão + GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+250% · −47,7%** | +53% · −10,3% | +33% | −7,6% | 2,7 | 1,62 → 1,53 | +21% | 0,13 |
> | 1156 | Donchian + BB explosão + Pullback + Bollinger | **+205% · −47,3%** | +53% · −12,0% | +30% | −5,2% | 3,3 | 1,66 → 1,40 | +14% | 0,18 |
> | 1157 | ADX + Donchian + GPS médias + Quinta + Rompe 200 ⚠️ | **+236% · −51,5%** | +53% · −10,7% | +30% | −4,7% | 3,7 | 1,48 → 1,42 | +21% | 0,12 |
> | 1158 | ADX + Donchian + BB explosão + Bollinger + Tendência | **+320% · −72,0%** | +66% · −18,9% | +36% | −7,3% | 3,3 | 1,42 → 1,56 | +20% | 0,39 |
> | 1159 | ADX + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+156% · −33,8%** | +44% · −7,6% | +29% | −4,5% | 3,5 | 1,30 → 1,74 | +22% | 0,02 |
> | 1160 | GPS médias + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+272% · −44,3%** | +54% · −9,1% | +35% | −6,2% | 3,6 | 1,39 → 1,52 | +28% | 0,12 |
> | 1161 | ADX + Donchian + MACD + Bollinger + Tendência | **+374% · −59,0%** | +66% · −12,8% | +38% | −8,2% | 3,0 | 1,41 → 1,68 | +27% | 0,37 |
> | 1162 | IFR + Pullback + Tendência + Onda | **+225% · −35,5%** | +54% · −8,6% | +37% | −8,2% | 3,0 | 1,42 → 1,64 | +31% | 0,16 |
> | 1163 | ADX + IFR + Pôr do sol + Quinta ⚠️ | **+161% · −30,5%** | +44% · −7,6% | +29% | −4,8% | 3,3 | 1,24 → 1,99 | +17% | 0,07 |
> | 1164 | BB explosão + GPS médias + IFR + Pôr do sol + Tendência | **+240% · −59,8%** | +55% · −13,7% | +34% | −5,9% | 3,6 | 1,59 → 1,39 | +20% | 0,23 |
> | 1165 | Donchian + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+232% · −59,2%** | +62% · −17,0% | +38% | −6,9% | 3,6 | 1,44 → 1,45 | +20% | 0,34 |
> | 1166 | ADX + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+345% · −49,1%** | +62% · −10,5% | +39% | −8,5% | 3,1 | 1,31 → 1,83 | +29% | 0,28 |
> | 1167 | ADX + BB explosão + Pullback + Rompe 200 + Bollinger | **+201% · −53,0%** | +45% · −10,8% | +27% | −4,4% | 3,2 | 1,45 → 1,54 | +17% | 0,15 |
> | 1168 | GPS médias + MACD + Quinta + Pullback + Bollinger ⚠️ | **+216% · −32,2%** | +43% · −6,1% | +27% | −5,9% | 2,5 | 1,87 → 1,50 | +22% | 0,04 |
> | 1169 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+206% · −37,2%** | +43% · −6,5% | +26% | −3,1% | 4,3 | 1,09 → 2,12 | +18% | 0,08 |
> | 1170 | Donchian + Pôr do sol + Pullback + Tendência + Onda | **+250% · −38,4%** | +50% · −7,8% | +33% | −5,8% | 3,5 | 1,41 → 1,50 | +26% | 0,11 |

> [!example]- Combinações 1171 a 1200 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1171 | BB explosão + IFR + Pullback + Rompe 200 | **+139% · −40,9%** | +41% · −10,3% | +28% | −4,7% | 3,3 | 1,70 → 1,39 | +14% | 0,14 |
> | 1172 | MACD + Pullback + Rompe 200 + Bollinger + Tendência | **+228% · −36,3%** | +44% · −6,8% | +30% | −6,5% | 2,6 | 1,87 → 1,49 | +21% | 0,15 |
> | 1173 | ADX + VWAP + 1ª vela 80 + Pullback + Tendência ⚠️ | **+246% · −50,9%** | +51% · −9,7% | +34% | −6,2% | 3,4 | 1,39 → 1,58 | +23% | 0,12 |
> | 1174 | Donchian + MACD + Bollinger + Tendência | **+280% · −44,3%** | +63% · −12,1% | +37% | −8,4% | 2,9 | 1,53 → 1,51 | +25% | 0,42 |
> | 1175 | ADX + Rompe 200 + Bollinger + Tendência | **+227% · −42,9%** | +55% · −10,7% | +33% | −7,7% | 2,6 | 1,52 → 1,66 | +23% | 0,22 |
> | 1176 | ADX + Donchian + GPS médias + Pôr do sol | **+225% · −48,0%** | +62% · −12,3% | +34% | −4,8% | 4,3 | 1,35 → 1,49 | +25% | 0,10 |
> | 1177 | GPS médias + IFR + Bollinger + Tendência + Onda | **+351% · −44,6%** | +62% · −9,1% | +37% | −7,7% | 3,2 | 1,39 → 1,61 | +32% | 0,31 |
> | 1178 | Donchian + BB explosão + IFR + Tendência | **+250% · −61,3%** | +67% · −17,9% | +40% | −8,2% | 3,3 | 1,53 → 1,44 | +18% | 0,53 |
> | 1179 | IFR + Quinta + Bollinger + Tendência + Onda ⚠️ | **+287% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 3,0 | 1,36 → 1,79 | +29% | 0,12 |
> | 1180 | Donchian + Pullback + Rompe 200 + Tendência | **+207% · −46,9%** | +52% · −11,1% | +33% | −6,0% | 3,4 | 1,97 → 1,30 | +15% | 0,20 |
> | 1181 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+239% · −40,9%** | +49% · −6,5% | +29% | −4,4% | 3,8 | 1,24 → 1,79 | +22% | 0,07 |
> | 1182 | BB explosão + GPS médias + IFR + Quinta + Tendência ⚠️ | **+237% · −60,6%** | +54% · −14,1% | +34% | −5,8% | 3,7 | 1,64 → 1,37 | +19% | 0,23 |
> | 1183 | MACD + Pullback + Rompe 200 + Bollinger | **+132% · −20,5%** | +37% · −4,1% | +25% | −4,8% | 2,6 | 1,73 → 1,51 | +20% | 0,07 |
> | 1184 | ADX + GPS médias + MACD + Bollinger + Tendência | **+337% · −57,3%** | +63% · −11,7% | +37% | −7,9% | 3,0 | 1,44 → 1,59 | +28% | 0,36 |
> | 1185 | VWAP + Donchian + IFR + 1ª vela 80 + Pullback ⚠️ | **+275% · −42,1%** | +52% · −8,6% | +33% | −7,9% | 2,6 | 1,54 → 1,60 | +21% | 0,13 |
> | 1186 | MACD + Quinta + Pullback + Tendência ⚠️ | **+150% · −31,4%** | +41% · −7,6% | +31% | −6,1% | 2,9 | 1,81 → 1,42 | +21% | 0,03 |
> | 1187 | GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+144% · −26,0%** | +40% · −6,1% | +24% | −4,2% | 2,7 | 1,87 → 1,45 | +21% | 0,01 |
> | 1188 | MACD + Pôr do sol + Pullback + Tendência | **+152% · −31,3%** | +41% · −7,5% | +31% | −6,1% | 2,9 | 1,73 → 1,45 | +23% | 0,04 |
> | 1189 | GPS médias + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+252% · −40,4%** | +50% · −7,9% | +33% | −6,9% | 3,0 | 1,53 → 1,49 | +27% | 0,10 |
> | 1190 | ADX + BB explosão + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+303% · −62,5%** | +59% · −14,4% | +35% | −6,7% | 3,3 | 1,32 → 1,73 | +24% | 0,29 |
> | 1191 | GPS médias + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+274% · −38,8%** | +50% · −7,8% | +31% | −8,1% | 2,2 | 1,66 → 1,65 | +26% | 0,12 |
> | 1192 | ADX + Donchian + BB explosão + IFR + Quinta ⚠️ | **+254% · −60,6%** | +57% · −13,5% | +33% | −5,4% | 3,9 | 1,30 → 1,64 | +21% | 0,20 |
> | 1193 | ADX + Donchian + BB explosão + IFR + 1ª vela 80 ⚠️ | **+304% · −59,3%** | +64% · −12,9% | +37% | −5,9% | 4,1 | 1,23 → 1,75 | +25% | 0,29 |
> | 1194 | MACD + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+256% · −38,0%** | +47% · −7,4% | +31% | −7,0% | 2,6 | 1,50 → 1,65 | +25% | 0,23 |
> | 1195 | GPS médias + IFR + 1ª vela 80 ⚠️ | **+191% · −32,2%** | +63% · −11,0% | +38% | −9,4% | 2,7 | 1,49 → 1,64 | +31% | 0,26 |
> | 1196 | Donchian + BB explosão + IFR + Bollinger | **+251% · −45,6%** | +62% · −11,5% | +34% | −7,2% | 3,0 | 1,45 → 1,58 | +18% | 0,38 |
> | 1197 | Donchian + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+224% · −31,3%** | +46% · −6,2% | +30% | −5,8% | 2,9 | 1,48 → 1,54 | +22% | 0,17 |
> | 1198 | Donchian + IFR + MACD + Quinta ⚠️ | **+210% · −30,4%** | +53% · −8,0% | +33% | −6,6% | 3,1 | 1,40 → 1,61 | +25% | 0,18 |
> | 1199 | ADX + IFR + Pullback + Tendência + Onda | **+312% · −49,0%** | +59% · −10,0% | +38% | −8,1% | 3,1 | 1,33 → 1,76 | +28% | 0,17 |
> | 1200 | ADX + Donchian + IFR + MACD + Pôr do sol | **+296% · −42,3%** | +58% · −8,3% | +34% | −5,5% | 3,9 | 1,22 → 1,78 | +22% | 0,18 |

> [!example]- Combinações 1201 a 1230 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1201 | Donchian + BB explosão + IFR + Rompe 200 + Bollinger | **+266% · −45,8%** | +54% · −9,6% | +31% | −6,4% | 2,8 | 1,52 → 1,52 | +17% | 0,31 |
> | 1202 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+183% · −30,1%** | +39% · −5,5% | +28% | −6,0% | 2,5 | 1,50 → 1,69 | +18% | 0,01 |
> | 1203 | MACD + Quinta + Bollinger + Tendência ⚠️ | **+183% · −32,1%** | +46% · −7,6% | +31% | −6,9% | 2,6 | 1,58 → 1,56 | +25% | 0,18 |
> | 1204 | BB explosão + IFR + MACD + Pôr do sol + Pullback | **+182% · −39,9%** | +41% · −7,4% | +29% | −5,6% | 2,9 | 1,47 → 1,58 | +20% | 0,03 |
> | 1205 | ADX + Donchian + Rompe 200 + Tendência | **+246% · −55,3%** | +63% · −15,2% | +37% | −8,2% | 2,9 | 1,50 → 1,51 | +22% | 0,25 |
> | 1206 | ADX + BB explosão + GPS médias + Pullback + Tendência | **+244% · −72,3%** | +59% · −18,7% | +35% | −6,3% | 3,6 | 1,58 → 1,38 | +19% | 0,25 |
> | 1207 | ADX + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+336% · −45,1%** | +58% · −8,9% | +35% | −5,7% | 3,8 | 1,14 → 2,02 | +24% | 0,28 |
> | 1208 | ADX + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+206% · −37,2%** | +44% · −6,5% | +29% | −4,7% | 3,5 | 1,22 → 1,90 | +20% | −0,00 |
> | 1209 | IFR + MACD + Pôr do sol + Tendência | **+201% · −34,9%** | +50% · −8,5% | +35% | −8,0% | 2,8 | 1,48 → 1,60 | +28% | 0,24 |
> | 1210 | BB explosão + 1ª vela 80 + Quinta + Pullback ⚠️ | **+116% · −36,0%** | +36% · −9,1% | +26% | −4,5% | 2,8 | 1,53 → 1,50 | +17% | −0,13 |
> | 1211 | Donchian + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+287% · −43,6%** | +65% · −11,4% | +35% | −8,8% | 2,5 | 1,58 → 1,58 | +25% | 0,26 |
> | 1212 | ADX + Donchian + Pôr do sol + Quinta ⚠️ | **+176% · −39,5%** | +48% · −8,6% | +28% | −4,4% | 3,6 | 1,28 → 1,72 | +17% | 0,01 |
> | 1213 | IFR + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+138% · −23,3%** | +33% · −4,0% | +25% | −4,0% | 3,0 | 1,39 → 1,64 | +22% | 0,07 |
> | 1214 | Donchian + MACD + 1ª vela 80 + Tendência ⚠️ | **+263% · −44,6%** | +62% · −12,3% | +39% | −8,1% | 3,2 | 1,42 → 1,55 | +28% | 0,36 |
> | 1215 | IFR + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+353% · −42,3%** | +58% · −8,6% | +37% | −7,5% | 3,2 | 1,27 → 1,88 | +28% | 0,24 |
> | 1216 | ADX + MACD + Quinta + Bollinger + Tendência ⚠️ | **+278% · −47,7%** | +52% · −9,3% | +32% | −7,0% | 2,8 | 1,40 → 1,75 | +25% | 0,21 |
> | 1217 | Pôr do sol + Pullback + Bollinger + Tendência + Onda | **+228% · −32,9%** | +44% · −6,0% | +30% | −6,0% | 2,8 | 1,42 → 1,66 | +26% | 0,07 |
> | 1218 | ADX + VWAP + Donchian + Pullback + Bollinger | **+277% · −48,7%** | +54% · −8,8% | +31% | −5,5% | 3,3 | 1,41 → 1,54 | +18% | 0,20 |
> | 1219 | Donchian + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+286% · −32,9%** | +52% · −6,1% | +33% | −6,9% | 2,9 | 1,35 → 1,79 | +25% | 0,18 |
> | 1220 | GPS médias + IFR + Pôr do sol + Pullback + Onda | **+226% · −32,1%** | +47% · −5,9% | +31% | −5,3% | 3,4 | 1,37 → 1,58 | +26% | 0,03 |
> | 1221 | Donchian + GPS médias + MACD + Bollinger + Tendência | **+354% · −53,1%** | +65% · −10,2% | +37% | −7,7% | 3,1 | 1,60 → 1,43 | +24% | 0,40 |
> | 1222 | ADX + GPS médias + IFR + MACD + Quinta ⚠️ | **+259% · −45,3%** | +55% · −9,3% | +34% | −5,7% | 3,6 | 1,30 → 1,65 | +27% | 0,18 |
> | 1223 | ADX + Donchian + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+296% · −70,8%** | +65% · −18,3% | +38% | −7,0% | 3,6 | 1,33 → 1,60 | +23% | 0,31 |
> | 1224 | ADX + MACD + Pullback + Rompe 200 + Tendência | **+234% · −49,5%** | +48% · −9,6% | +32% | −7,6% | 2,6 | 1,56 → 1,55 | +23% | 0,12 |
> | 1225 | Donchian + BB explosão + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+256% · −41,0%** | +53% · −8,7% | +32% | −6,5% | 3,0 | 1,38 → 1,69 | +22% | 0,15 |
> | 1226 | GPS médias + IFR + MACD + Quinta + Bollinger ⚠️ | **+268% · −39,1%** | +50% · −8,0% | +31% | −7,5% | 2,4 | 1,57 → 1,62 | +26% | 0,17 |
> | 1227 | ADX + Pôr do sol + Quinta + Tendência ⚠️ | **+165% · −39,7%** | +46% · −9,0% | +30% | −6,6% | 2,6 | 1,46 → 1,69 | +22% | 0,09 |
> | 1228 | ADX + IFR + MACD + Pôr do sol + Bollinger | **+278% · −41,0%** | +51% · −7,8% | +31% | −5,1% | 3,6 | 1,16 → 1,99 | +20% | 0,18 |
> | 1229 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+255% · −38,5%** | +51% · −7,4% | +33% | −6,9% | 3,0 | 1,48 → 1,51 | +28% | 0,16 |
> | 1230 | GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+206% · −34,4%** | +52% · −8,7% | +32% | −7,9% | 2,5 | 1,56 → 1,58 | +25% | 0,25 |

> [!example]- Combinações 1231 a 1260 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1231 | ADX + Donchian + BB explosão + Pullback + Rompe 200 | **+212% · −62,0%** | +51% · −14,4% | +30% | −4,6% | 3,8 | 1,43 → 1,41 | +16% | 0,18 |
> | 1232 | BB explosão + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+130% · −32,8%** | +34% · −5,4% | +24% | −3,7% | 3,0 | 1,49 → 1,48 | +16% | 0,05 |
> | 1233 | GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+189% · −34,9%** | +48% · −8,4% | +28% | −6,6% | 2,3 | 1,60 → 1,62 | +21% | 0,05 |
> | 1234 | IFR + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+185% · −23,5%** | +39% · −4,4% | +28% | −5,1% | 3,0 | 1,28 → 1,92 | +22% | 0,05 |
> | 1235 | ADX + GPS médias + Pullback | **+160% · −43,0%** | +59% · −15,3% | +34% | −6,2% | 3,4 | 1,52 → 1,41 | +23% | 0,12 |
> | 1236 | ADX + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+127% · −31,0%** | +33% · −6,1% | +23% | −4,2% | 2,4 | 1,61 → 1,57 | +17% | 0,02 |
> | 1237 | GPS médias + IFR + MACD + Tendência | **+259% · −45,6%** | +64% · −11,4% | +40% | −8,9% | 3,1 | 1,55 → 1,46 | +28% | 0,43 |
> | 1238 | ADX + Donchian + MACD + Pôr do sol + Bollinger | **+292% · −42,2%** | +55% · −7,2% | +31% | −4,6% | 3,9 | 1,20 → 1,80 | +21% | 0,15 |
> | 1239 | Donchian + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+361% · −43,6%** | +64% · −8,9% | +40% | −7,9% | 3,4 | 1,28 → 1,72 | +33% | 0,29 |
> | 1240 | IFR + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+160% · −23,9%** | +36% · −4,6% | +27% | −4,3% | 3,3 | 1,35 → 1,62 | +24% | 0,03 |
> | 1241 | IFR + Pullback + Rompe 200 + Tendência + Onda | **+239% · −38,9%** | +47% · −7,5% | +33% | −7,4% | 2,8 | 1,49 → 1,56 | +26% | 0,18 |
> | 1242 | 1ª vela 80 + Quinta + Pullback + Tendência + Onda ⚠️ | **+209% · −32,8%** | +43% · −6,0% | +31% | −5,6% | 3,3 | 1,33 → 1,66 | +27% | −0,03 |
> | 1243 | Donchian + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+192% · −45,6%** | +52% · −12,4% | +32% | −6,5% | 2,9 | 1,51 → 1,48 | +17% | 0,10 |
> | 1244 | ADX + GPS médias + Tendência | **+205% · −53,9%** | +73% · −19,7% | +42% | −8,9% | 3,2 | 1,46 → 1,45 | +27% | 0,36 |
> | 1245 | ADX + BB explosão + IFR + MACD + Pullback | **+240% · −57,6%** | +52% · −11,9% | +33% | −5,9% | 3,5 | 1,30 → 1,67 | +23% | 0,17 |
> | 1246 | ADX + GPS médias + MACD + Pullback + Rompe 200 | **+216% · −46,4%** | +48% · −9,4% | +30% | −5,5% | 3,2 | 1,46 → 1,46 | +23% | 0,11 |
> | 1247 | ADX + IFR + Quinta + Rompe 200 ⚠️ | **+159% · −32,7%** | +45% · −7,6% | +29% | −5,1% | 3,2 | 1,29 → 1,79 | +21% | 0,10 |
> | 1248 | ADX + IFR + Pullback + Bollinger + Onda | **+308% · −39,6%** | +55% · −7,7% | +33% | −6,0% | 3,4 | 1,19 → 1,96 | +23% | 0,14 |
> | 1249 | Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+122% · −17,9%** | +35% · −3,4% | +23% | −3,5% | 2,9 | 1,31 → 1,90 | +17% | 0,08 |
> | 1250 | ADX + GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+273% · −50,0%** | +54% · −10,5% | +30% | −5,4% | 3,3 | 1,32 → 1,69 | +24% | 0,23 |
> | 1251 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+189% · −47,6%** | +44% · −8,9% | +28% | −4,2% | 3,7 | 1,25 → 1,72 | +22% | −0,01 |
> | 1252 | IFR + Rompe 200 | **+78% · −14,3%** | +43% · −6,8% | +30% | −5,6% | 3,0 | 1,51 → 1,47 | +20% | 0,31 |
> | 1253 | ADX + Donchian + MACD + 1ª vela 80 + Tendência ⚠️ | **+346% · −57,6%** | +65% · −12,1% | +39% | −8,0% | 3,3 | 1,31 → 1,69 | +29% | 0,30 |
> | 1254 | Donchian + GPS médias + IFR | **+224% · −38,4%** | +75% · −13,6% | +41% | −9,1% | 3,1 | 1,61 → 1,43 | +24% | 0,46 |
> | 1255 | ADX + IFR + MACD + Pôr do sol + Tendência | **+289% · −47,1%** | +55% · −9,9% | +36% | −7,9% | 2,9 | 1,35 → 1,76 | +25% | 0,22 |
> | 1256 | IFR + Rompe 200 + Tendência | **+156% · −30,9%** | +53% · −10,2% | +36% | −9,0% | 2,6 | 1,80 → 1,48 | +21% | 0,32 |
> | 1257 | ADX + Donchian + Pôr do sol + 1ª vela 80 ⚠️ | **+223% · −42,6%** | +57% · −8,7% | +33% | −4,5% | 4,4 | 1,14 → 1,85 | +21% | 0,05 |
> | 1258 | VWAP + IFR + Pullback + Bollinger | **+178% · −26,7%** | +45% · −6,4% | +29% | −6,7% | 2,4 | 1,67 → 1,54 | +19% | 0,13 |
> | 1259 | VWAP + Donchian + Pullback + Bollinger + Tendência | **+285% · −47,9%** | +54% · −9,8% | +33% | −5,7% | 3,5 | 1,70 → 1,34 | +17% | 0,24 |
> | 1260 | GPS médias + 1ª vela 80 + Pullback ⚠️ | **+144% · −33,0%** | +51% · −11,2% | +32% | −6,9% | 2,8 | 1,71 → 1,43 | +24% | −0,05 |

> [!example]- Combinações 1261 a 1290 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1261 | IFR + MACD + Pôr do sol + Quinta ⚠️ | **+125% · −21,0%** | +36% · −5,0% | +27% | −4,3% | 3,3 | 1,28 → 1,75 | +20% | 0,06 |
> | 1262 | ADX + BB explosão + Pullback + Tendência | **+197% · −65,9%** | +56% · −20,5% | +35% | −7,4% | 3,0 | 1,52 → 1,47 | +18% | 0,20 |
> | 1263 | Donchian + IFR + Quinta + Tendência + Onda ⚠️ | **+300% · −41,5%** | +57% · −8,2% | +36% | −7,3% | 3,2 | 1,35 → 1,62 | +29% | 0,17 |
> | 1264 | Donchian + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+114% · −24,9%** | +35% · −5,5% | +23% | −2,9% | 3,5 | 1,74 → 1,33 | +17% | 0,01 |
> | 1265 | ADX + Donchian + MACD + Quinta + Tendência ⚠️ | **+290% · −58,3%** | +58% · −12,7% | +36% | −7,4% | 3,1 | 1,39 → 1,60 | +26% | 0,21 |
> | 1266 | ADX + BB explosão + GPS médias + Bollinger + Tendência | **+282% · −71,1%** | +63% · −18,0% | +35% | −6,9% | 3,3 | 1,43 → 1,46 | +21% | 0,40 |
> | 1267 | ADX + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+157% · −36,8%** | +37% · −6,4% | +26% | −4,6% | 2,9 | 1,41 → 1,62 | +20% | 0,01 |
> | 1268 | ADX + BB explosão + IFR + 1ª vela 80 + Quinta ⚠️ | **+232% · −48,0%** | +50% · −8,7% | +32% | −4,5% | 4,2 | 1,15 → 1,84 | +24% | 0,09 |
> | 1269 | Donchian + IFR + MACD + Rompe 200 + Tendência | **+301% · −44,8%** | +57% · −9,7% | +36% | −8,4% | 2,8 | 1,56 → 1,49 | +23% | 0,39 |
> | 1270 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+206% · −45,5%** | +46% · −9,0% | +28% | −4,1% | 3,8 | 1,25 → 1,69 | +23% | 0,03 |
> | 1271 | ADX + BB explosão + Pullback + Bollinger | **+187% · −54,7%** | +51% · −14,9% | +29% | −5,2% | 3,2 | 1,37 → 1,60 | +18% | 0,19 |
> | 1272 | ADX + Donchian + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+284% · −50,6%** | +60% · −10,5% | +34% | −6,2% | 3,4 | 1,36 → 1,56 | +25% | 0,22 |
> | 1273 | ADX + Donchian + GPS médias + IFR + MACD | **+329% · −56,6%** | +69% · −12,3% | +39% | −7,4% | 3,5 | 1,32 → 1,60 | +29% | 0,38 |
> | 1274 | BB explosão + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+163% · −45,3%** | +46% · −11,2% | +31% | −5,4% | 3,4 | 1,39 → 1,51 | +21% | 0,09 |
> | 1275 | ADX + Pôr do sol + Quinta + Pullback ⚠️ | **+115% · −31,8%** | +36% · −7,5% | +24% | −4,9% | 2,4 | 1,51 → 1,69 | +15% | 0,02 |
> | 1276 | MACD + Quinta + Pullback ⚠️ | **+72% · −14,9%** | +31% · −4,6% | +25% | −3,9% | 3,1 | 1,65 → 1,41 | +20% | −0,10 |
> | 1277 | Donchian + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+278% · −44,3%** | +53% · −9,2% | +34% | −7,4% | 2,9 | 1,48 → 1,51 | +25% | 0,28 |
> | 1278 | ADX + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+338% · −49,6%** | +59% · −10,3% | +36% | −7,6% | 3,0 | 1,29 → 1,84 | +27% | 0,29 |
> | 1279 | Donchian + GPS médias + Pôr do sol + Bollinger | **+234% · −35,4%** | +57% · −9,3% | +30% | −6,3% | 2,8 | 1,69 → 1,45 | +21% | 0,07 |
> | 1280 | ADX + Donchian + BB explosão + Quinta + Tendência ⚠️ | **+248% · −71,5%** | +58% · −18,9% | +35% | −6,4% | 3,4 | 1,41 → 1,48 | +19% | 0,23 |
> | 1281 | ADX + Donchian + BB explosão + Quinta + Bollinger ⚠️ | **+252% · −60,6%** | +54% · −13,5% | +30% | −4,3% | 4,0 | 1,27 → 1,60 | +19% | 0,19 |
> | 1282 | ADX + Donchian + GPS médias + MACD + Tendência | **+322% · −66,9%** | +70% · −15,7% | +40% | −8,3% | 3,3 | 1,42 → 1,49 | +27% | 0,39 |
> | 1283 | BB explosão + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+184% · −39,3%** | +40% · −7,9% | +26% | −5,7% | 2,3 | 1,62 → 1,59 | +17% | 0,09 |
> | 1284 | ADX + BB explosão + Pôr do sol + Bollinger + Tendência | **+253% · −62,8%** | +53% · −14,5% | +31% | −6,1% | 3,0 | 1,37 → 1,64 | +21% | 0,19 |
> | 1285 | ADX + VWAP + Donchian + Pullback + Tendência | **+274% · −62,9%** | +58% · −14,5% | +35% | −6,8% | 3,3 | 1,49 → 1,42 | +19% | 0,22 |
> | 1286 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+136% · −25,4%** | +33% · −4,3% | +25% | −4,8% | 2,5 | 1,48 → 1,65 | +23% | 0,00 |
> | 1287 | ADX + GPS médias + IFR + Pullback + Onda | **+282% · −48,7%** | +58% · −10,2% | +35% | −5,6% | 4,0 | 1,24 → 1,66 | +28% | 0,16 |
> | 1288 | Donchian + Pôr do sol | **+93% · −25,1%** | +51% · −11,5% | +29% | −4,7% | 3,5 | 1,45 → 1,41 | +20% | −0,16 |
> | 1289 | Donchian + IFR + Pôr do sol + Bollinger + Onda | **+303% · −32,7%** | +54% · −6,3% | +32% | −5,1% | 3,7 | 1,19 → 1,83 | +24% | 0,12 |
> | 1290 | IFR + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+212% · −38,3%** | +44% · −7,4% | +31% | −7,2% | 2,6 | 1,61 → 1,52 | +23% | 0,17 |

> [!example]- Combinações 1291 a 1320 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1291 | ADX + MACD + Quinta + Pullback ⚠️ | **+144% · −33,9%** | +42% · −7,6% | +28% | −5,0% | 3,1 | 1,33 → 1,70 | +19% | −0,01 |
> | 1292 | IFR + Quinta + Pullback + Onda ⚠️ | **+147% · −22,7%** | +40% · −4,9% | +29% | −4,7% | 3,5 | 1,25 → 1,73 | +23% | −0,05 |
> | 1293 | ADX + VWAP + GPS médias + IFR + Pullback | **+251% · −52,8%** | +55% · −10,9% | +33% | −6,6% | 3,1 | 1,44 → 1,48 | +22% | 0,17 |
> | 1294 | VWAP + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+182% · −32,8%** | +40% · −5,9% | +29% | −5,3% | 3,1 | 1,53 → 1,44 | +20% | 0,07 |
> | 1295 | ADX + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+207% · −36,6%** | +53% · −8,7% | +33% | −5,4% | 3,7 | 1,14 → 1,94 | +24% | 0,17 |
> | 1296 | Donchian + GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+330% · −51,1%** | +64% · −10,6% | +39% | −8,7% | 2,9 | 1,50 → 1,47 | +27% | 0,35 |
> | 1297 | MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+124% · −17,0%** | +36% · −3,1% | +27% | −5,4% | 2,6 | 1,41 → 1,75 | +21% | −0,05 |
> | 1298 | VWAP + Donchian + IFR + Quinta + Pullback ⚠️ | **+218% · −34,8%** | +45% · −7,3% | +30% | −5,9% | 2,9 | 1,66 → 1,42 | +17% | 0,04 |
> | 1299 | Donchian + GPS médias + IFR + Tendência + Onda | **+336% · −53,2%** | +68% · −11,2% | +41% | −8,1% | 3,4 | 1,38 → 1,50 | +30% | 0,39 |
> | 1300 | Donchian + GPS médias + MACD + Pullback + Bollinger | **+313% · −40,4%** | +57% · −8,4% | +33% | −7,7% | 2,6 | 1,72 → 1,47 | +22% | 0,18 |
> | 1301 | ADX + GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+310% · −55,7%** | +62% · −11,0% | +38% | −7,6% | 3,3 | 1,33 → 1,61 | +31% | 0,28 |
> | 1302 | ADX + Donchian + BB explosão + IFR + Pôr do sol | **+257% · −59,9%** | +58% · −12,9% | +33% | −5,3% | 3,9 | 1,25 → 1,66 | +22% | 0,19 |
> | 1303 | Donchian + MACD + Pullback | **+151% · −30,5%** | +53% · −10,7% | +33% | −6,5% | 3,1 | 1,56 → 1,41 | +21% | 0,12 |
> | 1304 | ADX + GPS médias + MACD + Quinta + Tendência ⚠️ | **+261% · −56,5%** | +56% · −11,9% | +35% | −7,1% | 3,1 | 1,42 → 1,51 | +27% | 0,18 |
> | 1305 | IFR + Pôr do sol + Bollinger + Tendência + Onda | **+290% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 2,9 | 1,31 → 1,81 | +28% | 0,16 |
> | 1306 | Donchian + BB explosão + IFR + Quinta ⚠️ | **+187% · −45,5%** | +53% · −11,8% | +32% | −6,0% | 3,2 | 1,43 → 1,46 | +17% | 0,18 |
> | 1307 | Donchian + Quinta ⚠️ | **+92% · −23,3%** | +50% · −10,6% | +29% | −4,7% | 3,5 | 1,59 → 1,35 | +17% | −0,20 |
> | 1308 | BB explosão + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+237% · −38,1%** | +47% · −7,8% | +29% | −6,6% | 2,5 | 1,43 → 1,77 | +21% | 0,22 |
> | 1309 | ADX + Donchian + Pullback + Bollinger + Onda | **+316% · −42,9%** | +58% · −7,7% | +33% | −5,2% | 3,9 | 1,19 → 1,77 | +23% | 0,14 |
> | 1310 | IFR + MACD + Pôr do sol + Rompe 200 + Tendência | **+215% · −38,3%** | +44% · −7,5% | +31% | −7,3% | 2,5 | 1,55 → 1,54 | +24% | 0,19 |
> | 1311 | Donchian + BB explosão + GPS médias + IFR + Tendência | **+284% · −69,3%** | +68% · −17,8% | +39% | −7,5% | 3,6 | 1,57 → 1,36 | +19% | 0,50 |
> | 1312 | Donchian + BB explosão + Pôr do sol + Quinta + Bollinger ⚠️ | **+194% · −41,3%** | +43% · −7,3% | +25% | −4,4% | 2,9 | 1,48 → 1,48 | +16% | 0,05 |
> | 1313 | VWAP + Donchian + IFR + Pôr do sol + Pullback | **+220% · −34,9%** | +46% · −7,3% | +30% | −5,9% | 2,9 | 1,60 → 1,44 | +18% | 0,06 |
> | 1314 | GPS médias + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+325% · −42,1%** | +61% · −8,4% | +39% | −7,5% | 3,5 | 1,30 → 1,63 | +32% | 0,26 |
> | 1315 | MACD + Pôr do sol + Pullback | **+74% · −15,0%** | +31% · −4,6% | +25% | −4,1% | 2,9 | 1,50 → 1,47 | +19% | −0,12 |
> | 1316 | GPS médias + IFR + MACD + Pôr do sol + Bollinger | **+271% · −39,0%** | +51% · −8,0% | +31% | −7,5% | 2,4 | 1,51 → 1,65 | +27% | 0,18 |
> | 1317 | GPS médias + Quinta + Pullback + Tendência + Onda ⚠️ | **+221% · −42,4%** | +47% · −7,9% | +32% | −5,5% | 3,5 | 1,48 → 1,38 | +23% | 0,03 |
> | 1318 | ADX + BB explosão + 1ª vela 80 + Quinta + Tendência ⚠️ | **+231% · −61,9%** | +51% · −14,3% | +33% | −6,0% | 3,4 | 1,30 → 1,65 | +23% | 0,10 |
> | 1319 | ADX + Donchian + BB explosão + Pullback | **+200% · −62,6%** | +58% · −18,7% | +33% | −5,6% | 3,6 | 1,37 → 1,45 | +17% | 0,21 |
> | 1320 | BB explosão + GPS médias + IFR + Pôr do sol + Pullback | **+202% · −50,4%** | +47% · −10,5% | +30% | −5,6% | 3,0 | 1,69 → 1,39 | +18% | 0,05 |

> [!example]- Combinações 1321 a 1350 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1321 | Donchian + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+271% · −32,8%** | +49% · −6,2% | +30% | −6,8% | 2,5 | 1,41 → 1,78 | +25% | 0,11 |
> | 1322 | VWAP + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+191% · −35,1%** | +40% · −6,5% | +28% | −4,5% | 3,3 | 1,80 → 1,32 | +17% | 0,09 |
> | 1323 | Donchian + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+303% · −33,6%** | +53% · −6,1% | +32% | −6,1% | 3,1 | 1,27 → 1,81 | +26% | 0,11 |
> | 1324 | Donchian + BB explosão + IFR + MACD + Pullback | **+253% · −53,2%** | +54% · −11,6% | +34% | −7,4% | 2,8 | 1,48 → 1,49 | +19% | 0,25 |
> | 1325 | VWAP + Donchian + IFR + Quinta + Tendência ⚠️ | **+260% · −46,6%** | +53% · −9,5% | +34% | −6,6% | 3,3 | 1,53 → 1,40 | +19% | 0,19 |
> | 1326 | ADX + BB explosão + GPS médias + IFR + Bollinger | **+286% · −60,2%** | +62% · −14,5% | +34% | −6,3% | 3,4 | 1,33 → 1,58 | +23% | 0,39 |
> | 1327 | GPS médias + IFR + Quinta + Tendência + Onda ⚠️ | **+270% · −41,9%** | +55% · −7,7% | +35% | −6,9% | 3,3 | 1,37 → 1,53 | +30% | 0,13 |
> | 1328 | GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+192% · −35,9%** | +48% · −8,8% | +28% | −6,6% | 2,3 | 1,52 → 1,67 | +21% | 0,10 |
> | 1329 | GPS médias + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+204% · −37,8%** | +44% · −6,4% | +30% | −5,2% | 3,3 | 1,60 → 1,38 | +24% | 0,08 |
> | 1330 | MACD + Pôr do sol + Bollinger + Tendência | **+186% · −32,2%** | +46% · −7,6% | +31% | −6,9% | 2,6 | 1,49 → 1,59 | +26% | 0,20 |
> | 1331 | Donchian + GPS médias + Pullback + Tendência + Onda | **+294% · −53,4%** | +61% · −11,4% | +37% | −7,0% | 3,5 | 1,47 → 1,39 | +26% | 0,24 |
> | 1332 | GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+207% · −36,1%** | +42% · −6,8% | +26% | −5,9% | 2,2 | 1,59 → 1,60 | +21% | 0,11 |
> | 1333 | ADX + Donchian + GPS médias + 1ª vela 80 ⚠️ | **+269% · −50,4%** | +70% · −13,5% | +38% | −7,0% | 3,6 | 1,30 → 1,60 | +29% | 0,26 |
> | 1334 | Donchian + GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+304% · −43,8%** | +56% · −9,1% | +31% | −7,7% | 2,4 | 1,64 → 1,53 | +22% | 0,23 |
> | 1335 | VWAP + Pôr do sol + Pullback + Bollinger + Tendência | **+193% · −33,0%** | +41% · −6,0% | +28% | −4,5% | 3,3 | 1,73 → 1,34 | +18% | 0,10 |
> | 1336 | Donchian + IFR + MACD + Pôr do sol + Rompe 200 | **+227% · −31,3%** | +46% · −6,2% | +30% | −5,8% | 2,9 | 1,41 → 1,56 | +23% | 0,18 |
> | 1337 | Donchian + GPS médias + Quinta + Bollinger ⚠️ | **+231% · −34,7%** | +56% · −9,3% | +30% | −6,4% | 2,8 | 1,76 → 1,41 | +20% | 0,08 |
> | 1338 | GPS médias + Pôr do sol + Pullback + Tendência + Onda | **+223% · −40,6%** | +48% · −7,5% | +32% | −5,5% | 3,5 | 1,43 → 1,40 | +22% | 0,06 |
> | 1339 | Donchian + GPS médias + Pôr do sol + Rompe 200 + Tendência | **+253% · −49,4%** | +53% · −9,9% | +32% | −5,1% | 3,8 | 1,76 → 1,28 | +19% | 0,17 |
> | 1340 | GPS médias + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+175% · −35,8%** | +40% · −6,9% | +27% | −3,9% | 3,7 | 1,90 → 1,25 | +19% | 0,05 |
> | 1341 | GPS médias + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+202% · −33,3%** | +43% · −6,3% | +29% | −6,9% | 2,3 | 1,64 → 1,54 | +25% | −0,04 |
> | 1342 | ADX + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+256% · −49,8%** | +63% · −13,5% | +34% | −6,0% | 3,5 | 1,23 → 1,73 | +25% | 0,31 |
> | 1343 | GPS médias + IFR + MACD + Pullback + Rompe 200 | **+228% · −36,0%** | +47% · −6,6% | +31% | −6,9% | 2,6 | 1,73 → 1,45 | +22% | 0,15 |
> | 1344 | ADX + VWAP + IFR + Bollinger + Tendência | **+321% · −52,7%** | +59% · −10,7% | +36% | −8,0% | 2,9 | 1,37 → 1,66 | +23% | 0,33 |
> | 1345 | Donchian + GPS médias + IFR + MACD + Bollinger | **+360% · −46,7%** | +64% · −10,2% | +36% | −9,3% | 2,5 | 1,52 → 1,56 | +26% | 0,37 |
> | 1346 | ADX + Donchian + MACD + 1ª vela 80 + Bollinger ⚠️ | **+349% · −41,6%** | +61% · −7,8% | +34% | −6,0% | 3,6 | 1,17 → 1,86 | +24% | 0,27 |
> | 1347 | BB explosão + GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+284% · −57,0%** | +58% · −12,6% | +34% | −7,5% | 2,9 | 1,54 → 1,46 | +22% | 0,31 |
> | 1348 | Donchian + GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+250% · −50,5%** | +53% · −10,3% | +32% | −5,1% | 3,8 | 1,81 → 1,26 | +18% | 0,16 |
> | 1349 | ADX + IFR + Pôr do sol + Rompe 200 | **+162% · −31,4%** | +45% · −7,9% | +29% | −4,7% | 3,4 | 1,21 → 1,83 | +20% | 0,08 |
> | 1350 | MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+172% · −29,5%** | +45% · −7,0% | +32% | −6,7% | 2,9 | 1,40 → 1,60 | +26% | 0,06 |

> [!example]- Combinações 1351 a 1380 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1351 | BB explosão + MACD + Pullback + Bollinger + Tendência | **+241% · −55,6%** | +49% · −11,9% | +32% | −6,8% | 2,8 | 1,62 → 1,45 | +19% | 0,22 |
> | 1352 | ADX + GPS médias + MACD + Pullback | **+203% · −44,5%** | +55% · −11,7% | +33% | −6,6% | 3,2 | 1,40 → 1,50 | +27% | 0,11 |
> | 1353 | BB explosão + IFR + 1ª vela 80 + Bollinger ⚠️ | **+222% · −36,0%** | +54% · −9,3% | +32% | −7,4% | 2,6 | 1,35 → 1,84 | +23% | 0,24 |
> | 1354 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+118% · −33,9%** | +36% · −8,4% | +26% | −4,6% | 2,8 | 1,45 → 1,55 | +18% | −0,09 |
> | 1355 | BB explosão + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+231% · −36,8%** | +47% · −7,3% | +32% | −7,6% | 2,6 | 1,43 → 1,69 | +23% | 0,10 |
> | 1356 | ADX + BB explosão + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+235% · −47,0%** | +51% · −8,7% | +32% | −4,3% | 4,4 | 1,10 → 1,87 | +23% | 0,11 |
> | 1357 | ADX + GPS médias + IFR + MACD + Pôr do sol | **+263% · −44,0%** | +55% · −8,8% | +33% | −5,7% | 3,6 | 1,25 → 1,67 | +26% | 0,17 |
> | 1358 | ADX + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+205% · −36,5%** | +44% · −6,4% | +29% | −4,3% | 3,9 | 1,12 → 1,89 | +19% | 0,09 |
> | 1359 | VWAP + Donchian + 1ª vela 80 + Pullback + Tendência ⚠️ | **+267% · −53,6%** | +53% · −12,3% | +34% | −7,1% | 3,0 | 1,59 → 1,41 | +20% | 0,17 |
> | 1360 | Donchian + BB explosão + Pôr do sol + Quinta + Tendência ⚠️ | **+200% · −58,1%** | +47% · −12,9% | +30% | −4,6% | 3,8 | 1,56 → 1,34 | +16% | 0,12 |
> | 1361 | Pôr do sol + Rompe 200 + Bollinger | **+72% · −13,0%** | +30% · −3,0% | +20% | −2,4% | 2,9 | 1,56 → 1,44 | +18% | −0,01 |
> | 1362 | GPS médias + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+204% · −35,1%** | +42% · −6,8% | +26% | −5,9% | 2,2 | 1,66 → 1,56 | +22% | 0,08 |
> | 1363 | Donchian + IFR + MACD + Pôr do sol | **+212% · −30,2%** | +53% · −8,0% | +33% | −6,5% | 3,1 | 1,33 → 1,63 | +24% | 0,20 |
> | 1364 | ADX + BB explosão + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+260% · −69,8%** | +62% · −17,3% | +37% | −6,7% | 3,6 | 1,34 → 1,50 | +24% | 0,31 |
> | 1365 | GPS médias + IFR + Pôr do sol + Rompe 200 | **+160% · −28,1%** | +44% · −6,8% | +28% | −5,5% | 2,8 | 1,70 → 1,41 | +21% | 0,12 |
> | 1366 | BB explosão + GPS médias + IFR + Quinta + Pullback ⚠️ | **+200% · −51,8%** | +46% · −11,0% | +30% | −5,6% | 3,0 | 1,75 → 1,36 | +17% | 0,07 |
> | 1367 | ADX + 1ª vela 80 + Pullback ⚠️ | **+143% · −30,9%** | +52% · −9,5% | +33% | −5,6% | 3,5 | 1,19 → 1,81 | +20% | −0,05 |
> | 1368 | IFR + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+254% · −31,9%** | +46% · −5,9% | +30% | −7,0% | 2,5 | 1,37 → 1,87 | +24% | 0,23 |
> | 1369 | GPS médias + MACD + Pullback + Tendência | **+214% · −44,1%** | +55% · −11,2% | +36% | −7,0% | 3,3 | 1,75 → 1,33 | +23% | 0,16 |
> | 1370 | ADX + GPS médias + Pullback + Rompe 200 | **+173% · −44,2%** | +49% · −11,7% | +30% | −5,0% | 3,4 | 1,59 → 1,35 | +20% | 0,12 |
> | 1371 | IFR + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+267% · −37,4%** | +50% · −7,1% | +35% | −6,7% | 3,2 | 1,23 → 1,80 | +28% | 0,05 |
> | 1372 | ADX + MACD + Pôr do sol + Bollinger + Tendência | **+281% · −46,7%** | +52% · −9,2% | +32% | −7,1% | 2,8 | 1,34 → 1,77 | +24% | 0,21 |
> | 1373 | ADX + MACD + Pôr do sol + Pullback + Rompe 200 | **+159% · −35,6%** | +38% · −6,1% | +26% | −4,3% | 3,1 | 1,33 → 1,65 | +19% | −0,01 |
> | 1374 | Donchian + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+358% · −41,0%** | +61% · −8,1% | +36% | −7,0% | 3,3 | 1,25 → 1,72 | +31% | 0,26 |
> | 1375 | VWAP + IFR + Bollinger + Tendência | **+230% · −38,0%** | +55% · −9,6% | +35% | −8,0% | 2,7 | 1,51 → 1,49 | +22% | 0,33 |
> | 1376 | ADX + VWAP + Quinta + Pullback + Tendência ⚠️ | **+197% · −51,8%** | +45% · −10,3% | +30% | −5,6% | 3,1 | 1,50 → 1,42 | +19% | 0,08 |
> | 1377 | 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+131% · −32,6%** | +47% · −11,0% | +33% | −7,4% | 2,7 | 1,54 → 1,48 | +23% | 0,13 |
> | 1378 | ADX + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+255% · −41,0%** | +50% · −7,6% | +33% | −5,3% | 3,8 | 1,10 → 1,95 | +22% | 0,10 |
> | 1379 | Donchian + BB explosão + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+245% · −59,6%** | +54% · −13,1% | +33% | −6,4% | 3,2 | 1,49 → 1,41 | +18% | 0,28 |
> | 1380 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+205% · −33,2%** | +43% · −6,3% | +29% | −7,1% | 2,3 | 1,57 → 1,57 | +26% | −0,01 |

> [!example]- Combinações 1381 a 1410 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1381 | Pullback + Tendência | **+99% · −25,6%** | +53% · −12,0% | +37% | −7,6% | 3,2 | 2,03 → 1,26 | +16% | 0,01 |
> | 1382 | ADX + IFR + 1ª vela 80 ⚠️ | **+192% · −33,8%** | +64% · −10,7% | +38% | −6,0% | 4,3 | 1,03 → 2,01 | +23% | 0,19 |
> | 1383 | BB explosão + Pôr do sol + Bollinger + Tendência | **+173% · −47,6%** | +47% · −12,1% | +29% | −5,7% | 2,9 | 1,54 → 1,44 | +17% | 0,15 |
> | 1384 | ADX + VWAP + IFR + Pullback + Rompe 200 | **+197% · −40,6%** | +44% · −7,4% | +29% | −5,2% | 3,2 | 1,38 → 1,52 | +18% | 0,12 |
> | 1385 | Donchian + IFR + Pôr do sol + Tendência + Onda | **+302% · −41,5%** | +58% · −8,2% | +36% | −7,3% | 3,2 | 1,31 → 1,63 | +29% | 0,21 |
> | 1386 | VWAP + Donchian + IFR + Pôr do sol + Tendência | **+263% · −45,5%** | +54% · −9,6% | +34% | −6,8% | 3,2 | 1,49 → 1,42 | +20% | 0,23 |
> | 1387 | ADX + BB explosão + IFR + Rompe 200 + Bollinger | **+249% · −50,5%** | +52% · −10,4% | +30% | −5,4% | 3,2 | 1,26 → 1,72 | +21% | 0,27 |
> | 1388 | VWAP + IFR + Pullback + Tendência | **+192% · −37,7%** | +50% · −9,1% | +35% | −7,2% | 3,1 | 1,69 → 1,37 | +18% | 0,15 |
> | 1389 | Donchian + GPS médias + Pôr do sol + Pullback + Rompe 200 | **+210% · −41,5%** | +45% · −8,6% | +28% | −4,4% | 3,4 | 1,91 → 1,24 | +17% | 0,04 |
> | 1390 | Pôr do sol + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+211% · −32,1%** | +43% · −5,9% | +31% | −5,6% | 3,3 | 1,28 → 1,68 | +26% | 0,04 |
> | 1391 | BB explosão + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+195% · −49,9%** | +44% · −10,4% | +30% | −6,3% | 2,8 | 1,67 → 1,42 | +16% | 0,17 |
> | 1392 | IFR + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+198% · −25,9%** | +40% · −4,1% | +27% | −3,7% | 3,8 | 1,08 → 1,98 | +21% | 0,02 |
> | 1393 | BB explosão + IFR + Pôr do sol + Rompe 200 + Tendência | **+198% · −48,8%** | +44% · −10,0% | +30% | −6,3% | 2,8 | 1,61 → 1,44 | +17% | 0,17 |
> | 1394 | ADX + VWAP + Pôr do sol + Pullback + Tendência | **+200% · −51,1%** | +45% · −9,7% | +30% | −5,7% | 3,1 | 1,45 → 1,43 | +19% | 0,08 |
> | 1395 | Donchian + GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+292% · −43,4%** | +56% · −8,9% | +34% | −8,7% | 2,4 | 1,59 → 1,51 | +25% | 0,14 |
> | 1396 | BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+176% · −45,8%** | +41% · −9,7% | +28% | −5,2% | 3,0 | 1,46 → 1,45 | +19% | 0,10 |
> | 1397 | GPS médias + Rompe 200 + Bollinger + Tendência | **+222% · −37,1%** | +54% · −8,7% | +32% | −6,3% | 3,0 | 1,86 → 1,32 | +20% | 0,26 |
> | 1398 | ADX + Donchian + BB explosão + Pôr do sol + Tendência | **+251% · −70,6%** | +59% · −18,3% | +34% | −6,5% | 3,3 | 1,36 → 1,50 | +20% | 0,22 |
> | 1399 | GPS médias + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+277% · −36,0%** | +53% · −7,2% | +34% | −7,1% | 3,0 | 1,32 → 1,68 | +30% | 0,11 |
> | 1400 | VWAP + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+179% · −44,4%** | +40% · −9,4% | +29% | −5,7% | 2,9 | 1,61 → 1,41 | +19% | −0,01 |
> | 1401 | IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+196% · −22,8%** | +48% · −5,1% | +34% | −5,6% | 3,7 | 1,14 → 1,87 | +26% | 0,04 |
> | 1402 | ADX + Donchian + GPS médias + Rompe 200 | **+221% · −52,7%** | +62% · −14,4% | +34% | −5,6% | 3,7 | 1,39 → 1,38 | +22% | 0,25 |
> | 1403 | ADX + Donchian + BB explosão + GPS médias + Pullback | **+238% · −69,5%** | +61% · −17,4% | +34% | −5,7% | 3,7 | 1,46 → 1,35 | +18% | 0,26 |
> | 1404 | VWAP + GPS médias + IFR + Pullback + Tendência | **+265% · −52,2%** | +54% · −11,0% | +35% | −7,0% | 3,2 | 1,73 → 1,33 | +19% | 0,20 |
> | 1405 | ADX + Donchian + MACD + Pôr do sol + Tendência | **+293% · −57,0%** | +59% · −12,1% | +36% | −7,5% | 3,0 | 1,34 → 1,61 | +26% | 0,22 |
> | 1406 | GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+158% · −28,1%** | +44% · −6,8% | +28% | −5,5% | 2,8 | 1,78 → 1,37 | +20% | 0,12 |
> | 1407 | Donchian + Quinta + Bollinger + Tendência + Onda ⚠️ | **+295% · −38,8%** | +54% · −7,5% | +33% | −6,5% | 3,1 | 1,33 → 1,61 | +28% | 0,12 |
> | 1408 | ADX + Donchian + Pullback + Tendência + Onda | **+310% · −58,4%** | +62% · −12,4% | +38% | −7,6% | 3,2 | 1,31 → 1,61 | +28% | 0,20 |
> | 1409 | MACD + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+186% · −32,8%** | +40% · −5,9% | +29% | −6,3% | 2,6 | 1,47 → 1,54 | +25% | 0,07 |
> | 1410 | BB explosão + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+173% · −47,4%** | +40% · −10,3% | +28% | −5,2% | 3,0 | 1,51 → 1,43 | +18% | 0,06 |

> [!example]- Combinações 1411 a 1440 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1411 | Donchian + BB explosão + Bollinger + Tendência | **+246% · −61,0%** | +63% · −17,9% | +36% | −7,1% | 3,2 | 1,54 → 1,39 | +16% | 0,43 |
> | 1412 | Donchian + MACD + Rompe 200 + Bollinger + Tendência | **+297% · −43,1%** | +54% · −9,1% | +33% | −7,6% | 2,7 | 1,59 → 1,46 | +22% | 0,31 |
> | 1413 | ADX + MACD + Pôr do sol + Pullback | **+146% · −32,7%** | +42% · −7,2% | +28% | −4,7% | 3,3 | 1,23 → 1,73 | +18% | −0,04 |
> | 1414 | GPS médias + MACD + Bollinger + Tendência | **+252% · −40,0%** | +60% · −9,2% | +36% | −7,9% | 2,9 | 1,58 → 1,42 | +26% | 0,37 |
> | 1415 | ADX + Donchian + BB explosão + Pôr do sol + Bollinger | **+255% · −59,9%** | +55% · −12,9% | +30% | −4,2% | 4,1 | 1,21 → 1,63 | +20% | 0,16 |
> | 1416 | Donchian + GPS médias + Bollinger + Tendência + Onda | **+343% · −49,9%** | +65% · −9,7% | +37% | −7,2% | 3,4 | 1,36 → 1,47 | +29% | 0,32 |
> | 1417 | ADX + BB explosão + IFR + Tendência | **+239% · −64,9%** | +65% · −19,6% | +39% | −9,1% | 2,9 | 1,36 → 1,62 | +23% | 0,40 |
> | 1418 | GPS médias + Pôr do sol + Tendência | **+151% · −35,0%** | +54% · −11,2% | +34% | −5,7% | 3,7 | 1,74 → 1,27 | +22% | 0,07 |
> | 1419 | BB explosão + IFR + MACD + Bollinger + Tendência | **+290% · −54,1%** | +56% · −11,1% | +35% | −8,3% | 2,7 | 1,44 → 1,56 | +23% | 0,40 |
> | 1420 | BB explosão + Quinta + Bollinger + Tendência ⚠️ | **+170% · −49,3%** | +46% · −12,9% | +29% | −5,6% | 2,9 | 1,62 → 1,41 | +16% | 0,15 |
> | 1421 | ADX + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+205% · −40,0%** | +43% · −7,4% | +26% | −4,1% | 3,3 | 1,15 → 1,96 | +20% | 0,09 |
> | 1422 | ADX + BB explosão + IFR + Bollinger | **+234% · −53,8%** | +60% · −13,9% | +34% | −5,7% | 3,7 | 1,17 → 1,78 | +23% | 0,35 |
> | 1423 | Donchian + BB explosão + IFR + Rompe 200 + Tendência | **+262% · −60,8%** | +57% · −14,2% | +35% | −7,5% | 3,0 | 1,58 → 1,40 | +17% | 0,41 |
> | 1424 | Pôr do sol + Pullback + Rompe 200 + Tendência | **+122% · −29,0%** | +36% · −6,8% | +27% | −4,5% | 3,1 | 2,09 → 1,24 | +16% | 0,03 |
> | 1425 | ADX + VWAP + Donchian + IFR + Tendência | **+316% · −61,9%** | +66% · −13,9% | +39% | −8,3% | 3,1 | 1,36 → 1,54 | +23% | 0,35 |
> | 1426 | Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+120% · −29,8%** | +36% · −7,0% | +27% | −4,5% | 3,2 | 2,18 → 1,22 | +15% | 0,04 |
> | 1427 | BB explosão + Pullback + Rompe 200 + Bollinger + Tendência | **+209% · −51,4%** | +44% · −10,4% | +29% | −5,5% | 2,9 | 1,86 → 1,34 | +14% | 0,17 |
> | 1428 | ADX + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+257% · −45,8%** | +51% · −9,0% | +34% | −6,9% | 3,1 | 1,26 → 1,76 | +26% | 0,11 |
> | 1429 | ADX + GPS médias + MACD + Pôr do sol + Tendência | **+264% · −55,1%** | +56% · −11,5% | +35% | −7,1% | 3,1 | 1,37 → 1,53 | +28% | 0,18 |
> | 1430 | GPS médias + IFR + Pôr do sol + Tendência + Onda | **+272% · −40,1%** | +55% · −7,7% | +35% | −6,9% | 3,3 | 1,33 → 1,55 | +29% | 0,17 |
> | 1431 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+235% · −60,7%** | +52% · −13,7% | +33% | −5,9% | 3,4 | 1,25 → 1,67 | +24% | 0,13 |
> | 1432 | VWAP + IFR + 1ª vela 80 + Tendência ⚠️ | **+217% · −38,4%** | +54% · −9,6% | +36% | −8,0% | 3,0 | 1,38 → 1,55 | +25% | 0,24 |
> | 1433 | ADX + VWAP + Donchian + Quinta + Pullback ⚠️ | **+206% · −51,2%** | +47% · −8,9% | +29% | −4,8% | 3,4 | 1,38 → 1,42 | +16% | 0,06 |
> | 1434 | Donchian + MACD + Pullback + Rompe 200 + Tendência | **+251% · −45,1%** | +50% · −9,8% | +33% | −6,9% | 2,9 | 1,74 → 1,36 | +19% | 0,22 |
> | 1435 | Donchian + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+213% · −28,6%** | +43% · −5,1% | +27% | −5,7% | 2,4 | 1,52 → 1,53 | +21% | 0,11 |
> | 1436 | Donchian + GPS médias + MACD + Pôr do sol + Tendência | **+278% · −51,2%** | +58% · −10,4% | +35% | −6,8% | 3,3 | 1,54 → 1,37 | +24% | 0,24 |
> | 1437 | ADX + BB explosão + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+186% · −49,6%** | +44% · −9,7% | +28% | −4,5% | 3,4 | 1,28 → 1,60 | +19% | 0,08 |
> | 1438 | ADX + BB explosão + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+226% · −59,1%** | +54% · −13,0% | +32% | −6,0% | 3,3 | 1,36 → 1,50 | +22% | 0,15 |
> | 1439 | IFR + Pôr do sol + Pullback + Rompe 200 + Onda | **+162% · −23,9%** | +37% · −4,4% | +27% | −4,3% | 3,3 | 1,29 → 1,64 | +23% | 0,05 |
> | 1440 | Donchian + GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+207% · −42,1%** | +45% · −8,9% | +28% | −4,4% | 3,4 | 1,98 → 1,21 | +16% | 0,06 |

> [!example]- Combinações 1441 a 1470 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1441 | BB explosão + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+173% · −35,0%** | +40% · −6,6% | +27% | −5,6% | 2,6 | 1,40 → 1,67 | +19% | 0,06 |
> | 1442 | ADX + Donchian + BB explosão + IFR + Rompe 200 | **+250% · −60,7%** | +58% · −14,4% | +33% | −5,8% | 3,6 | 1,28 → 1,56 | +19% | 0,31 |
> | 1443 | Donchian + GPS médias + MACD + Quinta + Tendência ⚠️ | **+275% · −52,2%** | +57% · −10,8% | +35% | −6,8% | 3,3 | 1,59 → 1,35 | +23% | 0,22 |
> | 1444 | ADX + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+204% · −40,4%** | +44% · −7,5% | +29% | −5,4% | 3,1 | 1,25 → 1,77 | +23% | 0,05 |
> | 1445 | GPS médias + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+157% · −27,0%** | +37% · −4,8% | +26% | −4,9% | 2,6 | 1,77 → 1,39 | +22% | −0,05 |
> | 1446 | Donchian + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+282% · −35,1%** | +53% · −6,9% | +33% | −7,8% | 2,6 | 1,38 → 1,68 | +27% | 0,27 |
> | 1447 | GPS médias + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+202% · −33,8%** | +43% · −6,5% | +29% | −6,5% | 2,5 | 1,49 → 1,54 | +26% | 0,07 |
> | 1448 | VWAP + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+181% · −42,7%** | +40% · −8,9% | +29% | −5,8% | 2,8 | 1,56 → 1,43 | +20% | 0,05 |
> | 1449 | BB explosão + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+274% · −52,2%** | +55% · −10,4% | +37% | −8,1% | 2,9 | 1,36 → 1,60 | +26% | 0,32 |
> | 1450 | Donchian + MACD + Quinta + Bollinger ⚠️ | **+198% · −27,4%** | +49% · −7,1% | +29% | −6,4% | 2,6 | 1,43 → 1,61 | +23% | 0,12 |
> | 1451 | ADX + VWAP + Donchian + IFR + Bollinger | **+327% · −48,4%** | +62% · −10,3% | +34% | −6,4% | 3,3 | 1,25 → 1,67 | +20% | 0,31 |
> | 1452 | Donchian + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+175% · −35,3%** | +39% · −5,7% | +27% | −3,7% | 3,8 | 1,28 → 1,55 | +21% | −0,03 |
> | 1453 | ADX + VWAP + IFR + Pullback | **+184% · −39,7%** | +50% · −9,5% | +32% | −5,9% | 3,3 | 1,30 → 1,58 | +16% | 0,11 |
> | 1454 | GPS médias + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+330% · −44,5%** | +57% · −9,7% | +34% | −9,4% | 2,3 | 1,45 → 1,73 | +28% | 0,30 |
> | 1455 | ADX + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+258% · −39,9%** | +51% · −7,3% | +33% | −5,0% | 3,9 | 1,04 → 1,97 | +21% | 0,14 |
> | 1456 | ADX + VWAP + IFR + 1ª vela 80 + Tendência ⚠️ | **+297% · −50,2%** | +58% · −9,9% | +37% | −7,7% | 3,1 | 1,26 → 1,70 | +24% | 0,25 |
> | 1457 | VWAP + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+231% · −43,6%** | +47% · −9,0% | +33% | −7,1% | 2,8 | 1,44 → 1,50 | +22% | 0,22 |
> | 1458 | ADX + BB explosão + IFR + Rompe 200 + Tendência | **+253% · −64,1%** | +56% · −15,3% | +35% | −8,2% | 2,7 | 1,42 → 1,57 | +20% | 0,30 |
> | 1459 | GPS médias + Pôr do sol + Pullback | **+105% · −23,9%** | +41% · −6,9% | +26% | −3,5% | 3,9 | 1,97 → 1,15 | +18% | −0,14 |
> | 1460 | IFR + MACD + Pullback + Bollinger + Onda | **+264% · −33,7%** | +48% · −6,2% | +32% | −5,9% | 3,2 | 1,20 → 1,82 | +25% | 0,15 |
> | 1461 | IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+236% · −29,5%** | +53% · −7,0% | +33% | −8,0% | 2,6 | 1,28 → 1,94 | +24% | 0,28 |
> | 1462 | GPS médias + IFR + MACD + Rompe 200 + Tendência | **+273% · −47,6%** | +55% · −9,3% | +35% | −8,1% | 2,8 | 1,60 → 1,42 | +24% | 0,34 |
> | 1463 | ADX + GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+204% · −46,7%** | +46% · −9,4% | +29% | −4,6% | 3,4 | 1,28 → 1,58 | +24% | 0,07 |
> | 1464 | ADX + BB explosão + GPS médias + IFR + Quinta ⚠️ | **+220% · −61,1%** | +55% · −14,3% | +32% | −5,4% | 3,6 | 1,31 → 1,50 | +22% | 0,21 |
> | 1465 | IFR + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+210% · −27,9%** | +43% · −4,8% | +30% | −5,5% | 3,2 | 1,23 → 1,78 | +26% | 0,10 |
> | 1466 | BB explosão + Pôr do sol + Pullback + Tendência | **+141% · −49,7%** | +42% · −13,1% | +29% | −4,8% | 3,4 | 1,75 → 1,28 | +14% | 0,03 |
> | 1467 | Donchian + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+366% · −35,7%** | +60% · −7,0% | +35% | −6,9% | 3,3 | 1,16 → 1,90 | +28% | 0,23 |
> | 1468 | Donchian + GPS médias + Tendência | **+222% · −49,9%** | +76% · −18,1% | +43% | −7,7% | 3,9 | 1,68 → 1,27 | +21% | 0,48 |
> | 1469 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+218% · −38,1%** | +56% · −9,2% | +32% | −7,6% | 2,5 | 1,50 → 1,49 | +25% | 0,08 |
> | 1470 | ADX + Donchian + IFR + MACD + Rompe 200 | **+290% · −44,8%** | +58% · −8,7% | +35% | −6,7% | 3,2 | 1,26 → 1,68 | +25% | 0,28 |

> [!example]- Combinações 1471 a 1500 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1471 | GPS médias + Quinta + Tendência ⚠️ | **+148% · −36,4%** | +53% · −11,8% | +34% | −5,6% | 3,8 | 1,82 → 1,23 | +21% | 0,03 |
> | 1472 | ADX + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+208% · −39,3%** | +43% · −7,2% | +26% | −3,8% | 3,5 | 1,08 → 2,00 | +19% | 0,10 |
> | 1473 | ADX + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+282% · −37,9%** | +54% · −7,2% | +35% | −5,7% | 3,8 | 1,07 → 1,95 | +24% | 0,08 |
> | 1474 | ADX + VWAP + GPS médias + IFR + Tendência | **+286% · −62,8%** | +63% · −14,8% | +38% | −8,1% | 3,1 | 1,39 → 1,47 | +24% | 0,33 |
> | 1475 | Donchian + Quinta + Rompe 200 + Tendência ⚠️ | **+181% · −42,6%** | +48% · −9,4% | +31% | −5,8% | 3,1 | 1,81 → 1,31 | +17% | 0,13 |
> | 1476 | Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+109% · −15,5%** | +40% · −4,2% | +25% | −4,0% | 3,1 | 1,14 → 2,08 | +15% | 0,10 |
> | 1477 | ADX + Donchian + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+304% · −59,2%** | +61% · −12,9% | +33% | −5,7% | 3,6 | 1,19 → 1,73 | +23% | 0,28 |
> | 1478 | Donchian + BB explosão + IFR + Pôr do sol + Rompe 200 | **+202% · −46,0%** | +46% · −9,2% | +29% | −5,4% | 3,0 | 1,44 → 1,43 | +17% | 0,17 |
> | 1479 | ADX + Donchian + IFR + MACD | **+274% · −45,7%** | +68% · −10,6% | +39% | −7,3% | 3,6 | 1,18 → 1,73 | +24% | 0,36 |
> | 1480 | ADX + Donchian + Quinta + Rompe 200 ⚠️ | **+173% · −36,8%** | +49% · −8,2% | +29% | −5,0% | 3,2 | 1,33 → 1,54 | +20% | 0,05 |
> | 1481 | ADX + VWAP + Quinta + Pullback + Bollinger ⚠️ | **+184% · −36,8%** | +41% · −6,2% | +26% | −4,5% | 2,9 | 1,38 → 1,55 | +15% | 0,11 |
> | 1482 | ADX + IFR + Quinta + Pullback + Onda ⚠️ | **+228% · −34,5%** | +47% · −6,6% | +31% | −5,4% | 3,4 | 1,15 → 1,85 | +21% | 0,02 |
> | 1483 | Donchian + BB explosão + IFR + Pôr do sol | **+190% · −44,0%** | +53% · −11,2% | +32% | −6,1% | 3,1 | 1,37 → 1,49 | +18% | 0,18 |
> | 1484 | BB explosão + GPS médias + Pôr do sol + Pullback + Tendência | **+199% · −58,6%** | +48% · −13,5% | +31% | −4,3% | 4,2 | 1,75 → 1,22 | +16% | 0,08 |
> | 1485 | ADX + BB explosão + Pullback + Rompe 200 + Tendência | **+209% · −65,4%** | +49% · −15,9% | +31% | −6,6% | 2,8 | 1,57 → 1,42 | +16% | 0,17 |
> | 1486 | ADX + Quinta + Rompe 200 + Tendência ⚠️ | **+163% · −42,2%** | +46% · −10,0% | +30% | −7,0% | 2,5 | 1,49 → 1,53 | +21% | 0,08 |
> | 1487 | ADX + GPS médias + Rompe 200 + Bollinger | **+207% · −42,4%** | +55% · −11,0% | +30% | −5,4% | 3,1 | 1,36 → 1,49 | +23% | 0,25 |
> | 1488 | Donchian + Pullback + Bollinger + Onda | **+226% · −29,3%** | +54% · −7,0% | +31% | −5,8% | 3,2 | 1,28 → 1,64 | +25% | 0,12 |
> | 1489 | Donchian + BB explosão + Pullback + Tendência | **+208% · −64,5%** | +58% · −18,7% | +36% | −6,5% | 3,5 | 1,69 → 1,28 | +13% | 0,30 |
> | 1490 | Donchian + BB explosão + IFR + Quinta + Rompe 200 ⚠️ | **+200% · −47,5%** | +46% · −9,7% | +29% | −5,4% | 3,0 | 1,50 → 1,41 | +16% | 0,18 |
> | 1491 | Donchian + BB explosão + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+244% · −41,3%** | +49% · −8,0% | +29% | −6,4% | 2,5 | 1,42 → 1,63 | +19% | 0,09 |
> | 1492 | Donchian + Pôr do sol + Rompe 200 + Tendência | **+184% · −38,9%** | +49% · −9,1% | +31% | −5,9% | 3,1 | 1,74 → 1,33 | +18% | 0,15 |
> | 1493 | Donchian + BB explosão + GPS médias + IFR + Pullback | **+262% · −61,5%** | +60% · −14,6% | +35% | −7,4% | 3,0 | 1,65 → 1,36 | +17% | 0,28 |
> | 1494 | BB explosão + IFR + 1ª vela 80 + Quinta ⚠️ | **+160% · −30,5%** | +44% · −7,4% | +30% | −6,2% | 2,7 | 1,32 → 1,74 | +22% | −0,01 |
> | 1495 | ADX + Donchian + 1ª vela 80 + Rompe 200 ⚠️ | **+220% · −39,0%** | +57% · −8,4% | +33% | −5,6% | 3,6 | 1,19 → 1,72 | +24% | 0,14 |
> | 1496 | Donchian + Pullback + Tendência + Onda | **+231% · −41,7%** | +58% · −10,1% | +37% | −7,7% | 3,2 | 1,38 → 1,45 | +27% | 0,24 |
> | 1497 | Donchian + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+215% · −39,7%** | +55% · −9,8% | +32% | −7,6% | 2,5 | 1,56 → 1,46 | +24% | 0,01 |
> | 1498 | MACD + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+198% · −35,8%** | +41% · −6,7% | +28% | −6,4% | 2,4 | 1,65 → 1,49 | +22% | 0,14 |
> | 1499 | ADX + 1ª vela 80 + Tendência ⚠️ | **+195% · −42,0%** | +66% · −13,6% | +40% | −9,0% | 3,1 | 1,24 → 1,76 | +30% | 0,17 |
> | 1500 | Donchian + GPS médias + IFR + Rompe 200 | **+237% · −40,6%** | +61% · −9,7% | +35% | −7,6% | 2,9 | 1,66 → 1,37 | +20% | 0,37 |

> [!example]- Combinações 1501 a 1530 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1501 | BB explosão + Quinta + Pullback + Tendência ⚠️ | **+139% · −51,3%** | +41% · −13,8% | +29% | −4,8% | 3,5 | 1,82 → 1,25 | +13% | 0,04 |
> | 1502 | BB explosão + IFR + Tendência | **+170% · −50,6%** | +61% · −18,4% | +39% | −9,5% | 2,8 | 1,51 → 1,44 | +18% | 0,46 |
> | 1503 | Donchian + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+225% · −30,5%** | +46% · −5,7% | +30% | −4,2% | 4,0 | 1,15 → 1,72 | +23% | 0,02 |
> | 1504 | ADX + VWAP + IFR + Quinta + Bollinger ⚠️ | **+235% · −39,2%** | +48% · −7,5% | +29% | −4,7% | 3,5 | 1,18 → 1,75 | +17% | 0,17 |
> | 1505 | MACD + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+201% · −35,8%** | +41% · −6,8% | +28% | −6,4% | 2,3 | 1,57 → 1,52 | +23% | 0,15 |
> | 1506 | ADX + Donchian + BB explosão + GPS médias + IFR | **+266% · −69,4%** | +68% · −17,9% | +38% | −7,1% | 3,5 | 1,33 → 1,48 | +22% | 0,43 |
> | 1507 | IFR + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+270% · −37,4%** | +51% · −7,1% | +35% | −6,7% | 3,2 | 1,19 → 1,81 | +27% | 0,14 |
> | 1508 | ADX + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+210% · −41,7%** | +54% · −10,2% | +34% | −7,8% | 2,8 | 1,32 → 1,70 | +27% | 0,14 |
> | 1509 | GPS médias + Pullback + Rompe 200 + Tendência | **+184% · −42,9%** | +49% · −11,1% | +32% | −5,5% | 3,5 | 2,01 → 1,18 | +17% | 0,15 |
> | 1510 | ADX + VWAP + IFR + Quinta + Tendência ⚠️ | **+244% · −50,7%** | +52% · −10,1% | +34% | −7,2% | 2,9 | 1,35 → 1,58 | +22% | 0,15 |
> | 1511 | IFR + Pôr do sol + Pullback + Onda | **+149% · −20,4%** | +41% · −4,7% | +29% | −4,7% | 3,5 | 1,18 → 1,76 | +22% | −0,01 |
> | 1512 | ADX + Donchian + GPS médias + MACD + Bollinger | **+337% · −53,0%** | +66% · −10,6% | +35% | −7,3% | 3,1 | 1,32 → 1,58 | +27% | 0,33 |
> | 1513 | ADX + IFR + Quinta ⚠️ | **+146% · −29,7%** | +53% · −9,9% | +33% | −6,3% | 3,2 | 1,16 → 1,89 | +19% | 0,11 |
> | 1514 | ADX + BB explosão + GPS médias + Quinta + Tendência ⚠️ | **+218% · −70,5%** | +55% · −17,9% | +34% | −6,1% | 3,4 | 1,42 → 1,37 | +20% | 0,22 |
> | 1515 | IFR + MACD + Rompe 200 + Bollinger | **+181% · −29,3%** | +45% · −6,8% | +29% | −6,6% | 2,5 | 1,39 → 1,69 | +25% | 0,25 |
> | 1516 | BB explosão + GPS médias + IFR + Tendência | **+222% · −61,5%** | +63% · −18,5% | +39% | −7,8% | 3,3 | 1,56 → 1,34 | +19% | 0,47 |
> | 1517 | Donchian + MACD + Quinta + Tendência ⚠️ | **+209% · −43,4%** | +54% · −11,8% | +35% | −7,4% | 2,9 | 1,51 → 1,41 | +23% | 0,22 |
> | 1518 | Donchian + GPS médias + IFR + MACD + Quinta ⚠️ | **+280% · −42,0%** | +56% · −8,9% | +34% | −8,3% | 2,6 | 1,51 → 1,48 | +25% | 0,20 |
> | 1519 | Pullback + Rompe 200 + Bollinger + Tendência + Onda | **+225% · −36,4%** | +44% · −6,8% | +30% | −6,6% | 2,6 | 1,46 → 1,52 | +25% | 0,15 |
> | 1520 | MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+175% · −29,3%** | +45% · −7,0% | +32% | −6,7% | 2,9 | 1,33 → 1,62 | +26% | 0,16 |
> | 1521 | 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+83% · −27,6%** | +34% · −9,2% | +25% | −4,7% | 2,6 | 1,56 → 1,43 | +19% | −0,01 |
> | 1522 | IFR + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+214% · −35,1%** | +44% · −6,5% | +31% | −6,1% | 3,0 | 1,27 → 1,71 | +26% | 0,06 |
> | 1523 | ADX + Donchian + GPS médias | **+208% · −50,9%** | +77% · −18,6% | +39% | −6,8% | 3,9 | 1,31 → 1,42 | +25% | 0,35 |
> | 1524 | ADX + Donchian + MACD + Pôr do sol + Quinta ⚠️ | **+219% · −39,9%** | +47% · −6,6% | +29% | −4,2% | 3,9 | 1,16 → 1,70 | +19% | 0,06 |
> | 1525 | ADX + Pullback + Bollinger + Tendência + Onda | **+305% · −47,8%** | +56% · −9,4% | +34% | −7,8% | 2,8 | 1,30 → 1,75 | +27% | 0,18 |
> | 1526 | GPS médias + Quinta + Bollinger + Tendência + Onda ⚠️ | **+263% · −39,1%** | +52% · −6,9% | +32% | −6,1% | 3,2 | 1,35 → 1,49 | +27% | 0,10 |
> | 1527 | Donchian + BB explosão + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+251% · −45,2%** | +53% · −9,4% | +32% | −7,4% | 2,6 | 1,41 → 1,58 | +20% | 0,27 |
> | 1528 | Donchian + IFR + MACD + 1ª vela 80 ⚠️ | **+266% · −32,9%** | +61% · −8,0% | +37% | −9,0% | 2,7 | 1,31 → 1,73 | +28% | 0,33 |
> | 1529 | ADX + GPS médias + Pullback + Tendência + Onda | **+277% · −56,6%** | +59% · −11,5% | +37% | −7,4% | 3,2 | 1,33 → 1,52 | +30% | 0,18 |
> | 1530 | ADX + BB explosão + MACD + Pullback + Bollinger | **+233% · −57,8%** | +49% · −12,5% | +30% | −5,5% | 3,1 | 1,28 → 1,65 | +22% | 0,18 |

> [!example]- Combinações 1531 a 1560 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1531 | ADX + Donchian + BB explosão + GPS médias + Tendência | **+258% · −77,7%** | +69% · −21,7% | +39% | −7,6% | 3,4 | 1,41 → 1,37 | +20% | 0,45 |
> | 1532 | ADX + BB explosão + GPS médias + Pôr do sol + Tendência | **+221% · −69,6%** | +56% · −17,3% | +33% | −6,1% | 3,4 | 1,38 → 1,40 | +21% | 0,20 |
> | 1533 | Donchian + GPS médias + Pullback | **+181% · −37,8%** | +63% · −12,5% | +35% | −6,5% | 3,4 | 1,84 → 1,22 | +17% | 0,13 |
> | 1534 | GPS médias + MACD + Pullback + Bollinger | **+202% · −32,2%** | +50% · −8,0% | +30% | −7,7% | 2,3 | 1,75 → 1,46 | +23% | 0,12 |
> | 1535 | ADX + GPS médias + MACD + Quinta + Bollinger ⚠️ | **+254% · −42,9%** | +52% · −8,3% | +30% | −5,6% | 3,1 | 1,29 → 1,63 | +26% | 0,18 |
> | 1536 | GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+236% · −40,1%** | +59% · −10,2% | +38% | −9,0% | 2,8 | 1,45 → 1,46 | +30% | 0,29 |
> | 1537 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+275% · −33,1%** | +49% · −6,2% | +30% | −7,0% | 2,4 | 1,34 → 1,81 | +24% | 0,16 |
> | 1538 | ADX + BB explosão + GPS médias + Pôr do sol + Pullback | **+187% · −59,0%** | +48% · −13,3% | +29% | −4,6% | 3,5 | 1,42 → 1,36 | +19% | 0,06 |
> | 1539 | ADX + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+158% · −35,6%** | +37% · −6,1% | +23% | −3,8% | 2,7 | 1,27 → 1,83 | +18% | 0,07 |
> | 1540 | Donchian + MACD + Pôr do sol + Tendência | **+211% · −43,3%** | +54% · −11,8% | +35% | −7,5% | 2,9 | 1,45 → 1,43 | +24% | 0,26 |
> | 1541 | Pullback + Bollinger + Tendência + Onda | **+210% · −32,8%** | +51% · −7,7% | +33% | −7,6% | 2,7 | 1,38 → 1,60 | +29% | 0,15 |
> | 1542 | IFR + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+184% · −26,1%** | +39% · −4,4% | +28% | −6,0% | 2,6 | 1,32 → 1,77 | +24% | 0,08 |
> | 1543 | ADX + BB explosão + IFR + Pôr do sol + Quinta ⚠️ | **+188% · −48,7%** | +44% · −9,1% | +28% | −4,7% | 3,3 | 1,19 → 1,74 | +21% | 0,07 |
> | 1544 | ADX + IFR + MACD + Rompe 200 + Bollinger | **+275% · −43,8%** | +52% · −8,6% | +31% | −6,3% | 2,9 | 1,21 → 1,85 | +23% | 0,25 |
> | 1545 | Donchian + GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+249% · −36,7%** | +49% · −7,4% | +28% | −5,7% | 2,6 | 1,75 → 1,38 | +19% | 0,10 |
> | 1546 | ADX + IFR + MACD + Rompe 200 + Tendência | **+284% · −49,9%** | +56% · −10,8% | +36% | −9,1% | 2,5 | 1,38 → 1,67 | +27% | 0,28 |
> | 1547 | BB explosão + GPS médias + Quinta + Pullback + Tendência ⚠️ | **+197% · −59,8%** | +47% · −14,0% | +31% | −4,5% | 4,1 | 1,80 → 1,20 | +15% | 0,10 |
> | 1548 | IFR + MACD + Tendência | **+184% · −34,8%** | +61% · −11,8% | +41% | −11,1% | 2,6 | 1,44 → 1,54 | +30% | 0,48 |
> | 1549 | BB explosão + GPS médias + Pôr do sol + Bollinger + Tendência | **+235% · −56,9%** | +52% · −11,9% | +31% | −5,5% | 3,3 | 1,60 → 1,33 | +18% | 0,19 |
> | 1550 | ADX + GPS médias + Rompe 200 + Tendência | **+218% · −54,6%** | +60% · −15,3% | +35% | −7,8% | 2,9 | 1,52 → 1,40 | +23% | 0,25 |
> | 1551 | ADX + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+209% · −44,4%** | +45% · −7,9% | +30% | −6,3% | 2,8 | 1,31 → 1,68 | +23% | 0,11 |
> | 1552 | ADX + IFR + MACD + Tendência | **+268% · −49,8%** | +65% · −12,7% | +41% | −10,3% | 2,7 | 1,31 → 1,71 | +29% | 0,38 |
> | 1553 | Donchian + BB explosão + IFR + 1ª vela 80 ⚠️ | **+237% · −43,1%** | +61% · −11,1% | +36% | −8,5% | 2,8 | 1,34 → 1,63 | +22% | 0,31 |
> | 1554 | BB explosão + MACD + Quinta + Pullback + Bollinger ⚠️ | **+166% · −37,0%** | +38% · −6,1% | +25% | −5,4% | 2,3 | 1,57 → 1,50 | +18% | 0,05 |
> | 1555 | VWAP + IFR + 1ª vela 80 + Pullback ⚠️ | **+167% · −31,1%** | +44% · −7,4% | +31% | −7,9% | 2,3 | 1,46 → 1,62 | +20% | 0,04 |
> | 1556 | Donchian + Tendência | **+156% · −40,1%** | +79% · −20,1% | +45% | −10,3% | 3,2 | 1,64 → 1,33 | +20% | 0,62 |
> | 1557 | Donchian + Pôr do sol + Bollinger + Tendência + Onda | **+298% · −38,8%** | +55% · −7,5% | +33% | −6,4% | 3,1 | 1,28 → 1,62 | +28% | 0,16 |
> | 1558 | Donchian + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+224% · −39,6%** | +45% · −6,5% | +30% | −5,3% | 3,2 | 1,23 → 1,69 | +24% | −0,04 |
> | 1559 | Donchian + GPS médias + IFR + MACD + Pôr do sol | **+283% · −42,0%** | +57% · −8,9% | +34% | −8,3% | 2,6 | 1,46 → 1,50 | +26% | 0,22 |
> | 1560 | GPS médias + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+320% · −46,3%** | +58% · −9,5% | +35% | −7,0% | 3,2 | 1,26 → 1,61 | +26% | 0,25 |

> [!example]- Combinações 1561 a 1590 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1561 | ADX + VWAP + GPS médias + Pullback + Tendência | **+247% · −61,5%** | +56% · −14,3% | +34% | −6,6% | 3,3 | 1,52 → 1,34 | +20% | 0,20 |
> | 1562 | ADX + IFR + MACD + Bollinger | **+257% · −41,3%** | +60% · −10,3% | +35% | −6,8% | 3,2 | 1,12 → 1,92 | +23% | 0,34 |
> | 1563 | ADX + Pôr do sol + Rompe 200 + Tendência | **+166% · −40,4%** | +46% · −9,3% | +30% | −6,7% | 2,6 | 1,42 → 1,55 | +23% | 0,07 |
> | 1564 | ADX + GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+311% · −48,8%** | +61% · −9,6% | +37% | −7,7% | 3,1 | 1,21 → 1,74 | +30% | 0,28 |
> | 1565 | ADX + Donchian + IFR + Bollinger + Onda | **+370% · −45,0%** | +66% · −9,2% | +36% | −6,4% | 3,7 | 1,08 → 1,86 | +25% | 0,26 |
> | 1566 | ADX + Donchian + MACD + 1ª vela 80 + Quinta ⚠️ | **+267% · −39,9%** | +53% · −7,0% | +33% | −5,5% | 3,6 | 1,14 → 1,78 | +22% | 0,09 |
> | 1567 | VWAP + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+180% · −38,1%** | +39% · −7,7% | +28% | −6,9% | 2,2 | 1,52 → 1,54 | +20% | 0,10 |
> | 1568 | Donchian + GPS médias + Pullback + Bollinger + Onda | **+303% · −44,5%** | +57% · −8,2% | +33% | −7,1% | 2,8 | 1,41 → 1,49 | +26% | 0,16 |
> | 1569 | MACD + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+189% · −32,8%** | +40% · −6,0% | +29% | −6,3% | 2,6 | 1,40 → 1,56 | +25% | 0,13 |
> | 1570 | Donchian + BB explosão + GPS médias + Pullback + Tendência | **+252% · −69,5%** | +61% · −17,3% | +36% | −6,0% | 3,9 | 1,70 → 1,23 | +15% | 0,32 |
> | 1571 | ADX + Donchian + MACD + Rompe 200 + Bollinger | **+288% · −42,0%** | +55% · −8,0% | +31% | −5,9% | 3,1 | 1,24 → 1,68 | +24% | 0,22 |
> | 1572 | ADX + Donchian + BB explosão + MACD + Pullback | **+238% · −65,6%** | +55% · −15,8% | +33% | −5,7% | 3,5 | 1,28 → 1,50 | +21% | 0,21 |
> | 1573 | ADX + BB explosão + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+231% · −47,8%** | +51% · −9,4% | +32% | −5,2% | 3,6 | 1,14 → 1,76 | +23% | 0,20 |
> | 1574 | MACD + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+162% · −30,9%** | +37% · −6,3% | +28% | −5,7% | 2,6 | 1,85 → 1,35 | +19% | 0,06 |
> | 1575 | BB explosão + IFR + Rompe 200 + Bollinger | **+170% · −33,3%** | +46% · −8,0% | +28% | −6,2% | 2,5 | 1,45 → 1,54 | +17% | 0,26 |
> | 1576 | BB explosão + IFR + Bollinger | **+157% · −32,3%** | +55% · −10,6% | +32% | −7,2% | 2,6 | 1,36 → 1,64 | +19% | 0,32 |
> | 1577 | Pôr do sol + Quinta + Pullback + Tendência + Onda ⚠️ | **+161% · −27,3%** | +37% · −5,2% | +28% | −5,4% | 2,8 | 1,38 → 1,52 | +24% | 0,01 |
> | 1578 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+207% · −47,2%** | +47% · −9,5% | +28% | −4,5% | 3,5 | 1,23 → 1,61 | +24% | 0,09 |
> | 1579 | ADX + Donchian + Pôr do sol + Rompe 200 | **+176% · −38,0%** | +49% · −7,6% | +29% | −4,6% | 3,4 | 1,25 → 1,57 | +20% | 0,02 |
> | 1580 | ADX + BB explosão + GPS médias + IFR + Pôr do sol | **+223% · −60,3%** | +55% · −13,9% | +32% | −5,4% | 3,6 | 1,26 → 1,52 | +23% | 0,19 |
> | 1581 | Donchian + GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+246% · −36,8%** | +49% · −7,4% | +28% | −5,7% | 2,6 | 1,82 → 1,35 | +18% | 0,11 |
> | 1582 | ADX + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+260% · −44,8%** | +52% · −8,7% | +34% | −6,9% | 3,1 | 1,21 → 1,78 | +25% | 0,15 |
> | 1583 | VWAP + Donchian + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+314% · −47,9%** | +57% · −10,2% | +34% | −8,4% | 2,5 | 1,45 → 1,51 | +22% | 0,31 |
> | 1584 | GPS médias + IFR + MACD + Rompe 200 + Bollinger | **+267% · −41,0%** | +51% · −8,6% | +31% | −8,3% | 2,2 | 1,54 → 1,53 | +25% | 0,29 |
> | 1585 | GPS médias + IFR + Pullback + Onda | **+209% · −31,9%** | +54% · −7,7% | +34% | −7,0% | 3,1 | 1,33 → 1,52 | +29% | 0,13 |
> | 1586 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+134% · −28,5%** | +39% · −6,2% | +26% | −5,3% | 2,4 | 1,48 → 1,50 | +21% | −0,04 |
> | 1587 | Donchian + GPS médias + MACD + Pôr do sol + Pullback | **+240% · −39,2%** | +50% · −7,8% | +31% | −6,7% | 2,7 | 1,65 → 1,38 | +22% | 0,05 |
> | 1588 | Donchian + BB explosão + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+205% · −51,0%** | +46% · −11,6% | +29% | −6,2% | 2,6 | 1,57 → 1,42 | +16% | 0,13 |
> | 1589 | VWAP + GPS médias + IFR + Bollinger + Tendência | **+309% · −48,3%** | +58% · −9,3% | +35% | −8,4% | 2,7 | 1,59 → 1,41 | +22% | 0,34 |
> | 1590 | ADX + VWAP + Donchian + Bollinger + Tendência | **+320% · −61,3%** | +63% · −13,7% | +35% | −7,5% | 3,0 | 1,35 → 1,51 | +22% | 0,35 |

> [!example]- Combinações 1591 a 1620 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1591 | ADX + MACD + 1ª vela 80 + Pullback ⚠️ | **+189% · −37,7%** | +50% · −8,9% | +32% | −6,3% | 3,1 | 1,17 → 1,82 | +22% | 0,02 |
> | 1592 | ADX + BB explosão + MACD + Pullback + Tendência | **+236% · −68,5%** | +53% · −17,3% | +34% | −7,9% | 2,7 | 1,40 → 1,51 | +21% | 0,21 |
> | 1593 | ADX + Donchian + MACD + Bollinger | **+271% · −45,7%** | +64% · −10,6% | +35% | −6,2% | 3,5 | 1,16 → 1,73 | +23% | 0,31 |
> | 1594 | Donchian + BB explosão + IFR + MACD + Tendência | **+282% · −64,4%** | +62% · −15,1% | +38% | −8,7% | 2,9 | 1,40 → 1,45 | +22% | 0,50 |
> | 1595 | GPS médias + IFR | **+134% · −25,8%** | +69% · −13,1% | +40% | −10,0% | 2,7 | 1,58 → 1,40 | +27% | 0,46 |
> | 1596 | ADX + GPS médias + Bollinger | **+193% · −42,2%** | +67% · −14,7% | +34% | −6,2% | 3,4 | 1,27 → 1,55 | +28% | 0,39 |
> | 1597 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+176% · −33,6%** | +40% · −6,3% | +27% | −5,6% | 2,6 | 1,34 → 1,70 | +20% | 0,09 |
> | 1598 | MACD + Pôr do sol + Pullback + Rompe 200 + Tendência | **+165% · −30,9%** | +37% · −6,3% | +28% | −5,8% | 2,6 | 1,77 → 1,37 | +20% | 0,06 |
> | 1599 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+220% · −54,8%** | +51% · −12,0% | +32% | −6,5% | 3,0 | 1,48 → 1,39 | +21% | 0,15 |
> | 1600 | IFR + MACD + Bollinger | **+167% · −25,4%** | +54% · −7,9% | +33% | −7,8% | 2,7 | 1,28 → 1,79 | +26% | 0,35 |
> | 1601 | GPS médias + Pullback + Rompe 200 + Bollinger | **+168% · −28,2%** | +44% · −6,6% | +26% | −5,1% | 2,7 | 2,07 → 1,26 | +17% | 0,12 |
> | 1602 | ADX + VWAP + Donchian + Pôr do sol + Pullback | **+209% · −53,0%** | +47% · −9,1% | +29% | −4,8% | 3,4 | 1,33 → 1,44 | +16% | 0,05 |
> | 1603 | BB explosão + GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+232% · −58,2%** | +51% · −12,5% | +31% | −5,5% | 3,3 | 1,65 → 1,30 | +17% | 0,20 |
> | 1604 | ADX + Donchian + Quinta + Pullback + Onda ⚠️ | **+237% · −45,2%** | +50% · −7,3% | +31% | −4,6% | 4,0 | 1,16 → 1,66 | +21% | 0,02 |
> | 1605 | ADX + IFR + Pôr do sol | **+148% · −30,3%** | +53% · −9,9% | +33% | −5,9% | 3,4 | 1,08 → 1,94 | +18% | 0,07 |
> | 1606 | VWAP + GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+289% · −50,8%** | +58% · −11,2% | +37% | −9,4% | 2,5 | 1,49 → 1,47 | +25% | 0,28 |
> | 1607 | BB explosão + IFR + MACD + Quinta + Tendência ⚠️ | **+221% · −53,2%** | +48% · −11,0% | +33% | −7,5% | 2,7 | 1,42 → 1,48 | +22% | 0,22 |
> | 1608 | Donchian + IFR + Rompe 200 + Bollinger + Onda | **+299% · −36,2%** | +54% · −6,8% | +32% | −6,2% | 3,1 | 1,24 → 1,70 | +28% | 0,23 |
> | 1609 | ADX + Donchian + Quinta ⚠️ | **+160% · −39,0%** | +58% · −12,2% | +32% | −5,7% | 3,5 | 1,22 → 1,62 | +19% | 0,03 |
> | 1610 | Donchian + IFR + Bollinger + Onda | **+282% · −32,6%** | +63% · −8,0% | +36% | −6,7% | 3,4 | 1,15 → 1,77 | +28% | 0,25 |
> | 1611 | VWAP + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+217% · −37,9%** | +44% · −7,4% | +29% | −6,6% | 2,5 | 1,44 → 1,54 | +22% | 0,12 |
> | 1612 | Donchian + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+273% · −40,0%** | +53% · −7,9% | +34% | −6,3% | 3,4 | 1,22 → 1,63 | +30% | 0,07 |
> | 1613 | ADX + Donchian + 1ª vela 80 ⚠️ | **+206% · −40,7%** | +70% · −11,8% | +38% | −6,4% | 3,9 | 1,09 → 1,78 | +24% | 0,16 |
> | 1614 | Donchian + GPS médias + MACD + Quinta + Pullback ⚠️ | **+237% · −41,0%** | +49% · −7,6% | +31% | −6,7% | 2,7 | 1,72 → 1,36 | +21% | 0,05 |
> | 1615 | GPS médias + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+251% · −39,7%** | +49% · −8,2% | +32% | −8,5% | 2,3 | 1,42 → 1,65 | +28% | 0,10 |
> | 1616 | BB explosão + IFR + MACD + Pullback | **+167% · −42,5%** | +46% · −10,8% | +32% | −7,3% | 2,6 | 1,43 → 1,51 | +20% | 0,14 |
> | 1617 | Donchian + GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+337% · −47,2%** | +63% · −10,4% | +37% | −10,3% | 2,4 | 1,43 → 1,59 | +29% | 0,34 |
> | 1618 | ADX + Quinta + Tendência ⚠️ | **+150% · −43,4%** | +55% · −14,5% | +35% | −8,9% | 2,5 | 1,40 → 1,60 | +25% | 0,11 |
> | 1619 | GPS médias + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+157% · −28,3%** | +36% · −5,2% | +23% | −4,0% | 2,5 | 1,91 → 1,35 | +19% | 0,03 |
> | 1620 | ADX + GPS médias + IFR + MACD + Rompe 200 | **+257% · −48,3%** | +55% · −10,0% | +34% | −6,6% | 3,1 | 1,28 → 1,58 | +27% | 0,27 |

> [!example]- Combinações 1621 a 1650 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1621 | ADX + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+188% · −37,3%** | +48% · −8,8% | +29% | −4,5% | 3,5 | 1,02 → 2,02 | +19% | 0,11 |
> | 1622 | Donchian + GPS médias + Quinta + Tendência + Onda ⚠️ | **+266% · −49,2%** | +58% · −10,2% | +35% | −6,5% | 3,5 | 1,34 → 1,38 | +27% | 0,14 |
> | 1623 | Donchian + IFR + MACD + Pullback + Onda | **+282% · −40,0%** | +54% · −8,1% | +35% | −6,7% | 3,3 | 1,22 → 1,64 | +27% | 0,21 |
> | 1624 | VWAP + IFR + Pullback + Rompe 200 + Bollinger | **+192% · −27,5%** | +40% · −4,8% | +27% | −6,1% | 2,3 | 1,73 → 1,44 | +17% | 0,14 |
> | 1625 | IFR + Rompe 200 + Bollinger + Tendência + Onda | **+286% · −43,3%** | +52% · −8,9% | +33% | −8,1% | 2,5 | 1,35 → 1,68 | +29% | 0,24 |
> | 1626 | GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+157% · −38,7%** | +43% · −10,2% | +28% | −6,1% | 2,5 | 1,75 → 1,36 | +20% | 0,07 |
> | 1627 | GPS médias + IFR + MACD + Bollinger | **+251% · −39,1%** | +59% · −10,3% | +34% | −9,6% | 2,2 | 1,47 → 1,58 | +28% | 0,36 |
> | 1628 | BB explosão + MACD + Pôr do sol + Pullback + Bollinger | **+168% · −35,0%** | +38% · −5,9% | +25% | −5,4% | 2,3 | 1,47 → 1,54 | +19% | 0,03 |
> | 1629 | VWAP + Donchian + Quinta + Bollinger + Tendência ⚠️ | **+254% · −45,0%** | +50% · −9,0% | +31% | −5,8% | 3,1 | 1,54 → 1,35 | +18% | 0,18 |
> | 1630 | Donchian + MACD + Pôr do sol + Rompe 200 + Bollinger | **+216% · −28,5%** | +43% · −5,1% | +27% | −5,7% | 2,4 | 1,43 → 1,56 | +22% | 0,11 |
> | 1631 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+217% · −56,1%** | +50% · −12,5% | +32% | −6,5% | 3,0 | 1,53 → 1,37 | +20% | 0,10 |
> | 1632 | IFR + Bollinger + Tendência + Onda | **+269% · −40,1%** | +60% · −10,3% | +37% | −9,0% | 2,7 | 1,27 → 1,76 | +32% | 0,28 |
> | 1633 | Donchian + 1ª vela 80 ⚠️ | **+132% · −30,0%** | +67% · −14,3% | +37% | −8,4% | 2,9 | 1,29 → 1,62 | +27% | 0,12 |
> | 1634 | VWAP + Donchian + IFR + Quinta + Bollinger ⚠️ | **+258% · −36,0%** | +50% · −7,3% | +30% | −7,3% | 2,3 | 1,47 → 1,54 | +20% | 0,14 |
> | 1635 | Donchian + 1ª vela 80 + Rompe 200 ⚠️ | **+144% · −34,1%** | +51% · −11,7% | +31% | −6,7% | 2,7 | 1,40 → 1,52 | +22% | 0,17 |
> | 1636 | ADX + Donchian + BB explosão + IFR | **+237% · −62,3%** | +67% · −17,8% | +38% | −7,0% | 3,6 | 1,21 → 1,60 | +22% | 0,41 |
> | 1637 | BB explosão + GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+288% · −51,2%** | +57% · −11,4% | +33% | −9,0% | 2,3 | 1,45 → 1,60 | +23% | 0,30 |
> | 1638 | ADX + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+173% · −50,7%** | +50% · −13,0% | +31% | −5,4% | 3,4 | 1,20 → 1,65 | +22% | 0,05 |
> | 1639 | ADX + BB explosão + GPS médias + Quinta + Pullback ⚠️ | **+184% · −60,3%** | +48% · −13,8% | +29% | −4,8% | 3,4 | 1,47 → 1,33 | +18% | 0,10 |
> | 1640 | Donchian + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+279% · −31,7%** | +52% · −5,8% | +33% | −6,1% | 3,4 | 1,13 → 1,81 | +26% | 0,05 |
> | 1641 | Donchian + Pullback + Rompe 200 | **+123% · −31,0%** | +45% · −10,4% | +28% | −4,6% | 3,3 | 1,93 → 1,18 | +13% | 0,12 |
> | 1642 | Donchian + BB explosão + Pôr do sol + Pullback | **+149% · −44,9%** | +44% · −11,2% | +28% | −4,2% | 3,6 | 1,57 → 1,27 | +13% | 0,02 |
> | 1643 | BB explosão + IFR + Pullback + Tendência + Onda | **+243% · −53,0%** | +52% · −11,5% | +35% | −7,7% | 2,9 | 1,34 → 1,52 | +25% | 0,21 |
> | 1644 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+247% · −40,7%** | +50% · −8,0% | +29% | −6,4% | 2,5 | 1,36 → 1,66 | +20% | 0,12 |
> | 1645 | ADX + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+191% · −36,5%** | +49% · −8,5% | +28% | −4,1% | 3,8 | 0,94 → 2,07 | +19% | 0,14 |
> | 1646 | ADX + BB explosão + Pôr do sol + Quinta + Tendência ⚠️ | **+189% · −61,6%** | +45% · −14,4% | +29% | −5,9% | 2,8 | 1,36 → 1,54 | +20% | 0,10 |
> | 1647 | MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+129% · −27,8%** | +37% · −6,5% | +28% | −6,0% | 2,6 | 1,46 → 1,45 | +24% | 0,10 |
> | 1648 | IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+169% · −23,5%** | +44% · −5,2% | +31% | −6,8% | 2,7 | 1,23 → 1,84 | +24% | 0,04 |
> | 1649 | 1ª vela 80 + Quinta + Bollinger + Tendência + Onda ⚠️ | **+252% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 3,1 | 1,17 → 1,79 | +21% | 0,06 |
> | 1650 | ADX + Donchian + IFR + Tendência + Onda | **+356% · −57,8%** | +70% · −11,6% | +41% | −9,1% | 3,1 | 1,21 → 1,71 | +30% | 0,33 |

> [!example]- Combinações 1651 a 1680 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1651 | ADX + IFR + Pôr do sol + Pullback + Onda | **+231% · −34,6%** | +48% · −6,7% | +31% | −5,5% | 3,4 | 1,10 → 1,87 | +20% | 0,02 |
> | 1652 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+232% · −44,4%** | +48% · −9,3% | +29% | −6,7% | 2,4 | 1,56 → 1,44 | +22% | 0,11 |
> | 1653 | VWAP + Donchian + Pôr do sol + Bollinger + Tendência | **+257% · −43,2%** | +51% · −9,0% | +31% | −5,9% | 3,1 | 1,49 → 1,36 | +19% | 0,21 |
> | 1654 | Pôr do sol + Quinta + Pullback + Bollinger + Onda ⚠️ | **+143% · −20,5%** | +33% · −3,4% | +23% | −3,5% | 3,0 | 1,21 → 1,76 | +20% | −0,02 |
> | 1655 | GPS médias + Quinta + Pullback ⚠️ | **+103% · −25,4%** | +40% · −7,7% | +27% | −3,7% | 3,7 | 2,08 → 1,08 | +17% | −0,10 |
> | 1656 | Donchian + Pullback + Rompe 200 + Bollinger + Onda | **+241% · −32,1%** | +47% · −6,1% | +29% | −5,8% | 2,7 | 1,36 → 1,54 | +24% | 0,13 |
> | 1657 | Donchian + GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+316% · −49,4%** | +64% · −10,4% | +39% | −7,7% | 3,4 | 1,28 → 1,50 | +32% | 0,29 |
> | 1658 | ADX + GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+163% · −39,0%** | +40% · −7,5% | +25% | −4,3% | 2,9 | 1,39 → 1,43 | +22% | 0,04 |
> | 1659 | ADX + Donchian + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+270% · −42,1%** | +54% · −6,9% | +32% | −5,3% | 3,7 | 1,08 → 1,80 | +22% | 0,13 |
> | 1660 | VWAP + Donchian + Quinta + Pullback + Tendência ⚠️ | **+212% · −52,4%** | +46% · −10,2% | +31% | −4,9% | 3,7 | 1,69 → 1,23 | +16% | 0,10 |
> | 1661 | BB explosão + GPS médias + IFR + Pôr do sol + Bollinger | **+237% · −45,7%** | +51% · −9,9% | +30% | −7,2% | 2,3 | 1,50 → 1,48 | +20% | 0,17 |
> | 1662 | GPS médias + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+250% · −45,2%** | +51% · −9,4% | +33% | −7,8% | 2,6 | 1,50 → 1,43 | +26% | 0,24 |
> | 1663 | ADX + VWAP + IFR + Pôr do sol + Tendência | **+247% · −50,3%** | +52% · −9,7% | +34% | −7,2% | 2,9 | 1,30 → 1,60 | +21% | 0,17 |
> | 1664 | ADX + IFR + Bollinger + Tendência + Onda | **+364% · −51,6%** | +63% · −11,3% | +38% | −8,8% | 2,9 | 1,19 → 1,85 | +28% | 0,29 |
> | 1665 | ADX + Donchian + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+233% · −58,1%** | +54% · −12,8% | +31% | −4,9% | 3,8 | 1,16 → 1,64 | +22% | 0,10 |
> | 1666 | IFR + MACD + Rompe 200 + Tendência | **+198% · −38,3%** | +50% · −9,7% | +35% | −9,5% | 2,3 | 1,51 → 1,48 | +25% | 0,33 |
> | 1667 | BB explosão + GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+239% · −50,5%** | +50% · −11,1% | +30% | −7,4% | 2,3 | 1,61 → 1,45 | +19% | 0,14 |
> | 1668 | ADX + VWAP + Donchian + IFR + Quinta ⚠️ | **+250% · −46,7%** | +54% · −9,4% | +32% | −5,7% | 3,4 | 1,22 → 1,58 | +18% | 0,14 |
> | 1669 | ADX + BB explosão + IFR + 1ª vela 80 ⚠️ | **+217% · −50,2%** | +59% · −12,2% | +35% | −5,8% | 3,9 | 1,05 → 1,80 | +26% | 0,24 |
> | 1670 | BB explosão + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+163% · −30,4%** | +45% · −7,4% | +30% | −6,2% | 2,7 | 1,25 → 1,77 | +23% | 0,06 |
> | 1671 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+202% · −31,0%** | +42% · −4,8% | +28% | −5,8% | 2,6 | 1,30 → 1,70 | +22% | 0,04 |
> | 1672 | ADX + VWAP + IFR + Pôr do sol + Bollinger | **+238% · −38,3%** | +48% · −7,5% | +29% | −4,7% | 3,5 | 1,12 → 1,77 | +16% | 0,17 |
> | 1673 | ADX + Pôr do sol + Tendência | **+153% · −42,3%** | +55% · −13,7% | +35% | −8,2% | 2,7 | 1,32 → 1,64 | +24% | 0,10 |
> | 1674 | GPS médias + Pôr do sol + Bollinger + Tendência + Onda | **+266% · −39,8%** | +52% · −7,0% | +32% | −6,1% | 3,1 | 1,30 → 1,52 | +26% | 0,14 |
> | 1675 | ADX + Donchian + GPS médias + MACD + Quinta ⚠️ | **+261% · −52,4%** | +58% · −10,9% | +33% | −6,4% | 3,2 | 1,30 → 1,50 | +26% | 0,16 |
> | 1676 | Donchian + Pullback + Rompe 200 + Tendência + Onda | **+245% · −44,4%** | +50% · −9,1% | +33% | −7,0% | 2,9 | 1,44 → 1,39 | +24% | 0,21 |
> | 1677 | ADX + VWAP + GPS médias + Bollinger + Tendência | **+288% · −59,8%** | +60% · −12,9% | +34% | −7,3% | 3,0 | 1,38 → 1,43 | +23% | 0,35 |
> | 1678 | Donchian + GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+230% · −44,8%** | +48% · −9,5% | +29% | −6,7% | 2,4 | 1,62 → 1,42 | +21% | 0,07 |
> | 1679 | ADX + BB explosão + Pôr do sol + Quinta + Pullback ⚠️ | **+145% · −50,4%** | +38% · −9,9% | +25% | −4,8% | 2,5 | 1,41 → 1,53 | +18% | −0,00 |
> | 1680 | Donchian + BB explosão + MACD + Pullback + Tendência | **+245% · −65,5%** | +55% · −15,9% | +35% | −7,2% | 3,1 | 1,54 → 1,34 | +18% | 0,31 |

> [!example]- Combinações 1681 a 1710 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1681 | ADX + VWAP + Donchian + 1ª vela 80 + Tendência ⚠️ | **+295% · −59,9%** | +62% · −13,0% | +37% | −7,3% | 3,3 | 1,26 → 1,55 | +24% | 0,28 |
> | 1682 | IFR + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+252% · −29,0%** | +46% · −4,9% | +30% | −5,4% | 3,2 | 1,04 → 2,03 | +20% | 0,04 |
> | 1683 | GPS médias + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+127% · −31,4%** | +32% · −5,9% | +23% | −3,0% | 3,3 | 2,12 → 1,12 | +16% | −0,01 |
> | 1684 | Donchian + BB explosão + Pullback + Rompe 200 + Bollinger | **+218% · −46,6%** | +46% · −8,9% | +27% | −5,4% | 2,7 | 1,71 → 1,33 | +13% | 0,17 |
> | 1685 | VWAP + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+166% · −26,9%** | +37% · −4,7% | +25% | −5,5% | 2,2 | 1,43 → 1,64 | +16% | 0,06 |
> | 1686 | VWAP + Donchian + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+263% · −42,1%** | +49% · −8,7% | +30% | −8,8% | 1,9 | 1,54 → 1,55 | +20% | 0,16 |
> | 1687 | ADX + Donchian + 1ª vela 80 + Pullback + Onda ⚠️ | **+289% · −48,4%** | +57% · −8,2% | +34% | −5,6% | 3,9 | 1,08 → 1,77 | +24% | 0,10 |
> | 1688 | VWAP + Donchian + Pôr do sol + Pullback + Tendência | **+215% · −49,0%** | +47% · −10,0% | +31% | −4,9% | 3,6 | 1,63 → 1,24 | +17% | 0,12 |
> | 1689 | ADX + BB explosão + Bollinger + Tendência | **+234% · −65,0%** | +61% · −19,6% | +35% | −8,0% | 2,8 | 1,33 → 1,58 | +21% | 0,38 |
> | 1690 | VWAP + IFR + Rompe 200 + Bollinger + Tendência | **+246% · −41,4%** | +48% · −8,3% | +31% | −7,3% | 2,5 | 1,58 → 1,43 | +19% | 0,27 |
> | 1691 | MACD + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+121% · −20,1%** | +30% · −2,7% | +22% | −3,8% | 2,3 | 1,40 → 1,64 | +19% | 0,05 |
> | 1692 | Donchian + MACD + Pôr do sol + Bollinger | **+201% · −27,3%** | +49% · −7,1% | +29% | −6,3% | 2,5 | 1,34 → 1,64 | +23% | 0,13 |
> | 1693 | GPS médias + MACD + Rompe 200 + Bollinger + Tendência | **+268% · −41,3%** | +52% · −8,0% | +32% | −7,2% | 2,7 | 1,63 → 1,38 | +23% | 0,28 |
> | 1694 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+129% · −40,8%** | +33% · −8,6% | +24% | −4,7% | 2,3 | 1,51 → 1,46 | +17% | −0,01 |
> | 1695 | ADX + BB explosão + IFR + Quinta + Rompe 200 ⚠️ | **+185% · −50,5%** | +44% · −10,6% | +28% | −4,9% | 3,2 | 1,23 → 1,61 | +19% | 0,14 |
> | 1696 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+272% · −66,7%** | +64% · −15,8% | +37% | −8,3% | 3,0 | 1,50 → 1,36 | +20% | 0,37 |
> | 1697 | ADX + Donchian + BB explosão + Rompe 200 + Bollinger | **+250% · −60,3%** | +55% · −13,7% | +30% | −5,0% | 3,4 | 1,25 → 1,52 | +18% | 0,26 |
> | 1698 | IFR + MACD + Pullback + Tendência + Onda | **+271% · −42,4%** | +52% · −8,6% | +36% | −8,7% | 2,7 | 1,32 → 1,62 | +30% | 0,21 |
> | 1699 | Donchian + IFR + Tendência + Onda | **+282% · −41,4%** | +68% · −10,6% | +41% | −9,5% | 3,0 | 1,28 → 1,59 | +32% | 0,40 |
> | 1700 | Donchian + MACD + Pullback + Rompe 200 | **+164% · −32,4%** | +44% · −8,5% | +29% | −5,6% | 2,9 | 1,62 → 1,33 | +19% | 0,13 |
> | 1701 | ADX + GPS médias + IFR + MACD | **+243% · −46,4%** | +64% · −12,4% | +38% | −7,5% | 3,3 | 1,21 → 1,62 | +30% | 0,35 |
> | 1702 | ADX + MACD + Rompe 200 + Bollinger + Tendência | **+277% · −48,4%** | +53% · −10,1% | +32% | −8,3% | 2,4 | 1,37 → 1,66 | +26% | 0,25 |
> | 1703 | VWAP + Donchian + IFR + Tendência | **+244% · −47,9%** | +63% · −12,4% | +39% | −8,5% | 3,0 | 1,46 → 1,37 | +20% | 0,41 |
> | 1704 | ADX + VWAP + Donchian + 1ª vela 80 + Pullback ⚠️ | **+255% · −53,9%** | +53% · −8,5% | +32% | −6,5% | 3,0 | 1,28 → 1,59 | +19% | 0,13 |
> | 1705 | MACD + Pullback + Tendência | **+138% · −32,6%** | +49% · −11,0% | +35% | −8,7% | 2,6 | 1,69 → 1,37 | +23% | 0,13 |
> | 1706 | GPS médias + MACD + Pullback + Rompe 200 + Tendência | **+227% · −46,1%** | +48% · −9,2% | +32% | −6,5% | 3,0 | 1,78 → 1,28 | +20% | 0,16 |
> | 1707 | Donchian + IFR + Rompe 200 + Tendência + Onda | **+296% · −44,6%** | +58% · −9,2% | +36% | −8,5% | 2,8 | 1,34 → 1,54 | +28% | 0,33 |
> | 1708 | Donchian + BB explosão + GPS médias + Bollinger + Tendência | **+291% · −68,3%** | +65% · −16,5% | +36% | −7,3% | 3,2 | 1,58 → 1,31 | +18% | 0,43 |
> | 1709 | BB explosão + GPS médias + IFR + Quinta + Bollinger ⚠️ | **+234% · −46,0%** | +50% · −9,9% | +30% | −7,2% | 2,4 | 1,56 → 1,45 | +19% | 0,19 |
> | 1710 | Donchian + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+226% · −41,3%** | +46% · −6,7% | +30% | −5,2% | 3,3 | 1,18 → 1,70 | +24% | 0,02 |

> [!example]- Combinações 1711 a 1740 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1711 | GPS médias + Pullback + Tendência + Onda | **+206% · −43,2%** | +55% · −10,8% | +36% | −7,2% | 3,2 | 1,40 → 1,35 | +24% | 0,17 |
> | 1712 | Donchian + BB explosão + MACD + Pullback + Bollinger | **+249% · −51,3%** | +51% · −10,3% | +30% | −7,3% | 2,4 | 1,49 → 1,45 | +18% | 0,22 |
> | 1713 | ADX + GPS médias + MACD + Pôr do sol + Bollinger | **+257% · −42,7%** | +52% · −8,1% | +30% | −5,6% | 3,1 | 1,22 → 1,66 | +25% | 0,16 |
> | 1714 | Rompe 200 + Bollinger + Tendência | **+140% · −28,1%** | +48% · −9,0% | +30% | −7,7% | 2,3 | 1,85 → 1,39 | +19% | 0,19 |
> | 1715 | ADX + BB explosão + Rompe 200 + Bollinger + Tendência | **+248% · −63,9%** | +53% · −15,2% | +31% | −7,3% | 2,5 | 1,40 → 1,53 | +19% | 0,27 |
> | 1716 | ADX + VWAP + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+290% · −49,4%** | +55% · −9,4% | +34% | −6,9% | 3,0 | 1,22 → 1,68 | +23% | 0,30 |
> | 1717 | VWAP + IFR + Quinta + Pullback ⚠️ | **+121% · −23,5%** | +36% · −5,2% | +27% | −5,4% | 2,6 | 1,64 → 1,38 | +17% | −0,04 |
> | 1718 | VWAP + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+167% · −33,3%** | +37% · −5,4% | +26% | −4,4% | 2,9 | 1,53 → 1,36 | +19% | 0,10 |
> | 1719 | ADX + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+279% · −46,0%** | +55% · −8,9% | +36% | −7,5% | 3,1 | 1,18 → 1,76 | +28% | 0,10 |
> | 1720 | BB explosão + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+266% · −51,9%** | +52% · −10,5% | +33% | −7,6% | 2,7 | 1,34 → 1,58 | +24% | 0,31 |
> | 1721 | BB explosão + IFR + MACD + Pullback + Rompe 200 | **+179% · −44,6%** | +41% · −8,9% | +29% | −6,5% | 2,5 | 1,49 → 1,44 | +18% | 0,15 |
> | 1722 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+158% · −31,1%** | +36% · −5,7% | +24% | −4,5% | 2,4 | 1,30 → 1,77 | +17% | 0,01 |
> | 1723 | ADX + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+189% · −46,5%** | +53% · −12,1% | +31% | −5,5% | 3,4 | 1,20 → 1,62 | +25% | 0,05 |
> | 1724 | Donchian + BB explosão + Rompe 200 + Bollinger + Tendência | **+260% · −60,6%** | +54% · −13,7% | +32% | −6,6% | 2,9 | 1,59 → 1,34 | +15% | 0,33 |
> | 1725 | IFR + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+187% · −26,1%** | +39% · −4,4% | +28% | −6,0% | 2,6 | 1,26 → 1,79 | +24% | 0,13 |
> | 1726 | ADX + Pôr do sol + Pullback + Rompe 200 | **+116% · −31,7%** | +36% · −7,4% | +25% | −4,8% | 2,4 | 1,43 → 1,50 | +18% | −0,02 |
> | 1727 | ADX + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+255% · −42,9%** | +51% · −8,2% | +33% | −6,1% | 3,3 | 1,09 → 1,86 | +25% | 0,20 |
> | 1728 | GPS médias + IFR + Pullback + Rompe 200 + Onda | **+222% · −34,6%** | +47% · −6,6% | +31% | −6,7% | 2,7 | 1,40 → 1,46 | +27% | 0,17 |
> | 1729 | IFR + MACD + Quinta + Pullback + Onda ⚠️ | **+191% · −28,1%** | +41% · −4,8% | +30% | −5,1% | 3,3 | 1,16 → 1,71 | +24% | 0,02 |
> | 1730 | 1ª vela 80 + Pullback + Rompe 200 + Tendência + Onda ⚠️ | **+208% · −40,0%** | +44% · −8,0% | +31% | −6,5% | 2,9 | 1,31 → 1,56 | +28% | 0,11 |
> | 1731 | ADX + Donchian + MACD + Tendência | **+272% · −59,3%** | +69% · −16,9% | +40% | −9,7% | 2,8 | 1,31 → 1,57 | +28% | 0,40 |
> | 1732 | ADX + GPS médias + Pullback + Bollinger + Onda | **+277% · −45,9%** | +55% · −9,1% | +32% | −5,7% | 3,4 | 1,20 → 1,62 | +27% | 0,17 |
> | 1733 | VWAP + IFR + MACD + Pullback + Tendência | **+234% · −41,5%** | +48% · −9,0% | +34% | −7,9% | 2,7 | 1,51 → 1,40 | +22% | 0,22 |
> | 1734 | ADX + MACD + Bollinger + Tendência | **+260% · −49,9%** | +61% · −12,3% | +36% | −9,2% | 2,6 | 1,29 → 1,71 | +28% | 0,36 |
> | 1735 | ADX + GPS médias + IFR + Tendência + Onda | **+320% · −56,2%** | +67% · −11,9% | +40% | −8,8% | 3,1 | 1,23 → 1,63 | +34% | 0,31 |
> | 1736 | ADX + Donchian + MACD + Rompe 200 + Tendência | **+287% · −58,8%** | +59% · −12,9% | +36% | −8,7% | 2,6 | 1,37 → 1,53 | +25% | 0,29 |
> | 1737 | Donchian + BB explosão + Quinta + Pullback ⚠️ | **+146% · −46,7%** | +44% · −11,9% | +28% | −4,3% | 3,5 | 1,65 → 1,24 | +12% | 0,05 |
> | 1738 | Donchian + IFR + MACD + Rompe 200 | **+209% · −33,2%** | +53% · −8,5% | +33% | −7,7% | 2,7 | 1,38 → 1,50 | +24% | 0,35 |
> | 1739 | ADX + Quinta + Pullback + Rompe 200 ⚠️ | **+114% · −29,8%** | +36% · −7,4% | +25% | −5,2% | 2,3 | 1,53 → 1,46 | +19% | 0,03 |
> | 1740 | BB explosão + MACD + Quinta + Pullback + Tendência ⚠️ | **+177% · −54,9%** | +42% · −11,8% | +30% | −6,0% | 2,9 | 1,61 → 1,34 | +18% | 0,08 |

> [!example]- Combinações 1741 a 1770 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1741 | ADX + Donchian + IFR + 1ª vela 80 + Onda ⚠️ | **+339% · −42,7%** | +65% · −8,7% | +38% | −6,2% | 4,1 | 1,00 → 1,86 | +26% | 0,22 |
> | 1742 | VWAP + IFR + Pôr do sol + Pullback | **+123% · −23,1%** | +36% · −5,2% | +27% | −5,4% | 2,6 | 1,56 → 1,40 | +16% | −0,02 |
> | 1743 | BB explosão + MACD + Pôr do sol + Pullback + Tendência | **+180% · −53,5%** | +42% · −11,2% | +30% | −6,0% | 2,8 | 1,55 → 1,36 | +19% | 0,08 |
> | 1744 | ADX + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+203% · −39,6%** | +44% · −7,3% | +29% | −5,5% | 3,0 | 1,18 → 1,76 | +22% | 0,12 |
> | 1745 | GPS médias + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+254% · −39,7%** | +50% · −8,2% | +32% | −8,5% | 2,3 | 1,37 → 1,67 | +27% | 0,16 |
> | 1746 | Donchian + GPS médias + Pôr do sol + Tendência + Onda | **+268% · −47,7%** | +58% · −10,5% | +35% | −6,5% | 3,4 | 1,30 → 1,40 | +27% | 0,18 |
> | 1747 | ADX + Donchian + Pôr do sol | **+163% · −39,8%** | +59% · −11,6% | +32% | −5,3% | 3,7 | 1,14 → 1,66 | +18% | −0,01 |
> | 1748 | Donchian + BB explosão + GPS médias + IFR + Bollinger | **+300% · −57,6%** | +64% · −12,6% | +35% | −8,9% | 2,5 | 1,51 → 1,43 | +19% | 0,41 |
> | 1749 | Donchian + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+276% · −39,4%** | +54% · −7,9% | +34% | −6,3% | 3,4 | 1,18 → 1,64 | +29% | 0,16 |
> | 1750 | Donchian + BB explosão + MACD + Bollinger + Tendência | **+285% · −64,1%** | +59% · −15,2% | +35% | −7,9% | 2,8 | 1,40 → 1,42 | +20% | 0,44 |
> | 1751 | BB explosão + IFR + MACD + Pôr do sol + Tendência | **+223% · −51,8%** | +49% · −10,5% | +33% | −7,6% | 2,7 | 1,37 → 1,50 | +23% | 0,24 |
> | 1752 | Donchian + GPS médias + Pôr do sol + Quinta ⚠️ | **+171% · −31,0%** | +47% · −8,1% | +28% | −5,1% | 3,0 | 1,68 → 1,29 | +20% | −0,02 |
> | 1753 | VWAP + Donchian + 1ª vela 80 + Quinta + Tendência ⚠️ | **+238% · −49,7%** | +50% · −11,0% | +32% | −7,2% | 2,7 | 1,43 → 1,41 | +21% | 0,11 |
> | 1754 | GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+190% · −37,5%** | +48% · −9,4% | +28% | −7,7% | 2,0 | 1,54 → 1,51 | +22% | 0,22 |
> | 1755 | ADX + VWAP + Pôr do sol + Pullback + Bollinger | **+187% · −35,6%** | +41% · −6,0% | +26% | −4,6% | 2,8 | 1,30 → 1,57 | +14% | 0,09 |
> | 1756 | 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+195% · −32,4%** | +50% · −7,6% | +35% | −7,2% | 3,0 | 1,24 → 1,62 | +29% | 0,08 |
> | 1757 | VWAP + GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+245% · −44,8%** | +50% · −9,5% | +32% | −9,4% | 2,1 | 1,56 → 1,49 | +22% | 0,11 |
> | 1758 | ADX + GPS médias + IFR + Bollinger + Onda | **+327% · −47,9%** | +63% · −9,7% | +35% | −6,2% | 3,6 | 1,09 → 1,74 | +29% | 0,28 |
> | 1759 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+147% · −34,4%** | +35% · −6,6% | +24% | −4,9% | 2,3 | 1,56 → 1,44 | +21% | 0,01 |
> | 1760 | Donchian + GPS médias + IFR + Bollinger + Onda | **+353% · −44,5%** | +65% · −9,7% | +36% | −8,3% | 2,8 | 1,29 → 1,60 | +31% | 0,29 |
> | 1761 | Donchian + GPS médias + Rompe 200 + Tendência | **+235% · −51,7%** | +62% · −14,0% | +36% | −6,8% | 3,4 | 1,73 → 1,22 | +18% | 0,35 |
> | 1762 | ADX + BB explosão + GPS médias + IFR + 1ª vela 80 ⚠️ | **+264% · −58,4%** | +61% · −13,5% | +36% | −7,4% | 3,1 | 1,23 → 1,62 | +26% | 0,31 |
> | 1763 | GPS médias + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+189% · −33,8%** | +40% · −6,6% | +26% | −6,3% | 2,0 | 1,52 → 1,52 | +23% | 0,05 |
> | 1764 | Donchian + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+272% · −35,3%** | +50% · −6,8% | +30% | −7,9% | 2,2 | 1,38 → 1,68 | +25% | 0,23 |
> | 1765 | ADX + VWAP + Donchian + GPS médias + Tendência | **+273% · −68,9%** | +66% · −17,2% | +38% | −7,5% | 3,3 | 1,37 → 1,34 | +22% | 0,36 |
> | 1766 | MACD + Bollinger + Tendência | **+170% · −32,1%** | +56% · −10,7% | +35% | −9,7% | 2,3 | 1,45 → 1,51 | +27% | 0,41 |
> | 1767 | VWAP + GPS médias + IFR + Pullback + Bollinger | **+262% · −41,1%** | +50% · −8,6% | +31% | −8,4% | 2,1 | 1,71 → 1,42 | +20% | 0,18 |
> | 1768 | ADX + Donchian + GPS médias + Pullback + Onda | **+278% · −52,2%** | +61% · −10,6% | +35% | −6,4% | 3,5 | 1,23 → 1,51 | +29% | 0,17 |
> | 1769 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+281% · −32,3%** | +53% · −5,9% | +33% | −6,0% | 3,4 | 1,08 → 1,83 | +25% | 0,13 |
> | 1770 | ADX + Quinta + Pullback ⚠️ | **+102% · −30,6%** | +41% · −9,7% | +27% | −6,4% | 2,2 | 1,43 → 1,56 | +16% | 0,03 |

> [!example]- Combinações 1771 a 1800 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1771 | VWAP + Donchian + IFR + Pullback | **+203% · −35,7%** | +53% · −9,4% | +33% | −7,7% | 2,6 | 1,56 → 1,38 | +17% | 0,16 |
> | 1772 | ADX + Donchian + IFR + Quinta + Onda ⚠️ | **+285% · −41,1%** | +58% · −8,2% | +35% | −5,6% | 3,9 | 1,05 → 1,78 | +23% | 0,10 |
> | 1773 | VWAP + Donchian + IFR + 1ª vela 80 + Bollinger ⚠️ | **+321% · −41,6%** | +56% · −8,7% | +33% | −9,3% | 2,2 | 1,37 → 1,69 | +23% | 0,28 |
> | 1774 | ADX + GPS médias + MACD + Tendência | **+244% · −57,6%** | +65% · −15,8% | +39% | −9,3% | 2,8 | 1,34 → 1,48 | +30% | 0,35 |
> | 1775 | ADX + BB explosão + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+221% · −48,3%** | +47% · −9,3% | +28% | −4,4% | 3,5 | 1,07 → 1,80 | +20% | 0,12 |
> | 1776 | Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+74% · −22,0%** | +27% · −4,7% | +21% | −2,4% | 3,3 | 1,19 → 1,63 | +17% | 0,01 |
> | 1777 | VWAP + IFR + Pullback + Rompe 200 + Tendência | **+205% · −41,0%** | +44% · −8,1% | +31% | −6,6% | 2,8 | 1,73 → 1,31 | +17% | 0,17 |
> | 1778 | ADX + BB explosão + IFR + Pôr do sol + Rompe 200 | **+187% · −49,5%** | +45% · −10,2% | +28% | −4,6% | 3,4 | 1,17 → 1,64 | +20% | 0,11 |
> | 1779 | ADX + VWAP + Quinta + Bollinger + Tendência ⚠️ | **+236% · −50,9%** | +49% · −9,6% | +30% | −6,3% | 2,8 | 1,32 → 1,54 | +21% | 0,19 |
> | 1780 | GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+175% · −37,3%** | +58% · −12,9% | +32% | −9,3% | 2,1 | 1,46 → 1,57 | +22% | 0,28 |
> | 1781 | ADX + Donchian + BB explosão + Rompe 200 + Tendência | **+244% · −71,9%** | +59% · −19,0% | +35% | −7,7% | 2,8 | 1,38 → 1,41 | +18% | 0,33 |
> | 1782 | GPS médias + MACD + Pullback + Rompe 200 + Bollinger | **+216% · −34,4%** | +44% · −6,7% | +28% | −6,7% | 2,2 | 1,78 → 1,39 | +21% | 0,13 |
> | 1783 | GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+188% · −33,5%** | +49% · −8,3% | +32% | −9,3% | 2,1 | 1,54 → 1,49 | +27% | 0,04 |
> | 1784 | ADX + IFR + MACD + 1ª vela 80 ⚠️ | **+238% · −40,4%** | +59% · −9,8% | +37% | −6,7% | 3,6 | 1,00 → 1,91 | +24% | 0,24 |
> | 1785 | ADX + GPS médias + Pôr do sol + Quinta ⚠️ | **+150% · −37,7%** | +45% · −9,3% | +27% | −4,6% | 3,1 | 1,30 → 1,48 | +23% | 0,03 |
> | 1786 | BB explosão + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+127% · −41,5%** | +33% · −8,8% | +24% | −4,8% | 2,3 | 1,59 → 1,42 | +16% | −0,03 |
> | 1787 | MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+108% · −16,2%** | +33% · −3,1% | +23% | −4,0% | 2,5 | 1,26 → 1,80 | +19% | 0,06 |
> | 1788 | GPS médias + IFR + Tendência + Onda | **+253% · −42,7%** | +64% · −10,5% | +40% | −9,1% | 3,0 | 1,30 → 1,50 | +31% | 0,34 |
> | 1789 | VWAP + Donchian + IFR + Pôr do sol + Bollinger | **+261% · −36,2%** | +50% · −7,3% | +30% | −7,3% | 2,3 | 1,41 → 1,55 | +19% | 0,16 |
> | 1790 | BB explosão + GPS médias + IFR + Rompe 200 + Tendência | **+233% · −62,9%** | +55% · −15,2% | +34% | −7,1% | 3,0 | 1,61 → 1,31 | +18% | 0,37 |
> | 1791 | Donchian + BB explosão + Pullback + Rompe 200 + Tendência | **+220% · −66,2%** | +50% · −14,5% | +32% | −5,9% | 3,2 | 1,73 → 1,24 | +13% | 0,25 |
> | 1792 | IFR + MACD + Quinta + Rompe 200 ⚠️ | **+124% · −23,3%** | +36% · −4,9% | +27% | −5,4% | 2,6 | 1,34 → 1,55 | +23% | 0,10 |
> | 1793 | VWAP + IFR + Quinta + Tendência ⚠️ | **+167% · −33,8%** | +46% · −7,7% | +32% | −7,0% | 2,8 | 1,49 → 1,38 | +20% | 0,09 |
> | 1794 | IFR + Quinta + Bollinger + Onda ⚠️ | **+181% · −26,2%** | +45% · −5,7% | +29% | −4,8% | 3,4 | 1,02 → 1,91 | +23% | 0,02 |
> | 1795 | Donchian + IFR + MACD | **+195% · −31,4%** | +65% · −11,1% | +39% | −9,2% | 2,8 | 1,29 → 1,56 | +28% | 0,49 |
> | 1796 | ADX + VWAP + Donchian + Quinta + Tendência ⚠️ | **+245% · −60,6%** | +55% · −13,7% | +33% | −6,7% | 3,1 | 1,33 → 1,42 | +21% | 0,17 |
> | 1797 | ADX + IFR + MACD + Quinta ⚠️ | **+188% · −36,9%** | +50% · −8,7% | +33% | −6,0% | 3,3 | 1,07 → 1,82 | +21% | 0,14 |
> | 1798 | ADX + Donchian + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+236% · −56,8%** | +54% · −12,2% | +31% | −4,9% | 3,8 | 1,11 → 1,66 | +23% | 0,12 |
> | 1799 | GPS médias + IFR + Rompe 200 + Tendência + Onda | **+267% · −44,8%** | +55% · −8,7% | +35% | −8,1% | 2,8 | 1,36 → 1,46 | +29% | 0,29 |
> | 1800 | ADX + GPS médias + MACD + Rompe 200 + Tendência | **+258% · −57,7%** | +56% · −12,9% | +35% | −8,3% | 2,6 | 1,40 → 1,45 | +26% | 0,26 |

> [!example]- Combinações 1801 a 1830 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1801 | BB explosão + 1ª vela 80 + Tendência ⚠️ | **+149% · −48,3%** | +55% · −17,3% | +36% | −7,8% | 3,0 | 1,34 → 1,44 | +20% | 0,22 |
> | 1802 | Pôr do sol + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+255% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 3,1 | 1,12 → 1,81 | +21% | 0,14 |
> | 1803 | MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+123% · −25,4%** | +36% · −5,8% | +27% | −6,5% | 2,2 | 1,43 → 1,56 | +24% | 0,02 |
> | 1804 | BB explosão + GPS médias + IFR + Pullback | **+186% · −52,6%** | +53% · −14,5% | +33% | −7,4% | 2,7 | 1,66 → 1,32 | +17% | 0,20 |
> | 1805 | IFR + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+255% · −28,3%** | +47% · −4,9% | +30% | −5,3% | 3,2 | 0,98 → 2,06 | +20% | 0,11 |
> | 1806 | VWAP + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+220% · −35,9%** | +44% · −6,8% | +29% | −6,8% | 2,4 | 1,39 → 1,56 | +23% | 0,18 |
> | 1807 | ADX + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+330% · −42,7%** | +58% · −8,3% | +35% | −5,8% | 3,8 | 0,89 → 2,03 | +23% | 0,22 |
> | 1808 | ADX + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+192% · −47,0%** | +53% · −12,3% | +31% | −5,2% | 3,5 | 1,14 → 1,65 | +24% | 0,09 |
> | 1809 | BB explosão + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+138% · −30,5%** | +34% · −5,5% | +22% | −3,9% | 2,5 | 1,76 → 1,33 | +14% | 0,01 |
> | 1810 | ADX + Donchian + MACD + Quinta + Rompe 200 ⚠️ | **+215% · −41,3%** | +47% · −7,1% | +29% | −5,0% | 3,3 | 1,21 → 1,58 | +22% | 0,10 |
> | 1811 | BB explosão + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+186% · −47,0%** | +41% · −9,0% | +27% | −5,4% | 2,6 | 1,61 → 1,37 | +16% | 0,13 |
> | 1812 | BB explosão + IFR + Pullback + Bollinger + Onda | **+241% · −37,3%** | +48% · −7,3% | +31% | −6,3% | 2,9 | 1,23 → 1,67 | +25% | 0,15 |
> | 1813 | BB explosão + IFR + Quinta ⚠️ | **+107% · −33,3%** | +42% · −10,8% | +29% | −5,6% | 2,9 | 1,33 → 1,48 | +17% | 0,04 |
> | 1814 | Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+102% · −23,2%** | +32% · −5,0% | +25% | −4,4% | 2,7 | 1,89 → 1,28 | +18% | 0,06 |
> | 1815 | BB explosão + MACD + Quinta + Bollinger + Tendência ⚠️ | **+212% · −53,1%** | +45% · −11,0% | +30% | −6,7% | 2,6 | 1,42 → 1,44 | +20% | 0,21 |
> | 1816 | GPS médias + MACD + Pôr do sol + Tendência | **+190% · −39,3%** | +51% · −9,2% | +33% | −6,9% | 3,0 | 1,50 → 1,34 | +26% | 0,17 |
> | 1817 | BB explosão + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+217% · −38,2%** | +44% · −7,6% | +29% | −8,0% | 2,0 | 1,42 → 1,66 | +22% | 0,12 |
> | 1818 | ADX + VWAP + Donchian + IFR + Pôr do sol | **+252% · −46,5%** | +54% · −9,4% | +32% | −5,6% | 3,5 | 1,18 → 1,60 | +17% | 0,15 |
> | 1819 | VWAP + IFR + Pôr do sol + Tendência | **+169% · −32,8%** | +46% · −7,8% | +32% | −7,1% | 2,7 | 1,43 → 1,39 | +21% | 0,15 |
> | 1820 | GPS médias + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+243% · −39,7%** | +51% · −7,7% | +33% | −6,2% | 3,3 | 1,23 → 1,52 | +26% | 0,04 |
> | 1821 | BB explosão + GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+219% · −45,4%** | +50% · −10,0% | +31% | −8,1% | 2,3 | 1,43 → 1,51 | +22% | 0,10 |
> | 1822 | ADX + Donchian + GPS médias + MACD + Pôr do sol | **+264% · −51,4%** | +58% · −10,5% | +33% | −6,4% | 3,2 | 1,25 → 1,52 | +26% | 0,15 |
> | 1823 | Donchian + GPS médias + MACD + Tendência | **+258% · −53,4%** | +68% · −14,5% | +40% | −8,8% | 3,1 | 1,51 → 1,32 | +25% | 0,47 |
> | 1824 | Donchian + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+223% · −42,2%** | +47% · −8,8% | +31% | −6,8% | 2,7 | 1,57 → 1,36 | +21% | 0,18 |
> | 1825 | BB explosão + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+183% · −48,6%** | +41% · −9,6% | +27% | −5,4% | 2,6 | 1,68 → 1,34 | +15% | 0,14 |
> | 1826 | ADX + Donchian + Pôr do sol + Pullback + Onda | **+240% · −47,4%** | +51% · −7,4% | +31% | −4,9% | 3,8 | 1,11 → 1,67 | +21% | 0,03 |
> | 1827 | Donchian + BB explosão + GPS médias + IFR + 1ª vela 80 ⚠️ | **+281% · −55,3%** | +63% · −12,2% | +36% | −9,8% | 2,4 | 1,42 → 1,48 | +22% | 0,36 |
> | 1828 | Donchian + GPS médias + Bollinger | **+216% · −36,9%** | +70% · −12,7% | +35% | −8,9% | 2,5 | 1,65 → 1,36 | +21% | 0,30 |
> | 1829 | VWAP + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+161% · −30,8%** | +36% · −5,6% | +25% | −7,2% | 1,7 | 1,53 → 1,59 | +18% | 0,03 |
> | 1830 | Donchian + GPS médias + MACD + Pôr do sol + Bollinger | **+280% · −41,9%** | +54% · −8,9% | +31% | −8,2% | 2,2 | 1,48 → 1,47 | +24% | 0,16 |

> [!example]- Combinações 1831 a 1860 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1831 | IFR + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+266% · −40,7%** | +51% · −8,1% | +35% | −7,9% | 2,8 | 1,23 → 1,71 | +28% | 0,22 |
> | 1832 | GPS médias + Pôr do sol + Bollinger | **+133% · −27,9%** | +47% · −8,8% | +26% | −6,0% | 2,2 | 1,69 → 1,40 | +23% | 0,01 |
> | 1833 | Donchian + GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+336% · −47,1%** | +60% · −10,5% | +34% | −10,1% | 2,1 | 1,43 → 1,57 | +28% | 0,30 |
> | 1834 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+166% · −24,6%** | +36% · −4,0% | +25% | −5,2% | 2,3 | 1,22 → 1,95 | +17% | 0,07 |
> | 1835 | Donchian + BB explosão + Pôr do sol + Tendência | **+186% · −59,1%** | +54% · −17,1% | +33% | −6,2% | 3,3 | 1,47 → 1,30 | +16% | 0,24 |
> | 1836 | GPS médias + MACD + Quinta + Tendência ⚠️ | **+187% · −40,5%** | +50% · −9,7% | +33% | −6,9% | 3,0 | 1,57 → 1,31 | +24% | 0,14 |
> | 1837 | ADX + Donchian + BB explosão + Bollinger | **+235% · −62,3%** | +64% · −17,9% | +33% | −5,6% | 3,7 | 1,17 → 1,56 | +20% | 0,36 |
> | 1838 | ADX + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+334% · −49,4%** | +62% · −10,5% | +39% | −8,6% | 3,1 | 1,09 → 1,86 | +29% | 0,22 |
> | 1839 | Donchian + MACD + Pôr do sol + Rompe 200 + Tendência | **+225% · −42,1%** | +47% · −8,8% | +31% | −6,9% | 2,7 | 1,51 → 1,38 | +22% | 0,20 |
> | 1840 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+224% · −47,3%** | +48% · −9,4% | +28% | −4,2% | 3,7 | 1,00 → 1,83 | +19% | 0,13 |
> | 1841 | ADX + BB explosão + MACD + Quinta + Pullback ⚠️ | **+171% · −56,4%** | +42% · −12,1% | +28% | −4,9% | 3,1 | 1,25 → 1,54 | +20% | 0,05 |
> | 1842 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+182% · −41,4%** | +42% · −8,0% | +27% | −5,4% | 2,6 | 1,33 → 1,54 | +19% | 0,00 |
> | 1843 | ADX + Quinta + Pullback + Tendência + Onda ⚠️ | **+227% · −46,5%** | +48% · −8,3% | +32% | −7,2% | 2,7 | 1,26 → 1,64 | +25% | 0,05 |
> | 1844 | GPS médias + IFR + MACD + Quinta ⚠️ | **+185% · −33,8%** | +49% · −8,5% | +32% | −8,5% | 2,3 | 1,45 → 1,47 | +27% | 0,13 |
> | 1845 | IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+250% · −37,3%** | +59% · −9,3% | +39% | −8,8% | 3,0 | 1,15 → 1,76 | +30% | 0,23 |
> | 1846 | ADX + Donchian + Bollinger + Tendência + Onda | **+363% · −56,8%** | +67% · −11,6% | +38% | −8,3% | 3,0 | 1,18 → 1,70 | +29% | 0,29 |
> | 1847 | Donchian + BB explosão + Quinta + Tendência ⚠️ | **+184% · −61,9%** | +54% · −17,8% | +33% | −6,2% | 3,3 | 1,52 → 1,28 | +15% | 0,23 |
> | 1848 | ADX + Donchian + GPS médias + IFR + Onda | **+315% · −53,6%** | +69% · −11,0% | +39% | −7,0% | 3,7 | 1,14 → 1,61 | +30% | 0,31 |
> | 1849 | Donchian + GPS médias + MACD + Quinta + Bollinger ⚠️ | **+277% · −41,9%** | +53% · −8,9% | +31% | −8,2% | 2,2 | 1,54 → 1,45 | +23% | 0,16 |
> | 1850 | BB explosão + Pôr do sol + Quinta + Pullback ⚠️ | **+79% · −30,4%** | +29% · −6,6% | +22% | −2,5% | 3,6 | 1,71 → 1,18 | +13% | −0,07 |
> | 1851 | Donchian + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+222% · −36,1%** | +47% · −7,2% | +31% | −5,7% | 3,2 | 1,25 → 1,52 | +27% | 0,06 |
> | 1852 | VWAP + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+217% · −33,4%** | +43% · −6,4% | +28% | −7,5% | 2,0 | 1,34 → 1,79 | +20% | 0,10 |
> | 1853 | ADX + BB explosão + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+230% · −62,4%** | +52% · −14,5% | +33% | −7,2% | 2,8 | 1,28 → 1,58 | +22% | 0,20 |
> | 1854 | BB explosão + IFR + Rompe 200 + Tendência | **+182% · −51,1%** | +51% · −14,1% | +34% | −8,3% | 2,5 | 1,57 → 1,38 | +16% | 0,34 |
> | 1855 | IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+172% · −23,5%** | +44% · −5,5% | +31% | −6,7% | 2,7 | 1,16 → 1,87 | +24% | 0,14 |
> | 1856 | 1ª vela 80 + Quinta + Pullback + Bollinger + Onda ⚠️ | **+190% · −23,0%** | +39% · −3,9% | +27% | −5,0% | 2,8 | 1,14 → 1,89 | +19% | −0,02 |
> | 1857 | Donchian + IFR + Quinta + Onda ⚠️ | **+208% · −30,2%** | +53% · −7,2% | +33% | −5,6% | 3,7 | 1,11 → 1,66 | +26% | 0,05 |
> | 1858 | ADX + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+192% · −38,8%** | +41% · −7,1% | +26% | −4,3% | 3,0 | 1,05 → 1,92 | +18% | 0,10 |
> | 1859 | GPS médias + Quinta + Pullback + Bollinger + Onda ⚠️ | **+211% · −33,9%** | +44% · −6,0% | +28% | −6,0% | 2,5 | 1,39 → 1,49 | +25% | 0,01 |
> | 1860 | ADX + VWAP + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+235% · −39,9%** | +47% · −7,2% | +29% | −6,2% | 2,6 | 1,23 → 1,73 | +18% | 0,17 |

> [!example]- Combinações 1861 a 1890 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1861 | MACD + 1ª vela 80 + Pullback ⚠️ | **+111% · −17,3%** | +41% · −4,9% | +30% | −7,9% | 2,2 | 1,36 → 1,65 | +25% | −0,07 |
> | 1862 | ADX + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+216% · −62,8%** | +60% · −18,8% | +37% | −7,9% | 3,0 | 1,21 → 1,62 | +25% | 0,25 |
> | 1863 | ADX + IFR + Quinta + Tendência + Onda ⚠️ | **+279% · −47,4%** | +55% · −9,9% | +36% | −8,0% | 2,9 | 1,16 → 1,77 | +27% | 0,13 |
> | 1864 | BB explosão + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+200% · −51,1%** | +45% · −10,3% | +31% | −6,5% | 2,8 | 1,31 → 1,49 | +23% | 0,11 |
> | 1865 | ADX + Donchian + BB explosão + Tendência | **+232% · −72,2%** | +69% · −24,2% | +39% | −9,1% | 2,9 | 1,33 → 1,45 | +19% | 0,45 |
> | 1866 | Quinta + Rompe 200 + Bollinger ⚠️ | **+70% · −11,9%** | +30% · −2,6% | +20% | −2,8% | 2,6 | 1,75 → 1,32 | +17% | 0,03 |
> | 1867 | BB explosão + Pullback + Bollinger | **+113% · −34,2%** | +43% · −10,6% | +26% | −5,1% | 2,6 | 1,64 → 1,32 | +12% | 0,10 |
> | 1868 | ADX + VWAP + Pullback + Tendência | **+183% · −54,0%** | +51% · −14,1% | +34% | −7,5% | 2,8 | 1,41 → 1,38 | +20% | 0,17 |
> | 1869 | GPS médias + IFR + Quinta + Bollinger + Onda ⚠️ | **+265% · −37,3%** | +51% · −7,6% | +31% | −6,8% | 2,7 | 1,26 → 1,66 | +26% | 0,09 |
> | 1870 | Donchian + BB explosão + MACD + 1ª vela 80 + Tendência ⚠️ | **+268% · −62,6%** | +58% · −14,4% | +36% | −8,3% | 2,8 | 1,33 → 1,46 | +23% | 0,38 |
> | 1871 | ADX + Donchian + IFR + Pôr do sol + Onda | **+287% · −40,6%** | +58% · −8,1% | +34% | −5,6% | 3,9 | 1,00 → 1,80 | +22% | 0,12 |
> | 1872 | IFR + MACD + Quinta ⚠️ | **+112% · −19,2%** | +42% · −5,8% | +30% | −6,2% | 2,8 | 1,22 → 1,65 | +23% | 0,08 |
> | 1873 | ADX + IFR + Rompe 200 | **+147% · −32,0%** | +54% · −10,3% | +33% | −6,6% | 3,1 | 1,14 → 1,74 | +23% | 0,21 |
> | 1874 | Pôr do sol + Tendência | **+82% · −20,0%** | +45% · −9,7% | +32% | −7,4% | 2,6 | 1,65 → 1,33 | +22% | 0,06 |
> | 1875 | Donchian + GPS médias + IFR + MACD | **+263% · −42,6%** | +66% · −11,4% | +38% | −10,7% | 2,4 | 1,43 → 1,44 | +27% | 0,44 |
> | 1876 | ADX + Donchian + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+266% · −40,1%** | +54% · −7,3% | +33% | −6,1% | 3,3 | 1,13 → 1,70 | +25% | 0,19 |
> | 1877 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+146% · −34,2%** | +36% · −5,8% | +24% | −3,3% | 3,5 | 1,01 → 1,85 | +19% | 0,02 |
> | 1878 | ADX + VWAP + GPS médias + Quinta + Tendência ⚠️ | **+220% · −59,2%** | +52% · −13,5% | +33% | −6,3% | 3,1 | 1,36 → 1,34 | +22% | 0,15 |
> | 1879 | IFR + MACD + Pôr do sol + Pullback + Onda | **+193% · −28,1%** | +41% · −4,9% | +30% | −5,1% | 3,3 | 1,10 → 1,72 | +23% | 0,04 |
> | 1880 | ADX + VWAP + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+264% · −58,2%** | +59% · −12,2% | +36% | −7,5% | 3,1 | 1,28 → 1,47 | +26% | 0,27 |
> | 1881 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+240% · −49,2%** | +50% · −10,8% | +32% | −7,4% | 2,6 | 1,38 → 1,43 | +22% | 0,18 |
> | 1882 | ADX + Donchian + BB explosão + GPS médias + Bollinger | **+274% · −68,3%** | +65% · −16,5% | +34% | −7,0% | 3,0 | 1,31 → 1,43 | +20% | 0,39 |
> | 1883 | VWAP + GPS médias + IFR + Pôr do sol + Tendência | **+239% · −48,4%** | +51% · −9,5% | +33% | −7,5% | 2,7 | 1,53 → 1,34 | +22% | 0,18 |
> | 1884 | ADX + Donchian + BB explosão + Pôr do sol + Quinta ⚠️ | **+191% · −58,2%** | +47% · −12,9% | +28% | −4,3% | 3,5 | 1,19 → 1,52 | +19% | 0,06 |
> | 1885 | GPS médias + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+202% · −38,6%** | +43% · −7,7% | +29% | −8,0% | 2,0 | 1,58 → 1,44 | +23% | 0,09 |
> | 1886 | ADX + BB explosão + GPS médias + IFR + Rompe 200 | **+217% · −63,5%** | +55% · −15,3% | +32% | −6,3% | 3,1 | 1,29 → 1,43 | +20% | 0,33 |
> | 1887 | GPS médias + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+238% · −39,8%** | +46% · −8,3% | +29% | −8,3% | 1,9 | 1,42 → 1,62 | +21% | 0,11 |
> | 1888 | ADX + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+256% · −47,7%** | +52% · −9,6% | +34% | −8,1% | 2,6 | 1,24 → 1,68 | +28% | 0,19 |
> | 1889 | Donchian + GPS médias + Quinta + Pullback + Onda ⚠️ | **+228% · −39,7%** | +50% · −8,2% | +31% | −6,4% | 2,8 | 1,38 → 1,37 | +25% | 0,02 |
> | 1890 | ADX + IFR + Quinta + Bollinger + Onda ⚠️ | **+271% · −39,2%** | +51% · −7,5% | +31% | −5,5% | 3,3 | 0,96 → 1,97 | +22% | 0,11 |

> [!example]- Combinações 1891 a 1920 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1891 | BB explosão + GPS médias + IFR + MACD + Tendência | **+254% · −64,2%** | +59% · −15,5% | +37% | −9,0% | 2,7 | 1,43 → 1,37 | +23% | 0,44 |
> | 1892 | ADX + IFR + Pullback + Rompe 200 + Onda | **+227% · −38,0%** | +48% · −7,2% | +31% | −6,2% | 3,0 | 1,15 → 1,74 | +23% | 0,12 |
> | 1893 | Pôr do sol + Quinta + Bollinger + Tendência + Onda ⚠️ | **+199% · −32,4%** | +41% · −5,7% | +28% | −5,5% | 2,8 | 1,21 → 1,69 | +23% | 0,05 |
> | 1894 | ADX + VWAP + IFR + 1ª vela 80 + Bollinger ⚠️ | **+291% · −42,5%** | +54% · −8,1% | +32% | −6,7% | 2,9 | 1,09 → 1,87 | +19% | 0,28 |
> | 1895 | ADX + VWAP + Donchian + IFR + 1ª vela 80 ⚠️ | **+302% · −46,3%** | +61% · −10,1% | +36% | −7,5% | 3,0 | 1,16 → 1,70 | +21% | 0,25 |
> | 1896 | Donchian + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+222% · −33,0%** | +46% · −6,3% | +30% | −5,5% | 3,1 | 1,20 → 1,59 | +26% | 0,11 |
> | 1897 | GPS médias + Pôr do sol + Rompe 200 + Tendência | **+163% · −37,4%** | +45% · −8,7% | +30% | −5,4% | 3,1 | 1,79 → 1,21 | +19% | 0,10 |
> | 1898 | VWAP + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+134% · −35,4%** | +34% · −6,7% | +26% | −3,7% | 3,5 | 1,71 → 1,19 | +16% | 0,02 |
> | 1899 | Donchian + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+154% · −26,7%** | +36% · −5,1% | +25% | −4,7% | 2,5 | 1,40 → 1,41 | +20% | 0,05 |
> | 1900 | Donchian + MACD + 1ª vela 80 + Bollinger ⚠️ | **+255% · −33,3%** | +57% · −8,1% | +33% | −9,2% | 2,2 | 1,30 → 1,74 | +27% | 0,29 |
> | 1901 | IFR + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+197% · −29,4%** | +40% · −5,0% | +27% | −5,0% | 2,8 | 1,15 → 1,79 | +23% | 0,07 |
> | 1902 | Donchian + Quinta + Pullback + Onda ⚠️ | **+160% · −33,3%** | +44% · −6,8% | +29% | −4,9% | 3,3 | 1,23 → 1,47 | +23% | −0,02 |
> | 1903 | ADX + BB explosão + IFR + Quinta ⚠️ | **+172% · −51,8%** | +50% · −13,2% | +31% | −5,8% | 3,2 | 1,14 → 1,67 | +21% | 0,15 |
> | 1904 | IFR + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+211% · −38,5%** | +44% · −7,5% | +31% | −7,4% | 2,5 | 1,31 → 1,58 | +28% | 0,11 |
> | 1905 | VWAP + GPS médias + IFR + Quinta + Tendência ⚠️ | **+236% · −49,4%** | +51% · −9,9% | +33% | −7,5% | 2,7 | 1,58 → 1,32 | +21% | 0,15 |
> | 1906 | BB explosão + GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+175% · −56,1%** | +44% · −12,4% | +29% | −4,5% | 3,6 | 1,59 → 1,21 | +17% | 0,08 |
> | 1907 | MACD + Pullback + Bollinger + Tendência + Onda | **+261% · −40,0%** | +49% · −7,8% | +33% | −7,8% | 2,6 | 1,29 → 1,61 | +29% | 0,20 |
> | 1908 | IFR + Quinta + Tendência + Onda ⚠️ | **+197% · −35,0%** | +50% · −8,5% | +35% | −8,1% | 2,7 | 1,23 → 1,65 | +30% | 0,08 |
> | 1909 | BB explosão + IFR + Quinta + Rompe 200 ⚠️ | **+117% · −35,7%** | +37% · −8,4% | +26% | −5,0% | 2,6 | 1,43 → 1,39 | +15% | 0,10 |
> | 1910 | GPS médias + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+246% · −40,3%** | +51% · −7,6% | +33% | −6,2% | 3,3 | 1,19 → 1,54 | +25% | 0,12 |
> | 1911 | Donchian + BB explosão + IFR + Pullback + Onda | **+246% · −50,8%** | +54% · −10,7% | +34% | −6,8% | 3,1 | 1,24 → 1,51 | +24% | 0,23 |
> | 1912 | ADX + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+241% · −43,4%** | +47% · −8,5% | +29% | −5,5% | 3,0 | 1,02 → 1,96 | +20% | 0,14 |
> | 1913 | ADX + IFR + MACD + Pôr do sol | **+191% · −35,9%** | +51% · −8,4% | +32% | −5,8% | 3,4 | 1,00 → 1,85 | +20% | 0,13 |
> | 1914 | BB explosão + GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+223% · −45,7%** | +50% · −10,0% | +31% | −8,1% | 2,3 | 1,38 → 1,53 | +23% | 0,14 |
> | 1915 | IFR + Pullback + Rompe 200 + Onda | **+147% · −23,8%** | +41% · −5,4% | +29% | −5,6% | 3,0 | 1,24 → 1,57 | +26% | 0,13 |
> | 1916 | Donchian + Bollinger + Tendência + Onda | **+277% · −39,1%** | +64% · −9,7% | +37% | −8,5% | 2,9 | 1,25 → 1,57 | +30% | 0,31 |
> | 1917 | ADX + VWAP + GPS médias + Pullback + Bollinger | **+245% · −47,7%** | +52% · −9,8% | +30% | −7,0% | 2,5 | 1,43 → 1,41 | +21% | 0,22 |
> | 1918 | Quinta + Tendência ⚠️ | **+80% · −21,7%** | +45% · −9,8% | +32% | −7,4% | 2,7 | 1,77 → 1,29 | +19% | −0,07 |
> | 1919 | Donchian + GPS médias + 1ª vela 80 ⚠️ | **+201% · −40,0%** | +68% · −13,6% | +37% | −10,5% | 2,3 | 1,46 → 1,42 | +26% | 0,27 |
> | 1920 | ADX + Pôr do sol + Pullback | **+104% · −32,9%** | +42% · −9,7% | +27% | −6,0% | 2,4 | 1,32 → 1,61 | +15% | −0,06 |

> [!example]- Combinações 1921 a 1950 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1921 | ADX + BB explosão + MACD + 1ª vela 80 + Pullback ⚠️ | **+215% · −54,7%** | +48% · −11,1% | +31% | −6,0% | 3,1 | 1,15 → 1,67 | +25% | 0,09 |
> | 1922 | BB explosão + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+160% · −48,0%** | +46% · −13,0% | +31% | −6,9% | 2,6 | 1,41 → 1,39 | +18% | 0,19 |
> | 1923 | ADX + Pôr do sol + Quinta + Bollinger ⚠️ | **+144% · −32,7%** | +41% · −7,2% | +24% | −4,4% | 2,7 | 1,10 → 1,95 | +16% | 0,11 |
> | 1924 | GPS médias + IFR + MACD + Pôr do sol + Rompe 200 | **+201% · −35,9%** | +44% · −7,1% | +29% | −7,4% | 2,2 | 1,45 → 1,45 | +24% | 0,15 |
> | 1925 | ADX + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+244% · −42,3%** | +48% · −8,1% | +29% | −5,1% | 3,2 | 0,95 → 1,99 | +19% | 0,16 |
> | 1926 | GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+160% · −38,7%** | +45% · −9,4% | +30% | −5,3% | 3,2 | 1,86 → 1,18 | +18% | 0,09 |
> | 1927 | Donchian + Rompe 200 + Bollinger + Tendência + Onda | **+293% · −42,1%** | +55% · −8,5% | +33% | −7,7% | 2,6 | 1,32 → 1,51 | +26% | 0,25 |
> | 1928 | ADX + IFR + MACD + Pôr do sol + Rompe 200 | **+206% · −38,7%** | +44% · −7,1% | +29% | −5,6% | 3,0 | 1,11 → 1,78 | +21% | 0,11 |
> | 1929 | GPS médias + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+198% · −35,2%** | +44% · −6,7% | +30% | −5,3% | 3,3 | 1,27 → 1,41 | +22% | 0,02 |
> | 1930 | VWAP + Pullback + Bollinger + Tendência | **+177% · −34,9%** | +46% · −8,5% | +30% | −6,2% | 2,8 | 1,69 → 1,27 | +17% | 0,20 |
> | 1931 | ADX + Donchian + MACD + Quinta ⚠️ | **+201% · −43,5%** | +54% · −9,9% | +32% | −5,6% | 3,5 | 1,12 → 1,63 | +21% | 0,11 |
> | 1932 | ADX + MACD + 1ª vela 80 + Tendência ⚠️ | **+241% · −46,9%** | +60% · −11,5% | +38% | −9,0% | 2,8 | 1,17 → 1,72 | +29% | 0,25 |
> | 1933 | Donchian + BB explosão + Quinta + Bollinger ⚠️ | **+178% · −44,5%** | +49% · −11,0% | +28% | −5,8% | 2,6 | 1,43 → 1,39 | +15% | 0,13 |
> | 1934 | ADX + BB explosão + Quinta + Rompe 200 + Tendência ⚠️ | **+185% · −63,3%** | +45% · −15,1% | +30% | −6,5% | 2,6 | 1,38 → 1,42 | +18% | 0,14 |
> | 1935 | ADX + GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+191% · −39,3%** | +45% · −7,5% | +28% | −4,8% | 3,2 | 1,20 → 1,56 | +23% | 0,05 |
> | 1936 | ADX + Donchian + GPS médias + Tendência + Onda | **+306% · −64,8%** | +70% · −14,6% | +40% | −8,3% | 3,2 | 1,22 → 1,50 | +32% | 0,32 |
> | 1937 | VWAP + IFR + MACD + Pullback + Bollinger | **+225% · −33,5%** | +44% · −6,3% | +30% | −8,4% | 2,0 | 1,44 → 1,54 | +20% | 0,19 |
> | 1938 | ADX + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+206% · −46,6%** | +45% · −8,7% | +31% | −7,5% | 2,4 | 1,34 → 1,56 | +24% | 0,12 |
> | 1939 | Donchian + BB explosão + IFR | **+174% · −46,5%** | +64% · −16,7% | +37% | −8,5% | 2,9 | 1,33 → 1,42 | +17% | 0,52 |
> | 1940 | VWAP + BB explosão + IFR + Pullback + Tendência | **+209% · −58,4%** | +48% · −13,4% | +33% | −6,9% | 2,9 | 1,53 → 1,30 | +15% | 0,23 |
> | 1941 | ADX + VWAP + Donchian + Pôr do sol + Tendência | **+248% · −59,4%** | +55% · −13,1% | +33% | −6,7% | 3,1 | 1,28 → 1,44 | +21% | 0,19 |
> | 1942 | ADX + Donchian + GPS médias + MACD + 1ª vela 80 ⚠️ | **+309% · −51,7%** | +65% · −10,9% | +37% | −8,4% | 2,8 | 1,23 → 1,60 | +30% | 0,28 |
> | 1943 | BB explosão + Pôr do sol + Quinta + Tendência ⚠️ | **+120% · −46,9%** | +38% · −12,0% | +27% | −4,7% | 3,0 | 1,54 → 1,29 | +16% | 0,04 |
> | 1944 | GPS médias + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+250% · −41,7%** | +50% · −8,8% | +32% | −9,3% | 2,1 | 1,40 → 1,57 | +28% | 0,26 |
> | 1945 | Donchian + BB explosão + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+243% · −45,1%** | +50% · −9,5% | +29% | −7,3% | 2,2 | 1,39 → 1,54 | +18% | 0,23 |
> | 1946 | MACD + Rompe 200 + Bollinger + Tendência | **+184% · −35,8%** | +47% · −8,9% | +31% | −8,4% | 2,1 | 1,53 → 1,44 | +23% | 0,26 |
> | 1947 | GPS médias + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+199% · −35,9%** | +43% · −7,1% | +29% | −7,4% | 2,2 | 1,52 → 1,43 | +23% | 0,14 |
> | 1948 | ADX + BB explosão + MACD + Pôr do sol + Pullback | **+173% · −55,3%** | +42% · −11,6% | +28% | −4,7% | 3,2 | 1,19 → 1,57 | +21% | 0,02 |
> | 1949 | ADX + VWAP + Pôr do sol + Bollinger + Tendência | **+239% · −50,1%** | +49% · −9,1% | +30% | −6,3% | 2,7 | 1,27 → 1,56 | +20% | 0,20 |
> | 1950 | ADX + GPS médias + Bollinger + Tendência + Onda | **+324% · −54,6%** | +64% · −10,7% | +37% | −7,9% | 3,0 | 1,20 → 1,61 | +30% | 0,29 |

> [!example]- Combinações 1951 a 1980 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1951 | ADX + BB explosão + GPS médias + Tendência | **+204% · −71,3%** | +65% · −23,1% | +38% | −8,3% | 3,0 | 1,34 → 1,34 | +21% | 0,43 |
> | 1952 | ADX + BB explosão + IFR + MACD + Tendência | **+275% · −67,8%** | +60% · −16,6% | +38% | −9,4% | 2,7 | 1,26 → 1,61 | +25% | 0,39 |
> | 1953 | ADX + VWAP + 1ª vela 80 + Quinta + Tendência ⚠️ | **+218% · −47,7%** | +48% · −8,8% | +32% | −6,1% | 3,1 | 1,19 → 1,59 | +22% | 0,09 |
> | 1954 | VWAP + Donchian + GPS médias + IFR + Tendência | **+298% · −60,5%** | +64% · −13,8% | +38% | −9,3% | 2,8 | 1,53 → 1,32 | +21% | 0,40 |
> | 1955 | ADX + GPS médias + IFR + Quinta + Onda ⚠️ | **+250% · −46,2%** | +55% · −9,5% | +34% | −5,4% | 3,9 | 1,06 → 1,65 | +27% | 0,11 |
> | 1956 | ADX + Donchian + Quinta + Bollinger + Onda ⚠️ | **+282% · −40,2%** | +55% · −7,6% | +31% | −4,7% | 3,9 | 0,99 → 1,78 | +22% | 0,08 |
> | 1957 | IFR + Pôr do sol + Bollinger + Onda | **+184% · −25,5%** | +46% · −5,5% | +29% | −4,9% | 3,4 | 0,95 → 1,94 | +23% | 0,07 |
> | 1958 | ADX + BB explosão + GPS médias + Pullback | **+171% · −61,3%** | +55% · −18,0% | +32% | −5,8% | 3,3 | 1,38 → 1,29 | +18% | 0,22 |
> | 1959 | BB explosão + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+135% · −32,6%** | +33% · −5,7% | +22% | −4,0% | 2,4 | 1,86 → 1,28 | +13% | 0,05 |
> | 1960 | Donchian + MACD + Pullback + Tendência + Onda | **+274% · −46,5%** | +55% · −10,0% | +36% | −8,3% | 2,8 | 1,30 → 1,48 | +29% | 0,26 |
> | 1961 | Donchian + GPS médias + Pullback + Rompe 200 | **+193% · −41,4%** | +52% · −11,1% | +30% | −5,8% | 3,0 | 1,88 → 1,16 | +15% | 0,17 |
> | 1962 | VWAP + Donchian + IFR + Rompe 200 + Tendência | **+257% · −52,1%** | +54% · −10,4% | +34% | −7,7% | 2,8 | 1,51 → 1,32 | +18% | 0,33 |
> | 1963 | ADX + Donchian + 1ª vela 80 + Tendência + Onda ⚠️ | **+331% · −54,9%** | +65% · −10,9% | +39% | −8,1% | 3,2 | 1,10 → 1,71 | +30% | 0,24 |
> | 1964 | ADX + VWAP + IFR + MACD + Pullback | **+226% · −44,6%** | +49% · −8,0% | +32% | −6,5% | 3,0 | 1,20 → 1,59 | +18% | 0,16 |
> | 1965 | Donchian + BB explosão + GPS médias + Pôr do sol + Tendência | **+229% · −66,6%** | +57% · −16,1% | +34% | −6,3% | 3,3 | 1,53 → 1,24 | +17% | 0,26 |
> | 1966 | ADX + Donchian + 1ª vela 80 + Bollinger + Onda ⚠️ | **+338% · −43,9%** | +62% · −8,3% | +34% | −5,7% | 3,8 | 0,93 → 1,86 | +24% | 0,21 |
> | 1967 | BB explosão + Pullback + Bollinger + Tendência + Onda | **+235% · −52,6%** | +49% · −10,7% | +32% | −6,9% | 2,8 | 1,31 → 1,47 | +23% | 0,20 |
> | 1968 | ADX + GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+307% · −51,5%** | +58% · −10,9% | +33% | −7,6% | 2,7 | 1,18 → 1,73 | +24% | 0,30 |
> | 1969 | Donchian + GPS médias + MACD + Rompe 200 + Tendência | **+271% · −55,0%** | +58% · −11,8% | +35% | −7,7% | 2,9 | 1,56 → 1,29 | +22% | 0,36 |
> | 1970 | Donchian + GPS médias + IFR + Quinta + Onda ⚠️ | **+272% · −41,2%** | +57% · −8,7% | +34% | −7,5% | 2,8 | 1,27 → 1,51 | +29% | 0,12 |
> | 1971 | Donchian + MACD + Pôr do sol + Quinta ⚠️ | **+141% · −24,7%** | +40% · −5,9% | +27% | −5,1% | 2,7 | 1,30 → 1,50 | +21% | 0,04 |
> | 1972 | BB explosão + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+150% · −52,0%** | +37% · −10,6% | +27% | −4,7% | 3,0 | 1,85 → 1,19 | +13% | 0,07 |
> | 1973 | BB explosão + Pôr do sol + Pullback + Rompe 200 + Tendência | **+152% · −49,5%** | +38% · −10,1% | +27% | −4,7% | 3,0 | 1,79 → 1,21 | +14% | 0,06 |
> | 1974 | ADX + VWAP + GPS médias + Pôr do sol + Tendência | **+223% · −58,4%** | +52% · −13,1% | +32% | −6,4% | 3,1 | 1,32 → 1,36 | +23% | 0,16 |
> | 1975 | ADX + BB explosão + GPS médias + IFR | **+205% · −62,1%** | +64% · −18,7% | +36% | −7,2% | 3,3 | 1,22 → 1,47 | +23% | 0,42 |
> | 1976 | ADX + BB explosão + IFR + Pôr do sol | **+175% · −50,9%** | +51% · −12,8% | +31% | −5,4% | 3,4 | 1,07 → 1,70 | +22% | 0,12 |
> | 1977 | ADX + MACD + Quinta + Tendência ⚠️ | **+192% · −47,8%** | +51% · −11,8% | +34% | −8,2% | 2,6 | 1,27 → 1,61 | +26% | 0,16 |
> | 1978 | GPS médias + Pôr do sol + Pullback + Bollinger + Onda | **+213% · −34,7%** | +44% · −5,9% | +27% | −5,8% | 2,5 | 1,33 → 1,52 | +24% | 0,02 |
> | 1979 | Donchian + GPS médias + IFR + MACD + Rompe 200 | **+277% · −44,6%** | +57% · −9,4% | +34% | −9,2% | 2,3 | 1,49 → 1,41 | +23% | 0,35 |
> | 1980 | MACD + Pôr do sol + Pullback + Rompe 200 | **+84% · −17,3%** | +29% · −3,8% | +23% | −3,7% | 2,7 | 1,56 → 1,31 | +20% | −0,03 |

> [!example]- Combinações 1981 a 2010 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1981 | ADX + IFR + Pullback + Onda | **+213% · −34,5%** | +55% · −8,6% | +35% | −7,1% | 3,1 | 1,06 → 1,81 | +22% | 0,10 |
> | 1982 | Donchian + MACD + Tendência | **+195% · −44,4%** | +66% · −16,4% | +41% | −10,4% | 2,7 | 1,41 → 1,37 | +25% | 0,57 |
> | 1983 | Donchian + GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+279% · −44,4%** | +56% · −9,3% | +34% | −7,9% | 2,7 | 1,30 → 1,51 | +29% | 0,14 |
> | 1984 | ADX + Donchian + BB explosão + IFR + MACD | **+271% · −65,4%** | +62% · −15,1% | +36% | −7,0% | 3,4 | 1,14 → 1,60 | +25% | 0,39 |
> | 1985 | Donchian + BB explosão + IFR + Rompe 200 | **+186% · −48,4%** | +53% · −13,0% | +32% | −7,1% | 2,7 | 1,40 → 1,36 | +15% | 0,38 |
> | 1986 | VWAP + 1ª vela 80 + Pullback + Tendência ⚠️ | **+166% · −44,3%** | +45% · −12,0% | +32% | −7,8% | 2,5 | 1,52 → 1,37 | +20% | 0,09 |
> | 1987 | MACD + 1ª vela 80 + Tendência ⚠️ | **+160% · −30,7%** | +54% · −10,3% | +38% | −9,4% | 2,6 | 1,28 → 1,55 | +29% | 0,29 |
> | 1988 | BB explosão + MACD + Pôr do sol + Bollinger + Tendência | **+215% · −51,6%** | +46% · −10,4% | +30% | −6,7% | 2,5 | 1,36 → 1,47 | +21% | 0,21 |
> | 1989 | ADX + BB explosão + IFR + MACD + Bollinger | **+278% · −57,5%** | +56% · −11,8% | +33% | −6,6% | 3,1 | 1,09 → 1,74 | +25% | 0,34 |
> | 1990 | ADX + IFR + Pôr do sol + Tendência + Onda | **+282% · −47,5%** | +56% · −9,9% | +36% | −8,0% | 2,9 | 1,11 → 1,79 | +26% | 0,15 |
> | 1991 | VWAP + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+163% · −29,7%** | +36% · −5,4% | +25% | −7,3% | 1,6 | 1,46 → 1,61 | +17% | 0,07 |
> | 1992 | ADX + IFR | **+134% · −29,5%** | +71% · −14,3% | +41% | −8,5% | 3,3 | 1,00 → 1,84 | +20% | 0,33 |
> | 1993 | Donchian + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+200% · −33,4%** | +42% · −6,2% | +28% | −6,7% | 2,3 | 1,35 → 1,57 | +24% | 0,07 |
> | 1994 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+157% · −37,9%** | +37% · −7,5% | +27% | −5,5% | 2,6 | 1,35 → 1,45 | +21% | 0,04 |
> | 1995 | IFR + Pullback + Onda | **+135% · −23,4%** | +48% · −7,3% | +34% | −6,6% | 3,1 | 1,13 → 1,68 | +26% | 0,06 |
> | 1996 | VWAP + Donchian + IFR + 1ª vela 80 + Quinta ⚠️ | **+243% · −37,4%** | +49% · −7,4% | +31% | −8,3% | 2,2 | 1,34 → 1,60 | +21% | 0,08 |
> | 1997 | Donchian + GPS médias + Pôr do sol + Pullback + Onda | **+230% · −40,6%** | +50% · −8,6% | +31% | −6,4% | 2,8 | 1,34 → 1,39 | +25% | 0,04 |
> | 1998 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+184% · −22,6%** | +39% · −4,2% | +28% | −4,5% | 3,4 | 0,92 → 1,95 | +20% | −0,01 |
> | 1999 | ADX + Pôr do sol + Pullback + Tendência + Onda | **+230% · −46,0%** | +49% · −8,4% | +32% | −7,3% | 2,7 | 1,21 → 1,66 | +24% | 0,06 |
> | 2000 | ADX + VWAP + IFR + Pôr do sol + Quinta ⚠️ | **+173% · −37,7%** | +41% · −6,7% | +27% | −4,2% | 3,5 | 1,08 → 1,66 | +14% | 0,05 |
> | 2001 | ADX + Donchian + Pullback + Rompe 200 + Onda | **+235% · −44,0%** | +51% · −7,7% | +31% | −5,4% | 3,4 | 1,15 → 1,56 | +24% | 0,13 |
> | 2002 | GPS médias + IFR + MACD + Pôr do sol | **+188% · −33,8%** | +50% · −8,5% | +32% | −8,4% | 2,3 | 1,38 → 1,50 | +28% | 0,14 |
> | 2003 | Donchian + BB explosão + MACD + 1ª vela 80 + Pullback ⚠️ | **+234% · −49,2%** | +50% · −10,3% | +32% | −8,5% | 2,2 | 1,39 → 1,50 | +21% | 0,15 |
> | 2004 | ADX + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+268% · −39,0%** | +51% · −7,6% | +31% | −5,7% | 3,2 | 0,98 → 1,93 | +22% | 0,12 |
> | 2005 | GPS médias + MACD + Pôr do sol + Pullback | **+145% · −26,9%** | +41% · −6,3% | +28% | −6,4% | 2,3 | 1,65 → 1,34 | +23% | −0,06 |
> | 2006 | Donchian + BB explosão + GPS médias + Quinta + Tendência ⚠️ | **+226% · −67,6%** | +57% · −16,5% | +34% | −6,3% | 3,4 | 1,57 → 1,22 | +16% | 0,26 |
> | 2007 | GPS médias + IFR + Rompe 200 | **+146% · −28,1%** | +53% · −9,4% | +32% | −7,8% | 2,5 | 1,65 → 1,32 | +21% | 0,35 |
> | 2008 | ADX + Donchian + MACD + 1ª vela 80 ⚠️ | **+250% · −42,3%** | +63% · −9,4% | +36% | −7,0% | 3,4 | 1,04 → 1,74 | +24% | 0,24 |
> | 2009 | MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+173% · −32,7%** | +46% · −7,8% | +32% | −8,2% | 2,4 | 1,36 → 1,50 | +27% | 0,21 |
> | 2010 | BB explosão + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+156% · −36,2%** | +37% · −6,9% | +27% | −6,7% | 2,1 | 1,39 → 1,55 | +21% | −0,05 |

> [!example]- Combinações 2011 a 2040 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2011 | Quinta + Pullback + Tendência + Onda ⚠️ | **+147% · −27,2%** | +41% · −6,4% | +31% | −6,9% | 2,6 | 1,34 → 1,45 | +25% | 0,00 |
> | 2012 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+244% · −56,5%** | +56% · −13,4% | +33% | −8,3% | 2,4 | 1,56 → 1,35 | +18% | 0,18 |
> | 2013 | IFR + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+245% · −30,7%** | +47% · −5,3% | +33% | −7,0% | 2,9 | 1,09 → 1,81 | +26% | 0,11 |
> | 2014 | BB explosão + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+203% · −57,2%** | +59% · −15,8% | +36% | −8,5% | 2,8 | 1,45 → 1,33 | +21% | 0,31 |
> | 2015 | ADX + IFR + Pôr do sol + Bollinger + Onda | **+274% · −39,4%** | +52% · −7,5% | +31% | −5,6% | 3,3 | 0,90 → 1,99 | +21% | 0,12 |
> | 2016 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+202% · −49,6%** | +45% · −10,2% | +31% | −6,5% | 2,8 | 1,26 → 1,51 | +24% | 0,16 |
> | 2017 | BB explosão + Bollinger + Tendência | **+158% · −50,5%** | +56% · −18,4% | +34% | −8,1% | 2,6 | 1,49 → 1,36 | +16% | 0,39 |
> | 2018 | ADX + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+248% · −37,5%** | +50% · −7,7% | +33% | −5,2% | 3,8 | 0,85 → 1,95 | +23% | 0,04 |
> | 2019 | ADX + BB explosão + GPS médias + Quinta + Bollinger ⚠️ | **+216% · −58,6%** | +52% · −13,2% | +29% | −5,3% | 3,0 | 1,28 → 1,42 | +20% | 0,22 |
> | 2020 | Donchian + BB explosão + Pullback + Tendência + Onda | **+235% · −63,2%** | +55% · −14,7% | +35% | −7,3% | 3,0 | 1,30 → 1,37 | +22% | 0,28 |
> | 2021 | ADX + Donchian + MACD + Pôr do sol + Rompe 200 | **+218% · −39,4%** | +48% · −6,7% | +29% | −5,1% | 3,2 | 1,15 → 1,60 | +21% | 0,09 |
> | 2022 | GPS médias + IFR + Pôr do sol + Bollinger + Onda | **+268% · −37,3%** | +51% · −7,6% | +31% | −6,8% | 2,6 | 1,20 → 1,68 | +26% | 0,11 |
> | 2023 | Donchian + IFR + Pôr do sol + Onda | **+210% · −30,8%** | +53% · −7,6% | +33% | −5,6% | 3,6 | 1,06 → 1,68 | +24% | 0,11 |
> | 2024 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+220% · −33,3%** | +43% · −6,4% | +28% | −7,5% | 2,0 | 1,27 → 1,82 | +19% | 0,15 |
> | 2025 | VWAP + IFR + MACD + Bollinger + Tendência | **+275% · −44,7%** | +52% · −9,3% | +34% | −8,6% | 2,5 | 1,35 → 1,49 | +25% | 0,39 |
> | 2026 | GPS médias + Pullback + Rompe 200 + Tendência + Onda | **+219% · −45,3%** | +48% · −8,9% | +32% | −6,6% | 2,9 | 1,46 → 1,30 | +25% | 0,17 |
> | 2027 | GPS médias + MACD + Pullback + Tendência + Onda | **+247% · −46,5%** | +52% · −9,1% | +35% | −7,9% | 2,8 | 1,32 → 1,40 | +27% | 0,20 |
> | 2028 | ADX + Donchian + BB explosão + Quinta + Rompe 200 ⚠️ | **+187% · −59,7%** | +47% · −13,6% | +28% | −4,5% | 3,4 | 1,23 → 1,40 | +17% | 0,13 |
> | 2029 | ADX + GPS médias + MACD + Rompe 200 + Bollinger | **+253% · −44,9%** | +52% · −9,1% | +30% | −6,5% | 2,7 | 1,26 → 1,55 | +26% | 0,24 |
> | 2030 | GPS médias + Quinta + Bollinger ⚠️ | **+130% · −26,9%** | +47% · −8,6% | +26% | −6,0% | 2,3 | 1,81 → 1,31 | +21% | 0,04 |
> | 2031 | VWAP + GPS médias + Pullback + Bollinger + Tendência | **+258% · −47,8%** | +51% · −10,3% | +32% | −7,1% | 2,7 | 1,75 → 1,26 | +18% | 0,21 |
> | 2032 | BB explosão + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+115% · −34,6%** | +31% · −6,3% | +24% | −4,4% | 2,4 | 1,46 → 1,38 | +17% | −0,04 |
> | 2033 | ADX + VWAP + IFR + Tendência | **+229% · −53,1%** | +60% · −13,6% | +38% | −9,4% | 2,7 | 1,26 → 1,55 | +23% | 0,30 |
> | 2034 | BB explosão + GPS médias + IFR + Pullback + Rompe 200 | **+198% · −54,3%** | +47% · −11,9% | +30% | −6,5% | 2,6 | 1,70 → 1,27 | +15% | 0,21 |
> | 2035 | ADX + VWAP + IFR + Rompe 200 + Tendência | **+242% · −52,6%** | +52% · −11,2% | +34% | −8,4% | 2,5 | 1,33 → 1,50 | +22% | 0,24 |
> | 2036 | MACD + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+141% · −30,4%** | +34% · −5,3% | +26% | −5,7% | 2,3 | 1,54 → 1,38 | +21% | 0,08 |
> | 2037 | ADX + VWAP + GPS médias + IFR + Bollinger | **+291% · −48,8%** | +59% · −10,3% | +33% | −8,0% | 2,6 | 1,28 → 1,56 | +24% | 0,34 |
> | 2038 | ADX + MACD + Pullback + Rompe 200 | **+145% · −36,2%** | +42% · −8,4% | +28% | −6,0% | 2,6 | 1,27 → 1,56 | +21% | 0,03 |
> | 2039 | VWAP + Donchian + IFR + Pôr do sol + Quinta ⚠️ | **+192% · −32,8%** | +43% · −6,4% | +28% | −6,4% | 2,4 | 1,39 → 1,44 | +18% | 0,05 |
> | 2040 | BB explosão + GPS médias + Bollinger + Tendência | **+217% · −59,3%** | +60% · −16,6% | +34% | −7,2% | 3,0 | 1,56 → 1,27 | +18% | 0,41 |

> [!example]- Combinações 2041 a 2070 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2041 | Donchian + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+277% · −34,6%** | +53% · −7,2% | +33% | −6,9% | 3,0 | 1,13 → 1,72 | +29% | 0,24 |
> | 2042 | MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+83% · −17,2%** | +28% · −3,8% | +23% | −3,8% | 2,7 | 1,69 → 1,27 | +18% | −0,02 |
> | 2043 | ADX + BB explosão + Pôr do sol + Pullback + Rompe 200 | **+145% · −50,4%** | +38% · −9,8% | +25% | −4,7% | 2,6 | 1,35 → 1,41 | +16% | 0,01 |
> | 2044 | ADX + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+132% · −31,2%** | +40% · −7,0% | +26% | −3,5% | 3,8 | 0,86 → 1,92 | +17% | 0,02 |
> | 2045 | Donchian + BB explosão + GPS médias + IFR + Pôr do sol | **+235% · −57,6%** | +56% · −12,8% | +33% | −7,9% | 2,5 | 1,45 → 1,36 | +19% | 0,23 |
> | 2046 | GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+235% · −39,7%** | +58% · −10,5% | +36% | −10,9% | 2,2 | 1,33 → 1,61 | +30% | 0,30 |
> | 2047 | ADX + Donchian + MACD + Pôr do sol | **+204% · −42,4%** | +55% · −9,4% | +32% | −5,4% | 3,6 | 1,06 → 1,66 | +20% | 0,11 |
> | 2048 | ADX + BB explosão + Quinta + Tendência ⚠️ | **+173% · −63,7%** | +52% · −19,5% | +33% | −7,5% | 2,7 | 1,31 → 1,47 | +19% | 0,17 |
> | 2049 | Donchian + GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+258% · −42,5%** | +53% · −9,1% | +32% | −9,2% | 2,1 | 1,41 → 1,49 | +26% | 0,10 |
> | 2050 | Donchian + GPS médias + MACD + Pullback | **+222% · −41,8%** | +57% · −10,3% | +34% | −8,7% | 2,5 | 1,63 → 1,32 | +22% | 0,17 |
> | 2051 | ADX + BB explosão + Quinta + Pullback + Rompe 200 ⚠️ | **+143% · −51,7%** | +38% · −10,3% | +25% | −5,0% | 2,5 | 1,43 → 1,38 | +15% | 0,05 |
> | 2052 | Pôr do sol + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+193% · −22,9%** | +39% · −3,9% | +27% | −5,0% | 2,7 | 1,08 → 1,91 | +19% | 0,03 |
> | 2053 | BB explosão + IFR + Pôr do sol + Rompe 200 | **+120% · −33,8%** | +37% · −7,7% | +26% | −5,0% | 2,6 | 1,35 → 1,42 | +16% | 0,09 |
> | 2054 | Donchian + BB explosão + MACD + Quinta + Tendência ⚠️ | **+218% · −63,5%** | +51% · −15,1% | +33% | −7,1% | 2,9 | 1,38 → 1,33 | +19% | 0,27 |
> | 2055 | BB explosão + GPS médias + Pullback + Tendência | **+183% · −60,8%** | +54% · −18,1% | +34% | −6,4% | 3,4 | 1,71 → 1,16 | +15% | 0,24 |
> | 2056 | Donchian + IFR + Pôr do sol + Rompe 200 + Onda | **+225% · −33,2%** | +47% · −6,3% | +30% | −5,4% | 3,2 | 1,15 → 1,60 | +25% | 0,14 |
> | 2057 | BB explosão + IFR + Pôr do sol | **+109% · −31,4%** | +43% · −9,9% | +29% | −5,6% | 2,8 | 1,24 → 1,53 | +18% | 0,02 |
> | 2058 | Donchian + BB explosão + Pôr do sol + Bollinger | **+180% · −43,2%** | +49% · −10,8% | +28% | −5,8% | 2,6 | 1,35 → 1,43 | +16% | 0,11 |
> | 2059 | IFR + Pôr do sol + Rompe 200 + Bollinger + Onda | **+199% · −29,4%** | +40% · −5,0% | +27% | −4,9% | 2,9 | 1,08 → 1,82 | +23% | 0,09 |
> | 2060 | IFR + MACD + Pôr do sol + Rompe 200 | **+127% · −23,3%** | +37% · −5,0% | +27% | −5,3% | 2,6 | 1,25 → 1,58 | +23% | 0,11 |
> | 2061 | Donchian + BB explosão + GPS médias + Pullback + Bollinger | **+261% · −56,8%** | +57% · −12,5% | +31% | −7,3% | 2,6 | 1,67 → 1,28 | +15% | 0,24 |
> | 2062 | BB explosão + IFR + MACD + Quinta + Bollinger ⚠️ | **+213% · −37,5%** | +45% · −7,5% | +29% | −7,0% | 2,3 | 1,30 → 1,64 | +22% | 0,17 |
> | 2063 | ADX + Donchian + BB explosão + GPS médias + Quinta ⚠️ | **+212% · −67,7%** | +57% · −16,6% | +32% | −6,2% | 3,2 | 1,29 → 1,34 | +19% | 0,22 |
> | 2064 | VWAP + Donchian + IFR + Pullback + Rompe 200 | **+216% · −41,8%** | +46% · −8,6% | +30% | −6,8% | 2,5 | 1,62 → 1,31 | +16% | 0,18 |
> | 2065 | VWAP + BB explosão + IFR + Bollinger + Tendência | **+247% · −56,7%** | +52% · −12,1% | +33% | −8,0% | 2,5 | 1,38 → 1,39 | +18% | 0,37 |
> | 2066 | ADX + GPS médias + Quinta + Pullback + Onda ⚠️ | **+206% · −44,5%** | +48% · −8,9% | +30% | −5,1% | 3,4 | 1,17 → 1,51 | +26% | 0,02 |
> | 2067 | ADX + VWAP + Donchian + Pullback | **+192% · −51,5%** | +54% · −12,1% | +32% | −6,3% | 3,0 | 1,29 → 1,37 | +17% | 0,16 |
> | 2068 | Donchian + BB explosão + GPS médias + IFR + Quinta ⚠️ | **+233% · −58,4%** | +56% · −13,2% | +33% | −7,9% | 2,6 | 1,50 → 1,34 | +18% | 0,24 |
> | 2069 | ADX + GPS médias + IFR + Pôr do sol + Onda | **+253% · −45,0%** | +55% · −9,2% | +33% | −5,3% | 3,9 | 1,02 → 1,67 | +27% | 0,12 |
> | 2070 | GPS médias + Bollinger + Tendência + Onda | **+247% · −41,3%** | +60% · −9,9% | +36% | −8,0% | 2,9 | 1,27 → 1,46 | +28% | 0,28 |

> [!example]- Combinações 2071 a 2100 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2071 | GPS médias + Rompe 200 + Bollinger + Tendência + Onda | **+262% · −41,5%** | +52% · −7,9% | +32% | −7,3% | 2,6 | 1,34 → 1,41 | +27% | 0,24 |
> | 2072 | Quinta + Pullback + Rompe 200 + Tendência + Onda ⚠️ | **+159% · −32,6%** | +37% · −6,0% | +28% | −6,1% | 2,5 | 1,42 → 1,37 | +23% | 0,05 |
> | 2073 | Donchian + GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+183% · −37,0%** | +42% · −7,3% | +26% | −4,7% | 2,8 | 1,74 → 1,23 | +18% | 0,03 |
> | 2074 | Donchian + GPS médias + Tendência + Onda | **+249% · −50,3%** | +68% · −13,3% | +40% | −8,5% | 3,2 | 1,28 → 1,35 | +29% | 0,38 |
> | 2075 | VWAP + Donchian + 1ª vela 80 + Quinta + Pullback ⚠️ | **+192% · −44,5%** | +42% · −9,6% | +28% | −7,6% | 2,0 | 1,51 → 1,43 | +19% | −0,01 |
> | 2076 | ADX + Donchian + Quinta + Tendência + Onda ⚠️ | **+280% · −55,6%** | +59% · −11,6% | +36% | −7,6% | 3,0 | 1,16 → 1,62 | +27% | 0,13 |
> | 2077 | GPS médias + MACD + Quinta + Pullback ⚠️ | **+142% · −27,7%** | +41% · −6,2% | +28% | −6,5% | 2,3 | 1,74 → 1,30 | +22% | −0,05 |
> | 2078 | Donchian + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+228% · −45,6%** | +57% · −10,9% | +32% | −8,3% | 2,3 | 1,31 → 1,59 | +20% | 0,27 |
> | 2079 | MACD + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+166% · −27,0%** | +36% · −4,6% | +25% | −6,1% | 2,0 | 1,28 → 1,77 | +18% | 0,08 |
> | 2080 | ADX + Donchian + Pôr do sol + Bollinger + Onda | **+285% · −39,0%** | +55% · −7,8% | +31% | −4,7% | 3,8 | 0,94 → 1,80 | +21% | 0,09 |
> | 2081 | BB explosão + GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+176% · −46,1%** | +43% · −9,0% | +28% | −6,2% | 2,4 | 1,49 → 1,36 | +19% | 0,06 |
> | 2082 | IFR + Pôr do sol + Rompe 200 + Tendência + Onda | **+213% · −38,5%** | +44% · −7,5% | +31% | −7,4% | 2,5 | 1,26 → 1,59 | +29% | 0,15 |
> | 2083 | Donchian + BB explosão + IFR + MACD + Bollinger | **+293% · −49,8%** | +58% · −10,2% | +34% | −8,8% | 2,4 | 1,31 → 1,56 | +22% | 0,40 |
> | 2084 | BB explosão + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+218% · −50,6%** | +48% · −9,9% | +33% | −6,7% | 3,0 | 1,21 → 1,51 | +26% | 0,13 |
> | 2085 | GPS médias + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+265% · −41,0%** | +50% · −8,0% | +31% | −7,6% | 2,4 | 1,27 → 1,64 | +24% | 0,12 |
> | 2086 | VWAP + GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+241% · −55,3%** | +50% · −13,1% | +33% | −8,5% | 2,4 | 1,61 → 1,33 | +21% | 0,14 |
> | 2087 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+241% · −40,0%** | +47% · −8,3% | +29% | −8,5% | 1,9 | 1,36 → 1,65 | +21% | 0,15 |
> | 2088 | Donchian + MACD + Rompe 200 + Bollinger | **+199% · −28,6%** | +49% · −6,9% | +29% | −7,5% | 2,2 | 1,39 → 1,48 | +22% | 0,24 |
> | 2089 | Donchian + BB explosão + MACD + Pôr do sol + Tendência | **+220% · −62,3%** | +52% · −14,5% | +33% | −7,1% | 2,8 | 1,34 → 1,35 | +20% | 0,28 |
> | 2090 | Donchian + Rompe 200 + Tendência | **+168% · −44,7%** | +59% · −12,8% | +36% | −8,4% | 2,7 | 1,70 → 1,25 | +17% | 0,34 |
> | 2091 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+179% · −47,0%** | +43% · −10,3% | +28% | −6,5% | 2,3 | 1,54 → 1,36 | +19% | −0,00 |
> | 2092 | Donchian + GPS médias + Rompe 200 + Bollinger | **+230% · −37,1%** | +57% · −9,5% | +30% | −7,5% | 2,4 | 1,71 → 1,30 | +19% | 0,25 |
> | 2093 | ADX + Donchian + GPS médias + MACD + Rompe 200 | **+258% · −55,2%** | +58% · −12,0% | +33% | −7,3% | 2,8 | 1,29 → 1,44 | +25% | 0,26 |
> | 2094 | BB explosão + GPS médias + IFR + Bollinger | **+218% · −47,3%** | +59% · −12,6% | +33% | −9,3% | 2,2 | 1,46 → 1,41 | +20% | 0,39 |
> | 2095 | ADX + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+190% · −48,1%** | +53% · −12,8% | +31% | −6,0% | 3,1 | 1,18 → 1,54 | +26% | 0,20 |
> | 2096 | GPS médias + Tendência | **+137% · −37,9%** | +72% · −19,5% | +43% | −9,3% | 3,2 | 1,69 → 1,18 | +22% | 0,38 |
> | 2097 | IFR + Pôr do sol + Tendência + Onda | **+200% · −35,0%** | +51% · −8,5% | +35% | −8,1% | 2,7 | 1,18 → 1,67 | +29% | 0,15 |
> | 2098 | Donchian + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+214% · −26,5%** | +43% · −4,9% | +27% | −4,5% | 3,1 | 1,09 → 1,72 | +22% | −0,01 |
> | 2099 | Donchian + 1ª vela 80 + Tendência + Onda ⚠️ | **+256% · −39,8%** | +63% · −10,0% | +39% | −8,3% | 3,1 | 1,15 → 1,59 | +34% | 0,28 |
> | 2100 | ADX + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+328% · −47,9%** | +59% · −10,0% | +36% | −7,8% | 3,0 | 1,03 → 1,85 | +24% | 0,24 |

> [!example]- Combinações 2101 a 2130 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2101 | Donchian + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+271% · −46,9%** | +54% · −9,9% | +34% | −7,5% | 2,9 | 1,22 → 1,55 | +29% | 0,24 |
> | 2102 | VWAP + Donchian + Quinta + Pullback + Bollinger ⚠️ | **+206% · −34,4%** | +43% · −6,5% | +26% | −6,3% | 2,2 | 1,69 → 1,34 | +16% | 0,07 |
> | 2103 | Donchian + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+173% · −34,0%** | +39% · −6,4% | +27% | −5,1% | 2,7 | 1,32 → 1,39 | +23% | 0,04 |
> | 2104 | BB explosão + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+161% · −34,7%** | +45% · −8,5% | +30% | −7,3% | 2,3 | 1,28 → 1,62 | +20% | 0,20 |
> | 2105 | BB explosão + Pôr do sol + Quinta + Bollinger ⚠️ | **+104% · −30,3%** | +33% · −6,5% | +21% | −3,7% | 2,4 | 1,36 → 1,47 | +16% | 0,00 |
> | 2106 | BB explosão + IFR + MACD + Rompe 200 + Tendência | **+219% · −54,5%** | +49% · −11,9% | +33% | −8,8% | 2,3 | 1,40 → 1,41 | +20% | 0,34 |
> | 2107 | ADX + VWAP + Donchian + IFR + Rompe 200 | **+247% · −49,8%** | +54% · −10,2% | +32% | −6,5% | 3,0 | 1,21 → 1,50 | +20% | 0,25 |
> | 2108 | ADX + Rompe 200 + Tendência | **+151% · −43,8%** | +55% · −14,9% | +35% | −9,5% | 2,3 | 1,36 → 1,48 | +23% | 0,16 |
> | 2109 | ADX + Donchian + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+231% · −58,7%** | +54% · −13,0% | +31% | −5,8% | 3,2 | 1,15 → 1,57 | +21% | 0,21 |
> | 2110 | Donchian + IFR + 1ª vela 80 + Onda ⚠️ | **+261% · −31,6%** | +62% · −7,4% | +38% | −7,9% | 3,1 | 1,04 → 1,78 | +29% | 0,24 |
> | 2111 | Donchian + MACD + Pullback + Bollinger + Onda | **+276% · −36,3%** | +51% · −7,1% | +32% | −6,9% | 2,7 | 1,20 → 1,63 | +26% | 0,18 |
> | 2112 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+221% · −47,2%** | +48% · −8,2% | +32% | −6,1% | 3,1 | 1,14 → 1,60 | +21% | 0,14 |
> | 2113 | ADX + Quinta + Pullback + Bollinger + Onda ⚠️ | **+215% · −35,3%** | +44% · −6,9% | +28% | −5,3% | 2,9 | 1,07 → 1,82 | +20% | 0,05 |
> | 2114 | Donchian + GPS médias + IFR + Pôr do sol + Onda | **+275% · −42,3%** | +57% · −9,0% | +34% | −7,5% | 2,8 | 1,23 → 1,53 | +30% | 0,15 |
> | 2115 | BB explosão + IFR + MACD + Tendência | **+206% · −54,4%** | +56% · −14,8% | +37% | −9,8% | 2,5 | 1,34 → 1,45 | +23% | 0,45 |
> | 2116 | ADX + Donchian + Rompe 200 | **+161% · −38,4%** | +59% · −12,4% | +32% | −6,2% | 3,2 | 1,20 → 1,49 | +21% | 0,14 |
> | 2117 | ADX + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+191% · −39,4%** | +49% · −9,5% | +29% | −5,5% | 2,9 | 1,01 → 1,91 | +20% | 0,18 |
> | 2118 | ADX + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+251% · −38,2%** | +51% · −7,8% | +33% | −5,3% | 3,8 | 0,80 → 1,97 | +22% | 0,10 |
> | 2119 | MACD + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+241% · −37,2%** | +48% · −7,1% | +34% | −7,7% | 2,8 | 1,19 → 1,62 | +27% | 0,14 |
> | 2120 | Donchian + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+215% · −44,5%** | +56% · −11,9% | +32% | −8,7% | 2,2 | 1,52 → 1,37 | +22% | 0,24 |
> | 2121 | ADX + GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+294% · −54,2%** | +63% · −11,6% | +38% | −7,8% | 3,2 | 1,11 → 1,62 | +28% | 0,24 |
> | 2122 | ADX + VWAP + IFR + Rompe 200 + Bollinger | **+235% · −41,4%** | +48% · −8,2% | +29% | −5,9% | 2,8 | 1,17 → 1,64 | +19% | 0,24 |
> | 2123 | VWAP + Donchian + IFR + Rompe 200 + Bollinger | **+257% · −38,0%** | +50% · −7,6% | +30% | −8,2% | 2,1 | 1,45 → 1,43 | +18% | 0,27 |
> | 2124 | IFR + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+253% · −32,0%** | +47% · −5,7% | +30% | −6,3% | 2,7 | 1,04 → 1,91 | +21% | 0,20 |
> | 2125 | ADX + Donchian + BB explosão + Pôr do sol + Rompe 200 | **+189% · −58,5%** | +48% · −13,0% | +28% | −4,3% | 3,6 | 1,17 → 1,43 | +18% | 0,11 |
> | 2126 | BB explosão + IFR + Bollinger + Tendência + Onda | **+286% · −50,9%** | +56% · −10,2% | +35% | −8,4% | 2,7 | 1,21 → 1,61 | +27% | 0,32 |
> | 2127 | ADX + BB explosão + Pôr do sol + Tendência | **+175% · −62,8%** | +52% · −18,9% | +33% | −7,1% | 2,8 | 1,25 → 1,50 | +21% | 0,15 |
> | 2128 | Donchian + MACD + 1ª vela 80 + Quinta ⚠️ | **+186% · −29,8%** | +48% · −6,2% | +31% | −7,7% | 2,4 | 1,26 → 1,63 | +25% | 0,05 |
> | 2129 | ADX + BB explosão + GPS médias + Rompe 200 + Tendência | **+215% · −71,0%** | +56% · −18,5% | +34% | −7,3% | 2,8 | 1,40 → 1,32 | +19% | 0,32 |
> | 2130 | ADX + VWAP + IFR + 1ª vela 80 + Quinta ⚠️ | **+218% · −38,2%** | +47% · −7,1% | +31% | −5,9% | 3,0 | 1,05 → 1,78 | +18% | 0,07 |

> [!example]- Combinações 2131 a 2160 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2131 | ADX + BB explosão + Pôr do sol + Quinta + Bollinger ⚠️ | **+176% · −49,2%** | +41% · −9,2% | +25% | −4,1% | 2,9 | 1,11 → 1,69 | +20% | 0,09 |
> | 2132 | VWAP + Donchian + Pôr do sol + Pullback + Bollinger | **+208% · −33,7%** | +43% · −6,3% | +26% | −6,4% | 2,1 | 1,62 → 1,36 | +17% | 0,07 |
> | 2133 | Pôr do sol + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+185% · −29,3%** | +40% · −5,0% | +29% | −5,2% | 3,2 | 1,07 → 1,70 | +21% | 0,01 |
> | 2134 | ADX + BB explosão + Pôr do sol + Rompe 200 + Tendência | **+187% · −62,2%** | +46% · −14,6% | +29% | −6,5% | 2,5 | 1,33 → 1,45 | +19% | 0,12 |
> | 2135 | BB explosão + GPS médias + IFR + MACD + Pullback | **+223% · −55,7%** | +51% · −12,3% | +33% | −8,9% | 2,2 | 1,50 → 1,38 | +20% | 0,21 |
> | 2136 | Donchian + GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+326% · −45,1%** | +64% · −9,8% | +37% | −9,2% | 2,7 | 1,20 → 1,62 | +34% | 0,28 |
> | 2137 | Donchian + GPS médias + Rompe 200 + Tendência + Onda | **+261% · −51,8%** | +58% · −10,9% | +35% | −7,7% | 2,9 | 1,33 → 1,32 | +26% | 0,31 |
> | 2138 | GPS médias + MACD + Pôr do sol + Rompe 200 + Tendência | **+202% · −41,5%** | +45% · −7,5% | +30% | −6,4% | 2,7 | 1,56 → 1,29 | +23% | 0,14 |
> | 2139 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+195% · −43,9%** | +42% · −9,3% | +28% | −7,8% | 1,9 | 1,45 → 1,44 | +19% | 0,04 |
> | 2140 | Donchian + BB explosão + MACD + Pôr do sol + Pullback | **+187% · −49,0%** | +44% · −10,0% | +29% | −6,3% | 2,5 | 1,41 → 1,36 | +18% | 0,07 |
> | 2141 | VWAP + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+165% · −29,3%** | +37% · −5,3% | +25% | −6,4% | 1,9 | 1,47 → 1,45 | +18% | 0,11 |
> | 2142 | BB explosão + 1ª vela 80 + Pullback ⚠️ | **+106% · −35,7%** | +42% · −12,4% | +28% | −6,9% | 2,3 | 1,38 → 1,44 | +17% | −0,07 |
> | 2143 | MACD + Pullback + Rompe 200 + Tendência | **+150% · −31,7%** | +42% · −8,2% | +31% | −7,6% | 2,3 | 1,74 → 1,30 | +20% | 0,13 |
> | 2144 | GPS médias + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+200% · −42,7%** | +44% · −7,9% | +30% | −6,4% | 2,7 | 1,62 → 1,27 | +22% | 0,13 |
> | 2145 | GPS médias + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+323% · −42,4%** | +57% · −9,1% | +34% | −8,6% | 2,5 | 1,17 → 1,76 | +24% | 0,24 |
> | 2146 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+176% · −48,7%** | +43% · −10,8% | +28% | −6,5% | 2,3 | 1,60 → 1,33 | +18% | −0,02 |
> | 2147 | BB explosão + IFR + Quinta + Pullback + Onda ⚠️ | **+175% · −39,0%** | +41% · −7,1% | +29% | −5,5% | 2,9 | 1,20 → 1,56 | +24% | 0,01 |
> | 2148 | Donchian + BB explosão + MACD + Quinta + Pullback ⚠️ | **+184% · −50,6%** | +44% · −10,2% | +29% | −6,3% | 2,5 | 1,47 → 1,34 | +17% | 0,08 |
> | 2149 | ADX + VWAP + 1ª vela 80 + Quinta + Pullback ⚠️ | **+169% · −39,8%** | +40% · −5,9% | +27% | −5,2% | 2,8 | 1,18 → 1,61 | +16% | 0,00 |
> | 2150 | ADX + MACD + Pôr do sol + Rompe 200 + Tendência | **+208% · −44,9%** | +45% · −8,7% | +30% | −7,5% | 2,4 | 1,28 → 1,58 | +25% | 0,12 |
> | 2151 | ADX + VWAP + IFR + Bollinger | **+220% · −38,8%** | +55% · −9,6% | +32% | −6,3% | 3,1 | 1,07 → 1,70 | +17% | 0,32 |
> | 2152 | ADX + Tendência | **+139% · −45,8%** | +73% · −24,1% | +44% | −12,3% | 2,5 | 1,26 → 1,55 | +29% | 0,32 |
> | 2153 | ADX + MACD + Pullback | **+132% · −36,3%** | +49% · −10,9% | +32% | −7,1% | 2,7 | 1,18 → 1,64 | +20% | 0,00 |
> | 2154 | ADX + Donchian + Pullback + Onda | **+221% · −45,5%** | +59% · −9,8% | +35% | −6,2% | 3,5 | 1,07 → 1,62 | +23% | 0,12 |
> | 2155 | BB explosão + GPS médias + Pôr do sol + Pullback + Bollinger | **+191% · −47,1%** | +44% · −9,5% | +26% | −5,5% | 2,5 | 1,70 → 1,27 | +16% | 0,04 |
> | 2156 | ADX + VWAP + Donchian + GPS médias + IFR | **+281% · −60,7%** | +65% · −13,9% | +36% | −8,8% | 2,7 | 1,29 → 1,45 | +24% | 0,34 |
> | 2157 | ADX + BB explosão + Quinta + Pullback ⚠️ | **+131% · −53,4%** | +42% · −14,4% | +27% | −5,9% | 2,4 | 1,35 → 1,44 | +17% | 0,04 |
> | 2158 | VWAP + GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+283% · −50,2%** | +55% · −11,1% | +33% | −9,9% | 2,0 | 1,48 → 1,42 | +23% | 0,30 |
> | 2159 | VWAP + Donchian + IFR + Bollinger | **+242% · −36,0%** | +58% · −9,4% | +33% | −9,5% | 2,1 | 1,38 → 1,49 | +20% | 0,32 |
> | 2160 | ADX + VWAP + Donchian + Quinta + Bollinger ⚠️ | **+245% · −46,3%** | +51% · −8,1% | +29% | −5,5% | 2,9 | 1,19 → 1,54 | +17% | 0,16 |

> [!example]- Combinações 2161 a 2190 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2161 | ADX + VWAP + Pôr do sol + Quinta + Pullback ⚠️ | **+129% · −40,4%** | +34% · −6,4% | +24% | −3,7% | 3,0 | 1,26 → 1,41 | +13% | 0,01 |
> | 2162 | IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+236% · −28,2%** | +54% · −6,4% | +33% | −7,0% | 3,0 | 0,93 → 2,00 | +21% | 0,21 |
> | 2163 | BB explosão + MACD + Pullback + Bollinger | **+154% · −38,6%** | +43% · −8,8% | +28% | −7,3% | 2,0 | 1,43 → 1,45 | +18% | 0,14 |
> | 2164 | VWAP + Donchian + Pôr do sol + Quinta + Tendência ⚠️ | **+190% · −45,2%** | +43% · −8,8% | +29% | −5,2% | 3,1 | 1,47 → 1,25 | +18% | 0,09 |
> | 2165 | VWAP + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+179% · −36,3%** | +41% · −7,3% | +29% | −6,5% | 2,5 | 1,55 → 1,32 | +18% | 0,12 |
> | 2166 | Pôr do sol + Pullback + Rompe 200 + Tendência + Onda | **+161% · −31,9%** | +37% · −5,7% | +28% | −6,1% | 2,5 | 1,36 → 1,39 | +25% | 0,07 |
> | 2167 | ADX + IFR + MACD + Pullback + Onda | **+259% · −41,4%** | +52% · −8,1% | +34% | −7,0% | 3,1 | 1,02 → 1,79 | +23% | 0,13 |
> | 2168 | VWAP + Donchian + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+245% · −36,8%** | +49% · −7,3% | +31% | −8,3% | 2,2 | 1,29 → 1,61 | +20% | 0,15 |
> | 2169 | 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+109% · −18,2%** | +40% · −5,3% | +25% | −5,5% | 2,2 | 1,21 → 1,76 | +17% | 0,17 |
> | 2170 | VWAP + GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+286% · −47,6%** | +54% · −10,7% | +32% | −10,8% | 1,8 | 1,40 → 1,57 | +25% | 0,29 |
> | 2171 | Donchian + BB explosão + Quinta + Rompe 200 + Tendência ⚠️ | **+195% · −63,6%** | +47% · −13,6% | +30% | −5,8% | 3,0 | 1,58 → 1,23 | +14% | 0,20 |
> | 2172 | ADX + GPS médias + MACD + Bollinger | **+238% · −43,7%** | +60% · −11,1% | +33% | −7,3% | 2,8 | 1,18 → 1,59 | +28% | 0,34 |
> | 2173 | VWAP + Donchian + Pullback + Tendência | **+198% · −54,1%** | +54% · −12,9% | +34% | −6,6% | 3,2 | 1,60 → 1,19 | +15% | 0,25 |
> | 2174 | BB explosão + Pullback + Tendência | **+128% · −52,5%** | +49% · −19,6% | +34% | −7,1% | 2,9 | 1,70 → 1,20 | +12% | 0,18 |
> | 2175 | IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+171% · −26,1%** | +44% · −5,9% | +31% | −7,9% | 2,3 | 1,21 → 1,72 | +25% | 0,22 |
> | 2176 | Donchian + BB explosão + Pôr do sol + Rompe 200 + Tendência | **+198% · −60,8%** | +47% · −13,1% | +30% | −5,8% | 2,9 | 1,53 → 1,25 | +15% | 0,20 |
> | 2177 | Donchian + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+268% · −33,4%** | +49% · −5,7% | +30% | −6,1% | 2,8 | 1,06 → 1,81 | +24% | 0,04 |
> | 2178 | VWAP + Donchian + IFR + MACD + Tendência | **+279% · −51,6%** | +58% · −11,7% | +37% | −9,3% | 2,6 | 1,33 → 1,39 | +23% | 0,45 |
> | 2179 | BB explosão + GPS médias + MACD + Pullback + Tendência | **+218% · −63,9%** | +52% · −15,1% | +34% | −7,4% | 2,9 | 1,57 → 1,25 | +19% | 0,24 |
> | 2180 | IFR + MACD + Pôr do sol | **+115% · −20,2%** | +42% · −6,6% | +30% | −6,1% | 2,8 | 1,12 → 1,69 | +22% | 0,12 |
> | 2181 | ADX + BB explosão + GPS médias + Pôr do sol + Bollinger | **+219% · −57,3%** | +52% · −12,8% | +29% | −5,3% | 3,0 | 1,22 → 1,46 | +21% | 0,18 |
> | 2182 | VWAP + Donchian + Bollinger + Tendência | **+238% · −46,3%** | +59% · −11,9% | +34% | −7,9% | 2,7 | 1,46 → 1,31 | +18% | 0,38 |
> | 2183 | ADX + GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+251% · −50,1%** | +54% · −10,2% | +33% | −6,3% | 3,3 | 1,09 → 1,63 | +26% | 0,11 |
> | 2184 | BB explosão + GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+215% · −58,0%** | +51% · −13,9% | +32% | −7,4% | 2,7 | 1,50 → 1,30 | +19% | 0,26 |
> | 2185 | Donchian + BB explosão + Pôr do sol + Rompe 200 + Bollinger | **+193% · −43,3%** | +43% · −8,3% | +26% | −5,3% | 2,4 | 1,44 → 1,36 | +15% | 0,11 |
> | 2186 | Pullback + Rompe 200 + Tendência | **+110% · −29,6%** | +42% · −9,7% | +30% | −6,6% | 2,7 | 2,04 → 1,14 | +15% | 0,11 |
> | 2187 | VWAP + IFR + Pôr do sol + Rompe 200 + Tendência | **+182% · −36,4%** | +41% · −7,3% | +29% | −6,5% | 2,5 | 1,50 → 1,33 | +19% | 0,15 |
> | 2188 | ADX + VWAP + Donchian + GPS médias + Pullback | **+247% · −59,2%** | +58% · −13,3% | +33% | −7,6% | 2,7 | 1,41 → 1,32 | +20% | 0,20 |
> | 2189 | ADX + Donchian | **+148% · −41,5%** | +79% · −21,2% | +40% | −7,7% | 3,6 | 1,08 → 1,57 | +21% | 0,20 |
> | 2190 | ADX + BB explosão + IFR + MACD + Quinta ⚠️ | **+210% · −55,6%** | +49% · −11,2% | +31% | −5,8% | 3,2 | 1,07 → 1,66 | +24% | 0,17 |

> [!example]- Combinações 2191 a 2220 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2191 | ADX + Donchian + BB explosão + 1ª vela 80 ⚠️ | **+217% · −59,3%** | +63% · −17,0% | +35% | −6,5% | 3,5 | 1,07 → 1,60 | +23% | 0,27 |
> | 2192 | BB explosão + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+157% · −34,4%** | +37% · −6,5% | +24% | −5,5% | 2,0 | 1,34 → 1,59 | +18% | 0,06 |
> | 2193 | ADX + Quinta + Rompe 200 + Bollinger ⚠️ | **+144% · −35,7%** | +41% · −8,2% | +25% | −4,9% | 2,4 | 1,19 → 1,72 | +19% | 0,10 |
> | 2194 | ADX + VWAP + Pullback + Rompe 200 + Tendência | **+196% · −52,4%** | +45% · −10,7% | +30% | −6,9% | 2,5 | 1,47 → 1,33 | +18% | 0,14 |
> | 2195 | ADX + Donchian + IFR + Onda | **+267% · −44,0%** | +68% · −10,3% | +39% | −7,4% | 3,5 | 0,97 → 1,75 | +25% | 0,26 |
> | 2196 | 1ª vela 80 + Rompe 200 + Bollinger + Tendência + Onda ⚠️ | **+252% · −38,2%** | +48% · −7,4% | +31% | −7,1% | 2,6 | 1,17 → 1,69 | +22% | 0,20 |
> | 2197 | VWAP + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+217% · −43,1%** | +44% · −9,1% | +29% | −8,0% | 2,0 | 1,42 → 1,44 | +21% | 0,24 |
> | 2198 | Donchian + BB explosão + IFR + Tendência + Onda | **+275% · −61,9%** | +62% · −14,0% | +38% | −8,8% | 2,9 | 1,22 → 1,49 | +26% | 0,42 |
> | 2199 | ADX + Donchian + GPS médias + MACD | **+245% · −53,5%** | +68% · −14,6% | +37% | −8,3% | 3,0 | 1,22 → 1,47 | +28% | 0,34 |
> | 2200 | ADX + Donchian + BB explosão + GPS médias + Pôr do sol | **+214% · −66,6%** | +58% · −16,3% | +32% | −6,1% | 3,1 | 1,25 → 1,36 | +20% | 0,19 |
> | 2201 | Donchian + Pôr do sol + Pullback + Onda | **+162% · −35,1%** | +45% · −7,1% | +29% | −5,0% | 3,2 | 1,17 → 1,49 | +22% | 0,01 |
> | 2202 | VWAP + IFR + Quinta + Bollinger ⚠️ | **+151% · −26,9%** | +41% · −6,2% | +27% | −7,2% | 1,9 | 1,37 → 1,55 | +18% | 0,10 |
> | 2203 | ADX + GPS médias + Pôr do sol + Rompe 200 | **+151% · −40,0%** | +46% · −10,2% | +27% | −4,8% | 3,0 | 1,26 → 1,38 | +23% | 0,05 |
> | 2204 | Donchian + GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+261% · −42,5%** | +53% · −9,0% | +32% | −9,2% | 2,1 | 1,36 → 1,51 | +27% | 0,16 |
> | 2205 | ADX + GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+297% · −53,5%** | +62% · −11,2% | +37% | −7,3% | 3,3 | 1,00 → 1,75 | +27% | 0,24 |
> | 2206 | IFR + MACD + Bollinger + Tendência + Onda | **+319% · −46,5%** | +56% · −9,9% | +36% | −9,3% | 2,5 | 1,17 → 1,70 | +30% | 0,34 |
> | 2207 | ADX + MACD + Pôr do sol + Tendência | **+195% · −46,9%** | +52% · −11,1% | +34% | −8,3% | 2,5 | 1,20 → 1,64 | +25% | 0,16 |
> | 2208 | BB explosão + GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+218% · −47,9%** | +50% · −10,5% | +31% | −8,9% | 2,1 | 1,41 → 1,44 | +21% | 0,28 |
> | 2209 | ADX + GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+233% · −48,2%** | +51% · −9,8% | +32% | −6,7% | 2,8 | 1,15 → 1,64 | +24% | 0,09 |
> | 2210 | ADX + BB explosão + MACD + Bollinger + Tendência | **+275% · −67,9%** | +57% · −16,6% | +34% | −8,5% | 2,5 | 1,23 → 1,59 | +24% | 0,37 |
> | 2211 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+282% · −57,0%** | +60% · −13,3% | +33% | −9,7% | 2,1 | 1,41 → 1,43 | +21% | 0,32 |
> | 2212 | VWAP + Donchian + IFR + MACD + Pullback | **+244% · −41,9%** | +50% · −9,4% | +33% | −9,2% | 2,2 | 1,40 → 1,41 | +21% | 0,23 |
> | 2213 | ADX + Quinta + Bollinger + Tendência + Onda ⚠️ | **+272% · −45,0%** | +52% · −9,1% | +32% | −7,3% | 2,7 | 1,10 → 1,76 | +26% | 0,13 |
> | 2214 | ADX + Donchian + IFR + Rompe 200 + Onda | **+282% · −43,6%** | +58% · −8,7% | +35% | −6,8% | 3,2 | 1,05 → 1,69 | +25% | 0,23 |
> | 2215 | Donchian + IFR + MACD + Tendência + Onda | **+320% · −47,8%** | +62% · −10,2% | +39% | −9,7% | 2,7 | 1,20 → 1,57 | +33% | 0,42 |
> | 2216 | ADX + GPS médias + Quinta + Tendência + Onda ⚠️ | **+249% · −53,9%** | +56% · −10,6% | +35% | −7,2% | 3,0 | 1,17 → 1,52 | +30% | 0,11 |
> | 2217 | Donchian + 1ª vela 80 + Pullback + Onda ⚠️ | **+209% · −39,5%** | +52% · −8,5% | +33% | −7,1% | 2,9 | 1,14 → 1,64 | +27% | 0,09 |
> | 2218 | ADX + Donchian + GPS médias + Bollinger + Onda | **+323% · −53,4%** | +66% · −11,4% | +35% | −6,9% | 3,2 | 1,10 → 1,59 | +29% | 0,27 |
> | 2219 | GPS médias + IFR + MACD + Pullback + Onda | **+252% · −38,8%** | +51% · −7,7% | +34% | −8,2% | 2,6 | 1,25 → 1,54 | +31% | 0,16 |
> | 2220 | ADX + VWAP + Donchian + IFR | **+234% · −49,4%** | +63% · −12,4% | +36% | −7,4% | 3,2 | 1,14 → 1,54 | +19% | 0,30 |

> [!example]- Combinações 2221 a 2250 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2221 | 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+236% · −34,7%** | +55% · −8,4% | +35% | −7,8% | 2,8 | 1,08 → 1,75 | +22% | 0,23 |
> | 2222 | Donchian + Pôr do sol + Rompe 200 | **+104% · −24,6%** | +40% · −7,7% | +25% | −4,2% | 2,9 | 1,55 → 1,23 | +17% | 0,01 |
> | 2223 | ADX + Pôr do sol + Rompe 200 + Bollinger | **+146% · −34,9%** | +41% · −8,1% | +24% | −4,3% | 2,7 | 1,08 → 1,77 | +18% | 0,06 |
> | 2224 | BB explosão + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+267% · −48,8%** | +55% · −9,5% | +37% | −8,2% | 2,9 | 1,13 → 1,64 | +28% | 0,26 |
> | 2225 | ADX + Donchian + Pôr do sol + Tendência + Onda | **+282% · −54,9%** | +59% · −11,0% | +36% | −7,6% | 3,0 | 1,11 → 1,63 | +26% | 0,15 |
> | 2226 | Donchian + MACD + Bollinger | **+184% · −28,1%** | +60% · −9,9% | +33% | −8,9% | 2,3 | 1,30 → 1,55 | +26% | 0,35 |
> | 2227 | BB explosão + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+269% · −43,1%** | +51% · −9,2% | +32% | −9,0% | 2,1 | 1,22 → 1,76 | +24% | 0,29 |
> | 2228 | ADX + Donchian + BB explosão + MACD + Tendência | **+264% · −74,5%** | +63% · −20,4% | +38% | −8,9% | 2,8 | 1,24 → 1,47 | +23% | 0,43 |
> | 2229 | BB explosão + IFR + 1ª vela 80 ⚠️ | **+148% · −30,5%** | +53% · −10,3% | +34% | −8,7% | 2,4 | 1,19 → 1,69 | +23% | 0,19 |
> | 2230 | VWAP + Donchian + GPS médias + IFR + Pullback | **+268% · −50,3%** | +56% · −10,3% | +34% | −9,2% | 2,3 | 1,62 → 1,31 | +18% | 0,21 |
> | 2231 | BB explosão + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+224% · −35,5%** | +47% · −7,1% | +32% | −7,0% | 2,8 | 1,12 → 1,70 | +26% | 0,09 |
> | 2232 | VWAP + GPS médias + IFR + Pôr do sol + Pullback | **+196% · −36,2%** | +43% · −7,1% | +29% | −7,4% | 2,1 | 1,64 → 1,32 | +19% | 0,03 |
> | 2233 | ADX + BB explosão + GPS médias + MACD + Pullback | **+206% · −64,3%** | +52% · −15,2% | +32% | −7,1% | 2,7 | 1,30 → 1,39 | +22% | 0,19 |
> | 2234 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+203% · −32,6%** | +43% · −6,1% | +28% | −6,8% | 2,2 | 1,28 → 1,59 | +25% | 0,12 |
> | 2235 | Donchian + GPS médias + MACD + Bollinger | **+260% · −41,9%** | +63% · −11,3% | +34% | −10,5% | 2,0 | 1,45 → 1,41 | +25% | 0,35 |
> | 2236 | BB explosão + GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+189% · −46,5%** | +43% · −9,4% | +26% | −5,5% | 2,5 | 1,77 → 1,23 | +15% | 0,07 |
> | 2237 | BB explosão + GPS médias + Rompe 200 + Bollinger + Tendência | **+229% · −58,9%** | +52% · −13,3% | +31% | −6,4% | 2,8 | 1,61 → 1,23 | +16% | 0,32 |
> | 2238 | Donchian + Quinta + Rompe 200 ⚠️ | **+102% · −25,4%** | +40% · −8,1% | +25% | −4,2% | 2,9 | 1,67 → 1,19 | +15% | 0,02 |
> | 2239 | VWAP + MACD + Pullback + Bollinger + Tendência | **+223% · −39,7%** | +45% · −8,0% | +31% | −7,7% | 2,3 | 1,51 → 1,34 | +21% | 0,25 |
> | 2240 | Pôr do sol + Pullback + Tendência + Onda | **+149% · −27,2%** | +42% · −6,4% | +31% | −7,0% | 2,5 | 1,28 → 1,47 | +24% | 0,05 |
> | 2241 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+163% · −45,2%** | +41% · −8,3% | +26% | −3,8% | 3,6 | 0,96 → 1,72 | +19% | 0,01 |
> | 2242 | ADX + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+177% · −38,0%** | +40% · −6,8% | +27% | −4,5% | 3,2 | 0,89 → 1,89 | +19% | 0,04 |
> | 2243 | VWAP + GPS médias + IFR + Quinta + Pullback ⚠️ | **+194% · −38,0%** | +43% · −7,3% | +29% | −7,4% | 2,2 | 1,70 → 1,30 | +18% | 0,02 |
> | 2244 | BB explosão + GPS médias + IFR + Rompe 200 + Bollinger | **+232% · −49,2%** | +51% · −10,5% | +30% | −8,1% | 2,1 | 1,53 → 1,37 | +18% | 0,32 |
> | 2245 | VWAP + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+218% · −35,5%** | +43% · −7,0% | +28% | −8,4% | 1,8 | 1,31 → 1,67 | +22% | 0,23 |
> | 2246 | ADX + BB explosão + IFR + Pullback + Onda | **+230% · −55,5%** | +52% · −11,2% | +33% | −6,4% | 3,2 | 1,05 → 1,66 | +25% | 0,16 |
> | 2247 | ADX + VWAP + Pôr do sol + Quinta + Tendência ⚠️ | **+175% · −48,0%** | +42% · −8,9% | +28% | −5,5% | 2,8 | 1,24 → 1,45 | +18% | 0,08 |
> | 2248 | BB explosão + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+156% · −50,8%** | +39% · −10,3% | +28% | −5,9% | 2,6 | 1,34 → 1,36 | +20% | 0,10 |
> | 2249 | ADX + BB explosão + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+221% · −47,7%** | +48% · −9,8% | +28% | −5,2% | 3,0 | 1,06 → 1,72 | +20% | 0,21 |
> | 2250 | Donchian + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+223% · −41,2%** | +46% · −8,4% | +30% | −6,7% | 2,6 | 1,22 → 1,58 | +27% | 0,12 |

> [!example]- Combinações 2251 a 2280 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2251 | BB explosão + GPS médias + Pullback + Rompe 200 + Tendência | **+194% · −61,6%** | +48% · −14,9% | +31% | −5,6% | 3,2 | 1,75 → 1,13 | +14% | 0,22 |
> | 2252 | Donchian + BB explosão + Quinta + Rompe 200 + Bollinger ⚠️ | **+191% · −43,8%** | +43% · −8,0% | +26% | −5,4% | 2,4 | 1,51 → 1,33 | +14% | 0,13 |
> | 2253 | ADX + GPS médias + Quinta + Rompe 200 ⚠️ | **+148% · −42,2%** | +45% · −11,0% | +27% | −5,6% | 2,6 | 1,34 → 1,34 | +22% | 0,09 |
> | 2254 | BB explosão + MACD + Pullback + Tendência | **+165% · −56,0%** | +47% · −15,8% | +33% | −7,9% | 2,6 | 1,51 → 1,30 | +18% | 0,20 |
> | 2255 | VWAP + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+202% · −37,7%** | +50% · −9,5% | +32% | −9,0% | 2,1 | 1,34 → 1,50 | +23% | 0,30 |
> | 2256 | Donchian + Pôr do sol + Pullback + Rompe 200 + Onda | **+175% · −33,3%** | +40% · −6,2% | +27% | −4,9% | 2,8 | 1,26 → 1,40 | +23% | 0,06 |
> | 2257 | Donchian + GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+210% · −36,9%** | +46% · −7,4% | +29% | −7,2% | 2,2 | 1,46 → 1,36 | +23% | 0,05 |
> | 2258 | ADX + Pullback + Rompe 200 + Tendência + Onda | **+225% · −46,5%** | +49% · −8,9% | +32% | −8,0% | 2,5 | 1,25 → 1,55 | +27% | 0,13 |
> | 2259 | VWAP + GPS médias + IFR + Pôr do sol + Bollinger | **+233% · −42,5%** | +47% · −9,1% | +29% | −8,8% | 1,8 | 1,46 → 1,43 | +22% | 0,16 |
> | 2260 | ADX + VWAP + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+220% · −37,1%** | +47% · −7,1% | +31% | −5,9% | 3,0 | 1,00 → 1,80 | +17% | 0,12 |
> | 2261 | GPS médias + IFR + MACD + Tendência + Onda | **+291% · −46,4%** | +59% · −9,7% | +38% | −9,4% | 2,7 | 1,22 → 1,51 | +33% | 0,36 |
> | 2262 | ADX + VWAP + MACD + Pullback + Tendência | **+224% · −57,8%** | +49% · −12,0% | +33% | −8,1% | 2,5 | 1,31 → 1,43 | +22% | 0,21 |
> | 2263 | Donchian + GPS médias + MACD + Pullback + Rompe 200 | **+235% · −43,9%** | +50% · −8,5% | +31% | −7,6% | 2,4 | 1,67 → 1,27 | +20% | 0,17 |
> | 2264 | Donchian + BB explosão + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+179% · −47,0%** | +42% · −10,3% | +27% | −6,3% | 2,3 | 1,36 → 1,42 | +17% | 0,07 |
> | 2265 | BB explosão + IFR + MACD + Pôr do sol + Bollinger | **+216% · −37,5%** | +45% · −7,5% | +29% | −7,0% | 2,3 | 1,23 → 1,67 | +23% | 0,17 |
> | 2266 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+159% · −34,1%** | +37% · −6,4% | +27% | −6,9% | 2,0 | 1,32 → 1,58 | +22% | −0,02 |
> | 2267 | ADX + VWAP + BB explosão + IFR + Pullback | **+201% · −60,1%** | +49% · −13,4% | +31% | −6,6% | 2,8 | 1,23 → 1,46 | +18% | 0,19 |
> | 2268 | GPS médias + 1ª vela 80 + Quinta ⚠️ | **+121% · −29,8%** | +46% · −9,4% | +29% | −7,6% | 2,1 | 1,42 → 1,39 | +22% | −0,11 |
> | 2269 | ADX + BB explosão + IFR + MACD + 1ª vela 80 ⚠️ | **+258% · −54,3%** | +55% · −10,4% | +35% | −7,3% | 3,0 | 1,01 → 1,76 | +26% | 0,26 |
> | 2270 | ADX + Donchian + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+251% · −66,8%** | +64% · −15,8% | +36% | −8,1% | 2,8 | 1,22 → 1,47 | +23% | 0,33 |
> | 2271 | ADX + 1ª vela 80 + Bollinger ⚠️ | **+175% · −36,7%** | +59% · −12,1% | +32% | −6,4% | 3,1 | 0,86 → 1,97 | +19% | 0,29 |
> | 2272 | ADX + BB explosão + Pôr do sol + Pullback | **+134% · −52,1%** | +42% · −13,8% | +27% | −5,5% | 2,6 | 1,26 → 1,48 | +18% | −0,02 |
> | 2273 | VWAP + IFR + MACD + Quinta + Pullback ⚠️ | **+161% · −28,8%** | +37% · −5,7% | +28% | −7,4% | 2,0 | 1,41 → 1,42 | +19% | 0,04 |
> | 2274 | BB explosão + IFR + Pôr do sol + Pullback + Onda | **+178% · −37,2%** | +41% · −6,5% | +29% | −5,4% | 2,9 | 1,14 → 1,58 | +25% | 0,02 |
> | 2275 | Donchian + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+218% · −39,8%** | +47% · −8,2% | +31% | −7,0% | 2,6 | 1,29 → 1,40 | +25% | 0,12 |
> | 2276 | GPS médias + MACD + Quinta + Bollinger ⚠️ | **+173% · −33,9%** | +46% · −8,6% | +28% | −8,3% | 1,8 | 1,48 → 1,42 | +25% | 0,11 |
> | 2277 | ADX + Donchian + BB explosão + Quinta ⚠️ | **+175% · −60,7%** | +54% · −17,7% | +31% | −5,3% | 3,4 | 1,14 → 1,45 | +18% | 0,15 |
> | 2278 | Donchian + BB explosão + Pôr do sol + Pullback + Rompe 200 | **+160% · −47,5%** | +40% · −9,3% | +26% | −4,5% | 2,8 | 1,63 → 1,20 | +13% | 0,06 |
> | 2279 | GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+145% · −28,3%** | +41% · −6,9% | +24% | −5,3% | 2,1 | 1,75 → 1,29 | +20% | 0,05 |
> | 2280 | MACD + Quinta + Pullback + Tendência + Onda ⚠️ | **+190% · −35,0%** | +41% · −6,4% | +31% | −7,1% | 2,5 | 1,26 → 1,50 | +28% | 0,06 |

> [!example]- Combinações 2281 a 2310 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2281 | Donchian + Quinta + Tendência + Onda ⚠️ | **+205% · −38,4%** | +54% · −9,1% | +35% | −7,6% | 2,9 | 1,21 → 1,46 | +29% | 0,10 |
> | 2282 | GPS médias + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+239% · −42,0%** | +47% · −8,9% | +29% | −9,4% | 1,7 | 1,39 → 1,54 | +22% | 0,23 |
> | 2283 | ADX + VWAP + Donchian + Pullback + Rompe 200 | **+204% · −50,2%** | +47% · −9,6% | +29% | −6,2% | 2,6 | 1,36 → 1,32 | +17% | 0,15 |
> | 2284 | ADX + VWAP + GPS médias + IFR + Quinta ⚠️ | **+221% · −50,1%** | +51% · −10,1% | +31% | −7,1% | 2,6 | 1,25 → 1,47 | +22% | 0,14 |
> | 2285 | Quinta + Pullback + Rompe 200 + Bollinger + Onda ⚠️ | **+142% · −22,7%** | +33% · −3,9% | +24% | −4,5% | 2,4 | 1,27 → 1,52 | +22% | 0,03 |
> | 2286 | ADX + Donchian + 1ª vela 80 + Quinta + Onda ⚠️ | **+256% · −44,7%** | +54% · −8,1% | +33% | −5,2% | 3,8 | 0,89 → 1,77 | +23% | 0,03 |
> | 2287 | ADX + BB explosão + MACD + 1ª vela 80 + Tendência ⚠️ | **+255% · −65,9%** | +56% · −15,9% | +36% | −8,3% | 2,8 | 1,15 → 1,61 | +27% | 0,28 |
> | 2288 | Quinta + Pullback + Bollinger + Onda ⚠️ | **+129% · −20,0%** | +37% · −4,4% | +25% | −4,6% | 2,7 | 1,15 → 1,66 | +22% | −0,02 |
> | 2289 | VWAP + Donchian + GPS médias + IFR + Bollinger | **+311% · −49,7%** | +61% · −11,3% | +34% | −10,6% | 2,0 | 1,48 → 1,39 | +21% | 0,34 |
> | 2290 | ADX + GPS médias + Quinta ⚠️ | **+136% · −40,9%** | +53% · −14,4% | +31% | −6,0% | 3,0 | 1,24 → 1,38 | +25% | 0,09 |
> | 2291 | VWAP + GPS médias + IFR + Quinta + Bollinger ⚠️ | **+230% · −42,5%** | +47% · −9,1% | +29% | −8,9% | 1,8 | 1,52 → 1,41 | +21% | 0,14 |
> | 2292 | VWAP + BB explosão + IFR + Pullback + Bollinger | **+206% · −43,9%** | +45% · −8,7% | +29% | −8,0% | 2,0 | 1,46 → 1,40 | +16% | 0,20 |
> | 2293 | VWAP + IFR + Pullback + Tendência + Onda | **+229% · −40,7%** | +48% · −7,9% | +34% | −8,0% | 2,7 | 1,26 → 1,44 | +26% | 0,19 |
> | 2294 | Donchian + MACD + Rompe 200 + Tendência | **+208% · −43,2%** | +54% · −11,7% | +35% | −9,0% | 2,4 | 1,48 → 1,32 | +21% | 0,36 |
> | 2295 | ADX + Pôr do sol + Pullback + Bollinger + Onda | **+217% · −35,5%** | +45% · −6,9% | +28% | −5,3% | 2,8 | 1,01 → 1,85 | +19% | 0,04 |
> | 2296 | VWAP + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+209% · −44,7%** | +44% · −9,3% | +32% | −9,2% | 2,1 | 1,39 → 1,41 | +23% | 0,17 |
> | 2297 | BB explosão + GPS médias + IFR + 1ª vela 80 ⚠️ | **+205% · −46,8%** | +58% · −12,7% | +35% | −10,4% | 2,1 | 1,34 → 1,47 | +23% | 0,31 |
> | 2298 | Donchian + BB explosão + IFR + MACD + Quinta ⚠️ | **+223% · −49,1%** | +50% · −10,2% | +32% | −7,9% | 2,4 | 1,29 → 1,48 | +21% | 0,23 |
> | 2299 | BB explosão + GPS médias + IFR + Tendência + Onda | **+244% · −61,6%** | +59% · −14,6% | +37% | −8,4% | 2,9 | 1,23 → 1,41 | +27% | 0,38 |
> | 2300 | Donchian + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+271% · −33,5%** | +50% · −5,6% | +30% | −6,0% | 2,8 | 1,01 → 1,84 | +23% | 0,10 |
> | 2301 | ADX + IFR + Rompe 200 + Tendência + Onda | **+276% · −50,3%** | +56% · −10,8% | +36% | −9,2% | 2,5 | 1,15 → 1,69 | +29% | 0,23 |
> | 2302 | ADX + GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+188% · −43,5%** | +45% · −8,7% | +28% | −5,6% | 2,8 | 1,24 → 1,45 | +25% | 0,09 |
> | 2303 | VWAP + IFR + Pôr do sol + Rompe 200 + Bollinger | **+167% · −29,2%** | +37% · −5,3% | +25% | −6,4% | 1,9 | 1,40 → 1,48 | +19% | 0,12 |
> | 2304 | ADX + BB explosão + GPS médias + MACD + Tendência | **+234% · −73,6%** | +60% · −19,4% | +37% | −8,6% | 2,8 | 1,27 → 1,39 | +24% | 0,39 |
> | 2305 | VWAP + IFR + MACD + Quinta + Tendência ⚠️ | **+205% · −40,0%** | +45% · −7,9% | +32% | −7,8% | 2,5 | 1,32 → 1,40 | +23% | 0,19 |
> | 2306 | VWAP + Donchian + 1ª vela 80 + Tendência ⚠️ | **+222% · −49,5%** | +58% · −13,9% | +36% | −9,7% | 2,4 | 1,35 → 1,38 | +22% | 0,32 |
> | 2307 | ADX + BB explosão + GPS médias + Pullback + Rompe 200 | **+182% · −62,1%** | +48% · −14,8% | +29% | −5,7% | 2,8 | 1,43 → 1,26 | +17% | 0,19 |
> | 2308 | MACD + Quinta + Tendência ⚠️ | **+116% · −29,2%** | +43% · −9,7% | +32% | −8,5% | 2,3 | 1,42 → 1,37 | +25% | 0,12 |
> | 2309 | GPS médias + IFR + Rompe 200 + Bollinger + Onda | **+264% · −39,3%** | +51% · −8,2% | +31% | −7,7% | 2,3 | 1,25 → 1,56 | +27% | 0,24 |
> | 2310 | ADX + BB explosão + IFR + Rompe 200 | **+171% · −51,7%** | +51% · −14,3% | +31% | −6,2% | 3,0 | 1,12 → 1,57 | +20% | 0,26 |

> [!example]- Combinações 2311 a 2340 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2311 | IFR + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+296% · −44,0%** | +55% · −9,1% | +38% | −9,2% | 2,7 | 1,09 → 1,71 | +28% | 0,30 |
> | 2312 | ADX + Donchian + MACD + Pullback + Onda | **+265% · −49,5%** | +55% · −8,4% | +34% | −6,5% | 3,3 | 1,04 → 1,64 | +23% | 0,16 |
> | 2313 | ADX + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+190% · −41,9%** | +41% · −8,0% | +26% | −5,4% | 2,4 | 1,12 → 1,76 | +21% | 0,11 |
> | 2314 | Quinta + Rompe 200 + Bollinger + Tendência + Onda ⚠️ | **+198% · −35,9%** | +41% · −6,7% | +28% | −6,5% | 2,3 | 1,27 → 1,54 | +24% | 0,08 |
> | 2315 | VWAP + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+259% · −42,1%** | +51% · −8,5% | +35% | −9,5% | 2,4 | 1,26 → 1,53 | +27% | 0,32 |
> | 2316 | GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+227% · −41,6%** | +59% · −10,5% | +38% | −8,1% | 3,1 | 1,16 → 1,49 | +27% | 0,24 |
> | 2317 | VWAP + GPS médias + IFR + Tendência | **+221% · −50,7%** | +59% · −13,4% | +37% | −9,7% | 2,5 | 1,50 → 1,29 | +21% | 0,35 |
> | 2318 | ADX + BB explosão + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+261% · −60,7%** | +58% · −14,7% | +32% | −7,3% | 2,7 | 1,18 → 1,57 | +24% | 0,32 |
> | 2319 | ADX + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+206% · −50,5%** | +55% · −12,6% | +31% | −5,6% | 3,3 | 0,95 → 1,76 | +20% | 0,28 |
> | 2320 | VWAP + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+133% · −30,6%** | +33% · −5,6% | +25% | −5,4% | 2,2 | 1,70 → 1,28 | +16% | 0,03 |
> | 2321 | ADX + IFR + Tendência + Onda | **+261% · −48,2%** | +65% · −12,7% | +41% | −10,4% | 2,7 | 1,08 → 1,74 | +30% | 0,28 |
> | 2322 | ADX + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+242% · −45,2%** | +48% · −9,1% | +29% | −6,3% | 2,6 | 1,01 → 1,87 | +20% | 0,20 |
> | 2323 | ADX + IFR + Rompe 200 + Bollinger + Onda | **+271% · −42,4%** | +52% · −8,5% | +31% | −6,4% | 2,9 | 0,96 → 1,86 | +24% | 0,20 |
> | 2324 | ADX + VWAP + Donchian + Pôr do sol + Bollinger | **+248% · −45,3%** | +51% · −8,1% | +29% | −5,5% | 2,9 | 1,14 → 1,56 | +16% | 0,16 |
> | 2325 | VWAP + Donchian + GPS médias + Pullback + Tendência | **+259% · −60,3%** | +57% · −13,6% | +35% | −7,7% | 2,9 | 1,65 → 1,18 | +17% | 0,25 |
> | 2326 | ADX + VWAP + Donchian + Rompe 200 + Tendência | **+242% · −61,1%** | +55% · −13,8% | +33% | −7,9% | 2,6 | 1,31 → 1,35 | +19% | 0,27 |
> | 2327 | ADX + Pullback + Rompe 200 | **+104% · −29,8%** | +42% · −9,6% | +27% | −6,3% | 2,3 | 1,36 → 1,38 | +19% | 0,04 |
> | 2328 | ADX + GPS médias + 1ª vela 80 ⚠️ | **+176% · −48,0%** | +65% · −17,4% | +36% | −7,4% | 3,2 | 1,09 → 1,58 | +27% | 0,26 |
> | 2329 | VWAP + IFR + Pôr do sol + Pullback + Rompe 200 | **+135% · −29,9%** | +33% · −5,4% | +25% | −5,3% | 2,3 | 1,62 → 1,30 | +17% | 0,04 |
> | 2330 | VWAP + BB explosão + IFR + 1ª vela 80 + Tendência ⚠️ | **+233% · −54,8%** | +52% · −12,0% | +34% | −9,0% | 2,4 | 1,30 → 1,46 | +21% | 0,29 |
> | 2331 | IFR + MACD + 1ª vela 80 ⚠️ | **+157% · −23,5%** | +53% · −7,3% | +36% | −9,4% | 2,4 | 1,10 → 1,79 | +26% | 0,27 |
> | 2332 | ADX + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+201% · −34,1%** | +44% · −6,8% | +29% | −5,0% | 3,3 | 0,85 → 1,88 | +19% | 0,02 |
> | 2333 | ADX + VWAP + Donchian + Tendência | **+229% · −61,6%** | +64% · −18,0% | +38% | −8,8% | 2,8 | 1,25 → 1,39 | +21% | 0,35 |
> | 2334 | ADX + GPS médias + Pôr do sol + Tendência + Onda | **+251% · −52,4%** | +56% · −10,2% | +35% | −7,2% | 3,0 | 1,13 → 1,54 | +30% | 0,13 |
> | 2335 | VWAP + IFR + Tendência | **+154% · −35,4%** | +55% · −11,4% | +37% | −9,9% | 2,5 | 1,38 → 1,33 | +21% | 0,32 |
> | 2336 | ADX + GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+236% · −48,8%** | +51% · −9,9% | +31% | −6,7% | 2,8 | 1,10 → 1,67 | +24% | 0,13 |
> | 2337 | ADX + BB explosão + IFR + MACD + Pôr do sol | **+213% · −54,8%** | +49% · −10,9% | +31% | −5,9% | 3,2 | 1,01 → 1,69 | +23% | 0,16 |
> | 2338 | BB explosão + Quinta + Pullback + Tendência + Onda ⚠️ | **+172% · −52,0%** | +42% · −10,6% | +30% | −6,2% | 2,7 | 1,28 → 1,36 | +22% | 0,06 |
> | 2339 | ADX + VWAP + BB explosão + Pullback + Tendência | **+195% · −70,3%** | +50% · −18,2% | +32% | −7,2% | 2,7 | 1,33 → 1,31 | +16% | 0,24 |
> | 2340 | GPS médias + MACD + Tendência | **+174% · −42,0%** | +62% · −14,3% | +39% | −9,8% | 2,7 | 1,47 → 1,27 | +27% | 0,41 |

> [!example]- Combinações 2341 a 2370 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2341 | Donchian + IFR + MACD + Bollinger + Onda | **+330% · −39,8%** | +58% · −7,8% | +35% | −8,0% | 2,8 | 1,07 → 1,72 | +27% | 0,32 |
> | 2342 | GPS médias + MACD + Pôr do sol + Pullback + Rompe 200 | **+157% · −29,9%** | +37% · −5,6% | +26% | −5,8% | 2,2 | 1,69 → 1,27 | +20% | 0,00 |
> | 2343 | GPS médias + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+198% · −32,0%** | +44% · −6,2% | +29% | −6,0% | 2,7 | 1,17 → 1,57 | +26% | 0,00 |
> | 2344 | VWAP + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+179% · −49,7%** | +40% · −11,3% | +29% | −7,3% | 2,2 | 1,57 → 1,31 | +18% | 0,12 |
> | 2345 | Donchian + BB explosão + IFR + MACD + 1ª vela 80 ⚠️ | **+276% · −47,6%** | +57% · −10,0% | +35% | −9,8% | 2,3 | 1,23 → 1,60 | +25% | 0,34 |
> | 2346 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+259% · −46,9%** | +54% · −8,2% | +32% | −5,1% | 3,9 | 0,85 → 1,79 | +22% | 0,09 |
> | 2347 | VWAP + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+212% · −34,2%** | +43% · −6,5% | +31% | −9,6% | 1,9 | 1,31 → 1,59 | +21% | 0,13 |
> | 2348 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+209% · −50,0%** | +47% · −11,0% | +28% | −7,9% | 1,9 | 1,40 → 1,43 | +20% | 0,11 |
> | 2349 | VWAP + Donchian + GPS médias + IFR + 1ª vela 80 ⚠️ | **+290% · −50,2%** | +60% · −11,5% | +35% | −11,6% | 1,9 | 1,38 → 1,45 | +24% | 0,31 |
> | 2350 | Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+64% · −15,3%** | +29% · −3,6% | +22% | −3,1% | 3,0 | 0,99 → 1,80 | +15% | −0,01 |
> | 2351 | ADX + GPS médias + Pôr do sol + Pullback + Onda | **+209% · −43,1%** | +48% · −8,5% | +30% | −5,5% | 3,1 | 1,12 → 1,53 | +25% | 0,02 |
> | 2352 | ADX + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+248% · −43,5%** | +51% · −8,6% | +34% | −7,0% | 3,0 | 0,99 → 1,77 | +24% | 0,05 |
> | 2353 | IFR + MACD + Pullback + Onda | **+177% · −28,1%** | +46% · −6,3% | +33% | −6,8% | 3,0 | 1,06 → 1,66 | +26% | 0,13 |
> | 2354 | ADX + IFR + Bollinger + Onda | **+254% · −39,2%** | +60% · −9,8% | +35% | −7,2% | 3,1 | 0,85 → 1,93 | +23% | 0,24 |
> | 2355 | BB explosão + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+144% · −32,6%** | +41% · −7,7% | +26% | −6,0% | 2,1 | 1,23 → 1,66 | +17% | 0,03 |
> | 2356 | ADX + Donchian + BB explosão + Pôr do sol | **+177% · −59,9%** | +54% · −17,1% | +31% | −5,0% | 3,6 | 1,08 → 1,48 | +19% | 0,12 |
> | 2357 | Donchian + GPS médias + MACD + Rompe 200 + Bollinger | **+275% · −43,8%** | +54% · −9,4% | +31% | −9,0% | 2,0 | 1,51 → 1,37 | +22% | 0,28 |
> | 2358 | ADX + Pôr do sol + Bollinger + Tendência + Onda | **+275% · −45,1%** | +53% · −9,2% | +32% | −7,4% | 2,7 | 1,05 → 1,79 | +25% | 0,15 |
> | 2359 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+156% · −27,7%** | +36% · −4,9% | +26% | −6,5% | 2,0 | 1,22 → 1,71 | +17% | 0,01 |
> | 2360 | BB explosão + MACD + Pullback + Rompe 200 + Bollinger | **+166% · −38,2%** | +38% · −6,6% | +25% | −6,5% | 2,0 | 1,49 → 1,38 | +17% | 0,13 |
> | 2361 | Donchian + BB explosão + Quinta + Pullback + Rompe 200 ⚠️ | **+158% · −50,9%** | +39% · −9,8% | +26% | −4,6% | 2,8 | 1,70 → 1,17 | +12% | 0,08 |
> | 2362 | ADX + VWAP + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+224% · −49,5%** | +51% · −10,4% | +31% | −8,0% | 2,3 | 1,29 → 1,47 | +23% | 0,14 |
> | 2363 | ADX + Pullback + Tendência + Onda | **+212% · −49,2%** | +56% · −11,6% | +36% | −9,3% | 2,5 | 1,18 → 1,61 | +27% | 0,15 |
> | 2364 | MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+151% · −24,9%** | +40% · −5,5% | +27% | −7,0% | 2,0 | 1,16 → 1,85 | +17% | 0,08 |
> | 2365 | GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+135% · −34,2%** | +40% · −8,3% | +26% | −6,5% | 2,0 | 1,43 → 1,38 | +22% | 0,07 |
> | 2366 | VWAP + GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+232% · −44,3%** | +47% · −9,4% | +29% | −10,3% | 1,5 | 1,55 → 1,41 | +21% | 0,17 |
> | 2367 | ADX + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+195% · −34,6%** | +43% · −6,5% | +29% | −5,2% | 3,2 | 0,93 → 1,81 | +21% | −0,03 |
> | 2368 | MACD + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+168% · −27,4%** | +36% · −4,7% | +25% | −6,3% | 1,9 | 1,19 → 1,81 | +18% | 0,12 |
> | 2369 | Donchian + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+167% · −42,1%** | +48% · −10,7% | +30% | −7,1% | 2,4 | 1,28 → 1,47 | +18% | 0,03 |
> | 2370 | BB explosão + GPS médias + MACD + Bollinger + Tendência | **+254% · −62,5%** | +56% · −14,1% | +34% | −8,8% | 2,4 | 1,43 → 1,33 | +21% | 0,40 |

> [!example]- Combinações 2371 a 2400 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2371 | GPS médias + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+241% · −45,3%** | +51% · −9,6% | +33% | −7,6% | 2,7 | 1,23 → 1,45 | +26% | 0,22 |
> | 2372 | Quinta + Bollinger + Tendência + Onda ⚠️ | **+183% · −32,3%** | +46% · −7,6% | +31% | −7,0% | 2,5 | 1,17 → 1,62 | +24% | 0,06 |
> | 2373 | ADX + Donchian + BB explosão + MACD + Bollinger | **+275% · −65,4%** | +59% · −15,1% | +33% | −6,8% | 3,0 | 1,11 → 1,58 | +23% | 0,36 |
> | 2374 | GPS médias + MACD + Pôr do sol + Bollinger | **+176% · −33,8%** | +46% · −8,6% | +28% | −8,3% | 1,8 | 1,39 → 1,47 | +24% | 0,11 |
> | 2375 | GPS médias + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+154% · −30,5%** | +37% · −5,4% | +26% | −5,8% | 2,2 | 1,77 → 1,24 | +19% | 0,02 |
> | 2376 | BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+160% · −33,9%** | +37% · −6,3% | +24% | −5,5% | 2,0 | 1,26 → 1,64 | +18% | 0,08 |
> | 2377 | ADX + VWAP + Rompe 200 + Bollinger + Tendência | **+235% · −50,1%** | +49% · −9,8% | +30% | −7,6% | 2,3 | 1,30 → 1,45 | +21% | 0,25 |
> | 2378 | ADX + GPS médias + Pôr do sol | **+139% · −38,7%** | +54% · −13,4% | +31% | −5,6% | 3,2 | 1,16 → 1,43 | +25% | 0,03 |
> | 2379 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+176% · −34,5%** | +40% · −6,8% | +27% | −7,4% | 1,9 | 1,32 → 1,54 | +21% | 0,01 |
> | 2380 | VWAP + Donchian + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+236% · −55,5%** | +50% · −13,1% | +32% | −8,3% | 2,3 | 1,41 → 1,33 | +20% | 0,26 |
> | 2381 | Donchian + GPS médias + IFR + Rompe 200 + Onda | **+269% · −43,3%** | +57% · −9,3% | +34% | −8,4% | 2,5 | 1,26 → 1,44 | +28% | 0,31 |
> | 2382 | GPS médias + MACD + Pôr do sol + Rompe 200 + Bollinger | **+190% · −35,9%** | +41% · −7,2% | +26% | −7,2% | 1,8 | 1,47 → 1,41 | +23% | 0,10 |
> | 2383 | GPS médias + IFR + MACD + Rompe 200 | **+185% · −35,9%** | +50% · −9,2% | +32% | −9,5% | 2,0 | 1,42 → 1,38 | +25% | 0,30 |
> | 2384 | IFR + MACD + Pullback + Rompe 200 + Onda | **+191% · −31,9%** | +41% · −5,7% | +30% | −6,4% | 2,7 | 1,15 → 1,59 | +26% | 0,14 |
> | 2385 | GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+123% · −30,5%** | +46% · −9,8% | +29% | −7,6% | 2,1 | 1,34 → 1,44 | +22% | 0,03 |
> | 2386 | Donchian + GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+256% · −44,6%** | +53% · −9,6% | +32% | −10,0% | 1,9 | 1,39 → 1,42 | +25% | 0,26 |
> | 2387 | GPS médias + Quinta + Tendência + Onda ⚠️ | **+182% · −38,1%** | +51% · −8,9% | +33% | −7,1% | 2,9 | 1,24 → 1,35 | +24% | 0,04 |
> | 2388 | Donchian + BB explosão + GPS médias + Tendência | **+211% · −68,4%** | +67% · −21,3% | +38% | −8,3% | 3,1 | 1,50 → 1,19 | +16% | 0,54 |
> | 2389 | ADX + BB explosão + Quinta + Rompe 200 + Bollinger ⚠️ | **+174% · −49,5%** | +42% · −9,6% | +25% | −4,5% | 2,7 | 1,17 → 1,54 | +18% | 0,13 |
> | 2390 | VWAP + Donchian + BB explosão + IFR + Tendência | **+238% · −68,2%** | +58% · −16,2% | +36% | −8,9% | 2,6 | 1,35 → 1,30 | +17% | 0,46 |
> | 2391 | VWAP + Quinta + Bollinger + Tendência ⚠️ | **+153% · −31,7%** | +42% · −6,8% | +28% | −6,0% | 2,6 | 1,48 → 1,28 | +18% | 0,14 |
> | 2392 | ADX + BB explosão + Pôr do sol + Rompe 200 + Bollinger | **+177% · −48,1%** | +42% · −9,1% | +25% | −4,0% | 3,0 | 1,09 → 1,58 | +19% | 0,09 |
> | 2393 | ADX + GPS médias + IFR + Rompe 200 + Onda | **+248% · −48,2%** | +55% · −10,2% | +34% | −6,5% | 3,2 | 1,06 → 1,58 | +30% | 0,24 |
> | 2394 | BB explosão + GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+237% · −60,7%** | +55% · −13,3% | +35% | −9,8% | 2,3 | 1,35 → 1,38 | +24% | 0,33 |
> | 2395 | ADX + IFR + 1ª vela 80 + Onda ⚠️ | **+232% · −39,3%** | +59% · −9,7% | +37% | −6,8% | 3,5 | 0,76 → 1,91 | +24% | 0,18 |
> | 2396 | MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+108% · −20,2%** | +33% · −3,9% | +23% | −5,2% | 1,9 | 1,33 → 1,52 | +20% | 0,07 |
> | 2397 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+172% · −42,4%** | +40% · −6,0% | +27% | −5,3% | 2,7 | 1,12 → 1,63 | +15% | 0,04 |
> | 2398 | Donchian + GPS médias + Pullback + Onda | **+213% · −40,2%** | +58% · −10,7% | +34% | −8,3% | 2,6 | 1,30 → 1,33 | +27% | 0,17 |
> | 2399 | VWAP + Donchian + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+241% · −44,5%** | +49% · −9,4% | +31% | −9,2% | 2,0 | 1,33 → 1,50 | +21% | 0,25 |
> | 2400 | ADX + BB explosão + IFR | **+159% · −53,9%** | +61% · −19,6% | +36% | −7,2% | 3,2 | 1,02 → 1,63 | +23% | 0,36 |

> [!example]- Combinações 2401 a 2430 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2401 | ADX + VWAP + GPS médias + Tendência | **+206% · −60,2%** | +61% · −17,7% | +36% | −8,5% | 2,8 | 1,28 → 1,31 | +23% | 0,32 |
> | 2402 | BB explosão + IFR + Quinta + Tendência + Onda ⚠️ | **+216% · −50,1%** | +49% · −10,1% | +33% | −7,6% | 2,7 | 1,18 → 1,53 | +26% | 0,14 |
> | 2403 | ADX + GPS médias + IFR + Onda | **+234% · −47,1%** | +64% · −12,6% | +38% | −7,0% | 3,5 | 0,98 → 1,62 | +30% | 0,27 |
> | 2404 | VWAP + Pôr do sol + Bollinger + Tendência | **+155% · −32,5%** | +42% · −7,0% | +28% | −6,0% | 2,5 | 1,40 → 1,31 | +19% | 0,18 |
> | 2405 | MACD + Pullback | **+64% · −15,6%** | +37% · −7,6% | +29% | −6,7% | 2,4 | 1,44 → 1,31 | +23% | −0,18 |
> | 2406 | VWAP + BB explosão + IFR + Pôr do sol + Tendência | **+187% · −55,0%** | +45% · −12,1% | +31% | −7,0% | 2,6 | 1,32 → 1,32 | +17% | 0,20 |
> | 2407 | BB explosão + GPS médias + Pôr do sol + Tendência | **+163% · −57,2%** | +51% · −16,4% | +32% | −6,0% | 3,2 | 1,50 → 1,17 | +17% | 0,17 |
> | 2408 | VWAP + IFR + 1ª vela 80 + Bollinger ⚠️ | **+202% · −33,4%** | +49% · −8,4% | +31% | −9,7% | 1,9 | 1,22 → 1,74 | +21% | 0,27 |
> | 2409 | GPS médias + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+244% · −37,6%** | +50% · −7,7% | +32% | −7,7% | 2,5 | 1,13 → 1,67 | +24% | 0,04 |
> | 2410 | Donchian + BB explosão + Pullback | **+135% · −48,6%** | +52% · −17,2% | +31% | −6,1% | 3,0 | 1,53 → 1,18 | +11% | 0,23 |
> | 2411 | VWAP + BB explosão + IFR + Quinta + Tendência ⚠️ | **+185% · −55,9%** | +45% · −12,5% | +31% | −7,1% | 2,6 | 1,36 → 1,30 | +16% | 0,18 |
> | 2412 | ADX + IFR + MACD + Rompe 200 | **+189% · −39,0%** | +51% · −9,5% | +33% | −7,4% | 2,7 | 1,06 → 1,72 | +24% | 0,22 |
> | 2413 | ADX + VWAP + Pullback + Rompe 200 + Bollinger | **+184% · −38,4%** | +41% · −7,0% | +26% | −6,1% | 2,2 | 1,34 → 1,42 | +17% | 0,16 |
> | 2414 | GPS médias + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+194% · −40,4%** | +45% · −7,6% | +30% | −6,5% | 2,7 | 1,31 → 1,30 | +26% | 0,09 |
> | 2415 | GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+143% · −28,3%** | +40% · −6,9% | +24% | −5,3% | 2,1 | 1,85 → 1,23 | +18% | 0,08 |
> | 2416 | GPS médias + IFR + MACD | **+172% · −33,8%** | +60% · −11,7% | +37% | −11,6% | 2,1 | 1,34 → 1,43 | +30% | 0,40 |
> | 2417 | Donchian + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+188% · −30,9%** | +48% · −6,6% | +31% | −7,9% | 2,3 | 1,19 → 1,65 | +24% | 0,14 |
> | 2418 | Donchian + MACD + Bollinger + Tendência + Onda | **+322% · −45,4%** | +59% · −9,5% | +36% | −8,9% | 2,6 | 1,17 → 1,56 | +31% | 0,36 |
> | 2419 | VWAP + Pullback + Rompe 200 + Bollinger + Tendência | **+190% · −40,6%** | +41% · −8,3% | +28% | −5,9% | 2,5 | 1,74 → 1,21 | +16% | 0,17 |
> | 2420 | Donchian + GPS médias + Pôr do sol | **+158% · −31,6%** | +57% · −11,2% | +32% | −7,3% | 2,6 | 1,56 → 1,23 | +21% | 0,02 |
> | 2421 | VWAP + Donchian + Rompe 200 + Bollinger + Tendência | **+252% · −48,0%** | +51% · −10,1% | +31% | −7,0% | 2,6 | 1,52 → 1,26 | +17% | 0,30 |
> | 2422 | BB explosão + Rompe 200 + Bollinger + Tendência | **+170% · −49,9%** | +47% · −13,1% | +29% | −7,2% | 2,3 | 1,56 → 1,30 | +15% | 0,27 |
> | 2423 | ADX + IFR + MACD | **+175% · −36,2%** | +61% · −12,0% | +38% | −8,4% | 3,0 | 0,95 → 1,78 | +22% | 0,31 |
> | 2424 | ADX + VWAP + Donchian + 1ª vela 80 + Bollinger ⚠️ | **+299% · −45,7%** | +58% · −9,0% | +32% | −7,6% | 2,6 | 1,11 → 1,68 | +19% | 0,28 |
> | 2425 | VWAP + BB explosão + IFR + 1ª vela 80 + Pullback ⚠️ | **+194% · −47,2%** | +44% · −10,2% | +30% | −9,0% | 1,9 | 1,34 → 1,48 | +18% | 0,12 |
> | 2426 | ADX + VWAP + GPS médias + IFR + Pôr do sol | **+224% · −49,1%** | +51% · −9,7% | +31% | −7,1% | 2,6 | 1,21 → 1,49 | +21% | 0,14 |
> | 2427 | BB explosão + MACD + Bollinger + Tendência | **+198% · −54,3%** | +52% · −14,9% | +33% | −8,8% | 2,3 | 1,32 → 1,41 | +21% | 0,40 |
> | 2428 | ADX + BB explosão + MACD + Pullback + Rompe 200 | **+170% · −56,3%** | +42% · −12,0% | +28% | −5,7% | 2,7 | 1,22 → 1,45 | +19% | 0,10 |
> | 2429 | ADX + VWAP + Bollinger + Tendência | **+221% · −53,0%** | +57% · −13,6% | +34% | −8,3% | 2,5 | 1,22 → 1,50 | +22% | 0,36 |
> | 2430 | VWAP + Donchian + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+281% · −59,5%** | +61% · −14,3% | +36% | −10,5% | 2,2 | 1,45 → 1,33 | +22% | 0,32 |

> [!example]- Combinações 2431 a 2460 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2431 | IFR + Bollinger + Onda | **+168% · −25,4%** | +55% · −7,9% | +34% | −6,8% | 3,1 | 0,89 → 1,87 | +24% | 0,20 |
> | 2432 | VWAP + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+149% · −30,6%** | +40% · −7,3% | +27% | −9,6% | 1,4 | 1,40 → 1,52 | +19% | 0,15 |
> | 2433 | GPS médias + IFR + Bollinger + Onda | **+248% · −37,3%** | +59% · −9,8% | +34% | −8,8% | 2,5 | 1,17 → 1,62 | +28% | 0,26 |
> | 2434 | Donchian + Pôr do sol + Rompe 200 + Tendência + Onda | **+221% · −39,2%** | +47% · −8,1% | +31% | −6,9% | 2,6 | 1,24 → 1,42 | +26% | 0,16 |
> | 2435 | ADX + VWAP + Pullback + Bollinger | **+171% · −39,5%** | +47% · −8,4% | +28% | −6,4% | 2,4 | 1,25 → 1,49 | +15% | 0,21 |
> | 2436 | Donchian + IFR + Onda | **+194% · −30,1%** | +65% · −10,2% | +39% | −7,9% | 3,3 | 1,01 → 1,62 | +29% | 0,33 |
> | 2437 | Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+57% · −19,5%** | +23% · −4,2% | +19% | −2,0% | 3,2 | 2,15 → 0,91 | +15% | 0,03 |
> | 2438 | GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+133% · −34,6%** | +39% · −8,6% | +26% | −6,5% | 2,0 | 1,50 → 1,34 | +22% | 0,02 |
> | 2439 | ADX + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+247% · −40,7%** | +51% · −7,9% | +33% | −6,3% | 3,2 | 0,86 → 1,86 | +23% | 0,17 |
> | 2440 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+182% · −46,4%** | +43% · −10,1% | +27% | −6,3% | 2,3 | 1,30 → 1,44 | +18% | 0,10 |
> | 2441 | BB explosão + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+199% · −51,9%** | +45% · −10,6% | +31% | −7,7% | 2,4 | 1,29 → 1,42 | +22% | 0,24 |
> | 2442 | BB explosão + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+131% · −46,7%** | +34% · −9,1% | +25% | −4,6% | 2,7 | 1,60 → 1,22 | +15% | 0,06 |
> | 2443 | IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+168% · −23,3%** | +44% · −5,2% | +31% | −5,9% | 3,1 | 0,87 → 1,88 | +21% | −0,04 |
> | 2444 | VWAP + IFR + Pôr do sol + Bollinger | **+154% · −26,9%** | +41% · −6,2% | +27% | −7,2% | 1,9 | 1,29 → 1,58 | +17% | 0,12 |
> | 2445 | GPS médias + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+187% · −36,0%** | +40% · −7,2% | +26% | −7,2% | 1,8 | 1,55 → 1,37 | +22% | 0,11 |
> | 2446 | ADX + BB explosão + MACD + Quinta + Tendência ⚠️ | **+209% · −66,5%** | +50% · −16,5% | +32% | −7,8% | 2,5 | 1,21 → 1,50 | +23% | 0,20 |
> | 2447 | ADX + Donchian + GPS médias + Quinta + Onda ⚠️ | **+249% · −49,3%** | +58% · −9,7% | +33% | −6,1% | 3,3 | 1,08 → 1,50 | +28% | 0,09 |
> | 2448 | IFR + Pôr do sol + Quinta + Onda ⚠️ | **+126% · −20,2%** | +37% · −4,8% | +27% | −4,1% | 3,4 | 0,88 → 1,78 | +21% | −0,03 |
> | 2449 | ADX + MACD + Pôr do sol + Rompe 200 + Bollinger | **+193% · −40,8%** | +41% · −7,7% | +26% | −5,2% | 2,5 | 1,04 → 1,80 | +20% | 0,09 |
> | 2450 | BB explosão + MACD + Rompe 200 + Bollinger + Tendência | **+211% · −53,7%** | +46% · −11,2% | +30% | −7,9% | 2,2 | 1,39 → 1,36 | +19% | 0,29 |
> | 2451 | ADX + VWAP + IFR + Quinta + Rompe 200 ⚠️ | **+171% · −37,1%** | +41% · −6,7% | +27% | −5,0% | 2,9 | 1,13 → 1,53 | +17% | 0,09 |
> | 2452 | BB explosão + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+117% · −41,1%** | +36% · −11,0% | +26% | −6,5% | 2,0 | 1,45 → 1,36 | +15% | 0,04 |
> | 2453 | BB explosão + GPS médias + Pullback + Tendência + Onda | **+207% · −61,9%** | +52% · −14,8% | +34% | −7,6% | 2,8 | 1,32 → 1,27 | +23% | 0,23 |
> | 2454 | Donchian + Pôr do sol + Tendência + Onda | **+207% · −36,7%** | +54% · −9,5% | +35% | −7,6% | 2,9 | 1,16 → 1,48 | +30% | 0,17 |
> | 2455 | VWAP + Donchian + GPS médias + Bollinger + Tendência | **+302% · −55,9%** | +62% · −11,8% | +35% | −9,1% | 2,4 | 1,54 → 1,27 | +19% | 0,37 |
> | 2456 | Pôr do sol + Quinta ⚠️ | **+26% · −4,9%** | +19% · −2,0% | +17% | −1,9% | 2,1 | 1,45 → 1,34 | +13% | 0,22 |
> | 2457 | GPS médias + Pôr do sol + Pullback + Rompe 200 | **+116% · −30,6%** | +36% · −7,5% | +24% | −4,1% | 2,8 | 1,97 → 1,05 | +16% | −0,01 |
> | 2458 | ADX + BB explosão + GPS médias + Pôr do sol + Quinta ⚠️ | **+162% · −56,6%** | +45% · −12,6% | +27% | −4,6% | 3,1 | 1,20 → 1,34 | +20% | 0,07 |
> | 2459 | ADX + Donchian + Bollinger + Onda | **+264% · −42,6%** | +64% · −9,7% | +35% | −6,4% | 3,4 | 0,90 → 1,74 | +23% | 0,22 |
> | 2460 | GPS médias + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+194% · −34,4%** | +43% · −6,6% | +29% | −6,7% | 2,4 | 1,23 → 1,52 | +24% | −0,05 |

> [!example]- Combinações 2461 a 2490 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2461 | VWAP + GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+215% · −43,1%** | +46% · −9,3% | +30% | −9,8% | 1,8 | 1,37 → 1,48 | +24% | 0,07 |
> | 2462 | Donchian + GPS médias + IFR + Onda | **+256% · −41,7%** | +67% · −11,3% | +38% | −9,6% | 2,7 | 1,20 → 1,48 | +32% | 0,35 |
> | 2463 | VWAP + IFR + MACD + Pôr do sol + Pullback | **+163% · −28,8%** | +37% · −5,7% | +28% | −7,4% | 2,0 | 1,34 → 1,44 | +18% | 0,06 |
> | 2464 | MACD + Pôr do sol + Pullback + Tendência + Onda | **+192% · −35,0%** | +42% · −6,4% | +31% | −7,1% | 2,5 | 1,20 → 1,51 | +27% | 0,10 |
> | 2465 | BB explosão + GPS médias + Quinta + Tendência ⚠️ | **+160% · −58,5%** | +50% · −16,9% | +32% | −6,0% | 3,2 | 1,55 → 1,15 | +16% | 0,17 |
> | 2466 | ADX + MACD + 1ª vela 80 + Bollinger ⚠️ | **+225% · −42,8%** | +55% · −10,9% | +32% | −7,1% | 2,7 | 0,90 → 1,92 | +20% | 0,29 |
> | 2467 | ADX + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+251% · −43,4%** | +52% · −8,5% | +34% | −7,0% | 3,0 | 0,95 → 1,78 | +24% | 0,11 |
> | 2468 | GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+223% · −40,3%** | +54% · −10,7% | +32% | −11,1% | 1,7 | 1,31 → 1,58 | +22% | 0,30 |
> | 2469 | BB explosão + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+201% · −38,1%** | +44% · −7,7% | +30% | −8,1% | 2,2 | 1,18 → 1,67 | +24% | 0,09 |
> | 2470 | Donchian + BB explosão + GPS médias + IFR | **+218% · −59,5%** | +66% · −17,4% | +37% | −10,2% | 2,4 | 1,42 → 1,30 | +18% | 0,51 |
> | 2471 | Donchian + BB explosão + IFR + MACD + Pôr do sol | **+226% · −47,7%** | +51% · −9,6% | +32% | −7,9% | 2,4 | 1,24 → 1,50 | +22% | 0,23 |
> | 2472 | MACD + Pôr do sol + Tendência | **+118% · −29,0%** | +44% · −9,6% | +32% | −8,5% | 2,3 | 1,33 → 1,40 | +27% | 0,19 |
> | 2473 | ADX + GPS médias + MACD + Quinta ⚠️ | **+175% · −41,7%** | +51% · −10,7% | +31% | −6,3% | 2,9 | 1,15 → 1,49 | +26% | 0,10 |
> | 2474 | ADX + VWAP + GPS médias + Pôr do sol + Pullback | **+183% · −47,3%** | +45% · −9,1% | +28% | −6,2% | 2,5 | 1,36 → 1,31 | +20% | 0,05 |
> | 2475 | Donchian + BB explosão + Tendência | **+171% · −63,2%** | +66% · −24,5% | +39% | −9,3% | 2,8 | 1,43 → 1,24 | +14% | 0,61 |
> | 2476 | VWAP + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+162% · −37,7%** | +36% · −7,7% | +25% | −8,7% | 1,4 | 1,48 → 1,43 | +18% | 0,14 |
> | 2477 | GPS médias + Pullback + Rompe 200 + Bollinger + Onda | **+211% · −36,5%** | +44% · −6,8% | +28% | −7,2% | 2,0 | 1,36 → 1,38 | +25% | 0,14 |
> | 2478 | GPS médias + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+151% · −28,5%** | +37% · −5,1% | +26% | −5,1% | 2,5 | 1,29 → 1,35 | +20% | −0,06 |
> | 2479 | Donchian + GPS médias + Quinta + Bollinger + Onda ⚠️ | **+270% · −42,5%** | +54% · −8,3% | +31% | −7,4% | 2,4 | 1,24 → 1,48 | +28% | 0,08 |
> | 2480 | Donchian + GPS médias + MACD + Tendência + Onda | **+282% · −54,4%** | +62% · −11,2% | +38% | −8,9% | 2,8 | 1,21 → 1,39 | +31% | 0,40 |
> | 2481 | Donchian + MACD + Quinta + Pullback + Onda ⚠️ | **+203% · −35,9%** | +44% · −7,0% | +30% | −6,1% | 2,7 | 1,16 → 1,52 | +24% | 0,04 |
> | 2482 | Donchian + BB explosão + Bollinger + Tendência + Onda | **+278% · −61,6%** | +59% · −14,0% | +35% | −7,9% | 2,8 | 1,18 → 1,46 | +24% | 0,36 |
> | 2483 | 1ª vela 80 + Bollinger ⚠️ | **+97% · −16,3%** | +51% · −7,5% | +29% | −7,1% | 2,3 | 1,03 → 1,91 | +14% | 0,28 |
> | 2484 | VWAP + IFR + MACD + Pôr do sol + Tendência | **+208% · −40,0%** | +45% · −8,1% | +32% | −7,8% | 2,5 | 1,27 → 1,41 | +23% | 0,24 |
> | 2485 | IFR + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+182% · −26,3%** | +39% · −4,2% | +28% | −5,6% | 2,8 | 0,99 → 1,80 | +21% | 0,04 |
> | 2486 | GPS médias + Pullback + Bollinger + Onda | **+197% · −36,3%** | +50% · −8,3% | +30% | −7,7% | 2,3 | 1,29 → 1,45 | +25% | 0,12 |
> | 2487 | Donchian + GPS médias + Quinta ⚠️ | **+156% · −33,8%** | +57% · −11,2% | +32% | −7,3% | 2,6 | 1,64 → 1,19 | +19% | 0,01 |
> | 2488 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+212% · −50,7%** | +47% · −11,2% | +28% | −7,9% | 1,9 | 1,34 → 1,46 | +21% | 0,14 |
> | 2489 | ADX + Donchian + Pôr do sol + Quinta + Onda ⚠️ | **+211% · −43,6%** | +47% · −7,4% | +29% | −4,4% | 3,7 | 0,90 → 1,69 | +20% | −0,00 |
> | 2490 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+198% · −36,7%** | +44% · −6,5% | +29% | −5,1% | 3,2 | 0,88 → 1,83 | +20% | 0,01 |

> [!example]- Combinações 2491 a 2520 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2491 | IFR + MACD + Quinta + Tendência + Onda ⚠️ | **+240% · −42,0%** | +48% · −8,5% | +34% | −8,6% | 2,5 | 1,14 → 1,62 | +29% | 0,16 |
> | 2492 | Donchian + BB explosão + MACD + Tendência | **+204% · −64,4%** | +60% · −19,7% | +37% | −9,3% | 2,6 | 1,31 → 1,30 | +19% | 0,54 |
> | 2493 | ADX + VWAP + BB explosão + IFR + Tendência | **+233% · −69,7%** | +57% · −17,5% | +36% | −8,7% | 2,6 | 1,21 → 1,46 | +20% | 0,36 |
> | 2494 | IFR + Rompe 200 + Tendência + Onda | **+197% · −38,4%** | +51% · −9,7% | +35% | −9,6% | 2,3 | 1,22 → 1,54 | +30% | 0,28 |
> | 2495 | VWAP + Donchian + IFR + Quinta ⚠️ | **+177% · −32,6%** | +48% · −8,3% | +31% | −8,3% | 2,2 | 1,34 → 1,37 | +19% | 0,09 |
> | 2496 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+132% · −22,4%** | +32% · −4,1% | +25% | −4,1% | 2,9 | 1,01 → 1,74 | +19% | −0,05 |
> | 2497 | ADX + Donchian + Rompe 200 + Bollinger + Onda | **+280% · −41,3%** | +55% · −8,0% | +31% | −6,0% | 3,1 | 0,99 → 1,68 | +24% | 0,18 |
> | 2498 | VWAP + IFR + Pullback | **+111% · −23,2%** | +42% · −7,3% | +30% | −7,9% | 2,2 | 1,50 → 1,31 | +17% | 0,03 |
> | 2499 | ADX + VWAP + GPS médias + IFR + 1ª vela 80 ⚠️ | **+267% · −52,2%** | +58% · −10,9% | +35% | −9,1% | 2,4 | 1,17 → 1,60 | +25% | 0,27 |
> | 2500 | Pôr do sol + Pullback + Rompe 200 + Bollinger + Onda | **+144% · −23,0%** | +34% · −4,0% | +23% | −4,4% | 2,4 | 1,20 → 1,55 | +22% | 0,03 |
> | 2501 | ADX + GPS médias + MACD + Pôr do sol + Rompe 200 | **+191% · −42,3%** | +45% · −8,2% | +28% | −5,6% | 2,7 | 1,18 → 1,47 | +26% | 0,08 |
> | 2502 | VWAP + Donchian + MACD + Pullback + Tendência | **+236% · −52,5%** | +51% · −12,0% | +34% | −8,2% | 2,6 | 1,46 → 1,26 | +19% | 0,29 |
> | 2503 | ADX + VWAP + GPS médias + Quinta + Pullback ⚠️ | **+181% · −48,4%** | +44% · −9,5% | +28% | −6,2% | 2,4 | 1,41 → 1,29 | +19% | 0,06 |
> | 2504 | GPS médias + Pullback | **+94% · −26,5%** | +51% · −12,7% | +31% | −6,1% | 3,1 | 1,91 → 1,00 | +17% | −0,06 |
> | 2505 | Donchian + IFR + Rompe 200 + Onda | **+207% · −32,9%** | +53% · −8,1% | +33% | −7,1% | 2,9 | 1,11 → 1,55 | +29% | 0,29 |
> | 2506 | VWAP + GPS médias + IFR + Rompe 200 + Tendência | **+233% · −52,4%** | +51% · −11,0% | +33% | −8,4% | 2,5 | 1,55 → 1,25 | +19% | 0,30 |
> | 2507 | Donchian + BB explosão + 1ª vela 80 + Tendência + Onda ⚠️ | **+257% · −59,9%** | +58% · −13,3% | +36% | −7,8% | 3,0 | 1,12 → 1,49 | +27% | 0,32 |
> | 2508 | ADX + MACD + Pullback + Tendência + Onda | **+256% · −53,5%** | +53% · −9,9% | +35% | −8,9% | 2,5 | 1,13 → 1,63 | +27% | 0,17 |
> | 2509 | ADX + Donchian + BB explosão + GPS médias + Rompe 200 | **+208% · −68,4%** | +58% · −17,6% | +32% | −7,1% | 2,7 | 1,28 → 1,28 | +18% | 0,33 |
> | 2510 | BB explosão + MACD + 1ª vela 80 + Tendência ⚠️ | **+186% · −52,3%** | +51% · −14,0% | +35% | −8,7% | 2,5 | 1,22 → 1,46 | +24% | 0,30 |
> | 2511 | Donchian + BB explosão + Pôr do sol + Quinta ⚠️ | **+127% · −42,0%** | +40% · −10,1% | +25% | −4,6% | 2,8 | 1,33 → 1,26 | +15% | 0,01 |
> | 2512 | Donchian + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+298% · −44,8%** | +58% · −9,6% | +37% | −8,8% | 2,8 | 1,10 → 1,58 | +32% | 0,34 |
> | 2513 | Donchian + BB explosão + GPS médias + Pôr do sol + Pullback | **+200% · −56,6%** | +50% · −12,7% | +30% | −6,3% | 2,7 | 1,61 → 1,19 | +15% | 0,08 |
> | 2514 | Donchian | **+83% · −23,6%** | +83% · −23,6% | +42% | −10,5% | 2,7 | 1,37 → 1,25 | +17% | — |
> | 2515 | GPS médias + MACD + Bollinger + Tendência + Onda | **+291% · −43,8%** | +57% · −8,9% | +35% | −8,5% | 2,6 | 1,19 → 1,48 | +28% | 0,32 |
> | 2516 | VWAP + Donchian + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+231% · −38,1%** | +46% · −7,6% | +28% | −9,0% | 1,7 | 1,32 → 1,55 | +20% | 0,10 |
> | 2517 | Pôr do sol + Rompe 200 + Bollinger + Tendência + Onda | **+200% · −36,0%** | +41% · −6,7% | +28% | −6,5% | 2,3 | 1,21 → 1,56 | +24% | 0,11 |
> | 2518 | ADX + Donchian + MACD | **+187% · −45,9%** | +67% · −15,4% | +37% | −7,6% | 3,3 | 1,01 → 1,59 | +23% | 0,30 |
> | 2519 | MACD + Quinta + Pullback + Bollinger + Onda ⚠️ | **+176% · −25,3%** | +38% · −4,6% | +26% | −5,5% | 2,5 | 1,10 → 1,70 | +22% | 0,03 |
> | 2520 | VWAP + GPS médias + Quinta + Pullback + Tendência ⚠️ | **+191% · −49,4%** | +44% · −11,0% | +30% | −6,2% | 2,8 | 1,73 → 1,14 | +17% | 0,05 |

> [!example]- Combinações 2521 a 2550 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2521 | BB explosão + Pôr do sol + Pullback + Tendência + Onda | **+174% · −50,4%** | +42% · −10,0% | +30% | −6,3% | 2,7 | 1,23 → 1,38 | +23% | 0,08 |
> | 2522 | BB explosão + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+115% · −30,5%** | +31% · −4,9% | +21% | −4,0% | 2,0 | 1,47 → 1,35 | +15% | 0,02 |
> | 2523 | ADX + MACD + Quinta + Bollinger ⚠️ | **+175% · −39,3%** | +46% · −9,6% | +28% | −6,1% | 2,5 | 0,99 → 1,83 | +19% | 0,16 |
> | 2524 | ADX + Donchian + MACD + Rompe 200 | **+201% · −42,7%** | +55% · −10,1% | +32% | −6,8% | 2,9 | 1,11 → 1,54 | +24% | 0,20 |
> | 2525 | Donchian + GPS médias + MACD + 1ª vela 80 ⚠️ | **+242% · −42,5%** | +62% · −11,6% | +36% | −11,8% | 2,0 | 1,33 → 1,45 | +29% | 0,32 |
> | 2526 | VWAP + Donchian + IFR + 1ª vela 80 ⚠️ | **+227% · −37,2%** | +57% · −9,3% | +35% | −10,7% | 2,1 | 1,26 → 1,55 | +22% | 0,27 |
> | 2527 | ADX + Donchian + Rompe 200 + Tendência + Onda | **+276% · −56,2%** | +59% · −11,8% | +36% | −8,7% | 2,6 | 1,15 → 1,54 | +29% | 0,24 |
> | 2528 | VWAP + GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+213% · −51,7%** | +47% · −11,7% | +31% | −8,7% | 2,1 | 1,46 → 1,32 | +22% | 0,08 |
> | 2529 | IFR + Tendência + Onda | **+183% · −34,9%** | +61% · −11,8% | +41% | −11,3% | 2,5 | 1,14 → 1,61 | +35% | 0,33 |
> | 2530 | BB explosão + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+156% · −34,6%** | +38% · −6,0% | +27% | −6,1% | 2,3 | 1,20 → 1,56 | +21% | 0,06 |
> | 2531 | ADX + VWAP + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+217% · −48,4%** | +48% · −9,0% | +32% | −7,3% | 2,6 | 1,18 → 1,51 | +23% | 0,19 |
> | 2532 | GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+114% · −31,4%** | +35% · −7,7% | +24% | −4,1% | 2,7 | 2,07 → 1,00 | +15% | 0,02 |
> | 2533 | IFR + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+138% · −23,5%** | +33% · −3,8% | +25% | −4,2% | 2,9 | 1,02 → 1,66 | +22% | 0,03 |
> | 2534 | BB explosão + IFR + MACD + Rompe 200 + Bollinger | **+213% · −39,6%** | +45% · −8,1% | +29% | −7,9% | 2,0 | 1,27 → 1,54 | +21% | 0,28 |
> | 2535 | ADX + VWAP + IFR + MACD + Tendência | **+267% · −57,2%** | +57% · −11,6% | +37% | −9,6% | 2,5 | 1,17 → 1,54 | +24% | 0,35 |
> | 2536 | VWAP + GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+229% · −43,6%** | +48% · −9,0% | +30% | −7,3% | 2,3 | 1,59 → 1,25 | +19% | 0,16 |
> | 2537 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+247% · −37,5%** | +50% · −7,7% | +32% | −7,7% | 2,5 | 1,09 → 1,69 | +24% | 0,11 |
> | 2538 | VWAP + GPS médias + Pôr do sol + Pullback + Tendência | **+194% · −47,8%** | +44% · −10,4% | +30% | −6,3% | 2,7 | 1,68 → 1,16 | +18% | 0,07 |
> | 2539 | 1ª vela 80 + Pullback + Rompe 200 + Bollinger + Onda ⚠️ | **+192% · −27,1%** | +40% · −4,8% | +27% | −6,4% | 2,2 | 1,14 → 1,74 | +20% | 0,11 |
> | 2540 | BB explosão + GPS médias + IFR + MACD + Bollinger | **+258% · −51,0%** | +55% · −11,8% | +33% | −10,3% | 1,9 | 1,33 → 1,45 | +23% | 0,38 |
> | 2541 | Quinta + Pullback ⚠️ | **+39% · −9,3%** | +26% · −4,2% | +21% | −2,7% | 3,1 | 2,18 → 0,85 | +14% | −0,02 |
> | 2542 | BB explosão + MACD + Pullback + Rompe 200 + Tendência | **+176% · −55,7%** | +42% · −12,1% | +30% | −7,2% | 2,4 | 1,56 → 1,26 | +16% | 0,18 |
> | 2543 | GPS médias + Pôr do sol + Rompe 200 + Tendência + Onda | **+196% · −38,5%** | +45% · −7,4% | +30% | −6,5% | 2,6 | 1,26 → 1,32 | +25% | 0,12 |
> | 2544 | ADX + Donchian + Tendência + Onda | **+262% · −57,5%** | +69% · −15,5% | +40% | −9,8% | 2,8 | 1,08 → 1,59 | +30% | 0,30 |
> | 2545 | ADX + BB explosão + MACD + Pullback | **+158% · −58,0%** | +48% · −16,4% | +31% | −6,4% | 2,8 | 1,14 → 1,50 | +21% | 0,12 |
> | 2546 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+216% · −50,1%** | +47% · −11,2% | +31% | −8,9% | 2,1 | 1,41 → 1,34 | +23% | 0,15 |
> | 2547 | ADX + VWAP + 1ª vela 80 + Tendência ⚠️ | **+203% · −50,2%** | +55% · −12,3% | +35% | −8,1% | 2,8 | 1,10 → 1,55 | +23% | 0,24 |
> | 2548 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+109% · −33,0%** | +29% · −6,4% | +23% | −6,3% | 1,6 | 1,40 → 1,43 | +16% | −0,03 |
> | 2549 | GPS médias + Pôr do sol + Tendência + Onda | **+184% · −36,2%** | +51% · −8,7% | +33% | −7,1% | 2,9 | 1,19 → 1,37 | +22% | 0,10 |
> | 2550 | IFR + MACD + Quinta + Bollinger + Onda ⚠️ | **+230% · −33,5%** | +45% · −6,1% | +30% | −6,3% | 2,7 | 0,96 → 1,81 | +23% | 0,12 |

> [!example]- Combinações 2551 a 2580 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2551 | VWAP + GPS médias + Pôr do sol + Bollinger + Tendência | **+232% · −42,2%** | +48% · −8,4% | +30% | −7,4% | 2,3 | 1,54 → 1,27 | +20% | 0,18 |
> | 2552 | Donchian + BB explosão + GPS médias + Rompe 200 + Tendência | **+222% · −69,8%** | +57% · −17,5% | +34% | −7,2% | 2,9 | 1,55 → 1,16 | +15% | 0,41 |
> | 2553 | ADX + Donchian + GPS médias + Pôr do sol + Onda | **+251% · −48,2%** | +58% · −9,8% | +33% | −6,1% | 3,4 | 1,03 → 1,52 | +27% | 0,10 |
> | 2554 | Donchian + BB explosão + GPS médias + Quinta + Pullback ⚠️ | **+197% · −57,9%** | +49% · −13,2% | +30% | −6,3% | 2,7 | 1,66 → 1,16 | +14% | 0,10 |
> | 2555 | BB explosão + IFR + Pôr do sol + Tendência + Onda | **+219% · −48,5%** | +49% · −9,5% | +33% | −7,6% | 2,7 | 1,14 → 1,54 | +27% | 0,18 |
> | 2556 | ADX + BB explosão + Pullback + Rompe 200 | **+132% · −53,3%** | +42% · −14,3% | +27% | −5,8% | 2,5 | 1,29 → 1,33 | +15% | 0,11 |
> | 2557 | VWAP + Donchian + Pullback + Rompe 200 + Tendência | **+210% · −59,0%** | +47% · −12,3% | +31% | −6,3% | 2,8 | 1,65 → 1,14 | +14% | 0,22 |
> | 2558 | ADX + VWAP + IFR + Quinta ⚠️ | **+158% · −36,2%** | +46% · −8,5% | +30% | −5,6% | 3,1 | 1,03 → 1,59 | +15% | 0,08 |
> | 2559 | IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+170% · −22,2%** | +45% · −5,2% | +31% | −5,9% | 3,1 | 0,82 → 1,90 | +20% | 0,08 |
> | 2560 | ADX + Donchian + IFR + MACD + Onda | **+307% · −48,8%** | +63% · −9,7% | +38% | −8,1% | 3,1 | 0,94 → 1,72 | +25% | 0,30 |
> | 2561 | BB explosão + GPS médias + IFR + Pôr do sol | **+164% · −47,4%** | +50% · −12,3% | +31% | −8,1% | 2,2 | 1,39 → 1,32 | +19% | 0,15 |
> | 2562 | ADX + MACD + Rompe 200 + Tendência | **+192% · −47,9%** | +52% · −12,1% | +34% | −9,8% | 2,2 | 1,24 → 1,52 | +26% | 0,21 |
> | 2563 | IFR + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+185% · −26,3%** | +40% · −4,2% | +28% | −5,5% | 2,8 | 0,93 → 1,81 | +21% | 0,11 |
> | 2564 | ADX + GPS médias + Quinta + Bollinger + Onda ⚠️ | **+245% · −47,5%** | +52% · −9,4% | +30% | −5,5% | 3,2 | 1,00 → 1,62 | +23% | 0,11 |
> | 2565 | Donchian + BB explosão + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+219% · −53,5%** | +53% · −11,6% | +31% | −8,7% | 2,1 | 1,35 → 1,35 | +20% | 0,16 |
> | 2566 | ADX + BB explosão + GPS médias + IFR + MACD | **+238% · −64,6%** | +59% · −15,7% | +35% | −8,5% | 2,7 | 1,16 → 1,50 | +26% | 0,38 |
> | 2567 | BB explosão + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+260% · −48,4%** | +52% · −9,2% | +33% | −7,4% | 2,8 | 1,07 → 1,61 | +22% | 0,26 |
> | 2568 | ADX + VWAP + Donchian + MACD + Pullback | **+232% · −54,2%** | +52% · −10,4% | +32% | −7,3% | 2,6 | 1,20 → 1,43 | +18% | 0,20 |
> | 2569 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+169% · −41,2%** | +48% · −10,2% | +29% | −7,1% | 2,3 | 1,22 → 1,50 | +20% | 0,09 |
> | 2570 | ADX + Donchian + BB explosão + IFR + Onda | **+260% · −63,8%** | +62% · −14,0% | +36% | −7,1% | 3,3 | 0,97 → 1,62 | +27% | 0,32 |
> | 2571 | VWAP + Donchian + Quinta + Tendência ⚠️ | **+174% · −50,6%** | +49% · −11,6% | +32% | −6,5% | 3,0 | 1,43 → 1,19 | +17% | 0,14 |
> | 2572 | ADX + Pôr do sol + Bollinger | **+133% · −32,0%** | +48% · −10,0% | +27% | −5,2% | 2,7 | 0,89 → 1,89 | +16% | 0,11 |
> | 2573 | ADX + MACD + Pôr do sol + Bollinger | **+178% · −38,1%** | +47% · −9,2% | +28% | −5,7% | 2,7 | 0,90 → 1,88 | +18% | 0,14 |
> | 2574 | Donchian + BB explosão + IFR + Bollinger + Onda | **+288% · −47,4%** | +58% · −9,9% | +34% | −7,9% | 2,7 | 1,10 → 1,60 | +26% | 0,32 |
> | 2575 | Pôr do sol + Pullback + Bollinger + Onda | **+132% · −20,4%** | +37% · −4,5% | +25% | −4,6% | 2,6 | 1,06 → 1,70 | +21% | −0,00 |
> | 2576 | Donchian + MACD + Quinta + Rompe 200 ⚠️ | **+140% · −26,8%** | +40% · −6,7% | +27% | −6,3% | 2,2 | 1,36 → 1,33 | +20% | 0,09 |
> | 2577 | ADX + BB explosão + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+198% · −57,5%** | +51% · −13,2% | +30% | −6,5% | 2,7 | 1,16 → 1,48 | +23% | 0,12 |
> | 2578 | ADX + VWAP + Donchian + GPS médias + Bollinger | **+287% · −55,8%** | +62% · −12,1% | +33% | −8,7% | 2,3 | 1,27 → 1,41 | +22% | 0,34 |
> | 2579 | Pôr do sol + Bollinger + Tendência + Onda | **+186% · −32,3%** | +47% · −7,6% | +31% | −7,1% | 2,5 | 1,10 → 1,65 | +24% | 0,12 |
> | 2580 | VWAP + 1ª vela 80 + Quinta + Tendência ⚠️ | **+143% · −39,6%** | +41% · −10,3% | +30% | −7,5% | 2,3 | 1,30 → 1,38 | +22% | 0,02 |

> [!example]- Combinações 2581 a 2610 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2581 | BB explosão + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+156% · −41,2%** | +37% · −8,4% | +27% | −7,8% | 1,8 | 1,34 → 1,45 | +19% | 0,07 |
> | 2582 | GPS médias + Rompe 200 + Tendência | **+148% · −40,2%** | +54% · −13,6% | +34% | −7,7% | 2,8 | 1,74 → 1,13 | +18% | 0,27 |
> | 2583 | Pullback + Rompe 200 + Tendência + Onda | **+147% · −31,8%** | +42% · −7,5% | +31% | −7,9% | 2,3 | 1,32 → 1,33 | +25% | 0,16 |
> | 2584 | ADX + Donchian + BB explosão + GPS médias | **+198% · −68,4%** | +67% · −21,5% | +36% | −8,0% | 2,9 | 1,21 → 1,31 | +20% | 0,45 |
> | 2585 | ADX + Donchian + BB explosão + MACD + Quinta ⚠️ | **+210% · −63,9%** | +52% · −15,0% | +31% | −6,0% | 3,1 | 1,08 → 1,50 | +22% | 0,18 |
> | 2586 | Donchian + IFR + MACD + Quinta + Onda ⚠️ | **+250% · −37,3%** | +51% · −7,3% | +33% | −7,2% | 2,8 | 1,04 → 1,63 | +26% | 0,15 |
> | 2587 | VWAP + Donchian + 1ª vela 80 + Pullback ⚠️ | **+179% · −44,3%** | +48% · −12,1% | +31% | −10,2% | 1,7 | 1,41 → 1,37 | +19% | 0,12 |
> | 2588 | ADX + BB explosão + Pullback + Tendência + Onda | **+225% · −66,6%** | +53% · −16,2% | +34% | −8,1% | 2,7 | 1,15 → 1,51 | +26% | 0,20 |
> | 2589 | Donchian + GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+326% · −48,6%** | +61% · −10,2% | +34% | −9,1% | 2,3 | 1,17 → 1,60 | +28% | 0,25 |
> | 2590 | ADX + BB explosão + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+161% · −46,8%** | +41% · −8,8% | +26% | −4,5% | 3,1 | 1,01 → 1,60 | +20% | 0,05 |
> | 2591 | ADX + VWAP + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+217% · −40,3%** | +47% · −7,5% | +31% | −6,8% | 2,6 | 1,04 → 1,69 | +20% | 0,19 |
> | 2592 | ADX + Donchian + BB explosão + Rompe 200 | **+174% · −60,7%** | +55% · −18,0% | +31% | −5,6% | 3,2 | 1,13 → 1,36 | +17% | 0,27 |
> | 2593 | Donchian + BB explosão + GPS médias + IFR + Rompe 200 | **+229% · −60,9%** | +57% · −14,2% | +33% | −8,8% | 2,3 | 1,48 → 1,27 | +17% | 0,40 |
> | 2594 | ADX + VWAP + GPS médias + Rompe 200 + Tendência | **+217% · −61,7%** | +53% · −14,6% | +33% | −7,7% | 2,6 | 1,34 → 1,27 | +20% | 0,25 |
> | 2595 | VWAP + GPS médias + IFR + MACD + Tendência | **+256% · −54,1%** | +56% · −11,4% | +36% | −10,8% | 2,2 | 1,37 → 1,33 | +24% | 0,39 |
> | 2596 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+216% · −54,7%** | +52% · −12,1% | +31% | −8,8% | 2,1 | 1,40 → 1,33 | +19% | 0,12 |
> | 2597 | 1ª vela 80 + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+183% · −35,1%** | +40% · −6,7% | +29% | −6,4% | 2,6 | 1,12 → 1,57 | +22% | 0,04 |
> | 2598 | VWAP + GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+217% · −43,0%** | +46% · −9,2% | +30% | −9,8% | 1,8 | 1,32 → 1,50 | +25% | 0,13 |
> | 2599 | IFR + Rompe 200 + Bollinger + Onda | **+183% · −29,4%** | +46% · −6,7% | +29% | −6,5% | 2,6 | 1,03 → 1,75 | +24% | 0,20 |
> | 2600 | ADX + BB explosão + GPS médias + Rompe 200 + Bollinger | **+215% · −59,2%** | +52% · −13,9% | +29% | −6,4% | 2,5 | 1,25 → 1,36 | +19% | 0,30 |
> | 2601 | ADX + BB explosão + Rompe 200 + Tendência | **+172% · −64,2%** | +52% · −19,7% | +33% | −8,6% | 2,3 | 1,28 → 1,39 | +18% | 0,26 |
> | 2602 | 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+169% · −29,2%** | +45% · −6,6% | +32% | −6,9% | 2,9 | 1,03 → 1,64 | +22% | −0,03 |
> | 2603 | ADX + Donchian + BB explosão + Pullback + Onda | **+225% · −64,0%** | +55% · −14,7% | +33% | −6,2% | 3,2 | 1,05 → 1,50 | +25% | 0,20 |
> | 2604 | VWAP + Quinta + Pullback + Tendência ⚠️ | **+121% · −36,9%** | +37% · −9,3% | +28% | −5,1% | 3,0 | 1,66 → 1,11 | +15% | 0,02 |
> | 2605 | BB explosão + GPS médias + IFR + Pullback + Onda | **+214% · −54,1%** | +51% · −11,7% | +33% | −8,2% | 2,4 | 1,25 → 1,39 | +25% | 0,20 |
> | 2606 | BB explosão + GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+203% · −48,7%** | +47% · −10,7% | +31% | −10,0% | 1,8 | 1,40 → 1,37 | +22% | 0,13 |
> | 2607 | MACD + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+287% · −41,6%** | +52% · −8,4% | +34% | −8,3% | 2,6 | 1,04 → 1,71 | +22% | 0,29 |
> | 2608 | ADX + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+134% · −33,5%** | +40% · −7,9% | +26% | −4,3% | 3,1 | 0,87 → 1,79 | +20% | 0,04 |
> | 2609 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+196% · −34,4%** | +43% · −6,4% | +29% | −6,7% | 2,4 | 1,18 → 1,54 | +23% | 0,01 |
> | 2610 | ADX + VWAP + IFR + Pôr do sol + Rompe 200 | **+173% · −39,1%** | +41% · −7,0% | +27% | −5,0% | 2,9 | 1,07 → 1,55 | +17% | 0,09 |

> [!example]- Combinações 2611 a 2640 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2611 | MACD + Quinta + Bollinger ⚠️ | **+97% · −16,7%** | +37% · −4,6% | +25% | −5,9% | 2,0 | 1,18 → 1,65 | +19% | 0,09 |
> | 2612 | ADX + Pullback + Rompe 200 + Bollinger + Onda | **+215% · −37,5%** | +45% · −7,5% | +28% | −6,0% | 2,5 | 1,07 → 1,70 | +22% | 0,12 |
> | 2613 | ADX + GPS médias + MACD + Pôr do sol | **+178% · −40,5%** | +51% · −10,2% | +31% | −6,2% | 2,9 | 1,09 → 1,52 | +25% | 0,08 |
> | 2614 | 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+177% · −23,7%** | +45% · −5,4% | +29% | −6,9% | 2,4 | 1,03 → 1,84 | +20% | 0,08 |
> | 2615 | ADX + BB explosão + MACD + Pôr do sol + Tendência | **+212% · −65,8%** | +50% · −15,9% | +32% | −7,8% | 2,5 | 1,16 → 1,52 | +24% | 0,19 |
> | 2616 | ADX + Quinta + Bollinger ⚠️ | **+130% · −32,8%** | +48% · −10,4% | +27% | −5,9% | 2,4 | 1,01 → 1,82 | +17% | 0,18 |
> | 2617 | BB explosão + GPS médias + IFR + Quinta ⚠️ | **+161% · −48,5%** | +49% · −12,8% | +31% | −8,1% | 2,2 | 1,45 → 1,29 | +18% | 0,16 |
> | 2618 | ADX + GPS médias + Pullback + Rompe 200 + Onda | **+205% · −46,6%** | +48% · −9,6% | +30% | −6,2% | 2,8 | 1,16 → 1,43 | +28% | 0,13 |
> | 2619 | GPS médias + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+174% · −36,6%** | +40% · −7,4% | +27% | −8,3% | 1,7 | 1,36 → 1,43 | +22% | 0,06 |
> | 2620 | BB explosão + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+164% · −48,5%** | +49% · −13,7% | +31% | −8,4% | 2,1 | 1,50 → 1,28 | +18% | 0,09 |
> | 2621 | Donchian + MACD + Pôr do sol + Pullback + Onda | **+205% · −36,1%** | +44% · −7,1% | +30% | −6,1% | 2,8 | 1,11 → 1,54 | +23% | 0,07 |
> | 2622 | ADX + Donchian + 1ª vela 80 + Onda ⚠️ | **+240% · −45,0%** | +63% · −10,4% | +36% | −6,5% | 3,7 | 0,81 → 1,74 | +25% | 0,18 |
> | 2623 | IFR + MACD + Pôr do sol + Tendência + Onda | **+242% · −42,0%** | +49% · −8,5% | +34% | −8,6% | 2,5 | 1,10 → 1,64 | +29% | 0,22 |
> | 2624 | Donchian + GPS médias + Pôr do sol + Bollinger + Onda | **+273% · −43,2%** | +54% · −8,3% | +31% | −7,4% | 2,4 | 1,19 → 1,50 | +28% | 0,10 |
> | 2625 | ADX + Pullback | **+93% · −31,2%** | +52% · −14,8% | +32% | −8,7% | 2,2 | 1,24 → 1,48 | +16% | 0,01 |
> | 2626 | BB explosão + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+204% · −38,1%** | +44% · −7,7% | +30% | −8,0% | 2,2 | 1,13 → 1,70 | +24% | 0,13 |
> | 2627 | ADX + MACD + Pullback + Bollinger + Onda | **+251% · −41,3%** | +49% · −7,8% | +31% | −6,8% | 2,7 | 0,95 → 1,79 | +22% | 0,15 |
> | 2628 | VWAP + Donchian + MACD + Bollinger + Tendência | **+279% · −50,5%** | +55% · −11,4% | +34% | −9,7% | 2,2 | 1,32 → 1,35 | +22% | 0,43 |
> | 2629 | BB explosão + Pullback + Rompe 200 + Tendência | **+138% · −53,7%** | +42% · −14,3% | +29% | −6,3% | 2,6 | 1,74 → 1,14 | +12% | 0,17 |
> | 2630 | ADX + GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+232% · −49,8%** | +51% · −10,3% | +32% | −7,6% | 2,5 | 1,14 → 1,58 | +25% | 0,20 |
> | 2631 | Donchian + MACD + Quinta ⚠️ | **+128% · −26,1%** | +47% · −8,5% | +30% | −7,3% | 2,4 | 1,26 → 1,40 | +23% | 0,07 |
> | 2632 | VWAP + Donchian + Pôr do sol + Tendência | **+176% · −47,2%** | +50% · −11,6% | +32% | −6,7% | 2,9 | 1,38 → 1,20 | +18% | 0,20 |
> | 2633 | GPS médias + MACD + Rompe 200 + Tendência | **+186% · −44,1%** | +51% · −11,0% | +33% | −8,4% | 2,4 | 1,53 → 1,23 | +23% | 0,29 |
> | 2634 | BB explosão + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+147% · −33,6%** | +41% · −8,0% | +25% | −6,3% | 2,0 | 1,14 → 1,72 | +16% | 0,07 |
> | 2635 | ADX + Donchian + GPS médias + 1ª vela 80 + Onda ⚠️ | **+292% · −55,5%** | +65% · −11,9% | +37% | −8,0% | 3,0 | 1,02 → 1,61 | +30% | 0,24 |
> | 2636 | ADX + BB explosão + IFR + Tendência + Onda | **+265% · −66,3%** | +60% · −15,5% | +38% | −9,5% | 2,6 | 1,06 → 1,63 | +30% | 0,32 |
> | 2637 | VWAP + Pôr do sol + Pullback + Tendência | **+123% · −35,2%** | +37% · −8,7% | +28% | −5,1% | 3,0 | 1,60 → 1,13 | +16% | 0,05 |
> | 2638 | ADX + Rompe 200 + Bollinger + Tendência + Onda | **+271% · −48,0%** | +53% · −10,1% | +32% | −8,4% | 2,3 | 1,10 → 1,67 | +27% | 0,21 |
> | 2639 | Pôr do sol + Pullback | **+40% · −8,6%** | +26% · −3,7% | +21% | −3,0% | 2,7 | 1,97 → 0,99 | +16% | −0,13 |
> | 2640 | ADX + IFR + MACD + Bollinger + Onda | **+304% · −45,6%** | +56% · −9,5% | +34% | −7,7% | 2,8 | 0,85 → 1,88 | +24% | 0,28 |

> [!example]- Combinações 2641 a 2670 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2641 | MACD + Pôr do sol + Rompe 200 + Tendência | **+130% · −30,4%** | +38% · −7,1% | +28% | −7,5% | 2,1 | 1,42 → 1,33 | +23% | 0,13 |
> | 2642 | MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+128% · −30,3%** | +38% · −7,0% | +28% | −7,5% | 2,1 | 1,50 → 1,30 | +21% | 0,10 |
> | 2643 | VWAP + Donchian + IFR + Quinta + Rompe 200 ⚠️ | **+189% · −37,1%** | +43% · −7,6% | +28% | −7,3% | 2,1 | 1,42 → 1,31 | +17% | 0,12 |
> | 2644 | ADX + MACD + Tendência | **+178% · −50,0%** | +63% · −17,5% | +40% | −11,5% | 2,3 | 1,16 → 1,57 | +29% | 0,35 |
> | 2645 | Donchian + Quinta + Bollinger + Onda ⚠️ | **+197% · −26,2%** | +49% · −6,1% | +29% | −6,0% | 2,7 | 1,04 → 1,65 | +24% | 0,01 |
> | 2646 | VWAP + Donchian + IFR + Pôr do sol + Rompe 200 | **+192% · −36,5%** | +43% · −7,6% | +28% | −7,2% | 2,1 | 1,37 → 1,33 | +18% | 0,14 |
> | 2647 | Donchian + BB explosão + MACD + Pullback | **+171% · −51,8%** | +50% · −13,9% | +31% | −8,2% | 2,3 | 1,38 → 1,29 | +17% | 0,23 |
> | 2648 | VWAP + Donchian + Pôr do sol + Quinta + Bollinger ⚠️ | **+181% · −30,5%** | +40% · −5,6% | +24% | −6,5% | 1,8 | 1,39 → 1,37 | +17% | 0,06 |
> | 2649 | ADX + BB explosão + IFR + Bollinger + Onda | **+270% · −55,2%** | +57% · −10,7% | +33% | −6,7% | 3,1 | 0,88 → 1,75 | +25% | 0,28 |
> | 2650 | BB explosão + GPS médias + MACD + Pullback + Bollinger | **+217% · −49,9%** | +48% · −10,3% | +29% | −8,8% | 1,9 | 1,51 → 1,31 | +19% | 0,20 |
> | 2651 | ADX + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+199% · −37,5%** | +44% · −7,0% | +29% | −5,7% | 2,9 | 0,92 → 1,75 | +22% | 0,07 |
> | 2652 | ADX + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+235% · −41,0%** | +47% · −7,6% | +29% | −5,4% | 3,1 | 0,73 → 1,94 | +17% | 0,08 |
> | 2653 | VWAP + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+155% · −33,2%** | +36% · −6,3% | +26% | −7,4% | 1,8 | 1,26 → 1,55 | +20% | 0,06 |
> | 2654 | ADX + IFR + MACD + Tendência + Onda | **+303% · −53,1%** | +60% · −11,8% | +39% | −10,4% | 2,5 | 1,03 → 1,72 | +29% | 0,32 |
> | 2655 | Donchian + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+255% · −37,4%** | +50% · −6,4% | +33% | −8,2% | 2,5 | 1,10 → 1,64 | +27% | 0,15 |
> | 2656 | Donchian + BB explosão + GPS médias + MACD + Tendência | **+238% · −71,0%** | +62% · −18,0% | +37% | −9,7% | 2,5 | 1,40 → 1,25 | +20% | 0,49 |
> | 2657 | MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+154% · −25,3%** | +40% · −5,6% | +27% | −7,2% | 1,9 | 1,06 → 1,89 | +16% | 0,15 |
> | 2658 | ADX + GPS médias + Pôr do sol + Bollinger + Onda | **+248% · −48,1%** | +52% · −9,6% | +30% | −5,4% | 3,2 | 0,95 → 1,64 | +22% | 0,11 |
> | 2659 | ADX + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+132% · −34,7%** | +40% · −8,0% | +26% | −4,8% | 2,8 | 0,94 → 1,75 | +20% | 0,01 |
> | 2660 | ADX + GPS médias + Rompe 200 + Tendência + Onda | **+246% · −54,9%** | +56% · −11,7% | +35% | −8,4% | 2,6 | 1,17 → 1,46 | +30% | 0,23 |
> | 2661 | ADX + VWAP + Donchian + Pôr do sol + Quinta ⚠️ | **+183% · −49,6%** | +44% · −8,4% | +27% | −4,7% | 3,0 | 1,10 → 1,45 | +15% | 0,04 |
> | 2662 | ADX + VWAP + Donchian + 1ª vela 80 + Quinta ⚠️ | **+226% · −50,5%** | +50% · −7,9% | +30% | −6,6% | 2,7 | 1,08 → 1,59 | +18% | 0,08 |
> | 2663 | Donchian + GPS médias + Pullback + Rompe 200 + Onda | **+225% · −44,2%** | +50% · −9,3% | +31% | −7,8% | 2,3 | 1,37 → 1,28 | +24% | 0,19 |
> | 2664 | IFR + MACD + Pôr do sol + Bollinger + Onda | **+233% · −33,3%** | +45% · −6,1% | +30% | −6,3% | 2,7 | 0,90 → 1,84 | +22% | 0,15 |
> | 2665 | Donchian + BB explosão + GPS médias + Pôr do sol + Bollinger | **+234% · −54,6%** | +54% · −11,9% | +29% | −7,7% | 2,2 | 1,45 → 1,29 | +18% | 0,18 |
> | 2666 | VWAP + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+155% · −45,5%** | +37% · −9,9% | +27% | −7,0% | 2,1 | 1,38 → 1,32 | +19% | 0,06 |
> | 2667 | ADX + VWAP + IFR + 1ª vela 80 ⚠️ | **+203% · −37,6%** | +54% · −9,2% | +34% | −7,7% | 2,8 | 0,95 → 1,74 | +18% | 0,22 |
> | 2668 | ADX + VWAP + IFR + Pôr do sol | **+160% · −38,1%** | +46% · −9,0% | +30% | −5,4% | 3,1 | 0,96 → 1,61 | +14% | 0,09 |
> | 2669 | Donchian + BB explosão + Pullback + Bollinger + Onda | **+242% · −47,9%** | +51% · −9,2% | +30% | −7,3% | 2,4 | 1,20 → 1,47 | +22% | 0,19 |
> | 2670 | VWAP + GPS médias + IFR + Bollinger | **+215% · −42,5%** | +54% · −11,6% | +32% | −11,3% | 1,7 | 1,42 → 1,37 | +22% | 0,33 |

> [!example]- Combinações 2671 a 2700 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2671 | VWAP + IFR + Rompe 200 + Tendência | **+166% · −37,7%** | +46% · −9,3% | +32% | −8,6% | 2,3 | 1,46 → 1,28 | +18% | 0,27 |
> | 2672 | Donchian + BB explosão + Rompe 200 + Tendência | **+182% · −64,9%** | +54% · −18,0% | +33% | −7,7% | 2,7 | 1,49 → 1,19 | +13% | 0,40 |
> | 2673 | BB explosão + GPS médias + Pôr do sol + Rompe 200 + Tendência | **+174% · −58,5%** | +45% · −13,5% | +29% | −5,6% | 2,9 | 1,55 → 1,14 | +16% | 0,16 |
> | 2674 | ADX + BB explosão + Pôr do sol + Bollinger | **+164% · −51,3%** | +47% · −13,2% | +27% | −4,7% | 3,0 | 0,96 → 1,64 | +21% | 0,12 |
> | 2675 | ADX + BB explosão + GPS médias + Bollinger | **+202% · −59,7%** | +60% · −17,1% | +32% | −7,0% | 2,7 | 1,18 → 1,39 | +21% | 0,41 |
> | 2676 | GPS médias + MACD + Pullback | **+131% · −28,8%** | +48% · −8,7% | +32% | −9,0% | 2,1 | 1,61 → 1,24 | +23% | 0,02 |
> | 2677 | Pullback + Tendência + Onda | **+136% · −27,1%** | +49% · −8,8% | +35% | −9,6% | 2,4 | 1,24 → 1,40 | +26% | 0,16 |
> | 2678 | ADX + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+277% · −43,3%** | +55% · −8,7% | +36% | −7,5% | 3,1 | 0,77 → 1,86 | +23% | 0,23 |
> | 2679 | ADX + GPS médias + Tendência + Onda | **+233% · −55,0%** | +65% · −14,3% | +39% | −9,4% | 2,8 | 1,10 → 1,49 | +33% | 0,28 |
> | 2680 | Donchian + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+186% · −33,1%** | +48% · −8,0% | +31% | −9,0% | 2,0 | 1,24 → 1,52 | +25% | 0,23 |
> | 2681 | Donchian + BB explosão + Bollinger | **+165% · −46,0%** | +59% · −16,0% | +31% | −8,2% | 2,3 | 1,30 → 1,34 | +14% | 0,38 |
> | 2682 | VWAP + Donchian + IFR + Pôr do sol | **+179% · −32,8%** | +49% · −8,3% | +31% | −8,3% | 2,1 | 1,28 → 1,39 | +18% | 0,13 |
> | 2683 | ADX + BB explosão + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+201% · −58,0%** | +51% · −13,4% | +30% | −6,5% | 2,7 | 1,11 → 1,50 | +24% | 0,13 |
> | 2684 | ADX + VWAP + MACD + Pullback + Bollinger | **+217% · −44,2%** | +46% · −8,0% | +29% | −7,0% | 2,3 | 1,17 → 1,55 | +17% | 0,21 |
> | 2685 | VWAP + GPS médias + IFR + Pullback | **+180% · −38,9%** | +49% · −9,4% | +32% | −9,6% | 2,0 | 1,61 → 1,26 | +19% | 0,13 |
> | 2686 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+163% · −45,1%** | +41% · −8,9% | +26% | −4,4% | 3,1 | 0,95 → 1,63 | +20% | 0,06 |
> | 2687 | VWAP + Donchian + IFR + Tendência + Onda | **+273% · −47,9%** | +59% · −10,3% | +37% | −9,0% | 2,7 | 1,16 → 1,43 | +28% | 0,37 |
> | 2688 | BB explosão + IFR + MACD + Bollinger | **+198% · −37,5%** | +51% · −9,7% | +32% | −9,1% | 2,1 | 1,18 → 1,60 | +23% | 0,35 |
> | 2689 | Donchian + BB explosão + IFR + MACD + Rompe 200 | **+221% · −51,8%** | +51% · −11,1% | +32% | −8,8% | 2,2 | 1,27 → 1,40 | +19% | 0,36 |
> | 2690 | BB explosão + Pullback + Rompe 200 + Bollinger | **+124% · −33,7%** | +37% · −7,7% | +24% | −5,3% | 2,1 | 1,69 → 1,21 | +12% | 0,11 |
> | 2691 | ADX + Pôr do sol + 1ª vela 80 ⚠️ | **+121% · −30,8%** | +47% · −9,5% | +29% | −4,9% | 3,4 | 0,70 → 1,86 | +17% | 0,06 |
> | 2692 | ADX + Bollinger + Tendência + Onda | **+254% · −47,0%** | +61% · −11,8% | +36% | −9,4% | 2,5 | 1,01 → 1,73 | +28% | 0,27 |
> | 2693 | Donchian + BB explosão + GPS médias + IFR + MACD | **+247% · −62,3%** | +61% · −14,6% | +36% | −11,2% | 2,1 | 1,32 → 1,35 | +22% | 0,47 |
> | 2694 | Donchian + BB explosão + MACD + Rompe 200 + Tendência | **+215% · −63,9%** | +52% · −15,2% | +33% | −8,3% | 2,4 | 1,36 → 1,27 | +18% | 0,39 |
> | 2695 | BB explosão + Pôr do sol + Tendência | **+110% · −48,2%** | +44% · −17,4% | +30% | −6,9% | 2,6 | 1,40 → 1,24 | +15% | 0,10 |
> | 2696 | Donchian + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+306% · −38,1%** | +57% · −7,6% | +36% | −9,1% | 2,6 | 1,00 → 1,72 | +28% | 0,30 |
> | 2697 | GPS médias + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+195% · −34,3%** | +44% · −6,8% | +29% | −7,0% | 2,3 | 1,22 → 1,45 | +27% | 0,09 |
> | 2698 | VWAP + MACD + Quinta + Pullback + Tendência ⚠️ | **+160% · −38,8%** | +38% · −8,0% | +29% | −6,5% | 2,5 | 1,48 → 1,23 | +19% | 0,09 |
> | 2699 | ADX + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+228% · −40,5%** | +48% · −7,4% | +32% | −6,5% | 3,0 | 0,86 → 1,78 | +23% | 0,09 |
> | 2700 | VWAP + Donchian + Pullback + Bollinger | **+191% · −34,2%** | +49% · −8,4% | +29% | −8,6% | 1,9 | 1,58 → 1,28 | +16% | 0,18 |

> [!example]- Combinações 2701 a 2730 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2701 | ADX + VWAP + GPS médias + IFR + Rompe 200 | **+219% · −53,1%** | +52% · −11,2% | +31% | −8,0% | 2,3 | 1,24 → 1,40 | +22% | 0,26 |
> | 2702 | ADX + Donchian + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+255% · −43,5%** | +54% · −8,4% | +33% | −6,3% | 3,2 | 0,90 → 1,69 | +25% | 0,17 |
> | 2703 | GPS médias + MACD + Pullback + Bollinger + Onda | **+244% · −37,4%** | +48% · −7,6% | +31% | −8,3% | 2,1 | 1,21 → 1,51 | +26% | 0,15 |
> | 2704 | BB explosão + GPS médias + IFR + Pôr do sol + Rompe 200 | **+175% · −49,3%** | +44% · −10,1% | +28% | −7,1% | 2,1 | 1,46 → 1,28 | +18% | 0,16 |
> | 2705 | VWAP + Donchian + GPS médias + IFR + Pôr do sol | **+241% · −45,5%** | +53% · −9,8% | +32% | −9,7% | 2,0 | 1,41 → 1,32 | +21% | 0,17 |
> | 2706 | Donchian + BB explosão + MACD + Quinta + Bollinger ⚠️ | **+218% · −48,6%** | +48% · −9,5% | +29% | −7,7% | 2,0 | 1,27 → 1,44 | +19% | 0,19 |
> | 2707 | IFR + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+289% · −35,8%** | +51% · −6,8% | +33% | −8,3% | 2,4 | 0,91 → 1,89 | +21% | 0,26 |
> | 2708 | Donchian + IFR + MACD + Pôr do sol + Onda | **+252% · −37,5%** | +51% · −7,4% | +33% | −7,1% | 2,8 | 0,99 → 1,65 | +25% | 0,19 |
> | 2709 | ADX + Donchian + BB explosão + MACD + Pôr do sol | **+212% · −63,2%** | +52% · −14,5% | +31% | −6,0% | 3,1 | 1,03 → 1,52 | +23% | 0,17 |
> | 2710 | ADX + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+175% · −41,2%** | +40% · −7,8% | +27% | −5,7% | 2,6 | 0,96 → 1,77 | +20% | 0,04 |
> | 2711 | Donchian + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+212% · −29,1%** | +43% · −5,3% | +27% | −6,0% | 2,3 | 1,16 → 1,56 | +25% | 0,05 |
> | 2712 | Donchian + BB explosão + GPS médias + Quinta + Bollinger ⚠️ | **+231% · −54,3%** | +53% · −11,6% | +30% | −7,8% | 2,2 | 1,50 → 1,26 | +17% | 0,19 |
> | 2713 | Donchian + GPS médias + MACD + Pôr do sol | **+196% · −36,9%** | +53% · −9,5% | +32% | −9,3% | 2,0 | 1,36 → 1,32 | +25% | 0,14 |
> | 2714 | BB explosão + GPS médias + MACD + Pôr do sol + Tendência | **+196% · −60,6%** | +49% · −13,9% | +32% | −7,9% | 2,4 | 1,37 → 1,26 | +21% | 0,22 |
> | 2715 | ADX + BB explosão + Quinta + Bollinger ⚠️ | **+161% · −52,3%** | +47% · −13,6% | +27% | −5,2% | 2,7 | 1,05 → 1,59 | +20% | 0,18 |
> | 2716 | VWAP + Donchian + BB explosão + IFR + Pullback | **+212% · −56,9%** | +50% · −13,0% | +32% | −8,8% | 2,1 | 1,41 → 1,29 | +14% | 0,25 |
> | 2717 | VWAP + Donchian + GPS médias + IFR + Quinta ⚠️ | **+239% · −46,6%** | +53% · −9,8% | +32% | −9,7% | 2,0 | 1,46 → 1,30 | +20% | 0,15 |
> | 2718 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+198% · −39,4%** | +42% · −6,6% | +28% | −5,4% | 2,8 | 0,96 → 1,72 | +23% | −0,02 |
> | 2719 | Donchian + BB explosão + Quinta + Tendência + Onda ⚠️ | **+211% · −61,0%** | +52% · −13,9% | +33% | −7,2% | 2,8 | 1,16 → 1,37 | +23% | 0,18 |
> | 2720 | Donchian + GPS médias + MACD + Pullback + Onda | **+252% · −45,7%** | +54% · −9,9% | +34% | −8,9% | 2,4 | 1,23 → 1,39 | +29% | 0,20 |
> | 2721 | ADX + GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+294% · −56,0%** | +59% · −12,5% | +33% | −7,2% | 2,8 | 0,93 → 1,72 | +21% | 0,25 |
> | 2722 | Pôr do sol + Rompe 200 + Tendência | **+92% · −22,9%** | +37% · −7,0% | +27% | −6,4% | 2,2 | 1,72 → 1,20 | +18% | 0,06 |
> | 2723 | Donchian + MACD + Quinta + Tendência + Onda ⚠️ | **+245% · −43,5%** | +51% · −9,2% | +34% | −8,2% | 2,6 | 1,14 → 1,48 | +30% | 0,19 |
> | 2724 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+234% · −38,5%** | +46% · −7,7% | +28% | −9,2% | 1,6 | 1,26 → 1,57 | +19% | 0,16 |
> | 2725 | Donchian + Pullback + Onda | **+148% · −33,2%** | +53% · −9,7% | +33% | −7,1% | 2,9 | 1,13 → 1,42 | +26% | 0,15 |
> | 2726 | ADX + VWAP + Quinta + Rompe 200 + Tendência ⚠️ | **+172% · −49,5%** | +42% · −9,8% | +28% | −6,7% | 2,3 | 1,27 → 1,34 | +19% | 0,10 |
> | 2727 | BB explosão + GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+171% · −59,4%** | +44% · −13,9% | +29% | −5,6% | 2,9 | 1,61 → 1,12 | +15% | 0,16 |
> | 2728 | Donchian + GPS médias + Pôr do sol + Rompe 200 | **+170% · −36,2%** | +48% · −9,2% | +28% | −6,2% | 2,4 | 1,63 → 1,17 | +18% | 0,08 |
> | 2729 | VWAP + Donchian + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+247% · −54,2%** | +53% · −12,6% | +32% | −10,8% | 1,8 | 1,51 → 1,31 | +20% | 0,16 |
> | 2730 | ADX + GPS médias + Pullback + Onda | **+192% · −45,4%** | +55% · −11,9% | +33% | −7,0% | 2,9 | 1,08 → 1,47 | +28% | 0,13 |

> [!example]- Combinações 2731 a 2760 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2731 | BB explosão + MACD + 1ª vela 80 + Pullback ⚠️ | **+144% · −36,0%** | +42% · −9,0% | +29% | −9,1% | 1,8 | 1,27 → 1,50 | +22% | 0,03 |
> | 2732 | Quinta + Rompe 200 + Tendência ⚠️ | **+90% · −23,8%** | +36% · −7,4% | +27% | −6,4% | 2,3 | 1,82 → 1,17 | +16% | 0,04 |
> | 2733 | ADX + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+178% · −40,1%** | +41% · −7,4% | +27% | −5,3% | 2,7 | 0,89 → 1,79 | +20% | 0,07 |
> | 2734 | ADX + IFR + Quinta + Onda ⚠️ | **+185% · −34,0%** | +51% · −8,6% | +33% | −6,5% | 3,1 | 0,80 → 1,82 | +21% | 0,04 |
> | 2735 | VWAP + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+116% · −23,0%** | +30% · −3,7% | +21% | −5,8% | 1,5 | 1,71 → 1,29 | +15% | 0,03 |
> | 2736 | ADX + Pullback + Bollinger + Onda | **+200% · −35,1%** | +51% · −8,9% | +31% | −6,9% | 2,6 | 0,96 → 1,78 | +21% | 0,13 |
> | 2737 | ADX + Donchian + BB explosão + MACD + 1ª vela 80 ⚠️ | **+254% · −62,8%** | +58% · −14,4% | +34% | −8,0% | 2,7 | 1,03 → 1,61 | +26% | 0,29 |
> | 2738 | VWAP + BB explosão + 1ª vela 80 + Pullback + Tendência ⚠️ | **+188% · −57,4%** | +45% · −13,8% | +31% | −8,8% | 2,1 | 1,41 → 1,30 | +17% | 0,16 |
> | 2739 | Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+172% · −29,2%** | +46% · −6,6% | +32% | −6,9% | 2,9 | 0,98 → 1,66 | +22% | 0,11 |
> | 2740 | ADX + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+203% · −42,3%** | +45% · −7,9% | +30% | −6,8% | 2,6 | 1,01 → 1,68 | +23% | 0,05 |
> | 2741 | Donchian + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+268% · −35,1%** | +50% · −6,4% | +30% | −7,4% | 2,3 | 1,07 → 1,71 | +25% | 0,19 |
> | 2742 | IFR + MACD + Rompe 200 | **+114% · −23,3%** | +43% · −7,1% | +30% | −7,6% | 2,3 | 1,19 → 1,49 | +26% | 0,27 |
> | 2743 | ADX + VWAP + Donchian + MACD + Tendência | **+264% · −65,0%** | +60% · −15,3% | +36% | −9,2% | 2,6 | 1,18 → 1,42 | +24% | 0,39 |
> | 2744 | VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+157% · −44,9%** | +37% · −9,7% | +27% | −7,1% | 2,0 | 1,32 → 1,34 | +20% | 0,13 |
> | 2745 | VWAP + Donchian + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+288% · −50,9%** | +57% · −11,6% | +32% | −12,2% | 1,6 | 1,37 → 1,40 | +22% | 0,31 |
> | 2746 | Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+185% · −34,4%** | +41% · −6,5% | +29% | −6,4% | 2,6 | 1,07 → 1,59 | +22% | 0,11 |
> | 2747 | ADX + BB explosão + IFR + 1ª vela 80 + Onda ⚠️ | **+247% · −51,9%** | +56% · −10,6% | +35% | −6,9% | 3,2 | 0,81 → 1,77 | +23% | 0,22 |
> | 2748 | VWAP + IFR + Bollinger + Tendência + Onda | **+274% · −44,9%** | +53% · −9,3% | +34% | −8,6% | 2,5 | 1,13 → 1,54 | +26% | 0,30 |
> | 2749 | VWAP + MACD + Pôr do sol + Pullback + Tendência | **+162% · −38,7%** | +38% · −8,0% | +29% | −6,6% | 2,4 | 1,42 → 1,25 | +20% | 0,12 |
> | 2750 | Donchian + BB explosão + MACD + 1ª vela 80 + Bollinger ⚠️ | **+272% · −47,8%** | +54% · −10,1% | +32% | −9,9% | 1,9 | 1,21 → 1,58 | +23% | 0,32 |
> | 2751 | BB explosão + Quinta + Tendência ⚠️ | **+108% · −49,8%** | +44% · −18,3% | +30% | −6,8% | 2,6 | 1,48 → 1,20 | +14% | 0,09 |
> | 2752 | ADX + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+238% · −41,6%** | +48% · −7,7% | +29% | −5,5% | 3,0 | 0,67 → 1,96 | +16% | 0,12 |
> | 2753 | ADX + BB explosão + Tendência | **+160% · −65,0%** | +63% · −26,7% | +38% | −10,5% | 2,4 | 1,20 → 1,43 | +20% | 0,40 |
> | 2754 | Donchian + GPS médias + MACD + Quinta ⚠️ | **+194% · −37,2%** | +53% · −9,6% | +32% | −9,3% | 2,0 | 1,43 → 1,30 | +23% | 0,12 |
> | 2755 | BB explosão + GPS médias + MACD + Quinta + Tendência ⚠️ | **+193% · −61,7%** | +49% · −14,2% | +32% | −7,9% | 2,4 | 1,42 → 1,24 | +20% | 0,21 |
> | 2756 | ADX + GPS médias + MACD + 1ª vela 80 ⚠️ | **+218% · −49,7%** | +59% · −13,3% | +35% | −8,7% | 2,6 | 1,06 → 1,61 | +25% | 0,25 |
> | 2757 | ADX + BB explosão + IFR + MACD + Rompe 200 | **+209% · −54,8%** | +49% · −12,1% | +31% | −7,1% | 2,6 | 1,06 → 1,59 | +23% | 0,26 |
> | 2758 | BB explosão + IFR + Pullback + Onda | **+163% · −40,0%** | +47% · −9,8% | +32% | −7,1% | 2,7 | 1,10 → 1,52 | +25% | 0,13 |
> | 2759 | BB explosão + MACD + Quinta + Tendência ⚠️ | **+142% · −53,5%** | +43% · −14,7% | +31% | −7,8% | 2,3 | 1,30 → 1,29 | +19% | 0,17 |
> | 2760 | BB explosão + GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+209% · −52,0%** | +47% · −11,7% | +28% | −8,8% | 1,7 | 1,37 → 1,36 | +19% | 0,25 |

> [!example]- Combinações 2761 a 2790 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2761 | ADX + VWAP + GPS médias + MACD + Tendência | **+239% · −63,3%** | +57% · −14,9% | +35% | −8,8% | 2,6 | 1,21 → 1,35 | +26% | 0,35 |
> | 2762 | GPS médias + Bollinger | **+120% · −29,5%** | +62% · −14,9% | +31% | −9,6% | 1,9 | 1,62 → 1,25 | +23% | 0,33 |
> | 2763 | VWAP + Donchian + MACD + Pullback + Bollinger | **+237% · −38,2%** | +47% · −7,5% | +29% | −10,0% | 1,7 | 1,40 → 1,35 | +20% | 0,24 |
> | 2764 | BB explosão + GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+172% · −50,4%** | +43% · −10,5% | +28% | −7,1% | 2,1 | 1,52 → 1,25 | +17% | 0,17 |
> | 2765 | ADX + BB explosão + IFR + MACD | **+196% · −57,5%** | +57% · −15,6% | +35% | −7,7% | 2,9 | 0,97 → 1,63 | +26% | 0,34 |
> | 2766 | MACD + Pôr do sol + Pullback + Bollinger + Onda | **+178% · −25,7%** | +38% · −4,6% | +26% | −5,7% | 2,4 | 1,03 → 1,73 | +22% | 0,05 |
> | 2767 | Donchian + BB explosão + GPS médias + Tendência + Onda | **+227% · −69,1%** | +62% · −16,9% | +37% | −9,0% | 2,7 | 1,21 → 1,28 | +24% | 0,43 |
> | 2768 | Donchian + GPS médias + Quinta + Rompe 200 ⚠️ | **+168% · −36,9%** | +48% · −9,4% | +28% | −6,3% | 2,4 | 1,70 → 1,14 | +17% | 0,09 |
> | 2769 | Donchian + MACD + Pôr do sol + Rompe 200 | **+142% · −26,9%** | +41% · −6,7% | +27% | −6,2% | 2,2 | 1,27 → 1,35 | +21% | 0,10 |
> | 2770 | ADX + Donchian + MACD + Bollinger + Onda | **+310% · −47,3%** | +60% · −9,0% | +34% | −7,2% | 3,0 | 0,88 → 1,73 | +24% | 0,27 |
> | 2771 | VWAP + IFR + MACD + Rompe 200 + Tendência | **+204% · −43,2%** | +45% · −8,9% | +32% | −9,0% | 2,2 | 1,30 → 1,32 | +22% | 0,32 |
> | 2772 | GPS médias + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+268% · −43,2%** | +56% · −8,4% | +36% | −9,1% | 2,6 | 1,11 → 1,51 | +26% | 0,29 |
> | 2773 | BB explosão + MACD + Pôr do sol + Pullback | **+105% · −35,8%** | +34% · −8,4% | +25% | −5,9% | 2,1 | 1,31 → 1,32 | +18% | −0,05 |
> | 2774 | BB explosão + GPS médias + Pullback + Bollinger | **+175% · −48,5%** | +50% · −13,0% | +29% | −7,2% | 2,2 | 1,66 → 1,19 | +15% | 0,19 |
> | 2775 | GPS médias + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+243% · −39,6%** | +50% · −8,3% | +32% | −8,6% | 2,3 | 1,13 → 1,59 | +25% | 0,24 |
> | 2776 | ADX + GPS médias + MACD + Pullback + Onda | **+233% · −46,9%** | +53% · −9,6% | +33% | −7,3% | 2,8 | 1,05 → 1,53 | +28% | 0,14 |
> | 2777 | Donchian + 1ª vela 80 + Bollinger + Onda ⚠️ | **+251% · −33,2%** | +58% · −7,4% | +33% | −8,1% | 2,5 | 0,97 → 1,77 | +25% | 0,21 |
> | 2778 | VWAP + GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+214% · −45,1%** | +47% · −9,8% | +30% | −10,7% | 1,6 | 1,35 → 1,39 | +22% | 0,25 |
> | 2779 | ADX + BB explosão + MACD + Quinta + Bollinger ⚠️ | **+203% · −55,9%** | +46% · −11,6% | +28% | −5,7% | 2,6 | 1,01 → 1,64 | +22% | 0,18 |
> | 2780 | ADX + IFR + Pôr do sol + Rompe 200 + Onda | **+201% · −37,6%** | +45% · −7,0% | +29% | −5,7% | 2,9 | 0,86 → 1,77 | +22% | 0,08 |
> | 2781 | VWAP + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+166% · −35,6%** | +38% · −6,9% | +26% | −5,6% | 2,3 | 1,55 → 1,22 | +17% | 0,13 |
> | 2782 | VWAP + GPS médias + IFR + MACD + Pullback | **+220% · −43,2%** | +48% · −9,2% | +32% | −10,7% | 1,8 | 1,44 → 1,32 | +22% | 0,18 |
> | 2783 | GPS médias + MACD + Quinta + Tendência + Onda ⚠️ | **+220% · −41,6%** | +49% · −8,2% | +33% | −7,8% | 2,6 | 1,17 → 1,40 | +27% | 0,13 |
> | 2784 | ADX + BB explosão + MACD + 1ª vela 80 + Bollinger ⚠️ | **+252% · −54,5%** | +52% · −10,7% | +31% | −7,1% | 2,6 | 0,94 → 1,75 | +20% | 0,28 |
> | 2785 | ADX + VWAP + Quinta + Tendência ⚠️ | **+160% · −51,1%** | +47% · −13,0% | +31% | −7,3% | 2,5 | 1,19 → 1,39 | +20% | 0,11 |
> | 2786 | BB explosão + GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+242% · −51,4%** | +54% · −12,0% | +34% | −11,3% | 1,9 | 1,25 → 1,49 | +26% | 0,32 |
> | 2787 | BB explosão + MACD + Quinta + Pullback ⚠️ | **+103% · −37,9%** | +34% · −9,0% | +25% | −5,9% | 2,1 | 1,41 → 1,28 | +16% | −0,03 |
> | 2788 | BB explosão + GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+176% · −52,8%** | +43% · −12,3% | +28% | −7,5% | 2,0 | 1,55 → 1,25 | +17% | 0,13 |
> | 2789 | BB explosão + IFR + Rompe 200 | **+107% · −36,8%** | +43% · −12,4% | +29% | −7,1% | 2,3 | 1,28 → 1,33 | +15% | 0,30 |
> | 2790 | MACD + Pullback + Rompe 200 + Tendência + Onda | **+189% · −38,4%** | +42% · −7,4% | +31% | −8,3% | 2,2 | 1,24 → 1,41 | +28% | 0,17 |

> [!example]- Combinações 2791 a 2820 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2791 | MACD + Pôr do sol + Rompe 200 + Bollinger | **+111% · −20,1%** | +33% · −4,0% | +23% | −5,2% | 1,9 | 1,20 → 1,57 | +20% | 0,06 |
> | 2792 | Donchian + Pôr do sol + Bollinger + Onda | **+200% · −26,5%** | +50% · −6,6% | +29% | −5,9% | 2,8 | 0,98 → 1,68 | +23% | 0,05 |
> | 2793 | ADX + VWAP + Donchian + BB explosão + Tendência | **+220% · −76,0%** | +59% · −21,2% | +35% | −8,4% | 2,7 | 1,19 → 1,32 | +18% | 0,42 |
> | 2794 | MACD + Quinta + Bollinger + Tendência + Onda ⚠️ | **+230% · −39,5%** | +45% · −7,8% | +31% | −7,8% | 2,3 | 1,09 → 1,61 | +24% | 0,15 |
> | 2795 | ADX + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+148% · −48,6%** | +46% · −12,0% | +29% | −5,1% | 3,1 | 0,90 → 1,64 | +20% | 0,03 |
> | 2796 | BB explosão + GPS médias + Bollinger + Tendência + Onda | **+245% · −60,0%** | +56% · −13,3% | +34% | −8,3% | 2,5 | 1,20 → 1,36 | +26% | 0,34 |
> | 2797 | ADX + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+195% · −36,8%** | +44% · −7,1% | +29% | −5,9% | 2,8 | 0,93 → 1,71 | +23% | 0,08 |
> | 2798 | Donchian + Pullback + Rompe 200 + Onda | **+160% · −33,2%** | +45% · −8,0% | +29% | −6,6% | 2,5 | 1,22 → 1,33 | +24% | 0,17 |
> | 2799 | ADX + VWAP + Donchian + Bollinger | **+229% · −48,6%** | +59% · −11,7% | +32% | −7,2% | 2,7 | 1,09 → 1,50 | +17% | 0,32 |
> | 2800 | BB explosão + GPS médias + IFR + MACD + Quinta ⚠️ | **+195% · −51,9%** | +48% · −10,9% | +31% | −9,4% | 1,9 | 1,32 → 1,36 | +22% | 0,19 |
> | 2801 | GPS médias + IFR + Quinta + Onda ⚠️ | **+182% · −32,1%** | +50% · −8,1% | +32% | −7,8% | 2,5 | 1,13 → 1,51 | +28% | 0,03 |
> | 2802 | ADX + 1ª vela 80 + Tendência + Onda ⚠️ | **+232% · −45,1%** | +60% · −11,1% | +38% | −9,1% | 2,8 | 0,91 → 1,74 | +25% | 0,19 |
> | 2803 | VWAP + Donchian + GPS médias + Pullback + Bollinger | **+265% · −46,5%** | +53% · −9,9% | +30% | −9,4% | 1,9 | 1,63 → 1,24 | +17% | 0,21 |
> | 2804 | ADX + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+151% · −47,5%** | +46% · −11,5% | +29% | −4,8% | 3,3 | 0,83 → 1,68 | +20% | 0,06 |
> | 2805 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+113% · −21,1%** | +30% · −3,0% | +23% | −5,0% | 2,1 | 1,12 → 1,66 | +18% | 0,03 |
> | 2806 | ADX + BB explosão + Pullback | **+121% · −54,9%** | +49% · −20,7% | +30% | −7,2% | 2,4 | 1,20 → 1,39 | +16% | 0,13 |
> | 2807 | MACD + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+229% · −30,3%** | +44% · −5,6% | +30% | −7,8% | 2,2 | 1,02 → 1,81 | +20% | 0,13 |
> | 2808 | VWAP + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+253% · −42,3%** | +52% · −8,5% | +36% | −8,5% | 2,7 | 1,05 → 1,57 | +27% | 0,26 |
> | 2809 | VWAP + IFR + Rompe 200 + Bollinger | **+152% · −29,3%** | +41% · −7,0% | +27% | −8,3% | 1,7 | 1,34 → 1,39 | +19% | 0,24 |
> | 2810 | ADX + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+247% · −46,5%** | +52% · −9,5% | +34% | −8,2% | 2,6 | 0,99 → 1,69 | +25% | 0,16 |
> | 2811 | VWAP + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+145% · −37,7%** | +41% · −9,7% | +30% | −7,7% | 2,2 | 1,24 → 1,39 | +23% | 0,14 |
> | 2812 | ADX + Donchian + Quinta + Onda ⚠️ | **+195% · −41,6%** | +54% · −9,2% | +32% | −5,6% | 3,5 | 0,85 → 1,63 | +22% | 0,01 |
> | 2813 | ADX + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+153% · −33,0%** | +37% · −6,3% | +26% | −4,8% | 2,8 | 0,95 → 1,69 | +18% | −0,02 |
> | 2814 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+177% · −36,8%** | +40% · −7,4% | +27% | −8,4% | 1,7 | 1,29 → 1,45 | +22% | 0,10 |
> | 2815 | VWAP + Donchian + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+192% · −50,8%** | +42% · −11,7% | +28% | −9,1% | 1,7 | 1,47 → 1,32 | +17% | 0,14 |
> | 2816 | BB explosão + GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+136% · −46,0%** | +37% · −9,2% | +25% | −4,6% | 2,6 | 1,70 → 1,10 | +15% | −0,03 |
> | 2817 | GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+161% · −34,6%** | +45% · −8,8% | +30% | −9,6% | 1,8 | 1,28 → 1,46 | +22% | 0,02 |
> | 2818 | VWAP + GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+170% · −37,5%** | +40% · −7,6% | +27% | −7,9% | 1,8 | 1,44 → 1,31 | +20% | 0,02 |
> | 2819 | ADX + GPS médias + Rompe 200 | **+137% · −43,1%** | +54% · −15,5% | +31% | −6,8% | 2,7 | 1,21 → 1,29 | +23% | 0,21 |
> | 2820 | ADX + VWAP + Donchian + Rompe 200 + Bollinger | **+244% · −45,1%** | +51% · −8,2% | +29% | −6,9% | 2,3 | 1,18 → 1,45 | +19% | 0,24 |

> [!example]- Combinações 2821 a 2850 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2821 | Donchian + BB explosão + MACD + Pullback + Rompe 200 | **+182% · −51,5%** | +44% · −11,2% | +29% | −7,2% | 2,2 | 1,44 → 1,25 | +16% | 0,20 |
> | 2822 | Donchian + BB explosão + Rompe 200 + Bollinger | **+177% · −45,5%** | +50% · −11,5% | +28% | −7,0% | 2,1 | 1,39 → 1,27 | +14% | 0,27 |
> | 2823 | VWAP + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+168% · −35,0%** | +38% · −6,7% | +26% | −5,8% | 2,3 | 1,49 → 1,24 | +18% | 0,14 |
> | 2824 | VWAP + MACD + Quinta + Bollinger + Tendência ⚠️ | **+195% · −37,4%** | +42% · −7,2% | +29% | −7,9% | 2,0 | 1,30 → 1,35 | +22% | 0,22 |
> | 2825 | VWAP + GPS médias + IFR + Rompe 200 + Bollinger | **+229% · −44,4%** | +47% · −9,6% | +29% | −9,7% | 1,6 | 1,49 → 1,32 | +20% | 0,28 |
> | 2826 | BB explosão + Quinta + Bollinger + Tendência + Onda ⚠️ | **+208% · −49,8%** | +46% · −9,8% | +30% | −6,8% | 2,5 | 1,13 → 1,48 | +24% | 0,13 |
> | 2827 | ADX + Donchian + MACD + Tendência + Onda | **+299% · −61,3%** | +64% · −13,2% | +39% | −10,0% | 2,6 | 1,04 → 1,59 | +29% | 0,34 |
> | 2828 | ADX + VWAP + Donchian + Pôr do sol + 1ª vela 80 ⚠️ | **+228% · −52,3%** | +50% · −7,9% | +30% | −6,7% | 2,6 | 1,03 → 1,60 | +17% | 0,13 |
> | 2829 | ADX + 1ª vela 80 + Quinta ⚠️ | **+119% · −31,8%** | +46% · −10,0% | +29% | −5,5% | 3,0 | 0,78 → 1,81 | +19% | −0,03 |
> | 2830 | ADX + VWAP + Donchian + GPS médias + Quinta ⚠️ | **+220% · −56,9%** | +54% · −12,6% | +31% | −7,8% | 2,3 | 1,25 → 1,31 | +21% | 0,14 |
> | 2831 | BB explosão + IFR + Pullback + Rompe 200 + Onda | **+174% · −42,2%** | +41% · −8,1% | +29% | −6,9% | 2,3 | 1,18 → 1,45 | +22% | 0,16 |
> | 2832 | VWAP + BB explosão + IFR + Tendência | **+172% · −57,0%** | +52% · −16,5% | +35% | −9,2% | 2,4 | 1,28 → 1,27 | +16% | 0,39 |
> | 2833 | ADX + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+164% · −37,4%** | +46% · −8,9% | +30% | −6,0% | 2,9 | 0,77 → 1,85 | +20% | 0,10 |
> | 2834 | VWAP + Donchian + Pullback + Tendência + Onda | **+229% · −49,4%** | +51% · −10,6% | +34% | −8,6% | 2,5 | 1,24 → 1,29 | +24% | 0,26 |
> | 2835 | ADX + VWAP + MACD + Bollinger + Tendência | **+264% · −56,9%** | +54% · −11,6% | +33% | −8,8% | 2,3 | 1,14 → 1,52 | +23% | 0,38 |
> | 2836 | GPS médias + MACD + Bollinger | **+160% · −33,9%** | +55% · −11,8% | +31% | −11,4% | 1,6 | 1,34 → 1,38 | +27% | 0,33 |
> | 2837 | ADX + VWAP + Donchian + IFR + MACD | **+270% · −53,7%** | +59% · −10,6% | +35% | −8,7% | 2,6 | 1,07 → 1,54 | +20% | 0,35 |
> | 2838 | Donchian + BB explosão + IFR + MACD | **+209% · −50,2%** | +59% · −13,5% | +36% | −10,2% | 2,3 | 1,20 → 1,44 | +21% | 0,48 |
> | 2839 | VWAP + Donchian + GPS médias + Pôr do sol + Tendência | **+235% · −55,7%** | +54% · −12,0% | +33% | −8,2% | 2,5 | 1,48 → 1,19 | +19% | 0,21 |
> | 2840 | ADX + BB explosão + MACD + Pôr do sol + Bollinger | **+206% · −55,1%** | +46% · −11,2% | +28% | −5,5% | 2,8 | 0,94 → 1,67 | +22% | 0,16 |
> | 2841 | VWAP + IFR + MACD + Tendência | **+191% · −40,0%** | +52% · −10,4% | +36% | −10,1% | 2,3 | 1,24 → 1,36 | +25% | 0,41 |
> | 2842 | ADX + IFR + Pôr do sol + Onda | **+187% · −34,1%** | +51% · −8,7% | +33% | −6,5% | 3,0 | 0,75 → 1,85 | +20% | 0,06 |
> | 2843 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+155% · −44,4%** | +40% · −9,1% | +26% | −7,0% | 1,9 | 1,32 → 1,33 | +20% | −0,01 |
> | 2844 | Donchian + BB explosão + IFR + Quinta + Onda ⚠️ | **+218% · −46,4%** | +51% · −9,2% | +32% | −7,1% | 2,7 | 1,07 → 1,51 | +25% | 0,14 |
> | 2845 | VWAP + Donchian + GPS médias + Quinta + Tendência ⚠️ | **+233% · −57,3%** | +54% · −12,4% | +33% | −8,2% | 2,5 | 1,53 → 1,18 | +18% | 0,18 |
> | 2846 | VWAP + IFR + 1ª vela 80 + Quinta ⚠️ | **+142% · −27,7%** | +40% · −6,5% | +28% | −8,5% | 1,8 | 1,16 → 1,63 | +19% | −0,01 |
> | 2847 | Donchian + Rompe 200 + Tendência + Onda | **+204% · −39,6%** | +55% · −10,3% | +35% | −9,1% | 2,4 | 1,21 → 1,37 | +27% | 0,31 |
> | 2848 | BB explosão + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+154% · −39,7%** | +38% · −7,4% | +27% | −7,0% | 2,0 | 1,24 → 1,43 | +19% | 0,13 |
> | 2849 | ADX + VWAP + Quinta + Pullback ⚠️ | **+116% · −38,3%** | +38% · −8,3% | +26% | −5,1% | 2,6 | 1,20 → 1,32 | +13% | 0,03 |
> | 2850 | VWAP + Donchian + IFR + MACD + Bollinger | **+286% · −43,3%** | +54% · −9,1% | +33% | −10,6% | 1,9 | 1,24 → 1,49 | +22% | 0,38 |

> [!example]- Combinações 2851 a 2880 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2851 | BB explosão + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+201% · −40,2%** | +44% · −8,3% | +30% | −8,9% | 2,0 | 1,17 → 1,59 | +23% | 0,23 |
> | 2852 | BB explosão + Pullback + Rompe 200 + Tendência + Onda | **+170% · −53,0%** | +42% · −11,3% | +30% | −7,3% | 2,3 | 1,26 → 1,27 | +21% | 0,19 |
> | 2853 | ADX + VWAP + GPS médias + IFR | **+207% · −51,3%** | +60% · −13,7% | +35% | −9,2% | 2,4 | 1,17 → 1,44 | +24% | 0,31 |
> | 2854 | VWAP + BB explosão + IFR + Pôr do sol + Pullback | **+150% · −44,7%** | +38% · −8,8% | +27% | −7,0% | 2,0 | 1,38 → 1,30 | +15% | 0,04 |
> | 2855 | Donchian + GPS médias + MACD + Pôr do sol + Rompe 200 | **+209% · −38,9%** | +47% · −7,9% | +29% | −8,1% | 2,0 | 1,43 → 1,28 | +22% | 0,13 |
> | 2856 | ADX + VWAP + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+214% · −67,7%** | +53% · −16,8% | +34% | −7,6% | 2,7 | 1,09 → 1,46 | +22% | 0,29 |
> | 2857 | Donchian + MACD + Pôr do sol + Tendência + Onda | **+247% · −43,4%** | +52% · −9,2% | +34% | −8,2% | 2,6 | 1,10 → 1,49 | +29% | 0,24 |
> | 2858 | GPS médias + IFR + Pôr do sol + Rompe 200 + Onda | **+197% · −34,3%** | +44% · −6,8% | +29% | −7,0% | 2,3 | 1,16 → 1,47 | +27% | 0,12 |
> | 2859 | MACD + Pullback + Tendência + Onda | **+176% · −34,9%** | +47% · −8,4% | +34% | −9,3% | 2,3 | 1,17 → 1,46 | +30% | 0,20 |
> | 2860 | Donchian + BB explosão + IFR + 1ª vela 80 + Onda ⚠️ | **+268% · −48,4%** | +57% · −9,5% | +35% | −8,8% | 2,5 | 1,03 → 1,63 | +29% | 0,28 |
> | 2861 | ADX + GPS médias + IFR + MACD + Onda | **+272% · −48,6%** | +60% · −10,2% | +37% | −8,4% | 2,8 | 0,96 → 1,63 | +30% | 0,29 |
> | 2862 | Donchian + BB explosão + Pôr do sol + Tendência + Onda | **+213% · −59,7%** | +52% · −13,3% | +33% | −7,2% | 2,8 | 1,12 → 1,38 | +24% | 0,22 |
> | 2863 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+157% · −32,5%** | +36% · −6,1% | +26% | −7,4% | 1,8 | 1,20 → 1,57 | +20% | 0,12 |
> | 2864 | BB explosão + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+265% · −40,9%** | +51% · −8,7% | +32% | −8,2% | 2,4 | 0,95 → 1,79 | +21% | 0,23 |
> | 2865 | ADX + VWAP + IFR + MACD + Bollinger | **+266% · −45,5%** | +53% · −9,1% | +32% | −7,9% | 2,5 | 1,01 → 1,67 | +19% | 0,34 |
> | 2866 | BB explosão + IFR + Rompe 200 + Tendência + Onda | **+214% · −51,5%** | +49% · −11,0% | +33% | −8,8% | 2,3 | 1,17 → 1,45 | +25% | 0,30 |
> | 2867 | ADX + VWAP + BB explosão + Bollinger + Tendência | **+232% · −69,7%** | +54% · −17,5% | +32% | −7,8% | 2,5 | 1,17 → 1,40 | +19% | 0,39 |
> | 2868 | ADX + MACD + 1ª vela 80 + Quinta ⚠️ | **+161% · −38,5%** | +45% · −9,3% | +30% | −6,4% | 2,7 | 0,84 → 1,81 | +20% | 0,04 |
> | 2869 | VWAP + BB explosão + IFR + Quinta + Pullback ⚠️ | **+147% · −46,2%** | +37% · −9,3% | +27% | −7,0% | 2,0 | 1,44 → 1,27 | +14% | 0,04 |
> | 2870 | Donchian + Tendência + Onda | **+191% · −39,9%** | +66% · −13,0% | +41% | −10,6% | 2,6 | 1,13 → 1,42 | +33% | 0,42 |
> | 2871 | VWAP + Donchian + Pôr do sol + Quinta + Pullback ⚠️ | **+147% · −36,5%** | +36% · −7,1% | +25% | −5,3% | 2,2 | 1,59 → 1,19 | +16% | −0,01 |
> | 2872 | BB explosão + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+193% · −47,7%** | +45% · −9,1% | +31% | −6,6% | 2,8 | 1,03 → 1,52 | +22% | 0,05 |
> | 2873 | VWAP + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+196% · −38,3%** | +41% · −7,6% | +28% | −10,9% | 1,4 | 1,28 → 1,54 | +20% | 0,19 |
> | 2874 | VWAP + IFR + MACD + Pullback | **+149% · −29,3%** | +42% · −7,5% | +30% | −9,6% | 1,8 | 1,30 → 1,37 | +19% | 0,14 |
> | 2875 | GPS médias + IFR + MACD + Bollinger + Onda | **+294% · −43,8%** | +56% · −9,4% | +34% | −9,5% | 2,2 | 1,10 → 1,62 | +27% | 0,30 |
> | 2876 | Donchian + GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+207% · −39,4%** | +46% · −8,0% | +29% | −8,1% | 2,0 | 1,49 → 1,26 | +21% | 0,13 |
> | 2877 | BB explosão + IFR + Quinta + Bollinger + Onda ⚠️ | **+211% · −35,7%** | +45% · −7,2% | +29% | −6,5% | 2,5 | 1,01 → 1,67 | +23% | 0,09 |
> | 2878 | Donchian + Pôr do sol + Rompe 200 + Bollinger + Onda | **+214% · −29,3%** | +44% · −5,5% | +27% | −5,9% | 2,3 | 1,09 → 1,58 | +24% | 0,07 |
> | 2879 | VWAP + BB explosão + Pullback + Bollinger + Tendência | **+200% · −58,1%** | +45% · −12,8% | +30% | −7,5% | 2,2 | 1,52 → 1,22 | +14% | 0,26 |
> | 2880 | ADX + Donchian + BB explosão + Tendência + Onda | **+251% · −72,9%** | +63% · −19,3% | +38% | −9,0% | 2,7 | 1,06 → 1,49 | +27% | 0,36 |

> [!example]- Combinações 2881 a 2910 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2881 | GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+229% · −38,1%** | +58% · −9,9% | +36% | −9,9% | 2,4 | 1,05 → 1,64 | +26% | 0,24 |
> | 2882 | ADX + BB explosão + GPS médias + Quinta + Rompe 200 ⚠️ | **+159% · −60,0%** | +45% · −14,0% | +27% | −5,7% | 2,5 | 1,24 → 1,24 | +18% | 0,15 |
> | 2883 | MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+153% · −27,7%** | +41% · −6,4% | +27% | −8,3% | 1,7 | 1,13 → 1,71 | +18% | 0,21 |
> | 2884 | ADX + Donchian + Quinta + Rompe 200 + Onda ⚠️ | **+208% · −40,0%** | +48% · −7,2% | +29% | −5,4% | 3,0 | 0,95 → 1,57 | +23% | 0,05 |
> | 2885 | ADX + VWAP + MACD + 1ª vela 80 + Tendência ⚠️ | **+243% · −54,5%** | +53% · −10,5% | +35% | −8,6% | 2,6 | 1,06 → 1,55 | +24% | 0,29 |
> | 2886 | ADX + BB explosão + IFR + Quinta + Onda ⚠️ | **+203% · −53,4%** | +49% · −10,4% | +31% | −6,0% | 3,1 | 0,85 → 1,66 | +24% | 0,10 |
> | 2887 | ADX + VWAP + GPS médias + Quinta + Bollinger ⚠️ | **+215% · −47,1%** | +48% · −9,7% | +28% | −7,0% | 2,2 | 1,22 → 1,40 | +21% | 0,18 |
> | 2888 | ADX + Donchian + GPS médias + Onda | **+233% · −50,5%** | +68% · −13,1% | +37% | −7,9% | 3,1 | 1,00 → 1,47 | +31% | 0,27 |
> | 2889 | VWAP + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+113% · −24,4%** | +30% · −4,4% | +23% | −5,4% | 1,9 | 1,35 → 1,31 | +17% | 0,04 |
> | 2890 | IFR + MACD + Rompe 200 + Tendência + Onda | **+238% · −45,0%** | +49% · −9,4% | +34% | −9,8% | 2,2 | 1,14 → 1,54 | +31% | 0,30 |
> | 2891 | ADX + BB explosão + Pullback + Bollinger + Onda | **+224% · −55,6%** | +49% · −11,1% | +30% | −6,2% | 2,8 | 0,98 → 1,62 | +24% | 0,17 |
> | 2892 | BB explosão + Pullback + Tendência + Onda | **+159% · −53,1%** | +48% · −14,3% | +33% | −8,1% | 2,5 | 1,19 → 1,32 | +23% | 0,21 |
> | 2893 | BB explosão + IFR | **+97% · −34,4%** | +54% · −17,6% | +35% | −8,9% | 2,4 | 1,16 → 1,42 | +16% | 0,40 |
> | 2894 | VWAP + IFR + MACD + Pullback + Rompe 200 | **+161% · −31,3%** | +38% · −6,3% | +28% | −8,3% | 1,8 | 1,37 → 1,32 | +20% | 0,15 |
> | 2895 | ADX + IFR + MACD + Quinta + Onda ⚠️ | **+228% · −41,0%** | +49% · −8,0% | +32% | −6,9% | 2,8 | 0,80 → 1,79 | +22% | 0,10 |
> | 2896 | VWAP + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+249% · −39,6%** | +48% · −7,8% | +32% | −10,6% | 1,8 | 1,23 → 1,50 | +26% | 0,35 |
> | 2897 | ADX + BB explosão + GPS médias + Quinta ⚠️ | **+148% · −59,0%** | +51% · −17,1% | +30% | −5,9% | 2,8 | 1,15 → 1,27 | +19% | 0,17 |
> | 2898 | Donchian + BB explosão + MACD + Pôr do sol + Bollinger | **+221% · −47,0%** | +48% · −9,3% | +28% | −7,7% | 2,0 | 1,21 → 1,46 | +20% | 0,18 |
> | 2899 | Donchian + BB explosão + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+138% · −42,7%** | +36% · −7,9% | +24% | −4,5% | 2,4 | 1,42 → 1,20 | +14% | 0,04 |
> | 2900 | IFR + MACD | **+102% · −19,0%** | +54% · −9,0% | +37% | −9,9% | 2,5 | 1,05 → 1,58 | +27% | 0,44 |
> | 2901 | Donchian + MACD + 1ª vela 80 ⚠️ | **+173% · −29,7%** | +58% · −9,1% | +35% | −11,2% | 2,0 | 1,14 → 1,58 | +28% | 0,31 |
> | 2902 | BB explosão + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+195% · −51,8%** | +54% · −14,9% | +31% | −10,2% | 1,7 | 1,30 → 1,39 | +21% | 0,31 |
> | 2903 | VWAP + Donchian + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+231% · −44,5%** | +46% · −9,5% | +28% | −10,0% | 1,5 | 1,30 → 1,45 | +20% | 0,24 |
> | 2904 | Donchian + GPS médias + IFR + MACD + Onda | **+291% · −47,0%** | +62% · −10,2% | +37% | −10,4% | 2,3 | 1,13 → 1,50 | +33% | 0,37 |
> | 2905 | ADX + BB explosão + MACD + Rompe 200 + Tendência | **+207% · −67,0%** | +50% · −16,7% | +33% | −9,0% | 2,2 | 1,20 → 1,44 | +21% | 0,26 |
> | 2906 | ADX + 1ª vela 80 + Pullback + Onda ⚠️ | **+181% · −35,1%** | +50% · −8,4% | +32% | −6,7% | 2,9 | 0,83 → 1,77 | +22% | 0,06 |
> | 2907 | VWAP + GPS médias + IFR + Pullback + Rompe 200 | **+192% · −42,5%** | +43% · −8,7% | +29% | −8,3% | 1,9 | 1,65 → 1,21 | +17% | 0,16 |
> | 2908 | ADX + Donchian + Pôr do sol + Onda | **+197% · −44,0%** | +55% · −9,3% | +32% | −5,6% | 3,5 | 0,80 → 1,65 | +21% | 0,04 |
> | 2909 | BB explosão + IFR + Tendência + Onda | **+202% · −51,3%** | +56% · −13,4% | +37% | −9,9% | 2,5 | 1,10 → 1,49 | +28% | 0,36 |
> | 2910 | VWAP + Donchian + MACD + 1ª vela 80 + Tendência ⚠️ | **+261% · −50,6%** | +54% · −11,5% | +35% | −11,1% | 2,0 | 1,25 → 1,40 | +25% | 0,38 |

> [!example]- Combinações 2911 a 2940 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2911 | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% | −16,1% | 2,2 | 1,58 → 1,20 | +22% | — |
> | 2912 | Donchian + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+167% · −47,2%** | +49% · −13,0% | +30% | −8,2% | 2,0 | 1,26 → 1,37 | +17% | 0,24 |
> | 2913 | VWAP + IFR + Pullback + Bollinger + Onda | **+223% · −31,9%** | +45% · −5,8% | +30% | −8,0% | 2,1 | 1,13 → 1,57 | +21% | 0,16 |
> | 2914 | GPS médias + MACD + Pôr do sol + Tendência + Onda | **+222% · −40,0%** | +49% · −8,3% | +33% | −7,8% | 2,6 | 1,12 → 1,41 | +26% | 0,17 |
> | 2915 | ADX + Donchian + Pôr do sol + Rompe 200 + Onda | **+210% · −42,3%** | +48% · −7,3% | +29% | −5,2% | 3,2 | 0,90 → 1,59 | +22% | 0,06 |
> | 2916 | ADX + VWAP + Pôr do sol + Rompe 200 + Tendência | **+174% · −47,9%** | +42% · −9,4% | +28% | −6,8% | 2,3 | 1,22 → 1,36 | +20% | 0,11 |
> | 2917 | VWAP + Donchian + IFR + Pullback + Onda | **+238% · −42,3%** | +51% · −8,8% | +33% | −8,7% | 2,3 | 1,17 → 1,44 | +22% | 0,20 |
> | 2918 | Donchian + GPS médias + Rompe 200 + Bollinger + Onda | **+268% · −44,8%** | +54% · −8,9% | +31% | −8,7% | 2,1 | 1,24 → 1,39 | +26% | 0,23 |
> | 2919 | GPS médias + MACD + Rompe 200 + Bollinger | **+174% · −36,0%** | +46% · −9,3% | +28% | −9,4% | 1,6 | 1,43 → 1,32 | +23% | 0,23 |
> | 2920 | ADX + GPS médias | **+125% · −41,9%** | +71% · −22,5% | +38% | −8,4% | 3,0 | 1,10 → 1,33 | +30% | 0,40 |
> | 2921 | ADX + VWAP + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+204% · −40,6%** | +44% · −7,6% | +27% | −5,9% | 2,4 | 0,95 → 1,74 | +17% | 0,15 |
> | 2922 | VWAP + GPS médias + IFR + 1ª vela 80 ⚠️ | **+200% · −43,1%** | +53% · −11,8% | +34% | −12,5% | 1,7 | 1,28 → 1,44 | +25% | 0,26 |
> | 2923 | ADX + VWAP + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+169% · −38,5%** | +40% · −6,6% | +27% | −6,7% | 2,1 | 1,16 → 1,50 | +18% | 0,10 |
> | 2924 | ADX + MACD + Bollinger + Tendência + Onda | **+302% · −51,4%** | +57% · −11,1% | +35% | −9,6% | 2,4 | 0,98 → 1,72 | +26% | 0,31 |
> | 2925 | ADX + GPS médias + MACD + Tendência + Onda | **+269% · −58,7%** | +61% · −12,1% | +38% | −9,6% | 2,6 | 1,06 → 1,52 | +31% | 0,30 |
> | 2926 | Donchian + GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+248% · −43,8%** | +53% · −8,8% | +32% | −8,4% | 2,3 | 1,14 → 1,50 | +28% | 0,04 |
> | 2927 | ADX + VWAP + Donchian + GPS médias + 1ª vela 80 ⚠️ | **+263% · −56,5%** | +61% · −12,6% | +34% | −9,8% | 2,2 | 1,18 → 1,45 | +25% | 0,28 |
> | 2928 | ADX + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+135% · −36,4%** | +34% · −6,4% | +24% | −4,6% | 2,5 | 0,98 → 1,66 | +19% | 0,02 |
> | 2929 | GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+122% · −28,2%** | +37% · −6,7% | +25% | −7,1% | 1,8 | 1,36 → 1,31 | +24% | −0,02 |
> | 2930 | Donchian + MACD + Pôr do sol | **+130% · −25,9%** | +48% · −8,4% | +30% | −7,3% | 2,3 | 1,16 → 1,43 | +22% | 0,11 |
> | 2931 | VWAP + Donchian + MACD + Quinta + Tendência ⚠️ | **+210% · −49,8%** | +48% · −11,2% | +32% | −8,4% | 2,3 | 1,30 → 1,26 | +20% | 0,24 |
> | 2932 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+108% · −36,2%** | +30% · −7,2% | +22% | −4,7% | 2,0 | 1,21 → 1,47 | +18% | −0,01 |
> | 2933 | BB explosão + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+89% · −33,7%** | +27% · −6,5% | +21% | −3,1% | 2,5 | 1,75 → 1,07 | +13% | −0,02 |
> | 2934 | GPS médias + Pôr do sol + Quinta ⚠️ | **+85% · −19,7%** | +36% · −6,1% | +23% | −4,4% | 2,4 | 1,69 → 1,11 | +18% | −0,08 |
> | 2935 | VWAP + Donchian + Quinta + Rompe 200 + Tendência ⚠️ | **+186% · −55,5%** | +43% · −10,9% | +29% | −6,2% | 2,6 | 1,50 → 1,15 | +16% | 0,14 |
> | 2936 | ADX + VWAP + Quinta + Pullback + Rompe 200 ⚠️ | **+127% · −37,3%** | +34% · −6,1% | +24% | −5,0% | 2,2 | 1,30 → 1,26 | +16% | 0,04 |
> | 2937 | VWAP + Donchian + Pôr do sol + Rompe 200 + Tendência | **+188% · −52,6%** | +44% · −10,7% | +29% | −6,2% | 2,6 | 1,45 → 1,16 | +17% | 0,17 |
> | 2938 | BB explosão + GPS médias + IFR + MACD + Pôr do sol | **+198% · −50,9%** | +48% · −10,5% | +31% | −9,4% | 1,9 | 1,26 → 1,38 | +23% | 0,19 |
> | 2939 | MACD + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+213% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,6 | 1,00 → 1,63 | +22% | 0,09 |
> | 2940 | IFR + MACD + Tendência + Onda | **+224% · −41,9%** | +56% · −11,0% | +39% | −11,1% | 2,3 | 1,06 → 1,59 | +33% | 0,38 |

> [!example]- Combinações 2941 a 2970 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2941 | VWAP + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+199% · −51,5%** | +54% · −14,8% | +35% | −11,6% | 1,9 | 1,38 → 1,29 | +23% | 0,27 |
> | 2942 | ADX + GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+183% · −44,6%** | +45% · −8,8% | +28% | −4,7% | 3,3 | 0,91 → 1,53 | +22% | −0,00 |
> | 2943 | MACD + Pôr do sol + Bollinger + Tendência + Onda | **+232% · −39,6%** | +46% · −7,8% | +31% | −7,8% | 2,3 | 1,04 → 1,63 | +24% | 0,19 |
> | 2944 | ADX + VWAP + IFR + Pullback + Onda | **+219% · −43,0%** | +49% · −7,7% | +32% | −7,0% | 2,8 | 0,97 → 1,59 | +19% | 0,14 |
> | 2945 | BB explosão + MACD + Pôr do sol + Tendência | **+144% · −52,0%** | +44% · −14,0% | +31% | −7,8% | 2,3 | 1,23 → 1,32 | +21% | 0,19 |
> | 2946 | GPS médias + MACD + Pullback + Rompe 200 | **+143% · −31,4%** | +41% · −7,2% | +28% | −7,6% | 2,0 | 1,65 → 1,18 | +20% | 0,08 |
> | 2947 | BB explosão + Pôr do sol + Pullback | **+71% · −31,5%** | +32% · −10,0% | +23% | −3,7% | 2,8 | 1,52 → 1,09 | +12% | −0,14 |
> | 2948 | GPS médias + IFR + Pôr do sol + Onda | **+184% · −32,0%** | +50% · −8,1% | +32% | −7,8% | 2,5 | 1,08 → 1,53 | +27% | 0,08 |
> | 2949 | VWAP + GPS médias + IFR + Tendência + Onda | **+248% · −50,9%** | +56% · −10,4% | +36% | −9,7% | 2,4 | 1,18 → 1,36 | +29% | 0,32 |
> | 2950 | VWAP + Pullback + Bollinger + Tendência + Onda | **+219% · −38,1%** | +45% · −7,2% | +31% | −8,2% | 2,2 | 1,21 → 1,38 | +25% | 0,22 |
> | 2951 | VWAP + BB explosão + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+225% · −54,4%** | +49% · −11,9% | +31% | −9,8% | 1,9 | 1,26 → 1,40 | +19% | 0,33 |
> | 2952 | VWAP + GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+202% · −44,6%** | +43% · −9,6% | +27% | −10,5% | 1,3 | 1,34 → 1,40 | +22% | 0,12 |
> | 2953 | BB explosão + MACD + Pôr do sol + Rompe 200 + Tendência | **+156% · −51,7%** | +39% · −10,7% | +28% | −7,2% | 2,1 | 1,31 → 1,28 | +19% | 0,15 |
> | 2954 | VWAP + IFR + Pullback + Rompe 200 | **+122% · −29,8%** | +37% · −7,1% | +27% | −7,0% | 2,0 | 1,57 → 1,21 | +16% | 0,11 |
> | 2955 | ADX + Donchian + GPS médias + Rompe 200 + Onda | **+245% · −52,2%** | +58% · −10,7% | +33% | −7,5% | 2,7 | 1,07 → 1,44 | +29% | 0,23 |
> | 2956 | Pôr do sol + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+165% · −25,2%** | +36% · −3,7% | +25% | −4,7% | 2,6 | 0,77 → 1,94 | +14% | 0,01 |
> | 2957 | GPS médias + Rompe 200 + Tendência + Onda | **+181% · −41,2%** | +51% · −10,1% | +33% | −8,6% | 2,4 | 1,23 → 1,27 | +27% | 0,25 |
> | 2958 | Donchian + BB explosão + IFR + Pôr do sol + Onda | **+221% · −44,9%** | +51% · −8,9% | +32% | −7,1% | 2,7 | 1,02 → 1,53 | +26% | 0,17 |
> | 2959 | BB explosão + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+153% · −53,1%** | +39% · −11,2% | +28% | −7,1% | 2,1 | 1,37 → 1,25 | +18% | 0,14 |
> | 2960 | Donchian + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+202% · −58,0%** | +61% · −15,4% | +35% | −11,2% | 1,9 | 1,32 → 1,29 | +20% | 0,36 |
> | 2961 | BB explosão + GPS médias + Tendência | **+149% · −59,5%** | +61% · −23,3% | +37% | −8,6% | 2,8 | 1,46 → 1,11 | +16% | 0,50 |
> | 2962 | BB explosão + IFR + Pôr do sol + Bollinger + Onda | **+214% · −36,0%** | +45% · −7,2% | +29% | −6,4% | 2,5 | 0,95 → 1,70 | +22% | 0,11 |
> | 2963 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+171% · −44,3%** | +40% · −9,5% | +27% | −9,3% | 1,5 | 1,47 → 1,30 | +21% | 0,03 |
> | 2964 | ADX + VWAP + 1ª vela 80 + Pullback ⚠️ | **+156% · −40,2%** | +45% · −7,8% | +30% | −7,2% | 2,4 | 1,07 → 1,56 | +16% | 0,09 |
> | 2965 | VWAP + MACD + Quinta + Pullback + Bollinger ⚠️ | **+146% · −30,2%** | +34% · −5,4% | +24% | −8,2% | 1,4 | 1,41 → 1,34 | +18% | 0,09 |
> | 2966 | GPS médias + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+193% · −41,3%** | +43% · −8,6% | +29% | −8,1% | 2,0 | 1,22 → 1,43 | +25% | 0,12 |
> | 2967 | ADX + VWAP + GPS médias + Pullback | **+168% · −49,6%** | +51% · −13,0% | +31% | −8,1% | 2,2 | 1,31 → 1,25 | +20% | 0,16 |
> | 2968 | VWAP + GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+168% · −46,0%** | +39% · −10,0% | +27% | −9,1% | 1,5 | 1,52 → 1,28 | +20% | −0,02 |
> | 2969 | BB explosão + Pôr do sol + Bollinger + Tendência + Onda | **+211% · −48,2%** | +46% · −9,2% | +30% | −6,8% | 2,5 | 1,08 → 1,50 | +23% | 0,15 |
> | 2970 | ADX + VWAP + Donchian + GPS médias + Pôr do sol | **+223% · −55,9%** | +54% · −12,2% | +31% | −7,8% | 2,3 | 1,20 → 1,33 | +22% | 0,14 |

> [!example]- Combinações 2971 a 3000 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2971 | ADX + BB explosão + IFR + Pôr do sol + Onda | **+206% · −52,5%** | +49% · −9,9% | +31% | −5,9% | 3,1 | 0,80 → 1,69 | +23% | 0,11 |
> | 2972 | Donchian + GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+204% · −39,2%** | +47% · −8,1% | +29% | −6,6% | 2,4 | 1,16 → 1,38 | +25% | −0,01 |
> | 2973 | VWAP + Donchian + MACD + 1ª vela 80 + Pullback ⚠️ | **+221% · −43,6%** | +47% · −9,1% | +31% | −11,4% | 1,6 | 1,30 → 1,41 | +21% | 0,19 |
> | 2974 | ADX + IFR + MACD + Pôr do sol + Onda | **+230% · −41,0%** | +49% · −8,0% | +32% | −6,9% | 2,8 | 0,76 → 1,81 | +21% | 0,13 |
> | 2975 | Rompe 200 + Bollinger + Tendência + Onda | **+184% · −35,9%** | +47% · −8,8% | +31% | −8,5% | 2,1 | 1,16 → 1,50 | +25% | 0,21 |
> | 2976 | VWAP + Donchian + BB explosão + Bollinger + Tendência | **+239% · −67,2%** | +55% · −16,1% | +33% | −8,9% | 2,2 | 1,34 → 1,24 | +15% | 0,43 |
> | 2977 | IFR + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+166% · −27,7%** | +38% · −5,4% | +28% | −5,5% | 2,8 | 0,85 → 1,73 | +22% | 0,04 |
> | 2978 | VWAP + Donchian + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+224% · −67,5%** | +54% · −15,3% | +34% | −10,3% | 2,1 | 1,27 → 1,31 | +18% | 0,37 |
> | 2979 | VWAP + IFR + Pôr do sol + Quinta ⚠️ | **+102% · −20,7%** | +33% · −4,7% | +24% | −6,0% | 1,9 | 1,23 → 1,41 | +15% | −0,01 |
> | 2980 | BB explosão + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+196% · −46,1%** | +45% · −8,5% | +31% | −6,6% | 2,8 | 0,99 → 1,54 | +22% | 0,12 |
> | 2981 | ADX + BB explosão + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+197% · −58,9%** | +51% · −13,7% | +30% | −7,4% | 2,4 | 1,14 → 1,42 | +22% | 0,24 |
> | 2982 | ADX + GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+222% · −53,1%** | +51% · −11,4% | +32% | −6,4% | 2,9 | 0,90 → 1,63 | +21% | 0,05 |
> | 2983 | ADX + VWAP + Pôr do sol + Tendência | **+162% · −50,4%** | +48% · −12,5% | +31% | −7,4% | 2,5 | 1,13 → 1,41 | +19% | 0,13 |
> | 2984 | ADX + VWAP + Donchian + BB explosão + IFR | **+228% · −67,5%** | +59% · −16,3% | +34% | −8,4% | 2,6 | 1,10 → 1,44 | +19% | 0,37 |
> | 2985 | GPS médias + Tendência + Onda | **+169% · −39,0%** | +62% · −13,0% | +39% | −9,9% | 2,6 | 1,15 → 1,31 | +24% | 0,30 |
> | 2986 | BB explosão + GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+165% · −45,5%** | +40% · −9,1% | +25% | −6,1% | 1,9 | 1,48 → 1,24 | +17% | 0,05 |
> | 2987 | ADX + BB explosão + MACD + Tendência | **+195% · −67,9%** | +58% · −21,4% | +36% | −10,1% | 2,3 | 1,12 → 1,47 | +24% | 0,38 |
> | 2988 | Donchian + IFR + MACD + Rompe 200 + Onda | **+248% · −39,7%** | +51% · −8,1% | +33% | −8,0% | 2,5 | 1,04 → 1,55 | +28% | 0,31 |
> | 2989 | ADX + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+275% · −49,9%** | +56% · −10,3% | +37% | −9,4% | 2,6 | 0,90 → 1,72 | +24% | 0,25 |
> | 2990 | ADX + GPS médias + MACD + Rompe 200 | **+175% · −44,9%** | +51% · −11,6% | +31% | −7,4% | 2,5 | 1,13 → 1,41 | +27% | 0,19 |
> | 2991 | IFR + MACD + Rompe 200 + Bollinger + Onda | **+230% · −36,8%** | +45% · −7,1% | +30% | −7,2% | 2,4 | 0,96 → 1,71 | +23% | 0,24 |
> | 2992 | BB explosão + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+188% · −39,2%** | +41% · −7,9% | +27% | −8,2% | 1,7 | 1,13 → 1,65 | +18% | 0,10 |
> | 2993 | ADX + BB explosão + Bollinger + Tendência + Onda | **+266% · −66,2%** | +58% · −15,5% | +34% | −8,6% | 2,5 | 1,01 → 1,60 | +26% | 0,31 |
> | 2994 | Donchian + BB explosão + GPS médias + MACD + Pullback | **+217% · −61,3%** | +54% · −14,5% | +33% | −9,6% | 2,1 | 1,46 → 1,23 | +18% | 0,26 |
> | 2995 | Donchian + BB explosão + Pullback + Rompe 200 | **+146% · −52,2%** | +44% · −13,1% | +28% | −6,1% | 2,5 | 1,59 → 1,12 | +11% | 0,20 |
> | 2996 | GPS médias + Quinta + Pullback + Onda ⚠️ | **+138% · −28,1%** | +41% · −6,6% | +28% | −6,8% | 2,2 | 1,25 → 1,28 | +21% | −0,05 |
> | 2997 | IFR + 1ª vela 80 + Onda ⚠️ | **+156% · −23,2%** | +53% · −7,3% | +36% | −8,3% | 2,8 | 0,76 → 1,83 | +21% | 0,18 |
> | 2998 | Donchian + GPS médias + Bollinger + Onda | **+253% · −44,6%** | +63% · −11,1% | +34% | −9,5% | 2,3 | 1,16 → 1,44 | +31% | 0,26 |
> | 2999 | BB explosão + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+145% · −35,3%** | +41% · −8,6% | +26% | −7,4% | 1,7 | 1,19 → 1,54 | +18% | 0,19 |
> | 3000 | VWAP + Donchian + BB explosão + Pullback + Tendência | **+202% · −72,8%** | +51% · −16,8% | +33% | −7,9% | 2,5 | 1,47 → 1,15 | +13% | 0,32 |

> [!example]- Combinações 3001 a 3030 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3001 | Donchian + BB explosão + 1ª vela 80 + Pullback + Onda ⚠️ | **+224% · −47,8%** | +50% · −10,0% | +32% | −8,3% | 2,3 | 1,11 → 1,51 | +25% | 0,15 |
> | 3002 | ADX + VWAP + Pôr do sol + Quinta + Bollinger ⚠️ | **+160% · −35,8%** | +38% · −6,1% | +24% | −4,3% | 2,6 | 0,98 → 1,60 | +13% | 0,11 |
> | 3003 | IFR + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+213% · −30,5%** | +44% · −5,4% | +31% | −7,5% | 2,5 | 0,86 → 1,80 | +21% | 0,07 |
> | 3004 | VWAP + BB explosão + IFR + Rompe 200 + Tendência | **+183% · −58,6%** | +45% · −13,6% | +31% | −8,0% | 2,3 | 1,34 → 1,23 | +15% | 0,32 |
> | 3005 | ADX + Donchian + BB explosão + GPS médias + MACD | **+226% · −71,0%** | +62% · −18,0% | +35% | −9,2% | 2,4 | 1,16 → 1,37 | +23% | 0,40 |
> | 3006 | MACD + Tendência | **+106% · −30,3%** | +56% · −15,6% | +40% | −13,4% | 2,0 | 1,28 → 1,31 | +29% | 0,55 |
> | 3007 | VWAP + Donchian + MACD + Pôr do sol + Tendência | **+212% · −49,5%** | +48% · −11,2% | +32% | −8,6% | 2,2 | 1,26 → 1,27 | +22% | 0,28 |
> | 3008 | ADX + BB explosão + 1ª vela 80 + Tendência + Onda ⚠️ | **+242% · −63,7%** | +57% · −14,8% | +36% | −8,5% | 2,7 | 0,94 → 1,62 | +24% | 0,24 |
> | 3009 | ADX + BB explosão + GPS médias + Tendência + Onda | **+220% · −72,0%** | +60% · −18,3% | +37% | −8,7% | 2,7 | 1,07 → 1,41 | +28% | 0,34 |
> | 3010 | ADX + Donchian + BB explosão + MACD + Rompe 200 | **+207% · −63,8%** | +52% · −15,2% | +31% | −6,9% | 2,7 | 1,07 → 1,43 | +21% | 0,27 |
> | 3011 | IFR + Quinta + Onda ⚠️ | **+113% · −22,0%** | +43% · −6,7% | +30% | −5,8% | 3,0 | 0,82 → 1,70 | +24% | −0,09 |
> | 3012 | ADX + Donchian + MACD + 1ª vela 80 + Onda ⚠️ | **+282% · −45,6%** | +59% · −8,3% | +36% | −7,9% | 2,9 | 0,82 → 1,73 | +25% | 0,24 |
> | 3013 | ADX + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+200% · −43,5%** | +45% · −8,7% | +31% | −7,6% | 2,3 | 1,06 → 1,57 | +26% | 0,07 |
> | 3014 | Donchian + BB explosão + MACD + 1ª vela 80 + Quinta ⚠️ | **+205% · −46,4%** | +47% · −9,5% | +30% | −8,7% | 2,0 | 1,18 → 1,49 | +22% | 0,12 |
> | 3015 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+251% · −43,2%** | +53% · −8,9% | +32% | −8,3% | 2,3 | 1,10 → 1,52 | +28% | 0,11 |
> | 3016 | VWAP + GPS médias + Bollinger + Tendência | **+214% · −44,7%** | +56% · −11,5% | +33% | −9,8% | 2,1 | 1,50 → 1,21 | +20% | 0,36 |
> | 3017 | BB explosão + IFR + MACD + 1ª vela 80 ⚠️ | **+187% · −38,1%** | +50% · −10,0% | +34% | −10,4% | 2,0 | 1,08 → 1,64 | +25% | 0,27 |
> | 3018 | ADX + VWAP + MACD + Quinta + Pullback ⚠️ | **+155% · −42,1%** | +38% · −6,7% | +27% | −6,0% | 2,4 | 1,13 → 1,44 | +16% | 0,06 |
> | 3019 | ADX + BB explosão + 1ª vela 80 + Pullback + Onda ⚠️ | **+204% · −52,4%** | +49% · −10,2% | +31% | −6,4% | 2,9 | 0,89 → 1,64 | +22% | 0,10 |
> | 3020 | ADX + VWAP + BB explosão + IFR + Bollinger | **+236% · −59,9%** | +53% · −12,7% | +31% | −7,5% | 2,4 | 1,05 → 1,55 | +21% | 0,35 |
> | 3021 | ADX + VWAP + Donchian + BB explosão + Pullback | **+196% · −68,6%** | +52% · −16,7% | +31% | −7,7% | 2,3 | 1,21 → 1,29 | +16% | 0,25 |
> | 3022 | Donchian + BB explosão + GPS médias + Pullback | **+184% · −58,5%** | +57% · −17,2% | +33% | −8,2% | 2,4 | 1,58 → 1,12 | +14% | 0,28 |
> | 3023 | ADX + VWAP + BB explosão + GPS médias + Tendência | **+194% · −75,3%** | +57% · −20,4% | +34% | −8,8% | 2,4 | 1,22 → 1,24 | +19% | 0,39 |
> | 3024 | Pôr do sol + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+139% · −30,6%** | +34% · −5,3% | +26% | −5,8% | 2,3 | 1,16 → 1,41 | +24% | 0,04 |
> | 3025 | VWAP + GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+170% · −43,6%** | +41% · −9,0% | +28% | −6,3% | 2,4 | 1,52 → 1,15 | +19% | 0,05 |
> | 3026 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+213% · −58,1%** | +53% · −13,5% | +31% | −9,6% | 1,9 | 1,37 → 1,27 | +18% | 0,30 |
> | 3027 | ADX + BB explosão + GPS médias + Pôr do sol + Rompe 200 | **+161% · −59,2%** | +45% · −13,6% | +27% | −5,7% | 2,5 | 1,18 → 1,27 | +19% | 0,11 |
> | 3028 | BB explosão + GPS médias + Pullback + Rompe 200 + Bollinger | **+188% · −49,0%** | +44% · −10,1% | +26% | −6,7% | 2,0 | 1,71 → 1,15 | +14% | 0,18 |
> | 3029 | VWAP + IFR + Bollinger | **+139% · −26,9%** | +49% · −8,8% | +30% | −10,3% | 1,7 | 1,22 → 1,49 | +18% | 0,30 |
> | 3030 | VWAP + Donchian + BB explosão + IFR + Bollinger | **+249% · −52,7%** | +54% · −11,1% | +32% | −10,2% | 1,8 | 1,26 → 1,38 | +17% | 0,38 |

> [!example]- Combinações 3031 a 3060 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3031 | IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+169% · −26,2%** | +45% · −5,7% | +31% | −7,2% | 2,5 | 0,88 → 1,75 | +22% | 0,20 |
> | 3032 | ADX + Donchian + MACD + Quinta + Onda ⚠️ | **+235% · −46,0%** | +52% · −7,5% | +32% | −6,5% | 3,0 | 0,85 → 1,64 | +22% | 0,10 |
> | 3033 | VWAP + Donchian + Pullback + Rompe 200 + Bollinger | **+205% · −41,9%** | +43% · −8,7% | +26% | −7,9% | 1,7 | 1,64 → 1,21 | +15% | 0,17 |
> | 3034 | ADX + VWAP + GPS médias + MACD + Pullback | **+206% · −53,0%** | +49% · −11,0% | +31% | −8,8% | 2,1 | 1,23 → 1,34 | +23% | 0,18 |
> | 3035 | BB explosão + IFR + MACD + Quinta ⚠️ | **+142% · −37,5%** | +42% · −8,9% | +29% | −7,9% | 2,1 | 1,15 → 1,49 | +21% | 0,13 |
> | 3036 | BB explosão + GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+226% · −58,1%** | +55% · −12,6% | +35% | −9,1% | 2,5 | 1,13 → 1,40 | +26% | 0,29 |
> | 3037 | ADX + MACD + Quinta + Pullback + Onda ⚠️ | **+182% · −36,9%** | +42% · −6,8% | +29% | −6,2% | 2,6 | 0,91 → 1,68 | +21% | 0,01 |
> | 3038 | ADX + BB explosão + MACD + 1ª vela 80 + Quinta ⚠️ | **+187% · −52,6%** | +45% · −10,3% | +29% | −6,3% | 2,6 | 0,90 → 1,66 | +20% | 0,08 |
> | 3039 | VWAP + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+144% · −27,7%** | +40% · −6,5% | +28% | −8,5% | 1,8 | 1,10 → 1,65 | +18% | 0,10 |
> | 3040 | VWAP + GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+212% · −55,6%** | +48% · −13,2% | +31% | −9,8% | 1,9 | 1,43 → 1,25 | +21% | 0,24 |
> | 3041 | MACD + Pôr do sol + Bollinger | **+99% · −16,5%** | +38% · −4,6% | +25% | −6,0% | 2,0 | 1,02 → 1,73 | +19% | 0,09 |
> | 3042 | VWAP + BB explosão + GPS médias + IFR + Tendência | **+213% · −67,6%** | +55% · −17,1% | +35% | −10,4% | 2,2 | 1,38 → 1,23 | +18% | 0,41 |
> | 3043 | Donchian + BB explosão + Quinta + Pullback + Onda ⚠️ | **+177% · −47,3%** | +44% · −9,4% | +29% | −6,6% | 2,4 | 1,17 → 1,35 | +21% | 0,06 |
> | 3044 | Donchian + BB explosão + GPS médias + MACD + Bollinger | **+251% · −59,1%** | +58% · −12,8% | +33% | −11,0% | 1,8 | 1,31 → 1,30 | +20% | 0,41 |
> | 3045 | GPS médias + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+233% · −40,4%** | +47% · −7,8% | +29% | −7,6% | 2,1 | 1,06 → 1,63 | +18% | 0,05 |
> | 3046 | GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+164% · −34,9%** | +45% · −8,8% | +29% | −9,8% | 1,7 | 1,21 → 1,50 | +22% | 0,10 |
> | 3047 | ADX + BB explosão + GPS médias + Pôr do sol | **+150% · −57,7%** | +51% · −16,6% | +30% | −5,9% | 2,8 | 1,10 → 1,30 | +21% | 0,13 |
> | 3048 | MACD + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+215% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,5 | 0,95 → 1,64 | +22% | 0,18 |
> | 3049 | VWAP + GPS médias + Pullback + Tendência | **+178% · −49,2%** | +50% · −13,9% | +33% | −8,3% | 2,4 | 1,65 → 1,10 | +17% | 0,17 |
> | 3050 | BB explosão + GPS médias + Quinta + Tendência + Onda ⚠️ | **+185% · −59,3%** | +49% · −13,4% | +32% | −7,6% | 2,5 | 1,18 → 1,27 | +24% | 0,14 |
> | 3051 | VWAP + MACD + Pôr do sol + Bollinger + Tendência | **+197% · −37,5%** | +42% · −7,2% | +29% | −8,1% | 2,0 | 1,24 → 1,36 | +22% | 0,25 |
> | 3052 | ADX + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+270% · −45,2%** | +52% · −8,9% | +32% | −7,1% | 2,8 | 0,67 → 1,87 | +17% | 0,25 |
> | 3053 | ADX + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+188% · −36,1%** | +41% · −6,6% | +26% | −4,9% | 2,7 | 0,72 → 1,87 | +18% | 0,04 |
> | 3054 | ADX + VWAP + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+263% · −54,8%** | +55% · −12,4% | +31% | −9,1% | 2,0 | 1,12 → 1,55 | +24% | 0,32 |
> | 3055 | BB explosão + IFR + MACD + Pôr do sol + Rompe 200 | **+156% · −38,0%** | +38% · −6,8% | +27% | −7,0% | 2,0 | 1,18 → 1,46 | +20% | 0,13 |
> | 3056 | ADX + Donchian + BB explosão + Bollinger + Onda | **+265% · −63,6%** | +60% · −14,0% | +33% | −7,0% | 2,9 | 0,90 → 1,59 | +26% | 0,29 |
> | 3057 | ADX + MACD + Rompe 200 + Bollinger | **+177% · −41,3%** | +47% · −10,3% | +28% | −7,1% | 2,2 | 0,98 → 1,71 | +22% | 0,19 |
> | 3058 | ADX + VWAP + GPS médias + Pôr do sol + Bollinger | **+218% · −47,9%** | +49% · −10,0% | +28% | −7,0% | 2,2 | 1,16 → 1,43 | +20% | 0,18 |
> | 3059 | ADX + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+236% · −42,8%** | +48% · −8,1% | +29% | −6,1% | 2,7 | 0,74 → 1,84 | +17% | 0,18 |
> | 3060 | VWAP + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+132% · −43,0%** | +34% · −9,1% | +26% | −5,0% | 2,6 | 1,71 → 1,05 | +14% | 0,06 |

> [!example]- Combinações 3061 a 3090 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3061 | ADX + Rompe 200 + Bollinger | **+132% · −35,0%** | +49% · −11,4% | +27% | −6,2% | 2,3 | 1,00 → 1,65 | +21% | 0,17 |
> | 3062 | Donchian + IFR + MACD + Onda | **+234% · −37,2%** | +59% · −9,5% | +37% | −9,3% | 2,6 | 0,96 → 1,60 | +28% | 0,38 |
> | 3063 | ADX + BB explosão + GPS médias + MACD + Bollinger | **+239% · −63,1%** | +57% · −14,1% | +32% | −8,4% | 2,3 | 1,12 → 1,46 | +24% | 0,37 |
> | 3064 | VWAP + IFR + Quinta + Tendência + Onda ⚠️ | **+203% · −40,2%** | +45% · −7,9% | +32% | −7,9% | 2,5 | 1,09 → 1,45 | +25% | 0,11 |
> | 3065 | VWAP + Donchian + GPS médias + IFR | **+223% · −47,9%** | +62% · −12,5% | +36% | −12,3% | 1,9 | 1,38 → 1,26 | +20% | 0,37 |
> | 3066 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+225% · −53,6%** | +51% · −11,6% | +31% | −6,4% | 2,9 | 0,85 → 1,65 | +20% | 0,10 |
> | 3067 | Bollinger + Tendência + Onda | **+170% · −32,2%** | +56% · −10,6% | +35% | −9,9% | 2,3 | 1,05 → 1,58 | +26% | 0,27 |
> | 3068 | VWAP + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+250% · −40,9%** | +47% · −8,5% | +31% | −11,0% | 1,7 | 1,11 → 1,67 | +22% | 0,32 |
> | 3069 | ADX + MACD + Pôr do sol + Quinta ⚠️ | **+122% · −33,6%** | +38% · −7,6% | +26% | −5,0% | 2,6 | 0,83 → 1,74 | +16% | 0,04 |
> | 3070 | GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+180% · −35,8%** | +49% · −8,5% | +32% | −8,9% | 2,2 | 1,14 → 1,48 | +25% | 0,08 |
> | 3071 | GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+122% · −34,5%** | +46% · −11,6% | +29% | −9,1% | 1,8 | 1,37 → 1,28 | +23% | 0,22 |
> | 3072 | Donchian + MACD + Pullback + Onda | **+189% · −35,8%** | +50% · −9,1% | +33% | −8,0% | 2,5 | 1,07 → 1,48 | +26% | 0,19 |
> | 3073 | 1ª vela 80 + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+131% · −30,7%** | +33% · −5,7% | +25% | −5,3% | 2,3 | 1,07 → 1,57 | +20% | −0,01 |
> | 3074 | BB explosão + GPS médias + IFR | **+149% · −49,8%** | +59% · −18,2% | +35% | −11,1% | 2,0 | 1,35 → 1,25 | +18% | 0,48 |
> | 3075 | ADX + GPS médias + Bollinger + Onda | **+229% · −48,9%** | +61% · −12,9% | +33% | −7,1% | 2,9 | 0,91 → 1,58 | +24% | 0,27 |
> | 3076 | IFR + MACD + Bollinger + Onda | **+215% · −33,3%** | +51% · −8,0% | +33% | −8,2% | 2,5 | 0,86 → 1,78 | +24% | 0,29 |
> | 3077 | BB explosão + IFR + MACD + Pullback + Onda | **+201% · −43,5%** | +46% · −8,4% | +32% | −7,9% | 2,4 | 1,05 → 1,54 | +28% | 0,17 |
> | 3078 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+97% · −28,8%** | +32% · −6,6% | +23% | −4,8% | 2,2 | 1,09 → 1,55 | +16% | −0,07 |
> | 3079 | VWAP + Pôr do sol + Pullback + Rompe 200 + Tendência | **+134% · −42,4%** | +34% · −8,9% | +26% | −5,0% | 2,6 | 1,65 → 1,07 | +15% | 0,07 |
> | 3080 | VWAP + Bollinger + Tendência | **+141% · −31,9%** | +50% · −9,8% | +32% | −8,7% | 2,2 | 1,35 → 1,23 | +19% | 0,38 |
> | 3081 | VWAP + Donchian + IFR + MACD + 1ª vela 80 ⚠️ | **+268% · −43,9%** | +54% · −9,3% | +34% | −11,6% | 1,8 | 1,16 → 1,53 | +23% | 0,34 |
> | 3082 | VWAP + MACD + Pôr do sol + Pullback + Bollinger | **+148% · −30,6%** | +35% · −5,5% | +24% | −8,4% | 1,4 | 1,32 → 1,37 | +17% | 0,10 |
> | 3083 | Donchian + MACD + Pullback + Rompe 200 + Onda | **+202% · −38,4%** | +44% · −7,8% | +30% | −7,5% | 2,2 | 1,15 → 1,42 | +26% | 0,17 |
> | 3084 | GPS médias + 1ª vela 80 ⚠️ | **+111% · −31,7%** | +59% · −16,3% | +35% | −12,2% | 1,8 | 1,28 → 1,33 | +24% | 0,23 |
> | 3085 | MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+101% · −19,3%** | +32% · −3,8% | +24% | −5,7% | 2,1 | 0,98 → 1,74 | +16% | 0,01 |
> | 3086 | ADX + BB explosão + Rompe 200 + Bollinger | **+161% · −51,2%** | +47% · −13,4% | +27% | −5,5% | 2,6 | 1,03 → 1,49 | +18% | 0,23 |
> | 3087 | VWAP + GPS médias + IFR + MACD + Bollinger | **+257% · −49,0%** | +52% · −11,1% | +32% | −12,1% | 1,6 | 1,28 → 1,40 | +25% | 0,36 |
> | 3088 | VWAP + GPS médias + Pôr do sol + Pullback + Bollinger | **+183% · −36,8%** | +40% · −7,2% | +25% | −7,8% | 1,6 | 1,66 → 1,21 | +18% | 0,06 |
> | 3089 | VWAP + GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+181% · −36,9%** | +40% · −7,2% | +25% | −7,6% | 1,7 | 1,73 → 1,18 | +17% | 0,06 |
> | 3090 | ADX + 1ª vela 80 + Bollinger + Onda ⚠️ | **+219% · −42,6%** | +55% · −10,6% | +32% | −7,0% | 2,8 | 0,62 → 1,90 | +16% | 0,23 |

> [!example]- Combinações 3091 a 3120 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3091 | Donchian + MACD + Quinta + Bollinger + Onda ⚠️ | **+244% · −33,5%** | +48% · −6,4% | +30% | −7,0% | 2,4 | 0,99 → 1,63 | +25% | 0,12 |
> | 3092 | MACD + Pullback + Rompe 200 | **+74% · −17,8%** | +32% · −5,6% | +25% | −5,6% | 2,2 | 1,50 → 1,18 | +19% | 0,01 |
> | 3093 | BB explosão + MACD + Pôr do sol + Pullback + Rompe 200 | **+116% · −38,0%** | +32% · −6,9% | +24% | −5,6% | 1,9 | 1,39 → 1,25 | +16% | −0,00 |
> | 3094 | VWAP + IFR + MACD + Quinta + Bollinger ⚠️ | **+195% · −35,1%** | +41% · −6,8% | +28% | −8,9% | 1,7 | 1,18 → 1,53 | +19% | 0,18 |
> | 3095 | Donchian + BB explosão + 1ª vela 80 ⚠️ | **+155% · −47,6%** | +58% · −14,8% | +34% | −9,9% | 2,1 | 1,17 → 1,42 | +19% | 0,30 |
> | 3096 | GPS médias + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+133% · −30,5%** | +34% · −5,7% | +24% | −6,3% | 1,8 | 1,45 → 1,25 | +22% | 0,02 |
> | 3097 | VWAP + GPS médias + MACD + Bollinger + Tendência | **+254% · −48,5%** | +53% · −9,4% | +33% | −11,1% | 1,8 | 1,37 → 1,28 | +23% | 0,39 |
> | 3098 | ADX + Donchian + BB explosão | **+162% · −62,3%** | +66% · −24,5% | +36% | −8,2% | 2,8 | 1,04 → 1,40 | +19% | 0,41 |
> | 3099 | Donchian + BB explosão + MACD + Rompe 200 + Bollinger | **+217% · −49,2%** | +48% · −9,7% | +29% | −8,6% | 1,8 | 1,25 → 1,36 | +18% | 0,30 |
> | 3100 | VWAP + 1ª vela 80 + Quinta + Pullback ⚠️ | **+97% · −32,9%** | +32% · −8,3% | +24% | −8,4% | 1,4 | 1,33 → 1,33 | +17% | −0,07 |
> | 3101 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+171% · −38,0%** | +40% · −7,3% | +27% | −4,8% | 3,1 | 0,61 → 1,84 | +16% | −0,00 |
> | 3102 | ADX + BB explosão + GPS médias + IFR + Onda | **+225% · −62,2%** | +60% · −15,1% | +35% | −8,2% | 2,8 | 0,98 → 1,51 | +29% | 0,32 |
> | 3103 | BB explosão + MACD + Pullback + Tendência + Onda | **+195% · −56,7%** | +46% · −12,2% | +33% | −8,6% | 2,3 | 1,14 → 1,39 | +26% | 0,22 |
> | 3104 | VWAP + Donchian + IFR + Rompe 200 | **+176% · −36,9%** | +49% · −9,6% | +31% | −9,4% | 1,9 | 1,33 → 1,26 | +17% | 0,29 |
> | 3105 | IFR + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+216% · −30,4%** | +44% · −5,8% | +31% | −7,5% | 2,5 | 0,81 → 1,82 | +20% | 0,15 |
> | 3106 | BB explosão + GPS médias + IFR + MACD + Rompe 200 | **+193% · −54,8%** | +48% · −11,9% | +31% | −10,3% | 1,8 | 1,29 → 1,30 | +20% | 0,33 |
> | 3107 | GPS médias + MACD + Quinta + Pullback + Onda ⚠️ | **+178% · −34,6%** | +41% · −6,6% | +29% | −7,5% | 2,1 | 1,18 → 1,39 | +25% | −0,00 |
> | 3108 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+207% · −39,5%** | +44% · −7,2% | +27% | −6,1% | 2,3 | 0,89 → 1,77 | +16% | 0,19 |
> | 3109 | BB explosão + Quinta + Bollinger ⚠️ | **+92% · −32,1%** | +38% · −10,2% | +23% | −5,3% | 1,9 | 1,26 → 1,31 | +14% | 0,05 |
> | 3110 | VWAP + GPS médias + MACD + Pullback + Tendência | **+215% · −52,4%** | +49% · −11,0% | +33% | −9,7% | 2,1 | 1,51 → 1,19 | +20% | 0,22 |
> | 3111 | VWAP + BB explosão + IFR + 1ª vela 80 + Bollinger ⚠️ | **+229% · −46,3%** | +48% · −10,3% | +30% | −10,4% | 1,7 | 1,16 → 1,57 | +21% | 0,29 |
> | 3112 | ADX + Donchian + BB explosão + MACD | **+196% · −65,4%** | +60% · −19,6% | +35% | −7,8% | 2,8 | 0,99 → 1,46 | +23% | 0,38 |
> | 3113 | VWAP + Pôr do sol + Quinta + Tendência ⚠️ | **+104% · −29,6%** | +34% · −6,9% | +26% | −5,0% | 2,6 | 1,37 → 1,14 | +18% | 0,04 |
> | 3114 | ADX + VWAP + Pôr do sol + Pullback + Rompe 200 | **+129% · −40,3%** | +35% · −6,7% | +24% | −5,2% | 2,2 | 1,23 → 1,28 | +15% | 0,03 |
> | 3115 | ADX + VWAP + BB explosão + Quinta + Tendência ⚠️ | **+173% · −68,5%** | +46% · −17,4% | +30% | −7,0% | 2,5 | 1,15 → 1,31 | +18% | 0,18 |
> | 3116 | ADX + GPS médias + MACD | **+162% · −42,8%** | +62% · −15,2% | +36% | −8,8% | 2,6 | 1,04 → 1,44 | +30% | 0,29 |
> | 3117 | VWAP + Donchian + 1ª vela 80 + Bollinger ⚠️ | **+216% · −38,7%** | +53% · −10,0% | +30% | −11,9% | 1,5 | 1,22 → 1,50 | +21% | 0,30 |
> | 3118 | ADX + VWAP + IFR + MACD + Quinta ⚠️ | **+197% · −41,4%** | +45% · −7,8% | +30% | −7,0% | 2,5 | 0,97 → 1,59 | +17% | 0,15 |
> | 3119 | BB explosão + Pôr do sol + Rompe 200 + Tendência | **+121% · −48,0%** | +38% · −12,5% | +27% | −6,3% | 2,3 | 1,48 → 1,17 | +14% | 0,10 |
> | 3120 | VWAP + Donchian + IFR | **+164% · −32,6%** | +59% · −11,3% | +35% | −11,4% | 2,0 | 1,24 → 1,32 | +19% | 0,35 |

> [!example]- Combinações 3121 a 3150 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3121 | ADX + VWAP + MACD + Quinta + Tendência ⚠️ | **+197% · −55,1%** | +46% · −11,2% | +31% | −8,0% | 2,3 | 1,11 → 1,43 | +21% | 0,18 |
> | 3122 | ADX + Quinta + Tendência + Onda ⚠️ | **+186% · −45,7%** | +52% · −10,4% | +34% | −8,7% | 2,4 | 0,97 → 1,62 | +26% | 0,06 |
> | 3123 | BB explosão + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+143% · −32,6%** | +35% · −6,1% | +24% | −5,9% | 1,8 | 1,15 → 1,53 | +19% | 0,06 |
> | 3124 | ADX + VWAP + BB explosão + Pullback + Bollinger | **+193% · −60,2%** | +46% · −13,0% | +28% | −7,1% | 2,1 | 1,18 → 1,38 | +17% | 0,24 |
> | 3125 | ADX + Donchian + MACD + Pôr do sol + Onda | **+237% · −45,5%** | +52% · −7,6% | +32% | −6,5% | 3,0 | 0,80 → 1,66 | +22% | 0,12 |
> | 3126 | BB explosão + GPS médias + MACD + Tendência | **+180% · −62,7%** | +56% · −18,6% | +36% | −10,2% | 2,3 | 1,34 → 1,21 | +21% | 0,44 |
> | 3127 | ADX + VWAP + IFR + MACD + 1ª vela 80 ⚠️ | **+245% · −43,9%** | +52% · −8,4% | +34% | −8,9% | 2,3 | 0,92 → 1,70 | +20% | 0,27 |
> | 3128 | GPS médias + Rompe 200 + Bollinger | **+132% · −29,8%** | +48% · −9,6% | +27% | −7,5% | 1,8 | 1,69 → 1,16 | +19% | 0,22 |
> | 3129 | ADX + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+185% · −58,7%** | +59% · −17,4% | +34% | −8,4% | 2,5 | 1,07 → 1,44 | +25% | 0,30 |
> | 3130 | Donchian + BB explosão + GPS médias + Bollinger | **+216% · −56,9%** | +62% · −15,9% | +33% | −10,0% | 2,0 | 1,41 → 1,22 | +16% | 0,42 |
> | 3131 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+169% · −39,3%** | +39% · −8,0% | +26% | −7,9% | 1,6 | 1,22 → 1,45 | +18% | 0,02 |
> | 3132 | VWAP + GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+236% · −51,9%** | +52% · −11,6% | +34% | −12,6% | 1,7 | 1,28 → 1,33 | +26% | 0,33 |
> | 3133 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+205% · −44,9%** | +44% · −9,7% | +27% | −10,7% | 1,3 | 1,28 → 1,42 | +23% | 0,17 |
> | 3134 | IFR + Quinta + Rompe 200 + Onda ⚠️ | **+125% · −23,4%** | +37% · −4,9% | +27% | −5,6% | 2,6 | 0,96 → 1,59 | +24% | 0,04 |
> | 3135 | BB explosão + Quinta + Rompe 200 + Tendência ⚠️ | **+118% · −50,3%** | +38% · −13,2% | +27% | −6,2% | 2,3 | 1,55 → 1,14 | +13% | 0,10 |
> | 3136 | ADX + BB explosão + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+190% · −51,7%** | +45% · −9,8% | +29% | −6,3% | 2,6 | 0,85 → 1,69 | +20% | 0,11 |
> | 3137 | Donchian + MACD + Rompe 200 + Tendência + Onda | **+242% · −44,0%** | +52% · −9,1% | +34% | −9,4% | 2,3 | 1,14 → 1,41 | +29% | 0,33 |
> | 3138 | ADX + VWAP + IFR + Tendência + Onda | **+258% · −55,9%** | +57% · −11,2% | +37% | −9,7% | 2,5 | 0,99 → 1,57 | +24% | 0,28 |
> | 3139 | Donchian + GPS médias | **+144% · −35,3%** | +77% · −17,9% | +39% | −11,5% | 2,3 | 1,51 → 1,14 | +20% | 0,45 |
> | 3140 | ADX + Pôr do sol + Rompe 200 + Tendência + Onda | **+202% · −43,6%** | +46% · −8,7% | +31% | −7,6% | 2,3 | 1,01 → 1,58 | +26% | 0,09 |
> | 3141 | BB explosão + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+114% · −39,8%** | +31% · −7,5% | +24% | −5,7% | 1,9 | 1,47 → 1,22 | +15% | 0,02 |
> | 3142 | GPS médias + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+186% · −32,5%** | +41% · −6,3% | +26% | −6,1% | 2,1 | 1,10 → 1,52 | +20% | −0,01 |
> | 3143 | Pullback + Rompe 200 + Bollinger + Onda | **+131% · −22,6%** | +37% · −5,2% | +25% | −5,9% | 2,1 | 1,14 → 1,46 | +23% | 0,11 |
> | 3144 | ADX + GPS médias + Rompe 200 + Bollinger + Onda | **+244% · −49,1%** | +52% · −10,0% | +30% | −6,9% | 2,5 | 1,00 → 1,54 | +24% | 0,21 |
> | 3145 | BB explosão + Quinta + Pullback ⚠️ | **+69% · −33,5%** | +31% · −10,9% | +23% | −3,9% | 2,7 | 1,64 → 1,02 | +10% | −0,07 |
> | 3146 | VWAP + BB explosão + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+180% · −46,6%** | +41% · −10,2% | +27% | −10,2% | 1,3 | 1,29 → 1,39 | +17% | 0,18 |
> | 3147 | VWAP + Donchian + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+218% · −51,1%** | +49% · −11,3% | +30% | −11,0% | 1,6 | 1,34 → 1,30 | +21% | 0,09 |
> | 3148 | Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+128% · −26,6%** | +38% · −5,8% | +28% | −6,4% | 2,4 | 1,05 → 1,50 | +24% | 0,01 |
> | 3149 | GPS médias + Pôr do sol + Pullback + Onda | **+140% · −28,9%** | +41% · −6,7% | +28% | −6,6% | 2,3 | 1,19 → 1,31 | +20% | −0,03 |
> | 3150 | VWAP + GPS médias + Rompe 200 + Bollinger + Tendência | **+227% · −48,2%** | +48% · −10,4% | +30% | −8,4% | 2,0 | 1,56 → 1,17 | +18% | 0,28 |

> [!example]- Combinações 3151 a 3180 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3151 | ADX + VWAP + Pôr do sol + Pullback | **+118% · −41,3%** | +38% · −8,7% | +26% | −5,2% | 2,5 | 1,12 → 1,35 | +12% | 0,01 |
> | 3152 | VWAP + Donchian + Tendência | **+162% · −52,4%** | +60% · −16,3% | +37% | −9,5% | 2,5 | 1,34 → 1,14 | +17% | 0,46 |
> | 3153 | BB explosão + GPS médias + Pôr do sol + Tendência + Onda | **+187% · −58,0%** | +49% · −12,9% | +32% | −7,5% | 2,5 | 1,14 → 1,28 | +25% | 0,17 |
> | 3154 | IFR + Pôr do sol + Onda | **+115% · −19,6%** | +43% · −6,3% | +30% | −5,9% | 3,0 | 0,74 → 1,73 | +23% | 0,02 |
> | 3155 | VWAP + Donchian + IFR + MACD + Quinta ⚠️ | **+215% · −38,4%** | +47% · −8,0% | +31% | −9,7% | 1,9 | 1,21 → 1,40 | +21% | 0,19 |
> | 3156 | ADX + VWAP + Pullback + Tendência + Onda | **+214% · −56,7%** | +50% · −11,0% | +33% | −8,3% | 2,5 | 1,07 → 1,44 | +23% | 0,19 |
> | 3157 | Donchian + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+196% · −36,6%** | +43% · −7,1% | +28% | −6,6% | 2,3 | 1,02 → 1,59 | +24% | 0,04 |
> | 3158 | BB explosão + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+211% · −40,3%** | +44% · −7,7% | +29% | −7,9% | 2,0 | 1,04 → 1,65 | +20% | 0,12 |
> | 3159 | GPS médias + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+235% · −41,3%** | +47% · −8,1% | +29% | −7,6% | 2,1 | 1,01 → 1,66 | +18% | 0,11 |
> | 3160 | BB explosão + GPS médias + Rompe 200 + Tendência | **+159% · −60,4%** | +51% · −18,1% | +32% | −7,3% | 2,6 | 1,52 → 1,08 | +15% | 0,35 |
> | 3161 | Donchian + BB explosão + Pôr do sol + Pullback + Onda | **+180% · −45,6%** | +44% · −8,9% | +29% | −6,5% | 2,4 | 1,12 → 1,37 | +22% | 0,07 |
> | 3162 | ADX + VWAP + Donchian + Quinta ⚠️ | **+167% · −48,0%** | +50% · −11,1% | +30% | −6,3% | 2,7 | 1,06 → 1,38 | +15% | 0,08 |
> | 3163 | BB explosão + GPS médias + MACD + Pôr do sol + Pullback | **+162% · −50,1%** | +41% · −10,4% | +28% | −7,8% | 1,9 | 1,44 → 1,22 | +19% | 0,03 |
> | 3164 | ADX + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+151% · −33,3%** | +38% · −6,4% | +26% | −5,5% | 2,4 | 1,02 → 1,54 | +21% | 0,02 |
> | 3165 | ADX + VWAP + IFR + Rompe 200 | **+158% · −38,5%** | +47% · −9,0% | +30% | −6,7% | 2,6 | 1,02 → 1,48 | +18% | 0,19 |
> | 3166 | Donchian + BB explosão + Rompe 200 + Tendência + Onda | **+208% · −61,5%** | +52% · −14,1% | +33% | −8,4% | 2,4 | 1,16 → 1,30 | +22% | 0,34 |
> | 3167 | Donchian + GPS médias + MACD | **+180% · −38,7%** | +65% · −13,1% | +37% | −12,7% | 1,9 | 1,33 → 1,25 | +25% | 0,43 |
> | 3168 | BB explosão + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+196% · −36,0%** | +44% · −7,3% | +30% | −7,3% | 2,4 | 0,91 → 1,70 | +21% | 0,03 |
> | 3169 | MACD + 1ª vela 80 + Bollinger ⚠️ | **+139% · −25,7%** | +48% · −8,2% | +30% | −10,3% | 1,7 | 0,99 → 1,79 | +16% | 0,31 |
> | 3170 | 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+64% · −22,1%** | +29% · −6,8% | +22% | −4,0% | 2,3 | 1,08 → 1,47 | +17% | −0,06 |
> | 3171 | VWAP + Donchian + GPS médias + IFR + Rompe 200 | **+235% · −49,8%** | +53% · −10,4% | +32% | −10,6% | 1,8 | 1,44 → 1,23 | +18% | 0,32 |
> | 3172 | ADX + VWAP + Donchian + 1ª vela 80 + Rompe 200 ⚠️ | **+224% · −49,5%** | +50% · −8,2% | +30% | −7,8% | 2,3 | 1,07 → 1,51 | +20% | 0,20 |
> | 3173 | GPS médias + IFR + MACD + Quinta + Onda ⚠️ | **+222% · −38,9%** | +48% · −7,9% | +32% | −8,7% | 2,2 | 1,07 → 1,53 | +27% | 0,11 |
> | 3174 | VWAP + Donchian + GPS médias + IFR + MACD | **+256% · −51,6%** | +58% · −11,8% | +35% | −12,9% | 1,7 | 1,27 → 1,31 | +23% | 0,40 |
> | 3175 | ADX + VWAP + MACD + 1ª vela 80 + Pullback ⚠️ | **+200% · −41,8%** | +45% · −7,7% | +30% | −8,3% | 2,1 | 1,05 → 1,59 | +18% | 0,13 |
> | 3176 | 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+170% · −34,7%** | +46% · −8,5% | +32% | −8,4% | 2,4 | 1,03 → 1,53 | +23% | 0,19 |
> | 3177 | 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+119% · −21,7%** | +36% · −4,8% | +27% | −5,8% | 2,4 | 0,96 → 1,65 | +20% | −0,10 |
> | 3178 | BB explosão + Quinta + Pullback + Bollinger + Onda ⚠️ | **+162% · −37,2%** | +38% · −6,5% | +25% | −6,0% | 2,1 | 1,12 → 1,47 | +22% | 0,03 |
> | 3179 | MACD + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+162% · −25,5%** | +37% · −4,3% | +28% | −6,8% | 2,2 | 0,96 → 1,69 | +20% | −0,03 |
> | 3180 | ADX + MACD + Pôr do sol + Pullback + Onda | **+184% · −36,0%** | +42% · −6,8% | +29% | −6,3% | 2,6 | 0,85 → 1,70 | +20% | 0,02 |

> [!example]- Combinações 3181 a 3210 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3181 | Donchian + BB explosão + GPS médias + IFR + Onda | **+237% · −59,7%** | +61% · −13,7% | +36% | −10,2% | 2,3 | 1,14 → 1,38 | +26% | 0,40 |
> | 3182 | Donchian + BB explosão + GPS médias + Pullback + Rompe 200 | **+194% · −60,0%** | +50% · −14,1% | +30% | −7,3% | 2,3 | 1,62 → 1,09 | +13% | 0,25 |
> | 3183 | VWAP + Donchian + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+221% · −49,8%** | +49% · −10,7% | +30% | −11,2% | 1,5 | 1,30 → 1,31 | +22% | 0,15 |
> | 3184 | VWAP + IFR + Pôr do sol + Tendência + Onda | **+205% · −40,2%** | +45% · −7,9% | +32% | −7,9% | 2,5 | 1,05 → 1,46 | +24% | 0,17 |
> | 3185 | BB explosão + IFR + MACD + Tendência + Onda | **+236% · −55,2%** | +53% · −11,5% | +36% | −10,1% | 2,3 | 1,05 → 1,50 | +30% | 0,38 |
> | 3186 | GPS médias + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+271% · −44,4%** | +55% · −9,6% | +35% | −10,6% | 2,1 | 1,01 → 1,63 | +25% | 0,28 |
> | 3187 | Donchian + BB explosão + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+208% · −44,7%** | +47% · −9,5% | +30% | −8,9% | 1,9 | 1,13 → 1,51 | +23% | 0,16 |
> | 3188 | Donchian + MACD + Tendência + Onda | **+229% · −44,5%** | +60% · −12,1% | +38% | −10,6% | 2,4 | 1,07 → 1,45 | +33% | 0,44 |
> | 3189 | VWAP + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+143% · −45,3%** | +42% · −12,5% | +30% | −9,4% | 1,8 | 1,28 → 1,27 | +20% | 0,20 |
> | 3190 | 1ª vela 80 + Tendência + Onda ⚠️ | **+157% · −29,1%** | +55% · −9,4% | +38% | −9,7% | 2,6 | 0,93 → 1,60 | +23% | 0,21 |
> | 3191 | VWAP + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+182% · −40,1%** | +41% · −7,9% | +30% | −9,3% | 1,9 | 1,19 → 1,41 | +24% | 0,13 |
> | 3192 | BB explosão + GPS médias + IFR + Rompe 200 | **+160% · −51,6%** | +50% · −14,1% | +31% | −9,2% | 2,0 | 1,42 → 1,21 | +17% | 0,37 |
> | 3193 | Donchian + BB explosão + Tendência + Onda | **+197% · −61,9%** | +60% · −18,3% | +37% | −9,4% | 2,6 | 1,09 → 1,34 | +25% | 0,44 |
> | 3194 | VWAP + Donchian + BB explosão + IFR + 1ª vela 80 ⚠️ | **+233% · −52,1%** | +54% · −11,5% | +33% | −11,2% | 1,8 | 1,18 → 1,44 | +20% | 0,33 |
> | 3195 | Donchian + BB explosão + GPS médias + Pullback + Onda | **+205% · −59,9%** | +54% · −13,9% | +33% | −9,3% | 2,1 | 1,23 → 1,24 | +22% | 0,25 |
> | 3196 | GPS médias + Pôr do sol + Pullback + Rompe 200 + Onda | **+151% · −33,5%** | +37% · −6,4% | +26% | −6,5% | 2,0 | 1,27 → 1,24 | +23% | 0,03 |
> | 3197 | Donchian + BB explosão + GPS médias + Pôr do sol + Quinta ⚠️ | **+175% · −53,5%** | +46% · −11,5% | +28% | −6,8% | 2,2 | 1,44 → 1,17 | +16% | 0,06 |
> | 3198 | ADX + IFR + Rompe 200 + Onda | **+185% · −37,5%** | +51% · −9,2% | +33% | −7,5% | 2,6 | 0,82 → 1,71 | +24% | 0,18 |
> | 3199 | MACD + Rompe 200 + Tendência | **+117% · −30,3%** | +44% · −9,9% | +32% | −10,5% | 1,8 | 1,37 → 1,25 | +23% | 0,26 |
> | 3200 | GPS médias + MACD + Rompe 200 + Tendência + Onda | **+217% · −44,6%** | +49% · −8,9% | +33% | −9,0% | 2,3 | 1,16 → 1,33 | +29% | 0,27 |
> | 3201 | ADX + BB explosão + MACD + Pôr do sol + Quinta ⚠️ | **+149% · −53,2%** | +39% · −10,6% | +26% | −4,9% | 2,7 | 0,90 → 1,56 | +20% | 0,04 |
> | 3202 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+191% · −39,5%** | +41% · −8,0% | +27% | −8,4% | 1,7 | 1,06 → 1,68 | +17% | 0,14 |
> | 3203 | ADX + VWAP + IFR | **+146% · −39,1%** | +55% · −12,1% | +34% | −7,7% | 2,8 | 0,91 → 1,54 | +15% | 0,23 |
> | 3204 | Donchian + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+301% · −40,3%** | +54% · −7,7% | +33% | −9,5% | 2,1 | 0,94 → 1,73 | +24% | 0,28 |
> | 3205 | ADX + VWAP + Donchian + Quinta + Rompe 200 ⚠️ | **+180% · −46,5%** | +44% · −8,8% | +27% | −6,2% | 2,3 | 1,15 → 1,33 | +18% | 0,09 |
> | 3206 | Donchian + BB explosão + GPS médias + MACD + 1ª vela 80 ⚠️ | **+234% · −60,0%** | +57% · −12,8% | +34% | −12,0% | 1,8 | 1,24 → 1,35 | +23% | 0,36 |
> | 3207 | VWAP + Donchian + GPS médias + Tendência | **+218% · −58,8%** | +63% · −16,5% | +37% | −10,5% | 2,3 | 1,45 → 1,14 | +18% | 0,41 |
> | 3208 | ADX + IFR + Onda | **+171% · −34,0%** | +62% · −11,5% | +38% | −9,0% | 2,8 | 0,70 → 1,78 | +23% | 0,20 |
> | 3209 | MACD + Pullback + Rompe 200 + Bollinger + Onda | **+177% · −29,0%** | +38% · −5,2% | +27% | −7,1% | 1,9 | 1,09 → 1,57 | +23% | 0,12 |
> | 3210 | Pullback + Bollinger + Onda | **+119% · −20,0%** | +43% · −6,2% | +28% | −6,4% | 2,3 | 1,00 → 1,60 | +23% | 0,09 |

> [!example]- Combinações 3211 a 3240 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3211 | BB explosão + GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+237% · −53,0%** | +51% · −12,0% | +31% | −11,4% | 1,6 | 1,22 → 1,45 | +22% | 0,31 |
> | 3212 | Donchian + BB explosão + GPS médias + Rompe 200 + Bollinger | **+229% · −56,7%** | +54% · −12,4% | +30% | −8,6% | 1,9 | 1,47 → 1,19 | +15% | 0,33 |
> | 3213 | ADX + VWAP + Donchian + GPS médias + Rompe 200 | **+217% · −59,4%** | +55% · −13,6% | +31% | −9,0% | 2,1 | 1,24 → 1,25 | +20% | 0,26 |
> | 3214 | GPS médias + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+224% · −39,3%** | +48% · −7,9% | +32% | −9,7% | 2,0 | 1,11 → 1,53 | +24% | 0,12 |
> | 3215 | Donchian + BB explosão + MACD + Pôr do sol + Quinta ⚠️ | **+162% · −46,2%** | +41% · −9,1% | +27% | −6,8% | 2,0 | 1,19 → 1,35 | +19% | 0,07 |
> | 3216 | BB explosão + GPS médias + MACD + Quinta + Pullback ⚠️ | **+159% · −51,5%** | +41% · −11,0% | +28% | −7,8% | 1,9 | 1,50 → 1,19 | +18% | 0,04 |
> | 3217 | Donchian + MACD + Pôr do sol + Bollinger + Onda | **+246% · −33,7%** | +48% · −6,4% | +30% | −7,0% | 2,4 | 0,93 → 1,65 | +24% | 0,15 |
> | 3218 | BB explosão + GPS médias + MACD + Rompe 200 + Tendência | **+190% · −63,0%** | +49% · −15,3% | +32% | −8,8% | 2,2 | 1,39 → 1,18 | +19% | 0,33 |
> | 3219 | BB explosão + GPS médias + IFR + Bollinger + Onda | **+251% · −53,0%** | +56% · −11,4% | +33% | −9,6% | 2,1 | 1,11 → 1,48 | +27% | 0,31 |
> | 3220 | ADX + VWAP + GPS médias + Pullback + Rompe 200 | **+179% · −51,5%** | +45% · −10,6% | +28% | −7,6% | 2,0 | 1,38 → 1,21 | +18% | 0,15 |
> | 3221 | ADX + MACD + Quinta + Tendência + Onda ⚠️ | **+227% · −50,1%** | +50% · −9,7% | +34% | −8,9% | 2,3 | 0,95 → 1,63 | +26% | 0,13 |
> | 3222 | VWAP + BB explosão + IFR + Quinta + Bollinger ⚠️ | **+179% · −41,1%** | +41% · −8,6% | +27% | −8,4% | 1,6 | 1,23 → 1,39 | +17% | 0,16 |
> | 3223 | VWAP + BB explosão + Pôr do sol + Bollinger + Tendência | **+179% · −54,3%** | +42% · −11,4% | +28% | −7,3% | 2,0 | 1,28 → 1,24 | +16% | 0,21 |
> | 3224 | VWAP + GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+196% · −46,2%** | +44% · −10,1% | +30% | −12,9% | 1,3 | 1,32 → 1,32 | +23% | 0,15 |
> | 3225 | BB explosão + IFR + MACD + Pôr do sol | **+144% · −35,7%** | +43% · −8,3% | +29% | −7,9% | 2,1 | 1,08 → 1,52 | +23% | 0,13 |
> | 3226 | MACD + Rompe 200 + Bollinger + Tendência + Onda | **+229% · −42,8%** | +46% · −8,7% | +31% | −9,0% | 2,0 | 1,09 → 1,52 | +25% | 0,25 |
> | 3227 | VWAP + BB explosão + 1ª vela 80 + Quinta + Tendência ⚠️ | **+165% · −53,9%** | +41% · −12,5% | +29% | −8,5% | 1,9 | 1,23 → 1,30 | +18% | 0,10 |
> | 3228 | Donchian + GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+246% · −46,5%** | +53% · −10,0% | +32% | −9,3% | 2,1 | 1,13 → 1,43 | +29% | 0,24 |
> | 3229 | VWAP + BB explosão + Quinta + Bollinger + Tendência ⚠️ | **+176% · −55,7%** | +42% · −12,0% | +28% | −7,2% | 2,1 | 1,34 → 1,22 | +15% | 0,20 |
> | 3230 | GPS médias + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+149% · −34,2%** | +37% · −6,6% | +26% | −6,5% | 2,0 | 1,33 → 1,22 | +24% | 0,03 |
> | 3231 | ADX + VWAP + IFR + MACD + Pôr do sol | **+200% · −40,6%** | +46% · −7,5% | +30% | −7,0% | 2,5 | 0,92 → 1,61 | +16% | 0,16 |
> | 3232 | BB explosão + GPS médias + MACD + Quinta + Bollinger ⚠️ | **+189% · −48,2%** | +45% · −10,4% | +28% | −9,3% | 1,6 | 1,30 → 1,29 | +20% | 0,17 |
> | 3233 | VWAP + Donchian + Bollinger + Tendência + Onda | **+274% · −47,0%** | +56% · −9,5% | +34% | −9,3% | 2,3 | 1,12 → 1,39 | +26% | 0,35 |
> | 3234 | VWAP + MACD + Pullback + Tendência | **+148% · −39,8%** | +43% · −10,4% | +32% | −8,9% | 2,1 | 1,39 → 1,19 | +20% | 0,22 |
> | 3235 | GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+162% · −37,0%** | +45% · −9,5% | +30% | −10,9% | 1,5 | 1,25 → 1,38 | +23% | 0,21 |
> | 3236 | ADX + MACD + Bollinger | **+162% · −38,7%** | +56% · −13,1% | +32% | −8,5% | 2,3 | 0,83 → 1,79 | +21% | 0,34 |
> | 3237 | ADX + BB explosão + Bollinger | **+149% · −54,3%** | +56% · −20,0% | +30% | −6,4% | 2,8 | 0,89 → 1,55 | +21% | 0,39 |
> | 3238 | VWAP + Donchian + Quinta + Bollinger ⚠️ | **+165% · −30,7%** | +45% · −7,3% | +26% | −8,7% | 1,6 | 1,34 → 1,28 | +17% | 0,10 |
> | 3239 | ADX + VWAP + Donchian + IFR + Onda | **+261% · −52,4%** | +59% · −10,1% | +35% | −8,4% | 2,7 | 0,91 → 1,57 | +20% | 0,27 |
> | 3240 | ADX + VWAP + GPS médias + IFR + MACD | **+242% · −54,6%** | +56% · −11,6% | +34% | −10,2% | 2,1 | 1,10 → 1,46 | +24% | 0,33 |

> [!example]- Combinações 3241 a 3270 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3241 | ADX + Donchian + GPS médias + MACD + Onda | **+266% · −54,5%** | +63% · −11,1% | +36% | −9,1% | 2,6 | 0,98 → 1,51 | +30% | 0,29 |
> | 3242 | VWAP + Donchian + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+193% · −56,4%** | +47% · −13,4% | +30% | −10,7% | 1,6 | 1,30 → 1,28 | +16% | 0,20 |
> | 3243 | Donchian + BB explosão + Pôr do sol | **+116% · −43,4%** | +48% · −14,9% | +28% | −6,6% | 2,3 | 1,19 → 1,20 | +14% | 0,08 |
> | 3244 | ADX + Pôr do sol + Tendência + Onda | **+189% · −45,2%** | +52% · −10,1% | +34% | −8,7% | 2,4 | 0,92 → 1,64 | +25% | 0,10 |
> | 3245 | GPS médias + IFR + Rompe 200 + Onda | **+181% · −34,3%** | +50% · −8,8% | +32% | −9,0% | 2,2 | 1,12 → 1,41 | +29% | 0,27 |
> | 3246 | Donchian + Pôr do sol + Quinta + Onda ⚠️ | **+139% · −32,4%** | +41% · −6,5% | +27% | −5,0% | 2,8 | 0,92 → 1,51 | +21% | −0,05 |
> | 3247 | ADX + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+149% · −48,2%** | +46% · −12,2% | +29% | −5,9% | 2,7 | 0,90 → 1,56 | +21% | 0,15 |
> | 3248 | Donchian + 1ª vela 80 + Quinta + Onda ⚠️ | **+182% · −37,6%** | +48% · −8,4% | +31% | −7,4% | 2,4 | 0,92 → 1,65 | +25% | −0,04 |
> | 3249 | ADX + VWAP + BB explosão + Pôr do sol + Tendência | **+175% · −67,8%** | +47% · −16,8% | +30% | −7,1% | 2,5 | 1,10 → 1,33 | +19% | 0,19 |
> | 3250 | Pôr do sol + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+92% · −21,6%** | +27% · −4,0% | +22% | −3,7% | 2,4 | 1,12 → 1,31 | +20% | 0,00 |
> | 3251 | GPS médias + MACD + Pôr do sol + Pullback + Onda | **+180% · −34,8%** | +41% · −6,7% | +29% | −7,5% | 2,1 | 1,13 → 1,41 | +24% | 0,02 |
> | 3252 | VWAP + GPS médias + IFR + Pôr do sol | **+158% · −37,5%** | +46% · −9,8% | +29% | −10,2% | 1,6 | 1,33 → 1,27 | +21% | 0,09 |
> | 3253 | IFR + Pôr do sol + Rompe 200 + Onda | **+127% · −23,4%** | +37% · −4,9% | +27% | −5,5% | 2,6 | 0,89 → 1,61 | +23% | 0,08 |
> | 3254 | ADX + VWAP + MACD + Pôr do sol + Pullback | **+158% · −41,5%** | +39% · −6,8% | +27% | −6,1% | 2,3 | 1,06 → 1,46 | +15% | 0,05 |
> | 3255 | ADX + BB explosão + MACD + Rompe 200 + Bollinger | **+203% · −54,8%** | +46% · −11,2% | +28% | −6,6% | 2,3 | 0,99 → 1,56 | +22% | 0,23 |
> | 3256 | GPS médias + MACD + Tendência + Onda | **+205% · −42,5%** | +57% · −10,5% | +37% | −10,1% | 2,4 | 1,09 → 1,37 | +28% | 0,34 |
> | 3257 | VWAP + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+207% · −33,3%** | +44% · −6,1% | +31% | −8,9% | 2,0 | 1,03 → 1,61 | +22% | 0,12 |
> | 3258 | Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+198% · −36,7%** | +43% · −6,9% | +28% | −6,5% | 2,3 | 0,97 → 1,60 | +24% | 0,10 |
> | 3259 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+138% · −30,7%** | +33% · −5,6% | +23% | −7,4% | 1,3 | 1,12 → 1,64 | +16% | 0,07 |
> | 3260 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+199% · −35,9%** | +44% · −7,3% | +30% | −7,3% | 2,4 | 0,86 → 1,72 | +20% | 0,09 |
> | 3261 | ADX + Donchian + BB explosão + 1ª vela 80 + Onda ⚠️ | **+241% · −61,1%** | +59% · −13,3% | +34% | −7,8% | 2,8 | 0,84 → 1,61 | +27% | 0,24 |
> | 3262 | VWAP + MACD + Rompe 200 + Bollinger + Tendência | **+194% · −40,8%** | +42% · −8,1% | +29% | −8,9% | 1,8 | 1,28 → 1,26 | +20% | 0,31 |
> | 3263 | MACD + Pullback + Bollinger + Onda | **+163% · −25,3%** | +43% · −6,0% | +29% | −7,6% | 2,1 | 0,98 → 1,65 | +23% | 0,13 |
> | 3264 | BB explosão + GPS médias + IFR + MACD | **+182% · −53,1%** | +55% · −14,6% | +34% | −12,0% | 1,8 | 1,23 → 1,33 | +23% | 0,42 |
> | 3265 | VWAP + Donchian + GPS médias + Pôr do sol + Bollinger | **+238% · −45,2%** | +50% · −9,9% | +28% | −9,8% | 1,6 | 1,41 → 1,24 | +19% | 0,16 |
> | 3266 | ADX + VWAP + Donchian + 1ª vela 80 ⚠️ | **+211% · −50,8%** | +58% · −10,5% | +34% | −8,8% | 2,4 | 0,99 → 1,55 | +18% | 0,25 |
> | 3267 | Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+133% · −30,0%** | +33% · −5,5% | +25% | −5,4% | 2,2 | 1,01 → 1,58 | +20% | 0,04 |
> | 3268 | MACD + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+120% · −23,2%** | +31% · −4,1% | +25% | −4,9% | 2,4 | 0,97 → 1,57 | +20% | −0,03 |
> | 3269 | VWAP + Quinta + Pullback + Tendência + Onda ⚠️ | **+156% · −37,8%** | +38% · −7,3% | +29% | −7,2% | 2,2 | 1,18 → 1,26 | +23% | 0,06 |
> | 3270 | VWAP + Donchian + GPS médias + Quinta + Bollinger ⚠️ | **+235% · −45,3%** | +50% · −9,9% | +29% | −9,6% | 1,6 | 1,47 → 1,22 | +18% | 0,15 |

> [!example]- Combinações 3271 a 3300 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3271 | Donchian + GPS médias + MACD + Rompe 200 | **+193% · −40,9%** | +54% · −10,2% | +32% | −10,4% | 1,8 | 1,40 → 1,21 | +22% | 0,31 |
> | 3272 | ADX + BB explosão + Quinta + Pullback + Onda ⚠️ | **+162% · −54,0%** | +42% · −10,7% | +28% | −5,6% | 2,7 | 0,94 → 1,50 | +23% | 0,03 |
> | 3273 | ADX + VWAP + MACD + Pôr do sol + Tendência | **+200% · −54,5%** | +46% · −10,7% | +31% | −8,0% | 2,3 | 1,06 → 1,45 | +20% | 0,20 |
> | 3274 | VWAP + Donchian + GPS médias + MACD + Tendência | **+248% · −60,7%** | +59% · −13,9% | +36% | −11,7% | 2,0 | 1,35 → 1,21 | +22% | 0,44 |
> | 3275 | ADX + VWAP + BB explosão + IFR + 1ª vela 80 ⚠️ | **+218% · −56,8%** | +52% · −11,3% | +33% | −8,7% | 2,3 | 0,97 → 1,60 | +22% | 0,26 |
> | 3276 | ADX + BB explosão + Quinta + Tendência + Onda ⚠️ | **+200% · −64,8%** | +50% · −15,4% | +33% | −7,9% | 2,5 | 0,98 → 1,51 | +26% | 0,13 |
> | 3277 | BB explosão + Pôr do sol + Rompe 200 + Bollinger | **+105% · −33,7%** | +34% · −7,6% | +22% | −5,2% | 1,7 | 1,27 → 1,28 | +15% | 0,03 |
> | 3278 | Donchian + Rompe 200 | **+93% · −26,3%** | +51% · −12,6% | +29% | −6,8% | 2,4 | 1,49 → 1,09 | +14% | 0,24 |
> | 3279 | ADX + VWAP + BB explosão + IFR + Quinta ⚠️ | **+175% · −58,1%** | +45% · −12,7% | +29% | −6,7% | 2,5 | 1,02 → 1,46 | +19% | 0,15 |
> | 3280 | Donchian + GPS médias + MACD + Bollinger + Onda | **+295% · −46,4%** | +59% · −10,2% | +34% | −10,2% | 2,0 | 1,10 → 1,47 | +31% | 0,31 |
> | 3281 | ADX + Donchian + Onda | **+181% · −44,1%** | +67% · −14,1% | +37% | −7,8% | 3,2 | 0,76 → 1,59 | +23% | 0,19 |
> | 3282 | VWAP + GPS médias + IFR + Quinta ⚠️ | **+155% · −37,5%** | +45% · −9,8% | +29% | −10,2% | 1,6 | 1,39 → 1,24 | +20% | 0,06 |
> | 3283 | ADX + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+199% · −41,2%** | +45% · −7,7% | +30% | −6,2% | 2,8 | 0,62 → 1,78 | +17% | 0,05 |
> | 3284 | ADX + MACD + Quinta + Bollinger + Onda ⚠️ | **+219% · −42,0%** | +46% · −8,0% | +29% | −6,3% | 2,6 | 0,70 → 1,80 | +19% | 0,12 |
> | 3285 | BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+133% · −35,1%** | +48% · −11,9% | +28% | −9,0% | 1,7 | 1,07 → 1,61 | +16% | 0,24 |
> | 3286 | ADX + VWAP + Donchian + MACD + Bollinger | **+272% · −52,7%** | +56% · −10,0% | +32% | −8,6% | 2,2 | 1,03 → 1,52 | +19% | 0,35 |
> | 3287 | VWAP + GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+202% · −46,7%** | +44% · −10,3% | +27% | −11,5% | 1,2 | 1,31 → 1,31 | +21% | 0,26 |
> | 3288 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+154% · −48,5%** | +40% · −10,4% | +26% | −7,8% | 1,7 | 1,29 → 1,26 | +19% | 0,10 |
> | 3289 | VWAP + IFR + MACD + Pôr do sol + Bollinger | **+197% · −35,1%** | +41% · −6,8% | +28% | −8,9% | 1,7 | 1,11 → 1,55 | +18% | 0,20 |
> | 3290 | Donchian + BB explosão + Quinta ⚠️ | **+114% · −45,2%** | +47% · −15,9% | +28% | −6,6% | 2,3 | 1,27 → 1,16 | +12% | 0,09 |
> | 3291 | GPS médias + IFR + MACD + Pôr do sol + Onda | **+224% · −38,9%** | +48% · −7,9% | +32% | −8,7% | 2,2 | 1,02 → 1,55 | +27% | 0,15 |
> | 3292 | Donchian + BB explosão + MACD + Bollinger | **+204% · −49,9%** | +55% · −13,0% | +31% | −10,0% | 1,9 | 1,17 → 1,40 | +20% | 0,40 |
> | 3293 | BB explosão + Rompe 200 + Bollinger + Tendência + Onda | **+207% · −50,5%** | +46% · −10,0% | +30% | −8,0% | 2,1 | 1,12 → 1,40 | +23% | 0,25 |
> | 3294 | BB explosão + GPS médias + Pullback + Bollinger + Onda | **+209% · −54,8%** | +48% · −12,1% | +29% | −8,7% | 1,9 | 1,20 → 1,32 | +23% | 0,19 |
> | 3295 | Donchian + GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+200% · −40,1%** | +47% · −8,4% | +29% | −8,0% | 2,0 | 1,21 → 1,28 | +25% | 0,08 |
> | 3296 | ADX + Donchian + BB explosão + Quinta + Onda ⚠️ | **+200% · −62,1%** | +52% · −13,9% | +31% | −6,2% | 2,9 | 0,87 → 1,50 | +25% | 0,11 |
> | 3297 | VWAP + GPS médias + IFR + Pullback + Onda | **+212% · −41,4%** | +48% · −8,5% | +32% | −10,0% | 1,9 | 1,19 → 1,34 | +26% | 0,17 |
> | 3298 | ADX + BB explosão + GPS médias + Pullback + Onda | **+193% · −62,2%** | +53% · −14,6% | +32% | −7,7% | 2,5 | 1,06 → 1,37 | +26% | 0,20 |
> | 3299 | ADX + Bollinger | **+119% · −32,1%** | +63% · −16,1% | +32% | −7,9% | 2,4 | 0,79 → 1,76 | +18% | 0,45 |
> | 3300 | Donchian + MACD + Rompe 200 | **+129% · −28,6%** | +48% · −9,4% | +30% | −8,8% | 2,0 | 1,22 → 1,26 | +21% | 0,28 |

> [!example]- Combinações 3301 a 3330 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3301 | VWAP + GPS médias + Pullback + Tendência + Onda | **+206% · −51,3%** | +49% · −10,7% | +33% | −9,9% | 2,0 | 1,26 → 1,22 | +25% | 0,21 |
> | 3302 | VWAP + 1ª vela 80 + Tendência ⚠️ | **+132% · −39,4%** | +49% · −14,0% | +34% | −10,9% | 1,9 | 1,19 → 1,33 | +23% | 0,25 |
> | 3303 | ADX + VWAP + Donchian + Pôr do sol | **+170% · −49,8%** | +50% · −11,2% | +30% | −6,2% | 2,7 | 1,00 → 1,40 | +15% | 0,09 |
> | 3304 | Donchian + Bollinger + Onda | **+183% · −26,8%** | +60% · −8,6% | +33% | −8,3% | 2,5 | 0,93 → 1,60 | +27% | 0,20 |
> | 3305 | ADX + BB explosão + GPS médias + MACD + Quinta ⚠️ | **+181% · −62,1%** | +49% · −14,4% | +30% | −7,5% | 2,3 | 1,10 → 1,37 | +23% | 0,17 |
> | 3306 | VWAP + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+140% · −35,5%** | +35% · −7,0% | +27% | −6,8% | 2,1 | 1,21 → 1,25 | +21% | 0,11 |
> | 3307 | Rompe 200 + Bollinger | **+62% · −12,7%** | +36% · −5,4% | +21% | −4,4% | 1,9 | 1,42 → 1,19 | +17% | 0,08 |
> | 3308 | BB explosão + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+152% · −47,5%** | +39% · −9,1% | +28% | −6,0% | 2,5 | 1,04 → 1,39 | +23% | 0,03 |
> | 3309 | Donchian + BB explosão + IFR + Rompe 200 + Onda | **+216% · −49,1%** | +51% · −10,2% | +32% | −8,4% | 2,3 | 1,07 → 1,43 | +24% | 0,32 |
> | 3310 | VWAP + Donchian + MACD + Quinta + Pullback ⚠️ | **+172% · −38,3%** | +40% · −8,3% | +28% | −8,8% | 1,7 | 1,38 → 1,23 | +18% | 0,08 |
> | 3311 | Donchian + BB explosão + IFR + Onda | **+204% · −47,9%** | +59% · −12,4% | +36% | −9,1% | 2,5 | 0,99 → 1,48 | +27% | 0,38 |
> | 3312 | ADX + MACD + Pôr do sol + Tendência + Onda | **+230% · −49,7%** | +50% · −9,7% | +33% | −8,9% | 2,3 | 0,90 → 1,65 | +25% | 0,16 |
> | 3313 | ADX + Quinta + Pullback + Onda ⚠️ | **+139% · −31,1%** | +42% · −7,7% | +28% | −6,2% | 2,5 | 0,90 → 1,61 | +19% | −0,01 |
> | 3314 | VWAP + GPS médias + Pullback + Rompe 200 + Tendência | **+189% · −53,5%** | +44% · −12,4% | +30% | −7,7% | 2,2 | 1,69 → 1,06 | +15% | 0,18 |
> | 3315 | ADX + VWAP + Donchian + GPS médias | **+206% · −57,9%** | +63% · −16,6% | +35% | −10,1% | 2,2 | 1,17 → 1,28 | +22% | 0,33 |
> | 3316 | GPS médias + Pullback + Rompe 200 | **+104% · −31,8%** | +41% · −10,4% | +27% | −5,9% | 2,3 | 1,92 → 0,92 | +15% | 0,11 |
> | 3317 | VWAP + Donchian + BB explosão + IFR + Quinta ⚠️ | **+187% · −53,5%** | +47% · −11,6% | +30% | −9,3% | 1,8 | 1,23 → 1,28 | +16% | 0,19 |
> | 3318 | VWAP + BB explosão + IFR + MACD + Tendência | **+203% · −60,4%** | +50% · −14,0% | +34% | −10,4% | 2,0 | 1,18 → 1,31 | +20% | 0,42 |
> | 3319 | ADX + VWAP + Donchian + Tendência + Onda | **+252% · −64,0%** | +60% · −14,1% | +36% | −9,3% | 2,5 | 1,00 → 1,44 | +24% | 0,32 |
> | 3320 | MACD + Bollinger + Tendência + Onda | **+215% · −39,5%** | +53% · −10,1% | +34% | −10,1% | 2,1 | 1,00 → 1,58 | +25% | 0,34 |
> | 3321 | ADX + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+162% · −40,6%** | +46% · −10,0% | +30% | −7,4% | 2,3 | 0,84 → 1,72 | +21% | 0,13 |
> | 3322 | VWAP + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+143% · −32,4%** | +40% · −8,0% | +29% | −9,6% | 1,6 | 1,15 → 1,49 | +22% | 0,20 |
> | 3323 | VWAP + Donchian + GPS médias + Rompe 200 + Tendência | **+229% · −62,6%** | +54% · −13,7% | +33% | −9,0% | 2,2 | 1,50 → 1,12 | +17% | 0,33 |
> | 3324 | ADX + IFR + MACD + Onda | **+212% · −40,9%** | +57% · −10,4% | +36% | −9,0% | 2,6 | 0,72 → 1,76 | +24% | 0,25 |
> | 3325 | VWAP + Donchian + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+167% · −46,8%** | +39% · −10,3% | +26% | −8,8% | 1,5 | 1,26 → 1,32 | +18% | 0,07 |
> | 3326 | BB explosão + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+141% · −46,1%** | +45% · −12,3% | +28% | −9,0% | 1,7 | 1,27 → 1,26 | +20% | 0,03 |
> | 3327 | VWAP + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+202% · −45,1%** | +45% · −9,5% | +32% | −9,5% | 2,0 | 1,12 → 1,43 | +26% | 0,16 |
> | 3328 | VWAP + Pullback + Tendência | **+111% · −38,3%** | +43% · −12,7% | +32% | −7,5% | 2,5 | 1,55 → 1,05 | +15% | 0,15 |
> | 3329 | BB explosão + Pôr do sol + Pullback + Bollinger + Onda | **+165% · −37,9%** | +38% · −6,7% | +25% | −5,9% | 2,1 | 1,06 → 1,51 | +22% | 0,03 |
> | 3330 | ADX + GPS médias + MACD + Bollinger + Onda | **+273% · −50,7%** | +57% · −10,4% | +33% | −8,3% | 2,4 | 0,90 → 1,62 | +23% | 0,28 |

> [!example]- Combinações 3331 a 3360 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3331 | VWAP + Donchian + IFR + MACD + Pôr do sol | **+217% · −38,4%** | +47% · −8,0% | +31% | −9,7% | 1,9 | 1,16 → 1,41 | +20% | 0,22 |
> | 3332 | VWAP + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+136% · −33,0%** | +34% · −6,1% | +26% | −9,7% | 1,3 | 1,23 → 1,42 | +19% | 0,01 |
> | 3333 | VWAP + GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+240% · −49,5%** | +51% · −11,3% | +33% | −13,1% | 1,6 | 1,18 → 1,45 | +28% | 0,31 |
> | 3334 | VWAP + BB explosão + IFR + Pullback | **+136% · −47,1%** | +42% · −12,5% | +29% | −9,1% | 1,8 | 1,34 → 1,23 | +14% | 0,16 |
> | 3335 | VWAP + Donchian + MACD + Tendência | **+196% · −51,0%** | +55% · −14,5% | +36% | −11,3% | 2,0 | 1,23 → 1,22 | +21% | 0,50 |
> | 3336 | VWAP + Donchian + BB explosão + Quinta + Tendência ⚠️ | **+180% · −70,6%** | +48% · −16,0% | +31% | −7,8% | 2,3 | 1,32 → 1,15 | +14% | 0,24 |
> | 3337 | Donchian + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+184% · −39,3%** | +49% · −8,6% | +31% | −7,2% | 2,5 | 0,86 → 1,67 | +24% | 0,09 |
> | 3338 | ADX + VWAP + GPS médias + Rompe 200 + Bollinger | **+214% · −49,1%** | +49% · −10,4% | +28% | −8,3% | 1,8 | 1,20 → 1,33 | +21% | 0,27 |
> | 3339 | VWAP + GPS médias + MACD + Pullback + Bollinger | **+211% · −44,6%** | +45% · −9,5% | +28% | −11,5% | 1,4 | 1,45 → 1,25 | +21% | 0,21 |
> | 3340 | ADX + VWAP + Rompe 200 + Tendência | **+159% · −50,7%** | +48% · −13,3% | +31% | −8,9% | 2,1 | 1,18 → 1,30 | +20% | 0,20 |
> | 3341 | VWAP + Donchian + IFR + Bollinger + Onda | **+283% · −40,9%** | +55% · −8,4% | +33% | −9,4% | 2,1 | 1,03 → 1,54 | +23% | 0,29 |
> | 3342 | ADX + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+201% · −41,6%** | +45% · −7,7% | +30% | −6,2% | 2,8 | 0,58 → 1,80 | +17% | 0,11 |
> | 3343 | VWAP + Donchian + BB explosão + Pôr do sol + Tendência | **+182% · −68,0%** | +48% · −15,4% | +31% | −7,8% | 2,3 | 1,28 → 1,16 | +15% | 0,26 |
> | 3344 | BB explosão + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+192% · −48,8%** | +45% · −10,2% | +31% | −7,8% | 2,4 | 1,03 → 1,44 | +23% | 0,21 |
> | 3345 | ADX + Donchian + Rompe 200 + Onda | **+194% · −40,3%** | +55% · −9,1% | +32% | −6,9% | 2,8 | 0,86 → 1,53 | +24% | 0,16 |
> | 3346 | ADX + BB explosão + GPS médias + MACD + 1ª vela 80 ⚠️ | **+220% · −61,2%** | +56% · −14,1% | +33% | −9,5% | 2,2 | 1,04 → 1,49 | +25% | 0,29 |
> | 3347 | ADX + Pôr do sol + Pullback + Rompe 200 + Onda | **+153% · −33,3%** | +38% · −6,4% | +26% | −5,5% | 2,4 | 0,96 → 1,56 | +20% | 0,02 |
> | 3348 | ADX + VWAP + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+197% · −51,7%** | +47% · −11,1% | +29% | −8,1% | 2,0 | 1,09 → 1,46 | +22% | 0,09 |
> | 3349 | VWAP + Donchian + GPS médias + Quinta + Pullback ⚠️ | **+198% · −48,1%** | +46% · −10,5% | +29% | −8,2% | 1,9 | 1,62 → 1,11 | +16% | 0,05 |
> | 3350 | MACD + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+167% · −34,5%** | +39% · −6,3% | +29% | −7,1% | 2,3 | 1,00 → 1,53 | +24% | 0,08 |
> | 3351 | VWAP + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+99% · −32,1%** | +32% · −8,0% | +24% | −8,5% | 1,3 | 1,26 → 1,35 | +16% | 0,01 |
> | 3352 | VWAP + Donchian + MACD + Pôr do sol + Pullback | **+174% · −38,3%** | +40% · −8,3% | +27% | −9,0% | 1,6 | 1,32 → 1,25 | +18% | 0,10 |
> | 3353 | ADX + VWAP + Donchian + Pôr do sol + Rompe 200 | **+182% · −48,4%** | +44% · −8,4% | +27% | −6,1% | 2,3 | 1,09 → 1,35 | +17% | 0,09 |
> | 3354 | Donchian + GPS médias + Rompe 200 | **+156% · −37,7%** | +58% · −12,5% | +32% | −8,8% | 2,2 | 1,58 → 1,08 | +17% | 0,32 |
> | 3355 | ADX + VWAP + IFR + Bollinger + Onda | **+260% · −44,0%** | +53% · −8,9% | +32% | −7,7% | 2,5 | 0,81 → 1,70 | +19% | 0,27 |
> | 3356 | BB explosão + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+154% · −31,6%** | +38% · −5,8% | +27% | −5,7% | 2,5 | 0,91 → 1,58 | +22% | −0,00 |
> | 3357 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+164% · −25,8%** | +37% · −4,4% | +28% | −7,0% | 2,2 | 0,91 → 1,71 | +20% | 0,03 |
> | 3358 | Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+121% · −23,0%** | +36% · −5,0% | +27% | −5,8% | 2,4 | 0,89 → 1,68 | +19% | −0,01 |
> | 3359 | Donchian + BB explosão + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+204% · −49,2%** | +47% · −9,8% | +30% | −9,8% | 1,8 | 1,17 → 1,41 | +21% | 0,27 |
> | 3360 | Donchian + GPS médias + Quinta + Onda ⚠️ | **+188% · −38,6%** | +53% · −10,2% | +32% | −8,5% | 2,2 | 1,13 → 1,32 | +27% | 0,03 |

> [!example]- Combinações 3361 a 3390 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3361 | Donchian + GPS médias + 1ª vela 80 + Onda ⚠️ | **+233% · −44,0%** | +62% · −11,3% | +36% | −10,7% | 2,2 | 1,06 → 1,47 | +30% | 0,26 |
> | 3362 | MACD + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+212% · −40,1%** | +45% · −8,0% | +32% | −8,8% | 2,2 | 1,00 → 1,55 | +23% | 0,23 |
> | 3363 | ADX + BB explosão + IFR + Onda | **+189% · −55,3%** | +57% · −14,3% | +35% | −7,9% | 2,8 | 0,76 → 1,63 | +26% | 0,26 |
> | 3364 | IFR + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+213% · −34,0%** | +44% · −6,3% | +31% | −8,3% | 2,2 | 0,87 → 1,71 | +22% | 0,23 |
> | 3365 | VWAP + Donchian + Pôr do sol + Bollinger | **+168% · −31,2%** | +45% · −7,4% | +26% | −8,9% | 1,5 | 1,26 → 1,30 | +17% | 0,13 |
> | 3366 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+152% · −49,8%** | +40% · −10,9% | +26% | −7,9% | 1,7 | 1,35 → 1,23 | +18% | 0,08 |
> | 3367 | Donchian + Rompe 200 + Bollinger + Onda | **+198% · −29,0%** | +50% · −6,9% | +29% | −7,7% | 2,1 | 1,05 → 1,51 | +27% | 0,18 |
> | 3368 | IFR + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+165% · −31,4%** | +38% · −5,6% | +28% | −6,4% | 2,4 | 0,92 → 1,60 | +23% | 0,09 |
> | 3369 | ADX + BB explosão + Pôr do sol + Tendência + Onda | **+203% · −64,1%** | +50% · −14,8% | +32% | −7,9% | 2,5 | 0,94 → 1,53 | +26% | 0,14 |
> | 3370 | ADX + IFR + MACD + Rompe 200 + Onda | **+227% · −44,1%** | +49% · −9,0% | +32% | −8,1% | 2,4 | 0,81 → 1,71 | +25% | 0,21 |
> | 3371 | ADX + Donchian + BB explosão + Pôr do sol + Onda | **+202% · −61,4%** | +52% · −13,3% | +31% | −6,2% | 3,0 | 0,83 → 1,51 | +24% | 0,12 |
> | 3372 | GPS médias + IFR + Onda | **+169% · −32,1%** | +60% · −11,1% | +37% | −10,7% | 2,3 | 1,03 → 1,47 | +31% | 0,29 |
> | 3373 | ADX + BB explosão + 1ª vela 80 ⚠️ | **+137% · −50,7%** | +55% · −17,9% | +33% | −7,0% | 2,9 | 0,77 → 1,60 | +20% | 0,20 |
> | 3374 | BB explosão + 1ª vela 80 + Tendência + Onda ⚠️ | **+180% · −49,0%** | +52% · −12,5% | +35% | −8,7% | 2,5 | 0,95 → 1,49 | +23% | 0,24 |
> | 3375 | ADX + MACD + Pôr do sol + Bollinger + Onda | **+222% · −41,2%** | +46% · −7,7% | +29% | −6,4% | 2,5 | 0,64 → 1,83 | +19% | 0,13 |
> | 3376 | VWAP + IFR + Quinta + Pullback + Onda ⚠️ | **+159% · −30,5%** | +37% · −5,6% | +28% | −7,3% | 2,0 | 1,09 → 1,45 | +19% | 0,01 |
> | 3377 | VWAP + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+108% · −40,7%** | +29% · −8,6% | +23% | −7,7% | 1,3 | 1,42 → 1,25 | +17% | 0,00 |
> | 3378 | VWAP + Donchian + GPS médias + Pôr do sol + Pullback | **+200% · −46,5%** | +46% · −9,9% | +29% | −8,4% | 1,9 | 1,57 → 1,13 | +17% | 0,06 |
> | 3379 | ADX + GPS médias + Quinta + Onda ⚠️ | **+167% · −45,5%** | +51% · −11,5% | +31% | −6,2% | 2,9 | 0,87 → 1,47 | +24% | 0,03 |
> | 3380 | VWAP + BB explosão + Quinta + Pullback + Tendência ⚠️ | **+144% · −60,3%** | +38% · −12,7% | +28% | −6,5% | 2,3 | 1,50 → 1,09 | +13% | 0,09 |
> | 3381 | BB explosão + MACD + Tendência | **+131% · −54,6%** | +52% · −20,8% | +35% | −10,9% | 2,1 | 1,19 → 1,25 | +20% | 0,47 |
> | 3382 | BB explosão + GPS médias + MACD + Pôr do sol + Bollinger | **+192% · −49,3%** | +45% · −10,4% | +27% | −9,3% | 1,6 | 1,24 → 1,32 | +21% | 0,16 |
> | 3383 | BB explosão + Bollinger + Tendência + Onda | **+194% · −51,0%** | +53% · −13,4% | +33% | −8,9% | 2,3 | 1,04 → 1,45 | +25% | 0,31 |
> | 3384 | VWAP + GPS médias + IFR + MACD + Quinta ⚠️ | **+192% · −44,6%** | +44% · −9,6% | +30% | −11,2% | 1,5 | 1,25 → 1,31 | +23% | 0,15 |
> | 3385 | ADX + BB explosão + IFR + Rompe 200 + Onda | **+201% · −52,4%** | +49% · −11,1% | +31% | −7,2% | 2,6 | 0,85 → 1,59 | +26% | 0,22 |
> | 3386 | MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+198% · −36,7%** | +51% · −9,1% | +36% | −9,9% | 2,4 | 0,91 → 1,59 | +23% | 0,29 |
> | 3387 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+185% · −38,2%** | +41% · −7,3% | +30% | −9,5% | 1,8 | 1,14 → 1,42 | +23% | 0,21 |
> | 3388 | BB explosão + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+188% · −41,5%** | +41% · −8,6% | +27% | −9,2% | 1,5 | 1,11 → 1,56 | +19% | 0,22 |
> | 3389 | VWAP + BB explosão + GPS médias + IFR + Bollinger | **+218% · −55,5%** | +52% · −12,8% | +31% | −11,7% | 1,5 | 1,28 → 1,27 | +18% | 0,38 |
> | 3390 | GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+96% · −25,3%** | +32% · −5,7% | +22% | −4,2% | 2,2 | 1,74 → 1,03 | +18% | −0,00 |

> [!example]- Combinações 3391 a 3420 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3391 | Donchian + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+152% · −29,6%** | +37% · −5,4% | +25% | −5,2% | 2,3 | 1,04 → 1,42 | +22% | 0,01 |
> | 3392 | BB explosão + IFR + Bollinger + Onda | **+197% · −37,5%** | +52% · −9,2% | +32% | −8,4% | 2,3 | 0,91 → 1,64 | +24% | 0,26 |
> | 3393 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+168% · −52,4%** | +42% · −11,9% | +29% | −8,7% | 1,9 | 1,19 → 1,32 | +19% | 0,16 |
> | 3394 | BB explosão + IFR + Rompe 200 + Bollinger + Onda | **+211% · −38,2%** | +45% · −7,7% | +29% | −7,9% | 2,0 | 1,01 → 1,57 | +23% | 0,23 |
> | 3395 | ADX + BB explosão + Pôr do sol + Pullback + Onda | **+165% · −53,1%** | +42% · −10,2% | +28% | −5,7% | 2,7 | 0,89 → 1,52 | +22% | 0,02 |
> | 3396 | BB explosão + MACD + Rompe 200 + Tendência | **+142% · −54,3%** | +44% · −15,1% | +31% | −9,3% | 1,9 | 1,27 → 1,21 | +18% | 0,30 |
> | 3397 | ADX + VWAP + BB explosão + IFR + Pôr do sol | **+178% · −57,4%** | +46% · −12,3% | +29% | −6,7% | 2,5 | 0,97 → 1,48 | +18% | 0,15 |
> | 3398 | Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+66% · −21,0%** | +29% · −6,4% | +22% | −3,9% | 2,4 | 0,98 → 1,52 | +16% | 0,07 |
> | 3399 | VWAP + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+110% · −40,0%** | +30% · −8,4% | +23% | −7,8% | 1,3 | 1,35 → 1,27 | +18% | 0,04 |
> | 3400 | VWAP + BB explosão + IFR + Pôr do sol + Bollinger | **+181% · −41,1%** | +42% · −8,6% | +27% | −8,4% | 1,6 | 1,17 → 1,42 | +18% | 0,17 |
> | 3401 | VWAP + GPS médias + IFR + Pôr do sol + Rompe 200 | **+170% · −39,5%** | +41% · −8,2% | +27% | −8,8% | 1,6 | 1,41 → 1,22 | +19% | 0,12 |
> | 3402 | VWAP + BB explosão + Pôr do sol + Pullback + Tendência | **+146% · −56,8%** | +39% · −12,2% | +28% | −6,6% | 2,2 | 1,45 → 1,11 | +14% | 0,10 |
> | 3403 | ADX + BB explosão + 1ª vela 80 + Bollinger + Onda ⚠️ | **+242% · −54,0%** | +53% · −11,9% | +31% | −7,1% | 2,6 | 0,71 → 1,74 | +17% | 0,24 |
> | 3404 | Donchian + BB explosão + MACD + Quinta + Rompe 200 ⚠️ | **+159% · −48,6%** | +41% · −9,7% | +27% | −7,7% | 1,8 | 1,23 → 1,24 | +17% | 0,15 |
> | 3405 | VWAP + Donchian + Rompe 200 + Tendência | **+173% · −57,1%** | +50% · −13,8% | +32% | −8,2% | 2,3 | 1,41 → 1,10 | +15% | 0,32 |
> | 3406 | ADX + BB explosão + MACD + Bollinger | **+189% · −57,8%** | +53% · −16,0% | +31% | −7,5% | 2,4 | 0,89 → 1,60 | +23% | 0,34 |
> | 3407 | Donchian + BB explosão + MACD + Tendência + Onda | **+227% · −65,0%** | +56% · −15,5% | +36% | −9,6% | 2,4 | 1,05 → 1,38 | +27% | 0,44 |
> | 3408 | BB explosão + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+142% · −34,9%** | +35% · −6,7% | +24% | −6,8% | 1,6 | 1,21 → 1,37 | +18% | 0,11 |
> | 3409 | ADX + VWAP + GPS médias + Pôr do sol + Quinta ⚠️ | **+159% · −44,4%** | +41% · −8,3% | +26% | −6,2% | 2,2 | 1,13 → 1,31 | +19% | 0,04 |
> | 3410 | VWAP + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+183% · −35,8%** | +40% · −7,0% | +29% | −9,9% | 1,7 | 1,06 → 1,58 | +20% | 0,11 |
> | 3411 | GPS médias + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+233% · −42,8%** | +47% · −8,6% | +29% | −8,8% | 1,8 | 1,06 → 1,55 | +19% | 0,21 |
> | 3412 | VWAP + Donchian + MACD + Rompe 200 + Tendência | **+208% · −52,8%** | +48% · −11,5% | +32% | −9,5% | 2,0 | 1,29 → 1,19 | +19% | 0,36 |
> | 3413 | VWAP + Rompe 200 + Bollinger + Tendência | **+153% · −35,5%** | +43% · −8,9% | +28% | −7,8% | 2,0 | 1,44 → 1,17 | +17% | 0,26 |
> | 3414 | Donchian + BB explosão + 1ª vela 80 + Bollinger + Onda ⚠️ | **+265% · −52,4%** | +55% · −9,8% | +32% | −9,0% | 2,1 | 0,96 → 1,60 | +24% | 0,26 |
> | 3415 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+147% · −38,4%** | +37% · −6,1% | +25% | −5,0% | 2,5 | 0,83 → 1,65 | +14% | 0,04 |
> | 3416 | BB explosão + GPS médias + Pôr do sol + Pullback | **+126% · −46,8%** | +41% · −12,3% | +26% | −6,0% | 2,3 | 1,58 → 1,05 | +15% | −0,02 |
> | 3417 | VWAP + Donchian + GPS médias + Tendência + Onda | **+237% · −57,8%** | +59% · −12,7% | +36% | −11,0% | 2,1 | 1,17 → 1,24 | +26% | 0,37 |
> | 3418 | VWAP + GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+167% · −39,6%** | +40% · −8,2% | +27% | −8,8% | 1,6 | 1,46 → 1,20 | +18% | 0,11 |
> | 3419 | VWAP + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+156% · −45,8%** | +45% · −12,8% | +29% | −12,0% | 1,4 | 1,43 → 1,23 | +20% | 0,10 |
> | 3420 | ADX + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+187% · −38,9%** | +41% · −7,1% | +26% | −5,6% | 2,4 | 0,80 → 1,72 | +19% | 0,07 |

> [!example]- Combinações 3421 a 3450 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3421 | ADX + GPS médias + 1ª vela 80 + Onda ⚠️ | **+207% · −54,4%** | +59% · −15,3% | +35% | −8,3% | 2,7 | 0,82 → 1,60 | +21% | 0,22 |
> | 3422 | VWAP + MACD + Bollinger + Tendência | **+181% · −37,7%** | +48% · −9,7% | +32% | −10,6% | 1,8 | 1,20 → 1,30 | +23% | 0,43 |
> | 3423 | VWAP + Donchian + Quinta + Rompe 200 + Bollinger ⚠️ | **+179% · −37,1%** | +40% · −7,3% | +25% | −7,6% | 1,6 | 1,43 → 1,21 | +16% | 0,11 |
> | 3424 | BB explosão + Pôr do sol + Bollinger | **+94% · −33,5%** | +38% · −10,8% | +23% | −5,3% | 1,9 | 1,12 → 1,40 | +16% | −0,00 |
> | 3425 | ADX + BB explosão + GPS médias + MACD + Pôr do sol | **+184% · −60,9%** | +49% · −14,0% | +30% | −7,5% | 2,3 | 1,05 → 1,39 | +24% | 0,15 |
> | 3426 | VWAP + Donchian + Pôr do sol + Rompe 200 + Bollinger | **+181% · −36,5%** | +40% · −7,1% | +25% | −7,6% | 1,5 | 1,36 → 1,23 | +17% | 0,12 |
> | 3427 | ADX + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+169% · −39,2%** | +41% · −7,3% | +28% | −5,4% | 2,7 | 0,69 → 1,72 | +17% | 0,02 |
> | 3428 | BB explosão + GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+232% · −51,5%** | +55% · −11,4% | +34% | −10,5% | 2,1 | 1,03 → 1,51 | +25% | 0,27 |
> | 3429 | ADX + BB explosão + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+124% · −46,6%** | +35% · −8,9% | +23% | −4,7% | 2,2 | 1,05 → 1,42 | +18% | 0,02 |
> | 3430 | BB explosão + GPS médias + Rompe 200 + Tendência + Onda | **+182% · −60,5%** | +49% · −14,3% | +32% | −9,0% | 2,2 | 1,17 → 1,21 | +23% | 0,30 |
> | 3431 | ADX + MACD + Pullback + Rompe 200 + Onda | **+181% · −39,1%** | +42% · −7,3% | +29% | −6,9% | 2,4 | 0,91 → 1,59 | +23% | 0,09 |
> | 3432 | Donchian + BB explosão + GPS médias + MACD + Pôr do sol | **+194% · −57,7%** | +51% · −12,9% | +31% | −10,1% | 1,8 | 1,25 → 1,23 | +20% | 0,21 |
> | 3433 | VWAP + BB explosão + GPS médias + IFR + Pullback | **+186% · −59,3%** | +48% · −13,7% | +31% | −10,3% | 1,7 | 1,44 → 1,18 | +15% | 0,22 |
> | 3434 | IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+199% · −30,3%** | +50% · −7,0% | +35% | −9,6% | 2,3 | 0,77 → 1,77 | +21% | 0,26 |
> | 3435 | IFR + MACD + Quinta + Onda ⚠️ | **+152% · −27,8%** | +42% · −6,2% | +31% | −7,2% | 2,5 | 0,80 → 1,67 | +24% | 0,06 |
> | 3436 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+143% · −46,3%** | +45% · −12,6% | +28% | −9,0% | 1,7 | 1,21 → 1,29 | +21% | 0,08 |
> | 3437 | VWAP + Donchian + IFR + MACD + Rompe 200 | **+213% · −40,4%** | +47% · −8,6% | +31% | −10,6% | 1,7 | 1,20 → 1,32 | +21% | 0,33 |
> | 3438 | Donchian + GPS médias + Pôr do sol + Rompe 200 + Onda | **+202% · −41,3%** | +47% · −8,8% | +29% | −7,9% | 2,0 | 1,16 → 1,30 | +26% | 0,11 |
> | 3439 | VWAP + BB explosão + IFR + MACD + Pullback | **+171% · −50,5%** | +42% · −10,7% | +30% | −10,3% | 1,6 | 1,22 → 1,30 | +18% | 0,21 |
> | 3440 | ADX + MACD + 1ª vela 80 ⚠️ | **+149% · −37,9%** | +55% · −12,7% | +34% | −8,9% | 2,4 | 0,71 → 1,77 | +20% | 0,20 |
> | 3441 | VWAP + IFR + Rompe 200 + Tendência + Onda | **+201% · −43,4%** | +46% · −8,8% | +32% | −9,1% | 2,1 | 1,09 → 1,37 | +26% | 0,27 |
> | 3442 | Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+82% · −17,7%** | +28% · −4,2% | +23% | −3,9% | 2,5 | 0,98 → 1,43 | +19% | −0,04 |
> | 3443 | ADX + VWAP + GPS médias + Tendência + Onda | **+226% · −61,2%** | +57% · −13,7% | +35% | −9,2% | 2,5 | 1,02 → 1,37 | +29% | 0,29 |
> | 3444 | MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+101% · −21,6%** | +32% · −4,3% | +25% | −6,8% | 1,7 | 1,05 → 1,56 | +18% | 0,01 |
> | 3445 | VWAP + Pôr do sol + Pullback + Tendência + Onda | **+158% · −37,1%** | +39% · −7,1% | +29% | −7,3% | 2,2 | 1,13 → 1,28 | +22% | 0,11 |
> | 3446 | ADX + VWAP + Tendência | **+147% · −53,3%** | +57% · −19,2% | +36% | −10,4% | 2,2 | 1,09 → 1,34 | +21% | 0,29 |
> | 3447 | BB explosão + Quinta + Rompe 200 + Bollinger ⚠️ | **+103% · −32,3%** | +33% · −7,2% | +22% | −5,4% | 1,6 | 1,38 → 1,21 | +13% | 0,07 |
> | 3448 | VWAP + Donchian + Quinta + Tendência + Onda ⚠️ | **+205% · −46,4%** | +48% · −9,6% | +32% | −8,3% | 2,3 | 1,09 → 1,30 | +25% | 0,15 |
> | 3449 | ADX + BB explosão + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+187% · −52,1%** | +45% · −10,5% | +29% | −7,2% | 2,3 | 0,90 → 1,59 | +21% | 0,17 |
> | 3450 | BB explosão + GPS médias + Tendência + Onda | **+172% · −60,3%** | +56% · −17,4% | +36% | −9,7% | 2,4 | 1,11 → 1,24 | +26% | 0,37 |

> [!example]- Combinações 3451 a 3480 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3451 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+198% · −63,1%** | +52% · −16,1% | +33% | −11,8% | 1,7 | 1,29 → 1,22 | +19% | 0,33 |
> | 3452 | VWAP + Donchian + BB explosão + IFR + Pôr do sol | **+189% · −52,6%** | +47% · −11,2% | +30% | −9,3% | 1,8 | 1,19 → 1,30 | +17% | 0,21 |
> | 3453 | ADX + GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+221% · −54,6%** | +51% · −12,0% | +32% | −7,7% | 2,4 | 0,90 → 1,56 | +22% | 0,19 |
> | 3454 | VWAP + IFR + MACD + Rompe 200 + Bollinger | **+195% · −37,2%** | +41% · −7,4% | +28% | −9,7% | 1,5 | 1,17 → 1,43 | +22% | 0,28 |
> | 3455 | GPS médias + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+184% · −34,4%** | +41% · −7,1% | +26% | −7,5% | 1,7 | 1,16 → 1,38 | +21% | 0,06 |
> | 3456 | VWAP + MACD + Pullback + Rompe 200 + Tendência | **+159% · −42,5%** | +38% · −8,7% | +29% | −8,1% | 2,0 | 1,45 → 1,15 | +18% | 0,19 |
> | 3457 | BB explosão + MACD + Pullback | **+94% · −39,4%** | +39% · −13,1% | +28% | −8,6% | 1,8 | 1,26 → 1,22 | +16% | 0,05 |
> | 3458 | VWAP + Donchian + BB explosão + Pullback + Bollinger | **+206% · −54,1%** | +47% · −11,3% | +28% | −9,3% | 1,7 | 1,40 → 1,19 | +13% | 0,26 |
> | 3459 | ADX + 1ª vela 80 + Rompe 200 ⚠️ | **+121% · −34,1%** | +47% · −11,0% | +29% | −6,8% | 2,5 | 0,80 → 1,69 | +21% | 0,10 |
> | 3460 | ADX + Pôr do sol + Pullback + Onda | **+141% · −33,7%** | +42% · −7,7% | +28% | −6,2% | 2,5 | 0,84 → 1,64 | +18% | −0,01 |
> | 3461 | ADX + VWAP + BB explosão + GPS médias + IFR | **+199% · −68,0%** | +56% · −17,3% | +33% | −9,9% | 2,1 | 1,12 → 1,34 | +20% | 0,37 |
> | 3462 | VWAP + Pôr do sol + Pullback + Bollinger | **+106% · −23,8%** | +33% · −5,3% | +22% | −7,9% | 1,2 | 1,54 → 1,20 | +15% | 0,05 |
> | 3463 | ADX + Donchian + MACD + Onda | **+219% · −48,7%** | +61% · −11,4% | +36% | −8,5% | 2,7 | 0,77 → 1,61 | +24% | 0,27 |
> | 3464 | ADX + BB explosão + GPS médias + Rompe 200 | **+147% · −61,0%** | +51% · −18,4% | +30% | −7,4% | 2,3 | 1,14 → 1,21 | +18% | 0,30 |
> | 3465 | Donchian + BB explosão + GPS médias + MACD + Quinta ⚠️ | **+191% · −58,5%** | +51% · −13,3% | +31% | −10,1% | 1,8 | 1,29 → 1,21 | +19% | 0,21 |
> | 3466 | VWAP + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+114% · −37,6%** | +31% · −7,5% | +24% | −4,9% | 2,3 | 1,45 → 1,08 | +16% | 0,05 |
> | 3467 | BB explosão + GPS médias + Pôr do sol + Bollinger | **+153% · −48,0%** | +46% · −12,9% | +26% | −7,9% | 1,7 | 1,36 → 1,20 | +18% | 0,11 |
> | 3468 | VWAP + BB explosão + IFR + 1ª vela 80 + Quinta ⚠️ | **+168% · −42,9%** | +41% · −8,9% | +28% | −9,4% | 1,6 | 1,12 → 1,48 | +19% | 0,07 |
> | 3469 | ADX + VWAP + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+178% · −57,1%** | +45% · −12,1% | +29% | −8,3% | 2,0 | 1,07 → 1,45 | +19% | 0,15 |
> | 3470 | BB explosão + IFR + MACD + Rompe 200 | **+142% · −40,7%** | +43% · −10,1% | +29% | −9,0% | 1,8 | 1,13 → 1,39 | +20% | 0,28 |
> | 3471 | BB explosão + Tendência | **+98% · −51,0%** | +56% · −28,3% | +37% | −11,5% | 2,1 | 1,34 → 1,14 | +12% | 0,52 |
> | 3472 | GPS médias + IFR + MACD + Rompe 200 + Onda | **+220% · −40,9%** | +48% · −8,5% | +32% | −9,6% | 2,0 | 1,06 → 1,45 | +28% | 0,27 |
> | 3473 | ADX + VWAP + GPS médias + Bollinger | **+201% · −49,0%** | +56% · −13,4% | +31% | −9,1% | 2,0 | 1,12 → 1,36 | +23% | 0,36 |
> | 3474 | IFR + MACD + Pôr do sol + Rompe 200 + Onda | **+167% · −31,5%** | +38% · −5,6% | +28% | −6,4% | 2,4 | 0,86 → 1,61 | +23% | 0,13 |
> | 3475 | ADX + VWAP + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+205% · −42,6%** | +44% · −8,2% | +27% | −7,5% | 1,9 | 0,95 → 1,64 | +19% | 0,23 |
> | 3476 | ADX + GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+180% · −45,7%** | +45% · −8,9% | +28% | −6,1% | 2,5 | 0,96 → 1,43 | +24% | 0,06 |
> | 3477 | ADX + VWAP + 1ª vela 80 + Tendência + Onda ⚠️ | **+233% · −53,1%** | +53% · −9,7% | +35% | −8,7% | 2,5 | 0,86 → 1,57 | +24% | 0,24 |
> | 3478 | VWAP + Donchian + 1ª vela 80 + Tendência + Onda ⚠️ | **+252% · −51,6%** | +55% · −11,4% | +35% | −10,5% | 2,1 | 1,05 → 1,43 | +28% | 0,31 |
> | 3479 | ADX + VWAP + BB explosão + Quinta + Pullback ⚠️ | **+138% · −58,6%** | +39% · −12,7% | +26% | −6,4% | 2,1 | 1,15 → 1,25 | +15% | 0,08 |
> | 3480 | Donchian + GPS médias + Pôr do sol + Onda | **+190% · −39,8%** | +54% · −10,6% | +32% | −8,4% | 2,2 | 1,08 → 1,34 | +26% | 0,07 |

> [!example]- Combinações 3481 a 3510 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3481 | BB explosão + GPS médias + Quinta + Pullback ⚠️ | **+123% · −48,4%** | +41% · −13,0% | +27% | −6,1% | 2,3 | 1,65 → 1,01 | +13% | 0,02 |
> | 3482 | ADX + 1ª vela 80 + Quinta + Onda ⚠️ | **+156% · −39,0%** | +46% · −9,2% | +30% | −6,2% | 2,8 | 0,56 → 1,78 | +16% | −0,03 |
> | 3483 | VWAP + MACD + Pullback + Bollinger | **+135% · −30,9%** | +38% · −7,3% | +26% | −11,0% | 1,2 | 1,28 → 1,28 | +18% | 0,21 |
> | 3484 | VWAP + GPS médias + Quinta + Tendência ⚠️ | **+156% · −46,1%** | +46% · −12,2% | +31% | −8,3% | 2,2 | 1,49 → 1,09 | +18% | 0,08 |
> | 3485 | GPS médias + MACD + 1ª vela 80 ⚠️ | **+149% · −35,2%** | +54% · −12,2% | +34% | −13,6% | 1,5 | 1,16 → 1,42 | +23% | 0,27 |
> | 3486 | ADX + Donchian + MACD + Rompe 200 + Onda | **+233% · −45,2%** | +52% · −8,5% | +32% | −7,7% | 2,5 | 0,85 → 1,57 | +25% | 0,20 |
> | 3487 | 1ª vela 80 + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+165% · −27,8%** | +36% · −4,7% | +25% | −6,1% | 2,0 | 0,86 → 1,76 | +15% | 0,04 |
> | 3488 | VWAP + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+188% · −45,1%** | +50% · −12,5% | +29% | −13,7% | 1,2 | 1,24 → 1,35 | +23% | 0,33 |
> | 3489 | VWAP + GPS médias + MACD + Quinta + Tendência ⚠️ | **+190% · −49,7%** | +45% · −10,1% | +31% | −9,9% | 1,8 | 1,35 → 1,19 | +22% | 0,17 |
> | 3490 | VWAP + Donchian + GPS médias + 1ª vela 80 ⚠️ | **+204% · −51,3%** | +57% · −14,3% | +33% | −14,4% | 1,4 | 1,26 → 1,26 | +22% | 0,31 |
> | 3491 | BB explosão + GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+177% · −47,2%** | +44% · −10,6% | +29% | −10,3% | 1,6 | 1,19 → 1,35 | +22% | 0,09 |
> | 3492 | Donchian + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+225% · −36,9%** | +47% · −6,3% | +31% | −8,4% | 2,2 | 0,90 → 1,64 | +24% | 0,08 |
> | 3493 | ADX + VWAP + Bollinger + Tendência + Onda | **+257% · −54,6%** | +54% · −10,5% | +33% | −8,9% | 2,3 | 0,93 → 1,54 | +23% | 0,31 |
> | 3494 | VWAP + Quinta + Pullback + Bollinger ⚠️ | **+104% · −23,6%** | +32% · −5,3% | +23% | −7,8% | 1,2 | 1,64 → 1,17 | +15% | 0,05 |
> | 3495 | VWAP + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+138% · −32,9%** | +33% · −6,2% | +23% | −8,4% | 1,2 | 1,18 → 1,45 | +19% | 0,10 |
> | 3496 | VWAP + GPS médias + MACD + Pôr do sol + Tendência | **+193% · −48,6%** | +46% · −9,7% | +31% | −10,1% | 1,8 | 1,30 → 1,20 | +23% | 0,21 |
> | 3497 | ADX + VWAP + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+199% · −52,3%** | +48% · −11,2% | +29% | −8,2% | 2,0 | 1,04 → 1,48 | +21% | 0,14 |
> | 3498 | ADX + Quinta + Bollinger + Onda ⚠️ | **+172% · −36,2%** | +47% · −8,4% | +28% | −6,3% | 2,5 | 0,66 → 1,79 | +18% | 0,07 |
> | 3499 | Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+126% · −30,5%** | +38% · −7,0% | +28% | −7,6% | 2,0 | 1,11 → 1,35 | +25% | 0,04 |
> | 3500 | VWAP + GPS médias + Pôr do sol + Tendência | **+158% · −44,9%** | +47% · −11,5% | +31% | −8,5% | 2,1 | 1,43 → 1,11 | +19% | 0,13 |
> | 3501 | ADX + GPS médias + Pôr do sol + Onda | **+170% · −46,2%** | +51% · −11,7% | +31% | −6,4% | 2,8 | 0,82 → 1,49 | +23% | 0,04 |
> | 3502 | ADX + VWAP + IFR + MACD + Rompe 200 | **+197% · −43,4%** | +46% · −8,4% | +30% | −7,9% | 2,2 | 0,97 → 1,51 | +20% | 0,23 |
> | 3503 | ADX + BB explosão + IFR + MACD + Onda | **+224% · −59,0%** | +54% · −12,1% | +34% | −8,4% | 2,6 | 0,77 → 1,64 | +26% | 0,28 |
> | 3504 | BB explosão + GPS médias + IFR + Quinta + Onda ⚠️ | **+189% · −50,0%** | +48% · −10,3% | +31% | −8,8% | 2,1 | 1,08 → 1,38 | +26% | 0,12 |
> | 3505 | VWAP + Donchian + GPS médias + MACD + Bollinger | **+258% · −51,8%** | +55% · −11,9% | +31% | −13,4% | 1,4 | 1,26 → 1,26 | +22% | 0,38 |
> | 3506 | Donchian + BB explosão + Pôr do sol + Rompe 200 | **+127% · −44,7%** | +41% · −10,8% | +25% | −5,9% | 2,1 | 1,29 → 1,14 | +13% | 0,10 |
> | 3507 | Donchian + BB explosão + Pullback + Rompe 200 + Onda | **+176% · −49,3%** | +44% · −10,4% | +29% | −8,0% | 2,0 | 1,16 → 1,26 | +20% | 0,21 |
> | 3508 | VWAP + IFR + 1ª vela 80 ⚠️ | **+131% · −27,7%** | +47% · −9,1% | +32% | −11,7% | 1,7 | 1,04 → 1,57 | +20% | 0,20 |
> | 3509 | VWAP + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+182% · −45,0%** | +42% · −9,4% | +30% | −10,4% | 1,7 | 1,18 → 1,33 | +23% | 0,26 |
> | 3510 | VWAP + IFR + Pôr do sol + Pullback + Onda | **+161% · −30,8%** | +38% · −5,6% | +28% | −7,2% | 2,1 | 1,04 → 1,46 | +18% | 0,05 |

> [!example]- Combinações 3511 a 3540 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3511 | VWAP + IFR + Quinta + Rompe 200 ⚠️ | **+101% · −24,3%** | +33% · −5,7% | +24% | −7,1% | 1,6 | 1,28 → 1,22 | +17% | 0,05 |
> | 3512 | ADX + Rompe 200 + Tendência + Onda | **+186% · −44,8%** | +52% · −11,2% | +34% | −9,9% | 2,1 | 0,97 → 1,53 | +29% | 0,17 |
> | 3513 | ADX + VWAP + MACD + Rompe 200 + Tendência | **+196% · −54,6%** | +47% · −11,4% | +31% | −9,2% | 2,0 | 1,10 → 1,36 | +23% | 0,25 |
> | 3514 | Donchian + MACD | **+117% · −27,3%** | +62% · −13,9% | +36% | −11,6% | 2,0 | 1,11 → 1,33 | +27% | 0,54 |
> | 3515 | VWAP + BB explosão + GPS médias + IFR + 1ª vela 80 ⚠️ | **+204% · −54,7%** | +51% · −13,0% | +32% | −12,7% | 1,5 | 1,20 → 1,33 | +21% | 0,32 |
> | 3516 | VWAP + Donchian + Quinta + Pullback ⚠️ | **+133% · −36,9%** | +40% · −9,4% | +26% | −7,3% | 1,9 | 1,55 → 1,10 | +14% | 0,01 |
> | 3517 | Donchian + MACD + Rompe 200 + Bollinger + Onda | **+243% · −36,1%** | +48% · −7,1% | +30% | −8,2% | 2,0 | 0,99 → 1,54 | +27% | 0,24 |
> | 3518 | ADX + BB explosão + GPS médias | **+136% · −60,0%** | +61% · −23,6% | +34% | −8,4% | 2,5 | 1,05 → 1,23 | +20% | 0,45 |
> | 3519 | VWAP + IFR + Tendência + Onda | **+189% · −40,2%** | +52% · −10,2% | +36% | −10,2% | 2,3 | 1,02 → 1,42 | +27% | 0,31 |
> | 3520 | VWAP + Donchian + MACD + 1ª vela 80 + Bollinger ⚠️ | **+262% · −46,2%** | +51% · −10,0% | +31% | −12,8% | 1,4 | 1,12 → 1,50 | +22% | 0,35 |
> | 3521 | ADX + Pôr do sol + Rompe 200 + Bollinger + Onda | **+190% · −38,2%** | +42% · −7,2% | +26% | −5,6% | 2,4 | 0,74 → 1,75 | +19% | 0,06 |
> | 3522 | ADX + VWAP + BB explosão + Rompe 200 + Tendência | **+171% · −68,9%** | +47% · −17,6% | +30% | −8,3% | 2,1 | 1,14 → 1,25 | +16% | 0,27 |
> | 3523 | ADX + BB explosão + Quinta + Bollinger + Onda ⚠️ | **+197% · −53,5%** | +46% · −10,4% | +28% | −5,7% | 2,7 | 0,74 → 1,62 | +19% | 0,11 |
> | 3524 | BB explosão + MACD + Bollinger + Tendência + Onda | **+234% · −54,8%** | +51% · −11,5% | +33% | −9,2% | 2,2 | 1,00 → 1,48 | +24% | 0,35 |
> | 3525 | GPS médias + MACD + Pullback + Rompe 200 + Onda | **+177% · −37,2%** | +42% · −7,4% | +29% | −8,9% | 1,8 | 1,17 → 1,31 | +27% | 0,13 |
> | 3526 | ADX + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+172% · −39,9%** | +41% · −7,4% | +27% | −5,5% | 2,6 | 0,64 → 1,74 | +17% | 0,07 |
> | 3527 | BB explosão + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+216% · −53,1%** | +50% · −10,8% | +34% | −9,2% | 2,3 | 0,93 → 1,50 | +22% | 0,29 |
> | 3528 | ADX + Donchian + BB explosão + GPS médias + Onda | **+211% · −69,2%** | +62% · −16,9% | +35% | −9,0% | 2,5 | 0,98 → 1,38 | +27% | 0,35 |
> | 3529 | 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+151% · −25,7%** | +41% · −5,1% | +27% | −6,5% | 2,2 | 0,71 → 1,85 | +13% | 0,00 |
> | 3530 | VWAP + GPS médias + IFR + MACD + Pôr do sol | **+194% · −44,5%** | +45% · −9,6% | +30% | −11,2% | 1,5 | 1,20 → 1,33 | +24% | 0,18 |
> | 3531 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+169% · −46,2%** | +39% · −10,1% | +26% | −9,0% | 1,5 | 1,21 → 1,34 | +19% | 0,13 |
> | 3532 | ADX + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+95% · −30,3%** | +33% · −7,3% | +22% | −4,9% | 1,9 | 1,01 → 1,54 | +17% | 0,03 |
> | 3533 | ADX + VWAP + Donchian + Pullback + Onda | **+221% · −55,1%** | +52% · −9,6% | +32% | −8,1% | 2,4 | 0,98 → 1,43 | +19% | 0,18 |
> | 3534 | IFR + MACD + Pôr do sol + Onda | **+154% · −27,7%** | +43% · −6,7% | +31% | −7,2% | 2,5 | 0,74 → 1,69 | +23% | 0,13 |
> | 3535 | VWAP + BB explosão + IFR + Pullback + Rompe 200 | **+147% · −49,0%** | +38% · −10,3% | +27% | −8,3% | 1,7 | 1,40 → 1,18 | +13% | 0,17 |
> | 3536 | Donchian + BB explosão + Pullback + Onda | **+165% · −48,6%** | +50% · −12,6% | +31% | −8,5% | 2,2 | 1,08 → 1,31 | +22% | 0,23 |
> | 3537 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+147% · −40,3%** | +36% · −8,1% | +25% | −9,5% | 1,3 | 1,24 → 1,29 | +22% | 0,01 |
> | 3538 | VWAP + GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+168% · −50,3%** | +40% · −11,5% | +27% | −10,4% | 1,4 | 1,48 → 1,19 | +18% | 0,13 |
> | 3539 | VWAP + Donchian + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+216% · −54,8%** | +50% · −12,9% | +30% | −12,1% | 1,4 | 1,33 → 1,23 | +20% | 0,27 |
> | 3540 | Rompe 200 + Tendência | **+81% · −26,3%** | +45% · −11,6% | +32% | −10,4% | 1,9 | 1,65 → 1,09 | +16% | 0,18 |

> [!example]- Combinações 3541 a 3570 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3541 | ADX + VWAP + IFR + 1ª vela 80 + Onda ⚠️ | **+237% · −45,3%** | +52% · −8,6% | +34% | −8,6% | 2,4 | 0,74 → 1,71 | +20% | 0,22 |
> | 3542 | Donchian + BB explosão + MACD + 1ª vela 80 ⚠️ | **+191% · −49,5%** | +54% · −12,5% | +33% | −11,5% | 1,8 | 1,09 → 1,45 | +23% | 0,34 |
> | 3543 | VWAP + GPS médias + Bollinger + Tendência + Onda | **+247% · −48,2%** | +53% · −9,7% | +33% | −10,6% | 1,9 | 1,14 → 1,31 | +27% | 0,32 |
> | 3544 | ADX + MACD + Pullback + Onda | **+168% · −39,3%** | +48% · −8,7% | +32% | −8,0% | 2,4 | 0,81 → 1,64 | +22% | 0,09 |
> | 3545 | MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+66% · −13,4%** | +25% · −2,9% | +21% | −3,9% | 2,0 | 1,12 → 1,33 | +20% | 0,01 |
> | 3546 | ADX + VWAP + Donchian + MACD + Quinta ⚠️ | **+204% · −51,1%** | +48% · −9,6% | +30% | −7,7% | 2,3 | 1,00 → 1,43 | +18% | 0,16 |
> | 3547 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+138% · −32,7%** | +34% · −6,0% | +26% | −9,9% | 1,3 | 1,17 → 1,44 | +18% | 0,06 |
> | 3548 | Donchian + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+179% · −33,2%** | +41% · −6,3% | +28% | −6,2% | 2,4 | 0,89 → 1,54 | +22% | 0,04 |
> | 3549 | VWAP + Donchian + IFR + 1ª vela 80 + Onda ⚠️ | **+261% · −41,6%** | +54% · −8,6% | +34% | −10,5% | 2,0 | 0,96 → 1,57 | +24% | 0,28 |
> | 3550 | ADX + VWAP + Donchian + BB explosão + Bollinger | **+231% · −67,4%** | +56% · −16,0% | +31% | −8,4% | 2,1 | 1,05 → 1,38 | +18% | 0,38 |
> | 3551 | BB explosão + GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+192% · −51,6%** | +48% · −11,0% | +31% | −9,6% | 1,9 | 1,11 → 1,37 | +24% | 0,14 |
> | 3552 | GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+218% · −42,6%** | +54% · −11,1% | +32% | −9,9% | 1,9 | 0,97 → 1,60 | +18% | 0,24 |
> | 3553 | VWAP + Donchian + 1ª vela 80 + Quinta ⚠️ | **+154% · −39,8%** | +44% · −10,4% | +28% | −10,4% | 1,5 | 1,17 → 1,38 | +19% | 0,02 |
> | 3554 | Donchian + GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+271% · −48,9%** | +58% · −10,4% | +35% | −11,5% | 1,9 | 1,03 → 1,50 | +29% | 0,30 |
> | 3555 | VWAP + Donchian + Pôr do sol + Pullback | **+135% · −36,3%** | +40% · −9,2% | +26% | −7,4% | 1,8 | 1,47 → 1,12 | +15% | 0,03 |
> | 3556 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+134% · −33,6%** | +34% · −6,4% | +25% | −7,1% | 1,7 | 1,01 → 1,57 | +17% | 0,00 |
> | 3557 | Donchian + GPS médias + MACD + Quinta + Onda ⚠️ | **+224% · −43,3%** | +51% · −9,1% | +32% | −9,4% | 2,0 | 1,07 → 1,38 | +30% | 0,12 |
> | 3558 | GPS médias + MACD + Pôr do sol | **+111% · −28,2%** | +43% · −9,3% | +28% | −9,8% | 1,6 | 1,22 → 1,25 | +24% | 0,00 |
> | 3559 | GPS médias + MACD + Quinta ⚠️ | **+109% · −28,2%** | +43% · −9,4% | +28% | −9,8% | 1,6 | 1,31 → 1,21 | +25% | −0,02 |
> | 3560 | VWAP + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+185% · −35,8%** | +41% · −7,0% | +29% | −10,0% | 1,6 | 1,01 → 1,60 | +20% | 0,18 |
> | 3561 | ADX + MACD + Rompe 200 + Tendência + Onda | **+226% · −49,6%** | +50% · −10,6% | +34% | −10,0% | 2,1 | 0,95 → 1,56 | +27% | 0,21 |
> | 3562 | BB explosão + GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+165% · −48,2%** | +41% · −10,0% | +25% | −7,0% | 1,7 | 1,44 → 1,16 | +16% | 0,11 |
> | 3563 | ADX + GPS médias + Pôr do sol + Rompe 200 + Onda | **+182% · −46,3%** | +45% · −9,0% | +28% | −6,1% | 2,5 | 0,91 → 1,45 | +23% | 0,06 |
> | 3564 | ADX + BB explosão + MACD + 1ª vela 80 ⚠️ | **+174% · −54,6%** | +52% · −14,3% | +33% | −8,2% | 2,4 | 0,80 → 1,63 | +21% | 0,23 |
> | 3565 | Donchian + BB explosão + Quinta + Bollinger + Onda ⚠️ | **+214% · −47,1%** | +48% · −9,1% | +29% | −7,5% | 2,1 | 1,01 → 1,47 | +23% | 0,11 |
> | 3566 | ADX + 1ª vela 80 ⚠️ | **+109% · −32,0%** | +60% · −15,9% | +36% | −8,8% | 2,6 | 0,62 → 1,75 | +20% | 0,15 |
> | 3567 | VWAP + BB explosão + IFR + Rompe 200 + Bollinger | **+178% · −43,2%** | +42% · −9,2% | +27% | −9,3% | 1,5 | 1,21 → 1,30 | +16% | 0,28 |
> | 3568 | MACD + Rompe 200 + Bollinger | **+99% · −20,1%** | +38% · −5,9% | +25% | −7,5% | 1,6 | 1,12 → 1,44 | +21% | 0,18 |
> | 3569 | BB explosão + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+196% · −38,1%** | +45% · −7,8% | +30% | −8,5% | 2,1 | 0,92 → 1,61 | +22% | 0,21 |
> | 3570 | ADX + VWAP + Donchian + GPS médias + MACD | **+237% · −60,8%** | +59% · −14,0% | +34% | −10,9% | 2,0 | 1,11 → 1,34 | +25% | 0,35 |

> [!example]- Combinações 3571 a 3600 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3571 | BB explosão + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+150% · −36,8%** | +37% · −7,2% | +27% | −6,9% | 2,0 | 1,00 → 1,52 | +20% | −0,05 |
> | 3572 | ADX + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+158% · −39,7%** | +46% · −9,4% | +30% | −6,3% | 2,7 | 0,51 → 1,80 | +16% | 0,07 |
> | 3573 | ADX + VWAP + Quinta + Rompe 200 + Bollinger ⚠️ | **+159% · −39,1%** | +38% · −7,2% | +24% | −5,8% | 2,0 | 1,05 → 1,44 | +16% | 0,13 |
> | 3574 | ADX + GPS médias + MACD + Quinta + Onda ⚠️ | **+205% · −47,4%** | +49% · −9,3% | +31% | −7,5% | 2,5 | 0,86 → 1,53 | +23% | 0,08 |
> | 3575 | ADX + VWAP + Donchian + MACD + 1ª vela 80 ⚠️ | **+250% · −50,7%** | +55% · −9,3% | +33% | −10,1% | 2,0 | 0,96 → 1,55 | +20% | 0,30 |
> | 3576 | Donchian + BB explosão + MACD + Pôr do sol + Rompe 200 | **+161% · −47,0%** | +41% · −9,2% | +27% | −7,7% | 1,8 | 1,17 → 1,26 | +18% | 0,15 |
> | 3577 | ADX + VWAP + BB explosão + GPS médias + Pullback | **+169% · −66,8%** | +49% · −16,8% | +30% | −9,1% | 1,9 | 1,23 → 1,18 | +17% | 0,24 |
> | 3578 | BB explosão + GPS médias + Quinta + Bollinger ⚠️ | **+151% · −46,8%** | +46% · −12,4% | +26% | −7,9% | 1,7 | 1,43 → 1,15 | +16% | 0,14 |
> | 3579 | VWAP + Donchian + BB explosão + GPS médias + IFR | **+207% · −65,9%** | +57% · −16,2% | +34% | −12,5% | 1,7 | 1,28 → 1,20 | +17% | 0,44 |
> | 3580 | Donchian + BB explosão + Quinta + Rompe 200 ⚠️ | **+125% · −48,3%** | +41% · −11,3% | +26% | −6,1% | 2,1 | 1,37 → 1,11 | +12% | 0,12 |
> | 3581 | Donchian + MACD + Bollinger + Onda | **+228% · −33,4%** | +55% · −8,2% | +33% | −9,2% | 2,2 | 0,90 → 1,59 | +27% | 0,31 |
> | 3582 | Donchian + BB explosão + IFR + MACD + Onda | **+237% · −50,9%** | +55% · −10,7% | +35% | −10,0% | 2,2 | 0,95 → 1,49 | +29% | 0,39 |
> | 3583 | ADX + Tendência + Onda | **+173% · −48,4%** | +63% · −16,3% | +40% | −11,8% | 2,3 | 0,87 → 1,59 | +30% | 0,24 |
> | 3584 | VWAP + Donchian + MACD + Quinta + Bollinger ⚠️ | **+207% · −39,2%** | +44% · −7,8% | +27% | −10,2% | 1,4 | 1,19 → 1,35 | +20% | 0,19 |
> | 3585 | VWAP + BB explosão + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+164% · −57,7%** | +42% · −13,9% | +29% | −10,1% | 1,6 | 1,22 → 1,23 | +17% | 0,25 |
> | 3586 | ADX + VWAP + 1ª vela 80 + Bollinger ⚠️ | **+190% · −40,6%** | +51% · −10,0% | +30% | −8,2% | 2,1 | 0,83 → 1,69 | +17% | 0,33 |
> | 3587 | VWAP + BB explosão + 1ª vela 80 + Quinta + Pullback ⚠️ | **+126% · −48,4%** | +34% · −10,8% | +25% | −9,3% | 1,3 | 1,26 → 1,25 | +16% | −0,01 |
> | 3588 | ADX + Pôr do sol + Bollinger + Onda | **+175% · −35,4%** | +47% · −8,5% | +28% | −6,4% | 2,4 | 0,59 → 1,83 | +18% | 0,07 |
> | 3589 | ADX + BB explosão + Pôr do sol + Bollinger + Onda | **+199% · −52,6%** | +46% · −10,1% | +28% | −5,8% | 2,6 | 0,69 → 1,65 | +19% | 0,11 |
> | 3590 | VWAP + GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+158% · −37,8%** | +37% · −7,7% | +24% | −8,0% | 1,3 | 1,44 → 1,19 | +19% | 0,05 |
> | 3591 | ADX + MACD + Quinta + Rompe 200 ⚠️ | **+121% · −37,0%** | +38% · −8,8% | +26% | −6,4% | 2,1 | 0,92 → 1,57 | +20% | 0,03 |
> | 3592 | VWAP + BB explosão + GPS médias + Bollinger + Tendência | **+213% · −64,8%** | +53% · −15,3% | +32% | −10,4% | 1,8 | 1,37 → 1,15 | +16% | 0,41 |
> | 3593 | GPS médias + Pullback + Onda | **+127% · −30,7%** | +49% · −9,2% | +31% | −9,3% | 2,0 | 1,14 → 1,23 | +20% | 0,10 |
> | 3594 | VWAP + Donchian + Pôr do sol + Tendência + Onda | **+207% · −44,6%** | +48% · −9,5% | +32% | −8,4% | 2,3 | 1,05 → 1,31 | +24% | 0,21 |
> | 3595 | BB explosão + GPS médias + MACD + Tendência + Onda | **+201% · −63,5%** | +54% · −14,5% | +35% | −10,1% | 2,2 | 1,07 → 1,30 | +28% | 0,37 |
> | 3596 | VWAP + Donchian + GPS médias + MACD + Pullback | **+220% · −50,1%** | +51% · −10,4% | +32% | −12,0% | 1,6 | 1,41 → 1,17 | +19% | 0,24 |
> | 3597 | ADX + BB explosão + GPS médias + MACD + Rompe 200 | **+179% · −63,5%** | +49% · −15,5% | +30% | −8,4% | 2,1 | 1,09 → 1,31 | +22% | 0,26 |
> | 3598 | GPS médias + Quinta + Bollinger + Onda ⚠️ | **+170% · −34,2%** | +46% · −8,2% | +28% | −7,9% | 1,9 | 1,06 → 1,44 | +21% | 0,02 |
> | 3599 | GPS médias + IFR + MACD + Onda | **+207% · −38,9%** | +56% · −10,2% | +36% | −11,1% | 2,1 | 0,99 → 1,50 | +29% | 0,32 |
> | 3600 | ADX + BB explosão + MACD + Pullback + Onda | **+187% · −59,4%** | +47% · −12,5% | +31% | −7,4% | 2,5 | 0,85 → 1,53 | +25% | 0,15 |

> [!example]- Combinações 3601 a 3630 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3601 | VWAP + Donchian + BB explosão + IFR + Rompe 200 | **+184% · −58,3%** | +47% · −12,6% | +30% | −10,2% | 1,7 | 1,22 → 1,21 | +14% | 0,35 |
> | 3602 | Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+153% · −25,1%** | +41% · −5,1% | +27% | −6,5% | 2,1 | 0,64 → 1,89 | +13% | 0,10 |
> | 3603 | BB explosão + IFR + MACD + Bollinger + Onda | **+239% · −42,3%** | +50% · −8,9% | +32% | −9,1% | 2,1 | 0,88 → 1,63 | +23% | 0,30 |
> | 3604 | ADX + VWAP + IFR + MACD | **+183% · −44,0%** | +52% · −10,0% | +34% | −9,0% | 2,3 | 0,88 → 1,55 | +18% | 0,31 |
> | 3605 | VWAP + BB explosão + MACD + Pullback + Tendência | **+166% · −61,8%** | +43% · −14,3% | +31% | −9,6% | 1,9 | 1,30 → 1,16 | +16% | 0,27 |
> | 3606 | BB explosão + GPS médias + MACD + Pullback | **+147% · −52,3%** | +47% · −14,5% | +30% | −10,1% | 1,7 | 1,40 → 1,15 | +18% | 0,16 |
> | 3607 | Donchian + BB explosão + MACD + Quinta ⚠️ | **+148% · −49,2%** | +46% · −12,9% | +29% | −8,8% | 1,9 | 1,14 → 1,28 | +18% | 0,17 |
> | 3608 | VWAP + GPS médias + IFR + MACD + Rompe 200 | **+190% · −46,4%** | +45% · −10,2% | +30% | −12,0% | 1,4 | 1,24 → 1,24 | +22% | 0,29 |
> | 3609 | VWAP + IFR + Pôr do sol + Rompe 200 | **+103% · −23,5%** | +33% · −5,7% | +24% | −7,1% | 1,6 | 1,21 → 1,25 | +18% | 0,08 |
> | 3610 | BB explosão + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+96% · −36,3%** | +33% · −9,3% | +23% | −6,3% | 1,7 | 1,13 → 1,36 | +17% | −0,02 |
> | 3611 | Donchian + BB explosão + GPS médias + Pôr do sol | **+163% · −54,6%** | +53% · −15,3% | +30% | −8,8% | 2,0 | 1,34 → 1,12 | +16% | 0,17 |
> | 3612 | VWAP + BB explosão + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+171% · −41,7%** | +41% · −8,8% | +28% | −9,4% | 1,6 | 1,07 → 1,50 | +20% | 0,13 |
> | 3613 | VWAP + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+248% · −38,5%** | +48% · −7,8% | +31% | −9,8% | 1,9 | 0,86 → 1,72 | +22% | 0,26 |
> | 3614 | ADX + VWAP + MACD + Tendência | **+184% · −57,1%** | +53% · −15,4% | +35% | −10,4% | 2,1 | 1,03 → 1,40 | +22% | 0,35 |
> | 3615 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+227% · −37,1%** | +47% · −6,4% | +31% | −8,6% | 2,1 | 0,85 → 1,65 | +24% | 0,16 |
> | 3616 | VWAP + GPS médias + Pullback + Bollinger | **+168% · −37,1%** | +46% · −9,5% | +28% | −10,2% | 1,4 | 1,62 → 1,12 | +17% | 0,18 |
> | 3617 | ADX + GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+247% · −56,0%** | +56% · −12,4% | +35% | −9,4% | 2,3 | 0,83 → 1,62 | +21% | 0,24 |
> | 3618 | MACD + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+165% · −37,9%** | +39% · −7,3% | +29% | −8,3% | 2,0 | 1,05 → 1,41 | +25% | 0,10 |
> | 3619 | BB explosão + IFR + 1ª vela 80 + Onda ⚠️ | **+183% · −36,3%** | +51% · −9,3% | +34% | −9,4% | 2,2 | 0,82 → 1,66 | +21% | 0,21 |
> | 3620 | ADX + MACD + Tendência + Onda | **+212% · −52,6%** | +58% · −13,1% | +38% | −11,4% | 2,2 | 0,87 → 1,60 | +28% | 0,29 |
> | 3621 | Quinta + Tendência + Onda ⚠️ | **+115% · −26,6%** | +44% · −8,3% | +32% | −8,8% | 2,2 | 1,00 → 1,42 | +26% | −0,04 |
> | 3622 | ADX + VWAP + MACD + Pullback + Rompe 200 | **+155% · −41,0%** | +39% · −7,3% | +27% | −7,6% | 1,9 | 1,11 → 1,34 | +18% | 0,12 |
> | 3623 | VWAP + IFR + Quinta ⚠️ | **+90% · −20,7%** | +37% · −6,3% | +27% | −8,5% | 1,7 | 1,16 → 1,31 | +16% | −0,06 |
> | 3624 | BB explosão + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+149% · −50,2%** | +39% · −10,1% | +28% | −7,2% | 2,1 | 1,09 → 1,28 | +22% | 0,10 |
> | 3625 | GPS médias + Pôr do sol + Rompe 200 + Bollinger + Onda | **+186% · −35,2%** | +41% · −7,0% | +26% | −7,5% | 1,7 | 1,10 → 1,41 | +21% | 0,08 |
> | 3626 | BB explosão + GPS médias + IFR + Pôr do sol + Onda | **+191% · −48,5%** | +48% · −10,0% | +31% | −8,8% | 2,1 | 1,04 → 1,40 | +27% | 0,14 |
> | 3627 | VWAP + Donchian + IFR + MACD | **+200% · −38,4%** | +54% · −10,3% | +34% | −12,4% | 1,7 | 1,12 → 1,36 | +22% | 0,42 |
> | 3628 | GPS médias + MACD + Pullback + Onda | **+165% · −34,5%** | +47% · −8,6% | +32% | −9,8% | 1,9 | 1,09 → 1,35 | +25% | 0,12 |
> | 3629 | 1ª vela 80 + Quinta ⚠️ | **+55% · −13,7%** | +33% · −5,7% | +25% | −5,2% | 2,3 | 0,86 → 1,60 | +14% | −0,34 |
> | 3630 | Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+167% · −27,3%** | +37% · −4,6% | +25% | −6,1% | 2,0 | 0,79 → 1,79 | +15% | 0,10 |

> [!example]- Combinações 3631 a 3660 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3631 | VWAP + Donchian + Pullback + Bollinger + Onda | **+232% · −38,8%** | +48% · −7,8% | +29% | −10,0% | 1,7 | 1,12 → 1,38 | +21% | 0,21 |
> | 3632 | BB explosão + GPS médias + MACD + Rompe 200 + Bollinger | **+188% · −50,7%** | +45% · −11,0% | +28% | −10,1% | 1,5 | 1,27 → 1,22 | +19% | 0,28 |
> | 3633 | GPS médias + MACD + Pôr do sol + Rompe 200 | **+122% · −30,5%** | +38% · −7,4% | +26% | −8,2% | 1,6 | 1,32 → 1,20 | +23% | 0,05 |
> | 3634 | BB explosão + GPS médias + Quinta + Pullback + Onda ⚠️ | **+151% · −50,4%** | +41% · −10,6% | +28% | −8,0% | 1,9 | 1,18 → 1,19 | +22% | 0,03 |
> | 3635 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+170% · −37,0%** | +40% · −6,6% | +27% | −6,9% | 2,0 | 0,97 → 1,53 | +18% | −0,03 |
> | 3636 | ADX + VWAP + BB explosão + Tendência | **+160% · −69,7%** | +53% · −22,4% | +34% | −9,3% | 2,2 | 1,06 → 1,28 | +18% | 0,38 |
> | 3637 | Donchian + BB explosão + GPS médias + Bollinger + Onda | **+242% · −62,8%** | +58% · −14,2% | +33% | −10,2% | 1,9 | 1,10 → 1,33 | +25% | 0,34 |
> | 3638 | BB explosão + MACD + 1ª vela 80 + Bollinger ⚠️ | **+174% · −39,8%** | +47% · −10,5% | +29% | −10,9% | 1,5 | 1,01 → 1,60 | +18% | 0,28 |
> | 3639 | Donchian + BB explosão + MACD + Pullback + Onda | **+200% · −52,5%** | +49% · −10,7% | +32% | −9,0% | 2,1 | 1,04 → 1,38 | +25% | 0,24 |
> | 3640 | ADX + VWAP + BB explosão + Pôr do sol + Pullback | **+140% · −57,9%** | +39% · −12,1% | +26% | −6,3% | 2,1 | 1,09 → 1,28 | +16% | 0,06 |
> | 3641 | ADX + BB explosão + MACD + Quinta + Rompe 200 ⚠️ | **+146% · −53,2%** | +39% · −11,1% | +26% | −6,0% | 2,3 | 0,96 → 1,45 | +20% | 0,09 |
> | 3642 | VWAP + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+244% · −41,7%** | +49% · −7,8% | +32% | −10,2% | 1,9 | 0,98 → 1,54 | +25% | 0,29 |
> | 3643 | BB explosão + GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+163% · −47,0%** | +41% · −9,6% | +25% | −7,0% | 1,7 | 1,51 → 1,12 | +15% | 0,14 |
> | 3644 | ADX + BB explosão + Rompe 200 + Tendência + Onda | **+198% · −65,0%** | +50% · −15,6% | +33% | −9,1% | 2,2 | 0,98 → 1,45 | +26% | 0,23 |
> | 3645 | BB explosão + MACD + Pôr do sol + Rompe 200 + Bollinger | **+144% · −35,9%** | +35% · −6,7% | +24% | −6,8% | 1,6 | 1,12 → 1,41 | +19% | 0,09 |
> | 3646 | MACD + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+198% · −33,0%** | +41% · −5,7% | +28% | −7,9% | 1,9 | 0,75 → 1,81 | +15% | 0,09 |
> | 3647 | Donchian + BB explosão + GPS médias + Quinta ⚠️ | **+160% · −55,6%** | +53% · −15,8% | +30% | −8,8% | 2,0 | 1,40 → 1,10 | +15% | 0,19 |
> | 3648 | VWAP + BB explosão + Bollinger + Tendência | **+164% · −56,8%** | +48% · −16,0% | +30% | −9,7% | 1,8 | 1,24 → 1,18 | +15% | 0,42 |
> | 3649 | VWAP + BB explosão + GPS médias + Pullback + Tendência | **+180% · −66,7%** | +49% · −16,6% | +32% | −9,2% | 2,1 | 1,50 → 1,06 | +14% | 0,27 |
> | 3650 | GPS médias + Pullback + Rompe 200 + Onda | **+138% · −33,4%** | +41% · −8,3% | +28% | −8,4% | 1,8 | 1,23 → 1,17 | +24% | 0,14 |
> | 3651 | VWAP + Donchian + GPS médias + IFR + Onda | **+248% · −49,6%** | +58% · −11,2% | +35% | −11,7% | 1,9 | 1,10 → 1,34 | +28% | 0,33 |
> | 3652 | VWAP + MACD + Pullback + Rompe 200 + Bollinger | **+147% · −32,9%** | +35% · −6,2% | +24% | −9,5% | 1,2 | 1,36 → 1,22 | +18% | 0,17 |
> | 3653 | VWAP + GPS médias + Pôr do sol + Rompe 200 + Tendência | **+169% · −48,1%** | +41% · −10,5% | +28% | −7,5% | 2,0 | 1,49 → 1,07 | +18% | 0,13 |
> | 3654 | ADX + BB explosão + Pullback + Rompe 200 + Onda | **+161% · −53,3%** | +43% · −10,8% | +28% | −6,4% | 2,4 | 0,94 → 1,41 | +23% | 0,13 |
> | 3655 | ADX + VWAP + Pullback + Rompe 200 | **+116% · −38,3%** | +38% · −8,4% | +26% | −7,1% | 1,8 | 1,17 → 1,20 | +16% | 0,10 |
> | 3656 | ADX + VWAP + IFR + Quinta + Onda ⚠️ | **+192% · −39,3%** | +46% · −7,5% | +30% | −7,0% | 2,5 | 0,77 → 1,60 | +18% | 0,07 |
> | 3657 | BB explosão + GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+179% · −47,6%** | +44% · −10,6% | +29% | −10,4% | 1,5 | 1,14 → 1,37 | +22% | 0,13 |
> | 3658 | GPS médias + MACD + Quinta + Bollinger + Onda ⚠️ | **+214% · −38,9%** | +45% · −8,0% | +29% | −8,6% | 1,9 | 1,01 → 1,50 | +21% | 0,10 |
> | 3659 | ADX + VWAP + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+196% · −53,2%** | +48% · −11,6% | +29% | −9,2% | 1,8 | 1,08 → 1,39 | +24% | 0,22 |
> | 3660 | ADX + GPS médias + MACD + Pôr do sol + Onda | **+208% · −48,0%** | +50% · −9,5% | +31% | −7,4% | 2,5 | 0,82 → 1,55 | +23% | 0,10 |

> [!example]- Combinações 3661 a 3690 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3661 | VWAP + Donchian + IFR + Quinta + Onda ⚠️ | **+211% · −39,6%** | +47% · −8,0% | +31% | −8,7% | 2,1 | 1,00 → 1,44 | +21% | 0,10 |
> | 3662 | Donchian + BB explosão + Pôr do sol + Bollinger + Onda | **+217% · −47,9%** | +48% · −9,5% | +29% | −7,4% | 2,1 | 0,96 → 1,49 | +24% | 0,12 |
> | 3663 | IFR + Onda | **+103% · −22,7%** | +55% · −11,1% | +37% | −9,2% | 2,6 | 0,68 → 1,65 | +27% | 0,20 |
> | 3664 | ADX + VWAP + GPS médias + MACD + Bollinger | **+241% · −50,3%** | +53% · −10,8% | +31% | −10,1% | 1,8 | 1,06 → 1,42 | +23% | 0,36 |
> | 3665 | VWAP + Pullback + Rompe 200 + Tendência | **+121% · −44,0%** | +38% · −11,6% | +28% | −6,9% | 2,2 | 1,61 → 1,00 | +14% | 0,15 |
> | 3666 | GPS médias + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+265% · −45,4%** | +52% · −9,8% | +32% | −11,0% | 1,7 | 0,95 → 1,61 | +19% | 0,27 |
> | 3667 | VWAP + Donchian + GPS médias + Bollinger | **+220% · −45,3%** | +58% · −12,6% | +31% | −12,6% | 1,5 | 1,38 → 1,18 | +19% | 0,35 |
> | 3668 | Pôr do sol + Rompe 200 + Tendência + Onda | **+128% · −30,5%** | +38% · −7,0% | +28% | −7,6% | 2,0 | 1,05 → 1,37 | +25% | 0,10 |
> | 3669 | ADX + VWAP + Donchian + MACD + Pôr do sol | **+206% · −50,7%** | +49% · −9,2% | +30% | −7,7% | 2,2 | 0,95 → 1,45 | +17% | 0,17 |
> | 3670 | Donchian + BB explosão + GPS médias + Pôr do sol + Rompe 200 | **+173% · −56,3%** | +47% · −12,5% | +28% | −7,7% | 1,9 | 1,41 → 1,10 | +15% | 0,17 |
> | 3671 | VWAP + IFR + MACD + Bollinger | **+181% · −35,1%** | +47% · −8,8% | +30% | −11,3% | 1,5 | 1,07 → 1,49 | +20% | 0,37 |
> | 3672 | VWAP + GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+167% · −49,7%** | +41% · −11,0% | +28% | −7,6% | 2,0 | 1,54 → 1,06 | +17% | 0,11 |
> | 3673 | BB explosão + MACD + Quinta + Bollinger ⚠️ | **+129% · −35,4%** | +39% · −8,0% | +25% | −7,7% | 1,6 | 1,09 → 1,43 | +20% | 0,12 |
> | 3674 | VWAP + IFR + MACD + Tendência + Onda | **+225% · −46,7%** | +50% · −9,8% | +35% | −10,3% | 2,2 | 0,97 → 1,44 | +27% | 0,37 |
> | 3675 | ADX + MACD + 1ª vela 80 + Onda ⚠️ | **+185% · −42,6%** | +52% · −10,4% | +34% | −8,1% | 2,6 | 0,53 → 1,75 | +17% | 0,21 |
> | 3676 | MACD + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+152% · −24,6%** | +35% · −4,1% | +25% | −5,4% | 2,2 | 0,72 → 1,74 | +16% | 0,04 |
> | 3677 | ADX + BB explosão + 1ª vela 80 + Quinta + Onda ⚠️ | **+179% · −51,0%** | +45% · −10,9% | +29% | −6,4% | 2,6 | 0,67 → 1,64 | +17% | 0,03 |
> | 3678 | BB explosão + IFR + MACD | **+131% · −38,5%** | +50% · −13,0% | +34% | −11,0% | 1,9 | 1,03 → 1,44 | +23% | 0,39 |
> | 3679 | VWAP + Pullback + Rompe 200 + Tendência + Onda | **+155% · −44,9%** | +39% · −9,5% | +29% | −8,8% | 1,8 | 1,17 → 1,18 | +22% | 0,19 |
> | 3680 | BB explosão + MACD + Pullback + Rompe 200 | **+104% · −40,7%** | +34% · −10,2% | +25% | −7,4% | 1,7 | 1,34 → 1,16 | +15% | 0,08 |
> | 3681 | VWAP + Donchian + BB explosão + Tendência | **+167% · −71,7%** | +55% · −20,8% | +34% | −10,3% | 2,1 | 1,24 → 1,11 | +13% | 0,51 |
> | 3682 | MACD + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+163% · −28,9%** | +37% · −5,3% | +28% | −8,4% | 1,8 | 0,96 → 1,58 | +21% | 0,11 |
> | 3683 | ADX + VWAP + GPS médias + Quinta + Rompe 200 ⚠️ | **+156% · −48,8%** | +41% · −9,8% | +26% | −7,6% | 1,8 | 1,18 → 1,20 | +19% | 0,09 |
> | 3684 | ADX + BB explosão + MACD + Pôr do sol + Rompe 200 | **+149% · −52,0%** | +39% · −10,6% | +26% | −5,7% | 2,3 | 0,89 → 1,48 | +21% | 0,06 |
> | 3685 | VWAP + Quinta + Bollinger + Tendência + Onda ⚠️ | **+193% · −38,3%** | +42% · −7,1% | +29% | −7,9% | 2,0 | 1,03 → 1,40 | +24% | 0,13 |
> | 3686 | VWAP + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+137% · −39,1%** | +34% · −8,0% | +26% | −10,8% | 1,2 | 1,20 → 1,31 | +21% | 0,13 |
> | 3687 | Donchian + GPS médias + MACD + Pôr do sol + Onda | **+227% · −43,4%** | +51% · −9,2% | +32% | −9,4% | 2,0 | 1,03 → 1,40 | +29% | 0,15 |
> | 3688 | BB explosão + GPS médias + MACD + Pullback + Rompe 200 | **+158% · −54,0%** | +41% · −11,9% | +28% | −8,7% | 1,7 | 1,46 → 1,12 | +17% | 0,16 |
> | 3689 | VWAP + GPS médias + IFR | **+144% · −37,5%** | +54% · −13,3% | +34% | −13,8% | 1,5 | 1,29 → 1,19 | +21% | 0,30 |
> | 3690 | ADX + Donchian + BB explosão + Onda | **+186% · −63,7%** | +60% · −18,3% | +35% | −8,1% | 2,7 | 0,79 → 1,46 | +27% | 0,30 |

> [!example]- Combinações 3691 a 3720 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3691 | BB explosão + Pullback + Rompe 200 + Bollinger + Onda | **+162% · −39,6%** | +38% · −7,2% | +26% | −7,4% | 1,7 | 1,11 → 1,36 | +21% | 0,14 |
> | 3692 | ADX + BB explosão + Tendência + Onda | **+186% · −66,2%** | +58% · −20,1% | +36% | −10,2% | 2,3 | 0,90 → 1,48 | +28% | 0,30 |
> | 3693 | GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+120% · −30,5%** | +37% · −7,4% | +26% | −8,2% | 1,6 | 1,40 → 1,16 | +21% | 0,05 |
> | 3694 | VWAP + Donchian + BB explosão + GPS médias + Tendência | **+198% · −76,1%** | +58% · −19,4% | +35% | −11,0% | 2,0 | 1,35 → 1,10 | +15% | 0,48 |
> | 3695 | Donchian + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+182% · −36,2%** | +49% · −9,0% | +31% | −8,7% | 2,1 | 0,93 → 1,54 | +26% | 0,21 |
> | 3696 | ADX + VWAP + Quinta + Bollinger ⚠️ | **+146% · −36,4%** | +42% · −8,5% | +26% | −6,0% | 2,2 | 0,91 → 1,51 | +14% | 0,17 |
> | 3697 | VWAP + BB explosão + Pôr do sol + Quinta + Tendência ⚠️ | **+127% · −53,6%** | +36% · −11,3% | +26% | −6,3% | 2,1 | 1,26 → 1,11 | +15% | 0,08 |
> | 3698 | ADX + MACD + Pôr do sol + Rompe 200 | **+124% · −35,8%** | +38% · −8,3% | +26% | −6,0% | 2,2 | 0,84 → 1,60 | +19% | 0,01 |
> | 3699 | ADX + MACD + Bollinger + Onda | **+204% · −41,4%** | +53% · −10,3% | +32% | −8,1% | 2,4 | 0,60 → 1,76 | +19% | 0,26 |
> | 3700 | VWAP + Donchian + BB explosão + MACD + Tendência | **+195% · −70,7%** | +52% · −17,5% | +34% | −11,5% | 1,8 | 1,17 → 1,19 | +18% | 0,50 |
> | 3701 | VWAP + MACD + Quinta + Tendência ⚠️ | **+126% · −36,7%** | +39% · −9,4% | +29% | −9,0% | 1,8 | 1,17 → 1,19 | +21% | 0,16 |
> | 3702 | VWAP + Donchian + GPS médias + MACD + 1ª vela 80 ⚠️ | **+239% · −53,2%** | +54% · −12,3% | +33% | −14,8% | 1,4 | 1,18 → 1,31 | +25% | 0,35 |
> | 3703 | BB explosão + GPS médias + Pôr do sol + Pullback + Rompe 200 | **+136% · −48,7%** | +37% · −10,1% | +25% | −6,0% | 2,0 | 1,63 → 1,01 | +14% | 0,04 |
> | 3704 | ADX + VWAP + IFR + Pôr do sol + Onda | **+194% · −39,3%** | +46% · −7,4% | +30% | −7,0% | 2,5 | 0,72 → 1,62 | +17% | 0,11 |
> | 3705 | MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+103% · −21,3%** | +32% · −4,4% | +25% | −7,0% | 1,7 | 0,96 → 1,59 | +17% | 0,08 |
> | 3706 | Pôr do sol + 1ª vela 80 ⚠️ | **+56% · −15,1%** | +34% · −6,5% | +24% | −5,0% | 2,4 | 0,73 → 1,68 | +13% | 0,09 |
> | 3707 | MACD + Quinta + Tendência + Onda ⚠️ | **+153% · −34,4%** | +43% · −8,3% | +32% | −9,2% | 2,1 | 0,96 → 1,47 | +25% | 0,10 |
> | 3708 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+152% · −36,1%** | +38% · −7,0% | +27% | −7,0% | 2,0 | 0,94 → 1,54 | +20% | −0,00 |
> | 3709 | VWAP + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+139% · −29,5%** | +34% · −5,3% | +26% | −7,9% | 1,6 | 1,07 → 1,44 | +17% | 0,07 |
> | 3710 | VWAP + MACD + 1ª vela 80 + Tendência ⚠️ | **+169% · −39,9%** | +47% · −10,2% | +33% | −12,4% | 1,7 | 1,11 → 1,37 | +26% | 0,35 |
> | 3711 | VWAP + GPS médias + IFR + Bollinger + Onda | **+252% · −46,9%** | +52% · −10,5% | +32% | −10,9% | 1,7 | 1,05 → 1,44 | +27% | 0,29 |
> | 3712 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+181% · −51,5%** | +46% · −11,1% | +29% | −6,4% | 2,6 | 0,62 → 1,66 | +17% | 0,08 |
> | 3713 | BB explosão + Rompe 200 + Tendência | **+108% · −52,1%** | +44% · −18,8% | +30% | −8,9% | 2,0 | 1,42 → 1,09 | +12% | 0,29 |
> | 3714 | VWAP + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+183% · −37,9%** | +41% · −7,6% | +29% | −10,8% | 1,5 | 1,06 → 1,49 | +23% | 0,25 |
> | 3715 | Donchian + BB explosão + GPS médias + Quinta + Rompe 200 ⚠️ | **+171% · −57,2%** | +46% · −12,9% | +28% | −7,7% | 1,9 | 1,46 → 1,07 | +14% | 0,18 |
> | 3716 | BB explosão + GPS médias + MACD + Bollinger | **+176% · −50,6%** | +52% · −13,9% | +30% | −11,8% | 1,5 | 1,20 → 1,25 | +21% | 0,38 |
> | 3717 | ADX + MACD + Rompe 200 + Bollinger + Onda | **+220% · −43,9%** | +46% · −8,6% | +29% | −7,3% | 2,2 | 0,72 → 1,71 | +20% | 0,19 |
> | 3718 | VWAP + Donchian + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+229% · −51,4%** | +51% · −11,5% | +30% | −12,1% | 1,4 | 1,14 → 1,38 | +18% | 0,34 |
> | 3719 | ADX + VWAP + MACD + Pullback | **+143% · −45,0%** | +43% · −10,4% | +29% | −8,2% | 2,0 | 1,02 → 1,39 | +16% | 0,14 |
> | 3720 | BB explosão + Quinta + Tendência + Onda ⚠️ | **+139% · −50,4%** | +44% · −13,3% | +31% | −8,0% | 2,3 | 1,00 → 1,33 | +25% | 0,07 |

> [!example]- Combinações 3721 a 3750 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3721 | ADX + BB explosão + GPS médias + Bollinger + Onda | **+228% · −61,3%** | +57% · −14,1% | +32% | −8,4% | 2,3 | 0,91 → 1,46 | +23% | 0,31 |
> | 3722 | MACD + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+119% · −26,0%** | +31% · −4,5% | +25% | −6,1% | 1,9 | 1,03 → 1,41 | +23% | 0,02 |
> | 3723 | ADX + VWAP + GPS médias + IFR + Onda | **+231% · −51,6%** | +56% · −11,0% | +34% | −9,8% | 2,2 | 0,92 → 1,48 | +25% | 0,27 |
> | 3724 | VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+140% · −33,3%** | +33% · −6,3% | +23% | −8,5% | 1,2 | 1,11 → 1,48 | +19% | 0,14 |
> | 3725 | Donchian + BB explosão + 1ª vela 80 + Quinta + Onda ⚠️ | **+198% · −49,1%** | +47% · −8,6% | +30% | −8,1% | 2,1 | 0,93 → 1,50 | +24% | 0,06 |
> | 3726 | ADX + VWAP + BB explosão + IFR + Rompe 200 | **+174% · −59,0%** | +46% · −13,7% | +29% | −8,0% | 2,1 | 1,01 → 1,39 | +18% | 0,26 |
> | 3727 | BB explosão + GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+139% · −46,3%** | +38% · −9,1% | +26% | −8,3% | 1,6 | 1,22 → 1,20 | +20% | 0,03 |
> | 3728 | ADX + VWAP + BB explosão + MACD + Tendência | **+190% · −72,3%** | +51% · −18,9% | +33% | −9,5% | 2,2 | 1,02 → 1,34 | +21% | 0,38 |
> | 3729 | Donchian + GPS médias + Rompe 200 + Onda | **+186% · −40,7%** | +54% · −11,0% | +32% | −10,2% | 1,9 | 1,13 → 1,24 | +27% | 0,27 |
> | 3730 | ADX + VWAP + MACD + Quinta + Bollinger ⚠️ | **+188% · −42,8%** | +42% · −8,3% | +27% | −6,9% | 2,1 | 0,89 → 1,56 | +16% | 0,20 |
> | 3731 | VWAP + GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+232% · −51,7%** | +48% · −11,9% | +30% | −14,3% | 1,2 | 1,15 → 1,40 | +25% | 0,34 |
> | 3732 | VWAP + BB explosão + IFR + Tendência + Onda | **+197% · −57,7%** | +50% · −12,8% | +34% | −9,9% | 2,2 | 1,01 → 1,35 | +24% | 0,35 |
> | 3733 | ADX + BB explosão + MACD + Tendência + Onda | **+219% · −69,1%** | +55% · −17,0% | +35% | −10,3% | 2,2 | 0,89 → 1,51 | +27% | 0,32 |
> | 3734 | VWAP + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+153% · −54,9%** | +47% · −15,7% | +32% | −11,4% | 1,7 | 1,15 → 1,26 | +18% | 0,31 |
> | 3735 | Pullback | **+32% · −9,1%** | +32% · −9,1% | +25% | −4,6% | 2,8 | 1,87 → 0,62 | +11% | — |
> | 3736 | ADX + VWAP + Donchian + BB explosão + 1ª vela 80 ⚠️ | **+212% · −64,9%** | +55% · −15,3% | +32% | −9,5% | 2,1 | 0,98 → 1,44 | +21% | 0,31 |
> | 3737 | VWAP + GPS médias + MACD + Quinta + Bollinger ⚠️ | **+184% · −45,4%** | +42% · −9,8% | +27% | −11,7% | 1,2 | 1,23 → 1,24 | +22% | 0,17 |
> | 3738 | VWAP + Donchian + GPS médias + Rompe 200 + Bollinger | **+233% · −47,1%** | +50% · −10,5% | +29% | −10,6% | 1,5 | 1,44 → 1,14 | +17% | 0,28 |
> | 3739 | MACD + Quinta + Pullback + Onda ⚠️ | **+108% · −22,9%** | +34% · −5,0% | +27% | −6,3% | 2,2 | 0,92 → 1,49 | +22% | −0,04 |
> | 3740 | MACD + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+201% · −32,5%** | +41% · −5,8% | +28% | −8,1% | 1,9 | 0,69 → 1,83 | +15% | 0,16 |
> | 3741 | VWAP + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+137% · −37,7%** | +35% · −7,6% | +27% | −7,8% | 1,8 | 1,25 → 1,15 | +19% | 0,14 |
> | 3742 | VWAP + Donchian + MACD + Pullback | **+159% · −38,7%** | +46% · −10,7% | +30% | −11,7% | 1,5 | 1,28 → 1,19 | +19% | 0,23 |
> | 3743 | BB explosão + GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+176% · −50,2%** | +45% · −11,2% | +29% | −11,3% | 1,4 | 1,17 → 1,29 | +22% | 0,25 |
> | 3744 | MACD + 1ª vela 80 + Quinta ⚠️ | **+90% · −19,3%** | +36% · −5,4% | +27% | −8,2% | 1,7 | 0,90 → 1,63 | +16% | −0,06 |
> | 3745 | ADX + VWAP + Donchian + Rompe 200 | **+166% · −46,8%** | +50% · −12,1% | +30% | −8,0% | 2,1 | 1,05 → 1,28 | +18% | 0,20 |
> | 3746 | VWAP + Donchian + BB explosão + IFR | **+173% · −54,6%** | +54% · −15,4% | +33% | −11,9% | 1,7 | 1,15 → 1,24 | +15% | 0,44 |
> | 3747 | Donchian + BB explosão + GPS médias + MACD | **+178% · −60,0%** | +59% · −17,5% | +34% | −12,8% | 1,7 | 1,21 → 1,18 | +20% | 0,48 |
> | 3748 | ADX + VWAP + Donchian | **+155% · −49,4%** | +60% · −17,0% | +34% | −8,8% | 2,4 | 0,95 → 1,33 | +15% | 0,28 |
> | 3749 | ADX + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+199% · −43,2%** | +45% · −8,3% | +31% | −7,4% | 2,4 | 0,64 → 1,71 | +18% | 0,16 |
> | 3750 | VWAP + Pôr do sol + Tendência | **+94% · −29,7%** | +39% · −9,9% | +29% | −7,3% | 2,2 | 1,24 → 1,08 | +18% | 0,11 |

> [!example]- Combinações 3751 a 3780 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3751 | BB explosão + GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+134% · −50,3%** | +37% · −10,7% | +25% | −6,0% | 2,0 | 1,70 → 0,98 | +13% | 0,07 |
> | 3752 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+128% · −46,7%** | +34% · −10,2% | +25% | −9,4% | 1,3 | 1,20 → 1,27 | +17% | 0,03 |
> | 3753 | BB explosão + Pôr do sol + Rompe 200 + Tendência + Onda | **+151% · −48,7%** | +39% · −9,5% | +28% | −7,2% | 2,1 | 1,04 → 1,30 | +23% | 0,12 |
> | 3754 | VWAP + MACD + Pôr do sol + Rompe 200 + Tendência | **+139% · −37,1%** | +36% · −7,8% | +27% | −7,9% | 1,8 | 1,19 → 1,16 | +20% | 0,17 |
> | 3755 | ADX + VWAP + MACD + 1ª vela 80 + Bollinger ⚠️ | **+237% · −46,1%** | +49% · −9,3% | +30% | −9,6% | 1,8 | 0,84 → 1,68 | +19% | 0,33 |
> | 3756 | GPS médias + Pôr do sol + Bollinger + Onda | **+173% · −35,0%** | +46% · −8,2% | +28% | −7,8% | 1,9 | 0,99 → 1,47 | +20% | 0,05 |
> | 3757 | BB explosão + GPS médias + Pôr do sol + Pullback + Onda | **+153% · −49,5%** | +42% · −10,1% | +28% | −8,0% | 1,8 | 1,13 → 1,22 | +23% | 0,04 |
> | 3758 | Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+109% · −18,2%** | +33% · −3,8% | +23% | −4,4% | 2,3 | 0,68 → 1,76 | +15% | −0,02 |
> | 3759 | BB explosão + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+141% · −50,1%** | +45% · −13,8% | +28% | −10,1% | 1,5 | 1,25 → 1,18 | +18% | 0,25 |
> | 3760 | VWAP + Quinta + Tendência ⚠️ | **+92% · −33,3%** | +38% · −10,4% | +29% | −7,2% | 2,2 | 1,31 → 1,06 | +16% | 0,01 |
> | 3761 | ADX + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+159% · −36,7%** | +39% · −6,7% | +27% | −5,8% | 2,5 | 0,59 → 1,71 | +19% | 0,01 |
> | 3762 | ADX + BB explosão + Pôr do sol + Quinta ⚠️ | **+113% · −49,4%** | +38% · −12,5% | +25% | −5,6% | 2,1 | 0,92 → 1,48 | +19% | 0,02 |
> | 3763 | ADX + BB explosão + GPS médias + MACD | **+168% · −63,0%** | +57% · −18,8% | +33% | −9,7% | 2,1 | 1,01 → 1,34 | +24% | 0,36 |
> | 3764 | MACD + Pôr do sol + Rompe 200 + Tendência + Onda | **+167% · −37,9%** | +39% · −7,3% | +29% | −8,3% | 2,0 | 1,00 → 1,43 | +24% | 0,15 |
> | 3765 | MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+150% · −25,6%** | +42% · −5,9% | +31% | −9,2% | 1,9 | 0,86 → 1,64 | +20% | 0,09 |
> | 3766 | VWAP + Donchian + IFR + Pôr do sol + Onda | **+213% · −39,7%** | +48% · −8,1% | +31% | −8,6% | 2,1 | 0,95 → 1,46 | +20% | 0,16 |
> | 3767 | ADX + Pullback + Rompe 200 + Onda | **+139% · −33,3%** | +42% · −8,3% | +28% | −7,1% | 2,2 | 0,90 → 1,49 | +22% | 0,09 |
> | 3768 | VWAP + BB explosão + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+168% · −47,5%** | +41% · −10,3% | +28% | −10,3% | 1,5 | 1,11 → 1,39 | +18% | 0,24 |
> | 3769 | Pôr do sol + Tendência + Onda | **+117% · −26,6%** | +44% · −8,3% | +32% | −8,9% | 2,2 | 0,93 → 1,45 | +25% | 0,09 |
> | 3770 | BB explosão + GPS médias + IFR + Rompe 200 + Onda | **+187% · −52,5%** | +48% · −11,2% | +31% | −9,8% | 1,8 | 1,08 → 1,32 | +25% | 0,30 |
> | 3771 | VWAP + Donchian + Pôr do sol + 1ª vela 80 ⚠️ | **+157% · −39,1%** | +44% · −10,2% | +28% | −10,6% | 1,4 | 1,11 → 1,39 | +18% | 0,13 |
> | 3772 | ADX + BB explosão + Pullback + Onda | **+150% · −55,9%** | +48% · −14,7% | +31% | −7,3% | 2,5 | 0,84 → 1,46 | +24% | 0,14 |
> | 3773 | ADX + VWAP + BB explosão + IFR | **+163% · −59,9%** | +52% · −16,7% | +32% | −8,7% | 2,2 | 0,92 → 1,43 | +20% | 0,33 |
> | 3774 | ADX + VWAP + Quinta + Tendência + Onda ⚠️ | **+190% · −53,5%** | +46% · −10,1% | +31% | −8,1% | 2,3 | 0,90 → 1,45 | +22% | 0,10 |
> | 3775 | VWAP + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+97% · −24,4%** | +28% · −4,6% | +23% | −7,2% | 1,4 | 1,28 → 1,20 | +15% | 0,00 |
> | 3776 | VWAP + BB explosão + IFR + Pôr do sol + Quinta ⚠️ | **+128% · −39,9%** | +35% · −7,3% | +25% | −7,5% | 1,6 | 1,14 → 1,30 | +16% | 0,04 |
> | 3777 | VWAP + IFR + Quinta + Bollinger + Onda ⚠️ | **+195% · −32,5%** | +41% · −6,2% | +28% | −8,1% | 1,9 | 0,91 → 1,58 | +20% | 0,09 |
> | 3778 | VWAP + Donchian + GPS médias + Pullback | **+184% · −47,9%** | +53% · −13,3% | +31% | −10,9% | 1,7 | 1,54 → 1,06 | +15% | 0,20 |
> | 3779 | ADX + Donchian + BB explosão + Rompe 200 + Onda | **+198% · −61,5%** | +52% · −14,1% | +31% | −7,6% | 2,4 | 0,88 → 1,43 | +25% | 0,24 |
> | 3780 | BB explosão + MACD + Pullback + Bollinger + Onda | **+192% · −40,4%** | +43% · −7,7% | +28% | −8,7% | 1,8 | 0,98 → 1,50 | +23% | 0,17 |

> [!example]- Combinações 3781 a 3810 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3781 | VWAP + Donchian + GPS médias + Pullback + Onda | **+210% · −48,7%** | +51% · −10,6% | +32% | −11,7% | 1,6 | 1,18 → 1,20 | +24% | 0,22 |
> | 3782 | VWAP + GPS médias + Quinta + Tendência + Onda ⚠️ | **+183% · −46,8%** | +46% · −9,3% | +31% | −9,6% | 1,9 | 1,12 → 1,22 | +26% | 0,10 |
> | 3783 | BB explosão + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+133% · −36,5%** | +34% · −7,0% | +25% | −8,0% | 1,5 | 1,07 → 1,44 | +19% | 0,04 |
> | 3784 | VWAP + Donchian + Quinta + Pullback + Rompe 200 ⚠️ | **+145% · −44,3%** | +36% · −9,5% | +25% | −6,8% | 1,7 | 1,61 → 1,04 | +13% | 0,06 |
> | 3785 | GPS médias + MACD + Pôr do sol + Bollinger + Onda | **+217% · −38,9%** | +45% · −8,0% | +29% | −8,5% | 1,8 | 0,96 → 1,52 | +20% | 0,12 |
> | 3786 | VWAP + GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+226% · −51,4%** | +52% · −11,4% | +34% | −11,9% | 1,8 | 1,07 → 1,36 | +29% | 0,28 |
> | 3787 | Donchian + BB explosão + MACD + Pôr do sol | **+150% · −47,5%** | +46% · −12,2% | +29% | −8,8% | 1,8 | 1,08 → 1,31 | +19% | 0,17 |
> | 3788 | VWAP + IFR + Pullback + Rompe 200 + Onda | **+158% · −33,2%** | +38% · −6,2% | +28% | −8,7% | 1,7 | 1,09 → 1,34 | +21% | 0,16 |
> | 3789 | VWAP + GPS médias + Pullback + Rompe 200 + Bollinger | **+180% · −42,0%** | +40% · −8,7% | +25% | −9,1% | 1,4 | 1,67 → 1,07 | +16% | 0,17 |
> | 3790 | ADX + VWAP + Donchian + BB explosão + GPS médias | **+186% · −72,8%** | +59% · −19,6% | +33% | −10,6% | 1,9 | 1,11 → 1,21 | +18% | 0,41 |
> | 3791 | ADX + VWAP + Pôr do sol + Rompe 200 + Bollinger | **+161% · −38,0%** | +38% · −6,9% | +24% | −5,9% | 1,9 | 0,98 → 1,47 | +16% | 0,11 |
> | 3792 | VWAP + Pullback + Tendência + Onda | **+144% · −37,6%** | +43% · −9,4% | +32% | −9,7% | 2,0 | 1,10 → 1,22 | +25% | 0,21 |
> | 3793 | ADX + BB explosão + MACD + Quinta ⚠️ | **+135% · −56,1%** | +44% · −15,3% | +28% | −6,8% | 2,3 | 0,84 → 1,49 | +23% | 0,11 |
> | 3794 | VWAP + Donchian + Bollinger | **+153% · −31,4%** | +54% · −10,4% | +30% | −12,5% | 1,3 | 1,21 → 1,22 | +17% | 0,35 |
> | 3795 | VWAP + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+125% · −31,0%** | +36% · −7,4% | +24% | −9,7% | 1,2 | 1,05 → 1,54 | +18% | 0,09 |
> | 3796 | BB explosão + Pullback + Bollinger + Onda | **+150% · −39,5%** | +43% · −9,5% | +28% | −7,8% | 1,9 | 1,01 → 1,43 | +23% | 0,14 |
> | 3797 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Onda ⚠️ | **+222% · −64,0%** | +57% · −13,2% | +34% | −11,0% | 1,9 | 1,03 → 1,37 | +28% | 0,31 |
> | 3798 | Donchian + GPS médias + MACD + Rompe 200 + Onda | **+222% · −45,5%** | +51% · −9,8% | +32% | −10,2% | 1,9 | 1,07 → 1,32 | +29% | 0,28 |
> | 3799 | BB explosão + Pôr do sol + Pullback + Rompe 200 | **+80% · −34,0%** | +29% · −8,2% | +22% | −4,2% | 2,1 | 1,58 → 0,99 | +12% | −0,03 |
> | 3800 | VWAP + Donchian + MACD + Pôr do sol + Bollinger | **+210% · −39,5%** | +44% · −7,9% | +27% | −10,4% | 1,4 | 1,12 → 1,37 | +19% | 0,22 |
> | 3801 | Donchian + Quinta + Onda ⚠️ | **+126% · −30,5%** | +48% · −8,7% | +30% | −7,1% | 2,4 | 0,87 → 1,43 | +24% | −0,09 |
> | 3802 | BB explosão + MACD + Quinta + Tendência + Onda ⚠️ | **+172% · −54,1%** | +43% · −11,4% | +31% | −8,5% | 2,1 | 0,97 → 1,39 | +24% | 0,15 |
> | 3803 | BB explosão + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+221% · −42,9%** | +49% · −9,1% | +33% | −10,2% | 2,0 | 0,82 → 1,64 | +21% | 0,26 |
> | 3804 | BB explosão + IFR + Quinta + Onda ⚠️ | **+140% · −34,7%** | +43% · −8,0% | +29% | −7,5% | 2,2 | 0,86 → 1,52 | +24% | 0,03 |
> | 3805 | 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+120% · −29,9%** | +36% · −7,2% | +27% | −7,3% | 1,9 | 0,96 → 1,51 | +21% | 0,10 |
> | 3806 | Donchian + BB explosão + GPS médias + MACD + Rompe 200 | **+189% · −61,0%** | +51% · −14,4% | +31% | −10,9% | 1,6 | 1,28 → 1,15 | +18% | 0,36 |
> | 3807 | ADX + VWAP + Pullback + Bollinger + Onda | **+210% · −41,2%** | +46% · −7,6% | +29% | −7,7% | 2,1 | 0,89 → 1,54 | +18% | 0,20 |
> | 3808 | VWAP + BB explosão + Rompe 200 + Bollinger + Tendência | **+175% · −56,3%** | +43% · −12,2% | +28% | −8,8% | 1,7 | 1,31 → 1,14 | +14% | 0,31 |
> | 3809 | ADX + VWAP + Pullback | **+106% · −40,4%** | +44% · −12,8% | +29% | −7,8% | 2,0 | 1,06 → 1,26 | +12% | 0,11 |
> | 3810 | BB explosão + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+151% · −37,0%** | +38% · −6,6% | +27% | −7,2% | 2,0 | 0,97 → 1,46 | +23% | 0,08 |

> [!example]- Combinações 3811 a 3840 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3811 | VWAP + BB explosão + MACD + Bollinger + Tendência | **+199% · −60,2%** | +47% · −13,6% | +31% | −11,0% | 1,6 | 1,15 → 1,25 | +19% | 0,43 |
> | 3812 | Donchian + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+224% · −38,7%** | +47% · −7,4% | +31% | −9,4% | 1,9 | 0,91 → 1,56 | +25% | 0,25 |
> | 3813 | ADX + VWAP + GPS médias + Quinta ⚠️ | **+145% · −46,9%** | +47% · −12,0% | +28% | −8,1% | 1,9 | 1,09 → 1,24 | +21% | 0,09 |
> | 3814 | ADX + MACD + Quinta ⚠️ | **+110% · −34,1%** | +44% · −11,1% | +29% | −7,5% | 2,2 | 0,76 → 1,64 | +18% | 0,05 |
> | 3815 | VWAP + BB explosão + IFR + Bollinger | **+166% · −41,1%** | +47% · −11,0% | +29% | −10,8% | 1,5 | 1,12 → 1,35 | +17% | 0,35 |
> | 3816 | ADX + MACD + Pôr do sol | **+112% · −32,9%** | +44% · −10,5% | +29% | −7,1% | 2,3 | 0,67 → 1,68 | +17% | 0,02 |
> | 3817 | VWAP + Donchian + Rompe 200 + Tendência + Onda | **+202% · −51,4%** | +48% · −11,3% | +32% | −9,8% | 2,0 | 1,09 → 1,23 | +24% | 0,31 |
> | 3818 | Donchian + GPS médias + Onda | **+174% · −39,7%** | +65% · −14,1% | +37% | −11,5% | 2,1 | 1,04 → 1,28 | +28% | 0,32 |
> | 3819 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+200% · −47,9%** | +47% · −8,5% | +30% | −8,1% | 2,1 | 0,88 → 1,52 | +24% | 0,12 |
> | 3820 | ADX + Donchian + BB explosão + MACD + Onda | **+217% · −66,7%** | +57% · −15,5% | +34% | −8,7% | 2,4 | 0,80 → 1,50 | +27% | 0,32 |
> | 3821 | VWAP + GPS médias + IFR + MACD | **+179% · −44,6%** | +51% · −12,3% | +33% | −14,2% | 1,4 | 1,17 → 1,27 | +25% | 0,36 |
> | 3822 | BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+99% · −35,4%** | +33% · −9,1% | +23% | −6,2% | 1,7 | 1,05 → 1,40 | +17% | 0,03 |
> | 3823 | VWAP + GPS médias + MACD + Tendência | **+177% · −50,9%** | +52% · −13,6% | +34% | −13,1% | 1,7 | 1,27 → 1,15 | +23% | 0,39 |
> | 3824 | ADX + VWAP + Donchian + BB explosão + Quinta ⚠️ | **+173% · −66,0%** | +48% · −15,9% | +29% | −7,7% | 2,1 | 1,02 → 1,29 | +17% | 0,18 |
> | 3825 | VWAP + GPS médias + IFR + Rompe 200 | **+155% · −39,6%** | +46% · −10,5% | +29% | −11,2% | 1,5 | 1,37 → 1,15 | +19% | 0,27 |
> | 3826 | ADX + BB explosão + MACD + Pôr do sol | **+137% · −55,2%** | +44% · −14,9% | +28% | −6,4% | 2,4 | 0,78 → 1,52 | +22% | 0,08 |
> | 3827 | VWAP + BB explosão + GPS médias + IFR + Pôr do sol | **+165% · −55,5%** | +45% · −12,1% | +29% | −10,8% | 1,5 | 1,22 → 1,19 | +18% | 0,18 |
> | 3828 | MACD + Pôr do sol + Quinta ⚠️ | **+56% · −12,1%** | +26% · −3,7% | +22% | −4,4% | 2,0 | 0,92 → 1,48 | +18% | 0,02 |
> | 3829 | BB explosão + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+112% · −32,4%** | +31% · −5,3% | +24% | −5,2% | 2,1 | 1,01 → 1,33 | +22% | −0,05 |
> | 3830 | IFR + Rompe 200 + Onda | **+114% · −23,4%** | +43% · −7,1% | +30% | −7,7% | 2,3 | 0,83 → 1,53 | +26% | 0,23 |
> | 3831 | VWAP + Donchian + BB explosão + Rompe 200 + Tendência | **+177% · −73,0%** | +48% · −16,3% | +31% | −9,1% | 2,0 | 1,30 → 1,08 | +13% | 0,38 |
> | 3832 | VWAP + Donchian + GPS médias + Pôr do sol + Quinta ⚠️ | **+176% · −42,2%** | +43% · −8,6% | +27% | −8,6% | 1,6 | 1,39 → 1,12 | +18% | 0,03 |
> | 3833 | Pôr do sol + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+122% · −20,9%** | +31% · −3,4% | +22% | −4,7% | 1,9 | 0,88 → 1,60 | +16% | 0,01 |
> | 3834 | MACD + Pôr do sol + Tendência + Onda | **+155% · −34,4%** | +44% · −8,3% | +32% | −9,2% | 2,1 | 0,90 → 1,49 | +25% | 0,18 |
> | 3835 | VWAP + Donchian + Pôr do sol + Pullback + Rompe 200 | **+147% · −43,7%** | +36% · −9,3% | +25% | −6,9% | 1,7 | 1,54 → 1,06 | +14% | 0,06 |
> | 3836 | Donchian + 1ª vela 80 + Onda ⚠️ | **+169% · −37,4%** | +59% · −11,6% | +35% | −10,6% | 2,1 | 0,82 → 1,60 | +27% | 0,23 |
> | 3837 | BB explosão + Pôr do sol + Tendência + Onda | **+141% · −48,8%** | +44% · −12,6% | +31% | −7,9% | 2,3 | 0,95 → 1,35 | +25% | 0,12 |
> | 3838 | ADX + GPS médias + Onda | **+155% · −47,1%** | +62% · −16,7% | +36% | −8,7% | 2,6 | 0,77 → 1,43 | +25% | 0,22 |
> | 3839 | ADX + VWAP + GPS médias + Pôr do sol + Rompe 200 | **+158% · −47,7%** | +42% · −9,4% | +26% | −7,6% | 1,8 | 1,12 → 1,23 | +20% | 0,09 |
> | 3840 | VWAP + 1ª vela 80 + Pullback ⚠️ | **+88% · −32,7%** | +36% · −11,2% | +27% | −12,0% | 1,2 | 1,19 → 1,25 | +17% | 0,05 |

> [!example]- Combinações 3841 a 3870 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3841 | VWAP + Pôr do sol + Bollinger + Tendência + Onda | **+195% · −39,0%** | +43% · −7,1% | +29% | −8,1% | 2,0 | 0,98 → 1,41 | +23% | 0,18 |
> | 3842 | VWAP + BB explosão + Pullback + Tendência | **+133% · −61,7%** | +43% · −16,9% | +30% | −8,8% | 2,0 | 1,41 → 1,05 | +12% | 0,24 |
> | 3843 | VWAP + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+116% · −30,0%** | +30% · −5,5% | +21% | −7,3% | 1,2 | 1,70 → 1,07 | +14% | 0,07 |
> | 3844 | VWAP + Donchian + BB explosão + Quinta + Bollinger ⚠️ | **+181% · −51,5%** | +44% · −10,4% | +26% | −9,4% | 1,5 | 1,20 → 1,19 | +14% | 0,19 |
> | 3845 | BB explosão + 1ª vela 80 + Quinta ⚠️ | **+86% · −31,1%** | +36% · −10,2% | +25% | −6,9% | 1,8 | 1,00 → 1,43 | +16% | −0,15 |
> | 3846 | VWAP + Donchian + MACD + Pullback + Rompe 200 | **+171% · −43,4%** | +41% · −9,0% | +28% | −9,9% | 1,5 | 1,35 → 1,14 | +17% | 0,20 |
> | 3847 | BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+130% · −47,5%** | +53% · −17,7% | +32% | −12,4% | 1,5 | 1,16 → 1,21 | +21% | 0,31 |
> | 3848 | VWAP + BB explosão + GPS médias + IFR + Quinta ⚠️ | **+163% · −56,4%** | +44% · −12,5% | +29% | −10,8% | 1,5 | 1,26 → 1,17 | +17% | 0,16 |
> | 3849 | ADX + VWAP + GPS médias + 1ª vela 80 ⚠️ | **+183% · −53,1%** | +55% · −14,8% | +33% | −10,7% | 1,8 | 1,00 → 1,42 | +24% | 0,28 |
> | 3850 | VWAP + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+118% · −29,2%** | +30% · −5,3% | +21% | −7,4% | 1,2 | 1,61 → 1,10 | +15% | 0,06 |
> | 3851 | GPS médias + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+168% · −38,4%** | +40% · −7,3% | +27% | −8,1% | 1,8 | 1,02 → 1,42 | +19% | 0,04 |
> | 3852 | VWAP + Donchian + MACD + 1ª vela 80 + Quinta ⚠️ | **+194% · −41,0%** | +43% · −8,3% | +29% | −11,6% | 1,4 | 1,09 → 1,41 | +21% | 0,13 |
> | 3853 | VWAP + Donchian + MACD + Rompe 200 + Bollinger | **+207% · −41,5%** | +45% · −8,4% | +27% | −11,2% | 1,3 | 1,17 → 1,26 | +20% | 0,30 |
> | 3854 | VWAP + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+137% · −31,8%** | +34% · −5,9% | +26% | −8,8% | 1,5 | 1,12 → 1,31 | +20% | 0,12 |
> | 3855 | Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+81% · −21,5%** | +29% · −4,9% | +23% | −5,0% | 2,0 | 1,06 → 1,21 | +23% | 0,01 |
> | 3856 | ADX + VWAP + Pôr do sol + Tendência + Onda | **+192% · −53,1%** | +47% · −9,9% | +31% | −8,1% | 2,3 | 0,86 → 1,46 | +21% | 0,15 |
> | 3857 | VWAP + GPS médias + MACD + Rompe 200 + Tendência | **+188% · −52,7%** | +46% · −11,2% | +31% | −11,0% | 1,7 | 1,33 → 1,12 | +20% | 0,30 |
> | 3858 | Donchian + Quinta + Rompe 200 + Onda ⚠️ | **+138% · −28,6%** | +41% · −6,9% | +27% | −6,8% | 2,1 | 0,99 → 1,35 | +25% | 0,02 |
> | 3859 | ADX + VWAP + Donchian + Bollinger + Onda | **+263% · −50,2%** | +56% · −8,9% | +32% | −8,9% | 2,2 | 0,84 → 1,54 | +19% | 0,28 |
> | 3860 | IFR + MACD + Rompe 200 + Onda | **+152% · −31,4%** | +43% · −7,4% | +31% | −8,3% | 2,2 | 0,81 → 1,55 | +25% | 0,25 |
> | 3861 | ADX + VWAP + Donchian + MACD + Rompe 200 | **+202% · −50,3%** | +49% · −10,3% | +30% | −8,7% | 2,0 | 1,00 → 1,36 | +20% | 0,25 |
> | 3862 | Donchian + BB explosão | **+104% · −48,0%** | +61% · −25,2% | +34% | −10,5% | 2,0 | 1,13 → 1,10 | +10% | 0,67 |
> | 3863 | VWAP + IFR + Pôr do sol | **+92% · −20,7%** | +37% · −6,6% | +27% | −8,5% | 1,7 | 1,08 → 1,34 | +15% | 0,02 |
> | 3864 | GPS médias + Pôr do sol | **+77% · −21,6%** | +44% · −10,3% | +27% | −7,2% | 1,9 | 1,48 → 1,03 | +17% | −0,24 |
> | 3865 | VWAP + GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+128% · −37,0%** | +33% · −7,3% | +24% | −6,7% | 1,6 | 1,64 → 1,03 | +17% | −0,04 |
> | 3866 | MACD + Bollinger | **+87% · −16,8%** | +47% · −7,9% | +29% | −10,1% | 1,6 | 0,93 → 1,58 | +20% | 0,38 |
> | 3867 | Quinta + Pullback + Rompe 200 ⚠️ | **+48% · −19,8%** | +24% · −6,2% | +20% | −3,1% | 2,3 | 2,05 → 0,69 | +13% | 0,04 |
> | 3868 | VWAP + IFR + Pullback + Onda | **+146% · −30,5%** | +42% · −7,2% | +30% | −9,4% | 1,9 | 1,00 → 1,40 | +20% | 0,13 |
> | 3869 | BB explosão + IFR + Pôr do sol + Onda | **+142% · −32,7%** | +43% · −7,5% | +29% | −7,4% | 2,3 | 0,80 → 1,54 | +23% | 0,07 |
> | 3870 | ADX + BB explosão + GPS médias + 1ª vela 80 + Onda ⚠️ | **+206% · −64,0%** | +56% · −15,7% | +33% | −9,2% | 2,2 | 0,85 → 1,49 | +21% | 0,26 |

> [!example]- Combinações 3871 a 3900 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3871 | VWAP + Donchian + Tendência + Onda | **+191% · −47,6%** | +56% · −12,0% | +36% | −11,0% | 2,1 | 1,02 → 1,27 | +27% | 0,39 |
> | 3872 | BB explosão + Quinta + Pullback + Rompe 200 ⚠️ | **+78% · −36,1%** | +29% · −8,5% | +22% | −4,4% | 2,0 | 1,68 → 0,94 | +10% | 0,02 |
> | 3873 | ADX + VWAP + Pôr do sol + Bollinger | **+148% · −35,2%** | +43% · −8,1% | +26% | −6,1% | 2,1 | 0,84 → 1,54 | +13% | 0,16 |
> | 3874 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+147% · −45,2%** | +37% · −9,9% | +25% | −10,5% | 1,2 | 1,22 → 1,20 | +21% | 0,12 |
> | 3875 | ADX + VWAP + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+145% · −38,4%** | +37% · −6,9% | +25% | −6,4% | 2,0 | 0,90 → 1,52 | +17% | 0,05 |
> | 3876 | Donchian + BB explosão + GPS médias + Quinta + Onda ⚠️ | **+183% · −59,7%** | +51% · −12,5% | +31% | −9,5% | 1,9 | 1,08 → 1,23 | +23% | 0,15 |
> | 3877 | VWAP + MACD + Pullback + Tendência + Onda | **+181% · −40,6%** | +43% · −8,6% | +32% | −10,3% | 1,8 | 1,05 → 1,30 | +25% | 0,25 |
> | 3878 | BB explosão + MACD + Pôr do sol + Tendência + Onda | **+175% · −52,7%** | +44% · −10,8% | +31% | −8,5% | 2,1 | 0,92 → 1,40 | +24% | 0,19 |
> | 3879 | VWAP + Donchian + 1ª vela 80 + Rompe 200 ⚠️ | **+155% · −46,6%** | +44% · −13,0% | +28% | −11,7% | 1,3 | 1,16 → 1,27 | +19% | 0,24 |
> | 3880 | VWAP + Donchian + 1ª vela 80 + Pullback + Onda ⚠️ | **+213% · −46,3%** | +47% · −9,9% | +31% | −11,2% | 1,6 | 1,04 → 1,43 | +22% | 0,18 |
> | 3881 | VWAP + IFR + Pôr do sol + Bollinger + Onda | **+197% · −32,5%** | +42% · −6,2% | +28% | −8,0% | 1,9 | 0,86 → 1,60 | +19% | 0,13 |
> | 3882 | VWAP + Donchian + GPS médias + Pullback + Rompe 200 | **+196% · −52,4%** | +46% · −12,1% | +29% | −9,5% | 1,7 | 1,59 → 1,03 | +15% | 0,20 |
> | 3883 | ADX + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+157% · −40,9%** | +46% · −9,9% | +30% | −7,1% | 2,4 | 0,59 → 1,68 | +17% | 0,13 |
> | 3884 | VWAP + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+133% · −42,1%** | +41% · −11,1% | +27% | −12,3% | 1,2 | 1,20 → 1,21 | +22% | 0,01 |
> | 3885 | BB explosão + GPS médias + IFR + Onda | **+176% · −50,7%** | +55% · −13,7% | +34% | −11,2% | 1,9 | 1,00 → 1,35 | +28% | 0,35 |
> | 3886 | ADX + VWAP + MACD + Pôr do sol + Bollinger | **+191% · −41,8%** | +43% · −8,0% | +27% | −7,1% | 2,0 | 0,83 → 1,58 | +15% | 0,20 |
> | 3887 | ADX + VWAP + BB explosão + Pullback + Rompe 200 | **+137% · −58,3%** | +39% · −13,2% | +26% | −7,7% | 1,7 | 1,13 → 1,17 | +14% | 0,16 |
> | 3888 | BB explosão + IFR + Pôr do sol + Rompe 200 + Onda | **+154% · −35,1%** | +38% · −6,4% | +27% | −7,1% | 2,0 | 0,91 → 1,48 | +23% | 0,10 |
> | 3889 | Donchian + Pôr do sol + Onda | **+128% · −32,2%** | +48% · −9,4% | +30% | −7,0% | 2,5 | 0,80 → 1,46 | +23% | 0,01 |
> | 3890 | VWAP + GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+145% · −46,3%** | +37% · −10,1% | +25% | −10,3% | 1,2 | 1,28 → 1,18 | +20% | 0,07 |
> | 3891 | Donchian + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+176% · −35,6%** | +41% · −7,0% | +28% | −7,5% | 2,0 | 0,95 → 1,42 | +25% | 0,09 |
> | 3892 | VWAP + MACD + Pôr do sol + Tendência | **+128% · −36,6%** | +39% · −9,4% | +29% | −9,3% | 1,8 | 1,11 → 1,20 | +22% | 0,23 |
> | 3893 | BB explosão + IFR + MACD + Quinta + Onda ⚠️ | **+176% · −38,5%** | +42% · −7,5% | +30% | −8,3% | 2,1 | 0,84 → 1,54 | +23% | 0,11 |
> | 3894 | VWAP + GPS médias + Pôr do sol + Tendência + Onda | **+186% · −45,2%** | +46% · −8,7% | +31% | −9,8% | 1,8 | 1,08 → 1,23 | +26% | 0,15 |
> | 3895 | VWAP + GPS médias + MACD + Pôr do sol + Pullback | **+154% · −39,6%** | +38% · −8,0% | +27% | −10,5% | 1,3 | 1,36 → 1,15 | +20% | 0,05 |
> | 3896 | BB explosão + MACD + Pôr do sol + Bollinger | **+132% · −35,7%** | +39% · −8,3% | +25% | −7,8% | 1,6 | 1,00 → 1,48 | +19% | 0,11 |
> | 3897 | VWAP + Donchian + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+195% · −63,7%** | +54% · −15,6% | +32% | −14,0% | 1,4 | 1,18 → 1,19 | +18% | 0,37 |
> | 3898 | VWAP + IFR + MACD + 1ª vela 80 ⚠️ | **+170% · −35,8%** | +46% · −9,1% | +32% | −12,8% | 1,5 | 0,97 → 1,54 | +21% | 0,31 |
> | 3899 | MACD + Pôr do sol + Pullback + Rompe 200 + Onda | **+121% · −26,2%** | +31% · −4,5% | +25% | −6,2% | 1,9 | 0,97 → 1,43 | +22% | 0,03 |
> | 3900 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+167% · −58,5%** | +44% · −14,4% | +29% | −12,2% | 1,3 | 1,31 → 1,16 | +17% | 0,18 |

> [!example]- Combinações 3901 a 3930 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3901 | Donchian + BB explosão + MACD + Rompe 200 | **+147% · −49,8%** | +46% · −13,2% | +29% | −9,9% | 1,7 | 1,13 → 1,20 | +17% | 0,33 |
> | 3902 | VWAP + MACD + 1ª vela 80 + Pullback ⚠️ | **+125% · −33,0%** | +37% · −8,0% | +28% | −12,8% | 1,2 | 1,12 → 1,36 | +19% | 0,13 |
> | 3903 | VWAP + GPS médias + Pullback + Bollinger + Onda | **+204% · −43,8%** | +45% · −9,2% | +28% | −11,3% | 1,4 | 1,14 → 1,26 | +25% | 0,20 |
> | 3904 | VWAP + Donchian + Rompe 200 + Bollinger | **+166% · −36,9%** | +45% · −9,4% | +26% | −10,1% | 1,3 | 1,31 → 1,16 | +16% | 0,25 |
> | 3905 | VWAP + GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+232% · −47,5%** | +51% · −10,6% | +33% | −12,0% | 1,7 | 0,97 → 1,48 | +28% | 0,26 |
> | 3906 | ADX + Pullback + Onda | **+127% · −34,2%** | +50% · −10,4% | +32% | −8,6% | 2,3 | 0,78 → 1,56 | +20% | 0,08 |
> | 3907 | ADX + VWAP + Donchian + BB explosão + Pôr do sol | **+175% · −65,4%** | +49% · −15,4% | +29% | −7,7% | 2,1 | 0,98 → 1,31 | +18% | 0,18 |
> | 3908 | VWAP + GPS médias + MACD + Quinta + Pullback ⚠️ | **+152% · −39,3%** | +38% · −7,9% | +27% | −10,3% | 1,3 | 1,42 → 1,12 | +19% | 0,04 |
> | 3909 | ADX + Rompe 200 + Bollinger + Onda | **+174% · −38,3%** | +47% · −9,1% | +28% | −7,2% | 2,2 | 0,68 → 1,68 | +19% | 0,15 |
> | 3910 | Pôr do sol + Pullback + Rompe 200 | **+49% · −19,3%** | +24% · −6,0% | +20% | −3,0% | 2,3 | 1,90 → 0,76 | +14% | −0,02 |
> | 3911 | VWAP + BB explosão + IFR + Quinta + Rompe 200 ⚠️ | **+126% · −44,7%** | +35% · −8,8% | +25% | −8,4% | 1,4 | 1,18 → 1,17 | +14% | 0,12 |
> | 3912 | VWAP + GPS médias + MACD + Pôr do sol + Bollinger | **+186% · −45,7%** | +42% · −9,9% | +26% | −11,9% | 1,2 | 1,17 → 1,26 | +23% | 0,19 |
> | 3913 | ADX + BB explosão + Pôr do sol + Quinta + Onda ⚠️ | **+143% · −50,8%** | +39% · −9,5% | +26% | −5,2% | 2,6 | 0,64 → 1,53 | +19% | −0,01 |
> | 3914 | ADX + GPS médias + MACD + Rompe 200 + Onda | **+204% · −49,0%** | +50% · −9,8% | +31% | −8,6% | 2,1 | 0,87 → 1,46 | +24% | 0,19 |
> | 3915 | Donchian + MACD + Quinta + Onda ⚠️ | **+164% · −32,9%** | +46% · −8,1% | +30% | −8,1% | 2,2 | 0,85 → 1,48 | +25% | 0,08 |
> | 3916 | VWAP + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+98% · −40,2%** | +32% · −10,8% | +24% | −10,3% | 1,1 | 1,29 → 1,17 | +17% | 0,10 |
> | 3917 | VWAP + Donchian + GPS médias + MACD + Pôr do sol | **+197% · −47,4%** | +48% · −10,5% | +30% | −12,4% | 1,4 | 1,19 → 1,18 | +22% | 0,20 |
> | 3918 | VWAP + BB explosão + Pôr do sol + Pullback + Bollinger | **+137% · −38,7%** | +35% · −7,4% | +23% | −8,1% | 1,3 | 1,34 → 1,15 | +14% | 0,08 |
> | 3919 | VWAP + IFR + MACD + Pullback + Onda | **+186% · −37,5%** | +42% · −7,3% | +31% | −9,8% | 1,8 | 0,96 → 1,45 | +21% | 0,19 |
> | 3920 | ADX + VWAP + GPS médias + MACD + 1ª vela 80 ⚠️ | **+220% · −54,7%** | +52% · −12,0% | +32% | −11,6% | 1,7 | 0,98 → 1,46 | +24% | 0,29 |
> | 3921 | IFR + MACD + Onda | **+140% · −27,6%** | +50% · −8,8% | +35% | −10,0% | 2,3 | 0,70 → 1,62 | +25% | 0,32 |
> | 3922 | VWAP + BB explosão + MACD + Pullback + Bollinger | **+162% · −46,3%** | +39% · −9,4% | +26% | −11,3% | 1,2 | 1,18 → 1,22 | +17% | 0,24 |
> | 3923 | ADX + GPS médias + Rompe 200 + Onda | **+167% · −47,2%** | +52% · −12,2% | +31% | −8,0% | 2,3 | 0,87 → 1,39 | +25% | 0,18 |
> | 3924 | VWAP + GPS médias + Tendência | **+144% · −47,3%** | +56% · −16,9% | +35% | −11,9% | 1,9 | 1,39 → 1,05 | +18% | 0,33 |
> | 3925 | 1ª vela 80 + Pullback + Onda ⚠️ | **+108% · −21,5%** | +41% · −6,4% | +30% | −8,6% | 2,0 | 0,84 → 1,59 | +20% | 0,04 |
> | 3926 | Donchian + BB explosão + Rompe 200 + Bollinger + Onda | **+212% · −51,8%** | +48% · −10,0% | +29% | −8,9% | 1,8 | 1,01 → 1,38 | +22% | 0,25 |
> | 3927 | VWAP + Donchian + GPS médias + MACD + Quinta ⚠️ | **+194% · −47,3%** | +47% · −10,5% | +30% | −12,2% | 1,4 | 1,24 → 1,16 | +21% | 0,17 |
> | 3928 | Donchian + GPS médias + MACD + Onda | **+210% · −43,2%** | +59% · −11,6% | +35% | −12,0% | 1,9 | 1,00 → 1,35 | +31% | 0,35 |
> | 3929 | ADX + 1ª vela 80 + Onda ⚠️ | **+144% · −40,7%** | +55% · −13,8% | +34% | −8,6% | 2,5 | 0,46 → 1,73 | +15% | 0,16 |
> | 3930 | ADX + VWAP + GPS médias + MACD + Quinta ⚠️ | **+180% · −50,3%** | +46% · −10,2% | +29% | −9,2% | 1,8 | 1,03 → 1,33 | +22% | 0,14 |

> [!example]- Combinações 3931 a 3960 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3931 | ADX + BB explosão + Quinta + Rompe 200 ⚠️ | **+111% · −49,8%** | +38% · −13,0% | +25% | −6,0% | 2,0 | 0,98 → 1,33 | +16% | 0,07 |
> | 3932 | Donchian + MACD + 1ª vela 80 + Onda ⚠️ | **+210% · −36,9%** | +54% · −8,4% | +35% | −11,2% | 1,9 | 0,82 → 1,60 | +26% | 0,30 |
> | 3933 | ADX + VWAP + GPS médias + Pôr do sol | **+147% · −45,7%** | +47% · −11,5% | +28% | −8,0% | 1,9 | 1,03 → 1,26 | +20% | 0,09 |
> | 3934 | ADX + BB explosão + MACD + Bollinger + Onda | **+223% · −59,0%** | +51% · −12,4% | +31% | −8,1% | 2,3 | 0,68 → 1,62 | +20% | 0,28 |
> | 3935 | MACD + Pôr do sol + Pullback + Onda | **+110% · −23,1%** | +34% · −5,1% | +26% | −6,5% | 2,1 | 0,85 → 1,51 | +21% | 0,00 |
> | 3936 | ADX + BB explosão + Bollinger + Onda | **+183% · −55,5%** | +53% · −14,7% | +31% | −7,4% | 2,4 | 0,64 → 1,59 | +19% | 0,27 |
> | 3937 | ADX + VWAP + 1ª vela 80 + Quinta ⚠️ | **+133% · −36,8%** | +41% · −8,6% | +27% | −6,8% | 2,2 | 0,77 → 1,57 | +15% | 0,04 |
> | 3938 | VWAP + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+178% · −40,5%** | +41% · −8,1% | +30% | −9,2% | 1,9 | 0,94 → 1,44 | +25% | 0,07 |
> | 3939 | ADX + VWAP + BB explosão + GPS médias + Bollinger | **+200% · −65,3%** | +53% · −15,4% | +30% | −9,8% | 1,7 | 1,07 → 1,27 | +19% | 0,40 |
> | 3940 | ADX + VWAP + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+211% · −56,8%** | +49% · −11,8% | +29% | −9,0% | 1,8 | 0,88 → 1,55 | +21% | 0,32 |
> | 3941 | GPS médias + MACD + Rompe 200 + Bollinger + Onda | **+214% · −40,9%** | +46% · −8,6% | +29% | −9,6% | 1,7 | 1,01 → 1,42 | +22% | 0,23 |
> | 3942 | BB explosão + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+184% · −39,1%** | +41% · −7,6% | +27% | −7,6% | 1,8 | 0,80 → 1,65 | +15% | 0,05 |
> | 3943 | ADX + BB explosão + Pôr do sol + Rompe 200 | **+113% · −48,4%** | +39% · −12,3% | +25% | −5,5% | 2,2 | 0,91 → 1,37 | +18% | 0,02 |
> | 3944 | VWAP + BB explosão + GPS médias + Pôr do sol + Tendência | **+161% · −63,7%** | +46% · −15,5% | +30% | −9,3% | 1,8 | 1,31 → 1,07 | +16% | 0,21 |
> | 3945 | BB explosão + GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+228% · −56,0%** | +52% · −13,1% | +31% | −10,4% | 1,7 | 0,97 → 1,46 | +19% | 0,27 |
> | 3946 | VWAP + BB explosão + MACD + 1ª vela 80 + Tendência ⚠️ | **+186% · −58,5%** | +46% · −12,9% | +32% | −12,4% | 1,6 | 1,08 → 1,31 | +22% | 0,35 |
> | 3947 | BB explosão + GPS médias + MACD + 1ª vela 80 ⚠️ | **+164% · −48,7%** | +51% · −13,5% | +32% | −13,4% | 1,4 | 1,10 → 1,31 | +23% | 0,30 |
> | 3948 | VWAP + BB explosão + IFR + 1ª vela 80 ⚠️ | **+156% · −42,7%** | +46% · −11,3% | +31% | −12,0% | 1,5 | 1,02 → 1,43 | +20% | 0,26 |
> | 3949 | VWAP + BB explosão + Quinta + Pullback + Bollinger ⚠️ | **+134% · −40,6%** | +35% · −8,0% | +23% | −8,0% | 1,3 | 1,41 → 1,12 | +13% | 0,09 |
> | 3950 | ADX + VWAP + GPS médias + Pullback + Onda | **+194% · −49,9%** | +49% · −10,4% | +31% | −9,5% | 1,9 | 1,00 → 1,33 | +23% | 0,17 |
> | 3951 | BB explosão + GPS médias + IFR + MACD + Onda | **+207% · −53,5%** | +53% · −11,7% | +34% | −11,4% | 1,8 | 0,97 → 1,40 | +27% | 0,34 |
> | 3952 | VWAP + BB explosão + GPS médias + Quinta + Tendência ⚠️ | **+159% · −64,4%** | +45% · −15,8% | +30% | −9,3% | 1,8 | 1,35 → 1,05 | +15% | 0,19 |
> | 3953 | GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+171% · −39,0%** | +40% · −7,2% | +27% | −8,0% | 1,8 | 0,97 → 1,44 | +19% | 0,10 |
> | 3954 | ADX + BB explosão + GPS médias + Quinta + Onda ⚠️ | **+170% · −59,8%** | +49% · −13,9% | +30% | −7,7% | 2,3 | 0,88 → 1,36 | +23% | 0,11 |
> | 3955 | ADX + GPS médias + MACD + Onda | **+191% · −48,9%** | +57% · −12,7% | +35% | −9,6% | 2,3 | 0,79 → 1,50 | +24% | 0,24 |
> | 3956 | ADX + Pôr do sol + Quinta ⚠️ | **+84% · −29,4%** | +36% · −9,6% | +24% | −6,0% | 1,8 | 0,80 → 1,64 | +13% | 0,08 |
> | 3957 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+135% · −36,2%** | +35% · −7,1% | +25% | −8,2% | 1,5 | 1,00 → 1,47 | +18% | 0,08 |
> | 3958 | VWAP + Donchian + BB explosão + IFR + MACD | **+203% · −57,7%** | +52% · −13,0% | +33% | −12,5% | 1,6 | 1,08 → 1,30 | +19% | 0,44 |
> | 3959 | BB explosão + Pôr do sol + Quinta ⚠️ | **+55% · −27,5%** | +27% · −8,0% | +20% | −3,8% | 1,9 | 1,08 → 1,10 | +14% | −0,09 |
> | 3960 | VWAP + Donchian + Quinta + Pullback + Onda ⚠️ | **+167% · −39,1%** | +40% · −7,7% | +28% | −9,0% | 1,6 | 1,09 → 1,26 | +19% | 0,05 |

> [!example]- Combinações 3961 a 3990 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3961 | VWAP + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+180% · −33,4%** | +41% · −6,4% | +29% | −8,9% | 1,9 | 0,82 → 1,62 | +21% | 0,04 |
> | 3962 | MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+92% · −19,0%** | +36% · −5,5% | +27% | −8,6% | 1,7 | 0,80 → 1,67 | +16% | 0,11 |
> | 3963 | Donchian + BB explosão + GPS médias + Pôr do sol + Onda | **+185% · −58,9%** | +51% · −12,3% | +31% | −9,4% | 1,9 | 1,04 → 1,25 | +24% | 0,17 |
> | 3964 | ADX + VWAP + BB explosão + IFR + MACD | **+195% · −63,2%** | +50% · −14,1% | +32% | −9,8% | 2,0 | 0,89 → 1,46 | +21% | 0,34 |
> | 3965 | Donchian + Pôr do sol + Rompe 200 + Onda | **+140% · −29,7%** | +41% · −7,3% | +27% | −6,7% | 2,1 | 0,93 → 1,37 | +24% | 0,07 |
> | 3966 | VWAP + Donchian + IFR + Rompe 200 + Onda | **+209% · −41,9%** | +48% · −8,9% | +31% | −10,0% | 1,8 | 1,00 → 1,36 | +23% | 0,28 |
> | 3967 | ADX + VWAP + Donchian + MACD | **+190% · −53,5%** | +56% · −13,7% | +33% | −10,0% | 2,1 | 0,92 → 1,39 | +18% | 0,34 |
> | 3968 | VWAP + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+168% · −39,2%** | +37% · −7,9% | +26% | −11,1% | 1,2 | 0,99 → 1,54 | +19% | 0,16 |
> | 3969 | GPS médias + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+196% · −42,3%** | +44% · −8,3% | +30% | −9,9% | 1,7 | 0,91 → 1,51 | +19% | 0,05 |
> | 3970 | BB explosão + GPS médias + Pullback | **+113% · −49,2%** | +48% · −18,1% | +30% | −8,4% | 2,0 | 1,54 → 0,95 | +12% | 0,18 |
> | 3971 | VWAP + BB explosão + MACD + Quinta + Tendência ⚠️ | **+145% · −59,5%** | +40% · −13,5% | +29% | −9,8% | 1,6 | 1,12 → 1,16 | +18% | 0,21 |
> | 3972 | VWAP + Donchian + BB explosão + Pôr do sol + Bollinger | **+184% · −50,0%** | +45% · −10,3% | +26% | −9,6% | 1,4 | 1,14 → 1,21 | +15% | 0,20 |
> | 3973 | VWAP + BB explosão + Pullback + Rompe 200 + Tendência | **+143% · −64,4%** | +39% · −13,6% | +28% | −8,1% | 1,9 | 1,47 → 1,02 | +12% | 0,21 |
> | 3974 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+198% · −57,7%** | +48% · −13,8% | +29% | −13,5% | 1,2 | 1,15 → 1,25 | +19% | 0,35 |
> | 3975 | BB explosão + IFR + MACD + Pôr do sol + Onda | **+178% · −37,3%** | +43% · −7,4% | +30% | −8,2% | 2,1 | 0,79 → 1,56 | +23% | 0,14 |
> | 3976 | BB explosão + GPS médias + MACD + Pullback + Onda | **+173% · −53,8%** | +46% · −11,7% | +31% | −10,4% | 1,7 | 1,06 → 1,27 | +26% | 0,19 |
> | 3977 | Donchian + BB explosão + Bollinger + Onda | **+200% · −52,2%** | +55% · −12,9% | +31% | −9,6% | 2,0 | 0,92 → 1,43 | +25% | 0,31 |
> | 3978 | ADX + Bollinger + Onda | **+160% · −35,5%** | +57% · −11,5% | +32% | −8,8% | 2,2 | 0,53 → 1,75 | +18% | 0,23 |
> | 3979 | Donchian + BB explosão + Pôr do sol + Quinta + Onda ⚠️ | **+157% · −42,5%** | +41% · −7,6% | +27% | −6,7% | 2,1 | 0,92 → 1,37 | +23% | 0,01 |
> | 3980 | Donchian + BB explosão + GPS médias | **+149% · −58,0%** | +64% · −21,9% | +35% | −12,1% | 1,8 | 1,31 → 1,05 | +14% | 0,57 |
> | 3981 | Donchian + MACD + Pôr do sol + Rompe 200 + Onda | **+178% · −35,8%** | +41% · −7,0% | +28% | −7,5% | 2,0 | 0,90 → 1,44 | +25% | 0,13 |
> | 3982 | BB explosão + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+150% · −43,4%** | +38% · −9,2% | +27% | −8,5% | 1,7 | 0,99 → 1,42 | +21% | 0,11 |
> | 3983 | MACD + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+200% · −34,9%** | +41% · −6,5% | +28% | −9,1% | 1,7 | 0,76 → 1,71 | +16% | 0,22 |
> | 3984 | VWAP + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+127% · −31,4%** | +37% · −7,6% | +24% | −10,0% | 1,1 | 0,97 → 1,57 | +17% | 0,18 |
> | 3985 | VWAP + Donchian + Pôr do sol + Quinta ⚠️ | **+114% · −32,4%** | +36% · −7,4% | +24% | −7,3% | 1,5 | 1,22 → 1,13 | +15% | −0,00 |
> | 3986 | VWAP + Quinta + Rompe 200 + Tendência ⚠️ | **+103% · −39,3%** | +34% · −9,9% | +26% | −6,5% | 2,0 | 1,40 → 1,01 | +15% | 0,06 |
> | 3987 | BB explosão + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+178% · −39,5%** | +42% · −8,2% | +30% | −9,9% | 1,7 | 0,90 → 1,53 | +21% | 0,12 |
> | 3988 | ADX + VWAP + IFR + Onda | **+178% · −42,2%** | +52% · −9,7% | +34% | −9,0% | 2,3 | 0,68 → 1,57 | +18% | 0,22 |
> | 3989 | GPS médias + Rompe 200 + Bollinger + Onda | **+171% · −36,9%** | +47% · −9,1% | +28% | −9,6% | 1,6 | 1,05 → 1,33 | +22% | 0,20 |
> | 3990 | ADX + VWAP + BB explosão + Pullback | **+127% · −60,4%** | +44% · −17,1% | +28% | −8,2% | 1,9 | 1,05 → 1,21 | +15% | 0,20 |

> [!example]- Combinações 3991 a 4020 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3991 | VWAP + Donchian + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+169% · −52,9%** | +43% · −12,1% | +28% | −10,9% | 1,4 | 1,11 → 1,28 | +17% | 0,12 |
> | 3992 | VWAP + Donchian + MACD + Tendência + Onda | **+223% · −51,8%** | +53% · −11,4% | +35% | −11,3% | 1,9 | 0,98 → 1,32 | +27% | 0,43 |
> | 3993 | GPS médias + Quinta ⚠️ | **+75% · −20,6%** | +43% · −9,7% | +27% | −7,2% | 1,9 | 1,61 → 0,94 | +19% | −0,22 |
> | 3994 | VWAP + GPS médias + IFR + Quinta + Onda ⚠️ | **+187% · −42,4%** | +45% · −9,1% | +30% | −10,1% | 1,7 | 1,02 → 1,34 | +25% | 0,07 |
> | 3995 | Donchian + BB explosão + MACD + Bollinger + Onda | **+238% · −54,3%** | +53% · −10,5% | +32% | −9,8% | 1,9 | 0,90 → 1,47 | +27% | 0,34 |
> | 3996 | VWAP + Donchian + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+196% · −41,4%** | +44% · −8,4% | +29% | −11,8% | 1,4 | 1,03 → 1,42 | +20% | 0,21 |
> | 3997 | BB explosão + GPS médias + Bollinger | **+139% · −49,3%** | +55% · −18,3% | +30% | −10,9% | 1,5 | 1,30 → 1,11 | +16% | 0,42 |
> | 3998 | ADX + BB explosão + Rompe 200 + Bollinger + Onda | **+196% · −52,4%** | +47% · −10,0% | +28% | −7,0% | 2,2 | 0,75 → 1,54 | +20% | 0,20 |
> | 3999 | VWAP + BB explosão + Pullback + Tendência + Onda | **+159% · −59,3%** | +43% · −13,2% | +31% | −10,3% | 1,7 | 1,08 → 1,19 | +21% | 0,25 |
> | 4000 | VWAP + Donchian + BB explosão + Quinta + Pullback ⚠️ | **+149% · −58,3%** | +40% · −11,6% | +26% | −8,3% | 1,6 | 1,37 → 1,06 | +12% | 0,10 |
> | 4001 | GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+156% · −38,1%** | +45% · −9,2% | +30% | −9,2% | 1,8 | 0,92 → 1,47 | +18% | −0,04 |
> | 4002 | VWAP + Donchian + BB explosão + Pôr do sol + Pullback | **+152% · −54,5%** | +41% · −11,1% | +26% | −8,4% | 1,6 | 1,32 → 1,08 | +13% | 0,10 |
> | 4003 | Quinta + Pullback + Onda ⚠️ | **+71% · −19,2%** | +31% · −5,5% | +25% | −5,5% | 2,2 | 0,91 → 1,32 | +21% | −0,08 |
> | 4004 | BB explosão + GPS médias + Pullback + Rompe 200 + Onda | **+150% · −53,0%** | +42% · −11,5% | +28% | −9,4% | 1,6 | 1,17 → 1,12 | +21% | 0,19 |
> | 4005 | VWAP + GPS médias + Rompe 200 + Tendência + Onda | **+181% · −49,5%** | +46% · −10,8% | +31% | −11,1% | 1,6 | 1,11 → 1,15 | +25% | 0,26 |
> | 4006 | ADX + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+131% · −33,0%** | +35% · −6,3% | +24% | −5,0% | 2,3 | 0,67 → 1,59 | +19% | −0,01 |
> | 4007 | Donchian + MACD + Pôr do sol + Onda | **+166% · −33,1%** | +46% · −8,2% | +30% | −8,0% | 2,2 | 0,79 → 1,50 | +24% | 0,14 |
> | 4008 | ADX + BB explosão + GPS médias + Pôr do sol + Onda | **+173% · −58,9%** | +50% · −13,5% | +30% | −7,6% | 2,3 | 0,84 → 1,39 | +23% | 0,11 |
> | 4009 | VWAP + Donchian + BB explosão + MACD + Pullback | **+170% · −58,1%** | +45% · −12,9% | +29% | −11,9% | 1,4 | 1,20 → 1,14 | +15% | 0,29 |
> | 4010 | VWAP + Donchian + IFR + Onda | **+197% · −39,5%** | +55% · −10,3% | +34% | −11,0% | 1,9 | 0,92 → 1,41 | +22% | 0,32 |
> | 4011 | VWAP + Rompe 200 + Bollinger + Tendência + Onda | **+192% · −40,9%** | +43% · −8,1% | +29% | −9,4% | 1,7 | 1,03 → 1,31 | +25% | 0,26 |
> | 4012 | Pôr do sol + Pullback + Rompe 200 + Onda | **+83% · −20,6%** | +29% · −4,7% | +23% | −4,9% | 2,1 | 0,98 → 1,24 | +22% | 0,03 |
> | 4013 | BB explosão + GPS médias + Pullback + Onda | **+140% · −51,2%** | +47% · −14,0% | +30% | −10,2% | 1,7 | 1,09 → 1,15 | +23% | 0,18 |
> | 4014 | VWAP + Pôr do sol + Rompe 200 + Tendência | **+104% · −37,4%** | +34% · −9,6% | +26% | −6,7% | 1,9 | 1,33 → 1,03 | +16% | 0,10 |
> | 4015 | VWAP + GPS médias + Rompe 200 + Tendência | **+154% · −49,5%** | +47% · −14,0% | +31% | −9,9% | 1,8 | 1,45 → 1,01 | +16% | 0,26 |
> | 4016 | VWAP + IFR + MACD + Pôr do sol + Rompe 200 | **+139% · −31,8%** | +35% · −5,9% | +26% | −8,8% | 1,5 | 1,06 → 1,33 | +19% | 0,14 |
> | 4017 | BB explosão + MACD + 1ª vela 80 + Quinta ⚠️ | **+121% · −33,9%** | +38% · −8,4% | +27% | −9,4% | 1,5 | 0,96 → 1,49 | +18% | 0,01 |
> | 4018 | GPS médias + MACD | **+100% · −28,2%** | +55% · −14,5% | +34% | −15,1% | 1,4 | 1,17 → 1,15 | +28% | 0,29 |
> | 4019 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+148% · −37,6%** | +38% · −6,7% | +25% | −6,6% | 1,9 | 0,84 → 1,54 | +17% | 0,09 |
> | 4020 | ADX + VWAP + BB explosão + MACD + Pullback | **+161% · −63,5%** | +43% · −14,4% | +29% | −9,1% | 1,8 | 1,01 → 1,32 | +19% | 0,20 |

> [!example]- Combinações 4021 a 4050 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4021 | BB explosão + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+187% · −39,8%** | +41% · −7,6% | +27% | −7,7% | 1,8 | 0,74 → 1,68 | +15% | 0,10 |
> | 4022 | VWAP + BB explosão + IFR + MACD + Bollinger | **+203% · −47,7%** | +46% · −10,6% | +30% | −11,7% | 1,4 | 1,04 → 1,39 | +20% | 0,38 |
> | 4023 | ADX + BB explosão + 1ª vela 80 + Onda ⚠️ | **+166% · −52,4%** | +52% · −14,5% | +33% | −8,3% | 2,4 | 0,58 → 1,61 | +17% | 0,19 |
> | 4024 | VWAP + GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+170% · −47,1%** | +41% · −10,3% | +28% | −13,1% | 1,2 | 1,12 → 1,30 | +25% | 0,10 |
> | 4025 | ADX + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+157% · −39,8%** | +39% · −7,3% | +27% | −6,5% | 2,2 | 0,66 → 1,60 | +20% | 0,04 |
> | 4026 | VWAP + GPS médias + Pôr do sol + Bollinger | **+146% · −38,3%** | +42% · −9,9% | +25% | −10,7% | 1,2 | 1,31 → 1,14 | +20% | 0,12 |
> | 4027 | BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+88% · −29,2%** | +37% · −9,3% | +25% | −7,2% | 1,7 | 0,91 → 1,48 | +16% | −0,04 |
> | 4028 | Donchian + BB explosão + GPS médias + Rompe 200 | **+159% · −58,2%** | +53% · −17,0% | +30% | −9,9% | 1,8 | 1,37 → 1,03 | +13% | 0,40 |
> | 4029 | ADX + VWAP + MACD + 1ª vela 80 + Quinta ⚠️ | **+173% · −42,1%** | +42% · −8,0% | +28% | −8,5% | 1,8 | 0,79 → 1,59 | +17% | 0,11 |
> | 4030 | BB explosão + GPS médias + Rompe 200 + Bollinger | **+151% · −49,5%** | +46% · −13,5% | +27% | −9,0% | 1,5 | 1,39 → 1,07 | +15% | 0,30 |
> | 4031 | VWAP + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+180% · −39,8%** | +42% · −7,9% | +30% | −9,3% | 1,9 | 0,90 → 1,46 | +24% | 0,17 |
> | 4032 | MACD + Rompe 200 + Tendência + Onda | **+153% · −37,9%** | +44% · −9,5% | +32% | −10,7% | 1,8 | 0,96 → 1,38 | +26% | 0,27 |
> | 4033 | ADX + BB explosão + MACD + 1ª vela 80 + Onda ⚠️ | **+202% · −56,1%** | +50% · −11,8% | +32% | −9,0% | 2,2 | 0,62 → 1,63 | +18% | 0,22 |
> | 4034 | Donchian + BB explosão + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+196% · −53,6%** | +47% · −10,7% | +30% | −9,5% | 1,8 | 0,93 → 1,43 | +25% | 0,24 |
> | 4035 | ADX + VWAP + Donchian + 1ª vela 80 + Onda ⚠️ | **+238% · −54,7%** | +55% · −9,5% | +33% | −10,1% | 2,0 | 0,78 → 1,56 | +20% | 0,25 |
> | 4036 | ADX + VWAP + GPS médias + MACD + Pôr do sol | **+182% · −49,3%** | +46% · −9,8% | +29% | −9,2% | 1,8 | 0,98 → 1,35 | +21% | 0,15 |
> | 4037 | VWAP + BB explosão + GPS médias + MACD + Tendência | **+174% · −67,8%** | +50% · −17,2% | +33% | −13,0% | 1,5 | 1,20 → 1,12 | +19% | 0,43 |
> | 4038 | ADX + VWAP + Donchian + GPS médias + Onda | **+223% · −58,1%** | +59% · −12,8% | +34% | −10,8% | 2,0 | 0,94 → 1,35 | +25% | 0,29 |
> | 4039 | Rompe 200 + Tendência + Onda | **+116% · −30,5%** | +45% · −9,9% | +32% | −10,7% | 1,8 | 1,00 → 1,30 | +28% | 0,23 |
> | 4040 | BB explosão + Pullback | **+61% · −34,9%** | +37% · −17,8% | +26% | −6,3% | 2,1 | 1,43 → 0,93 | +7% | −0,00 |
> | 4041 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+182% · −33,4%** | +41% · −6,4% | +29% | −8,9% | 1,8 | 0,77 → 1,63 | +20% | 0,13 |
> | 4042 | BB explosão + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+96% · −32,8%** | +29% · −5,5% | +22% | −5,8% | 1,5 | 1,08 → 1,25 | +17% | 0,01 |
> | 4043 | ADX + VWAP + 1ª vela 80 + Pullback + Onda ⚠️ | **+190% · −45,1%** | +45% · −7,9% | +30% | −9,0% | 1,9 | 0,80 → 1,57 | +19% | 0,14 |
> | 4044 | VWAP + BB explosão + IFR + Pôr do sol + Rompe 200 | **+128% · −43,5%** | +35% · −8,4% | +25% | −8,4% | 1,4 | 1,12 → 1,19 | +15% | 0,12 |
> | 4045 | Donchian + BB explosão + Rompe 200 | **+114% · −50,2%** | +48% · −16,3% | +28% | −8,4% | 1,8 | 1,24 → 1,05 | +10% | 0,36 |
> | 4046 | ADX + VWAP + IFR + Rompe 200 + Onda | **+191% · −42,5%** | +46% · −8,4% | +30% | −8,4% | 2,1 | 0,78 → 1,52 | +20% | 0,19 |
> | 4047 | VWAP + Donchian + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+193% · −45,9%** | +44% · −9,8% | +29% | −12,7% | 1,3 | 1,08 → 1,33 | +22% | 0,28 |
> | 4048 | BB explosão + Rompe 200 + Tendência + Onda | **+138% · −51,4%** | +44% · −13,7% | +31% | −9,4% | 1,9 | 1,00 → 1,24 | +23% | 0,27 |
> | 4049 | ADX + VWAP + BB explosão + Quinta + Bollinger ⚠️ | **+168% · −58,3%** | +43% · −12,4% | +26% | −7,1% | 1,9 | 0,93 → 1,38 | +18% | 0,20 |
> | 4050 | BB explosão + Rompe 200 + Bollinger | **+94% · −35,4%** | +38% · −11,7% | +23% | −7,5% | 1,4 | 1,18 → 1,14 | +12% | 0,20 |

> [!example]- Combinações 4051 a 4080 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4051 | 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+153% · −27,7%** | +41% · −6,3% | +27% | −8,2% | 1,7 | 0,73 → 1,71 | +14% | 0,19 |
> | 4052 | ADX + VWAP + Pôr do sol + 1ª vela 80 ⚠️ | **+135% · −38,8%** | +42% · −8,8% | +27% | −7,0% | 2,1 | 0,71 → 1,59 | +14% | 0,11 |
> | 4053 | VWAP + IFR + Rompe 200 | **+92% · −23,4%** | +37% · −7,8% | +27% | −10,0% | 1,4 | 1,14 → 1,15 | +17% | 0,21 |
> | 4054 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+135% · −40,6%** | +41% · −10,6% | +27% | −12,5% | 1,1 | 1,14 → 1,24 | +23% | 0,11 |
> | 4055 | VWAP + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+192% · −37,7%** | +41% · −7,7% | +28% | −10,9% | 1,4 | 0,94 → 1,55 | +21% | 0,18 |
> | 4056 | BB explosão + MACD + Rompe 200 + Tendência + Onda | **+171% · −55,0%** | +44% · −11,7% | +31% | −9,7% | 1,9 | 0,97 → 1,32 | +25% | 0,28 |
> | 4057 | MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+185% · −33,0%** | +47% · −7,8% | +31% | −10,5% | 1,7 | 0,64 → 1,77 | +14% | 0,28 |
> | 4058 | ADX + Pôr do sol + Quinta + Onda ⚠️ | **+119% · −31,1%** | +38% · −8,1% | +26% | −5,6% | 2,3 | 0,52 → 1,66 | +17% | −0,03 |
> | 4059 | ADX + VWAP + Rompe 200 + Tendência + Onda | **+188% · −52,9%** | +47% · −10,2% | +31% | −9,3% | 2,0 | 0,90 → 1,38 | +24% | 0,21 |
> | 4060 | VWAP + BB explosão + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+126% · −52,5%** | +34% · −12,2% | +25% | −10,8% | 1,1 | 1,23 → 1,15 | +14% | 0,13 |
> | 4061 | BB explosão + GPS médias + MACD + Pôr do sol + Rompe 200 | **+138% · −49,5%** | +39% · −10,2% | +26% | −9,2% | 1,4 | 1,19 → 1,13 | +19% | 0,11 |
> | 4062 | ADX + MACD + Quinta + Onda ⚠️ | **+144% · −37,0%** | +44% · −8,7% | +30% | −7,4% | 2,3 | 0,54 → 1,65 | +19% | 0,02 |
> | 4063 | GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+158% · −38,8%** | +45% · −9,4% | +29% | −8,9% | 1,9 | 0,87 → 1,49 | +18% | 0,07 |
> | 4064 | VWAP + IFR + MACD + Quinta ⚠️ | **+125% · −29,5%** | +38% · −7,0% | +28% | −10,2% | 1,5 | 1,02 → 1,37 | +18% | 0,11 |
> | 4065 | ADX + VWAP + IFR + MACD + Onda | **+215% · −47,0%** | +50% · −9,4% | +33% | −9,7% | 2,1 | 0,70 → 1,58 | +20% | 0,28 |
> | 4066 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+199% · −41,9%** | +45% · −8,3% | +30% | −10,1% | 1,7 | 0,87 → 1,53 | +19% | 0,13 |
> | 4067 | GPS médias + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+130% · −30,3%** | +34% · −5,9% | +24% | −6,7% | 1,6 | 1,05 → 1,24 | +21% | −0,01 |
> | 4068 | VWAP + Donchian + MACD + Bollinger | **+193% · −39,8%** | +51% · −10,3% | +30% | −13,4% | 1,3 | 1,09 → 1,30 | +21% | 0,41 |
> | 4069 | BB explosão + MACD + Rompe 200 + Bollinger | **+130% · −37,5%** | +39% · −9,0% | +25% | −8,9% | 1,4 | 1,06 → 1,32 | +18% | 0,23 |
> | 4070 | Donchian + BB explosão + GPS médias + Rompe 200 + Onda | **+180% · −63,5%** | +51% · −13,4% | +31% | −10,8% | 1,7 | 1,07 → 1,17 | +22% | 0,33 |
> | 4071 | VWAP + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+115% · −48,2%** | +38% · −13,7% | +27% | −12,2% | 1,1 | 1,15 → 1,20 | +15% | 0,12 |
> | 4072 | VWAP + Donchian + BB explosão + GPS médias + Bollinger | **+210% · −61,6%** | +55% · −14,3% | +30% | −12,6% | 1,4 | 1,25 → 1,12 | +15% | 0,42 |
> | 4073 | VWAP + GPS médias + Quinta + Bollinger ⚠️ | **+144% · −38,0%** | +42% · −9,9% | +25% | −10,5% | 1,2 | 1,39 → 1,10 | +18% | 0,11 |
> | 4074 | VWAP + GPS médias + MACD + Rompe 200 + Bollinger | **+183% · −47,5%** | +42% · −10,5% | +27% | −12,7% | 1,1 | 1,21 → 1,16 | +21% | 0,29 |
> | 4075 | GPS médias + MACD + Bollinger + Onda | **+200% · −38,9%** | +52% · −10,3% | +32% | −11,1% | 1,7 | 0,92 → 1,46 | +21% | 0,28 |
> | 4076 | VWAP + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+137% · −35,2%** | +35% · −6,4% | +27% | −7,0% | 2,0 | 0,94 → 1,29 | +21% | 0,05 |
> | 4077 | BB explosão + 1ª vela 80 + Pullback + Onda ⚠️ | **+139% · −36,3%** | +42% · −9,1% | +29% | −9,3% | 1,8 | 0,90 → 1,48 | +20% | 0,07 |
> | 4078 | VWAP + BB explosão + Pôr do sol + Tendência | **+116% · −55,0%** | +40% · −15,2% | +28% | −8,6% | 1,8 | 1,16 → 1,07 | +14% | 0,18 |
> | 4079 | VWAP + Donchian + GPS médias + Bollinger + Onda | **+250% · −51,2%** | +55% · −11,3% | +31% | −12,3% | 1,5 | 1,05 → 1,29 | +26% | 0,31 |
> | 4080 | VWAP + MACD + Rompe 200 + Tendência | **+126% · −38,4%** | +39% · −10,1% | +29% | −10,4% | 1,6 | 1,15 → 1,10 | +20% | 0,30 |

> [!example]- Combinações 4081 a 4110 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4081 | ADX + MACD + Pôr do sol + Rompe 200 + Onda | **+159% · −38,9%** | +39% · −7,0% | +27% | −6,5% | 2,2 | 0,61 → 1,62 | +20% | 0,05 |
> | 4082 | BB explosão + GPS médias + MACD + Quinta ⚠️ | **+126% · −48,7%** | +43% · −12,9% | +28% | −10,7% | 1,4 | 1,17 → 1,13 | +19% | 0,11 |
> | 4083 | VWAP + BB explosão + GPS médias + IFR | **+151% · −57,5%** | +51% · −16,6% | +32% | −13,7% | 1,4 | 1,18 → 1,13 | +16% | 0,40 |
> | 4084 | BB explosão + MACD + Quinta + Pullback + Onda ⚠️ | **+136% · −38,8%** | +36% · −7,1% | +27% | −7,7% | 1,8 | 0,94 → 1,38 | +23% | 0,01 |
> | 4085 | BB explosão + GPS médias + Quinta + Bollinger + Onda ⚠️ | **+183% · −53,2%** | +45% · −11,6% | +28% | −9,0% | 1,6 | 1,02 → 1,31 | +21% | 0,11 |
> | 4086 | VWAP + BB explosão + Quinta + Tendência ⚠️ | **+114% · −58,8%** | +39% · −15,9% | +28% | −8,5% | 1,8 | 1,21 → 1,05 | +13% | 0,14 |
> | 4087 | ADX + VWAP + Quinta + Pullback + Onda ⚠️ | **+149% · −41,7%** | +39% · −6,5% | +27% | −6,8% | 2,1 | 0,84 → 1,42 | +16% | 0,04 |
> | 4088 | VWAP + Pôr do sol + Quinta + Bollinger ⚠️ | **+86% · −24,5%** | +29% · −5,3% | +20% | −7,6% | 1,0 | 1,15 → 1,24 | +13% | 0,06 |
> | 4089 | VWAP + Donchian + Pullback | **+122% · −37,9%** | +47% · −12,8% | +30% | −10,6% | 1,6 | 1,43 → 1,03 | +13% | 0,17 |
> | 4090 | MACD + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+151% · −28,5%** | +35% · −4,8% | +25% | −6,9% | 1,7 | 0,81 → 1,58 | +17% | 0,07 |
> | 4091 | VWAP + GPS médias + IFR + Pôr do sol + Onda | **+189% · −42,3%** | +45% · −9,1% | +30% | −10,1% | 1,7 | 0,98 → 1,36 | +25% | 0,12 |
> | 4092 | ADX + VWAP + Donchian + BB explosão + Rompe 200 | **+170% · −65,9%** | +49% · −16,1% | +29% | −9,1% | 1,8 | 1,02 → 1,22 | +15% | 0,29 |
> | 4093 | VWAP + Donchian + MACD + Pôr do sol + Quinta ⚠️ | **+150% · −33,7%** | +37% · −6,9% | +26% | −9,2% | 1,4 | 1,09 → 1,25 | +17% | 0,09 |
> | 4094 | VWAP + BB explosão + MACD + 1ª vela 80 + Pullback ⚠️ | **+151% · −48,4%** | +39% · −10,7% | +28% | −12,8% | 1,2 | 1,09 → 1,30 | +19% | 0,17 |
> | 4095 | ADX + BB explosão + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+178% · −52,5%** | +46% · −11,4% | +29% | −7,8% | 2,1 | 0,68 → 1,57 | +18% | 0,16 |
> | 4096 | Donchian + BB explosão + MACD | **+136% · −50,4%** | +55% · −18,4% | +33% | −12,1% | 1,7 | 1,04 → 1,23 | +18% | 0,51 |
> | 4097 | 1ª vela 80 + Bollinger + Onda ⚠️ | **+139% · −25,6%** | +48% · −7,6% | +30% | −9,5% | 1,8 | 0,57 → 1,80 | +11% | 0,23 |
> | 4098 | VWAP + Donchian + BB explosão + Tendência + Onda | **+187% · −67,0%** | +53% · −16,4% | +34% | −11,3% | 1,9 | 1,00 → 1,22 | +22% | 0,43 |
> | 4099 | GPS médias + MACD + Rompe 200 | **+110% · −30,5%** | +44% · −10,3% | +28% | −11,3% | 1,4 | 1,27 → 1,10 | +23% | 0,20 |
> | 4100 | VWAP + BB explosão + GPS médias + IFR + MACD | **+179% · −60,4%** | +49% · −14,0% | +32% | −14,0% | 1,4 | 1,11 → 1,21 | +20% | 0,39 |
> | 4101 | ADX + VWAP + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+182% · −63,5%** | +52% · −15,5% | +31% | −11,0% | 1,7 | 0,99 → 1,33 | +22% | 0,32 |
> | 4102 | ADX + VWAP + MACD + Tendência + Onda | **+211% · −59,6%** | +51% · −12,3% | +34% | −10,6% | 2,0 | 0,82 → 1,45 | +24% | 0,32 |
> | 4103 | ADX + VWAP + MACD + Rompe 200 + Bollinger | **+189% · −44,7%** | +43% · −8,9% | +27% | −8,3% | 1,7 | 0,89 → 1,47 | +18% | 0,25 |
> | 4104 | BB explosão + GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+136% · −50,5%** | +38% · −10,6% | +26% | −9,2% | 1,4 | 1,25 → 1,10 | +18% | 0,12 |
> | 4105 | GPS médias + Bollinger + Onda | **+158% · −36,7%** | +56% · −12,0% | +31% | −10,7% | 1,7 | 0,94 → 1,40 | +21% | 0,23 |
> | 4106 | Donchian + BB explosão + 1ª vela 80 + Onda ⚠️ | **+184% · −54,0%** | +54% · −10,9% | +33% | −10,6% | 1,9 | 0,85 → 1,47 | +26% | 0,28 |
> | 4107 | VWAP + BB explosão + IFR + MACD + 1ª vela 80 ⚠️ | **+191% · −48,3%** | +45% · −10,8% | +31% | −12,8% | 1,4 | 0,97 → 1,45 | +23% | 0,31 |
> | 4108 | VWAP + Donchian + Pôr do sol + Pullback + Onda | **+169% · −40,0%** | +41% · −7,8% | +27% | −9,1% | 1,6 | 1,04 → 1,27 | +19% | 0,09 |
> | 4109 | GPS médias + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+156% · −34,1%** | +38% · −6,6% | +27% | −7,7% | 1,8 | 0,92 → 1,41 | +20% | −0,01 |
> | 4110 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+140% · −29,5%** | +34% · −5,0% | +26% | −7,1% | 1,9 | 0,63 → 1,72 | +15% | 0,02 |

> [!example]- Combinações 4111 a 4140 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4111 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+170% · −39,5%** | +38% · −8,0% | +26% | −11,3% | 1,1 | 0,92 → 1,56 | +18% | 0,22 |
> | 4112 | ADX + VWAP + Donchian + Quinta + Onda ⚠️ | **+196% · −51,7%** | +49% · −8,6% | +30% | −8,1% | 2,1 | 0,80 → 1,44 | +18% | 0,08 |
> | 4113 | ADX + VWAP + Tendência + Onda | **+177% · −55,8%** | +53% · −14,5% | +35% | −10,6% | 2,1 | 0,82 → 1,42 | +23% | 0,27 |
> | 4114 | BB explosão + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+110% · −37,8%** | +32% · −7,2% | +24% | −6,7% | 1,6 | 1,06 → 1,19 | +19% | 0,03 |
> | 4115 | ADX + VWAP + BB explosão + Tendência + Onda | **+181% · −70,9%** | +51% · −17,9% | +33% | −9,6% | 2,1 | 0,85 → 1,35 | +26% | 0,32 |
> | 4116 | VWAP + BB explosão + MACD + Pôr do sol + Tendência | **+147% · −58,2%** | +40% · −12,9% | +29% | −10,0% | 1,6 | 1,08 → 1,17 | +18% | 0,24 |
> | 4117 | VWAP + Donchian + 1ª vela 80 ⚠️ | **+143% · −39,6%** | +52% · −14,1% | +32% | −14,6% | 1,3 | 1,06 → 1,32 | +20% | 0,30 |
> | 4118 | GPS médias + Pôr do sol + Rompe 200 | **+87% · −24,3%** | +36% · −7,7% | +23% | −5,9% | 1,8 | 1,56 → 0,94 | +18% | −0,01 |
> | 4119 | VWAP + GPS médias + Tendência + Onda | **+171% · −47,5%** | +52% · −12,4% | +34% | −12,6% | 1,7 | 1,05 → 1,19 | +28% | 0,31 |
> | 4120 | VWAP + IFR + Rompe 200 + Bollinger + Onda | **+195% · −34,8%** | +42% · −6,8% | +28% | −9,4% | 1,6 | 0,92 → 1,48 | +22% | 0,23 |
> | 4121 | VWAP + BB explosão + IFR + Quinta ⚠️ | **+115% · −42,6%** | +38% · −10,7% | +27% | −9,7% | 1,5 | 1,08 → 1,22 | +15% | 0,09 |
> | 4122 | MACD + Quinta + Bollinger + Onda ⚠️ | **+138% · −24,7%** | +39% · −5,3% | +27% | −7,2% | 1,9 | 0,66 → 1,66 | +16% | 0,06 |
> | 4123 | VWAP + Bollinger + Tendência + Onda | **+179% · −37,6%** | +48% · −9,3% | +32% | −10,5% | 1,8 | 0,94 → 1,36 | +26% | 0,33 |
> | 4124 | ADX + VWAP + GPS médias + Rompe 200 | **+144% · −50,0%** | +47% · −13,3% | +28% | −9,7% | 1,6 | 1,08 → 1,16 | +20% | 0,22 |
> | 4125 | VWAP + GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+158% · −40,1%** | +38% · −8,2% | +24% | −9,1% | 1,2 | 1,40 → 1,09 | +18% | 0,12 |
> | 4126 | BB explosão + GPS médias + MACD + Pôr do sol | **+128% · −47,6%** | +43% · −12,4% | +28% | −10,7% | 1,4 | 1,11 → 1,16 | +21% | 0,11 |
> | 4127 | VWAP + Donchian + MACD + Quinta + Rompe 200 ⚠️ | **+148% · −38,8%** | +37% · −7,8% | +26% | −10,0% | 1,3 | 1,14 → 1,14 | +18% | 0,14 |
> | 4128 | VWAP + BB explosão + IFR + Pullback + Onda | **+166% · −48,3%** | +42% · −9,9% | +30% | −10,1% | 1,7 | 0,99 → 1,33 | +22% | 0,19 |
> | 4129 | MACD + Tendência + Onda | **+141% · −34,4%** | +52% · −11,6% | +37% | −12,7% | 1,9 | 0,86 → 1,43 | +27% | 0,40 |
> | 4130 | VWAP + BB explosão + GPS médias + IFR + Rompe 200 | **+161% · −59,0%** | +45% · −13,6% | +29% | −11,6% | 1,4 | 1,25 → 1,10 | +15% | 0,33 |
> | 4131 | ADX + MACD + Pôr do sol + Onda | **+147% · −36,1%** | +44% · −8,5% | +30% | −7,5% | 2,3 | 0,48 → 1,67 | +19% | 0,06 |
> | 4132 | ADX + VWAP + GPS médias + MACD + Rompe 200 | **+178% · −53,3%** | +46% · −11,3% | +29% | −10,1% | 1,6 | 1,03 → 1,27 | +23% | 0,23 |
> | 4133 | VWAP + BB explosão + GPS médias + Pullback + Bollinger | **+179% · −54,5%** | +45% · −12,0% | +27% | −10,8% | 1,4 | 1,42 → 1,06 | +14% | 0,25 |
> | 4134 | VWAP + Donchian + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+172% · −51,4%** | +44% · −11,6% | +28% | −11,1% | 1,4 | 1,06 → 1,29 | +18% | 0,17 |
> | 4135 | BB explosão + Tendência + Onda | **+128% · −51,6%** | +52% · −19,0% | +35% | −11,1% | 2,0 | 0,91 → 1,29 | +27% | 0,36 |
> | 4136 | VWAP + BB explosão + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+155% · −44,2%** | +38% · −9,5% | +25% | −10,3% | 1,2 | 1,04 → 1,38 | +18% | 0,13 |
> | 4137 | VWAP + Donchian + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+125% · −39,1%** | +33% · −7,9% | +23% | −6,6% | 1,5 | 1,32 → 1,07 | +15% | 0,03 |
> | 4138 | VWAP + Donchian + 1ª vela 80 + Bollinger + Onda ⚠️ | **+256% · −44,2%** | +51% · −9,3% | +31% | −11,9% | 1,5 | 0,89 → 1,54 | +23% | 0,29 |
> | 4139 | ADX + BB explosão + MACD + Rompe 200 | **+135% · −54,9%** | +44% · −15,0% | +29% | −7,8% | 2,0 | 0,84 → 1,40 | +21% | 0,18 |
> | 4140 | VWAP + Pullback + Bollinger | **+95% · −24,4%** | +37% · −7,8% | +24% | −11,3% | 1,0 | 1,47 → 1,08 | +15% | 0,18 |

> [!example]- Combinações 4141 a 4170 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4141 | VWAP + GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+187% · −45,6%** | +44% · −9,9% | +30% | −12,6% | 1,4 | 1,05 → 1,32 | +26% | 0,16 |
> | 4142 | BB explosão + MACD + Tendência + Onda | **+160% · −55,3%** | +49% · −15,3% | +34% | −11,0% | 2,0 | 0,89 → 1,35 | +26% | 0,38 |
> | 4143 | VWAP + Donchian + IFR + MACD + Onda | **+232% · −45,8%** | +52% · −9,8% | +34% | −11,7% | 1,8 | 0,89 → 1,43 | +23% | 0,37 |
> | 4144 | BB explosão + GPS médias + Pôr do sol + Quinta ⚠️ | **+106% · −42,7%** | +37% · −10,6% | +24% | −6,7% | 1,7 | 1,34 → 1,02 | +16% | −0,02 |
> | 4145 | ADX + VWAP + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+175% · −41,0%** | +42% · −7,6% | +28% | −8,7% | 1,8 | 0,74 → 1,61 | +16% | 0,16 |
> | 4146 | ADX + VWAP + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+109% · −36,0%** | +31% · −5,7% | +22% | −4,9% | 1,9 | 0,92 → 1,30 | +14% | 0,02 |
> | 4147 | Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+111% · −25,4%** | +30% · −4,1% | +23% | −5,3% | 2,0 | 0,72 → 1,62 | +15% | 0,00 |
> | 4148 | BB explosão + IFR + MACD + Rompe 200 + Onda | **+175% · −41,7%** | +43% · −8,0% | +30% | −9,2% | 1,9 | 0,85 → 1,46 | +24% | 0,26 |
> | 4149 | BB explosão + GPS médias + Pullback + Rompe 200 | **+123% · −51,0%** | +41% · −14,1% | +27% | −7,8% | 1,8 | 1,59 → 0,92 | +12% | 0,18 |
> | 4150 | ADX + VWAP + MACD + Pôr do sol + Quinta ⚠️ | **+134% · −37,8%** | +36% · −6,7% | +25% | −6,0% | 2,1 | 0,78 → 1,47 | +14% | 0,07 |
> | 4151 | Tendência + Onda | **+105% · −26,5%** | +57% · −13,1% | +40% | −13,7% | 2,0 | 0,88 → 1,37 | +28% | 0,32 |
> | 4152 | VWAP + GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+156% · −39,8%** | +37% · −8,3% | +24% | −8,9% | 1,2 | 1,47 → 1,06 | +17% | 0,12 |
> | 4153 | ADX + VWAP + BB explosão + GPS médias + Quinta ⚠️ | **+148% · −64,9%** | +46% · −16,0% | +28% | −9,1% | 1,7 | 1,05 → 1,17 | +18% | 0,18 |
> | 4154 | ADX + VWAP + BB explosão + Pôr do sol + Bollinger | **+171% · −57,5%** | +43% · −12,1% | +26% | −7,0% | 1,9 | 0,88 → 1,41 | +17% | 0,19 |
> | 4155 | VWAP + MACD + Bollinger + Tendência + Onda | **+220% · −44,3%** | +47% · −9,1% | +32% | −11,0% | 1,7 | 0,92 → 1,40 | +26% | 0,38 |
> | 4156 | ADX + BB explosão + MACD + Quinta + Onda ⚠️ | **+163% · −57,4%** | +44% · −11,9% | +29% | −7,4% | 2,2 | 0,63 → 1,53 | +20% | 0,09 |
> | 4157 | VWAP + Donchian + GPS médias + MACD | **+181% · −48,1%** | +55% · −13,3% | +33% | −15,8% | 1,3 | 1,16 → 1,12 | +22% | 0,42 |
> | 4158 | VWAP + GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+173% · −47,4%** | +41% · −10,4% | +28% | −13,3% | 1,1 | 1,06 → 1,32 | +24% | 0,17 |
> | 4159 | VWAP + Donchian + GPS médias + Pôr do sol | **+163% · −41,9%** | +49% · −11,0% | +29% | −11,4% | 1,4 | 1,30 → 1,07 | +18% | 0,11 |
> | 4160 | ADX + VWAP + Donchian + BB explosão | **+160% · −67,4%** | +56% · −20,7% | +32% | −9,9% | 1,9 | 0,94 → 1,25 | +17% | 0,39 |
> | 4161 | VWAP + Donchian + BB explosão + GPS médias + Pullback | **+178% · −66,5%** | +50% · −15,9% | +30% | −11,3% | 1,6 | 1,39 → 1,03 | +13% | 0,30 |
> | 4162 | VWAP + GPS médias + MACD + Bollinger | **+171% · −46,0%** | +48% · −12,7% | +29% | −15,2% | 1,1 | 1,13 → 1,19 | +23% | 0,38 |
> | 4163 | VWAP + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+97% · −26,6%** | +27% · −4,6% | +20% | −7,1% | 1,0 | 1,30 → 1,13 | +16% | 0,05 |
> | 4164 | VWAP + Donchian + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+168% · −57,1%** | +44% · −13,8% | +28% | −11,9% | 1,3 | 1,10 → 1,20 | +16% | 0,29 |
> | 4165 | VWAP + GPS médias + MACD + Tendência + Onda | **+202% · −51,0%** | +50% · −10,4% | +34% | −12,7% | 1,7 | 1,01 → 1,25 | +30% | 0,36 |
> | 4166 | Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+100% · −24,8%** | +32% · −4,7% | +25% | −5,6% | 2,1 | 0,55 → 1,70 | +13% | −0,04 |
> | 4167 | Donchian + BB explosão + MACD + 1ª vela 80 + Onda ⚠️ | **+219% · −55,9%** | +52% · −10,0% | +33% | −11,3% | 1,8 | 0,84 → 1,50 | +25% | 0,31 |
> | 4168 | VWAP + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+126% · −33,6%** | +37% · −8,3% | +24% | −11,1% | 1,0 | 1,04 → 1,39 | +20% | 0,25 |
> | 4169 | ADX + VWAP + Donchian + Pôr do sol + Onda | **+198% · −53,5%** | +49% · −8,4% | +30% | −8,1% | 2,1 | 0,76 → 1,45 | +17% | 0,12 |
> | 4170 | Donchian + BB explosão + GPS médias + Onda | **+170% · −63,6%** | +59% · −16,3% | +34% | −12,0% | 1,8 | 1,01 → 1,20 | +25% | 0,41 |

> [!example]- Combinações 4171 a 4200 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4171 | VWAP + Donchian + GPS médias + Quinta ⚠️ | **+161% · −43,7%** | +49% · −11,7% | +29% | −11,1% | 1,5 | 1,36 → 1,05 | +17% | 0,08 |
> | 4172 | GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+118% · −28,2%** | +37% · −6,5% | +26% | −6,9% | 1,8 | 0,94 → 1,30 | +20% | −0,09 |
> | 4173 | BB explosão + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+124% · −34,3%** | +38% · −8,5% | +27% | −9,6% | 1,5 | 0,88 → 1,52 | +17% | 0,07 |
> | 4174 | Donchian + BB explosão + GPS médias + MACD + Onda | **+197% · −65,5%** | +56% · −13,7% | +34% | −12,1% | 1,7 | 0,98 → 1,28 | +27% | 0,39 |
> | 4175 | VWAP + MACD + Tendência | **+116% · −37,8%** | +46% · −13,3% | +33% | −13,0% | 1,6 | 1,07 → 1,14 | +23% | 0,47 |
> | 4176 | VWAP + GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+170% · −49,1%** | +41% · −11,0% | +28% | −14,1% | 1,1 | 1,10 → 1,23 | +23% | 0,26 |
> | 4177 | GPS médias + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+196% · −43,9%** | +45% · −8,9% | +30% | −11,0% | 1,6 | 0,92 → 1,45 | +20% | 0,22 |
> | 4178 | BB explosão + GPS médias + Pôr do sol + Bollinger + Onda | **+186% · −53,8%** | +45% · −11,8% | +28% | −8,9% | 1,6 | 0,97 → 1,33 | +20% | 0,12 |
> | 4179 | VWAP + GPS médias + Quinta + Pullback + Onda ⚠️ | **+146% · −39,0%** | +38% · −8,0% | +27% | −10,4% | 1,3 | 1,11 → 1,13 | +24% | 0,02 |
> | 4180 | VWAP + IFR + Bollinger + Onda | **+181% · −32,5%** | +47% · −8,1% | +30% | −10,3% | 1,7 | 0,81 → 1,54 | +21% | 0,27 |
> | 4181 | ADX + BB explosão + MACD + Pôr do sol + Onda | **+166% · −56,5%** | +44% · −11,5% | +29% | −7,3% | 2,2 | 0,59 → 1,55 | +19% | 0,10 |
> | 4182 | VWAP + Donchian + BB explosão + Rompe 200 + Bollinger | **+180% · −53,6%** | +45% · −10,9% | +26% | −10,6% | 1,3 | 1,19 → 1,11 | +13% | 0,32 |
> | 4183 | VWAP + BB explosão + MACD + Rompe 200 + Tendência | **+143% · −60,1%** | +40% · −13,8% | +29% | −10,9% | 1,5 | 1,11 → 1,10 | +16% | 0,33 |
> | 4184 | ADX + Quinta + Rompe 200 ⚠️ | **+84% · −30,0%** | +37% · −9,5% | +24% | −6,7% | 1,7 | 0,91 → 1,40 | +18% | 0,02 |
> | 4185 | ADX + BB explosão + Quinta ⚠️ | **+100% · −52,5%** | +44% · −19,2% | +27% | −7,3% | 2,0 | 0,84 → 1,38 | +18% | 0,09 |
> | 4186 | VWAP + Donchian + GPS médias + MACD + Rompe 200 | **+192% · −50,0%** | +48% · −11,0% | +30% | −13,2% | 1,3 | 1,23 → 1,10 | +19% | 0,32 |
> | 4187 | VWAP + Donchian + Pullback + Rompe 200 + Onda | **+166% · −46,1%** | +41% · −9,9% | +28% | −10,5% | 1,4 | 1,08 → 1,17 | +21% | 0,20 |
> | 4188 | GPS médias + Quinta + Rompe 200 ⚠️ | **+85% · −25,2%** | +36% · −8,1% | +24% | −6,0% | 1,8 | 1,67 → 0,88 | +17% | 0,02 |
> | 4189 | ADX + VWAP + Pôr do sol + Quinta ⚠️ | **+98% · −37,3%** | +34% · −7,9% | +23% | −4,8% | 2,2 | 0,77 → 1,37 | +11% | 0,03 |
> | 4190 | BB explosão + IFR + Rompe 200 + Onda | **+140% · −38,0%** | +43% · −9,2% | +29% | −9,2% | 1,8 | 0,87 → 1,41 | +25% | 0,25 |
> | 4191 | Pôr do sol + Pullback + Onda | **+73% · −16,0%** | +32% · −5,2% | +25% | −5,6% | 2,1 | 0,83 → 1,35 | +20% | −0,03 |
> | 4192 | ADX + VWAP + Pôr do sol + Pullback + Onda | **+151% · −44,2%** | +39% · −6,5% | +27% | −6,9% | 2,1 | 0,79 → 1,43 | +15% | 0,06 |
> | 4193 | ADX + VWAP + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+154% · −55,1%** | +42% · −11,2% | +27% | −8,0% | 1,8 | 0,84 → 1,45 | +19% | 0,10 |
> | 4194 | VWAP + GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+132% · −40,5%** | +35% · −8,2% | +25% | −10,7% | 1,1 | 1,14 → 1,13 | +21% | 0,04 |
> | 4195 | VWAP + BB explosão + Quinta + Rompe 200 + Tendência ⚠️ | **+124% · −61,3%** | +36% · −12,6% | +26% | −7,8% | 1,7 | 1,29 → 1,02 | +13% | 0,14 |
> | 4196 | VWAP + BB explosão + Pôr do sol + Rompe 200 + Tendência | **+126% · −58,0%** | +36% · −12,2% | +26% | −7,9% | 1,7 | 1,24 → 1,03 | +14% | 0,15 |
> | 4197 | VWAP + BB explosão + GPS médias + Tendência | **+147% · −65,5%** | +52% · −20,5% | +33% | −12,1% | 1,7 | 1,28 → 1,02 | +14% | 0,43 |
> | 4198 | BB explosão + Quinta + Pullback + Onda ⚠️ | **+100% · −35,5%** | +34% · −8,3% | +25% | −6,9% | 1,8 | 0,96 → 1,25 | +22% | −0,03 |
> | 4199 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+145% · −56,2%** | +41% · −13,1% | +27% | −12,4% | 1,1 | 1,12 → 1,14 | +18% | 0,11 |
> | 4200 | VWAP + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+177% · −47,2%** | +42% · −10,2% | +30% | −10,7% | 1,6 | 0,95 → 1,36 | +26% | 0,23 |

> [!example]- Combinações 4201 a 4230 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4201 | VWAP + GPS médias + IFR + Rompe 200 + Onda | **+185% · −44,3%** | +45% · −9,6% | +30% | −11,4% | 1,5 | 1,02 → 1,27 | +26% | 0,26 |
> | 4202 | BB explosão + GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+116% · −44,8%** | +34% · −8,7% | +23% | −6,1% | 1,6 | 1,42 → 0,99 | +15% | 0,03 |
> | 4203 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+168% · −51,2%** | +44% · −11,1% | +29% | −9,6% | 1,7 | 0,93 → 1,36 | +19% | 0,05 |
> | 4204 | ADX + BB explosão + Quinta + Onda ⚠️ | **+129% · −53,8%** | +44% · −14,0% | +28% | −6,7% | 2,3 | 0,59 → 1,46 | +19% | 0,03 |
> | 4205 | VWAP + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+133% · −46,4%** | +41% · −12,8% | +27% | −13,5% | 1,1 | 1,18 → 1,13 | +20% | 0,24 |
> | 4206 | VWAP + GPS médias + MACD + Pullback | **+140% · −39,8%** | +43% · −10,4% | +29% | −13,5% | 1,2 | 1,33 → 1,08 | +20% | 0,16 |
> | 4207 | ADX + BB explosão + Pôr do sol | **+103% · −51,5%** | +45% · −18,6% | +27% | −6,8% | 2,1 | 0,75 → 1,43 | +20% | 0,00 |
> | 4208 | BB explosão + IFR + Onda | **+129% · −35,7%** | +51% · −11,7% | +34% | −10,2% | 2,0 | 0,75 → 1,48 | +25% | 0,27 |
> | 4209 | ADX + VWAP + Donchian + BB explosão + MACD | **+189% · −70,1%** | +53% · −17,5% | +32% | −10,5% | 1,8 | 0,92 → 1,32 | +20% | 0,39 |
> | 4210 | VWAP + MACD + Pôr do sol + Pullback | **+88% · −25,0%** | +30% · −6,1% | +24% | −9,7% | 1,1 | 1,14 → 1,13 | +15% | 0,03 |
> | 4211 | VWAP + Donchian + GPS médias + Pôr do sol + Rompe 200 | **+174% · −47,8%** | +43% · −10,6% | +27% | −9,6% | 1,4 | 1,37 → 1,04 | +17% | 0,13 |
> | 4212 | Donchian + BB explosão + Quinta + Rompe 200 + Onda ⚠️ | **+154% · −48,5%** | +41% · −8,9% | +27% | −8,2% | 1,7 | 0,97 → 1,26 | +21% | 0,10 |
> | 4213 | ADX + VWAP + 1ª vela 80 + Bollinger + Onda ⚠️ | **+229% · −48,2%** | +49% · −9,9% | +30% | −9,7% | 1,8 | 0,63 → 1,68 | +19% | 0,28 |
> | 4214 | MACD + Pôr do sol + Rompe 200 + Bollinger + Onda | **+154% · −28,6%** | +35% · −4,8% | +25% | −6,9% | 1,7 | 0,74 → 1,61 | +17% | 0,09 |
> | 4215 | VWAP + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+169% · −41,5%** | +38% · −8,6% | +26% | −12,1% | 1,1 | 0,98 → 1,44 | +22% | 0,28 |
> | 4216 | VWAP + Donchian + GPS médias + Quinta + Rompe 200 ⚠️ | **+172% · −48,5%** | +43% · −10,8% | +27% | −9,5% | 1,5 | 1,42 → 1,02 | +16% | 0,12 |
> | 4217 | VWAP + MACD + Quinta + Pullback ⚠️ | **+86% · −24,9%** | +30% · −6,1% | +24% | −9,5% | 1,2 | 1,22 → 1,10 | +16% | 0,01 |
> | 4218 | BB explosão + MACD + Pôr do sol + Pullback + Onda | **+138% · −36,9%** | +36% · −6,6% | +27% | −7,8% | 1,8 | 0,89 → 1,40 | +22% | 0,03 |
> | 4219 | MACD + Pôr do sol + Bollinger + Onda | **+140% · −24,6%** | +39% · −5,4% | +26% | −7,4% | 1,8 | 0,59 → 1,70 | +16% | 0,11 |
> | 4220 | VWAP + IFR + MACD + Pôr do sol | **+128% · −29,5%** | +38% · −7,0% | +28% | −10,2% | 1,5 | 0,95 → 1,39 | +17% | 0,16 |
> | 4221 | BB explosão + Bollinger | **+83% · −35,2%** | +47% · −18,2% | +26% | −8,6% | 1,5 | 1,02 → 1,24 | +13% | 0,34 |
> | 4222 | ADX + Pôr do sol + Rompe 200 | **+86% · −28,9%** | +37% · −9,4% | +24% | −5,9% | 1,9 | 0,81 → 1,46 | +17% | −0,05 |
> | 4223 | ADX + BB explosão + GPS médias + Rompe 200 + Onda | **+168% · −61,1%** | +50% · −14,6% | +30% | −9,0% | 1,9 | 0,89 → 1,31 | +24% | 0,24 |
> | 4224 | VWAP + Donchian + BB explosão + Bollinger | **+168% · −52,7%** | +51% · −14,2% | +29% | −12,4% | 1,3 | 1,10 → 1,14 | +14% | 0,42 |
> | 4225 | ADX + BB explosão + GPS médias + MACD + Onda | **+187% · −64,6%** | +54% · −14,6% | +33% | −10,2% | 2,0 | 0,81 → 1,41 | +24% | 0,29 |
> | 4226 | Donchian + BB explosão + MACD + Quinta + Onda ⚠️ | **+176% · −51,0%** | +45% · −9,8% | +30% | −9,0% | 1,9 | 0,86 → 1,37 | +26% | 0,15 |
> | 4227 | VWAP + Quinta + Pullback + Bollinger + Onda ⚠️ | **+144% · −31,2%** | +35% · −5,9% | +24% | −8,7% | 1,3 | 1,00 → 1,35 | +18% | 0,06 |
> | 4228 | ADX + VWAP + GPS médias + Bollinger + Onda | **+231% · −54,1%** | +53% · −11,8% | +31% | −10,2% | 1,8 | 0,86 → 1,43 | +24% | 0,30 |
> | 4229 | BB explosão + Pôr do sol + Pullback + Rompe 200 + Onda | **+112% · −35,9%** | +32% · −7,0% | +24% | −6,6% | 1,6 | 1,00 → 1,22 | +20% | 0,03 |
> | 4230 | ADX + MACD + Rompe 200 | **+111% · −36,3%** | +45% · −12,0% | +29% | −8,9% | 1,8 | 0,77 → 1,51 | +22% | 0,07 |

> [!example]- Combinações 4231 a 4260 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4231 | BB explosão + IFR + MACD + Onda | **+163% · −39,4%** | +48% · −9,6% | +33% | −10,6% | 1,9 | 0,75 → 1,50 | +24% | 0,32 |
> | 4232 | MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+92% · −21,6%** | +37% · −6,5% | +27% | −10,0% | 1,4 | 0,89 → 1,49 | +18% | 0,17 |
> | 4233 | VWAP + Donchian + GPS médias + 1ª vela 80 + Onda ⚠️ | **+229% · −52,2%** | +54% · −11,7% | +33% | −13,6% | 1,5 | 0,98 → 1,34 | +28% | 0,30 |
> | 4234 | GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+156% · −40,1%** | +45% · −9,9% | +30% | −10,3% | 1,6 | 0,93 → 1,38 | +19% | 0,21 |
> | 4235 | ADX + VWAP + GPS médias | **+134% · −48,2%** | +56% · −17,2% | +32% | −11,1% | 1,8 | 0,98 → 1,19 | +22% | 0,30 |
> | 4236 | ADX + VWAP + Rompe 200 + Bollinger | **+147% · −38,5%** | +43% · −9,4% | +26% | −7,9% | 1,6 | 0,91 → 1,39 | +17% | 0,23 |
> | 4237 | ADX + VWAP + MACD + Bollinger | **+175% · −43,6%** | +48% · −10,6% | +29% | −9,3% | 1,8 | 0,78 → 1,51 | +16% | 0,37 |
> | 4238 | ADX + BB explosão + GPS médias + Onda | **+158% · −61,4%** | +57% · −17,9% | +33% | −9,8% | 2,1 | 0,80 → 1,33 | +24% | 0,31 |
> | 4239 | ADX + VWAP + BB explosão + GPS médias + Pôr do sol | **+150% · −64,2%** | +46% · −15,6% | +28% | −9,1% | 1,7 | 1,00 → 1,19 | +19% | 0,17 |
> | 4240 | VWAP + Donchian + BB explosão + IFR + Onda | **+197% · −54,7%** | +52% · −12,0% | +33% | −11,5% | 1,7 | 0,92 → 1,33 | +24% | 0,37 |
> | 4241 | ADX + BB explosão + MACD | **+124% · −57,9%** | +52% · −22,1% | +32% | −9,4% | 2,1 | 0,72 → 1,45 | +24% | 0,29 |
> | 4242 | VWAP + Donchian + MACD + 1ª vela 80 ⚠️ | **+180% · −41,6%** | +50% · −11,0% | +32% | −15,1% | 1,3 | 1,00 → 1,37 | +22% | 0,37 |
> | 4243 | MACD + Quinta + Rompe 200 ⚠️ | **+57% · −13,5%** | +27% · −3,4% | +22% | −5,8% | 1,6 | 1,03 → 1,18 | +21% | −0,02 |
> | 4244 | VWAP + IFR + MACD + Bollinger + Onda | **+224% · −40,1%** | +46% · −8,2% | +31% | −10,9% | 1,6 | 0,80 → 1,54 | +22% | 0,33 |
> | 4245 | ADX + BB explosão + Quinta + Rompe 200 + Onda ⚠️ | **+140% · −50,6%** | +39% · −10,0% | +26% | −6,3% | 2,1 | 0,71 → 1,42 | +20% | 0,05 |
> | 4246 | VWAP + Tendência | **+83% · −35,7%** | +48% · −16,7% | +34% | −11,9% | 1,8 | 1,18 → 0,99 | +16% | 0,34 |
> | 4247 | MACD + Pullback + Rompe 200 + Onda | **+109% · −25,9%** | +34% · −5,9% | +27% | −8,3% | 1,7 | 0,92 → 1,36 | +24% | 0,11 |
> | 4248 | VWAP + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+180% · −35,6%** | +41% · −7,0% | +29% | −10,2% | 1,6 | 0,83 → 1,52 | +23% | 0,22 |
> | 4249 | VWAP + Donchian + Pullback + Rompe 200 | **+133% · −45,1%** | +40% · −12,1% | +26% | −9,3% | 1,5 | 1,50 → 0,98 | +13% | 0,17 |
> | 4250 | Donchian + MACD + Rompe 200 + Onda | **+164% · −35,5%** | +47% · −9,0% | +30% | −9,6% | 1,8 | 0,86 → 1,38 | +28% | 0,27 |
> | 4251 | GPS médias + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+154% · −36,2%** | +38% · −7,2% | +27% | −8,9% | 1,6 | 0,97 → 1,30 | +22% | 0,06 |
> | 4252 | VWAP + BB explosão + GPS médias + Rompe 200 + Tendência | **+156% · −68,7%** | +46% · −16,9% | +30% | −10,5% | 1,6 | 1,33 → 1,00 | +14% | 0,34 |
> | 4253 | VWAP + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+135% · −40,2%** | +36% · −8,1% | +27% | −8,5% | 1,7 | 0,99 → 1,19 | +23% | 0,08 |
> | 4254 | VWAP + Donchian + BB explosão + Pôr do sol + Quinta ⚠️ | **+131% · −51,2%** | +37% · −9,8% | +25% | −8,4% | 1,4 | 1,11 → 1,08 | +14% | 0,07 |
> | 4255 | VWAP + BB explosão + IFR + Pôr do sol | **+117% · −41,4%** | +39% · −10,2% | +27% | −9,7% | 1,4 | 1,02 → 1,24 | +16% | 0,11 |
> | 4256 | ADX + BB explosão + Pôr do sol + Onda | **+131% · −52,8%** | +44% · −13,5% | +28% | −6,8% | 2,3 | 0,54 → 1,49 | +19% | 0,03 |
> | 4257 | VWAP + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+138% · −28,8%** | +35% · −4,8% | +26% | −7,3% | 1,8 | 0,80 → 1,48 | +17% | 0,00 |
> | 4258 | BB explosão + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+184% · −41,0%** | +42% · −8,6% | +27% | −9,2% | 1,5 | 0,81 → 1,56 | +16% | 0,19 |
> | 4259 | BB explosão + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+141% · −35,8%** | +35% · −6,4% | +24% | −6,2% | 1,7 | 0,78 → 1,52 | +16% | −0,01 |
> | 4260 | VWAP + GPS médias + MACD + Pullback + Rompe 200 | **+151% · −43,7%** | +38% · −9,2% | +27% | −11,3% | 1,2 | 1,39 → 1,04 | +18% | 0,16 |

> [!example]- Combinações 4261 a 4290 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4261 | VWAP + Donchian + Quinta + Bollinger + Onda ⚠️ | **+205% · −36,7%** | +44% · −7,2% | +28% | −9,7% | 1,5 | 0,93 → 1,39 | +20% | 0,11 |
> | 4262 | VWAP + BB explosão + IFR + MACD + Quinta ⚠️ | **+148% · −46,3%** | +39% · −9,2% | +28% | −10,8% | 1,4 | 1,00 → 1,30 | +19% | 0,17 |
> | 4263 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+158% · −44,5%** | +38% · −9,5% | +25% | −10,5% | 1,1 | 0,98 → 1,41 | +19% | 0,17 |
> | 4264 | Donchian + BB explosão + Quinta + Onda ⚠️ | **+143% · −48,9%** | +46% · −11,4% | +29% | −8,7% | 1,9 | 0,88 → 1,30 | +23% | 0,07 |
> | 4265 | Donchian + Onda | **+116% · −30,1%** | +62% · −14,2% | +36% | −11,0% | 2,2 | 0,75 → 1,37 | +29% | 0,30 |
> | 4266 | ADX + BB explosão + Pôr do sol + Rompe 200 + Onda | **+142% · −49,7%** | +40% · −9,4% | +26% | −6,2% | 2,2 | 0,66 → 1,44 | +19% | 0,05 |
> | 4267 | VWAP + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+202% · −41,7%** | +46% · −8,5% | +33% | −12,2% | 1,7 | 0,85 → 1,44 | +26% | 0,33 |
> | 4268 | VWAP + Donchian + MACD + Pôr do sol + Rompe 200 | **+150% · −38,1%** | +38% · −7,7% | +26% | −10,2% | 1,3 | 1,08 → 1,16 | +19% | 0,16 |
> | 4269 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+171% · −51,8%** | +45% · −11,3% | +29% | −9,5% | 1,7 | 0,89 → 1,38 | +19% | 0,11 |
> | 4270 | VWAP + 1ª vela 80 + Tendência + Onda ⚠️ | **+165% · −40,3%** | +47% · −10,4% | +33% | −12,1% | 1,7 | 0,86 → 1,41 | +27% | 0,28 |
> | 4271 | VWAP + BB explosão + GPS médias + Tendência + Onda | **+165% · −65,8%** | +50% · −16,0% | +33% | −12,6% | 1,6 | 1,02 → 1,14 | +23% | 0,37 |
> | 4272 | BB explosão + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+213% · −44,9%** | +46% · −9,6% | +30% | −10,8% | 1,6 | 0,72 → 1,62 | +15% | 0,27 |
> | 4273 | ADX + VWAP + GPS médias + MACD | **+167% · −51,5%** | +53% · −13,8% | +32% | −11,9% | 1,6 | 0,95 → 1,30 | +23% | 0,31 |
> | 4274 | ADX + VWAP + BB explosão + IFR + Onda | **+187% · −61,4%** | +50% · −13,0% | +32% | −9,9% | 2,0 | 0,73 → 1,47 | +22% | 0,28 |
> | 4275 | BB explosão + GPS médias + Rompe 200 + Bollinger + Onda | **+182% · −55,1%** | +46% · −12,3% | +28% | −10,3% | 1,4 | 1,02 → 1,24 | +22% | 0,25 |
> | 4276 | Donchian + BB explosão + Pôr do sol + Rompe 200 + Onda | **+156% · −47,3%** | +41% · −8,4% | +27% | −8,1% | 1,7 | 0,93 → 1,28 | +22% | 0,12 |
> | 4277 | VWAP + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+125% · −31,7%** | +31% · −5,7% | +23% | −8,6% | 1,1 | 0,99 → 1,37 | +16% | 0,11 |
> | 4278 | VWAP + Donchian + GPS médias + Quinta + Onda ⚠️ | **+187% · −45,3%** | +48% · −9,8% | +30% | −11,4% | 1,5 | 1,03 → 1,19 | +25% | 0,10 |
> | 4279 | ADX + VWAP + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+173% · −44,0%** | +42% · −8,6% | +28% | −9,6% | 1,6 | 0,80 → 1,51 | +19% | 0,20 |
> | 4280 | Donchian + BB explosão + MACD + Pôr do sol + Onda | **+178% · −49,9%** | +46% · −9,3% | +30% | −8,9% | 1,9 | 0,82 → 1,39 | +26% | 0,18 |
> | 4281 | VWAP + BB explosão + Bollinger + Tendência + Onda | **+194% · −57,4%** | +47% · −12,4% | +31% | −11,0% | 1,6 | 0,94 → 1,29 | +23% | 0,36 |
> | 4282 | VWAP + IFR + MACD + Rompe 200 | **+126% · −31,8%** | +38% · −7,7% | +28% | −11,3% | 1,4 | 1,01 → 1,26 | +21% | 0,27 |
> | 4283 | ADX + VWAP + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+157% · −54,2%** | +42% · −10,8% | +27% | −8,2% | 1,8 | 0,79 → 1,47 | +18% | 0,13 |
> | 4284 | BB explosão + Pôr do sol + Pullback + Onda | **+102% · −33,5%** | +35% · −7,6% | +25% | −6,8% | 1,8 | 0,89 → 1,28 | +22% | −0,02 |
> | 4285 | BB explosão + MACD + Pôr do sol + Quinta ⚠️ | **+86% · −32,4%** | +31% · −6,8% | +23% | −6,5% | 1,6 | 0,95 → 1,31 | +19% | −0,02 |
> | 4286 | BB explosão + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+122% · −36,5%** | +38% · −9,3% | +27% | −10,7% | 1,3 | 0,94 → 1,39 | +19% | 0,18 |
> | 4287 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+90% · −35,3%** | +27% · −7,0% | +21% | −7,5% | 1,1 | 1,03 → 1,29 | +17% | 0,03 |
> | 4288 | VWAP + GPS médias + IFR + Onda | **+174% · −42,4%** | +51% · −11,6% | +33% | −12,8% | 1,6 | 0,94 → 1,31 | +28% | 0,28 |
> | 4289 | VWAP + IFR + 1ª vela 80 + Onda ⚠️ | **+167% · −33,4%** | +46% · −8,4% | +32% | −11,5% | 1,7 | 0,73 → 1,58 | +22% | 0,24 |
> | 4290 | VWAP + BB explosão + Pullback + Bollinger | **+124% · −42,0%** | +39% · −10,3% | +25% | −10,6% | 1,1 | 1,28 → 1,06 | +12% | 0,23 |

> [!example]- Combinações 4291 a 4320 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4291 | Donchian + Rompe 200 + Onda | **+127% · −30,2%** | +48% · −9,8% | +30% | −9,3% | 1,8 | 0,88 → 1,29 | +28% | 0,24 |
> | 4292 | VWAP + GPS médias + Pôr do sol + Pullback + Onda | **+148% · −39,0%** | +38% · −8,0% | +27% | −10,5% | 1,3 | 1,06 → 1,15 | +23% | 0,05 |
> | 4293 | VWAP + GPS médias + Pôr do sol + Pullback | **+117% · −36,7%** | +37% · −9,4% | +25% | −9,1% | 1,4 | 1,52 → 0,96 | +16% | −0,02 |
> | 4294 | VWAP + Donchian + BB explosão + MACD + Bollinger | **+203% · −56,3%** | +49% · −12,1% | +29% | −13,2% | 1,3 | 1,04 → 1,24 | +18% | 0,43 |
> | 4295 | VWAP + BB explosão + IFR + Rompe 200 | **+115% · −46,0%** | +39% · −12,1% | +27% | −10,7% | 1,3 | 1,07 → 1,12 | +14% | 0,28 |
> | 4296 | VWAP + Donchian + BB explosão + GPS médias + MACD | **+170% · −65,9%** | +52% · −16,3% | +31% | −15,2% | 1,2 | 1,10 → 1,09 | +18% | 0,46 |
> | 4297 | VWAP + BB explosão + MACD + Quinta + Pullback ⚠️ | **+111% · −46,0%** | +32% · −9,3% | +25% | −10,1% | 1,2 | 1,15 → 1,09 | +15% | 0,07 |
> | 4298 | VWAP + GPS médias + Quinta + Pullback ⚠️ | **+115% · −38,7%** | +37% · −10,1% | +25% | −8,9% | 1,4 | 1,59 → 0,93 | +15% | −0,02 |
> | 4299 | ADX + BB explosão + Rompe 200 | **+101% · −51,5%** | +45% · −18,7% | +27% | −7,3% | 2,0 | 0,84 → 1,28 | +16% | 0,17 |
> | 4300 | VWAP + Donchian + MACD + Pullback + Onda | **+191% · −44,5%** | +45% · −9,5% | +30% | −12,0% | 1,5 | 0,97 → 1,30 | +21% | 0,25 |
> | 4301 | VWAP + BB explosão + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+147% · −55,0%** | +41% · −12,6% | +27% | −12,5% | 1,1 | 1,08 → 1,16 | +19% | 0,15 |
> | 4302 | VWAP + BB explosão + MACD + Tendência | **+134% · −60,5%** | +45% · −17,8% | +32% | −12,9% | 1,5 | 1,04 → 1,12 | +18% | 0,46 |
> | 4303 | Donchian + MACD + Onda | **+152% · −32,8%** | +56% · −11,2% | +35% | −11,3% | 2,0 | 0,75 → 1,43 | +28% | 0,39 |
> | 4304 | ADX + VWAP + Quinta + Bollinger + Onda ⚠️ | **+184% · −39,3%** | +43% · −7,1% | +27% | −7,5% | 1,9 | 0,65 → 1,55 | +17% | 0,12 |
> | 4305 | VWAP + Donchian + BB explosão + Pullback | **+138% · −59,8%** | +46% · −15,2% | +29% | −11,0% | 1,5 | 1,28 → 1,02 | +11% | 0,28 |
> | 4306 | Quinta + Bollinger + Onda ⚠️ | **+98% · −17,6%** | +38% · −5,3% | +25% | −6,5% | 1,9 | 0,60 → 1,64 | +14% | −0,07 |
> | 4307 | VWAP + GPS médias + 1ª vela 80 ⚠️ | **+122% · −42,4%** | +48% · −15,1% | +30% | −17,0% | 1,0 | 1,09 → 1,16 | +23% | 0,29 |
> | 4308 | BB explosão + GPS médias + MACD + Bollinger + Onda | **+206% · −55,8%** | +50% · −12,5% | +31% | −11,3% | 1,6 | 0,91 → 1,35 | +21% | 0,32 |
> | 4309 | VWAP + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+124% · −33,9%** | +32% · −6,3% | +23% | −9,5% | 1,0 | 1,06 → 1,22 | +19% | 0,13 |
> | 4310 | Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+109% · −20,3%** | +33% · −4,6% | +23% | −6,2% | 1,6 | 0,80 → 1,50 | +16% | 0,01 |
> | 4311 | VWAP + BB explosão + MACD + Pôr do sol + Pullback | **+113% · −44,5%** | +33% · −8,8% | +24% | −10,3% | 1,1 | 1,09 → 1,11 | +16% | 0,07 |
> | 4312 | BB explosão + MACD + Bollinger | **+119% · −37,3%** | +45% · −12,6% | +28% | −11,0% | 1,4 | 0,93 → 1,38 | +20% | 0,35 |
> | 4313 | ADX + VWAP + BB explosão + GPS médias + Rompe 200 | **+146% · −67,0%** | +46% · −17,0% | +28% | −10,4% | 1,5 | 1,04 → 1,11 | +16% | 0,29 |
> | 4314 | GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+183% · −42,2%** | +51% · −10,8% | +33% | −13,0% | 1,6 | 0,83 → 1,48 | +19% | 0,26 |
> | 4315 | ADX + MACD | **+100% · −35,8%** | +56% · −17,7% | +35% | −11,8% | 1,9 | 0,60 → 1,58 | +19% | 0,17 |
> | 4316 | VWAP + MACD + Pôr do sol + Pullback + Rompe 200 | **+98% · −30,6%** | +28% · −5,6% | +23% | −8,6% | 1,1 | 1,24 → 1,07 | +18% | 0,05 |
> | 4317 | VWAP + BB explosão + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+156% · −46,9%** | +38% · −10,3% | +25% | −11,5% | 1,0 | 1,03 → 1,29 | +17% | 0,26 |
> | 4318 | VWAP + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+96% · −31,4%** | +28% · −5,8% | +23% | −8,5% | 1,2 | 1,31 → 1,05 | +17% | 0,04 |
> | 4319 | ADX + Quinta + Rompe 200 + Onda ⚠️ | **+118% · −33,1%** | +38% · −7,9% | +26% | −6,5% | 2,0 | 0,61 → 1,51 | +19% | −0,01 |
> | 4320 | VWAP + Donchian + Pullback + Onda | **+154% · −38,9%** | +46% · −9,9% | +30% | −11,8% | 1,5 | 1,00 → 1,21 | +20% | 0,22 |

> [!example]- Combinações 4321 a 4350 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4321 | MACD + Pullback + Onda | **+98% · −22,8%** | +39% · −7,1% | +30% | −9,4% | 1,8 | 0,80 → 1,43 | +24% | 0,10 |
> | 4322 | VWAP + GPS médias + IFR + MACD + Onda | **+207% · −48,9%** | +49% · −11,0% | +33% | −13,2% | 1,5 | 0,92 → 1,36 | +27% | 0,32 |
> | 4323 | GPS médias + MACD + Pôr do sol + Rompe 200 + Onda | **+156% · −35,9%** | +39% · −7,2% | +27% | −8,8% | 1,6 | 0,92 → 1,32 | +21% | 0,09 |
> | 4324 | Donchian + BB explosão + Pôr do sol + Onda | **+145% · −47,7%** | +46% · −10,7% | +29% | −8,6% | 1,9 | 0,83 → 1,33 | +25% | 0,11 |
> | 4325 | BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+87% · −36,1%** | +37% · −12,6% | +25% | −9,0% | 1,4 | 0,98 → 1,29 | +17% | 0,14 |
> | 4326 | BB explosão + 1ª vela 80 + Bollinger + Onda ⚠️ | **+171% · −40,8%** | +47% · −10,4% | +29% | −10,2% | 1,6 | 0,69 → 1,61 | +14% | 0,23 |
> | 4327 | VWAP + Donchian + BB explosão + 1ª vela 80 ⚠️ | **+157% · −52,9%** | +50% · −15,2% | +31% | −14,2% | 1,3 | 1,02 → 1,23 | +17% | 0,36 |
> | 4328 | ADX + VWAP + BB explosão + Rompe 200 + Bollinger | **+168% · −57,2%** | +43% · −12,2% | +26% | −8,4% | 1,6 | 0,93 → 1,30 | +17% | 0,28 |
> | 4329 | VWAP + IFR | **+81% · −20,7%** | +46% · −10,1% | +32% | −13,7% | 1,4 | 1,00 → 1,24 | +16% | 0,15 |
> | 4330 | VWAP + Quinta + Tendência + Onda ⚠️ | **+124% · −33,7%** | +39% · −8,2% | +29% | −9,3% | 1,8 | 0,90 → 1,23 | +24% | 0,06 |
> | 4331 | VWAP + Donchian + MACD + Quinta ⚠️ | **+137% · −34,1%** | +42% · −9,0% | +28% | −11,9% | 1,3 | 1,05 → 1,18 | +19% | 0,15 |
> | 4332 | MACD + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+139% · −31,6%** | +34% · −5,1% | +26% | −8,1% | 1,6 | 0,70 → 1,59 | +16% | 0,04 |
> | 4333 | BB explosão + GPS médias + MACD + Rompe 200 | **+125% · −51,8%** | +43% · −14,2% | +28% | −11,7% | 1,3 | 1,15 → 1,06 | +18% | 0,28 |
> | 4334 | Pôr do sol + Bollinger + Onda | **+99% · −18,1%** | +38% · −5,5% | +25% | −6,2% | 1,9 | 0,51 → 1,70 | +14% | 0,00 |
> | 4335 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+130% · −35,8%** | +34% · −6,6% | +25% | −6,8% | 1,8 | 0,69 → 1,55 | +15% | −0,04 |
> | 4336 | BB explosão + GPS médias + MACD | **+115% · −49,9%** | +50% · −18,4% | +31% | −14,5% | 1,3 | 1,07 → 1,08 | +20% | 0,40 |
> | 4337 | GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+117% · −30,3%** | +38% · −7,7% | +26% | −8,7% | 1,5 | 1,01 → 1,16 | +22% | 0,01 |
> | 4338 | VWAP + BB explosão + GPS médias + Pôr do sol + Bollinger | **+159% · −53,6%** | +42% · −11,8% | +25% | −11,1% | 1,1 | 1,17 → 1,07 | +16% | 0,19 |
> | 4339 | VWAP + Pôr do sol + Pullback + Bollinger + Onda | **+146% · −31,3%** | +35% · −5,9% | +24% | −8,8% | 1,3 | 0,94 → 1,37 | +17% | 0,09 |
> | 4340 | VWAP + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+206% · −40,8%** | +45% · −8,4% | +32% | −12,3% | 1,6 | 0,74 → 1,57 | +23% | 0,30 |
> | 4341 | ADX + VWAP + GPS médias + 1ª vela 80 + Onda ⚠️ | **+208% · −59,0%** | +52% · −13,7% | +32% | −11,4% | 1,7 | 0,79 → 1,46 | +25% | 0,25 |
> | 4342 | VWAP + MACD + Quinta + Tendência + Onda ⚠️ | **+159% · −39,6%** | +40% · −7,7% | +30% | −10,0% | 1,7 | 0,88 → 1,31 | +24% | 0,16 |
> | 4343 | VWAP + Pôr do sol + Rompe 200 + Tendência + Onda | **+137% · −39,6%** | +36% · −7,9% | +27% | −8,6% | 1,6 | 0,95 → 1,20 | +24% | 0,14 |
> | 4344 | ADX + MACD + Onda | **+133% · −38,6%** | +52% · −11,9% | +34% | −10,2% | 2,1 | 0,43 → 1,61 | +19% | 0,18 |
> | 4345 | ADX + VWAP + Donchian + Rompe 200 + Onda | **+194% · −50,7%** | +49% · −9,0% | +30% | −9,5% | 1,8 | 0,81 → 1,37 | +20% | 0,21 |
> | 4346 | GPS médias + MACD + Quinta + Onda ⚠️ | **+142% · −34,1%** | +43% · −8,6% | +29% | −9,9% | 1,7 | 0,87 → 1,34 | +21% | 0,01 |
> | 4347 | ADX + VWAP + Bollinger | **+134% · −39,0%** | +51% · −12,3% | +29% | −8,9% | 1,8 | 0,77 → 1,45 | +13% | 0,39 |
> | 4348 | BB explosão + MACD + Pullback + Rompe 200 + Onda | **+135% · −41,9%** | +36% · −8,1% | +27% | −9,2% | 1,5 | 0,94 → 1,29 | +23% | 0,14 |
> | 4349 | ADX + VWAP + Donchian + MACD + Onda | **+215% · −56,3%** | +53% · −10,9% | +33% | −10,8% | 1,9 | 0,73 → 1,45 | +20% | 0,31 |
> | 4350 | ADX + VWAP + 1ª vela 80 + Rompe 200 ⚠️ | **+134% · −38,7%** | +42% · −9,3% | +28% | −8,8% | 1,7 | 0,78 → 1,47 | +18% | 0,17 |

> [!example]- Combinações 4351 a 4380 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4351 | VWAP + Pullback + Rompe 200 + Bollinger | **+106% · −29,4%** | +33% · −7,0% | +23% | −9,8% | 1,0 | 1,55 → 0,99 | +14% | 0,15 |
> | 4352 | ADX + MACD + Rompe 200 + Onda | **+145% · −39,1%** | +44% · −9,4% | +30% | −8,5% | 2,0 | 0,56 → 1,56 | +20% | 0,13 |
> | 4353 | VWAP + GPS médias + MACD + 1ª vela 80 ⚠️ | **+158% · −47,6%** | +46% · −13,4% | +31% | −16,9% | 1,1 | 1,03 → 1,26 | +27% | 0,33 |
> | 4354 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+144% · −59,4%** | +41% · −14,5% | +27% | −13,4% | 1,1 | 1,11 → 1,08 | +17% | 0,28 |
> | 4355 | VWAP + BB explosão + IFR + MACD + Pôr do sol | **+150% · −45,2%** | +39% · −9,2% | +28% | −10,8% | 1,4 | 0,95 → 1,31 | +20% | 0,19 |
> | 4356 | ADX + VWAP + Donchian + Onda | **+182% · −52,2%** | +56% · −12,8% | +33% | −10,4% | 2,0 | 0,73 → 1,41 | +18% | 0,26 |
> | 4357 | VWAP + Donchian + Pôr do sol + Bollinger + Onda | **+207% · −37,0%** | +45% · −7,3% | +27% | −9,8% | 1,5 | 0,88 → 1,41 | +19% | 0,15 |
> | 4358 | BB explosão + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+64% · −28,2%** | +26% · −6,5% | +19% | −4,3% | 1,5 | 1,23 → 0,99 | +13% | −0,02 |
> | 4359 | ADX + VWAP + Pôr do sol + Bollinger + Onda | **+186% · −38,9%** | +43% · −7,1% | +27% | −7,6% | 1,9 | 0,60 → 1,57 | +16% | 0,15 |
> | 4360 | VWAP + Donchian + BB explosão + GPS médias + Pôr do sol | **+159% · −61,7%** | +48% · −14,6% | +28% | −11,6% | 1,3 | 1,19 → 1,03 | +15% | 0,22 |
> | 4361 | VWAP + BB explosão + GPS médias + MACD + Pullback | **+148% · −59,1%** | +42% · −13,7% | +28% | −13,3% | 1,2 | 1,23 → 1,05 | +16% | 0,24 |
> | 4362 | ADX + VWAP + MACD + Quinta + Rompe 200 ⚠️ | **+132% · −40,6%** | +36% · −7,6% | +25% | −7,3% | 1,7 | 0,84 → 1,35 | +17% | 0,08 |
> | 4363 | BB explosão + GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+167% · −52,8%** | +45% · −11,7% | +29% | −10,9% | 1,5 | 0,93 → 1,30 | +20% | 0,24 |
> | 4364 | ADX + VWAP + MACD + Pullback + Onda | **+175% · −47,9%** | +43% · −8,2% | +30% | −9,8% | 1,7 | 0,77 → 1,45 | +18% | 0,17 |
> | 4365 | VWAP + Donchian + GPS médias + Pôr do sol + Onda | **+189% · −45,6%** | +48% · −9,8% | +30% | −11,5% | 1,5 | 0,99 → 1,21 | +25% | 0,14 |
> | 4366 | VWAP + GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+225% · −49,8%** | +48% · −11,3% | +30% | −13,2% | 1,3 | 0,90 → 1,42 | +22% | 0,30 |
> | 4367 | VWAP + Donchian + BB explosão + MACD + 1ª vela 80 ⚠️ | **+189% · −54,5%** | +48% · −12,2% | +31% | −14,6% | 1,2 | 0,98 → 1,30 | +21% | 0,38 |
> | 4368 | VWAP + BB explosão + GPS médias + MACD + Bollinger | **+177% · −56,5%** | +46% · −13,6% | +28% | −14,7% | 1,1 | 1,07 → 1,13 | +19% | 0,40 |
> | 4369 | VWAP + BB explosão + 1ª vela 80 + Tendência + Onda ⚠️ | **+179% · −55,6%** | +46% · −12,2% | +32% | −12,2% | 1,6 | 0,89 → 1,34 | +26% | 0,30 |
> | 4370 | VWAP + Donchian + BB explosão + GPS médias + Quinta ⚠️ | **+157% · −64,1%** | +47% · −14,9% | +29% | −11,5% | 1,4 | 1,24 → 1,01 | +14% | 0,21 |
> | 4371 | VWAP + Donchian + BB explosão + Pullback + Rompe 200 | **+148% · −62,9%** | +41% · −13,0% | +27% | −9,9% | 1,4 | 1,35 → 0,99 | +11% | 0,24 |
> | 4372 | VWAP + BB explosão + Tendência | **+104% · −60,3%** | +46% · −22,2% | +32% | −12,1% | 1,6 | 1,11 → 1,00 | +12% | 0,45 |
> | 4373 | VWAP + Donchian + Pôr do sol | **+104% · −33,4%** | +42% · −10,5% | +26% | −10,8% | 1,3 | 1,08 → 1,06 | +15% | 0,06 |
> | 4374 | VWAP + BB explosão + GPS médias + Quinta + Bollinger ⚠️ | **+156% · −52,9%** | +42% · −11,6% | +26% | −10,9% | 1,2 | 1,23 → 1,05 | +15% | 0,19 |
> | 4375 | ADX + Quinta + Onda ⚠️ | **+107% · −30,6%** | +44% · −10,8% | +29% | −7,8% | 2,1 | 0,45 → 1,58 | +18% | −0,08 |
> | 4376 | ADX + VWAP + Pullback + Rompe 200 + Onda | **+148% · −40,4%** | +39% · −7,1% | +27% | −8,3% | 1,7 | 0,85 → 1,33 | +18% | 0,14 |
> | 4377 | VWAP + BB explosão + Pôr do sol + Quinta + Bollinger ⚠️ | **+116% · −38,2%** | +32% · −7,3% | +22% | −7,8% | 1,1 | 1,05 → 1,15 | +15% | 0,07 |
> | 4378 | 1ª vela 80 + Rompe 200 ⚠️ | **+57% · −21,1%** | +34% · −10,4% | +25% | −7,3% | 1,6 | 0,86 → 1,35 | +16% | 0,16 |
> | 4379 | VWAP + Rompe 200 + Tendência | **+93% · −41,6%** | +39% · −13,4% | +29% | −9,6% | 1,6 | 1,28 → 0,95 | +14% | 0,22 |
> | 4380 | ADX + Pôr do sol + Rompe 200 + Onda | **+120% · −32,3%** | +39% · −8,0% | +26% | −6,6% | 2,0 | 0,55 → 1,54 | +19% | −0,00 |

> [!example]- Combinações 4381 a 4410 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4381 | VWAP + BB explosão + Pullback + Rompe 200 + Bollinger | **+135% · −44,5%** | +35% · −9,5% | +23% | −9,5% | 1,1 | 1,36 → 1,02 | +12% | 0,19 |
> | 4382 | GPS médias + 1ª vela 80 + Onda ⚠️ | **+144% · −39,8%** | +54% · −13,7% | +34% | −12,8% | 1,6 | 0,83 → 1,42 | +18% | 0,23 |
> | 4383 | Pullback + Rompe 200 + Onda | **+73% · −20,6%** | +32% · −6,2% | +25% | −6,9% | 1,7 | 0,92 → 1,13 | +24% | 0,15 |
> | 4384 | ADX + BB explosão + MACD + Onda | **+151% · −59,2%** | +50% · −16,4% | +32% | −9,5% | 2,0 | 0,55 → 1,50 | +20% | 0,24 |
> | 4385 | BB explosão + MACD + Quinta + Bollinger + Onda ⚠️ | **+167% · −39,4%** | +40% · −7,6% | +27% | −8,4% | 1,6 | 0,74 → 1,50 | +17% | 0,11 |
> | 4386 | BB explosão + MACD + Quinta + Rompe 200 ⚠️ | **+85% · −36,5%** | +31% · −8,4% | +23% | −7,7% | 1,3 | 1,02 → 1,15 | +16% | 0,04 |
> | 4387 | BB explosão + GPS médias + Bollinger + Onda | **+170% · −55,0%** | +52% · −15,7% | +30% | −11,4% | 1,5 | 0,93 → 1,27 | +21% | 0,31 |
> | 4388 | ADX + VWAP + MACD + 1ª vela 80 ⚠️ | **+160% · −41,5%** | +47% · −10,3% | +31% | −11,3% | 1,6 | 0,69 → 1,55 | +18% | 0,28 |
> | 4389 | VWAP + BB explosão + IFR + Bollinger + Onda | **+200% · −45,7%** | +46% · −10,1% | +30% | −10,9% | 1,5 | 0,83 → 1,43 | +24% | 0,31 |
> | 4390 | VWAP + GPS médias + Pullback + Rompe 200 + Onda | **+144% · −45,4%** | +38% · −9,9% | +27% | −11,9% | 1,2 | 1,10 → 1,06 | +22% | 0,18 |
> | 4391 | VWAP + Donchian + GPS médias + Rompe 200 + Onda | **+184% · −50,4%** | +48% · −11,2% | +30% | −12,9% | 1,3 | 1,03 → 1,13 | +24% | 0,28 |
> | 4392 | VWAP + GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+125% · −43,8%** | +34% · −9,4% | +24% | −8,1% | 1,3 | 1,65 → 0,89 | +14% | 0,04 |
> | 4393 | VWAP + Donchian + Quinta ⚠️ | **+103% · −33,2%** | +42% · −10,6% | +27% | −10,5% | 1,3 | 1,16 → 1,03 | +15% | −0,01 |
> | 4394 | ADX + VWAP + BB explosão + MACD + Bollinger | **+192% · −63,2%** | +47% · −14,4% | +29% | −10,0% | 1,6 | 0,82 → 1,41 | +20% | 0,38 |
> | 4395 | VWAP + GPS médias + Pôr do sol + Pullback + Rompe 200 | **+127% · −42,9%** | +34% · −9,2% | +24% | −8,3% | 1,3 | 1,58 → 0,92 | +15% | 0,04 |
> | 4396 | Pôr do sol + Rompe 200 + Bollinger + Onda | **+111% · −20,8%** | +34% · −4,6% | +23% | −6,1% | 1,7 | 0,72 → 1,54 | +16% | 0,04 |
> | 4397 | VWAP + MACD + 1ª vela 80 + Bollinger ⚠️ | **+155% · −39,8%** | +42% · −10,4% | +28% | −14,5% | 1,0 | 0,87 → 1,49 | +20% | 0,38 |
> | 4398 | VWAP + BB explosão + IFR + MACD + Rompe 200 | **+147% · −49,5%** | +39% · −10,3% | +28% | −11,6% | 1,3 | 1,00 → 1,22 | +18% | 0,30 |
> | 4399 | VWAP + GPS médias + Bollinger | **+132% · −38,6%** | +49% · −13,7% | +28% | −14,7% | 1,0 | 1,26 → 1,05 | +19% | 0,37 |
> | 4400 | VWAP + Donchian + 1ª vela 80 + Quinta + Onda ⚠️ | **+188% · −42,1%** | +44% · −8,5% | +29% | −11,0% | 1,5 | 0,85 → 1,44 | +21% | 0,07 |
> | 4401 | ADX + VWAP + 1ª vela 80 ⚠️ | **+122% · −38,5%** | +49% · −12,9% | +31% | −10,0% | 1,8 | 0,65 → 1,52 | +15% | 0,25 |
> | 4402 | VWAP + 1ª vela 80 + Bollinger ⚠️ | **+114% · −31,6%** | +42% · −10,7% | +27% | −13,8% | 1,0 | 0,89 → 1,46 | +18% | 0,38 |
> | 4403 | MACD + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+141% · −31,1%** | +35% · −5,2% | +26% | −8,2% | 1,6 | 0,65 → 1,61 | +15% | 0,11 |
> | 4404 | ADX + VWAP + BB explosão + GPS médias + MACD | **+164% · −68,2%** | +50% · −17,4% | +31% | −12,0% | 1,5 | 0,94 → 1,23 | +21% | 0,37 |
> | 4405 | ADX + VWAP + BB explosão + Pôr do sol + Quinta ⚠️ | **+120% · −55,8%** | +36% · −11,5% | +24% | −6,3% | 1,8 | 0,83 → 1,28 | +16% | 0,05 |
> | 4406 | BB explosão + GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+133% · −48,1%** | +38% · −9,6% | +26% | −8,2% | 1,6 | 0,93 → 1,21 | +20% | −0,02 |
> | 4407 | Donchian + BB explosão + MACD + Rompe 200 + Onda | **+174% · −55,5%** | +46% · −10,2% | +30% | −10,3% | 1,6 | 0,87 → 1,31 | +25% | 0,30 |
> | 4408 | VWAP + Pullback + Rompe 200 + Bollinger + Onda | **+145% · −34,9%** | +35% · −6,9% | +24% | −10,2% | 1,1 | 1,00 → 1,23 | +20% | 0,18 |
> | 4409 | ADX + VWAP + BB explosão + GPS médias | **+137% · −65,8%** | +52% · −20,7% | +31% | −11,6% | 1,5 | 0,96 → 1,13 | +18% | 0,39 |
> | 4410 | VWAP + Donchian + GPS médias | **+149% · −44,4%** | +59% · −15,7% | +33% | −15,6% | 1,3 | 1,26 → 1,00 | +17% | 0,38 |

> [!example]- Combinações 4411 a 4440 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4411 | ADX + BB explosão + MACD + Rompe 200 + Onda | **+162% · −56,4%** | +44% · −11,6% | +29% | −8,7% | 1,9 | 0,65 → 1,46 | +20% | 0,18 |
> | 4412 | VWAP + GPS médias + MACD + Pullback + Onda | **+169% · −45,0%** | +43% · −9,8% | +30% | −13,3% | 1,3 | 1,00 → 1,21 | +26% | 0,20 |
> | 4413 | ADX + VWAP + BB explosão + Bollinger | **+156% · −60,1%** | +49% · −17,1% | +28% | −9,1% | 1,7 | 0,82 → 1,34 | +18% | 0,39 |
> | 4414 | ADX + Pôr do sol + Onda | **+109% · −31,2%** | +45% · −10,9% | +29% | −7,9% | 2,0 | 0,39 → 1,61 | +17% | −0,04 |
> | 4415 | VWAP + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+132% · −35,7%** | +34% · −7,0% | +26% | −9,9% | 1,3 | 0,89 → 1,42 | +19% | −0,00 |
> | 4416 | VWAP + Donchian + BB explosão + Pullback + Onda | **+162% · −55,3%** | +45% · −12,2% | +29% | −12,0% | 1,4 | 0,99 → 1,17 | +20% | 0,27 |
> | 4417 | ADX + VWAP + GPS médias + Quinta + Onda ⚠️ | **+171% · −51,0%** | +46% · −10,6% | +29% | −9,5% | 1,7 | 0,82 → 1,33 | +22% | 0,08 |
> | 4418 | VWAP + Pôr do sol + Tendência + Onda | **+126% · −34,4%** | +40% · −8,1% | +29% | −9,5% | 1,7 | 0,85 → 1,25 | +23% | 0,15 |
> | 4419 | BB explosão + GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+189% · −53,9%** | +49% · −12,0% | +32% | −12,8% | 1,5 | 0,85 → 1,39 | +19% | 0,28 |
> | 4420 | VWAP + MACD + Pôr do sol + Tendência + Onda | **+161% · −39,6%** | +40% · −7,7% | +30% | −10,2% | 1,7 | 0,84 → 1,32 | +23% | 0,23 |
> | 4421 | VWAP + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+136% · −30,0%** | +35% · −5,7% | +26% | −8,7% | 1,5 | 0,87 → 1,35 | +21% | 0,07 |
> | 4422 | VWAP + BB explosão + IFR + 1ª vela 80 + Onda ⚠️ | **+185% · −46,3%** | +46% · −10,2% | +31% | −11,7% | 1,6 | 0,77 → 1,47 | +24% | 0,26 |
> | 4423 | VWAP + BB explosão + GPS médias + IFR + Onda | **+172% · −57,8%** | +49% · −13,0% | +32% | −12,8% | 1,5 | 0,93 → 1,24 | +25% | 0,34 |
> | 4424 | BB explosão + Pullback + Rompe 200 | **+70% · −37,8%** | +32% · −12,5% | +23% | −6,2% | 1,7 | 1,50 → 0,85 | +8% | 0,10 |
> | 4425 | ADX + VWAP + 1ª vela 80 + Quinta + Onda ⚠️ | **+165% · −45,0%** | +42% · −8,8% | +28% | −8,7% | 1,8 | 0,58 → 1,58 | +18% | 0,06 |
> | 4426 | GPS médias + MACD + Pôr do sol + Onda | **+144% · −33,8%** | +43% · −8,5% | +29% | −9,9% | 1,6 | 0,82 → 1,37 | +21% | 0,07 |
> | 4427 | VWAP + Donchian + Rompe 200 + Bollinger + Onda | **+204% · −39,9%** | +45% · −8,3% | +28% | −11,2% | 1,3 | 0,94 → 1,30 | +22% | 0,25 |
> | 4428 | VWAP + BB explosão + Quinta + Tendência + Onda ⚠️ | **+140% · −56,8%** | +40% · −12,4% | +29% | −10,0% | 1,6 | 0,91 → 1,19 | +22% | 0,14 |
> | 4429 | MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+127% · −29,5%** | +38% · −6,4% | +28% | −9,6% | 1,6 | 0,58 → 1,65 | +14% | 0,00 |
> | 4430 | ADX + VWAP + Pullback + Onda | **+137% · −43,3%** | +44% · −9,5% | +29% | −9,1% | 1,8 | 0,75 → 1,37 | +16% | 0,15 |
> | 4431 | ADX + VWAP + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+154% · −54,7%** | +42% · −11,5% | +27% | −9,6% | 1,5 | 0,84 → 1,38 | +19% | 0,21 |
> | 4432 | VWAP + GPS médias + MACD + Quinta ⚠️ | **+119% · −40,7%** | +39% · −10,7% | +27% | −13,7% | 1,0 | 1,10 → 1,06 | +21% | 0,09 |
> | 4433 | MACD + 1ª vela 80 ⚠️ | **+81% · −19,4%** | +45% · −9,3% | +32% | −13,7% | 1,4 | 0,71 → 1,55 | +15% | 0,28 |
> | 4434 | VWAP + Donchian + MACD + Rompe 200 | **+136% · −38,6%** | +42% · −10,0% | +28% | −13,2% | 1,1 | 1,04 → 1,09 | +19% | 0,32 |
> | 4435 | ADX + VWAP + MACD + Quinta ⚠️ | **+121% · −41,5%** | +39% · −9,3% | +27% | −7,9% | 1,8 | 0,72 → 1,39 | +15% | 0,11 |
> | 4436 | VWAP + Donchian + GPS médias + Rompe 200 | **+160% · −48,3%** | +49% · −13,6% | +29% | −12,4% | 1,3 | 1,33 → 0,97 | +15% | 0,30 |
> | 4437 | VWAP + GPS médias + MACD + Pôr do sol + Rompe 200 | **+132% · −42,8%** | +35% · −8,9% | +25% | −11,7% | 1,0 | 1,12 → 1,05 | +20% | 0,12 |
> | 4438 | VWAP + GPS médias + Rompe 200 + Bollinger | **+144% · −40,4%** | +42% · −10,7% | +25% | −11,8% | 1,1 | 1,35 → 1,00 | +17% | 0,27 |
> | 4439 | VWAP + GPS médias + Pullback + Onda | **+134% · −39,3%** | +43% · −10,4% | +29% | −13,5% | 1,2 | 1,03 → 1,09 | +25% | 0,17 |
> | 4440 | GPS médias + Pôr do sol + Rompe 200 + Onda | **+119% · −30,4%** | +38% · −7,6% | +26% | −8,6% | 1,5 | 0,94 → 1,19 | +21% | 0,04 |

> [!example]- Combinações 4441 a 4470 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4441 | VWAP + Donchian + BB explosão + MACD + Quinta ⚠️ | **+148% · −55,7%** | +42% · −12,0% | +28% | −12,0% | 1,2 | 1,01 → 1,14 | +17% | 0,22 |
> | 4442 | BB explosão + MACD + Pôr do sol + Bollinger + Onda | **+169% · −40,7%** | +40% · −7,6% | +27% | −8,5% | 1,6 | 0,69 → 1,53 | +17% | 0,13 |
> | 4443 | VWAP + BB explosão + Rompe 200 + Tendência | **+113% · −62,7%** | +40% · −16,7% | +28% | −10,4% | 1,5 | 1,19 → 0,97 | +12% | 0,31 |
> | 4444 | BB explosão + MACD + Pullback + Onda | **+125% · −40,1%** | +40% · −9,8% | +29% | −10,2% | 1,6 | 0,84 → 1,34 | +23% | 0,14 |
> | 4445 | VWAP + MACD + Pullback + Bollinger + Onda | **+175% · −38,0%** | +39% · −7,7% | +27% | −11,7% | 1,2 | 0,88 → 1,40 | +20% | 0,23 |
> | 4446 | VWAP + IFR + MACD | **+115% · −29,5%** | +44% · −9,7% | +32% | −13,9% | 1,4 | 0,90 → 1,32 | +19% | 0,37 |
> | 4447 | ADX + BB explosão + Onda | **+118% · −55,7%** | +52% · −20,5% | +32% | −9,3% | 2,1 | 0,49 → 1,42 | +19% | 0,22 |
> | 4448 | VWAP + GPS médias + Quinta + Bollinger + Onda ⚠️ | **+179% · −43,3%** | +42% · −9,2% | +27% | −11,0% | 1,2 | 0,95 → 1,26 | +24% | 0,10 |
> | 4449 | GPS médias + Quinta + Onda ⚠️ | **+106% · −29,7%** | +43% · −9,1% | +28% | −9,6% | 1,6 | 0,89 → 1,22 | +21% | −0,13 |
> | 4450 | VWAP + Donchian + MACD + Pôr do sol | **+139% · −34,7%** | +42% · −9,2% | +28% | −12,1% | 1,2 | 0,98 → 1,20 | +18% | 0,20 |
> | 4451 | VWAP + GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+130% · −42,5%** | +35% · −8,8% | +25% | −11,5% | 1,0 | 1,18 → 1,03 | +19% | 0,10 |
> | 4452 | BB explosão + GPS médias + Pôr do sol | **+96% · −44,1%** | +43% · −15,4% | +27% | −9,3% | 1,5 | 1,21 → 0,96 | +16% | 0,02 |
> | 4453 | Donchian + BB explosão + MACD + Onda | **+164% · −55,7%** | +52% · −13,4% | +33% | −11,5% | 1,7 | 0,79 → 1,34 | +28% | 0,40 |
> | 4454 | ADX + Pôr do sol | **+76% · −31,0%** | +45% · −13,7% | +27% | −8,2% | 1,8 | 0,57 → 1,56 | +12% | −0,07 |
> | 4455 | ADX + Quinta ⚠️ | **+74% · −27,5%** | +44% · −13,8% | +28% | −8,8% | 1,7 | 0,68 → 1,49 | +14% | 0,09 |
> | 4456 | VWAP + IFR + MACD + Quinta + Onda ⚠️ | **+161% · −35,0%** | +39% · −6,7% | +29% | −10,0% | 1,6 | 0,75 → 1,45 | +20% | 0,12 |
> | 4457 | BB explosão + GPS médias + 1ª vela 80 + Onda ⚠️ | **+156% · −52,6%** | +51% · −14,9% | +32% | −12,2% | 1,6 | 0,85 → 1,32 | +19% | 0,27 |
> | 4458 | VWAP + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+134% · −56,4%** | +46% · −16,5% | +29% | −16,0% | 1,0 | 1,04 → 1,10 | +18% | 0,34 |
> | 4459 | ADX + VWAP + MACD + Pôr do sol + Rompe 200 | **+135% · −39,6%** | +36% · −7,3% | +25% | −7,4% | 1,7 | 0,78 → 1,37 | +16% | 0,09 |
> | 4460 | BB explosão + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+140% · −37,7%** | +35% · −7,4% | +24% | −7,7% | 1,4 | 0,86 → 1,37 | +17% | 0,06 |
> | 4461 | MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+129% · −29,0%** | +38% · −6,5% | +28% | −9,4% | 1,6 | 0,52 → 1,67 | +14% | 0,13 |
> | 4462 | BB explosão + Pullback + Rompe 200 + Onda | **+100% · −38,8%** | +35% · −9,5% | +25% | −8,6% | 1,5 | 0,95 → 1,14 | +20% | 0,14 |
> | 4463 | MACD + Pôr do sol + Rompe 200 | **+58% · −13,4%** | +27% · −3,7% | +22% | −5,7% | 1,6 | 0,89 → 1,23 | +20% | −0,01 |
> | 4464 | VWAP + Donchian + Pôr do sol + Rompe 200 | **+115% · −38,9%** | +37% · −10,1% | +24% | −9,0% | 1,3 | 1,20 → 1,00 | +15% | 0,09 |
> | 4465 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+190% · −43,6%** | +44% · −8,3% | +29% | −11,1% | 1,4 | 0,81 → 1,45 | +20% | 0,16 |
> | 4466 | BB explosão + GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+130% · −49,3%** | +39% · −10,1% | +26% | −9,6% | 1,4 | 0,98 → 1,11 | +22% | 0,09 |
> | 4467 | ADX + VWAP + GPS médias + Pôr do sol + Onda | **+173% · −51,6%** | +46% · −10,8% | +29% | −9,5% | 1,7 | 0,78 → 1,35 | +21% | 0,11 |
> | 4468 | 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+100% · −24,5%** | +32% · −5,5% | +25% | −7,0% | 1,7 | 0,65 → 1,53 | +14% | −0,02 |
> | 4469 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+168% · −45,6%** | +42% · −8,9% | +28% | −8,9% | 1,7 | 0,54 → 1,60 | +17% | 0,13 |
> | 4470 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+116% · −33,7%** | +31% · −6,3% | +24% | −10,1% | 1,1 | 0,86 → 1,44 | +17% | 0,07 |

> [!example]- Combinações 4471 a 4500 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4471 | VWAP + BB explosão + GPS médias + MACD + 1ª vela 80 ⚠️ | **+164% · −57,8%** | +46% · −14,1% | +30% | −16,1% | 1,1 | 1,00 → 1,20 | +22% | 0,35 |
> | 4472 | ADX + VWAP + BB explosão + MACD + 1ª vela 80 ⚠️ | **+176% · −60,5%** | +46% · −13,0% | +30% | −11,5% | 1,5 | 0,76 → 1,46 | +21% | 0,30 |
> | 4473 | VWAP + Donchian + Quinta + Rompe 200 ⚠️ | **+113% · −39,9%** | +36% · −10,4% | +24% | −8,9% | 1,3 | 1,27 → 0,98 | +14% | 0,06 |
> | 4474 | BB explosão + GPS médias + Pôr do sol + Rompe 200 | **+106% · −46,1%** | +38% · −11,9% | +24% | −7,8% | 1,5 | 1,30 → 0,93 | +14% | 0,08 |
> | 4475 | Donchian + BB explosão + Rompe 200 + Onda | **+142% · −53,5%** | +47% · −12,0% | +29% | −10,4% | 1,6 | 0,89 → 1,22 | +22% | 0,30 |
> | 4476 | VWAP + BB explosão + MACD + 1ª vela 80 + Bollinger ⚠️ | **+182% · −51,4%** | +42% · −11,8% | +28% | −14,1% | 1,1 | 0,89 → 1,39 | +22% | 0,35 |
> | 4477 | BB explosão + MACD + 1ª vela 80 ⚠️ | **+111% · −34,6%** | +44% · −11,9% | +30% | −13,3% | 1,3 | 0,82 → 1,43 | +17% | 0,23 |
> | 4478 | VWAP + MACD + Pôr do sol + Rompe 200 + Bollinger | **+126% · −34,3%** | +32% · −6,4% | +23% | −9,7% | 1,0 | 0,98 → 1,24 | +18% | 0,15 |
> | 4479 | VWAP + BB explosão + IFR | **+105% · −44,0%** | +45% · −15,6% | +30% | −13,2% | 1,3 | 0,97 → 1,17 | +14% | 0,35 |
> | 4480 | ADX + BB explosão + Rompe 200 + Onda | **+129% · −52,7%** | +44% · −13,6% | +28% | −8,1% | 1,9 | 0,61 → 1,38 | +20% | 0,16 |
> | 4481 | BB explosão + GPS médias + MACD + Quinta + Onda ⚠️ | **+151% · −49,9%** | +43% · −10,3% | +29% | −10,5% | 1,5 | 0,88 → 1,26 | +21% | 0,10 |
> | 4482 | BB explosão + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+154% · −39,7%** | +39% · −8,1% | +28% | −9,7% | 1,6 | 0,67 → 1,53 | +15% | 0,05 |
> | 4483 | VWAP + BB explosão + GPS médias + Pôr do sol + Pullback | **+130% · −54,3%** | +38% · −11,9% | +25% | −9,8% | 1,3 | 1,35 → 0,95 | +14% | 0,07 |
> | 4484 | VWAP + IFR + Quinta + Onda ⚠️ | **+125% · −28,0%** | +38% · −6,3% | +28% | −9,4% | 1,6 | 0,76 → 1,42 | +19% | 0,00 |
> | 4485 | VWAP + Donchian + BB explosão + Quinta ⚠️ | **+119% · −57,0%** | +42% · −14,0% | +27% | −10,9% | 1,3 | 1,07 → 1,01 | +12% | 0,16 |
> | 4486 | VWAP + Donchian + GPS médias + MACD + Onda | **+204% · −52,2%** | +52% · −11,9% | +33% | −14,7% | 1,3 | 0,93 → 1,23 | +28% | 0,37 |
> | 4487 | ADX + VWAP + Donchian + BB explosão + Onda | **+178% · −68,7%** | +53% · −16,4% | +32% | −11,0% | 1,7 | 0,76 → 1,33 | +22% | 0,33 |
> | 4488 | VWAP + Donchian + BB explosão + Pôr do sol | **+120% · −53,0%** | +42% · −13,3% | +26% | −11,2% | 1,2 | 1,01 → 1,03 | +13% | 0,18 |
> | 4489 | VWAP + Donchian + GPS médias + Onda | **+174% · −46,9%** | +55% · −12,5% | +33% | −14,7% | 1,4 | 0,96 → 1,16 | +27% | 0,34 |
> | 4490 | VWAP + GPS médias + MACD + Pôr do sol | **+121% · −41,1%** | +39% · −10,9% | +27% | −13,9% | 1,0 | 1,03 → 1,08 | +23% | 0,12 |
> | 4491 | MACD + Rompe 200 + Bollinger + Onda | **+140% · −28,5%** | +39% · −6,5% | +27% | −9,2% | 1,5 | 0,69 → 1,53 | +17% | 0,20 |
> | 4492 | VWAP + Quinta + Bollinger ⚠️ | **+76% · −24,9%** | +32% · −7,8% | +21% | −10,9% | 0,8 | 1,05 → 1,09 | +14% | 0,09 |
> | 4493 | VWAP + BB explosão + GPS médias + Quinta + Pullback ⚠️ | **+128% · −55,6%** | +38% · −12,5% | +26% | −9,7% | 1,3 | 1,40 → 0,93 | +13% | 0,07 |
> | 4494 | VWAP + BB explosão + Pôr do sol + Quinta + Pullback ⚠️ | **+90% · −40,6%** | +28% · −8,1% | +22% | −7,1% | 1,2 | 1,31 → 0,96 | +13% | −0,01 |
> | 4495 | VWAP + IFR + Pôr do sol + Rompe 200 + Onda | **+138% · −30,2%** | +35% · −5,7% | +26% | −8,7% | 1,5 | 0,82 → 1,37 | +20% | 0,11 |
> | 4496 | BB explosão + GPS médias + Quinta ⚠️ | **+94% · −45,3%** | +43% · −16,1% | +27% | −9,3% | 1,5 | 1,28 → 0,92 | +14% | 0,06 |
> | 4497 | ADX + VWAP + MACD + Bollinger + Onda | **+211% · −45,7%** | +47% · −9,0% | +30% | −10,5% | 1,6 | 0,60 → 1,55 | +19% | 0,32 |
> | 4498 | VWAP + BB explosão + MACD + Pullback | **+101% · −46,9%** | +36% · −12,5% | +26% | −13,3% | 1,0 | 1,05 → 1,04 | +15% | 0,21 |
> | 4499 | VWAP + BB explosão + Pôr do sol + Tendência + Onda | **+142% · −55,4%** | +40% · −11,8% | +29% | −10,1% | 1,6 | 0,87 → 1,21 | +23% | 0,19 |
> | 4500 | VWAP + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+144% · −44,7%** | +43% · −12,3% | +27% | −13,5% | 1,0 | 0,92 → 1,34 | +18% | 0,34 |

> [!example]- Combinações 4501 a 4530 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4501 | VWAP + Donchian + MACD + Bollinger + Onda | **+230% · −44,9%** | +49% · −9,5% | +30% | −12,7% | 1,4 | 0,83 → 1,40 | +22% | 0,36 |
> | 4502 | VWAP + IFR + MACD + Pôr do sol + Onda | **+163% · −35,0%** | +39% · −6,7% | +29% | −10,0% | 1,6 | 0,71 → 1,46 | +19% | 0,17 |
> | 4503 | VWAP + MACD + Rompe 200 + Tendência + Onda | **+158% · −42,8%** | +40% · −8,7% | +30% | −11,5% | 1,5 | 0,88 → 1,24 | +27% | 0,30 |
> | 4504 | VWAP + MACD + Pullback | **+77% · −25,5%** | +33% · −8,6% | +26% | −13,5% | 1,0 | 1,09 → 1,03 | +16% | 0,15 |
> | 4505 | MACD + Pôr do sol + Quinta + Onda ⚠️ | **+90% · −22,6%** | +30% · −5,2% | +24% | −6,2% | 1,8 | 0,51 → 1,53 | +16% | −0,02 |
> | 4506 | ADX + VWAP + Quinta + Rompe 200 ⚠️ | **+97% · −34,0%** | +34% · −7,6% | +24% | −6,7% | 1,6 | 0,85 → 1,21 | +15% | 0,03 |
> | 4507 | VWAP + BB explosão + GPS médias + Pullback + Onda | **+140% · −58,1%** | +43% · −13,3% | +28% | −13,4% | 1,2 | 1,00 → 1,06 | +21% | 0,23 |
> | 4508 | ADX + VWAP + MACD + Pôr do sol | **+123% · −40,9%** | +40% · −9,0% | +27% | −8,2% | 1,7 | 0,66 → 1,42 | +14% | 0,12 |
> | 4509 | MACD + Quinta ⚠️ | **+47% · −9,7%** | +30% · −4,4% | +24% | −7,1% | 1,6 | 0,81 → 1,31 | +20% | −0,12 |
> | 4510 | VWAP + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+115% · −35,9%** | +31% · −6,9% | +24% | −10,9% | 1,0 | 0,92 → 1,32 | +20% | 0,08 |
> | 4511 | VWAP + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+134% · −35,0%** | +34% · −6,8% | +26% | −10,1% | 1,3 | 0,84 → 1,43 | +18% | 0,07 |
> | 4512 | VWAP + Donchian + BB explosão + Pôr do sol + Rompe 200 | **+130% · −57,4%** | +38% · −11,5% | +25% | −9,7% | 1,2 | 1,10 → 1,00 | +13% | 0,16 |
> | 4513 | GPS médias + MACD + Rompe 200 + Onda | **+142% · −36,0%** | +43% · −9,3% | +29% | −11,3% | 1,5 | 0,88 → 1,26 | +22% | 0,22 |
> | 4514 | VWAP + BB explosão + GPS médias + MACD + Quinta ⚠️ | **+128% · −56,6%** | +39% · −12,6% | +27% | −13,5% | 1,0 | 1,04 → 1,03 | +18% | 0,17 |
> | 4515 | Donchian + BB explosão + Onda | **+132% · −53,8%** | +55% · −16,6% | +33% | −11,8% | 1,7 | 0,79 → 1,26 | +26% | 0,40 |
> | 4516 | ADX + VWAP + BB explosão + 1ª vela 80 ⚠️ | **+143% · −57,0%** | +47% · −15,4% | +30% | −10,7% | 1,6 | 0,74 → 1,41 | +20% | 0,28 |
> | 4517 | BB explosão + GPS médias + Quinta + Rompe 200 ⚠️ | **+104% · −47,3%** | +37% · −12,4% | +24% | −7,9% | 1,5 | 1,37 → 0,90 | +13% | 0,11 |
> | 4518 | VWAP + Donchian + BB explosão + MACD + Rompe 200 | **+146% · −58,4%** | +42% · −12,8% | +28% | −13,1% | 1,1 | 1,01 → 1,07 | +15% | 0,36 |
> | 4519 | ADX + VWAP + BB explosão + Pullback + Onda | **+152% · −62,0%** | +44% · −13,4% | +29% | −9,8% | 1,6 | 0,80 → 1,31 | +20% | 0,20 |
> | 4520 | MACD + Bollinger + Onda | **+127% · −24,5%** | +46% · −7,6% | +30% | −10,5% | 1,6 | 0,53 → 1,62 | +15% | 0,29 |
> | 4521 | BB explosão + MACD + Pôr do sol + Rompe 200 | **+87% · −34,5%** | +31% · −7,8% | +23% | −7,6% | 1,3 | 0,93 → 1,19 | +18% | 0,03 |
> | 4522 | VWAP + Rompe 200 + Tendência + Onda | **+124% · −40,1%** | +40% · −10,3% | +29% | −11,2% | 1,5 | 0,91 → 1,15 | +25% | 0,25 |
> | 4523 | VWAP + BB explosão + IFR + MACD | **+136% · −47,6%** | +44% · −12,5% | +30% | −13,7% | 1,3 | 0,91 → 1,26 | +20% | 0,39 |
> | 4524 | VWAP + Pôr do sol + Rompe 200 + Bollinger | **+88% · −27,3%** | +30% · −6,3% | +20% | −9,5% | 0,8 | 1,11 → 1,04 | +16% | 0,09 |
> | 4525 | VWAP + Donchian + BB explosão + Quinta + Rompe 200 ⚠️ | **+128% · −59,8%** | +38% · −11,7% | +25% | −9,6% | 1,2 | 1,16 → 0,98 | +12% | 0,15 |
> | 4526 | VWAP + BB explosão + Pôr do sol + Rompe 200 + Bollinger | **+116% · −41,2%** | +32% · −8,2% | +22% | −9,3% | 0,9 | 1,04 → 1,04 | +14% | 0,13 |
> | 4527 | VWAP + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+80% · −26,9%** | +28% · −6,3% | +22% | −8,4% | 1,1 | 0,88 → 1,38 | +15% | 0,00 |
> | 4528 | ADX + BB explosão | **+91% · −54,5%** | +56% · −30,5% | +32% | −10,8% | 1,8 | 0,68 → 1,32 | +19% | 0,36 |
> | 4529 | VWAP + Donchian + BB explosão + GPS médias + Rompe 200 | **+154% · −68,6%** | +48% · −16,0% | +29% | −12,5% | 1,3 | 1,22 → 0,96 | +13% | 0,37 |
> | 4530 | VWAP + Donchian + BB explosão + GPS médias | **+145% · −65,4%** | +54% · −19,4% | +31% | −14,9% | 1,2 | 1,16 → 0,98 | +13% | 0,48 |

> [!example]- Combinações 4531 a 4560 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4531 | VWAP + Donchian + BB explosão + MACD + Pôr do sol | **+150% · −54,3%** | +42% · −11,4% | +27% | −12,2% | 1,2 | 0,96 → 1,15 | +18% | 0,24 |
> | 4532 | VWAP + Donchian + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+187% · −48,5%** | +44% · −10,7% | +29% | −12,4% | 1,3 | 0,86 → 1,36 | +23% | 0,25 |
> | 4533 | MACD + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+101% · −22,7%** | +29% · −4,3% | +23% | −6,1% | 1,7 | 0,67 → 1,45 | +17% | 0,01 |
> | 4534 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+156% · −40,0%** | +39% · −8,2% | +28% | −9,9% | 1,5 | 0,63 → 1,55 | +15% | 0,11 |
> | 4535 | VWAP + GPS médias + Pôr do sol + Bollinger + Onda | **+181% · −43,6%** | +42% · −9,2% | +27% | −11,2% | 1,2 | 0,90 → 1,28 | +24% | 0,14 |
> | 4536 | Pullback + Onda | **+63% · −19,9%** | +37% · −9,5% | +29% | −8,7% | 1,8 | 0,76 → 1,24 | +22% | 0,16 |
> | 4537 | GPS médias + Pôr do sol + Onda | **+108% · −30,2%** | +44% · −9,1% | +28% | −9,5% | 1,6 | 0,82 → 1,25 | +19% | −0,05 |
> | 4538 | VWAP + IFR + Pôr do sol + Onda | **+127% · −29,9%** | +39% · −6,3% | +28% | −9,3% | 1,6 | 0,70 → 1,43 | +18% | 0,09 |
> | 4539 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+108% · −42,3%** | +31% · −8,9% | +23% | −9,3% | 1,1 | 0,93 → 1,28 | +18% | 0,01 |
> | 4540 | BB explosão + GPS médias + Pôr do sol + Rompe 200 + Onda | **+132% · −49,8%** | +39% · −10,3% | +26% | −9,6% | 1,4 | 0,94 → 1,14 | +21% | 0,10 |
> | 4541 | ADX + VWAP + BB explosão + MACD + Quinta ⚠️ | **+139% · −61,7%** | +40% · −13,8% | +27% | −8,8% | 1,6 | 0,78 → 1,32 | +19% | 0,16 |
> | 4542 | BB explosão + 1ª vela 80 ⚠️ | **+77% · −33,0%** | +45% · −16,0% | +30% | −11,8% | 1,4 | 0,82 → 1,36 | +15% | 0,09 |
> | 4543 | Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+102% · −26,0%** | +33% · −5,2% | +25% | −7,1% | 1,7 | 0,59 → 1,56 | +14% | 0,09 |
> | 4544 | BB explosão + GPS médias + MACD + Pôr do sol + Onda | **+153% · −50,5%** | +43% · −10,5% | +29% | −10,4% | 1,5 | 0,84 → 1,28 | +21% | 0,13 |
> | 4545 | VWAP + BB explosão + MACD + Pullback + Rompe 200 | **+111% · −48,8%** | +33% · −10,3% | +25% | −11,6% | 1,0 | 1,13 → 1,01 | +14% | 0,18 |
> | 4546 | BB explosão + Pôr do sol + Rompe 200 + Bollinger + Onda | **+142% · −38,7%** | +36% · −7,3% | +24% | −7,6% | 1,4 | 0,79 → 1,40 | +17% | 0,07 |
> | 4547 | VWAP + Donchian + Bollinger + Onda | **+191% · −37,3%** | +51% · −9,6% | +30% | −12,7% | 1,4 | 0,84 → 1,35 | +21% | 0,31 |
> | 4548 | ADX + VWAP + BB explosão + Quinta + Rompe 200 ⚠️ | **+118% · −55,9%** | +36% · −12,4% | +24% | −7,7% | 1,5 | 0,89 → 1,17 | +15% | 0,10 |
> | 4549 | VWAP + BB explosão + GPS médias + Bollinger | **+144% · −54,7%** | +47% · −15,7% | +28% | −14,3% | 1,0 | 1,13 → 1,00 | +15% | 0,42 |
> | 4550 | BB explosão + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+129% · −39,0%** | +35% · −7,9% | +25% | −8,3% | 1,5 | 0,76 → 1,43 | +16% | 0,02 |
> | 4551 | BB explosão + Quinta + Bollinger + Onda ⚠️ | **+128% · −37,5%** | +39% · −8,9% | +25% | −8,1% | 1,5 | 0,72 → 1,44 | +16% | 0,03 |
> | 4552 | BB explosão + Pullback + Onda | **+91% · −36,5%** | +39% · −12,2% | +28% | −9,4% | 1,6 | 0,84 → 1,20 | +23% | 0,13 |
> | 4553 | VWAP + MACD + Quinta + Bollinger ⚠️ | **+112% · −31,9%** | +34% · −7,7% | +24% | −11,2% | 1,0 | 0,93 → 1,28 | +17% | 0,17 |
> | 4554 | VWAP + BB explosão + Quinta + Rompe 200 + Bollinger ⚠️ | **+114% · −40,0%** | +32% · −8,2% | +22% | −9,2% | 1,0 | 1,11 → 1,01 | +13% | 0,13 |
> | 4555 | ADX + VWAP + Pôr do sol + Quinta + Onda ⚠️ | **+130% · −40,3%** | +36% · −6,6% | +25% | −6,7% | 1,8 | 0,55 → 1,45 | +14% | 0,01 |
> | 4556 | VWAP + GPS médias + Rompe 200 + Bollinger + Onda | **+179% · −45,7%** | +42% · −10,1% | +27% | −12,5% | 1,1 | 0,96 → 1,18 | +25% | 0,25 |
> | 4557 | GPS médias | **+67% · −23,3%** | +67% · −23,3% | +36% | −15,3% | 1,5 | 1,40 → 0,85 | +16% | — |
> | 4558 | VWAP + BB explosão + GPS médias + Rompe 200 + Bollinger | **+155% · −54,8%** | +42% · −12,3% | +26% | −12,0% | 1,1 | 1,21 → 0,98 | +14% | 0,32 |
> | 4559 | VWAP + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+160% · −39,9%** | +38% · −8,3% | +29% | −12,9% | 1,2 | 0,81 → 1,44 | +21% | 0,19 |
> | 4560 | VWAP + BB explosão + Rompe 200 + Tendência + Onda | **+138% · −57,6%** | +40% · −12,7% | +29% | −11,5% | 1,4 | 0,92 → 1,13 | +20% | 0,29 |

> [!example]- Combinações 4561 a 4590 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4561 | ADX + VWAP + Rompe 200 + Bollinger + Onda | **+184% · −41,4%** | +43% · −7,7% | +27% | −9,0% | 1,6 | 0,67 → 1,46 | +19% | 0,22 |
> | 4562 | VWAP + Pullback + Bollinger + Onda | **+133% · −31,8%** | +39% · −7,9% | +26% | −11,5% | 1,2 | 0,89 → 1,30 | +19% | 0,21 |
> | 4563 | ADX + VWAP + GPS médias + MACD + Onda | **+190% · −54,0%** | +51% · −11,6% | +32% | −12,2% | 1,6 | 0,75 → 1,37 | +24% | 0,28 |
> | 4564 | VWAP + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+166% · −37,3%** | +38% · −7,6% | +26% | −10,6% | 1,2 | 0,69 → 1,57 | +18% | 0,10 |
> | 4565 | VWAP + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+132% · −42,5%** | +34% · −9,0% | +26% | −11,4% | 1,1 | 0,89 → 1,31 | +21% | 0,15 |
> | 4566 | 1ª vela 80 + Quinta + Onda ⚠️ | **+89% · −23,6%** | +36% · −6,4% | +27% | −8,5% | 1,7 | 0,49 → 1,61 | +11% | −0,15 |
> | 4567 | VWAP + BB explosão + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+106% · −48,6%** | +31% · −10,9% | +23% | −10,5% | 1,0 | 0,98 → 1,15 | +16% | 0,07 |
> | 4568 | VWAP + Donchian + BB explosão + GPS médias + Onda | **+161% · −67,4%** | +52% · −15,2% | +31% | −14,3% | 1,3 | 0,94 → 1,11 | +22% | 0,40 |
> | 4569 | VWAP + Quinta + Rompe 200 + Bollinger ⚠️ | **+86% · −27,2%** | +29% · −6,4% | +20% | −9,4% | 0,8 | 1,22 → 1,00 | +15% | 0,08 |
> | 4570 | ADX + VWAP + MACD + 1ª vela 80 + Onda ⚠️ | **+191% · −48,3%** | +47% · −9,7% | +31% | −11,8% | 1,6 | 0,55 → 1,57 | +20% | 0,27 |
> | 4571 | VWAP + Pôr do sol + Quinta + Pullback ⚠️ | **+62% · −24,1%** | +25% · −5,4% | +20% | −6,7% | 1,1 | 1,48 → 0,90 | +13% | −0,02 |
> | 4572 | ADX + VWAP + GPS médias + Rompe 200 + Onda | **+169% · −52,5%** | +46% · −11,2% | +29% | −10,9% | 1,5 | 0,83 → 1,27 | +25% | 0,21 |
> | 4573 | ADX + VWAP + Bollinger + Onda | **+170% · −40,5%** | +49% · −9,6% | +29% | −10,0% | 1,7 | 0,55 → 1,51 | +17% | 0,29 |
> | 4574 | VWAP + Donchian + MACD + 1ª vela 80 + Onda ⚠️ | **+211% · −47,4%** | +48% · −10,0% | +32% | −14,1% | 1,3 | 0,77 → 1,43 | +23% | 0,35 |
> | 4575 | VWAP + Donchian + Pôr do sol + Quinta + Onda ⚠️ | **+147% · −37,3%** | +38% · −7,0% | +26% | −8,8% | 1,5 | 0,84 → 1,28 | +18% | 0,02 |
> | 4576 | VWAP + GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+163% · −46,0%** | +41% · −9,7% | +28% | −12,3% | 1,2 | 0,86 → 1,32 | +22% | 0,05 |
> | 4577 | BB explosão + GPS médias + Quinta + Onda ⚠️ | **+120% · −49,1%** | +43% · −13,1% | +28% | −10,5% | 1,4 | 0,89 → 1,14 | +21% | 0,04 |
> | 4578 | VWAP + GPS médias + Pôr do sol + Quinta ⚠️ | **+98% · −32,4%** | +33% · −8,0% | +23% | −9,2% | 1,1 | 1,28 → 0,95 | +18% | −0,04 |
> | 4579 | VWAP + MACD + Pullback + Rompe 200 | **+87% · −30,8%** | +30% · −7,4% | +24% | −11,3% | 1,0 | 1,19 → 0,98 | +17% | 0,13 |
> | 4580 | ADX + VWAP + Quinta ⚠️ | **+87% · −36,8%** | +39% · −11,3% | +26% | −7,3% | 1,8 | 0,69 → 1,27 | +11% | 0,02 |
> | 4581 | BB explosão + 1ª vela 80 + Quinta + Onda ⚠️ | **+118% · −36,9%** | +38% · −9,0% | +27% | −8,9% | 1,6 | 0,63 → 1,48 | +14% | −0,06 |
> | 4582 | BB explosão + Pôr do sol + Bollinger + Onda | **+130% · −38,5%** | +39% · −9,2% | +25% | −8,0% | 1,6 | 0,65 → 1,47 | +16% | 0,05 |
> | 4583 | VWAP + MACD + Tendência + Onda | **+147% · −39,6%** | +45% · −10,0% | +33% | −13,1% | 1,5 | 0,80 → 1,27 | +26% | 0,40 |
> | 4584 | VWAP + BB explosão + Pullback + Bollinger + Onda | **+157% · −46,5%** | +40% · −9,8% | +26% | −11,7% | 1,2 | 0,91 → 1,23 | +21% | 0,23 |
> | 4585 | BB explosão + GPS médias + MACD + Rompe 200 + Onda | **+150% · −52,2%** | +43% · −11,2% | +29% | −11,7% | 1,4 | 0,88 → 1,20 | +22% | 0,26 |
> | 4586 | Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+90% · −25,4%** | +37% · −7,2% | +27% | −8,3% | 1,7 | 0,41 → 1,64 | +11% | 0,08 |
> | 4587 | VWAP + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+79% · −35,3%** | +28% · −9,1% | +22% | −9,9% | 0,9 | 0,96 → 1,19 | +18% | 0,02 |
> | 4588 | VWAP + BB explosão + IFR + Quinta + Onda ⚠️ | **+144% · −43,6%** | +39% · −8,6% | +28% | −10,2% | 1,5 | 0,80 → 1,33 | +22% | 0,09 |
> | 4589 | BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+131% · −38,3%** | +35% · −7,7% | +25% | −8,3% | 1,5 | 0,70 → 1,45 | +15% | 0,07 |
> | 4590 | BB explosão + MACD + Rompe 200 + Bollinger + Onda | **+167% · −42,4%** | +40% · −8,5% | +27% | −9,9% | 1,4 | 0,75 → 1,42 | +18% | 0,22 |

> [!example]- Combinações 4591 a 4620 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4591 | VWAP + BB explosão + GPS médias + MACD + Pôr do sol | **+130% · −55,7%** | +40% · −12,3% | +27% | −13,7% | 1,0 | 0,99 → 1,05 | +19% | 0,19 |
> | 4592 | VWAP + GPS médias + Pullback | **+105% · −38,5%** | +43% · −13,7% | +28% | −12,6% | 1,2 | 1,48 → 0,87 | +15% | 0,11 |
> | 4593 | ADX + Rompe 200 + Onda | **+108% · −33,4%** | +45% · −10,7% | +29% | −9,0% | 1,8 | 0,49 → 1,46 | +20% | 0,07 |
> | 4594 | BB explosão + MACD + Quinta ⚠️ | **+76% · −36,2%** | +34% · −11,7% | +25% | −9,1% | 1,3 | 0,88 → 1,20 | +18% | 0,00 |
> | 4595 | VWAP + IFR + MACD + Rompe 200 + Onda | **+160% · −37,1%** | +39% · −7,3% | +29% | −11,1% | 1,4 | 0,76 → 1,37 | +23% | 0,27 |
> | 4596 | ADX + VWAP + BB explosão + MACD + Pôr do sol | **+141% · −61,0%** | +41% · −13,5% | +27% | −9,0% | 1,6 | 0,73 → 1,33 | +18% | 0,16 |
> | 4597 | VWAP + BB explosão + MACD + Quinta + Bollinger ⚠️ | **+139% · −45,0%** | +36% · −9,6% | +25% | −11,5% | 1,0 | 0,93 → 1,21 | +18% | 0,20 |
> | 4598 | VWAP + Donchian + MACD | **+126% · −35,2%** | +49% · −12,6% | +31% | −16,6% | 1,1 | 0,94 → 1,13 | +20% | 0,49 |
> | 4599 | VWAP + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+168% · −37,4%** | +38% · −7,6% | +26% | −10,8% | 1,2 | 0,64 → 1,58 | +18% | 0,18 |
> | 4600 | VWAP + BB explosão + MACD + Tendência + Onda | **+157% · −61,1%** | +45% · −14,0% | +32% | −13,0% | 1,5 | 0,83 → 1,23 | +26% | 0,40 |
> | 4601 | VWAP + GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+108% · −38,5%** | +31% · −7,9% | +22% | −8,0% | 1,1 | 1,37 → 0,91 | +16% | 0,01 |
> | 4602 | VWAP + BB explosão + Quinta + Bollinger ⚠️ | **+103% · −39,8%** | +35% · −9,7% | +23% | −10,3% | 1,0 | 0,99 → 1,06 | +13% | 0,15 |
> | 4603 | ADX + VWAP + GPS médias + Onda | **+158% · −52,4%** | +53% · −14,3% | +32% | −12,1% | 1,6 | 0,74 → 1,30 | +24% | 0,26 |
> | 4604 | MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+128% · −31,5%** | +38% · −7,0% | +28% | −10,8% | 1,4 | 0,60 → 1,54 | +15% | 0,21 |
> | 4605 | VWAP + Donchian + BB explosão + Bollinger + Onda | **+197% · −56,6%** | +49% · −12,0% | +29% | −12,7% | 1,3 | 0,85 → 1,27 | +22% | 0,36 |
> | 4606 | VWAP + Donchian + Quinta + Rompe 200 + Onda ⚠️ | **+145% · −41,6%** | +38% · −8,5% | +26% | −10,2% | 1,3 | 0,89 → 1,17 | +21% | 0,08 |
> | 4607 | VWAP + Tendência + Onda | **+114% · −33,6%** | +46% · −11,0% | +33% | −13,2% | 1,6 | 0,81 → 1,19 | +26% | 0,34 |
> | 4608 | VWAP + GPS médias + MACD + Bollinger + Onda | **+204% · −50,6%** | +47% · −11,5% | +29% | −14,2% | 1,2 | 0,85 → 1,31 | +25% | 0,33 |
> | 4609 | ADX + Rompe 200 | **+75% · −29,3%** | +45% · −14,4% | +28% | −9,1% | 1,6 | 0,71 → 1,32 | +20% | −0,02 |
> | 4610 | ADX + VWAP + BB explosão + Pôr do sol + Rompe 200 | **+120% · −54,7%** | +36% · −12,0% | +24% | −7,7% | 1,5 | 0,83 → 1,20 | +16% | 0,09 |
> | 4611 | ADX + VWAP + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+165% · −46,6%** | +42% · −9,3% | +28% | −10,3% | 1,5 | 0,60 → 1,50 | +20% | 0,19 |
> | 4612 | ADX + VWAP + Pôr do sol + Rompe 200 | **+99% · −37,1%** | +35% · −7,9% | +23% | −6,8% | 1,6 | 0,78 → 1,24 | +14% | 0,03 |
> | 4613 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+117% · −36,3%** | +31% · −7,0% | +24% | −11,1% | 1,0 | 0,86 → 1,33 | +19% | 0,15 |
> | 4614 | ADX + VWAP + BB explosão + Quinta ⚠️ | **+108% · −58,5%** | +40% · −16,4% | +26% | −8,2% | 1,6 | 0,78 → 1,21 | +16% | 0,12 |
> | 4615 | VWAP + GPS médias + MACD + Rompe 200 | **+119% · −43,0%** | +39% · −11,6% | +27% | −15,0% | 0,9 | 1,08 → 0,98 | +20% | 0,26 |
> | 4616 | GPS médias + MACD + Onda | **+131% · −33,8%** | +51% · −11,7% | +33% | −13,8% | 1,5 | 0,78 → 1,30 | +22% | 0,27 |
> | 4617 | ADX + Onda | **+97% · −33,6%** | +56% · −16,1% | +35% | −12,1% | 1,8 | 0,32 → 1,53 | +18% | 0,06 |
> | 4618 | VWAP + Donchian + 1ª vela 80 + Onda ⚠️ | **+175% · −41,9%** | +50% · −10,9% | +32% | −14,2% | 1,3 | 0,77 → 1,40 | +22% | 0,30 |
> | 4619 | BB explosão + Quinta ⚠️ | **+46% · −31,5%** | +30% · −15,7% | +22% | −6,4% | 1,4 | 0,96 → 0,90 | +10% | −0,19 |
> | 4620 | VWAP + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+95% · −29,3%** | +28% · −5,1% | +23% | −7,8% | 1,3 | 0,88 → 1,19 | +16% | −0,01 |

> [!example]- Combinações 4621 a 4650 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4621 | GPS médias + Rompe 200 + Onda | **+107% · −31,9%** | +44% · −10,5% | +28% | −11,8% | 1,3 | 0,89 → 1,11 | +22% | 0,21 |
> | 4622 | BB explosão + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+120% · −37,5%** | +38% · −9,3% | +27% | −9,1% | 1,6 | 0,58 → 1,51 | +13% | 0,05 |
> | 4623 | VWAP + BB explosão + IFR + Pôr do sol + Onda | **+146% · −41,9%** | +40% · −8,6% | +28% | −10,1% | 1,5 | 0,75 → 1,34 | +22% | 0,13 |
> | 4624 | GPS médias + Rompe 200 | **+76% · −25,7%** | +44% · −12,1% | +27% | −9,4% | 1,5 | 1,49 → 0,79 | +17% | 0,26 |
> | 4625 | VWAP + GPS médias + MACD | **+109% · −41,3%** | +45% · −14,9% | +30% | −18,9% | 0,9 | 0,99 → 1,01 | +23% | 0,36 |
> | 4626 | BB explosão + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+154% · −42,9%** | +39% · −9,1% | +28% | −11,2% | 1,4 | 0,69 → 1,45 | +16% | 0,21 |
> | 4627 | VWAP + Donchian | **+93% · −35,4%** | +53% · −17,2% | +31% | −17,0% | 1,1 | 1,02 → 0,96 | +14% | 0,42 |
> | 4628 | Pôr do sol | **+20% · −3,0%** | +20% · −3,0% | +17% | −2,7% | 1,4 | 0,79 → 1,34 | +12% | — |
> | 4629 | BB explosão + MACD + Bollinger + Onda | **+155% · −42,2%** | +45% · −10,5% | +29% | −11,1% | 1,5 | 0,64 → 1,46 | +17% | 0,29 |
> | 4630 | BB explosão + GPS médias + Pôr do sol + Onda | **+122% · −49,6%** | +43% · −13,3% | +28% | −10,5% | 1,4 | 0,84 → 1,17 | +21% | 0,07 |
> | 4631 | VWAP + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+94% · −35,5%** | +28% · −7,0% | +23% | −9,2% | 1,1 | 0,95 → 1,06 | +19% | 0,04 |
> | 4632 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+166% · −45,6%** | +41% · −9,8% | +28% | −12,4% | 1,2 | 0,82 → 1,33 | +22% | 0,14 |
> | 4633 | VWAP + BB explosão + Tendência + Onda | **+129% · −57,8%** | +45% · −16,5% | +32% | −13,1% | 1,4 | 0,84 → 1,16 | +23% | 0,38 |
> | 4634 | VWAP + BB explosão + GPS médias + MACD + Rompe 200 | **+127% · −59,2%** | +40% · −13,7% | +27% | −14,5% | 1,0 | 1,03 → 0,98 | +16% | 0,31 |
> | 4635 | BB explosão + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+117% · −35,0%** | +33% · −6,4% | +25% | −7,6% | 1,6 | 0,63 → 1,41 | +17% | −0,00 |
> | 4636 | ADX + VWAP + 1ª vela 80 + Onda ⚠️ | **+153% · −46,5%** | +48% · −12,1% | +31% | −11,5% | 1,6 | 0,50 → 1,55 | +18% | 0,24 |
> | 4637 | VWAP + IFR + MACD + Onda | **+149% · −35,0%** | +44% · −8,7% | +32% | −12,7% | 1,5 | 0,67 → 1,41 | +21% | 0,33 |
> | 4638 | VWAP + Donchian + BB explosão | **+108% · −58,5%** | +49% · −19,9% | +30% | −15,3% | 1,1 | 0,97 → 0,96 | +10% | 0,53 |
> | 4639 | Pôr do sol + Quinta + Rompe 200 ⚠️ | **+34% · −11,2%** | +20% · −2,9% | +17% | −2,7% | 1,5 | 1,43 → 0,79 | +16% | 0,06 |
> | 4640 | ADX + VWAP + Pôr do sol | **+89% · −38,7%** | +39% · −11,4% | +25% | −7,5% | 1,7 | 0,61 → 1,30 | +10% | 0,03 |
> | 4641 | VWAP + BB explosão + GPS médias + Pôr do sol + Quinta ⚠️ | **+111% · −51,4%** | +35% · −10,8% | +24% | −9,9% | 1,1 | 1,15 → 0,93 | +15% | 0,04 |
> | 4642 | VWAP + Donchian + BB explosão + MACD | **+137% · −56,7%** | +47% · −16,0% | +30% | −15,6% | 1,1 | 0,93 → 1,10 | +16% | 0,49 |
> | 4643 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+108% · −47,0%** | +32% · −10,5% | +23% | −10,6% | 1,0 | 0,92 → 1,18 | +16% | 0,11 |
> | 4644 | ADX + VWAP + MACD + Quinta + Onda ⚠️ | **+152% · −44,3%** | +40% · −7,8% | +28% | −9,5% | 1,6 | 0,55 → 1,46 | +17% | 0,10 |
> | 4645 | VWAP + GPS médias + Pullback + Rompe 200 | **+115% · −43,6%** | +37% · −11,9% | +25% | −10,8% | 1,2 | 1,54 → 0,83 | +14% | 0,14 |
> | 4646 | ADX + VWAP + BB explosão + Bollinger + Onda | **+185% · −61,3%** | +48% · −13,3% | +29% | −10,5% | 1,5 | 0,63 → 1,42 | +21% | 0,32 |
> | 4647 | VWAP + GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+163% · −47,5%** | +41% · −10,6% | +28% | −13,8% | 1,1 | 0,87 → 1,25 | +23% | 0,24 |
> | 4648 | VWAP + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+196% · −44,9%** | +42% · −9,6% | +29% | −13,6% | 1,2 | 0,63 → 1,54 | +18% | 0,34 |
> | 4649 | BB explosão + GPS médias + Rompe 200 + Onda | **+120% · −51,1%** | +43% · −14,0% | +28% | −12,2% | 1,2 | 0,90 → 1,07 | +22% | 0,27 |
> | 4650 | VWAP + BB explosão + 1ª vela 80 + Pullback + Onda ⚠️ | **+144% · −48,0%** | +39% · −10,5% | +28% | −12,9% | 1,2 | 0,84 → 1,30 | +23% | 0,17 |

> [!example]- Combinações 4651 a 4680 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4651 | VWAP + Donchian + BB explosão + 1ª vela 80 + Onda ⚠️ | **+181% · −58,2%** | +48% · −12,1% | +31% | −13,9% | 1,3 | 0,80 → 1,32 | +25% | 0,33 |
> | 4652 | VWAP + MACD + Rompe 200 + Bollinger | **+113% · −34,5%** | +35% · −8,5% | +24% | −12,5% | 0,9 | 0,93 → 1,16 | +20% | 0,28 |
> | 4653 | BB explosão + GPS médias + MACD + Onda | **+140% · −51,8%** | +49% · −14,2% | +32% | −13,4% | 1,4 | 0,80 → 1,23 | +22% | 0,32 |
> | 4654 | VWAP + BB explosão + GPS médias + Pullback | **+118% · −56,3%** | +42% · −16,2% | +28% | −12,7% | 1,2 | 1,31 → 0,88 | +12% | 0,23 |
> | 4655 | ADX + VWAP + BB explosão + Pôr do sol | **+110% · −57,7%** | +40% · −15,9% | +26% | −8,1% | 1,6 | 0,72 → 1,23 | +16% | 0,11 |
> | 4656 | VWAP + MACD + Quinta + Pullback + Onda ⚠️ | **+119% · −33,4%** | +32% · −6,4% | +26% | −10,7% | 1,2 | 0,84 → 1,27 | +19% | 0,05 |
> | 4657 | VWAP + Donchian + MACD + Quinta + Onda ⚠️ | **+168% · −41,9%** | +42% · −8,7% | +29% | −11,7% | 1,3 | 0,79 → 1,30 | +21% | 0,15 |
> | 4658 | VWAP + IFR + Rompe 200 + Onda | **+125% · −29,9%** | +39% · −7,3% | +28% | −11,1% | 1,4 | 0,77 → 1,31 | +22% | 0,23 |
> | 4659 | VWAP + Donchian + BB explosão + Rompe 200 | **+118% · −61,3%** | +42% · −15,1% | +27% | −12,5% | 1,1 | 1,06 → 0,93 | +11% | 0,36 |
> | 4660 | ADX + VWAP + MACD + Rompe 200 | **+121% · −40,3%** | +40% · −9,8% | +27% | −9,7% | 1,5 | 0,73 → 1,30 | +17% | 0,18 |
> | 4661 | VWAP + GPS médias + Bollinger + Onda | **+166% · −43,9%** | +48% · −11,9% | +29% | −14,3% | 1,1 | 0,86 → 1,22 | +25% | 0,31 |
> | 4662 | 1ª vela 80 ⚠️ | **+47% · −13,6%** | +47% · −13,6% | +32% | −12,8% | 1,5 | 0,59 → 1,47 | +9% | — |
> | 4663 | ADX + VWAP + BB explosão + GPS médias + Onda | **+153% · −66,8%** | +50% · −16,2% | +31% | −12,3% | 1,5 | 0,77 → 1,24 | +26% | 0,32 |
> | 4664 | MACD + Pôr do sol | **+49% · −11,2%** | +30% · −5,4% | +24% | −7,5% | 1,5 | 0,65 → 1,38 | +19% | −0,04 |
> | 4665 | VWAP + BB explosão + MACD + 1ª vela 80 + Quinta ⚠️ | **+129% · −46,6%** | +35% · −10,2% | +26% | −12,9% | 1,0 | 0,85 → 1,29 | +21% | 0,12 |
> | 4666 | VWAP + BB explosão + MACD + Rompe 200 + Bollinger | **+138% · −47,2%** | +37% · −10,3% | +25% | −12,6% | 0,9 | 0,93 → 1,13 | +17% | 0,30 |
> | 4667 | VWAP + 1ª vela 80 + Pullback + Onda ⚠️ | **+121% · −34,9%** | +38% · −8,8% | +28% | −13,0% | 1,2 | 0,79 → 1,37 | +20% | 0,16 |
> | 4668 | VWAP + BB explosão + GPS médias + MACD | **+118% · −57,6%** | +44% · −16,7% | +29% | −17,4% | 0,9 | 0,96 → 0,99 | +18% | 0,42 |
> | 4669 | MACD + 1ª vela 80 + Onda ⚠️ | **+116% · −29,5%** | +44% · −9,1% | +32% | −13,5% | 1,4 | 0,46 → 1,60 | +12% | 0,28 |
> | 4670 | VWAP + BB explosão + GPS médias + Pullback + Rompe 200 | **+127% · −58,6%** | +38% · −13,7% | +26% | −11,2% | 1,1 | 1,37 → 0,86 | +12% | 0,21 |
> | 4671 | VWAP + MACD + Pôr do sol + Bollinger | **+114% · −32,3%** | +35% · −7,8% | +24% | −11,5% | 1,0 | 0,84 → 1,31 | +16% | 0,20 |
> | 4672 | ADX + VWAP + BB explosão + MACD + Rompe 200 | **+138% · −60,8%** | +41% · −13,9% | +27% | −10,4% | 1,4 | 0,79 → 1,25 | +19% | 0,24 |
> | 4673 | VWAP + BB explosão + IFR + MACD + Onda | **+163% · −47,9%** | +44% · −10,5% | +31% | −12,8% | 1,4 | 0,72 → 1,35 | +24% | 0,34 |
> | 4674 | VWAP + BB explosão + IFR + Rompe 200 + Onda | **+143% · −46,5%** | +40% · −9,4% | +28% | −11,5% | 1,3 | 0,80 → 1,25 | +22% | 0,26 |
> | 4675 | VWAP + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+72% · −32,8%** | +24% · −6,3% | +20% | −6,3% | 1,1 | 1,56 → 0,83 | +14% | 0,01 |
> | 4676 | VWAP + Donchian + Pôr do sol + Rompe 200 + Onda | **+146% · −41,1%** | +38% · −8,3% | +26% | −10,4% | 1,2 | 0,85 → 1,19 | +20% | 0,13 |
> | 4677 | VWAP + Donchian + Rompe 200 | **+103% · −42,2%** | +42% · −14,0% | +27% | −12,7% | 1,1 | 1,14 → 0,91 | +13% | 0,27 |
> | 4678 | VWAP + GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+186% · −52,1%** | +46% · −12,0% | +31% | −15,5% | 1,2 | 0,79 → 1,35 | +23% | 0,31 |
> | 4679 | ADX + VWAP + BB explosão + 1ª vela 80 + Onda ⚠️ | **+166% · −58,8%** | +47% · −13,2% | +30% | −11,8% | 1,5 | 0,59 → 1,46 | +21% | 0,26 |
> | 4680 | ADX + VWAP + MACD + Pôr do sol + Onda | **+154% · −43,8%** | +41% · −7,5% | +28% | −9,7% | 1,6 | 0,51 → 1,47 | +16% | 0,14 |

> [!example]- Combinações 4681 a 4710 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4681 | VWAP + GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+125% · −41,7%** | +35% · −8,9% | +25% | −11,6% | 1,0 | 0,92 → 1,05 | +24% | 0,06 |
> | 4682 | BB explosão + MACD + 1ª vela 80 + Onda ⚠️ | **+142% · −43,4%** | +44% · −10,6% | +31% | −12,8% | 1,4 | 0,58 → 1,49 | +15% | 0,25 |
> | 4683 | Bollinger + Onda | **+88% · −18,0%** | +48% · −8,5% | +29% | −10,0% | 1,6 | 0,42 → 1,58 | +12% | 0,17 |
> | 4684 | VWAP + IFR + Onda | **+114% · −29,1%** | +45% · −9,1% | +32% | −12,7% | 1,5 | 0,65 → 1,37 | +20% | 0,24 |
> | 4685 | VWAP + MACD + 1ª vela 80 + Quinta ⚠️ | **+104% · −34,0%** | +33% · −8,4% | +26% | −13,0% | 1,0 | 0,80 → 1,36 | +18% | 0,08 |
> | 4686 | VWAP + Pôr do sol + Bollinger | **+77% · −25,2%** | +33% · −7,9% | +21% | −11,1% | 0,8 | 0,93 → 1,14 | +13% | 0,12 |
> | 4687 | BB explosão + Pôr do sol + Rompe 200 | **+56% · −30,0%** | +28% · −9,4% | +20% | −6,1% | 1,2 | 1,01 → 0,90 | +12% | −0,05 |
> | 4688 | VWAP + BB explosão + MACD + Pôr do sol + Bollinger | **+141% · −45,3%** | +36% · −9,7% | +24% | −11,7% | 1,0 | 0,87 → 1,23 | +19% | 0,21 |
> | 4689 | Rompe 200 + Bollinger + Onda | **+99% · −20,2%** | +38% · −6,5% | +25% | −8,5% | 1,4 | 0,64 → 1,44 | +16% | 0,14 |
> | 4690 | Pullback + Rompe 200 | **+41% · −19,7%** | +27% · −9,7% | +21% | −5,3% | 1,6 | 1,80 → 0,51 | +11% | 0,13 |
> | 4691 | VWAP + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+80% · −28,0%** | +25% · −4,8% | +21% | −8,4% | 0,9 | 0,92 → 1,07 | +17% | 0,04 |
> | 4692 | VWAP + GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+127% · −38,5%** | +35% · −8,0% | +25% | −10,2% | 1,2 | 0,86 → 1,15 | +22% | −0,02 |
> | 4693 | VWAP + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+167% · −40,6%** | +38% · −8,6% | +26% | −12,1% | 1,1 | 0,71 → 1,46 | +19% | 0,25 |
> | 4694 | VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+81% · −34,6%** | +29% · −8,8% | +22% | −10,1% | 0,9 | 0,88 → 1,21 | +18% | 0,11 |
> | 4695 | VWAP + BB explosão + Rompe 200 + Bollinger | **+104% · −42,7%** | +35% · −10,9% | +23% | −12,1% | 0,8 | 0,97 → 0,96 | +12% | 0,29 |
> | 4696 | BB explosão + GPS médias | **+85% · −46,6%** | +53% · −25,3% | +31% | −14,3% | 1,3 | 1,15 → 0,86 | +13% | 0,60 |
> | 4697 | VWAP + BB explosão + GPS médias + Bollinger + Onda | **+170% · −60,3%** | +47% · −14,2% | +28% | −14,0% | 1,1 | 0,87 → 1,16 | +23% | 0,35 |
> | 4698 | Pôr do sol + Quinta + Onda ⚠️ | **+57% · −16,3%** | +27% · −4,3% | +22% | −5,2% | 1,7 | 0,39 → 1,40 | +14% | −0,09 |
> | 4699 | ADX + VWAP + MACD | **+111% · −44,4%** | +46% · −14,8% | +30% | −11,5% | 1,5 | 0,60 → 1,34 | +14% | 0,30 |
> | 4700 | ADX + VWAP + Quinta + Onda ⚠️ | **+117% · −39,6%** | +40% · −8,3% | +27% | −8,7% | 1,6 | 0,50 → 1,39 | +15% | 0,02 |
> | 4701 | VWAP + Donchian + MACD + Pôr do sol + Onda | **+170% · −42,0%** | +42% · −8,8% | +29% | −11,9% | 1,3 | 0,75 → 1,31 | +20% | 0,21 |
> | 4702 | VWAP + BB explosão + Pôr do sol + Pullback | **+81% · −40,7%** | +31% · −10,5% | +23% | −9,5% | 1,0 | 1,17 → 0,90 | +12% | 0,02 |
> | 4703 | BB explosão + MACD + Pôr do sol | **+77% · −34,1%** | +34% · −10,8% | +25% | −9,2% | 1,3 | 0,78 → 1,25 | +20% | −0,00 |
> | 4704 | BB explosão + GPS médias + Rompe 200 | **+94% · −48,6%** | +43% · −17,8% | +27% | −10,8% | 1,3 | 1,25 → 0,84 | +12% | 0,34 |
> | 4705 | ADX + VWAP + Quinta + Rompe 200 + Onda ⚠️ | **+128% · −37,1%** | +36% · −6,5% | +25% | −8,2% | 1,5 | 0,62 → 1,34 | +17% | 0,04 |
> | 4706 | VWAP + BB explosão + Pôr do sol + Bollinger | **+106% · −41,0%** | +35% · −10,2% | +23% | −10,5% | 0,9 | 0,91 → 1,09 | +15% | 0,15 |
> | 4707 | VWAP + Pôr do sol + Pullback + Rompe 200 + Onda | **+95% · −34,9%** | +29% · −6,8% | +23% | −9,3% | 1,1 | 0,89 → 1,07 | +18% | 0,07 |
> | 4708 | BB explosão + Pôr do sol | **+47% · −29,2%** | +31% · −14,3% | +22% | −6,2% | 1,4 | 0,81 → 0,99 | +12% | −0,29 |
> | 4709 | GPS médias + Onda | **+97% · −31,7%** | +55% · −15,5% | +34% | −14,6% | 1,4 | 0,77 → 1,16 | +20% | 0,20 |
> | 4710 | VWAP + Donchian + Quinta + Onda ⚠️ | **+134% · −35,4%** | +42% · −9,0% | +28% | −11,5% | 1,3 | 0,80 → 1,22 | +19% | 0,04 |

> [!example]- Combinações 4711 a 4740 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4711 | VWAP + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+96% · −43,9%** | +34% · −12,0% | +24% | −12,1% | 1,0 | 0,87 → 1,19 | +17% | 0,03 |
> | 4712 | BB explosão + MACD + Rompe 200 | **+76% · −38,0%** | +35% · −12,6% | +25% | −10,7% | 1,1 | 0,86 → 1,09 | +16% | 0,19 |
> | 4713 | VWAP + BB explosão + Quinta + Pullback + Onda ⚠️ | **+107% · −44,3%** | +33% · −8,8% | +25% | −10,7% | 1,1 | 0,87 → 1,10 | +19% | 0,05 |
> | 4714 | BB explosão + Rompe 200 + Bollinger + Onda | **+129% · −40,2%** | +40% · −9,8% | +25% | −9,8% | 1,3 | 0,74 → 1,32 | +17% | 0,19 |
> | 4715 | VWAP + MACD + Pôr do sol + Pullback + Onda | **+121% · −33,7%** | +33% · −6,5% | +25% | −10,9% | 1,2 | 0,79 → 1,28 | +18% | 0,09 |
> | 4716 | VWAP + Donchian + BB explosão + Quinta + Onda ⚠️ | **+143% · −53,4%** | +42% · −10,8% | +28% | −11,7% | 1,3 | 0,82 → 1,16 | +21% | 0,15 |
> | 4717 | ADX + VWAP + BB explosão + MACD | **+128% · −63,3%** | +45% · −18,7% | +29% | −11,7% | 1,4 | 0,69 → 1,28 | +20% | 0,35 |
> | 4718 | VWAP + BB explosão + IFR + Onda | **+133% · −44,5%** | +44% · −11,4% | +30% | −12,8% | 1,4 | 0,71 → 1,29 | +24% | 0,30 |
> | 4719 | VWAP + BB explosão + Quinta + Pullback ⚠️ | **+79% · −44,9%** | +30% · −11,0% | +23% | −9,4% | 1,1 | 1,25 → 0,87 | +10% | 0,02 |
> | 4720 | VWAP + BB explosão + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+129% · −48,8%** | +36% · −10,9% | +26% | −14,0% | 0,9 | 0,85 → 1,22 | +19% | 0,26 |
> | 4721 | MACD + Quinta + Rompe 200 + Onda ⚠️ | **+90% · −22,5%** | +31% · −4,9% | +24% | −7,9% | 1,5 | 0,61 → 1,37 | +17% | 0,01 |
> | 4722 | VWAP + Donchian + MACD + Rompe 200 + Onda | **+166% · −44,1%** | +42% · −9,4% | +29% | −13,2% | 1,2 | 0,80 → 1,23 | +23% | 0,31 |
> | 4723 | ADX | **+65% · −30,8%** | +65% · −30,8% | +38% | −15,4% | 1,6 | 0,45 → 1,41 | +12% | — |
> | 4724 | VWAP + BB explosão + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+131% · −46,9%** | +36% · −10,3% | +26% | −13,1% | 1,0 | 0,80 → 1,31 | +21% | 0,17 |
> | 4725 | MACD + Quinta + Onda ⚠️ | **+80% · −23,8%** | +34% · −6,3% | +27% | −8,9% | 1,6 | 0,45 → 1,44 | +15% | −0,06 |
> | 4726 | VWAP + GPS médias + MACD + Quinta + Onda ⚠️ | **+147% · −45,8%** | +39% · −9,9% | +28% | −13,1% | 1,1 | 0,82 → 1,21 | +25% | 0,10 |
> | 4727 | VWAP + MACD + Pullback + Rompe 200 + Onda | **+119% · −37,0%** | +33% · −7,5% | +26% | −12,2% | 1,0 | 0,84 → 1,18 | +21% | 0,18 |
> | 4728 | BB explosão + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+118% · −41,3%** | +39% · −9,9% | +27% | −10,8% | 1,3 | 0,65 → 1,39 | +15% | 0,18 |
> | 4729 | ADX + VWAP + Pôr do sol + Rompe 200 + Onda | **+130% · −38,9%** | +36% · −6,6% | +25% | −8,1% | 1,5 | 0,57 → 1,36 | +17% | 0,07 |
> | 4730 | BB explosão + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+115% · −37,2%** | +33% · −7,4% | +25% | −9,0% | 1,3 | 0,70 → 1,29 | +18% | 0,06 |
> | 4731 | BB explosão + GPS médias + Onda | **+110% · −50,9%** | +50% · −18,9% | +31% | −14,2% | 1,3 | 0,80 → 1,10 | +22% | 0,34 |
> | 4732 | VWAP + GPS médias + 1ª vela 80 + Onda ⚠️ | **+151% · −46,0%** | +47% · −12,7% | +31% | −15,8% | 1,1 | 0,78 → 1,28 | +23% | 0,28 |
> | 4733 | ADX + VWAP + Pôr do sol + Onda | **+119% · −40,7%** | +40% · −8,4% | +27% | −8,9% | 1,6 | 0,44 → 1,41 | +14% | 0,07 |
> | 4734 | Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+66% · −16,0%** | +25% · −3,7% | +21% | −5,2% | 1,5 | 0,62 → 1,28 | +16% | −0,02 |
> | 4735 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Onda ⚠️ | **+155% · −58,1%** | +46% · −13,7% | +30% | −15,2% | 1,1 | 0,81 → 1,22 | +23% | 0,31 |
> | 4736 | VWAP + GPS médias + Pôr do sol + Rompe 200 + Onda | **+127% · −41,9%** | +36% · −8,9% | +25% | −11,7% | 1,0 | 0,87 → 1,07 | +24% | 0,10 |
> | 4737 | VWAP + BB explosão + Pôr do sol + Pullback + Rompe 200 | **+90% · −45,7%** | +29% · −9,8% | +22% | −8,7% | 1,0 | 1,26 → 0,86 | +11% | 0,05 |
> | 4738 | ADX + VWAP + BB explosão + Rompe 200 | **+107% · −57,4%** | +40% · −16,4% | +26% | −9,9% | 1,3 | 0,78 → 1,13 | +15% | 0,23 |
> | 4739 | VWAP + 1ª vela 80 + Bollinger + Onda ⚠️ | **+154% · −37,8%** | +43% · −10,0% | +28% | −13,8% | 1,1 | 0,59 → 1,52 | +18% | 0,32 |
> | 4740 | VWAP + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+106% · −34,4%** | +34% · −8,5% | +26% | −13,2% | 1,0 | 0,73 → 1,38 | +17% | 0,19 |

> [!example]- Combinações 4741 a 4770 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4741 | ADX + VWAP + BB explosão + Quinta + Onda ⚠️ | **+132% · −59,8%** | +40% · −12,7% | +27% | −9,6% | 1,5 | 0,59 → 1,32 | +19% | 0,10 |
> | 4742 | BB explosão + Quinta + Rompe 200 ⚠️ | **+54% · −32,0%** | +27% · −10,1% | +20% | −6,3% | 1,2 | 1,13 → 0,83 | +10% | −0,00 |
> | 4743 | BB explosão + Bollinger + Onda | **+118% · −40,1%** | +46% · −13,6% | +28% | −11,0% | 1,4 | 0,59 → 1,39 | +15% | 0,24 |
> | 4744 | 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+90% · −25,0%** | +37% · −7,4% | +27% | −10,2% | 1,4 | 0,52 → 1,47 | +13% | 0,20 |
> | 4745 | BB explosão + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+94% · −33,3%** | +29% · −6,1% | +22% | −6,9% | 1,3 | 0,74 → 1,23 | +17% | −0,02 |
> | 4746 | VWAP + Rompe 200 + Bollinger | **+77% · −27,9%** | +33% · −9,2% | +21% | −13,3% | 0,6 | 1,02 → 0,91 | +15% | 0,24 |
> | 4747 | VWAP + BB explosão + GPS médias + Pôr do sol | **+102% · −52,6%** | +39% · −14,5% | +25% | −13,0% | 1,0 | 1,05 → 0,89 | +14% | 0,13 |
> | 4748 | VWAP + GPS médias + Pôr do sol | **+88% · −33,1%** | +38% · −11,2% | +25% | −13,1% | 0,9 | 1,14 → 0,88 | +18% | −0,01 |
> | 4749 | VWAP + BB explosão + Quinta + Pullback + Rompe 200 ⚠️ | **+88% · −49,7%** | +28% · −10,1% | +22% | −8,5% | 1,0 | 1,33 → 0,83 | +11% | 0,06 |
> | 4750 | VWAP + BB explosão + 1ª vela 80 + Bollinger + Onda ⚠️ | **+177% · −49,6%** | +43% · −11,4% | +28% | −13,6% | 1,1 | 0,67 → 1,41 | +18% | 0,31 |
> | 4751 | VWAP + BB explosão + GPS médias + Pôr do sol + Rompe 200 | **+110% · −54,3%** | +35% · −11,9% | +24% | −11,1% | 1,0 | 1,13 → 0,87 | +14% | 0,13 |
> | 4752 | VWAP + BB explosão + Pullback + Rompe 200 + Onda | **+106% · −47,5%** | +33% · −10,5% | +25% | −12,2% | 1,0 | 0,87 → 1,02 | +18% | 0,20 |
> | 4753 | VWAP + Quinta + Pullback + Onda ⚠️ | **+84% · −27,1%** | +30% · −6,2% | +24% | −10,2% | 1,1 | 0,83 → 1,11 | +17% | −0,00 |
> | 4754 | ADX + VWAP + MACD + Rompe 200 + Onda | **+151% · −43,6%** | +41% · −8,4% | +28% | −11,0% | 1,4 | 0,57 → 1,39 | +19% | 0,20 |
> | 4755 | VWAP + Donchian + BB explosão + Pôr do sol + Onda | **+145% · −52,4%** | +42% · −10,3% | +28% | −11,9% | 1,2 | 0,78 → 1,18 | +22% | 0,19 |
> | 4756 | VWAP + Donchian + Pôr do sol + Onda | **+135% · −37,2%** | +42% · −9,0% | +28% | −11,7% | 1,3 | 0,75 → 1,23 | +18% | 0,13 |
> | 4757 | VWAP + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+105% · −36,5%** | +34% · −9,2% | +26% | −14,3% | 0,9 | 0,81 → 1,26 | +21% | 0,25 |
> | 4758 | VWAP + Donchian + BB explosão + Rompe 200 + Onda | **+141% · −57,7%** | +42% · −12,1% | +28% | −13,2% | 1,1 | 0,82 → 1,10 | +20% | 0,32 |
> | 4759 | MACD + Pôr do sol + Rompe 200 + Onda | **+92% · −22,6%** | +31% · −5,2% | +24% | −8,1% | 1,4 | 0,55 → 1,39 | +17% | 0,06 |
> | 4760 | BB explosão + MACD + Pôr do sol + Rompe 200 + Onda | **+117% · −38,1%** | +33% · −7,4% | +25% | −9,1% | 1,3 | 0,65 → 1,32 | +18% | 0,08 |
> | 4761 | VWAP + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+124% · −30,7%** | +32% · −5,7% | +23% | −8,5% | 1,2 | 0,66 → 1,39 | +16% | 0,04 |
> | 4762 | BB explosão + MACD + Quinta + Onda ⚠️ | **+105% · −36,9%** | +36% · −8,4% | +27% | −9,9% | 1,4 | 0,58 → 1,34 | +17% | 0,03 |
> | 4763 | MACD + Pôr do sol + Onda | **+81% · −21,7%** | +34% · −6,8% | +27% | −9,1% | 1,5 | 0,38 → 1,47 | +15% | 0,06 |
> | 4764 | VWAP + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+97% · −48,4%** | +34% · −13,8% | +25% | −13,7% | 0,9 | 0,86 → 1,10 | +15% | 0,24 |
> | 4765 | VWAP + BB explosão + MACD + Quinta + Rompe 200 ⚠️ | **+93% · −45,0%** | +30% · −8,9% | +23% | −11,4% | 0,9 | 0,88 → 1,00 | +15% | 0,12 |
> | 4766 | VWAP + Donchian + Rompe 200 + Onda | **+133% · −41,5%** | +42% · −10,8% | +28% | −13,3% | 1,1 | 0,81 → 1,13 | +22% | 0,27 |
> | 4767 | VWAP + BB explosão + GPS médias + Quinta ⚠️ | **+100% · −53,6%** | +39% · −15,0% | +25% | −12,8% | 1,0 | 1,10 → 0,86 | +13% | 0,12 |
> | 4768 | VWAP + BB explosão + Pôr do sol + Pullback + Onda | **+109% · −42,6%** | +33% · −8,6% | +24% | −10,9% | 1,1 | 0,82 → 1,12 | +20% | 0,07 |
> | 4769 | ADX + VWAP + BB explosão + Pôr do sol + Onda | **+134% · −59,0%** | +41% · −12,4% | +27% | −9,7% | 1,5 | 0,55 → 1,33 | +18% | 0,12 |
> | 4770 | BB explosão + 1ª vela 80 + Onda ⚠️ | **+108% · −42,0%** | +44% · −13,3% | +30% | −12,7% | 1,4 | 0,52 → 1,43 | +12% | 0,19 |

> [!example]- Combinações 4771 a 4800 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4771 | VWAP + GPS médias + Pôr do sol + Rompe 200 | **+98% · −37,7%** | +34% · −9,9% | +23% | −10,6% | 1,0 | 1,24 → 0,84 | +16% | 0,06 |
> | 4772 | VWAP + GPS médias + MACD + Rompe 200 + Onda | **+146% · −48,0%** | +40% · −10,6% | +28% | −14,5% | 1,0 | 0,82 → 1,14 | +25% | 0,26 |
> | 4773 | VWAP + 1ª vela 80 + Quinta ⚠️ | **+69% · −27,3%** | +31% · −8,9% | +24% | −11,9% | 0,9 | 0,80 → 1,26 | +16% | −0,07 |
> | 4774 | VWAP + BB explosão + GPS médias + Quinta + Rompe 200 ⚠️ | **+109% · −55,4%** | +35% · −12,4% | +24% | −10,9% | 1,0 | 1,18 → 0,85 | +13% | 0,13 |
> | 4775 | VWAP + MACD + Quinta + Bollinger + Onda ⚠️ | **+151% · −37,7%** | +36% · −7,6% | +26% | −11,4% | 1,1 | 0,64 → 1,40 | +19% | 0,15 |
> | 4776 | ADX + VWAP + MACD + Onda | **+140% · −47,1%** | +46% · −11,0% | +31% | −12,5% | 1,4 | 0,47 → 1,42 | +18% | 0,28 |
> | 4777 | VWAP + GPS médias + MACD + Pôr do sol + Onda | **+149% · −46,1%** | +40% · −9,9% | +28% | −13,2% | 1,1 | 0,77 → 1,22 | +24% | 0,15 |
> | 4778 | BB explosão + Pôr do sol + Quinta + Onda ⚠️ | **+84% · −33,1%** | +31% · −7,2% | +23% | −7,1% | 1,4 | 0,59 → 1,29 | +16% | −0,09 |
> | 4779 | VWAP + BB explosão + GPS médias + Quinta + Onda ⚠️ | **+121% · −55,0%** | +39% · −12,1% | +27% | −13,1% | 1,1 | 0,83 → 1,05 | +22% | 0,11 |
> | 4780 | MACD + Rompe 200 | **+49% · −13,4%** | +31% · −6,0% | +24% | −9,6% | 1,2 | 0,79 → 1,08 | +22% | 0,06 |
> | 4781 | VWAP + Donchian + MACD + Onda | **+155% · −41,8%** | +48% · −11,2% | +31% | −15,2% | 1,2 | 0,71 → 1,26 | +22% | 0,41 |
> | 4782 | VWAP + Donchian + BB explosão + MACD + Onda | **+159% · −59,9%** | +47% · −12,5% | +30% | −14,7% | 1,2 | 0,74 → 1,22 | +25% | 0,42 |
> | 4783 | VWAP + GPS médias + Quinta ⚠️ | **+87% · −33,5%** | +38% · −11,5% | +25% | −12,8% | 1,0 | 1,22 → 0,84 | +17% | −0,06 |
> | 4784 | ADX + VWAP + BB explosão | **+98% · −60,2%** | +46% · −23,5% | +29% | −11,3% | 1,4 | 0,66 → 1,16 | +16% | 0,36 |
> | 4785 | VWAP + GPS médias + Quinta + Onda ⚠️ | **+115% · −38,9%** | +39% · −10,3% | +27% | −13,2% | 1,1 | 0,82 → 1,09 | +25% | 0,00 |
> | 4786 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+98% · −42,2%** | +34% · −11,3% | +24% | −12,3% | 0,9 | 0,80 → 1,22 | +18% | 0,11 |
> | 4787 | ADX + VWAP + BB explosão + MACD + Onda | **+150% · −64,6%** | +45% · −14,7% | +30% | −12,5% | 1,4 | 0,55 → 1,36 | +21% | 0,30 |
> | 4788 | VWAP + BB explosão + MACD + Pullback + Onda | **+128% · −48,1%** | +37% · −10,3% | +27% | −13,7% | 1,1 | 0,79 → 1,19 | +23% | 0,23 |
> | 4789 | VWAP + GPS médias + Quinta + Rompe 200 ⚠️ | **+96% · −39,0%** | +33% · −10,2% | +23% | −10,4% | 1,0 | 1,31 → 0,81 | +15% | 0,04 |
> | 4790 | ADX + VWAP + Rompe 200 | **+88% · −35,3%** | +39% · −11,3% | +26% | −9,8% | 1,3 | 0,71 → 1,15 | +14% | 0,12 |
> | 4791 | VWAP + BB explosão + MACD + Bollinger | **+128% · −45,5%** | +40% · −12,5% | +26% | −15,0% | 0,9 | 0,82 → 1,16 | +18% | 0,42 |
> | 4792 | BB explosão + MACD + Pôr do sol + Onda | **+107% · −37,9%** | +37% · −8,5% | +27% | −10,0% | 1,4 | 0,53 → 1,36 | +16% | 0,07 |
> | 4793 | VWAP + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+138% · −40,8%** | +35% · −8,1% | +27% | −12,6% | 1,1 | 0,58 → 1,44 | +18% | 0,10 |
> | 4794 | 1ª vela 80 + Onda ⚠️ | **+80% · −24,2%** | +45% · −11,3% | +32% | −13,8% | 1,4 | 0,34 → 1,55 | +8% | 0,26 |
> | 4795 | VWAP + BB explosão + MACD + Pôr do sol + Quinta ⚠️ | **+95% · −40,8%** | +30% · −8,1% | +23% | −10,5% | 0,9 | 0,82 → 1,10 | +17% | 0,06 |
> | 4796 | VWAP + MACD + Quinta + Rompe 200 ⚠️ | **+70% · −28,3%** | +27% · −6,5% | +22% | −11,0% | 0,8 | 0,86 → 0,98 | +18% | 0,06 |
> | 4797 | VWAP + BB explosão + GPS médias + Rompe 200 + Onda | **+120% · −56,8%** | +40% · −12,8% | +27% | −14,5% | 1,0 | 0,84 → 1,00 | +21% | 0,29 |
> | 4798 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+113% · −33,7%** | +31% · −6,3% | +24% | −9,8% | 1,1 | 0,58 → 1,45 | +17% | 0,02 |
> | 4799 | VWAP + Pullback + Rompe 200 + Onda | **+85% · −34,8%** | +31% · −8,8% | +24% | −12,1% | 0,9 | 0,84 → 1,00 | +20% | 0,18 |
> | 4800 | VWAP + MACD + Pôr do sol + Bollinger + Onda | **+153% · −38,0%** | +36% · −7,6% | +25% | −11,5% | 1,1 | 0,59 → 1,42 | +18% | 0,20 |

> [!example]- Combinações 4801 a 4830 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4801 | VWAP + BB explosão + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+74% · −40,6%** | +26% · −8,5% | +20% | −8,4% | 0,8 | 0,99 → 0,85 | +13% | 0,02 |
> | 4802 | VWAP + MACD + Pullback + Onda | **+109% · −34,0%** | +36% · −8,6% | +28% | −13,9% | 1,1 | 0,74 → 1,22 | +19% | 0,21 |
> | 4803 | VWAP + BB explosão + GPS médias + Pôr do sol + Onda | **+123% · −55,5%** | +40% · −12,3% | +27% | −13,2% | 1,0 | 0,79 → 1,07 | +23% | 0,15 |
> | 4804 | VWAP + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+123% · −34,4%** | +32% · −6,7% | +23% | −9,9% | 1,0 | 0,75 → 1,25 | +19% | 0,08 |
> | 4805 | VWAP + Pôr do sol + Pullback + Onda | **+86% · −30,2%** | +30% · −6,3% | +24% | −10,4% | 1,1 | 0,77 → 1,13 | +16% | 0,05 |
> | 4806 | VWAP + BB explosão + Pôr do sol + Quinta ⚠️ | **+65% · −36,6%** | +27% · −8,6% | +20% | −9,2% | 0,8 | 0,85 → 0,89 | +13% | −0,01 |
> | 4807 | VWAP + GPS médias + Rompe 200 + Onda | **+115% · −42,2%** | +39% · −11,5% | +27% | −15,0% | 0,9 | 0,83 → 1,01 | +25% | 0,24 |
> | 4808 | ADX + VWAP + BB explosão + Rompe 200 + Onda | **+131% · −58,9%** | +41% · −12,6% | +27% | −11,1% | 1,3 | 0,61 → 1,25 | +21% | 0,22 |
> | 4809 | VWAP + MACD + Bollinger | **+102% · −32,6%** | +40% · −11,0% | +26% | −15,7% | 0,9 | 0,78 → 1,22 | +17% | 0,46 |
> | 4810 | VWAP + Donchian + BB explosão + Onda | **+132% · −57,9%** | +48% · −14,6% | +30% | −15,2% | 1,1 | 0,74 → 1,13 | +22% | 0,41 |
> | 4811 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+140% · −40,4%** | +36% · −8,2% | +27% | −12,8% | 1,1 | 0,53 → 1,45 | +18% | 0,20 |
> | 4812 | VWAP + BB explosão + MACD + 1ª vela 80 ⚠️ | **+119% · −47,2%** | +40% · −13,2% | +28% | −16,7% | 0,9 | 0,75 → 1,25 | +21% | 0,34 |
> | 4813 | VWAP + BB explosão + Bollinger | **+94% · −42,5%** | +40% · −15,0% | +25% | −14,5% | 0,8 | 0,84 → 0,99 | +12% | 0,44 |
> | 4814 | VWAP + BB explosão + GPS médias + MACD + Onda | **+137% · −57,6%** | +44% · −13,7% | +29% | −16,0% | 1,0 | 0,76 → 1,13 | +25% | 0,36 |
> | 4815 | VWAP + BB explosão + MACD + Pôr do sol + Rompe 200 | **+95% · −43,8%** | +30% · −8,8% | +23% | −11,6% | 0,9 | 0,82 → 1,02 | +16% | 0,13 |
> | 4816 | ADX + VWAP + Rompe 200 + Onda | **+117% · −38,5%** | +40% · −8,9% | +27% | −10,6% | 1,4 | 0,52 → 1,30 | +18% | 0,16 |
> | 4817 | VWAP + GPS médias + Pôr do sol + Onda | **+117% · −39,1%** | +39% · −10,3% | +27% | −13,3% | 1,0 | 0,77 → 1,11 | +24% | 0,07 |
> | 4818 | VWAP + Donchian + Onda | **+123% · −35,3%** | +50% · −12,2% | +31% | −16,0% | 1,2 | 0,70 → 1,17 | +20% | 0,36 |
> | 4819 | ADX + VWAP + Onda | **+107% · −42,6%** | +46% · −13,6% | +30% | −12,5% | 1,4 | 0,39 → 1,34 | +15% | 0,22 |
> | 4820 | ADX + VWAP | **+78% · −39,9%** | +48% · −20,3% | +30% | −12,3% | 1,4 | 0,54 → 1,20 | +8% | 0,22 |
> | 4821 | VWAP + 1ª vela 80 + Rompe 200 ⚠️ | **+71% · −35,1%** | +32% · −12,3% | +24% | −14,0% | 0,8 | 0,81 → 1,11 | +19% | 0,22 |
> | 4822 | VWAP + GPS médias + MACD + Onda | **+136% · −46,3%** | +45% · −12,8% | +30% | −16,8% | 1,0 | 0,74 → 1,17 | +26% | 0,33 |
> | 4823 | VWAP + Pôr do sol + 1ª vela 80 ⚠️ | **+71% · −26,1%** | +31% · −8,5% | +24% | −12,1% | 0,9 | 0,71 → 1,29 | +14% | 0,13 |
> | 4824 | VWAP + Pôr do sol + Pullback | **+55% · −23,1%** | +26% · −7,3% | +21% | −9,8% | 0,9 | 1,29 → 0,79 | +12% | −0,03 |
> | 4825 | VWAP + MACD + Rompe 200 + Bollinger + Onda | **+151% · −40,9%** | +37% · −8,6% | +26% | −12,9% | 1,0 | 0,66 → 1,31 | +21% | 0,27 |
> | 4826 | ADX + VWAP + BB explosão + Onda | **+121% · −61,5%** | +46% · −17,5% | +29% | −12,5% | 1,3 | 0,51 → 1,28 | +20% | 0,29 |
> | 4827 | VWAP + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+112% · −37,9%** | +31% · −7,7% | +24% | −11,2% | 1,0 | 0,65 → 1,33 | +19% | 0,05 |
> | 4828 | BB explosão + Quinta + Rompe 200 + Onda ⚠️ | **+83% · −35,6%** | +31% · −8,0% | +23% | −8,9% | 1,2 | 0,68 → 1,15 | +17% | 0,00 |
> | 4829 | BB explosão + MACD + Rompe 200 + Onda | **+105% · −41,9%** | +37% · −9,6% | +27% | −11,7% | 1,2 | 0,60 → 1,25 | +18% | 0,21 |
> | 4830 | VWAP + BB explosão + Pullback + Onda | **+97% · −45,1%** | +36% · −11,8% | +26% | −13,9% | 1,0 | 0,78 → 1,05 | +20% | 0,22 |

> [!example]- Combinações 4831 a 4860 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4831 | VWAP + BB explosão + GPS médias | **+91% · −54,7%** | +45% · −20,9% | +28% | −17,7% | 0,9 | 1,00 → 0,81 | +12% | 0,46 |
> | 4832 | BB explosão + MACD | **+67% · −37,8%** | +41% · −19,5% | +29% | −14,7% | 1,1 | 0,70 → 1,14 | +19% | 0,32 |
> | 4833 | VWAP + BB explosão + Quinta + Bollinger + Onda ⚠️ | **+136% · −44,6%** | +36% · −9,6% | +25% | −11,4% | 1,0 | 0,69 → 1,24 | +20% | 0,13 |
> | 4834 | VWAP + Quinta + Pullback ⚠️ | **+53% · −24,8%** | +26% · −7,7% | +21% | −9,7% | 0,9 | 1,40 → 0,76 | +13% | −0,05 |
> | 4835 | VWAP + Bollinger | **+67% · −25,6%** | +39% · −12,8% | +24% | −17,4% | 0,6 | 0,82 → 0,99 | +13% | 0,50 |
> | 4836 | VWAP + BB explosão + Pullback | **+71% · −46,5%** | +34% · −15,4% | +25% | −13,3% | 0,9 | 1,11 → 0,80 | +8% | 0,20 |
> | 4837 | VWAP + Pôr do sol + Rompe 200 + Bollinger + Onda | **+125% · −34,5%** | +32% · −6,8% | +23% | −10,0% | 1,0 | 0,69 → 1,27 | +19% | 0,12 |
> | 4838 | VWAP + MACD + Pôr do sol + Quinta ⚠️ | **+70% · −25,9%** | +26% · −5,7% | +22% | −9,9% | 0,9 | 0,77 → 1,13 | +14% | 0,04 |
> | 4839 | VWAP + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+138% · −42,7%** | +36% · −9,2% | +27% | −14,1% | 1,0 | 0,60 → 1,36 | +19% | 0,26 |
> | 4840 | VWAP + MACD + 1ª vela 80 ⚠️ | **+94% · −34,7%** | +38% · −11,9% | +28% | −18,0% | 0,9 | 0,67 → 1,30 | +19% | 0,38 |
> | 4841 | VWAP + BB explosão + GPS médias + Rompe 200 | **+99% · −57,0%** | +39% · −16,2% | +25% | −14,2% | 0,9 | 1,09 → 0,80 | +12% | 0,33 |
> | 4842 | VWAP + BB explosão + 1ª vela 80 + Quinta + Onda ⚠️ | **+124% · −45,8%** | +36% · −10,2% | +26% | −12,6% | 1,0 | 0,62 → 1,31 | +18% | 0,06 |
> | 4843 | BB explosão + Pôr do sol + Rompe 200 + Onda | **+85% · −36,8%** | +31% · −7,9% | +23% | −8,8% | 1,2 | 0,61 → 1,18 | +17% | 0,02 |
> | 4844 | VWAP + BB explosão + GPS médias + Onda | **+111% · −56,7%** | +44% · −16,3% | +29% | −16,8% | 1,0 | 0,76 → 1,02 | +23% | 0,36 |
> | 4845 | VWAP + BB explosão + MACD + Bollinger + Onda | **+159% · −50,2%** | +41% · −11,4% | +27% | −14,4% | 1,0 | 0,62 → 1,29 | +21% | 0,36 |
> | 4846 | Pôr do sol + Onda | **+49% · −16,1%** | +31% · −6,4% | +24% | −8,2% | 1,4 | 0,20 → 1,32 | +11% | −0,10 |
> | 4847 | VWAP + BB explosão + MACD + 1ª vela 80 + Onda ⚠️ | **+145% · −51,7%** | +40% · −12,0% | +29% | −15,6% | 1,0 | 0,58 → 1,34 | +19% | 0,32 |
> | 4848 | VWAP + BB explosão + Pullback + Rompe 200 | **+79% · −51,2%** | +31% · −12,8% | +23% | −11,3% | 0,9 | 1,21 → 0,77 | +9% | 0,17 |
> | 4849 | VWAP + Pôr do sol + Pullback + Rompe 200 | **+63% · −32,0%** | +25% · −8,0% | +20% | −8,6% | 0,9 | 1,40 → 0,74 | +13% | 0,02 |
> | 4850 | VWAP + Quinta + Pullback + Rompe 200 ⚠️ | **+62% · −32,8%** | +25% · −8,2% | +20% | −8,5% | 0,9 | 1,49 → 0,71 | +12% | 0,02 |
> | 4851 | MACD + Rompe 200 + Onda | **+81% · −22,5%** | +35% · −6,9% | +27% | −11,4% | 1,2 | 0,49 → 1,31 | +17% | 0,18 |
> | 4852 | VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+114% · −37,3%** | +32% · −7,5% | +24% | −11,3% | 1,0 | 0,60 → 1,34 | +18% | 0,13 |
> | 4853 | Quinta ⚠️ | **+18% · −2,6%** | +18% · −2,6% | +17% | −3,7% | 1,1 | 1,22 → 0,66 | +15% | — |
> | 4854 | VWAP + BB explosão + Pôr do sol + Bollinger + Onda | **+138% · −45,7%** | +37% · −9,7% | +24% | −11,5% | 1,0 | 0,63 → 1,26 | +20% | 0,16 |
> | 4855 | BB explosão + MACD + Onda | **+96% · −42,4%** | +42% · −12,8% | +30% | −13,9% | 1,2 | 0,48 → 1,30 | +16% | 0,29 |
> | 4856 | VWAP + Quinta + Bollinger + Onda ⚠️ | **+112% · −31,3%** | +35% · −7,7% | +24% | −11,1% | 1,0 | 0,60 → 1,32 | +18% | 0,07 |
> | 4857 | VWAP + MACD + Pôr do sol + Rompe 200 | **+71% · −28,7%** | +27% · −6,6% | +22% | −11,3% | 0,8 | 0,78 → 1,00 | +17% | 0,09 |
> | 4858 | BB explosão + Quinta + Onda ⚠️ | **+74% · −35,5%** | +34% · −11,1% | +25% | −9,8% | 1,2 | 0,52 → 1,20 | +15% | −0,12 |
> | 4859 | VWAP + Pôr do sol + Quinta ⚠️ | **+40% · −22,5%** | +22% · −5,4% | +18% | −9,4% | 0,6 | 0,81 → 0,80 | +10% | −0,03 |
> | 4860 | VWAP + BB explosão + 1ª vela 80 ⚠️ | **+87% · −44,0%** | +39% · −16,1% | +27% | −16,8% | 0,8 | 0,74 → 1,13 | +17% | 0,31 |

> [!example]- Combinações 4861 a 4890 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4861 | VWAP + BB explosão + MACD + Quinta ⚠️ | **+84% · −44,0%** | +32% · −10,9% | +24% | −13,5% | 0,8 | 0,77 → 1,03 | +16% | 0,13 |
> | 4862 | Quinta + Rompe 200 + Onda ⚠️ | **+57% · −16,3%** | +27% · −4,8% | +22% | −7,3% | 1,2 | 0,54 → 1,16 | +16% | −0,06 |
> | 4863 | MACD + Onda | **+71% · −23,6%** | +41% · −9,8% | +31% | −14,5% | 1,3 | 0,31 → 1,39 | +13% | 0,31 |
> | 4864 | Quinta + Onda ⚠️ | **+48% · −20,0%** | +30% · −8,2% | +24% | −8,6% | 1,3 | 0,30 → 1,27 | +12% | −0,38 |
> | 4865 | VWAP + GPS médias | **+78% · −33,3%** | +47% · −17,4% | +29% | −20,0% | 0,8 | 1,08 → 0,77 | +16% | 0,29 |
> | 4866 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+126% · −46,0%** | +36% · −10,2% | +26% | −12,8% | 1,0 | 0,58 → 1,32 | +18% | 0,14 |
> | 4867 | VWAP + BB explosão + MACD + Rompe 200 | **+84% · −46,3%** | +32% · −12,2% | +24% | −14,8% | 0,8 | 0,77 → 0,95 | +15% | 0,28 |
> | 4868 | VWAP + BB explosão + Pôr do sol + Rompe 200 | **+65% · −42,4%** | +27% · −10,6% | +21% | −11,1% | 0,7 | 0,85 → 0,79 | +12% | 0,07 |
> | 4869 | BB explosão + Pôr do sol + Onda | **+76% · −36,6%** | +35% · −11,3% | +25% | −9,7% | 1,2 | 0,45 → 1,24 | +15% | −0,06 |
> | 4870 | VWAP + MACD + Bollinger + Onda | **+139% · −38,3%** | +41% · −10,0% | +28% | −14,8% | 1,0 | 0,54 → 1,36 | +20% | 0,37 |
> | 4871 | VWAP + BB explosão + Rompe 200 + Bollinger + Onda | **+136% · −47,2%** | +37% · −10,6% | +25% | −12,9% | 0,9 | 0,70 → 1,16 | +21% | 0,27 |
> | 4872 | VWAP + GPS médias + Onda | **+105% · −39,4%** | +45% · −14,2% | +30% | −18,1% | 0,9 | 0,73 → 1,04 | +27% | 0,28 |
> | 4873 | VWAP + GPS médias + Rompe 200 | **+87% · −38,8%** | +38% · −13,8% | +25% | −14,6% | 0,8 | 1,19 → 0,75 | +15% | 0,23 |
> | 4874 | VWAP + Pullback + Onda | **+75% · −27,8%** | +34% · −9,0% | +26% | −14,4% | 0,9 | 0,72 → 1,05 | +17% | 0,21 |
> | 4875 | VWAP + MACD + 1ª vela 80 + Onda ⚠️ | **+127% · −40,8%** | +40% · −10,7% | +29% | −16,3% | 1,0 | 0,49 → 1,40 | +18% | 0,35 |
> | 4876 | Pôr do sol + Rompe 200 | **+28% · −10,2%** | +20% · −4,5% | +17% | −3,4% | 1,2 | 1,03 → 0,56 | +16% | −0,05 |
> | 4877 | VWAP + 1ª vela 80 + Quinta + Onda ⚠️ | **+102% · −34,1%** | +34% · −8,4% | +26% | −12,6% | 1,0 | 0,52 → 1,38 | +18% | 0,01 |
> | 4878 | VWAP + BB explosão + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+124% · −49,5%** | +36% · −11,2% | +26% | −14,1% | 0,9 | 0,64 → 1,23 | +19% | 0,24 |
> | 4879 | Pôr do sol + Rompe 200 + Onda | **+58% · −15,7%** | +28% · −4,6% | +22% | −7,2% | 1,2 | 0,45 → 1,20 | +15% | 0,01 |
> | 4880 | VWAP + BB explosão + Quinta ⚠️ | **+55% · −41,9%** | +29% · −13,5% | +22% | −12,8% | 0,7 | 0,78 → 0,78 | +10% | 0,02 |
> | 4881 | BB explosão + Rompe 200 | **+47% · −34,3%** | +31% · −17,0% | +22% | −9,8% | 0,9 | 0,90 → 0,73 | +7% | 0,17 |
> | 4882 | VWAP + BB explosão + Quinta + Rompe 200 ⚠️ | **+64% · −46,4%** | +27% · −11,1% | +21% | −10,9% | 0,7 | 0,92 → 0,76 | +10% | 0,06 |
> | 4883 | VWAP + Pôr do sol + Bollinger + Onda | **+114% · −31,4%** | +35% · −7,7% | +24% | −11,2% | 1,0 | 0,54 → 1,34 | +17% | 0,13 |
> | 4884 | VWAP + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+102% · −33,1%** | +30% · −6,3% | +24% | −10,6% | 1,0 | 0,53 → 1,29 | +17% | 0,05 |
> | 4885 | VWAP + BB explosão + MACD + Pôr do sol | **+86% · −42,2%** | +32% · −10,7% | +24% | −13,7% | 0,8 | 0,70 → 1,05 | +18% | 0,15 |
> | 4886 | VWAP + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+103% · −33,9%** | +34% · −8,4% | +26% | −12,8% | 1,0 | 0,47 → 1,40 | +17% | 0,15 |
> | 4887 | MACD | **+40% · −10,5%** | +40% · −10,5% | +31% | −16,7% | 1,1 | 0,52 → 1,20 | +21% | — |
> | 4888 | VWAP + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+48% · −26,7%** | +21% · −6,3% | +18% | −8,3% | 0,6 | 1,02 → 0,74 | +14% | 0,00 |
> | 4889 | VWAP + Rompe 200 + Bollinger + Onda | **+113% · −35,0%** | +35% · −8,9% | +24% | −13,0% | 0,9 | 0,63 → 1,19 | +20% | 0,24 |
> | 4890 | BB explosão | **+39% · −33,3%** | +39% · −33,3% | +26% | −14,0% | 0,9 | 0,68 → 0,79 | +3% | — |

> [!example]- Combinações 4891 a 4920 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4891 | VWAP + MACD + Quinta ⚠️ | **+60% · −26,2%** | +29% · −8,3% | +23% | −13,8% | 0,8 | 0,70 → 1,03 | +15% | 0,05 |
> | 4892 | VWAP + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+100% · −36,5%** | +30% · −7,3% | +24% | −11,9% | 0,9 | 0,61 → 1,19 | +20% | 0,08 |
> | 4893 | VWAP + MACD + Rompe 200 | **+61% · −29,0%** | +29% · −9,4% | +23% | −15,5% | 0,7 | 0,71 → 0,91 | +19% | 0,24 |
> | 4894 | VWAP + BB explosão + MACD + Quinta + Onda ⚠️ | **+110% · −46,1%** | +34% · −10,2% | +26% | −13,4% | 1,0 | 0,58 → 1,19 | +21% | 0,13 |
> | 4895 | VWAP + BB explosão + Bollinger + Onda | **+125% · −47,1%** | +41% · −12,5% | +26% | −14,8% | 0,9 | 0,59 → 1,19 | +21% | 0,35 |
> | 4896 | VWAP + BB explosão + 1ª vela 80 + Onda ⚠️ | **+114% · −46,3%** | +40% · −13,1% | +28% | −16,2% | 0,9 | 0,54 → 1,27 | +18% | 0,30 |
> | 4897 | VWAP + BB explosão + Quinta + Rompe 200 + Onda ⚠️ | **+90% · −43,3%** | +30% · −9,4% | +23% | −11,9% | 0,8 | 0,65 → 1,02 | +19% | 0,08 |
> | 4898 | VWAP + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+103% · −37,2%** | +34% · −9,6% | +26% | −14,4% | 0,9 | 0,55 → 1,28 | +19% | 0,24 |
> | 4899 | VWAP + 1ª vela 80 ⚠️ | **+62% · −27,1%** | +37% · −13,7% | +27% | −18,8% | 0,8 | 0,62 → 1,17 | +16% | 0,36 |
> | 4900 | BB explosão + Rompe 200 + Onda | **+74% · −40,4%** | +35% · −12,4% | +25% | −12,0% | 1,0 | 0,55 → 1,09 | +16% | 0,19 |
> | 4901 | VWAP + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+78% · −29,7%** | +26% · −5,5% | +21% | −9,1% | 0,9 | 0,62 → 1,09 | +17% | 0,01 |
> | 4902 | VWAP + BB explosão + Pôr do sol | **+57% · −38,1%** | +29% · −12,8% | +22% | −13,0% | 0,7 | 0,69 → 0,82 | +12% | 0,05 |
> | 4903 | VWAP + BB explosão + Pôr do sol + Quinta + Onda ⚠️ | **+92% · −40,2%** | +30% · −8,4% | +23% | −10,6% | 0,9 | 0,58 → 1,12 | +19% | 0,00 |
> | 4904 | VWAP + MACD + Pôr do sol + Rompe 200 + Onda | **+102% · −36,8%** | +30% · −7,3% | +24% | −12,1% | 0,9 | 0,55 → 1,20 | +19% | 0,13 |
> | 4905 | VWAP + BB explosão + MACD + Pôr do sol + Onda | **+112% · −46,3%** | +34% · −10,2% | +26% | −13,6% | 0,9 | 0,53 → 1,20 | +20% | 0,17 |
> | 4906 | VWAP + BB explosão + Rompe 200 | **+56% · −48,4%** | +30% · −15,2% | +22% | −15,2% | 0,6 | 0,78 → 0,69 | +8% | 0,27 |
> | 4907 | VWAP + BB explosão + MACD | **+75% · −45,4%** | +36% · −16,0% | +26% | −18,6% | 0,7 | 0,65 → 0,98 | +16% | 0,44 |
> | 4908 | VWAP + BB explosão + MACD + Rompe 200 + Onda | **+109% · −49,1%** | +35% · −11,2% | +26% | −14,9% | 0,9 | 0,59 → 1,12 | +22% | 0,28 |
> | 4909 | BB explosão + Onda | **+66% · −41,1%** | +41% · −19,7% | +29% | −14,9% | 1,1 | 0,38 → 1,14 | +13% | 0,22 |
> | 4910 | VWAP + Pullback | **+46% · −24,5%** | +29% · −12,1% | +24% | −15,6% | 0,7 | 1,21 → 0,64 | +11% | 0,10 |
> | 4911 | VWAP + BB explosão + Pôr do sol + Rompe 200 + Onda | **+91% · −43,5%** | +30% · −9,4% | +23% | −12,1% | 0,8 | 0,60 → 1,04 | +20% | 0,11 |
> | 4912 | VWAP + MACD + Pôr do sol | **+62% · −26,6%** | +29% · −8,4% | +23% | −14,1% | 0,7 | 0,61 → 1,05 | +14% | 0,14 |
> | 4913 | VWAP + Pullback + Rompe 200 | **+54% · −32,2%** | +27% · −11,1% | +21% | −12,2% | 0,7 | 1,32 → 0,61 | +11% | 0,13 |
> | 4914 | VWAP + MACD + Quinta + Onda ⚠️ | **+91% · −33,5%** | +32% · −8,4% | +25% | −13,6% | 0,9 | 0,48 → 1,23 | +18% | 0,08 |
> | 4915 | VWAP + 1ª vela 80 + Onda ⚠️ | **+92% · −34,1%** | +39% · −11,8% | +28% | −17,4% | 0,9 | 0,42 → 1,33 | +17% | 0,33 |
> | 4916 | VWAP + Bollinger + Onda | **+102% · −31,9%** | +40% · −10,9% | +26% | −15,5% | 0,9 | 0,48 → 1,26 | +18% | 0,34 |
> | 4917 | VWAP + Pôr do sol + Rompe 200 | **+41% · −25,9%** | +22% · −8,4% | +18% | −11,9% | 0,5 | 0,81 → 0,63 | +14% | 0,01 |
> | 4918 | VWAP + MACD + Pôr do sol + Onda | **+92% · −33,8%** | +32% · −8,4% | +25% | −13,8% | 0,9 | 0,43 → 1,25 | +17% | 0,16 |
> | 4919 | VWAP + Quinta ⚠️ | **+32% · −19,8%** | +22% · −9,1% | +19% | −14,9% | 0,4 | 0,69 → 0,62 | +10% | −0,24 |
> | 4920 | Rompe 200 + Onda | **+49% · −17,0%** | +31% · −7,9% | +24% | −11,3% | 1,0 | 0,36 → 1,08 | +14% | 0,18 |

> [!example]- Combinações 4921 a 4943 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4921 | VWAP + BB explosão | **+48% · −44,1%** | +33% · −21,8% | +24% | −19,9% | 0,5 | 0,61 → 0,71 | +7% | 0,49 |
> | 4922 | VWAP + Quinta + Rompe 200 + Onda ⚠️ | **+69% · −30,2%** | +27% · −7,3% | +22% | −11,8% | 0,8 | 0,56 → 1,01 | +19% | 0,01 |
> | 4923 | VWAP + BB explosão + MACD + Onda | **+100% · −46,6%** | +38% · −13,1% | +28% | −17,2% | 0,9 | 0,49 → 1,15 | +21% | 0,37 |
> | 4924 | Quinta + Rompe 200 ⚠️ | **+26% · −11,1%** | +20% · −5,0% | +17% | −4,5% | 1,0 | 1,24 → 0,45 | +14% | 0,01 |
> | 4925 | VWAP + BB explosão + Quinta + Onda ⚠️ | **+81% · −41,4%** | +32% · −10,9% | +24% | −13,6% | 0,8 | 0,53 → 1,05 | +21% | 0,04 |
> | 4926 | VWAP + MACD + Rompe 200 + Onda | **+91% · −37,1%** | +32% · −9,6% | +25% | −15,4% | 0,8 | 0,51 → 1,14 | +21% | 0,26 |
> | 4927 | VWAP + BB explosão + Rompe 200 + Onda | **+81% · −44,1%** | +33% · −12,1% | +24% | −15,4% | 0,7 | 0,56 → 0,98 | +20% | 0,26 |
> | 4928 | VWAP + Pôr do sol + Quinta + Onda ⚠️ | **+69% · −28,6%** | +27% · −6,1% | +22% | −10,0% | 0,9 | 0,46 → 1,15 | +15% | −0,03 |
> | 4929 | VWAP + Quinta + Rompe 200 ⚠️ | **+40% · −26,7%** | +22% · −8,7% | +19% | −11,7% | 0,5 | 0,92 → 0,59 | +13% | −0,03 |
> | 4930 | VWAP + BB explosão + Pôr do sol + Onda | **+83% · −42,3%** | +33% · −11,0% | +24% | −13,8% | 0,8 | 0,48 → 1,07 | +20% | 0,10 |
> | 4931 | VWAP + Pôr do sol + Rompe 200 + Onda | **+70% · −30,4%** | +27% · −7,4% | +22% | −11,9% | 0,8 | 0,50 → 1,03 | +18% | 0,08 |
> | 4932 | VWAP + MACD | **+53% · −26,9%** | +33% · −13,5% | +26% | −21,5% | 0,6 | 0,53 → 0,95 | +15% | 0,51 |
> | 4933 | Onda | **+41% · −19,8%** | +41% · −19,8% | +30% | −18,7% | 0,9 | 0,11 → 1,19 | +5% | — |
> | 4934 | VWAP + Pôr do sol | **+33% · −21,5%** | +23% · −9,2% | +19% | −15,2% | 0,4 | 0,55 → 0,67 | +8% | −0,06 |
> | 4935 | VWAP + MACD + Onda | **+82% · −34,2%** | +36% · −11,8% | +28% | −18,6% | 0,8 | 0,38 → 1,18 | +19% | 0,40 |
> | 4936 | VWAP + Quinta + Onda ⚠️ | **+60% · −26,9%** | +29% · −8,8% | +23% | −13,9% | 0,8 | 0,40 → 1,06 | +16% | −0,08 |
> | 4937 | VWAP + BB explosão + Onda | **+73% · −44,6%** | +36% · −15,0% | +26% | −18,6% | 0,7 | 0,43 → 1,01 | +21% | 0,36 |
> | 4938 | VWAP + Pôr do sol + Onda | **+61% · −29,3%** | +29% · −8,9% | +23% | −14,1% | 0,7 | 0,33 → 1,09 | +14% | 0,07 |
> | 4939 | VWAP + Rompe 200 + Onda | **+61% · −30,9%** | +30% · −10,4% | +23% | −16,3% | 0,6 | 0,44 → 0,95 | +19% | 0,23 |
> | 4940 | VWAP + Rompe 200 | **+33% · −26,5%** | +23% · −13,5% | +19% | −18,5% | 0,3 | 0,70 → 0,48 | +11% | 0,15 |
> | 4941 | VWAP | **+25% · −19,7%** | +25% · −19,7% | +21% | −30,3% | 0,3 | 0,42 → 0,49 | +4% | — |
> | 4942 | VWAP + Onda | **+52% · −27,6%** | +34% · −14,1% | +26% | −21,5% | 0,6 | 0,27 → 1,00 | +15% | 0,36 |
> | 4943 | Rompe 200 | **+20% · −10,4%** | +20% · −10,4% | +17% | −10,7% | 0,4 | 0,81 → 0,19 | +11% | — |

*⚠️ = tem setup com dia da semana escolhido pelo autor do vídeo (fora da recomendação). Ao ano e pior queda com 1 contrato por R\$ 10 mil (capital dividido). Correlação = média entre os setups da combinação. Retorno ÷ queda = retorno ao ano acima do CDI dividido pela pior queda (2 = rendeu por ano o dobro da pior queda). **1% dividido** = 1% de risco repartido entre os setups (0,5% cada com 2, 0,33% com 3, 0,25% com 4): o mesmo risco total em todas as linhas, a comparação mais justa entre combinações. **1% por setup** = cada setup arrisca 1% do capital total em cada operação (veja abaixo) — com mais setups, mais risco aberto ao mesmo tempo, por isso as combinações grandes rendem e caem mais.*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

![Correlação mensal entre os setups](setups/img/carteira_correlacao.png)

*Correlação do resultado mensal.*

> [!example]- Quantas vezes operaram no mesmo dia (clique para abrir)
> - **ADX** e **VWAP**: 64% dos dias em que pelo menos um deles operou
> - **ADX** e **Donchian**: 68% dos dias em que pelo menos um deles operou
> - **ADX** e **BB explosão**: 65% dos dias em que pelo menos um deles operou
> - **ADX** e **GPS médias**: 71% dos dias em que pelo menos um deles operou
> - **ADX** e **IFR**: 48% dos dias em que pelo menos um deles operou
> - **ADX** e **MACD**: 54% dos dias em que pelo menos um deles operou
> - **ADX** e **Pôr do sol**: 39% dos dias em que pelo menos um deles operou
> - **ADX** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **ADX** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **ADX** e **Pullback**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **Rompe 200**: 14% dos dias em que pelo menos um deles operou
> - **ADX** e **Bollinger**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **Tendência**: 65% dos dias em que pelo menos um deles operou
> - **ADX** e **Onda**: 65% dos dias em que pelo menos um deles operou
> - **VWAP** e **Donchian**: 81% dos dias em que pelo menos um deles operou
> - **VWAP** e **BB explosão**: 71% dos dias em que pelo menos um deles operou
> - **VWAP** e **GPS médias**: 63% dos dias em que pelo menos um deles operou
> - **VWAP** e **IFR**: 48% dos dias em que pelo menos um deles operou
> - **VWAP** e **MACD**: 62% dos dias em que pelo menos um deles operou
> - **VWAP** e **Pôr do sol**: 47% dos dias em que pelo menos um deles operou
> - **VWAP** e **1ª vela 80**: 35% dos dias em que pelo menos um deles operou
> - **VWAP** e **Quinta**: 9% dos dias em que pelo menos um deles operou
> - **VWAP** e **Pullback**: 27% dos dias em que pelo menos um deles operou
> - **VWAP** e **Rompe 200**: 18% dos dias em que pelo menos um deles operou
> - **VWAP** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **VWAP** e **Tendência**: 80% dos dias em que pelo menos um deles operou
> - **VWAP** e **Onda**: 64% dos dias em que pelo menos um deles operou
> - **Donchian** e **BB explosão**: 79% dos dias em que pelo menos um deles operou
> - **Donchian** e **GPS médias**: 68% dos dias em que pelo menos um deles operou
> - **Donchian** e **IFR**: 50% dos dias em que pelo menos um deles operou
> - **Donchian** e **MACD**: 62% dos dias em que pelo menos um deles operou
> - **Donchian** e **Pôr do sol**: 45% dos dias em que pelo menos um deles operou
> - **Donchian** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **Donchian** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **Donchian** e **Pullback**: 24% dos dias em que pelo menos um deles operou
> - **Donchian** e **Rompe 200**: 16% dos dias em que pelo menos um deles operou
> - **Donchian** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **Donchian** e **Tendência**: 80% dos dias em que pelo menos um deles operou
> - **Donchian** e **Onda**: 66% dos dias em que pelo menos um deles operou
> - **BB explosão** e **GPS médias**: 76% dos dias em que pelo menos um deles operou
> - **BB explosão** e **IFR**: 49% dos dias em que pelo menos um deles operou
> - **BB explosão** e **MACD**: 56% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Pôr do sol**: 41% dos dias em que pelo menos um deles operou
> - **BB explosão** e **1ª vela 80**: 34% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Pullback**: 24% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Rompe 200**: 17% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Bollinger**: 25% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Tendência**: 71% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Onda**: 60% dos dias em que pelo menos um deles operou
> - **GPS médias** e **IFR**: 48% dos dias em que pelo menos um deles operou
> - **GPS médias** e **MACD**: 55% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Pôr do sol**: 38% dos dias em que pelo menos um deles operou
> - **GPS médias** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Pullback**: 20% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Rompe 200**: 14% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Bollinger**: 24% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Tendência**: 62% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Onda**: 61% dos dias em que pelo menos um deles operou
> - **IFR** e **MACD**: 55% dos dias em que pelo menos um deles operou
> - **IFR** e **Pôr do sol**: 43% dos dias em que pelo menos um deles operou
> - **IFR** e **1ª vela 80**: 29% dos dias em que pelo menos um deles operou
> - **IFR** e **Quinta**: 6% dos dias em que pelo menos um deles operou
> - **IFR** e **Pullback**: 10% dos dias em que pelo menos um deles operou
> - **IFR** e **Rompe 200**: 12% dos dias em que pelo menos um deles operou
> - **IFR** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **IFR** e **Tendência**: 50% dos dias em que pelo menos um deles operou
> - **IFR** e **Onda**: 45% dos dias em que pelo menos um deles operou
> - **MACD** e **Pôr do sol**: 46% dos dias em que pelo menos um deles operou
> - **MACD** e **1ª vela 80**: 31% dos dias em que pelo menos um deles operou
> - **MACD** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **MACD** e **Pullback**: 17% dos dias em que pelo menos um deles operou
> - **MACD** e **Rompe 200**: 13% dos dias em que pelo menos um deles operou
> - **MACD** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **MACD** e **Tendência**: 67% dos dias em que pelo menos um deles operou
> - **MACD** e **Onda**: 51% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **1ª vela 80**: 27% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Quinta**: 9% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Pullback**: 18% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Rompe 200**: 16% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Tendência**: 48% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Onda**: 42% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Quinta**: 13% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Pullback**: 15% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Rompe 200**: 11% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Bollinger**: 17% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Tendência**: 35% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Onda**: 37% dos dias em que pelo menos um deles operou
> - **Quinta** e **Pullback**: 7% dos dias em que pelo menos um deles operou
> - **Quinta** e **Rompe 200**: 7% dos dias em que pelo menos um deles operou
> - **Quinta** e **Bollinger**: 5% dos dias em que pelo menos um deles operou
> - **Quinta** e **Tendência**: 9% dos dias em que pelo menos um deles operou
> - **Quinta** e **Onda**: 8% dos dias em que pelo menos um deles operou
> - **Pullback** e **Rompe 200**: 21% dos dias em que pelo menos um deles operou
> - **Pullback** e **Bollinger**: 12% dos dias em que pelo menos um deles operou
> - **Pullback** e **Tendência**: 27% dos dias em que pelo menos um deles operou
> - **Pullback** e **Onda**: 22% dos dias em que pelo menos um deles operou
> - **Rompe 200** e **Bollinger**: 10% dos dias em que pelo menos um deles operou
> - **Rompe 200** e **Tendência**: 17% dos dias em que pelo menos um deles operou
> - **Rompe 200** e **Onda**: 13% dos dias em que pelo menos um deles operou
> - **Bollinger** e **Tendência**: 21% dos dias em que pelo menos um deles operou
> - **Bollinger** e **Onda**: 18% dos dias em que pelo menos um deles operou
> - **Tendência** e **Onda**: 65% dos dias em que pelo menos um deles operou

![Quedas da carteira](setups/img/carteira_queda.png)

## Ano a ano

*Com 1 contrato por R\$ 10 mil (capital dividido). Todos = os 15 setups juntos · Recomendada = IFR + Pôr do sol + Pullback + Bollinger · Rec. 1% = a recomendada arriscando 1% por operação.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** | **Média/ano** | **R\$ 10.000 viraram** |
|---|---|---|---|---|---|---|---|---|---|
| **⭐ Rec. 1%** | +7,0% | +286,1% | +92,1% | +146,6% | +292,4% | +99,5% | **+15207,8%** | +176,2% | R\$ 1.530.785 |
| **⭐ Recomendada** | +2,9% | +32,8% | +20,7% | +21,5% | +33,0% | +25,9% | **+235,6%** | +27,7% | R\$ 33.560 |
| **ADX** | +2,1% | +29,8% | +12,0% | +36,5% | +65,9% | +44,4% | **+385,3%** | +37,6% | R\$ 48.526 |
| **VWAP** | +0,6% | +37,6% | +4,1% | +10,4% | +42,4% | +11,6% | **+152,7%** | +20,6% | R\$ 25.270 |
| **Donchian** | −6,9% | +74,2% | +29,5% | +17,2% | +46,7% | +54,7% | **+458,9%** | +41,5% | R\$ 55.893 |
| **BB explosão** | −5,6% | +20,6% | +36,6% | +3,3% | +41,4% | +37,8% | **+213,0%** | +25,9% | R\$ 31.296 |
| **GPS médias** | −0,6% | +40,1% | +54,4% | +22,4% | +15,5% | +52,2% | **+362,4%** | +36,2% | R\$ 46.242 |
| **IFR** | −3,6% | +51,5% | +28,3% | +30,7% | +55,3% | +54,3% | **+487,0%** | +43,0% | R\$ 58.699 |
| **MACD** | −2,9% | +20,7% | +25,7% | +36,6% | +40,1% | +34,5% | **+279,1%** | +30,9% | R\$ 37.908 |
| **Pôr do sol** | +3,9% | +16,5% | +11,6% | +21,5% | +17,1% | +11,2% | **+113,6%** | +16,6% | R\$ 21.361 |
| **1ª vela 80** | +7,7% | +9,1% | +27,7% | +37,8% | +46,7% | +31,3% | **+298,3%** | +32,2% | R\$ 39.829 |
| **Quinta** | +4,0% | +18,1% | +15,3% | +16,4% | +21,9% | +7,7% | **+116,5%** | +16,9% | R\$ 21.646 |
| **Pullback** | +7,5% | +47,1% | +19,7% | +10,8% | +21,2% | +21,1% | **+208,0%** | +25,5% | R\$ 30.798 |
| **Rompe 200** | −4,6% | +22,0% | +26,7% | +10,6% | +34,6% | −1,3% | **+116,6%** | +16,9% | R\$ 21.661 |
| **Bollinger** | +4,0% | +18,2% | +22,8% | +23,1% | +40,2% | +18,4% | **+208,4%** | +25,5% | R\$ 30.836 |
| **Tendência** | −1,7% | +58,4% | +50,3% | +21,6% | +32,2% | +85,9% | **+599,3%** | +48,1% | R\$ 69.931 |
| **Onda** | −3,9% | +5,0% | +26,9% | +62,1% | +22,7% | +44,2% | **+267,5%** | +30,1% | R\$ 36.747 |
| **Todos** | −2,0% | +40,2% | +26,7% | +17,8% | +42,2% | +40,8% | **+310,3%** | +33,0% | R\$ 41.030 |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** | +12,8% | R\$ 18.156 |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** | +9,8% | R\$ 15.909 |
| *Quem ganhou* | *1ª vela 80* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | | |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ⭐ Rec. 1% | ⭐ Recomendada | Todos | CDI | Ibovespa |
> |---|---|---|---|---|---|
> | nov/2021 | +3,0% | +1,3% | −1,1% | +0,6% | −3,4% |
> | dez/2021 | +3,8% | +1,6% | −1,0% | +0,7% | +2,9% |
> | jan/2022 | +28,8% | +3,8% | +2,4% | +0,7% | +7,0% |
> | fev/2022 | +1,7% | +1,0% | −2,3% | +0,8% | +0,9% |
> | mar/2022 | +25,2% | +3,7% | +5,8% | +0,9% | +6,1% |
> | abr/2022 | +11,2% | +1,8% | +3,0% | +0,8% | −10,1% |
> | mai/2022 | +3,5% | +1,5% | +0,5% | +1,0% | +3,2% |
> | jun/2022 | +11,3% | +2,5% | −0,2% | +1,0% | −11,5% |
> | jul/2022 | +3,1% | +1,4% | −4,0% | +1,0% | +4,7% |
> | ago/2022 | +38,0% | +5,0% | +12,3% | +1,2% | +6,2% |
> | set/2022 | −2,7% | +0,9% | +2,3% | +1,1% | +0,5% |
> | out/2022 | +15,0% | +3,0% | +5,7% | +1,0% | +5,5% |
> | nov/2022 | +8,5% | +2,6% | +3,8% | +1,0% | −3,1% |
> | dez/2022 | +6,3% | +1,7% | +5,9% | +1,1% | −2,4% |
> | jan/2023 | +18,5% | +3,2% | +4,7% | +1,1% | +3,4% |
> | fev/2023 | +3,2% | +1,2% | +6,1% | +0,9% | −7,5% |
> | mar/2023 | +1,3% | +1,4% | +0,9% | +1,2% | −2,9% |
> | abr/2023 | −3,9% | +0,4% | +1,8% | +0,9% | +2,5% |
> | mai/2023 | +2,7% | +1,6% | +4,1% | +1,1% | +3,7% |
> | jun/2023 | +12,2% | +2,0% | +0,1% | +1,1% | +9,0% |
> | jul/2023 | +10,4% | +2,1% | +1,3% | +1,1% | +3,3% |
> | ago/2023 | +5,6% | +1,8% | +1,5% | +1,1% | −5,1% |
> | set/2023 | +7,5% | +1,3% | −1,2% | +1,0% | +0,7% |
> | out/2023 | +8,7% | +2,0% | +1,4% | +1,0% | −2,9% |
> | nov/2023 | +7,5% | +1,6% | +3,8% | +0,9% | +12,5% |
> | dez/2023 | −4,5% | +0,4% | −0,3% | +0,9% | +5,4% |
> | jan/2024 | +9,0% | +1,6% | +3,3% | +1,0% | −4,8% |
> | fev/2024 | +12,9% | +2,3% | +5,3% | +0,8% | +1,0% |
> | mar/2024 | +3,0% | +1,2% | +0,2% | +0,8% | −0,7% |
> | abr/2024 | +12,3% | +2,3% | −0,2% | +0,9% | −1,7% |
> | mai/2024 | −3,6% | +0,2% | −2,1% | +0,8% | −3,0% |
> | jun/2024 | +8,4% | +1,7% | +0,4% | +0,8% | +1,5% |
> | jul/2024 | +8,7% | +1,8% | −0,7% | +0,9% | +3,0% |
> | ago/2024 | +11,6% | +1,8% | +4,0% | +0,9% | +6,5% |
> | set/2024 | +16,9% | +2,7% | +1,7% | +0,8% | −3,1% |
> | out/2024 | +2,3% | +0,9% | −1,1% | +0,9% | −1,6% |
> | nov/2024 | +5,8% | +1,4% | +0,3% | +0,8% | −3,1% |
> | dez/2024 | +8,2% | +1,8% | +5,8% | +0,8% | −4,3% |
> | jan/2025 | +17,8% | +3,0% | +5,8% | +1,0% | +4,9% |
> | fev/2025 | +18,5% | +3,2% | +3,2% | +1,0% | −2,6% |
> | mar/2025 | +8,5% | +1,2% | +7,0% | +1,0% | +6,1% |
> | abr/2025 | −4,7% | +0,3% | −3,5% | +1,1% | +3,7% |
> | mai/2025 | +26,4% | +4,0% | +8,0% | +1,1% | +1,5% |
> | jun/2025 | +6,9% | +2,0% | +1,2% | +1,1% | +1,3% |
> | jul/2025 | +5,9% | +1,8% | +3,0% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +5,8% | +6,7% | +1,2% | +6,3% |
> | set/2025 | −5,8% | +0,1% | +0,5% | +1,2% | +3,4% |
> | out/2025 | +13,6% | +2,7% | +1,4% | +1,3% | +2,3% |
> | nov/2025 | +8,3% | +2,0% | +6,0% | +1,1% | +6,4% |
> | dez/2025 | +13,3% | +2,9% | −2,8% | +1,1% | +1,3% |
> | jan/2026 | +11,7% | +2,4% | +6,2% | +1,2% | +12,6% |
> | fev/2026 | −1,7% | +0,2% | −1,1% | +1,0% | +4,1% |
> | mar/2026 | +3,4% | +2,1% | +2,3% | +1,2% | −0,7% |
> | abr/2026 | +25,3% | +5,2% | +10,3% | +1,1% | −0,1% |
> | mai/2026 | +0,5% | +1,2% | +3,3% | +1,1% | −7,2% |
> | jun/2026 | −4,8% | +0,4% | +0,8% | +1,1% | −1,0% |
> | jul/2026 | +8,8% | +2,7% | +7,4% | +1,2% | +3,5% |
> | ago/2026 | +14,7% | +3,6% | +5,7% | +1,1% | −0,3% |
> | set/2026 | +2,1% | +1,6% | +1,8% | +1,1% | +5,0% |
> | out/2026 | +15,1% | +3,9% | −1,2% | +1,0% | −9,9% |
> | **Acumulado** | **+15207,8%** | **+235,6%** | **+310,3%** | **+81,6%** | **+59,1%** |
>
> *Cada setup tem o mês a mês dele na própria página — aqui ficam só as carteiras, para a tabela caber na tela.*

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = IFR + Pôr do sol + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **Todos ⚠️** = os 15 setups com 1% cada: até 15% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** | **Média/ano** | **R\$ 10.000 viraram** |
|---|---|---|---|---|---|---|---|---|---|
| **⭐ Recomendada** | +7,0% | +286,1% | +92,1% | +146,6% | +292,4% | +99,5% | **+15207,8%** | +176,2% | R\$ 1.530.785 |
| **⭐ Recomendada ÷** | +2,8% | +55,7% | +30,4% | +36,9% | +58,5% | +30,7% | **+492,3%** | +43,2% | R\$ 59.228 |
| **ADX** | +2,0% | +51,0% | +7,4% | +71,5% | +161,6% | +62,3% | **+1106,0%** | +65,3% | R\$ 120.603 |
| **VWAP** | +0,3% | +41,5% | +1,5% | +10,3% | +61,5% | +18,9% | **+205,1%** | +25,3% | R\$ 30.511 |
| **Donchian** | −14,9% | +173,6% | +51,8% | +25,9% | +129,6% | +92,8% | **+1870,0%** | +82,6% | R\$ 197.004 |
| **BB explosão** | −12,2% | +24,2% | +66,0% | −10,9% | +100,5% | +56,9% | **+407,0%** | +38,8% | R\$ 50.700 |
| **GPS médias** | −4,2% | +68,9% | +118,4% | +46,2% | +29,3% | +88,6% | **+1160,2%** | +66,8% | R\$ 126.024 |
| **IFR** | −9,3% | +108,3% | +45,0% | +48,1% | +88,9% | +69,0% | **+1194,2%** | +67,7% | R\$ 129.415 |
| **MACD** | −2,8% | +27,8% | +30,3% | +51,6% | +60,7% | +36,3% | **+437,5%** | +40,4% | R\$ 53.747 |
| **Pôr do sol** | +4,7% | +21,1% | +10,0% | +33,5% | +18,5% | +11,1% | **+145,0%** | +19,8% | R\$ 24.505 |
| **1ª vela 80** | +10,2% | +7,2% | +36,6% | +73,1% | +77,3% | +37,3% | **+579,7%** | +47,3% | R\$ 67.969 |
| **Quinta** | +4,2% | +19,1% | +16,4% | +19,2% | +23,5% | +9,0% | **+131,6%** | +18,5% | R\$ 23.158 |
| **Pullback** | +10,2% | +70,5% | +24,7% | +9,6% | +29,0% | +20,5% | **+299,2%** | +32,2% | R\$ 39.919 |
| **Rompe 200** | −4,1% | +23,6% | +27,6% | +11,5% | +40,2% | +5,5% | **+149,4%** | +20,3% | R\$ 24.941 |
| **Bollinger** | +6,4% | +30,1% | +40,6% | +56,8% | +108,7% | +24,6% | **+693,8%** | +51,9% | R\$ 79.379 |
| **Tendência** | −2,9% | +94,7% | +78,7% | +31,5% | +62,2% | +101,9% | **+1354,6%** | +71,7% | R\$ 145.463 |
| **Onda** | −3,7% | +8,2% | +36,6% | +97,1% | +36,3% | +41,3% | **+440,3%** | +40,6% | R\$ 54.029 |
| **Todos ÷** | −5,6% | +70,7% | +47,2% | +28,0% | +95,1% | +65,8% | **+881,8%** | +58,6% | R\$ 98.177 |
| **Todos ⚠️** | −32,4% | +301,5% | +110,7% | +11,7% | +645,4% | +284,3% | **+18184,5%** | +186,3% | R\$ 1.828.450 |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** | +12,8% | R\$ 18.156 |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** | +9,8% | R\$ 15.909 |
| *Quem ganhou* | *Pullback* | *Todos ⚠️* | *GPS médias* | *⭐ Recomendada* | *Todos ⚠️* | *Todos ⚠️* | *Todos ⚠️* | | |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

> [!example]- Mês a mês arriscando 1% por operação (clique para abrir)
> | Mês | ⭐ Recomendada | ⭐ Recomendada ÷ | Todos ÷ | CDI | Ibovespa |
> |---|---|---|---|---|---|
> | nov/2021 | +3,0% | +1,3% | −1,3% | +0,6% | −3,4% |
> | dez/2021 | +3,8% | +1,5% | −4,3% | +0,7% | +2,9% |
> | jan/2022 | +28,8% | +7,3% | +5,2% | +0,7% | +7,0% |
> | fev/2022 | +1,7% | +1,0% | −6,1% | +0,8% | +0,9% |
> | mar/2022 | +25,2% | +6,7% | +10,4% | +0,9% | +6,1% |
> | abr/2022 | +11,2% | +3,5% | +4,9% | +0,8% | −10,1% |
> | mai/2022 | +3,5% | +1,7% | +1,1% | +1,0% | +3,2% |
> | jun/2022 | +11,3% | +3,6% | −2,2% | +1,0% | −11,5% |
> | jul/2022 | +3,1% | +1,8% | −9,5% | +1,0% | +4,7% |
> | ago/2022 | +38,0% | +9,7% | +28,4% | +1,2% | +6,2% |
> | set/2022 | −2,7% | +0,2% | +2,7% | +1,1% | +0,5% |
> | out/2022 | +15,0% | +4,7% | +9,9% | +1,0% | +5,5% |
> | nov/2022 | +8,5% | +2,9% | +4,2% | +1,0% | −3,1% |
> | dez/2022 | +6,3% | +2,6% | +10,5% | +1,1% | −2,4% |
> | jan/2023 | +18,5% | +5,3% | +6,7% | +1,1% | +3,4% |
> | fev/2023 | +3,2% | +1,5% | +12,2% | +0,9% | −7,5% |
> | mar/2023 | +1,3% | +1,3% | +0,8% | +1,2% | −2,9% |
> | abr/2023 | −3,9% | −0,2% | +5,4% | +0,9% | +2,5% |
> | mai/2023 | +2,7% | +1,7% | +9,2% | +1,1% | +3,7% |
> | jun/2023 | +12,2% | +3,9% | −1,3% | +1,1% | +9,0% |
> | jul/2023 | +10,4% | +3,4% | +1,5% | +1,1% | +3,3% |
> | ago/2023 | +5,6% | +2,3% | +2,6% | +1,1% | −5,1% |
> | set/2023 | +7,5% | +2,6% | −4,3% | +1,0% | +0,7% |
> | out/2023 | +8,7% | +2,9% | +1,1% | +1,0% | −2,9% |
> | nov/2023 | +7,5% | +2,6% | +7,4% | +0,9% | +12,5% |
> | dez/2023 | −4,5% | −0,4% | −0,9% | +0,9% | +5,4% |
> | jan/2024 | +9,0% | +3,0% | +5,1% | +1,0% | −4,8% |
> | fev/2024 | +12,9% | +3,8% | +11,8% | +0,8% | +1,0% |
> | mar/2024 | +3,0% | +1,4% | −0,2% | +0,8% | −0,7% |
> | abr/2024 | +12,3% | +3,8% | +0,0% | +0,9% | −1,7% |
> | mai/2024 | −3,6% | −0,3% | −6,7% | +0,8% | −3,0% |
> | jun/2024 | +8,4% | +2,7% | −0,4% | +0,8% | +1,5% |
> | jul/2024 | +8,7% | +2,9% | −1,7% | +0,9% | +3,0% |
> | ago/2024 | +11,6% | +3,6% | +8,4% | +0,9% | +6,5% |
> | set/2024 | +16,9% | +4,8% | +2,9% | +0,8% | −3,1% |
> | out/2024 | +2,3% | +1,3% | −3,1% | +0,9% | −1,6% |
> | nov/2024 | +5,8% | +2,2% | −0,3% | +0,8% | −3,1% |
> | dez/2024 | +8,2% | +2,7% | +10,8% | +0,8% | −4,3% |
> | jan/2025 | +17,8% | +5,3% | +12,1% | +1,0% | +4,9% |
> | fev/2025 | +18,5% | +5,3% | +5,5% | +1,0% | −2,6% |
> | mar/2025 | +8,5% | +2,9% | +14,6% | +1,0% | +6,1% |
> | abr/2025 | −4,7% | −0,3% | −5,5% | +1,1% | +3,7% |
> | mai/2025 | +26,4% | +7,1% | +17,1% | +1,1% | +1,5% |
> | jun/2025 | +6,9% | +2,6% | +2,1% | +1,1% | +1,3% |
> | jul/2025 | +5,9% | +2,6% | +5,1% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +11,0% | +11,6% | +1,2% | +6,3% |
> | set/2025 | −5,8% | −0,6% | −0,1% | +1,2% | +3,4% |
> | out/2025 | +13,6% | +4,3% | +1,5% | +1,3% | +2,3% |
> | nov/2025 | +8,3% | +2,9% | +12,3% | +1,1% | +6,4% |
> | dez/2025 | +13,3% | +4,3% | −4,8% | +1,1% | +1,3% |
> | jan/2026 | +11,7% | +3,9% | +11,4% | +1,2% | +12,6% |
> | fev/2026 | −1,7% | +0,3% | −3,1% | +1,0% | +4,1% |
> | mar/2026 | +3,4% | +1,8% | +2,1% | +1,2% | −0,7% |
> | abr/2026 | +25,3% | +6,9% | +13,6% | +1,1% | −0,1% |
> | mai/2026 | +0,5% | +1,0% | +4,3% | +1,1% | −7,2% |
> | jun/2026 | −4,8% | −0,4% | +0,2% | +1,1% | −1,0% |
> | jul/2026 | +8,8% | +3,2% | +12,0% | +1,2% | +3,5% |
> | ago/2026 | +14,7% | +4,5% | +6,7% | +1,1% | −0,3% |
> | set/2026 | +2,1% | +1,6% | +4,9% | +1,1% | +5,0% |
> | out/2026 | +15,1% | +4,5% | +0,9% | +1,0% | −9,9% |
> | **Acumulado** | **+15207,8%** | **+492,3%** | **+881,8%** | **+81,6%** | **+59,1%** |
>
> *Cada setup tem o mês a mês dele na própria página.*

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pôr do Sol (17h45) + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,15% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,15% | +28% | −2% | −3% | −5% |
| Risco fixo de 0,5% por operação | 0,50% | +80% | −8% | −11% | −16% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+176%** | **−17%** | −21% | −31% |
| Risco fixo de 2% por operação | 2,00% | +483% | −33% | −39% | −54% |
| Kelly ¼ | 2,85% | +1062% | −44% | −55% | −71% |
| Kelly ½ | 5,70% | +3710% | −72% | −82% | −93% |
| Kelly cheio | 11,40% | +2515% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,70% | +347% | −30% | −35% | −49% |
| Larry Williams 5% | 3,39% | +1088% | −54% | −59% | −76% |
| Larry Williams 10% | 6,78% | +3029% | −81% | −87% | −96% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros). **Sorteio:** a ordem das operações foi embaralhada 2.000 vezes — a queda de verdade depende da sorte na sequência, e a ordem real foi das mais favoráveis. Planeje pela queda do sorteio, não pela real.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: IFR de Tendência 7,7% · Pôr do Sol (17h45) 10,3% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
- **Larry Williams:** no campeonato de 1987 ele usou o Kelly como fração do capital ÷ **margem** por contrato — a conta foi de US\$ 10 mil a ~US\$ 2,1 milhões, caiu para ~US\$ 700 mil e terminou o ano em ~US\$ 1,1 milhão. Depois ele passou a usar **contratos = capital × risco% ÷ maior perda já vista por contrato**, com ~5% (cauteloso), 10–12% (moderado) e 15–18% (agressivo). Esses percentuais eram para poucas operações por ano; estes setups operam muitas vezes por mês e a maior perda deles é ~1,5 vezes o stop típico, então **Larry com 2,5% ≈ arriscar 1,7% por operação** — perto do tamanho sugerido.

### Calculadora de contratos (risco de 1% por operação)

**contratos = capital × 1% ÷ ((stop em pts + 15) × R\$ 0,20)** — arredonde para baixo. Calcule para cada setup, a cada operação, com o capital do momento (assim a posição cresce quando ganha e diminui quando perde).

| Setup | Stop hoje | Risco por contrato | R\$ 10.000 | R\$ 20.000 | R\$ 50.000 | R\$ 100.000 | R\$ 200.000 |
|---|---|---|---|---|---|---|---|
| ADX da Manhã | 255 pts | R\$ 54 | 1,8 | 3,7 | 9,2 | 18,5 | 37,0 |
| Bandas de VWAP | 892 pts | R\$ 181 | 0,6 | 1,1 | 2,8 | 5,5 | 11,0 |
| Donchian com Médias | 446 pts | R\$ 92 | 1,1 | 2,2 | 5,4 | 10,8 | 21,7 |
| Explosão da Bollinger | 446 pts | R\$ 92 | 1,1 | 2,2 | 5,4 | 10,8 | 21,7 |
| GPS de Médias | 446 pts | R\$ 92 | 1,1 | 2,2 | 5,4 | 10,8 | 21,7 |
| IFR de Tendência ⭐ | 341 pts | R\$ 71 | 1,4 | 2,8 | 7,0 | 14,1 | 28,1 |
| MACD na Tendência | 892 pts | R\$ 181 | 0,6 | 1,1 | 2,8 | 5,5 | 11,0 |
| Pôr do Sol (17h45) ⭐ | 669 pts | R\$ 137 | 0,7 | 1,5 | 3,7 | 7,3 | 14,6 |
| Primeira Vela de 80 Minutos | 668 pts | R\$ 137 | 0,7 | 1,5 | 3,7 | 7,3 | 14,6 |
| Primeira Vela de Quinta | 892 pts | R\$ 181 | 0,6 | 1,1 | 2,8 | 5,5 | 11,0 |
| Pullback na Média ⭐ | 650 pts | R\$ 133 | 0,8 | 1,5 | 3,8 | 7,5 | 15,0 |
| Rompimento da Média de 200 | 892 pts | R\$ 181 | 0,6 | 1,1 | 2,8 | 5,5 | 11,0 |
| Rompimento da Bollinger ⭐ | 374 pts | R\$ 78 | 1,3 | 2,6 | 6,4 | 12,8 | 25,7 |
| Tendência Forte do Dia | 650 pts | R\$ 133 | 0,8 | 1,5 | 3,8 | 7,5 | 15,0 |
| Vai na Onda | 892 pts | R\$ 181 | 0,6 | 1,1 | 2,8 | 5,5 | 11,0 |

*Stops calculados com o ATR (4.335 pts) e o preço (170.320) de hoje — mudam todo dia. ⭐ = setups da combinação recomendada. Com risco de 0,5%, use a metade. Confira a margem de day trade da sua corretora para o número de contratos.*

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R\$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- **Risco 1%:** cada setup arrisca 1% do capital total em cada operação (contratos = capital × 1% ÷ (stop + custo) em R\$). Se dois setups estiverem posicionados ao mesmo tempo, o risco aberto é de 2%.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
