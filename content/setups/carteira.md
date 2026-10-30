---
title: Carteira de setups
date: 2026-10-30
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 30/10/2026 20:55 BRT · dados de 01/11/2021 a 30/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 15 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 41.030** (+33% ao ano · pior queda −11% · Sharpe 1,17)
> - CDI: **R\$ 18.156** (+13% ao ano) · Ibovespa: **R\$ 15.909** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 38.885, +32% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.149.641, +161% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Dobrando o risco (2% dividido em vez de 1%): R\$ 313.074, +100% ao ano, pior queda −11%** — contra +52% ao ano e queda −5% com 1%. O site continua recomendando 1%; o 2% está aí só para você ver os números.
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+0,7%** em 4 pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| # | Setup | Sharpe | Retorno ÷ queda | Dias no vermelho | Teste ÷ treino | Meses > CDI | Correlação | Op./mês |
|---|---|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) ·ADX | 1,60 | 3,1 | 69 d | 150% | 72% | 0,23 | 12,7 |
| 2º | [**Bollinger**](rompimento-da-bollinger) ·ADX | 1,61 | 2,2 | 84 d | 150% | 65% | 0,22 | 4,2 |
| 3º | [**Donchian**](donchian-com-medias) ·ADX | 1,30 | 2,0 | 188 d | 102% | 67% | 0,27 | 21,5 |
| 4º | [**1ª vela 80**](primeira-vela-80-min) ·PRI | 1,12 | 1,1 | 298 d | 150% | 63% | 0,11 | 7,8 |
| 5º | [**ADX**](adx-da-manha) ·ADX | 1,03 | 1,3 | 198 d | 150% | 63% | 0,19 | 29,4 |
| 6º | [**Pôr do sol**](por-do-sol) ·POR | 1,11 | 0,6 | 328 d | 150% | 65% | −0,06 | 8,2 |
| 7º | [**Tendência**](tendencia-forte-do-dia) ·ADX | 1,33 | 1,8 | 206 d | 90% | 60% | 0,29 | 28,8 |
| 8º | [**MACD**](macd-na-tendencia) ·ADX | 0,94 | 0,9 | 256 d | 150% | 63% | 0,25 | 14,7 |
| 9º | [**GPS médias**](gps-de-medias) ·ADX | 1,07 | 1,3 | 205 d | 62% | 65% | 0,24 | 20,1 |
| 10º | [**Pullback**](pullback-na-media) ·PUL | 1,20 | 1,8 | 204 d | 28% | 60% | −0,04 | 5,0 |
| 11º | [**Onda**](vai-na-onda) ·VAI | 0,73 | 0,6 | 471 d | 150% | 57% | 0,16 | 19,4 |
| 12º | [**BB explosão**](explosao-da-bollinger) ·ADX | 0,74 | 0,6 | 273 d | 139% | 58% | 0,27 | 19,7 |
| 13º | [**VWAP**](bandas-de-vwap) ·ADX | 0,46 | 0,2 | 511 d | 146% | 57% | 0,26 | 25,6 |
| 14º | [**Quinta**](primeira-vela-de-quinta) ·PR2 | 0,88 | 0,5 | 179 d | 62% | 50% | −0,11 | 1,8 |
| 15º | [**Rompe 200**](rompe-media-200) ·ROM | 0,43 | 0,2 | 187 d | 23% | 45% | 0,13 | 3,4 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| # | Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|---|
| 1º | [**IFR**](ifr-de-tendencia) | +43% | **+68%** | −9% | **−11%** | 4 op · +0,46R |
| 2º | [**Bollinger**](rompimento-da-bollinger) | +26% | **+52%** | −5% | **−7%** | sem operações |
| 3º | [**Donchian**](donchian-com-medias) | +42% | **+83%** | −12% | **−24%** | 4 op · +1,26R |
| 4º | [**1ª vela 80**](primeira-vela-80-min) | +32% | **+47%** | −16% | **−14%** | 3 op · +0,91R |
| 5º | [**ADX**](adx-da-manha) | +38% | **+65%** | −17% | **−31%** | 8 op · +0,15R |
| 6º | [**Pôr do sol**](por-do-sol) | +17% | **+20%** | −6% | **−3%** | 1 op · +0,17R |
| 7º | [**Tendência**](tendencia-forte-do-dia) | +48% | **+72%** | −18% | **−24%** | 3 op · +2,14R |
| 8º | [**MACD**](macd-na-tendencia) | +31% | **+40%** | −18% | **−11%** | 4 op · +0,48R |
| 9º | [**GPS médias**](gps-de-medias) | +36% | **+67%** | −17% | **−23%** | 4 op · +2,41R |
| 10º | [**Pullback**](pullback-na-media) | +25% | **+32%** | −6% | **−9%** | sem operações |
| 11º | [**Onda**](vai-na-onda) | +30% | **+41%** | −26% | **−20%** | 3 op · +0,54R |
| 12º | [**BB explosão**](explosao-da-bollinger) | +26% | **+39%** | −20% | **−33%** | 3 op · +2,54R |
| 13º | [**VWAP**](bandas-de-vwap) | +21% | **+25%** | −31% | **−20%** | 10 op · −0,52R |
| 14º | [**Quinta**](primeira-vela-de-quinta) | +17% | **+18%** | −7% | **−3%** | sem operações |
| 15º | [**Rompe 200**](rompe-media-200) | +17% | **+20%** | −16% | **−10%** | sem operações |

- **IFR de Tendência:** entra na força medida pelo IFR · 10h–11h e 14h–16h
- **Rompimento da Bollinger:** rompimento da banda de Bollinger a favor da tendência · 10h15–11h e 14h–17h30
- **Donchian com Médias:** rompimento de canal a favor da tendência · 10h às 16h
- **Primeira Vela de 80 Minutos:** força da primeira vela do dia, alvo longo com stop móvel · entra 10h20
- **ADX da Manhã:** pega o começo da tendência (ADX subindo), stop curto · 10h–11h
- **Pôr do Sol (17h45):** scalp no fim do pregão, a favor do dia · 17h50 às 18h10
- **Tendência Forte do Dia:** segue a tendência já formada (rompimento longe da abertura) · o dia todo, até 17h
- **MACD na Tendência:** tendência do dia confirmada pelo MACD, com break even · 9h–11h30 e 14h–16h
- **GPS de Médias:** tendência com alvo longo e stop curto · 10h–11h e 14h–16h
- **Pullback na Média:** entra na volta da correção até a média · 10h30–12h30 e 14h45–15h45
- **Vai na Onda:** segue o fluxo: 3 velas a favor renovando o extremo do dia com volume · 9h45–16h
- **Explosão da Bollinger:** rompimento de volatilidade a favor da tendência · 10h às 16h (zera às 17h)
- **Bandas de VWAP:** rompimento da banda de VWAP a favor da média de 200 · 10h às 16h
- **Primeira Vela de Quinta:** rompimento da primeira vela do dia (dia da semana escolhido) · 9h15
- **Rompimento da Média de 200:** rompimento de média longa com alvo longo · 9h às 16h

*Correlação = com os outros setups (baixa é bom para a carteira). Como o ranking é feito: cada setup ganha uma posição em 4 critérios — **Sharpe** (retorno acima do CDI por oscilação), **retorno acima do CDI ÷ pior queda** (quanto rende para cada 1% de queda que você aguenta), **teste ÷ treino** (quanto do resultado por operação de 2021–2023 se manteve em 2024 em diante; 100% = manteve tudo) e **meses acima do CDI**. Vale a média das 4 posições. Correlação baixa com os outros é bom para a carteira, mas não entra na nota de cada setup.*

### Taxa de acerto, payoff e expectativa

Os mesmos setups vistos por operação, não por ano. [Ver todas as operações, uma a uma](operacoes).

| | Operações | Taxa de acerto | Ganho médio | Perda média | Payoff | Expectativa (pts) | Expectativa (R) | Lucro total | Lucro total (R\$, 1 contrato) |
|---|---|---|---|---|---|---|---|---|---|
| ⭐ **Recomendada** (IFR + Pullback + Bollinger) | 1334 | 34,6% | 754 pts | 265 pts | 2,84 | **86,9 pts** | +0,34 R | 115.970 pts | R\$ 23.194 |
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
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | **+161% · −17,1%** | +52% · −5,1% | +32% · −2,6% | 2,34 → 2,12 |
| 📈 Maior retorno | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% · −16,1% | 1,58 → 1,20 |
| 🛡️ Menor queda | Pôr do sol + Pullback + Bollinger | **+89% · −9,1%** | +35% · −2,5% | +23% · −1,6% | 2,30 → 1,89 |

*R\$ 10 mil viraram, na recomendada: R\$ 38.885 com 1 contrato por R\$ 10 mil · R\$ 78.636 com 1% dividido entre os setups · **R\$ 1.149.641 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · VWAP = Bandas de VWAP · Donchian = Donchian com Médias · BB explosão = Explosão da Bollinger · GPS médias = GPS de Médias · MACD = MACD na Tendência · Pôr do sol = Pôr do Sol (17h45) · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Rompe 200 = Rompimento da Média de 200 · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*


**1% × 2% do capital: o que muda**

| Risco total | Por operação | Ao ano | Pior queda | Dias no vermelho | Pior 60 dias | R\$ 10.000 viraram |
|---|---|---|---|---|---|---|
| **1% (recomendado)** | 0,33% | +52% | −5% | 43 d | +1% | R\$ 78.636 |
| 2% (o dobro) | 0,67% | +100% | −11% | 55 d | −2% | R\$ 313.074 |

*Dobrar o risco quase dobra o retorno e quase dobra a queda, mas **não encurta o tempo no vermelho** — esse depende da sequência de acertos e erros, não do tamanho. A validação andando para frente (recalibrando de 6 em 6 meses só com o passado) indicou que esta carteira suporta algo perto de 2%, mas com apenas 7 semestres fora da amostra e nenhum estouro observado a amostra é pequena: zero estouros em 3,5 anos é compatível com uma chance real bem maior que zero. Por isso a recomendação segue 1%.*
**Por que a recomendada é IFR de Tendência + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios de SOBREVIVÊNCIA ao mesmo tempo, medidos **só no treino** (até 2023) e **sem o CDI na conta** (o CDI preenche as quedas pequenas e esconde a diferença entre as carteiras) — rende 7,0× ao ano para cada 1% de pior queda, passou no máximo 34 dias seguidos no vermelho e a pior janela de 60 dias foi de −1%. Fora do treino ela entregou +53% ao ano (Sharpe 2,12), com 1% dividido. O critério é de sequência, não de oscilação: o que quebra uma conta não é um dia ruim, é uma sequência ruim — e o Sharpe não distingue as duas coisas. A correlação média entre os setups dela é 0,00: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, Bandas de VWAP, Donchian com Médias, Explosão da Bollinger, GPS de Médias, MACD na Tendência, Pôr do Sol (17h45), Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Rompimento da Média de 200, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios de **sobrevivência**, medidos **só no treino** (até 2023) e **sem o CDI** na conta de risco: **retorno ÷ pior queda**, **dias seguidos no vermelho** (menos é melhor) e a **pior janela de 60 dias**. O que quebra uma conta não é um dia ruim, é uma sequência ruim — e o Sharpe, que era o critério antigo, não distingue as duas coisas.

| # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+173% · −17,1%** | +43% · −3,5% | +28% | −1,6% | 7,2 | 34 d | −0,8% | +20% | −0,01 |
| 2 | IFR ·ADX + Pullback ·PUL + Bollinger ·ADX ⭐ | **+161% · −17,1%** | +52% · −5,1% | +32% | −2,6% | 7,0 | 34 d | −1,4% | +22% | 0,00 |
| 3 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+189% · −21,4%** | +38% · −3,0% | +26% | −1,9% | 6,1 | 34 d | −0,9% | +18% | 0,05 |
| 4 | IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+175% · −21,4%** | +43% · −4,5% | +28% | −3,1% | 5,9 | 34 d | −0,9% | +19% | 0,09 |
| 5 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+191% · −21,5%** | +38% · −3,2% | +26% | −2,0% | 5,7 | 34 d | −1,1% | +19% | 0,03 |
| 6 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+190% · −17,3%** | +38% · −2,5% | +25% | −1,2% | 7,0 | 39 d | −0,9% | +20% | −0,01 |
| 7 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+226% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 6,1 | 37 d | −1,1% | +23% | 0,04 |
| 8 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+230% · −32,6%** | +46% · −6,1% | +31% | −6,0% | 6,5 | 37 d | −1,5% | +23% | 0,03 |
| 9 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+176% · −17,2%** | +43% · −3,5% | +28% | −1,6% | 6,7 | 39 d | −1,3% | +21% | −0,04 |
| 10 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+248% · −20,5%** | +44% · −3,3% | +29% | −2,1% | 6,7 | 40 d | −1,0% | +23% | −0,04 |
| 11 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+211% · −25,7%** | +49% · −5,6% | +32% | −4,8% | 5,9 | 37 d | −1,6% | +24% | 0,11 |
| 12 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+251% · −20,5%** | +45% · −3,2% | +29% | −2,1% | 6,3 | 40 d | −1,0% | +22% | −0,01 |
| 13 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+287% · −33,2%** | +49% · −6,0% | +32% | −4,4% | 5,6 | 30 d | −1,8% | +21% | 0,06 |
| 14 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+197% · −30,6%** | +42% · −5,2% | +28% | −3,5% | 6,1 | 39 d | −1,5% | +18% | 0,06 |
| 15 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+184% · −28,0%** | +47% · −5,6% | +31% | −3,7% | 6,9 | 39 d | −1,8% | +20% | −0,02 |
| 16 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+227% · −29,7%** | +43% · −5,2% | +29% | −4,5% | 5,2 | 34 d | −0,9% | +22% | 0,13 |
| 17 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+200% · −24,7%** | +42% · −4,0% | +28% | −2,6% | 6,5 | 39 d | −1,8% | +20% | −0,03 |
| 18 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+229% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 5,8 | 39 d | −1,4% | +22% | 0,04 |
| 19 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+361% · −35,7%** | +56% · −6,7% | +35% | −5,0% | 5,4 | 31 d | −1,8% | +25% | 0,09 |
| 20 | Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+48% · −19,8%** | +24% · −6,2% | +20% | −3,1% | 5,0 | 36 d | −0,5% | +13% | 0,04 |
| 21 | IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+134% · −17,4%** | +46% · −4,8% | +28% | −2,9% | 6,3 | 37 d | −2,2% | +22% | 0,05 |
| 22 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+196% · −27,5%** | +48% · −6,1% | +34% | −4,9% | 5,5 | 42 d | −0,6% | +20% | 0,02 |
| 23 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+200% · −28,5%** | +42% · −5,0% | +28% | −3,5% | 5,6 | 39 d | −1,6% | +19% | 0,05 |
| 24 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+130% · −16,2%** | +36% · −2,8% | +25% | −3,4% | 5,5 | 36 d | −1,9% | +21% | 0,00 |
| 25 | IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+148% · −21,0%** | +39% · −4,2% | +26% | −2,8% | 5,6 | 34 d | −2,2% | +20% | 0,09 |
| 26 | IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+269% · −33,2%** | +57% · −8,0% | +36% | −5,9% | 5,5 | 36 d | −2,0% | +22% | 0,13 |
| 27 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+271% · −30,2%** | +48% · −5,2% | +34% | −4,2% | 5,3 | 36 d | −1,7% | +24% | −0,04 |
| 28 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+232% · −32,1%** | +47% · −6,0% | +31% | −6,0% | 6,0 | 38 d | −2,2% | +24% | 0,03 |
| 29 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+213% · −27,6%** | +42% · −4,7% | +30% | −3,6% | 5,3 | 42 d | −0,9% | +20% | 0,02 |
| 30 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+290% · −33,3%** | +49% · −6,0% | +32% | −4,4% | 5,4 | 36 d | −2,0% | +22% | 0,06 |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+10%* | *−20,9%* | — | — | — | — | — | — | — |

> [!example]- Combinações 31 a 60 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 31 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+180% · −25,6%** | +45% · −5,5% | +29% | −5,5% | 5,1 | 33 d | −1,8% | +23% | 0,14 |
> | 32 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+187% · −25,9%** | +48% · −5,4% | +31% | −3,7% | 6,4 | 39 d | −2,4% | +21% | −0,03 |
> | 33 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+325% · −40,4%** | +54% · −8,1% | +35% | −6,9% | 5,1 | 36 d | −1,8% | +25% | 0,20 |
> | 34 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+118% · −15,6%** | +35% · −3,3% | +26% | −2,2% | 6,0 | 54 d | +0,1% | +17% | 0,03 |
> | 35 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+163% · −21,1%** | +35% · −3,0% | +24% | −2,2% | 5,5 | 37 d | −2,2% | +20% | 0,06 |
> | 36 | IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+182% · −27,9%** | +58% · −8,7% | +39% | −7,2% | 5,4 | 50 d | −0,6% | +21% | 0,10 |
> | 37 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+283% · −43,4%** | +53% · −8,3% | +34% | −4,4% | 7,0 | 53 d | −1,8% | +21% | 0,07 |
> | 38 | IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+107% · −15,3%** | +40% · −4,4% | +28% | −3,3% | 5,7 | 54 d | −0,2% | +17% | 0,09 |
> | 39 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+178% · −25,5%** | +37% · −4,3% | +27% | −2,5% | 5,7 | 42 d | −2,1% | +21% | −0,02 |
> | 40 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+232% · −20,4%** | +51% · −4,4% | +32% | −3,1% | 6,5 | 54 d | −1,5% | +25% | 0,01 |
> | 41 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+275% · −30,2%** | +49% · −5,2% | +33% | −4,2% | 5,1 | 36 d | −2,0% | +25% | 0,01 |
> | 42 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+222% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 5,0 | 34 d | −2,0% | +27% | 0,02 |
> | 43 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+254% · −30,1%** | +56% · −6,9% | +38% | −5,7% | 5,2 | 36 d | −2,1% | +25% | 0,02 |
> | 44 | IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+286% · −36,8%** | +50% · −7,0% | +32% | −5,6% | 5,0 | 36 d | −2,0% | +19% | 0,15 |
> | 45 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+244% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 4,9 | 41 d | −0,6% | +23% | 0,08 |
> | 46 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+303% · −28,9%** | +52% · −5,0% | +31% | −3,2% | 6,3 | 47 d | −2,3% | +19% | 0,14 |
> | 47 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+250% · −24,3%** | +45% · −3,9% | +29% | −3,1% | 5,6 | 54 d | −0,8% | +22% | 0,08 |
> | 48 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+196% · −25,4%** | +40% · −4,0% | +27% | −4,1% | 5,0 | 37 d | −1,9% | +21% | 0,09 |
> | 49 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+225% · −28,9%** | +44% · −5,4% | +29% | −3,1% | 6,4 | 47 d | −2,4% | +17% | 0,07 |
> | 50 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+271% · −35,4%** | +49% · −6,7% | +34% | −5,4% | 4,8 | 36 d | −1,8% | +22% | 0,09 |
> | 51 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+131% · −15,7%** | +32% · −2,8% | +24% | −1,7% | 5,9 | 56 d | +0,0% | +18% | 0,02 |
> | 52 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+148% · −19,4%** | +40% · −4,4% | +29% | −3,6% | 5,6 | 54 d | −1,2% | +22% | −0,02 |
> | 53 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+291% · −28,5%** | +49% · −4,9% | +32% | −5,6% | 5,7 | 54 d | −1,6% | +25% | 0,10 |
> | 54 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+307% · −37,6%** | +53% · −7,2% | +37% | −6,7% | 4,8 | 35 d | −1,9% | +28% | 0,12 |
> | 55 | Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+98% · −16,5%** | +31% · −3,3% | +21% | −1,9% | 5,4 | 53 d | −1,6% | +15% | 0,03 |
> | 56 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+195% · −29,3%** | +40% · −5,0% | +27% | −5,0% | 4,7 | 33 d | −1,9% | +23% | 0,13 |
> | 57 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+213% · −22,5%** | +42% · −3,4% | +30% | −4,6% | 5,4 | 44 d | −2,2% | +24% | −0,04 |
> | 58 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+210% · −31,4%** | +42% · −5,5% | +30% | −4,8% | 5,0 | 50 d | −0,8% | +18% | 0,08 |
> | 59 | Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+109% · −23,8%** | +41% · −7,0% | +30% | −4,9% | 4,6 | 36 d | −1,3% | +17% | −0,02 |
> | 60 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+286% · −41,7%** | +53% · −7,7% | +34% | −4,4% | 7,0 | 55 d | −1,9% | +22% | 0,07 |

> [!example]- Combinações 61 a 90 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 61 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+161% · −23,7%** | +36% · −3,8% | +27% | −3,7% | 5,2 | 54 d | −0,0% | +21% | 0,04 |
> | 62 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+193% · −24,7%** | +39% · −4,2% | +27% | −2,9% | 4,9 | 32 d | −2,5% | +19% | 0,03 |
> | 63 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+280% · −46,3%** | +53% · −9,2% | +34% | −5,7% | 6,3 | 53 d | −2,4% | +19% | 0,20 |
> | 64 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+228% · −35,3%** | +54% · −8,6% | +37% | −8,1% | 4,8 | 49 d | −0,6% | +25% | 0,19 |
> | 65 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+120% · −14,8%** | +35% · −3,3% | +25% | −1,9% | 5,6 | 56 d | −0,3% | +18% | 0,01 |
> | 66 | Pullback ·PUL + Tendência ·ADX | **+99% · −25,6%** | +53% · −12,0% | +37% | −7,6% | 4,6 | 35 d | −1,5% | +16% | 0,01 |
> | 67 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+198% · −29,3%** | +40% · −5,1% | +27% | −5,0% | 4,7 | 33 d | −2,1% | +23% | 0,13 |
> | 68 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+269% · −29,9%** | +49% · −5,5% | +30% | −3,6% | 6,2 | 54 d | −2,1% | +21% | 0,04 |
> | 69 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+110% · −16,2%** | +29% · −2,3% | +20% | −1,6% | 5,3 | 53 d | −1,7% | +16% | 0,01 |
> | 70 | Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+176% · −24,6%** | +44% · −5,2% | +29% | −3,8% | 5,0 | 35 d | −2,6% | +18% | 0,03 |
> | 71 | IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+196% · −31,4%** | +48% · −7,4% | +34% | −6,5% | 4,9 | 50 d | −0,8% | +19% | 0,15 |
> | 72 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+198% · −27,6%** | +48% · −6,1% | +33% | −5,0% | 5,2 | 54 d | −0,9% | +21% | 0,03 |
> | 73 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+240% · −29,8%** | +45% · −5,1% | +32% | −4,1% | 4,9 | 39 d | −2,0% | +26% | 0,04 |
> | 74 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+160% · −25,8%** | +44% · −6,0% | +28% | −4,4% | 5,4 | 41 d | −2,5% | +23% | 0,02 |
> | 75 | IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+136% · −19,9%** | +47% · −6,4% | +34% | −5,3% | 5,6 | 54 d | −1,9% | +25% | 0,03 |
> | 76 | IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+136% · −21,0%** | +47% · −6,3% | +28% | −4,5% | 5,0 | 37 d | −2,5% | +21% | 0,21 |
> | 77 | IFR ·ADX + Bollinger ·ADX | **+123% · −16,6%** | +61% · −7,7% | +34% | −4,8% | 5,6 | 37 d | −3,0% | +26% | 0,24 |
> | 78 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+247% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 4,8 | 50 d | −0,9% | +24% | 0,10 |
> | 79 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+149% · −23,7%** | +40% · −5,2% | +29% | −5,1% | 5,0 | 54 d | −0,4% | +22% | 0,10 |
> | 80 | IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+150% · −21,1%** | +40% · −4,2% | +25% | −3,0% | 4,9 | 37 d | −2,4% | +21% | 0,08 |
> | 81 | Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+87% · −8,2%** | +34% · −2,4% | +23% | −1,6% | 7,0 | 57 d | −1,8% | +17% | −0,02 |
> | 82 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+198% · −20,9%** | +47% · −4,4% | +30% | −3,7% | 5,6 | 54 d | −2,0% | +24% | 0,03 |
> | 83 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+173% · −28,1%** | +39% · −5,2% | +26% | −4,1% | 4,8 | 41 d | −2,0% | +20% | 0,06 |
> | 84 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+228% · −36,0%** | +47% · −6,6% | +31% | −6,9% | 5,7 | 54 d | −2,1% | +22% | 0,15 |
> | 85 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+202% · −33,8%** | +43% · −6,5% | +29% | −6,5% | 5,1 | 37 d | −2,8% | +26% | 0,07 |
> | 86 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+241% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 4,6 | 38 d | −1,8% | +28% | 0,04 |
> | 87 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+273% · −29,9%** | +49% · −5,5% | +30% | −3,6% | 5,9 | 54 d | −2,3% | +22% | 0,03 |
> | 88 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+213% · −31,4%** | +42% · −5,6% | +30% | −4,9% | 4,8 | 50 d | −1,1% | +19% | 0,08 |
> | 89 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+316% · −38,2%** | +56% · −8,1% | +35% | −4,8% | 5,9 | 38 d | −3,3% | +21% | 0,11 |
> | 90 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+171% · −29,1%** | +58% · −8,8% | +35% | −5,4% | 6,3 | 39 d | −3,3% | +21% | 0,07 |

> [!example]- Combinações 91 a 120 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 91 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+163% · −23,7%** | +36% · −3,9% | +27% | −3,7% | 4,9 | 54 d | −1,0% | +22% | 0,03 |
> | 92 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+209% · −28,3%** | +51% · −7,2% | +32% | −3,8% | 6,1 | 47 d | −3,0% | +17% | 0,17 |
> | 93 | IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+234% · −32,8%** | +53% · −7,8% | +34% | −5,8% | 5,3 | 31 d | −3,3% | +23% | 0,14 |
> | 94 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+121% · −21,2%** | +35% · −4,9% | +27% | −3,5% | 4,6 | 45 d | −1,5% | +18% | 0,01 |
> | 95 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+165% · −24,6%** | +42% · −5,5% | +30% | −3,1% | 5,5 | 50 d | −2,6% | +22% | 0,04 |
> | 96 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+228% · −32,6%** | +44% · −5,8% | +30% | −5,2% | 4,6 | 34 d | −2,3% | +22% | 0,08 |
> | 97 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+106% · −12,8%** | +39% · −3,5% | +28% | −2,0% | 6,9 | 60 d | −1,7% | +19% | −0,09 |
> | 98 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+215% · −33,6%** | +54% · −7,9% | +34% | −7,9% | 6,2 | 54 d | −2,6% | +25% | 0,13 |
> | 99 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+184% · −31,6%** | +48% · −6,8% | +31% | −4,8% | 5,8 | 54 d | −2,5% | +19% | 0,16 |
> | 100 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+101% · −16,0%** | +31% · −3,2% | +21% | −1,9% | 5,0 | 53 d | −1,9% | +16% | −0,01 |
> | 101 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+265% · −44,3%** | +62% · −11,2% | +39% | −6,0% | 6,8 | 53 d | −3,0% | +22% | 0,18 |
> | 102 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+238% · −33,5%** | +45% · −6,1% | +32% | −5,3% | 4,5 | 38 d | −1,8% | +23% | 0,08 |
> | 103 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+199% · −22,4%** | +48% · −4,6% | +33% | −6,1% | 5,4 | 49 d | −2,7% | +26% | 0,03 |
> | 104 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+243% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 4,5 | 38 d | −1,6% | +27% | 0,08 |
> | 105 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+145% · −20,6%** | +33% · −2,9% | +23% | −3,4% | 4,4 | 37 d | −1,6% | +20% | 0,01 |
> | 106 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+143% · −20,5%** | +33% · −2,8% | +23% | −3,5% | 4,7 | 53 d | −1,4% | +19% | 0,03 |
> | 107 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+225% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 4,7 | 39 d | −2,3% | +28% | 0,12 |
> | 108 | Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+111% · −22,5%** | +41% · −7,0% | +30% | −4,5% | 4,5 | 39 d | −1,7% | +18% | −0,02 |
> | 109 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+214% · −26,5%** | +42% · −4,3% | +30% | −5,5% | 4,9 | 49 d | −2,2% | +25% | 0,08 |
> | 110 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+311% · −47,5%** | +58% · −9,5% | +37% | −6,9% | 6,0 | 53 d | −3,0% | +25% | 0,22 |
> | 111 | Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+179% · −24,6%** | +44% · −5,4% | +29% | −3,9% | 4,8 | 35 d | −2,9% | +19% | 0,02 |
> | 112 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+250% · −29,1%** | +45% · −4,9% | +30% | −3,3% | 4,9 | 50 d | −2,3% | +22% | −0,01 |
> | 113 | IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+207% · −29,7%** | +64% · −9,6% | +42% | −8,0% | 4,8 | 36 d | −2,9% | +30% | 0,20 |
> | 114 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+271% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 4,5 | 39 d | −1,9% | +29% | 0,12 |
> | 115 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+243% · −38,7%** | +47% · −7,6% | +33% | −7,3% | 4,5 | 49 d | −0,8% | +22% | 0,18 |
> | 116 | IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+323% · −40,6%** | +55% · −8,0% | +35% | −7,0% | 4,7 | 38 d | −2,6% | +29% | 0,16 |
> | 117 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+162% · −19,5%** | +36% · −3,2% | +27% | −2,9% | 4,8 | 56 d | −0,7% | +20% | −0,01 |
> | 118 | IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+167% · −25,4%** | +54% · −7,9% | +33% | −7,8% | 4,5 | 33 d | −2,6% | +26% | 0,35 |
> | 119 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+252% · −29,5%** | +46% · −5,4% | +30% | −6,1% | 4,8 | 54 d | −1,8% | +23% | 0,12 |
> | 120 | Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+89% · −9,1%** | +35% · −2,5% | +23% | −1,6% | 6,2 | 62 d | −1,8% | +18% | −0,08 |

> [!example]- Combinações 121 a 150 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 121 | MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+212% · −32,6%** | +50% · −7,9% | +33% | −7,0% | 4,4 | 32 d | −2,6% | +23% | 0,17 |
> | 122 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+150% · −19,5%** | +40% · −4,4% | +29% | −3,6% | 4,8 | 56 d | −1,3% | +21% | −0,02 |
> | 123 | IFR ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+225% · −35,5%** | +54% · −8,6% | +37% | −8,2% | 4,5 | 38 d | −2,5% | +31% | 0,16 |
> | 124 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+230% · −32,7%** | +44% · −5,9% | +30% | −5,3% | 4,4 | 35 d | −2,5% | +23% | 0,08 |
> | 125 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+164% · −30,1%** | +37% · −5,6% | +28% | −4,5% | 4,2 | 35 d | −1,4% | +21% | 0,03 |
> | 126 | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+89% · −16,3%** | +35% · −4,8% | +23% | −2,7% | 5,1 | 57 d | −1,8% | +15% | 0,06 |
> | 127 | IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+169% · −30,9%** | +44% · −7,2% | +31% | −6,4% | 4,6 | 47 d | −2,1% | +20% | 0,13 |
> | 128 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+133% · −29,5%** | +32% · −5,4% | +25% | −3,2% | 4,2 | 35 d | −1,6% | +16% | 0,03 |
> | 129 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+253% · −37,5%** | +50% · −6,2% | +32% | −4,3% | 6,0 | 55 d | −2,9% | +23% | 0,09 |
> | 130 | IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+251% · −36,4%** | +46% · −6,9% | +30% | −5,5% | 4,8 | 38 d | −3,0% | +21% | 0,14 |
> | 131 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+346% · −43,6%** | +60% · −8,9% | +38% | −5,0% | 5,5 | 54 d | −2,9% | +25% | 0,11 |
> | 132 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+185% · −31,0%** | +39% · −5,4% | +28% | −4,7% | 4,5 | 46 d | −2,1% | +20% | 0,10 |
> | 133 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+164% · −16,4%** | +42% · −3,3% | +30% | −2,2% | 6,8 | 60 d | −2,6% | +23% | −0,14 |
> | 134 | 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+234% · −28,8%** | +52% · −6,5% | +33% | −4,6% | 4,8 | 50 d | −2,6% | +23% | 0,05 |
> | 135 | Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+120% · −29,8%** | +36% · −7,0% | +27% | −4,5% | 4,1 | 35 d | −1,4% | +15% | 0,04 |
> | 136 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+150% · −31,4%** | +41% · −7,6% | +31% | −6,1% | 4,1 | 35 d | −1,2% | +21% | 0,03 |
> | 137 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+144% · −16,2%** | +33% · −2,1% | +23% | −2,4% | 5,4 | 62 d | −1,4% | +19% | 0,00 |
> | 138 | IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+156% · −27,0%** | +53% · −8,5% | +36% | −7,0% | 5,1 | 40 d | −3,3% | +23% | 0,10 |
> | 139 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+157% · −27,0%** | +37% · −4,8% | +26% | −4,9% | 5,4 | 56 d | −2,5% | +22% | −0,05 |
> | 140 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+179% · −16,5%** | +37% · −2,7% | +27% | −1,6% | 6,6 | 62 d | −2,4% | +21% | −0,07 |
> | 141 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+98% · −9,1%** | +31% · −1,9% | +21% | −1,3% | 6,7 | 64 d | −1,6% | +17% | −0,01 |
> | 142 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+253% · −27,3%** | +45% · −4,8% | +30% | −3,3% | 4,7 | 50 d | −2,5% | +23% | 0,02 |
> | 143 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+139% · −18,8%** | +38% · −3,8% | +27% | −3,6% | 4,5 | 41 d | −2,4% | +24% | 0,02 |
> | 144 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+318% · −35,3%** | +52% · −6,6% | +33% | −4,9% | 5,2 | 54 d | −2,8% | +26% | 0,09 |
> | 145 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+216% · −20,8%** | +41% · −3,2% | +27% | −2,6% | 5,4 | 60 d | −2,1% | +21% | 0,04 |
> | 146 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+241% · −33,5%** | +46% · −6,1% | +32% | −5,3% | 4,3 | 41 d | −2,0% | +25% | 0,13 |
> | 147 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+194% · −28,7%** | +39% · −4,9% | +27% | −4,0% | 4,4 | 35 d | −2,7% | +18% | 0,05 |
> | 148 | IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+181% · −29,3%** | +45% · −6,8% | +29% | −6,6% | 4,3 | 38 d | −2,1% | +25% | 0,25 |
> | 149 | IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+254% · −36,5%** | +46% · −7,0% | +30% | −5,6% | 4,6 | 35 d | −3,2% | +22% | 0,15 |
> | 150 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+301% · −37,8%** | +54% · −7,2% | +37% | −6,8% | 4,5 | 39 d | −2,8% | +31% | 0,11 |

> [!example]- Combinações 151 a 180 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 151 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+251% · −41,2%** | +50% · −7,4% | +32% | −5,6% | 5,6 | 54 d | −3,3% | +22% | 0,18 |
> | 152 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+256% · −35,8%** | +49% · −7,6% | +32% | −5,3% | 5,3 | 57 d | −2,6% | +21% | 0,19 |
> | 153 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+132% · −16,2%** | +37% · −3,1% | +25% | −3,5% | 5,0 | 62 d | −1,6% | +20% | −0,01 |
> | 154 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+199% · −35,9%** | +43% · −7,1% | +29% | −7,4% | 4,9 | 54 d | −2,8% | +23% | 0,14 |
> | 155 | Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+191% · −28,7%** | +39% · −4,8% | +27% | −3,9% | 4,6 | 51 d | −2,5% | +17% | 0,06 |
> | 156 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+254% · −32,9%** | +46% · −5,9% | +30% | −4,3% | 5,1 | 54 d | −3,0% | +23% | 0,10 |
> | 157 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+171% · −27,1%** | +44% · −6,0% | +31% | −4,8% | 5,0 | 58 d | −2,1% | +23% | 0,09 |
> | 158 | IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+239% · −38,9%** | +47% · −7,5% | +33% | −7,4% | 4,2 | 46 d | −1,6% | +26% | 0,18 |
> | 159 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+309% · −43,0%** | +56% · −8,8% | +35% | −6,0% | 5,5 | 44 d | −3,7% | +18% | 0,23 |
> | 160 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+252% · −35,9%** | +50% · −7,0% | +32% | −5,3% | 5,0 | 45 d | −3,4% | +25% | 0,18 |
> | 161 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+122% · −29,0%** | +36% · −6,8% | +27% | −4,5% | 4,0 | 35 d | −1,7% | +16% | 0,03 |
> | 162 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+313% · −39,9%** | +55% · −8,1% | +35% | −4,8% | 6,0 | 36 d | −4,1% | +20% | 0,10 |
> | 163 | Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+110% · −29,6%** | +42% · −9,7% | +30% | −6,6% | 4,0 | 35 d | −1,6% | +15% | 0,11 |
> | 164 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+291% · −35,0%** | +50% · −6,5% | +33% | −5,8% | 4,4 | 50 d | −2,3% | +26% | 0,13 |
> | 165 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+232% · −41,5%** | +48% · −7,7% | +32% | −5,3% | 5,6 | 54 d | −3,5% | +23% | 0,06 |
> | 166 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+322% · −35,3%** | +53% · −6,6% | +33% | −4,9% | 4,9 | 54 d | −3,0% | +27% | 0,15 |
> | 167 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+287% · −40,0%** | +51% · −7,9% | +33% | −6,8% | 4,8 | 54 d | −2,8% | +26% | 0,21 |
> | 168 | MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+119% · −16,1%** | +42% · −4,5% | +28% | −5,4% | 5,2 | 57 d | −2,8% | +23% | 0,05 |
> | 169 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+269% · −28,6%** | +49% · −5,3% | +29% | −4,0% | 4,7 | 37 d | −3,4% | +21% | 0,12 |
> | 170 | Pullback ·PUL + Bollinger ·ADX | **+78% · −8,6%** | +43% · −4,0% | +26% | −2,1% | 5,7 | 57 d | −3,1% | +17% | −0,05 |
> | 171 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+202% · −37,1%** | +43% · −6,8% | +29% | −3,0% | 6,5 | 63 d | −2,8% | +19% | −0,01 |
> | 172 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+181% · −24,7%** | +38% · −4,1% | +27% | −2,2% | 5,4 | 62 d | −2,4% | +22% | 0,01 |
> | 173 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+152% · −31,3%** | +41% · −7,5% | +31% | −6,1% | 4,0 | 38 d | −1,5% | +23% | 0,04 |
> | 174 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+279% · −43,2%** | +55% · −7,8% | +35% | −6,9% | 5,2 | 38 d | −3,8% | +27% | 0,23 |
> | 175 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+166% · −16,4%** | +42% · −3,2% | +30% | −2,1% | 6,3 | 62 d | −3,0% | +22% | −0,08 |
> | 176 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+248% · −42,4%** | +50% · −7,8% | +32% | −5,5% | 5,5 | 54 d | −3,5% | +21% | 0,17 |
> | 177 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+198% · −34,8%** | +50% · −8,5% | +35% | −7,9% | 4,5 | 40 d | −3,1% | +26% | 0,20 |
> | 178 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+256% · −29,5%** | +46% · −5,3% | +30% | −6,1% | 4,4 | 54 d | −1,9% | +23% | 0,16 |
> | 179 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+156% · −25,0%** | +34% · −4,3% | +24% | −2,6% | 5,2 | 62 d | −2,4% | +20% | −0,00 |
> | 180 | IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+299% · −35,2%** | +62% · −8,6% | +38% | −6,5% | 5,1 | 54 d | −3,3% | +29% | 0,24 |

> [!example]- Combinações 181 a 210 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 181 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+306% · −37,5%** | +54% · −7,6% | +33% | −7,0% | 5,4 | 54 d | −3,5% | +25% | 0,17 |
> | 182 | IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+171% · −31,0%** | +45% · −7,3% | +31% | −6,4% | 4,4 | 50 d | −2,4% | +21% | 0,15 |
> | 183 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+254% · −37,2%** | +58% · −9,3% | +39% | −8,7% | 4,4 | 39 d | −2,8% | +32% | 0,31 |
> | 184 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+356% · −42,2%** | +58% · −8,6% | +37% | −7,4% | 4,7 | 54 d | −2,8% | +30% | 0,31 |
> | 185 | IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+222% · −33,4%** | +53% · −8,0% | +35% | −7,1% | 4,4 | 54 d | −2,1% | +25% | 0,21 |
> | 186 | IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+286% · −43,2%** | +51% · −9,0% | +33% | −8,0% | 4,4 | 38 d | −3,0% | +25% | 0,30 |
> | 187 | 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+251% · −35,5%** | +46% · −6,8% | +30% | −4,6% | 4,4 | 53 d | −2,5% | +21% | 0,08 |
> | 188 | MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+138% · −32,6%** | +49% · −11,0% | +35% | −8,7% | 4,0 | 38 d | −1,7% | +23% | 0,13 |
> | 189 | IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+235% · −36,4%** | +54% · −9,1% | +34% | −7,4% | 4,7 | 38 d | −3,5% | +22% | 0,26 |
> | 190 | MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+132% · −20,5%** | +37% · −4,1% | +25% | −4,8% | 4,5 | 57 d | −1,6% | +20% | 0,07 |
> | 191 | IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+219% · −32,8%** | +66% · −11,0% | +39% | −8,3% | 5,2 | 35 d | −4,1% | +25% | 0,33 |
> | 192 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+368% · −42,1%** | +61% · −7,7% | +36% | −5,2% | 6,3 | 54 d | −3,8% | +22% | 0,19 |
> | 193 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+338% · −33,7%** | +57% · −6,4% | +34% | −4,6% | 4,8 | 45 d | −3,5% | +26% | 0,15 |
> | 194 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+212% · −38,3%** | +44% · −7,4% | +31% | −7,2% | 4,2 | 48 d | −2,1% | +23% | 0,17 |
> | 195 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+406% · −40,0%** | +63% · −7,9% | +37% | −5,6% | 6,1 | 33 d | −4,5% | +21% | 0,20 |
> | 196 | IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+287% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 4,5 | 38 d | −3,4% | +29% | 0,12 |
> | 197 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+152% · −16,3%** | +50% · −4,7% | +34% | −3,0% | 6,5 | 61 d | −3,4% | +26% | −0,13 |
> | 198 | IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+318% · −38,7%** | +53% · −7,6% | +33% | −6,1% | 4,6 | 54 d | −3,0% | +25% | 0,21 |
> | 199 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+193% · −23,0%** | +39% · −3,6% | +27% | −4,8% | 5,0 | 63 d | −2,5% | +23% | −0,01 |
> | 200 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+381% · −45,8%** | +61% · −9,5% | +37% | −6,3% | 4,5 | 57 d | −2,2% | +25% | 0,19 |
> | 201 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+162% · −30,9%** | +37% · −6,3% | +28% | −5,7% | 3,8 | 35 d | −1,3% | +19% | 0,06 |
> | 202 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+254% · −31,9%** | +46% · −5,9% | +30% | −7,0% | 4,2 | 54 d | −1,8% | +24% | 0,23 |
> | 203 | IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+238% · −32,8%** | +53% · −7,9% | +33% | −5,8% | 5,0 | 54 d | −3,5% | +24% | 0,16 |
> | 204 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+338% · −45,4%** | +58% · −9,3% | +35% | −6,2% | 4,2 | 55 d | −1,8% | +26% | 0,20 |
> | 205 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+216% · −22,5%** | +42% · −3,5% | +30% | −4,6% | 4,7 | 60 d | −2,5% | +23% | 0,00 |
> | 206 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+198% · −42,5%** | +43% · −8,7% | +29% | −4,0% | 6,0 | 63 d | −3,3% | +17% | 0,06 |
> | 207 | IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+158% · −27,1%** | +53% · −8,6% | +36% | −7,1% | 4,8 | 61 d | −2,6% | +25% | 0,16 |
> | 208 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+182% · −25,4%** | +45% · −5,5% | +29% | −5,5% | 4,8 | 61 d | −2,6% | +22% | 0,15 |
> | 209 | Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+299% · −40,0%** | +53% · −7,9% | +32% | −5,2% | 5,2 | 36 d | −4,3% | +17% | 0,17 |
> | 210 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+185% · −33,8%** | +49% · −8,5% | +32% | −8,5% | 4,8 | 54 d | −3,4% | +27% | 0,13 |

> [!example]- Combinações 211 a 240 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 211 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+236% · −29,5%** | +53% · −7,0% | +33% | −8,0% | 4,4 | 54 d | −2,7% | +24% | 0,28 |
> | 212 | IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+269% · −40,0%** | +59% · −10,3% | +37% | −8,9% | 4,7 | 54 d | −3,3% | +28% | 0,40 |
> | 213 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+229% · −43,2%** | +47% · −8,2% | +32% | −5,3% | 6,0 | 63 d | −3,4% | +22% | 0,06 |
> | 214 | IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+87% · −14,3%** | +35% · −3,6% | +25% | −3,1% | 4,0 | 53 d | −0,6% | +19% | 0,08 |
> | 215 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+292% · −39,5%** | +55% · −7,1% | +33% | −4,4% | 5,7 | 57 d | −3,7% | +21% | 0,06 |
> | 216 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+156% · −15,3%** | +34% · −2,5% | +24% | −1,3% | 5,4 | 64 d | −2,7% | +20% | −0,03 |
> | 217 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+226% · −32,1%** | +47% · −5,9% | +31% | −5,3% | 5,2 | 39 d | −4,2% | +26% | 0,03 |
> | 218 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+201% · −40,6%** | +43% · −8,2% | +29% | −4,0% | 5,7 | 63 d | −3,4% | +18% | 0,05 |
> | 219 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+153% · −34,8%** | +36% · −6,1% | +26% | −2,6% | 4,8 | 49 d | −3,8% | +16% | −0,03 |
> | 220 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+253% · −33,3%** | +49% · −6,3% | +32% | −4,2% | 4,5 | 45 d | −3,6% | +24% | 0,03 |
> | 221 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+270% · −40,5%** | +50% · −8,1% | +35% | −7,8% | 4,1 | 54 d | −1,8% | +27% | 0,26 |
> | 222 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+267% · −37,4%** | +50% · −7,1% | +35% | −6,7% | 4,1 | 46 d | −2,6% | +28% | 0,05 |
> | 223 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+328% · −37,8%** | +57% · −7,1% | +34% | −5,1% | 5,5 | 54 d | −4,1% | +23% | 0,18 |
> | 224 | Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+163% · −24,6%** | +53% · −7,5% | +33% | −5,8% | 5,0 | 61 d | −3,2% | +19% | 0,09 |
> | 225 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+274% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 4,1 | 55 d | −2,0% | +29% | 0,19 |
> | 226 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+191% · −26,8%** | +39% · −4,8% | +27% | −5,0% | 4,8 | 56 d | −3,5% | +18% | 0,04 |
> | 227 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+142% · −15,2%** | +38% · −3,1% | +25% | −2,0% | 4,8 | 62 d | −2,9% | +22% | −0,07 |
> | 228 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+165% · −30,9%** | +37% · −6,3% | +28% | −5,8% | 3,7 | 38 d | −1,5% | +20% | 0,06 |
> | 229 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+237% · −39,0%** | +58% · −9,0% | +36% | −5,9% | 5,7 | 55 d | −4,1% | +24% | 0,18 |
> | 230 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+161% · −27,3%** | +37% · −5,2% | +28% | −5,4% | 3,9 | 47 d | −2,1% | +24% | 0,01 |
> | 231 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+286% · −44,2%** | +55% · −8,5% | +33% | −5,4% | 6,0 | 56 d | −4,2% | +18% | 0,21 |
> | 232 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+271% · −42,4%** | +52% · −8,6% | +36% | −8,7% | 4,3 | 57 d | −2,4% | +30% | 0,21 |
> | 233 | IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+184% · −20,8%** | +57% · −6,4% | +34% | −5,4% | 4,5 | 60 d | −2,9% | +26% | 0,20 |
> | 234 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+266% · −28,6%** | +48% · −5,3% | +29% | −3,8% | 4,7 | 35 d | −4,3% | +20% | 0,12 |
> | 235 | IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+128% · −17,8%** | +45% · −5,1% | +31% | −5,3% | 4,2 | 46 d | −3,2% | +26% | 0,19 |
> | 236 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+162% · −23,9%** | +37% · −4,4% | +27% | −4,3% | 4,4 | 61 d | −2,5% | +23% | 0,05 |
> | 237 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+195% · −25,9%** | +39% · −4,3% | +27% | −5,9% | 4,4 | 62 d | −2,5% | +23% | 0,08 |
> | 238 | MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+150% · −31,7%** | +42% · −8,2% | +31% | −7,6% | 3,7 | 38 d | −1,5% | +20% | 0,13 |
> | 239 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+197% · −25,1%** | +41% · −4,7% | +27% | −3,4% | 4,5 | 57 d | −3,1% | +19% | 0,07 |
> | 240 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+290% · −40,0%** | +51% · −8,0% | +33% | −6,8% | 4,3 | 55 d | −3,0% | +27% | 0,23 |

> [!example]- Combinações 241 a 270 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 241 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+342% · −45,4%** | +58% · −9,4% | +35% | −6,2% | 4,1 | 57 d | −2,0% | +25% | 0,20 |
> | 242 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+215% · −34,9%** | +44% · −6,5% | +31% | −6,0% | 4,2 | 61 d | −1,9% | +26% | 0,14 |
> | 243 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+269% · −32,1%** | +49% · −6,1% | +30% | −4,5% | 5,6 | 65 d | −2,9% | +20% | 0,15 |
> | 244 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+215% · −38,3%** | +44% · −7,5% | +31% | −7,3% | 4,1 | 57 d | −2,0% | +24% | 0,19 |
> | 245 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+256% · −33,5%** | +49% · −6,4% | +32% | −4,3% | 4,9 | 57 d | −3,7% | +24% | 0,05 |
> | 246 | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+177% · −28,6%** | +45% · −6,4% | +29% | −5,4% | 4,5 | 61 d | −2,9% | +17% | 0,11 |
> | 247 | MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+74% · −17,8%** | +32% · −5,6% | +25% | −5,6% | 3,8 | 53 d | −1,0% | +19% | 0,01 |
> | 248 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+93% · −16,7%** | +27% · −2,7% | +22% | −2,7% | 4,2 | 64 d | −1,0% | +19% | −0,01 |
> | 249 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+342% · −33,8%** | +56% · −6,7% | +34% | −5,4% | 5,3 | 64 d | −3,4% | +24% | 0,18 |
> | 250 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+276% · −44,3%** | +54% · −8,2% | +35% | −6,8% | 5,2 | 38 d | −4,7% | +26% | 0,21 |
> | 251 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+214% · −31,7%** | +43% · −5,8% | +31% | −5,1% | 4,1 | 46 d | −3,5% | +25% | −0,02 |
> | 252 | IFR ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+269% · −40,1%** | +60% · −10,3% | +37% | −9,0% | 4,3 | 38 d | −4,0% | +32% | 0,28 |
> | 253 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+148% · −17,1%** | +39% · −3,3% | +25% | −2,2% | 5,8 | 67 d | −2,1% | +19% | 0,05 |
> | 254 | IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+286% · −43,3%** | +52% · −8,9% | +33% | −8,1% | 4,1 | 38 d | −3,5% | +29% | 0,24 |
> | 255 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+196% · −23,4%** | +39% · −3,7% | +27% | −5,0% | 4,6 | 64 d | −2,8% | +22% | 0,03 |
> | 256 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+185% · −39,9%** | +49% · −9,7% | +32% | −4,1% | 5,9 | 63 d | −4,0% | +18% | 0,00 |
> | 257 | MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+228% · −36,3%** | +44% · −6,8% | +30% | −6,5% | 4,1 | 58 d | −2,5% | +21% | 0,15 |
> | 258 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+237% · −31,6%** | +46% · −6,1% | +28% | −4,2% | 4,9 | 65 d | −2,6% | +23% | 0,06 |
> | 259 | IFR ·ADX + Quinta ·PR2 ⚠️ | **+76% · −11,3%** | +42% · −5,2% | +30% | −3,6% | 4,2 | 57 d | −3,0% | +22% | −0,09 |
> | 260 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+332% · −37,8%** | +57% · −7,2% | +34% | −5,1% | 5,2 | 54 d | −4,4% | +24% | 0,19 |
> | 261 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+270% · −37,4%** | +51% · −7,1% | +35% | −6,7% | 4,0 | 53 d | −2,9% | +27% | 0,14 |
> | 262 | IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+156% · −30,9%** | +53% · −10,2% | +36% | −9,0% | 4,4 | 57 d | −3,5% | +21% | 0,32 |
> | 263 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+253% · −31,8%** | +48% · −5,7% | +31% | −4,6% | 5,3 | 65 d | −3,0% | +24% | −0,04 |
> | 264 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+214% · −35,1%** | +44% · −6,5% | +31% | −6,1% | 4,1 | 57 d | −2,6% | +26% | 0,06 |
> | 265 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+83% · −17,2%** | +28% · −3,8% | +23% | −3,8% | 4,1 | 64 d | −1,0% | +18% | −0,02 |
> | 266 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+192% · −27,5%** | +40% · −4,8% | +27% | −6,1% | 4,3 | 54 d | −3,5% | +17% | 0,14 |
> | 267 | IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+199% · −29,4%** | +40% · −5,0% | +27% | −4,9% | 4,0 | 56 d | −2,7% | +23% | 0,09 |
> | 268 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+227% · −46,1%** | +48% · −9,2% | +32% | −6,5% | 5,4 | 63 d | −4,0% | +20% | 0,16 |
> | 269 | IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+290% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 4,2 | 53 d | −3,6% | +28% | 0,16 |
> | 270 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+251% · −45,1%** | +50% · −9,8% | +33% | −6,9% | 4,5 | 44 d | −4,3% | +19% | 0,22 |

> [!example]- Combinações 271 a 300 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 271 | ADX ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+318% · −45,4%** | +69% · −12,0% | +39% | −8,2% | 4,1 | 55 d | −3,2% | +28% | 0,35 |
> | 272 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+98% · −14,4%** | +31% · −3,0% | +23% | −2,4% | 3,8 | 57 d | −1,1% | +20% | 0,06 |
> | 273 | 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+219% · −30,9%** | +42% · −5,4% | +28% | −4,5% | 4,1 | 53 d | −3,5% | +22% | 0,07 |
> | 274 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+270% · −37,4%** | +50% · −6,8% | +31% | −3,5% | 5,2 | 63 d | −3,9% | +19% | 0,06 |
> | 275 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+72% · −14,9%** | +31% · −4,6% | +25% | −3,9% | 4,8 | 66 d | −2,3% | +20% | −0,10 |
> | 276 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+160% · −23,9%** | +36% · −4,6% | +27% | −4,3% | 4,2 | 61 d | −2,8% | +24% | 0,03 |
> | 277 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+180% · −31,4%** | +39% · −5,7% | +28% | −6,0% | 4,5 | 62 d | −3,5% | +19% | −0,04 |
> | 278 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+333% · −43,0%** | +61% · −8,7% | +38% | −7,4% | 5,3 | 44 d | −4,9% | +28% | 0,24 |
> | 279 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+126% · −14,2%** | +45% · −4,3% | +31% | −3,8% | 4,2 | 59 d | −3,1% | +24% | −0,11 |
> | 280 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+158% · −28,1%** | +44% · −6,8% | +28% | −5,5% | 4,9 | 65 d | −3,1% | +20% | 0,12 |
> | 281 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+188% · −38,0%** | +49% · −9,0% | +32% | −4,3% | 5,6 | 63 d | −4,2% | +19% | 0,00 |
> | 282 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+289% · −41,2%** | +55% · −7,5% | +33% | −4,4% | 5,7 | 57 d | −4,6% | +20% | 0,06 |
> | 283 | Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+225% · −32,9%** | +44% · −6,0% | +30% | −5,9% | 4,3 | 63 d | −2,8% | +26% | 0,05 |
> | 284 | 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+202% · −27,0%** | +48% · −5,9% | +31% | −4,5% | 4,2 | 51 d | −3,8% | +25% | 0,04 |
> | 285 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+178% · −26,7%** | +45% · −6,4% | +29% | −6,7% | 4,7 | 56 d | −4,2% | +19% | 0,13 |
> | 286 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+213% · −22,7%** | +42% · −4,3% | +30% | −4,1% | 4,4 | 63 d | −3,4% | +23% | 0,00 |
> | 287 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+252% · −29,9%** | +57% · −7,2% | +33% | −4,9% | 5,4 | 65 d | −3,6% | +22% | 0,12 |
> | 288 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+269% · −28,7%** | +48% · −5,9% | +29% | −3,4% | 4,1 | 47 d | −3,9% | +22% | 0,05 |
> | 289 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+355% · −44,2%** | +61% · −8,8% | +38% | −6,1% | 4,2 | 55 d | −3,6% | +28% | 0,09 |
> | 290 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+341% · −45,2%** | +60% · −10,2% | +38% | −7,3% | 5,4 | 35 d | −5,2% | +23% | 0,28 |
> | 291 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+408% · −48,2%** | +65% · −10,1% | +38% | −6,8% | 4,1 | 60 d | −2,8% | +28% | 0,27 |
> | 292 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+265% · −52,2%** | +54% · −11,0% | +35% | −7,0% | 5,2 | 55 d | −4,6% | +19% | 0,20 |
> | 293 | IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+136% · −16,7%** | +46% · −4,8% | +28% | −3,3% | 5,5 | 67 d | −2,8% | +21% | 0,04 |
> | 294 | Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+167% · −28,2%** | +36% · −4,7% | +25% | −3,9% | 4,0 | 42 d | −3,7% | +19% | 0,07 |
> | 295 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+190% · −35,0%** | +41% · −6,4% | +31% | −7,1% | 3,7 | 49 d | −2,5% | +28% | 0,06 |
> | 296 | IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+266% · −40,7%** | +51% · −8,1% | +35% | −7,9% | 3,8 | 54 d | −2,6% | +28% | 0,22 |
> | 297 | IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+227% · −29,8%** | +43% · −5,1% | +29% | −4,9% | 4,6 | 63 d | −3,7% | +25% | 0,12 |
> | 298 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+256% · −30,5%** | +48% · −5,7% | +31% | −4,6% | 5,0 | 65 d | −3,3% | +25% | −0,01 |
> | 299 | ADX ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+337% · −48,3%** | +58% · −10,3% | +35% | −7,4% | 3,9 | 55 d | −2,9% | +25% | 0,27 |
> | 300 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+84% · −17,3%** | +29% · −3,8% | +23% | −3,7% | 3,9 | 64 d | −1,0% | +20% | −0,03 |

> [!example]- Combinações 301 a 330 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 301 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+252% · −37,2%** | +48% · −7,3% | +31% | −5,5% | 4,7 | 65 d | −3,1% | +22% | 0,11 |
> | 302 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+153% · −18,9%** | +35% · −2,8% | +25% | −2,6% | 3,9 | 60 d | −2,3% | +22% | 0,04 |
> | 303 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+250% · −31,7%** | +46% · −6,0% | +30% | −7,0% | 4,5 | 60 d | −3,8% | +21% | 0,12 |
> | 304 | Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+102% · −23,2%** | +32% · −5,0% | +25% | −4,4% | 3,6 | 33 d | −3,0% | +18% | 0,06 |
> | 305 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+296% · −44,0%** | +55% · −9,1% | +38% | −9,2% | 3,8 | 53 d | −3,0% | +28% | 0,30 |
> | 306 | IFR ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+197% · −35,0%** | +50% · −8,5% | +35% | −8,1% | 4,1 | 57 d | −3,4% | +30% | 0,08 |
> | 307 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+282% · −40,0%** | +54% · −8,1% | +35% | −6,7% | 4,4 | 57 d | −3,9% | +27% | 0,21 |
> | 308 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+144% · −14,2%** | +38% · −3,1% | +25% | −2,1% | 4,4 | 64 d | −3,3% | +21% | −0,03 |
> | 309 | IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+250% · −37,3%** | +59% · −9,3% | +39% | −8,8% | 3,9 | 54 d | −3,2% | +30% | 0,23 |
> | 310 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+161% · −20,9%** | +36% · −4,0% | +27% | −3,6% | 4,1 | 63 d | −2,7% | +21% | −0,03 |
> | 311 | IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+211% · −38,5%** | +44% · −7,5% | +31% | −7,4% | 3,9 | 57 d | −2,7% | +28% | 0,11 |
> | 312 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+379% · −32,6%** | +58% · −6,4% | +34% | −4,0% | 6,2 | 64 d | −4,4% | +24% | 0,08 |
> | 313 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+371% · −51,2%** | +63% · −11,3% | +38% | −8,7% | 3,9 | 55 d | −3,2% | +28% | 0,36 |
> | 314 | MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+198% · −35,8%** | +41% · −6,7% | +28% | −6,4% | 3,8 | 38 d | −3,5% | +22% | 0,14 |
> | 315 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+263% · −43,2%** | +50% · −8,8% | +34% | −5,9% | 4,1 | 54 d | −3,7% | +22% | 0,11 |
> | 316 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+234% · −40,2%** | +58% · −9,5% | +36% | −5,8% | 5,8 | 47 d | −5,2% | +23% | 0,15 |
> | 317 | 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+144% · −24,6%** | +39% · −5,7% | +25% | −3,8% | 4,5 | 65 d | −2,9% | +20% | 0,05 |
> | 318 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+192% · −35,0%** | +42% · −6,4% | +31% | −7,1% | 3,6 | 49 d | −2,3% | +27% | 0,10 |
> | 319 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+235% · −33,8%** | +46% · −6,7% | +28% | −5,1% | 4,7 | 65 d | −3,1% | +21% | 0,14 |
> | 320 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+225% · −33,5%** | +44% · −6,3% | +30% | −8,4% | 4,3 | 61 d | −3,6% | +20% | 0,19 |
> | 321 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+182% · −29,7%** | +38% · −5,3% | +28% | −2,6% | 4,6 | 64 d | −3,6% | +22% | −0,04 |
> | 322 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+287% · −38,2%** | +53% · −7,8% | +34% | −8,0% | 4,6 | 65 d | −3,2% | +28% | 0,11 |
> | 323 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+201% · −35,9%** | +44% · −7,1% | +29% | −7,4% | 4,5 | 65 d | −3,0% | +24% | 0,15 |
> | 324 | IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+89% · −14,4%** | +35% · −4,0% | +25% | −3,3% | 3,7 | 57 d | −2,0% | +21% | 0,08 |
> | 325 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+276% · −44,6%** | +51% · −8,4% | +31% | −5,9% | 3,7 | 57 d | −2,3% | +21% | 0,14 |
> | 326 | 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+285% · −35,2%** | +51% · −6,5% | +33% | −6,2% | 4,1 | 60 d | −3,4% | +27% | 0,12 |
> | 327 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+154% · −30,5%** | +37% · −5,4% | +26% | −5,8% | 5,1 | 67 d | −3,0% | +19% | 0,02 |
> | 328 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+314% · −50,4%** | +56% · −9,5% | +34% | −7,2% | 3,8 | 57 d | −2,6% | +26% | 0,20 |
> | 329 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+151% · −39,9%** | +36% · −7,5% | +26% | −3,5% | 5,0 | 63 d | −4,3% | +14% | 0,06 |
> | 330 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+279% · −38,5%** | +51% · −7,4% | +33% | −6,2% | 4,4 | 50 d | −4,5% | +19% | 0,19 |

> [!example]- Combinações 331 a 360 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 331 | IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+198% · −38,3%** | +50% · −9,7% | +35% | −9,5% | 4,1 | 57 d | −3,5% | +25% | 0,33 |
> | 332 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+179% · −23,8%** | +44% · −5,1% | +29% | −6,7% | 4,1 | 63 d | −3,0% | +24% | 0,07 |
> | 333 | IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+200% · −35,0%** | +51% · −8,5% | +35% | −8,1% | 3,9 | 57 d | −3,1% | +29% | 0,15 |
> | 334 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+229% · −25,9%** | +43% · −4,3% | +29% | −4,1% | 4,4 | 64 d | −3,5% | +22% | 0,02 |
> | 335 | Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+228% · −32,9%** | +44% · −6,0% | +30% | −6,0% | 4,1 | 63 d | −3,0% | +26% | 0,07 |
> | 336 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+160% · −28,1%** | +44% · −6,8% | +28% | −5,5% | 4,5 | 65 d | −3,2% | +21% | 0,12 |
> | 337 | Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+147% · −27,2%** | +41% · −6,4% | +31% | −6,9% | 3,9 | 63 d | −2,7% | +25% | 0,00 |
> | 338 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+294% · −40,8%** | +65% · −10,5% | +40% | −6,4% | 6,0 | 36 d | −5,6% | +20% | 0,23 |
> | 339 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+308% · −39,0%** | +56% · −7,5% | +36% | −4,9% | 4,8 | 65 d | −3,6% | +26% | 0,10 |
> | 340 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+255% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,7 | 51 d | −3,2% | +25% | 0,13 |
> | 341 | IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+319% · −46,5%** | +56% · −9,9% | +36% | −9,3% | 4,0 | 57 d | −3,5% | +30% | 0,34 |
> | 342 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+183% · −30,1%** | +39% · −5,5% | +28% | −6,0% | 4,3 | 62 d | −3,8% | +18% | 0,01 |
> | 343 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+315% · −43,8%** | +57% · −8,7% | +36% | −6,0% | 3,9 | 55 d | −3,5% | +27% | 0,10 |
> | 344 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+224% · −50,8%** | +47% · −10,7% | +32% | −5,1% | 4,9 | 38 d | −5,3% | +17% | 0,09 |
> | 345 | Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+152% · −28,1%** | +41% · −6,3% | +27% | −5,3% | 4,1 | 53 d | −4,1% | +18% | 0,09 |
> | 346 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+312% · −37,0%** | +56% · −6,9% | +36% | −4,9% | 4,6 | 65 d | −3,5% | +27% | 0,15 |
> | 347 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+175% · −35,8%** | +40% · −6,9% | +27% | −3,9% | 4,9 | 65 d | −3,8% | +19% | 0,05 |
> | 348 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+273% · −47,6%** | +55% · −9,3% | +35% | −8,1% | 4,8 | 54 d | −4,9% | +24% | 0,34 |
> | 349 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+145% · −25,8%** | +52% · −8,4% | +32% | −6,3% | 5,1 | 65 d | −4,0% | +23% | 0,05 |
> | 350 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+282% · −49,5%** | +54% · −9,6% | +36% | −5,7% | 4,7 | 54 d | −4,8% | +21% | 0,11 |
> | 351 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+180% · −38,2%** | +38% · −7,7% | +28% | −3,8% | 4,2 | 64 d | −3,4% | +19% | −0,02 |
> | 352 | Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+138% · −24,1%** | +48% · −7,3% | +30% | −5,6% | 4,3 | 42 d | −4,8% | +21% | 0,08 |
> | 353 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+279% · −38,0%** | +53% · −7,6% | +33% | −6,0% | 4,8 | 47 d | −5,2% | +20% | 0,21 |
> | 354 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+240% · −42,0%** | +48% · −8,5% | +34% | −8,6% | 3,8 | 57 d | −3,2% | +29% | 0,16 |
> | 355 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+303% · −32,7%** | +54% · −6,3% | +32% | −5,1% | 4,0 | 45 d | −4,4% | +24% | 0,12 |
> | 356 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+210% · −27,9%** | +43% · −4,8% | +30% | −5,5% | 4,4 | 65 d | −3,3% | +26% | 0,10 |
> | 357 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+205% · −41,0%** | +44% · −8,1% | +31% | −6,6% | 3,8 | 55 d | −3,6% | +17% | 0,17 |
> | 358 | MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+256% · −38,0%** | +47% · −7,4% | +31% | −7,0% | 3,7 | 52 d | −3,4% | +25% | 0,23 |
> | 359 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+237% · −33,2%** | +57% · −8,2% | +36% | −5,7% | 4,3 | 45 d | −4,8% | +27% | 0,16 |
> | 360 | Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+149% · −27,2%** | +42% · −6,4% | +31% | −7,0% | 3,7 | 63 d | −2,4% | +24% | 0,05 |

> [!example]- Combinações 361 a 390 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 361 | Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+159% · −32,6%** | +37% · −6,0% | +28% | −6,1% | 3,7 | 63 d | −1,9% | +23% | 0,05 |
> | 362 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+234% · −41,5%** | +48% · −9,0% | +34% | −7,9% | 3,8 | 55 d | −3,6% | +22% | 0,22 |
> | 363 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+166% · −31,1%** | +43% · −7,3% | +31% | −3,7% | 4,5 | 64 d | −4,1% | +22% | −0,11 |
> | 364 | GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+184% · −42,9%** | +49% · −11,1% | +32% | −5,5% | 5,3 | 63 d | −4,8% | +17% | 0,15 |
> | 365 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+341% · −38,7%** | +56% · −6,9% | +33% | −4,0% | 3,8 | 63 d | −2,6% | +23% | 0,10 |
> | 366 | GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+233% · −43,8%** | +58% · −10,9% | +36% | −7,4% | 5,3 | 54 d | −5,2% | +21% | 0,34 |
> | 367 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+336% · −36,0%** | +56% · −7,2% | +33% | −5,6% | 4,3 | 65 d | −3,2% | +25% | 0,10 |
> | 368 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+237% · −31,5%** | +56% · −7,4% | +35% | −6,1% | 4,6 | 65 d | −3,8% | +25% | 0,04 |
> | 369 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+87% · −13,2%** | +35% · −4,0% | +25% | −2,2% | 3,5 | 59 d | −1,6% | +18% | 0,03 |
> | 370 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+268% · −39,1%** | +50% · −8,0% | +31% | −7,5% | 4,5 | 65 d | −3,7% | +26% | 0,17 |
> | 371 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+142% · −17,8%** | +39% · −3,5% | +27% | −3,6% | 3,8 | 63 d | −2,8% | +24% | 0,09 |
> | 372 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+157% · −29,9%** | +37% · −5,6% | +26% | −5,8% | 4,7 | 67 d | −3,1% | +20% | 0,00 |
> | 373 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+188% · −33,8%** | +50% · −8,5% | +32% | −8,4% | 4,7 | 65 d | −3,9% | +28% | 0,14 |
> | 374 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+210% · −22,7%** | +42% · −4,2% | +30% | −4,3% | 4,0 | 63 d | −3,5% | +24% | −0,06 |
> | 375 | Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+210% · −32,8%** | +51% · −7,7% | +33% | −7,6% | 4,1 | 63 d | −3,7% | +29% | 0,15 |
> | 376 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+180% · −38,1%** | +39% · −7,7% | +28% | −6,9% | 4,0 | 62 d | −3,5% | +20% | 0,10 |
> | 377 | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+225% · −36,4%** | +44% · −6,8% | +30% | −6,6% | 3,9 | 63 d | −3,0% | +25% | 0,15 |
> | 378 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+238% · −33,8%** | +46% · −6,7% | +28% | −5,1% | 4,4 | 65 d | −3,5% | +22% | 0,13 |
> | 379 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+375% · −39,0%** | +63% · −7,8% | +35% | −5,4% | 5,6 | 48 d | −5,6% | +21% | 0,18 |
> | 380 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+118% · −13,0%** | +34% · −2,6% | +25% | −1,5% | 7,0 | 76 d | −1,0% | +19% | −0,04 |
> | 381 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+335% · −46,2%** | +57% · −10,0% | +35% | −6,4% | 5,1 | 58 d | −5,1% | +22% | 0,23 |
> | 382 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+212% · −34,2%** | +43% · −6,5% | +31% | −9,6% | 4,0 | 62 d | −3,6% | +21% | 0,13 |
> | 383 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+140% · −15,9%** | +38% · −3,5% | +27% | −2,6% | 3,7 | 59 d | −2,8% | +21% | −0,01 |
> | 384 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+246% · −40,0%** | +47% · −7,3% | +29% | −5,4% | 3,6 | 57 d | −2,6% | +22% | 0,13 |
> | 385 | GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+326% · −41,1%** | +57% · −8,2% | +34% | −6,4% | 5,1 | 60 d | −5,0% | +22% | 0,30 |
> | 386 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+167% · −31,1%** | +44% · −7,4% | +31% | −7,9% | 4,3 | 62 d | −4,3% | +20% | 0,04 |
> | 387 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+214% · −44,1%** | +55% · −11,2% | +36% | −7,0% | 5,2 | 63 d | −4,9% | +23% | 0,16 |
> | 388 | MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+261% · −40,0%** | +49% · −7,8% | +33% | −7,8% | 3,9 | 63 d | −3,4% | +29% | 0,20 |
> | 389 | Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+90% · −23,8%** | +36% · −7,4% | +27% | −6,4% | 3,5 | 40 d | −3,4% | +16% | 0,04 |
> | 390 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+301% · −46,7%** | +58% · −9,1% | +37% | −7,0% | 5,6 | 63 d | −5,1% | +29% | 0,19 |

> [!example]- Combinações 391 a 420 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 391 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+207% · −42,1%** | +45% · −8,9% | +28% | −4,4% | 5,3 | 63 d | −5,0% | +16% | 0,06 |
> | 392 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+219% · −31,6%** | +53% · −7,9% | +31% | −5,6% | 4,5 | 65 d | −3,8% | +23% | 0,12 |
> | 393 | MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+183% · −32,1%** | +46% · −7,6% | +31% | −6,9% | 3,6 | 42 d | −3,8% | +25% | 0,18 |
> | 394 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+216% · −32,2%** | +43% · −6,1% | +27% | −5,9% | 4,3 | 65 d | −3,6% | +22% | 0,04 |
> | 395 | MACD ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+176% · −34,9%** | +47% · −8,4% | +34% | −9,3% | 3,5 | 49 d | −3,4% | +30% | 0,20 |
> | 396 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+142% · −27,7%** | +41% · −6,2% | +28% | −6,5% | 4,9 | 67 d | −3,7% | +22% | −0,05 |
> | 397 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+288% · −28,7%** | +50% · −4,8% | +32% | −5,0% | 4,4 | 63 d | −4,3% | +26% | 0,09 |
> | 398 | 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+204% · −30,9%** | +49% · −7,1% | +31% | −6,0% | 3,9 | 56 d | −4,1% | +23% | 0,17 |
> | 399 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+319% · −43,6%** | +57% · −8,6% | +36% | −6,0% | 3,8 | 55 d | −3,8% | +26% | 0,14 |
> | 400 | IFR ·ADX + Pullback ·PUL | **+96% · −12,9%** | +51% · −5,9% | +34% | −3,5% | 6,6 | 73 d | −3,1% | +21% | −0,17 |
> | 401 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+334% · −30,5%** | +55% · −5,8% | +32% | −4,5% | 4,6 | 64 d | −4,5% | +25% | 0,07 |
> | 402 | ADX ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+227% · −43,2%** | +55% · −9,9% | +33% | −6,8% | 3,6 | 55 d | −3,2% | +25% | 0,18 |
> | 403 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+182% · −37,4%** | +39% · −7,4% | +28% | −3,8% | 4,1 | 64 d | −3,7% | +20% | 0,02 |
> | 404 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+306% · −43,9%** | +57% · −8,9% | +36% | −6,2% | 4,4 | 65 d | −3,9% | +25% | 0,26 |
> | 405 | Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+153% · −24,1%** | +40% · −5,0% | +27% | −3,7% | 3,8 | 54 d | −4,1% | +21% | 0,08 |
> | 406 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+338% · −30,5%** | +55% · −5,8% | +32% | −4,5% | 4,6 | 64 d | −4,5% | +24% | 0,12 |
> | 407 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+148% · −25,8%** | +52% · −8,4% | +32% | −6,3% | 4,7 | 65 d | −4,2% | +25% | 0,06 |
> | 408 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+139% · −37,7%** | +40% · −9,1% | +28% | −3,6% | 4,6 | 49 d | −5,3% | +15% | −0,01 |
> | 409 | IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+184% · −34,8%** | +61% · −11,8% | +41% | −11,1% | 4,4 | 57 d | −4,8% | +30% | 0,48 |
> | 410 | IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+197% · −29,4%** | +40% · −5,0% | +27% | −5,0% | 3,7 | 63 d | −3,0% | +23% | 0,07 |
> | 411 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+217% · −31,5%** | +43% · −5,8% | +31% | −5,1% | 4,1 | 64 d | −3,8% | +26% | 0,04 |
> | 412 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+209% · −32,8%** | +43% · −6,0% | +31% | −5,6% | 4,0 | 56 d | −4,3% | +27% | −0,03 |
> | 413 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+222% · −30,7%** | +43% · −5,4% | +28% | −4,5% | 3,7 | 56 d | −3,7% | +23% | 0,11 |
> | 414 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+161% · −31,9%** | +37% · −5,7% | +28% | −6,1% | 3,5 | 63 d | −2,1% | +25% | 0,07 |
> | 415 | Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+154% · −28,2%** | +41% · −6,3% | +27% | −5,3% | 3,8 | 48 d | −4,4% | +19% | 0,09 |
> | 416 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+201% · −34,7%** | +42% · −6,5% | +29% | −4,2% | 4,3 | 65 d | −3,8% | +20% | −0,05 |
> | 417 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+242% · −42,0%** | +49% · −8,5% | +34% | −8,6% | 3,5 | 58 d | −2,6% | +29% | 0,22 |
> | 418 | IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+147% · −23,8%** | +41% · −5,4% | +29% | −5,6% | 3,8 | 61 d | −3,7% | +26% | 0,13 |
> | 419 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+185% · −35,9%** | +50% · −9,2% | +32% | −9,5% | 4,5 | 65 d | −4,1% | +25% | 0,30 |
> | 420 | MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+184% · −35,8%** | +47% · −8,9% | +31% | −8,4% | 3,6 | 40 d | −4,1% | +23% | 0,26 |

> [!example]- Combinações 421 a 450 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 421 | ADX ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+345% · −49,1%** | +62% · −10,5% | +39% | −8,5% | 3,7 | 56 d | −3,6% | +29% | 0,28 |
> | 422 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+169% · −29,2%** | +43% · −6,8% | +31% | −3,7% | 4,4 | 64 d | −4,5% | +23% | −0,04 |
> | 423 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+334% · −32,6%** | +55% · −6,1% | +32% | −5,4% | 4,2 | 64 d | −4,2% | +24% | 0,21 |
> | 424 | MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+239% · −34,5%** | +54% · −8,4% | +35% | −7,6% | 3,6 | 52 d | −3,8% | +26% | 0,31 |
> | 425 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+220% · −26,8%** | +42% · −4,3% | +28% | −3,2% | 3,7 | 60 d | −3,5% | +24% | 0,05 |
> | 426 | Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+245% · −44,4%** | +50% · −9,1% | +33% | −7,0% | 4,4 | 63 d | −4,7% | +24% | 0,21 |
> | 427 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+184% · −25,8%** | +47% · −6,1% | +29% | −4,5% | 3,9 | 57 d | −4,3% | +20% | 0,13 |
> | 428 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+357% · −44,5%** | +62% · −9,2% | +37% | −7,6% | 4,9 | 54 d | −5,6% | +27% | 0,38 |
> | 429 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+193% · −28,1%** | +41% · −4,9% | +30% | −5,1% | 3,6 | 61 d | −3,3% | +23% | 0,04 |
> | 430 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+278% · −47,7%** | +52% · −9,3% | +32% | −7,0% | 3,5 | 56 d | −3,1% | +25% | 0,21 |
> | 431 | Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+92% · −22,9%** | +37% · −7,0% | +27% | −6,4% | 3,4 | 38 d | −3,6% | +18% | 0,06 |
> | 432 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+305% · −43,9%** | +60% · −9,2% | +36% | −6,8% | 5,0 | 56 d | −5,5% | +28% | 0,20 |
> | 433 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+201% · −34,9%** | +50% · −8,5% | +35% | −8,0% | 4,0 | 69 d | −2,1% | +28% | 0,24 |
> | 434 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+184% · −26,1%** | +39% · −4,4% | +28% | −6,0% | 3,3 | 59 d | −2,1% | +24% | 0,08 |
> | 435 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+274% · −41,8%** | +51% · −8,0% | +31% | −5,1% | 3,3 | 57 d | −2,2% | +21% | 0,19 |
> | 436 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+271% · −39,0%** | +51% · −8,0% | +31% | −7,5% | 4,3 | 65 d | −4,1% | +27% | 0,18 |
> | 437 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+215% · −24,3%** | +41% · −3,8% | +27% | −3,6% | 4,8 | 75 d | −1,9% | +23% | 0,08 |
> | 438 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+145% · −26,9%** | +41% · −6,3% | +28% | −6,4% | 4,5 | 67 d | −3,8% | +23% | −0,06 |
> | 439 | Quinta ·PR2 + Tendência ·ADX ⚠️ | **+80% · −21,7%** | +45% · −9,8% | +32% | −7,4% | 3,9 | 51 d | −4,7% | +19% | −0,07 |
> | 440 | Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+147% · −31,8%** | +42% · −7,5% | +31% | −7,9% | 3,5 | 63 d | −2,8% | +25% | 0,16 |
> | 441 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+245% · −30,7%** | +47% · −5,3% | +33% | −7,0% | 3,9 | 63 d | −4,1% | +26% | 0,11 |
> | 442 | Pullback ·PUL + Rompe 200 ·ROM | **+41% · −19,7%** | +27% · −9,7% | +21% | −5,3% | 4,5 | 75 d | −0,8% | +11% | 0,13 |
> | 443 | ADX ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+364% · −51,6%** | +63% · −11,3% | +38% | −8,8% | 3,7 | 55 d | −4,0% | +28% | 0,29 |
> | 444 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+383% · −40,8%** | +62% · −7,8% | +39% | −5,4% | 5,7 | 64 d | −5,4% | +24% | 0,13 |
> | 445 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+313% · −46,8%** | +57% · −9,7% | +36% | −7,2% | 3,6 | 60 d | −3,5% | +28% | 0,20 |
> | 446 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+124% · −23,3%** | +36% · −4,9% | +27% | −5,4% | 3,2 | 57 d | −1,1% | +23% | 0,10 |
> | 447 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+315% · −46,0%** | +60% · −8,9% | +36% | −7,8% | 5,1 | 57 d | −5,6% | +24% | 0,23 |
> | 448 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+341% · −43,8%** | +57% · −8,4% | +35% | −5,5% | 3,9 | 64 d | −3,8% | +26% | 0,12 |
> | 449 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+214% · −37,0%** | +43% · −7,2% | +31% | −6,3% | 3,7 | 64 d | −3,5% | +23% | 0,09 |
> | 450 | Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+299% · −36,2%** | +54% · −6,8% | +32% | −6,2% | 3,9 | 47 d | −4,8% | +28% | 0,23 |

> [!example]- Combinações 451 a 480 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 451 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+149% · −20,4%** | +41% · −4,7% | +29% | −4,7% | 3,7 | 63 d | −3,6% | +22% | −0,01 |
> | 452 | 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+167% · −37,9%** | +44% · −9,8% | +31% | −5,2% | 4,0 | 64 d | −4,2% | +20% | 0,03 |
> | 453 | ADX ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+243% · −43,1%** | +48% · −8,3% | +29% | −5,8% | 3,4 | 59 d | −2,8% | +22% | 0,14 |
> | 454 | IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+108% · −12,9%** | +40% · −3,5% | +28% | −1,8% | 6,3 | 79 d | −1,6% | +20% | −0,11 |
> | 455 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+287% · −49,1%** | +56% · −10,0% | +34% | −4,8% | 5,7 | 63 d | −5,6% | +19% | 0,09 |
> | 456 | Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+91% · −18,6%** | +36% · −5,5% | +27% | −4,3% | 3,4 | 55 d | −3,3% | +20% | 0,07 |
> | 457 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+201% · −20,8%** | +47% · −4,4% | +29% | −3,7% | 4,8 | 75 d | −2,3% | +23% | 0,10 |
> | 458 | MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+128% · −30,3%** | +38% · −7,0% | +28% | −7,5% | 3,2 | 40 d | −3,4% | +21% | 0,10 |
> | 459 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+219% · −32,2%** | +44% · −6,1% | +27% | −5,8% | 4,1 | 65 d | −3,9% | +23% | 0,02 |
> | 460 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+304% · −29,8%** | +51% · −5,6% | +31% | −2,6% | 6,2 | 77 d | −2,3% | +20% | 0,03 |
> | 461 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+346% · −41,4%** | +61% · −8,2% | +33% | −5,0% | 3,9 | 52 d | −4,8% | +24% | 0,24 |
> | 462 | IFR ·ADX + Rompe 200 ·ROM | **+78% · −14,3%** | +43% · −6,8% | +30% | −5,6% | 3,2 | 58 d | −1,3% | +20% | 0,31 |
> | 463 | Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+136% · −27,1%** | +49% · −8,8% | +35% | −9,6% | 3,8 | 63 d | −3,9% | +26% | 0,16 |
> | 464 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+163% · −33,4%** | +45% · −7,2% | +30% | −3,8% | 4,7 | 65 d | −4,7% | +21% | 0,02 |
> | 465 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+252% · −38,8%** | +51% · −7,7% | +34% | −8,2% | 4,8 | 65 d | −4,8% | +31% | 0,16 |
> | 466 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+366% · −35,7%** | +60% · −7,0% | +35% | −6,9% | 4,2 | 54 d | −5,2% | +28% | 0,23 |
> | 467 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+300% · −32,7%** | +53% · −6,1% | +32% | −5,1% | 4,1 | 45 d | −5,3% | +25% | 0,09 |
> | 468 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+281% · −46,7%** | +52% · −9,2% | +32% | −7,1% | 3,3 | 56 d | −2,9% | +24% | 0,21 |
> | 469 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+270% · −41,9%** | +55% · −7,7% | +35% | −6,9% | 5,0 | 61 d | −5,5% | +30% | 0,13 |
> | 470 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+191% · −31,9%** | +41% · −5,7% | +30% | −6,4% | 4,1 | 67 d | −3,4% | +26% | 0,14 |
> | 471 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+227% · −49,3%** | +47% · −10,2% | +32% | −5,1% | 4,8 | 55 d | −5,7% | +18% | 0,08 |
> | 472 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+200% · −32,8%** | +49% · −8,0% | +35% | −6,8% | 4,0 | 64 d | −4,3% | +27% | 0,07 |
> | 473 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+204% · −32,6%** | +43% · −6,3% | +29% | −4,2% | 4,0 | 65 d | −3,9% | +21% | −0,03 |
> | 474 | MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+189% · −38,4%** | +42% · −7,4% | +31% | −8,3% | 3,4 | 63 d | −2,4% | +28% | 0,17 |
> | 475 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+273% · −35,5%** | +50% · −6,2% | +31% | −3,5% | 5,0 | 69 d | −4,3% | +20% | 0,05 |
> | 476 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+200% · −32,2%** | +41% · −5,7% | +28% | −5,2% | 3,4 | 54 d | −3,5% | +24% | 0,12 |
> | 477 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+157% · −32,3%** | +36% · −6,0% | +26% | −3,7% | 3,7 | 64 d | −3,5% | +22% | 0,03 |
> | 478 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+127% · −31,4%** | +32% · −5,9% | +23% | −3,0% | 5,0 | 76 d | −2,5% | +16% | −0,01 |
> | 479 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+191% · −28,1%** | +41% · −4,8% | +30% | −5,1% | 3,6 | 63 d | −3,6% | +24% | 0,02 |
> | 480 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+253% · −44,7%** | +49% · −9,4% | +32% | −3,6% | 4,6 | 67 d | −4,3% | +22% | −0,04 |

> [!example]- Combinações 481 a 510 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 481 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+223% · −32,2%** | +45% · −6,1% | +29% | −5,1% | 4,1 | 67 d | −3,5% | +26% | 0,02 |
> | 482 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+335% · −41,9%** | +61% · −8,3% | +39% | −8,1% | 4,3 | 65 d | −4,5% | +30% | 0,32 |
> | 483 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+222% · −31,6%** | +53% · −7,9% | +31% | −5,6% | 4,2 | 65 d | −4,3% | +25% | 0,11 |
> | 484 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+367% · −39,4%** | +60% · −7,9% | +35% | −5,5% | 4,5 | 37 d | −6,0% | +23% | 0,20 |
> | 485 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+264% · −33,7%** | +48% · −6,2% | +32% | −5,9% | 3,9 | 62 d | −4,4% | +25% | 0,15 |
> | 486 | MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+201% · −35,8%** | +41% · −6,8% | +28% | −6,4% | 3,3 | 53 d | −3,7% | +23% | 0,15 |
> | 487 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+304% · −41,8%** | +55% · −7,6% | +34% | −6,1% | 4,8 | 63 d | −5,4% | +23% | 0,20 |
> | 488 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+296% · −43,7%** | +67% · −11,3% | +41% | −8,0% | 3,8 | 60 d | −4,3% | +30% | 0,23 |
> | 489 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+200% · −42,7%** | +44% · −7,9% | +30% | −6,4% | 4,5 | 65 d | −4,8% | +22% | 0,13 |
> | 490 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+115% · −22,8%** | +35% · −5,2% | +24% | −2,3% | 5,4 | 76 d | −3,0% | +18% | −0,07 |
> | 491 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+372% · −40,2%** | +59% · −7,9% | +35% | −4,5% | 5,5 | 64 d | −5,6% | +22% | 0,12 |
> | 492 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+256% · −37,9%** | +52% · −7,4% | +31% | −5,8% | 4,5 | 56 d | −5,6% | +21% | 0,17 |
> | 493 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+240% · −30,0%** | +47% · −5,3% | +29% | −3,4% | 4,3 | 65 d | −4,5% | +21% | 0,07 |
> | 494 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+211% · −32,1%** | +43% · −5,9% | +31% | −5,6% | 3,8 | 56 d | −4,6% | +26% | 0,04 |
> | 495 | 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+208% · −40,0%** | +44% · −8,0% | +31% | −6,5% | 3,6 | 54 d | −4,4% | +28% | 0,11 |
> | 496 | IFR ·ADX + Tendência ·ADX | **+144% · −27,0%** | +71% · −13,5% | +46% | −11,3% | 5,1 | 57 d | −5,9% | +26% | 0,46 |
> | 497 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+141% · −30,4%** | +34% · −5,3% | +26% | −5,7% | 3,1 | 55 d | −2,5% | +21% | 0,08 |
> | 498 | IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+213% · −38,5%** | +44% · −7,5% | +31% | −7,4% | 3,7 | 67 d | −2,6% | +29% | 0,15 |
> | 499 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+241% · −37,2%** | +48% · −7,1% | +34% | −7,7% | 3,6 | 54 d | −4,4% | +27% | 0,14 |
> | 500 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+340% · −42,8%** | +59% · −8,8% | +37% | −6,5% | 4,4 | 44 d | −5,8% | +24% | 0,27 |
> | 501 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+304% · −33,0%** | +53% · −7,1% | +32% | −5,9% | 3,7 | 39 d | −4,9% | +24% | 0,19 |
> | 502 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+227% · −31,3%** | +46% · −6,2% | +30% | −5,8% | 3,6 | 57 d | −4,2% | +23% | 0,18 |
> | 503 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+284% · −44,9%** | +54% · −9,3% | +35% | −6,4% | 4,2 | 65 d | −4,4% | +26% | 0,12 |
> | 504 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+128% · −15,0%** | +45% · −4,6% | +31% | −3,8% | 3,5 | 63 d | −3,6% | +23% | 0,05 |
> | 505 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+138% · −23,3%** | +33% · −4,0% | +25% | −4,0% | 2,9 | 46 d | −1,6% | +22% | 0,07 |
> | 506 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+194% · −38,0%** | +43% · −7,3% | +29% | −7,4% | 4,9 | 74 d | −3,4% | +18% | 0,02 |
> | 507 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+183% · −24,1%** | +39% · −4,1% | +24% | −2,5% | 4,6 | 74 d | −3,1% | +19% | −0,02 |
> | 508 | IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+201% · −24,3%** | +47% · −5,2% | +30% | −4,8% | 4,3 | 75 d | −2,1% | +25% | 0,19 |
> | 509 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+252% · −29,3%** | +56% · −7,7% | +32% | −4,5% | 3,9 | 47 d | −5,3% | +23% | 0,10 |
> | 510 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+202% · −41,5%** | +45% · −7,5% | +30% | −6,4% | 4,3 | 65 d | −4,6% | +23% | 0,14 |

> [!example]- Combinações 511 a 540 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 511 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+287% · −29,2%** | +51% · −5,4% | +32% | −3,0% | 5,5 | 64 d | −5,7% | +23% | −0,04 |
> | 512 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+171% · −26,1%** | +44% · −5,9% | +31% | −7,9% | 3,2 | 59 d | −2,8% | +25% | 0,22 |
> | 513 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+218% · −24,6%** | +42% · −3,8% | +27% | −3,6% | 4,3 | 75 d | −2,1% | +23% | 0,11 |
> | 514 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+286% · −36,7%** | +51% · −7,1% | +32% | −4,1% | 5,6 | 64 d | −5,7% | +21% | 0,11 |
> | 515 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+346% · −36,6%** | +59% · −7,4% | +37% | −5,3% | 4,9 | 64 d | −5,5% | +26% | 0,18 |
> | 516 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+134% · −26,3%** | +32% · −4,6% | +25% | −4,6% | 3,7 | 64 d | −3,9% | +22% | −0,03 |
> | 517 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+225% · −30,5%** | +46% · −5,7% | +30% | −4,2% | 4,1 | 66 d | −4,1% | +23% | 0,02 |
> | 518 | ADX ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+230% · −42,0%** | +55% · −9,5% | +32% | −6,2% | 3,4 | 59 d | −3,5% | +24% | 0,17 |
> | 519 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+313% · −54,8%** | +61% · −11,7% | +37% | −6,2% | 4,4 | 65 d | −4,8% | +26% | 0,21 |
> | 520 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+272% · −42,1%** | +65% · −10,3% | +37% | −5,9% | 5,6 | 57 d | −6,1% | +20% | 0,19 |
> | 521 | 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+130% · −15,3%** | +45% · −4,1% | +28% | −3,6% | 3,8 | 65 d | −3,8% | +24% | −0,03 |
> | 522 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+246% · −42,1%** | +48% · −8,2% | +29% | −5,8% | 3,2 | 59 d | −2,6% | +23% | 0,12 |
> | 523 | Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+250% · −28,5%** | +56% · −7,0% | +32% | −5,0% | 4,2 | 47 d | −5,8% | +20% | 0,25 |
> | 524 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+198% · −32,0%** | +44% · −6,2% | +29% | −6,0% | 4,2 | 65 d | −4,7% | +26% | 0,00 |
> | 525 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+367% · −54,5%** | +67% · −11,8% | +40% | −5,6% | 5,8 | 41 d | −6,7% | +21% | 0,26 |
> | 526 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+179% · −36,3%** | +41% · −7,3% | +29% | −6,5% | 3,5 | 49 d | −4,6% | +18% | 0,12 |
> | 527 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+285% · −29,8%** | +60% · −7,3% | +34% | −3,6% | 5,9 | 77 d | −3,4% | +21% | 0,11 |
> | 528 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+142% · −35,9%** | +41% · −8,4% | +28% | −3,5% | 4,3 | 49 d | −5,8% | +16% | −0,04 |
> | 529 | IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+114% · −23,3%** | +43% · −7,1% | +30% | −7,6% | 3,1 | 58 d | −2,1% | +26% | 0,27 |
> | 530 | GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+146% · −28,1%** | +53% · −9,4% | +32% | −7,8% | 4,4 | 65 d | −5,0% | +21% | 0,35 |
> | 531 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+235% · −43,9%** | +50% · −8,5% | +31% | −7,6% | 4,8 | 63 d | −5,7% | +20% | 0,17 |
> | 532 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+397% · −40,2%** | +64% · −7,9% | +38% | −5,7% | 4,1 | 65 d | −4,6% | +27% | 0,28 |
> | 533 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+236% · −49,4%** | +51% · −9,9% | +33% | −7,5% | 4,4 | 61 d | −5,6% | +21% | 0,15 |
> | 534 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+300% · −36,1%** | +53% · −6,8% | +32% | −6,8% | 3,9 | 47 d | −5,3% | +24% | 0,29 |
> | 535 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+255% · −36,4%** | +49% · −6,3% | +32% | −4,1% | 3,4 | 57 d | −4,0% | +23% | 0,07 |
> | 536 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+223% · −31,9%** | +47% · −5,9% | +31% | −5,5% | 5,5 | 74 d | −4,1% | +27% | 0,01 |
> | 537 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+267% · −41,0%** | +51% · −8,6% | +31% | −8,3% | 4,1 | 65 d | −4,6% | +25% | 0,29 |
> | 538 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+251% · −49,2%** | +49% · −10,9% | +32% | −4,7% | 4,3 | 67 d | −4,4% | +21% | 0,10 |
> | 539 | 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+188% · −27,0%** | +59% · −8,4% | +36% | −6,6% | 3,7 | 56 d | −4,8% | +28% | 0,21 |
> | 540 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+322% · −33,1%** | +56% · −6,5% | +35% | −6,5% | 5,3 | 64 d | −5,8% | +27% | 0,13 |

> [!example]- Combinações 541 a 570 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 541 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+276% · −39,3%** | +52% · −7,7% | +33% | −5,9% | 4,7 | 55 d | −6,1% | +19% | 0,19 |
> | 542 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+143% · −31,4%** | +41% · −7,2% | +28% | −7,6% | 4,3 | 67 d | −4,4% | +20% | 0,08 |
> | 543 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+290% · −38,7%** | +66% · −9,6% | +41% | −6,6% | 4,3 | 65 d | −4,9% | +28% | 0,28 |
> | 544 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+205% · −26,8%** | +49% · −5,9% | +31% | −4,5% | 3,5 | 61 d | −4,1% | +25% | 0,12 |
> | 545 | 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+143% · −32,8%** | +40% · −8,1% | +29% | −5,1% | 3,6 | 64 d | −4,0% | +22% | −0,00 |
> | 546 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+259% · −45,6%** | +64% · −11,4% | +40% | −8,9% | 5,0 | 54 d | −6,3% | +28% | 0,43 |
> | 547 | Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+361% · −42,6%** | +60% · −8,7% | +35% | −6,7% | 4,8 | 47 d | −6,4% | +21% | 0,31 |
> | 548 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+250% · −46,6%** | +50% · −8,7% | +34% | −5,6% | 4,0 | 61 d | −5,1% | +22% | 0,09 |
> | 549 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+256% · −42,9%** | +49% · −8,9% | +32% | −3,3% | 4,4 | 67 d | −4,6% | +23% | 0,01 |
> | 550 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+204% · −37,8%** | +44% · −6,4% | +30% | −5,2% | 4,7 | 73 d | −3,9% | +24% | 0,08 |
> | 551 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+182% · −26,3%** | +39% · −4,2% | +28% | −5,6% | 3,1 | 56 d | −3,0% | +21% | 0,04 |
> | 552 | Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+139% · −30,6%** | +34% · −5,3% | +26% | −5,8% | 3,0 | 53 d | −3,1% | +24% | 0,04 |
> | 553 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+220% · −34,4%** | +45% · −6,7% | +29% | −6,0% | 3,9 | 67 d | −3,8% | +24% | 0,09 |
> | 554 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+216% · −34,4%** | +44% · −6,7% | +28% | −6,7% | 3,9 | 65 d | −4,5% | +21% | 0,13 |
> | 555 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+186% · −32,8%** | +40% · −5,9% | +29% | −6,3% | 3,4 | 64 d | −3,3% | +25% | 0,07 |
> | 556 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+169% · −23,5%** | +44% · −5,2% | +31% | −6,8% | 3,1 | 59 d | −2,9% | +24% | 0,04 |
> | 557 | Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+268% · −35,0%** | +50% · −6,9% | +30% | −5,1% | 4,9 | 67 d | −5,1% | +19% | 0,13 |
> | 558 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+179% · −41,6%** | +41% · −7,9% | +29% | −5,6% | 4,6 | 67 d | −4,9% | +19% | 0,04 |
> | 559 | 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+154% · −30,8%** | +52% · −10,2% | +36% | −5,5% | 4,4 | 64 d | −5,4% | +23% | −0,09 |
> | 560 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+280% · −53,1%** | +56% · −11,5% | +34% | −5,4% | 5,5 | 63 d | −6,1% | +17% | 0,22 |
> | 561 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+441% · −41,5%** | +67% · −8,3% | +39% | −6,1% | 4,8 | 39 d | −6,6% | +26% | 0,28 |
> | 562 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+114% · −31,4%** | +35% · −7,7% | +24% | −4,1% | 4,9 | 76 d | −3,6% | +15% | 0,02 |
> | 563 | MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+97% · −16,7%** | +37% · −4,6% | +25% | −5,9% | 3,3 | 64 d | −3,0% | +19% | 0,09 |
> | 564 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+261% · −36,2%** | +50% · −7,3% | +30% | −7,3% | 3,8 | 49 d | −5,4% | +19% | 0,16 |
> | 565 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+251% · −39,7%** | +49% · −8,2% | +32% | −8,5% | 3,8 | 67 d | −3,8% | +28% | 0,10 |
> | 566 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+335% · −36,2%** | +56% · −7,0% | +33% | −4,4% | 4,8 | 64 d | −5,7% | +24% | 0,14 |
> | 567 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+92% · −21,6%** | +27% · −4,0% | +22% | −3,7% | 3,3 | 65 d | −2,8% | +20% | 0,00 |
> | 568 | MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+230% · −39,5%** | +45% · −7,8% | +31% | −7,8% | 3,1 | 51 d | −3,8% | +24% | 0,15 |
> | 569 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+232% · −38,6%** | +47% · −7,4% | +33% | −6,1% | 3,7 | 61 d | −4,7% | +23% | 0,07 |
> | 570 | IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+196% · −22,8%** | +48% · −5,1% | +34% | −5,6% | 3,7 | 63 d | −4,6% | +26% | 0,04 |

> [!example]- Combinações 571 a 600 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 571 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+201% · −39,9%** | +43% · −8,0% | +29% | −5,1% | 3,8 | 65 d | −4,4% | +18% | 0,09 |
> | 572 | GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+160% · −38,7%** | +45% · −9,4% | +30% | −5,3% | 4,5 | 65 d | −5,3% | +18% | 0,09 |
> | 573 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+112% · −19,2%** | +42% · −5,8% | +30% | −6,2% | 2,9 | 57 d | −2,1% | +23% | 0,08 |
> | 574 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+290% · −29,2%** | +51% · −5,4% | +32% | −3,0% | 5,2 | 64 d | −6,0% | +24% | −0,00 |
> | 575 | GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+309% · −38,8%** | +68% · −9,4% | +39% | −6,8% | 5,0 | 60 d | −6,2% | +25% | 0,36 |
> | 576 | Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+140% · −28,1%** | +48% · −9,0% | +30% | −7,7% | 3,9 | 61 d | −5,2% | +19% | 0,19 |
> | 577 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+231% · −43,6%** | +47% · −9,0% | +33% | −7,1% | 3,5 | 54 d | −4,7% | +22% | 0,22 |
> | 578 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+187% · −26,1%** | +39% · −4,4% | +28% | −6,0% | 3,0 | 59 d | −2,4% | +24% | 0,13 |
> | 579 | MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+116% · −29,2%** | +43% · −9,7% | +32% | −8,5% | 3,2 | 55 d | −4,0% | +25% | 0,12 |
> | 580 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+258% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,2 | 62 d | −3,5% | +24% | 0,19 |
> | 581 | MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+186% · −32,2%** | +46% · −7,6% | +31% | −6,9% | 3,2 | 54 d | −4,1% | +26% | 0,20 |
> | 582 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+352% · −42,0%** | +62% · −8,4% | +36% | −6,5% | 5,2 | 54 d | −6,6% | +24% | 0,13 |
> | 583 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+272% · −40,1%** | +55% · −7,7% | +35% | −6,9% | 4,7 | 65 d | −5,6% | +29% | 0,17 |
> | 584 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+253% · −39,3%** | +52% · −7,3% | +31% | −5,8% | 4,5 | 47 d | −6,5% | +20% | 0,17 |
> | 585 | GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+237% · −35,8%** | +47% · −6,7% | +29% | −4,7% | 4,1 | 65 d | −5,0% | +19% | 0,13 |
> | 586 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+231% · −36,8%** | +47% · −7,3% | +32% | −7,6% | 3,8 | 65 d | −4,5% | +23% | 0,10 |
> | 587 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+121% · −20,1%** | +30% · −2,7% | +22% | −3,8% | 3,0 | 61 d | −2,7% | +19% | 0,05 |
> | 588 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+349% · −57,3%** | +65% · −12,5% | +39% | −6,4% | 5,1 | 76 d | −4,0% | +25% | 0,21 |
> | 589 | 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+195% · −32,4%** | +50% · −7,6% | +35% | −7,2% | 3,8 | 56 d | −5,4% | +29% | 0,08 |
> | 590 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+129% · −27,8%** | +37% · −6,5% | +28% | −6,0% | 3,0 | 58 d | −2,7% | +24% | 0,10 |
> | 591 | GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+172% · −40,8%** | +59% · −14,0% | +37% | −6,1% | 5,2 | 63 d | −6,3% | +19% | 0,11 |
> | 592 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+133% · −30,5%** | +34% · −5,7% | +24% | −6,3% | 3,7 | 67 d | −3,7% | +22% | 0,02 |
> | 593 | GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+219% · −33,8%** | +53% · −8,6% | +31% | −6,7% | 4,1 | 65 d | −5,0% | +22% | 0,28 |
> | 594 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+116% · −30,6%** | +36% · −7,5% | +24% | −4,1% | 4,6 | 76 d | −3,7% | +16% | −0,01 |
> | 595 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+301% · −33,2%** | +53% · −7,1% | +32% | −5,9% | 3,7 | 37 d | −5,8% | +25% | 0,18 |
> | 596 | 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+130% · −25,2%** | +46% · −7,8% | +33% | −5,4% | 3,9 | 64 d | −5,1% | +25% | −0,12 |
> | 597 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+172% · −29,5%** | +45% · −7,0% | +32% | −6,7% | 3,4 | 64 d | −4,1% | +26% | 0,06 |
> | 598 | MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+170% · −32,1%** | +56% · −10,7% | +35% | −9,7% | 3,5 | 42 d | −5,3% | +27% | 0,41 |
> | 599 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+138% · −23,5%** | +33% · −3,8% | +25% | −4,2% | 2,8 | 58 d | −1,8% | +22% | 0,03 |
> | 600 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+192% · −42,5%** | +43% · −8,7% | +29% | −8,3% | 4,4 | 74 d | −4,0% | +17% | 0,16 |

> [!example]- Combinações 601 a 630 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 601 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+233% · −52,4%** | +51% · −11,0% | +33% | −8,4% | 4,1 | 61 d | −5,7% | +19% | 0,30 |
> | 602 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+270% · −36,8%** | +48% · −7,2% | +29% | −4,0% | 4,6 | 64 d | −6,0% | +20% | 0,08 |
> | 603 | Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+331% · −42,7%** | +56% · −8,7% | +33% | −5,6% | 4,3 | 64 d | −5,7% | +22% | 0,22 |
> | 604 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+224% · −31,3%** | +46% · −6,2% | +30% | −5,8% | 3,5 | 55 d | −5,0% | +22% | 0,17 |
> | 605 | IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+183% · −29,4%** | +46% · −6,7% | +29% | −6,5% | 3,3 | 64 d | −3,9% | +24% | 0,20 |
> | 606 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+185% · −23,5%** | +39% · −4,4% | +28% | −5,1% | 2,9 | 59 d | −2,4% | +22% | 0,05 |
> | 607 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+262% · −41,1%** | +50% · −8,6% | +31% | −8,4% | 4,0 | 65 d | −5,1% | +20% | 0,18 |
> | 608 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+334% · −43,0%** | +57% · −8,8% | +34% | −4,2% | 3,9 | 65 d | −5,0% | +23% | 0,11 |
> | 609 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+145% · −32,1%** | +40% · −7,8% | +29% | −5,1% | 3,5 | 64 d | −4,3% | +23% | 0,08 |
> | 610 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+223% · −34,4%** | +45% · −6,7% | +29% | −6,0% | 3,7 | 67 d | −4,0% | +25% | 0,13 |
> | 611 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+181% · −28,7%** | +39% · −5,1% | +25% | −3,8% | 4,4 | 76 d | −3,5% | +17% | 0,05 |
> | 612 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+206% · −36,8%** | +43% · −7,0% | +31% | −5,3% | 4,2 | 75 d | −3,5% | +18% | 0,05 |
> | 613 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+275% · −43,8%** | +52% · −8,6% | +31% | −6,3% | 2,9 | 55 d | −2,8% | +23% | 0,25 |
> | 614 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+251% · −31,7%** | +48% · −5,9% | +30% | −4,4% | 4,1 | 64 d | −5,6% | +23% | 0,08 |
> | 615 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+239% · −38,0%** | +47% · −6,8% | +28% | −4,1% | 2,8 | 57 d | −2,0% | +21% | 0,14 |
> | 616 | MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+130% · −30,4%** | +38% · −7,1% | +28% | −7,5% | 3,0 | 58 d | −3,1% | +23% | 0,13 |
> | 617 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+254% · −39,7%** | +50% · −8,2% | +32% | −8,5% | 3,6 | 67 d | −3,9% | +27% | 0,16 |
> | 618 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+167% · −39,6%** | +40% · −8,2% | +27% | −8,8% | 3,6 | 65 d | −4,4% | +18% | 0,11 |
> | 619 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+172% · −33,8%** | +60% · −11,7% | +37% | −11,6% | 4,3 | 65 d | −5,5% | +30% | 0,40 |
> | 620 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+147% · −22,7%** | +40% · −4,9% | +29% | −4,7% | 3,4 | 63 d | −4,4% | +23% | −0,05 |
> | 621 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+254% · −31,0%** | +48% · −5,9% | +30% | −4,4% | 4,4 | 64 d | −5,9% | +24% | 0,12 |
> | 622 | GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+163% · −37,4%** | +45% · −8,7% | +30% | −5,4% | 4,2 | 65 d | −5,4% | +19% | 0,10 |
> | 623 | Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+141% · −24,1%** | +48% · −7,4% | +30% | −5,6% | 3,7 | 61 d | −5,1% | +22% | 0,10 |
> | 624 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+332% · −36,3%** | +56% · −7,1% | +33% | −4,4% | 4,7 | 64 d | −6,1% | +23% | 0,09 |
> | 625 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+291% · −46,4%** | +59% · −9,7% | +38% | −9,4% | 4,4 | 61 d | −6,2% | +33% | 0,36 |
> | 626 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+222% · −34,6%** | +47% · −6,6% | +31% | −6,7% | 4,9 | 74 d | −4,7% | +27% | 0,17 |
> | 627 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+254% · −27,0%** | +48% · −4,8% | +30% | −3,7% | 4,3 | 64 d | −5,8% | +23% | 0,02 |
> | 628 | IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+197% · −38,4%** | +51% · −9,7% | +35% | −9,6% | 3,8 | 67 d | −4,3% | +30% | 0,28 |
> | 629 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+371% · −38,2%** | +60% · −7,7% | +35% | −7,9% | 4,1 | 64 d | −5,5% | +27% | 0,30 |
> | 630 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+307% · −29,9%** | +52% · −5,6% | +31% | −2,7% | 6,0 | 90 d | −2,0% | +21% | 0,02 |

> [!example]- Combinações 631 a 660 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 631 | ADX ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+277% · −48,4%** | +53% · −10,1% | +32% | −8,3% | 3,2 | 59 d | −4,2% | +26% | 0,25 |
> | 632 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+257% · −41,3%** | +60% · −10,3% | +35% | −6,8% | 3,0 | 57 d | −3,5% | +23% | 0,34 |
> | 633 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+293% · −38,0%** | +53% · −7,9% | +32% | −6,8% | 5,1 | 76 d | −4,5% | +19% | 0,18 |
> | 634 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+185% · −26,3%** | +40% · −4,2% | +28% | −5,5% | 2,9 | 56 d | −3,3% | +21% | 0,11 |
> | 635 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+133% · −30,6%** | +33% · −5,6% | +25% | −5,4% | 4,1 | 79 d | −2,4% | +16% | 0,03 |
> | 636 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+188% · −29,0%** | +40% · −5,0% | +29% | −5,0% | 3,2 | 64 d | −3,6% | +24% | 0,07 |
> | 637 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+127% · −23,3%** | +37% · −5,0% | +27% | −5,3% | 2,8 | 58 d | −2,4% | +23% | 0,11 |
> | 638 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+193% · −41,4%** | +52% · −11,1% | +30% | −5,8% | 4,7 | 63 d | −6,4% | +15% | 0,17 |
> | 639 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+284% · −50,6%** | +56% · −10,6% | +34% | −4,6% | 5,9 | 66 d | −6,2% | +18% | 0,09 |
> | 640 | Pôr do sol ·POR + Tendência ·ADX | **+82% · −20,0%** | +45% · −9,7% | +32% | −7,4% | 3,2 | 55 d | −4,5% | +22% | 0,06 |
> | 641 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+136% · −25,4%** | +33% · −4,3% | +25% | −4,8% | 3,3 | 64 d | −4,2% | +23% | 0,00 |
> | 642 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+220% · −43,2%** | +48% · −9,2% | +32% | −10,7% | 4,3 | 74 d | −4,2% | +22% | 0,18 |
> | 643 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+315% · −30,4%** | +65% · −7,5% | +36% | −6,0% | 4,4 | 64 d | −6,0% | +27% | 0,22 |
> | 644 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+343% · −36,6%** | +59% · −7,4% | +37% | −5,3% | 4,7 | 64 d | −6,3% | +25% | 0,11 |
> | 645 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+258% · −36,0%** | +50% · −7,3% | +30% | −7,3% | 3,8 | 37 d | −6,3% | +20% | 0,14 |
> | 646 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+257% · −41,9%** | +50% · −7,0% | +33% | −4,7% | 3,7 | 64 d | −5,2% | +25% | −0,01 |
> | 647 | IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+115% · −14,1%** | +59% · −6,5% | +38% | −6,4% | 3,7 | 59 d | −5,5% | +28% | 0,09 |
> | 648 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+187% · −40,5%** | +50% · −9,7% | +33% | −6,9% | 4,3 | 65 d | −5,7% | +24% | 0,14 |
> | 649 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+189% · −32,8%** | +40% · −6,0% | +29% | −6,3% | 3,2 | 64 d | −3,6% | +25% | 0,13 |
> | 650 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+300% · −38,7%** | +52% · −7,6% | +32% | −3,9% | 5,7 | 81 d | −4,0% | +18% | 0,08 |
> | 651 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+249% · −29,5%** | +56% · −7,8% | +32% | −4,2% | 4,0 | 47 d | −6,3% | +22% | 0,10 |
> | 652 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+222% · −38,9%** | +48% · −7,9% | +32% | −8,7% | 3,9 | 65 d | −5,2% | +27% | 0,11 |
> | 653 | MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+108% · −20,2%** | +33% · −3,9% | +23% | −5,2% | 3,6 | 73 d | −2,8% | +20% | 0,07 |
> | 654 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+331% · −41,8%** | +60% · −8,8% | +33% | −6,8% | 4,5 | 54 d | −6,8% | +21% | 0,30 |
> | 655 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+222% · −44,9%** | +45% · −8,7% | +30% | −4,4% | 5,0 | 81 d | −3,7% | +16% | 0,09 |
> | 656 | Bollinger ·ADX + Tendência ·ADX | **+127% · −24,0%** | +64% · −11,8% | +37% | −9,2% | 4,2 | 42 d | −6,7% | +23% | 0,31 |
> | 657 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+195% · −34,3%** | +44% · −6,8% | +29% | −7,0% | 4,1 | 67 d | −5,1% | +27% | 0,09 |
> | 658 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+310% · −31,6%** | +53% · −5,8% | +32% | −6,6% | 4,7 | 65 d | −6,0% | +25% | 0,12 |
> | 659 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+294% · −37,6%** | +52% · −7,6% | +31% | −6,1% | 3,6 | 67 d | −4,1% | +26% | 0,10 |
> | 660 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+184% · −27,9%** | +39% · −4,9% | +24% | −3,8% | 4,2 | 76 d | −3,7% | +18% | 0,02 |

> [!example]- Combinações 661 a 690 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 661 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+223% · −39,7%** | +45% · −8,0% | +31% | −7,7% | 3,5 | 63 d | −4,9% | +21% | 0,25 |
> | 662 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+182% · −39,9%** | +41% · −7,4% | +29% | −5,6% | 4,2 | 67 d | −5,3% | +20% | 0,03 |
> | 663 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+179% · −44,4%** | +40% · −9,4% | +29% | −5,7% | 3,4 | 64 d | −4,7% | +19% | −0,01 |
> | 664 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+314% · −32,5%** | +56% · −6,5% | +35% | −5,6% | 4,1 | 45 d | −6,7% | +27% | 0,11 |
> | 665 | GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+268% · −40,7%** | +50% · −8,1% | +31% | −4,8% | 4,8 | 74 d | −4,8% | +18% | 0,16 |
> | 666 | GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+267% · −44,8%** | +55% · −8,7% | +35% | −8,1% | 4,6 | 65 d | −6,0% | +29% | 0,29 |
> | 667 | ADX ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+260% · −49,9%** | +61% · −12,3% | +36% | −9,2% | 3,3 | 59 d | −4,8% | +28% | 0,36 |
> | 668 | ADX ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+227% · −42,9%** | +55% · −10,7% | +33% | −7,7% | 3,2 | 60 d | −4,4% | +23% | 0,22 |
> | 669 | Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+128% · −26,6%** | +38% · −5,8% | +28% | −6,4% | 2,8 | 53 d | −3,6% | +24% | 0,01 |
> | 670 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+313% · −40,5%** | +58% · −8,4% | +34% | −7,0% | 4,5 | 56 d | −6,7% | +25% | 0,10 |
> | 671 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+283% · −32,9%** | +52% · −6,2% | +33% | −7,0% | 3,9 | 64 d | −5,6% | +26% | 0,12 |
> | 672 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+225% · −38,3%** | +46% · −7,5% | +30% | −3,5% | 3,7 | 67 d | −4,4% | +24% | 0,01 |
> | 673 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+159% · −42,5%** | +38% · −8,7% | +29% | −8,1% | 3,0 | 55 d | −4,0% | +18% | 0,19 |
> | 674 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+281% · −34,2%** | +52% · −7,0% | +33% | −4,7% | 4,5 | 67 d | −5,6% | +22% | 0,13 |
> | 675 | ADX ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+343% · −54,8%** | +62% · −11,4% | +35% | −7,0% | 4,0 | 50 d | −6,5% | +22% | 0,25 |
> | 676 | IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+125% · −23,4%** | +37% · −4,9% | +27% | −5,6% | 2,9 | 61 d | −3,1% | +24% | 0,04 |
> | 677 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+123% · −25,4%** | +36% · −5,8% | +27% | −6,5% | 3,4 | 64 d | −4,8% | +24% | 0,02 |
> | 678 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+309% · −57,5%** | +62% · −12,8% | +37% | −7,6% | 4,1 | 65 d | −5,6% | +25% | 0,31 |
> | 679 | IFR ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+177% · −28,1%** | +46% · −6,3% | +33% | −6,8% | 3,3 | 63 d | −4,7% | +26% | 0,13 |
> | 680 | Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+126% · −30,5%** | +38% · −7,0% | +28% | −7,6% | 3,0 | 47 d | −4,5% | +25% | 0,04 |
> | 681 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+361% · −43,6%** | +64% · −8,9% | +40% | −7,9% | 4,3 | 44 d | −7,0% | +33% | 0,29 |
> | 682 | MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+173% · −32,7%** | +46% · −7,8% | +32% | −8,2% | 3,2 | 64 d | −4,1% | +27% | 0,21 |
> | 683 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+144% · −23,4%** | +39% · −5,0% | +29% | −3,6% | 3,6 | 67 d | −4,3% | +24% | −0,00 |
> | 684 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+286% · −32,9%** | +52% · −6,1% | +33% | −6,9% | 4,1 | 64 d | −5,9% | +25% | 0,18 |
> | 685 | GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+240% · −34,2%** | +47% · −6,1% | +29% | −4,7% | 3,9 | 65 d | −5,4% | +20% | 0,12 |
> | 686 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+269% · −38,5%** | +51% · −7,0% | +32% | −5,9% | 4,1 | 65 d | −5,6% | +24% | 0,18 |
> | 687 | IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+183% · −34,9%** | +61% · −11,8% | +41% | −11,3% | 4,0 | 67 d | −5,1% | +35% | 0,33 |
> | 688 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+196% · −36,2%** | +43% · −7,1% | +29% | −7,4% | 4,5 | 77 d | −4,2% | +19% | 0,03 |
> | 689 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+302% · −44,4%** | +54% · −8,6% | +33% | −5,4% | 3,2 | 65 d | −3,7% | +26% | 0,12 |
> | 690 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+172% · −23,5%** | +44% · −5,5% | +31% | −6,7% | 2,8 | 59 d | −2,9% | +24% | 0,14 |

> [!example]- Combinações 691 a 720 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 691 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+304% · −38,1%** | +53% · −7,5% | +32% | −3,9% | 5,6 | 83 d | −3,7% | +19% | 0,07 |
> | 692 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+237% · −44,5%** | +57% · −12,0% | +36% | −4,7% | 4,2 | 67 d | −5,4% | +23% | 0,05 |
> | 693 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+213% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,9 | 53 d | −4,3% | +22% | 0,09 |
> | 694 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+183% · −37,0%** | +42% · −7,3% | +26% | −4,7% | 4,3 | 71 d | −5,2% | +18% | 0,03 |
> | 695 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+205% · −32,2%** | +51% · −8,0% | +32% | −6,8% | 3,7 | 67 d | −4,8% | +27% | 0,02 |
> | 696 | VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+166% · −37,7%** | +46% · −9,3% | +32% | −8,6% | 3,4 | 53 d | −5,5% | +18% | 0,27 |
> | 697 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+83% · −14,4%** | +28% · −3,0% | +23% | −3,2% | 3,9 | 81 d | −2,0% | +18% | −0,05 |
> | 698 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+257% · −38,0%** | +50% · −7,6% | +30% | −8,2% | 3,6 | 53 d | −5,8% | +18% | 0,27 |
> | 699 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+192% · −37,7%** | +50% · −9,1% | +35% | −7,2% | 4,1 | 75 d | −4,2% | +18% | 0,15 |
> | 700 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+103% · −25,4%** | +40% · −7,7% | +27% | −3,7% | 4,7 | 76 d | −4,7% | +17% | −0,10 |
> | 701 | GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+219% · −41,7%** | +72% · −14,1% | +43% | −8,4% | 5,6 | 54 d | −7,5% | +25% | 0,43 |
> | 702 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+250% · −41,7%** | +50% · −8,8% | +32% | −9,3% | 3,5 | 67 d | −4,4% | +28% | 0,26 |
> | 703 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+227% · −28,2%** | +45% · −5,5% | +29% | −2,9% | 6,3 | 92 d | −2,7% | +18% | 0,06 |
> | 704 | MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+232% · −39,6%** | +46% · −7,8% | +31% | −7,8% | 2,8 | 53 d | −4,0% | +24% | 0,19 |
> | 705 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+236% · −36,9%** | +46% · −6,5% | +28% | −3,5% | 3,2 | 65 d | −4,2% | +20% | 0,03 |
> | 706 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+275% · −37,1%** | +50% · −6,9% | +30% | −4,2% | 3,7 | 77 d | −2,1% | +22% | 0,13 |
> | 707 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+255% · −43,9%** | +51% · −8,8% | +33% | −6,6% | 3,7 | 76 d | −2,9% | +23% | 0,15 |
> | 708 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+224% · −38,9%** | +48% · −7,9% | +32% | −8,7% | 3,8 | 65 d | −5,3% | +27% | 0,15 |
> | 709 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+122% · −29,8%** | +37% · −7,1% | +27% | −7,0% | 3,9 | 79 d | −2,9% | +16% | 0,11 |
> | 710 | Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+26% · −11,1%** | +20% · −5,0% | +17% | −4,5% | 2,7 | 64 d | −1,7% | +14% | 0,01 |
> | 711 | Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+128% · −30,5%** | +38% · −7,0% | +28% | −7,6% | 2,8 | 53 d | −4,1% | +25% | 0,10 |
> | 712 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+202% · −33,3%** | +43% · −6,3% | +29% | −6,9% | 3,7 | 67 d | −4,7% | +25% | −0,04 |
> | 713 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+316% · −40,5%** | +59% · −8,4% | +34% | −6,9% | 4,3 | 56 d | −6,8% | +26% | 0,15 |
> | 714 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+159% · −24,3%** | +35% · −4,2% | +24% | −2,5% | 4,9 | 89 d | −2,7% | +21% | 0,01 |
> | 715 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+213% · −28,6%** | +43% · −5,1% | +27% | −5,7% | 3,7 | 67 d | −4,9% | +21% | 0,11 |
> | 716 | IFR ·ADX + MACD ·ADX | **+102% · −19,0%** | +54% · −9,0% | +37% | −9,9% | 2,8 | 58 d | −3,6% | +27% | 0,44 |
> | 717 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+251% · −39,1%** | +59% · −10,3% | +34% | −9,6% | 4,0 | 65 d | −5,7% | +28% | 0,36 |
> | 718 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+310% · −42,5%** | +59% · −9,0% | +34% | −7,8% | 4,2 | 60 d | −6,5% | +24% | 0,28 |
> | 719 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+298% · −37,6%** | +52% · −7,6% | +31% | −6,1% | 3,4 | 67 d | −4,2% | +27% | 0,14 |
> | 720 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+103% · −28,0%** | +28% · −5,1% | +22% | −2,3% | 3,1 | 64 d | −4,1% | +19% | −0,02 |

> [!example]- Combinações 721 a 750 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 721 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+215% · −52,4%** | +49% · −11,0% | +33% | −9,7% | 3,9 | 61 d | −6,1% | +20% | 0,22 |
> | 722 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+269% · −29,1%** | +59% · −7,1% | +36% | −4,2% | 5,4 | 64 d | −7,0% | +24% | 0,04 |
> | 723 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+286% · −47,2%** | +55% · −9,8% | +36% | −7,9% | 3,7 | 76 d | −3,3% | +26% | 0,21 |
> | 724 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+157% · −23,5%** | +53% · −7,3% | +36% | −9,4% | 3,0 | 59 d | −4,4% | +26% | 0,27 |
> | 725 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+202% · −32,2%** | +50% · −8,0% | +30% | −7,7% | 3,8 | 65 d | −5,5% | +23% | 0,12 |
> | 726 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+189% · −53,5%** | +44% · −12,4% | +30% | −7,7% | 4,0 | 65 d | −5,8% | +15% | 0,18 |
> | 727 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+167% · −25,0%** | +44% · −5,5% | +26% | −3,5% | 4,2 | 76 d | −4,4% | +18% | −0,00 |
> | 728 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+197% · −34,3%** | +44% · −6,8% | +29% | −7,0% | 3,9 | 67 d | −5,2% | +27% | 0,12 |
> | 729 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+253% · −45,0%** | +51% · −8,0% | +34% | −5,6% | 3,8 | 65 d | −5,4% | +23% | 0,14 |
> | 730 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+181% · −42,7%** | +40% · −8,9% | +29% | −5,8% | 3,4 | 64 d | −5,0% | +20% | 0,05 |
> | 731 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+298% · −39,6%** | +53% · −7,2% | +32% | −3,8% | 2,9 | 65 d | −3,0% | +22% | 0,12 |
> | 732 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+228% · −26,3%** | +44% · −4,8% | +29% | −2,1% | 5,5 | 92 d | −2,8% | +19% | −0,01 |
> | 733 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+209% · −34,9%** | +44% · −7,0% | +31% | −5,4% | 4,1 | 78 d | −3,8% | +19% | 0,07 |
> | 734 | 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+183% · −35,1%** | +40% · −6,7% | +29% | −6,4% | 3,2 | 65 d | −4,2% | +22% | 0,04 |
> | 735 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+245% · −44,8%** | +50% · −9,5% | +32% | −9,4% | 3,5 | 67 d | −4,5% | +22% | 0,11 |
> | 736 | ADX ·ADX + Bollinger ·ADX + Tendência ·ADX | **+212% · −45,6%** | +68% · −15,3% | +38% | −8,7% | 3,4 | 60 d | −5,3% | +27% | 0,36 |
> | 737 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+291% · −47,8%** | +55% · −8,7% | +36% | −6,9% | 3,5 | 64 d | −5,3% | +27% | 0,10 |
> | 738 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+277% · −36,0%** | +53% · −7,2% | +34% | −7,1% | 3,8 | 67 d | −5,2% | +30% | 0,11 |
> | 739 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+256% · −42,7%** | +50% · −7,9% | +33% | −6,0% | 3,4 | 64 d | −5,2% | +23% | 0,07 |
> | 740 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+183% · −37,9%** | +41% · −7,6% | +29% | −10,8% | 2,8 | 61 d | −3,5% | +23% | 0,25 |
> | 741 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+330% · −39,8%** | +58% · −7,8% | +35% | −8,0% | 3,6 | 47 d | −6,3% | +27% | 0,32 |
> | 742 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+312% · −49,0%** | +59% · −10,0% | +38% | −8,1% | 3,8 | 76 d | −3,6% | +28% | 0,17 |
> | 743 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+210% · −26,1%** | +51% · −6,4% | +32% | −3,1% | 5,6 | 92 d | −3,1% | +19% | 0,00 |
> | 744 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+157% · −28,3%** | +36% · −5,2% | +23% | −4,0% | 3,3 | 67 d | −4,1% | +19% | 0,03 |
> | 745 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+83% · −20,6%** | +29% · −4,7% | +23% | −4,9% | 3,0 | 65 d | −3,7% | +22% | 0,03 |
> | 746 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+281% · −49,2%** | +52% · −10,9% | +33% | −5,0% | 4,8 | 64 d | −6,9% | +20% | 0,12 |
> | 747 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+236% · −31,7%** | +45% · −5,8% | +27% | −4,3% | 3,7 | 64 d | −5,8% | +21% | 0,05 |
> | 748 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+167% · −34,5%** | +39% · −6,3% | +29% | −7,1% | 2,6 | 55 d | −3,1% | +24% | 0,08 |
> | 749 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+135% · −17,0%** | +32% · −2,5% | +25% | −3,7% | 3,2 | 66 d | −4,1% | +20% | −0,06 |
> | 750 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+333% · −59,0%** | +66% · −13,2% | +40% | −8,7% | 4,0 | 65 d | −6,0% | +30% | 0,38 |

> [!example]- Combinações 751 a 780 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 751 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+222% · −45,0%** | +46% · −9,5% | +30% | −4,5% | 3,6 | 67 d | −4,8% | +22% | 0,06 |
> | 752 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+199% · −46,4%** | +44% · −8,9% | +30% | −5,0% | 4,2 | 67 d | −5,9% | +19% | 0,10 |
> | 753 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+166% · −27,0%** | +36% · −4,6% | +25% | −6,1% | 3,4 | 73 d | −3,0% | +18% | 0,08 |
> | 754 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+224% · −41,8%** | +46% · −8,5% | +30% | −4,4% | 4,9 | 83 d | −4,0% | +17% | 0,09 |
> | 755 | MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+165% · −37,9%** | +39% · −7,3% | +29% | −8,3% | 2,9 | 57 d | −4,2% | +25% | 0,10 |
> | 756 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+121% · −17,1%** | +35% · −3,2% | +27% | −5,1% | 3,3 | 65 d | −4,7% | +22% | −0,11 |
> | 757 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+92% · −28,0%** | +30% · −6,7% | +23% | −3,2% | 3,2 | 64 d | −4,6% | +19% | −0,06 |
> | 758 | 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+131% · −32,6%** | +47% · −11,0% | +33% | −7,4% | 3,4 | 64 d | −5,2% | +23% | 0,13 |
> | 759 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+208% · −28,5%** | +41% · −5,0% | +25% | −2,4% | 5,4 | 92 d | −3,1% | +16% | 0,03 |
> | 760 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+170% · −39,5%** | +41% · −8,2% | +27% | −8,8% | 3,4 | 65 d | −5,0% | +19% | 0,12 |
> | 761 | Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+207% · −46,9%** | +52% · −11,1% | +33% | −6,0% | 4,9 | 81 d | −4,5% | +15% | 0,20 |
> | 762 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+282% · −35,1%** | +53% · −6,9% | +33% | −7,8% | 3,6 | 64 d | −5,7% | +27% | 0,27 |
> | 763 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+289% · −45,7%** | +54% · −9,0% | +35% | −6,7% | 4,0 | 80 d | −3,6% | +22% | 0,16 |
> | 764 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+187% · −34,4%** | +49% · −8,4% | +32% | −5,6% | 3,6 | 65 d | −5,4% | +20% | 0,02 |
> | 765 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+315% · −46,5%** | +57% · −10,1% | +36% | −6,3% | 4,8 | 64 d | −7,0% | +25% | 0,17 |
> | 766 | VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+201% · −43,4%** | +46% · −8,8% | +32% | −9,1% | 3,1 | 50 d | −5,3% | +26% | 0,27 |
> | 767 | IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+169% · −26,2%** | +45% · −5,7% | +31% | −7,2% | 2,9 | 64 d | −3,7% | +22% | 0,20 |
> | 768 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+180% · −38,9%** | +49% · −9,4% | +32% | −9,6% | 4,3 | 75 d | −5,0% | +19% | 0,13 |
> | 769 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+105% · −23,9%** | +41% · −6,9% | +26% | −3,5% | 4,4 | 76 d | −4,9% | +18% | −0,14 |
> | 770 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+179% · −49,7%** | +40% · −11,3% | +29% | −7,3% | 3,2 | 64 d | −4,7% | +18% | 0,12 |
> | 771 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+334% · −49,4%** | +62% · −10,5% | +39% | −8,6% | 3,2 | 65 d | −4,5% | +29% | 0,22 |
> | 772 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+256% · −45,2%** | +50% · −9,7% | +33% | −5,7% | 4,8 | 83 d | −4,1% | +22% | 0,13 |
> | 773 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+153% · −38,2%** | +37% · −6,9% | +26% | −3,4% | 4,6 | 78 d | −4,7% | +15% | 0,03 |
> | 774 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+171% · −31,7%** | +38% · −6,0% | +26% | −3,5% | 3,9 | 72 d | −4,9% | +22% | −0,08 |
> | 775 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+122% · −28,2%** | +37% · −6,7% | +25% | −7,1% | 3,4 | 67 d | −4,6% | +24% | −0,02 |
> | 776 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+169% · −39,5%** | +38% · −8,2% | +26% | −4,6% | 3,7 | 72 d | −4,6% | +20% | −0,01 |
> | 777 | Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+59% · −8,4%** | +35% · −2,8% | +21% | −1,5% | 3,3 | 70 d | −4,1% | +18% | 0,01 |
> | 778 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+131% · −28,8%** | +48% · −8,7% | +32% | −9,0% | 4,1 | 67 d | −5,8% | +23% | 0,02 |
> | 779 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+222% · −52,9%** | +47% · −11,6% | +32% | −6,4% | 4,4 | 67 d | −6,2% | +15% | 0,20 |
> | 780 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+229% · −40,7%** | +48% · −7,9% | +34% | −8,0% | 3,7 | 73 d | −4,3% | +26% | 0,19 |

> [!example]- Combinações 781 a 810 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 781 | Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+358% · −41,0%** | +61% · −8,1% | +36% | −7,0% | 3,8 | 53 d | −6,7% | +31% | 0,26 |
> | 782 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+209% · −44,7%** | +44% · −9,3% | +32% | −9,2% | 3,2 | 64 d | −4,8% | +23% | 0,17 |
> | 783 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+252% · −40,4%** | +50% · −7,9% | +33% | −6,9% | 3,5 | 67 d | −4,9% | +27% | 0,10 |
> | 784 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+279% · −47,4%** | +55% · −9,9% | +36% | −8,0% | 3,5 | 76 d | −2,9% | +27% | 0,13 |
> | 785 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+305% · −43,4%** | +54% · −8,3% | +33% | −5,4% | 3,0 | 65 d | −4,0% | +25% | 0,16 |
> | 786 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+417% · −41,6%** | +67% · −8,8% | +37% | −4,6% | 3,8 | 64 d | −6,1% | +25% | 0,25 |
> | 787 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+302% · −41,5%** | +58% · −8,2% | +36% | −7,3% | 4,4 | 66 d | −6,3% | +29% | 0,21 |
> | 788 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+212% · −26,2%** | +51% · −6,4% | +32% | −3,0% | 5,6 | 92 d | −3,5% | +20% | −0,00 |
> | 789 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+119% · −26,0%** | +31% · −4,5% | +25% | −6,1% | 2,9 | 65 d | −3,6% | +23% | 0,02 |
> | 790 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+191% · −49,4%** | +44% · −11,0% | +30% | −6,2% | 4,3 | 74 d | −5,2% | +17% | 0,05 |
> | 791 | Donchian ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+282% · −32,6%** | +63% · −8,0% | +36% | −6,7% | 3,9 | 45 d | −7,0% | +28% | 0,25 |
> | 792 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+321% · −43,3%** | +60% · −9,1% | +36% | −5,0% | 3,5 | 65 d | −5,3% | +28% | 0,11 |
> | 793 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+442% · −55,4%** | +72% · −11,2% | +40% | −7,4% | 4,3 | 54 d | −7,4% | +26% | 0,35 |
> | 794 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+399% · −53,8%** | +70% · −11,1% | +39% | −7,1% | 3,9 | 65 d | −6,0% | +27% | 0,37 |
> | 795 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+279% · −39,1%** | +52% · −7,9% | +30% | −5,2% | 4,4 | 65 d | −6,6% | +17% | 0,15 |
> | 796 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+254% · −45,4%** | +50% · −9,8% | +33% | −5,7% | 4,9 | 81 d | −4,7% | +21% | 0,11 |
> | 797 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+271% · −32,8%** | +49% · −6,2% | +30% | −6,8% | 3,8 | 65 d | −5,9% | +25% | 0,11 |
> | 798 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+208% · −32,2%** | +52% · −8,0% | +32% | −6,7% | 3,5 | 67 d | −5,0% | +28% | 0,10 |
> | 799 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+189% · −33,8%** | +40% · −6,6% | +26% | −6,3% | 3,3 | 67 d | −4,3% | +23% | 0,05 |
> | 800 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+211% · −27,7%** | +42% · −4,8% | +25% | −2,2% | 5,3 | 92 d | −3,4% | +17% | 0,01 |
> | 801 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+300% · −35,2%** | +54% · −7,0% | +33% | −6,2% | 4,4 | 74 d | −5,3% | +29% | 0,15 |
> | 802 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+322% · −50,5%** | +59% · −10,0% | +38% | −8,0% | 4,0 | 80 d | −4,0% | +27% | 0,19 |
> | 803 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+161% · −31,3%** | +38% · −6,3% | +28% | −8,3% | 3,6 | 78 d | −3,1% | +20% | 0,15 |
> | 804 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+272% · −36,9%** | +52% · −7,1% | +32% | −6,0% | 3,9 | 65 d | −6,0% | +25% | 0,19 |
> | 805 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+170% · −25,9%** | +44% · −5,5% | +26% | −3,5% | 4,0 | 76 d | −4,5% | +20% | −0,04 |
> | 806 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+306% · −38,1%** | +57% · −7,6% | +36% | −9,1% | 3,6 | 45 d | −6,6% | +28% | 0,30 |
> | 807 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+96% · −25,3%** | +32% · −5,7% | +22% | −4,2% | 3,5 | 72 d | −4,3% | +18% | −0,00 |
> | 808 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+265% · −37,3%** | +51% · −7,6% | +31% | −6,8% | 3,7 | 65 d | −5,7% | +26% | 0,09 |
> | 809 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+234% · −33,0%** | +45% · −5,8% | +28% | −4,5% | 3,4 | 72 d | −4,0% | +22% | −0,01 |
> | 810 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+343% · −53,4%** | +63% · −12,1% | +37% | −4,9% | 4,7 | 54 d | −7,8% | +22% | 0,15 |

> [!example]- Combinações 811 a 840 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 811 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+272% · −35,7%** | +50% · −7,2% | +31% | −5,2% | 3,5 | 65 d | −5,3% | +21% | 0,09 |
> | 812 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+175% · −29,3%** | +45% · −7,0% | +32% | −6,7% | 3,0 | 64 d | −4,5% | +26% | 0,16 |
> | 813 | GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+222% · −33,3%** | +54% · −7,1% | +32% | −4,7% | 4,0 | 65 d | −6,2% | +21% | 0,12 |
> | 814 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+235% · −26,8%** | +55% · −6,4% | +34% | −4,8% | 4,3 | 64 d | −6,8% | +26% | 0,01 |
> | 815 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+330% · −44,5%** | +57% · −9,7% | +34% | −9,4% | 3,3 | 65 d | −5,0% | +28% | 0,30 |
> | 816 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+239% · −48,4%** | +51% · −9,5% | +33% | −7,5% | 4,3 | 75 d | −5,2% | +22% | 0,18 |
> | 817 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+182% · −21,9%** | +38% · −3,9% | +24% | −2,4% | 4,7 | 92 d | −3,0% | +18% | 0,02 |
> | 818 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+316% · −53,9%** | +62% · −11,3% | +37% | −6,3% | 4,2 | 76 d | −4,9% | +27% | 0,20 |
> | 819 | ADX ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+223% · −37,3%** | +54% · −9,0% | +31% | −5,5% | 2,5 | 57 d | −3,2% | +23% | 0,23 |
> | 820 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+275% · −42,1%** | +52% · −8,6% | +33% | −7,9% | 4,4 | 64 d | −7,0% | +21% | 0,13 |
> | 821 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+226% · −37,1%** | +45% · −7,3% | +30% | −3,1% | 5,3 | 90 d | −4,0% | +18% | 0,03 |
> | 822 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+295% · −39,6%** | +52% · −8,2% | +31% | −7,0% | 3,3 | 67 d | −4,7% | +25% | 0,24 |
> | 823 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+301% · −44,8%** | +57% · −9,7% | +36% | −8,4% | 4,0 | 55 d | −7,1% | +23% | 0,39 |
> | 824 | Quinta ·PR2 + Pullback ·PUL ⚠️ | **+39% · −9,3%** | +26% · −4,2% | +21% | −2,7% | 6,2 | 105 d | −2,4% | +14% | −0,02 |
> | 825 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+258% · −43,9%** | +51% · −8,9% | +33% | −6,7% | 3,6 | 77 d | −3,4% | +24% | 0,15 |
> | 826 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+266% · −54,3%** | +54% · −11,2% | +34% | −5,8% | 4,3 | 77 d | −4,8% | +22% | 0,08 |
> | 827 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+225% · −43,3%** | +46% · −8,9% | +30% | −4,5% | 3,4 | 67 d | −4,9% | +23% | 0,11 |
> | 828 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+220% · −40,9%** | +48% · −8,5% | +32% | −9,6% | 3,6 | 65 d | −5,8% | +28% | 0,27 |
> | 829 | MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+117% · −30,3%** | +44% · −9,9% | +32% | −10,5% | 3,1 | 47 d | −5,6% | +23% | 0,26 |
> | 830 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+346% · −55,0%** | +62% · −10,9% | +35% | −5,6% | 3,8 | 65 d | −6,0% | +23% | 0,21 |
> | 831 | GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+209% · −31,9%** | +54% · −7,7% | +34% | −7,0% | 4,7 | 74 d | −5,8% | +29% | 0,13 |
> | 832 | ADX ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+302% · −46,3%** | +54% · −9,3% | +33% | −6,7% | 3,0 | 65 d | −4,2% | +26% | 0,19 |
> | 833 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+247% · −40,3%** | +50% · −7,8% | +33% | −5,8% | 4,4 | 81 d | −4,6% | +25% | 0,08 |
> | 834 | IFR ·ADX + Pôr do sol ·POR | **+78% · −12,3%** | +43% · −5,9% | +29% | −3,8% | 3,4 | 76 d | −3,2% | +20% | −0,04 |
> | 835 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+297% · −50,2%** | +58% · −9,9% | +37% | −7,7% | 3,1 | 64 d | −4,8% | +24% | 0,25 |
> | 836 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+245% · −30,0%** | +46% · −5,7% | +28% | −5,2% | 5,4 | 92 d | −3,9% | +20% | 0,14 |
> | 837 | MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+177% · −29,0%** | +38% · −5,2% | +27% | −7,1% | 3,6 | 74 d | −4,5% | +23% | 0,12 |
> | 838 | ADX ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+272% · −45,0%** | +52% · −9,1% | +32% | −7,3% | 3,2 | 65 d | −4,9% | +26% | 0,13 |
> | 839 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+155% · −37,5%** | +45% · −9,8% | +29% | −10,2% | 3,4 | 65 d | −5,5% | +20% | 0,06 |
> | 840 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+279% · −31,7%** | +52% · −5,8% | +33% | −6,1% | 3,4 | 45 d | −6,5% | +26% | 0,05 |

> [!example]- Combinações 841 a 870 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 841 | GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+351% · −44,6%** | +62% · −9,1% | +37% | −7,7% | 4,2 | 65 d | −6,6% | +32% | 0,31 |
> | 842 | MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+167% · −37,9%** | +39% · −7,3% | +29% | −8,3% | 2,6 | 57 d | −3,9% | +24% | 0,15 |
> | 843 | MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+160% · −30,7%** | +54% · −10,3% | +38% | −9,4% | 3,2 | 64 d | −5,4% | +29% | 0,29 |
> | 844 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+258% · −35,5%** | +52% · −7,7% | +31% | −4,9% | 4,2 | 70 d | −6,1% | +22% | 0,07 |
> | 845 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+321% · −41,6%** | +56% · −8,7% | +33% | −9,3% | 3,6 | 64 d | −6,0% | +23% | 0,28 |
> | 846 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+302% · −38,7%** | +53% · −7,4% | +31% | −3,6% | 2,7 | 65 d | −3,1% | +21% | 0,14 |
> | 847 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+272% · −35,3%** | +50% · −6,8% | +30% | −7,9% | 3,5 | 64 d | −5,9% | +25% | 0,23 |
> | 848 | MACD ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+215% · −39,5%** | +53% · −10,1% | +34% | −10,1% | 3,0 | 51 d | −5,6% | +25% | 0,34 |
> | 849 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+222% · −37,2%** | +46% · −6,5% | +30% | −4,1% | 2,6 | 55 d | −3,8% | +22% | 0,07 |
> | 850 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+277% · −42,6%** | +51% · −8,2% | +31% | −5,3% | 3,0 | 65 d | −4,3% | +22% | 0,12 |
> | 851 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+213% · −34,0%** | +44% · −6,3% | +31% | −8,3% | 2,6 | 64 d | −3,3% | +22% | 0,23 |
> | 852 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+307% · −54,9%** | +61% · −11,7% | +37% | −6,7% | 5,3 | 66 d | −7,2% | +22% | 0,26 |
> | 853 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+242% · −29,4%** | +46% · −5,4% | +29% | −4,4% | 4,1 | 83 d | −3,7% | +23% | 0,01 |
> | 854 | ADX ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+336% · −45,1%** | +58% · −8,9% | +35% | −5,7% | 2,8 | 65 d | −3,9% | +24% | 0,28 |
> | 855 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+255% · −38,5%** | +51% · −7,4% | +33% | −6,9% | 3,4 | 67 d | −5,0% | +28% | 0,16 |
> | 856 | Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+69% · −8,5%** | +30% · −1,6% | +20% | −0,8% | 3,0 | 70 d | −3,5% | +17% | 0,05 |
> | 857 | Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+194% · −28,2%** | +47% · −6,5% | +28% | −3,3% | 5,4 | 92 d | −4,0% | +16% | 0,09 |
> | 858 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+347% · −46,2%** | +61% · −9,5% | +34% | −4,4% | 4,0 | 76 d | −4,9% | +25% | 0,19 |
> | 859 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+392% · −45,9%** | +65% · −9,7% | +38% | −8,0% | 4,1 | 39 d | −7,8% | +26% | 0,42 |
> | 860 | Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+282% · −40,2%** | +62% · −10,1% | +36% | −5,4% | 5,7 | 81 d | −5,4% | +18% | 0,17 |
> | 861 | GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+253% · −38,3%** | +58% · −8,9% | +34% | −4,9% | 4,7 | 74 d | −6,0% | +20% | 0,15 |
> | 862 | IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+127% · −23,4%** | +37% · −4,9% | +27% | −5,5% | 2,7 | 67 d | −2,5% | +23% | 0,08 |
> | 863 | MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+99% · −20,1%** | +38% · −5,9% | +25% | −7,5% | 3,2 | 73 d | −3,7% | +21% | 0,18 |
> | 864 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+260% · −33,6%** | +49% · −7,0% | +32% | −4,4% | 5,4 | 102 d | −2,9% | +23% | 0,07 |
> | 865 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+199% · −48,5%** | +43% · −10,2% | +30% | −4,1% | 3,8 | 67 d | −5,8% | +18% | −0,03 |
> | 866 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+248% · −48,2%** | +51% · −9,7% | +34% | −6,8% | 3,6 | 65 d | −6,0% | +21% | 0,24 |
> | 867 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+259% · −40,7%** | +50% · −7,9% | +33% | −5,5% | 3,8 | 80 d | −3,9% | +23% | 0,12 |
> | 868 | ADX ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+305% · −47,8%** | +56% · −9,4% | +34% | −7,8% | 3,5 | 74 d | −4,4% | +27% | 0,18 |
> | 869 | ADX ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+255% · −41,0%** | +50% · −7,6% | +33% | −5,3% | 2,7 | 64 d | −3,9% | +22% | 0,10 |
> | 870 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+194% · −47,8%** | +44% · −10,4% | +30% | −6,3% | 4,1 | 75 d | −5,3% | +18% | 0,07 |

> [!example]- Combinações 871 a 900 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 871 | MACD ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+153% · −34,4%** | +43% · −8,3% | +32% | −9,2% | 2,7 | 57 d | −4,6% | +25% | 0,10 |
> | 872 | GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+148% · −36,4%** | +53% · −11,8% | +34% | −5,6% | 4,3 | 65 d | −6,9% | +21% | 0,03 |
> | 873 | MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+212% · −40,1%** | +45% · −8,0% | +32% | −8,8% | 2,9 | 65 d | −4,3% | +23% | 0,23 |
> | 874 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+257% · −45,8%** | +51% · −9,0% | +34% | −6,9% | 3,1 | 64 d | −5,1% | +26% | 0,11 |
> | 875 | Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+241% · −32,1%** | +47% · −6,1% | +29% | −5,8% | 4,5 | 83 d | −4,5% | +24% | 0,13 |
> | 876 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+238% · −34,0%** | +45% · −6,0% | +28% | −4,5% | 3,2 | 72 d | −4,2% | +23% | 0,01 |
> | 877 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+258% · −33,6%** | +49% · −7,0% | +32% | −4,4% | 5,5 | 102 d | −3,1% | +22% | 0,07 |
> | 878 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+215% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,6 | 53 d | −4,6% | +22% | 0,18 |
> | 879 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+277% · −34,6%** | +53% · −7,2% | +33% | −6,9% | 3,3 | 47 d | −6,5% | +29% | 0,24 |
> | 880 | IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+353% · −42,3%** | +58% · −8,6% | +37% | −7,5% | 4,3 | 90 d | −3,5% | +28% | 0,24 |
> | 881 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+275% · −33,1%** | +49% · −6,2% | +30% | −7,0% | 3,6 | 64 d | −6,2% | +24% | 0,16 |
> | 882 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+282% · −47,5%** | +56% · −9,9% | +36% | −8,0% | 3,3 | 76 d | −3,5% | +26% | 0,15 |
> | 883 | IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+226% · −25,9%** | +43% · −4,2% | +29% | −4,1% | 4,0 | 83 d | −3,8% | +23% | 0,01 |
> | 884 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+402% · −45,2%** | +66% · −9,9% | +36% | −7,9% | 3,9 | 60 d | −7,0% | +26% | 0,28 |
> | 885 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+268% · −37,3%** | +51% · −7,6% | +31% | −6,8% | 3,5 | 65 d | −5,8% | +26% | 0,11 |
> | 886 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+338% · −49,6%** | +59% · −10,3% | +36% | −7,6% | 2,9 | 65 d | −4,4% | +27% | 0,29 |
> | 887 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+190% · −46,4%** | +45% · −10,2% | +30% | −12,0% | 3,3 | 65 d | −5,4% | +22% | 0,29 |
> | 888 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+190% · −39,3%** | +51% · −9,2% | +33% | −6,9% | 4,1 | 73 d | −5,7% | +26% | 0,17 |
> | 889 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+284% · −49,9%** | +56% · −10,8% | +36% | −9,1% | 3,5 | 75 d | −4,3% | +27% | 0,28 |
> | 890 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+250% · −55,8%** | +52% · −12,0% | +35% | −7,6% | 4,4 | 67 d | −6,8% | +20% | 0,24 |
> | 891 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+275% · −42,3%** | +57% · −9,0% | +34% | −7,5% | 4,1 | 66 d | −6,6% | +30% | 0,15 |
> | 892 | GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+204% · −31,6%** | +65% · −10,9% | +35% | −7,9% | 4,0 | 65 d | −6,6% | +26% | 0,34 |
> | 893 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+259% · −42,1%** | +51% · −8,5% | +35% | −9,5% | 3,2 | 69 d | −4,7% | +27% | 0,32 |
> | 894 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+175% · −30,4%** | +39% · −5,7% | +27% | −4,7% | 3,0 | 67 d | −4,2% | +22% | −0,01 |
> | 895 | Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+117% · −26,6%** | +44% · −8,3% | +32% | −8,9% | 2,6 | 53 d | −4,6% | +25% | 0,09 |
> | 896 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+239% · −30,9%** | +45% · −5,6% | +27% | −4,3% | 3,5 | 64 d | −6,1% | +22% | 0,08 |
> | 897 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+172% · −38,8%** | +38% · −8,0% | +26% | −4,6% | 3,5 | 72 d | −4,9% | +21% | 0,01 |
> | 898 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+166% · −44,3%** | +45% · −12,0% | +32% | −7,8% | 3,3 | 64 d | −5,8% | +20% | 0,09 |
> | 899 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+239% · −35,7%** | +46% · −6,1% | +28% | −3,5% | 2,9 | 65 d | −4,5% | +19% | 0,04 |
> | 900 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+245% · −28,2%** | +46% · −5,0% | +28% | −4,3% | 4,7 | 92 d | −3,9% | +21% | 0,05 |

> [!example]- Combinações 901 a 930 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 901 | ADX ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+271% · −42,4%** | +52% · −8,5% | +31% | −6,4% | 2,7 | 57 d | −4,8% | +24% | 0,20 |
> | 902 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+289% · −47,1%** | +55% · −9,9% | +36% | −7,9% | 3,6 | 80 d | −3,7% | +25% | 0,22 |
> | 903 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+165% · −31,4%** | +38% · −5,6% | +28% | −6,4% | 2,5 | 65 d | −2,7% | +23% | 0,09 |
> | 904 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+274% · −38,8%** | +50% · −7,8% | +31% | −8,1% | 3,2 | 67 d | −4,7% | +26% | 0,12 |
> | 905 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+274% · −52,2%** | +55% · −10,4% | +37% | −8,1% | 3,6 | 61 d | −6,6% | +26% | 0,32 |
> | 906 | IFR ·ADX | **+68% · −11,2%** | +68% · −11,2% | +43% | −7,5% | 3,7 | 59 d | −6,9% | +28% | — |
> | 907 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+365% · −44,6%** | +61% · −9,5% | +36% | −6,9% | 4,1 | 64 d | −7,2% | +27% | 0,32 |
> | 908 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+121% · −26,2%** | +31% · −4,5% | +25% | −6,2% | 2,6 | 65 d | −3,3% | +22% | 0,03 |
> | 909 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+411% · −53,7%** | +71% · −10,5% | +41% | −7,2% | 4,1 | 64 d | −7,1% | +29% | 0,28 |
> | 910 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+212% · −33,9%** | +43% · −6,5% | +28% | −3,2% | 4,2 | 74 d | −5,8% | +17% | 0,05 |
> | 911 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+238% · −26,9%** | +55% · −6,3% | +34% | −4,8% | 4,2 | 64 d | −7,2% | +25% | 0,10 |
> | 912 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+206% · −34,4%** | +52% · −8,7% | +32% | −7,9% | 3,4 | 67 d | −5,5% | +25% | 0,25 |
> | 913 | MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+111% · −20,1%** | +33% · −4,0% | +23% | −5,2% | 2,7 | 67 d | −3,0% | +20% | 0,06 |
> | 914 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+240% · −43,3%** | +58% · −10,0% | +37% | −6,4% | 3,6 | 64 d | −6,4% | +27% | 0,04 |
> | 915 | MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+229% · −42,8%** | +46% · −8,7% | +31% | −9,0% | 3,1 | 69 d | −4,5% | +25% | 0,25 |
> | 916 | Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+329% · −41,0%** | +58% · −7,8% | +35% | −6,5% | 5,0 | 81 d | −5,5% | +26% | 0,20 |
> | 917 | ADX ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+275% · −45,1%** | +53% · −9,2% | +32% | −7,4% | 3,1 | 65 d | −5,0% | +25% | 0,15 |
> | 918 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+108% · −16,2%** | +33% · −3,1% | +23% | −4,0% | 2,7 | 67 d | −2,8% | +19% | 0,06 |
> | 919 | Donchian ·ADX + IFR ·ADX + Pullback ·PUL | **+195% · −26,3%** | +62% · −9,0% | +37% | −4,5% | 5,8 | 92 d | −4,6% | +20% | 0,10 |
> | 920 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+369% · −43,4%** | +64% · −9,1% | +40% | −7,8% | 4,2 | 64 d | −7,3% | +29% | 0,36 |
> | 921 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+225% · −42,3%** | +47% · −7,9% | +31% | −5,9% | 3,1 | 65 d | −5,0% | +25% | 0,05 |
> | 922 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+337% · −39,8%** | +60% · −8,6% | +33% | −5,9% | 4,2 | 70 d | −6,4% | +23% | 0,16 |
> | 923 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+308% · −39,6%** | +55% · −7,7% | +33% | −6,0% | 3,3 | 76 d | −3,7% | +23% | 0,14 |
> | 924 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+235% · −31,3%** | +55% · −7,6% | +34% | −5,9% | 3,9 | 64 d | −6,9% | +24% | 0,24 |
> | 925 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+124% · −17,0%** | +36% · −3,1% | +27% | −5,4% | 3,0 | 64 d | −5,1% | +21% | −0,05 |
> | 926 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+289% · −50,8%** | +58% · −11,2% | +37% | −9,4% | 3,4 | 65 d | −5,9% | +25% | 0,28 |
> | 927 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+202% · −38,6%** | +43% · −7,7% | +29% | −8,0% | 3,4 | 72 d | −4,8% | +23% | 0,09 |
> | 928 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+187% · −36,0%** | +40% · −7,2% | +26% | −7,2% | 3,2 | 67 d | −4,8% | +22% | 0,11 |
> | 929 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+263% · −47,6%** | +54% · −10,0% | +32% | −4,5% | 3,6 | 77 d | −4,3% | +22% | 0,17 |
> | 930 | Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+70% · −11,9%** | +30% · −2,6% | +20% | −2,8% | 3,4 | 78 d | −3,5% | +17% | 0,03 |

> [!example]- Combinações 931 a 960 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 931 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+185% · −34,4%** | +41% · −6,5% | +29% | −6,4% | 3,0 | 67 d | −4,5% | +22% | 0,11 |
> | 932 | ADX ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+239% · −44,2%** | +59% · −11,5% | +37% | −8,7% | 3,6 | 76 d | −4,5% | +25% | 0,26 |
> | 933 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+367% · −50,6%** | +64% · −10,0% | +36% | −4,9% | 5,0 | 66 d | −7,5% | +19% | 0,21 |
> | 934 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+183% · −35,8%** | +40% · −7,0% | +29% | −9,9% | 3,1 | 73 d | −3,7% | +20% | 0,11 |
> | 935 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+205% · −33,2%** | +43% · −6,3% | +29% | −7,1% | 3,5 | 72 d | −5,0% | +26% | −0,01 |
> | 936 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+221% · −50,7%** | +59% · −13,4% | +37% | −9,7% | 4,0 | 61 d | −7,4% | +21% | 0,35 |
> | 937 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+120% · −30,5%** | +37% · −7,4% | +26% | −8,2% | 3,3 | 67 d | −5,2% | +21% | 0,05 |
> | 938 | MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+118% · −29,0%** | +44% · −9,6% | +32% | −8,5% | 2,8 | 69 d | −3,3% | +27% | 0,19 |
> | 939 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+235% · −39,7%** | +58% · −10,5% | +36% | −10,9% | 3,4 | 67 d | −5,4% | +30% | 0,30 |
> | 940 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+337% · −47,2%** | +63% · −10,4% | +37% | −10,3% | 4,1 | 56 d | −7,7% | +29% | 0,34 |
> | 941 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+237% · −39,0%** | +46% · −7,1% | +28% | −3,8% | 2,8 | 65 d | −4,2% | +22% | 0,09 |
> | 942 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+250% · −45,0%** | +49% · −9,5% | +31% | −4,9% | 4,2 | 67 d | −6,7% | +21% | 0,08 |
> | 943 | MACD ·ADX + Pullback ·PUL | **+64% · −15,6%** | +37% · −7,6% | +29% | −6,7% | 4,4 | 99 d | −3,0% | +23% | −0,18 |
> | 944 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+311% · −52,2%** | +63% · −10,8% | +36% | −4,6% | 3,9 | 57 d | −7,5% | +25% | 0,19 |
> | 945 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+269% · −52,9%** | +54% · −10,8% | +33% | −5,4% | 4,1 | 80 d | −4,9% | +23% | 0,07 |
> | 946 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+137% · −31,8%** | +34% · −5,9% | +26% | −8,8% | 3,1 | 73 d | −3,6% | +20% | 0,12 |
> | 947 | GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+182% · −32,1%** | +50% · −8,1% | +32% | −7,8% | 3,9 | 67 d | −6,3% | +28% | 0,03 |
> | 948 | GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+268% · −41,3%** | +52% · −8,0% | +32% | −7,2% | 3,8 | 65 d | −6,5% | +23% | 0,28 |
> | 949 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+339% · −46,2%** | +61% · −9,6% | +36% | −7,3% | 4,1 | 39 d | −8,3% | +21% | 0,36 |
> | 950 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+296% · −38,8%** | +53% · −7,4% | +32% | −4,5% | 3,3 | 67 d | −5,4% | +25% | 0,09 |
> | 951 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+363% · −39,4%** | +60% · −7,9% | +35% | −5,5% | 4,5 | 70 d | −6,8% | +22% | 0,19 |
> | 952 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+300% · −41,5%** | +57% · −8,2% | +36% | −7,3% | 4,4 | 66 d | −7,2% | +29% | 0,17 |
> | 953 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+217% · −38,4%** | +54% · −9,6% | +36% | −8,0% | 3,5 | 69 d | −5,6% | +25% | 0,24 |
> | 954 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+283% · −40,9%** | +55% · −8,4% | +33% | −9,4% | 3,3 | 42 d | −6,8% | +23% | 0,29 |
> | 955 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+202% · −46,8%** | +43% · −9,6% | +30% | −4,1% | 3,6 | 67 d | −5,8% | +19% | 0,01 |
> | 956 | GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+168% · −28,2%** | +44% · −6,6% | +26% | −5,1% | 3,8 | 76 d | −5,1% | +17% | 0,12 |
> | 957 | MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+198% · −36,7%** | +51% · −9,1% | +36% | −9,9% | 2,8 | 53 d | −5,3% | +23% | 0,29 |
> | 958 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+57% · −19,5%** | +23% · −4,2% | +19% | −2,0% | 5,0 | 119 d | −0,8% | +15% | 0,03 |
> | 959 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+192% · −44,6%** | +44% · −9,6% | +30% | −11,2% | 3,5 | 75 d | −4,8% | +23% | 0,15 |
> | 960 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+248% · −28,1%** | +46% · −5,0% | +28% | −4,3% | 4,8 | 92 d | −4,3% | +22% | 0,04 |

> [!example]- Combinações 961 a 990 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 961 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+262% · −43,2%** | +51% · −9,0% | +31% | −5,3% | 4,3 | 56 d | −8,1% | +21% | −0,03 |
> | 962 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+393% · −48,8%** | +70% · −10,2% | +41% | −6,5% | 4,8 | 54 d | −8,8% | +26% | 0,33 |
> | 963 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+263% · −56,0%** | +55% · −12,3% | +34% | −6,1% | 4,0 | 76 d | −5,4% | +21% | 0,16 |
> | 964 | ADX ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+276% · −50,3%** | +56% · −10,8% | +36% | −9,2% | 3,2 | 75 d | −4,0% | +29% | 0,23 |
> | 965 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+321% · −52,7%** | +59% · −10,7% | +36% | −8,0% | 3,5 | 80 d | −3,7% | +23% | 0,33 |
> | 966 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+281% · −32,3%** | +53% · −5,9% | +33% | −6,0% | 3,3 | 45 d | −6,8% | +25% | 0,13 |
> | 967 | GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+225% · −32,3%** | +54% · −7,4% | +32% | −4,8% | 3,8 | 65 d | −6,7% | +23% | 0,13 |
> | 968 | GPS médias ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+253% · −42,7%** | +64% · −10,5% | +40% | −9,1% | 4,4 | 65 d | −7,5% | +31% | 0,34 |
> | 969 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+208% · −39,8%** | +52% · −9,8% | +33% | −4,4% | 5,4 | 89 d | −5,0% | +17% | 0,06 |
> | 970 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+307% · −42,0%** | +57% · −9,1% | +36% | −7,2% | 4,0 | 67 d | −6,7% | +26% | 0,29 |
> | 971 | GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+104% · −31,8%** | +41% · −10,4% | +27% | −5,9% | 4,1 | 76 d | −5,6% | +15% | 0,11 |
> | 972 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+258% · −39,9%** | +51% · −7,3% | +33% | −5,0% | 2,6 | 64 d | −4,2% | +21% | 0,14 |
> | 973 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+249% · −34,6%** | +49% · −7,2% | +28% | −4,8% | 3,9 | 71 d | −6,2% | +20% | 0,03 |
> | 974 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+325% · −42,1%** | +61% · −8,4% | +39% | −7,5% | 3,7 | 65 d | −6,6% | +32% | 0,26 |
> | 975 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+278% · −44,3%** | +53% · −9,2% | +34% | −7,4% | 3,7 | 64 d | −6,9% | +25% | 0,28 |
> | 976 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+153% · −48,4%** | +37% · −9,5% | +27% | −3,4% | 3,9 | 74 d | −5,7% | +15% | 0,01 |
> | 977 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+250% · −45,2%** | +51% · −9,4% | +33% | −7,8% | 3,3 | 67 d | −5,4% | +26% | 0,24 |
> | 978 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+274% · −46,5%** | +55% · −10,0% | +36% | −8,3% | 4,4 | 81 d | −5,3% | +29% | 0,26 |
> | 979 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+276% · −36,3%** | +51% · −7,1% | +32% | −6,9% | 4,5 | 83 d | −5,1% | +26% | 0,18 |
> | 980 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+221% · −42,4%** | +47% · −7,9% | +32% | −5,5% | 4,3 | 76 d | −5,9% | +23% | 0,03 |
> | 981 | GPS médias ·ADX + IFR ·ADX | **+134% · −25,8%** | +69% · −13,1% | +40% | −10,0% | 4,3 | 65 d | −7,4% | +27% | 0,46 |
> | 982 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+249% · −38,1%** | +48% · −7,4% | +31% | −6,1% | 3,5 | 69 d | −5,7% | +22% | 0,19 |
> | 983 | ADX ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+255% · −42,9%** | +51% · −8,2% | +33% | −6,1% | 2,6 | 65 d | −4,0% | +25% | 0,20 |
> | 984 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+275% · −44,7%** | +52% · −9,3% | +34% | −8,6% | 3,4 | 69 d | −5,5% | +25% | 0,39 |
> | 985 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+240% · −42,6%** | +59% · −10,2% | +37% | −7,2% | 3,8 | 80 d | −4,6% | +26% | 0,17 |
> | 986 | Donchian ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+389% · −46,0%** | +65% · −9,7% | +38% | −8,1% | 4,4 | 66 d | −7,3% | +31% | 0,32 |
> | 987 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+314% · −41,1%** | +55% · −7,7% | +33% | −5,2% | 4,1 | 101 d | −2,2% | +22% | 0,16 |
> | 988 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+286% · −43,3%** | +54% · −9,1% | +33% | −10,6% | 3,4 | 39 d | −7,3% | +22% | 0,38 |
> | 989 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+257% · −52,1%** | +54% · −10,4% | +34% | −7,7% | 3,8 | 55 d | −7,6% | +18% | 0,33 |
> | 990 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+235% · −36,8%** | +45% · −7,2% | +28% | −5,4% | 3,2 | 72 d | −4,6% | +21% | 0,11 |

> [!example]- Combinações 991 a 1020 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 991 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+132% · −23,1%** | +47% · −7,1% | +33% | −5,3% | 3,4 | 67 d | −5,7% | +27% | 0,06 |
> | 992 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+265% · −45,5%** | +53% · −9,4% | +32% | −4,2% | 3,7 | 80 d | −4,6% | +23% | 0,07 |
> | 993 | Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+198% · −35,9%** | +41% · −6,7% | +28% | −6,5% | 3,4 | 78 d | −4,0% | +24% | 0,08 |
> | 994 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+144% · −26,0%** | +40% · −6,1% | +24% | −4,2% | 3,1 | 67 d | −5,0% | +21% | 0,01 |
> | 995 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+198% · −37,0%** | +42% · −7,1% | +28% | −4,3% | 4,6 | 89 d | −4,8% | +18% | 0,08 |
> | 996 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+276% · −44,5%** | +51% · −7,8% | +31% | −5,7% | 4,1 | 97 d | −2,8% | +22% | 0,11 |
> | 997 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+304% · −45,6%** | +56% · −9,5% | +34% | −7,7% | 2,7 | 57 d | −5,0% | +24% | 0,28 |
> | 998 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+161% · −28,8%** | +37% · −5,7% | +28% | −7,4% | 4,1 | 99 d | −2,8% | +19% | 0,04 |
> | 999 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+173% · −35,0%** | +40% · −6,6% | +27% | −5,6% | 2,9 | 67 d | −4,7% | +19% | 0,06 |
> | 1000 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+177% · −31,9%** | +39% · −6,5% | +27% | −4,2% | 4,3 | 92 d | −4,1% | +18% | 0,05 |
> | 1001 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+266% · −32,9%** | +61% · −8,0% | +37% | −9,0% | 3,7 | 64 d | −7,0% | +28% | 0,33 |
> | 1002 | MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+155% · −34,4%** | +44% · −8,3% | +32% | −9,2% | 2,4 | 57 d | −4,2% | +25% | 0,18 |
> | 1003 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+295% · −47,9%** | +58% · −10,0% | +35% | −5,7% | 3,7 | 80 d | −4,6% | +27% | 0,17 |
> | 1004 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+344% · −42,1%** | +59% · −8,4% | +33% | −6,3% | 3,8 | 65 d | −6,8% | +22% | 0,11 |
> | 1005 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+282% · −33,8%** | +62% · −9,2% | +36% | −7,8% | 3,6 | 39 d | −7,6% | +27% | 0,37 |
> | 1006 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+204% · −43,2%** | +45% · −8,9% | +32% | −9,0% | 3,2 | 73 d | −4,6% | +22% | 0,32 |
> | 1007 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+208% · −40,0%** | +53% · −10,3% | +34% | −4,8% | 3,4 | 67 d | −5,9% | +25% | 0,00 |
> | 1008 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+235% · −36,7%** | +47% · −7,0% | +32% | −6,1% | 3,3 | 73 d | −4,9% | +24% | 0,15 |
> | 1009 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+125% · −21,0%** | +36% · −5,0% | +27% | −4,3% | 2,7 | 73 d | −2,1% | +20% | 0,06 |
> | 1010 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+201% · −38,1%** | +44% · −7,7% | +30% | −8,1% | 2,9 | 67 d | −4,7% | +24% | 0,09 |
> | 1011 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+211% · −38,1%** | +52% · −9,8% | +33% | −4,4% | 5,3 | 92 d | −4,9% | +18% | 0,07 |
> | 1012 | GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+264% · −39,3%** | +51% · −8,2% | +31% | −7,7% | 3,4 | 65 d | −6,3% | +27% | 0,24 |
> | 1013 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+209% · −52,1%** | +54% · −14,1% | +36% | −6,9% | 4,8 | 67 d | −7,7% | +16% | 0,20 |
> | 1014 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+323% · −36,5%** | +70% · −9,4% | +42% | −7,0% | 4,6 | 64 d | −8,2% | +27% | 0,30 |
> | 1015 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+266% · −51,3%** | +66% · −14,0% | +39% | −6,3% | 5,4 | 66 d | −8,2% | +18% | 0,23 |
> | 1016 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+307% · −43,6%** | +57% · −8,8% | +32% | −4,2% | 3,4 | 65 d | −6,2% | +26% | 0,20 |
> | 1017 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+125% · −43,8%** | +34% · −9,4% | +24% | −8,1% | 3,4 | 75 d | −4,9% | +14% | 0,04 |
> | 1018 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+269% · −34,9%** | +49% · −6,7% | +30% | −3,8% | 4,3 | 81 d | −5,5% | +20% | 0,09 |
> | 1019 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+300% · −39,7%** | +53% · −7,6% | +32% | −4,5% | 3,2 | 67 d | −5,5% | +26% | 0,14 |
> | 1020 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+297% · −51,7%** | +54% · −10,3% | +34% | −5,9% | 4,6 | 67 d | −7,6% | +18% | 0,21 |

> [!example]- Combinações 1021 a 1050 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1021 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+369% · −51,9%** | +68% · −10,4% | +40% | −7,0% | 3,5 | 65 d | −6,4% | +30% | 0,28 |
> | 1022 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+278% · −41,0%** | +51% · −7,8% | +31% | −5,1% | 3,0 | 80 d | −2,3% | +20% | 0,18 |
> | 1023 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+156% · −33,3%** | +43% · −8,2% | +28% | −4,7% | 3,5 | 72 d | −5,7% | +22% | −0,12 |
> | 1024 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+256% · −47,7%** | +52% · −9,6% | +34% | −8,1% | 2,9 | 65 d | −5,2% | +28% | 0,19 |
> | 1025 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+228% · −39,1%** | +47% · −7,0% | +31% | −4,6% | 3,1 | 67 d | −5,3% | +23% | 0,05 |
> | 1026 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+301% · −43,3%** | +54% · −9,2% | +33% | −6,4% | 3,9 | 70 d | −6,6% | +24% | 0,23 |
> | 1027 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+292% · −59,0%** | +59% · −12,6% | +37% | −7,2% | 3,9 | 77 d | −5,5% | +26% | 0,19 |
> | 1028 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+182% · −36,4%** | +41% · −7,3% | +29% | −6,5% | 3,3 | 75 d | −4,8% | +19% | 0,15 |
> | 1029 | IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+135% · −23,4%** | +48% · −7,3% | +34% | −6,6% | 3,1 | 63 d | −6,1% | +26% | 0,06 |
> | 1030 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+268% · −49,8%** | +65% · −12,7% | +41% | −10,3% | 3,6 | 77 d | −4,9% | +29% | 0,38 |
> | 1031 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+205% · −40,0%** | +45% · −7,9% | +32% | −7,8% | 3,2 | 75 d | −4,5% | +23% | 0,19 |
> | 1032 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+279% · −39,0%** | +62% · −9,3% | +35% | −4,9% | 2,7 | 65 d | −4,5% | +23% | 0,26 |
> | 1033 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+229% · −29,4%** | +53% · −7,0% | +31% | −5,7% | 4,8 | 92 d | −4,9% | +22% | 0,14 |
> | 1034 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+190% · −35,9%** | +41% · −7,2% | +26% | −7,2% | 3,0 | 67 d | −5,1% | +23% | 0,10 |
> | 1035 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+223% · −40,6%** | +48% · −7,5% | +32% | −5,5% | 4,1 | 76 d | −6,0% | +22% | 0,06 |
> | 1036 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+287% · −65,6%** | +59% · −15,8% | +37% | −7,0% | 4,2 | 78 d | −5,7% | +20% | 0,22 |
> | 1037 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+184% · −32,0%** | +50% · −8,1% | +32% | −7,8% | 3,6 | 67 d | −6,5% | +27% | 0,08 |
> | 1038 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+227% · −53,7%** | +48% · −11,1% | +33% | −6,6% | 3,4 | 65 d | −6,4% | +22% | 0,13 |
> | 1039 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+235% · −49,8%** | +53% · −10,4% | +32% | −10,6% | 3,9 | 57 d | −8,0% | +18% | 0,32 |
> | 1040 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+158% · −33,2%** | +38% · −6,2% | +28% | −8,7% | 3,2 | 75 d | −4,5% | +21% | 0,16 |
> | 1041 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+206% · −34,4%** | +52% · −7,7% | +33% | −4,4% | 2,5 | 57 d | −4,7% | +21% | 0,04 |
> | 1042 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+241% · −34,1%** | +57% · −9,1% | +36% | −5,9% | 5,2 | 102 d | −4,3% | +24% | 0,19 |
> | 1043 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+222% · −35,2%** | +53% · −8,0% | +31% | −4,7% | 2,9 | 77 d | −2,5% | +20% | 0,17 |
> | 1044 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+258% · −47,8%** | +51% · −10,3% | +32% | −7,1% | 3,7 | 65 d | −7,0% | +18% | 0,21 |
> | 1045 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+323% · −38,5%** | +59% · −7,9% | +35% | −4,4% | 3,8 | 64 d | −7,4% | +23% | 0,08 |
> | 1046 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+228% · −41,2%** | +47% · −7,8% | +31% | −5,8% | 2,9 | 65 d | −5,4% | +26% | 0,09 |
> | 1047 | Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+81% · −21,5%** | +29% · −4,9% | +23% | −5,0% | 2,5 | 65 d | −4,0% | +23% | 0,01 |
> | 1048 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+263% · −35,7%** | +61% · −9,1% | +38% | −6,3% | 4,3 | 67 d | −7,5% | +23% | 0,24 |
> | 1049 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+272% · −41,2%** | +57% · −8,7% | +34% | −7,5% | 4,1 | 66 d | −7,4% | +29% | 0,12 |
> | 1050 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+294% · −43,8%** | +56% · −9,4% | +34% | −9,5% | 3,4 | 65 d | −6,4% | +27% | 0,30 |

> [!example]- Combinações 1051 a 1080 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1051 | ADX ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+271% · −48,0%** | +53% · −10,1% | +32% | −8,4% | 2,9 | 65 d | −5,4% | +27% | 0,21 |
> | 1052 | 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+170% · −34,7%** | +46% · −8,5% | +32% | −8,4% | 3,0 | 67 d | −5,2% | +23% | 0,19 |
> | 1053 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+260% · −44,8%** | +52% · −8,7% | +34% | −6,9% | 2,9 | 65 d | −5,4% | +25% | 0,15 |
> | 1054 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+167% · −33,8%** | +46% · −7,7% | +32% | −7,0% | 3,6 | 75 d | −5,4% | +20% | 0,09 |
> | 1055 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+268% · −50,3%** | +56% · −10,3% | +34% | −9,2% | 4,8 | 78 d | −6,3% | +18% | 0,21 |
> | 1056 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+181% · −36,9%** | +40% · −7,2% | +25% | −7,6% | 3,1 | 67 d | −5,5% | +17% | 0,06 |
> | 1057 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+244% · −29,6%** | +46% · −5,5% | +28% | −4,3% | 3,7 | 83 d | −4,4% | +23% | 0,03 |
> | 1058 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+168% · −27,4%** | +36% · −4,7% | +25% | −6,3% | 2,8 | 74 d | −3,2% | +18% | 0,12 |
> | 1059 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+122% · −30,5%** | +38% · −7,4% | +26% | −8,2% | 3,0 | 67 d | −5,3% | +23% | 0,05 |
> | 1060 | ADX ·ADX + Donchian ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+363% · −56,8%** | +67% · −11,6% | +38% | −8,3% | 3,6 | 60 d | −7,5% | +29% | 0,29 |
> | 1061 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+277% · −37,6%** | +61% · −9,8% | +35% | −8,0% | 3,2 | 67 d | −5,8% | +29% | 0,27 |
> | 1062 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+225% · −33,2%** | +47% · −6,3% | +30% | −5,4% | 3,6 | 87 d | −3,6% | +25% | 0,14 |
> | 1063 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+299% · −41,6%** | +53% · −7,9% | +32% | −4,7% | 2,6 | 69 d | −3,6% | +24% | 0,21 |
> | 1064 | Donchian ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+231% · −41,7%** | +58% · −10,1% | +37% | −7,7% | 4,5 | 81 d | −5,9% | +27% | 0,24 |
> | 1065 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+230% · −42,5%** | +47% · −9,1% | +29% | −8,9% | 3,3 | 73 d | −5,3% | +21% | 0,14 |
> | 1066 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Bollinger ·ADX | **+242% · −36,0%** | +58% · −9,4% | +33% | −9,5% | 3,6 | 39 d | −8,2% | +20% | 0,32 |
> | 1067 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+49% · −19,3%** | +24% · −6,0% | +20% | −3,0% | 4,5 | 121 d | −1,2% | +14% | −0,02 |
> | 1068 | ADX ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+302% · −51,4%** | +57% · −11,1% | +35% | −9,6% | 3,0 | 65 d | −5,6% | +26% | 0,31 |
> | 1069 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+256% · −54,1%** | +56% · −11,4% | +36% | −10,8% | 4,0 | 73 d | −6,4% | +24% | 0,39 |
> | 1070 | ADX ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+280% · −41,3%** | +55% · −8,0% | +31% | −6,0% | 2,9 | 60 d | −5,9% | +24% | 0,18 |
> | 1071 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+294% · −53,4%** | +61% · −11,4% | +37% | −7,0% | 4,3 | 69 d | −7,4% | +26% | 0,24 |
> | 1072 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+334% · −39,8%** | +59% · −8,7% | +33% | −5,9% | 4,2 | 70 d | −7,2% | +22% | 0,16 |
> | 1073 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+132% · −43,0%** | +34% · −9,1% | +26% | −5,0% | 3,2 | 78 d | −4,0% | +14% | 0,06 |
> | 1074 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+280% · −43,7%** | +53% · −9,3% | +34% | −6,2% | 3,9 | 70 d | −6,9% | +26% | 0,14 |
> | 1075 | ADX ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+261% · −48,2%** | +65% · −12,7% | +41% | −10,4% | 3,3 | 76 d | −4,8% | +30% | 0,28 |
> | 1076 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+243% · −37,4%** | +49% · −7,4% | +31% | −8,3% | 3,4 | 64 d | −6,8% | +21% | 0,08 |
> | 1077 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+144% · −23,0%** | +34% · −4,0% | +23% | −4,4% | 3,8 | 93 d | −3,6% | +22% | 0,03 |
> | 1078 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+289% · −35,8%** | +51% · −6,8% | +33% | −8,3% | 3,1 | 76 d | −4,2% | +21% | 0,26 |
> | 1079 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+319% · −53,2%** | +61% · −10,2% | +37% | −5,5% | 3,3 | 67 d | −6,1% | +26% | 0,12 |
> | 1080 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+234% · −53,5%** | +51% · −11,5% | +32% | −5,8% | 3,4 | 67 d | −6,1% | +22% | 0,13 |

> [!example]- Combinações 1081 a 1110 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1081 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+261% · −56,5%** | +56% · −11,9% | +35% | −7,1% | 3,3 | 65 d | −6,4% | +27% | 0,18 |
> | 1082 | ADX ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+283% · −43,8%** | +63% · −11,0% | +37% | −7,3% | 2,8 | 65 d | −5,2% | +28% | 0,26 |
> | 1083 | Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+214% · −29,3%** | +44% · −5,5% | +27% | −5,9% | 3,6 | 79 d | −5,1% | +24% | 0,07 |
> | 1084 | Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+34% · −11,2%** | +20% · −2,9% | +17% | −2,7% | 2,3 | 67 d | −1,9% | +16% | 0,06 |
> | 1085 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+121% · −23,5%** | +36% · −5,2% | +27% | −5,4% | 4,2 | 106 d | −3,3% | +17% | −0,04 |
> | 1086 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+176% · −33,6%** | +40% · −6,3% | +27% | −5,6% | 2,8 | 67 d | −4,8% | +20% | 0,09 |
> | 1087 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+177% · −54,9%** | +42% · −11,8% | +30% | −6,0% | 3,7 | 67 d | −6,8% | +18% | 0,08 |
> | 1088 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+311% · −42,2%** | +58% · −8,8% | +32% | −3,8% | 3,2 | 65 d | −6,3% | +25% | 0,18 |
> | 1089 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+198% · −51,5%** | +44% · −11,6% | +30% | −5,3% | 3,5 | 67 d | −6,4% | +17% | 0,10 |
> | 1090 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+246% · −36,8%** | +49% · −7,4% | +28% | −5,7% | 3,9 | 71 d | −6,8% | +18% | 0,11 |
> | 1091 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+395% · −51,1%** | +72% · −10,3% | +38% | −5,1% | 3,7 | 60 d | −7,8% | +26% | 0,35 |
> | 1092 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+179% · −44,6%** | +41% · −8,9% | +29% | −6,5% | 4,0 | 78 d | −5,8% | +18% | 0,15 |
> | 1093 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+241% · −35,0%** | +46% · −6,1% | +28% | −3,7% | 2,9 | 81 d | −2,4% | +18% | 0,11 |
> | 1094 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+225% · −46,5%** | +49% · −8,9% | +32% | −8,0% | 3,1 | 77 d | −3,9% | +27% | 0,13 |
> | 1095 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+211% · −38,0%** | +53% · −9,6% | +34% | −4,8% | 3,3 | 67 d | −6,1% | +26% | 0,09 |
> | 1096 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+412% · −53,3%** | +68% · −10,5% | +38% | −6,3% | 3,6 | 64 d | −7,3% | +27% | 0,26 |
> | 1097 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+343% · −55,2%** | +65% · −11,9% | +38% | −7,8% | 4,1 | 74 d | −6,6% | +23% | 0,31 |
> | 1098 | 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+119% · −24,9%** | +61% · −12,3% | +41% | −8,9% | 3,7 | 64 d | −7,6% | +30% | 0,04 |
> | 1099 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+220% · −36,2%** | +53% · −8,4% | +31% | −4,5% | 2,8 | 65 d | −5,2% | +21% | 0,09 |
> | 1100 | Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+220% · −31,5%** | +52% · −7,6% | +29% | −5,7% | 3,5 | 64 d | −7,2% | +22% | 0,17 |
> | 1101 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+127% · −42,9%** | +34% · −9,2% | +24% | −8,3% | 3,2 | 75 d | −5,0% | +15% | 0,04 |
> | 1102 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+245% · −36,8%** | +49% · −7,3% | +31% | −8,3% | 3,5 | 64 d | −7,2% | +20% | 0,15 |
> | 1103 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+167% · −49,7%** | +41% · −11,0% | +28% | −7,6% | 3,3 | 67 d | −6,2% | +17% | 0,11 |
> | 1104 | Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+265% · −36,1%** | +49% · −6,9% | +30% | −5,1% | 4,7 | 83 d | −5,9% | +18% | 0,13 |
> | 1105 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+210% · −41,5%** | +45% · −8,6% | +28% | −4,4% | 4,9 | 94 d | −5,3% | +17% | 0,04 |
> | 1106 | MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+153% · −27,7%** | +41% · −6,4% | +27% | −8,3% | 2,6 | 71 d | −3,5% | +18% | 0,21 |
> | 1107 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+279% · −46,0%** | +55% · −8,9% | +36% | −7,5% | 3,1 | 65 d | −6,2% | +28% | 0,10 |
> | 1108 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+228% · −39,7%** | +50% · −8,2% | +31% | −6,4% | 3,9 | 74 d | −6,3% | +25% | 0,02 |
> | 1109 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+318% · −48,6%** | +60% · −10,2% | +38% | −7,9% | 3,8 | 64 d | −7,8% | +24% | 0,31 |
> | 1110 | Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+169% · −21,6%** | +44% · −5,1% | +25% | −3,2% | 4,2 | 92 d | −4,8% | +18% | 0,03 |

> [!example]- Combinações 1111 a 1140 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1111 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+250% · −38,4%** | +50% · −7,8% | +33% | −5,8% | 4,2 | 91 d | −5,0% | +26% | 0,11 |
> | 1112 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+225% · −36,1%** | +46% · −7,1% | +30% | −3,9% | 2,3 | 64 d | −4,2% | +22% | 0,10 |
> | 1113 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+190% · −41,9%** | +41% · −8,0% | +26% | −5,4% | 2,2 | 64 d | −3,6% | +21% | 0,11 |
> | 1114 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+274% · −34,9%** | +50% · −6,4% | +30% | −4,1% | 3,9 | 106 d | −2,7% | +20% | 0,08 |
> | 1115 | GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+222% · −37,1%** | +54% · −8,7% | +32% | −6,3% | 3,7 | 65 d | −7,4% | +20% | 0,26 |
> | 1116 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+151% · −28,5%** | +37% · −5,1% | +26% | −5,1% | 3,6 | 81 d | −5,1% | +20% | −0,06 |
> | 1117 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+247% · −46,5%** | +52% · −9,1% | +35% | −7,9% | 4,0 | 74 d | −6,6% | +27% | 0,20 |
> | 1118 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+229% · −44,4%** | +47% · −9,6% | +29% | −9,7% | 3,1 | 65 d | −6,2% | +20% | 0,28 |
> | 1119 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+256% · −46,2%** | +53% · −8,8% | +32% | −4,0% | 4,4 | 70 d | −7,7% | +20% | 0,08 |
> | 1120 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+210% · −24,6%** | +41% · −3,9% | +25% | −1,8% | 4,3 | 101 d | −4,3% | +18% | −0,03 |
> | 1121 | GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+295% · −43,3%** | +53% · −8,9% | +32% | −5,4% | 3,2 | 67 d | −6,0% | +23% | 0,22 |
> | 1122 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+334% · −51,0%** | +63% · −10,2% | +37% | −5,5% | 4,5 | 67 d | −8,1% | +23% | 0,25 |
> | 1123 | IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+253% · −32,0%** | +47% · −5,7% | +30% | −6,3% | 3,4 | 89 d | −3,5% | +21% | 0,20 |
> | 1124 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+230% · −33,5%** | +45% · −6,1% | +30% | −6,3% | 3,1 | 81 d | −3,7% | +23% | 0,12 |
> | 1125 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+265% · −41,7%** | +51% · −8,7% | +31% | −5,3% | 4,1 | 64 d | −8,4% | +22% | −0,00 |
> | 1126 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+309% · −48,3%** | +58% · −9,3% | +35% | −8,4% | 3,9 | 69 d | −7,1% | +22% | 0,34 |
> | 1127 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+241% · −55,3%** | +50% · −13,1% | +33% | −8,5% | 3,3 | 67 d | −6,3% | +21% | 0,14 |
> | 1128 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+292% · −43,4%** | +56% · −8,9% | +34% | −8,7% | 4,0 | 64 d | −8,2% | +25% | 0,14 |
> | 1129 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+243% · −41,8%** | +59% · −10,3% | +37% | −7,2% | 3,5 | 80 d | −5,2% | +25% | 0,18 |
> | 1130 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+111% · −17,3%** | +41% · −4,9% | +30% | −7,9% | 3,1 | 65 d | −6,2% | +25% | −0,07 |
> | 1131 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+163% · −28,9%** | +37% · −5,3% | +28% | −8,4% | 2,6 | 66 d | −4,8% | +21% | 0,11 |
> | 1132 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+151% · −24,9%** | +40% · −5,5% | +27% | −7,0% | 3,0 | 77 d | −3,9% | +17% | 0,08 |
> | 1133 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+321% · −39,2%** | +60% · −7,5% | +35% | −5,1% | 3,5 | 64 d | −7,4% | +25% | 0,21 |
> | 1134 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+85% · −19,7%** | +36% · −6,1% | +23% | −4,4% | 3,2 | 72 d | −5,6% | +18% | −0,08 |
> | 1135 | ADX ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+259% · −46,3%** | +59% · −11,3% | +35% | −6,7% | 4,0 | 101 d | −3,8% | +23% | 0,18 |
> | 1136 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+242% · −37,1%** | +47% · −7,2% | +28% | −4,0% | 2,6 | 76 d | −2,1% | +21% | 0,12 |
> | 1137 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+157% · −38,7%** | +43% · −10,2% | +28% | −6,1% | 3,2 | 72 d | −5,7% | +20% | 0,07 |
> | 1138 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+294% · −40,5%** | +69% · −10,8% | +39% | −9,0% | 4,1 | 60 d | −8,8% | +27% | 0,31 |
> | 1139 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+178% · −34,6%** | +41% · −6,6% | +29% | −7,5% | 3,5 | 76 d | −5,6% | +25% | −0,00 |
> | 1140 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+253% · −44,4%** | +49% · −9,3% | +31% | −4,9% | 4,0 | 72 d | −7,1% | +22% | 0,13 |

> [!example]- Combinações 1141 a 1170 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1141 | VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+155% · −44,9%** | +39% · −9,5% | +29% | −8,8% | 2,9 | 72 d | −4,7% | +22% | 0,19 |
> | 1142 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+204% · −40,4%** | +44% · −7,5% | +29% | −5,4% | 2,8 | 65 d | −5,7% | +23% | 0,05 |
> | 1143 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+204% · −38,1%** | +44% · −7,7% | +30% | −8,0% | 2,8 | 67 d | −5,1% | +24% | 0,13 |
> | 1144 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+115% · −20,2%** | +42% · −6,6% | +30% | −6,1% | 2,6 | 73 d | −3,3% | +22% | 0,12 |
> | 1145 | Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+298% · −38,8%** | +55% · −7,5% | +33% | −6,4% | 4,2 | 81 d | −6,1% | +28% | 0,16 |
> | 1146 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+283% · −43,6%** | +53% · −9,3% | +34% | −6,2% | 4,0 | 72 d | −7,1% | +27% | 0,21 |
> | 1147 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+329% · −42,5%** | +58% · −8,4% | +35% | −7,9% | 3,1 | 67 d | −6,0% | +29% | 0,31 |
> | 1148 | Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+142% · −22,7%** | +33% · −3,9% | +24% | −4,5% | 3,7 | 93 d | −3,9% | +22% | 0,03 |
> | 1149 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+143% · −20,5%** | +33% · −3,4% | +23% | −3,5% | 3,6 | 94 d | −3,8% | +20% | −0,02 |
> | 1150 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+183% · −36,8%** | +40% · −7,2% | +25% | −7,8% | 3,0 | 67 d | −5,8% | +18% | 0,06 |
> | 1151 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+205% · −41,9%** | +43% · −8,7% | +26% | −7,9% | 4,5 | 91 d | −5,5% | +15% | 0,17 |
> | 1152 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+283% · −42,0%** | +57% · −8,9% | +34% | −8,3% | 3,8 | 70 d | −7,1% | +26% | 0,22 |
> | 1153 | GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+219% · −45,3%** | +48% · −8,9% | +32% | −6,6% | 4,0 | 76 d | −6,5% | +25% | 0,17 |
> | 1154 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+260% · −48,4%** | +52% · −10,9% | +31% | −6,2% | 4,0 | 65 d | −8,2% | +20% | 0,12 |
> | 1155 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+304% · −42,1%** | +57% · −9,0% | +36% | −7,2% | 4,1 | 70 d | −7,5% | +25% | 0,26 |
> | 1156 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+149% · −29,3%** | +42% · −7,5% | +30% | −9,6% | 3,9 | 100 d | −3,9% | +19% | 0,14 |
> | 1157 | Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+212% · −29,1%** | +43% · −5,3% | +27% | −6,0% | 3,5 | 83 d | −4,7% | +25% | 0,05 |
> | 1158 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+230% · −38,3%** | +45% · −7,6% | +30% | −6,4% | 3,4 | 64 d | −7,4% | +22% | 0,11 |
> | 1159 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+197% · −35,1%** | +41% · −6,8% | +28% | −8,9% | 3,0 | 75 d | −4,7% | +18% | 0,20 |
> | 1160 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+207% · −38,9%** | +56% · −10,2% | +36% | −11,1% | 3,4 | 65 d | −7,2% | +29% | 0,32 |
> | 1161 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+198% · −25,9%** | +40% · −4,1% | +27% | −3,7% | 3,5 | 99 d | −2,8% | +21% | 0,02 |
> | 1162 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+152% · −39,3%** | +38% · −7,9% | +27% | −10,3% | 3,3 | 78 d | −4,9% | +19% | 0,04 |
> | 1163 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+238% · −46,3%** | +58% · −12,8% | +37% | −7,6% | 4,9 | 83 d | −6,3% | +22% | 0,26 |
> | 1164 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+155% · −39,6%** | +46% · −10,5% | +29% | −11,2% | 3,2 | 67 d | −6,2% | +19% | 0,27 |
> | 1165 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+164% · −32,4%** | +44% · −8,5% | +29% | −5,6% | 4,2 | 92 d | −5,1% | +19% | 0,13 |
> | 1166 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+256% · −63,5%** | +55% · −15,0% | +35% | −6,9% | 3,5 | 74 d | −6,1% | +22% | 0,21 |
> | 1167 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+230% · −40,6%** | +50% · −8,6% | +31% | −6,4% | 3,7 | 74 d | −6,5% | +25% | 0,04 |
> | 1168 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+272% · −44,3%** | +54% · −9,1% | +35% | −6,2% | 3,5 | 67 d | −7,0% | +28% | 0,12 |
> | 1169 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+291% · −44,1%** | +54% · −8,0% | +35% | −5,9% | 4,3 | 107 d | −4,2% | +23% | 0,09 |
> | 1170 | Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+226% · −29,3%** | +54% · −7,0% | +31% | −5,8% | 4,0 | 83 d | −5,6% | +25% | 0,12 |

> [!example]- Combinações 1171 a 1200 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1171 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+215% · −33,1%** | +43% · −6,5% | +28% | −3,2% | 3,9 | 78 d | −6,1% | +18% | 0,02 |
> | 1172 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+159% · −31,1%** | +43% · −7,5% | +28% | −4,7% | 3,3 | 72 d | −6,1% | +23% | −0,07 |
> | 1173 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+166% · −27,7%** | +38% · −5,4% | +28% | −5,5% | 2,3 | 68 d | −2,6% | +22% | 0,04 |
> | 1174 | Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+312% · −37,4%** | +66% · −9,6% | +37% | −6,0% | 4,4 | 70 d | −8,1% | +25% | 0,25 |
> | 1175 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+252% · −45,7%** | +54% · −9,9% | +34% | −8,9% | 3,7 | 69 d | −7,0% | +29% | 0,20 |
> | 1176 | Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+268% · −35,1%** | +50% · −6,4% | +30% | −7,4% | 3,0 | 57 d | −6,8% | +25% | 0,19 |
> | 1177 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+227% · −38,0%** | +48% · −7,2% | +31% | −6,2% | 3,0 | 81 d | −3,8% | +23% | 0,12 |
> | 1178 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+261% · −31,6%** | +62% · −7,4% | +38% | −7,9% | 3,3 | 45 d | −8,1% | +29% | 0,24 |
> | 1179 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+188% · −33,5%** | +49% · −8,3% | +32% | −9,3% | 3,2 | 72 d | −5,8% | +27% | 0,04 |
> | 1180 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+216% · −28,5%** | +43% · −5,1% | +27% | −5,7% | 3,8 | 92 d | −4,5% | +22% | 0,11 |
> | 1181 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+298% · −43,4%** | +54% · −9,2% | +33% | −6,3% | 3,9 | 70 d | −7,4% | +23% | 0,22 |
> | 1182 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+241% · −44,5%** | +49% · −9,4% | +31% | −9,2% | 3,2 | 64 d | −6,9% | +21% | 0,25 |
> | 1183 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+150% · −52,0%** | +37% · −10,6% | +27% | −4,7% | 3,8 | 76 d | −6,3% | +13% | 0,07 |
> | 1184 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+215% · −37,5%** | +45% · −7,5% | +28% | −6,0% | 2,9 | 76 d | −4,3% | +22% | 0,12 |
> | 1185 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+202% · −38,4%** | +44% · −7,8% | +30% | −7,5% | 3,7 | 83 d | −5,1% | +26% | 0,17 |
> | 1186 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+137% · −39,1%** | +34% · −8,0% | +26% | −10,8% | 2,7 | 67 d | −5,2% | +21% | 0,13 |
> | 1187 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+238% · −50,0%** | +51% · −10,0% | +32% | −5,4% | 3,4 | 76 d | −5,7% | +24% | 0,09 |
> | 1188 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+309% · −52,3%** | +58% · −10,1% | +33% | −5,5% | 3,2 | 65 d | −6,7% | +24% | 0,20 |
> | 1189 | GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+181% · −34,3%** | +50% · −8,8% | +32% | −9,0% | 3,5 | 67 d | −7,0% | +29% | 0,27 |
> | 1190 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+215% · −43,1%** | +46% · −9,3% | +30% | −9,8% | 2,9 | 67 d | −5,6% | +24% | 0,07 |
> | 1191 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+237% · −41,0%** | +49% · −7,6% | +31% | −6,7% | 5,0 | 102 d | −5,2% | +21% | 0,05 |
> | 1192 | GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+151% · −35,0%** | +54% · −11,2% | +34% | −5,7% | 4,1 | 73 d | −7,1% | +22% | 0,07 |
> | 1193 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+206% · −46,6%** | +45% · −8,7% | +31% | −7,5% | 2,9 | 77 d | −4,2% | +24% | 0,12 |
> | 1194 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+370% · −45,0%** | +66% · −9,2% | +36% | −6,4% | 3,4 | 75 d | −5,8% | +25% | 0,26 |
> | 1195 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+269% · −44,1%** | +53% · −8,9% | +32% | −4,1% | 3,4 | 80 d | −5,3% | +25% | 0,05 |
> | 1196 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+333% · −46,1%** | +60% · −8,9% | +34% | −4,7% | 4,4 | 70 d | −8,1% | +22% | 0,18 |
> | 1197 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+329% · −56,6%** | +69% · −12,3% | +39% | −7,4% | 3,7 | 60 d | −8,5% | +29% | 0,38 |
> | 1198 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+255% · −33,3%** | +57% · −8,1% | +33% | −9,2% | 3,4 | 65 d | −7,3% | +27% | 0,29 |
> | 1199 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+290% · −39,0%** | +53% · −6,5% | +30% | −3,9% | 4,0 | 97 d | −4,5% | +20% | 0,12 |
> | 1200 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+216% · −41,8%** | +46% · −8,6% | +30% | −6,8% | 4,6 | 120 d | −3,8% | +16% | 0,18 |

> [!example]- Combinações 1201 a 1230 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1201 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+306% · −45,7%** | +58% · −9,5% | +32% | −5,1% | 3,2 | 65 d | −6,7% | +25% | 0,28 |
> | 1202 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+280% · −34,2%** | +52% · −6,3% | +30% | −4,3% | 4,7 | 94 d | −5,6% | +18% | 0,04 |
> | 1203 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+173% · −33,9%** | +46% · −8,6% | +28% | −8,3% | 3,0 | 67 d | −5,9% | +25% | 0,11 |
> | 1204 | Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+167% · −22,5%** | +43% · −5,2% | +25% | −3,3% | 4,2 | 92 d | −5,2% | +17% | 0,05 |
> | 1205 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+351% · −42,3%** | +64% · −8,9% | +38% | −6,1% | 3,4 | 64 d | −7,5% | +25% | 0,28 |
> | 1206 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+203% · −40,2%** | +45% · −7,9% | +32% | −7,9% | 3,1 | 75 d | −5,3% | +25% | 0,11 |
> | 1207 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+294% · −55,9%** | +73% · −15,6% | +42% | −8,3% | 4,0 | 76 d | −6,7% | +28% | 0,39 |
> | 1208 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+193% · −24,2%** | +47% · −5,1% | +28% | −2,4% | 4,3 | 100 d | −4,8% | +17% | −0,02 |
> | 1209 | MACD ·ADX + Tendência ·ADX | **+106% · −30,3%** | +56% · −15,6% | +40% | −13,4% | 3,1 | 58 d | −7,1% | +29% | 0,55 |
> | 1210 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+326% · −45,1%** | +64% · −9,8% | +37% | −9,2% | 3,5 | 65 d | −7,5% | +34% | 0,28 |
> | 1211 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+234% · −47,9%** | +59% · −12,0% | +38% | −7,5% | 3,5 | 65 d | −7,4% | +23% | 0,27 |
> | 1212 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+222% · −33,0%** | +46% · −6,3% | +30% | −5,5% | 3,6 | 88 d | −4,5% | +26% | 0,11 |
> | 1213 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+255% · −28,3%** | +47% · −4,9% | +30% | −5,3% | 3,3 | 92 d | −3,4% | +20% | 0,11 |
> | 1214 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+233% · −42,5%** | +47% · −9,1% | +29% | −8,8% | 3,2 | 73 d | −5,7% | +22% | 0,16 |
> | 1215 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+185% · −35,8%** | +41% · −7,0% | +29% | −10,0% | 2,8 | 73 d | −4,5% | +20% | 0,18 |
> | 1216 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+181% · −40,6%** | +43% · −8,6% | +32% | −10,3% | 2,9 | 74 d | −4,7% | +25% | 0,25 |
> | 1217 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+214% · −26,5%** | +43% · −4,9% | +27% | −4,5% | 3,2 | 83 d | −4,2% | +22% | −0,01 |
> | 1218 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+269% · −28,8%** | +47% · −5,0% | +29% | −2,9% | 4,2 | 84 d | −5,9% | +21% | −0,04 |
> | 1219 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+314% · −47,9%** | +57% · −10,2% | +34% | −8,4% | 3,4 | 64 d | −7,7% | +22% | 0,31 |
> | 1220 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+225% · −42,1%** | +47% · −8,8% | +31% | −6,9% | 4,0 | 83 d | −5,8% | +22% | 0,20 |
> | 1221 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+139% · −40,9%** | +41% · −10,3% | +28% | −4,7% | 4,0 | 78 d | −6,5% | +14% | 0,14 |
> | 1222 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+249% · −36,7%** | +49% · −7,4% | +28% | −5,7% | 3,7 | 71 d | −7,2% | +19% | 0,10 |
> | 1223 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+241% · −45,5%** | +53% · −9,8% | +32% | −9,7% | 3,9 | 70 d | −7,6% | +21% | 0,17 |
> | 1224 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+130% · −32,8%** | +34% · −5,4% | +24% | −3,7% | 3,2 | 80 d | −5,0% | +16% | 0,05 |
> | 1225 | ADX ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+238% · −40,4%** | +59% · −9,8% | +37% | −6,7% | 2,4 | 65 d | −4,9% | +24% | 0,24 |
> | 1226 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+179% · −31,9%** | +39% · −6,6% | +27% | −4,2% | 4,0 | 100 d | −4,5% | +19% | 0,04 |
> | 1227 | GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+143% · −28,3%** | +40% · −6,9% | +24% | −5,3% | 3,0 | 72 d | −5,6% | +18% | 0,08 |
> | 1228 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+352% · −39,1%** | +60% · −8,3% | +33% | −4,1% | 3,8 | 97 d | −4,4% | +21% | 0,15 |
> | 1229 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+219% · −35,5%** | +52% · −8,6% | +30% | −6,0% | 3,1 | 72 d | −5,7% | +24% | 0,07 |
> | 1230 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+170% · −35,8%** | +46% · −9,1% | +32% | −12,8% | 2,8 | 73 d | −4,7% | +21% | 0,31 |

> [!example]- Combinações 1231 a 1260 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1231 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+297% · −62,5%** | +60% · −14,3% | +37% | −6,3% | 4,7 | 67 d | −8,8% | +17% | 0,30 |
> | 1232 | MACD ·ADX + Bollinger ·ADX | **+87% · −16,8%** | +47% · −7,9% | +29% | −10,1% | 2,8 | 70 d | −5,4% | +20% | 0,38 |
> | 1233 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+166% · −24,6%** | +36% · −4,0% | +25% | −5,2% | 2,7 | 78 d | −3,5% | +17% | 0,07 |
> | 1234 | IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+238% · −45,0%** | +49% · −9,4% | +34% | −9,8% | 3,6 | 95 d | −4,1% | +31% | 0,30 |
> | 1235 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+280% · −43,0%** | +51% · −7,3% | +31% | −5,3% | 3,9 | 112 d | −3,3% | +23% | 0,08 |
> | 1236 | GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+207% · −44,8%** | +53% · −12,1% | +34% | −6,1% | 3,2 | 67 d | −6,6% | +23% | 0,21 |
> | 1237 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+163% · −28,8%** | +37% · −5,7% | +28% | −7,4% | 3,8 | 106 d | −3,8% | +18% | 0,06 |
> | 1238 | GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+186% · −44,1%** | +51% · −11,0% | +33% | −8,4% | 4,0 | 76 d | −6,8% | +23% | 0,29 |
> | 1239 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+175% · −39,0%** | +41% · −7,1% | +29% | −5,5% | 3,3 | 76 d | −5,8% | +24% | 0,01 |
> | 1240 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+326% · −47,5%** | +58% · −8,9% | +35% | −6,4% | 3,4 | 65 d | −7,4% | +23% | 0,28 |
> | 1241 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+231% · −45,0%** | +50% · −9,3% | +31% | −4,4% | 3,2 | 76 d | −5,6% | +23% | 0,15 |
> | 1242 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+237% · −36,0%** | +46% · −7,2% | +29% | −5,7% | 2,8 | 67 d | −5,6% | +22% | 0,08 |
> | 1243 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+251% · −41,3%** | +49% · −7,8% | +31% | −6,8% | 3,0 | 77 d | −4,6% | +22% | 0,15 |
> | 1244 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+134% · −23,1%** | +33% · −3,9% | +25% | −4,0% | 3,9 | 119 d | −3,0% | +16% | −0,03 |
> | 1245 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+180% · −34,8%** | +41% · −6,7% | +29% | −7,5% | 3,3 | 76 d | −5,7% | +24% | 0,02 |
> | 1246 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+271% · −39,2%** | +51% · −7,5% | +31% | −5,5% | 2,7 | 74 d | −4,2% | +22% | 0,11 |
> | 1247 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+285% · −47,9%** | +54% · −9,8% | +33% | −5,7% | 4,5 | 83 d | −6,4% | +17% | 0,24 |
> | 1248 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+235% · −41,4%** | +50% · −8,1% | +30% | −4,1% | 3,1 | 77 d | −5,1% | +24% | 0,08 |
> | 1249 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+268% · −43,9%** | +54% · −9,3% | +34% | −11,6% | 3,1 | 64 d | −7,0% | +23% | 0,34 |
> | 1250 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+320% · −56,2%** | +67% · −11,9% | +40% | −8,8% | 3,5 | 65 d | −7,6% | +34% | 0,31 |
> | 1251 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+74% · −15,0%** | +31% · −4,6% | +25% | −4,1% | 3,8 | 120 d | −2,4% | +19% | −0,12 |
> | 1252 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+242% · −36,1%** | +61% · −10,0% | +35% | −6,5% | 4,0 | 70 d | −8,0% | +23% | 0,16 |
> | 1253 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+170% · −37,5%** | +40% · −7,6% | +27% | −7,9% | 3,7 | 94 d | −4,7% | +20% | 0,02 |
> | 1254 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+307% · −55,1%** | +64% · −11,8% | +36% | −5,3% | 3,9 | 74 d | −7,0% | +24% | 0,31 |
> | 1255 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+191% · −40,0%** | +52% · −10,4% | +36% | −10,1% | 3,1 | 75 d | −5,5% | +25% | 0,41 |
> | 1256 | GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+174% · −42,0%** | +62% · −14,3% | +39% | −9,8% | 3,8 | 65 d | −8,4% | +27% | 0,41 |
> | 1257 | MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+57% · −13,5%** | +27% · −3,4% | +22% | −5,8% | 2,4 | 75 d | −2,4% | +21% | −0,02 |
> | 1258 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+203% · −39,6%** | +44% · −7,3% | +29% | −5,5% | 2,6 | 80 d | −2,8% | +22% | 0,12 |
> | 1259 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+353% · −44,5%** | +65% · −9,7% | +36% | −8,3% | 3,9 | 69 d | −7,9% | +31% | 0,29 |
> | 1260 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+304% · −43,8%** | +56% · −9,1% | +31% | −7,7% | 3,0 | 65 d | −6,7% | +22% | 0,23 |

> [!example]- Combinações 1261 a 1290 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1261 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+210% · −40,1%** | +54% · −9,5% | +34% | −6,3% | 2,9 | 65 d | −6,2% | +26% | 0,03 |
> | 1262 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+92% · −18,6%** | +30% · −3,8% | +23% | −1,5% | 2,7 | 72 d | −5,0% | +19% | −0,08 |
> | 1263 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+151% · −43,7%** | +38% · −9,2% | +27% | −11,3% | 3,1 | 75 d | −5,5% | +18% | 0,16 |
> | 1264 | GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+252% · −40,0%** | +60% · −9,2% | +36% | −7,9% | 3,7 | 65 d | −8,1% | +26% | 0,37 |
> | 1265 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+257% · −34,2%** | +58% · −7,9% | +34% | −4,7% | 3,7 | 107 d | −3,6% | +21% | 0,13 |
> | 1266 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+392% · −40,9%** | +64% · −8,6% | +35% | −4,2% | 4,7 | 121 d | −4,2% | +23% | 0,16 |
> | 1267 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+212% · −41,4%** | +48% · −8,5% | +32% | −10,0% | 3,6 | 74 d | −6,6% | +26% | 0,17 |
> | 1268 | IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+230% · −36,8%** | +45% · −7,1% | +30% | −7,2% | 3,5 | 101 d | −3,5% | +23% | 0,24 |
> | 1269 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+149% · −34,2%** | +37% · −6,6% | +26% | −6,5% | 3,5 | 81 d | −5,5% | +24% | 0,03 |
> | 1270 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+240% · −39,2%** | +50% · −7,8% | +31% | −6,7% | 4,7 | 102 d | −5,3% | +22% | 0,05 |
> | 1271 | IFR ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+224% · −41,9%** | +56% · −11,0% | +39% | −11,1% | 3,7 | 95 d | −4,5% | +33% | 0,38 |
> | 1272 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+313% · −50,8%** | +59% · −9,5% | +33% | −5,4% | 3,1 | 65 d | −6,8% | +25% | 0,19 |
> | 1273 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+206% · −34,4%** | +43% · −6,5% | +26% | −6,3% | 3,8 | 99 d | −4,5% | +16% | 0,07 |
> | 1274 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+278% · −33,7%** | +50% · −6,1% | +30% | −3,7% | 3,8 | 112 d | −3,3% | +19% | 0,05 |
> | 1275 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+312% · −48,0%** | +60% · −10,2% | +35% | −5,4% | 3,9 | 70 d | −8,0% | +24% | 0,16 |
> | 1276 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+260% · −37,2%** | +61% · −9,0% | +38% | −6,3% | 4,4 | 70 d | −8,5% | +22% | 0,20 |
> | 1277 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+226% · −42,4%** | +47% · −8,9% | +31% | −5,6% | 3,9 | 81 d | −6,2% | +23% | 0,14 |
> | 1278 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+213% · −30,5%** | +44% · −5,4% | +31% | −7,5% | 2,5 | 76 d | −3,4% | +21% | 0,07 |
> | 1279 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+191% · −35,1%** | +40% · −6,5% | +28% | −4,5% | 3,6 | 89 d | −5,0% | +17% | 0,09 |
> | 1280 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+178% · −49,2%** | +50% · −13,9% | +33% | −8,3% | 3,9 | 74 d | −7,2% | +17% | 0,17 |
> | 1281 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+198% · −35,2%** | +44% · −6,7% | +30% | −5,3% | 3,6 | 76 d | −6,4% | +22% | 0,02 |
> | 1282 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+236% · −40,1%** | +59% · −10,2% | +38% | −9,0% | 3,2 | 67 d | −6,7% | +30% | 0,29 |
> | 1283 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+249% · −46,4%** | +62% · −12,4% | +36% | −5,3% | 3,6 | 80 d | −6,0% | +25% | 0,16 |
> | 1284 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+258% · −57,7%** | +56% · −12,9% | +35% | −8,3% | 3,1 | 65 d | −7,0% | +26% | 0,26 |
> | 1285 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+268% · −49,2%** | +51% · −9,6% | +32% | −4,8% | 3,2 | 65 d | −7,2% | +19% | 0,12 |
> | 1286 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+244% · −37,6%** | +50% · −7,7% | +32% | −7,7% | 2,9 | 67 d | −6,2% | +24% | 0,04 |
> | 1287 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+249% · −55,4%** | +64% · −15,0% | +38% | −6,8% | 3,9 | 77 d | −6,7% | +23% | 0,18 |
> | 1288 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+337% · −46,1%** | +62% · −9,5% | +35% | −6,6% | 3,1 | 65 d | −7,0% | +29% | 0,35 |
> | 1289 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+386% · −56,8%** | +65% · −12,0% | +36% | −5,8% | 4,8 | 120 d | −4,6% | +22% | 0,20 |
> | 1290 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+308% · −49,6%** | +59% · −10,7% | +36% | −5,4% | 4,1 | 70 d | −8,3% | +23% | 0,10 |

> [!example]- Combinações 1291 a 1320 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1291 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+282% · −37,9%** | +54% · −7,2% | +35% | −5,7% | 2,9 | 76 d | −5,0% | +24% | 0,08 |
> | 1292 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+201% · −40,2%** | +44% · −8,3% | +30% | −8,9% | 2,7 | 67 d | −5,6% | +23% | 0,23 |
> | 1293 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+156% · −36,2%** | +37% · −6,9% | +27% | −6,7% | 2,7 | 72 d | −5,2% | +21% | −0,05 |
> | 1294 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+196% · −23,8%** | +47% · −4,9% | +27% | −2,2% | 4,3 | 101 d | −5,3% | +18% | −0,04 |
> | 1295 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+259% · −45,3%** | +55% · −9,3% | +34% | −5,7% | 3,3 | 76 d | −5,9% | +27% | 0,18 |
> | 1296 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+181% · −26,8%** | +47% · −6,4% | +30% | −4,2% | 3,8 | 91 d | −5,4% | +19% | 0,13 |
> | 1297 | GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+155% · −27,7%** | +53% · −8,5% | +30% | −5,1% | 3,7 | 76 d | −6,7% | +19% | 0,07 |
> | 1298 | ADX ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+200% · −43,5%** | +45% · −8,7% | +31% | −7,6% | 2,7 | 76 d | −4,3% | +26% | 0,07 |
> | 1299 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+280% · −42,0%** | +56% · −8,9% | +34% | −8,3% | 3,8 | 70 d | −7,9% | +25% | 0,20 |
> | 1300 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+135% · −29,9%** | +33% · −5,4% | +25% | −5,3% | 3,7 | 119 d | −3,0% | +17% | 0,04 |
> | 1301 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+227% · −50,1%** | +50% · −9,7% | +34% | −8,9% | 2,7 | 76 d | −4,5% | +26% | 0,13 |
> | 1302 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+180% · −42,0%** | +40% · −8,7% | +25% | −9,1% | 2,9 | 67 d | −6,3% | +16% | 0,17 |
> | 1303 | Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+296% · −44,6%** | +58% · −9,2% | +36% | −8,5% | 4,0 | 79 d | −6,8% | +28% | 0,33 |
> | 1304 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+274% · −39,4%** | +52% · −7,5% | +31% | −5,6% | 2,6 | 74 d | −4,3% | +21% | 0,12 |
> | 1305 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+282% · −48,7%** | +58% · −10,2% | +35% | −5,6% | 3,6 | 76 d | −6,5% | +28% | 0,16 |
> | 1306 | Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+249% · −37,0%** | +57% · −9,1% | +33% | −5,2% | 4,1 | 70 d | −8,3% | +20% | 0,13 |
> | 1307 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+211% · −34,6%** | +45% · −6,6% | +28% | −3,3% | 4,3 | 102 d | −5,2% | +18% | −0,04 |
> | 1308 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+283% · −35,0%** | +52% · −6,3% | +29% | −4,3% | 4,5 | 94 d | −6,0% | +19% | 0,02 |
> | 1309 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+207% · −36,6%** | +53% · −8,7% | +33% | −5,4% | 2,3 | 65 d | −4,8% | +24% | 0,17 |
> | 1310 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+190% · −49,7%** | +45% · −10,1% | +31% | −9,9% | 3,3 | 73 d | −6,3% | +22% | 0,17 |
> | 1311 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+309% · −40,3%** | +54% · −8,0% | +34% | −7,1% | 3,8 | 86 d | −5,6% | +25% | 0,28 |
> | 1312 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+247% · −42,6%** | +47% · −8,8% | +31% | −6,7% | 3,6 | 90 d | −5,1% | +21% | 0,16 |
> | 1313 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+160% · −30,5%** | +44% · −7,4% | +30% | −6,2% | 2,7 | 67 d | −5,7% | +22% | −0,01 |
> | 1314 | GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+295% · −41,2%** | +55% · −7,5% | +34% | −6,2% | 3,7 | 74 d | −7,1% | +27% | 0,17 |
> | 1315 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+229% · −43,6%** | +48% · −9,0% | +30% | −7,3% | 3,1 | 65 d | −7,2% | +19% | 0,16 |
> | 1316 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+331% · −52,0%** | +63% · −10,6% | +38% | −5,5% | 4,5 | 70 d | −8,9% | +22% | 0,23 |
> | 1317 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+215% · −26,6%** | +43% · −5,4% | +27% | −4,8% | 3,4 | 92 d | −4,5% | +21% | 0,07 |
> | 1318 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+254% · −41,7%** | +50% · −8,2% | +29% | −4,0% | 3,2 | 77 d | −5,7% | +22% | 0,10 |
> | 1319 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+81% · −18,6%** | +33% · −5,6% | +25% | −2,2% | 2,8 | 67 d | −6,0% | +21% | −0,22 |
> | 1320 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+330% · −47,7%** | +60% · −9,0% | +34% | −4,6% | 4,4 | 70 d | −8,8% | +20% | 0,17 |

> [!example]- Combinações 1321 a 1350 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1321 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+194% · −36,9%** | +51% · −8,7% | +30% | −4,5% | 4,6 | 94 d | −6,1% | +17% | −0,01 |
> | 1322 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+191% · −32,2%** | +63% · −11,0% | +38% | −9,4% | 3,3 | 67 d | −7,2% | +31% | 0,26 |
> | 1323 | Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+199% · −32,4%** | +41% · −5,7% | +28% | −5,5% | 3,1 | 90 d | −4,0% | +23% | 0,05 |
> | 1324 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+176% · −25,3%** | +38% · −4,6% | +26% | −5,5% | 3,3 | 88 d | −4,6% | +22% | 0,03 |
> | 1325 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+190% · −23,0%** | +39% · −3,9% | +27% | −5,0% | 3,5 | 93 d | −4,6% | +19% | −0,02 |
> | 1326 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+152% · −49,5%** | +38% · −10,1% | +27% | −4,7% | 3,6 | 76 d | −6,6% | +14% | 0,06 |
> | 1327 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+237% · −38,2%** | +47% · −7,5% | +29% | −10,0% | 4,2 | 91 d | −6,0% | +20% | 0,24 |
> | 1328 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+233% · −33,3%** | +45% · −6,1% | +30% | −6,3% | 3,3 | 101 d | −3,4% | +22% | 0,15 |
> | 1329 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+131% · −30,7%** | +33% · −5,7% | +25% | −5,3% | 2,4 | 71 d | −4,7% | +20% | −0,01 |
> | 1330 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+194% · −34,4%** | +43% · −6,6% | +29% | −6,7% | 3,0 | 72 d | −6,0% | +24% | −0,05 |
> | 1331 | Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+200% · −36,0%** | +41% · −6,7% | +28% | −6,5% | 3,1 | 87 d | −4,2% | +24% | 0,11 |
> | 1332 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+243% · −53,0%** | +52% · −11,5% | +35% | −7,7% | 3,9 | 74 d | −7,4% | +25% | 0,21 |
> | 1333 | Donchian ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+342% · −39,3%** | +71% · −10,1% | +40% | −7,3% | 4,4 | 70 d | −8,9% | +23% | 0,37 |
> | 1334 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+208% · −33,7%** | +43% · −6,3% | +26% | −6,4% | 3,8 | 99 d | −4,9% | +17% | 0,07 |
> | 1335 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+126% · −31,8%** | +38% · −7,7% | +28% | −11,3% | 2,7 | 75 d | −4,9% | +21% | 0,27 |
> | 1336 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+225% · −46,7%** | +50% · −9,8% | +35% | −10,3% | 2,8 | 73 d | −5,3% | +27% | 0,37 |
> | 1337 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+212% · −37,3%** | +43% · −6,6% | +28% | −4,3% | 3,8 | 78 d | −6,7% | +16% | 0,15 |
> | 1338 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+252% · −29,0%** | +46% · −4,9% | +30% | −5,4% | 3,1 | 92 d | −3,7% | +20% | 0,04 |
> | 1339 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+178% · −37,2%** | +41% · −6,5% | +29% | −5,4% | 3,2 | 76 d | −5,9% | +25% | 0,02 |
> | 1340 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+210% · −30,8%** | +53% · −7,6% | +33% | −5,6% | 3,7 | 87 d | −5,5% | +24% | 0,11 |
> | 1341 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+176% · −34,5%** | +40% · −6,8% | +27% | −7,4% | 2,6 | 72 d | −4,9% | +21% | 0,01 |
> | 1342 | Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+80% · −12,3%** | +27% · −1,8% | +19% | −1,8% | 3,1 | 96 d | −3,1% | +18% | 0,03 |
> | 1343 | 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+252% · −38,2%** | +48% · −7,4% | +31% | −7,1% | 3,2 | 90 d | −4,4% | +22% | 0,20 |
> | 1344 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+127% · −41,5%** | +33% · −8,8% | +24% | −4,8% | 2,7 | 72 d | −5,5% | +16% | −0,03 |
> | 1345 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+348% · −39,0%** | +60% · −8,3% | +33% | −4,1% | 3,9 | 97 d | −5,3% | +22% | 0,16 |
> | 1346 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+183% · −25,7%** | +47% · −6,6% | +29% | −3,7% | 3,9 | 102 d | −4,9% | +21% | 0,04 |
> | 1347 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+360% · −46,7%** | +64% · −10,2% | +36% | −9,3% | 3,9 | 70 d | −8,3% | +26% | 0,37 |
> | 1348 | ADX ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+210% · −41,7%** | +54% · −10,2% | +34% | −7,8% | 2,7 | 65 d | −6,3% | +27% | 0,14 |
> | 1349 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+236% · −55,5%** | +50% · −13,1% | +32% | −8,3% | 3,3 | 64 d | −8,1% | +20% | 0,26 |
> | 1350 | GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+248% · −37,3%** | +59% · −9,8% | +34% | −8,8% | 3,3 | 65 d | −7,8% | +28% | 0,26 |

> [!example]- Combinações 1351 a 1380 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1351 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+230% · −44,8%** | +48% · −9,5% | +29% | −6,7% | 3,4 | 65 d | −8,0% | +21% | 0,07 |
> | 1352 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+336% · −53,2%** | +68% · −11,2% | +41% | −8,1% | 4,4 | 66 d | −9,6% | +30% | 0,39 |
> | 1353 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+169% · −48,1%** | +41% · −10,5% | +28% | −7,5% | 3,2 | 73 d | −6,3% | +18% | 0,13 |
> | 1354 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+151% · −33,5%** | +37% · −6,4% | +26% | −6,5% | 3,3 | 81 d | −5,7% | +23% | 0,03 |
> | 1355 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+261% · −41,6%** | +54% · −8,6% | +34% | −10,5% | 3,0 | 60 d | −7,8% | +24% | 0,28 |
> | 1356 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+47% · −9,1%** | +24% · −2,6% | +20% | −1,7% | 4,5 | 149 d | −2,2% | +16% | 0,02 |
> | 1357 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+224% · −35,5%** | +47% · −7,1% | +32% | −7,0% | 3,0 | 67 d | −6,8% | +26% | 0,09 |
> | 1358 | Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+184% · −38,9%** | +49% · −9,1% | +31% | −5,9% | 4,2 | 89 d | −6,4% | +18% | 0,15 |
> | 1359 | GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+145% · −28,3%** | +41% · −6,9% | +24% | −5,3% | 2,8 | 72 d | −5,7% | +20% | 0,05 |
> | 1360 | GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+85% · −25,2%** | +36% · −8,1% | +24% | −6,0% | 3,1 | 72 d | −6,3% | +17% | 0,02 |
> | 1361 | 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+252% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 3,0 | 90 d | −4,0% | +21% | 0,06 |
> | 1362 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+109% · −28,2%** | +43% · −9,4% | +28% | −9,8% | 3,0 | 67 d | −6,8% | +25% | −0,02 |
> | 1363 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+147% · −34,4%** | +35% · −6,6% | +24% | −4,9% | 2,6 | 72 d | −5,2% | +21% | 0,01 |
> | 1364 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+225% · −44,2%** | +50% · −9,3% | +31% | −7,8% | 3,7 | 76 d | −6,9% | +24% | 0,19 |
> | 1365 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+176% · −33,8%** | +46% · −8,6% | +28% | −8,3% | 2,8 | 67 d | −6,3% | +24% | 0,11 |
> | 1366 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+239% · −46,6%** | +53% · −9,8% | +32% | −9,7% | 3,9 | 70 d | −8,4% | +20% | 0,15 |
> | 1367 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+346% · −57,6%** | +65% · −12,1% | +39% | −8,0% | 3,5 | 64 d | −8,6% | +29% | 0,30 |
> | 1368 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+252% · −37,5%** | +51% · −7,4% | +33% | −7,1% | 3,4 | 87 d | −5,1% | +25% | 0,19 |
> | 1369 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+419% · −50,9%** | +71% · −10,6% | +39% | −6,3% | 4,5 | 70 d | −9,3% | +23% | 0,38 |
> | 1370 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+241% · −46,9%** | +60% · −11,5% | +38% | −9,0% | 2,7 | 65 d | −6,4% | +29% | 0,25 |
> | 1371 | GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+247% · −37,5%** | +50% · −7,7% | +32% | −7,7% | 2,8 | 67 d | −6,4% | +24% | 0,11 |
> | 1372 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+280% · −41,9%** | +54% · −8,9% | +31% | −8,2% | 3,6 | 71 d | −7,7% | +24% | 0,16 |
> | 1373 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+219% · −24,5%** | +51% · −5,5% | +29% | −4,6% | 3,5 | 73 d | −7,1% | +24% | 0,00 |
> | 1374 | IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+211% · −25,9%** | +50% · −5,6% | +32% | −5,4% | 3,8 | 99 d | −5,0% | +25% | 0,09 |
> | 1375 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+194% · −26,9%** | +40% · −4,8% | +26% | −5,0% | 4,5 | 128 d | −3,7% | +17% | 0,05 |
> | 1376 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+356% · −57,8%** | +70% · −11,6% | +41% | −9,1% | 4,0 | 76 d | −7,6% | +30% | 0,33 |
> | 1377 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+229% · −49,4%** | +51% · −10,6% | +34% | −8,6% | 3,8 | 83 d | −6,2% | +24% | 0,26 |
> | 1378 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+277% · −41,9%** | +53% · −8,9% | +31% | −8,2% | 3,6 | 71 d | −7,8% | +23% | 0,16 |
> | 1379 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+202% · −43,6%** | +46% · −8,7% | +31% | −7,6% | 2,6 | 76 d | −4,4% | +26% | 0,09 |
> | 1380 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+160% · −38,8%** | +38% · −8,0% | +29% | −6,5% | 3,2 | 95 d | −4,0% | +19% | 0,09 |

> [!example]- Combinações 1381 a 1410 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1381 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+182% · −45,0%** | +42% · −9,4% | +30% | −10,4% | 2,5 | 69 d | −5,1% | +23% | 0,26 |
> | 1382 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+182% · −40,1%** | +41% · −7,9% | +30% | −9,3% | 2,4 | 69 d | −5,1% | +24% | 0,13 |
> | 1383 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+203% · −35,9%** | +44% · −7,0% | +30% | −6,1% | 3,2 | 83 d | −5,1% | +24% | 0,04 |
> | 1384 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+168% · −22,6%** | +43% · −5,6% | +25% | −2,4% | 3,6 | 100 d | −4,7% | +20% | −0,01 |
> | 1385 | Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+220% · −26,7%** | +68% · −8,8% | +40% | −6,9% | 4,1 | 67 d | −9,0% | +29% | 0,23 |
> | 1386 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+220% · −39,1%** | +44% · −7,1% | +28% | −4,3% | 3,7 | 122 d | −2,7% | +19% | 0,08 |
> | 1387 | ADX ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+307% · −53,0%** | +59% · −10,8% | +34% | −6,7% | 3,0 | 65 d | −7,3% | +23% | 0,27 |
> | 1388 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+211% · −33,9%** | +44% · −6,0% | +28% | −6,0% | 3,2 | 76 d | −6,1% | +25% | 0,01 |
> | 1389 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+253% · −49,4%** | +53% · −9,9% | +32% | −5,1% | 4,7 | 83 d | −7,2% | +19% | 0,17 |
> | 1390 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+248% · −37,5%** | +50% · −7,7% | +33% | −5,2% | 2,1 | 64 d | −4,8% | +23% | 0,04 |
> | 1391 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+291% · −42,5%** | +54% · −8,1% | +32% | −6,7% | 2,3 | 65 d | −5,2% | +19% | 0,28 |
> | 1392 | ADX ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+254% · −47,0%** | +61% · −11,8% | +36% | −9,4% | 2,8 | 65 d | −6,7% | +28% | 0,27 |
> | 1393 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+259% · −60,3%** | +57% · −13,6% | +35% | −7,7% | 4,3 | 75 d | −8,2% | +17% | 0,25 |
> | 1394 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+211% · −44,6%** | +45% · −9,5% | +28% | −11,5% | 2,9 | 67 d | −6,7% | +21% | 0,21 |
> | 1395 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+177% · −37,2%** | +42% · −7,4% | +29% | −8,9% | 3,2 | 76 d | −6,2% | +27% | 0,13 |
> | 1396 | Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+221% · −39,2%** | +47% · −8,1% | +31% | −6,9% | 3,4 | 79 d | −6,3% | +26% | 0,16 |
> | 1397 | MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+99% · −16,5%** | +38% · −4,6% | +25% | −6,0% | 2,3 | 76 d | −3,3% | +19% | 0,09 |
> | 1398 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+246% · −38,0%** | +47% · −7,3% | +31% | −6,0% | 3,7 | 92 d | −5,5% | +21% | 0,16 |
> | 1399 | Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+184% · −35,9%** | +47% · −8,8% | +31% | −8,5% | 3,2 | 87 d | −4,8% | +25% | 0,21 |
> | 1400 | Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+183% · −32,3%** | +46% · −7,6% | +31% | −7,0% | 3,2 | 90 d | −4,5% | +24% | 0,06 |
> | 1401 | Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+295% · −38,8%** | +54% · −7,5% | +33% | −6,5% | 3,9 | 81 d | −6,9% | +28% | 0,12 |
> | 1402 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+227% · −29,6%** | +46% · −6,1% | +30% | −5,1% | 3,6 | 102 d | −4,6% | +22% | 0,10 |
> | 1403 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+234% · −43,6%** | +50% · −8,8% | +30% | −4,2% | 3,0 | 76 d | −5,7% | +24% | 0,13 |
> | 1404 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+240% · −36,0%** | +47% · −7,2% | +29% | −5,7% | 2,6 | 67 d | −5,9% | +23% | 0,11 |
> | 1405 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+236% · −52,5%** | +51% · −11,1% | +32% | −5,8% | 3,2 | 76 d | −6,2% | +23% | 0,12 |
> | 1406 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+178% · −25,7%** | +38% · −4,6% | +26% | −5,7% | 3,2 | 94 d | −4,4% | +22% | 0,05 |
> | 1407 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+278% · −51,2%** | +58% · −10,4% | +35% | −6,8% | 4,0 | 70 d | −8,7% | +24% | 0,24 |
> | 1408 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+198% · −48,8%** | +44% · −10,0% | +30% | −6,3% | 3,7 | 79 d | −6,8% | +17% | 0,17 |
> | 1409 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+301% · −40,3%** | +54% · −7,7% | +33% | −9,5% | 2,9 | 66 d | −6,9% | +24% | 0,28 |
> | 1410 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+214% · −45,1%** | +47% · −9,8% | +30% | −10,7% | 2,7 | 67 d | −6,1% | +22% | 0,25 |

> [!example]- Combinações 1411 a 1440 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1411 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+283% · −42,6%** | +52% · −8,7% | +33% | −3,8% | 4,6 | 89 d | −6,9% | +21% | −0,01 |
> | 1412 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+193% · −22,9%** | +39% · −3,9% | +27% | −5,0% | 3,4 | 99 d | −4,3% | +19% | 0,03 |
> | 1413 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+259% · −62,6%** | +56% · −14,4% | +35% | −7,0% | 3,5 | 80 d | −6,3% | +23% | 0,21 |
> | 1414 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+315% · −53,6%** | +69% · −11,0% | +39% | −7,0% | 3,3 | 65 d | −8,1% | +30% | 0,31 |
> | 1415 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+173% · −34,0%** | +39% · −6,4% | +27% | −5,1% | 3,1 | 83 d | −5,0% | +23% | 0,04 |
> | 1416 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+268% · −47,7%** | +58% · −10,5% | +35% | −6,5% | 3,7 | 69 d | −8,4% | +27% | 0,18 |
> | 1417 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+216% · −30,4%** | +44% · −5,8% | +31% | −7,5% | 2,3 | 76 d | −3,5% | +20% | 0,15 |
> | 1418 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+209% · −38,9%** | +47% · −7,9% | +29% | −8,1% | 3,7 | 83 d | −6,3% | +22% | 0,13 |
> | 1419 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+167% · −31,5%** | +38% · −5,6% | +28% | −6,4% | 2,3 | 80 d | −2,4% | +23% | 0,13 |
> | 1420 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+339% · −42,7%** | +65% · −8,7% | +38% | −6,2% | 3,1 | 57 d | −8,3% | +26% | 0,22 |
> | 1421 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+244% · −41,9%** | +50% · −9,4% | +33% | −9,2% | 4,2 | 120 d | −4,7% | +21% | 0,23 |
> | 1422 | Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+252% · −35,9%** | +58% · −9,1% | +33% | −5,3% | 4,1 | 81 d | −7,3% | +21% | 0,15 |
> | 1423 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+269% · −43,3%** | +57% · −9,3% | +34% | −8,4% | 3,8 | 80 d | −7,0% | +28% | 0,31 |
> | 1424 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+205% · −33,4%** | +42% · −6,2% | +26% | −5,0% | 2,6 | 72 d | −5,3% | +20% | 0,03 |
> | 1425 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+174% · −36,6%** | +40% · −7,4% | +27% | −8,3% | 2,5 | 72 d | −5,2% | +22% | 0,06 |
> | 1426 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+229% · −30,3%** | +44% · −5,6% | +30% | −7,8% | 3,2 | 85 d | −5,1% | +20% | 0,13 |
> | 1427 | ADX ·ADX + IFR ·ADX + Tendência ·ADX | **+224% · −45,2%** | +73% · −14,8% | +44% | −10,1% | 3,5 | 80 d | −6,5% | +30% | 0,37 |
> | 1428 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+263% · −44,0%** | +55% · −8,8% | +33% | −5,7% | 3,1 | 77 d | −6,0% | +26% | 0,17 |
> | 1429 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+163% · −30,4%** | +45% · −7,4% | +30% | −6,2% | 2,6 | 67 d | −5,9% | +23% | 0,06 |
> | 1430 | 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+192% · −27,1%** | +40% · −4,8% | +27% | −6,4% | 3,3 | 96 d | −4,4% | +20% | 0,11 |
> | 1431 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+239% · −37,0%** | +60% · −10,0% | +35% | −6,5% | 4,1 | 70 d | −9,0% | +22% | 0,15 |
> | 1432 | VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+190% · −40,6%** | +41% · −8,3% | +28% | −5,9% | 3,5 | 94 d | −5,1% | +16% | 0,17 |
> | 1433 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+159% · −34,1%** | +37% · −6,4% | +27% | −6,9% | 2,5 | 72 d | −5,3% | +22% | −0,02 |
> | 1434 | GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+194% · −40,4%** | +45% · −7,6% | +30% | −6,5% | 3,5 | 76 d | −6,9% | +26% | 0,09 |
> | 1435 | VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+121% · −44,0%** | +38% · −11,6% | +28% | −6,9% | 3,1 | 84 d | −4,8% | +14% | 0,15 |
> | 1436 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+121% · −36,9%** | +37% · −9,3% | +28% | −5,1% | 3,4 | 95 d | −4,8% | +15% | 0,02 |
> | 1437 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+156% · −34,6%** | +38% · −6,0% | +27% | −6,1% | 3,0 | 78 d | −5,5% | +21% | 0,06 |
> | 1438 | ADX ·ADX + IFR ·ADX + Bollinger ·ADX | **+207% · −34,5%** | +66% · −11,3% | +36% | −5,8% | 2,6 | 80 d | −4,2% | +21% | 0,34 |
> | 1439 | VWAP ·ADX + IFR ·ADX + Tendência ·ADX | **+154% · −35,4%** | +55% · −11,4% | +37% | −9,9% | 3,4 | 75 d | −7,0% | +21% | 0,32 |
> | 1440 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+223% · −51,8%** | +49% · −10,5% | +33% | −7,6% | 3,5 | 73 d | −7,4% | +23% | 0,24 |

> [!example]- Combinações 1441 a 1470 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1441 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+218% · −34,8%** | +45% · −7,3% | +30% | −5,9% | 4,0 | 120 d | −4,6% | +17% | 0,04 |
> | 1442 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+303% · −53,1%** | +60% · −11,8% | +39% | −10,4% | 3,3 | 101 d | −4,0% | +29% | 0,32 |
> | 1443 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+176% · −43,9%** | +40% · −8,2% | +28% | −4,0% | 2,8 | 72 d | −6,0% | +20% | 0,01 |
> | 1444 | Donchian ·ADX + Pullback ·PUL + Tendência ·ADX | **+194% · −42,0%** | +64% · −13,9% | +39% | −6,5% | 5,4 | 91 d | −7,3% | +17% | 0,21 |
> | 1445 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+185% · −49,7%** | +50% · −13,0% | +34% | −5,5% | 3,3 | 67 d | −7,9% | +18% | 0,06 |
> | 1446 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+290% · −50,2%** | +60% · −11,5% | +35% | −11,6% | 3,3 | 65 d | −8,2% | +24% | 0,31 |
> | 1447 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+263% · −48,9%** | +51% · −9,4% | +32% | −5,8% | 3,7 | 74 d | −7,8% | +19% | 0,19 |
> | 1448 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+220% · −41,6%** | +49% · −8,2% | +33% | −7,8% | 3,5 | 76 d | −7,0% | +27% | 0,13 |
> | 1449 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+337% · −57,3%** | +63% · −11,7% | +37% | −7,9% | 3,0 | 65 d | −7,6% | +28% | 0,36 |
> | 1450 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+167% · −42,5%** | +46% · −10,8% | +32% | −7,3% | 3,8 | 78 d | −7,2% | +20% | 0,14 |
> | 1451 | IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+154% · −27,7%** | +43% · −6,7% | +31% | −7,2% | 2,1 | 73 d | −3,5% | +23% | 0,13 |
> | 1452 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+66% · −13,4%** | +25% · −2,9% | +21% | −3,9% | 2,1 | 76 d | −2,3% | +20% | 0,01 |
> | 1453 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+222% · −36,1%** | +47% · −7,2% | +31% | −5,7% | 3,6 | 89 d | −5,9% | +27% | 0,06 |
> | 1454 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+260% · −46,6%** | +53% · −9,5% | +34% | −6,6% | 3,9 | 75 d | −8,0% | +19% | 0,19 |
> | 1455 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+221% · −41,2%** | +44% · −7,7% | +28% | −5,2% | 3,2 | 112 d | −2,3% | +22% | 0,11 |
> | 1456 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+365% · −50,5%** | +71% · −10,1% | +39% | −6,3% | 3,3 | 65 d | −8,3% | +29% | 0,29 |
> | 1457 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+196% · −34,4%** | +43% · −6,4% | +29% | −6,7% | 2,8 | 72 d | −6,2% | +23% | 0,01 |
> | 1458 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+184% · −22,6%** | +39% · −4,2% | +28% | −4,5% | 2,8 | 92 d | −3,2% | +20% | −0,01 |
> | 1459 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+249% · −39,6%** | +48% · −7,8% | +32% | −10,6% | 2,6 | 67 d | −6,1% | +26% | 0,35 |
> | 1460 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+309% · −42,4%** | +56% · −8,5% | +31% | −6,8% | 3,1 | 71 d | −7,0% | +25% | 0,12 |
> | 1461 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+231% · −38,1%** | +46% · −7,6% | +28% | −9,0% | 2,8 | 65 d | −7,1% | +20% | 0,10 |
> | 1462 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+123% · −23,1%** | +36% · −5,2% | +27% | −5,4% | 3,6 | 119 d | −3,9% | +16% | −0,02 |
> | 1463 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+349% · −52,8%** | +61% · −10,6% | +34% | −5,7% | 4,1 | 97 d | −6,1% | +24% | 0,18 |
> | 1464 | GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+278% · −41,0%** | +62% · −10,5% | +36% | −6,0% | 3,1 | 67 d | −7,4% | +27% | 0,26 |
> | 1465 | GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+271% · −44,4%** | +55% · −9,6% | +35% | −10,6% | 2,8 | 67 d | −6,6% | +25% | 0,28 |
> | 1466 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+243% · −39,6%** | +50% · −8,3% | +32% | −8,6% | 2,8 | 67 d | −6,7% | +25% | 0,24 |
> | 1467 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+217% · −43,0%** | +46% · −9,2% | +30% | −9,8% | 2,7 | 73 d | −5,8% | +25% | 0,13 |
> | 1468 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+282% · −43,6%** | +58% · −8,7% | +35% | −6,8% | 3,2 | 87 d | −5,2% | +25% | 0,23 |
> | 1469 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+195% · −49,9%** | +44% · −10,4% | +30% | −6,3% | 3,7 | 83 d | −6,4% | +16% | 0,17 |
> | 1470 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+227% · −37,2%** | +57% · −9,3% | +35% | −10,7% | 3,2 | 64 d | −8,5% | +22% | 0,27 |

> [!example]- Combinações 1471 a 1500 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1471 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+284% · −53,8%** | +55% · −10,6% | +32% | −4,6% | 3,3 | 80 d | −6,2% | +21% | 0,19 |
> | 1472 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+154% · −25,3%** | +40% · −5,6% | +27% | −7,2% | 2,5 | 78 d | −4,1% | +16% | 0,15 |
> | 1473 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+129% · −40,8%** | +33% · −8,6% | +24% | −4,7% | 2,6 | 72 d | −5,5% | +17% | −0,01 |
> | 1474 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+134% · −31,2%** | +38% · −7,6% | +25% | −3,2% | 3,6 | 101 d | −5,0% | +14% | 0,03 |
> | 1475 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+199% · −37,5%** | +44% · −7,0% | +29% | −5,7% | 2,3 | 76 d | −3,6% | +22% | 0,07 |
> | 1476 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+154% · −26,7%** | +36% · −5,1% | +25% | −4,7% | 3,5 | 109 d | −4,3% | +20% | 0,05 |
> | 1477 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+327% · −45,7%** | +58% · −7,8% | +33% | −5,0% | 3,7 | 105 d | −5,1% | +22% | 0,17 |
> | 1478 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+115% · −38,7%** | +37% · −10,1% | +25% | −8,9% | 3,1 | 78 d | −6,0% | +15% | −0,02 |
> | 1479 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+246% · −33,7%** | +48% · −6,4% | +30% | −7,0% | 3,2 | 83 d | −5,7% | +24% | 0,15 |
> | 1480 | Tendência ·ADX | **+72% · −23,6%** | +72% · −23,6% | +48% | −16,1% | 3,8 | 54 d | −11,1% | +22% | — |
> | 1481 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+181% · −30,5%** | +40% · −5,6% | +24% | −6,5% | 3,3 | 91 d | −5,1% | +17% | 0,06 |
> | 1482 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+168% · −46,0%** | +39% · −10,0% | +27% | −9,1% | 2,7 | 72 d | −5,9% | +20% | −0,02 |
> | 1483 | GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+148% · −40,2%** | +54% · −13,6% | +34% | −7,7% | 3,9 | 76 d | −8,0% | +18% | 0,27 |
> | 1484 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+330% · −64,9%** | +63% · −15,1% | +37% | −7,7% | 3,2 | 65 d | −8,2% | +23% | 0,37 |
> | 1485 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+213% · −34,7%** | +44% · −5,9% | +27% | −5,8% | 3,1 | 76 d | −6,3% | +24% | 0,02 |
> | 1486 | IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+184% · −25,5%** | +46% · −5,5% | +29% | −4,9% | 3,2 | 103 d | −3,8% | +23% | 0,07 |
> | 1487 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+179% · −37,1%** | +40% · −7,3% | +25% | −7,6% | 3,2 | 83 d | −5,7% | +16% | 0,11 |
> | 1488 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+257% · −43,2%** | +51% · −9,0% | +31% | −5,9% | 3,8 | 81 d | −7,0% | +19% | 0,21 |
> | 1489 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+232% · −44,4%** | +48% · −9,3% | +29% | −6,7% | 3,2 | 65 d | −8,3% | +22% | 0,11 |
> | 1490 | Rompe 200 ·ROM + Tendência ·ADX | **+81% · −26,3%** | +45% · −11,6% | +32% | −10,4% | 3,3 | 76 d | −6,8% | +16% | 0,18 |
> | 1491 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+264% · −55,1%** | +56% · −11,5% | +35% | −7,1% | 3,2 | 76 d | −6,5% | +28% | 0,18 |
> | 1492 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL | **+111% · −23,2%** | +42% · −7,3% | +30% | −7,9% | 3,8 | 119 d | −4,6% | +17% | 0,03 |
> | 1493 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+216% · −46,4%** | +48% · −9,4% | +30% | −5,5% | 3,1 | 80 d | −5,9% | +23% | 0,11 |
> | 1494 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+294% · −42,6%** | +54% · −8,0% | +35% | −5,5% | 4,2 | 122 d | −4,6% | +24% | 0,08 |
> | 1495 | Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+297% · −43,1%** | +54% · −9,1% | +33% | −7,6% | 3,9 | 83 d | −7,0% | +22% | 0,31 |
> | 1496 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+182% · −32,8%** | +40% · −5,9% | +29% | −5,3% | 3,3 | 98 d | −4,7% | +20% | 0,07 |
> | 1497 | MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+287% · −41,6%** | +52% · −8,4% | +34% | −8,3% | 3,0 | 90 d | −4,5% | +22% | 0,29 |
> | 1498 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+314% · −39,8%** | +70% · −11,1% | +37% | −7,7% | 4,1 | 70 d | −9,4% | +24% | 0,35 |
> | 1499 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+254% · −43,9%** | +51% · −8,9% | +29% | −4,2% | 3,0 | 76 d | −6,3% | +21% | 0,15 |
> | 1500 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+286% · −47,6%** | +54% · −10,7% | +32% | −10,8% | 2,6 | 67 d | −6,3% | +25% | 0,29 |

> [!example]- Combinações 1501 a 1530 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1501 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+268% · −39,0%** | +51% · −7,6% | +31% | −5,7% | 2,2 | 66 d | −5,3% | +22% | 0,12 |
> | 1502 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+395% · −48,1%** | +67% · −10,1% | +37% | −6,3% | 3,7 | 70 d | −8,6% | +25% | 0,29 |
> | 1503 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+257% · −49,0%** | +52% · −11,1% | +32% | −12,1% | 3,1 | 73 d | −6,8% | +25% | 0,36 |
> | 1504 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+257% · −48,3%** | +55% · −10,0% | +34% | −6,6% | 3,1 | 76 d | −6,4% | +27% | 0,27 |
> | 1505 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+246% · −42,9%** | +60% · −11,5% | +35% | −7,0% | 3,9 | 65 d | −10,0% | +22% | 0,07 |
> | 1506 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+244% · −33,5%** | +48% · −6,4% | +30% | −7,0% | 3,3 | 83 d | −5,9% | +25% | 0,12 |
> | 1507 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+247% · −40,7%** | +51% · −7,9% | +33% | −6,3% | 2,0 | 64 d | −5,2% | +23% | 0,17 |
> | 1508 | Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+132% · −20,4%** | +37% · −4,5% | +25% | −4,6% | 3,2 | 94 d | −4,9% | +21% | −0,00 |
> | 1509 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+323% · −42,4%** | +57% · −9,1% | +34% | −8,6% | 2,8 | 67 d | −6,9% | +24% | 0,24 |
> | 1510 | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+131% · −22,6%** | +37% · −5,2% | +25% | −5,9% | 3,3 | 93 d | −5,1% | +23% | 0,11 |
> | 1511 | Donchian ·ADX + IFR ·ADX + Bollinger ·ADX | **+233% · −30,1%** | +70% · −10,7% | +37% | −5,9% | 3,8 | 70 d | −8,9% | +24% | 0,28 |
> | 1512 | IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+199% · −30,3%** | +50% · −7,0% | +35% | −9,6% | 2,4 | 76 d | −4,5% | +21% | 0,26 |
> | 1513 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+286% · −44,8%** | +56% · −9,3% | +34% | −6,0% | 4,3 | 91 d | −6,9% | +20% | 0,14 |
> | 1514 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+273% · −28,6%** | +48% · −4,8% | +29% | −2,9% | 3,9 | 92 d | −6,2% | +22% | −0,01 |
> | 1515 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+177% · −36,8%** | +40% · −7,4% | +27% | −8,4% | 2,4 | 72 d | −5,3% | +22% | 0,10 |
> | 1516 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+308% · −62,8%** | +62% · −14,4% | +38% | −7,5% | 2,8 | 65 d | −7,3% | +26% | 0,28 |
> | 1517 | Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX | **+180% · −23,4%** | +57% · −7,0% | +31% | −3,1% | 4,4 | 100 d | −6,4% | +17% | 0,03 |
> | 1518 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+179% · −44,6%** | +51% · −12,3% | +33% | −14,2% | 3,1 | 75 d | −6,6% | +25% | 0,36 |
> | 1519 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+148% · −31,0%** | +35% · −5,7% | +24% | −2,4% | 3,4 | 106 d | −4,4% | +15% | 0,00 |
> | 1520 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+137% · −37,7%** | +35% · −7,6% | +27% | −7,8% | 2,4 | 73 d | −5,0% | +19% | 0,14 |
> | 1521 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+231% · −44,5%** | +46% · −9,5% | +28% | −10,0% | 2,6 | 64 d | −7,1% | +20% | 0,24 |
> | 1522 | VWAP ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+189% · −40,2%** | +52% · −10,2% | +36% | −10,2% | 3,0 | 75 d | −6,4% | +27% | 0,31 |
> | 1523 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+290% · −49,4%** | +55% · −9,4% | +34% | −6,9% | 2,3 | 65 d | −5,8% | +23% | 0,30 |
> | 1524 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+330% · −42,7%** | +58% · −8,3% | +35% | −5,8% | 2,2 | 64 d | −5,8% | +23% | 0,22 |
> | 1525 | GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+196% · −38,5%** | +45% · −7,4% | +30% | −6,5% | 3,3 | 76 d | −7,0% | +25% | 0,12 |
> | 1526 | GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+206% · −43,2%** | +55% · −10,8% | +36% | −7,2% | 3,8 | 76 d | −8,0% | +24% | 0,17 |
> | 1527 | MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+141% · −34,4%** | +52% · −11,6% | +37% | −12,7% | 2,6 | 57 d | −7,3% | +27% | 0,40 |
> | 1528 | Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+293% · −42,1%** | +55% · −8,5% | +33% | −7,7% | 3,6 | 83 d | −6,6% | +26% | 0,25 |
> | 1529 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+162% · −38,7%** | +38% · −8,0% | +29% | −6,6% | 3,1 | 100 d | −4,2% | +20% | 0,12 |
> | 1530 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+204% · −35,1%** | +42% · −6,8% | +26% | −5,9% | 2,5 | 72 d | −5,7% | +22% | 0,08 |

> [!example]- Combinações 1531 a 1560 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1531 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+291% · −49,4%** | +57% · −10,5% | +36% | −6,6% | 4,7 | 120 d | −5,7% | +18% | 0,24 |
> | 1532 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+309% · −49,5%** | +61% · −10,0% | +32% | −5,1% | 2,9 | 65 d | −7,7% | +22% | 0,25 |
> | 1533 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+247% · −43,4%** | +52% · −9,2% | +34% | −8,2% | 3,4 | 79 d | −6,8% | +29% | 0,24 |
> | 1534 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+178% · −35,8%** | +41% · −7,0% | +28% | −7,5% | 2,8 | 79 d | −5,3% | +25% | 0,13 |
> | 1535 | GPS médias ·ADX + Pullback ·PUL | **+94% · −26,5%** | +51% · −12,7% | +31% | −6,1% | 4,0 | 76 d | −8,3% | +17% | −0,06 |
> | 1536 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+321% · −52,6%** | +60% · −10,4% | +36% | −5,5% | 3,7 | 72 d | −8,5% | +26% | 0,09 |
> | 1537 | ADX ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+186% · −45,7%** | +52% · −10,4% | +34% | −8,7% | 2,6 | 76 d | −5,3% | +26% | 0,06 |
> | 1538 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+326% · −54,8%** | +64% · −11,7% | +38% | −6,8% | 4,7 | 80 d | −8,5% | +21% | 0,38 |
> | 1539 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+204% · −39,2%** | +47% · −8,1% | +29% | −6,6% | 3,1 | 74 d | −6,9% | +25% | −0,01 |
> | 1540 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+243% · −39,7%** | +51% · −7,7% | +33% | −6,2% | 3,0 | 67 d | −7,4% | +26% | 0,04 |
> | 1541 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+222% · −40,0%** | +49% · −8,3% | +33% | −7,8% | 3,3 | 76 d | −7,1% | +26% | 0,17 |
> | 1542 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+245% · −38,8%** | +48% · −7,5% | +31% | −6,6% | 3,6 | 78 d | −7,2% | +21% | 0,17 |
> | 1543 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+134% · −42,4%** | +34% · −8,9% | +26% | −5,0% | 3,1 | 100 d | −4,3% | +15% | 0,07 |
> | 1544 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+238% · −49,7%** | +50% · −11,0% | +32% | −7,2% | 3,4 | 72 d | −8,0% | +21% | 0,11 |
> | 1545 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+330% · −43,9%** | +60% · −9,6% | +34% | −7,5% | 3,2 | 63 d | −9,1% | +22% | 0,28 |
> | 1546 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+189% · −39,0%** | +51% · −9,5% | +33% | −7,4% | 2,4 | 81 d | −3,7% | +24% | 0,22 |
> | 1547 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+240% · −47,5%** | +62% · −12,1% | +36% | −5,6% | 4,3 | 70 d | −9,9% | +21% | 0,18 |
> | 1548 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+387% · −57,2%** | +68% · −12,0% | +40% | −6,7% | 4,9 | 120 d | −5,9% | +24% | 0,23 |
> | 1549 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+311% · −49,7%** | +61% · −11,3% | +34% | −10,6% | 3,7 | 70 d | −8,8% | +21% | 0,34 |
> | 1550 | ADX ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+177% · −41,3%** | +47% · −10,3% | +28% | −7,1% | 2,0 | 64 d | −5,2% | +22% | 0,19 |
> | 1551 | Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+186% · −32,3%** | +47% · −7,6% | +31% | −7,1% | 3,0 | 90 d | −4,8% | +24% | 0,12 |
> | 1552 | Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+197% · −26,2%** | +49% · −6,1% | +29% | −6,0% | 3,3 | 81 d | −6,4% | +24% | 0,01 |
> | 1553 | GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+87% · −24,3%** | +36% · −7,7% | +23% | −5,9% | 2,8 | 72 d | −6,5% | +18% | −0,01 |
> | 1554 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+349% · −41,6%** | +61% · −7,8% | +34% | −6,0% | 2,8 | 64 d | −7,7% | +24% | 0,27 |
> | 1555 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+210% · −50,7%** | +44% · −10,2% | +29% | −4,2% | 3,4 | 74 d | −7,7% | +15% | 0,09 |
> | 1556 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+155% · −33,2%** | +36% · −6,3% | +26% | −7,4% | 3,2 | 107 d | −3,9% | +20% | 0,06 |
> | 1557 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+255% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 2,9 | 92 d | −4,2% | +21% | 0,14 |
> | 1558 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+283% · −45,4%** | +56% · −8,6% | +34% | −4,8% | 2,6 | 67 d | −6,6% | +27% | 0,11 |
> | 1559 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+111% · −28,2%** | +43% · −9,3% | +28% | −9,8% | 2,8 | 67 d | −6,9% | +24% | 0,00 |
> | 1560 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+237% · −38,1%** | +47% · −7,8% | +29% | −6,6% | 2,6 | 67 d | −6,5% | +21% | 0,22 |

> [!example]- Combinações 1561 a 1590 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1561 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+223% · −38,0%** | +44% · −6,8% | +28% | −4,1% | 3,4 | 122 d | −3,1% | +19% | 0,05 |
> | 1562 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+303% · −44,5%** | +57% · −8,2% | +33% | −7,1% | 3,5 | 74 d | −7,8% | +26% | 0,16 |
> | 1563 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+238% · −39,8%** | +46% · −8,3% | +29% | −8,3% | 2,5 | 72 d | −5,8% | +21% | 0,11 |
> | 1564 | GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+174% · −36,0%** | +46% · −9,3% | +28% | −9,4% | 2,8 | 67 d | −6,9% | +23% | 0,23 |
> | 1565 | GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+207% · −34,9%** | +67% · −11,1% | +37% | −6,9% | 3,7 | 65 d | −9,7% | +23% | 0,34 |
> | 1566 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+240% · −49,5%** | +51% · −11,3% | +33% | −13,1% | 2,7 | 73 d | −6,0% | +28% | 0,31 |
> | 1567 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+248% · −50,9%** | +56% · −10,4% | +36% | −9,7% | 3,5 | 73 d | −7,9% | +29% | 0,32 |
> | 1568 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+316% · −42,9%** | +58% · −7,7% | +33% | −5,2% | 3,5 | 97 d | −5,5% | +23% | 0,14 |
> | 1569 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+223% · −42,2%** | +47% · −8,8% | +31% | −6,8% | 3,6 | 83 d | −6,6% | +21% | 0,18 |
> | 1570 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+156% · −41,2%** | +37% · −8,4% | +27% | −7,8% | 2,5 | 72 d | −5,7% | +19% | 0,07 |
> | 1571 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+170% · −36,2%** | +48% · −9,2% | +28% | −6,2% | 3,8 | 83 d | −7,1% | +18% | 0,08 |
> | 1572 | VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+246% · −41,4%** | +48% · −8,3% | +31% | −7,3% | 3,7 | 100 d | −5,6% | +19% | 0,27 |
> | 1573 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+210% · −59,0%** | +47% · −12,3% | +31% | −6,3% | 3,9 | 120 d | −5,0% | +14% | 0,22 |
> | 1574 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+347% · −56,5%** | +68% · −12,1% | +41% | −8,0% | 4,2 | 70 d | −10,0% | +26% | 0,47 |
> | 1575 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+263% · −44,6%** | +62% · −12,3% | +39% | −8,1% | 3,7 | 70 d | −8,9% | +28% | 0,36 |
> | 1576 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+192% · −36,5%** | +43% · −7,6% | +28% | −7,2% | 3,7 | 120 d | −4,7% | +18% | 0,14 |
> | 1577 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+200% · −51,8%** | +46% · −11,0% | +30% | −5,6% | 3,5 | 76 d | −7,6% | +17% | 0,07 |
> | 1578 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+289% · −44,2%** | +55% · −8,9% | +32% | −5,6% | 3,0 | 76 d | −6,5% | +26% | 0,18 |
> | 1579 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+378% · −64,6%** | +76% · −15,5% | +42% | −7,4% | 4,4 | 73 d | −9,5% | +26% | 0,41 |
> | 1580 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+139% · −51,3%** | +41% · −13,8% | +29% | −4,8% | 3,6 | 76 d | −7,7% | +13% | 0,04 |
> | 1581 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+185% · −29,3%** | +40% · −5,0% | +29% | −5,2% | 2,9 | 92 d | −4,5% | +21% | 0,01 |
> | 1582 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+285% · −50,4%** | +57% · −9,3% | +35% | −5,3% | 2,8 | 67 d | −7,2% | +27% | 0,10 |
> | 1583 | Donchian ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+277% · −39,1%** | +64% · −9,7% | +37% | −8,5% | 3,7 | 70 d | −9,0% | +30% | 0,31 |
> | 1584 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+267% · −48,8%** | +55% · −9,5% | +37% | −8,2% | 3,0 | 65 d | −8,1% | +28% | 0,26 |
> | 1585 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+318% · −53,2%** | +61% · −10,6% | +36% | −6,7% | 3,6 | 72 d | −8,6% | +25% | 0,20 |
> | 1586 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+207% · −41,5%** | +45% · −8,4% | +27% | −11,2% | 2,9 | 69 d | −7,2% | +20% | 0,30 |
> | 1587 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+286% · −42,0%** | +52% · −8,5% | +33% | −3,8% | 4,4 | 92 d | −7,2% | +22% | 0,03 |
> | 1588 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+330% · −51,1%** | +64% · −10,6% | +39% | −8,7% | 3,8 | 70 d | −9,3% | +27% | 0,35 |
> | 1589 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+354% · −53,1%** | +65% · −10,2% | +37% | −7,7% | 4,1 | 70 d | −9,8% | +24% | 0,40 |
> | 1590 | ADX ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+277% · −43,3%** | +55% · −8,7% | +36% | −7,5% | 2,0 | 64 d | −5,5% | +23% | 0,23 |

> [!example]- Combinações 1591 a 1620 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1591 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+266% · −49,2%** | +58% · −10,2% | +35% | −6,5% | 3,8 | 71 d | −9,2% | +27% | 0,14 |
> | 1592 | ADX ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+328% · −47,9%** | +59% · −10,0% | +36% | −7,8% | 2,4 | 65 d | −6,4% | +24% | 0,24 |
> | 1593 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+168% · −50,3%** | +40% · −11,5% | +27% | −10,4% | 2,5 | 72 d | −6,0% | +18% | 0,13 |
> | 1594 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+184% · −34,9%** | +48% · −8,8% | +31% | −4,3% | 4,1 | 92 d | −6,9% | +19% | 0,08 |
> | 1595 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+181% · −36,5%** | +40% · −7,1% | +25% | −7,6% | 3,2 | 83 d | −6,1% | +17% | 0,12 |
> | 1596 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+193% · −41,3%** | +43% · −8,6% | +29% | −8,1% | 2,8 | 72 d | −6,6% | +25% | 0,12 |
> | 1597 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+180% · −53,5%** | +42% · −11,2% | +30% | −6,0% | 3,5 | 78 d | −7,2% | +19% | 0,08 |
> | 1598 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+264% · −39,4%** | +53% · −7,0% | +32% | −4,6% | 3,7 | 119 d | −5,0% | +22% | 0,13 |
> | 1599 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+238% · −42,3%** | +51% · −8,8% | +33% | −8,7% | 3,7 | 120 d | −4,8% | +22% | 0,20 |
> | 1600 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+298% · −42,4%** | +56% · −7,8% | +33% | −4,4% | 4,1 | 120 d | −5,4% | +21% | 0,15 |
> | 1601 | ADX ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+292% · −40,1%** | +54% · −7,3% | +35% | −5,4% | 3,6 | 122 d | −4,1% | +23% | 0,08 |
> | 1602 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+234% · −35,4%** | +57% · −9,3% | +30% | −6,3% | 3,6 | 71 d | −8,8% | +21% | 0,07 |
> | 1603 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+195% · −35,1%** | +41% · −6,8% | +28% | −8,9% | 3,2 | 107 d | −4,3% | +19% | 0,18 |
> | 1604 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+182% · −34,1%** | +39% · −6,4% | +26% | −4,1% | 2,6 | 72 d | −6,1% | +18% | −0,02 |
> | 1605 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+313% · −40,4%** | +57% · −8,4% | +33% | −7,7% | 4,4 | 94 d | −7,1% | +22% | 0,18 |
> | 1606 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+161% · −34,7%** | +45% · −8,5% | +30% | −7,3% | 2,5 | 67 d | −6,5% | +20% | 0,20 |
> | 1607 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+250% · −37,3%** | +51% · −7,3% | +33% | −7,2% | 3,3 | 88 d | −6,0% | +26% | 0,15 |
> | 1608 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+201% · −37,6%** | +45% · −7,0% | +29% | −5,7% | 2,2 | 77 d | −3,7% | +22% | 0,08 |
> | 1609 | ADX ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+276% · −56,2%** | +59% · −11,8% | +36% | −8,7% | 3,4 | 78 d | −7,2% | +29% | 0,24 |
> | 1610 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+275% · −52,2%** | +57% · −10,8% | +35% | −6,8% | 3,9 | 70 d | −9,5% | +23% | 0,22 |
> | 1611 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+286% · −43,5%** | +67% · −11,7% | +41% | −9,4% | 4,0 | 70 d | −9,8% | +27% | 0,52 |
> | 1612 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+144% · −33,0%** | +51% · −11,2% | +32% | −6,9% | 3,1 | 72 d | −7,5% | +24% | −0,05 |
> | 1613 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+288% · −44,5%** | +68% · −11,7% | +36% | −5,3% | 3,1 | 65 d | −8,4% | +28% | 0,37 |
> | 1614 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+286% · −62,8%** | +63% · −14,8% | +38% | −8,1% | 3,3 | 77 d | −7,0% | +24% | 0,33 |
> | 1615 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+115% · −43,6%** | +37% · −11,9% | +25% | −10,8% | 3,0 | 75 d | −6,7% | +14% | 0,14 |
> | 1616 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+197% · −35,0%** | +52% · −8,3% | +30% | −4,5% | 4,2 | 102 d | −6,5% | +18% | −0,02 |
> | 1617 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+279% · −51,6%** | +58% · −11,7% | +37% | −9,3% | 3,6 | 70 d | −9,0% | +23% | 0,45 |
> | 1618 | VWAP ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+177% · −34,9%** | +46% · −8,5% | +30% | −6,2% | 3,6 | 95 d | −5,9% | +17% | 0,20 |
> | 1619 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+134% · −35,4%** | +34% · −6,7% | +26% | −3,7% | 3,4 | 120 d | −4,2% | +16% | 0,02 |
> | 1620 | Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+249% · −37,6%** | +58% · −9,0% | +33% | −6,8% | 4,1 | 83 d | −7,8% | +18% | 0,26 |

> [!example]- Combinações 1621 a 1650 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1621 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+195% · −37,2%** | +41% · −7,4% | +28% | −9,7% | 3,2 | 103 d | −4,5% | +22% | 0,28 |
> | 1622 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+269% · −43,1%** | +51% · −9,2% | +32% | −9,0% | 2,6 | 65 d | −7,0% | +24% | 0,29 |
> | 1623 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+170% · −43,6%** | +41% · −9,0% | +28% | −6,3% | 3,4 | 94 d | −5,7% | +19% | 0,05 |
> | 1624 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+196% · −46,2%** | +44% · −10,1% | +30% | −12,9% | 2,5 | 72 d | −6,1% | +23% | 0,15 |
> | 1625 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+262% · −46,2%** | +51% · −10,0% | +31% | −12,8% | 2,6 | 65 d | −7,2% | +22% | 0,35 |
> | 1626 | MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+151% · −28,5%** | +35% · −4,8% | +25% | −6,9% | 2,5 | 85 d | −3,8% | +17% | 0,07 |
> | 1627 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+224% · −39,3%** | +48% · −7,9% | +32% | −9,7% | 2,8 | 72 d | −6,7% | +24% | 0,12 |
> | 1628 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+336% · −47,1%** | +60% · −10,5% | +34% | −10,1% | 3,0 | 71 d | −7,6% | +28% | 0,30 |
> | 1629 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+119% · −30,3%** | +37% · −6,5% | +26% | −3,8% | 3,0 | 80 d | −6,1% | +18% | 0,00 |
> | 1630 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+205% · −38,5%** | +51% · −9,2% | +31% | −5,8% | 3,4 | 122 d | −3,6% | +20% | 0,13 |
> | 1631 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+279% · −44,4%** | +56% · −9,3% | +34% | −7,9% | 3,3 | 65 d | −9,1% | +29% | 0,14 |
> | 1632 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+213% · −38,5%** | +54% · −9,0% | +34% | −6,2% | 2,7 | 72 d | −6,6% | +25% | 0,10 |
> | 1633 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+255% · −35,6%** | +50% · −6,4% | +28% | −3,8% | 3,2 | 105 d | −4,5% | +21% | 0,10 |
> | 1634 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+229% · −49,1%** | +49% · −10,2% | +31% | −4,2% | 4,0 | 91 d | −7,0% | +16% | 0,09 |
> | 1635 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+171% · −44,3%** | +40% · −9,5% | +27% | −9,3% | 2,6 | 72 d | −6,2% | +21% | 0,03 |
> | 1636 | GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+211% · −36,5%** | +44% · −6,8% | +28% | −7,2% | 3,0 | 76 d | −6,7% | +25% | 0,14 |
> | 1637 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+213% · −51,7%** | +47% · −11,7% | +31% | −8,7% | 2,7 | 72 d | −6,7% | +22% | 0,08 |
> | 1638 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+188% · −52,7%** | +46% · −11,2% | +31% | −11,0% | 3,1 | 73 d | −7,3% | +20% | 0,30 |
> | 1639 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+258% · −55,9%** | +57% · −11,2% | +37% | −9,7% | 2,7 | 81 d | −5,4% | +24% | 0,28 |
> | 1640 | IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+181% · −26,2%** | +45% · −5,7% | +29% | −4,8% | 2,9 | 99 d | −4,1% | +23% | 0,02 |
> | 1641 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+287% · −46,0%** | +57% · −8,8% | +34% | −4,6% | 2,6 | 67 d | −6,7% | +27% | 0,14 |
> | 1642 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+244% · −37,4%** | +48% · −7,6% | +31% | −8,3% | 3,0 | 76 d | −6,8% | +26% | 0,15 |
> | 1643 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+89% · −33,7%** | +27% · −6,5% | +21% | −3,1% | 2,9 | 91 d | −4,8% | +13% | −0,02 |
> | 1644 | IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+236% · −28,2%** | +54% · −6,4% | +33% | −7,0% | 2,9 | 92 d | −4,8% | +21% | 0,21 |
> | 1645 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+305% · −44,6%** | +57% · −9,1% | +36% | −6,4% | 3,8 | 81 d | −7,8% | +29% | 0,15 |
> | 1646 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+303% · −33,6%** | +53% · −6,1% | +32% | −6,1% | 3,4 | 82 d | −6,9% | +26% | 0,11 |
> | 1647 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL | **+203% · −35,7%** | +53% · −9,4% | +33% | −7,7% | 4,0 | 120 d | −5,4% | +17% | 0,16 |
> | 1648 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+291% · −38,9%** | +53% · −6,5% | +30% | −3,8% | 3,4 | 105 d | −5,3% | +20% | 0,06 |
> | 1649 | 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+119% · −18,1%** | +35% · −3,7% | +23% | −3,5% | 2,7 | 99 d | −3,2% | +17% | 0,03 |
> | 1650 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+207% · −39,4%** | +46% · −8,0% | +29% | −8,1% | 3,6 | 83 d | −7,1% | +21% | 0,13 |

> [!example]- Combinações 1651 a 1680 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1651 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+241% · −43,4%** | +47% · −8,5% | +29% | −5,5% | 1,9 | 67 d | −4,7% | +20% | 0,14 |
> | 1652 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+208% · −30,2%** | +53% · −7,2% | +33% | −5,6% | 3,6 | 88 d | −6,6% | +26% | 0,05 |
> | 1653 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+179% · −29,5%** | +39% · −5,9% | +27% | −3,4% | 3,4 | 106 d | −5,1% | +21% | −0,01 |
> | 1654 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+250% · −50,5%** | +53% · −10,3% | +32% | −5,1% | 4,2 | 83 d | −8,1% | +18% | 0,16 |
> | 1655 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+193% · −33,0%** | +41% · −6,0% | +28% | −4,5% | 3,4 | 106 d | −5,2% | +18% | 0,10 |
> | 1656 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+148% · −39,8%** | +43% · −10,4% | +32% | −8,9% | 3,1 | 99 d | −4,8% | +20% | 0,22 |
> | 1657 | IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+170% · −22,2%** | +45% · −5,2% | +31% | −5,9% | 2,7 | 92 d | −4,0% | +20% | 0,08 |
> | 1658 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+207% · −36,1%** | +42% · −6,8% | +26% | −5,9% | 2,4 | 72 d | −5,9% | +21% | 0,11 |
> | 1659 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+217% · −43,8%** | +58% · −11,5% | +34% | −5,4% | 3,2 | 77 d | −6,9% | +27% | 0,16 |
> | 1660 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+277% · −44,6%** | +57% · −9,4% | +34% | −9,2% | 3,9 | 83 d | −7,5% | +23% | 0,35 |
> | 1661 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+320% · −47,8%** | +62% · −10,2% | +39% | −9,7% | 3,8 | 80 d | −8,1% | +33% | 0,42 |
> | 1662 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+288% · −48,9%** | +58% · −9,3% | +35% | −5,2% | 2,7 | 67 d | −7,2% | +28% | 0,13 |
> | 1663 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+273% · −45,9%** | +63% · −10,9% | +39% | −7,3% | 4,3 | 122 d | −5,5% | +25% | 0,16 |
> | 1664 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+241% · −40,0%** | +47% · −8,3% | +29% | −8,5% | 2,4 | 72 d | −5,9% | +21% | 0,15 |
> | 1665 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+253% · −37,2%** | +48% · −7,1% | +31% | −3,7% | 3,8 | 89 d | −7,0% | +23% | 0,04 |
> | 1666 | Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+72% · −13,0%** | +30% · −3,0% | +20% | −2,4% | 2,7 | 96 d | −3,8% | +18% | −0,01 |
> | 1667 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+346% · −54,3%** | +61% · −11,2% | +34% | −5,7% | 4,2 | 97 d | −6,9% | +23% | 0,19 |
> | 1668 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+307% · −63,0%** | +64% · −14,2% | +37% | −5,7% | 3,9 | 74 d | −9,0% | +23% | 0,20 |
> | 1669 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+128% · −37,0%** | +33% · −7,3% | +24% | −6,7% | 3,4 | 120 d | −4,4% | +17% | −0,04 |
> | 1670 | GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+138% · −28,1%** | +41% · −6,6% | +28% | −6,8% | 3,3 | 81 d | −6,8% | +21% | −0,05 |
> | 1671 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+248% · −43,5%** | +51% · −8,6% | +34% | −7,0% | 2,3 | 67 d | −6,0% | +24% | 0,05 |
> | 1672 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+194% · −44,5%** | +45% · −9,6% | +30% | −11,2% | 3,4 | 95 d | −5,8% | +24% | 0,18 |
> | 1673 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+183% · −35,3%** | +40% · −6,1% | +25% | −4,2% | 3,1 | 122 d | −2,5% | +19% | 0,07 |
> | 1674 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+203% · −44,0%** | +44% · −7,9% | +29% | −6,0% | 3,5 | 122 d | −4,2% | +19% | 0,06 |
> | 1675 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+275% · −49,9%** | +56% · −10,3% | +37% | −9,4% | 2,2 | 65 d | −6,1% | +24% | 0,25 |
> | 1676 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+222% · −41,8%** | +57% · −10,3% | +34% | −8,7% | 4,7 | 102 d | −7,1% | +22% | 0,17 |
> | 1677 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+324% · −51,1%** | +61% · −9,8% | +36% | −5,5% | 3,5 | 72 d | −8,8% | +26% | 0,14 |
> | 1678 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+266% · −44,8%** | +54% · −8,9% | +33% | −6,3% | 2,6 | 67 d | −6,9% | +28% | 0,10 |
> | 1679 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+220% · −34,9%** | +46% · −7,3% | +30% | −5,9% | 3,9 | 128 d | −4,5% | +18% | 0,06 |
> | 1680 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+331% · −54,9%** | +65% · −10,9% | +39% | −8,1% | 3,1 | 60 d | −9,5% | +30% | 0,24 |

> [!example]- Combinações 1681 a 1710 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1681 | Donchian ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+280% · −44,3%** | +63% · −12,1% | +37% | −8,4% | 3,7 | 70 d | −9,6% | +25% | 0,42 |
> | 1682 | MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+58% · −13,4%** | +27% · −3,7% | +22% | −5,7% | 1,8 | 76 d | −2,7% | +20% | −0,01 |
> | 1683 | Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+199% · −28,6%** | +49% · −6,9% | +29% | −7,5% | 3,3 | 83 d | −6,5% | +22% | 0,24 |
> | 1684 | GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+263% · −39,1%** | +52% · −6,9% | +32% | −6,1% | 3,3 | 76 d | −7,5% | +27% | 0,10 |
> | 1685 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+298% · −60,5%** | +64% · −13,8% | +38% | −9,3% | 4,1 | 70 d | −10,5% | +21% | 0,40 |
> | 1686 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+288% · −42,0%** | +55% · −8,0% | +31% | −5,9% | 3,3 | 97 d | −5,5% | +24% | 0,22 |
> | 1687 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+255% · −34,2%** | +49% · −6,0% | +32% | −3,8% | 3,4 | 122 d | −4,0% | +21% | −0,02 |
> | 1688 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+209% · −58,4%** | +48% · −13,4% | +33% | −6,9% | 3,8 | 78 d | −8,3% | +15% | 0,23 |
> | 1689 | Rompe 200 ·ROM + Bollinger ·ADX | **+62% · −12,7%** | +36% · −5,4% | +21% | −4,4% | 2,9 | 96 d | −4,6% | +17% | 0,08 |
> | 1690 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+94% · −27,3%** | +30% · −6,6% | +23% | −3,2% | 2,8 | 89 d | −5,0% | +20% | −0,02 |
> | 1691 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+240% · −49,2%** | +50% · −10,8% | +32% | −7,4% | 3,3 | 72 d | −8,3% | +22% | 0,18 |
> | 1692 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+314% · −38,5%** | +57% · −7,1% | +31% | −4,4% | 2,8 | 67 d | −7,6% | +24% | 0,18 |
> | 1693 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+192% · −38,8%** | +41% · −7,1% | +26% | −4,3% | 2,4 | 87 d | −3,2% | +18% | 0,10 |
> | 1694 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+250% · −40,9%** | +47% · −8,5% | +31% | −11,0% | 3,1 | 103 d | −4,6% | +22% | 0,32 |
> | 1695 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+252% · −28,5%** | +55% · −6,6% | +32% | −4,0% | 4,2 | 92 d | −7,3% | +22% | 0,03 |
> | 1696 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+129% · −34,1%** | +33% · −6,6% | +24% | −3,3% | 2,6 | 82 d | −5,2% | +18% | −0,09 |
> | 1697 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+164% · −30,0%** | +44% · −7,7% | +29% | −4,5% | 3,6 | 101 d | −5,9% | +20% | 0,01 |
> | 1698 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+133% · −18,2%** | +32% · −2,6% | +22% | −2,4% | 2,7 | 102 d | −3,0% | +17% | 0,04 |
> | 1699 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+261% · −50,6%** | +54% · −11,5% | +35% | −11,1% | 3,2 | 70 d | −8,4% | +25% | 0,38 |
> | 1700 | Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+218% · −39,8%** | +47% · −8,2% | +31% | −7,0% | 3,3 | 83 d | −6,6% | +25% | 0,12 |
> | 1701 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+165% · −29,3%** | +37% · −5,3% | +25% | −6,4% | 3,1 | 104 d | −4,5% | +18% | 0,11 |
> | 1702 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+202% · −49,6%** | +45% · −10,2% | +31% | −6,5% | 2,6 | 67 d | −7,0% | +24% | 0,16 |
> | 1703 | Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+181% · −42,6%** | +48% · −9,4% | +31% | −5,8% | 3,7 | 83 d | −7,4% | +17% | 0,13 |
> | 1704 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+185% · −31,0%** | +40% · −5,9% | +26% | −3,8% | 2,9 | 78 d | −6,4% | +19% | 0,05 |
> | 1705 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+311% · −53,1%** | +75% · −14,3% | +43% | −7,3% | 4,5 | 70 d | −11,5% | +23% | 0,47 |
> | 1706 | VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+227% · −48,2%** | +48% · −10,4% | +30% | −8,4% | 3,0 | 67 d | −8,1% | +18% | 0,28 |
> | 1707 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+237% · −25,9%** | +44% · −4,1% | +27% | −3,4% | 3,4 | 92 d | −6,1% | +22% | 0,01 |
> | 1708 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+184% · −31,8%** | +39% · −5,9% | +25% | −3,8% | 3,3 | 122 d | −3,7% | +17% | 0,05 |
> | 1709 | ADX ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+218% · −54,6%** | +60% · −15,3% | +35% | −7,8% | 3,0 | 67 d | −8,3% | +23% | 0,25 |
> | 1710 | GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+217% · −44,6%** | +49% · −8,9% | +33% | −9,0% | 3,2 | 76 d | −7,5% | +29% | 0,27 |

> [!example]- Combinações 1711 a 1740 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1711 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+256% · −51,6%** | +58% · −11,8% | +35% | −12,9% | 3,6 | 70 d | −9,4% | +23% | 0,40 |
> | 1712 | ADX ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+254% · −39,2%** | +60% · −9,8% | +35% | −7,2% | 2,5 | 74 d | −5,9% | +23% | 0,24 |
> | 1713 | Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+259% · −40,7%** | +61% · −9,9% | +38% | −7,8% | 4,4 | 90 d | −8,0% | +20% | 0,38 |
> | 1714 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+228% · −41,0%** | +49% · −8,0% | +32% | −6,9% | 2,2 | 77 d | −4,5% | +22% | 0,10 |
> | 1715 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+221% · −53,2%** | +48% · −11,0% | +33% | −7,5% | 3,5 | 83 d | −7,0% | +22% | 0,22 |
> | 1716 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+250% · −47,7%** | +53% · −10,3% | +33% | −7,6% | 3,0 | 67 d | −8,3% | +21% | 0,13 |
> | 1717 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+266% · −62,7%** | +58% · −15,1% | +36% | −6,0% | 4,0 | 74 d | −9,4% | +18% | 0,26 |
> | 1718 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+198% · −48,1%** | +46% · −10,5% | +29% | −8,2% | 3,9 | 102 d | −6,4% | +16% | 0,05 |
> | 1719 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+233% · −38,3%** | +48% · −7,3% | +29% | −5,8% | 3,5 | 75 d | −8,3% | +23% | −0,00 |
> | 1720 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+213% · −49,2%** | +44% · −9,6% | +29% | −4,3% | 3,3 | 74 d | −8,0% | +16% | 0,07 |
> | 1721 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+157% · −32,5%** | +36% · −6,1% | +26% | −7,4% | 3,0 | 107 d | −4,1% | +20% | 0,12 |
> | 1722 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+258% · −34,7%** | +50% · −6,6% | +28% | −3,5% | 3,2 | 105 d | −4,8% | +21% | 0,07 |
> | 1723 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+261% · −42,5%** | +53% · −9,0% | +32% | −9,2% | 3,2 | 71 d | −8,4% | +27% | 0,16 |
> | 1724 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+299% · −61,3%** | +64% · −13,2% | +39% | −10,0% | 3,4 | 74 d | −8,2% | +29% | 0,34 |
> | 1725 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+236% · −48,8%** | +48% · −9,4% | +32% | −6,3% | 3,6 | 122 d | −4,6% | +24% | 0,08 |
> | 1726 | Pullback ·PUL | **+32% · −9,1%** | +32% · −9,1% | +25% | −4,6% | 5,6 | 137 d | −5,5% | +11% | — |
> | 1727 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+202% · −50,4%** | +47% · −10,5% | +30% | −5,6% | 3,4 | 76 d | −8,0% | +18% | 0,05 |
> | 1728 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+233% · −43,1%** | +50% · −8,2% | +30% | −4,8% | 2,6 | 72 d | −6,7% | +24% | 0,10 |
> | 1729 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+213% · −40,2%** | +58% · −10,7% | +34% | −8,3% | 3,5 | 74 d | −8,6% | +27% | 0,17 |
> | 1730 | IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+168% · −23,3%** | +44% · −5,2% | +31% | −5,9% | 2,6 | 92 d | −4,0% | +21% | −0,04 |
> | 1731 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+186% · −31,9%** | +40% · −5,8% | +26% | −4,2% | 2,4 | 72 d | −6,1% | +19% | −0,00 |
> | 1732 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+351% · −53,2%** | +65% · −10,6% | +38% | −6,6% | 4,3 | 119 d | −6,2% | +26% | 0,22 |
> | 1733 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+350% · −50,5%** | +64% · −9,8% | +34% | −4,7% | 3,6 | 94 d | −6,5% | +22% | 0,19 |
> | 1734 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+218% · −35,5%** | +43% · −7,0% | +28% | −8,4% | 3,1 | 103 d | −4,9% | +22% | 0,23 |
> | 1735 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+176% · −45,8%** | +41% · −9,7% | +28% | −5,2% | 2,6 | 72 d | −6,6% | +19% | 0,10 |
> | 1736 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+156% · −27,7%** | +36% · −4,9% | +26% | −6,5% | 3,0 | 107 d | −4,3% | +17% | 0,01 |
> | 1737 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+168% · −37,1%** | +46% · −9,5% | +28% | −10,2% | 2,8 | 67 d | −7,8% | +17% | 0,18 |
> | 1738 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+227% · −43,4%** | +51% · −9,2% | +32% | −9,4% | 3,1 | 74 d | −7,5% | +29% | 0,15 |
> | 1739 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+389% · −63,7%** | +73% · −14,2% | +39% | −6,6% | 3,5 | 70 d | −9,4% | +24% | 0,36 |
> | 1740 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+212% · −52,4%** | +46% · −10,2% | +31% | −4,9% | 4,2 | 128 d | −5,3% | +16% | 0,10 |

> [!example]- Combinações 1741 a 1770 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1741 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+156% · −46,1%** | +46% · −12,2% | +31% | −8,3% | 3,2 | 75 d | −7,6% | +18% | 0,08 |
> | 1742 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+258% · −32,9%** | +49% · −5,9% | +31% | −3,7% | 3,4 | 122 d | −4,3% | +20% | −0,01 |
> | 1743 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+248% · −39,7%** | +51% · −8,1% | +33% | −8,0% | 3,0 | 91 d | −5,6% | +28% | 0,31 |
> | 1744 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+305% · −53,8%** | +60% · −12,2% | +36% | −6,3% | 3,9 | 83 d | −7,9% | +22% | 0,27 |
> | 1745 | GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+169% · −32,1%** | +60% · −11,1% | +37% | −10,7% | 3,3 | 67 d | −9,3% | +31% | 0,29 |
> | 1746 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+187% · −42,4%** | +45% · −9,1% | +30% | −10,1% | 2,9 | 75 d | −7,0% | +25% | 0,07 |
> | 1747 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+185% · −44,3%** | +45% · −9,6% | +30% | −11,4% | 2,7 | 67 d | −7,6% | +26% | 0,26 |
> | 1748 | 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+169% · −29,2%** | +45% · −6,6% | +32% | −6,9% | 2,9 | 92 d | −5,1% | +22% | −0,03 |
> | 1749 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+220% · −52,7%** | +59% · −14,0% | +35% | −6,8% | 3,2 | 76 d | −7,6% | +25% | 0,15 |
> | 1750 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+244% · −42,3%** | +48% · −8,1% | +29% | −5,1% | 1,8 | 67 d | −4,8% | +19% | 0,16 |
> | 1751 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+277% · −56,6%** | +59% · −11,5% | +37% | −7,4% | 3,4 | 76 d | −8,0% | +30% | 0,18 |
> | 1752 | IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+114% · −23,4%** | +43% · −7,1% | +30% | −7,7% | 2,5 | 84 d | −4,5% | +26% | 0,23 |
> | 1753 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+378% · −45,4%** | +65% · −9,2% | +36% | −6,3% | 3,6 | 97 d | −6,3% | +24% | 0,34 |
> | 1754 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+233% · −54,8%** | +52% · −12,0% | +34% | −9,0% | 2,8 | 65 d | −8,1% | +21% | 0,29 |
> | 1755 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+234% · −49,5%** | +48% · −9,6% | +32% | −7,6% | 3,3 | 122 d | −4,0% | +23% | 0,12 |
> | 1756 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+232% · −38,8%** | +48% · −7,8% | +29% | −10,0% | 3,2 | 83 d | −6,7% | +21% | 0,21 |
> | 1757 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+130% · −42,5%** | +35% · −8,8% | +25% | −11,5% | 2,4 | 73 d | −5,9% | +19% | 0,10 |
> | 1758 | MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+109% · −25,9%** | +34% · −5,9% | +27% | −8,3% | 2,8 | 94 d | −4,7% | +24% | 0,11 |
> | 1759 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+243% · −54,5%** | +53% · −10,5% | +35% | −8,6% | 2,2 | 65 d | −6,5% | +24% | 0,29 |
> | 1760 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+294% · −37,3%** | +53% · −6,6% | +30% | −3,6% | 3,4 | 106 d | −5,6% | +19% | 0,03 |
> | 1761 | Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+115% · −26,6%** | +44% · −8,3% | +32% | −8,8% | 2,9 | 92 d | −5,0% | +26% | −0,04 |
> | 1762 | VWAP ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+219% · −38,1%** | +45% · −7,2% | +31% | −8,2% | 3,0 | 91 d | −5,6% | +25% | 0,22 |
> | 1763 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+232% · −42,2%** | +48% · −8,4% | +30% | −7,4% | 3,0 | 73 d | −7,6% | +20% | 0,18 |
> | 1764 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+190% · −45,2%** | +43% · −8,8% | +29% | −5,2% | 3,5 | 89 d | −6,7% | +18% | 0,09 |
> | 1765 | GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+194% · −39,7%** | +65% · −14,0% | +40% | −6,8% | 3,1 | 67 d | −8,7% | +28% | 0,21 |
> | 1766 | Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+311% · −48,9%** | +71% · −11,9% | +38% | −6,3% | 4,2 | 70 d | −11,4% | +21% | 0,37 |
> | 1767 | ADX ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+192% · −47,9%** | +52% · −12,1% | +34% | −9,8% | 2,8 | 80 d | −6,1% | +26% | 0,21 |
> | 1768 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL | **+128% · −38,7%** | +48% · −13,2% | +32% | −5,2% | 3,8 | 78 d | −8,5% | +15% | 0,07 |
> | 1769 | VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+154% · −49,5%** | +47% · −14,0% | +31% | −9,9% | 3,0 | 67 d | −8,3% | +16% | 0,26 |
> | 1770 | ADX ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+247% · −46,5%** | +52% · −9,5% | +34% | −8,2% | 2,2 | 67 d | −6,1% | +25% | 0,16 |

> [!example]- Combinações 1771 a 1800 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1771 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+248% · −49,6%** | +58% · −11,2% | +35% | −11,7% | 3,3 | 70 d | −9,0% | +28% | 0,33 |
> | 1772 | GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+130% · −26,9%** | +47% · −8,6% | +26% | −6,0% | 2,8 | 72 d | −7,3% | +21% | 0,04 |
> | 1773 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+358% · −62,2%** | +72% · −13,5% | +40% | −6,3% | 3,2 | 65 d | −9,5% | +27% | 0,29 |
> | 1774 | Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+207% · −32,9%** | +53% · −8,1% | +33% | −7,1% | 3,2 | 91 d | −6,1% | +29% | 0,29 |
> | 1775 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+192% · −32,8%** | +43% · −6,4% | +28% | −6,4% | 3,5 | 120 d | −5,1% | +18% | 0,05 |
> | 1776 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+224% · −43,3%** | +51% · −9,1% | +32% | −9,4% | 3,2 | 74 d | −8,0% | +30% | 0,12 |
> | 1777 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+316% · −49,4%** | +64% · −10,4% | +39% | −7,7% | 3,3 | 71 d | −9,0% | +32% | 0,29 |
> | 1778 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+266% · −42,4%** | +60% · −11,2% | +38% | −5,1% | 4,7 | 89 d | −8,5% | +22% | 0,08 |
> | 1779 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+305% · −41,4%** | +55% · −8,5% | +31% | −6,8% | 3,2 | 83 d | −6,7% | +24% | 0,08 |
> | 1780 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+189% · −35,8%** | +50% · −9,1% | +33% | −8,0% | 3,1 | 83 d | −6,4% | +26% | 0,19 |
> | 1781 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+282% · −47,1%** | +57% · −9,2% | +34% | −5,5% | 2,5 | 67 d | −7,2% | +28% | 0,24 |
> | 1782 | Donchian ·ADX + IFR ·ADX + Tendência ·ADX | **+244% · −38,7%** | +76% · −12,6% | +45% | −9,0% | 4,3 | 70 d | −11,8% | +23% | 0,52 |
> | 1783 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+198% · −35,0%** | +49% · −8,4% | +30% | −4,4% | 3,6 | 78 d | −8,2% | +17% | 0,13 |
> | 1784 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+237% · −48,6%** | +61% · −12,6% | +36% | −5,3% | 4,0 | 70 d | −10,9% | +20% | 0,16 |
> | 1785 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+141% · −49,7%** | +42% · −13,1% | +29% | −4,8% | 3,4 | 76 d | −8,2% | +14% | 0,03 |
> | 1786 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+215% · −42,5%** | +54% · −11,6% | +32% | −11,3% | 3,0 | 73 d | −7,7% | +22% | 0,33 |
> | 1787 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+237% · −40,6%** | +61% · −9,7% | +35% | −7,6% | 4,2 | 83 d | −8,5% | +20% | 0,37 |
> | 1788 | VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+252% · −48,0%** | +51% · −10,1% | +31% | −7,0% | 3,6 | 83 d | −7,5% | +17% | 0,30 |
> | 1789 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+330% · −46,3%** | +61% · −8,7% | +36% | −5,6% | 3,8 | 120 d | −5,7% | +23% | 0,18 |
> | 1790 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+279% · −50,5%** | +55% · −11,4% | +34% | −9,7% | 3,2 | 70 d | −8,9% | +22% | 0,43 |
> | 1791 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX | **+191% · −34,2%** | +49% · −8,4% | +29% | −8,6% | 3,8 | 99 d | −6,8% | +16% | 0,18 |
> | 1792 | GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+266% · −39,8%** | +52% · −7,0% | +32% | −6,1% | 3,1 | 76 d | −7,6% | +26% | 0,14 |
> | 1793 | Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+326% · −49,3%** | +61% · −9,7% | +34% | −5,9% | 4,3 | 83 d | −8,6% | +19% | 0,30 |
> | 1794 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+247% · −54,2%** | +53% · −12,6% | +32% | −10,8% | 3,2 | 65 d | −9,4% | +20% | 0,16 |
> | 1795 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+176% · −55,7%** | +42% · −12,1% | +30% | −7,2% | 3,3 | 78 d | −7,7% | +16% | 0,18 |
> | 1796 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+263% · −42,6%** | +66% · −11,4% | +38% | −10,7% | 3,7 | 70 d | −10,3% | +27% | 0,44 |
> | 1797 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+227% · −46,5%** | +48% · −8,3% | +32% | −7,2% | 3,3 | 122 d | −4,2% | +25% | 0,05 |
> | 1798 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+147% · −32,9%** | +35% · −6,2% | +24% | −9,5% | 2,9 | 109 d | −4,0% | +18% | 0,17 |
> | 1799 | Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+129% · −20,0%** | +37% · −4,4% | +25% | −4,6% | 3,0 | 98 d | −5,3% | +22% | −0,02 |
> | 1800 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+192% · −33,8%** | +64% · −10,7% | +38% | −6,0% | 2,2 | 65 d | −6,6% | +23% | 0,19 |

> [!example]- Combinações 1801 a 1830 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1801 | MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+154% · −28,6%** | +35% · −4,8% | +25% | −6,9% | 2,3 | 87 d | −3,8% | +17% | 0,09 |
> | 1802 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+246% · −40,3%** | +51% · −7,6% | +33% | −6,2% | 2,8 | 72 d | −7,5% | +25% | 0,12 |
> | 1803 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+217% · −33,4%** | +43% · −6,4% | +28% | −7,5% | 3,2 | 107 d | −5,0% | +20% | 0,10 |
> | 1804 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+232% · −44,3%** | +47% · −9,4% | +29% | −10,3% | 2,5 | 72 d | −6,5% | +21% | 0,17 |
> | 1805 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+142% · −27,7%** | +40% · −6,5% | +28% | −8,5% | 3,1 | 107 d | −4,8% | +19% | −0,01 |
> | 1806 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+236% · −46,4%** | +47% · −8,7% | +30% | −4,8% | 2,6 | 67 d | −7,4% | +20% | 0,10 |
> | 1807 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+225% · −34,3%** | +54% · −8,3% | +31% | −4,2% | 2,6 | 107 d | −3,2% | +19% | 0,14 |
> | 1808 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+263% · −42,1%** | +49% · −8,7% | +30% | −8,8% | 3,5 | 84 d | −7,2% | +20% | 0,16 |
> | 1809 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+201% · −27,3%** | +49% · −7,1% | +29% | −6,3% | 3,2 | 92 d | −6,0% | +23% | 0,13 |
> | 1810 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+83% · −17,6%** | +34% · −5,3% | +25% | −2,5% | 2,5 | 72 d | −6,5% | +20% | −0,12 |
> | 1811 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+283% · −51,2%** | +58% · −10,1% | +35% | −6,6% | 2,7 | 67 d | −7,7% | +26% | 0,21 |
> | 1812 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+208% · −40,0%** | +45% · −8,1% | +32% | −7,8% | 2,9 | 98 d | −5,1% | +23% | 0,24 |
> | 1813 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+230% · −41,0%** | +49% · −8,0% | +32% | −6,9% | 2,1 | 81 d | −4,0% | +21% | 0,13 |
> | 1814 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+215% · −49,0%** | +47% · −10,0% | +31% | −4,9% | 4,2 | 129 d | −5,3% | +17% | 0,12 |
> | 1815 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+200% · −33,4%** | +42% · −6,2% | +28% | −6,7% | 2,7 | 72 d | −7,2% | +24% | 0,07 |
> | 1816 | Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+243% · −36,1%** | +48% · −7,1% | +30% | −8,2% | 3,0 | 83 d | −6,2% | +27% | 0,24 |
> | 1817 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+183% · −49,3%** | +50% · −12,8% | +34% | −6,7% | 3,7 | 83 d | −7,9% | +18% | 0,17 |
> | 1818 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+140% · −39,8%** | +43% · −10,4% | +29% | −13,5% | 2,9 | 78 d | −6,8% | +20% | 0,16 |
> | 1819 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+267% · −47,4%** | +51% · −8,8% | +32% | −5,8% | 3,5 | 78 d | −8,2% | +20% | 0,19 |
> | 1820 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+194% · −47,2%** | +44% · −10,2% | +30% | −9,0% | 2,7 | 78 d | −6,3% | +18% | 0,12 |
> | 1821 | IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+152% · −27,8%** | +42% · −6,2% | +31% | −7,2% | 2,3 | 83 d | −4,3% | +24% | 0,06 |
> | 1822 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+367% · −48,9%** | +64% · −9,9% | +36% | −5,5% | 2,7 | 67 d | −7,7% | +29% | 0,29 |
> | 1823 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+348% · −54,7%** | +67% · −11,5% | +38% | −4,9% | 4,5 | 120 d | −6,6% | +24% | 0,21 |
> | 1824 | MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+139% · −25,7%** | +48% · −8,2% | +30% | −10,3% | 2,2 | 77 d | −4,8% | +16% | 0,31 |
> | 1825 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+211% · −43,3%** | +54% · −11,8% | +35% | −7,5% | 3,7 | 81 d | −8,2% | +24% | 0,26 |
> | 1826 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+162% · −37,7%** | +36% · −7,7% | +25% | −8,7% | 2,8 | 105 d | −4,2% | +18% | 0,14 |
> | 1827 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+216% · −50,1%** | +47% · −11,2% | +31% | −8,9% | 2,6 | 73 d | −6,8% | +23% | 0,15 |
> | 1828 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+225% · −39,1%** | +47% · −7,4% | +27% | −3,6% | 2,5 | 67 d | −7,0% | +23% | 0,09 |
> | 1829 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+290% · −49,3%** | +70% · −13,6% | +40% | −7,1% | 3,8 | 70 d | −10,7% | +25% | 0,31 |
> | 1830 | Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+234% · −44,8%** | +57% · −12,1% | +35% | −6,6% | 4,0 | 83 d | −8,4% | +22% | 0,23 |

> [!example]- Combinações 1831 a 1860 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1831 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+176% · −35,6%** | +41% · −7,0% | +28% | −7,5% | 2,5 | 83 d | −5,2% | +25% | 0,09 |
> | 1832 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+201% · −34,1%** | +44% · −6,8% | +29% | −5,0% | 2,1 | 81 d | −4,0% | +19% | 0,02 |
> | 1833 | GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+140% · −28,9%** | +41% · −6,7% | +28% | −6,6% | 3,1 | 81 d | −7,0% | +20% | −0,03 |
> | 1834 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+168% · −32,4%** | +44% · −7,5% | +27% | −4,9% | 3,2 | 122 d | −4,1% | +18% | 0,08 |
> | 1835 | Pôr do sol ·POR + Pullback ·PUL | **+40% · −8,6%** | +26% · −3,7% | +21% | −3,0% | 3,7 | 160 d | −3,7% | +16% | −0,13 |
> | 1836 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+254% · −45,0%** | +50% · −9,0% | +31% | −5,8% | 3,5 | 81 d | −7,9% | +18% | 0,18 |
> | 1837 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+186% · −47,7%** | +50% · −12,2% | +34% | −6,8% | 3,7 | 80 d | −8,4% | +19% | 0,19 |
> | 1838 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+268% · −43,2%** | +56% · −8,4% | +36% | −9,1% | 2,8 | 67 d | −8,0% | +26% | 0,29 |
> | 1839 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+235% · −55,7%** | +54% · −12,0% | +33% | −8,2% | 3,7 | 75 d | −9,2% | +19% | 0,21 |
> | 1840 | Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+160% · −33,2%** | +45% · −8,0% | +29% | −6,6% | 3,0 | 83 d | −6,4% | +24% | 0,17 |
> | 1841 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+205% · −36,1%** | +44% · −7,1% | +30% | −6,1% | 2,9 | 91 d | −5,7% | +23% | 0,07 |
> | 1842 | ADX ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+290% · −53,5%** | +69% · −13,8% | +38% | −7,3% | 3,0 | 65 d | −9,1% | +26% | 0,36 |
> | 1843 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+265% · −41,0%** | +50% · −8,0% | +31% | −7,6% | 2,7 | 72 d | −7,2% | +24% | 0,12 |
> | 1844 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+96% · −31,4%** | +28% · −5,8% | +23% | −8,5% | 2,8 | 120 d | −2,9% | +17% | 0,04 |
> | 1845 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+239% · −42,0%** | +47% · −8,9% | +29% | −9,4% | 2,4 | 72 d | −6,4% | +22% | 0,23 |
> | 1846 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+234% · −41,3%** | +49% · −7,9% | +30% | −4,5% | 2,7 | 77 d | −6,4% | +25% | −0,01 |
> | 1847 | GPS médias ·ADX + Tendência ·ADX | **+137% · −37,9%** | +72% · −19,5% | +43% | −9,3% | 3,9 | 67 d | −11,6% | +22% | 0,38 |
> | 1848 | VWAP ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+230% · −38,0%** | +55% · −9,6% | +35% | −8,0% | 3,7 | 100 d | −6,6% | +22% | 0,33 |
> | 1849 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+234% · −38,8%** | +47% · −7,1% | +31% | −5,6% | 3,0 | 122 d | −3,4% | +23% | 0,11 |
> | 1850 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+169% · −32,8%** | +46% · −7,8% | +32% | −7,1% | 3,2 | 98 d | −5,8% | +21% | 0,15 |
> | 1851 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+267% · −53,6%** | +53% · −12,3% | +34% | −7,1% | 4,1 | 87 d | −8,2% | +20% | 0,17 |
> | 1852 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+205% · −42,2%** | +44% · −7,3% | +29% | −5,6% | 3,4 | 122 d | −4,7% | +20% | 0,04 |
> | 1853 | 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+236% · −34,7%** | +55% · −8,4% | +35% | −7,8% | 2,9 | 92 d | −5,4% | +22% | 0,23 |
> | 1854 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+227% · −51,7%** | +49% · −11,2% | +31% | −4,9% | 4,0 | 91 d | −7,9% | +14% | 0,22 |
> | 1855 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+217% · −48,4%** | +48% · −9,0% | +32% | −7,3% | 2,2 | 67 d | −6,4% | +23% | 0,19 |
> | 1856 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+291% · −47,0%** | +62% · −10,2% | +37% | −10,4% | 3,7 | 80 d | −8,5% | +33% | 0,37 |
> | 1857 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+251% · −43,4%** | +52% · −8,5% | +34% | −7,0% | 2,2 | 67 d | −6,3% | +24% | 0,11 |
> | 1858 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+115% · −34,6%** | +31% · −6,3% | +24% | −4,4% | 2,8 | 91 d | −5,4% | +17% | −0,04 |
> | 1859 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+267% · −38,2%** | +53% · −6,8% | +31% | −4,3% | 3,6 | 122 d | −5,1% | +22% | 0,12 |
> | 1860 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+156% · −34,1%** | +38% · −6,6% | +27% | −7,7% | 2,5 | 76 d | −6,1% | +20% | −0,01 |

> [!example]- Combinações 1861 a 1890 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1861 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+270% · −42,5%** | +54% · −8,3% | +31% | −7,4% | 3,0 | 74 d | −7,9% | +28% | 0,08 |
> | 1862 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+139% · −31,8%** | +35% · −5,9% | +26% | −8,8% | 2,7 | 98 d | −4,6% | +19% | 0,14 |
> | 1863 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+143% · −32,4%** | +40% · −8,0% | +29% | −9,6% | 2,9 | 107 d | −4,6% | +22% | 0,20 |
> | 1864 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+302% · −63,6%** | +65% · −15,2% | +37% | −7,0% | 3,7 | 78 d | −8,7% | +22% | 0,30 |
> | 1865 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+161% · −30,8%** | +36% · −5,6% | +25% | −7,2% | 2,8 | 106 d | −4,4% | +18% | 0,03 |
> | 1866 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+205% · −40,0%** | +43% · −7,4% | +26% | −4,1% | 1,9 | 75 d | −4,4% | +20% | 0,09 |
> | 1867 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+256% · −53,5%** | +53% · −9,9% | +35% | −8,9% | 3,1 | 122 d | −4,0% | +27% | 0,17 |
> | 1868 | GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+165% · −34,5%** | +47% · −8,6% | +32% | −9,8% | 3,0 | 76 d | −7,7% | +25% | 0,12 |
> | 1869 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+200% · −43,1%** | +53% · −11,8% | +34% | −12,5% | 2,6 | 67 d | −7,6% | +25% | 0,26 |
> | 1870 | GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+291% · −43,8%** | +57% · −8,9% | +35% | −8,5% | 3,1 | 74 d | −8,1% | +28% | 0,32 |
> | 1871 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+186% · −55,5%** | +43% · −10,9% | +29% | −6,2% | 3,2 | 83 d | −7,1% | +16% | 0,14 |
> | 1872 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+263% · −36,6%** | +61% · −8,3% | +33% | −5,7% | 4,3 | 94 d | −8,1% | +19% | 0,13 |
> | 1873 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+233% · −57,3%** | +54% · −12,4% | +33% | −8,2% | 3,5 | 70 d | −10,0% | +18% | 0,18 |
> | 1874 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+206% · −37,2%** | +43% · −6,5% | +26% | −3,1% | 1,8 | 75 d | −4,4% | +18% | 0,08 |
> | 1875 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Bollinger ·ADX | **+327% · −40,5%** | +72% · −10,5% | +38% | −5,4% | 3,8 | 97 d | −7,0% | +24% | 0,30 |
> | 1876 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+205% · −40,2%** | +45% · −7,9% | +32% | −7,9% | 2,8 | 92 d | −5,5% | +24% | 0,17 |
> | 1877 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+161% · −34,6%** | +45% · −8,8% | +30% | −9,6% | 2,4 | 72 d | −6,4% | +22% | 0,02 |
> | 1878 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+212% · −30,2%** | +53% · −8,0% | +33% | −6,5% | 3,4 | 102 d | −6,2% | +24% | 0,20 |
> | 1879 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+310% · −55,7%** | +62% · −11,0% | +38% | −7,6% | 2,7 | 67 d | −8,0% | +31% | 0,28 |
> | 1880 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+158% · −37,8%** | +37% · −7,7% | +24% | −8,0% | 2,4 | 75 d | −6,0% | +19% | 0,05 |
> | 1881 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+311% · −48,8%** | +61% · −9,6% | +37% | −7,7% | 2,5 | 67 d | −7,4% | +30% | 0,28 |
> | 1882 | Donchian ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+282% · −41,4%** | +68% · −10,6% | +41% | −9,5% | 4,0 | 80 d | −9,4% | +32% | 0,40 |
> | 1883 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+123% · −35,2%** | +37% · −8,7% | +28% | −5,1% | 3,3 | 120 d | −5,0% | +16% | 0,05 |
> | 1884 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+168% · −36,9%** | +48% · −9,4% | +28% | −6,3% | 3,8 | 87 d | −7,9% | +17% | 0,09 |
> | 1885 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+136% · −30,5%** | +39% · −7,3% | +25% | −3,2% | 3,3 | 106 d | −5,7% | +15% | 0,01 |
> | 1886 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+220% · −42,4%** | +58% · −10,9% | +34% | −4,5% | 3,0 | 80 d | −7,1% | +26% | 0,14 |
> | 1887 | IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+215% · −33,3%** | +51% · −8,0% | +33% | −8,2% | 2,8 | 101 d | −4,9% | +24% | 0,29 |
> | 1888 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+239% · −47,6%** | +48% · −8,8% | +32% | −6,4% | 3,4 | 122 d | −5,0% | +24% | 0,07 |
> | 1889 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+175% · −33,3%** | +40% · −6,2% | +27% | −4,9% | 2,8 | 91 d | −5,7% | +23% | 0,06 |
> | 1890 | Donchian ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+322% · −45,4%** | +59% · −9,5% | +36% | −8,9% | 3,6 | 83 d | −7,9% | +31% | 0,36 |

> [!example]- Combinações 1891 a 1920 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1891 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+235% · −36,6%** | +47% · −6,4% | +31% | −4,4% | 3,1 | 122 d | −4,0% | +21% | 0,05 |
> | 1892 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX | **+223% · −47,9%** | +62% · −12,5% | +36% | −12,3% | 3,7 | 70 d | −10,9% | +20% | 0,37 |
> | 1893 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+273% · −40,0%** | +53% · −7,9% | +34% | −6,3% | 3,3 | 81 d | −7,7% | +30% | 0,07 |
> | 1894 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+234% · −38,5%** | +46% · −7,7% | +28% | −9,2% | 2,7 | 72 d | −7,4% | +19% | 0,16 |
> | 1895 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+213% · −39,7%** | +48% · −8,1% | +31% | −8,6% | 3,2 | 102 d | −5,6% | +20% | 0,16 |
> | 1896 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+340% · −65,2%** | +68% · −14,9% | +39% | −5,9% | 4,4 | 120 d | −6,8% | +22% | 0,23 |
> | 1897 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+167% · −29,2%** | +37% · −5,3% | +25% | −6,4% | 2,9 | 106 d | −4,8% | +19% | 0,12 |
> | 1898 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+198% · −54,3%** | +47% · −11,9% | +30% | −6,5% | 3,3 | 76 d | −8,5% | +15% | 0,21 |
> | 1899 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+181% · −35,1%** | +47% · −8,8% | +30% | −11,3% | 3,1 | 107 d | −5,3% | +20% | 0,37 |
> | 1900 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+184% · −39,3%** | +40% · −7,9% | +26% | −5,7% | 2,4 | 72 d | −6,6% | +17% | 0,09 |
> | 1901 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+212% · −55,6%** | +48% · −13,2% | +31% | −9,8% | 2,6 | 72 d | −7,2% | +21% | 0,24 |
> | 1902 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+158% · −37,5%** | +46% · −9,8% | +29% | −10,2% | 3,2 | 95 d | −6,3% | +21% | 0,09 |
> | 1903 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+296% · −42,3%** | +58% · −8,3% | +34% | −5,5% | 3,4 | 119 d | −5,5% | +22% | 0,18 |
> | 1904 | BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+209% · −51,4%** | +44% · −10,4% | +29% | −5,5% | 3,2 | 74 d | −8,6% | +14% | 0,17 |
> | 1905 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+311% · −47,2%** | +57% · −9,7% | +32% | −4,9% | 2,6 | 72 d | −7,2% | +26% | 0,14 |
> | 1906 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+202% · −41,3%** | +47% · −8,8% | +29% | −7,9% | 3,1 | 79 d | −7,4% | +26% | 0,11 |
> | 1907 | VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+126% · −38,4%** | +39% · −10,1% | +29% | −10,4% | 2,3 | 73 d | −6,0% | +20% | 0,30 |
> | 1908 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+294% · −56,7%** | +57% · −12,1% | +35% | −6,3% | 4,3 | 128 d | −6,0% | +19% | 0,17 |
> | 1909 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+154% · −39,6%** | +38% · −8,0% | +27% | −10,5% | 3,2 | 118 d | −5,1% | +20% | 0,05 |
> | 1910 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+196% · −38,3%** | +41% · −7,6% | +28% | −10,9% | 2,7 | 107 d | −3,9% | +20% | 0,19 |
> | 1911 | Donchian ·ADX + Bollinger ·ADX + Tendência ·ADX | **+233% · −38,5%** | +71% · −13,0% | +39% | −7,6% | 3,9 | 70 d | −11,5% | +21% | 0,35 |
> | 1912 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+119% · −14,7%** | +34% · −2,6% | +23% | −2,3% | 2,5 | 102 d | −3,4% | +16% | 0,03 |
> | 1913 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+319% · −44,9%** | +61% · −8,5% | +37% | −5,7% | 3,8 | 122 d | −5,7% | +24% | 0,16 |
> | 1914 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+187% · −38,1%** | +50% · −10,0% | +34% | −10,4% | 2,5 | 72 d | −7,0% | +25% | 0,27 |
> | 1915 | GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+182% · −38,1%** | +51% · −8,9% | +33% | −7,1% | 3,3 | 76 d | −8,5% | +24% | 0,04 |
> | 1916 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+216% · −45,9%** | +58% · −12,3% | +34% | −5,8% | 3,0 | 76 d | −7,6% | +25% | 0,29 |
> | 1917 | 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+83% · −27,6%** | +34% · −9,2% | +25% | −4,7% | 2,9 | 89 d | −6,0% | +19% | −0,01 |
> | 1918 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+142% · −26,9%** | +41% · −6,7% | +27% | −6,2% | 3,1 | 109 d | −5,3% | +21% | 0,10 |
> | 1919 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+202% · −45,1%** | +45% · −9,5% | +32% | −9,5% | 2,9 | 94 d | −5,7% | +26% | 0,16 |
> | 1920 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+232% · −47,6%** | +49% · −9,7% | +31% | −4,1% | 4,0 | 99 d | −7,4% | +17% | 0,08 |

> [!example]- Combinações 1921 a 1950 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1921 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+169% · −39,9%** | +47% · −10,2% | +33% | −12,4% | 2,3 | 73 d | −6,2% | +26% | 0,35 |
> | 1922 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+200% · −32,5%** | +43% · −6,3% | +28% | −4,4% | 3,0 | 122 d | −3,9% | +21% | 0,06 |
> | 1923 | ADX ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+185% · −37,5%** | +51% · −9,2% | +33% | −7,5% | 2,1 | 76 d | −5,2% | +24% | 0,18 |
> | 1924 | Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+200% · −26,5%** | +50% · −6,6% | +29% | −5,9% | 3,0 | 91 d | −6,3% | +23% | 0,05 |
> | 1925 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+236% · −52,5%** | +51% · −12,0% | +34% | −8,2% | 3,9 | 120 d | −6,3% | +19% | 0,29 |
> | 1926 | GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+241% · −45,3%** | +51% · −9,6% | +33% | −7,6% | 2,8 | 72 d | −7,9% | +26% | 0,22 |
> | 1927 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+223% · −51,2%** | +59% · −13,5% | +35% | −6,3% | 3,1 | 77 d | −7,8% | +26% | 0,14 |
> | 1928 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+156% · −39,8%** | +37% · −8,3% | +24% | −8,9% | 2,3 | 72 d | −6,5% | +17% | 0,12 |
> | 1929 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+235% · −45,3%** | +50% · −9,9% | +29% | −9,6% | 3,0 | 70 d | −8,9% | +18% | 0,15 |
> | 1930 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+260% · −40,0%** | +50% · −6,9% | +33% | −4,7% | 3,6 | 122 d | −5,5% | +24% | 0,02 |
> | 1931 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX | **+144% · −37,5%** | +54% · −13,3% | +34% | −13,8% | 3,0 | 74 d | −8,1% | +21% | 0,30 |
> | 1932 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+282% · −40,2%** | +55% · −7,6% | +31% | −4,7% | 2,9 | 97 d | −5,4% | +22% | 0,08 |
> | 1933 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+259% · −41,4%** | +52% · −8,1% | +34% | −7,0% | 3,0 | 121 d | −4,4% | +23% | 0,13 |
> | 1934 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+283% · −50,2%** | +55% · −11,1% | +33% | −9,9% | 2,6 | 67 d | −7,8% | +23% | 0,30 |
> | 1935 | MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+163% · −25,3%** | +43% · −6,0% | +29% | −7,6% | 3,0 | 94 d | −6,0% | +23% | 0,13 |
> | 1936 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+266% · −45,5%** | +53% · −9,1% | +32% | −7,9% | 2,8 | 107 d | −4,5% | +19% | 0,34 |
> | 1937 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX | **+224% · −38,4%** | +75% · −13,6% | +41% | −9,1% | 4,0 | 70 d | −12,5% | +24% | 0,46 |
> | 1938 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+179% · −38,9%** | +41% · −7,1% | +27% | −5,6% | 3,0 | 122 d | −4,0% | +21% | 0,07 |
> | 1939 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+211% · −39,6%** | +47% · −8,0% | +31% | −8,7% | 3,0 | 88 d | −6,5% | +21% | 0,10 |
> | 1940 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+241% · −37,3%** | +48% · −7,3% | +31% | −6,3% | 2,9 | 74 d | −7,9% | +25% | 0,15 |
> | 1941 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+268% · −33,4%** | +49% · −5,7% | +30% | −6,1% | 2,9 | 82 d | −6,7% | +24% | 0,04 |
> | 1942 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+216% · −50,1%** | +49% · −10,1% | +33% | −7,6% | 3,1 | 80 d | −7,6% | +26% | 0,14 |
> | 1943 | GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+262% · −41,5%** | +52% · −7,9% | +32% | −7,3% | 3,1 | 76 d | −8,0% | +27% | 0,24 |
> | 1944 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+222% · −41,2%** | +47% · −8,2% | +27% | −4,2% | 2,5 | 67 d | −7,5% | +22% | 0,14 |
> | 1945 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+209% · −33,2%** | +53% · −8,5% | +33% | −7,7% | 3,2 | 91 d | −6,7% | +24% | 0,35 |
> | 1946 | GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+133% · −27,9%** | +47% · −8,8% | +26% | −6,0% | 2,6 | 72 d | −7,5% | +23% | 0,01 |
> | 1947 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+189% · −37,1%** | +43% · −7,6% | +28% | −7,3% | 3,4 | 120 d | −5,5% | +17% | 0,12 |
> | 1948 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+186% · −34,1%** | +40% · −5,9% | +25% | −3,7% | 2,8 | 122 d | −3,1% | +19% | 0,03 |
> | 1949 | Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+170% · −32,2%** | +56% · −10,6% | +35% | −9,9% | 3,0 | 90 d | −6,4% | +26% | 0,27 |
> | 1950 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+348% · −54,6%** | +64% · −11,1% | +38% | −6,6% | 4,3 | 119 d | −7,0% | +25% | 0,21 |

> [!example]- Combinações 1951 a 1980 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1951 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+183% · −32,2%** | +40% · −6,2% | +26% | −4,7% | 2,8 | 80 d | −6,9% | +17% | 0,13 |
> | 1952 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+298% · −44,8%** | +58% · −9,6% | +37% | −8,8% | 3,4 | 83 d | −7,8% | +32% | 0,34 |
> | 1953 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+249% · −49,3%** | +58% · −9,7% | +33% | −6,1% | 2,7 | 65 d | −8,9% | +28% | 0,09 |
> | 1954 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+208% · −39,3%** | +43% · −7,2% | +26% | −3,8% | 1,8 | 75 d | −4,5% | +19% | 0,10 |
> | 1955 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+133% · −34,6%** | +39% · −8,6% | +26% | −6,5% | 2,4 | 72 d | −6,8% | +22% | 0,02 |
> | 1956 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+220% · −33,3%** | +43% · −6,4% | +28% | −7,5% | 3,0 | 107 d | −5,2% | +19% | 0,15 |
> | 1957 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+215% · −35,3%** | +44% · −6,9% | +28% | −5,3% | 2,8 | 121 d | −3,7% | +20% | 0,05 |
> | 1958 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+230% · −46,0%** | +49% · −8,4% | +32% | −7,3% | 3,2 | 122 d | −4,7% | +24% | 0,06 |
> | 1959 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+210% · −36,9%** | +46% · −7,4% | +29% | −7,2% | 3,5 | 102 d | −6,6% | +23% | 0,05 |
> | 1960 | VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+152% · −29,3%** | +41% · −7,0% | +27% | −8,3% | 3,0 | 104 d | −5,4% | +19% | 0,24 |
> | 1961 | Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+123% · −31,0%** | +45% · −10,4% | +28% | −4,6% | 3,5 | 101 d | −6,7% | +13% | 0,12 |
> | 1962 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+209% · −44,4%** | +45% · −7,9% | +30% | −6,3% | 3,1 | 122 d | −4,3% | +23% | 0,11 |
> | 1963 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+367% · −51,9%** | +65% · −11,2% | +37% | −6,1% | 2,7 | 67 d | −8,3% | +29% | 0,29 |
> | 1964 | Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+271% · −46,9%** | +54% · −9,9% | +34% | −7,5% | 3,3 | 83 d | −7,7% | +29% | 0,24 |
> | 1965 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+200% · −40,1%** | +47% · −8,4% | +29% | −8,0% | 3,2 | 83 d | −7,3% | +25% | 0,08 |
> | 1966 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+217% · −38,2%** | +44% · −7,6% | +29% | −8,0% | 2,4 | 72 d | −6,9% | +22% | 0,12 |
> | 1967 | GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+229% · −38,1%** | +58% · −9,9% | +36% | −9,9% | 2,7 | 67 d | −8,3% | +26% | 0,24 |
> | 1968 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+219% · −48,5%** | +49% · −9,5% | +33% | −7,6% | 3,2 | 79 d | −8,0% | +27% | 0,18 |
> | 1969 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+207% · −33,3%** | +44% · −6,1% | +31% | −8,9% | 3,1 | 117 d | −5,2% | +22% | 0,12 |
> | 1970 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+172% · −29,2%** | +46% · −6,6% | +32% | −6,9% | 2,7 | 92 d | −5,5% | +22% | 0,11 |
> | 1971 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+301% · −53,7%** | +71% · −14,2% | +41% | −7,4% | 3,6 | 72 d | −10,6% | +28% | 0,24 |
> | 1972 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+302% · −55,9%** | +62% · −11,8% | +35% | −9,1% | 3,5 | 70 d | −10,7% | +19% | 0,37 |
> | 1973 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+239% · −33,5%** | +57% · −7,7% | +35% | −4,8% | 3,2 | 122 d | −4,9% | +22% | 0,02 |
> | 1974 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+273% · −47,9%** | +59% · −10,3% | +37% | −9,0% | 3,6 | 80 d | −8,9% | +28% | 0,37 |
> | 1975 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+292% · −42,2%** | +55% · −7,2% | +31% | −4,6% | 3,0 | 105 d | −5,4% | +21% | 0,15 |
> | 1976 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+147% · −49,0%** | +38% · −10,3% | +27% | −8,3% | 3,0 | 80 d | −7,4% | +13% | 0,17 |
> | 1977 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+240% · −44,7%** | +47% · −8,1% | +30% | −4,8% | 2,5 | 67 d | −7,8% | +21% | 0,14 |
> | 1978 | Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+198% · −29,0%** | +50% · −6,9% | +29% | −7,7% | 3,0 | 83 d | −7,0% | +27% | 0,18 |
> | 1979 | GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+320% · −46,3%** | +58% · −9,5% | +35% | −7,0% | 2,7 | 67 d | −8,5% | +26% | 0,25 |
> | 1980 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+293% · −43,1%** | +57% · −8,3% | +35% | −5,5% | 3,5 | 119 d | −6,0% | +23% | 0,18 |

> [!example]- Combinações 1981 a 2010 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1981 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+322% · −66,9%** | +70% · −15,7% | +40% | −8,3% | 3,6 | 74 d | −10,1% | +27% | 0,39 |
> | 1982 | BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+262% · −49,9%** | +51% · −9,8% | +32% | −7,1% | 3,4 | 78 d | −8,7% | +18% | 0,30 |
> | 1983 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+253% · −42,3%** | +52% · −8,5% | +36% | −8,5% | 2,9 | 103 d | −5,4% | +27% | 0,26 |
> | 1984 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+275% · −43,8%** | +54% · −9,4% | +31% | −9,0% | 3,5 | 83 d | −8,2% | +22% | 0,28 |
> | 1985 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+265% · −52,7%** | +54% · −10,7% | +33% | −6,2% | 3,8 | 127 d | −5,7% | +22% | 0,13 |
> | 1986 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+251% · −38,2%** | +51% · −7,8% | +33% | −5,3% | 2,0 | 76 d | −5,1% | +22% | 0,10 |
> | 1987 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+156% · −38,0%** | +38% · −6,8% | +27% | −7,0% | 2,6 | 80 d | −6,4% | +20% | 0,13 |
> | 1988 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+206% · −51,3%** | +49% · −10,7% | +33% | −9,9% | 3,1 | 76 d | −8,4% | +25% | 0,21 |
> | 1989 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+209% · −41,9%** | +48% · −8,9% | +31% | −10,0% | 2,9 | 91 d | −6,1% | +23% | 0,28 |
> | 1990 | Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+256% · −41,7%** | +67% · −11,3% | +38% | −9,6% | 3,9 | 80 d | −9,7% | +32% | 0,35 |
> | 1991 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+287% · −57,7%** | +61% · −12,8% | +38% | −7,6% | 3,1 | 67 d | −9,6% | +23% | 0,33 |
> | 1992 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+327% · −47,9%** | +63% · −9,7% | +35% | −6,2% | 2,7 | 65 d | −8,9% | +29% | 0,28 |
> | 1993 | ADX ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+195% · −42,0%** | +66% · −13,6% | +40% | −9,0% | 2,5 | 65 d | −8,2% | +30% | 0,17 |
> | 1994 | Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+122% · −20,9%** | +31% · −3,4% | +22% | −4,7% | 2,3 | 102 d | −3,2% | +16% | 0,01 |
> | 1995 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+188% · −57,4%** | +45% · −13,8% | +31% | −8,8% | 2,6 | 67 d | −8,2% | +17% | 0,16 |
> | 1996 | Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR | **+170% · −26,4%** | +57% · −9,2% | +34% | −5,3% | 3,7 | 102 d | −7,0% | +23% | 0,09 |
> | 1997 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+236% · −51,9%** | +52% · −11,6% | +34% | −12,6% | 2,6 | 73 d | −7,3% | +26% | 0,33 |
> | 1998 | ADX ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+232% · −39,3%** | +59% · −9,7% | +37% | −6,8% | 1,8 | 64 d | −6,5% | +24% | 0,18 |
> | 1999 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+164% · −34,9%** | +45% · −8,8% | +29% | −9,8% | 2,3 | 72 d | −6,5% | +22% | 0,10 |
> | 2000 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+130% · −30,3%** | +34% · −5,9% | +24% | −6,7% | 2,5 | 81 d | −6,1% | +21% | −0,01 |
> | 2001 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+114% · −24,9%** | +35% · −5,5% | +23% | −2,9% | 2,8 | 103 d | −5,2% | +17% | 0,01 |
> | 2002 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+267% · −53,6%** | +52% · −10,4% | +32% | −6,4% | 3,3 | 122 d | −5,2% | +21% | 0,22 |
> | 2003 | 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+177% · −23,7%** | +45% · −5,4% | +29% | −6,9% | 3,0 | 99 d | −5,9% | +20% | 0,08 |
> | 2004 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+163% · −29,7%** | +36% · −5,4% | +25% | −7,3% | 2,7 | 106 d | −4,6% | +17% | 0,07 |
> | 2005 | Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+204% · −25,4%** | +63% · −7,8% | +34% | −6,7% | 3,3 | 73 d | −9,4% | +26% | 0,18 |
> | 2006 | BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+138% · −53,7%** | +42% · −14,3% | +29% | −6,3% | 3,3 | 76 d | −8,9% | +12% | 0,17 |
> | 2007 | Bollinger ·ADX | **+52% · −6,9%** | +52% · −6,9% | +26% | −3,6% | 2,6 | 70 d | −8,1% | +18% | — |
> | 2008 | Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+343% · −49,9%** | +65% · −9,7% | +37% | −7,2% | 3,5 | 74 d | −9,8% | +29% | 0,32 |
> | 2009 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+264% · −56,9%** | +54% · −11,6% | +33% | −8,8% | 2,7 | 100 d | −5,1% | +23% | 0,38 |
> | 2010 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+175% · −39,3%** | +46% · −9,6% | +28% | −6,1% | 2,3 | 87 d | −4,5% | +19% | 0,16 |

> [!example]- Combinações 2011 a 2040 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2011 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+210% · −39,5%** | +44% · −7,9% | +27% | −10,4% | 3,1 | 91 d | −6,6% | +19% | 0,22 |
> | 2012 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+243% · −46,4%** | +64% · −12,4% | +38% | −7,5% | 3,0 | 76 d | −8,0% | +30% | 0,35 |
> | 2013 | 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+106% · −15,1%** | +39% · −4,1% | +25% | −3,6% | 2,5 | 102 d | −4,0% | +15% | −0,02 |
> | 2014 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+170% · −34,6%** | +45% · −7,8% | +27% | −4,8% | 2,8 | 122 d | −3,4% | +20% | 0,10 |
> | 2015 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+245% · −43,5%** | +51% · −9,2% | +34% | −8,2% | 3,2 | 83 d | −7,6% | +30% | 0,19 |
> | 2016 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX | **+273% · −41,0%** | +62% · −9,2% | +33% | −4,6% | 3,4 | 105 d | −6,6% | +21% | 0,13 |
> | 2017 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+217% · −35,5%** | +45% · −6,9% | +28% | −5,3% | 2,9 | 122 d | −3,8% | +19% | 0,04 |
> | 2018 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+125% · −29,5%** | +38% · −7,0% | +28% | −10,2% | 2,9 | 120 d | −4,6% | +18% | 0,11 |
> | 2019 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+203% · −32,6%** | +43% · −6,1% | +28% | −6,8% | 2,6 | 72 d | −7,5% | +25% | 0,12 |
> | 2020 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+189% · −34,9%** | +48% · −8,4% | +28% | −6,6% | 2,4 | 72 d | −7,0% | +21% | 0,05 |
> | 2021 | IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+152% · −31,4%** | +43% · −7,4% | +31% | −8,3% | 2,4 | 106 d | −3,6% | +25% | 0,25 |
> | 2022 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+223% · −55,7%** | +51% · −12,3% | +33% | −8,9% | 3,3 | 76 d | −9,0% | +20% | 0,21 |
> | 2023 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+175% · −41,2%** | +40% · −7,8% | +27% | −5,7% | 1,6 | 67 d | −5,5% | +20% | 0,04 |
> | 2024 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+281% · −65,8%** | +56% · −15,8% | +33% | −6,2% | 3,1 | 78 d | −8,1% | +19% | 0,23 |
> | 2025 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+273% · −43,2%** | +54% · −8,3% | +31% | −7,4% | 2,9 | 74 d | −8,3% | +28% | 0,10 |
> | 2026 | ADX ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+239% · −37,2%** | +58% · −8,3% | +31% | −4,7% | 3,1 | 105 d | −5,9% | +22% | 0,18 |
> | 2027 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+368% · −54,4%** | +68% · −12,0% | +35% | −6,2% | 2,6 | 65 d | −8,7% | +28% | 0,27 |
> | 2028 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+254% · −42,9%** | +52% · −8,3% | +30% | −5,6% | 2,4 | 67 d | −7,8% | +26% | 0,18 |
> | 2029 | GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+138% · −33,4%** | +41% · −8,3% | +28% | −8,4% | 3,0 | 81 d | −7,5% | +24% | 0,14 |
> | 2030 | ADX ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+220% · −43,9%** | +46% · −8,6% | +29% | −7,3% | 1,7 | 64 d | −6,4% | +20% | 0,19 |
> | 2031 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+208% · −44,9%** | +45% · −8,7% | +30% | −7,5% | 2,8 | 122 d | −3,8% | +25% | 0,12 |
> | 2032 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+231% · −34,7%** | +56% · −9,3% | +30% | −6,4% | 3,7 | 83 d | −8,8% | +20% | 0,08 |
> | 2033 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+238% · −42,7%** | +58% · −11,0% | +32% | −5,0% | 2,9 | 77 d | −7,8% | +23% | 0,18 |
> | 2034 | Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL | **+181% · −37,8%** | +63% · −12,5% | +35% | −6,5% | 4,5 | 102 d | −8,4% | +17% | 0,13 |
> | 2035 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+281% · −59,5%** | +61% · −14,3% | +36% | −10,5% | 3,1 | 70 d | −9,8% | +22% | 0,32 |
> | 2036 | Donchian ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+207% · −36,7%** | +54% · −9,5% | +35% | −7,6% | 3,4 | 89 d | −7,8% | +30% | 0,17 |
> | 2037 | VWAP ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+274% · −44,9%** | +53% · −9,3% | +34% | −8,6% | 3,1 | 100 d | −6,2% | +26% | 0,30 |
> | 2038 | GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+184% · −36,2%** | +51% · −8,7% | +33% | −7,1% | 3,2 | 76 d | −8,6% | +22% | 0,10 |
> | 2039 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+230% · −49,7%** | +50% · −9,7% | +33% | −8,9% | 2,6 | 106 d | −4,6% | +25% | 0,16 |
> | 2040 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+200% · −46,5%** | +46% · −9,9% | +29% | −8,4% | 3,6 | 110 d | −6,8% | +17% | 0,06 |

> [!example]- Combinações 2041 a 2070 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2041 | GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+110% · −30,5%** | +44% · −10,3% | +28% | −11,3% | 2,7 | 74 d | −7,7% | +23% | 0,20 |
> | 2042 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+144% · −27,7%** | +40% · −6,5% | +28% | −8,5% | 2,8 | 107 d | −5,2% | +18% | 0,10 |
> | 2043 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+225% · −41,1%** | +47% · −8,6% | +27% | −3,7% | 2,4 | 67 d | −7,6% | +23% | 0,11 |
> | 2044 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+188% · −45,4%** | +50% · −11,1% | +33% | −7,0% | 3,4 | 122 d | −5,5% | +20% | 0,11 |
> | 2045 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+258% · −53,4%** | +68% · −14,5% | +40% | −8,8% | 3,7 | 70 d | −12,2% | +25% | 0,47 |
> | 2046 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+324% · −60,7%** | +62% · −13,5% | +38% | −7,5% | 4,1 | 128 d | −6,3% | +25% | 0,22 |
> | 2047 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+236% · −50,9%** | +49% · −9,6% | +30% | −6,3% | 2,9 | 122 d | −4,3% | +21% | 0,19 |
> | 2048 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+166% · −30,0%** | +44% · −7,7% | +29% | −4,5% | 3,3 | 106 d | −6,3% | +21% | 0,01 |
> | 2049 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+202% · −31,0%** | +42% · −4,8% | +28% | −5,8% | 2,5 | 72 d | −7,5% | +22% | 0,04 |
> | 2050 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+230% · −30,7%** | +45% · −5,4% | +30% | −5,3% | 3,3 | 92 d | −7,3% | +24% | −0,02 |
> | 2051 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+228% · −34,5%** | +47% · −6,6% | +31% | −5,4% | 2,9 | 122 d | −4,4% | +21% | 0,02 |
> | 2052 | Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+168% · −28,8%** | +57% · −9,7% | +34% | −5,9% | 3,4 | 91 d | −7,7% | +19% | 0,34 |
> | 2053 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+134% · −28,5%** | +39% · −6,2% | +26% | −5,3% | 2,4 | 77 d | −6,3% | +21% | −0,04 |
> | 2054 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+87% · −30,8%** | +30% · −7,4% | +24% | −11,3% | 2,6 | 120 d | −3,3% | +17% | 0,13 |
> | 2055 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+253% · −53,2%** | +54% · −11,6% | +34% | −7,4% | 3,8 | 91 d | −8,5% | +19% | 0,25 |
> | 2056 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+114% · −39,8%** | +31% · −7,5% | +24% | −5,7% | 2,7 | 91 d | −5,9% | +15% | 0,02 |
> | 2057 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+186% · −43,3%** | +43% · −8,7% | +27% | −4,2% | 3,2 | 122 d | −5,1% | +19% | 0,06 |
> | 2058 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+250% · −51,7%** | +51% · −9,8% | +30% | −4,4% | 2,6 | 77 d | −7,1% | +22% | 0,19 |
> | 2059 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+173% · −47,4%** | +40% · −10,3% | +28% | −5,2% | 2,7 | 83 d | −6,6% | +18% | 0,06 |
> | 2060 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+236% · −51,5%** | +53% · −10,7% | +30% | −4,7% | 3,2 | 97 d | −6,7% | +21% | 0,12 |
> | 2061 | Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+155% · −23,3%** | +52% · −7,9% | +28% | −3,5% | 3,4 | 101 d | −6,8% | +21% | −0,03 |
> | 2062 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+207% · −48,9%** | +49% · −11,0% | +33% | −13,2% | 2,7 | 75 d | −7,7% | +27% | 0,32 |
> | 2063 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+217% · −43,5%** | +48% · −8,7% | +30% | −5,2% | 3,3 | 122 d | −5,4% | +25% | 0,04 |
> | 2064 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+254% · −48,5%** | +53% · −9,4% | +33% | −11,1% | 2,9 | 73 d | −8,6% | +23% | 0,39 |
> | 2065 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+374% · −59,0%** | +66% · −12,8% | +38% | −8,2% | 3,8 | 97 d | −7,9% | +27% | 0,37 |
> | 2066 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+263% · −45,5%** | +54% · −9,6% | +34% | −6,8% | 4,2 | 120 d | −7,2% | +20% | 0,23 |
> | 2067 | Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+154% · −23,2%** | +52% · −7,5% | +28% | −4,8% | 3,5 | 95 d | −7,5% | +17% | 0,15 |
> | 2068 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+200% · −51,1%** | +45% · −10,3% | +31% | −6,5% | 2,7 | 83 d | −6,6% | +23% | 0,11 |
> | 2069 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+222% · −36,0%** | +54% · −9,3% | +32% | −7,4% | 2,4 | 67 d | −8,0% | +23% | 0,24 |
> | 2070 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+271% · −55,0%** | +58% · −11,8% | +35% | −7,7% | 3,8 | 83 d | −9,1% | +22% | 0,36 |

> [!example]- Combinações 2071 a 2100 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2071 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+179% · −33,2%** | +41% · −6,3% | +28% | −6,2% | 2,4 | 91 d | −5,2% | +22% | 0,04 |
> | 2072 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+237% · −37,0%** | +56% · −9,2% | +35% | −5,0% | 3,8 | 89 d | −8,7% | +25% | 0,13 |
> | 2073 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+156% · −45,8%** | +45% · −12,8% | +29% | −12,0% | 2,4 | 72 d | −7,4% | +20% | 0,10 |
> | 2074 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+290% · −44,8%** | +58% · −8,7% | +35% | −6,7% | 3,2 | 119 d | −5,9% | +25% | 0,28 |
> | 2075 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+192% · −50,8%** | +42% · −11,7% | +28% | −9,1% | 2,8 | 72 d | −8,6% | +17% | 0,14 |
> | 2076 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+277% · −60,5%** | +57% · −13,6% | +35% | −5,2% | 3,9 | 92 d | −8,5% | +18% | 0,18 |
> | 2077 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+285% · −39,0%** | +55% · −7,8% | +31% | −4,7% | 2,8 | 97 d | −5,7% | +21% | 0,09 |
> | 2078 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+206% · −44,5%** | +48% · −8,9% | +30% | −5,1% | 2,7 | 77 d | −7,3% | +26% | 0,02 |
> | 2079 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+188% · −52,6%** | +44% · −10,7% | +29% | −6,2% | 3,5 | 120 d | −6,3% | +17% | 0,17 |
> | 2080 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+196% · −39,5%** | +41% · −8,1% | +27% | −3,6% | 3,3 | 92 d | −7,3% | +19% | −0,02 |
> | 2081 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+223% · −63,2%** | +50% · −14,3% | +32% | −4,6% | 4,0 | 91 d | −8,9% | +14% | 0,14 |
> | 2082 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+263% · −54,2%** | +54% · −11,3% | +33% | −6,2% | 3,9 | 127 d | −6,2% | +21% | 0,14 |
> | 2083 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+247% · −40,9%** | +62% · −9,9% | +35% | −5,7% | 3,4 | 119 d | −6,2% | +24% | 0,26 |
> | 2084 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+193% · −48,6%** | +46% · −9,7% | +31% | −10,1% | 3,1 | 95 d | −6,7% | +23% | 0,21 |
> | 2085 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+171% · −33,8%** | +38% · −6,4% | +25% | −3,5% | 2,4 | 72 d | −7,4% | +21% | 0,01 |
> | 2086 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+289% · −43,3%** | +54% · −7,0% | +31% | −4,8% | 3,0 | 105 d | −5,9% | +21% | 0,17 |
> | 2087 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+235% · −37,7%** | +56% · −9,4% | +35% | −5,0% | 4,0 | 98 d | −8,3% | +23% | 0,03 |
> | 2088 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+184% · −45,4%** | +42% · −9,8% | +27% | −11,7% | 2,3 | 73 d | −6,9% | +22% | 0,17 |
> | 2089 | Pôr do sol ·POR + Bollinger ·ADX | **+61% · −7,9%** | +35% · −3,1% | +21% | −1,2% | 2,5 | 104 d | −4,6% | +17% | −0,06 |
> | 2090 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+238% · −45,2%** | +50% · −9,9% | +28% | −9,8% | 2,9 | 70 d | −9,2% | +19% | 0,16 |
> | 2091 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+168% · −42,9%** | +41% · −8,9% | +28% | −9,4% | 2,1 | 72 d | −6,6% | +19% | 0,07 |
> | 2092 | ADX ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+163% · −42,2%** | +46% · −10,0% | +30% | −7,0% | 3,0 | 122 d | −4,7% | +21% | 0,08 |
> | 2093 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+185% · −38,2%** | +41% · −7,3% | +30% | −9,5% | 2,2 | 82 d | −5,3% | +23% | 0,21 |
> | 2094 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+185% · −50,5%** | +44% · −10,6% | +28% | −4,9% | 2,5 | 80 d | −6,5% | +19% | 0,14 |
> | 2095 | GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+180% · −35,8%** | +49% · −8,5% | +32% | −8,9% | 2,6 | 72 d | −8,2% | +25% | 0,08 |
> | 2096 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+144% · −36,0%** | +42% · −9,0% | +29% | −9,1% | 2,3 | 72 d | −7,0% | +22% | 0,03 |
> | 2097 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+206% · −41,4%** | +43% · −7,3% | +29% | −5,6% | 3,6 | 131 d | −5,2% | +22% | 0,04 |
> | 2098 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+269% · −38,6%** | +51% · −7,9% | +31% | −4,9% | 3,2 | 122 d | −5,3% | +18% | 0,18 |
> | 2099 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+257% · −42,7%** | +52% · −8,1% | +30% | −5,6% | 2,4 | 67 d | −7,9% | +25% | 0,16 |
> | 2100 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+135% · −34,2%** | +40% · −8,3% | +26% | −6,5% | 2,3 | 72 d | −7,0% | +22% | 0,07 |

> [!example]- Combinações 2101 a 2130 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2101 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+242% · −45,2%** | +48% · −9,1% | +29% | −6,3% | 1,8 | 75 d | −5,2% | +20% | 0,20 |
> | 2102 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+174% · −42,2%** | +41% · −8,1% | +29% | −6,9% | 3,0 | 96 d | −6,5% | +22% | 0,16 |
> | 2103 | ADX ·ADX + VWAP ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+235% · −50,1%** | +49% · −9,8% | +30% | −7,6% | 2,7 | 112 d | −4,8% | +21% | 0,25 |
> | 2104 | ADX ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+246% · −54,9%** | +56% · −11,7% | +35% | −8,4% | 2,7 | 67 d | −8,9% | +30% | 0,23 |
> | 2105 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+220% · −50,7%** | +56% · −12,9% | +36% | −8,4% | 3,5 | 122 d | −5,9% | +26% | 0,15 |
> | 2106 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+266% · −53,4%** | +57% · −11,3% | +32% | −4,7% | 3,7 | 120 d | −6,8% | +20% | 0,16 |
> | 2107 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+188% · −38,6%** | +53% · −10,2% | +32% | −8,5% | 3,0 | 74 d | −9,1% | +27% | 0,03 |
> | 2108 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+248% · −60,7%** | +59% · −13,9% | +36% | −11,7% | 3,3 | 70 d | −11,0% | +22% | 0,44 |
> | 2109 | Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+261% · −51,8%** | +58% · −10,9% | +35% | −7,7% | 3,5 | 83 d | −8,8% | +26% | 0,31 |
> | 2110 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+214% · −38,9%** | +45% · −8,0% | +29% | −8,6% | 2,5 | 76 d | −7,2% | +21% | 0,10 |
> | 2111 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+152% · −29,6%** | +37% · −5,4% | +25% | −5,2% | 2,4 | 91 d | −5,1% | +22% | 0,01 |
> | 2112 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+221% · −43,6%** | +47% · −9,1% | +31% | −11,4% | 2,8 | 73 d | −8,6% | +21% | 0,19 |
> | 2113 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+244% · −57,6%** | +65% · −15,8% | +39% | −9,3% | 3,0 | 76 d | −8,7% | +30% | 0,35 |
> | 2114 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+219% · −54,5%** | +49% · −11,9% | +33% | −8,8% | 3,1 | 83 d | −7,9% | +20% | 0,34 |
> | 2115 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+156% · −37,8%** | +38% · −7,3% | +29% | −7,2% | 3,0 | 125 d | −4,7% | +23% | 0,06 |
> | 2116 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+186% · −32,5%** | +41% · −6,3% | +26% | −6,1% | 2,5 | 81 d | −6,7% | +20% | −0,01 |
> | 2117 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+306% · −64,8%** | +70% · −14,6% | +40% | −8,3% | 3,2 | 73 d | −9,8% | +32% | 0,32 |
> | 2118 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+314% · −51,2%** | +64% · −10,4% | +36% | −4,5% | 3,8 | 122 d | −6,6% | +26% | 0,18 |
> | 2119 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+213% · −37,5%** | +45% · −7,5% | +29% | −7,0% | 2,7 | 78 d | −7,5% | +22% | 0,17 |
> | 2120 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+210% · −30,4%** | +53% · −8,0% | +33% | −6,6% | 3,5 | 102 d | −7,2% | +25% | 0,18 |
> | 2121 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+152% · −24,6%** | +35% · −4,1% | +25% | −5,4% | 2,1 | 94 d | −4,0% | +16% | 0,04 |
> | 2122 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+122% · −17,9%** | +35% · −3,4% | +23% | −3,5% | 2,3 | 102 d | −4,0% | +17% | 0,08 |
> | 2123 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+217% · −38,4%** | +47% · −8,0% | +31% | −9,7% | 3,3 | 120 d | −6,1% | +20% | 0,22 |
> | 2124 | GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+197% · −36,3%** | +50% · −8,3% | +30% | −7,7% | 2,9 | 76 d | −8,3% | +25% | 0,12 |
> | 2125 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+135% · −32,6%** | +33% · −5,7% | +22% | −4,0% | 2,6 | 81 d | −6,8% | +13% | 0,05 |
> | 2126 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+176% · −46,1%** | +43% · −9,0% | +28% | −6,2% | 2,9 | 77 d | −8,2% | +19% | 0,06 |
> | 2127 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+101% · −24,3%** | +33% · −5,7% | +24% | −7,1% | 3,0 | 129 d | −4,2% | +17% | 0,05 |
> | 2128 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+198% · −27,4%** | +49% · −7,1% | +29% | −6,4% | 3,2 | 96 d | −7,1% | +23% | 0,12 |
> | 2129 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+161% · −47,0%** | +45% · −11,9% | +31% | −5,4% | 2,6 | 72 d | −8,1% | +20% | 0,01 |
> | 2130 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+301% · −39,2%** | +56% · −7,7% | +33% | −4,0% | 3,7 | 128 d | −6,0% | +21% | 0,06 |

> [!example]- Combinações 2131 a 2160 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2131 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+248% · −43,8%** | +53% · −8,8% | +32% | −8,4% | 2,7 | 71 d | −8,9% | +28% | 0,04 |
> | 2132 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+178% · −40,1%** | +41% · −7,4% | +27% | −5,3% | 1,6 | 67 d | −5,8% | +20% | 0,07 |
> | 2133 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+203% · −42,3%** | +45% · −7,9% | +30% | −6,8% | 2,7 | 122 d | −4,0% | +23% | 0,05 |
> | 2134 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+192% · −47,8%** | +51% · −11,8% | +34% | −8,2% | 3,0 | 122 d | −5,1% | +26% | 0,16 |
> | 2135 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+364% · −40,4%** | +63% · −8,4% | +37% | −4,5% | 4,1 | 120 d | −7,5% | +24% | 0,09 |
> | 2136 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+162% · −37,0%** | +45% · −9,5% | +30% | −10,9% | 2,3 | 72 d | −7,1% | +23% | 0,21 |
> | 2137 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+193% · −45,9%** | +44% · −9,8% | +29% | −12,7% | 2,3 | 64 d | −8,5% | +22% | 0,28 |
> | 2138 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+338% · −43,9%** | +62% · −8,3% | +34% | −5,7% | 2,4 | 65 d | −8,6% | +24% | 0,21 |
> | 2139 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+238% · −35,7%** | +47% · −6,1% | +31% | −4,4% | 2,8 | 122 d | −4,4% | +20% | 0,03 |
> | 2140 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+252% · −46,9%** | +52% · −10,5% | +32% | −10,9% | 2,6 | 73 d | −8,2% | +27% | 0,29 |
> | 2141 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+171% · −31,0%** | +47% · −8,1% | +28% | −5,1% | 3,7 | 110 d | −7,4% | +20% | −0,02 |
> | 2142 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+132% · −22,4%** | +32% · −4,1% | +25% | −4,1% | 2,3 | 92 d | −5,0% | +19% | −0,05 |
> | 2143 | GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+132% · −29,8%** | +48% · −9,6% | +27% | −7,5% | 2,6 | 72 d | −8,4% | +19% | 0,22 |
> | 2144 | ADX ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+187% · −38,9%** | +41% · −7,1% | +26% | −5,6% | 1,8 | 74 d | −5,6% | +19% | 0,07 |
> | 2145 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+185% · −55,9%** | +45% · −12,5% | +31% | −7,1% | 3,0 | 78 d | −8,5% | +16% | 0,18 |
> | 2146 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+310% · −58,4%** | +62% · −12,4% | +38% | −7,6% | 4,0 | 128 d | −6,5% | +28% | 0,20 |
> | 2147 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+154% · −36,2%** | +38% · −7,2% | +27% | −8,9% | 2,5 | 81 d | −6,6% | +22% | 0,06 |
> | 2148 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+136% · −33,0%** | +34% · −6,1% | +26% | −9,7% | 2,7 | 107 d | −5,2% | +19% | 0,01 |
> | 2149 | Pôr do sol ·POR + Rompe 200 ·ROM | **+28% · −10,2%** | +20% · −4,5% | +17% | −3,4% | 1,9 | 94 d | −2,9% | +16% | −0,05 |
> | 2150 | VWAP ·ADX + Pullback ·PUL + Tendência ·ADX | **+111% · −38,3%** | +43% · −12,7% | +32% | −7,5% | 3,2 | 120 d | −6,0% | +15% | 0,15 |
> | 2151 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+222% · −25,7%** | +51% · −5,5% | +29% | −4,6% | 3,2 | 92 d | −7,5% | +23% | 0,07 |
> | 2152 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+192% · −35,9%** | +48% · −8,8% | +28% | −6,6% | 2,3 | 72 d | −7,2% | +21% | 0,10 |
> | 2153 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+188% · −36,1%** | +41% · −6,6% | +26% | −4,9% | 1,7 | 76 d | −5,1% | +18% | 0,04 |
> | 2154 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+294% · −54,9%** | +61% · −11,7% | +35% | −6,0% | 3,7 | 120 d | −6,9% | +25% | 0,18 |
> | 2155 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+290% · −54,1%** | +56% · −11,1% | +35% | −8,3% | 3,3 | 78 d | −9,3% | +23% | 0,40 |
> | 2156 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+269% · −58,7%** | +61% · −12,1% | +38% | −9,6% | 2,7 | 67 d | −9,2% | +31% | 0,30 |
> | 2157 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+207% · −39,2%** | +44% · −7,8% | +27% | −10,2% | 2,9 | 91 d | −6,9% | +20% | 0,19 |
> | 2158 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+205% · −36,7%** | +44% · −7,2% | +28% | −9,7% | 2,7 | 83 d | −6,9% | +20% | 0,11 |
> | 2159 | 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+72% · −17,9%** | +41% · −8,7% | +29% | −4,3% | 2,5 | 67 d | −8,8% | +24% | −0,31 |
> | 2160 | ADX ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+212% · −49,2%** | +56% · −11,6% | +36% | −9,3% | 3,2 | 122 d | −5,5% | +27% | 0,15 |

> [!example]- Combinações 2161 a 2190 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2161 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+256% · −44,6%** | +53% · −9,6% | +32% | −10,0% | 3,1 | 83 d | −8,1% | +25% | 0,26 |
> | 2162 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+285% · −41,1%** | +58% · −8,2% | +35% | −5,6% | 3,2 | 122 d | −5,5% | +23% | 0,10 |
> | 2163 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+287% · −40,6%** | +58% · −8,1% | +34% | −5,6% | 3,1 | 122 d | −5,5% | +22% | 0,12 |
> | 2164 | IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+126% · −20,2%** | +37% · −4,8% | +27% | −4,1% | 2,6 | 125 d | −3,4% | +21% | −0,03 |
> | 2165 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+113% · −21,1%** | +30% · −3,0% | +23% | −5,0% | 1,9 | 87 d | −4,0% | +18% | 0,03 |
> | 2166 | VWAP ·ADX + Donchian ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+274% · −47,0%** | +56% · −9,5% | +34% | −9,3% | 3,2 | 81 d | −8,7% | +26% | 0,35 |
> | 2167 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+186% · −32,2%** | +41% · −6,2% | +26% | −4,7% | 2,6 | 80 d | −7,3% | +18% | 0,11 |
> | 2168 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+209% · −43,4%** | +54% · −11,8% | +35% | −7,4% | 3,4 | 81 d | −9,2% | +23% | 0,22 |
> | 2169 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+246% · −50,8%** | +54% · −10,7% | +34% | −6,8% | 3,5 | 83 d | −9,1% | +24% | 0,23 |
> | 2170 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+136% · −28,2%** | +33% · −4,8% | +22% | −2,5% | 2,6 | 91 d | −6,2% | +15% | −0,02 |
> | 2171 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+158% · −40,1%** | +38% · −8,2% | +24% | −9,1% | 2,2 | 73 d | −6,9% | +18% | 0,12 |
> | 2172 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+250% · −46,2%** | +55% · −9,5% | +34% | −5,4% | 2,6 | 76 d | −7,7% | +27% | 0,11 |
> | 2173 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+220% · −50,1%** | +51% · −10,4% | +32% | −12,0% | 3,7 | 102 d | −7,8% | +19% | 0,24 |
> | 2174 | GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+160% · −33,9%** | +55% · −11,8% | +31% | −11,4% | 2,6 | 67 d | −9,1% | +27% | 0,33 |
> | 2175 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+271% · −33,5%** | +50% · −5,6% | +30% | −6,0% | 2,6 | 82 d | −7,0% | +23% | 0,10 |
> | 2176 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+101% · −21,6%** | +32% · −4,3% | +25% | −6,8% | 2,0 | 86 d | −4,6% | +18% | 0,01 |
> | 2177 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+356% · −36,7%** | +60% · −7,2% | +33% | −4,3% | 3,7 | 105 d | −7,7% | +23% | 0,10 |
> | 2178 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+203% · −34,6%** | +43% · −6,3% | +28% | −4,1% | 2,7 | 122 d | −4,4% | +20% | 0,03 |
> | 2179 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+108% · −38,5%** | +31% · −7,9% | +22% | −8,0% | 2,5 | 95 d | −5,4% | +16% | 0,01 |
> | 2180 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+266% · −54,5%** | +63% · −11,1% | +36% | −9,1% | 2,6 | 65 d | −9,5% | +30% | 0,29 |
> | 2181 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+146% · −30,2%** | +34% · −5,4% | +24% | −8,2% | 3,0 | 146 d | −3,8% | +18% | 0,09 |
> | 2182 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+253% · −64,1%** | +56% · −15,3% | +35% | −8,2% | 3,3 | 106 d | −6,9% | +20% | 0,30 |
> | 2183 | GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+181% · −41,2%** | +51% · −10,1% | +33% | −8,6% | 3,1 | 76 d | −9,2% | +27% | 0,25 |
> | 2184 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+231% · −34,6%** | +48% · −6,7% | +31% | −5,5% | 2,9 | 122 d | −5,0% | +20% | 0,02 |
> | 2185 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+177% · −50,9%** | +52% · −13,6% | +34% | −13,1% | 2,9 | 75 d | −9,0% | +23% | 0,39 |
> | 2186 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+154% · −39,7%** | +38% · −7,4% | +27% | −7,0% | 2,6 | 91 d | −6,1% | +19% | 0,13 |
> | 2187 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+96% · −39,0%** | +33% · −10,2% | +23% | −10,4% | 2,2 | 72 d | −7,2% | +15% | 0,04 |
> | 2188 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+172% · −52,0%** | +42% · −10,6% | +30% | −6,2% | 2,8 | 81 d | −7,7% | +22% | 0,06 |
> | 2189 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Tendência ·ADX | **+288% · −63,9%** | +77% · −18,6% | +42% | −7,6% | 3,6 | 74 d | −11,7% | +25% | 0,39 |
> | 2190 | Donchian ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+228% · −33,4%** | +55% · −8,2% | +33% | −9,2% | 2,9 | 83 d | −7,7% | +27% | 0,31 |

> [!example]- Combinações 2191 a 2220 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2191 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+108% · −40,7%** | +29% · −8,6% | +23% | −7,7% | 2,5 | 106 d | −5,1% | +17% | 0,00 |
> | 2192 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+303% · −47,1%** | +57% · −9,5% | +33% | −5,0% | 3,9 | 91 d | −9,3% | +17% | 0,20 |
> | 2193 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+297% · −56,2%** | +57% · −11,9% | +35% | −5,6% | 3,9 | 129 d | −6,5% | +21% | 0,10 |
> | 2194 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+204% · −43,1%** | +46% · −8,2% | +29% | −4,7% | 3,1 | 90 d | −7,6% | +18% | 0,08 |
> | 2195 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+117% · −41,1%** | +36% · −11,0% | +26% | −6,5% | 2,3 | 72 d | −7,4% | +15% | 0,04 |
> | 2196 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+171% · −41,7%** | +41% · −8,8% | +28% | −9,4% | 2,0 | 72 d | −6,7% | +20% | 0,13 |
> | 2197 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+189% · −39,6%** | +43% · −7,6% | +27% | −4,0% | 3,0 | 122 d | −5,3% | +22% | −0,00 |
> | 2198 | Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+138% · −28,6%** | +41% · −6,9% | +27% | −6,8% | 2,4 | 87 d | −6,0% | +25% | 0,02 |
> | 2199 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+271% · −48,9%** | +58% · −10,4% | +35% | −11,5% | 2,7 | 71 d | −9,0% | +29% | 0,30 |
> | 2200 | GPS médias ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+205% · −42,5%** | +57% · −10,5% | +37% | −10,1% | 3,1 | 76 d | −9,3% | +28% | 0,34 |
> | 2201 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+202% · −33,4%** | +49% · −8,4% | +31% | −9,7% | 2,9 | 107 d | −6,0% | +21% | 0,27 |
> | 2202 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Tendência ·ADX | **+198% · −54,1%** | +54% · −12,9% | +34% | −6,6% | 4,2 | 128 d | −7,0% | +15% | 0,25 |
> | 2203 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+258% · −35,7%** | +50% · −6,5% | +28% | −3,4% | 2,7 | 106 d | −5,6% | +19% | 0,06 |
> | 2204 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+326% · −48,6%** | +61% · −10,2% | +34% | −9,1% | 2,6 | 71 d | −9,0% | +28% | 0,25 |
> | 2205 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+205% · −46,6%** | +48% · −9,6% | +30% | −6,2% | 2,6 | 76 d | −7,8% | +28% | 0,13 |
> | 2206 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+215% · −41,3%** | +47% · −7,1% | +29% | −5,0% | 2,8 | 105 d | −5,8% | +22% | 0,10 |
> | 2207 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+212% · −64,9%** | +48% · −15,7% | +31% | −6,3% | 3,4 | 120 d | −6,6% | +18% | 0,10 |
> | 2208 | GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+75% · −20,6%** | +43% · −9,7% | +27% | −7,2% | 2,8 | 72 d | −9,3% | +19% | −0,22 |
> | 2209 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+253% · −44,9%** | +52% · −9,1% | +30% | −6,5% | 2,3 | 67 d | −8,3% | +26% | 0,24 |
> | 2210 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+235% · −39,2%** | +48% · −7,5% | +29% | −4,7% | 2,7 | 122 d | −4,4% | +17% | 0,17 |
> | 2211 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+190% · −39,8%** | +54% · −10,6% | +32% | −8,4% | 2,9 | 74 d | −9,2% | +26% | 0,07 |
> | 2212 | ADX ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+226% · −49,6%** | +50% · −10,6% | +34% | −10,0% | 2,6 | 106 d | −5,2% | +27% | 0,21 |
> | 2213 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+241% · −55,6%** | +49% · −11,9% | +32% | −6,8% | 3,1 | 78 d | −9,1% | +19% | 0,22 |
> | 2214 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+310% · −47,3%** | +60% · −9,0% | +34% | −7,2% | 2,8 | 97 d | −6,4% | +24% | 0,27 |
> | 2215 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+217% · −37,9%** | +44% · −7,4% | +29% | −6,6% | 2,6 | 92 d | −6,1% | +22% | 0,12 |
> | 2216 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+131% · −46,7%** | +34% · −9,1% | +25% | −4,6% | 2,7 | 85 d | −6,9% | +15% | 0,06 |
> | 2217 | ADX ·ADX + Donchian ·ADX + Bollinger ·ADX + Tendência ·ADX | **+326% · −55,4%** | +73% · −15,1% | +39% | −7,6% | 4,0 | 97 d | −9,0% | +25% | 0,34 |
> | 2218 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+253% · −50,8%** | +52% · −9,4% | +30% | −4,2% | 2,5 | 80 d | −7,2% | +22% | 0,17 |
> | 2219 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+239% · −50,1%** | +49% · −9,1% | +30% | −6,3% | 2,8 | 122 d | −4,7% | +20% | 0,20 |
> | 2220 | VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+195% · −34,8%** | +42% · −6,8% | +28% | −9,4% | 2,5 | 104 d | −5,2% | +22% | 0,23 |

> [!example]- Combinações 2221 a 2250 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2221 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+217% · −38,9%** | +45% · −8,0% | +29% | −8,5% | 2,4 | 76 d | −7,3% | +20% | 0,12 |
> | 2222 | Donchian ·ADX + MACD ·ADX + Pullback ·PUL | **+151% · −30,5%** | +53% · −10,7% | +33% | −6,5% | 3,5 | 101 d | −7,7% | +21% | 0,12 |
> | 2223 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+240% · −59,8%** | +55% · −13,7% | +34% | −5,9% | 3,4 | 79 d | −10,0% | +20% | 0,23 |
> | 2224 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+163% · −39,0%** | +40% · −7,5% | +25% | −4,3% | 2,3 | 80 d | −6,5% | +22% | 0,04 |
> | 2225 | ADX ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+324% · −54,6%** | +64% · −10,7% | +37% | −7,9% | 2,7 | 67 d | −9,5% | +30% | 0,29 |
> | 2226 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+249% · −53,9%** | +56% · −10,6% | +35% | −7,2% | 2,7 | 76 d | −8,4% | +30% | 0,11 |
> | 2227 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+220% · −42,1%** | +48% · −8,3% | +30% | −5,0% | 3,0 | 122 d | −5,5% | +24% | 0,02 |
> | 2228 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+177% · −38,0%** | +40% · −6,8% | +27% | −4,5% | 1,6 | 72 d | −5,8% | +19% | 0,04 |
> | 2229 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+235% · −41,4%** | +48% · −8,2% | +29% | −5,9% | 2,4 | 112 d | −4,2% | +19% | 0,24 |
> | 2230 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+220% · −66,2%** | +50% · −14,5% | +32% | −5,9% | 3,7 | 83 d | −9,8% | +13% | 0,25 |
> | 2231 | ADX ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+248% · −63,9%** | +53% · −15,2% | +31% | −7,3% | 2,4 | 65 d | −9,2% | +19% | 0,27 |
> | 2232 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+242% · −52,6%** | +52% · −11,2% | +34% | −8,4% | 2,9 | 122 d | −5,1% | +22% | 0,24 |
> | 2233 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+188% · −37,3%** | +48% · −8,8% | +29% | −4,5% | 1,7 | 75 d | −5,4% | +19% | 0,11 |
> | 2234 | Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+235% · −51,7%** | +62% · −14,0% | +36% | −6,8% | 3,9 | 83 d | −10,4% | +18% | 0,35 |
> | 2235 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+309% · −51,7%** | +65% · −10,9% | +37% | −8,4% | 2,6 | 65 d | −9,9% | +30% | 0,28 |
> | 2236 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+226% · −60,4%** | +50% · −13,7% | +32% | −4,7% | 3,8 | 91 d | −9,3% | +15% | 0,13 |
> | 2237 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+175% · −35,3%** | +39% · −5,7% | +27% | −3,7% | 2,5 | 91 d | −6,1% | +21% | −0,03 |
> | 2238 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+147% · −46,2%** | +37% · −9,3% | +27% | −7,0% | 3,3 | 120 d | −6,5% | +14% | 0,04 |
> | 2239 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+249% · −50,5%** | +52% · −10,4% | +30% | −5,4% | 2,5 | 76 d | −7,6% | +21% | 0,27 |
> | 2240 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+266% · −51,9%** | +52% · −10,5% | +33% | −7,6% | 2,5 | 67 d | −8,9% | +24% | 0,31 |
> | 2241 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+155% · −45,5%** | +37% · −9,9% | +27% | −7,0% | 2,5 | 103 d | −5,1% | +19% | 0,06 |
> | 2242 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+131% · −27,7%** | +47% · −9,1% | +32% | −11,7% | 2,9 | 107 d | −6,1% | +20% | 0,20 |
> | 2243 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+185% · −34,0%** | +51% · −8,6% | +33% | −6,5% | 2,0 | 81 d | −5,6% | +21% | 0,04 |
> | 2244 | ADX ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+144% · −35,7%** | +41% · −8,2% | +25% | −4,9% | 1,8 | 87 d | −4,2% | +19% | 0,10 |
> | 2245 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+276% · −39,4%** | +54% · −7,9% | +34% | −6,3% | 3,1 | 89 d | −8,0% | +29% | 0,16 |
> | 2246 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+266% · −50,3%** | +54% · −10,3% | +32% | −6,6% | 3,2 | 76 d | −9,8% | +18% | 0,21 |
> | 2247 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+156% · −35,9%** | +39% · −7,2% | +27% | −8,8% | 2,4 | 81 d | −6,7% | +21% | 0,09 |
> | 2248 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+163% · −45,3%** | +46% · −11,2% | +31% | −5,4% | 2,4 | 72 d | −8,2% | +21% | 0,09 |
> | 2249 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+224% · −33,9%** | +46% · −5,9% | +30% | −3,2% | 2,6 | 122 d | −4,1% | +19% | 0,04 |
> | 2250 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL | **+214% · −49,9%** | +57% · −13,6% | +34% | −5,5% | 4,0 | 91 d | −9,8% | +15% | 0,23 |

> [!example]- Combinações 2251 a 2280 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2251 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+207% · −44,6%** | +48% · −9,5% | +32% | −8,4% | 3,0 | 89 d | −7,6% | +24% | 0,21 |
> | 2252 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+196% · −36,0%** | +44% · −7,3% | +30% | −7,3% | 2,1 | 72 d | −7,2% | +21% | 0,03 |
> | 2253 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+168% · −31,2%** | +45% · −7,4% | +26% | −8,9% | 3,0 | 91 d | −7,5% | +17% | 0,13 |
> | 2254 | BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+236% · −47,1%** | +48% · −9,7% | +30% | −6,0% | 2,5 | 72 d | −8,4% | +19% | 0,22 |
> | 2255 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+251% · −43,2%** | +53% · −8,9% | +32% | −8,3% | 2,7 | 71 d | −9,2% | +28% | 0,11 |
> | 2256 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+253% · −45,0%** | +55% · −9,2% | +33% | −5,3% | 2,5 | 76 d | −7,8% | +27% | 0,12 |
> | 2257 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Tendência ·ADX | **+275% · −53,9%** | +55% · −10,9% | +36% | −7,3% | 3,4 | 122 d | −6,3% | +22% | 0,18 |
> | 2258 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+265% · −46,5%** | +53% · −9,9% | +30% | −9,4% | 3,5 | 91 d | −8,7% | +17% | 0,21 |
> | 2259 | Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+208% · −43,2%** | +54% · −11,7% | +35% | −9,0% | 3,2 | 83 d | −8,7% | +21% | 0,36 |
> | 2260 | ADX ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+232% · −45,1%** | +60% · −11,1% | +38% | −9,1% | 2,0 | 67 d | −7,5% | +25% | 0,19 |
> | 2261 | IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+156% · −23,2%** | +53% · −7,3% | +36% | −8,3% | 2,4 | 92 d | −5,6% | +21% | 0,18 |
> | 2262 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+197% · −37,5%** | +42% · −7,2% | +29% | −8,1% | 2,4 | 84 d | −6,1% | +22% | 0,25 |
> | 2263 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+189% · −41,9%** | +43% · −8,3% | +27% | −3,9% | 2,9 | 122 d | −5,2% | +20% | 0,02 |
> | 2264 | BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+182% · −51,1%** | +51% · −14,1% | +34% | −8,3% | 3,3 | 83 d | −9,0% | +16% | 0,34 |
> | 2265 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+266% · −46,9%** | +66% · −11,9% | +38% | −6,1% | 2,4 | 67 d | −8,9% | +30% | 0,28 |
> | 2266 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+171% · −43,4%** | +41% · −9,0% | +28% | −9,9% | 3,2 | 128 d | −5,5% | +17% | 0,20 |
> | 2267 | Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+109% · −20,3%** | +33% · −4,6% | +23% | −6,2% | 2,2 | 102 d | −4,2% | +16% | 0,01 |
> | 2268 | Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+230% · −37,1%** | +57% · −9,5% | +30% | −7,5% | 3,5 | 83 d | −9,5% | +19% | 0,25 |
> | 2269 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+250% · −63,5%** | +52% · −15,0% | +31% | −6,0% | 2,5 | 74 d | −8,3% | +20% | 0,21 |
> | 2270 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+219% · −36,0%** | +55% · −8,3% | +35% | −5,9% | 2,9 | 122 d | −5,2% | +22% | 0,10 |
> | 2271 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+280% · −55,6%** | +59% · −11,6% | +36% | −7,6% | 3,5 | 119 d | −7,1% | +27% | 0,13 |
> | 2272 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+189% · −44,7%** | +49% · −10,8% | +33% | −7,1% | 3,7 | 130 d | −6,2% | +21% | 0,06 |
> | 2273 | Donchian ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+171% · −36,0%** | +58% · −12,5% | +36% | −6,3% | 3,8 | 90 d | −9,7% | +20% | 0,17 |
> | 2274 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+323% · −53,4%** | +66% · −11,4% | +35% | −6,9% | 2,6 | 65 d | −10,0% | +29% | 0,27 |
> | 2275 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+267% · −57,2%** | +57% · −11,6% | +37% | −9,6% | 3,0 | 122 d | −5,4% | +24% | 0,35 |
> | 2276 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+237% · −60,6%** | +54% · −14,1% | +34% | −5,8% | 3,5 | 83 d | −9,6% | +19% | 0,23 |
> | 2277 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+295% · −46,4%** | +59% · −10,2% | +34% | −10,2% | 2,9 | 74 d | −9,4% | +31% | 0,31 |
> | 2278 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+206% · −38,7%** | +44% · −7,1% | +29% | −5,6% | 2,4 | 122 d | −3,2% | +21% | 0,11 |
> | 2279 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+268% · −51,6%** | +68% · −12,9% | +40% | −7,1% | 2,6 | 67 d | −9,6% | +30% | 0,25 |
> | 2280 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+227% · −44,1%** | +49% · −9,0% | +32% | −8,1% | 2,3 | 106 d | −4,4% | +25% | 0,21 |

> [!example]- Combinações 2281 a 2310 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2281 | MACD ·ADX + Rompe 200 ·ROM | **+49% · −13,4%** | +31% · −6,0% | +24% | −9,6% | 1,9 | 95 d | −3,7% | +22% | 0,06 |
> | 2282 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+233% · −32,5%** | +45% · −5,3% | +30% | −5,5% | 3,1 | 92 d | −7,6% | +23% | 0,02 |
> | 2283 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+165% · −56,0%** | +47% · −15,8% | +33% | −7,9% | 3,2 | 78 d | −9,5% | +18% | 0,20 |
> | 2284 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+258% · −40,3%** | +50% · −7,7% | +29% | −3,9% | 3,1 | 122 d | −5,8% | +23% | 0,06 |
> | 2285 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+186% · −33,0%** | +49% · −7,7% | +31% | −5,0% | 2,8 | 122 d | −5,0% | +22% | 0,10 |
> | 2286 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+269% · −59,0%** | +57% · −13,0% | +35% | −6,3% | 3,5 | 83 d | −9,4% | +19% | 0,27 |
> | 2287 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+222% · −45,5%** | +51% · −9,8% | +32% | −10,2% | 2,9 | 83 d | −8,0% | +29% | 0,28 |
> | 2288 | Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+242% · −44,0%** | +52% · −9,1% | +34% | −9,4% | 2,9 | 83 d | −7,9% | +29% | 0,33 |
> | 2289 | GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+190% · −37,5%** | +48% · −9,4% | +28% | −7,7% | 2,3 | 72 d | −7,7% | +22% | 0,22 |
> | 2290 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+225% · −42,8%** | +55% · −10,9% | +32% | −7,1% | 1,6 | 67 d | −6,5% | +20% | 0,29 |
> | 2291 | Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+111% · −20,8%** | +34% · −4,6% | +23% | −6,1% | 2,1 | 102 d | −3,8% | +16% | 0,04 |
> | 2292 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+232% · −47,5%** | +51% · −10,6% | +33% | −12,0% | 2,3 | 67 d | −8,4% | +28% | 0,26 |
> | 2293 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+201% · −43,5%** | +46% · −8,4% | +32% | −7,9% | 3,0 | 96 d | −7,0% | +28% | 0,17 |
> | 2294 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+196% · −52,4%** | +46% · −12,1% | +29% | −9,5% | 3,7 | 120 d | −7,3% | +15% | 0,20 |
> | 2295 | GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+184% · −34,4%** | +41% · −7,1% | +26% | −7,5% | 2,5 | 81 d | −7,1% | +21% | 0,06 |
> | 2296 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+216% · −54,8%** | +50% · −12,9% | +30% | −12,1% | 2,5 | 67 d | −9,3% | +20% | 0,27 |
> | 2297 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+133% · −30,0%** | +33% · −5,5% | +25% | −5,4% | 2,3 | 99 d | −5,0% | +20% | 0,04 |
> | 2298 | VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+217% · −43,1%** | +44% · −9,1% | +29% | −8,0% | 2,5 | 94 d | −6,1% | +21% | 0,24 |
> | 2299 | Donchian ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+168% · −26,5%** | +56% · −9,2% | +34% | −4,9% | 3,7 | 102 d | −8,4% | +22% | 0,07 |
> | 2300 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+229% · −62,6%** | +54% · −13,7% | +33% | −9,0% | 3,5 | 83 d | −9,6% | +17% | 0,33 |
> | 2301 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+248% · −48,2%** | +55% · −10,2% | +34% | −6,5% | 2,5 | 74 d | −8,3% | +30% | 0,24 |
> | 2302 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+186% · −33,1%** | +48% · −8,0% | +31% | −9,0% | 2,6 | 72 d | −8,9% | +25% | 0,23 |
> | 2303 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+244% · −58,6%** | +54% · −13,9% | +34% | −6,0% | 2,9 | 72 d | −10,2% | +19% | 0,15 |
> | 2304 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+117% · −35,7%** | +37% · −8,4% | +26% | −5,0% | 2,7 | 91 d | −6,8% | +15% | 0,10 |
> | 2305 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+205% · −46,4%** | +48% · −9,6% | +32% | −8,3% | 2,9 | 81 d | −8,4% | +25% | 0,15 |
> | 2306 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+146% · −39,0%** | +38% · −8,0% | +27% | −10,4% | 2,6 | 81 d | −7,4% | +24% | 0,02 |
> | 2307 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+174% · −50,4%** | +42% · −10,0% | +30% | −6,3% | 2,7 | 81 d | −7,8% | +23% | 0,08 |
> | 2308 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+219% · −45,4%** | +50% · −10,0% | +31% | −8,1% | 2,5 | 72 d | −8,8% | +22% | 0,10 |
> | 2309 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+210% · −49,8%** | +48% · −11,2% | +32% | −8,4% | 2,9 | 81 d | −8,6% | +20% | 0,24 |
> | 2310 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+311% · −47,6%** | +61% · −9,3% | +32% | −4,4% | 3,1 | 97 d | −7,3% | +23% | 0,16 |

> [!example]- Combinações 2311 a 2340 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2311 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+219% · −53,1%** | +52% · −11,2% | +31% | −8,0% | 2,6 | 80 d | −7,7% | +22% | 0,26 |
> | 2312 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+219% · −42,0%** | +46% · −8,0% | +29% | −6,3% | 1,8 | 76 d | −5,8% | +19% | 0,12 |
> | 2313 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+258% · −51,8%** | +55% · −11,9% | +31% | −13,4% | 2,8 | 70 d | −10,3% | +22% | 0,38 |
> | 2314 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+368% · −59,3%** | +69% · −12,8% | +41% | −9,1% | 3,9 | 119 d | −8,1% | +29% | 0,41 |
> | 2315 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+256% · −41,0%** | +53% · −8,7% | +32% | −6,5% | 3,3 | 111 d | −7,2% | +22% | 0,15 |
> | 2316 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+166% · −40,4%** | +46% · −9,3% | +30% | −6,7% | 2,8 | 122 d | −5,2% | +23% | 0,07 |
> | 2317 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+284% · −50,6%** | +60% · −10,5% | +34% | −6,2% | 2,6 | 67 d | −9,8% | +25% | 0,22 |
> | 2318 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+190% · −38,2%** | +42% · −7,2% | +26% | −5,6% | 1,7 | 76 d | −5,7% | +19% | 0,06 |
> | 2319 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+199% · −38,8%** | +41% · −7,9% | +27% | −3,6% | 3,0 | 92 d | −7,6% | +20% | 0,01 |
> | 2320 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+223% · −40,3%** | +54% · −10,7% | +32% | −11,1% | 2,3 | 72 d | −7,9% | +22% | 0,30 |
> | 2321 | MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+153% · −37,9%** | +44% · −9,5% | +32% | −10,7% | 2,7 | 101 d | −6,1% | +26% | 0,27 |
> | 2322 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+221% · −42,9%** | +49% · −9,1% | +33% | −10,2% | 2,1 | 67 d | −7,9% | +21% | 0,26 |
> | 2323 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+191% · −36,5%** | +49% · −8,5% | +28% | −4,1% | 1,6 | 75 d | −5,6% | +19% | 0,14 |
> | 2324 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+205% · −36,5%** | +44% · −6,4% | +29% | −4,3% | 2,4 | 122 d | −3,8% | +19% | 0,09 |
> | 2325 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+141% · −24,7%** | +40% · −5,9% | +27% | −5,1% | 2,7 | 115 d | −5,6% | +21% | 0,04 |
> | 2326 | IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+168% · −25,4%** | +55% · −7,9% | +34% | −6,8% | 2,6 | 106 d | −5,8% | +24% | 0,20 |
> | 2327 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+187% · −62,2%** | +46% · −14,6% | +29% | −6,5% | 2,4 | 77 d | −7,5% | +19% | 0,12 |
> | 2328 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+186% · −52,6%** | +53% · −14,5% | +33% | −7,4% | 3,2 | 76 d | −10,5% | +17% | 0,20 |
> | 2329 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+251% · −52,4%** | +56% · −10,2% | +35% | −7,2% | 2,7 | 76 d | −8,5% | +30% | 0,13 |
> | 2330 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+188% · −43,5%** | +45% · −8,7% | +28% | −5,6% | 2,3 | 76 d | −7,2% | +25% | 0,09 |
> | 2331 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+116% · −38,0%** | +32% · −6,9% | +24% | −5,6% | 2,5 | 91 d | −6,3% | +16% | −0,00 |
> | 2332 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+140% · −26,8%** | +40% · −6,7% | +27% | −6,3% | 2,9 | 111 d | −6,1% | +20% | 0,09 |
> | 2333 | 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+109% · −18,2%** | +40% · −5,3% | +25% | −5,5% | 2,2 | 102 d | −4,5% | +17% | 0,17 |
> | 2334 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+186% · −45,7%** | +42% · −9,9% | +26% | −11,9% | 2,2 | 75 d | −7,3% | +23% | 0,19 |
> | 2335 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+170% · −47,1%** | +41% · −10,3% | +28% | −13,1% | 2,0 | 73 d | −6,8% | +25% | 0,10 |
> | 2336 | 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+157% · −29,1%** | +55% · −9,4% | +38% | −9,7% | 2,7 | 92 d | −6,8% | +23% | 0,21 |
> | 2337 | VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+166% · −36,9%** | +45% · −9,4% | +26% | −10,1% | 2,9 | 83 d | −8,1% | +16% | 0,25 |
> | 2338 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+116% · −30,0%** | +30% · −5,5% | +21% | −7,3% | 2,8 | 150 d | −4,1% | +14% | 0,07 |
> | 2339 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+181% · −39,1%** | +42% · −7,3% | +29% | −6,9% | 2,5 | 122 d | −4,0% | +23% | 0,09 |
> | 2340 | Donchian ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+205% · −38,4%** | +54% · −9,1% | +35% | −7,6% | 3,3 | 89 d | −8,8% | +29% | 0,10 |

> [!example]- Combinações 2341 a 2370 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2341 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+212% · −53,0%** | +48% · −11,4% | +30% | −4,9% | 2,8 | 122 d | −5,3% | +18% | 0,15 |
> | 2342 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+117% · −36,7%** | +37% · −9,4% | +25% | −9,1% | 3,0 | 120 d | −6,1% | +16% | −0,02 |
> | 2343 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+145% · −37,7%** | +41% · −9,7% | +30% | −7,7% | 2,2 | 82 d | −6,4% | +23% | 0,14 |
> | 2344 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+149% · −30,6%** | +40% · −7,3% | +27% | −9,6% | 2,4 | 106 d | −5,2% | +19% | 0,15 |
> | 2345 | BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+196% · −51,9%** | +51% · −13,9% | +32% | −5,8% | 3,1 | 74 d | −10,6% | +15% | 0,19 |
> | 2346 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+277% · −45,9%** | +55% · −9,1% | +32% | −5,7% | 2,6 | 76 d | −8,4% | +27% | 0,17 |
> | 2347 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+293% · −57,0%** | +59% · −12,1% | +36% | −7,5% | 3,6 | 127 d | −6,8% | +26% | 0,22 |
> | 2348 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+175% · −32,8%** | +40% · −6,2% | +26% | −4,1% | 2,3 | 122 d | −3,4% | +19% | 0,07 |
> | 2349 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+147% · −40,3%** | +36% · −8,1% | +25% | −9,5% | 2,0 | 73 d | −6,9% | +22% | 0,01 |
> | 2350 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+268% · −52,1%** | +54% · −10,5% | +33% | −5,2% | 3,4 | 128 d | −6,3% | +23% | 0,10 |
> | 2351 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+216% · −37,5%** | +45% · −7,5% | +29% | −7,0% | 2,5 | 78 d | −7,8% | +23% | 0,17 |
> | 2352 | Donchian ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+234% · −37,2%** | +59% · −9,5% | +37% | −9,3% | 3,0 | 91 d | −7,9% | +28% | 0,38 |
> | 2353 | Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+109% · −18,2%** | +33% · −3,8% | +23% | −4,4% | 1,8 | 94 d | −4,1% | +15% | −0,02 |
> | 2354 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+275% · −67,9%** | +57% · −16,6% | +34% | −8,5% | 2,4 | 65 d | −9,7% | +24% | 0,37 |
> | 2355 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+146% · −34,2%** | +36% · −5,8% | +24% | −3,3% | 1,6 | 75 d | −5,7% | +19% | 0,02 |
> | 2356 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+191% · −48,3%** | +45% · −10,8% | +31% | −12,8% | 2,0 | 67 d | −7,8% | +23% | 0,31 |
> | 2357 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+207% · −37,0%** | +45% · −7,3% | +27% | −9,8% | 2,6 | 83 d | −7,2% | +19% | 0,15 |
> | 2358 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+168% · −47,5%** | +41% · −10,3% | +28% | −10,3% | 2,0 | 72 d | −7,2% | +18% | 0,24 |
> | 2359 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+258% · −42,5%** | +53% · −9,1% | +32% | −9,2% | 3,3 | 99 d | −8,1% | +26% | 0,10 |
> | 2360 | Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+153% · −23,4%** | +51% · −8,0% | +28% | −3,4% | 3,4 | 100 d | −8,2% | +19% | −0,02 |
> | 2361 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+315% · −47,5%** | +61% · −9,5% | +32% | −4,1% | 3,0 | 97 d | −7,2% | +24% | 0,14 |
> | 2362 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+187% · −55,0%** | +45% · −12,1% | +31% | −7,0% | 2,9 | 78 d | −8,9% | +17% | 0,20 |
> | 2363 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+233% · −46,9%** | +53% · −9,6% | +33% | −7,3% | 2,6 | 77 d | −8,1% | +28% | 0,14 |
> | 2364 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+182% · −36,9%** | +42% · −6,8% | +29% | −6,2% | 2,5 | 122 d | −4,2% | +21% | 0,01 |
> | 2365 | Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+116% · −30,5%** | +45% · −9,9% | +32% | −10,7% | 2,7 | 90 d | −7,1% | +28% | 0,23 |
> | 2366 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+189% · −42,3%** | +45% · −9,1% | +30% | −10,1% | 2,8 | 92 d | −7,1% | +25% | 0,12 |
> | 2367 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+199% · −35,9%** | +44% · −7,3% | +30% | −7,3% | 2,0 | 72 d | −7,3% | +20% | 0,09 |
> | 2368 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+154% · −31,6%** | +38% · −5,8% | +27% | −5,7% | 2,4 | 87 d | −6,3% | +22% | −0,00 |
> | 2369 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+171% · −31,1%** | +45% · −7,2% | +27% | −4,3% | 2,9 | 131 d | −4,8% | +17% | 0,03 |
> | 2370 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+183% · −46,8%** | +46% · −9,3% | +31% | −9,6% | 2,7 | 76 d | −8,7% | +26% | 0,10 |

> [!example]- Combinações 2371 a 2400 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2371 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+240% · −57,6%** | +52% · −11,9% | +33% | −5,9% | 2,9 | 122 d | −5,6% | +23% | 0,17 |
> | 2372 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+208% · −52,8%** | +48% · −11,5% | +32% | −9,5% | 2,9 | 83 d | −8,2% | +19% | 0,36 |
> | 2373 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+195% · −37,4%** | +42% · −7,2% | +29% | −7,9% | 2,6 | 103 d | −5,9% | +22% | 0,22 |
> | 2374 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+244% · −50,7%** | +52% · −10,1% | +34% | −7,2% | 2,9 | 122 d | −5,7% | +22% | 0,15 |
> | 2375 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+118% · −33,9%** | +36% · −8,4% | +26% | −4,6% | 2,3 | 82 d | −6,8% | +18% | −0,09 |
> | 2376 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+304% · −39,8%** | +56% · −7,7% | +33% | −3,8% | 3,6 | 130 d | −6,4% | +21% | 0,04 |
> | 2377 | VWAP ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+214% · −44,7%** | +56% · −11,5% | +33% | −9,8% | 2,9 | 73 d | −10,0% | +20% | 0,36 |
> | 2378 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+156% · −34,3%** | +42% · −8,6% | +27% | −4,7% | 2,5 | 72 d | −8,8% | +20% | −0,00 |
> | 2379 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+195% · −46,9%** | +52% · −11,1% | +34% | −8,3% | 2,9 | 122 d | −5,6% | +25% | 0,16 |
> | 2380 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+204% · −40,6%** | +44% · −7,6% | +27% | −5,9% | 1,5 | 72 d | −6,0% | +17% | 0,15 |
> | 2381 | MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+140% · −28,5%** | +39% · −6,5% | +27% | −9,2% | 2,2 | 99 d | −4,9% | +17% | 0,20 |
> | 2382 | GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+214% · −40,9%** | +46% · −8,6% | +29% | −9,6% | 2,4 | 76 d | −7,8% | +22% | 0,23 |
> | 2383 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX | **+206% · −43,9%** | +45% · −8,7% | +29% | −8,0% | 2,8 | 78 d | −8,8% | +16% | 0,20 |
> | 2384 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+300% · −54,8%** | +57% · −11,3% | +34% | −5,2% | 3,8 | 129 d | −6,9% | +22% | 0,09 |
> | 2385 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+180% · −35,6%** | +41% · −7,0% | +29% | −10,2% | 2,3 | 112 d | −4,6% | +23% | 0,22 |
> | 2386 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+278% · −57,5%** | +56% · −11,8% | +33% | −6,6% | 2,5 | 77 d | −7,9% | +25% | 0,34 |
> | 2387 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+176% · −42,2%** | +43% · −8,6% | +27% | −8,6% | 3,1 | 110 d | −7,1% | +18% | 0,03 |
> | 2388 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+265% · −40,9%** | +51% · −8,7% | +32% | −8,2% | 2,2 | 67 d | −8,4% | +21% | 0,23 |
> | 2389 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+145% · −46,3%** | +37% · −10,1% | +25% | −10,3% | 2,0 | 72 d | −7,2% | +20% | 0,07 |
> | 2390 | Quinta ·PR2 ⚠️ | **+18% · −2,6%** | +18% · −2,6% | +17% | −3,7% | 2,5 | 176 d | −2,0% | +15% | — |
> | 2391 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+185% · −63,3%** | +45% · −15,1% | +30% | −6,5% | 2,5 | 82 d | −7,4% | +18% | 0,14 |
> | 2392 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+145% · −41,6%** | +38% · −8,5% | +26% | −10,2% | 2,2 | 83 d | −6,2% | +21% | 0,08 |
> | 2393 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+156% · −50,8%** | +39% · −10,3% | +28% | −5,9% | 2,6 | 83 d | −7,4% | +20% | 0,10 |
> | 2394 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+197% · −59,8%** | +47% · −14,0% | +31% | −4,5% | 3,1 | 81 d | −9,4% | +15% | 0,10 |
> | 2395 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Bollinger ·ADX | **+327% · −48,4%** | +62% · −10,3% | +34% | −6,4% | 3,2 | 120 d | −6,8% | +20% | 0,31 |
> | 2396 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Tendência ·ADX | **+244% · −47,9%** | +63% · −12,4% | +39% | −8,5% | 3,7 | 84 d | −10,4% | +20% | 0,41 |
> | 2397 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+195% · −36,8%** | +44% · −7,1% | +29% | −5,9% | 2,0 | 77 d | −6,5% | +23% | 0,08 |
> | 2398 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+169% · −45,0%** | +43% · −9,8% | +30% | −13,3% | 2,5 | 76 d | −8,1% | +26% | 0,20 |
> | 2399 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+157% · −36,8%** | +37% · −6,4% | +26% | −4,6% | 2,4 | 122 d | −4,1% | +20% | 0,01 |
> | 2400 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+113% · −24,4%** | +30% · −4,4% | +23% | −5,4% | 2,8 | 168 d | −3,8% | +17% | 0,04 |

> [!example]- Combinações 2401 a 2430 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2401 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+160% · −33,3%** | +44% · −6,8% | +29% | −4,9% | 2,6 | 91 d | −6,9% | +23% | −0,02 |
> | 2402 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+222% · −41,2%** | +46% · −7,7% | +29% | −6,4% | 1,7 | 76 d | −5,9% | +19% | 0,13 |
> | 2403 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+245% · −65,5%** | +55% · −15,9% | +35% | −7,2% | 3,6 | 83 d | −10,3% | +18% | 0,31 |
> | 2404 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+236% · −38,7%** | +49% · −6,2% | +30% | −4,7% | 2,5 | 72 d | −8,9% | +23% | 0,04 |
> | 2405 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+165% · −30,7%** | +45% · −7,3% | +26% | −8,7% | 2,9 | 91 d | −7,6% | +17% | 0,10 |
> | 2406 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+203% · −38,3%** | +43% · −6,9% | +29% | −4,9% | 2,9 | 122 d | −5,6% | +21% | −0,03 |
> | 2407 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+135% · −30,9%** | +38% · −7,3% | +26% | −11,0% | 2,9 | 153 d | −4,5% | +18% | 0,21 |
> | 2408 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+282% · −54,4%** | +62% · −11,2% | +38% | −8,9% | 3,5 | 83 d | −10,0% | +31% | 0,40 |
> | 2409 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+78% · −36,1%** | +29% · −8,5% | +22% | −4,4% | 2,5 | 91 d | −6,6% | +10% | 0,02 |
> | 2410 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+241% · −46,7%** | +53% · −9,0% | +30% | −3,7% | 3,2 | 110 d | −7,2% | +23% | 0,05 |
> | 2411 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+255% · −37,4%** | +50% · −6,4% | +33% | −8,2% | 2,8 | 82 d | −8,3% | +27% | 0,15 |
> | 2412 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+249% · −37,9%** | +50% · −7,7% | +33% | −5,4% | 2,7 | 122 d | −5,3% | +19% | 0,09 |
> | 2413 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+223% · −45,7%** | +50% · −10,0% | +31% | −8,1% | 2,4 | 72 d | −8,9% | +23% | 0,14 |
> | 2414 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+282% · −54,9%** | +59% · −11,0% | +36% | −7,6% | 3,4 | 127 d | −6,6% | +26% | 0,15 |
> | 2415 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+232% · −45,8%** | +52% · −9,8% | +34% | −11,7% | 2,8 | 91 d | −7,5% | +23% | 0,37 |
> | 2416 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+159% · −32,7%** | +45% · −7,6% | +29% | −5,1% | 2,4 | 122 d | −4,0% | +21% | 0,10 |
> | 2417 | BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+247% · −50,2%** | +60% · −13,0% | +36% | −7,7% | 3,3 | 78 d | −10,7% | +20% | 0,38 |
> | 2418 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+215% · −38,4%** | +47% · −8,0% | +31% | −9,7% | 3,3 | 120 d | −7,0% | +21% | 0,19 |
> | 2419 | GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+247% · −41,3%** | +60% · −9,9% | +36% | −8,0% | 3,0 | 76 d | −9,9% | +28% | 0,28 |
> | 2420 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+287% · −58,8%** | +59% · −12,9% | +36% | −8,7% | 3,5 | 119 d | −7,6% | +25% | 0,29 |
> | 2421 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+266% · −40,1%** | +54% · −7,3% | +33% | −6,1% | 2,6 | 73 d | −9,0% | +25% | 0,19 |
> | 2422 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+266% · −60,3%** | +57% · −13,5% | +35% | −6,2% | 3,4 | 83 d | −10,0% | +18% | 0,26 |
> | 2423 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+98% · −30,6%** | +28% · −5,6% | +23% | −8,6% | 2,6 | 176 d | −3,2% | +18% | 0,05 |
> | 2424 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+188% · −36,9%** | +50% · −8,7% | +33% | −6,0% | 2,4 | 122 d | −4,4% | +21% | 0,14 |
> | 2425 | GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+186% · −35,2%** | +41% · −7,0% | +26% | −7,5% | 2,4 | 81 d | −7,2% | +21% | 0,08 |
> | 2426 | ADX ·ADX + VWAP ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+257% · −54,6%** | +54% · −10,5% | +33% | −8,9% | 2,3 | 77 d | −7,3% | +23% | 0,31 |
> | 2427 | ADX ·ADX + Pullback ·PUL + Bollinger ·ADX | **+156% · −31,7%** | +54% · −9,9% | +30% | −5,8% | 2,9 | 122 d | −5,8% | +19% | 0,14 |
> | 2428 | GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+227% · −41,6%** | +59% · −10,5% | +38% | −8,1% | 2,7 | 72 d | −9,8% | +27% | 0,24 |
> | 2429 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+158% · −44,9%** | +47% · −11,5% | +31% | −8,5% | 3,0 | 95 d | −7,8% | +19% | 0,13 |
> | 2430 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+183% · −47,5%** | +42% · −10,5% | +27% | −12,7% | 2,2 | 73 d | −7,8% | +21% | 0,29 |

> [!example]- Combinações 2431 a 2460 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2431 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+157% · −37,9%** | +37% · −7,5% | +27% | −5,5% | 2,3 | 104 d | −5,3% | +21% | 0,04 |
> | 2432 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+242% · −54,6%** | +56% · −11,6% | +34% | −10,2% | 2,6 | 80 d | −8,0% | +24% | 0,33 |
> | 2433 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+148% · −39,0%** | +38% · −8,0% | +27% | −10,5% | 2,5 | 81 d | −7,5% | +23% | 0,05 |
> | 2434 | VWAP ·ADX + Donchian ·ADX + Bollinger ·ADX + Tendência ·ADX | **+238% · −46,3%** | +59% · −11,9% | +34% | −7,9% | 3,3 | 81 d | −10,2% | +18% | 0,38 |
> | 2435 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+216% · −38,7%** | +53% · −10,0% | +30% | −11,9% | 2,5 | 73 d | −8,8% | +21% | 0,30 |
> | 2436 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+62% · −32,8%** | +25% · −8,2% | +20% | −8,5% | 2,7 | 179 d | −3,4% | +12% | 0,02 |
> | 2437 | Donchian ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+256% · −39,8%** | +63% · −10,0% | +39% | −8,3% | 3,2 | 83 d | −9,5% | +34% | 0,28 |
> | 2438 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+213% · −40,4%** | +47% · −8,6% | +31% | −10,6% | 3,1 | 120 d | −6,6% | +21% | 0,33 |
> | 2439 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+159% · −30,5%** | +37% · −5,6% | +28% | −7,3% | 2,9 | 146 d | −4,7% | +19% | 0,01 |
> | 2440 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+167% · −39,1%** | +40% · −7,7% | +28% | −9,0% | 2,4 | 91 d | −6,3% | +19% | 0,05 |
> | 2441 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+291% · −48,8%** | +59% · −10,3% | +33% | −8,0% | 2,6 | 77 d | −8,3% | +24% | 0,34 |
> | 2442 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+275% · −67,8%** | +60% · −16,6% | +38% | −9,4% | 3,2 | 106 d | −7,4% | +25% | 0,39 |
> | 2443 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+278% · −71,4%** | +66% · −18,8% | +39% | −7,8% | 2,9 | 73 d | −10,7% | +23% | 0,42 |
> | 2444 | Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+251% · −33,2%** | +58% · −7,4% | +33% | −8,1% | 2,8 | 82 d | −8,3% | +25% | 0,21 |
> | 2445 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+260% · −41,9%** | +63% · −11,3% | +34% | −10,5% | 3,4 | 83 d | −10,2% | +25% | 0,35 |
> | 2446 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+202% · −44,6%** | +43% · −9,6% | +27% | −10,5% | 2,0 | 72 d | −7,4% | +22% | 0,12 |
> | 2447 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+151% · −33,3%** | +38% · −6,4% | +26% | −5,5% | 2,4 | 122 d | −4,2% | +21% | 0,02 |
> | 2448 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+262% · −61,5%** | +60% · −14,6% | +35% | −7,4% | 3,7 | 83 d | −11,1% | +17% | 0,28 |
> | 2449 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+268% · −36,8%** | +53% · −7,4% | +31% | −3,7% | 3,2 | 130 d | −5,9% | +20% | 0,08 |
> | 2450 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+116% · −36,0%** | +36% · −9,1% | +26% | −4,5% | 2,5 | 91 d | −6,7% | +17% | −0,13 |
> | 2451 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+134% · −33,6%** | +34% · −6,4% | +25% | −7,1% | 1,6 | 77 d | −5,7% | +17% | 0,00 |
> | 2452 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+170% · −33,8%** | +45% · −8,3% | +28% | −5,8% | 2,2 | 72 d | −8,2% | +18% | 0,06 |
> | 2453 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+186% · −32,5%** | +48% · −7,8% | +31% | −5,1% | 2,9 | 122 d | −5,8% | +19% | 0,03 |
> | 2454 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+172% · −48,5%** | +43% · −10,8% | +27% | −9,5% | 3,1 | 102 d | −7,5% | +16% | 0,12 |
> | 2455 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+220% · −35,9%** | +44% · −6,8% | +29% | −6,8% | 2,4 | 95 d | −6,3% | +23% | 0,18 |
> | 2456 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+169% · −34,5%** | +39% · −5,8% | +26% | −3,6% | 2,8 | 122 d | −5,5% | +21% | −0,01 |
> | 2457 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+164% · −32,9%** | +46% · −8,1% | +30% | −8,1% | 2,5 | 83 d | −7,3% | +25% | 0,08 |
> | 2458 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+213% · −51,9%** | +47% · −10,3% | +30% | −4,9% | 2,9 | 122 d | −5,8% | +19% | 0,07 |
> | 2459 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+223% · −41,2%** | +46% · −8,4% | +30% | −6,7% | 2,7 | 82 d | −8,2% | +27% | 0,12 |
> | 2460 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+199% · −51,5%** | +54% · −14,8% | +35% | −11,6% | 2,5 | 73 d | −9,0% | +23% | 0,27 |

> [!example]- Combinações 2461 a 2490 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2461 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+148% · −30,6%** | +35% · −5,5% | +24% | −8,4% | 2,8 | 172 d | −4,0% | +17% | 0,10 |
> | 2462 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+148% · −30,5%** | +53% · −10,3% | +34% | −8,7% | 2,3 | 72 d | −8,5% | +23% | 0,19 |
> | 2463 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+231% · −47,8%** | +51% · −9,4% | +32% | −5,2% | 2,0 | 67 d | −8,0% | +23% | 0,20 |
> | 2464 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+310% · −61,8%** | +65% · −13,8% | +37% | −5,8% | 3,7 | 119 d | −8,2% | +24% | 0,19 |
> | 2465 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+86% · −24,9%** | +30% · −6,1% | +24% | −9,5% | 2,6 | 174 d | −3,3% | +16% | 0,01 |
> | 2466 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+173% · −42,1%** | +49% · −10,8% | +30% | −4,9% | 3,1 | 122 d | −6,4% | +22% | 0,03 |
> | 2467 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+199% · −51,9%** | +45% · −10,6% | +31% | −7,7% | 2,5 | 83 d | −7,5% | +22% | 0,24 |
> | 2468 | Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+82% · −17,7%** | +28% · −4,2% | +23% | −3,9% | 2,7 | 171 d | −3,9% | +19% | −0,04 |
> | 2469 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+135% · −36,2%** | +35% · −7,1% | +25% | −8,2% | 1,6 | 73 d | −6,3% | +18% | 0,08 |
> | 2470 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+253% · −62,8%** | +53% · −14,5% | +31% | −6,1% | 2,4 | 74 d | −8,6% | +21% | 0,19 |
> | 2471 | VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+166% · −35,6%** | +38% · −6,9% | +26% | −5,6% | 2,5 | 100 d | −6,1% | +17% | 0,13 |
> | 2472 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Tendência ·ADX | **+218% · −58,8%** | +63% · −16,5% | +37% | −10,5% | 3,3 | 75 d | −12,8% | +18% | 0,41 |
> | 2473 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+161% · −30,8%** | +38% · −5,6% | +28% | −7,2% | 2,9 | 182 d | −4,4% | +18% | 0,05 |
> | 2474 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+198% · −33,0%** | +41% · −5,7% | +28% | −7,9% | 1,9 | 92 d | −5,1% | +15% | 0,09 |
> | 2475 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+223% · −31,9%** | +45% · −5,8% | +30% | −8,0% | 3,1 | 139 d | −5,5% | +21% | 0,16 |
> | 2476 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+249% · −63,2%** | +58% · −15,0% | +34% | −5,1% | 2,9 | 80 d | −9,4% | +21% | 0,23 |
> | 2477 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+196% · −38,1%** | +45% · −7,8% | +30% | −8,5% | 2,1 | 72 d | −7,8% | +22% | 0,21 |
> | 2478 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+109% · −15,5%** | +40% · −4,2% | +25% | −4,0% | 2,1 | 102 d | −4,7% | +15% | 0,10 |
> | 2479 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+193% · −40,8%** | +41% · −7,7% | +26% | −5,2% | 2,0 | 112 d | −3,7% | +20% | 0,09 |
> | 2480 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+184% · −38,4%** | +41% · −7,0% | +26% | −6,1% | 2,6 | 122 d | −5,1% | +17% | 0,16 |
> | 2481 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+253% · −41,6%** | +52% · −8,7% | +32% | −6,5% | 3,3 | 111 d | −7,7% | +21% | 0,10 |
> | 2482 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+120% · −33,8%** | +37% · −7,7% | +26% | −5,0% | 2,6 | 88 d | −7,3% | +16% | 0,09 |
> | 2483 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+186% · −46,3%** | +41% · −8,8% | +27% | −4,2% | 2,6 | 80 d | −8,3% | +17% | 0,09 |
> | 2484 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+157% · −44,9%** | +37% · −9,7% | +27% | −7,1% | 2,3 | 105 d | −5,4% | +20% | 0,13 |
> | 2485 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+305% · −50,1%** | +58% · −9,6% | +34% | −5,0% | 2,1 | 67 d | −8,6% | +26% | 0,27 |
> | 2486 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+173% · −47,4%** | +41% · −10,4% | +28% | −13,3% | 1,9 | 73 d | −7,0% | +24% | 0,17 |
> | 2487 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+151% · −26,9%** | +41% · −6,2% | +27% | −7,2% | 3,0 | 129 d | −5,6% | +18% | 0,10 |
> | 2488 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+207% · −40,1%** | +54% · −10,1% | +30% | −4,6% | 2,3 | 67 d | −9,3% | +25% | 0,18 |
> | 2489 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+264% · −51,4%** | +58% · −10,5% | +33% | −6,4% | 3,0 | 110 d | −7,2% | +26% | 0,15 |
> | 2490 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+139% · −29,5%** | +34% · −5,3% | +26% | −7,9% | 2,7 | 137 d | −4,4% | +17% | 0,07 |

> [!example]- Combinações 2491 a 2520 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2491 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+145% · −44,3%** | +36% · −9,5% | +25% | −6,8% | 2,9 | 129 d | −5,4% | +13% | 0,06 |
> | 2492 | VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+194% · −40,8%** | +42% · −8,1% | +29% | −8,9% | 2,5 | 105 d | −6,1% | +20% | 0,31 |
> | 2493 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+245% · −44,4%** | +51% · −8,0% | +31% | −5,2% | 3,1 | 128 d | −6,0% | +22% | 0,12 |
> | 2494 | ADX ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+191% · −39,4%** | +49% · −9,5% | +29% | −5,5% | 1,6 | 75 d | −6,1% | +20% | 0,18 |
> | 2495 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+161% · −38,5%** | +45% · −9,3% | +30% | −6,4% | 1,4 | 67 d | −6,8% | +20% | 0,04 |
> | 2496 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+169% · −30,9%** | +45% · −7,7% | +28% | −5,1% | 2,6 | 80 d | −8,5% | +18% | 0,12 |
> | 2497 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+203% · −33,9%** | +42% · −6,3% | +28% | −4,2% | 2,8 | 130 d | −5,0% | +18% | 0,01 |
> | 2498 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+158% · −37,1%** | +39% · −7,1% | +29% | −7,3% | 2,9 | 138 d | −4,9% | +22% | 0,11 |
> | 2499 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+166% · −26,9%** | +37% · −4,7% | +25% | −5,5% | 2,9 | 142 d | −4,9% | +16% | 0,06 |
> | 2500 | MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+200% · −34,9%** | +41% · −6,5% | +28% | −9,1% | 1,9 | 90 d | −5,3% | +16% | 0,22 |
> | 2501 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+144% · −35,7%** | +43% · −8,3% | +29% | −7,9% | 2,5 | 80 d | −7,9% | +23% | 0,13 |
> | 2502 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+166% · −37,0%** | +38% · −6,1% | +25% | −5,4% | 2,5 | 85 d | −7,3% | +18% | 0,05 |
> | 2503 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+237% · −46,1%** | +49% · −9,3% | +30% | −9,6% | 1,5 | 67 d | −6,8% | +19% | 0,33 |
> | 2504 | ADX ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+200% · −35,1%** | +51% · −8,9% | +31% | −6,9% | 2,6 | 122 d | −5,3% | +21% | 0,13 |
> | 2505 | ADX ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+213% · −34,5%** | +55% · −8,6% | +35% | −7,1% | 2,8 | 122 d | −5,8% | +22% | 0,10 |
> | 2506 | BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+170% · −53,0%** | +42% · −11,3% | +30% | −7,3% | 2,6 | 81 d | −8,4% | +21% | 0,19 |
> | 2507 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+191% · −42,3%** | +45% · −8,2% | +28% | −5,6% | 2,2 | 77 d | −7,3% | +26% | 0,08 |
> | 2508 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+217% · −44,2%** | +46% · −8,0% | +29% | −7,0% | 2,6 | 122 d | −5,2% | +17% | 0,21 |
> | 2509 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+128% · −39,9%** | +35% · −7,3% | +25% | −7,5% | 2,2 | 80 d | −7,1% | +16% | 0,04 |
> | 2510 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+172% · −38,3%** | +40% · −8,3% | +28% | −8,8% | 2,9 | 129 d | −5,5% | +18% | 0,08 |
> | 2511 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR | **+179% · −32,8%** | +49% · −8,3% | +31% | −8,3% | 3,4 | 128 d | −6,8% | +18% | 0,13 |
> | 2512 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+239% · −49,9%** | +54% · −10,1% | +30% | −4,4% | 3,1 | 119 d | −7,0% | +22% | 0,10 |
> | 2513 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+272% · −48,6%** | +60% · −10,2% | +37% | −8,4% | 2,5 | 76 d | −8,6% | +30% | 0,29 |
> | 2514 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+175% · −49,3%** | +44% · −10,1% | +28% | −7,1% | 2,7 | 77 d | −9,1% | +18% | 0,16 |
> | 2515 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+269% · −50,4%** | +56% · −10,2% | +32% | −4,4% | 3,7 | 128 d | −7,4% | +21% | 0,07 |
> | 2516 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+217% · −61,7%** | +53% · −14,6% | +33% | −7,7% | 2,5 | 80 d | −8,3% | +20% | 0,25 |
> | 2517 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+144% · −38,0%** | +42% · −9,9% | +25% | −10,5% | 2,2 | 73 d | −8,0% | +18% | 0,11 |
> | 2518 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+103% · −21,3%** | +32% · −4,4% | +25% | −7,0% | 1,7 | 87 d | −4,9% | +17% | 0,08 |
> | 2519 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Tendência ·ADX | **+327% · −55,7%** | +77% · −15,0% | +44% | −8,7% | 4,2 | 119 d | −9,2% | +27% | 0,40 |
> | 2520 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+199% · −58,6%** | +48% · −13,5% | +31% | −4,3% | 3,0 | 81 d | −9,8% | +16% | 0,08 |

> [!example]- Combinações 2521 a 2550 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2521 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+231% · −61,9%** | +51% · −14,3% | +33% | −6,0% | 2,1 | 72 d | −8,0% | +23% | 0,10 |
> | 2522 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+162% · −40,6%** | +46% · −10,0% | +30% | −7,4% | 1,4 | 67 d | −6,8% | +21% | 0,13 |
> | 2523 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+209% · −65,4%** | +49% · −15,9% | +31% | −6,6% | 3,2 | 120 d | −7,2% | +16% | 0,17 |
> | 2524 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+215% · −30,5%** | +52% · −7,1% | +33% | −7,4% | 3,3 | 92 d | −9,1% | +25% | 0,08 |
> | 2525 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+236% · −68,5%** | +53% · −17,3% | +34% | −7,9% | 3,2 | 120 d | −7,2% | +21% | 0,21 |
> | 2526 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+307% · −48,8%** | +63% · −9,7% | +38% | −8,1% | 3,1 | 122 d | −6,6% | +25% | 0,30 |
> | 2527 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+195% · −56,7%** | +46% · −12,2% | +33% | −8,6% | 2,7 | 78 d | −8,9% | +26% | 0,22 |
> | 2528 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+150% · −44,7%** | +38% · −8,8% | +27% | −7,0% | 3,1 | 120 d | −6,9% | +15% | 0,04 |
> | 2529 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+172% · −50,4%** | +43% · −10,5% | +28% | −7,1% | 2,8 | 83 d | −8,7% | +17% | 0,17 |
> | 2530 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+238% · −38,3%** | +48% · −7,5% | +29% | −4,7% | 2,5 | 122 d | −5,0% | +16% | 0,17 |
> | 2531 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+218% · −63,9%** | +52% · −15,1% | +34% | −7,4% | 3,0 | 76 d | −10,9% | +19% | 0,24 |
> | 2532 | Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+268% · −44,8%** | +54% · −8,9% | +31% | −8,7% | 2,9 | 83 d | −8,9% | +26% | 0,23 |
> | 2533 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+135% · −29,4%** | +38% · −5,6% | +25% | −2,2% | 2,8 | 120 d | −6,3% | +17% | −0,05 |
> | 2534 | GPS médias ·ADX + Pôr do sol ·POR | **+77% · −21,6%** | +44% · −10,3% | +27% | −7,2% | 2,6 | 73 d | −9,6% | +17% | −0,24 |
> | 2535 | ADX ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+186% · −44,8%** | +52% · −11,2% | +34% | −9,9% | 2,5 | 106 d | −6,0% | +29% | 0,17 |
> | 2536 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+192% · −50,0%** | +48% · −11,0% | +30% | −13,2% | 2,9 | 83 d | −8,9% | +19% | 0,32 |
> | 2537 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+258% · −54,3%** | +55% · −10,4% | +35% | −7,3% | 2,0 | 67 d | −8,3% | +26% | 0,26 |
> | 2538 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+261% · −52,4%** | +58% · −10,9% | +33% | −6,4% | 3,2 | 102 d | −8,0% | +26% | 0,16 |
> | 2539 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+218% · −47,9%** | +50% · −10,5% | +31% | −8,9% | 2,4 | 72 d | −9,3% | +21% | 0,28 |
> | 2540 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+132% · −42,8%** | +35% · −8,9% | +25% | −11,7% | 2,3 | 95 d | −6,0% | +20% | 0,12 |
> | 2541 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+239% · −38,5%** | +58% · −8,4% | +31% | −4,3% | 2,7 | 106 d | −6,6% | +20% | 0,11 |
> | 2542 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX + Onda ·VAI ⚠️ | **+218% · −50,6%** | +48% · −9,9% | +33% | −6,7% | 2,7 | 81 d | −8,7% | +26% | 0,13 |
> | 2543 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+314% · −36,1%** | +56% · −6,8% | +31% | −4,1% | 3,0 | 105 d | −7,6% | +22% | 0,09 |
> | 2544 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL | **+184% · −47,9%** | +53% · −13,3% | +31% | −10,9% | 3,5 | 102 d | −9,0% | +15% | 0,20 |
> | 2545 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+213% · −39,6%** | +45% · −8,1% | +29% | −7,9% | 2,5 | 78 d | −8,4% | +21% | 0,28 |
> | 2546 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+233% · −62,9%** | +55% · −15,2% | +34% | −7,1% | 3,4 | 83 d | −10,5% | +18% | 0,37 |
> | 2547 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+206% · −54,4%** | +56% · −14,8% | +37% | −9,8% | 3,1 | 83 d | −9,7% | +23% | 0,45 |
> | 2548 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+167% · −46,8%** | +39% · −10,3% | +26% | −8,8% | 2,2 | 72 d | −8,4% | +18% | 0,07 |
> | 2549 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+157% · −34,4%** | +37% · −6,5% | +24% | −5,5% | 1,7 | 73 d | −6,9% | +18% | 0,06 |
> | 2550 | BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX | **+128% · −52,5%** | +49% · −19,6% | +34% | −7,1% | 3,1 | 76 d | −11,6% | +12% | 0,18 |

> [!example]- Combinações 2551 a 2580 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2551 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+343% · −61,1%** | +65% · −13,6% | +37% | −7,0% | 3,5 | 83 d | −11,3% | +19% | 0,42 |
> | 2552 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+138% · −30,5%** | +34% · −5,5% | +22% | −3,9% | 2,4 | 85 d | −7,1% | +14% | 0,01 |
> | 2553 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+252% · −51,6%** | +55% · −11,4% | +35% | −10,5% | 2,9 | 83 d | −9,0% | +28% | 0,31 |
> | 2554 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+258% · −55,2%** | +58% · −12,0% | +33% | −7,3% | 3,0 | 102 d | −7,7% | +25% | 0,26 |
> | 2555 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+177% · −32,6%** | +48% · −8,3% | +31% | −8,3% | 3,4 | 120 d | −7,8% | +19% | 0,09 |
> | 2556 | Donchian ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+204% · −39,6%** | +55% · −10,3% | +35% | −9,1% | 2,9 | 83 d | −9,0% | +27% | 0,31 |
> | 2557 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+288% · −59,8%** | +60% · −12,9% | +34% | −7,3% | 2,5 | 76 d | −8,9% | +23% | 0,35 |
> | 2558 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+264% · −58,2%** | +59% · −12,2% | +36% | −7,5% | 2,2 | 67 d | −9,3% | +26% | 0,27 |
> | 2559 | BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+286% · −50,9%** | +56% · −10,2% | +35% | −8,4% | 2,9 | 80 d | −9,9% | +27% | 0,32 |
> | 2560 | VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+204% · −39,9%** | +45% · −8,3% | +28% | −11,2% | 2,5 | 83 d | −7,8% | +22% | 0,25 |
> | 2561 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+327% · −38,5%** | +60% · −7,9% | +35% | −4,1% | 3,5 | 122 d | −7,7% | +22% | 0,12 |
> | 2562 | Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+102% · −25,4%** | +40% · −8,1% | +25% | −4,2% | 2,9 | 111 d | −7,0% | +15% | 0,02 |
> | 2563 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+294% · −62,2%** | +57% · −14,4% | +34% | −5,5% | 3,5 | 83 d | −11,1% | +15% | 0,26 |
> | 2564 | 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+119% · −21,7%** | +36% · −4,8% | +27% | −5,8% | 2,3 | 101 d | −5,8% | +20% | −0,10 |
> | 2565 | VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+174% · −42,4%** | +51% · −11,6% | +33% | −12,8% | 2,6 | 75 d | −9,4% | +28% | 0,28 |
> | 2566 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+242% · −51,4%** | +54% · −12,0% | +34% | −11,3% | 2,4 | 72 d | −9,4% | +26% | 0,32 |
> | 2567 | Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+104% · −24,6%** | +40% · −7,7% | +25% | −4,2% | 2,7 | 103 d | −6,8% | +17% | 0,01 |
> | 2568 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+201% · −53,1%** | +44% · −10,9% | +27% | −4,5% | 2,5 | 94 d | −6,9% | +18% | 0,10 |
> | 2569 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+166% · −33,1%** | +46% · −8,2% | +30% | −8,0% | 2,3 | 91 d | −6,5% | +24% | 0,14 |
> | 2570 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+176% · −48,7%** | +43% · −10,8% | +28% | −6,5% | 2,4 | 72 d | −9,3% | +18% | −0,02 |
> | 2571 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+290% · −58,3%** | +58% · −12,7% | +36% | −7,4% | 3,7 | 127 d | −7,6% | +26% | 0,21 |
> | 2572 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+110% · −40,0%** | +30% · −8,4% | +23% | −7,8% | 2,3 | 111 d | −5,4% | +18% | 0,04 |
> | 2573 | Donchian ·ADX + Bollinger ·ADX + Onda ·VAI | **+183% · −26,8%** | +60% · −8,6% | +33% | −8,3% | 2,9 | 83 d | −9,2% | +27% | 0,20 |
> | 2574 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+182% · −39,2%** | +46% · −10,3% | +29% | −4,7% | 3,2 | 92 d | −9,0% | +19% | 0,06 |
> | 2575 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+205% · −42,6%** | +44% · −8,2% | +27% | −7,5% | 1,4 | 72 d | −6,6% | +19% | 0,23 |
> | 2576 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+199% · −41,2%** | +45% · −7,7% | +30% | −6,2% | 1,2 | 71 d | −6,5% | +17% | 0,05 |
> | 2577 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+239% · −63,3%** | +57% · −14,9% | +35% | −8,8% | 2,5 | 78 d | −8,6% | +26% | 0,35 |
> | 2578 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+206% · −45,5%** | +46% · −9,0% | +28% | −4,1% | 1,8 | 72 d | −7,5% | +23% | 0,03 |
> | 2579 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+196% · −36,9%** | +53% · −9,5% | +32% | −9,3% | 3,3 | 102 d | −8,7% | +25% | 0,14 |
> | 2580 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+136% · −30,0%** | +35% · −5,7% | +26% | −8,7% | 2,3 | 125 d | −4,3% | +21% | 0,07 |

> [!example]- Combinações 2581 a 2610 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2581 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+144% · −45,4%** | +38% · −9,9% | +27% | −11,9% | 2,4 | 81 d | −8,0% | +22% | 0,18 |
> | 2582 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+159% · −39,6%** | +40% · −7,7% | +30% | −10,0% | 2,1 | 94 d | −5,7% | +24% | 0,16 |
> | 2583 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+188% · −30,9%** | +48% · −6,6% | +31% | −7,9% | 2,4 | 72 d | −9,2% | +24% | 0,14 |
> | 2584 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+187% · −45,6%** | +44% · −9,9% | +30% | −12,6% | 2,2 | 72 d | −8,5% | +26% | 0,16 |
> | 2585 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+214% · −63,8%** | +49% · −15,2% | +31% | −5,9% | 3,3 | 128 d | −6,8% | +19% | 0,08 |
> | 2586 | VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+202% · −51,4%** | +48% · −11,3% | +32% | −9,8% | 2,6 | 83 d | −8,3% | +24% | 0,31 |
> | 2587 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+180% · −33,4%** | +41% · −6,4% | +29% | −8,9% | 2,2 | 114 d | −4,8% | +21% | 0,04 |
> | 2588 | Donchian ·ADX + GPS médias ·ADX + Tendência ·ADX | **+222% · −49,9%** | +76% · −18,1% | +43% | −7,7% | 3,9 | 82 d | −15,0% | +21% | 0,48 |
> | 2589 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+176% · −36,9%** | +49% · −9,6% | +31% | −9,4% | 3,2 | 120 d | −7,3% | +17% | 0,29 |
> | 2590 | 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+120% · −29,9%** | +36% · −7,2% | +27% | −7,3% | 2,2 | 99 d | −5,8% | +21% | 0,10 |
> | 2591 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+170% · −49,1%** | +41% · −11,0% | +28% | −14,1% | 1,9 | 73 d | −7,4% | +23% | 0,26 |
> | 2592 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+119% · −43,0%** | +39% · −11,6% | +27% | −15,0% | 2,1 | 73 d | −8,0% | +20% | 0,26 |
> | 2593 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+194% · −41,0%** | +43% · −8,3% | +29% | −11,6% | 2,2 | 73 d | −8,5% | +21% | 0,13 |
> | 2594 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+229% · −46,3%** | +48% · −10,3% | +30% | −10,4% | 2,0 | 67 d | −8,6% | +21% | 0,29 |
> | 2595 | Donchian ·ADX + IFR ·ADX + Onda ·VAI | **+194% · −30,1%** | +65% · −10,2% | +39% | −7,9% | 3,2 | 91 d | −9,3% | +29% | 0,33 |
> | 2596 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+198% · −35,1%** | +40% · −5,8% | +27% | −2,3% | 2,6 | 92 d | −7,5% | +21% | −0,07 |
> | 2597 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+191% · −43,2%** | +50% · −10,1% | +32% | −6,6% | 3,4 | 131 d | −6,7% | +23% | 0,03 |
> | 2598 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX | **+202% · −44,7%** | +72% · −16,2% | +40% | −6,4% | 2,9 | 77 d | −10,2% | +30% | 0,39 |
> | 2599 | GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+118% · −28,2%** | +37% · −6,5% | +26% | −6,9% | 2,3 | 81 d | −7,5% | +20% | −0,09 |
> | 2600 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+116% · −23,0%** | +30% · −3,7% | +21% | −5,8% | 2,7 | 171 d | −4,3% | +15% | 0,03 |
> | 2601 | Rompe 200 ·ROM | **+20% · −10,4%** | +20% · −10,4% | +17% | −10,7% | 1,2 | 94 d | −3,3% | +11% | — |
> | 2602 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+188% · −39,2%** | +41% · −7,9% | +27% | −8,2% | 1,8 | 73 d | −7,1% | +18% | 0,10 |
> | 2603 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+221% · −49,8%** | +49% · −10,7% | +30% | −11,2% | 2,5 | 74 d | −9,6% | +22% | 0,15 |
> | 2604 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+235% · −60,7%** | +52% · −13,7% | +33% | −5,9% | 2,0 | 72 d | −8,1% | +24% | 0,13 |
> | 2605 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+251% · −52,8%** | +55% · −10,9% | +33% | −6,6% | 3,0 | 122 d | −6,6% | +22% | 0,17 |
> | 2606 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+147% · −45,2%** | +37% · −9,9% | +25% | −10,5% | 1,9 | 73 d | −7,4% | +21% | 0,12 |
> | 2607 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+255% · −65,9%** | +56% · −15,9% | +36% | −8,3% | 2,0 | 67 d | −8,9% | +27% | 0,28 |
> | 2608 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+211% · −35,7%** | +45% · −7,2% | +29% | −6,5% | 2,4 | 80 d | −8,1% | +23% | 0,09 |
> | 2609 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+246% · −50,9%** | +51% · −9,7% | +34% | −6,2% | 3,0 | 125 d | −6,5% | +23% | 0,12 |
> | 2610 | VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+92% · −23,4%** | +37% · −7,8% | +27% | −10,0% | 2,7 | 129 d | −5,4% | +17% | 0,21 |

> [!example]- Combinações 2611 a 2640 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2611 | Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+140% · −29,7%** | +41% · −7,3% | +27% | −6,7% | 2,2 | 91 d | −6,4% | +24% | 0,07 |
> | 2612 | VWAP ·ADX + GPS médias ·ADX + Tendência ·ADX | **+144% · −47,3%** | +56% · −16,9% | +35% | −11,9% | 2,9 | 75 d | −11,0% | +18% | 0,33 |
> | 2613 | Donchian ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+249% · −50,3%** | +68% · −13,3% | +40% | −8,5% | 3,5 | 83 d | −11,8% | +29% | 0,38 |
> | 2614 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+153% · −53,1%** | +39% · −11,2% | +28% | −7,1% | 2,5 | 83 d | −7,9% | +18% | 0,14 |
> | 2615 | VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+106% · −29,4%** | +33% · −7,0% | +23% | −9,8% | 2,7 | 155 d | −4,8% | +14% | 0,15 |
> | 2616 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+187% · −45,3%** | +48% · −9,8% | +30% | −11,4% | 2,5 | 76 d | −9,2% | +25% | 0,10 |
> | 2617 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+247% · −50,3%** | +52% · −9,7% | +34% | −7,2% | 2,8 | 122 d | −6,1% | +21% | 0,17 |
> | 2618 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+253% · −50,5%** | +51% · −9,7% | +30% | −4,6% | 2,0 | 72 d | −8,1% | +22% | 0,13 |
> | 2619 | Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+73% · −20,6%** | +32% · −6,2% | +25% | −6,9% | 2,2 | 101 d | −5,6% | +24% | 0,15 |
> | 2620 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+193% · −40,9%** | +54% · −10,2% | +32% | −10,4% | 3,3 | 95 d | −9,2% | +22% | 0,31 |
> | 2621 | Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+119% · −20,0%** | +43% · −6,2% | +28% | −6,4% | 2,7 | 100 d | −7,3% | +23% | 0,09 |
> | 2622 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+159% · −33,6%** | +43% · −8,3% | +27% | −4,6% | 2,3 | 72 d | −9,1% | +22% | 0,07 |
> | 2623 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+174% · −47,8%** | +43% · −10,6% | +27% | −9,6% | 3,0 | 102 d | −7,9% | +17% | 0,13 |
> | 2624 | VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+181% · −49,5%** | +46% · −10,8% | +31% | −11,1% | 2,5 | 76 d | −9,3% | +25% | 0,26 |
> | 2625 | ADX ·ADX + Donchian ·ADX + Bollinger ·ADX + Onda ·VAI | **+264% · −42,6%** | +64% · −9,7% | +35% | −6,4% | 2,7 | 97 d | −7,3% | +23% | 0,22 |
> | 2626 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+303% · −62,5%** | +59% · −14,4% | +35% | −6,7% | 2,1 | 67 d | −9,2% | +24% | 0,29 |
> | 2627 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+244% · −72,3%** | +59% · −18,7% | +35% | −6,3% | 2,9 | 75 d | −11,0% | +19% | 0,25 |
> | 2628 | ADX ·ADX + GPS médias ·ADX + Tendência ·ADX | **+205% · −53,9%** | +73% · −19,7% | +42% | −8,9% | 2,9 | 76 d | −11,1% | +27% | 0,36 |
> | 2629 | VWAP ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+144% · −37,6%** | +43% · −9,4% | +32% | −9,7% | 2,9 | 131 d | −5,7% | +25% | 0,21 |
> | 2630 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+205% · −44,9%** | +44% · −9,7% | +27% | −10,7% | 1,9 | 73 d | −7,6% | +23% | 0,17 |
> | 2631 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+270% · −45,2%** | +52% · −8,9% | +32% | −7,1% | 1,4 | 66 d | −7,4% | +17% | 0,25 |
> | 2632 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL | **+282% · −41,4%** | +66% · −9,9% | +38% | −5,0% | 3,6 | 128 d | −7,6% | +23% | 0,14 |
> | 2633 | MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+140% · −24,6%** | +39% · −5,4% | +26% | −7,4% | 1,8 | 98 d | −4,8% | +16% | 0,11 |
> | 2634 | ADX ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+189% · −45,2%** | +52% · −10,1% | +34% | −8,7% | 2,5 | 122 d | −5,5% | +25% | 0,10 |
> | 2635 | VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+168% · −35,0%** | +38% · −6,7% | +26% | −5,8% | 2,4 | 100 d | −6,3% | +18% | 0,14 |
> | 2636 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+255% · −43,5%** | +54% · −8,4% | +33% | −6,3% | 2,1 | 65 d | −9,8% | +25% | 0,17 |
> | 2637 | Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+253% · −44,6%** | +63% · −11,1% | +34% | −9,5% | 2,8 | 74 d | −10,9% | +31% | 0,26 |
> | 2638 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+158% · −35,6%** | +37% · −6,1% | +23% | −3,8% | 1,9 | 122 d | −2,9% | +18% | 0,07 |
> | 2639 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+118% · −29,2%** | +30% · −5,3% | +21% | −7,4% | 2,6 | 176 d | −4,3% | +15% | 0,06 |
> | 2640 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+254% · −64,2%** | +59% · −15,5% | +37% | −9,0% | 3,3 | 83 d | −11,0% | +23% | 0,44 |

> [!example]- Combinações 2641 a 2670 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2641 | VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+177% · −47,2%** | +42% · −10,2% | +30% | −10,7% | 2,1 | 94 d | −5,8% | +26% | 0,23 |
> | 2642 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+104% · −23,6%** | +32% · −5,3% | +23% | −7,8% | 2,7 | 169 d | −4,8% | +15% | 0,05 |
> | 2643 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+143% · −64,4%** | +39% · −13,6% | +28% | −8,1% | 2,6 | 78 d | −9,3% | +12% | 0,21 |
> | 2644 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+101% · −19,3%** | +32% · −3,8% | +24% | −5,7% | 1,5 | 87 d | −4,9% | +16% | 0,01 |
> | 2645 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+202% · −46,7%** | +44% · −10,3% | +27% | −11,5% | 1,9 | 72 d | −7,9% | +21% | 0,26 |
> | 2646 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+103% · −37,9%** | +34% · −9,0% | +25% | −5,9% | 2,4 | 91 d | −7,3% | +16% | −0,03 |
> | 2647 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+358% · −55,2%** | +64% · −11,3% | +38% | −5,6% | 4,2 | 128 d | −8,7% | +25% | 0,12 |
> | 2648 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+136% · −46,0%** | +37% · −9,2% | +25% | −4,6% | 2,5 | 82 d | −8,3% | +15% | −0,03 |
> | 2649 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Onda ·VAI | **+197% · −39,5%** | +55% · −10,3% | +34% | −11,0% | 2,8 | 91 d | −8,5% | +22% | 0,32 |
> | 2650 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+294% · −54,2%** | +63% · −11,6% | +38% | −7,8% | 2,3 | 67 d | −9,9% | +28% | 0,24 |
> | 2651 | VWAP ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+202% · −37,7%** | +50% · −9,5% | +32% | −9,0% | 2,5 | 92 d | −7,3% | +23% | 0,30 |
> | 2652 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX | **+274% · −45,7%** | +68% · −10,6% | +39% | −7,3% | 3,2 | 119 d | −7,9% | +24% | 0,36 |
> | 2653 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+272% · −49,4%** | +57% · −9,8% | +32% | −4,4% | 3,5 | 128 d | −7,4% | +22% | 0,04 |
> | 2654 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+142% · −37,5%** | +42% · −8,9% | +29% | −7,9% | 2,5 | 91 d | −7,5% | +21% | 0,13 |
> | 2655 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+166% · −48,3%** | +42% · −9,9% | +30% | −10,1% | 2,3 | 76 d | −8,6% | +22% | 0,19 |
> | 2656 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+194% · −61,6%** | +48% · −14,9% | +31% | −5,6% | 3,0 | 81 d | −10,3% | +14% | 0,22 |
> | 2657 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+165% · −53,9%** | +41% · −12,5% | +29% | −8,5% | 2,1 | 72 d | −8,5% | +18% | 0,10 |
> | 2658 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+297% · −53,5%** | +62% · −11,2% | +37% | −7,3% | 2,1 | 67 d | −9,3% | +27% | 0,24 |
> | 2659 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+218% · −38,1%** | +56% · −9,2% | +32% | −7,6% | 3,1 | 83 d | −10,2% | +25% | 0,08 |
> | 2660 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+209% · −33,2%** | +53% · −8,1% | +33% | −4,1% | 2,4 | 122 d | −5,1% | +20% | 0,09 |
> | 2661 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+179% · −47,0%** | +43% · −10,3% | +28% | −6,5% | 2,3 | 72 d | −9,4% | +19% | −0,00 |
> | 2662 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Bollinger ·ADX | **+271% · −45,7%** | +64% · −10,6% | +35% | −6,2% | 2,9 | 105 d | −7,7% | +23% | 0,31 |
> | 2663 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+120% · −23,2%** | +31% · −4,1% | +25% | −4,9% | 2,5 | 219 d | −3,5% | +20% | −0,03 |
> | 2664 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+138% · −30,2%** | +35% · −5,7% | +26% | −8,7% | 2,3 | 126 d | −4,5% | +20% | 0,11 |
> | 2665 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+143% · −39,6%** | +41% · −10,3% | +30% | −7,5% | 2,4 | 107 d | −6,1% | +22% | 0,02 |
> | 2666 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+234% · −46,0%** | +50% · −9,9% | +30% | −7,2% | 2,8 | 77 d | −10,1% | +19% | 0,19 |
> | 2667 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+265% · −50,2%** | +54% · −9,5% | +34% | −4,7% | 2,8 | 122 d | −6,2% | +24% | 0,10 |
> | 2668 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+242% · −37,3%** | +58% · −8,4% | +31% | −3,8% | 2,7 | 106 d | −7,0% | +19% | 0,08 |
> | 2669 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+204% · −46,7%** | +46% · −9,4% | +29% | −4,6% | 1,9 | 72 d | −7,9% | +24% | 0,07 |
> | 2670 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+288% · −51,2%** | +57% · −11,4% | +33% | −9,0% | 2,4 | 72 d | −9,9% | +23% | 0,30 |

> [!example]- Combinações 2671 a 2700 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2671 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+126% · −44,7%** | +35% · −8,8% | +25% | −8,4% | 2,2 | 80 d | −7,6% | +14% | 0,12 |
> | 2672 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+125% · −33,0%** | +37% · −8,0% | +28% | −12,8% | 2,5 | 107 d | −6,4% | +19% | 0,13 |
> | 2673 | BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+163% · −40,0%** | +47% · −9,8% | +32% | −7,1% | 2,8 | 96 d | −8,0% | +25% | 0,13 |
> | 2674 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+196% · −41,4%** | +44% · −8,4% | +29% | −11,8% | 2,1 | 72 d | −8,8% | +20% | 0,21 |
> | 2675 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+248% · −38,1%** | +61% · −9,4% | +35% | −4,9% | 3,2 | 127 d | −7,1% | +22% | 0,13 |
> | 2676 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+201% · −41,6%** | +45% · −7,7% | +30% | −6,2% | 1,2 | 71 d | −6,8% | +17% | 0,11 |
> | 2677 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+166% · −46,1%** | +41% · −9,9% | +28% | −10,5% | 2,7 | 120 d | −6,3% | +21% | 0,20 |
> | 2678 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+284% · −69,3%** | +68% · −17,8% | +39% | −7,5% | 3,6 | 83 d | −13,0% | +19% | 0,50 |
> | 2679 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+195% · −51,9%** | +48% · −10,9% | +31% | −9,4% | 2,8 | 83 d | −9,2% | +22% | 0,19 |
> | 2680 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+199% · −43,2%** | +45% · −8,3% | +31% | −7,4% | 1,2 | 71 d | −6,8% | +18% | 0,16 |
> | 2681 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+212% · −49,5%** | +48% · −11,2% | +32% | −8,6% | 3,2 | 120 d | −7,8% | +22% | 0,28 |
> | 2682 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+288% · −50,9%** | +57% · −11,6% | +32% | −12,2% | 2,5 | 82 d | −8,5% | +22% | 0,31 |
> | 2683 | VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+143% · −45,3%** | +42% · −12,5% | +30% | −9,4% | 2,3 | 105 d | −6,2% | +20% | 0,20 |
> | 2684 | BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+235% · −52,6%** | +49% · −10,7% | +32% | −6,9% | 2,6 | 76 d | −9,7% | +23% | 0,20 |
> | 2685 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+247% · −61,5%** | +56% · −14,3% | +34% | −6,6% | 3,2 | 122 d | −7,3% | +20% | 0,20 |
> | 2686 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+273% · −48,4%** | +53% · −9,9% | +30% | −4,7% | 2,0 | 72 d | −8,5% | +23% | 0,14 |
> | 2687 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+214% · −54,1%** | +51% · −11,7% | +33% | −8,2% | 2,7 | 76 d | −10,4% | +25% | 0,20 |
> | 2688 | Donchian ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+219% · −37,5%** | +70% · −13,2% | +41% | −7,3% | 3,8 | 98 d | −10,9% | +26% | 0,26 |
> | 2689 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+245% · −52,2%** | +58% · −10,7% | +33% | −7,5% | 2,6 | 78 d | −9,4% | +29% | 0,23 |
> | 2690 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+97% · −24,4%** | +28% · −4,6% | +23% | −7,2% | 2,5 | 213 d | −3,4% | +15% | 0,00 |
> | 2691 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+186% · −37,5%** | +42% · −7,3% | +31% | −9,8% | 2,7 | 146 d | −5,3% | +21% | 0,19 |
> | 2692 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+337% · −53,0%** | +66% · −10,6% | +35% | −7,3% | 2,9 | 97 d | −8,3% | +27% | 0,33 |
> | 2693 | GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+127% · −30,7%** | +49% · −9,2% | +31% | −9,3% | 2,8 | 81 d | −9,9% | +20% | 0,10 |
> | 2694 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+206% · −40,8%** | +45% · −8,4% | +32% | −12,3% | 2,2 | 112 d | −5,4% | +23% | 0,30 |
> | 2695 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+230% · −62,4%** | +52% · −14,5% | +33% | −7,2% | 2,0 | 72 d | −8,6% | +22% | 0,20 |
> | 2696 | BB explosão ·ADX + IFR ·ADX + Tendência ·ADX | **+170% · −50,6%** | +61% · −18,4% | +39% | −9,5% | 3,4 | 83 d | −11,8% | +18% | 0,46 |
> | 2697 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+246% · −46,5%** | +53% · −10,0% | +32% | −9,3% | 2,7 | 83 d | −9,0% | +29% | 0,24 |
> | 2698 | ADX ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+207% · −42,4%** | +55% · −11,0% | +30% | −5,4% | 2,2 | 67 d | −10,0% | +23% | 0,25 |
> | 2699 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+191% · −44,5%** | +45% · −9,5% | +30% | −12,0% | 2,6 | 120 d | −6,4% | +21% | 0,25 |
> | 2700 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+232% · −51,7%** | +48% · −11,9% | +30% | −14,3% | 1,9 | 73 d | −8,0% | +25% | 0,34 |

> [!example]- Combinações 2701 a 2730 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2701 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+215% · −39,6%** | +46% · −6,4% | +28% | −4,0% | 2,8 | 129 d | −6,0% | +18% | 0,04 |
> | 2702 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+201% · −32,5%** | +41% · −5,8% | +28% | −8,1% | 1,8 | 92 d | −5,6% | +15% | 0,16 |
> | 2703 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+169% · −46,2%** | +39% · −10,1% | +26% | −9,0% | 2,1 | 72 d | −8,7% | +19% | 0,13 |
> | 2704 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+261% · −60,6%** | +55% · −13,4% | +33% | −5,1% | 2,9 | 76 d | −11,7% | +16% | 0,24 |
> | 2705 | ADX ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+212% · −52,6%** | +58% · −13,1% | +38% | −11,4% | 2,4 | 106 d | −6,3% | +28% | 0,29 |
> | 2706 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Tendência ·ADX | **+239% · −64,9%** | +65% · −19,6% | +39% | −9,1% | 3,2 | 106 d | −8,5% | +23% | 0,40 |
> | 2707 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+123% · −32,2%** | +37% · −6,7% | +24% | −3,5% | 2,4 | 81 d | −8,3% | +13% | 0,02 |
> | 2708 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+202% · −51,0%** | +50% · −10,4% | +34% | −12,7% | 2,6 | 78 d | −9,4% | +30% | 0,36 |
> | 2709 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+148% · −38,8%** | +37% · −7,8% | +26% | −10,0% | 2,5 | 120 d | −6,1% | +18% | 0,14 |
> | 2710 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+80% · −34,0%** | +29% · −8,2% | +22% | −4,2% | 2,3 | 91 d | −7,1% | +12% | −0,03 |
> | 2711 | ADX ·ADX + VWAP ·ADX + Bollinger ·ADX + Tendência ·ADX | **+221% · −53,0%** | +57% · −13,6% | +34% | −8,3% | 2,6 | 122 d | −5,9% | +22% | 0,36 |
> | 2712 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+248% · −38,5%** | +48% · −7,8% | +31% | −9,8% | 2,3 | 112 d | −5,7% | +22% | 0,26 |
> | 2713 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+230% · −44,9%** | +49% · −9,5% | +30% | −12,7% | 2,5 | 83 d | −8,3% | +22% | 0,36 |
> | 2714 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pullback ·PUL | **+186% · −59,3%** | +48% · −13,7% | +31% | −10,3% | 2,7 | 76 d | −10,5% | +15% | 0,22 |
> | 2715 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Tendência ·ADX | **+279% · −57,2%** | +67% · −15,9% | +39% | −6,7% | 3,9 | 129 d | −8,3% | +22% | 0,19 |
> | 2716 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+183% · −58,6%** | +45% · −13,6% | +31% | −8,0% | 2,8 | 83 d | −9,4% | +15% | 0,32 |
> | 2717 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+165% · −39,7%** | +46% · −9,0% | +30% | −6,6% | 2,9 | 131 d | −5,9% | +22% | 0,09 |
> | 2718 | Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+216% · −36,9%** | +70% · −12,7% | +35% | −8,9% | 3,4 | 83 d | −12,4% | +21% | 0,30 |
> | 2719 | MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+92% · −21,6%** | +37% · −6,5% | +27% | −10,0% | 1,8 | 86 d | −6,0% | +18% | 0,17 |
> | 2720 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+318% · −37,0%** | +56% · −7,0% | +31% | −3,9% | 2,9 | 105 d | −7,9% | +21% | 0,11 |
> | 2721 | GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+169% · −39,0%** | +62% · −13,0% | +39% | −9,9% | 2,9 | 76 d | −12,1% | +24% | 0,30 |
> | 2722 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+268% · −44,2%** | +53% · −8,9% | +31% | −5,5% | 3,2 | 95 d | −9,5% | +18% | 0,18 |
> | 2723 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+162% · −31,4%** | +45% · −7,9% | +29% | −4,7% | 2,1 | 122 d | −4,5% | +20% | 0,08 |
> | 2724 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+168% · −52,4%** | +42% · −11,9% | +29% | −8,7% | 2,0 | 72 d | −8,5% | +19% | 0,16 |
> | 2725 | VWAP ·ADX + IFR ·ADX + MACD ·ADX | **+115% · −29,5%** | +44% · −9,7% | +32% | −13,9% | 2,7 | 120 d | −6,7% | +19% | 0,37 |
> | 2726 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+203% · −48,7%** | +47% · −10,7% | +31% | −10,0% | 2,3 | 72 d | −9,8% | +22% | 0,13 |
> | 2727 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+211% · −47,4%** | +48% · −10,0% | +32% | −14,1% | 2,0 | 66 d | −9,4% | +23% | 0,35 |
> | 2728 | Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+186% · −40,7%** | +54% · −11,0% | +32% | −10,2% | 2,9 | 83 d | −9,7% | +27% | 0,27 |
> | 2729 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+232% · −48,0%** | +50% · −8,7% | +32% | −4,5% | 2,0 | 80 d | −7,5% | +24% | 0,09 |
> | 2730 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+169% · −40,0%** | +41% · −7,8% | +27% | −9,1% | 2,2 | 91 d | −6,8% | +19% | 0,09 |

> [!example]- Combinações 2731 a 2760 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2731 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+218% · −51,1%** | +49% · −11,3% | +30% | −11,0% | 2,6 | 82 d | −9,3% | +21% | 0,09 |
> | 2732 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+233% · −48,2%** | +51% · −9,8% | +32% | −6,7% | 1,9 | 72 d | −8,2% | +24% | 0,09 |
> | 2733 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+207% · −47,2%** | +47% · −9,5% | +28% | −4,5% | 1,8 | 72 d | −8,0% | +24% | 0,09 |
> | 2734 | Donchian ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+229% · −44,5%** | +60% · −12,1% | +38% | −10,6% | 2,9 | 83 d | −9,9% | +33% | 0,44 |
> | 2735 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+196% · −54,6%** | +47% · −11,4% | +31% | −9,2% | 2,4 | 120 d | −5,8% | +23% | 0,25 |
> | 2736 | GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+117% · −30,3%** | +38% · −7,7% | +26% | −8,7% | 2,3 | 81 d | −8,0% | +22% | 0,01 |
> | 2737 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+144% · −60,3%** | +38% · −12,7% | +28% | −6,5% | 2,8 | 95 d | −8,4% | +13% | 0,09 |
> | 2738 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+72% · −32,8%** | +24% · −6,3% | +20% | −6,3% | 2,3 | 210 d | −3,2% | +14% | 0,01 |
> | 2739 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+136% · −38,8%** | +36% · −7,1% | +27% | −7,7% | 2,0 | 81 d | −7,2% | +23% | 0,01 |
> | 2740 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+132% · −34,7%** | +40% · −8,0% | +26% | −4,8% | 1,4 | 75 d | −6,7% | +20% | 0,01 |
> | 2741 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+287% · −43,6%** | +65% · −11,4% | +35% | −8,8% | 3,0 | 99 d | −8,6% | +25% | 0,26 |
> | 2742 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+233% · −47,1%** | +50% · −10,5% | +29% | −10,6% | 2,9 | 83 d | −9,8% | +17% | 0,28 |
> | 2743 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+197% · −47,4%** | +48% · −10,5% | +30% | −12,4% | 3,0 | 102 d | −8,4% | +22% | 0,20 |
> | 2744 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+151% · −37,0%** | +38% · −6,6% | +27% | −7,2% | 2,3 | 96 d | −6,7% | +23% | 0,08 |
> | 2745 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+277% · −48,9%** | +54% · −10,1% | +30% | −4,5% | 2,0 | 72 d | −8,6% | +23% | 0,16 |
> | 2746 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+277% · −44,2%** | +53% · −9,1% | +31% | −5,9% | 3,1 | 99 d | −8,9% | +18% | 0,13 |
> | 2747 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+98% · −40,2%** | +32% · −10,8% | +24% | −10,3% | 2,3 | 109 d | −6,3% | +17% | 0,10 |
> | 2748 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+216% · −51,0%** | +48% · −9,9% | +30% | −4,7% | 2,6 | 122 d | −6,3% | +20% | 0,04 |
> | 2749 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+173% · −44,2%** | +49% · −11,7% | +30% | −5,0% | 2,9 | 122 d | −7,0% | +20% | 0,12 |
> | 2750 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+235% · −63,2%** | +55% · −14,7% | +35% | −7,3% | 3,1 | 83 d | −11,0% | +22% | 0,28 |
> | 2751 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+158% · −50,9%** | +39% · −9,8% | +26% | −4,6% | 2,7 | 99 d | −8,0% | +12% | 0,08 |
> | 2752 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+191% · −39,5%** | +41% · −8,0% | +27% | −8,4% | 1,7 | 73 d | −7,5% | +17% | 0,14 |
> | 2753 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+172% · −30,9%** | +46% · −7,7% | +28% | −5,1% | 2,4 | 80 d | −9,0% | +19% | 0,10 |
> | 2754 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+238% · −43,7%** | +60% · −11,1% | +33% | −7,3% | 2,2 | 67 d | −10,3% | +28% | 0,34 |
> | 2755 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+235% · −41,0%** | +47% · −7,6% | +29% | −5,4% | 1,4 | 76 d | −6,6% | +17% | 0,08 |
> | 2756 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+144% · −32,7%** | +41% · −7,2% | +24% | −4,4% | 1,9 | 122 d | −3,7% | +16% | 0,11 |
> | 2757 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+169% · −41,5%** | +38% · −8,6% | +26% | −12,1% | 1,8 | 103 d | −5,0% | +22% | 0,28 |
> | 2758 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+202% · −46,0%** | +46% · −9,2% | +29% | −5,4% | 2,8 | 95 d | −8,5% | +17% | 0,17 |
> | 2759 | GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+142% · −34,1%** | +43% · −8,6% | +29% | −9,9% | 2,3 | 81 d | −8,1% | +21% | 0,01 |
> | 2760 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+197% · −55,1%** | +46% · −11,2% | +31% | −8,0% | 2,4 | 120 d | −6,0% | +21% | 0,18 |

> [!example]- Combinações 2761 a 2790 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2761 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+134% · −50,3%** | +37% · −10,7% | +25% | −6,0% | 2,5 | 81 d | −8,9% | +13% | 0,07 |
> | 2762 | BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+214% · −51,5%** | +49% · −11,0% | +33% | −8,8% | 2,8 | 94 d | −8,5% | +25% | 0,30 |
> | 2763 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL | **+285% · −62,5%** | +61% · −14,3% | +35% | −5,7% | 3,3 | 128 d | −7,5% | +20% | 0,23 |
> | 2764 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+304% · −38,4%** | +70% · −10,1% | +39% | −5,4% | 3,6 | 119 d | −9,1% | +25% | 0,23 |
> | 2765 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Bollinger ·ADX + Tendência ·ADX | **+320% · −61,3%** | +63% · −13,7% | +35% | −7,5% | 3,3 | 120 d | −8,4% | +22% | 0,35 |
> | 2766 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+139% · −37,1%** | +36% · −7,8% | +27% | −7,9% | 2,2 | 120 d | −5,2% | +20% | 0,17 |
> | 2767 | VWAP ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+247% · −48,2%** | +53% · −9,7% | +33% | −10,6% | 2,5 | 76 d | −9,9% | +27% | 0,32 |
> | 2768 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX | **+208% · −64,5%** | +58% · −18,7% | +36% | −6,5% | 3,6 | 91 d | −12,1% | +13% | 0,30 |
> | 2769 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+176% · −52,8%** | +43% · −12,3% | +28% | −7,5% | 2,3 | 72 d | −9,9% | +17% | 0,13 |
> | 2770 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+204% · −43,8%** | +45% · −9,2% | +28% | −11,3% | 2,4 | 81 d | −8,6% | +25% | 0,20 |
> | 2771 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+172% · −49,5%** | +42% · −9,8% | +28% | −6,7% | 2,4 | 122 d | −5,7% | +19% | 0,10 |
> | 2772 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+306% · −59,8%** | +62% · −13,5% | +36% | −6,7% | 3,2 | 83 d | −11,8% | +20% | 0,40 |
> | 2773 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Onda ·VAI | **+267% · −44,0%** | +68% · −10,3% | +39% | −7,4% | 3,0 | 122 d | −7,3% | +25% | 0,26 |
> | 2774 | ADX ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+172% · −36,2%** | +47% · −8,4% | +28% | −6,3% | 1,6 | 76 d | −6,9% | +18% | 0,07 |
> | 2775 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+220% · −45,3%** | +58% · −12,6% | +31% | −12,6% | 2,8 | 74 d | −12,0% | +19% | 0,35 |
> | 2776 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+191% · −35,9%** | +51% · −8,4% | +32% | −5,8% | 2,2 | 122 d | −4,9% | +20% | 0,13 |
> | 2777 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Bollinger ·ADX | **+220% · −38,8%** | +55% · −9,6% | +32% | −6,3% | 2,4 | 122 d | −5,7% | +17% | 0,32 |
> | 2778 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+176% · −38,5%** | +42% · −7,5% | +30% | −8,3% | 2,3 | 91 d | −7,2% | +23% | 0,11 |
> | 2779 | ADX ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+246% · −55,3%** | +63% · −15,2% | +37% | −8,2% | 3,6 | 127 d | −8,4% | +22% | 0,25 |
> | 2780 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+146% · −41,1%** | +38% · −8,3% | +26% | −10,4% | 2,0 | 91 d | −6,5% | +20% | 0,13 |
> | 2781 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+146% · −38,3%** | +42% · −9,9% | +25% | −10,7% | 2,1 | 75 d | −8,5% | +20% | 0,12 |
> | 2782 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+150% · −38,1%** | +38% · −7,7% | +26% | −10,2% | 2,5 | 128 d | −5,6% | +19% | 0,16 |
> | 2783 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+271% · −42,5%** | +53% · −8,9% | +31% | −5,5% | 3,0 | 90 d | −9,9% | +19% | 0,17 |
> | 2784 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+225% · −36,9%** | +47% · −6,3% | +31% | −8,4% | 2,3 | 82 d | −8,1% | +24% | 0,08 |
> | 2785 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX | **+292% · −53,4%** | +76% · −14,5% | +40% | −5,9% | 3,8 | 119 d | −9,7% | +27% | 0,38 |
> | 2786 | Donchian ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+168% · −44,7%** | +59% · −12,8% | +36% | −8,4% | 3,3 | 95 d | −10,3% | +17% | 0,34 |
> | 2787 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+292% · −55,5%** | +65% · −11,9% | +37% | −8,0% | 2,3 | 67 d | −10,7% | +30% | 0,24 |
> | 2788 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+159% · −51,5%** | +41% · −11,0% | +28% | −7,8% | 2,5 | 81 d | −9,1% | +18% | 0,04 |
> | 2789 | BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+221% · −47,7%** | +55% · −12,1% | +33% | −6,4% | 2,3 | 72 d | −10,3% | +21% | 0,26 |
> | 2790 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+226% · −51,4%** | +52% · −11,4% | +34% | −11,9% | 2,3 | 72 d | −9,8% | +29% | 0,28 |

> [!example]- Combinações 2791 a 2820 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2791 | GPS médias ·ADX + Rompe 200 ·ROM | **+76% · −25,7%** | +44% · −12,1% | +27% | −9,4% | 2,5 | 74 d | −10,7% | +17% | 0,26 |
> | 2792 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+169% · −39,2%** | +41% · −7,3% | +28% | −5,4% | 1,2 | 76 d | −6,4% | +17% | 0,02 |
> | 2793 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+203% · −44,5%** | +55% · −11,7% | +33% | −6,6% | 3,0 | 122 d | −7,4% | +27% | 0,11 |
> | 2794 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+252% · −69,5%** | +61% · −17,3% | +36% | −6,0% | 3,4 | 83 d | −12,9% | +15% | 0,32 |
> | 2795 | 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+165% · −27,8%** | +36% · −4,7% | +25% | −6,1% | 1,8 | 111 d | −4,8% | +15% | 0,04 |
> | 2796 | VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+54% · −32,2%** | +27% · −11,1% | +21% | −12,2% | 2,5 | 193 d | −4,2% | +11% | 0,13 |
> | 2797 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+160% · −37,1%** | +39% · −7,3% | +29% | −11,1% | 2,3 | 136 d | −4,4% | +23% | 0,27 |
> | 2798 | VWAP ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+181% · −37,7%** | +48% · −9,7% | +32% | −10,6% | 2,5 | 103 d | −7,1% | +23% | 0,43 |
> | 2799 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+222% · −49,5%** | +58% · −13,9% | +36% | −9,7% | 3,2 | 95 d | −9,9% | +22% | 0,32 |
> | 2800 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+103% · −23,5%** | +33% · −5,7% | +24% | −7,1% | 2,6 | 168 d | −4,9% | +18% | 0,08 |
> | 2801 | Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+122% · −27,7%** | +45% · −7,9% | +28% | −3,1% | 3,0 | 120 d | −7,7% | +15% | −0,07 |
> | 2802 | BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+183% · −48,6%** | +41% · −9,6% | +27% | −5,4% | 2,5 | 83 d | −8,8% | +15% | 0,14 |
> | 2803 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+174% · −50,6%** | +49% · −11,6% | +32% | −6,5% | 3,0 | 89 d | −9,8% | +17% | 0,14 |
> | 2804 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+200% · −58,1%** | +47% · −12,9% | +30% | −4,6% | 3,1 | 95 d | −9,5% | +16% | 0,12 |
> | 2805 | GPS médias ·ADX + MACD ·ADX | **+100% · −28,2%** | +55% · −14,5% | +34% | −15,1% | 2,5 | 72 d | −11,4% | +28% | 0,29 |
> | 2806 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+194% · −37,2%** | +53% · −9,6% | +32% | −9,3% | 3,3 | 102 d | −9,7% | +23% | 0,12 |
> | 2807 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·ADX | **+196% · −52,4%** | +45% · −10,7% | +30% | −6,9% | 2,9 | 130 d | −6,4% | +18% | 0,14 |
> | 2808 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+251% · −45,2%** | +53% · −9,4% | +32% | −7,4% | 3,0 | 121 d | −7,7% | +20% | 0,27 |
> | 2809 | Donchian ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+169% · −37,9%** | +58% · −12,6% | +36% | −6,3% | 3,5 | 95 d | −11,0% | +19% | 0,12 |
> | 2810 | VWAP ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+193% · −38,3%** | +42% · −7,1% | +29% | −7,9% | 2,1 | 95 d | −6,6% | +24% | 0,13 |
> | 2811 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+156% · −51,7%** | +39% · −10,7% | +28% | −7,2% | 2,4 | 83 d | −8,3% | +19% | 0,15 |
> | 2812 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+224% · −38,7%** | +47% · −7,4% | +31% | −9,4% | 2,3 | 83 d | −8,2% | +25% | 0,25 |
> | 2813 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+236% · −48,8%** | +51% · −9,9% | +31% | −6,7% | 1,8 | 72 d | −8,3% | +24% | 0,13 |
> | 2814 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+238% · −41,6%** | +48% · −7,7% | +29% | −5,5% | 1,4 | 76 d | −6,7% | +16% | 0,12 |
> | 2815 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+120% · −46,9%** | +38% · −12,0% | +27% | −4,7% | 2,5 | 85 d | −8,5% | +16% | 0,04 |
> | 2816 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+235% · −47,0%** | +51% · −8,7% | +32% | −4,3% | 2,0 | 80 d | −7,6% | +23% | 0,11 |
> | 2817 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+154% · −26,9%** | +41% · −6,2% | +27% | −7,2% | 2,8 | 142 d | −5,9% | +17% | 0,12 |
> | 2818 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+323% · −59,3%** | +64% · −12,9% | +39% | −6,8% | 3,6 | 111 d | −9,8% | +22% | 0,35 |
> | 2819 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+188% · −41,5%** | +41% · −8,6% | +27% | −9,2% | 1,7 | 72 d | −8,0% | +19% | 0,22 |
> | 2820 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+237% · −57,8%** | +59% · −12,7% | +36% | −11,0% | 3,0 | 83 d | −10,9% | +26% | 0,37 |

> [!example]- Combinações 2821 a 2850 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2821 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+215% · −39,7%** | +55% · −9,8% | +32% | −7,6% | 3,3 | 99 d | −9,8% | +24% | 0,01 |
> | 2822 | ADX ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+130% · −32,8%** | +48% · −10,4% | +27% | −5,9% | 1,8 | 97 d | −5,5% | +17% | 0,18 |
> | 2823 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+237% · −45,7%** | +51% · −9,9% | +30% | −7,2% | 2,6 | 77 d | −10,4% | +20% | 0,17 |
> | 2824 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+152% · −47,5%** | +39% · −9,1% | +28% | −6,0% | 2,2 | 81 d | −8,0% | +23% | 0,03 |
> | 2825 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+224% · −57,8%** | +49% · −12,0% | +33% | −8,1% | 2,9 | 128 d | −6,7% | +22% | 0,21 |
> | 2826 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+178% · −40,5%** | +41% · −8,1% | +30% | −9,2% | 2,0 | 103 d | −5,8% | +25% | 0,07 |
> | 2827 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+214% · −56,7%** | +50% · −11,0% | +33% | −8,3% | 2,7 | 122 d | −6,7% | +23% | 0,19 |
> | 2828 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+256% · −44,2%** | +51% · −9,3% | +31% | −11,9% | 2,2 | 82 d | −8,1% | +23% | 0,29 |
> | 2829 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+182% · −33,1%** | +46% · −7,6% | +29% | −3,1% | 2,8 | 92 d | −8,9% | +21% | −0,12 |
> | 2830 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+235% · −57,6%** | +56% · −12,8% | +33% | −7,9% | 3,1 | 83 d | −11,6% | +19% | 0,23 |
> | 2831 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+223% · −51,8%** | +53% · −11,4% | +35% | −11,3% | 2,6 | 83 d | −9,3% | +27% | 0,43 |
> | 2832 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+214% · −36,0%** | +45% · −7,2% | +29% | −6,4% | 2,2 | 80 d | −8,4% | +22% | 0,11 |
> | 2833 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+149% · −35,2%** | +54% · −12,2% | +34% | −13,6% | 2,1 | 72 d | −9,4% | +23% | 0,27 |
> | 2834 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+278% · −52,2%** | +61% · −10,6% | +35% | −6,4% | 3,2 | 120 d | −8,5% | +29% | 0,17 |
> | 2835 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+178% · −38,1%** | +47% · −9,2% | +28% | −5,7% | 2,0 | 122 d | −4,6% | +18% | 0,14 |
> | 2836 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+168% · −35,0%** | +38% · −5,9% | +25% | −5,4% | 2,3 | 91 d | −7,7% | +19% | 0,03 |
> | 2837 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+218% · −38,2%** | +47% · −7,1% | +31% | −5,9% | 2,2 | 122 d | −5,2% | +18% | 0,07 |
> | 2838 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+162% · −35,1%** | +45% · −7,1% | +29% | −5,0% | 2,4 | 92 d | −7,8% | +22% | 0,01 |
> | 2839 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+180% · −46,6%** | +41% · −10,2% | +27% | −10,2% | 1,8 | 72 d | −8,5% | +17% | 0,18 |
> | 2840 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX + Tendência ·ADX | **+247% · −56,7%** | +52% · −12,1% | +33% | −8,0% | 2,7 | 78 d | −10,8% | +18% | 0,37 |
> | 2841 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+247% · −43,7%** | +50% · −7,8% | +31% | −4,6% | 2,8 | 129 d | −6,5% | +21% | 0,05 |
> | 2842 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+229% · −52,2%** | +54% · −11,7% | +33% | −13,6% | 2,2 | 70 d | −10,2% | +28% | 0,30 |
> | 2843 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX + Tendência ·ADX | **+200% · −58,1%** | +45% · −12,8% | +30% | −7,5% | 2,6 | 76 d | −10,6% | +14% | 0,26 |
> | 2844 | ADX ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+212% · −40,9%** | +57% · −10,4% | +36% | −9,0% | 2,0 | 106 d | −5,9% | +24% | 0,25 |
> | 2845 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+273% · −50,0%** | +54% · −10,5% | +30% | −5,4% | 2,0 | 72 d | −9,0% | +24% | 0,23 |
> | 2846 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+222% · −61,5%** | +63% · −18,5% | +39% | −7,8% | 3,3 | 83 d | −12,9% | +19% | 0,47 |
> | 2847 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+262% · −60,8%** | +57% · −14,2% | +35% | −7,5% | 3,1 | 95 d | −9,9% | +17% | 0,41 |
> | 2848 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+136% · −48,7%** | +37% · −10,1% | +25% | −6,0% | 2,4 | 81 d | −8,9% | +14% | 0,04 |
> | 2849 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+210% · −43,2%** | +59% · −11,6% | +35% | −12,0% | 2,9 | 83 d | −10,4% | +31% | 0,35 |
> | 2850 | GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+119% · −30,4%** | +38% · −7,6% | +26% | −8,6% | 2,2 | 81 d | −8,2% | +21% | 0,04 |

> [!example]- Combinações 2851 a 2880 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2851 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+126% · −36,7%** | +39% · −9,4% | +29% | −9,0% | 2,3 | 115 d | −6,0% | +21% | 0,16 |
> | 2852 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+251% · −50,1%** | +54% · −10,2% | +33% | −6,3% | 2,1 | 76 d | −8,8% | +26% | 0,11 |
> | 2853 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+121% · −23,0%** | +36% · −5,0% | +27% | −5,8% | 2,1 | 101 d | −6,2% | +19% | −0,01 |
> | 2854 | Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+156% · −37,7%** | +58% · −12,5% | +32% | −8,8% | 3,4 | 95 d | −11,0% | +17% | 0,32 |
> | 2855 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+148% · −46,3%** | +39% · −9,2% | +28% | −10,8% | 2,1 | 80 d | −8,2% | +19% | 0,17 |
> | 2856 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+244% · −45,1%** | +51% · −8,2% | +29% | −6,9% | 2,6 | 128 d | −6,1% | +19% | 0,24 |
> | 2857 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+148% · −42,2%** | +45% · −11,0% | +27% | −5,6% | 2,1 | 77 d | −8,6% | +22% | 0,09 |
> | 2858 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+198% · −50,9%** | +48% · −10,5% | +31% | −9,4% | 2,7 | 83 d | −9,6% | +23% | 0,19 |
> | 2859 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+168% · −39,2%** | +37% · −7,9% | +26% | −11,1% | 1,8 | 107 d | −5,1% | +19% | 0,16 |
> | 2860 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+224% · −39,6%** | +45% · −6,5% | +30% | −5,3% | 2,4 | 90 d | −8,2% | +24% | −0,04 |
> | 2861 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+144% · −33,8%** | +43% · −8,5% | +29% | −9,9% | 2,2 | 81 d | −8,3% | +21% | 0,07 |
> | 2862 | ADX ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+151% · −43,8%** | +55% · −14,9% | +35% | −9,5% | 2,8 | 122 d | −7,0% | +23% | 0,16 |
> | 2863 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+132% · −42,5%** | +34% · −9,0% | +26% | −11,4% | 2,1 | 109 d | −6,0% | +21% | 0,15 |
> | 2864 | VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+144% · −40,4%** | +42% · −10,7% | +25% | −11,8% | 2,1 | 73 d | −9,2% | +17% | 0,27 |
> | 2865 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+194% · −47,3%** | +47% · −10,5% | +30% | −12,2% | 3,0 | 102 d | −9,0% | +21% | 0,17 |
> | 2866 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+233% · −45,2%** | +52% · −8,5% | +32% | −7,7% | 2,5 | 119 d | −6,8% | +25% | 0,20 |
> | 2867 | GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+170% · −34,2%** | +46% · −8,2% | +28% | −7,9% | 2,3 | 81 d | −8,8% | +21% | 0,02 |
> | 2868 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+128% · −43,5%** | +35% · −8,4% | +25% | −8,4% | 2,0 | 80 d | −8,0% | +15% | 0,12 |
> | 2869 | VWAP ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+153% · −35,5%** | +43% · −8,9% | +28% | −7,8% | 2,4 | 100 d | −7,3% | +17% | 0,26 |
> | 2870 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+219% · −46,0%** | +46% · −8,6% | +27% | −4,0% | 3,0 | 99 d | −9,3% | +14% | 0,07 |
> | 2871 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+210% · −48,7%** | +51% · −10,6% | +32% | −11,7% | 2,9 | 102 d | −8,8% | +24% | 0,22 |
> | 2872 | IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+115% · −19,6%** | +43% · −6,3% | +30% | −5,9% | 2,3 | 138 d | −4,8% | +23% | 0,02 |
> | 2873 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+239% · −50,5%** | +50% · −11,1% | +30% | −7,4% | 2,3 | 72 d | −10,5% | +19% | 0,14 |
> | 2874 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+239% · −53,2%** | +54% · −12,3% | +33% | −14,8% | 2,5 | 82 d | −9,4% | +25% | 0,35 |
> | 2875 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+205% · −51,0%** | +46% · −11,6% | +29% | −6,2% | 2,7 | 99 d | −8,4% | +16% | 0,13 |
> | 2876 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+215% · −44,5%** | +56% · −11,9% | +32% | −8,7% | 3,1 | 95 d | −9,9% | +22% | 0,24 |
> | 2877 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+184% · −50,6%** | +44% · −10,2% | +29% | −6,3% | 2,7 | 99 d | −8,5% | +17% | 0,08 |
> | 2878 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+110% · −37,8%** | +32% · −7,2% | +24% | −6,7% | 1,9 | 82 d | −7,3% | +19% | 0,03 |
> | 2879 | Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+158% · −31,6%** | +57% · −11,2% | +32% | −7,3% | 3,6 | 110 d | −10,3% | +21% | 0,02 |
> | 2880 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+112% · −32,4%** | +31% · −5,3% | +24% | −5,2% | 1,9 | 86 d | −6,8% | +22% | −0,05 |

> [!example]- Combinações 2881 a 2910 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2881 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Bollinger ·ADX | **+193% · −39,8%** | +51% · −10,3% | +30% | −13,4% | 2,6 | 91 d | −8,9% | +21% | 0,41 |
> | 2882 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+121% · −29,8%** | +46% · −9,4% | +29% | −7,6% | 2,2 | 77 d | −8,9% | +22% | −0,11 |
> | 2883 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+234% · −49,2%** | +50% · −10,3% | +32% | −8,5% | 2,7 | 99 d | −8,5% | +21% | 0,15 |
> | 2884 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+222% · −49,7%** | +62% · −13,1% | +34% | −5,0% | 3,1 | 105 d | −9,2% | +23% | 0,12 |
> | 2885 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+251% · −53,3%** | +63% · −14,2% | +37% | −6,6% | 3,3 | 128 d | −8,0% | +24% | 0,16 |
> | 2886 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+203% · −60,4%** | +50% · −14,0% | +34% | −10,4% | 2,7 | 83 d | −10,0% | +20% | 0,42 |
> | 2887 | VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+158% · −42,8%** | +40% · −8,7% | +30% | −11,5% | 2,1 | 109 d | −6,0% | +27% | 0,30 |
> | 2888 | GPS médias ·ADX + Bollinger ·ADX | **+120% · −29,5%** | +62% · −14,9% | +31% | −9,6% | 2,5 | 72 d | −12,2% | +23% | 0,33 |
> | 2889 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+172% · −39,9%** | +41% · −7,4% | +27% | −5,5% | 1,1 | 76 d | −6,7% | +17% | 0,07 |
> | 2890 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX | **+234% · −53,8%** | +60% · −13,9% | +34% | −5,7% | 2,3 | 77 d | −9,4% | +23% | 0,35 |
> | 2891 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+217% · −40,3%** | +47% · −7,5% | +31% | −6,8% | 2,1 | 122 d | −5,2% | +20% | 0,19 |
> | 2892 | ADX ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+174% · −38,3%** | +47% · −9,1% | +28% | −7,2% | 1,5 | 74 d | −7,6% | +19% | 0,15 |
> | 2893 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+147% · −43,7%** | +36% · −9,3% | +25% | −6,9% | 2,6 | 148 d | −5,7% | +14% | 0,06 |
> | 2894 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+250% · −56,9%** | +53% · −12,2% | +33% | −5,2% | 3,2 | 111 d | −9,1% | +20% | 0,18 |
> | 2895 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+237% · −41,9%** | +50% · −8,2% | +30% | −4,3% | 2,6 | 122 d | −6,7% | +25% | 0,01 |
> | 2896 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+282% · −71,1%** | +63% · −18,0% | +35% | −6,9% | 2,3 | 67 d | −12,5% | +21% | 0,40 |
> | 2897 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+232% · −49,8%** | +51% · −10,3% | +32% | −7,6% | 1,8 | 72 d | −8,7% | +25% | 0,20 |
> | 2898 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+171% · −50,5%** | +42% · −10,7% | +30% | −10,3% | 2,8 | 118 d | −8,0% | +18% | 0,21 |
> | 2899 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+307% · −51,5%** | +58% · −10,9% | +33% | −7,6% | 2,0 | 72 d | −9,3% | +24% | 0,30 |
> | 2900 | VWAP ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+244% · −41,7%** | +49% · −7,8% | +32% | −10,2% | 2,1 | 97 d | −6,7% | +25% | 0,29 |
> | 2901 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+166% · −38,2%** | +38% · −6,6% | +25% | −6,5% | 2,3 | 85 d | −8,2% | +17% | 0,13 |
> | 2902 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+174% · −38,3%** | +40% · −8,3% | +27% | −9,0% | 2,6 | 148 d | −5,8% | +18% | 0,10 |
> | 2903 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+200% · −47,5%** | +46% · −9,7% | +29% | −5,4% | 2,8 | 111 d | −8,1% | +16% | 0,18 |
> | 2904 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+196% · −36,6%** | +43% · −7,1% | +28% | −6,6% | 2,2 | 83 d | −8,0% | +24% | 0,04 |
> | 2905 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+145% · −36,2%** | +42% · −8,4% | +28% | −6,0% | 2,1 | 122 d | −5,3% | +21% | 0,03 |
> | 2906 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+244% · −61,6%** | +59% · −14,6% | +37% | −8,4% | 2,8 | 80 d | −11,7% | +27% | 0,38 |
> | 2907 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+210% · −40,9%** | +54% · −10,2% | +30% | −4,3% | 2,2 | 76 d | −9,4% | +25% | 0,13 |
> | 2908 | ADX ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+233% · −55,0%** | +65% · −14,3% | +39% | −9,4% | 2,5 | 76 d | −11,1% | +33% | 0,28 |
> | 2909 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+156% · −42,7%** | +46% · −11,3% | +31% | −12,0% | 1,8 | 72 d | −8,9% | +20% | 0,26 |
> | 2910 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+275% · −61,9%** | +62% · −14,0% | +38% | −8,8% | 2,9 | 83 d | −11,1% | +26% | 0,42 |

> [!example]- Combinações 2911 a 2940 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2911 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+106% · −23,8%** | +33% · −5,3% | +22% | −7,9% | 2,6 | 210 d | −5,1% | +15% | 0,05 |
> | 2912 | ADX ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+236% · −42,8%** | +48% · −8,1% | +29% | −6,1% | 1,4 | 76 d | −7,1% | +17% | 0,18 |
> | 2913 | ADX ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR | **+251% · −37,1%** | +62% · −9,4% | +35% | −4,8% | 3,1 | 130 d | −7,3% | +21% | 0,12 |
> | 2914 | BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+170% · −33,3%** | +46% · −8,0% | +28% | −6,2% | 2,4 | 80 d | −9,6% | +17% | 0,26 |
> | 2915 | ADX ·ADX + MACD ·ADX + Bollinger ·ADX | **+162% · −38,7%** | +56% · −13,1% | +32% | −8,5% | 1,9 | 87 d | −6,9% | +21% | 0,34 |
> | 2916 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+165% · −25,2%** | +36% · −3,7% | +25% | −4,7% | 1,7 | 111 d | −5,0% | +14% | 0,01 |
> | 2917 | ADX ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+234% · −47,1%** | +64% · −12,6% | +38% | −7,0% | 2,4 | 76 d | −10,3% | +30% | 0,27 |
> | 2918 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+162% · −50,1%** | +41% · −10,4% | +28% | −7,8% | 2,4 | 81 d | −9,4% | +19% | 0,03 |
> | 2919 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+197% · −43,4%** | +46% · −8,4% | +30% | −7,9% | 2,0 | 122 d | −4,9% | +20% | 0,23 |
> | 2920 | Donchian ·ADX + IFR ·ADX + MACD ·ADX | **+195% · −31,4%** | +65% · −11,1% | +39% | −9,2% | 3,2 | 102 d | −10,1% | +28% | 0,49 |
> | 2921 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+233% · −58,4%** | +56% · −13,2% | +33% | −7,9% | 3,3 | 95 d | −11,3% | +18% | 0,24 |
> | 2922 | IFR ·ADX + MACD ·ADX + Onda ·VAI | **+140% · −27,6%** | +50% · −8,8% | +35% | −10,0% | 2,2 | 119 d | −6,0% | +25% | 0,32 |
> | 2923 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX | **+327% · −62,3%** | +65% · −13,6% | +35% | −5,8% | 3,1 | 97 d | −10,0% | +22% | 0,36 |
> | 2924 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+235% · −39,9%** | +47% · −7,2% | +29% | −6,2% | 2,2 | 122 d | −5,5% | +18% | 0,17 |
> | 2925 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+107% · −33,3%** | +42% · −10,8% | +29% | −5,6% | 2,6 | 91 d | −8,9% | +17% | 0,04 |
> | 2926 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+267% · −52,2%** | +58% · −10,9% | +35% | −9,1% | 2,2 | 80 d | −8,7% | +25% | 0,27 |
> | 2927 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+203% · −54,8%** | +46% · −11,2% | +28% | −6,6% | 1,7 | 67 d | −9,2% | +22% | 0,23 |
> | 2928 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+112% · −35,9%** | +32% · −7,0% | +24% | −6,6% | 1,8 | 82 d | −7,4% | +20% | 0,03 |
> | 2929 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+192% · −44,5%** | +42% · −9,6% | +28% | −7,6% | 2,5 | 92 d | −8,5% | +19% | −0,01 |
> | 2930 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+245% · −43,9%** | +52% · −8,4% | +34% | −8,9% | 2,1 | 122 d | −5,3% | +20% | 0,27 |
> | 2931 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+186% · −45,2%** | +46% · −8,7% | +31% | −9,8% | 2,6 | 92 d | −8,9% | +26% | 0,15 |
> | 2932 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Onda ·VAI | **+154% · −38,9%** | +46% · −9,9% | +30% | −11,8% | 2,3 | 91 d | −7,9% | +20% | 0,22 |
> | 2933 | Donchian ·ADX + GPS médias ·ADX + Onda ·VAI | **+174% · −39,7%** | +65% · −14,1% | +37% | −11,5% | 2,7 | 76 d | −12,8% | +28% | 0,32 |
> | 2934 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+162% · −25,5%** | +37% · −4,3% | +28% | −6,8% | 2,4 | 168 d | −4,8% | +20% | −0,03 |
> | 2935 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+218% · −39,4%** | +48% · −6,7% | +29% | −5,1% | 2,5 | 128 d | −6,1% | +21% | 0,09 |
> | 2936 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+105% · −35,8%** | +34% · −8,4% | +25% | −5,9% | 2,2 | 91 d | −7,7% | +18% | −0,05 |
> | 2937 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+119% · −40,7%** | +39% · −10,7% | +27% | −13,7% | 2,2 | 95 d | −7,3% | +21% | 0,09 |
> | 2938 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+161% · −39,6%** | +40% · −7,7% | +30% | −10,2% | 1,9 | 104 d | −5,9% | +23% | 0,23 |
> | 2939 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+176% · −40,6%** | +49% · −10,3% | +30% | −4,6% | 2,8 | 130 d | −6,8% | +23% | −0,02 |
> | 2940 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+132% · −40,5%** | +35% · −8,2% | +25% | −10,7% | 2,4 | 140 d | −5,5% | +21% | 0,04 |

> [!example]- Combinações 2941 a 2970 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2941 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+192% · −45,4%** | +55% · −11,9% | +33% | −7,0% | 2,4 | 81 d | −9,7% | +28% | 0,13 |
> | 2942 | GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+200% · −38,9%** | +52% · −10,3% | +32% | −11,1% | 2,2 | 76 d | −9,6% | +21% | 0,28 |
> | 2943 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+147% · −37,3%** | +38% · −7,0% | +26% | −8,8% | 1,8 | 91 d | −6,4% | +18% | 0,02 |
> | 2944 | ADX ·ADX + MACD ·ADX + Tendência ·ADX | **+178% · −50,0%** | +63% · −17,5% | +40% | −11,5% | 2,8 | 122 d | −7,5% | +29% | 0,35 |
> | 2945 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+159% · −35,6%** | +38% · −6,1% | +26% | −4,3% | 2,1 | 131 d | −4,5% | +19% | −0,01 |
> | 2946 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+171% · −46,0%** | +48% · −12,7% | +29% | −15,2% | 2,1 | 73 d | −9,6% | +23% | 0,38 |
> | 2947 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+102% · −20,7%** | +33% · −4,7% | +24% | −6,0% | 2,4 | 171 d | −4,8% | +15% | −0,01 |
> | 2948 | ADX ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+168% · −39,3%** | +48% · −8,7% | +32% | −8,0% | 2,2 | 122 d | −5,5% | +22% | 0,09 |
> | 2949 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+115% · −35,9%** | +31% · −6,9% | +24% | −10,9% | 1,6 | 107 d | −5,0% | +20% | 0,08 |
> | 2950 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+192% · −37,7%** | +41% · −7,7% | +28% | −10,9% | 2,2 | 112 d | −6,2% | +21% | 0,18 |
> | 2951 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Tendência ·ADX | **+229% · −53,1%** | +60% · −13,6% | +38% | −9,4% | 2,8 | 122 d | −7,3% | +23% | 0,30 |
> | 2952 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+245% · −47,5%** | +52% · −9,4% | +30% | −5,5% | 2,0 | 72 d | −9,6% | +23% | 0,11 |
> | 2953 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+220% · −61,1%** | +55% · −14,3% | +32% | −5,4% | 2,5 | 77 d | −10,5% | +22% | 0,21 |
> | 2954 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL | **+252% · −51,6%** | +66% · −13,8% | +36% | −5,6% | 3,6 | 128 d | −9,0% | +22% | 0,17 |
> | 2955 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+175% · −56,1%** | +44% · −12,4% | +29% | −4,5% | 2,6 | 83 d | −10,0% | +17% | 0,08 |
> | 2956 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+205% · −46,8%** | +58% · −12,7% | +35% | −10,4% | 2,3 | 72 d | −11,5% | +23% | 0,31 |
> | 2957 | Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+164% · −35,5%** | +47% · −9,0% | +30% | −9,6% | 2,2 | 95 d | −7,3% | +28% | 0,27 |
> | 2958 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+154% · −35,1%** | +38% · −6,4% | +27% | −7,1% | 2,1 | 96 d | −7,0% | +23% | 0,10 |
> | 2959 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+138% · −32,9%** | +33% · −6,2% | +23% | −8,4% | 1,7 | 106 d | −5,4% | +19% | 0,10 |
> | 2960 | VWAP ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+192% · −40,9%** | +43% · −8,1% | +29% | −9,4% | 2,1 | 105 d | −6,6% | +25% | 0,26 |
> | 2961 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+202% · −41,7%** | +46% · −8,5% | +33% | −12,2% | 2,0 | 112 d | −5,8% | +26% | 0,33 |
> | 2962 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+233% · −40,4%** | +47% · −7,8% | +29% | −7,6% | 2,1 | 84 d | −8,0% | +18% | 0,05 |
> | 2963 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+183% · −60,8%** | +54% · −18,1% | +34% | −6,4% | 2,9 | 81 d | −12,7% | +15% | 0,24 |
> | 2964 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+212% · −53,1%** | +45% · −11,0% | +30% | −6,7% | 2,5 | 83 d | −9,3% | +20% | 0,21 |
> | 2965 | Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+99% · −20,2%** | +38% · −6,5% | +25% | −8,5% | 1,8 | 102 d | −5,8% | +16% | 0,14 |
> | 2966 | BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+211% · −38,2%** | +45% · −7,7% | +29% | −7,9% | 2,2 | 80 d | −9,0% | +23% | 0,23 |
> | 2967 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+248% · −54,7%** | +63% · −14,9% | +37% | −6,6% | 3,4 | 128 d | −8,6% | +23% | 0,16 |
> | 2968 | Donchian ·ADX + MACD ·ADX + Bollinger ·ADX | **+184% · −28,1%** | +60% · −9,9% | +33% | −8,9% | 3,0 | 99 d | −9,9% | +26% | 0,35 |
> | 2969 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+220% · −37,1%** | +47% · −7,1% | +31% | −5,9% | 2,1 | 122 d | −5,5% | +17% | 0,12 |
> | 2970 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Tendência ·ADX ⚠️ | **+261% · −64,0%** | +55% · −15,1% | +35% | −6,0% | 2,7 | 120 d | −7,7% | +22% | 0,12 |

> [!example]- Combinações 2971 a 3000 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2971 | VWAP ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+220% · −44,3%** | +47% · −9,1% | +32% | −11,0% | 2,2 | 108 d | −6,6% | +26% | 0,38 |
> | 2972 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+74% · −22,0%** | +27% · −4,7% | +21% | −2,4% | 1,6 | 111 d | −4,8% | +17% | 0,01 |
> | 2973 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+193% · −54,8%** | +48% · −11,9% | +31% | −10,3% | 2,6 | 83 d | −10,1% | +20% | 0,33 |
> | 2974 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+79% · −30,4%** | +29% · −6,6% | +22% | −2,5% | 2,5 | 130 d | −5,9% | +13% | −0,07 |
> | 2975 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+162% · −37,2%** | +38% · −6,5% | +25% | −6,0% | 1,9 | 82 d | −7,9% | +22% | 0,03 |
> | 2976 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL | **+77% · −25,5%** | +33% · −8,6% | +26% | −13,5% | 2,4 | 211 d | −4,6% | +16% | 0,15 |
> | 2977 | VWAP ·ADX + IFR ·ADX + Bollinger ·ADX | **+139% · −26,9%** | +49% · −8,8% | +30% | −10,3% | 2,9 | 129 d | −7,1% | +18% | 0,30 |
> | 2978 | MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+110% · −23,1%** | +34% · −5,1% | +26% | −6,5% | 2,4 | 253 d | −4,6% | +21% | 0,00 |
> | 2979 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+184% · −36,0%** | +42% · −6,8% | +29% | −6,3% | 2,1 | 130 d | −4,8% | +20% | 0,02 |
> | 2980 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+188% · −48,7%** | +44% · −9,1% | +28% | −4,7% | 2,3 | 122 d | −6,0% | +21% | 0,07 |
> | 2981 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+139% · −32,4%** | +41% · −6,5% | +27% | −5,0% | 1,9 | 92 d | −6,8% | +21% | −0,05 |
> | 2982 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+242% · −42,5%** | +62% · −11,6% | +36% | −11,8% | 3,0 | 99 d | −10,0% | +29% | 0,32 |
> | 2983 | GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+122% · −34,5%** | +46% · −11,6% | +29% | −9,1% | 2,1 | 74 d | −9,8% | +23% | 0,22 |
> | 2984 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX | **+266% · −69,4%** | +68% · −17,9% | +38% | −7,1% | 2,8 | 82 d | −11,8% | +22% | 0,43 |
> | 2985 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Tendência ·ADX | **+316% · −61,9%** | +66% · −13,9% | +39% | −8,3% | 3,4 | 128 d | −8,6% | +23% | 0,35 |
> | 2986 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+170% · −39,5%** | +38% · −8,0% | +26% | −11,3% | 1,7 | 107 d | −5,3% | +18% | 0,22 |
> | 2987 | GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+173% · −35,0%** | +46% · −8,2% | +28% | −7,8% | 2,2 | 81 d | −8,9% | +20% | 0,05 |
> | 2988 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+258% · −51,0%** | +55% · −11,8% | +33% | −10,3% | 2,6 | 77 d | −11,5% | +23% | 0,38 |
> | 2989 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+196% · −42,3%** | +44% · −8,3% | +30% | −9,9% | 1,9 | 84 d | −7,4% | +19% | 0,05 |
> | 2990 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+206% · −37,2%** | +44% · −6,5% | +29% | −4,7% | 2,5 | 130 d | −5,9% | +20% | −0,00 |
> | 2991 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+246% · −60,9%** | +55% · −14,0% | +31% | −5,0% | 2,3 | 72 d | −11,2% | +19% | 0,24 |
> | 2992 | ADX ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+147% · −32,0%** | +54% · −10,3% | +33% | −6,6% | 2,1 | 122 d | −5,6% | +23% | 0,21 |
> | 2993 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+221% · −50,1%** | +51% · −10,1% | +31% | −7,1% | 2,7 | 122 d | −7,2% | +22% | 0,14 |
> | 2994 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+227% · −37,1%** | +47% · −6,4% | +31% | −8,6% | 2,1 | 82 d | −8,4% | +24% | 0,16 |
> | 2995 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+273% · −50,7%** | +57% · −10,4% | +33% | −8,3% | 1,9 | 67 d | −10,4% | +23% | 0,28 |
> | 2996 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+150% · −36,8%** | +37% · −7,2% | +27% | −6,9% | 1,9 | 82 d | −7,8% | +20% | −0,05 |
> | 2997 | GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+142% · −36,0%** | +43% · −9,3% | +29% | −11,3% | 2,2 | 81 d | −8,8% | +22% | 0,22 |
> | 2998 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+161% · −48,5%** | +49% · −12,8% | +31% | −8,1% | 2,7 | 83 d | −10,7% | +18% | 0,16 |
> | 2999 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+139% · −33,3%** | +42% · −8,3% | +28% | −7,1% | 2,1 | 122 d | −5,5% | +22% | 0,09 |
> | 3000 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+189% · −37,7%** | +50% · −8,9% | +32% | −6,3% | 2,6 | 122 d | −7,0% | +22% | 0,02 |

> [!example]- Combinações 3001 a 3030 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3001 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pullback ·PUL | **+226% · −44,6%** | +49% · −8,0% | +32% | −6,5% | 2,4 | 122 d | −6,3% | +18% | 0,16 |
> | 3002 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+189% · −46,5%** | +43% · −9,4% | +26% | −5,5% | 2,4 | 81 d | −9,9% | +15% | 0,07 |
> | 3003 | IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+113% · −22,0%** | +43% · −6,7% | +30% | −5,8% | 2,2 | 121 d | −6,0% | +24% | −0,09 |
> | 3004 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+63% · −32,0%** | +25% · −8,0% | +20% | −8,6% | 2,1 | 215 d | −3,7% | +13% | 0,02 |
> | 3005 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+276% · −47,6%** | +57% · −10,0% | +35% | −9,8% | 2,9 | 111 d | −8,8% | +25% | 0,34 |
> | 3006 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+168% · −41,9%** | +42% · −8,7% | +29% | −11,7% | 2,2 | 101 d | −7,1% | +21% | 0,15 |
> | 3007 | ADX ·ADX + Pullback ·PUL + Tendência ·ADX | **+175% · −46,6%** | +60% · −16,1% | +38% | −8,8% | 3,5 | 131 d | −8,6% | +23% | 0,11 |
> | 3008 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+293% · −48,9%** | +72% · −12,8% | +36% | −5,6% | 2,8 | 97 d | −9,6% | +25% | 0,33 |
> | 3009 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+182% · −51,5%** | +44% · −11,2% | +29% | −7,2% | 2,8 | 99 d | −9,4% | +16% | 0,20 |
> | 3010 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+195% · −32,5%** | +41% · −6,2% | +28% | −8,1% | 2,3 | 138 d | −5,4% | +20% | 0,09 |
> | 3011 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+250% · −51,2%** | +55% · −11,3% | +31% | −12,3% | 2,4 | 76 d | −10,9% | +26% | 0,31 |
> | 3012 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+189% · −33,5%** | +49% · −7,7% | +31% | −4,8% | 2,6 | 130 d | −6,4% | +18% | −0,01 |
> | 3013 | ADX ·ADX + IFR ·ADX + Onda ·VAI | **+171% · −34,0%** | +62% · −11,5% | +38% | −9,0% | 1,8 | 81 d | −7,9% | +23% | 0,20 |
> | 3014 | VWAP ·ADX + Pullback ·PUL + Bollinger ·ADX | **+95% · −24,4%** | +37% · −7,8% | +24% | −11,3% | 2,7 | 171 d | −6,0% | +15% | 0,18 |
> | 3015 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + IFR ·ADX | **+281% · −60,7%** | +65% · −13,9% | +36% | −8,8% | 3,1 | 120 d | −9,0% | +24% | 0,34 |
> | 3016 | BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+159% · −53,1%** | +48% · −14,3% | +33% | −8,1% | 2,5 | 81 d | −10,3% | +23% | 0,21 |
> | 3017 | Tendência ·ADX + Onda ·VAI | **+105% · −26,5%** | +57% · −13,1% | +40% | −13,7% | 2,6 | 92 d | −9,2% | +28% | 0,32 |
> | 3018 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX | **+282% · −64,4%** | +62% · −15,1% | +38% | −8,7% | 3,1 | 95 d | −11,0% | +22% | 0,50 |
> | 3019 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+210% · −55,6%** | +49% · −11,2% | +31% | −5,8% | 2,5 | 122 d | −6,7% | +24% | 0,17 |
> | 3020 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+175% · −41,7%** | +51% · −10,7% | +31% | −6,3% | 2,1 | 80 d | −8,9% | +26% | 0,10 |
> | 3021 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+238% · −64,6%** | +59% · −15,7% | +35% | −8,5% | 2,4 | 74 d | −11,3% | +26% | 0,38 |
> | 3022 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+160% · −47,5%** | +40% · −9,3% | +26% | −4,5% | 2,6 | 102 d | −8,3% | +13% | 0,06 |
> | 3023 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+209% · −66,5%** | +50% · −16,5% | +32% | −7,8% | 2,6 | 119 d | −7,5% | +23% | 0,20 |
> | 3024 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+179% · −41,1%** | +41% · −8,6% | +27% | −8,4% | 2,1 | 80 d | −9,0% | +17% | 0,16 |
> | 3025 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+151% · −40,0%** | +46% · −10,2% | +27% | −4,8% | 2,0 | 80 d | −8,7% | +23% | 0,05 |
> | 3026 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+187% · −34,1%** | +51% · −8,7% | +33% | −6,5% | 1,9 | 122 d | −5,2% | +20% | 0,06 |
> | 3027 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+133% · −45,1%** | +40% · −12,1% | +26% | −9,3% | 2,7 | 131 d | −6,6% | +13% | 0,17 |
> | 3028 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+123% · −30,5%** | +46% · −9,8% | +29% | −7,6% | 2,1 | 77 d | −9,2% | +22% | 0,03 |
> | 3029 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+146% · −34,9%** | +41% · −8,1% | +24% | −4,3% | 1,6 | 122 d | −4,3% | +18% | 0,06 |
> | 3030 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+155% · −46,6%** | +44% · −13,0% | +28% | −11,7% | 2,1 | 72 d | −10,4% | +19% | 0,24 |

> [!example]- Combinações 3031 a 3060 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3031 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+172% · −33,3%** | +39% · −5,6% | +26% | −3,6% | 2,4 | 130 d | −5,9% | +20% | −0,00 |
> | 3032 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+153% · −33,3%** | +38% · −6,4% | +26% | −5,5% | 2,0 | 130 d | −4,7% | +20% | 0,02 |
> | 3033 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL | **+199% · −53,9%** | +55% · −14,1% | +34% | −5,7% | 2,7 | 122 d | −7,4% | +20% | 0,15 |
> | 3034 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+300% · −57,6%** | +64% · −12,6% | +35% | −8,9% | 3,0 | 83 d | −13,5% | +19% | 0,41 |
> | 3035 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+266% · −45,8%** | +54% · −9,6% | +31% | −6,4% | 2,9 | 95 d | −10,4% | +17% | 0,31 |
> | 3036 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+167% · −27,3%** | +37% · −4,6% | +25% | −6,1% | 1,7 | 111 d | −5,3% | +15% | 0,10 |
> | 3037 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+138% · −32,7%** | +34% · −6,0% | +26% | −9,9% | 2,4 | 149 d | −5,5% | +18% | 0,06 |
> | 3038 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+190% · −40,6%** | +51% · −10,0% | +30% | −8,2% | 1,3 | 72 d | −8,1% | +17% | 0,33 |
> | 3039 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+88% · −25,0%** | +30% · −6,1% | +24% | −9,7% | 2,2 | 188 d | −4,5% | +15% | 0,03 |
> | 3040 | BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+183% · −36,3%** | +51% · −9,3% | +34% | −9,4% | 1,9 | 72 d | −9,6% | +21% | 0,21 |
> | 3041 | 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+97% · −16,3%** | +51% · −7,5% | +29% | −7,1% | 1,8 | 102 d | −6,1% | +14% | 0,28 |
> | 3042 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+197% · −40,6%** | +44% · −7,4% | +29% | −5,2% | 2,3 | 122 d | −6,3% | +18% | 0,12 |
> | 3043 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+223% · −60,3%** | +55% · −13,9% | +32% | −5,4% | 2,4 | 77 d | −10,6% | +23% | 0,19 |
> | 3044 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+221% · −69,6%** | +56% · −17,3% | +33% | −6,1% | 2,4 | 74 d | −11,5% | +21% | 0,20 |
> | 3045 | Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+156% · −33,8%** | +57% · −11,2% | +32% | −7,3% | 3,4 | 102 d | −11,7% | +19% | 0,01 |
> | 3046 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+247% · −49,8%** | +54% · −10,2% | +32% | −6,5% | 2,7 | 128 d | −7,0% | +20% | 0,25 |
> | 3047 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+150% · −45,2%** | +39% · −9,2% | +28% | −10,8% | 2,0 | 80 d | −8,5% | +20% | 0,19 |
> | 3048 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+158% · −54,0%** | +41% · −11,9% | +28% | −8,7% | 2,4 | 81 d | −10,0% | +17% | 0,16 |
> | 3049 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+152% · −36,1%** | +38% · −7,0% | +27% | −7,0% | 1,8 | 82 d | −7,9% | +20% | −0,00 |
> | 3050 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+90% · −20,7%** | +37% · −6,3% | +27% | −8,5% | 2,5 | 169 d | −5,6% | +16% | −0,06 |
> | 3051 | ADX ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+204% · −41,4%** | +53% · −10,3% | +32% | −8,1% | 1,5 | 76 d | −7,9% | +19% | 0,26 |
> | 3052 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+265% · −45,4%** | +52% · −9,8% | +32% | −11,0% | 2,0 | 82 d | −8,5% | +19% | 0,27 |
> | 3053 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+170% · −37,0%** | +40% · −6,6% | +27% | −6,9% | 1,9 | 89 d | −7,4% | +18% | −0,03 |
> | 3054 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL | **+159% · −38,7%** | +46% · −10,7% | +30% | −11,7% | 2,7 | 131 d | −6,8% | +19% | 0,23 |
> | 3055 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+217% · −63,5%** | +55% · −15,3% | +32% | −6,3% | 2,4 | 76 d | −11,1% | +20% | 0,33 |
> | 3056 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+147% · −36,5%** | +36% · −7,1% | +25% | −5,3% | 2,4 | 148 d | −5,6% | +16% | −0,01 |
> | 3057 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+98% · −37,7%** | +34% · −9,9% | +23% | −10,6% | 2,1 | 95 d | −7,3% | +16% | 0,06 |
> | 3058 | MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+185% · −33,0%** | +47% · −7,8% | +31% | −10,5% | 1,7 | 92 d | −6,5% | +14% | 0,28 |
> | 3059 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+222% · −44,3%** | +46% · −8,0% | +27% | −3,8% | 2,9 | 99 d | −9,7% | +15% | 0,05 |
> | 3060 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+235% · −44,0%** | +51% · −7,7% | +31% | −5,4% | 2,6 | 128 d | −6,8% | +24% | 0,13 |

> [!example]- Combinações 3061 a 3090 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3061 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX | **+276% · −73,1%** | +62% · −19,6% | +36% | −6,9% | 3,6 | 128 d | −9,3% | +18% | 0,27 |
> | 3062 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+184% · −34,9%** | +46% · −7,4% | +29% | −3,1% | 2,6 | 92 d | −9,3% | +22% | −0,06 |
> | 3063 | VWAP ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+147% · −39,6%** | +45% · −10,0% | +33% | −13,1% | 1,9 | 95 d | −6,9% | +26% | 0,40 |
> | 3064 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Tendência ·ADX | **+313% · −72,2%** | +69% · −18,9% | +40% | −8,1% | 3,5 | 119 d | −10,5% | +22% | 0,44 |
> | 3065 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+197% · −41,4%** | +45% · −7,8% | +30% | −7,0% | 2,0 | 122 d | −5,5% | +17% | 0,15 |
> | 3066 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+247% · −58,2%** | +53% · −12,8% | +33% | −5,2% | 3,0 | 111 d | −9,3% | +19% | 0,13 |
> | 3067 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX | **+200% · −38,4%** | +54% · −10,3% | +34% | −12,4% | 3,1 | 120 d | −9,1% | +22% | 0,42 |
> | 3068 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+94% · −35,5%** | +28% · −7,0% | +23% | −9,2% | 2,2 | 171 d | −4,7% | +19% | 0,04 |
> | 3069 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+178% · −39,5%** | +42% · −8,2% | +30% | −9,9% | 1,9 | 81 d | −8,3% | +21% | 0,12 |
> | 3070 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+218% · −47,7%** | +48% · −8,8% | +32% | −6,1% | 2,3 | 122 d | −6,4% | +22% | 0,09 |
> | 3071 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+206% · −45,8%** | +45% · −9,7% | +29% | −4,9% | 2,5 | 99 d | −8,4% | +17% | −0,02 |
> | 3072 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+180% · −41,6%** | +50% · −11,0% | +32% | −15,1% | 2,1 | 73 d | −10,5% | +22% | 0,37 |
> | 3073 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+125% · −41,7%** | +35% · −8,9% | +25% | −11,6% | 1,9 | 81 d | −8,4% | +24% | 0,06 |
> | 3074 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+260% · −44,0%** | +53% · −8,9% | +32% | −7,7% | 2,2 | 121 d | −6,4% | +19% | 0,27 |
> | 3075 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+161% · −30,5%** | +44% · −7,6% | +29% | −4,8% | 2,2 | 130 d | −5,2% | +17% | 0,07 |
> | 3076 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+210% · −41,2%** | +46% · −7,6% | +29% | −7,7% | 2,2 | 122 d | −6,0% | +18% | 0,20 |
> | 3077 | BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+186% · −47,0%** | +41% · −9,0% | +27% | −5,4% | 2,4 | 85 d | −9,2% | +16% | 0,13 |
> | 3078 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+156% · −33,8%** | +44% · −7,6% | +29% | −4,5% | 2,5 | 122 d | −6,9% | +22% | 0,02 |
> | 3079 | ADX ·ADX + BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX | **+234% · −65,0%** | +61% · −19,6% | +35% | −8,0% | 2,3 | 74 d | −11,3% | +21% | 0,38 |
> | 3080 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+188% · −42,8%** | +42% · −8,3% | +27% | −6,9% | 1,9 | 122 d | −5,3% | +16% | 0,20 |
> | 3081 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+218% · −46,4%** | +51% · −9,2% | +32% | −7,1% | 2,6 | 95 d | −9,3% | +25% | 0,14 |
> | 3082 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+226% · −41,3%** | +46% · −6,7% | +30% | −5,2% | 2,3 | 90 d | −8,5% | +24% | 0,02 |
> | 3083 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+198% · −37,5%** | +51% · −9,7% | +32% | −9,1% | 2,3 | 78 d | −10,3% | +23% | 0,35 |
> | 3084 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+157% · −39,8%** | +39% · −7,3% | +27% | −6,5% | 1,5 | 108 d | −5,2% | +20% | 0,04 |
> | 3085 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+171% · −59,4%** | +44% · −13,9% | +29% | −5,6% | 2,6 | 83 d | −10,5% | +15% | 0,16 |
> | 3086 | Donchian ·ADX + IFR ·ADX | **+155% · −27,2%** | +77% · −14,2% | +43% | −7,7% | 3,6 | 102 d | −13,3% | +24% | 0,48 |
> | 3087 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+244% · −56,5%** | +56% · −13,4% | +33% | −8,3% | 2,8 | 91 d | −10,8% | +18% | 0,18 |
> | 3088 | VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+145% · −34,9%** | +35% · −6,9% | +24% | −10,2% | 2,3 | 131 d | −5,6% | +20% | 0,18 |
> | 3089 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+190% · −53,5%** | +46% · −10,1% | +31% | −8,1% | 2,2 | 122 d | −6,2% | +22% | 0,10 |
> | 3090 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+140% · −33,3%** | +33% · −6,3% | +23% | −8,5% | 1,6 | 106 d | −5,6% | +19% | 0,14 |

> [!example]- Combinações 3091 a 3120 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3091 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+150% · −33,7%** | +37% · −6,9% | +26% | −9,2% | 2,3 | 129 d | −5,7% | +17% | 0,09 |
> | 3092 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+184% · −50,4%** | +48% · −11,2% | +30% | −12,9% | 2,4 | 83 d | −9,7% | +24% | 0,28 |
> | 3093 | VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+146% · −30,5%** | +42% · −7,2% | +30% | −9,4% | 2,6 | 182 d | −6,1% | +20% | 0,13 |
> | 3094 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+265% · −49,5%** | +55% · −8,4% | +34% | −6,5% | 2,6 | 128 d | −6,9% | +23% | 0,16 |
> | 3095 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+184% · −36,8%** | +41% · −6,2% | +26% | −4,5% | 2,3 | 131 d | −5,6% | +15% | 0,11 |
> | 3096 | Donchian ·ADX + Pullback ·PUL + Onda ·VAI | **+148% · −33,2%** | +53% · −9,7% | +33% | −7,1% | 2,5 | 91 d | −9,4% | +26% | 0,15 |
> | 3097 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+235% · −41,3%** | +47% · −8,1% | +29% | −7,6% | 2,0 | 84 d | −8,1% | +18% | 0,11 |
> | 3098 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Bollinger ·ADX | **+277% · −48,7%** | +54% · −8,8% | +31% | −5,5% | 2,8 | 129 d | −7,3% | +18% | 0,20 |
> | 3099 | ADX ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+244% · −49,1%** | +52% · −10,0% | +30% | −6,9% | 1,9 | 72 d | −10,2% | +24% | 0,21 |
> | 3100 | GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+199% · −41,9%** | +45% · −8,3% | +30% | −10,1% | 1,9 | 84 d | −7,6% | +19% | 0,13 |
> | 3101 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX | **+284% · −62,5%** | +58% · −14,3% | +32% | −4,6% | 2,9 | 102 d | −9,8% | +18% | 0,21 |
> | 3102 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+182% · −33,4%** | +41% · −6,4% | +29% | −8,9% | 2,1 | 134 d | −5,0% | +20% | 0,13 |
> | 3103 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+221% · −52,7%** | +62% · −14,4% | +34% | −5,6% | 2,9 | 119 d | −8,8% | +22% | 0,25 |
> | 3104 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+226% · −47,7%** | +51% · −9,6% | +32% | −7,9% | 2,7 | 102 d | −9,1% | +22% | 0,23 |
> | 3105 | VWAP ·ADX + Donchian ·ADX + Tendência ·ADX + Onda ·VAI | **+191% · −47,6%** | +56% · −12,0% | +36% | −11,0% | 2,6 | 83 d | −10,9% | +27% | 0,39 |
> | 3106 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+209% · −54,8%** | +49% · −12,1% | +31% | −7,1% | 2,3 | 106 d | −7,3% | +23% | 0,26 |
> | 3107 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+121% · −37,0%** | +38% · −8,8% | +26% | −6,4% | 1,6 | 122 d | −4,4% | +20% | 0,03 |
> | 3108 | VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+125% · −29,9%** | +39% · −7,3% | +28% | −11,1% | 2,2 | 138 d | −5,1% | +22% | 0,23 |
> | 3109 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+225% · −54,4%** | +49% · −11,9% | +31% | −9,8% | 2,0 | 72 d | −10,4% | +19% | 0,33 |
> | 3110 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+128% · −29,5%** | +38% · −7,0% | +28% | −10,2% | 2,4 | 140 d | −5,8% | +17% | 0,16 |
> | 3111 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+180% · −39,8%** | +42% · −7,9% | +30% | −9,3% | 1,9 | 112 d | −6,0% | +24% | 0,17 |
> | 3112 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+204% · −50,6%** | +47% · −11,5% | +29% | −14,2% | 1,9 | 73 d | −9,6% | +25% | 0,33 |
> | 3113 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+158% · −47,6%** | +46% · −13,4% | +31% | −16,9% | 1,8 | 73 d | −9,1% | +27% | 0,33 |
> | 3114 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+164% · −25,8%** | +37% · −4,4% | +28% | −7,0% | 2,3 | 168 d | −5,1% | +20% | 0,03 |
> | 3115 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+171% · −37,1%** | +41% · −6,7% | +27% | −5,0% | 1,9 | 122 d | −5,4% | +17% | 0,09 |
> | 3116 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+146% · −48,0%** | +40% · −10,6% | +28% | −14,5% | 1,9 | 76 d | −9,0% | +25% | 0,26 |
> | 3117 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+219% · −43,0%** | +49% · −7,7% | +32% | −7,0% | 2,4 | 122 d | −6,8% | +19% | 0,14 |
> | 3118 | BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+151% · −48,7%** | +39% · −9,5% | +28% | −7,2% | 2,1 | 81 d | −8,9% | +23% | 0,12 |
> | 3119 | ADX ·ADX + IFR ·ADX + MACD ·ADX | **+175% · −36,2%** | +61% · −12,0% | +38% | −8,4% | 2,2 | 122 d | −6,2% | +22% | 0,31 |
> | 3120 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+117% · −36,3%** | +31% · −7,0% | +24% | −11,1% | 1,5 | 107 d | −5,3% | +19% | 0,15 |

> [!example]- Combinações 3121 a 3150 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3121 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+209% · −43,1%** | +48% · −8,5% | +30% | −5,5% | 2,6 | 122 d | −7,4% | +25% | 0,02 |
> | 3122 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+236% · −55,2%** | +53% · −11,5% | +36% | −10,1% | 2,7 | 106 d | −9,1% | +30% | 0,38 |
> | 3123 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+170% · −42,0%** | +42% · −8,8% | +29% | −11,9% | 2,0 | 109 d | −6,6% | +20% | 0,21 |
> | 3124 | BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+149% · −50,2%** | +39% · −10,1% | +28% | −7,2% | 2,1 | 83 d | −8,6% | +22% | 0,10 |
> | 3125 | Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+98% · −17,6%** | +38% · −5,3% | +25% | −6,5% | 1,7 | 100 d | −6,1% | +14% | −0,07 |
> | 3126 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+159% · −39,1%** | +38% · −7,2% | +24% | −5,8% | 1,8 | 122 d | −5,0% | +16% | 0,13 |
> | 3127 | ADX ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+150% · −43,4%** | +55% · −14,5% | +35% | −8,9% | 2,9 | 130 d | −7,5% | +25% | 0,11 |
> | 3128 | Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+99% · −18,1%** | +38% · −5,5% | +25% | −6,2% | 1,5 | 102 d | −5,7% | +14% | 0,00 |
> | 3129 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+201% · −43,5%** | +54% · −9,9% | +32% | −5,6% | 2,3 | 106 d | −7,6% | +21% | 0,11 |
> | 3130 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+161% · −35,0%** | +39% · −6,7% | +29% | −10,0% | 2,1 | 143 d | −4,9% | +20% | 0,12 |
> | 3131 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+166% · −44,1%** | +42% · −9,4% | +29% | −13,2% | 2,0 | 101 d | −6,9% | +23% | 0,31 |
> | 3132 | ADX ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+175% · −36,7%** | +59% · −12,1% | +32% | −6,4% | 1,4 | 75 d | −8,1% | +19% | 0,29 |
> | 3133 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+232% · −49,2%** | +51% · −10,5% | +30% | −8,1% | 2,6 | 83 d | −10,9% | +18% | 0,32 |
> | 3134 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+140% · −35,5%** | +35% · −7,0% | +27% | −6,8% | 2,2 | 140 d | −5,2% | +21% | 0,11 |
> | 3135 | Donchian ·ADX + Tendência ·ADX + Onda ·VAI | **+191% · −39,9%** | +66% · −13,0% | +41% | −10,6% | 2,9 | 89 d | −12,1% | +33% | 0,42 |
> | 3136 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+189% · −61,6%** | +45% · −14,4% | +29% | −5,9% | 2,5 | 127 d | −7,0% | +20% | 0,10 |
> | 3137 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+171% · −56,4%** | +42% · −12,1% | +28% | −4,9% | 2,3 | 128 d | −6,3% | +20% | 0,05 |
> | 3138 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+248% · −48,1%** | +52% · −9,6% | +30% | −5,4% | 1,9 | 74 d | −9,7% | +22% | 0,11 |
> | 3139 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+168% · −38,4%** | +40% · −7,3% | +27% | −8,1% | 2,0 | 89 d | −7,8% | +19% | 0,04 |
> | 3140 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+196% · −46,1%** | +45% · −8,5% | +31% | −6,6% | 2,1 | 81 d | −9,1% | +22% | 0,12 |
> | 3141 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+183% · −44,6%** | +45% · −8,8% | +28% | −4,7% | 1,8 | 77 d | −8,6% | +22% | −0,00 |
> | 3142 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+92% · −19,0%** | +36% · −5,5% | +27% | −8,6% | 1,3 | 87 d | −6,4% | +16% | 0,11 |
> | 3143 | GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+171% · −36,9%** | +47% · −9,1% | +28% | −9,6% | 2,2 | 81 d | −9,5% | +22% | 0,20 |
> | 3144 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+177% · −47,3%** | +44% · −9,4% | +29% | −6,6% | 2,4 | 91 d | −9,1% | +21% | 0,06 |
> | 3145 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+176% · −47,2%** | +50% · −11,6% | +32% | −6,7% | 3,2 | 128 d | −8,8% | +18% | 0,20 |
> | 3146 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+187% · −49,0%** | +44% · −10,0% | +29% | −6,3% | 2,6 | 102 d | −8,9% | +18% | 0,07 |
> | 3147 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+134% · −39,3%** | +43% · −10,4% | +29% | −13,5% | 2,3 | 81 d | −9,9% | +25% | 0,17 |
> | 3148 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL | **+212% · −56,9%** | +50% · −13,0% | +32% | −8,8% | 3,3 | 120 d | −10,0% | +14% | 0,25 |
> | 3149 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+231% · −51,6%** | +56% · −11,0% | +34% | −9,8% | 2,1 | 77 d | −9,9% | +25% | 0,27 |
> | 3150 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+251% · −48,2%** | +58% · −9,8% | +33% | −6,1% | 2,6 | 102 d | −9,0% | +27% | 0,10 |

> [!example]- Combinações 3151 a 3180 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3151 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+286% · −60,2%** | +62% · −14,5% | +34% | −6,3% | 2,4 | 76 d | −11,6% | +23% | 0,39 |
> | 3152 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+193% · −61,7%** | +49% · −14,2% | +32% | −7,9% | 2,6 | 83 d | −11,1% | +20% | 0,21 |
> | 3153 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR | **+257% · −59,9%** | +58% · −12,9% | +33% | −5,3% | 2,9 | 127 d | −8,1% | +22% | 0,19 |
> | 3154 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+191% · −47,1%** | +44% · −9,5% | +26% | −5,5% | 2,3 | 81 d | −10,3% | +16% | 0,04 |
> | 3155 | MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+108% · −22,9%** | +34% · −5,0% | +27% | −6,3% | 2,3 | 209 d | −5,0% | +22% | −0,04 |
> | 3156 | VWAP ·ADX + Donchian ·ADX + Bollinger ·ADX + Onda ·VAI | **+191% · −37,3%** | +51% · −9,6% | +30% | −12,7% | 2,3 | 83 d | −9,6% | +21% | 0,31 |
> | 3157 | Donchian ·ADX + MACD ·ADX + Tendência ·ADX | **+195% · −44,4%** | +66% · −16,4% | +41% | −10,4% | 3,2 | 95 d | −12,7% | +25% | 0,57 |
> | 3158 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Tendência ·ADX | **+213% · −67,6%** | +55% · −17,1% | +35% | −10,4% | 2,8 | 83 d | −12,5% | +18% | 0,41 |
> | 3159 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+133% · −46,4%** | +41% · −12,8% | +27% | −13,5% | 1,7 | 72 d | −9,6% | +20% | 0,24 |
> | 3160 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+165% · −37,9%** | +38% · −6,7% | +25% | −5,9% | 1,9 | 82 d | −8,3% | +22% | 0,03 |
> | 3161 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+125% · −39,1%** | +33% · −7,9% | +23% | −6,6% | 2,3 | 148 d | −5,5% | +15% | 0,03 |
> | 3162 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+170% · −56,3%** | +42% · −12,0% | +28% | −5,7% | 2,3 | 120 d | −6,8% | +19% | 0,10 |
> | 3163 | VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+103% · −39,3%** | +34% · −9,9% | +26% | −6,5% | 2,3 | 129 d | −6,0% | +15% | 0,06 |
> | 3164 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+188% · −45,1%** | +50% · −12,5% | +29% | −13,7% | 1,8 | 72 d | −9,8% | +23% | 0,33 |
> | 3165 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+124% · −34,3%** | +38% · −8,5% | +27% | −9,6% | 1,4 | 77 d | −7,7% | +17% | 0,07 |
> | 3166 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+204% · −52,2%** | +52% · −11,9% | +33% | −14,7% | 2,4 | 83 d | −10,1% | +28% | 0,37 |
> | 3167 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+322% · −49,1%** | +63% · −9,9% | +36% | −5,3% | 3,2 | 120 d | −9,9% | +25% | 0,12 |
> | 3168 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+150% · −43,4%** | +38% · −9,2% | +27% | −8,5% | 1,8 | 81 d | −8,4% | +21% | 0,11 |
> | 3169 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+250% · −60,7%** | +58% · −14,4% | +33% | −5,8% | 2,8 | 119 d | −8,6% | +19% | 0,31 |
> | 3170 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+233% · −44,0%** | +62% · −11,3% | +36% | −10,7% | 2,6 | 83 d | −11,0% | +30% | 0,26 |
> | 3171 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+217% · −41,8%** | +46% · −6,2% | +28% | −3,7% | 2,6 | 159 d | −6,5% | +19% | 0,02 |
> | 3172 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+104% · −40,7%** | +34% · −10,2% | +25% | −7,4% | 2,2 | 91 d | −8,4% | +15% | 0,08 |
> | 3173 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+180% · −45,7%** | +45% · −8,9% | +28% | −6,1% | 1,8 | 76 d | −9,1% | +24% | 0,06 |
> | 3174 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+220% · −59,2%** | +52% · −13,5% | +33% | −6,3% | 2,7 | 122 d | −7,8% | +22% | 0,15 |
> | 3175 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+229% · −60,9%** | +57% · −14,2% | +33% | −8,8% | 3,1 | 95 d | −12,1% | +17% | 0,40 |
> | 3176 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+175% · −44,9%** | +51% · −11,6% | +31% | −7,4% | 2,0 | 77 d | −9,6% | +27% | 0,19 |
> | 3177 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+242% · −61,1%** | +55% · −13,8% | +33% | −7,9% | 2,8 | 129 d | −7,7% | +19% | 0,27 |
> | 3178 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+217% · −56,1%** | +50% · −12,5% | +32% | −6,5% | 2,5 | 83 d | −10,4% | +20% | 0,10 |
> | 3179 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Tendência ·ADX | **+172% · −57,0%** | +52% · −16,5% | +35% | −9,2% | 2,7 | 83 d | −11,6% | +16% | 0,39 |
> | 3180 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Tendência ·ADX ⚠️ | **+197% · −51,8%** | +45% · −10,3% | +30% | −5,6% | 2,7 | 131 d | −6,9% | +19% | 0,08 |

> [!example]- Combinações 3181 a 3210 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3181 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+193% · −47,7%** | +45% · −9,1% | +31% | −6,6% | 2,1 | 83 d | −8,9% | +22% | 0,05 |
> | 3182 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+185% · −42,6%** | +52% · −10,4% | +34% | −8,1% | 1,0 | 71 d | −8,5% | +17% | 0,21 |
> | 3183 | VWAP ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+171% · −47,5%** | +52% · −12,4% | +34% | −12,6% | 2,4 | 78 d | −11,5% | +28% | 0,31 |
> | 3184 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+56% · −12,1%** | +26% · −3,7% | +22% | −4,4% | 1,6 | 147 d | −3,3% | +18% | 0,02 |
> | 3185 | VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL | **+105% · −38,5%** | +43% · −13,7% | +28% | −12,6% | 2,8 | 118 d | −8,8% | +15% | 0,11 |
> | 3186 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+195% · −43,9%** | +42% · −9,3% | +28% | −7,8% | 2,3 | 92 d | −8,8% | +19% | 0,04 |
> | 3187 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+114% · −37,6%** | +31% · −7,5% | +24% | −4,9% | 2,2 | 171 d | −5,2% | +16% | 0,05 |
> | 3188 | GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+175% · −37,3%** | +58% · −12,9% | +32% | −9,3% | 2,1 | 77 d | −10,1% | +22% | 0,28 |
> | 3189 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+142% · −40,7%** | +43% · −10,1% | +29% | −9,0% | 2,2 | 91 d | −8,6% | +20% | 0,28 |
> | 3190 | BB explosão ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+202% · −51,3%** | +56% · −13,4% | +37% | −9,9% | 2,8 | 94 d | −10,5% | +28% | 0,36 |
> | 3191 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+215% · −51,6%** | +46% · −10,4% | +30% | −6,7% | 2,3 | 83 d | −9,7% | +21% | 0,21 |
> | 3192 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+204% · −51,9%** | +45% · −10,4% | +27% | −4,1% | 2,4 | 122 d | −6,9% | +19% | 0,06 |
> | 3193 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+196% · −43,9%** | +45% · −8,9% | +30% | −11,0% | 1,9 | 84 d | −8,0% | +20% | 0,22 |
> | 3194 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+179% · −51,5%** | +45% · −10,6% | +28% | −7,6% | 2,5 | 122 d | −7,3% | +18% | 0,15 |
> | 3195 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+143% · −51,7%** | +38% · −10,3% | +25% | −5,0% | 2,3 | 128 d | −6,3% | +15% | 0,05 |
> | 3196 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+224% · −49,1%** | +51% · −9,7% | +31% | −7,1% | 2,5 | 122 d | −7,3% | +21% | 0,14 |
> | 3197 | ADX ·ADX + IFR ·ADX + Pullback ·PUL | **+172% · −31,8%** | +59% · −10,0% | +36% | −6,2% | 2,7 | 122 d | −8,0% | +20% | 0,06 |
> | 3198 | Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+124% · −29,2%** | +45% · −8,0% | +28% | −2,8% | 2,7 | 120 d | −8,5% | +17% | −0,10 |
> | 3199 | VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+135% · −40,2%** | +36% · −8,1% | +27% | −8,5% | 2,0 | 125 d | −5,7% | +23% | 0,08 |
> | 3200 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX | **+258% · −77,7%** | +69% · −21,7% | +39% | −7,6% | 2,8 | 82 d | −13,5% | +20% | 0,45 |
> | 3201 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+187% · −49,5%** | +45% · −10,2% | +28% | −4,6% | 2,2 | 122 d | −6,6% | +20% | 0,11 |
> | 3202 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+191% · −41,8%** | +43% · −8,0% | +27% | −7,1% | 1,8 | 122 d | −5,4% | +15% | 0,20 |
> | 3203 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+304% · −59,3%** | +64% · −12,9% | +37% | −5,9% | 2,7 | 119 d | −8,6% | +25% | 0,29 |
> | 3204 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+204% · −54,7%** | +51% · −13,0% | +32% | −12,7% | 2,0 | 72 d | −11,1% | +21% | 0,32 |
> | 3205 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+133% · −42,1%** | +41% · −11,1% | +27% | −12,3% | 1,8 | 77 d | −8,9% | +22% | 0,01 |
> | 3206 | 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+151% · −25,7%** | +41% · −5,1% | +27% | −6,5% | 1,7 | 111 d | −5,8% | +13% | 0,00 |
> | 3207 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+127% · −31,0%** | +33% · −6,1% | +23% | −4,2% | 2,0 | 161 d | −4,8% | +17% | 0,02 |
> | 3208 | GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+233% · −42,8%** | +47% · −8,6% | +29% | −8,8% | 2,0 | 84 d | −8,5% | +19% | 0,21 |
> | 3209 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+135% · −36,4%** | +34% · −6,4% | +24% | −4,6% | 1,6 | 131 d | −3,8% | +19% | 0,02 |
> | 3210 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+254% · −60,6%** | +57% · −13,5% | +33% | −5,4% | 3,0 | 127 d | −8,5% | +21% | 0,20 |

> [!example]- Combinações 3211 a 3240 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3211 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+176% · −49,3%** | +44% · −10,4% | +29% | −8,0% | 2,5 | 87 d | −10,0% | +20% | 0,21 |
> | 3212 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+189% · −46,5%** | +53% · −12,1% | +31% | −5,5% | 1,7 | 72 d | −9,8% | +25% | 0,05 |
> | 3213 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+229% · −48,2%** | +49% · −9,9% | +30% | −9,7% | 1,2 | 71 d | −8,7% | +19% | 0,28 |
> | 3214 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+164% · −47,4%** | +50% · −12,3% | +31% | −8,1% | 2,6 | 83 d | −11,2% | +19% | 0,15 |
> | 3215 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+218% · −46,6%** | +46% · −8,9% | +27% | −5,4% | 2,8 | 99 d | −10,2% | +13% | 0,17 |
> | 3216 | Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+73% · −16,0%** | +32% · −5,2% | +25% | −5,6% | 2,3 | 188 d | −5,4% | +20% | −0,03 |
> | 3217 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+200% · −52,5%** | +49% · −10,7% | +32% | −9,0% | 2,5 | 83 d | −10,6% | +25% | 0,24 |
> | 3218 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+224% · −40,1%** | +46% · −8,2% | +31% | −10,9% | 2,2 | 138 d | −5,6% | +22% | 0,33 |
> | 3219 | BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+118% · −50,3%** | +38% · −13,2% | +27% | −6,2% | 2,4 | 95 d | −9,1% | +13% | 0,10 |
> | 3220 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+182% · −62,1%** | +48% · −14,8% | +29% | −5,7% | 2,3 | 78 d | −10,7% | +17% | 0,19 |
> | 3221 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+268% · −48,4%** | +57% · −9,5% | +35% | −8,8% | 2,8 | 115 d | −8,9% | +29% | 0,28 |
> | 3222 | ADX ·ADX + Donchian ·ADX + Tendência ·ADX + Onda ·VAI | **+262% · −57,5%** | +69% · −15,5% | +40% | −9,8% | 3,3 | 127 d | −9,3% | +30% | 0,30 |
> | 3223 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+174% · −58,5%** | +45% · −13,5% | +29% | −5,6% | 2,5 | 83 d | −10,9% | +16% | 0,16 |
> | 3224 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+212% · −65,8%** | +50% · −15,9% | +32% | −7,8% | 2,4 | 119 d | −7,8% | +24% | 0,19 |
> | 3225 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+197% · −32,5%** | +42% · −6,2% | +28% | −8,0% | 2,2 | 150 d | −5,6% | +19% | 0,13 |
> | 3226 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+288% · −47,4%** | +58% · −9,9% | +34% | −7,9% | 2,6 | 83 d | −11,5% | +26% | 0,32 |
> | 3227 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+216% · −62,8%** | +60% · −18,8% | +37% | −7,9% | 1,9 | 72 d | −10,6% | +25% | 0,25 |
> | 3228 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+191% · −42,5%** | +46% · −8,4% | +30% | −8,4% | 1,9 | 122 d | −5,8% | +20% | 0,19 |
> | 3229 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+223% · −49,1%** | +50% · −10,2% | +32% | −7,9% | 2,7 | 111 d | −9,0% | +21% | 0,23 |
> | 3230 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Tendência ·ADX | **+272% · −59,3%** | +69% · −16,9% | +40% | −9,7% | 3,4 | 127 d | −9,9% | +28% | 0,40 |
> | 3231 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+179% · −43,3%** | +42% · −9,2% | +27% | −11,0% | 1,9 | 81 d | −9,0% | +24% | 0,10 |
> | 3232 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+158% · −33,4%** | +37% · −5,5% | +26% | −3,6% | 2,1 | 161 d | −5,1% | +17% | −0,01 |
> | 3233 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+186% · −29,8%** | +48% · −6,2% | +31% | −7,7% | 2,5 | 103 d | −8,9% | +25% | 0,05 |
> | 3234 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+191% · −39,3%** | +45% · −7,5% | +28% | −4,8% | 2,3 | 122 d | −6,7% | +23% | 0,05 |
> | 3235 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+213% · −54,8%** | +49% · −10,9% | +31% | −5,9% | 2,3 | 122 d | −6,8% | +23% | 0,16 |
> | 3236 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+181% · −41,1%** | +42% · −8,6% | +27% | −8,4% | 2,0 | 80 d | −9,4% | +18% | 0,17 |
> | 3237 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+125% · −30,1%** | +37% · −6,3% | +24% | −3,4% | 2,2 | 91 d | −8,8% | +15% | −0,03 |
> | 3238 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+197% · −57,9%** | +49% · −13,2% | +30% | −6,3% | 2,9 | 99 d | −11,1% | +14% | 0,10 |
> | 3239 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+164% · −48,5%** | +49% · −13,7% | +31% | −8,4% | 2,2 | 73 d | −12,2% | +18% | 0,09 |
> | 3240 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+163% · −46,0%** | +41% · −9,7% | +28% | −12,3% | 1,6 | 72 d | −9,5% | +22% | 0,05 |

> [!example]- Combinações 3241 a 3270 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3241 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+226% · −61,2%** | +57% · −13,7% | +35% | −9,2% | 2,2 | 77 d | −10,8% | +29% | 0,29 |
> | 3242 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+244% · −41,3%** | +49% · −8,0% | +29% | −6,4% | 2,5 | 99 d | −9,1% | +19% | 0,09 |
> | 3243 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+211% · −40,3%** | +44% · −7,7% | +29% | −7,9% | 1,9 | 81 d | −9,0% | +20% | 0,12 |
> | 3244 | VWAP ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+132% · −39,4%** | +49% · −14,0% | +34% | −10,9% | 2,3 | 107 d | −7,9% | +23% | 0,25 |
> | 3245 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+286% · −48,5%** | +60% · −9,8% | +34% | −5,3% | 2,7 | 102 d | −9,8% | +26% | 0,09 |
> | 3246 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+207% · −61,9%** | +52% · −14,8% | +34% | −7,6% | 2,5 | 81 d | −12,0% | +23% | 0,23 |
> | 3247 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+182% · −46,3%** | +45% · −9,0% | +28% | −6,1% | 1,8 | 76 d | −9,1% | +23% | 0,06 |
> | 3248 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+215% · −47,0%** | +50% · −9,4% | +33% | −9,7% | 2,0 | 122 d | −6,1% | +20% | 0,28 |
> | 3249 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+198% · −36,7%** | +43% · −6,9% | +28% | −6,5% | 2,0 | 90 d | −8,3% | +24% | 0,10 |
> | 3250 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+197% · −57,7%** | +50% · −12,8% | +34% | −9,9% | 2,4 | 83 d | −10,6% | +24% | 0,35 |
> | 3251 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+205% · −47,4%** | +49% · −9,3% | +31% | −7,5% | 1,8 | 76 d | −9,3% | +23% | 0,08 |
> | 3252 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+163% · −41,9%** | +49% · −11,0% | +29% | −11,4% | 2,8 | 110 d | −9,7% | +18% | 0,11 |
> | 3253 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+194% · −60,0%** | +50% · −14,1% | +30% | −7,3% | 2,8 | 91 d | −12,0% | +13% | 0,25 |
> | 3254 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX | **+245% · −53,5%** | +68% · −14,6% | +37% | −8,3% | 2,9 | 102 d | −10,4% | +28% | 0,34 |
> | 3255 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+95% · −34,9%** | +29% · −6,8% | +23% | −9,3% | 1,9 | 176 d | −4,4% | +18% | 0,07 |
> | 3256 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Tendência ·ADX | **+166% · −61,8%** | +43% · −14,3% | +31% | −9,6% | 2,6 | 95 d | −9,8% | +16% | 0,27 |
> | 3257 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+131% · −33,0%** | +35% · −6,3% | +24% | −5,0% | 1,3 | 122 d | −4,5% | +19% | −0,01 |
> | 3258 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+161% · −38,0%** | +38% · −6,9% | +24% | −5,9% | 1,6 | 122 d | −5,1% | +16% | 0,11 |
> | 3259 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+185% · −46,3%** | +46% · −10,2% | +31% | −11,7% | 1,6 | 72 d | −9,6% | +24% | 0,26 |
> | 3260 | ADX ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+146% · −29,7%** | +53% · −9,9% | +33% | −6,3% | 2,2 | 122 d | −6,5% | +19% | 0,11 |
> | 3261 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+167% · −33,3%** | +37% · −5,4% | +26% | −4,4% | 2,4 | 142 d | −6,1% | +19% | 0,10 |
> | 3262 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+188% · −49,0%** | +44% · −10,1% | +26% | −6,7% | 2,3 | 81 d | −10,8% | +14% | 0,18 |
> | 3263 | VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+173% · −57,1%** | +50% · −13,8% | +32% | −8,2% | 2,9 | 120 d | −9,3% | +15% | 0,32 |
> | 3264 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+138% · −28,8%** | +35% · −4,8% | +26% | −7,3% | 2,0 | 182 d | −4,7% | +17% | 0,00 |
> | 3265 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+161% · −43,7%** | +49% · −11,7% | +29% | −11,1% | 3,0 | 110 d | −10,3% | +17% | 0,08 |
> | 3266 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+208% · −40,0%** | +48% · −7,2% | +29% | −5,4% | 2,3 | 127 d | −6,7% | +23% | 0,05 |
> | 3267 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+264% · −58,4%** | +61% · −13,5% | +36% | −7,4% | 2,1 | 72 d | −12,0% | +26% | 0,31 |
> | 3268 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+295% · −38,3%** | +66% · −9,0% | +35% | −5,2% | 2,7 | 105 d | −9,4% | +23% | 0,22 |
> | 3269 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+245% · −46,3%** | +51% · −8,1% | +29% | −5,5% | 2,4 | 129 d | −6,7% | +17% | 0,16 |
> | 3270 | 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+108% · −21,5%** | +41% · −6,4% | +30% | −8,6% | 2,1 | 101 d | −7,6% | +20% | 0,04 |

> [!example]- Combinações 3271 a 3300 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3271 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+171% · −39,0%** | +40% · −7,2% | +27% | −8,0% | 1,9 | 89 d | −8,0% | +19% | 0,10 |
> | 3272 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+260% · −69,8%** | +62% · −17,3% | +37% | −6,7% | 2,1 | 72 d | −12,6% | +24% | 0,31 |
> | 3273 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+174% · −47,9%** | +42% · −9,4% | +28% | −6,8% | 2,3 | 131 d | −6,1% | +20% | 0,11 |
> | 3274 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+189% · −50,0%** | +48% · −10,3% | +31% | −8,8% | 2,3 | 81 d | −10,7% | +26% | 0,12 |
> | 3275 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+170% · −31,0%** | +39% · −4,8% | +26% | −3,2% | 2,1 | 130 d | −5,8% | +18% | −0,03 |
> | 3276 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+192% · −39,3%** | +46% · −7,5% | +30% | −7,0% | 1,9 | 122 d | −6,0% | +18% | 0,07 |
> | 3277 | ADX ·ADX + Donchian ·ADX + Bollinger ·ADX | **+223% · −41,0%** | +72% · −13,1% | +36% | −5,2% | 2,6 | 106 d | −9,2% | +22% | 0,26 |
> | 3278 | BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+162% · −39,6%** | +38% · −7,2% | +26% | −7,4% | 1,9 | 81 d | −8,8% | +21% | 0,14 |
> | 3279 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+220% · −54,8%** | +51% · −12,0% | +32% | −6,5% | 2,4 | 83 d | −10,5% | +21% | 0,15 |
> | 3280 | Donchian ·ADX + Tendência ·ADX | **+156% · −40,1%** | +79% · −20,1% | +45% | −10,3% | 3,3 | 98 d | −17,0% | +20% | 0,62 |
> | 3281 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Tendência ·ADX | **+180% · −66,7%** | +49% · −16,6% | +32% | −9,2% | 2,5 | 81 d | −12,4% | +14% | 0,27 |
> | 3282 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+221% · −44,9%** | +51% · −8,9% | +32% | −7,1% | 2,7 | 102 d | −9,7% | +26% | 0,17 |
> | 3283 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+155% · −39,8%** | +42% · −10,4% | +28% | −14,5% | 1,6 | 107 d | −6,1% | +20% | 0,38 |
> | 3284 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+207% · −67,0%** | +50% · −16,7% | +33% | −9,0% | 2,4 | 108 d | −8,3% | +21% | 0,26 |
> | 3285 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+114% · −29,8%** | +36% · −7,4% | +25% | −5,2% | 2,1 | 131 d | −5,6% | +19% | 0,03 |
> | 3286 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+206% · −53,0%** | +49% · −11,0% | +31% | −8,8% | 2,5 | 122 d | −7,5% | +23% | 0,18 |
> | 3287 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+192% · −47,0%** | +53% · −12,3% | +31% | −5,2% | 1,7 | 72 d | −9,9% | +24% | 0,09 |
> | 3288 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+223% · −58,4%** | +52% · −13,1% | +32% | −6,4% | 2,6 | 122 d | −7,9% | +23% | 0,16 |
> | 3289 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+113% · −39,9%** | +36% · −10,4% | +24% | −8,9% | 2,4 | 128 d | −6,7% | +14% | 0,06 |
> | 3290 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+163% · −35,0%** | +39% · −6,7% | +29% | −10,0% | 2,0 | 182 d | −4,8% | +19% | 0,17 |
> | 3291 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+133% · −36,9%** | +40% · −9,4% | +26% | −7,3% | 2,5 | 148 d | −6,6% | +14% | 0,01 |
> | 3292 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+209% · −44,1%** | +46% · −9,3% | +29% | −4,9% | 2,3 | 99 d | −8,7% | +18% | 0,01 |
> | 3293 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+235% · −46,0%** | +52% · −7,5% | +32% | −6,5% | 2,3 | 127 d | −6,8% | +22% | 0,10 |
> | 3294 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+218% · −70,5%** | +55% · −17,9% | +34% | −6,1% | 2,4 | 82 d | −11,4% | +20% | 0,22 |
> | 3295 | GPS médias ·ADX | **+67% · −23,3%** | +67% · −23,3% | +36% | −15,3% | 2,4 | 74 d | −20,3% | +16% | — |
> | 3296 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX | **+197% · −65,9%** | +56% · −20,5% | +35% | −7,4% | 3,0 | 128 d | −8,9% | +18% | 0,20 |
> | 3297 | BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+121% · −48,0%** | +38% · −12,5% | +27% | −6,3% | 2,3 | 85 d | −9,6% | +14% | 0,10 |
> | 3298 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+96% · −32,8%** | +29% · −5,5% | +22% | −5,8% | 1,6 | 98 d | −6,5% | +17% | 0,01 |
> | 3299 | VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+87% · −38,8%** | +38% · −13,8% | +25% | −14,6% | 1,9 | 74 d | −10,3% | +15% | 0,23 |
> | 3300 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Bollinger ·ADX | **+272% · −52,7%** | +56% · −10,0% | +32% | −8,6% | 2,6 | 128 d | −7,4% | +19% | 0,35 |

> [!example]- Combinações 3301 a 3330 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3301 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+217% · −61,3%** | +54% · −14,5% | +33% | −9,6% | 2,8 | 91 d | −12,5% | +18% | 0,26 |
> | 3302 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+129% · −46,6%** | +35% · −10,2% | +26% | −12,9% | 1,3 | 77 d | −8,0% | +21% | 0,12 |
> | 3303 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+195% · −34,6%** | +43% · −6,5% | +29% | −5,2% | 2,1 | 122 d | −6,5% | +21% | −0,03 |
> | 3304 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+196% · −60,6%** | +49% · −13,9% | +32% | −7,9% | 2,5 | 83 d | −11,4% | +21% | 0,22 |
> | 3305 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+221% · −48,3%** | +47% · −9,3% | +28% | −4,4% | 1,5 | 72 d | −9,4% | +20% | 0,12 |
> | 3306 | Donchian ·ADX + Bollinger ·ADX | **+141% · −24,1%** | +69% · −12,5% | +34% | −5,7% | 3,2 | 100 d | −12,9% | +20% | 0,13 |
> | 3307 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+214% · −49,1%** | +49% · −10,4% | +28% | −8,3% | 1,9 | 77 d | −9,6% | +21% | 0,27 |
> | 3308 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+200% · −39,9%** | +53% · −9,2% | +31% | −4,6% | 2,7 | 129 d | −7,7% | +19% | 0,09 |
> | 3309 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+123% · −48,4%** | +41% · −13,0% | +27% | −6,1% | 2,3 | 82 d | −10,9% | +13% | 0,02 |
> | 3310 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+217% · −49,9%** | +48% · −10,3% | +29% | −8,8% | 2,4 | 81 d | −11,3% | +19% | 0,20 |
> | 3311 | MACD ·ADX + Quinta ·PR2 ⚠️ | **+47% · −9,7%** | +30% · −4,4% | +24% | −7,1% | 1,7 | 153 d | −4,3% | +20% | −0,12 |
> | 3312 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+146% · −56,8%** | +39% · −12,2% | +28% | −6,6% | 2,7 | 120 d | −8,8% | +14% | 0,10 |
> | 3313 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+160% · −48,3%** | +49% · −13,6% | +29% | −12,4% | 2,8 | 102 d | −10,4% | +15% | 0,30 |
> | 3314 | 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+64% · −22,1%** | +29% · −6,8% | +22% | −4,0% | 1,5 | 111 d | −5,8% | +17% | −0,06 |
> | 3315 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+232% · −58,2%** | +51% · −12,5% | +31% | −5,5% | 2,5 | 83 d | −11,9% | +17% | 0,20 |
> | 3316 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+239% · −42,3%** | +50% · −8,9% | +32% | −9,1% | 2,1 | 83 d | −9,5% | +23% | 0,30 |
> | 3317 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+127% · −38,5%** | +35% · −8,0% | +25% | −10,2% | 1,9 | 94 d | −7,9% | +22% | −0,02 |
> | 3318 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+160% · −51,6%** | +50% · −14,1% | +31% | −9,2% | 2,5 | 83 d | −11,8% | +17% | 0,37 |
> | 3319 | BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+211% · −53,7%** | +46% · −11,2% | +30% | −7,9% | 2,3 | 83 d | −10,2% | +19% | 0,29 |
> | 3320 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Tendência ·ADX | **+238% · −68,2%** | +58% · −16,2% | +36% | −8,9% | 2,9 | 95 d | −12,0% | +17% | 0,46 |
> | 3321 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+250% · −43,1%** | +51% · −7,4% | +31% | −4,4% | 2,6 | 159 d | −6,9% | +20% | 0,03 |
> | 3322 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+159% · −36,7%** | +39% · −6,7% | +27% | −5,8% | 1,4 | 122 d | −4,8% | +19% | 0,01 |
> | 3323 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+149% · −37,9%** | +55% · −12,7% | +34% | −8,9% | 1,2 | 72 d | −8,9% | +20% | 0,20 |
> | 3324 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+201% · −42,7%** | +55% · −10,1% | +32% | −6,8% | 2,6 | 127 d | −7,6% | +24% | 0,20 |
> | 3325 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+189% · −44,7%** | +43% · −8,9% | +27% | −8,3% | 1,8 | 122 d | −5,8% | +18% | 0,25 |
> | 3326 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR | **+109% · −31,4%** | +43% · −9,9% | +29% | −5,6% | 2,3 | 91 d | −9,5% | +18% | 0,02 |
> | 3327 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+208% · −48,0%** | +50% · −9,5% | +31% | −7,4% | 1,8 | 76 d | −9,4% | +23% | 0,10 |
> | 3328 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX + MACD ·ADX | **+270% · −53,7%** | +59% · −10,6% | +35% | −8,7% | 2,6 | 128 d | −7,5% | +20% | 0,35 |
> | 3329 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+225% · −48,0%** | +62% · −12,3% | +34% | −4,8% | 2,9 | 127 d | −8,8% | +25% | 0,10 |
> | 3330 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX | **+320% · −72,0%** | +66% · −18,9% | +36% | −7,3% | 2,9 | 97 d | −11,8% | +20% | 0,39 |

> [!example]- Combinações 3331 a 3360 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3331 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+233% · −57,8%** | +49% · −12,5% | +30% | −5,5% | 2,3 | 120 d | −7,7% | +22% | 0,18 |
> | 3332 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+181% · −43,6%** | +42% · −9,2% | +27% | −11,2% | 1,9 | 81 d | −9,1% | +24% | 0,14 |
> | 3333 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+135% · −40,6%** | +41% · −10,6% | +27% | −12,5% | 1,7 | 77 d | −9,1% | +23% | 0,11 |
> | 3334 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL | **+136% · −47,1%** | +42% · −12,5% | +29% | −9,1% | 2,8 | 120 d | −9,1% | +14% | 0,16 |
> | 3335 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+225% · −49,8%** | +48% · −11,3% | +30% | −13,2% | 1,7 | 72 d | −10,2% | +22% | 0,30 |
> | 3336 | Donchian ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+128% · −26,1%** | +47% · −8,5% | +30% | −7,3% | 2,6 | 110 d | −9,4% | +23% | 0,07 |
> | 3337 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+321% · −58,9%** | +61% · −12,9% | +35% | −5,9% | 3,0 | 111 d | −10,9% | +20% | 0,31 |
> | 3338 | ADX ·ADX + VWAP ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+188% · −52,9%** | +47% · −10,2% | +31% | −9,3% | 2,1 | 122 d | −6,7% | +24% | 0,21 |
> | 3339 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+256% · −49,8%** | +63% · −13,5% | +34% | −6,0% | 1,9 | 72 d | −11,2% | +25% | 0,31 |
> | 3340 | BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+124% · −33,7%** | +37% · −7,7% | +24% | −5,3% | 2,2 | 85 d | −9,4% | +12% | 0,11 |
> | 3341 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+172% · −54,1%** | +43% · −11,4% | +31% | −8,5% | 2,1 | 85 d | −9,1% | +24% | 0,15 |
> | 3342 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+224% · −47,3%** | +48% · −9,4% | +28% | −4,2% | 1,4 | 72 d | −9,5% | +19% | 0,13 |
> | 3343 | BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+260% · −48,4%** | +52% · −9,2% | +33% | −7,4% | 2,1 | 81 d | −10,1% | +22% | 0,26 |
> | 3344 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+156% · −39,0%** | +46% · −9,2% | +30% | −6,2% | 1,0 | 77 d | −7,9% | +16% | −0,03 |
> | 3345 | 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+153% · −27,7%** | +41% · −6,3% | +27% | −8,2% | 1,6 | 111 d | −6,1% | +14% | 0,19 |
> | 3346 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+215% · −58,0%** | +51% · −13,9% | +32% | −7,4% | 2,4 | 83 d | −11,0% | +19% | 0,26 |
> | 3347 | ADX ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+193% · −42,2%** | +67% · −14,7% | +34% | −6,2% | 2,1 | 72 d | −13,1% | +28% | 0,39 |
> | 3348 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+237% · −45,2%** | +50% · −7,3% | +31% | −4,6% | 2,4 | 128 d | −7,2% | +21% | 0,02 |
> | 3349 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+144% · −33,9%** | +42% · −7,6% | +28% | −5,0% | 2,2 | 131 d | −6,0% | +19% | −0,01 |
> | 3350 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+178% · −37,3%** | +43% · −7,4% | +30% | −8,2% | 2,1 | 108 d | −7,6% | +23% | 0,14 |
> | 3351 | ADX ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+157% · −40,9%** | +46% · −9,9% | +30% | −7,1% | 1,0 | 76 d | −8,1% | +17% | 0,13 |
> | 3352 | ADX ·ADX + Donchian ·ADX + IFR ·ADX | **+232% · −40,8%** | +77% · −12,8% | +42% | −6,8% | 3,1 | 127 d | −9,4% | +24% | 0,33 |
> | 3353 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+191% · −48,5%** | +48% · −10,0% | +31% | −8,8% | 2,2 | 81 d | −10,9% | +27% | 0,14 |
> | 3354 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+249% · −51,3%** | +51% · −10,3% | +30% | −7,3% | 2,7 | 99 d | −10,8% | +18% | 0,22 |
> | 3355 | ADX ·ADX + Tendência ·ADX + Onda ·VAI | **+173% · −48,4%** | +63% · −16,3% | +40% | −11,8% | 2,2 | 106 d | −8,0% | +30% | 0,24 |
> | 3356 | VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+133% · −41,5%** | +42% · −10,8% | +28% | −13,3% | 1,9 | 95 d | −7,9% | +22% | 0,27 |
> | 3357 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+242% · −47,9%** | +51% · −9,2% | +30% | −7,3% | 2,4 | 83 d | −11,4% | +22% | 0,19 |
> | 3358 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+189% · −37,7%** | +43% · −5,9% | +26% | −3,9% | 2,3 | 158 d | −6,1% | +19% | 0,02 |
> | 3359 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+178% · −43,2%** | +42% · −9,2% | +27% | −9,3% | 2,0 | 80 d | −9,9% | +16% | 0,28 |
> | 3360 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+119% · −37,0%** | +33% · −7,5% | +26% | −12,2% | 2,1 | 181 d | −5,3% | +21% | 0,18 |

> [!example]- Combinações 3361 a 3390 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3361 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+200% · −54,5%** | +46% · −10,7% | +31% | −8,0% | 2,3 | 131 d | −6,5% | +20% | 0,20 |
> | 3362 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+200% · −56,6%** | +50% · −12,7% | +30% | −6,3% | 2,9 | 99 d | −11,5% | +15% | 0,08 |
> | 3363 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+169% · −32,9%** | +56% · −10,5% | +34% | −4,4% | 2,7 | 92 d | −11,7% | +22% | −0,06 |
> | 3364 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+181% · −48,4%** | +44% · −9,5% | +28% | −6,2% | 2,5 | 130 d | −7,3% | +19% | 0,06 |
> | 3365 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+216% · −53,1%** | +50% · −10,8% | +34% | −9,2% | 2,1 | 83 d | −9,6% | +22% | 0,29 |
> | 3366 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+267% · −39,9%** | +53% · −7,0% | +33% | −5,5% | 2,4 | 105 d | −9,0% | +22% | 0,09 |
> | 3367 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+237% · −60,7%** | +55% · −13,3% | +35% | −9,8% | 2,4 | 83 d | −11,1% | +24% | 0,33 |
> | 3368 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+190% · −48,1%** | +53% · −12,8% | +31% | −6,0% | 1,7 | 72 d | −10,5% | +26% | 0,20 |
> | 3369 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+211% · −59,6%** | +51% · −12,3% | +34% | −10,6% | 2,2 | 122 d | −6,8% | +24% | 0,32 |
> | 3370 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+186% · −52,1%** | +46% · −12,0% | +31% | −15,5% | 1,6 | 73 d | −9,7% | +23% | 0,31 |
> | 3371 | MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+138% · −24,7%** | +39% · −5,3% | +27% | −7,2% | 2,0 | 167 d | −5,1% | +16% | 0,06 |
> | 3372 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+163% · −47,5%** | +41% · −10,6% | +28% | −13,8% | 1,6 | 72 d | −10,0% | +23% | 0,24 |
> | 3373 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Onda ·VAI | **+261% · −52,4%** | +59% · −10,1% | +35% | −8,4% | 2,6 | 130 d | −7,4% | +20% | 0,27 |
> | 3374 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+192% · −40,4%** | +43% · −7,7% | +28% | −8,7% | 1,9 | 81 d | −9,4% | +23% | 0,17 |
> | 3375 | Donchian ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+127% · −30,2%** | +48% · −9,8% | +30% | −9,3% | 2,1 | 95 d | −8,6% | +28% | 0,24 |
> | 3376 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + MACD ·ADX + Pôr do sol ·POR | **+200% · −40,6%** | +46% · −7,5% | +30% | −7,0% | 1,8 | 122 d | −6,0% | +16% | 0,16 |
> | 3377 | BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI ⚠️ | **+192% · −48,8%** | +45% · −10,2% | +31% | −7,8% | 2,1 | 83 d | −9,5% | +23% | 0,21 |
> | 3378 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+134% · −35,4%** | +42% · −9,0% | +28% | −11,5% | 1,8 | 91 d | −7,9% | +19% | 0,04 |
> | 3379 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+131% · −46,9%** | +36% · −10,3% | +26% | −13,1% | 1,2 | 77 d | −8,2% | +21% | 0,17 |
> | 3380 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+201% · −53,0%** | +45% · −10,8% | +27% | −4,4% | 2,3 | 122 d | −7,4% | +17% | 0,15 |
> | 3381 | BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+140% · −34,7%** | +43% · −8,0% | +29% | −7,5% | 2,1 | 96 d | −8,3% | +24% | 0,03 |
> | 3382 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+155% · −44,4%** | +40% · −9,1% | +26% | −7,0% | 1,8 | 77 d | −9,7% | +20% | −0,01 |
> | 3383 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+190% · −63,0%** | +49% · −15,3% | +32% | −8,8% | 2,5 | 83 d | −11,9% | +19% | 0,33 |
> | 3384 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+263% · −54,8%** | +55% · −12,4% | +31% | −9,1% | 1,7 | 72 d | −10,6% | +24% | 0,32 |
> | 3385 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+153% · −33,0%** | +37% · −6,3% | +26% | −4,8% | 1,9 | 131 d | −5,3% | +18% | −0,02 |
> | 3386 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+90% · −19,3%** | +36% · −5,4% | +27% | −8,2% | 1,6 | 117 d | −5,9% | +16% | −0,06 |
> | 3387 | VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+126% · −33,6%** | +37% · −8,3% | +24% | −11,1% | 1,6 | 106 d | −6,4% | +20% | 0,25 |
> | 3388 | VWAP ·ADX + Donchian ·ADX + Bollinger ·ADX | **+153% · −31,4%** | +54% · −10,4% | +30% | −12,5% | 2,6 | 95 d | −10,7% | +17% | 0,35 |
> | 3389 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+167% · −58,5%** | +44% · −14,4% | +29% | −12,2% | 1,9 | 72 d | −11,7% | +17% | 0,18 |
> | 3390 | ADX ·ADX + GPS médias ·ADX + Pullback ·PUL | **+160% · −43,0%** | +59% · −15,3% | +34% | −6,2% | 2,9 | 122 d | −9,3% | +23% | 0,12 |

> [!example]- Combinações 3391 a 3420 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3391 | MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+150% · −25,6%** | +42% · −5,9% | +31% | −9,2% | 2,2 | 168 d | −5,9% | +20% | 0,09 |
> | 3392 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Tendência ·ADX | **+233% · −69,7%** | +57% · −17,5% | +36% | −8,7% | 2,7 | 120 d | −9,0% | +20% | 0,36 |
> | 3393 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+245% · −47,7%** | +52% · −9,8% | +30% | −7,0% | 2,4 | 122 d | −7,9% | +21% | 0,22 |
> | 3394 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Tendência ·ADX + Onda ·VAI | **+265% · −66,3%** | +60% · −15,5% | +38% | −9,5% | 2,5 | 106 d | −9,2% | +30% | 0,32 |
> | 3395 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+166% · −45,6%** | +41% · −9,8% | +28% | −12,4% | 1,5 | 73 d | −9,7% | +22% | 0,14 |
> | 3396 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+222% · −53,1%** | +51% · −11,4% | +32% | −6,4% | 1,5 | 72 d | −10,0% | +21% | 0,05 |
> | 3397 | Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+26% · −4,9%** | +19% · −2,0% | +17% | −1,9% | 1,2 | 191 d | −2,1% | +13% | 0,22 |
> | 3398 | Donchian ·ADX + GPS médias ·ADX + MACD ·ADX | **+180% · −38,7%** | +65% · −13,1% | +37% | −12,7% | 3,1 | 102 d | −13,3% | +25% | 0,43 |
> | 3399 | VWAP ·ADX + Donchian ·ADX + IFR ·ADX | **+164% · −32,6%** | +59% · −11,3% | +35% | −11,4% | 3,1 | 120 d | −10,9% | +19% | 0,35 |
> | 3400 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+163% · −56,4%** | +44% · −12,5% | +29% | −10,8% | 2,3 | 83 d | −10,7% | +17% | 0,16 |
> | 3401 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+266% · −58,8%** | +54% · −13,0% | +32% | −5,4% | 2,8 | 95 d | −11,7% | +17% | 0,21 |
> | 3402 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+138% · −36,9%** | +36% · −6,6% | +27% | −7,8% | 1,9 | 101 d | −7,5% | +22% | 0,03 |
> | 3403 | Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+129% · −28,6%** | +48% · −9,4% | +30% | −8,8% | 2,4 | 111 d | −8,7% | +21% | 0,28 |
> | 3404 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+180% · −45,6%** | +44% · −8,9% | +29% | −6,5% | 2,2 | 91 d | −9,5% | +22% | 0,07 |
> | 3405 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL + Onda ·VAI | **+230% · −55,5%** | +52% · −11,2% | +33% | −6,4% | 2,4 | 122 d | −7,8% | +25% | 0,16 |
> | 3406 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+159% · −59,3%** | +43% · −13,2% | +31% | −10,3% | 2,1 | 81 d | −10,4% | +21% | 0,25 |
> | 3407 | Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+209% · −39,5%** | +52% · −8,5% | +33% | −7,1% | 2,3 | 90 d | −10,1% | +27% | 0,09 |
> | 3408 | BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI ⚠️ | **+208% · −49,8%** | +46% · −9,8% | +30% | −6,8% | 2,1 | 83 d | −9,9% | +24% | 0,13 |
> | 3409 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+189% · −45,6%** | +48% · −9,8% | +30% | −11,5% | 2,4 | 102 d | −9,3% | +25% | 0,14 |
> | 3410 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+229% · −66,6%** | +57% · −16,1% | +34% | −6,3% | 2,9 | 95 d | −13,4% | +17% | 0,26 |
> | 3411 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+69% · −33,5%** | +31% · −10,9% | +23% | −3,9% | 2,2 | 99 d | −8,6% | +10% | −0,07 |
> | 3412 | BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+170% · −49,3%** | +46% · −12,9% | +29% | −5,6% | 2,4 | 85 d | −10,8% | +16% | 0,15 |
> | 3413 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+126% · −46,8%** | +41% · −12,3% | +26% | −6,0% | 2,3 | 82 d | −11,0% | +15% | −0,02 |
> | 3414 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+204% · −49,0%** | +50% · −9,8% | +31% | −8,6% | 1,8 | 76 d | −9,9% | +24% | 0,19 |
> | 3415 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pullback ·PUL | **+281% · −50,1%** | +57% · −9,9% | +34% | −6,1% | 2,8 | 129 d | −8,4% | +19% | 0,17 |
> | 3416 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+182% · −53,1%** | +55% · −14,6% | +34% | −12,0% | 2,5 | 83 d | −12,5% | +23% | 0,42 |
> | 3417 | ADX ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+228% · −40,5%** | +48% · −7,4% | +32% | −6,5% | 2,0 | 122 d | −6,6% | +23% | 0,09 |
> | 3418 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+173% · −36,8%** | +49% · −8,2% | +29% | −5,0% | 2,3 | 128 d | −7,1% | +20% | 0,05 |
> | 3419 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+218% · −49,7%** | +59% · −13,3% | +35% | −8,7% | 1,7 | 72 d | −10,8% | +25% | 0,25 |
> | 3420 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+198% · −39,1%** | +44% · −7,0% | +29% | −4,5% | 2,3 | 130 d | −6,8% | +16% | 0,04 |

> [!example]- Combinações 3421 a 3450 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3421 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+261% · −56,8%** | +57% · −12,5% | +31% | −7,3% | 2,8 | 91 d | −13,3% | +15% | 0,24 |
> | 3422 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+281% · −55,3%** | +63% · −12,2% | +36% | −9,8% | 2,9 | 111 d | −10,9% | +22% | 0,36 |
> | 3423 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL | **+231% · −46,4%** | +59% · −10,9% | +35% | −5,9% | 2,7 | 129 d | −8,1% | +22% | 0,13 |
> | 3424 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+235% · −56,9%** | +52% · −11,9% | +31% | −5,5% | 2,5 | 83 d | −12,2% | +18% | 0,19 |
> | 3425 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+105% · −36,5%** | +34% · −9,2% | +26% | −14,3% | 1,4 | 107 d | −6,2% | +21% | 0,25 |
> | 3426 | MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+127% · −24,5%** | +46% · −7,6% | +30% | −10,5% | 1,7 | 100 d | −7,1% | +15% | 0,29 |
> | 3427 | BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+211% · −48,2%** | +46% · −9,2% | +30% | −6,8% | 2,1 | 81 d | −10,3% | +23% | 0,15 |
> | 3428 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+187% · −45,5%** | +53% · −11,8% | +32% | −6,0% | 2,8 | 111 d | −10,3% | +17% | 0,18 |
> | 3429 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+248% · −45,3%** | +51% · −8,1% | +29% | −5,5% | 2,3 | 129 d | −6,9% | +16% | 0,16 |
> | 3430 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+221% · −47,7%** | +48% · −9,8% | +28% | −5,2% | 1,4 | 72 d | −9,9% | +20% | 0,21 |
> | 3431 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+192% · −53,1%** | +47% · −9,9% | +31% | −8,1% | 2,1 | 130 d | −6,3% | +21% | 0,15 |
> | 3432 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+284% · −57,0%** | +58% · −12,6% | +34% | −7,5% | 2,4 | 83 d | −11,5% | +22% | 0,31 |
> | 3433 | VWAP ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+132% · −38,6%** | +49% · −13,7% | +28% | −14,7% | 1,9 | 73 d | −12,0% | +19% | 0,37 |
> | 3434 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+225% · −53,6%** | +51% · −11,6% | +31% | −6,4% | 1,5 | 72 d | −10,1% | +20% | 0,10 |
> | 3435 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+142% · −53,5%** | +43% · −14,7% | +31% | −7,8% | 2,4 | 95 d | −9,8% | +19% | 0,17 |
> | 3436 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+215% · −71,0%** | +56% · −18,5% | +34% | −7,3% | 2,3 | 82 d | −11,9% | +19% | 0,32 |
> | 3437 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+247% · −40,7%** | +50% · −8,0% | +29% | −6,4% | 2,4 | 99 d | −9,5% | +20% | 0,12 |
> | 3438 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+198% · −39,4%** | +42% · −6,6% | +28% | −5,4% | 1,8 | 90 d | −8,3% | +23% | −0,02 |
> | 3439 | VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+179% · −45,7%** | +42% · −10,1% | +27% | −12,5% | 1,9 | 81 d | −9,5% | +25% | 0,25 |
> | 3440 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+147% · −45,8%** | +39% · −9,9% | +28% | −13,1% | 2,0 | 94 d | −8,5% | +25% | 0,10 |
> | 3441 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+133% · −36,5%** | +34% · −7,0% | +25% | −8,0% | 1,7 | 120 d | −6,2% | +19% | 0,04 |
> | 3442 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+79% · −35,3%** | +28% · −9,1% | +22% | −9,9% | 1,3 | 108 d | −6,1% | +18% | 0,02 |
> | 3443 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX | **+187% · −54,7%** | +51% · −14,9% | +29% | −5,2% | 2,2 | 94 d | −9,2% | +18% | 0,19 |
> | 3444 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+203% · −37,6%** | +54% · −9,2% | +34% | −7,7% | 1,9 | 122 d | −6,4% | +18% | 0,22 |
> | 3445 | ADX ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+121% · −34,1%** | +47% · −11,0% | +29% | −6,8% | 1,1 | 75 d | −8,8% | +21% | 0,10 |
> | 3446 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+242% · −63,7%** | +57% · −14,8% | +36% | −8,5% | 1,7 | 72 d | −11,0% | +24% | 0,24 |
> | 3447 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+173% · −55,3%** | +42% · −11,6% | +28% | −4,7% | 2,2 | 129 d | −6,6% | +21% | 0,02 |
> | 3448 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+158% · −31,1%** | +36% · −5,7% | +24% | −4,5% | 1,7 | 120 d | −6,3% | +17% | 0,01 |
> | 3449 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+187% · −48,5%** | +44% · −10,7% | +29% | −12,4% | 1,9 | 83 d | −9,3% | +23% | 0,25 |
> | 3450 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+219% · −42,9%** | +57% · −10,7% | +34% | −5,7% | 2,5 | 122 d | −8,3% | +27% | 0,07 |

> [!example]- Combinações 3451 a 3480 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3451 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+179% · −44,3%** | +48% · −12,1% | +31% | −10,2% | 2,4 | 92 d | −10,5% | +19% | 0,12 |
> | 3452 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+146% · −52,2%** | +44% · −13,1% | +28% | −6,1% | 2,6 | 99 d | −10,9% | +11% | 0,20 |
> | 3453 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+234% · −73,6%** | +60% · −19,4% | +37% | −8,6% | 2,3 | 82 d | −12,0% | +24% | 0,39 |
> | 3454 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Pôr do sol ·POR | **+165% · −55,5%** | +45% · −12,1% | +29% | −10,8% | 2,2 | 82 d | −11,1% | +18% | 0,18 |
> | 3455 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Tendência ·ADX | **+250% · −61,3%** | +67% · −17,9% | +40% | −8,2% | 3,2 | 111 d | −12,8% | +18% | 0,53 |
> | 3456 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+101% · −22,7%** | +29% · −4,3% | +23% | −6,1% | 1,5 | 188 d | −3,8% | +17% | 0,01 |
> | 3457 | ADX ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+219% · −42,6%** | +55% · −10,6% | +32% | −7,0% | 1,2 | 76 d | −8,8% | +16% | 0,23 |
> | 3458 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+125% · −31,0%** | +36% · −7,4% | +24% | −9,7% | 1,6 | 106 d | −6,6% | +18% | 0,09 |
> | 3459 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR | **+190% · −44,0%** | +53% · −11,2% | +32% | −6,1% | 2,8 | 111 d | −10,5% | +18% | 0,18 |
> | 3460 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+198% · −60,8%** | +47% · −13,1% | +30% | −5,8% | 2,8 | 111 d | −10,4% | +15% | 0,20 |
> | 3461 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+160% · −58,5%** | +50% · −16,9% | +32% | −6,0% | 2,5 | 83 d | −13,0% | +16% | 0,17 |
> | 3462 | Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR | **+130% · −25,9%** | +48% · −8,4% | +30% | −7,3% | 2,6 | 129 d | −8,0% | +22% | 0,11 |
> | 3463 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+252% · −54,5%** | +52% · −10,7% | +31% | −7,1% | 1,4 | 72 d | −10,2% | +20% | 0,28 |
> | 3464 | BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+160% · −48,0%** | +46% · −13,0% | +31% | −6,9% | 2,4 | 111 d | −8,8% | +18% | 0,19 |
> | 3465 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+124% · −33,9%** | +32% · −6,3% | +23% | −9,5% | 1,7 | 146 d | −5,0% | +19% | 0,13 |
> | 3466 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Tendência ·ADX | **+274% · −62,9%** | +58% · −14,5% | +35% | −6,8% | 3,0 | 159 d | −8,6% | +19% | 0,22 |
> | 3467 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+245% · −60,6%** | +55% · −13,7% | +33% | −6,7% | 2,6 | 129 d | −8,1% | +21% | 0,17 |
> | 3468 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX | **+271% · −65,4%** | +62% · −15,1% | +36% | −7,0% | 2,7 | 119 d | −9,5% | +25% | 0,39 |
> | 3469 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+186% · −58,5%** | +46% · −12,9% | +32% | −12,4% | 2,0 | 83 d | −9,6% | +22% | 0,35 |
> | 3470 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI ⚠️ | **+144% · −31,2%** | +35% · −5,9% | +24% | −8,7% | 2,1 | 181 d | −5,7% | +18% | 0,06 |
> | 3471 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+216% · −58,6%** | +52% · −13,2% | +29% | −5,3% | 1,9 | 72 d | −12,4% | +20% | 0,22 |
> | 3472 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+221% · −47,2%** | +48% · −8,2% | +32% | −6,1% | 2,2 | 130 d | −6,7% | +21% | 0,14 |
> | 3473 | BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+229% · −58,9%** | +52% · −13,3% | +31% | −6,4% | 2,5 | 83 d | −12,7% | +16% | 0,32 |
> | 3474 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+219% · −39,9%** | +47% · −6,6% | +29% | −4,2% | 2,3 | 158 d | −6,6% | +19% | 0,06 |
> | 3475 | Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+201% · −40,0%** | +68% · −13,6% | +37% | −10,5% | 3,0 | 102 d | −12,9% | +26% | 0,27 |
> | 3476 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+137% · −34,1%** | +42% · −9,0% | +28% | −11,9% | 2,3 | 110 d | −8,5% | +19% | 0,15 |
> | 3477 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+159% · −38,9%** | +39% · −7,0% | +27% | −6,5% | 1,4 | 122 d | −5,3% | +20% | 0,05 |
> | 3478 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+144% · −52,0%** | +44% · −14,0% | +31% | −7,8% | 2,2 | 85 d | −10,2% | +21% | 0,19 |
> | 3479 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+218% · −47,3%** | +59% · −12,6% | +33% | −9,3% | 2,5 | 83 d | −13,5% | +20% | 0,39 |
> | 3480 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+216% · −49,1%** | +51% · −10,2% | +32% | −8,4% | 2,4 | 95 d | −10,2% | +24% | 0,32 |

> [!example]- Combinações 3481 a 3510 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3481 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX | **+181% · −48,1%** | +55% · −13,3% | +33% | −15,8% | 2,8 | 102 d | −11,5% | +22% | 0,42 |
> | 3482 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+175% · −52,7%** | +44% · −10,8% | +31% | −8,5% | 2,0 | 85 d | −9,5% | +24% | 0,19 |
> | 3483 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+203% · −47,7%** | +46% · −10,6% | +30% | −11,7% | 1,9 | 80 d | −10,4% | +20% | 0,38 |
> | 3484 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+294% · −56,0%** | +59% · −12,5% | +33% | −7,2% | 1,7 | 72 d | −11,1% | +21% | 0,25 |
> | 3485 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+302% · −46,3%** | +61% · −10,1% | +36% | −7,5% | 2,7 | 128 d | −8,7% | +21% | 0,25 |
> | 3486 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Onda ·VAI | **+135% · −37,2%** | +42% · −9,0% | +28% | −11,7% | 1,6 | 91 d | −8,0% | +18% | 0,13 |
> | 3487 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+290% · −49,4%** | +60% · −10,1% | +34% | −5,3% | 2,6 | 110 d | −10,1% | +27% | 0,12 |
> | 3488 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Bollinger ·ADX + Onda ·VAI | **+263% · −50,2%** | +56% · −8,9% | +32% | −8,9% | 2,2 | 120 d | −7,8% | +19% | 0,28 |
> | 3489 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+146% · −31,3%** | +35% · −5,9% | +24% | −8,8% | 2,0 | 183 d | −5,5% | +17% | 0,09 |
> | 3490 | VWAP ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+165% · −40,3%** | +47% · −10,4% | +33% | −12,1% | 1,9 | 112 d | −7,1% | +27% | 0,28 |
> | 3491 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Bollinger ·ADX | **+293% · −49,8%** | +58% · −10,2% | +34% | −8,8% | 2,8 | 111 d | −10,9% | +22% | 0,40 |
> | 3492 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+237% · −43,1%** | +61% · −11,1% | +36% | −8,5% | 3,0 | 124 d | −10,0% | +22% | 0,31 |
> | 3493 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+158% · −32,3%** | +42% · −6,4% | +27% | −3,4% | 2,1 | 92 d | −9,1% | +21% | −0,04 |
> | 3494 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX | **+205% · −62,1%** | +64% · −18,7% | +36% | −7,2% | 2,3 | 77 d | −13,7% | +23% | 0,42 |
> | 3495 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+233% · −52,1%** | +54% · −11,5% | +33% | −11,2% | 2,6 | 111 d | −9,8% | +20% | 0,33 |
> | 3496 | VWAP ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+153% · −31,7%** | +42% · −6,8% | +28% | −6,0% | 2,4 | 137 d | −7,1% | +18% | 0,14 |
> | 3497 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+221% · −54,6%** | +51% · −12,0% | +32% | −7,7% | 1,5 | 72 d | −10,6% | +22% | 0,19 |
> | 3498 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+145% · −50,4%** | +38% · −9,8% | +25% | −4,7% | 2,1 | 131 d | −6,3% | +16% | 0,01 |
> | 3499 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+147% · −52,3%** | +47% · −14,5% | +30% | −10,1% | 2,3 | 81 d | −12,3% | +18% | 0,16 |
> | 3500 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+154% · −38,6%** | +43% · −8,8% | +28% | −7,3% | 2,1 | 85 d | −10,1% | +18% | 0,14 |
> | 3501 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+123% · −51,0%** | +41% · −14,1% | +27% | −7,8% | 2,2 | 82 d | −11,6% | +12% | 0,18 |
> | 3502 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+250% · −46,7%** | +54% · −9,4% | +32% | −5,7% | 2,5 | 128 d | −7,9% | +18% | 0,14 |
> | 3503 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX | **+218% · −55,5%** | +52% · −12,8% | +31% | −11,7% | 2,2 | 77 d | −12,9% | +18% | 0,38 |
> | 3504 | VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+167% · −33,4%** | +46% · −8,4% | +32% | −11,5% | 2,0 | 133 d | −6,0% | +22% | 0,24 |
> | 3505 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+124% · −61,3%** | +36% · −12,6% | +26% | −7,8% | 2,0 | 85 d | −9,5% | +13% | 0,14 |
> | 3506 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+182% · −51,4%** | +42% · −11,8% | +28% | −14,1% | 1,3 | 72 d | −10,1% | +22% | 0,35 |
> | 3507 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+213% · −46,3%** | +47% · −9,9% | +31% | −11,2% | 2,2 | 92 d | −9,5% | +22% | 0,18 |
> | 3508 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+254% · −62,5%** | +56% · −14,1% | +34% | −8,8% | 2,5 | 83 d | −13,3% | +21% | 0,40 |
> | 3509 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+224% · −47,8%** | +50% · −10,0% | +32% | −8,3% | 2,2 | 95 d | −9,3% | +25% | 0,15 |
> | 3510 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+187% · −35,6%** | +41% · −6,0% | +26% | −4,6% | 2,2 | 161 d | −6,2% | +14% | 0,09 |

> [!example]- Combinações 3511 a 3540 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3511 | Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+103% · −25,3%** | +40% · −7,0% | +25% | −2,8% | 2,2 | 120 d | −7,9% | +19% | −0,05 |
> | 3512 | Donchian ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+126% · −30,5%** | +48% · −8,7% | +30% | −7,1% | 2,0 | 95 d | −8,5% | +24% | −0,09 |
> | 3513 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+155% · −31,6%** | +43% · −6,8% | +29% | −4,1% | 2,2 | 130 d | −6,8% | +19% | −0,07 |
> | 3514 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+263% · −60,1%** | +54% · −13,6% | +32% | −5,3% | 2,9 | 111 d | −11,3% | +16% | 0,22 |
> | 3515 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+112% · −37,9%** | +31% · −7,7% | +24% | −11,2% | 1,2 | 112 d | −5,9% | +19% | 0,05 |
> | 3516 | Donchian ·ADX + GPS médias ·ADX | **+144% · −35,3%** | +77% · −17,9% | +39% | −11,5% | 3,3 | 110 d | −17,9% | +20% | 0,45 |
> | 3517 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+183% · −47,3%** | +45% · −9,1% | +28% | −6,2% | 2,4 | 130 d | −7,3% | +20% | 0,05 |
> | 3518 | BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX | **+157% · −32,3%** | +55% · −10,6% | +32% | −7,2% | 2,2 | 80 d | −12,6% | +19% | 0,32 |
> | 3519 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+98% · −32,4%** | +33% · −8,0% | +23% | −9,2% | 2,2 | 140 d | −6,6% | +18% | −0,04 |
> | 3520 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+153% · −25,1%** | +41% · −5,1% | +27% | −6,5% | 1,5 | 111 d | −6,4% | +13% | 0,10 |
> | 3521 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+217% · −50,2%** | +59% · −12,2% | +35% | −5,8% | 1,8 | 80 d | −9,9% | +26% | 0,24 |
> | 3522 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+175% · −41,7%** | +43% · −8,0% | +30% | −9,2% | 2,1 | 108 d | −8,1% | +24% | 0,26 |
> | 3523 | GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+106% · −29,7%** | +43% · −9,1% | +28% | −9,6% | 2,0 | 82 d | −10,5% | +21% | −0,13 |
> | 3524 | VWAP ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+195% · −39,0%** | +43% · −7,1% | +29% | −8,1% | 2,1 | 125 d | −6,8% | +23% | 0,18 |
> | 3525 | ADX ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+132% · −35,0%** | +49% · −11,4% | +27% | −6,2% | 1,6 | 112 d | −6,4% | +21% | 0,17 |
> | 3526 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·ADX | **+200% · −51,1%** | +45% · −9,7% | +30% | −5,7% | 2,5 | 161 d | −7,3% | +19% | 0,08 |
> | 3527 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+169% · −39,3%** | +39% · −8,0% | +26% | −7,9% | 1,9 | 92 d | −8,7% | +18% | 0,02 |
> | 3528 | VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+137% · −39,6%** | +36% · −7,9% | +27% | −8,6% | 1,9 | 131 d | −5,9% | +24% | 0,14 |
> | 3529 | ADX ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+153% · −42,3%** | +55% · −13,7% | +35% | −8,2% | 2,7 | 131 d | −8,2% | +24% | 0,10 |
> | 3530 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+291% · −68,3%** | +65% · −16,5% | +36% | −7,3% | 2,9 | 95 d | −15,2% | +18% | 0,43 |
> | 3531 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+247% · −56,0%** | +56% · −12,4% | +35% | −9,4% | 1,5 | 72 d | −10,9% | +21% | 0,24 |
> | 3532 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+109% · −33,0%** | +29% · −6,4% | +23% | −6,3% | 1,9 | 181 d | −5,3% | +16% | −0,03 |
> | 3533 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+221% · −51,8%** | +51% · −11,1% | +32% | −8,8% | 2,5 | 111 d | −9,6% | +19% | 0,36 |
> | 3534 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+218% · −43,1%** | +46% · −6,6% | +28% | −3,8% | 2,4 | 159 d | −7,1% | +18% | −0,01 |
> | 3535 | BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+107% · −36,8%** | +43% · −12,4% | +29% | −7,1% | 2,3 | 91 d | −10,4% | +15% | 0,30 |
> | 3536 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+209% · −50,0%** | +47% · −11,0% | +28% | −7,9% | 1,9 | 77 d | −10,7% | +20% | 0,11 |
> | 3537 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+196% · −44,9%** | +42% · −9,6% | +29% | −13,6% | 1,4 | 112 d | −6,2% | +18% | 0,34 |
> | 3538 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+268% · −42,8%** | +52% · −6,9% | +31% | −4,4% | 2,8 | 128 d | −9,0% | +23% | 0,07 |
> | 3539 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+116% · −44,8%** | +34% · −8,7% | +23% | −6,1% | 1,9 | 87 d | −9,2% | +15% | 0,03 |
> | 3540 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+219% · −57,3%** | +52% · −12,8% | +29% | −5,3% | 1,8 | 72 d | −12,4% | +21% | 0,18 |

> [!example]- Combinações 3541 a 3570 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3541 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+147% · −49,5%** | +39% · −10,3% | +28% | −11,6% | 1,9 | 91 d | −9,1% | +18% | 0,30 |
> | 3542 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Bollinger ·ADX ⚠️ | **+134% · −40,6%** | +35% · −8,0% | +23% | −8,0% | 1,9 | 91 d | −8,9% | +13% | 0,09 |
> | 3543 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+197% · −53,5%** | +46% · −10,4% | +28% | −5,7% | 1,4 | 72 d | −10,5% | +19% | 0,11 |
> | 3544 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Tendência ·ADX + Onda ·VAI | **+252% · −64,0%** | +60% · −14,1% | +36% | −9,3% | 2,7 | 128 d | −8,7% | +24% | 0,32 |
> | 3545 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+194% · −39,3%** | +46% · −7,4% | +30% | −7,0% | 1,8 | 122 d | −6,5% | +17% | 0,11 |
> | 3546 | VWAP ·ADX + MACD ·ADX + Tendência ·ADX | **+116% · −37,8%** | +46% · −13,3% | +33% | −13,0% | 2,1 | 120 d | −7,7% | +23% | 0,47 |
> | 3547 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+226% · −59,1%** | +54% · −13,0% | +32% | −6,0% | 2,0 | 78 d | −11,5% | +22% | 0,15 |
> | 3548 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+62% · −24,1%** | +25% · −5,4% | +20% | −6,7% | 1,6 | 210 d | −4,4% | +13% | −0,02 |
> | 3549 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+195% · −63,6%** | +47% · −13,6% | +30% | −5,8% | 2,6 | 111 d | −10,0% | +14% | 0,20 |
> | 3550 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+138% · −42,7%** | +36% · −9,2% | +27% | −14,1% | 1,2 | 112 d | −6,0% | +19% | 0,26 |
> | 3551 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+127% · −41,9%** | +36% · −8,9% | +25% | −11,7% | 1,8 | 94 d | −8,5% | +24% | 0,10 |
> | 3552 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+207% · −53,5%** | +53% · −11,7% | +34% | −11,4% | 2,2 | 83 d | −11,4% | +27% | 0,34 |
> | 3553 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+302% · −43,9%** | +57% · −7,8% | +34% | −5,7% | 2,8 | 128 d | −9,1% | +23% | 0,10 |
> | 3554 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+108% · −36,2%** | +30% · −7,2% | +22% | −4,7% | 1,6 | 124 d | −5,7% | +18% | −0,01 |
> | 3555 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+187% · −52,5%** | +48% · −11,2% | +31% | −9,8% | 2,2 | 83 d | −11,3% | +25% | 0,30 |
> | 3556 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+205% · −59,9%** | +54% · −13,9% | +33% | −9,3% | 2,4 | 83 d | −13,1% | +22% | 0,25 |
> | 3557 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL | **+171% · −51,8%** | +50% · −13,9% | +31% | −8,2% | 2,7 | 100 d | −11,6% | +17% | 0,23 |
> | 3558 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+139% · −31,1%** | +42% · −7,7% | +28% | −6,2% | 1,9 | 130 d | −6,2% | +19% | −0,01 |
> | 3559 | VWAP ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+181% · −32,5%** | +47% · −8,1% | +30% | −10,3% | 2,1 | 139 d | −6,5% | +21% | 0,27 |
> | 3560 | VWAP ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+125% · −28,0%** | +38% · −6,3% | +28% | −9,4% | 1,9 | 182 d | −5,4% | +19% | 0,00 |
> | 3561 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+220% · −62,3%** | +52% · −14,5% | +33% | −7,1% | 2,8 | 111 d | −10,9% | +20% | 0,28 |
> | 3562 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+163% · −57,2%** | +51% · −16,4% | +32% | −6,0% | 2,4 | 83 d | −13,4% | +17% | 0,17 |
> | 3563 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+182% · −41,4%** | +42% · −8,0% | +27% | −5,4% | 2,0 | 99 d | −8,5% | +19% | 0,00 |
> | 3564 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+128% · −55,6%** | +38% · −12,5% | +26% | −9,7% | 2,0 | 82 d | −10,7% | +13% | 0,07 |
> | 3565 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+237% · −45,5%** | +52% · −7,6% | +32% | −6,5% | 2,1 | 127 d | −7,1% | +22% | 0,12 |
> | 3566 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL | **+238% · −69,5%** | +61% · −17,4% | +34% | −5,7% | 2,7 | 102 d | −11,7% | +18% | 0,26 |
> | 3567 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+247% · −51,9%** | +56% · −10,6% | +35% | −6,9% | 1,6 | 76 d | −10,1% | +23% | 0,22 |
> | 3568 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+251% · −70,6%** | +59% · −18,3% | +34% | −6,5% | 2,9 | 127 d | −9,9% | +20% | 0,22 |
> | 3569 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+127% · −53,6%** | +36% · −11,3% | +26% | −6,3% | 2,0 | 95 d | −8,9% | +15% | 0,08 |
> | 3570 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+198% · −36,7%** | +44% · −6,5% | +29% | −5,1% | 1,9 | 122 d | −6,8% | +20% | 0,01 |

> [!example]- Combinações 3571 a 3600 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3571 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+248% · −71,5%** | +58% · −18,9% | +35% | −6,4% | 3,0 | 127 d | −10,0% | +19% | 0,23 |
> | 3572 | MACD ·ADX + Pôr do sol ·POR | **+49% · −11,2%** | +30% · −5,4% | +24% | −7,5% | 1,3 | 147 d | −4,4% | +19% | −0,04 |
> | 3573 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+138% · −42,7%** | +36% · −7,9% | +24% | −4,5% | 2,2 | 111 d | −8,5% | +14% | 0,04 |
> | 3574 | Donchian ·ADX + Pullback ·PUL | **+112% · −27,5%** | +58% · −12,6% | +34% | −4,7% | 3,0 | 120 d | −11,3% | +14% | 0,00 |
> | 3575 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+160% · −35,8%** | +38% · −6,1% | +24% | −4,3% | 1,6 | 131 d | −5,3% | +13% | 0,11 |
> | 3576 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+247% · −62,3%** | +61% · −14,6% | +36% | −11,2% | 3,0 | 111 d | −12,7% | +22% | 0,47 |
> | 3577 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+176% · −49,2%** | +41% · −9,2% | +25% | −4,1% | 1,7 | 97 d | −7,9% | +20% | 0,09 |
> | 3578 | VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+104% · −37,4%** | +34% · −9,6% | +26% | −6,7% | 2,2 | 171 d | −6,3% | +16% | 0,10 |
> | 3579 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+172% · −51,8%** | +50% · −13,2% | +31% | −5,8% | 2,3 | 122 d | −8,0% | +21% | 0,15 |
> | 3580 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Onda ·VAI | **+174% · −46,9%** | +55% · −12,5% | +33% | −14,7% | 2,3 | 83 d | −12,0% | +27% | 0,34 |
> | 3581 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+239% · −63,1%** | +57% · −14,1% | +32% | −8,4% | 1,8 | 72 d | −13,1% | +24% | 0,37 |
> | 3582 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+119% · −33,4%** | +32% · −6,4% | +26% | −10,7% | 1,9 | 183 d | −5,5% | +19% | 0,05 |
> | 3583 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+187% · −53,5%** | +47% · −11,6% | +30% | −9,3% | 2,6 | 111 d | −10,2% | +16% | 0,19 |
> | 3584 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pullback ·PUL | **+247% · −59,2%** | +58% · −13,3% | +33% | −7,6% | 2,8 | 128 d | −9,4% | +20% | 0,20 |
> | 3585 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+186% · −52,3%** | +51% · −14,0% | +35% | −8,7% | 2,4 | 111 d | −9,3% | +24% | 0,30 |
> | 3586 | VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+167% · −40,6%** | +38% · −8,6% | +26% | −12,1% | 1,4 | 112 d | −6,4% | +19% | 0,25 |
> | 3587 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+192% · −45,6%** | +52% · −12,4% | +32% | −6,5% | 2,4 | 99 d | −10,4% | +17% | 0,10 |
> | 3588 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+226% · −67,6%** | +57% · −16,5% | +34% | −6,3% | 3,0 | 111 d | −13,1% | +16% | 0,26 |
> | 3589 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+106% · −35,7%** | +42% · −12,4% | +28% | −6,9% | 2,1 | 91 d | −9,7% | +17% | −0,07 |
> | 3590 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+135% · −41,9%** | +36% · −8,1% | +27% | −9,2% | 1,8 | 101 d | −8,0% | +23% | 0,14 |
> | 3591 | ADX ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+172% · −64,2%** | +52% · −19,7% | +33% | −8,6% | 2,3 | 96 d | −9,8% | +18% | 0,26 |
> | 3592 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+212% · −62,0%** | +51% · −14,4% | +30% | −4,6% | 2,5 | 128 d | −8,4% | +16% | 0,18 |
> | 3593 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+66% · −21,0%** | +29% · −6,4% | +22% | −3,9% | 1,2 | 111 d | −6,3% | +16% | 0,07 |
> | 3594 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+149% · −46,1%** | +40% · −9,9% | +28% | −13,2% | 1,9 | 95 d | −8,6% | +24% | 0,15 |
> | 3595 | Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+66% · −16,0%** | +25% · −3,7% | +21% | −5,2% | 1,5 | 221 d | −4,0% | +16% | −0,02 |
> | 3596 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+225% · −62,2%** | +60% · −15,1% | +35% | −8,2% | 2,0 | 76 d | −13,1% | +29% | 0,32 |
> | 3597 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+115% · −42,6%** | +38% · −10,7% | +27% | −9,7% | 2,0 | 91 d | −9,4% | +15% | 0,09 |
> | 3598 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX | **+205% · −47,3%** | +53% · −12,0% | +30% | −5,2% | 2,7 | 99 d | −12,6% | +14% | 0,18 |
> | 3599 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+252% · −60,6%** | +54% · −13,5% | +30% | −4,3% | 2,4 | 105 d | −10,0% | +19% | 0,19 |
> | 3600 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+212% · −50,7%** | +47% · −11,2% | +28% | −7,9% | 1,8 | 77 d | −10,8% | +21% | 0,14 |

> [!example]- Combinações 3601 a 3630 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3601 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+161% · −43,6%** | +39% · −8,3% | +26% | −3,1% | 2,3 | 130 d | −7,4% | +14% | −0,01 |
> | 3602 | BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+173% · −47,6%** | +47% · −12,1% | +29% | −5,7% | 2,2 | 85 d | −11,3% | +17% | 0,15 |
> | 3603 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+161% · −59,0%** | +45% · −13,6% | +29% | −11,6% | 2,2 | 83 d | −11,6% | +15% | 0,33 |
> | 3604 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+97% · −32,9%** | +32% · −8,3% | +24% | −8,4% | 2,1 | 176 d | −6,2% | +17% | −0,07 |
> | 3605 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+193% · −56,4%** | +47% · −13,4% | +30% | −10,7% | 2,2 | 99 d | −9,7% | +16% | 0,20 |
> | 3606 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+171% · −51,7%** | +51% · −14,3% | +31% | −6,2% | 2,1 | 108 d | −8,7% | +20% | 0,26 |
> | 3607 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR | **+189% · −52,6%** | +47% · −11,2% | +30% | −9,3% | 2,5 | 102 d | −10,6% | +17% | 0,21 |
> | 3608 | GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+108% · −30,2%** | +44% · −9,1% | +28% | −9,5% | 2,0 | 82 d | −10,7% | +19% | −0,05 |
> | 3609 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+144% · −43,6%** | +39% · −8,6% | +28% | −10,2% | 1,8 | 91 d | −8,8% | +22% | 0,09 |
> | 3610 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Tendência ·ADX | **+264% · −65,0%** | +60% · −15,3% | +36% | −9,2% | 2,8 | 129 d | −9,1% | +24% | 0,39 |
> | 3611 | MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+90% · −22,5%** | +31% · −4,9% | +24% | −7,9% | 1,4 | 188 d | −4,3% | +17% | 0,01 |
> | 3612 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+126% · −48,4%** | +34% · −10,8% | +25% | −9,3% | 1,9 | 120 d | −7,4% | +16% | −0,01 |
> | 3613 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+237% · −59,7%** | +61% · −13,7% | +36% | −10,2% | 2,7 | 95 d | −13,3% | +26% | 0,40 |
> | 3614 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX | **+149% · −49,8%** | +59% · −18,2% | +35% | −11,1% | 2,4 | 83 d | −15,5% | +18% | 0,48 |
> | 3615 | BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+207% · −50,5%** | +46% · −10,0% | +30% | −8,0% | 2,0 | 83 d | −10,8% | +23% | 0,25 |
> | 3616 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+124% · −35,8%** | +38% · −8,3% | +26% | −6,0% | 1,4 | 131 d | −5,0% | +19% | 0,01 |
> | 3617 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+174% · −39,8%** | +47% · −10,5% | +29% | −10,9% | 1,5 | 77 d | −9,9% | +18% | 0,28 |
> | 3618 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+187% · −52,1%** | +45% · −10,5% | +29% | −7,2% | 1,3 | 76 d | −9,6% | +21% | 0,17 |
> | 3619 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+164% · −57,7%** | +42% · −13,9% | +29% | −10,1% | 2,0 | 95 d | −9,1% | +17% | 0,25 |
> | 3620 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+88% · −49,7%** | +28% · −10,1% | +22% | −8,5% | 1,9 | 120 d | −7,5% | +11% | 0,06 |
> | 3621 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+213% · −59,7%** | +52% · −13,3% | +33% | −7,2% | 2,5 | 95 d | −11,5% | +24% | 0,22 |
> | 3622 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+139% · −46,3%** | +38% · −9,1% | +26% | −8,3% | 1,9 | 87 d | −9,7% | +20% | 0,03 |
> | 3623 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+173% · −39,1%** | +41% · −7,0% | +27% | −5,0% | 1,8 | 130 d | −6,0% | +17% | 0,09 |
> | 3624 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX + Pôr do sol ·POR | **+252% · −46,5%** | +54% · −9,4% | +32% | −5,6% | 2,4 | 129 d | −8,0% | +17% | 0,15 |
> | 3625 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+180% · −62,7%** | +56% · −18,6% | +36% | −10,2% | 2,4 | 83 d | −14,7% | +21% | 0,44 |
> | 3626 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+53% · −24,8%** | +26% · −7,7% | +21% | −9,7% | 1,8 | 210 d | −5,3% | +13% | −0,05 |
> | 3627 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+160% · −39,9%** | +38% · −8,3% | +29% | −12,9% | 2,1 | 183 d | −6,1% | +21% | 0,19 |
> | 3628 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+145% · −59,5%** | +40% · −13,5% | +29% | −9,8% | 2,0 | 85 d | −10,0% | +18% | 0,21 |
> | 3629 | ADX ·ADX + Donchian ·ADX + Tendência ·ADX | **+232% · −55,8%** | +78% · −21,1% | +43% | −9,4% | 3,3 | 128 d | −12,0% | +25% | 0,38 |
> | 3630 | BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+139% · −50,4%** | +44% · −13,3% | +31% | −8,0% | 2,0 | 83 d | −10,6% | +25% | 0,07 |

> [!example]- Combinações 3631 a 3660 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3631 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+128% · −36,6%** | +39% · −9,4% | +29% | −9,3% | 2,0 | 140 d | −6,5% | +22% | 0,23 |
> | 3632 | ADX ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+229% · −48,9%** | +61% · −12,9% | +33% | −7,1% | 1,8 | 74 d | −12,6% | +24% | 0,27 |
> | 3633 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Tendência ·ADX | **+184% · −57,1%** | +53% · −15,4% | +35% | −10,4% | 2,3 | 128 d | −7,7% | +22% | 0,35 |
> | 3634 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+175% · −48,5%** | +50% · −13,0% | +29% | −7,2% | 2,2 | 82 d | −13,3% | +15% | 0,19 |
> | 3635 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+251% · −53,0%** | +56% · −11,4% | +33% | −9,6% | 2,2 | 83 d | −12,1% | +27% | 0,31 |
> | 3636 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+80% · −28,0%** | +25% · −4,8% | +21% | −8,4% | 1,4 | 213 d | −4,1% | +17% | 0,04 |
> | 3637 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+104% · −29,6%** | +34% · −6,9% | +26% | −5,0% | 2,1 | 199 d | −6,2% | +18% | 0,04 |
> | 3638 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+218% · −63,5%** | +51% · −15,1% | +33% | −7,1% | 2,6 | 111 d | −10,5% | +19% | 0,27 |
> | 3639 | ADX ·ADX + VWAP ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+159% · −50,7%** | +48% · −13,3% | +31% | −8,9% | 2,2 | 130 d | −7,3% | +20% | 0,20 |
> | 3640 | BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+100% · −35,5%** | +34% · −8,3% | +25% | −6,9% | 1,7 | 86 d | −9,1% | +22% | −0,03 |
> | 3641 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+125% · −31,7%** | +31% · −5,7% | +23% | −8,6% | 1,6 | 174 d | −5,0% | +16% | 0,11 |
> | 3642 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+137% · −35,2%** | +35% · −6,4% | +27% | −7,0% | 1,9 | 171 d | −5,9% | +21% | 0,05 |
> | 3643 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Tendência ·ADX | **+273% · −68,9%** | +66% · −17,2% | +38% | −7,5% | 3,0 | 128 d | −10,5% | +22% | 0,36 |
> | 3644 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Onda ·VAI | **+260% · −63,8%** | +62% · −14,0% | +36% | −7,1% | 2,5 | 119 d | −9,8% | +27% | 0,32 |
> | 3645 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+106% · −48,6%** | +31% · −10,9% | +23% | −10,5% | 1,2 | 85 d | −8,1% | +16% | 0,07 |
> | 3646 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+121% · −33,7%** | +33% · −6,5% | +25% | −10,9% | 1,7 | 191 d | −5,2% | +18% | 0,09 |
> | 3647 | ADX ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+133% · −32,0%** | +48% · −10,0% | +27% | −5,2% | 1,6 | 130 d | −5,7% | +16% | 0,11 |
> | 3648 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+295% · −59,9%** | +62% · −13,0% | +37% | −7,3% | 2,9 | 128 d | −9,8% | +24% | 0,28 |
> | 3649 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+237% · −53,0%** | +51% · −12,0% | +31% | −11,4% | 1,8 | 77 d | −11,3% | +22% | 0,31 |
> | 3650 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+287% · −55,8%** | +62% · −12,1% | +33% | −8,7% | 2,4 | 120 d | −9,3% | +22% | 0,34 |
> | 3651 | BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+217% · −59,3%** | +60% · −16,6% | +34% | −7,2% | 2,4 | 83 d | −15,6% | +18% | 0,41 |
> | 3652 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Tendência ·ADX ⚠️ | **+245% · −59,6%** | +54% · −13,1% | +33% | −6,4% | 2,7 | 127 d | −9,6% | +18% | 0,28 |
> | 3653 | BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+197% · −37,5%** | +52% · −9,2% | +32% | −8,4% | 2,0 | 83 d | −11,0% | +24% | 0,26 |
> | 3654 | GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+107% · −31,9%** | +44% · −10,5% | +28% | −11,8% | 2,0 | 81 d | −11,4% | +22% | 0,21 |
> | 3655 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX | **+218% · −59,5%** | +66% · −17,4% | +37% | −10,2% | 3,0 | 111 d | −14,9% | +18% | 0,51 |
> | 3656 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+173% · −63,7%** | +52% · −19,5% | +33% | −7,5% | 2,3 | 119 d | −9,2% | +19% | 0,17 |
> | 3657 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX | **+207% · −65,9%** | +57% · −16,2% | +34% | −12,5% | 2,6 | 95 d | −14,1% | +17% | 0,44 |
> | 3658 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+194% · −41,3%** | +43% · −7,3% | +25% | −4,4% | 2,2 | 99 d | −9,9% | +16% | 0,05 |
> | 3659 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+87% · −33,5%** | +38% · −11,5% | +25% | −12,8% | 2,0 | 95 d | −9,4% | +17% | −0,06 |
> | 3660 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·ADX | **+126% · −58,0%** | +36% · −12,2% | +26% | −7,9% | 1,9 | 85 d | −9,8% | +14% | 0,15 |

> [!example]- Combinações 3661 a 3690 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3661 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL | **+184% · −58,5%** | +57% · −17,2% | +33% | −8,2% | 2,8 | 99 d | −14,7% | +14% | 0,28 |
> | 3662 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + MACD ·ADX | **+179% · −60,4%** | +49% · −14,0% | +32% | −14,0% | 2,2 | 83 d | −12,2% | +20% | 0,39 |
> | 3663 | Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+71% · −19,2%** | +31% · −5,5% | +25% | −5,5% | 1,9 | 186 d | −5,9% | +21% | −0,08 |
> | 3664 | GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+131% · −33,8%** | +51% · −11,7% | +33% | −13,8% | 2,0 | 81 d | −11,6% | +22% | 0,27 |
> | 3665 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+269% · −44,0%** | +52% · −6,5% | +31% | −4,0% | 2,6 | 128 d | −9,0% | +21% | −0,03 |
> | 3666 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+272% · −66,7%** | +64% · −15,8% | +37% | −8,3% | 2,9 | 111 d | −12,7% | +20% | 0,37 |
> | 3667 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+232% · −51,5%** | +55% · −11,4% | +34% | −10,5% | 2,1 | 83 d | −11,8% | +25% | 0,27 |
> | 3668 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+70% · −28,3%** | +27% · −6,5% | +22% | −11,0% | 1,3 | 174 d | −4,6% | +18% | 0,06 |
> | 3669 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+210% · −42,3%** | +48% · −7,3% | +29% | −5,2% | 2,1 | 130 d | −7,0% | +22% | 0,06 |
> | 3670 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX | **+199% · −68,0%** | +56% · −17,3% | +33% | −9,9% | 2,0 | 78 d | −12,6% | +20% | 0,37 |
> | 3671 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+127% · −58,6%** | +38% · −13,7% | +26% | −11,2% | 1,9 | 81 d | −11,5% | +12% | 0,21 |
> | 3672 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+174% · −49,5%** | +42% · −9,6% | +25% | −4,5% | 1,8 | 97 d | −8,4% | +18% | 0,13 |
> | 3673 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+207% · −39,5%** | +44% · −7,2% | +27% | −6,1% | 1,4 | 122 d | −6,1% | +16% | 0,19 |
> | 3674 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+167% · −45,5%** | +51% · −11,5% | +31% | −6,2% | 1,7 | 76 d | −11,2% | +24% | 0,03 |
> | 3675 | BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+142% · −32,7%** | +43% · −7,5% | +29% | −7,4% | 1,9 | 101 d | −8,7% | +23% | 0,07 |
> | 3676 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+156% · −46,9%** | +38% · −10,3% | +25% | −11,5% | 1,3 | 77 d | −9,6% | +17% | 0,26 |
> | 3677 | ADX ·ADX + Bollinger ·ADX + Onda ·VAI | **+160% · −35,5%** | +57% · −11,5% | +32% | −8,8% | 1,3 | 76 d | −10,0% | +18% | 0,23 |
> | 3678 | ADX ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+137% · −43,1%** | +54% · −15,5% | +31% | −6,8% | 1,9 | 77 d | −12,2% | +23% | 0,21 |
> | 3679 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+108% · −47,0%** | +32% · −10,5% | +23% | −10,6% | 1,1 | 85 d | −8,2% | +16% | 0,11 |
> | 3680 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+126% · −34,3%** | +32% · −6,4% | +23% | −9,7% | 1,6 | 174 d | −5,2% | +18% | 0,15 |
> | 3681 | GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+156% · −38,1%** | +45% · −9,2% | +30% | −9,2% | 1,8 | 84 d | −9,6% | +18% | −0,04 |
> | 3682 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+160% · −33,9%** | +37% · −6,3% | +24% | −5,5% | 1,6 | 120 d | −6,9% | +18% | 0,08 |
> | 3683 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX | **+251% · −45,6%** | +62% · −11,5% | +34% | −7,2% | 2,9 | 111 d | −12,8% | +18% | 0,38 |
> | 3684 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX | **+204% · −71,3%** | +65% · −23,1% | +38% | −8,3% | 2,3 | 82 d | −14,7% | +21% | 0,43 |
> | 3685 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+186% · −49,6%** | +44% · −9,7% | +28% | −4,5% | 1,9 | 120 d | −7,5% | +19% | 0,08 |
> | 3686 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Tendência ·ADX | **+196% · −51,0%** | +55% · −14,5% | +36% | −11,3% | 2,8 | 120 d | −11,1% | +21% | 0,50 |
> | 3687 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+193% · −62,2%** | +53% · −14,6% | +32% | −7,7% | 2,0 | 77 d | −13,1% | +26% | 0,20 |
> | 3688 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·ADX | **+137% · −38,7%** | +35% · −7,4% | +23% | −8,1% | 1,8 | 91 d | −9,3% | +14% | 0,08 |
> | 3689 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+162% · −46,2%** | +41% · −9,1% | +27% | −6,8% | 2,2 | 111 d | −9,1% | +19% | 0,07 |
> | 3690 | BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+170% · −49,9%** | +47% · −13,1% | +29% | −7,2% | 2,2 | 85 d | −11,9% | +15% | 0,27 |

> [!example]- Combinações 3691 a 3720 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3691 | BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+70% · −37,8%** | +32% · −12,5% | +23% | −6,2% | 2,0 | 91 d | −10,1% | +8% | 0,10 |
> | 3692 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+204% · −51,3%** | +57% · −14,3% | +33% | −14,4% | 2,4 | 98 d | −11,5% | +22% | 0,31 |
> | 3693 | GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+158% · −36,7%** | +56% · −12,0% | +31% | −10,7% | 2,0 | 81 d | −12,4% | +21% | 0,23 |
> | 3694 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+135% · −36,3%** | +40% · −9,2% | +26% | −7,4% | 2,3 | 159 d | −7,2% | +15% | 0,03 |
> | 3695 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+102% · −33,5%** | +35% · −7,6% | +25% | −6,8% | 1,6 | 86 d | −9,1% | +22% | −0,02 |
> | 3696 | VWAP ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+155% · −32,5%** | +42% · −7,0% | +28% | −6,0% | 2,3 | 142 d | −7,4% | +19% | 0,18 |
> | 3697 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+146% · −41,9%** | +40% · −8,6% | +28% | −10,1% | 1,7 | 87 d | −9,1% | +22% | 0,13 |
> | 3698 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+175% · −53,5%** | +46% · −11,5% | +28% | −6,8% | 2,5 | 99 d | −11,6% | +16% | 0,06 |
> | 3699 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR | **+92% · −20,7%** | +37% · −6,6% | +27% | −8,5% | 2,1 | 171 d | −6,7% | +15% | 0,02 |
> | 3700 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + MACD ·ADX | **+183% · −44,0%** | +52% · −10,0% | +34% | −9,0% | 1,8 | 122 d | −7,0% | +18% | 0,31 |
> | 3701 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+220% · −72,0%** | +60% · −18,3% | +37% | −8,7% | 2,1 | 78 d | −14,4% | +28% | 0,34 |
> | 3702 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+148% · −59,1%** | +42% · −13,7% | +28% | −13,3% | 2,0 | 81 d | −12,0% | +16% | 0,24 |
> | 3703 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+175% · −38,0%** | +39% · −7,7% | +27% | −11,7% | 2,0 | 181 d | −6,3% | +20% | 0,23 |
> | 3704 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+95% · −29,3%** | +28% · −5,1% | +23% | −7,8% | 1,5 | 211 d | −4,6% | +16% | −0,01 |
> | 3705 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Bollinger ·ADX | **+171% · −39,5%** | +47% · −8,4% | +28% | −6,4% | 2,2 | 131 d | −7,2% | +15% | 0,21 |
> | 3706 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+100% · −36,5%** | +30% · −7,3% | +24% | −11,9% | 1,3 | 174 d | −4,6% | +20% | 0,08 |
> | 3707 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+175% · −48,0%** | +42% · −8,9% | +28% | −5,5% | 2,1 | 161 d | −6,7% | +18% | 0,08 |
> | 3708 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+150% · −37,7%** | +45% · −9,3% | +27% | −4,6% | 2,1 | 122 d | −8,0% | +23% | 0,03 |
> | 3709 | VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+85% · −34,8%** | +31% · −8,8% | +24% | −12,1% | 2,0 | 183 d | −6,1% | +20% | 0,18 |
> | 3710 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·ADX | **+135% · −44,5%** | +35% · −9,5% | +23% | −9,5% | 1,8 | 85 d | −9,8% | +12% | 0,19 |
> | 3711 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+239% · −42,2%** | +49% · −6,5% | +29% | −3,6% | 2,1 | 105 d | −9,1% | +20% | 0,01 |
> | 3712 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+185% · −59,3%** | +49% · −13,4% | +32% | −7,6% | 2,2 | 83 d | −12,4% | +24% | 0,14 |
> | 3713 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+222% · −69,8%** | +57% · −17,5% | +34% | −7,2% | 2,9 | 111 d | −13,9% | +15% | 0,41 |
> | 3714 | BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+198% · −54,3%** | +52% · −14,9% | +33% | −8,8% | 2,2 | 83 d | −12,5% | +21% | 0,40 |
> | 3715 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+186% · −48,9%** | +44% · −9,5% | +28% | −4,2% | 1,9 | 128 d | −7,0% | +21% | −0,02 |
> | 3716 | BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+234% · −54,8%** | +51% · −11,5% | +33% | −9,2% | 2,0 | 83 d | −11,3% | +24% | 0,35 |
> | 3717 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+186% · −48,4%** | +53% · −13,0% | +32% | −7,1% | 2,6 | 111 d | −11,1% | +15% | 0,38 |
> | 3718 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+159% · −64,4%** | +45% · −15,8% | +30% | −9,3% | 2,2 | 83 d | −12,5% | +15% | 0,19 |
> | 3719 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pullback ·PUL | **+201% · −60,1%** | +49% · −13,4% | +31% | −6,6% | 2,3 | 128 d | −8,1% | +18% | 0,19 |
> | 3720 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+173% · −53,8%** | +46% · −11,7% | +31% | −10,4% | 2,0 | 82 d | −11,8% | +26% | 0,19 |

> [!example]- Combinações 3721 a 3750 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3721 | Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+260% · −60,6%** | +54% · −13,7% | +32% | −6,6% | 2,7 | 111 d | −12,2% | +15% | 0,33 |
> | 3722 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+203% · −55,9%** | +46% · −11,6% | +28% | −5,7% | 1,8 | 97 d | −8,7% | +22% | 0,18 |
> | 3723 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+282% · −45,6%** | +59% · −8,3% | +36% | −7,9% | 2,2 | 102 d | −9,9% | +25% | 0,24 |
> | 3724 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+214% · −61,4%** | +50% · −14,2% | +30% | −4,6% | 2,4 | 129 d | −8,3% | +17% | 0,09 |
> | 3725 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX + Tendência ·ADX ⚠️ | **+176% · −55,7%** | +42% · −12,0% | +28% | −7,2% | 2,0 | 85 d | −10,8% | +15% | 0,20 |
> | 3726 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+158% · −38,5%** | +47% · −9,0% | +30% | −6,7% | 1,8 | 122 d | −7,0% | +18% | 0,19 |
> | 3727 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+215% · −54,7%** | +48% · −11,1% | +31% | −6,0% | 1,9 | 120 d | −7,8% | +25% | 0,09 |
> | 3728 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+217% · −59,4%** | +55% · −13,6% | +31% | −9,0% | 2,5 | 128 d | −8,7% | +20% | 0,26 |
> | 3729 | VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+151% · −40,9%** | +37% · −8,6% | +26% | −12,9% | 1,5 | 130 d | −5,7% | +21% | 0,27 |
> | 3730 | GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+218% · −42,6%** | +54% · −11,1% | +32% | −9,9% | 1,9 | 84 d | −10,5% | +18% | 0,24 |
> | 3731 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+243% · −45,1%** | +50% · −9,5% | +29% | −7,3% | 2,4 | 111 d | −10,0% | +18% | 0,23 |
> | 3732 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+151% · −48,4%** | +39% · −10,7% | +28% | −12,8% | 1,8 | 120 d | −7,6% | +19% | 0,17 |
> | 3733 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+188% · −42,1%** | +44% · −8,5% | +29% | −11,0% | 1,7 | 90 d | −9,3% | +21% | 0,07 |
> | 3734 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+115% · −38,9%** | +37% · −10,1% | +24% | −9,0% | 2,1 | 159 d | −6,8% | +15% | 0,09 |
> | 3735 | Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+182% · −36,2%** | +49% · −9,0% | +31% | −8,7% | 2,0 | 95 d | −9,9% | +26% | 0,21 |
> | 3736 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+155% · −41,0%** | +39% · −7,3% | +27% | −7,6% | 1,8 | 131 d | −6,4% | +18% | 0,12 |
> | 3737 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+150% · −53,0%** | +42% · −11,5% | +28% | −9,4% | 1,9 | 82 d | −11,7% | +21% | 0,19 |
> | 3738 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX | **+249% · −52,7%** | +54% · −11,1% | +32% | −10,2% | 2,4 | 95 d | −12,4% | +17% | 0,38 |
> | 3739 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+248% · −59,4%** | +55% · −13,1% | +33% | −6,7% | 2,5 | 159 d | −8,3% | +21% | 0,19 |
> | 3740 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+148% · −62,9%** | +41% · −13,0% | +27% | −9,9% | 2,3 | 99 d | −10,9% | +11% | 0,24 |
> | 3741 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+202% · −59,7%** | +60% · −17,1% | +32% | −7,0% | 1,7 | 72 d | −15,9% | +21% | 0,41 |
> | 3742 | VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+127% · −29,9%** | +39% · −6,3% | +28% | −9,3% | 1,7 | 184 d | −5,6% | +18% | 0,09 |
> | 3743 | VWAP ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+93% · −41,6%** | +39% · −13,4% | +29% | −9,6% | 2,2 | 129 d | −7,7% | +14% | 0,22 |
> | 3744 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+255% · −59,9%** | +55% · −12,9% | +30% | −4,2% | 2,3 | 105 d | −10,3% | +20% | 0,16 |
> | 3745 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+238% · −71,0%** | +62% · −18,0% | +37% | −9,7% | 2,9 | 111 d | −14,4% | +20% | 0,49 |
> | 3746 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+192% · −51,6%** | +48% · −11,0% | +31% | −9,6% | 2,0 | 82 d | −12,2% | +24% | 0,14 |
> | 3747 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+177% · −48,1%** | +42% · −9,1% | +25% | −4,0% | 1,7 | 97 d | −8,5% | +19% | 0,09 |
> | 3748 | GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+111% · −31,7%** | +59% · −16,3% | +35% | −12,2% | 2,0 | 77 d | −14,4% | +24% | 0,23 |
> | 3749 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+156% · −40,0%** | +39% · −8,2% | +28% | −9,9% | 1,2 | 83 d | −8,8% | +15% | 0,11 |
> | 3750 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX | **+131% · −38,5%** | +50% · −13,0% | +34% | −11,0% | 2,2 | 91 d | −11,3% | +23% | 0,39 |

> [!example]- Combinações 3751 a 3780 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3751 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+224% · −49,5%** | +51% · −10,4% | +31% | −8,0% | 2,2 | 122 d | −8,3% | +23% | 0,14 |
> | 3752 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL | **+238% · −65,6%** | +55% · −15,8% | +33% | −5,7% | 2,5 | 129 d | −8,9% | +21% | 0,21 |
> | 3753 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+146% · −46,7%** | +44% · −11,9% | +28% | −4,3% | 2,4 | 119 d | −9,8% | +12% | 0,05 |
> | 3754 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + Onda ·VAI | **+233% · −50,5%** | +68% · −13,1% | +37% | −7,9% | 2,5 | 102 d | −11,7% | +31% | 0,27 |
> | 3755 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+200% · −41,0%** | +44% · −7,6% | +29% | −4,5% | 2,2 | 131 d | −7,4% | +15% | 0,03 |
> | 3756 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+154% · −48,5%** | +40% · −10,4% | +26% | −7,8% | 1,8 | 83 d | −10,2% | +19% | 0,10 |
> | 3757 | Donchian ·ADX + Pôr do sol ·POR + Onda ·VAI | **+128% · −32,2%** | +48% · −9,4% | +30% | −7,0% | 1,8 | 92 d | −9,2% | +23% | 0,01 |
> | 3758 | GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+183% · −42,2%** | +51% · −10,8% | +33% | −13,0% | 1,7 | 84 d | −9,9% | +19% | 0,26 |
> | 3759 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+165% · −45,5%** | +40% · −9,1% | +25% | −6,1% | 1,9 | 87 d | −10,5% | +17% | 0,05 |
> | 3760 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+179% · −47,6%** | +44% · −10,6% | +29% | −10,4% | 1,8 | 83 d | −10,3% | +22% | 0,13 |
> | 3761 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+237% · −45,3%** | +52% · −8,6% | +34% | −8,6% | 1,6 | 122 d | −6,8% | +20% | 0,22 |
> | 3762 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+220% · −56,9%** | +54% · −12,6% | +31% | −7,8% | 2,6 | 128 d | −9,2% | +21% | 0,14 |
> | 3763 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+269% · −50,4%** | +70% · −13,5% | +38% | −7,0% | 2,5 | 102 d | −12,1% | +29% | 0,26 |
> | 3764 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+132% · −40,6%** | +36% · −7,6% | +25% | −7,3% | 1,4 | 131 d | −5,6% | +17% | 0,08 |
> | 3765 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX | **+195% · −70,3%** | +50% · −18,2% | +32% | −7,2% | 2,5 | 128 d | −9,0% | +16% | 0,24 |
> | 3766 | ADX ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+118% · −33,1%** | +38% · −7,9% | +26% | −6,5% | 1,2 | 122 d | −6,2% | +19% | −0,01 |
> | 3767 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+162% · −56,6%** | +45% · −12,6% | +27% | −4,6% | 1,8 | 80 d | −11,3% | +20% | 0,07 |
> | 3768 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+182% · −37,6%** | +48% · −8,4% | +31% | −7,4% | 1,8 | 90 d | −9,9% | +25% | −0,04 |
> | 3769 | BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+139% · −36,3%** | +42% · −9,1% | +29% | −9,3% | 1,7 | 82 d | −10,3% | +20% | 0,07 |
> | 3770 | ADX ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+167% · −47,2%** | +52% · −12,2% | +31% | −8,0% | 1,6 | 76 d | −11,9% | +25% | 0,18 |
> | 3771 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR | **+175% · −50,9%** | +51% · −12,8% | +31% | −5,4% | 2,1 | 122 d | −8,1% | +22% | 0,12 |
> | 3772 | BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+141% · −48,8%** | +44% · −12,6% | +31% | −7,9% | 1,9 | 83 d | −11,0% | +25% | 0,12 |
> | 3773 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+176% · −48,0%** | +65% · −17,4% | +36% | −7,4% | 1,6 | 72 d | −13,8% | +27% | 0,26 |
> | 3774 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+186% · −59,1%** | +54% · −17,1% | +33% | −6,2% | 2,7 | 111 d | −12,8% | +16% | 0,24 |
> | 3775 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+187% · −58,0%** | +49% · −12,9% | +32% | −7,5% | 2,1 | 83 d | −12,5% | +25% | 0,17 |
> | 3776 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+209% · −54,8%** | +48% · −12,1% | +29% | −8,7% | 2,0 | 82 d | −12,3% | +23% | 0,19 |
> | 3777 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+151% · −50,4%** | +41% · −10,6% | +28% | −8,0% | 2,0 | 86 d | −11,1% | +22% | 0,03 |
> | 3778 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+175% · −58,1%** | +45% · −12,7% | +29% | −6,7% | 1,9 | 120 d | −8,1% | +19% | 0,15 |
> | 3779 | MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+92% · −22,6%** | +31% · −5,2% | +24% | −8,1% | 1,3 | 188 d | −4,9% | +17% | 0,06 |
> | 3780 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+257% · −59,9%** | +58% · −13,3% | +36% | −7,8% | 2,5 | 115 d | −10,8% | +27% | 0,32 |

> [!example]- Combinações 3781 a 3810 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3781 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+198% · −57,5%** | +51% · −13,2% | +30% | −6,5% | 1,6 | 73 d | −12,7% | +23% | 0,12 |
> | 3782 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+132% · −35,7%** | +34% · −7,0% | +26% | −9,9% | 1,8 | 179 d | −6,0% | +19% | −0,00 |
> | 3783 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+220% · −61,2%** | +56% · −14,1% | +33% | −9,5% | 1,5 | 72 d | −13,5% | +25% | 0,29 |
> | 3784 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+97% · −26,6%** | +27% · −4,6% | +20% | −7,1% | 1,5 | 171 d | −5,3% | +16% | 0,05 |
> | 3785 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+219% · −53,5%** | +53% · −11,6% | +31% | −8,7% | 2,3 | 99 d | −11,3% | +20% | 0,16 |
> | 3786 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+202% · −50,3%** | +49% · −10,3% | +30% | −8,7% | 2,0 | 129 d | −7,2% | +20% | 0,25 |
> | 3787 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+147% · −58,2%** | +40% · −12,9% | +29% | −10,0% | 1,8 | 85 d | −10,4% | +18% | 0,24 |
> | 3788 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+102% · −36,8%** | +30% · −7,3% | +24% | −12,1% | 1,1 | 176 d | −4,8% | +19% | 0,13 |
> | 3789 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+261% · −60,7%** | +58% · −14,7% | +32% | −7,3% | 1,7 | 73 d | −13,8% | +24% | 0,32 |
> | 3790 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+206% · −50,5%** | +55% · −12,6% | +31% | −5,6% | 1,3 | 72 d | −12,2% | +20% | 0,28 |
> | 3791 | Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+278% · −61,6%** | +59% · −14,0% | +35% | −7,9% | 2,4 | 95 d | −13,3% | +24% | 0,36 |
> | 3792 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Bollinger ·ADX | **+179% · −54,5%** | +45% · −12,0% | +27% | −10,8% | 2,0 | 81 d | −12,9% | +14% | 0,25 |
> | 3793 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX | **+166% · −41,1%** | +47% · −11,0% | +29% | −10,8% | 1,8 | 80 d | −12,2% | +17% | 0,35 |
> | 3794 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+143% · −32,6%** | +35% · −6,1% | +24% | −5,9% | 1,6 | 107 d | −7,9% | +19% | 0,06 |
> | 3795 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+234% · −54,6%** | +54% · −11,9% | +29% | −7,7% | 2,3 | 90 d | −13,8% | +18% | 0,18 |
> | 3796 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+170% · −46,2%** | +51% · −11,7% | +31% | −6,4% | 1,6 | 77 d | −11,3% | +23% | 0,04 |
> | 3797 | VWAP ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+124% · −40,1%** | +40% · −10,3% | +29% | −11,2% | 1,9 | 130 d | −6,9% | +25% | 0,25 |
> | 3798 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + IFR ·ADX | **+207% · −51,3%** | +60% · −13,7% | +35% | −9,2% | 2,5 | 122 d | −9,6% | +24% | 0,31 |
> | 3799 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+106% · −47,5%** | +33% · −10,5% | +25% | −12,2% | 1,4 | 82 d | −9,7% | +18% | 0,20 |
> | 3800 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+296% · −70,8%** | +65% · −18,3% | +38% | −7,0% | 2,6 | 127 d | −9,9% | +23% | 0,31 |
> | 3801 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+200% · −41,3%** | +52% · −8,8% | +31% | −4,7% | 2,5 | 159 d | −8,4% | +20% | 0,01 |
> | 3802 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+145% · −50,4%** | +38% · −9,9% | +25% | −4,8% | 2,0 | 161 d | −6,8% | +18% | −0,00 |
> | 3803 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Onda ·VAI | **+155% · −41,8%** | +48% · −11,2% | +31% | −15,2% | 1,9 | 101 d | −9,2% | +22% | 0,41 |
> | 3804 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+161% · −63,7%** | +46% · −15,5% | +30% | −9,3% | 2,1 | 83 d | −12,9% | +16% | 0,21 |
> | 3805 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+116% · −31,7%** | +36% · −7,4% | +25% | −4,8% | 1,8 | 161 d | −6,1% | +18% | −0,02 |
> | 3806 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+206% · −55,1%** | +46% · −11,2% | +28% | −5,5% | 1,7 | 97 d | −8,8% | +22% | 0,16 |
> | 3807 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+146% · −36,4%** | +42% · −8,5% | +26% | −6,0% | 1,6 | 130 d | −6,2% | +14% | 0,17 |
> | 3808 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+201% · −63,5%** | +54% · −14,5% | +35% | −10,1% | 2,1 | 83 d | −13,1% | +28% | 0,37 |
> | 3809 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+242% · −54,0%** | +53% · −11,9% | +31% | −7,1% | 1,2 | 72 d | −12,0% | +17% | 0,24 |
> | 3810 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+244% · −71,9%** | +59% · −19,0% | +35% | −7,7% | 2,7 | 127 d | −10,4% | +18% | 0,33 |

> [!example]- Combinações 3811 a 3840 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3811 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+191% · −48,9%** | +57% · −12,7% | +35% | −9,6% | 1,6 | 76 d | −12,2% | +24% | 0,24 |
> | 3812 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Bollinger ·ADX | **+162% · −46,3%** | +39% · −9,4% | +26% | −11,3% | 1,8 | 85 d | −10,3% | +17% | 0,24 |
> | 3813 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+203% · −50,2%** | +55% · −12,3% | +35% | −8,1% | 2,1 | 125 d | −7,9% | +23% | 0,24 |
> | 3814 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+136% · −38,6%** | +42% · −10,0% | +28% | −13,2% | 2,2 | 128 d | −8,0% | +19% | 0,32 |
> | 3815 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+111% · −46,0%** | +32% · −9,3% | +25% | −10,1% | 1,9 | 120 d | −8,0% | +15% | 0,07 |
> | 3816 | VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+113% · −34,5%** | +35% · −8,5% | +24% | −12,5% | 1,6 | 146 d | −6,0% | +20% | 0,28 |
> | 3817 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+231% · −54,1%** | +53% · −11,8% | +31% | −10,2% | 1,7 | 77 d | −11,7% | +24% | 0,30 |
> | 3818 | BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+182% · −60,5%** | +49% · −14,3% | +32% | −9,0% | 2,1 | 83 d | −12,9% | +23% | 0,30 |
> | 3819 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+227% · −69,1%** | +62% · −16,9% | +37% | −9,0% | 2,5 | 95 d | −15,1% | +24% | 0,43 |
> | 3820 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+117% · −35,0%** | +33% · −6,4% | +25% | −7,6% | 1,2 | 98 d | −7,8% | +17% | −0,00 |
> | 3821 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+200% · −41,8%** | +45% · −7,7% | +30% | −8,3% | 1,9 | 130 d | −7,0% | +18% | 0,13 |
> | 3822 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+285% · −64,1%** | +59% · −15,2% | +35% | −7,9% | 2,7 | 111 d | −12,7% | +20% | 0,44 |
> | 3823 | VWAP ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+179% · −37,6%** | +48% · −9,3% | +32% | −10,5% | 2,1 | 123 d | −8,0% | +26% | 0,33 |
> | 3824 | ADX ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+207% · −54,4%** | +59% · −15,3% | +35% | −8,3% | 1,4 | 72 d | −13,1% | +21% | 0,22 |
> | 3825 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+173% · −37,7%** | +41% · −6,7% | +27% | −4,2% | 1,8 | 131 d | −6,5% | +14% | 0,05 |
> | 3826 | VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+115% · −42,2%** | +39% · −11,5% | +27% | −15,0% | 1,7 | 81 d | −11,0% | +25% | 0,24 |
> | 3827 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX | **+211% · −68,4%** | +67% · −21,3% | +38% | −8,3% | 2,9 | 111 d | −17,1% | +16% | 0,54 |
> | 3828 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+226% · −58,1%** | +55% · −12,6% | +35% | −9,1% | 2,1 | 83 d | −13,4% | +26% | 0,29 |
> | 3829 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+240% · −47,4%** | +51% · −7,4% | +31% | −4,9% | 2,2 | 131 d | −7,9% | +21% | 0,03 |
> | 3830 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+126% · −52,5%** | +34% · −12,2% | +25% | −10,8% | 1,8 | 120 d | −7,9% | +14% | 0,13 |
> | 3831 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+272% · −47,8%** | +54% · −10,1% | +32% | −9,9% | 2,4 | 111 d | −10,5% | +23% | 0,32 |
> | 3832 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+250% · −60,3%** | +55% · −13,7% | +30% | −5,0% | 2,3 | 105 d | −10,8% | +18% | 0,26 |
> | 3833 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+95% · −30,3%** | +33% · −7,3% | +22% | −4,9% | 1,3 | 161 d | −5,3% | +17% | 0,03 |
> | 3834 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+182% · −68,0%** | +48% · −15,4% | +31% | −7,8% | 2,3 | 95 d | −12,4% | +15% | 0,26 |
> | 3835 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+197% · −58,9%** | +51% · −13,7% | +30% | −7,4% | 1,5 | 73 d | −13,3% | +22% | 0,24 |
> | 3836 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+184% · −60,9%** | +49% · −14,0% | +30% | −7,5% | 1,7 | 78 d | −12,1% | +24% | 0,15 |
> | 3837 | GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+158% · −38,8%** | +45% · −9,4% | +29% | −8,9% | 1,7 | 89 d | −9,8% | +18% | 0,07 |
> | 3838 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+153% · −49,5%** | +42% · −10,1% | +28% | −8,0% | 2,0 | 86 d | −11,3% | +23% | 0,04 |
> | 3839 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+163% · −47,0%** | +41% · −9,6% | +25% | −7,0% | 1,9 | 87 d | −11,0% | +15% | 0,14 |
> | 3840 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+146% · −32,7%** | +42% · −7,2% | +28% | −4,7% | 1,9 | 161 d | −6,5% | +18% | −0,04 |

> [!example]- Combinações 3841 a 3870 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3841 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+169% · −38,5%** | +40% · −6,6% | +27% | −6,7% | 1,8 | 130 d | −6,9% | +18% | 0,10 |
> | 3842 | VWAP ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+124% · −33,7%** | +39% · −8,2% | +29% | −9,3% | 1,9 | 133 d | −6,9% | +24% | 0,06 |
> | 3843 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+156% · −68,7%** | +46% · −16,9% | +30% | −10,5% | 2,1 | 83 d | −13,4% | +14% | 0,34 |
> | 3844 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+161% · −59,2%** | +45% · −13,6% | +27% | −5,7% | 1,7 | 80 d | −11,9% | +19% | 0,11 |
> | 3845 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+237% · −50,9%** | +55% · −10,7% | +35% | −10,0% | 2,4 | 111 d | −10,7% | +29% | 0,39 |
> | 3846 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Onda ·VAI | **+165% · −48,6%** | +50% · −12,6% | +31% | −8,5% | 2,3 | 95 d | −12,4% | +22% | 0,23 |
> | 3847 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Bollinger ·ADX | **+229% · −48,6%** | +59% · −11,7% | +32% | −7,2% | 2,3 | 129 d | −8,4% | +17% | 0,32 |
> | 3848 | BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+245% · −60,0%** | +56% · −13,3% | +34% | −8,3% | 2,1 | 83 d | −13,9% | +26% | 0,34 |
> | 3849 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+184% · −61,9%** | +54% · −17,8% | +33% | −6,2% | 2,6 | 111 d | −12,3% | +15% | 0,23 |
> | 3850 | ADX ·ADX + VWAP ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+147% · −38,5%** | +43% · −9,4% | +26% | −7,9% | 1,5 | 122 d | −6,9% | +17% | 0,23 |
> | 3851 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+304% · −59,2%** | +61% · −12,9% | +33% | −5,7% | 2,1 | 105 d | −9,7% | +23% | 0,28 |
> | 3852 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+158% · −31,5%** | +44% · −6,4% | +29% | −4,1% | 1,9 | 130 d | −7,2% | +18% | −0,04 |
> | 3853 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Tendência ·ADX | **+174% · −67,8%** | +50% · −17,2% | +33% | −13,0% | 2,1 | 83 d | −13,9% | +19% | 0,43 |
> | 3854 | BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+180% · −49,0%** | +52% · −12,5% | +35% | −8,7% | 1,9 | 83 d | −11,7% | +23% | 0,24 |
> | 3855 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+203% · −53,4%** | +49% · −10,4% | +31% | −6,0% | 1,8 | 108 d | −8,6% | +24% | 0,10 |
> | 3856 | BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+108% · −49,8%** | +44% · −18,3% | +30% | −6,8% | 2,3 | 95 d | −11,9% | +14% | 0,09 |
> | 3857 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+233% · −53,1%** | +53% · −9,7% | +35% | −8,7% | 1,8 | 122 d | −7,4% | +24% | 0,24 |
> | 3858 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL | **+94% · −39,4%** | +39% · −13,1% | +28% | −8,6% | 2,0 | 91 d | −11,0% | +16% | 0,05 |
> | 3859 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX | **+202% · −72,8%** | +51% · −16,8% | +33% | −7,9% | 3,0 | 128 d | −11,8% | +13% | 0,32 |
> | 3860 | BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+176% · −50,7%** | +55% · −13,7% | +34% | −11,2% | 2,1 | 83 d | −13,9% | +28% | 0,35 |
> | 3861 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX + Onda ·VAI | **+225% · −66,6%** | +53% · −16,2% | +34% | −8,1% | 2,4 | 122 d | −9,5% | +26% | 0,20 |
> | 3862 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+144% · −37,0%** | +44% · −8,7% | +30% | −7,4% | 1,3 | 122 d | −6,5% | +19% | 0,02 |
> | 3863 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+116% · −33,7%** | +31% · −6,3% | +24% | −10,1% | 1,4 | 182 d | −5,3% | +17% | 0,07 |
> | 3864 | VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX | **+149% · −44,4%** | +59% · −15,7% | +33% | −15,6% | 2,7 | 110 d | −14,1% | +17% | 0,38 |
> | 3865 | VWAP ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+149% · −35,0%** | +44% · −8,7% | +32% | −12,7% | 1,9 | 182 d | −6,3% | +21% | 0,33 |
> | 3866 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+112% · −31,9%** | +34% · −7,7% | +24% | −11,2% | 1,6 | 174 d | −5,7% | +17% | 0,17 |
> | 3867 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX | **+194% · −75,3%** | +57% · −20,4% | +34% | −8,8% | 2,0 | 82 d | −13,7% | +19% | 0,39 |
> | 3868 | BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+110% · −48,2%** | +44% · −17,4% | +30% | −6,9% | 2,1 | 86 d | −12,5% | +15% | 0,10 |
> | 3869 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+143% · −46,5%** | +40% · −9,4% | +28% | −11,5% | 1,7 | 91 d | −9,7% | +22% | 0,26 |
> | 3870 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+198% · −63,1%** | +52% · −16,1% | +33% | −11,8% | 2,0 | 83 d | −12,8% | +19% | 0,33 |

> [!example]- Combinações 3871 a 3900 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3871 | ADX ·ADX + IFR ·ADX + Pôr do sol ·POR | **+148% · −30,3%** | +53% · −9,9% | +33% | −5,9% | 1,9 | 130 d | −7,2% | +18% | 0,07 |
> | 3872 | ADX ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+111% · −36,3%** | +45% · −12,0% | +29% | −8,9% | 1,3 | 122 d | −6,6% | +22% | 0,07 |
> | 3873 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+140% · −56,8%** | +40% · −12,4% | +29% | −10,0% | 1,7 | 83 d | −10,6% | +22% | 0,14 |
> | 3874 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+143% · −60,1%** | +40% · −13,8% | +29% | −10,9% | 1,8 | 85 d | −10,9% | +16% | 0,33 |
> | 3875 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL | **+170% · −58,1%** | +45% · −12,9% | +29% | −11,9% | 2,3 | 99 d | −11,4% | +15% | 0,29 |
> | 3876 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+138% · −30,7%** | +33% · −5,6% | +23% | −7,4% | 1,6 | 173 d | −5,8% | +16% | 0,07 |
> | 3877 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+128% · −46,7%** | +34% · −10,2% | +25% | −9,4% | 1,8 | 123 d | −7,4% | +17% | 0,03 |
> | 3878 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+90% · −35,3%** | +27% · −7,0% | +21% | −7,5% | 1,3 | 181 d | −5,2% | +17% | 0,03 |
> | 3879 | ADX ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+194% · −40,3%** | +55% · −9,1% | +32% | −6,9% | 2,1 | 127 d | −8,3% | +24% | 0,16 |
> | 3880 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Tendência ·ADX | **+183% · −54,0%** | +51% · −14,1% | +34% | −7,5% | 2,6 | 161 d | −8,8% | +20% | 0,17 |
> | 3881 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+224% · −67,5%** | +54% · −15,3% | +34% | −10,3% | 2,5 | 111 d | −11,6% | +18% | 0,37 |
> | 3882 | BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+159% · −60,4%** | +51% · −18,1% | +32% | −7,3% | 2,4 | 95 d | −14,0% | +15% | 0,35 |
> | 3883 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+144% · −48,0%** | +39% · −10,5% | +28% | −12,9% | 1,5 | 82 d | −10,2% | +23% | 0,17 |
> | 3884 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Tendência ·ADX | **+179% · −54,3%** | +42% · −11,4% | +28% | −7,3% | 1,9 | 85 d | −11,2% | +16% | 0,21 |
> | 3885 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+138% · −49,5%** | +39% · −10,2% | +26% | −9,2% | 1,8 | 87 d | −10,5% | +19% | 0,11 |
> | 3886 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+250% · −42,3%** | +63% · −9,4% | +36% | −7,0% | 2,3 | 105 d | −11,1% | +24% | 0,24 |
> | 3887 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+211% · −43,6%** | +47% · −7,4% | +29% | −4,4% | 1,9 | 131 d | −7,1% | +20% | −0,00 |
> | 3888 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX | **+151% · −57,5%** | +51% · −16,6% | +32% | −13,7% | 2,1 | 83 d | −14,3% | +16% | 0,40 |
> | 3889 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+190% · −43,6%** | +44% · −8,3% | +29% | −11,1% | 1,6 | 90 d | −9,6% | +20% | 0,16 |
> | 3890 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+121% · −41,1%** | +39% · −10,9% | +27% | −13,9% | 2,1 | 140 d | −7,4% | +23% | 0,12 |
> | 3891 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+213% · −44,9%** | +46% · −9,6% | +30% | −10,8% | 1,4 | 83 d | −9,8% | +15% | 0,27 |
> | 3892 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX + Tendência ·ADX | **+213% · −64,8%** | +53% · −15,3% | +32% | −10,4% | 2,1 | 83 d | −14,7% | +16% | 0,41 |
> | 3893 | BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+140% · −38,0%** | +43% · −9,2% | +29% | −9,2% | 1,9 | 101 d | −9,3% | +25% | 0,25 |
> | 3894 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+223% · −55,9%** | +54% · −12,2% | +31% | −7,8% | 2,4 | 128 d | −9,2% | +22% | 0,14 |
> | 3895 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+209% · −52,0%** | +47% · −11,7% | +28% | −8,8% | 1,8 | 83 d | −11,2% | +19% | 0,25 |
> | 3896 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX | **+209% · −50,2%** | +59% · −13,5% | +36% | −10,2% | 2,5 | 111 d | −11,8% | +21% | 0,48 |
> | 3897 | VWAP ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+166% · −43,9%** | +48% · −11,9% | +29% | −14,3% | 1,7 | 81 d | −11,7% | +25% | 0,31 |
> | 3898 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+102% · −33,1%** | +30% · −6,3% | +24% | −10,6% | 1,1 | 191 d | −4,9% | +17% | 0,05 |
> | 3899 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+231% · −54,3%** | +53% · −11,6% | +30% | −7,8% | 2,4 | 99 d | −13,5% | +17% | 0,19 |
> | 3900 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+189% · −47,6%** | +44% · −8,9% | +28% | −4,2% | 1,9 | 130 d | −7,1% | +22% | −0,01 |

> [!example]- Combinações 3901 a 3930 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3901 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Bollinger ·ADX | **+175% · −43,6%** | +48% · −10,6% | +29% | −9,3% | 1,6 | 122 d | −7,2% | +16% | 0,37 |
> | 3902 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+184% · −60,3%** | +48% · −13,8% | +29% | −4,8% | 2,4 | 120 d | −10,1% | +18% | 0,10 |
> | 3903 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+136% · −50,5%** | +38% · −10,6% | +26% | −9,2% | 1,9 | 95 d | −10,2% | +18% | 0,12 |
> | 3904 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+159% · −60,0%** | +45% · −14,0% | +27% | −5,7% | 1,8 | 82 d | −11,8% | +18% | 0,15 |
> | 3905 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+114% · −32,4%** | +36% · −7,4% | +24% | −7,3% | 1,9 | 159 d | −6,8% | +15% | −0,00 |
> | 3906 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+200% · −45,7%** | +46% · −10,1% | +30% | −10,9% | 1,7 | 83 d | −11,0% | +24% | 0,31 |
> | 3907 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+211% · −61,0%** | +52% · −13,9% | +33% | −7,2% | 2,4 | 111 d | −11,1% | +23% | 0,18 |
> | 3908 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+175% · −47,9%** | +43% · −8,2% | +30% | −9,8% | 1,7 | 130 d | −6,7% | +18% | 0,17 |
> | 3909 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+148% · −40,4%** | +39% · −7,1% | +27% | −8,3% | 1,6 | 130 d | −6,6% | +18% | 0,14 |
> | 3910 | Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+57% · −16,3%** | +27% · −4,8% | +22% | −7,3% | 1,0 | 220 d | −4,7% | +16% | −0,06 |
> | 3911 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+78% · −29,7%** | +26% · −5,5% | +21% | −9,1% | 1,0 | 179 d | −5,0% | +17% | 0,01 |
> | 3912 | GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+156% · −40,1%** | +45% · −9,9% | +30% | −10,3% | 1,7 | 89 d | −10,3% | +19% | 0,21 |
> | 3913 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR | **+139% · −34,7%** | +42% · −9,2% | +28% | −12,1% | 2,1 | 148 d | −7,5% | +18% | 0,20 |
> | 3914 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+119% · −31,1%** | +38% · −8,1% | +26% | −5,6% | 1,1 | 131 d | −5,6% | +17% | −0,03 |
> | 3915 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Onda ·VAI | **+219% · −48,7%** | +61% · −11,4% | +36% | −8,5% | 2,1 | 127 d | −8,4% | +24% | 0,27 |
> | 3916 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+189% · −48,2%** | +45% · −10,4% | +28% | −9,3% | 1,9 | 87 d | −11,5% | +20% | 0,17 |
> | 3917 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+256% · −44,7%** | +54% · −8,1% | +33% | −5,2% | 2,1 | 110 d | −9,8% | +23% | 0,03 |
> | 3918 | MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+90% · −22,6%** | +30% · −5,2% | +24% | −6,2% | 1,1 | 255 d | −4,7% | +16% | −0,02 |
> | 3919 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+272% · −46,0%** | +52% · −6,6% | +31% | −4,0% | 2,4 | 128 d | −9,3% | +21% | −0,01 |
> | 3920 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+122% · −33,6%** | +38% · −7,6% | +26% | −5,0% | 1,4 | 161 d | −5,7% | +16% | 0,04 |
> | 3921 | ADX ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+175% · −35,4%** | +47% · −8,5% | +28% | −6,4% | 1,5 | 122 d | −7,0% | +18% | 0,07 |
> | 3922 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+176% · −38,0%** | +49% · −7,6% | +29% | −4,6% | 2,1 | 158 d | −7,6% | +20% | 0,02 |
> | 3923 | MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+98% · −22,8%** | +39% · −7,1% | +30% | −9,4% | 2,0 | 210 d | −6,8% | +24% | 0,10 |
> | 3924 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+216% · −54,7%** | +52% · −12,1% | +31% | −8,8% | 2,4 | 114 d | −11,0% | +19% | 0,12 |
> | 3925 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX + Onda ·VAI | **+270% · −55,2%** | +57% · −10,7% | +33% | −6,7% | 2,0 | 108 d | −9,7% | +25% | 0,28 |
> | 3926 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+181% · −62,1%** | +49% · −14,4% | +30% | −7,5% | 1,8 | 82 d | −12,1% | +23% | 0,17 |
> | 3927 | ADX ·ADX + BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+266% · −66,2%** | +58% · −15,5% | +34% | −8,6% | 2,1 | 96 d | −11,0% | +26% | 0,31 |
> | 3928 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX + Onda ·VAI ⚠️ | **+200% · −64,8%** | +50% · −15,4% | +33% | −7,9% | 1,9 | 96 d | −9,9% | +26% | 0,13 |
> | 3929 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Tendência ·ADX | **+264% · −74,5%** | +63% · −20,4% | +38% | −8,9% | 2,7 | 127 d | −11,0% | +23% | 0,43 |
> | 3930 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX | **+206% · −54,1%** | +47% · −11,3% | +28% | −9,3% | 2,3 | 99 d | −12,3% | +13% | 0,26 |

> [!example]- Combinações 3931 a 3960 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3931 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + MACD ·ADX | **+237% · −60,8%** | +59% · −14,0% | +34% | −10,9% | 2,4 | 128 d | −9,5% | +25% | 0,35 |
> | 3932 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+122% · −42,4%** | +48% · −15,1% | +30% | −17,0% | 1,6 | 77 d | −12,6% | +23% | 0,29 |
> | 3933 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+115% · −46,0%** | +39% · −12,1% | +27% | −10,7% | 1,8 | 91 d | −10,5% | +14% | 0,28 |
> | 3934 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+142% · −34,9%** | +35% · −6,7% | +24% | −6,8% | 1,6 | 107 d | −8,4% | +18% | 0,11 |
> | 3935 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+215% · −63,9%** | +52% · −15,2% | +33% | −8,3% | 2,4 | 111 d | −11,4% | +18% | 0,39 |
> | 3936 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+90% · −40,6%** | +28% · −8,1% | +22% | −7,1% | 1,9 | 159 d | −6,9% | +13% | −0,01 |
> | 3937 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Onda ·VAI | **+178% · −42,2%** | +52% · −9,7% | +34% | −9,0% | 1,7 | 122 d | −7,7% | +18% | 0,22 |
> | 3938 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+203% · −57,2%** | +59% · −15,8% | +36% | −8,5% | 2,3 | 95 d | −13,5% | +21% | 0,31 |
> | 3939 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL | **+178% · −66,5%** | +50% · −15,9% | +30% | −11,3% | 2,4 | 99 d | −14,0% | +13% | 0,30 |
> | 3940 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX + Tendência ·ADX | **+199% · −60,2%** | +47% · −13,6% | +31% | −11,0% | 1,9 | 83 d | −12,2% | +19% | 0,43 |
> | 3941 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+171% · −38,0%** | +40% · −7,3% | +27% | −4,8% | 1,2 | 122 d | −6,6% | +16% | −0,00 |
> | 3942 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+184% · −39,3%** | +49% · −8,6% | +31% | −7,2% | 1,7 | 90 d | −10,3% | +24% | 0,09 |
> | 3943 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+274% · −68,3%** | +65% · −16,5% | +34% | −7,0% | 2,3 | 94 d | −13,9% | +20% | 0,39 |
> | 3944 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+154% · −39,8%** | +44% · −10,4% | +28% | −10,4% | 1,9 | 98 d | −10,3% | +19% | 0,02 |
> | 3945 | VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+123% · −34,4%** | +32% · −6,7% | +23% | −9,9% | 1,4 | 169 d | −5,7% | +19% | 0,08 |
> | 3946 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+169% · −39,8%** | +40% · −5,9% | +27% | −5,2% | 1,7 | 130 d | −6,8% | +16% | 0,00 |
> | 3947 | Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX | **+246% · −61,0%** | +63% · −17,9% | +36% | −7,1% | 2,7 | 111 d | −15,0% | +16% | 0,43 |
> | 3948 | VWAP ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+92% · −33,3%** | +38% · −10,4% | +29% | −7,2% | 2,2 | 171 d | −7,6% | +16% | 0,01 |
> | 3949 | VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Tendência ·ADX | **+175% · −56,3%** | +43% · −12,2% | +28% | −8,8% | 1,9 | 85 d | −11,7% | +14% | 0,31 |
> | 3950 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+71% · −28,7%** | +27% · −6,6% | +22% | −11,3% | 1,2 | 213 d | −5,1% | +17% | 0,09 |
> | 3951 | ADX ·ADX + VWAP ·ADX + Tendência ·ADX + Onda ·VAI | **+177% · −55,8%** | +53% · −14,5% | +35% | −10,6% | 2,0 | 122 d | −8,4% | +23% | 0,27 |
> | 3952 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+155% · −44,2%** | +38% · −9,5% | +25% | −10,3% | 1,3 | 95 d | −8,7% | +18% | 0,13 |
> | 3953 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+174% · −59,0%** | +46% · −13,7% | +29% | −8,0% | 1,9 | 120 d | −8,6% | +18% | 0,26 |
> | 3954 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Tendência ·ADX | **+206% · −60,2%** | +61% · −17,7% | +36% | −8,5% | 2,4 | 122 d | −10,3% | +23% | 0,32 |
> | 3955 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+177% · −47,2%** | +44% · −10,6% | +29% | −10,3% | 1,8 | 95 d | −10,2% | +22% | 0,09 |
> | 3956 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+152% · −49,8%** | +40% · −10,9% | +26% | −7,9% | 1,8 | 95 d | −10,1% | +18% | 0,08 |
> | 3957 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+149% · −58,3%** | +40% · −11,6% | +26% | −8,3% | 2,2 | 119 d | −10,0% | +12% | 0,10 |
> | 3958 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+157% · −46,5%** | +40% · −9,8% | +26% | −11,7% | 1,5 | 82 d | −10,9% | +21% | 0,23 |
> | 3959 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL | **+113% · −49,2%** | +48% · −18,1% | +30% | −8,4% | 2,1 | 86 d | −15,2% | +12% | 0,18 |
> | 3960 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR + Onda ·VAI | **+206% · −52,5%** | +49% · −9,9% | +31% | −5,9% | 1,7 | 108 d | −8,7% | +23% | 0,11 |

> [!example]- Combinações 3961 a 3990 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3961 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Onda ·VAI | **+162% · −55,3%** | +45% · −12,2% | +29% | −12,0% | 2,0 | 91 d | −12,1% | +20% | 0,27 |
> | 3962 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+171% · −57,2%** | +46% · −12,9% | +28% | −7,7% | 2,4 | 111 d | −12,2% | +14% | 0,18 |
> | 3963 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+173% · −44,0%** | +42% · −8,6% | +28% | −9,6% | 1,3 | 122 d | −6,8% | +19% | 0,20 |
> | 3964 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX | **+275% · −65,4%** | +59% · −15,1% | +33% | −6,8% | 2,3 | 110 d | −11,4% | +23% | 0,36 |
> | 3965 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+188% · −50,7%** | +45% · −11,0% | +28% | −10,1% | 1,8 | 83 d | −12,4% | +19% | 0,28 |
> | 3966 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Tendência ·ADX | **+133% · −61,7%** | +43% · −16,9% | +30% | −8,8% | 2,5 | 120 d | −11,4% | +12% | 0,24 |
> | 3967 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+147% · −55,0%** | +41% · −12,6% | +27% | −12,5% | 1,4 | 77 d | −12,0% | +19% | 0,15 |
> | 3968 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+191% · −43,8%** | +43% · −8,0% | +26% | −5,4% | 2,2 | 111 d | −10,4% | +14% | 0,13 |
> | 3969 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+139% · −31,6%** | +34% · −5,1% | +26% | −8,1% | 1,4 | 182 d | −5,7% | +16% | 0,04 |
> | 3970 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+86% · −32,4%** | +31% · −6,8% | +23% | −6,5% | 1,3 | 107 d | −8,0% | +19% | −0,02 |
> | 3971 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+165% · −48,2%** | +41% · −10,0% | +25% | −7,0% | 1,8 | 87 d | −11,4% | +16% | 0,11 |
> | 3972 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL | **+168% · −49,6%** | +51% · −13,0% | +31% | −8,1% | 2,4 | 130 d | −9,0% | +20% | 0,16 |
> | 3973 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+282% · −57,0%** | +60% · −13,3% | +33% | −9,7% | 2,3 | 99 d | −13,1% | +21% | 0,32 |
> | 3974 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+239% · −40,9%** | +49% · −6,5% | +29% | −4,4% | 2,3 | 127 d | −9,2% | +22% | 0,07 |
> | 3975 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+151% · −37,7%** | +36% · −7,6% | +26% | −11,4% | 1,4 | 181 d | −5,7% | +19% | 0,15 |
> | 3976 | VWAP ·ADX + Donchian ·ADX + Pullback ·PUL | **+122% · −37,9%** | +47% · −12,8% | +30% | −10,6% | 2,4 | 148 d | −8,7% | +13% | 0,17 |
> | 3977 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+215% · −59,2%** | +52% · −13,9% | +29% | −6,4% | 1,8 | 82 d | −12,9% | +19% | 0,30 |
> | 3978 | BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+150% · −39,5%** | +43% · −9,5% | +28% | −7,8% | 1,7 | 86 d | −10,9% | +23% | 0,14 |
> | 3979 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+179% · −51,0%** | +45% · −10,9% | +29% | −6,4% | 1,0 | 77 d | −10,9% | +17% | 0,03 |
> | 3980 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+270% · −42,1%** | +54% · −6,9% | +32% | −5,3% | 2,3 | 127 d | −9,3% | +22% | 0,13 |
> | 3981 | BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX | **+113% · −34,2%** | +43% · −10,6% | +26% | −5,1% | 2,0 | 91 d | −12,3% | +12% | 0,10 |
> | 3982 | BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+194% · −51,0%** | +53% · −13,4% | +33% | −8,9% | 1,9 | 83 d | −13,3% | +25% | 0,31 |
> | 3983 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+181% · −35,1%** | +50% · −8,4% | +32% | −6,7% | 1,8 | 122 d | −8,1% | +22% | 0,06 |
> | 3984 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX + Onda ·VAI ⚠️ | **+179% · −55,6%** | +46% · −12,2% | +32% | −12,2% | 1,7 | 83 d | −11,3% | +26% | 0,30 |
> | 3985 | BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+171% · −55,0%** | +44% · −11,7% | +31% | −9,7% | 1,9 | 101 d | −10,0% | +25% | 0,28 |
> | 3986 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+163% · −47,9%** | +44% · −10,5% | +31% | −12,8% | 1,7 | 91 d | −10,2% | +24% | 0,34 |
> | 3987 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+160% · −51,1%** | +47% · −13,0% | +31% | −7,3% | 2,1 | 131 d | −8,0% | +20% | 0,11 |
> | 3988 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+131% · −53,4%** | +42% · −14,4% | +27% | −5,9% | 2,0 | 129 d | −8,2% | +17% | 0,04 |
> | 3989 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX | **+203% · −57,7%** | +52% · −13,0% | +33% | −12,5% | 2,4 | 111 d | −11,6% | +19% | 0,44 |
> | 3990 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL + Onda ·VAI | **+221% · −45,5%** | +59% · −9,8% | +35% | −6,2% | 2,3 | 128 d | −9,2% | +23% | 0,12 |

> [!example]- Combinações 3991 a 4020 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3991 | BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX | **+158% · −50,5%** | +56% · −18,4% | +34% | −8,1% | 2,1 | 85 d | −15,5% | +16% | 0,39 |
> | 3992 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+141% · −33,7%** | +42% · −7,7% | +28% | −6,2% | 1,7 | 131 d | −6,8% | +18% | −0,01 |
> | 3993 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+173% · −29,7%** | +58% · −9,1% | +35% | −11,2% | 2,4 | 112 d | −11,6% | +28% | 0,31 |
> | 3994 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX | **+174% · −46,5%** | +64% · −16,7% | +37% | −8,5% | 2,6 | 111 d | −14,6% | +17% | 0,52 |
> | 3995 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+299% · −45,7%** | +58% · −9,0% | +32% | −7,6% | 2,2 | 128 d | −8,9% | +19% | 0,28 |
> | 3996 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+178% · −52,5%** | +46% · −11,4% | +29% | −7,8% | 1,0 | 76 d | −11,4% | +18% | 0,16 |
> | 3997 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+179% · −63,5%** | +49% · −15,5% | +30% | −8,4% | 1,8 | 82 d | −12,6% | +22% | 0,26 |
> | 3998 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+195% · −41,6%** | +54% · −9,2% | +32% | −5,6% | 2,0 | 127 d | −8,3% | +22% | 0,01 |
> | 3999 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX | **+195% · −63,2%** | +50% · −14,1% | +32% | −9,8% | 1,9 | 120 d | −8,9% | +21% | 0,34 |
> | 4000 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+148% · −59,0%** | +51% · −17,1% | +30% | −5,9% | 1,7 | 77 d | −14,5% | +19% | 0,17 |
> | 4001 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+114% · −32,3%** | +35% · −7,8% | +24% | −11,5% | 1,5 | 174 d | −6,0% | +16% | 0,20 |
> | 4002 | Pôr do sol ·POR | **+20% · −3,0%** | +20% · −3,0% | +17% | −2,7% | 0,4 | 191 d | −5,0% | +12% | — |
> | 4003 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+184% · −39,3%** | +43% · −7,1% | +27% | −7,5% | 1,4 | 122 d | −7,2% | +17% | 0,12 |
> | 4004 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL | **+158% · −58,0%** | +48% · −16,4% | +31% | −6,4% | 2,1 | 128 d | −8,4% | +21% | 0,12 |
> | 4005 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Tendência ·ADX + Onda ·VAI | **+251% · −72,9%** | +63% · −19,3% | +38% | −9,0% | 2,4 | 119 d | −11,6% | +27% | 0,36 |
> | 4006 | BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+172% · −60,3%** | +56% · −17,4% | +36% | −9,7% | 2,0 | 83 d | −15,9% | +26% | 0,37 |
> | 4007 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+161% · −47,0%** | +41% · −9,2% | +27% | −7,7% | 2,1 | 111 d | −10,0% | +18% | 0,15 |
> | 4008 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+146% · −53,2%** | +39% · −11,1% | +26% | −6,0% | 1,6 | 119 d | −8,1% | +20% | 0,09 |
> | 4009 | Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+210% · −36,9%** | +54% · −8,4% | +35% | −11,2% | 2,1 | 115 d | −10,0% | +26% | 0,30 |
> | 4010 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Tendência ·ADX | **+195% · −67,9%** | +58% · −21,4% | +36% | −10,1% | 2,2 | 119 d | −10,3% | +24% | 0,38 |
> | 4011 | VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+151% · −46,0%** | +47% · −12,7% | +31% | −15,8% | 1,4 | 77 d | −12,3% | +23% | 0,28 |
> | 4012 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+182% · −46,4%** | +43% · −10,1% | +27% | −6,3% | 2,2 | 130 d | −8,6% | +18% | 0,10 |
> | 4013 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+201% · −58,0%** | +51% · −13,4% | +30% | −6,5% | 1,5 | 77 d | −12,8% | +24% | 0,13 |
> | 4014 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL | **+118% · −56,3%** | +42% · −16,2% | +28% | −12,7% | 1,8 | 82 d | −14,1% | +12% | 0,23 |
> | 4015 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+180% · −70,6%** | +48% · −16,0% | +31% | −7,8% | 2,4 | 111 d | −12,0% | +14% | 0,24 |
> | 4016 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+153% · −38,0%** | +36% · −7,6% | +25% | −11,5% | 1,3 | 183 d | −5,7% | +18% | 0,20 |
> | 4017 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+198% · −57,7%** | +48% · −13,8% | +29% | −13,5% | 1,5 | 77 d | −13,0% | +19% | 0,35 |
> | 4018 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+179% · −47,0%** | +42% · −10,3% | +27% | −6,3% | 2,3 | 192 d | −8,3% | +17% | 0,07 |
> | 4019 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+212% · −67,7%** | +57% · −16,6% | +32% | −6,2% | 2,3 | 110 d | −11,9% | +19% | 0,22 |
> | 4020 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + IFR ·ADX + Onda ·VAI | **+172% · −57,8%** | +49% · −13,0% | +32% | −12,8% | 1,9 | 83 d | −13,1% | +25% | 0,34 |

> [!example]- Combinações 4021 a 4050 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4021 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+99% · −32,1%** | +32% · −8,0% | +24% | −8,5% | 1,8 | 181 d | −6,6% | +16% | 0,01 |
> | 4022 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+175% · −62,8%** | +52% · −18,9% | +33% | −7,1% | 2,3 | 127 d | −9,3% | +21% | 0,15 |
> | 4023 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+157% · −39,1%** | +44% · −10,2% | +28% | −10,6% | 1,8 | 92 d | −10,7% | +18% | 0,13 |
> | 4024 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+203% · −64,1%** | +50% · −14,8% | +32% | −7,9% | 1,8 | 96 d | −10,0% | +26% | 0,14 |
> | 4025 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+106% · −42,7%** | +37% · −10,6% | +24% | −6,7% | 1,8 | 87 d | −11,3% | +16% | −0,02 |
> | 4026 | VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+115% · −38,9%** | +39% · −10,3% | +27% | −13,2% | 1,8 | 94 d | −10,3% | +25% | 0,00 |
> | 4027 | VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+86% · −27,2%** | +29% · −6,4% | +20% | −9,4% | 1,5 | 171 d | −6,1% | +15% | 0,08 |
> | 4028 | BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX | **+149% · −59,5%** | +61% · −23,3% | +37% | −8,6% | 2,3 | 95 d | −18,3% | +16% | 0,50 |
> | 4029 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+192% · −49,3%** | +45% · −10,4% | +27% | −9,3% | 1,8 | 87 d | −11,9% | +21% | 0,16 |
> | 4030 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX | **+109% · −41,3%** | +45% · −14,9% | +30% | −18,9% | 1,9 | 98 d | −10,5% | +23% | 0,36 |
> | 4031 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM | **+184% · −58,3%** | +47% · −12,6% | +30% | −10,2% | 2,4 | 120 d | −11,1% | +14% | 0,35 |
> | 4032 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+191% · −58,5%** | +51% · −13,3% | +31% | −10,1% | 2,4 | 111 d | −12,7% | +19% | 0,21 |
> | 4033 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+48% · −26,7%** | +21% · −6,3% | +18% | −8,3% | 0,9 | 210 d | −5,1% | +14% | 0,00 |
> | 4034 | Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+146% · −32,1%** | +51% · −9,4% | +30% | −5,0% | 2,0 | 92 d | −11,9% | +23% | 0,02 |
> | 4035 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+208% · −59,0%** | +52% · −13,7% | +32% | −11,4% | 1,3 | 77 d | −12,1% | +25% | 0,25 |
> | 4036 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+220% · −40,4%** | +56% · −8,3% | +33% | −4,7% | 2,1 | 105 d | −10,9% | +22% | 0,00 |
> | 4037 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+120% · −32,3%** | +39% · −8,0% | +26% | −6,6% | 1,2 | 130 d | −6,3% | +19% | −0,00 |
> | 4038 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX | **+196% · −57,5%** | +57% · −15,6% | +35% | −7,7% | 2,1 | 122 d | −9,1% | +26% | 0,34 |
> | 4039 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+289% · −48,4%** | +57% · −8,2% | +34% | −5,6% | 2,4 | 128 d | −10,0% | +24% | 0,10 |
> | 4040 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+142% · −55,4%** | +40% · −11,8% | +29% | −10,1% | 1,6 | 85 d | −11,0% | +23% | 0,19 |
> | 4041 | VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+125% · −34,5%** | +32% · −6,8% | +23% | −10,0% | 1,3 | 171 d | −5,9% | +19% | 0,12 |
> | 4042 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+132% · −53,3%** | +42% · −14,3% | +27% | −5,8% | 2,0 | 128 d | −8,4% | +15% | 0,11 |
> | 4043 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + IFR ·ADX | **+234% · −49,4%** | +63% · −12,4% | +36% | −7,4% | 2,4 | 129 d | −9,6% | +19% | 0,30 |
> | 4044 | Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+143% · −30,4%** | +50% · −8,8% | +31% | −5,2% | 2,1 | 103 d | −11,4% | +24% | −0,14 |
> | 4045 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+135% · −39,6%** | +36% · −7,3% | +25% | −7,4% | 1,3 | 161 d | −6,0% | +16% | 0,09 |
> | 4046 | ADX ·ADX + Donchian ·ADX + GPS médias ·ADX | **+208% · −50,9%** | +77% · −18,6% | +39% | −6,8% | 2,8 | 127 d | −12,7% | +25% | 0,35 |
> | 4047 | VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+71% · −35,1%** | +32% · −12,3% | +24% | −14,0% | 1,1 | 108 d | −8,0% | +19% | 0,22 |
> | 4048 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+115% · −37,2%** | +33% · −7,4% | +25% | −9,0% | 1,2 | 106 d | −8,2% | +18% | 0,06 |
> | 4049 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+178% · −40,5%** | +51% · −10,2% | +31% | −6,2% | 2,0 | 122 d | −9,0% | +25% | 0,08 |
> | 4050 | Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+144% · −34,1%** | +51% · −11,7% | +31% | −6,7% | 2,3 | 115 d | −11,5% | +22% | 0,17 |

> [!example]- Combinações 4051 a 4080 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4051 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+134% · −35,0%** | +34% · −6,8% | +26% | −10,1% | 1,6 | 179 d | −6,3% | +18% | 0,07 |
> | 4052 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+156% · −48,8%** | +41% · −9,8% | +26% | −7,6% | 1,9 | 122 d | −8,5% | +19% | 0,09 |
> | 4053 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+186% · −38,9%** | +43% · −7,1% | +27% | −7,6% | 1,3 | 122 d | −7,3% | +16% | 0,15 |
> | 4054 | BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+142% · −54,3%** | +44% · −15,1% | +31% | −9,3% | 2,2 | 111 d | −10,9% | +18% | 0,30 |
> | 4055 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+90% · −45,7%** | +29% · −9,8% | +22% | −8,7% | 1,8 | 128 d | −7,8% | +11% | 0,05 |
> | 4056 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+127% · −37,3%** | +34% · −6,1% | +24% | −5,0% | 1,7 | 161 d | −6,8% | +16% | 0,04 |
> | 4057 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+208% · −68,4%** | +58% · −17,6% | +32% | −7,1% | 2,2 | 102 d | −12,6% | +18% | 0,33 |
> | 4058 | ADX ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR | **+204% · −42,4%** | +55% · −9,4% | +32% | −5,4% | 2,1 | 158 d | −8,2% | +20% | 0,11 |
> | 4059 | VWAP ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+114% · −31,6%** | +42% · −10,7% | +27% | −13,8% | 1,3 | 106 d | −8,4% | +18% | 0,38 |
> | 4060 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX | **+237% · −62,3%** | +67% · −17,8% | +38% | −7,0% | 2,7 | 132 d | −11,0% | +22% | 0,41 |
> | 4061 | VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+61% · −29,0%** | +29% · −9,4% | +23% | −15,5% | 1,1 | 174 d | −5,7% | +19% | 0,24 |
> | 4062 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX | **+136% · −47,6%** | +44% · −12,5% | +30% | −13,7% | 1,8 | 91 d | −11,2% | +20% | 0,39 |
> | 4063 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+155% · −42,1%** | +38% · −6,7% | +27% | −6,0% | 1,8 | 161 d | −6,9% | +16% | 0,06 |
> | 4064 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+158% · −44,5%** | +38% · −9,5% | +25% | −10,5% | 1,3 | 95 d | −9,1% | +19% | 0,17 |
> | 4065 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+201% · −52,4%** | +49% · −11,1% | +31% | −7,2% | 1,7 | 108 d | −9,2% | +26% | 0,22 |
> | 4066 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+111% · −25,4%** | +30% · −4,1% | +23% | −5,3% | 1,2 | 205 d | −5,7% | +15% | 0,00 |
> | 4067 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+218% · −48,6%** | +48% · −9,5% | +29% | −7,7% | 2,2 | 111 d | −11,0% | +19% | 0,19 |
> | 4068 | VWAP ·ADX + Bollinger ·ADX + Tendência ·ADX | **+141% · −31,9%** | +50% · −9,8% | +32% | −8,7% | 2,3 | 137 d | −9,1% | +19% | 0,38 |
> | 4069 | Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+57% · −16,3%** | +27% · −4,3% | +22% | −5,2% | 0,8 | 279 d | −5,1% | +14% | −0,09 |
> | 4070 | Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Onda ·VAI | **+204% · −47,9%** | +59% · −12,4% | +36% | −9,1% | 2,4 | 111 d | −12,5% | +27% | 0,38 |
> | 4071 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+228% · −61,3%** | +57% · −14,1% | +32% | −8,4% | 1,6 | 78 d | −14,9% | +23% | 0,31 |
> | 4072 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+104% · −34,0%** | +33% · −8,4% | +26% | −13,0% | 1,4 | 174 d | −6,2% | +18% | 0,08 |
> | 4073 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+217% · −60,3%** | +51% · −13,7% | +30% | −4,3% | 2,2 | 159 d | −8,5% | +18% | 0,06 |
> | 4074 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+94% · −33,3%** | +29% · −6,1% | +22% | −6,9% | 1,1 | 118 d | −7,7% | +17% | −0,02 |
> | 4075 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pullback ·PUL | **+184% · −39,7%** | +50% · −9,5% | +32% | −5,9% | 2,2 | 131 d | −8,7% | +16% | 0,11 |
> | 4076 | VWAP ·ADX + IFR ·ADX | **+81% · −20,7%** | +46% · −10,1% | +32% | −13,7% | 2,2 | 169 d | −8,2% | +16% | 0,15 |
> | 4077 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+205% · −46,4%** | +47% · −9,5% | +30% | −8,7% | 2,3 | 192 d | −8,3% | +22% | 0,12 |
> | 4078 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+202% · −56,1%** | +50% · −11,8% | +32% | −9,0% | 1,1 | 77 d | −11,7% | +18% | 0,22 |
> | 4079 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pullback ·PUL | **+206% · −64,3%** | +52% · −15,2% | +32% | −7,1% | 2,3 | 120 d | −10,9% | +22% | 0,19 |
> | 4080 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+144% · −35,9%** | +35% · −6,7% | +24% | −6,8% | 1,5 | 107 d | −8,8% | +19% | 0,09 |

> [!example]- Combinações 4081 a 4110 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4081 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+187% · −59,0%** | +48% · −13,3% | +29% | −4,6% | 2,3 | 122 d | −10,2% | +19% | 0,06 |
> | 4082 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+194% · −49,9%** | +49% · −10,4% | +31% | −9,5% | 2,1 | 122 d | −9,5% | +23% | 0,17 |
> | 4083 | VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+69% · −30,2%** | +27% · −7,3% | +22% | −11,8% | 0,9 | 171 d | −5,7% | +19% | 0,01 |
> | 4084 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX | **+198% · −76,1%** | +58% · −19,4% | +35% | −11,0% | 2,5 | 111 d | −15,9% | +15% | 0,48 |
> | 4085 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+138% · −40,8%** | +35% · −8,1% | +27% | −12,6% | 1,2 | 179 d | −6,0% | +18% | 0,10 |
> | 4086 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+149% · −52,0%** | +39% · −10,6% | +26% | −5,7% | 1,5 | 119 d | −8,2% | +21% | 0,06 |
> | 4087 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+173% · −56,3%** | +47% · −12,5% | +28% | −7,7% | 2,3 | 111 d | −12,5% | +15% | 0,17 |
> | 4088 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+115% · −31,8%** | +36% · −7,5% | +24% | −4,9% | 1,7 | 161 d | −6,9% | +15% | 0,02 |
> | 4089 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+173% · −58,9%** | +50% · −13,5% | +30% | −7,6% | 1,5 | 77 d | −13,9% | +23% | 0,11 |
> | 4090 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+214% · −66,6%** | +58% · −16,3% | +32% | −6,1% | 2,3 | 110 d | −12,1% | +20% | 0,19 |
> | 4091 | VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+138% · −57,6%** | +40% · −12,7% | +29% | −11,5% | 1,6 | 85 d | −11,5% | +20% | 0,29 |
> | 4092 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+213% · −58,1%** | +53% · −13,5% | +31% | −9,6% | 2,3 | 115 d | −11,8% | +18% | 0,30 |
> | 4093 | Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+182% · −64,9%** | +54% · −18,0% | +33% | −7,7% | 2,4 | 111 d | −13,4% | +13% | 0,40 |
> | 4094 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX + Onda ·VAI | **+197% · −54,7%** | +52% · −12,0% | +33% | −11,5% | 2,2 | 102 d | −12,2% | +24% | 0,37 |
> | 4095 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+215% · −47,1%** | +48% · −9,7% | +28% | −7,0% | 2,0 | 122 d | −9,1% | +21% | 0,18 |
> | 4096 | ADX ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+145% · −39,1%** | +44% · −9,4% | +30% | −8,5% | 1,2 | 122 d | −7,2% | +20% | 0,13 |
> | 4097 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+55% · −23,1%** | +26% · −7,3% | +21% | −9,8% | 1,5 | 210 d | −6,1% | +12% | −0,03 |
> | 4098 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+170% · −59,8%** | +49% · −13,9% | +30% | −7,7% | 1,5 | 78 d | −13,8% | +23% | 0,11 |
> | 4099 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+193% · −43,3%** | +43% · −8,3% | +26% | −5,3% | 2,1 | 111 d | −10,8% | +15% | 0,11 |
> | 4100 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+203% · −43,4%** | +53% · −8,5% | +31% | −4,4% | 2,3 | 159 d | −8,9% | +19% | −0,02 |
> | 4101 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+108% · −42,3%** | +31% · −8,9% | +23% | −9,3% | 1,2 | 120 d | −7,6% | +18% | 0,01 |
> | 4102 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+219% · −69,1%** | +55% · −17,0% | +35% | −10,3% | 1,8 | 96 d | −10,6% | +27% | 0,32 |
> | 4103 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+124% · −30,7%** | +32% · −5,7% | +23% | −8,5% | 1,2 | 171 d | −6,1% | +16% | 0,04 |
> | 4104 | VWAP ·ADX + Pôr do sol ·POR + Tendência ·ADX + Onda ·VAI | **+126% · −34,4%** | +40% · −8,1% | +29% | −9,5% | 1,8 | 171 d | −7,1% | +23% | 0,15 |
> | 4105 | VWAP ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+133% · −31,8%** | +39% · −7,9% | +26% | −11,5% | 1,9 | 181 d | −7,3% | +19% | 0,21 |
> | 4106 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Quinta ·PR2 ⚠️ | **+158% · −36,2%** | +46% · −8,5% | +30% | −5,6% | 1,8 | 130 d | −7,7% | +15% | 0,08 |
> | 4107 | BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+163% · −39,4%** | +48% · −9,6% | +33% | −10,6% | 1,9 | 108 d | −10,0% | +24% | 0,32 |
> | 4108 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+128% · −37,1%** | +36% · −6,5% | +25% | −8,2% | 1,2 | 130 d | −6,6% | +17% | 0,04 |
> | 4109 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+263% · −60,4%** | +57% · −13,6% | +33% | −5,0% | 2,4 | 128 d | −10,2% | +21% | 0,13 |
> | 4110 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX + Onda ·VAI | **+265% · −63,6%** | +60% · −14,0% | +33% | −7,0% | 2,0 | 97 d | −12,0% | +26% | 0,29 |

> [!example]- Combinações 4111 a 4140 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4111 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+148% · −35,2%** | +43% · −8,1% | +26% | −6,1% | 1,5 | 131 d | −6,9% | +13% | 0,16 |
> | 4112 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+111% · −51,4%** | +35% · −10,8% | +24% | −9,9% | 1,6 | 86 d | −11,2% | +15% | 0,04 |
> | 4113 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+166% · −37,3%** | +38% · −7,6% | +26% | −10,6% | 1,3 | 177 d | −6,2% | +18% | 0,10 |
> | 4114 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+157% · −42,5%** | +41% · −7,6% | +27% | −6,7% | 1,9 | 111 d | −9,7% | +23% | 0,01 |
> | 4115 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+268% · −62,6%** | +58% · −14,4% | +36% | −8,3% | 2,7 | 181 d | −10,3% | +23% | 0,38 |
> | 4116 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+153% · −54,9%** | +47% · −15,7% | +32% | −11,4% | 1,8 | 95 d | −11,2% | +18% | 0,31 |
> | 4117 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+70% · −25,9%** | +26% · −5,7% | +22% | −9,9% | 1,0 | 213 d | −5,5% | +14% | 0,04 |
> | 4118 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+145% · −38,4%** | +37% · −6,9% | +25% | −6,4% | 1,3 | 130 d | −6,7% | +17% | 0,05 |
> | 4119 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+180% · −50,3%** | +46% · −10,2% | +29% | −9,2% | 1,9 | 122 d | −8,8% | +22% | 0,14 |
> | 4120 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+189% · −58,5%** | +48% · −13,0% | +28% | −4,3% | 2,1 | 128 d | −9,0% | +18% | 0,11 |
> | 4121 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+111% · −48,8%** | +33% · −10,3% | +25% | −11,6% | 1,8 | 120 d | −8,9% | +14% | 0,18 |
> | 4122 | Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+58% · −15,7%** | +28% · −4,6% | +22% | −7,2% | 1,1 | 231 d | −5,6% | +15% | 0,01 |
> | 4123 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+117% · −39,1%** | +39% · −10,3% | +27% | −13,3% | 1,7 | 95 d | −10,5% | +24% | 0,07 |
> | 4124 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+149% · −53,2%** | +39% · −10,6% | +26% | −4,9% | 1,6 | 127 d | −7,6% | +20% | 0,04 |
> | 4125 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+158% · −47,7%** | +42% · −9,4% | +26% | −7,6% | 1,8 | 122 d | −8,6% | +20% | 0,09 |
> | 4126 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+168% · −61,1%** | +50% · −14,6% | +30% | −9,0% | 1,5 | 78 d | −14,3% | +24% | 0,24 |
> | 4127 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+233% · −58,1%** | +54% · −12,8% | +31% | −4,9% | 2,0 | 120 d | −10,0% | +22% | 0,10 |
> | 4128 | ADX ·ADX + GPS médias ·ADX + Onda ·VAI | **+155% · −47,1%** | +62% · −16,7% | +36% | −8,7% | 1,5 | 77 d | −15,6% | +25% | 0,22 |
> | 4129 | ADX ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+84% · −30,0%** | +37% · −9,5% | +24% | −6,7% | 1,2 | 131 d | −6,6% | +18% | 0,02 |
> | 4130 | VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+88% · −27,3%** | +30% · −6,3% | +20% | −9,5% | 1,3 | 171 d | −6,3% | +16% | 0,09 |
> | 4131 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+173% · −42,1%** | +42% · −8,0% | +28% | −8,5% | 1,3 | 130 d | −6,8% | +17% | 0,11 |
> | 4132 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+147% · −36,1%** | +44% · −8,5% | +30% | −7,5% | 1,1 | 130 d | −6,6% | +19% | 0,06 |
> | 4133 | VWAP ·ADX + Donchian ·ADX + Tendência ·ADX | **+162% · −52,4%** | +60% · −16,3% | +37% | −9,5% | 2,8 | 128 d | −13,4% | +17% | 0,46 |
> | 4134 | VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+84% · −27,1%** | +30% · −6,2% | +24% | −10,2% | 1,5 | 192 d | −6,3% | +17% | −0,00 |
> | 4135 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX + Onda ·VAI | **+165% · −65,8%** | +50% · −16,0% | +33% | −12,6% | 1,8 | 83 d | −14,7% | +23% | 0,37 |
> | 4136 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+159% · −44,4%** | +41% · −8,3% | +26% | −6,2% | 1,9 | 130 d | −8,0% | +19% | 0,04 |
> | 4137 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+194% · −57,7%** | +51% · −12,9% | +31% | −10,1% | 2,3 | 111 d | −13,0% | +20% | 0,21 |
> | 4138 | Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+208% · −61,5%** | +52% · −14,1% | +33% | −8,4% | 2,2 | 111 d | −12,0% | +22% | 0,34 |
> | 4139 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+144% · −32,6%** | +41% · −7,7% | +26% | −6,0% | 1,6 | 120 d | −8,4% | +17% | 0,03 |
> | 4140 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Tendência ·ADX | **+204% · −64,4%** | +60% · −19,7% | +37% | −9,3% | 2,4 | 111 d | −14,0% | +19% | 0,54 |

> [!example]- Combinações 4141 a 4170 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4141 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+121% · −33,9%** | +38% · −8,4% | +27% | −9,4% | 1,5 | 124 d | −7,6% | +18% | 0,01 |
> | 4142 | BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+149% · −48,3%** | +55% · −17,3% | +36% | −7,8% | 2,2 | 115 d | −11,6% | +20% | 0,22 |
> | 4143 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+204% · −50,2%** | +47% · −9,6% | +29% | −6,2% | 2,1 | 159 d | −8,4% | +17% | 0,15 |
> | 4144 | VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+86% · −30,2%** | +30% · −6,3% | +24% | −10,4% | 1,3 | 211 d | −6,0% | +16% | 0,05 |
> | 4145 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+234% · −60,0%** | +57% · −12,8% | +34% | −12,0% | 2,3 | 115 d | −12,3% | +23% | 0,36 |
> | 4146 | MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+81% · −22,5%** | +35% · −6,9% | +27% | −11,4% | 1,2 | 188 d | −6,0% | +17% | 0,18 |
> | 4147 | ADX ·ADX + VWAP ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+184% · −41,4%** | +43% · −7,7% | +27% | −9,0% | 1,4 | 122 d | −7,7% | +19% | 0,22 |
> | 4148 | ADX ·ADX + Donchian ·ADX + Rompe 200 ·ROM | **+161% · −38,4%** | +59% · −12,4% | +32% | −6,2% | 2,1 | 128 d | −9,4% | +21% | 0,14 |
> | 4149 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + MACD ·ADX + Onda ·VAI | **+224% · −59,0%** | +54% · −12,1% | +34% | −8,4% | 1,7 | 108 d | −9,4% | +26% | 0,28 |
> | 4150 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+151% · −43,6%** | +41% · −8,4% | +28% | −11,0% | 1,2 | 122 d | −7,4% | +19% | 0,20 |
> | 4151 | VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+136% · −46,3%** | +45% · −12,8% | +30% | −16,8% | 1,7 | 94 d | −11,1% | +26% | 0,33 |
> | 4152 | BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+125% · −40,1%** | +40% · −9,8% | +29% | −10,2% | 1,6 | 102 d | −9,8% | +23% | 0,14 |
> | 4153 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+140% · −29,5%** | +34% · −5,0% | +26% | −7,1% | 1,2 | 202 d | −6,0% | +15% | 0,02 |
> | 4154 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+114% · −58,8%** | +39% · −15,9% | +28% | −8,5% | 1,8 | 95 d | −11,7% | +13% | 0,14 |
> | 4155 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+175% · −41,9%** | +50% · −10,9% | +32% | −14,2% | 1,6 | 90 d | −11,5% | +22% | 0,30 |
> | 4156 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+252% · −44,3%** | +61% · −8,5% | +35% | −5,1% | 2,5 | 128 d | −11,1% | +23% | 0,03 |
> | 4157 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+151% · −46,8%** | +46% · −12,4% | +26% | −7,9% | 1,8 | 87 d | −13,5% | +16% | 0,14 |
> | 4158 | BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+140% · −51,2%** | +47% · −14,0% | +30% | −10,2% | 1,8 | 86 d | −14,4% | +23% | 0,18 |
> | 4159 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+185% · −58,7%** | +59% · −17,4% | +34% | −8,4% | 1,4 | 77 d | −16,3% | +25% | 0,30 |
> | 4160 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+157% · −61,1%** | +45% · −14,0% | +32% | −13,0% | 1,6 | 85 d | −12,0% | +26% | 0,40 |
> | 4161 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+167% · −39,4%** | +40% · −7,6% | +27% | −8,4% | 1,4 | 98 d | −9,6% | +17% | 0,11 |
> | 4162 | ADX ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+198% · −65,0%** | +50% · −15,6% | +33% | −9,1% | 1,8 | 101 d | −10,5% | +26% | 0,23 |
> | 4163 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Bollinger ·ADX | **+236% · −59,9%** | +53% · −12,7% | +31% | −7,5% | 2,0 | 122 d | −9,4% | +21% | 0,35 |
> | 4164 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+217% · −47,9%** | +48% · −9,5% | +29% | −7,4% | 1,9 | 95 d | −11,9% | +24% | 0,12 |
> | 4165 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+132% · −31,2%** | +40% · −7,0% | +26% | −3,5% | 1,3 | 130 d | −7,0% | +17% | 0,02 |
> | 4166 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+194% · −50,7%** | +49% · −9,0% | +30% | −9,5% | 1,7 | 128 d | −8,0% | +20% | 0,21 |
> | 4167 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pullback ·PUL | **+232% · −54,2%** | +52% · −10,4% | +32% | −7,3% | 2,1 | 159 d | −8,6% | +18% | 0,20 |
> | 4168 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+185% · −58,9%** | +51% · −12,3% | +31% | −9,4% | 2,0 | 95 d | −13,6% | +24% | 0,17 |
> | 4169 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Tendência ·ADX | **+232% · −72,2%** | +69% · −24,2% | +39% | −9,1% | 2,7 | 129 d | −12,9% | +19% | 0,45 |
> | 4170 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+168% · −51,2%** | +44% · −11,1% | +29% | −9,6% | 1,5 | 83 d | −12,5% | +19% | 0,05 |

> [!example]- Combinações 4171 a 4200 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4171 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+106% · −46,1%** | +38% · −11,9% | +24% | −7,8% | 1,7 | 87 d | −12,3% | +14% | 0,08 |
> | 4172 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+149% · −41,7%** | +39% · −6,5% | +27% | −6,8% | 1,5 | 131 d | −7,2% | +16% | 0,04 |
> | 4173 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+115% · −30,5%** | +31% · −4,9% | +21% | −4,0% | 1,6 | 133 d | −7,4% | +15% | 0,02 |
> | 4174 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+187% · −59,7%** | +47% · −13,6% | +28% | −4,5% | 2,2 | 189 d | −8,6% | +17% | 0,13 |
> | 4175 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+147% · −61,0%** | +51% · −18,4% | +30% | −7,4% | 1,6 | 82 d | −15,2% | +18% | 0,30 |
> | 4176 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+189% · −61,0%** | +51% · −14,4% | +31% | −10,9% | 2,3 | 111 d | −13,5% | +18% | 0,36 |
> | 4177 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+85% · −36,5%** | +31% · −8,4% | +23% | −7,7% | 1,3 | 111 d | −8,7% | +16% | 0,04 |
> | 4178 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+152% · −44,3%** | +40% · −7,8% | +28% | −9,5% | 1,2 | 130 d | −6,9% | +17% | 0,10 |
> | 4179 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+208% · −44,7%** | +47% · −9,5% | +30% | −8,9% | 2,3 | 190 d | −8,7% | +23% | 0,16 |
> | 4180 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+191% · −58,2%** | +47% · −12,9% | +28% | −4,3% | 1,9 | 158 d | −8,1% | +19% | 0,06 |
> | 4181 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Onda ·VAI | **+215% · −56,3%** | +53% · −10,9% | +33% | −10,8% | 1,7 | 128 d | −8,1% | +20% | 0,31 |
> | 4182 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+218% · −47,9%** | +49% · −10,0% | +28% | −7,0% | 1,9 | 122 d | −9,2% | +20% | 0,18 |
> | 4183 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+171% · −68,9%** | +47% · −17,6% | +30% | −8,3% | 1,9 | 120 d | −9,9% | +16% | 0,27 |
> | 4184 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX | **+168% · −63,0%** | +57% · −18,8% | +33% | −9,7% | 1,6 | 82 d | −15,5% | +24% | 0,36 |
> | 4185 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+182% · −49,3%** | +46% · −9,8% | +29% | −9,2% | 1,8 | 122 d | −8,9% | +21% | 0,15 |
> | 4186 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+151% · −49,9%** | +43% · −10,3% | +29% | −10,5% | 1,6 | 86 d | −12,1% | +21% | 0,10 |
> | 4187 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+206% · −64,0%** | +56% · −15,7% | +33% | −9,2% | 1,3 | 77 d | −15,3% | +21% | 0,26 |
> | 4188 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+141% · −31,1%** | +35% · −5,2% | +26% | −8,2% | 1,3 | 192 d | −6,2% | +15% | 0,11 |
> | 4189 | VWAP ·ADX + BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX + Onda ·VAI | **+194% · −57,4%** | +47% · −12,4% | +31% | −11,0% | 1,7 | 85 d | −12,8% | +23% | 0,36 |
> | 4190 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+106% · −34,4%** | +34% · −8,5% | +26% | −13,2% | 1,2 | 157 d | −6,6% | +17% | 0,19 |
> | 4191 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+114% · −37,3%** | +32% · −7,5% | +24% | −11,3% | 1,1 | 176 d | −6,2% | +18% | 0,13 |
> | 4192 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+64% · −15,3%** | +29% · −3,6% | +22% | −3,1% | 1,2 | 181 d | −6,2% | +15% | −0,01 |
> | 4193 | VWAP ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+109% · −34,0%** | +36% · −8,6% | +28% | −13,9% | 1,7 | 183 d | −7,0% | +19% | 0,21 |
> | 4194 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+227% · −65,0%** | +56% · −15,5% | +36% | −9,6% | 2,2 | 111 d | −12,5% | +27% | 0,44 |
> | 4195 | VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+70% · −30,4%** | +27% · −7,4% | +22% | −11,9% | 0,8 | 179 d | −5,9% | +18% | 0,08 |
> | 4196 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+160% · −55,6%** | +53% · −15,8% | +30% | −8,8% | 2,4 | 111 d | −14,9% | +15% | 0,19 |
> | 4197 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+200% · −62,1%** | +52% · −13,9% | +31% | −6,2% | 1,8 | 110 d | −10,4% | +25% | 0,11 |
> | 4198 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+221% · −47,0%** | +48% · −9,3% | +28% | −7,7% | 2,1 | 111 d | −11,3% | +20% | 0,18 |
> | 4199 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+124% · −46,6%** | +35% · −8,9% | +23% | −4,7% | 1,5 | 130 d | −7,4% | +18% | 0,02 |
> | 4200 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+130% · −38,9%** | +36% · −6,6% | +25% | −8,1% | 1,1 | 131 d | −6,7% | +17% | 0,07 |

> [!example]- Combinações 4201 a 4230 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4201 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Tendência ·ADX | **+229% · −61,6%** | +64% · −18,0% | +38% | −8,8% | 2,5 | 159 d | −10,5% | +21% | 0,35 |
> | 4202 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+130% · −49,3%** | +39% · −10,1% | +26% | −9,6% | 1,6 | 86 d | −12,1% | +22% | 0,09 |
> | 4203 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+134% · −33,5%** | +40% · −7,9% | +26% | −4,3% | 1,3 | 130 d | −7,1% | +20% | 0,04 |
> | 4204 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+161% · −52,3%** | +47% · −13,6% | +27% | −5,2% | 1,6 | 97 d | −10,4% | +20% | 0,18 |
> | 4205 | ADX ·ADX + Tendência ·ADX | **+139% · −45,8%** | +73% · −24,1% | +44% | −12,3% | 2,6 | 131 d | −11,7% | +29% | 0,32 |
> | 4206 | VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+91% · −37,1%** | +32% · −9,6% | +25% | −15,4% | 1,1 | 183 d | −6,1% | +21% | 0,26 |
> | 4207 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+229% · −56,7%** | +54% · −12,4% | +30% | −8,6% | 2,3 | 111 d | −14,3% | +15% | 0,33 |
> | 4208 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+96% · −36,3%** | +33% · −9,3% | +23% | −6,3% | 1,4 | 124 d | −7,7% | +17% | −0,02 |
> | 4209 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+168% · −37,4%** | +38% · −7,6% | +26% | −10,8% | 1,3 | 179 d | −6,4% | +18% | 0,18 |
> | 4210 | VWAP ·ADX + BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX | **+164% · −56,8%** | +48% · −16,0% | +30% | −9,7% | 1,8 | 85 d | −14,4% | +15% | 0,42 |
> | 4211 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+180% · −46,5%** | +44% · −8,8% | +27% | −6,2% | 1,8 | 159 d | −7,7% | +18% | 0,09 |
> | 4212 | VWAP ·ADX + Donchian ·ADX + Onda ·VAI | **+123% · −35,3%** | +50% · −12,2% | +31% | −16,0% | 1,7 | 95 d | −11,0% | +20% | 0,36 |
> | 4213 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+141% · −35,8%** | +35% · −6,4% | +24% | −6,2% | 1,4 | 119 d | −8,5% | +16% | −0,01 |
> | 4214 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+104% · −29,8%** | +42% · −9,6% | +27% | −6,3% | 1,8 | 161 d | −7,7% | +19% | 0,04 |
> | 4215 | VWAP ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+94% · −29,7%** | +39% · −9,9% | +29% | −7,3% | 2,0 | 210 d | −8,0% | +18% | 0,11 |
> | 4216 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+109% · −36,0%** | +31% · −5,7% | +22% | −4,9% | 1,1 | 161 d | −6,4% | +14% | 0,02 |
> | 4217 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+211% · −45,7%** | +47% · −9,0% | +30% | −10,5% | 1,4 | 122 d | −8,0% | +19% | 0,32 |
> | 4218 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+113% · −44,5%** | +33% · −8,8% | +24% | −10,3% | 1,8 | 128 d | −8,4% | +16% | 0,07 |
> | 4219 | BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+100% · −38,8%** | +35% · −9,5% | +25% | −8,6% | 1,6 | 106 d | −9,7% | +20% | 0,14 |
> | 4220 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+164% · −37,4%** | +46% · −8,9% | +30% | −6,0% | 1,3 | 130 d | −7,2% | +20% | 0,10 |
> | 4221 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+171% · −51,8%** | +45% · −11,3% | +29% | −9,5% | 1,5 | 83 d | −12,6% | +19% | 0,11 |
> | 4222 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+228% · −56,0%** | +52% · −13,1% | +31% | −10,4% | 1,6 | 83 d | −13,6% | +19% | 0,27 |
> | 4223 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+242% · −62,8%** | +58% · −14,2% | +33% | −10,2% | 2,0 | 95 d | −15,4% | +25% | 0,34 |
> | 4224 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX | **+124% · −42,0%** | +39% · −10,3% | +25% | −10,6% | 1,7 | 91 d | −12,1% | +12% | 0,23 |
> | 4225 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+183% · −53,2%** | +45% · −11,6% | +28% | −9,0% | 1,6 | 86 d | −12,6% | +21% | 0,11 |
> | 4226 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+147% · −33,6%** | +41% · −8,0% | +25% | −6,3% | 1,5 | 120 d | −8,5% | +16% | 0,07 |
> | 4227 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+128% · −47,6%** | +43% · −12,4% | +28% | −10,7% | 1,7 | 87 d | −13,0% | +21% | 0,11 |
> | 4228 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+104% · −47,3%** | +37% · −12,4% | +24% | −7,9% | 1,8 | 95 d | −11,9% | +13% | 0,11 |
> | 4229 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX | **+239% · −67,2%** | +55% · −16,1% | +33% | −8,9% | 2,3 | 111 d | −14,2% | +15% | 0,43 |
> | 4230 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR | **+178% · −57,4%** | +46% · −12,3% | +29% | −6,7% | 1,8 | 130 d | −8,2% | +18% | 0,15 |

> [!example]- Combinações 4231 a 4260 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4231 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+140% · −40,4%** | +36% · −8,2% | +27% | −12,8% | 1,1 | 179 d | −6,3% | +18% | 0,20 |
> | 4232 | MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+80% · −23,8%** | +34% · −6,3% | +27% | −8,9% | 0,8 | 255 d | −5,7% | +15% | −0,06 |
> | 4233 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+177% · −73,0%** | +48% · −16,3% | +31% | −9,1% | 2,2 | 111 d | −12,9% | +13% | 0,38 |
> | 4234 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+134% · −37,8%** | +36% · −6,7% | +25% | −6,0% | 1,2 | 161 d | −6,5% | +14% | 0,07 |
> | 4235 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+74% · −40,6%** | +26% · −8,5% | +20% | −8,4% | 1,1 | 120 d | −8,1% | +13% | 0,02 |
> | 4236 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+148% · −37,6%** | +38% · −6,7% | +25% | −6,6% | 1,2 | 130 d | −7,0% | +17% | 0,09 |
> | 4237 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+153% · −50,5%** | +43% · −10,5% | +29% | −10,4% | 1,6 | 86 d | −12,3% | +21% | 0,13 |
> | 4238 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+251% · −59,1%** | +58% · −12,8% | +33% | −11,0% | 2,3 | 111 d | −14,8% | +20% | 0,41 |
> | 4239 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+176% · −39,5%** | +48% · −8,6% | +28% | −4,4% | 1,9 | 158 d | −8,4% | +17% | 0,01 |
> | 4240 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+129% · −48,8%** | +36% · −10,9% | +26% | −14,0% | 1,2 | 111 d | −8,7% | +19% | 0,26 |
> | 4241 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+132% · −49,8%** | +39% · −10,3% | +26% | −9,6% | 1,5 | 86 d | −12,2% | +21% | 0,10 |
> | 4242 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Tendência ·ADX ⚠️ | **+173% · −68,5%** | +46% · −17,4% | +30% | −7,0% | 2,0 | 128 d | −9,3% | +18% | 0,18 |
> | 4243 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX | **+228% · −67,5%** | +59% · −16,3% | +34% | −8,4% | 2,3 | 128 d | −10,7% | +19% | 0,37 |
> | 4244 | VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM | **+103% · −42,2%** | +42% · −14,0% | +27% | −12,7% | 2,1 | 129 d | −9,5% | +13% | 0,27 |
> | 4245 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+220% · −39,0%** | +57% · −8,4% | +33% | −5,6% | 2,3 | 127 d | −11,0% | +24% | 0,14 |
> | 4246 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+175% · −41,0%** | +42% · −7,6% | +28% | −8,7% | 1,2 | 130 d | −7,1% | +16% | 0,16 |
> | 4247 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL + Onda ·VAI | **+225% · −64,0%** | +55% · −14,7% | +33% | −6,2% | 2,2 | 128 d | −10,2% | +25% | 0,20 |
> | 4248 | ADX ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+110% · −34,1%** | +44% · −11,1% | +29% | −7,5% | 1,3 | 131 d | −7,1% | +18% | 0,05 |
> | 4249 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX | **+226% · −71,0%** | +62% · −18,0% | +35% | −9,2% | 2,3 | 114 d | −13,1% | +23% | 0,40 |
> | 4250 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+110% · −54,3%** | +35% · −11,9% | +24% | −11,1% | 1,5 | 87 d | −12,0% | +14% | 0,13 |
> | 4251 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX | **+235% · −62,3%** | +64% · −17,9% | +33% | −5,6% | 2,2 | 110 d | −13,4% | +20% | 0,36 |
> | 4252 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+156% · −52,9%** | +42% · −11,6% | +26% | −10,9% | 1,6 | 86 d | −13,1% | +15% | 0,19 |
> | 4253 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Tendência ·ADX | **+147% · −65,5%** | +52% · −20,5% | +33% | −12,1% | 2,0 | 95 d | −16,5% | +14% | 0,43 |
> | 4254 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+187% · −64,6%** | +54% · −14,6% | +33% | −10,2% | 1,5 | 82 d | −14,6% | +24% | 0,29 |
> | 4255 | MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+81% · −19,4%** | +45% · −9,3% | +32% | −13,7% | 1,3 | 117 d | −8,7% | +15% | 0,28 |
> | 4256 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+177% · −56,5%** | +46% · −13,6% | +28% | −14,7% | 1,6 | 83 d | −14,4% | +19% | 0,40 |
> | 4257 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+97% · −28,8%** | +32% · −6,6% | +23% | −4,8% | 1,3 | 142 d | −7,0% | +16% | −0,07 |
> | 4258 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+186% · −53,8%** | +45% · −11,8% | +28% | −8,9% | 1,6 | 86 d | −12,7% | +20% | 0,12 |
> | 4259 | ADX ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+143% · −30,9%** | +52% · −9,5% | +33% | −5,6% | 2,0 | 130 d | −9,0% | +20% | −0,05 |
> | 4260 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+126% · −46,0%** | +36% · −10,2% | +26% | −12,8% | 0,9 | 85 d | −10,5% | +18% | 0,14 |

> [!example]- Combinações 4261 a 4290 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4261 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+217% · −49,2%** | +48% · −9,7% | +29% | −8,6% | 2,1 | 111 d | −11,8% | +18% | 0,30 |
> | 4262 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL + Onda ·VAI | **+140% · −58,1%** | +43% · −13,3% | +28% | −13,4% | 1,6 | 86 d | −13,5% | +21% | 0,23 |
> | 4263 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+172% · −42,4%** | +40% · −6,0% | +27% | −5,3% | 1,5 | 161 d | −7,1% | +15% | 0,04 |
> | 4264 | ADX ·ADX + MACD ·ADX + Pullback ·PUL | **+132% · −36,3%** | +49% · −10,9% | +32% | −7,1% | 1,9 | 161 d | −8,2% | +20% | 0,00 |
> | 4265 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+164% · −51,3%** | +47% · −13,2% | +27% | −4,7% | 1,5 | 97 d | −10,5% | +21% | 0,12 |
> | 4266 | Bollinger ·ADX + Onda ·VAI | **+88% · −18,0%** | +48% · −8,5% | +29% | −10,0% | 1,3 | 104 d | −9,5% | +12% | 0,17 |
> | 4267 | 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+57% · −21,1%** | +34% · −10,4% | +25% | −7,3% | 1,1 | 114 d | −8,5% | +16% | 0,16 |
> | 4268 | BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX + Onda ·VAI | **+138% · −51,4%** | +44% · −13,7% | +31% | −9,4% | 1,8 | 101 d | −11,7% | +23% | 0,27 |
> | 4269 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+127% · −31,4%** | +37% · −7,6% | +24% | −10,0% | 1,4 | 173 d | −6,9% | +17% | 0,18 |
> | 4270 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+60% · −26,2%** | +29% · −8,3% | +23% | −13,8% | 1,0 | 213 d | −6,0% | +15% | 0,05 |
> | 4271 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+169% · −40,7%** | +40% · −7,6% | +27% | −8,5% | 1,3 | 98 d | −9,9% | +17% | 0,13 |
> | 4272 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+172% · −51,4%** | +44% · −11,6% | +28% | −11,1% | 1,8 | 111 d | −10,2% | +18% | 0,17 |
> | 4273 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+154% · −43,8%** | +41% · −7,5% | +28% | −9,7% | 1,1 | 131 d | −7,0% | +16% | 0,14 |
> | 4274 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR | **+212% · −63,2%** | +52% · −14,5% | +31% | −6,0% | 2,1 | 129 d | −9,5% | +23% | 0,17 |
> | 4275 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+204% · −51,1%** | +48% · −9,6% | +30% | −7,7% | 1,8 | 159 d | −8,1% | +18% | 0,16 |
> | 4276 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+265% · −52,4%** | +55% · −9,8% | +32% | −9,0% | 2,0 | 115 d | −11,2% | +24% | 0,26 |
> | 4277 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pullback ·PUL + Onda ·VAI | **+221% · −55,1%** | +52% · −9,6% | +32% | −8,1% | 1,9 | 129 d | −8,8% | +19% | 0,18 |
> | 4278 | BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+71% · −31,5%** | +32% · −10,0% | +23% | −3,7% | 2,0 | 130 d | −9,2% | +12% | −0,14 |
> | 4279 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+154% · −39,7%** | +39% · −8,1% | +28% | −9,7% | 1,3 | 115 d | −8,7% | +15% | 0,05 |
> | 4280 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Pôr do sol ·POR | **+117% · −41,4%** | +39% · −10,2% | +27% | −9,7% | 1,8 | 120 d | −9,8% | +16% | 0,11 |
> | 4281 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+178% · −53,3%** | +46% · −11,3% | +29% | −10,1% | 1,8 | 122 d | −9,3% | +23% | 0,23 |
> | 4282 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+113% · −33,7%** | +31% · −6,3% | +24% | −9,8% | 0,9 | 187 d | −6,2% | +17% | 0,02 |
> | 4283 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX + Onda ·VAI | **+224% · −55,6%** | +49% · −11,1% | +30% | −6,2% | 1,9 | 122 d | −9,7% | +24% | 0,17 |
> | 4284 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+147% · −38,4%** | +37% · −6,1% | +25% | −5,0% | 1,1 | 131 d | −7,0% | +14% | 0,04 |
> | 4285 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+126% · −48,7%** | +43% · −12,9% | +28% | −10,7% | 1,8 | 95 d | −12,5% | +19% | 0,11 |
> | 4286 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+81% · −34,6%** | +29% · −8,8% | +22% | −10,1% | 1,1 | 181 d | −6,5% | +18% | 0,11 |
> | 4287 | BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+182% · −55,1%** | +46% · −12,3% | +28% | −10,3% | 1,6 | 86 d | −13,2% | +22% | 0,25 |
> | 4288 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+156% · −47,3%** | +41% · −8,4% | +27% | −8,1% | 1,8 | 111 d | −10,6% | +22% | 0,12 |
> | 4289 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+116% · −55,0%** | +40% · −15,2% | +28% | −8,6% | 1,7 | 95 d | −12,1% | +14% | 0,18 |
> | 4290 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Onda ·VAI | **+202% · −61,4%** | +52% · −13,3% | +31% | −6,2% | 1,8 | 110 d | −10,5% | +24% | 0,12 |

> [!example]- Combinações 4291 a 4320 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4291 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+86% · −24,5%** | +29% · −5,3% | +20% | −7,6% | 1,3 | 210 d | −6,5% | +13% | 0,06 |
> | 4292 | GPS médias ·ADX + Onda ·VAI | **+97% · −31,7%** | +55% · −15,5% | +34% | −14,6% | 1,7 | 86 d | −16,7% | +20% | 0,20 |
> | 4293 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+129% · −40,3%** | +35% · −6,7% | +24% | −5,2% | 1,5 | 161 d | −7,2% | +15% | 0,03 |
> | 4294 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX | **+206% · −57,9%** | +63% · −16,6% | +35% | −10,1% | 2,3 | 128 d | −11,2% | +22% | 0,33 |
> | 4295 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+206% · −55,8%** | +50% · −12,5% | +31% | −11,3% | 1,6 | 86 d | −13,5% | +21% | 0,32 |
> | 4296 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+158% · −41,5%** | +39% · −6,8% | +27% | −6,1% | 1,6 | 161 d | −7,4% | +15% | 0,05 |
> | 4297 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Onda ·VAI | **+133% · −44,5%** | +44% · −11,4% | +30% | −12,8% | 1,5 | 91 d | −11,9% | +24% | 0,30 |
> | 4298 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+166% · −52,4%** | +52% · −14,5% | +33% | −8,3% | 0,9 | 77 d | −14,1% | +17% | 0,19 |
> | 4299 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + IFR ·ADX | **+173% · −54,6%** | +54% · −15,4% | +33% | −11,9% | 2,3 | 120 d | −13,6% | +15% | 0,44 |
> | 4300 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+117% · −38,1%** | +33% · −7,4% | +25% | −9,1% | 1,1 | 114 d | −8,6% | +18% | 0,08 |
> | 4301 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+190% · −45,1%** | +45% · −7,9% | +30% | −9,0% | 1,5 | 130 d | −7,8% | +19% | 0,14 |
> | 4302 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Pôr do sol ·POR | **+130% · −55,7%** | +40% · −12,3% | +27% | −13,7% | 1,5 | 87 d | −12,6% | +19% | 0,19 |
> | 4303 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+121% · −40,3%** | +40% · −9,8% | +27% | −9,7% | 1,2 | 131 d | −7,2% | +17% | 0,18 |
> | 4304 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+88% · −32,7%** | +36% · −11,2% | +27% | −12,0% | 1,9 | 176 d | −8,2% | +17% | 0,05 |
> | 4305 | VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+40% · −26,7%** | +22% · −8,7% | +19% | −11,7% | 0,9 | 210 d | −6,1% | +13% | −0,03 |
> | 4306 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+162% · −50,4%** | +48% · −12,5% | +31% | −7,4% | 2,0 | 161 d | −8,5% | +19% | 0,13 |
> | 4307 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+149% · −44,9%** | +44% · −11,2% | +28% | −4,2% | 2,3 | 130 d | −10,3% | +13% | 0,02 |
> | 4308 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+163% · −54,6%** | +53% · −15,3% | +30% | −8,8% | 2,2 | 111 d | −15,4% | +16% | 0,17 |
> | 4309 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+196% · −51,7%** | +49% · −8,6% | +30% | −8,1% | 1,6 | 129 d | −8,1% | +18% | 0,08 |
> | 4310 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+127% · −44,7%** | +41% · −10,8% | +25% | −5,9% | 2,0 | 111 d | −11,6% | +13% | 0,10 |
> | 4311 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+214% · −47,1%** | +48% · −9,1% | +29% | −7,5% | 1,9 | 111 d | −11,5% | +23% | 0,11 |
> | 4312 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+254% · −62,8%** | +58% · −14,4% | +34% | −8,0% | 2,0 | 123 d | −10,1% | +26% | 0,29 |
> | 4313 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+161% · −46,8%** | +41% · −8,8% | +26% | −4,5% | 1,3 | 119 d | −8,8% | +20% | 0,05 |
> | 4314 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+232% · −59,2%** | +62% · −17,0% | +38% | −6,9% | 2,7 | 185 d | −11,9% | +20% | 0,34 |
> | 4315 | VWAP ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+113% · −35,0%** | +35% · −8,9% | +24% | −13,0% | 1,2 | 169 d | −6,8% | +20% | 0,24 |
> | 4316 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+241% · −50,3%** | +53% · −10,8% | +31% | −10,1% | 1,9 | 122 d | −9,9% | +23% | 0,36 |
> | 4317 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+216% · −56,9%** | +62% · −15,9% | +33% | −10,0% | 2,3 | 111 d | −17,6% | +16% | 0,42 |
> | 4318 | BB explosão ·ADX + MACD ·ADX + Tendência ·ADX + Onda ·VAI | **+160% · −55,3%** | +49% · −15,3% | +34% | −11,0% | 1,8 | 101 d | −12,3% | +26% | 0,38 |
> | 4319 | BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+140% · −37,7%** | +35% · −7,4% | +24% | −7,7% | 1,4 | 119 d | −9,0% | +17% | 0,06 |
> | 4320 | ADX ·ADX + Donchian ·ADX + MACD ·ADX | **+187% · −45,9%** | +67% · −15,4% | +37% | −7,6% | 2,2 | 128 d | −10,3% | +23% | 0,30 |

> [!example]- Combinações 4321 a 4350 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4321 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+178% · −44,5%** | +49% · −11,0% | +28% | −5,8% | 2,1 | 111 d | −12,8% | +15% | 0,13 |
> | 4322 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+96% · −43,9%** | +34% · −12,0% | +24% | −12,1% | 1,0 | 95 d | −10,0% | +17% | 0,03 |
> | 4323 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+210% · −63,9%** | +52% · −15,0% | +31% | −6,0% | 2,2 | 189 d | −9,1% | +22% | 0,18 |
> | 4324 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+159% · −53,6%** | +42% · −11,8% | +25% | −11,1% | 1,6 | 87 d | −13,4% | +16% | 0,19 |
> | 4325 | IFR ·ADX + Onda ·VAI | **+103% · −22,7%** | +55% · −11,1% | +37% | −9,2% | 1,9 | 127 d | −9,3% | +27% | 0,20 |
> | 4326 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL | **+161% · −63,5%** | +43% · −14,4% | +29% | −9,1% | 1,7 | 129 d | −8,6% | +19% | 0,20 |
> | 4327 | ADX ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+161% · −51,2%** | +47% · −13,4% | +27% | −5,5% | 1,5 | 97 d | −11,0% | +18% | 0,23 |
> | 4328 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+177% · −49,6%** | +43% · −11,4% | +28% | −13,6% | 1,1 | 85 d | −11,5% | +18% | 0,31 |
> | 4329 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Onda ·VAI | **+211% · −69,2%** | +62% · −16,9% | +35% | −9,0% | 2,0 | 102 d | −14,8% | +27% | 0,35 |
> | 4330 | GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+144% · −39,8%** | +54% · −13,7% | +34% | −12,8% | 1,6 | 89 d | −13,5% | +18% | 0,23 |
> | 4331 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+87% · −34,5%** | +31% · −7,8% | +23% | −7,6% | 1,2 | 111 d | −9,1% | +18% | 0,03 |
> | 4332 | VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+121% · −34,9%** | +38% · −8,8% | +28% | −13,0% | 1,6 | 179 d | −7,4% | +20% | 0,16 |
> | 4333 | VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+113% · −62,7%** | +40% · −16,7% | +28% | −10,4% | 1,7 | 95 d | −12,7% | +12% | 0,31 |
> | 4334 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+202% · −58,0%** | +61% · −15,4% | +35% | −11,2% | 2,2 | 115 d | −14,5% | +20% | 0,36 |
> | 4335 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+109% · −55,4%** | +35% · −12,4% | +24% | −10,9% | 1,6 | 95 d | −11,7% | +13% | 0,13 |
> | 4336 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+64% · −28,2%** | +26% · −6,5% | +19% | −4,3% | 1,3 | 137 d | −7,3% | +13% | −0,02 |
> | 4337 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+130% · −54,3%** | +38% · −11,9% | +25% | −9,8% | 1,9 | 120 d | −11,0% | +14% | 0,07 |
> | 4338 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+176% · −50,2%** | +45% · −11,2% | +29% | −11,3% | 1,8 | 111 d | −10,7% | +22% | 0,25 |
> | 4339 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+155% · −54,8%** | +42% · −12,3% | +26% | −12,0% | 1,6 | 87 d | −13,9% | +14% | 0,32 |
> | 4340 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+137% · −58,3%** | +39% · −13,2% | +26% | −7,7% | 1,7 | 129 d | −8,7% | +14% | 0,16 |
> | 4341 | BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+167% · −42,4%** | +40% · −8,5% | +27% | −9,9% | 1,3 | 98 d | −10,4% | +18% | 0,22 |
> | 4342 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Onda ·VAI | **+158% · −61,4%** | +57% · −17,9% | +33% | −9,8% | 1,4 | 82 d | −17,6% | +24% | 0,31 |
> | 4343 | 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+100% · −24,5%** | +32% · −5,5% | +25% | −7,0% | 1,1 | 205 d | −6,5% | +14% | −0,02 |
> | 4344 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+231% · −58,7%** | +54% · −13,0% | +31% | −5,8% | 2,0 | 127 d | −10,1% | +21% | 0,21 |
> | 4345 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Tendência ·ADX | **+175% · −67,8%** | +47% · −16,8% | +30% | −7,1% | 1,9 | 129 d | −9,4% | +19% | 0,19 |
> | 4346 | VWAP ·ADX + IFR ·ADX + Onda ·VAI | **+114% · −29,1%** | +45% · −9,1% | +32% | −12,7% | 1,6 | 182 d | −7,5% | +20% | 0,24 |
> | 4347 | VWAP ·ADX + BB explosão ·ADX + IFR ·ADX | **+105% · −44,0%** | +45% · −15,6% | +30% | −13,2% | 1,6 | 91 d | −13,7% | +14% | 0,35 |
> | 4348 | BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+145% · −35,3%** | +41% · −8,6% | +26% | −7,4% | 1,5 | 120 d | −9,2% | +18% | 0,19 |
> | 4349 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Tendência ·ADX | **+167% · −71,7%** | +55% · −20,8% | +34% | −10,3% | 2,2 | 111 d | −15,8% | +13% | 0,51 |
> | 4350 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX | **+189% · −57,8%** | +53% · −16,0% | +31% | −7,5% | 1,5 | 97 d | −11,4% | +23% | 0,34 |

> [!example]- Combinações 4351 a 4380 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4351 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + 1ª vela 80 ·PRI ⚠️ | **+218% · −56,8%** | +52% · −11,3% | +33% | −8,7% | 1,6 | 120 d | −9,6% | +22% | 0,26 |
> | 4352 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+187% · −52,6%** | +45% · −10,3% | +29% | −6,3% | 1,3 | 119 d | −9,1% | +20% | 0,08 |
> | 4353 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Bollinger ·ADX + Tendência ·ADX | **+232% · −69,7%** | +54% · −17,5% | +32% | −7,8% | 2,0 | 120 d | −11,2% | +19% | 0,39 |
> | 4354 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+182% · −48,4%** | +44% · −8,4% | +27% | −6,1% | 1,7 | 159 d | −8,0% | +17% | 0,09 |
> | 4355 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+95% · −40,8%** | +30% · −8,1% | +23% | −10,5% | 1,1 | 120 d | −8,6% | +17% | 0,06 |
> | 4356 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+183% · −59,7%** | +51% · −12,5% | +31% | −9,5% | 2,1 | 111 d | −13,3% | +23% | 0,15 |
> | 4357 | BB explosão ·ADX + Rompe 200 ·ROM + Tendência ·ADX | **+108% · −52,1%** | +44% · −18,8% | +30% | −8,9% | 2,1 | 111 d | −13,4% | +12% | 0,29 |
> | 4358 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+159% · −58,2%** | +53% · −17,0% | +30% | −9,9% | 2,2 | 114 d | −16,0% | +13% | 0,40 |
> | 4359 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Bollinger ·ADX | **+193% · −60,2%** | +46% · −13,0% | +28% | −7,1% | 1,8 | 128 d | −9,3% | +17% | 0,24 |
> | 4360 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+116% · −38,2%** | +32% · −7,3% | +22% | −7,8% | 1,2 | 108 d | −9,5% | +15% | 0,07 |
> | 4361 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+107% · −44,3%** | +33% · −8,8% | +25% | −10,7% | 1,5 | 120 d | −9,2% | +19% | 0,05 |
> | 4362 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+69% · −28,6%** | +27% · −6,1% | +22% | −10,0% | 0,6 | 222 d | −6,2% | +15% | −0,03 |
> | 4363 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+92% · −33,8%** | +32% · −8,4% | +25% | −13,8% | 0,8 | 211 d | −6,3% | +17% | 0,16 |
> | 4364 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+206% · −51,2%** | +47% · −8,9% | +29% | −4,8% | 2,0 | 159 d | −9,0% | +16% | 0,06 |
> | 4365 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+128% · −56,6%** | +39% · −12,6% | +27% | −13,5% | 1,6 | 95 d | −12,2% | +18% | 0,17 |
> | 4366 | VWAP ·ADX + BB explosão ·ADX + Tendência ·ADX + Onda ·VAI | **+129% · −57,8%** | +45% · −16,5% | +32% | −13,1% | 1,5 | 85 d | −14,2% | +23% | 0,38 |
> | 4367 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+115% · −48,2%** | +38% · −13,7% | +27% | −12,2% | 1,6 | 120 d | −9,7% | +15% | 0,12 |
> | 4368 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+139% · −45,0%** | +36% · −9,6% | +25% | −11,5% | 1,3 | 98 d | −10,5% | +18% | 0,20 |
> | 4369 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Tendência ·ADX | **+195% · −70,7%** | +52% · −17,5% | +34% | −11,5% | 2,2 | 120 d | −13,4% | +18% | 0,50 |
> | 4370 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL | **+138% · −59,8%** | +46% · −15,2% | +29% | −11,0% | 2,2 | 119 d | −13,4% | +11% | 0,28 |
> | 4371 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+110% · −46,1%** | +34% · −10,2% | +26% | −13,4% | 0,9 | 95 d | −10,3% | +21% | 0,13 |
> | 4372 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX | **+178% · −60,0%** | +59% · −17,5% | +34% | −12,8% | 2,2 | 114 d | −16,6% | +20% | 0,48 |
> | 4373 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+178% · −49,9%** | +46% · −9,3% | +30% | −8,9% | 1,8 | 111 d | −11,1% | +26% | 0,18 |
> | 4374 | MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+81% · −21,7%** | +34% · −6,8% | +27% | −9,1% | 0,8 | 263 d | −6,3% | +15% | 0,06 |
> | 4375 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Onda ·VAI | **+217% · −66,7%** | +57% · −15,5% | +34% | −8,7% | 1,8 | 110 d | −11,2% | +27% | 0,32 |
> | 4376 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+229% · −51,4%** | +51% · −11,5% | +30% | −12,1% | 1,9 | 111 d | −12,0% | +18% | 0,34 |
> | 4377 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+169% · −52,9%** | +43% · −12,1% | +28% | −10,9% | 1,9 | 124 d | −9,8% | +17% | 0,12 |
> | 4378 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+251% · −66,8%** | +64% · −15,8% | +36% | −8,1% | 2,1 | 114 d | −12,9% | +23% | 0,33 |
> | 4379 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + MACD ·ADX + Pôr do sol ·POR | **+206% · −50,7%** | +49% · −9,2% | +30% | −7,7% | 1,7 | 159 d | −8,2% | +17% | 0,17 |
> | 4380 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+130% · −40,3%** | +36% · −6,6% | +25% | −6,7% | 1,0 | 161 d | −6,9% | +14% | 0,01 |

> [!example]- Combinações 4381 a 4410 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4381 | ADX ·ADX + IFR ·ADX | **+134% · −29,5%** | +71% · −14,3% | +41% | −8,5% | 1,9 | 122 d | −10,2% | +20% | 0,33 |
> | 4382 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+165% · −46,6%** | +42% · −9,3% | +28% | −10,3% | 1,0 | 122 d | −8,1% | +20% | 0,19 |
> | 4383 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Tendência ·ADX | **+134% · −60,5%** | +45% · −17,8% | +32% | −12,9% | 1,7 | 95 d | −13,4% | +18% | 0,46 |
> | 4384 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI ⚠️ | **+206% · −40,7%** | +70% · −11,8% | +38% | −6,4% | 2,0 | 105 d | −14,4% | +24% | 0,16 |
> | 4385 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL | **+171% · −61,3%** | +55% · −18,0% | +32% | −5,8% | 2,2 | 120 d | −13,2% | +18% | 0,22 |
> | 4386 | ADX ·ADX + VWAP ·ADX + IFR ·ADX + Pôr do sol ·POR | **+160% · −38,1%** | +46% · −9,0% | +30% | −5,4% | 1,6 | 131 d | −8,3% | +14% | 0,09 |
> | 4387 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+145% · −56,2%** | +41% · −13,1% | +27% | −12,4% | 1,5 | 95 d | −11,9% | +18% | 0,11 |
> | 4388 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+109% · −42,6%** | +33% · −8,6% | +24% | −10,9% | 1,4 | 120 d | −9,2% | +20% | 0,07 |
> | 4389 | VWAP ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+91% · −33,5%** | +32% · −8,4% | +25% | −13,6% | 0,9 | 263 d | −6,4% | +18% | 0,08 |
> | 4390 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+90% · −43,3%** | +30% · −9,4% | +23% | −11,9% | 0,9 | 98 d | −10,0% | +19% | 0,08 |
> | 4391 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+128% · −59,8%** | +38% · −11,7% | +25% | −9,6% | 1,8 | 111 d | −11,1% | +12% | 0,15 |
> | 4392 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+263% · −56,5%** | +61% · −12,6% | +34% | −9,8% | 2,2 | 128 d | −11,1% | +25% | 0,28 |
> | 4393 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+190% · −51,7%** | +45% · −9,8% | +29% | −6,3% | 1,2 | 119 d | −9,1% | +20% | 0,11 |
> | 4394 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+80% · −26,9%** | +28% · −6,3% | +22% | −8,4% | 0,9 | 212 d | −6,4% | +15% | 0,00 |
> | 4395 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+157% · −64,1%** | +47% · −14,9% | +29% | −11,5% | 2,1 | 111 d | −14,1% | +14% | 0,21 |
> | 4396 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Tendência ·ADX | **+220% · −76,0%** | +59% · −21,2% | +35% | −8,4% | 2,4 | 129 d | −12,5% | +18% | 0,42 |
> | 4397 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR | **+150% · −47,5%** | +46% · −12,2% | +29% | −8,8% | 1,9 | 111 d | −12,3% | +19% | 0,17 |
> | 4398 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+187% · −59,4%** | +47% · −12,5% | +31% | −7,4% | 1,6 | 122 d | −9,3% | +25% | 0,15 |
> | 4399 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·VAI | **+161% · −53,3%** | +43% · −10,8% | +28% | −6,4% | 1,6 | 122 d | −9,2% | +23% | 0,13 |
> | 4400 | VWAP ·ADX + MACD ·ADX + Bollinger ·ADX | **+102% · −32,6%** | +40% · −11,0% | +26% | −15,7% | 1,4 | 174 d | −7,4% | +17% | 0,46 |
> | 4401 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+124% · −45,8%** | +36% · −10,2% | +26% | −12,6% | 0,9 | 95 d | −10,4% | +18% | 0,06 |
> | 4402 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Tendência ·ADX + Onda ·VAI | **+187% · −67,0%** | +53% · −16,4% | +34% | −11,3% | 2,1 | 111 d | −14,0% | +22% | 0,43 |
> | 4403 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+199% · −52,6%** | +46% · −10,1% | +28% | −5,8% | 1,3 | 101 d | −10,6% | +19% | 0,11 |
> | 4404 | BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+151% · −49,5%** | +46% · −13,5% | +27% | −9,0% | 1,7 | 95 d | −14,6% | +15% | 0,30 |
> | 4405 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL + Onda ·VAI ⚠️ | **+162% · −54,0%** | +42% · −10,7% | +28% | −5,6% | 1,7 | 130 d | −8,6% | +23% | 0,03 |
> | 4406 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Onda ·VAI | **+198% · −53,5%** | +49% · −8,4% | +30% | −8,1% | 1,5 | 129 d | −8,3% | +17% | 0,12 |
> | 4407 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+158% · −39,7%** | +46% · −9,4% | +30% | −6,3% | 1,0 | 122 d | −8,2% | +16% | 0,07 |
> | 4408 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX | **+198% · −68,4%** | +67% · −21,5% | +36% | −8,0% | 2,2 | 114 d | −15,6% | +20% | 0,45 |
> | 4409 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL | **+200% · −62,6%** | +58% · −18,7% | +33% | −5,6% | 2,3 | 159 d | −10,4% | +17% | 0,21 |
> | 4410 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+134% · −52,1%** | +42% · −13,8% | +27% | −5,5% | 1,9 | 161 d | −8,7% | +18% | −0,02 |

> [!example]- Combinações 4411 a 4440 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4411 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+152% · −54,5%** | +41% · −11,1% | +26% | −8,4% | 2,1 | 130 d | −10,4% | +13% | 0,10 |
> | 4412 | VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+41% · −25,9%** | +22% · −8,4% | +18% | −11,9% | 0,7 | 210 d | −6,5% | +14% | 0,01 |
> | 4413 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+228% · −45,6%** | +57% · −10,9% | +32% | −8,3% | 2,3 | 124 d | −12,3% | +20% | 0,27 |
> | 4414 | ADX ·ADX + Pullback ·PUL + Onda ·VAI | **+127% · −34,2%** | +50% · −10,4% | +32% | −8,6% | 1,7 | 131 d | −8,6% | +20% | 0,08 |
> | 4415 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+180% · −43,2%** | +49% · −10,8% | +28% | −5,8% | 2,0 | 111 d | −13,3% | +16% | 0,11 |
> | 4416 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+236% · −56,8%** | +54% · −12,2% | +31% | −4,9% | 1,9 | 127 d | −10,3% | +23% | 0,12 |
> | 4417 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Bollinger ·ADX | **+176% · −50,6%** | +52% · −13,9% | +30% | −11,8% | 1,8 | 95 d | −15,2% | +21% | 0,38 |
> | 4418 | VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI ⚠️ | **+143% · −39,6%** | +52% · −14,1% | +32% | −14,6% | 1,8 | 102 d | −13,5% | +20% | 0,30 |
> | 4419 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+150% · −52,2%** | +43% · −11,2% | +29% | −11,7% | 1,6 | 95 d | −12,7% | +22% | 0,26 |
> | 4420 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Tendência ·ADX ⚠️ | **+214% · −67,7%** | +53% · −16,8% | +34% | −7,6% | 1,7 | 120 d | −10,3% | +22% | 0,29 |
> | 4421 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+129% · −35,4%** | +39% · −8,0% | +25% | −7,7% | 1,4 | 108 d | −10,4% | +20% | 0,12 |
> | 4422 | BB explosão ·ADX + IFR ·ADX + Onda ·VAI | **+129% · −35,7%** | +51% · −11,7% | +34% | −10,2% | 1,7 | 101 d | −12,2% | +25% | 0,27 |
> | 4423 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+121% · −55,0%** | +39% · −12,1% | +27% | −13,1% | 1,3 | 86 d | −13,8% | +22% | 0,11 |
> | 4424 | VWAP ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+112% · −31,3%** | +35% · −7,7% | +24% | −11,1% | 1,2 | 183 d | −7,0% | +18% | 0,07 |
> | 4425 | BB explosão ·ADX + MACD ·ADX + Tendência ·ADX | **+131% · −54,6%** | +52% · −20,8% | +35% | −10,9% | 2,0 | 111 d | −14,2% | +20% | 0,47 |
> | 4426 | Donchian ·ADX + Rompe 200 ·ROM | **+93% · −26,3%** | +51% · −12,6% | +29% | −6,8% | 2,4 | 179 d | −11,1% | +14% | 0,24 |
> | 4427 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + GPS médias ·ADX + Onda ·VAI | **+223% · −58,1%** | +59% · −12,8% | +34% | −10,8% | 2,2 | 128 d | −11,2% | +25% | 0,29 |
> | 4428 | VWAP ·ADX + Tendência ·ADX + Onda ·VAI | **+114% · −33,6%** | +46% · −11,0% | +33% | −13,2% | 1,8 | 135 d | −8,8% | +26% | 0,34 |
> | 4429 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+99% · −35,4%** | +33% · −9,1% | +23% | −6,2% | 1,3 | 142 d | −7,7% | +17% | 0,03 |
> | 4430 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+141% · −45,3%** | +36% · −9,7% | +24% | −11,7% | 1,2 | 98 d | −10,8% | +19% | 0,21 |
> | 4431 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+114% · −40,0%** | +32% · −8,2% | +22% | −9,2% | 1,3 | 108 d | −10,0% | +13% | 0,13 |
> | 4432 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+191% · −48,3%** | +47% · −9,7% | +31% | −11,8% | 1,0 | 122 d | −8,4% | +20% | 0,27 |
> | 4433 | ADX ·ADX + Donchian ·ADX + Pullback ·PUL | **+186% · −41,7%** | +64% · −13,5% | +36% | −5,7% | 2,4 | 159 d | −11,3% | +21% | 0,07 |
> | 4434 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+222% · −64,0%** | +57% · −13,2% | +34% | −11,0% | 2,0 | 115 d | −13,8% | +28% | 0,31 |
> | 4435 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+79% · −44,9%** | +30% · −11,0% | +23% | −9,4% | 1,7 | 128 d | −9,2% | +10% | 0,02 |
> | 4436 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+173% · −50,7%** | +50% · −13,0% | +31% | −5,4% | 1,7 | 128 d | −9,3% | +22% | 0,05 |
> | 4437 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+164% · −57,8%** | +46% · −14,1% | +30% | −16,1% | 1,5 | 95 d | −12,5% | +22% | 0,35 |
> | 4438 | Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+177% · −45,5%** | +50% · −11,5% | +28% | −7,0% | 2,0 | 111 d | −13,9% | +14% | 0,27 |
> | 4439 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+195% · −63,7%** | +54% · −15,6% | +32% | −14,0% | 2,0 | 111 d | −13,8% | +18% | 0,37 |
> | 4440 | MACD ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+127% · −29,5%** | +38% · −6,4% | +28% | −9,6% | 1,1 | 202 d | −6,9% | +14% | 0,00 |

> [!example]- Combinações 4441 a 4470 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4441 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+123% · −55,5%** | +40% · −12,3% | +27% | −13,2% | 1,3 | 86 d | −13,9% | +23% | 0,15 |
> | 4442 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+102% · −52,6%** | +39% · −14,5% | +25% | −13,0% | 1,4 | 87 d | −14,8% | +14% | 0,13 |
> | 4443 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+197% · −51,7%** | +47% · −11,1% | +29% | −8,1% | 1,6 | 122 d | −9,5% | +22% | 0,09 |
> | 4444 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+144% · −59,4%** | +41% · −14,5% | +27% | −13,4% | 1,5 | 95 d | −12,4% | +17% | 0,28 |
> | 4445 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+165% · −45,0%** | +42% · −8,8% | +28% | −8,7% | 1,0 | 130 d | −7,7% | +18% | 0,06 |
> | 4446 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+129% · −40,4%** | +34% · −6,4% | +24% | −3,7% | 1,4 | 161 d | −7,8% | +13% | 0,01 |
> | 4447 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+170% · −60,3%** | +47% · −14,2% | +28% | −14,0% | 1,4 | 86 d | −14,9% | +23% | 0,35 |
> | 4448 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+255% · −53,9%** | +53% · −8,5% | +32% | −6,5% | 2,0 | 129 d | −10,3% | +19% | 0,13 |
> | 4449 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+93% · −45,0%** | +30% · −8,9% | +23% | −11,4% | 1,2 | 120 d | −9,1% | +15% | 0,12 |
> | 4450 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+159% · −61,7%** | +48% · −14,6% | +28% | −11,6% | 2,0 | 111 d | −14,5% | +15% | 0,22 |
> | 4451 | Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+212% · −51,8%** | +48% · −10,0% | +29% | −8,9% | 1,9 | 111 d | −12,4% | +22% | 0,25 |
> | 4452 | ADX ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+196% · −52,4%** | +47% · −10,0% | +28% | −7,0% | 1,3 | 101 d | −11,0% | +20% | 0,20 |
> | 4453 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Tendência ·ADX | **+190% · −72,3%** | +51% · −18,9% | +33% | −9,5% | 2,0 | 128 d | −10,4% | +21% | 0,38 |
> | 4454 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+148% · −55,7%** | +42% · −12,0% | +28% | −12,0% | 1,7 | 111 d | −11,6% | +17% | 0,22 |
> | 4455 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+151% · −44,2%** | +39% · −6,5% | +27% | −6,9% | 1,4 | 161 d | −7,7% | +15% | 0,06 |
> | 4456 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+127% · −59,2%** | +40% · −13,7% | +27% | −14,5% | 1,5 | 95 d | −13,1% | +16% | 0,31 |
> | 4457 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+167% · −52,8%** | +45% · −11,7% | +29% | −10,9% | 1,5 | 95 d | −13,1% | +20% | 0,24 |
> | 4458 | ADX ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+136% · −40,9%** | +53% · −14,4% | +31% | −6,0% | 2,0 | 122 d | −11,3% | +25% | 0,09 |
> | 4459 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+189% · −53,9%** | +49% · −12,0% | +32% | −12,8% | 1,5 | 95 d | −13,1% | +19% | 0,28 |
> | 4460 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + Onda ·VAI | **+197% · −44,0%** | +55% · −9,3% | +32% | −5,6% | 1,8 | 131 d | −9,1% | +21% | 0,04 |
> | 4461 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+154% · −68,6%** | +48% · −16,0% | +29% | −12,5% | 2,0 | 111 d | −15,0% | +13% | 0,37 |
> | 4462 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+163% · −45,1%** | +41% · −8,9% | +26% | −4,4% | 1,2 | 122 d | −8,9% | +20% | 0,06 |
> | 4463 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+210% · −61,6%** | +55% · −14,3% | +30% | −12,6% | 2,0 | 111 d | −16,3% | +15% | 0,42 |
> | 4464 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+79% · −51,2%** | +31% · −12,8% | +23% | −11,3% | 1,6 | 120 d | −10,3% | +9% | 0,17 |
> | 4465 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+124% · −49,5%** | +36% · −11,2% | +26% | −14,1% | 0,9 | 95 d | −11,0% | +19% | 0,24 |
> | 4466 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+156% · −40,2%** | +45% · −7,8% | +30% | −7,2% | 1,5 | 131 d | −8,5% | +16% | 0,09 |
> | 4467 | VWAP ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+139% · −38,3%** | +41% · −10,0% | +28% | −14,8% | 1,2 | 181 d | −7,3% | +20% | 0,37 |
> | 4468 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+159% · −50,2%** | +41% · −11,4% | +27% | −14,4% | 1,1 | 90 d | −12,5% | +21% | 0,36 |
> | 4469 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+145% · −51,7%** | +40% · −12,0% | +29% | −15,6% | 1,0 | 95 d | −11,0% | +19% | 0,32 |
> | 4470 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+204% · −49,2%** | +47% · −9,8% | +30% | −9,8% | 2,0 | 192 d | −9,2% | +21% | 0,27 |

> [!example]- Combinações 4471 a 4500 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4471 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·VAI | **+165% · −53,1%** | +42% · −10,2% | +28% | −5,7% | 1,6 | 130 d | −8,7% | +22% | 0,02 |
> | 4472 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+180% · −63,5%** | +51% · −13,4% | +31% | −10,8% | 2,0 | 114 d | −14,1% | +22% | 0,33 |
> | 4473 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+223% · −59,0%** | +51% · −12,4% | +31% | −8,1% | 1,3 | 101 d | −11,3% | +20% | 0,28 |
> | 4474 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+197% · −65,5%** | +56% · −13,7% | +34% | −12,1% | 2,0 | 114 d | −14,7% | +27% | 0,39 |
> | 4475 | VWAP ·ADX + GPS médias ·ADX | **+78% · −33,3%** | +47% · −17,4% | +29% | −20,0% | 1,7 | 98 d | −15,1% | +16% | 0,29 |
> | 4476 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+130% · −57,4%** | +38% · −11,5% | +25% | −9,7% | 1,7 | 111 d | −11,5% | +13% | 0,16 |
> | 4477 | MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+128% · −31,5%** | +38% · −7,0% | +28% | −10,8% | 1,2 | 192 d | −7,3% | +15% | 0,21 |
> | 4478 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX | **+170% · −65,9%** | +52% · −16,3% | +31% | −15,2% | 2,0 | 111 d | −15,5% | +18% | 0,46 |
> | 4479 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+86% · −28,9%** | +37% · −9,4% | +24% | −5,9% | 1,0 | 161 d | −7,3% | +17% | −0,05 |
> | 4480 | VWAP ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+77% · −27,9%** | +33% · −9,2% | +21% | −13,3% | 1,3 | 171 d | −7,6% | +15% | 0,24 |
> | 4481 | Donchian ·ADX + 1ª vela 80 ·PRI ⚠️ | **+132% · −30,0%** | +67% · −14,3% | +37% | −8,4% | 2,1 | 112 d | −16,6% | +27% | 0,12 |
> | 4482 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+112% · −46,3%** | +34% · −10,2% | +26% | −13,6% | 0,9 | 98 d | −10,6% | +20% | 0,17 |
> | 4483 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+199% · −52,3%** | +48% · −11,2% | +29% | −8,2% | 1,5 | 122 d | −9,6% | +21% | 0,14 |
> | 4484 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX | **+204% · −49,9%** | +55% · −13,0% | +31% | −10,0% | 1,9 | 111 d | −14,5% | +20% | 0,40 |
> | 4485 | VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+40% · −22,5%** | +22% · −5,4% | +18% | −9,4% | 0,5 | 210 d | −6,7% | +10% | −0,03 |
> | 4486 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+138% · −47,2%** | +37% · −10,3% | +25% | −12,6% | 1,2 | 98 d | −11,4% | +17% | 0,30 |
> | 4487 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+181% · −51,5%** | +44% · −10,4% | +26% | −9,4% | 1,8 | 111 d | −12,4% | +14% | 0,19 |
> | 4488 | ADX ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+102% · −30,6%** | +41% · −9,7% | +27% | −6,4% | 1,7 | 161 d | −8,6% | +16% | 0,03 |
> | 4489 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX + Onda ·VAI | **+189% · −55,3%** | +57% · −14,3% | +35% | −7,9% | 1,5 | 108 d | −11,3% | +26% | 0,26 |
> | 4490 | ADX ·ADX + BB explosão ·ADX + Tendência ·ADX + Onda ·VAI | **+186% · −66,2%** | +58% · −20,1% | +36% | −10,2% | 1,6 | 101 d | −12,9% | +28% | 0,30 |
> | 4491 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+109% · −49,1%** | +35% · −11,2% | +26% | −14,9% | 0,9 | 95 d | −11,1% | +22% | 0,28 |
> | 4492 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+162% · −56,4%** | +44% · −11,6% | +29% | −8,7% | 1,1 | 101 d | −10,7% | +20% | 0,18 |
> | 4493 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+100% · −24,8%** | +32% · −4,7% | +25% | −5,6% | 1,0 | 279 d | −6,9% | +13% | −0,04 |
> | 4494 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+259% · −46,9%** | +54% · −8,2% | +32% | −5,1% | 1,9 | 130 d | −10,1% | +22% | 0,09 |
> | 4495 | Donchian ·ADX + Quinta ·PR2 ⚠️ | **+92% · −23,3%** | +50% · −10,6% | +29% | −4,7% | 2,3 | 139 d | −12,1% | +17% | −0,20 |
> | 4496 | VWAP ·ADX + GPS médias ·ADX + Onda ·VAI | **+105% · −39,4%** | +45% · −14,2% | +30% | −18,1% | 1,5 | 94 d | −14,4% | +27% | 0,28 |
> | 4497 | BB explosão ·ADX + IFR ·ADX | **+97% · −34,4%** | +54% · −17,6% | +35% | −8,9% | 2,0 | 119 d | −15,1% | +16% | 0,40 |
> | 4498 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL + Onda ·VAI ⚠️ | **+204% · −52,4%** | +49% · −10,2% | +31% | −6,4% | 1,5 | 122 d | −9,7% | +22% | 0,10 |
> | 4499 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+238% · −54,3%** | +53% · −10,5% | +32% | −9,8% | 1,8 | 111 d | −12,9% | +27% | 0,34 |
> | 4500 | ADX ·ADX + BB explosão ·ADX + IFR ·ADX | **+159% · −53,9%** | +61% · −19,6% | +36% | −7,2% | 1,9 | 122 d | −11,5% | +23% | 0,36 |

> [!example]- Combinações 4501 a 4530 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4501 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL + Onda ·VAI | **+128% · −48,1%** | +37% · −10,3% | +27% | −13,7% | 1,5 | 120 d | −10,1% | +23% | 0,23 |
> | 4502 | VWAP ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+114% · −31,4%** | +35% · −7,7% | +24% | −11,2% | 1,1 | 183 d | −7,3% | +17% | 0,13 |
> | 4503 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+132% · −35,7%** | +39% · −8,3% | +25% | −7,8% | 1,3 | 108 d | −10,8% | +19% | 0,11 |
> | 4504 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+138% · −58,6%** | +39% · −12,7% | +26% | −6,4% | 1,6 | 159 d | −8,6% | +15% | 0,08 |
> | 4505 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+250% · −50,7%** | +55% · −9,3% | +33% | −10,1% | 1,8 | 128 d | −10,3% | +20% | 0,30 |
> | 4506 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+163% · −45,2%** | +41% · −8,3% | +26% | −3,8% | 1,2 | 130 d | −8,3% | +19% | 0,01 |
> | 4507 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+224% · −49,5%** | +50% · −8,2% | +30% | −7,8% | 1,8 | 128 d | −10,2% | +20% | 0,20 |
> | 4508 | VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+88% · −33,1%** | +38% · −11,2% | +25% | −13,1% | 1,9 | 140 d | −9,6% | +18% | −0,01 |
> | 4509 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Pullback ·PUL ⚠️ | **+178% · −57,1%** | +45% · −12,1% | +29% | −8,3% | 1,5 | 128 d | −9,2% | +19% | 0,15 |
> | 4510 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+168% · −58,3%** | +43% · −12,4% | +26% | −7,1% | 1,4 | 120 d | −10,0% | +18% | 0,20 |
> | 4511 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+97% · −34,0%** | +34% · −7,6% | +24% | −6,7% | 1,1 | 161 d | −7,6% | +15% | 0,03 |
> | 4512 | VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR | **+104% · −33,4%** | +42% · −10,5% | +26% | −10,8% | 1,7 | 159 d | −8,9% | +15% | 0,06 |
> | 4513 | ADX ·ADX + Bollinger ·ADX | **+119% · −32,1%** | +63% · −16,1% | +32% | −7,9% | 1,5 | 122 d | −9,6% | +18% | 0,45 |
> | 4514 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+168% · −45,6%** | +42% · −8,9% | +28% | −8,9% | 0,9 | 130 d | −8,0% | +17% | 0,13 |
> | 4515 | VWAP ·ADX + BB explosão ·ADX + Tendência ·ADX | **+104% · −60,3%** | +46% · −22,2% | +32% | −12,1% | 1,6 | 95 d | −16,6% | +12% | 0,45 |
> | 4516 | MACD ·ADX | **+40% · −10,5%** | +40% · −10,5% | +31% | −16,7% | 1,2 | 189 d | −7,6% | +21% | — |
> | 4517 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+223% · −42,6%** | +57% · −8,7% | +33% | −4,5% | 2,0 | 127 d | −11,3% | +21% | 0,05 |
> | 4518 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+209% · −53,0%** | +47% · −9,1% | +29% | −4,8% | 1,9 | 159 d | −9,4% | +16% | 0,05 |
> | 4519 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR | **+150% · −54,3%** | +42% · −11,4% | +27% | −12,2% | 1,7 | 111 d | −12,0% | +18% | 0,24 |
> | 4520 | VWAP ·ADX + Pullback ·PUL | **+46% · −24,5%** | +29% · −12,1% | +24% | −15,6% | 1,6 | 210 d | −8,2% | +11% | 0,10 |
> | 4521 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+127% · −40,8%** | +40% · −10,7% | +29% | −16,3% | 1,0 | 179 d | −7,4% | +18% | 0,35 |
> | 4522 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+102% · −34,1%** | +34% · −8,4% | +26% | −12,6% | 0,8 | 182 d | −7,2% | +18% | 0,01 |
> | 4523 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+102% · −26,0%** | +33% · −5,2% | +25% | −7,1% | 1,0 | 205 d | −7,2% | +14% | 0,09 |
> | 4524 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+95% · −43,8%** | +30% · −8,8% | +23% | −11,6% | 1,1 | 120 d | −9,5% | +16% | 0,13 |
> | 4525 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX | **+136% · −60,0%** | +61% · −23,6% | +34% | −8,4% | 1,5 | 94 d | −19,8% | +20% | 0,45 |
> | 4526 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+100% · −53,6%** | +39% · −15,0% | +25% | −12,8% | 1,5 | 95 d | −14,3% | +13% | 0,12 |
> | 4527 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+196% · −53,2%** | +48% · −11,6% | +29% | −9,2% | 1,6 | 122 d | −10,0% | +24% | 0,22 |
> | 4528 | BB explosão ·ADX + Tendência ·ADX | **+98% · −51,0%** | +56% · −28,3% | +37% | −11,5% | 1,9 | 111 d | −19,3% | +12% | 0,52 |
> | 4529 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+91% · −43,5%** | +30% · −9,4% | +23% | −12,1% | 0,9 | 108 d | −10,1% | +20% | 0,11 |
> | 4530 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+183% · −49,6%** | +44% · −8,4% | +27% | −4,7% | 1,6 | 159 d | −8,6% | +15% | 0,04 |

> [!example]- Combinações 4531 a 4560 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4531 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+133% · −36,8%** | +41% · −8,6% | +27% | −6,8% | 1,1 | 130 d | −8,3% | +15% | 0,04 |
> | 4532 | ADX ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+107% · −30,6%** | +44% · −10,8% | +29% | −7,8% | 1,0 | 130 d | −8,1% | +18% | −0,08 |
> | 4533 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pullback ·PUL | **+101% · −46,9%** | +36% · −12,5% | +26% | −13,3% | 1,6 | 120 d | −11,0% | +15% | 0,21 |
> | 4534 | Donchian ·ADX + MACD ·ADX + Onda ·VAI | **+152% · −32,8%** | +56% · −11,2% | +35% | −11,3% | 2,1 | 181 d | −10,2% | +28% | 0,39 |
> | 4535 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX | **+145% · −65,4%** | +54% · −19,4% | +31% | −14,9% | 1,9 | 111 d | −18,4% | +13% | 0,48 |
> | 4536 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+121% · −41,5%** | +39% · −9,3% | +27% | −7,9% | 1,1 | 161 d | −7,8% | +15% | 0,11 |
> | 4537 | 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+139% · −25,6%** | +48% · −7,6% | +30% | −9,5% | 1,4 | 205 d | −7,9% | +11% | 0,23 |
> | 4538 | ADX ·ADX + MACD ·ADX + Pôr do sol ·POR | **+112% · −32,9%** | +44% · −10,5% | +29% | −7,1% | 1,1 | 161 d | −7,8% | +17% | 0,02 |
> | 4539 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+159% · −48,6%** | +41% · −9,7% | +27% | −7,7% | 2,0 | 192 d | −9,6% | +17% | 0,15 |
> | 4540 | BB explosão ·ADX + Pullback ·PUL | **+61% · −34,9%** | +37% · −17,8% | +26% | −6,3% | 1,8 | 108 d | −14,7% | +7% | −0,00 |
> | 4541 | Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL | **+135% · −48,6%** | +52% · −17,2% | +31% | −6,1% | 2,3 | 130 d | −14,3% | +11% | 0,23 |
> | 4542 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+184% · −50,0%** | +45% · −10,3% | +26% | −9,6% | 1,7 | 111 d | −12,8% | +15% | 0,20 |
> | 4543 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+134% · −38,7%** | +42% · −9,3% | +28% | −8,8% | 1,1 | 130 d | −8,3% | +18% | 0,17 |
> | 4544 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+184% · −39,1%** | +41% · −7,6% | +27% | −7,6% | 1,4 | 128 d | −9,2% | +15% | 0,05 |
> | 4545 | ADX ·ADX + Donchian ·ADX + Quinta ·PR2 ⚠️ | **+160% · −39,0%** | +58% · −12,2% | +32% | −5,7% | 2,0 | 136 d | −10,4% | +19% | 0,03 |
> | 4546 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+127% · −42,0%** | +40% · −10,1% | +25% | −4,6% | 1,9 | 129 d | −10,5% | +15% | 0,01 |
> | 4547 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+146% · −58,4%** | +42% · −12,8% | +28% | −13,1% | 1,7 | 111 d | −12,5% | +15% | 0,36 |
> | 4548 | BB explosão ·ADX + Tendência ·ADX + Onda ·VAI | **+128% · −51,6%** | +52% · −19,0% | +35% | −11,1% | 1,7 | 102 d | −15,2% | +27% | 0,36 |
> | 4549 | VWAP ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+154% · −37,8%** | +43% · −10,0% | +28% | −13,8% | 1,2 | 179 d | −7,9% | +18% | 0,32 |
> | 4550 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+144% · −54,7%** | +47% · −15,7% | +28% | −14,3% | 1,5 | 95 d | −17,1% | +15% | 0,42 |
> | 4551 | ADX ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+108% · −33,4%** | +45% · −10,7% | +29% | −9,0% | 0,9 | 122 d | −9,1% | +20% | 0,07 |
> | 4552 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+140% · −51,8%** | +49% · −14,2% | +32% | −13,4% | 1,4 | 95 d | −15,6% | +22% | 0,32 |
> | 4553 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+160% · −41,5%** | +47% · −10,3% | +31% | −11,3% | 1,1 | 130 d | −8,4% | +18% | 0,28 |
> | 4554 | VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 ⚠️ | **+103% · −33,2%** | +42% · −10,6% | +27% | −10,5% | 1,9 | 148 d | −10,1% | +15% | −0,01 |
> | 4555 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+220% · −54,7%** | +52% · −12,0% | +32% | −11,6% | 1,6 | 122 d | −10,3% | +24% | 0,29 |
> | 4556 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+207% · −63,8%** | +52% · −15,2% | +31% | −6,9% | 2,0 | 189 d | −10,0% | +21% | 0,27 |
> | 4557 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+180% · −53,6%** | +45% · −10,9% | +26% | −10,6% | 1,7 | 111 d | −13,3% | +13% | 0,32 |
> | 4558 | Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX | **+165% · −46,0%** | +59% · −16,0% | +31% | −8,2% | 1,9 | 111 d | −18,1% | +14% | 0,38 |
> | 4559 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+99% · −57,0%** | +39% · −16,2% | +25% | −14,2% | 1,4 | 95 d | −15,4% | +12% | 0,33 |
> | 4560 | ADX ·ADX + BB explosão ·ADX + Tendência ·ADX | **+160% · −65,0%** | +63% · −26,7% | +38% | −10,5% | 2,1 | 127 d | −13,0% | +20% | 0,40 |

> [!example]- Combinações 4561 a 4590 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4561 | Donchian ·ADX + Pôr do sol ·POR | **+93% · −25,1%** | +51% · −11,5% | +29% | −4,7% | 2,1 | 131 d | −11,7% | +20% | −0,16 |
> | 4562 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Onda ·VAI | **+170% · −63,6%** | +59% · −16,3% | +34% | −12,0% | 1,9 | 115 d | −17,4% | +25% | 0,41 |
> | 4563 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+137% · −57,6%** | +44% · −13,7% | +29% | −16,0% | 1,3 | 95 d | −14,4% | +25% | 0,36 |
> | 4564 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX | **+118% · −57,6%** | +44% · −16,7% | +29% | −17,4% | 1,4 | 95 d | −16,0% | +18% | 0,42 |
> | 4565 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+92% · −40,2%** | +30% · −8,4% | +23% | −10,6% | 0,9 | 120 d | −9,5% | +19% | 0,00 |
> | 4566 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+117% · −39,6%** | +40% · −8,3% | +27% | −8,7% | 0,9 | 131 d | −8,2% | +15% | 0,02 |
> | 4567 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pullback ·PUL | **+143% · −45,0%** | +43% · −10,4% | +29% | −8,2% | 1,6 | 161 d | −8,8% | +16% | 0,14 |
> | 4568 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+120% · −56,8%** | +40% · −12,8% | +27% | −14,5% | 1,3 | 95 d | −14,3% | +21% | 0,29 |
> | 4569 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+116% · −38,3%** | +38% · −8,4% | +26% | −7,1% | 1,5 | 161 d | −8,6% | +16% | 0,10 |
> | 4570 | ADX ·ADX + VWAP ·ADX + Bollinger ·ADX + Onda ·VAI | **+170% · −40,5%** | +49% · −9,6% | +29% | −10,0% | 1,2 | 122 d | −9,6% | +17% | 0,29 |
> | 4571 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+143% · −53,4%** | +42% · −10,8% | +28% | −11,7% | 1,6 | 111 d | −12,2% | +21% | 0,15 |
> | 4572 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+130% · −35,8%** | +34% · −6,6% | +25% | −6,8% | 1,2 | 160 d | −8,2% | +15% | −0,04 |
> | 4573 | VWAP ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+103% · −37,2%** | +34% · −9,6% | +26% | −14,4% | 0,9 | 179 d | −7,7% | +19% | 0,24 |
> | 4574 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+168% · −57,2%** | +43% · −12,2% | +26% | −8,4% | 1,3 | 120 d | −10,5% | +17% | 0,28 |
> | 4575 | ADX ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+240% · −45,0%** | +63% · −10,4% | +36% | −6,5% | 1,9 | 127 d | −12,1% | +25% | 0,18 |
> | 4576 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+226% · −50,5%** | +50% · −7,9% | +30% | −6,6% | 1,7 | 129 d | −10,1% | +18% | 0,08 |
> | 4577 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+155% · −58,1%** | +46% · −13,7% | +30% | −15,2% | 1,3 | 95 d | −14,8% | +23% | 0,31 |
> | 4578 | MACD ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+129% · −29,0%** | +38% · −6,5% | +28% | −9,4% | 1,0 | 202 d | −7,6% | +14% | 0,13 |
> | 4579 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+125% · −51,8%** | +43% · −14,2% | +28% | −11,7% | 1,7 | 111 d | −13,6% | +18% | 0,28 |
> | 4580 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+136% · −44,6%** | +36% · −9,6% | +25% | −11,4% | 1,1 | 108 d | −11,1% | +20% | 0,13 |
> | 4581 | Donchian ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+169% · −37,4%** | +59% · −11,6% | +35% | −10,6% | 1,7 | 115 d | −13,0% | +27% | 0,23 |
> | 4582 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX | **+203% · −56,3%** | +49% · −12,1% | +29% | −13,2% | 1,7 | 111 d | −13,8% | +18% | 0,43 |
> | 4583 | BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+130% · −37,5%** | +39% · −9,0% | +25% | −8,9% | 1,4 | 111 d | −11,5% | +18% | 0,23 |
> | 4584 | ADX ·ADX + BB explosão ·ADX + Bollinger ·ADX | **+149% · −54,3%** | +56% · −20,0% | +30% | −6,4% | 1,3 | 97 d | −14,4% | +21% | 0,39 |
> | 4585 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+144% · −50,0%** | +47% · −13,3% | +28% | −9,7% | 1,7 | 122 d | −11,2% | +20% | 0,22 |
> | 4586 | VWAP ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+76% · −24,9%** | +32% · −7,8% | +21% | −10,9% | 1,3 | 210 d | −7,9% | +14% | 0,09 |
> | 4587 | VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR | **+62% · −26,6%** | +29% · −8,4% | +23% | −14,1% | 0,9 | 188 d | −7,6% | +14% | 0,14 |
> | 4588 | VWAP ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+94% · −34,7%** | +38% · −11,9% | +28% | −18,0% | 1,2 | 174 d | −8,1% | +19% | 0,38 |
> | 4589 | ADX ·ADX + GPS médias ·ADX + MACD ·ADX | **+162% · −42,8%** | +62% · −15,2% | +36% | −8,8% | 1,9 | 122 d | −12,7% | +30% | 0,29 |
> | 4590 | ADX ·ADX + Pôr do sol ·POR + Onda ·VAI | **+109% · −31,2%** | +45% · −10,9% | +29% | −7,9% | 0,9 | 131 d | −8,3% | +17% | −0,04 |

> [!example]- Combinações 4591 a 4620 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4591 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+198% · −61,5%** | +52% · −14,1% | +31% | −7,6% | 1,7 | 127 d | −10,9% | +25% | 0,24 |
> | 4592 | ADX ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+119% · −31,8%** | +46% · −10,0% | +29% | −5,5% | 1,1 | 130 d | −8,7% | +19% | −0,03 |
> | 4593 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX | **+163% · −59,9%** | +52% · −16,7% | +32% | −8,7% | 1,7 | 128 d | −10,7% | +20% | 0,33 |
> | 4594 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+201% · −49,0%** | +56% · −13,4% | +31% | −9,1% | 1,8 | 122 d | −11,9% | +23% | 0,36 |
> | 4595 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+129% · −39,0%** | +35% · −7,9% | +25% | −8,3% | 1,2 | 137 d | −8,6% | +16% | 0,02 |
> | 4596 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+167% · −42,1%** | +48% · −10,7% | +30% | −7,1% | 2,0 | 197 d | −10,2% | +18% | 0,03 |
> | 4597 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+171% · −51,0%** | +46% · −10,6% | +29% | −9,5% | 1,5 | 122 d | −10,6% | +22% | 0,08 |
> | 4598 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX | **+192% · −63,2%** | +47% · −14,4% | +29% | −10,0% | 1,4 | 120 d | −10,8% | +20% | 0,38 |
> | 4599 | Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX + Onda ·VAI | **+200% · −52,2%** | +55% · −12,9% | +31% | −9,6% | 1,7 | 111 d | −15,3% | +25% | 0,31 |
> | 4600 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+104% · −30,3%** | +33% · −6,5% | +21% | −3,7% | 1,4 | 133 d | −9,1% | +16% | 0,00 |
> | 4601 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+103% · −33,9%** | +34% · −8,4% | +26% | −12,8% | 0,7 | 187 d | −7,6% | +17% | 0,15 |
> | 4602 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+164% · −48,7%** | +51% · −13,5% | +32% | −13,4% | 1,7 | 114 d | −13,2% | +23% | 0,30 |
> | 4603 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+140% · −57,9%** | +39% · −12,1% | +26% | −6,3% | 1,5 | 159 d | −9,0% | +16% | 0,06 |
> | 4604 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+141% · −50,1%** | +45% · −13,8% | +28% | −10,1% | 1,7 | 114 d | −13,1% | +18% | 0,25 |
> | 4605 | ADX ·ADX + VWAP ·ADX + Bollinger ·ADX | **+134% · −39,0%** | +51% · −12,3% | +29% | −8,9% | 1,4 | 131 d | −9,1% | +13% | 0,39 |
> | 4606 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+98% · −42,2%** | +34% · −11,3% | +24% | −12,3% | 1,0 | 120 d | −10,0% | +18% | 0,11 |
> | 4607 | VWAP ·ADX + Tendência ·ADX | **+83% · −35,7%** | +48% · −16,7% | +34% | −11,9% | 2,1 | 174 d | −11,0% | +16% | 0,34 |
> | 4608 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX + Onda ·VAI | **+161% · −67,4%** | +52% · −15,2% | +31% | −14,3% | 1,7 | 111 d | −16,1% | +22% | 0,40 |
> | 4609 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + MACD ·ADX | **+167% · −51,5%** | +53% · −13,8% | +32% | −11,9% | 1,7 | 122 d | −11,5% | +23% | 0,31 |
> | 4610 | Rompe 200 ·ROM + Onda ·VAI | **+49% · −17,0%** | +31% · −7,9% | +24% | −11,3% | 0,7 | 346 d | −7,3% | +14% | 0,18 |
> | 4611 | VWAP ·ADX + Donchian ·ADX + MACD ·ADX | **+126% · −35,2%** | +49% · −12,6% | +31% | −16,6% | 2,0 | 131 d | −11,8% | +20% | 0,49 |
> | 4612 | VWAP ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+61% · −30,9%** | +30% · −10,4% | +23% | −16,3% | 0,7 | 171 d | −7,9% | +19% | 0,23 |
> | 4613 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+111% · −49,8%** | +38% · −13,0% | +25% | −6,0% | 1,3 | 127 d | −9,7% | +16% | 0,07 |
> | 4614 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + IFR ·ADX + Onda ·VAI | **+187% · −61,4%** | +50% · −13,0% | +32% | −9,9% | 1,5 | 122 d | −10,7% | +22% | 0,28 |
> | 4615 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI ⚠️ | **+217% · −59,3%** | +63% · −17,0% | +35% | −6,5% | 1,9 | 123 d | −12,4% | +23% | 0,27 |
> | 4616 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL + Onda ·VAI | **+137% · −43,3%** | +44% · −9,5% | +29% | −9,1% | 1,4 | 131 d | −9,1% | +16% | 0,15 |
> | 4617 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+99% · −37,1%** | +35% · −7,9% | +23% | −6,8% | 0,9 | 161 d | −8,1% | +14% | 0,03 |
> | 4618 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+173% · −51,6%** | +46% · −10,8% | +29% | −9,5% | 1,5 | 122 d | −10,7% | +21% | 0,11 |
> | 4619 | ADX ·ADX + MACD ·ADX + Onda ·VAI | **+133% · −38,6%** | +52% · −11,9% | +34% | −10,2% | 0,9 | 122 d | −9,5% | +19% | 0,18 |
> | 4620 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Onda ·VAI | **+145% · −52,4%** | +42% · −10,3% | +28% | −11,9% | 1,5 | 111 d | −12,6% | +22% | 0,19 |

> [!example]- Combinações 4621 a 4650 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4621 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+131% · −51,2%** | +37% · −9,8% | +25% | −8,4% | 1,8 | 130 d | −10,6% | +14% | 0,07 |
> | 4622 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+144% · −44,7%** | +43% · −12,3% | +27% | −13,5% | 1,1 | 108 d | −11,8% | +18% | 0,34 |
> | 4623 | Donchian ·ADX + MACD ·ADX | **+117% · −27,3%** | +62% · −13,9% | +36% | −11,6% | 2,4 | 167 d | −14,6% | +27% | 0,54 |
> | 4624 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pullback ·PUL | **+196% · −68,6%** | +52% · −16,7% | +31% | −7,7% | 1,9 | 159 d | −10,5% | +16% | 0,25 |
> | 4625 | VWAP ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+69% · −27,3%** | +31% · −8,9% | +24% | −11,9% | 0,8 | 181 d | −7,9% | +16% | −0,07 |
> | 4626 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+135% · −56,1%** | +44% · −15,3% | +28% | −6,8% | 1,4 | 127 d | −10,0% | +23% | 0,11 |
> | 4627 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+122% · −36,5%** | +38% · −9,3% | +27% | −10,7% | 1,3 | 210 d | −8,3% | +19% | 0,18 |
> | 4628 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Rompe 200 ·ROM | **+166% · −46,8%** | +50% · −12,1% | +30% | −8,0% | 1,7 | 159 d | −9,6% | +18% | 0,20 |
> | 4629 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+97% · −48,4%** | +34% · −13,8% | +25% | −13,7% | 1,0 | 115 d | −10,7% | +15% | 0,24 |
> | 4630 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+116% · −41,2%** | +32% · −8,2% | +22% | −9,3% | 1,2 | 121 d | −10,4% | +14% | 0,13 |
> | 4631 | ADX ·ADX + Donchian ·ADX + Onda ·VAI | **+181% · −44,1%** | +67% · −14,1% | +37% | −7,8% | 1,8 | 128 d | −11,2% | +23% | 0,19 |
> | 4632 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+145% · −46,9%** | +47% · −12,0% | +28% | −8,1% | 1,7 | 130 d | −10,5% | +21% | 0,09 |
> | 4633 | VWAP ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+60% · −26,9%** | +29% · −8,8% | +23% | −13,9% | 0,6 | 213 d | −7,6% | +16% | −0,08 |
> | 4634 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+140% · −50,6%** | +39% · −10,0% | +26% | −6,3% | 1,1 | 122 d | −9,9% | +20% | 0,05 |
> | 4635 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+198% · −49,1%** | +47% · −8,6% | +30% | −8,1% | 1,8 | 197 d | −9,5% | +24% | 0,06 |
> | 4636 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + MACD ·ADX | **+190% · −53,5%** | +56% · −13,7% | +33% | −10,0% | 1,7 | 159 d | −9,8% | +18% | 0,34 |
> | 4637 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Pôr do sol ·POR | **+123% · −40,9%** | +40% · −9,0% | +27% | −8,2% | 1,0 | 161 d | −8,3% | +14% | 0,12 |
> | 4638 | ADX ·ADX + VWAP ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+117% · −38,5%** | +40% · −8,9% | +27% | −10,6% | 1,0 | 130 d | −8,8% | +18% | 0,16 |
> | 4639 | ADX ·ADX + BB explosão ·ADX + Bollinger ·ADX + Onda ·VAI | **+183% · −55,5%** | +53% · −14,7% | +31% | −7,4% | 1,2 | 101 d | −13,6% | +19% | 0,27 |
> | 4640 | ADX ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+84% · −29,4%** | +36% · −9,6% | +24% | −6,0% | 0,9 | 161 d | −8,2% | +13% | 0,08 |
> | 4641 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+241% · −61,1%** | +59% · −13,3% | +34% | −7,8% | 1,7 | 124 d | −11,4% | +27% | 0,24 |
> | 4642 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX | **+128% · −45,5%** | +40% · −12,5% | +26% | −15,0% | 1,1 | 98 d | −13,9% | +18% | 0,42 |
> | 4643 | ADX ·ADX + VWAP ·ADX + Tendência ·ADX | **+147% · −53,3%** | +57% · −19,2% | +36% | −10,4% | 1,9 | 161 d | −10,9% | +21% | 0,29 |
> | 4644 | ADX ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+139% · −38,7%** | +54% · −13,4% | +31% | −5,6% | 1,9 | 130 d | −11,4% | +25% | 0,03 |
> | 4645 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pullback ·PUL | **+169% · −66,8%** | +49% · −16,8% | +30% | −9,1% | 1,9 | 128 d | −12,5% | +17% | 0,24 |
> | 4646 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+118% · −55,9%** | +36% · −12,4% | +24% | −7,7% | 1,2 | 129 d | −9,4% | +15% | 0,10 |
> | 4647 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Tendência ·ADX + Onda ·VAI | **+181% · −70,9%** | +51% · −17,9% | +33% | −9,6% | 1,5 | 120 d | −12,3% | +26% | 0,32 |
> | 4648 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+169% · −52,5%** | +46% · −11,2% | +29% | −10,9% | 1,5 | 122 d | −11,2% | +25% | 0,21 |
> | 4649 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+228% · −52,3%** | +50% · −7,9% | +30% | −6,7% | 1,6 | 129 d | −10,4% | +17% | 0,13 |
> | 4650 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX | **+168% · −52,7%** | +51% · −14,2% | +29% | −12,4% | 1,6 | 111 d | −16,3% | +14% | 0,42 |

> [!example]- Combinações 4651 a 4680 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4651 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+142% · −49,7%** | +40% · −9,4% | +26% | −6,2% | 1,0 | 122 d | −10,0% | +19% | 0,05 |
> | 4652 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX + Onda ·VAI | **+197% · −56,6%** | +49% · −12,0% | +29% | −12,7% | 1,5 | 111 d | −14,4% | +22% | 0,36 |
> | 4653 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+163% · −57,4%** | +44% · −11,9% | +29% | −7,4% | 1,1 | 122 d | −10,2% | +20% | 0,09 |
> | 4654 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+81% · −40,7%** | +31% · −10,5% | +23% | −9,5% | 1,6 | 159 d | −9,7% | +12% | 0,02 |
> | 4655 | Donchian ·ADX + BB explosão ·ADX + Tendência ·ADX | **+171% · −63,2%** | +66% · −24,5% | +39% | −9,3% | 2,4 | 190 d | −17,4% | +14% | 0,61 |
> | 4656 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+131% · −38,3%** | +35% · −7,7% | +25% | −8,3% | 1,1 | 160 d | −8,7% | +15% | 0,07 |
> | 4657 | VWAP ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+77% · −25,2%** | +33% · −7,9% | +21% | −11,1% | 1,2 | 210 d | −8,3% | +13% | 0,12 |
> | 4658 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Onda ·VAI | **+182% · −52,2%** | +56% · −12,8% | +33% | −10,4% | 1,5 | 129 d | −10,1% | +18% | 0,26 |
> | 4659 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+147% · −45,7%** | +47% · −11,5% | +28% | −8,0% | 1,7 | 130 d | −10,6% | +20% | 0,09 |
> | 4660 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+139% · −61,7%** | +40% · −13,8% | +27% | −8,8% | 1,2 | 129 d | −9,6% | +19% | 0,16 |
> | 4661 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 ⚠️ | **+175% · −60,7%** | +54% · −17,7% | +31% | −5,3% | 1,9 | 189 d | −10,6% | +18% | 0,15 |
> | 4662 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Bollinger ·ADX | **+231% · −67,4%** | +56% · −16,0% | +31% | −8,4% | 1,9 | 128 d | −12,9% | +18% | 0,38 |
> | 4663 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + MACD ·ADX + Onda ·VAI | **+190% · −54,0%** | +51% · −11,6% | +32% | −12,2% | 1,5 | 122 d | −11,4% | +24% | 0,28 |
> | 4664 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+171% · −57,5%** | +43% · −12,1% | +26% | −7,0% | 1,3 | 128 d | −10,1% | +17% | 0,19 |
> | 4665 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Onda ·VAI | **+100% · −46,6%** | +38% · −13,1% | +28% | −17,2% | 0,8 | 98 d | −13,7% | +21% | 0,37 |
> | 4666 | BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX + Onda ·VAI | **+155% · −42,2%** | +45% · −10,5% | +29% | −11,1% | 1,2 | 108 d | −12,8% | +17% | 0,29 |
> | 4667 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+166% · −56,5%** | +44% · −11,5% | +29% | −7,3% | 1,1 | 122 d | −10,3% | +19% | 0,10 |
> | 4668 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+200% · −47,9%** | +47% · −8,5% | +30% | −8,1% | 1,7 | 192 d | −9,6% | +24% | 0,12 |
> | 4669 | VWAP ·ADX + Pôr do sol ·POR + Onda ·VAI | **+61% · −29,3%** | +29% · −8,9% | +23% | −14,1% | 0,4 | 222 d | −7,8% | +14% | 0,07 |
> | 4670 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+86% · −31,1%** | +36% · −10,2% | +25% | −6,9% | 1,2 | 124 d | −10,1% | +16% | −0,15 |
> | 4671 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+121% · −30,8%** | +47% · −9,5% | +29% | −4,9% | 1,1 | 130 d | −9,3% | +17% | 0,06 |
> | 4672 | Pullback ·PUL + Onda ·VAI | **+63% · −19,9%** | +37% · −9,5% | +29% | −8,7% | 1,6 | 229 d | −9,2% | +22% | 0,16 |
> | 4673 | BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX | **+115% · −49,9%** | +50% · −18,4% | +31% | −14,5% | 1,6 | 111 d | −17,7% | +20% | 0,40 |
> | 4674 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Tendência ·ADX | **+160% · −69,7%** | +53% · −22,4% | +34% | −9,3% | 1,8 | 128 d | −12,2% | +18% | 0,38 |
> | 4675 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+104% · −32,9%** | +42% · −9,7% | +27% | −6,0% | 1,5 | 161 d | −9,4% | +15% | −0,06 |
> | 4676 | BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Bollinger ·ADX ⚠️ | **+103% · −32,3%** | +33% · −7,2% | +22% | −5,4% | 1,4 | 133 d | −9,7% | +13% | 0,07 |
> | 4677 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+120% · −55,8%** | +36% · −11,5% | +24% | −6,3% | 1,1 | 159 d | −8,9% | +16% | 0,05 |
> | 4678 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+64% · −46,4%** | +27% · −11,1% | +21% | −10,9% | 1,0 | 121 d | −10,6% | +10% | 0,06 |
> | 4679 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+211% · −56,8%** | +49% · −11,8% | +29% | −9,0% | 1,2 | 120 d | −11,4% | +21% | 0,32 |
> | 4680 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+238% · −54,7%** | +55% · −9,5% | +33% | −10,1% | 1,6 | 128 d | −11,1% | +20% | 0,25 |

> [!example]- Combinações 4681 a 4710 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4681 | ADX ·ADX + VWAP ·ADX + MACD ·ADX + Onda ·VAI | **+140% · −47,1%** | +46% · −11,0% | +31% | −12,5% | 1,0 | 130 d | −9,2% | +18% | 0,28 |
> | 4682 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI ⚠️ | **+212% · −64,9%** | +55% · −15,3% | +32% | −9,5% | 1,6 | 128 d | −11,3% | +21% | 0,31 |
> | 4683 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+149% · −48,2%** | +46% · −12,2% | +29% | −5,9% | 1,1 | 119 d | −11,5% | +21% | 0,15 |
> | 4684 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR | **+137% · −55,2%** | +44% · −14,9% | +28% | −6,4% | 1,3 | 128 d | −10,1% | +22% | 0,08 |
> | 4685 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 + Pullback ·PUL ⚠️ | **+116% · −38,3%** | +38% · −8,3% | +26% | −5,1% | 1,4 | 161 d | −9,3% | +13% | 0,03 |
> | 4686 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+113% · −49,4%** | +38% · −12,5% | +25% | −5,6% | 1,3 | 161 d | −9,1% | +19% | 0,02 |
> | 4687 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+154% · −48,5%** | +41% · −8,9% | +27% | −8,2% | 1,8 | 197 d | −10,2% | +21% | 0,10 |
> | 4688 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+135% · −38,8%** | +42% · −8,8% | +27% | −7,0% | 1,0 | 161 d | −8,7% | +14% | 0,11 |
> | 4689 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+141% · −46,1%** | +45% · −12,3% | +28% | −9,0% | 1,7 | 124 d | −12,4% | +20% | 0,03 |
> | 4690 | BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+133% · −35,1%** | +48% · −11,9% | +28% | −9,0% | 1,3 | 120 d | −12,0% | +16% | 0,24 |
> | 4691 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+169% · −41,2%** | +48% · −10,2% | +29% | −7,1% | 1,9 | 192 d | −10,5% | +20% | 0,09 |
> | 4692 | ADX ·ADX + VWAP ·ADX + IFR ·ADX | **+146% · −39,1%** | +55% · −12,1% | +34% | −7,7% | 1,6 | 131 d | −10,4% | +15% | 0,23 |
> | 4693 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pullback ·PUL | **+192% · −51,5%** | +54% · −12,1% | +32% | −6,3% | 1,9 | 159 d | −11,4% | +17% | 0,16 |
> | 4694 | Donchian ·ADX | **+83% · −23,6%** | +83% · −23,6% | +42% | −10,5% | 2,3 | 169 d | −24,5% | +17% | — |
> | 4695 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM | **+170% · −65,9%** | +49% · −16,1% | +29% | −9,1% | 1,7 | 129 d | −11,5% | +15% | 0,29 |
> | 4696 | BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+142% · −38,7%** | +36% · −7,3% | +24% | −7,6% | 1,3 | 144 d | −9,4% | +17% | 0,07 |
> | 4697 | BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI ⚠️ | **+184% · −41,0%** | +42% · −8,6% | +27% | −9,2% | 1,4 | 137 d | −9,7% | +16% | 0,19 |
> | 4698 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX | **+186% · −72,8%** | +59% · −19,6% | +33% | −10,6% | 1,9 | 128 d | −14,6% | +18% | 0,41 |
> | 4699 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+174% · −54,6%** | +52% · −14,3% | +33% | −8,2% | 1,1 | 119 d | −11,8% | +21% | 0,23 |
> | 4700 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+143% · −50,8%** | +39% · −9,5% | +26% | −5,2% | 1,1 | 130 d | −9,5% | +19% | −0,01 |
> | 4701 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+138% · −60,8%** | +41% · −13,9% | +27% | −10,4% | 1,2 | 128 d | −10,2% | +19% | 0,24 |
> | 4702 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Onda ·VAI | **+97% · −45,1%** | +36% · −11,8% | +26% | −13,9% | 1,3 | 120 d | −12,0% | +20% | 0,22 |
> | 4703 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+105% · −36,9%** | +36% · −8,4% | +27% | −9,9% | 1,0 | 124 d | −10,1% | +17% | 0,03 |
> | 4704 | VWAP ·ADX + Pullback ·PUL + Onda ·VAI | **+75% · −27,8%** | +34% · −9,0% | +26% | −14,4% | 1,2 | 211 d | −8,6% | +17% | 0,21 |
> | 4705 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR | **+177% · −59,9%** | +54% · −17,1% | +31% | −5,0% | 1,8 | 158 d | −11,1% | +19% | 0,12 |
> | 4706 | ADX ·ADX + Donchian ·ADX + Pôr do sol ·POR | **+163% · −39,8%** | +59% · −11,6% | +32% | −5,3% | 1,8 | 158 d | −11,0% | +18% | −0,01 |
> | 4707 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+187% · −39,8%** | +41% · −7,6% | +27% | −7,7% | 1,4 | 163 d | −9,3% | +15% | 0,10 |
> | 4708 | Pôr do sol ·POR + Onda ·VAI | **+49% · −16,1%** | +31% · −6,4% | +24% | −8,2% | 0,5 | 307 d | −8,0% | +11% | −0,10 |
> | 4709 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+84% · −44,0%** | +32% · −10,9% | +24% | −13,5% | 1,0 | 120 d | −11,2% | +16% | 0,13 |
> | 4710 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL | **+121% · −54,9%** | +49% · −20,7% | +30% | −7,2% | 1,8 | 159 d | −11,1% | +16% | 0,13 |

> [!example]- Combinações 4711 a 4740 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4711 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+196% · −53,6%** | +47% · −10,7% | +30% | −9,5% | 1,7 | 197 d | −10,1% | +25% | 0,24 |
> | 4712 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+125% · −48,3%** | +41% · −11,3% | +26% | −6,1% | 1,9 | 197 d | −11,2% | +12% | 0,12 |
> | 4713 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+200% · −65,3%** | +53% · −15,4% | +30% | −9,8% | 1,5 | 120 d | −14,4% | +19% | 0,40 |
> | 4714 | 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+55% · −13,7%** | +33% · −5,7% | +25% | −5,2% | 1,0 | 278 d | −8,4% | +14% | −0,34 |
> | 4715 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+134% · −56,4%** | +46% · −16,5% | +29% | −16,0% | 1,4 | 111 d | −15,3% | +18% | 0,34 |
> | 4716 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Onda ·VAI | **+119% · −40,7%** | +40% · −8,4% | +27% | −8,9% | 0,8 | 161 d | −8,7% | +14% | 0,07 |
> | 4717 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX | **+189% · −70,1%** | +53% · −17,5% | +32% | −10,5% | 1,7 | 129 d | −12,1% | +20% | 0,39 |
> | 4718 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+113% · −48,4%** | +39% · −12,3% | +25% | −5,5% | 1,2 | 131 d | −9,8% | +18% | 0,02 |
> | 4719 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+167% · −47,2%** | +49% · −13,0% | +30% | −8,2% | 1,8 | 197 d | −10,7% | +17% | 0,24 |
> | 4720 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+146% · −67,0%** | +46% · −17,0% | +28% | −10,4% | 1,5 | 120 d | −13,8% | +16% | 0,29 |
> | 4721 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+98% · −37,3%** | +34% · −7,9% | +23% | −4,8% | 0,8 | 161 d | −8,8% | +11% | 0,03 |
> | 4722 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + MACD ·ADX | **+164% · −68,2%** | +50% · −17,4% | +31% | −12,0% | 1,5 | 120 d | −14,1% | +21% | 0,37 |
> | 4723 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+138% · −45,7%** | +37% · −9,7% | +24% | −11,5% | 1,0 | 121 d | −11,4% | +20% | 0,16 |
> | 4724 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+168% · −57,1%** | +44% · −13,8% | +28% | −11,9% | 1,8 | 197 d | −10,7% | +16% | 0,29 |
> | 4725 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX ⚠️ | **+195% · −51,8%** | +54% · −14,9% | +31% | −10,2% | 1,7 | 124 d | −13,8% | +21% | 0,31 |
> | 4726 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+183% · −53,1%** | +55% · −14,8% | +33% | −10,7% | 1,4 | 122 d | −12,4% | +24% | 0,28 |
> | 4727 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+181% · −51,5%** | +46% · −11,1% | +29% | −6,4% | 1,0 | 122 d | −11,0% | +17% | 0,08 |
> | 4728 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+176% · −51,0%** | +45% · −9,8% | +30% | −9,0% | 1,8 | 192 d | −10,7% | +26% | 0,15 |
> | 4729 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 ⚠️ | **+173% · −66,0%** | +48% · −15,9% | +29% | −7,7% | 1,6 | 159 d | −10,7% | +17% | 0,18 |
> | 4730 | Donchian ·ADX + BB explosão ·ADX + Tendência ·ADX + Onda ·VAI | **+197% · −61,9%** | +60% · −18,3% | +37% | −9,4% | 2,2 | 192 d | −14,8% | +25% | 0,44 |
> | 4731 | ADX ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+144% · −40,7%** | +55% · −13,8% | +34% | −8,6% | 0,8 | 122 d | −10,7% | +15% | 0,16 |
> | 4732 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+119% · −47,2%** | +40% · −13,2% | +28% | −16,7% | 1,1 | 124 d | −10,7% | +21% | 0,34 |
> | 4733 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Quinta ·PR2 ⚠️ | **+167% · −48,0%** | +50% · −11,1% | +30% | −6,3% | 1,6 | 159 d | −10,5% | +15% | 0,08 |
> | 4734 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+219% · −55,9%** | +52% · −10,0% | +33% | −11,3% | 1,7 | 197 d | −10,4% | +25% | 0,31 |
> | 4735 | ADX ·ADX + GPS médias ·ADX | **+125% · −41,9%** | +71% · −22,5% | +38% | −8,4% | 1,7 | 122 d | −17,9% | +30% | 0,40 |
> | 4736 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+120% · −54,7%** | +36% · −12,0% | +24% | −7,7% | 1,1 | 159 d | −9,5% | +16% | 0,09 |
> | 4737 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+154% · −55,1%** | +42% · −11,2% | +27% | −8,0% | 1,1 | 128 d | −10,3% | +19% | 0,10 |
> | 4738 | VWAP ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+71% · −26,1%** | +31% · −8,5% | +24% | −12,1% | 0,7 | 212 d | −8,4% | +14% | 0,13 |
> | 4739 | BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·ADX | **+105% · −33,7%** | +34% · −7,6% | +22% | −5,2% | 1,3 | 133 d | −10,2% | +15% | 0,03 |
> | 4740 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+55% · −27,5%** | +27% · −8,0% | +20% | −3,8% | 1,0 | 137 d | −9,6% | +14% | −0,09 |

> [!example]- Combinações 4741 a 4770 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4741 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX | **+91% · −54,7%** | +45% · −20,9% | +28% | −17,7% | 1,3 | 111 d | −20,0% | +12% | 0,46 |
> | 4742 | 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+89% · −23,6%** | +36% · −6,4% | +27% | −8,5% | 0,9 | 364 d | −8,4% | +11% | −0,15 |
> | 4743 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 ⚠️ | **+148% · −48,6%** | +46% · −12,0% | +29% | −5,1% | 1,1 | 127 d | −10,9% | +20% | 0,03 |
> | 4744 | ADX ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+150% · −57,7%** | +51% · −16,6% | +30% | −5,9% | 1,6 | 122 d | −14,6% | +21% | 0,13 |
> | 4745 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR + Onda ·VAI | **+107% · −37,9%** | +37% · −8,5% | +27% | −10,0% | 0,9 | 124 d | −10,5% | +16% | 0,07 |
> | 4746 | VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+136% · −47,2%** | +37% · −10,6% | +25% | −12,9% | 1,1 | 121 d | −11,9% | +21% | 0,27 |
> | 4747 | BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+84% · −33,1%** | +31% · −7,2% | +23% | −7,1% | 0,9 | 142 d | −9,5% | +16% | −0,09 |
> | 4748 | VWAP ·ADX + Rompe 200 ·ROM | **+33% · −26,5%** | +23% · −13,5% | +19% | −18,5% | 0,7 | 210 d | −8,5% | +11% | 0,15 |
> | 4749 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+157% · −54,2%** | +42% · −10,8% | +27% | −8,2% | 1,0 | 128 d | −10,4% | +18% | 0,13 |
> | 4750 | VWAP ·ADX + Bollinger ·ADX + Onda ·VAI | **+102% · −31,9%** | +40% · −10,9% | +26% | −15,5% | 1,0 | 183 d | −9,0% | +18% | 0,34 |
> | 4751 | BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR | **+77% · −34,1%** | +34% · −10,8% | +25% | −9,2% | 1,0 | 121 d | −11,9% | +20% | −0,00 |
> | 4752 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR | **+141% · −61,0%** | +41% · −13,5% | +27% | −9,0% | 1,2 | 159 d | −9,7% | +18% | 0,16 |
> | 4753 | VWAP ·ADX + MACD ·ADX + Onda ·VAI | **+82% · −34,2%** | +36% · −11,8% | +28% | −18,6% | 0,7 | 191 d | −8,7% | +19% | 0,40 |
> | 4754 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+148% · −49,2%** | +46% · −12,9% | +29% | −8,8% | 1,9 | 192 d | −11,8% | +18% | 0,17 |
> | 4755 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+103% · −39,8%** | +35% · −9,7% | +23% | −10,3% | 1,1 | 121 d | −12,3% | +13% | 0,15 |
> | 4756 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+118% · −41,3%** | +38% · −8,7% | +26% | −5,2% | 1,3 | 161 d | −9,8% | +12% | 0,01 |
> | 4757 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+154% · −42,9%** | +39% · −9,1% | +28% | −11,2% | 1,2 | 198 d | −9,2% | +16% | 0,21 |
> | 4758 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+182% · −63,5%** | +52% · −15,5% | +31% | −11,0% | 1,4 | 120 d | −14,8% | +22% | 0,32 |
> | 4759 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+84% · −46,3%** | +32% · −12,2% | +24% | −14,8% | 0,9 | 120 d | −12,3% | +15% | 0,28 |
> | 4760 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL + Onda ·VAI | **+152% · −62,0%** | +44% · −13,4% | +29% | −9,8% | 1,4 | 130 d | −11,0% | +20% | 0,20 |
> | 4761 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+189% · −54,5%** | +48% · −12,2% | +31% | −14,6% | 1,8 | 192 d | −11,2% | +21% | 0,38 |
> | 4762 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM | **+174% · −60,7%** | +55% · −18,0% | +31% | −5,6% | 1,9 | 191 d | −11,7% | +17% | 0,27 |
> | 4763 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+191% · −49,5%** | +54% · −12,5% | +33% | −11,5% | 1,8 | 197 d | −11,3% | +23% | 0,34 |
> | 4764 | 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+90% · −25,0%** | +37% · −7,4% | +27% | −10,2% | 0,9 | 209 d | −8,9% | +13% | 0,20 |
> | 4765 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + 1ª vela 80 ·PRI ⚠️ | **+211% · −50,8%** | +58% · −10,5% | +34% | −8,8% | 1,6 | 129 d | −12,5% | +18% | 0,25 |
> | 4766 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+154% · −54,7%** | +42% · −11,5% | +27% | −9,6% | 1,0 | 128 d | −10,9% | +19% | 0,21 |
> | 4767 | ADX ·ADX + BB explosão ·ADX + Pullback ·PUL + Onda ·VAI | **+150% · −55,9%** | +48% · −14,7% | +31% | −7,3% | 1,4 | 130 d | −11,3% | +24% | 0,14 |
> | 4768 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL | **+127% · −60,4%** | +44% · −17,1% | +28% | −8,2% | 1,5 | 159 d | −10,8% | +15% | 0,20 |
> | 4769 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+153% · −46,5%** | +48% · −12,1% | +31% | −11,5% | 0,8 | 130 d | −10,1% | +18% | 0,24 |
> | 4770 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Onda ·VAI | **+178% · −68,7%** | +53% · −16,4% | +32% | −11,0% | 1,5 | 128 d | −12,7% | +22% | 0,33 |

> [!example]- Combinações 4771 a 4800 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4771 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Onda ·VAI | **+153% · −66,8%** | +50% · −16,2% | +31% | −12,3% | 1,3 | 120 d | −15,8% | +26% | 0,32 |
> | 4772 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX + Onda ·VAI | **+158% · −52,4%** | +53% · −14,3% | +32% | −12,1% | 1,4 | 122 d | −13,8% | +24% | 0,26 |
> | 4773 | VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Onda ·VAI | **+111% · −56,7%** | +44% · −16,3% | +29% | −16,8% | 1,2 | 117 d | −17,6% | +23% | 0,36 |
> | 4774 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR | **+175% · −65,4%** | +49% · −15,4% | +29% | −7,7% | 1,5 | 159 d | −11,0% | +18% | 0,18 |
> | 4775 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + Pôr do sol ·POR | **+170% · −49,8%** | +50% · −11,2% | +30% | −6,2% | 1,5 | 159 d | −10,8% | +15% | 0,09 |
> | 4776 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+106% · −41,0%** | +35% · −10,2% | +23% | −10,5% | 1,0 | 121 d | −12,8% | +15% | 0,15 |
> | 4777 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+114% · −46,3%** | +40% · −13,1% | +28% | −16,2% | 0,8 | 115 d | −13,5% | +18% | 0,30 |
> | 4778 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+153% · −48,0%** | +46% · −12,9% | +26% | −7,9% | 1,7 | 130 d | −14,0% | +18% | 0,11 |
> | 4779 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+176% · −60,5%** | +46% · −13,0% | +30% | −11,5% | 1,1 | 128 d | −11,1% | +21% | 0,30 |
> | 4780 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+88% · −29,2%** | +37% · −9,3% | +25% | −7,2% | 1,1 | 148 d | −10,1% | +16% | −0,04 |
> | 4781 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+81% · −41,4%** | +32% · −10,9% | +24% | −13,6% | 0,8 | 121 d | −12,3% | +21% | 0,04 |
> | 4782 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Bollinger ·ADX + Onda ·VAI | **+185% · −61,3%** | +48% · −13,3% | +29% | −10,5% | 1,1 | 122 d | −12,6% | +21% | 0,32 |
> | 4783 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+143% · −46,3%** | +45% · −12,6% | +28% | −9,0% | 1,6 | 131 d | −12,6% | +21% | 0,08 |
> | 4784 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Quinta ·PR2 + Onda ·VAI ⚠️ | **+133% · −48,1%** | +38% · −9,6% | +26% | −8,2% | 1,6 | 140 d | −11,6% | +20% | −0,02 |
> | 4785 | VWAP ·ADX + Quinta ·PR2 ⚠️ | **+32% · −19,8%** | +22% · −9,1% | +19% | −14,9% | 0,5 | 210 d | −8,9% | +10% | −0,24 |
> | 4786 | VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+104% · −42,7%** | +35% · −10,9% | +23% | −12,1% | 1,1 | 121 d | −13,4% | +12% | 0,29 |
> | 4787 | Donchian ·ADX + BB explosão ·ADX + GPS médias ·ADX | **+149% · −58,0%** | +64% · −21,9% | +35% | −12,1% | 2,1 | 197 d | −20,8% | +14% | 0,57 |
> | 4788 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+148% · −64,9%** | +46% · −16,0% | +28% | −9,1% | 1,5 | 128 d | −13,3% | +18% | 0,18 |
> | 4789 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Onda ·VAI | **+83% · −42,3%** | +33% · −11,0% | +24% | −13,8% | 0,7 | 121 d | −12,4% | +20% | 0,10 |
> | 4790 | MACD ·ADX + Onda ·VAI | **+71% · −23,6%** | +41% · −9,8% | +31% | −14,5% | 0,6 | 255 d | −8,9% | +13% | 0,31 |
> | 4791 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+65% · −42,4%** | +27% · −10,6% | +21% | −11,1% | 0,9 | 128 d | −11,0% | +12% | 0,07 |
> | 4792 | BB explosão ·ADX + MACD ·ADX + Bollinger ·ADX | **+119% · −37,3%** | +45% · −12,6% | +28% | −11,0% | 1,2 | 121 d | −14,9% | +20% | 0,35 |
> | 4793 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX | **+196% · −65,4%** | +60% · −19,6% | +35% | −7,8% | 1,8 | 191 d | −12,4% | +23% | 0,38 |
> | 4794 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Quinta ·PR2 ⚠️ | **+65% · −36,6%** | +27% · −8,6% | +20% | −9,2% | 0,9 | 159 d | −9,9% | +13% | −0,01 |
> | 4795 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+151% · −47,5%** | +46% · −11,5% | +29% | −4,8% | 1,1 | 130 d | −11,0% | +20% | 0,06 |
> | 4796 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 ⚠️ | **+119% · −57,0%** | +42% · −14,0% | +27% | −10,9% | 1,6 | 130 d | −13,7% | +12% | 0,16 |
> | 4797 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+150% · −64,2%** | +46% · −15,6% | +28% | −9,1% | 1,5 | 128 d | −13,4% | +19% | 0,17 |
> | 4798 | Pôr do sol ·POR + 1ª vela 80 ·PRI ⚠️ | **+56% · −15,1%** | +34% · −6,5% | +24% | −5,0% | 0,8 | 275 d | −9,2% | +13% | 0,09 |
> | 4799 | BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX + Onda ·VAI ⚠️ | **+128% · −37,5%** | +39% · −8,9% | +25% | −8,1% | 1,2 | 133 d | −11,1% | +16% | 0,03 |
> | 4800 | MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+116% · −29,5%** | +44% · −9,1% | +32% | −13,5% | 1,0 | 212 d | −9,4% | +12% | 0,28 |

> [!example]- Combinações 4801 a 4830 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4801 | BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+83% · −35,6%** | +31% · −8,0% | +23% | −8,9% | 1,0 | 162 d | −10,0% | +17% | 0,00 |
> | 4802 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 ⚠️ | **+94% · −45,3%** | +43% · −16,1% | +27% | −9,3% | 1,7 | 130 d | −15,5% | +14% | 0,06 |
> | 4803 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+174% · −55,5%** | +46% · −10,2% | +30% | −10,3% | 1,6 | 197 d | −11,6% | +25% | 0,30 |
> | 4804 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+166% · −58,8%** | +47% · −13,2% | +30% | −11,8% | 0,9 | 122 d | −12,9% | +21% | 0,26 |
> | 4805 | VWAP ·ADX + MACD ·ADX | **+53% · −26,9%** | +33% · −13,5% | +26% | −21,5% | 0,8 | 213 d | −9,4% | +15% | 0,51 |
> | 4806 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Pôr do sol ·POR | **+86% · −42,2%** | +32% · −10,7% | +24% | −13,7% | 0,9 | 128 d | −11,7% | +18% | 0,15 |
> | 4807 | ADX ·ADX + Donchian ·ADX | **+148% · −41,5%** | +79% · −21,2% | +40% | −7,7% | 1,8 | 158 d | −15,6% | +21% | 0,20 |
> | 4808 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Onda ·VAI | **+151% · −59,2%** | +50% · −16,4% | +32% | −9,5% | 0,9 | 122 d | −13,2% | +20% | 0,24 |
> | 4809 | VWAP ·ADX + BB explosão ·ADX + Bollinger ·ADX + Onda ·VAI | **+125% · −47,1%** | +41% · −12,5% | +26% | −14,8% | 0,9 | 121 d | −14,7% | +21% | 0,35 |
> | 4810 | Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+90% · −25,4%** | +37% · −7,2% | +27% | −8,3% | 0,8 | 367 d | −9,3% | +11% | 0,08 |
> | 4811 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR | **+120% · −53,0%** | +42% · −13,3% | +26% | −11,2% | 1,5 | 130 d | −14,1% | +13% | 0,18 |
> | 4812 | Donchian ·ADX + Onda ·VAI | **+116% · −30,1%** | +62% · −14,2% | +36% | −11,0% | 1,8 | 185 d | −13,4% | +29% | 0,30 |
> | 4813 | BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX | **+139% · −49,3%** | +55% · −18,3% | +30% | −10,9% | 1,7 | 130 d | −18,9% | +16% | 0,42 |
> | 4814 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Bollinger ·ADX | **+156% · −60,1%** | +49% · −17,1% | +28% | −9,1% | 1,2 | 128 d | −12,9% | +18% | 0,39 |
> | 4815 | ADX ·ADX + VWAP ·ADX + 1ª vela 80 ·PRI ⚠️ | **+122% · −38,5%** | +49% · −12,9% | +31% | −10,0% | 0,9 | 131 d | −10,9% | +15% | 0,25 |
> | 4816 | BB explosão ·ADX + 1ª vela 80 ·PRI + Quinta ·PR2 + Onda ·VAI ⚠️ | **+118% · −36,9%** | +38% · −9,0% | +27% | −8,9% | 1,0 | 160 d | −10,6% | +14% | −0,06 |
> | 4817 | Quinta ·PR2 + Onda ·VAI ⚠️ | **+48% · −20,0%** | +30% · −8,2% | +24% | −8,6% | 0,5 | 263 d | −9,3% | +12% | −0,38 |
> | 4818 | VWAP ·ADX + BB explosão ·ADX + MACD ·ADX | **+75% · −45,4%** | +36% · −16,0% | +26% | −18,6% | 0,8 | 120 d | −16,0% | +16% | 0,44 |
> | 4819 | ADX ·ADX + Rompe 200 ·ROM | **+75% · −29,3%** | +45% · −14,4% | +28% | −9,1% | 0,9 | 161 d | −10,3% | +20% | −0,02 |
> | 4820 | BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·VAI | **+85% · −36,8%** | +31% · −7,9% | +23% | −8,8% | 0,9 | 171 d | −10,1% | +17% | 0,02 |
> | 4821 | ADX ·ADX + VWAP ·ADX + GPS médias ·ADX | **+134% · −48,2%** | +56% · −17,2% | +32% | −11,1% | 1,5 | 130 d | −14,7% | +22% | 0,30 |
> | 4822 | VWAP ·ADX + Donchian ·ADX | **+93% · −35,4%** | +53% · −17,2% | +31% | −17,0% | 1,8 | 159 d | −15,7% | +14% | 0,42 |
> | 4823 | ADX ·ADX + VWAP ·ADX + Rompe 200 ·ROM | **+88% · −35,3%** | +39% · −11,3% | +26% | −9,8% | 0,9 | 161 d | −10,3% | +14% | 0,12 |
> | 4824 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 ⚠️ | **+100% · −52,5%** | +44% · −19,2% | +27% | −7,3% | 1,1 | 128 d | −12,7% | +18% | 0,09 |
> | 4825 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+132% · −59,8%** | +40% · −12,7% | +27% | −9,6% | 0,9 | 130 d | −11,5% | +19% | 0,10 |
> | 4826 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+135% · −54,9%** | +44% · −15,0% | +29% | −7,8% | 1,3 | 196 d | −10,7% | +21% | 0,18 |
> | 4827 | VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM | **+56% · −48,4%** | +30% · −15,2% | +22% | −15,2% | 0,7 | 121 d | −15,2% | +8% | 0,27 |
> | 4828 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + MACD ·ADX + Onda ·VAI | **+150% · −64,6%** | +45% · −14,7% | +30% | −12,5% | 0,9 | 128 d | −12,3% | +21% | 0,30 |
> | 4829 | VWAP ·ADX + BB explosão ·ADX + Bollinger ·ADX | **+94% · −42,5%** | +40% · −15,0% | +25% | −14,5% | 0,9 | 121 d | −17,4% | +12% | 0,44 |
> | 4830 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM | **+107% · −57,4%** | +40% · −16,4% | +26% | −9,9% | 1,0 | 129 d | −12,2% | +15% | 0,23 |

> [!example]- Combinações 4831 a 4860 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4831 | BB explosão ·ADX + 1ª vela 80 ·PRI + Bollinger ·ADX + Onda ·VAI ⚠️ | **+171% · −40,8%** | +47% · −10,4% | +29% | −10,2% | 1,2 | 137 d | −12,0% | +14% | 0,23 |
> | 4832 | BB explosão ·ADX + Pullback ·PUL + Onda ·VAI | **+91% · −36,5%** | +39% · −12,2% | +28% | −9,4% | 1,4 | 137 d | −12,7% | +23% | 0,13 |
> | 4833 | BB explosão ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+56% · −30,0%** | +28% · −9,4% | +20% | −6,1% | 1,0 | 150 d | −11,1% | +12% | −0,05 |
> | 4834 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Onda ·VAI | **+134% · −59,0%** | +41% · −12,4% | +27% | −9,7% | 0,9 | 130 d | −11,6% | +18% | 0,12 |
> | 4835 | ADX ·ADX + VWAP ·ADX + MACD ·ADX | **+111% · −44,4%** | +46% · −14,8% | +30% | −11,5% | 0,9 | 161 d | −10,7% | +14% | 0,30 |
> | 4836 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+147% · −49,8%** | +46% · −13,2% | +29% | −9,9% | 1,7 | 197 d | −12,9% | +17% | 0,33 |
> | 4837 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + GPS médias ·ADX | **+137% · −65,8%** | +52% · −20,7% | +31% | −11,6% | 1,4 | 128 d | −17,0% | +18% | 0,39 |
> | 4838 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + MACD ·ADX | **+128% · −63,3%** | +45% · −18,7% | +29% | −11,7% | 1,1 | 129 d | −12,6% | +20% | 0,35 |
> | 4839 | BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX + Onda ·VAI | **+130% · −38,5%** | +39% · −9,2% | +25% | −8,0% | 1,1 | 144 d | −11,6% | +16% | 0,05 |
> | 4840 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+181% · −58,2%** | +48% · −12,1% | +31% | −13,9% | 1,6 | 197 d | −11,9% | +25% | 0,33 |
> | 4841 | BB explosão ·ADX + Pôr do sol ·POR + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+120% · −37,5%** | +38% · −9,3% | +27% | −9,1% | 1,0 | 163 d | −10,7% | +13% | 0,05 |
> | 4842 | VWAP ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+92% · −34,1%** | +39% · −11,8% | +28% | −17,4% | 0,7 | 187 d | −10,1% | +17% | 0,33 |
> | 4843 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+143% · −48,9%** | +46% · −11,4% | +29% | −8,7% | 1,6 | 197 d | −12,6% | +23% | 0,07 |
> | 4844 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+131% · −58,9%** | +41% · −12,6% | +27% | −11,1% | 0,9 | 130 d | −12,0% | +21% | 0,22 |
> | 4845 | ADX ·ADX + MACD ·ADX | **+100% · −35,8%** | +56% · −17,7% | +35% | −11,8% | 1,0 | 161 d | −11,1% | +19% | 0,17 |
> | 4846 | BB explosão ·ADX + Quinta ·PR2 + Bollinger ·ADX ⚠️ | **+92% · −32,1%** | +38% · −10,2% | +23% | −5,3% | 1,2 | 133 d | −12,7% | +14% | 0,05 |
> | 4847 | BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX + Onda ·VAI | **+129% · −40,2%** | +40% · −9,8% | +25% | −9,8% | 1,2 | 137 d | −12,2% | +17% | 0,19 |
> | 4848 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI ⚠️ | **+130% · −47,5%** | +53% · −17,7% | +32% | −12,4% | 1,5 | 131 d | −17,0% | +21% | 0,31 |
> | 4849 | BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM | **+94% · −48,6%** | +43% · −17,8% | +27% | −10,8% | 1,6 | 134 d | −16,9% | +12% | 0,34 |
> | 4850 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Onda ·VAI | **+145% · −47,7%** | +46% · −10,7% | +29% | −8,6% | 1,7 | 197 d | −13,0% | +25% | 0,11 |
> | 4851 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR | **+96% · −44,1%** | +43% · −15,4% | +27% | −9,3% | 1,6 | 134 d | −16,1% | +16% | 0,02 |
> | 4852 | ADX ·ADX + BB explosão ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+129% · −53,8%** | +44% · −14,0% | +28% | −6,7% | 0,9 | 130 d | −12,2% | +19% | 0,03 |
> | 4853 | VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI ⚠️ | **+87% · −44,0%** | +39% · −16,1% | +27% | −16,8% | 0,8 | 124 d | −13,9% | +17% | 0,31 |
> | 4854 | BB explosão ·ADX + Quinta ·PR2 + Rompe 200 ·ROM ⚠️ | **+54% · −32,0%** | +27% · −10,1% | +20% | −6,3% | 1,1 | 249 d | −10,4% | +10% | −0,00 |
> | 4855 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+184% · −54,0%** | +54% · −10,9% | +33% | −10,6% | 1,6 | 197 d | −12,4% | +26% | 0,28 |
> | 4856 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 ⚠️ | **+108% · −58,5%** | +40% · −16,4% | +26% | −8,2% | 1,0 | 159 d | −11,6% | +16% | 0,12 |
> | 4857 | ADX ·ADX + VWAP ·ADX + Onda ·VAI | **+107% · −42,6%** | +46% · −13,6% | +30% | −12,5% | 0,7 | 131 d | −11,7% | +15% | 0,22 |
> | 4858 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI ⚠️ | **+143% · −57,0%** | +47% · −15,4% | +30% | −10,7% | 0,9 | 128 d | −13,4% | +20% | 0,28 |
> | 4859 | ADX ·ADX + Pullback ·PUL | **+93% · −31,2%** | +52% · −14,8% | +32% | −8,7% | 1,5 | 161 d | −13,2% | +16% | 0,01 |
> | 4860 | Donchian ·ADX + BB explosão ·ADX + Pôr do sol ·POR | **+116% · −43,4%** | +48% · −14,9% | +28% | −6,6% | 1,7 | 197 d | −15,2% | +14% | 0,08 |

> [!example]- Combinações 4861 a 4890 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4861 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI ⚠️ | **+157% · −52,9%** | +50% · −15,2% | +31% | −14,2% | 1,6 | 197 d | −13,2% | +17% | 0,36 |
> | 4862 | BB explosão ·ADX + GPS médias ·ADX + Bollinger ·ADX + Onda ·VAI | **+170% · −55,0%** | +52% · −15,7% | +30% | −11,4% | 1,5 | 133 d | −16,2% | +21% | 0,31 |
> | 4863 | VWAP ·ADX + BB explosão ·ADX + Pullback ·PUL | **+71% · −46,5%** | +34% · −15,4% | +25% | −13,3% | 1,4 | 159 d | −13,5% | +8% | 0,20 |
> | 4864 | Donchian ·ADX + BB explosão ·ADX + Quinta ·PR2 ⚠️ | **+114% · −45,2%** | +47% · −15,9% | +28% | −6,6% | 1,7 | 197 d | −14,6% | +12% | 0,09 |
> | 4865 | ADX ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI ⚠️ | **+137% · −50,7%** | +55% · −17,9% | +33% | −7,0% | 1,0 | 127 d | −15,1% | +20% | 0,20 |
> | 4866 | BB explosão ·ADX + GPS médias ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+120% · −49,1%** | +43% · −13,1% | +28% | −10,5% | 1,5 | 140 d | −14,8% | +21% | 0,04 |
> | 4867 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX | **+155% · −49,4%** | +60% · −17,0% | +34% | −8,8% | 1,4 | 159 d | −13,9% | +15% | 0,28 |
> | 4868 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR | **+110% · −57,7%** | +40% · −15,9% | +26% | −8,1% | 1,0 | 159 d | −11,7% | +16% | 0,11 |
> | 4869 | VWAP ·ADX + Pôr do sol ·POR | **+33% · −21,5%** | +23% · −9,2% | +19% | −15,2% | 0,3 | 210 d | −10,3% | +8% | −0,06 |
> | 4870 | Donchian ·ADX + BB explosão ·ADX + 1ª vela 80 ·PRI ⚠️ | **+155% · −47,6%** | +58% · −14,8% | +34% | −9,9% | 1,6 | 197 d | −13,9% | +19% | 0,30 |
> | 4871 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI ⚠️ | **+111% · −34,6%** | +44% · −11,9% | +30% | −13,3% | 1,1 | 233 d | −10,8% | +17% | 0,23 |
> | 4872 | ADX ·ADX + VWAP ·ADX + Quinta ·PR2 ⚠️ | **+87% · −36,8%** | +39% · −11,3% | +26% | −7,3% | 0,8 | 161 d | −11,2% | +11% | 0,02 |
> | 4873 | ADX ·ADX + VWAP ·ADX + Pullback ·PUL | **+106% · −40,4%** | +44% · −12,8% | +29% | −7,8% | 1,3 | 161 d | −12,6% | +12% | 0,11 |
> | 4874 | VWAP ·ADX + BB explosão ·ADX + Quinta ·PR2 ⚠️ | **+55% · −41,9%** | +29% · −13,5% | +22% | −12,8% | 0,8 | 128 d | −13,8% | +10% | 0,02 |
> | 4875 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX + Onda ·VAI | **+186% · −63,7%** | +60% · −18,3% | +35% | −8,1% | 1,6 | 191 d | −13,5% | +27% | 0,30 |
> | 4876 | BB explosão ·ADX + GPS médias ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+156% · −52,6%** | +51% · −14,9% | +32% | −12,2% | 1,4 | 133 d | −16,0% | +19% | 0,27 |
> | 4877 | BB explosão ·ADX + GPS médias ·ADX + Pôr do sol ·POR + Onda ·VAI | **+122% · −49,6%** | +43% · −13,3% | +28% | −10,5% | 1,4 | 140 d | −15,0% | +21% | 0,07 |
> | 4878 | BB explosão ·ADX + Pôr do sol ·POR + Bollinger ·ADX | **+94% · −33,5%** | +38% · −10,8% | +23% | −5,3% | 1,1 | 133 d | −13,3% | +16% | −0,00 |
> | 4879 | BB explosão ·ADX + GPS médias ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+120% · −51,1%** | +43% · −14,0% | +28% | −12,2% | 1,4 | 140 d | −15,5% | +22% | 0,27 |
> | 4880 | BB explosão ·ADX + GPS médias ·ADX | **+85% · −46,6%** | +53% · −25,3% | +31% | −14,3% | 1,5 | 134 d | −24,2% | +13% | 0,60 |
> | 4881 | ADX ·ADX + 1ª vela 80 ·PRI ⚠️ | **+109% · −32,0%** | +60% · −15,9% | +36% | −8,8% | 0,8 | 130 d | −12,9% | +20% | 0,15 |
> | 4882 | ADX ·ADX + Donchian ·ADX + BB explosão ·ADX | **+162% · −62,3%** | +66% · −24,5% | +36% | −8,2% | 1,6 | 191 d | −15,4% | +19% | 0,41 |
> | 4883 | VWAP ·ADX + Bollinger ·ADX | **+67% · −25,6%** | +39% · −12,8% | +24% | −17,4% | 1,1 | 210 d | −11,2% | +13% | 0,50 |
> | 4884 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR + Onda ·VAI | **+131% · −52,8%** | +44% · −13,5% | +28% | −6,8% | 0,9 | 138 d | −12,4% | +19% | 0,03 |
> | 4885 | BB explosão ·ADX + Rompe 200 ·ROM + Bollinger ·ADX | **+94% · −35,4%** | +38% · −11,7% | +23% | −7,5% | 1,2 | 133 d | −14,1% | +12% | 0,20 |
> | 4886 | ADX ·ADX + Quinta ·PR2 ⚠️ | **+74% · −27,5%** | +44% · −13,8% | +28% | −8,8% | 0,8 | 161 d | −11,6% | +14% | 0,09 |
> | 4887 | BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM ⚠️ | **+87% · −36,1%** | +37% · −12,6% | +25% | −9,0% | 1,0 | 273 d | −11,0% | +17% | 0,14 |
> | 4888 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+141% · −57,7%** | +42% · −12,1% | +28% | −13,2% | 1,5 | 197 d | −13,1% | +20% | 0,32 |
> | 4889 | BB explosão ·ADX + MACD ·ADX + Quinta ·PR2 ⚠️ | **+76% · −36,2%** | +34% · −11,7% | +25% | −9,1% | 1,1 | 220 d | −11,3% | +18% | 0,00 |
> | 4890 | ADX ·ADX + VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX | **+160% · −67,4%** | +56% · −20,7% | +32% | −9,9% | 1,5 | 191 d | −14,2% | +17% | 0,39 |

> [!example]- Combinações 4891 a 4920 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4891 | ADX ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+129% · −52,7%** | +44% · −13,6% | +28% | −8,1% | 0,9 | 138 d | −12,9% | +20% | 0,16 |
> | 4892 | Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+142% · −53,5%** | +47% · −12,0% | +29% | −10,4% | 1,5 | 197 d | −13,6% | +22% | 0,30 |
> | 4893 | BB explosão ·ADX + MACD ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+142% · −43,4%** | +44% · −10,6% | +31% | −12,8% | 1,0 | 210 d | −11,4% | +15% | 0,25 |
> | 4894 | ADX ·ADX + VWAP ·ADX + Pôr do sol ·POR | **+89% · −38,7%** | +39% · −11,4% | +25% | −7,5% | 0,7 | 161 d | −11,9% | +10% | 0,03 |
> | 4895 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Onda ·VAI | **+159% · −59,9%** | +47% · −12,5% | +30% | −14,7% | 1,5 | 197 d | −13,6% | +25% | 0,42 |
> | 4896 | BB explosão ·ADX + GPS médias ·ADX + Onda ·VAI | **+110% · −50,9%** | +50% · −18,9% | +31% | −14,2% | 1,3 | 140 d | −20,1% | +22% | 0,34 |
> | 4897 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM | **+118% · −61,3%** | +42% · −15,1% | +27% | −12,5% | 1,5 | 197 d | −14,7% | +11% | 0,36 |
> | 4898 | BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+105% · −41,9%** | +37% · −9,6% | +27% | −11,7% | 0,9 | 233 d | −11,2% | +18% | 0,21 |
> | 4899 | VWAP ·ADX + BB explosão ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+81% · −44,1%** | +33% · −12,1% | +24% | −15,4% | 0,8 | 137 d | −13,0% | +20% | 0,26 |
> | 4900 | ADX ·ADX + BB explosão ·ADX + Pôr do sol ·POR | **+103% · −51,5%** | +45% · −18,6% | +27% | −6,8% | 1,0 | 161 d | −12,8% | +20% | 0,00 |
> | 4901 | BB explosão ·ADX + 1ª vela 80 ·PRI + Rompe 200 ·ROM + Onda ·VAI ⚠️ | **+118% · −41,3%** | +39% · −9,9% | +27% | −10,8% | 1,0 | 284 d | −11,3% | +15% | 0,18 |
> | 4902 | VWAP ·ADX + 1ª vela 80 ·PRI ⚠️ | **+62% · −27,1%** | +37% · −13,7% | +27% | −18,8% | 0,6 | 181 d | −11,6% | +16% | 0,36 |
> | 4903 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX + Onda ·VAI | **+164% · −55,7%** | +52% · −13,4% | +33% | −11,5% | 1,5 | 197 d | −14,3% | +28% | 0,40 |
> | 4904 | Donchian ·ADX + BB explosão ·ADX + Rompe 200 ·ROM | **+114% · −50,2%** | +48% · −16,3% | +28% | −8,4% | 1,5 | 197 d | −16,0% | +10% | 0,36 |
> | 4905 | ADX ·ADX + Onda ·VAI | **+97% · −33,6%** | +56% · −16,1% | +35% | −12,1% | 0,6 | 131 d | −13,5% | +18% | 0,06 |
> | 4906 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX + Onda ·VAI | **+121% · −61,5%** | +46% · −17,5% | +29% | −12,5% | 0,8 | 130 d | −14,8% | +20% | 0,29 |
> | 4907 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + MACD ·ADX | **+137% · −56,7%** | +47% · −16,0% | +30% | −15,6% | 1,5 | 197 d | −15,4% | +16% | 0,49 |
> | 4908 | Donchian ·ADX + BB explosão ·ADX + MACD ·ADX | **+136% · −50,4%** | +55% · −18,4% | +33% | −12,1% | 1,5 | 197 d | −16,8% | +18% | 0,51 |
> | 4909 | ADX ·ADX + Pôr do sol ·POR | **+76% · −31,0%** | +45% · −13,7% | +27% | −8,2% | 0,6 | 161 d | −12,6% | +12% | −0,07 |
> | 4910 | BB explosão ·ADX + Bollinger ·ADX + Onda ·VAI | **+118% · −40,1%** | +46% · −13,6% | +28% | −11,0% | 1,0 | 144 d | −15,9% | +15% | 0,24 |
> | 4911 | BB explosão ·ADX + Bollinger ·ADX | **+83% · −35,2%** | +47% · −18,2% | +26% | −8,6% | 1,0 | 137 d | −20,3% | +13% | 0,34 |
> | 4912 | VWAP ·ADX + Onda ·VAI | **+52% · −27,6%** | +34% · −14,1% | +26% | −21,5% | 0,3 | 222 d | −11,6% | +15% | 0,36 |
> | 4913 | VWAP ·ADX + BB explosão ·ADX + Pôr do sol ·POR | **+57% · −38,1%** | +29% · −12,8% | +22% | −13,0% | 0,7 | 159 d | −14,4% | +12% | 0,05 |
> | 4914 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX + Onda ·VAI | **+132% · −57,9%** | +48% · −14,6% | +30% | −15,2% | 1,3 | 197 d | −16,1% | +22% | 0,41 |
> | 4915 | ADX ·ADX + BB explosão ·ADX + Onda ·VAI | **+118% · −55,7%** | +52% · −20,5% | +32% | −9,3% | 0,7 | 138 d | −16,9% | +19% | 0,22 |
> | 4916 | VWAP ·ADX + Donchian ·ADX + BB explosão ·ADX | **+108% · −58,5%** | +49% · −19,9% | +30% | −15,3% | 1,3 | 197 d | −19,1% | +10% | 0,53 |
> | 4917 | Donchian ·ADX + BB explosão ·ADX | **+104% · −48,0%** | +61% · −25,2% | +34% | −10,5% | 1,4 | 202 d | −23,0% | +10% | 0,67 |
> | 4918 | BB explosão ·ADX + Pôr do sol ·POR | **+47% · −29,2%** | +31% · −14,3% | +22% | −6,2% | 0,7 | 155 d | −16,0% | +12% | −0,29 |
> | 4919 | ADX ·ADX + VWAP ·ADX + BB explosão ·ADX | **+98% · −60,2%** | +46% · −23,5% | +29% | −11,3% | 0,9 | 159 d | −16,0% | +16% | 0,36 |
> | 4920 | BB explosão ·ADX + MACD ·ADX + Rompe 200 ·ROM | **+76% · −38,0%** | +35% · −12,6% | +25% | −10,7% | 1,0 | 233 d | −12,8% | +16% | 0,19 |

> [!example]- Combinações 4921 a 4943 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4921 | ADX ·ADX + BB explosão ·ADX + Rompe 200 ·ROM | **+101% · −51,5%** | +45% · −18,7% | +27% | −7,3% | 1,0 | 197 d | −13,5% | +16% | 0,17 |
> | 4922 | Donchian ·ADX + BB explosão ·ADX + Onda ·VAI | **+132% · −53,8%** | +55% · −16,6% | +33% | −11,8% | 1,3 | 202 d | −17,8% | +26% | 0,40 |
> | 4923 | ADX ·ADX + BB explosão ·ADX + MACD ·ADX | **+124% · −57,9%** | +52% · −22,1% | +32% | −9,4% | 1,0 | 197 d | −14,0% | +24% | 0,29 |
> | 4924 | BB explosão ·ADX + Pôr do sol ·POR + Onda ·VAI | **+76% · −36,6%** | +35% · −11,3% | +25% | −9,7% | 0,7 | 186 d | −13,2% | +15% | −0,06 |
> | 4925 | ADX ·ADX + VWAP ·ADX | **+78% · −39,9%** | +48% · −20,3% | +30% | −12,3% | 0,6 | 161 d | −16,9% | +8% | 0,22 |
> | 4926 | BB explosão ·ADX + Quinta ·PR2 + Onda ·VAI ⚠️ | **+74% · −35,5%** | +34% · −11,1% | +25% | −9,8% | 0,8 | 258 d | −13,1% | +15% | −0,12 |
> | 4927 | 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+80% · −24,2%** | +45% · −11,3% | +32% | −13,8% | 0,6 | 367 d | −12,8% | +8% | 0,26 |
> | 4928 | ADX ·ADX | **+65% · −30,8%** | +65% · −30,8% | +38% | −15,4% | 0,4 | 161 d | −23,5% | +12% | — |
> | 4929 | BB explosão ·ADX + Rompe 200 ·ROM + Onda ·VAI | **+74% · −40,4%** | +35% · −12,4% | +25% | −12,0% | 0,7 | 284 d | −13,9% | +16% | 0,19 |
> | 4930 | BB explosão ·ADX + MACD ·ADX + Onda ·VAI | **+96% · −42,4%** | +42% · −12,8% | +30% | −13,9% | 0,7 | 234 d | −14,6% | +16% | 0,29 |
> | 4931 | BB explosão ·ADX + 1ª vela 80 ·PRI + Onda ·VAI ⚠️ | **+108% · −42,0%** | +44% · −13,3% | +30% | −12,7% | 0,8 | 287 d | −14,7% | +12% | 0,19 |
> | 4932 | BB explosão ·ADX + Quinta ·PR2 ⚠️ | **+46% · −31,5%** | +30% · −15,7% | +22% | −6,4% | 0,8 | 262 d | −15,1% | +10% | −0,19 |
> | 4933 | BB explosão ·ADX + 1ª vela 80 ·PRI ⚠️ | **+77% · −33,0%** | +45% · −16,0% | +30% | −11,8% | 0,8 | 285 d | −15,9% | +15% | 0,09 |
> | 4934 | VWAP ·ADX | **+25% · −19,7%** | +25% · −19,7% | +21% | −30,3% | 0,2 | 210 d | −16,3% | +4% | — |
> | 4935 | ADX ·ADX + BB explosão ·ADX | **+91% · −54,5%** | +56% · −30,5% | +32% | −10,8% | 0,8 | 233 d | −19,7% | +19% | 0,36 |
> | 4936 | VWAP ·ADX + BB explosão ·ADX + Onda ·VAI | **+73% · −44,6%** | +36% · −15,0% | +26% | −18,6% | 0,6 | 233 d | −17,0% | +21% | 0,36 |
> | 4937 | 1ª vela 80 ·PRI ⚠️ | **+47% · −13,6%** | +47% · −13,6% | +32% | −12,8% | 0,6 | 298 d | −16,0% | +9% | — |
> | 4938 | BB explosão ·ADX + Rompe 200 ·ROM | **+47% · −34,3%** | +31% · −17,0% | +22% | −9,8% | 0,7 | 267 d | −17,2% | +7% | 0,17 |
> | 4939 | BB explosão ·ADX + MACD ·ADX | **+67% · −37,8%** | +41% · −19,5% | +29% | −14,7% | 0,7 | 267 d | −18,4% | +19% | 0,32 |
> | 4940 | VWAP ·ADX + BB explosão ·ADX | **+48% · −44,1%** | +33% · −21,8% | +24% | −19,9% | 0,6 | 233 d | −21,8% | +7% | 0,49 |
> | 4941 | BB explosão ·ADX + Onda ·VAI | **+66% · −41,1%** | +41% · −19,7% | +29% | −14,9% | 0,5 | 302 d | −20,2% | +13% | 0,22 |
> | 4942 | Onda ·VAI | **+41% · −19,8%** | +41% · −19,8% | +30% | −18,7% | 0,2 | 422 d | −18,8% | +5% | — |
> | 4943 | BB explosão ·ADX | **+39% · −33,3%** | +39% · −33,3% | +26% | −14,0% | 0,5 | 287 d | −31,4% | +3% | — |

*⚠️ = tem setup com dia da semana escolhido pelo autor do vídeo (fora da recomendação). Ao ano e pior queda com 1 contrato por R\$ 10 mil (capital dividido). Correlação = média entre os setups da combinação. **Retorno ÷ queda, dias no vermelho e pior 60 dias** são medidos no TREINO (até 2023) e **sem o CDI**: é com eles que a recomendada é escolhida, e o CDI pingando todo dia preencheria as quedas pequenas e esconderia a diferença entre as combinações. Retorno ÷ queda de 2 = rendeu por ano o dobro da pior queda. **1% dividido** = 1% de risco repartido entre os setups (0,5% cada com 2, 0,33% com 3, 0,25% com 4): o mesmo risco total em todas as linhas, a comparação mais justa entre combinações. **1% por setup** = cada setup arrisca 1% do capital total em cada operação (veja abaixo) — com mais setups, mais risco aberto ao mesmo tempo, por isso as combinações grandes rendem e caem mais.*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

![Correlação mensal entre os setups](setups/img/carteira_correlacao.png)

*Correlação do resultado mensal.*

**Famílias (a sigla ·XXX ao lado de cada setup)**

| Sigla | Setups da família | Correlação média dentro dela |
|---|---|---|
| **·ADX** ⚠️ | ADX, VWAP, Donchian, BB explosão, GPS médias, IFR, MACD, Bollinger, Tendência | 0,39 |
| **·PRI** | 1ª vela 80 | — |
| **·PR2** | Quinta | — |
| **·PUL** | Pullback | — |
| **·POR** | Pôr do sol | — |
| **·ROM** | Rompe 200 | — |
| **·VAI** | Onda | — |

*Dois setups caem na mesma família quando a correlação mensal entre eles passa de 0,45 (ligação por vizinhança: se A anda com B e B anda com C, os três ficam juntos). A sigla vem do setup com mais operações da família. **⚠️ família com mais de um setup = uma aposta só, não várias:** operar dois deles com 1% cada arrisca perto de 2% na mesma ideia, e eles tendem a entrar no mesmo lado nos mesmos dias. As famílias são recalculadas a cada geração — se a correlação mudar, os grupos mudam.*

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

*Com 1 contrato por R\$ 10 mil (capital dividido). Todos = os 15 setups juntos · Recomendada = IFR + Pullback + Bollinger · Rec. 1% = a recomendada arriscando 1% por operação.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** | **Média/ano** | **R\$ 10.000 viraram** |
|---|---|---|---|---|---|---|---|---|---|
| **⭐ Rec. 1%** | +3,6% | +258,9% | +97,7% | +105,5% | +279,5% | +100,6% | **+11396,4%** | +160,7% | R\$ 1.149.641 |
| **⭐ Recomendada** | +2,6% | +38,6% | +23,8% | +21,5% | +38,7% | +31,0% | **+288,8%** | +31,5% | R\$ 38.885 |
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
> | nov/2021 | +1,8% | +1,2% | −1,1% | +0,6% | −3,4% |
> | dez/2021 | +1,8% | +1,4% | −1,0% | +0,7% | +2,9% |
> | jan/2022 | +27,2% | +4,6% | +2,4% | +0,7% | +7,0% |
> | fev/2022 | −3,3% | +0,2% | −2,3% | +0,8% | +0,9% |
> | mar/2022 | +24,7% | +4,6% | +5,8% | +0,9% | +6,1% |
> | abr/2022 | +10,5% | +2,0% | +3,0% | +0,8% | −10,1% |
> | mai/2022 | +2,8% | +1,5% | +0,5% | +1,0% | +3,2% |
> | jun/2022 | +9,8% | +2,7% | −0,2% | +1,0% | −11,5% |
> | jul/2022 | +2,6% | +1,4% | −4,0% | +1,0% | +4,7% |
> | ago/2022 | +39,6% | +6,6% | +12,3% | +1,2% | +6,2% |
> | set/2022 | −3,7% | +0,6% | +2,3% | +1,1% | +0,5% |
> | out/2022 | +17,3% | +4,1% | +5,7% | +1,0% | +5,5% |
> | nov/2022 | +10,1% | +3,6% | +3,8% | +1,0% | −3,1% |
> | dez/2022 | +5,2% | +1,5% | +5,9% | +1,1% | −2,4% |
> | jan/2023 | +17,6% | +3,7% | +4,7% | +1,1% | +3,4% |
> | fev/2023 | −0,1% | +0,5% | +6,1% | +0,9% | −7,5% |
> | mar/2023 | −0,2% | +1,2% | +0,9% | +1,2% | −2,9% |
> | abr/2023 | −1,7% | +0,6% | +1,8% | +0,9% | +2,5% |
> | mai/2023 | +4,3% | +2,0% | +4,1% | +1,1% | +3,7% |
> | jun/2023 | +12,1% | +2,3% | +0,1% | +1,1% | +9,0% |
> | jul/2023 | +11,8% | +2,7% | +1,3% | +1,1% | +3,3% |
> | ago/2023 | +6,8% | +2,2% | +1,5% | +1,1% | −5,1% |
> | set/2023 | +8,1% | +1,6% | −1,2% | +1,0% | +0,7% |
> | out/2023 | +9,2% | +2,4% | +1,4% | +1,0% | −2,9% |
> | nov/2023 | +8,7% | +2,1% | +3,8% | +0,9% | +12,5% |
> | dez/2023 | −4,1% | +0,3% | −0,3% | +0,9% | +5,4% |
> | jan/2024 | +6,5% | +1,4% | +3,3% | +1,0% | −4,8% |
> | fev/2024 | +10,3% | +2,3% | +5,3% | +0,8% | +1,0% |
> | mar/2024 | +1,9% | +1,2% | +0,2% | +0,8% | −0,7% |
> | abr/2024 | +11,3% | +2,6% | −0,2% | +0,9% | −1,7% |
> | mai/2024 | −5,6% | −0,3% | −2,1% | +0,8% | −3,0% |
> | jun/2024 | +6,4% | +1,7% | +0,4% | +0,8% | +1,5% |
> | jul/2024 | +5,9% | +1,7% | −0,7% | +0,9% | +3,0% |
> | ago/2024 | +9,6% | +1,8% | +4,0% | +0,9% | +6,5% |
> | set/2024 | +17,3% | +3,4% | +1,7% | +0,8% | −3,1% |
> | out/2024 | +0,9% | +0,7% | −1,1% | +0,9% | −1,6% |
> | nov/2024 | +4,8% | +1,5% | +0,3% | +0,8% | −3,1% |
> | dez/2024 | +6,7% | +1,8% | +5,8% | +0,8% | −4,3% |
> | jan/2025 | +15,3% | +3,2% | +5,8% | +1,0% | +4,9% |
> | fev/2025 | +17,5% | +3,8% | +3,2% | +1,0% | −2,6% |
> | mar/2025 | +10,7% | +1,7% | +7,0% | +1,0% | +6,1% |
> | abr/2025 | −5,1% | −0,1% | −3,5% | +1,1% | +3,7% |
> | mai/2025 | +23,6% | +4,5% | +8,0% | +1,1% | +1,5% |
> | jun/2025 | +7,7% | +2,4% | +1,2% | +1,1% | +1,3% |
> | jul/2025 | +6,2% | +2,0% | +3,0% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +7,4% | +6,7% | +1,2% | +6,3% |
> | set/2025 | −5,3% | −0,2% | +0,5% | +1,2% | +3,4% |
> | out/2025 | +12,3% | +3,0% | +1,4% | +1,3% | +2,3% |
> | nov/2025 | +10,1% | +2,7% | +6,0% | +1,1% | +6,4% |
> | dez/2025 | +11,6% | +3,1% | −2,8% | +1,1% | +1,3% |
> | jan/2026 | +14,1% | +3,5% | +6,2% | +1,2% | +12,6% |
> | fev/2026 | −1,9% | −0,1% | −1,1% | +1,0% | +4,1% |
> | mar/2026 | +3,5% | +2,4% | +2,3% | +1,2% | −0,7% |
> | abr/2026 | +24,1% | +6,3% | +10,3% | +1,1% | −0,1% |
> | mai/2026 | +1,6% | +1,6% | +3,3% | +1,1% | −7,2% |
> | jun/2026 | −5,4% | −0,1% | +0,8% | +1,1% | −1,0% |
> | jul/2026 | +8,5% | +3,1% | +7,4% | +1,2% | +3,5% |
> | ago/2026 | +14,4% | +4,4% | +5,7% | +1,1% | −0,3% |
> | set/2026 | +3,4% | +2,2% | +1,8% | +1,1% | +5,0% |
> | out/2026 | +13,2% | +4,2% | −1,2% | +1,0% | −9,9% |
> | **Acumulado** | **+11396,4%** | **+288,8%** | **+310,3%** | **+81,6%** | **+59,1%** |
>
> *Cada setup tem o mês a mês dele na própria página — aqui ficam só as carteiras, para a tabela caber na tela.*

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = IFR + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **Todos ⚠️** = os 15 setups com 1% cada: até 15% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** | **Média/ano** | **R\$ 10.000 viraram** |
|---|---|---|---|---|---|---|---|---|---|
| **⭐ Recomendada** | +3,6% | +258,9% | +97,7% | +105,5% | +279,5% | +100,6% | **+11396,4%** | +160,7% | R\$ 1.149.641 |
| **⭐ Recomendada ÷** | +2,2% | +68,9% | +37,8% | +37,8% | +74,2% | +37,7% | **+686,4%** | +51,7% | R\$ 78.636 |
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
> | nov/2021 | +1,8% | +1,1% | −1,3% | +0,6% | −3,4% |
> | dez/2021 | +1,8% | +1,1% | −4,3% | +0,7% | +2,9% |
> | jan/2022 | +27,2% | +9,1% | +5,2% | +0,7% | +7,0% |
> | fev/2022 | −3,3% | −0,6% | −6,1% | +0,8% | +0,9% |
> | mar/2022 | +24,7% | +8,5% | +10,4% | +0,9% | +6,1% |
> | abr/2022 | +10,5% | +4,1% | +4,9% | +0,8% | −10,1% |
> | mai/2022 | +2,8% | +1,7% | +1,1% | +1,0% | +3,2% |
> | jun/2022 | +9,8% | +4,0% | −2,2% | +1,0% | −11,5% |
> | jul/2022 | +2,6% | +1,8% | −9,5% | +1,0% | +4,7% |
> | ago/2022 | +39,6% | +13,0% | +28,4% | +1,2% | +6,2% |
> | set/2022 | −3,7% | −0,5% | +2,7% | +1,1% | +0,5% |
> | out/2022 | +17,3% | +6,5% | +9,9% | +1,0% | +5,5% |
> | nov/2022 | +10,1% | +4,1% | +4,2% | +1,0% | −3,1% |
> | dez/2022 | +5,2% | +2,6% | +10,5% | +1,1% | −2,4% |
> | jan/2023 | +17,6% | +6,5% | +6,7% | +1,1% | +3,4% |
> | fev/2023 | −0,1% | +0,6% | +12,2% | +0,9% | −7,5% |
> | mar/2023 | −0,2% | +0,8% | +0,8% | +1,2% | −2,9% |
> | abr/2023 | −1,7% | +0,2% | +5,4% | +0,9% | +2,5% |
> | mai/2023 | +4,3% | +2,4% | +9,2% | +1,1% | +3,7% |
> | jun/2023 | +12,1% | +4,8% | −1,3% | +1,1% | +9,0% |
> | jul/2023 | +11,8% | +4,6% | +1,5% | +1,1% | +3,3% |
> | ago/2023 | +6,8% | +3,1% | +2,6% | +1,1% | −5,1% |
> | set/2023 | +8,1% | +3,4% | −4,3% | +1,0% | +0,7% |
> | out/2023 | +9,2% | +3,7% | +1,1% | +1,0% | −2,9% |
> | nov/2023 | +8,7% | +3,6% | +7,4% | +0,9% | +12,5% |
> | dez/2023 | −4,1% | −0,7% | −0,9% | +0,9% | +5,4% |
> | jan/2024 | +6,5% | +2,9% | +5,1% | +1,0% | −4,8% |
> | fev/2024 | +10,3% | +4,0% | +11,8% | +0,8% | +1,0% |
> | mar/2024 | +1,9% | +1,2% | −0,2% | +0,8% | −0,7% |
> | abr/2024 | +11,3% | +4,4% | +0,0% | +0,9% | −1,7% |
> | mai/2024 | −5,6% | −1,3% | −6,7% | +0,8% | −3,0% |
> | jun/2024 | +6,4% | +2,7% | −0,4% | +0,8% | +1,5% |
> | jul/2024 | +5,9% | +2,6% | −1,7% | +0,9% | +3,0% |
> | ago/2024 | +9,6% | +3,8% | +8,4% | +0,9% | +6,5% |
> | set/2024 | +17,3% | +6,2% | +2,9% | +0,8% | −3,1% |
> | out/2024 | +0,9% | +1,0% | −3,1% | +0,9% | −1,6% |
> | nov/2024 | +4,8% | +2,3% | −0,3% | +0,8% | −3,1% |
> | dez/2024 | +6,7% | +2,8% | +10,8% | +0,8% | −4,3% |
> | jan/2025 | +15,3% | +5,9% | +12,1% | +1,0% | +4,9% |
> | fev/2025 | +17,5% | +6,5% | +5,5% | +1,0% | −2,6% |
> | mar/2025 | +10,7% | +4,3% | +14,6% | +1,0% | +6,1% |
> | abr/2025 | −5,1% | −1,0% | −5,5% | +1,1% | +3,7% |
> | mai/2025 | +23,6% | +8,4% | +17,1% | +1,1% | +1,5% |
> | jun/2025 | +7,7% | +3,4% | +2,1% | +1,1% | +1,3% |
> | jul/2025 | +6,2% | +3,0% | +5,1% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +14,4% | +11,6% | +1,2% | +6,3% |
> | set/2025 | −5,3% | −1,0% | −0,1% | +1,2% | +3,4% |
> | out/2025 | +12,3% | +4,9% | +1,5% | +1,3% | +2,3% |
> | nov/2025 | +10,1% | +4,1% | +12,3% | +1,1% | +6,4% |
> | dez/2025 | +11,6% | +4,7% | −4,8% | +1,1% | +1,3% |
> | jan/2026 | +14,1% | +5,6% | +11,4% | +1,2% | +12,6% |
> | fev/2026 | −1,9% | +0,1% | −3,1% | +1,0% | +4,1% |
> | mar/2026 | +3,5% | +2,1% | +2,1% | +1,2% | −0,7% |
> | abr/2026 | +24,1% | +8,5% | +13,6% | +1,1% | −0,1% |
> | mai/2026 | +1,6% | +1,3% | +4,3% | +1,1% | −7,2% |
> | jun/2026 | −5,4% | −1,0% | +0,2% | +1,1% | −1,0% |
> | jul/2026 | +8,5% | +3,7% | +12,0% | +1,2% | +3,5% |
> | ago/2026 | +14,4% | +5,5% | +6,7% | +1,1% | −0,3% |
> | set/2026 | +3,4% | +2,1% | +4,9% | +1,1% | +5,0% |
> | out/2026 | +13,2% | +5,1% | +0,9% | +1,0% | −9,9% |
> | **Acumulado** | **+11396,4%** | **+686,4%** | **+881,8%** | **+81,6%** | **+59,1%** |
>
> *Cada setup tem o mês a mês dele na própria página.*

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +32% | −3% | −5% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +75% | −8% | −12% | −17% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+161%** | **−17%** | −22% | −32% |
| Risco fixo de 2% por operação | 2,00% | +423% | −33% | −40% | −55% |
| Kelly ¼ | 2,95% | +917% | −44% | −55% | −73% |
| Kelly ½ | 5,90% | +2935% | −72% | −83% | −95% |
| Kelly cheio | 11,81% | +1785% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,66% | +309% | −30% | −36% | −50% |
| Larry Williams 5% | 3,32% | +911% | −53% | −60% | −77% |
| Larry Williams 10% | 6,64% | +2312% | −81% | −88% | −97% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros). **Sorteio:** a ordem das operações foi embaralhada 2.000 vezes — a queda de verdade depende da sorte na sequência, e a ordem real foi das mais favoráveis. Planeje pela queda do sorteio, não pela real.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: IFR de Tendência 7,7% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
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
| Pôr do Sol (17h45) | 669 pts | R\$ 137 | 0,7 | 1,5 | 3,7 | 7,3 | 14,6 |
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
