---
title: Carteira de setups
date: 2026-10-30
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 30/10/2026 20:20 BRT · dados de 01/11/2021 a 30/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 15 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 41.030** (+33% ao ano · pior queda −11% · Sharpe 1,17)
> - CDI: **R\$ 18.156** (+13% ao ano) · Ibovespa: **R\$ 15.909** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): Pôr do Sol (17h45) + Pullback na Média + Rompimento da Bollinger** — R\$ 27.474, +23% ao ano, pior queda −2%. **Arriscando 1% por operação: R\$ 233.803, +89% ao ano, pior queda −9%** (veja o tamanho de posição).
> - **Dobrando o risco (2% dividido em vez de 1%): R\$ 102.762, +60% ao ano, pior queda −6%** — contra +35% ao ano e queda −2% com 1%. O site continua recomendando 1%; o 2% está aí só para você ver os números.
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+0,2%** em 4 pregões.

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
| ⭐ **Recomendada** (Pôr do sol + Pullback + Bollinger) | 1060 | 44,8% | 368 pts | 191 pts | 1,92 | **59,2 pts** | +0,25 R | 62.790 pts | R\$ 12.558 |
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
| ⭐ **Equilíbrio** (recomendada) | Pôr do sol + Pullback + Bollinger | **+89% · −9,1%** | +35% · −2,5% | +23% · −1,6% | 2,30 → 1,89 |
| 📈 Maior retorno | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% · −16,1% | 1,58 → 1,20 |
| 🛡️ Menor queda | Pôr do sol + Bollinger | **+61% · −7,9%** | +35% · −3,1% | +21% · −1,2% | 1,52 → 2,15 |

*R\$ 10 mil viraram, na recomendada: R\$ 27.474 com 1 contrato por R\$ 10 mil · R\$ 43.853 com 1% dividido entre os setups · **R\$ 233.803 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · VWAP = Bandas de VWAP · Donchian = Donchian com Médias · BB explosão = Explosão da Bollinger · GPS médias = GPS de Médias · MACD = MACD na Tendência · Pôr do sol = Pôr do Sol (17h45) · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Rompe 200 = Rompimento da Média de 200 · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*


**1% × 2% do capital: o que muda**

| Risco total | Por operação | Ao ano | Pior queda | Dias no vermelho | Pior 60 dias | R\$ 10.000 viraram |
|---|---|---|---|---|---|---|
| **1% (recomendado)** | 0,33% | +35% | −2% | 38 d | +0% | R\$ 43.853 |
| 2% (o dobro) | 0,67% | +60% | −6% | 68 d | −2% | R\$ 102.762 |

*Dobrar o risco quase dobra o retorno e quase dobra a queda, mas **não encurta o tempo no vermelho** — esse depende da sequência de acertos e erros, não do tamanho. A validação andando para frente (recalibrando de 6 em 6 meses só com o passado) indicou que esta carteira suporta algo perto de 2%, mas com apenas 7 semestres fora da amostra e nenhum estouro observado a amostra é pequena: zero estouros em 3,5 anos é compatível com uma chance real bem maior que zero. Por isso a recomendação segue 1%.*
**Por que a recomendada é Pôr do Sol (17h45) + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios de SOBREVIVÊNCIA ao mesmo tempo, medidos **só no treino** (até 2023) — rende 8,8× acima do CDI para cada 1% de pior queda, passou no máximo 20 dias seguidos no vermelho e a pior janela de 60 dias foi de +1%. Fora do treino ela entregou +35% ao ano (Sharpe 1,89), com 1% dividido. O critério é de sequência, não de oscilação: o que quebra uma conta não é um dia ruim, é uma sequência ruim — e o Sharpe não distingue as duas coisas. A correlação média entre os setups dela é −0,08: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, Bandas de VWAP, Donchian com Médias, Explosão da Bollinger, GPS de Médias, IFR de Tendência, MACD na Tendência, Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Rompimento da Média de 200, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+190% · −17,3%** | +38% · −2,5% | +25% | −1,2% | 10,7 | 2,56 → 2,28 | +20% | −0,01 |
| 2 | IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+118% · −13,0%** | +34% · −2,6% | +25% | −1,5% | 8,5 | 2,40 → 2,03 | +19% | −0,04 |
| 3 | IFR + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+131% · −15,7%** | +32% · −2,8% | +24% | −1,7% | 6,3 | 2,33 → 1,74 | +18% | 0,02 |
| 4 | Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+98% · −9,1%** | +31% · −1,9% | +21% | −1,3% | 6,2 | 2,56 → 1,94 | +17% | −0,01 |
| 5 | IFR + Quinta + Pullback + Bollinger ⚠️ | **+173% · −17,1%** | +43% · −3,5% | +28% | −1,6% | 9,1 | 2,52 → 2,17 | +20% | −0,01 |
| 6 | IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+118% · −15,6%** | +35% · −3,3% | +26% | −2,2% | 5,7 | 2,28 → 1,62 | +17% | 0,03 |
| 7 | IFR + Quinta + Pullback ⚠️ | **+106% · −12,8%** | +39% · −3,5% | +28% | −2,0% | 8,0 | 2,34 → 1,89 | +19% | −0,09 |
| 8 | Quinta + Pullback + Bollinger ⚠️ | **+87% · −8,2%** | +34% · −2,4% | +23% | −1,6% | 6,0 | 2,51 → 1,71 | +17% | −0,02 |
| 9 | Pôr do sol + Pullback + Bollinger ⭐ | **+89% · −9,1%** | +35% · −2,5% | +23% | −1,6% | 6,0 | 2,30 → 1,89 | +18% | −0,08 |
| 10 | IFR + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+189% · −21,4%** | +38% · −3,0% | +26% | −1,9% | 6,6 | 2,45 → 1,91 | +18% | 0,05 |
| 11 | IFR + MACD + Quinta + Pullback + Bollinger ⚠️ | **+226% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 4,4 | 1,93 → 1,91 | +23% | 0,04 |
| 12 | MACD + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+144% · −16,2%** | +33% · −2,1% | +23% | −2,4% | 4,4 | 1,93 → 1,86 | +19% | 0,00 |
| 13 | IFR + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+191% · −21,5%** | +38% · −3,2% | +26% | −2,0% | 6,3 | 2,34 → 1,96 | +19% | 0,03 |
| 14 | Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+57% · −19,5%** | +23% · −4,2% | +19% | −2,0% | 3,2 | 2,15 → 0,91 | +15% | 0,03 |
| 15 | Pôr do sol + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+110% · −16,2%** | +29% · −2,3% | +20% | −1,6% | 4,9 | 2,43 → 1,55 | +16% | 0,01 |
| 16 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+251% · −20,5%** | +45% · −3,2% | +29% | −2,1% | 7,5 | 2,07 → 2,34 | +22% | −0,01 |
| 17 | Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+98% · −16,5%** | +31% · −3,3% | +21% | −1,9% | 4,5 | 2,36 → 1,37 | +15% | 0,03 |
| 18 | Pôr do sol + Quinta + Pullback ⚠️ | **+47% · −9,1%** | +24% · −2,6% | +20% | −1,7% | 4,0 | 2,27 → 1,17 | +16% | 0,02 |
| 19 | IFR + Pullback + Rompe 200 + Bollinger | **+175% · −21,4%** | +43% · −4,5% | +28% | −3,1% | 4,9 | 2,29 → 1,85 | +19% | 0,09 |
| 20 | IFR + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+248% · −20,5%** | +44% · −3,3% | +29% | −2,1% | 7,5 | 2,15 → 2,30 | +23% | −0,04 |
| 21 | IFR + MACD + Pôr do sol + Pullback + Bollinger | **+229% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 4,4 | 1,83 → 1,95 | +22% | 0,04 |
| 22 | MACD + Quinta + Pullback + Bollinger ⚠️ | **+130% · −16,2%** | +36% · −2,8% | +25% | −3,4% | 3,6 | 1,89 → 1,73 | +21% | 0,00 |
| 23 | IFR + MACD + Pullback + Bollinger | **+211% · −25,7%** | +49% · −5,6% | +32% | −4,8% | 3,9 | 1,79 → 1,86 | +24% | 0,11 |
| 24 | Quinta + Pullback + Rompe 200 ⚠️ | **+48% · −19,8%** | +24% · −6,2% | +20% | −3,1% | 2,3 | 2,05 → 0,69 | +13% | 0,04 |
| 25 | IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+148% · −17,1%** | +39% · −3,3% | +25% | −2,2% | 5,7 | 2,01 → 2,24 | +19% | 0,05 |
| 26 | GPS médias + IFR + Pôr do sol + Pullback + Tendência | **+286% · −41,7%** | +53% · −7,7% | +34% | −4,4% | 4,8 | 2,06 → 1,56 | +22% | 0,07 |
| 27 | GPS médias + IFR + Quinta + Pullback + Tendência ⚠️ | **+283% · −43,4%** | +53% · −8,3% | +34% | −4,4% | 4,9 | 2,11 → 1,54 | +21% | 0,07 |
| 28 | MACD + Pôr do sol + Pullback + Bollinger | **+132% · −16,2%** | +37% · −3,1% | +25% | −3,5% | 3,5 | 1,74 → 1,80 | +20% | −0,01 |
| 29 | IFR + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+250% · −24,3%** | +45% · −3,9% | +29% | −3,1% | 5,3 | 2,03 → 2,09 | +22% | 0,08 |
| 30 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+216% · −20,8%** | +41% · −3,2% | +27% | −2,6% | 5,3 | 1,72 → 2,32 | +21% | 0,04 |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+10%* | *−20,9%* | — | — | — | — | — | — |

> [!example]- Combinações 31 a 60 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 31 | IFR + MACD + Pullback + Rompe 200 + Bollinger | **+227% · −29,7%** | +43% · −5,2% | +29% | −4,5% | 3,5 | 1,83 → 1,75 | +22% | 0,13 |
> | 32 | Pôr do sol + Pullback + Rompe 200 + Bollinger | **+101% · −16,0%** | +31% · −3,2% | +21% | −1,9% | 4,4 | 2,20 → 1,45 | +16% | −0,01 |
> | 33 | GPS médias + IFR + Quinta + Pullback + Bollinger ⚠️ | **+269% · −29,9%** | +49% · −5,5% | +30% | −3,6% | 4,7 | 2,21 → 1,73 | +21% | 0,04 |
> | 34 | IFR + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+287% · −33,2%** | +49% · −6,0% | +32% | −4,4% | 4,4 | 2,34 → 1,85 | +21% | 0,06 |
> | 35 | IFR + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+163% · −21,1%** | +35% · −3,0% | +24% | −2,2% | 5,0 | 2,04 → 1,98 | +20% | 0,06 |
> | 36 | IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+148% · −21,0%** | +39% · −4,2% | +26% | −2,8% | 4,5 | 1,97 → 1,86 | +20% | 0,09 |
> | 37 | Donchian + IFR + Pôr do sol + Pullback + Bollinger | **+307% · −29,9%** | +52% · −5,6% | +31% | −2,7% | 6,6 | 2,11 → 1,96 | +21% | 0,02 |
> | 38 | Donchian + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+225% · −28,9%** | +44% · −5,4% | +29% | −3,1% | 5,3 | 2,10 → 1,62 | +17% | 0,07 |
> | 39 | IFR + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+215% · −24,3%** | +41% · −3,8% | +27% | −3,6% | 4,0 | 1,73 → 2,09 | +23% | 0,08 |
> | 40 | IFR + Quinta + Bollinger ⚠️ | **+134% · −17,4%** | +46% · −4,8% | +28% | −2,9% | 5,3 | 1,93 → 2,10 | +22% | 0,05 |
> | 41 | GPS médias + IFR + Pôr do sol + Pullback + Bollinger | **+273% · −29,9%** | +49% · −5,5% | +30% | −3,6% | 4,6 | 2,13 → 1,77 | +22% | 0,03 |
> | 42 | MACD + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+143% · −20,5%** | +33% · −2,8% | +23% | −3,5% | 3,0 | 1,91 → 1,58 | +19% | 0,03 |
> | 43 | IFR + Pôr do sol + Pullback + Bollinger + Tendência | **+290% · −33,3%** | +49% · −6,0% | +32% | −4,4% | 4,3 | 2,27 → 1,88 | +22% | 0,06 |
> | 44 | Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+80% · −12,3%** | +27% · −1,8% | +19% | −1,8% | 3,5 | 1,88 → 1,55 | +18% | 0,03 |
> | 45 | IFR + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+178% · −25,5%** | +37% · −4,3% | +27% | −2,5% | 5,7 | 1,99 → 1,96 | +21% | −0,02 |
> | 46 | IFR + MACD + Quinta + Pullback ⚠️ | **+148% · −19,4%** | +40% · −4,4% | +29% | −3,6% | 4,6 | 1,77 → 1,73 | +22% | −0,02 |
> | 47 | GPS médias + IFR + Pullback + Rompe 200 + Tendência | **+280% · −46,3%** | +53% · −9,2% | +34% | −5,7% | 3,8 | 2,05 → 1,44 | +19% | 0,20 |
> | 48 | GPS médias + IFR + Pullback + Tendência | **+265% · −44,3%** | +62% · −11,2% | +39% | −6,0% | 4,4 | 2,03 → 1,50 | +22% | 0,18 |
> | 49 | IFR + Pullback + Bollinger + Tendência | **+269% · −33,2%** | +57% · −8,0% | +36% | −5,9% | 3,9 | 2,23 → 1,81 | +22% | 0,13 |
> | 50 | IFR + Pôr do sol + Rompe 200 + Bollinger | **+150% · −21,1%** | +40% · −4,2% | +25% | −3,0% | 4,2 | 1,85 → 1,92 | +21% | 0,08 |
> | 51 | IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+164% · −16,4%** | +42% · −3,3% | +30% | −2,2% | 7,6 | 1,98 → 2,12 | +23% | −0,14 |
> | 52 | Donchian + IFR + Pôr do sol + Pullback + Rompe 200 | **+227% · −28,2%** | +45% · −5,5% | +29% | −2,9% | 5,6 | 2,02 → 1,64 | +18% | 0,06 |
> | 53 | IFR + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+218% · −24,6%** | +42% · −3,8% | +27% | −3,6% | 4,0 | 1,65 → 2,13 | +23% | 0,11 |
> | 54 | IFR + Pôr do sol + Bollinger | **+136% · −16,7%** | +46% · −4,8% | +28% | −3,3% | 4,7 | 1,79 → 2,19 | +21% | 0,04 |
> | 55 | IFR + Pôr do sol + Pullback + Bollinger | **+176% · −17,2%** | +43% · −3,5% | +28% | −1,6% | 9,3 | 2,38 → 2,24 | +21% | −0,04 |
> | 56 | IFR + Pullback + Bollinger | **+161% · −17,1%** | +52% · −5,1% | +32% | −2,6% | 7,1 | 2,34 → 2,12 | +22% | 0,00 |
> | 57 | IFR + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+195% · −29,3%** | +40% · −5,0% | +27% | −5,0% | 2,8 | 1,53 → 1,74 | +23% | 0,13 |
> | 58 | IFR + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+361% · −35,7%** | +56% · −6,7% | +35% | −5,0% | 4,6 | 2,09 → 1,98 | +25% | 0,09 |
> | 59 | IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+198% · −20,9%** | +47% · −4,4% | +30% | −3,7% | 4,5 | 1,66 → 2,22 | +24% | 0,03 |
> | 60 | IFR + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+291% · −28,5%** | +49% · −4,9% | +32% | −5,6% | 3,4 | 1,71 → 2,01 | +25% | 0,10 |

> [!example]- Combinações 61 a 90 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 61 | IFR + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+271% · −30,2%** | +48% · −5,2% | +34% | −4,2% | 5,0 | 2,08 → 1,88 | +24% | −0,04 |
> | 62 | Donchian + IFR + Pullback + Rompe 200 + Bollinger | **+303% · −28,9%** | +52% · −5,0% | +31% | −3,2% | 5,6 | 2,10 → 1,76 | +19% | 0,14 |
> | 63 | MACD + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+93% · −16,7%** | +27% · −2,7% | +22% | −2,7% | 3,3 | 1,74 → 1,40 | +19% | −0,01 |
> | 64 | IFR + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+161% · −23,7%** | +36% · −3,8% | +27% | −3,7% | 3,8 | 1,81 → 1,62 | +21% | 0,04 |
> | 65 | GPS médias + IFR + Pullback + Rompe 200 + Bollinger | **+269% · −32,1%** | +49% · −6,1% | +30% | −4,5% | 3,7 | 2,11 → 1,59 | +20% | 0,15 |
> | 66 | IFR + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+161% · −20,9%** | +36% · −4,0% | +27% | −3,6% | 3,9 | 1,30 → 1,81 | +21% | −0,03 |
> | 67 | MACD + Pullback + Bollinger | **+119% · −16,1%** | +42% · −4,5% | +28% | −5,4% | 2,8 | 1,70 → 1,67 | +23% | 0,05 |
> | 68 | IFR + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+196% · −25,4%** | +40% · −4,0% | +27% | −4,1% | 3,4 | 1,48 → 1,93 | +21% | 0,09 |
> | 69 | MACD + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+145% · −20,6%** | +33% · −2,9% | +23% | −3,4% | 3,1 | 1,78 → 1,63 | +20% | 0,01 |
> | 70 | GPS médias + IFR + MACD + Pullback + Tendência | **+311% · −47,5%** | +58% · −9,5% | +37% | −6,9% | 3,6 | 1,79 → 1,50 | +25% | 0,22 |
> | 71 | IFR + Pullback + Rompe 200 + Bollinger + Tendência | **+286% · −36,8%** | +50% · −7,0% | +32% | −5,6% | 3,4 | 2,24 → 1,70 | +19% | 0,15 |
> | 72 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+179% · −16,5%** | +37% · −2,7% | +27% | −1,6% | 8,8 | 2,03 → 2,22 | +21% | −0,07 |
> | 73 | GPS médias + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+237% · −31,6%** | +46% · −6,1% | +28% | −4,2% | 3,5 | 1,91 → 1,74 | +23% | 0,06 |
> | 74 | IFR + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+162% · −19,5%** | +36% · −3,2% | +27% | −2,9% | 4,7 | 1,81 → 1,82 | +20% | −0,01 |
> | 75 | IFR + MACD + Pullback | **+136% · −19,9%** | +47% · −6,4% | +34% | −5,3% | 3,9 | 1,62 → 1,67 | +25% | 0,03 |
> | 76 | Pôr do sol + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+193% · −24,7%** | +39% · −4,2% | +27% | −2,9% | 4,8 | 2,38 → 1,72 | +19% | 0,03 |
> | 77 | 1ª vela 80 + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+156% · −25,0%** | +34% · −4,3% | +24% | −2,6% | 4,2 | 1,97 → 1,89 | +20% | −0,00 |
> | 78 | IFR + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+213% · −22,5%** | +42% · −3,4% | +30% | −4,6% | 3,7 | 1,67 → 1,91 | +24% | −0,04 |
> | 79 | IFR + MACD + Pullback + Bollinger + Tendência | **+325% · −40,4%** | +54% · −8,1% | +35% | −6,9% | 3,2 | 1,88 → 1,72 | +25% | 0,20 |
> | 80 | IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+165% · −24,6%** | +42% · −5,5% | +30% | −3,1% | 5,5 | 1,87 → 1,89 | +22% | 0,04 |
> | 81 | IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+201% · −20,8%** | +47% · −4,4% | +29% | −3,7% | 4,5 | 1,57 → 2,27 | +23% | 0,10 |
> | 82 | Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+121% · −21,2%** | +35% · −4,9% | +27% | −3,5% | 4,0 | 2,23 → 1,44 | +18% | 0,01 |
> | 83 | IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+232% · −20,4%** | +51% · −4,4% | +32% | −3,1% | 6,2 | 2,02 → 2,25 | +25% | 0,01 |
> | 84 | GPS médias + IFR + MACD + Quinta + Pullback ⚠️ | **+230% · −32,6%** | +46% · −6,1% | +31% | −6,0% | 3,0 | 1,79 → 1,54 | +23% | 0,03 |
> | 85 | IFR + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+254% · −32,9%** | +46% · −5,9% | +30% | −4,3% | 4,0 | 2,06 → 1,89 | +23% | 0,10 |
> | 86 | IFR + MACD + Quinta + Bollinger ⚠️ | **+180% · −25,6%** | +45% · −5,5% | +29% | −5,5% | 3,0 | 1,43 → 1,84 | +23% | 0,14 |
> | 87 | GPS médias + IFR + MACD + Pullback + Bollinger | **+306% · −37,5%** | +54% · −7,6% | +33% | −7,0% | 2,9 | 1,79 → 1,65 | +25% | 0,17 |
> | 88 | Donchian + IFR + Quinta + Pullback + Bollinger ⚠️ | **+304% · −29,8%** | +51% · −5,6% | +31% | −2,6% | 6,8 | 2,20 → 1,93 | +20% | 0,03 |
> | 89 | GPS médias + MACD + Quinta + Pullback + Tendência ⚠️ | **+229% · −43,2%** | +47% · −8,2% | +32% | −5,3% | 3,7 | 1,84 → 1,36 | +22% | 0,06 |
> | 90 | MACD + Pullback + Rompe 200 + Bollinger | **+132% · −20,5%** | +37% · −4,1% | +25% | −4,8% | 2,6 | 1,73 → 1,51 | +20% | 0,07 |

> [!example]- Combinações 91 a 120 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 91 | Donchian + IFR + MACD + Pôr do sol + Pullback | **+260% · −33,6%** | +49% · −7,0% | +32% | −4,4% | 4,3 | 1,68 → 1,69 | +23% | 0,07 |
> | 92 | GPS médias + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+235% · −33,8%** | +46% · −6,7% | +28% | −5,1% | 2,9 | 1,91 → 1,57 | +21% | 0,14 |
> | 93 | IFR + MACD + Pôr do sol + Pullback + Rompe 200 | **+163% · −23,7%** | +36% · −3,9% | +27% | −3,7% | 3,7 | 1,72 → 1,64 | +22% | 0,03 |
> | 94 | Pôr do sol + Pullback + Rompe 200 | **+49% · −19,3%** | +24% · −6,0% | +20% | −3,0% | 2,3 | 1,90 → 0,76 | +14% | −0,02 |
> | 95 | IFR + Rompe 200 + Bollinger | **+136% · −21,0%** | +47% · −6,3% | +28% | −4,5% | 3,4 | 1,77 → 1,80 | +21% | 0,21 |
> | 96 | IFR + MACD + Pullback + Rompe 200 | **+149% · −23,7%** | +40% · −5,2% | +29% | −5,1% | 3,2 | 1,67 → 1,56 | +22% | 0,10 |
> | 97 | IFR + MACD + Pôr do sol + Pullback | **+150% · −19,5%** | +40% · −4,4% | +29% | −3,6% | 4,6 | 1,67 → 1,76 | +21% | −0,02 |
> | 98 | GPS médias + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+202% · −37,1%** | +43% · −6,8% | +29% | −3,0% | 5,3 | 2,13 → 1,37 | +19% | −0,01 |
> | 99 | GPS médias + MACD + Pôr do sol + Pullback + Tendência | **+232% · −41,5%** | +48% · −7,7% | +32% | −5,3% | 3,6 | 1,78 → 1,39 | +23% | 0,06 |
> | 100 | Donchian + IFR + Pullback + Rompe 200 | **+209% · −28,3%** | +51% · −7,2% | +32% | −3,8% | 5,0 | 1,98 → 1,57 | +17% | 0,17 |
> | 101 | IFR + Pôr do sol + Pullback + Bollinger + Onda | **+229% · −25,9%** | +43% · −4,3% | +29% | −4,1% | 3,8 | 1,35 → 1,96 | +22% | 0,02 |
> | 102 | MACD + Quinta + Pullback ⚠️ | **+72% · −14,9%** | +31% · −4,6% | +25% | −3,9% | 3,1 | 1,65 → 1,41 | +20% | −0,10 |
> | 103 | IFR + Quinta + Pullback + Tendência ⚠️ | **+196% · −27,5%** | +48% · −6,1% | +34% | −4,9% | 4,2 | 2,23 → 1,68 | +20% | 0,02 |
> | 104 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+181% · −24,7%** | +38% · −4,1% | +27% | −2,2% | 6,4 | 1,92 → 1,98 | +22% | 0,01 |
> | 105 | IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+166% · −16,4%** | +42% · −3,2% | +30% | −2,1% | 8,0 | 1,90 → 2,15 | +22% | −0,08 |
> | 106 | Pullback + Bollinger | **+78% · −8,6%** | +43% · −4,0% | +26% | −2,1% | 6,1 | 2,24 → 1,64 | +17% | −0,05 |
> | 107 | GPS médias + IFR + MACD + Pôr do sol + Pullback | **+232% · −32,1%** | +47% · −6,0% | +31% | −6,0% | 3,0 | 1,72 → 1,57 | +24% | 0,03 |
> | 108 | Quinta + Pullback + Bollinger + Tendência ⚠️ | **+176% · −24,6%** | +44% · −5,2% | +29% | −3,8% | 4,3 | 2,34 → 1,62 | +18% | 0,03 |
> | 109 | IFR + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+252% · −29,5%** | +46% · −5,4% | +30% | −6,1% | 2,8 | 1,40 → 1,98 | +23% | 0,12 |
> | 110 | MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+83% · −17,2%** | +28% · −3,8% | +23% | −3,8% | 2,7 | 1,69 → 1,27 | +18% | −0,02 |
> | 111 | IFR + Bollinger | **+123% · −16,6%** | +61% · −7,7% | +34% | −4,8% | 4,5 | 1,70 → 2,05 | +26% | 0,24 |
> | 112 | GPS médias + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+183% · −24,1%** | +39% · −4,1% | +24% | −2,5% | 4,7 | 2,26 → 1,54 | +19% | −0,02 |
> | 113 | GPS médias + IFR + Pullback + Bollinger + Tendência | **+368% · −42,1%** | +61% · −7,7% | +36% | −5,2% | 4,5 | 2,11 → 1,64 | +22% | 0,19 |
> | 114 | GPS médias + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+253% · −37,5%** | +50% · −6,2% | +32% | −4,3% | 4,5 | 1,90 → 1,55 | +23% | 0,09 |
> | 115 | GPS médias + IFR + Pullback + Bollinger | **+252% · −29,9%** | +57% · −7,2% | +33% | −4,9% | 4,1 | 2,09 → 1,69 | +22% | 0,12 |
> | 116 | IFR + Pôr do sol + Pullback + Rompe 200 + Onda | **+162% · −23,9%** | +37% · −4,4% | +27% | −4,3% | 3,3 | 1,29 → 1,64 | +23% | 0,05 |
> | 117 | Pôr do sol + Pullback + Bollinger + Tendência | **+179% · −24,6%** | +44% · −5,4% | +29% | −3,9% | 4,2 | 2,24 → 1,66 | +19% | 0,02 |
> | 118 | IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+199% · −22,4%** | +48% · −4,6% | +33% | −6,1% | 3,4 | 1,56 → 1,86 | +26% | 0,03 |
> | 119 | IFR + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+318% · −35,3%** | +52% · −6,6% | +33% | −4,9% | 4,2 | 1,89 → 1,98 | +26% | 0,09 |
> | 120 | GPS médias + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+200% · −24,7%** | +42% · −4,0% | +28% | −2,6% | 5,7 | 2,14 → 1,63 | +20% | −0,03 |

> [!example]- Combinações 121 a 150 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 121 | GPS médias + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+181% · −28,7%** | +39% · −5,1% | +25% | −3,8% | 3,1 | 2,21 → 1,32 | +17% | 0,05 |
> | 122 | IFR + Quinta + Bollinger + Tendência ⚠️ | **+234% · −32,8%** | +53% · −7,8% | +34% | −5,8% | 3,6 | 2,02 → 1,81 | +23% | 0,14 |
> | 123 | IFR + MACD + Pôr do sol + Bollinger | **+182% · −25,4%** | +45% · −5,5% | +29% | −5,5% | 3,0 | 1,33 → 1,88 | +22% | 0,15 |
> | 124 | IFR + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+213% · −27,6%** | +42% · −4,7% | +30% | −3,6% | 4,8 | 2,27 → 1,75 | +20% | 0,02 |
> | 125 | Donchian + IFR + MACD + Pullback + Rompe 200 | **+256% · −35,8%** | +49% · −7,6% | +32% | −5,3% | 3,6 | 1,69 → 1,55 | +21% | 0,19 |
> | 126 | IFR + MACD + Pôr do sol + Rompe 200 + Bollinger | **+198% · −29,3%** | +40% · −5,1% | +27% | −5,0% | 2,8 | 1,44 → 1,78 | +23% | 0,13 |
> | 127 | IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+201% · −24,3%** | +47% · −5,2% | +30% | −4,8% | 3,5 | 1,59 → 2,04 | +25% | 0,19 |
> | 128 | GPS médias + Quinta + Pullback + Tendência ⚠️ | **+185% · −39,9%** | +49% · −9,7% | +32% | −4,1% | 4,7 | 2,10 → 1,29 | +18% | 0,00 |
> | 129 | GPS médias + IFR + Quinta + Pullback ⚠️ | **+184% · −28,0%** | +47% · −5,6% | +31% | −3,7% | 4,9 | 2,10 → 1,54 | +20% | −0,02 |
> | 130 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+156% · −15,3%** | +34% · −2,5% | +24% | −1,3% | 8,1 | 2,01 → 2,21 | +20% | −0,03 |
> | 131 | GPS médias + IFR + MACD + Pullback + Rompe 200 | **+228% · −36,0%** | +47% · −6,6% | +31% | −6,9% | 2,6 | 1,73 → 1,45 | +22% | 0,15 |
> | 132 | IFR + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+322% · −35,3%** | +53% · −6,6% | +33% | −4,9% | 4,2 | 1,83 → 2,00 | +27% | 0,15 |
> | 133 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+240% · −29,8%** | +45% · −5,1% | +32% | −4,1% | 4,6 | 1,81 → 1,91 | +26% | 0,04 |
> | 134 | GPS médias + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+197% · −30,6%** | +42% · −5,2% | +28% | −3,5% | 4,3 | 2,11 → 1,45 | +18% | 0,06 |
> | 135 | MACD + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+228% · −32,6%** | +44% · −5,8% | +30% | −5,2% | 3,2 | 1,95 → 1,61 | +22% | 0,08 |
> | 136 | IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+254% · −30,1%** | +56% · −6,9% | +38% | −5,7% | 4,4 | 1,98 → 1,84 | +25% | 0,02 |
> | 137 | Quinta + Pullback + Tendência ⚠️ | **+109% · −23,8%** | +41% · −7,0% | +30% | −4,9% | 3,6 | 2,19 → 1,33 | +17% | −0,02 |
> | 138 | IFR + Pullback + Tendência | **+182% · −27,9%** | +58% · −8,7% | +39% | −7,2% | 3,7 | 2,11 → 1,63 | +21% | 0,10 |
> | 139 | IFR + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+256% · −29,5%** | +46% · −5,3% | +30% | −6,1% | 2,8 | 1,33 → 2,01 | +23% | 0,16 |
> | 140 | Quinta + Pullback + Rompe 200 + Bollinger + Tendência ⚠️ | **+191% · −28,7%** | +39% · −4,8% | +27% | −3,9% | 3,5 | 2,33 → 1,49 | +17% | 0,06 |
> | 141 | IFR + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+216% · −22,5%** | +42% · −3,5% | +30% | −4,6% | 3,7 | 1,60 → 1,93 | +23% | 0,00 |
> | 142 | IFR + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+214% · −26,5%** | +42% · −4,3% | +30% | −5,5% | 3,1 | 1,61 → 1,78 | +25% | 0,08 |
> | 143 | IFR + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+210% · −31,4%** | +42% · −5,5% | +30% | −4,8% | 3,6 | 2,23 → 1,57 | +18% | 0,08 |
> | 144 | GPS médias + IFR + MACD + Pullback | **+215% · −33,6%** | +54% · −7,9% | +34% | −7,9% | 2,8 | 1,69 → 1,50 | +25% | 0,13 |
> | 145 | GPS médias + MACD + Quinta + Pullback + Bollinger ⚠️ | **+216% · −32,2%** | +43% · −6,1% | +27% | −5,9% | 2,5 | 1,87 → 1,50 | +22% | 0,04 |
> | 146 | Pullback + Bollinger + Tendência | **+163% · −24,6%** | +53% · −7,5% | +33% | −5,8% | 3,6 | 2,19 → 1,56 | +19% | 0,09 |
> | 147 | GPS médias + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+270% · −37,4%** | +50% · −6,8% | +31% | −3,5% | 5,2 | 2,19 → 1,48 | +19% | 0,06 |
> | 148 | IFR + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+251% · −36,4%** | +46% · −6,9% | +30% | −5,5% | 3,1 | 2,06 → 1,71 | +21% | 0,14 |
> | 149 | IFR + MACD + Quinta + Pullback + Tendência ⚠️ | **+244% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 3,4 | 1,87 → 1,63 | +23% | 0,08 |
> | 150 | IFR + Pôr do sol + Bollinger + Tendência | **+238% · −32,8%** | +53% · −7,9% | +33% | −5,8% | 3,5 | 1,94 → 1,85 | +24% | 0,16 |

> [!example]- Combinações 151 a 180 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 151 | Donchian + IFR + Pôr do sol + Pullback + Tendência | **+316% · −38,2%** | +56% · −8,1% | +35% | −4,8% | 4,7 | 2,01 → 1,65 | +21% | 0,11 |
> | 152 | GPS médias + IFR + Pôr do sol + Pullback + Rompe 200 | **+200% · −28,5%** | +42% · −5,0% | +28% | −3,5% | 4,2 | 2,04 → 1,48 | +19% | 0,05 |
> | 153 | IFR + MACD + Quinta + Bollinger + Tendência ⚠️ | **+287% · −40,0%** | +51% · −7,9% | +33% | −6,8% | 3,0 | 1,67 → 1,72 | +26% | 0,21 |
> | 154 | MACD + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+121% · −20,1%** | +30% · −2,7% | +22% | −3,8% | 2,3 | 1,40 → 1,64 | +19% | 0,05 |
> | 155 | Donchian + MACD + Pullback + Rompe 200 + Bollinger | **+245% · −30,0%** | +46% · −5,7% | +28% | −5,2% | 3,0 | 1,76 → 1,53 | +20% | 0,14 |
> | 156 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+275% · −30,2%** | +49% · −5,2% | +33% | −4,2% | 4,9 | 2,02 → 1,90 | +25% | 0,01 |
> | 157 | GPS médias + IFR + Pôr do sol + Pullback | **+187% · −25,9%** | +48% · −5,4% | +31% | −3,7% | 4,9 | 2,02 → 1,58 | +21% | −0,03 |
> | 158 | Pôr do sol + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+133% · −29,5%** | +32% · −5,4% | +25% | −3,2% | 3,8 | 2,23 → 1,31 | +16% | 0,03 |
> | 159 | IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+171% · −27,1%** | +44% · −6,0% | +31% | −4,8% | 3,8 | 1,93 → 1,72 | +23% | 0,09 |
> | 160 | GPS médias + IFR + Pôr do sol + Rompe 200 + Bollinger | **+238% · −33,8%** | +46% · −6,7% | +28% | −5,1% | 2,9 | 1,83 → 1,61 | +22% | 0,13 |
> | 161 | IFR + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+271% · −35,4%** | +49% · −6,7% | +34% | −5,4% | 3,8 | 2,00 → 1,75 | +22% | 0,09 |
> | 162 | VWAP + IFR + Quinta + Pullback + Bollinger ⚠️ | **+191% · −26,8%** | +39% · −4,8% | +27% | −5,0% | 2,7 | 1,80 → 1,60 | +18% | 0,04 |
> | 163 | IFR + Pôr do sol + Pullback + Tendência | **+198% · −27,6%** | +48% · −6,1% | +33% | −5,0% | 4,2 | 2,15 → 1,70 | +21% | 0,03 |
> | 164 | IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+299% · −35,2%** | +62% · −8,6% | +38% | −6,5% | 3,8 | 1,79 → 1,94 | +29% | 0,24 |
> | 165 | GPS médias + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+184% · −27,9%** | +39% · −4,9% | +24% | −3,8% | 3,1 | 2,11 → 1,37 | +18% | 0,02 |
> | 166 | IFR + Pullback + Rompe 200 + Bollinger + Onda | **+227% · −29,8%** | +43% · −5,1% | +29% | −4,9% | 3,3 | 1,40 → 1,77 | +25% | 0,12 |
> | 167 | Pullback + Rompe 200 + Bollinger | **+89% · −16,3%** | +35% · −4,8% | +23% | −2,7% | 3,7 | 2,13 → 1,26 | +15% | 0,06 |
> | 168 | IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+139% · −18,8%** | +38% · −3,8% | +27% | −3,6% | 4,0 | 1,53 → 1,90 | +24% | 0,02 |
> | 169 | MACD + Pôr do sol + Pullback + Bollinger + Tendência | **+230% · −32,7%** | +44% · −5,9% | +30% | −5,3% | 3,2 | 1,86 → 1,63 | +23% | 0,08 |
> | 170 | IFR + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+254% · −36,5%** | +46% · −7,0% | +30% | −5,6% | 3,1 | 1,98 → 1,74 | +22% | 0,15 |
> | 171 | IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+222% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 4,0 | 1,76 → 1,84 | +27% | 0,02 |
> | 172 | IFR + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+307% · −37,6%** | +53% · −7,2% | +37% | −6,7% | 3,6 | 1,74 → 1,75 | +28% | 0,12 |
> | 173 | MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+108% · −20,2%** | +33% · −3,9% | +23% | −5,2% | 1,9 | 1,33 → 1,52 | +20% | 0,07 |
> | 174 | Donchian + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+182% · −21,9%** | +38% · −3,9% | +24% | −2,4% | 4,6 | 1,93 → 1,64 | +18% | 0,02 |
> | 175 | Pôr do sol + Pullback + Rompe 200 + Bollinger + Tendência | **+194% · −28,7%** | +39% · −4,9% | +27% | −4,0% | 3,5 | 2,23 → 1,52 | +18% | 0,05 |
> | 176 | Donchian + IFR + MACD + Quinta + Pullback ⚠️ | **+258% · −33,6%** | +49% · −7,0% | +32% | −4,4% | 4,3 | 1,74 → 1,67 | +22% | 0,07 |
> | 177 | GPS médias + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+157% · −27,0%** | +37% · −4,8% | +26% | −4,9% | 2,6 | 1,77 → 1,39 | +22% | −0,05 |
> | 178 | IFR + 1ª vela 80 + Pullback ⚠️ | **+152% · −16,3%** | +50% · −4,7% | +34% | −3,0% | 7,2 | 1,84 → 2,06 | +26% | −0,13 |
> | 179 | IFR + 1ª vela 80 + Bollinger ⚠️ | **+184% · −20,8%** | +57% · −6,4% | +34% | −5,4% | 3,9 | 1,50 → 2,17 | +26% | 0,20 |
> | 180 | IFR + MACD + Pôr do sol + Pullback + Tendência | **+247% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 3,3 | 1,81 → 1,65 | +24% | 0,10 |

> [!example]- Combinações 181 a 210 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 181 | GPS médias + MACD + Pôr do sol + Pullback + Bollinger | **+219% · −32,2%** | +44% · −6,1% | +27% | −5,8% | 2,5 | 1,78 → 1,54 | +23% | 0,02 |
> | 182 | IFR + Pullback + Rompe 200 + Tendência | **+196% · −31,4%** | +48% · −7,4% | +34% | −6,5% | 3,2 | 2,12 → 1,52 | +19% | 0,15 |
> | 183 | IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+225% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 4,0 | 1,70 → 1,87 | +28% | 0,12 |
> | 184 | GPS médias + IFR + Pullback + Rompe 200 | **+184% · −31,6%** | +48% · −6,8% | +31% | −4,8% | 3,7 | 2,00 → 1,40 | +19% | 0,16 |
> | 185 | Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+159% · −24,3%** | +35% · −4,2% | +24% | −2,5% | 4,3 | 1,88 → 1,94 | +21% | 0,01 |
> | 186 | GPS médias + Pôr do sol + Pullback + Bollinger + Tendência | **+273% · −35,5%** | +50% · −6,2% | +31% | −3,5% | 5,1 | 2,12 → 1,51 | +20% | 0,05 |
> | 187 | GPS médias + IFR + Quinta + Bollinger ⚠️ | **+219% · −31,6%** | +53% · −7,9% | +31% | −5,6% | 3,2 | 1,86 → 1,65 | +23% | 0,12 |
> | 188 | IFR + MACD + Pôr do sol + Bollinger + Tendência | **+290% · −40,0%** | +51% · −8,0% | +33% | −6,8% | 3,0 | 1,61 → 1,74 | +27% | 0,23 |
> | 189 | IFR + Pôr do sol + Pullback + Rompe 200 + Tendência | **+213% · −31,4%** | +42% · −5,6% | +30% | −4,9% | 3,6 | 2,16 → 1,59 | +19% | 0,08 |
> | 190 | Donchian + IFR + Pullback + Bollinger | **+285% · −29,8%** | +60% · −7,3% | +34% | −3,6% | 5,9 | 2,08 → 1,89 | +21% | 0,11 |
> | 191 | Pullback + Rompe 200 + Bollinger + Tendência | **+177% · −28,6%** | +45% · −6,4% | +29% | −5,4% | 3,0 | 2,19 → 1,43 | +17% | 0,11 |
> | 192 | MACD + Pullback + Bollinger + Tendência | **+212% · −32,6%** | +50% · −7,9% | +33% | −7,0% | 2,9 | 1,83 → 1,56 | +23% | 0,17 |
> | 193 | Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+120% · −29,8%** | +36% · −7,0% | +27% | −4,5% | 3,2 | 2,18 → 1,22 | +15% | 0,04 |
> | 194 | IFR + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+318% · −38,7%** | +53% · −7,6% | +33% | −6,1% | 3,4 | 1,83 → 1,86 | +25% | 0,21 |
> | 195 | IFR + MACD + Rompe 200 + Bollinger | **+181% · −29,3%** | +45% · −6,8% | +29% | −6,6% | 2,5 | 1,39 → 1,69 | +25% | 0,25 |
> | 196 | GPS médias + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+202% · −33,8%** | +43% · −6,5% | +29% | −6,5% | 2,5 | 1,49 → 1,54 | +26% | 0,07 |
> | 197 | IFR + MACD + Pullback + Tendência | **+228% · −35,3%** | +54% · −8,6% | +37% | −8,1% | 3,1 | 1,78 → 1,59 | +25% | 0,19 |
> | 198 | IFR + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+210% · −22,7%** | +42% · −4,2% | +30% | −4,3% | 4,1 | 1,24 → 1,92 | +24% | −0,06 |
> | 199 | IFR + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+213% · −22,7%** | +42% · −4,3% | +30% | −4,1% | 4,2 | 1,18 → 1,93 | +23% | 0,00 |
> | 200 | GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+160% · −25,8%** | +44% · −6,0% | +28% | −4,4% | 3,5 | 1,78 → 1,55 | +23% | 0,02 |
> | 201 | IFR + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+215% · −34,9%** | +44% · −6,5% | +31% | −6,0% | 3,1 | 1,59 → 1,65 | +26% | 0,14 |
> | 202 | IFR + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+238% · −33,5%** | +45% · −6,1% | +32% | −5,3% | 3,5 | 1,81 → 1,76 | +23% | 0,08 |
> | 203 | Donchian + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+197% · −25,1%** | +41% · −4,7% | +27% | −3,4% | 4,2 | 1,80 → 1,65 | +19% | 0,07 |
> | 204 | GPS médias + IFR + MACD + Quinta + Bollinger ⚠️ | **+268% · −39,1%** | +50% · −8,0% | +31% | −7,5% | 2,4 | 1,57 → 1,62 | +26% | 0,17 |
> | 205 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+153% · −18,9%** | +35% · −2,8% | +25% | −2,6% | 4,8 | 1,60 → 2,00 | +22% | 0,04 |
> | 206 | GPS médias + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+127% · −31,4%** | +32% · −5,9% | +23% | −3,0% | 3,3 | 2,12 → 1,12 | +16% | −0,01 |
> | 207 | MACD + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+164% · −30,1%** | +37% · −5,6% | +28% | −4,5% | 3,3 | 1,85 → 1,50 | +21% | 0,03 |
> | 208 | IFR + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+254% · −31,9%** | +46% · −5,9% | +30% | −7,0% | 2,5 | 1,37 → 1,87 | +24% | 0,23 |
> | 209 | GPS médias + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+248% · −42,4%** | +50% · −7,8% | +32% | −5,5% | 3,5 | 1,90 → 1,43 | +21% | 0,17 |
> | 210 | IFR + MACD + Bollinger | **+167% · −25,4%** | +54% · −7,9% | +33% | −7,8% | 2,7 | 1,28 → 1,79 | +26% | 0,35 |

> [!example]- Combinações 211 a 240 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 211 | IFR + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+185% · −31,0%** | +39% · −5,4% | +28% | −4,7% | 3,3 | 1,97 → 1,61 | +20% | 0,10 |
> | 212 | Pôr do sol + Pullback + Tendência | **+111% · −22,5%** | +41% · −7,0% | +30% | −4,5% | 3,8 | 2,08 → 1,37 | +18% | −0,02 |
> | 213 | GPS médias + IFR + Pôr do sol + Bollinger + Tendência | **+332% · −37,8%** | +57% · −7,2% | +34% | −5,1% | 4,2 | 1,90 → 1,65 | +24% | 0,19 |
> | 214 | GPS médias + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+173% · −28,1%** | +39% · −5,2% | +26% | −4,1% | 3,2 | 1,83 → 1,46 | +20% | 0,06 |
> | 215 | Pullback + Rompe 200 | **+41% · −19,7%** | +27% · −9,7% | +21% | −5,3% | 1,6 | 1,80 → 0,51 | +11% | 0,13 |
> | 216 | IFR + Pôr do sol + Pullback | **+108% · −12,9%** | +40% · −3,5% | +28% | −1,8% | 8,4 | 2,21 → 1,95 | +20% | −0,11 |
> | 217 | IFR + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+356% · −42,2%** | +58% · −8,6% | +37% | −7,4% | 3,2 | 1,56 → 1,82 | +30% | 0,31 |
> | 218 | MACD + Pullback | **+64% · −15,6%** | +37% · −7,6% | +29% | −6,7% | 2,4 | 1,44 → 1,31 | +23% | −0,18 |
> | 219 | GPS médias + IFR + Pullback | **+171% · −29,1%** | +58% · −8,8% | +35% | −5,4% | 4,2 | 1,98 → 1,49 | +21% | 0,07 |
> | 220 | MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+83% · −14,4%** | +28% · −3,0% | +23% | −3,2% | 3,1 | 1,71 → 1,56 | +18% | −0,05 |
> | 221 | IFR + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+210% · −27,9%** | +43% · −4,8% | +30% | −5,5% | 3,2 | 1,23 → 1,78 | +26% | 0,10 |
> | 222 | IFR + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+241% · −33,5%** | +46% · −6,1% | +32% | −5,3% | 3,5 | 1,75 → 1,78 | +25% | 0,13 |
> | 223 | MACD + Quinta + Pullback + Tendência ⚠️ | **+150% · −31,4%** | +41% · −7,6% | +31% | −6,1% | 2,9 | 1,81 → 1,42 | +21% | 0,03 |
> | 224 | IFR + Pôr do sol + Pullback + Tendência + Onda | **+243% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 3,3 | 1,46 → 1,69 | +27% | 0,08 |
> | 225 | IFR + Pôr do sol + Pullback + Rompe 200 | **+120% · −14,8%** | +35% · −3,3% | +25% | −1,9% | 6,6 | 2,16 → 1,66 | +18% | 0,01 |
> | 226 | GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+115% · −22,8%** | +35% · −5,2% | +24% | −2,3% | 4,8 | 2,13 → 1,23 | +18% | −0,07 |
> | 227 | IFR + Pôr do sol + Rompe 200 + Bollinger + Onda | **+199% · −29,4%** | +40% · −5,0% | +27% | −4,9% | 2,9 | 1,08 → 1,82 | +23% | 0,09 |
> | 228 | BB explosão + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+201% · −34,7%** | +42% · −6,5% | +29% | −4,2% | 3,9 | 1,71 → 1,80 | +20% | −0,05 |
> | 229 | MACD + Pôr do sol + Pullback + Rompe 200 | **+84% · −17,3%** | +29% · −3,8% | +23% | −3,7% | 2,7 | 1,56 → 1,31 | +20% | −0,03 |
> | 230 | GPS médias + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+154% · −30,5%** | +37% · −5,4% | +26% | −5,8% | 2,2 | 1,77 → 1,24 | +19% | 0,02 |
> | 231 | IFR + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+197% · −29,4%** | +40% · −5,0% | +27% | −5,0% | 2,8 | 1,15 → 1,79 | +23% | 0,07 |
> | 232 | Donchian + IFR + MACD + Pullback + Bollinger | **+342% · −33,8%** | +56% · −6,7% | +34% | −5,4% | 3,9 | 1,76 → 1,77 | +24% | 0,18 |
> | 233 | GPS médias + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+198% · −42,5%** | +43% · −8,7% | +29% | −4,0% | 4,1 | 2,11 → 1,23 | +17% | 0,06 |
> | 234 | GPS médias + IFR + Quinta + Bollinger + Tendência ⚠️ | **+328% · −37,8%** | +57% · −7,1% | +34% | −5,1% | 4,2 | 1,96 → 1,62 | +23% | 0,18 |
> | 235 | IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+236% · −29,5%** | +53% · −7,0% | +33% | −8,0% | 2,6 | 1,28 → 1,94 | +24% | 0,28 |
> | 236 | IFR + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+274% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 3,3 | 1,48 → 1,76 | +29% | 0,19 |
> | 237 | Pullback + Tendência | **+99% · −25,6%** | +53% · −12,0% | +37% | −7,6% | 3,2 | 2,03 → 1,26 | +16% | 0,01 |
> | 238 | Pôr do sol + Pullback + Rompe 200 + Tendência | **+122% · −29,0%** | +36% · −6,8% | +27% | −4,5% | 3,1 | 2,09 → 1,24 | +16% | 0,03 |
> | 239 | IFR + Pôr do sol + Tendência | **+158% · −27,1%** | +53% · −8,6% | +36% | −7,1% | 3,3 | 1,80 → 1,67 | +25% | 0,16 |
> | 240 | IFR + Bollinger + Tendência | **+219% · −32,8%** | +66% · −11,0% | +39% | −8,3% | 3,2 | 1,89 → 1,77 | +25% | 0,33 |

> [!example]- Combinações 241 a 270 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 241 | MACD + Pullback + Rompe 200 + Bollinger + Tendência | **+228% · −36,3%** | +44% · −6,8% | +30% | −6,5% | 2,6 | 1,87 → 1,49 | +21% | 0,15 |
> | 242 | GPS médias + IFR + MACD + Pôr do sol + Bollinger | **+271% · −39,0%** | +51% · −8,0% | +31% | −7,5% | 2,4 | 1,51 → 1,65 | +27% | 0,18 |
> | 243 | IFR + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+271% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 3,3 | 1,53 → 1,74 | +29% | 0,12 |
> | 244 | IFR + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+288% · −28,7%** | +50% · −4,8% | +32% | −5,0% | 3,9 | 1,29 → 2,03 | +26% | 0,09 |
> | 245 | Donchian + IFR + Pullback + Rompe 200 + Tendência | **+309% · −43,0%** | +56% · −8,8% | +35% | −6,0% | 3,7 | 2,01 → 1,53 | +18% | 0,23 |
> | 246 | Donchian + IFR + Pôr do sol + Pullback + Onda | **+256% · −33,5%** | +49% · −6,4% | +32% | −4,3% | 4,4 | 1,35 → 1,71 | +24% | 0,05 |
> | 247 | Donchian + Pullback + Rompe 200 + Bollinger + Tendência | **+299% · −40,0%** | +53% · −7,9% | +32% | −5,2% | 3,7 | 2,08 → 1,49 | +17% | 0,17 |
> | 248 | IFR + MACD + Pullback + Rompe 200 + Tendência | **+243% · −38,7%** | +47% · −7,6% | +33% | −7,3% | 2,8 | 1,81 → 1,52 | +22% | 0,18 |
> | 249 | Donchian + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+211% · −27,7%** | +42% · −4,8% | +25% | −2,2% | 5,6 | 2,13 → 1,61 | +17% | 0,01 |
> | 250 | Donchian + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+379% · −32,6%** | +58% · −6,4% | +34% | −4,0% | 5,3 | 1,96 → 2,04 | +24% | 0,08 |
> | 251 | GPS médias + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+199% · −35,9%** | +43% · −7,1% | +29% | −7,4% | 2,2 | 1,52 → 1,43 | +23% | 0,14 |
> | 252 | IFR + MACD + Pullback + Tendência + Onda | **+271% · −42,4%** | +52% · −8,6% | +36% | −8,7% | 2,7 | 1,32 → 1,62 | +30% | 0,21 |
> | 253 | MACD + Pullback + Rompe 200 | **+74% · −17,8%** | +32% · −5,6% | +25% | −5,6% | 2,2 | 1,50 → 1,18 | +19% | 0,01 |
> | 254 | IFR + Quinta + Tendência ⚠️ | **+156% · −27,0%** | +53% · −8,5% | +36% | −7,0% | 3,3 | 1,88 → 1,64 | +23% | 0,10 |
> | 255 | Donchian + IFR + Quinta + Pullback + Tendência ⚠️ | **+313% · −39,9%** | +55% · −8,1% | +35% | −4,8% | 4,7 | 2,07 → 1,64 | +20% | 0,10 |
> | 256 | GPS médias + IFR + MACD + Pôr do sol + Tendência | **+279% · −43,2%** | +55% · −7,8% | +35% | −6,9% | 3,3 | 1,58 → 1,51 | +27% | 0,23 |
> | 257 | GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+167% · −25,0%** | +44% · −5,5% | +26% | −3,5% | 3,9 | 2,22 → 1,42 | +18% | −0,00 |
> | 258 | GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+158% · −28,1%** | +44% · −6,8% | +28% | −5,5% | 2,8 | 1,78 → 1,37 | +20% | 0,12 |
> | 259 | IFR + 1ª vela 80 + Quinta ⚠️ | **+126% · −14,2%** | +45% · −4,3% | +31% | −3,8% | 4,7 | 1,43 → 2,04 | +24% | −0,11 |
> | 260 | VWAP + GPS médias + IFR + Quinta + Pullback ⚠️ | **+194% · −38,0%** | +43% · −7,3% | +29% | −7,4% | 2,2 | 1,70 → 1,30 | +18% | 0,02 |
> | 261 | GPS médias + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+204% · −37,8%** | +44% · −6,4% | +30% | −5,2% | 3,3 | 1,60 → 1,38 | +24% | 0,08 |
> | 262 | GPS médias + MACD + Quinta + Pullback ⚠️ | **+142% · −27,7%** | +41% · −6,2% | +28% | −6,5% | 2,3 | 1,74 → 1,30 | +22% | −0,05 |
> | 263 | GPS médias + Pôr do sol + Pullback + Rompe 200 + Tendência | **+201% · −40,6%** | +43% · −8,2% | +29% | −4,0% | 4,0 | 2,04 → 1,26 | +18% | 0,05 |
> | 264 | GPS médias + IFR + Pôr do sol + Bollinger | **+222% · −31,6%** | +53% · −7,9% | +31% | −5,6% | 3,2 | 1,78 → 1,70 | +25% | 0,11 |
> | 265 | 1ª vela 80 + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+180% · −38,2%** | +38% · −7,7% | +28% | −3,8% | 4,0 | 2,00 → 1,58 | +19% | −0,02 |
> | 266 | IFR + 1ª vela 80 + Tendência ⚠️ | **+207% · −29,7%** | +64% · −9,6% | +42% | −8,0% | 3,6 | 1,65 → 1,80 | +30% | 0,20 |
> | 267 | IFR + MACD + Pôr do sol + Tendência | **+201% · −34,9%** | +50% · −8,5% | +35% | −8,0% | 2,8 | 1,48 → 1,60 | +28% | 0,24 |
> | 268 | MACD + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+162% · −30,9%** | +37% · −6,3% | +28% | −5,7% | 2,6 | 1,85 → 1,35 | +19% | 0,06 |
> | 269 | IFR + MACD + Bollinger + Tendência | **+269% · −40,0%** | +59% · −10,3% | +37% | −8,9% | 2,8 | 1,57 → 1,68 | +28% | 0,40 |
> | 270 | GPS médias + MACD + Pôr do sol + Pullback + Rompe 200 | **+157% · −29,9%** | +37% · −5,6% | +26% | −5,8% | 2,2 | 1,69 → 1,27 | +20% | 0,00 |

> [!example]- Combinações 271 a 300 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 271 | GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+114% · −31,4%** | +35% · −7,7% | +24% | −4,1% | 2,7 | 2,07 → 1,00 | +15% | 0,02 |
> | 272 | IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+142% · −17,8%** | +39% · −3,5% | +27% | −3,6% | 4,0 | 1,45 → 1,93 | +24% | 0,09 |
> | 273 | Donchian + Pôr do sol + Pullback + Bollinger + Tendência | **+304% · −38,1%** | +53% · −7,5% | +32% | −3,9% | 4,8 | 2,08 → 1,64 | +19% | 0,07 |
> | 274 | ADX + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+276% · −44,5%** | +51% · −7,8% | +31% | −5,7% | 3,2 | 1,93 → 1,81 | +22% | 0,11 |
> | 275 | Pôr do sol + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+167% · −28,2%** | +36% · −4,7% | +25% | −3,9% | 3,1 | 2,06 → 1,55 | +19% | 0,07 |
> | 276 | Donchian + IFR + Pôr do sol + Rompe 200 + Bollinger | **+269% · −28,6%** | +49% · −5,3% | +29% | −4,0% | 4,0 | 1,81 → 1,78 | +21% | 0,12 |
> | 277 | GPS médias + MACD + Pullback + Tendência | **+214% · −44,1%** | +55% · −11,2% | +36% | −7,0% | 3,3 | 1,75 → 1,33 | +23% | 0,16 |
> | 278 | GPS médias + MACD + Pôr do sol + Pullback | **+145% · −26,9%** | +41% · −6,3% | +28% | −6,4% | 2,3 | 1,65 → 1,34 | +23% | −0,06 |
> | 279 | GPS médias + IFR + MACD + Pôr do sol + Rompe 200 | **+201% · −35,9%** | +44% · −7,1% | +29% | −7,4% | 2,2 | 1,45 → 1,45 | +24% | 0,15 |
> | 280 | Donchian + IFR + MACD + Pullback + Onda | **+282% · −40,0%** | +54% · −8,1% | +35% | −6,7% | 3,3 | 1,22 → 1,64 | +27% | 0,21 |
> | 281 | VWAP + Donchian + IFR + Pullback + Bollinger | **+293% · −38,0%** | +53% · −7,9% | +32% | −6,8% | 2,7 | 1,68 → 1,54 | +19% | 0,18 |
> | 282 | IFR + Quinta + Pullback + Tendência + Onda ⚠️ | **+241% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 3,3 | 1,51 → 1,67 | +28% | 0,04 |
> | 283 | Pôr do sol + Quinta + Pullback + Tendência + Onda ⚠️ | **+161% · −27,3%** | +37% · −5,2% | +28% | −5,4% | 2,8 | 1,38 → 1,52 | +24% | 0,01 |
> | 284 | 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+142% · −15,2%** | +38% · −3,1% | +25% | −2,0% | 6,4 | 1,95 → 2,07 | +22% | −0,07 |
> | 285 | Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+153% · −24,1%** | +40% · −5,0% | +27% | −3,7% | 3,7 | 2,03 → 1,70 | +21% | 0,08 |
> | 286 | GPS médias + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+240% · −30,0%** | +47% · −5,3% | +29% | −3,4% | 4,7 | 1,97 → 1,51 | +21% | 0,07 |
> | 287 | GPS médias + IFR + Rompe 200 + Bollinger + Tendência | **+326% · −41,1%** | +57% · −8,2% | +34% | −6,4% | 3,4 | 1,90 → 1,53 | +22% | 0,30 |
> | 288 | MACD + Pôr do sol + Pullback + Tendência | **+152% · −31,3%** | +41% · −7,5% | +31% | −6,1% | 2,9 | 1,73 → 1,45 | +23% | 0,04 |
> | 289 | MACD + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+193% · −23,0%** | +39% · −3,6% | +27% | −4,8% | 2,9 | 1,71 → 1,93 | +23% | −0,01 |
> | 290 | GPS médias + IFR + Quinta + Pullback + Onda ⚠️ | **+223% · −31,9%** | +47% · −5,9% | +31% | −5,5% | 3,3 | 1,42 → 1,55 | +27% | 0,01 |
> | 291 | MACD + Pôr do sol + Pullback | **+74% · −15,0%** | +31% · −4,6% | +25% | −4,1% | 2,9 | 1,50 → 1,47 | +19% | −0,12 |
> | 292 | Donchian + Quinta + Pullback + Bollinger + Onda ⚠️ | **+242% · −29,4%** | +46% · −5,4% | +29% | −4,4% | 3,6 | 1,38 → 1,68 | +23% | 0,01 |
> | 293 | GPS médias + Pôr do sol + Pullback + Bollinger | **+170% · −25,9%** | +44% · −5,5% | +26% | −3,5% | 3,9 | 2,11 → 1,49 | +20% | −0,04 |
> | 294 | IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+128% · −17,8%** | +45% · −5,1% | +31% | −5,3% | 3,4 | 1,38 → 1,83 | +26% | 0,19 |
> | 295 | MACD + Pôr do sol + Rompe 200 + Bollinger | **+111% · −20,1%** | +33% · −4,0% | +23% | −5,2% | 1,9 | 1,20 → 1,57 | +20% | 0,06 |
> | 296 | VWAP + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+116% · −23,0%** | +30% · −3,7% | +21% | −5,8% | 1,5 | 1,71 → 1,29 | +15% | 0,03 |
> | 297 | IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+140% · −15,9%** | +38% · −3,5% | +27% | −2,6% | 5,5 | 1,51 → 2,15 | +21% | −0,01 |
> | 298 | IFR + Pullback + Rompe 200 + Tendência + Onda | **+239% · −38,9%** | +47% · −7,5% | +33% | −7,4% | 2,8 | 1,49 → 1,56 | +26% | 0,18 |
> | 299 | Donchian + IFR + Pullback + Bollinger + Tendência | **+406% · −40,0%** | +63% · −7,9% | +37% | −5,6% | 4,4 | 2,07 → 1,73 | +21% | 0,20 |
> | 300 | ADX + Donchian + IFR + Pullback + Bollinger | **+392% · −40,9%** | +64% · −8,6% | +35% | −4,2% | 5,4 | 1,75 → 1,96 | +23% | 0,16 |

> [!example]- Combinações 301 a 330 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 301 | IFR + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+160% · −23,9%** | +36% · −4,6% | +27% | −4,3% | 3,3 | 1,35 → 1,62 | +24% | 0,03 |
> | 302 | IFR + Pullback + Bollinger + Tendência + Onda | **+323% · −40,6%** | +55% · −8,0% | +35% | −7,0% | 3,2 | 1,54 → 1,78 | +29% | 0,16 |
> | 303 | Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+182% · −37,4%** | +39% · −7,4% | +28% | −3,8% | 4,0 | 1,94 → 1,60 | +20% | 0,02 |
> | 304 | MACD + Pôr do sol + Pullback + Rompe 200 + Tendência | **+165% · −30,9%** | +37% · −6,3% | +28% | −5,8% | 2,6 | 1,77 → 1,37 | +20% | 0,06 |
> | 305 | GPS médias + IFR + Pôr do sol + Rompe 200 + Tendência | **+251% · −41,2%** | +50% · −7,4% | +32% | −5,6% | 3,5 | 1,84 → 1,45 | +22% | 0,18 |
> | 306 | GPS médias + IFR + Pôr do sol + Rompe 200 | **+160% · −28,1%** | +44% · −6,8% | +28% | −5,5% | 2,8 | 1,70 → 1,41 | +21% | 0,12 |
> | 307 | GPS médias + Pôr do sol + Pullback + Tendência | **+188% · −38,0%** | +49% · −9,0% | +32% | −4,3% | 4,4 | 2,03 → 1,33 | +19% | 0,00 |
> | 308 | Donchian + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+222% · −44,9%** | +45% · −8,7% | +30% | −4,4% | 3,9 | 2,08 → 1,35 | +16% | 0,09 |
> | 309 | Quinta + Rompe 200 + Bollinger ⚠️ | **+70% · −11,9%** | +30% · −2,6% | +20% | −2,8% | 2,6 | 1,75 → 1,32 | +17% | 0,03 |
> | 310 | GPS médias + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+157% · −28,3%** | +36% · −5,2% | +23% | −4,0% | 2,5 | 1,91 → 1,35 | +19% | 0,03 |
> | 311 | GPS médias + IFR + Pôr do sol + Pullback + Onda | **+226% · −32,1%** | +47% · −5,9% | +31% | −5,3% | 3,4 | 1,37 → 1,58 | +26% | 0,03 |
> | 312 | GPS médias + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+175% · −35,8%** | +40% · −6,9% | +27% | −3,9% | 3,7 | 1,90 → 1,25 | +19% | 0,05 |
> | 313 | Pullback + Rompe 200 + Tendência | **+110% · −29,6%** | +42% · −9,7% | +30% | −6,6% | 2,7 | 2,04 → 1,14 | +15% | 0,11 |
> | 314 | IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+222% · −33,4%** | +53% · −8,0% | +35% | −7,1% | 3,2 | 1,71 → 1,72 | +25% | 0,21 |
> | 315 | IFR + MACD + Quinta + Tendência ⚠️ | **+198% · −34,8%** | +50% · −8,5% | +35% | −7,9% | 2,8 | 1,55 → 1,58 | +26% | 0,20 |
> | 316 | IFR + Pôr do sol + Quinta ⚠️ | **+87% · −13,2%** | +35% · −4,0% | +25% | −2,2% | 5,5 | 1,76 → 2,00 | +18% | 0,03 |
> | 317 | BB explosão + IFR + MACD + Quinta + Pullback ⚠️ | **+179% · −41,6%** | +41% · −7,9% | +29% | −5,6% | 2,9 | 1,54 → 1,55 | +19% | 0,04 |
> | 318 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+182% · −29,7%** | +38% · −5,3% | +28% | −2,6% | 6,0 | 2,03 → 1,76 | +22% | −0,04 |
> | 319 | GPS médias + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+189% · −33,8%** | +40% · −6,6% | +26% | −6,3% | 2,0 | 1,52 → 1,52 | +23% | 0,05 |
> | 320 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+196% · −23,4%** | +39% · −3,7% | +27% | −5,0% | 2,8 | 1,61 → 1,97 | +22% | 0,03 |
> | 321 | Quinta + Pullback ⚠️ | **+39% · −9,3%** | +26% · −4,2% | +21% | −2,7% | 3,1 | 2,18 → 0,85 | +14% | −0,02 |
> | 322 | Donchian + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+208% · −28,5%** | +41% · −5,0% | +25% | −2,4% | 5,3 | 2,24 → 1,58 | +16% | 0,03 |
> | 323 | Donchian + IFR + MACD + Pullback | **+241% · −34,1%** | +57% · −9,1% | +36% | −5,9% | 3,9 | 1,64 → 1,62 | +24% | 0,19 |
> | 324 | IFR + Pullback + Rompe 200 | **+107% · −15,3%** | +40% · −4,4% | +28% | −3,3% | 4,7 | 2,10 → 1,54 | +17% | 0,09 |
> | 325 | VWAP + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+180% · −31,4%** | +39% · −5,7% | +28% | −6,0% | 2,5 | 1,56 → 1,68 | +19% | −0,04 |
> | 326 | IFR + Rompe 200 + Bollinger + Tendência | **+235% · −36,4%** | +54% · −9,1% | +34% | −7,4% | 2,8 | 1,94 → 1,67 | +22% | 0,26 |
> | 327 | IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+254% · −37,2%** | +58% · −9,3% | +39% | −8,7% | 3,1 | 1,44 → 1,71 | +32% | 0,31 |
> | 328 | IFR + Pullback + Tendência + Onda | **+225% · −35,5%** | +54% · −8,6% | +37% | −8,2% | 3,0 | 1,42 → 1,64 | +31% | 0,16 |
> | 329 | GPS médias + IFR + Quinta ⚠️ | **+145% · −25,8%** | +52% · −8,4% | +32% | −6,3% | 3,1 | 1,72 → 1,45 | +23% | 0,05 |
> | 330 | 1ª vela 80 + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+250% · −29,1%** | +45% · −4,9% | +30% | −3,3% | 5,2 | 2,13 → 1,87 | +22% | −0,01 |

> [!example]- Combinações 331 a 360 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 331 | GPS médias + IFR + MACD + Quinta ⚠️ | **+185% · −33,8%** | +49% · −8,5% | +32% | −8,5% | 2,3 | 1,45 → 1,47 | +27% | 0,13 |
> | 332 | Donchian + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+228% · −26,3%** | +44% · −4,8% | +29% | −2,1% | 7,4 | 2,11 → 1,83 | +19% | −0,01 |
> | 333 | IFR + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+198% · −25,9%** | +40% · −4,1% | +27% | −3,7% | 3,8 | 1,08 → 1,98 | +21% | 0,02 |
> | 334 | Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+144% · −14,2%** | +38% · −3,1% | +25% | −2,1% | 6,0 | 1,85 → 2,14 | +21% | −0,03 |
> | 335 | IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+98% · −14,4%** | +31% · −3,0% | +23% | −2,4% | 4,4 | 1,82 → 1,70 | +20% | 0,06 |
> | 336 | Donchian + IFR + Pullback + Rompe 200 + Onda | **+252% · −35,9%** | +50% · −7,0% | +32% | −5,3% | 3,6 | 1,39 → 1,58 | +25% | 0,18 |
> | 337 | Donchian + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+383% · −40,8%** | +62% · −7,8% | +39% | −5,4% | 4,9 | 1,92 → 1,77 | +24% | 0,13 |
> | 338 | VWAP + GPS médias + IFR + MACD + Pullback | **+220% · −43,2%** | +48% · −9,2% | +32% | −10,7% | 1,8 | 1,44 → 1,32 | +22% | 0,18 |
> | 339 | Pôr do sol + Quinta + Bollinger ⚠️ | **+69% · −8,5%** | +30% · −1,6% | +20% | −0,8% | 8,1 | 1,92 → 2,11 | +17% | 0,05 |
> | 340 | GPS médias + IFR + MACD + Pôr do sol | **+188% · −33,8%** | +50% · −8,5% | +32% | −8,4% | 2,3 | 1,38 → 1,50 | +28% | 0,14 |
> | 341 | MACD + Pullback + Tendência | **+138% · −32,6%** | +49% · −11,0% | +35% | −8,7% | 2,6 | 1,69 → 1,37 | +23% | 0,13 |
> | 342 | IFR + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+301% · −37,8%** | +54% · −7,2% | +37% | −6,8% | 3,5 | 1,41 → 1,79 | +31% | 0,11 |
> | 343 | Donchian + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+300% · −38,7%** | +52% · −7,6% | +32% | −3,9% | 4,9 | 2,16 → 1,61 | +18% | 0,08 |
> | 344 | GPS médias + IFR + Pullback + Bollinger + Onda | **+300% · −35,2%** | +54% · −7,0% | +33% | −6,2% | 3,2 | 1,45 → 1,67 | +29% | 0,15 |
> | 345 | VWAP + GPS médias + IFR + Pullback + Bollinger | **+262% · −41,1%** | +50% · −8,6% | +31% | −8,4% | 2,1 | 1,71 → 1,42 | +20% | 0,18 |
> | 346 | GPS médias + IFR + MACD + Quinta + Tendência ⚠️ | **+276% · −44,3%** | +54% · −8,2% | +35% | −6,8% | 3,3 | 1,63 → 1,49 | +26% | 0,21 |
> | 347 | Pôr do sol + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+92% · −21,6%** | +27% · −4,0% | +22% | −3,7% | 2,4 | 1,12 → 1,31 | +20% | 0,00 |
> | 348 | Pôr do sol + Quinta + Tendência ⚠️ | **+91% · −18,6%** | +36% · −5,5% | +27% | −4,3% | 3,3 | 1,84 → 1,41 | +20% | 0,07 |
> | 349 | Pôr do sol + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+122% · −20,9%** | +31% · −3,4% | +22% | −4,7% | 1,9 | 0,88 → 1,60 | +16% | 0,01 |
> | 350 | Pôr do sol + Pullback + Bollinger + Tendência + Onda | **+228% · −32,9%** | +44% · −6,0% | +30% | −6,0% | 2,8 | 1,42 → 1,66 | +26% | 0,07 |
> | 351 | VWAP + Donchian + IFR + Quinta + Pullback ⚠️ | **+218% · −34,8%** | +45% · −7,3% | +30% | −5,9% | 2,9 | 1,66 → 1,42 | +17% | 0,04 |
> | 352 | GPS médias + MACD + Pullback + Rompe 200 + Tendência | **+227% · −46,1%** | +48% · −9,2% | +32% | −6,5% | 3,0 | 1,78 → 1,28 | +20% | 0,16 |
> | 353 | GPS médias + IFR + Pôr do sol | **+148% · −25,8%** | +52% · −8,4% | +32% | −6,3% | 3,1 | 1,64 → 1,50 | +25% | 0,06 |
> | 354 | Pôr do sol + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+253% · −27,3%** | +45% · −4,8% | +30% | −3,3% | 5,2 | 2,05 → 1,90 | +23% | 0,02 |
> | 355 | Donchian + GPS médias + IFR + Pôr do sol + Pullback | **+292% · −39,5%** | +55% · −7,1% | +33% | −4,4% | 4,5 | 1,91 → 1,56 | +21% | 0,06 |
> | 356 | Pôr do sol + Quinta + Pullback + Bollinger + Onda ⚠️ | **+143% · −20,5%** | +33% · −3,4% | +23% | −3,5% | 3,0 | 1,21 → 1,76 | +20% | −0,02 |
> | 357 | IFR + Quinta + Bollinger + Tendência + Onda ⚠️ | **+287% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 3,0 | 1,36 → 1,79 | +29% | 0,12 |
> | 358 | ADX + MACD + Pullback + Bollinger + Tendência | **+314% · −50,4%** | +56% · −9,5% | +34% | −7,2% | 3,0 | 1,62 → 1,74 | +26% | 0,20 |
> | 359 | BB explosão + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+282% · −49,5%** | +54% · −9,6% | +36% | −5,7% | 4,0 | 1,76 → 1,67 | +21% | 0,11 |
> | 360 | ADX + MACD + Quinta + Pullback + Bollinger ⚠️ | **+220% · −39,1%** | +44% · −7,1% | +28% | −4,3% | 3,5 | 1,51 → 1,88 | +19% | 0,08 |

> [!example]- Combinações 361 a 390 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 361 | IFR + MACD + Rompe 200 + Bollinger + Tendência | **+286% · −43,2%** | +51% · −9,0% | +33% | −8,0% | 2,5 | 1,63 → 1,62 | +25% | 0,30 |
> | 362 | MACD + Quinta + Bollinger ⚠️ | **+97% · −16,7%** | +37% · −4,6% | +25% | −5,9% | 2,0 | 1,18 → 1,65 | +19% | 0,09 |
> | 363 | IFR + MACD + Pôr do sol + Bollinger + Onda | **+233% · −33,3%** | +45% · −6,1% | +30% | −6,3% | 2,7 | 0,90 → 1,84 | +22% | 0,15 |
> | 364 | Pôr do sol + Pullback + Rompe 200 + Bollinger + Onda | **+144% · −23,0%** | +34% · −4,0% | +23% | −4,4% | 2,4 | 1,20 → 1,55 | +22% | 0,03 |
> | 365 | GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+163% · −33,4%** | +45% · −7,2% | +30% | −3,8% | 4,5 | 1,86 → 1,32 | +21% | 0,02 |
> | 366 | Donchian + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+266% · −28,6%** | +48% · −5,3% | +29% | −3,8% | 4,2 | 1,90 → 1,76 | +20% | 0,12 |
> | 367 | Quinta + Pullback + Bollinger + Tendência + Onda ⚠️ | **+225% · −32,9%** | +44% · −6,0% | +30% | −5,9% | 2,9 | 1,48 → 1,64 | +26% | 0,05 |
> | 368 | MACD + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+195% · −25,9%** | +39% · −4,3% | +27% | −5,9% | 2,4 | 1,62 → 1,78 | +23% | 0,08 |
> | 369 | BB explosão + IFR + MACD + Pôr do sol + Pullback | **+182% · −39,9%** | +41% · −7,4% | +29% | −5,6% | 2,9 | 1,47 → 1,58 | +20% | 0,03 |
> | 370 | BB explosão + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+151% · −39,9%** | +36% · −7,5% | +26% | −3,5% | 3,7 | 1,84 → 1,45 | +14% | 0,06 |
> | 371 | IFR + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+214% · −35,1%** | +44% · −6,5% | +31% | −6,1% | 3,0 | 1,27 → 1,71 | +26% | 0,06 |
> | 372 | MACD + Pullback + Bollinger + Tendência + Onda | **+261% · −40,0%** | +49% · −7,8% | +33% | −7,8% | 2,6 | 1,29 → 1,61 | +29% | 0,20 |
> | 373 | BB explosão + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+153% · −34,8%** | +36% · −6,1% | +26% | −2,6% | 5,1 | 1,86 → 1,65 | +16% | −0,03 |
> | 374 | IFR + Quinta + Rompe 200 ⚠️ | **+87% · −14,3%** | +35% · −3,6% | +25% | −3,1% | 4,1 | 1,73 → 1,57 | +19% | 0,08 |
> | 375 | GPS médias + Pôr do sol + Pullback + Rompe 200 | **+116% · −30,6%** | +36% · −7,5% | +24% | −4,1% | 2,8 | 1,97 → 1,05 | +16% | −0,01 |
> | 376 | BB explosão + IFR + Quinta + Pullback + Tendência ⚠️ | **+224% · −50,8%** | +47% · −10,7% | +32% | −5,1% | 3,8 | 1,90 → 1,52 | +17% | 0,09 |
> | 377 | GPS médias + IFR + Pôr do sol + Tendência | **+237% · −39,0%** | +58% · −9,0% | +36% | −5,9% | 4,0 | 1,80 → 1,51 | +24% | 0,18 |
> | 378 | GPS médias + IFR + MACD + Pullback + Onda | **+252% · −38,8%** | +51% · −7,7% | +34% | −8,2% | 2,6 | 1,25 → 1,54 | +31% | 0,16 |
> | 379 | GPS médias + Quinta + Pullback ⚠️ | **+103% · −25,4%** | +40% · −7,7% | +27% | −3,7% | 3,7 | 2,08 → 1,08 | +17% | −0,10 |
> | 380 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+204% · −32,6%** | +43% · −6,3% | +29% | −4,2% | 3,9 | 1,65 → 1,83 | +21% | −0,03 |
> | 381 | Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+133% · −18,2%** | +32% · −2,6% | +22% | −2,4% | 3,7 | 1,50 → 1,98 | +17% | 0,04 |
> | 382 | Donchian + GPS médias + IFR + Pullback + Bollinger | **+375% · −39,0%** | +63% · −7,8% | +35% | −5,4% | 4,1 | 1,97 → 1,64 | +21% | 0,18 |
> | 383 | GPS médias + IFR + Quinta + Tendência ⚠️ | **+234% · −40,2%** | +58% · −9,5% | +36% | −5,8% | 4,0 | 1,86 → 1,49 | +23% | 0,15 |
> | 384 | 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+166% · −31,1%** | +43% · −7,3% | +31% | −3,7% | 5,0 | 1,99 → 1,68 | +22% | −0,11 |
> | 385 | GPS médias + IFR + Pullback + Rompe 200 + Onda | **+222% · −34,6%** | +47% · −6,6% | +31% | −6,7% | 2,7 | 1,40 → 1,46 | +27% | 0,17 |
> | 386 | IFR + MACD + Pôr do sol + Pullback + Onda | **+193% · −28,1%** | +41% · −4,9% | +30% | −5,1% | 3,3 | 1,10 → 1,72 | +23% | 0,04 |
> | 387 | Donchian + IFR + Pullback + Bollinger + Onda | **+338% · −33,7%** | +57% · −6,4% | +34% | −4,6% | 4,6 | 1,44 → 1,81 | +26% | 0,15 |
> | 388 | VWAP + MACD + Quinta + Pullback + Bollinger ⚠️ | **+146% · −30,2%** | +34% · −5,4% | +24% | −8,2% | 1,4 | 1,41 → 1,34 | +18% | 0,09 |
> | 389 | Donchian + GPS médias + IFR + Pullback + Rompe 200 | **+286% · −44,2%** | +55% · −8,5% | +33% | −5,4% | 3,8 | 1,92 → 1,43 | +18% | 0,21 |
> | 390 | GPS médias + IFR + MACD + Bollinger + Tendência | **+357% · −44,5%** | +62% · −9,2% | +37% | −7,6% | 3,2 | 1,64 → 1,57 | +27% | 0,38 |

> [!example]- Combinações 391 a 420 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 391 | IFR + MACD + Rompe 200 + Bollinger + Onda | **+230% · −36,8%** | +45% · −7,1% | +30% | −7,2% | 2,4 | 0,96 → 1,71 | +23% | 0,24 |
> | 392 | IFR + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+267% · −37,4%** | +50% · −7,1% | +35% | −6,7% | 3,2 | 1,23 → 1,80 | +28% | 0,05 |
> | 393 | MACD + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+214% · −31,7%** | +43% · −5,8% | +31% | −5,1% | 3,6 | 1,74 → 1,64 | +25% | −0,02 |
> | 394 | ADX + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+408% · −48,2%** | +65% · −10,1% | +38% | −6,8% | 3,7 | 1,54 → 2,01 | +28% | 0,27 |
> | 395 | Donchian + IFR + Pôr do sol + Pullback | **+212% · −26,2%** | +51% · −6,4% | +32% | −3,0% | 6,3 | 1,99 → 1,78 | +20% | −0,00 |
> | 396 | VWAP + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+166% · −26,9%** | +37% · −4,7% | +25% | −5,5% | 2,2 | 1,43 → 1,64 | +16% | 0,06 |
> | 397 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+338% · −30,5%** | +55% · −5,8% | +32% | −4,5% | 4,3 | 1,67 → 2,05 | +24% | 0,12 |
> | 398 | Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+152% · −28,1%** | +41% · −6,3% | +27% | −5,3% | 2,7 | 2,01 → 1,46 | +18% | 0,09 |
> | 399 | IFR + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+270% · −40,5%** | +50% · −8,1% | +35% | −7,8% | 2,8 | 1,50 → 1,66 | +27% | 0,26 |
> | 400 | Donchian + IFR + Quinta + Pullback + Onda ⚠️ | **+253% · −33,3%** | +49% · −6,3% | +32% | −4,2% | 4,5 | 1,40 → 1,70 | +24% | 0,03 |
> | 401 | Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+102% · −23,2%** | +32% · −5,0% | +25% | −4,4% | 2,7 | 1,89 → 1,28 | +18% | 0,06 |
> | 402 | VWAP + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+165% · −29,3%** | +37% · −5,3% | +25% | −6,4% | 1,9 | 1,47 → 1,45 | +18% | 0,11 |
> | 403 | Donchian + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+177% · −31,9%** | +39% · −6,5% | +27% | −4,2% | 3,3 | 1,74 → 1,39 | +18% | 0,05 |
> | 404 | MACD + Quinta + Pullback + Tendência + Onda ⚠️ | **+190% · −35,0%** | +41% · −6,4% | +31% | −7,1% | 2,5 | 1,26 → 1,50 | +28% | 0,06 |
> | 405 | MACD + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+255% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,2 | 1,54 → 1,74 | +25% | 0,13 |
> | 406 | VWAP + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+250% · −31,7%** | +46% · −6,0% | +30% | −7,0% | 2,4 | 1,60 → 1,79 | +21% | 0,12 |
> | 407 | Donchian + MACD + Pullback + Rompe 200 + Tendência | **+251% · −45,1%** | +50% · −9,8% | +33% | −6,9% | 2,9 | 1,74 → 1,36 | +19% | 0,22 |
> | 408 | ADX + MACD + Pôr do sol + Pullback + Bollinger | **+223% · −38,0%** | +44% · −6,8% | +28% | −4,1% | 3,7 | 1,41 → 1,92 | +19% | 0,05 |
> | 409 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+156% · −27,7%** | +36% · −4,9% | +26% | −6,5% | 2,0 | 1,22 → 1,71 | +17% | 0,01 |
> | 410 | ADX + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+246% · −40,0%** | +47% · −7,3% | +29% | −5,4% | 3,1 | 1,62 → 1,86 | +22% | 0,13 |
> | 411 | IFR + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+184% · −26,1%** | +39% · −4,4% | +28% | −6,0% | 2,6 | 1,32 → 1,77 | +24% | 0,08 |
> | 412 | Quinta + Bollinger + Tendência ⚠️ | **+138% · −24,1%** | +48% · −7,3% | +30% | −5,6% | 3,1 | 1,97 → 1,59 | +21% | 0,08 |
> | 413 | MACD + Pôr do sol + Pullback + Tendência + Onda | **+192% · −35,0%** | +42% · −6,4% | +31% | −7,1% | 2,5 | 1,20 → 1,51 | +27% | 0,10 |
> | 414 | MACD + Quinta + Bollinger + Tendência ⚠️ | **+183% · −32,1%** | +46% · −7,6% | +31% | −6,9% | 2,6 | 1,58 → 1,56 | +25% | 0,18 |
> | 415 | IFR + MACD + Pôr do sol + Tendência + Onda | **+242% · −42,0%** | +49% · −8,5% | +34% | −8,6% | 2,5 | 1,10 → 1,64 | +29% | 0,22 |
> | 416 | 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+144% · −24,6%** | +39% · −5,7% | +25% | −3,8% | 3,3 | 1,82 → 1,82 | +20% | 0,05 |
> | 417 | Pôr do sol + Rompe 200 + Bollinger + Tendência | **+154% · −28,2%** | +41% · −6,3% | +27% | −5,3% | 2,6 | 1,91 → 1,49 | +19% | 0,09 |
> | 418 | VWAP + IFR + Pôr do sol + Pullback + Bollinger | **+194% · −26,9%** | +40% · −4,8% | +26% | −5,0% | 2,7 | 1,72 → 1,63 | +17% | 0,05 |
> | 419 | MACD + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+200% · −32,2%** | +41% · −5,7% | +28% | −5,2% | 2,9 | 1,62 → 1,64 | +24% | 0,12 |
> | 420 | Pôr do sol + Quinta + Bollinger + Tendência + Onda ⚠️ | **+199% · −32,4%** | +41% · −5,7% | +28% | −5,5% | 2,8 | 1,21 → 1,69 | +23% | 0,05 |

> [!example]- Combinações 421 a 450 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 421 | IFR + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+353% · −42,3%** | +58% · −8,6% | +37% | −7,5% | 3,2 | 1,27 → 1,88 | +28% | 0,24 |
> | 422 | BB explosão + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+201% · −39,9%** | +43% · −8,0% | +29% | −5,1% | 3,2 | 1,65 → 1,67 | +18% | 0,09 |
> | 423 | Donchian + IFR + Quinta + Pullback ⚠️ | **+210% · −26,1%** | +51% · −6,4% | +32% | −3,1% | 6,2 | 2,07 → 1,75 | +19% | 0,00 |
> | 424 | IFR + Pôr do sol + Bollinger + Tendência + Onda | **+290% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 2,9 | 1,31 → 1,81 | +28% | 0,16 |
> | 425 | ADX + Donchian + Pullback + Bollinger + Tendência | **+386% · −56,8%** | +65% · −12,0% | +36% | −5,8% | 4,1 | 1,81 → 1,74 | +22% | 0,20 |
> | 426 | Donchian + MACD + Quinta + Pullback + Bollinger ⚠️ | **+245% · −28,2%** | +46% · −5,0% | +28% | −4,3% | 3,7 | 1,83 → 1,67 | +21% | 0,05 |
> | 427 | Donchian + Pôr do sol + Pullback + Bollinger + Onda | **+244% · −29,6%** | +46% · −5,5% | +28% | −4,3% | 3,7 | 1,32 → 1,71 | +23% | 0,03 |
> | 428 | Donchian + Pullback + Rompe 200 + Bollinger | **+194% · −28,2%** | +47% · −6,5% | +28% | −3,3% | 4,5 | 2,10 → 1,51 | +16% | 0,09 |
> | 429 | Quinta + Bollinger ⚠️ | **+59% · −8,4%** | +35% · −2,8% | +21% | −1,5% | 5,8 | 1,82 → 1,76 | +18% | 0,01 |
> | 430 | VWAP + IFR + MACD + Quinta + Bollinger ⚠️ | **+195% · −35,1%** | +41% · −6,8% | +28% | −8,9% | 1,7 | 1,18 → 1,53 | +19% | 0,18 |
> | 431 | Donchian + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+269% · −28,7%** | +48% · −5,9% | +29% | −3,4% | 4,7 | 1,88 → 1,95 | +22% | 0,05 |
> | 432 | MACD + Rompe 200 + Bollinger | **+99% · −20,1%** | +38% · −5,9% | +25% | −7,5% | 1,6 | 1,12 → 1,44 | +21% | 0,18 |
> | 433 | Donchian + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+322% · −33,1%** | +56% · −6,5% | +35% | −6,5% | 3,5 | 1,62 → 1,78 | +27% | 0,13 |
> | 434 | Pullback + Rompe 200 + Bollinger + Tendência + Onda | **+225% · −36,4%** | +44% · −6,8% | +30% | −6,6% | 2,6 | 1,46 → 1,52 | +25% | 0,15 |
> | 435 | Pôr do sol + Rompe 200 + Bollinger | **+72% · −13,0%** | +30% · −3,0% | +20% | −2,4% | 2,9 | 1,56 → 1,44 | +18% | −0,01 |
> | 436 | Donchian + IFR + Pullback + Tendência + Onda | **+333% · −43,0%** | +61% · −8,7% | +38% | −7,4% | 3,5 | 1,49 → 1,62 | +28% | 0,24 |
> | 437 | BB explosão + IFR + Pôr do sol + Pullback + Rompe 200 | **+153% · −38,2%** | +37% · −6,9% | +26% | −3,4% | 3,8 | 1,76 → 1,48 | +15% | 0,03 |
> | 438 | 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+234% · −28,8%** | +52% · −6,5% | +33% | −4,6% | 4,5 | 2,01 → 1,82 | +23% | 0,05 |
> | 439 | GPS médias + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+198% · −32,0%** | +44% · −6,2% | +29% | −6,0% | 2,7 | 1,17 → 1,57 | +26% | 0,00 |
> | 440 | Pôr do sol + Pullback + Tendência + Onda | **+149% · −27,2%** | +42% · −6,4% | +31% | −7,0% | 2,5 | 1,28 → 1,47 | +24% | 0,05 |
> | 441 | IFR + Quinta + Pullback + Bollinger + Onda ⚠️ | **+226% · −25,9%** | +43% · −4,2% | +29% | −4,1% | 3,9 | 1,42 → 1,94 | +23% | 0,01 |
> | 442 | MACD + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+198% · −35,8%** | +41% · −6,7% | +28% | −6,4% | 2,4 | 1,65 → 1,49 | +22% | 0,14 |
> | 443 | MACD + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+291% · −35,0%** | +50% · −6,5% | +33% | −5,8% | 3,5 | 1,77 → 1,75 | +26% | 0,13 |
> | 444 | VWAP + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+263% · −43,2%** | +50% · −8,8% | +34% | −5,9% | 3,6 | 1,65 → 1,59 | +22% | 0,11 |
> | 445 | Quinta + Pullback + Rompe 200 + Tendência + Onda ⚠️ | **+159% · −32,6%** | +37% · −6,0% | +28% | −6,1% | 2,5 | 1,42 → 1,37 | +23% | 0,05 |
> | 446 | BB explosão + IFR + Pôr do sol + Pullback + Tendência | **+227% · −49,3%** | +47% · −10,2% | +32% | −5,1% | 3,7 | 1,84 → 1,54 | +18% | 0,08 |
> | 447 | MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+179% · −23,8%** | +44% · −5,1% | +29% | −6,7% | 2,4 | 1,57 → 1,87 | +24% | 0,07 |
> | 448 | 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+167% · −37,9%** | +44% · −9,8% | +31% | −5,2% | 3,5 | 1,89 → 1,52 | +20% | 0,03 |
> | 449 | VWAP + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+217% · −33,4%** | +43% · −6,4% | +28% | −7,5% | 2,0 | 1,34 → 1,79 | +20% | 0,10 |
> | 450 | MACD + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+201% · −35,8%** | +41% · −6,8% | +28% | −6,4% | 2,3 | 1,57 → 1,52 | +23% | 0,15 |

> [!example]- Combinações 451 a 480 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 451 | Donchian + MACD + Pullback + Bollinger + Tendência | **+335% · −46,2%** | +57% · −10,0% | +35% | −6,4% | 3,4 | 1,80 → 1,56 | +22% | 0,23 |
> | 452 | GPS médias + IFR + Pullback + Tendência + Onda | **+301% · −46,7%** | +58% · −9,1% | +37% | −7,0% | 3,5 | 1,52 → 1,53 | +29% | 0,19 |
> | 453 | GPS médias + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+133% · −30,5%** | +34% · −5,7% | +24% | −6,3% | 1,8 | 1,45 → 1,25 | +22% | 0,02 |
> | 454 | IFR + Pullback | **+96% · −12,9%** | +51% · −5,9% | +34% | −3,5% | 6,1 | 2,15 → 1,82 | +21% | −0,17 |
> | 455 | ADX + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+183% · −35,3%** | +40% · −6,1% | +25% | −4,2% | 2,9 | 1,75 → 1,75 | +19% | 0,07 |
> | 456 | GPS médias + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+346% · −43,6%** | +60% · −8,9% | +38% | −5,0% | 5,0 | 1,94 → 1,67 | +25% | 0,11 |
> | 457 | Donchian + IFR + MACD + Pullback + Tendência | **+341% · −45,2%** | +60% · −10,2% | +38% | −7,3% | 3,5 | 1,75 → 1,57 | +23% | 0,28 |
> | 458 | IFR + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+270% · −37,4%** | +51% · −7,1% | +35% | −6,7% | 3,2 | 1,19 → 1,81 | +27% | 0,14 |
> | 459 | Donchian + Pôr do sol + Pullback + Rompe 200 + Tendência | **+224% · −41,8%** | +46% · −8,5% | +30% | −4,4% | 3,8 | 2,01 → 1,37 | +17% | 0,09 |
> | 460 | GPS médias + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+253% · −31,8%** | +48% · −5,7% | +31% | −4,6% | 4,0 | 1,94 → 1,76 | +24% | −0,04 |
> | 461 | IFR + Pôr do sol + Rompe 200 + Tendência | **+171% · −31,0%** | +45% · −7,3% | +31% | −6,4% | 2,9 | 1,85 → 1,56 | +21% | 0,15 |
> | 462 | GPS médias + IFR + MACD + Rompe 200 | **+185% · −35,9%** | +50% · −9,2% | +32% | −9,5% | 2,0 | 1,42 → 1,38 | +25% | 0,30 |
> | 463 | IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+169% · −30,9%** | +44% · −7,2% | +31% | −6,4% | 2,9 | 1,93 → 1,53 | +20% | 0,13 |
> | 464 | MACD + Pullback + Rompe 200 + Tendência | **+150% · −31,7%** | +42% · −8,2% | +31% | −7,6% | 2,3 | 1,74 → 1,30 | +20% | 0,13 |
> | 465 | Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+157% · −32,3%** | +36% · −6,0% | +26% | −3,7% | 3,6 | 1,72 → 1,63 | +22% | 0,03 |
> | 466 | MACD + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+214% · −37,0%** | +43% · −7,2% | +31% | −6,3% | 2,9 | 1,68 → 1,54 | +23% | 0,09 |
> | 467 | BB explosão + IFR + Quinta + Pullback + Bollinger ⚠️ | **+212% · −33,9%** | +43% · −6,5% | +28% | −3,2% | 4,6 | 1,94 → 1,75 | +17% | 0,05 |
> | 468 | IFR + Quinta ⚠️ | **+76% · −11,3%** | +42% · −5,2% | +30% | −3,6% | 4,7 | 1,66 → 1,83 | +22% | −0,09 |
> | 469 | Donchian + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+268% · −35,0%** | +50% · −6,9% | +30% | −5,1% | 3,3 | 1,86 → 1,52 | +19% | 0,13 |
> | 470 | GPS médias + IFR + Bollinger + Tendência | **+309% · −38,8%** | +68% · −9,4% | +39% | −6,8% | 3,8 | 1,86 → 1,59 | +25% | 0,36 |
> | 471 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+217% · −31,5%** | +43% · −5,8% | +31% | −5,1% | 3,6 | 1,68 → 1,66 | +26% | 0,04 |
> | 472 | VWAP + IFR + Pullback + Bollinger + Tendência | **+279% · −38,5%** | +51% · −7,4% | +33% | −6,2% | 3,3 | 1,79 → 1,52 | +19% | 0,19 |
> | 473 | Donchian + Pullback + Rompe 200 + Bollinger + Onda | **+241% · −32,1%** | +47% · −6,1% | +29% | −5,8% | 2,7 | 1,36 → 1,54 | +24% | 0,13 |
> | 474 | VWAP + IFR + MACD + Pullback + Bollinger | **+225% · −33,5%** | +44% · −6,3% | +30% | −8,4% | 2,0 | 1,44 → 1,54 | +20% | 0,19 |
> | 475 | VWAP + MACD + Pôr do sol + Pullback + Bollinger | **+148% · −30,6%** | +35% · −5,5% | +24% | −8,4% | 1,4 | 1,32 → 1,37 | +17% | 0,10 |
> | 476 | ADX + IFR + Quinta + Bollinger + Tendência ⚠️ | **+338% · −45,4%** | +58% · −9,3% | +35% | −6,2% | 3,5 | 1,69 → 1,93 | +26% | 0,20 |
> | 477 | Quinta + Pullback + Tendência + Onda ⚠️ | **+147% · −27,2%** | +41% · −6,4% | +31% | −6,9% | 2,6 | 1,34 → 1,45 | +25% | 0,00 |
> | 478 | IFR + MACD + Pullback + Rompe 200 + Onda | **+191% · −31,9%** | +41% · −5,7% | +30% | −6,4% | 2,7 | 1,15 → 1,59 | +26% | 0,14 |
> | 479 | MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+108% · −16,2%** | +33% · −3,1% | +23% | −4,0% | 2,5 | 1,26 → 1,80 | +19% | 0,06 |
> | 480 | VWAP + IFR + Pullback + Bollinger | **+178% · −26,7%** | +45% · −6,4% | +29% | −6,7% | 2,4 | 1,67 → 1,54 | +19% | 0,13 |

> [!example]- Combinações 481 a 510 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 481 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+220% · −33,3%** | +43% · −6,4% | +28% | −7,5% | 2,0 | 1,27 → 1,82 | +19% | 0,15 |
> | 482 | Pôr do sol + Pullback | **+40% · −8,6%** | +26% · −3,7% | +21% | −3,0% | 2,7 | 1,97 → 0,99 | +16% | −0,13 |
> | 483 | VWAP + IFR + Pullback + Rompe 200 + Bollinger | **+192% · −27,5%** | +40% · −4,8% | +27% | −6,1% | 2,3 | 1,73 → 1,44 | +17% | 0,14 |
> | 484 | Donchian + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+334% · −32,6%** | +55% · −6,1% | +32% | −5,4% | 3,6 | 1,69 → 1,90 | +24% | 0,21 |
> | 485 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+175% · −30,4%** | +39% · −5,7% | +27% | −4,7% | 3,1 | 1,37 → 1,82 | +22% | −0,01 |
> | 486 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+135% · −17,0%** | +32% · −2,5% | +25% | −3,7% | 3,3 | 1,56 → 1,82 | +20% | −0,06 |
> | 487 | Donchian + MACD + Pôr do sol + Pullback + Tendência | **+256% · −45,2%** | +50% · −9,7% | +33% | −5,7% | 3,5 | 1,73 → 1,47 | +22% | 0,13 |
> | 488 | Donchian + GPS médias + IFR + Quinta + Pullback ⚠️ | **+289% · −41,2%** | +55% · −7,5% | +33% | −4,4% | 4,5 | 1,97 → 1,53 | +20% | 0,06 |
> | 489 | BB explosão + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+231% · −36,8%** | +47% · −7,3% | +32% | −7,6% | 2,6 | 1,43 → 1,69 | +23% | 0,10 |
> | 490 | Donchian + IFR + Pôr do sol + Rompe 200 + Tendência | **+279% · −38,0%** | +53% · −7,6% | +33% | −6,0% | 3,4 | 1,80 → 1,55 | +20% | 0,21 |
> | 491 | Donchian + Pôr do sol + Pullback + Tendência + Onda | **+250% · −38,4%** | +50% · −7,8% | +33% | −5,8% | 3,5 | 1,41 → 1,50 | +26% | 0,11 |
> | 492 | Donchian + IFR + Pullback + Tendência | **+294% · −40,8%** | +65% · −10,5% | +40% | −6,4% | 4,3 | 1,98 → 1,60 | +20% | 0,23 |
> | 493 | IFR + Pôr do sol + Pullback + Onda | **+149% · −20,4%** | +41% · −4,7% | +29% | −4,7% | 3,5 | 1,18 → 1,76 | +22% | −0,01 |
> | 494 | GPS médias + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+287% · −38,2%** | +53% · −7,8% | +34% | −8,0% | 2,7 | 1,64 → 1,67 | +28% | 0,11 |
> | 495 | Donchian + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+334% · −30,5%** | +55% · −5,8% | +32% | −4,5% | 4,3 | 1,74 → 2,02 | +25% | 0,07 |
> | 496 | GPS médias + Pôr do sol + Pullback | **+105% · −23,9%** | +41% · −6,9% | +26% | −3,5% | 3,9 | 1,97 → 1,15 | +18% | −0,14 |
> | 497 | VWAP + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+155% · −33,2%** | +36% · −6,3% | +26% | −7,4% | 1,8 | 1,26 → 1,55 | +20% | 0,06 |
> | 498 | Donchian + Quinta + Pullback + Tendência + Onda ⚠️ | **+247% · −40,3%** | +50% · −7,8% | +33% | −5,8% | 3,5 | 1,46 → 1,49 | +25% | 0,08 |
> | 499 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+256% · −30,5%** | +48% · −5,7% | +31% | −4,6% | 4,0 | 1,88 → 1,79 | +25% | −0,01 |
> | 500 | 1ª vela 80 + Pullback + Rompe 200 + Bollinger + Tendência ⚠️ | **+251% · −35,5%** | +46% · −6,8% | +30% | −4,6% | 3,8 | 2,03 → 1,72 | +21% | 0,08 |
> | 501 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+183% · −30,1%** | +39% · −5,5% | +28% | −6,0% | 2,5 | 1,50 → 1,69 | +18% | 0,01 |
> | 502 | MACD + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+134% · −26,3%** | +32% · −4,6% | +25% | −4,6% | 2,6 | 1,57 → 1,63 | +22% | −0,03 |
> | 503 | IFR + Pôr do sol + Tendência + Onda | **+200% · −35,0%** | +51% · −8,5% | +35% | −8,1% | 2,7 | 1,18 → 1,67 | +29% | 0,15 |
> | 504 | GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+122% · −28,2%** | +37% · −6,7% | +25% | −7,1% | 1,8 | 1,36 → 1,31 | +24% | −0,02 |
> | 505 | IFR + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+253% · −32,0%** | +47% · −5,7% | +30% | −6,3% | 2,7 | 1,04 → 1,91 | +21% | 0,20 |
> | 506 | IFR + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+245% · −30,7%** | +47% · −5,3% | +33% | −7,0% | 2,9 | 1,09 → 1,81 | +26% | 0,11 |
> | 507 | GPS médias + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+252% · −37,2%** | +48% · −7,3% | +31% | −5,5% | 3,3 | 1,87 → 1,65 | +22% | 0,11 |
> | 508 | VWAP + GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+128% · −37,0%** | +33% · −7,3% | +24% | −6,7% | 1,6 | 1,64 → 1,03 | +17% | −0,04 |
> | 509 | Pullback + Bollinger + Tendência + Onda | **+210% · −32,8%** | +51% · −7,7% | +33% | −7,6% | 2,7 | 1,38 → 1,60 | +29% | 0,15 |
> | 510 | VWAP + GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+170% · −37,5%** | +40% · −7,6% | +27% | −7,9% | 1,8 | 1,44 → 1,31 | +20% | 0,02 |

> [!example]- Combinações 511 a 540 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 511 | ADX + GPS médias + IFR + Pullback + Bollinger | **+347% · −46,2%** | +61% · −9,5% | +34% | −4,4% | 4,9 | 1,76 → 1,81 | +25% | 0,19 |
> | 512 | Pôr do sol + Pullback + Rompe 200 + Tendência + Onda | **+161% · −31,9%** | +37% · −5,7% | +28% | −6,1% | 2,5 | 1,36 → 1,39 | +25% | 0,07 |
> | 513 | IFR + Pullback + Rompe 200 + Onda | **+147% · −23,8%** | +41% · −5,4% | +29% | −5,6% | 3,0 | 1,24 → 1,57 | +26% | 0,13 |
> | 514 | VWAP + GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+167% · −39,6%** | +40% · −8,2% | +27% | −8,8% | 1,6 | 1,46 → 1,20 | +18% | 0,11 |
> | 515 | IFR + Pôr do sol + Rompe 200 | **+89% · −14,4%** | +35% · −4,0% | +25% | −3,3% | 3,7 | 1,60 → 1,61 | +21% | 0,08 |
> | 516 | Donchian + Pullback + Bollinger + Tendência + Onda | **+329% · −41,0%** | +58% · −7,8% | +35% | −6,5% | 3,4 | 1,49 → 1,60 | +26% | 0,20 |
> | 517 | IFR + Rompe 200 + Bollinger + Tendência + Onda | **+286% · −43,3%** | +52% · −8,9% | +33% | −8,1% | 2,5 | 1,35 → 1,68 | +29% | 0,24 |
> | 518 | ADX + MACD + Pullback + Rompe 200 + Bollinger | **+221% · −41,2%** | +44% · −7,7% | +28% | −5,2% | 2,9 | 1,45 → 1,76 | +22% | 0,11 |
> | 519 | Pôr do sol + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+220% · −26,8%** | +42% · −4,3% | +28% | −3,2% | 4,7 | 1,83 → 1,92 | +24% | 0,05 |
> | 520 | VWAP + IFR + Quinta + Pullback + Tendência ⚠️ | **+206% · −36,8%** | +43% · −7,0% | +31% | −5,3% | 3,4 | 1,78 → 1,42 | +18% | 0,05 |
> | 521 | IFR + Bollinger + Tendência + Onda | **+269% · −40,1%** | +60% · −10,3% | +37% | −9,0% | 2,7 | 1,27 → 1,76 | +32% | 0,28 |
> | 522 | IFR + MACD + Quinta + Pullback + Onda ⚠️ | **+191% · −28,1%** | +41% · −4,8% | +30% | −5,1% | 3,3 | 1,16 → 1,71 | +24% | 0,02 |
> | 523 | MACD + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+166% · −27,0%** | +36% · −4,6% | +25% | −6,1% | 2,0 | 1,28 → 1,77 | +18% | 0,08 |
> | 524 | IFR + Quinta + Tendência + Onda ⚠️ | **+197% · −35,0%** | +50% · −8,5% | +35% | −8,1% | 2,7 | 1,23 → 1,65 | +30% | 0,08 |
> | 525 | IFR + MACD + Pullback + Bollinger + Onda | **+264% · −33,7%** | +48% · −6,2% | +32% | −5,9% | 3,2 | 1,20 → 1,82 | +25% | 0,15 |
> | 526 | Donchian + MACD + Quinta + Pullback + Tendência ⚠️ | **+254% · −45,4%** | +50% · −9,8% | +33% | −5,7% | 3,6 | 1,79 → 1,45 | +21% | 0,11 |
> | 527 | GPS médias + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+151% · −28,5%** | +37% · −5,1% | +26% | −5,1% | 2,5 | 1,29 → 1,35 | +20% | −0,06 |
> | 528 | IFR + Rompe 200 + Bollinger + Onda | **+183% · −29,4%** | +46% · −6,7% | +29% | −6,5% | 2,6 | 1,03 → 1,75 | +24% | 0,20 |
> | 529 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+312% · −37,0%** | +56% · −6,9% | +36% | −4,9% | 4,7 | 1,74 → 1,68 | +27% | 0,15 |
> | 530 | GPS médias + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+195% · −34,3%** | +44% · −6,8% | +29% | −7,0% | 2,3 | 1,22 → 1,45 | +27% | 0,09 |
> | 531 | Donchian + MACD + Pôr do sol + Pullback + Rompe 200 | **+179% · −31,9%** | +39% · −6,6% | +27% | −4,2% | 3,3 | 1,66 → 1,41 | +19% | 0,04 |
> | 532 | VWAP + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+133% · −30,6%** | +33% · −5,6% | +25% | −5,4% | 2,2 | 1,70 → 1,28 | +16% | 0,03 |
> | 533 | VWAP + Donchian + IFR + MACD + Pullback | **+244% · −41,9%** | +50% · −9,4% | +33% | −9,2% | 2,2 | 1,40 → 1,41 | +21% | 0,23 |
> | 534 | MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+121% · −17,1%** | +35% · −3,2% | +27% | −5,1% | 2,7 | 1,51 → 1,72 | +22% | −0,11 |
> | 535 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+223% · −32,2%** | +45% · −6,1% | +29% | −5,1% | 3,2 | 1,65 → 1,76 | +26% | 0,02 |
> | 536 | IFR + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+255% · −28,3%** | +47% · −4,9% | +30% | −5,3% | 3,2 | 0,98 → 2,06 | +20% | 0,11 |
> | 537 | IFR + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+266% · −40,7%** | +51% · −8,1% | +35% | −7,9% | 2,8 | 1,23 → 1,71 | +28% | 0,22 |
> | 538 | Donchian + IFR + Pôr do sol + Bollinger + Onda | **+303% · −32,7%** | +54% · −6,3% | +32% | −5,1% | 3,7 | 1,19 → 1,83 | +24% | 0,12 |
> | 539 | Donchian + MACD + Pullback + Bollinger + Onda | **+276% · −36,3%** | +51% · −7,1% | +32% | −6,9% | 2,7 | 1,20 → 1,63 | +26% | 0,18 |
> | 540 | GPS médias + IFR + Rompe 200 | **+146% · −28,1%** | +53% · −9,4% | +32% | −7,8% | 2,5 | 1,65 → 1,32 | +21% | 0,35 |

> [!example]- Combinações 541 a 570 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 541 | GPS médias + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+336% · −36,0%** | +56% · −7,2% | +33% | −5,6% | 3,6 | 1,95 → 1,86 | +25% | 0,10 |
> | 542 | Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+169% · −29,2%** | +43% · −6,8% | +31% | −3,7% | 5,0 | 1,91 → 1,70 | +23% | −0,04 |
> | 543 | VWAP + Donchian + Pullback + Rompe 200 + Bollinger | **+205% · −41,9%** | +43% · −8,7% | +26% | −7,9% | 1,7 | 1,64 → 1,21 | +15% | 0,17 |
> | 544 | VWAP + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+180% · −38,1%** | +39% · −7,7% | +28% | −6,9% | 2,2 | 1,52 → 1,54 | +20% | 0,10 |
> | 545 | VWAP + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+191% · −35,1%** | +40% · −6,5% | +28% | −4,5% | 3,3 | 1,80 → 1,32 | +17% | 0,09 |
> | 546 | ADX + MACD + Pullback + Bollinger | **+205% · −38,5%** | +51% · −9,2% | +31% | −5,8% | 3,1 | 1,37 → 1,84 | +20% | 0,13 |
> | 547 | 1ª vela 80 + Pullback + Bollinger ⚠️ | **+130% · −15,3%** | +45% · −4,1% | +28% | −3,6% | 4,3 | 1,78 → 2,00 | +24% | −0,03 |
> | 548 | IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+250% · −37,3%** | +59% · −9,3% | +39% | −8,8% | 3,0 | 1,15 → 1,76 | +30% | 0,23 |
> | 549 | MACD + Quinta + Pullback + Bollinger + Onda ⚠️ | **+176% · −25,3%** | +38% · −4,6% | +26% | −5,5% | 2,5 | 1,10 → 1,70 | +22% | 0,03 |
> | 550 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+103% · −28,0%** | +28% · −5,1% | +22% | −2,3% | 4,0 | 1,80 → 1,67 | +19% | −0,02 |
> | 551 | IFR + MACD + Bollinger + Tendência + Onda | **+319% · −46,5%** | +56% · −9,9% | +36% | −9,3% | 2,5 | 1,17 → 1,70 | +30% | 0,34 |
> | 552 | VWAP + IFR + 1ª vela 80 + Pullback ⚠️ | **+167% · −31,1%** | +44% · −7,4% | +31% | −7,9% | 2,3 | 1,46 → 1,62 | +20% | 0,04 |
> | 553 | GPS médias + IFR + Quinta + Tendência + Onda ⚠️ | **+270% · −41,9%** | +55% · −7,7% | +35% | −6,9% | 3,3 | 1,37 → 1,53 | +30% | 0,13 |
> | 554 | MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+200% · −32,8%** | +49% · −8,0% | +35% | −6,8% | 3,2 | 1,64 → 1,60 | +27% | 0,07 |
> | 555 | ADX + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+184% · −31,8%** | +39% · −5,9% | +25% | −3,8% | 3,1 | 1,74 → 1,98 | +17% | 0,05 |
> | 556 | 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+143% · −32,8%** | +40% · −8,1% | +29% | −5,1% | 3,1 | 1,67 → 1,54 | +22% | −0,00 |
> | 557 | Quinta + Pullback + Rompe 200 + Bollinger + Onda ⚠️ | **+142% · −22,7%** | +33% · −3,9% | +24% | −4,5% | 2,4 | 1,27 → 1,52 | +22% | 0,03 |
> | 558 | IFR + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+212% · −38,3%** | +44% · −7,4% | +31% | −7,2% | 2,6 | 1,61 → 1,52 | +23% | 0,17 |
> | 559 | MACD + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+141% · −30,4%** | +34% · −5,3% | +26% | −5,7% | 2,3 | 1,54 → 1,38 | +21% | 0,08 |
> | 560 | GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+237% · −31,5%** | +56% · −7,4% | +35% | −6,1% | 3,6 | 1,84 → 1,72 | +25% | 0,04 |
> | 561 | GPS médias + IFR + MACD + Quinta + Onda ⚠️ | **+222% · −38,9%** | +48% · −7,9% | +32% | −8,7% | 2,2 | 1,07 → 1,53 | +27% | 0,11 |
> | 562 | VWAP + GPS médias + IFR + MACD + Quinta ⚠️ | **+192% · −44,6%** | +44% · −9,6% | +30% | −11,2% | 1,5 | 1,25 → 1,31 | +23% | 0,15 |
> | 563 | VWAP + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+134% · −23,1%** | +33% · −3,9% | +25% | −4,0% | 3,0 | 1,69 → 1,47 | +16% | −0,03 |
> | 564 | IFR + MACD + Pôr do sol + Rompe 200 + Tendência | **+215% · −38,3%** | +44% · −7,5% | +31% | −7,3% | 2,5 | 1,55 → 1,54 | +24% | 0,19 |
> | 565 | Donchian + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+287% · −29,2%** | +51% · −5,4% | +32% | −3,0% | 6,4 | 1,95 → 1,95 | +23% | −0,04 |
> | 566 | MACD + Pôr do sol + Pullback + Bollinger + Onda | **+178% · −25,7%** | +38% · −4,6% | +26% | −5,7% | 2,4 | 1,03 → 1,73 | +22% | 0,05 |
> | 567 | GPS médias + IFR + Quinta + Bollinger + Onda ⚠️ | **+265% · −37,3%** | +51% · −7,6% | +31% | −6,8% | 2,7 | 1,26 → 1,66 | +26% | 0,09 |
> | 568 | BB explosão + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+199% · −46,4%** | +44% · −8,9% | +30% | −5,0% | 3,5 | 1,66 → 1,55 | +19% | 0,10 |
> | 569 | MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+129% · −27,8%** | +37% · −6,5% | +28% | −6,0% | 2,6 | 1,46 → 1,45 | +24% | 0,10 |
> | 570 | VWAP + IFR + Quinta + Pullback ⚠️ | **+121% · −23,5%** | +36% · −5,2% | +27% | −5,4% | 2,6 | 1,64 → 1,38 | +17% | −0,04 |

> [!example]- Combinações 571 a 600 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 571 | GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+96% · −25,3%** | +32% · −5,7% | +22% | −4,2% | 2,2 | 1,74 → 1,03 | +18% | −0,00 |
> | 572 | VWAP + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+212% · −34,2%** | +43% · −6,5% | +31% | −9,6% | 1,9 | 1,31 → 1,59 | +21% | 0,13 |
> | 573 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+136% · −25,4%** | +33% · −4,3% | +25% | −4,8% | 2,5 | 1,48 → 1,65 | +23% | 0,00 |
> | 574 | Donchian + GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+207% · −42,1%** | +45% · −8,9% | +28% | −4,4% | 3,4 | 1,98 → 1,21 | +16% | 0,06 |
> | 575 | Donchian + Pullback + Bollinger + Tendência | **+282% · −40,2%** | +62% · −10,1% | +36% | −5,4% | 4,3 | 2,05 → 1,57 | +18% | 0,17 |
> | 576 | Donchian + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+286% · −36,7%** | +51% · −7,1% | +32% | −4,1% | 4,8 | 1,88 → 1,80 | +21% | 0,11 |
> | 577 | Donchian + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+372% · −40,2%** | +59% · −7,9% | +35% | −4,5% | 5,0 | 1,97 → 1,76 | +22% | 0,12 |
> | 578 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+166% · −24,6%** | +36% · −4,0% | +25% | −5,2% | 2,3 | 1,22 → 1,95 | +17% | 0,07 |
> | 579 | Pullback + Rompe 200 + Tendência + Onda | **+147% · −31,8%** | +42% · −7,5% | +31% | −7,9% | 2,3 | 1,32 → 1,33 | +25% | 0,16 |
> | 580 | Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+144% · −23,4%** | +39% · −5,0% | +29% | −3,6% | 4,4 | 1,66 → 1,73 | +24% | −0,00 |
> | 581 | GPS médias + IFR + Bollinger + Tendência + Onda | **+351% · −44,6%** | +62% · −9,1% | +37% | −7,7% | 3,2 | 1,39 → 1,61 | +32% | 0,31 |
> | 582 | Pôr do sol + Quinta + Rompe 200 ⚠️ | **+34% · −11,2%** | +20% · −2,9% | +17% | −2,7% | 1,5 | 1,43 → 0,79 | +16% | 0,06 |
> | 583 | GPS médias + IFR + Pôr do sol + Rompe 200 + Onda | **+197% · −34,3%** | +44% · −6,8% | +29% | −7,0% | 2,3 | 1,16 → 1,47 | +27% | 0,12 |
> | 584 | IFR + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+296% · −44,0%** | +55% · −9,1% | +38% | −9,2% | 2,7 | 1,09 → 1,71 | +28% | 0,30 |
> | 585 | IFR + MACD + Quinta + Tendência + Onda ⚠️ | **+240% · −42,0%** | +48% · −8,5% | +34% | −8,6% | 2,5 | 1,14 → 1,62 | +29% | 0,16 |
> | 586 | GPS médias + MACD + Pôr do sol + Rompe 200 + Tendência | **+202% · −41,5%** | +45% · −7,5% | +30% | −6,4% | 2,7 | 1,56 → 1,29 | +23% | 0,14 |
> | 587 | MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+151% · −24,9%** | +40% · −5,5% | +27% | −7,0% | 2,0 | 1,16 → 1,85 | +17% | 0,08 |
> | 588 | Donchian + IFR + Pullback + Onda | **+237% · −33,2%** | +57% · −8,2% | +36% | −5,7% | 4,0 | 1,32 → 1,66 | +27% | 0,16 |
> | 589 | GPS médias + IFR + Pullback + Onda | **+209% · −31,9%** | +54% · −7,7% | +34% | −7,0% | 3,1 | 1,33 → 1,52 | +29% | 0,13 |
> | 590 | Donchian + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+265% · −36,1%** | +49% · −6,9% | +30% | −5,1% | 3,4 | 1,93 → 1,49 | +18% | 0,13 |
> | 591 | VWAP + Donchian + IFR + Pullback + Onda | **+238% · −42,3%** | +51% · −8,8% | +33% | −8,7% | 2,3 | 1,17 → 1,44 | +22% | 0,20 |
> | 592 | GPS médias + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+308% · −39,0%** | +56% · −7,5% | +36% | −4,9% | 4,7 | 1,78 → 1,66 | +26% | 0,10 |
> | 593 | ADX + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+241% · −35,0%** | +46% · −6,1% | +28% | −3,7% | 4,1 | 1,43 → 2,16 | +18% | 0,11 |
> | 594 | GPS médias + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+253% · −44,7%** | +49% · −9,4% | +32% | −3,6% | 5,5 | 1,97 → 1,54 | +22% | −0,04 |
> | 595 | GPS médias + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+149% · −34,2%** | +37% · −6,6% | +26% | −6,5% | 2,0 | 1,33 → 1,22 | +24% | 0,03 |
> | 596 | 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+202% · −27,0%** | +48% · −5,9% | +31% | −4,5% | 4,0 | 1,78 → 1,84 | +25% | 0,04 |
> | 597 | GPS médias + IFR + Pôr do sol + Tendência + Onda | **+272% · −40,1%** | +55% · −7,7% | +35% | −6,9% | 3,3 | 1,33 → 1,55 | +29% | 0,17 |
> | 598 | Donchian + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+154% · −26,7%** | +36% · −5,1% | +25% | −4,7% | 2,5 | 1,40 → 1,41 | +20% | 0,05 |
> | 599 | ADX + Quinta + Bollinger + Tendência ⚠️ | **+227% · −43,2%** | +55% · −9,9% | +33% | −6,8% | 2,9 | 1,57 → 1,79 | +25% | 0,18 |
> | 600 | MACD + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+168% · −27,4%** | +36% · −4,7% | +25% | −6,3% | 1,9 | 1,19 → 1,81 | +18% | 0,12 |

> [!example]- Combinações 601 a 630 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 601 | VWAP + IFR + Quinta + Bollinger + Tendência ⚠️ | **+246% · −38,0%** | +47% · −7,3% | +31% | −6,0% | 3,0 | 1,61 → 1,53 | +21% | 0,16 |
> | 602 | GPS médias + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+306% · −43,9%** | +57% · −8,9% | +36% | −6,2% | 3,7 | 1,74 → 1,58 | +25% | 0,26 |
> | 603 | VWAP + GPS médias + IFR + Pullback + Rompe 200 | **+192% · −42,5%** | +43% · −8,7% | +29% | −8,3% | 1,9 | 1,65 → 1,21 | +17% | 0,16 |
> | 604 | BB explosão + IFR + Pôr do sol + Pullback + Bollinger | **+215% · −33,1%** | +43% · −6,5% | +28% | −3,2% | 4,6 | 1,85 → 1,79 | +18% | 0,02 |
> | 605 | IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+128% · −15,0%** | +45% · −4,6% | +31% | −3,8% | 4,7 | 1,34 → 2,08 | +23% | 0,05 |
> | 606 | Donchian + MACD + Pôr do sol + Rompe 200 + Bollinger | **+216% · −28,5%** | +43% · −5,1% | +27% | −5,7% | 2,4 | 1,43 → 1,56 | +22% | 0,11 |
> | 607 | GPS médias + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+251% · −39,7%** | +49% · −8,2% | +32% | −8,5% | 2,3 | 1,42 → 1,65 | +28% | 0,10 |
> | 608 | VWAP + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+232% · −38,6%** | +47% · −7,4% | +33% | −6,1% | 3,2 | 1,47 → 1,59 | +23% | 0,07 |
> | 609 | Donchian + Pôr do sol + Rompe 200 + Bollinger | **+169% · −21,6%** | +44% · −5,1% | +25% | −3,2% | 3,9 | 1,76 → 1,57 | +18% | 0,03 |
> | 610 | Rompe 200 + Bollinger + Tendência | **+140% · −28,1%** | +48% · −9,0% | +30% | −7,7% | 2,3 | 1,85 → 1,39 | +19% | 0,19 |
> | 611 | ADX + IFR + MACD + Quinta + Bollinger ⚠️ | **+274% · −41,8%** | +51% · −8,0% | +31% | −5,1% | 3,6 | 1,23 → 1,95 | +21% | 0,19 |
> | 612 | ADX + IFR + Pôr do sol + Bollinger + Tendência | **+342% · −45,4%** | +58% · −9,4% | +35% | −6,2% | 3,5 | 1,63 → 1,95 | +25% | 0,20 |
> | 613 | Donchian + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+276% · −39,3%** | +52% · −7,7% | +33% | −5,9% | 3,5 | 1,86 → 1,53 | +19% | 0,19 |
> | 614 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+290% · −29,2%** | +51% · −5,4% | +32% | −3,0% | 6,4 | 1,88 → 1,97 | +24% | −0,00 |
> | 615 | IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+196% · −22,8%** | +48% · −5,1% | +34% | −5,6% | 3,7 | 1,14 → 1,87 | +26% | 0,04 |
> | 616 | Donchian + Pullback + Rompe 200 + Tendência | **+207% · −46,9%** | +52% · −11,1% | +33% | −6,0% | 3,4 | 1,97 → 1,30 | +15% | 0,20 |
> | 617 | Donchian + GPS médias + MACD + Pullback + Rompe 200 | **+235% · −43,9%** | +50% · −8,5% | +31% | −7,6% | 2,4 | 1,67 → 1,27 | +20% | 0,17 |
> | 618 | GPS médias + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+220% · −34,4%** | +45% · −6,7% | +29% | −6,0% | 2,7 | 1,66 → 1,63 | +24% | 0,09 |
> | 619 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+188% · −29,0%** | +40% · −5,0% | +29% | −5,0% | 3,3 | 1,44 → 1,67 | +24% | 0,07 |
> | 620 | ADX + IFR + Pullback + Bollinger + Tendência | **+381% · −45,8%** | +61% · −9,5% | +37% | −6,3% | 3,8 | 1,89 → 1,92 | +25% | 0,19 |
> | 621 | VWAP + Donchian + IFR + Pullback + Rompe 200 | **+216% · −41,8%** | +46% · −8,6% | +30% | −6,8% | 2,5 | 1,62 → 1,31 | +16% | 0,18 |
> | 622 | VWAP + GPS médias + Quinta + Pullback + Tendência ⚠️ | **+191% · −49,4%** | +44% · −11,0% | +30% | −6,2% | 2,8 | 1,73 → 1,14 | +17% | 0,05 |
> | 623 | ADX + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+243% · −43,1%** | +48% · −8,3% | +29% | −5,8% | 2,9 | 1,64 → 1,71 | +22% | 0,14 |
> | 624 | VWAP + MACD + Pullback + Rompe 200 + Bollinger | **+147% · −32,9%** | +35% · −6,2% | +24% | −9,5% | 1,2 | 1,36 → 1,22 | +18% | 0,17 |
> | 625 | Quinta ⚠️ | **+18% · −2,6%** | +18% · −2,6% | +17% | −3,7% | 1,1 | 1,22 → 0,66 | +15% | — |
> | 626 | Donchian + IFR + Pullback | **+195% · −26,3%** | +62% · −9,0% | +37% | −4,5% | 5,4 | 1,95 → 1,69 | +20% | 0,10 |
> | 627 | VWAP + MACD + Pullback + Bollinger | **+135% · −30,9%** | +38% · −7,3% | +26% | −11,0% | 1,2 | 1,28 → 1,28 | +18% | 0,21 |
> | 628 | GPS médias + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+200% · −42,7%** | +44% · −7,9% | +30% | −6,4% | 2,7 | 1,62 → 1,27 | +22% | 0,13 |
> | 629 | MACD + Pôr do sol + Bollinger + Tendência | **+186% · −32,2%** | +46% · −7,6% | +31% | −6,9% | 2,6 | 1,49 → 1,59 | +26% | 0,20 |
> | 630 | Donchian + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+281% · −34,2%** | +52% · −7,0% | +33% | −4,7% | 4,4 | 1,84 → 1,66 | +22% | 0,13 |

> [!example]- Combinações 631 a 660 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 631 | GPS médias + IFR + MACD + Rompe 200 + Tendência | **+273% · −47,6%** | +55% · −9,3% | +35% | −8,1% | 2,8 | 1,60 → 1,42 | +24% | 0,34 |
> | 632 | Donchian + GPS médias + Pôr do sol + Pullback + Rompe 200 | **+210% · −41,5%** | +45% · −8,6% | +28% | −4,4% | 3,4 | 1,91 → 1,24 | +17% | 0,04 |
> | 633 | VWAP + IFR + Pôr do sol + Rompe 200 + Bollinger | **+167% · −29,2%** | +37% · −5,3% | +25% | −6,4% | 1,9 | 1,40 → 1,48 | +19% | 0,12 |
> | 634 | IFR + Pôr do sol + Bollinger + Onda | **+184% · −25,5%** | +46% · −5,5% | +29% | −4,9% | 3,4 | 0,95 → 1,94 | +23% | 0,07 |
> | 635 | VWAP + GPS médias + IFR + Pôr do sol + Rompe 200 | **+170% · −39,5%** | +41% · −8,2% | +27% | −8,8% | 1,6 | 1,41 → 1,22 | +19% | 0,12 |
> | 636 | Donchian + IFR + Pôr do sol + Quinta ⚠️ | **+183% · −25,7%** | +47% · −6,6% | +29% | −3,7% | 4,5 | 1,73 → 1,77 | +21% | 0,04 |
> | 637 | GPS médias + IFR + MACD + Tendência | **+259% · −45,6%** | +64% · −11,4% | +40% | −8,9% | 3,1 | 1,55 → 1,46 | +28% | 0,43 |
> | 638 | 1ª vela 80 + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+219% · −30,9%** | +42% · −5,4% | +28% | −4,5% | 3,4 | 1,83 → 1,74 | +22% | 0,07 |
> | 639 | ADX + MACD + Quinta + Bollinger + Tendência ⚠️ | **+278% · −47,7%** | +52% · −9,3% | +32% | −7,0% | 2,8 | 1,40 → 1,75 | +25% | 0,21 |
> | 640 | VWAP + IFR + MACD + Quinta + Pullback ⚠️ | **+161% · −28,8%** | +37% · −5,7% | +28% | −7,4% | 2,0 | 1,41 → 1,42 | +19% | 0,04 |
> | 641 | Donchian + MACD + Pullback + Rompe 200 | **+164% · −32,4%** | +44% · −8,5% | +29% | −5,6% | 2,9 | 1,62 → 1,33 | +19% | 0,13 |
> | 642 | 1ª vela 80 + Quinta + Pullback + Tendência + Onda ⚠️ | **+209% · −32,8%** | +43% · −6,0% | +31% | −5,6% | 3,3 | 1,33 → 1,66 | +27% | −0,03 |
> | 643 | BB explosão + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+250% · −46,6%** | +50% · −8,7% | +34% | −5,6% | 3,7 | 1,58 → 1,67 | +22% | 0,09 |
> | 644 | BB explosão + IFR + Quinta + Pullback ⚠️ | **+139% · −37,7%** | +40% · −9,1% | +28% | −3,6% | 4,2 | 1,80 → 1,55 | +15% | −0,01 |
> | 645 | GPS médias + IFR + Rompe 200 + Tendência | **+233% · −43,8%** | +58% · −10,9% | +36% | −7,4% | 3,2 | 1,81 → 1,39 | +21% | 0,34 |
> | 646 | Pullback + Tendência + Onda | **+136% · −27,1%** | +49% · −8,8% | +35% | −9,6% | 2,4 | 1,24 → 1,40 | +26% | 0,16 |
> | 647 | ADX + MACD + Pôr do sol + Bollinger + Tendência | **+281% · −46,7%** | +52% · −9,2% | +32% | −7,1% | 2,8 | 1,34 → 1,77 | +24% | 0,21 |
> | 648 | ADX + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+246% · −42,1%** | +48% · −8,2% | +29% | −5,8% | 2,8 | 1,57 → 1,73 | +23% | 0,12 |
> | 649 | GPS médias + Pôr do sol + Pullback + Rompe 200 + Onda | **+151% · −33,5%** | +37% · −6,4% | +26% | −6,5% | 2,0 | 1,27 → 1,24 | +23% | 0,03 |
> | 650 | VWAP + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+183% · −35,8%** | +40% · −7,0% | +29% | −9,9% | 1,7 | 1,06 → 1,58 | +20% | 0,11 |
> | 651 | GPS médias + MACD + Quinta + Pullback + Onda ⚠️ | **+178% · −34,6%** | +41% · −6,6% | +29% | −7,5% | 2,1 | 1,18 → 1,39 | +25% | −0,00 |
> | 652 | ADX + IFR + MACD + Pôr do sol + Bollinger | **+278% · −41,0%** | +51% · −7,8% | +31% | −5,1% | 3,6 | 1,16 → 1,99 | +20% | 0,18 |
> | 653 | IFR + MACD + Quinta + Bollinger + Onda ⚠️ | **+230% · −33,5%** | +45% · −6,1% | +30% | −6,3% | 2,7 | 0,96 → 1,81 | +23% | 0,12 |
> | 654 | GPS médias + Quinta + Pullback + Tendência + Onda ⚠️ | **+221% · −42,4%** | +47% · −7,9% | +32% | −5,5% | 3,5 | 1,48 → 1,38 | +23% | 0,03 |
> | 655 | IFR + Rompe 200 + Tendência | **+156% · −30,9%** | +53% · −10,2% | +36% | −9,0% | 2,6 | 1,80 → 1,48 | +21% | 0,32 |
> | 656 | ADX + Donchian + IFR + Pôr do sol + Bollinger | **+352% · −39,1%** | +60% · −8,3% | +33% | −4,1% | 5,0 | 1,46 → 1,98 | +21% | 0,15 |
> | 657 | Donchian + GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+211% · −34,6%** | +45% · −6,6% | +28% | −3,3% | 4,5 | 1,98 → 1,36 | +18% | −0,04 |
> | 658 | VWAP + IFR + MACD + Rompe 200 + Bollinger | **+195% · −37,2%** | +41% · −7,4% | +28% | −9,7% | 1,5 | 1,17 → 1,43 | +22% | 0,28 |
> | 659 | Donchian + IFR + Quinta + Bollinger + Onda ⚠️ | **+300% · −32,7%** | +53% · −6,1% | +32% | −5,1% | 3,7 | 1,24 → 1,81 | +25% | 0,09 |
> | 660 | ADX + Donchian + IFR + Rompe 200 + Bollinger | **+346% · −41,4%** | +61% · −8,2% | +33% | −5,0% | 4,1 | 1,50 → 1,84 | +24% | 0,24 |

> [!example]- Combinações 661 a 690 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 661 | Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+145% · −32,1%** | +40% · −7,8% | +29% | −5,1% | 3,1 | 1,60 → 1,57 | +23% | 0,08 |
> | 662 | MACD + Pullback + Rompe 200 + Tendência + Onda | **+189% · −38,4%** | +42% · −7,4% | +31% | −8,3% | 2,2 | 1,24 → 1,41 | +28% | 0,17 |
> | 663 | IFR + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+252% · −29,0%** | +46% · −4,9% | +30% | −5,4% | 3,2 | 1,04 → 2,03 | +20% | 0,04 |
> | 664 | VWAP + IFR + Pullback + Tendência + Onda | **+229% · −40,7%** | +48% · −7,9% | +34% | −8,0% | 2,7 | 1,26 → 1,44 | +26% | 0,19 |
> | 665 | 1ª vela 80 + Quinta + Bollinger + Tendência + Onda ⚠️ | **+252% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 3,1 | 1,17 → 1,79 | +21% | 0,06 |
> | 666 | ADX + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+239% · −38,0%** | +47% · −6,8% | +28% | −4,1% | 3,8 | 1,47 → 1,97 | +21% | 0,14 |
> | 667 | GPS médias + Pullback + Rompe 200 + Tendência | **+184% · −42,9%** | +49% · −11,1% | +32% | −5,5% | 3,5 | 2,01 → 1,18 | +17% | 0,15 |
> | 668 | GPS médias + Pôr do sol + Pullback + Tendência + Onda | **+223% · −40,6%** | +48% · −7,5% | +32% | −5,5% | 3,5 | 1,43 → 1,40 | +22% | 0,06 |
> | 669 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+235% · −36,7%** | +47% · −7,0% | +32% | −6,1% | 3,2 | 1,42 → 1,61 | +24% | 0,15 |
> | 670 | GPS médias + Pullback + Rompe 200 + Bollinger + Tendência | **+268% · −40,7%** | +50% · −8,1% | +31% | −4,8% | 3,7 | 2,11 → 1,37 | +18% | 0,16 |
> | 671 | GPS médias + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+251% · −49,2%** | +49% · −10,9% | +32% | −4,7% | 4,2 | 1,91 → 1,44 | +21% | 0,10 |
> | 672 | VWAP + Pôr do sol + Pullback + Bollinger + Tendência | **+193% · −33,0%** | +41% · −6,0% | +28% | −4,5% | 3,3 | 1,73 → 1,34 | +18% | 0,10 |
> | 673 | Donchian + GPS médias + Pôr do sol + Pullback + Tendência | **+287% · −49,1%** | +56% · −10,0% | +34% | −4,8% | 4,4 | 1,93 → 1,37 | +19% | 0,09 |
> | 674 | BB explosão + IFR + 1ª vela 80 + Pullback ⚠️ | **+187% · −34,4%** | +49% · −8,4% | +32% | −5,6% | 3,5 | 1,60 → 1,75 | +20% | 0,02 |
> | 675 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+256% · −42,9%** | +49% · −8,9% | +32% | −3,3% | 5,8 | 1,91 → 1,56 | +23% | 0,01 |
> | 676 | Donchian + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+225% · −30,5%** | +46% · −5,7% | +30% | −4,2% | 4,0 | 1,15 → 1,72 | +23% | 0,02 |
> | 677 | Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+119% · −14,7%** | +34% · −2,6% | +23% | −2,3% | 4,5 | 1,36 → 2,15 | +16% | 0,03 |
> | 678 | VWAP + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+309% · −40,3%** | +54% · −8,0% | +34% | −7,1% | 3,1 | 1,49 → 1,68 | +25% | 0,28 |
> | 679 | ADX + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+315% · −43,8%** | +57% · −8,7% | +36% | −6,0% | 3,9 | 1,51 → 1,94 | +27% | 0,10 |
> | 680 | Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+205% · −26,8%** | +49% · −5,9% | +31% | −4,5% | 4,0 | 1,70 → 1,87 | +25% | 0,12 |
> | 681 | IFR + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+211% · −38,5%** | +44% · −7,5% | +31% | −7,4% | 2,5 | 1,31 → 1,58 | +28% | 0,11 |
> | 682 | Donchian + GPS médias + IFR + MACD + Pullback | **+315% · −46,0%** | +60% · −8,9% | +36% | −7,8% | 3,0 | 1,68 → 1,50 | +24% | 0,23 |
> | 683 | Quinta + Rompe 200 + Bollinger + Tendência + Onda ⚠️ | **+198% · −35,9%** | +41% · −6,7% | +28% | −6,5% | 2,3 | 1,27 → 1,54 | +24% | 0,08 |
> | 684 | BB explosão + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+153% · −48,4%** | +37% · −9,5% | +27% | −3,4% | 4,1 | 1,87 → 1,33 | +15% | 0,01 |
> | 685 | GPS médias + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+254% · −39,7%** | +50% · −8,2% | +32% | −8,5% | 2,3 | 1,37 → 1,67 | +27% | 0,16 |
> | 686 | VWAP + GPS médias + IFR + Pôr do sol + Pullback | **+196% · −36,2%** | +43% · −7,1% | +29% | −7,4% | 2,1 | 1,64 → 1,32 | +19% | 0,03 |
> | 687 | ADX + GPS médias + IFR + Pullback + Tendência | **+349% · −57,3%** | +65% · −12,5% | +39% | −6,4% | 4,1 | 1,80 → 1,65 | +25% | 0,21 |
> | 688 | Donchian + GPS médias + IFR + Pullback + Onda | **+305% · −43,9%** | +60% · −9,2% | +36% | −6,8% | 3,4 | 1,42 → 1,52 | +28% | 0,20 |
> | 689 | 1ª vela 80 + Pullback + Bollinger + Tendência + Onda ⚠️ | **+285% · −35,2%** | +51% · −6,5% | +33% | −6,2% | 3,3 | 1,37 → 1,78 | +27% | 0,12 |
> | 690 | Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+92% · −18,6%** | +30% · −3,8% | +23% | −1,5% | 7,0 | 1,76 → 1,86 | +19% | −0,08 |

> [!example]- Combinações 691 a 720 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 691 | VWAP + GPS médias + IFR + Pullback + Tendência | **+265% · −52,2%** | +54% · −11,0% | +35% | −7,0% | 3,2 | 1,73 → 1,33 | +19% | 0,20 |
> | 692 | GPS médias + MACD + Pullback + Rompe 200 + Bollinger | **+216% · −34,4%** | +44% · −6,7% | +28% | −6,7% | 2,2 | 1,78 → 1,39 | +21% | 0,13 |
> | 693 | Donchian + IFR + 1ª vela 80 + Quinta + Tendência ⚠️ | **+343% · −36,6%** | +59% · −7,4% | +37% | −5,3% | 4,5 | 1,76 → 1,76 | +25% | 0,11 |
> | 694 | IFR + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+182% · −26,3%** | +39% · −4,2% | +28% | −5,6% | 2,8 | 0,99 → 1,80 | +21% | 0,04 |
> | 695 | Donchian + Pullback + Bollinger + Onda | **+226% · −29,3%** | +54% · −7,0% | +31% | −5,8% | 3,2 | 1,28 → 1,64 | +25% | 0,12 |
> | 696 | Donchian + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+173% · −34,0%** | +39% · −6,4% | +27% | −5,1% | 2,7 | 1,32 → 1,39 | +23% | 0,04 |
> | 697 | GPS médias + IFR + MACD | **+172% · −33,8%** | +60% · −11,7% | +37% | −11,6% | 2,1 | 1,34 → 1,43 | +30% | 0,40 |
> | 698 | MACD + Pullback + Tendência + Onda | **+176% · −34,9%** | +47% · −8,4% | +34% | −9,3% | 2,3 | 1,17 → 1,46 | +30% | 0,20 |
> | 699 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+254% · −31,0%** | +48% · −5,9% | +30% | −4,4% | 3,9 | 1,60 → 1,82 | +24% | 0,12 |
> | 700 | VWAP + Donchian + IFR + Pôr do sol + Rompe 200 | **+192% · −36,5%** | +43% · −7,6% | +28% | −7,2% | 2,1 | 1,37 → 1,33 | +18% | 0,14 |
> | 701 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+254% · −27,0%** | +48% · −4,8% | +30% | −3,7% | 4,7 | 1,65 → 1,96 | +23% | 0,02 |
> | 702 | Donchian + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+114% · −24,9%** | +35% · −5,5% | +23% | −2,9% | 3,5 | 1,74 → 1,33 | +17% | 0,01 |
> | 703 | GPS médias + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+284% · −44,9%** | +54% · −9,3% | +35% | −6,4% | 3,5 | 1,70 → 1,51 | +26% | 0,12 |
> | 704 | Pôr do sol + Rompe 200 + Tendência | **+92% · −22,9%** | +37% · −7,0% | +27% | −6,4% | 2,2 | 1,72 → 1,20 | +18% | 0,06 |
> | 705 | MACD + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+258% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,2 | 1,47 → 1,77 | +24% | 0,19 |
> | 706 | GPS médias + MACD + Pullback + Rompe 200 | **+143% · −31,4%** | +41% · −7,2% | +28% | −7,6% | 2,0 | 1,65 → 1,18 | +20% | 0,08 |
> | 707 | GPS médias + IFR + MACD + Rompe 200 + Bollinger | **+267% · −41,0%** | +51% · −8,6% | +31% | −8,3% | 2,2 | 1,54 → 1,53 | +25% | 0,29 |
> | 708 | VWAP + IFR + Pôr do sol + Pullback + Tendência | **+209% · −34,9%** | +44% · −7,0% | +31% | −5,4% | 3,4 | 1,72 → 1,43 | +19% | 0,07 |
> | 709 | Quinta + Bollinger + Tendência + Onda ⚠️ | **+183% · −32,3%** | +46% · −7,6% | +31% | −7,0% | 2,5 | 1,17 → 1,62 | +24% | 0,06 |
> | 710 | IFR + Quinta + Pullback + Onda ⚠️ | **+147% · −22,7%** | +40% · −4,9% | +29% | −4,7% | 3,5 | 1,25 → 1,73 | +23% | −0,05 |
> | 711 | VWAP + IFR + 1ª vela 80 + Quinta ⚠️ | **+142% · −27,7%** | +40% · −6,5% | +28% | −8,5% | 1,8 | 1,16 → 1,63 | +19% | −0,01 |
> | 712 | MACD + Quinta + Bollinger + Tendência + Onda ⚠️ | **+230% · −39,5%** | +45% · −7,8% | +31% | −7,8% | 2,3 | 1,09 → 1,61 | +24% | 0,15 |
> | 713 | Donchian + IFR + Pôr do sol + Bollinger + Tendência | **+367% · −39,4%** | +60% · −7,9% | +35% | −5,5% | 4,1 | 1,85 → 1,75 | +23% | 0,20 |
> | 714 | IFR + Pôr do sol + Rompe 200 + Tendência + Onda | **+213% · −38,5%** | +44% · −7,5% | +31% | −7,4% | 2,5 | 1,26 → 1,59 | +29% | 0,15 |
> | 715 | VWAP + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+134% · −35,4%** | +34% · −6,7% | +26% | −3,7% | 3,5 | 1,71 → 1,19 | +16% | 0,02 |
> | 716 | Pôr do sol + Bollinger + Tendência | **+141% · −24,1%** | +48% · −7,4% | +30% | −5,6% | 3,1 | 1,85 → 1,64 | +22% | 0,10 |
> | 717 | Donchian + IFR + Rompe 200 + Bollinger + Tendência | **+361% · −42,6%** | +60% · −8,7% | +35% | −6,7% | 3,3 | 1,87 → 1,63 | +21% | 0,31 |
> | 718 | MACD + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+186% · −32,8%** | +40% · −5,9% | +29% | −6,3% | 2,6 | 1,47 → 1,54 | +25% | 0,07 |
> | 719 | VWAP + Donchian + IFR + Pullback + Tendência | **+291% · −49,4%** | +57% · −10,5% | +36% | −6,6% | 3,6 | 1,68 → 1,40 | +18% | 0,24 |
> | 720 | 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+119% · −18,1%** | +35% · −3,7% | +23% | −3,5% | 2,9 | 1,41 → 1,84 | +17% | 0,03 |

> [!example]- Combinações 721 a 750 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 721 | ADX + IFR + Quinta + Bollinger ⚠️ | **+222% · −35,2%** | +53% · −8,0% | +31% | −4,7% | 3,9 | 1,37 → 2,07 | +20% | 0,17 |
> | 722 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+253% · −45,0%** | +51% · −8,0% | +34% | −5,6% | 3,7 | 1,53 → 1,69 | +23% | 0,14 |
> | 723 | Donchian + MACD + Pullback + Tendência + Onda | **+274% · −46,5%** | +55% · −10,0% | +36% | −8,3% | 2,8 | 1,30 → 1,48 | +29% | 0,26 |
> | 724 | VWAP + GPS médias + IFR + Quinta ⚠️ | **+155% · −37,5%** | +45% · −9,8% | +29% | −10,2% | 1,6 | 1,39 → 1,24 | +20% | 0,06 |
> | 725 | VWAP + IFR + Pôr do sol + Pullback + Rompe 200 | **+135% · −29,9%** | +33% · −5,4% | +25% | −5,3% | 2,3 | 1,62 → 1,30 | +17% | 0,04 |
> | 726 | Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+222% · −30,7%** | +43% · −5,4% | +28% | −4,5% | 3,4 | 1,76 → 1,77 | +23% | 0,11 |
> | 727 | Donchian + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+215% · −26,6%** | +43% · −5,4% | +27% | −4,8% | 2,9 | 1,47 → 1,69 | +21% | 0,07 |
> | 728 | VWAP + Donchian + MACD + Pullback + Rompe 200 | **+171% · −43,4%** | +41% · −9,0% | +28% | −9,9% | 1,5 | 1,35 → 1,14 | +17% | 0,20 |
> | 729 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+171% · −31,7%** | +38% · −6,0% | +26% | −3,5% | 3,7 | 1,88 → 1,59 | +22% | −0,08 |
> | 730 | VWAP + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+182% · −32,8%** | +40% · −5,9% | +29% | −5,3% | 3,1 | 1,53 → 1,44 | +20% | 0,07 |
> | 731 | GPS médias + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+169% · −39,5%** | +38% · −8,2% | +26% | −4,6% | 2,9 | 1,86 → 1,42 | +20% | −0,01 |
> | 732 | VWAP + IFR + Pullback + Rompe 200 | **+122% · −29,8%** | +37% · −7,1% | +27% | −7,0% | 2,0 | 1,57 → 1,21 | +16% | 0,11 |
> | 733 | VWAP + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+250% · −40,9%** | +47% · −8,5% | +31% | −11,0% | 1,7 | 1,11 → 1,67 | +22% | 0,32 |
> | 734 | GPS médias + IFR + MACD + Pôr do sol + Onda | **+224% · −38,9%** | +48% · −7,9% | +32% | −8,7% | 2,2 | 1,02 → 1,55 | +27% | 0,15 |
> | 735 | Donchian + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+198% · −37,0%** | +42% · −7,1% | +28% | −4,3% | 3,5 | 1,85 → 1,38 | +18% | 0,08 |
> | 736 | VWAP + IFR + Pôr do sol + Bollinger + Tendência | **+249% · −38,1%** | +48% · −7,4% | +31% | −6,1% | 3,0 | 1,55 → 1,55 | +22% | 0,19 |
> | 737 | IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+171% · −26,1%** | +44% · −5,9% | +31% | −7,9% | 2,3 | 1,21 → 1,72 | +25% | 0,22 |
> | 738 | GPS médias + MACD + Pôr do sol + Pullback + Onda | **+180% · −34,8%** | +41% · −6,7% | +29% | −7,5% | 2,1 | 1,13 → 1,41 | +24% | 0,02 |
> | 739 | BB explosão + IFR + MACD + Pullback + Rompe 200 | **+179% · −44,6%** | +41% · −8,9% | +29% | −6,5% | 2,5 | 1,49 → 1,44 | +18% | 0,15 |
> | 740 | Donchian + MACD + Pullback + Rompe 200 + Onda | **+202% · −38,4%** | +44% · −7,8% | +30% | −7,5% | 2,2 | 1,15 → 1,42 | +26% | 0,17 |
> | 741 | Donchian + GPS médias + Pullback + Rompe 200 + Tendência | **+280% · −53,1%** | +56% · −11,5% | +34% | −5,4% | 3,9 | 1,94 → 1,27 | +17% | 0,22 |
> | 742 | Donchian + GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+280% · −34,2%** | +52% · −6,3% | +30% | −4,3% | 3,9 | 2,06 → 1,48 | +18% | 0,04 |
> | 743 | Pôr do sol + Rompe 200 + Bollinger + Tendência + Onda | **+200% · −36,0%** | +41% · −6,7% | +28% | −6,5% | 2,3 | 1,21 → 1,56 | +24% | 0,11 |
> | 744 | Donchian + GPS médias + MACD + Pôr do sol + Pullback | **+240% · −39,2%** | +50% · −7,8% | +31% | −6,7% | 2,7 | 1,65 → 1,38 | +22% | 0,05 |
> | 745 | 1ª vela 80 + Quinta + Tendência ⚠️ | **+130% · −25,2%** | +46% · −7,8% | +33% | −5,4% | 3,7 | 1,60 → 1,64 | +25% | −0,12 |
> | 746 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+157% · −32,5%** | +36% · −6,1% | +26% | −7,4% | 1,8 | 1,20 → 1,57 | +20% | 0,12 |
> | 747 | Donchian + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+251% · −31,7%** | +48% · −5,9% | +30% | −4,4% | 3,9 | 1,67 → 1,80 | +23% | 0,08 |
> | 748 | IFR + Tendência | **+144% · −27,0%** | +71% · −13,5% | +46% | −11,3% | 3,0 | 1,74 → 1,58 | +26% | 0,46 |
> | 749 | ADX + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+186% · −34,1%** | +40% · −5,9% | +25% | −3,7% | 3,2 | 1,65 → 1,80 | +19% | 0,03 |
> | 750 | ADX + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+298% · −39,6%** | +53% · −7,2% | +32% | −3,8% | 4,9 | 1,32 → 2,19 | +22% | 0,12 |

> [!example]- Combinações 751 a 780 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 751 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+176% · −33,6%** | +40% · −6,3% | +27% | −5,6% | 2,6 | 1,34 → 1,70 | +20% | 0,09 |
> | 752 | Donchian + Pullback + Rompe 200 + Tendência + Onda | **+245% · −44,4%** | +50% · −9,1% | +33% | −7,0% | 2,9 | 1,44 → 1,39 | +24% | 0,21 |
> | 753 | IFR + MACD + Quinta + Rompe 200 ⚠️ | **+124% · −23,3%** | +36% · −4,9% | +27% | −5,4% | 2,6 | 1,34 → 1,55 | +23% | 0,10 |
> | 754 | Donchian + Pôr do sol + Rompe 200 + Bollinger + Onda | **+214% · −29,3%** | +44% · −5,5% | +27% | −5,9% | 2,3 | 1,09 → 1,58 | +24% | 0,07 |
> | 755 | Donchian + MACD + Quinta + Pullback + Onda ⚠️ | **+203% · −35,9%** | +44% · −7,0% | +30% | −6,1% | 2,7 | 1,16 → 1,52 | +24% | 0,04 |
> | 756 | MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+123% · −25,4%** | +36% · −5,8% | +27% | −6,5% | 2,2 | 1,43 → 1,56 | +24% | 0,02 |
> | 757 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+346% · −36,6%** | +59% · −7,4% | +37% | −5,3% | 4,5 | 1,71 → 1,78 | +26% | 0,18 |
> | 758 | IFR + MACD + Tendência | **+184% · −34,8%** | +61% · −11,8% | +41% | −11,1% | 2,6 | 1,44 → 1,54 | +30% | 0,48 |
> | 759 | ADX + IFR + MACD + Pullback + Bollinger | **+314% · −41,1%** | +55% · −7,7% | +33% | −5,2% | 3,9 | 1,52 → 1,97 | +22% | 0,16 |
> | 760 | ADX + IFR + Bollinger + Tendência + Onda | **+364% · −51,6%** | +63% · −11,3% | +38% | −8,8% | 2,9 | 1,19 → 1,85 | +28% | 0,29 |
> | 761 | IFR + MACD + Pôr do sol + Quinta ⚠️ | **+125% · −21,0%** | +36% · −5,0% | +27% | −4,3% | 3,3 | 1,28 → 1,75 | +20% | 0,06 |
> | 762 | ADX + IFR + MACD + Rompe 200 + Bollinger | **+275% · −43,8%** | +52% · −8,6% | +31% | −6,3% | 2,9 | 1,21 → 1,85 | +23% | 0,25 |
> | 763 | VWAP + GPS médias + IFR + MACD + Pôr do sol | **+194% · −44,5%** | +45% · −9,6% | +30% | −11,2% | 1,5 | 1,20 → 1,33 | +24% | 0,18 |
> | 764 | Donchian + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+269% · −34,9%** | +49% · −6,7% | +30% | −3,8% | 4,5 | 1,92 → 1,65 | +20% | 0,09 |
> | 765 | GPS médias + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+397% · −40,2%** | +64% · −7,9% | +38% | −5,7% | 4,3 | 1,79 → 1,74 | +27% | 0,28 |
> | 766 | Donchian + GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+352% · −42,0%** | +62% · −8,4% | +36% | −6,5% | 3,7 | 1,82 → 1,67 | +24% | 0,13 |
> | 767 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+225% · −38,3%** | +46% · −7,5% | +30% | −3,5% | 5,0 | 1,74 → 1,55 | +24% | 0,01 |
> | 768 | MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+172% · −29,5%** | +45% · −7,0% | +32% | −6,7% | 2,9 | 1,40 → 1,60 | +26% | 0,06 |
> | 769 | VWAP + IFR + MACD + Bollinger + Tendência | **+275% · −44,7%** | +52% · −9,3% | +34% | −8,6% | 2,5 | 1,35 → 1,49 | +25% | 0,39 |
> | 770 | ADX + Pullback + Rompe 200 + Bollinger + Tendência | **+276% · −44,6%** | +51% · −8,4% | +31% | −5,9% | 3,1 | 1,86 → 1,69 | +21% | 0,14 |
> | 771 | Donchian + IFR + Pôr do sol + Bollinger | **+252% · −29,3%** | +56% · −7,7% | +32% | −4,5% | 4,2 | 1,75 → 1,91 | +23% | 0,10 |
> | 772 | VWAP + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+231% · −43,6%** | +47% · −9,0% | +33% | −7,1% | 2,8 | 1,44 → 1,50 | +22% | 0,22 |
> | 773 | BB explosão + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+199% · −48,5%** | +43% · −10,2% | +30% | −4,1% | 4,3 | 1,76 → 1,52 | +18% | −0,03 |
> | 774 | Donchian + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+366% · −35,7%** | +60% · −7,0% | +35% | −6,9% | 3,3 | 1,16 → 1,90 | +28% | 0,23 |
> | 775 | GPS médias + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+202% · −33,3%** | +43% · −6,3% | +29% | −6,9% | 2,3 | 1,64 → 1,54 | +25% | −0,04 |
> | 776 | IFR + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+138% · −23,3%** | +33% · −4,0% | +25% | −4,0% | 3,0 | 1,39 → 1,64 | +22% | 0,07 |
> | 777 | VWAP + IFR + MACD + Pôr do sol + Pullback | **+163% · −28,8%** | +37% · −5,7% | +28% | −7,4% | 2,0 | 1,34 → 1,44 | +18% | 0,06 |
> | 778 | IFR + MACD + Rompe 200 + Tendência | **+198% · −38,3%** | +50% · −9,7% | +35% | −9,5% | 2,3 | 1,51 → 1,48 | +25% | 0,33 |
> | 779 | Donchian + IFR + Pôr do sol + Rompe 200 | **+184% · −25,8%** | +47% · −6,1% | +29% | −4,5% | 3,7 | 1,67 → 1,59 | +20% | 0,13 |
> | 780 | ADX + GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+254% · −41,7%** | +50% · −8,2% | +29% | −4,0% | 4,1 | 1,78 → 1,65 | +22% | 0,10 |

> [!example]- Combinações 781 a 810 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 781 | GPS médias + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+237% · −35,8%** | +47% · −6,7% | +29% | −4,7% | 3,5 | 1,97 → 1,37 | +19% | 0,13 |
> | 782 | BB explosão + IFR + Quinta + Pullback + Onda ⚠️ | **+175% · −39,0%** | +41% · −7,1% | +29% | −5,5% | 2,9 | 1,20 → 1,56 | +24% | 0,01 |
> | 783 | Donchian + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+214% · −26,5%** | +43% · −4,9% | +27% | −4,5% | 3,1 | 1,09 → 1,72 | +22% | −0,01 |
> | 784 | VWAP + GPS médias + IFR + Pullback | **+180% · −38,9%** | +49% · −9,4% | +32% | −9,6% | 2,0 | 1,61 → 1,26 | +19% | 0,13 |
> | 785 | MACD + Rompe 200 + Bollinger + Tendência | **+184% · −35,8%** | +47% · −8,9% | +31% | −8,4% | 2,1 | 1,53 → 1,44 | +23% | 0,26 |
> | 786 | Pôr do sol + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+211% · −32,1%** | +43% · −5,9% | +31% | −5,6% | 3,3 | 1,28 → 1,68 | +26% | 0,04 |
> | 787 | Pôr do sol + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+139% · −30,6%** | +34% · −5,3% | +26% | −5,8% | 2,3 | 1,16 → 1,41 | +24% | 0,04 |
> | 788 | IFR + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+187% · −26,1%** | +39% · −4,4% | +28% | −6,0% | 2,6 | 1,26 → 1,79 | +24% | 0,13 |
> | 789 | Donchian + Quinta + Rompe 200 + Bollinger ⚠️ | **+167% · −22,5%** | +43% · −5,2% | +25% | −3,3% | 3,8 | 1,87 → 1,52 | +17% | 0,05 |
> | 790 | GPS médias + IFR + Pôr do sol + Bollinger + Onda | **+268% · −37,3%** | +51% · −7,6% | +31% | −6,8% | 2,6 | 1,20 → 1,68 | +26% | 0,11 |
> | 791 | Donchian + GPS médias + IFR + Pullback | **+272% · −42,1%** | +65% · −10,3% | +37% | −5,9% | 4,1 | 1,88 → 1,49 | +20% | 0,19 |
> | 792 | VWAP + Donchian + Pullback + Rompe 200 + Tendência | **+210% · −59,0%** | +47% · −12,3% | +31% | −6,3% | 2,8 | 1,65 → 1,14 | +14% | 0,22 |
> | 793 | Donchian + IFR + Pôr do sol + Rompe 200 + Onda | **+225% · −33,2%** | +47% · −6,3% | +30% | −5,4% | 3,2 | 1,15 → 1,60 | +25% | 0,14 |
> | 794 | Donchian + GPS médias + Pullback + Rompe 200 + Bollinger | **+279% · −39,1%** | +52% · −7,9% | +30% | −5,2% | 3,2 | 1,98 → 1,37 | +17% | 0,15 |
> | 795 | Donchian + IFR + Rompe 200 + Bollinger + Onda | **+299% · −36,2%** | +54% · −6,8% | +32% | −6,2% | 3,1 | 1,24 → 1,70 | +28% | 0,23 |
> | 796 | ADX + IFR + Pullback + Rompe 200 + Bollinger | **+275% · −37,1%** | +50% · −6,9% | +30% | −4,2% | 4,1 | 1,77 → 1,97 | +22% | 0,13 |
> | 797 | GPS médias + MACD + Pullback + Bollinger + Tendência | **+304% · −41,8%** | +55% · −7,6% | +34% | −6,1% | 3,5 | 1,84 → 1,47 | +23% | 0,20 |
> | 798 | GPS médias + IFR + MACD + Rompe 200 + Onda | **+220% · −40,9%** | +48% · −8,5% | +32% | −9,6% | 2,0 | 1,06 → 1,45 | +28% | 0,27 |
> | 799 | VWAP + IFR + MACD + Pullback + Rompe 200 | **+161% · −31,3%** | +38% · −6,3% | +28% | −8,3% | 1,8 | 1,37 → 1,32 | +20% | 0,15 |
> | 800 | Pôr do sol + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+193% · −22,9%** | +39% · −3,9% | +27% | −5,0% | 2,7 | 1,08 → 1,91 | +19% | 0,03 |
> | 801 | ADX + IFR + Quinta + Pullback + Bollinger ⚠️ | **+274% · −34,9%** | +50% · −6,4% | +30% | −4,1% | 4,2 | 1,85 → 2,12 | +20% | 0,08 |
> | 802 | GPS médias + IFR + Rompe 200 + Tendência + Onda | **+267% · −44,8%** | +55% · −8,7% | +35% | −8,1% | 2,8 | 1,36 → 1,46 | +29% | 0,29 |
> | 803 | Quinta + Tendência ⚠️ | **+80% · −21,7%** | +45% · −9,8% | +32% | −7,4% | 2,7 | 1,77 → 1,29 | +19% | −0,07 |
> | 804 | VWAP + Donchian + IFR + Pôr do sol + Pullback | **+220% · −34,9%** | +46% · −7,3% | +30% | −5,9% | 2,9 | 1,60 → 1,44 | +18% | 0,06 |
> | 805 | Donchian + Pullback + Tendência + Onda | **+231% · −41,7%** | +58% · −10,1% | +37% | −7,7% | 3,2 | 1,38 → 1,45 | +27% | 0,24 |
> | 806 | BB explosão + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+130% · −32,8%** | +34% · −5,4% | +24% | −3,7% | 3,0 | 1,49 → 1,48 | +16% | 0,05 |
> | 807 | VWAP + Pullback + Rompe 200 + Bollinger + Tendência | **+190% · −40,6%** | +41% · −8,3% | +28% | −5,9% | 2,5 | 1,74 → 1,21 | +16% | 0,17 |
> | 808 | BB explosão + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+173% · −35,0%** | +40% · −6,6% | +27% | −5,6% | 2,6 | 1,40 → 1,67 | +19% | 0,06 |
> | 809 | Donchian + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+212% · −29,1%** | +43% · −5,3% | +27% | −6,0% | 2,3 | 1,16 → 1,56 | +25% | 0,05 |
> | 810 | ADX + Pullback + Bollinger + Tendência + Onda | **+305% · −47,8%** | +56% · −9,4% | +34% | −7,8% | 2,8 | 1,30 → 1,75 | +27% | 0,18 |

> [!example]- Combinações 811 a 840 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 811 | Donchian + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+213% · −28,6%** | +43% · −5,1% | +27% | −5,7% | 2,4 | 1,52 → 1,53 | +21% | 0,11 |
> | 812 | VWAP + Quinta + Pullback + Bollinger ⚠️ | **+104% · −23,6%** | +32% · −5,3% | +23% | −7,8% | 1,2 | 1,64 → 1,17 | +15% | 0,05 |
> | 813 | VWAP + IFR + Pullback + Tendência | **+192% · −37,7%** | +50% · −9,1% | +35% | −7,2% | 3,1 | 1,69 → 1,37 | +18% | 0,15 |
> | 814 | IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+169% · −23,5%** | +44% · −5,2% | +31% | −6,8% | 2,7 | 1,23 → 1,84 | +24% | 0,04 |
> | 815 | MACD + Bollinger + Tendência | **+170% · −32,1%** | +56% · −10,7% | +35% | −9,7% | 2,3 | 1,45 → 1,51 | +27% | 0,41 |
> | 816 | VWAP + IFR + Pullback + Rompe 200 + Tendência | **+205% · −41,0%** | +44% · −8,1% | +31% | −6,6% | 2,8 | 1,73 → 1,31 | +17% | 0,17 |
> | 817 | IFR + MACD + Pullback + Onda | **+177% · −28,1%** | +46% · −6,3% | +33% | −6,8% | 3,0 | 1,06 → 1,66 | +26% | 0,13 |
> | 818 | VWAP + MACD + Pullback + Bollinger + Tendência | **+223% · −39,7%** | +45% · −8,0% | +31% | −7,7% | 2,3 | 1,51 → 1,34 | +21% | 0,25 |
> | 819 | BB explosão + IFR + Pôr do sol + Pullback | **+142% · −35,9%** | +41% · −8,4% | +28% | −3,5% | 4,3 | 1,72 → 1,59 | +16% | −0,04 |
> | 820 | MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+239% · −34,5%** | +54% · −8,4% | +35% | −7,6% | 2,9 | 1,43 → 1,70 | +26% | 0,31 |
> | 821 | MACD + Quinta + Tendência ⚠️ | **+116% · −29,2%** | +43% · −9,7% | +32% | −8,5% | 2,3 | 1,42 → 1,37 | +25% | 0,12 |
> | 822 | IFR + Pôr do sol | **+78% · −12,3%** | +43% · −5,9% | +29% | −3,8% | 4,4 | 1,51 → 1,92 | +20% | −0,04 |
> | 823 | Donchian + IFR + MACD + Pôr do sol + Bollinger | **+304% · −33,0%** | +53% · −7,1% | +32% | −5,9% | 3,2 | 1,46 → 1,77 | +24% | 0,19 |
> | 824 | Donchian + GPS médias + Pullback + Bollinger + Tendência | **+367% · −50,6%** | +64% · −10,0% | +36% | −4,9% | 4,7 | 1,99 → 1,46 | +19% | 0,21 |
> | 825 | GPS médias + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+250% · −41,7%** | +50% · −8,8% | +32% | −9,3% | 2,1 | 1,40 → 1,57 | +28% | 0,26 |
> | 826 | Donchian + GPS médias + IFR + Pôr do sol + Rompe 200 | **+256% · −37,9%** | +52% · −7,4% | +31% | −5,8% | 3,1 | 1,70 → 1,44 | +21% | 0,17 |
> | 827 | VWAP + IFR + MACD + Pullback + Tendência | **+234% · −41,5%** | +48% · −9,0% | +34% | −7,9% | 2,7 | 1,51 → 1,40 | +22% | 0,22 |
> | 828 | 1ª vela 80 + Bollinger + Tendência ⚠️ | **+188% · −27,0%** | +59% · −8,4% | +36% | −6,6% | 3,5 | 1,65 → 1,79 | +28% | 0,21 |
> | 829 | GPS médias + IFR + Rompe 200 + Bollinger | **+219% · −33,8%** | +53% · −8,6% | +31% | −6,7% | 2,7 | 1,79 → 1,52 | +22% | 0,28 |
> | 830 | 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+204% · −30,9%** | +49% · −7,1% | +31% | −6,0% | 3,0 | 1,71 → 1,69 | +23% | 0,17 |
> | 831 | VWAP + Donchian + Pullback + Bollinger + Tendência | **+285% · −47,9%** | +54% · −9,8% | +33% | −5,7% | 3,5 | 1,70 → 1,34 | +17% | 0,24 |
> | 832 | Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+82% · −17,7%** | +28% · −4,2% | +23% | −3,9% | 2,5 | 0,98 → 1,43 | +19% | −0,04 |
> | 833 | VWAP + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+116% · −30,0%** | +30% · −5,5% | +21% | −7,3% | 1,2 | 1,70 → 1,07 | +14% | 0,07 |
> | 834 | 1ª vela 80 + Pullback + Rompe 200 + Bollinger + Onda ⚠️ | **+192% · −27,1%** | +40% · −4,8% | +27% | −6,4% | 2,2 | 1,14 → 1,74 | +20% | 0,11 |
> | 835 | 1ª vela 80 + Quinta + Pullback + Bollinger + Onda ⚠️ | **+190% · −23,0%** | +39% · −3,9% | +27% | −5,0% | 2,8 | 1,14 → 1,89 | +19% | −0,02 |
> | 836 | ADX + IFR + Rompe 200 + Bollinger + Tendência | **+337% · −48,3%** | +58% · −10,3% | +35% | −7,4% | 3,0 | 1,65 → 1,82 | +25% | 0,27 |
> | 837 | GPS médias + IFR + Quinta + Onda ⚠️ | **+182% · −32,1%** | +50% · −8,1% | +32% | −7,8% | 2,5 | 1,13 → 1,51 | +28% | 0,03 |
> | 838 | Donchian + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+227% · −29,6%** | +46% · −6,1% | +30% | −5,1% | 3,4 | 1,44 → 1,67 | +22% | 0,10 |
> | 839 | GPS médias + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+335% · −41,9%** | +61% · −8,3% | +39% | −8,1% | 3,2 | 1,54 → 1,60 | +30% | 0,32 |
> | 840 | VWAP + IFR + Rompe 200 + Bollinger + Tendência | **+246% · −41,4%** | +48% · −8,3% | +31% | −7,3% | 2,5 | 1,58 → 1,43 | +19% | 0,27 |

> [!example]- Combinações 841 a 870 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 841 | BB explosão + IFR + Pullback + Rompe 200 + Bollinger | **+212% · −37,3%** | +43% · −6,6% | +28% | −4,3% | 3,5 | 1,84 → 1,60 | +16% | 0,15 |
> | 842 | VWAP + MACD + Quinta + Pullback + Tendência ⚠️ | **+160% · −38,8%** | +38% · −8,0% | +29% | −6,5% | 2,5 | 1,48 → 1,23 | +19% | 0,09 |
> | 843 | ADX + IFR + 1ª vela 80 + Pullback + Tendência ⚠️ | **+355% · −44,2%** | +61% · −8,8% | +38% | −6,1% | 4,2 | 1,71 → 1,94 | +28% | 0,09 |
> | 844 | Donchian + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+371% · −38,2%** | +60% · −7,7% | +35% | −7,9% | 2,8 | 1,43 → 1,85 | +27% | 0,30 |
> | 845 | Donchian + MACD + Pôr do sol + Pullback + Bollinger | **+248% · −28,1%** | +46% · −5,0% | +28% | −4,3% | 3,6 | 1,74 → 1,70 | +22% | 0,04 |
> | 846 | Bollinger + Tendência | **+127% · −24,0%** | +64% · −11,8% | +37% | −9,2% | 2,6 | 1,79 → 1,53 | +23% | 0,31 |
> | 847 | IFR + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+138% · −23,5%** | +33% · −3,8% | +25% | −4,2% | 2,9 | 1,02 → 1,66 | +22% | 0,03 |
> | 848 | ADX + IFR + Bollinger + Tendência | **+318% · −45,4%** | +69% · −12,0% | +39% | −8,2% | 3,2 | 1,58 → 1,89 | +28% | 0,35 |
> | 849 | ADX + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+336% · −45,1%** | +58% · −8,9% | +35% | −5,7% | 3,8 | 1,14 → 2,02 | +24% | 0,28 |
> | 850 | MACD + Pôr do sol + Bollinger + Tendência + Onda | **+232% · −39,6%** | +46% · −7,8% | +31% | −7,8% | 2,3 | 1,04 → 1,63 | +24% | 0,19 |
> | 851 | VWAP + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+132% · −43,0%** | +34% · −9,1% | +26% | −5,0% | 2,6 | 1,71 → 1,05 | +14% | 0,06 |
> | 852 | Quinta + Rompe 200 ⚠️ | **+26% · −11,1%** | +20% · −5,0% | +17% | −4,5% | 1,0 | 1,24 → 0,45 | +14% | 0,01 |
> | 853 | Donchian + IFR + 1ª vela 80 + Bollinger ⚠️ | **+315% · −30,4%** | +65% · −7,5% | +36% | −6,0% | 3,9 | 1,63 → 1,98 | +27% | 0,22 |
> | 854 | MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+153% · −27,7%** | +41% · −6,4% | +27% | −8,3% | 1,7 | 1,13 → 1,71 | +18% | 0,21 |
> | 855 | Donchian + IFR + 1ª vela 80 + Pullback ⚠️ | **+269% · −29,1%** | +59% · −7,1% | +36% | −4,2% | 5,6 | 1,85 → 1,90 | +24% | 0,04 |
> | 856 | GPS médias + Pôr do sol + Quinta ⚠️ | **+85% · −19,7%** | +36% · −6,1% | +23% | −4,4% | 2,4 | 1,69 → 1,11 | +18% | −0,08 |
> | 857 | IFR + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+185% · −23,5%** | +39% · −4,4% | +28% | −5,1% | 3,0 | 1,28 → 1,92 | +22% | 0,05 |
> | 858 | Donchian + GPS médias + MACD + Quinta + Pullback ⚠️ | **+237% · −41,0%** | +49% · −7,6% | +31% | −6,7% | 2,7 | 1,72 → 1,36 | +21% | 0,05 |
> | 859 | MACD + Pullback + Rompe 200 + Bollinger + Onda | **+177% · −29,0%** | +38% · −5,2% | +27% | −7,1% | 1,9 | 1,09 → 1,57 | +23% | 0,12 |
> | 860 | Donchian + GPS médias + Quinta + Pullback + Tendência ⚠️ | **+284% · −50,6%** | +56% · −10,6% | +34% | −4,6% | 4,6 | 1,99 → 1,35 | +18% | 0,09 |
> | 861 | Donchian + GPS médias + Pôr do sol + Pullback + Bollinger | **+283% · −35,0%** | +52% · −6,3% | +29% | −4,3% | 3,9 | 1,98 → 1,52 | +19% | 0,02 |
> | 862 | VWAP + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+259% · −42,1%** | +51% · −8,5% | +35% | −9,5% | 2,4 | 1,26 → 1,53 | +27% | 0,32 |
> | 863 | ADX + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+341% · −38,7%** | +56% · −6,9% | +33% | −4,0% | 5,1 | 1,61 → 2,20 | +23% | 0,10 |
> | 864 | VWAP + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+113% · −24,4%** | +30% · −4,4% | +23% | −5,4% | 1,9 | 1,35 → 1,31 | +17% | 0,04 |
> | 865 | 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+92% · −28,0%** | +30% · −6,7% | +23% | −3,2% | 3,2 | 1,73 → 1,54 | +19% | −0,06 |
> | 866 | Quinta + Rompe 200 + Tendência ⚠️ | **+90% · −23,8%** | +36% · −7,4% | +27% | −6,4% | 2,3 | 1,82 → 1,17 | +16% | 0,04 |
> | 867 | ADX + IFR + Quinta + Pullback + Tendência ⚠️ | **+291% · −44,1%** | +54% · −8,0% | +35% | −5,9% | 3,7 | 1,89 → 1,83 | +23% | 0,09 |
> | 868 | ADX + IFR + MACD + Bollinger + Tendência | **+371% · −51,2%** | +63% · −11,3% | +38% | −8,7% | 2,9 | 1,42 → 1,82 | +28% | 0,36 |
> | 869 | Pôr do sol + Bollinger + Tendência + Onda | **+186% · −32,3%** | +47% · −7,6% | +31% | −7,1% | 2,5 | 1,10 → 1,65 | +24% | 0,12 |
> | 870 | Donchian + GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+183% · −37,0%** | +42% · −7,3% | +26% | −4,7% | 2,8 | 1,74 → 1,23 | +18% | 0,03 |

> [!example]- Combinações 871 a 900 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 871 | MACD + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+256% · −38,0%** | +47% · −7,4% | +31% | −7,0% | 2,6 | 1,50 → 1,65 | +25% | 0,23 |
> | 872 | ADX + IFR + Pôr do sol + Pullback + Bollinger | **+278% · −33,7%** | +50% · −6,1% | +30% | −3,7% | 4,7 | 1,76 → 2,16 | +19% | 0,05 |
> | 873 | Donchian + MACD + Pullback + Tendência | **+238% · −46,3%** | +58% · −12,8% | +37% | −7,6% | 3,2 | 1,70 → 1,41 | +22% | 0,26 |
> | 874 | VWAP + GPS médias + IFR + Pôr do sol + Tendência | **+239% · −48,4%** | +51% · −9,5% | +33% | −7,5% | 2,7 | 1,53 → 1,34 | +22% | 0,18 |
> | 875 | Pôr do sol + Pullback + Rompe 200 + Onda | **+83% · −20,6%** | +29% · −4,7% | +23% | −4,9% | 2,1 | 0,98 → 1,24 | +22% | 0,03 |
> | 876 | Donchian + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+441% · −41,5%** | +67% · −8,3% | +39% | −6,1% | 4,3 | 1,78 → 1,84 | +26% | 0,28 |
> | 877 | BB explosão + IFR + Pullback + Rompe 200 | **+139% · −40,9%** | +41% · −10,3% | +28% | −4,7% | 3,3 | 1,70 → 1,39 | +14% | 0,14 |
> | 878 | VWAP + GPS médias + IFR + Pullback + Onda | **+212% · −41,4%** | +48% · −8,5% | +32% | −10,0% | 1,9 | 1,19 → 1,34 | +26% | 0,17 |
> | 879 | VWAP + IFR + MACD + Pullback | **+149% · −29,3%** | +42% · −7,5% | +30% | −9,6% | 1,8 | 1,30 → 1,37 | +19% | 0,14 |
> | 880 | 1ª vela 80 + Pullback + Rompe 200 + Tendência + Onda ⚠️ | **+208% · −40,0%** | +44% · −8,0% | +31% | −6,5% | 2,9 | 1,31 → 1,56 | +28% | 0,11 |
> | 881 | ADX + Donchian + Pullback + Rompe 200 + Bollinger | **+290% · −39,0%** | +53% · −6,5% | +30% | −3,9% | 4,4 | 1,72 → 1,73 | +20% | 0,12 |
> | 882 | VWAP + Donchian + GPS médias + IFR + Pullback | **+268% · −50,3%** | +56% · −10,3% | +34% | −9,2% | 2,3 | 1,62 → 1,31 | +18% | 0,21 |
> | 883 | ADX + GPS médias + Quinta + Pullback + Tendência ⚠️ | **+266% · −54,3%** | +54% · −11,2% | +34% | −5,8% | 3,6 | 1,83 → 1,52 | +22% | 0,08 |
> | 884 | VWAP + GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+125% · −43,8%** | +34% · −9,4% | +24% | −8,1% | 1,3 | 1,65 → 0,89 | +14% | 0,04 |
> | 885 | ADX + Pullback + Rompe 200 + Bollinger | **+170% · −34,6%** | +45% · −7,8% | +27% | −4,8% | 3,0 | 1,58 → 1,69 | +20% | 0,10 |
> | 886 | Donchian + GPS médias + IFR + Pullback + Tendência | **+367% · −54,5%** | +67% · −11,8% | +40% | −5,6% | 4,8 | 1,94 → 1,49 | +21% | 0,26 |
> | 887 | BB explosão + IFR + Pullback + Rompe 200 + Tendência | **+222% · −52,9%** | +47% · −11,6% | +32% | −6,4% | 3,0 | 1,84 → 1,42 | +15% | 0,20 |
> | 888 | VWAP + Quinta + Pullback + Tendência ⚠️ | **+121% · −36,9%** | +37% · −9,3% | +28% | −5,1% | 3,0 | 1,66 → 1,11 | +15% | 0,02 |
> | 889 | GPS médias + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+334% · −43,0%** | +57% · −8,8% | +34% | −4,2% | 5,1 | 1,98 → 1,64 | +23% | 0,11 |
> | 890 | Donchian + GPS médias + IFR + Rompe 200 + Bollinger | **+331% · −41,8%** | +60% · −8,8% | +33% | −6,8% | 3,0 | 1,76 → 1,52 | +21% | 0,30 |
> | 891 | ADX + Pôr do sol + Pullback + Bollinger + Tendência | **+280% · −43,0%** | +51% · −7,3% | +31% | −5,3% | 3,4 | 1,86 → 1,84 | +23% | 0,08 |
> | 892 | ADX + Quinta + Bollinger + Tendência + Onda ⚠️ | **+272% · −45,0%** | +52% · −9,1% | +32% | −7,3% | 2,7 | 1,10 → 1,76 | +26% | 0,13 |
> | 893 | Donchian + IFR + MACD + Pôr do sol + Rompe 200 | **+227% · −31,3%** | +46% · −6,2% | +30% | −5,8% | 2,9 | 1,41 → 1,56 | +23% | 0,18 |
> | 894 | VWAP + GPS médias + Pôr do sol + Pullback + Tendência | **+194% · −47,8%** | +44% · −10,4% | +30% | −6,3% | 2,7 | 1,68 → 1,16 | +18% | 0,07 |
> | 895 | VWAP + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+207% · −33,3%** | +44% · −6,1% | +31% | −8,9% | 2,0 | 1,03 → 1,61 | +22% | 0,12 |
> | 896 | ADX + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+302% · −38,7%** | +53% · −7,4% | +31% | −3,6% | 5,2 | 1,26 → 2,22 | +21% | 0,14 |
> | 897 | VWAP + Donchian + Quinta + Pullback + Rompe 200 ⚠️ | **+145% · −44,3%** | +36% · −9,5% | +25% | −6,8% | 1,7 | 1,61 → 1,04 | +13% | 0,06 |
> | 898 | Donchian + GPS médias + Pullback + Rompe 200 | **+193% · −41,4%** | +52% · −11,1% | +30% | −5,8% | 3,0 | 1,88 → 1,16 | +15% | 0,17 |
> | 899 | Donchian + IFR + Rompe 200 + Bollinger | **+250% · −28,5%** | +56% · −7,0% | +32% | −5,0% | 3,9 | 1,77 → 1,71 | +20% | 0,25 |
> | 900 | MACD + Pôr do sol + Rompe 200 + Tendência | **+130% · −30,4%** | +38% · −7,1% | +28% | −7,5% | 2,1 | 1,42 → 1,33 | +23% | 0,13 |

> [!example]- Combinações 901 a 930 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 901 | GPS médias + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+222% · −45,0%** | +46% · −9,5% | +30% | −4,5% | 3,9 | 1,75 → 1,44 | +22% | 0,06 |
> | 902 | Donchian + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+283% · −32,9%** | +52% · −6,2% | +33% | −7,0% | 2,9 | 1,40 → 1,77 | +26% | 0,12 |
> | 903 | Donchian + Pôr do sol + Bollinger + Tendência + Onda | **+298% · −38,8%** | +55% · −7,5% | +33% | −6,4% | 3,1 | 1,28 → 1,62 | +28% | 0,16 |
> | 904 | VWAP + Donchian + IFR + Pôr do sol + Quinta ⚠️ | **+192% · −32,8%** | +43% · −6,4% | +28% | −6,4% | 2,4 | 1,39 → 1,44 | +18% | 0,05 |
> | 905 | Donchian + GPS médias + Quinta + Pullback ⚠️ | **+194% · −36,9%** | +51% · −8,7% | +30% | −4,5% | 3,9 | 1,95 → 1,28 | +17% | −0,01 |
> | 906 | Donchian + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+314% · −32,5%** | +56% · −6,5% | +35% | −5,6% | 4,0 | 1,31 → 1,81 | +27% | 0,11 |
> | 907 | ADX + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+341% · −43,8%** | +57% · −8,4% | +35% | −5,5% | 4,0 | 1,72 → 1,93 | +26% | 0,12 |
> | 908 | GPS médias + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+198% · −35,2%** | +44% · −6,7% | +30% | −5,3% | 3,3 | 1,27 → 1,41 | +22% | 0,02 |
> | 909 | MACD + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+189% · −32,8%** | +40% · −6,0% | +29% | −6,3% | 2,6 | 1,40 → 1,56 | +25% | 0,13 |
> | 910 | 1ª vela 80 + Pullback + Tendência ⚠️ | **+154% · −30,8%** | +52% · −10,2% | +36% | −5,5% | 4,2 | 1,87 → 1,62 | +23% | −0,09 |
> | 911 | BB explosão + IFR + Pullback + Bollinger + Tendência | **+297% · −51,7%** | +54% · −10,3% | +34% | −5,9% | 3,6 | 1,90 → 1,62 | +18% | 0,21 |
> | 912 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+129% · −34,1%** | +33% · −6,6% | +24% | −3,3% | 3,4 | 1,59 → 1,61 | +18% | −0,09 |
> | 913 | VWAP + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+161% · −30,8%** | +36% · −5,6% | +25% | −7,2% | 1,7 | 1,53 → 1,59 | +18% | 0,03 |
> | 914 | VWAP + Donchian + IFR + Pôr do sol + Bollinger | **+261% · −36,2%** | +50% · −7,3% | +30% | −7,3% | 2,3 | 1,41 → 1,55 | +19% | 0,16 |
> | 915 | GPS médias + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+240% · −34,2%** | +47% · −6,1% | +29% | −4,7% | 3,4 | 1,90 → 1,40 | +20% | 0,12 |
> | 916 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+205% · −33,2%** | +43% · −6,3% | +29% | −7,1% | 2,3 | 1,57 → 1,57 | +26% | −0,01 |
> | 917 | ADX + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+257% · −41,9%** | +50% · −7,0% | +33% | −4,7% | 4,2 | 1,69 → 1,83 | +25% | −0,01 |
> | 918 | Pôr do sol + Rompe 200 + Bollinger + Onda | **+111% · −20,8%** | +34% · −4,6% | +23% | −6,1% | 1,7 | 0,72 → 1,54 | +16% | 0,04 |
> | 919 | VWAP + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+144% · −27,7%** | +40% · −6,5% | +28% | −8,5% | 1,8 | 1,10 → 1,65 | +18% | 0,10 |
> | 920 | GPS médias + IFR + MACD + Tendência + Onda | **+291% · −46,4%** | +59% · −9,7% | +38% | −9,4% | 2,7 | 1,22 → 1,51 | +33% | 0,36 |
> | 921 | Donchian + IFR + Quinta + Bollinger + Tendência ⚠️ | **+363% · −39,4%** | +60% · −7,9% | +35% | −5,5% | 4,1 | 1,91 → 1,73 | +22% | 0,19 |
> | 922 | ADX + Donchian + IFR + Quinta + Bollinger ⚠️ | **+348% · −39,0%** | +60% · −8,3% | +33% | −4,1% | 5,0 | 1,53 → 1,95 | +22% | 0,16 |
> | 923 | ADX + IFR + Pullback + Rompe 200 + Tendência | **+289% · −45,7%** | +54% · −9,0% | +35% | −6,7% | 3,3 | 1,83 → 1,72 | +22% | 0,16 |
> | 924 | VWAP + Pôr do sol + Pullback + Rompe 200 + Tendência | **+134% · −42,4%** | +34% · −8,9% | +26% | −5,0% | 2,6 | 1,65 → 1,07 | +15% | 0,07 |
> | 925 | Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+128% · −26,6%** | +38% · −5,8% | +28% | −6,4% | 2,4 | 1,05 → 1,50 | +24% | 0,01 |
> | 926 | GPS médias + Pôr do sol + Rompe 200 + Tendência | **+163% · −37,4%** | +45% · −8,7% | +30% | −5,4% | 3,1 | 1,79 → 1,21 | +19% | 0,10 |
> | 927 | VWAP + Pullback + Bollinger + Tendência | **+177% · −34,9%** | +46% · −8,5% | +30% | −6,2% | 2,8 | 1,69 → 1,27 | +17% | 0,20 |
> | 928 | IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+169% · −26,2%** | +45% · −5,7% | +31% | −7,2% | 2,5 | 0,88 → 1,75 | +22% | 0,20 |
> | 929 | VWAP + IFR + 1ª vela 80 + Tendência ⚠️ | **+217% · −38,4%** | +54% · −9,6% | +36% | −8,0% | 3,0 | 1,38 → 1,55 | +25% | 0,24 |
> | 930 | MACD + Pôr do sol + Bollinger | **+99% · −16,5%** | +38% · −4,6% | +25% | −6,0% | 2,0 | 1,02 → 1,73 | +19% | 0,09 |

> [!example]- Combinações 931 a 960 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 931 | ADX + Donchian + Pôr do sol + Bollinger + Tendência | **+349% · −52,8%** | +61% · −10,6% | +34% | −5,7% | 3,8 | 1,58 → 1,76 | +24% | 0,18 |
> | 932 | GPS médias + MACD + Quinta + Bollinger + Tendência ⚠️ | **+269% · −38,5%** | +51% · −7,0% | +32% | −5,9% | 3,2 | 1,67 → 1,46 | +24% | 0,18 |
> | 933 | IFR + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+185% · −26,3%** | +40% · −4,2% | +28% | −5,5% | 2,8 | 0,93 → 1,81 | +21% | 0,11 |
> | 934 | Donchian + IFR + MACD + Rompe 200 + Bollinger | **+300% · −36,1%** | +53% · −6,8% | +32% | −6,8% | 2,8 | 1,50 → 1,65 | +24% | 0,29 |
> | 935 | MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+175% · −29,3%** | +45% · −7,0% | +32% | −6,7% | 2,9 | 1,33 → 1,62 | +26% | 0,16 |
> | 936 | Pôr do sol + Bollinger | **+61% · −7,9%** | +35% · −3,1% | +21% | −1,2% | 7,1 | 1,52 → 2,15 | +17% | −0,06 |
> | 937 | GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+237% · −44,5%** | +57% · −12,0% | +36% | −4,7% | 5,0 | 1,88 → 1,50 | +23% | 0,05 |
> | 938 | BB explosão + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+201% · −38,1%** | +44% · −7,7% | +30% | −8,1% | 2,2 | 1,18 → 1,67 | +24% | 0,09 |
> | 939 | ADX + GPS médias + Pôr do sol + Pullback + Tendência | **+269% · −52,9%** | +54% · −10,8% | +33% | −5,4% | 3,9 | 1,77 → 1,55 | +23% | 0,07 |
> | 940 | GPS médias + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+202% · −38,6%** | +43% · −7,7% | +29% | −8,0% | 2,0 | 1,58 → 1,44 | +23% | 0,09 |
> | 941 | MACD + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+229% · −30,3%** | +44% · −5,6% | +30% | −7,8% | 2,2 | 1,02 → 1,81 | +20% | 0,13 |
> | 942 | 1ª vela 80 + Quinta + Bollinger ⚠️ | **+106% · −15,1%** | +39% · −4,1% | +25% | −3,6% | 3,4 | 1,26 → 1,99 | +15% | −0,02 |
> | 943 | IFR + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+184% · −22,6%** | +39% · −4,2% | +28% | −4,5% | 3,4 | 0,92 → 1,95 | +20% | −0,01 |
> | 944 | ADX + IFR + MACD + Bollinger | **+257% · −41,3%** | +60% · −10,3% | +35% | −6,8% | 3,2 | 1,12 → 1,92 | +23% | 0,34 |
> | 945 | VWAP + Donchian + Pôr do sol + Pullback + Tendência | **+215% · −49,0%** | +47% · −10,0% | +31% | −4,9% | 3,6 | 1,63 → 1,24 | +17% | 0,12 |
> | 946 | Donchian + Pôr do sol + Pullback + Rompe 200 + Onda | **+175% · −33,3%** | +40% · −6,2% | +27% | −4,9% | 2,8 | 1,26 → 1,40 | +23% | 0,06 |
> | 947 | IFR + Quinta + Rompe 200 + Onda ⚠️ | **+125% · −23,4%** | +37% · −4,9% | +27% | −5,6% | 2,6 | 0,96 → 1,59 | +24% | 0,04 |
> | 948 | VWAP + Quinta + Pullback + Tendência + Onda ⚠️ | **+156% · −37,8%** | +38% · −7,3% | +29% | −7,2% | 2,2 | 1,18 → 1,26 | +23% | 0,06 |
> | 949 | Donchian + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+335% · −36,2%** | +56% · −7,0% | +33% | −4,4% | 4,6 | 1,74 → 1,79 | +24% | 0,14 |
> | 950 | ADX + IFR + MACD + Pullback + Tendência | **+322% · −50,5%** | +59% · −10,0% | +38% | −8,0% | 3,1 | 1,60 → 1,75 | +27% | 0,19 |
> | 951 | VWAP + GPS médias + Pullback + Rompe 200 + Tendência | **+189% · −53,5%** | +44% · −12,4% | +30% | −7,7% | 2,2 | 1,69 → 1,06 | +15% | 0,18 |
> | 952 | MACD + Quinta + Rompe 200 ⚠️ | **+57% · −13,5%** | +27% · −3,4% | +22% | −5,8% | 1,6 | 1,03 → 1,18 | +21% | −0,02 |
> | 953 | Donchian + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+340% · −42,8%** | +59% · −8,8% | +37% | −6,5% | 3,7 | 1,73 → 1,67 | +24% | 0,27 |
> | 954 | Donchian + GPS médias + Quinta + Pullback + Onda ⚠️ | **+228% · −39,7%** | +50% · −8,2% | +31% | −6,4% | 2,8 | 1,38 → 1,37 | +25% | 0,02 |
> | 955 | GPS médias + Pullback + Bollinger + Tendência | **+253% · −38,3%** | +58% · −8,9% | +34% | −4,9% | 4,4 | 2,09 → 1,44 | +20% | 0,15 |
> | 956 | IFR + Quinta + Bollinger + Onda ⚠️ | **+181% · −26,2%** | +45% · −5,7% | +29% | −4,8% | 3,4 | 1,02 → 1,91 | +23% | 0,02 |
> | 957 | Donchian + IFR + Quinta + Tendência + Onda ⚠️ | **+300% · −41,5%** | +57% · −8,2% | +36% | −7,3% | 3,2 | 1,35 → 1,62 | +29% | 0,17 |
> | 958 | ADX + GPS médias + IFR + MACD + Pullback | **+295% · −47,9%** | +58% · −10,0% | +35% | −5,7% | 4,0 | 1,50 → 1,67 | +27% | 0,17 |
> | 959 | GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+290% · −38,7%** | +66% · −9,6% | +41% | −6,6% | 4,2 | 1,70 → 1,63 | +28% | 0,28 |
> | 960 | BB explosão + IFR + Pôr do sol + Pullback + Onda | **+178% · −37,2%** | +41% · −6,5% | +29% | −5,4% | 2,9 | 1,14 → 1,58 | +25% | 0,02 |

> [!example]- Combinações 961 a 990 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 961 | GPS médias + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+252% · −40,4%** | +50% · −7,9% | +33% | −6,9% | 3,0 | 1,53 → 1,49 | +27% | 0,10 |
> | 962 | VWAP + IFR + Bollinger + Tendência | **+230% · −38,0%** | +55% · −9,6% | +35% | −8,0% | 2,7 | 1,51 → 1,49 | +22% | 0,33 |
> | 963 | GPS médias + IFR + Pôr do sol + Onda | **+184% · −32,0%** | +50% · −8,1% | +32% | −7,8% | 2,5 | 1,08 → 1,53 | +27% | 0,08 |
> | 964 | ADX + Pullback + Bollinger + Tendência | **+259% · −46,3%** | +59% · −11,3% | +35% | −6,7% | 3,3 | 1,81 → 1,77 | +23% | 0,18 |
> | 965 | VWAP + Pôr do sol + Pullback + Bollinger | **+106% · −23,8%** | +33% · −5,3% | +22% | −7,9% | 1,2 | 1,54 → 1,20 | +15% | 0,05 |
> | 966 | GPS médias + Pullback + Rompe 200 | **+104% · −31,8%** | +41% · −10,4% | +27% | −5,9% | 2,3 | 1,92 → 0,92 | +15% | 0,11 |
> | 967 | ADX + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+313% · −46,8%** | +57% · −9,7% | +36% | −7,2% | 3,2 | 1,49 → 1,85 | +28% | 0,20 |
> | 968 | ADX + IFR + MACD + Pullback + Rompe 200 | **+234% · −38,8%** | +47% · −7,1% | +31% | −5,6% | 3,3 | 1,45 → 1,76 | +23% | 0,11 |
> | 969 | Pôr do sol + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+185% · −29,3%** | +40% · −5,0% | +29% | −5,2% | 3,2 | 1,07 → 1,70 | +21% | 0,01 |
> | 970 | IFR + Rompe 200 | **+78% · −14,3%** | +43% · −6,8% | +30% | −5,6% | 3,0 | 1,51 → 1,47 | +20% | 0,31 |
> | 971 | ADX + GPS médias + IFR + Quinta + Pullback ⚠️ | **+265% · −45,5%** | +53% · −9,4% | +32% | −4,2% | 4,7 | 1,75 → 1,71 | +23% | 0,07 |
> | 972 | VWAP + GPS médias + IFR + Quinta + Tendência ⚠️ | **+236% · −49,4%** | +51% · −9,9% | +33% | −7,5% | 2,7 | 1,58 → 1,32 | +21% | 0,15 |
> | 973 | Donchian + GPS médias + Pôr do sol + Pullback | **+197% · −35,0%** | +52% · −8,3% | +30% | −4,5% | 3,9 | 1,88 → 1,31 | +18% | −0,02 |
> | 974 | GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+160% · −38,7%** | +45% · −9,4% | +30% | −5,3% | 3,2 | 1,86 → 1,18 | +18% | 0,09 |
> | 975 | VWAP + IFR + MACD + Quinta + Tendência ⚠️ | **+205% · −40,0%** | +45% · −7,9% | +32% | −7,8% | 2,5 | 1,32 → 1,40 | +23% | 0,19 |
> | 976 | ADX + IFR + Pôr do sol + Quinta + Tendência ⚠️ | **+259% · −40,7%** | +50% · −7,9% | +33% | −5,5% | 3,6 | 1,61 → 1,86 | +23% | 0,12 |
> | 977 | Pôr do sol + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+255% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 3,1 | 1,12 → 1,81 | +21% | 0,14 |
> | 978 | VWAP + IFR + Quinta + Tendência + Onda ⚠️ | **+203% · −40,2%** | +45% · −7,9% | +32% | −7,9% | 2,5 | 1,09 → 1,45 | +25% | 0,11 |
> | 979 | BB explosão + IFR + MACD + Pullback + Tendência | **+250% · −55,8%** | +52% · −12,0% | +35% | −7,6% | 2,9 | 1,61 → 1,49 | +20% | 0,24 |
> | 980 | VWAP + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+118% · −29,2%** | +30% · −5,3% | +21% | −7,4% | 1,2 | 1,61 → 1,10 | +15% | 0,06 |
> | 981 | VWAP + IFR + Pôr do sol + Quinta ⚠️ | **+102% · −20,7%** | +33% · −4,7% | +24% | −6,0% | 1,9 | 1,23 → 1,41 | +15% | −0,01 |
> | 982 | GPS médias + Pullback + Tendência | **+172% · −40,8%** | +59% · −14,0% | +37% | −6,1% | 4,0 | 1,99 → 1,25 | +19% | 0,11 |
> | 983 | MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+154% · −25,3%** | +40% · −5,6% | +27% | −7,2% | 1,9 | 1,06 → 1,89 | +16% | 0,15 |
> | 984 | MACD + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+241% · −37,2%** | +48% · −7,1% | +34% | −7,7% | 2,8 | 1,19 → 1,62 | +27% | 0,14 |
> | 985 | Donchian + GPS médias + MACD + Pullback + Bollinger | **+313% · −40,4%** | +57% · −8,4% | +33% | −7,7% | 2,6 | 1,72 → 1,47 | +22% | 0,18 |
> | 986 | VWAP + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+185% · −35,8%** | +41% · −7,0% | +29% | −10,0% | 1,6 | 1,01 → 1,60 | +20% | 0,18 |
> | 987 | MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+128% · −30,3%** | +38% · −7,0% | +28% | −7,5% | 2,1 | 1,50 → 1,30 | +21% | 0,10 |
> | 988 | BB explosão + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+89% · −33,7%** | +27% · −6,5% | +21% | −3,1% | 2,5 | 1,75 → 1,07 | +13% | −0,02 |
> | 989 | VWAP + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+162% · −37,7%** | +36% · −7,7% | +25% | −8,7% | 1,4 | 1,48 → 1,43 | +18% | 0,14 |
> | 990 | ADX + IFR + Pullback + Bollinger | **+257% · −34,2%** | +58% · −7,9% | +34% | −4,7% | 4,4 | 1,71 → 2,08 | +21% | 0,13 |

> [!example]- Combinações 991 a 1020 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 991 | GPS médias + MACD + Pullback + Bollinger | **+202% · −32,2%** | +50% · −8,0% | +30% | −7,7% | 2,3 | 1,75 → 1,46 | +23% | 0,12 |
> | 992 | Donchian + GPS médias + IFR + Pôr do sol + Bollinger | **+337% · −39,8%** | +60% · −8,6% | +33% | −5,9% | 3,4 | 1,74 → 1,64 | +23% | 0,16 |
> | 993 | VWAP + GPS médias + MACD + Quinta + Pullback ⚠️ | **+152% · −39,3%** | +38% · −7,9% | +27% | −10,3% | 1,3 | 1,42 → 1,12 | +19% | 0,04 |
> | 994 | Pôr do sol + Pullback + Bollinger + Onda | **+132% · −20,4%** | +37% · −4,5% | +25% | −4,6% | 2,6 | 1,06 → 1,70 | +21% | −0,00 |
> | 995 | Donchian + GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+253% · −39,3%** | +52% · −7,3% | +31% | −5,8% | 3,1 | 1,75 → 1,41 | +20% | 0,17 |
> | 996 | ADX + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+345% · −49,1%** | +62% · −10,5% | +39% | −8,5% | 3,1 | 1,31 → 1,83 | +29% | 0,28 |
> | 997 | Donchian + GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+316% · −40,5%** | +59% · −8,4% | +34% | −6,9% | 3,1 | 1,60 → 1,67 | +26% | 0,15 |
> | 998 | ADX + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+334% · −49,4%** | +62% · −10,5% | +39% | −8,6% | 3,1 | 1,09 → 1,86 | +29% | 0,22 |
> | 999 | GPS médias + MACD + Pullback | **+131% · −28,8%** | +48% · −8,7% | +32% | −9,0% | 2,1 | 1,61 → 1,24 | +23% | 0,02 |
> | 1000 | Donchian + MACD + Pullback + Bollinger | **+229% · −29,4%** | +53% · −7,0% | +31% | −5,7% | 3,2 | 1,71 → 1,62 | +22% | 0,14 |
> | 1001 | ADX + GPS médias + IFR + Quinta + Bollinger ⚠️ | **+307% · −43,6%** | +57% · −8,8% | +32% | −4,2% | 4,6 | 1,54 → 1,79 | +26% | 0,20 |
> | 1002 | VWAP + IFR + Pôr do sol + Rompe 200 + Tendência | **+182% · −36,4%** | +41% · −7,3% | +29% | −6,5% | 2,5 | 1,50 → 1,33 | +19% | 0,15 |
> | 1003 | Donchian + BB explosão + IFR + 1ª vela 80 + Pullback ⚠️ | **+286% · −44,8%** | +56% · −9,3% | +34% | −6,0% | 3,5 | 1,62 → 1,68 | +20% | 0,14 |
> | 1004 | VWAP + IFR + Quinta + Tendência ⚠️ | **+167% · −33,8%** | +46% · −7,7% | +32% | −7,0% | 2,8 | 1,49 → 1,38 | +20% | 0,09 |
> | 1005 | ADX + GPS médias + IFR + Pôr do sol + Tendência | **+316% · −53,9%** | +62% · −11,3% | +37% | −6,3% | 3,9 | 1,60 → 1,67 | +27% | 0,20 |
> | 1006 | IFR + MACD + Quinta ⚠️ | **+112% · −19,2%** | +42% · −5,8% | +30% | −6,2% | 2,8 | 1,22 → 1,65 | +23% | 0,08 |
> | 1007 | ADX + GPS médias + MACD + Pullback + Tendência | **+292% · −59,0%** | +59% · −12,6% | +37% | −7,2% | 3,3 | 1,59 → 1,52 | +26% | 0,19 |
> | 1008 | BB explosão + IFR + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+272% · −35,7%** | +50% · −7,2% | +31% | −5,2% | 3,5 | 1,73 → 1,90 | +21% | 0,09 |
> | 1009 | IFR + 1ª vela 80 ⚠️ | **+115% · −14,1%** | +59% · −6,5% | +38% | −6,4% | 3,9 | 1,26 → 1,97 | +28% | 0,09 |
> | 1010 | ADX + Rompe 200 + Bollinger + Tendência | **+227% · −42,9%** | +55% · −10,7% | +33% | −7,7% | 2,6 | 1,52 → 1,66 | +23% | 0,22 |
> | 1011 | GPS médias + MACD + Pôr do sol + Tendência | **+190% · −39,3%** | +51% · −9,2% | +33% | −6,9% | 3,0 | 1,50 → 1,34 | +26% | 0,17 |
> | 1012 | ADX + Donchian + Rompe 200 + Bollinger + Tendência | **+343% · −54,8%** | +62% · −11,4% | +35% | −7,0% | 3,1 | 1,61 → 1,65 | +22% | 0,25 |
> | 1013 | VWAP + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+72% · −32,8%** | +24% · −6,3% | +20% | −6,3% | 1,1 | 1,56 → 0,83 | +14% | 0,01 |
> | 1014 | 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+195% · −32,4%** | +50% · −7,6% | +35% | −7,2% | 3,0 | 1,24 → 1,62 | +29% | 0,08 |
> | 1015 | VWAP + Donchian + Quinta + Pullback + Tendência ⚠️ | **+212% · −52,4%** | +46% · −10,2% | +31% | −4,9% | 3,7 | 1,69 → 1,23 | +16% | 0,10 |
> | 1016 | VWAP + MACD + Pôr do sol + Pullback + Tendência | **+162% · −38,7%** | +38% · −8,0% | +29% | −6,6% | 2,4 | 1,42 → 1,25 | +20% | 0,12 |
> | 1017 | Donchian + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+282% · −35,1%** | +53% · −6,9% | +33% | −7,8% | 2,6 | 1,38 → 1,68 | +27% | 0,27 |
> | 1018 | Donchian + IFR + 1ª vela 80 + Quinta ⚠️ | **+235% · −26,8%** | +55% · −6,4% | +34% | −4,8% | 4,4 | 1,60 → 1,88 | +26% | 0,01 |
> | 1019 | ADX + Donchian + IFR + Quinta + Rompe 200 ⚠️ | **+264% · −39,4%** | +53% · −7,0% | +32% | −4,6% | 4,0 | 1,48 → 1,75 | +22% | 0,13 |
> | 1020 | BB explosão + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+204% · −38,1%** | +44% · −7,7% | +30% | −8,0% | 2,2 | 1,13 → 1,70 | +24% | 0,13 |

> [!example]- Combinações 1021 a 1050 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1021 | IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+172% · −23,5%** | +44% · −5,5% | +31% | −6,7% | 2,7 | 1,16 → 1,87 | +24% | 0,14 |
> | 1022 | MACD + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+287% · −41,6%** | +52% · −8,4% | +34% | −8,3% | 2,6 | 1,04 → 1,71 | +22% | 0,29 |
> | 1023 | VWAP + IFR + Quinta + Bollinger ⚠️ | **+151% · −26,9%** | +41% · −6,2% | +27% | −7,2% | 1,9 | 1,37 → 1,55 | +18% | 0,10 |
> | 1024 | Donchian + MACD + Pôr do sol + Pullback + Onda | **+205% · −36,1%** | +44% · −7,1% | +30% | −6,1% | 2,8 | 1,11 → 1,54 | +23% | 0,07 |
> | 1025 | VWAP + Pôr do sol + Pullback + Tendência + Onda | **+158% · −37,1%** | +39% · −7,1% | +29% | −7,3% | 2,2 | 1,13 → 1,28 | +22% | 0,11 |
> | 1026 | Donchian + IFR + MACD + Pôr do sol + Tendência | **+307% · −42,0%** | +57% · −9,1% | +36% | −7,2% | 3,3 | 1,54 → 1,58 | +26% | 0,29 |
> | 1027 | MACD + Bollinger | **+87% · −16,8%** | +47% · −7,9% | +29% | −10,1% | 1,6 | 0,93 → 1,58 | +20% | 0,38 |
> | 1028 | ADX + GPS médias + IFR + Pullback + Rompe 200 | **+263% · −47,6%** | +54% · −10,0% | +32% | −4,5% | 4,4 | 1,70 → 1,61 | +22% | 0,17 |
> | 1029 | ADX + Quinta + Pullback + Bollinger + Onda ⚠️ | **+215% · −35,3%** | +44% · −6,9% | +28% | −5,3% | 2,9 | 1,07 → 1,82 | +20% | 0,05 |
> | 1030 | VWAP + Donchian + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+125% · −39,1%** | +33% · −7,9% | +23% | −6,6% | 1,5 | 1,32 → 1,07 | +15% | 0,03 |
> | 1031 | ADX + IFR + Pullback + Tendência + Onda | **+312% · −49,0%** | +59% · −10,0% | +38% | −8,1% | 3,1 | 1,33 → 1,76 | +28% | 0,17 |
> | 1032 | VWAP + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+183% · −37,9%** | +41% · −7,6% | +29% | −10,8% | 1,5 | 1,06 → 1,49 | +23% | 0,25 |
> | 1033 | Donchian + IFR + Bollinger + Tendência + Onda | **+389% · −46,0%** | +65% · −9,7% | +38% | −8,1% | 3,2 | 1,37 → 1,70 | +31% | 0,32 |
> | 1034 | BB explosão + IFR + MACD + Pullback | **+167% · −42,5%** | +46% · −10,8% | +32% | −7,3% | 2,6 | 1,43 → 1,51 | +20% | 0,14 |
> | 1035 | VWAP + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+179% · −36,3%** | +41% · −7,3% | +29% | −6,5% | 2,5 | 1,55 → 1,32 | +18% | 0,12 |
> | 1036 | ADX + IFR + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+319% · −43,6%** | +57% · −8,6% | +36% | −6,0% | 3,9 | 1,46 → 1,96 | +26% | 0,14 |
> | 1037 | Donchian + IFR + MACD + Quinta + Bollinger ⚠️ | **+301% · −33,2%** | +53% · −7,1% | +32% | −5,9% | 3,2 | 1,53 → 1,75 | +25% | 0,18 |
> | 1038 | VWAP + IFR + Quinta + Rompe 200 ⚠️ | **+101% · −24,3%** | +33% · −5,7% | +24% | −7,1% | 1,6 | 1,28 → 1,22 | +17% | 0,05 |
> | 1039 | GPS médias + IFR + Tendência | **+219% · −41,7%** | +72% · −14,1% | +43% | −8,4% | 3,6 | 1,77 → 1,45 | +25% | 0,43 |
> | 1040 | GPS médias + IFR + MACD + Bollinger | **+251% · −39,1%** | +59% · −10,3% | +34% | −9,6% | 2,2 | 1,47 → 1,58 | +28% | 0,36 |
> | 1041 | Donchian + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+281% · −49,2%** | +52% · −10,9% | +33% | −5,0% | 4,1 | 1,90 → 1,55 | +20% | 0,12 |
> | 1042 | VWAP + Donchian + Pôr do sol + Rompe 200 + Bollinger | **+181% · −36,5%** | +40% · −7,1% | +25% | −7,6% | 1,5 | 1,36 → 1,23 | +17% | 0,12 |
> | 1043 | VWAP + IFR + Rompe 200 + Bollinger | **+152% · −29,3%** | +41% · −7,0% | +27% | −8,3% | 1,7 | 1,34 → 1,39 | +19% | 0,24 |
> | 1044 | Rompe 200 + Bollinger | **+62% · −12,7%** | +36% · −5,4% | +21% | −4,4% | 1,9 | 1,42 → 1,19 | +17% | 0,08 |
> | 1045 | VWAP + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+218% · −35,5%** | +43% · −7,0% | +28% | −8,4% | 1,8 | 1,31 → 1,67 | +22% | 0,23 |
> | 1046 | Donchian + GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+258% · −35,5%** | +52% · −7,7% | +31% | −4,9% | 3,7 | 1,74 → 1,53 | +22% | 0,07 |
> | 1047 | ADX + IFR + Pôr do sol + Pullback + Tendência | **+294% · −42,6%** | +54% · −8,0% | +35% | −5,5% | 4,0 | 1,83 → 1,85 | +24% | 0,08 |
> | 1048 | ADX + GPS médias + IFR + Quinta + Tendência ⚠️ | **+313% · −54,8%** | +61% · −11,7% | +37% | −6,2% | 3,9 | 1,64 → 1,65 | +26% | 0,21 |
> | 1049 | 1ª vela 80 + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+131% · −30,7%** | +33% · −5,7% | +25% | −5,3% | 2,3 | 1,07 → 1,57 | +20% | −0,01 |
> | 1050 | IFR + Rompe 200 + Tendência + Onda | **+197% · −38,4%** | +51% · −9,7% | +35% | −9,6% | 2,3 | 1,22 → 1,54 | +30% | 0,28 |

> [!example]- Combinações 1051 a 1080 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1051 | IFR + MACD + Pôr do sol + Rompe 200 | **+127% · −23,3%** | +37% · −5,0% | +27% | −5,3% | 2,6 | 1,25 → 1,58 | +23% | 0,11 |
> | 1052 | VWAP + GPS médias + IFR + Pôr do sol | **+158% · −37,5%** | +46% · −9,8% | +29% | −10,2% | 1,6 | 1,33 → 1,27 | +21% | 0,09 |
> | 1053 | VWAP + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+163% · −29,7%** | +36% · −5,4% | +25% | −7,3% | 1,6 | 1,46 → 1,61 | +17% | 0,07 |
> | 1054 | VWAP + IFR + Bollinger + Tendência + Onda | **+274% · −44,9%** | +53% · −9,3% | +34% | −8,6% | 2,5 | 1,13 → 1,54 | +26% | 0,30 |
> | 1055 | ADX + Donchian + IFR + Pullback + Tendência | **+387% · −57,2%** | +68% · −12,0% | +40% | −6,7% | 4,1 | 1,77 → 1,74 | +24% | 0,23 |
> | 1056 | ADX + GPS médias + Pullback + Rompe 200 + Tendência | **+263% · −56,0%** | +55% · −12,3% | +34% | −6,1% | 3,4 | 1,78 → 1,44 | +21% | 0,16 |
> | 1057 | MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+173% · −32,7%** | +46% · −7,8% | +32% | −8,2% | 2,4 | 1,36 → 1,50 | +27% | 0,21 |
> | 1058 | IFR + Pullback + Bollinger + Onda | **+211% · −25,9%** | +50% · −5,6% | +32% | −5,4% | 3,5 | 1,31 → 1,90 | +25% | 0,09 |
> | 1059 | ADX + MACD + Bollinger + Tendência | **+260% · −49,9%** | +61% · −12,3% | +36% | −9,2% | 2,6 | 1,29 → 1,71 | +28% | 0,36 |
> | 1060 | Donchian + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+222% · −36,1%** | +47% · −7,2% | +31% | −5,7% | 3,2 | 1,25 → 1,52 | +27% | 0,06 |
> | 1061 | GPS médias + IFR + Tendência + Onda | **+253% · −42,7%** | +64% · −10,5% | +40% | −9,1% | 3,0 | 1,30 → 1,50 | +31% | 0,34 |
> | 1062 | BB explosão + IFR + MACD + Pullback + Bollinger | **+245% · −38,8%** | +48% · −7,5% | +31% | −6,6% | 2,7 | 1,55 → 1,66 | +21% | 0,17 |
> | 1063 | BB explosão + IFR + Pullback + Rompe 200 + Onda | **+174% · −42,2%** | +41% · −8,1% | +29% | −6,9% | 2,3 | 1,18 → 1,45 | +22% | 0,16 |
> | 1064 | GPS médias + MACD + Quinta + Tendência + Onda ⚠️ | **+220% · −41,6%** | +49% · −8,2% | +33% | −7,8% | 2,6 | 1,17 → 1,40 | +27% | 0,13 |
> | 1065 | ADX + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+255% · −43,9%** | +51% · −8,8% | +33% | −6,6% | 3,0 | 1,63 → 1,73 | +23% | 0,15 |
> | 1066 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+255% · −38,5%** | +51% · −7,4% | +33% | −6,9% | 3,0 | 1,48 → 1,51 | +28% | 0,16 |
> | 1067 | BB explosão + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+114% · −39,8%** | +31% · −7,5% | +24% | −5,7% | 1,9 | 1,47 → 1,22 | +15% | 0,02 |
> | 1068 | Donchian + Quinta + Bollinger + Tendência + Onda ⚠️ | **+295% · −38,8%** | +54% · −7,5% | +33% | −6,5% | 3,1 | 1,33 → 1,61 | +28% | 0,12 |
> | 1069 | Donchian + GPS médias + Pôr do sol + Pullback + Onda | **+230% · −40,6%** | +50% · −8,6% | +31% | −6,4% | 2,8 | 1,34 → 1,39 | +25% | 0,04 |
> | 1070 | BB explosão + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+115% · −34,6%** | +31% · −6,3% | +24% | −4,4% | 2,4 | 1,46 → 1,38 | +17% | −0,04 |
> | 1071 | GPS médias + MACD + Pôr do sol + Bollinger + Tendência | **+272% · −36,9%** | +52% · −7,1% | +32% | −6,0% | 3,2 | 1,61 → 1,48 | +25% | 0,19 |
> | 1072 | Rompe 200 + Bollinger + Tendência + Onda | **+184% · −35,9%** | +47% · −8,8% | +31% | −8,5% | 2,1 | 1,16 → 1,50 | +25% | 0,21 |
> | 1073 | Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+109% · −20,3%** | +33% · −4,6% | +23% | −6,2% | 1,6 | 0,80 → 1,50 | +16% | 0,01 |
> | 1074 | Donchian + GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+246% · −36,8%** | +49% · −7,4% | +28% | −5,7% | 2,6 | 1,82 → 1,35 | +18% | 0,11 |
> | 1075 | ADX + MACD + Pullback + Bollinger + Onda | **+251% · −41,3%** | +49% · −7,8% | +31% | −6,8% | 2,7 | 0,95 → 1,79 | +22% | 0,15 |
> | 1076 | Donchian + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+250% · −45,0%** | +49% · −9,5% | +31% | −4,9% | 3,8 | 1,74 → 1,56 | +21% | 0,08 |
> | 1077 | ADX + MACD + Rompe 200 + Bollinger + Tendência | **+277% · −48,4%** | +53% · −10,1% | +32% | −8,3% | 2,4 | 1,37 → 1,66 | +26% | 0,25 |
> | 1078 | Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+94% · −27,3%** | +30% · −6,6% | +23% | −3,2% | 3,2 | 1,64 → 1,57 | +20% | −0,02 |
> | 1079 | ADX + Pôr do sol + Bollinger + Tendência | **+230% · −42,0%** | +55% · −9,5% | +32% | −6,2% | 3,1 | 1,49 → 1,82 | +24% | 0,17 |
> | 1080 | ADX + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+299% · −41,6%** | +53% · −7,9% | +32% | −4,7% | 4,0 | 1,30 → 2,08 | +24% | 0,21 |

> [!example]- Combinações 1081 a 1110 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1081 | IFR + MACD + Rompe 200 + Tendência + Onda | **+238% · −45,0%** | +49% · −9,4% | +34% | −9,8% | 2,2 | 1,14 → 1,54 | +31% | 0,30 |
> | 1082 | ADX + IFR + Pôr do sol + Rompe 200 + Tendência | **+258% · −43,9%** | +51% · −8,9% | +33% | −6,7% | 3,0 | 1,57 → 1,75 | +24% | 0,15 |
> | 1083 | VWAP + Pôr do sol + Pullback + Tendência | **+123% · −35,2%** | +37% · −8,7% | +28% | −5,1% | 3,0 | 1,60 → 1,13 | +16% | 0,05 |
> | 1084 | MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+124% · −17,0%** | +36% · −3,1% | +27% | −5,4% | 2,6 | 1,41 → 1,75 | +21% | −0,05 |
> | 1085 | VWAP + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+196% · −38,3%** | +41% · −7,6% | +28% | −10,9% | 1,4 | 1,28 → 1,54 | +20% | 0,19 |
> | 1086 | GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+120% · −30,5%** | +37% · −7,4% | +26% | −8,2% | 1,6 | 1,40 → 1,16 | +21% | 0,05 |
> | 1087 | BB explosão + IFR + Pullback + Tendência | **+209% · −52,1%** | +54% · −14,1% | +36% | −6,9% | 3,4 | 1,80 → 1,48 | +16% | 0,20 |
> | 1088 | ADX + Donchian + Quinta + Bollinger + Tendência ⚠️ | **+346% · −54,3%** | +61% · −11,2% | +34% | −5,7% | 3,8 | 1,64 → 1,74 | +23% | 0,19 |
> | 1089 | ADX + Donchian + IFR + Bollinger + Tendência | **+442% · −55,4%** | +72% · −11,2% | +40% | −7,4% | 3,7 | 1,62 → 1,82 | +26% | 0,35 |
> | 1090 | Donchian + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+279% · −31,7%** | +52% · −5,8% | +33% | −6,1% | 3,4 | 1,13 → 1,81 | +26% | 0,05 |
> | 1091 | VWAP + Donchian + IFR + Rompe 200 + Bollinger | **+257% · −38,0%** | +50% · −7,6% | +30% | −8,2% | 2,1 | 1,45 → 1,43 | +18% | 0,27 |
> | 1092 | ADX + IFR + MACD + Quinta + Tendência ⚠️ | **+286% · −47,2%** | +55% · −9,8% | +36% | −7,9% | 2,9 | 1,40 → 1,74 | +26% | 0,21 |
> | 1093 | Donchian + IFR + Quinta + Bollinger ⚠️ | **+249% · −29,5%** | +56% · −7,8% | +32% | −4,2% | 4,5 | 1,83 → 1,87 | +22% | 0,10 |
> | 1094 | ADX + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+192% · −38,8%** | +41% · −7,1% | +26% | −4,3% | 3,0 | 1,05 → 1,92 | +18% | 0,10 |
> | 1095 | Donchian + MACD + Pullback + Onda | **+189% · −35,8%** | +50% · −9,1% | +33% | −8,0% | 2,5 | 1,07 → 1,48 | +26% | 0,19 |
> | 1096 | VWAP + GPS médias + MACD + Pôr do sol + Pullback | **+154% · −39,6%** | +38% · −8,0% | +27% | −10,5% | 1,3 | 1,36 → 1,15 | +20% | 0,05 |
> | 1097 | IFR + MACD + Rompe 200 | **+114% · −23,3%** | +43% · −7,1% | +30% | −7,6% | 2,3 | 1,19 → 1,49 | +26% | 0,27 |
> | 1098 | VWAP + IFR + Pôr do sol + Pullback + Onda | **+161% · −30,8%** | +38% · −5,6% | +28% | −7,2% | 2,1 | 1,04 → 1,46 | +18% | 0,05 |
> | 1099 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+202% · −46,8%** | +43% · −9,6% | +30% | −4,1% | 4,3 | 1,70 → 1,55 | +19% | 0,01 |
> | 1100 | IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+168% · −23,3%** | +44% · −5,2% | +31% | −5,9% | 3,1 | 0,87 → 1,88 | +21% | −0,04 |
> | 1101 | VWAP + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+137% · −31,8%** | +34% · −5,9% | +26% | −8,8% | 1,5 | 1,12 → 1,31 | +20% | 0,12 |
> | 1102 | 1ª vela 80 + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+183% · −35,1%** | +40% · −6,7% | +29% | −6,4% | 2,6 | 1,12 → 1,57 | +22% | 0,04 |
> | 1103 | ADX + IFR + MACD + Pôr do sol + Tendência | **+289% · −47,1%** | +55% · −9,9% | +36% | −7,9% | 2,9 | 1,35 → 1,76 | +25% | 0,22 |
> | 1104 | Donchian + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+369% · −43,4%** | +64% · −9,1% | +40% | −7,8% | 3,5 | 1,51 → 1,67 | +29% | 0,36 |
> | 1105 | VWAP + Donchian + Quinta + Rompe 200 + Bollinger ⚠️ | **+179% · −37,1%** | +40% · −7,3% | +25% | −7,6% | 1,6 | 1,43 → 1,21 | +16% | 0,11 |
> | 1106 | IFR + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+289% · −35,8%** | +51% · −6,8% | +33% | −8,3% | 2,4 | 0,91 → 1,89 | +21% | 0,26 |
> | 1107 | Donchian + IFR + Pôr do sol + Tendência + Onda | **+302% · −41,5%** | +58% · −8,2% | +36% | −7,3% | 3,2 | 1,31 → 1,63 | +29% | 0,21 |
> | 1108 | VWAP + GPS médias + IFR + Rompe 200 + Tendência | **+233% · −52,4%** | +51% · −11,0% | +33% | −8,4% | 2,5 | 1,55 → 1,25 | +19% | 0,30 |
> | 1109 | VWAP + Donchian + IFR + Quinta + Bollinger ⚠️ | **+258% · −36,0%** | +50% · −7,3% | +30% | −7,3% | 2,3 | 1,47 → 1,54 | +20% | 0,14 |
> | 1110 | Donchian + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+269% · −28,8%** | +47% · −5,0% | +29% | −2,9% | 5,5 | 2,02 → 1,97 | +21% | −0,04 |

> [!example]- Combinações 1111 a 1140 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1111 | BB explosão + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+150% · −52,0%** | +37% · −10,6% | +27% | −4,7% | 3,0 | 1,85 → 1,19 | +13% | 0,07 |
> | 1112 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+223% · −34,4%** | +45% · −6,7% | +29% | −6,0% | 2,7 | 1,60 → 1,65 | +25% | 0,13 |
> | 1113 | MACD + Rompe 200 + Bollinger + Tendência + Onda | **+229% · −42,8%** | +46% · −8,7% | +31% | −9,0% | 2,0 | 1,09 → 1,52 | +25% | 0,25 |
> | 1114 | VWAP + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+247% · −42,6%** | +47% · −8,8% | +31% | −6,7% | 2,7 | 1,64 → 1,53 | +21% | 0,16 |
> | 1115 | MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+66% · −13,4%** | +25% · −2,9% | +21% | −3,9% | 2,0 | 1,12 → 1,33 | +20% | 0,01 |
> | 1116 | ADX + IFR + Quinta + Tendência ⚠️ | **+240% · −42,6%** | +59% · −10,2% | +37% | −7,2% | 3,4 | 1,57 → 1,80 | +26% | 0,17 |
> | 1117 | VWAP + Pullback + Bollinger + Tendência + Onda | **+219% · −38,1%** | +45% · −7,2% | +31% | −8,2% | 2,2 | 1,21 → 1,38 | +25% | 0,22 |
> | 1118 | VWAP + Donchian + Pôr do sol + Bollinger + Tendência | **+257% · −43,2%** | +51% · −9,0% | +31% | −5,9% | 3,1 | 1,49 → 1,36 | +19% | 0,21 |
> | 1119 | MACD + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+119% · −26,0%** | +31% · −4,5% | +25% | −6,1% | 1,9 | 1,03 → 1,41 | +23% | 0,02 |
> | 1120 | Donchian + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+331% · −42,7%** | +56% · −8,7% | +33% | −5,6% | 3,6 | 1,76 → 1,66 | +22% | 0,22 |
> | 1121 | Donchian + GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+313% · −40,5%** | +58% · −8,4% | +34% | −7,0% | 3,1 | 1,65 → 1,65 | +25% | 0,10 |
> | 1122 | Donchian + GPS médias + MACD + Pullback + Tendência | **+307% · −54,9%** | +61% · −11,7% | +37% | −6,7% | 3,7 | 1,73 → 1,36 | +22% | 0,26 |
> | 1123 | ADX + Pôr do sol + Bollinger + Tendência + Onda | **+275% · −45,1%** | +53% · −9,2% | +32% | −7,4% | 2,7 | 1,05 → 1,79 | +25% | 0,15 |
> | 1124 | ADX + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+302% · −44,4%** | +54% · −8,6% | +33% | −5,4% | 3,6 | 1,49 → 1,94 | +26% | 0,12 |
> | 1125 | Donchian + IFR + MACD + Bollinger + Onda | **+330% · −39,8%** | +58% · −7,8% | +35% | −8,0% | 2,8 | 1,07 → 1,72 | +27% | 0,32 |
> | 1126 | Donchian + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+332% · −36,3%** | +56% · −7,1% | +33% | −4,4% | 4,6 | 1,80 → 1,76 | +23% | 0,09 |
> | 1127 | BB explosão + IFR + Pôr do sol + Quinta + Bollinger ⚠️ | **+185% · −31,0%** | +40% · −5,9% | +26% | −3,8% | 3,4 | 1,57 → 1,78 | +19% | 0,05 |
> | 1128 | BB explosão + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+127% · −41,5%** | +33% · −8,8% | +24% | −4,8% | 2,3 | 1,59 → 1,42 | +16% | −0,03 |
> | 1129 | ADX + GPS médias + IFR + Pôr do sol + Bollinger | **+311% · −42,2%** | +58% · −8,8% | +32% | −3,8% | 5,1 | 1,48 → 1,82 | +25% | 0,18 |
> | 1130 | GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+222% · −33,3%** | +54% · −7,1% | +32% | −4,7% | 4,1 | 1,93 → 1,43 | +21% | 0,12 |
> | 1131 | ADX + IFR + Quinta + Pullback + Rompe 200 ⚠️ | **+200% · −32,5%** | +43% · −6,3% | +28% | −4,4% | 3,6 | 1,75 → 1,83 | +21% | 0,06 |
> | 1132 | VWAP + IFR + Pôr do sol + Bollinger + Onda | **+197% · −32,5%** | +42% · −6,2% | +28% | −8,0% | 1,9 | 0,86 → 1,60 | +19% | 0,13 |
> | 1133 | VWAP + Donchian + MACD + Pullback + Tendência | **+236% · −52,5%** | +51% · −12,0% | +34% | −8,2% | 2,6 | 1,46 → 1,26 | +19% | 0,29 |
> | 1134 | BB explosão + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+156% · −34,6%** | +38% · −6,0% | +27% | −6,1% | 2,3 | 1,20 → 1,56 | +21% | 0,06 |
> | 1135 | IFR + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+213% · −34,0%** | +44% · −6,3% | +31% | −8,3% | 2,2 | 0,87 → 1,71 | +22% | 0,23 |
> | 1136 | Donchian + MACD + Pôr do sol + Bollinger + Tendência | **+301% · −43,3%** | +54% · −9,2% | +33% | −6,4% | 3,1 | 1,56 → 1,57 | +24% | 0,23 |
> | 1137 | GPS médias + IFR + MACD + Onda | **+207% · −38,9%** | +56% · −10,2% | +36% | −11,1% | 2,1 | 0,99 → 1,50 | +29% | 0,32 |
> | 1138 | IFR + MACD + Pôr do sol | **+115% · −20,2%** | +42% · −6,6% | +30% | −6,1% | 2,8 | 1,12 → 1,69 | +22% | 0,12 |
> | 1139 | GPS médias + MACD + Quinta + Tendência ⚠️ | **+187% · −40,5%** | +50% · −9,7% | +33% | −6,9% | 3,0 | 1,57 → 1,31 | +24% | 0,14 |
> | 1140 | Donchian + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+270% · −36,8%** | +48% · −7,2% | +29% | −4,0% | 4,0 | 1,93 → 1,80 | +20% | 0,08 |

> [!example]- Combinações 1141 a 1170 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1141 | IFR + Pôr do sol + Rompe 200 + Onda | **+127% · −23,4%** | +37% · −4,9% | +27% | −5,5% | 2,6 | 0,89 → 1,61 | +23% | 0,08 |
> | 1142 | VWAP + GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+245% · −44,8%** | +50% · −9,5% | +32% | −9,4% | 2,1 | 1,56 → 1,49 | +22% | 0,11 |
> | 1143 | ADX + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+190% · −41,9%** | +41% · −8,0% | +26% | −5,4% | 2,4 | 1,12 → 1,76 | +21% | 0,11 |
> | 1144 | IFR + Tendência + Onda | **+183% · −34,9%** | +61% · −11,8% | +41% | −11,3% | 2,5 | 1,14 → 1,61 | +35% | 0,33 |
> | 1145 | ADX + IFR + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+255% · −36,4%** | +49% · −6,3% | +32% | −4,1% | 4,6 | 1,53 → 1,98 | +23% | 0,07 |
> | 1146 | ADX + IFR + Quinta + Tendência + Onda ⚠️ | **+279% · −47,4%** | +55% · −9,9% | +36% | −8,0% | 2,9 | 1,16 → 1,77 | +27% | 0,13 |
> | 1147 | Donchian + GPS médias + IFR + Quinta + Bollinger ⚠️ | **+334% · −39,8%** | +59% · −8,7% | +33% | −5,9% | 3,4 | 1,80 → 1,61 | +22% | 0,16 |
> | 1148 | ADX + MACD + Quinta + Pullback + Tendência ⚠️ | **+236% · −48,8%** | +48% · −9,4% | +32% | −6,3% | 3,1 | 1,61 → 1,65 | +24% | 0,08 |
> | 1149 | VWAP + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+253% · −42,3%** | +52% · −8,5% | +36% | −8,5% | 2,7 | 1,05 → 1,57 | +27% | 0,26 |
> | 1150 | Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+253% · −44,4%** | +49% · −9,3% | +31% | −4,9% | 3,8 | 1,68 → 1,57 | +22% | 0,13 |
> | 1151 | ADX + BB explosão + IFR + Pullback + Bollinger | **+284% · −53,8%** | +55% · −10,6% | +32% | −4,6% | 4,2 | 1,54 → 1,82 | +21% | 0,19 |
> | 1152 | VWAP + Pullback + Rompe 200 + Bollinger | **+106% · −29,4%** | +33% · −7,0% | +23% | −9,8% | 1,0 | 1,55 → 0,99 | +14% | 0,15 |
> | 1153 | VWAP + IFR + Pullback + Rompe 200 + Onda | **+158% · −33,2%** | +38% · −6,2% | +28% | −8,7% | 1,7 | 1,09 → 1,34 | +21% | 0,16 |
> | 1154 | VWAP + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+97% · −24,4%** | +28% · −4,6% | +23% | −7,2% | 1,4 | 1,28 → 1,20 | +15% | 0,00 |
> | 1155 | VWAP + Donchian + Pullback + Bollinger + Onda | **+232% · −38,8%** | +48% · −7,8% | +29% | −10,0% | 1,7 | 1,12 → 1,38 | +21% | 0,21 |
> | 1156 | BB explosão + IFR + Pôr do sol + Quinta ⚠️ | **+119% · −30,3%** | +37% · −6,5% | +26% | −3,8% | 3,3 | 1,40 → 1,59 | +18% | 0,00 |
> | 1157 | Donchian + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+310% · −31,6%** | +53% · −5,8% | +32% | −6,6% | 2,9 | 1,66 → 1,80 | +25% | 0,12 |
> | 1158 | ADX + IFR + 1ª vela 80 + Tendência ⚠️ | **+296% · −43,7%** | +67% · −11,3% | +41% | −8,0% | 3,6 | 1,42 → 1,90 | +30% | 0,23 |
> | 1159 | ADX + Donchian + Pôr do sol + Quinta + Tendência ⚠️ | **+268% · −52,1%** | +54% · −10,5% | +33% | −5,2% | 3,8 | 1,57 → 1,67 | +23% | 0,10 |
> | 1160 | IFR + MACD + Tendência + Onda | **+224% · −41,9%** | +56% · −11,0% | +39% | −11,1% | 2,3 | 1,06 → 1,59 | +33% | 0,38 |
> | 1161 | ADX + IFR + MACD + Quinta + Pullback ⚠️ | **+235% · −36,6%** | +47% · −6,4% | +31% | −4,4% | 4,2 | 1,49 → 1,87 | +21% | 0,05 |
> | 1162 | IFR + MACD + Bollinger + Onda | **+215% · −33,3%** | +51% · −8,0% | +33% | −8,2% | 2,5 | 0,86 → 1,78 | +24% | 0,29 |
> | 1163 | BB explosão + IFR + Pullback + Tendência + Onda | **+243% · −53,0%** | +52% · −11,5% | +35% | −7,7% | 2,9 | 1,34 → 1,52 | +25% | 0,21 |
> | 1164 | BB explosão + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+227% · −53,7%** | +48% · −11,1% | +33% | −6,6% | 3,1 | 1,51 → 1,50 | +22% | 0,13 |
> | 1165 | GPS médias + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+294% · −37,6%** | +52% · −7,6% | +31% | −6,1% | 3,0 | 1,73 → 1,83 | +26% | 0,10 |
> | 1166 | VWAP + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+179% · −44,4%** | +40% · −9,4% | +29% | −5,7% | 2,9 | 1,61 → 1,41 | +19% | −0,01 |
> | 1167 | Donchian + IFR + Pôr do sol + Tendência | **+263% · −35,7%** | +61% · −9,1% | +38% | −6,3% | 3,9 | 1,75 → 1,62 | +23% | 0,24 |
> | 1168 | MACD + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+167% · −34,5%** | +39% · −6,3% | +29% | −7,1% | 2,3 | 1,00 → 1,53 | +24% | 0,08 |
> | 1169 | 1ª vela 80 + Rompe 200 + Bollinger + Tendência + Onda ⚠️ | **+252% · −38,2%** | +48% · −7,4% | +31% | −7,1% | 2,6 | 1,17 → 1,69 | +22% | 0,20 |
> | 1170 | MACD + Bollinger + Tendência + Onda | **+215% · −39,5%** | +53% · −10,1% | +34% | −10,1% | 2,1 | 1,00 → 1,58 | +25% | 0,34 |

> [!example]- Combinações 1171 a 1200 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1171 | ADX + IFR + MACD + 1ª vela 80 + Pullback ⚠️ | **+292% · −40,1%** | +54% · −7,3% | +35% | −5,4% | 4,0 | 1,36 → 1,96 | +23% | 0,08 |
> | 1172 | ADX + Donchian + Pullback + Tendência + Onda | **+310% · −58,4%** | +62% · −12,4% | +38% | −7,6% | 3,2 | 1,31 → 1,61 | +28% | 0,20 |
> | 1173 | MACD + Pôr do sol + Rompe 200 + Bollinger + Onda | **+154% · −28,6%** | +35% · −4,8% | +25% | −6,9% | 1,7 | 0,74 → 1,61 | +17% | 0,09 |
> | 1174 | Donchian + IFR + MACD + Pôr do sol + Onda | **+252% · −37,5%** | +51% · −7,4% | +33% | −7,1% | 2,8 | 0,99 → 1,65 | +25% | 0,19 |
> | 1175 | BB explosão + GPS médias + IFR + Quinta + Pullback ⚠️ | **+200% · −51,8%** | +46% · −11,0% | +30% | −5,6% | 3,0 | 1,75 → 1,36 | +17% | 0,07 |
> | 1176 | MACD + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+151% · −28,5%** | +35% · −4,8% | +25% | −6,9% | 1,7 | 0,81 → 1,58 | +17% | 0,07 |
> | 1177 | ADX + Donchian + IFR + MACD + Quinta ⚠️ | **+293% · −43,1%** | +57% · −8,3% | +35% | −5,5% | 4,0 | 1,27 → 1,76 | +23% | 0,18 |
> | 1178 | VWAP + GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+170% · −43,6%** | +41% · −9,0% | +28% | −6,3% | 2,4 | 1,52 → 1,15 | +19% | 0,05 |
> | 1179 | GPS médias + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+130% · −30,3%** | +34% · −5,9% | +24% | −6,7% | 1,6 | 1,05 → 1,24 | +21% | −0,01 |
> | 1180 | Donchian + IFR + Pôr do sol + Onda | **+210% · −30,8%** | +53% · −7,6% | +33% | −5,6% | 3,6 | 1,06 → 1,68 | +24% | 0,11 |
> | 1181 | VWAP + GPS médias + MACD + Pullback + Tendência | **+215% · −52,4%** | +49% · −11,0% | +33% | −9,7% | 2,1 | 1,51 → 1,19 | +20% | 0,22 |
> | 1182 | IFR + MACD + 1ª vela 80 ⚠️ | **+157% · −23,5%** | +53% · −7,3% | +36% | −9,4% | 2,4 | 1,10 → 1,79 | +26% | 0,27 |
> | 1183 | ADX + Donchian + IFR + 1ª vela 80 + Bollinger ⚠️ | **+417% · −41,6%** | +67% · −8,8% | +37% | −4,6% | 5,2 | 1,40 → 2,03 | +25% | 0,25 |
> | 1184 | ADX + IFR + 1ª vela 80 + Quinta + Pullback ⚠️ | **+255% · −34,2%** | +49% · −6,0% | +32% | −3,8% | 5,0 | 1,58 → 2,11 | +21% | −0,02 |
> | 1185 | Pôr do sol + Rompe 200 + Tendência + Onda | **+128% · −30,5%** | +38% · −7,0% | +28% | −7,6% | 2,0 | 1,05 → 1,37 | +25% | 0,10 |
> | 1186 | Donchian + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+273% · −28,6%** | +48% · −4,8% | +29% | −2,9% | 5,5 | 1,94 → 2,00 | +22% | −0,01 |
> | 1187 | Pôr do sol + Tendência | **+82% · −20,0%** | +45% · −9,7% | +32% | −7,4% | 2,6 | 1,65 → 1,33 | +22% | 0,06 |
> | 1188 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+176% · −43,9%** | +40% · −8,2% | +28% | −4,0% | 3,9 | 1,50 → 1,55 | +20% | 0,01 |
> | 1189 | ADX + Donchian + IFR + Pôr do sol + Rompe 200 | **+267% · −38,2%** | +53% · −6,8% | +31% | −4,3% | 4,3 | 1,42 → 1,77 | +22% | 0,12 |
> | 1190 | Donchian + IFR + MACD + Quinta + Tendência ⚠️ | **+304% · −42,1%** | +57% · −9,0% | +36% | −7,2% | 3,3 | 1,59 → 1,56 | +25% | 0,26 |
> | 1191 | VWAP + Donchian + IFR + Pôr do sol + Tendência | **+263% · −45,5%** | +54% · −9,6% | +34% | −6,8% | 3,2 | 1,49 → 1,42 | +20% | 0,23 |
> | 1192 | Pôr do sol + Rompe 200 | **+28% · −10,2%** | +20% · −4,5% | +17% | −3,4% | 1,2 | 1,03 → 0,56 | +16% | −0,05 |
> | 1193 | BB explosão + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+156% · −36,2%** | +37% · −6,9% | +27% | −6,7% | 2,1 | 1,39 → 1,55 | +21% | −0,05 |
> | 1194 | BB explosão + IFR + Pullback + Bollinger | **+198% · −35,0%** | +49% · −8,4% | +30% | −4,4% | 4,0 | 1,80 → 1,70 | +17% | 0,13 |
> | 1195 | Donchian + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+277% · −34,6%** | +53% · −7,2% | +33% | −6,9% | 3,0 | 1,13 → 1,72 | +29% | 0,24 |
> | 1196 | MACD + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+213% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,6 | 1,00 → 1,63 | +22% | 0,09 |
> | 1197 | BB explosão + IFR + MACD + 1ª vela 80 + Tendência ⚠️ | **+274% · −52,2%** | +55% · −10,4% | +37% | −8,1% | 2,9 | 1,36 → 1,60 | +26% | 0,32 |
> | 1198 | BB explosão + MACD + Quinta + Pullback + Tendência ⚠️ | **+177% · −54,9%** | +42% · −11,8% | +30% | −6,0% | 2,9 | 1,61 → 1,34 | +18% | 0,08 |
> | 1199 | Donchian + Pullback + Rompe 200 + Onda | **+160% · −33,2%** | +45% · −8,0% | +29% | −6,6% | 2,5 | 1,22 → 1,33 | +24% | 0,17 |
> | 1200 | ADX + IFR + 1ª vela 80 + Bollinger ⚠️ | **+279% · −39,0%** | +62% · −9,3% | +35% | −4,9% | 4,6 | 1,20 → 2,15 | +23% | 0,26 |

> [!example]- Combinações 1201 a 1230 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1201 | ADX + Quinta + Pullback + Bollinger ⚠️ | **+168% · −32,4%** | +44% · −7,5% | +27% | −4,9% | 2,9 | 1,67 → 1,87 | +18% | 0,08 |
> | 1202 | GPS médias + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+234% · −33,0%** | +45% · −5,8% | +28% | −4,5% | 3,3 | 1,97 → 1,70 | +22% | −0,01 |
> | 1203 | Donchian + MACD + Pôr do sol + Rompe 200 + Tendência | **+225% · −42,1%** | +47% · −8,8% | +31% | −6,9% | 2,7 | 1,51 → 1,38 | +22% | 0,20 |
> | 1204 | Donchian + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+222% · −33,0%** | +46% · −6,3% | +30% | −5,5% | 3,1 | 1,20 → 1,59 | +26% | 0,11 |
> | 1205 | VWAP + Donchian + Pullback + Tendência + Onda | **+229% · −49,4%** | +51% · −10,6% | +34% | −8,6% | 2,5 | 1,24 → 1,29 | +24% | 0,26 |
> | 1206 | Pullback + Rompe 200 + Bollinger + Onda | **+131% · −22,6%** | +37% · −5,2% | +25% | −5,9% | 2,1 | 1,14 → 1,46 | +23% | 0,11 |
> | 1207 | BB explosão + IFR + Quinta + Rompe 200 + Tendência ⚠️ | **+195% · −49,9%** | +44% · −10,4% | +30% | −6,3% | 2,8 | 1,67 → 1,42 | +16% | 0,17 |
> | 1208 | ADX + IFR + Pullback + Tendência | **+273% · −45,9%** | +63% · −10,9% | +39% | −7,3% | 3,6 | 1,79 → 1,79 | +25% | 0,16 |
> | 1209 | ADX + IFR + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+258% · −32,9%** | +49% · −5,9% | +31% | −3,7% | 5,0 | 1,51 → 2,13 | +20% | −0,01 |
> | 1210 | ADX + Quinta + Pullback + Rompe 200 + Tendência ⚠️ | **+203% · −44,0%** | +44% · −7,9% | +29% | −6,0% | 2,8 | 1,84 → 1,55 | +19% | 0,06 |
> | 1211 | VWAP + IFR + Quinta + Bollinger + Onda ⚠️ | **+195% · −32,5%** | +41% · −6,2% | +28% | −8,1% | 1,9 | 0,91 → 1,58 | +20% | 0,09 |
> | 1212 | Donchian + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+303% · −33,6%** | +53% · −6,1% | +32% | −6,1% | 3,1 | 1,27 → 1,81 | +26% | 0,11 |
> | 1213 | Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+185% · −34,4%** | +41% · −6,5% | +29% | −6,4% | 2,6 | 1,07 → 1,59 | +22% | 0,11 |
> | 1214 | ADX + MACD + Pullback + Rompe 200 + Tendência | **+234% · −49,5%** | +48% · −9,6% | +32% | −7,6% | 2,6 | 1,56 → 1,55 | +23% | 0,12 |
> | 1215 | Donchian + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+361% · −43,6%** | +64% · −8,9% | +40% | −7,9% | 3,4 | 1,28 → 1,72 | +33% | 0,29 |
> | 1216 | BB explosão + IFR + MACD + Pullback + Onda | **+201% · −43,5%** | +46% · −8,4% | +32% | −7,9% | 2,4 | 1,05 → 1,54 | +28% | 0,17 |
> | 1217 | BB explosão + IFR + Quinta + Bollinger + Tendência ⚠️ | **+263% · −48,9%** | +51% · −9,4% | +32% | −5,8% | 3,3 | 1,72 → 1,62 | +19% | 0,19 |
> | 1218 | ADX + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+277% · −42,6%** | +51% · −8,2% | +31% | −5,3% | 3,4 | 1,33 → 1,97 | +22% | 0,12 |
> | 1219 | Donchian + Pôr do sol + Rompe 200 + Tendência | **+184% · −38,9%** | +49% · −9,1% | +31% | −5,9% | 3,1 | 1,74 → 1,33 | +18% | 0,15 |
> | 1220 | ADX + Donchian + Pullback + Bollinger + Onda | **+316% · −42,9%** | +58% · −7,7% | +33% | −5,2% | 3,9 | 1,19 → 1,77 | +23% | 0,14 |
> | 1221 | Donchian + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+224% · −31,3%** | +46% · −6,2% | +30% | −5,8% | 2,9 | 1,48 → 1,54 | +22% | 0,17 |
> | 1222 | ADX + GPS médias + IFR + MACD + Bollinger | **+337% · −46,1%** | +62% · −9,5% | +35% | −6,6% | 3,4 | 1,32 → 1,73 | +29% | 0,35 |
> | 1223 | GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+205% · −32,2%** | +51% · −8,0% | +32% | −6,8% | 2,9 | 1,60 → 1,68 | +27% | 0,02 |
> | 1224 | MACD + 1ª vela 80 + Tendência ⚠️ | **+160% · −30,7%** | +54% · −10,3% | +38% | −9,4% | 2,6 | 1,28 → 1,55 | +29% | 0,29 |
> | 1225 | VWAP + GPS médias + MACD + Pullback + Rompe 200 | **+151% · −43,7%** | +38% · −9,2% | +27% | −11,3% | 1,2 | 1,39 → 1,04 | +18% | 0,16 |
> | 1226 | VWAP + Quinta + Pullback + Rompe 200 ⚠️ | **+62% · −32,8%** | +25% · −8,2% | +20% | −8,5% | 0,9 | 1,49 → 0,71 | +12% | 0,02 |
> | 1227 | VWAP + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+96% · −31,4%** | +28% · −5,8% | +23% | −8,5% | 1,2 | 1,31 → 1,05 | +17% | 0,04 |
> | 1228 | Donchian + GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+343% · −53,4%** | +63% · −12,1% | +37% | −4,9% | 5,1 | 1,85 → 1,50 | +22% | 0,15 |
> | 1229 | GPS médias + MACD + Rompe 200 + Bollinger + Tendência | **+268% · −41,3%** | +52% · −8,0% | +32% | −7,2% | 2,7 | 1,63 → 1,38 | +23% | 0,28 |
> | 1230 | VWAP + MACD + Pullback + Tendência + Onda | **+181% · −40,6%** | +43% · −8,6% | +32% | −10,3% | 1,8 | 1,05 → 1,30 | +25% | 0,25 |

> [!example]- Combinações 1231 a 1260 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1231 | BB explosão + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+136% · −28,2%** | +33% · −4,8% | +22% | −2,5% | 3,9 | 1,89 → 1,53 | +15% | −0,02 |
> | 1232 | VWAP + Donchian + MACD + Pullback + Onda | **+191% · −44,5%** | +45% · −9,5% | +30% | −12,0% | 1,5 | 0,97 → 1,30 | +21% | 0,25 |
> | 1233 | BB explosão + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+224% · −35,5%** | +47% · −7,1% | +32% | −7,0% | 2,8 | 1,12 → 1,70 | +26% | 0,09 |
> | 1234 | IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+170% · −22,2%** | +45% · −5,2% | +31% | −5,9% | 3,1 | 0,82 → 1,90 | +20% | 0,08 |
> | 1235 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+172% · −38,8%** | +38% · −8,0% | +26% | −4,6% | 2,9 | 1,80 → 1,45 | +21% | 0,01 |
> | 1236 | VWAP + Donchian + Pullback + Rompe 200 + Onda | **+166% · −46,1%** | +41% · −9,9% | +28% | −10,5% | 1,4 | 1,08 → 1,17 | +21% | 0,20 |
> | 1237 | VWAP + Pullback + Rompe 200 + Tendência + Onda | **+155% · −44,9%** | +39% · −9,5% | +29% | −8,8% | 1,8 | 1,17 → 1,18 | +22% | 0,19 |
> | 1238 | ADX + IFR + Pullback + Bollinger + Onda | **+308% · −39,6%** | +55% · −7,7% | +33% | −6,0% | 3,4 | 1,19 → 1,96 | +23% | 0,14 |
> | 1239 | Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+132% · −23,1%** | +47% · −7,1% | +33% | −5,3% | 3,7 | 1,52 → 1,67 | +27% | 0,06 |
> | 1240 | ADX + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+305% · −43,4%** | +54% · −8,3% | +33% | −5,4% | 3,7 | 1,43 → 1,97 | +25% | 0,16 |
> | 1241 | VWAP + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+181% · −42,7%** | +40% · −8,9% | +29% | −5,8% | 2,8 | 1,56 → 1,43 | +20% | 0,05 |
> | 1242 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+298% · −37,6%** | +52% · −7,6% | +31% | −6,1% | 3,0 | 1,67 → 1,86 | +27% | 0,14 |
> | 1243 | VWAP + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+168% · −35,0%** | +38% · −6,7% | +26% | −5,8% | 2,3 | 1,49 → 1,24 | +18% | 0,14 |
> | 1244 | Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+133% · −30,0%** | +33% · −5,5% | +25% | −5,4% | 2,2 | 1,01 → 1,58 | +20% | 0,04 |
> | 1245 | Pôr do sol + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+132% · −22,4%** | +32% · −4,1% | +25% | −4,1% | 2,9 | 1,01 → 1,74 | +19% | −0,05 |
> | 1246 | ADX + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+203% · −42,3%** | +45% · −7,9% | +30% | −6,8% | 2,6 | 1,01 → 1,68 | +23% | 0,05 |
> | 1247 | GPS médias + Pullback + Rompe 200 + Bollinger | **+168% · −28,2%** | +44% · −6,6% | +26% | −5,1% | 2,7 | 2,07 → 1,26 | +17% | 0,12 |
> | 1248 | Donchian + GPS médias + Pôr do sol + Rompe 200 + Tendência | **+253% · −49,4%** | +53% · −9,9% | +32% | −5,1% | 3,8 | 1,76 → 1,28 | +19% | 0,17 |
> | 1249 | VWAP + IFR + MACD + 1ª vela 80 ⚠️ | **+170% · −35,8%** | +46% · −9,1% | +32% | −12,8% | 1,5 | 0,97 → 1,54 | +21% | 0,31 |
> | 1250 | ADX + Donchian + Pullback + Rompe 200 + Tendência | **+294% · −56,7%** | +57% · −12,1% | +35% | −6,3% | 3,5 | 1,76 → 1,54 | +19% | 0,17 |
> | 1251 | Donchian + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+235% · −31,3%** | +55% · −7,6% | +34% | −5,9% | 3,5 | 1,56 → 1,75 | +24% | 0,24 |
> | 1252 | Donchian + BB explosão + IFR + Quinta + Pullback ⚠️ | **+229% · −49,1%** | +49% · −10,2% | +31% | −4,2% | 4,3 | 1,74 → 1,52 | +16% | 0,09 |
> | 1253 | VWAP + IFR + Pôr do sol + Rompe 200 | **+103% · −23,5%** | +33% · −5,7% | +24% | −7,1% | 1,6 | 1,21 → 1,25 | +18% | 0,08 |
> | 1254 | VWAP + IFR + MACD + Pôr do sol + Rompe 200 | **+139% · −31,8%** | +35% · −5,9% | +26% | −8,8% | 1,5 | 1,06 → 1,33 | +19% | 0,14 |
> | 1255 | BB explosão + IFR + Pôr do sol + Rompe 200 + Tendência | **+198% · −48,8%** | +44% · −10,0% | +30% | −6,3% | 2,8 | 1,61 → 1,44 | +17% | 0,17 |
> | 1256 | VWAP + IFR + MACD + Quinta ⚠️ | **+125% · −29,5%** | +38% · −7,0% | +28% | −10,2% | 1,5 | 1,02 → 1,37 | +18% | 0,11 |
> | 1257 | GPS médias + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+156% · −34,1%** | +38% · −6,6% | +27% | −7,7% | 1,8 | 0,92 → 1,41 | +20% | −0,01 |
> | 1258 | ADX + IFR + Pôr do sol + Tendência + Onda | **+282% · −47,5%** | +56% · −9,9% | +36% | −8,0% | 2,9 | 1,11 → 1,79 | +26% | 0,15 |
> | 1259 | Donchian + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+306% · −38,1%** | +57% · −7,6% | +36% | −9,1% | 2,6 | 1,00 → 1,72 | +28% | 0,30 |
> | 1260 | VWAP + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+136% · −33,0%** | +34% · −6,1% | +26% | −9,7% | 1,3 | 1,23 → 1,42 | +19% | 0,01 |

> [!example]- Combinações 1261 a 1290 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1261 | Donchian + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+281% · −32,3%** | +53% · −5,9% | +33% | −6,0% | 3,4 | 1,08 → 1,83 | +25% | 0,13 |
> | 1262 | Donchian + GPS médias + Pullback + Tendência | **+266% · −51,3%** | +66% · −14,0% | +39% | −6,3% | 4,1 | 1,91 → 1,32 | +18% | 0,23 |
> | 1263 | IFR + Pôr do sol + Quinta + Onda ⚠️ | **+126% · −20,2%** | +37% · −4,8% | +27% | −4,1% | 3,4 | 0,88 → 1,78 | +21% | −0,03 |
> | 1264 | ADX + GPS médias + IFR + Bollinger + Tendência | **+399% · −53,8%** | +70% · −11,1% | +39% | −7,1% | 3,7 | 1,65 → 1,72 | +27% | 0,37 |
> | 1265 | Donchian + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+305% · −44,6%** | +57% · −9,1% | +36% | −6,4% | 3,7 | 1,38 → 1,62 | +29% | 0,15 |
> | 1266 | BB explosão + MACD + Pôr do sol + Pullback + Tendência | **+180% · −53,5%** | +42% · −11,2% | +30% | −6,0% | 2,8 | 1,55 → 1,36 | +19% | 0,08 |
> | 1267 | ADX + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+236% · −36,9%** | +46% · −6,5% | +28% | −3,5% | 4,3 | 1,52 → 2,08 | +20% | 0,03 |
> | 1268 | Bollinger + Tendência + Onda | **+170% · −32,2%** | +56% · −10,6% | +35% | −9,9% | 2,3 | 1,05 → 1,58 | +26% | 0,27 |
> | 1269 | Donchian + GPS médias + MACD + Pullback | **+222% · −41,8%** | +57% · −10,3% | +34% | −8,7% | 2,5 | 1,63 → 1,32 | +22% | 0,17 |
> | 1270 | VWAP + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+124% · −33,9%** | +32% · −6,3% | +23% | −9,5% | 1,0 | 1,06 → 1,22 | +19% | 0,13 |
> | 1271 | Donchian + IFR + MACD + Bollinger + Tendência | **+392% · −45,9%** | +65% · −9,7% | +38% | −8,0% | 3,2 | 1,60 → 1,64 | +26% | 0,42 |
> | 1272 | ADX + BB explosão + IFR + Pullback + Tendência | **+287% · −65,6%** | +59% · −15,8% | +37% | −7,0% | 3,4 | 1,62 → 1,65 | +20% | 0,22 |
> | 1273 | VWAP + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+166% · −35,6%** | +38% · −6,9% | +26% | −5,6% | 2,3 | 1,55 → 1,22 | +17% | 0,13 |
> | 1274 | ADX + Donchian + IFR + MACD + Bollinger | **+378% · −45,4%** | +65% · −9,2% | +36% | −6,3% | 3,8 | 1,29 → 1,84 | +24% | 0,34 |
> | 1275 | VWAP + Donchian + IFR + 1ª vela 80 + Bollinger ⚠️ | **+321% · −41,6%** | +56% · −8,7% | +33% | −9,3% | 2,2 | 1,37 → 1,69 | +23% | 0,28 |
> | 1276 | VWAP + GPS médias + IFR + Quinta + Bollinger ⚠️ | **+230% · −42,5%** | +47% · −9,1% | +29% | −8,9% | 1,8 | 1,52 → 1,41 | +21% | 0,14 |
> | 1277 | MACD + Pôr do sol + Pullback + Rompe 200 + Onda | **+121% · −26,2%** | +31% · −4,5% | +25% | −6,2% | 1,9 | 0,97 → 1,43 | +22% | 0,03 |
> | 1278 | IFR + MACD | **+102% · −19,0%** | +54% · −9,0% | +37% | −9,9% | 2,5 | 1,05 → 1,58 | +27% | 0,44 |
> | 1279 | VWAP + Donchian + IFR + Pôr do sol + Onda | **+213% · −39,7%** | +48% · −8,1% | +31% | −8,6% | 2,1 | 0,95 → 1,46 | +20% | 0,16 |
> | 1280 | Donchian + MACD + Quinta + Bollinger + Tendência ⚠️ | **+298% · −43,4%** | +54% · −9,2% | +33% | −6,3% | 3,2 | 1,62 → 1,55 | +23% | 0,22 |
> | 1281 | VWAP + Donchian + MACD + Pullback + Bollinger | **+237% · −38,2%** | +47% · −7,5% | +29% | −10,0% | 1,7 | 1,40 → 1,35 | +20% | 0,24 |
> | 1282 | VWAP + IFR + MACD + Rompe 200 + Tendência | **+204% · −43,2%** | +45% · −8,9% | +32% | −9,0% | 2,2 | 1,30 → 1,32 | +22% | 0,32 |
> | 1283 | Donchian + MACD + Pôr do sol + Bollinger + Onda | **+246% · −33,7%** | +48% · −6,4% | +30% | −7,0% | 2,4 | 0,93 → 1,65 | +24% | 0,15 |
> | 1284 | Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+81% · −21,5%** | +29% · −4,9% | +23% | −5,0% | 2,0 | 1,06 → 1,21 | +23% | 0,01 |
> | 1285 | IFR + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+165% · −31,4%** | +38% · −5,6% | +28% | −6,4% | 2,4 | 0,92 → 1,60 | +23% | 0,09 |
> | 1286 | GPS médias + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+277% · −36,0%** | +53% · −7,2% | +34% | −7,1% | 3,0 | 1,32 → 1,68 | +30% | 0,11 |
> | 1287 | Donchian + GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+310% · −42,5%** | +59% · −9,0% | +34% | −7,8% | 2,8 | 1,62 → 1,57 | +24% | 0,28 |
> | 1288 | MACD + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+215% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,5 | 0,95 → 1,64 | +22% | 0,18 |
> | 1289 | ADX + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+158% · −35,6%** | +37% · −6,1% | +23% | −3,8% | 2,7 | 1,27 → 1,83 | +18% | 0,07 |
> | 1290 | VWAP + MACD + Quinta + Pullback ⚠️ | **+86% · −24,9%** | +30% · −6,1% | +24% | −9,5% | 1,2 | 1,22 → 1,10 | +16% | 0,01 |

> [!example]- Combinações 1291 a 1320 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1291 | Quinta + Pullback + Bollinger + Onda ⚠️ | **+129% · −20,0%** | +37% · −4,4% | +25% | −4,6% | 2,7 | 1,15 → 1,66 | +22% | −0,02 |
> | 1292 | GPS médias + Pôr do sol + Bollinger + Tendência | **+225% · −32,3%** | +54% · −7,4% | +32% | −4,8% | 4,0 | 1,86 → 1,47 | +23% | 0,13 |
> | 1293 | ADX + Rompe 200 + Bollinger + Tendência + Onda | **+271% · −48,0%** | +53% · −10,1% | +32% | −8,4% | 2,3 | 1,10 → 1,67 | +27% | 0,21 |
> | 1294 | VWAP + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+114% · −37,6%** | +31% · −7,5% | +24% | −4,9% | 2,3 | 1,45 → 1,08 | +16% | 0,05 |
> | 1295 | Donchian + GPS médias + IFR + Pôr do sol + Onda | **+275% · −42,3%** | +57% · −9,0% | +34% | −7,5% | 2,8 | 1,23 → 1,53 | +30% | 0,15 |
> | 1296 | Donchian + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+236% · −31,7%** | +45% · −5,8% | +27% | −4,3% | 3,3 | 1,71 → 1,80 | +21% | 0,05 |
> | 1297 | VWAP + IFR + MACD + Tendência + Onda | **+225% · −46,7%** | +50% · −9,8% | +35% | −10,3% | 2,2 | 0,97 → 1,44 | +27% | 0,37 |
> | 1298 | IFR + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+166% · −27,7%** | +38% · −5,4% | +28% | −5,5% | 2,8 | 0,85 → 1,73 | +22% | 0,04 |
> | 1299 | BB explosão + IFR + Quinta + Rompe 200 + Bollinger ⚠️ | **+183% · −32,2%** | +40% · −6,2% | +26% | −4,7% | 2,8 | 1,59 → 1,59 | +17% | 0,13 |
> | 1300 | 1ª vela 80 + Quinta + Pullback ⚠️ | **+81% · −18,6%** | +33% · −5,6% | +25% | −2,2% | 5,5 | 1,68 → 1,70 | +21% | −0,22 |
> | 1301 | ADX + VWAP + IFR + Bollinger + Tendência | **+321% · −52,7%** | +59% · −10,7% | +36% | −8,0% | 2,9 | 1,37 → 1,66 | +23% | 0,33 |
> | 1302 | ADX + Donchian + GPS médias + Pullback + Bollinger | **+350% · −50,5%** | +64% · −9,8% | +34% | −4,7% | 4,5 | 1,70 → 1,62 | +22% | 0,19 |
> | 1303 | Donchian + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+152% · −29,6%** | +37% · −5,4% | +25% | −5,2% | 2,3 | 1,04 → 1,42 | +22% | 0,01 |
> | 1304 | 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+169% · −29,2%** | +45% · −6,6% | +32% | −6,9% | 2,9 | 1,03 → 1,64 | +22% | −0,03 |
> | 1305 | ADX + GPS médias + Pullback + Bollinger + Tendência | **+346% · −55,0%** | +62% · −10,9% | +35% | −5,6% | 4,0 | 1,83 → 1,63 | +23% | 0,21 |
> | 1306 | Donchian + IFR + Quinta + Rompe 200 ⚠️ | **+181% · −26,8%** | +47% · −6,4% | +30% | −4,2% | 4,0 | 1,75 → 1,56 | +19% | 0,13 |
> | 1307 | Donchian + GPS médias + MACD + Pôr do sol + Rompe 200 | **+209% · −38,9%** | +47% · −7,9% | +29% | −8,1% | 2,0 | 1,43 → 1,28 | +22% | 0,13 |
> | 1308 | ADX + GPS médias + MACD + Quinta + Pullback ⚠️ | **+217% · −43,5%** | +48% · −8,7% | +30% | −5,2% | 3,3 | 1,50 → 1,54 | +25% | 0,04 |
> | 1309 | BB explosão + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+163% · −30,4%** | +45% · −7,4% | +30% | −6,2% | 2,7 | 1,25 → 1,77 | +23% | 0,06 |
> | 1310 | ADX + GPS médias + IFR + Rompe 200 + Bollinger | **+306% · −45,7%** | +58% · −9,5% | +32% | −5,1% | 3,8 | 1,51 → 1,70 | +25% | 0,28 |
> | 1311 | Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+239% · −30,9%** | +45% · −5,6% | +27% | −4,3% | 3,3 | 1,63 → 1,83 | +22% | 0,08 |
> | 1312 | MACD + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+152% · −24,6%** | +35% · −4,1% | +25% | −5,4% | 2,2 | 0,72 → 1,74 | +16% | 0,04 |
> | 1313 | VWAP + GPS médias + IFR + MACD + Rompe 200 | **+190% · −46,4%** | +45% · −10,2% | +30% | −12,0% | 1,4 | 1,24 → 1,24 | +22% | 0,29 |
> | 1314 | ADX + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+225% · −42,3%** | +47% · −7,9% | +31% | −5,9% | 3,1 | 1,43 → 1,74 | +25% | 0,05 |
> | 1315 | 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+177% · −23,7%** | +45% · −5,4% | +29% | −6,9% | 2,4 | 1,03 → 1,84 | +20% | 0,08 |
> | 1316 | BB explosão + IFR + Pôr do sol + Bollinger + Tendência | **+267% · −47,4%** | +51% · −8,8% | +32% | −5,8% | 3,3 | 1,66 → 1,65 | +20% | 0,19 |
> | 1317 | ADX + Donchian + Quinta + Rompe 200 + Bollinger ⚠️ | **+255% · −35,6%** | +50% · −6,4% | +28% | −3,8% | 4,0 | 1,49 → 1,74 | +21% | 0,10 |
> | 1318 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+238% · −34,0%** | +45% · −6,0% | +28% | −4,5% | 3,3 | 1,90 → 1,75 | +23% | 0,01 |
> | 1319 | ADX + GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+238% · −50,0%** | +51% · −10,0% | +32% | −5,4% | 3,5 | 1,60 → 1,55 | +24% | 0,09 |
> | 1320 | VWAP + MACD + Pôr do sol + Pullback + Rompe 200 | **+98% · −30,6%** | +28% · −5,6% | +23% | −8,6% | 1,1 | 1,24 → 1,07 | +18% | 0,05 |

> [!example]- Combinações 1321 a 1350 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1321 | VWAP + IFR + MACD + Pôr do sol + Bollinger | **+197% · −35,1%** | +41% · −6,8% | +28% | −8,9% | 1,7 | 1,11 → 1,55 | +18% | 0,20 |
> | 1322 | VWAP + Donchian + GPS médias + Quinta + Pullback ⚠️ | **+198% · −48,1%** | +46% · −10,5% | +29% | −8,2% | 1,9 | 1,62 → 1,11 | +16% | 0,05 |
> | 1323 | GPS médias + Quinta + Tendência ⚠️ | **+148% · −36,4%** | +53% · −11,8% | +34% | −5,6% | 3,8 | 1,82 → 1,23 | +21% | 0,03 |
> | 1324 | BB explosão + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+201% · −40,2%** | +44% · −8,3% | +30% | −8,9% | 2,0 | 1,17 → 1,59 | +23% | 0,23 |
> | 1325 | ADX + Donchian + Quinta + Rompe 200 + Tendência ⚠️ | **+263% · −54,2%** | +54% · −11,3% | +33% | −6,2% | 3,2 | 1,59 → 1,55 | +21% | 0,14 |
> | 1326 | MACD + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+163% · −28,9%** | +37% · −5,3% | +28% | −8,4% | 1,8 | 0,96 → 1,58 | +21% | 0,11 |
> | 1327 | VWAP + Pullback + Bollinger | **+95% · −24,4%** | +37% · −7,8% | +24% | −11,3% | 1,0 | 1,47 → 1,08 | +15% | 0,18 |
> | 1328 | VWAP + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+182% · −40,1%** | +41% · −7,9% | +30% | −9,3% | 1,9 | 1,19 → 1,41 | +24% | 0,13 |
> | 1329 | Pullback | **+32% · −9,1%** | +32% · −9,1% | +25% | −4,6% | 2,8 | 1,87 → 0,62 | +11% | — |
> | 1330 | Donchian + IFR + MACD + Pôr do sol | **+212% · −30,2%** | +53% · −8,0% | +33% | −6,5% | 3,1 | 1,33 → 1,63 | +24% | 0,20 |
> | 1331 | VWAP + IFR + Pôr do sol + Bollinger | **+154% · −26,9%** | +41% · −6,2% | +27% | −7,2% | 1,9 | 1,29 → 1,58 | +17% | 0,12 |
> | 1332 | Donchian + IFR + MACD + Quinta + Onda ⚠️ | **+250% · −37,3%** | +51% · −7,3% | +33% | −7,2% | 2,8 | 1,04 → 1,63 | +26% | 0,15 |
> | 1333 | ADX + Donchian + IFR + Pôr do sol + Quinta ⚠️ | **+268% · −36,8%** | +53% · −7,4% | +31% | −3,7% | 5,0 | 1,44 → 1,89 | +20% | 0,08 |
> | 1334 | ADX + Donchian + GPS médias + Pullback + Rompe 200 | **+266% · −53,4%** | +57% · −11,3% | +32% | −4,7% | 4,1 | 1,65 → 1,43 | +20% | 0,16 |
> | 1335 | BB explosão + GPS médias + IFR + Pôr do sol + Pullback | **+202% · −50,4%** | +47% · −10,5% | +30% | −5,6% | 3,0 | 1,69 → 1,39 | +18% | 0,05 |
> | 1336 | ADX + Quinta + Pullback + Tendência + Onda ⚠️ | **+227% · −46,5%** | +48% · −8,3% | +32% | −7,2% | 2,7 | 1,26 → 1,64 | +25% | 0,05 |
> | 1337 | GPS médias + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+187% · −36,0%** | +40% · −7,2% | +26% | −7,2% | 1,8 | 1,55 → 1,37 | +22% | 0,11 |
> | 1338 | VWAP + Donchian + IFR + MACD + Pôr do sol | **+217% · −38,4%** | +47% · −8,0% | +31% | −9,7% | 1,9 | 1,16 → 1,41 | +20% | 0,22 |
> | 1339 | VWAP + IFR + 1ª vela 80 + Bollinger ⚠️ | **+202% · −33,4%** | +49% · −8,4% | +31% | −9,7% | 1,9 | 1,22 → 1,74 | +21% | 0,27 |
> | 1340 | ADX + Donchian + MACD + Pullback + Tendência | **+324% · −60,7%** | +62% · −13,5% | +38% | −7,5% | 3,3 | 1,56 → 1,60 | +25% | 0,22 |
> | 1341 | Donchian + GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+262% · −43,2%** | +51% · −9,0% | +31% | −5,3% | 3,4 | 1,85 → 1,53 | +21% | −0,03 |
> | 1342 | GPS médias + Pôr do sol + Tendência | **+151% · −35,0%** | +54% · −11,2% | +34% | −5,7% | 3,7 | 1,74 → 1,27 | +22% | 0,07 |
> | 1343 | ADX + MACD + Bollinger + Tendência + Onda | **+302% · −51,4%** | +57% · −11,1% | +35% | −9,6% | 2,4 | 0,98 → 1,72 | +26% | 0,31 |
> | 1344 | VWAP + MACD + Pullback + Rompe 200 + Tendência | **+159% · −42,5%** | +38% · −8,7% | +29% | −8,1% | 2,0 | 1,45 → 1,15 | +18% | 0,19 |
> | 1345 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+237% · −25,9%** | +44% · −4,1% | +27% | −3,4% | 4,1 | 1,68 → 2,00 | +22% | 0,01 |
> | 1346 | GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+208% · −32,2%** | +52% · −8,0% | +32% | −6,7% | 2,9 | 1,54 → 1,72 | +28% | 0,10 |
> | 1347 | VWAP + Donchian + IFR + Quinta + Tendência ⚠️ | **+260% · −46,6%** | +53% · −9,5% | +34% | −6,6% | 3,3 | 1,53 → 1,40 | +19% | 0,19 |
> | 1348 | ADX + Donchian + Pôr do sol + Rompe 200 + Bollinger | **+258% · −34,7%** | +50% · −6,6% | +28% | −3,5% | 4,3 | 1,41 → 1,77 | +21% | 0,07 |
> | 1349 | Donchian + IFR + Quinta + Tendência ⚠️ | **+260% · −37,2%** | +61% · −9,0% | +38% | −6,3% | 3,9 | 1,81 → 1,60 | +22% | 0,20 |
> | 1350 | ADX + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+291% · −47,8%** | +55% · −8,7% | +36% | −6,9% | 3,3 | 1,47 → 1,76 | +27% | 0,10 |

> [!example]- Combinações 1351 a 1380 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1351 | BB explosão + IFR + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+248% · −48,2%** | +51% · −9,7% | +34% | −6,8% | 3,0 | 1,55 → 1,59 | +21% | 0,24 |
> | 1352 | MACD + Pôr do sol + Tendência | **+118% · −29,0%** | +44% · −9,6% | +32% | −8,5% | 2,3 | 1,33 → 1,40 | +27% | 0,19 |
> | 1353 | ADX + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+206% · −41,4%** | +43% · −7,3% | +29% | −5,6% | 2,9 | 1,85 → 1,71 | +22% | 0,04 |
> | 1354 | Donchian + IFR + MACD + Tendência + Onda | **+320% · −47,8%** | +62% · −10,2% | +39% | −9,7% | 2,7 | 1,20 → 1,57 | +33% | 0,42 |
> | 1355 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+239% · −35,7%** | +46% · −6,1% | +28% | −3,5% | 4,3 | 1,45 → 2,12 | +19% | 0,04 |
> | 1356 | VWAP + GPS médias + IFR + Quinta + Onda ⚠️ | **+187% · −42,4%** | +45% · −9,1% | +30% | −10,1% | 1,7 | 1,02 → 1,34 | +25% | 0,07 |
> | 1357 | ADX + IFR + Pôr do sol + Tendência | **+243% · −41,8%** | +59% · −10,3% | +37% | −7,2% | 3,3 | 1,50 → 1,83 | +25% | 0,18 |
> | 1358 | ADX + GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+186% · −43,3%** | +43% · −8,7% | +27% | −4,2% | 3,4 | 1,70 → 1,40 | +19% | 0,06 |
> | 1359 | ADX + Donchian + IFR + 1ª vela 80 + Tendência ⚠️ | **+411% · −53,7%** | +71% · −10,5% | +41% | −7,2% | 4,0 | 1,51 → 1,83 | +29% | 0,28 |
> | 1360 | VWAP + Donchian + Rompe 200 + Bollinger + Tendência | **+252% · −48,0%** | +51% · −10,1% | +31% | −7,0% | 2,6 | 1,52 → 1,26 | +17% | 0,30 |
> | 1361 | ADX + Donchian + IFR + Pôr do sol + Tendência | **+351% · −53,2%** | +65% · −10,6% | +38% | −6,6% | 3,8 | 1,56 → 1,76 | +26% | 0,22 |
> | 1362 | Donchian + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+223% · −42,2%** | +47% · −8,8% | +31% | −6,8% | 2,7 | 1,57 → 1,36 | +21% | 0,18 |
> | 1363 | ADX + Pôr do sol + Pullback + Rompe 200 + Tendência | **+205% · −42,2%** | +44% · −7,3% | +29% | −5,6% | 3,0 | 1,77 → 1,58 | +20% | 0,04 |
> | 1364 | BB explosão + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+198% · −51,5%** | +44% · −11,6% | +30% | −5,3% | 3,3 | 1,70 → 1,42 | +17% | 0,10 |
> | 1365 | VWAP + Donchian + IFR + Quinta + Rompe 200 ⚠️ | **+189% · −37,1%** | +43% · −7,6% | +28% | −7,3% | 2,1 | 1,42 → 1,31 | +17% | 0,12 |
> | 1366 | Donchian + Rompe 200 + Bollinger + Tendência + Onda | **+293% · −42,1%** | +55% · −8,5% | +33% | −7,7% | 2,6 | 1,32 → 1,51 | +26% | 0,25 |
> | 1367 | ADX + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+256% · −42,7%** | +50% · −7,9% | +33% | −6,0% | 3,3 | 1,64 → 1,73 | +23% | 0,07 |
> | 1368 | ADX + GPS médias + IFR + Rompe 200 + Tendência | **+309% · −57,5%** | +62% · −12,8% | +37% | −7,6% | 3,2 | 1,61 → 1,57 | +25% | 0,31 |
> | 1369 | ADX + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+302% · −46,3%** | +54% · −9,3% | +33% | −6,7% | 3,0 | 1,46 → 1,84 | +26% | 0,19 |
> | 1370 | BB explosão + IFR + Pôr do sol + Rompe 200 + Bollinger | **+186% · −32,2%** | +41% · −6,2% | +26% | −4,7% | 2,7 | 1,51 → 1,63 | +18% | 0,11 |
> | 1371 | VWAP + Donchian + IFR + Bollinger + Onda | **+283% · −40,9%** | +55% · −8,4% | +33% | −9,4% | 2,1 | 1,03 → 1,54 | +23% | 0,29 |
> | 1372 | VWAP + Donchian + GPS médias + Pullback + Rompe 200 | **+196% · −52,4%** | +46% · −12,1% | +29% | −9,5% | 1,7 | 1,59 → 1,03 | +15% | 0,20 |
> | 1373 | Donchian + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+358% · −41,0%** | +61% · −8,1% | +36% | −7,0% | 3,3 | 1,25 → 1,72 | +31% | 0,26 |
> | 1374 | VWAP + Donchian + Quinta + Bollinger + Tendência ⚠️ | **+254% · −45,0%** | +50% · −9,0% | +31% | −5,8% | 3,1 | 1,54 → 1,35 | +18% | 0,18 |
> | 1375 | Donchian + GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+344% · −42,1%** | +59% · −8,4% | +33% | −6,3% | 3,2 | 1,86 → 1,65 | +22% | 0,11 |
> | 1376 | Donchian + IFR + Bollinger + Tendência | **+342% · −39,3%** | +71% · −10,1% | +40% | −7,3% | 3,7 | 1,82 → 1,69 | +23% | 0,37 |
> | 1377 | IFR + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+213% · −30,5%** | +44% · −5,4% | +31% | −7,5% | 2,5 | 0,86 → 1,80 | +21% | 0,07 |
> | 1378 | VWAP + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+143% · −32,4%** | +40% · −8,0% | +29% | −9,6% | 1,6 | 1,15 → 1,49 | +22% | 0,20 |
> | 1379 | ADX + Pôr do sol + Pullback + Bollinger | **+171% · −31,1%** | +45% · −7,2% | +27% | −4,3% | 3,2 | 1,56 → 1,93 | +17% | 0,03 |
> | 1380 | 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+83% · −27,6%** | +34% · −9,2% | +25% | −4,7% | 2,6 | 1,56 → 1,43 | +19% | −0,01 |

> [!example]- Combinações 1381 a 1410 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1381 | MACD + 1ª vela 80 + Pullback ⚠️ | **+111% · −17,3%** | +41% · −4,9% | +30% | −7,9% | 2,2 | 1,36 → 1,65 | +25% | −0,07 |
> | 1382 | VWAP + IFR + Pôr do sol + Pullback | **+123% · −23,1%** | +36% · −5,2% | +27% | −5,4% | 2,6 | 1,56 → 1,40 | +16% | −0,02 |
> | 1383 | VWAP + IFR + Rompe 200 + Tendência | **+166% · −37,7%** | +46% · −9,3% | +32% | −8,6% | 2,3 | 1,46 → 1,28 | +18% | 0,27 |
> | 1384 | ADX + Donchian + GPS médias + IFR + Pullback | **+348% · −54,7%** | +67% · −11,5% | +38% | −4,9% | 5,0 | 1,68 → 1,65 | +24% | 0,21 |
> | 1385 | BB explosão + IFR + 1ª vela 80 + Quinta ⚠️ | **+160% · −30,5%** | +44% · −7,4% | +30% | −6,2% | 2,7 | 1,32 → 1,74 | +22% | −0,01 |
> | 1386 | ADX + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+203% · −39,6%** | +44% · −7,3% | +29% | −5,5% | 3,0 | 1,18 → 1,76 | +22% | 0,12 |
> | 1387 | ADX + MACD + Pôr do sol + Rompe 200 + Bollinger | **+193% · −40,8%** | +41% · −7,7% | +26% | −5,2% | 2,5 | 1,04 → 1,80 | +20% | 0,09 |
> | 1388 | VWAP + Donchian + IFR + Bollinger + Tendência | **+339% · −46,2%** | +61% · −9,6% | +36% | −7,3% | 3,2 | 1,55 → 1,49 | +21% | 0,36 |
> | 1389 | Donchian + IFR + Rompe 200 + Tendência + Onda | **+296% · −44,6%** | +58% · −9,2% | +36% | −8,5% | 2,8 | 1,34 → 1,54 | +28% | 0,33 |
> | 1390 | 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+131% · −32,6%** | +47% · −11,0% | +33% | −7,4% | 2,7 | 1,54 → 1,48 | +23% | 0,13 |
> | 1391 | VWAP + 1ª vela 80 + Pullback + Rompe 200 + Tendência ⚠️ | **+179% · −49,7%** | +40% · −11,3% | +29% | −7,3% | 2,2 | 1,57 → 1,31 | +18% | 0,12 |
> | 1392 | Donchian + BB explosão + IFR + Pullback + Tendência | **+297% · −62,5%** | +60% · −14,3% | +37% | −6,3% | 3,9 | 1,76 → 1,48 | +17% | 0,30 |
> | 1393 | GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+225% · −43,3%** | +46% · −8,9% | +30% | −4,5% | 3,9 | 1,69 → 1,46 | +23% | 0,11 |
> | 1394 | VWAP + GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+167% · −49,7%** | +41% · −11,0% | +28% | −7,6% | 2,0 | 1,54 → 1,06 | +17% | 0,11 |
> | 1395 | ADX + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+338% · −49,6%** | +59% · −10,3% | +36% | −7,6% | 3,0 | 1,29 → 1,84 | +27% | 0,29 |
> | 1396 | VWAP + Pullback + Tendência + Onda | **+144% · −37,6%** | +43% · −9,4% | +32% | −9,7% | 2,0 | 1,10 → 1,22 | +25% | 0,21 |
> | 1397 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+159% · −34,1%** | +37% · −6,4% | +27% | −6,9% | 2,0 | 1,32 → 1,58 | +22% | −0,02 |
> | 1398 | VWAP + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+138% · −28,8%** | +35% · −4,8% | +26% | −7,3% | 1,8 | 0,80 → 1,48 | +17% | 0,00 |
> | 1399 | VWAP + GPS médias + IFR + Bollinger + Tendência | **+309% · −48,3%** | +58% · −9,3% | +35% | −8,4% | 2,7 | 1,59 → 1,41 | +22% | 0,34 |
> | 1400 | Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+126% · −30,5%** | +38% · −7,0% | +28% | −7,6% | 2,0 | 1,11 → 1,35 | +25% | 0,04 |
> | 1401 | ADX + MACD + Pôr do sol + Pullback + Tendência | **+239% · −47,6%** | +48% · −8,8% | +32% | −6,4% | 3,1 | 1,54 → 1,67 | +24% | 0,07 |
> | 1402 | MACD + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+212% · −40,1%** | +45% · −8,0% | +32% | −8,8% | 2,2 | 1,00 → 1,55 | +23% | 0,23 |
> | 1403 | VWAP + IFR + Tendência + Onda | **+189% · −40,2%** | +52% · −10,2% | +36% | −10,2% | 2,3 | 1,02 → 1,42 | +27% | 0,31 |
> | 1404 | ADX + Donchian + MACD + Rompe 200 + Bollinger | **+288% · −42,0%** | +55% · −8,0% | +31% | −5,9% | 3,1 | 1,24 → 1,68 | +24% | 0,22 |
> | 1405 | VWAP + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+209% · −44,7%** | +44% · −9,3% | +32% | −9,2% | 2,1 | 1,39 → 1,41 | +23% | 0,17 |
> | 1406 | MACD + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+120% · −23,2%** | +31% · −4,1% | +25% | −4,9% | 2,4 | 0,97 → 1,57 | +20% | −0,03 |
> | 1407 | Donchian + GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+260% · −48,4%** | +52% · −10,9% | +31% | −6,2% | 2,9 | 1,79 → 1,43 | +20% | 0,12 |
> | 1408 | ADX + Donchian + Pôr do sol + Rompe 200 + Tendência | **+265% · −52,7%** | +54% · −10,7% | +33% | −6,2% | 3,2 | 1,53 → 1,57 | +22% | 0,13 |
> | 1409 | Donchian + GPS médias + IFR + Pôr do sol + Tendência | **+334% · −51,0%** | +63% · −10,2% | +37% | −5,5% | 4,5 | 1,76 → 1,50 | +23% | 0,25 |
> | 1410 | ADX + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+200% · −43,5%** | +45% · −8,7% | +31% | −7,6% | 2,3 | 1,06 → 1,57 | +26% | 0,07 |

> [!example]- Combinações 1411 a 1440 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1411 | ADX + MACD + Quinta + Bollinger ⚠️ | **+175% · −39,3%** | +46% · −9,6% | +28% | −6,1% | 2,5 | 0,99 → 1,83 | +19% | 0,16 |
> | 1412 | MACD + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+165% · −37,9%** | +39% · −7,3% | +29% | −8,3% | 2,0 | 1,05 → 1,41 | +25% | 0,10 |
> | 1413 | Donchian + GPS médias + IFR + MACD + Pôr do sol | **+283% · −42,0%** | +57% · −8,9% | +34% | −8,3% | 2,6 | 1,46 → 1,50 | +26% | 0,22 |
> | 1414 | VWAP + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+95% · −29,3%** | +28% · −5,1% | +23% | −7,8% | 1,3 | 0,88 → 1,19 | +16% | −0,01 |
> | 1415 | Donchian + MACD + Pôr do sol + Rompe 200 | **+142% · −26,9%** | +41% · −6,7% | +27% | −6,2% | 2,2 | 1,27 → 1,35 | +21% | 0,10 |
> | 1416 | GPS médias + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+296% · −38,8%** | +53% · −7,4% | +32% | −4,5% | 4,3 | 1,81 → 1,63 | +25% | 0,09 |
> | 1417 | VWAP + GPS médias + Pôr do sol + Pullback + Rompe 200 | **+127% · −42,9%** | +34% · −9,2% | +24% | −8,3% | 1,3 | 1,58 → 0,92 | +15% | 0,04 |
> | 1418 | Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+172% · −29,2%** | +46% · −6,6% | +32% | −6,9% | 2,9 | 0,98 → 1,66 | +22% | 0,11 |
> | 1419 | VWAP + GPS médias + Pullback + Bollinger + Tendência | **+258% · −47,8%** | +51% · −10,3% | +32% | −7,1% | 2,7 | 1,75 → 1,26 | +18% | 0,21 |
> | 1420 | Donchian + Pôr do sol + Quinta + Pullback + Tendência ⚠️ | **+226% · −37,1%** | +45% · −7,3% | +30% | −3,1% | 5,4 | 2,08 → 1,50 | +18% | 0,03 |
> | 1421 | ADX + MACD + Quinta + Pullback + Rompe 200 ⚠️ | **+157% · −36,8%** | +37% · −6,4% | +26% | −4,6% | 2,9 | 1,41 → 1,62 | +20% | 0,01 |
> | 1422 | Donchian + Pôr do sol + Bollinger + Onda | **+200% · −26,5%** | +50% · −6,6% | +29% | −5,9% | 2,8 | 0,98 → 1,68 | +23% | 0,05 |
> | 1423 | Donchian + Quinta + Rompe 200 + Tendência ⚠️ | **+181% · −42,6%** | +48% · −9,4% | +31% | −5,8% | 3,1 | 1,81 → 1,31 | +17% | 0,13 |
> | 1424 | GPS médias + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+295% · −39,6%** | +52% · −8,2% | +31% | −7,0% | 2,6 | 1,68 → 1,73 | +25% | 0,24 |
> | 1425 | GPS médias + Pullback + Rompe 200 + Tendência + Onda | **+219% · −45,3%** | +48% · −8,9% | +32% | −6,6% | 2,9 | 1,46 → 1,30 | +25% | 0,17 |
> | 1426 | IFR + MACD + Pôr do sol + Rompe 200 + Onda | **+167% · −31,5%** | +38% · −5,6% | +28% | −6,4% | 2,4 | 0,86 → 1,61 | +23% | 0,13 |
> | 1427 | VWAP + GPS médias + Pullback + Tendência | **+178% · −49,2%** | +50% · −13,9% | +33% | −8,3% | 2,4 | 1,65 → 1,10 | +17% | 0,17 |
> | 1428 | Donchian + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+286% · −32,9%** | +52% · −6,1% | +33% | −6,9% | 2,9 | 1,35 → 1,79 | +25% | 0,18 |
> | 1429 | Donchian + Pôr do sol + Quinta + Pullback + Bollinger ⚠️ | **+210% · −24,6%** | +41% · −3,9% | +25% | −1,8% | 6,9 | 2,27 → 1,87 | +18% | −0,03 |
> | 1430 | ADX + MACD + Quinta + Tendência + Onda ⚠️ | **+227% · −50,1%** | +50% · −9,7% | +34% | −8,9% | 2,3 | 0,95 → 1,63 | +26% | 0,13 |
> | 1431 | VWAP + MACD + Pullback + Tendência | **+148% · −39,8%** | +43% · −10,4% | +32% | −8,9% | 2,1 | 1,39 → 1,19 | +20% | 0,22 |
> | 1432 | Donchian + 1ª vela 80 + Quinta + Pullback + Tendência ⚠️ | **+283% · −42,6%** | +52% · −8,7% | +33% | −3,8% | 5,5 | 1,96 → 1,66 | +21% | −0,01 |
> | 1433 | VWAP + Donchian + MACD + Pôr do sol + Rompe 200 | **+150% · −38,1%** | +38% · −7,7% | +26% | −10,2% | 1,3 | 1,08 → 1,16 | +19% | 0,16 |
> | 1434 | Donchian + MACD + Rompe 200 + Bollinger + Tendência | **+297% · −43,1%** | +54% · −9,1% | +33% | −7,6% | 2,7 | 1,59 → 1,46 | +22% | 0,31 |
> | 1435 | ADX + Pôr do sol + Quinta + Bollinger ⚠️ | **+144% · −32,7%** | +41% · −7,2% | +24% | −4,4% | 2,7 | 1,10 → 1,95 | +16% | 0,11 |
> | 1436 | MACD + Pullback + Rompe 200 + Onda | **+109% · −25,9%** | +34% · −5,9% | +27% | −8,3% | 1,7 | 0,92 → 1,36 | +24% | 0,11 |
> | 1437 | Donchian + IFR + 1ª vela 80 + Tendência ⚠️ | **+323% · −36,5%** | +70% · −9,4% | +42% | −7,0% | 4,2 | 1,68 → 1,73 | +27% | 0,30 |
> | 1438 | ADX + IFR + MACD + Rompe 200 + Tendência | **+284% · −49,9%** | +56% · −10,8% | +36% | −9,1% | 2,5 | 1,38 → 1,67 | +27% | 0,28 |
> | 1439 | Donchian + GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+393% · −48,8%** | +70% · −10,2% | +41% | −6,5% | 4,3 | 1,70 → 1,60 | +26% | 0,33 |
> | 1440 | Donchian + GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+249% · −36,7%** | +49% · −7,4% | +28% | −5,7% | 2,6 | 1,75 → 1,38 | +19% | 0,10 |

> [!example]- Combinações 1441 a 1470 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1441 | VWAP + Pullback + Rompe 200 + Tendência | **+121% · −44,0%** | +38% · −11,6% | +28% | −6,9% | 2,2 | 1,61 → 1,00 | +14% | 0,15 |
> | 1442 | GPS médias + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+250% · −45,2%** | +51% · −9,4% | +33% | −7,8% | 2,6 | 1,50 → 1,43 | +26% | 0,24 |
> | 1443 | Donchian + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+271% · −32,8%** | +49% · −6,2% | +30% | −6,8% | 2,5 | 1,41 → 1,78 | +25% | 0,11 |
> | 1444 | ADX + IFR + Rompe 200 + Tendência | **+239% · −44,2%** | +59% · −11,5% | +37% | −8,7% | 2,8 | 1,53 → 1,69 | +25% | 0,26 |
> | 1445 | 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+170% · −34,7%** | +46% · −8,5% | +32% | −8,4% | 2,4 | 1,03 → 1,53 | +23% | 0,19 |
> | 1446 | VWAP + Donchian + GPS médias + Pullback + Tendência | **+259% · −60,3%** | +57% · −13,6% | +35% | −7,7% | 2,9 | 1,65 → 1,18 | +17% | 0,25 |
> | 1447 | GPS médias + MACD + Pullback + Tendência + Onda | **+247% · −46,5%** | +52% · −9,1% | +35% | −7,9% | 2,8 | 1,32 → 1,40 | +27% | 0,20 |
> | 1448 | VWAP + Donchian + Pullback + Tendência | **+198% · −54,1%** | +54% · −12,9% | +34% | −6,6% | 3,2 | 1,60 → 1,19 | +15% | 0,25 |
> | 1449 | ADX + MACD + Pullback + Tendência + Onda | **+256% · −53,5%** | +53% · −9,9% | +35% | −8,9% | 2,5 | 1,13 → 1,63 | +27% | 0,17 |
> | 1450 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+265% · −41,7%** | +51% · −8,7% | +31% | −5,3% | 3,4 | 1,79 → 1,56 | +22% | −0,00 |
> | 1451 | VWAP + Donchian + IFR + 1ª vela 80 + Tendência ⚠️ | **+318% · −48,6%** | +60% · −10,2% | +38% | −7,9% | 3,1 | 1,46 → 1,54 | +24% | 0,31 |
> | 1452 | Donchian + MACD + Bollinger + Tendência + Onda | **+322% · −45,4%** | +59% · −9,5% | +36% | −8,9% | 2,6 | 1,17 → 1,56 | +31% | 0,36 |
> | 1453 | Donchian + MACD + Quinta + Bollinger + Onda ⚠️ | **+244% · −33,5%** | +48% · −6,4% | +30% | −7,0% | 2,4 | 0,99 → 1,63 | +25% | 0,12 |
> | 1454 | Donchian + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+273% · −40,0%** | +53% · −7,9% | +34% | −6,3% | 3,4 | 1,22 → 1,63 | +30% | 0,07 |
> | 1455 | Donchian + GPS médias + IFR + Bollinger + Tendência | **+419% · −50,9%** | +71% · −10,6% | +39% | −6,3% | 4,2 | 1,81 → 1,56 | +23% | 0,38 |
> | 1456 | ADX + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+179% · −38,9%** | +41% · −7,1% | +27% | −5,6% | 2,6 | 1,55 → 1,60 | +21% | 0,07 |
> | 1457 | ADX + Donchian + GPS médias + IFR + Rompe 200 | **+307% · −55,1%** | +64% · −11,8% | +36% | −5,3% | 4,3 | 1,49 → 1,56 | +24% | 0,31 |
> | 1458 | VWAP + IFR + Rompe 200 + Tendência + Onda | **+201% · −43,4%** | +46% · −8,8% | +32% | −9,1% | 2,1 | 1,09 → 1,37 | +26% | 0,27 |
> | 1459 | MACD + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+162% · −25,5%** | +37% · −4,3% | +28% | −6,8% | 2,2 | 0,96 → 1,69 | +20% | −0,03 |
> | 1460 | VWAP + Donchian + MACD + Pôr do sol + Bollinger | **+210% · −39,5%** | +44% · −7,9% | +27% | −10,4% | 1,4 | 1,12 → 1,37 | +19% | 0,22 |
> | 1461 | Donchian + BB explosão + IFR + Pullback + Rompe 200 | **+227% · −51,7%** | +49% · −11,2% | +31% | −4,9% | 3,7 | 1,69 → 1,42 | +14% | 0,22 |
> | 1462 | BB explosão + IFR + MACD + Quinta + Tendência ⚠️ | **+221% · −53,2%** | +48% · −11,0% | +33% | −7,5% | 2,7 | 1,42 → 1,48 | +22% | 0,22 |
> | 1463 | VWAP + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+182% · −33,4%** | +41% · −6,4% | +29% | −8,9% | 1,8 | 0,77 → 1,63 | +20% | 0,13 |
> | 1464 | Donchian + IFR + Quinta + Onda ⚠️ | **+208% · −30,2%** | +53% · −7,2% | +33% | −5,6% | 3,7 | 1,11 → 1,66 | +26% | 0,05 |
> | 1465 | Donchian + GPS médias + IFR + Quinta + Onda ⚠️ | **+272% · −41,2%** | +57% · −8,7% | +34% | −7,5% | 2,8 | 1,27 → 1,51 | +29% | 0,12 |
> | 1466 | VWAP + IFR + Quinta + Pullback + Onda ⚠️ | **+159% · −30,5%** | +37% · −5,6% | +28% | −7,3% | 2,0 | 1,09 → 1,45 | +19% | 0,01 |
> | 1467 | VWAP + GPS médias + IFR + MACD + Tendência | **+256% · −54,1%** | +56% · −11,4% | +36% | −10,8% | 2,2 | 1,37 → 1,33 | +24% | 0,39 |
> | 1468 | BB explosão + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+173% · −47,4%** | +40% · −10,3% | +28% | −5,2% | 3,0 | 1,51 → 1,43 | +18% | 0,06 |
> | 1469 | BB explosão + IFR + MACD + Pôr do sol + Tendência | **+223% · −51,8%** | +49% · −10,5% | +33% | −7,6% | 2,7 | 1,37 → 1,50 | +23% | 0,24 |
> | 1470 | ADX + Donchian + GPS médias + Quinta + Pullback ⚠️ | **+269% · −50,4%** | +56% · −10,2% | +32% | −4,4% | 4,4 | 1,70 → 1,51 | +21% | 0,07 |

> [!example]- Combinações 1471 a 1500 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1471 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+109% · −33,0%** | +29% · −6,4% | +23% | −6,3% | 1,6 | 1,40 → 1,43 | +16% | −0,03 |
> | 1472 | Donchian + IFR + MACD + Rompe 200 + Tendência | **+301% · −44,8%** | +57% · −9,7% | +36% | −8,4% | 2,8 | 1,56 → 1,49 | +23% | 0,39 |
> | 1473 | VWAP + IFR + MACD + Pullback + Onda | **+186% · −37,5%** | +42% · −7,3% | +31% | −9,8% | 1,8 | 0,96 → 1,45 | +21% | 0,19 |
> | 1474 | ADX + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+209% · −44,4%** | +45% · −7,9% | +30% | −6,3% | 2,8 | 1,31 → 1,68 | +23% | 0,11 |
> | 1475 | ADX + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+228% · −41,2%** | +47% · −7,8% | +31% | −5,8% | 3,1 | 1,37 → 1,76 | +26% | 0,09 |
> | 1476 | ADX + IFR + Pullback + Rompe 200 + Onda | **+227% · −38,0%** | +48% · −7,2% | +31% | −6,2% | 3,0 | 1,15 → 1,74 | +23% | 0,12 |
> | 1477 | ADX + Donchian + GPS médias + Pullback + Tendência | **+340% · −65,2%** | +68% · −14,9% | +39% | −5,9% | 4,4 | 1,74 → 1,50 | +22% | 0,23 |
> | 1478 | VWAP + Donchian + Pôr do sol + Quinta + Tendência ⚠️ | **+190% · −45,2%** | +43% · −8,8% | +29% | −5,2% | 3,1 | 1,47 → 1,25 | +18% | 0,09 |
> | 1479 | GPS médias + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+235% · −36,8%** | +45% · −7,2% | +28% | −5,4% | 2,8 | 1,89 → 1,58 | +21% | 0,11 |
> | 1480 | VWAP + Donchian + GPS médias + Pôr do sol + Pullback | **+200% · −46,5%** | +46% · −9,9% | +29% | −8,4% | 1,9 | 1,57 → 1,13 | +17% | 0,06 |
> | 1481 | Donchian + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+148% · −31,0%** | +35% · −5,7% | +24% | −2,4% | 4,5 | 2,13 → 1,38 | +15% | 0,00 |
> | 1482 | ADX + Donchian + IFR + 1ª vela 80 + Pullback ⚠️ | **+364% · −40,4%** | +63% · −8,4% | +37% | −4,5% | 5,3 | 1,59 → 1,97 | +24% | 0,09 |
> | 1483 | ADX + Donchian + IFR + Rompe 200 + Tendência | **+343% · −55,2%** | +65% · −11,9% | +38% | −7,8% | 3,2 | 1,59 → 1,66 | +23% | 0,31 |
> | 1484 | ADX + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+279% · −46,0%** | +55% · −8,9% | +36% | −7,5% | 3,1 | 1,18 → 1,76 | +28% | 0,10 |
> | 1485 | Donchian + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+268% · −33,4%** | +49% · −5,7% | +30% | −6,1% | 2,8 | 1,06 → 1,81 | +24% | 0,04 |
> | 1486 | ADX + IFR + 1ª vela 80 + Pullback ⚠️ | **+239% · −33,5%** | +57% · −7,7% | +35% | −4,8% | 4,7 | 1,47 → 2,06 | +22% | 0,02 |
> | 1487 | ADX + IFR + Pôr do sol + Rompe 200 + Bollinger | **+242% · −37,1%** | +47% · −7,2% | +28% | −4,0% | 3,9 | 1,40 → 2,01 | +21% | 0,12 |
> | 1488 | ADX + IFR + Rompe 200 + Tendência + Onda | **+276% · −50,3%** | +56% · −10,8% | +36% | −9,2% | 2,5 | 1,15 → 1,69 | +29% | 0,23 |
> | 1489 | GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+144% · −26,0%** | +40% · −6,1% | +24% | −4,2% | 2,7 | 1,87 → 1,45 | +21% | 0,01 |
> | 1490 | VWAP + IFR + Pôr do sol + Rompe 200 + Onda | **+138% · −30,2%** | +35% · −5,7% | +26% | −8,7% | 1,5 | 0,82 → 1,37 | +20% | 0,11 |
> | 1491 | Donchian + Rompe 200 + Bollinger + Tendência | **+249% · −37,6%** | +58% · −9,0% | +33% | −6,8% | 3,0 | 1,82 → 1,45 | +18% | 0,26 |
> | 1492 | VWAP + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+217% · −37,9%** | +44% · −7,4% | +29% | −6,6% | 2,5 | 1,44 → 1,54 | +22% | 0,12 |
> | 1493 | Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+109% · −18,2%** | +33% · −3,8% | +23% | −4,4% | 2,3 | 0,68 → 1,76 | +15% | −0,02 |
> | 1494 | VWAP + GPS médias + IFR + Pôr do sol + Onda | **+189% · −42,3%** | +45% · −9,1% | +30% | −10,1% | 1,7 | 0,98 → 1,36 | +25% | 0,12 |
> | 1495 | ADX + GPS médias + MACD + Pôr do sol + Pullback | **+220% · −42,1%** | +48% · −8,3% | +30% | −5,0% | 3,5 | 1,44 → 1,57 | +24% | 0,02 |
> | 1496 | 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+236% · −34,7%** | +55% · −8,4% | +35% | −7,8% | 2,8 | 1,08 → 1,75 | +22% | 0,23 |
> | 1497 | VWAP + GPS médias + IFR + Pôr do sol + Bollinger | **+233% · −42,5%** | +47% · −9,1% | +29% | −8,8% | 1,8 | 1,46 → 1,43 | +22% | 0,16 |
> | 1498 | VWAP + Donchian + IFR + Quinta + Onda ⚠️ | **+211% · −39,6%** | +47% · −8,0% | +31% | −8,7% | 2,1 | 1,00 → 1,44 | +21% | 0,10 |
> | 1499 | VWAP + IFR + Bollinger | **+139% · −26,9%** | +49% · −8,8% | +30% | −10,3% | 1,7 | 1,22 → 1,49 | +18% | 0,30 |
> | 1500 | ADX + IFR + Quinta + Bollinger + Onda ⚠️ | **+271% · −39,2%** | +51% · −7,5% | +31% | −5,5% | 3,3 | 0,96 → 1,97 | +22% | 0,11 |

> [!example]- Combinações 1501 a 1530 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1501 | ADX + Pullback + Rompe 200 + Tendência + Onda | **+225% · −46,5%** | +49% · −8,9% | +32% | −8,0% | 2,5 | 1,25 → 1,55 | +27% | 0,13 |
> | 1502 | VWAP + Donchian + Quinta + Pullback + Onda ⚠️ | **+167% · −39,1%** | +40% · −7,7% | +28% | −9,0% | 1,6 | 1,09 → 1,26 | +19% | 0,05 |
> | 1503 | GPS médias + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+330% · −44,5%** | +57% · −9,7% | +34% | −9,4% | 2,3 | 1,45 → 1,73 | +28% | 0,30 |
> | 1504 | Donchian + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+365% · −44,6%** | +61% · −9,5% | +36% | −6,9% | 3,4 | 1,52 → 1,67 | +27% | 0,32 |
> | 1505 | Donchian + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+252% · −28,5%** | +55% · −6,6% | +32% | −4,0% | 4,8 | 1,90 → 1,92 | +22% | 0,03 |
> | 1506 | Donchian + MACD + Pôr do sol + Tendência + Onda | **+247% · −43,4%** | +52% · −9,2% | +34% | −8,2% | 2,6 | 1,10 → 1,49 | +29% | 0,24 |
> | 1507 | GPS médias + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+325% · −42,1%** | +61% · −8,4% | +39% | −7,5% | 3,5 | 1,30 → 1,63 | +32% | 0,26 |
> | 1508 | VWAP + Donchian + GPS médias + IFR + Pôr do sol | **+241% · −45,5%** | +53% · −9,8% | +32% | −9,7% | 2,0 | 1,41 → 1,32 | +21% | 0,17 |
> | 1509 | VWAP + Donchian + IFR + 1ª vela 80 + Pullback ⚠️ | **+275% · −42,1%** | +52% · −8,6% | +33% | −7,9% | 2,6 | 1,54 → 1,60 | +21% | 0,13 |
> | 1510 | VWAP + Donchian + IFR + MACD + Quinta ⚠️ | **+215% · −38,4%** | +47% · −8,0% | +31% | −9,7% | 1,9 | 1,21 → 1,40 | +21% | 0,19 |
> | 1511 | MACD + Pôr do sol + Rompe 200 + Tendência + Onda | **+167% · −37,9%** | +39% · −7,3% | +29% | −8,3% | 2,0 | 1,00 → 1,43 | +24% | 0,15 |
> | 1512 | ADX + GPS médias + Pullback + Tendência | **+249% · −55,4%** | +64% · −15,0% | +38% | −6,8% | 3,7 | 1,74 → 1,49 | +23% | 0,18 |
> | 1513 | VWAP + MACD + Rompe 200 + Bollinger + Tendência | **+194% · −40,8%** | +42% · −8,1% | +29% | −8,9% | 1,8 | 1,28 → 1,26 | +20% | 0,31 |
> | 1514 | VWAP + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+137% · −37,7%** | +35% · −7,6% | +27% | −7,8% | 1,8 | 1,25 → 1,15 | +19% | 0,14 |
> | 1515 | ADX + Donchian + IFR + Bollinger + Onda | **+370% · −45,0%** | +66% · −9,2% | +36% | −6,4% | 3,7 | 1,08 → 1,86 | +25% | 0,26 |
> | 1516 | VWAP + Pôr do sol + Pullback + Rompe 200 | **+63% · −32,0%** | +25% · −8,0% | +20% | −8,6% | 0,9 | 1,40 → 0,74 | +13% | 0,02 |
> | 1517 | ADX + GPS médias + IFR + MACD + Tendência | **+333% · −59,0%** | +66% · −13,2% | +40% | −8,7% | 3,1 | 1,43 → 1,61 | +30% | 0,38 |
> | 1518 | ADX + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+237% · −39,0%** | +46% · −7,1% | +28% | −3,8% | 4,0 | 1,48 → 1,95 | +22% | 0,09 |
> | 1519 | VWAP + IFR + Rompe 200 + Bollinger + Onda | **+195% · −34,8%** | +42% · −6,8% | +28% | −9,4% | 1,6 | 0,92 → 1,48 | +22% | 0,23 |
> | 1520 | MACD + Rompe 200 + Bollinger + Onda | **+140% · −28,5%** | +39% · −6,5% | +27% | −9,2% | 1,5 | 0,69 → 1,53 | +17% | 0,20 |
> | 1521 | ADX + GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+321% · −43,3%** | +60% · −9,1% | +36% | −5,0% | 4,6 | 1,59 → 1,82 | +28% | 0,11 |
> | 1522 | BB explosão + IFR + Quinta + Tendência ⚠️ | **+183% · −49,3%** | +50% · −12,8% | +34% | −6,7% | 3,1 | 1,61 → 1,48 | +18% | 0,17 |
> | 1523 | Donchian + GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+402% · −45,2%** | +66% · −9,9% | +36% | −7,9% | 3,0 | 1,66 → 1,73 | +26% | 0,28 |
> | 1524 | ADX + Pôr do sol + Pullback + Bollinger + Onda | **+217% · −35,5%** | +45% · −6,9% | +28% | −5,3% | 2,8 | 1,01 → 1,85 | +19% | 0,04 |
> | 1525 | Donchian + BB explosão + Quinta + Pullback + Tendência ⚠️ | **+223% · −63,2%** | +50% · −14,3% | +32% | −4,6% | 4,1 | 1,77 → 1,32 | +14% | 0,14 |
> | 1526 | MACD + Pullback + Bollinger + Onda | **+163% · −25,3%** | +43% · −6,0% | +29% | −7,6% | 2,1 | 0,98 → 1,65 | +23% | 0,13 |
> | 1527 | GPS médias + MACD + Pôr do sol + Rompe 200 + Bollinger | **+190% · −35,9%** | +41% · −7,2% | +26% | −7,2% | 1,8 | 1,47 → 1,41 | +23% | 0,10 |
> | 1528 | Quinta + Tendência + Onda ⚠️ | **+115% · −26,6%** | +44% · −8,3% | +32% | −8,8% | 2,2 | 1,00 → 1,42 | +26% | −0,04 |
> | 1529 | Donchian + GPS médias + IFR + Bollinger + Onda | **+353% · −44,5%** | +65% · −9,7% | +36% | −8,3% | 2,8 | 1,29 → 1,60 | +31% | 0,29 |
> | 1530 | ADX + Donchian + GPS médias + Pôr do sol + Pullback | **+272% · −49,4%** | +57% · −9,8% | +32% | −4,4% | 4,4 | 1,64 → 1,54 | +22% | 0,04 |

> [!example]- Combinações 1531 a 1560 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1531 | VWAP + MACD + Pullback + Rompe 200 | **+87% · −30,8%** | +30% · −7,4% | +24% | −11,3% | 1,0 | 1,19 → 0,98 | +17% | 0,13 |
> | 1532 | ADX + IFR + MACD + Tendência + Onda | **+303% · −53,1%** | +60% · −11,8% | +39% | −10,4% | 2,5 | 1,03 → 1,72 | +29% | 0,32 |
> | 1533 | Pôr do sol + Quinta ⚠️ | **+26% · −4,9%** | +19% · −2,0% | +17% | −1,9% | 2,1 | 1,45 → 1,34 | +13% | 0,22 |
> | 1534 | ADX + Donchian + IFR + 1ª vela 80 + Quinta ⚠️ | **+323% · −38,5%** | +59% · −7,9% | +35% | −4,4% | 5,0 | 1,37 → 1,96 | +23% | 0,08 |
> | 1535 | ADX + VWAP + Pullback + Bollinger + Tendência | **+267% · −53,6%** | +52% · −10,4% | +32% | −6,4% | 3,0 | 1,53 → 1,53 | +21% | 0,22 |
> | 1536 | ADX + IFR + Tendência + Onda | **+261% · −48,2%** | +65% · −12,7% | +41% | −10,4% | 2,7 | 1,08 → 1,74 | +30% | 0,28 |
> | 1537 | ADX + Donchian + MACD + Bollinger + Tendência | **+374% · −59,0%** | +66% · −12,8% | +38% | −8,2% | 3,0 | 1,41 → 1,68 | +27% | 0,37 |
> | 1538 | VWAP + IFR + MACD + Bollinger | **+181% · −35,1%** | +47% · −8,8% | +30% | −11,3% | 1,5 | 1,07 → 1,49 | +20% | 0,37 |
> | 1539 | VWAP + GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+181% · −36,9%** | +40% · −7,2% | +25% | −7,6% | 1,7 | 1,73 → 1,18 | +17% | 0,06 |
> | 1540 | IFR + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+216% · −30,4%** | +44% · −5,8% | +31% | −7,5% | 2,5 | 0,81 → 1,82 | +20% | 0,15 |
> | 1541 | GPS médias + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+274% · −38,8%** | +50% · −7,8% | +31% | −8,1% | 2,2 | 1,66 → 1,65 | +26% | 0,12 |
> | 1542 | VWAP + IFR + Quinta ⚠️ | **+90% · −20,7%** | +37% · −6,3% | +27% | −8,5% | 1,7 | 1,16 → 1,31 | +16% | −0,06 |
> | 1543 | GPS médias + MACD + Rompe 200 + Tendência | **+186% · −44,1%** | +51% · −11,0% | +33% | −8,4% | 2,4 | 1,53 → 1,23 | +23% | 0,29 |
> | 1544 | Donchian + MACD + Pôr do sol + Bollinger | **+201% · −27,3%** | +49% · −7,1% | +29% | −6,3% | 2,5 | 1,34 → 1,64 | +23% | 0,13 |
> | 1545 | VWAP + Donchian + Pôr do sol + Rompe 200 + Tendência | **+188% · −52,6%** | +44% · −10,7% | +29% | −6,2% | 2,6 | 1,45 → 1,16 | +17% | 0,17 |
> | 1546 | Donchian + IFR + MACD + Quinta ⚠️ | **+210% · −30,4%** | +53% · −8,0% | +33% | −6,6% | 3,1 | 1,40 → 1,61 | +25% | 0,18 |
> | 1547 | ADX + IFR + MACD + Pôr do sol + Rompe 200 | **+206% · −38,7%** | +44% · −7,1% | +29% | −5,6% | 3,0 | 1,11 → 1,78 | +21% | 0,11 |
> | 1548 | IFR + Rompe 200 + Onda | **+114% · −23,4%** | +43% · −7,1% | +30% | −7,7% | 2,3 | 0,83 → 1,53 | +26% | 0,23 |
> | 1549 | ADX + Donchian + IFR + Quinta + Tendência ⚠️ | **+348% · −54,6%** | +64% · −11,1% | +38% | −6,6% | 3,8 | 1,61 → 1,74 | +25% | 0,21 |
> | 1550 | ADX + IFR + MACD + Tendência | **+268% · −49,8%** | +65% · −12,7% | +41% | −10,3% | 2,7 | 1,31 → 1,71 | +29% | 0,38 |
> | 1551 | Donchian + BB explosão + IFR + Pôr do sol + Pullback | **+232% · −47,6%** | +49% · −9,7% | +31% | −4,1% | 4,4 | 1,68 → 1,55 | +17% | 0,08 |
> | 1552 | GPS médias + IFR + MACD + Bollinger + Onda | **+294% · −43,8%** | +56% · −9,4% | +34% | −9,5% | 2,2 | 1,10 → 1,62 | +27% | 0,30 |
> | 1553 | GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+206% · −34,4%** | +52% · −8,7% | +32% | −7,9% | 2,5 | 1,56 → 1,58 | +25% | 0,25 |
> | 1554 | ADX + Quinta + Rompe 200 + Bollinger ⚠️ | **+144% · −35,7%** | +41% · −8,2% | +25% | −4,9% | 2,4 | 1,19 → 1,72 | +19% | 0,10 |
> | 1555 | VWAP + MACD + Pôr do sol + Rompe 200 + Tendência | **+139% · −37,1%** | +36% · −7,8% | +27% | −7,9% | 1,8 | 1,19 → 1,16 | +20% | 0,17 |
> | 1556 | Donchian + GPS médias + IFR + Pôr do sol | **+242% · −36,1%** | +61% · −10,0% | +35% | −6,5% | 3,3 | 1,64 → 1,49 | +23% | 0,16 |
> | 1557 | VWAP + 1ª vela 80 + Pullback + Tendência ⚠️ | **+166% · −44,3%** | +45% · −12,0% | +32% | −7,8% | 2,5 | 1,52 → 1,37 | +20% | 0,09 |
> | 1558 | ADX + GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+235% · −41,4%** | +50% · −8,1% | +30% | −4,1% | 4,3 | 1,47 → 1,72 | +24% | 0,08 |
> | 1559 | GPS médias + MACD + Pôr do sol + Tendência + Onda | **+222% · −40,0%** | +49% · −8,3% | +33% | −7,8% | 2,6 | 1,12 → 1,41 | +26% | 0,17 |
> | 1560 | ADX + Donchian + Pôr do sol + Tendência + Onda | **+282% · −54,9%** | +59% · −11,0% | +36% | −7,6% | 3,0 | 1,11 → 1,63 | +26% | 0,15 |

> [!example]- Combinações 1561 a 1590 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1561 | Donchian + MACD + 1ª vela 80 + Pullback + Tendência ⚠️ | **+315% · −46,5%** | +57% · −10,1% | +36% | −6,3% | 3,8 | 1,67 → 1,59 | +25% | 0,17 |
> | 1562 | Donchian + IFR + Rompe 200 + Tendência | **+259% · −40,7%** | +61% · −9,9% | +38% | −7,8% | 3,2 | 1,77 → 1,49 | +20% | 0,38 |
> | 1563 | VWAP + IFR + Pullback + Bollinger + Onda | **+223% · −31,9%** | +45% · −5,8% | +30% | −8,0% | 2,1 | 1,13 → 1,57 | +21% | 0,16 |
> | 1564 | VWAP + GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+289% · −50,8%** | +58% · −11,2% | +37% | −9,4% | 2,5 | 1,49 → 1,47 | +25% | 0,28 |
> | 1565 | Donchian + GPS médias + IFR + Rompe 200 + Onda | **+269% · −43,3%** | +57% · −9,3% | +34% | −8,4% | 2,5 | 1,26 → 1,44 | +28% | 0,31 |
> | 1566 | ADX + IFR + Pôr do sol + Bollinger | **+225% · −34,3%** | +54% · −8,3% | +31% | −4,2% | 4,3 | 1,28 → 2,12 | +19% | 0,14 |
> | 1567 | BB explosão + IFR + Pôr do sol + Tendência | **+186% · −47,7%** | +50% · −12,2% | +34% | −6,8% | 3,1 | 1,55 → 1,51 | +19% | 0,19 |
> | 1568 | ADX + Donchian + GPS médias + IFR + Quinta ⚠️ | **+311% · −52,2%** | +63% · −10,8% | +36% | −4,6% | 5,0 | 1,51 → 1,63 | +25% | 0,19 |
> | 1569 | VWAP + GPS médias + IFR + Tendência | **+221% · −50,7%** | +59% · −13,4% | +37% | −9,7% | 2,5 | 1,50 → 1,29 | +21% | 0,35 |
> | 1570 | VWAP + Donchian + IFR + Rompe 200 + Tendência | **+257% · −52,1%** | +54% · −10,4% | +34% | −7,7% | 2,8 | 1,51 → 1,32 | +18% | 0,33 |
> | 1571 | VWAP + IFR + Pullback | **+111% · −23,2%** | +42% · −7,3% | +30% | −7,9% | 2,2 | 1,50 → 1,31 | +17% | 0,03 |
> | 1572 | Donchian + IFR + Bollinger + Onda | **+282% · −32,6%** | +63% · −8,0% | +36% | −6,7% | 3,4 | 1,15 → 1,77 | +28% | 0,25 |
> | 1573 | VWAP + Donchian + IFR + MACD + Bollinger | **+286% · −43,3%** | +54% · −9,1% | +33% | −10,6% | 1,9 | 1,24 → 1,49 | +22% | 0,38 |
> | 1574 | VWAP + IFR + MACD + Tendência | **+191% · −40,0%** | +52% · −10,4% | +36% | −10,1% | 2,3 | 1,24 → 1,36 | +25% | 0,41 |
> | 1575 | ADX + MACD + Pôr do sol + Bollinger | **+178% · −38,1%** | +47% · −9,2% | +28% | −5,7% | 2,7 | 0,90 → 1,88 | +18% | 0,14 |
> | 1576 | ADX + Donchian + IFR + Tendência + Onda | **+356% · −57,8%** | +70% · −11,6% | +41% | −9,1% | 3,1 | 1,21 → 1,71 | +30% | 0,33 |
> | 1577 | ADX + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+257% · −45,8%** | +51% · −9,0% | +34% | −6,9% | 3,1 | 1,26 → 1,76 | +26% | 0,11 |
> | 1578 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+253% · −37,2%** | +48% · −7,1% | +31% | −3,7% | 5,0 | 1,72 → 1,69 | +23% | 0,04 |
> | 1579 | BB explosão + IFR + Pullback | **+128% · −38,7%** | +48% · −13,2% | +32% | −5,2% | 3,7 | 1,66 → 1,49 | +15% | 0,07 |
> | 1580 | ADX + GPS médias + Pôr do sol + Pullback + Rompe 200 | **+189% · −41,9%** | +43% · −8,3% | +27% | −3,9% | 3,6 | 1,63 → 1,43 | +20% | 0,02 |
> | 1581 | Donchian + GPS médias + IFR + MACD + Bollinger | **+360% · −46,7%** | +64% · −10,2% | +36% | −9,3% | 2,5 | 1,52 → 1,56 | +26% | 0,37 |
> | 1582 | ADX + Pôr do sol + Pullback + Tendência + Onda | **+230% · −46,0%** | +49% · −8,4% | +32% | −7,3% | 2,7 | 1,21 → 1,66 | +24% | 0,06 |
> | 1583 | BB explosão + 1ª vela 80 + Pullback + Bollinger + Tendência ⚠️ | **+268% · −49,2%** | +51% · −9,6% | +32% | −4,8% | 4,0 | 1,77 → 1,63 | +19% | 0,12 |
> | 1584 | Donchian + GPS médias + IFR + MACD + Quinta ⚠️ | **+280% · −42,0%** | +56% · −8,9% | +34% | −8,3% | 2,6 | 1,51 → 1,48 | +25% | 0,20 |
> | 1585 | Donchian + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+268% · −35,1%** | +50% · −6,4% | +30% | −7,4% | 2,3 | 1,07 → 1,71 | +25% | 0,19 |
> | 1586 | Donchian + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+286% · −42,0%** | +52% · −8,5% | +33% | −3,8% | 5,4 | 1,90 → 1,68 | +22% | 0,03 |
> | 1587 | ADX + VWAP + Quinta + Bollinger + Tendência ⚠️ | **+236% · −50,9%** | +49% · −9,6% | +30% | −6,3% | 2,8 | 1,32 → 1,54 | +21% | 0,19 |
> | 1588 | VWAP + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+94% · −35,5%** | +28% · −7,0% | +23% | −9,2% | 1,1 | 0,95 → 1,06 | +19% | 0,04 |
> | 1589 | ADX + GPS médias + IFR + Tendência | **+294% · −55,9%** | +73% · −15,6% | +42% | −8,3% | 3,6 | 1,56 → 1,62 | +28% | 0,39 |
> | 1590 | Donchian + GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+308% · −49,6%** | +59% · −10,7% | +36% | −5,4% | 4,2 | 1,72 → 1,49 | +23% | 0,10 |

> [!example]- Combinações 1591 a 1620 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1591 | MACD + Pôr do sol + Rompe 200 | **+58% · −13,4%** | +27% · −3,7% | +22% | −5,7% | 1,6 | 0,89 → 1,23 | +20% | −0,01 |
> | 1592 | ADX + Donchian + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+321% · −39,2%** | +60% · −7,5% | +35% | −5,1% | 4,3 | 1,36 → 1,86 | +25% | 0,21 |
> | 1593 | VWAP + BB explosão + IFR + 1ª vela 80 + Pullback ⚠️ | **+194% · −47,2%** | +44% · −10,2% | +30% | −9,0% | 1,9 | 1,34 → 1,48 | +18% | 0,12 |
> | 1594 | Donchian + GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+305% · −53,8%** | +60% · −12,2% | +36% | −6,3% | 3,6 | 1,68 → 1,42 | +22% | 0,27 |
> | 1595 | MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+101% · −21,6%** | +32% · −4,3% | +25% | −6,8% | 1,7 | 1,05 → 1,56 | +18% | 0,01 |
> | 1596 | Donchian + GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+207% · −39,4%** | +46% · −8,0% | +29% | −8,1% | 2,0 | 1,49 → 1,26 | +21% | 0,13 |
> | 1597 | Donchian + GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+230% · −44,8%** | +48% · −9,5% | +29% | −6,7% | 2,4 | 1,62 → 1,42 | +21% | 0,07 |
> | 1598 | Donchian + GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+292% · −43,4%** | +56% · −8,9% | +34% | −8,7% | 2,4 | 1,59 → 1,51 | +25% | 0,14 |
> | 1599 | MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+198% · −36,7%** | +51% · −9,1% | +36% | −9,9% | 2,4 | 0,91 → 1,59 | +23% | 0,29 |
> | 1600 | ADX + GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+231% · −45,0%** | +50% · −9,3% | +31% | −4,4% | 4,0 | 1,49 → 1,60 | +23% | 0,15 |
> | 1601 | BB explosão + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+154% · −31,6%** | +38% · −5,8% | +27% | −5,7% | 2,5 | 0,91 → 1,58 | +22% | −0,00 |
> | 1602 | VWAP + Donchian + MACD + Pôr do sol + Tendência | **+212% · −49,5%** | +48% · −11,2% | +32% | −8,6% | 2,2 | 1,26 → 1,27 | +22% | 0,28 |
> | 1603 | BB explosão + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+200% · −51,1%** | +45% · −10,3% | +31% | −6,5% | 2,8 | 1,31 → 1,49 | +23% | 0,11 |
> | 1604 | Donchian + BB explosão + 1ª vela 80 + Pullback + Tendência ⚠️ | **+277% · −60,5%** | +57% · −13,6% | +35% | −5,2% | 4,3 | 1,67 → 1,49 | +18% | 0,18 |
> | 1605 | ADX + Donchian + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+327% · −38,5%** | +60% · −7,9% | +35% | −4,1% | 5,4 | 1,32 → 1,98 | +22% | 0,12 |
> | 1606 | GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+235% · −39,7%** | +58% · −10,5% | +36% | −10,9% | 2,2 | 1,33 → 1,61 | +30% | 0,30 |
> | 1607 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+312% · −48,0%** | +60% · −10,2% | +35% | −5,4% | 4,2 | 1,67 → 1,51 | +24% | 0,16 |
> | 1608 | Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+74% · −22,0%** | +27% · −4,7% | +21% | −2,4% | 3,3 | 1,19 → 1,63 | +17% | 0,01 |
> | 1609 | VWAP + Donchian + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+241% · −44,5%** | +49% · −9,4% | +31% | −9,2% | 2,0 | 1,33 → 1,50 | +21% | 0,25 |
> | 1610 | VWAP + GPS médias + MACD + Quinta + Tendência ⚠️ | **+190% · −49,7%** | +45% · −10,1% | +31% | −9,9% | 1,8 | 1,35 → 1,19 | +22% | 0,17 |
> | 1611 | VWAP + Donchian + MACD + Quinta + Bollinger ⚠️ | **+207% · −39,2%** | +44% · −7,8% | +27% | −10,2% | 1,4 | 1,19 → 1,35 | +20% | 0,19 |
> | 1612 | VWAP + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+136% · −30,0%** | +35% · −5,7% | +26% | −8,7% | 1,5 | 0,87 → 1,35 | +21% | 0,07 |
> | 1613 | IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+236% · −28,2%** | +54% · −6,4% | +33% | −7,0% | 3,0 | 0,93 → 2,00 | +21% | 0,21 |
> | 1614 | Donchian + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+276% · −39,4%** | +54% · −7,9% | +34% | −6,3% | 3,4 | 1,18 → 1,64 | +29% | 0,16 |
> | 1615 | ADX + GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+234% · −53,5%** | +51% · −11,5% | +32% | −5,8% | 3,3 | 1,62 → 1,44 | +22% | 0,13 |
> | 1616 | Donchian + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+179% · −33,2%** | +41% · −6,3% | +28% | −6,2% | 2,4 | 0,89 → 1,54 | +22% | 0,04 |
> | 1617 | ADX + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+206% · −46,6%** | +45% · −8,7% | +31% | −7,5% | 2,4 | 1,34 → 1,56 | +24% | 0,12 |
> | 1618 | VWAP + IFR + Rompe 200 | **+92% · −23,4%** | +37% · −7,8% | +27% | −10,0% | 1,4 | 1,14 → 1,15 | +17% | 0,21 |
> | 1619 | BB explosão + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+156% · −41,2%** | +37% · −8,4% | +27% | −7,8% | 1,8 | 1,34 → 1,45 | +19% | 0,07 |
> | 1620 | Donchian + MACD + Rompe 200 + Bollinger + Onda | **+243% · −36,1%** | +48% · −7,1% | +30% | −8,2% | 2,0 | 0,99 → 1,54 | +27% | 0,24 |

> [!example]- Combinações 1621 a 1650 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1621 | VWAP + IFR + MACD + Rompe 200 | **+126% · −31,8%** | +38% · −7,7% | +28% | −11,3% | 1,4 | 1,01 → 1,26 | +21% | 0,27 |
> | 1622 | Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+122% · −17,9%** | +35% · −3,4% | +23% | −3,5% | 2,9 | 1,31 → 1,90 | +17% | 0,08 |
> | 1623 | BB explosão + IFR + MACD + Quinta + Bollinger ⚠️ | **+213% · −37,5%** | +45% · −7,5% | +29% | −7,0% | 2,3 | 1,30 → 1,64 | +22% | 0,17 |
> | 1624 | VWAP + Donchian + Quinta + Rompe 200 + Tendência ⚠️ | **+186% · −55,5%** | +43% · −10,9% | +29% | −6,2% | 2,6 | 1,50 → 1,15 | +16% | 0,14 |
> | 1625 | MACD + Pôr do sol + Tendência + Onda | **+155% · −34,4%** | +44% · −8,3% | +32% | −9,2% | 2,1 | 0,90 → 1,49 | +25% | 0,18 |
> | 1626 | IFR + MACD + Rompe 200 + Onda | **+152% · −31,4%** | +43% · −7,4% | +31% | −8,3% | 2,2 | 0,81 → 1,55 | +25% | 0,25 |
> | 1627 | MACD + Quinta + Pullback + Onda ⚠️ | **+108% · −22,9%** | +34% · −5,0% | +27% | −6,3% | 2,2 | 0,92 → 1,49 | +22% | −0,04 |
> | 1628 | Donchian + IFR + MACD + Bollinger | **+282% · −33,8%** | +62% · −9,2% | +36% | −7,8% | 2,9 | 1,43 → 1,71 | +27% | 0,37 |
> | 1629 | VWAP + Donchian + IFR + Tendência + Onda | **+273% · −47,9%** | +59% · −10,3% | +37% | −9,0% | 2,7 | 1,16 → 1,43 | +28% | 0,37 |
> | 1630 | Donchian + GPS médias + MACD + Pullback + Onda | **+252% · −45,7%** | +54% · −9,9% | +34% | −8,9% | 2,4 | 1,23 → 1,39 | +29% | 0,20 |
> | 1631 | ADX + Pullback + Rompe 200 + Bollinger + Onda | **+215% · −37,5%** | +45% · −7,5% | +28% | −6,0% | 2,5 | 1,07 → 1,70 | +22% | 0,12 |
> | 1632 | Donchian + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+312% · −37,4%** | +66% · −9,6% | +37% | −6,0% | 4,1 | 1,71 → 1,73 | +25% | 0,25 |
> | 1633 | GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+156% · −33,3%** | +43% · −8,2% | +28% | −4,7% | 3,2 | 1,83 → 1,49 | +22% | −0,12 |
> | 1634 | Donchian + GPS médias + Rompe 200 + Bollinger + Tendência | **+326% · −49,3%** | +61% · −9,7% | +34% | −5,9% | 3,6 | 1,81 → 1,37 | +19% | 0,30 |
> | 1635 | VWAP + Donchian + Quinta + Pullback + Bollinger ⚠️ | **+206% · −34,4%** | +43% · −6,5% | +26% | −6,3% | 2,2 | 1,69 → 1,34 | +16% | 0,07 |
> | 1636 | VWAP + Donchian + GPS médias + IFR + Bollinger | **+311% · −49,7%** | +61% · −11,3% | +34% | −10,6% | 2,0 | 1,48 → 1,39 | +21% | 0,34 |
> | 1637 | ADX + VWAP + IFR + 1ª vela 80 + Tendência ⚠️ | **+297% · −50,2%** | +58% · −9,9% | +37% | −7,7% | 3,1 | 1,26 → 1,70 | +24% | 0,25 |
> | 1638 | Donchian + GPS médias + IFR + Rompe 200 + Tendência | **+326% · −54,8%** | +64% · −11,7% | +38% | −6,8% | 3,7 | 1,77 → 1,41 | +21% | 0,38 |
> | 1639 | ADX + Bollinger + Tendência + Onda | **+254% · −47,0%** | +61% · −11,8% | +36% | −9,4% | 2,5 | 1,01 → 1,73 | +28% | 0,27 |
> | 1640 | BB explosão + IFR + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+326% · −47,5%** | +58% · −8,9% | +35% | −6,4% | 3,5 | 1,60 → 1,75 | +23% | 0,28 |
> | 1641 | VWAP + IFR + MACD + Rompe 200 + Onda | **+160% · −37,1%** | +39% · −7,3% | +29% | −11,1% | 1,4 | 0,76 → 1,37 | +23% | 0,27 |
> | 1642 | Donchian + GPS médias + Pullback + Tendência + Onda | **+294% · −53,4%** | +61% · −11,4% | +37% | −7,0% | 3,5 | 1,47 → 1,39 | +26% | 0,24 |
> | 1643 | 1ª vela 80 + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+165% · −27,8%** | +36% · −4,7% | +25% | −6,1% | 2,0 | 0,86 → 1,76 | +15% | 0,04 |
> | 1644 | ADX + IFR + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+175% · −32,8%** | +40% · −6,2% | +26% | −4,1% | 3,3 | 1,36 → 1,88 | +19% | 0,07 |
> | 1645 | GPS médias + Pullback + Bollinger + Tendência + Onda | **+295% · −41,2%** | +55% · −7,5% | +34% | −6,2% | 3,4 | 1,50 → 1,49 | +27% | 0,17 |
> | 1646 | VWAP + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+180% · −33,4%** | +41% · −6,4% | +29% | −8,9% | 1,9 | 0,82 → 1,62 | +21% | 0,04 |
> | 1647 | Donchian + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+301% · −40,3%** | +54% · −7,7% | +33% | −9,5% | 2,1 | 0,94 → 1,73 | +24% | 0,28 |
> | 1648 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Tendência ⚠️ | **+260% · −40,0%** | +50% · −6,9% | +33% | −4,7% | 4,2 | 1,63 → 1,85 | +24% | 0,02 |
> | 1649 | BB explosão + IFR + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+237% · −36,0%** | +46% · −7,2% | +29% | −5,7% | 2,9 | 1,47 → 1,88 | +22% | 0,08 |
> | 1650 | ADX + GPS médias + IFR + MACD + Quinta ⚠️ | **+259% · −45,3%** | +55% · −9,3% | +34% | −5,7% | 3,6 | 1,30 → 1,65 | +27% | 0,18 |

> [!example]- Combinações 1651 a 1680 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1651 | MACD + 1ª vela 80 + Bollinger ⚠️ | **+139% · −25,7%** | +48% · −8,2% | +30% | −10,3% | 1,7 | 0,99 → 1,79 | +16% | 0,31 |
> | 1652 | ADX + IFR + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+222% · −37,2%** | +46% · −6,5% | +30% | −4,1% | 4,1 | 1,26 → 1,98 | +22% | 0,07 |
> | 1653 | ADX + IFR + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+255% · −42,9%** | +51% · −8,2% | +33% | −6,1% | 3,3 | 1,09 → 1,86 | +25% | 0,20 |
> | 1654 | Donchian + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+238% · −26,9%** | +55% · −6,3% | +34% | −4,8% | 4,3 | 1,54 → 1,91 | +25% | 0,10 |
> | 1655 | ADX + IFR + MACD + 1ª vela 80 + Quinta ⚠️ | **+255% · −41,0%** | +50% · −7,6% | +33% | −5,3% | 3,8 | 1,10 → 1,95 | +22% | 0,10 |
> | 1656 | VWAP + IFR + Pôr do sol + Tendência + Onda | **+205% · −40,2%** | +45% · −7,9% | +32% | −7,9% | 2,5 | 1,05 → 1,46 | +24% | 0,17 |
> | 1657 | GPS médias + Pôr do sol + Rompe 200 + Tendência + Onda | **+196% · −38,5%** | +45% · −7,4% | +30% | −6,5% | 2,6 | 1,26 → 1,32 | +25% | 0,12 |
> | 1658 | ADX + Pullback + Rompe 200 + Tendência | **+188% · −45,4%** | +50% · −11,1% | +33% | −7,0% | 2,8 | 1,73 → 1,51 | +20% | 0,11 |
> | 1659 | VWAP + IFR + MACD + Pôr do sol + Tendência | **+208% · −40,0%** | +45% · −8,1% | +32% | −7,8% | 2,5 | 1,27 → 1,41 | +23% | 0,24 |
> | 1660 | ADX + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+205% · −36,5%** | +44% · −6,4% | +29% | −4,3% | 3,9 | 1,12 → 1,89 | +19% | 0,09 |
> | 1661 | VWAP + Pôr do sol + Pullback + Rompe 200 + Onda | **+95% · −34,9%** | +29% · −6,8% | +23% | −9,3% | 1,1 | 0,89 → 1,07 | +18% | 0,07 |
> | 1662 | VWAP + GPS médias + Pôr do sol + Rompe 200 + Tendência | **+169% · −48,1%** | +41% · −10,5% | +28% | −7,5% | 2,0 | 1,49 → 1,07 | +18% | 0,13 |
> | 1663 | ADX + Donchian + IFR + MACD + Pôr do sol | **+296% · −42,3%** | +58% · −8,3% | +34% | −5,5% | 3,9 | 1,22 → 1,78 | +22% | 0,18 |
> | 1664 | ADX + Donchian + Bollinger + Tendência | **+326% · −55,4%** | +73% · −15,1% | +39% | −7,6% | 3,5 | 1,55 → 1,71 | +25% | 0,34 |
> | 1665 | Donchian + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+272% · −35,3%** | +50% · −6,8% | +30% | −7,9% | 2,2 | 1,38 → 1,68 | +25% | 0,23 |
> | 1666 | Donchian + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+230% · −38,3%** | +45% · −7,6% | +30% | −6,4% | 2,7 | 1,58 → 1,58 | +22% | 0,11 |
> | 1667 | BB explosão + IFR + 1ª vela 80 + Tendência ⚠️ | **+234% · −47,9%** | +59% · −12,0% | +38% | −7,5% | 3,4 | 1,49 → 1,64 | +23% | 0,27 |
> | 1668 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+275% · −33,1%** | +49% · −6,2% | +30% | −7,0% | 2,4 | 1,34 → 1,81 | +24% | 0,16 |
> | 1669 | Donchian + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+196% · −39,5%** | +41% · −8,1% | +27% | −3,6% | 3,9 | 1,90 → 1,65 | +19% | −0,02 |
> | 1670 | ADX + Donchian + IFR + Pullback + Rompe 200 | **+298% · −42,4%** | +56% · −7,8% | +33% | −4,4% | 4,7 | 1,69 → 1,75 | +21% | 0,15 |
> | 1671 | ADX + VWAP + IFR + Quinta + Bollinger ⚠️ | **+235% · −39,2%** | +48% · −7,5% | +29% | −4,7% | 3,5 | 1,18 → 1,75 | +17% | 0,17 |
> | 1672 | Donchian + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+230% · −30,7%** | +45% · −5,4% | +30% | −5,3% | 3,2 | 1,63 → 1,69 | +24% | −0,02 |
> | 1673 | ADX + Donchian + Quinta + Tendência + Onda ⚠️ | **+280% · −55,6%** | +59% · −11,6% | +36% | −7,6% | 3,0 | 1,16 → 1,62 | +27% | 0,13 |
> | 1674 | MACD + Quinta + Tendência + Onda ⚠️ | **+153% · −34,4%** | +43% · −8,3% | +32% | −9,2% | 2,1 | 0,96 → 1,47 | +25% | 0,10 |
> | 1675 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+129% · −40,8%** | +33% · −8,6% | +24% | −4,7% | 2,3 | 1,51 → 1,46 | +17% | −0,01 |
> | 1676 | ADX + IFR + Rompe 200 + Bollinger | **+223% · −37,3%** | +54% · −9,0% | +31% | −5,5% | 3,3 | 1,33 → 1,93 | +23% | 0,23 |
> | 1677 | VWAP + IFR + MACD + Bollinger + Onda | **+224% · −40,1%** | +46% · −8,2% | +31% | −10,9% | 1,6 | 0,80 → 1,54 | +22% | 0,33 |
> | 1678 | MACD + Rompe 200 + Tendência | **+117% · −30,3%** | +44% · −9,9% | +32% | −10,5% | 1,8 | 1,37 → 1,25 | +23% | 0,26 |
> | 1679 | Donchian + GPS médias + Pullback + Rompe 200 + Onda | **+225% · −44,2%** | +50% · −9,3% | +31% | −7,8% | 2,3 | 1,37 → 1,28 | +24% | 0,19 |
> | 1680 | IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+199% · −30,3%** | +50% · −7,0% | +35% | −9,6% | 2,3 | 0,77 → 1,77 | +21% | 0,26 |

> [!example]- Combinações 1681 a 1710 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1681 | IFR + MACD + Pôr do sol + Onda | **+154% · −27,7%** | +43% · −6,7% | +31% | −7,2% | 2,5 | 0,74 → 1,69 | +23% | 0,13 |
> | 1682 | VWAP + Donchian + GPS médias + IFR + Quinta ⚠️ | **+239% · −46,6%** | +53% · −9,8% | +32% | −9,7% | 2,0 | 1,46 → 1,30 | +20% | 0,15 |
> | 1683 | IFR + Pôr do sol + Onda | **+115% · −19,6%** | +43% · −6,3% | +30% | −5,9% | 3,0 | 0,74 → 1,73 | +23% | 0,02 |
> | 1684 | ADX + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+330% · −42,7%** | +58% · −8,3% | +35% | −5,8% | 3,8 | 0,89 → 2,03 | +23% | 0,22 |
> | 1685 | Donchian + IFR + 1ª vela 80 + Onda ⚠️ | **+261% · −31,6%** | +62% · −7,4% | +38% | −7,9% | 3,1 | 1,04 → 1,78 | +29% | 0,24 |
> | 1686 | VWAP + Donchian + IFR + Quinta ⚠️ | **+177% · −32,6%** | +48% · −8,3% | +31% | −8,3% | 2,2 | 1,34 → 1,37 | +19% | 0,09 |
> | 1687 | VWAP + IFR + Tendência | **+154% · −35,4%** | +55% · −11,4% | +37% | −9,9% | 2,5 | 1,38 → 1,33 | +21% | 0,32 |
> | 1688 | ADX + IFR + MACD + Pullback + Onda | **+259% · −41,4%** | +52% · −8,1% | +34% | −7,0% | 3,1 | 1,02 → 1,79 | +23% | 0,13 |
> | 1689 | BB explosão + IFR + Quinta + Tendência + Onda ⚠️ | **+216% · −50,1%** | +49% · −10,1% | +33% | −7,6% | 2,7 | 1,18 → 1,53 | +26% | 0,14 |
> | 1690 | BB explosão + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+156% · −50,8%** | +39% · −10,3% | +28% | −5,9% | 2,6 | 1,34 → 1,36 | +20% | 0,10 |
> | 1691 | Donchian + GPS médias + IFR + MACD + Rompe 200 | **+277% · −44,6%** | +57% · −9,4% | +34% | −9,2% | 2,3 | 1,49 → 1,41 | +23% | 0,35 |
> | 1692 | IFR + MACD + Quinta + Onda ⚠️ | **+152% · −27,8%** | +42% · −6,2% | +31% | −7,2% | 2,5 | 0,80 → 1,67 | +24% | 0,06 |
> | 1693 | BB explosão + 1ª vela 80 + Pullback + Tendência ⚠️ | **+185% · −49,7%** | +50% · −13,0% | +34% | −5,5% | 3,8 | 1,66 → 1,48 | +18% | 0,06 |
> | 1694 | VWAP + Donchian + IFR + Bollinger | **+242% · −36,0%** | +58% · −9,4% | +33% | −9,5% | 2,1 | 1,38 → 1,49 | +20% | 0,32 |
> | 1695 | GPS médias + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+194% · −40,4%** | +45% · −7,6% | +30% | −6,5% | 2,7 | 1,31 → 1,30 | +26% | 0,09 |
> | 1696 | VWAP + Donchian + IFR + Pullback | **+203% · −35,7%** | +53% · −9,4% | +33% | −7,7% | 2,6 | 1,56 → 1,38 | +17% | 0,16 |
> | 1697 | Donchian + GPS médias + IFR + Bollinger | **+314% · −39,8%** | +70% · −11,1% | +37% | −7,7% | 3,1 | 1,71 → 1,58 | +24% | 0,35 |
> | 1698 | VWAP + IFR + Pôr do sol + Tendência | **+169% · −32,8%** | +46% · −7,8% | +32% | −7,1% | 2,7 | 1,43 → 1,39 | +21% | 0,15 |
> | 1699 | ADX + Donchian + GPS médias + MACD + Pullback | **+294% · −54,9%** | +61% · −11,7% | +35% | −6,0% | 3,7 | 1,48 → 1,52 | +25% | 0,18 |
> | 1700 | GPS médias + IFR + Rompe 200 + Bollinger + Onda | **+264% · −39,3%** | +51% · −8,2% | +31% | −7,7% | 2,3 | 1,25 → 1,56 | +27% | 0,24 |
> | 1701 | Donchian + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+271% · −33,5%** | +50% · −5,6% | +30% | −6,0% | 2,8 | 1,01 → 1,84 | +23% | 0,10 |
> | 1702 | Donchian + IFR + Quinta ⚠️ | **+168% · −26,5%** | +56% · −9,2% | +34% | −4,9% | 4,3 | 1,68 → 1,68 | +22% | 0,07 |
> | 1703 | VWAP + Quinta + Rompe 200 + Tendência ⚠️ | **+103% · −39,3%** | +34% · −9,9% | +26% | −6,5% | 2,0 | 1,40 → 1,01 | +15% | 0,06 |
> | 1704 | ADX + Donchian + GPS médias + IFR + Bollinger | **+395% · −51,1%** | +72% · −10,3% | +38% | −5,1% | 4,8 | 1,52 → 1,71 | +26% | 0,35 |
> | 1705 | ADX + BB explosão + IFR + Pôr do sol + Tendência | **+259% · −62,6%** | +56% · −14,4% | +35% | −7,0% | 3,2 | 1,39 → 1,67 | +23% | 0,21 |
> | 1706 | Donchian + MACD + Pôr do sol + Rompe 200 + Onda | **+178% · −35,8%** | +41% · −7,0% | +28% | −7,5% | 2,0 | 0,90 → 1,44 | +25% | 0,13 |
> | 1707 | BB explosão + IFR + Pullback + Onda | **+163% · −40,0%** | +47% · −9,8% | +32% | −7,1% | 2,7 | 1,10 → 1,52 | +25% | 0,13 |
> | 1708 | ADX + GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+369% · −51,9%** | +68% · −10,4% | +40% | −7,0% | 4,0 | 1,53 → 1,75 | +30% | 0,28 |
> | 1709 | GPS médias + IFR + Bollinger | **+204% · −31,6%** | +65% · −10,9% | +35% | −7,9% | 2,9 | 1,73 → 1,61 | +26% | 0,34 |
> | 1710 | MACD + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+164% · −25,8%** | +37% · −4,4% | +28% | −7,0% | 2,2 | 0,91 → 1,71 | +20% | 0,03 |

> [!example]- Combinações 1711 a 1740 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1711 | VWAP + 1ª vela 80 + Quinta + Rompe 200 + Tendência ⚠️ | **+155% · −45,5%** | +37% · −9,9% | +27% | −7,0% | 2,1 | 1,38 → 1,32 | +19% | 0,06 |
> | 1712 | BB explosão + GPS médias + IFR + Pôr do sol + Quinta ⚠️ | **+176% · −46,1%** | +43% · −9,0% | +28% | −6,2% | 2,4 | 1,49 → 1,36 | +19% | 0,06 |
> | 1713 | ADX + IFR + Rompe 200 + Bollinger + Onda | **+271% · −42,4%** | +52% · −8,5% | +31% | −6,4% | 2,9 | 0,96 → 1,86 | +24% | 0,20 |
> | 1714 | Donchian + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+271% · −46,9%** | +54% · −9,9% | +34% | −7,5% | 2,9 | 1,22 → 1,55 | +29% | 0,24 |
> | 1715 | VWAP + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+108% · −40,7%** | +29% · −8,6% | +23% | −7,7% | 1,3 | 1,42 → 1,25 | +17% | 0,00 |
> | 1716 | ADX + Donchian + Rompe 200 + Bollinger + Onda | **+280% · −41,3%** | +55% · −8,0% | +31% | −6,0% | 3,1 | 0,99 → 1,68 | +24% | 0,18 |
> | 1717 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+157% · −37,9%** | +37% · −7,5% | +27% | −5,5% | 2,6 | 1,35 → 1,45 | +21% | 0,04 |
> | 1718 | ADX + MACD + Quinta + Tendência ⚠️ | **+192% · −47,8%** | +51% · −11,8% | +34% | −8,2% | 2,6 | 1,27 → 1,61 | +26% | 0,16 |
> | 1719 | VWAP + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+202% · −45,1%** | +45% · −9,5% | +32% | −9,5% | 2,0 | 1,12 → 1,43 | +26% | 0,16 |
> | 1720 | VWAP + Donchian + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+263% · −42,1%** | +49% · −8,7% | +30% | −8,8% | 1,9 | 1,54 → 1,55 | +20% | 0,16 |
> | 1721 | Donchian + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+234% · −44,8%** | +57% · −12,1% | +35% | −6,6% | 3,4 | 1,65 → 1,51 | +22% | 0,23 |
> | 1722 | Donchian + MACD + Quinta + Rompe 200 ⚠️ | **+140% · −26,8%** | +40% · −6,7% | +27% | −6,3% | 2,2 | 1,36 → 1,33 | +20% | 0,09 |
> | 1723 | Donchian + MACD + Quinta + Bollinger ⚠️ | **+198% · −27,4%** | +49% · −7,1% | +29% | −6,4% | 2,6 | 1,43 → 1,61 | +23% | 0,12 |
> | 1724 | VWAP + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+135% · −40,2%** | +36% · −8,1% | +27% | −8,5% | 1,7 | 0,99 → 1,19 | +23% | 0,08 |
> | 1725 | GPS médias + MACD + Bollinger + Tendência | **+252% · −40,0%** | +60% · −9,2% | +36% | −7,9% | 2,9 | 1,58 → 1,42 | +26% | 0,37 |
> | 1726 | Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+83% · −17,6%** | +34% · −5,3% | +25% | −2,5% | 4,9 | 1,57 → 1,76 | +20% | −0,12 |
> | 1727 | VWAP + Donchian + Bollinger + Tendência + Onda | **+274% · −47,0%** | +56% · −9,5% | +34% | −9,3% | 2,3 | 1,12 → 1,39 | +26% | 0,35 |
> | 1728 | GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+208% · −40,0%** | +53% · −10,3% | +34% | −4,8% | 4,4 | 1,71 → 1,49 | +25% | 0,00 |
> | 1729 | Donchian + BB explosão + IFR + Pullback + Bollinger | **+303% · −47,1%** | +57% · −9,5% | +33% | −5,0% | 4,0 | 1,74 → 1,63 | +17% | 0,20 |
> | 1730 | ADX + IFR + Tendência | **+224% · −45,2%** | +73% · −14,8% | +44% | −10,1% | 3,1 | 1,46 → 1,76 | +30% | 0,37 |
> | 1731 | ADX + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+260% · −44,8%** | +52% · −8,7% | +34% | −6,9% | 3,1 | 1,21 → 1,78 | +25% | 0,15 |
> | 1732 | ADX + GPS médias + MACD + Quinta + Tendência ⚠️ | **+261% · −56,5%** | +56% · −11,9% | +35% | −7,1% | 3,1 | 1,42 → 1,51 | +27% | 0,18 |
> | 1733 | Donchian + BB explosão + IFR + MACD + Pullback | **+253% · −53,2%** | +54% · −11,6% | +34% | −7,4% | 2,8 | 1,48 → 1,49 | +19% | 0,25 |
> | 1734 | VWAP + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+217% · −43,1%** | +44% · −9,1% | +29% | −8,0% | 2,0 | 1,42 → 1,44 | +21% | 0,24 |
> | 1735 | MACD + Quinta + Bollinger + Onda ⚠️ | **+138% · −24,7%** | +39% · −5,3% | +27% | −7,2% | 1,9 | 0,66 → 1,66 | +16% | 0,06 |
> | 1736 | VWAP + GPS médias + IFR + Rompe 200 + Bollinger | **+229% · −44,4%** | +47% · −9,6% | +29% | −9,7% | 1,6 | 1,49 → 1,32 | +20% | 0,28 |
> | 1737 | ADX + MACD + Pullback + Tendência | **+220% · −50,7%** | +56% · −12,9% | +36% | −8,4% | 2,8 | 1,51 → 1,61 | +26% | 0,15 |
> | 1738 | ADX + IFR + 1ª vela 80 + Pullback + Onda ⚠️ | **+282% · −37,9%** | +54% · −7,2% | +35% | −5,7% | 3,8 | 1,07 → 1,95 | +24% | 0,08 |
> | 1739 | ADX + GPS médias + IFR + MACD + Pôr do sol | **+263% · −44,0%** | +55% · −8,8% | +33% | −5,7% | 3,6 | 1,25 → 1,67 | +26% | 0,17 |
> | 1740 | ADX + MACD + Pôr do sol + Rompe 200 + Tendência | **+208% · −44,9%** | +45% · −8,7% | +30% | −7,5% | 2,4 | 1,28 → 1,58 | +25% | 0,12 |

> [!example]- Combinações 1741 a 1770 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1741 | ADX + Donchian + GPS médias + Pôr do sol + Tendência | **+310% · −61,8%** | +65% · −13,8% | +37% | −5,8% | 4,1 | 1,55 → 1,52 | +24% | 0,19 |
> | 1742 | VWAP + Pullback + Tendência | **+111% · −38,3%** | +43% · −12,7% | +32% | −7,5% | 2,5 | 1,55 → 1,05 | +15% | 0,15 |
> | 1743 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+113% · −21,1%** | +30% · −3,0% | +23% | −5,0% | 2,1 | 1,12 → 1,66 | +18% | 0,03 |
> | 1744 | GPS médias + Rompe 200 + Bollinger + Tendência | **+222% · −37,1%** | +54% · −8,7% | +32% | −6,3% | 3,0 | 1,86 → 1,32 | +20% | 0,26 |
> | 1745 | MACD + Pôr do sol + Bollinger + Onda | **+140% · −24,6%** | +39% · −5,4% | +26% | −7,4% | 1,8 | 0,59 → 1,70 | +16% | 0,11 |
> | 1746 | ADX + GPS médias + IFR + Pullback + Onda | **+282% · −48,7%** | +58% · −10,2% | +35% | −5,6% | 4,0 | 1,24 → 1,66 | +28% | 0,16 |
> | 1747 | ADX + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+283% · −43,8%** | +63% · −11,0% | +37% | −7,3% | 3,3 | 1,39 → 1,90 | +28% | 0,26 |
> | 1748 | ADX + Donchian + MACD + Quinta + Tendência ⚠️ | **+290% · −58,3%** | +58% · −12,7% | +36% | −7,4% | 3,1 | 1,39 → 1,60 | +26% | 0,21 |
> | 1749 | VWAP + GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+241% · −55,3%** | +50% · −13,1% | +33% | −8,5% | 2,4 | 1,61 → 1,33 | +21% | 0,14 |
> | 1750 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+202% · −49,6%** | +45% · −10,2% | +31% | −6,5% | 2,8 | 1,26 → 1,51 | +24% | 0,16 |
> | 1751 | GPS médias + MACD + Pôr do sol + Rompe 200 | **+122% · −30,5%** | +38% · −7,4% | +26% | −8,2% | 1,6 | 1,32 → 1,20 | +23% | 0,05 |
> | 1752 | IFR | **+68% · −11,2%** | +68% · −11,2% | +43% | −7,5% | 4,0 | 1,40 → 1,74 | +28% | — |
> | 1753 | Donchian + MACD + Rompe 200 + Bollinger | **+199% · −28,6%** | +49% · −6,9% | +29% | −7,5% | 2,2 | 1,39 → 1,48 | +22% | 0,24 |
> | 1754 | Donchian + Pôr do sol + Pullback + Tendência | **+211% · −38,1%** | +52% · −9,8% | +33% | −4,4% | 4,6 | 1,98 → 1,45 | +18% | 0,07 |
> | 1755 | GPS médias + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+300% · −39,7%** | +53% · −7,6% | +32% | −4,5% | 4,3 | 1,76 → 1,66 | +26% | 0,14 |
> | 1756 | VWAP + MACD + Rompe 200 + Bollinger | **+113% · −34,5%** | +35% · −8,5% | +24% | −12,5% | 0,9 | 0,93 → 1,16 | +20% | 0,28 |
> | 1757 | Donchian + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+219% · −24,5%** | +51% · −5,5% | +29% | −4,6% | 3,6 | 1,63 → 1,91 | +24% | 0,00 |
> | 1758 | Donchian + BB explosão + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+256% · −41,0%** | +53% · −8,7% | +32% | −6,5% | 3,0 | 1,38 → 1,69 | +22% | 0,15 |
> | 1759 | VWAP + Donchian + GPS médias + IFR + Rompe 200 | **+235% · −49,8%** | +53% · −10,4% | +32% | −10,6% | 1,8 | 1,44 → 1,23 | +18% | 0,32 |
> | 1760 | ADX + BB explosão + IFR + Quinta + Tendência ⚠️ | **+256% · −63,5%** | +55% · −15,0% | +35% | −6,9% | 3,2 | 1,44 → 1,65 | +22% | 0,21 |
> | 1761 | ADX + VWAP + Pôr do sol + Bollinger + Tendência | **+239% · −50,1%** | +49% · −9,1% | +30% | −6,3% | 2,7 | 1,27 → 1,56 | +20% | 0,20 |
> | 1762 | ADX + Donchian + MACD + Quinta + Rompe 200 ⚠️ | **+215% · −41,3%** | +47% · −7,1% | +29% | −5,0% | 3,3 | 1,21 → 1,58 | +22% | 0,10 |
> | 1763 | VWAP + Pôr do sol + Rompe 200 + Tendência | **+104% · −37,4%** | +34% · −9,6% | +26% | −6,7% | 1,9 | 1,33 → 1,03 | +16% | 0,10 |
> | 1764 | ADX + Bollinger + Tendência | **+212% · −45,6%** | +68% · −15,3% | +38% | −8,7% | 2,9 | 1,43 → 1,74 | +27% | 0,36 |
> | 1765 | Donchian + GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+326% · −45,1%** | +64% · −9,8% | +37% | −9,2% | 2,7 | 1,20 → 1,62 | +34% | 0,28 |
> | 1766 | VWAP + Donchian + Pôr do sol + Pullback + Bollinger | **+208% · −33,7%** | +43% · −6,3% | +26% | −6,4% | 2,1 | 1,62 → 1,36 | +17% | 0,07 |
> | 1767 | ADX + GPS médias + IFR + Pôr do sol + Pullback | **+269% · −44,1%** | +53% · −8,9% | +32% | −4,1% | 4,7 | 1,69 → 1,74 | +25% | 0,05 |
> | 1768 | Donchian + Quinta + Pullback + Bollinger ⚠️ | **+193% · −24,2%** | +47% · −5,1% | +28% | −2,4% | 6,3 | 2,24 → 1,75 | +17% | −0,02 |
> | 1769 | ADX + MACD + Pullback + Rompe 200 + Onda | **+181% · −39,1%** | +42% · −7,3% | +29% | −6,9% | 2,4 | 0,91 → 1,59 | +23% | 0,09 |
> | 1770 | VWAP + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+206% · −40,8%** | +45% · −8,4% | +32% | −12,3% | 1,6 | 0,74 → 1,57 | +23% | 0,30 |

> [!example]- Combinações 1771 a 1800 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1771 | GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+143% · −28,3%** | +40% · −6,9% | +24% | −5,3% | 2,1 | 1,85 → 1,23 | +18% | 0,08 |
> | 1772 | VWAP + Pôr do sol + Pullback + Bollinger + Onda | **+146% · −31,3%** | +35% · −5,9% | +24% | −8,8% | 1,3 | 0,94 → 1,37 | +17% | 0,09 |
> | 1773 | VWAP + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+167% · −33,3%** | +37% · −5,4% | +26% | −4,4% | 2,9 | 1,53 → 1,36 | +19% | 0,10 |
> | 1774 | ADX + MACD + Rompe 200 + Bollinger | **+177% · −41,3%** | +47% · −10,3% | +28% | −7,1% | 2,2 | 0,98 → 1,71 | +22% | 0,19 |
> | 1775 | ADX + Donchian + MACD + Pôr do sol + Tendência | **+293% · −57,0%** | +59% · −12,1% | +36% | −7,5% | 3,0 | 1,34 → 1,61 | +26% | 0,22 |
> | 1776 | Donchian + GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+249% · −34,6%** | +49% · −7,2% | +28% | −4,8% | 3,1 | 1,80 → 1,49 | +20% | 0,03 |
> | 1777 | ADX + Donchian + Bollinger + Tendência + Onda | **+363% · −56,8%** | +67% · −11,6% | +38% | −8,3% | 3,0 | 1,18 → 1,70 | +29% | 0,29 |
> | 1778 | Donchian + GPS médias + Pullback + Bollinger | **+263% · −36,6%** | +61% · −8,3% | +33% | −5,7% | 3,5 | 1,95 → 1,44 | +19% | 0,13 |
> | 1779 | Donchian + GPS médias + IFR + Rompe 200 | **+237% · −40,6%** | +61% · −9,7% | +35% | −7,6% | 2,9 | 1,66 → 1,37 | +20% | 0,37 |
> | 1780 | Donchian + IFR + Bollinger | **+233% · −30,1%** | +70% · −10,7% | +37% | −5,9% | 4,1 | 1,70 → 1,82 | +24% | 0,28 |
> | 1781 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+283% · −43,6%** | +53% · −9,3% | +34% | −6,2% | 3,5 | 1,45 → 1,60 | +27% | 0,21 |
> | 1782 | VWAP + MACD + Pullback + Rompe 200 + Onda | **+119% · −37,0%** | +33% · −7,5% | +26% | −12,2% | 1,0 | 0,84 → 1,18 | +21% | 0,18 |
> | 1783 | ADX + IFR + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+224% · −33,9%** | +46% · −5,9% | +30% | −3,2% | 5,2 | 1,21 → 2,13 | +19% | 0,04 |
> | 1784 | VWAP + MACD + Quinta + Bollinger + Tendência ⚠️ | **+195% · −37,4%** | +42% · −7,2% | +29% | −7,9% | 2,0 | 1,30 → 1,35 | +22% | 0,22 |
> | 1785 | ADX + Donchian + IFR + MACD + Rompe 200 | **+290% · −44,8%** | +58% · −8,7% | +35% | −6,7% | 3,2 | 1,26 → 1,68 | +25% | 0,28 |
> | 1786 | ADX + VWAP + IFR + MACD + Bollinger | **+266% · −45,5%** | +53% · −9,1% | +32% | −7,9% | 2,5 | 1,01 → 1,67 | +19% | 0,34 |
> | 1787 | ADX + IFR + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+258% · −39,9%** | +51% · −7,3% | +33% | −5,0% | 3,9 | 1,04 → 1,97 | +21% | 0,14 |
> | 1788 | BB explosão + Quinta + Pullback + Bollinger + Tendência ⚠️ | **+210% · −50,7%** | +44% · −10,2% | +29% | −4,2% | 3,8 | 1,94 → 1,45 | +15% | 0,09 |
> | 1789 | Pôr do sol + Tendência + Onda | **+117% · −26,6%** | +44% · −8,3% | +32% | −8,9% | 2,2 | 0,93 → 1,45 | +25% | 0,09 |
> | 1790 | VWAP + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+178% · −40,5%** | +41% · −8,1% | +30% | −9,2% | 1,9 | 0,94 → 1,44 | +25% | 0,07 |
> | 1791 | VWAP + Donchian + IFR + MACD + Tendência | **+279% · −51,6%** | +58% · −11,7% | +37% | −9,3% | 2,6 | 1,33 → 1,39 | +23% | 0,45 |
> | 1792 | ADX + Quinta + Rompe 200 + Tendência ⚠️ | **+163% · −42,2%** | +46% · −10,0% | +30% | −7,0% | 2,5 | 1,49 → 1,53 | +21% | 0,08 |
> | 1793 | VWAP + IFR + 1ª vela 80 ⚠️ | **+131% · −27,7%** | +47% · −9,1% | +32% | −11,7% | 1,7 | 1,04 → 1,57 | +20% | 0,20 |
> | 1794 | Donchian + IFR + MACD + Tendência | **+286% · −43,5%** | +67% · −11,7% | +41% | −9,4% | 3,0 | 1,51 → 1,53 | +27% | 0,52 |
> | 1795 | VWAP + IFR + MACD + Quinta + Onda ⚠️ | **+161% · −35,0%** | +39% · −6,7% | +29% | −10,0% | 1,6 | 0,75 → 1,45 | +20% | 0,12 |
> | 1796 | VWAP + Rompe 200 + Bollinger + Tendência | **+153% · −35,5%** | +43% · −8,9% | +28% | −7,8% | 2,0 | 1,44 → 1,17 | +17% | 0,26 |
> | 1797 | BB explosão + IFR + MACD + Quinta + Rompe 200 ⚠️ | **+154% · −39,7%** | +38% · −7,4% | +27% | −7,0% | 2,0 | 1,24 → 1,43 | +19% | 0,13 |
> | 1798 | MACD + Tendência | **+106% · −30,3%** | +56% · −15,6% | +40% | −13,4% | 2,0 | 1,28 → 1,31 | +29% | 0,55 |
> | 1799 | BB explosão + IFR + Pôr do sol + Tendência + Onda | **+219% · −48,5%** | +49% · −9,5% | +33% | −7,6% | 2,7 | 1,14 → 1,54 | +27% | 0,18 |
> | 1800 | GPS médias + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+329% · −42,5%** | +58% · −8,4% | +35% | −7,9% | 2,9 | 1,55 → 1,58 | +29% | 0,31 |

> [!example]- Combinações 1801 a 1830 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1801 | VWAP + Donchian + GPS médias + Pullback + Bollinger | **+265% · −46,5%** | +53% · −9,9% | +30% | −9,4% | 1,9 | 1,63 → 1,24 | +17% | 0,21 |
> | 1802 | ADX + VWAP + IFR + Quinta + Tendência ⚠️ | **+244% · −50,7%** | +52% · −10,1% | +34% | −7,2% | 2,9 | 1,35 → 1,58 | +22% | 0,15 |
> | 1803 | VWAP + Donchian + Pôr do sol + Tendência + Onda | **+207% · −44,6%** | +48% · −9,5% | +32% | −8,4% | 2,3 | 1,05 → 1,31 | +24% | 0,21 |
> | 1804 | GPS médias + Pullback + Bollinger | **+155% · −27,7%** | +53% · −8,5% | +30% | −5,1% | 3,3 | 2,07 → 1,37 | +19% | 0,07 |
> | 1805 | ADX + Pôr do sol + Rompe 200 + Bollinger | **+146% · −34,9%** | +41% · −8,1% | +24% | −4,3% | 2,7 | 1,08 → 1,77 | +18% | 0,06 |
> | 1806 | ADX + GPS médias + MACD + Pôr do sol + Tendência | **+264% · −55,1%** | +56% · −11,5% | +35% | −7,1% | 3,1 | 1,37 → 1,53 | +28% | 0,18 |
> | 1807 | VWAP + Donchian + Quinta + Bollinger + Onda ⚠️ | **+205% · −36,7%** | +44% · −7,2% | +28% | −9,7% | 1,5 | 0,93 → 1,39 | +20% | 0,11 |
> | 1808 | Donchian + Rompe 200 + Bollinger | **+154% · −23,2%** | +52% · −7,5% | +28% | −4,8% | 3,2 | 1,70 → 1,45 | +17% | 0,15 |
> | 1809 | VWAP + Quinta + Pullback + Bollinger + Onda ⚠️ | **+144% · −31,2%** | +35% · −5,9% | +24% | −8,7% | 1,3 | 1,00 → 1,35 | +18% | 0,06 |
> | 1810 | ADX + Donchian + Quinta + Pullback + Onda ⚠️ | **+237% · −45,2%** | +50% · −7,3% | +31% | −4,6% | 4,0 | 1,16 → 1,66 | +21% | 0,02 |
> | 1811 | Donchian + BB explosão + IFR + 1ª vela 80 + Bollinger ⚠️ | **+330% · −43,9%** | +60% · −9,6% | +34% | −7,5% | 2,8 | 1,45 → 1,75 | +22% | 0,28 |
> | 1812 | ADX + MACD + 1ª vela 80 + Quinta + Pullback ⚠️ | **+203% · −38,3%** | +43% · −6,9% | +29% | −4,9% | 3,3 | 1,28 → 1,87 | +21% | −0,03 |
> | 1813 | VWAP + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+149% · −30,6%** | +40% · −7,3% | +27% | −9,6% | 1,4 | 1,40 → 1,52 | +19% | 0,15 |
> | 1814 | Donchian + BB explosão + IFR + Pullback + Onda | **+246% · −50,8%** | +54% · −10,7% | +34% | −6,8% | 3,1 | 1,24 → 1,51 | +24% | 0,23 |
> | 1815 | GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+188% · −33,5%** | +49% · −8,3% | +32% | −9,3% | 2,1 | 1,54 → 1,49 | +27% | 0,04 |
> | 1816 | VWAP + Donchian + GPS médias + MACD + Pullback | **+220% · −50,1%** | +51% · −10,4% | +32% | −12,0% | 1,6 | 1,41 → 1,17 | +19% | 0,24 |
> | 1817 | Donchian + Quinta + Pullback + Tendência ⚠️ | **+208% · −39,8%** | +52% · −9,8% | +33% | −4,4% | 4,7 | 2,05 → 1,43 | +17% | 0,06 |
> | 1818 | VWAP + Pôr do sol + Rompe 200 + Tendência + Onda | **+137% · −39,6%** | +36% · −7,9% | +27% | −8,6% | 1,6 | 0,95 → 1,20 | +24% | 0,14 |
> | 1819 | VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+157% · −44,9%** | +37% · −9,7% | +27% | −7,1% | 2,0 | 1,32 → 1,34 | +20% | 0,13 |
> | 1820 | ADX + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+220% · −36,2%** | +53% · −8,4% | +31% | −4,5% | 4,0 | 1,39 → 2,03 | +21% | 0,09 |
> | 1821 | Donchian + GPS médias + IFR + MACD + Tendência | **+347% · −56,5%** | +68% · −12,1% | +41% | −8,0% | 3,5 | 1,57 → 1,46 | +26% | 0,47 |
> | 1822 | ADX + BB explosão + IFR + Quinta + Bollinger ⚠️ | **+250% · −51,7%** | +51% · −9,8% | +30% | −4,4% | 3,9 | 1,28 → 1,81 | +22% | 0,19 |
> | 1823 | ADX + Donchian + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+318% · −53,2%** | +61% · −10,6% | +36% | −6,7% | 3,4 | 1,47 → 1,68 | +25% | 0,20 |
> | 1824 | VWAP + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+249% · −39,6%** | +48% · −7,8% | +32% | −10,6% | 1,8 | 1,23 → 1,50 | +26% | 0,35 |
> | 1825 | 1ª vela 80 + Tendência ⚠️ | **+119% · −24,9%** | +61% · −12,3% | +41% | −8,9% | 3,1 | 1,46 → 1,58 | +30% | 0,04 |
> | 1826 | VWAP + Donchian + MACD + Bollinger + Tendência | **+279% · −50,5%** | +55% · −11,4% | +34% | −9,7% | 2,2 | 1,32 → 1,35 | +22% | 0,43 |
> | 1827 | ADX + VWAP + IFR + 1ª vela 80 + Pullback ⚠️ | **+249% · −37,9%** | +50% · −7,7% | +33% | −5,4% | 3,7 | 1,29 → 1,78 | +19% | 0,09 |
> | 1828 | Donchian + Quinta + Pullback + Rompe 200 ⚠️ | **+134% · −31,2%** | +38% · −7,6% | +25% | −3,2% | 3,9 | 2,08 → 1,27 | +14% | 0,03 |
> | 1829 | ADX + IFR + Pôr do sol + Bollinger + Onda | **+274% · −39,4%** | +52% · −7,5% | +31% | −5,6% | 3,3 | 0,90 → 1,99 | +21% | 0,12 |
> | 1830 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+233% · −38,3%** | +48% · −7,3% | +29% | −5,8% | 2,8 | 1,60 → 1,54 | +23% | −0,00 |

> [!example]- Combinações 1831 a 1860 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1831 | ADX + IFR + Bollinger | **+207% · −34,5%** | +66% · −11,3% | +36% | −5,8% | 4,0 | 1,21 → 2,03 | +21% | 0,34 |
> | 1832 | Rompe 200 + Tendência | **+81% · −26,3%** | +45% · −11,6% | +32% | −10,4% | 1,9 | 1,65 → 1,09 | +16% | 0,18 |
> | 1833 | Donchian + IFR + Tendência + Onda | **+282% · −41,4%** | +68% · −10,6% | +41% | −9,5% | 3,0 | 1,28 → 1,59 | +32% | 0,40 |
> | 1834 | BB explosão + IFR + 1ª vela 80 + Tendência + Onda ⚠️ | **+267% · −48,8%** | +55% · −9,5% | +37% | −8,2% | 2,9 | 1,13 → 1,64 | +28% | 0,26 |
> | 1835 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+147% · −34,4%** | +35% · −6,6% | +24% | −4,9% | 2,3 | 1,56 → 1,44 | +21% | 0,01 |
> | 1836 | ADX + GPS médias + IFR + Pôr do sol + Rompe 200 | **+234% · −43,6%** | +50% · −8,8% | +30% | −4,2% | 4,2 | 1,43 → 1,63 | +24% | 0,13 |
> | 1837 | ADX + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+248% · −43,5%** | +51% · −8,6% | +34% | −7,0% | 3,0 | 0,99 → 1,77 | +24% | 0,05 |
> | 1838 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+233% · −32,5%** | +45% · −5,3% | +30% | −5,5% | 3,1 | 1,56 → 1,71 | +23% | 0,02 |
> | 1839 | ADX + Donchian + GPS médias + Quinta + Tendência ⚠️ | **+307% · −63,0%** | +64% · −14,2% | +37% | −5,7% | 4,2 | 1,60 → 1,50 | +23% | 0,20 |
> | 1840 | ADX + Donchian + IFR + Pôr do sol + Onda | **+287% · −40,6%** | +58% · −8,1% | +34% | −5,6% | 3,9 | 1,00 → 1,80 | +22% | 0,12 |
> | 1841 | ADX + IFR + MACD + Rompe 200 | **+189% · −39,0%** | +51% · −9,5% | +33% | −7,4% | 2,7 | 1,06 → 1,72 | +24% | 0,22 |
> | 1842 | ADX + Donchian + BB explosão + IFR + Pullback | **+285% · −62,5%** | +61% · −14,3% | +35% | −5,7% | 4,0 | 1,49 → 1,64 | +20% | 0,23 |
> | 1843 | ADX + BB explosão + IFR + 1ª vela 80 + Pullback ⚠️ | **+265% · −50,2%** | +54% · −9,5% | +34% | −4,7% | 4,4 | 1,39 → 1,85 | +24% | 0,10 |
> | 1844 | GPS médias + Pullback + Tendência + Onda | **+206% · −43,2%** | +55% · −10,8% | +36% | −7,2% | 3,2 | 1,40 → 1,35 | +24% | 0,17 |
> | 1845 | Donchian + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+199% · −38,8%** | +41% · −7,9% | +27% | −3,6% | 4,0 | 1,83 → 1,67 | +20% | 0,01 |
> | 1846 | GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+118% · −28,2%** | +37% · −6,5% | +26% | −6,9% | 1,8 | 0,94 → 1,30 | +20% | −0,09 |
> | 1847 | ADX + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+188% · −36,1%** | +41% · −6,6% | +26% | −4,9% | 2,7 | 0,72 → 1,87 | +18% | 0,04 |
> | 1848 | VWAP + Donchian + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+245% · −36,8%** | +49% · −7,3% | +31% | −8,3% | 2,2 | 1,29 → 1,61 | +20% | 0,15 |
> | 1849 | BB explosão + Pôr do sol + Quinta + Pullback ⚠️ | **+79% · −30,4%** | +29% · −6,6% | +22% | −2,5% | 3,6 | 1,71 → 1,18 | +13% | −0,07 |
> | 1850 | VWAP + Donchian + GPS médias + IFR + Onda | **+248% · −49,6%** | +58% · −11,2% | +35% | −11,7% | 1,9 | 1,10 → 1,34 | +28% | 0,33 |
> | 1851 | Donchian + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+298% · −44,8%** | +58% · −9,6% | +37% | −8,8% | 2,8 | 1,10 → 1,58 | +32% | 0,34 |
> | 1852 | IFR + Pullback + Onda | **+135% · −23,4%** | +48% · −7,3% | +34% | −6,6% | 3,1 | 1,13 → 1,68 | +26% | 0,06 |
> | 1853 | Donchian + GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+337% · −47,2%** | +63% · −10,4% | +37% | −10,3% | 2,4 | 1,43 → 1,59 | +29% | 0,34 |
> | 1854 | GPS médias + IFR | **+134% · −25,8%** | +69% · −13,1% | +40% | −10,0% | 2,7 | 1,58 → 1,40 | +27% | 0,46 |
> | 1855 | GPS médias + IFR + Rompe 200 + Onda | **+181% · −34,3%** | +50% · −8,8% | +32% | −9,0% | 2,2 | 1,12 → 1,41 | +29% | 0,27 |
> | 1856 | Donchian + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+255% · −37,4%** | +50% · −6,4% | +33% | −8,2% | 2,5 | 1,10 → 1,64 | +27% | 0,15 |
> | 1857 | Donchian + GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+258% · −42,5%** | +53% · −9,1% | +32% | −9,2% | 2,1 | 1,41 → 1,49 | +26% | 0,10 |
> | 1858 | ADX + GPS médias + IFR + MACD + Rompe 200 | **+257% · −48,3%** | +55% · −10,0% | +34% | −6,6% | 3,1 | 1,28 → 1,58 | +27% | 0,27 |
> | 1859 | ADX + IFR + Quinta + Rompe 200 ⚠️ | **+159% · −32,7%** | +45% · −7,6% | +29% | −5,1% | 3,2 | 1,29 → 1,79 | +21% | 0,10 |
> | 1860 | ADX + Donchian + GPS médias + Quinta + Rompe 200 ⚠️ | **+236% · −51,5%** | +53% · −10,7% | +30% | −4,7% | 3,7 | 1,48 → 1,42 | +21% | 0,12 |

> [!example]- Combinações 1861 a 1890 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1861 | GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+157% · −38,7%** | +43% · −10,2% | +28% | −6,1% | 2,5 | 1,75 → 1,36 | +20% | 0,07 |
> | 1862 | Donchian + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+222% · −25,7%** | +51% · −5,5% | +29% | −4,6% | 3,6 | 1,55 → 1,95 | +23% | 0,07 |
> | 1863 | BB explosão + Pôr do sol + Pullback + Rompe 200 + Tendência | **+152% · −49,5%** | +38% · −10,1% | +27% | −4,7% | 3,0 | 1,79 → 1,21 | +14% | 0,06 |
> | 1864 | BB explosão + IFR + MACD + Pôr do sol + Rompe 200 | **+156% · −38,0%** | +38% · −6,8% | +27% | −7,0% | 2,0 | 1,18 → 1,46 | +20% | 0,13 |
> | 1865 | Pôr do sol + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+165% · −25,2%** | +36% · −3,7% | +25% | −4,7% | 2,6 | 0,77 → 1,94 | +14% | 0,01 |
> | 1866 | VWAP + Donchian + Pôr do sol + Bollinger + Onda | **+207% · −37,0%** | +45% · −7,3% | +27% | −9,8% | 1,5 | 0,88 → 1,41 | +19% | 0,15 |
> | 1867 | ADX + Donchian + Rompe 200 + Tendência + Onda | **+276% · −56,2%** | +59% · −11,8% | +36% | −8,7% | 2,6 | 1,15 → 1,54 | +29% | 0,24 |
> | 1868 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Tendência ⚠️ | **+228% · −39,1%** | +47% · −7,0% | +31% | −4,6% | 3,9 | 1,40 → 1,87 | +23% | 0,05 |
> | 1869 | VWAP + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+182% · −45,0%** | +42% · −9,4% | +30% | −10,4% | 1,7 | 1,18 → 1,33 | +23% | 0,26 |
> | 1870 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+159% · −31,1%** | +43% · −7,5% | +28% | −4,7% | 3,2 | 1,76 → 1,53 | +23% | −0,07 |
> | 1871 | ADX + GPS médias + Pôr do sol + Pullback + Bollinger | **+258% · −40,3%** | +50% · −7,7% | +29% | −3,9% | 4,1 | 1,71 → 1,69 | +23% | 0,06 |
> | 1872 | ADX + Donchian + GPS médias + Pôr do sol + Rompe 200 | **+239% · −49,9%** | +54% · −10,1% | +30% | −4,4% | 3,9 | 1,42 → 1,44 | +22% | 0,10 |
> | 1873 | ADX + Donchian + IFR + Bollinger | **+327% · −40,5%** | +72% · −10,5% | +38% | −5,4% | 4,6 | 1,42 → 1,92 | +24% | 0,30 |
> | 1874 | Donchian + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+179% · −29,5%** | +39% · −5,9% | +27% | −3,4% | 4,0 | 1,72 → 1,56 | +21% | −0,01 |
> | 1875 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+176% · −34,5%** | +40% · −6,8% | +27% | −7,4% | 1,9 | 1,32 → 1,54 | +21% | 0,01 |
> | 1876 | ADX + Pôr do sol + Rompe 200 + Tendência | **+166% · −40,4%** | +46% · −9,3% | +30% | −6,7% | 2,6 | 1,42 → 1,55 | +23% | 0,07 |
> | 1877 | ADX + Donchian + IFR + Quinta ⚠️ | **+248% · −38,1%** | +61% · −9,4% | +35% | −4,9% | 4,6 | 1,40 → 1,82 | +22% | 0,13 |
> | 1878 | Pôr do sol + Pullback + Onda | **+73% · −16,0%** | +32% · −5,2% | +25% | −5,6% | 2,1 | 0,83 → 1,35 | +20% | −0,03 |
> | 1879 | VWAP + BB explosão + IFR + Pullback + Bollinger | **+206% · −43,9%** | +45% · −8,7% | +29% | −8,0% | 2,0 | 1,46 → 1,40 | +16% | 0,20 |
> | 1880 | Donchian + Pôr do sol + Pullback + Bollinger | **+196% · −23,8%** | +47% · −4,9% | +27% | −2,2% | 6,7 | 2,12 → 1,80 | +18% | −0,04 |
> | 1881 | ADX + GPS médias + IFR + Tendência + Onda | **+320% · −56,2%** | +67% · −11,9% | +40% | −8,8% | 3,1 | 1,23 → 1,63 | +34% | 0,31 |
> | 1882 | ADX + BB explosão + IFR + Pôr do sol + Bollinger | **+253% · −50,8%** | +52% · −9,4% | +30% | −4,2% | 4,1 | 1,22 → 1,85 | +22% | 0,17 |
> | 1883 | Donchian + GPS médias + Pôr do sol + Rompe 200 | **+170% · −36,2%** | +48% · −9,2% | +28% | −6,2% | 2,4 | 1,63 → 1,17 | +18% | 0,08 |
> | 1884 | GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+277% · −37,6%** | +61% · −9,8% | +35% | −8,0% | 2,8 | 1,63 → 1,79 | +29% | 0,27 |
> | 1885 | VWAP + Donchian + IFR + Tendência | **+244% · −47,9%** | +63% · −12,4% | +39% | −8,5% | 3,0 | 1,46 → 1,37 | +20% | 0,41 |
> | 1886 | VWAP + Donchian + IFR + 1ª vela 80 + Onda ⚠️ | **+261% · −41,6%** | +54% · −8,6% | +34% | −10,5% | 2,0 | 0,96 → 1,57 | +24% | 0,28 |
> | 1887 | VWAP + BB explosão + IFR + Pullback + Tendência | **+209% · −58,4%** | +48% · −13,4% | +33% | −6,9% | 2,9 | 1,53 → 1,30 | +15% | 0,23 |
> | 1888 | ADX + IFR + MACD + Quinta ⚠️ | **+188% · −36,9%** | +50% · −8,7% | +33% | −6,0% | 3,3 | 1,07 → 1,82 | +21% | 0,14 |
> | 1889 | ADX + VWAP + IFR + Rompe 200 + Tendência | **+242% · −52,6%** | +52% · −11,2% | +34% | −8,4% | 2,5 | 1,33 → 1,50 | +22% | 0,24 |
> | 1890 | ADX + VWAP + IFR + Rompe 200 + Bollinger | **+235% · −41,4%** | +48% · −8,2% | +29% | −5,9% | 2,8 | 1,17 → 1,64 | +19% | 0,24 |

> [!example]- Combinações 1891 a 1920 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1891 | GPS médias + MACD + Tendência | **+174% · −42,0%** | +62% · −14,3% | +39% | −9,8% | 2,7 | 1,47 → 1,27 | +27% | 0,41 |
> | 1892 | Donchian + Pôr do sol + Pullback + Rompe 200 | **+136% · −30,5%** | +39% · −7,3% | +25% | −3,2% | 3,9 | 1,98 → 1,30 | +15% | 0,01 |
> | 1893 | VWAP + Donchian + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+314% · −47,9%** | +57% · −10,2% | +34% | −8,4% | 2,5 | 1,45 → 1,51 | +22% | 0,31 |
> | 1894 | Donchian + GPS médias + IFR + MACD + Onda | **+291% · −47,0%** | +62% · −10,2% | +37% | −10,4% | 2,3 | 1,13 → 1,50 | +33% | 0,37 |
> | 1895 | VWAP + BB explosão + IFR + Pullback + Rompe 200 | **+147% · −49,0%** | +38% · −10,3% | +27% | −8,3% | 1,7 | 1,40 → 1,18 | +13% | 0,17 |
> | 1896 | VWAP + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+110% · −40,0%** | +30% · −8,4% | +23% | −7,8% | 1,3 | 1,35 → 1,27 | +18% | 0,04 |
> | 1897 | VWAP + GPS médias + IFR + MACD | **+179% · −44,6%** | +51% · −12,3% | +33% | −14,2% | 1,4 | 1,17 → 1,27 | +25% | 0,36 |
> | 1898 | ADX + Donchian + IFR + MACD + Pullback | **+330% · −46,3%** | +61% · −8,7% | +36% | −5,6% | 4,2 | 1,48 → 1,77 | +23% | 0,18 |
> | 1899 | Donchian + GPS médias + MACD + Rompe 200 + Bollinger | **+275% · −43,8%** | +54% · −9,4% | +31% | −9,0% | 2,0 | 1,51 → 1,37 | +22% | 0,28 |
> | 1900 | Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+66% · −16,0%** | +25% · −3,7% | +21% | −5,2% | 1,5 | 0,62 → 1,28 | +16% | −0,02 |
> | 1901 | GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+211% · −38,0%** | +53% · −9,6% | +34% | −4,8% | 4,4 | 1,65 → 1,51 | +26% | 0,09 |
> | 1902 | ADX + Donchian + IFR + Rompe 200 + Onda | **+282% · −43,6%** | +58% · −8,7% | +35% | −6,8% | 3,2 | 1,05 → 1,69 | +25% | 0,23 |
> | 1903 | Donchian + GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+305% · −41,4%** | +55% · −8,5% | +31% | −6,8% | 2,7 | 1,68 → 1,62 | +24% | 0,08 |
> | 1904 | Donchian + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+246% · −42,9%** | +60% · −11,5% | +35% | −7,0% | 3,1 | 1,76 → 1,49 | +22% | 0,07 |
> | 1905 | ADX + Pôr do sol + Rompe 200 + Tendência + Onda | **+202% · −43,6%** | +46% · −8,7% | +31% | −7,6% | 2,3 | 1,01 → 1,58 | +26% | 0,09 |
> | 1906 | VWAP + GPS médias + Quinta + Pullback ⚠️ | **+115% · −38,7%** | +37% · −10,1% | +25% | −8,9% | 1,4 | 1,59 → 0,93 | +15% | −0,02 |
> | 1907 | ADX + Donchian + IFR + Quinta + Pullback ⚠️ | **+301% · −39,2%** | +56% · −7,7% | +33% | −4,0% | 5,2 | 1,74 → 1,87 | +21% | 0,06 |
> | 1908 | VWAP + GPS médias + Pôr do sol + Pullback + Bollinger | **+183% · −36,8%** | +40% · −7,2% | +25% | −7,8% | 1,6 | 1,66 → 1,21 | +18% | 0,06 |
> | 1909 | ADX + MACD + Pôr do sol + Tendência + Onda | **+230% · −49,7%** | +50% · −9,7% | +33% | −8,9% | 2,3 | 0,90 → 1,65 | +25% | 0,16 |
> | 1910 | ADX + Pôr do sol + Quinta + Tendência ⚠️ | **+165% · −39,7%** | +46% · −9,0% | +30% | −6,6% | 2,6 | 1,46 → 1,69 | +22% | 0,09 |
> | 1911 | VWAP + Donchian + GPS médias + IFR + Tendência | **+298% · −60,5%** | +64% · −13,8% | +38% | −9,3% | 2,8 | 1,53 → 1,32 | +21% | 0,40 |
> | 1912 | ADX + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+256% · −47,7%** | +52% · −9,6% | +34% | −8,1% | 2,6 | 1,24 → 1,68 | +28% | 0,19 |
> | 1913 | ADX + GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+319% · −53,2%** | +61% · −10,2% | +37% | −5,5% | 4,4 | 1,67 → 1,65 | +26% | 0,12 |
> | 1914 | VWAP + MACD + Pôr do sol + Pullback + Onda | **+121% · −33,7%** | +33% · −6,5% | +25% | −10,9% | 1,2 | 0,79 → 1,28 | +18% | 0,09 |
> | 1915 | VWAP + GPS médias + IFR + MACD + Bollinger | **+257% · −49,0%** | +52% · −11,1% | +32% | −12,1% | 1,6 | 1,28 → 1,40 | +25% | 0,36 |
> | 1916 | ADX + Donchian + GPS médias + IFR + Pôr do sol | **+314% · −51,2%** | +64% · −10,4% | +36% | −4,5% | 5,0 | 1,46 → 1,65 | +26% | 0,18 |
> | 1917 | ADX + IFR + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+225% · −36,1%** | +46% · −7,1% | +30% | −3,9% | 4,4 | 1,20 → 2,01 | +22% | 0,10 |
> | 1918 | Donchian + IFR + MACD + Rompe 200 + Onda | **+248% · −39,7%** | +51% · −8,1% | +33% | −8,0% | 2,5 | 1,04 → 1,55 | +28% | 0,31 |
> | 1919 | GPS médias + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+272% · −44,3%** | +54% · −9,1% | +35% | −6,2% | 3,6 | 1,39 → 1,52 | +28% | 0,12 |
> | 1920 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+138% · −32,7%** | +34% · −6,0% | +26% | −9,9% | 1,3 | 1,17 → 1,44 | +18% | 0,06 |

> [!example]- Combinações 1921 a 1950 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1921 | VWAP + 1ª vela 80 + Quinta + Pullback ⚠️ | **+97% · −32,9%** | +32% · −8,3% | +24% | −8,4% | 1,4 | 1,33 → 1,33 | +17% | −0,07 |
> | 1922 | VWAP + BB explosão + IFR + Pôr do sol + Quinta ⚠️ | **+128% · −39,9%** | +35% · −7,3% | +25% | −7,5% | 1,6 | 1,14 → 1,30 | +16% | 0,04 |
> | 1923 | GPS médias + MACD + Quinta + Bollinger ⚠️ | **+173% · −33,9%** | +46% · −8,6% | +28% | −8,3% | 1,8 | 1,48 → 1,42 | +25% | 0,11 |
> | 1924 | VWAP + 1ª vela 80 + Quinta + Tendência ⚠️ | **+143% · −39,6%** | +41% · −10,3% | +30% | −7,5% | 2,3 | 1,30 → 1,38 | +22% | 0,02 |
> | 1925 | ADX + Donchian + MACD + Rompe 200 + Tendência | **+287% · −58,8%** | +59% · −12,9% | +36% | −8,7% | 2,6 | 1,37 → 1,53 | +25% | 0,29 |
> | 1926 | Donchian + 1ª vela 80 + Pullback + Tendência ⚠️ | **+266% · −42,4%** | +60% · −11,2% | +38% | −5,1% | 4,8 | 1,87 → 1,62 | +22% | 0,08 |
> | 1927 | Donchian + MACD + 1ª vela 80 + Quinta + Tendência ⚠️ | **+280% · −43,7%** | +53% · −9,3% | +34% | −6,2% | 3,5 | 1,50 → 1,59 | +26% | 0,14 |
> | 1928 | ADX + GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+163% · −39,0%** | +40% · −7,5% | +25% | −4,3% | 2,9 | 1,39 → 1,43 | +22% | 0,04 |
> | 1929 | GPS médias + MACD + Pullback + Rompe 200 + Onda | **+177% · −37,2%** | +42% · −7,4% | +29% | −8,9% | 1,8 | 1,17 → 1,31 | +27% | 0,13 |
> | 1930 | GPS médias + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+244% · −37,6%** | +50% · −7,7% | +32% | −7,7% | 2,5 | 1,13 → 1,67 | +24% | 0,04 |
> | 1931 | VWAP + IFR + Rompe 200 + Onda | **+125% · −29,9%** | +39% · −7,3% | +28% | −11,1% | 1,4 | 0,77 → 1,31 | +22% | 0,23 |
> | 1932 | ADX + 1ª vela 80 + Pullback + Tendência ⚠️ | **+240% · −43,3%** | +58% · −10,0% | +37% | −6,4% | 3,7 | 1,59 → 1,79 | +27% | 0,04 |
> | 1933 | VWAP + Donchian + MACD + Rompe 200 + Bollinger | **+207% · −41,5%** | +45% · −8,4% | +27% | −11,2% | 1,3 | 1,17 → 1,26 | +20% | 0,30 |
> | 1934 | ADX + GPS médias + Pôr do sol + Rompe 200 + Tendência | **+236% · −52,5%** | +51% · −11,1% | +32% | −5,8% | 3,2 | 1,56 → 1,46 | +23% | 0,12 |
> | 1935 | ADX + IFR + Pôr do sol + Pullback + Rompe 200 | **+203% · −34,6%** | +43% · −6,3% | +28% | −4,1% | 3,8 | 1,67 → 1,86 | +20% | 0,03 |
> | 1936 | VWAP + GPS médias + IFR + Rompe 200 | **+155% · −39,6%** | +46% · −10,5% | +29% | −11,2% | 1,5 | 1,37 → 1,15 | +19% | 0,27 |
> | 1937 | ADX + Donchian + GPS médias + IFR + MACD | **+329% · −56,6%** | +69% · −12,3% | +39% | −7,4% | 3,5 | 1,32 → 1,60 | +29% | 0,38 |
> | 1938 | BB explosão + Pôr do sol + Pullback + Bollinger + Tendência | **+213% · −49,2%** | +44% · −9,6% | +29% | −4,3% | 3,7 | 1,87 → 1,48 | +16% | 0,07 |
> | 1939 | Donchian + BB explosão + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+205% · −51,0%** | +46% · −11,6% | +29% | −6,2% | 2,6 | 1,57 → 1,42 | +16% | 0,13 |
> | 1940 | BB explosão + IFR + Quinta + Bollinger + Onda ⚠️ | **+211% · −35,7%** | +45% · −7,2% | +29% | −6,5% | 2,5 | 1,01 → 1,67 | +23% | 0,09 |
> | 1941 | Donchian + IFR + Rompe 200 + Onda | **+207% · −32,9%** | +53% · −8,1% | +33% | −7,1% | 2,9 | 1,11 → 1,55 | +29% | 0,29 |
> | 1942 | ADX + MACD + Pôr do sol + Tendência | **+195% · −46,9%** | +52% · −11,1% | +34% | −8,3% | 2,5 | 1,20 → 1,64 | +25% | 0,16 |
> | 1943 | ADX + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+199% · −37,5%** | +44% · −7,0% | +29% | −5,7% | 2,9 | 0,92 → 1,75 | +22% | 0,07 |
> | 1944 | GPS médias + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+295% · −43,3%** | +53% · −8,9% | +32% | −5,4% | 3,6 | 1,76 → 1,54 | +23% | 0,22 |
> | 1945 | VWAP + Rompe 200 + Bollinger + Tendência + Onda | **+192% · −40,9%** | +43% · −8,1% | +29% | −9,4% | 1,7 | 1,03 → 1,31 | +25% | 0,26 |
> | 1946 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+309% · −42,4%** | +56% · −8,5% | +31% | −6,8% | 2,7 | 1,62 → 1,65 | +25% | 0,12 |
> | 1947 | BB explosão + Quinta + Pullback + Rompe 200 + Bollinger ⚠️ | **+135% · −32,6%** | +33% · −5,7% | +22% | −4,0% | 2,4 | 1,86 → 1,28 | +13% | 0,05 |
> | 1948 | ADX + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+187% · −38,9%** | +41% · −7,1% | +26% | −5,6% | 2,4 | 0,80 → 1,72 | +19% | 0,07 |
> | 1949 | ADX + MACD + Quinta + Bollinger + Onda ⚠️ | **+219% · −42,0%** | +46% · −8,0% | +29% | −6,3% | 2,6 | 0,70 → 1,80 | +19% | 0,12 |
> | 1950 | Donchian + GPS médias + Pullback | **+181% · −37,8%** | +63% · −12,5% | +35% | −6,5% | 3,4 | 1,84 → 1,22 | +17% | 0,13 |

> [!example]- Combinações 1951 a 1980 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1951 | Donchian + GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+304% · −43,8%** | +56% · −9,1% | +31% | −7,7% | 2,4 | 1,64 → 1,53 | +22% | 0,23 |
> | 1952 | VWAP + Donchian + GPS médias + Quinta + Rompe 200 ⚠️ | **+172% · −48,5%** | +43% · −10,8% | +27% | −9,5% | 1,5 | 1,42 → 1,02 | +16% | 0,12 |
> | 1953 | BB explosão + GPS médias + IFR + Pôr do sol + Tendência | **+240% · −59,8%** | +55% · −13,7% | +34% | −5,9% | 3,6 | 1,59 → 1,39 | +20% | 0,23 |
> | 1954 | ADX + Donchian + GPS médias + Pôr do sol + Bollinger | **+315% · −47,5%** | +61% · −9,5% | +32% | −4,1% | 4,6 | 1,46 → 1,63 | +24% | 0,14 |
> | 1955 | 1ª vela 80 + Tendência + Onda ⚠️ | **+157% · −29,1%** | +55% · −9,4% | +38% | −9,7% | 2,6 | 0,93 → 1,60 | +23% | 0,21 |
> | 1956 | Donchian + BB explosão + IFR + 1ª vela 80 + Quinta ⚠️ | **+253% · −41,6%** | +52% · −8,7% | +32% | −6,5% | 3,0 | 1,43 → 1,67 | +21% | 0,10 |
> | 1957 | ADX + Donchian + Pôr do sol + Bollinger + Onda | **+285% · −39,0%** | +55% · −7,8% | +31% | −4,7% | 3,8 | 0,94 → 1,80 | +21% | 0,09 |
> | 1958 | VWAP + GPS médias + MACD + Rompe 200 + Tendência | **+188% · −52,7%** | +46% · −11,2% | +31% | −11,0% | 1,7 | 1,33 → 1,12 | +20% | 0,30 |
> | 1959 | VWAP + GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+215% · −43,1%** | +46% · −9,3% | +30% | −9,8% | 1,8 | 1,37 → 1,48 | +24% | 0,07 |
> | 1960 | Donchian + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+220% · −31,5%** | +52% · −7,6% | +29% | −5,7% | 2,9 | 1,58 → 1,75 | +22% | 0,17 |
> | 1961 | ADX + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+204% · −40,4%** | +44% · −7,5% | +29% | −5,4% | 3,1 | 1,25 → 1,77 | +23% | 0,05 |
> | 1962 | ADX + Donchian + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+412% · −53,3%** | +68% · −10,5% | +38% | −6,3% | 4,0 | 1,51 → 1,84 | +27% | 0,26 |
> | 1963 | ADX + BB explosão + Pullback + Bollinger + Tendência | **+281% · −65,8%** | +56% · −15,8% | +33% | −6,2% | 3,3 | 1,63 → 1,61 | +19% | 0,23 |
> | 1964 | GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+219% · −35,5%** | +52% · −8,6% | +30% | −6,0% | 3,0 | 1,86 → 1,66 | +24% | 0,07 |
> | 1965 | VWAP + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+180% · −35,6%** | +41% · −7,0% | +29% | −10,2% | 1,6 | 0,83 → 1,52 | +23% | 0,22 |
> | 1966 | Donchian + GPS médias + Pullback + Bollinger + Onda | **+303% · −44,5%** | +57% · −8,2% | +33% | −7,1% | 2,8 | 1,41 → 1,49 | +26% | 0,16 |
> | 1967 | ADX + Donchian + Quinta + Bollinger + Onda ⚠️ | **+282% · −40,2%** | +55% · −7,6% | +31% | −4,7% | 3,9 | 0,99 → 1,78 | +22% | 0,08 |
> | 1968 | ADX + IFR + MACD + Pôr do sol + Pullback | **+238% · −35,7%** | +47% · −6,1% | +31% | −4,4% | 4,2 | 1,42 → 1,90 | +20% | 0,03 |
> | 1969 | GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+145% · −28,3%** | +41% · −6,9% | +24% | −5,3% | 2,1 | 1,75 → 1,29 | +20% | 0,05 |
> | 1970 | BB explosão + Quinta + Pullback + Rompe 200 ⚠️ | **+78% · −36,1%** | +29% · −8,5% | +22% | −4,4% | 2,0 | 1,68 → 0,94 | +10% | 0,02 |
> | 1971 | VWAP + Quinta + Bollinger + Tendência ⚠️ | **+153% · −31,7%** | +42% · −6,8% | +28% | −6,0% | 2,6 | 1,48 → 1,28 | +18% | 0,14 |
> | 1972 | Donchian + GPS médias + IFR + 1ª vela 80 ⚠️ | **+294% · −40,5%** | +69% · −10,8% | +39% | −9,0% | 2,9 | 1,57 → 1,61 | +27% | 0,31 |
> | 1973 | BB explosão + Quinta + Pullback + Tendência ⚠️ | **+139% · −51,3%** | +41% · −13,8% | +29% | −4,8% | 3,5 | 1,82 → 1,25 | +13% | 0,04 |
> | 1974 | ADX + 1ª vela 80 + Quinta + Pullback + Rompe 200 ⚠️ | **+169% · −34,5%** | +39% · −5,8% | +26% | −3,6% | 3,8 | 1,43 → 1,80 | +21% | −0,01 |
> | 1975 | BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+176% · −45,8%** | +41% · −9,7% | +28% | −5,2% | 3,0 | 1,46 → 1,45 | +19% | 0,10 |
> | 1976 | GPS médias + Quinta + Pullback + Bollinger + Onda ⚠️ | **+211% · −33,9%** | +44% · −6,0% | +28% | −6,0% | 2,5 | 1,39 → 1,49 | +25% | 0,01 |
> | 1977 | BB explosão + IFR + Pôr do sol + Rompe 200 | **+120% · −33,8%** | +37% · −7,7% | +26% | −5,0% | 2,6 | 1,35 → 1,42 | +16% | 0,09 |
> | 1978 | Donchian + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+278% · −44,3%** | +53% · −9,2% | +34% | −7,4% | 2,9 | 1,48 → 1,51 | +25% | 0,28 |
> | 1979 | ADX + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+251% · −43,4%** | +52% · −8,5% | +34% | −7,0% | 3,0 | 0,95 → 1,78 | +24% | 0,11 |
> | 1980 | Donchian + GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+250% · −50,5%** | +53% · −10,3% | +32% | −5,1% | 3,8 | 1,81 → 1,26 | +18% | 0,16 |

> [!example]- Combinações 1981 a 2010 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 1981 | GPS médias + MACD + Rompe 200 + Tendência + Onda | **+217% · −44,6%** | +49% · −8,9% | +33% | −9,0% | 2,3 | 1,16 → 1,33 | +29% | 0,27 |
> | 1982 | Donchian + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+224% · −39,6%** | +45% · −6,5% | +30% | −5,3% | 3,2 | 1,23 → 1,69 | +24% | −0,04 |
> | 1983 | ADX + Donchian + IFR + MACD + Tendência | **+368% · −59,3%** | +69% · −12,8% | +41% | −9,1% | 3,1 | 1,40 → 1,68 | +29% | 0,41 |
> | 1984 | MACD + Pôr do sol + Quinta ⚠️ | **+56% · −12,1%** | +26% · −3,7% | +22% | −4,4% | 2,0 | 0,92 → 1,48 | +18% | 0,02 |
> | 1985 | GPS médias + Pôr do sol + Bollinger + Tendência + Onda | **+266% · −39,8%** | +52% · −7,0% | +32% | −6,1% | 3,1 | 1,30 → 1,52 | +26% | 0,14 |
> | 1986 | VWAP + GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+229% · −43,6%** | +48% · −9,0% | +30% | −7,3% | 2,3 | 1,59 → 1,25 | +19% | 0,16 |
> | 1987 | ADX + BB explosão + IFR + Bollinger + Tendência | **+330% · −64,9%** | +63% · −15,1% | +37% | −7,7% | 3,1 | 1,46 → 1,73 | +23% | 0,37 |
> | 1988 | Donchian + 1ª vela 80 + Quinta + Tendência ⚠️ | **+235% · −37,7%** | +56% · −9,4% | +35% | −5,0% | 4,4 | 1,69 → 1,62 | +23% | 0,03 |
> | 1989 | VWAP + Donchian + IFR + 1ª vela 80 + Quinta ⚠️ | **+243% · −37,4%** | +49% · −7,4% | +31% | −8,3% | 2,2 | 1,34 → 1,60 | +21% | 0,08 |
> | 1990 | ADX + VWAP + IFR + Pôr do sol + Bollinger | **+238% · −38,3%** | +48% · −7,5% | +29% | −4,7% | 3,5 | 1,12 → 1,77 | +16% | 0,17 |
> | 1991 | ADX + GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+191% · −39,3%** | +45% · −7,5% | +28% | −4,8% | 3,2 | 1,20 → 1,56 | +23% | 0,05 |
> | 1992 | ADX + Donchian + Quinta + Pullback + Tendência ⚠️ | **+297% · −56,2%** | +57% · −11,9% | +35% | −5,6% | 3,9 | 1,80 → 1,64 | +21% | 0,10 |
> | 1993 | ADX + MACD + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+206% · −37,2%** | +44% · −6,5% | +29% | −4,7% | 3,5 | 1,22 → 1,90 | +20% | −0,00 |
> | 1994 | VWAP + MACD + Pôr do sol + Rompe 200 + Bollinger | **+126% · −34,3%** | +32% · −6,4% | +23% | −9,7% | 1,0 | 0,98 → 1,24 | +18% | 0,15 |
> | 1995 | VWAP + Donchian + GPS médias + Pôr do sol + Rompe 200 | **+174% · −47,8%** | +43% · −10,6% | +27% | −9,6% | 1,4 | 1,37 → 1,04 | +17% | 0,13 |
> | 1996 | ADX + Donchian + GPS médias + Rompe 200 + Tendência | **+302% · −63,6%** | +65% · −15,2% | +37% | −7,0% | 3,4 | 1,57 → 1,43 | +22% | 0,30 |
> | 1997 | ADX + VWAP + GPS médias + IFR + Tendência | **+286% · −62,8%** | +63% · −14,8% | +38% | −8,1% | 3,1 | 1,39 → 1,47 | +24% | 0,33 |
> | 1998 | ADX + IFR + Pôr do sol + Rompe 200 + Onda | **+201% · −37,6%** | +45% · −7,0% | +29% | −5,7% | 2,9 | 0,86 → 1,77 | +22% | 0,08 |
> | 1999 | VWAP + BB explosão + IFR + Quinta + Tendência ⚠️ | **+185% · −55,9%** | +45% · −12,5% | +31% | −7,1% | 2,6 | 1,36 → 1,30 | +16% | 0,18 |
> | 2000 | Donchian + GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+261% · −42,5%** | +53% · −9,0% | +32% | −9,2% | 2,1 | 1,36 → 1,51 | +27% | 0,16 |
> | 2001 | BB explosão + IFR + Pôr do sol + Rompe 200 + Onda | **+154% · −35,1%** | +38% · −6,4% | +27% | −7,1% | 2,0 | 0,91 → 1,48 | +23% | 0,10 |
> | 2002 | VWAP + Quinta + Bollinger + Tendência + Onda ⚠️ | **+193% · −38,3%** | +42% · −7,1% | +29% | −7,9% | 2,0 | 1,03 → 1,40 | +24% | 0,13 |
> | 2003 | ADX + IFR + MACD + 1ª vela 80 ⚠️ | **+238% · −40,4%** | +59% · −9,8% | +37% | −6,7% | 3,6 | 1,00 → 1,91 | +24% | 0,24 |
> | 2004 | VWAP + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+168% · −39,2%** | +37% · −7,9% | +26% | −11,1% | 1,2 | 0,99 → 1,54 | +19% | 0,16 |
> | 2005 | Donchian + GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+204% · −39,2%** | +47% · −8,1% | +29% | −6,6% | 2,4 | 1,16 → 1,38 | +25% | −0,01 |
> | 2006 | BB explosão + MACD + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+199% · −51,9%** | +45% · −10,6% | +31% | −7,7% | 2,4 | 1,29 → 1,42 | +22% | 0,24 |
> | 2007 | Donchian + IFR + MACD + 1ª vela 80 ⚠️ | **+266% · −32,9%** | +61% · −8,0% | +37% | −9,0% | 2,7 | 1,31 → 1,73 | +28% | 0,33 |
> | 2008 | Donchian + GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+256% · −44,6%** | +53% · −9,6% | +32% | −10,0% | 1,9 | 1,39 → 1,42 | +25% | 0,26 |
> | 2009 | VWAP + GPS médias + MACD + Pullback + Bollinger | **+211% · −44,6%** | +45% · −9,5% | +28% | −11,5% | 1,4 | 1,45 → 1,25 | +21% | 0,21 |
> | 2010 | ADX + Donchian + MACD + Pullback + Onda | **+265% · −49,5%** | +55% · −8,4% | +34% | −6,5% | 3,3 | 1,04 → 1,64 | +23% | 0,16 |

> [!example]- Combinações 2011 a 2040 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2011 | ADX + VWAP + Rompe 200 + Bollinger + Tendência | **+235% · −50,1%** | +49% · −9,8% | +30% | −7,6% | 2,3 | 1,30 → 1,45 | +21% | 0,25 |
> | 2012 | VWAP + GPS médias + Pôr do sol + Pullback | **+117% · −36,7%** | +37% · −9,4% | +25% | −9,1% | 1,4 | 1,52 → 0,96 | +16% | −0,02 |
> | 2013 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+206% · −37,2%** | +43% · −6,5% | +26% | −3,1% | 4,3 | 1,09 → 2,12 | +18% | 0,08 |
> | 2014 | ADX + IFR + MACD + Bollinger + Onda | **+304% · −45,6%** | +56% · −9,5% | +34% | −7,7% | 2,8 | 0,85 → 1,88 | +24% | 0,28 |
> | 2015 | VWAP + MACD + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+137% · −39,1%** | +34% · −8,0% | +26% | −10,8% | 1,2 | 1,20 → 1,31 | +21% | 0,13 |
> | 2016 | Donchian + GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+256% · −46,2%** | +53% · −8,8% | +32% | −4,0% | 4,8 | 1,80 → 1,37 | +20% | 0,08 |
> | 2017 | GPS médias + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+194% · −34,4%** | +43% · −6,6% | +29% | −6,7% | 2,4 | 1,23 → 1,52 | +24% | −0,05 |
> | 2018 | VWAP + IFR + MACD + Pôr do sol + Quinta ⚠️ | **+139% · −29,5%** | +34% · −5,3% | +26% | −7,9% | 1,6 | 1,07 → 1,44 | +17% | 0,07 |
> | 2019 | VWAP + MACD + Rompe 200 + Tendência | **+126% · −38,4%** | +39% · −10,1% | +29% | −10,4% | 1,6 | 1,15 → 1,10 | +20% | 0,30 |
> | 2020 | GPS médias + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+174% · −36,6%** | +40% · −7,4% | +27% | −8,3% | 1,7 | 1,36 → 1,43 | +22% | 0,06 |
> | 2021 | VWAP + Pullback + Rompe 200 + Bollinger + Onda | **+145% · −34,9%** | +35% · −6,9% | +24% | −10,2% | 1,1 | 1,00 → 1,23 | +20% | 0,18 |
> | 2022 | GPS médias + Rompe 200 + Tendência | **+148% · −40,2%** | +54% · −13,6% | +34% | −7,7% | 2,8 | 1,74 → 1,13 | +18% | 0,27 |
> | 2023 | BB explosão + IFR + Quinta + Rompe 200 + Onda ⚠️ | **+151% · −37,0%** | +38% · −6,6% | +27% | −7,2% | 2,0 | 0,97 → 1,46 | +23% | 0,08 |
> | 2024 | VWAP + Donchian + Pôr do sol + Rompe 200 + Onda | **+146% · −41,1%** | +38% · −8,3% | +26% | −10,4% | 1,2 | 0,85 → 1,19 | +20% | 0,13 |
> | 2025 | MACD + Rompe 200 | **+49% · −13,4%** | +31% · −6,0% | +24% | −9,6% | 1,2 | 0,79 → 1,08 | +22% | 0,06 |
> | 2026 | ADX + VWAP + IFR + MACD + Tendência | **+267% · −57,2%** | +57% · −11,6% | +37% | −9,6% | 2,5 | 1,17 → 1,54 | +24% | 0,35 |
> | 2027 | VWAP + Donchian + MACD + Quinta + Rompe 200 ⚠️ | **+148% · −38,8%** | +37% · −7,8% | +26% | −10,0% | 1,3 | 1,14 → 1,14 | +18% | 0,14 |
> | 2028 | VWAP + Donchian + GPS médias + IFR + MACD | **+256% · −51,6%** | +58% · −11,8% | +35% | −12,9% | 1,7 | 1,27 → 1,31 | +23% | 0,40 |
> | 2029 | BB explosão + IFR + MACD + 1ª vela 80 ⚠️ | **+187% · −38,1%** | +50% · −10,0% | +34% | −10,4% | 2,0 | 1,08 → 1,64 | +25% | 0,27 |
> | 2030 | ADX + Pôr do sol + Rompe 200 + Bollinger + Onda | **+190% · −38,2%** | +42% · −7,2% | +26% | −5,6% | 2,4 | 0,74 → 1,75 | +19% | 0,06 |
> | 2031 | ADX + IFR + 1ª vela 80 + Quinta ⚠️ | **+206% · −34,4%** | +52% · −7,7% | +33% | −4,4% | 4,6 | 1,15 → 2,05 | +21% | 0,04 |
> | 2032 | ADX + MACD + Pôr do sol + Bollinger + Onda | **+222% · −41,2%** | +46% · −7,7% | +29% | −6,4% | 2,5 | 0,64 → 1,83 | +19% | 0,13 |
> | 2033 | ADX + VWAP + IFR + Tendência + Onda | **+258% · −55,9%** | +57% · −11,2% | +37% | −9,7% | 2,5 | 0,99 → 1,57 | +24% | 0,28 |
> | 2034 | Donchian + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+237% · −37,0%** | +56% · −9,2% | +35% | −5,0% | 4,4 | 1,63 → 1,64 | +25% | 0,13 |
> | 2035 | ADX + Donchian + GPS médias + Quinta + Bollinger ⚠️ | **+311% · −47,6%** | +61% · −9,3% | +32% | −4,4% | 4,4 | 1,52 → 1,60 | +23% | 0,16 |
> | 2036 | ADX + Donchian + IFR + Quinta + Onda ⚠️ | **+285% · −41,1%** | +58% · −8,2% | +35% | −5,6% | 3,9 | 1,05 → 1,78 | +23% | 0,10 |
> | 2037 | VWAP + MACD + Rompe 200 + Bollinger + Onda | **+151% · −40,9%** | +37% · −8,6% | +26% | −12,9% | 1,0 | 0,66 → 1,31 | +21% | 0,27 |
> | 2038 | ADX + Donchian + MACD + Tendência + Onda | **+299% · −61,3%** | +64% · −13,2% | +39% | −10,0% | 2,6 | 1,04 → 1,59 | +29% | 0,34 |
> | 2039 | Donchian + GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+395% · −48,1%** | +67% · −10,1% | +37% | −6,3% | 3,9 | 1,73 → 1,58 | +25% | 0,29 |
> | 2040 | ADX + VWAP + Donchian + Rompe 200 + Bollinger | **+244% · −45,1%** | +51% · −8,2% | +29% | −6,9% | 2,3 | 1,18 → 1,45 | +19% | 0,24 |

> [!example]- Combinações 2041 a 2070 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2041 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+185% · −38,2%** | +41% · −7,3% | +30% | −9,5% | 1,8 | 1,14 → 1,42 | +23% | 0,21 |
> | 2042 | MACD + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+198% · −33,0%** | +41% · −5,7% | +28% | −7,9% | 1,9 | 0,75 → 1,81 | +15% | 0,09 |
> | 2043 | BB explosão + IFR + MACD + Rompe 200 + Tendência | **+219% · −54,5%** | +49% · −11,9% | +33% | −8,8% | 2,3 | 1,40 → 1,41 | +20% | 0,34 |
> | 2044 | Donchian + BB explosão + IFR + Pôr do sol + Quinta ⚠️ | **+204% · −43,1%** | +46% · −8,2% | +29% | −4,7% | 3,4 | 1,47 → 1,54 | +18% | 0,08 |
> | 2045 | ADX + GPS médias + MACD + Pullback + Rompe 200 | **+216% · −46,4%** | +48% · −9,4% | +30% | −5,5% | 3,2 | 1,46 → 1,46 | +23% | 0,11 |
> | 2046 | IFR + Quinta + Onda ⚠️ | **+113% · −22,0%** | +43% · −6,7% | +30% | −5,8% | 3,0 | 0,82 → 1,70 | +24% | −0,09 |
> | 2047 | Donchian + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+223% · −41,2%** | +46% · −8,4% | +30% | −6,7% | 2,6 | 1,22 → 1,58 | +27% | 0,12 |
> | 2048 | Donchian + BB explosão + GPS médias + IFR + Pullback | **+262% · −61,5%** | +60% · −14,6% | +35% | −7,4% | 3,0 | 1,65 → 1,36 | +17% | 0,28 |
> | 2049 | ADX + GPS médias + Pullback + Rompe 200 + Bollinger | **+254% · −43,9%** | +51% · −8,9% | +29% | −4,2% | 3,8 | 1,72 → 1,55 | +21% | 0,15 |
> | 2050 | ADX + Donchian + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+356% · −36,7%** | +60% · −7,2% | +33% | −4,3% | 4,8 | 1,59 → 1,98 | +23% | 0,10 |
> | 2051 | ADX + Donchian + MACD + Bollinger + Onda | **+310% · −47,3%** | +60% · −9,0% | +34% | −7,2% | 3,0 | 0,88 → 1,73 | +24% | 0,27 |
> | 2052 | VWAP + Donchian + IFR + MACD + Rompe 200 | **+213% · −40,4%** | +47% · −8,6% | +31% | −10,6% | 1,7 | 1,20 → 1,32 | +21% | 0,33 |
> | 2053 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+232% · −44,4%** | +48% · −9,3% | +29% | −6,7% | 2,4 | 1,56 → 1,44 | +22% | 0,11 |
> | 2054 | GPS médias + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+247% · −37,5%** | +50% · −7,7% | +32% | −7,7% | 2,5 | 1,09 → 1,69 | +24% | 0,11 |
> | 2055 | ADX + GPS médias + IFR + Pullback | **+249% · −46,4%** | +62% · −12,4% | +36% | −5,3% | 4,5 | 1,65 → 1,67 | +25% | 0,16 |
> | 2056 | ADX + Quinta + Tendência + Onda ⚠️ | **+186% · −45,7%** | +52% · −10,4% | +34% | −8,7% | 2,4 | 0,97 → 1,62 | +26% | 0,06 |
> | 2057 | ADX + IFR + MACD + Rompe 200 + Onda | **+227% · −44,1%** | +49% · −9,0% | +32% | −8,1% | 2,4 | 0,81 → 1,71 | +25% | 0,21 |
> | 2058 | ADX + BB explosão + Pullback + Rompe 200 + Tendência | **+209% · −65,4%** | +49% · −15,9% | +31% | −6,6% | 2,8 | 1,57 → 1,42 | +16% | 0,17 |
> | 2059 | VWAP + GPS médias + Pullback + Rompe 200 + Bollinger | **+180% · −42,0%** | +40% · −8,7% | +25% | −9,1% | 1,4 | 1,67 → 1,07 | +16% | 0,17 |
> | 2060 | ADX + GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+189% · −39,6%** | +43% · −7,6% | +27% | −4,0% | 3,5 | 1,70 → 1,54 | +22% | −0,00 |
> | 2061 | VWAP + GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+132% · −40,5%** | +35% · −8,2% | +25% | −10,7% | 1,1 | 1,14 → 1,13 | +21% | 0,04 |
> | 2062 | VWAP + Donchian + IFR + Rompe 200 + Onda | **+209% · −41,9%** | +48% · −8,9% | +31% | −10,0% | 1,8 | 1,00 → 1,36 | +23% | 0,28 |
> | 2063 | Donchian + IFR + Pôr do sol | **+170% · −26,4%** | +57% · −9,2% | +34% | −5,3% | 4,0 | 1,59 → 1,71 | +23% | 0,09 |
> | 2064 | GPS médias + Quinta + Rompe 200 ⚠️ | **+85% · −25,2%** | +36% · −8,1% | +24% | −6,0% | 1,8 | 1,67 → 0,88 | +17% | 0,02 |
> | 2065 | ADX + Pullback + Bollinger + Onda | **+200% · −35,1%** | +51% · −8,9% | +31% | −6,9% | 2,6 | 0,96 → 1,78 | +21% | 0,13 |
> | 2066 | BB explosão + MACD + Pôr do sol + Pullback + Rompe 200 | **+116% · −38,0%** | +32% · −6,9% | +24% | −5,6% | 1,9 | 1,39 → 1,25 | +16% | −0,00 |
> | 2067 | ADX + IFR + MACD + Quinta + Onda ⚠️ | **+228% · −41,0%** | +49% · −8,0% | +32% | −6,9% | 2,8 | 0,80 → 1,79 | +22% | 0,10 |
> | 2068 | VWAP + GPS médias + IFR + Tendência + Onda | **+248% · −50,9%** | +56% · −10,4% | +36% | −9,7% | 2,4 | 1,18 → 1,36 | +29% | 0,32 |
> | 2069 | ADX + VWAP + Donchian + IFR + Bollinger | **+327% · −48,4%** | +62% · −10,3% | +34% | −6,4% | 3,3 | 1,25 → 1,67 | +20% | 0,31 |
> | 2070 | ADX + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+195% · −34,6%** | +43% · −6,5% | +29% | −5,2% | 3,2 | 0,93 → 1,81 | +21% | −0,03 |

> [!example]- Combinações 2071 a 2100 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2071 | ADX + Donchian + GPS médias + IFR + Tendência | **+378% · −64,6%** | +76% · −15,5% | +42% | −7,4% | 4,0 | 1,59 → 1,60 | +26% | 0,41 |
> | 2072 | ADX + VWAP + MACD + Bollinger + Tendência | **+264% · −56,9%** | +54% · −11,6% | +33% | −8,8% | 2,3 | 1,14 → 1,52 | +23% | 0,38 |
> | 2073 | ADX + BB explosão + MACD + Pullback + Tendência | **+236% · −68,5%** | +53% · −17,3% | +34% | −7,9% | 2,7 | 1,40 → 1,51 | +21% | 0,21 |
> | 2074 | ADX + BB explosão + IFR + MACD + Bollinger | **+278% · −57,5%** | +56% · −11,8% | +33% | −6,6% | 3,1 | 1,09 → 1,74 | +25% | 0,34 |
> | 2075 | VWAP + Donchian + IFR + Pôr do sol | **+179% · −32,8%** | +49% · −8,3% | +31% | −8,3% | 2,1 | 1,28 → 1,39 | +18% | 0,13 |
> | 2076 | ADX + IFR + MACD + Pôr do sol + Onda | **+230% · −41,0%** | +49% · −8,0% | +32% | −6,9% | 2,8 | 0,76 → 1,81 | +21% | 0,13 |
> | 2077 | ADX + BB explosão + Quinta + Pullback + Bollinger ⚠️ | **+201% · −53,1%** | +44% · −10,9% | +27% | −4,5% | 3,1 | 1,50 → 1,64 | +18% | 0,10 |
> | 2078 | VWAP + IFR + Quinta + Onda ⚠️ | **+125% · −28,0%** | +38% · −6,3% | +28% | −9,4% | 1,6 | 0,76 → 1,42 | +19% | 0,00 |
> | 2079 | MACD + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+101% · −22,7%** | +29% · −4,3% | +23% | −6,1% | 1,7 | 0,67 → 1,45 | +17% | 0,01 |
> | 2080 | ADX + BB explosão + IFR + Rompe 200 + Tendência | **+253% · −64,1%** | +56% · −15,3% | +35% | −8,2% | 2,7 | 1,42 → 1,57 | +20% | 0,30 |
> | 2081 | Donchian + GPS médias + IFR + MACD | **+263% · −42,6%** | +66% · −11,4% | +38% | −10,7% | 2,4 | 1,43 → 1,44 | +27% | 0,44 |
> | 2082 | Donchian + GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+330% · −51,1%** | +64% · −10,6% | +39% | −8,7% | 2,9 | 1,50 → 1,47 | +27% | 0,35 |
> | 2083 | GPS médias + Pôr do sol + Pullback + Bollinger + Onda | **+213% · −34,7%** | +44% · −5,9% | +27% | −5,8% | 2,5 | 1,33 → 1,52 | +24% | 0,02 |
> | 2084 | ADX + VWAP + IFR + 1ª vela 80 + Quinta ⚠️ | **+218% · −38,2%** | +47% · −7,1% | +31% | −5,9% | 3,0 | 1,05 → 1,78 | +18% | 0,07 |
> | 2085 | Donchian + IFR + MACD + Rompe 200 | **+209% · −33,2%** | +53% · −8,5% | +33% | −7,7% | 2,7 | 1,38 → 1,50 | +24% | 0,35 |
> | 2086 | VWAP + GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+217% · −43,0%** | +46% · −9,2% | +30% | −9,8% | 1,8 | 1,32 → 1,50 | +25% | 0,13 |
> | 2087 | Donchian + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+226% · −42,4%** | +47% · −8,9% | +31% | −5,6% | 3,2 | 1,54 → 1,47 | +23% | 0,14 |
> | 2088 | ADX + IFR + Pôr do sol + Quinta + Pullback ⚠️ | **+203% · −33,9%** | +42% · −6,3% | +28% | −4,2% | 3,7 | 1,74 → 2,03 | +18% | 0,01 |
> | 2089 | VWAP + MACD + Quinta + Bollinger ⚠️ | **+112% · −31,9%** | +34% · −7,7% | +24% | −11,2% | 1,0 | 0,93 → 1,28 | +17% | 0,17 |
> | 2090 | GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+207% · −44,8%** | +53% · −12,1% | +34% | −6,1% | 3,5 | 1,66 → 1,40 | +23% | 0,21 |
> | 2091 | VWAP + Donchian + MACD + Pôr do sol + Onda | **+170% · −42,0%** | +42% · −8,8% | +29% | −11,9% | 1,3 | 0,75 → 1,31 | +20% | 0,21 |
> | 2092 | VWAP + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+143% · −45,3%** | +42% · −12,5% | +30% | −9,4% | 1,8 | 1,28 → 1,27 | +20% | 0,20 |
> | 2093 | VWAP + Donchian + MACD + Quinta + Onda ⚠️ | **+168% · −41,9%** | +42% · −8,7% | +29% | −11,7% | 1,3 | 0,79 → 1,30 | +21% | 0,15 |
> | 2094 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+240% · −36,0%** | +47% · −7,2% | +29% | −5,7% | 2,9 | 1,40 → 1,92 | +23% | 0,11 |
> | 2095 | ADX + Donchian + 1ª vela 80 + Tendência + Onda ⚠️ | **+331% · −54,9%** | +65% · −10,9% | +39% | −8,1% | 3,2 | 1,10 → 1,71 | +30% | 0,24 |
> | 2096 | Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+121% · −23,0%** | +36% · −5,0% | +27% | −5,8% | 2,4 | 0,89 → 1,68 | +19% | −0,01 |
> | 2097 | ADX + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+135% · −36,4%** | +34% · −6,4% | +24% | −4,6% | 2,5 | 0,98 → 1,66 | +19% | 0,02 |
> | 2098 | ADX + GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+309% · −52,3%** | +58% · −10,1% | +33% | −5,5% | 3,8 | 1,67 → 1,62 | +24% | 0,20 |
> | 2099 | ADX + GPS médias + IFR + Quinta ⚠️ | **+217% · −43,8%** | +58% · −11,5% | +34% | −5,4% | 3,9 | 1,42 → 1,65 | +27% | 0,16 |
> | 2100 | VWAP + BB explosão + IFR + MACD + Pullback | **+171% · −50,5%** | +42% · −10,7% | +30% | −10,3% | 1,6 | 1,22 → 1,30 | +18% | 0,21 |

> [!example]- Combinações 2101 a 2130 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2101 | ADX + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+247% · −46,5%** | +52% · −9,5% | +34% | −8,2% | 2,6 | 0,99 → 1,69 | +25% | 0,16 |
> | 2102 | BB explosão + Pôr do sol + Pullback + Tendência | **+141% · −49,7%** | +42% · −13,1% | +29% | −4,8% | 3,4 | 1,75 → 1,28 | +14% | 0,03 |
> | 2103 | IFR + Bollinger + Onda | **+168% · −25,4%** | +55% · −7,9% | +34% | −6,8% | 3,1 | 0,89 → 1,87 | +24% | 0,20 |
> | 2104 | VWAP + BB explosão + IFR + Pôr do sol + Tendência | **+187% · −55,0%** | +45% · −12,1% | +31% | −7,0% | 2,6 | 1,32 → 1,32 | +17% | 0,20 |
> | 2105 | GPS médias + Quinta + Pullback + Onda ⚠️ | **+138% · −28,1%** | +41% · −6,6% | +28% | −6,8% | 2,2 | 1,25 → 1,28 | +21% | −0,05 |
> | 2106 | VWAP + MACD + Quinta + Rompe 200 ⚠️ | **+70% · −28,3%** | +27% · −6,5% | +22% | −11,0% | 0,8 | 0,86 → 0,98 | +18% | 0,06 |
> | 2107 | VWAP + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+169% · −41,5%** | +38% · −8,6% | +26% | −12,1% | 1,1 | 0,98 → 1,44 | +22% | 0,28 |
> | 2108 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+170% · −31,0%** | +39% · −4,8% | +26% | −3,2% | 4,1 | 1,40 → 1,97 | +18% | −0,03 |
> | 2109 | ADX + Donchian + 1ª vela 80 + Pullback + Tendência ⚠️ | **+358% · −55,2%** | +64% · −11,3% | +38% | −5,6% | 4,5 | 1,66 → 1,76 | +25% | 0,12 |
> | 2110 | VWAP + MACD + Pôr do sol + Bollinger + Tendência | **+197% · −37,5%** | +42% · −7,2% | +29% | −8,1% | 2,0 | 1,24 → 1,36 | +22% | 0,25 |
> | 2111 | VWAP + GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+108% · −38,5%** | +31% · −7,9% | +22% | −8,0% | 1,1 | 1,37 → 0,91 | +16% | 0,01 |
> | 2112 | VWAP + Donchian + Pôr do sol + Quinta + Onda ⚠️ | **+147% · −37,3%** | +38% · −7,0% | +26% | −8,8% | 1,5 | 0,84 → 1,28 | +18% | 0,02 |
> | 2113 | Donchian + GPS médias + Rompe 200 + Bollinger | **+230% · −37,1%** | +57% · −9,5% | +30% | −7,5% | 2,4 | 1,71 → 1,30 | +19% | 0,25 |
> | 2114 | GPS médias + MACD + Quinta ⚠️ | **+109% · −28,2%** | +43% · −9,4% | +28% | −9,8% | 1,6 | 1,31 → 1,21 | +25% | −0,02 |
> | 2115 | ADX + Donchian + Rompe 200 + Tendência | **+246% · −55,3%** | +63% · −15,2% | +37% | −8,2% | 2,9 | 1,50 → 1,51 | +22% | 0,25 |
> | 2116 | VWAP + Donchian + Quinta + Rompe 200 ⚠️ | **+113% · −39,9%** | +36% · −10,4% | +24% | −8,9% | 1,3 | 1,27 → 0,98 | +14% | 0,06 |
> | 2117 | ADX + Donchian + Quinta + Tendência ⚠️ | **+248% · −54,7%** | +63% · −14,9% | +37% | −6,6% | 3,6 | 1,53 → 1,61 | +23% | 0,16 |
> | 2118 | ADX + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+207% · −36,6%** | +53% · −8,7% | +33% | −5,4% | 3,7 | 1,14 → 1,94 | +24% | 0,17 |
> | 2119 | ADX + Donchian + Pôr do sol + Pullback + Tendência | **+300% · −54,8%** | +57% · −11,3% | +34% | −5,2% | 4,2 | 1,75 → 1,66 | +22% | 0,09 |
> | 2120 | VWAP + BB explosão + IFR + 1ª vela 80 + Tendência ⚠️ | **+233% · −54,8%** | +52% · −12,0% | +34% | −9,0% | 2,4 | 1,30 → 1,46 | +21% | 0,29 |
> | 2121 | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% | −16,1% | 2,2 | 1,58 → 1,20 | +22% | — |
> | 2122 | ADX + MACD + Rompe 200 + Tendência + Onda | **+226% · −49,6%** | +50% · −10,6% | +34% | −10,0% | 2,1 | 0,95 → 1,56 | +27% | 0,21 |
> | 2123 | Donchian + BB explosão + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+251% · −45,2%** | +53% · −9,4% | +32% | −7,4% | 2,6 | 1,41 → 1,58 | +20% | 0,27 |
> | 2124 | VWAP + GPS médias + Quinta + Tendência ⚠️ | **+156% · −46,1%** | +46% · −12,2% | +31% | −8,3% | 2,2 | 1,49 → 1,09 | +18% | 0,08 |
> | 2125 | VWAP + MACD + Pullback + Bollinger + Onda | **+175% · −38,0%** | +39% · −7,7% | +27% | −11,7% | 1,2 | 0,88 → 1,40 | +20% | 0,23 |
> | 2126 | ADX + BB explosão + IFR + Rompe 200 + Bollinger | **+249% · −50,5%** | +52% · −10,4% | +30% | −5,4% | 3,2 | 1,26 → 1,72 | +21% | 0,27 |
> | 2127 | ADX + Donchian + GPS médias + Pôr do sol + Quinta ⚠️ | **+241% · −46,7%** | +53% · −9,0% | +30% | −3,7% | 4,6 | 1,45 → 1,53 | +23% | 0,05 |
> | 2128 | BB explosão + 1ª vela 80 + Quinta + Pullback + Bollinger ⚠️ | **+182% · −34,1%** | +39% · −6,4% | +26% | −4,1% | 3,1 | 1,70 → 1,73 | +18% | −0,02 |
> | 2129 | VWAP + Donchian + IFR + MACD + Onda | **+232% · −45,8%** | +52% · −9,8% | +34% | −11,7% | 1,8 | 0,89 → 1,43 | +23% | 0,37 |
> | 2130 | VWAP + Donchian + 1ª vela 80 + Pullback + Tendência ⚠️ | **+267% · −53,6%** | +53% · −12,3% | +34% | −7,1% | 3,0 | 1,59 → 1,41 | +20% | 0,17 |

> [!example]- Combinações 2131 a 2160 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2131 | GPS médias + MACD + Pôr do sol + Bollinger | **+176% · −33,8%** | +46% · −8,6% | +28% | −8,3% | 1,8 | 1,39 → 1,47 | +24% | 0,11 |
> | 2132 | Donchian + GPS médias + Pullback + Onda | **+213% · −40,2%** | +58% · −10,7% | +34% | −8,3% | 2,6 | 1,30 → 1,33 | +27% | 0,17 |
> | 2133 | ADX + Donchian + GPS médias + MACD + Rompe 200 | **+258% · −55,2%** | +58% · −12,0% | +33% | −7,3% | 2,8 | 1,29 → 1,44 | +25% | 0,26 |
> | 2134 | VWAP + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+220% · −35,9%** | +44% · −6,8% | +29% | −6,8% | 2,4 | 1,39 → 1,56 | +23% | 0,18 |
> | 2135 | ADX + IFR + Pôr do sol + Quinta + Onda ⚠️ | **+201% · −34,1%** | +44% · −6,8% | +29% | −5,0% | 3,3 | 0,85 → 1,88 | +19% | 0,02 |
> | 2136 | VWAP + Pullback + Rompe 200 + Onda | **+85% · −34,8%** | +31% · −8,8% | +24% | −12,1% | 0,9 | 0,84 → 1,00 | +20% | 0,18 |
> | 2137 | ADX + GPS médias + MACD + Pullback + Bollinger | **+289% · −44,2%** | +55% · −8,9% | +32% | −5,6% | 3,4 | 1,52 → 1,65 | +26% | 0,18 |
> | 2138 | Donchian + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+200% · −33,4%** | +42% · −6,2% | +28% | −6,7% | 2,3 | 1,35 → 1,57 | +24% | 0,07 |
> | 2139 | ADX + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+209% · −33,2%** | +53% · −8,1% | +33% | −4,1% | 4,9 | 1,09 → 2,08 | +20% | 0,09 |
> | 2140 | MACD + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+200% · −34,9%** | +41% · −6,5% | +28% | −9,1% | 1,7 | 0,76 → 1,71 | +16% | 0,22 |
> | 2141 | ADX + Donchian + IFR + MACD + Onda | **+307% · −48,8%** | +63% · −9,7% | +38% | −8,1% | 3,1 | 0,94 → 1,72 | +25% | 0,30 |
> | 2142 | BB explosão + GPS médias + IFR + Pullback + Tendência | **+266% · −62,7%** | +58% · −15,1% | +36% | −6,0% | 3,9 | 1,78 → 1,38 | +18% | 0,26 |
> | 2143 | VWAP + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+248% · −38,5%** | +48% · −7,8% | +31% | −9,8% | 1,9 | 0,86 → 1,72 | +22% | 0,26 |
> | 2144 | Donchian + MACD + 1ª vela 80 + Bollinger ⚠️ | **+255% · −33,3%** | +57% · −8,1% | +33% | −9,2% | 2,2 | 1,30 → 1,74 | +27% | 0,29 |
> | 2145 | ADX + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+241% · −43,4%** | +47% · −8,5% | +29% | −5,5% | 3,0 | 1,02 → 1,96 | +20% | 0,14 |
> | 2146 | VWAP + Donchian + IFR + MACD | **+200% · −38,4%** | +54% · −10,3% | +34% | −12,4% | 1,7 | 1,12 → 1,36 | +22% | 0,42 |
> | 2147 | VWAP + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+99% · −32,1%** | +32% · −8,0% | +24% | −8,5% | 1,3 | 1,26 → 1,35 | +16% | 0,01 |
> | 2148 | GPS médias + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+154% · −36,2%** | +38% · −7,2% | +27% | −8,9% | 1,6 | 0,97 → 1,30 | +22% | 0,06 |
> | 2149 | ADX + 1ª vela 80 + Quinta + Tendência ⚠️ | **+210% · −40,1%** | +54% · −9,5% | +34% | −6,3% | 3,4 | 1,35 → 1,80 | +26% | 0,03 |
> | 2150 | ADX + VWAP + IFR + Pullback + Bollinger | **+269% · −38,6%** | +51% · −7,9% | +31% | −4,9% | 3,7 | 1,44 → 1,74 | +18% | 0,18 |
> | 2151 | VWAP + Donchian + Quinta + Rompe 200 + Onda ⚠️ | **+145% · −41,6%** | +38% · −8,5% | +26% | −10,2% | 1,3 | 0,89 → 1,17 | +21% | 0,08 |
> | 2152 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+205% · −33,4%** | +42% · −6,2% | +26% | −5,0% | 2,6 | 1,65 → 1,71 | +20% | 0,03 |
> | 2153 | Donchian + MACD + Quinta + Pullback ⚠️ | **+164% · −30,0%** | +44% · −7,7% | +29% | −4,5% | 3,6 | 1,69 → 1,47 | +20% | 0,01 |
> | 2154 | VWAP + Pôr do sol + Quinta + Pullback ⚠️ | **+62% · −24,1%** | +25% · −5,4% | +20% | −6,7% | 1,1 | 1,48 → 0,90 | +13% | −0,02 |
> | 2155 | MACD + Rompe 200 + Tendência + Onda | **+153% · −37,9%** | +44% · −9,5% | +32% | −10,7% | 1,8 | 0,96 → 1,38 | +26% | 0,27 |
> | 2156 | VWAP + IFR + Pullback + Onda | **+146% · −30,5%** | +42% · −7,2% | +30% | −9,4% | 1,9 | 1,00 → 1,40 | +20% | 0,13 |
> | 2157 | BB explosão + Pullback + Rompe 200 + Bollinger + Tendência | **+209% · −51,4%** | +44% · −10,4% | +29% | −5,5% | 2,9 | 1,86 → 1,34 | +14% | 0,17 |
> | 2158 | ADX + MACD + Rompe 200 + Bollinger + Onda | **+220% · −43,9%** | +46% · −8,6% | +29% | −7,3% | 2,2 | 0,72 → 1,71 | +20% | 0,19 |
> | 2159 | VWAP + Donchian + GPS médias + IFR + 1ª vela 80 ⚠️ | **+290% · −50,2%** | +60% · −11,5% | +35% | −11,6% | 1,9 | 1,38 → 1,45 | +24% | 0,31 |
> | 2160 | ADX + VWAP + IFR + MACD + Rompe 200 | **+197% · −43,4%** | +46% · −8,4% | +30% | −7,9% | 2,2 | 0,97 → 1,51 | +20% | 0,23 |

> [!example]- Combinações 2161 a 2190 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2161 | Donchian + GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+210% · −36,9%** | +46% · −7,4% | +29% | −7,2% | 2,2 | 1,46 → 1,36 | +23% | 0,05 |
> | 2162 | ADX + VWAP + IFR + 1ª vela 80 + Bollinger ⚠️ | **+291% · −42,5%** | +54% · −8,1% | +32% | −6,7% | 2,9 | 1,09 → 1,87 | +19% | 0,28 |
> | 2163 | ADX + Donchian + IFR + Tendência | **+327% · −55,7%** | +77% · −15,0% | +44% | −8,7% | 3,6 | 1,53 → 1,71 | +27% | 0,40 |
> | 2164 | VWAP + GPS médias + Pullback + Rompe 200 | **+115% · −43,6%** | +37% · −11,9% | +25% | −10,8% | 1,2 | 1,54 → 0,83 | +14% | 0,14 |
> | 2165 | ADX + GPS médias + MACD + Rompe 200 + Tendência | **+258% · −57,7%** | +56% · −12,9% | +35% | −8,3% | 2,6 | 1,40 → 1,45 | +26% | 0,26 |
> | 2166 | GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+236% · −40,1%** | +59% · −10,2% | +38% | −9,0% | 2,8 | 1,45 → 1,46 | +30% | 0,29 |
> | 2167 | GPS médias + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+196% · −34,4%** | +43% · −6,4% | +29% | −6,7% | 2,4 | 1,18 → 1,54 | +23% | 0,01 |
> | 2168 | VWAP + Donchian + GPS médias + IFR | **+223% · −47,9%** | +62% · −12,5% | +36% | −12,3% | 1,9 | 1,38 → 1,26 | +20% | 0,37 |
> | 2169 | Pullback + Rompe 200 + Onda | **+73% · −20,6%** | +32% · −6,2% | +25% | −6,9% | 1,7 | 0,92 → 1,13 | +24% | 0,15 |
> | 2170 | VWAP + Donchian + MACD + Pôr do sol + Pullback | **+174% · −38,3%** | +40% · −8,3% | +27% | −9,0% | 1,6 | 1,32 → 1,25 | +18% | 0,10 |
> | 2171 | VWAP + Donchian + Pôr do sol + Pullback + Rompe 200 | **+147% · −43,7%** | +36% · −9,3% | +25% | −6,9% | 1,7 | 1,54 → 1,06 | +14% | 0,06 |
> | 2172 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+134% · −33,6%** | +34% · −6,4% | +25% | −7,1% | 1,7 | 1,01 → 1,57 | +17% | 0,00 |
> | 2173 | VWAP + Donchian + MACD + Bollinger + Onda | **+230% · −44,9%** | +49% · −9,5% | +30% | −12,7% | 1,4 | 0,83 → 1,40 | +22% | 0,36 |
> | 2174 | ADX + Donchian + GPS médias + IFR + 1ª vela 80 ⚠️ | **+365% · −50,5%** | +71% · −10,1% | +39% | −6,3% | 4,2 | 1,41 → 1,73 | +29% | 0,29 |
> | 2175 | GPS médias + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+243% · −39,6%** | +50% · −8,3% | +32% | −8,6% | 2,3 | 1,13 → 1,59 | +25% | 0,24 |
> | 2176 | VWAP + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+100% · −36,5%** | +30% · −7,3% | +24% | −11,9% | 0,9 | 0,61 → 1,19 | +20% | 0,08 |
> | 2177 | 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+120% · −29,9%** | +36% · −7,2% | +27% | −7,3% | 1,9 | 0,96 → 1,51 | +21% | 0,10 |
> | 2178 | ADX + VWAP + MACD + Quinta + Bollinger ⚠️ | **+188% · −42,8%** | +42% · −8,3% | +27% | −6,9% | 2,1 | 0,89 → 1,56 | +16% | 0,20 |
> | 2179 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+203% · −32,6%** | +43% · −6,1% | +28% | −6,8% | 2,2 | 1,28 → 1,59 | +25% | 0,12 |
> | 2180 | VWAP + MACD + Pôr do sol + Quinta + Tendência ⚠️ | **+140% · −35,5%** | +35% · −7,0% | +27% | −6,8% | 2,1 | 1,21 → 1,25 | +21% | 0,11 |
> | 2181 | Donchian + Pullback + Bollinger | **+180% · −23,4%** | +57% · −7,0% | +31% | −3,1% | 6,0 | 2,08 → 1,69 | +17% | 0,03 |
> | 2182 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+177% · −36,8%** | +40% · −7,4% | +27% | −8,4% | 1,7 | 1,29 → 1,45 | +22% | 0,10 |
> | 2183 | MACD + Pôr do sol + Pullback + Onda | **+110% · −23,1%** | +34% · −5,1% | +26% | −6,5% | 2,1 | 0,85 → 1,51 | +21% | 0,00 |
> | 2184 | VWAP + MACD + Rompe 200 + Tendência + Onda | **+158% · −42,8%** | +40% · −8,7% | +30% | −11,5% | 1,5 | 0,88 → 1,24 | +27% | 0,30 |
> | 2185 | BB explosão + Quinta + Pullback + Tendência + Onda ⚠️ | **+172% · −52,0%** | +42% · −10,6% | +30% | −6,2% | 2,7 | 1,28 → 1,36 | +22% | 0,06 |
> | 2186 | BB explosão + IFR + Pôr do sol + Bollinger + Onda | **+214% · −36,0%** | +45% · −7,2% | +29% | −6,4% | 2,5 | 0,95 → 1,70 | +22% | 0,11 |
> | 2187 | BB explosão + IFR + Rompe 200 + Tendência | **+182% · −51,1%** | +51% · −14,1% | +34% | −8,3% | 2,5 | 1,57 → 1,38 | +16% | 0,34 |
> | 2188 | ADX + BB explosão + Pôr do sol + Pullback + Bollinger | **+204% · −51,9%** | +45% · −10,4% | +27% | −4,1% | 3,4 | 1,43 → 1,69 | +19% | 0,06 |
> | 2189 | ADX + IFR + MACD + Pullback | **+219% · −36,0%** | +55% · −8,3% | +35% | −5,9% | 3,7 | 1,38 → 1,83 | +22% | 0,10 |
> | 2190 | VWAP + MACD + Quinta + Bollinger + Onda ⚠️ | **+151% · −37,7%** | +36% · −7,6% | +26% | −11,4% | 1,1 | 0,64 → 1,40 | +19% | 0,15 |

> [!example]- Combinações 2191 a 2220 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2191 | VWAP + Donchian + MACD + Quinta + Pullback ⚠️ | **+172% · −38,3%** | +40% · −8,3% | +28% | −8,8% | 1,7 | 1,38 → 1,23 | +18% | 0,08 |
> | 2192 | GPS médias + MACD + Bollinger + Tendência + Onda | **+291% · −43,8%** | +57% · −8,9% | +35% | −8,5% | 2,6 | 1,19 → 1,48 | +28% | 0,32 |
> | 2193 | Donchian + IFR + Rompe 200 | **+168% · −28,8%** | +57% · −9,7% | +34% | −5,9% | 3,6 | 1,62 → 1,50 | +19% | 0,34 |
> | 2194 | BB explosão + 1ª vela 80 + Quinta + Pullback ⚠️ | **+116% · −36,0%** | +36% · −9,1% | +26% | −4,5% | 2,8 | 1,53 → 1,50 | +17% | −0,13 |
> | 2195 | VWAP + Donchian + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+231% · −38,1%** | +46% · −7,6% | +28% | −9,0% | 1,7 | 1,32 → 1,55 | +20% | 0,10 |
> | 2196 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+138% · −30,7%** | +33% · −5,6% | +23% | −7,4% | 1,3 | 1,12 → 1,64 | +16% | 0,07 |
> | 2197 | VWAP + MACD + Quinta + Pullback + Onda ⚠️ | **+119% · −33,4%** | +32% · −6,4% | +26% | −10,7% | 1,2 | 0,84 → 1,27 | +19% | 0,05 |
> | 2198 | ADX + Donchian + IFR + 1ª vela 80 + Onda ⚠️ | **+339% · −42,7%** | +65% · −8,7% | +38% | −6,2% | 4,1 | 1,00 → 1,86 | +26% | 0,22 |
> | 2199 | VWAP + MACD + Quinta + Tendência + Onda ⚠️ | **+159% · −39,6%** | +40% · −7,7% | +30% | −10,0% | 1,7 | 0,88 → 1,31 | +24% | 0,16 |
> | 2200 | BB explosão + IFR + Quinta + Rompe 200 ⚠️ | **+117% · −35,7%** | +37% · −8,4% | +26% | −5,0% | 2,6 | 1,43 → 1,39 | +15% | 0,10 |
> | 2201 | VWAP + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+145% · −37,7%** | +41% · −9,7% | +30% | −7,7% | 2,2 | 1,24 → 1,39 | +23% | 0,14 |
> | 2202 | Donchian + BB explosão + IFR + 1ª vela 80 + Tendência ⚠️ | **+323% · −59,3%** | +64% · −12,9% | +39% | −6,8% | 3,8 | 1,53 → 1,60 | +22% | 0,35 |
> | 2203 | ADX + VWAP + Quinta + Rompe 200 + Tendência ⚠️ | **+172% · −49,5%** | +42% · −9,8% | +28% | −6,7% | 2,3 | 1,27 → 1,34 | +19% | 0,10 |
> | 2204 | VWAP + GPS médias + Pôr do sol + Bollinger + Tendência | **+232% · −42,2%** | +48% · −8,4% | +30% | −7,4% | 2,3 | 1,54 → 1,27 | +20% | 0,18 |
> | 2205 | IFR + 1ª vela 80 + Onda ⚠️ | **+156% · −23,2%** | +53% · −7,3% | +36% | −8,3% | 2,8 | 0,76 → 1,83 | +21% | 0,18 |
> | 2206 | ADX + IFR + Pullback + Rompe 200 | **+186% · −33,0%** | +49% · −7,7% | +31% | −5,0% | 3,7 | 1,62 → 1,78 | +22% | 0,10 |
> | 2207 | VWAP + BB explosão + IFR + 1ª vela 80 + Quinta ⚠️ | **+168% · −42,9%** | +41% · −8,9% | +28% | −9,4% | 1,6 | 1,12 → 1,48 | +19% | 0,07 |
> | 2208 | VWAP + Donchian + GPS médias + Pullback | **+184% · −47,9%** | +53% · −13,3% | +31% | −10,9% | 1,7 | 1,54 → 1,06 | +15% | 0,20 |
> | 2209 | ADX + Donchian + GPS médias + MACD + Quinta ⚠️ | **+261% · −52,4%** | +58% · −10,9% | +33% | −6,4% | 3,2 | 1,30 → 1,50 | +26% | 0,16 |
> | 2210 | VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+140% · −33,3%** | +33% · −6,3% | +23% | −8,5% | 1,2 | 1,11 → 1,48 | +19% | 0,14 |
> | 2211 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+202% · −31,0%** | +42% · −4,8% | +28% | −5,8% | 2,6 | 1,30 → 1,70 | +22% | 0,04 |
> | 2212 | ADX + GPS médias + IFR + Pôr do sol | **+220% · −42,4%** | +58% · −10,9% | +34% | −4,5% | 4,7 | 1,36 → 1,68 | +26% | 0,14 |
> | 2213 | ADX + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+210% · −41,7%** | +54% · −10,2% | +34% | −7,8% | 2,8 | 1,32 → 1,70 | +27% | 0,14 |
> | 2214 | ADX + BB explosão + IFR + MACD + Tendência | **+275% · −67,8%** | +60% · −16,6% | +38% | −9,4% | 2,7 | 1,26 → 1,61 | +25% | 0,39 |
> | 2215 | VWAP + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+137% · −35,2%** | +35% · −6,4% | +27% | −7,0% | 2,0 | 0,94 → 1,29 | +21% | 0,05 |
> | 2216 | ADX + MACD + Bollinger | **+162% · −38,7%** | +56% · −13,1% | +32% | −8,5% | 2,3 | 0,83 → 1,79 | +21% | 0,34 |
> | 2217 | GPS médias + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+271% · −44,4%** | +55% · −9,6% | +35% | −10,6% | 2,1 | 1,01 → 1,63 | +25% | 0,28 |
> | 2218 | ADX + MACD + Rompe 200 + Tendência | **+192% · −47,9%** | +52% · −12,1% | +34% | −9,8% | 2,2 | 1,24 → 1,52 | +26% | 0,21 |
> | 2219 | VWAP + Donchian + MACD + Rompe 200 + Tendência | **+208% · −52,8%** | +48% · −11,5% | +32% | −9,5% | 2,0 | 1,29 → 1,19 | +19% | 0,36 |
> | 2220 | ADX + Donchian + MACD + Pullback + Bollinger | **+327% · −45,7%** | +58% · −7,8% | +33% | −5,0% | 4,0 | 1,50 → 1,78 | +22% | 0,17 |

> [!example]- Combinações 2221 a 2250 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2221 | ADX + VWAP + Bollinger + Tendência | **+221% · −53,0%** | +57% · −13,6% | +34% | −8,3% | 2,5 | 1,22 → 1,50 | +22% | 0,36 |
> | 2222 | ADX + GPS médias + Pôr do sol + Bollinger + Tendência | **+313% · −50,8%** | +59% · −9,5% | +33% | −5,4% | 3,8 | 1,61 → 1,65 | +25% | 0,19 |
> | 2223 | Donchian + 1ª vela 80 + Tendência + Onda ⚠️ | **+256% · −39,8%** | +63% · −10,0% | +39% | −8,3% | 3,1 | 1,15 → 1,59 | +34% | 0,28 |
> | 2224 | GPS médias + IFR + 1ª vela 80 ⚠️ | **+191% · −32,2%** | +63% · −11,0% | +38% | −9,4% | 2,7 | 1,49 → 1,64 | +31% | 0,26 |
> | 2225 | ADX + Pôr do sol + Tendência + Onda | **+189% · −45,2%** | +52% · −10,1% | +34% | −8,7% | 2,4 | 0,92 → 1,64 | +25% | 0,10 |
> | 2226 | VWAP + MACD + 1ª vela 80 + Tendência ⚠️ | **+169% · −39,9%** | +47% · −10,2% | +33% | −12,4% | 1,7 | 1,11 → 1,37 | +26% | 0,35 |
> | 2227 | ADX + VWAP + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+217% · −40,3%** | +47% · −7,5% | +31% | −6,8% | 2,6 | 1,04 → 1,69 | +20% | 0,19 |
> | 2228 | ADX + Donchian + IFR + Pullback + Onda | **+319% · −44,9%** | +61% · −8,5% | +37% | −5,7% | 4,2 | 1,23 → 1,78 | +24% | 0,16 |
> | 2229 | VWAP + Donchian + BB explosão + IFR + Pullback | **+212% · −56,9%** | +50% · −13,0% | +32% | −8,8% | 2,1 | 1,41 → 1,29 | +14% | 0,25 |
> | 2230 | MACD + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+201% · −32,5%** | +41% · −5,8% | +28% | −8,1% | 1,9 | 0,69 → 1,83 | +15% | 0,16 |
> | 2231 | VWAP + Donchian + Rompe 200 + Bollinger | **+166% · −36,9%** | +45% · −9,4% | +26% | −10,1% | 1,3 | 1,31 → 1,16 | +16% | 0,25 |
> | 2232 | Donchian + Pôr do sol + Bollinger + Tendência | **+252% · −35,9%** | +58% · −9,1% | +33% | −5,3% | 3,9 | 1,81 → 1,60 | +21% | 0,15 |
> | 2233 | GPS médias + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+186% · −32,5%** | +41% · −6,3% | +26% | −6,1% | 2,1 | 1,10 → 1,52 | +20% | −0,01 |
> | 2234 | GPS médias + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+238% · −39,8%** | +46% · −8,3% | +29% | −8,3% | 1,9 | 1,42 → 1,62 | +21% | 0,11 |
> | 2235 | VWAP + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+180% · −39,8%** | +42% · −7,9% | +30% | −9,3% | 1,9 | 0,90 → 1,46 | +24% | 0,17 |
> | 2236 | Donchian + MACD + 1ª vela 80 + Pullback ⚠️ | **+215% · −30,5%** | +52% · −7,1% | +33% | −7,4% | 2,8 | 1,53 → 1,64 | +25% | 0,08 |
> | 2237 | ADX + IFR + Quinta + Pullback + Onda ⚠️ | **+228% · −34,5%** | +47% · −6,6% | +31% | −5,4% | 3,4 | 1,15 → 1,85 | +21% | 0,02 |
> | 2238 | ADX + Donchian + 1ª vela 80 + Quinta + Tendência ⚠️ | **+321% · −52,6%** | +60% · −10,4% | +36% | −5,5% | 4,2 | 1,49 → 1,76 | +26% | 0,09 |
> | 2239 | Donchian + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+182% · −39,2%** | +46% · −10,3% | +29% | −4,7% | 3,6 | 1,79 → 1,58 | +19% | 0,06 |
> | 2240 | ADX + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+244% · −42,3%** | +48% · −8,1% | +29% | −5,1% | 3,2 | 0,95 → 1,99 | +19% | 0,16 |
> | 2241 | ADX + Donchian + MACD + Rompe 200 + Onda | **+233% · −45,2%** | +52% · −8,5% | +32% | −7,7% | 2,5 | 0,85 → 1,57 | +25% | 0,20 |
> | 2242 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+171% · −33,8%** | +38% · −6,4% | +25% | −3,5% | 3,5 | 1,59 → 1,69 | +21% | 0,01 |
> | 2243 | Rompe 200 + Tendência + Onda | **+116% · −30,5%** | +45% · −9,9% | +32% | −10,7% | 1,8 | 1,00 → 1,30 | +28% | 0,23 |
> | 2244 | VWAP + Donchian + Pullback + Bollinger | **+191% · −34,2%** | +49% · −8,4% | +29% | −8,6% | 1,9 | 1,58 → 1,28 | +16% | 0,18 |
> | 2245 | ADX + BB explosão + Pôr do sol + Quinta + Tendência ⚠️ | **+189% · −61,6%** | +45% · −14,4% | +29% | −5,9% | 2,8 | 1,36 → 1,54 | +20% | 0,10 |
> | 2246 | ADX + Donchian + Quinta + Pullback + Bollinger ⚠️ | **+291% · −38,9%** | +53% · −6,5% | +30% | −3,8% | 4,5 | 1,79 → 1,86 | +20% | 0,06 |
> | 2247 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+90% · −35,3%** | +27% · −7,0% | +21% | −7,5% | 1,1 | 1,03 → 1,29 | +17% | 0,03 |
> | 2248 | VWAP + GPS médias + MACD + Pôr do sol + Tendência | **+193% · −48,6%** | +46% · −9,7% | +31% | −10,1% | 1,8 | 1,30 → 1,20 | +23% | 0,21 |
> | 2249 | GPS médias + Pullback | **+94% · −26,5%** | +51% · −12,7% | +31% | −6,1% | 3,1 | 1,91 → 1,00 | +17% | −0,06 |
> | 2250 | VWAP + GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+214% · −45,1%** | +47% · −9,8% | +30% | −10,7% | 1,6 | 1,35 → 1,39 | +22% | 0,25 |

> [!example]- Combinações 2251 a 2280 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2251 | BB explosão + IFR + MACD + Pôr do sol + Onda | **+178% · −37,3%** | +43% · −7,4% | +30% | −8,2% | 2,1 | 0,79 → 1,56 | +23% | 0,14 |
> | 2252 | ADX + Donchian + Pôr do sol + Pullback + Onda | **+240% · −47,4%** | +51% · −7,4% | +31% | −4,9% | 3,8 | 1,11 → 1,67 | +21% | 0,03 |
> | 2253 | VWAP + Donchian + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+247% · −54,2%** | +53% · −12,6% | +32% | −10,8% | 1,8 | 1,51 → 1,31 | +20% | 0,16 |
> | 2254 | VWAP + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+202% · −41,7%** | +46% · −8,5% | +33% | −12,2% | 1,7 | 0,85 → 1,44 | +26% | 0,33 |
> | 2255 | Donchian + Pôr do sol + Quinta + Bollinger ⚠️ | **+168% · −22,6%** | +43% · −5,6% | +25% | −2,4% | 5,1 | 1,86 → 1,82 | +20% | −0,01 |
> | 2256 | ADX + Donchian + Quinta + Rompe 200 + Onda ⚠️ | **+208% · −40,0%** | +48% · −7,2% | +29% | −5,4% | 3,0 | 0,95 → 1,57 | +23% | 0,05 |
> | 2257 | ADX + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+268% · −39,0%** | +51% · −7,6% | +31% | −5,7% | 3,2 | 0,98 → 1,93 | +22% | 0,12 |
> | 2258 | VWAP + GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+130% · −42,5%** | +35% · −8,8% | +25% | −11,5% | 1,0 | 1,18 → 1,03 | +19% | 0,10 |
> | 2259 | VWAP + Donchian + IFR + Rompe 200 | **+176% · −36,9%** | +49% · −9,6% | +31% | −9,4% | 1,9 | 1,33 → 1,26 | +17% | 0,29 |
> | 2260 | GPS médias + Pôr do sol + Pullback + Onda | **+140% · −28,9%** | +41% · −6,7% | +28% | −6,6% | 2,3 | 1,19 → 1,31 | +20% | −0,03 |
> | 2261 | ADX + GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+234% · −41,3%** | +49% · −7,9% | +30% | −4,5% | 3,9 | 1,55 → 1,68 | +25% | −0,01 |
> | 2262 | ADX + Donchian + GPS médias + MACD + Tendência | **+322% · −66,9%** | +70% · −15,7% | +40% | −8,3% | 3,3 | 1,42 → 1,49 | +27% | 0,39 |
> | 2263 | Donchian + MACD + Pôr do sol + Pullback | **+166% · −30,0%** | +44% · −7,7% | +29% | −4,5% | 3,6 | 1,60 → 1,50 | +21% | 0,01 |
> | 2264 | Donchian + IFR + MACD | **+195% · −31,4%** | +65% · −11,1% | +39% | −9,2% | 2,8 | 1,29 → 1,56 | +28% | 0,49 |
> | 2265 | ADX + VWAP + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+220% · −37,1%** | +47% · −7,1% | +31% | −5,9% | 3,0 | 1,00 → 1,80 | +17% | 0,12 |
> | 2266 | Donchian + 1ª vela 80 + Bollinger + Onda ⚠️ | **+251% · −33,2%** | +58% · −7,4% | +33% | −8,1% | 2,5 | 0,97 → 1,77 | +25% | 0,21 |
> | 2267 | VWAP + Pôr do sol + Bollinger + Tendência + Onda | **+195% · −39,0%** | +43% · −7,1% | +29% | −8,1% | 2,0 | 0,98 → 1,41 | +23% | 0,18 |
> | 2268 | BB explosão + IFR + MACD + Pôr do sol | **+144% · −35,7%** | +43% · −8,3% | +29% | −7,9% | 2,1 | 1,08 → 1,52 | +23% | 0,13 |
> | 2269 | MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+150% · −25,6%** | +42% · −5,9% | +31% | −9,2% | 1,9 | 0,86 → 1,64 | +20% | 0,09 |
> | 2270 | VWAP + GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+240% · −49,5%** | +51% · −11,3% | +33% | −13,1% | 1,6 | 1,18 → 1,45 | +28% | 0,31 |
> | 2271 | VWAP + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+98% · −40,2%** | +32% · −10,8% | +24% | −10,3% | 1,1 | 1,29 → 1,17 | +17% | 0,10 |
> | 2272 | GPS médias + IFR + Bollinger + Onda | **+248% · −37,3%** | +59% · −9,8% | +34% | −8,8% | 2,5 | 1,17 → 1,62 | +28% | 0,26 |
> | 2273 | Donchian + GPS médias + Pôr do sol + Tendência + Onda | **+268% · −47,7%** | +58% · −10,5% | +35% | −6,5% | 3,4 | 1,30 → 1,40 | +27% | 0,18 |
> | 2274 | VWAP + BB explosão + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+171% · −41,7%** | +41% · −8,8% | +28% | −9,4% | 1,6 | 1,07 → 1,50 | +20% | 0,13 |
> | 2275 | ADX + VWAP + Donchian + Bollinger + Tendência | **+320% · −61,3%** | +63% · −13,7% | +35% | −7,5% | 3,0 | 1,35 → 1,51 | +22% | 0,35 |
> | 2276 | GPS médias + Quinta + Bollinger + Tendência + Onda ⚠️ | **+263% · −39,1%** | +52% · −6,9% | +32% | −6,1% | 3,2 | 1,35 → 1,49 | +27% | 0,10 |
> | 2277 | ADX + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+248% · −37,5%** | +50% · −7,7% | +33% | −5,2% | 3,8 | 0,85 → 1,95 | +23% | 0,04 |
> | 2278 | ADX + VWAP + IFR + MACD + 1ª vela 80 ⚠️ | **+245% · −43,9%** | +52% · −8,4% | +34% | −8,9% | 2,3 | 0,92 → 1,70 | +20% | 0,27 |
> | 2279 | VWAP + BB explosão + IFR + Quinta + Pullback ⚠️ | **+147% · −46,2%** | +37% · −9,3% | +27% | −7,0% | 2,0 | 1,44 → 1,27 | +14% | 0,04 |
> | 2280 | VWAP + GPS médias + MACD + Pullback | **+140% · −39,8%** | +43% · −10,4% | +29% | −13,5% | 1,2 | 1,33 → 1,08 | +20% | 0,16 |

> [!example]- Combinações 2281 a 2310 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2281 | ADX + BB explosão + IFR + MACD + Pullback | **+240% · −57,6%** | +52% · −11,9% | +33% | −5,9% | 3,5 | 1,30 → 1,67 | +23% | 0,17 |
> | 2282 | BB explosão + IFR + MACD + 1ª vela 80 + Bollinger ⚠️ | **+269% · −43,1%** | +51% · −9,2% | +32% | −9,0% | 2,1 | 1,22 → 1,76 | +24% | 0,29 |
> | 2283 | VWAP + MACD + 1ª vela 80 + Pullback ⚠️ | **+125% · −33,0%** | +37% · −8,0% | +28% | −12,8% | 1,2 | 1,12 → 1,36 | +19% | 0,13 |
> | 2284 | ADX + VWAP + MACD + Quinta + Tendência ⚠️ | **+197% · −55,1%** | +46% · −11,2% | +31% | −8,0% | 2,3 | 1,11 → 1,43 | +21% | 0,18 |
> | 2285 | Donchian + Pullback + Rompe 200 | **+123% · −31,0%** | +45% · −10,4% | +28% | −4,6% | 3,3 | 1,93 → 1,18 | +13% | 0,12 |
> | 2286 | ADX + Donchian + MACD + Quinta + Onda ⚠️ | **+235% · −46,0%** | +52% · −7,5% | +32% | −6,5% | 3,0 | 0,85 → 1,64 | +22% | 0,10 |
> | 2287 | ADX + GPS médias + MACD + Bollinger + Tendência | **+337% · −57,3%** | +63% · −11,7% | +37% | −7,9% | 3,0 | 1,44 → 1,59 | +28% | 0,36 |
> | 2288 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+324% · −51,1%** | +61% · −9,8% | +36% | −5,5% | 4,2 | 1,44 → 1,78 | +26% | 0,14 |
> | 2289 | BB explosão + IFR + 1ª vela 80 + Quinta + Onda ⚠️ | **+196% · −36,0%** | +44% · −7,3% | +30% | −7,3% | 2,4 | 0,91 → 1,70 | +21% | 0,03 |
> | 2290 | BB explosão + IFR + MACD + Quinta + Onda ⚠️ | **+176% · −38,5%** | +42% · −7,5% | +30% | −8,3% | 2,1 | 0,84 → 1,54 | +23% | 0,11 |
> | 2291 | ADX + BB explosão + IFR + Pullback + Rompe 200 | **+212% · −53,0%** | +48% · −11,4% | +30% | −4,9% | 3,6 | 1,48 → 1,61 | +18% | 0,15 |
> | 2292 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+186% · −31,9%** | +40% · −5,8% | +26% | −4,2% | 3,1 | 1,62 → 1,78 | +19% | −0,00 |
> | 2293 | ADX + GPS médias + IFR + MACD | **+243% · −46,4%** | +64% · −12,4% | +38% | −7,5% | 3,3 | 1,21 → 1,62 | +30% | 0,35 |
> | 2294 | BB explosão + 1ª vela 80 + Quinta + Tendência ⚠️ | **+161% · −47,0%** | +45% · −11,9% | +31% | −5,4% | 3,4 | 1,45 → 1,48 | +20% | 0,01 |
> | 2295 | 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+119% · −21,7%** | +36% · −4,8% | +27% | −5,8% | 2,4 | 0,96 → 1,65 | +20% | −0,10 |
> | 2296 | Pullback + Bollinger + Onda | **+119% · −20,0%** | +43% · −6,2% | +28% | −6,4% | 2,3 | 1,00 → 1,60 | +23% | 0,09 |
> | 2297 | ADX + VWAP + 1ª vela 80 + Pullback + Tendência ⚠️ | **+246% · −50,9%** | +51% · −9,7% | +34% | −6,2% | 3,4 | 1,39 → 1,58 | +23% | 0,12 |
> | 2298 | GPS médias + Pullback + Rompe 200 + Bollinger + Onda | **+211% · −36,5%** | +44% · −6,8% | +28% | −7,2% | 2,0 | 1,36 → 1,38 | +25% | 0,14 |
> | 2299 | ADX + GPS médias + Pullback + Tendência + Onda | **+277% · −56,6%** | +59% · −11,5% | +37% | −7,4% | 3,2 | 1,33 → 1,52 | +30% | 0,18 |
> | 2300 | ADX + Donchian + IFR + MACD + 1ª vela 80 ⚠️ | **+351% · −42,3%** | +64% · −8,9% | +38% | −6,1% | 4,1 | 1,20 → 1,84 | +25% | 0,28 |
> | 2301 | BB explosão + GPS médias + IFR + MACD + Pullback | **+223% · −55,7%** | +51% · −12,3% | +33% | −8,9% | 2,2 | 1,50 → 1,38 | +20% | 0,21 |
> | 2302 | Donchian + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+225% · −36,9%** | +47% · −6,3% | +31% | −8,4% | 2,2 | 0,90 → 1,64 | +24% | 0,08 |
> | 2303 | GPS médias + MACD + Pôr do sol + Rompe 200 + Onda | **+156% · −35,9%** | +39% · −7,2% | +27% | −8,8% | 1,6 | 0,92 → 1,32 | +21% | 0,09 |
> | 2304 | Donchian + GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+336% · −47,1%** | +60% · −10,5% | +34% | −10,1% | 2,1 | 1,43 → 1,57 | +28% | 0,30 |
> | 2305 | Donchian + IFR + 1ª vela 80 ⚠️ | **+220% · −26,7%** | +68% · −8,8% | +40% | −6,9% | 3,9 | 1,49 → 1,83 | +29% | 0,23 |
> | 2306 | ADX + MACD + Quinta + Rompe 200 ⚠️ | **+121% · −37,0%** | +38% · −8,8% | +26% | −6,4% | 2,1 | 0,92 → 1,57 | +20% | 0,03 |
> | 2307 | ADX + BB explosão + IFR + 1ª vela 80 + Tendência ⚠️ | **+308% · −62,8%** | +62% · −14,4% | +38% | −7,5% | 3,4 | 1,35 → 1,75 | +26% | 0,28 |
> | 2308 | ADX + GPS médias + Quinta + Pullback + Onda ⚠️ | **+206% · −44,5%** | +48% · −8,9% | +30% | −5,1% | 3,4 | 1,17 → 1,51 | +26% | 0,02 |
> | 2309 | VWAP + Donchian + GPS médias + MACD + Rompe 200 | **+192% · −50,0%** | +48% · −11,0% | +30% | −13,2% | 1,3 | 1,23 → 1,10 | +19% | 0,32 |
> | 2310 | ADX + IFR + Bollinger + Onda | **+254% · −39,2%** | +60% · −9,8% | +35% | −7,2% | 3,1 | 0,85 → 1,93 | +23% | 0,24 |

> [!example]- Combinações 2311 a 2340 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2311 | Donchian + GPS médias + Pôr do sol + Quinta ⚠️ | **+171% · −31,0%** | +47% · −8,1% | +28% | −5,1% | 3,0 | 1,68 → 1,29 | +20% | −0,02 |
> | 2312 | VWAP + BB explosão + IFR + Quinta + Rompe 200 ⚠️ | **+126% · −44,7%** | +35% · −8,8% | +25% | −8,4% | 1,4 | 1,18 → 1,17 | +14% | 0,12 |
> | 2313 | VWAP + Rompe 200 + Tendência | **+93% · −41,6%** | +39% · −13,4% | +29% | −9,6% | 1,6 | 1,28 → 0,95 | +14% | 0,22 |
> | 2314 | VWAP + Donchian + 1ª vela 80 + Quinta + Tendência ⚠️ | **+238% · −49,7%** | +50% · −11,0% | +32% | −7,2% | 2,7 | 1,43 → 1,41 | +21% | 0,11 |
> | 2315 | GPS médias + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+204% · −35,1%** | +42% · −6,8% | +26% | −5,9% | 2,2 | 1,66 → 1,56 | +22% | 0,08 |
> | 2316 | Donchian + GPS médias + MACD + Pôr do sol + Bollinger | **+280% · −41,9%** | +54% · −8,9% | +31% | −8,2% | 2,2 | 1,48 → 1,47 | +24% | 0,16 |
> | 2317 | BB explosão + GPS médias + IFR + Quinta + Tendência ⚠️ | **+237% · −60,6%** | +54% · −14,1% | +34% | −5,8% | 3,7 | 1,64 → 1,37 | +19% | 0,23 |
> | 2318 | BB explosão + 1ª vela 80 + Quinta + Bollinger + Tendência ⚠️ | **+236% · −46,4%** | +47% · −8,7% | +30% | −4,8% | 3,6 | 1,58 → 1,63 | +20% | 0,10 |
> | 2319 | GPS médias + MACD + Pullback + Bollinger + Onda | **+244% · −37,4%** | +48% · −7,6% | +31% | −8,3% | 2,1 | 1,21 → 1,51 | +26% | 0,15 |
> | 2320 | BB explosão + IFR + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+237% · −38,1%** | +47% · −7,8% | +29% | −6,6% | 2,5 | 1,43 → 1,77 | +21% | 0,22 |
> | 2321 | ADX + Donchian + GPS médias + Pullback + Onda | **+278% · −52,2%** | +61% · −10,6% | +35% | −6,4% | 3,5 | 1,23 → 1,51 | +29% | 0,17 |
> | 2322 | GPS médias + Pôr do sol + Rompe 200 | **+87% · −24,3%** | +36% · −7,7% | +23% | −5,9% | 1,8 | 1,56 → 0,94 | +18% | −0,01 |
> | 2323 | Donchian + GPS médias + Pôr do sol + Bollinger + Tendência | **+333% · −46,1%** | +60% · −8,9% | +34% | −4,7% | 4,5 | 1,80 → 1,47 | +22% | 0,18 |
> | 2324 | VWAP + GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+168% · −46,0%** | +39% · −10,0% | +27% | −9,1% | 1,5 | 1,52 → 1,28 | +20% | −0,02 |
> | 2325 | VWAP + Donchian + Pôr do sol + Quinta + Bollinger ⚠️ | **+181% · −30,5%** | +40% · −5,6% | +24% | −6,5% | 1,8 | 1,39 → 1,37 | +17% | 0,06 |
> | 2326 | ADX + Donchian + GPS médias + IFR + Onda | **+315% · −53,6%** | +69% · −11,0% | +39% | −7,0% | 3,7 | 1,14 → 1,61 | +30% | 0,31 |
> | 2327 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+240% · −49,2%** | +50% · −10,8% | +32% | −7,4% | 2,6 | 1,38 → 1,43 | +22% | 0,18 |
> | 2328 | Donchian + Pôr do sol + Rompe 200 + Tendência + Onda | **+221% · −39,2%** | +47% · −8,1% | +31% | −6,9% | 2,6 | 1,24 → 1,42 | +26% | 0,16 |
> | 2329 | ADX + Quinta + Pullback + Tendência ⚠️ | **+189% · −44,7%** | +49% · −10,8% | +33% | −7,1% | 2,8 | 1,80 → 1,63 | +21% | 0,06 |
> | 2330 | VWAP + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+160% · −39,9%** | +38% · −8,3% | +29% | −12,9% | 1,2 | 0,81 → 1,44 | +21% | 0,19 |
> | 2331 | ADX + IFR + Pôr do sol + Pullback + Onda | **+231% · −34,6%** | +48% · −6,7% | +31% | −5,5% | 3,4 | 1,10 → 1,87 | +20% | 0,02 |
> | 2332 | VWAP + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+244% · −41,7%** | +49% · −7,8% | +32% | −10,2% | 1,9 | 0,98 → 1,54 | +25% | 0,29 |
> | 2333 | ADX + Donchian + GPS médias + MACD + Pôr do sol | **+264% · −51,4%** | +58% · −10,5% | +33% | −6,4% | 3,2 | 1,25 → 1,52 | +26% | 0,15 |
> | 2334 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+172% · −33,3%** | +39% · −5,6% | +26% | −3,6% | 3,8 | 1,36 → 1,83 | +20% | −0,00 |
> | 2335 | ADX + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+213% · −38,5%** | +54% · −9,0% | +34% | −6,2% | 3,4 | 1,29 → 1,83 | +25% | 0,10 |
> | 2336 | VWAP + MACD + Bollinger + Tendência + Onda | **+220% · −44,3%** | +47% · −9,1% | +32% | −11,0% | 1,7 | 0,92 → 1,40 | +26% | 0,38 |
> | 2337 | ADX + Rompe 200 + Bollinger | **+132% · −35,0%** | +49% · −11,4% | +27% | −6,2% | 2,3 | 1,00 → 1,65 | +21% | 0,17 |
> | 2338 | VWAP + Donchian + 1ª vela 80 + Tendência + Onda ⚠️ | **+252% · −51,6%** | +55% · −11,4% | +35% | −10,5% | 2,1 | 1,05 → 1,43 | +28% | 0,31 |
> | 2339 | ADX + Donchian + GPS médias + Rompe 200 + Bollinger | **+309% · −49,5%** | +61% · −10,0% | +32% | −5,1% | 3,8 | 1,49 → 1,53 | +22% | 0,25 |
> | 2340 | VWAP + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+125% · −31,7%** | +31% · −5,7% | +23% | −8,6% | 1,1 | 0,99 → 1,37 | +16% | 0,11 |

> [!example]- Combinações 2341 a 2370 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2341 | VWAP + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+132% · −42,5%** | +34% · −9,0% | +26% | −11,4% | 1,1 | 0,89 → 1,31 | +21% | 0,15 |
> | 2342 | ADX + VWAP + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+290% · −49,4%** | +55% · −9,4% | +34% | −6,9% | 3,0 | 1,22 → 1,68 | +23% | 0,30 |
> | 2343 | VWAP + MACD + Bollinger + Tendência | **+181% · −37,7%** | +48% · −9,7% | +32% | −10,6% | 1,8 | 1,20 → 1,30 | +23% | 0,43 |
> | 2344 | ADX + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+328% · −47,9%** | +59% · −10,0% | +36% | −7,8% | 3,0 | 1,03 → 1,85 | +24% | 0,24 |
> | 2345 | ADX + GPS médias + Quinta + Tendência ⚠️ | **+220% · −52,7%** | +59% · −14,0% | +35% | −6,8% | 3,3 | 1,56 → 1,48 | +25% | 0,15 |
> | 2346 | VWAP + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+202% · −37,7%** | +50% · −9,5% | +32% | −9,0% | 2,1 | 1,34 → 1,50 | +23% | 0,30 |
> | 2347 | ADX + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+247% · −40,7%** | +51% · −7,9% | +33% | −6,3% | 3,2 | 0,86 → 1,86 | +23% | 0,17 |
> | 2348 | GPS médias + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+243% · −39,7%** | +51% · −7,7% | +33% | −6,2% | 3,3 | 1,23 → 1,52 | +26% | 0,04 |
> | 2349 | MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+103% · −21,3%** | +32% · −4,4% | +25% | −7,0% | 1,7 | 0,96 → 1,59 | +17% | 0,08 |
> | 2350 | VWAP + Pôr do sol + Bollinger + Tendência | **+155% · −32,5%** | +42% · −7,0% | +28% | −6,0% | 2,5 | 1,40 → 1,31 | +19% | 0,18 |
> | 2351 | ADX + Donchian + MACD + 1ª vela 80 + Pullback ⚠️ | **+302% · −43,9%** | +57% · −7,8% | +34% | −5,7% | 3,8 | 1,36 → 1,79 | +23% | 0,10 |
> | 2352 | VWAP + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+192% · −37,7%** | +41% · −7,7% | +28% | −10,9% | 1,4 | 0,94 → 1,55 | +21% | 0,18 |
> | 2353 | VWAP + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+115% · −35,9%** | +31% · −6,9% | +24% | −10,9% | 1,0 | 0,92 → 1,32 | +20% | 0,08 |
> | 2354 | ADX + MACD + 1ª vela 80 + Tendência ⚠️ | **+241% · −46,9%** | +60% · −11,5% | +38% | −9,0% | 2,8 | 1,17 → 1,72 | +29% | 0,25 |
> | 2355 | ADX + Quinta + Tendência ⚠️ | **+150% · −43,4%** | +55% · −14,5% | +35% | −8,9% | 2,5 | 1,40 → 1,60 | +25% | 0,11 |
> | 2356 | GPS médias + MACD + Pôr do sol | **+111% · −28,2%** | +43% · −9,3% | +28% | −9,8% | 1,6 | 1,22 → 1,25 | +24% | 0,00 |
> | 2357 | GPS médias + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+193% · −41,3%** | +43% · −8,6% | +29% | −8,1% | 2,0 | 1,22 → 1,43 | +25% | 0,12 |
> | 2358 | Donchian + BB explosão + IFR + Quinta + Bollinger ⚠️ | **+268% · −44,2%** | +53% · −8,9% | +31% | −5,5% | 3,3 | 1,55 → 1,61 | +18% | 0,18 |
> | 2359 | Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+167% · −27,3%** | +37% · −4,6% | +25% | −6,1% | 2,0 | 0,79 → 1,79 | +15% | 0,10 |
> | 2360 | VWAP + MACD + Quinta + Tendência ⚠️ | **+126% · −36,7%** | +39% · −9,4% | +29% | −9,0% | 1,8 | 1,17 → 1,19 | +21% | 0,16 |
> | 2361 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+234% · −38,5%** | +46% · −7,7% | +28% | −9,2% | 1,6 | 1,26 → 1,57 | +19% | 0,16 |
> | 2362 | VWAP + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+177% · −47,2%** | +42% · −10,2% | +30% | −10,7% | 1,6 | 0,95 → 1,36 | +26% | 0,23 |
> | 2363 | ADX + BB explosão + IFR + Quinta + Pullback ⚠️ | **+213% · −51,9%** | +47% · −10,3% | +30% | −4,9% | 3,5 | 1,52 → 1,72 | +19% | 0,07 |
> | 2364 | ADX + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+275% · −49,9%** | +56% · −10,3% | +37% | −9,4% | 2,6 | 0,90 → 1,72 | +24% | 0,25 |
> | 2365 | ADX + GPS médias + IFR + Rompe 200 | **+216% · −45,9%** | +58% · −12,3% | +34% | −5,8% | 3,6 | 1,39 → 1,56 | +25% | 0,29 |
> | 2366 | ADX + Rompe 200 + Tendência + Onda | **+186% · −44,8%** | +52% · −11,2% | +34% | −9,9% | 2,1 | 0,97 → 1,53 | +29% | 0,17 |
> | 2367 | ADX + Donchian + 1ª vela 80 + Quinta + Pullback ⚠️ | **+269% · −44,0%** | +52% · −6,5% | +31% | −4,0% | 4,6 | 1,56 → 1,87 | +21% | −0,03 |
> | 2368 | 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+64% · −22,1%** | +29% · −6,8% | +22% | −4,0% | 2,3 | 1,08 → 1,47 | +17% | −0,06 |
> | 2369 | VWAP + Pôr do sol + Pullback + Onda | **+86% · −30,2%** | +30% · −6,3% | +24% | −10,4% | 1,1 | 0,77 → 1,13 | +16% | 0,05 |
> | 2370 | Donchian + GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+279% · −44,4%** | +56% · −9,3% | +34% | −7,9% | 2,7 | 1,30 → 1,51 | +29% | 0,14 |

> [!example]- Combinações 2371 a 2400 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2371 | GPS médias + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+323% · −42,4%** | +57% · −9,1% | +34% | −8,6% | 2,5 | 1,17 → 1,76 | +24% | 0,24 |
> | 2372 | ADX + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+251% · −38,2%** | +51% · −7,8% | +33% | −5,3% | 3,8 | 0,80 → 1,97 | +22% | 0,10 |
> | 2373 | Donchian + MACD + Quinta + Tendência + Onda ⚠️ | **+245% · −43,5%** | +51% · −9,2% | +34% | −8,2% | 2,6 | 1,14 → 1,48 | +30% | 0,19 |
> | 2374 | ADX + VWAP + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+235% · −39,9%** | +47% · −7,2% | +29% | −6,2% | 2,6 | 1,23 → 1,73 | +18% | 0,17 |
> | 2375 | VWAP + Donchian + MACD + 1ª vela 80 + Pullback ⚠️ | **+221% · −43,6%** | +47% · −9,1% | +31% | −11,4% | 1,6 | 1,30 → 1,41 | +21% | 0,19 |
> | 2376 | ADX + GPS médias + Rompe 200 + Bollinger + Tendência | **+307% · −53,0%** | +59% · −10,8% | +34% | −6,7% | 3,1 | 1,63 → 1,54 | +23% | 0,27 |
> | 2377 | ADX + Donchian + Pôr do sol + Pullback + Bollinger | **+294% · −37,3%** | +53% · −6,6% | +30% | −3,6% | 4,7 | 1,71 → 1,90 | +19% | 0,03 |
> | 2378 | Donchian + Pôr do sol + Tendência + Onda | **+207% · −36,7%** | +54% · −9,5% | +35% | −7,6% | 2,9 | 1,16 → 1,48 | +30% | 0,17 |
> | 2379 | VWAP + GPS médias + Rompe 200 + Bollinger + Tendência | **+227% · −48,2%** | +48% · −10,4% | +30% | −8,4% | 2,0 | 1,56 → 1,17 | +18% | 0,28 |
> | 2380 | BB explosão + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+161% · −34,7%** | +45% · −8,5% | +30% | −7,3% | 2,3 | 1,28 → 1,62 | +20% | 0,20 |
> | 2381 | VWAP + GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+158% · −37,8%** | +37% · −7,7% | +24% | −8,0% | 1,3 | 1,44 → 1,19 | +19% | 0,05 |
> | 2382 | VWAP + MACD + Pôr do sol + Bollinger + Onda | **+153% · −38,0%** | +36% · −7,6% | +25% | −11,5% | 1,1 | 0,59 → 1,42 | +18% | 0,20 |
> | 2383 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+241% · −40,0%** | +47% · −8,3% | +29% | −8,5% | 1,9 | 1,36 → 1,65 | +21% | 0,15 |
> | 2384 | ADX + BB explosão + IFR + MACD + Quinta ⚠️ | **+210% · −55,6%** | +49% · −11,2% | +31% | −5,8% | 3,2 | 1,07 → 1,66 | +24% | 0,17 |
> | 2385 | BB explosão + Pôr do sol + Quinta + Tendência + Onda ⚠️ | **+152% · −47,5%** | +39% · −9,1% | +28% | −6,0% | 2,5 | 1,04 → 1,39 | +23% | 0,03 |
> | 2386 | Donchian + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+175% · −35,3%** | +39% · −5,7% | +27% | −3,7% | 3,8 | 1,28 → 1,55 | +21% | −0,03 |
> | 2387 | VWAP + Donchian + IFR + MACD + 1ª vela 80 ⚠️ | **+268% · −43,9%** | +54% · −9,3% | +34% | −11,6% | 1,8 | 1,16 → 1,53 | +23% | 0,34 |
> | 2388 | ADX + VWAP + MACD + Pôr do sol + Bollinger | **+191% · −41,8%** | +43% · −8,0% | +27% | −7,1% | 2,0 | 0,83 → 1,58 | +15% | 0,20 |
> | 2389 | GPS médias + MACD + Rompe 200 + Bollinger | **+174% · −36,0%** | +46% · −9,3% | +28% | −9,4% | 1,6 | 1,43 → 1,32 | +23% | 0,23 |
> | 2390 | ADX + Quinta + Bollinger + Onda ⚠️ | **+172% · −36,2%** | +47% · −8,4% | +28% | −6,3% | 2,5 | 0,66 → 1,79 | +18% | 0,07 |
> | 2391 | BB explosão + MACD + Quinta + Pullback + Bollinger ⚠️ | **+166% · −37,0%** | +38% · −6,1% | +25% | −5,4% | 2,3 | 1,57 → 1,50 | +18% | 0,05 |
> | 2392 | VWAP + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+132% · −35,7%** | +34% · −7,0% | +26% | −9,9% | 1,3 | 0,89 → 1,42 | +19% | −0,00 |
> | 2393 | ADX + Donchian + Quinta + Pullback + Rompe 200 ⚠️ | **+215% · −39,6%** | +46% · −6,4% | +28% | −4,0% | 3,8 | 1,71 → 1,59 | +18% | 0,04 |
> | 2394 | VWAP + Donchian + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+192% · −50,8%** | +42% · −11,7% | +28% | −9,1% | 1,7 | 1,47 → 1,32 | +17% | 0,14 |
> | 2395 | VWAP + Pôr do sol + Quinta + Tendência ⚠️ | **+104% · −29,6%** | +34% · −6,9% | +26% | −5,0% | 2,6 | 1,37 → 1,14 | +18% | 0,04 |
> | 2396 | Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+111% · −25,4%** | +30% · −4,1% | +23% | −5,3% | 2,0 | 0,72 → 1,62 | +15% | 0,00 |
> | 2397 | ADX + Donchian + Pôr do sol + Rompe 200 + Onda | **+210% · −42,3%** | +48% · −7,3% | +29% | −5,2% | 3,2 | 0,90 → 1,59 | +22% | 0,06 |
> | 2398 | ADX + BB explosão + Quinta + Rompe 200 + Tendência ⚠️ | **+185% · −63,3%** | +45% · −15,1% | +30% | −6,5% | 2,6 | 1,38 → 1,42 | +18% | 0,14 |
> | 2399 | ADX + Quinta + Bollinger ⚠️ | **+130% · −32,8%** | +48% · −10,4% | +27% | −5,9% | 2,4 | 1,01 → 1,82 | +17% | 0,18 |
> | 2400 | VWAP + GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+213% · −51,7%** | +47% · −11,7% | +31% | −8,7% | 2,1 | 1,46 → 1,32 | +22% | 0,08 |

> [!example]- Combinações 2401 a 2430 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2401 | ADX + Donchian + GPS médias + Bollinger + Tendência | **+389% · −63,7%** | +73% · −14,2% | +39% | −6,6% | 3,9 | 1,61 → 1,58 | +24% | 0,36 |
> | 2402 | ADX + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+277% · −43,3%** | +55% · −8,7% | +36% | −7,5% | 3,1 | 0,77 → 1,86 | +23% | 0,23 |
> | 2403 | Donchian + Quinta + Bollinger + Onda ⚠️ | **+197% · −26,2%** | +49% · −6,1% | +29% | −6,0% | 2,7 | 1,04 → 1,65 | +24% | 0,01 |
> | 2404 | ADX + Donchian + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+314% · −38,5%** | +57% · −7,1% | +31% | −4,4% | 4,2 | 1,33 → 1,87 | +24% | 0,18 |
> | 2405 | ADX + Donchian + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+314% · −36,1%** | +56% · −6,8% | +31% | −4,1% | 4,5 | 1,35 → 1,97 | +22% | 0,09 |
> | 2406 | GPS médias + Bollinger + Tendência | **+207% · −34,9%** | +67% · −11,1% | +37% | −6,9% | 3,5 | 1,82 → 1,39 | +23% | 0,34 |
> | 2407 | Donchian + Pullback + Tendência | **+194% · −42,0%** | +64% · −13,9% | +39% | −6,5% | 4,0 | 1,94 → 1,38 | +17% | 0,21 |
> | 2408 | ADX + VWAP + Quinta + Rompe 200 + Bollinger ⚠️ | **+159% · −39,1%** | +38% · −7,2% | +24% | −5,8% | 2,0 | 1,05 → 1,44 | +16% | 0,13 |
> | 2409 | VWAP + Donchian + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+231% · −44,5%** | +46% · −9,5% | +28% | −10,0% | 1,5 | 1,30 → 1,45 | +20% | 0,24 |
> | 2410 | ADX + GPS médias + Quinta + Pullback ⚠️ | **+173% · −42,1%** | +49% · −10,8% | +30% | −4,9% | 3,4 | 1,65 → 1,46 | +22% | 0,03 |
> | 2411 | ADX + BB explosão + MACD + Quinta + Tendência ⚠️ | **+209% · −66,5%** | +50% · −16,5% | +32% | −7,8% | 2,5 | 1,21 → 1,50 | +23% | 0,20 |
> | 2412 | VWAP + MACD + Pôr do sol + Rompe 200 + Onda | **+102% · −36,8%** | +30% · −7,3% | +24% | −12,1% | 0,9 | 0,55 → 1,20 | +19% | 0,13 |
> | 2413 | VWAP + Donchian + 1ª vela 80 + Quinta + Pullback ⚠️ | **+192% · −44,5%** | +42% · −9,6% | +28% | −7,6% | 2,0 | 1,51 → 1,43 | +19% | −0,01 |
> | 2414 | BB explosão + IFR + MACD + Quinta ⚠️ | **+142% · −37,5%** | +42% · −8,9% | +29% | −7,9% | 2,1 | 1,15 → 1,49 | +21% | 0,13 |
> | 2415 | GPS médias + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+224% · −39,3%** | +48% · −7,9% | +32% | −9,7% | 2,0 | 1,11 → 1,53 | +24% | 0,12 |
> | 2416 | MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+101% · −19,3%** | +32% · −3,8% | +24% | −5,7% | 2,1 | 0,98 → 1,74 | +16% | 0,01 |
> | 2417 | GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+278% · −41,0%** | +62% · −10,5% | +36% | −6,0% | 3,9 | 1,72 → 1,60 | +27% | 0,26 |
> | 2418 | BB explosão + IFR + MACD + Tendência + Onda | **+236% · −55,2%** | +53% · −11,5% | +36% | −10,1% | 2,3 | 1,05 → 1,50 | +30% | 0,38 |
> | 2419 | VWAP + Donchian + Pôr do sol + Quinta + Pullback ⚠️ | **+147% · −36,5%** | +36% · −7,1% | +25% | −5,3% | 2,2 | 1,59 → 1,19 | +16% | −0,01 |
> | 2420 | BB explosão + IFR + Quinta + Onda ⚠️ | **+140% · −34,7%** | +43% · −8,0% | +29% | −7,5% | 2,2 | 0,86 → 1,52 | +24% | 0,03 |
> | 2421 | ADX + GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+283% · −45,4%** | +56% · −8,6% | +34% | −4,8% | 4,4 | 1,38 → 1,80 | +27% | 0,11 |
> | 2422 | Donchian + Pôr do sol + Quinta + Pullback ⚠️ | **+135% · −29,4%** | +38% · −5,6% | +25% | −2,2% | 5,6 | 2,12 → 1,57 | +17% | −0,05 |
> | 2423 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+237% · −41,9%** | +50% · −8,2% | +30% | −4,3% | 4,0 | 1,49 → 1,71 | +25% | 0,01 |
> | 2424 | ADX + Pullback + Tendência + Onda | **+212% · −49,2%** | +56% · −11,6% | +36% | −9,3% | 2,5 | 1,18 → 1,61 | +27% | 0,15 |
> | 2425 | ADX + BB explosão + 1ª vela 80 + Pullback + Tendência ⚠️ | **+261% · −64,0%** | +55% · −15,1% | +35% | −6,0% | 3,6 | 1,49 → 1,65 | +22% | 0,12 |
> | 2426 | ADX + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+205% · −40,0%** | +43% · −7,4% | +26% | −4,1% | 3,3 | 1,15 → 1,96 | +20% | 0,09 |
> | 2427 | ADX + Donchian + MACD + Pullback + Rompe 200 | **+245% · −44,4%** | +51% · −8,0% | +31% | −5,2% | 3,6 | 1,44 → 1,58 | +22% | 0,12 |
> | 2428 | ADX + MACD + Tendência + Onda | **+212% · −52,6%** | +58% · −13,1% | +38% | −11,4% | 2,2 | 0,87 → 1,60 | +28% | 0,29 |
> | 2429 | ADX + Donchian + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+268% · −42,8%** | +52% · −6,9% | +31% | −4,4% | 4,2 | 1,52 → 1,76 | +23% | 0,07 |
> | 2430 | VWAP + GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+286% · −47,6%** | +54% · −10,7% | +32% | −10,8% | 1,8 | 1,40 → 1,57 | +25% | 0,29 |

> [!example]- Combinações 2431 a 2460 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2431 | ADX + BB explosão + Quinta + Pullback + Tendência ⚠️ | **+212% · −64,9%** | +48% · −15,7% | +31% | −6,3% | 2,9 | 1,62 → 1,50 | +18% | 0,10 |
> | 2432 | BB explosão + Pullback + Rompe 200 + Tendência | **+138% · −53,7%** | +42% · −14,3% | +29% | −6,3% | 2,6 | 1,74 → 1,14 | +12% | 0,17 |
> | 2433 | ADX + BB explosão + IFR + Tendência | **+239% · −64,9%** | +65% · −19,6% | +39% | −9,1% | 2,9 | 1,36 → 1,62 | +23% | 0,40 |
> | 2434 | VWAP + GPS médias + MACD + Pôr do sol + Rompe 200 | **+132% · −42,8%** | +35% · −8,9% | +25% | −11,7% | 1,0 | 1,12 → 1,05 | +20% | 0,12 |
> | 2435 | ADX + IFR + Quinta + Pullback ⚠️ | **+186% · −32,5%** | +48% · −7,8% | +31% | −5,1% | 3,6 | 1,69 → 1,94 | +19% | 0,03 |
> | 2436 | VWAP + BB explosão + IFR + MACD + Quinta ⚠️ | **+148% · −46,3%** | +39% · −9,2% | +28% | −10,8% | 1,4 | 1,00 → 1,30 | +19% | 0,17 |
> | 2437 | ADX + IFR + Rompe 200 + Onda | **+185% · −37,5%** | +51% · −9,2% | +33% | −7,5% | 2,6 | 0,82 → 1,71 | +24% | 0,18 |
> | 2438 | VWAP + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+138% · −32,9%** | +33% · −6,2% | +23% | −8,4% | 1,2 | 1,18 → 1,45 | +19% | 0,10 |
> | 2439 | GPS médias + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+184% · −34,4%** | +41% · −7,1% | +26% | −7,5% | 1,7 | 1,16 → 1,38 | +21% | 0,06 |
> | 2440 | ADX + Donchian + IFR + Pôr do sol + Pullback | **+304% · −39,8%** | +56% · −7,7% | +33% | −3,8% | 5,4 | 1,67 → 1,89 | +21% | 0,04 |
> | 2441 | ADX + VWAP + MACD + Rompe 200 + Tendência | **+196% · −54,6%** | +47% · −11,4% | +31% | −9,2% | 2,0 | 1,10 → 1,36 | +23% | 0,25 |
> | 2442 | Donchian + BB explosão + IFR + Pôr do sol + Bollinger | **+271% · −42,5%** | +53% · −8,9% | +31% | −5,5% | 3,3 | 1,49 → 1,64 | +19% | 0,17 |
> | 2443 | ADX + MACD + 1ª vela 80 + Pullback ⚠️ | **+189% · −37,7%** | +50% · −8,9% | +32% | −6,3% | 3,1 | 1,17 → 1,82 | +22% | 0,02 |
> | 2444 | ADX + BB explosão + MACD + Pôr do sol + Tendência | **+212% · −65,8%** | +50% · −15,9% | +32% | −7,8% | 2,5 | 1,16 → 1,52 | +24% | 0,19 |
> | 2445 | ADX + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+228% · −40,5%** | +48% · −7,4% | +32% | −6,5% | 3,0 | 0,86 → 1,78 | +23% | 0,09 |
> | 2446 | Donchian + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+227% · −37,1%** | +47% · −6,4% | +31% | −8,6% | 2,1 | 0,85 → 1,65 | +24% | 0,16 |
> | 2447 | Donchian + GPS médias + MACD + Pôr do sol + Onda | **+227% · −43,4%** | +51% · −9,2% | +32% | −9,4% | 2,0 | 1,03 → 1,40 | +29% | 0,15 |
> | 2448 | ADX + Donchian + MACD + 1ª vela 80 + Bollinger ⚠️ | **+349% · −41,6%** | +61% · −7,8% | +34% | −6,0% | 3,6 | 1,17 → 1,86 | +24% | 0,27 |
> | 2449 | VWAP + BB explosão + 1ª vela 80 + Pullback + Tendência ⚠️ | **+188% · −57,4%** | +45% · −13,8% | +31% | −8,8% | 2,1 | 1,41 → 1,30 | +17% | 0,16 |
> | 2450 | Pôr do sol + Rompe 200 + Onda | **+58% · −15,7%** | +28% · −4,6% | +22% | −7,2% | 1,2 | 0,45 → 1,20 | +15% | 0,01 |
> | 2451 | BB explosão + Pôr do sol + Quinta + Rompe 200 + Tendência ⚠️ | **+131% · −46,7%** | +34% · −9,1% | +25% | −4,6% | 2,7 | 1,60 → 1,22 | +15% | 0,06 |
> | 2452 | VWAP + GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+168% · −50,3%** | +40% · −11,5% | +27% | −10,4% | 1,4 | 1,48 → 1,19 | +18% | 0,13 |
> | 2453 | Donchian + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+196% · −36,6%** | +43% · −7,1% | +28% | −6,6% | 2,3 | 1,02 → 1,59 | +24% | 0,04 |
> | 2454 | ADX + BB explosão + IFR + Quinta + Rompe 200 ⚠️ | **+185% · −50,5%** | +44% · −10,6% | +28% | −4,9% | 3,2 | 1,23 → 1,61 | +19% | 0,14 |
> | 2455 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+171% · −44,3%** | +40% · −9,5% | +27% | −9,3% | 1,5 | 1,47 → 1,30 | +21% | 0,03 |
> | 2456 | BB explosão + MACD + Quinta + Pullback ⚠️ | **+103% · −37,9%** | +34% · −9,0% | +25% | −5,9% | 2,1 | 1,41 → 1,28 | +16% | −0,03 |
> | 2457 | Donchian + GPS médias + IFR + Quinta + Tendência ⚠️ | **+331% · −52,0%** | +63% · −10,6% | +38% | −5,5% | 4,5 | 1,81 → 1,48 | +22% | 0,23 |
> | 2458 | ADX + GPS médias + Pôr do sol + Tendência | **+223% · −51,2%** | +59% · −13,5% | +35% | −6,3% | 3,6 | 1,50 → 1,51 | +26% | 0,14 |
> | 2459 | ADX + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+195% · −36,8%** | +44% · −7,1% | +29% | −5,9% | 2,8 | 0,93 → 1,71 | +23% | 0,08 |
> | 2460 | ADX + BB explosão + Pôr do sol + Pullback + Tendência | **+214% · −63,8%** | +49% · −15,2% | +31% | −5,9% | 3,1 | 1,56 → 1,53 | +19% | 0,08 |

> [!example]- Combinações 2461 a 2490 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2461 | VWAP + GPS médias + Rompe 200 + Tendência | **+154% · −49,5%** | +47% · −14,0% | +31% | −9,9% | 1,8 | 1,45 → 1,01 | +16% | 0,26 |
> | 2462 | ADX + Donchian + Pôr do sol + Quinta + Onda ⚠️ | **+211% · −43,6%** | +47% · −7,4% | +29% | −4,4% | 3,7 | 0,90 → 1,69 | +20% | −0,00 |
> | 2463 | ADX + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+151% · −33,3%** | +38% · −6,4% | +26% | −5,5% | 2,4 | 1,02 → 1,54 | +21% | 0,02 |
> | 2464 | VWAP + Rompe 200 + Tendência + Onda | **+124% · −40,1%** | +40% · −10,3% | +29% | −11,2% | 1,5 | 0,91 → 1,15 | +25% | 0,25 |
> | 2465 | ADX + Pôr do sol + Bollinger + Onda | **+175% · −35,4%** | +47% · −8,5% | +28% | −6,4% | 2,4 | 0,59 → 1,83 | +18% | 0,07 |
> | 2466 | VWAP + Donchian + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+236% · −55,5%** | +50% · −13,1% | +32% | −8,3% | 2,3 | 1,41 → 1,33 | +20% | 0,26 |
> | 2467 | GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+207% · −36,1%** | +42% · −6,8% | +26% | −5,9% | 2,2 | 1,59 → 1,60 | +21% | 0,11 |
> | 2468 | ADX + MACD + Quinta + Pullback + Onda ⚠️ | **+182% · −36,9%** | +42% · −6,8% | +29% | −6,2% | 2,6 | 0,91 → 1,68 | +21% | 0,01 |
> | 2469 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+170% · −39,5%** | +38% · −8,0% | +26% | −11,3% | 1,1 | 0,92 → 1,56 | +18% | 0,22 |
> | 2470 | GPS médias + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+246% · −40,3%** | +51% · −7,6% | +33% | −6,2% | 3,3 | 1,19 → 1,54 | +25% | 0,12 |
> | 2471 | VWAP + GPS médias + IFR + Bollinger | **+215% · −42,5%** | +54% · −11,6% | +32% | −11,3% | 1,7 | 1,42 → 1,37 | +22% | 0,33 |
> | 2472 | VWAP + Donchian + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+281% · −59,5%** | +61% · −14,3% | +36% | −10,5% | 2,2 | 1,45 → 1,33 | +22% | 0,32 |
> | 2473 | ADX + VWAP + IFR + Pullback + Tendência | **+275% · −53,9%** | +55% · −10,9% | +36% | −7,3% | 3,1 | 1,53 → 1,58 | +22% | 0,18 |
> | 2474 | ADX + GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+285% · −50,4%** | +57% · −9,3% | +35% | −5,3% | 4,2 | 1,50 → 1,65 | +27% | 0,10 |
> | 2475 | MACD + Tendência + Onda | **+141% · −34,4%** | +52% · −11,6% | +37% | −12,7% | 1,9 | 0,86 → 1,43 | +27% | 0,40 |
> | 2476 | BB explosão + 1ª vela 80 + Pullback + Rompe 200 + Bollinger ⚠️ | **+184% · −39,3%** | +40% · −7,9% | +26% | −5,7% | 2,3 | 1,62 → 1,59 | +17% | 0,09 |
> | 2477 | VWAP + Donchian + Pullback + Rompe 200 | **+133% · −45,1%** | +40% · −12,1% | +26% | −9,3% | 1,5 | 1,50 → 0,98 | +13% | 0,17 |
> | 2478 | ADX + BB explosão + IFR + Bollinger | **+234% · −53,8%** | +60% · −13,9% | +34% | −5,7% | 3,7 | 1,17 → 1,78 | +23% | 0,35 |
> | 2479 | Donchian + MACD + 1ª vela 80 + Tendência ⚠️ | **+263% · −44,6%** | +62% · −12,3% | +39% | −8,1% | 3,2 | 1,42 → 1,55 | +28% | 0,36 |
> | 2480 | ADX + VWAP + Pôr do sol + Rompe 200 + Bollinger | **+161% · −38,0%** | +38% · −6,9% | +24% | −5,9% | 1,9 | 0,98 → 1,47 | +16% | 0,11 |
> | 2481 | ADX + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+131% · −33,0%** | +35% · −6,3% | +24% | −5,0% | 2,3 | 0,67 → 1,59 | +19% | −0,01 |
> | 2482 | GPS médias + MACD + Tendência + Onda | **+205% · −42,5%** | +57% · −10,5% | +37% | −10,1% | 2,4 | 1,09 → 1,37 | +28% | 0,34 |
> | 2483 | VWAP + MACD + Pôr do sol + Tendência + Onda | **+161% · −39,6%** | +40% · −7,7% | +30% | −10,2% | 1,7 | 0,84 → 1,32 | +23% | 0,23 |
> | 2484 | GPS médias + Quinta + Bollinger ⚠️ | **+130% · −26,9%** | +47% · −8,6% | +26% | −6,0% | 2,3 | 1,81 → 1,31 | +21% | 0,04 |
> | 2485 | ADX + IFR + MACD + Onda | **+212% · −40,9%** | +57% · −10,4% | +36% | −9,0% | 2,6 | 0,72 → 1,76 | +24% | 0,25 |
> | 2486 | ADX + Donchian + IFR + Rompe 200 | **+247% · −40,9%** | +62% · −9,9% | +35% | −5,7% | 3,9 | 1,38 → 1,71 | +24% | 0,26 |
> | 2487 | ADX + Donchian + MACD + 1ª vela 80 + Tendência ⚠️ | **+346% · −57,6%** | +65% · −12,1% | +39% | −8,0% | 3,3 | 1,31 → 1,69 | +29% | 0,30 |
> | 2488 | GPS médias + MACD + Quinta + Bollinger + Onda ⚠️ | **+214% · −38,9%** | +45% · −8,0% | +29% | −8,6% | 1,9 | 1,01 → 1,50 | +21% | 0,10 |
> | 2489 | Donchian + IFR + MACD + Onda | **+234% · −37,2%** | +59% · −9,5% | +37% | −9,3% | 2,6 | 0,96 → 1,60 | +28% | 0,38 |
> | 2490 | VWAP + GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+196% · −46,2%** | +44% · −10,1% | +30% | −12,9% | 1,3 | 1,32 → 1,32 | +23% | 0,15 |

> [!example]- Combinações 2491 a 2520 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2491 | ADX + BB explosão + IFR + MACD + Rompe 200 | **+209% · −54,8%** | +49% · −12,1% | +31% | −7,1% | 2,6 | 1,06 → 1,59 | +23% | 0,26 |
> | 2492 | Donchian + GPS médias + Quinta + Bollinger + Onda ⚠️ | **+270% · −42,5%** | +54% · −8,3% | +31% | −7,4% | 2,4 | 1,24 → 1,48 | +28% | 0,08 |
> | 2493 | BB explosão + Pôr do sol + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+240% · −44,7%** | +47% · −8,1% | +30% | −4,8% | 3,6 | 1,52 → 1,66 | +21% | 0,14 |
> | 2494 | VWAP + GPS médias + MACD + Bollinger + Tendência | **+254% · −48,5%** | +53% · −9,4% | +33% | −11,1% | 1,8 | 1,37 → 1,28 | +23% | 0,39 |
> | 2495 | VWAP + Donchian + GPS médias + Rompe 200 + Bollinger | **+233% · −47,1%** | +50% · −10,5% | +29% | −10,6% | 1,5 | 1,44 → 1,14 | +17% | 0,28 |
> | 2496 | VWAP + Quinta + Tendência + Onda ⚠️ | **+124% · −33,7%** | +39% · −8,2% | +29% | −9,3% | 1,8 | 0,90 → 1,23 | +24% | 0,06 |
> | 2497 | Donchian + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+218% · −39,8%** | +47% · −8,2% | +31% | −7,0% | 2,6 | 1,29 → 1,40 | +25% | 0,12 |
> | 2498 | VWAP + MACD + Rompe 200 | **+61% · −29,0%** | +29% · −9,4% | +23% | −15,5% | 0,7 | 0,71 → 0,91 | +19% | 0,24 |
> | 2499 | ADX + GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+287% · −46,0%** | +57% · −8,8% | +34% | −4,6% | 4,5 | 1,33 → 1,83 | +27% | 0,14 |
> | 2500 | ADX + VWAP + IFR + Bollinger + Onda | **+260% · −44,0%** | +53% · −8,9% | +32% | −7,7% | 2,5 | 0,81 → 1,70 | +19% | 0,27 |
> | 2501 | VWAP + GPS médias + IFR + Rompe 200 + Onda | **+185% · −44,3%** | +45% · −9,6% | +30% | −11,4% | 1,5 | 1,02 → 1,27 | +26% | 0,26 |
> | 2502 | ADX + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+199% · −41,2%** | +45% · −7,7% | +30% | −6,2% | 2,8 | 0,62 → 1,78 | +17% | 0,05 |
> | 2503 | ADX + Donchian + 1ª vela 80 + Pullback + Onda ⚠️ | **+289% · −48,4%** | +57% · −8,2% | +34% | −5,6% | 3,9 | 1,08 → 1,77 | +24% | 0,10 |
> | 2504 | VWAP + BB explosão + IFR + Pôr do sol + Pullback | **+150% · −44,7%** | +38% · −8,8% | +27% | −7,0% | 2,0 | 1,38 → 1,30 | +15% | 0,04 |
> | 2505 | BB explosão + IFR + Pullback + Bollinger + Onda | **+241% · −37,3%** | +48% · −7,3% | +31% | −6,3% | 2,9 | 1,23 → 1,67 | +25% | 0,15 |
> | 2506 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+216% · −50,1%** | +47% · −11,2% | +31% | −8,9% | 2,1 | 1,41 → 1,34 | +23% | 0,15 |
> | 2507 | ADX + Donchian + BB explosão + IFR + 1ª vela 80 ⚠️ | **+304% · −59,3%** | +64% · −12,9% | +37% | −5,9% | 4,1 | 1,23 → 1,75 | +25% | 0,29 |
> | 2508 | ADX + Donchian + Pullback + Rompe 200 + Onda | **+235% · −44,0%** | +51% · −7,7% | +31% | −5,4% | 3,4 | 1,15 → 1,56 | +24% | 0,13 |
> | 2509 | VWAP + Donchian + MACD + 1ª vela 80 + Bollinger ⚠️ | **+262% · −46,2%** | +51% · −10,0% | +31% | −12,8% | 1,4 | 1,12 → 1,50 | +22% | 0,35 |
> | 2510 | ADX + Donchian + Pôr do sol + Pullback + Rompe 200 | **+217% · −41,8%** | +46% · −6,2% | +28% | −3,7% | 4,1 | 1,63 → 1,61 | +19% | 0,02 |
> | 2511 | VWAP + Pullback + Rompe 200 | **+54% · −32,2%** | +27% · −11,1% | +21% | −12,2% | 0,7 | 1,32 → 0,61 | +11% | 0,13 |
> | 2512 | Donchian + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+224% · −38,7%** | +47% · −7,4% | +31% | −9,4% | 1,9 | 0,91 → 1,56 | +25% | 0,25 |
> | 2513 | GPS médias + 1ª vela 80 + Pullback ⚠️ | **+144% · −33,0%** | +51% · −11,2% | +32% | −6,9% | 2,8 | 1,71 → 1,43 | +24% | −0,05 |
> | 2514 | ADX + Pôr do sol + Bollinger | **+133% · −32,0%** | +48% · −10,0% | +27% | −5,2% | 2,7 | 0,89 → 1,89 | +16% | 0,11 |
> | 2515 | Donchian + 1ª vela 80 + Bollinger ⚠️ | **+204% · −25,4%** | +63% · −7,8% | +34% | −6,7% | 3,1 | 1,50 → 1,85 | +26% | 0,18 |
> | 2516 | ADX + BB explosão + Pôr do sol + Rompe 200 + Tendência | **+187% · −62,2%** | +46% · −14,6% | +29% | −6,5% | 2,5 | 1,33 → 1,45 | +19% | 0,12 |
> | 2517 | ADX + Donchian + Bollinger + Onda | **+264% · −42,6%** | +64% · −9,7% | +35% | −6,4% | 3,4 | 0,90 → 1,74 | +23% | 0,22 |
> | 2518 | MACD + Quinta ⚠️ | **+47% · −9,7%** | +30% · −4,4% | +24% | −7,1% | 1,6 | 0,81 → 1,31 | +20% | −0,12 |
> | 2519 | ADX + Donchian + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+358% · −62,2%** | +72% · −13,5% | +40% | −6,3% | 4,3 | 1,50 → 1,61 | +27% | 0,29 |
> | 2520 | ADX + MACD + Pôr do sol + Quinta + Pullback ⚠️ | **+158% · −33,4%** | +37% · −5,5% | +26% | −3,6% | 3,6 | 1,38 → 1,79 | +17% | −0,01 |

> [!example]- Combinações 2521 a 2550 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2521 | ADX + BB explosão + IFR + Bollinger + Onda | **+270% · −55,2%** | +57% · −10,7% | +33% | −6,7% | 3,1 | 0,88 → 1,75 | +25% | 0,28 |
> | 2522 | VWAP + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+134% · −35,0%** | +34% · −6,8% | +26% | −10,1% | 1,3 | 0,84 → 1,43 | +18% | 0,07 |
> | 2523 | BB explosão + IFR + MACD + 1ª vela 80 + Onda ⚠️ | **+221% · −42,9%** | +49% · −9,1% | +33% | −10,2% | 2,0 | 0,82 → 1,64 | +21% | 0,26 |
> | 2524 | Quinta + Pullback + Onda ⚠️ | **+71% · −19,2%** | +31% · −5,5% | +25% | −5,5% | 2,2 | 0,91 → 1,32 | +21% | −0,08 |
> | 2525 | ADX + BB explosão + Quinta + Bollinger + Tendência ⚠️ | **+250% · −63,5%** | +52% · −15,0% | +31% | −6,0% | 3,1 | 1,43 → 1,61 | +20% | 0,21 |
> | 2526 | VWAP + Donchian + GPS médias + Pôr do sol + Quinta ⚠️ | **+176% · −42,2%** | +43% · −8,6% | +27% | −8,6% | 1,6 | 1,39 → 1,12 | +18% | 0,03 |
> | 2527 | ADX + Donchian + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+322% · −49,1%** | +63% · −9,9% | +36% | −5,3% | 4,3 | 1,56 → 1,65 | +25% | 0,12 |
> | 2528 | ADX + GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+266% · −44,8%** | +54% · −8,9% | +33% | −6,3% | 3,3 | 1,37 → 1,66 | +28% | 0,10 |
> | 2529 | GPS médias + MACD + Pullback + Onda | **+165% · −34,5%** | +47% · −8,6% | +32% | −9,8% | 1,9 | 1,09 → 1,35 | +25% | 0,12 |
> | 2530 | ADX + VWAP + 1ª vela 80 + Quinta + Tendência ⚠️ | **+218% · −47,7%** | +48% · −8,8% | +32% | −6,1% | 3,1 | 1,19 → 1,59 | +22% | 0,09 |
> | 2531 | ADX + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+242% · −45,2%** | +48% · −9,1% | +29% | −6,3% | 2,6 | 1,01 → 1,87 | +20% | 0,20 |
> | 2532 | ADX + Rompe 200 + Bollinger + Onda | **+174% · −38,3%** | +47% · −9,1% | +28% | −7,2% | 2,2 | 0,68 → 1,68 | +19% | 0,15 |
> | 2533 | ADX + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+159% · −36,7%** | +39% · −6,7% | +27% | −5,8% | 2,5 | 0,59 → 1,71 | +19% | 0,01 |
> | 2534 | ADX + Pôr do sol + Quinta + Pullback + Rompe 200 ⚠️ | **+127% · −31,0%** | +33% · −6,1% | +23% | −4,2% | 2,4 | 1,61 → 1,57 | +17% | 0,02 |
> | 2535 | BB explosão + IFR + Pôr do sol | **+109% · −31,4%** | +43% · −9,9% | +29% | −5,6% | 2,8 | 1,24 → 1,53 | +18% | 0,02 |
> | 2536 | Donchian + GPS médias + IFR + Tendência + Onda | **+336% · −53,2%** | +68% · −11,2% | +41% | −8,1% | 3,4 | 1,38 → 1,50 | +30% | 0,39 |
> | 2537 | Donchian + BB explosão + IFR + MACD + 1ª vela 80 ⚠️ | **+276% · −47,6%** | +57% · −10,0% | +35% | −9,8% | 2,3 | 1,23 → 1,60 | +25% | 0,34 |
> | 2538 | Donchian + GPS médias + Pôr do sol + Bollinger + Onda | **+273% · −43,2%** | +54% · −8,3% | +31% | −7,4% | 2,4 | 1,19 → 1,50 | +28% | 0,10 |
> | 2539 | IFR + MACD + Onda | **+140% · −27,6%** | +50% · −8,8% | +35% | −10,0% | 2,3 | 0,70 → 1,62 | +25% | 0,32 |
> | 2540 | BB explosão + IFR + Rompe 200 + Bollinger + Tendência | **+262% · −49,9%** | +51% · −9,8% | +32% | −7,1% | 2,7 | 1,67 → 1,53 | +18% | 0,30 |
> | 2541 | Donchian + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+176% · −35,6%** | +41% · −7,0% | +28% | −7,5% | 2,0 | 0,95 → 1,42 | +25% | 0,09 |
> | 2542 | ADX + Pullback + Bollinger | **+156% · −31,7%** | +54% · −9,9% | +30% | −5,8% | 3,0 | 1,49 → 1,81 | +19% | 0,14 |
> | 2543 | VWAP + BB explosão + IFR + MACD + Pôr do sol | **+150% · −45,2%** | +39% · −9,2% | +28% | −10,8% | 1,4 | 0,95 → 1,31 | +20% | 0,19 |
> | 2544 | Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+109% · −15,5%** | +40% · −4,2% | +25% | −4,0% | 3,1 | 1,14 → 2,08 | +15% | 0,10 |
> | 2545 | ADX + VWAP + GPS médias + IFR + Pullback | **+251% · −52,8%** | +55% · −10,9% | +33% | −6,6% | 3,1 | 1,44 → 1,48 | +22% | 0,17 |
> | 2546 | ADX + Donchian + GPS médias + IFR | **+292% · −53,4%** | +76% · −14,5% | +40% | −5,9% | 4,7 | 1,43 → 1,60 | +27% | 0,38 |
> | 2547 | ADX + MACD + Pôr do sol + Pullback + Rompe 200 | **+159% · −35,6%** | +38% · −6,1% | +26% | −4,3% | 3,1 | 1,33 → 1,65 | +19% | −0,01 |
> | 2548 | ADX + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+208% · −39,3%** | +43% · −7,2% | +26% | −3,8% | 3,5 | 1,08 → 2,00 | +19% | 0,10 |
> | 2549 | ADX + MACD + Pôr do sol + Rompe 200 | **+124% · −35,8%** | +38% · −8,3% | +26% | −6,0% | 2,2 | 0,84 → 1,60 | +19% | 0,01 |
> | 2550 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+272% · −46,0%** | +52% · −6,6% | +31% | −4,0% | 4,6 | 1,50 → 1,90 | +21% | −0,01 |

> [!example]- Combinações 2551 a 2580 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2551 | MACD + Quinta + Rompe 200 + Onda ⚠️ | **+90% · −22,5%** | +31% · −4,9% | +24% | −7,9% | 1,5 | 0,61 → 1,37 | +17% | 0,01 |
> | 2552 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+318% · −37,0%** | +56% · −7,0% | +31% | −3,9% | 4,7 | 1,29 → 2,00 | +21% | 0,11 |
> | 2553 | ADX + Donchian + MACD + Tendência | **+272% · −59,3%** | +69% · −16,9% | +40% | −9,7% | 2,8 | 1,31 → 1,57 | +28% | 0,40 |
> | 2554 | ADX + Donchian + IFR + Onda | **+267% · −44,0%** | +68% · −10,3% | +39% | −7,4% | 3,5 | 0,97 → 1,75 | +25% | 0,26 |
> | 2555 | Donchian + GPS médias + Quinta + Tendência + Onda ⚠️ | **+266% · −49,2%** | +58% · −10,2% | +35% | −6,5% | 3,5 | 1,34 → 1,38 | +27% | 0,14 |
> | 2556 | BB explosão + MACD + Pullback + Rompe 200 + Tendência | **+176% · −55,7%** | +42% · −12,1% | +30% | −7,2% | 2,4 | 1,56 → 1,26 | +16% | 0,18 |
> | 2557 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+198% · −39,4%** | +42% · −6,6% | +28% | −5,4% | 2,8 | 0,96 → 1,72 | +23% | −0,02 |
> | 2558 | VWAP + GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+156% · −39,8%** | +37% · −8,3% | +24% | −8,9% | 1,2 | 1,47 → 1,06 | +17% | 0,12 |
> | 2559 | ADX + GPS médias + IFR + Quinta + Onda ⚠️ | **+250% · −46,2%** | +55% · −9,5% | +34% | −5,4% | 3,9 | 1,06 → 1,65 | +27% | 0,11 |
> | 2560 | Rompe 200 | **+20% · −10,4%** | +20% · −10,4% | +17% | −10,7% | 0,4 | 0,81 → 0,19 | +11% | — |
> | 2561 | VWAP + Donchian + IFR + 1ª vela 80 ⚠️ | **+227% · −37,2%** | +57% · −9,3% | +35% | −10,7% | 2,1 | 1,26 → 1,55 | +22% | 0,27 |
> | 2562 | BB explosão + MACD + Pullback + Bollinger + Tendência | **+241% · −55,6%** | +49% · −11,9% | +32% | −6,8% | 2,8 | 1,62 → 1,45 | +19% | 0,22 |
> | 2563 | MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+92% · −21,6%** | +37% · −6,5% | +27% | −10,0% | 1,4 | 0,89 → 1,49 | +18% | 0,17 |
> | 2564 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+117% · −36,3%** | +31% · −7,0% | +24% | −11,1% | 1,0 | 0,86 → 1,33 | +19% | 0,15 |
> | 2565 | ADX + Pôr do sol + Pullback + Tendência | **+191% · −43,2%** | +50% · −10,1% | +32% | −6,6% | 3,0 | 1,72 → 1,66 | +23% | 0,03 |
> | 2566 | ADX + GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+233% · −43,1%** | +50% · −8,2% | +30% | −4,8% | 3,7 | 1,51 → 1,59 | +24% | 0,10 |
> | 2567 | ADX + BB explosão + Pullback + Rompe 200 + Bollinger | **+201% · −53,0%** | +45% · −10,8% | +27% | −4,4% | 3,2 | 1,45 → 1,54 | +17% | 0,15 |
> | 2568 | BB explosão + MACD + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+217% · −38,2%** | +44% · −7,6% | +29% | −8,0% | 2,0 | 1,42 → 1,66 | +22% | 0,12 |
> | 2569 | ADX + Rompe 200 + Tendência | **+151% · −43,8%** | +55% · −14,9% | +35% | −9,5% | 2,3 | 1,36 → 1,48 | +23% | 0,16 |
> | 2570 | Donchian + Quinta + Bollinger + Tendência ⚠️ | **+249% · −37,0%** | +57% · −9,1% | +33% | −5,2% | 3,9 | 1,88 → 1,57 | +20% | 0,13 |
> | 2571 | VWAP + Quinta + Pullback ⚠️ | **+53% · −24,8%** | +26% · −7,7% | +21% | −9,7% | 0,9 | 1,40 → 0,76 | +13% | −0,05 |
> | 2572 | Donchian + BB explosão + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+321% · −58,9%** | +61% · −12,9% | +35% | −5,9% | 3,8 | 1,53 → 1,57 | +20% | 0,31 |
> | 2573 | ADX + 1ª vela 80 + Quinta + Pullback ⚠️ | **+155% · −31,6%** | +43% · −6,8% | +29% | −4,1% | 3,8 | 1,33 → 1,87 | +19% | −0,07 |
> | 2574 | ADX + Donchian + GPS médias + MACD + Bollinger | **+337% · −53,0%** | +66% · −10,6% | +35% | −7,3% | 3,1 | 1,32 → 1,58 | +27% | 0,33 |
> | 2575 | VWAP + GPS médias + IFR + MACD + Onda | **+207% · −48,9%** | +49% · −11,0% | +33% | −13,2% | 1,5 | 0,92 → 1,36 | +27% | 0,32 |
> | 2576 | Donchian + Pôr do sol + Quinta + Tendência ⚠️ | **+184% · −34,9%** | +48% · −8,8% | +31% | −4,3% | 4,2 | 1,80 → 1,46 | +19% | 0,08 |
> | 2577 | VWAP + Quinta + Pullback + Onda ⚠️ | **+84% · −27,1%** | +30% · −6,2% | +24% | −10,2% | 1,1 | 0,83 → 1,11 | +17% | −0,00 |
> | 2578 | ADX + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+169% · −39,2%** | +41% · −7,3% | +28% | −5,4% | 2,7 | 0,69 → 1,72 | +17% | 0,02 |
> | 2579 | VWAP + MACD + Pôr do sol + Pullback | **+88% · −25,0%** | +30% · −6,1% | +24% | −9,7% | 1,1 | 1,14 → 1,13 | +15% | 0,03 |
> | 2580 | VWAP + IFR + MACD + Pôr do sol | **+128% · −29,5%** | +38% · −7,0% | +28% | −10,2% | 1,5 | 0,95 → 1,39 | +17% | 0,16 |

> [!example]- Combinações 2581 a 2610 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2581 | GPS médias + Pullback + Rompe 200 + Onda | **+138% · −33,4%** | +41% · −8,3% | +28% | −8,4% | 1,8 | 1,23 → 1,17 | +24% | 0,14 |
> | 2582 | VWAP + BB explosão + Quinta + Pullback + Tendência ⚠️ | **+144% · −60,3%** | +38% · −12,7% | +28% | −6,5% | 2,3 | 1,50 → 1,09 | +13% | 0,09 |
> | 2583 | ADX + GPS médias + Pullback + Bollinger | **+238% · −42,7%** | +58% · −11,0% | +32% | −5,0% | 3,9 | 1,66 → 1,61 | +23% | 0,18 |
> | 2584 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+288% · −48,9%** | +58% · −9,3% | +35% | −5,2% | 4,2 | 1,46 → 1,67 | +28% | 0,13 |
> | 2585 | GPS médias + Pôr do sol + Rompe 200 + Bollinger + Onda | **+186% · −35,2%** | +41% · −7,0% | +26% | −7,5% | 1,7 | 1,10 → 1,41 | +21% | 0,08 |
> | 2586 | ADX + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+157% · −39,8%** | +39% · −7,3% | +27% | −6,5% | 2,2 | 0,66 → 1,60 | +20% | 0,04 |
> | 2587 | Donchian + BB explosão + Pullback + Rompe 200 + Tendência | **+220% · −66,2%** | +50% · −14,5% | +32% | −5,9% | 3,2 | 1,73 → 1,24 | +13% | 0,25 |
> | 2588 | ADX + GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+225% · −39,1%** | +47% · −7,4% | +27% | −3,6% | 4,0 | 1,45 → 1,67 | +23% | 0,09 |
> | 2589 | ADX + VWAP + Pullback + Rompe 200 + Bollinger | **+184% · −38,4%** | +41% · −7,0% | +26% | −6,1% | 2,2 | 1,34 → 1,42 | +17% | 0,16 |
> | 2590 | BB explosão + IFR + MACD + Pôr do sol + Bollinger | **+216% · −37,5%** | +45% · −7,5% | +29% | −7,0% | 2,3 | 1,23 → 1,67 | +23% | 0,17 |
> | 2591 | GPS médias + IFR + Onda | **+169% · −32,1%** | +60% · −11,1% | +37% | −10,7% | 2,3 | 1,03 → 1,47 | +31% | 0,29 |
> | 2592 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+116% · −33,7%** | +31% · −6,3% | +24% | −10,1% | 1,1 | 0,86 → 1,44 | +17% | 0,07 |
> | 2593 | ADX + Donchian + MACD + Pôr do sol + Onda | **+237% · −45,5%** | +52% · −7,6% | +32% | −6,5% | 3,0 | 0,80 → 1,66 | +22% | 0,12 |
> | 2594 | Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+198% · −36,7%** | +43% · −6,9% | +28% | −6,5% | 2,3 | 0,97 → 1,60 | +24% | 0,10 |
> | 2595 | VWAP + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+138% · −40,8%** | +35% · −8,1% | +27% | −12,6% | 1,1 | 0,58 → 1,44 | +18% | 0,10 |
> | 2596 | GPS médias + Quinta + Tendência + Onda ⚠️ | **+182% · −38,1%** | +51% · −8,9% | +33% | −7,1% | 2,9 | 1,24 → 1,35 | +24% | 0,04 |
> | 2597 | Donchian + GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+330% · −47,7%** | +60% · −9,0% | +34% | −4,6% | 4,6 | 1,86 → 1,45 | +20% | 0,17 |
> | 2598 | VWAP + Donchian + IFR + Onda | **+197% · −39,5%** | +55% · −10,3% | +34% | −11,0% | 1,9 | 0,92 → 1,41 | +22% | 0,32 |
> | 2599 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+134% · −28,5%** | +39% · −6,2% | +26% | −5,3% | 2,4 | 1,48 → 1,50 | +21% | −0,04 |
> | 2600 | BB explosão + IFR + Pôr do sol + Onda | **+142% · −32,7%** | +43% · −7,5% | +29% | −7,4% | 2,3 | 0,80 → 1,54 | +23% | 0,07 |
> | 2601 | ADX + VWAP + MACD + Pullback + Bollinger | **+217% · −44,2%** | +46% · −8,0% | +29% | −7,0% | 2,3 | 1,17 → 1,55 | +17% | 0,21 |
> | 2602 | Quinta + Rompe 200 + Onda ⚠️ | **+57% · −16,3%** | +27% · −4,8% | +22% | −7,3% | 1,2 | 0,54 → 1,16 | +16% | −0,06 |
> | 2603 | ADX + VWAP + GPS médias + Pullback + Tendência | **+247% · −61,5%** | +56% · −14,3% | +34% | −6,6% | 3,3 | 1,52 → 1,34 | +20% | 0,20 |
> | 2604 | Donchian + MACD + Pôr do sol + Onda | **+166% · −33,1%** | +46% · −8,2% | +30% | −8,0% | 2,2 | 0,79 → 1,50 | +24% | 0,14 |
> | 2605 | VWAP + MACD + Rompe 200 + Onda | **+91% · −37,1%** | +32% · −9,6% | +25% | −15,4% | 0,8 | 0,51 → 1,14 | +21% | 0,26 |
> | 2606 | Donchian + GPS médias + MACD + Pôr do sol + Tendência | **+278% · −51,2%** | +58% · −10,4% | +35% | −6,8% | 3,3 | 1,54 → 1,37 | +24% | 0,24 |
> | 2607 | BB explosão + GPS médias + IFR + 1ª vela 80 + Pullback ⚠️ | **+250% · −47,7%** | +53% · −10,3% | +33% | −7,6% | 2,7 | 1,62 → 1,53 | +21% | 0,13 |
> | 2608 | ADX + VWAP + MACD + 1ª vela 80 + Pullback ⚠️ | **+200% · −41,8%** | +45% · −7,7% | +30% | −8,3% | 2,1 | 1,05 → 1,59 | +18% | 0,13 |
> | 2609 | VWAP + GPS médias + Pullback + Tendência + Onda | **+206% · −51,3%** | +49% · −10,7% | +33% | −9,9% | 2,0 | 1,26 → 1,22 | +25% | 0,21 |
> | 2610 | BB explosão + Pôr do sol + Pullback + Rompe 200 + Bollinger | **+138% · −30,5%** | +34% · −5,5% | +22% | −3,9% | 2,5 | 1,76 → 1,33 | +14% | 0,01 |

> [!example]- Combinações 2611 a 2640 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2611 | Donchian + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+215% · −44,5%** | +56% · −11,9% | +32% | −8,7% | 2,2 | 1,52 → 1,37 | +22% | 0,24 |
> | 2612 | ADX + GPS médias + IFR + Pôr do sol + Onda | **+253% · −45,0%** | +55% · −9,2% | +33% | −5,3% | 3,9 | 1,02 → 1,67 | +27% | 0,12 |
> | 2613 | Donchian + Bollinger + Tendência + Onda | **+277% · −39,1%** | +64% · −9,7% | +37% | −8,5% | 2,9 | 1,25 → 1,57 | +30% | 0,31 |
> | 2614 | ADX + Donchian + IFR + 1ª vela 80 ⚠️ | **+304% · −38,4%** | +70% · −10,1% | +39% | −5,4% | 5,0 | 1,28 → 1,92 | +25% | 0,23 |
> | 2615 | ADX + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+198% · −36,7%** | +44% · −6,5% | +29% | −5,1% | 3,2 | 0,88 → 1,83 | +20% | 0,01 |
> | 2616 | VWAP + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+102% · −33,1%** | +30% · −6,3% | +24% | −10,6% | 1,0 | 0,53 → 1,29 | +17% | 0,05 |
> | 2617 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+118% · −33,9%** | +36% · −8,4% | +26% | −4,6% | 2,8 | 1,45 → 1,55 | +18% | −0,09 |
> | 2618 | ADX + BB explosão + IFR + Pôr do sol + Pullback | **+216% · −51,0%** | +48% · −9,9% | +30% | −4,7% | 3,7 | 1,46 → 1,75 | +20% | 0,04 |
> | 2619 | ADX + Donchian + GPS médias + Pôr do sol | **+225% · −48,0%** | +62% · −12,3% | +34% | −4,8% | 4,3 | 1,35 → 1,49 | +25% | 0,10 |
> | 2620 | VWAP + IFR + 1ª vela 80 + Onda ⚠️ | **+167% · −33,4%** | +46% · −8,4% | +32% | −11,5% | 1,7 | 0,73 → 1,58 | +22% | 0,24 |
> | 2621 | GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+161% · −34,6%** | +45% · −8,8% | +30% | −9,6% | 1,8 | 1,28 → 1,46 | +22% | 0,02 |
> | 2622 | ADX + Donchian + BB explosão + IFR + Pôr do sol | **+257% · −59,9%** | +58% · −12,9% | +33% | −5,3% | 3,9 | 1,25 → 1,66 | +22% | 0,19 |
> | 2623 | MACD + Pullback + Onda | **+98% · −22,8%** | +39% · −7,1% | +30% | −9,4% | 1,8 | 0,80 → 1,43 | +24% | 0,10 |
> | 2624 | VWAP + BB explosão + IFR + MACD + 1ª vela 80 ⚠️ | **+191% · −48,3%** | +45% · −10,8% | +31% | −12,8% | 1,4 | 0,97 → 1,45 | +23% | 0,31 |
> | 2625 | MACD + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+139% · −31,6%** | +34% · −5,1% | +26% | −8,1% | 1,6 | 0,70 → 1,59 | +16% | 0,04 |
> | 2626 | ADX + MACD + Pôr do sol + Pullback + Onda | **+184% · −36,0%** | +42% · −6,8% | +29% | −6,3% | 2,6 | 0,85 → 1,70 | +20% | 0,02 |
> | 2627 | VWAP + GPS médias + IFR | **+144% · −37,5%** | +54% · −13,3% | +34% | −13,8% | 1,5 | 1,29 → 1,19 | +21% | 0,30 |
> | 2628 | ADX + MACD + Pôr do sol + Rompe 200 + Onda | **+159% · −38,9%** | +39% · −7,0% | +27% | −6,5% | 2,2 | 0,61 → 1,62 | +20% | 0,05 |
> | 2629 | ADX + VWAP + Donchian + Bollinger + Onda | **+263% · −50,2%** | +56% · −8,9% | +32% | −8,9% | 2,2 | 0,84 → 1,54 | +19% | 0,28 |
> | 2630 | ADX + Pôr do sol + Pullback + Rompe 200 + Onda | **+153% · −33,3%** | +38% · −6,4% | +26% | −5,5% | 2,4 | 0,96 → 1,56 | +20% | 0,02 |
> | 2631 | ADX + VWAP + 1ª vela 80 + Quinta + Pullback ⚠️ | **+169% · −39,8%** | +40% · −5,9% | +27% | −5,2% | 2,8 | 1,18 → 1,61 | +16% | 0,00 |
> | 2632 | VWAP + Donchian + MACD + Pullback | **+159% · −38,7%** | +46% · −10,7% | +30% | −11,7% | 1,5 | 1,28 → 1,19 | +19% | 0,23 |
> | 2633 | BB explosão + MACD + 1ª vela 80 + Tendência ⚠️ | **+186% · −52,3%** | +51% · −14,0% | +35% | −8,7% | 2,5 | 1,22 → 1,46 | +24% | 0,30 |
> | 2634 | BB explosão + MACD + Pullback + Tendência + Onda | **+195% · −56,7%** | +46% · −12,2% | +33% | −8,6% | 2,3 | 1,14 → 1,39 | +26% | 0,22 |
> | 2635 | ADX + GPS médias + IFR + Rompe 200 + Onda | **+248% · −48,2%** | +55% · −10,2% | +34% | −6,5% | 3,2 | 1,06 → 1,58 | +30% | 0,24 |
> | 2636 | VWAP + GPS médias + Pullback + Bollinger | **+168% · −37,1%** | +46% · −9,5% | +28% | −10,2% | 1,4 | 1,62 → 1,12 | +17% | 0,18 |
> | 2637 | 1ª vela 80 + Pullback ⚠️ | **+72% · −17,9%** | +41% · −8,7% | +29% | −4,3% | 3,9 | 1,49 → 1,59 | +24% | −0,31 |
> | 2638 | BB explosão + GPS médias + IFR + Pullback + Rompe 200 | **+198% · −54,3%** | +47% · −11,9% | +30% | −6,5% | 2,6 | 1,70 → 1,27 | +15% | 0,21 |
> | 2639 | ADX + BB explosão + MACD + Pullback + Bollinger | **+233% · −57,8%** | +49% · −12,5% | +30% | −5,5% | 3,1 | 1,28 → 1,65 | +22% | 0,18 |
> | 2640 | ADX + MACD + Bollinger + Onda | **+204% · −41,4%** | +53% · −10,3% | +32% | −8,1% | 2,4 | 0,60 → 1,76 | +19% | 0,26 |

> [!example]- Combinações 2641 a 2670 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2641 | ADX + GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+282% · −47,1%** | +57% · −9,2% | +34% | −5,5% | 3,8 | 1,36 → 1,73 | +28% | 0,24 |
> | 2642 | ADX + MACD + Tendência | **+178% · −50,0%** | +63% · −17,5% | +40% | −11,5% | 2,3 | 1,16 → 1,57 | +29% | 0,35 |
> | 2643 | VWAP + GPS médias + MACD + Tendência | **+177% · −50,9%** | +52% · −13,6% | +34% | −13,1% | 1,7 | 1,27 → 1,15 | +23% | 0,39 |
> | 2644 | Donchian + BB explosão + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+244% · −41,3%** | +49% · −8,0% | +29% | −6,4% | 2,5 | 1,42 → 1,63 | +19% | 0,09 |
> | 2645 | ADX + GPS médias + IFR + Bollinger | **+288% · −44,5%** | +68% · −11,7% | +36% | −5,3% | 4,5 | 1,44 → 1,75 | +28% | 0,37 |
> | 2646 | GPS médias + MACD + Pôr do sol + Bollinger + Onda | **+217% · −38,9%** | +45% · −8,0% | +29% | −8,5% | 1,8 | 0,96 → 1,52 | +20% | 0,12 |
> | 2647 | VWAP + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+80% · −28,0%** | +25% · −4,8% | +21% | −8,4% | 0,9 | 0,92 → 1,07 | +17% | 0,04 |
> | 2648 | Donchian + GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+200% · −40,1%** | +47% · −8,4% | +29% | −8,0% | 2,0 | 1,21 → 1,28 | +25% | 0,08 |
> | 2649 | VWAP + GPS médias + Pôr do sol + Tendência | **+158% · −44,9%** | +47% · −11,5% | +31% | −8,5% | 2,1 | 1,43 → 1,11 | +19% | 0,13 |
> | 2650 | BB explosão + MACD + Pôr do sol + Pullback + Bollinger | **+168% · −35,0%** | +38% · −5,9% | +25% | −5,4% | 2,3 | 1,47 → 1,54 | +19% | 0,03 |
> | 2651 | ADX + Donchian + Pullback + Bollinger | **+273% · −41,0%** | +62% · −9,2% | +33% | −4,6% | 4,5 | 1,66 → 1,82 | +21% | 0,13 |
> | 2652 | VWAP + Donchian + GPS médias + Pôr do sol + Tendência | **+235% · −55,7%** | +54% · −12,0% | +33% | −8,2% | 2,5 | 1,48 → 1,19 | +19% | 0,21 |
> | 2653 | ADX + IFR + Pullback + Onda | **+213% · −34,5%** | +55% · −8,6% | +35% | −7,1% | 3,1 | 1,06 → 1,81 | +22% | 0,10 |
> | 2654 | BB explosão + IFR + Quinta ⚠️ | **+107% · −33,3%** | +42% · −10,8% | +29% | −5,6% | 2,9 | 1,33 → 1,48 | +17% | 0,04 |
> | 2655 | Donchian + GPS médias + Quinta + Rompe 200 ⚠️ | **+168% · −36,9%** | +48% · −9,4% | +28% | −6,3% | 2,4 | 1,70 → 1,14 | +17% | 0,09 |
> | 2656 | BB explosão + Pôr do sol + Pullback + Tendência + Onda | **+174% · −50,4%** | +42% · −10,0% | +30% | −6,3% | 2,7 | 1,23 → 1,38 | +23% | 0,08 |
> | 2657 | ADX + VWAP + MACD + Rompe 200 + Bollinger | **+189% · −44,7%** | +43% · −8,9% | +27% | −8,3% | 1,7 | 0,89 → 1,47 | +18% | 0,25 |
> | 2658 | GPS médias + Rompe 200 + Bollinger + Tendência + Onda | **+262% · −41,5%** | +52% · −7,9% | +32% | −7,3% | 2,6 | 1,34 → 1,41 | +27% | 0,24 |
> | 2659 | VWAP + GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+212% · −55,6%** | +48% · −13,2% | +31% | −9,8% | 1,9 | 1,43 → 1,25 | +21% | 0,24 |
> | 2660 | VWAP + Donchian + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+218% · −51,1%** | +49% · −11,3% | +30% | −11,0% | 1,6 | 1,34 → 1,30 | +21% | 0,09 |
> | 2661 | ADX + Donchian + BB explosão + IFR + Bollinger | **+327% · −62,3%** | +65% · −13,6% | +35% | −5,8% | 3,9 | 1,31 → 1,72 | +22% | 0,36 |
> | 2662 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+221% · −47,2%** | +48% · −8,2% | +32% | −6,1% | 3,1 | 1,14 → 1,60 | +21% | 0,14 |
> | 2663 | Donchian + Quinta + Tendência + Onda ⚠️ | **+205% · −38,4%** | +54% · −9,1% | +35% | −7,6% | 2,9 | 1,21 → 1,46 | +29% | 0,10 |
> | 2664 | MACD + 1ª vela 80 + Quinta ⚠️ | **+90% · −19,3%** | +36% · −5,4% | +27% | −8,2% | 1,7 | 0,90 → 1,63 | +16% | −0,06 |
> | 2665 | VWAP + Donchian + MACD + Rompe 200 | **+136% · −38,6%** | +42% · −10,0% | +28% | −13,2% | 1,1 | 1,04 → 1,09 | +19% | 0,32 |
> | 2666 | Donchian + GPS médias + Pôr do sol + Rompe 200 + Onda | **+202% · −41,3%** | +47% · −8,8% | +29% | −7,9% | 2,0 | 1,16 → 1,30 | +26% | 0,11 |
> | 2667 | Donchian + Pôr do sol + 1ª vela 80 + Quinta + Pullback ⚠️ | **+198% · −35,1%** | +40% · −5,8% | +27% | −2,3% | 6,2 | 1,91 → 1,86 | +21% | −0,07 |
> | 2668 | ADX + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+172% · −39,9%** | +41% · −7,4% | +27% | −5,5% | 2,6 | 0,64 → 1,74 | +17% | 0,07 |
> | 2669 | Donchian + MACD + Pôr do sol + Tendência | **+211% · −43,3%** | +54% · −11,8% | +35% | −7,5% | 2,9 | 1,45 → 1,43 | +24% | 0,26 |
> | 2670 | ADX + VWAP + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+217% · −48,4%** | +48% · −9,0% | +32% | −7,3% | 2,6 | 1,18 → 1,51 | +23% | 0,19 |

> [!example]- Combinações 2671 a 2700 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2671 | GPS médias + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+239% · −42,0%** | +47% · −8,9% | +29% | −9,4% | 1,7 | 1,39 → 1,54 | +22% | 0,23 |
> | 2672 | VWAP + Donchian + 1ª vela 80 + Pullback + Onda ⚠️ | **+213% · −46,3%** | +47% · −9,9% | +31% | −11,2% | 1,6 | 1,04 → 1,43 | +22% | 0,18 |
> | 2673 | Donchian + BB explosão + IFR + 1ª vela 80 ⚠️ | **+237% · −43,1%** | +61% · −11,1% | +36% | −8,5% | 2,8 | 1,34 → 1,63 | +22% | 0,31 |
> | 2674 | Donchian + MACD + 1ª vela 80 + Quinta ⚠️ | **+186% · −29,8%** | +48% · −6,2% | +31% | −7,7% | 2,4 | 1,26 → 1,63 | +25% | 0,05 |
> | 2675 | GPS médias + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+265% · −41,0%** | +50% · −8,0% | +31% | −7,6% | 2,4 | 1,27 → 1,64 | +24% | 0,12 |
> | 2676 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+171% · −38,0%** | +40% · −7,3% | +27% | −4,8% | 3,1 | 0,61 → 1,84 | +16% | −0,00 |
> | 2677 | ADX + VWAP + IFR + Pôr do sol + Tendência | **+247% · −50,3%** | +52% · −9,7% | +34% | −7,2% | 2,9 | 1,30 → 1,60 | +21% | 0,17 |
> | 2678 | Bollinger | **+52% · −6,9%** | +52% · −6,9% | +26% | −3,6% | 3,5 | 1,37 → 1,77 | +18% | — |
> | 2679 | ADX + Donchian + BB explosão + IFR + Tendência | **+313% · −72,2%** | +69% · −18,9% | +40% | −8,1% | 3,4 | 1,42 → 1,59 | +22% | 0,44 |
> | 2680 | GPS médias + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+268% · −43,2%** | +56% · −8,4% | +36% | −9,1% | 2,6 | 1,11 → 1,51 | +26% | 0,29 |
> | 2681 | VWAP + GPS médias + MACD + Quinta + Bollinger ⚠️ | **+184% · −45,4%** | +42% · −9,8% | +27% | −11,7% | 1,2 | 1,23 → 1,24 | +22% | 0,17 |
> | 2682 | ADX + GPS médias + Rompe 200 + Tendência | **+218% · −54,6%** | +60% · −15,3% | +35% | −7,8% | 2,9 | 1,52 → 1,40 | +23% | 0,25 |
> | 2683 | BB explosão + IFR + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+199% · −35,9%** | +44% · −7,3% | +30% | −7,3% | 2,4 | 0,86 → 1,72 | +20% | 0,09 |
> | 2684 | ADX + VWAP + MACD + Tendência + Onda | **+211% · −59,6%** | +51% · −12,3% | +34% | −10,6% | 2,0 | 0,82 → 1,45 | +24% | 0,32 |
> | 2685 | ADX + VWAP + Rompe 200 + Tendência + Onda | **+188% · −52,9%** | +47% · −10,2% | +31% | −9,3% | 2,0 | 0,90 → 1,38 | +24% | 0,21 |
> | 2686 | ADX + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+156% · −33,8%** | +44% · −7,6% | +29% | −4,5% | 3,5 | 1,30 → 1,74 | +22% | 0,02 |
> | 2687 | BB explosão + IFR + MACD + Rompe 200 + Onda | **+175% · −41,7%** | +43% · −8,0% | +30% | −9,2% | 1,9 | 0,85 → 1,46 | +24% | 0,26 |
> | 2688 | BB explosão + Pôr do sol + Quinta + Bollinger + Tendência ⚠️ | **+186% · −46,3%** | +41% · −8,8% | +27% | −4,2% | 3,4 | 1,67 → 1,49 | +17% | 0,09 |
> | 2689 | ADX + VWAP + MACD + 1ª vela 80 + Tendência ⚠️ | **+243% · −54,5%** | +53% · −10,5% | +35% | −8,6% | 2,6 | 1,06 → 1,55 | +24% | 0,29 |
> | 2690 | GPS médias + Pôr do sol + Bollinger | **+133% · −27,9%** | +47% · −8,8% | +26% | −6,0% | 2,2 | 1,69 → 1,40 | +23% | 0,01 |
> | 2691 | ADX + IFR + 1ª vela 80 ⚠️ | **+192% · −33,8%** | +64% · −10,7% | +38% | −6,0% | 4,3 | 1,03 → 2,01 | +23% | 0,19 |
> | 2692 | ADX + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+158% · −31,5%** | +44% · −6,4% | +29% | −4,1% | 3,8 | 1,26 → 1,91 | +18% | −0,04 |
> | 2693 | ADX + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+201% · −41,6%** | +45% · −7,7% | +30% | −6,2% | 2,8 | 0,58 → 1,80 | +17% | 0,11 |
> | 2694 | VWAP + 1ª vela 80 + Tendência ⚠️ | **+132% · −39,4%** | +49% · −14,0% | +34% | −10,9% | 1,9 | 1,19 → 1,33 | +23% | 0,25 |
> | 2695 | VWAP + Quinta + Tendência ⚠️ | **+92% · −33,3%** | +38% · −10,4% | +29% | −7,2% | 2,2 | 1,31 → 1,06 | +16% | 0,01 |
> | 2696 | VWAP + BB explosão + IFR + MACD + Tendência | **+203% · −60,4%** | +50% · −14,0% | +34% | −10,4% | 2,0 | 1,18 → 1,31 | +20% | 0,42 |
> | 2697 | ADX + GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+311% · −47,2%** | +57% · −9,7% | +32% | −4,9% | 4,0 | 1,57 → 1,79 | +26% | 0,14 |
> | 2698 | Donchian + MACD + Pullback | **+151% · −30,5%** | +53% · −10,7% | +33% | −6,5% | 3,1 | 1,56 → 1,41 | +21% | 0,12 |
> | 2699 | ADX + GPS médias + Pôr do sol + Pullback | **+176% · −40,6%** | +49% · −10,3% | +30% | −4,6% | 3,6 | 1,57 → 1,50 | +23% | −0,02 |
> | 2700 | ADX + Donchian + Pôr do sol + Tendência | **+251% · −53,3%** | +63% · −14,2% | +37% | −6,6% | 3,6 | 1,47 → 1,63 | +24% | 0,16 |

> [!example]- Combinações 2701 a 2730 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2701 | Donchian + Quinta + Pullback + Onda ⚠️ | **+160% · −33,3%** | +44% · −6,8% | +29% | −4,9% | 3,3 | 1,23 → 1,47 | +23% | −0,02 |
> | 2702 | Donchian + GPS médias + IFR + Quinta ⚠️ | **+239% · −37,0%** | +60% · −10,0% | +35% | −6,5% | 3,3 | 1,70 → 1,47 | +22% | 0,15 |
> | 2703 | VWAP + IFR + Pôr do sol | **+92% · −20,7%** | +37% · −6,6% | +27% | −8,5% | 1,7 | 1,08 → 1,34 | +15% | 0,02 |
> | 2704 | VWAP + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+79% · −35,3%** | +28% · −9,1% | +22% | −9,9% | 0,9 | 0,96 → 1,19 | +18% | 0,02 |
> | 2705 | VWAP + GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+232% · −44,3%** | +47% · −9,4% | +29% | −10,3% | 1,5 | 1,55 → 1,41 | +21% | 0,17 |
> | 2706 | 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+109% · −18,2%** | +40% · −5,3% | +25% | −5,5% | 2,2 | 1,21 → 1,76 | +17% | 0,17 |
> | 2707 | ADX + GPS médias + Pullback + Rompe 200 + Onda | **+205% · −46,6%** | +48% · −9,6% | +30% | −6,2% | 2,8 | 1,16 → 1,43 | +28% | 0,13 |
> | 2708 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+135% · −36,2%** | +35% · −7,1% | +25% | −8,2% | 1,5 | 1,00 → 1,47 | +18% | 0,08 |
> | 2709 | BB explosão + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+163% · −45,3%** | +46% · −11,2% | +31% | −5,4% | 3,4 | 1,39 → 1,51 | +21% | 0,09 |
> | 2710 | VWAP + IFR + MACD + Pôr do sol + Onda | **+163% · −35,0%** | +39% · −6,7% | +29% | −10,0% | 1,6 | 0,71 → 1,46 | +19% | 0,17 |
> | 2711 | ADX + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+188% · −37,3%** | +48% · −8,8% | +29% | −4,5% | 3,5 | 1,02 → 2,02 | +19% | 0,11 |
> | 2712 | VWAP + GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+236% · −51,9%** | +52% · −11,6% | +34% | −12,6% | 1,7 | 1,28 → 1,33 | +26% | 0,33 |
> | 2713 | ADX + Donchian + MACD + Quinta + Pullback ⚠️ | **+247% · −43,7%** | +50% · −7,8% | +31% | −4,6% | 4,0 | 1,48 → 1,68 | +21% | 0,05 |
> | 2714 | VWAP + BB explosão + Pôr do sol + Pullback + Tendência | **+146% · −56,8%** | +39% · −12,2% | +28% | −6,6% | 2,2 | 1,45 → 1,11 | +14% | 0,10 |
> | 2715 | ADX + VWAP + Bollinger + Tendência + Onda | **+257% · −54,6%** | +54% · −10,5% | +33% | −8,9% | 2,3 | 0,93 → 1,54 | +23% | 0,31 |
> | 2716 | Donchian + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+156% · −34,3%** | +42% · −8,6% | +27% | −4,7% | 3,0 | 1,53 → 1,59 | +20% | −0,00 |
> | 2717 | BB explosão + Pullback + Bollinger + Tendência | **+196% · −51,9%** | +51% · −13,9% | +32% | −5,8% | 3,3 | 1,82 → 1,40 | +15% | 0,19 |
> | 2718 | Donchian + GPS médias + Pôr do sol + Tendência | **+240% · −47,5%** | +62% · −12,1% | +36% | −5,6% | 4,2 | 1,71 → 1,33 | +21% | 0,18 |
> | 2719 | Donchian + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+287% · −43,6%** | +65% · −11,4% | +35% | −8,8% | 2,5 | 1,58 → 1,58 | +25% | 0,26 |
> | 2720 | VWAP + Donchian + Rompe 200 + Bollinger + Onda | **+204% · −39,9%** | +45% · −8,3% | +28% | −11,2% | 1,3 | 0,94 → 1,30 | +22% | 0,25 |
> | 2721 | ADX + BB explosão + IFR + Tendência + Onda | **+265% · −66,3%** | +60% · −15,5% | +38% | −9,5% | 2,6 | 1,06 → 1,63 | +30% | 0,32 |
> | 2722 | MACD + Pôr do sol + Rompe 200 + Onda | **+92% · −22,6%** | +31% · −5,2% | +24% | −8,1% | 1,4 | 0,55 → 1,39 | +17% | 0,06 |
> | 2723 | ADX + Donchian + Tendência + Onda | **+262% · −57,5%** | +69% · −15,5% | +40% | −9,8% | 2,8 | 1,08 → 1,59 | +30% | 0,30 |
> | 2724 | GPS médias + Pôr do sol + Tendência + Onda | **+184% · −36,2%** | +51% · −8,7% | +33% | −7,1% | 2,9 | 1,19 → 1,37 | +22% | 0,10 |
> | 2725 | ADX + Donchian + GPS médias + Tendência + Onda | **+306% · −64,8%** | +70% · −14,6% | +40% | −8,3% | 3,2 | 1,22 → 1,50 | +32% | 0,32 |
> | 2726 | ADX + BB explosão + IFR + 1ª vela 80 + Quinta ⚠️ | **+232% · −48,0%** | +50% · −8,7% | +32% | −4,5% | 4,2 | 1,15 → 1,84 | +24% | 0,09 |
> | 2727 | ADX + GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+283% · −51,2%** | +58% · −10,1% | +35% | −6,6% | 3,4 | 1,48 → 1,58 | +26% | 0,21 |
> | 2728 | ADX + GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+367% · −48,9%** | +64% · −9,9% | +36% | −5,5% | 4,2 | 1,40 → 1,88 | +29% | 0,29 |
> | 2729 | ADX + Donchian + BB explosão + IFR + Quinta ⚠️ | **+254% · −60,6%** | +57% · −13,5% | +33% | −5,4% | 3,9 | 1,30 → 1,64 | +21% | 0,20 |
> | 2730 | VWAP + Donchian + Quinta + Pullback ⚠️ | **+133% · −36,9%** | +40% · −9,4% | +26% | −7,3% | 1,9 | 1,55 → 1,10 | +14% | 0,01 |

> [!example]- Combinações 2731 a 2760 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2731 | ADX + VWAP + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+169% · −38,5%** | +40% · −6,6% | +27% | −6,7% | 2,1 | 1,16 → 1,50 | +18% | 0,10 |
> | 2732 | ADX + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+175% · −41,2%** | +40% · −7,8% | +27% | −5,7% | 2,6 | 0,96 → 1,77 | +20% | 0,04 |
> | 2733 | VWAP + 1ª vela 80 + Tendência + Onda ⚠️ | **+165% · −40,3%** | +47% · −10,4% | +33% | −12,1% | 1,7 | 0,86 → 1,41 | +27% | 0,28 |
> | 2734 | ADX + Donchian + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+236% · −38,7%** | +49% · −6,2% | +30% | −4,7% | 3,6 | 1,29 → 1,76 | +23% | 0,04 |
> | 2735 | ADX + IFR + Pôr do sol + Rompe 200 | **+162% · −31,4%** | +45% · −7,9% | +29% | −4,7% | 3,4 | 1,21 → 1,83 | +20% | 0,08 |
> | 2736 | ADX + GPS médias + IFR + MACD + Onda | **+272% · −48,6%** | +60% · −10,2% | +37% | −8,4% | 2,8 | 0,96 → 1,63 | +30% | 0,29 |
> | 2737 | Donchian + GPS médias + Bollinger + Tendência + Onda | **+343% · −49,9%** | +65% · −9,7% | +37% | −7,2% | 3,4 | 1,36 → 1,47 | +29% | 0,32 |
> | 2738 | VWAP + Donchian + BB explosão + IFR + 1ª vela 80 ⚠️ | **+233% · −52,1%** | +54% · −11,5% | +33% | −11,2% | 1,8 | 1,18 → 1,44 | +20% | 0,33 |
> | 2739 | ADX + IFR + MACD + Pôr do sol | **+191% · −35,9%** | +51% · −8,4% | +32% | −5,8% | 3,4 | 1,00 → 1,85 | +20% | 0,13 |
> | 2740 | ADX + VWAP + GPS médias + Quinta + Tendência ⚠️ | **+220% · −59,2%** | +52% · −13,5% | +33% | −6,3% | 3,1 | 1,36 → 1,34 | +22% | 0,15 |
> | 2741 | ADX + Donchian + 1ª vela 80 + Tendência ⚠️ | **+301% · −53,7%** | +71% · −14,2% | +41% | −7,4% | 3,8 | 1,41 → 1,73 | +28% | 0,24 |
> | 2742 | ADX + IFR + 1ª vela 80 + Onda ⚠️ | **+232% · −39,3%** | +59% · −9,7% | +37% | −6,8% | 3,5 | 0,76 → 1,91 | +24% | 0,18 |
> | 2743 | VWAP + GPS médias + Quinta + Pullback + Onda ⚠️ | **+146% · −39,0%** | +38% · −8,0% | +27% | −10,4% | 1,3 | 1,11 → 1,13 | +24% | 0,02 |
> | 2744 | ADX + GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+222% · −41,2%** | +47% · −8,2% | +27% | −4,2% | 3,4 | 1,49 → 1,54 | +22% | 0,14 |
> | 2745 | ADX + Donchian + MACD + 1ª vela 80 + Quinta ⚠️ | **+267% · −39,9%** | +53% · −7,0% | +33% | −5,5% | 3,6 | 1,14 → 1,78 | +22% | 0,09 |
> | 2746 | ADX + GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+311% · −48,8%** | +61% · −9,6% | +37% | −7,7% | 3,1 | 1,21 → 1,74 | +30% | 0,28 |
> | 2747 | VWAP + Donchian + MACD + 1ª vela 80 + Tendência ⚠️ | **+261% · −50,6%** | +54% · −11,5% | +35% | −11,1% | 2,0 | 1,25 → 1,40 | +25% | 0,38 |
> | 2748 | GPS médias + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+241% · −45,3%** | +51% · −9,6% | +33% | −7,6% | 2,7 | 1,23 → 1,45 | +26% | 0,22 |
> | 2749 | ADX + Donchian + Rompe 200 + Onda | **+194% · −40,3%** | +55% · −9,1% | +32% | −6,9% | 2,8 | 0,86 → 1,53 | +24% | 0,16 |
> | 2750 | BB explosão + 1ª vela 80 + Rompe 200 + Bollinger + Tendência ⚠️ | **+236% · −47,1%** | +48% · −9,7% | +30% | −6,0% | 2,9 | 1,54 → 1,54 | +19% | 0,22 |
> | 2751 | ADX + GPS médias + MACD + Pullback | **+203% · −44,5%** | +55% · −11,7% | +33% | −6,6% | 3,2 | 1,40 → 1,50 | +27% | 0,11 |
> | 2752 | Donchian + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+186% · −33,1%** | +48% · −8,0% | +31% | −9,0% | 2,0 | 1,24 → 1,52 | +25% | 0,23 |
> | 2753 | GPS médias + MACD + Rompe 200 | **+110% · −30,5%** | +44% · −10,3% | +28% | −11,3% | 1,4 | 1,27 → 1,10 | +23% | 0,20 |
> | 2754 | VWAP + GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+158% · −40,1%** | +38% · −8,2% | +24% | −9,1% | 1,2 | 1,40 → 1,09 | +18% | 0,12 |
> | 2755 | ADX + GPS médias + Quinta + Tendência + Onda ⚠️ | **+249% · −53,9%** | +56% · −10,6% | +35% | −7,2% | 3,0 | 1,17 → 1,52 | +30% | 0,11 |
> | 2756 | Donchian + Rompe 200 + Bollinger + Onda | **+198% · −29,0%** | +50% · −6,9% | +29% | −7,7% | 2,1 | 1,05 → 1,51 | +27% | 0,18 |
> | 2757 | ADX + GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+188% · −43,5%** | +45% · −8,7% | +28% | −5,6% | 2,8 | 1,24 → 1,45 | +25% | 0,09 |
> | 2758 | Donchian + GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+248% · −43,8%** | +53% · −8,8% | +32% | −8,4% | 2,3 | 1,14 → 1,50 | +28% | 0,04 |
> | 2759 | ADX + GPS médias + Pullback + Rompe 200 | **+173% · −44,2%** | +49% · −11,7% | +30% | −5,0% | 3,4 | 1,59 → 1,35 | +20% | 0,12 |
> | 2760 | GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+164% · −34,9%** | +45% · −8,8% | +29% | −9,8% | 1,7 | 1,21 → 1,50 | +22% | 0,10 |

> [!example]- Combinações 2761 a 2790 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2761 | Donchian + GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+316% · −49,4%** | +64% · −10,4% | +39% | −7,7% | 3,4 | 1,28 → 1,50 | +32% | 0,29 |
> | 2762 | Donchian + Pôr do sol + Rompe 200 | **+104% · −24,6%** | +40% · −7,7% | +25% | −4,2% | 2,9 | 1,55 → 1,23 | +17% | 0,01 |
> | 2763 | VWAP + GPS médias + Pôr do sol + Quinta ⚠️ | **+98% · −32,4%** | +33% · −8,0% | +23% | −9,2% | 1,1 | 1,28 → 0,95 | +18% | −0,04 |
> | 2764 | VWAP + GPS médias + MACD + Pullback + Onda | **+169% · −45,0%** | +43% · −9,8% | +30% | −13,3% | 1,3 | 1,00 → 1,21 | +26% | 0,20 |
> | 2765 | Donchian + GPS médias + MACD + Quinta + Bollinger ⚠️ | **+277% · −41,9%** | +53% · −8,9% | +31% | −8,2% | 2,2 | 1,54 → 1,45 | +23% | 0,16 |
> | 2766 | ADX + Donchian + IFR + Pullback | **+282% · −41,4%** | +66% · −9,9% | +38% | −5,0% | 5,0 | 1,64 → 1,83 | +23% | 0,14 |
> | 2767 | Donchian + GPS médias + Pôr do sol + Bollinger | **+234% · −35,4%** | +57% · −9,3% | +30% | −6,3% | 2,8 | 1,69 → 1,45 | +21% | 0,07 |
> | 2768 | BB explosão + IFR + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+196% · −38,1%** | +45% · −7,8% | +30% | −8,5% | 2,1 | 0,92 → 1,61 | +22% | 0,21 |
> | 2769 | BB explosão + MACD + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+266% · −51,9%** | +52% · −10,5% | +33% | −7,6% | 2,7 | 1,34 → 1,58 | +24% | 0,31 |
> | 2770 | ADX + VWAP + IFR + 1ª vela 80 ⚠️ | **+203% · −37,6%** | +54% · −9,2% | +34% | −7,7% | 2,8 | 0,95 → 1,74 | +18% | 0,22 |
> | 2771 | Donchian + BB explosão + MACD + Pullback + Tendência | **+245% · −65,5%** | +55% · −15,9% | +35% | −7,2% | 3,1 | 1,54 → 1,34 | +18% | 0,31 |
> | 2772 | GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+133% · −34,6%** | +39% · −8,6% | +26% | −6,5% | 2,0 | 1,50 → 1,34 | +22% | 0,02 |
> | 2773 | BB explosão + IFR + MACD + Bollinger + Tendência | **+290% · −54,1%** | +56% · −11,1% | +35% | −8,3% | 2,7 | 1,44 → 1,56 | +23% | 0,40 |
> | 2774 | VWAP + MACD + Pullback | **+77% · −25,5%** | +33% · −8,6% | +26% | −13,5% | 1,0 | 1,09 → 1,03 | +16% | 0,15 |
> | 2775 | BB explosão + MACD + Pôr do sol + Pullback | **+105% · −35,8%** | +34% · −8,4% | +25% | −5,9% | 2,1 | 1,31 → 1,32 | +18% | −0,05 |
> | 2776 | Donchian + GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+271% · −48,9%** | +58% · −10,4% | +35% | −11,5% | 1,9 | 1,03 → 1,50 | +29% | 0,30 |
> | 2777 | ADX + IFR + Pôr do sol + Pullback | **+189% · −33,5%** | +49% · −7,7% | +31% | −4,8% | 3,8 | 1,60 → 1,98 | +18% | −0,01 |
> | 2778 | VWAP + MACD + 1ª vela 80 + Quinta ⚠️ | **+104% · −34,0%** | +33% · −8,4% | +26% | −13,0% | 1,0 | 0,80 → 1,36 | +18% | 0,08 |
> | 2779 | ADX + GPS médias + MACD + Pullback + Onda | **+233% · −46,9%** | +53% · −9,6% | +33% | −7,3% | 2,8 | 1,05 → 1,53 | +28% | 0,14 |
> | 2780 | ADX + Donchian + Pôr do sol + Quinta + Bollinger ⚠️ | **+258% · −35,7%** | +50% · −6,5% | +28% | −3,4% | 4,5 | 1,45 → 1,90 | +19% | 0,06 |
> | 2781 | VWAP + Pôr do sol + Tendência + Onda | **+126% · −34,4%** | +40% · −8,1% | +29% | −9,5% | 1,7 | 0,85 → 1,25 | +23% | 0,15 |
> | 2782 | ADX + VWAP + GPS médias + IFR + Rompe 200 | **+219% · −53,1%** | +52% · −11,2% | +31% | −8,0% | 2,3 | 1,24 → 1,40 | +22% | 0,26 |
> | 2783 | ADX + Donchian + 1ª vela 80 + Bollinger + Onda ⚠️ | **+338% · −43,9%** | +62% · −8,3% | +34% | −5,7% | 3,8 | 0,93 → 1,86 | +24% | 0,21 |
> | 2784 | VWAP + BB explosão + IFR + Tendência + Onda | **+197% · −57,7%** | +50% · −12,8% | +34% | −9,9% | 2,2 | 1,01 → 1,35 | +24% | 0,35 |
> | 2785 | ADX + IFR + Pôr do sol + Quinta ⚠️ | **+161% · −30,5%** | +44% · −7,6% | +29% | −4,8% | 3,3 | 1,24 → 1,99 | +17% | 0,07 |
> | 2786 | GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+229% · −38,1%** | +58% · −9,9% | +36% | −9,9% | 2,4 | 1,05 → 1,64 | +26% | 0,24 |
> | 2787 | VWAP + GPS médias + IFR + 1ª vela 80 ⚠️ | **+200% · −43,1%** | +53% · −11,8% | +34% | −12,5% | 1,7 | 1,28 → 1,44 | +25% | 0,26 |
> | 2788 | MACD + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+141% · −31,1%** | +35% · −5,2% | +26% | −8,2% | 1,6 | 0,65 → 1,61 | +15% | 0,11 |
> | 2789 | Pôr do sol + Quinta + Onda ⚠️ | **+57% · −16,3%** | +27% · −4,3% | +22% | −5,2% | 1,7 | 0,39 → 1,40 | +14% | −0,09 |
> | 2790 | VWAP + GPS médias + IFR + Bollinger + Onda | **+252% · −46,9%** | +52% · −10,5% | +32% | −10,9% | 1,7 | 1,05 → 1,44 | +27% | 0,29 |

> [!example]- Combinações 2791 a 2820 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2791 | ADX + GPS médias + MACD + Tendência | **+244% · −57,6%** | +65% · −15,8% | +39% | −9,3% | 2,8 | 1,34 → 1,48 | +30% | 0,35 |
> | 2792 | ADX + Donchian + MACD + Pôr do sol + Pullback | **+250% · −43,1%** | +51% · −7,4% | +31% | −4,4% | 4,1 | 1,41 → 1,70 | +20% | 0,03 |
> | 2793 | GPS médias + Tendência | **+137% · −37,9%** | +72% · −19,5% | +43% | −9,3% | 3,2 | 1,69 → 1,18 | +22% | 0,38 |
> | 2794 | GPS médias + MACD + Rompe 200 + Bollinger + Onda | **+214% · −40,9%** | +46% · −8,6% | +29% | −9,6% | 1,7 | 1,01 → 1,42 | +22% | 0,23 |
> | 2795 | Donchian + GPS médias + IFR + Onda | **+256% · −41,7%** | +67% · −11,3% | +38% | −9,6% | 2,7 | 1,20 → 1,48 | +32% | 0,35 |
> | 2796 | ADX + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+191% · −36,5%** | +49% · −8,5% | +28% | −4,1% | 3,8 | 0,94 → 2,07 | +19% | 0,14 |
> | 2797 | ADX + BB explosão + MACD + Rompe 200 + Tendência | **+207% · −67,0%** | +50% · −16,7% | +33% | −9,0% | 2,2 | 1,20 → 1,44 | +21% | 0,26 |
> | 2798 | VWAP + MACD + 1ª vela 80 + Bollinger ⚠️ | **+155% · −39,8%** | +42% · −10,4% | +28% | −14,5% | 1,0 | 0,87 → 1,49 | +20% | 0,38 |
> | 2799 | ADX + VWAP + Donchian + IFR + 1ª vela 80 ⚠️ | **+302% · −46,3%** | +61% · −10,1% | +36% | −7,5% | 3,0 | 1,16 → 1,70 | +21% | 0,25 |
> | 2800 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+108% · −36,2%** | +30% · −7,2% | +22% | −4,7% | 2,0 | 1,21 → 1,47 | +18% | −0,01 |
> | 2801 | ADX + GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+310% · −55,7%** | +62% · −11,0% | +38% | −7,6% | 3,3 | 1,33 → 1,61 | +31% | 0,28 |
> | 2802 | ADX + Donchian + GPS médias + Rompe 200 | **+221% · −52,7%** | +62% · −14,4% | +34% | −5,6% | 3,7 | 1,39 → 1,38 | +22% | 0,25 |
> | 2803 | ADX + Donchian + BB explosão + IFR + Rompe 200 | **+250% · −60,7%** | +58% · −14,4% | +33% | −5,8% | 3,6 | 1,28 → 1,56 | +19% | 0,31 |
> | 2804 | BB explosão + 1ª vela 80 + Quinta + Pullback + Onda ⚠️ | **+150% · −36,8%** | +37% · −7,2% | +27% | −6,9% | 2,0 | 1,00 → 1,52 | +20% | −0,05 |
> | 2805 | VWAP + GPS médias + Quinta + Tendência + Onda ⚠️ | **+183% · −46,8%** | +46% · −9,3% | +31% | −9,6% | 1,9 | 1,12 → 1,22 | +26% | 0,10 |
> | 2806 | ADX + MACD + Pullback + Rompe 200 | **+145% · −36,2%** | +42% · −8,4% | +28% | −6,0% | 2,6 | 1,27 → 1,56 | +21% | 0,03 |
> | 2807 | ADX + Donchian + GPS médias + Quinta + Onda ⚠️ | **+249% · −49,3%** | +58% · −9,7% | +33% | −6,1% | 3,3 | 1,08 → 1,50 | +28% | 0,09 |
> | 2808 | BB explosão + Pôr do sol + Quinta + Tendência ⚠️ | **+120% · −46,9%** | +38% · −12,0% | +27% | −4,7% | 3,0 | 1,54 → 1,29 | +16% | 0,04 |
> | 2809 | ADX + VWAP + Quinta + Pullback + Bollinger ⚠️ | **+184% · −36,8%** | +41% · −6,2% | +26% | −4,5% | 2,9 | 1,38 → 1,55 | +15% | 0,11 |
> | 2810 | VWAP + Donchian + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+167% · −46,8%** | +39% · −10,3% | +26% | −8,8% | 1,5 | 1,26 → 1,32 | +18% | 0,07 |
> | 2811 | VWAP + Donchian + 1ª vela 80 + Bollinger + Onda ⚠️ | **+256% · −44,2%** | +51% · −9,3% | +31% | −11,9% | 1,5 | 0,89 → 1,54 | +23% | 0,29 |
> | 2812 | Donchian + BB explosão + Pullback + Bollinger + Tendência | **+294% · −62,2%** | +57% · −14,4% | +34% | −5,5% | 3,8 | 1,78 → 1,43 | +15% | 0,26 |
> | 2813 | ADX + Donchian + BB explosão + Bollinger + Tendência | **+320% · −72,0%** | +66% · −18,9% | +36% | −7,3% | 3,3 | 1,42 → 1,56 | +20% | 0,39 |
> | 2814 | BB explosão + Pôr do sol + Pullback + Rompe 200 | **+80% · −34,0%** | +29% · −8,2% | +22% | −4,2% | 2,1 | 1,58 → 0,99 | +12% | −0,03 |
> | 2815 | BB explosão + 1ª vela 80 + Quinta + Tendência + Onda ⚠️ | **+193% · −47,7%** | +45% · −9,1% | +31% | −6,6% | 2,8 | 1,03 → 1,52 | +22% | 0,05 |
> | 2816 | ADX + GPS médias + MACD + Quinta + Bollinger ⚠️ | **+254% · −42,9%** | +52% · −8,3% | +30% | −5,6% | 3,1 | 1,29 → 1,63 | +26% | 0,18 |
> | 2817 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+218% · −38,1%** | +56% · −9,2% | +32% | −7,6% | 2,5 | 1,50 → 1,49 | +25% | 0,08 |
> | 2818 | ADX + BB explosão + 1ª vela 80 + Quinta + Pullback ⚠️ | **+186% · −48,9%** | +44% · −9,5% | +28% | −4,2% | 3,7 | 1,31 → 1,69 | +21% | −0,02 |
> | 2819 | ADX + Donchian + MACD + 1ª vela 80 + Onda ⚠️ | **+282% · −45,6%** | +59% · −8,3% | +36% | −7,9% | 2,9 | 0,82 → 1,73 | +25% | 0,24 |
> | 2820 | ADX + VWAP + Pullback + Rompe 200 + Tendência | **+196% · −52,4%** | +45% · −10,7% | +30% | −6,9% | 2,5 | 1,47 → 1,33 | +18% | 0,14 |

> [!example]- Combinações 2821 a 2850 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2821 | Donchian + GPS médias + MACD + Quinta + Onda ⚠️ | **+224% · −43,3%** | +51% · −9,1% | +32% | −9,4% | 2,0 | 1,07 → 1,38 | +30% | 0,12 |
> | 2822 | VWAP + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+97% · −26,6%** | +27% · −4,6% | +20% | −7,1% | 1,0 | 1,30 → 1,13 | +16% | 0,05 |
> | 2823 | BB explosão + MACD + Pullback + Tendência | **+165% · −56,0%** | +47% · −15,8% | +33% | −7,9% | 2,6 | 1,51 → 1,30 | +18% | 0,20 |
> | 2824 | ADX + VWAP + GPS médias + Pôr do sol + Tendência | **+223% · −58,4%** | +52% · −13,1% | +32% | −6,4% | 3,1 | 1,32 → 1,36 | +23% | 0,16 |
> | 2825 | VWAP + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+105% · −36,5%** | +34% · −9,2% | +26% | −14,3% | 0,9 | 0,81 → 1,26 | +21% | 0,25 |
> | 2826 | ADX + VWAP + GPS médias + IFR + MACD | **+242% · −54,6%** | +56% · −11,6% | +34% | −10,2% | 2,1 | 1,10 → 1,46 | +24% | 0,33 |
> | 2827 | VWAP + MACD + Pullback + Onda | **+109% · −34,0%** | +36% · −8,6% | +28% | −13,9% | 1,1 | 0,74 → 1,22 | +19% | 0,21 |
> | 2828 | ADX + Donchian + GPS médias + Pôr do sol + Onda | **+251% · −48,2%** | +58% · −9,8% | +33% | −6,1% | 3,4 | 1,03 → 1,52 | +27% | 0,10 |
> | 2829 | ADX + MACD + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+178% · −40,1%** | +41% · −7,4% | +27% | −5,3% | 2,7 | 0,89 → 1,79 | +20% | 0,07 |
> | 2830 | ADX + BB explosão + MACD + Quinta + Rompe 200 ⚠️ | **+146% · −53,2%** | +39% · −11,1% | +26% | −6,0% | 2,3 | 0,96 → 1,45 | +20% | 0,09 |
> | 2831 | BB explosão + MACD + 1ª vela 80 + Pullback ⚠️ | **+144% · −36,0%** | +42% · −9,0% | +29% | −9,1% | 1,8 | 1,27 → 1,50 | +22% | 0,03 |
> | 2832 | ADX + Donchian + MACD + Pôr do sol + Bollinger | **+292% · −42,2%** | +55% · −7,2% | +31% | −4,6% | 3,9 | 1,20 → 1,80 | +21% | 0,15 |
> | 2833 | BB explosão + GPS médias + IFR + MACD + Tendência | **+254% · −64,2%** | +59% · −15,5% | +37% | −9,0% | 2,7 | 1,43 → 1,37 | +23% | 0,44 |
> | 2834 | VWAP + Donchian + Quinta + Tendência + Onda ⚠️ | **+205% · −46,4%** | +48% · −9,6% | +32% | −8,3% | 2,3 | 1,09 → 1,30 | +25% | 0,15 |
> | 2835 | Donchian + GPS médias + Pôr do sol + Onda | **+190% · −39,8%** | +54% · −10,6% | +32% | −8,4% | 2,2 | 1,08 → 1,34 | +26% | 0,07 |
> | 2836 | Tendência + Onda | **+105% · −26,5%** | +57% · −13,1% | +40% | −13,7% | 2,0 | 0,88 → 1,37 | +28% | 0,32 |
> | 2837 | ADX + GPS médias + Pôr do sol + Tendência + Onda | **+251% · −52,4%** | +56% · −10,2% | +35% | −7,2% | 3,0 | 1,13 → 1,54 | +30% | 0,13 |
> | 2838 | ADX + GPS médias + MACD + Pôr do sol + Rompe 200 | **+191% · −42,3%** | +45% · −8,2% | +28% | −5,6% | 2,7 | 1,18 → 1,47 | +26% | 0,08 |
> | 2839 | VWAP + Donchian + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+221% · −49,8%** | +49% · −10,7% | +30% | −11,2% | 1,5 | 1,30 → 1,31 | +22% | 0,15 |
> | 2840 | ADX + Pôr do sol + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+146% · −34,2%** | +36% · −5,8% | +24% | −3,3% | 3,5 | 1,01 → 1,85 | +19% | 0,02 |
> | 2841 | VWAP + GPS médias + MACD + Pôr do sol + Bollinger | **+186% · −45,7%** | +42% · −9,9% | +26% | −11,9% | 1,2 | 1,17 → 1,26 | +23% | 0,19 |
> | 2842 | GPS médias + 1ª vela 80 + Tendência ⚠️ | **+194% · −39,7%** | +65% · −14,0% | +40% | −6,8% | 3,9 | 1,61 → 1,44 | +28% | 0,21 |
> | 2843 | ADX + MACD + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+177% · −38,0%** | +40% · −6,8% | +27% | −4,5% | 3,2 | 0,89 → 1,89 | +19% | 0,04 |
> | 2844 | BB explosão + IFR + Quinta + Bollinger ⚠️ | **+169% · −30,9%** | +45% · −7,7% | +28% | −5,1% | 3,0 | 1,51 → 1,68 | +18% | 0,12 |
> | 2845 | GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+189% · −34,9%** | +48% · −8,4% | +28% | −6,6% | 2,3 | 1,60 → 1,62 | +21% | 0,05 |
> | 2846 | Donchian + GPS médias + MACD + Quinta + Tendência ⚠️ | **+275% · −52,2%** | +57% · −10,8% | +35% | −6,8% | 3,3 | 1,59 → 1,35 | +23% | 0,22 |
> | 2847 | ADX + Donchian + 1ª vela 80 + Quinta + Onda ⚠️ | **+256% · −44,7%** | +54% · −8,1% | +33% | −5,2% | 3,8 | 0,89 → 1,77 | +23% | 0,03 |
> | 2848 | BB explosão + Pullback + Tendência | **+128% · −52,5%** | +49% · −19,6% | +34% | −7,1% | 2,9 | 1,70 → 1,20 | +12% | 0,18 |
> | 2849 | Donchian + BB explosão + Pôr do sol + Pullback + Tendência | **+226% · −60,4%** | +50% · −13,7% | +32% | −4,7% | 4,1 | 1,72 → 1,34 | +15% | 0,13 |
> | 2850 | VWAP + GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+283% · −50,2%** | +55% · −11,1% | +33% | −9,9% | 2,0 | 1,48 → 1,42 | +23% | 0,30 |

> [!example]- Combinações 2851 a 2880 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2851 | MACD + Pôr do sol | **+49% · −11,2%** | +30% · −5,4% | +24% | −7,5% | 1,5 | 0,65 → 1,38 | +19% | −0,04 |
> | 2852 | ADX + 1ª vela 80 + Tendência ⚠️ | **+195% · −42,0%** | +66% · −13,6% | +40% | −9,0% | 3,1 | 1,24 → 1,76 | +30% | 0,17 |
> | 2853 | VWAP + IFR + MACD + Onda | **+149% · −35,0%** | +44% · −8,7% | +32% | −12,7% | 1,5 | 0,67 → 1,41 | +21% | 0,33 |
> | 2854 | VWAP + Donchian + GPS médias + Pullback + Onda | **+210% · −48,7%** | +51% · −10,6% | +32% | −11,7% | 1,6 | 1,18 → 1,20 | +24% | 0,22 |
> | 2855 | BB explosão + Pullback + Rompe 200 + Tendência + Onda | **+170% · −53,0%** | +42% · −11,3% | +30% | −7,3% | 2,3 | 1,26 → 1,27 | +21% | 0,19 |
> | 2856 | ADX + BB explosão + Pôr do sol + Bollinger + Tendência | **+253% · −62,8%** | +53% · −14,5% | +31% | −6,1% | 3,0 | 1,37 → 1,64 | +21% | 0,19 |
> | 2857 | BB explosão + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+117% · −41,1%** | +36% · −11,0% | +26% | −6,5% | 2,0 | 1,45 → 1,36 | +15% | 0,04 |
> | 2858 | Donchian + GPS médias + IFR + Tendência | **+311% · −53,1%** | +75% · −14,3% | +43% | −7,3% | 4,1 | 1,73 → 1,45 | +23% | 0,47 |
> | 2859 | VWAP + GPS médias + Pôr do sol + Pullback + Onda | **+148% · −39,0%** | +38% · −8,0% | +27% | −10,5% | 1,3 | 1,06 → 1,15 | +23% | 0,05 |
> | 2860 | GPS médias + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+320% · −46,3%** | +58% · −9,5% | +35% | −7,0% | 3,2 | 1,26 → 1,61 | +26% | 0,25 |
> | 2861 | Donchian + GPS médias + Quinta + Bollinger ⚠️ | **+231% · −34,7%** | +56% · −9,3% | +30% | −6,4% | 2,8 | 1,76 → 1,41 | +20% | 0,08 |
> | 2862 | ADX + BB explosão + Pôr do sol + Quinta + Bollinger ⚠️ | **+176% · −49,2%** | +41% · −9,2% | +25% | −4,1% | 2,9 | 1,11 → 1,69 | +20% | 0,09 |
> | 2863 | BB explosão + IFR + Bollinger + Tendência | **+247% · −50,2%** | +60% · −13,0% | +36% | −7,7% | 3,0 | 1,62 → 1,59 | +20% | 0,38 |
> | 2864 | VWAP + Donchian + 1ª vela 80 + Tendência ⚠️ | **+222% · −49,5%** | +58% · −13,9% | +36% | −9,7% | 2,4 | 1,35 → 1,38 | +22% | 0,32 |
> | 2865 | Donchian + Pôr do sol + Rompe 200 + Onda | **+140% · −29,7%** | +41% · −7,3% | +27% | −6,7% | 2,1 | 0,93 → 1,37 | +24% | 0,07 |
> | 2866 | MACD + Pôr do sol + Quinta + Onda ⚠️ | **+90% · −22,6%** | +30% · −5,2% | +24% | −6,2% | 1,8 | 0,51 → 1,53 | +16% | −0,02 |
> | 2867 | ADX + Donchian + MACD + Quinta + Bollinger ⚠️ | **+289% · −43,3%** | +54% · −7,0% | +31% | −4,8% | 3,8 | 1,26 → 1,77 | +21% | 0,17 |
> | 2868 | VWAP + 1ª vela 80 + Pullback ⚠️ | **+88% · −32,7%** | +36% · −11,2% | +27% | −12,0% | 1,2 | 1,19 → 1,25 | +17% | 0,05 |
> | 2869 | ADX + Pullback + Rompe 200 + Onda | **+139% · −33,3%** | +42% · −8,3% | +28% | −7,1% | 2,2 | 0,90 → 1,49 | +22% | 0,09 |
> | 2870 | VWAP + Donchian + MACD + 1ª vela 80 + Quinta ⚠️ | **+194% · −41,0%** | +43% · −8,3% | +29% | −11,6% | 1,4 | 1,09 → 1,41 | +21% | 0,13 |
> | 2871 | ADX + VWAP + GPS médias + IFR + Quinta ⚠️ | **+221% · −50,1%** | +51% · −10,1% | +31% | −7,1% | 2,6 | 1,25 → 1,47 | +22% | 0,14 |
> | 2872 | VWAP + Donchian + Pôr do sol + Rompe 200 | **+115% · −38,9%** | +37% · −10,1% | +24% | −9,0% | 1,3 | 1,20 → 1,00 | +15% | 0,09 |
> | 2873 | ADX + Donchian + Pullback + Rompe 200 | **+200% · −39,9%** | +53% · −9,2% | +31% | −4,6% | 3,9 | 1,59 → 1,54 | +19% | 0,09 |
> | 2874 | VWAP + Donchian + Pôr do sol + Pullback | **+135% · −36,3%** | +40% · −9,2% | +26% | −7,4% | 1,8 | 1,47 → 1,12 | +15% | 0,03 |
> | 2875 | ADX + GPS médias + Bollinger + Tendência | **+290% · −53,5%** | +69% · −13,8% | +38% | −7,3% | 3,4 | 1,57 → 1,59 | +26% | 0,36 |
> | 2876 | ADX + Donchian + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+255% · −43,5%** | +54% · −8,4% | +33% | −6,3% | 3,2 | 0,90 → 1,69 | +25% | 0,17 |
> | 2877 | ADX + Donchian + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+270% · −42,1%** | +54% · −6,9% | +32% | −5,3% | 3,7 | 1,08 → 1,80 | +22% | 0,13 |
> | 2878 | Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+64% · −15,3%** | +29% · −3,6% | +22% | −3,1% | 3,0 | 0,99 → 1,80 | +15% | −0,01 |
> | 2879 | VWAP + IFR + MACD | **+115% · −29,5%** | +44% · −9,7% | +32% | −13,9% | 1,4 | 0,90 → 1,32 | +19% | 0,37 |
> | 2880 | GPS médias + Pullback + Bollinger + Onda | **+197% · −36,3%** | +50% · −8,3% | +30% | −7,7% | 2,3 | 1,29 → 1,45 | +25% | 0,12 |

> [!example]- Combinações 2881 a 2910 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2881 | BB explosão + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+160% · −48,0%** | +46% · −13,0% | +31% | −6,9% | 2,6 | 1,41 → 1,39 | +18% | 0,19 |
> | 2882 | ADX + Donchian + BB explosão + Pullback + Tendência | **+276% · −73,1%** | +62% · −19,6% | +36% | −6,9% | 3,4 | 1,56 → 1,48 | +18% | 0,27 |
> | 2883 | ADX + Donchian + Pullback + Tendência | **+279% · −57,2%** | +67% · −15,9% | +39% | −6,7% | 3,9 | 1,71 → 1,60 | +22% | 0,19 |
> | 2884 | Donchian + GPS médias + MACD + Bollinger + Tendência | **+354% · −53,1%** | +65% · −10,2% | +37% | −7,7% | 3,1 | 1,60 → 1,43 | +24% | 0,40 |
> | 2885 | BB explosão + 1ª vela 80 + Pullback + Tendência + Onda ⚠️ | **+218% · −50,6%** | +48% · −9,9% | +33% | −6,7% | 3,0 | 1,21 → 1,51 | +26% | 0,13 |
> | 2886 | Donchian + 1ª vela 80 + Tendência ⚠️ | **+219% · −37,5%** | +70% · −13,2% | +41% | −7,3% | 3,9 | 1,59 → 1,57 | +26% | 0,26 |
> | 2887 | ADX + Donchian + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+266% · −40,1%** | +54% · −7,3% | +33% | −6,1% | 3,3 | 1,13 → 1,70 | +25% | 0,19 |
> | 2888 | ADX + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+153% · −33,0%** | +37% · −6,3% | +26% | −4,8% | 2,8 | 0,95 → 1,69 | +18% | −0,02 |
> | 2889 | Donchian + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+188% · −30,9%** | +48% · −6,6% | +31% | −7,9% | 2,3 | 1,19 → 1,65 | +24% | 0,14 |
> | 2890 | Rompe 200 + Bollinger + Onda | **+99% · −20,2%** | +38% · −6,5% | +25% | −8,5% | 1,4 | 0,64 → 1,44 | +16% | 0,14 |
> | 2891 | Donchian + MACD + Pôr do sol + Quinta ⚠️ | **+141% · −24,7%** | +40% · −5,9% | +27% | −5,1% | 2,7 | 1,30 → 1,50 | +21% | 0,04 |
> | 2892 | ADX + GPS médias + Pullback + Bollinger + Onda | **+277% · −45,9%** | +55% · −9,1% | +32% | −5,7% | 3,4 | 1,20 → 1,62 | +27% | 0,17 |
> | 2893 | MACD + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+140% · −29,5%** | +34% · −5,0% | +26% | −7,1% | 1,9 | 0,63 → 1,72 | +15% | 0,02 |
> | 2894 | VWAP + IFR + Pôr do sol + Onda | **+127% · −29,9%** | +39% · −6,3% | +28% | −9,3% | 1,6 | 0,70 → 1,43 | +18% | 0,09 |
> | 2895 | ADX + BB explosão + Quinta + Pullback + Rompe 200 ⚠️ | **+143% · −51,7%** | +38% · −10,3% | +25% | −5,0% | 2,5 | 1,43 → 1,38 | +15% | 0,05 |
> | 2896 | VWAP + Donchian + GPS médias + Quinta + Bollinger ⚠️ | **+235% · −45,3%** | +50% · −9,9% | +29% | −9,6% | 1,6 | 1,47 → 1,22 | +18% | 0,15 |
> | 2897 | ADX + Tendência + Onda | **+173% · −48,4%** | +63% · −16,3% | +40% | −11,8% | 2,3 | 0,87 → 1,59 | +30% | 0,24 |
> | 2898 | ADX + VWAP + IFR + Bollinger | **+220% · −38,8%** | +55% · −9,6% | +32% | −6,3% | 3,1 | 1,07 → 1,70 | +17% | 0,32 |
> | 2899 | ADX + Donchian + GPS médias + Quinta ⚠️ | **+222% · −49,7%** | +62% · −13,1% | +34% | −5,0% | 4,1 | 1,41 → 1,46 | +23% | 0,12 |
> | 2900 | VWAP + GPS médias + Pôr do sol + Tendência + Onda | **+186% · −45,2%** | +46% · −8,7% | +31% | −9,8% | 1,8 | 1,08 → 1,23 | +26% | 0,15 |
> | 2901 | VWAP + BB explosão + IFR + Quinta + Onda ⚠️ | **+144% · −43,6%** | +39% · −8,6% | +28% | −10,2% | 1,5 | 0,80 → 1,33 | +22% | 0,09 |
> | 2902 | ADX + Donchian + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+189% · −37,7%** | +43% · −5,9% | +26% | −3,9% | 3,5 | 1,38 → 1,63 | +19% | 0,02 |
> | 2903 | BB explosão + IFR + 1ª vela 80 + Bollinger ⚠️ | **+222% · −36,0%** | +54% · −9,3% | +32% | −7,4% | 2,6 | 1,35 → 1,84 | +23% | 0,24 |
> | 2904 | BB explosão + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+152% · −36,1%** | +38% · −7,0% | +27% | −7,0% | 2,0 | 0,94 → 1,54 | +20% | −0,00 |
> | 2905 | BB explosão + GPS médias + IFR + 1ª vela 80 + Tendência ⚠️ | **+287% · −57,7%** | +61% · −12,8% | +38% | −7,6% | 3,3 | 1,55 → 1,50 | +23% | 0,33 |
> | 2906 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+239% · −40,9%** | +49% · −6,5% | +29% | −4,4% | 3,8 | 1,24 → 1,79 | +22% | 0,07 |
> | 2907 | ADX + Donchian + MACD + Pôr do sol + Rompe 200 | **+218% · −39,4%** | +48% · −6,7% | +29% | −5,1% | 3,2 | 1,15 → 1,60 | +21% | 0,09 |
> | 2908 | VWAP + BB explosão + Pullback + Rompe 200 + Tendência | **+143% · −64,4%** | +39% · −13,6% | +28% | −8,1% | 1,9 | 1,47 → 1,02 | +12% | 0,21 |
> | 2909 | ADX + GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+367% · −51,9%** | +65% · −11,2% | +37% | −6,1% | 3,9 | 1,52 → 1,73 | +29% | 0,29 |
> | 2910 | VWAP + MACD + Tendência + Onda | **+147% · −39,6%** | +45% · −10,0% | +33% | −13,1% | 1,5 | 0,80 → 1,27 | +26% | 0,40 |

> [!example]- Combinações 2911 a 2940 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2911 | ADX + GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+225% · −41,1%** | +47% · −8,6% | +27% | −3,7% | 3,9 | 1,41 → 1,57 | +23% | 0,11 |
> | 2912 | Donchian + Quinta + Rompe 200 ⚠️ | **+102% · −25,4%** | +40% · −8,1% | +25% | −4,2% | 2,9 | 1,67 → 1,19 | +15% | 0,02 |
> | 2913 | VWAP + GPS médias + Bollinger + Tendência | **+214% · −44,7%** | +56% · −11,5% | +33% | −9,8% | 2,1 | 1,50 → 1,21 | +20% | 0,36 |
> | 2914 | BB explosão + GPS médias + IFR + Quinta + Rompe 200 ⚠️ | **+172% · −50,4%** | +43% · −10,5% | +28% | −7,1% | 2,1 | 1,52 → 1,25 | +17% | 0,17 |
> | 2915 | Donchian + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+290% · −49,3%** | +70% · −13,6% | +40% | −7,1% | 3,9 | 1,64 → 1,46 | +25% | 0,31 |
> | 2916 | Donchian + BB explosão + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+243% · −45,1%** | +50% · −9,5% | +29% | −7,3% | 2,2 | 1,39 → 1,54 | +18% | 0,23 |
> | 2917 | VWAP + BB explosão + 1ª vela 80 + Quinta + Pullback ⚠️ | **+126% · −48,4%** | +34% · −10,8% | +25% | −9,3% | 1,3 | 1,26 → 1,25 | +16% | −0,01 |
> | 2918 | ADX + VWAP + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+204% · −40,6%** | +44% · −7,6% | +27% | −5,9% | 2,4 | 0,95 → 1,74 | +17% | 0,15 |
> | 2919 | ADX + GPS médias + IFR + Bollinger + Onda | **+327% · −47,9%** | +63% · −9,7% | +35% | −6,2% | 3,6 | 1,09 → 1,74 | +29% | 0,28 |
> | 2920 | Donchian + GPS médias + MACD + Tendência + Onda | **+282% · −54,4%** | +62% · −11,2% | +38% | −8,9% | 2,8 | 1,21 → 1,39 | +31% | 0,40 |
> | 2921 | GPS médias + Rompe 200 + Tendência + Onda | **+181% · −41,2%** | +51% · −10,1% | +33% | −8,6% | 2,4 | 1,23 → 1,27 | +27% | 0,25 |
> | 2922 | ADX + BB explosão + MACD + Pullback + Rompe 200 | **+170% · −56,3%** | +42% · −12,0% | +28% | −5,7% | 2,7 | 1,22 → 1,45 | +19% | 0,10 |
> | 2923 | ADX + Donchian + 1ª vela 80 + Pullback ⚠️ | **+252% · −44,3%** | +61% · −8,5% | +35% | −5,1% | 4,4 | 1,46 → 1,83 | +23% | 0,03 |
> | 2924 | BB explosão + MACD + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+133% · −36,5%** | +34% · −7,0% | +25% | −8,0% | 1,5 | 1,07 → 1,44 | +19% | 0,04 |
> | 2925 | Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+159% · −33,6%** | +43% · −8,3% | +27% | −4,6% | 3,1 | 1,45 → 1,62 | +22% | 0,07 |
> | 2926 | Donchian + Quinta + Rompe 200 + Onda ⚠️ | **+138% · −28,6%** | +41% · −6,9% | +27% | −6,8% | 2,1 | 0,99 → 1,35 | +25% | 0,02 |
> | 2927 | Donchian + GPS médias + Quinta + Tendência ⚠️ | **+237% · −48,6%** | +61% · −12,6% | +36% | −5,3% | 4,4 | 1,77 → 1,31 | +20% | 0,16 |
> | 2928 | VWAP + Donchian + IFR | **+164% · −32,6%** | +59% · −11,3% | +35% | −11,4% | 2,0 | 1,24 → 1,32 | +19% | 0,35 |
> | 2929 | ADX + GPS médias + MACD + Pôr do sol + Bollinger | **+257% · −42,7%** | +52% · −8,1% | +30% | −5,6% | 3,1 | 1,22 → 1,66 | +25% | 0,16 |
> | 2930 | ADX + VWAP + GPS médias + Pullback + Bollinger | **+245% · −47,7%** | +52% · −9,8% | +30% | −7,0% | 2,5 | 1,43 → 1,41 | +21% | 0,22 |
> | 2931 | VWAP + Donchian + GPS médias + Quinta + Tendência ⚠️ | **+233% · −57,3%** | +54% · −12,4% | +33% | −8,2% | 2,5 | 1,53 → 1,18 | +18% | 0,18 |
> | 2932 | GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+162% · −37,0%** | +45% · −9,5% | +30% | −10,9% | 1,5 | 1,25 → 1,38 | +23% | 0,21 |
> | 2933 | GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+180% · −35,8%** | +49% · −8,5% | +32% | −8,9% | 2,2 | 1,14 → 1,48 | +25% | 0,08 |
> | 2934 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+239% · −42,2%** | +49% · −6,5% | +29% | −3,6% | 4,6 | 1,25 → 1,90 | +20% | 0,01 |
> | 2935 | ADX + VWAP + Donchian + 1ª vela 80 + Tendência ⚠️ | **+295% · −59,9%** | +62% · −13,0% | +37% | −7,3% | 3,3 | 1,26 → 1,55 | +24% | 0,28 |
> | 2936 | Donchian + Quinta + Pullback ⚠️ | **+122% · −27,7%** | +45% · −7,9% | +28% | −3,1% | 5,0 | 2,08 → 1,43 | +15% | −0,07 |
> | 2937 | VWAP + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+80% · −26,9%** | +28% · −6,3% | +22% | −8,4% | 1,1 | 0,88 → 1,38 | +15% | 0,00 |
> | 2938 | VWAP + Donchian + MACD + Quinta + Tendência ⚠️ | **+210% · −49,8%** | +48% · −11,2% | +32% | −8,4% | 2,3 | 1,30 → 1,26 | +20% | 0,24 |
> | 2939 | ADX + Quinta + Pullback + Rompe 200 ⚠️ | **+114% · −29,8%** | +36% · −7,4% | +25% | −5,2% | 2,3 | 1,53 → 1,46 | +19% | 0,03 |
> | 2940 | ADX + Quinta + Rompe 200 + Onda ⚠️ | **+118% · −33,1%** | +38% · −7,9% | +26% | −6,5% | 2,0 | 0,61 → 1,51 | +19% | −0,01 |

> [!example]- Combinações 2941 a 2970 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2941 | ADX + VWAP + IFR + MACD + Quinta ⚠️ | **+197% · −41,4%** | +45% · −7,8% | +30% | −7,0% | 2,5 | 0,97 → 1,59 | +17% | 0,15 |
> | 2942 | ADX + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+191% · −39,4%** | +49% · −9,5% | +29% | −5,5% | 2,9 | 1,01 → 1,91 | +20% | 0,18 |
> | 2943 | VWAP + Donchian + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+216% · −54,8%** | +50% · −12,9% | +30% | −12,1% | 1,4 | 1,33 → 1,23 | +20% | 0,27 |
> | 2944 | Donchian + GPS médias + MACD + Bollinger + Onda | **+295% · −46,4%** | +59% · −10,2% | +34% | −10,2% | 2,0 | 1,10 → 1,47 | +31% | 0,31 |
> | 2945 | Donchian + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+215% · −39,7%** | +55% · −9,8% | +32% | −7,6% | 2,5 | 1,56 → 1,46 | +24% | 0,01 |
> | 2946 | ADX + BB explosão + IFR + Pullback | **+199% · −53,9%** | +55% · −14,1% | +34% | −5,7% | 3,6 | 1,41 → 1,68 | +20% | 0,15 |
> | 2947 | VWAP + GPS médias + Quinta + Rompe 200 ⚠️ | **+96% · −39,0%** | +33% · −10,2% | +23% | −10,4% | 1,0 | 1,31 → 0,81 | +15% | 0,04 |
> | 2948 | ADX + BB explosão + Rompe 200 + Bollinger + Tendência | **+248% · −63,9%** | +53% · −15,2% | +31% | −7,3% | 2,5 | 1,40 → 1,53 | +19% | 0,27 |
> | 2949 | ADX + GPS médias + Pôr do sol + Pullback + Onda | **+209% · −43,1%** | +48% · −8,5% | +30% | −5,5% | 3,1 | 1,12 → 1,53 | +25% | 0,02 |
> | 2950 | ADX + GPS médias + Rompe 200 + Tendência + Onda | **+246% · −54,9%** | +56% · −11,7% | +35% | −8,4% | 2,6 | 1,17 → 1,46 | +30% | 0,23 |
> | 2951 | Donchian + IFR + Tendência | **+244% · −38,7%** | +76% · −12,6% | +45% | −9,0% | 3,6 | 1,72 → 1,56 | +23% | 0,52 |
> | 2952 | Donchian + 1ª vela 80 + Quinta + Onda ⚠️ | **+182% · −37,6%** | +48% · −8,4% | +31% | −7,4% | 2,4 | 0,92 → 1,65 | +25% | −0,04 |
> | 2953 | Donchian + MACD + Quinta + Onda ⚠️ | **+164% · −32,9%** | +46% · −8,1% | +30% | −8,1% | 2,2 | 0,85 → 1,48 | +25% | 0,08 |
> | 2954 | ADX + BB explosão + MACD + Pôr do sol + Quinta ⚠️ | **+149% · −53,2%** | +39% · −10,6% | +26% | −4,9% | 2,7 | 0,90 → 1,56 | +20% | 0,04 |
> | 2955 | Donchian + MACD + Quinta + Tendência ⚠️ | **+209% · −43,4%** | +54% · −11,8% | +35% | −7,4% | 2,9 | 1,51 → 1,41 | +23% | 0,22 |
> | 2956 | ADX + VWAP + Pullback + Bollinger + Onda | **+210% · −41,2%** | +46% · −7,6% | +29% | −7,7% | 2,1 | 0,89 → 1,54 | +18% | 0,20 |
> | 2957 | VWAP + MACD + Quinta + Onda ⚠️ | **+91% · −33,5%** | +32% · −8,4% | +25% | −13,6% | 0,9 | 0,48 → 1,23 | +18% | 0,08 |
> | 2958 | VWAP + Donchian + GPS médias + MACD + Pôr do sol | **+197% · −47,4%** | +48% · −10,5% | +30% | −12,4% | 1,4 | 1,19 → 1,18 | +22% | 0,20 |
> | 2959 | Donchian + BB explosão + GPS médias + IFR + 1ª vela 80 ⚠️ | **+281% · −55,3%** | +63% · −12,2% | +36% | −9,8% | 2,4 | 1,42 → 1,48 | +22% | 0,36 |
> | 2960 | BB explosão + IFR + Bollinger + Tendência + Onda | **+286% · −50,9%** | +56% · −10,2% | +35% | −8,4% | 2,7 | 1,21 → 1,61 | +27% | 0,32 |
> | 2961 | ADX + MACD + Pullback + Onda | **+168% · −39,3%** | +48% · −8,7% | +32% | −8,0% | 2,4 | 0,81 → 1,64 | +22% | 0,09 |
> | 2962 | GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+135% · −34,2%** | +40% · −8,3% | +26% | −6,5% | 2,0 | 1,43 → 1,38 | +22% | 0,07 |
> | 2963 | ADX + Donchian + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+259% · −46,9%** | +54% · −8,2% | +32% | −5,1% | 3,9 | 0,85 → 1,79 | +22% | 0,09 |
> | 2964 | Donchian + MACD + Bollinger + Onda | **+228% · −33,4%** | +55% · −8,2% | +33% | −9,2% | 2,2 | 0,90 → 1,59 | +27% | 0,31 |
> | 2965 | BB explosão + GPS médias + IFR + Rompe 200 + Tendência | **+233% · −62,9%** | +55% · −15,2% | +34% | −7,1% | 3,0 | 1,61 → 1,31 | +18% | 0,37 |
> | 2966 | Donchian + GPS médias + Bollinger + Tendência | **+311% · −48,9%** | +71% · −11,9% | +38% | −6,3% | 4,1 | 1,77 → 1,41 | +21% | 0,37 |
> | 2967 | VWAP + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+156% · −45,8%** | +45% · −12,8% | +29% | −12,0% | 1,4 | 1,43 → 1,23 | +20% | 0,10 |
> | 2968 | BB explosão + MACD + 1ª vela 80 + Tendência + Onda ⚠️ | **+216% · −53,1%** | +50% · −10,8% | +34% | −9,2% | 2,3 | 0,93 → 1,50 | +22% | 0,29 |
> | 2969 | ADX + Donchian + 1ª vela 80 + Bollinger ⚠️ | **+295% · −38,3%** | +66% · −9,0% | +35% | −5,2% | 4,3 | 1,24 → 1,93 | +23% | 0,22 |
> | 2970 | ADX + VWAP + IFR + Quinta + Rompe 200 ⚠️ | **+171% · −37,1%** | +41% · −6,7% | +27% | −5,0% | 2,9 | 1,13 → 1,53 | +17% | 0,09 |

> [!example]- Combinações 2971 a 3000 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 2971 | ADX + VWAP + GPS médias + IFR + Bollinger | **+291% · −48,8%** | +59% · −10,3% | +33% | −8,0% | 2,6 | 1,28 → 1,56 | +24% | 0,34 |
> | 2972 | ADX + VWAP + GPS médias + Rompe 200 + Tendência | **+217% · −61,7%** | +53% · −14,6% | +33% | −7,7% | 2,6 | 1,34 → 1,27 | +20% | 0,25 |
> | 2973 | ADX + VWAP + IFR + MACD + Pullback | **+226% · −44,6%** | +49% · −8,0% | +32% | −6,5% | 3,0 | 1,20 → 1,59 | +18% | 0,16 |
> | 2974 | VWAP + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+127% · −31,4%** | +37% · −7,6% | +24% | −10,0% | 1,1 | 0,97 → 1,57 | +17% | 0,18 |
> | 2975 | Donchian + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+158% · −32,3%** | +42% · −6,4% | +27% | −3,4% | 4,2 | 1,50 → 1,80 | +21% | −0,04 |
> | 2976 | VWAP + Donchian + Pôr do sol + Pullback + Onda | **+169% · −40,0%** | +41% · −7,8% | +27% | −9,1% | 1,6 | 1,04 → 1,27 | +19% | 0,09 |
> | 2977 | VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+81% · −34,6%** | +29% · −8,8% | +22% | −10,1% | 0,9 | 0,88 → 1,21 | +18% | 0,11 |
> | 2978 | BB explosão + MACD + 1ª vela 80 + Pullback + Onda ⚠️ | **+178% · −39,5%** | +42% · −8,2% | +30% | −9,9% | 1,7 | 0,90 → 1,53 | +21% | 0,12 |
> | 2979 | VWAP + Donchian + 1ª vela 80 + Bollinger ⚠️ | **+216% · −38,7%** | +53% · −10,0% | +30% | −11,9% | 1,5 | 1,22 → 1,50 | +21% | 0,30 |
> | 2980 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+207% · −39,5%** | +44% · −7,2% | +27% | −6,1% | 2,3 | 0,89 → 1,77 | +16% | 0,19 |
> | 2981 | ADX + Donchian + Pôr do sol + Quinta + Pullback ⚠️ | **+218% · −43,1%** | +46% · −6,6% | +28% | −3,8% | 4,0 | 1,69 → 1,76 | +18% | −0,01 |
> | 2982 | ADX + VWAP + GPS médias + Quinta + Pullback ⚠️ | **+181% · −48,4%** | +44% · −9,5% | +28% | −6,2% | 2,4 | 1,41 → 1,29 | +19% | 0,06 |
> | 2983 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+128% · −46,7%** | +34% · −10,2% | +25% | −9,4% | 1,3 | 1,20 → 1,27 | +17% | 0,03 |
> | 2984 | ADX + BB explosão + Pôr do sol + Pullback + Rompe 200 | **+145% · −50,4%** | +38% · −9,8% | +25% | −4,7% | 2,6 | 1,35 → 1,41 | +16% | 0,01 |
> | 2985 | ADX + VWAP + IFR + Pullback + Rompe 200 | **+197% · −40,6%** | +44% · −7,4% | +29% | −5,2% | 3,2 | 1,38 → 1,52 | +18% | 0,12 |
> | 2986 | ADX + Donchian + GPS médias + MACD | **+245% · −53,5%** | +68% · −14,6% | +37% | −8,3% | 3,0 | 1,22 → 1,47 | +28% | 0,34 |
> | 2987 | VWAP + Donchian + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+196% · −41,4%** | +44% · −8,4% | +29% | −11,8% | 1,4 | 1,03 → 1,42 | +20% | 0,21 |
> | 2988 | ADX + Donchian + GPS médias + MACD + Onda | **+266% · −54,5%** | +63% · −11,1% | +36% | −9,1% | 2,6 | 0,98 → 1,51 | +30% | 0,29 |
> | 2989 | Donchian + GPS médias + Rompe 200 + Tendência + Onda | **+261% · −51,8%** | +58% · −10,9% | +35% | −7,7% | 2,9 | 1,33 → 1,32 | +26% | 0,31 |
> | 2990 | BB explosão + MACD + Pôr do sol + Rompe 200 + Tendência | **+156% · −51,7%** | +39% · −10,7% | +28% | −7,2% | 2,1 | 1,31 → 1,28 | +19% | 0,15 |
> | 2991 | Donchian + GPS médias + Quinta + Onda ⚠️ | **+188% · −38,6%** | +53% · −10,2% | +32% | −8,5% | 2,2 | 1,13 → 1,32 | +27% | 0,03 |
> | 2992 | 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+151% · −25,7%** | +41% · −5,1% | +27% | −6,5% | 2,2 | 0,71 → 1,85 | +13% | 0,00 |
> | 2993 | ADX + Donchian + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+296% · −70,8%** | +65% · −18,3% | +38% | −7,0% | 3,6 | 1,33 → 1,60 | +23% | 0,31 |
> | 2994 | VWAP + Donchian + MACD + 1ª vela 80 + Onda ⚠️ | **+211% · −47,4%** | +48% · −10,0% | +32% | −14,1% | 1,3 | 0,77 → 1,43 | +23% | 0,35 |
> | 2995 | MACD + Rompe 200 + Onda | **+81% · −22,5%** | +35% · −6,9% | +27% | −11,4% | 1,2 | 0,49 → 1,31 | +17% | 0,18 |
> | 2996 | GPS médias + MACD + Quinta + Onda ⚠️ | **+142% · −34,1%** | +43% · −8,6% | +29% | −9,9% | 1,7 | 0,87 → 1,34 | +21% | 0,01 |
> | 2997 | ADX + BB explosão + MACD + Quinta + Pullback ⚠️ | **+171% · −56,4%** | +42% · −12,1% | +28% | −4,9% | 3,1 | 1,25 → 1,54 | +20% | 0,05 |
> | 2998 | ADX + MACD + 1ª vela 80 + Bollinger ⚠️ | **+225% · −42,8%** | +55% · −10,9% | +32% | −7,1% | 2,7 | 0,90 → 1,92 | +20% | 0,29 |
> | 2999 | VWAP + GPS médias + MACD + Rompe 200 + Bollinger | **+183% · −47,5%** | +42% · −10,5% | +27% | −12,7% | 1,1 | 1,21 → 1,16 | +21% | 0,29 |
> | 3000 | ADX + BB explosão + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+186% · −49,6%** | +44% · −9,7% | +28% | −4,5% | 3,4 | 1,28 → 1,60 | +19% | 0,08 |

> [!example]- Combinações 3001 a 3030 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3001 | VWAP + BB explosão + IFR + Pôr do sol + Onda | **+146% · −41,9%** | +40% · −8,6% | +28% | −10,1% | 1,5 | 0,75 → 1,34 | +22% | 0,13 |
> | 3002 | VWAP + BB explosão + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+168% · −47,5%** | +41% · −10,3% | +28% | −10,3% | 1,5 | 1,11 → 1,39 | +18% | 0,24 |
> | 3003 | VWAP + GPS médias + MACD + Quinta ⚠️ | **+119% · −40,7%** | +39% · −10,7% | +27% | −13,7% | 1,0 | 1,10 → 1,06 | +21% | 0,09 |
> | 3004 | Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+100% · −24,8%** | +32% · −4,7% | +25% | −5,6% | 2,1 | 0,55 → 1,70 | +13% | −0,04 |
> | 3005 | Donchian + GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+246% · −46,5%** | +53% · −10,0% | +32% | −9,3% | 2,1 | 1,13 → 1,43 | +29% | 0,24 |
> | 3006 | Donchian + MACD + Bollinger + Tendência | **+280% · −44,3%** | +63% · −12,1% | +37% | −8,4% | 2,9 | 1,53 → 1,51 | +25% | 0,42 |
> | 3007 | GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+192% · −35,9%** | +48% · −8,8% | +28% | −6,6% | 2,3 | 1,52 → 1,67 | +21% | 0,10 |
> | 3008 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+158% · −31,1%** | +36% · −5,7% | +24% | −4,5% | 2,4 | 1,30 → 1,77 | +17% | 0,01 |
> | 3009 | VWAP + Donchian + GPS médias + Bollinger + Tendência | **+302% · −55,9%** | +62% · −11,8% | +35% | −9,1% | 2,4 | 1,54 → 1,27 | +19% | 0,37 |
> | 3010 | BB explosão + MACD + Pullback + Rompe 200 + Bollinger | **+166% · −38,2%** | +38% · −6,6% | +25% | −6,5% | 2,0 | 1,49 → 1,38 | +17% | 0,13 |
> | 3011 | BB explosão + GPS médias + Quinta + Pullback + Tendência ⚠️ | **+197% · −59,8%** | +47% · −14,0% | +31% | −4,5% | 4,1 | 1,80 → 1,20 | +15% | 0,10 |
> | 3012 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+169% · −46,2%** | +39% · −10,1% | +26% | −9,0% | 1,5 | 1,21 → 1,34 | +19% | 0,13 |
> | 3013 | ADX + VWAP + Donchian + Pullback + Bollinger | **+277% · −48,7%** | +54% · −8,8% | +31% | −5,5% | 3,3 | 1,41 → 1,54 | +18% | 0,20 |
> | 3014 | BB explosão + IFR + MACD + Rompe 200 + Bollinger | **+213% · −39,6%** | +45% · −8,1% | +29% | −7,9% | 2,0 | 1,27 → 1,54 | +21% | 0,28 |
> | 3015 | Donchian + GPS médias + MACD + Rompe 200 + Tendência | **+271% · −55,0%** | +58% · −11,8% | +35% | −7,7% | 2,9 | 1,56 → 1,29 | +22% | 0,36 |
> | 3016 | Donchian + BB explosão + MACD + 1ª vela 80 + Bollinger ⚠️ | **+272% · −47,8%** | +54% · −10,1% | +32% | −9,9% | 1,9 | 1,21 → 1,58 | +23% | 0,32 |
> | 3017 | MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+92% · −19,0%** | +36% · −5,5% | +27% | −8,6% | 1,7 | 0,80 → 1,67 | +16% | 0,11 |
> | 3018 | VWAP + Donchian + GPS médias + MACD + 1ª vela 80 ⚠️ | **+239% · −53,2%** | +54% · −12,3% | +33% | −14,8% | 1,4 | 1,18 → 1,31 | +25% | 0,35 |
> | 3019 | ADX + VWAP + MACD + Pullback + Tendência | **+224% · −57,8%** | +49% · −12,0% | +33% | −8,1% | 2,5 | 1,31 → 1,43 | +22% | 0,21 |
> | 3020 | VWAP + MACD + Pôr do sol + Rompe 200 | **+71% · −28,7%** | +27% · −6,6% | +22% | −11,3% | 0,8 | 0,78 → 1,00 | +17% | 0,09 |
> | 3021 | Donchian + MACD + 1ª vela 80 + Onda ⚠️ | **+210% · −36,9%** | +54% · −8,4% | +35% | −11,2% | 1,9 | 0,82 → 1,60 | +26% | 0,30 |
> | 3022 | ADX + MACD + Quinta + Onda ⚠️ | **+144% · −37,0%** | +44% · −8,7% | +30% | −7,4% | 2,3 | 0,54 → 1,65 | +19% | 0,02 |
> | 3023 | BB explosão + Pôr do sol + Quinta + Pullback + Onda ⚠️ | **+112% · −32,4%** | +31% · −5,3% | +24% | −5,2% | 2,1 | 1,01 → 1,33 | +22% | −0,05 |
> | 3024 | BB explosão + 1ª vela 80 + Pullback + Rompe 200 + Onda ⚠️ | **+150% · −43,4%** | +38% · −9,2% | +27% | −8,5% | 1,7 | 0,99 → 1,42 | +21% | 0,11 |
> | 3025 | BB explosão + Quinta + Rompe 200 + Bollinger + Tendência ⚠️ | **+183% · −48,6%** | +41% · −9,6% | +27% | −5,4% | 2,6 | 1,68 → 1,34 | +15% | 0,14 |
> | 3026 | GPS médias + Pôr do sol + Rompe 200 + Onda | **+119% · −30,4%** | +38% · −7,6% | +26% | −8,6% | 1,5 | 0,94 → 1,19 | +21% | 0,04 |
> | 3027 | ADX + GPS médias + MACD + Tendência + Onda | **+269% · −58,7%** | +61% · −12,1% | +38% | −9,6% | 2,6 | 1,06 → 1,52 | +31% | 0,30 |
> | 3028 | ADX + BB explosão + GPS médias + Pullback + Tendência | **+244% · −72,3%** | +59% · −18,7% | +35% | −6,3% | 3,6 | 1,58 → 1,38 | +19% | 0,25 |
> | 3029 | BB explosão + GPS médias + IFR + Pullback + Bollinger | **+266% · −50,3%** | +54% · −10,3% | +32% | −6,6% | 2,9 | 1,75 → 1,47 | +18% | 0,21 |
> | 3030 | Donchian + GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+326% · −48,6%** | +61% · −10,2% | +34% | −9,1% | 2,3 | 1,17 → 1,60 | +28% | 0,25 |

> [!example]- Combinações 3031 a 3060 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3031 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+169% · −39,3%** | +39% · −8,0% | +26% | −7,9% | 1,6 | 1,22 → 1,45 | +18% | 0,02 |
> | 3032 | ADX + VWAP + IFR + Tendência | **+229% · −53,1%** | +60% · −13,6% | +38% | −9,4% | 2,7 | 1,26 → 1,55 | +23% | 0,30 |
> | 3033 | VWAP + Donchian + 1ª vela 80 + Quinta + Onda ⚠️ | **+188% · −42,1%** | +44% · −8,5% | +29% | −11,0% | 1,5 | 0,85 → 1,44 | +21% | 0,07 |
> | 3034 | ADX + Donchian + IFR + MACD | **+274% · −45,7%** | +68% · −10,6% | +39% | −7,3% | 3,6 | 1,18 → 1,73 | +24% | 0,36 |
> | 3035 | GPS médias + Rompe 200 + Bollinger | **+132% · −29,8%** | +48% · −9,6% | +27% | −7,5% | 1,8 | 1,69 → 1,16 | +19% | 0,22 |
> | 3036 | VWAP + Donchian + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+193% · −45,9%** | +44% · −9,8% | +29% | −12,7% | 1,3 | 1,08 → 1,33 | +22% | 0,28 |
> | 3037 | ADX + VWAP + Pullback + Tendência + Onda | **+214% · −56,7%** | +50% · −11,0% | +33% | −8,3% | 2,5 | 1,07 → 1,44 | +23% | 0,19 |
> | 3038 | Donchian + Pôr do sol + Bollinger | **+155% · −23,3%** | +52% · −7,9% | +28% | −3,5% | 4,3 | 1,67 → 1,76 | +21% | −0,03 |
> | 3039 | ADX + IFR + Pôr do sol + Onda | **+187% · −34,1%** | +51% · −8,7% | +33% | −6,5% | 3,0 | 0,75 → 1,85 | +20% | 0,06 |
> | 3040 | ADX + VWAP + Donchian + IFR + Tendência | **+316% · −61,9%** | +66% · −13,9% | +39% | −8,3% | 3,1 | 1,36 → 1,54 | +23% | 0,35 |
> | 3041 | Donchian + 1ª vela 80 + Quinta + Pullback ⚠️ | **+182% · −33,1%** | +46% · −7,6% | +29% | −3,1% | 5,4 | 1,87 → 1,77 | +21% | −0,12 |
> | 3042 | VWAP + GPS médias + Rompe 200 + Tendência + Onda | **+181% · −49,5%** | +46% · −10,8% | +31% | −11,1% | 1,6 | 1,11 → 1,15 | +25% | 0,26 |
> | 3043 | Donchian + BB explosão + IFR + Pôr do sol + Tendência | **+269% · −59,0%** | +57% · −13,0% | +35% | −6,3% | 3,6 | 1,56 → 1,49 | +19% | 0,27 |
> | 3044 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+244% · −56,5%** | +56% · −13,4% | +33% | −8,3% | 2,4 | 1,56 → 1,35 | +18% | 0,18 |
> | 3045 | ADX + Donchian + Quinta + Onda ⚠️ | **+195% · −41,6%** | +54% · −9,2% | +32% | −5,6% | 3,5 | 0,85 → 1,63 | +22% | 0,01 |
> | 3046 | ADX + Donchian + MACD + Onda | **+219% · −48,7%** | +61% · −11,4% | +36% | −8,5% | 2,7 | 0,77 → 1,61 | +24% | 0,27 |
> | 3047 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+147% · −40,3%** | +36% · −8,1% | +25% | −9,5% | 1,3 | 1,24 → 1,29 | +22% | 0,01 |
> | 3048 | ADX + VWAP + GPS médias + MACD + Tendência | **+239% · −63,3%** | +57% · −14,9% | +35% | −8,8% | 2,6 | 1,21 → 1,35 | +26% | 0,35 |
> | 3049 | VWAP + BB explosão + 1ª vela 80 + Quinta + Tendência ⚠️ | **+165% · −53,9%** | +41% · −12,5% | +29% | −8,5% | 1,9 | 1,23 → 1,30 | +18% | 0,10 |
> | 3050 | ADX + Pullback + Tendência | **+175% · −46,6%** | +60% · −16,1% | +38% | −8,8% | 2,8 | 1,68 → 1,59 | +23% | 0,11 |
> | 3051 | ADX + Donchian + GPS médias + Tendência | **+288% · −63,9%** | +77% · −18,6% | +42% | −7,6% | 3,8 | 1,52 → 1,47 | +25% | 0,39 |
> | 3052 | VWAP + Pôr do sol + Pullback | **+55% · −23,1%** | +26% · −7,3% | +21% | −9,8% | 0,9 | 1,29 → 0,79 | +12% | −0,03 |
> | 3053 | VWAP + Donchian + GPS médias + Pôr do sol + Bollinger | **+238% · −45,2%** | +50% · −9,9% | +28% | −9,8% | 1,6 | 1,41 → 1,24 | +19% | 0,16 |
> | 3054 | ADX + GPS médias + MACD + Rompe 200 + Bollinger | **+253% · −44,9%** | +52% · −9,1% | +30% | −6,5% | 2,7 | 1,26 → 1,55 | +26% | 0,24 |
> | 3055 | 1ª vela 80 + Pullback + Onda ⚠️ | **+108% · −21,5%** | +41% · −6,4% | +30% | −8,6% | 2,0 | 0,84 → 1,59 | +20% | 0,04 |
> | 3056 | VWAP + Donchian + MACD + Pôr do sol + Quinta ⚠️ | **+150% · −33,7%** | +37% · −6,9% | +26% | −9,2% | 1,4 | 1,09 → 1,25 | +17% | 0,09 |
> | 3057 | ADX + VWAP + GPS médias + IFR + Pôr do sol | **+224% · −49,1%** | +51% · −9,7% | +31% | −7,1% | 2,6 | 1,21 → 1,49 | +21% | 0,14 |
> | 3058 | VWAP + Donchian + Pôr do sol + Bollinger | **+168% · −31,2%** | +45% · −7,4% | +26% | −8,9% | 1,5 | 1,26 → 1,30 | +17% | 0,13 |
> | 3059 | VWAP + GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+170% · −47,1%** | +41% · −10,3% | +28% | −13,1% | 1,2 | 1,12 → 1,30 | +25% | 0,10 |
> | 3060 | VWAP + Donchian + BB explosão + IFR + Pôr do sol | **+189% · −52,6%** | +47% · −11,2% | +30% | −9,3% | 1,8 | 1,19 → 1,30 | +17% | 0,21 |

> [!example]- Combinações 3061 a 3090 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3061 | ADX + VWAP + Pôr do sol + Pullback + Bollinger | **+187% · −35,6%** | +41% · −6,0% | +26% | −4,6% | 2,8 | 1,30 → 1,57 | +14% | 0,09 |
> | 3062 | ADX + VWAP + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+205% · −42,6%** | +44% · −8,2% | +27% | −7,5% | 1,9 | 0,95 → 1,64 | +19% | 0,23 |
> | 3063 | VWAP + 1ª vela 80 + Pullback + Onda ⚠️ | **+121% · −34,9%** | +38% · −8,8% | +28% | −13,0% | 1,2 | 0,79 → 1,37 | +20% | 0,16 |
> | 3064 | ADX + VWAP + IFR + Quinta + Pullback ⚠️ | **+198% · −39,1%** | +44% · −7,0% | +29% | −4,5% | 3,6 | 1,41 → 1,63 | +16% | 0,04 |
> | 3065 | ADX + VWAP + 1ª vela 80 + Tendência ⚠️ | **+203% · −50,2%** | +55% · −12,3% | +35% | −8,1% | 2,8 | 1,10 → 1,55 | +23% | 0,24 |
> | 3066 | VWAP + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+140% · −40,4%** | +36% · −8,2% | +27% | −12,8% | 1,1 | 0,53 → 1,45 | +18% | 0,20 |
> | 3067 | ADX + VWAP + IFR + 1ª vela 80 + Onda ⚠️ | **+237% · −45,3%** | +52% · −8,6% | +34% | −8,6% | 2,4 | 0,74 → 1,71 | +20% | 0,22 |
> | 3068 | VWAP + MACD + Pôr do sol + Tendência | **+128% · −36,6%** | +39% · −9,4% | +29% | −9,3% | 1,8 | 1,11 → 1,20 | +22% | 0,23 |
> | 3069 | Donchian + Bollinger + Tendência | **+233% · −38,5%** | +71% · −13,0% | +39% | −7,6% | 3,4 | 1,77 → 1,53 | +21% | 0,35 |
> | 3070 | Donchian + GPS médias + Tendência + Onda | **+249% · −50,3%** | +68% · −13,3% | +40% | −8,5% | 3,2 | 1,28 → 1,35 | +29% | 0,38 |
> | 3071 | ADX + Donchian + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+368% · −54,4%** | +68% · −12,0% | +35% | −6,2% | 3,7 | 1,40 → 1,72 | +28% | 0,27 |
> | 3072 | ADX + BB explosão + Pullback + Tendência | **+197% · −65,9%** | +56% · −20,5% | +35% | −7,4% | 3,0 | 1,52 → 1,47 | +18% | 0,20 |
> | 3073 | ADX + IFR + MACD | **+175% · −36,2%** | +61% · −12,0% | +38% | −8,4% | 3,0 | 0,95 → 1,78 | +22% | 0,31 |
> | 3074 | ADX + Donchian + Rompe 200 + Bollinger | **+239% · −37,2%** | +58% · −8,3% | +31% | −4,7% | 3,9 | 1,36 → 1,69 | +22% | 0,18 |
> | 3075 | GPS médias + MACD + Bollinger | **+160% · −33,9%** | +55% · −11,8% | +31% | −11,4% | 1,6 | 1,34 → 1,38 | +27% | 0,33 |
> | 3076 | Donchian + GPS médias + Rompe 200 + Bollinger + Onda | **+268% · −44,8%** | +54% · −8,9% | +31% | −8,7% | 2,1 | 1,24 → 1,39 | +26% | 0,23 |
> | 3077 | ADX + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+235% · −41,0%** | +47% · −7,6% | +29% | −5,4% | 3,1 | 0,73 → 1,94 | +17% | 0,08 |
> | 3078 | BB explosão + MACD + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+188% · −39,2%** | +41% · −7,9% | +27% | −8,2% | 1,7 | 1,13 → 1,65 | +18% | 0,10 |
> | 3079 | ADX + BB explosão + MACD + Bollinger + Tendência | **+275% · −67,9%** | +57% · −16,6% | +34% | −8,5% | 2,5 | 1,23 → 1,59 | +24% | 0,37 |
> | 3080 | Donchian + GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+251% · −43,2%** | +53% · −8,9% | +32% | −8,3% | 2,3 | 1,10 → 1,52 | +28% | 0,11 |
> | 3081 | ADX + VWAP + Pôr do sol + Rompe 200 + Tendência | **+174% · −47,9%** | +42% · −9,4% | +28% | −6,8% | 2,3 | 1,22 → 1,36 | +20% | 0,11 |
> | 3082 | BB explosão + MACD + Quinta + Bollinger + Tendência ⚠️ | **+212% · −53,1%** | +45% · −11,0% | +30% | −6,7% | 2,6 | 1,42 → 1,44 | +20% | 0,21 |
> | 3083 | VWAP + Donchian + GPS médias + MACD + Quinta ⚠️ | **+194% · −47,3%** | +47% · −10,5% | +30% | −12,2% | 1,4 | 1,24 → 1,16 | +21% | 0,17 |
> | 3084 | VWAP + GPS médias + MACD + Tendência + Onda | **+202% · −51,0%** | +50% · −10,4% | +34% | −12,7% | 1,7 | 1,01 → 1,25 | +30% | 0,36 |
> | 3085 | VWAP + Donchian + Bollinger + Tendência | **+238% · −46,3%** | +59% · −11,9% | +34% | −7,9% | 2,7 | 1,46 → 1,31 | +18% | 0,38 |
> | 3086 | VWAP + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+112% · −37,9%** | +31% · −7,7% | +24% | −11,2% | 1,0 | 0,65 → 1,33 | +19% | 0,05 |
> | 3087 | Donchian + BB explosão + Quinta + Pullback + Rompe 200 ⚠️ | **+158% · −50,9%** | +39% · −9,8% | +26% | −4,6% | 2,8 | 1,70 → 1,17 | +12% | 0,08 |
> | 3088 | ADX + MACD + Rompe 200 + Onda | **+145% · −39,1%** | +44% · −9,4% | +30% | −8,5% | 2,0 | 0,56 → 1,56 | +20% | 0,13 |
> | 3089 | ADX + VWAP + MACD + Pôr do sol + Tendência | **+200% · −54,5%** | +46% · −10,7% | +31% | −8,0% | 2,3 | 1,06 → 1,45 | +20% | 0,20 |
> | 3090 | VWAP + GPS médias + Pôr do sol + Rompe 200 | **+98% · −37,7%** | +34% · −9,9% | +23% | −10,6% | 1,0 | 1,24 → 0,84 | +16% | 0,06 |

> [!example]- Combinações 3091 a 3120 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3091 | ADX + MACD + Quinta + Pullback ⚠️ | **+144% · −33,9%** | +42% · −7,6% | +28% | −5,0% | 3,1 | 1,33 → 1,70 | +19% | −0,01 |
> | 3092 | GPS médias + Quinta ⚠️ | **+75% · −20,6%** | +43% · −9,7% | +27% | −7,2% | 1,9 | 1,61 → 0,94 | +19% | −0,22 |
> | 3093 | Donchian + GPS médias + MACD + Pôr do sol | **+196% · −36,9%** | +53% · −9,5% | +32% | −9,3% | 2,0 | 1,36 → 1,32 | +25% | 0,14 |
> | 3094 | Donchian + Pôr do sol + Pullback + Onda | **+162% · −35,1%** | +45% · −7,1% | +29% | −5,0% | 3,2 | 1,17 → 1,49 | +22% | 0,01 |
> | 3095 | ADX + IFR + Quinta + Onda ⚠️ | **+185% · −34,0%** | +51% · −8,6% | +33% | −6,5% | 3,1 | 0,80 → 1,82 | +21% | 0,04 |
> | 3096 | ADX + Donchian + IFR + Pôr do sol | **+251% · −37,1%** | +62% · −9,4% | +35% | −4,8% | 4,6 | 1,34 → 1,84 | +21% | 0,12 |
> | 3097 | ADX + 1ª vela 80 + Tendência + Onda ⚠️ | **+232% · −45,1%** | +60% · −11,1% | +38% | −9,1% | 2,8 | 0,91 → 1,74 | +25% | 0,19 |
> | 3098 | ADX + BB explosão + MACD + Pôr do sol + Rompe 200 | **+149% · −52,0%** | +39% · −10,6% | +26% | −5,7% | 2,3 | 0,89 → 1,48 | +21% | 0,06 |
> | 3099 | VWAP + Donchian + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+187% · −48,5%** | +44% · −10,7% | +29% | −12,4% | 1,3 | 0,86 → 1,36 | +23% | 0,25 |
> | 3100 | Donchian + BB explosão + Pôr do sol + Quinta + Tendência ⚠️ | **+200% · −58,1%** | +47% · −12,9% | +30% | −4,6% | 3,8 | 1,56 → 1,34 | +16% | 0,12 |
> | 3101 | VWAP + BB explosão + Pôr do sol + Quinta + Pullback ⚠️ | **+90% · −40,6%** | +28% · −8,1% | +22% | −7,1% | 1,2 | 1,31 → 0,96 | +13% | −0,01 |
> | 3102 | Donchian + GPS médias + Rompe 200 + Tendência | **+235% · −51,7%** | +62% · −14,0% | +36% | −6,8% | 3,4 | 1,73 → 1,22 | +18% | 0,35 |
> | 3103 | ADX + BB explosão + MACD + Pôr do sol + Pullback | **+173% · −55,3%** | +42% · −11,6% | +28% | −4,7% | 3,2 | 1,19 → 1,57 | +21% | 0,02 |
> | 3104 | ADX + Donchian + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+286% · −48,5%** | +60% · −9,8% | +34% | −5,3% | 3,9 | 1,38 → 1,63 | +26% | 0,09 |
> | 3105 | VWAP + BB explosão + IFR + Quinta ⚠️ | **+115% · −42,6%** | +38% · −10,7% | +27% | −9,7% | 1,5 | 1,08 → 1,22 | +15% | 0,09 |
> | 3106 | VWAP + Donchian + Quinta + Bollinger ⚠️ | **+165% · −30,7%** | +45% · −7,3% | +26% | −8,7% | 1,6 | 1,34 → 1,28 | +17% | 0,10 |
> | 3107 | ADX + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+219% · −42,9%** | +57% · −10,7% | +34% | −5,7% | 3,7 | 1,45 → 1,64 | +27% | 0,07 |
> | 3108 | ADX + BB explosão + IFR + Pôr do sol + Quinta ⚠️ | **+188% · −48,7%** | +44% · −9,1% | +28% | −4,7% | 3,3 | 1,19 → 1,74 | +21% | 0,07 |
> | 3109 | ADX + Donchian + BB explosão + Pullback + Onda | **+225% · −64,0%** | +55% · −14,7% | +33% | −6,2% | 3,2 | 1,05 → 1,50 | +25% | 0,20 |
> | 3110 | VWAP + GPS médias + IFR + Onda | **+174% · −42,4%** | +51% · −11,6% | +33% | −12,8% | 1,6 | 0,94 → 1,31 | +28% | 0,28 |
> | 3111 | ADX + IFR + Rompe 200 | **+147% · −32,0%** | +54% · −10,3% | +33% | −6,6% | 3,1 | 1,14 → 1,74 | +23% | 0,21 |
> | 3112 | VWAP + GPS médias + Pullback + Rompe 200 + Onda | **+144% · −45,4%** | +38% · −9,9% | +27% | −11,9% | 1,2 | 1,10 → 1,06 | +22% | 0,18 |
> | 3113 | BB explosão + Pôr do sol + 1ª vela 80 + Tendência + Onda ⚠️ | **+196% · −46,1%** | +45% · −8,5% | +31% | −6,6% | 2,8 | 0,99 → 1,54 | +22% | 0,12 |
> | 3114 | ADX + Donchian + BB explosão + IFR + MACD | **+271% · −65,4%** | +62% · −15,1% | +36% | −7,0% | 3,4 | 1,14 → 1,60 | +25% | 0,39 |
> | 3115 | ADX + BB explosão + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+235% · −47,0%** | +51% · −8,7% | +32% | −4,3% | 4,4 | 1,10 → 1,87 | +23% | 0,11 |
> | 3116 | VWAP + Donchian + GPS médias + Rompe 200 + Tendência | **+229% · −62,6%** | +54% · −13,7% | +33% | −9,0% | 2,2 | 1,50 → 1,12 | +17% | 0,33 |
> | 3117 | VWAP + Donchian + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+288% · −50,9%** | +57% · −11,6% | +32% | −12,2% | 1,6 | 1,37 → 1,40 | +22% | 0,31 |
> | 3118 | Pôr do sol + Bollinger + Onda | **+99% · −18,1%** | +38% · −5,5% | +25% | −6,2% | 1,9 | 0,51 → 1,70 | +14% | 0,00 |
> | 3119 | GPS médias + MACD + Pôr do sol + Onda | **+144% · −33,8%** | +43% · −8,5% | +29% | −9,9% | 1,6 | 0,82 → 1,37 | +21% | 0,07 |
> | 3120 | Donchian + MACD + Rompe 200 + Tendência + Onda | **+242% · −44,0%** | +52% · −9,1% | +34% | −9,4% | 2,3 | 1,14 → 1,41 | +29% | 0,33 |

> [!example]- Combinações 3121 a 3150 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3121 | GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+190% · −37,5%** | +48% · −9,4% | +28% | −7,7% | 2,0 | 1,54 → 1,51 | +22% | 0,22 |
> | 3122 | ADX + VWAP + Donchian + Rompe 200 + Tendência | **+242% · −61,1%** | +55% · −13,8% | +33% | −7,9% | 2,6 | 1,31 → 1,35 | +19% | 0,27 |
> | 3123 | BB explosão + Quinta + Pullback + Bollinger ⚠️ | **+123% · −32,2%** | +37% · −6,7% | +24% | −3,5% | 3,1 | 1,83 → 1,39 | +13% | 0,02 |
> | 3124 | BB explosão + GPS médias + Pôr do sol + Pullback + Tendência | **+199% · −58,6%** | +48% · −13,5% | +31% | −4,3% | 4,2 | 1,75 → 1,22 | +16% | 0,08 |
> | 3125 | ADX + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+132% · −34,7%** | +40% · −8,0% | +26% | −4,8% | 2,8 | 0,94 → 1,75 | +20% | 0,01 |
> | 3126 | ADX + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+238% · −41,6%** | +48% · −7,7% | +29% | −5,5% | 3,0 | 0,67 → 1,96 | +16% | 0,12 |
> | 3127 | ADX + VWAP + IFR + Pullback + Onda | **+219% · −43,0%** | +49% · −7,7% | +32% | −7,0% | 2,8 | 0,97 → 1,59 | +19% | 0,14 |
> | 3128 | ADX + Donchian + GPS médias + Rompe 200 + Onda | **+245% · −52,2%** | +58% · −10,7% | +33% | −7,5% | 2,7 | 1,07 → 1,44 | +29% | 0,23 |
> | 3129 | ADX + VWAP + GPS médias + Pullback + Rompe 200 | **+179% · −51,5%** | +45% · −10,6% | +28% | −7,6% | 2,0 | 1,38 → 1,21 | +18% | 0,15 |
> | 3130 | ADX + Bollinger + Onda | **+160% · −35,5%** | +57% · −11,5% | +32% | −8,8% | 2,2 | 0,53 → 1,75 | +18% | 0,23 |
> | 3131 | VWAP + BB explosão + GPS médias + IFR + Tendência | **+213% · −67,6%** | +55% · −17,1% | +35% | −10,4% | 2,2 | 1,38 → 1,23 | +18% | 0,41 |
> | 3132 | BB explosão + IFR + MACD + Tendência | **+206% · −54,4%** | +56% · −14,8% | +37% | −9,8% | 2,5 | 1,34 → 1,45 | +23% | 0,45 |
> | 3133 | GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+117% · −30,3%** | +38% · −7,7% | +26% | −8,7% | 1,5 | 1,01 → 1,16 | +22% | 0,01 |
> | 3134 | Donchian + GPS médias + MACD + Rompe 200 + Onda | **+222% · −45,5%** | +51% · −9,8% | +32% | −10,2% | 1,9 | 1,07 → 1,32 | +29% | 0,28 |
> | 3135 | BB explosão + IFR + 1ª vela 80 ⚠️ | **+148% · −30,5%** | +53% · −10,3% | +34% | −8,7% | 2,4 | 1,19 → 1,69 | +23% | 0,19 |
> | 3136 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+168% · −52,4%** | +42% · −11,9% | +29% | −8,7% | 1,9 | 1,19 → 1,32 | +19% | 0,16 |
> | 3137 | BB explosão + GPS médias + IFR + MACD + Quinta ⚠️ | **+195% · −51,9%** | +48% · −10,9% | +31% | −9,4% | 1,9 | 1,32 → 1,36 | +22% | 0,19 |
> | 3138 | ADX + VWAP + GPS médias + MACD + Pullback | **+206% · −53,0%** | +49% · −11,0% | +31% | −8,8% | 2,1 | 1,23 → 1,34 | +23% | 0,18 |
> | 3139 | VWAP + GPS médias + MACD + Pôr do sol | **+121% · −41,1%** | +39% · −10,9% | +27% | −13,9% | 1,0 | 1,03 → 1,08 | +23% | 0,12 |
> | 3140 | ADX + VWAP + IFR + Rompe 200 + Onda | **+191% · −42,5%** | +46% · −8,4% | +30% | −8,4% | 2,1 | 0,78 → 1,52 | +20% | 0,19 |
> | 3141 | ADX + VWAP + MACD + 1ª vela 80 + Bollinger ⚠️ | **+237% · −46,1%** | +49% · −9,3% | +30% | −9,6% | 1,8 | 0,84 → 1,68 | +19% | 0,33 |
> | 3142 | BB explosão + MACD + Quinta + Pullback + Onda ⚠️ | **+136% · −38,8%** | +36% · −7,1% | +27% | −7,7% | 1,8 | 0,94 → 1,38 | +23% | 0,01 |
> | 3143 | GPS médias + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+170% · −37,0%** | +40% · −6,6% | +27% | −6,9% | 2,0 | 0,97 → 1,53 | +18% | −0,03 |
> | 3144 | BB explosão + IFR + 1ª vela 80 + Bollinger + Onda ⚠️ | **+265% · −40,9%** | +51% · −8,7% | +32% | −8,2% | 2,4 | 0,95 → 1,79 | +21% | 0,23 |
> | 3145 | VWAP + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+138% · −42,7%** | +36% · −9,2% | +27% | −14,1% | 1,0 | 0,60 → 1,36 | +19% | 0,26 |
> | 3146 | ADX + MACD + 1ª vela 80 + Quinta ⚠️ | **+161% · −38,5%** | +45% · −9,3% | +30% | −6,4% | 2,7 | 0,84 → 1,81 | +20% | 0,04 |
> | 3147 | Donchian + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+182% · −36,2%** | +49% · −9,0% | +31% | −8,7% | 2,1 | 0,93 → 1,54 | +26% | 0,21 |
> | 3148 | Donchian + BB explosão + MACD + 1ª vela 80 + Pullback ⚠️ | **+234% · −49,2%** | +50% · −10,3% | +32% | −8,5% | 2,2 | 1,39 → 1,50 | +21% | 0,15 |
> | 3149 | ADX + GPS médias + Bollinger + Tendência + Onda | **+324% · −54,6%** | +64% · −10,7% | +37% | −7,9% | 3,0 | 1,20 → 1,61 | +30% | 0,29 |
> | 3150 | ADX + VWAP + GPS médias + Bollinger + Tendência | **+288% · −59,8%** | +60% · −12,9% | +34% | −7,3% | 3,0 | 1,38 → 1,43 | +23% | 0,35 |

> [!example]- Combinações 3151 a 3180 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3151 | BB explosão + GPS médias + IFR + Pullback | **+186% · −52,6%** | +53% · −14,5% | +33% | −7,4% | 2,7 | 1,66 → 1,32 | +17% | 0,20 |
> | 3152 | Donchian + BB explosão + IFR + Pullback | **+214% · −49,9%** | +57% · −13,6% | +34% | −5,5% | 3,9 | 1,64 → 1,48 | +15% | 0,23 |
> | 3153 | ADX + Donchian + BB explosão + Rompe 200 + Bollinger | **+250% · −60,3%** | +55% · −13,7% | +30% | −5,0% | 3,4 | 1,25 → 1,52 | +18% | 0,26 |
> | 3154 | ADX + GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+183% · −44,6%** | +45% · −8,8% | +28% | −4,7% | 3,3 | 0,91 → 1,53 | +22% | −0,00 |
> | 3155 | ADX + BB explosão + GPS médias + IFR + Tendência | **+278% · −71,4%** | +66% · −18,8% | +39% | −7,8% | 3,4 | 1,44 → 1,50 | +23% | 0,42 |
> | 3156 | VWAP + BB explosão + MACD + 1ª vela 80 + Quinta ⚠️ | **+129% · −46,6%** | +35% · −10,2% | +26% | −12,9% | 1,0 | 0,85 → 1,29 | +21% | 0,12 |
> | 3157 | ADX + Donchian + GPS médias + Pullback | **+252% · −51,6%** | +66% · −13,8% | +36% | −5,6% | 4,2 | 1,61 → 1,48 | +22% | 0,17 |
> | 3158 | ADX + VWAP + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+145% · −38,4%** | +37% · −6,9% | +25% | −6,4% | 2,0 | 0,90 → 1,52 | +17% | 0,05 |
> | 3159 | BB explosão + 1ª vela 80 + Quinta + Rompe 200 + Bollinger ⚠️ | **+157% · −34,4%** | +37% · −6,5% | +24% | −5,5% | 2,0 | 1,34 → 1,59 | +18% | 0,06 |
> | 3160 | ADX + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+162% · −40,6%** | +46% · −10,0% | +30% | −7,4% | 2,3 | 0,84 → 1,72 | +21% | 0,13 |
> | 3161 | BB explosão + GPS médias + IFR + Pôr do sol + Rompe 200 | **+175% · −49,3%** | +44% · −10,1% | +28% | −7,1% | 2,1 | 1,46 → 1,28 | +18% | 0,16 |
> | 3162 | ADX + VWAP + MACD + Bollinger | **+175% · −43,6%** | +48% · −10,6% | +29% | −9,3% | 1,8 | 0,78 → 1,51 | +16% | 0,37 |
> | 3163 | BB explosão + GPS médias + IFR + 1ª vela 80 + Quinta ⚠️ | **+219% · −45,4%** | +50% · −10,0% | +31% | −8,1% | 2,3 | 1,43 → 1,51 | +22% | 0,10 |
> | 3164 | Donchian + BB explosão + 1ª vela 80 + Quinta + Pullback ⚠️ | **+206% · −45,8%** | +45% · −9,7% | +29% | −4,9% | 3,3 | 1,61 → 1,53 | +17% | −0,02 |
> | 3165 | VWAP + BB explosão + IFR + Pullback | **+136% · −47,1%** | +42% · −12,5% | +29% | −9,1% | 1,8 | 1,34 → 1,23 | +14% | 0,16 |
> | 3166 | ADX + VWAP + Quinta + Tendência + Onda ⚠️ | **+190% · −53,5%** | +46% · −10,1% | +31% | −8,1% | 2,3 | 0,90 → 1,45 | +22% | 0,10 |
> | 3167 | ADX + BB explosão + 1ª vela 80 + Quinta + Tendência ⚠️ | **+231% · −61,9%** | +51% · −14,3% | +33% | −6,0% | 3,4 | 1,30 → 1,65 | +23% | 0,10 |
> | 3168 | VWAP + Tendência + Onda | **+114% · −33,6%** | +46% · −11,0% | +33% | −13,2% | 1,6 | 0,81 → 1,19 | +26% | 0,34 |
> | 3169 | ADX + Donchian + MACD + Pôr do sol + Quinta ⚠️ | **+219% · −39,9%** | +47% · −6,6% | +29% | −4,2% | 3,9 | 1,16 → 1,70 | +19% | 0,06 |
> | 3170 | Donchian + Pôr do sol + Pullback | **+124% · −29,2%** | +45% · −8,0% | +28% | −2,8% | 5,4 | 1,95 → 1,48 | +17% | −0,10 |
> | 3171 | VWAP + BB explosão + IFR + Rompe 200 + Tendência | **+183% · −58,6%** | +45% · −13,6% | +31% | −8,0% | 2,3 | 1,34 → 1,23 | +15% | 0,32 |
> | 3172 | GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+223% · −40,3%** | +54% · −10,7% | +32% | −11,1% | 1,7 | 1,31 → 1,58 | +22% | 0,30 |
> | 3173 | Donchian + BB explosão + Pôr do sol + Pullback + Rompe 200 | **+160% · −47,5%** | +40% · −9,3% | +26% | −4,5% | 2,8 | 1,63 → 1,20 | +13% | 0,06 |
> | 3174 | ADX + VWAP + MACD + 1ª vela 80 + Quinta ⚠️ | **+173% · −42,1%** | +42% · −8,0% | +28% | −8,5% | 1,8 | 0,79 → 1,59 | +17% | 0,11 |
> | 3175 | ADX + Donchian + GPS médias + Bollinger | **+293% · −48,9%** | +72% · −12,8% | +36% | −5,6% | 4,2 | 1,43 → 1,57 | +25% | 0,33 |
> | 3176 | ADX + Donchian + BB explosão + GPS médias + IFR | **+266% · −69,4%** | +68% · −17,9% | +38% | −7,1% | 3,5 | 1,33 → 1,48 | +22% | 0,43 |
> | 3177 | BB explosão + MACD + Quinta + Rompe 200 + Tendência ⚠️ | **+153% · −53,1%** | +39% · −11,2% | +28% | −7,1% | 2,1 | 1,37 → 1,25 | +18% | 0,14 |
> | 3178 | ADX + VWAP + Donchian + 1ª vela 80 + Bollinger ⚠️ | **+299% · −45,7%** | +58% · −9,0% | +32% | −7,6% | 2,6 | 1,11 → 1,68 | +19% | 0,28 |
> | 3179 | GPS médias + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+196% · −42,3%** | +44% · −8,3% | +30% | −9,9% | 1,7 | 0,91 → 1,51 | +19% | 0,05 |
> | 3180 | ADX + GPS médias + IFR + 1ª vela 80 ⚠️ | **+266% · −46,9%** | +66% · −11,9% | +38% | −6,1% | 4,1 | 1,29 → 1,77 | +30% | 0,28 |

> [!example]- Combinações 3181 a 3210 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3181 | ADX + VWAP + Pôr do sol + Quinta + Tendência ⚠️ | **+175% · −48,0%** | +42% · −8,9% | +28% | −5,5% | 2,8 | 1,24 → 1,45 | +18% | 0,08 |
> | 3182 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+190% · −43,6%** | +44% · −8,3% | +29% | −11,1% | 1,4 | 0,81 → 1,45 | +20% | 0,16 |
> | 3183 | Donchian + GPS médias + MACD + 1ª vela 80 ⚠️ | **+242% · −42,5%** | +62% · −11,6% | +36% | −11,8% | 2,0 | 1,33 → 1,45 | +29% | 0,32 |
> | 3184 | VWAP + GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+173% · −47,4%** | +41% · −10,4% | +28% | −13,3% | 1,1 | 1,06 → 1,32 | +24% | 0,17 |
> | 3185 | VWAP + Donchian + Pôr do sol + Tendência | **+176% · −47,2%** | +50% · −11,6% | +32% | −6,7% | 2,9 | 1,38 → 1,20 | +18% | 0,20 |
> | 3186 | MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+127% · −29,5%** | +38% · −6,4% | +28% | −9,6% | 1,6 | 0,58 → 1,65 | +14% | 0,00 |
> | 3187 | ADX + Donchian + MACD + Pullback | **+231% · −46,4%** | +59% · −10,9% | +35% | −5,9% | 3,7 | 1,37 → 1,64 | +22% | 0,13 |
> | 3188 | Donchian + GPS médias + IFR | **+224% · −38,4%** | +75% · −13,6% | +41% | −9,1% | 3,1 | 1,61 → 1,43 | +24% | 0,46 |
> | 3189 | ADX + VWAP + Rompe 200 + Bollinger | **+147% · −38,5%** | +43% · −9,4% | +26% | −7,9% | 1,6 | 0,91 → 1,39 | +17% | 0,23 |
> | 3190 | BB explosão + GPS médias + Pôr do sol + Quinta + Pullback ⚠️ | **+136% · −46,0%** | +37% · −9,2% | +25% | −4,6% | 2,6 | 1,70 → 1,10 | +15% | −0,03 |
> | 3191 | VWAP + Donchian + GPS médias + Quinta + Onda ⚠️ | **+187% · −45,3%** | +48% · −9,8% | +30% | −11,4% | 1,5 | 1,03 → 1,19 | +25% | 0,10 |
> | 3192 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+189% · −47,6%** | +44% · −8,9% | +28% | −4,2% | 3,7 | 1,25 → 1,72 | +22% | −0,01 |
> | 3193 | Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+153% · −25,1%** | +41% · −5,1% | +27% | −6,5% | 2,1 | 0,64 → 1,89 | +13% | 0,10 |
> | 3194 | Donchian + GPS médias + Tendência | **+222% · −49,9%** | +76% · −18,1% | +43% | −7,7% | 3,9 | 1,68 → 1,27 | +21% | 0,48 |
> | 3195 | ADX + Quinta + Pullback + Onda ⚠️ | **+139% · −31,1%** | +42% · −7,7% | +28% | −6,2% | 2,5 | 0,90 → 1,61 | +19% | −0,01 |
> | 3196 | VWAP + IFR | **+81% · −20,7%** | +46% · −10,1% | +32% | −13,7% | 1,4 | 1,00 → 1,24 | +16% | 0,15 |
> | 3197 | BB explosão + IFR + Rompe 200 + Tendência + Onda | **+214% · −51,5%** | +49% · −11,0% | +33% | −8,8% | 2,3 | 1,17 → 1,45 | +25% | 0,30 |
> | 3198 | BB explosão + GPS médias + 1ª vela 80 + Pullback + Tendência ⚠️ | **+244% · −58,6%** | +54% · −13,9% | +34% | −6,0% | 3,6 | 1,68 → 1,38 | +19% | 0,15 |
> | 3199 | ADX + VWAP + Quinta + Pullback + Tendência ⚠️ | **+197% · −51,8%** | +45% · −10,3% | +30% | −5,6% | 3,1 | 1,50 → 1,42 | +19% | 0,08 |
> | 3200 | BB explosão + Quinta + Pullback + Rompe 200 + Onda ⚠️ | **+110% · −37,8%** | +32% · −7,2% | +24% | −6,7% | 1,6 | 1,06 → 1,19 | +19% | 0,03 |
> | 3201 | BB explosão + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+170% · −33,8%** | +45% · −8,3% | +28% | −5,8% | 2,6 | 1,56 → 1,68 | +18% | 0,06 |
> | 3202 | Donchian + GPS médias + MACD + Tendência | **+258% · −53,4%** | +68% · −14,5% | +40% | −8,8% | 3,1 | 1,51 → 1,32 | +25% | 0,47 |
> | 3203 | VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+114% · −37,3%** | +32% · −7,5% | +24% | −11,3% | 1,0 | 0,60 → 1,34 | +18% | 0,13 |
> | 3204 | GPS médias + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+233% · −40,4%** | +47% · −7,8% | +29% | −7,6% | 2,1 | 1,06 → 1,63 | +18% | 0,05 |
> | 3205 | ADX + VWAP + Donchian + GPS médias + IFR | **+281% · −60,7%** | +65% · −13,9% | +36% | −8,8% | 2,7 | 1,29 → 1,45 | +24% | 0,34 |
> | 3206 | ADX + VWAP + Quinta + Bollinger + Onda ⚠️ | **+184% · −39,3%** | +43% · −7,1% | +27% | −7,5% | 1,9 | 0,65 → 1,55 | +17% | 0,12 |
> | 3207 | Donchian + MACD + Rompe 200 + Tendência | **+208% · −43,2%** | +54% · −11,7% | +35% | −9,0% | 2,4 | 1,48 → 1,32 | +21% | 0,36 |
> | 3208 | ADX + VWAP + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+173% · −44,0%** | +42% · −8,6% | +28% | −9,6% | 1,6 | 0,80 → 1,51 | +19% | 0,20 |
> | 3209 | VWAP + Donchian + GPS médias + MACD + Tendência | **+248% · −60,7%** | +59% · −13,9% | +36% | −11,7% | 2,0 | 1,35 → 1,21 | +22% | 0,44 |
> | 3210 | ADX + BB explosão + MACD + 1ª vela 80 + Pullback ⚠️ | **+215% · −54,7%** | +48% · −11,1% | +31% | −6,0% | 3,1 | 1,15 → 1,67 | +25% | 0,09 |

> [!example]- Combinações 3211 a 3240 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3211 | ADX + VWAP + GPS médias + Pôr do sol + Pullback | **+183% · −47,3%** | +45% · −9,1% | +28% | −6,2% | 2,5 | 1,36 → 1,31 | +20% | 0,05 |
> | 3212 | GPS médias + Bollinger + Tendência + Onda | **+247% · −41,3%** | +60% · −9,9% | +36% | −8,0% | 2,9 | 1,27 → 1,46 | +28% | 0,28 |
> | 3213 | ADX + GPS médias + IFR + Onda | **+234% · −47,1%** | +64% · −12,6% | +38% | −7,0% | 3,5 | 0,98 → 1,62 | +30% | 0,27 |
> | 3214 | VWAP + Quinta + Rompe 200 + Bollinger ⚠️ | **+86% · −27,2%** | +29% · −6,4% | +20% | −9,4% | 0,8 | 1,22 → 1,00 | +15% | 0,08 |
> | 3215 | ADX + Donchian + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+284% · −50,6%** | +60% · −10,5% | +34% | −6,2% | 3,4 | 1,36 → 1,56 | +25% | 0,22 |
> | 3216 | ADX + IFR + Pullback | **+172% · −31,8%** | +59% · −10,0% | +36% | −6,2% | 3,7 | 1,54 → 1,89 | +20% | 0,06 |
> | 3217 | ADX + IFR + Quinta ⚠️ | **+146% · −29,7%** | +53% · −9,9% | +33% | −6,3% | 3,2 | 1,16 → 1,89 | +19% | 0,11 |
> | 3218 | ADX + BB explosão + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+231% · −47,8%** | +51% · −9,4% | +32% | −5,2% | 3,6 | 1,14 → 1,76 | +23% | 0,20 |
> | 3219 | VWAP + GPS médias + Pullback | **+105% · −38,5%** | +43% · −13,7% | +28% | −12,6% | 1,2 | 1,48 → 0,87 | +15% | 0,11 |
> | 3220 | VWAP + BB explosão + IFR + Bollinger + Tendência | **+247% · −56,7%** | +52% · −12,1% | +33% | −8,0% | 2,5 | 1,38 → 1,39 | +18% | 0,37 |
> | 3221 | VWAP + Donchian + Quinta + Tendência ⚠️ | **+174% · −50,6%** | +49% · −11,6% | +32% | −6,5% | 3,0 | 1,43 → 1,19 | +17% | 0,14 |
> | 3222 | ADX + VWAP + IFR + Pôr do sol + Rompe 200 | **+173% · −39,1%** | +41% · −7,0% | +27% | −5,0% | 2,9 | 1,07 → 1,55 | +17% | 0,09 |
> | 3223 | Donchian + Quinta + Bollinger ⚠️ | **+153% · −23,4%** | +51% · −8,0% | +28% | −3,4% | 4,5 | 1,81 → 1,69 | +19% | −0,02 |
> | 3224 | VWAP + MACD + Pôr do sol + Quinta ⚠️ | **+70% · −25,9%** | +26% · −5,7% | +22% | −9,9% | 0,9 | 0,77 → 1,13 | +14% | 0,04 |
> | 3225 | ADX + BB explosão + IFR + Pôr do sol + Rompe 200 | **+187% · −49,5%** | +45% · −10,2% | +28% | −4,6% | 3,4 | 1,17 → 1,64 | +20% | 0,11 |
> | 3226 | ADX + BB explosão + IFR + Pullback + Onda | **+230% · −55,5%** | +52% · −11,2% | +33% | −6,4% | 3,2 | 1,05 → 1,66 | +25% | 0,16 |
> | 3227 | VWAP + Donchian + BB explosão + Pullback + Tendência | **+202% · −72,8%** | +51% · −16,8% | +33% | −7,9% | 2,5 | 1,47 → 1,15 | +13% | 0,32 |
> | 3228 | ADX + Donchian + BB explosão + Pôr do sol + Tendência | **+251% · −70,6%** | +59% · −18,3% | +34% | −6,5% | 3,3 | 1,36 → 1,50 | +20% | 0,22 |
> | 3229 | ADX + 1ª vela 80 + Pullback + Onda ⚠️ | **+181% · −35,1%** | +50% · −8,4% | +32% | −6,7% | 2,9 | 0,83 → 1,77 | +22% | 0,06 |
> | 3230 | Donchian + Pôr do sol + Tendência | **+171% · −36,0%** | +58% · −12,5% | +36% | −6,3% | 3,6 | 1,68 → 1,41 | +20% | 0,17 |
> | 3231 | ADX + VWAP + Pôr do sol + Quinta + Bollinger ⚠️ | **+160% · −35,8%** | +38% · −6,1% | +24% | −4,3% | 2,6 | 0,98 → 1,60 | +13% | 0,11 |
> | 3232 | Donchian + Pôr do sol + Quinta + Onda ⚠️ | **+139% · −32,4%** | +41% · −6,5% | +27% | −5,0% | 2,8 | 0,92 → 1,51 | +21% | −0,05 |
> | 3233 | VWAP + GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+127% · −38,5%** | +35% · −8,0% | +25% | −10,2% | 1,2 | 0,86 → 1,15 | +22% | −0,02 |
> | 3234 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+147% · −38,4%** | +37% · −6,1% | +25% | −5,0% | 2,5 | 0,83 → 1,65 | +14% | 0,04 |
> | 3235 | ADX + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+199% · −43,2%** | +45% · −8,3% | +31% | −7,4% | 2,4 | 0,64 → 1,71 | +18% | 0,16 |
> | 3236 | Donchian + GPS médias + MACD + Quinta ⚠️ | **+194% · −37,2%** | +53% · −9,6% | +32% | −9,3% | 2,0 | 1,43 → 1,30 | +23% | 0,12 |
> | 3237 | ADX + 1ª vela 80 + Pullback ⚠️ | **+143% · −30,9%** | +52% · −9,5% | +33% | −5,6% | 3,5 | 1,19 → 1,81 | +20% | −0,05 |
> | 3238 | VWAP + GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+202% · −44,6%** | +43% · −9,6% | +27% | −10,5% | 1,3 | 1,34 → 1,40 | +22% | 0,12 |
> | 3239 | GPS médias + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+168% · −38,4%** | +40% · −7,3% | +27% | −8,1% | 1,8 | 1,02 → 1,42 | +19% | 0,04 |
> | 3240 | ADX + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+236% · −42,8%** | +48% · −8,1% | +29% | −6,1% | 2,7 | 0,74 → 1,84 | +17% | 0,18 |

> [!example]- Combinações 3241 a 3270 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3241 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+235% · −60,7%** | +52% · −13,7% | +33% | −5,9% | 3,4 | 1,25 → 1,67 | +24% | 0,13 |
> | 3242 | VWAP + GPS médias + Quinta + Bollinger ⚠️ | **+144% · −38,0%** | +42% · −9,9% | +25% | −10,5% | 1,2 | 1,39 → 1,10 | +18% | 0,11 |
> | 3243 | ADX + Donchian + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+290% · −49,4%** | +60% · −10,1% | +34% | −5,3% | 3,9 | 1,33 → 1,66 | +27% | 0,12 |
> | 3244 | Donchian + Bollinger + Onda | **+183% · −26,8%** | +60% · −8,6% | +33% | −8,3% | 2,5 | 0,93 → 1,60 | +27% | 0,20 |
> | 3245 | ADX + Pôr do sol + Tendência | **+153% · −42,3%** | +55% · −13,7% | +35% | −8,2% | 2,7 | 1,32 → 1,64 | +24% | 0,10 |
> | 3246 | Donchian + GPS médias + Pôr do sol | **+158% · −31,6%** | +57% · −11,2% | +32% | −7,3% | 2,6 | 1,56 → 1,23 | +21% | 0,02 |
> | 3247 | VWAP + BB explosão + IFR + MACD + Onda | **+163% · −47,9%** | +44% · −10,5% | +31% | −12,8% | 1,4 | 0,72 → 1,35 | +24% | 0,34 |
> | 3248 | ADX + BB explosão + IFR + MACD + Pôr do sol | **+213% · −54,8%** | +49% · −10,9% | +31% | −5,9% | 3,2 | 1,01 → 1,69 | +23% | 0,16 |
> | 3249 | Donchian + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+184% · −39,3%** | +49% · −8,6% | +31% | −7,2% | 2,5 | 0,86 → 1,67 | +24% | 0,09 |
> | 3250 | ADX + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+268% · −51,6%** | +68% · −12,9% | +40% | −7,1% | 3,8 | 1,42 → 1,62 | +30% | 0,25 |
> | 3251 | VWAP + GPS médias + Bollinger + Tendência + Onda | **+247% · −48,2%** | +53% · −9,7% | +33% | −10,6% | 1,9 | 1,14 → 1,31 | +27% | 0,32 |
> | 3252 | ADX + VWAP + 1ª vela 80 + Tendência + Onda ⚠️ | **+233% · −53,1%** | +53% · −9,7% | +35% | −8,7% | 2,5 | 0,86 → 1,57 | +24% | 0,24 |
> | 3253 | VWAP + GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+232% · −47,5%** | +51% · −10,6% | +33% | −12,0% | 1,7 | 0,97 → 1,48 | +28% | 0,26 |
> | 3254 | Donchian + GPS médias + MACD + Bollinger | **+260% · −41,9%** | +63% · −11,3% | +34% | −10,5% | 2,0 | 1,45 → 1,41 | +25% | 0,35 |
> | 3255 | ADX + VWAP + IFR + MACD + Pôr do sol | **+200% · −40,6%** | +46% · −7,5% | +30% | −7,0% | 2,5 | 0,92 → 1,61 | +16% | 0,16 |
> | 3256 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+191% · −39,5%** | +41% · −8,0% | +27% | −8,4% | 1,7 | 1,06 → 1,68 | +17% | 0,14 |
> | 3257 | ADX + BB explosão + Pôr do sol + Quinta + Pullback ⚠️ | **+145% · −50,4%** | +38% · −9,9% | +25% | −4,8% | 2,5 | 1,41 → 1,53 | +18% | −0,00 |
> | 3258 | VWAP + BB explosão + IFR + Pullback + Onda | **+166% · −48,3%** | +42% · −9,9% | +30% | −10,1% | 1,7 | 0,99 → 1,33 | +22% | 0,19 |
> | 3259 | ADX + VWAP + Pôr do sol + Tendência + Onda | **+192% · −53,1%** | +47% · −9,9% | +31% | −8,1% | 2,3 | 0,86 → 1,46 | +21% | 0,15 |
> | 3260 | ADX + GPS médias + Tendência | **+205% · −53,9%** | +73% · −19,7% | +42% | −8,9% | 3,2 | 1,46 → 1,45 | +27% | 0,36 |
> | 3261 | Quinta + Bollinger + Onda ⚠️ | **+98% · −17,6%** | +38% · −5,3% | +25% | −6,5% | 1,9 | 0,60 → 1,64 | +14% | −0,07 |
> | 3262 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+250% · −56,9%** | +53% · −12,2% | +33% | −5,2% | 4,0 | 1,47 → 1,50 | +20% | 0,18 |
> | 3263 | ADX + Donchian + GPS médias + MACD + 1ª vela 80 ⚠️ | **+309% · −51,7%** | +65% · −10,9% | +37% | −8,4% | 2,8 | 1,23 → 1,60 | +30% | 0,28 |
> | 3264 | ADX + Donchian + Pôr do sol + Onda | **+197% · −44,0%** | +55% · −9,3% | +32% | −5,6% | 3,5 | 0,80 → 1,65 | +21% | 0,04 |
> | 3265 | VWAP + BB explosão + Quinta + Pullback + Rompe 200 ⚠️ | **+88% · −49,7%** | +28% · −10,1% | +22% | −8,5% | 1,0 | 1,33 → 0,83 | +11% | 0,06 |
> | 3266 | Donchian + BB explosão + GPS médias + Pullback + Tendência | **+252% · −69,5%** | +61% · −17,3% | +36% | −6,0% | 3,9 | 1,70 → 1,23 | +15% | 0,32 |
> | 3267 | VWAP + GPS médias + Tendência | **+144% · −47,3%** | +56% · −16,9% | +35% | −11,9% | 1,9 | 1,39 → 1,05 | +18% | 0,33 |
> | 3268 | ADX + VWAP + IFR + Quinta + Onda ⚠️ | **+192% · −39,3%** | +46% · −7,5% | +30% | −7,0% | 2,5 | 0,77 → 1,60 | +18% | 0,07 |
> | 3269 | ADX + BB explosão + GPS médias + Quinta + Pullback ⚠️ | **+184% · −60,3%** | +48% · −13,8% | +29% | −4,8% | 3,4 | 1,47 → 1,33 | +18% | 0,10 |
> | 3270 | BB explosão + MACD + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+96% · −32,8%** | +29% · −5,5% | +22% | −5,8% | 1,5 | 1,08 → 1,25 | +17% | 0,01 |

> [!example]- Combinações 3271 a 3300 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3271 | ADX + VWAP + Donchian + IFR + Rompe 200 | **+247% · −49,8%** | +54% · −10,2% | +32% | −6,5% | 3,0 | 1,21 → 1,50 | +20% | 0,25 |
> | 3272 | ADX + Donchian + Pôr do sol + Bollinger | **+242% · −37,3%** | +58% · −8,4% | +31% | −3,8% | 4,8 | 1,31 → 1,86 | +19% | 0,08 |
> | 3273 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+148% · −37,6%** | +38% · −6,7% | +25% | −6,6% | 1,9 | 0,84 → 1,54 | +17% | 0,09 |
> | 3274 | MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+128% · −31,5%** | +38% · −7,0% | +28% | −10,8% | 1,4 | 0,60 → 1,54 | +15% | 0,21 |
> | 3275 | ADX + BB explosão + Rompe 200 + Tendência | **+172% · −64,2%** | +52% · −19,7% | +33% | −8,6% | 2,3 | 1,28 → 1,39 | +18% | 0,26 |
> | 3276 | BB explosão + GPS médias + IFR + Pôr do sol + 1ª vela 80 ⚠️ | **+223% · −45,7%** | +50% · −10,0% | +31% | −8,1% | 2,3 | 1,38 → 1,53 | +23% | 0,14 |
> | 3277 | BB explosão + GPS médias + Pullback + Rompe 200 + Tendência | **+194% · −61,6%** | +48% · −14,9% | +31% | −5,6% | 3,2 | 1,75 → 1,13 | +14% | 0,22 |
> | 3278 | ADX + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+164% · −37,4%** | +46% · −8,9% | +30% | −6,0% | 2,9 | 0,77 → 1,85 | +20% | 0,10 |
> | 3279 | VWAP + GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+145% · −46,3%** | +37% · −10,1% | +25% | −10,3% | 1,2 | 1,28 → 1,18 | +20% | 0,07 |
> | 3280 | ADX + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+132% · −31,2%** | +40% · −7,0% | +26% | −3,5% | 3,8 | 0,86 → 1,92 | +17% | 0,02 |
> | 3281 | ADX + VWAP + Donchian + IFR + Onda | **+261% · −52,4%** | +59% · −10,1% | +35% | −8,4% | 2,7 | 0,91 → 1,57 | +20% | 0,27 |
> | 3282 | VWAP + BB explosão + MACD + Pullback + Tendência | **+166% · −61,8%** | +43% · −14,3% | +31% | −9,6% | 1,9 | 1,30 → 1,16 | +16% | 0,27 |
> | 3283 | GPS médias + MACD + Rompe 200 + Onda | **+142% · −36,0%** | +43% · −9,3% | +29% | −11,3% | 1,5 | 0,88 → 1,26 | +22% | 0,22 |
> | 3284 | VWAP + Donchian + MACD + Bollinger | **+193% · −39,8%** | +51% · −10,3% | +30% | −13,4% | 1,3 | 1,09 → 1,30 | +21% | 0,41 |
> | 3285 | ADX + BB explosão + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+253% · −50,5%** | +51% · −9,7% | +30% | −4,6% | 3,8 | 1,34 → 1,81 | +22% | 0,13 |
> | 3286 | VWAP + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+167% · −40,6%** | +38% · −8,6% | +26% | −12,1% | 1,1 | 0,71 → 1,46 | +19% | 0,25 |
> | 3287 | BB explosão + Pôr do sol + Rompe 200 + Bollinger + Tendência | **+186% · −47,0%** | +41% · −9,0% | +27% | −5,4% | 2,6 | 1,61 → 1,37 | +16% | 0,13 |
> | 3288 | ADX + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+134% · −33,5%** | +40% · −7,9% | +26% | −4,3% | 3,1 | 0,87 → 1,79 | +20% | 0,04 |
> | 3289 | ADX + VWAP + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+175% · −41,0%** | +42% · −7,6% | +28% | −8,7% | 1,8 | 0,74 → 1,61 | +16% | 0,16 |
> | 3290 | MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+185% · −33,0%** | +47% · −7,8% | +31% | −10,5% | 1,7 | 0,64 → 1,77 | +14% | 0,28 |
> | 3291 | BB explosão + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+221% · −47,7%** | +55% · −12,1% | +33% | −6,4% | 3,2 | 1,47 → 1,60 | +21% | 0,26 |
> | 3292 | ADX + VWAP + Donchian + Pullback + Tendência | **+274% · −62,9%** | +58% · −14,5% | +35% | −6,8% | 3,3 | 1,49 → 1,42 | +19% | 0,22 |
> | 3293 | GPS médias + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+199% · −41,9%** | +45% · −8,3% | +30% | −10,1% | 1,7 | 0,87 → 1,53 | +19% | 0,13 |
> | 3294 | ADX + Donchian + 1ª vela 80 + Onda ⚠️ | **+240% · −45,0%** | +63% · −10,4% | +36% | −6,5% | 3,7 | 0,81 → 1,74 | +25% | 0,18 |
> | 3295 | MACD + Quinta + Onda ⚠️ | **+80% · −23,8%** | +34% · −6,3% | +27% | −8,9% | 1,6 | 0,45 → 1,44 | +15% | −0,06 |
> | 3296 | VWAP + Donchian + GPS médias + Tendência + Onda | **+237% · −57,8%** | +59% · −12,7% | +36% | −11,0% | 2,1 | 1,17 → 1,24 | +26% | 0,37 |
> | 3297 | Donchian + BB explosão + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+277% · −44,2%** | +53% · −9,1% | +31% | −5,9% | 3,0 | 1,63 → 1,64 | +18% | 0,13 |
> | 3298 | ADX + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+95% · −30,3%** | +33% · −7,3% | +22% | −4,9% | 1,9 | 1,01 → 1,54 | +17% | 0,03 |
> | 3299 | VWAP + GPS médias + MACD + Rompe 200 | **+119% · −43,0%** | +39% · −11,6% | +27% | −15,0% | 0,9 | 1,08 → 0,98 | +20% | 0,26 |
> | 3300 | VWAP + GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+170% · −49,1%** | +41% · −11,0% | +28% | −14,1% | 1,1 | 1,10 → 1,23 | +23% | 0,26 |

> [!example]- Combinações 3301 a 3330 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3301 | GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+227% · −41,6%** | +59% · −10,5% | +38% | −8,1% | 3,1 | 1,16 → 1,49 | +27% | 0,24 |
> | 3302 | BB explosão + GPS médias + IFR + Bollinger + Tendência | **+306% · −59,8%** | +62% · −13,5% | +36% | −6,7% | 3,5 | 1,64 → 1,46 | +20% | 0,40 |
> | 3303 | ADX + Donchian + MACD + 1ª vela 80 ⚠️ | **+250% · −42,3%** | +63% · −9,4% | +36% | −7,0% | 3,4 | 1,04 → 1,74 | +24% | 0,24 |
> | 3304 | VWAP + Donchian + GPS médias + Pôr do sol | **+163% · −41,9%** | +49% · −11,0% | +29% | −11,4% | 1,4 | 1,30 → 1,07 | +18% | 0,11 |
> | 3305 | VWAP + Donchian + GPS médias + Pôr do sol + Onda | **+189% · −45,6%** | +48% · −9,8% | +30% | −11,5% | 1,5 | 0,99 → 1,21 | +25% | 0,14 |
> | 3306 | Donchian + BB explosão + Quinta + Pullback + Bollinger ⚠️ | **+219% · −46,0%** | +46% · −8,6% | +27% | −4,0% | 3,7 | 1,78 → 1,45 | +14% | 0,07 |
> | 3307 | VWAP + Donchian + GPS médias + MACD + Bollinger | **+258% · −51,8%** | +55% · −11,9% | +31% | −13,4% | 1,4 | 1,26 → 1,26 | +22% | 0,38 |
> | 3308 | ADX + Donchian + Quinta + Bollinger ⚠️ | **+239% · −38,5%** | +58% · −8,4% | +31% | −4,3% | 4,2 | 1,39 → 1,82 | +20% | 0,11 |
> | 3309 | ADX + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+270% · −45,2%** | +52% · −8,9% | +32% | −7,1% | 2,8 | 0,67 → 1,87 | +17% | 0,25 |
> | 3310 | ADX + BB explosão + MACD + Tendência | **+195% · −67,9%** | +58% · −21,4% | +36% | −10,1% | 2,3 | 1,12 → 1,47 | +24% | 0,38 |
> | 3311 | VWAP + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+199% · −51,5%** | +54% · −14,8% | +35% | −11,6% | 1,9 | 1,38 → 1,29 | +23% | 0,27 |
> | 3312 | ADX + BB explosão + Pullback + Tendência + Onda | **+225% · −66,6%** | +53% · −16,2% | +34% | −8,1% | 2,7 | 1,15 → 1,51 | +26% | 0,20 |
> | 3313 | VWAP + Donchian + Pôr do sol + Quinta ⚠️ | **+114% · −32,4%** | +36% · −7,4% | +24% | −7,3% | 1,5 | 1,22 → 1,13 | +15% | −0,00 |
> | 3314 | ADX + BB explosão + IFR + MACD + 1ª vela 80 ⚠️ | **+258% · −54,3%** | +55% · −10,4% | +35% | −7,3% | 3,0 | 1,01 → 1,76 | +26% | 0,26 |
> | 3315 | ADX + VWAP + Donchian + IFR + Pullback | **+281% · −50,1%** | +57% · −9,9% | +34% | −6,1% | 3,6 | 1,42 → 1,58 | +19% | 0,17 |
> | 3316 | ADX + VWAP + Donchian + Pôr do sol + Bollinger | **+248% · −45,3%** | +51% · −8,1% | +29% | −5,5% | 2,9 | 1,14 → 1,56 | +16% | 0,16 |
> | 3317 | ADX + BB explosão + IFR + 1ª vela 80 + Bollinger ⚠️ | **+305% · −50,1%** | +58% · −9,6% | +34% | −5,0% | 4,1 | 1,18 → 1,92 | +26% | 0,27 |
> | 3318 | ADX + BB explosão + GPS médias + IFR + Pullback | **+249% · −63,2%** | +58% · −15,0% | +34% | −5,1% | 4,2 | 1,50 → 1,51 | +21% | 0,23 |
> | 3319 | Donchian + BB explosão + GPS médias + Quinta + Pullback ⚠️ | **+197% · −57,9%** | +49% · −13,2% | +30% | −6,3% | 2,7 | 1,66 → 1,16 | +14% | 0,10 |
> | 3320 | ADX + VWAP + 1ª vela 80 + Pullback + Onda ⚠️ | **+190% · −45,1%** | +45% · −7,9% | +30% | −9,0% | 1,9 | 0,80 → 1,57 | +19% | 0,14 |
> | 3321 | ADX + Donchian + GPS médias + Bollinger + Onda | **+323% · −53,4%** | +66% · −11,4% | +35% | −6,9% | 3,2 | 1,10 → 1,59 | +29% | 0,27 |
> | 3322 | BB explosão + MACD + Pôr do sol + Pullback + Onda | **+138% · −36,9%** | +36% · −6,6% | +27% | −7,8% | 1,8 | 0,89 → 1,40 | +22% | 0,03 |
> | 3323 | BB explosão + Pôr do sol + Pullback + Rompe 200 + Onda | **+112% · −35,9%** | +32% · −7,0% | +24% | −6,6% | 1,6 | 1,00 → 1,22 | +20% | 0,03 |
> | 3324 | VWAP + GPS médias + Pullback + Bollinger + Onda | **+204% · −43,8%** | +45% · −9,2% | +28% | −11,3% | 1,4 | 1,14 → 1,26 | +25% | 0,20 |
> | 3325 | BB explosão + GPS médias + IFR + MACD + Pôr do sol | **+198% · −50,9%** | +48% · −10,5% | +31% | −9,4% | 1,9 | 1,26 → 1,38 | +23% | 0,19 |
> | 3326 | ADX + GPS médias + Quinta + Bollinger ⚠️ | **+207% · −40,1%** | +54% · −10,1% | +30% | −4,6% | 3,7 | 1,40 → 1,59 | +25% | 0,18 |
> | 3327 | VWAP + BB explosão + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+164% · −57,7%** | +42% · −13,9% | +29% | −10,1% | 1,6 | 1,22 → 1,23 | +17% | 0,25 |
> | 3328 | BB explosão + IFR + Pôr do sol + Bollinger | **+172% · −30,9%** | +46% · −7,7% | +28% | −5,1% | 3,0 | 1,42 → 1,74 | +19% | 0,10 |
> | 3329 | ADX + VWAP + GPS médias + IFR + 1ª vela 80 ⚠️ | **+267% · −52,2%** | +58% · −10,9% | +35% | −9,1% | 2,4 | 1,17 → 1,60 | +25% | 0,27 |
> | 3330 | Donchian + BB explosão + Quinta + Bollinger + Tendência ⚠️ | **+263% · −60,1%** | +54% · −13,6% | +32% | −5,3% | 3,6 | 1,63 → 1,42 | +16% | 0,22 |

> [!example]- Combinações 3331 a 3360 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3331 | VWAP + Donchian + Pullback + Onda | **+154% · −38,9%** | +46% · −9,9% | +30% | −11,8% | 1,5 | 1,00 → 1,21 | +20% | 0,22 |
> | 3332 | MACD + Pôr do sol + Onda | **+81% · −21,7%** | +34% · −6,8% | +27% | −9,1% | 1,5 | 0,38 → 1,47 | +15% | 0,06 |
> | 3333 | ADX + BB explosão + Pullback + Bollinger + Onda | **+224% · −55,6%** | +49% · −11,1% | +30% | −6,2% | 2,8 | 0,98 → 1,62 | +24% | 0,17 |
> | 3334 | ADX + Donchian + BB explosão + Quinta + Tendência ⚠️ | **+248% · −71,5%** | +58% · −18,9% | +35% | −6,4% | 3,4 | 1,41 → 1,48 | +19% | 0,23 |
> | 3335 | BB explosão + GPS médias + IFR + Quinta + Bollinger ⚠️ | **+234% · −46,0%** | +50% · −9,9% | +30% | −7,2% | 2,4 | 1,56 → 1,45 | +19% | 0,19 |
> | 3336 | VWAP + BB explosão + MACD + 1ª vela 80 + Tendência ⚠️ | **+186% · −58,5%** | +46% · −12,9% | +32% | −12,4% | 1,6 | 1,08 → 1,31 | +22% | 0,35 |
> | 3337 | Donchian + Pôr do sol + 1ª vela 80 + Pullback + Onda ⚠️ | **+226% · −41,3%** | +46% · −6,7% | +30% | −5,2% | 3,3 | 1,18 → 1,70 | +24% | 0,02 |
> | 3338 | ADX + Donchian + Quinta + Rompe 200 ⚠️ | **+173% · −36,8%** | +49% · −8,2% | +29% | −5,0% | 3,2 | 1,33 → 1,54 | +20% | 0,05 |
> | 3339 | ADX + Donchian + 1ª vela 80 + Rompe 200 ⚠️ | **+220% · −39,0%** | +57% · −8,4% | +33% | −5,6% | 3,6 | 1,19 → 1,72 | +24% | 0,14 |
> | 3340 | BB explosão + GPS médias + MACD + Pullback + Tendência | **+218% · −63,9%** | +52% · −15,1% | +34% | −7,4% | 2,9 | 1,57 → 1,25 | +19% | 0,24 |
> | 3341 | BB explosão + Pôr do sol + Pullback + Bollinger | **+125% · −30,1%** | +37% · −6,3% | +24% | −3,4% | 3,2 | 1,71 → 1,46 | +15% | −0,03 |
> | 3342 | VWAP + Donchian + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+195% · −43,9%** | +42% · −9,3% | +28% | −7,8% | 1,9 | 1,45 → 1,44 | +19% | 0,04 |
> | 3343 | GPS médias + Pôr do sol + Bollinger + Onda | **+173% · −35,0%** | +46% · −8,2% | +28% | −7,8% | 1,9 | 0,99 → 1,47 | +20% | 0,05 |
> | 3344 | ADX + VWAP + Donchian + GPS médias + Bollinger | **+287% · −55,8%** | +62% · −12,1% | +33% | −8,7% | 2,3 | 1,27 → 1,41 | +22% | 0,34 |
> | 3345 | ADX + Donchian + BB explosão + IFR | **+237% · −62,3%** | +67% · −17,8% | +38% | −7,0% | 3,6 | 1,21 → 1,60 | +22% | 0,41 |
> | 3346 | VWAP + BB explosão + MACD + 1ª vela 80 + Pullback ⚠️ | **+151% · −48,4%** | +39% · −10,7% | +28% | −12,8% | 1,2 | 1,09 → 1,30 | +19% | 0,17 |
> | 3347 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+206% · −45,5%** | +46% · −9,0% | +28% | −4,1% | 3,8 | 1,25 → 1,69 | +23% | 0,03 |
> | 3348 | GPS médias + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+235% · −41,3%** | +47% · −8,1% | +29% | −7,6% | 2,1 | 1,01 → 1,66 | +18% | 0,11 |
> | 3349 | ADX + BB explosão + GPS médias + Pôr do sol + Pullback | **+187% · −59,0%** | +48% · −13,3% | +29% | −4,6% | 3,5 | 1,42 → 1,36 | +19% | 0,06 |
> | 3350 | ADX + BB explosão + IFR + Rompe 200 + Onda | **+201% · −52,4%** | +49% · −11,1% | +31% | −7,2% | 2,6 | 0,85 → 1,59 | +26% | 0,22 |
> | 3351 | GPS médias + Pôr do sol | **+77% · −21,6%** | +44% · −10,3% | +27% | −7,2% | 1,9 | 1,48 → 1,03 | +17% | −0,24 |
> | 3352 | Donchian + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+184% · −34,9%** | +46% · −7,4% | +29% | −3,1% | 5,4 | 1,79 → 1,79 | +22% | −0,06 |
> | 3353 | Donchian + GPS médias + Bollinger | **+216% · −36,9%** | +70% · −12,7% | +35% | −8,9% | 2,5 | 1,65 → 1,36 | +21% | 0,30 |
> | 3354 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+205% · −44,9%** | +44% · −9,7% | +27% | −10,7% | 1,3 | 1,28 → 1,42 | +23% | 0,17 |
> | 3355 | ADX + VWAP + IFR + MACD + Onda | **+215% · −47,0%** | +50% · −9,4% | +33% | −9,7% | 2,1 | 0,70 → 1,58 | +20% | 0,28 |
> | 3356 | ADX + BB explosão + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+230% · −62,4%** | +52% · −14,5% | +33% | −7,2% | 2,8 | 1,28 → 1,58 | +22% | 0,20 |
> | 3357 | ADX + GPS médias + MACD + Quinta ⚠️ | **+175% · −41,7%** | +51% · −10,7% | +31% | −6,3% | 2,9 | 1,15 → 1,49 | +26% | 0,10 |
> | 3358 | VWAP + Donchian + GPS médias + Quinta ⚠️ | **+161% · −43,7%** | +49% · −11,7% | +29% | −11,1% | 1,5 | 1,36 → 1,05 | +17% | 0,08 |
> | 3359 | ADX + Donchian + 1ª vela 80 + Quinta ⚠️ | **+220% · −40,4%** | +56% · −8,3% | +33% | −4,7% | 4,2 | 1,20 → 1,82 | +22% | 0,00 |
> | 3360 | BB explosão + MACD + Pullback + Rompe 200 | **+104% · −40,7%** | +34% · −10,2% | +25% | −7,4% | 1,7 | 1,34 → 1,16 | +15% | 0,08 |

> [!example]- Combinações 3361 a 3390 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3361 | ADX + VWAP + MACD + Quinta + Rompe 200 ⚠️ | **+132% · −40,6%** | +36% · −7,6% | +25% | −7,3% | 1,7 | 0,84 → 1,35 | +17% | 0,08 |
> | 3362 | Donchian + BB explosão + Pullback + Tendência | **+208% · −64,5%** | +58% · −18,7% | +36% | −6,5% | 3,5 | 1,69 → 1,28 | +13% | 0,30 |
> | 3363 | ADX + VWAP + Donchian + 1ª vela 80 + Quinta ⚠️ | **+226% · −50,5%** | +50% · −7,9% | +30% | −6,6% | 2,7 | 1,08 → 1,59 | +18% | 0,08 |
> | 3364 | VWAP + GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+187% · −45,6%** | +44% · −9,9% | +30% | −12,6% | 1,4 | 1,05 → 1,32 | +26% | 0,16 |
> | 3365 | VWAP + MACD + Tendência | **+116% · −37,8%** | +46% · −13,3% | +33% | −13,0% | 1,6 | 1,07 → 1,14 | +23% | 0,47 |
> | 3366 | VWAP + BB explosão + IFR + 1ª vela 80 + Bollinger ⚠️ | **+229% · −46,3%** | +48% · −10,3% | +30% | −10,4% | 1,7 | 1,16 → 1,57 | +21% | 0,29 |
> | 3367 | ADX + VWAP + Rompe 200 + Bollinger + Onda | **+184% · −41,4%** | +43% · −7,7% | +27% | −9,0% | 1,6 | 0,67 → 1,46 | +19% | 0,22 |
> | 3368 | VWAP + BB explosão + IFR + Pôr do sol + Rompe 200 | **+128% · −43,5%** | +35% · −8,4% | +25% | −8,4% | 1,4 | 1,12 → 1,19 | +15% | 0,12 |
> | 3369 | VWAP + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+126% · −33,6%** | +37% · −8,3% | +24% | −11,1% | 1,0 | 1,04 → 1,39 | +20% | 0,25 |
> | 3370 | GPS médias + Pullback + Onda | **+127% · −30,7%** | +49% · −9,2% | +31% | −9,3% | 2,0 | 1,14 → 1,23 | +20% | 0,10 |
> | 3371 | VWAP + BB explosão + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+126% · −52,5%** | +34% · −12,2% | +25% | −10,8% | 1,1 | 1,23 → 1,15 | +14% | 0,13 |
> | 3372 | Donchian + BB explosão + IFR + Rompe 200 + Bollinger | **+266% · −45,8%** | +54% · −9,6% | +31% | −6,4% | 2,8 | 1,52 → 1,52 | +17% | 0,31 |
> | 3373 | ADX + VWAP + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+224% · −49,5%** | +51% · −10,4% | +31% | −8,0% | 2,3 | 1,29 → 1,47 | +23% | 0,14 |
> | 3374 | GPS médias + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+196% · −43,9%** | +45% · −8,9% | +30% | −11,0% | 1,6 | 0,92 → 1,45 | +20% | 0,22 |
> | 3375 | ADX + VWAP + Donchian + Quinta + Bollinger ⚠️ | **+245% · −46,3%** | +51% · −8,1% | +29% | −5,5% | 2,9 | 1,19 → 1,54 | +17% | 0,16 |
> | 3376 | VWAP + Donchian + GPS médias + Tendência | **+218% · −58,8%** | +63% · −16,5% | +37% | −10,5% | 2,3 | 1,45 → 1,14 | +18% | 0,41 |
> | 3377 | MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+129% · −29,0%** | +38% · −6,5% | +28% | −9,4% | 1,6 | 0,52 → 1,67 | +14% | 0,13 |
> | 3378 | VWAP + MACD + Quinta ⚠️ | **+60% · −26,2%** | +29% · −8,3% | +23% | −13,8% | 0,8 | 0,70 → 1,03 | +15% | 0,05 |
> | 3379 | VWAP + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+123% · −34,4%** | +32% · −6,7% | +23% | −9,9% | 1,0 | 0,75 → 1,25 | +19% | 0,08 |
> | 3380 | VWAP + GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+125% · −41,7%** | +35% · −8,9% | +25% | −11,6% | 1,0 | 0,92 → 1,05 | +24% | 0,06 |
> | 3381 | Donchian + Rompe 200 + Tendência + Onda | **+204% · −39,6%** | +55% · −10,3% | +35% | −9,1% | 2,4 | 1,21 → 1,37 | +27% | 0,31 |
> | 3382 | ADX + BB explosão + Pullback + Bollinger | **+187% · −54,7%** | +51% · −14,9% | +29% | −5,2% | 3,2 | 1,37 → 1,60 | +18% | 0,19 |
> | 3383 | BB explosão + GPS médias + Quinta + Pullback + Rompe 200 ⚠️ | **+134% · −50,3%** | +37% · −10,7% | +25% | −6,0% | 2,0 | 1,70 → 0,98 | +13% | 0,07 |
> | 3384 | ADX + GPS médias + Quinta + Rompe 200 ⚠️ | **+148% · −42,2%** | +45% · −11,0% | +27% | −5,6% | 2,6 | 1,34 → 1,34 | +22% | 0,09 |
> | 3385 | ADX + BB explosão + Quinta + Tendência + Onda ⚠️ | **+200% · −64,8%** | +50% · −15,4% | +33% | −7,9% | 2,5 | 0,98 → 1,51 | +26% | 0,13 |
> | 3386 | ADX + VWAP + Rompe 200 + Tendência | **+159% · −50,7%** | +48% · −13,3% | +31% | −8,9% | 2,1 | 1,18 → 1,30 | +20% | 0,20 |
> | 3387 | Donchian + MACD + 1ª vela 80 ⚠️ | **+173% · −29,7%** | +58% · −9,1% | +35% | −11,2% | 2,0 | 1,14 → 1,58 | +28% | 0,31 |
> | 3388 | BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+160% · −33,9%** | +37% · −6,3% | +24% | −5,5% | 2,0 | 1,26 → 1,64 | +18% | 0,08 |
> | 3389 | GPS médias + MACD + Bollinger + Onda | **+200% · −38,9%** | +52% · −10,3% | +32% | −11,1% | 1,7 | 0,92 → 1,46 | +21% | 0,28 |
> | 3390 | Donchian + BB explosão + MACD + Quinta + Pullback ⚠️ | **+184% · −50,6%** | +44% · −10,2% | +29% | −6,3% | 2,5 | 1,47 → 1,34 | +17% | 0,08 |

> [!example]- Combinações 3391 a 3420 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3391 | ADX + Donchian + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+304% · −59,2%** | +61% · −12,9% | +33% | −5,7% | 3,6 | 1,19 → 1,73 | +23% | 0,28 |
> | 3392 | VWAP + MACD + Pôr do sol + Bollinger | **+114% · −32,3%** | +35% · −7,8% | +24% | −11,5% | 1,0 | 0,84 → 1,31 | +16% | 0,20 |
> | 3393 | Donchian + BB explosão + Pullback + Tendência + Onda | **+235% · −63,2%** | +55% · −14,7% | +35% | −7,3% | 3,0 | 1,30 → 1,37 | +22% | 0,28 |
> | 3394 | BB explosão + GPS médias + IFR + 1ª vela 80 + Rompe 200 ⚠️ | **+218% · −47,9%** | +50% · −10,5% | +31% | −8,9% | 2,1 | 1,41 → 1,44 | +21% | 0,28 |
> | 3395 | ADX + VWAP + Pullback + Rompe 200 + Onda | **+148% · −40,4%** | +39% · −7,1% | +27% | −8,3% | 1,7 | 0,85 → 1,33 | +18% | 0,14 |
> | 3396 | Donchian + BB explosão + Pôr do sol + Quinta + Pullback ⚠️ | **+161% · −43,6%** | +39% · −8,3% | +26% | −3,1% | 4,2 | 1,69 → 1,33 | +14% | −0,01 |
> | 3397 | ADX + GPS médias + Pullback | **+160% · −43,0%** | +59% · −15,3% | +34% | −6,2% | 3,4 | 1,52 → 1,41 | +23% | 0,12 |
> | 3398 | ADX + BB explosão + IFR + MACD + Onda | **+224% · −59,0%** | +54% · −12,1% | +34% | −8,4% | 2,6 | 0,77 → 1,64 | +26% | 0,28 |
> | 3399 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+147% · −45,2%** | +37% · −9,9% | +25% | −10,5% | 1,2 | 1,22 → 1,20 | +21% | 0,12 |
> | 3400 | ADX + BB explosão + MACD + 1ª vela 80 + Tendência ⚠️ | **+255% · −65,9%** | +56% · −15,9% | +36% | −8,3% | 2,8 | 1,15 → 1,61 | +27% | 0,28 |
> | 3401 | BB explosão + Pullback + Bollinger + Tendência + Onda | **+235% · −52,6%** | +49% · −10,7% | +32% | −6,9% | 2,8 | 1,31 → 1,47 | +23% | 0,20 |
> | 3402 | VWAP + Donchian + GPS médias + MACD + Onda | **+204% · −52,2%** | +52% · −11,9% | +33% | −14,7% | 1,3 | 0,93 → 1,23 | +28% | 0,37 |
> | 3403 | Donchian + GPS médias + Rompe 200 + Onda | **+186% · −40,7%** | +54% · −11,0% | +32% | −10,2% | 1,9 | 1,13 → 1,24 | +27% | 0,27 |
> | 3404 | BB explosão + IFR + 1ª vela 80 + Onda ⚠️ | **+183% · −36,3%** | +51% · −9,3% | +34% | −9,4% | 2,2 | 0,82 → 1,66 | +21% | 0,21 |
> | 3405 | ADX + VWAP + Donchian + 1ª vela 80 + Rompe 200 ⚠️ | **+224% · −49,5%** | +50% · −8,2% | +30% | −7,8% | 2,3 | 1,07 → 1,51 | +20% | 0,20 |
> | 3406 | Donchian + BB explosão + GPS médias + IFR + Pôr do sol | **+235% · −57,6%** | +56% · −12,8% | +33% | −7,9% | 2,5 | 1,45 → 1,36 | +19% | 0,23 |
> | 3407 | ADX + VWAP + IFR + Pôr do sol + Onda | **+194% · −39,3%** | +46% · −7,4% | +30% | −7,0% | 2,5 | 0,72 → 1,62 | +17% | 0,11 |
> | 3408 | VWAP + Donchian + Rompe 200 + Tendência + Onda | **+202% · −51,4%** | +48% · −11,3% | +32% | −9,8% | 2,0 | 1,09 → 1,23 | +24% | 0,31 |
> | 3409 | BB explosão + GPS médias + MACD + Quinta + Pullback ⚠️ | **+159% · −51,5%** | +41% · −11,0% | +28% | −7,8% | 1,9 | 1,50 → 1,19 | +18% | 0,04 |
> | 3410 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+209% · −44,1%** | +46% · −9,3% | +29% | −4,9% | 3,3 | 1,55 → 1,55 | +18% | 0,01 |
> | 3411 | VWAP + BB explosão + MACD + Quinta + Pullback ⚠️ | **+111% · −46,0%** | +32% · −9,3% | +25% | −10,1% | 1,2 | 1,15 → 1,09 | +15% | 0,07 |
> | 3412 | VWAP + BB explosão + Pullback + Bollinger + Tendência | **+200% · −58,1%** | +45% · −12,8% | +30% | −7,5% | 2,2 | 1,52 → 1,22 | +14% | 0,26 |
> | 3413 | VWAP + GPS médias + MACD + Quinta + Onda ⚠️ | **+147% · −45,8%** | +39% · −9,9% | +28% | −13,1% | 1,1 | 0,82 → 1,21 | +25% | 0,10 |
> | 3414 | Donchian + 1ª vela 80 + Rompe 200 ⚠️ | **+144% · −34,1%** | +51% · −11,7% | +31% | −6,7% | 2,7 | 1,40 → 1,52 | +22% | 0,17 |
> | 3415 | Donchian + Pôr do sol + Quinta ⚠️ | **+103% · −25,3%** | +40% · −7,0% | +25% | −2,8% | 4,4 | 1,66 → 1,51 | +19% | −0,05 |
> | 3416 | Donchian + BB explosão + 1ª vela 80 + Quinta + Tendência ⚠️ | **+247% · −58,2%** | +53% · −12,8% | +33% | −5,2% | 4,0 | 1,52 → 1,48 | +19% | 0,13 |
> | 3417 | BB explosão + GPS médias + IFR + MACD + 1ª vela 80 ⚠️ | **+242% · −51,4%** | +54% · −12,0% | +34% | −11,3% | 1,9 | 1,25 → 1,49 | +26% | 0,32 |
> | 3418 | ADX + BB explosão + GPS médias + Quinta + Tendência ⚠️ | **+218% · −70,5%** | +55% · −17,9% | +34% | −6,1% | 3,4 | 1,42 → 1,37 | +20% | 0,22 |
> | 3419 | VWAP + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+196% · −44,9%** | +42% · −9,6% | +29% | −13,6% | 1,2 | 0,63 → 1,54 | +18% | 0,34 |
> | 3420 | ADX + Donchian + Quinta + Pullback ⚠️ | **+200% · −41,3%** | +52% · −8,8% | +31% | −4,7% | 3,9 | 1,65 → 1,67 | +20% | 0,01 |

> [!example]- Combinações 3421 a 3450 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3421 | ADX + BB explosão + GPS médias + Pullback + Rompe 200 | **+182% · −62,1%** | +48% · −14,8% | +29% | −5,7% | 2,8 | 1,43 → 1,26 | +17% | 0,19 |
> | 3422 | Donchian + BB explosão + Pôr do sol + Bollinger + Tendência | **+266% · −58,8%** | +54% · −13,0% | +32% | −5,4% | 3,5 | 1,57 → 1,45 | +17% | 0,21 |
> | 3423 | ADX + VWAP + Pôr do sol + Pullback + Tendência | **+200% · −51,1%** | +45% · −9,7% | +30% | −5,7% | 3,1 | 1,45 → 1,43 | +19% | 0,08 |
> | 3424 | ADX + GPS médias + Pôr do sol + Bollinger | **+210% · −40,9%** | +54% · −10,2% | +30% | −4,3% | 3,9 | 1,32 → 1,63 | +25% | 0,13 |
> | 3425 | ADX + BB explosão + Quinta + Rompe 200 + Bollinger ⚠️ | **+174% · −49,5%** | +42% · −9,6% | +25% | −4,5% | 2,7 | 1,17 → 1,54 | +18% | 0,13 |
> | 3426 | Donchian + Quinta + Tendência ⚠️ | **+169% · −37,9%** | +58% · −12,6% | +36% | −6,3% | 3,6 | 1,76 → 1,38 | +19% | 0,12 |
> | 3427 | ADX + VWAP + MACD + Bollinger + Onda | **+211% · −45,7%** | +47% · −9,0% | +30% | −10,5% | 1,6 | 0,60 → 1,55 | +19% | 0,32 |
> | 3428 | VWAP + Donchian + 1ª vela 80 + Rompe 200 ⚠️ | **+155% · −46,6%** | +44% · −13,0% | +28% | −11,7% | 1,3 | 1,16 → 1,27 | +19% | 0,24 |
> | 3429 | 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+153% · −27,7%** | +41% · −6,3% | +27% | −8,2% | 1,7 | 0,73 → 1,71 | +14% | 0,19 |
> | 3430 | VWAP + Pôr do sol + Rompe 200 + Bollinger + Onda | **+125% · −34,5%** | +32% · −6,8% | +23% | −10,0% | 1,0 | 0,69 → 1,27 | +19% | 0,12 |
> | 3431 | VWAP + Donchian + MACD + 1ª vela 80 ⚠️ | **+180% · −41,6%** | +50% · −11,0% | +32% | −15,1% | 1,3 | 1,00 → 1,37 | +22% | 0,37 |
> | 3432 | ADX + GPS médias + MACD + Pôr do sol | **+178% · −40,5%** | +51% · −10,2% | +31% | −6,2% | 2,9 | 1,09 → 1,52 | +25% | 0,08 |
> | 3433 | Donchian + BB explosão + Pôr do sol + Pullback + Bollinger | **+222% · −44,3%** | +46% · −8,0% | +27% | −3,8% | 3,8 | 1,70 → 1,49 | +15% | 0,05 |
> | 3434 | ADX + BB explosão + GPS médias + IFR + Quinta ⚠️ | **+220% · −61,1%** | +55% · −14,3% | +32% | −5,4% | 3,6 | 1,31 → 1,50 | +22% | 0,21 |
> | 3435 | ADX + Donchian + Pôr do sol + Rompe 200 | **+176% · −38,0%** | +49% · −7,6% | +29% | −4,6% | 3,4 | 1,25 → 1,57 | +20% | 0,02 |
> | 3436 | VWAP + GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+202% · −46,7%** | +44% · −10,3% | +27% | −11,5% | 1,2 | 1,31 → 1,31 | +21% | 0,26 |
> | 3437 | Donchian + GPS médias + MACD + Onda | **+210% · −43,2%** | +59% · −11,6% | +35% | −12,0% | 1,9 | 1,00 → 1,35 | +31% | 0,35 |
> | 3438 | ADX + VWAP + Donchian + MACD + 1ª vela 80 ⚠️ | **+250% · −50,7%** | +55% · −9,3% | +33% | −10,1% | 2,0 | 0,96 → 1,55 | +20% | 0,30 |
> | 3439 | ADX + GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+204% · −46,7%** | +46% · −9,4% | +29% | −4,6% | 3,4 | 1,28 → 1,58 | +24% | 0,07 |
> | 3440 | GPS médias + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+233% · −42,8%** | +47% · −8,6% | +29% | −8,8% | 1,8 | 1,06 → 1,55 | +19% | 0,21 |
> | 3441 | ADX + VWAP + Donchian + IFR + Quinta ⚠️ | **+250% · −46,7%** | +54% · −9,4% | +32% | −5,7% | 3,4 | 1,22 → 1,58 | +18% | 0,14 |
> | 3442 | ADX + VWAP + IFR + Pôr do sol + Quinta ⚠️ | **+173% · −37,7%** | +41% · −6,7% | +27% | −4,2% | 3,5 | 1,08 → 1,66 | +14% | 0,05 |
> | 3443 | ADX + VWAP + Pullback + Bollinger | **+171% · −39,5%** | +47% · −8,4% | +28% | −6,4% | 2,4 | 1,25 → 1,49 | +15% | 0,21 |
> | 3444 | Donchian + BB explosão + Quinta + Pullback + Onda ⚠️ | **+177% · −47,3%** | +44% · −9,4% | +29% | −6,6% | 2,4 | 1,17 → 1,35 | +21% | 0,06 |
> | 3445 | VWAP + GPS médias + Pôr do sol + Bollinger | **+146% · −38,3%** | +42% · −9,9% | +25% | −10,7% | 1,2 | 1,31 → 1,14 | +20% | 0,12 |
> | 3446 | Donchian + GPS médias + Bollinger + Onda | **+253% · −44,6%** | +63% · −11,1% | +34% | −9,5% | 2,3 | 1,16 → 1,44 | +31% | 0,26 |
> | 3447 | ADX + Donchian + BB explosão + Pullback + Rompe 200 | **+212% · −62,0%** | +51% · −14,4% | +30% | −4,6% | 3,8 | 1,43 → 1,41 | +16% | 0,18 |
> | 3448 | Donchian + MACD + Tendência | **+195% · −44,4%** | +66% · −16,4% | +41% | −10,4% | 2,7 | 1,41 → 1,37 | +25% | 0,57 |
> | 3449 | BB explosão + MACD + Pôr do sol + Bollinger + Tendência | **+215% · −51,6%** | +46% · −10,4% | +30% | −6,7% | 2,5 | 1,36 → 1,47 | +21% | 0,21 |
> | 3450 | VWAP + GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+232% · −51,7%** | +48% · −11,9% | +30% | −14,3% | 1,2 | 1,15 → 1,40 | +25% | 0,34 |

> [!example]- Combinações 3451 a 3480 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3451 | ADX + VWAP + BB explosão + IFR + Pullback | **+201% · −60,1%** | +49% · −13,4% | +31% | −6,6% | 2,8 | 1,23 → 1,46 | +18% | 0,19 |
> | 3452 | VWAP + BB explosão + IFR + Quinta + Bollinger ⚠️ | **+179% · −41,1%** | +41% · −8,6% | +27% | −8,4% | 1,6 | 1,23 → 1,39 | +17% | 0,16 |
> | 3453 | VWAP + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+78% · −29,7%** | +26% · −5,5% | +21% | −9,1% | 0,9 | 0,62 → 1,09 | +17% | 0,01 |
> | 3454 | GPS médias + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+265% · −45,4%** | +52% · −9,8% | +32% | −11,0% | 1,7 | 0,95 → 1,61 | +19% | 0,27 |
> | 3455 | VWAP + Pullback + Bollinger + Onda | **+133% · −31,8%** | +39% · −7,9% | +26% | −11,5% | 1,2 | 0,89 → 1,30 | +19% | 0,21 |
> | 3456 | VWAP + BB explosão + Pôr do sol + Pullback + Rompe 200 | **+90% · −45,7%** | +29% · −9,8% | +22% | −8,7% | 1,0 | 1,26 → 0,86 | +11% | 0,05 |
> | 3457 | VWAP + IFR + Bollinger + Onda | **+181% · −32,5%** | +47% · −8,1% | +30% | −10,3% | 1,7 | 0,81 → 1,54 | +21% | 0,27 |
> | 3458 | ADX + VWAP + BB explosão + IFR + Tendência | **+233% · −69,7%** | +57% · −17,5% | +36% | −8,7% | 2,6 | 1,21 → 1,46 | +20% | 0,36 |
> | 3459 | GPS médias + Quinta + Bollinger + Onda ⚠️ | **+170% · −34,2%** | +46% · −8,2% | +28% | −7,9% | 1,9 | 1,06 → 1,44 | +21% | 0,02 |
> | 3460 | Donchian + Rompe 200 + Tendência | **+168% · −44,7%** | +59% · −12,8% | +36% | −8,4% | 2,7 | 1,70 → 1,25 | +17% | 0,34 |
> | 3461 | ADX + VWAP + MACD + Pullback + Onda | **+175% · −47,9%** | +43% · −8,2% | +30% | −9,8% | 1,7 | 0,77 → 1,45 | +18% | 0,17 |
> | 3462 | BB explosão + GPS médias + IFR + Pullback + Onda | **+214% · −54,1%** | +51% · −11,7% | +33% | −8,2% | 2,4 | 1,25 → 1,39 | +25% | 0,20 |
> | 3463 | GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+171% · −39,0%** | +40% · −7,2% | +27% | −8,0% | 1,8 | 0,97 → 1,44 | +19% | 0,10 |
> | 3464 | ADX + BB explosão + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+303% · −62,5%** | +59% · −14,4% | +35% | −6,7% | 3,3 | 1,32 → 1,73 | +24% | 0,29 |
> | 3465 | VWAP + Donchian + 1ª vela 80 + Quinta ⚠️ | **+154% · −39,8%** | +44% · −10,4% | +28% | −10,4% | 1,5 | 1,17 → 1,38 | +19% | 0,02 |
> | 3466 | BB explosão + IFR + MACD + Rompe 200 | **+142% · −40,7%** | +43% · −10,1% | +29% | −9,0% | 1,8 | 1,13 → 1,39 | +20% | 0,28 |
> | 3467 | Donchian + GPS médias + MACD + Rompe 200 | **+193% · −40,9%** | +54% · −10,2% | +32% | −10,4% | 1,8 | 1,40 → 1,21 | +22% | 0,31 |
> | 3468 | ADX + BB explosão + Pôr do sol + Tendência + Onda | **+203% · −64,1%** | +50% · −14,8% | +32% | −7,9% | 2,5 | 0,94 → 1,53 | +26% | 0,14 |
> | 3469 | Donchian + BB explosão + MACD + Pôr do sol + Pullback | **+187% · −49,0%** | +44% · −10,0% | +29% | −6,3% | 2,5 | 1,41 → 1,36 | +18% | 0,07 |
> | 3470 | ADX + VWAP + Donchian + Tendência + Onda | **+252% · −64,0%** | +60% · −14,1% | +36% | −9,3% | 2,5 | 1,00 → 1,44 | +24% | 0,32 |
> | 3471 | Donchian + IFR | **+155% · −27,2%** | +77% · −14,2% | +43% | −7,7% | 3,9 | 1,54 → 1,62 | +24% | 0,48 |
> | 3472 | ADX + GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+251% · −50,1%** | +54% · −10,2% | +33% | −6,3% | 3,3 | 1,09 → 1,63 | +26% | 0,11 |
> | 3473 | VWAP + Donchian + Rompe 200 + Tendência | **+173% · −57,1%** | +50% · −13,8% | +32% | −8,2% | 2,3 | 1,41 → 1,10 | +15% | 0,32 |
> | 3474 | ADX + Donchian + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+231% · −58,7%** | +54% · −13,0% | +31% | −5,8% | 3,2 | 1,15 → 1,57 | +21% | 0,21 |
> | 3475 | ADX + GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+273% · −48,4%** | +53% · −9,9% | +30% | −4,7% | 3,7 | 1,34 → 1,77 | +23% | 0,14 |
> | 3476 | ADX + GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+297% · −53,5%** | +62% · −11,2% | +37% | −7,3% | 3,3 | 1,00 → 1,75 | +27% | 0,24 |
> | 3477 | BB explosão + Quinta + Pullback + Bollinger + Onda ⚠️ | **+162% · −37,2%** | +38% · −6,5% | +25% | −6,0% | 2,1 | 1,12 → 1,47 | +22% | 0,03 |
> | 3478 | BB explosão + GPS médias + Pôr do sol + Pullback + Rompe 200 | **+136% · −48,7%** | +37% · −10,1% | +25% | −6,0% | 2,0 | 1,63 → 1,01 | +14% | 0,04 |
> | 3479 | Donchian + BB explosão + GPS médias + IFR + Bollinger | **+300% · −57,6%** | +64% · −12,6% | +35% | −8,9% | 2,5 | 1,51 → 1,43 | +19% | 0,41 |
> | 3480 | Donchian + GPS médias + Quinta ⚠️ | **+156% · −33,8%** | +57% · −11,2% | +32% | −7,3% | 2,6 | 1,64 → 1,19 | +19% | 0,01 |

> [!example]- Combinações 3481 a 3510 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3481 | ADX + BB explosão + MACD + Quinta + Bollinger ⚠️ | **+203% · −55,9%** | +46% · −11,6% | +28% | −5,7% | 2,6 | 1,01 → 1,64 | +22% | 0,18 |
> | 3482 | VWAP + Donchian + Pullback | **+122% · −37,9%** | +47% · −12,8% | +30% | −10,6% | 1,6 | 1,43 → 1,03 | +13% | 0,17 |
> | 3483 | ADX + GPS médias + Tendência + Onda | **+233% · −55,0%** | +65% · −14,3% | +39% | −9,4% | 2,8 | 1,10 → 1,49 | +33% | 0,28 |
> | 3484 | VWAP + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+124% · −30,7%** | +32% · −5,7% | +23% | −8,5% | 1,2 | 0,66 → 1,39 | +16% | 0,04 |
> | 3485 | Donchian + BB explosão + MACD + Pullback + Rompe 200 | **+182% · −51,5%** | +44% · −11,2% | +29% | −7,2% | 2,2 | 1,44 → 1,25 | +16% | 0,20 |
> | 3486 | ADX + BB explosão + Bollinger + Tendência + Onda | **+266% · −66,2%** | +58% · −15,5% | +34% | −8,6% | 2,5 | 1,01 → 1,60 | +26% | 0,31 |
> | 3487 | VWAP + BB explosão + IFR + Tendência | **+172% · −57,0%** | +52% · −16,5% | +35% | −9,2% | 2,4 | 1,28 → 1,27 | +16% | 0,39 |
> | 3488 | ADX + MACD + Pôr do sol + Quinta ⚠️ | **+122% · −33,6%** | +38% · −7,6% | +26% | −5,0% | 2,6 | 0,83 → 1,74 | +16% | 0,04 |
> | 3489 | BB explosão + MACD + Pullback + Rompe 200 + Onda | **+135% · −41,9%** | +36% · −8,1% | +27% | −9,2% | 1,5 | 0,94 → 1,29 | +23% | 0,14 |
> | 3490 | Donchian + MACD + Bollinger | **+184% · −28,1%** | +60% · −9,9% | +33% | −8,9% | 2,3 | 1,30 → 1,55 | +26% | 0,35 |
> | 3491 | ADX + 1ª vela 80 + Bollinger ⚠️ | **+175% · −36,7%** | +59% · −12,1% | +32% | −6,4% | 3,1 | 0,86 → 1,97 | +19% | 0,29 |
> | 3492 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+207% · −47,2%** | +47% · −9,5% | +28% | −4,5% | 3,5 | 1,23 → 1,61 | +24% | 0,09 |
> | 3493 | VWAP + BB explosão + GPS médias + IFR + Pullback | **+186% · −59,3%** | +48% · −13,7% | +31% | −10,3% | 1,7 | 1,44 → 1,18 | +15% | 0,22 |
> | 3494 | Donchian + BB explosão + IFR + Quinta + Rompe 200 ⚠️ | **+200% · −47,5%** | +46% · −9,7% | +29% | −5,4% | 3,0 | 1,50 → 1,41 | +16% | 0,18 |
> | 3495 | VWAP + Pôr do sol + Tendência | **+94% · −29,7%** | +39% · −9,9% | +29% | −7,3% | 2,2 | 1,24 → 1,08 | +18% | 0,11 |
> | 3496 | BB explosão + GPS médias + IFR + Quinta ⚠️ | **+161% · −48,5%** | +49% · −12,8% | +31% | −8,1% | 2,2 | 1,45 → 1,29 | +18% | 0,16 |
> | 3497 | VWAP + GPS médias + Pôr do sol + Rompe 200 + Onda | **+127% · −41,9%** | +36% · −8,9% | +25% | −11,7% | 1,0 | 0,87 → 1,07 | +24% | 0,10 |
> | 3498 | VWAP + Donchian + MACD + Rompe 200 + Onda | **+166% · −44,1%** | +42% · −9,4% | +29% | −13,2% | 1,2 | 0,80 → 1,23 | +23% | 0,31 |
> | 3499 | BB explosão + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+96% · −36,3%** | +33% · −9,3% | +23% | −6,3% | 1,7 | 1,13 → 1,36 | +17% | −0,02 |
> | 3500 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Pullback ⚠️ | **+176% · −48,7%** | +43% · −10,8% | +28% | −6,5% | 2,3 | 1,60 → 1,33 | +18% | −0,02 |
> | 3501 | ADX + Pôr do sol + Quinta + Onda ⚠️ | **+119% · −31,1%** | +38% · −8,1% | +26% | −5,6% | 2,3 | 0,52 → 1,66 | +17% | −0,03 |
> | 3502 | VWAP + Donchian + Quinta + Onda ⚠️ | **+134% · −35,4%** | +42% · −9,0% | +28% | −11,5% | 1,3 | 0,80 → 1,22 | +19% | 0,04 |
> | 3503 | BB explosão + GPS médias + IFR + MACD + Rompe 200 | **+193% · −54,8%** | +48% · −11,9% | +31% | −10,3% | 1,8 | 1,29 → 1,30 | +20% | 0,33 |
> | 3504 | BB explosão + GPS médias + Pôr do sol + Quinta + Tendência ⚠️ | **+175% · −56,1%** | +44% · −12,4% | +29% | −4,5% | 3,6 | 1,59 → 1,21 | +17% | 0,08 |
> | 3505 | ADX + GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+233% · −48,2%** | +51% · −9,8% | +32% | −6,7% | 2,8 | 1,15 → 1,64 | +24% | 0,09 |
> | 3506 | ADX + BB explosão + Rompe 200 + Tendência + Onda | **+198% · −65,0%** | +50% · −15,6% | +33% | −9,1% | 2,2 | 0,98 → 1,45 | +26% | 0,23 |
> | 3507 | VWAP + BB explosão + GPS médias + IFR + Quinta ⚠️ | **+163% · −56,4%** | +44% · −12,5% | +29% | −10,8% | 1,5 | 1,26 → 1,17 | +17% | 0,16 |
> | 3508 | BB explosão + MACD + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+188% · −41,5%** | +41% · −8,6% | +27% | −9,2% | 1,5 | 1,11 → 1,56 | +19% | 0,22 |
> | 3509 | VWAP + MACD + Bollinger | **+102% · −32,6%** | +40% · −11,0% | +26% | −15,7% | 0,9 | 0,78 → 1,22 | +17% | 0,46 |
> | 3510 | ADX + BB explosão + GPS médias + IFR + Pôr do sol | **+223% · −60,3%** | +55% · −13,9% | +32% | −5,4% | 3,6 | 1,26 → 1,52 | +23% | 0,19 |

> [!example]- Combinações 3511 a 3540 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3511 | ADX + VWAP + Donchian + Pôr do sol + Tendência | **+248% · −59,4%** | +55% · −13,1% | +33% | −6,7% | 3,1 | 1,28 → 1,44 | +21% | 0,19 |
> | 3512 | ADX + VWAP + GPS médias + Quinta + Bollinger ⚠️ | **+215% · −47,1%** | +48% · −9,7% | +28% | −7,0% | 2,2 | 1,22 → 1,40 | +21% | 0,18 |
> | 3513 | VWAP + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+48% · −26,7%** | +21% · −6,3% | +18% | −8,3% | 0,6 | 1,02 → 0,74 | +14% | 0,00 |
> | 3514 | ADX + GPS médias + Pôr do sol + Rompe 200 | **+151% · −40,0%** | +46% · −10,2% | +27% | −4,8% | 3,0 | 1,26 → 1,38 | +23% | 0,05 |
> | 3515 | ADX + Donchian + Pôr do sol + 1ª vela 80 ⚠️ | **+223% · −42,6%** | +57% · −8,7% | +33% | −4,5% | 4,4 | 1,14 → 1,85 | +21% | 0,05 |
> | 3516 | VWAP + MACD + Pôr do sol + Onda | **+92% · −33,8%** | +32% · −8,4% | +25% | −13,8% | 0,9 | 0,43 → 1,25 | +17% | 0,16 |
> | 3517 | ADX + BB explosão + MACD + Tendência + Onda | **+219% · −69,1%** | +55% · −17,0% | +35% | −10,3% | 2,2 | 0,89 → 1,51 | +27% | 0,32 |
> | 3518 | VWAP + GPS médias + MACD + Pôr do sol + Onda | **+149% · −46,1%** | +40% · −9,9% | +28% | −13,2% | 1,1 | 0,77 → 1,22 | +24% | 0,15 |
> | 3519 | GPS médias + 1ª vela 80 + Quinta ⚠️ | **+121% · −29,8%** | +46% · −9,4% | +29% | −7,6% | 2,1 | 1,42 → 1,39 | +22% | −0,11 |
> | 3520 | ADX + Donchian + BB explosão + Quinta + Pullback ⚠️ | **+214% · −61,4%** | +50% · −14,2% | +30% | −4,6% | 3,8 | 1,47 → 1,49 | +17% | 0,09 |
> | 3521 | Donchian + BB explosão + IFR + MACD + Bollinger | **+293% · −49,8%** | +58% · −10,2% | +34% | −8,8% | 2,4 | 1,31 → 1,56 | +22% | 0,40 |
> | 3522 | BB explosão + GPS médias + IFR + Pôr do sol + Bollinger | **+237% · −45,7%** | +51% · −9,9% | +30% | −7,2% | 2,3 | 1,50 → 1,48 | +20% | 0,17 |
> | 3523 | BB explosão + IFR + Rompe 200 + Bollinger + Onda | **+211% · −38,2%** | +45% · −7,7% | +29% | −7,9% | 2,0 | 1,01 → 1,57 | +23% | 0,23 |
> | 3524 | BB explosão + 1ª vela 80 + Pullback + Bollinger + Onda ⚠️ | **+211% · −40,3%** | +44% · −7,7% | +29% | −7,9% | 2,0 | 1,04 → 1,65 | +20% | 0,12 |
> | 3525 | ADX + VWAP + 1ª vela 80 + Bollinger ⚠️ | **+190% · −40,6%** | +51% · −10,0% | +30% | −8,2% | 2,1 | 0,83 → 1,69 | +17% | 0,33 |
> | 3526 | IFR + Onda | **+103% · −22,7%** | +55% · −11,1% | +37% | −9,2% | 2,6 | 0,68 → 1,65 | +27% | 0,20 |
> | 3527 | 1ª vela 80 + Bollinger ⚠️ | **+97% · −16,3%** | +51% · −7,5% | +29% | −7,1% | 2,3 | 1,03 → 1,91 | +14% | 0,28 |
> | 3528 | ADX + VWAP + Donchian + IFR + Pôr do sol | **+252% · −46,5%** | +54% · −9,4% | +32% | −5,6% | 3,5 | 1,18 → 1,60 | +17% | 0,15 |
> | 3529 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+97% · −28,8%** | +32% · −6,6% | +23% | −4,8% | 2,2 | 1,09 → 1,55 | +16% | −0,07 |
> | 3530 | Donchian + MACD + Tendência + Onda | **+229% · −44,5%** | +60% · −12,1% | +38% | −10,6% | 2,4 | 1,07 → 1,45 | +33% | 0,44 |
> | 3531 | ADX + BB explosão + Pôr do sol + Rompe 200 + Bollinger | **+177% · −48,1%** | +42% · −9,1% | +25% | −4,0% | 3,0 | 1,09 → 1,58 | +19% | 0,09 |
> | 3532 | Donchian + MACD + Rompe 200 + Onda | **+164% · −35,5%** | +47% · −9,0% | +30% | −9,6% | 1,8 | 0,86 → 1,38 | +28% | 0,27 |
> | 3533 | ADX + VWAP + Donchian + GPS médias + Quinta ⚠️ | **+220% · −56,9%** | +54% · −12,6% | +31% | −7,8% | 2,3 | 1,25 → 1,31 | +21% | 0,14 |
> | 3534 | BB explosão + GPS médias + Pullback + Bollinger + Tendência | **+261% · −60,6%** | +55% · −13,4% | +33% | −5,1% | 3,9 | 1,80 → 1,31 | +16% | 0,24 |
> | 3535 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+277% · −48,9%** | +54% · −10,1% | +30% | −4,5% | 3,9 | 1,28 → 1,80 | +23% | 0,16 |
> | 3536 | BB explosão + IFR + Rompe 200 + Bollinger | **+170% · −33,3%** | +46% · −8,0% | +28% | −6,2% | 2,5 | 1,45 → 1,54 | +17% | 0,26 |
> | 3537 | ADX + GPS médias + Rompe 200 + Bollinger | **+207% · −42,4%** | +55% · −11,0% | +30% | −5,4% | 3,1 | 1,36 → 1,49 | +23% | 0,25 |
> | 3538 | ADX + VWAP + Donchian + GPS médias + Rompe 200 | **+217% · −59,4%** | +55% · −13,6% | +31% | −9,0% | 2,1 | 1,24 → 1,25 | +20% | 0,26 |
> | 3539 | ADX + BB explosão + GPS médias + Rompe 200 + Tendência | **+215% · −71,0%** | +56% · −18,5% | +34% | −7,3% | 2,8 | 1,40 → 1,32 | +19% | 0,32 |
> | 3540 | BB explosão + GPS médias + IFR + 1ª vela 80 + Bollinger ⚠️ | **+288% · −51,2%** | +57% · −11,4% | +33% | −9,0% | 2,3 | 1,45 → 1,60 | +23% | 0,30 |

> [!example]- Combinações 3541 a 3570 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3541 | ADX + BB explosão + Quinta + Tendência ⚠️ | **+173% · −63,7%** | +52% · −19,5% | +33% | −7,5% | 2,7 | 1,31 → 1,47 | +19% | 0,17 |
> | 3542 | ADX + Donchian + MACD + Bollinger | **+271% · −45,7%** | +64% · −10,6% | +35% | −6,2% | 3,5 | 1,16 → 1,73 | +23% | 0,31 |
> | 3543 | VWAP + BB explosão + Pôr do sol + Quinta + Tendência ⚠️ | **+127% · −53,6%** | +36% · −11,3% | +26% | −6,3% | 2,1 | 1,26 → 1,11 | +15% | 0,08 |
> | 3544 | ADX + GPS médias + IFR | **+202% · −44,7%** | +72% · −16,2% | +40% | −6,4% | 4,2 | 1,31 → 1,61 | +30% | 0,39 |
> | 3545 | BB explosão + Pôr do sol + Quinta + Rompe 200 + Bollinger ⚠️ | **+115% · −30,5%** | +31% · −4,9% | +21% | −4,0% | 2,0 | 1,47 → 1,35 | +15% | 0,02 |
> | 3546 | ADX + Pôr do sol + Pullback + Onda | **+141% · −33,7%** | +42% · −7,7% | +28% | −6,2% | 2,5 | 0,84 → 1,64 | +18% | −0,01 |
> | 3547 | VWAP + Bollinger + Tendência + Onda | **+179% · −37,6%** | +48% · −9,3% | +32% | −10,5% | 1,8 | 0,94 → 1,36 | +26% | 0,33 |
> | 3548 | ADX + GPS médias + MACD + Rompe 200 | **+175% · −44,9%** | +51% · −11,6% | +31% | −7,4% | 2,5 | 1,13 → 1,41 | +27% | 0,19 |
> | 3549 | Donchian + BB explosão + GPS médias + MACD + Pullback | **+217% · −61,3%** | +54% · −14,5% | +33% | −9,6% | 2,1 | 1,46 → 1,23 | +18% | 0,26 |
> | 3550 | 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+100% · −24,5%** | +32% · −5,5% | +25% | −7,0% | 1,7 | 0,65 → 1,53 | +14% | −0,02 |
> | 3551 | VWAP + Donchian + Bollinger + Onda | **+191% · −37,3%** | +51% · −9,6% | +30% | −12,7% | 1,4 | 0,84 → 1,35 | +21% | 0,31 |
> | 3552 | BB explosão + Pullback + Rompe 200 + Bollinger | **+124% · −33,7%** | +37% · −7,7% | +24% | −5,3% | 2,1 | 1,69 → 1,21 | +12% | 0,11 |
> | 3553 | BB explosão + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+130% · −35,8%** | +34% · −6,6% | +25% | −6,8% | 1,8 | 0,69 → 1,55 | +15% | −0,04 |
> | 3554 | VWAP + GPS médias + Tendência + Onda | **+171% · −47,5%** | +52% · −12,4% | +34% | −12,6% | 1,7 | 1,05 → 1,19 | +28% | 0,31 |
> | 3555 | VWAP + BB explosão + IFR + 1ª vela 80 ⚠️ | **+156% · −42,7%** | +46% · −11,3% | +31% | −12,0% | 1,5 | 1,02 → 1,43 | +20% | 0,26 |
> | 3556 | VWAP + GPS médias + MACD + Bollinger | **+171% · −46,0%** | +48% · −12,7% | +29% | −15,2% | 1,1 | 1,13 → 1,19 | +23% | 0,38 |
> | 3557 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Tendência ⚠️ | **+217% · −56,1%** | +50% · −12,5% | +32% | −6,5% | 3,0 | 1,53 → 1,37 | +20% | 0,10 |
> | 3558 | Donchian + Pullback + Onda | **+148% · −33,2%** | +53% · −9,7% | +33% | −7,1% | 2,9 | 1,13 → 1,42 | +26% | 0,15 |
> | 3559 | ADX + GPS médias + Pôr do sol + Quinta ⚠️ | **+150% · −37,7%** | +45% · −9,3% | +27% | −4,6% | 3,1 | 1,30 → 1,48 | +23% | 0,03 |
> | 3560 | BB explosão + GPS médias + MACD + 1ª vela 80 + Pullback ⚠️ | **+203% · −48,7%** | +47% · −10,7% | +31% | −10,0% | 1,8 | 1,40 → 1,37 | +22% | 0,13 |
> | 3561 | ADX + VWAP + Donchian + GPS médias + Tendência | **+273% · −68,9%** | +66% · −17,2% | +38% | −7,5% | 3,3 | 1,37 → 1,34 | +22% | 0,36 |
> | 3562 | BB explosão + GPS médias + MACD + Pôr do sol + Pullback | **+162% · −50,1%** | +41% · −10,4% | +28% | −7,8% | 1,9 | 1,44 → 1,22 | +19% | 0,03 |
> | 3563 | Donchian + BB explosão + IFR + Quinta + Tendência ⚠️ | **+266% · −60,3%** | +57% · −13,5% | +35% | −6,2% | 3,6 | 1,61 → 1,47 | +18% | 0,26 |
> | 3564 | Donchian + BB explosão + IFR + Pôr do sol + Rompe 200 | **+202% · −46,0%** | +46% · −9,2% | +29% | −5,4% | 3,0 | 1,44 → 1,43 | +17% | 0,17 |
> | 3565 | ADX + BB explosão + MACD + Pôr do sol + Bollinger | **+206% · −55,1%** | +46% · −11,2% | +28% | −5,5% | 2,8 | 0,94 → 1,67 | +22% | 0,16 |
> | 3566 | ADX + VWAP + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+264% · −58,2%** | +59% · −12,2% | +36% | −7,5% | 3,1 | 1,28 → 1,47 | +26% | 0,27 |
> | 3567 | Donchian + BB explosão + GPS médias + Pôr do sol + Tendência | **+229% · −66,6%** | +57% · −16,1% | +34% | −6,3% | 3,3 | 1,53 → 1,24 | +17% | 0,26 |
> | 3568 | ADX + GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+236% · −48,8%** | +51% · −9,9% | +31% | −6,7% | 2,8 | 1,10 → 1,67 | +24% | 0,13 |
> | 3569 | VWAP + BB explosão + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+225% · −54,4%** | +49% · −11,9% | +31% | −9,8% | 1,9 | 1,26 → 1,40 | +19% | 0,33 |
> | 3570 | ADX + Pôr do sol + Rompe 200 + Onda | **+120% · −32,3%** | +39% · −8,0% | +26% | −6,6% | 2,0 | 0,55 → 1,54 | +19% | −0,00 |

> [!example]- Combinações 3571 a 3600 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3571 | ADX + VWAP + Donchian + Quinta + Tendência ⚠️ | **+245% · −60,6%** | +55% · −13,7% | +33% | −6,7% | 3,1 | 1,33 → 1,42 | +21% | 0,17 |
> | 3572 | VWAP + Donchian + MACD + Tendência | **+196% · −51,0%** | +55% · −14,5% | +36% | −11,3% | 2,0 | 1,23 → 1,22 | +21% | 0,50 |
> | 3573 | ADX + IFR + Pôr do sol | **+148% · −30,3%** | +53% · −9,9% | +33% | −5,9% | 3,4 | 1,08 → 1,94 | +18% | 0,07 |
> | 3574 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+108% · −42,3%** | +31% · −8,9% | +23% | −9,3% | 1,1 | 0,93 → 1,28 | +18% | 0,01 |
> | 3575 | VWAP + GPS médias + Quinta + Bollinger + Onda ⚠️ | **+179% · −43,3%** | +42% · −9,2% | +27% | −11,0% | 1,2 | 0,95 → 1,26 | +24% | 0,10 |
> | 3576 | Donchian + GPS médias + Rompe 200 | **+156% · −37,7%** | +58% · −12,5% | +32% | −8,8% | 2,2 | 1,58 → 1,08 | +17% | 0,32 |
> | 3577 | Donchian + GPS médias + 1ª vela 80 + Onda ⚠️ | **+233% · −44,0%** | +62% · −11,3% | +36% | −10,7% | 2,2 | 1,06 → 1,47 | +30% | 0,26 |
> | 3578 | ADX + GPS médias + Quinta + Bollinger + Onda ⚠️ | **+245% · −47,5%** | +52% · −9,4% | +30% | −5,5% | 3,2 | 1,00 → 1,62 | +23% | 0,11 |
> | 3579 | BB explosão + 1ª vela 80 + Bollinger + Tendência + Onda ⚠️ | **+260% · −48,4%** | +52% · −9,2% | +33% | −7,4% | 2,8 | 1,07 → 1,61 | +22% | 0,26 |
> | 3580 | VWAP + Pôr do sol + Rompe 200 + Bollinger | **+88% · −27,3%** | +30% · −6,3% | +20% | −9,5% | 0,8 | 1,11 → 1,04 | +16% | 0,09 |
> | 3581 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+179% · −47,0%** | +43% · −10,3% | +28% | −6,5% | 2,3 | 1,54 → 1,36 | +19% | −0,00 |
> | 3582 | ADX + MACD + Pôr do sol + Pullback | **+146% · −32,7%** | +42% · −7,2% | +28% | −4,7% | 3,3 | 1,23 → 1,73 | +18% | −0,04 |
> | 3583 | ADX + VWAP + MACD + Tendência | **+184% · −57,1%** | +53% · −15,4% | +35% | −10,4% | 2,1 | 1,03 → 1,40 | +22% | 0,35 |
> | 3584 | BB explosão + GPS médias + IFR + Tendência | **+222% · −61,5%** | +63% · −18,5% | +39% | −7,8% | 3,3 | 1,56 → 1,34 | +19% | 0,47 |
> | 3585 | VWAP + BB explosão + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+180% · −46,6%** | +41% · −10,2% | +27% | −10,2% | 1,3 | 1,29 → 1,39 | +17% | 0,18 |
> | 3586 | ADX + VWAP + Quinta + Tendência ⚠️ | **+160% · −51,1%** | +47% · −13,0% | +31% | −7,3% | 2,5 | 1,19 → 1,39 | +20% | 0,11 |
> | 3587 | Pullback + Onda | **+63% · −19,9%** | +37% · −9,5% | +29% | −8,7% | 1,8 | 0,76 → 1,24 | +22% | 0,16 |
> | 3588 | ADX + Donchian + BB explosão + MACD + Pullback | **+238% · −65,6%** | +55% · −15,8% | +33% | −5,7% | 3,5 | 1,28 → 1,50 | +21% | 0,21 |
> | 3589 | BB explosão + Pullback + Tendência + Onda | **+159% · −53,1%** | +48% · −14,3% | +33% | −8,1% | 2,5 | 1,19 → 1,32 | +23% | 0,21 |
> | 3590 | ADX + VWAP + IFR + MACD | **+183% · −44,0%** | +52% · −10,0% | +34% | −9,0% | 2,3 | 0,88 → 1,55 | +18% | 0,31 |
> | 3591 | ADX + BB explosão + GPS médias + IFR + Rompe 200 | **+217% · −63,5%** | +55% · −15,3% | +32% | −6,3% | 3,1 | 1,29 → 1,43 | +20% | 0,33 |
> | 3592 | BB explosão + Quinta + Pullback ⚠️ | **+69% · −33,5%** | +31% · −10,9% | +23% | −3,9% | 2,7 | 1,64 → 1,02 | +10% | −0,07 |
> | 3593 | VWAP + GPS médias + Rompe 200 + Bollinger | **+144% · −40,4%** | +42% · −10,7% | +25% | −11,8% | 1,1 | 1,35 → 1,00 | +17% | 0,27 |
> | 3594 | ADX + VWAP + GPS médias + Pôr do sol + Bollinger | **+218% · −47,9%** | +49% · −10,0% | +28% | −7,0% | 2,2 | 1,16 → 1,43 | +20% | 0,18 |
> | 3595 | VWAP + Donchian + MACD + Tendência + Onda | **+223% · −51,8%** | +53% · −11,4% | +35% | −11,3% | 1,9 | 0,98 → 1,32 | +27% | 0,43 |
> | 3596 | Donchian + BB explosão + Pullback + Rompe 200 + Bollinger | **+218% · −46,6%** | +46% · −8,9% | +27% | −5,4% | 2,7 | 1,71 → 1,33 | +13% | 0,17 |
> | 3597 | BB explosão + MACD + Rompe 200 + Bollinger + Tendência | **+211% · −53,7%** | +46% · −11,2% | +30% | −7,9% | 2,2 | 1,39 → 1,36 | +19% | 0,29 |
> | 3598 | VWAP + GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+226% · −51,4%** | +52% · −11,4% | +34% | −11,9% | 1,8 | 1,07 → 1,36 | +29% | 0,28 |
> | 3599 | Donchian + BB explosão + IFR + Bollinger + Tendência | **+343% · −61,1%** | +65% · −13,6% | +37% | −7,0% | 3,5 | 1,62 → 1,55 | +19% | 0,42 |
> | 3600 | ADX + GPS médias + MACD + Bollinger | **+238% · −43,7%** | +60% · −11,1% | +33% | −7,3% | 2,8 | 1,18 → 1,59 | +28% | 0,34 |

> [!example]- Combinações 3601 a 3630 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3601 | VWAP + Donchian + GPS médias + 1ª vela 80 + Onda ⚠️ | **+229% · −52,2%** | +54% · −11,7% | +33% | −13,6% | 1,5 | 0,98 → 1,34 | +28% | 0,30 |
> | 3602 | ADX + Donchian + BB explosão + MACD + 1ª vela 80 ⚠️ | **+254% · −62,8%** | +58% · −14,4% | +34% | −8,0% | 2,7 | 1,03 → 1,61 | +26% | 0,29 |
> | 3603 | ADX + Donchian + Pôr do sol + Pullback | **+203% · −43,4%** | +53% · −8,5% | +31% | −4,4% | 4,1 | 1,57 → 1,71 | +19% | −0,02 |
> | 3604 | MACD + Bollinger + Onda | **+127% · −24,5%** | +46% · −7,6% | +30% | −10,5% | 1,6 | 0,53 → 1,62 | +15% | 0,29 |
> | 3605 | VWAP + BB explosão + Pullback + Tendência | **+133% · −61,7%** | +43% · −16,9% | +30% | −8,8% | 2,0 | 1,41 → 1,05 | +12% | 0,24 |
> | 3606 | ADX + GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+294% · −54,2%** | +63% · −11,6% | +38% | −7,8% | 3,2 | 1,11 → 1,62 | +28% | 0,24 |
> | 3607 | ADX + VWAP + BB explosão + Pullback + Tendência | **+195% · −70,3%** | +50% · −18,2% | +32% | −7,2% | 2,7 | 1,33 → 1,31 | +16% | 0,24 |
> | 3608 | BB explosão + 1ª vela 80 + Pullback ⚠️ | **+106% · −35,7%** | +42% · −12,4% | +28% | −6,9% | 2,3 | 1,38 → 1,44 | +17% | −0,07 |
> | 3609 | ADX + GPS médias + Pullback + Onda | **+192% · −45,4%** | +55% · −11,9% | +33% | −7,0% | 2,9 | 1,08 → 1,47 | +28% | 0,13 |
> | 3610 | ADX + BB explosão + 1ª vela 80 + Pullback + Onda ⚠️ | **+204% · −52,4%** | +49% · −10,2% | +31% | −6,4% | 2,9 | 0,89 → 1,64 | +22% | 0,10 |
> | 3611 | VWAP + Donchian + GPS médias + MACD | **+181% · −48,1%** | +55% · −13,3% | +33% | −15,8% | 1,3 | 1,16 → 1,12 | +22% | 0,42 |
> | 3612 | Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+66% · −21,0%** | +29% · −6,4% | +22% | −3,9% | 2,4 | 0,98 → 1,52 | +16% | 0,07 |
> | 3613 | Donchian + BB explosão + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+179% · −47,0%** | +42% · −10,3% | +27% | −6,3% | 2,3 | 1,36 → 1,42 | +17% | 0,07 |
> | 3614 | VWAP + Donchian + Pôr do sol + 1ª vela 80 ⚠️ | **+157% · −39,1%** | +44% · −10,2% | +28% | −10,6% | 1,4 | 1,11 → 1,39 | +18% | 0,13 |
> | 3615 | BB explosão + MACD + 1ª vela 80 + Quinta ⚠️ | **+121% · −33,9%** | +38% · −8,4% | +27% | −9,4% | 1,5 | 0,96 → 1,49 | +18% | 0,01 |
> | 3616 | ADX + VWAP + IFR + Rompe 200 | **+158% · −38,5%** | +47% · −9,0% | +30% | −6,7% | 2,6 | 1,02 → 1,48 | +18% | 0,19 |
> | 3617 | ADX + BB explosão + IFR + 1ª vela 80 + Onda ⚠️ | **+247% · −51,9%** | +56% · −10,6% | +35% | −6,9% | 3,2 | 0,81 → 1,77 | +23% | 0,22 |
> | 3618 | ADX + Pôr do sol + Quinta + Pullback ⚠️ | **+115% · −31,8%** | +36% · −7,5% | +24% | −4,9% | 2,4 | 1,51 → 1,69 | +15% | 0,02 |
> | 3619 | Donchian + BB explosão + IFR + 1ª vela 80 + Onda ⚠️ | **+268% · −48,4%** | +57% · −9,5% | +35% | −8,8% | 2,5 | 1,03 → 1,63 | +29% | 0,28 |
> | 3620 | ADX + GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+273% · −50,0%** | +54% · −10,5% | +30% | −5,4% | 3,3 | 1,32 → 1,69 | +24% | 0,23 |
> | 3621 | ADX + Donchian + GPS médias + 1ª vela 80 + Onda ⚠️ | **+292% · −55,5%** | +65% · −11,9% | +37% | −8,0% | 3,0 | 1,02 → 1,61 | +30% | 0,24 |
> | 3622 | VWAP + Donchian + GPS médias + Bollinger | **+220% · −45,3%** | +58% · −12,6% | +31% | −12,6% | 1,5 | 1,38 → 1,18 | +19% | 0,35 |
> | 3623 | ADX + Pôr do sol + Pullback + Rompe 200 | **+116% · −31,7%** | +36% · −7,4% | +25% | −4,8% | 2,4 | 1,43 → 1,50 | +18% | −0,02 |
> | 3624 | ADX + VWAP + Donchian + MACD + Bollinger | **+272% · −52,7%** | +56% · −10,0% | +32% | −8,6% | 2,2 | 1,03 → 1,52 | +19% | 0,35 |
> | 3625 | VWAP + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+166% · −37,3%** | +38% · −7,6% | +26% | −10,6% | 1,2 | 0,69 → 1,57 | +18% | 0,10 |
> | 3626 | ADX + Donchian + GPS médias + Onda | **+233% · −50,5%** | +68% · −13,1% | +37% | −7,9% | 3,1 | 1,00 → 1,47 | +31% | 0,27 |
> | 3627 | VWAP + Donchian + GPS médias + 1ª vela 80 ⚠️ | **+204% · −51,3%** | +57% · −14,3% | +33% | −14,4% | 1,4 | 1,26 → 1,26 | +22% | 0,31 |
> | 3628 | VWAP + GPS médias + MACD + Rompe 200 + Onda | **+146% · −48,0%** | +40% · −10,6% | +28% | −14,5% | 1,0 | 0,82 → 1,14 | +25% | 0,26 |
> | 3629 | VWAP + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+125% · −31,0%** | +36% · −7,4% | +24% | −9,7% | 1,2 | 1,05 → 1,54 | +18% | 0,09 |
> | 3630 | BB explosão + Pôr do sol + Rompe 200 + Tendência | **+121% · −48,0%** | +38% · −12,5% | +27% | −6,3% | 2,3 | 1,48 → 1,17 | +14% | 0,10 |

> [!example]- Combinações 3631 a 3660 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3631 | BB explosão + MACD + 1ª vela 80 + Quinta + Onda ⚠️ | **+154% · −39,7%** | +39% · −8,1% | +28% | −9,7% | 1,6 | 0,67 → 1,53 | +15% | 0,05 |
> | 3632 | ADX + GPS médias + MACD + Quinta + Onda ⚠️ | **+205% · −47,4%** | +49% · −9,3% | +31% | −7,5% | 2,5 | 0,86 → 1,53 | +23% | 0,08 |
> | 3633 | ADX + BB explosão + IFR + Quinta ⚠️ | **+172% · −51,8%** | +50% · −13,2% | +31% | −5,8% | 3,2 | 1,14 → 1,67 | +21% | 0,15 |
> | 3634 | ADX + BB explosão + Pôr do sol + Tendência | **+175% · −62,8%** | +52% · −18,9% | +33% | −7,1% | 2,8 | 1,25 → 1,50 | +21% | 0,15 |
> | 3635 | BB explosão + 1ª vela 80 + Quinta + Rompe 200 + Onda ⚠️ | **+129% · −39,0%** | +35% · −7,9% | +25% | −8,3% | 1,5 | 0,76 → 1,43 | +16% | 0,02 |
> | 3636 | BB explosão + GPS médias + IFR + Rompe 200 + Bollinger | **+232% · −49,2%** | +51% · −10,5% | +30% | −8,1% | 2,1 | 1,53 → 1,37 | +18% | 0,32 |
> | 3637 | ADX + Donchian + MACD + Rompe 200 | **+201% · −42,7%** | +55% · −10,1% | +32% | −6,8% | 2,9 | 1,11 → 1,54 | +24% | 0,20 |
> | 3638 | ADX + BB explosão + GPS médias + IFR + MACD | **+238% · −64,6%** | +59% · −15,7% | +35% | −8,5% | 2,7 | 1,16 → 1,50 | +26% | 0,38 |
> | 3639 | ADX + VWAP + Donchian + IFR + MACD | **+270% · −53,7%** | +59% · −10,6% | +35% | −8,7% | 2,6 | 1,07 → 1,54 | +20% | 0,35 |
> | 3640 | Donchian + 1ª vela 80 + Onda ⚠️ | **+169% · −37,4%** | +59% · −11,6% | +35% | −10,6% | 2,1 | 0,82 → 1,60 | +27% | 0,23 |
> | 3641 | ADX + GPS médias + Pôr do sol + Bollinger + Onda | **+248% · −48,1%** | +52% · −9,6% | +30% | −5,4% | 3,2 | 0,95 → 1,64 | +22% | 0,11 |
> | 3642 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Tendência ⚠️ | **+220% · −54,8%** | +51% · −12,0% | +32% | −6,5% | 3,0 | 1,48 → 1,39 | +21% | 0,15 |
> | 3643 | GPS médias + Tendência + Onda | **+169% · −39,0%** | +62% · −13,0% | +39% | −9,9% | 2,6 | 1,15 → 1,31 | +24% | 0,30 |
> | 3644 | ADX + VWAP + MACD + Pullback + Rompe 200 | **+155% · −41,0%** | +39% · −7,3% | +27% | −7,6% | 1,9 | 1,11 → 1,34 | +18% | 0,12 |
> | 3645 | ADX + Donchian + BB explosão + Pôr do sol + Pullback | **+217% · −60,3%** | +51% · −13,7% | +30% | −4,3% | 4,0 | 1,41 → 1,52 | +18% | 0,06 |
> | 3646 | ADX + MACD + Pôr do sol + Onda | **+147% · −36,1%** | +44% · −8,5% | +30% | −7,5% | 2,3 | 0,48 → 1,67 | +19% | 0,06 |
> | 3647 | ADX + VWAP + MACD + 1ª vela 80 ⚠️ | **+160% · −41,5%** | +47% · −10,3% | +31% | −11,3% | 1,6 | 0,69 → 1,55 | +18% | 0,28 |
> | 3648 | Donchian + BB explosão + Pullback + Rompe 200 + Onda | **+176% · −49,3%** | +44% · −10,4% | +29% | −8,0% | 2,0 | 1,16 → 1,26 | +20% | 0,21 |
> | 3649 | ADX + VWAP + Donchian + Rompe 200 + Onda | **+194% · −50,7%** | +49% · −9,0% | +30% | −9,5% | 1,8 | 0,81 → 1,37 | +20% | 0,21 |
> | 3650 | BB explosão + GPS médias + Quinta + Rompe 200 + Tendência ⚠️ | **+171% · −59,4%** | +44% · −13,9% | +29% | −5,6% | 2,9 | 1,61 → 1,12 | +15% | 0,16 |
> | 3651 | ADX + VWAP + BB explosão + Bollinger + Tendência | **+232% · −69,7%** | +54% · −17,5% | +32% | −7,8% | 2,5 | 1,17 → 1,40 | +19% | 0,39 |
> | 3652 | BB explosão + IFR + Tendência + Onda | **+202% · −51,3%** | +56% · −13,4% | +37% | −9,9% | 2,5 | 1,10 → 1,49 | +28% | 0,36 |
> | 3653 | BB explosão + Quinta + Rompe 200 + Tendência ⚠️ | **+118% · −50,3%** | +38% · −13,2% | +27% | −6,2% | 2,3 | 1,55 → 1,14 | +13% | 0,10 |
> | 3654 | BB explosão + Pôr do sol + Pullback + Bollinger + Onda | **+165% · −37,9%** | +38% · −6,7% | +25% | −5,9% | 2,1 | 1,06 → 1,51 | +22% | 0,03 |
> | 3655 | Donchian + BB explosão + Pôr do sol + Pullback + Onda | **+180% · −45,6%** | +44% · −8,9% | +29% | −6,5% | 2,4 | 1,12 → 1,37 | +22% | 0,07 |
> | 3656 | VWAP + BB explosão + IFR + MACD + Rompe 200 | **+147% · −49,5%** | +39% · −10,3% | +28% | −11,6% | 1,3 | 1,00 → 1,22 | +18% | 0,30 |
> | 3657 | Donchian + IFR + Onda | **+194% · −30,1%** | +65% · −10,2% | +39% | −7,9% | 3,3 | 1,01 → 1,62 | +29% | 0,33 |
> | 3658 | ADX + Donchian + GPS médias + 1ª vela 80 ⚠️ | **+269% · −50,4%** | +70% · −13,5% | +38% | −7,0% | 3,6 | 1,30 → 1,60 | +29% | 0,26 |
> | 3659 | Donchian + BB explosão + Pullback + Bollinger + Onda | **+242% · −47,9%** | +51% · −9,2% | +30% | −7,3% | 2,4 | 1,20 → 1,47 | +22% | 0,19 |
> | 3660 | ADX + BB explosão + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+124% · −46,6%** | +35% · −8,9% | +23% | −4,7% | 2,2 | 1,05 → 1,42 | +18% | 0,02 |

> [!example]- Combinações 3661 a 3690 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3661 | BB explosão + IFR + Tendência | **+170% · −50,6%** | +61% · −18,4% | +39% | −9,5% | 2,8 | 1,51 → 1,44 | +18% | 0,46 |
> | 3662 | ADX + VWAP + 1ª vela 80 + Quinta + Onda ⚠️ | **+165% · −45,0%** | +42% · −8,8% | +28% | −8,7% | 1,8 | 0,58 → 1,58 | +18% | 0,06 |
> | 3663 | VWAP + Pôr do sol + Quinta + Bollinger ⚠️ | **+86% · −24,5%** | +29% · −5,3% | +20% | −7,6% | 1,0 | 1,15 → 1,24 | +13% | 0,06 |
> | 3664 | ADX + Donchian + Pullback + Onda | **+221% · −45,5%** | +59% · −9,8% | +35% | −6,2% | 3,5 | 1,07 → 1,62 | +23% | 0,12 |
> | 3665 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+182% · −41,4%** | +42% · −8,0% | +27% | −5,4% | 2,6 | 1,33 → 1,54 | +19% | 0,00 |
> | 3666 | ADX + VWAP + IFR + Pôr do sol + Pullback | **+200% · −41,0%** | +44% · −7,6% | +29% | −4,5% | 3,7 | 1,35 → 1,65 | +15% | 0,03 |
> | 3667 | ADX + BB explosão + MACD + Rompe 200 + Bollinger | **+203% · −54,8%** | +46% · −11,2% | +28% | −6,6% | 2,3 | 0,99 → 1,56 | +22% | 0,23 |
> | 3668 | Donchian + GPS médias + MACD | **+180% · −38,7%** | +65% · −13,1% | +37% | −12,7% | 1,9 | 1,33 → 1,25 | +25% | 0,43 |
> | 3669 | Donchian + BB explosão + IFR + Rompe 200 + Tendência | **+262% · −60,8%** | +57% · −14,2% | +35% | −7,5% | 3,0 | 1,58 → 1,40 | +17% | 0,41 |
> | 3670 | ADX + GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+232% · −49,8%** | +51% · −10,3% | +32% | −7,6% | 2,5 | 1,14 → 1,58 | +25% | 0,20 |
> | 3671 | VWAP + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+106% · −34,4%** | +34% · −8,5% | +26% | −13,2% | 1,0 | 0,73 → 1,38 | +17% | 0,19 |
> | 3672 | BB explosão + Quinta + Bollinger + Tendência ⚠️ | **+170% · −49,3%** | +46% · −12,9% | +29% | −5,6% | 2,9 | 1,62 → 1,41 | +16% | 0,15 |
> | 3673 | VWAP + GPS médias + Pôr do sol + Bollinger + Onda | **+181% · −43,6%** | +42% · −9,2% | +27% | −11,2% | 1,2 | 0,90 → 1,28 | +24% | 0,14 |
> | 3674 | ADX + VWAP + Quinta + Rompe 200 + Onda ⚠️ | **+128% · −37,1%** | +36% · −6,5% | +25% | −8,2% | 1,5 | 0,62 → 1,34 | +17% | 0,04 |
> | 3675 | ADX + VWAP + GPS médias + Tendência + Onda | **+226% · −61,2%** | +57% · −13,7% | +35% | −9,2% | 2,5 | 1,02 → 1,37 | +29% | 0,29 |
> | 3676 | ADX + BB explosão + MACD + Quinta ⚠️ | **+135% · −56,1%** | +44% · −15,3% | +28% | −6,8% | 2,3 | 0,84 → 1,49 | +23% | 0,11 |
> | 3677 | ADX + VWAP + Pôr do sol + Bollinger + Onda | **+186% · −38,9%** | +43% · −7,1% | +27% | −7,6% | 1,9 | 0,60 → 1,57 | +16% | 0,15 |
> | 3678 | ADX + VWAP + Donchian + GPS médias + Pullback | **+247% · −59,2%** | +58% · −13,3% | +33% | −7,6% | 2,7 | 1,41 → 1,32 | +20% | 0,20 |
> | 3679 | ADX + BB explosão + Bollinger + Tendência | **+234% · −65,0%** | +61% · −19,6% | +35% | −8,0% | 2,8 | 1,33 → 1,58 | +21% | 0,38 |
> | 3680 | BB explosão + GPS médias + Quinta + Pullback + Bollinger ⚠️ | **+189% · −46,5%** | +43% · −9,4% | +26% | −5,5% | 2,5 | 1,77 → 1,23 | +15% | 0,07 |
> | 3681 | BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+131% · −38,3%** | +35% · −7,7% | +25% | −8,3% | 1,5 | 0,70 → 1,45 | +15% | 0,07 |
> | 3682 | ADX + MACD + Rompe 200 | **+111% · −36,3%** | +45% · −12,0% | +29% | −8,9% | 1,8 | 0,77 → 1,51 | +22% | 0,07 |
> | 3683 | BB explosão + MACD + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+156% · −40,0%** | +39% · −8,2% | +28% | −9,9% | 1,5 | 0,63 → 1,55 | +15% | 0,11 |
> | 3684 | VWAP + BB explosão + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+106% · −48,6%** | +31% · −10,9% | +23% | −10,5% | 1,0 | 0,98 → 1,15 | +16% | 0,07 |
> | 3685 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+182% · −46,4%** | +43% · −10,1% | +27% | −6,3% | 2,3 | 1,30 → 1,44 | +18% | 0,10 |
> | 3686 | VWAP + GPS médias + Quinta ⚠️ | **+87% · −33,5%** | +38% · −11,5% | +25% | −12,8% | 1,0 | 1,22 → 0,84 | +17% | −0,06 |
> | 3687 | ADX + VWAP + Donchian + Pullback + Rompe 200 | **+204% · −50,2%** | +47% · −9,6% | +29% | −6,2% | 2,6 | 1,36 → 1,32 | +17% | 0,15 |
> | 3688 | ADX + GPS médias + MACD + Pôr do sol + Onda | **+208% · −48,0%** | +50% · −9,5% | +31% | −7,4% | 2,5 | 0,82 → 1,55 | +23% | 0,10 |
> | 3689 | GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+123% · −30,5%** | +46% · −9,8% | +29% | −7,6% | 2,1 | 1,34 → 1,44 | +22% | 0,03 |
> | 3690 | BB explosão + MACD + Pôr do sol + Quinta + Bollinger ⚠️ | **+143% · −32,6%** | +35% · −6,1% | +24% | −5,9% | 1,8 | 1,15 → 1,53 | +19% | 0,06 |

> [!example]- Combinações 3691 a 3720 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3691 | BB explosão + Pôr do sol + Rompe 200 + Tendência + Onda | **+151% · −48,7%** | +39% · −9,5% | +28% | −7,2% | 2,1 | 1,04 → 1,30 | +23% | 0,12 |
> | 3692 | ADX + 1ª vela 80 + Quinta + Onda ⚠️ | **+156% · −39,0%** | +46% · −9,2% | +30% | −6,2% | 2,8 | 0,56 → 1,78 | +16% | −0,03 |
> | 3693 | ADX + BB explosão + GPS médias + IFR + Bollinger | **+286% · −60,2%** | +62% · −14,5% | +34% | −6,3% | 3,4 | 1,33 → 1,58 | +23% | 0,39 |
> | 3694 | BB explosão + GPS médias + 1ª vela 80 + Pullback + Rompe 200 ⚠️ | **+176% · −52,8%** | +43% · −12,3% | +28% | −7,5% | 2,0 | 1,55 → 1,25 | +17% | 0,13 |
> | 3695 | ADX + BB explosão + IFR + MACD | **+196% · −57,5%** | +57% · −15,6% | +35% | −7,7% | 2,9 | 0,97 → 1,63 | +26% | 0,34 |
> | 3696 | ADX + GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+180% · −45,7%** | +45% · −8,9% | +28% | −6,1% | 2,5 | 0,96 → 1,43 | +24% | 0,06 |
> | 3697 | VWAP + BB explosão + Quinta + Rompe 200 + Tendência ⚠️ | **+124% · −61,3%** | +36% · −12,6% | +26% | −7,8% | 1,7 | 1,29 → 1,02 | +13% | 0,14 |
> | 3698 | MACD | **+40% · −10,5%** | +40% · −10,5% | +31% | −16,7% | 1,1 | 0,52 → 1,20 | +21% | — |
> | 3699 | GPS médias + MACD | **+100% · −28,2%** | +55% · −14,5% | +34% | −15,1% | 1,4 | 1,17 → 1,15 | +28% | 0,29 |
> | 3700 | ADX + Quinta + Rompe 200 ⚠️ | **+84% · −30,0%** | +37% · −9,5% | +24% | −6,7% | 1,7 | 0,91 → 1,40 | +18% | 0,02 |
> | 3701 | BB explosão + 1ª vela 80 + Tendência + Onda ⚠️ | **+180% · −49,0%** | +52% · −12,5% | +35% | −8,7% | 2,5 | 0,95 → 1,49 | +23% | 0,24 |
> | 3702 | ADX + Donchian + MACD + Quinta ⚠️ | **+201% · −43,5%** | +54% · −9,9% | +32% | −5,6% | 3,5 | 1,12 → 1,63 | +21% | 0,11 |
> | 3703 | GPS médias + Rompe 200 | **+76% · −25,7%** | +44% · −12,1% | +27% | −9,4% | 1,5 | 1,49 → 0,79 | +17% | 0,26 |
> | 3704 | ADX + 1ª vela 80 + Quinta ⚠️ | **+119% · −31,8%** | +46% · −10,0% | +29% | −5,5% | 3,0 | 0,78 → 1,81 | +19% | −0,03 |
> | 3705 | ADX + BB explosão + Pullback + Rompe 200 | **+132% · −53,3%** | +42% · −14,3% | +27% | −5,8% | 2,5 | 1,29 → 1,33 | +15% | 0,11 |
> | 3706 | VWAP + Donchian + GPS médias + Bollinger + Onda | **+250% · −51,2%** | +55% · −11,3% | +31% | −12,3% | 1,5 | 1,05 → 1,29 | +26% | 0,31 |
> | 3707 | BB explosão + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+124% · −34,3%** | +38% · −8,5% | +27% | −9,6% | 1,5 | 0,88 → 1,52 | +17% | 0,07 |
> | 3708 | VWAP + BB explosão + Quinta + Pullback + Bollinger ⚠️ | **+134% · −40,6%** | +35% · −8,0% | +23% | −8,0% | 1,3 | 1,41 → 1,12 | +13% | 0,09 |
> | 3709 | ADX + VWAP + BB explosão + IFR + Quinta ⚠️ | **+175% · −58,1%** | +45% · −12,7% | +29% | −6,7% | 2,5 | 1,02 → 1,46 | +19% | 0,15 |
> | 3710 | ADX + GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+307% · −51,5%** | +58% · −10,9% | +33% | −7,6% | 2,7 | 1,18 → 1,73 | +24% | 0,30 |
> | 3711 | BB explosão + GPS médias + MACD + Pullback + Rompe 200 | **+158% · −54,0%** | +41% · −11,9% | +28% | −8,7% | 1,7 | 1,46 → 1,12 | +17% | 0,16 |
> | 3712 | VWAP + Quinta + Rompe 200 + Onda ⚠️ | **+69% · −30,2%** | +27% · −7,3% | +22% | −11,8% | 0,8 | 0,56 → 1,01 | +19% | 0,01 |
> | 3713 | VWAP + Donchian + 1ª vela 80 + Onda ⚠️ | **+175% · −41,9%** | +50% · −10,9% | +32% | −14,2% | 1,3 | 0,77 → 1,40 | +22% | 0,30 |
> | 3714 | ADX + Donchian + BB explosão + Pullback + Bollinger | **+284% · −62,5%** | +58% · −14,3% | +32% | −4,6% | 4,1 | 1,48 → 1,61 | +18% | 0,21 |
> | 3715 | ADX + VWAP + GPS médias + IFR | **+207% · −51,3%** | +60% · −13,7% | +35% | −9,2% | 2,4 | 1,17 → 1,44 | +24% | 0,31 |
> | 3716 | ADX + VWAP + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+214% · −67,7%** | +53% · −16,8% | +34% | −7,6% | 2,7 | 1,09 → 1,46 | +22% | 0,29 |
> | 3717 | ADX + VWAP + Pôr do sol + Rompe 200 + Onda | **+130% · −38,9%** | +36% · −6,6% | +25% | −8,1% | 1,5 | 0,57 → 1,36 | +17% | 0,07 |
> | 3718 | BB explosão + GPS médias + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+215% · −58,0%** | +51% · −13,9% | +32% | −7,4% | 2,7 | 1,50 → 1,30 | +19% | 0,26 |
> | 3719 | BB explosão + Quinta + Rompe 200 + Tendência + Onda ⚠️ | **+149% · −50,2%** | +39% · −10,1% | +28% | −7,2% | 2,1 | 1,09 → 1,28 | +22% | 0,10 |
> | 3720 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+108% · −47,0%** | +32% · −10,5% | +23% | −10,6% | 1,0 | 0,92 → 1,18 | +16% | 0,11 |

> [!example]- Combinações 3721 a 3750 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3721 | ADX + Donchian + MACD + Pôr do sol | **+204% · −42,4%** | +55% · −9,4% | +32% | −5,4% | 3,6 | 1,06 → 1,66 | +20% | 0,11 |
> | 3722 | ADX + IFR + Onda | **+171% · −34,0%** | +62% · −11,5% | +38% | −9,0% | 2,8 | 0,70 → 1,78 | +23% | 0,20 |
> | 3723 | ADX + VWAP + Donchian + 1ª vela 80 + Onda ⚠️ | **+238% · −54,7%** | +55% · −9,5% | +33% | −10,1% | 2,0 | 0,78 → 1,56 | +20% | 0,25 |
> | 3724 | Donchian + BB explosão + 1ª vela 80 + Rompe 200 + Tendência ⚠️ | **+245% · −59,6%** | +54% · −13,1% | +33% | −6,4% | 3,2 | 1,49 → 1,41 | +18% | 0,28 |
> | 3725 | Donchian + BB explosão + GPS médias + Bollinger + Tendência | **+291% · −68,3%** | +65% · −16,5% | +36% | −7,3% | 3,2 | 1,58 → 1,31 | +18% | 0,43 |
> | 3726 | Donchian + BB explosão + 1ª vela 80 + Pullback + Onda ⚠️ | **+224% · −47,8%** | +50% · −10,0% | +32% | −8,3% | 2,3 | 1,11 → 1,51 | +25% | 0,15 |
> | 3727 | Donchian + BB explosão + MACD + Pullback + Onda | **+200% · −52,5%** | +49% · −10,7% | +32% | −9,0% | 2,1 | 1,04 → 1,38 | +25% | 0,24 |
> | 3728 | VWAP + Donchian + GPS médias + Rompe 200 + Onda | **+184% · −50,4%** | +48% · −11,2% | +30% | −12,9% | 1,3 | 1,03 → 1,13 | +24% | 0,28 |
> | 3729 | ADX + VWAP + GPS médias + Pôr do sol + Quinta ⚠️ | **+159% · −44,4%** | +41% · −8,3% | +26% | −6,2% | 2,2 | 1,13 → 1,31 | +19% | 0,04 |
> | 3730 | ADX + VWAP + GPS médias + MACD + Bollinger | **+241% · −50,3%** | +53% · −10,8% | +31% | −10,1% | 1,8 | 1,06 → 1,42 | +23% | 0,36 |
> | 3731 | BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+99% · −35,4%** | +33% · −9,1% | +23% | −6,2% | 1,7 | 1,05 → 1,40 | +17% | 0,03 |
> | 3732 | VWAP + Donchian + MACD + Pôr do sol | **+139% · −34,7%** | +42% · −9,2% | +28% | −12,1% | 1,2 | 0,98 → 1,20 | +18% | 0,20 |
> | 3733 | VWAP + Bollinger + Tendência | **+141% · −31,9%** | +50% · −9,8% | +32% | −8,7% | 2,2 | 1,35 → 1,23 | +19% | 0,38 |
> | 3734 | BB explosão + GPS médias + IFR + MACD + Bollinger | **+258% · −51,0%** | +55% · −11,8% | +33% | −10,3% | 1,9 | 1,33 → 1,45 | +23% | 0,38 |
> | 3735 | ADX + VWAP + MACD + Quinta + Pullback ⚠️ | **+155% · −42,1%** | +38% · −6,7% | +27% | −6,0% | 2,4 | 1,13 → 1,44 | +16% | 0,06 |
> | 3736 | BB explosão + 1ª vela 80 + Pullback + Onda ⚠️ | **+139% · −36,3%** | +42% · −9,1% | +29% | −9,3% | 1,8 | 0,90 → 1,48 | +20% | 0,07 |
> | 3737 | BB explosão + GPS médias + MACD + 1ª vela 80 + Tendência ⚠️ | **+237% · −60,7%** | +55% · −13,3% | +35% | −9,8% | 2,3 | 1,35 → 1,38 | +24% | 0,33 |
> | 3738 | Donchian + 1ª vela 80 + Pullback + Onda ⚠️ | **+209% · −39,5%** | +52% · −8,5% | +33% | −7,1% | 2,9 | 1,14 → 1,64 | +27% | 0,09 |
> | 3739 | BB explosão + IFR + MACD + Bollinger + Onda | **+239% · −42,3%** | +50% · −8,9% | +32% | −9,1% | 2,1 | 0,88 → 1,63 | +23% | 0,30 |
> | 3740 | Donchian + BB explosão + GPS médias + IFR + Tendência | **+284% · −69,3%** | +68% · −17,8% | +39% | −7,5% | 3,6 | 1,57 → 1,36 | +19% | 0,50 |
> | 3741 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+168% · −45,6%** | +42% · −8,9% | +28% | −8,9% | 1,7 | 0,54 → 1,60 | +17% | 0,13 |
> | 3742 | VWAP + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+168% · −37,4%** | +38% · −7,6% | +26% | −10,8% | 1,2 | 0,64 → 1,58 | +18% | 0,18 |
> | 3743 | Donchian + BB explosão + GPS médias + IFR + Quinta ⚠️ | **+233% · −58,4%** | +56% · −13,2% | +33% | −7,9% | 2,6 | 1,50 → 1,34 | +18% | 0,24 |
> | 3744 | ADX + VWAP + MACD + Quinta + Onda ⚠️ | **+152% · −44,3%** | +40% · −7,8% | +28% | −9,5% | 1,6 | 0,55 → 1,46 | +17% | 0,10 |
> | 3745 | ADX + MACD + 1ª vela 80 ⚠️ | **+149% · −37,9%** | +55% · −12,7% | +34% | −8,9% | 2,4 | 0,71 → 1,77 | +20% | 0,20 |
> | 3746 | BB explosão + Quinta + Bollinger + Tendência + Onda ⚠️ | **+208% · −49,8%** | +46% · −9,8% | +30% | −6,8% | 2,5 | 1,13 → 1,48 | +24% | 0,13 |
> | 3747 | VWAP + Donchian + 1ª vela 80 + Pullback ⚠️ | **+179% · −44,3%** | +48% · −12,1% | +31% | −10,2% | 1,7 | 1,41 → 1,37 | +19% | 0,12 |
> | 3748 | VWAP + BB explosão + MACD + Pôr do sol + Pullback | **+113% · −44,5%** | +33% · −8,8% | +24% | −10,3% | 1,1 | 1,09 → 1,11 | +16% | 0,07 |
> | 3749 | GPS médias + Rompe 200 + Bollinger + Onda | **+171% · −36,9%** | +47% · −9,1% | +28% | −9,6% | 1,6 | 1,05 → 1,33 | +22% | 0,20 |
> | 3750 | ADX + BB explosão + GPS médias + MACD + Tendência | **+234% · −73,6%** | +60% · −19,4% | +37% | −8,6% | 2,8 | 1,27 → 1,39 | +24% | 0,39 |

> [!example]- Combinações 3751 a 3780 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3751 | BB explosão + GPS médias + Pullback + Tendência | **+183% · −60,8%** | +54% · −18,1% | +34% | −6,4% | 3,4 | 1,71 → 1,16 | +15% | 0,24 |
> | 3752 | Donchian + BB explosão + MACD + Pullback + Bollinger | **+249% · −51,3%** | +51% · −10,3% | +30% | −7,3% | 2,4 | 1,49 → 1,45 | +18% | 0,22 |
> | 3753 | ADX + BB explosão + 1ª vela 80 + Tendência + Onda ⚠️ | **+242% · −63,7%** | +57% · −14,8% | +36% | −8,5% | 2,7 | 0,94 → 1,62 | +24% | 0,24 |
> | 3754 | Donchian + BB explosão + Pullback + Rompe 200 | **+146% · −52,2%** | +44% · −13,1% | +28% | −6,1% | 2,5 | 1,59 → 1,12 | +11% | 0,20 |
> | 3755 | ADX + VWAP + Donchian + GPS médias + 1ª vela 80 ⚠️ | **+263% · −56,5%** | +61% · −12,6% | +34% | −9,8% | 2,2 | 1,18 → 1,45 | +25% | 0,28 |
> | 3756 | GPS médias + MACD + 1ª vela 80 ⚠️ | **+149% · −35,2%** | +54% · −12,2% | +34% | −13,6% | 1,5 | 1,16 → 1,42 | +23% | 0,27 |
> | 3757 | ADX + GPS médias + Pôr do sol + Rompe 200 + Onda | **+182% · −46,3%** | +45% · −9,0% | +28% | −6,1% | 2,5 | 0,91 → 1,45 | +23% | 0,06 |
> | 3758 | BB explosão + GPS médias + IFR + Tendência + Onda | **+244% · −61,6%** | +59% · −14,6% | +37% | −8,4% | 2,9 | 1,23 → 1,41 | +27% | 0,38 |
> | 3759 | Donchian + MACD + Pôr do sol | **+130% · −25,9%** | +48% · −8,4% | +30% | −7,3% | 2,3 | 1,16 → 1,43 | +22% | 0,11 |
> | 3760 | BB explosão + GPS médias + Pôr do sol + Rompe 200 + Tendência | **+174% · −58,5%** | +45% · −13,5% | +29% | −5,6% | 2,9 | 1,55 → 1,14 | +16% | 0,16 |
> | 3761 | BB explosão + IFR + MACD + Bollinger | **+198% · −37,5%** | +51% · −9,7% | +32% | −9,1% | 2,1 | 1,18 → 1,60 | +23% | 0,35 |
> | 3762 | ADX + VWAP + Quinta + Pullback + Rompe 200 ⚠️ | **+127% · −37,3%** | +34% · −6,1% | +24% | −5,0% | 2,2 | 1,30 → 1,26 | +16% | 0,04 |
> | 3763 | ADX + BB explosão + IFR + Pôr do sol | **+175% · −50,9%** | +51% · −12,8% | +31% | −5,4% | 3,4 | 1,07 → 1,70 | +22% | 0,12 |
> | 3764 | ADX + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+157% · −40,9%** | +46% · −9,9% | +30% | −7,1% | 2,4 | 0,59 → 1,68 | +17% | 0,13 |
> | 3765 | VWAP + BB explosão + GPS médias + IFR + Pôr do sol | **+165% · −55,5%** | +45% · −12,1% | +29% | −10,8% | 1,5 | 1,22 → 1,19 | +18% | 0,18 |
> | 3766 | BB explosão + MACD + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+154% · −42,9%** | +39% · −9,1% | +28% | −11,2% | 1,4 | 0,69 → 1,45 | +16% | 0,21 |
> | 3767 | VWAP + Rompe 200 + Bollinger + Onda | **+113% · −35,0%** | +35% · −8,9% | +24% | −13,0% | 0,9 | 0,63 → 1,19 | +20% | 0,24 |
> | 3768 | BB explosão + GPS médias + MACD + Quinta + Tendência ⚠️ | **+193% · −61,7%** | +49% · −14,2% | +32% | −7,9% | 2,4 | 1,42 → 1,24 | +20% | 0,21 |
> | 3769 | ADX + VWAP + 1ª vela 80 + Quinta ⚠️ | **+133% · −36,8%** | +41% · −8,6% | +27% | −6,8% | 2,2 | 0,77 → 1,57 | +15% | 0,04 |
> | 3770 | ADX + VWAP + GPS médias + MACD + Rompe 200 | **+178% · −53,3%** | +46% · −11,3% | +29% | −10,1% | 1,6 | 1,03 → 1,27 | +23% | 0,23 |
> | 3771 | VWAP + GPS médias + Rompe 200 + Bollinger + Onda | **+179% · −45,7%** | +42% · −10,1% | +27% | −12,5% | 1,1 | 0,96 → 1,18 | +25% | 0,25 |
> | 3772 | Donchian + BB explosão + IFR + MACD + Pôr do sol | **+226% · −47,7%** | +51% · −9,6% | +32% | −7,9% | 2,4 | 1,24 → 1,50 | +22% | 0,23 |
> | 3773 | VWAP + GPS médias + Pullback + Onda | **+134% · −39,3%** | +43% · −10,4% | +29% | −13,5% | 1,2 | 1,03 → 1,09 | +25% | 0,17 |
> | 3774 | ADX + BB explosão + GPS médias + MACD + Pullback | **+206% · −64,3%** | +52% · −15,2% | +32% | −7,1% | 2,7 | 1,30 → 1,39 | +22% | 0,19 |
> | 3775 | VWAP + Donchian + BB explosão + IFR + Bollinger | **+249% · −52,7%** | +54% · −11,1% | +32% | −10,2% | 1,8 | 1,26 → 1,38 | +17% | 0,38 |
> | 3776 | Pôr do sol | **+20% · −3,0%** | +20% · −3,0% | +17% | −2,7% | 1,4 | 0,79 → 1,34 | +12% | — |
> | 3777 | Donchian + BB explosão + GPS médias + Pullback + Bollinger | **+261% · −56,8%** | +57% · −12,5% | +31% | −7,3% | 2,6 | 1,67 → 1,28 | +15% | 0,24 |
> | 3778 | VWAP + BB explosão + GPS médias + IFR + MACD | **+179% · −60,4%** | +49% · −14,0% | +32% | −14,0% | 1,4 | 1,11 → 1,21 | +20% | 0,39 |
> | 3779 | ADX + BB explosão + Quinta + Rompe 200 + Onda ⚠️ | **+140% · −50,6%** | +39% · −10,0% | +26% | −6,3% | 2,1 | 0,71 → 1,42 | +20% | 0,05 |
> | 3780 | Donchian + 1ª vela 80 + Pullback ⚠️ | **+169% · −32,9%** | +56% · −10,5% | +34% | −4,4% | 4,7 | 1,75 → 1,70 | +22% | −0,06 |

> [!example]- Combinações 3781 a 3810 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3781 | Donchian + Pullback | **+112% · −27,5%** | +58% · −12,6% | +34% | −4,7% | 4,5 | 1,91 → 1,34 | +14% | 0,00 |
> | 3782 | ADX + VWAP + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+165% · −46,6%** | +42% · −9,3% | +28% | −10,3% | 1,5 | 0,60 → 1,50 | +20% | 0,19 |
> | 3783 | ADX + GPS médias + MACD + Bollinger + Onda | **+273% · −50,7%** | +57% · −10,4% | +33% | −8,3% | 2,4 | 0,90 → 1,62 | +23% | 0,28 |
> | 3784 | Donchian + BB explosão + Quinta + Rompe 200 + Tendência ⚠️ | **+195% · −63,6%** | +47% · −13,6% | +30% | −5,8% | 3,0 | 1,58 → 1,23 | +14% | 0,20 |
> | 3785 | Donchian + 1ª vela 80 + Quinta ⚠️ | **+143% · −30,4%** | +50% · −8,8% | +31% | −5,2% | 3,4 | 1,44 → 1,69 | +24% | −0,14 |
> | 3786 | ADX + BB explosão + IFR + 1ª vela 80 ⚠️ | **+217% · −50,2%** | +59% · −12,2% | +35% | −5,8% | 3,9 | 1,05 → 1,80 | +26% | 0,24 |
> | 3787 | ADX + VWAP + Pôr do sol + 1ª vela 80 + Pullback ⚠️ | **+172% · −42,4%** | +40% · −6,0% | +27% | −5,3% | 2,7 | 1,12 → 1,63 | +15% | 0,04 |
> | 3788 | VWAP + Pôr do sol + Rompe 200 + Onda | **+70% · −30,4%** | +27% · −7,4% | +22% | −11,9% | 0,8 | 0,50 → 1,03 | +18% | 0,08 |
> | 3789 | ADX + VWAP + BB explosão + IFR + Rompe 200 | **+174% · −59,0%** | +46% · −13,7% | +29% | −8,0% | 2,1 | 1,01 → 1,39 | +18% | 0,26 |
> | 3790 | ADX + VWAP + Quinta + Bollinger ⚠️ | **+146% · −36,4%** | +42% · −8,5% | +26% | −6,0% | 2,2 | 0,91 → 1,51 | +14% | 0,17 |
> | 3791 | ADX + Donchian + BB explosão + 1ª vela 80 + Onda ⚠️ | **+241% · −61,1%** | +59% · −13,3% | +34% | −7,8% | 2,8 | 0,84 → 1,61 | +27% | 0,24 |
> | 3792 | ADX + VWAP + IFR + Onda | **+178% · −42,2%** | +52% · −9,7% | +34% | −9,0% | 2,3 | 0,68 → 1,57 | +18% | 0,22 |
> | 3793 | VWAP + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+153% · −54,9%** | +47% · −15,7% | +32% | −11,4% | 1,7 | 1,15 → 1,26 | +18% | 0,31 |
> | 3794 | ADX + VWAP + 1ª vela 80 + Rompe 200 ⚠️ | **+134% · −38,7%** | +42% · −9,3% | +28% | −8,8% | 1,7 | 0,78 → 1,47 | +18% | 0,17 |
> | 3795 | ADX + BB explosão + Quinta + Bollinger + Onda ⚠️ | **+197% · −53,5%** | +46% · −10,4% | +28% | −5,7% | 2,7 | 0,74 → 1,62 | +19% | 0,11 |
> | 3796 | ADX + VWAP + Pullback + Tendência | **+183% · −54,0%** | +51% · −14,1% | +34% | −7,5% | 2,8 | 1,41 → 1,38 | +20% | 0,17 |
> | 3797 | VWAP + GPS médias + MACD + Bollinger + Onda | **+204% · −50,6%** | +47% · −11,5% | +29% | −14,2% | 1,2 | 0,85 → 1,31 | +25% | 0,33 |
> | 3798 | ADX + VWAP + GPS médias + MACD + Quinta ⚠️ | **+180% · −50,3%** | +46% · −10,2% | +29% | −9,2% | 1,8 | 1,03 → 1,33 | +22% | 0,14 |
> | 3799 | ADX + VWAP + Donchian + GPS médias + MACD | **+237% · −60,8%** | +59% · −14,0% | +34% | −10,9% | 2,0 | 1,11 → 1,34 | +25% | 0,35 |
> | 3800 | Donchian + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+192% · −45,6%** | +52% · −12,4% | +32% | −6,5% | 2,9 | 1,51 → 1,48 | +17% | 0,10 |
> | 3801 | BB explosão + GPS médias + Quinta + Bollinger + Tendência ⚠️ | **+232% · −58,2%** | +51% · −12,5% | +31% | −5,5% | 3,3 | 1,65 → 1,30 | +17% | 0,20 |
> | 3802 | ADX + BB explosão + IFR + Rompe 200 | **+171% · −51,7%** | +51% · −14,3% | +31% | −6,2% | 3,0 | 1,12 → 1,57 | +20% | 0,26 |
> | 3803 | ADX + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+158% · −39,7%** | +46% · −9,4% | +30% | −6,3% | 2,7 | 0,51 → 1,80 | +16% | 0,07 |
> | 3804 | ADX + VWAP + GPS médias + Quinta + Rompe 200 ⚠️ | **+156% · −48,8%** | +41% · −9,8% | +26% | −7,6% | 1,8 | 1,18 → 1,20 | +19% | 0,09 |
> | 3805 | BB explosão + MACD + Pullback + Bollinger + Onda | **+192% · −40,4%** | +43% · −7,7% | +28% | −8,7% | 1,8 | 0,98 → 1,50 | +23% | 0,17 |
> | 3806 | ADX + VWAP + IFR + Quinta ⚠️ | **+158% · −36,2%** | +46% · −8,5% | +30% | −5,6% | 3,1 | 1,03 → 1,59 | +15% | 0,08 |
> | 3807 | ADX + VWAP + GPS médias + Tendência | **+206% · −60,2%** | +61% · −17,7% | +36% | −8,5% | 2,8 | 1,28 → 1,31 | +23% | 0,32 |
> | 3808 | ADX + VWAP + BB explosão + IFR + 1ª vela 80 ⚠️ | **+218% · −56,8%** | +52% · −11,3% | +33% | −8,7% | 2,3 | 0,97 → 1,60 | +22% | 0,26 |
> | 3809 | BB explosão + Pullback + Rompe 200 + Bollinger + Onda | **+162% · −39,6%** | +38% · −7,2% | +26% | −7,4% | 1,7 | 1,11 → 1,36 | +21% | 0,14 |
> | 3810 | BB explosão + MACD + Quinta + Tendência ⚠️ | **+142% · −53,5%** | +43% · −14,7% | +31% | −7,8% | 2,3 | 1,30 → 1,29 | +19% | 0,17 |

> [!example]- Combinações 3811 a 3840 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3811 | ADX + BB explosão + GPS médias + Bollinger + Tendência | **+282% · −71,1%** | +63% · −18,0% | +35% | −6,9% | 3,3 | 1,43 → 1,46 | +21% | 0,40 |
> | 3812 | ADX + VWAP + Tendência + Onda | **+177% · −55,8%** | +53% · −14,5% | +35% | −10,6% | 2,1 | 0,82 → 1,42 | +23% | 0,27 |
> | 3813 | BB explosão + GPS médias + IFR + Pôr do sol | **+164% · −47,4%** | +50% · −12,3% | +31% | −8,1% | 2,2 | 1,39 → 1,32 | +19% | 0,15 |
> | 3814 | VWAP + BB explosão + IFR + Pôr do sol + Bollinger | **+181% · −41,1%** | +42% · −8,6% | +27% | −8,4% | 1,6 | 1,17 → 1,42 | +18% | 0,17 |
> | 3815 | Donchian + BB explosão + Pôr do sol + Rompe 200 + Tendência | **+198% · −60,8%** | +47% · −13,1% | +30% | −5,8% | 2,9 | 1,53 → 1,25 | +15% | 0,20 |
> | 3816 | VWAP + GPS médias + MACD + 1ª vela 80 ⚠️ | **+158% · −47,6%** | +46% · −13,4% | +31% | −16,9% | 1,1 | 1,03 → 1,26 | +27% | 0,33 |
> | 3817 | ADX + BB explosão + MACD + Quinta + Onda ⚠️ | **+163% · −57,4%** | +44% · −11,9% | +29% | −7,4% | 2,2 | 0,63 → 1,53 | +20% | 0,09 |
> | 3818 | ADX + Donchian + BB explosão + Rompe 200 + Tendência | **+244% · −71,9%** | +59% · −19,0% | +35% | −7,7% | 2,8 | 1,38 → 1,41 | +18% | 0,33 |
> | 3819 | ADX + BB explosão + GPS médias + Pôr do sol + Tendência | **+221% · −69,6%** | +56% · −17,3% | +33% | −6,1% | 3,4 | 1,38 → 1,40 | +21% | 0,20 |
> | 3820 | Donchian + BB explosão + IFR + Pôr do sol + Onda | **+221% · −44,9%** | +51% · −8,9% | +32% | −7,1% | 2,7 | 1,02 → 1,53 | +26% | 0,17 |
> | 3821 | VWAP + Pullback | **+46% · −24,5%** | +29% · −12,1% | +24% | −15,6% | 0,7 | 1,21 → 0,64 | +11% | 0,10 |
> | 3822 | BB explosão + GPS médias + Pôr do sol + Pullback + Bollinger | **+191% · −47,1%** | +44% · −9,5% | +26% | −5,5% | 2,5 | 1,70 → 1,27 | +16% | 0,04 |
> | 3823 | BB explosão + GPS médias + 1ª vela 80 + Bollinger + Tendência ⚠️ | **+284% · −57,0%** | +58% · −12,6% | +34% | −7,5% | 2,9 | 1,54 → 1,46 | +22% | 0,31 |
> | 3824 | BB explosão + MACD + Pôr do sol + Tendência + Onda | **+175% · −52,7%** | +44% · −10,8% | +31% | −8,5% | 2,1 | 0,92 → 1,40 | +24% | 0,19 |
> | 3825 | BB explosão + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+144% · −32,6%** | +41% · −7,7% | +26% | −6,0% | 2,1 | 1,23 → 1,66 | +17% | 0,03 |
> | 3826 | ADX + VWAP + GPS médias + Rompe 200 + Bollinger | **+214% · −49,1%** | +49% · −10,4% | +28% | −8,3% | 1,8 | 1,20 → 1,33 | +21% | 0,27 |
> | 3827 | VWAP + Pôr do sol + 1ª vela 80 + Quinta + Onda ⚠️ | **+113% · −33,7%** | +31% · −6,3% | +24% | −9,8% | 1,1 | 0,58 → 1,45 | +17% | 0,02 |
> | 3828 | ADX + VWAP + Donchian + Quinta + Rompe 200 ⚠️ | **+180% · −46,5%** | +44% · −8,8% | +27% | −6,2% | 2,3 | 1,15 → 1,33 | +18% | 0,09 |
> | 3829 | GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+122% · −34,5%** | +46% · −11,6% | +29% | −9,1% | 1,8 | 1,37 → 1,28 | +23% | 0,22 |
> | 3830 | ADX + Pôr do sol + 1ª vela 80 ⚠️ | **+121% · −30,8%** | +47% · −9,5% | +29% | −4,9% | 3,4 | 0,70 → 1,86 | +17% | 0,06 |
> | 3831 | VWAP + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+133% · −42,1%** | +41% · −11,1% | +27% | −12,3% | 1,2 | 1,20 → 1,21 | +22% | 0,01 |
> | 3832 | BB explosão + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+122% · −36,5%** | +38% · −9,3% | +27% | −10,7% | 1,3 | 0,94 → 1,39 | +19% | 0,18 |
> | 3833 | VWAP + BB explosão + Pôr do sol + Pullback + Bollinger | **+137% · −38,7%** | +35% · −7,4% | +23% | −8,1% | 1,3 | 1,34 → 1,15 | +14% | 0,08 |
> | 3834 | ADX + VWAP + Donchian + MACD + Rompe 200 | **+202% · −50,3%** | +49% · −10,3% | +30% | −8,7% | 2,0 | 1,00 → 1,36 | +20% | 0,25 |
> | 3835 | Donchian + Tendência + Onda | **+191% · −39,9%** | +66% · −13,0% | +41% | −10,6% | 2,6 | 1,13 → 1,42 | +33% | 0,42 |
> | 3836 | ADX + Donchian + IFR | **+232% · −40,8%** | +77% · −12,8% | +42% | −6,8% | 4,2 | 1,29 → 1,78 | +24% | 0,33 |
> | 3837 | VWAP + Donchian + GPS médias + Rompe 200 | **+160% · −48,3%** | +49% · −13,6% | +29% | −12,4% | 1,3 | 1,33 → 0,97 | +15% | 0,30 |
> | 3838 | Donchian + BB explosão + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+208% · −44,7%** | +47% · −9,5% | +30% | −8,9% | 1,9 | 1,13 → 1,51 | +23% | 0,16 |
> | 3839 | BB explosão + GPS médias + 1ª vela 80 + Pullback + Bollinger ⚠️ | **+239% · −50,5%** | +50% · −11,1% | +30% | −7,4% | 2,3 | 1,61 → 1,45 | +19% | 0,14 |
> | 3840 | ADX + BB explosão + Pôr do sol + Bollinger + Onda | **+199% · −52,6%** | +46% · −10,1% | +28% | −5,8% | 2,6 | 0,69 → 1,65 | +19% | 0,11 |

> [!example]- Combinações 3841 a 3870 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3841 | Donchian + BB explosão + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+138% · −42,7%** | +36% · −7,9% | +24% | −4,5% | 2,4 | 1,42 → 1,20 | +14% | 0,04 |
> | 3842 | ADX + VWAP + Donchian + MACD + Pullback | **+232% · −54,2%** | +52% · −10,4% | +32% | −7,3% | 2,6 | 1,20 → 1,43 | +18% | 0,20 |
> | 3843 | BB explosão + GPS médias + MACD + Pôr do sol + Tendência | **+196% · −60,6%** | +49% · −13,9% | +32% | −7,9% | 2,4 | 1,37 → 1,26 | +21% | 0,22 |
> | 3844 | GPS médias + Bollinger | **+120% · −29,5%** | +62% · −14,9% | +31% | −9,6% | 1,9 | 1,62 → 1,25 | +23% | 0,33 |
> | 3845 | ADX + Donchian + BB explosão + GPS médias + Tendência | **+258% · −77,7%** | +69% · −21,7% | +39% | −7,6% | 3,4 | 1,41 → 1,37 | +20% | 0,45 |
> | 3846 | ADX + VWAP + MACD + 1ª vela 80 + Onda ⚠️ | **+191% · −48,3%** | +47% · −9,7% | +31% | −11,8% | 1,6 | 0,55 → 1,57 | +20% | 0,27 |
> | 3847 | Donchian + GPS médias + Onda | **+174% · −39,7%** | +65% · −14,1% | +37% | −11,5% | 2,1 | 1,04 → 1,28 | +28% | 0,32 |
> | 3848 | ADX + BB explosão + MACD + Pôr do sol + Onda | **+166% · −56,5%** | +44% · −11,5% | +29% | −7,3% | 2,2 | 0,59 → 1,55 | +19% | 0,10 |
> | 3849 | ADX + MACD + 1ª vela 80 + Onda ⚠️ | **+185% · −42,6%** | +52% · −10,4% | +34% | −8,1% | 2,6 | 0,53 → 1,75 | +17% | 0,21 |
> | 3850 | BB explosão + MACD + Quinta + Tendência + Onda ⚠️ | **+172% · −54,1%** | +43% · −11,4% | +31% | −8,5% | 2,1 | 0,97 → 1,39 | +24% | 0,15 |
> | 3851 | VWAP + BB explosão + GPS médias + IFR + Rompe 200 | **+161% · −59,0%** | +45% · −13,6% | +29% | −11,6% | 1,4 | 1,25 → 1,10 | +15% | 0,33 |
> | 3852 | BB explosão + GPS médias + IFR + 1ª vela 80 ⚠️ | **+205% · −46,8%** | +58% · −12,7% | +35% | −10,4% | 2,1 | 1,34 → 1,47 | +23% | 0,31 |
> | 3853 | Donchian + BB explosão + GPS médias + Pôr do sol + Quinta ⚠️ | **+175% · −53,5%** | +46% · −11,5% | +28% | −6,8% | 2,2 | 1,44 → 1,17 | +16% | 0,06 |
> | 3854 | Donchian + MACD + Rompe 200 | **+129% · −28,6%** | +48% · −9,4% | +30% | −8,8% | 2,0 | 1,22 → 1,26 | +21% | 0,28 |
> | 3855 | Donchian + BB explosão + IFR + Quinta + Onda ⚠️ | **+218% · −46,4%** | +51% · −9,2% | +32% | −7,1% | 2,7 | 1,07 → 1,51 | +25% | 0,14 |
> | 3856 | VWAP + Donchian + Rompe 200 + Onda | **+133% · −41,5%** | +42% · −10,8% | +28% | −13,3% | 1,1 | 0,81 → 1,13 | +22% | 0,27 |
> | 3857 | ADX + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+173% · −50,7%** | +50% · −13,0% | +31% | −5,4% | 3,4 | 1,20 → 1,65 | +22% | 0,05 |
> | 3858 | ADX + BB explosão + GPS médias + Pullback + Bollinger | **+246% · −60,9%** | +55% · −14,0% | +31% | −5,0% | 3,6 | 1,48 → 1,44 | +19% | 0,24 |
> | 3859 | ADX + GPS médias + Rompe 200 + Bollinger + Onda | **+244% · −49,1%** | +52% · −10,0% | +30% | −6,9% | 2,5 | 1,00 → 1,54 | +24% | 0,21 |
> | 3860 | ADX + Donchian + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+251% · −66,8%** | +64% · −15,8% | +36% | −8,1% | 2,8 | 1,22 → 1,47 | +23% | 0,33 |
> | 3861 | ADX + BB explosão + IFR + Quinta + Onda ⚠️ | **+203% · −53,4%** | +49% · −10,4% | +31% | −6,0% | 3,1 | 0,85 → 1,66 | +24% | 0,10 |
> | 3862 | VWAP + BB explosão + GPS médias + IFR + Bollinger | **+218% · −55,5%** | +52% · −12,8% | +31% | −11,7% | 1,5 | 1,28 → 1,27 | +18% | 0,38 |
> | 3863 | BB explosão + MACD + Pôr do sol + Tendência | **+144% · −52,0%** | +44% · −14,0% | +31% | −7,8% | 2,3 | 1,23 → 1,32 | +21% | 0,19 |
> | 3864 | ADX + VWAP + 1ª vela 80 + Bollinger + Onda ⚠️ | **+229% · −48,2%** | +49% · −9,9% | +30% | −9,7% | 1,8 | 0,63 → 1,68 | +19% | 0,28 |
> | 3865 | Donchian + BB explosão + GPS médias + Quinta + Tendência ⚠️ | **+226% · −67,6%** | +57% · −16,5% | +34% | −6,3% | 3,4 | 1,57 → 1,22 | +16% | 0,26 |
> | 3866 | BB explosão + MACD + Quinta + Rompe 200 + Bollinger ⚠️ | **+142% · −34,9%** | +35% · −6,7% | +24% | −6,8% | 1,6 | 1,21 → 1,37 | +18% | 0,11 |
> | 3867 | ADX + BB explosão + MACD + Bollinger + Onda | **+223% · −59,0%** | +51% · −12,4% | +31% | −8,1% | 2,3 | 0,68 → 1,62 | +20% | 0,28 |
> | 3868 | VWAP + BB explosão + MACD + Quinta + Tendência ⚠️ | **+145% · −59,5%** | +40% · −13,5% | +29% | −9,8% | 1,6 | 1,12 → 1,16 | +18% | 0,21 |
> | 3869 | VWAP + MACD + 1ª vela 80 ⚠️ | **+94% · −34,7%** | +38% · −11,9% | +28% | −18,0% | 0,9 | 0,67 → 1,30 | +19% | 0,38 |
> | 3870 | ADX + 1ª vela 80 + Bollinger + Onda ⚠️ | **+219% · −42,6%** | +55% · −10,6% | +32% | −7,0% | 2,8 | 0,62 → 1,90 | +16% | 0,23 |

> [!example]- Combinações 3871 a 3900 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3871 | ADX + VWAP + MACD + Rompe 200 + Onda | **+151% · −43,6%** | +41% · −8,4% | +28% | −11,0% | 1,4 | 0,57 → 1,39 | +19% | 0,20 |
> | 3872 | VWAP + BB explosão + MACD + Pullback + Rompe 200 | **+111% · −48,8%** | +33% · −10,3% | +25% | −11,6% | 1,0 | 1,13 → 1,01 | +14% | 0,18 |
> | 3873 | ADX + VWAP + GPS médias + IFR + Onda | **+231% · −51,6%** | +56% · −11,0% | +34% | −9,8% | 2,2 | 0,92 → 1,48 | +25% | 0,27 |
> | 3874 | BB explosão + MACD + Pullback + Bollinger | **+154% · −38,6%** | +43% · −8,8% | +28% | −7,3% | 2,0 | 1,43 → 1,45 | +18% | 0,14 |
> | 3875 | VWAP + Donchian + Tendência + Onda | **+191% · −47,6%** | +56% · −12,0% | +36% | −11,0% | 2,1 | 1,02 → 1,27 | +27% | 0,39 |
> | 3876 | ADX + VWAP + MACD + Pôr do sol + Rompe 200 | **+135% · −39,6%** | +36% · −7,3% | +25% | −7,4% | 1,7 | 0,78 → 1,37 | +16% | 0,09 |
> | 3877 | ADX + VWAP + BB explosão + Rompe 200 + Bollinger | **+168% · −57,2%** | +43% · −12,2% | +26% | −8,4% | 1,6 | 0,93 → 1,30 | +17% | 0,28 |
> | 3878 | VWAP + Donchian + Pôr do sol + Onda | **+135% · −37,2%** | +42% · −9,0% | +28% | −11,7% | 1,3 | 0,75 → 1,23 | +18% | 0,13 |
> | 3879 | ADX + BB explosão + Rompe 200 + Bollinger + Onda | **+196% · −52,4%** | +47% · −10,0% | +28% | −7,0% | 2,2 | 0,75 → 1,54 | +20% | 0,20 |
> | 3880 | ADX + VWAP + GPS médias + Pôr do sol + Rompe 200 | **+158% · −47,7%** | +42% · −9,4% | +26% | −7,6% | 1,8 | 1,12 → 1,23 | +20% | 0,09 |
> | 3881 | ADX + VWAP + Pôr do sol + Quinta + Onda ⚠️ | **+130% · −40,3%** | +36% · −6,6% | +25% | −6,7% | 1,8 | 0,55 → 1,45 | +14% | 0,01 |
> | 3882 | BB explosão + Pôr do sol + Bollinger + Tendência + Onda | **+211% · −48,2%** | +46% · −9,2% | +30% | −6,8% | 2,5 | 1,08 → 1,50 | +23% | 0,15 |
> | 3883 | ADX + VWAP + BB explosão + IFR + Pôr do sol | **+178% · −57,4%** | +46% · −12,3% | +29% | −6,7% | 2,5 | 0,97 → 1,48 | +18% | 0,15 |
> | 3884 | BB explosão + GPS médias + IFR + Quinta + Onda ⚠️ | **+189% · −50,0%** | +48% · −10,3% | +31% | −8,8% | 2,1 | 1,08 → 1,38 | +26% | 0,12 |
> | 3885 | 1ª vela 80 + Quinta ⚠️ | **+55% · −13,7%** | +33% · −5,7% | +25% | −5,2% | 2,3 | 0,86 → 1,60 | +14% | −0,34 |
> | 3886 | ADX + VWAP + Quinta + Pullback + Onda ⚠️ | **+149% · −41,7%** | +39% · −6,5% | +27% | −6,8% | 2,1 | 0,84 → 1,42 | +16% | 0,04 |
> | 3887 | VWAP + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+115% · −48,2%** | +38% · −13,7% | +27% | −12,2% | 1,1 | 1,15 → 1,20 | +15% | 0,12 |
> | 3888 | Donchian + BB explosão + IFR + MACD + Quinta ⚠️ | **+223% · −49,1%** | +50% · −10,2% | +32% | −7,9% | 2,4 | 1,29 → 1,48 | +21% | 0,23 |
> | 3889 | ADX + 1ª vela 80 + Rompe 200 ⚠️ | **+121% · −34,1%** | +47% · −11,0% | +29% | −6,8% | 2,5 | 0,80 → 1,69 | +21% | 0,10 |
> | 3890 | ADX + Donchian + BB explosão + Pôr do sol + Quinta ⚠️ | **+191% · −58,2%** | +47% · −12,9% | +28% | −4,3% | 3,5 | 1,19 → 1,52 | +19% | 0,06 |
> | 3891 | ADX + VWAP + Donchian + Pullback + Onda | **+221% · −55,1%** | +52% · −9,6% | +32% | −8,1% | 2,4 | 0,98 → 1,43 | +19% | 0,18 |
> | 3892 | ADX + VWAP + GPS médias + Pullback + Onda | **+194% · −49,9%** | +49% · −10,4% | +31% | −9,5% | 1,9 | 1,00 → 1,33 | +23% | 0,17 |
> | 3893 | VWAP + Donchian + BB explosão + IFR + Quinta ⚠️ | **+187% · −53,5%** | +47% · −11,6% | +30% | −9,3% | 1,8 | 1,23 → 1,28 | +16% | 0,19 |
> | 3894 | BB explosão + 1ª vela 80 + Tendência ⚠️ | **+149% · −48,3%** | +55% · −17,3% | +36% | −7,8% | 3,0 | 1,34 → 1,44 | +20% | 0,22 |
> | 3895 | Donchian + Quinta + Onda ⚠️ | **+126% · −30,5%** | +48% · −8,7% | +30% | −7,1% | 2,4 | 0,87 → 1,43 | +24% | −0,09 |
> | 3896 | Donchian + BB explosão + GPS médias + Pôr do sol + Pullback | **+200% · −56,6%** | +50% · −12,7% | +30% | −6,3% | 2,7 | 1,61 → 1,19 | +15% | 0,08 |
> | 3897 | VWAP + Donchian + BB explosão + IFR + Tendência | **+238% · −68,2%** | +58% · −16,2% | +36% | −8,9% | 2,6 | 1,35 → 1,30 | +17% | 0,46 |
> | 3898 | Donchian + BB explosão + IFR + Tendência + Onda | **+275% · −61,9%** | +62% · −14,0% | +38% | −8,8% | 2,9 | 1,22 → 1,49 | +26% | 0,42 |
> | 3899 | Donchian + BB explosão + GPS médias + Pullback + Rompe 200 | **+194% · −60,0%** | +50% · −14,1% | +30% | −7,3% | 2,3 | 1,62 → 1,09 | +13% | 0,25 |
> | 3900 | VWAP + BB explosão + Pullback + Tendência + Onda | **+159% · −59,3%** | +43% · −13,2% | +31% | −10,3% | 1,7 | 1,08 → 1,19 | +21% | 0,25 |

> [!example]- Combinações 3901 a 3930 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3901 | BB explosão + GPS médias + Pôr do sol + Bollinger + Tendência | **+235% · −56,9%** | +52% · −11,9% | +31% | −5,5% | 3,3 | 1,60 → 1,33 | +18% | 0,19 |
> | 3902 | ADX + VWAP + BB explosão + IFR + Bollinger | **+236% · −59,9%** | +53% · −12,7% | +31% | −7,5% | 2,4 | 1,05 → 1,55 | +21% | 0,35 |
> | 3903 | BB explosão + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+147% · −33,6%** | +41% · −8,0% | +25% | −6,3% | 2,0 | 1,14 → 1,72 | +16% | 0,07 |
> | 3904 | ADX + GPS médias + MACD + Rompe 200 + Onda | **+204% · −49,0%** | +50% · −9,8% | +31% | −8,6% | 2,1 | 0,87 → 1,46 | +24% | 0,19 |
> | 3905 | BB explosão + 1ª vela 80 + Rompe 200 + Tendência + Onda ⚠️ | **+192% · −48,8%** | +45% · −10,2% | +31% | −7,8% | 2,4 | 1,03 → 1,44 | +23% | 0,21 |
> | 3906 | VWAP + Quinta + Rompe 200 ⚠️ | **+40% · −26,7%** | +22% · −8,7% | +19% | −11,7% | 0,5 | 0,92 → 0,59 | +13% | −0,03 |
> | 3907 | Pôr do sol + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+102% · −26,0%** | +33% · −5,2% | +25% | −7,1% | 1,7 | 0,59 → 1,56 | +14% | 0,09 |
> | 3908 | ADX + MACD + Quinta ⚠️ | **+110% · −34,1%** | +44% · −11,1% | +29% | −7,5% | 2,2 | 0,76 → 1,64 | +18% | 0,05 |
> | 3909 | ADX + BB explosão + IFR + Pôr do sol + Onda | **+206% · −52,5%** | +49% · −9,9% | +31% | −5,9% | 3,1 | 0,80 → 1,69 | +23% | 0,11 |
> | 3910 | GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+175% · −37,3%** | +58% · −12,9% | +32% | −9,3% | 2,1 | 1,46 → 1,57 | +22% | 0,28 |
> | 3911 | VWAP + BB explosão + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+131% · −46,9%** | +36% · −10,3% | +26% | −13,1% | 1,0 | 0,80 → 1,31 | +21% | 0,17 |
> | 3912 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+247% · −40,7%** | +50% · −8,0% | +29% | −6,4% | 2,5 | 1,36 → 1,66 | +20% | 0,12 |
> | 3913 | VWAP + Donchian + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+229% · −51,4%** | +51% · −11,5% | +30% | −12,1% | 1,4 | 1,14 → 1,38 | +18% | 0,34 |
> | 3914 | VWAP + Quinta + Bollinger + Onda ⚠️ | **+112% · −31,3%** | +35% · −7,7% | +24% | −11,1% | 1,0 | 0,60 → 1,32 | +18% | 0,07 |
> | 3915 | MACD + 1ª vela 80 ⚠️ | **+81% · −19,4%** | +45% · −9,3% | +32% | −13,7% | 1,4 | 0,71 → 1,55 | +15% | 0,28 |
> | 3916 | ADX + Donchian + Tendência | **+232% · −55,8%** | +78% · −21,1% | +43% | −9,4% | 3,3 | 1,43 → 1,57 | +25% | 0,38 |
> | 3917 | ADX + BB explosão + Quinta + Pullback + Onda ⚠️ | **+162% · −54,0%** | +42% · −10,7% | +28% | −5,6% | 2,7 | 0,94 → 1,50 | +23% | 0,03 |
> | 3918 | ADX + VWAP + BB explosão + IFR + MACD | **+195% · −63,2%** | +50% · −14,1% | +32% | −9,8% | 2,0 | 0,89 → 1,46 | +21% | 0,34 |
> | 3919 | ADX + VWAP + MACD + Pôr do sol + Onda | **+154% · −43,8%** | +41% · −7,5% | +28% | −9,7% | 1,6 | 0,51 → 1,47 | +16% | 0,14 |
> | 3920 | VWAP + Pôr do sol + Quinta + Onda ⚠️ | **+69% · −28,6%** | +27% · −6,1% | +22% | −10,0% | 0,9 | 0,46 → 1,15 | +15% | −0,03 |
> | 3921 | BB explosão + GPS médias + Pullback + Rompe 200 + Bollinger | **+188% · −49,0%** | +44% · −10,1% | +26% | −6,7% | 2,0 | 1,71 → 1,15 | +14% | 0,18 |
> | 3922 | BB explosão + GPS médias + IFR + Rompe 200 | **+160% · −51,6%** | +50% · −14,1% | +31% | −9,2% | 2,0 | 1,42 → 1,21 | +17% | 0,37 |
> | 3923 | VWAP + BB explosão + IFR + 1ª vela 80 + Onda ⚠️ | **+185% · −46,3%** | +46% · −10,2% | +31% | −11,7% | 1,6 | 0,77 → 1,47 | +24% | 0,26 |
> | 3924 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+163% · −45,2%** | +41% · −8,3% | +26% | −3,8% | 3,6 | 0,96 → 1,72 | +19% | 0,01 |
> | 3925 | VWAP + BB explosão + Pullback + Rompe 200 + Bollinger | **+135% · −44,5%** | +35% · −9,5% | +23% | −9,5% | 1,1 | 1,36 → 1,02 | +12% | 0,19 |
> | 3926 | GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+183% · −42,2%** | +51% · −10,8% | +33% | −13,0% | 1,6 | 0,83 → 1,48 | +19% | 0,26 |
> | 3927 | Donchian + BB explosão + IFR + MACD + Tendência | **+282% · −64,4%** | +62% · −15,1% | +38% | −8,7% | 2,9 | 1,40 → 1,45 | +22% | 0,50 |
> | 3928 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+135% · −40,6%** | +41% · −10,6% | +27% | −12,5% | 1,1 | 1,14 → 1,24 | +23% | 0,11 |
> | 3929 | ADX + VWAP + Donchian + MACD + Tendência | **+264% · −65,0%** | +60% · −15,3% | +36% | −9,2% | 2,6 | 1,18 → 1,42 | +24% | 0,39 |
> | 3930 | BB explosão + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+64% · −28,2%** | +26% · −6,5% | +19% | −4,3% | 1,5 | 1,23 → 0,99 | +13% | −0,02 |

> [!example]- Combinações 3931 a 3960 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3931 | BB explosão + GPS médias + IFR + MACD | **+182% · −53,1%** | +55% · −14,6% | +34% | −12,0% | 1,8 | 1,23 → 1,33 | +23% | 0,42 |
> | 3932 | ADX + VWAP + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+197% · −51,7%** | +47% · −11,1% | +29% | −8,1% | 2,0 | 1,09 → 1,46 | +22% | 0,09 |
> | 3933 | ADX + BB explosão + Quinta + Bollinger ⚠️ | **+161% · −52,3%** | +47% · −13,6% | +27% | −5,2% | 2,7 | 1,05 → 1,59 | +20% | 0,18 |
> | 3934 | ADX + VWAP + GPS médias + MACD + Pôr do sol | **+182% · −49,3%** | +46% · −9,8% | +29% | −9,2% | 1,8 | 0,98 → 1,35 | +21% | 0,15 |
> | 3935 | ADX + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+189% · −46,5%** | +53% · −12,1% | +31% | −5,5% | 3,4 | 1,20 → 1,62 | +25% | 0,05 |
> | 3936 | ADX + BB explosão + MACD + 1ª vela 80 + Quinta ⚠️ | **+187% · −52,6%** | +45% · −10,3% | +29% | −6,3% | 2,6 | 0,90 → 1,66 | +20% | 0,08 |
> | 3937 | Donchian + BB explosão + MACD + 1ª vela 80 + Quinta ⚠️ | **+205% · −46,4%** | +47% · −9,5% | +30% | −8,7% | 2,0 | 1,18 → 1,49 | +22% | 0,12 |
> | 3938 | VWAP + BB explosão + IFR + Rompe 200 + Bollinger | **+178% · −43,2%** | +42% · −9,2% | +27% | −9,3% | 1,5 | 1,21 → 1,30 | +16% | 0,28 |
> | 3939 | VWAP + GPS médias + Rompe 200 | **+87% · −38,8%** | +38% · −13,8% | +25% | −14,6% | 0,8 | 1,19 → 0,75 | +15% | 0,23 |
> | 3940 | ADX + BB explosão + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+221% · −48,3%** | +47% · −9,3% | +28% | −4,4% | 3,5 | 1,07 → 1,80 | +20% | 0,12 |
> | 3941 | GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+156% · −38,1%** | +45% · −9,2% | +30% | −9,2% | 1,8 | 0,92 → 1,47 | +18% | −0,04 |
> | 3942 | ADX + VWAP + Donchian + MACD + Quinta ⚠️ | **+204% · −51,1%** | +48% · −9,6% | +30% | −7,7% | 2,3 | 1,00 → 1,43 | +18% | 0,16 |
> | 3943 | ADX + VWAP + Donchian + Bollinger | **+229% · −48,6%** | +59% · −11,7% | +32% | −7,2% | 2,7 | 1,09 → 1,50 | +17% | 0,32 |
> | 3944 | VWAP + GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+186% · −52,1%** | +46% · −12,0% | +31% | −15,5% | 1,2 | 0,79 → 1,35 | +23% | 0,31 |
> | 3945 | BB explosão + GPS médias + IFR + Pôr do sol + Onda | **+191% · −48,5%** | +48% · −10,0% | +31% | −8,8% | 2,1 | 1,04 → 1,40 | +27% | 0,14 |
> | 3946 | Donchian + BB explosão + Rompe 200 + Bollinger + Tendência | **+260% · −60,6%** | +54% · −13,7% | +32% | −6,6% | 2,9 | 1,59 → 1,34 | +15% | 0,33 |
> | 3947 | ADX + VWAP + Donchian + Pôr do sol + Rompe 200 | **+182% · −48,4%** | +44% · −8,4% | +27% | −6,1% | 2,3 | 1,09 → 1,35 | +17% | 0,09 |
> | 3948 | VWAP + GPS médias + Quinta + Onda ⚠️ | **+115% · −38,9%** | +39% · −10,3% | +27% | −13,2% | 1,1 | 0,82 → 1,09 | +25% | 0,00 |
> | 3949 | BB explosão + GPS médias + MACD + Pullback + Bollinger | **+217% · −49,9%** | +48% · −10,3% | +29% | −8,8% | 1,9 | 1,51 → 1,31 | +19% | 0,20 |
> | 3950 | Donchian + BB explosão + MACD + 1ª vela 80 + Tendência ⚠️ | **+268% · −62,6%** | +58% · −14,4% | +36% | −8,3% | 2,8 | 1,33 → 1,46 | +23% | 0,38 |
> | 3951 | BB explosão + GPS médias + Pullback + Tendência + Onda | **+207% · −61,9%** | +52% · −14,8% | +34% | −7,6% | 2,8 | 1,32 → 1,27 | +23% | 0,23 |
> | 3952 | BB explosão + MACD + Pôr do sol + Quinta ⚠️ | **+86% · −32,4%** | +31% · −6,8% | +23% | −6,5% | 1,6 | 0,95 → 1,31 | +19% | −0,02 |
> | 3953 | VWAP + Tendência | **+83% · −35,7%** | +48% · −16,7% | +34% | −11,9% | 1,8 | 1,18 → 0,99 | +16% | 0,34 |
> | 3954 | Donchian + BB explosão + MACD + Pôr do sol + Tendência | **+220% · −62,3%** | +52% · −14,5% | +33% | −7,1% | 2,8 | 1,34 → 1,35 | +20% | 0,28 |
> | 3955 | VWAP + Donchian + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+193% · −56,4%** | +47% · −13,4% | +30% | −10,7% | 1,6 | 1,30 → 1,28 | +16% | 0,20 |
> | 3956 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Quinta ⚠️ | **+155% · −44,4%** | +40% · −9,1% | +26% | −7,0% | 1,9 | 1,32 → 1,33 | +20% | −0,01 |
> | 3957 | ADX + Donchian + Pôr do sol + Quinta ⚠️ | **+176% · −39,5%** | +48% · −8,6% | +28% | −4,4% | 3,6 | 1,28 → 1,72 | +17% | 0,01 |
> | 3958 | Donchian + BB explosão + IFR + Pôr do sol | **+190% · −44,0%** | +53% · −11,2% | +32% | −6,1% | 3,1 | 1,37 → 1,49 | +18% | 0,18 |
> | 3959 | Donchian + BB explosão + GPS médias + IFR + Rompe 200 | **+229% · −60,9%** | +57% · −14,2% | +33% | −8,8% | 2,3 | 1,48 → 1,27 | +17% | 0,40 |
> | 3960 | ADX + BB explosão + Quinta + Pullback ⚠️ | **+131% · −53,4%** | +42% · −14,4% | +27% | −5,9% | 2,4 | 1,35 → 1,44 | +17% | 0,04 |

> [!example]- Combinações 3961 a 3990 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3961 | Donchian + BB explosão + Pôr do sol + Quinta + Bollinger ⚠️ | **+194% · −41,3%** | +43% · −7,3% | +25% | −4,4% | 2,9 | 1,48 → 1,48 | +16% | 0,05 |
> | 3962 | VWAP + GPS médias + MACD | **+109% · −41,3%** | +45% · −14,9% | +30% | −18,9% | 0,9 | 0,99 → 1,01 | +23% | 0,36 |
> | 3963 | Donchian + BB explosão + IFR + Tendência | **+250% · −61,3%** | +67% · −17,9% | +40% | −8,2% | 3,3 | 1,53 → 1,44 | +18% | 0,53 |
> | 3964 | ADX + BB explosão + Pôr do sol + Pullback + Onda | **+165% · −53,1%** | +42% · −10,2% | +28% | −5,7% | 2,7 | 0,89 → 1,52 | +22% | 0,02 |
> | 3965 | Donchian + BB explosão + 1ª vela 80 + Tendência + Onda ⚠️ | **+257% · −59,9%** | +58% · −13,3% | +36% | −7,8% | 3,0 | 1,12 → 1,49 | +27% | 0,32 |
> | 3966 | ADX + BB explosão + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+190% · −51,7%** | +45% · −9,8% | +29% | −6,3% | 2,6 | 0,85 → 1,69 | +20% | 0,11 |
> | 3967 | Donchian + MACD + Quinta ⚠️ | **+128% · −26,1%** | +47% · −8,5% | +30% | −7,3% | 2,4 | 1,26 → 1,40 | +23% | 0,07 |
> | 3968 | ADX + VWAP + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+199% · −52,3%** | +48% · −11,2% | +29% | −8,2% | 2,0 | 1,04 → 1,48 | +21% | 0,14 |
> | 3969 | BB explosão + GPS médias + IFR + 1ª vela 80 + Onda ⚠️ | **+232% · −51,5%** | +55% · −11,4% | +34% | −10,5% | 2,1 | 1,03 → 1,51 | +25% | 0,27 |
> | 3970 | BB explosão + IFR + Rompe 200 + Onda | **+140% · −38,0%** | +43% · −9,2% | +29% | −9,2% | 1,8 | 0,87 → 1,41 | +25% | 0,25 |
> | 3971 | BB explosão + MACD + Pôr do sol + Quinta + Onda ⚠️ | **+117% · −35,0%** | +33% · −6,4% | +25% | −7,6% | 1,6 | 0,63 → 1,41 | +17% | −0,00 |
> | 3972 | ADX + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+192% · −47,0%** | +53% · −12,3% | +31% | −5,2% | 3,5 | 1,14 → 1,65 | +24% | 0,09 |
> | 3973 | VWAP + BB explosão + Quinta + Bollinger + Tendência ⚠️ | **+176% · −55,7%** | +42% · −12,0% | +28% | −7,2% | 2,1 | 1,34 → 1,22 | +15% | 0,20 |
> | 3974 | ADX + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+216% · −62,8%** | +60% · −18,8% | +37% | −7,9% | 3,0 | 1,21 → 1,62 | +25% | 0,25 |
> | 3975 | GPS médias + MACD + Onda | **+131% · −33,8%** | +51% · −11,7% | +33% | −13,8% | 1,5 | 0,78 → 1,30 | +22% | 0,27 |
> | 3976 | ADX + Donchian + BB explosão + GPS médias + Quinta ⚠️ | **+212% · −67,7%** | +57% · −16,6% | +32% | −6,2% | 3,2 | 1,29 → 1,34 | +19% | 0,22 |
> | 3977 | VWAP + BB explosão + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+155% · −44,2%** | +38% · −9,5% | +25% | −10,3% | 1,2 | 1,04 → 1,38 | +18% | 0,13 |
> | 3978 | BB explosão + GPS médias + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+116% · −44,8%** | +34% · −8,7% | +23% | −6,1% | 1,6 | 1,42 → 0,99 | +15% | 0,03 |
> | 3979 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+224% · −47,3%** | +48% · −9,4% | +28% | −4,2% | 3,7 | 1,00 → 1,83 | +19% | 0,13 |
> | 3980 | BB explosão + Pôr do sol + Pullback | **+71% · −31,5%** | +32% · −10,0% | +23% | −3,7% | 2,8 | 1,52 → 1,09 | +12% | −0,14 |
> | 3981 | BB explosão + GPS médias + MACD + Pôr do sol + Quinta ⚠️ | **+139% · −46,3%** | +38% · −9,1% | +26% | −8,3% | 1,6 | 1,22 → 1,20 | +20% | 0,03 |
> | 3982 | VWAP + BB explosão + GPS médias + Pullback + Tendência | **+180% · −66,7%** | +49% · −16,6% | +32% | −9,2% | 2,1 | 1,50 → 1,06 | +14% | 0,27 |
> | 3983 | ADX + BB explosão + MACD + Pullback | **+158% · −58,0%** | +48% · −16,4% | +31% | −6,4% | 2,8 | 1,14 → 1,50 | +21% | 0,12 |
> | 3984 | ADX + BB explosão + Pôr do sol + Bollinger | **+164% · −51,3%** | +47% · −13,2% | +27% | −4,7% | 3,0 | 0,96 → 1,64 | +21% | 0,12 |
> | 3985 | ADX + VWAP + BB explosão + Quinta + Tendência ⚠️ | **+173% · −68,5%** | +46% · −17,4% | +30% | −7,0% | 2,5 | 1,15 → 1,31 | +18% | 0,18 |
> | 3986 | Donchian + BB explosão + MACD + Pullback | **+171% · −51,8%** | +50% · −13,9% | +31% | −8,2% | 2,3 | 1,38 → 1,29 | +17% | 0,23 |
> | 3987 | ADX + VWAP + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+109% · −36,0%** | +31% · −5,7% | +22% | −4,9% | 1,9 | 0,92 → 1,30 | +14% | 0,02 |
> | 3988 | Donchian + BB explosão + Quinta + Pullback ⚠️ | **+146% · −46,7%** | +44% · −11,9% | +28% | −4,3% | 3,5 | 1,65 → 1,24 | +12% | 0,05 |
> | 3989 | ADX + Donchian + BB explosão + Quinta + Rompe 200 ⚠️ | **+187% · −59,7%** | +47% · −13,6% | +28% | −4,5% | 3,4 | 1,23 → 1,40 | +17% | 0,13 |
> | 3990 | Donchian + GPS médias + 1ª vela 80 ⚠️ | **+201% · −40,0%** | +68% · −13,6% | +37% | −10,5% | 2,3 | 1,46 → 1,42 | +26% | 0,27 |

> [!example]- Combinações 3991 a 4020 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 3991 | BB explosão + Pôr do sol + Quinta + Bollinger + Onda ⚠️ | **+141% · −35,8%** | +35% · −6,4% | +24% | −6,2% | 1,7 | 0,78 → 1,52 | +16% | −0,01 |
> | 3992 | ADX + VWAP + MACD + Pôr do sol + Pullback | **+158% · −41,5%** | +39% · −6,8% | +27% | −6,1% | 2,3 | 1,06 → 1,46 | +15% | 0,05 |
> | 3993 | VWAP + Donchian + MACD + Quinta ⚠️ | **+137% · −34,1%** | +42% · −9,0% | +28% | −11,9% | 1,3 | 1,05 → 1,18 | +19% | 0,15 |
> | 3994 | VWAP + BB explosão + GPS médias + IFR + 1ª vela 80 ⚠️ | **+204% · −54,7%** | +51% · −13,0% | +32% | −12,7% | 1,5 | 1,20 → 1,33 | +21% | 0,32 |
> | 3995 | ADX + VWAP + MACD + Pôr do sol + Quinta ⚠️ | **+134% · −37,8%** | +36% · −6,7% | +25% | −6,0% | 2,1 | 0,78 → 1,47 | +14% | 0,07 |
> | 3996 | GPS médias + Quinta + Onda ⚠️ | **+106% · −29,7%** | +43% · −9,1% | +28% | −9,6% | 1,6 | 0,89 → 1,22 | +21% | −0,13 |
> | 3997 | Donchian + BB explosão + MACD + Quinta + Tendência ⚠️ | **+218% · −63,5%** | +51% · −15,1% | +33% | −7,1% | 2,9 | 1,38 → 1,33 | +19% | 0,27 |
> | 3998 | Donchian + GPS médias | **+144% · −35,3%** | +77% · −17,9% | +39% | −11,5% | 2,3 | 1,51 → 1,14 | +20% | 0,45 |
> | 3999 | Donchian + BB explosão + IFR + MACD + Rompe 200 | **+221% · −51,8%** | +51% · −11,1% | +32% | −8,8% | 2,2 | 1,27 → 1,40 | +19% | 0,36 |
> | 4000 | ADX + BB explosão + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+161% · −46,8%** | +41% · −8,8% | +26% | −4,5% | 3,1 | 1,01 → 1,60 | +20% | 0,05 |
> | 4001 | VWAP + Donchian + Bollinger | **+153% · −31,4%** | +54% · −10,4% | +30% | −12,5% | 1,3 | 1,21 → 1,22 | +17% | 0,35 |
> | 4002 | BB explosão + Pôr do sol + Quinta + Rompe 200 + Onda ⚠️ | **+94% · −33,3%** | +29% · −6,1% | +22% | −6,9% | 1,3 | 0,74 → 1,23 | +17% | −0,02 |
> | 4003 | Donchian + Tendência | **+156% · −40,1%** | +79% · −20,1% | +45% | −10,3% | 3,2 | 1,64 → 1,33 | +20% | 0,62 |
> | 4004 | Donchian + BB explosão + GPS médias + Rompe 200 + Tendência | **+222% · −69,8%** | +57% · −17,5% | +34% | −7,2% | 2,9 | 1,55 → 1,16 | +15% | 0,41 |
> | 4005 | ADX + Donchian + BB explosão + MACD + Tendência | **+264% · −74,5%** | +63% · −20,4% | +38% | −8,9% | 2,8 | 1,24 → 1,47 | +23% | 0,43 |
> | 4006 | BB explosão + 1ª vela 80 + Quinta + Bollinger + Onda ⚠️ | **+184% · −39,1%** | +41% · −7,6% | +27% | −7,6% | 1,8 | 0,80 → 1,65 | +15% | 0,05 |
> | 4007 | VWAP + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+133% · −46,4%** | +41% · −12,8% | +27% | −13,5% | 1,1 | 1,18 → 1,13 | +20% | 0,24 |
> | 4008 | VWAP + GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+163% · −46,0%** | +41% · −9,7% | +28% | −12,3% | 1,2 | 0,86 → 1,32 | +22% | 0,05 |
> | 4009 | VWAP + BB explosão + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+129% · −48,8%** | +36% · −10,9% | +26% | −14,0% | 0,9 | 0,85 → 1,22 | +19% | 0,26 |
> | 4010 | ADX + VWAP + Pôr do sol + Bollinger | **+148% · −35,2%** | +43% · −8,1% | +26% | −6,1% | 2,1 | 0,84 → 1,54 | +13% | 0,16 |
> | 4011 | VWAP + Pôr do sol + Bollinger + Onda | **+114% · −31,4%** | +35% · −7,7% | +24% | −11,2% | 1,0 | 0,54 → 1,34 | +17% | 0,13 |
> | 4012 | BB explosão + MACD + 1ª vela 80 + Bollinger ⚠️ | **+174% · −39,8%** | +47% · −10,5% | +29% | −10,9% | 1,5 | 1,01 → 1,60 | +18% | 0,28 |
> | 4013 | ADX + VWAP + Pôr do sol + Pullback + Rompe 200 | **+129% · −40,3%** | +35% · −6,7% | +24% | −5,2% | 2,2 | 1,23 → 1,28 | +15% | 0,03 |
> | 4014 | BB explosão + Pôr do sol + Bollinger + Tendência | **+173% · −47,6%** | +47% · −12,1% | +29% | −5,7% | 2,9 | 1,54 → 1,44 | +17% | 0,15 |
> | 4015 | VWAP + BB explosão + MACD + Pôr do sol + Tendência | **+147% · −58,2%** | +40% · −12,9% | +29% | −10,0% | 1,6 | 1,08 → 1,17 | +18% | 0,24 |
> | 4016 | Donchian + BB explosão + IFR + Quinta ⚠️ | **+187% · −45,5%** | +53% · −11,8% | +32% | −6,0% | 3,2 | 1,43 → 1,46 | +17% | 0,18 |
> | 4017 | Donchian + Rompe 200 + Onda | **+127% · −30,2%** | +48% · −9,8% | +30% | −9,3% | 1,8 | 0,88 → 1,29 | +28% | 0,24 |
> | 4018 | MACD + 1ª vela 80 + Onda ⚠️ | **+116% · −29,5%** | +44% · −9,1% | +32% | −13,5% | 1,4 | 0,46 → 1,60 | +12% | 0,28 |
> | 4019 | VWAP + BB explosão + Pôr do sol + Rompe 200 + Tendência | **+126% · −58,0%** | +36% · −12,2% | +26% | −7,9% | 1,7 | 1,24 → 1,03 | +14% | 0,15 |
> | 4020 | ADX + Donchian + Bollinger | **+223% · −41,0%** | +72% · −13,1% | +36% | −5,2% | 4,4 | 1,26 → 1,77 | +22% | 0,26 |

> [!example]- Combinações 4021 a 4050 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4021 | BB explosão + GPS médias + IFR + Bollinger | **+218% · −47,3%** | +59% · −12,6% | +33% | −9,3% | 2,2 | 1,46 → 1,41 | +20% | 0,39 |
> | 4022 | VWAP + BB explosão + Quinta + Pullback ⚠️ | **+79% · −44,9%** | +30% · −11,0% | +23% | −9,4% | 1,1 | 1,25 → 0,87 | +10% | 0,02 |
> | 4023 | ADX + VWAP + Donchian + IFR | **+234% · −49,4%** | +63% · −12,4% | +36% | −7,4% | 3,2 | 1,14 → 1,54 | +19% | 0,30 |
> | 4024 | GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+158% · −38,8%** | +45% · −9,4% | +29% | −8,9% | 1,9 | 0,87 → 1,49 | +18% | 0,07 |
> | 4025 | BB explosão + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+145% · −35,3%** | +41% · −8,6% | +26% | −7,4% | 1,7 | 1,19 → 1,54 | +18% | 0,19 |
> | 4026 | ADX + VWAP + Donchian + GPS médias + Pôr do sol | **+223% · −55,9%** | +54% · −12,2% | +31% | −7,8% | 2,3 | 1,20 → 1,33 | +22% | 0,14 |
> | 4027 | ADX + VWAP + Donchian + MACD + Pôr do sol | **+206% · −50,7%** | +49% · −9,2% | +30% | −7,7% | 2,2 | 0,95 → 1,45 | +17% | 0,17 |
> | 4028 | ADX + Donchian + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+263% · −60,4%** | +57% · −13,6% | +33% | −5,0% | 4,1 | 1,36 → 1,65 | +21% | 0,13 |
> | 4029 | VWAP + Donchian + GPS médias | **+149% · −44,4%** | +59% · −15,7% | +33% | −15,6% | 1,3 | 1,26 → 1,00 | +17% | 0,38 |
> | 4030 | VWAP + Donchian + BB explosão + Quinta + Pullback ⚠️ | **+149% · −58,3%** | +40% · −11,6% | +26% | −8,3% | 1,6 | 1,37 → 1,06 | +12% | 0,10 |
> | 4031 | Donchian + BB explosão + MACD + Pôr do sol + Quinta ⚠️ | **+162% · −46,2%** | +41% · −9,1% | +27% | −6,8% | 2,0 | 1,19 → 1,35 | +19% | 0,07 |
> | 4032 | BB explosão + MACD + 1ª vela 80 + Bollinger + Onda ⚠️ | **+213% · −44,9%** | +46% · −9,6% | +30% | −10,8% | 1,6 | 0,72 → 1,62 | +15% | 0,27 |
> | 4033 | ADX + Donchian + BB explosão + IFR + Onda | **+260% · −63,8%** | +62% · −14,0% | +36% | −7,1% | 3,3 | 0,97 → 1,62 | +27% | 0,32 |
> | 4034 | VWAP + GPS médias + Pôr do sol + Onda | **+117% · −39,1%** | +39% · −10,3% | +27% | −13,3% | 1,0 | 0,77 → 1,11 | +24% | 0,07 |
> | 4035 | VWAP + GPS médias + Pôr do sol | **+88% · −33,1%** | +38% · −11,2% | +25% | −13,1% | 0,9 | 1,14 → 0,88 | +18% | −0,01 |
> | 4036 | Donchian + BB explosão + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+219% · −53,5%** | +53% · −11,6% | +31% | −8,7% | 2,1 | 1,35 → 1,35 | +20% | 0,16 |
> | 4037 | VWAP + Donchian + GPS médias + Onda | **+174% · −46,9%** | +55% · −12,5% | +33% | −14,7% | 1,4 | 0,96 → 1,16 | +27% | 0,34 |
> | 4038 | ADX + VWAP + Donchian + 1ª vela 80 + Pullback ⚠️ | **+255% · −53,9%** | +53% · −8,5% | +32% | −6,5% | 3,0 | 1,28 → 1,59 | +19% | 0,13 |
> | 4039 | BB explosão + GPS médias + IFR + Rompe 200 + Onda | **+187% · −52,5%** | +48% · −11,2% | +31% | −9,8% | 1,8 | 1,08 → 1,32 | +25% | 0,30 |
> | 4040 | ADX + VWAP + IFR + Pullback | **+184% · −39,7%** | +50% · −9,5% | +32% | −5,9% | 3,3 | 1,30 → 1,58 | +16% | 0,11 |
> | 4041 | ADX + BB explosão + GPS médias + IFR + 1ª vela 80 ⚠️ | **+264% · −58,4%** | +61% · −13,5% | +36% | −7,4% | 3,1 | 1,23 → 1,62 | +26% | 0,31 |
> | 4042 | BB explosão + GPS médias + IFR + MACD + Onda | **+207% · −53,5%** | +53% · −11,7% | +34% | −11,4% | 1,8 | 0,97 → 1,40 | +27% | 0,34 |
> | 4043 | VWAP + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+188% · −45,1%** | +50% · −12,5% | +29% | −13,7% | 1,2 | 1,24 → 1,35 | +23% | 0,33 |
> | 4044 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Rompe 200 ⚠️ | **+152% · −49,8%** | +40% · −10,9% | +26% | −7,9% | 1,7 | 1,35 → 1,23 | +18% | 0,08 |
> | 4045 | ADX + VWAP + Donchian + Quinta + Pullback ⚠️ | **+206% · −51,2%** | +47% · −8,9% | +29% | −4,8% | 3,4 | 1,38 → 1,42 | +16% | 0,06 |
> | 4046 | ADX + VWAP + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+196% · −53,2%** | +48% · −11,6% | +29% | −9,2% | 1,8 | 1,08 → 1,39 | +24% | 0,22 |
> | 4047 | ADX + BB explosão + MACD + 1ª vela 80 + Onda ⚠️ | **+202% · −56,1%** | +50% · −11,8% | +32% | −9,0% | 2,2 | 0,62 → 1,63 | +18% | 0,22 |
> | 4048 | BB explosão + GPS médias + Rompe 200 + Bollinger + Tendência | **+229% · −58,9%** | +52% · −13,3% | +31% | −6,4% | 2,8 | 1,61 → 1,23 | +16% | 0,32 |
> | 4049 | ADX + Donchian + BB explosão + GPS médias + Pôr do sol | **+214% · −66,6%** | +58% · −16,3% | +32% | −6,1% | 3,1 | 1,25 → 1,36 | +20% | 0,19 |
> | 4050 | BB explosão + Quinta + Pullback + Onda ⚠️ | **+100% · −35,5%** | +34% · −8,3% | +25% | −6,9% | 1,8 | 0,96 → 1,25 | +22% | −0,03 |

> [!example]- Combinações 4051 a 4080 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4051 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+163% · −45,1%** | +41% · −8,9% | +26% | −4,4% | 3,1 | 0,95 → 1,63 | +20% | 0,06 |
> | 4052 | ADX + GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+222% · −53,1%** | +51% · −11,4% | +32% | −6,4% | 2,9 | 0,90 → 1,63 | +21% | 0,05 |
> | 4053 | ADX + BB explosão + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+187% · −52,1%** | +45% · −10,5% | +29% | −7,2% | 2,3 | 0,90 → 1,59 | +21% | 0,17 |
> | 4054 | ADX + BB explosão + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+221% · −47,7%** | +48% · −9,8% | +28% | −5,2% | 3,0 | 1,06 → 1,72 | +20% | 0,21 |
> | 4055 | BB explosão + GPS médias + MACD + 1ª vela 80 + Quinta ⚠️ | **+177% · −47,2%** | +44% · −10,6% | +29% | −10,3% | 1,6 | 1,19 → 1,35 | +22% | 0,09 |
> | 4056 | BB explosão + 1ª vela 80 + Quinta + Onda ⚠️ | **+118% · −36,9%** | +38% · −9,0% | +27% | −8,9% | 1,6 | 0,63 → 1,48 | +14% | −0,06 |
> | 4057 | VWAP + MACD + Bollinger + Onda | **+139% · −38,3%** | +41% · −10,0% | +28% | −14,8% | 1,0 | 0,54 → 1,36 | +20% | 0,37 |
> | 4058 | BB explosão + GPS médias + Quinta + Pullback ⚠️ | **+123% · −48,4%** | +41% · −13,0% | +27% | −6,1% | 2,3 | 1,65 → 1,01 | +13% | 0,02 |
> | 4059 | ADX + Tendência | **+139% · −45,8%** | +73% · −24,1% | +44% | −12,3% | 2,5 | 1,26 → 1,55 | +29% | 0,32 |
> | 4060 | BB explosão + Pullback + Rompe 200 | **+70% · −37,8%** | +32% · −12,5% | +23% | −6,2% | 1,7 | 1,50 → 0,85 | +8% | 0,10 |
> | 4061 | ADX + Donchian + Rompe 200 | **+161% · −38,4%** | +59% · −12,4% | +32% | −6,2% | 3,2 | 1,20 → 1,49 | +21% | 0,14 |
> | 4062 | VWAP + BB explosão + IFR + Pôr do sol | **+117% · −41,4%** | +39% · −10,2% | +27% | −9,7% | 1,4 | 1,02 → 1,24 | +16% | 0,11 |
> | 4063 | Donchian + BB explosão + Pullback + Bollinger | **+205% · −47,3%** | +53% · −12,0% | +30% | −5,2% | 3,3 | 1,66 → 1,40 | +14% | 0,18 |
> | 4064 | ADX + Donchian + BB explosão + Pôr do sol + Rompe 200 | **+189% · −58,5%** | +48% · −13,0% | +28% | −4,3% | 3,6 | 1,17 → 1,43 | +18% | 0,11 |
> | 4065 | Donchian + BB explosão + GPS médias + Quinta + Bollinger ⚠️ | **+231% · −54,3%** | +53% · −11,6% | +30% | −7,8% | 2,2 | 1,50 → 1,26 | +17% | 0,19 |
> | 4066 | ADX + VWAP + BB explosão + Rompe 200 + Tendência | **+171% · −68,9%** | +47% · −17,6% | +30% | −8,3% | 2,1 | 1,14 → 1,25 | +16% | 0,27 |
> | 4067 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+272% · −66,7%** | +64% · −15,8% | +37% | −8,3% | 3,0 | 1,50 → 1,36 | +20% | 0,37 |
> | 4068 | GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+218% · −42,6%** | +54% · −11,1% | +32% | −9,9% | 1,9 | 0,97 → 1,60 | +18% | 0,24 |
> | 4069 | VWAP + GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+166% · −45,6%** | +41% · −9,8% | +28% | −12,4% | 1,2 | 0,82 → 1,33 | +22% | 0,14 |
> | 4070 | BB explosão + Pôr do sol + 1ª vela 80 + Bollinger + Onda ⚠️ | **+187% · −39,8%** | +41% · −7,6% | +27% | −7,7% | 1,8 | 0,74 → 1,68 | +15% | 0,10 |
> | 4071 | Donchian + BB explosão + MACD + Bollinger + Tendência | **+285% · −64,1%** | +59% · −15,2% | +35% | −7,9% | 2,8 | 1,40 → 1,42 | +20% | 0,44 |
> | 4072 | ADX + VWAP + BB explosão + Pôr do sol + Tendência | **+175% · −67,8%** | +47% · −16,8% | +30% | −7,1% | 2,5 | 1,10 → 1,33 | +19% | 0,19 |
> | 4073 | BB explosão + MACD + Quinta + Rompe 200 + Onda ⚠️ | **+115% · −37,2%** | +33% · −7,4% | +25% | −9,0% | 1,3 | 0,70 → 1,29 | +18% | 0,06 |
> | 4074 | Donchian + BB explosão + Pôr do sol + Pullback | **+149% · −44,9%** | +44% · −11,2% | +28% | −4,2% | 3,6 | 1,57 → 1,27 | +13% | 0,02 |
> | 4075 | BB explosão + MACD + Pôr do sol + Rompe 200 + Bollinger | **+144% · −35,9%** | +35% · −6,7% | +24% | −6,8% | 1,6 | 1,12 → 1,41 | +19% | 0,09 |
> | 4076 | Donchian + BB explosão + Pôr do sol + Tendência | **+186% · −59,1%** | +54% · −17,1% | +33% | −6,2% | 3,3 | 1,47 → 1,30 | +16% | 0,24 |
> | 4077 | Donchian + BB explosão + IFR + Bollinger + Onda | **+288% · −47,4%** | +58% · −9,9% | +34% | −7,9% | 2,7 | 1,10 → 1,60 | +26% | 0,32 |
> | 4078 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+158% · −44,5%** | +38% · −9,5% | +25% | −10,5% | 1,1 | 0,98 → 1,41 | +19% | 0,17 |
> | 4079 | ADX + MACD + Pullback | **+132% · −36,3%** | +49% · −10,9% | +32% | −7,1% | 2,7 | 1,18 → 1,64 | +20% | 0,00 |
> | 4080 | ADX + VWAP + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+263% · −54,8%** | +55% · −12,4% | +31% | −9,1% | 2,0 | 1,12 → 1,55 | +24% | 0,32 |

> [!example]- Combinações 4081 a 4110 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4081 | Donchian + BB explosão + Pôr do sol + Quinta + Onda ⚠️ | **+157% · −42,5%** | +41% · −7,6% | +27% | −6,7% | 2,1 | 0,92 → 1,37 | +23% | 0,01 |
> | 4082 | Donchian + BB explosão + GPS médias + IFR + MACD | **+247% · −62,3%** | +61% · −14,6% | +36% | −11,2% | 2,1 | 1,32 → 1,35 | +22% | 0,47 |
> | 4083 | ADX + GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+225% · −53,6%** | +51% · −11,6% | +31% | −6,4% | 2,9 | 0,85 → 1,65 | +20% | 0,10 |
> | 4084 | ADX + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+256% · −49,8%** | +63% · −13,5% | +34% | −6,0% | 3,5 | 1,23 → 1,73 | +25% | 0,31 |
> | 4085 | ADX + BB explosão + 1ª vela 80 + Quinta + Onda ⚠️ | **+179% · −51,0%** | +45% · −10,9% | +29% | −6,4% | 2,6 | 0,67 → 1,64 | +17% | 0,03 |
> | 4086 | VWAP + Rompe 200 + Bollinger | **+77% · −27,9%** | +33% · −9,2% | +21% | −13,3% | 0,6 | 1,02 → 0,91 | +15% | 0,24 |
> | 4087 | Donchian + BB explosão + Quinta + Rompe 200 + Bollinger ⚠️ | **+191% · −43,8%** | +43% · −8,0% | +26% | −5,4% | 2,4 | 1,51 → 1,33 | +14% | 0,13 |
> | 4088 | BB explosão + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+120% · −37,5%** | +38% · −9,3% | +27% | −9,1% | 1,6 | 0,58 → 1,51 | +13% | 0,05 |
> | 4089 | ADX + Pullback + Rompe 200 | **+104% · −29,8%** | +42% · −9,6% | +27% | −6,3% | 2,3 | 1,36 → 1,38 | +19% | 0,04 |
> | 4090 | ADX + VWAP + GPS médias + MACD + 1ª vela 80 ⚠️ | **+220% · −54,7%** | +52% · −12,0% | +32% | −11,6% | 1,7 | 0,98 → 1,46 | +24% | 0,29 |
> | 4091 | VWAP + BB explosão + IFR + MACD + Bollinger | **+203% · −47,7%** | +46% · −10,6% | +30% | −11,7% | 1,4 | 1,04 → 1,39 | +20% | 0,38 |
> | 4092 | ADX + BB explosão + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+260% · −69,8%** | +62% · −17,3% | +37% | −6,7% | 3,6 | 1,34 → 1,50 | +24% | 0,31 |
> | 4093 | VWAP + Donchian + BB explosão + Pôr do sol + Pullback | **+152% · −54,5%** | +41% · −11,1% | +26% | −8,4% | 1,6 | 1,32 → 1,08 | +13% | 0,10 |
> | 4094 | Donchian + BB explosão + GPS médias + MACD + Tendência | **+238% · −71,0%** | +62% · −18,0% | +37% | −9,7% | 2,5 | 1,40 → 1,25 | +20% | 0,49 |
> | 4095 | GPS médias + Pôr do sol + Onda | **+108% · −30,2%** | +44% · −9,1% | +28% | −9,5% | 1,6 | 0,82 → 1,25 | +19% | −0,05 |
> | 4096 | GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+156% · −40,1%** | +45% · −9,9% | +30% | −10,3% | 1,6 | 0,93 → 1,38 | +19% | 0,21 |
> | 4097 | ADX + VWAP + Donchian + GPS médias + Onda | **+223% · −58,1%** | +59% · −12,8% | +34% | −10,8% | 2,0 | 0,94 → 1,35 | +25% | 0,29 |
> | 4098 | ADX + BB explosão + MACD + 1ª vela 80 + Bollinger ⚠️ | **+252% · −54,5%** | +52% · −10,7% | +31% | −7,1% | 2,6 | 0,94 → 1,75 | +20% | 0,28 |
> | 4099 | Donchian + BB explosão + GPS médias + MACD + Pôr do sol | **+194% · −57,7%** | +51% · −12,9% | +31% | −10,1% | 1,8 | 1,25 → 1,23 | +20% | 0,21 |
> | 4100 | VWAP + Pôr do sol + Rompe 200 | **+41% · −25,9%** | +22% · −8,4% | +18% | −11,9% | 0,5 | 0,81 → 0,63 | +14% | 0,01 |
> | 4101 | ADX + BB explosão + MACD + Bollinger | **+189% · −57,8%** | +53% · −16,0% | +31% | −7,5% | 2,4 | 0,89 → 1,60 | +23% | 0,34 |
> | 4102 | ADX + BB explosão + GPS médias + Pullback | **+171% · −61,3%** | +55% · −18,0% | +32% | −5,8% | 3,3 | 1,38 → 1,29 | +18% | 0,22 |
> | 4103 | Donchian + BB explosão + IFR + Bollinger | **+251% · −45,6%** | +62% · −11,5% | +34% | −7,2% | 3,0 | 1,45 → 1,58 | +18% | 0,38 |
> | 4104 | BB explosão + IFR + Rompe 200 | **+107% · −36,8%** | +43% · −12,4% | +29% | −7,1% | 2,3 | 1,28 → 1,33 | +15% | 0,30 |
> | 4105 | ADX + VWAP + GPS médias + Pullback | **+168% · −49,6%** | +51% · −13,0% | +31% | −8,1% | 2,2 | 1,31 → 1,25 | +20% | 0,16 |
> | 4106 | VWAP + Donchian + BB explosão + GPS médias + Pullback | **+178% · −66,5%** | +50% · −15,9% | +30% | −11,3% | 1,6 | 1,39 → 1,03 | +13% | 0,30 |
> | 4107 | BB explosão + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+164% · −48,5%** | +49% · −13,7% | +31% | −8,4% | 2,1 | 1,50 → 1,28 | +18% | 0,09 |
> | 4108 | BB explosão + GPS médias + MACD + Quinta + Rompe 200 ⚠️ | **+136% · −50,5%** | +38% · −10,6% | +26% | −9,2% | 1,4 | 1,25 → 1,10 | +18% | 0,12 |
> | 4109 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Rompe 200 ⚠️ | **+154% · −48,5%** | +40% · −10,4% | +26% | −7,8% | 1,7 | 1,29 → 1,26 | +19% | 0,10 |
> | 4110 | ADX + GPS médias + MACD + 1ª vela 80 ⚠️ | **+218% · −49,7%** | +59% · −13,3% | +35% | −8,7% | 2,6 | 1,06 → 1,61 | +25% | 0,25 |

> [!example]- Combinações 4111 a 4140 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4111 | VWAP + GPS médias + Rompe 200 + Onda | **+115% · −42,2%** | +39% · −11,5% | +27% | −15,0% | 0,9 | 0,83 → 1,01 | +25% | 0,24 |
> | 4112 | VWAP + Donchian + Tendência | **+162% · −52,4%** | +60% · −16,3% | +37% | −9,5% | 2,5 | 1,34 → 1,14 | +17% | 0,46 |
> | 4113 | Donchian + Pôr do sol + Onda | **+128% · −32,2%** | +48% · −9,4% | +30% | −7,0% | 2,5 | 0,80 → 1,46 | +23% | 0,01 |
> | 4114 | BB explosão + GPS médias + MACD + Pôr do sol + 1ª vela 80 ⚠️ | **+179% · −47,6%** | +44% · −10,6% | +29% | −10,4% | 1,5 | 1,14 → 1,37 | +22% | 0,13 |
> | 4115 | ADX + BB explosão + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+181% · −51,5%** | +46% · −11,1% | +29% | −6,4% | 2,6 | 0,62 → 1,66 | +17% | 0,08 |
> | 4116 | ADX + BB explosão + GPS médias + Pôr do sol + Quinta ⚠️ | **+162% · −56,6%** | +45% · −12,6% | +27% | −4,6% | 3,1 | 1,20 → 1,34 | +20% | 0,07 |
> | 4117 | ADX + VWAP + Pôr do sol + Pullback + Onda | **+151% · −44,2%** | +39% · −6,5% | +27% | −6,9% | 2,1 | 0,79 → 1,43 | +15% | 0,06 |
> | 4118 | VWAP + BB explosão + IFR + Rompe 200 + Onda | **+143% · −46,5%** | +40% · −9,4% | +28% | −11,5% | 1,3 | 0,80 → 1,25 | +22% | 0,26 |
> | 4119 | BB explosão + GPS médias + Pôr do sol + Quinta + Bollinger ⚠️ | **+165% · −45,5%** | +40% · −9,1% | +25% | −6,1% | 1,9 | 1,48 → 1,24 | +17% | 0,05 |
> | 4120 | ADX + Donchian + BB explosão + Tendência | **+232% · −72,2%** | +69% · −24,2% | +39% | −9,1% | 2,9 | 1,33 → 1,45 | +19% | 0,45 |
> | 4121 | BB explosão + Rompe 200 + Bollinger + Tendência + Onda | **+207% · −50,5%** | +46% · −10,0% | +30% | −8,0% | 2,1 | 1,12 → 1,40 | +23% | 0,25 |
> | 4122 | ADX + BB explosão + GPS médias + Tendência | **+204% · −71,3%** | +65% · −23,1% | +38% | −8,3% | 3,0 | 1,34 → 1,34 | +21% | 0,43 |
> | 4123 | ADX + VWAP + Donchian + Quinta + Onda ⚠️ | **+196% · −51,7%** | +49% · −8,6% | +30% | −8,1% | 2,1 | 0,80 → 1,44 | +18% | 0,08 |
> | 4124 | BB explosão + Pôr do sol + Pullback + Onda | **+102% · −33,5%** | +35% · −7,6% | +25% | −6,8% | 1,8 | 0,89 → 1,28 | +22% | −0,02 |
> | 4125 | ADX + VWAP + Pôr do sol + Quinta + Pullback ⚠️ | **+129% · −40,4%** | +34% · −6,4% | +24% | −3,7% | 3,0 | 1,26 → 1,41 | +13% | 0,01 |
> | 4126 | ADX + VWAP + Donchian + MACD + Onda | **+215% · −56,3%** | +53% · −10,9% | +33% | −10,8% | 1,9 | 0,73 → 1,45 | +20% | 0,31 |
> | 4127 | Donchian + Bollinger | **+141% · −24,1%** | +69% · −12,5% | +34% | −5,7% | 3,7 | 1,62 → 1,62 | +20% | 0,13 |
> | 4128 | Donchian + BB explosão + GPS médias + IFR | **+218% · −59,5%** | +66% · −17,4% | +37% | −10,2% | 2,4 | 1,42 → 1,30 | +18% | 0,51 |
> | 4129 | BB explosão + GPS médias + MACD + Rompe 200 + Tendência | **+190% · −63,0%** | +49% · −15,3% | +32% | −8,8% | 2,2 | 1,39 → 1,18 | +19% | 0,33 |
> | 4130 | VWAP + Donchian + BB explosão + Pullback + Rompe 200 | **+148% · −62,9%** | +41% · −13,0% | +27% | −9,9% | 1,4 | 1,35 → 0,99 | +11% | 0,24 |
> | 4131 | ADX + Quinta + Onda ⚠️ | **+107% · −30,6%** | +44% · −10,8% | +29% | −7,8% | 2,1 | 0,45 → 1,58 | +18% | −0,08 |
> | 4132 | VWAP + GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+163% · −47,5%** | +41% · −10,6% | +28% | −13,8% | 1,1 | 0,87 → 1,25 | +23% | 0,24 |
> | 4133 | VWAP + GPS médias + MACD + Onda | **+136% · −46,3%** | +45% · −12,8% | +30% | −16,8% | 1,0 | 0,74 → 1,17 | +26% | 0,33 |
> | 4134 | ADX + Donchian + BB explosão + Tendência + Onda | **+251% · −72,9%** | +63% · −19,3% | +38% | −9,0% | 2,7 | 1,06 → 1,49 | +27% | 0,36 |
> | 4135 | BB explosão + MACD + Pullback + Onda | **+125% · −40,1%** | +40% · −9,8% | +29% | −10,2% | 1,6 | 0,84 → 1,34 | +23% | 0,14 |
> | 4136 | VWAP + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+96% · −43,9%** | +34% · −12,0% | +24% | −12,1% | 1,0 | 0,87 → 1,19 | +17% | 0,03 |
> | 4137 | VWAP + BB explosão + MACD + 1ª vela 80 + Bollinger ⚠️ | **+182% · −51,4%** | +42% · −11,8% | +28% | −14,1% | 1,1 | 0,89 → 1,39 | +22% | 0,35 |
> | 4138 | Donchian + BB explosão + IFR + Rompe 200 + Onda | **+216% · −49,1%** | +51% · −10,2% | +32% | −8,4% | 2,3 | 1,07 → 1,43 | +24% | 0,32 |
> | 4139 | VWAP + IFR + Onda | **+114% · −29,1%** | +45% · −9,1% | +32% | −12,7% | 1,5 | 0,65 → 1,37 | +20% | 0,24 |
> | 4140 | ADX + VWAP + Donchian + Pôr do sol + Onda | **+198% · −53,5%** | +49% · −8,4% | +30% | −8,1% | 2,1 | 0,76 → 1,45 | +17% | 0,12 |

> [!example]- Combinações 4141 a 4170 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4141 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Bollinger ⚠️ | **+209% · −50,0%** | +47% · −11,0% | +28% | −7,9% | 1,9 | 1,40 → 1,43 | +20% | 0,11 |
> | 4142 | BB explosão + GPS médias + Pôr do sol + Pullback | **+126% · −46,8%** | +41% · −12,3% | +26% | −6,0% | 2,3 | 1,58 → 1,05 | +15% | −0,02 |
> | 4143 | VWAP + GPS médias + Bollinger | **+132% · −38,6%** | +49% · −13,7% | +28% | −14,7% | 1,0 | 1,26 → 1,05 | +19% | 0,37 |
> | 4144 | VWAP + Quinta + Bollinger ⚠️ | **+76% · −24,9%** | +32% · −7,8% | +21% | −10,9% | 0,8 | 1,05 → 1,09 | +14% | 0,09 |
> | 4145 | ADX + Donchian + BB explosão + Pullback | **+200% · −62,6%** | +58% · −18,7% | +33% | −5,6% | 3,6 | 1,37 → 1,45 | +17% | 0,21 |
> | 4146 | ADX + VWAP + BB explosão + MACD + Tendência | **+190% · −72,3%** | +51% · −18,9% | +33% | −9,5% | 2,2 | 1,02 → 1,34 | +21% | 0,38 |
> | 4147 | VWAP + Donchian + Pôr do sol | **+104% · −33,4%** | +42% · −10,5% | +26% | −10,8% | 1,3 | 1,08 → 1,06 | +15% | 0,06 |
> | 4148 | VWAP + BB explosão + GPS médias + IFR | **+151% · −57,5%** | +51% · −16,6% | +32% | −13,7% | 1,4 | 1,18 → 1,13 | +16% | 0,40 |
> | 4149 | ADX + BB explosão + Bollinger + Onda | **+183% · −55,5%** | +53% · −14,7% | +31% | −7,4% | 2,4 | 0,64 → 1,59 | +19% | 0,27 |
> | 4150 | VWAP + GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+225% · −49,8%** | +48% · −11,3% | +30% | −13,2% | 1,3 | 0,90 → 1,42 | +22% | 0,30 |
> | 4151 | BB explosão + IFR + Bollinger + Onda | **+197% · −37,5%** | +52% · −9,2% | +32% | −8,4% | 2,3 | 0,91 → 1,64 | +24% | 0,26 |
> | 4152 | BB explosão + MACD + 1ª vela 80 + Onda ⚠️ | **+142% · −43,4%** | +44% · −10,6% | +31% | −12,8% | 1,4 | 0,58 → 1,49 | +15% | 0,25 |
> | 4153 | ADX + GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+221% · −54,6%** | +51% · −12,0% | +32% | −7,7% | 2,4 | 0,90 → 1,56 | +22% | 0,19 |
> | 4154 | 1ª vela 80 + Bollinger + Onda ⚠️ | **+139% · −25,6%** | +48% · −7,6% | +30% | −9,5% | 1,8 | 0,57 → 1,80 | +11% | 0,23 |
> | 4155 | BB explosão + GPS médias + Pôr do sol + Tendência | **+163% · −57,2%** | +51% · −16,4% | +32% | −6,0% | 3,2 | 1,50 → 1,17 | +17% | 0,17 |
> | 4156 | ADX + VWAP + Pôr do sol + Tendência | **+162% · −50,4%** | +48% · −12,5% | +31% | −7,4% | 2,5 | 1,13 → 1,41 | +19% | 0,13 |
> | 4157 | BB explosão + 1ª vela 80 + Rompe 200 + Bollinger + Onda ⚠️ | **+184% · −41,0%** | +42% · −8,6% | +27% | −9,2% | 1,5 | 0,81 → 1,56 | +16% | 0,19 |
> | 4158 | Donchian + BB explosão + Quinta + Tendência + Onda ⚠️ | **+211% · −61,0%** | +52% · −13,9% | +33% | −7,2% | 2,8 | 1,16 → 1,37 | +23% | 0,18 |
> | 4159 | Donchian + BB explosão + GPS médias + IFR + Onda | **+237% · −59,7%** | +61% · −13,7% | +36% | −10,2% | 2,3 | 1,14 → 1,38 | +26% | 0,40 |
> | 4160 | ADX + Donchian + BB explosão + GPS médias + Bollinger | **+274% · −68,3%** | +65% · −16,5% | +34% | −7,0% | 3,0 | 1,31 → 1,43 | +20% | 0,39 |
> | 4161 | ADX + Donchian + BB explosão + Quinta + Bollinger ⚠️ | **+252% · −60,6%** | +54% · −13,5% | +30% | −4,3% | 4,0 | 1,27 → 1,60 | +19% | 0,19 |
> | 4162 | BB explosão + GPS médias + MACD + Pullback | **+147% · −52,3%** | +47% · −14,5% | +30% | −10,1% | 1,7 | 1,40 → 1,15 | +18% | 0,16 |
> | 4163 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+98% · −42,2%** | +34% · −11,3% | +24% | −12,3% | 0,9 | 0,80 → 1,22 | +18% | 0,11 |
> | 4164 | ADX + BB explosão + GPS médias + IFR + Onda | **+225% · −62,2%** | +60% · −15,1% | +35% | −8,2% | 2,8 | 0,98 → 1,51 | +29% | 0,32 |
> | 4165 | ADX + GPS médias + Quinta + Onda ⚠️ | **+167% · −45,5%** | +51% · −11,5% | +31% | −6,2% | 2,9 | 0,87 → 1,47 | +24% | 0,03 |
> | 4166 | Donchian + BB explosão + MACD + Quinta + Bollinger ⚠️ | **+218% · −48,6%** | +48% · −9,5% | +29% | −7,7% | 2,0 | 1,27 → 1,44 | +19% | 0,19 |
> | 4167 | VWAP + BB explosão + 1ª vela 80 + Tendência + Onda ⚠️ | **+179% · −55,6%** | +46% · −12,2% | +32% | −12,2% | 1,6 | 0,89 → 1,34 | +26% | 0,30 |
> | 4168 | ADX + GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+294% · −56,0%** | +59% · −12,5% | +33% | −7,2% | 2,8 | 0,93 → 1,72 | +21% | 0,25 |
> | 4169 | ADX + BB explosão + GPS médias + Quinta + Rompe 200 ⚠️ | **+159% · −60,0%** | +45% · −14,0% | +27% | −5,7% | 2,5 | 1,24 → 1,24 | +18% | 0,15 |
> | 4170 | Donchian + BB explosão + GPS médias + Pôr do sol + Bollinger | **+234% · −54,6%** | +54% · −11,9% | +29% | −7,7% | 2,2 | 1,45 → 1,29 | +18% | 0,18 |

> [!example]- Combinações 4171 a 4200 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4171 | ADX + GPS médias + Bollinger | **+193% · −42,2%** | +67% · −14,7% | +34% | −6,2% | 3,4 | 1,27 → 1,55 | +28% | 0,39 |
> | 4172 | ADX + BB explosão + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+178% · −52,5%** | +46% · −11,4% | +29% | −7,8% | 2,1 | 0,68 → 1,57 | +18% | 0,16 |
> | 4173 | BB explosão + GPS médias + IFR + Bollinger + Onda | **+251% · −53,0%** | +56% · −11,4% | +33% | −9,6% | 2,1 | 1,11 → 1,48 | +27% | 0,31 |
> | 4174 | VWAP + Donchian + Rompe 200 | **+103% · −42,2%** | +42% · −14,0% | +27% | −12,7% | 1,1 | 1,14 → 0,91 | +13% | 0,27 |
> | 4175 | Donchian + BB explosão + Pôr do sol + Tendência + Onda | **+213% · −59,7%** | +52% · −13,3% | +33% | −7,2% | 2,8 | 1,12 → 1,38 | +24% | 0,22 |
> | 4176 | ADX + VWAP + Donchian + Tendência | **+229% · −61,6%** | +64% · −18,0% | +38% | −8,8% | 2,8 | 1,25 → 1,39 | +21% | 0,35 |
> | 4177 | ADX + Donchian + Pullback | **+186% · −41,7%** | +64% · −13,5% | +36% | −5,7% | 4,0 | 1,52 → 1,62 | +21% | 0,07 |
> | 4178 | Donchian + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+232% · −59,2%** | +62% · −17,0% | +38% | −6,9% | 3,6 | 1,44 → 1,45 | +20% | 0,34 |
> | 4179 | ADX + GPS médias + Rompe 200 | **+137% · −43,1%** | +54% · −15,5% | +31% | −6,8% | 2,7 | 1,21 → 1,29 | +23% | 0,21 |
> | 4180 | ADX + Quinta + Pullback ⚠️ | **+102% · −30,6%** | +41% · −9,7% | +27% | −6,4% | 2,2 | 1,43 → 1,56 | +16% | 0,03 |
> | 4181 | ADX + BB explosão + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+226% · −59,1%** | +54% · −13,0% | +32% | −6,0% | 3,3 | 1,36 → 1,50 | +22% | 0,15 |
> | 4182 | VWAP + Donchian + BB explosão + IFR + Rompe 200 | **+184% · −58,3%** | +47% · −12,6% | +30% | −10,2% | 1,7 | 1,22 → 1,21 | +14% | 0,35 |
> | 4183 | VWAP + 1ª vela 80 + Quinta + Onda ⚠️ | **+102% · −34,1%** | +34% · −8,4% | +26% | −12,6% | 1,0 | 0,52 → 1,38 | +18% | 0,01 |
> | 4184 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+198% · −63,1%** | +52% · −16,1% | +33% | −11,8% | 1,7 | 1,29 → 1,22 | +19% | 0,33 |
> | 4185 | BB explosão + GPS médias + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+176% · −50,2%** | +45% · −11,2% | +29% | −11,3% | 1,4 | 1,17 → 1,29 | +22% | 0,25 |
> | 4186 | ADX + GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+247% · −56,0%** | +56% · −12,4% | +35% | −9,4% | 2,3 | 0,83 → 1,62 | +21% | 0,24 |
> | 4187 | VWAP + BB explosão + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+156% · −46,9%** | +38% · −10,3% | +25% | −11,5% | 1,0 | 1,03 → 1,29 | +17% | 0,26 |
> | 4188 | Donchian + BB explosão + Pôr do sol + Rompe 200 + Bollinger | **+193% · −43,3%** | +43% · −8,3% | +26% | −5,3% | 2,4 | 1,44 → 1,36 | +15% | 0,11 |
> | 4189 | Donchian + BB explosão + MACD + 1ª vela 80 + Rompe 200 ⚠️ | **+204% · −49,2%** | +47% · −9,8% | +30% | −9,8% | 1,8 | 1,17 → 1,41 | +21% | 0,27 |
> | 4190 | BB explosão + MACD + Rompe 200 + Tendência + Onda | **+171% · −55,0%** | +44% · −11,7% | +31% | −9,7% | 1,9 | 0,97 → 1,32 | +25% | 0,28 |
> | 4191 | ADX + BB explosão + Pôr do sol + Pullback | **+134% · −52,1%** | +42% · −13,8% | +27% | −5,5% | 2,6 | 1,26 → 1,48 | +18% | −0,02 |
> | 4192 | VWAP + BB explosão + 1ª vela 80 + Pullback + Onda ⚠️ | **+144% · −48,0%** | +39% · −10,5% | +28% | −12,9% | 1,2 | 0,84 → 1,30 | +23% | 0,17 |
> | 4193 | BB explosão + Quinta + Tendência + Onda ⚠️ | **+139% · −50,4%** | +44% · −13,3% | +31% | −8,0% | 2,3 | 1,00 → 1,33 | +25% | 0,07 |
> | 4194 | ADX + VWAP + 1ª vela 80 + Onda ⚠️ | **+153% · −46,5%** | +48% · −12,1% | +31% | −11,5% | 1,6 | 0,50 → 1,55 | +18% | 0,24 |
> | 4195 | ADX + BB explosão + GPS médias + MACD + Quinta ⚠️ | **+181% · −62,1%** | +49% · −14,4% | +30% | −7,5% | 2,3 | 1,10 → 1,37 | +23% | 0,17 |
> | 4196 | ADX + VWAP + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+154% · −55,1%** | +42% · −11,2% | +27% | −8,0% | 1,8 | 0,84 → 1,45 | +19% | 0,10 |
> | 4197 | ADX + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+190% · −48,1%** | +53% · −12,8% | +31% | −6,0% | 3,1 | 1,18 → 1,54 | +26% | 0,20 |
> | 4198 | VWAP + BB explosão + MACD + Pullback + Bollinger | **+162% · −46,3%** | +39% · −9,4% | +26% | −11,3% | 1,2 | 1,18 → 1,22 | +17% | 0,24 |
> | 4199 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Bollinger ⚠️ | **+212% · −50,7%** | +47% · −11,2% | +28% | −7,9% | 1,9 | 1,34 → 1,46 | +21% | 0,14 |
> | 4200 | BB explosão + IFR + MACD + Onda | **+163% · −39,4%** | +48% · −9,6% | +33% | −10,6% | 1,9 | 0,75 → 1,50 | +24% | 0,32 |

> [!example]- Combinações 4201 a 4230 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4201 | ADX + Donchian + BB explosão + MACD + Pôr do sol | **+212% · −63,2%** | +52% · −14,5% | +31% | −6,0% | 3,1 | 1,03 → 1,52 | +23% | 0,17 |
> | 4202 | ADX + VWAP + Donchian + Pôr do sol + Pullback | **+209% · −53,0%** | +47% · −9,1% | +29% | −4,8% | 3,4 | 1,33 → 1,44 | +16% | 0,05 |
> | 4203 | ADX + BB explosão + GPS médias + Pullback + Onda | **+193% · −62,2%** | +53% · −14,6% | +32% | −7,7% | 2,5 | 1,06 → 1,37 | +26% | 0,20 |
> | 4204 | ADX + BB explosão + GPS médias + IFR | **+205% · −62,1%** | +64% · −18,7% | +36% | −7,2% | 3,3 | 1,22 → 1,47 | +23% | 0,42 |
> | 4205 | ADX + BB explosão + GPS médias + Pôr do sol + Rompe 200 | **+161% · −59,2%** | +45% · −13,6% | +27% | −5,7% | 2,5 | 1,18 → 1,27 | +19% | 0,11 |
> | 4206 | ADX + BB explosão + Rompe 200 + Bollinger | **+161% · −51,2%** | +47% · −13,4% | +27% | −5,5% | 2,6 | 1,03 → 1,49 | +18% | 0,23 |
> | 4207 | ADX + Donchian + 1ª vela 80 ⚠️ | **+206% · −40,7%** | +70% · −11,8% | +38% | −6,4% | 3,9 | 1,09 → 1,78 | +24% | 0,16 |
> | 4208 | ADX + Donchian + BB explosão + GPS médias + Pullback | **+238% · −69,5%** | +61% · −17,4% | +34% | −5,7% | 3,7 | 1,46 → 1,35 | +18% | 0,26 |
> | 4209 | VWAP + GPS médias + Bollinger + Onda | **+166% · −43,9%** | +48% · −11,9% | +29% | −14,3% | 1,1 | 0,86 → 1,22 | +25% | 0,31 |
> | 4210 | BB explosão + IFR + Bollinger | **+157% · −32,3%** | +55% · −10,6% | +32% | −7,2% | 2,6 | 1,36 → 1,64 | +19% | 0,32 |
> | 4211 | ADX + BB explosão + GPS médias + Quinta + Bollinger ⚠️ | **+216% · −58,6%** | +52% · −13,2% | +29% | −5,3% | 3,0 | 1,28 → 1,42 | +20% | 0,22 |
> | 4212 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+216% · −54,7%** | +52% · −12,1% | +31% | −8,8% | 2,1 | 1,40 → 1,33 | +19% | 0,12 |
> | 4213 | ADX + Pôr do sol + Onda | **+109% · −31,2%** | +45% · −10,9% | +29% | −7,9% | 2,0 | 0,39 → 1,61 | +17% | −0,04 |
> | 4214 | BB explosão + GPS médias + 1ª vela 80 + Pullback + Onda ⚠️ | **+192% · −51,6%** | +48% · −11,0% | +31% | −9,6% | 1,9 | 1,11 → 1,37 | +24% | 0,14 |
> | 4215 | ADX + BB explosão + GPS médias + Tendência + Onda | **+220% · −72,0%** | +60% · −18,3% | +37% | −8,7% | 2,7 | 1,07 → 1,41 | +28% | 0,34 |
> | 4216 | Donchian + BB explosão + Bollinger + Tendência | **+246% · −61,0%** | +63% · −17,9% | +36% | −7,1% | 3,2 | 1,54 → 1,39 | +16% | 0,43 |
> | 4217 | Donchian + BB explosão + IFR + Rompe 200 | **+186% · −48,4%** | +53% · −13,0% | +32% | −7,1% | 2,7 | 1,40 → 1,36 | +15% | 0,38 |
> | 4218 | VWAP + BB explosão + IFR + Rompe 200 | **+115% · −46,0%** | +39% · −12,1% | +27% | −10,7% | 1,3 | 1,07 → 1,12 | +14% | 0,28 |
> | 4219 | BB explosão + MACD + Pôr do sol + Rompe 200 + Onda | **+117% · −38,1%** | +33% · −7,4% | +25% | −9,1% | 1,3 | 0,65 → 1,32 | +18% | 0,08 |
> | 4220 | VWAP + MACD + 1ª vela 80 + Onda ⚠️ | **+127% · −40,8%** | +40% · −10,7% | +29% | −16,3% | 1,0 | 0,49 → 1,40 | +18% | 0,35 |
> | 4221 | ADX + VWAP + 1ª vela 80 + Pullback ⚠️ | **+156% · −40,2%** | +45% · −7,8% | +30% | −7,2% | 2,4 | 1,07 → 1,56 | +16% | 0,09 |
> | 4222 | ADX + VWAP + GPS médias + Bollinger | **+201% · −49,0%** | +56% · −13,4% | +31% | −9,1% | 2,0 | 1,12 → 1,36 | +23% | 0,36 |
> | 4223 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+282% · −57,0%** | +60% · −13,3% | +33% | −9,7% | 2,1 | 1,41 → 1,43 | +21% | 0,32 |
> | 4224 | BB explosão + MACD + Bollinger + Tendência + Onda | **+234% · −54,8%** | +51% · −11,5% | +33% | −9,2% | 2,2 | 1,00 → 1,48 | +24% | 0,35 |
> | 4225 | ADX + Donchian + BB explosão + MACD + Quinta ⚠️ | **+210% · −63,9%** | +52% · −15,0% | +31% | −6,0% | 3,1 | 1,08 → 1,50 | +22% | 0,18 |
> | 4226 | GPS médias + Rompe 200 + Onda | **+107% · −31,9%** | +44% · −10,5% | +28% | −11,8% | 1,3 | 0,89 → 1,11 | +22% | 0,21 |
> | 4227 | ADX + VWAP + MACD + Rompe 200 | **+121% · −40,3%** | +40% · −9,8% | +27% | −9,7% | 1,5 | 0,73 → 1,30 | +17% | 0,18 |
> | 4228 | VWAP + Donchian + BB explosão + Quinta + Tendência ⚠️ | **+180% · −70,6%** | +48% · −16,0% | +31% | −7,8% | 2,3 | 1,32 → 1,15 | +14% | 0,24 |
> | 4229 | VWAP + Pôr do sol + Quinta ⚠️ | **+40% · −22,5%** | +22% · −5,4% | +18% | −9,4% | 0,6 | 0,81 → 0,80 | +10% | −0,03 |
> | 4230 | VWAP + Donchian + MACD + Onda | **+155% · −41,8%** | +48% · −11,2% | +31% | −15,2% | 1,2 | 0,71 → 1,26 | +22% | 0,41 |

> [!example]- Combinações 4231 a 4260 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4231 | BB explosão + MACD + Pullback | **+94% · −39,4%** | +39% · −13,1% | +28% | −8,6% | 1,8 | 1,26 → 1,22 | +16% | 0,05 |
> | 4232 | VWAP + BB explosão + MACD + Pôr do sol + Quinta ⚠️ | **+95% · −40,8%** | +30% · −8,1% | +23% | −10,5% | 0,9 | 0,82 → 1,10 | +17% | 0,06 |
> | 4233 | ADX + BB explosão + GPS médias + MACD + Pôr do sol | **+184% · −60,9%** | +49% · −14,0% | +30% | −7,5% | 2,3 | 1,05 → 1,39 | +24% | 0,15 |
> | 4234 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+200% · −47,9%** | +47% · −8,5% | +30% | −8,1% | 2,1 | 0,88 → 1,52 | +24% | 0,12 |
> | 4235 | VWAP + Donchian + BB explosão + GPS médias + IFR | **+207% · −65,9%** | +57% · −16,2% | +34% | −12,5% | 1,7 | 1,28 → 1,20 | +17% | 0,44 |
> | 4236 | ADX + GPS médias + MACD | **+162% · −42,8%** | +62% · −15,2% | +36% | −8,8% | 2,6 | 1,04 → 1,44 | +30% | 0,29 |
> | 4237 | VWAP + BB explosão + Pôr do sol + Quinta + Rompe 200 ⚠️ | **+74% · −40,6%** | +26% · −8,5% | +20% | −8,4% | 0,8 | 0,99 → 0,85 | +13% | 0,02 |
> | 4238 | VWAP + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+103% · −37,2%** | +34% · −9,6% | +26% | −14,4% | 0,9 | 0,55 → 1,28 | +19% | 0,24 |
> | 4239 | Donchian + BB explosão + GPS médias + Pullback + Onda | **+205% · −59,9%** | +54% · −13,9% | +33% | −9,3% | 2,1 | 1,23 → 1,24 | +22% | 0,25 |
> | 4240 | Donchian + BB explosão + GPS médias + MACD + Bollinger | **+251% · −59,1%** | +58% · −12,8% | +33% | −11,0% | 1,8 | 1,31 → 1,30 | +20% | 0,41 |
> | 4241 | ADX + VWAP + GPS médias + Bollinger + Onda | **+231% · −54,1%** | +53% · −11,8% | +31% | −10,2% | 1,8 | 0,86 → 1,43 | +24% | 0,30 |
> | 4242 | ADX + Rompe 200 + Onda | **+108% · −33,4%** | +45% · −10,7% | +29% | −9,0% | 1,8 | 0,49 → 1,46 | +20% | 0,07 |
> | 4243 | Donchian + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+167% · −42,1%** | +48% · −10,7% | +30% | −7,1% | 2,4 | 1,28 → 1,47 | +18% | 0,03 |
> | 4244 | ADX + BB explosão + Quinta + Rompe 200 ⚠️ | **+111% · −49,8%** | +38% · −13,0% | +25% | −6,0% | 2,0 | 0,98 → 1,33 | +16% | 0,07 |
> | 4245 | Donchian + BB explosão + GPS médias + Quinta + Rompe 200 ⚠️ | **+171% · −57,2%** | +46% · −12,9% | +28% | −7,7% | 1,9 | 1,46 → 1,07 | +14% | 0,18 |
> | 4246 | ADX + GPS médias + Bollinger + Onda | **+229% · −48,9%** | +61% · −12,9% | +33% | −7,1% | 2,9 | 0,91 → 1,58 | +24% | 0,27 |
> | 4247 | VWAP + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+97% · −48,4%** | +34% · −13,8% | +25% | −13,7% | 0,9 | 0,86 → 1,10 | +15% | 0,24 |
> | 4248 | ADX + BB explosão + GPS médias + Pôr do sol + Bollinger | **+219% · −57,3%** | +52% · −12,8% | +29% | −5,3% | 3,0 | 1,22 → 1,46 | +21% | 0,18 |
> | 4249 | BB explosão + MACD + Bollinger + Tendência | **+198% · −54,3%** | +52% · −14,9% | +33% | −8,8% | 2,3 | 1,32 → 1,41 | +21% | 0,40 |
> | 4250 | VWAP + BB explosão + Quinta + Pullback + Onda ⚠️ | **+107% · −44,3%** | +33% · −8,8% | +25% | −10,7% | 1,1 | 0,87 → 1,10 | +19% | 0,05 |
> | 4251 | BB explosão + Quinta + Tendência ⚠️ | **+108% · −49,8%** | +44% · −18,3% | +30% | −6,8% | 2,6 | 1,48 → 1,20 | +14% | 0,09 |
> | 4252 | ADX + GPS médias + Rompe 200 + Onda | **+167% · −47,2%** | +52% · −12,2% | +31% | −8,0% | 2,3 | 0,87 → 1,39 | +25% | 0,18 |
> | 4253 | BB explosão + GPS médias + 1ª vela 80 + Rompe 200 + Bollinger ⚠️ | **+209% · −52,0%** | +47% · −11,7% | +28% | −8,8% | 1,7 | 1,37 → 1,36 | +19% | 0,25 |
> | 4254 | BB explosão + MACD + Rompe 200 + Tendência | **+142% · −54,3%** | +44% · −15,1% | +31% | −9,3% | 1,9 | 1,27 → 1,21 | +18% | 0,30 |
> | 4255 | BB explosão + GPS médias + Pullback + Rompe 200 | **+123% · −51,0%** | +41% · −14,1% | +27% | −7,8% | 1,8 | 1,59 → 0,92 | +12% | 0,18 |
> | 4256 | BB explosão + Quinta + Rompe 200 + Bollinger + Onda ⚠️ | **+140% · −37,7%** | +35% · −7,4% | +24% | −7,7% | 1,4 | 0,86 → 1,37 | +17% | 0,06 |
> | 4257 | VWAP + BB explosão + Pullback + Rompe 200 | **+79% · −51,2%** | +31% · −12,8% | +23% | −11,3% | 0,9 | 1,21 → 0,77 | +9% | 0,17 |
> | 4258 | BB explosão + GPS médias + MACD + 1ª vela 80 + Bollinger ⚠️ | **+237% · −53,0%** | +51% · −12,0% | +31% | −11,4% | 1,6 | 1,22 → 1,45 | +22% | 0,31 |
> | 4259 | VWAP + 1ª vela 80 + Quinta ⚠️ | **+69% · −27,3%** | +31% · −8,9% | +24% | −11,9% | 0,9 | 0,80 → 1,26 | +16% | −0,07 |
> | 4260 | BB explosão + GPS médias + MACD + Pôr do sol + Rompe 200 | **+138% · −49,5%** | +39% · −10,2% | +26% | −9,2% | 1,4 | 1,19 → 1,13 | +19% | 0,11 |

> [!example]- Combinações 4261 a 4290 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4261 | VWAP + Donchian + BB explosão + Pôr do sol + Tendência | **+182% · −68,0%** | +48% · −15,4% | +31% | −7,8% | 2,3 | 1,28 → 1,16 | +15% | 0,26 |
> | 4262 | ADX + VWAP + BB explosão + Quinta + Pullback ⚠️ | **+138% · −58,6%** | +39% · −12,7% | +26% | −6,4% | 2,1 | 1,15 → 1,25 | +15% | 0,08 |
> | 4263 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Pullback ⚠️ | **+167% · −58,5%** | +44% · −14,4% | +29% | −12,2% | 1,3 | 1,31 → 1,16 | +17% | 0,18 |
> | 4264 | VWAP + Donchian + BB explosão + MACD + Pullback | **+170% · −58,1%** | +45% · −12,9% | +29% | −11,9% | 1,4 | 1,20 → 1,14 | +15% | 0,29 |
> | 4265 | VWAP + BB explosão + Pôr do sol + Pullback | **+81% · −40,7%** | +31% · −10,5% | +23% | −9,5% | 1,0 | 1,17 → 0,90 | +12% | 0,02 |
> | 4266 | ADX + VWAP + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+154% · −54,7%** | +42% · −11,5% | +27% | −9,6% | 1,5 | 0,84 → 1,38 | +19% | 0,21 |
> | 4267 | VWAP + BB explosão + GPS médias + Quinta + Pullback ⚠️ | **+128% · −55,6%** | +38% · −12,5% | +26% | −9,7% | 1,3 | 1,40 → 0,93 | +13% | 0,07 |
> | 4268 | Donchian + BB explosão + Bollinger + Tendência + Onda | **+278% · −61,6%** | +59% · −14,0% | +35% | −7,9% | 2,8 | 1,18 → 1,46 | +24% | 0,36 |
> | 4269 | ADX + BB explosão + GPS médias + MACD + Rompe 200 | **+179% · −63,5%** | +49% · −15,5% | +30% | −8,4% | 2,1 | 1,09 → 1,31 | +22% | 0,26 |
> | 4270 | VWAP + 1ª vela 80 + Rompe 200 ⚠️ | **+71% · −35,1%** | +32% · −12,3% | +24% | −14,0% | 0,8 | 0,81 → 1,11 | +19% | 0,22 |
> | 4271 | BB explosão + GPS médias + Quinta + Tendência ⚠️ | **+160% · −58,5%** | +50% · −16,9% | +32% | −6,0% | 3,2 | 1,55 → 1,15 | +16% | 0,17 |
> | 4272 | BB explosão + Pôr do sol + Tendência + Onda | **+141% · −48,8%** | +44% · −12,6% | +31% | −7,9% | 2,3 | 0,95 → 1,35 | +25% | 0,12 |
> | 4273 | Donchian + BB explosão + Pullback + Onda | **+165% · −48,6%** | +50% · −12,6% | +31% | −8,5% | 2,2 | 1,08 → 1,31 | +22% | 0,23 |
> | 4274 | Rompe 200 + Onda | **+49% · −17,0%** | +31% · −7,9% | +24% | −11,3% | 1,0 | 0,36 → 1,08 | +14% | 0,18 |
> | 4275 | Donchian + BB explosão + 1ª vela 80 + Quinta + Onda ⚠️ | **+198% · −49,1%** | +47% · −8,6% | +30% | −8,1% | 2,1 | 0,93 → 1,50 | +24% | 0,06 |
> | 4276 | VWAP + 1ª vela 80 + Bollinger + Onda ⚠️ | **+154% · −37,8%** | +43% · −10,0% | +28% | −13,8% | 1,1 | 0,59 → 1,52 | +18% | 0,32 |
> | 4277 | Donchian + BB explosão + GPS médias + Pullback | **+184% · −58,5%** | +57% · −17,2% | +33% | −8,2% | 2,4 | 1,58 → 1,12 | +14% | 0,28 |
> | 4278 | VWAP + BB explosão + Pôr do sol + Bollinger + Tendência | **+179% · −54,3%** | +42% · −11,4% | +28% | −7,3% | 2,0 | 1,28 → 1,24 | +16% | 0,21 |
> | 4279 | GPS médias | **+67% · −23,3%** | +67% · −23,3% | +36% | −15,3% | 1,5 | 1,40 → 0,85 | +16% | — |
> | 4280 | ADX + Donchian + BB explosão + Pôr do sol + Bollinger | **+255% · −59,9%** | +55% · −12,9% | +30% | −4,2% | 4,1 | 1,21 → 1,63 | +20% | 0,16 |
> | 4281 | BB explosão + Rompe 200 + Bollinger + Tendência | **+170% · −49,9%** | +47% · −13,1% | +29% | −7,2% | 2,3 | 1,56 → 1,30 | +15% | 0,27 |
> | 4282 | BB explosão + Pullback + Rompe 200 + Onda | **+100% · −38,8%** | +35% · −9,5% | +25% | −8,6% | 1,5 | 0,95 → 1,14 | +20% | 0,14 |
> | 4283 | BB explosão + Pullback + Bollinger | **+113% · −34,2%** | +43% · −10,6% | +26% | −5,1% | 2,6 | 1,64 → 1,32 | +12% | 0,10 |
> | 4284 | ADX + BB explosão + GPS médias + Rompe 200 + Bollinger | **+215% · −59,2%** | +52% · −13,9% | +29% | −6,4% | 2,5 | 1,25 → 1,36 | +19% | 0,30 |
> | 4285 | ADX + BB explosão + Pôr do sol + Rompe 200 | **+113% · −48,4%** | +39% · −12,3% | +25% | −5,5% | 2,2 | 0,91 → 1,37 | +18% | 0,02 |
> | 4286 | Donchian + BB explosão + IFR + MACD + Onda | **+237% · −50,9%** | +55% · −10,7% | +35% | −10,0% | 2,2 | 0,95 → 1,49 | +29% | 0,39 |
> | 4287 | BB explosão + GPS médias + MACD + Bollinger + Tendência | **+254% · −62,5%** | +56% · −14,1% | +34% | −8,8% | 2,4 | 1,43 → 1,33 | +21% | 0,40 |
> | 4288 | ADX + Bollinger | **+119% · −32,1%** | +63% · −16,1% | +32% | −7,9% | 2,4 | 0,79 → 1,76 | +18% | 0,45 |
> | 4289 | ADX + GPS médias + MACD + Onda | **+191% · −48,9%** | +57% · −12,7% | +35% | −9,6% | 2,3 | 0,79 → 1,50 | +24% | 0,24 |
> | 4290 | BB explosão + MACD + Quinta + Rompe 200 ⚠️ | **+85% · −36,5%** | +31% · −8,4% | +23% | −7,7% | 1,3 | 1,02 → 1,15 | +16% | 0,04 |

> [!example]- Combinações 4291 a 4320 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4291 | Donchian + MACD + Onda | **+152% · −32,8%** | +56% · −11,2% | +35% | −11,3% | 2,0 | 0,75 → 1,43 | +28% | 0,39 |
> | 4292 | ADX + BB explosão + Pôr do sol + Quinta ⚠️ | **+113% · −49,4%** | +38% · −12,5% | +25% | −5,6% | 2,1 | 0,92 → 1,48 | +19% | 0,02 |
> | 4293 | BB explosão + GPS médias + Pôr do sol + Tendência + Onda | **+187% · −58,0%** | +49% · −12,9% | +32% | −7,5% | 2,5 | 1,14 → 1,28 | +25% | 0,17 |
> | 4294 | VWAP + BB explosão + Pôr do sol + Pullback + Onda | **+109% · −42,6%** | +33% · −8,6% | +24% | −10,9% | 1,1 | 0,82 → 1,12 | +20% | 0,07 |
> | 4295 | VWAP + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+103% · −33,9%** | +34% · −8,4% | +26% | −12,8% | 1,0 | 0,47 → 1,40 | +17% | 0,15 |
> | 4296 | ADX + BB explosão + GPS médias + MACD + Bollinger | **+239% · −63,1%** | +57% · −14,1% | +32% | −8,4% | 2,3 | 1,12 → 1,46 | +24% | 0,37 |
> | 4297 | Donchian + BB explosão + Quinta + Tendência ⚠️ | **+184% · −61,9%** | +54% · −17,8% | +33% | −6,2% | 3,3 | 1,52 → 1,28 | +15% | 0,23 |
> | 4298 | BB explosão + GPS médias + Quinta + Tendência + Onda ⚠️ | **+185% · −59,3%** | +49% · −13,4% | +32% | −7,6% | 2,5 | 1,18 → 1,27 | +24% | 0,14 |
> | 4299 | VWAP + BB explosão + MACD + Pullback + Onda | **+128% · −48,1%** | +37% · −10,3% | +27% | −13,7% | 1,1 | 0,79 → 1,19 | +23% | 0,23 |
> | 4300 | Donchian + BB explosão + GPS médias + Pôr do sol + Rompe 200 | **+173% · −56,3%** | +47% · −12,5% | +28% | −7,7% | 1,9 | 1,41 → 1,10 | +15% | 0,17 |
> | 4301 | ADX + VWAP + BB explosão + MACD + Pullback | **+161% · −63,5%** | +43% · −14,4% | +29% | −9,1% | 1,8 | 1,01 → 1,32 | +19% | 0,20 |
> | 4302 | BB explosão + 1ª vela 80 + Quinta ⚠️ | **+86% · −31,1%** | +36% · −10,2% | +25% | −6,9% | 1,8 | 1,00 → 1,43 | +16% | −0,15 |
> | 4303 | VWAP + Pôr do sol + 1ª vela 80 ⚠️ | **+71% · −26,1%** | +31% · −8,5% | +24% | −12,1% | 0,9 | 0,71 → 1,29 | +14% | 0,13 |
> | 4304 | ADX + VWAP + Rompe 200 + Onda | **+117% · −38,5%** | +40% · −8,9% | +27% | −10,6% | 1,4 | 0,52 → 1,30 | +18% | 0,16 |
> | 4305 | ADX + VWAP + Donchian + Pôr do sol + Quinta ⚠️ | **+183% · −49,6%** | +44% · −8,4% | +27% | −4,7% | 3,0 | 1,10 → 1,45 | +15% | 0,04 |
> | 4306 | BB explosão + GPS médias + MACD + Pullback + Onda | **+173% · −53,8%** | +46% · −11,7% | +31% | −10,4% | 1,7 | 1,06 → 1,27 | +26% | 0,19 |
> | 4307 | ADX + Donchian + BB explosão + Pôr do sol + Onda | **+202% · −61,4%** | +52% · −13,3% | +31% | −6,2% | 3,0 | 0,83 → 1,51 | +24% | 0,12 |
> | 4308 | VWAP + Donchian + BB explosão + IFR + MACD | **+203% · −57,7%** | +52% · −13,0% | +33% | −12,5% | 1,6 | 1,08 → 1,30 | +19% | 0,44 |
> | 4309 | Donchian + BB explosão + MACD + Rompe 200 + Tendência | **+215% · −63,9%** | +52% · −15,2% | +33% | −8,3% | 2,4 | 1,36 → 1,27 | +18% | 0,39 |
> | 4310 | Donchian + BB explosão + GPS médias + Tendência | **+211% · −68,4%** | +67% · −21,3% | +38% | −8,3% | 3,1 | 1,50 → 1,19 | +16% | 0,54 |
> | 4311 | VWAP + 1ª vela 80 + Bollinger ⚠️ | **+114% · −31,6%** | +42% · −10,7% | +27% | −13,8% | 1,0 | 0,89 → 1,46 | +18% | 0,38 |
> | 4312 | BB explosão + GPS médias + Quinta + Pullback + Onda ⚠️ | **+151% · −50,4%** | +41% · −10,6% | +28% | −8,0% | 1,9 | 1,18 → 1,19 | +22% | 0,03 |
> | 4313 | ADX + GPS médias + Quinta ⚠️ | **+136% · −40,9%** | +53% · −14,4% | +31% | −6,0% | 3,0 | 1,24 → 1,38 | +25% | 0,09 |
> | 4314 | BB explosão + GPS médias + MACD + Quinta + Bollinger ⚠️ | **+189% · −48,2%** | +45% · −10,4% | +28% | −9,3% | 1,6 | 1,30 → 1,29 | +20% | 0,17 |
> | 4315 | ADX + VWAP + Donchian + BB explosão + IFR | **+228% · −67,5%** | +59% · −16,3% | +34% | −8,4% | 2,6 | 1,10 → 1,44 | +19% | 0,37 |
> | 4316 | ADX + VWAP + BB explosão + Quinta + Bollinger ⚠️ | **+168% · −58,3%** | +43% · −12,4% | +26% | −7,1% | 1,9 | 0,93 → 1,38 | +18% | 0,20 |
> | 4317 | BB explosão + IFR + MACD | **+131% · −38,5%** | +50% · −13,0% | +34% | −11,0% | 1,9 | 1,03 → 1,44 | +23% | 0,39 |
> | 4318 | VWAP + BB explosão + GPS médias + Pôr do sol + Tendência | **+161% · −63,7%** | +46% · −15,5% | +30% | −9,3% | 1,8 | 1,31 → 1,07 | +16% | 0,21 |
> | 4319 | BB explosão + MACD + Quinta + Bollinger + Onda ⚠️ | **+167% · −39,4%** | +40% · −7,6% | +27% | −8,4% | 1,6 | 0,74 → 1,50 | +17% | 0,11 |
> | 4320 | ADX + VWAP + IFR + Pôr do sol | **+160% · −38,1%** | +46% · −9,0% | +30% | −5,4% | 3,1 | 0,96 → 1,61 | +14% | 0,09 |

> [!example]- Combinações 4321 a 4350 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4321 | ADX + Pôr do sol + Rompe 200 | **+86% · −28,9%** | +37% · −9,4% | +24% | −5,9% | 1,9 | 0,81 → 1,46 | +17% | −0,05 |
> | 4322 | Donchian + BB explosão + MACD + Quinta + Rompe 200 ⚠️ | **+159% · −48,6%** | +41% · −9,7% | +27% | −7,7% | 1,8 | 1,23 → 1,24 | +17% | 0,15 |
> | 4323 | 1ª vela 80 + Quinta + Onda ⚠️ | **+89% · −23,6%** | +36% · −6,4% | +27% | −8,5% | 1,7 | 0,49 → 1,61 | +11% | −0,15 |
> | 4324 | VWAP + Donchian + BB explosão + 1ª vela 80 + Tendência ⚠️ | **+224% · −67,5%** | +54% · −15,3% | +34% | −10,3% | 2,1 | 1,27 → 1,31 | +18% | 0,37 |
> | 4325 | VWAP + BB explosão + GPS médias + MACD + Pullback | **+148% · −59,1%** | +42% · −13,7% | +28% | −13,3% | 1,2 | 1,23 → 1,05 | +16% | 0,24 |
> | 4326 | VWAP + BB explosão + MACD + Quinta + Rompe 200 ⚠️ | **+93% · −45,0%** | +30% · −8,9% | +23% | −11,4% | 0,9 | 0,88 → 1,00 | +15% | 0,12 |
> | 4327 | VWAP + Donchian + 1ª vela 80 ⚠️ | **+143% · −39,6%** | +52% · −14,1% | +32% | −14,6% | 1,3 | 1,06 → 1,32 | +20% | 0,30 |
> | 4328 | BB explosão + Pullback + Bollinger + Onda | **+150% · −39,5%** | +43% · −9,5% | +28% | −7,8% | 1,9 | 1,01 → 1,43 | +23% | 0,14 |
> | 4329 | 1ª vela 80 + Rompe 200 ⚠️ | **+57% · −21,1%** | +34% · −10,4% | +25% | −7,3% | 1,6 | 0,86 → 1,35 | +16% | 0,16 |
> | 4330 | ADX + Pullback + Onda | **+127% · −34,2%** | +50% · −10,4% | +32% | −8,6% | 2,3 | 0,78 → 1,56 | +20% | 0,08 |
> | 4331 | ADX + VWAP + Quinta + Rompe 200 ⚠️ | **+97% · −34,0%** | +34% · −7,6% | +24% | −6,7% | 1,6 | 0,85 → 1,21 | +15% | 0,03 |
> | 4332 | GPS médias + Bollinger + Onda | **+158% · −36,7%** | +56% · −12,0% | +31% | −10,7% | 1,7 | 0,94 → 1,40 | +21% | 0,23 |
> | 4333 | ADX + IFR | **+134% · −29,5%** | +71% · −14,3% | +41% | −8,5% | 3,3 | 1,00 → 1,84 | +20% | 0,33 |
> | 4334 | VWAP + Donchian + Quinta ⚠️ | **+103% · −33,2%** | +42% · −10,6% | +27% | −10,5% | 1,3 | 1,16 → 1,03 | +15% | −0,01 |
> | 4335 | VWAP + Donchian + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+169% · −52,9%** | +43% · −12,1% | +28% | −10,9% | 1,4 | 1,11 → 1,28 | +17% | 0,12 |
> | 4336 | BB explosão + Pôr do sol + Quinta + Bollinger ⚠️ | **+104% · −30,3%** | +33% · −6,5% | +21% | −3,7% | 2,4 | 1,36 → 1,47 | +16% | 0,00 |
> | 4337 | BB explosão + GPS médias + Quinta + Rompe 200 + Bollinger ⚠️ | **+163% · −47,0%** | +41% · −9,6% | +25% | −7,0% | 1,7 | 1,51 → 1,12 | +15% | 0,14 |
> | 4338 | Donchian + BB explosão + MACD + Pôr do sol + Rompe 200 | **+161% · −47,0%** | +41% · −9,2% | +27% | −7,7% | 1,8 | 1,17 → 1,26 | +18% | 0,15 |
> | 4339 | ADX + BB explosão + MACD + Pullback + Onda | **+187% · −59,4%** | +47% · −12,5% | +31% | −7,4% | 2,5 | 0,85 → 1,53 | +25% | 0,15 |
> | 4340 | ADX + VWAP + Bollinger + Onda | **+170% · −40,5%** | +49% · −9,6% | +29% | −10,0% | 1,7 | 0,55 → 1,51 | +17% | 0,29 |
> | 4341 | Donchian + Quinta ⚠️ | **+92% · −23,3%** | +50% · −10,6% | +29% | −4,7% | 3,5 | 1,59 → 1,35 | +17% | −0,20 |
> | 4342 | VWAP + BB explosão + GPS médias + Pôr do sol + Pullback | **+130% · −54,3%** | +38% · −11,9% | +25% | −9,8% | 1,3 | 1,35 → 0,95 | +14% | 0,07 |
> | 4343 | BB explosão + Pôr do sol + Tendência | **+110% · −48,2%** | +44% · −17,4% | +30% | −6,9% | 2,6 | 1,40 → 1,24 | +15% | 0,10 |
> | 4344 | VWAP + Donchian + BB explosão + Pullback + Onda | **+162% · −55,3%** | +45% · −12,2% | +29% | −12,0% | 1,4 | 0,99 → 1,17 | +20% | 0,27 |
> | 4345 | ADX + BB explosão + Pôr do sol + Quinta + Onda ⚠️ | **+143% · −50,8%** | +39% · −9,5% | +26% | −5,2% | 2,6 | 0,64 → 1,53 | +19% | −0,01 |
> | 4346 | VWAP + Donchian + BB explosão + Pullback + Bollinger | **+206% · −54,1%** | +47% · −11,3% | +28% | −9,3% | 1,7 | 1,40 → 1,19 | +13% | 0,26 |
> | 4347 | ADX + VWAP + BB explosão + Pullback + Rompe 200 | **+137% · −58,3%** | +39% · −13,2% | +26% | −7,7% | 1,7 | 1,13 → 1,17 | +14% | 0,16 |
> | 4348 | VWAP + BB explosão + Rompe 200 + Bollinger + Tendência | **+175% · −56,3%** | +43% · −12,2% | +28% | −8,8% | 1,7 | 1,31 → 1,14 | +14% | 0,31 |
> | 4349 | BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+88% · −29,2%** | +37% · −9,3% | +25% | −7,2% | 1,7 | 0,91 → 1,48 | +16% | −0,04 |
> | 4350 | ADX + VWAP + GPS médias + Quinta ⚠️ | **+145% · −46,9%** | +47% · −12,0% | +28% | −8,1% | 1,9 | 1,09 → 1,24 | +21% | 0,09 |

> [!example]- Combinações 4351 a 4380 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4351 | ADX + VWAP + BB explosão + GPS médias + IFR | **+199% · −68,0%** | +56% · −17,3% | +33% | −9,9% | 2,1 | 1,12 → 1,34 | +20% | 0,37 |
> | 4352 | ADX + BB explosão + MACD + Rompe 200 | **+135% · −54,9%** | +44% · −15,0% | +29% | −7,8% | 2,0 | 0,84 → 1,40 | +21% | 0,18 |
> | 4353 | ADX + VWAP + BB explosão + MACD + 1ª vela 80 ⚠️ | **+176% · −60,5%** | +46% · −13,0% | +30% | −11,5% | 1,5 | 0,76 → 1,46 | +21% | 0,30 |
> | 4354 | VWAP + BB explosão + IFR + Bollinger + Onda | **+200% · −45,7%** | +46% · −10,1% | +30% | −10,9% | 1,5 | 0,83 → 1,43 | +24% | 0,31 |
> | 4355 | ADX + Donchian + BB explosão + Quinta + Onda ⚠️ | **+200% · −62,1%** | +52% · −13,9% | +31% | −6,2% | 2,9 | 0,87 → 1,50 | +25% | 0,11 |
> | 4356 | ADX + VWAP + MACD + Quinta ⚠️ | **+121% · −41,5%** | +39% · −9,3% | +27% | −7,9% | 1,8 | 0,72 → 1,39 | +15% | 0,11 |
> | 4357 | Donchian + BB explosão + GPS médias + MACD + Quinta ⚠️ | **+191% · −58,5%** | +51% · −13,3% | +31% | −10,1% | 1,8 | 1,29 → 1,21 | +19% | 0,21 |
> | 4358 | ADX + Donchian + GPS médias | **+208% · −50,9%** | +77% · −18,6% | +39% | −6,8% | 3,9 | 1,31 → 1,42 | +25% | 0,35 |
> | 4359 | VWAP + BB explosão + Quinta + Tendência + Onda ⚠️ | **+140% · −56,8%** | +40% · −12,4% | +29% | −10,0% | 1,6 | 0,91 → 1,19 | +22% | 0,14 |
> | 4360 | ADX + BB explosão + Pôr do sol + Rompe 200 + Onda | **+142% · −49,7%** | +40% · −9,4% | +26% | −6,2% | 2,2 | 0,66 → 1,44 | +19% | 0,05 |
> | 4361 | VWAP + BB explosão + IFR + MACD | **+136% · −47,6%** | +44% · −12,5% | +30% | −13,7% | 1,3 | 0,91 → 1,26 | +20% | 0,39 |
> | 4362 | VWAP + BB explosão + Pôr do sol + Quinta + Bollinger ⚠️ | **+116% · −38,2%** | +32% · −7,3% | +22% | −7,8% | 1,1 | 1,05 → 1,15 | +15% | 0,07 |
> | 4363 | ADX + BB explosão + IFR + Onda | **+189% · −55,3%** | +57% · −14,3% | +35% | −7,9% | 2,8 | 0,76 → 1,63 | +26% | 0,26 |
> | 4364 | VWAP + BB explosão + Pôr do sol + Tendência + Onda | **+142% · −55,4%** | +40% · −11,8% | +29% | −10,1% | 1,6 | 0,87 → 1,21 | +23% | 0,19 |
> | 4365 | BB explosão + Pôr do sol + Rompe 200 + Bollinger + Onda | **+142% · −38,7%** | +36% · −7,3% | +24% | −7,6% | 1,4 | 0,79 → 1,40 | +17% | 0,07 |
> | 4366 | BB explosão + GPS médias + Pôr do sol + Pullback + Onda | **+153% · −49,5%** | +42% · −10,1% | +28% | −8,0% | 1,8 | 1,13 → 1,22 | +23% | 0,04 |
> | 4367 | VWAP + Pôr do sol + Bollinger | **+77% · −25,2%** | +33% · −7,9% | +21% | −11,1% | 0,8 | 0,93 → 1,14 | +13% | 0,12 |
> | 4368 | ADX + BB explosão + 1ª vela 80 + Onda ⚠️ | **+166% · −52,4%** | +52% · −14,5% | +33% | −8,3% | 2,4 | 0,58 → 1,61 | +17% | 0,19 |
> | 4369 | ADX + BB explosão + Pullback + Rompe 200 + Onda | **+161% · −53,3%** | +43% · −10,8% | +28% | −6,4% | 2,4 | 0,94 → 1,41 | +23% | 0,13 |
> | 4370 | Donchian + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+169% · −41,2%** | +48% · −10,2% | +29% | −7,1% | 2,3 | 1,22 → 1,50 | +20% | 0,09 |
> | 4371 | ADX + VWAP + BB explosão + Quinta + Rompe 200 ⚠️ | **+118% · −55,9%** | +36% · −12,4% | +24% | −7,7% | 1,5 | 0,89 → 1,17 | +15% | 0,10 |
> | 4372 | Pôr do sol + Onda | **+49% · −16,1%** | +31% · −6,4% | +24% | −8,2% | 1,4 | 0,20 → 1,32 | +11% | −0,10 |
> | 4373 | ADX + GPS médias + Pôr do sol | **+139% · −38,7%** | +54% · −13,4% | +31% | −5,6% | 3,2 | 1,16 → 1,43 | +25% | 0,03 |
> | 4374 | Donchian + BB explosão + GPS médias + Tendência + Onda | **+227% · −69,1%** | +62% · −16,9% | +37% | −9,0% | 2,7 | 1,21 → 1,28 | +24% | 0,43 |
> | 4375 | ADX + GPS médias + Pôr do sol + Onda | **+170% · −46,2%** | +51% · −11,7% | +31% | −6,4% | 2,8 | 0,82 → 1,49 | +23% | 0,04 |
> | 4376 | Donchian + BB explosão + IFR + MACD | **+209% · −50,2%** | +59% · −13,5% | +36% | −10,2% | 2,3 | 1,20 → 1,44 | +21% | 0,48 |
> | 4377 | VWAP + Donchian + BB explosão + IFR + Onda | **+197% · −54,7%** | +52% · −12,0% | +33% | −11,5% | 1,7 | 0,92 → 1,33 | +24% | 0,37 |
> | 4378 | Donchian + BB explosão + Pôr do sol + Rompe 200 + Onda | **+156% · −47,3%** | +41% · −8,4% | +27% | −8,1% | 1,7 | 0,93 → 1,28 | +22% | 0,12 |
> | 4379 | Donchian + BB explosão + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+196% · −53,6%** | +47% · −10,7% | +30% | −9,5% | 1,8 | 0,93 → 1,43 | +25% | 0,24 |
> | 4380 | Donchian + BB explosão + MACD + Pôr do sol + Bollinger | **+221% · −47,0%** | +48% · −9,3% | +28% | −7,7% | 2,0 | 1,21 → 1,46 | +20% | 0,18 |

> [!example]- Combinações 4381 a 4410 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4381 | Donchian + Rompe 200 | **+93% · −26,3%** | +51% · −12,6% | +29% | −6,8% | 2,4 | 1,49 → 1,09 | +14% | 0,24 |
> | 4382 | ADX + MACD + Pôr do sol | **+112% · −32,9%** | +44% · −10,5% | +29% | −7,1% | 2,3 | 0,67 → 1,68 | +17% | 0,02 |
> | 4383 | VWAP + BB explosão + Pullback + Rompe 200 + Onda | **+106% · −47,5%** | +33% · −10,5% | +25% | −12,2% | 1,0 | 0,87 → 1,02 | +18% | 0,20 |
> | 4384 | ADX + VWAP + BB explosão + Pullback + Bollinger | **+193% · −60,2%** | +46% · −13,0% | +28% | −7,1% | 2,1 | 1,18 → 1,38 | +17% | 0,24 |
> | 4385 | BB explosão + MACD + 1ª vela 80 ⚠️ | **+111% · −34,6%** | +44% · −11,9% | +30% | −13,3% | 1,3 | 0,82 → 1,43 | +17% | 0,23 |
> | 4386 | ADX + BB explosão + IFR | **+159% · −53,9%** | +61% · −19,6% | +36% | −7,2% | 3,2 | 1,02 → 1,63 | +23% | 0,36 |
> | 4387 | ADX + Donchian + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+233% · −58,1%** | +54% · −12,8% | +31% | −4,9% | 3,8 | 1,16 → 1,64 | +22% | 0,10 |
> | 4388 | Donchian + BB explosão + Rompe 200 + Tendência + Onda | **+208% · −61,5%** | +52% · −14,1% | +33% | −8,4% | 2,4 | 1,16 → 1,30 | +22% | 0,34 |
> | 4389 | VWAP + Donchian + BB explosão + GPS médias + Tendência | **+198% · −76,1%** | +58% · −19,4% | +35% | −11,0% | 2,0 | 1,35 → 1,10 | +15% | 0,48 |
> | 4390 | VWAP + MACD + Pôr do sol | **+62% · −26,6%** | +29% · −8,4% | +23% | −14,1% | 0,7 | 0,61 → 1,05 | +14% | 0,14 |
> | 4391 | ADX + VWAP + BB explosão + IFR | **+163% · −59,9%** | +52% · −16,7% | +32% | −8,7% | 2,2 | 0,92 → 1,43 | +20% | 0,33 |
> | 4392 | BB explosão + GPS médias + Rompe 200 + Tendência + Onda | **+182% · −60,5%** | +49% · −14,3% | +32% | −9,0% | 2,2 | 1,17 → 1,21 | +23% | 0,30 |
> | 4393 | Donchian + Pôr do sol | **+93% · −25,1%** | +51% · −11,5% | +29% | −4,7% | 3,5 | 1,45 → 1,41 | +20% | −0,16 |
> | 4394 | VWAP + BB explosão + MACD + Rompe 200 + Tendência | **+143% · −60,1%** | +40% · −13,8% | +29% | −10,9% | 1,5 | 1,11 → 1,10 | +16% | 0,33 |
> | 4395 | BB explosão + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+141% · −46,1%** | +45% · −12,3% | +28% | −9,0% | 1,7 | 1,27 → 1,26 | +20% | 0,03 |
> | 4396 | ADX + VWAP + MACD + Pullback | **+143% · −45,0%** | +43% · −10,4% | +29% | −8,2% | 2,0 | 1,02 → 1,39 | +16% | 0,14 |
> | 4397 | ADX + VWAP + Pullback + Rompe 200 | **+116% · −38,3%** | +38% · −8,4% | +26% | −7,1% | 1,8 | 1,17 → 1,20 | +16% | 0,10 |
> | 4398 | VWAP + BB explosão + 1ª vela 80 + Quinta + Onda ⚠️ | **+124% · −45,8%** | +36% · −10,2% | +26% | −12,6% | 1,0 | 0,62 → 1,31 | +18% | 0,06 |
> | 4399 | ADX + VWAP + GPS médias + Quinta + Onda ⚠️ | **+171% · −51,0%** | +46% · −10,6% | +29% | −9,5% | 1,7 | 0,82 → 1,33 | +22% | 0,08 |
> | 4400 | ADX + VWAP + GPS médias + Rompe 200 + Onda | **+169% · −52,5%** | +46% · −11,2% | +29% | −10,9% | 1,5 | 0,83 → 1,27 | +25% | 0,21 |
> | 4401 | ADX + VWAP + BB explosão + IFR + Onda | **+187% · −61,4%** | +50% · −13,0% | +32% | −9,9% | 2,0 | 0,73 → 1,47 | +22% | 0,28 |
> | 4402 | BB explosão + GPS médias + Pullback + Bollinger | **+175% · −48,5%** | +50% · −13,0% | +29% | −7,2% | 2,2 | 1,66 → 1,19 | +15% | 0,19 |
> | 4403 | BB explosão + GPS médias + Rompe 200 + Tendência | **+159% · −60,4%** | +51% · −18,1% | +32% | −7,3% | 2,6 | 1,52 → 1,08 | +15% | 0,35 |
> | 4404 | ADX + MACD + Onda | **+133% · −38,6%** | +52% · −11,9% | +34% | −10,2% | 2,1 | 0,43 → 1,61 | +19% | 0,18 |
> | 4405 | ADX + VWAP + BB explosão + Pôr do sol + Pullback | **+140% · −57,9%** | +39% · −12,1% | +26% | −6,3% | 2,1 | 1,09 → 1,28 | +16% | 0,06 |
> | 4406 | Donchian + BB explosão + 1ª vela 80 + Bollinger + Onda ⚠️ | **+265% · −52,4%** | +55% · −9,8% | +32% | −9,0% | 2,1 | 0,96 → 1,60 | +24% | 0,26 |
> | 4407 | ADX + Donchian + BB explosão + MACD + Bollinger | **+275% · −65,4%** | +59% · −15,1% | +33% | −6,8% | 3,0 | 1,11 → 1,58 | +23% | 0,36 |
> | 4408 | GPS médias + 1ª vela 80 ⚠️ | **+111% · −31,7%** | +59% · −16,3% | +35% | −12,2% | 1,8 | 1,28 → 1,33 | +24% | 0,23 |
> | 4409 | ADX + VWAP + GPS médias + MACD | **+167% · −51,5%** | +53% · −13,8% | +32% | −11,9% | 1,6 | 0,95 → 1,30 | +23% | 0,31 |
> | 4410 | ADX + BB explosão + 1ª vela 80 + Quinta ⚠️ | **+148% · −48,6%** | +46% · −12,0% | +29% | −5,1% | 3,1 | 0,90 → 1,64 | +20% | 0,03 |

> [!example]- Combinações 4411 a 4440 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4411 | ADX + VWAP + GPS médias + Rompe 200 | **+144% · −50,0%** | +47% · −13,3% | +28% | −9,7% | 1,6 | 1,08 → 1,16 | +20% | 0,22 |
> | 4412 | ADX + Donchian + BB explosão + MACD + Rompe 200 | **+207% · −63,8%** | +52% · −15,2% | +31% | −6,9% | 2,7 | 1,07 → 1,43 | +21% | 0,27 |
> | 4413 | ADX + VWAP + Donchian + Pôr do sol + 1ª vela 80 ⚠️ | **+228% · −52,3%** | +50% · −7,9% | +30% | −6,7% | 2,6 | 1,03 → 1,60 | +17% | 0,13 |
> | 4414 | BB explosão + GPS médias + MACD + Tendência + Onda | **+201% · −63,5%** | +54% · −14,5% | +35% | −10,1% | 2,2 | 1,07 → 1,30 | +28% | 0,37 |
> | 4415 | Donchian + BB explosão + MACD + 1ª vela 80 + Onda ⚠️ | **+219% · −55,9%** | +52% · −10,0% | +33% | −11,3% | 1,8 | 0,84 → 1,50 | +25% | 0,31 |
> | 4416 | VWAP + BB explosão + Pullback + Bollinger + Onda | **+157% · −46,5%** | +40% · −9,8% | +26% | −11,7% | 1,2 | 0,91 → 1,23 | +21% | 0,23 |
> | 4417 | 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+90% · −25,0%** | +37% · −7,4% | +27% | −10,2% | 1,4 | 0,52 → 1,47 | +13% | 0,20 |
> | 4418 | BB explosão + GPS médias + MACD + Pôr do sol + Bollinger | **+192% · −49,3%** | +45% · −10,4% | +27% | −9,3% | 1,6 | 1,24 → 1,32 | +21% | 0,16 |
> | 4419 | VWAP + Donchian + BB explosão + IFR | **+173% · −54,6%** | +54% · −15,4% | +33% | −11,9% | 1,7 | 1,15 → 1,24 | +15% | 0,44 |
> | 4420 | VWAP + Pullback + Onda | **+75% · −27,8%** | +34% · −9,0% | +26% | −14,4% | 0,9 | 0,72 → 1,05 | +17% | 0,21 |
> | 4421 | VWAP + BB explosão + GPS médias + Pullback + Bollinger | **+179% · −54,5%** | +45% · −12,0% | +27% | −10,8% | 1,4 | 1,42 → 1,06 | +14% | 0,25 |
> | 4422 | VWAP + BB explosão + MACD + 1ª vela 80 ⚠️ | **+119% · −47,2%** | +40% · −13,2% | +28% | −16,7% | 0,9 | 0,75 → 1,25 | +21% | 0,34 |
> | 4423 | VWAP + BB explosão + GPS médias + Pullback + Rompe 200 | **+127% · −58,6%** | +38% · −13,7% | +26% | −11,2% | 1,1 | 1,37 → 0,86 | +12% | 0,21 |
> | 4424 | ADX + VWAP + BB explosão + GPS médias + Tendência | **+194% · −75,3%** | +57% · −20,4% | +34% | −8,8% | 2,4 | 1,22 → 1,24 | +19% | 0,39 |
> | 4425 | VWAP + BB explosão + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+126% · −46,0%** | +36% · −10,2% | +26% | −12,8% | 1,0 | 0,58 → 1,32 | +18% | 0,14 |
> | 4426 | Donchian + BB explosão + Quinta + Bollinger + Onda ⚠️ | **+214% · −47,1%** | +48% · −9,1% | +29% | −7,5% | 2,1 | 1,01 → 1,47 | +23% | 0,11 |
> | 4427 | VWAP + Donchian + BB explosão + Bollinger + Tendência | **+239% · −67,2%** | +55% · −16,1% | +33% | −8,9% | 2,2 | 1,34 → 1,24 | +15% | 0,43 |
> | 4428 | VWAP + BB explosão + GPS médias + Bollinger + Tendência | **+213% · −64,8%** | +53% · −15,3% | +32% | −10,4% | 1,8 | 1,37 → 1,15 | +16% | 0,41 |
> | 4429 | BB explosão + GPS médias + MACD + Tendência | **+180% · −62,7%** | +56% · −18,6% | +36% | −10,2% | 2,3 | 1,34 → 1,21 | +21% | 0,44 |
> | 4430 | BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+87% · −36,1%** | +37% · −12,6% | +25% | −9,0% | 1,4 | 0,98 → 1,29 | +17% | 0,14 |
> | 4431 | VWAP + BB explosão + MACD + Bollinger + Tendência | **+199% · −60,2%** | +47% · −13,6% | +31% | −11,0% | 1,6 | 1,15 → 1,25 | +19% | 0,43 |
> | 4432 | VWAP + Donchian + BB explosão + GPS médias + Pôr do sol | **+159% · −61,7%** | +48% · −14,6% | +28% | −11,6% | 1,3 | 1,19 → 1,03 | +15% | 0,22 |
> | 4433 | VWAP + BB explosão + Quinta + Tendência ⚠️ | **+114% · −58,8%** | +39% · −15,9% | +28% | −8,5% | 1,8 | 1,21 → 1,05 | +13% | 0,14 |
> | 4434 | ADX + Donchian + BB explosão + Rompe 200 + Onda | **+198% · −61,5%** | +52% · −14,1% | +31% | −7,6% | 2,4 | 0,88 → 1,43 | +25% | 0,24 |
> | 4435 | VWAP + Rompe 200 + Onda | **+61% · −30,9%** | +30% · −10,4% | +23% | −16,3% | 0,6 | 0,44 → 0,95 | +19% | 0,23 |
> | 4436 | VWAP + Quinta + Onda ⚠️ | **+60% · −26,9%** | +29% · −8,8% | +23% | −13,9% | 0,8 | 0,40 → 1,06 | +16% | −0,08 |
> | 4437 | ADX + 1ª vela 80 + Onda ⚠️ | **+144% · −40,7%** | +55% · −13,8% | +34% | −8,6% | 2,5 | 0,46 → 1,73 | +15% | 0,16 |
> | 4438 | ADX + VWAP + GPS médias + Pôr do sol + Onda | **+173% · −51,6%** | +46% · −10,8% | +29% | −9,5% | 1,7 | 0,78 → 1,35 | +21% | 0,11 |
> | 4439 | Donchian + BB explosão + Pôr do sol + Quinta ⚠️ | **+127% · −42,0%** | +40% · −10,1% | +25% | −4,6% | 2,8 | 1,33 → 1,26 | +15% | 0,01 |
> | 4440 | VWAP + BB explosão + MACD + Pôr do sol + Rompe 200 | **+95% · −43,8%** | +30% · −8,8% | +23% | −11,6% | 0,9 | 0,82 → 1,02 | +16% | 0,13 |

> [!example]- Combinações 4441 a 4470 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4441 | ADX + Donchian + MACD | **+187% · −45,9%** | +67% · −15,4% | +37% | −7,6% | 3,3 | 1,01 → 1,59 | +23% | 0,30 |
> | 4442 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+145% · −56,2%** | +41% · −13,1% | +27% | −12,4% | 1,1 | 1,12 → 1,14 | +18% | 0,11 |
> | 4443 | BB explosão + MACD + Pôr do sol + Bollinger + Onda | **+169% · −40,7%** | +40% · −7,6% | +27% | −8,5% | 1,6 | 0,69 → 1,53 | +17% | 0,13 |
> | 4444 | VWAP + BB explosão + IFR + Bollinger | **+166% · −41,1%** | +47% · −11,0% | +29% | −10,8% | 1,5 | 1,12 → 1,35 | +17% | 0,35 |
> | 4445 | ADX + BB explosão + MACD + Pôr do sol | **+137% · −55,2%** | +44% · −14,9% | +28% | −6,4% | 2,4 | 0,78 → 1,52 | +22% | 0,08 |
> | 4446 | BB explosão + GPS médias + Pullback + Rompe 200 + Onda | **+150% · −53,0%** | +42% · −11,5% | +28% | −9,4% | 1,6 | 1,17 → 1,12 | +21% | 0,19 |
> | 4447 | Donchian + BB explosão + GPS médias + Rompe 200 + Bollinger | **+229% · −56,7%** | +54% · −12,4% | +30% | −8,6% | 1,9 | 1,47 → 1,19 | +15% | 0,33 |
> | 4448 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+143% · −46,3%** | +45% · −12,6% | +28% | −9,0% | 1,7 | 1,21 → 1,29 | +21% | 0,08 |
> | 4449 | ADX + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+151% · −47,5%** | +46% · −11,5% | +29% | −4,8% | 3,3 | 0,83 → 1,68 | +20% | 0,06 |
> | 4450 | BB explosão + MACD + Quinta + Bollinger ⚠️ | **+129% · −35,4%** | +39% · −8,0% | +25% | −7,7% | 1,6 | 1,09 → 1,43 | +20% | 0,12 |
> | 4451 | Donchian + BB explosão + IFR + Onda | **+204% · −47,9%** | +59% · −12,4% | +36% | −9,1% | 2,5 | 0,99 → 1,48 | +27% | 0,38 |
> | 4452 | VWAP + Donchian + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+172% · −51,4%** | +44% · −11,6% | +28% | −11,1% | 1,4 | 1,06 → 1,29 | +18% | 0,17 |
> | 4453 | ADX + BB explosão + GPS médias + MACD | **+168% · −63,0%** | +57% · −18,8% | +33% | −9,7% | 2,1 | 1,01 → 1,34 | +24% | 0,36 |
> | 4454 | BB explosão + GPS médias + IFR | **+149% · −49,8%** | +59% · −18,2% | +35% | −11,1% | 2,0 | 1,35 → 1,25 | +18% | 0,48 |
> | 4455 | Donchian + BB explosão + MACD + Tendência + Onda | **+227% · −65,0%** | +56% · −15,5% | +36% | −9,6% | 2,4 | 1,05 → 1,38 | +27% | 0,44 |
> | 4456 | ADX + BB explosão + GPS médias + Bollinger + Onda | **+228% · −61,3%** | +57% · −14,1% | +32% | −8,4% | 2,3 | 0,91 → 1,46 | +23% | 0,31 |
> | 4457 | ADX + Donchian + BB explosão + GPS médias + Rompe 200 | **+208% · −68,4%** | +58% · −17,6% | +32% | −7,1% | 2,7 | 1,28 → 1,28 | +18% | 0,33 |
> | 4458 | ADX + VWAP + BB explosão + MACD + Bollinger | **+192% · −63,2%** | +47% · −14,4% | +29% | −10,0% | 1,6 | 0,82 → 1,41 | +20% | 0,38 |
> | 4459 | ADX + VWAP + GPS médias + Pôr do sol | **+147% · −45,7%** | +47% · −11,5% | +28% | −8,0% | 1,9 | 1,03 → 1,26 | +20% | 0,09 |
> | 4460 | VWAP + BB explosão + GPS médias + Quinta + Tendência ⚠️ | **+159% · −64,4%** | +45% · −15,8% | +30% | −9,3% | 1,8 | 1,35 → 1,05 | +15% | 0,19 |
> | 4461 | Donchian + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+167% · −47,2%** | +49% · −13,0% | +30% | −8,2% | 2,0 | 1,26 → 1,37 | +17% | 0,24 |
> | 4462 | BB explosão + MACD + Pôr do sol + Rompe 200 | **+87% · −34,5%** | +31% · −7,8% | +23% | −7,6% | 1,3 | 0,93 → 1,19 | +18% | 0,03 |
> | 4463 | ADX + VWAP + BB explosão + Pôr do sol + Bollinger | **+171% · −57,5%** | +43% · −12,1% | +26% | −7,0% | 1,9 | 0,88 → 1,41 | +17% | 0,19 |
> | 4464 | BB explosão + GPS médias + 1ª vela 80 + Quinta + Onda ⚠️ | **+168% · −51,2%** | +44% · −11,1% | +29% | −9,6% | 1,7 | 0,93 → 1,36 | +19% | 0,05 |
> | 4465 | BB explosão + GPS médias + Bollinger + Tendência + Onda | **+245% · −60,0%** | +56% · −13,3% | +34% | −8,3% | 2,5 | 1,20 → 1,36 | +26% | 0,34 |
> | 4466 | BB explosão + GPS médias + 1ª vela 80 + Tendência + Onda ⚠️ | **+226% · −58,1%** | +55% · −12,6% | +35% | −9,1% | 2,5 | 1,13 → 1,40 | +26% | 0,29 |
> | 4467 | Donchian + Pôr do sol + 1ª vela 80 ⚠️ | **+146% · −32,1%** | +51% · −9,4% | +30% | −5,0% | 3,5 | 1,36 → 1,73 | +23% | 0,02 |
> | 4468 | ADX + VWAP + MACD + Onda | **+140% · −47,1%** | +46% · −11,0% | +31% | −12,5% | 1,4 | 0,47 → 1,42 | +18% | 0,28 |
> | 4469 | VWAP + BB explosão + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+147% · −55,0%** | +41% · −12,6% | +27% | −12,5% | 1,1 | 1,08 → 1,16 | +19% | 0,15 |
> | 4470 | ADX + VWAP + BB explosão + GPS médias + Bollinger | **+200% · −65,3%** | +53% · −15,4% | +30% | −9,8% | 1,7 | 1,07 → 1,27 | +19% | 0,40 |

> [!example]- Combinações 4471 a 4500 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4471 | VWAP + GPS médias + 1ª vela 80 ⚠️ | **+122% · −42,4%** | +48% · −15,1% | +30% | −17,0% | 1,0 | 1,09 → 1,16 | +23% | 0,29 |
> | 4472 | ADX + VWAP + BB explosão + Tendência + Onda | **+181% · −70,9%** | +51% · −17,9% | +33% | −9,6% | 2,1 | 0,85 → 1,35 | +26% | 0,32 |
> | 4473 | BB explosão + GPS médias + MACD + Rompe 200 + Bollinger | **+188% · −50,7%** | +45% · −11,0% | +28% | −10,1% | 1,5 | 1,27 → 1,22 | +19% | 0,28 |
> | 4474 | ADX + Donchian + BB explosão + MACD + Onda | **+217% · −66,7%** | +57% · −15,5% | +34% | −8,7% | 2,4 | 0,80 → 1,50 | +27% | 0,32 |
> | 4475 | BB explosão + Quinta + Rompe 200 + Bollinger ⚠️ | **+103% · −32,3%** | +33% · −7,2% | +22% | −5,4% | 1,6 | 1,38 → 1,21 | +13% | 0,07 |
> | 4476 | VWAP + BB explosão + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+124% · −49,5%** | +36% · −11,2% | +26% | −14,1% | 0,9 | 0,64 → 1,23 | +19% | 0,24 |
> | 4477 | ADX + VWAP + Donchian + Rompe 200 | **+166% · −46,8%** | +50% · −12,1% | +30% | −8,0% | 2,1 | 1,05 → 1,28 | +18% | 0,20 |
> | 4478 | BB explosão + GPS médias + Bollinger + Tendência | **+217% · −59,3%** | +60% · −16,6% | +34% | −7,2% | 3,0 | 1,56 → 1,27 | +18% | 0,41 |
> | 4479 | VWAP + BB explosão + Pullback + Bollinger | **+124% · −42,0%** | +39% · −10,3% | +25% | −10,6% | 1,1 | 1,28 → 1,06 | +12% | 0,23 |
> | 4480 | ADX + BB explosão + GPS médias + MACD + Onda | **+187% · −64,6%** | +54% · −14,6% | +33% | −10,2% | 2,0 | 0,81 → 1,41 | +24% | 0,29 |
> | 4481 | BB explosão + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+141% · −50,1%** | +45% · −13,8% | +28% | −10,1% | 1,5 | 1,25 → 1,18 | +18% | 0,25 |
> | 4482 | VWAP + BB explosão + MACD + 1ª vela 80 + Onda ⚠️ | **+145% · −51,7%** | +40% · −12,0% | +29% | −15,6% | 1,0 | 0,58 → 1,34 | +19% | 0,32 |
> | 4483 | BB explosão + GPS médias + IFR + Onda | **+176% · −50,7%** | +55% · −13,7% | +34% | −11,2% | 1,9 | 1,00 → 1,35 | +28% | 0,35 |
> | 4484 | ADX + VWAP + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+211% · −56,8%** | +49% · −11,8% | +29% | −9,0% | 1,8 | 0,88 → 1,55 | +21% | 0,32 |
> | 4485 | ADX + Donchian + BB explosão + GPS médias + MACD | **+226% · −71,0%** | +62% · −18,0% | +35% | −9,2% | 2,4 | 1,16 → 1,37 | +23% | 0,40 |
> | 4486 | VWAP + BB explosão + MACD + Pullback | **+101% · −46,9%** | +36% · −12,5% | +26% | −13,3% | 1,0 | 1,05 → 1,04 | +15% | 0,21 |
> | 4487 | BB explosão + GPS médias + MACD + 1ª vela 80 ⚠️ | **+164% · −48,7%** | +51% · −13,5% | +32% | −13,4% | 1,4 | 1,10 → 1,31 | +23% | 0,30 |
> | 4488 | Donchian + BB explosão + Quinta + Rompe 200 + Onda ⚠️ | **+154% · −48,5%** | +41% · −8,9% | +27% | −8,2% | 1,7 | 0,97 → 1,26 | +21% | 0,10 |
> | 4489 | ADX + Donchian + Quinta ⚠️ | **+160% · −39,0%** | +58% · −12,2% | +32% | −5,7% | 3,5 | 1,22 → 1,62 | +19% | 0,03 |
> | 4490 | ADX + BB explosão + GPS médias + 1ª vela 80 + Quinta ⚠️ | **+198% · −57,5%** | +51% · −13,2% | +30% | −6,5% | 2,7 | 1,16 → 1,48 | +23% | 0,12 |
> | 4491 | BB explosão + GPS médias + Pôr do sol + Rompe 200 + Bollinger | **+165% · −48,2%** | +41% · −10,0% | +25% | −7,0% | 1,7 | 1,44 → 1,16 | +16% | 0,11 |
> | 4492 | ADX + VWAP + Pôr do sol + Rompe 200 | **+99% · −37,1%** | +35% · −7,9% | +23% | −6,8% | 1,6 | 0,78 → 1,24 | +14% | 0,03 |
> | 4493 | ADX + Donchian + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+236% · −56,8%** | +54% · −12,2% | +31% | −4,9% | 3,8 | 1,11 → 1,66 | +23% | 0,12 |
> | 4494 | BB explosão + GPS médias + Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+171% · −51,8%** | +45% · −11,3% | +29% | −9,5% | 1,7 | 0,89 → 1,38 | +19% | 0,11 |
> | 4495 | ADX + VWAP + Donchian + BB explosão + Pullback | **+196% · −68,6%** | +52% · −16,7% | +31% | −7,7% | 2,3 | 1,21 → 1,29 | +16% | 0,25 |
> | 4496 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+213% · −58,1%** | +53% · −13,5% | +31% | −9,6% | 1,9 | 1,37 → 1,27 | +18% | 0,30 |
> | 4497 | VWAP + GPS médias + 1ª vela 80 + Onda ⚠️ | **+151% · −46,0%** | +47% · −12,7% | +31% | −15,8% | 1,1 | 0,78 → 1,28 | +23% | 0,28 |
> | 4498 | VWAP + BB explosão + GPS médias + IFR + Onda | **+172% · −57,8%** | +49% · −13,0% | +32% | −12,8% | 1,5 | 0,93 → 1,24 | +25% | 0,34 |
> | 4499 | VWAP + Donchian + BB explosão + Pôr do sol + Quinta ⚠️ | **+131% · −51,2%** | +37% · −9,8% | +25% | −8,4% | 1,4 | 1,11 → 1,08 | +14% | 0,07 |
> | 4500 | BB explosão + Pôr do sol + Quinta + Onda ⚠️ | **+84% · −33,1%** | +31% · −7,2% | +23% | −7,1% | 1,4 | 0,59 → 1,29 | +16% | −0,09 |

> [!example]- Combinações 4501 a 4530 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4501 | BB explosão + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+195% · −51,8%** | +54% · −14,9% | +31% | −10,2% | 1,7 | 1,30 → 1,39 | +21% | 0,31 |
> | 4502 | BB explosão + Rompe 200 + Tendência + Onda | **+138% · −51,4%** | +44% · −13,7% | +31% | −9,4% | 1,9 | 1,00 → 1,24 | +23% | 0,27 |
> | 4503 | VWAP + Pôr do sol + Onda | **+61% · −29,3%** | +29% · −8,9% | +23% | −14,1% | 0,7 | 0,33 → 1,09 | +14% | 0,07 |
> | 4504 | VWAP + BB explosão + GPS médias + MACD + 1ª vela 80 ⚠️ | **+164% · −57,8%** | +46% · −14,1% | +30% | −16,1% | 1,1 | 1,00 → 1,20 | +22% | 0,35 |
> | 4505 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+144% · −59,4%** | +41% · −14,5% | +27% | −13,4% | 1,1 | 1,11 → 1,08 | +17% | 0,28 |
> | 4506 | Donchian + BB explosão + MACD + Pôr do sol + Onda | **+178% · −49,9%** | +46% · −9,3% | +30% | −8,9% | 1,9 | 0,82 → 1,39 | +26% | 0,18 |
> | 4507 | ADX + VWAP + Pullback + Onda | **+137% · −43,3%** | +44% · −9,5% | +29% | −9,1% | 1,8 | 0,75 → 1,37 | +16% | 0,15 |
> | 4508 | ADX + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+149% · −48,2%** | +46% · −12,2% | +29% | −5,9% | 2,7 | 0,90 → 1,56 | +21% | 0,15 |
> | 4509 | VWAP + BB explosão + 1ª vela 80 + Bollinger + Onda ⚠️ | **+177% · −49,6%** | +43% · −11,4% | +28% | −13,6% | 1,1 | 0,67 → 1,41 | +18% | 0,31 |
> | 4510 | ADX + BB explosão + GPS médias + Pôr do sol + 1ª vela 80 ⚠️ | **+201% · −58,0%** | +51% · −13,4% | +30% | −6,5% | 2,7 | 1,11 → 1,50 | +24% | 0,13 |
> | 4511 | ADX + VWAP + GPS médias + 1ª vela 80 ⚠️ | **+183% · −53,1%** | +55% · −14,8% | +33% | −10,7% | 1,8 | 1,00 → 1,42 | +24% | 0,28 |
> | 4512 | ADX + Donchian + BB explosão + Bollinger + Onda | **+265% · −63,6%** | +60% · −14,0% | +33% | −7,0% | 2,9 | 0,90 → 1,59 | +26% | 0,29 |
> | 4513 | Donchian + BB explosão + Rompe 200 + Tendência | **+182% · −64,9%** | +54% · −18,0% | +33% | −7,7% | 2,7 | 1,49 → 1,19 | +13% | 0,40 |
> | 4514 | ADX + VWAP + BB explosão + MACD + Rompe 200 | **+138% · −60,8%** | +41% · −13,9% | +27% | −10,4% | 1,4 | 0,79 → 1,25 | +19% | 0,24 |
> | 4515 | BB explosão + GPS médias + Pullback + Bollinger + Onda | **+209% · −54,8%** | +48% · −12,1% | +29% | −8,7% | 1,9 | 1,20 → 1,32 | +23% | 0,19 |
> | 4516 | Donchian + BB explosão + Pullback | **+135% · −48,6%** | +52% · −17,2% | +31% | −6,1% | 3,0 | 1,53 → 1,18 | +11% | 0,23 |
> | 4517 | BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+133% · −35,1%** | +48% · −11,9% | +28% | −9,0% | 1,7 | 1,07 → 1,61 | +16% | 0,24 |
> | 4518 | BB explosão + GPS médias + 1ª vela 80 + Tendência ⚠️ | **+203% · −57,2%** | +59% · −15,8% | +36% | −8,5% | 2,8 | 1,45 → 1,33 | +21% | 0,31 |
> | 4519 | Donchian + BB explosão + GPS médias + MACD + 1ª vela 80 ⚠️ | **+234% · −60,0%** | +57% · −12,8% | +34% | −12,0% | 1,8 | 1,24 → 1,35 | +23% | 0,36 |
> | 4520 | BB explosão + 1ª vela 80 + Bollinger + Onda ⚠️ | **+171% · −40,8%** | +47% · −10,4% | +29% | −10,2% | 1,6 | 0,69 → 1,61 | +14% | 0,23 |
> | 4521 | BB explosão + GPS médias + Pôr do sol + Quinta ⚠️ | **+106% · −42,7%** | +37% · −10,6% | +24% | −6,7% | 1,7 | 1,34 → 1,02 | +16% | −0,02 |
> | 4522 | ADX + VWAP + GPS médias + MACD + Onda | **+190% · −54,0%** | +51% · −11,6% | +32% | −12,2% | 1,6 | 0,75 → 1,37 | +24% | 0,28 |
> | 4523 | VWAP + BB explosão + Rompe 200 + Tendência + Onda | **+138% · −57,6%** | +40% · −12,7% | +29% | −11,5% | 1,4 | 0,92 → 1,13 | +20% | 0,29 |
> | 4524 | ADX + VWAP + MACD + Pôr do sol | **+123% · −40,9%** | +40% · −9,0% | +27% | −8,2% | 1,7 | 0,66 → 1,42 | +14% | 0,12 |
> | 4525 | ADX + VWAP + GPS médias + 1ª vela 80 + Onda ⚠️ | **+208% · −59,0%** | +52% · −13,7% | +32% | −11,4% | 1,7 | 0,79 → 1,46 | +25% | 0,25 |
> | 4526 | ADX + Pôr do sol + Quinta ⚠️ | **+84% · −29,4%** | +36% · −9,6% | +24% | −6,0% | 1,8 | 0,80 → 1,64 | +13% | 0,08 |
> | 4527 | BB explosão + MACD + Rompe 200 + Bollinger + Onda | **+167% · −42,4%** | +40% · −8,5% | +27% | −9,9% | 1,4 | 0,75 → 1,42 | +18% | 0,22 |
> | 4528 | ADX + BB explosão + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+261% · −60,7%** | +58% · −14,7% | +32% | −7,3% | 2,7 | 1,18 → 1,57 | +24% | 0,32 |
> | 4529 | ADX + BB explosão + GPS médias + Quinta ⚠️ | **+148% · −59,0%** | +51% · −17,1% | +30% | −5,9% | 2,8 | 1,15 → 1,27 | +19% | 0,17 |
> | 4530 | ADX + BB explosão + GPS médias + 1ª vela 80 + Rompe 200 ⚠️ | **+197% · −58,9%** | +51% · −13,7% | +30% | −7,4% | 2,4 | 1,14 → 1,42 | +22% | 0,24 |

> [!example]- Combinações 4531 a 4560 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4531 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Bollinger ⚠️ | **+198% · −57,7%** | +48% · −13,8% | +29% | −13,5% | 1,2 | 1,15 → 1,25 | +19% | 0,35 |
> | 4532 | ADX + BB explosão + Bollinger | **+149% · −54,3%** | +56% · −20,0% | +30% | −6,4% | 2,8 | 0,89 → 1,55 | +21% | 0,39 |
> | 4533 | ADX + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+206% · −50,5%** | +55% · −12,6% | +31% | −5,6% | 3,3 | 0,95 → 1,76 | +20% | 0,28 |
> | 4534 | BB explosão + GPS médias + 1ª vela 80 + Bollinger + Onda ⚠️ | **+228% · −56,0%** | +52% · −13,1% | +31% | −10,4% | 1,7 | 0,97 → 1,46 | +19% | 0,27 |
> | 4535 | ADX + BB explosão + 1ª vela 80 + Bollinger + Onda ⚠️ | **+242% · −54,0%** | +53% · −11,9% | +31% | −7,1% | 2,6 | 0,71 → 1,74 | +17% | 0,24 |
> | 4536 | VWAP + BB explosão + Pôr do sol + Quinta + Onda ⚠️ | **+92% · −40,2%** | +30% · −8,4% | +23% | −10,6% | 0,9 | 0,58 → 1,12 | +19% | 0,00 |
> | 4537 | Donchian + BB explosão + MACD + Rompe 200 + Bollinger | **+217% · −49,2%** | +48% · −9,7% | +29% | −8,6% | 1,8 | 1,25 → 1,36 | +18% | 0,30 |
> | 4538 | VWAP + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+144% · −44,7%** | +43% · −12,3% | +27% | −13,5% | 1,0 | 0,92 → 1,34 | +18% | 0,34 |
> | 4539 | Donchian + BB explosão + GPS médias + MACD + Rompe 200 | **+189% · −61,0%** | +51% · −14,4% | +31% | −10,9% | 1,6 | 1,28 → 1,15 | +18% | 0,36 |
> | 4540 | ADX + BB explosão + MACD + 1ª vela 80 ⚠️ | **+174% · −54,6%** | +52% · −14,3% | +33% | −8,2% | 2,4 | 0,80 → 1,63 | +21% | 0,23 |
> | 4541 | Bollinger + Onda | **+88% · −18,0%** | +48% · −8,5% | +29% | −10,0% | 1,6 | 0,42 → 1,58 | +12% | 0,17 |
> | 4542 | ADX + VWAP + BB explosão + GPS médias + Pullback | **+169% · −66,8%** | +49% · −16,8% | +30% | −9,1% | 1,9 | 1,23 → 1,18 | +17% | 0,24 |
> | 4543 | ADX + Pôr do sol + Pullback | **+104% · −32,9%** | +42% · −9,7% | +27% | −6,0% | 2,4 | 1,32 → 1,61 | +15% | −0,06 |
> | 4544 | VWAP + BB explosão + 1ª vela 80 ⚠️ | **+87% · −44,0%** | +39% · −16,1% | +27% | −16,8% | 0,8 | 0,74 → 1,13 | +17% | 0,31 |
> | 4545 | ADX + BB explosão + GPS médias + MACD + 1ª vela 80 ⚠️ | **+220% · −61,2%** | +56% · −14,1% | +33% | −9,5% | 2,2 | 1,04 → 1,49 | +25% | 0,29 |
> | 4546 | VWAP + GPS médias | **+78% · −33,3%** | +47% · −17,4% | +29% | −20,0% | 0,8 | 1,08 → 0,77 | +16% | 0,29 |
> | 4547 | BB explosão + Bollinger + Tendência + Onda | **+194% · −51,0%** | +53% · −13,4% | +33% | −8,9% | 2,3 | 1,04 → 1,45 | +25% | 0,31 |
> | 4548 | ADX + VWAP + Quinta + Onda ⚠️ | **+117% · −39,6%** | +40% · −8,3% | +27% | −8,7% | 1,6 | 0,50 → 1,39 | +15% | 0,02 |
> | 4549 | VWAP + BB explosão + Pôr do sol + Tendência | **+116% · −55,0%** | +40% · −15,2% | +28% | −8,6% | 1,8 | 1,16 → 1,07 | +14% | 0,18 |
> | 4550 | Donchian + BB explosão + Pôr do sol + Bollinger + Onda | **+217% · −47,9%** | +48% · −9,5% | +29% | −7,4% | 2,1 | 0,96 → 1,49 | +24% | 0,12 |
> | 4551 | BB explosão + Rompe 200 + Tendência | **+108% · −52,1%** | +44% · −18,8% | +30% | −8,9% | 2,0 | 1,42 → 1,09 | +12% | 0,29 |
> | 4552 | VWAP + BB explosão + MACD + Quinta + Bollinger ⚠️ | **+139% · −45,0%** | +36% · −9,6% | +25% | −11,5% | 1,0 | 0,93 → 1,21 | +18% | 0,20 |
> | 4553 | VWAP + BB explosão + Bollinger + Tendência + Onda | **+194% · −57,4%** | +47% · −12,4% | +31% | −11,0% | 1,6 | 0,94 → 1,29 | +23% | 0,36 |
> | 4554 | ADX + VWAP + Quinta + Pullback ⚠️ | **+116% · −38,3%** | +38% · −8,3% | +26% | −5,1% | 2,6 | 1,20 → 1,32 | +13% | 0,03 |
> | 4555 | ADX + BB explosão + GPS médias + Pôr do sol | **+150% · −57,7%** | +51% · −16,6% | +30% | −5,9% | 2,8 | 1,10 → 1,30 | +21% | 0,13 |
> | 4556 | Donchian + BB explosão + MACD + Tendência | **+204% · −64,4%** | +60% · −19,7% | +37% | −9,3% | 2,6 | 1,31 → 1,30 | +19% | 0,54 |
> | 4557 | Donchian + BB explosão + GPS médias + Pôr do sol | **+163% · −54,6%** | +53% · −15,3% | +30% | −8,8% | 2,0 | 1,34 → 1,12 | +16% | 0,17 |
> | 4558 | Donchian + BB explosão + Quinta + Bollinger ⚠️ | **+178% · −44,5%** | +49% · −11,0% | +28% | −5,8% | 2,6 | 1,43 → 1,39 | +15% | 0,13 |
> | 4559 | ADX + BB explosão + GPS médias + Quinta + Onda ⚠️ | **+170% · −59,8%** | +49% · −13,9% | +30% | −7,7% | 2,3 | 0,88 → 1,36 | +23% | 0,11 |
> | 4560 | ADX + BB explosão + GPS médias + Bollinger | **+202% · −59,7%** | +60% · −17,1% | +32% | −7,0% | 2,7 | 1,18 → 1,39 | +21% | 0,41 |

> [!example]- Combinações 4561 a 4590 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4561 | ADX + GPS médias + 1ª vela 80 ⚠️ | **+176% · −48,0%** | +65% · −17,4% | +36% | −7,4% | 3,2 | 1,09 → 1,58 | +27% | 0,26 |
> | 4562 | ADX + Donchian + BB explosão + Quinta ⚠️ | **+175% · −60,7%** | +54% · −17,7% | +31% | −5,3% | 3,4 | 1,14 → 1,45 | +18% | 0,15 |
> | 4563 | Donchian + BB explosão + MACD + 1ª vela 80 ⚠️ | **+191% · −49,5%** | +54% · −12,5% | +33% | −11,5% | 1,8 | 1,09 → 1,45 | +23% | 0,34 |
> | 4564 | BB explosão + GPS médias + Quinta + Rompe 200 ⚠️ | **+104% · −47,3%** | +37% · −12,4% | +24% | −7,9% | 1,5 | 1,37 → 0,90 | +13% | 0,11 |
> | 4565 | ADX + BB explosão + Tendência | **+160% · −65,0%** | +63% · −26,7% | +38% | −10,5% | 2,4 | 1,20 → 1,43 | +20% | 0,40 |
> | 4566 | VWAP + Donchian + BB explosão + Rompe 200 + Tendência | **+177% · −73,0%** | +48% · −16,3% | +31% | −9,1% | 2,0 | 1,30 → 1,08 | +13% | 0,38 |
> | 4567 | BB explosão + MACD + Pôr do sol + Bollinger | **+132% · −35,7%** | +39% · −8,3% | +25% | −7,8% | 1,6 | 1,00 → 1,48 | +19% | 0,11 |
> | 4568 | ADX + GPS médias + 1ª vela 80 + Onda ⚠️ | **+207% · −54,4%** | +59% · −15,3% | +35% | −8,3% | 2,7 | 0,82 → 1,60 | +21% | 0,22 |
> | 4569 | ADX + VWAP + BB explosão + Tendência | **+160% · −69,7%** | +53% · −22,4% | +34% | −9,3% | 2,2 | 1,06 → 1,28 | +18% | 0,38 |
> | 4570 | VWAP + BB explosão + GPS médias + Rompe 200 + Tendência | **+156% · −68,7%** | +46% · −16,9% | +30% | −10,5% | 1,6 | 1,33 → 1,00 | +14% | 0,34 |
> | 4571 | BB explosão + MACD + Tendência + Onda | **+160% · −55,3%** | +49% · −15,3% | +34% | −11,0% | 2,0 | 0,89 → 1,35 | +26% | 0,38 |
> | 4572 | VWAP + BB explosão + GPS médias + Pôr do sol + Quinta ⚠️ | **+111% · −51,4%** | +35% · −10,8% | +24% | −9,9% | 1,1 | 1,15 → 0,93 | +15% | 0,04 |
> | 4573 | Donchian + BB explosão + MACD + Quinta + Onda ⚠️ | **+176% · −51,0%** | +45% · −9,8% | +30% | −9,0% | 1,9 | 0,86 → 1,37 | +26% | 0,15 |
> | 4574 | GPS médias + 1ª vela 80 + Onda ⚠️ | **+144% · −39,8%** | +54% · −13,7% | +34% | −12,8% | 1,6 | 0,83 → 1,42 | +18% | 0,23 |
> | 4575 | ADX + VWAP + Donchian + BB explosão + Tendência | **+220% · −76,0%** | +59% · −21,2% | +35% | −8,4% | 2,7 | 1,19 → 1,32 | +18% | 0,42 |
> | 4576 | ADX + VWAP + Donchian + GPS médias | **+206% · −57,9%** | +63% · −16,6% | +35% | −10,1% | 2,2 | 1,17 → 1,28 | +22% | 0,33 |
> | 4577 | ADX + VWAP + BB explosão + 1ª vela 80 + Pullback ⚠️ | **+178% · −57,1%** | +45% · −12,1% | +29% | −8,3% | 2,0 | 1,07 → 1,45 | +19% | 0,15 |
> | 4578 | ADX + BB explosão + GPS médias + Pôr do sol + Onda | **+173% · −58,9%** | +50% · −13,5% | +30% | −7,6% | 2,3 | 0,84 → 1,39 | +23% | 0,11 |
> | 4579 | VWAP + BB explosão + GPS médias + MACD + Tendência | **+174% · −67,8%** | +50% · −17,2% | +33% | −13,0% | 1,5 | 1,20 → 1,12 | +19% | 0,43 |
> | 4580 | ADX + VWAP + Donchian + MACD | **+190% · −53,5%** | +56% · −13,7% | +33% | −10,0% | 2,1 | 0,92 → 1,39 | +18% | 0,34 |
> | 4581 | BB explosão + Quinta + Rompe 200 + Onda ⚠️ | **+83% · −35,6%** | +31% · −8,0% | +23% | −8,9% | 1,2 | 0,68 → 1,15 | +17% | 0,00 |
> | 4582 | VWAP + GPS médias + Onda | **+105% · −39,4%** | +45% · −14,2% | +30% | −18,1% | 0,9 | 0,73 → 1,04 | +27% | 0,28 |
> | 4583 | ADX + Donchian + Pôr do sol | **+163% · −39,8%** | +59% · −11,6% | +32% | −5,3% | 3,7 | 1,14 → 1,66 | +18% | −0,01 |
> | 4584 | Donchian + BB explosão + GPS médias + Quinta ⚠️ | **+160% · −55,6%** | +53% · −15,8% | +30% | −8,8% | 2,0 | 1,40 → 1,10 | +15% | 0,19 |
> | 4585 | ADX + Donchian + BB explosão + Pôr do sol | **+177% · −59,9%** | +54% · −17,1% | +31% | −5,0% | 3,6 | 1,08 → 1,48 | +19% | 0,12 |
> | 4586 | Donchian + BB explosão + 1ª vela 80 + Bollinger ⚠️ | **+228% · −45,6%** | +57% · −10,9% | +32% | −8,3% | 2,3 | 1,31 → 1,59 | +20% | 0,27 |
> | 4587 | BB explosão + GPS médias + Pullback | **+113% · −49,2%** | +48% · −18,1% | +30% | −8,4% | 2,0 | 1,54 → 0,95 | +12% | 0,18 |
> | 4588 | Pôr do sol + 1ª vela 80 ⚠️ | **+56% · −15,1%** | +34% · −6,5% | +24% | −5,0% | 2,4 | 0,73 → 1,68 | +13% | 0,09 |
> | 4589 | BB explosão + GPS médias + Tendência | **+149% · −59,5%** | +61% · −23,3% | +37% | −8,6% | 2,8 | 1,46 → 1,11 | +16% | 0,50 |
> | 4590 | VWAP + BB explosão + Quinta + Rompe 200 + Onda ⚠️ | **+90% · −43,3%** | +30% · −9,4% | +23% | −11,9% | 0,8 | 0,65 → 1,02 | +19% | 0,08 |

> [!example]- Combinações 4591 a 4620 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4591 | VWAP + BB explosão + MACD + Tendência + Onda | **+157% · −61,1%** | +45% · −14,0% | +32% | −13,0% | 1,5 | 0,83 → 1,23 | +26% | 0,40 |
> | 4592 | Donchian + BB explosão + Pôr do sol + Rompe 200 | **+127% · −44,7%** | +41% · −10,8% | +25% | −5,9% | 2,1 | 1,29 → 1,14 | +13% | 0,10 |
> | 4593 | ADX + VWAP + Donchian + Pullback | **+192% · −51,5%** | +54% · −12,1% | +32% | −6,3% | 3,0 | 1,29 → 1,37 | +17% | 0,16 |
> | 4594 | ADX + VWAP + Bollinger | **+134% · −39,0%** | +51% · −12,3% | +29% | −8,9% | 1,8 | 0,77 → 1,45 | +13% | 0,39 |
> | 4595 | VWAP + Bollinger + Onda | **+102% · −31,9%** | +40% · −10,9% | +26% | −15,5% | 0,9 | 0,48 → 1,26 | +18% | 0,34 |
> | 4596 | Donchian + BB explosão + Rompe 200 + Bollinger + Onda | **+212% · −51,8%** | +48% · −10,0% | +29% | −8,9% | 1,8 | 1,01 → 1,38 | +22% | 0,25 |
> | 4597 | Pôr do sol + 1ª vela 80 + Onda ⚠️ | **+90% · −25,4%** | +37% · −7,2% | +27% | −8,3% | 1,7 | 0,41 → 1,64 | +11% | 0,08 |
> | 4598 | Donchian + BB explosão + GPS médias + Bollinger | **+216% · −56,9%** | +62% · −15,9% | +33% | −10,0% | 2,0 | 1,41 → 1,22 | +16% | 0,42 |
> | 4599 | VWAP + Donchian + BB explosão + MACD + Tendência | **+195% · −70,7%** | +52% · −17,5% | +34% | −11,5% | 1,8 | 1,17 → 1,19 | +18% | 0,50 |
> | 4600 | VWAP + Donchian + BB explosão + 1ª vela 80 + Rompe 200 ⚠️ | **+168% · −57,1%** | +44% · −13,8% | +28% | −11,9% | 1,3 | 1,10 → 1,20 | +16% | 0,29 |
> | 4601 | VWAP + Donchian + Onda | **+123% · −35,3%** | +50% · −12,2% | +31% | −16,0% | 1,2 | 0,70 → 1,17 | +20% | 0,36 |
> | 4602 | VWAP + BB explosão + Quinta + Rompe 200 + Bollinger ⚠️ | **+114% · −40,0%** | +32% · −8,2% | +22% | −9,2% | 1,0 | 1,11 → 1,01 | +13% | 0,13 |
> | 4603 | Donchian + BB explosão + Quinta + Rompe 200 ⚠️ | **+125% · −48,3%** | +41% · −11,3% | +26% | −6,1% | 2,1 | 1,37 → 1,11 | +12% | 0,12 |
> | 4604 | VWAP + Donchian + BB explosão + Quinta + Rompe 200 ⚠️ | **+128% · −59,8%** | +38% · −11,7% | +25% | −9,6% | 1,2 | 1,16 → 0,98 | +12% | 0,15 |
> | 4605 | ADX + VWAP + Donchian + Onda | **+182% · −52,2%** | +56% · −12,8% | +33% | −10,4% | 2,0 | 0,73 → 1,41 | +18% | 0,26 |
> | 4606 | BB explosão + GPS médias + Pôr do sol + Quinta + Onda ⚠️ | **+133% · −48,1%** | +38% · −9,6% | +26% | −8,2% | 1,6 | 0,93 → 1,21 | +20% | −0,02 |
> | 4607 | Quinta + Onda ⚠️ | **+48% · −20,0%** | +30% · −8,2% | +24% | −8,6% | 1,3 | 0,30 → 1,27 | +12% | −0,38 |
> | 4608 | VWAP + BB explosão + IFR + Onda | **+133% · −44,5%** | +44% · −11,4% | +30% | −12,8% | 1,4 | 0,71 → 1,29 | +24% | 0,30 |
> | 4609 | BB explosão + Pôr do sol + Rompe 200 + Bollinger | **+105% · −33,7%** | +34% · −7,6% | +22% | −5,2% | 1,7 | 1,27 → 1,28 | +15% | 0,03 |
> | 4610 | VWAP + Donchian + BB explosão + Pullback | **+138% · −59,8%** | +46% · −15,2% | +29% | −11,0% | 1,5 | 1,28 → 1,02 | +11% | 0,28 |
> | 4611 | BB explosão + Pôr do sol + Rompe 200 + Onda | **+85% · −36,8%** | +31% · −7,9% | +23% | −8,8% | 1,2 | 0,61 → 1,18 | +17% | 0,02 |
> | 4612 | VWAP + BB explosão + MACD + Pôr do sol + Bollinger | **+141% · −45,3%** | +36% · −9,7% | +24% | −11,7% | 1,0 | 0,87 → 1,23 | +19% | 0,21 |
> | 4613 | BB explosão + MACD + Tendência | **+131% · −54,6%** | +52% · −20,8% | +35% | −10,9% | 2,1 | 1,19 → 1,25 | +20% | 0,47 |
> | 4614 | ADX + VWAP + BB explosão + Quinta + Onda ⚠️ | **+132% · −59,8%** | +40% · −12,7% | +27% | −9,6% | 1,5 | 0,59 → 1,32 | +19% | 0,10 |
> | 4615 | ADX + VWAP + BB explosão + GPS médias + Quinta ⚠️ | **+148% · −64,9%** | +46% · −16,0% | +28% | −9,1% | 1,7 | 1,05 → 1,17 | +18% | 0,18 |
> | 4616 | ADX + VWAP + BB explosão + GPS médias + Rompe 200 | **+146% · −67,0%** | +46% · −17,0% | +28% | −10,4% | 1,5 | 1,04 → 1,11 | +16% | 0,29 |
> | 4617 | Donchian + BB explosão + GPS médias + Pôr do sol + Onda | **+185% · −58,9%** | +51% · −12,3% | +31% | −9,4% | 1,9 | 1,04 → 1,25 | +24% | 0,17 |
> | 4618 | BB explosão + Pôr do sol + Quinta ⚠️ | **+55% · −27,5%** | +27% · −8,0% | +20% | −3,8% | 1,9 | 1,08 → 1,10 | +14% | −0,09 |
> | 4619 | BB explosão + Bollinger + Tendência | **+158% · −50,5%** | +56% · −18,4% | +34% | −8,1% | 2,6 | 1,49 → 1,36 | +16% | 0,39 |
> | 4620 | ADX + VWAP + BB explosão + Pôr do sol + Quinta ⚠️ | **+120% · −55,8%** | +36% · −11,5% | +24% | −6,3% | 1,8 | 0,83 → 1,28 | +16% | 0,05 |

> [!example]- Combinações 4621 a 4650 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4621 | Donchian + BB explosão + GPS médias + Quinta + Onda ⚠️ | **+183% · −59,7%** | +51% · −12,5% | +31% | −9,5% | 1,9 | 1,08 → 1,23 | +23% | 0,15 |
> | 4622 | VWAP + Donchian + BB explosão + Tendência + Onda | **+187% · −67,0%** | +53% · −16,4% | +34% | −11,3% | 1,9 | 1,00 → 1,22 | +22% | 0,43 |
> | 4623 | ADX + VWAP + Pôr do sol + 1ª vela 80 ⚠️ | **+135% · −38,8%** | +42% · −8,8% | +27% | −7,0% | 2,1 | 0,71 → 1,59 | +14% | 0,11 |
> | 4624 | ADX + Donchian + Onda | **+181% · −44,1%** | +67% · −14,1% | +37% | −7,8% | 3,2 | 0,76 → 1,59 | +23% | 0,19 |
> | 4625 | BB explosão + MACD + Rompe 200 + Bollinger | **+130% · −37,5%** | +39% · −9,0% | +25% | −8,9% | 1,4 | 1,06 → 1,32 | +18% | 0,23 |
> | 4626 | VWAP + BB explosão + Bollinger + Tendência | **+164% · −56,8%** | +48% · −16,0% | +30% | −9,7% | 1,8 | 1,24 → 1,18 | +15% | 0,42 |
> | 4627 | BB explosão + GPS médias + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+167% · −52,8%** | +45% · −11,7% | +29% | −10,9% | 1,5 | 0,93 → 1,30 | +20% | 0,24 |
> | 4628 | ADX + VWAP + BB explosão + Bollinger + Onda | **+185% · −61,3%** | +48% · −13,3% | +29% | −10,5% | 1,5 | 0,63 → 1,42 | +21% | 0,32 |
> | 4629 | BB explosão + GPS médias + MACD + Quinta + Onda ⚠️ | **+151% · −49,9%** | +43% · −10,3% | +29% | −10,5% | 1,5 | 0,88 → 1,26 | +21% | 0,10 |
> | 4630 | ADX + VWAP + Tendência | **+147% · −53,3%** | +57% · −19,2% | +36% | −10,4% | 2,2 | 1,09 → 1,34 | +21% | 0,29 |
> | 4631 | VWAP + Rompe 200 | **+33% · −26,5%** | +23% · −13,5% | +19% | −18,5% | 0,3 | 0,70 → 0,48 | +11% | 0,15 |
> | 4632 | VWAP + Donchian + BB explosão + MACD + 1ª vela 80 ⚠️ | **+189% · −54,5%** | +48% · −12,2% | +31% | −14,6% | 1,2 | 0,98 → 1,30 | +21% | 0,38 |
> | 4633 | Donchian + BB explosão + IFR | **+174% · −46,5%** | +64% · −16,7% | +37% | −8,5% | 2,9 | 1,33 → 1,42 | +17% | 0,52 |
> | 4634 | BB explosão + GPS médias + Tendência + Onda | **+172% · −60,3%** | +56% · −17,4% | +36% | −9,7% | 2,4 | 1,11 → 1,24 | +26% | 0,37 |
> | 4635 | ADX + VWAP + BB explosão + GPS médias + Pôr do sol | **+150% · −64,2%** | +46% · −15,6% | +28% | −9,1% | 1,7 | 1,00 → 1,19 | +19% | 0,17 |
> | 4636 | BB explosão + GPS médias + Quinta + Rompe 200 + Onda ⚠️ | **+130% · −49,3%** | +39% · −10,1% | +26% | −9,6% | 1,4 | 0,98 → 1,11 | +22% | 0,09 |
> | 4637 | ADX + VWAP + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+182% · −63,5%** | +52% · −15,5% | +31% | −11,0% | 1,7 | 0,99 → 1,33 | +22% | 0,32 |
> | 4638 | ADX + BB explosão + GPS médias + Rompe 200 | **+147% · −61,0%** | +51% · −18,4% | +30% | −7,4% | 2,3 | 1,14 → 1,21 | +18% | 0,30 |
> | 4639 | ADX + VWAP + Pôr do sol + Onda | **+119% · −40,7%** | +40% · −8,4% | +27% | −8,9% | 1,6 | 0,44 → 1,41 | +14% | 0,07 |
> | 4640 | ADX + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+185% · −58,7%** | +59% · −17,4% | +34% | −8,4% | 2,5 | 1,07 → 1,44 | +25% | 0,30 |
> | 4641 | ADX + Donchian + BB explosão + GPS médias | **+198% · −68,4%** | +67% · −21,5% | +36% | −8,0% | 2,9 | 1,21 → 1,31 | +20% | 0,45 |
> | 4642 | ADX + VWAP + BB explosão + 1ª vela 80 + Onda ⚠️ | **+166% · −58,8%** | +47% · −13,2% | +30% | −11,8% | 1,5 | 0,59 → 1,46 | +21% | 0,26 |
> | 4643 | Donchian + BB explosão + MACD + Bollinger + Onda | **+238% · −54,3%** | +53% · −10,5% | +32% | −9,8% | 1,9 | 0,90 → 1,47 | +27% | 0,34 |
> | 4644 | VWAP + BB explosão + GPS médias + 1ª vela 80 + Onda ⚠️ | **+155% · −58,1%** | +46% · −13,7% | +30% | −15,2% | 1,1 | 0,81 → 1,22 | +23% | 0,31 |
> | 4645 | Donchian + BB explosão + Pôr do sol + Bollinger | **+180% · −43,2%** | +49% · −10,8% | +28% | −5,8% | 2,6 | 1,35 → 1,43 | +16% | 0,11 |
> | 4646 | VWAP + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+134% · −56,4%** | +46% · −16,5% | +29% | −16,0% | 1,0 | 1,04 → 1,10 | +18% | 0,34 |
> | 4647 | ADX + BB explosão + GPS médias + 1ª vela 80 + Onda ⚠️ | **+206% · −64,0%** | +56% · −15,7% | +33% | −9,2% | 2,2 | 0,85 → 1,49 | +21% | 0,26 |
> | 4648 | Donchian + MACD | **+117% · −27,3%** | +62% · −13,9% | +36% | −11,6% | 2,0 | 1,11 → 1,33 | +27% | 0,54 |
> | 4649 | ADX + VWAP + Pôr do sol + Quinta ⚠️ | **+98% · −37,3%** | +34% · −7,9% | +23% | −4,8% | 2,2 | 0,77 → 1,37 | +11% | 0,03 |
> | 4650 | BB explosão + GPS médias + Pôr do sol + Rompe 200 | **+106% · −46,1%** | +38% · −11,9% | +24% | −7,8% | 1,5 | 1,30 → 0,93 | +14% | 0,08 |

> [!example]- Combinações 4651 a 4680 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4651 | ADX + Donchian + BB explosão + Rompe 200 | **+174% · −60,7%** | +55% · −18,0% | +31% | −5,6% | 3,2 | 1,13 → 1,36 | +17% | 0,27 |
> | 4652 | BB explosão + GPS médias + Quinta + Bollinger ⚠️ | **+151% · −46,8%** | +46% · −12,4% | +26% | −7,9% | 1,7 | 1,43 → 1,15 | +16% | 0,14 |
> | 4653 | ADX + VWAP + Donchian + BB explosão + Quinta ⚠️ | **+173% · −66,0%** | +48% · −15,9% | +29% | −7,7% | 2,1 | 1,02 → 1,29 | +17% | 0,18 |
> | 4654 | ADX + VWAP + BB explosão + Rompe 200 + Onda | **+131% · −58,9%** | +41% · −12,6% | +27% | −11,1% | 1,3 | 0,61 → 1,25 | +21% | 0,22 |
> | 4655 | BB explosão + GPS médias + MACD + Quinta ⚠️ | **+126% · −48,7%** | +43% · −12,9% | +28% | −10,7% | 1,4 | 1,17 → 1,13 | +19% | 0,11 |
> | 4656 | ADX + VWAP + BB explosão + GPS médias + MACD | **+164% · −68,2%** | +50% · −17,4% | +31% | −12,0% | 1,5 | 0,94 → 1,23 | +21% | 0,37 |
> | 4657 | ADX + BB explosão + GPS médias + Rompe 200 + Onda | **+168% · −61,1%** | +50% · −14,6% | +30% | −9,0% | 1,9 | 0,89 → 1,31 | +24% | 0,24 |
> | 4658 | VWAP + Donchian + BB explosão + GPS médias + Quinta ⚠️ | **+157% · −64,1%** | +47% · −14,9% | +29% | −11,5% | 1,4 | 1,24 → 1,01 | +14% | 0,21 |
> | 4659 | VWAP + Donchian + BB explosão + Pôr do sol + Rompe 200 | **+130% · −57,4%** | +38% · −11,5% | +25% | −9,7% | 1,2 | 1,10 → 1,00 | +13% | 0,16 |
> | 4660 | VWAP + BB explosão + MACD + Rompe 200 + Bollinger | **+138% · −47,2%** | +37% · −10,3% | +25% | −12,6% | 0,9 | 0,93 → 1,13 | +17% | 0,30 |
> | 4661 | BB explosão + GPS médias + MACD + Pôr do sol + Onda | **+153% · −50,5%** | +43% · −10,5% | +29% | −10,4% | 1,5 | 0,84 → 1,28 | +21% | 0,13 |
> | 4662 | VWAP + MACD + Onda | **+82% · −34,2%** | +36% · −11,8% | +28% | −18,6% | 0,8 | 0,38 → 1,18 | +19% | 0,40 |
> | 4663 | ADX + BB explosão + GPS médias | **+136% · −60,0%** | +61% · −23,6% | +34% | −8,4% | 2,5 | 1,05 → 1,23 | +20% | 0,45 |
> | 4664 | BB explosão + Quinta + Bollinger + Onda ⚠️ | **+128% · −37,5%** | +39% · −8,9% | +25% | −8,1% | 1,5 | 0,72 → 1,44 | +16% | 0,03 |
> | 4665 | BB explosão + GPS médias + Pôr do sol + Rompe 200 + Onda | **+132% · −49,8%** | +39% · −10,3% | +26% | −9,6% | 1,4 | 0,94 → 1,14 | +21% | 0,10 |
> | 4666 | ADX + GPS médias + Onda | **+155% · −47,1%** | +62% · −16,7% | +36% | −8,7% | 2,6 | 0,77 → 1,43 | +25% | 0,22 |
> | 4667 | VWAP + Donchian + BB explosão + MACD + Quinta ⚠️ | **+148% · −55,7%** | +42% · −12,0% | +28% | −12,0% | 1,2 | 1,01 → 1,14 | +17% | 0,22 |
> | 4668 | VWAP + BB explosão + Pôr do sol + Rompe 200 + Bollinger | **+116% · −41,2%** | +32% · −8,2% | +22% | −9,3% | 0,9 | 1,04 → 1,04 | +14% | 0,13 |
> | 4669 | BB explosão + GPS médias + Quinta + Bollinger + Onda ⚠️ | **+183% · −53,2%** | +45% · −11,6% | +28% | −9,0% | 1,6 | 1,02 → 1,31 | +21% | 0,11 |
> | 4670 | VWAP + BB explosão + GPS médias + Tendência + Onda | **+165% · −65,8%** | +50% · −16,0% | +33% | −12,6% | 1,6 | 1,02 → 1,14 | +23% | 0,37 |
> | 4671 | VWAP + BB explosão + GPS médias + Quinta + Rompe 200 ⚠️ | **+109% · −55,4%** | +35% · −12,4% | +24% | −10,9% | 1,0 | 1,18 → 0,85 | +13% | 0,13 |
> | 4672 | ADX + 1ª vela 80 ⚠️ | **+109% · −32,0%** | +60% · −15,9% | +36% | −8,8% | 2,6 | 0,62 → 1,75 | +20% | 0,15 |
> | 4673 | ADX + VWAP + BB explosão + MACD + Onda | **+150% · −64,6%** | +45% · −14,7% | +30% | −12,5% | 1,4 | 0,55 → 1,36 | +21% | 0,30 |
> | 4674 | Donchian + BB explosão + GPS médias + Rompe 200 | **+159% · −58,2%** | +53% · −17,0% | +30% | −9,9% | 1,8 | 1,37 → 1,03 | +13% | 0,40 |
> | 4675 | VWAP + BB explosão + Pôr do sol + Quinta ⚠️ | **+65% · −36,6%** | +27% · −8,6% | +20% | −9,2% | 0,8 | 0,85 → 0,89 | +13% | −0,01 |
> | 4676 | VWAP + BB explosão + Rompe 200 + Tendência | **+113% · −62,7%** | +40% · −16,7% | +28% | −10,4% | 1,5 | 1,19 → 0,97 | +12% | 0,31 |
> | 4677 | VWAP + BB explosão + 1ª vela 80 + Onda ⚠️ | **+114% · −46,3%** | +40% · −13,1% | +28% | −16,2% | 0,9 | 0,54 → 1,27 | +18% | 0,30 |
> | 4678 | VWAP + BB explosão + GPS médias + Pullback | **+118% · −56,3%** | +42% · −16,2% | +28% | −12,7% | 1,2 | 1,31 → 0,88 | +12% | 0,23 |
> | 4679 | BB explosão + MACD + Quinta + Onda ⚠️ | **+105% · −36,9%** | +36% · −8,4% | +27% | −9,9% | 1,4 | 0,58 → 1,34 | +17% | 0,03 |
> | 4680 | Donchian + BB explosão + GPS médias + Bollinger + Onda | **+242% · −62,8%** | +58% · −14,2% | +33% | −10,2% | 1,9 | 1,10 → 1,33 | +25% | 0,34 |

> [!example]- Combinações 4681 a 4710 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4681 | BB explosão + GPS médias + Pullback + Onda | **+140% · −51,2%** | +47% · −14,0% | +30% | −10,2% | 1,7 | 1,09 → 1,15 | +23% | 0,18 |
> | 4682 | VWAP + BB explosão + GPS médias + Pôr do sol + Rompe 200 | **+110% · −54,3%** | +35% · −11,9% | +24% | −11,1% | 1,0 | 1,13 → 0,87 | +14% | 0,13 |
> | 4683 | ADX + VWAP + Pôr do sol + Pullback | **+118% · −41,3%** | +38% · −8,7% | +26% | −5,2% | 2,5 | 1,12 → 1,35 | +12% | 0,01 |
> | 4684 | Donchian + BB explosão + Tendência | **+171% · −63,2%** | +66% · −24,5% | +39% | −9,3% | 2,8 | 1,43 → 1,24 | +14% | 0,61 |
> | 4685 | VWAP + BB explosão + Quinta + Bollinger + Onda ⚠️ | **+136% · −44,6%** | +36% · −9,6% | +25% | −11,4% | 1,0 | 0,69 → 1,24 | +20% | 0,13 |
> | 4686 | VWAP + BB explosão + GPS médias + MACD + Bollinger | **+177% · −56,5%** | +46% · −13,6% | +28% | −14,7% | 1,1 | 1,07 → 1,13 | +19% | 0,40 |
> | 4687 | Donchian + BB explosão + Tendência + Onda | **+197% · −61,9%** | +60% · −18,3% | +37% | −9,4% | 2,6 | 1,09 → 1,34 | +25% | 0,44 |
> | 4688 | Donchian + BB explosão + MACD + Pôr do sol | **+150% · −47,5%** | +46% · −12,2% | +29% | −8,8% | 1,8 | 1,08 → 1,31 | +19% | 0,17 |
> | 4689 | VWAP + BB explosão + IFR | **+105% · −44,0%** | +45% · −15,6% | +30% | −13,2% | 1,3 | 0,97 → 1,17 | +14% | 0,35 |
> | 4690 | VWAP + Donchian + BB explosão + Quinta + Bollinger ⚠️ | **+181% · −51,5%** | +44% · −10,4% | +26% | −9,4% | 1,5 | 1,20 → 1,19 | +14% | 0,19 |
> | 4691 | ADX + Donchian + BB explosão + Bollinger | **+235% · −62,3%** | +64% · −17,9% | +33% | −5,6% | 3,7 | 1,17 → 1,56 | +20% | 0,36 |
> | 4692 | BB explosão + GPS médias + MACD + Rompe 200 + Onda | **+150% · −52,2%** | +43% · −11,2% | +29% | −11,7% | 1,4 | 0,88 → 1,20 | +22% | 0,26 |
> | 4693 | Donchian + BB explosão + GPS médias + MACD | **+178% · −60,0%** | +59% · −17,5% | +34% | −12,8% | 1,7 | 1,21 → 1,18 | +20% | 0,48 |
> | 4694 | BB explosão + GPS médias + MACD + Pôr do sol | **+128% · −47,6%** | +43% · −12,4% | +28% | −10,7% | 1,4 | 1,11 → 1,16 | +21% | 0,11 |
> | 4695 | BB explosão + 1ª vela 80 + Rompe 200 + Onda ⚠️ | **+118% · −41,3%** | +39% · −9,9% | +27% | −10,8% | 1,3 | 0,65 → 1,39 | +15% | 0,18 |
> | 4696 | VWAP + Donchian + BB explosão + GPS médias + Bollinger | **+210% · −61,6%** | +55% · −14,3% | +30% | −12,6% | 1,4 | 1,25 → 1,12 | +15% | 0,42 |
> | 4697 | BB explosão + GPS médias + Pôr do sol + Bollinger + Onda | **+186% · −53,8%** | +45% · −11,8% | +28% | −8,9% | 1,6 | 0,97 → 1,33 | +20% | 0,12 |
> | 4698 | VWAP + BB explosão + GPS médias + Quinta + Bollinger ⚠️ | **+156% · −52,9%** | +42% · −11,6% | +26% | −10,9% | 1,2 | 1,23 → 1,05 | +15% | 0,19 |
> | 4699 | ADX + VWAP + Donchian + Quinta ⚠️ | **+167% · −48,0%** | +50% · −11,1% | +30% | −6,3% | 2,7 | 1,06 → 1,38 | +15% | 0,08 |
> | 4700 | VWAP + BB explosão + GPS médias + MACD + Quinta ⚠️ | **+128% · −56,6%** | +39% · −12,6% | +27% | −13,5% | 1,0 | 1,04 → 1,03 | +18% | 0,17 |
> | 4701 | ADX + BB explosão + Pullback | **+121% · −54,9%** | +49% · −20,7% | +30% | −7,2% | 2,4 | 1,20 → 1,39 | +16% | 0,13 |
> | 4702 | VWAP + Donchian + BB explosão + Tendência | **+167% · −71,7%** | +55% · −20,8% | +34% | −10,3% | 2,1 | 1,24 → 1,11 | +13% | 0,51 |
> | 4703 | VWAP + Donchian + MACD | **+126% · −35,2%** | +49% · −12,6% | +31% | −16,6% | 1,1 | 0,94 → 1,13 | +20% | 0,49 |
> | 4704 | ADX + Donchian + BB explosão + GPS médias + Onda | **+211% · −69,2%** | +62% · −16,9% | +35% | −9,0% | 2,5 | 0,98 → 1,38 | +27% | 0,35 |
> | 4705 | ADX + Donchian + BB explosão + MACD | **+196% · −65,4%** | +60% · −19,6% | +35% | −7,8% | 2,8 | 0,99 → 1,46 | +23% | 0,38 |
> | 4706 | BB explosão + GPS médias + MACD + 1ª vela 80 + Onda ⚠️ | **+189% · −53,9%** | +49% · −12,0% | +32% | −12,8% | 1,5 | 0,85 → 1,39 | +19% | 0,28 |
> | 4707 | Donchian + BB explosão + GPS médias + Rompe 200 + Onda | **+180% · −63,5%** | +51% · −13,4% | +31% | −10,8% | 1,7 | 1,07 → 1,17 | +22% | 0,33 |
> | 4708 | MACD + Onda | **+71% · −23,6%** | +41% · −9,8% | +31% | −14,5% | 1,3 | 0,31 → 1,39 | +13% | 0,31 |
> | 4709 | ADX + BB explosão + Quinta + Onda ⚠️ | **+129% · −53,8%** | +44% · −14,0% | +28% | −6,7% | 2,3 | 0,59 → 1,46 | +19% | 0,03 |
> | 4710 | Donchian + BB explosão + MACD + Quinta ⚠️ | **+148% · −49,2%** | +46% · −12,9% | +29% | −8,8% | 1,9 | 1,14 → 1,28 | +18% | 0,17 |

> [!example]- Combinações 4711 a 4740 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4711 | Donchian + BB explosão + GPS médias + MACD + Onda | **+197% · −65,5%** | +56% · −13,7% | +34% | −12,1% | 1,7 | 0,98 → 1,28 | +27% | 0,39 |
> | 4712 | ADX + VWAP + GPS médias + Onda | **+158% · −52,4%** | +53% · −14,3% | +32% | −12,1% | 1,6 | 0,74 → 1,30 | +24% | 0,26 |
> | 4713 | ADX + BB explosão + 1ª vela 80 ⚠️ | **+137% · −50,7%** | +55% · −17,9% | +33% | −7,0% | 2,9 | 0,77 → 1,60 | +20% | 0,20 |
> | 4714 | VWAP + Quinta ⚠️ | **+32% · −19,8%** | +22% · −9,1% | +19% | −14,9% | 0,4 | 0,69 → 0,62 | +10% | −0,24 |
> | 4715 | VWAP + BB explosão + GPS médias + Pullback + Onda | **+140% · −58,1%** | +43% · −13,3% | +28% | −13,4% | 1,2 | 1,00 → 1,06 | +21% | 0,23 |
> | 4716 | ADX + VWAP + BB explosão + Pôr do sol + Rompe 200 | **+120% · −54,7%** | +36% · −12,0% | +24% | −7,7% | 1,5 | 0,83 → 1,20 | +16% | 0,09 |
> | 4717 | ADX + VWAP + BB explosão + GPS médias + Onda | **+153% · −66,8%** | +50% · −16,2% | +31% | −12,3% | 1,5 | 0,77 → 1,24 | +26% | 0,32 |
> | 4718 | VWAP + BB explosão + MACD + Quinta + Onda ⚠️ | **+110% · −46,1%** | +34% · −10,2% | +26% | −13,4% | 1,0 | 0,58 → 1,19 | +21% | 0,13 |
> | 4719 | VWAP + BB explosão + Pôr do sol + Rompe 200 + Onda | **+91% · −43,5%** | +30% · −9,4% | +23% | −12,1% | 0,8 | 0,60 → 1,04 | +20% | 0,11 |
> | 4720 | ADX + VWAP + BB explosão + MACD + Quinta ⚠️ | **+139% · −61,7%** | +40% · −13,8% | +27% | −8,8% | 1,6 | 0,78 → 1,32 | +19% | 0,16 |
> | 4721 | BB explosão + GPS médias + Rompe 200 + Bollinger + Onda | **+182% · −55,1%** | +46% · −12,3% | +28% | −10,3% | 1,4 | 1,02 → 1,24 | +22% | 0,25 |
> | 4722 | VWAP + BB explosão + GPS médias + MACD + Pôr do sol | **+130% · −55,7%** | +40% · −12,3% | +27% | −13,7% | 1,0 | 0,99 → 1,05 | +19% | 0,19 |
> | 4723 | VWAP + BB explosão + GPS médias + Tendência | **+147% · −65,5%** | +52% · −20,5% | +33% | −12,1% | 1,7 | 1,28 → 1,02 | +14% | 0,43 |
> | 4724 | Donchian + BB explosão + Rompe 200 + Bollinger | **+177% · −45,5%** | +50% · −11,5% | +28% | −7,0% | 2,1 | 1,39 → 1,27 | +14% | 0,27 |
> | 4725 | VWAP + Donchian + BB explosão + MACD + Pôr do sol | **+150% · −54,3%** | +42% · −11,4% | +27% | −12,2% | 1,2 | 0,96 → 1,15 | +18% | 0,24 |
> | 4726 | Donchian + BB explosão + MACD + Rompe 200 + Onda | **+174% · −55,5%** | +46% · −10,2% | +30% | −10,3% | 1,6 | 0,87 → 1,31 | +25% | 0,30 |
> | 4727 | ADX + BB explosão + Pôr do sol + Onda | **+131% · −52,8%** | +44% · −13,5% | +28% | −6,8% | 2,3 | 0,54 → 1,49 | +19% | 0,03 |
> | 4728 | BB explosão + Pôr do sol + Bollinger + Onda | **+130% · −38,5%** | +39% · −9,2% | +25% | −8,0% | 1,6 | 0,65 → 1,47 | +16% | 0,05 |
> | 4729 | VWAP + BB explosão + MACD + Tendência | **+134% · −60,5%** | +45% · −17,8% | +32% | −12,9% | 1,5 | 1,04 → 1,12 | +18% | 0,46 |
> | 4730 | BB explosão + GPS médias + MACD + Bollinger + Onda | **+206% · −55,8%** | +50% · −12,5% | +31% | −11,3% | 1,6 | 0,91 → 1,35 | +21% | 0,32 |
> | 4731 | BB explosão + GPS médias + Pôr do sol + Bollinger | **+153% · −48,0%** | +46% · −12,9% | +26% | −7,9% | 1,7 | 1,36 → 1,20 | +18% | 0,11 |
> | 4732 | ADX + GPS médias | **+125% · −41,9%** | +71% · −22,5% | +38% | −8,4% | 3,0 | 1,10 → 1,33 | +30% | 0,40 |
> | 4733 | BB explosão + Pullback + Onda | **+91% · −36,5%** | +39% · −12,2% | +28% | −9,4% | 1,6 | 0,84 → 1,20 | +23% | 0,13 |
> | 4734 | VWAP + BB explosão + Pullback + Onda | **+97% · −45,1%** | +36% · −11,8% | +26% | −13,9% | 1,0 | 0,78 → 1,05 | +20% | 0,22 |
> | 4735 | BB explosão + IFR | **+97% · −34,4%** | +54% · −17,6% | +35% | −8,9% | 2,4 | 1,16 → 1,42 | +16% | 0,40 |
> | 4736 | ADX + VWAP + IFR | **+146% · −39,1%** | +55% · −12,1% | +34% | −7,7% | 2,8 | 0,91 → 1,54 | +15% | 0,23 |
> | 4737 | BB explosão + IFR + Onda | **+129% · −35,7%** | +51% · −11,7% | +34% | −10,2% | 2,0 | 0,75 → 1,48 | +25% | 0,27 |
> | 4738 | ADX + VWAP + BB explosão + MACD + Pôr do sol | **+141% · −61,0%** | +41% · −13,5% | +27% | −9,0% | 1,6 | 0,73 → 1,33 | +18% | 0,16 |
> | 4739 | Donchian + BB explosão + GPS médias + 1ª vela 80 + Onda ⚠️ | **+222% · −64,0%** | +57% · −13,2% | +34% | −11,0% | 1,9 | 1,03 → 1,37 | +28% | 0,31 |
> | 4740 | ADX + BB explosão + GPS médias + Onda | **+158% · −61,4%** | +57% · −17,9% | +33% | −9,8% | 2,1 | 0,80 → 1,33 | +24% | 0,31 |

> [!example]- Combinações 4741 a 4770 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4741 | VWAP + BB explosão + GPS médias + Rompe 200 + Bollinger | **+155% · −54,8%** | +42% · −12,3% | +26% | −12,0% | 1,1 | 1,21 → 0,98 | +14% | 0,32 |
> | 4742 | Donchian + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+202% · −58,0%** | +61% · −15,4% | +35% | −11,2% | 1,9 | 1,32 → 1,29 | +20% | 0,36 |
> | 4743 | VWAP + BB explosão + Quinta + Rompe 200 ⚠️ | **+64% · −46,4%** | +27% · −11,1% | +21% | −10,9% | 0,7 | 0,92 → 0,76 | +10% | 0,06 |
> | 4744 | VWAP + BB explosão + GPS médias + Pôr do sol + Bollinger | **+159% · −53,6%** | +42% · −11,8% | +25% | −11,1% | 1,1 | 1,17 → 1,07 | +16% | 0,19 |
> | 4745 | ADX + VWAP + BB explosão + Pullback | **+127% · −60,4%** | +44% · −17,1% | +28% | −8,2% | 1,9 | 1,05 → 1,21 | +15% | 0,20 |
> | 4746 | BB explosão + MACD + Pôr do sol + Onda | **+107% · −37,9%** | +37% · −8,5% | +27% | −10,0% | 1,4 | 0,53 → 1,36 | +16% | 0,07 |
> | 4747 | ADX + VWAP + Donchian + Pôr do sol | **+170% · −49,8%** | +50% · −11,2% | +30% | −6,2% | 2,7 | 1,00 → 1,40 | +15% | 0,09 |
> | 4748 | BB explosão + GPS médias + MACD + Rompe 200 | **+125% · −51,8%** | +43% · −14,2% | +28% | −11,7% | 1,3 | 1,15 → 1,06 | +18% | 0,28 |
> | 4749 | Donchian + 1ª vela 80 ⚠️ | **+132% · −30,0%** | +67% · −14,3% | +37% | −8,4% | 2,9 | 1,29 → 1,62 | +27% | 0,12 |
> | 4750 | VWAP + Donchian + BB explosão + Pôr do sol + Bollinger | **+184% · −50,0%** | +45% · −10,3% | +26% | −9,6% | 1,4 | 1,14 → 1,21 | +15% | 0,20 |
> | 4751 | ADX + VWAP + Donchian + 1ª vela 80 ⚠️ | **+211% · −50,8%** | +58% · −10,5% | +34% | −8,8% | 2,4 | 0,99 → 1,55 | +18% | 0,25 |
> | 4752 | BB explosão + GPS médias + MACD + Bollinger | **+176% · −50,6%** | +52% · −13,9% | +30% | −11,8% | 1,5 | 1,20 → 1,25 | +21% | 0,38 |
> | 4753 | GPS médias + Onda | **+97% · −31,7%** | +55% · −15,5% | +34% | −14,6% | 1,4 | 0,77 → 1,16 | +20% | 0,20 |
> | 4754 | VWAP + Donchian + BB explosão + Pôr do sol + Onda | **+145% · −52,4%** | +42% · −10,3% | +28% | −11,9% | 1,2 | 0,78 → 1,18 | +22% | 0,19 |
> | 4755 | ADX + VWAP + Donchian + BB explosão + Pôr do sol | **+175% · −65,4%** | +49% · −15,4% | +29% | −7,7% | 2,1 | 0,98 → 1,31 | +18% | 0,18 |
> | 4756 | BB explosão + Quinta + Rompe 200 ⚠️ | **+54% · −32,0%** | +27% · −10,1% | +20% | −6,3% | 1,2 | 1,13 → 0,83 | +10% | −0,00 |
> | 4757 | VWAP + MACD | **+53% · −26,9%** | +33% · −13,5% | +26% | −21,5% | 0,6 | 0,53 → 0,95 | +15% | 0,51 |
> | 4758 | BB explosão + Rompe 200 + Bollinger + Onda | **+129% · −40,2%** | +40% · −9,8% | +25% | −9,8% | 1,3 | 0,74 → 1,32 | +17% | 0,19 |
> | 4759 | VWAP + Donchian + BB explosão + Rompe 200 + Bollinger | **+180% · −53,6%** | +45% · −10,9% | +26% | −10,6% | 1,3 | 1,19 → 1,11 | +13% | 0,32 |
> | 4760 | VWAP + Donchian + BB explosão + GPS médias + Rompe 200 | **+154% · −68,6%** | +48% · −16,0% | +29% | −12,5% | 1,3 | 1,22 → 0,96 | +13% | 0,37 |
> | 4761 | Donchian + BB explosão + MACD + Bollinger | **+204% · −49,9%** | +55% · −13,0% | +31% | −10,0% | 1,9 | 1,17 → 1,40 | +20% | 0,40 |
> | 4762 | VWAP + BB explosão + MACD + Pôr do sol + Onda | **+112% · −46,3%** | +34% · −10,2% | +26% | −13,6% | 0,9 | 0,53 → 1,20 | +20% | 0,17 |
> | 4763 | Donchian + BB explosão + Quinta + Onda ⚠️ | **+143% · −48,9%** | +46% · −11,4% | +29% | −8,7% | 1,9 | 0,88 → 1,30 | +23% | 0,07 |
> | 4764 | ADX + VWAP + BB explosão + Pôr do sol + Onda | **+134% · −59,0%** | +41% · −12,4% | +27% | −9,7% | 1,5 | 0,55 → 1,33 | +18% | 0,12 |
> | 4765 | BB explosão + GPS médias + Rompe 200 + Bollinger | **+151% · −49,5%** | +46% · −13,5% | +27% | −9,0% | 1,5 | 1,39 → 1,07 | +15% | 0,30 |
> | 4766 | VWAP + BB explosão + MACD + Bollinger + Onda | **+159% · −50,2%** | +41% · −11,4% | +27% | −14,4% | 1,0 | 0,62 → 1,29 | +21% | 0,36 |
> | 4767 | ADX + VWAP + Donchian + BB explosão + Rompe 200 | **+170% · −65,9%** | +49% · −16,1% | +29% | −9,1% | 1,8 | 1,02 → 1,22 | +15% | 0,29 |
> | 4768 | Donchian + Onda | **+116% · −30,1%** | +62% · −14,2% | +36% | −11,0% | 2,2 | 0,75 → 1,37 | +29% | 0,30 |
> | 4769 | VWAP + Donchian + BB explosão + 1ª vela 80 + Onda ⚠️ | **+181% · −58,2%** | +48% · −12,1% | +31% | −13,9% | 1,3 | 0,80 → 1,32 | +25% | 0,33 |
> | 4770 | VWAP + BB explosão + GPS médias + MACD + Rompe 200 | **+127% · −59,2%** | +40% · −13,7% | +27% | −14,5% | 1,0 | 1,03 → 0,98 | +16% | 0,31 |

> [!example]- Combinações 4771 a 4800 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4771 | ADX + Donchian + BB explosão + 1ª vela 80 ⚠️ | **+217% · −59,3%** | +63% · −17,0% | +35% | −6,5% | 3,5 | 1,07 → 1,60 | +23% | 0,27 |
> | 4772 | ADX + BB explosão + Pullback + Onda | **+150% · −55,9%** | +48% · −14,7% | +31% | −7,3% | 2,5 | 0,84 → 1,46 | +24% | 0,14 |
> | 4773 | VWAP + Donchian + BB explosão + GPS médias + MACD | **+170% · −65,9%** | +52% · −16,3% | +31% | −15,2% | 1,2 | 1,10 → 1,09 | +18% | 0,46 |
> | 4774 | VWAP + Donchian + BB explosão + MACD + Rompe 200 | **+146% · −58,4%** | +42% · −12,8% | +28% | −13,1% | 1,1 | 1,01 → 1,07 | +15% | 0,36 |
> | 4775 | Donchian + BB explosão + 1ª vela 80 + Onda ⚠️ | **+184% · −54,0%** | +54% · −10,9% | +33% | −10,6% | 1,9 | 0,85 → 1,47 | +26% | 0,28 |
> | 4776 | VWAP + Donchian + BB explosão + Quinta + Onda ⚠️ | **+143% · −53,4%** | +42% · −10,8% | +28% | −11,7% | 1,3 | 0,82 → 1,16 | +21% | 0,15 |
> | 4777 | ADX + VWAP + Donchian + BB explosão + Bollinger | **+231% · −67,4%** | +56% · −16,0% | +31% | −8,4% | 2,1 | 1,05 → 1,38 | +18% | 0,38 |
> | 4778 | VWAP + 1ª vela 80 + Onda ⚠️ | **+92% · −34,1%** | +39% · −11,8% | +28% | −17,4% | 0,9 | 0,42 → 1,33 | +17% | 0,33 |
> | 4779 | VWAP + Donchian + BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+195% · −63,7%** | +54% · −15,6% | +32% | −14,0% | 1,4 | 1,18 → 1,19 | +18% | 0,37 |
> | 4780 | BB explosão + Tendência + Onda | **+128% · −51,6%** | +52% · −19,0% | +35% | −11,1% | 2,0 | 0,91 → 1,29 | +27% | 0,36 |
> | 4781 | ADX + BB explosão + Tendência + Onda | **+186% · −66,2%** | +58% · −20,1% | +36% | −10,2% | 2,3 | 0,90 → 1,48 | +28% | 0,30 |
> | 4782 | ADX + BB explosão + MACD + Rompe 200 + Onda | **+162% · −56,4%** | +44% · −11,6% | +29% | −8,7% | 1,9 | 0,65 → 1,46 | +20% | 0,18 |
> | 4783 | BB explosão + Pôr do sol + Rompe 200 | **+56% · −30,0%** | +28% · −9,4% | +20% | −6,1% | 1,2 | 1,01 → 0,90 | +12% | −0,05 |
> | 4784 | ADX + VWAP + Donchian + BB explosão + MACD | **+189% · −70,1%** | +53% · −17,5% | +32% | −10,5% | 1,8 | 0,92 → 1,32 | +20% | 0,39 |
> | 4785 | BB explosão + MACD + Rompe 200 + Onda | **+105% · −41,9%** | +37% · −9,6% | +27% | −11,7% | 1,2 | 0,60 → 1,25 | +18% | 0,21 |
> | 4786 | Donchian + BB explosão + Pôr do sol + Onda | **+145% · −47,7%** | +46% · −10,7% | +29% | −8,6% | 1,9 | 0,83 → 1,33 | +25% | 0,11 |
> | 4787 | ADX + VWAP + Donchian + BB explosão + 1ª vela 80 ⚠️ | **+212% · −64,9%** | +55% · −15,3% | +32% | −9,5% | 2,1 | 0,98 → 1,44 | +21% | 0,31 |
> | 4788 | VWAP + BB explosão + Pôr do sol + Rompe 200 | **+65% · −42,4%** | +27% · −10,6% | +21% | −11,1% | 0,7 | 0,85 → 0,79 | +12% | 0,07 |
> | 4789 | VWAP + BB explosão + MACD + Quinta ⚠️ | **+84% · −44,0%** | +32% · −10,9% | +24% | −13,5% | 0,8 | 0,77 → 1,03 | +16% | 0,13 |
> | 4790 | VWAP + BB explosão + MACD + Rompe 200 + Onda | **+109% · −49,1%** | +35% · −11,2% | +26% | −14,9% | 0,9 | 0,59 → 1,12 | +22% | 0,28 |
> | 4791 | VWAP + BB explosão + GPS médias + Quinta + Onda ⚠️ | **+121% · −55,0%** | +39% · −12,1% | +27% | −13,1% | 1,1 | 0,83 → 1,05 | +22% | 0,11 |
> | 4792 | ADX + VWAP + BB explosão + Pullback + Onda | **+152% · −62,0%** | +44% · −13,4% | +29% | −9,8% | 1,6 | 0,80 → 1,31 | +20% | 0,20 |
> | 4793 | BB explosão + GPS médias + 1ª vela 80 + Onda ⚠️ | **+156% · −52,6%** | +51% · −14,9% | +32% | −12,2% | 1,6 | 0,85 → 1,32 | +19% | 0,27 |
> | 4794 | VWAP + Donchian + BB explosão + Bollinger + Onda | **+197% · −56,6%** | +49% · −12,0% | +29% | −12,7% | 1,3 | 0,85 → 1,27 | +22% | 0,36 |
> | 4795 | BB explosão + Pullback | **+61% · −34,9%** | +37% · −17,8% | +26% | −6,3% | 2,1 | 1,43 → 0,93 | +7% | −0,00 |
> | 4796 | Donchian | **+83% · −23,6%** | +83% · −23,6% | +42% | −10,5% | 2,7 | 1,37 → 1,25 | +17% | — |
> | 4797 | VWAP + BB explosão + Pôr do sol + Bollinger + Onda | **+138% · −45,7%** | +37% · −9,7% | +24% | −11,5% | 1,0 | 0,63 → 1,26 | +20% | 0,16 |
> | 4798 | Donchian + BB explosão + GPS médias | **+149% · −58,0%** | +64% · −21,9% | +35% | −12,1% | 1,8 | 1,31 → 1,05 | +14% | 0,57 |
> | 4799 | ADX + VWAP + BB explosão + GPS médias | **+137% · −65,8%** | +52% · −20,7% | +31% | −11,6% | 1,5 | 0,96 → 1,13 | +18% | 0,39 |
> | 4800 | BB explosão + GPS médias + Quinta ⚠️ | **+94% · −45,3%** | +43% · −16,1% | +27% | −9,3% | 1,5 | 1,28 → 0,92 | +14% | 0,06 |

> [!example]- Combinações 4801 a 4830 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4801 | VWAP + BB explosão + Tendência + Onda | **+129% · −57,8%** | +45% · −16,5% | +32% | −13,1% | 1,4 | 0,84 → 1,16 | +23% | 0,38 |
> | 4802 | VWAP + BB explosão + GPS médias + Pôr do sol + Onda | **+123% · −55,5%** | +40% · −12,3% | +27% | −13,2% | 1,0 | 0,79 → 1,07 | +23% | 0,15 |
> | 4803 | BB explosão + GPS médias + Quinta + Onda ⚠️ | **+120% · −49,1%** | +43% · −13,1% | +28% | −10,5% | 1,4 | 0,89 → 1,14 | +21% | 0,04 |
> | 4804 | Donchian + BB explosão + MACD + Rompe 200 | **+147% · −49,8%** | +46% · −13,2% | +29% | −9,9% | 1,7 | 1,13 → 1,20 | +17% | 0,33 |
> | 4805 | VWAP + Donchian + BB explosão + MACD + Bollinger | **+203% · −56,3%** | +49% · −12,1% | +29% | −13,2% | 1,3 | 1,04 → 1,24 | +18% | 0,43 |
> | 4806 | VWAP + BB explosão + GPS médias + Bollinger + Onda | **+170% · −60,3%** | +47% · −14,2% | +28% | −14,0% | 1,1 | 0,87 → 1,16 | +23% | 0,35 |
> | 4807 | VWAP + BB explosão + GPS médias + Rompe 200 + Onda | **+120% · −56,8%** | +40% · −12,8% | +27% | −14,5% | 1,0 | 0,84 → 1,00 | +21% | 0,29 |
> | 4808 | BB explosão + MACD + Quinta ⚠️ | **+76% · −36,2%** | +34% · −11,7% | +25% | −9,1% | 1,3 | 0,88 → 1,20 | +18% | 0,00 |
> | 4809 | VWAP + BB explosão + GPS médias + Pôr do sol | **+102% · −52,6%** | +39% · −14,5% | +25% | −13,0% | 1,0 | 1,05 → 0,89 | +14% | 0,13 |
> | 4810 | Donchian + BB explosão + 1ª vela 80 ⚠️ | **+155% · −47,6%** | +58% · −14,8% | +34% | −9,9% | 2,1 | 1,17 → 1,42 | +19% | 0,30 |
> | 4811 | BB explosão + GPS médias + Pôr do sol + Onda | **+122% · −49,6%** | +43% · −13,3% | +28% | −10,5% | 1,4 | 0,84 → 1,17 | +21% | 0,07 |
> | 4812 | VWAP + Donchian + BB explosão + Quinta ⚠️ | **+119% · −57,0%** | +42% · −14,0% | +27% | −10,9% | 1,3 | 1,07 → 1,01 | +12% | 0,16 |
> | 4813 | VWAP + BB explosão + Tendência | **+104% · −60,3%** | +46% · −22,2% | +32% | −12,1% | 1,6 | 1,11 → 1,00 | +12% | 0,45 |
> | 4814 | VWAP + BB explosão + Rompe 200 + Bollinger + Onda | **+136% · −47,2%** | +37% · −10,6% | +25% | −12,9% | 0,9 | 0,70 → 1,16 | +21% | 0,27 |
> | 4815 | VWAP + BB explosão + GPS médias + Quinta ⚠️ | **+100% · −53,6%** | +39% · −15,0% | +25% | −12,8% | 1,0 | 1,10 → 0,86 | +13% | 0,12 |
> | 4816 | Donchian + BB explosão + GPS médias + Onda | **+170% · −63,6%** | +59% · −16,3% | +34% | −12,0% | 1,8 | 1,01 → 1,20 | +25% | 0,41 |
> | 4817 | VWAP + Donchian + BB explosão + GPS médias + Onda | **+161% · −67,4%** | +52% · −15,2% | +31% | −14,3% | 1,3 | 0,94 → 1,11 | +22% | 0,40 |
> | 4818 | BB explosão + Tendência | **+98% · −51,0%** | +56% · −28,3% | +37% | −11,5% | 2,1 | 1,34 → 1,14 | +12% | 0,52 |
> | 4819 | BB explosão + GPS médias + Bollinger | **+139% · −49,3%** | +55% · −18,3% | +30% | −10,9% | 1,5 | 1,30 → 1,11 | +16% | 0,42 |
> | 4820 | Donchian + BB explosão + Quinta ⚠️ | **+114% · −45,2%** | +47% · −15,9% | +28% | −6,6% | 2,3 | 1,27 → 1,16 | +12% | 0,09 |
> | 4821 | VWAP + Donchian + BB explosão + GPS médias | **+145% · −65,4%** | +54% · −19,4% | +31% | −14,9% | 1,2 | 1,16 → 0,98 | +13% | 0,48 |
> | 4822 | ADX + VWAP + BB explosão + Pôr do sol + 1ª vela 80 ⚠️ | **+157% · −54,2%** | +42% · −10,8% | +27% | −8,2% | 1,8 | 0,79 → 1,47 | +18% | 0,13 |
> | 4823 | VWAP + BB explosão + Pullback | **+71% · −46,5%** | +34% · −15,4% | +25% | −13,3% | 0,9 | 1,11 → 0,80 | +8% | 0,20 |
> | 4824 | BB explosão + GPS médias + Pôr do sol | **+96% · −44,1%** | +43% · −15,4% | +27% | −9,3% | 1,5 | 1,21 → 0,96 | +16% | 0,02 |
> | 4825 | Donchian + BB explosão + Rompe 200 + Onda | **+142% · −53,5%** | +47% · −12,0% | +29% | −10,4% | 1,6 | 0,89 → 1,22 | +22% | 0,30 |
> | 4826 | BB explosão + MACD + Pôr do sol | **+77% · −34,1%** | +34% · −10,8% | +25% | −9,2% | 1,3 | 0,78 → 1,25 | +20% | −0,00 |
> | 4827 | BB explosão + Quinta + Bollinger ⚠️ | **+92% · −32,1%** | +38% · −10,2% | +23% | −5,3% | 1,9 | 1,26 → 1,31 | +14% | 0,05 |
> | 4828 | ADX + VWAP + Rompe 200 | **+88% · −35,3%** | +39% · −11,3% | +26% | −9,8% | 1,3 | 0,71 → 1,15 | +14% | 0,12 |
> | 4829 | VWAP + BB explosão + MACD + Pôr do sol | **+86% · −42,2%** | +32% · −10,7% | +24% | −13,7% | 0,8 | 0,70 → 1,05 | +18% | 0,15 |
> | 4830 | VWAP + BB explosão + Quinta + Bollinger ⚠️ | **+103% · −39,8%** | +35% · −9,7% | +23% | −10,3% | 1,0 | 0,99 → 1,06 | +13% | 0,15 |

> [!example]- Combinações 4831 a 4860 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4831 | ADX + Rompe 200 | **+75% · −29,3%** | +45% · −14,4% | +28% | −9,1% | 1,6 | 0,71 → 1,32 | +20% | −0,02 |
> | 4832 | VWAP + Donchian + BB explosão + Rompe 200 + Onda | **+141% · −57,7%** | +42% · −12,1% | +28% | −13,2% | 1,1 | 0,82 → 1,10 | +20% | 0,32 |
> | 4833 | Donchian + BB explosão + Bollinger + Onda | **+200% · −52,2%** | +55% · −12,9% | +31% | −9,6% | 2,0 | 0,92 → 1,43 | +25% | 0,31 |
> | 4834 | VWAP + BB explosão + Quinta + Onda ⚠️ | **+81% · −41,4%** | +32% · −10,9% | +24% | −13,6% | 0,8 | 0,53 → 1,05 | +21% | 0,04 |
> | 4835 | ADX + BB explosão + Rompe 200 | **+101% · −51,5%** | +45% · −18,7% | +27% | −7,3% | 2,0 | 0,84 → 1,28 | +16% | 0,17 |
> | 4836 | BB explosão + GPS médias + Bollinger + Onda | **+170% · −55,0%** | +52% · −15,7% | +30% | −11,4% | 1,5 | 0,93 → 1,27 | +21% | 0,31 |
> | 4837 | BB explosão + GPS médias + MACD + Onda | **+140% · −51,8%** | +49% · −14,2% | +32% | −13,4% | 1,4 | 0,80 → 1,23 | +22% | 0,32 |
> | 4838 | ADX + Donchian + BB explosão + Onda | **+186% · −63,7%** | +60% · −18,3% | +35% | −8,1% | 2,7 | 0,79 → 1,46 | +27% | 0,30 |
> | 4839 | ADX + Donchian | **+148% · −41,5%** | +79% · −21,2% | +40% | −7,7% | 3,6 | 1,08 → 1,57 | +21% | 0,20 |
> | 4840 | Donchian + BB explosão + MACD + Onda | **+164% · −55,7%** | +52% · −13,4% | +33% | −11,5% | 1,7 | 0,79 → 1,34 | +28% | 0,40 |
> | 4841 | BB explosão + GPS médias + Rompe 200 + Onda | **+120% · −51,1%** | +43% · −14,0% | +28% | −12,2% | 1,2 | 0,90 → 1,07 | +22% | 0,27 |
> | 4842 | VWAP + Donchian + BB explosão + 1ª vela 80 ⚠️ | **+157% · −52,9%** | +50% · −15,2% | +31% | −14,2% | 1,3 | 1,02 → 1,23 | +17% | 0,36 |
> | 4843 | VWAP + BB explosão + GPS médias + Rompe 200 | **+99% · −57,0%** | +39% · −16,2% | +25% | −14,2% | 0,9 | 1,09 → 0,80 | +12% | 0,33 |
> | 4844 | VWAP + BB explosão + GPS médias + MACD + Onda | **+137% · −57,6%** | +44% · −13,7% | +29% | −16,0% | 1,0 | 0,76 → 1,13 | +25% | 0,36 |
> | 4845 | BB explosão + MACD + Bollinger + Onda | **+155% · −42,2%** | +45% · −10,5% | +29% | −11,1% | 1,5 | 0,64 → 1,46 | +17% | 0,29 |
> | 4846 | ADX + VWAP + MACD | **+111% · −44,4%** | +46% · −14,8% | +30% | −11,5% | 1,5 | 0,60 → 1,34 | +14% | 0,30 |
> | 4847 | VWAP + BB explosão + GPS médias + Bollinger | **+144% · −54,7%** | +47% · −15,7% | +28% | −14,3% | 1,0 | 1,13 → 1,00 | +15% | 0,42 |
> | 4848 | Donchian + BB explosão + Pôr do sol | **+116% · −43,4%** | +48% · −14,9% | +28% | −6,6% | 2,3 | 1,19 → 1,20 | +14% | 0,08 |
> | 4849 | ADX + Donchian + BB explosão | **+162% · −62,3%** | +66% · −24,5% | +36% | −8,2% | 2,8 | 1,04 → 1,40 | +19% | 0,41 |
> | 4850 | VWAP + BB explosão + GPS médias + MACD | **+118% · −57,6%** | +44% · −16,7% | +29% | −17,4% | 0,9 | 0,96 → 0,99 | +18% | 0,42 |
> | 4851 | VWAP + Donchian + BB explosão + MACD + Onda | **+159% · −59,9%** | +47% · −12,5% | +30% | −14,7% | 1,2 | 0,74 → 1,22 | +25% | 0,42 |
> | 4852 | VWAP + Pôr do sol | **+33% · −21,5%** | +23% · −9,2% | +19% | −15,2% | 0,4 | 0,55 → 0,67 | +8% | −0,06 |
> | 4853 | VWAP + BB explosão + MACD + Rompe 200 | **+84% · −46,3%** | +32% · −12,2% | +24% | −14,8% | 0,8 | 0,77 → 0,95 | +15% | 0,28 |
> | 4854 | ADX + VWAP + Donchian + BB explosão + GPS médias | **+186% · −72,8%** | +59% · −19,6% | +33% | −10,6% | 1,9 | 1,11 → 1,21 | +18% | 0,41 |
> | 4855 | ADX + VWAP + Donchian + BB explosão + Onda | **+178% · −68,7%** | +53% · −16,4% | +32% | −11,0% | 1,7 | 0,76 → 1,33 | +22% | 0,33 |
> | 4856 | VWAP + BB explosão + Pôr do sol + Bollinger | **+106% · −41,0%** | +35% · −10,2% | +23% | −10,5% | 0,9 | 0,91 → 1,09 | +15% | 0,15 |
> | 4857 | Donchian + BB explosão + Bollinger | **+165% · −46,0%** | +59% · −16,0% | +31% | −8,2% | 2,3 | 1,30 → 1,34 | +14% | 0,38 |
> | 4858 | BB explosão + GPS médias + Rompe 200 | **+94% · −48,6%** | +43% · −17,8% | +27% | −10,8% | 1,3 | 1,25 → 0,84 | +12% | 0,34 |
> | 4859 | BB explosão + Pôr do sol + Bollinger | **+94% · −33,5%** | +38% · −10,8% | +23% | −5,3% | 1,9 | 1,12 → 1,40 | +16% | −0,00 |
> | 4860 | VWAP + Bollinger | **+67% · −25,6%** | +39% · −12,8% | +24% | −17,4% | 0,6 | 0,82 → 0,99 | +13% | 0,50 |

> [!example]- Combinações 4861 a 4890 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4861 | VWAP + Donchian + BB explosão + Bollinger | **+168% · −52,7%** | +51% · −14,2% | +29% | −12,4% | 1,3 | 1,10 → 1,14 | +14% | 0,42 |
> | 4862 | VWAP + Donchian + BB explosão + Pôr do sol | **+120% · −53,0%** | +42% · −13,3% | +26% | −11,2% | 1,2 | 1,01 → 1,03 | +13% | 0,18 |
> | 4863 | VWAP + BB explosão + Pôr do sol + Onda | **+83% · −42,3%** | +33% · −11,0% | +24% | −13,8% | 0,8 | 0,48 → 1,07 | +20% | 0,10 |
> | 4864 | ADX + MACD | **+100% · −35,8%** | +56% · −17,7% | +35% | −11,8% | 1,9 | 0,60 → 1,58 | +19% | 0,17 |
> | 4865 | VWAP + BB explosão + Rompe 200 + Bollinger | **+104% · −42,7%** | +35% · −10,9% | +23% | −12,1% | 0,8 | 0,97 → 0,96 | +12% | 0,29 |
> | 4866 | ADX + VWAP + 1ª vela 80 ⚠️ | **+122% · −38,5%** | +49% · −12,9% | +31% | −10,0% | 1,8 | 0,65 → 1,52 | +15% | 0,25 |
> | 4867 | BB explosão + Rompe 200 + Bollinger | **+94% · −35,4%** | +38% · −11,7% | +23% | −7,5% | 1,4 | 1,18 → 1,14 | +12% | 0,20 |
> | 4868 | Donchian + BB explosão + Rompe 200 | **+114% · −50,2%** | +48% · −16,3% | +28% | −8,4% | 1,8 | 1,24 → 1,05 | +10% | 0,36 |
> | 4869 | ADX + Pullback | **+93% · −31,2%** | +52% · −14,8% | +32% | −8,7% | 2,2 | 1,24 → 1,48 | +16% | 0,01 |
> | 4870 | VWAP + Donchian | **+93% · −35,4%** | +53% · −17,2% | +31% | −17,0% | 1,1 | 1,02 → 0,96 | +14% | 0,42 |
> | 4871 | VWAP + BB explosão + GPS médias + Onda | **+111% · −56,7%** | +44% · −16,3% | +29% | −16,8% | 1,0 | 0,76 → 1,02 | +23% | 0,36 |
> | 4872 | VWAP + BB explosão + MACD + Bollinger | **+128% · −45,5%** | +40% · −12,5% | +26% | −15,0% | 0,9 | 0,82 → 1,16 | +18% | 0,42 |
> | 4873 | VWAP + BB explosão + Rompe 200 + Onda | **+81% · −44,1%** | +33% · −12,1% | +24% | −15,4% | 0,7 | 0,56 → 0,98 | +20% | 0,26 |
> | 4874 | Donchian + BB explosão + MACD | **+136% · −50,4%** | +55% · −18,4% | +33% | −12,1% | 1,7 | 1,04 → 1,23 | +18% | 0,51 |
> | 4875 | BB explosão + MACD + Bollinger | **+119% · −37,3%** | +45% · −12,6% | +28% | −11,0% | 1,4 | 0,93 → 1,38 | +20% | 0,35 |
> | 4876 | BB explosão + MACD + Rompe 200 | **+76% · −38,0%** | +35% · −12,6% | +25% | −10,7% | 1,1 | 0,86 → 1,09 | +16% | 0,19 |
> | 4877 | VWAP + Donchian + BB explosão + Rompe 200 | **+118% · −61,3%** | +42% · −15,1% | +27% | −12,5% | 1,1 | 1,06 → 0,93 | +11% | 0,36 |
> | 4878 | BB explosão + Quinta + Onda ⚠️ | **+74% · −35,5%** | +34% · −11,1% | +25% | −9,8% | 1,2 | 0,52 → 1,20 | +15% | −0,12 |
> | 4879 | BB explosão + GPS médias + MACD | **+115% · −49,9%** | +50% · −18,4% | +31% | −14,5% | 1,3 | 1,07 → 1,08 | +20% | 0,40 |
> | 4880 | ADX + VWAP + BB explosão + Quinta ⚠️ | **+108% · −58,5%** | +40% · −16,4% | +26% | −8,2% | 1,6 | 0,78 → 1,21 | +16% | 0,12 |
> | 4881 | VWAP + 1ª vela 80 ⚠️ | **+62% · −27,1%** | +37% · −13,7% | +27% | −18,8% | 0,8 | 0,62 → 1,17 | +16% | 0,36 |
> | 4882 | ADX + VWAP + Quinta ⚠️ | **+87% · −36,8%** | +39% · −11,3% | +26% | −7,3% | 1,8 | 0,69 → 1,27 | +11% | 0,02 |
> | 4883 | ADX + VWAP + BB explosão + Bollinger | **+156% · −60,1%** | +49% · −17,1% | +28% | −9,1% | 1,7 | 0,82 → 1,34 | +18% | 0,39 |
> | 4884 | ADX + VWAP + Pullback | **+106% · −40,4%** | +44% · −12,8% | +29% | −7,8% | 2,0 | 1,06 → 1,26 | +12% | 0,11 |
> | 4885 | VWAP + BB explosão + MACD + Onda | **+100% · −46,6%** | +38% · −13,1% | +28% | −17,2% | 0,9 | 0,49 → 1,15 | +21% | 0,37 |
> | 4886 | BB explosão + GPS médias + 1ª vela 80 ⚠️ | **+130% · −47,5%** | +53% · −17,7% | +32% | −12,4% | 1,5 | 1,16 → 1,21 | +21% | 0,31 |
> | 4887 | VWAP + Donchian + BB explosão + MACD | **+137% · −56,7%** | +47% · −16,0% | +30% | −15,6% | 1,1 | 0,93 → 1,10 | +16% | 0,49 |
> | 4888 | ADX + VWAP + BB explosão + Pôr do sol | **+110% · −57,7%** | +40% · −15,9% | +26% | −8,1% | 1,6 | 0,72 → 1,23 | +16% | 0,11 |
> | 4889 | BB explosão + Pôr do sol + Onda | **+76% · −36,6%** | +35% · −11,3% | +25% | −9,7% | 1,2 | 0,45 → 1,24 | +15% | −0,06 |
> | 4890 | ADX + VWAP + Donchian + BB explosão | **+160% · −67,4%** | +56% · −20,7% | +32% | −9,9% | 1,9 | 0,94 → 1,25 | +17% | 0,39 |

> [!example]- Combinações 4891 a 4920 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4891 | BB explosão + GPS médias + Onda | **+110% · −50,9%** | +50% · −18,9% | +31% | −14,2% | 1,3 | 0,80 → 1,10 | +22% | 0,34 |
> | 4892 | ADX + VWAP + Donchian | **+155% · −49,4%** | +60% · −17,0% | +34% | −8,8% | 2,4 | 0,95 → 1,33 | +15% | 0,28 |
> | 4893 | VWAP + Donchian + BB explosão + Onda | **+132% · −57,9%** | +48% · −14,6% | +30% | −15,2% | 1,1 | 0,74 → 1,13 | +22% | 0,41 |
> | 4894 | VWAP + BB explosão + GPS médias | **+91% · −54,7%** | +45% · −20,9% | +28% | −17,7% | 0,9 | 1,00 → 0,81 | +12% | 0,46 |
> | 4895 | VWAP + BB explosão + Bollinger + Onda | **+125% · −47,1%** | +41% · −12,5% | +26% | −14,8% | 0,9 | 0,59 → 1,19 | +21% | 0,35 |
> | 4896 | ADX + Quinta ⚠️ | **+74% · −27,5%** | +44% · −13,8% | +28% | −8,8% | 1,7 | 0,68 → 1,49 | +14% | 0,09 |
> | 4897 | ADX + BB explosão + Quinta ⚠️ | **+100% · −52,5%** | +44% · −19,2% | +27% | −7,3% | 2,0 | 0,84 → 1,38 | +18% | 0,09 |
> | 4898 | ADX + VWAP + BB explosão + Rompe 200 | **+107% · −57,4%** | +40% · −16,4% | +26% | −9,9% | 1,3 | 0,78 → 1,13 | +15% | 0,23 |
> | 4899 | ADX + BB explosão + MACD + Onda | **+151% · −59,2%** | +50% · −16,4% | +32% | −9,5% | 2,0 | 0,55 → 1,50 | +20% | 0,24 |
> | 4900 | BB explosão + GPS médias | **+85% · −46,6%** | +53% · −25,3% | +31% | −14,3% | 1,3 | 1,15 → 0,86 | +13% | 0,60 |
> | 4901 | BB explosão + Bollinger + Onda | **+118% · −40,1%** | +46% · −13,6% | +28% | −11,0% | 1,4 | 0,59 → 1,39 | +15% | 0,24 |
> | 4902 | ADX + VWAP + Onda | **+107% · −42,6%** | +46% · −13,6% | +30% | −12,5% | 1,4 | 0,39 → 1,34 | +15% | 0,22 |
> | 4903 | Donchian + BB explosão + Onda | **+132% · −53,8%** | +55% · −16,6% | +33% | −11,8% | 1,7 | 0,79 → 1,26 | +26% | 0,40 |
> | 4904 | ADX + VWAP + BB explosão + MACD | **+128% · −63,3%** | +45% · −18,7% | +29% | −11,7% | 1,4 | 0,69 → 1,28 | +20% | 0,35 |
> | 4905 | VWAP + BB explosão + Pôr do sol | **+57% · −38,1%** | +29% · −12,8% | +22% | −13,0% | 0,7 | 0,69 → 0,82 | +12% | 0,05 |
> | 4906 | 1ª vela 80 + Onda ⚠️ | **+80% · −24,2%** | +45% · −11,3% | +32% | −13,8% | 1,4 | 0,34 → 1,55 | +8% | 0,26 |
> | 4907 | ADX + VWAP + GPS médias | **+134% · −48,2%** | +56% · −17,2% | +32% | −11,1% | 1,8 | 0,98 → 1,19 | +22% | 0,30 |
> | 4908 | ADX + BB explosão + Rompe 200 + Onda | **+129% · −52,7%** | +44% · −13,6% | +28% | −8,1% | 1,9 | 0,61 → 1,38 | +20% | 0,16 |
> | 4909 | VWAP + Onda | **+52% · −27,6%** | +34% · −14,1% | +26% | −21,5% | 0,6 | 0,27 → 1,00 | +15% | 0,36 |
> | 4910 | VWAP + BB explosão + Quinta ⚠️ | **+55% · −41,9%** | +29% · −13,5% | +22% | −12,8% | 0,7 | 0,78 → 0,78 | +10% | 0,02 |
> | 4911 | VWAP + BB explosão + Bollinger | **+94% · −42,5%** | +40% · −15,0% | +25% | −14,5% | 0,8 | 0,84 → 0,99 | +12% | 0,44 |
> | 4912 | ADX + VWAP + Pôr do sol | **+89% · −38,7%** | +39% · −11,4% | +25% | −7,5% | 1,7 | 0,61 → 1,30 | +10% | 0,03 |
> | 4913 | VWAP + Donchian + BB explosão | **+108% · −58,5%** | +49% · −19,9% | +30% | −15,3% | 1,1 | 0,97 → 0,96 | +10% | 0,53 |
> | 4914 | ADX + BB explosão + MACD | **+124% · −57,9%** | +52% · −22,1% | +32% | −9,4% | 2,1 | 0,72 → 1,45 | +24% | 0,29 |
> | 4915 | ADX + BB explosão + Pôr do sol | **+103% · −51,5%** | +45% · −18,6% | +27% | −6,8% | 2,1 | 0,75 → 1,43 | +20% | 0,00 |
> | 4916 | BB explosão + 1ª vela 80 + Onda ⚠️ | **+108% · −42,0%** | +44% · −13,3% | +30% | −12,7% | 1,4 | 0,52 → 1,43 | +12% | 0,19 |
> | 4917 | VWAP + BB explosão + Onda | **+73% · −44,6%** | +36% · −15,0% | +26% | −18,6% | 0,7 | 0,43 → 1,01 | +21% | 0,36 |
> | 4918 | VWAP + BB explosão + Rompe 200 | **+56% · −48,4%** | +30% · −15,2% | +22% | −15,2% | 0,6 | 0,78 → 0,69 | +8% | 0,27 |
> | 4919 | ADX + VWAP + BB explosão + 1ª vela 80 ⚠️ | **+143% · −57,0%** | +47% · −15,4% | +30% | −10,7% | 1,6 | 0,74 → 1,41 | +20% | 0,28 |
> | 4920 | BB explosão + Rompe 200 + Onda | **+74% · −40,4%** | +35% · −12,4% | +25% | −12,0% | 1,0 | 0,55 → 1,09 | +16% | 0,19 |

> [!example]- Combinações 4921 a 4943 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda | Sharpe treino → teste | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|
> | 4921 | VWAP + BB explosão + MACD | **+75% · −45,4%** | +36% · −16,0% | +26% | −18,6% | 0,7 | 0,65 → 0,98 | +16% | 0,44 |
> | 4922 | ADX + Pôr do sol | **+76% · −31,0%** | +45% · −13,7% | +27% | −8,2% | 1,8 | 0,57 → 1,56 | +12% | −0,07 |
> | 4923 | BB explosão + MACD + Onda | **+96% · −42,4%** | +42% · −12,8% | +30% | −13,9% | 1,2 | 0,48 → 1,30 | +16% | 0,29 |
> | 4924 | Donchian + BB explosão | **+104% · −48,0%** | +61% · −25,2% | +34% | −10,5% | 2,0 | 1,13 → 1,10 | +10% | 0,67 |
> | 4925 | ADX + Onda | **+97% · −33,6%** | +56% · −16,1% | +35% | −12,1% | 1,8 | 0,32 → 1,53 | +18% | 0,06 |
> | 4926 | ADX + VWAP + BB explosão + Onda | **+121% · −61,5%** | +46% · −17,5% | +29% | −12,5% | 1,3 | 0,51 → 1,28 | +20% | 0,29 |
> | 4927 | ADX + BB explosão + Onda | **+118% · −55,7%** | +52% · −20,5% | +32% | −9,3% | 2,1 | 0,49 → 1,42 | +19% | 0,22 |
> | 4928 | BB explosão + 1ª vela 80 ⚠️ | **+77% · −33,0%** | +45% · −16,0% | +30% | −11,8% | 1,4 | 0,82 → 1,36 | +15% | 0,09 |
> | 4929 | BB explosão + MACD | **+67% · −37,8%** | +41% · −19,5% | +29% | −14,7% | 1,1 | 0,70 → 1,14 | +19% | 0,32 |
> | 4930 | BB explosão + Quinta ⚠️ | **+46% · −31,5%** | +30% · −15,7% | +22% | −6,4% | 1,4 | 0,96 → 0,90 | +10% | −0,19 |
> | 4931 | BB explosão + Bollinger | **+83% · −35,2%** | +47% · −18,2% | +26% | −8,6% | 1,5 | 1,02 → 1,24 | +13% | 0,34 |
> | 4932 | BB explosão + Pôr do sol | **+47% · −29,2%** | +31% · −14,3% | +22% | −6,2% | 1,4 | 0,81 → 0,99 | +12% | −0,29 |
> | 4933 | BB explosão + Rompe 200 | **+47% · −34,3%** | +31% · −17,0% | +22% | −9,8% | 0,9 | 0,90 → 0,73 | +7% | 0,17 |
> | 4934 | VWAP + BB explosão | **+48% · −44,1%** | +33% · −21,8% | +24% | −19,9% | 0,5 | 0,61 → 0,71 | +7% | 0,49 |
> | 4935 | ADX + VWAP + BB explosão | **+98% · −60,2%** | +46% · −23,5% | +29% | −11,3% | 1,4 | 0,66 → 1,16 | +16% | 0,36 |
> | 4936 | ADX + BB explosão | **+91% · −54,5%** | +56% · −30,5% | +32% | −10,8% | 1,8 | 0,68 → 1,32 | +19% | 0,36 |
> | 4937 | 1ª vela 80 ⚠️ | **+47% · −13,6%** | +47% · −13,6% | +32% | −12,8% | 1,5 | 0,59 → 1,47 | +9% | — |
> | 4938 | ADX + VWAP | **+78% · −39,9%** | +48% · −20,3% | +30% | −12,3% | 1,4 | 0,54 → 1,20 | +8% | 0,22 |
> | 4939 | VWAP | **+25% · −19,7%** | +25% · −19,7% | +21% | −30,3% | 0,3 | 0,42 → 0,49 | +4% | — |
> | 4940 | BB explosão + Onda | **+66% · −41,1%** | +41% · −19,7% | +29% | −14,9% | 1,1 | 0,38 → 1,14 | +13% | 0,22 |
> | 4941 | Onda | **+41% · −19,8%** | +41% · −19,8% | +30% | −18,7% | 0,9 | 0,11 → 1,19 | +5% | — |
> | 4942 | ADX | **+65% · −30,8%** | +65% · −30,8% | +38% | −15,4% | 1,6 | 0,45 → 1,41 | +12% | — |
> | 4943 | BB explosão | **+39% · −33,3%** | +39% · −33,3% | +26% | −14,0% | 0,9 | 0,68 → 0,79 | +3% | — |

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

*Com 1 contrato por R\$ 10 mil (capital dividido). Todos = os 15 setups juntos · Recomendada = Pôr do sol + Pullback + Bollinger · Rec. 1% = a recomendada arriscando 1% por operação.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** | **Média/ano** | **R\$ 10.000 viraram** |
|---|---|---|---|---|---|---|---|---|---|
| **⭐ Rec. 1%** | +19,2% | +112,5% | +51,2% | +86,8% | +144,1% | +33,9% | **+2238,0%** | +89,0% | R\$ 233.803 |
| **⭐ Recomendada** | +5,1% | +26,8% | +18,1% | +18,4% | +26,0% | +17,0% | **+174,7%** | +22,6% | R\$ 27.474 |
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
| *Quem ganhou* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *GPS médias* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *Tendência* | *⭐ Rec. 1%* | | |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ⭐ Rec. 1% | ⭐ Recomendada | Todos | CDI | Ibovespa |
> |---|---|---|---|---|---|
> | nov/2021 | +8,8% | +2,3% | −1,1% | +0,6% | −3,4% |
> | dez/2021 | +9,5% | +2,7% | −1,0% | +0,7% | +2,9% |
> | jan/2022 | +14,5% | +2,9% | +2,4% | +0,7% | +7,0% |
> | fev/2022 | +9,1% | +2,2% | −2,3% | +0,8% | +0,9% |
> | mar/2022 | +9,5% | +2,3% | +5,8% | +0,9% | +6,1% |
> | abr/2022 | +11,7% | +2,2% | +3,0% | +0,8% | −10,1% |
> | mai/2022 | +1,6% | +1,3% | +0,5% | +1,0% | +3,2% |
> | jun/2022 | +5,2% | +2,1% | −0,2% | +1,0% | −11,5% |
> | jul/2022 | +3,6% | +1,5% | −4,0% | +1,0% | +4,7% |
> | ago/2022 | +13,5% | +2,9% | +12,3% | +1,2% | +6,2% |
> | set/2022 | +2,4% | +1,6% | +2,3% | +1,1% | +0,5% |
> | out/2022 | +5,1% | +1,8% | +5,7% | +1,0% | +5,5% |
> | nov/2022 | +7,3% | +2,8% | +3,8% | +1,0% | −3,1% |
> | dez/2022 | −4,2% | +0,1% | +5,9% | +1,1% | −2,4% |
> | jan/2023 | +16,7% | +3,6% | +4,7% | +1,1% | +3,4% |
> | fev/2023 | +2,3% | +1,1% | +6,1% | +0,9% | −7,5% |
> | mar/2023 | +3,2% | +1,7% | +0,9% | +1,2% | −2,9% |
> | abr/2023 | −6,2% | −0,3% | +1,8% | +0,9% | +2,5% |
> | mai/2023 | +3,6% | +1,8% | +4,1% | +1,1% | +3,7% |
> | jun/2023 | +11,9% | +2,2% | +0,1% | +1,1% | +9,0% |
> | jul/2023 | +1,1% | +0,8% | +1,3% | +1,1% | +3,3% |
> | ago/2023 | −2,1% | +0,7% | +1,5% | +1,1% | −5,1% |
> | set/2023 | +9,3% | +1,7% | −1,2% | +1,0% | +0,7% |
> | out/2023 | +3,3% | +1,5% | +1,4% | +1,0% | −2,9% |
> | nov/2023 | +5,1% | +1,5% | +3,8% | +0,9% | +12,5% |
> | dez/2023 | −3,9% | +0,3% | −0,3% | +0,9% | +5,4% |
> | jan/2024 | +12,6% | +2,4% | +3,3% | +1,0% | −4,8% |
> | fev/2024 | +3,6% | +1,1% | +5,3% | +0,8% | +1,0% |
> | mar/2024 | +1,8% | +1,2% | +0,2% | +0,8% | −0,7% |
> | abr/2024 | +4,7% | +1,4% | −0,2% | +0,9% | −1,7% |
> | mai/2024 | +0,4% | +0,8% | −2,1% | +0,8% | −3,0% |
> | jun/2024 | +7,5% | +1,8% | +0,4% | +0,8% | +1,5% |
> | jul/2024 | +3,8% | +1,2% | −0,7% | +0,9% | +3,0% |
> | ago/2024 | +9,6% | +1,7% | +4,0% | +0,9% | +6,5% |
> | set/2024 | +14,6% | +2,9% | +1,7% | +0,8% | −3,1% |
> | out/2024 | +1,6% | +0,8% | −1,1% | +0,9% | −1,6% |
> | nov/2024 | −0,5% | +0,4% | +0,3% | +0,8% | −3,1% |
> | dez/2024 | +5,5% | +1,6% | +5,8% | +0,8% | −4,3% |
> | jan/2025 | +9,6% | +2,2% | +5,8% | +1,0% | +4,9% |
> | fev/2025 | +9,0% | +2,3% | +3,2% | +1,0% | −2,6% |
> | mar/2025 | +11,1% | +1,7% | +7,0% | +1,0% | +6,1% |
> | abr/2025 | −2,8% | +0,3% | −3,5% | +1,1% | +3,7% |
> | mai/2025 | +15,5% | +3,1% | +8,0% | +1,1% | +1,5% |
> | jun/2025 | +5,0% | +1,9% | +1,2% | +1,1% | +1,3% |
> | jul/2025 | +7,2% | +2,1% | +3,0% | +1,3% | −4,2% |
> | ago/2025 | +18,1% | +2,9% | +6,7% | +1,2% | +6,3% |
> | set/2025 | +1,8% | +1,3% | +0,5% | +1,2% | +3,4% |
> | out/2025 | +12,1% | +2,9% | +1,4% | +1,3% | +2,3% |
> | nov/2025 | +1,2% | +0,8% | +6,0% | +1,1% | +6,4% |
> | dez/2025 | +6,7% | +1,9% | −2,8% | +1,1% | +1,3% |
> | jan/2026 | +6,8% | +1,6% | +6,2% | +1,2% | +12,6% |
> | fev/2026 | −2,5% | −0,3% | −1,1% | +1,0% | +4,1% |
> | mar/2026 | +3,4% | +2,3% | +2,3% | +1,2% | −0,7% |
> | abr/2026 | +17,3% | +4,6% | +10,3% | +1,1% | −0,1% |
> | mai/2026 | −4,2% | −0,1% | +3,3% | +1,1% | −7,2% |
> | jun/2026 | +0,2% | +1,4% | +0,8% | +1,1% | −1,0% |
> | jul/2026 | −1,3% | +0,7% | +7,4% | +1,2% | +3,5% |
> | ago/2026 | +8,0% | +2,9% | +5,7% | +1,1% | −0,3% |
> | set/2026 | +4,8% | +2,3% | +1,8% | +1,1% | +5,0% |
> | out/2026 | −1,1% | +0,7% | −1,2% | +1,0% | −9,9% |
> | **Acumulado** | **+2238,0%** | **+174,7%** | **+310,3%** | **+81,6%** | **+59,1%** |
>
> *Cada setup tem o mês a mês dele na própria página — aqui ficam só as carteiras, para a tabela caber na tela.*

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = Pôr do sol + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **Todos ⚠️** = os 15 setups com 1% cada: até 15% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** | **Média/ano** | **R\$ 10.000 viraram** |
|---|---|---|---|---|---|---|---|---|---|
| **⭐ Recomendada** | +19,2% | +112,5% | +51,2% | +86,8% | +144,1% | +33,9% | **+2238,0%** | +89,0% | R\$ 233.803 |
| **⭐ Recomendada ÷** | +7,1% | +39,8% | +25,1% | +32,7% | +48,3% | +19,0% | **+338,5%** | +34,8% | R\$ 43.853 |
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
| *Quem ganhou* | *⭐ Recomendada* | *Todos ⚠️* | *GPS médias* | *Onda* | *Todos ⚠️* | *Todos ⚠️* | *Todos ⚠️* | | |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

> [!example]- Mês a mês arriscando 1% por operação (clique para abrir)
> | Mês | ⭐ Recomendada | ⭐ Recomendada ÷ | Todos ÷ | CDI | Ibovespa |
> |---|---|---|---|---|---|
> | nov/2021 | +8,8% | +3,4% | −1,3% | +0,6% | −3,4% |
> | dez/2021 | +9,5% | +3,7% | −4,3% | +0,7% | +2,9% |
> | jan/2022 | +14,5% | +5,3% | +5,2% | +0,7% | +7,0% |
> | fev/2022 | +9,1% | +3,5% | −6,1% | +0,8% | +0,9% |
> | mar/2022 | +9,5% | +3,8% | +10,4% | +0,9% | +6,1% |
> | abr/2022 | +11,7% | +4,4% | +4,9% | +0,8% | −10,1% |
> | mai/2022 | +1,6% | +1,2% | +1,1% | +1,0% | +3,2% |
> | jun/2022 | +5,2% | +2,4% | −2,2% | +1,0% | −11,5% |
> | jul/2022 | +3,6% | +2,0% | −9,5% | +1,0% | +4,7% |
> | ago/2022 | +13,5% | +5,2% | +28,4% | +1,2% | +6,2% |
> | set/2022 | +2,4% | +1,5% | +2,7% | +1,1% | +0,5% |
> | out/2022 | +5,1% | +2,4% | +9,9% | +1,0% | +5,5% |
> | nov/2022 | +7,3% | +3,1% | +4,2% | +1,0% | −3,1% |
> | dez/2022 | −4,2% | −0,7% | +10,5% | +1,1% | −2,4% |
> | jan/2023 | +16,7% | +6,2% | +6,7% | +1,1% | +3,4% |
> | fev/2023 | +2,3% | +1,4% | +12,2% | +0,9% | −7,5% |
> | mar/2023 | +3,2% | +1,9% | +0,8% | +1,2% | −2,9% |
> | abr/2023 | −6,2% | −1,5% | +5,4% | +0,9% | +2,5% |
> | mai/2023 | +3,6% | +2,0% | +9,2% | +1,1% | +3,7% |
> | jun/2023 | +11,9% | +4,6% | −1,3% | +1,1% | +9,0% |
> | jul/2023 | +1,1% | +1,1% | +1,5% | +1,1% | +3,3% |
> | ago/2023 | −2,1% | +0,1% | +2,6% | +1,1% | −5,1% |
> | set/2023 | +9,3% | +3,7% | −4,3% | +1,0% | +0,7% |
> | out/2023 | +3,3% | +1,8% | +1,1% | +1,0% | −2,9% |
> | nov/2023 | +5,1% | +2,3% | +7,4% | +0,9% | +12,5% |
> | dez/2023 | −3,9% | −0,7% | −0,9% | +0,9% | +5,4% |
> | jan/2024 | +12,6% | +4,8% | +5,1% | +1,0% | −4,8% |
> | fev/2024 | +3,6% | +1,8% | +11,8% | +0,8% | +1,0% |
> | mar/2024 | +1,8% | +1,2% | −0,2% | +0,8% | −0,7% |
> | abr/2024 | +4,7% | +2,2% | +0,0% | +0,9% | −1,7% |
> | mai/2024 | +0,4% | +0,7% | −6,7% | +0,8% | −3,0% |
> | jun/2024 | +7,5% | +3,0% | −0,4% | +0,8% | +1,5% |
> | jul/2024 | +3,8% | +1,9% | −1,7% | +0,9% | +3,0% |
> | ago/2024 | +9,6% | +3,8% | +8,4% | +0,9% | +6,5% |
> | set/2024 | +14,6% | +5,3% | +2,9% | +0,8% | −3,1% |
> | out/2024 | +1,6% | +1,2% | −3,1% | +0,9% | −1,6% |
> | nov/2024 | −0,5% | +0,4% | −0,3% | +0,8% | −3,1% |
> | dez/2024 | +5,5% | +2,4% | +10,8% | +0,8% | −4,3% |
> | jan/2025 | +9,6% | +3,9% | +12,1% | +1,0% | +4,9% |
> | fev/2025 | +9,0% | +3,7% | +5,5% | +1,0% | −2,6% |
> | mar/2025 | +11,1% | +4,4% | +14,6% | +1,0% | +6,1% |
> | abr/2025 | −2,8% | −0,2% | −5,5% | +1,1% | +3,7% |
> | mai/2025 | +15,5% | +5,8% | +17,1% | +1,1% | +1,5% |
> | jun/2025 | +5,0% | +2,4% | +2,1% | +1,1% | +1,3% |
> | jul/2025 | +7,2% | +3,3% | +5,1% | +1,3% | −4,2% |
> | ago/2025 | +18,1% | +6,6% | +11,6% | +1,2% | +6,3% |
> | set/2025 | +1,8% | +1,4% | −0,1% | +1,2% | +3,4% |
> | out/2025 | +12,1% | +4,8% | +1,5% | +1,3% | +2,3% |
> | nov/2025 | +1,2% | +1,1% | +12,3% | +1,1% | +6,4% |
> | dez/2025 | +6,7% | +3,0% | −4,8% | +1,1% | +1,3% |
> | jan/2026 | +6,8% | +3,1% | +11,4% | +1,2% | +12,6% |
> | fev/2026 | −2,5% | −0,2% | −3,1% | +1,0% | +4,1% |
> | mar/2026 | +3,4% | +2,0% | +2,1% | +1,2% | −0,7% |
> | abr/2026 | +17,3% | +6,3% | +13,6% | +1,1% | −0,1% |
> | mai/2026 | −4,2% | −0,7% | +4,3% | +1,1% | −7,2% |
> | jun/2026 | +0,2% | +0,8% | +0,2% | +1,1% | −1,0% |
> | jul/2026 | −1,3% | +0,4% | +12,0% | +1,2% | +3,5% |
> | ago/2026 | +8,0% | +3,4% | +6,7% | +1,1% | −0,3% |
> | set/2026 | +4,8% | +2,4% | +4,9% | +1,1% | +5,0% |
> | out/2026 | −1,1% | +0,3% | +0,9% | +1,0% | −9,9% |
> | **Acumulado** | **+2238,0%** | **+338,5%** | **+881,8%** | **+81,6%** | **+59,1%** |
>
> *Cada setup tem o mês a mês dele na própria página.*

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**Pôr do Sol (17h45) + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,20% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,20% | +23% | −2% | −3% | −5% |
| Risco fixo de 0,5% por operação | 0,50% | +47% | −4% | −8% | −13% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+89%** | **−9%** | −15% | −23% |
| Risco fixo de 2% por operação | 2,00% | +200% | −19% | −28% | −42% |
| Kelly ¼ | 3,53% | +545% | −36% | −54% | −71% |
| Kelly ½ | 7,07% | +1612% | −62% | −82% | −95% |
| Kelly cheio | 14,13% | +1762% | −90% | −99% | −100% |
| Larry Williams 2,5% | 1,73% | +154% | −17% | −25% | −37% |
| Larry Williams 5% | 3,45% | +393% | −33% | −45% | −62% |
| Larry Williams 10% | 6,91% | +1181% | −57% | −72% | −88% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros). **Sorteio:** a ordem das operações foi embaralhada 2.000 vezes — a queda de verdade depende da sorte na sequência, e a ordem real foi das mais favoráveis. Planeje pela queda do sorteio, não pela real.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: Pôr do Sol (17h45) 10,3% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
- **Larry Williams:** no campeonato de 1987 ele usou o Kelly como fração do capital ÷ **margem** por contrato — a conta foi de US\$ 10 mil a ~US\$ 2,1 milhões, caiu para ~US\$ 700 mil e terminou o ano em ~US\$ 1,1 milhão. Depois ele passou a usar **contratos = capital × risco% ÷ maior perda já vista por contrato**, com ~5% (cauteloso), 10–12% (moderado) e 15–18% (agressivo). Esses percentuais eram para poucas operações por ano; estes setups operam muitas vezes por mês e a maior perda deles é ~1,4 vezes o stop típico, então **Larry com 2,5% ≈ arriscar 1,7% por operação** — perto do tamanho sugerido.

### Calculadora de contratos (risco de 1% por operação)

**contratos = capital × 1% ÷ ((stop em pts + 15) × R\$ 0,20)** — arredonde para baixo. Calcule para cada setup, a cada operação, com o capital do momento (assim a posição cresce quando ganha e diminui quando perde).

| Setup | Stop hoje | Risco por contrato | R\$ 10.000 | R\$ 20.000 | R\$ 50.000 | R\$ 100.000 | R\$ 200.000 |
|---|---|---|---|---|---|---|---|
| ADX da Manhã | 255 pts | R\$ 54 | 1,8 | 3,7 | 9,2 | 18,5 | 37,0 |
| Bandas de VWAP | 892 pts | R\$ 181 | 0,6 | 1,1 | 2,8 | 5,5 | 11,0 |
| Donchian com Médias | 446 pts | R\$ 92 | 1,1 | 2,2 | 5,4 | 10,8 | 21,7 |
| Explosão da Bollinger | 446 pts | R\$ 92 | 1,1 | 2,2 | 5,4 | 10,8 | 21,7 |
| GPS de Médias | 446 pts | R\$ 92 | 1,1 | 2,2 | 5,4 | 10,8 | 21,7 |
| IFR de Tendência | 341 pts | R\$ 71 | 1,4 | 2,8 | 7,0 | 14,1 | 28,1 |
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
