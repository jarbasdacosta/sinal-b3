---
title: Carteira de setups
date: 2026-10-30
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 30/10/2026 21:00 BRT · dados de 01/11/2021 a 30/10/2026 · [voltar para todos os setups](./)*

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
| 1º | [**IFR**](ifr-de-tendencia) ·TEN | 1,60 | 3,1 | 69 d | 150% | 72% | 0,26 | 12,7 |
| 2º | [**Bollinger**](rompimento-da-bollinger) ·TEN | 1,61 | 2,2 | 84 d | 150% | 65% | 0,22 | 4,2 |
| 3º | [**Donchian**](donchian-com-medias) ·TEN | 1,30 | 2,0 | 188 d | 102% | 67% | 0,29 | 21,5 |
| 4º | [**1ª vela 80**](primeira-vela-80-min) ·VEL | 1,12 | 1,1 | 298 d | 150% | 63% | 0,16 | 7,8 |
| 5º | [**ADX**](adx-da-manha) ·ADX | 1,03 | 1,3 | 198 d | 150% | 63% | 0,20 | 29,4 |
| 6º | [**Pôr do sol**](por-do-sol) ·POR | 1,11 | 0,6 | 328 d | 150% | 65% | −0,07 | 8,2 |
| 7º | [**Tendência**](tendencia-forte-do-dia) ·TEN | 1,33 | 1,8 | 206 d | 90% | 60% | 0,32 | 28,8 |
| 8º | [**MACD**](macd-na-tendencia) ·TEN | 0,94 | 0,9 | 256 d | 150% | 63% | 0,28 | 14,7 |
| 9º | [**GPS médias**](gps-de-medias) ·TEN | 1,07 | 1,3 | 205 d | 62% | 65% | 0,25 | 20,1 |
| 10º | [**Pullback**](pullback-na-media) ·PUL | 1,20 | 1,8 | 204 d | 28% | 60% | −0,02 | 5,0 |
| 11º | [**Onda**](vai-na-onda) ·OND | 0,73 | 0,6 | 471 d | 150% | 57% | 0,17 | 19,4 |
| 12º | [**BB explosão**](explosao-da-bollinger) ·TEN | 0,74 | 0,6 | 273 d | 139% | 58% | 0,28 | 19,7 |
| 13º | [**VWAP**](bandas-de-vwap) ·TEN | 0,46 | 0,2 | 511 d | 146% | 57% | 0,33 | 25,6 |
| 14º | [**Quinta**](primeira-vela-de-quinta) ·QUI | 0,88 | 0,5 | 179 d | 62% | 50% | −0,08 | 1,8 |
| 15º | [**Rompe 200**](rompe-media-200) ·ROM | 0,43 | 0,2 | 187 d | 23% | 45% | 0,17 | 3,4 |

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
**Por que a recomendada é IFR de Tendência + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios de SOBREVIVÊNCIA ao mesmo tempo, medidos **só no treino** (até 2023) e **sem o CDI na conta** (o CDI preenche as quedas pequenas e esconde a diferença entre as carteiras) — rende 7,0× ao ano para cada 1% de pior queda, passou no máximo 34 dias seguidos no vermelho e a pior janela de 60 dias foi de −1%. Fora do treino ela entregou +53% ao ano (Sharpe 2,12), com 1% dividido. O critério é de sequência, não de oscilação: o que quebra uma conta não é um dia ruim, é uma sequência ruim — e o Sharpe não distingue as duas coisas. A correlação média entre os setups dela é 0,01: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, Bandas de VWAP, Donchian com Médias, Explosão da Bollinger, GPS de Médias, MACD na Tendência, Pôr do Sol (17h45), Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Rompimento da Média de 200, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios de **sobrevivência**, medidos **só no treino** (até 2023) e **sem o CDI** na conta de risco: **retorno ÷ pior queda**, **dias seguidos no vermelho** (menos é melhor) e a **pior janela de 60 dias**. O que quebra uma conta não é um dia ruim, é uma sequência ruim — e o Sharpe, que era o critério antigo, não distingue as duas coisas.

| # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+173% · −17,1%** | +43% · −3,5% | +28% | −1,6% | 7,2 | 34 d | −0,8% | +20% | −0,01 |
| 2 | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN ⭐ | **+161% · −17,1%** | +52% · −5,1% | +32% | −2,6% | 7,0 | 34 d | −1,4% | +22% | 0,01 |
| 3 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+189% · −21,4%** | +38% · −3,0% | +26% | −1,9% | 6,1 | 34 d | −0,9% | +18% | 0,06 |
| 4 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+175% · −21,4%** | +43% · −4,5% | +28% | −3,1% | 5,9 | 34 d | −0,9% | +19% | 0,12 |
| 5 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+191% · −21,5%** | +38% · −3,2% | +26% | −2,0% | 5,7 | 34 d | −1,1% | +19% | 0,04 |
| 6 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+190% · −17,3%** | +38% · −2,5% | +25% | −1,2% | 7,0 | 39 d | −0,9% | +20% | −0,01 |
| 7 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+226% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 6,1 | 37 d | −1,1% | +23% | 0,06 |
| 8 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+230% · −32,6%** | +46% · −6,1% | +31% | −6,0% | 6,5 | 37 d | −1,5% | +23% | 0,06 |
| 9 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+176% · −17,2%** | +43% · −3,5% | +28% | −1,6% | 6,7 | 39 d | −1,3% | +21% | −0,04 |
| 10 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+248% · −20,5%** | +44% · −3,3% | +29% | −2,1% | 6,7 | 40 d | −1,0% | +23% | −0,01 |
| 11 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+211% · −25,7%** | +49% · −5,6% | +32% | −4,8% | 5,9 | 37 d | −1,6% | +24% | 0,13 |
| 12 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+251% · −20,5%** | +45% · −3,2% | +29% | −2,1% | 6,3 | 40 d | −1,0% | +22% | 0,01 |
| 13 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+287% · −33,2%** | +49% · −6,0% | +32% | −4,4% | 5,6 | 30 d | −1,8% | +21% | 0,06 |
| 14 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+197% · −30,6%** | +42% · −5,2% | +28% | −3,5% | 6,1 | 39 d | −1,5% | +18% | 0,09 |
| 15 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+184% · −28,0%** | +47% · −5,6% | +31% | −3,7% | 6,9 | 39 d | −1,8% | +20% | 0,00 |
| 16 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+227% · −29,7%** | +43% · −5,2% | +29% | −4,5% | 5,2 | 34 d | −0,9% | +22% | 0,15 |
| 17 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+200% · −24,7%** | +42% · −4,0% | +28% | −2,6% | 6,5 | 39 d | −1,8% | +20% | −0,02 |
| 18 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+229% · −25,8%** | +43% · −4,1% | +29% | −3,6% | 5,8 | 39 d | −1,4% | +22% | 0,05 |
| 19 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+361% · −35,7%** | +56% · −6,7% | +35% | −5,0% | 5,4 | 31 d | −1,8% | +25% | 0,12 |
| 20 | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+48% · −19,8%** | +24% · −6,2% | +20% | −3,1% | 5,0 | 36 d | −0,5% | +13% | 0,09 |
| 21 | IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+134% · −17,4%** | +46% · −4,8% | +28% | −2,9% | 6,3 | 37 d | −2,2% | +22% | 0,06 |
| 22 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+196% · −27,5%** | +48% · −6,1% | +34% | −4,9% | 5,5 | 42 d | −0,6% | +20% | 0,01 |
| 23 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+200% · −28,5%** | +42% · −5,0% | +28% | −3,5% | 5,6 | 39 d | −1,6% | +19% | 0,08 |
| 24 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+130% · −16,2%** | +36% · −2,8% | +25% | −3,4% | 5,5 | 36 d | −1,9% | +21% | 0,02 |
| 25 | IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+148% · −21,0%** | +39% · −4,2% | +26% | −2,8% | 5,6 | 34 d | −2,2% | +20% | 0,10 |
| 26 | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+269% · −33,2%** | +57% · −8,0% | +36% | −5,9% | 5,5 | 36 d | −2,0% | +22% | 0,13 |
| 27 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+271% · −30,2%** | +48% · −5,2% | +34% | −4,2% | 5,3 | 36 d | −1,7% | +24% | −0,01 |
| 28 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+232% · −32,1%** | +47% · −6,0% | +31% | −6,0% | 6,0 | 38 d | −2,2% | +24% | 0,06 |
| 29 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+213% · −27,6%** | +42% · −4,7% | +30% | −3,6% | 5,3 | 42 d | −0,9% | +20% | 0,01 |
| 30 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+290% · −33,3%** | +49% · −6,0% | +32% | −4,4% | 5,4 | 36 d | −2,0% | +22% | 0,06 |
| | *CDI* | *+13%* | *0%* | — | — | — | — | — | — | — |
| | *Ibovespa comprado* | *+10%* | *−20,9%* | — | — | — | — | — | — | — |

> [!example]- Combinações 31 a 60 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 31 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+180% · −25,6%** | +45% · −5,5% | +29% | −5,5% | 5,1 | 33 d | −1,8% | +23% | 0,18 |
> | 32 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+187% · −25,9%** | +48% · −5,4% | +31% | −3,7% | 6,4 | 39 d | −2,4% | +21% | −0,01 |
> | 33 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+325% · −40,4%** | +54% · −8,1% | +35% | −6,9% | 5,1 | 36 d | −1,8% | +25% | 0,22 |
> | 34 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+118% · −15,6%** | +35% · −3,3% | +26% | −2,2% | 6,0 | 54 d | +0,1% | +17% | 0,07 |
> | 35 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+163% · −21,1%** | +35% · −3,0% | +24% | −2,2% | 5,5 | 37 d | −2,2% | +20% | 0,06 |
> | 36 | IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+182% · −27,9%** | +58% · −8,7% | +39% | −7,2% | 5,4 | 50 d | −0,6% | +21% | 0,10 |
> | 37 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+283% · −43,4%** | +53% · −8,3% | +34% | −4,4% | 7,0 | 53 d | −1,8% | +21% | 0,07 |
> | 38 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+107% · −15,3%** | +40% · −4,4% | +28% | −3,3% | 5,7 | 54 d | −0,2% | +17% | 0,19 |
> | 39 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+178% · −25,5%** | +37% · −4,3% | +27% | −2,5% | 5,7 | 42 d | −2,1% | +21% | 0,03 |
> | 40 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+232% · −20,4%** | +51% · −4,4% | +32% | −3,1% | 6,5 | 54 d | −1,5% | +25% | 0,05 |
> | 41 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+275% · −30,2%** | +49% · −5,2% | +33% | −4,2% | 5,1 | 36 d | −2,0% | +25% | 0,02 |
> | 42 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+222% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 5,0 | 34 d | −2,0% | +27% | 0,04 |
> | 43 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+254% · −30,1%** | +56% · −6,9% | +38% | −5,7% | 5,2 | 36 d | −2,1% | +25% | 0,06 |
> | 44 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+286% · −36,8%** | +50% · −7,0% | +32% | −5,6% | 5,0 | 36 d | −2,0% | +19% | 0,17 |
> | 45 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+244% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 4,9 | 41 d | −0,6% | +23% | 0,09 |
> | 46 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+303% · −28,9%** | +52% · −5,0% | +31% | −3,2% | 6,3 | 47 d | −2,3% | +19% | 0,16 |
> | 47 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+250% · −24,3%** | +45% · −3,9% | +29% | −3,1% | 5,6 | 54 d | −0,8% | +22% | 0,12 |
> | 48 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+196% · −25,4%** | +40% · −4,0% | +27% | −4,1% | 5,0 | 37 d | −1,9% | +21% | 0,11 |
> | 49 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+225% · −28,9%** | +44% · −5,4% | +29% | −3,1% | 6,4 | 47 d | −2,4% | +17% | 0,10 |
> | 50 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+271% · −35,4%** | +49% · −6,7% | +34% | −5,4% | 4,8 | 36 d | −1,8% | +22% | 0,15 |
> | 51 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+131% · −15,7%** | +32% · −2,8% | +24% | −1,7% | 5,9 | 56 d | +0,0% | +18% | 0,04 |
> | 52 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+148% · −19,4%** | +40% · −4,4% | +29% | −3,6% | 5,6 | 54 d | −1,2% | +22% | 0,01 |
> | 53 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+291% · −28,5%** | +49% · −4,9% | +32% | −5,6% | 5,7 | 54 d | −1,6% | +25% | 0,13 |
> | 54 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+307% · −37,6%** | +53% · −7,2% | +37% | −6,7% | 4,8 | 35 d | −1,9% | +28% | 0,16 |
> | 55 | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+98% · −16,5%** | +31% · −3,3% | +21% | −1,9% | 5,4 | 53 d | −1,6% | +15% | 0,04 |
> | 56 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+195% · −29,3%** | +40% · −5,0% | +27% | −5,0% | 4,7 | 33 d | −1,9% | +23% | 0,16 |
> | 57 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+213% · −22,5%** | +42% · −3,4% | +30% | −4,6% | 5,4 | 44 d | −2,2% | +24% | −0,00 |
> | 58 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+210% · −31,4%** | +42% · −5,5% | +30% | −4,8% | 5,0 | 50 d | −0,8% | +18% | 0,10 |
> | 59 | Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+109% · −23,8%** | +41% · −7,0% | +30% | −4,9% | 4,6 | 36 d | −1,3% | +17% | −0,07 |
> | 60 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+286% · −41,7%** | +53% · −7,7% | +34% | −4,4% | 7,0 | 55 d | −1,9% | +22% | 0,07 |

> [!example]- Combinações 61 a 90 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 61 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+161% · −23,7%** | +36% · −3,8% | +27% | −3,7% | 5,2 | 54 d | −0,0% | +21% | 0,08 |
> | 62 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+193% · −24,7%** | +39% · −4,2% | +27% | −2,9% | 4,9 | 32 d | −2,5% | +19% | 0,02 |
> | 63 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+280% · −46,3%** | +53% · −9,2% | +34% | −5,7% | 6,3 | 53 d | −2,4% | +19% | 0,23 |
> | 64 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+228% · −35,3%** | +54% · −8,6% | +37% | −8,1% | 4,8 | 49 d | −0,6% | +25% | 0,20 |
> | 65 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+120% · −14,8%** | +35% · −3,3% | +25% | −1,9% | 5,6 | 56 d | −0,3% | +18% | 0,05 |
> | 66 | Pullback ·PUL + Tendência ·TEN | **+99% · −25,6%** | +53% · −12,0% | +37% | −7,6% | 4,6 | 35 d | −1,5% | +16% | −0,06 |
> | 67 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+198% · −29,3%** | +40% · −5,1% | +27% | −5,0% | 4,7 | 33 d | −2,1% | +23% | 0,14 |
> | 68 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+269% · −29,9%** | +49% · −5,5% | +30% | −3,6% | 6,2 | 54 d | −2,1% | +21% | 0,04 |
> | 69 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+110% · −16,2%** | +29% · −2,3% | +20% | −1,6% | 5,3 | 53 d | −1,7% | +16% | 0,03 |
> | 70 | Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+176% · −24,6%** | +44% · −5,2% | +29% | −3,8% | 5,0 | 35 d | −2,6% | +18% | 0,01 |
> | 71 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+196% · −31,4%** | +48% · −7,4% | +34% | −6,5% | 4,9 | 50 d | −0,8% | +19% | 0,20 |
> | 72 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+198% · −27,6%** | +48% · −6,1% | +33% | −5,0% | 5,2 | 54 d | −0,9% | +21% | 0,02 |
> | 73 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+240% · −29,8%** | +45% · −5,1% | +32% | −4,1% | 4,9 | 39 d | −2,0% | +26% | 0,04 |
> | 74 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+160% · −25,8%** | +44% · −6,0% | +28% | −4,4% | 5,4 | 41 d | −2,5% | +23% | 0,00 |
> | 75 | IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+136% · −19,9%** | +47% · −6,4% | +34% | −5,3% | 5,6 | 54 d | −1,9% | +25% | 0,08 |
> | 76 | IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+136% · −21,0%** | +47% · −6,3% | +28% | −4,5% | 5,0 | 37 d | −2,5% | +21% | 0,21 |
> | 77 | IFR ·TEN + Bollinger ·TEN | **+123% · −16,6%** | +61% · −7,7% | +34% | −4,8% | 5,6 | 37 d | −3,0% | +26% | 0,25 |
> | 78 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+247% · −35,3%** | +47% · −6,6% | +33% | −6,1% | 4,8 | 50 d | −0,9% | +24% | 0,10 |
> | 79 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+149% · −23,7%** | +40% · −5,2% | +29% | −5,1% | 5,0 | 54 d | −0,4% | +22% | 0,16 |
> | 80 | IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+150% · −21,1%** | +40% · −4,2% | +25% | −3,0% | 4,9 | 37 d | −2,4% | +21% | 0,06 |
> | 81 | Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+87% · −8,2%** | +34% · −2,4% | +23% | −1,6% | 7,0 | 57 d | −1,8% | +17% | −0,04 |
> | 82 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+198% · −20,9%** | +47% · −4,4% | +30% | −3,7% | 5,6 | 54 d | −2,0% | +24% | 0,06 |
> | 83 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+173% · −28,1%** | +39% · −5,2% | +26% | −4,1% | 4,8 | 41 d | −2,0% | +20% | 0,06 |
> | 84 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+228% · −36,0%** | +47% · −6,6% | +31% | −6,9% | 5,7 | 54 d | −2,1% | +22% | 0,20 |
> | 85 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+202% · −33,8%** | +43% · −6,5% | +29% | −6,5% | 5,1 | 37 d | −2,8% | +26% | 0,08 |
> | 86 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+241% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 4,6 | 38 d | −1,8% | +28% | 0,04 |
> | 87 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+273% · −29,9%** | +49% · −5,5% | +30% | −3,6% | 5,9 | 54 d | −2,3% | +22% | 0,03 |
> | 88 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+213% · −31,4%** | +42% · −5,6% | +30% | −4,9% | 4,8 | 50 d | −1,1% | +19% | 0,09 |
> | 89 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+316% · −38,2%** | +56% · −8,1% | +35% | −4,8% | 5,9 | 38 d | −3,3% | +21% | 0,10 |
> | 90 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+171% · −29,1%** | +58% · −8,8% | +35% | −5,4% | 6,3 | 39 d | −3,3% | +21% | 0,12 |

> [!example]- Combinações 91 a 120 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 91 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+163% · −23,7%** | +36% · −3,9% | +27% | −3,7% | 4,9 | 54 d | −1,0% | +22% | 0,07 |
> | 92 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+209% · −28,3%** | +51% · −7,2% | +32% | −3,8% | 6,1 | 47 d | −3,0% | +17% | 0,22 |
> | 93 | IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+234% · −32,8%** | +53% · −7,8% | +34% | −5,8% | 5,3 | 31 d | −3,3% | +23% | 0,15 |
> | 94 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+121% · −21,2%** | +35% · −4,9% | +27% | −3,5% | 4,6 | 45 d | −1,5% | +18% | −0,01 |
> | 95 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+165% · −24,6%** | +42% · −5,5% | +30% | −3,1% | 5,5 | 50 d | −2,6% | +22% | 0,11 |
> | 96 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+228% · −32,6%** | +44% · −5,8% | +30% | −5,2% | 4,6 | 34 d | −2,3% | +22% | 0,09 |
> | 97 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+106% · −12,8%** | +39% · −3,5% | +28% | −2,0% | 6,9 | 60 d | −1,7% | +19% | −0,07 |
> | 98 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+215% · −33,6%** | +54% · −7,9% | +34% | −7,9% | 6,2 | 54 d | −2,6% | +25% | 0,17 |
> | 99 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+184% · −31,6%** | +48% · −6,8% | +31% | −4,8% | 5,8 | 54 d | −2,5% | +19% | 0,21 |
> | 100 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+101% · −16,0%** | +31% · −3,2% | +21% | −1,9% | 5,0 | 53 d | −1,9% | +16% | 0,00 |
> | 101 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+265% · −44,3%** | +62% · −11,2% | +39% | −6,0% | 6,8 | 53 d | −3,0% | +22% | 0,19 |
> | 102 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+238% · −33,5%** | +45% · −6,1% | +32% | −5,3% | 4,5 | 38 d | −1,8% | +23% | 0,11 |
> | 103 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+199% · −22,4%** | +48% · −4,6% | +33% | −6,1% | 5,4 | 49 d | −2,7% | +26% | 0,07 |
> | 104 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+243% · −35,5%** | +47% · −6,6% | +33% | −6,2% | 4,5 | 38 d | −1,6% | +27% | 0,07 |
> | 105 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+145% · −20,6%** | +33% · −2,9% | +23% | −3,4% | 4,4 | 37 d | −1,6% | +20% | 0,03 |
> | 106 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+143% · −20,5%** | +33% · −2,8% | +23% | −3,5% | 4,7 | 53 d | −1,4% | +19% | 0,05 |
> | 107 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+225% · −29,7%** | +52% · −6,8% | +35% | −5,6% | 4,7 | 39 d | −2,3% | +28% | 0,11 |
> | 108 | Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+111% · −22,5%** | +41% · −7,0% | +30% | −4,5% | 4,5 | 39 d | −1,7% | +18% | −0,05 |
> | 109 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+214% · −26,5%** | +42% · −4,3% | +30% | −5,5% | 4,9 | 49 d | −2,2% | +25% | 0,13 |
> | 110 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+311% · −47,5%** | +58% · −9,5% | +37% | −6,9% | 6,0 | 53 d | −3,0% | +25% | 0,24 |
> | 111 | Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+179% · −24,6%** | +44% · −5,4% | +29% | −3,9% | 4,8 | 35 d | −2,9% | +19% | 0,01 |
> | 112 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+250% · −29,1%** | +45% · −4,9% | +30% | −3,3% | 4,9 | 50 d | −2,3% | +22% | 0,02 |
> | 113 | IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+207% · −29,7%** | +64% · −9,6% | +42% | −8,0% | 4,8 | 36 d | −2,9% | +30% | 0,23 |
> | 114 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+271% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 4,5 | 39 d | −1,9% | +29% | 0,16 |
> | 115 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+243% · −38,7%** | +47% · −7,6% | +33% | −7,3% | 4,5 | 49 d | −0,8% | +22% | 0,22 |
> | 116 | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+323% · −40,6%** | +55% · −8,0% | +35% | −7,0% | 4,7 | 38 d | −2,6% | +29% | 0,16 |
> | 117 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+162% · −19,5%** | +36% · −3,2% | +27% | −2,9% | 4,8 | 56 d | −0,7% | +20% | 0,01 |
> | 118 | IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+167% · −25,4%** | +54% · −7,9% | +33% | −7,8% | 4,5 | 33 d | −2,6% | +26% | 0,40 |
> | 119 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+252% · −29,5%** | +46% · −5,4% | +30% | −6,1% | 4,8 | 54 d | −1,8% | +23% | 0,15 |
> | 120 | Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+89% · −9,1%** | +35% · −2,5% | +23% | −1,6% | 6,2 | 62 d | −1,8% | +18% | −0,08 |

> [!example]- Combinações 121 a 150 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 121 | MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+212% · −32,6%** | +50% · −7,9% | +33% | −7,0% | 4,4 | 32 d | −2,6% | +23% | 0,18 |
> | 122 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+150% · −19,5%** | +40% · −4,4% | +29% | −3,6% | 4,8 | 56 d | −1,3% | +21% | 0,00 |
> | 123 | IFR ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+225% · −35,5%** | +54% · −8,6% | +37% | −8,2% | 4,5 | 38 d | −2,5% | +31% | 0,16 |
> | 124 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+230% · −32,7%** | +44% · −5,9% | +30% | −5,3% | 4,4 | 35 d | −2,5% | +23% | 0,09 |
> | 125 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+164% · −30,1%** | +37% · −5,6% | +28% | −4,5% | 4,2 | 35 d | −1,4% | +21% | 0,03 |
> | 126 | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+89% · −16,3%** | +35% · −4,8% | +23% | −2,7% | 5,1 | 57 d | −1,8% | +15% | 0,06 |
> | 127 | IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+169% · −30,9%** | +44% · −7,2% | +31% | −6,4% | 4,6 | 47 d | −2,1% | +20% | 0,14 |
> | 128 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+133% · −29,5%** | +32% · −5,4% | +25% | −3,2% | 4,2 | 35 d | −1,6% | +16% | 0,05 |
> | 129 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+253% · −37,5%** | +50% · −6,2% | +32% | −4,3% | 6,0 | 55 d | −2,9% | +23% | 0,07 |
> | 130 | IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+251% · −36,4%** | +46% · −6,9% | +30% | −5,5% | 4,8 | 38 d | −3,0% | +21% | 0,16 |
> | 131 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+346% · −43,6%** | +60% · −8,9% | +38% | −5,0% | 5,5 | 54 d | −2,9% | +25% | 0,14 |
> | 132 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+185% · −31,0%** | +39% · −5,4% | +28% | −4,7% | 4,5 | 46 d | −2,1% | +20% | 0,09 |
> | 133 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+164% · −16,4%** | +42% · −3,3% | +30% | −2,2% | 6,8 | 60 d | −2,6% | +23% | −0,09 |
> | 134 | 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+234% · −28,8%** | +52% · −6,5% | +33% | −4,6% | 4,8 | 50 d | −2,6% | +23% | 0,08 |
> | 135 | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+120% · −29,8%** | +36% · −7,0% | +27% | −4,5% | 4,1 | 35 d | −1,4% | +15% | 0,06 |
> | 136 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+150% · −31,4%** | +41% · −7,6% | +31% | −6,1% | 4,1 | 35 d | −1,2% | +21% | 0,03 |
> | 137 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+144% · −16,2%** | +33% · −2,1% | +23% | −2,4% | 5,4 | 62 d | −1,4% | +19% | 0,02 |
> | 138 | IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+156% · −27,0%** | +53% · −8,5% | +36% | −7,0% | 5,1 | 40 d | −3,3% | +23% | 0,07 |
> | 139 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+157% · −27,0%** | +37% · −4,8% | +26% | −4,9% | 5,4 | 56 d | −2,5% | +22% | −0,02 |
> | 140 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+179% · −16,5%** | +37% · −2,7% | +27% | −1,6% | 6,6 | 62 d | −2,4% | +21% | −0,04 |
> | 141 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+98% · −9,1%** | +31% · −1,9% | +21% | −1,3% | 6,7 | 64 d | −1,6% | +17% | 0,00 |
> | 142 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+253% · −27,3%** | +45% · −4,8% | +30% | −3,3% | 4,7 | 50 d | −2,5% | +23% | 0,05 |
> | 143 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+139% · −18,8%** | +38% · −3,8% | +27% | −3,6% | 4,5 | 41 d | −2,4% | +24% | 0,05 |
> | 144 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+318% · −35,3%** | +52% · −6,6% | +33% | −4,9% | 5,2 | 54 d | −2,8% | +26% | 0,13 |
> | 145 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+216% · −20,8%** | +41% · −3,2% | +27% | −2,6% | 5,4 | 60 d | −2,1% | +21% | 0,05 |
> | 146 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+241% · −33,5%** | +46% · −6,1% | +32% | −5,3% | 4,3 | 41 d | −2,0% | +25% | 0,14 |
> | 147 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+194% · −28,7%** | +39% · −4,9% | +27% | −4,0% | 4,4 | 35 d | −2,7% | +18% | 0,06 |
> | 148 | IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+181% · −29,3%** | +45% · −6,8% | +29% | −6,6% | 4,3 | 38 d | −2,1% | +25% | 0,27 |
> | 149 | IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+254% · −36,5%** | +46% · −7,0% | +30% | −5,6% | 4,6 | 35 d | −3,2% | +22% | 0,15 |
> | 150 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+301% · −37,8%** | +54% · −7,2% | +37% | −6,8% | 4,5 | 39 d | −2,8% | +31% | 0,13 |

> [!example]- Combinações 151 a 180 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 151 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+251% · −41,2%** | +50% · −7,4% | +32% | −5,6% | 5,6 | 54 d | −3,3% | +22% | 0,17 |
> | 152 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+256% · −35,8%** | +49% · −7,6% | +32% | −5,3% | 5,3 | 57 d | −2,6% | +21% | 0,23 |
> | 153 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+132% · −16,2%** | +37% · −3,1% | +25% | −3,5% | 5,0 | 62 d | −1,6% | +20% | 0,00 |
> | 154 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+199% · −35,9%** | +43% · −7,1% | +29% | −7,4% | 4,9 | 54 d | −2,8% | +23% | 0,16 |
> | 155 | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+191% · −28,7%** | +39% · −4,8% | +27% | −3,9% | 4,6 | 51 d | −2,5% | +17% | 0,07 |
> | 156 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+254% · −32,9%** | +46% · −5,9% | +30% | −4,3% | 5,1 | 54 d | −3,0% | +23% | 0,10 |
> | 157 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+171% · −27,1%** | +44% · −6,0% | +31% | −4,8% | 5,0 | 58 d | −2,1% | +23% | 0,05 |
> | 158 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+239% · −38,9%** | +47% · −7,5% | +33% | −7,4% | 4,2 | 46 d | −1,6% | +26% | 0,20 |
> | 159 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+309% · −43,0%** | +56% · −8,8% | +35% | −6,0% | 5,5 | 44 d | −3,7% | +18% | 0,26 |
> | 160 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+252% · −35,9%** | +50% · −7,0% | +32% | −5,3% | 5,0 | 45 d | −3,4% | +25% | 0,21 |
> | 161 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+122% · −29,0%** | +36% · −6,8% | +27% | −4,5% | 4,0 | 35 d | −1,7% | +16% | 0,06 |
> | 162 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+313% · −39,9%** | +55% · −8,1% | +35% | −4,8% | 6,0 | 36 d | −4,1% | +20% | 0,10 |
> | 163 | Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+110% · −29,6%** | +42% · −9,7% | +30% | −6,6% | 4,0 | 35 d | −1,6% | +15% | 0,16 |
> | 164 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+291% · −35,0%** | +50% · −6,5% | +33% | −5,8% | 4,4 | 50 d | −2,3% | +26% | 0,16 |
> | 165 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+232% · −41,5%** | +48% · −7,7% | +32% | −5,3% | 5,6 | 54 d | −3,5% | +23% | 0,07 |
> | 166 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+322% · −35,3%** | +53% · −6,6% | +33% | −4,9% | 4,9 | 54 d | −3,0% | +27% | 0,16 |
> | 167 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+287% · −40,0%** | +51% · −7,9% | +33% | −6,8% | 4,8 | 54 d | −2,8% | +26% | 0,24 |
> | 168 | MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+119% · −16,1%** | +42% · −4,5% | +28% | −5,4% | 5,2 | 57 d | −2,8% | +23% | 0,04 |
> | 169 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+269% · −28,6%** | +49% · −5,3% | +29% | −4,0% | 4,7 | 37 d | −3,4% | +21% | 0,11 |
> | 170 | Pullback ·PUL + Bollinger ·TEN | **+78% · −8,6%** | +43% · −4,0% | +26% | −2,1% | 5,7 | 57 d | −3,1% | +17% | −0,14 |
> | 171 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+202% · −37,1%** | +43% · −6,8% | +29% | −3,0% | 6,5 | 63 d | −2,8% | +19% | −0,01 |
> | 172 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+181% · −24,7%** | +38% · −4,1% | +27% | −2,2% | 5,4 | 62 d | −2,4% | +22% | 0,05 |
> | 173 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+152% · −31,3%** | +41% · −7,5% | +31% | −6,1% | 4,0 | 38 d | −1,5% | +23% | 0,05 |
> | 174 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+279% · −43,2%** | +55% · −7,8% | +35% | −6,9% | 5,2 | 38 d | −3,8% | +27% | 0,23 |
> | 175 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+166% · −16,4%** | +42% · −3,2% | +30% | −2,1% | 6,3 | 62 d | −3,0% | +22% | −0,05 |
> | 176 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+248% · −42,4%** | +50% · −7,8% | +32% | −5,5% | 5,5 | 54 d | −3,5% | +21% | 0,17 |
> | 177 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+198% · −34,8%** | +50% · −8,5% | +35% | −7,9% | 4,5 | 40 d | −3,1% | +26% | 0,21 |
> | 178 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+256% · −29,5%** | +46% · −5,3% | +30% | −6,1% | 4,4 | 54 d | −1,9% | +23% | 0,18 |
> | 179 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+156% · −25,0%** | +34% · −4,3% | +24% | −2,6% | 5,2 | 62 d | −2,4% | +20% | 0,03 |
> | 180 | IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+299% · −35,2%** | +62% · −8,6% | +38% | −6,5% | 5,1 | 54 d | −3,3% | +29% | 0,28 |

> [!example]- Combinações 181 a 210 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 181 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+306% · −37,5%** | +54% · −7,6% | +33% | −7,0% | 5,4 | 54 d | −3,5% | +25% | 0,18 |
> | 182 | IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+171% · −31,0%** | +45% · −7,3% | +31% | −6,4% | 4,4 | 50 d | −2,4% | +21% | 0,14 |
> | 183 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+254% · −37,2%** | +58% · −9,3% | +39% | −8,7% | 4,4 | 39 d | −2,8% | +32% | 0,34 |
> | 184 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+356% · −42,2%** | +58% · −8,6% | +37% | −7,4% | 4,7 | 54 d | −2,8% | +30% | 0,35 |
> | 185 | IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+222% · −33,4%** | +53% · −8,0% | +35% | −7,1% | 4,4 | 54 d | −2,1% | +25% | 0,25 |
> | 186 | IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+286% · −43,2%** | +51% · −9,0% | +33% | −8,0% | 4,4 | 38 d | −3,0% | +25% | 0,33 |
> | 187 | 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+251% · −35,5%** | +46% · −6,8% | +30% | −4,6% | 4,4 | 53 d | −2,5% | +21% | 0,13 |
> | 188 | MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+138% · −32,6%** | +49% · −11,0% | +35% | −8,7% | 4,0 | 38 d | −1,7% | +23% | 0,12 |
> | 189 | IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+235% · −36,4%** | +54% · −9,1% | +34% | −7,4% | 4,7 | 38 d | −3,5% | +22% | 0,29 |
> | 190 | MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+132% · −20,5%** | +37% · −4,1% | +25% | −4,8% | 4,5 | 57 d | −1,6% | +20% | 0,09 |
> | 191 | IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+219% · −32,8%** | +66% · −11,0% | +39% | −8,3% | 5,2 | 35 d | −4,1% | +25% | 0,36 |
> | 192 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+368% · −42,1%** | +61% · −7,7% | +36% | −5,2% | 6,3 | 54 d | −3,8% | +22% | 0,19 |
> | 193 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+338% · −33,7%** | +57% · −6,4% | +34% | −4,6% | 4,8 | 45 d | −3,5% | +26% | 0,15 |
> | 194 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+212% · −38,3%** | +44% · −7,4% | +31% | −7,2% | 4,2 | 48 d | −2,1% | +23% | 0,20 |
> | 195 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+406% · −40,0%** | +63% · −7,9% | +37% | −5,6% | 6,1 | 33 d | −4,5% | +21% | 0,21 |
> | 196 | IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+287% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 4,5 | 38 d | −3,4% | +29% | 0,13 |
> | 197 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+152% · −16,3%** | +50% · −4,7% | +34% | −3,0% | 6,5 | 61 d | −3,4% | +26% | −0,06 |
> | 198 | IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+318% · −38,7%** | +53% · −7,6% | +33% | −6,1% | 4,6 | 54 d | −3,0% | +25% | 0,25 |
> | 199 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+193% · −23,0%** | +39% · −3,6% | +27% | −4,8% | 5,0 | 63 d | −2,5% | +23% | 0,03 |
> | 200 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+381% · −45,8%** | +61% · −9,5% | +37% | −6,3% | 4,5 | 57 d | −2,2% | +25% | 0,18 |
> | 201 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+162% · −30,9%** | +37% · −6,3% | +28% | −5,7% | 3,8 | 35 d | −1,3% | +19% | 0,08 |
> | 202 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+254% · −31,9%** | +46% · −5,9% | +30% | −7,0% | 4,2 | 54 d | −1,8% | +24% | 0,26 |
> | 203 | IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+238% · −32,8%** | +53% · −7,9% | +33% | −5,8% | 5,0 | 54 d | −3,5% | +24% | 0,15 |
> | 204 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+338% · −45,4%** | +58% · −9,3% | +35% | −6,2% | 4,2 | 55 d | −1,8% | +26% | 0,19 |
> | 205 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+216% · −22,5%** | +42% · −3,5% | +30% | −4,6% | 4,7 | 60 d | −2,5% | +23% | 0,03 |
> | 206 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+198% · −42,5%** | +43% · −8,7% | +29% | −4,0% | 6,0 | 63 d | −3,3% | +17% | 0,08 |
> | 207 | IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+158% · −27,1%** | +53% · −8,6% | +36% | −7,1% | 4,8 | 61 d | −2,6% | +25% | 0,10 |
> | 208 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+182% · −25,4%** | +45% · −5,5% | +29% | −5,5% | 4,8 | 61 d | −2,6% | +22% | 0,17 |
> | 209 | Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+299% · −40,0%** | +53% · −7,9% | +32% | −5,2% | 5,2 | 36 d | −4,3% | +17% | 0,19 |
> | 210 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+185% · −33,8%** | +49% · −8,5% | +32% | −8,5% | 4,8 | 54 d | −3,4% | +27% | 0,15 |

> [!example]- Combinações 211 a 240 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 211 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+236% · −29,5%** | +53% · −7,0% | +33% | −8,0% | 4,4 | 54 d | −2,7% | +24% | 0,31 |
> | 212 | IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+269% · −40,0%** | +59% · −10,3% | +37% | −8,9% | 4,7 | 54 d | −3,3% | +28% | 0,44 |
> | 213 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+229% · −43,2%** | +47% · −8,2% | +32% | −5,3% | 6,0 | 63 d | −3,4% | +22% | 0,07 |
> | 214 | IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+87% · −14,3%** | +35% · −3,6% | +25% | −3,1% | 4,0 | 53 d | −0,6% | +19% | 0,08 |
> | 215 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+292% · −39,5%** | +55% · −7,1% | +33% | −4,4% | 5,7 | 57 d | −3,7% | +21% | 0,06 |
> | 216 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+156% · −15,3%** | +34% · −2,5% | +24% | −1,3% | 5,4 | 64 d | −2,7% | +20% | 0,00 |
> | 217 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+226% · −32,1%** | +47% · −5,9% | +31% | −5,3% | 5,2 | 39 d | −4,2% | +26% | 0,04 |
> | 218 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+201% · −40,6%** | +43% · −8,2% | +29% | −4,0% | 5,7 | 63 d | −3,4% | +18% | 0,08 |
> | 219 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+153% · −34,8%** | +36% · −6,1% | +26% | −2,6% | 4,8 | 49 d | −3,8% | +16% | −0,03 |
> | 220 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+253% · −33,3%** | +49% · −6,3% | +32% | −4,2% | 4,5 | 45 d | −3,6% | +24% | 0,05 |
> | 221 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+270% · −40,5%** | +50% · −8,1% | +35% | −7,8% | 4,1 | 54 d | −1,8% | +27% | 0,30 |
> | 222 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+267% · −37,4%** | +50% · −7,1% | +35% | −6,7% | 4,1 | 46 d | −2,6% | +28% | 0,08 |
> | 223 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+328% · −37,8%** | +57% · −7,1% | +34% | −5,1% | 5,5 | 54 d | −4,1% | +23% | 0,18 |
> | 224 | Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+163% · −24,6%** | +53% · −7,5% | +33% | −5,8% | 5,0 | 61 d | −3,2% | +19% | 0,06 |
> | 225 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+274% · −37,2%** | +50% · −7,1% | +35% | −6,6% | 4,1 | 55 d | −2,0% | +29% | 0,20 |
> | 226 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+191% · −26,8%** | +39% · −4,8% | +27% | −5,0% | 4,8 | 56 d | −3,5% | +18% | 0,07 |
> | 227 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+142% · −15,2%** | +38% · −3,1% | +25% | −2,0% | 4,8 | 62 d | −2,9% | +22% | −0,04 |
> | 228 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+165% · −30,9%** | +37% · −6,3% | +28% | −5,8% | 3,7 | 38 d | −1,5% | +20% | 0,08 |
> | 229 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+237% · −39,0%** | +58% · −9,0% | +36% | −5,9% | 5,7 | 55 d | −4,1% | +24% | 0,15 |
> | 230 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+161% · −27,3%** | +37% · −5,2% | +28% | −5,4% | 3,9 | 47 d | −2,1% | +24% | 0,01 |
> | 231 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+286% · −44,2%** | +55% · −8,5% | +33% | −5,4% | 6,0 | 56 d | −4,2% | +18% | 0,24 |
> | 232 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+271% · −42,4%** | +52% · −8,6% | +36% | −8,7% | 4,3 | 57 d | −2,4% | +30% | 0,21 |
> | 233 | IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+184% · −20,8%** | +57% · −6,4% | +34% | −5,4% | 4,5 | 60 d | −2,9% | +26% | 0,23 |
> | 234 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+266% · −28,6%** | +48% · −5,3% | +29% | −3,8% | 4,7 | 35 d | −4,3% | +20% | 0,14 |
> | 235 | IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+128% · −17,8%** | +45% · −5,1% | +31% | −5,3% | 4,2 | 46 d | −3,2% | +26% | 0,22 |
> | 236 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+162% · −23,9%** | +37% · −4,4% | +27% | −4,3% | 4,4 | 61 d | −2,5% | +23% | 0,08 |
> | 237 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+195% · −25,9%** | +39% · −4,3% | +27% | −5,9% | 4,4 | 62 d | −2,5% | +23% | 0,12 |
> | 238 | MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+150% · −31,7%** | +42% · −8,2% | +31% | −7,6% | 3,7 | 38 d | −1,5% | +20% | 0,17 |
> | 239 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+197% · −25,1%** | +41% · −4,7% | +27% | −3,4% | 4,5 | 57 d | −3,1% | +19% | 0,07 |
> | 240 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+290% · −40,0%** | +51% · −8,0% | +33% | −6,8% | 4,3 | 55 d | −3,0% | +27% | 0,24 |

> [!example]- Combinações 241 a 270 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 241 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+342% · −45,4%** | +58% · −9,4% | +35% | −6,2% | 4,1 | 57 d | −2,0% | +25% | 0,18 |
> | 242 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+215% · −34,9%** | +44% · −6,5% | +31% | −6,0% | 4,2 | 61 d | −1,9% | +26% | 0,14 |
> | 243 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+269% · −32,1%** | +49% · −6,1% | +30% | −4,5% | 5,6 | 65 d | −2,9% | +20% | 0,17 |
> | 244 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+215% · −38,3%** | +44% · −7,5% | +31% | −7,3% | 4,1 | 57 d | −2,0% | +24% | 0,20 |
> | 245 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+256% · −33,5%** | +49% · −6,4% | +32% | −4,3% | 4,9 | 57 d | −3,7% | +24% | 0,06 |
> | 246 | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+177% · −28,6%** | +45% · −6,4% | +29% | −5,4% | 4,5 | 61 d | −2,9% | +17% | 0,13 |
> | 247 | MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+74% · −17,8%** | +32% · −5,6% | +25% | −5,6% | 3,8 | 53 d | −1,0% | +19% | 0,07 |
> | 248 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+93% · −16,7%** | +27% · −2,7% | +22% | −2,7% | 4,2 | 64 d | −1,0% | +19% | 0,02 |
> | 249 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+342% · −33,8%** | +56% · −6,7% | +34% | −5,4% | 5,3 | 64 d | −3,4% | +24% | 0,20 |
> | 250 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+276% · −44,3%** | +54% · −8,2% | +35% | −6,8% | 5,2 | 38 d | −4,7% | +26% | 0,22 |
> | 251 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+214% · −31,7%** | +43% · −5,8% | +31% | −5,1% | 4,1 | 46 d | −3,5% | +25% | 0,02 |
> | 252 | IFR ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+269% · −40,1%** | +60% · −10,3% | +37% | −9,0% | 4,3 | 38 d | −4,0% | +32% | 0,30 |
> | 253 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+148% · −17,1%** | +39% · −3,3% | +25% | −2,2% | 5,8 | 67 d | −2,1% | +19% | 0,04 |
> | 254 | IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+286% · −43,3%** | +52% · −8,9% | +33% | −8,1% | 4,1 | 38 d | −3,5% | +29% | 0,26 |
> | 255 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+196% · −23,4%** | +39% · −3,7% | +27% | −5,0% | 4,6 | 64 d | −2,8% | +22% | 0,05 |
> | 256 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+185% · −39,9%** | +49% · −9,7% | +32% | −4,1% | 5,9 | 63 d | −4,0% | +18% | −0,01 |
> | 257 | MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+228% · −36,3%** | +44% · −6,8% | +30% | −6,5% | 4,1 | 58 d | −2,5% | +21% | 0,17 |
> | 258 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+237% · −31,6%** | +46% · −6,1% | +28% | −4,2% | 4,9 | 65 d | −2,6% | +23% | 0,05 |
> | 259 | IFR ·TEN + Quinta ·QUI ⚠️ | **+76% · −11,3%** | +42% · −5,2% | +30% | −3,6% | 4,2 | 57 d | −3,0% | +22% | −0,11 |
> | 260 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+332% · −37,8%** | +57% · −7,2% | +34% | −5,1% | 5,2 | 54 d | −4,4% | +24% | 0,18 |
> | 261 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+270% · −37,4%** | +51% · −7,1% | +35% | −6,7% | 4,0 | 53 d | −2,9% | +27% | 0,14 |
> | 262 | IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+156% · −30,9%** | +53% · −10,2% | +36% | −9,0% | 4,4 | 57 d | −3,5% | +21% | 0,35 |
> | 263 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+253% · −31,8%** | +48% · −5,7% | +31% | −4,6% | 5,3 | 65 d | −3,0% | +24% | −0,01 |
> | 264 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+214% · −35,1%** | +44% · −6,5% | +31% | −6,1% | 4,1 | 57 d | −2,6% | +26% | 0,06 |
> | 265 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+83% · −17,2%** | +28% · −3,8% | +23% | −3,8% | 4,1 | 64 d | −1,0% | +18% | 0,02 |
> | 266 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+192% · −27,5%** | +40% · −4,8% | +27% | −6,1% | 4,3 | 54 d | −3,5% | +17% | 0,19 |
> | 267 | IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+199% · −29,4%** | +40% · −5,0% | +27% | −4,9% | 4,0 | 56 d | −2,7% | +23% | 0,09 |
> | 268 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+227% · −46,1%** | +48% · −9,2% | +32% | −6,5% | 5,4 | 63 d | −4,0% | +20% | 0,20 |
> | 269 | IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+290% · −40,1%** | +51% · −7,9% | +33% | −6,9% | 4,2 | 53 d | −3,6% | +28% | 0,16 |
> | 270 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+251% · −45,1%** | +50% · −9,8% | +33% | −6,9% | 4,5 | 44 d | −4,3% | +19% | 0,25 |

> [!example]- Combinações 271 a 300 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 271 | ADX ·ADX + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+318% · −45,4%** | +69% · −12,0% | +39% | −8,2% | 4,1 | 55 d | −3,2% | +28% | 0,35 |
> | 272 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+98% · −14,4%** | +31% · −3,0% | +23% | −2,4% | 3,8 | 57 d | −1,1% | +20% | 0,05 |
> | 273 | 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+219% · −30,9%** | +42% · −5,4% | +28% | −4,5% | 4,1 | 53 d | −3,5% | +22% | 0,11 |
> | 274 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+270% · −37,4%** | +50% · −6,8% | +31% | −3,5% | 5,2 | 63 d | −3,9% | +19% | 0,05 |
> | 275 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+72% · −14,9%** | +31% · −4,6% | +25% | −3,9% | 4,8 | 66 d | −2,3% | +20% | −0,09 |
> | 276 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+160% · −23,9%** | +36% · −4,6% | +27% | −4,3% | 4,2 | 61 d | −2,8% | +24% | 0,07 |
> | 277 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+180% · −31,4%** | +39% · −5,7% | +28% | −6,0% | 4,5 | 62 d | −3,5% | +19% | 0,01 |
> | 278 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+333% · −43,0%** | +61% · −8,7% | +38% | −7,4% | 5,3 | 44 d | −4,9% | +28% | 0,23 |
> | 279 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+126% · −14,2%** | +45% · −4,3% | +31% | −3,8% | 4,2 | 59 d | −3,1% | +24% | −0,08 |
> | 280 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+158% · −28,1%** | +44% · −6,8% | +28% | −5,5% | 4,9 | 65 d | −3,1% | +20% | 0,13 |
> | 281 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+188% · −38,0%** | +49% · −9,0% | +32% | −4,3% | 5,6 | 63 d | −4,2% | +19% | −0,00 |
> | 282 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+289% · −41,2%** | +55% · −7,5% | +33% | −4,4% | 5,7 | 57 d | −4,6% | +20% | 0,08 |
> | 283 | Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+225% · −32,9%** | +44% · −6,0% | +30% | −5,9% | 4,3 | 63 d | −2,8% | +26% | 0,04 |
> | 284 | 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+202% · −27,0%** | +48% · −5,9% | +31% | −4,5% | 4,2 | 51 d | −3,8% | +25% | 0,10 |
> | 285 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+178% · −26,7%** | +45% · −6,4% | +29% | −6,7% | 4,7 | 56 d | −4,2% | +19% | 0,16 |
> | 286 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+213% · −22,7%** | +42% · −4,3% | +30% | −4,1% | 4,4 | 63 d | −3,4% | +23% | 0,03 |
> | 287 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+252% · −29,9%** | +57% · −7,2% | +33% | −4,9% | 5,4 | 65 d | −3,6% | +22% | 0,12 |
> | 288 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+269% · −28,7%** | +48% · −5,9% | +29% | −3,4% | 4,1 | 47 d | −3,9% | +22% | 0,06 |
> | 289 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+355% · −44,2%** | +61% · −8,8% | +38% | −6,1% | 4,2 | 55 d | −3,6% | +28% | 0,13 |
> | 290 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+341% · −45,2%** | +60% · −10,2% | +38% | −7,3% | 5,4 | 35 d | −5,2% | +23% | 0,29 |
> | 291 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+408% · −48,2%** | +65% · −10,1% | +38% | −6,8% | 4,1 | 60 d | −2,8% | +28% | 0,30 |
> | 292 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+265% · −52,2%** | +54% · −11,0% | +35% | −7,0% | 5,2 | 55 d | −4,6% | +19% | 0,25 |
> | 293 | IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+136% · −16,7%** | +46% · −4,8% | +28% | −3,3% | 5,5 | 67 d | −2,8% | +21% | 0,03 |
> | 294 | Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+167% · −28,2%** | +36% · −4,7% | +25% | −3,9% | 4,0 | 42 d | −3,7% | +19% | 0,08 |
> | 295 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+190% · −35,0%** | +41% · −6,4% | +31% | −7,1% | 3,7 | 49 d | −2,5% | +28% | 0,06 |
> | 296 | IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+266% · −40,7%** | +51% · −8,1% | +35% | −7,9% | 3,8 | 54 d | −2,6% | +28% | 0,25 |
> | 297 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+227% · −29,8%** | +43% · −5,1% | +29% | −4,9% | 4,6 | 63 d | −3,7% | +25% | 0,14 |
> | 298 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+256% · −30,5%** | +48% · −5,7% | +31% | −4,6% | 5,0 | 65 d | −3,3% | +25% | 0,02 |
> | 299 | ADX ·ADX + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+337% · −48,3%** | +58% · −10,3% | +35% | −7,4% | 3,9 | 55 d | −2,9% | +25% | 0,28 |
> | 300 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+84% · −17,3%** | +29% · −3,8% | +23% | −3,7% | 3,9 | 64 d | −1,0% | +20% | 0,01 |

> [!example]- Combinações 301 a 330 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 301 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+252% · −37,2%** | +48% · −7,3% | +31% | −5,5% | 4,7 | 65 d | −3,1% | +22% | 0,17 |
> | 302 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+153% · −18,9%** | +35% · −2,8% | +25% | −2,6% | 3,9 | 60 d | −2,3% | +22% | 0,04 |
> | 303 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+250% · −31,7%** | +46% · −6,0% | +30% | −7,0% | 4,5 | 60 d | −3,8% | +21% | 0,16 |
> | 304 | Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+102% · −23,2%** | +32% · −5,0% | +25% | −4,4% | 3,6 | 33 d | −3,0% | +18% | 0,06 |
> | 305 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+296% · −44,0%** | +55% · −9,1% | +38% | −9,2% | 3,8 | 53 d | −3,0% | +28% | 0,31 |
> | 306 | IFR ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+197% · −35,0%** | +50% · −8,5% | +35% | −8,1% | 4,1 | 57 d | −3,4% | +30% | 0,08 |
> | 307 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+282% · −40,0%** | +54% · −8,1% | +35% | −6,7% | 4,4 | 57 d | −3,9% | +27% | 0,22 |
> | 308 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+144% · −14,2%** | +38% · −3,1% | +25% | −2,1% | 4,4 | 64 d | −3,3% | +21% | −0,00 |
> | 309 | IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+250% · −37,3%** | +59% · −9,3% | +39% | −8,8% | 3,9 | 54 d | −3,2% | +30% | 0,26 |
> | 310 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+161% · −20,9%** | +36% · −4,0% | +27% | −3,6% | 4,1 | 63 d | −2,7% | +21% | −0,01 |
> | 311 | IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+211% · −38,5%** | +44% · −7,5% | +31% | −7,4% | 3,9 | 57 d | −2,7% | +28% | 0,13 |
> | 312 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+379% · −32,6%** | +58% · −6,4% | +34% | −4,0% | 6,2 | 64 d | −4,4% | +24% | 0,11 |
> | 313 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+371% · −51,2%** | +63% · −11,3% | +38% | −8,7% | 3,9 | 55 d | −3,2% | +28% | 0,39 |
> | 314 | MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+198% · −35,8%** | +41% · −6,7% | +28% | −6,4% | 3,8 | 38 d | −3,5% | +22% | 0,17 |
> | 315 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+263% · −43,2%** | +50% · −8,8% | +34% | −5,9% | 4,1 | 54 d | −3,7% | +22% | 0,18 |
> | 316 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+234% · −40,2%** | +58% · −9,5% | +36% | −5,8% | 5,8 | 47 d | −5,2% | +23% | 0,14 |
> | 317 | 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+144% · −24,6%** | +39% · −5,7% | +25% | −3,8% | 4,5 | 65 d | −2,9% | +20% | 0,09 |
> | 318 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+192% · −35,0%** | +42% · −6,4% | +31% | −7,1% | 3,6 | 49 d | −2,3% | +27% | 0,09 |
> | 319 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+235% · −33,8%** | +46% · −6,7% | +28% | −5,1% | 4,7 | 65 d | −3,1% | +21% | 0,14 |
> | 320 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+225% · −33,5%** | +44% · −6,3% | +30% | −8,4% | 4,3 | 61 d | −3,6% | +20% | 0,23 |
> | 321 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+182% · −29,7%** | +38% · −5,3% | +28% | −2,6% | 4,6 | 64 d | −3,6% | +22% | −0,02 |
> | 322 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+287% · −38,2%** | +53% · −7,8% | +34% | −8,0% | 4,6 | 65 d | −3,2% | +28% | 0,14 |
> | 323 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+201% · −35,9%** | +44% · −7,1% | +29% | −7,4% | 4,5 | 65 d | −3,0% | +24% | 0,15 |
> | 324 | IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+89% · −14,4%** | +35% · −4,0% | +25% | −3,3% | 3,7 | 57 d | −2,0% | +21% | 0,05 |
> | 325 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+276% · −44,6%** | +51% · −8,4% | +31% | −5,9% | 3,7 | 57 d | −2,3% | +21% | 0,14 |
> | 326 | 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+285% · −35,2%** | +51% · −6,5% | +33% | −6,2% | 4,1 | 60 d | −3,4% | +27% | 0,13 |
> | 327 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+154% · −30,5%** | +37% · −5,4% | +26% | −5,8% | 5,1 | 67 d | −3,0% | +19% | 0,05 |
> | 328 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+314% · −50,4%** | +56% · −9,5% | +34% | −7,2% | 3,8 | 57 d | −2,6% | +26% | 0,19 |
> | 329 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+151% · −39,9%** | +36% · −7,5% | +26% | −3,5% | 5,0 | 63 d | −4,3% | +14% | 0,09 |
> | 330 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+279% · −38,5%** | +51% · −7,4% | +33% | −6,2% | 4,4 | 50 d | −4,5% | +19% | 0,23 |

> [!example]- Combinações 331 a 360 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 331 | IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+198% · −38,3%** | +50% · −9,7% | +35% | −9,5% | 4,1 | 57 d | −3,5% | +25% | 0,37 |
> | 332 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+179% · −23,8%** | +44% · −5,1% | +29% | −6,7% | 4,1 | 63 d | −3,0% | +24% | 0,09 |
> | 333 | IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+200% · −35,0%** | +51% · −8,5% | +35% | −8,1% | 3,9 | 57 d | −3,1% | +29% | 0,14 |
> | 334 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+229% · −25,9%** | +43% · −4,3% | +29% | −4,1% | 4,4 | 64 d | −3,5% | +22% | 0,03 |
> | 335 | Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+228% · −32,9%** | +44% · −6,0% | +30% | −6,0% | 4,1 | 63 d | −3,0% | +26% | 0,06 |
> | 336 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+160% · −28,1%** | +44% · −6,8% | +28% | −5,5% | 4,5 | 65 d | −3,2% | +21% | 0,11 |
> | 337 | Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+147% · −27,2%** | +41% · −6,4% | +31% | −6,9% | 3,9 | 63 d | −2,7% | +25% | −0,01 |
> | 338 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+294% · −40,8%** | +65% · −10,5% | +40% | −6,4% | 6,0 | 36 d | −5,6% | +20% | 0,24 |
> | 339 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+308% · −39,0%** | +56% · −7,5% | +36% | −4,9% | 4,8 | 65 d | −3,6% | +26% | 0,11 |
> | 340 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+255% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,7 | 51 d | −3,2% | +25% | 0,19 |
> | 341 | IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+319% · −46,5%** | +56% · −9,9% | +36% | −9,3% | 4,0 | 57 d | −3,5% | +30% | 0,36 |
> | 342 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+183% · −30,1%** | +39% · −5,5% | +28% | −6,0% | 4,3 | 62 d | −3,8% | +18% | 0,05 |
> | 343 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+315% · −43,8%** | +57% · −8,7% | +36% | −6,0% | 3,9 | 55 d | −3,5% | +27% | 0,12 |
> | 344 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+224% · −50,8%** | +47% · −10,7% | +32% | −5,1% | 4,9 | 38 d | −5,3% | +17% | 0,08 |
> | 345 | Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+152% · −28,1%** | +41% · −6,3% | +27% | −5,3% | 4,1 | 53 d | −4,1% | +18% | 0,11 |
> | 346 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+312% · −37,0%** | +56% · −6,9% | +36% | −4,9% | 4,6 | 65 d | −3,5% | +27% | 0,15 |
> | 347 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+175% · −35,8%** | +40% · −6,9% | +27% | −3,9% | 4,9 | 65 d | −3,8% | +19% | 0,05 |
> | 348 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+273% · −47,6%** | +55% · −9,3% | +35% | −8,1% | 4,8 | 54 d | −4,9% | +24% | 0,37 |
> | 349 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+145% · −25,8%** | +52% · −8,4% | +32% | −6,3% | 5,1 | 65 d | −4,0% | +23% | 0,05 |
> | 350 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+282% · −49,5%** | +54% · −9,6% | +36% | −5,7% | 4,7 | 54 d | −4,8% | +21% | 0,15 |
> | 351 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+180% · −38,2%** | +38% · −7,7% | +28% | −3,8% | 4,2 | 64 d | −3,4% | +19% | 0,03 |
> | 352 | Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+138% · −24,1%** | +48% · −7,3% | +30% | −5,6% | 4,3 | 42 d | −4,8% | +21% | 0,11 |
> | 353 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+279% · −38,0%** | +53% · −7,6% | +33% | −6,0% | 4,8 | 47 d | −5,2% | +20% | 0,20 |
> | 354 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+240% · −42,0%** | +48% · −8,5% | +34% | −8,6% | 3,8 | 57 d | −3,2% | +29% | 0,18 |
> | 355 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+303% · −32,7%** | +54% · −6,3% | +32% | −5,1% | 4,0 | 45 d | −4,4% | +24% | 0,12 |
> | 356 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+210% · −27,9%** | +43% · −4,8% | +30% | −5,5% | 4,4 | 65 d | −3,3% | +26% | 0,15 |
> | 357 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+205% · −41,0%** | +44% · −8,1% | +31% | −6,6% | 3,8 | 55 d | −3,6% | +17% | 0,25 |
> | 358 | MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+256% · −38,0%** | +47% · −7,4% | +31% | −7,0% | 3,7 | 52 d | −3,4% | +25% | 0,28 |
> | 359 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+237% · −33,2%** | +57% · −8,2% | +36% | −5,7% | 4,3 | 45 d | −4,8% | +27% | 0,17 |
> | 360 | Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+149% · −27,2%** | +42% · −6,4% | +31% | −7,0% | 3,7 | 63 d | −2,4% | +24% | 0,04 |

> [!example]- Combinações 361 a 390 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 361 | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+159% · −32,6%** | +37% · −6,0% | +28% | −6,1% | 3,7 | 63 d | −1,9% | +23% | 0,07 |
> | 362 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+234% · −41,5%** | +48% · −9,0% | +34% | −7,9% | 3,8 | 55 d | −3,6% | +22% | 0,28 |
> | 363 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+166% · −31,1%** | +43% · −7,3% | +31% | −3,7% | 4,5 | 64 d | −4,1% | +22% | −0,08 |
> | 364 | GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+184% · −42,9%** | +49% · −11,1% | +32% | −5,5% | 5,3 | 63 d | −4,8% | +17% | 0,19 |
> | 365 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+341% · −38,7%** | +56% · −6,9% | +33% | −4,0% | 3,8 | 63 d | −2,6% | +23% | 0,12 |
> | 366 | GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+233% · −43,8%** | +58% · −10,9% | +36% | −7,4% | 5,3 | 54 d | −5,2% | +21% | 0,36 |
> | 367 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+336% · −36,0%** | +56% · −7,2% | +33% | −5,6% | 4,3 | 65 d | −3,2% | +25% | 0,12 |
> | 368 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+237% · −31,5%** | +56% · −7,4% | +35% | −6,1% | 4,6 | 65 d | −3,8% | +25% | 0,09 |
> | 369 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+87% · −13,2%** | +35% · −4,0% | +25% | −2,2% | 3,5 | 59 d | −1,6% | +18% | −0,00 |
> | 370 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+268% · −39,1%** | +50% · −8,0% | +31% | −7,5% | 4,5 | 65 d | −3,7% | +26% | 0,19 |
> | 371 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+142% · −17,8%** | +39% · −3,5% | +27% | −3,6% | 3,8 | 63 d | −2,8% | +24% | 0,09 |
> | 372 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+157% · −29,9%** | +37% · −5,6% | +26% | −5,8% | 4,7 | 67 d | −3,1% | +20% | 0,04 |
> | 373 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+188% · −33,8%** | +50% · −8,5% | +32% | −8,4% | 4,7 | 65 d | −3,9% | +28% | 0,15 |
> | 374 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+210% · −22,7%** | +42% · −4,2% | +30% | −4,3% | 4,0 | 63 d | −3,5% | +24% | −0,02 |
> | 375 | Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+210% · −32,8%** | +51% · −7,7% | +33% | −7,6% | 4,1 | 63 d | −3,7% | +29% | 0,12 |
> | 376 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+180% · −38,1%** | +39% · −7,7% | +28% | −6,9% | 4,0 | 62 d | −3,5% | +20% | 0,17 |
> | 377 | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+225% · −36,4%** | +44% · −6,8% | +30% | −6,6% | 3,9 | 63 d | −3,0% | +25% | 0,15 |
> | 378 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+238% · −33,8%** | +46% · −6,7% | +28% | −5,1% | 4,4 | 65 d | −3,5% | +22% | 0,12 |
> | 379 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+375% · −39,0%** | +63% · −7,8% | +35% | −5,4% | 5,6 | 48 d | −5,6% | +21% | 0,18 |
> | 380 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+118% · −13,0%** | +34% · −2,6% | +25% | −1,5% | 7,0 | 76 d | −1,0% | +19% | −0,03 |
> | 381 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+335% · −46,2%** | +57% · −10,0% | +35% | −6,4% | 5,1 | 58 d | −5,1% | +22% | 0,25 |
> | 382 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+212% · −34,2%** | +43% · −6,5% | +31% | −9,6% | 4,0 | 62 d | −3,6% | +21% | 0,18 |
> | 383 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+140% · −15,9%** | +38% · −3,5% | +27% | −2,6% | 3,7 | 59 d | −2,8% | +21% | −0,01 |
> | 384 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+246% · −40,0%** | +47% · −7,3% | +29% | −5,4% | 3,6 | 57 d | −2,6% | +22% | 0,10 |
> | 385 | GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+326% · −41,1%** | +57% · −8,2% | +34% | −6,4% | 5,1 | 60 d | −5,0% | +22% | 0,31 |
> | 386 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+167% · −31,1%** | +44% · −7,4% | +31% | −7,9% | 4,3 | 62 d | −4,3% | +20% | 0,11 |
> | 387 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+214% · −44,1%** | +55% · −11,2% | +36% | −7,0% | 5,2 | 63 d | −4,9% | +23% | 0,18 |
> | 388 | MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+261% · −40,0%** | +49% · −7,8% | +33% | −7,8% | 3,9 | 63 d | −3,4% | +29% | 0,19 |
> | 389 | Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+90% · −23,8%** | +36% · −7,4% | +27% | −6,4% | 3,5 | 40 d | −3,4% | +16% | 0,06 |
> | 390 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+301% · −46,7%** | +58% · −9,1% | +37% | −7,0% | 5,6 | 63 d | −5,1% | +29% | 0,20 |

> [!example]- Combinações 391 a 420 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 391 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+207% · −42,1%** | +45% · −8,9% | +28% | −4,4% | 5,3 | 63 d | −5,0% | +16% | 0,09 |
> | 392 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+219% · −31,6%** | +53% · −7,9% | +31% | −5,6% | 4,5 | 65 d | −3,8% | +23% | 0,11 |
> | 393 | MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+183% · −32,1%** | +46% · −7,6% | +31% | −6,9% | 3,6 | 42 d | −3,8% | +25% | 0,22 |
> | 394 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+216% · −32,2%** | +43% · −6,1% | +27% | −5,9% | 4,3 | 65 d | −3,6% | +22% | 0,05 |
> | 395 | MACD ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+176% · −34,9%** | +47% · −8,4% | +34% | −9,3% | 3,5 | 49 d | −3,4% | +30% | 0,17 |
> | 396 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+142% · −27,7%** | +41% · −6,2% | +28% | −6,5% | 4,9 | 67 d | −3,7% | +22% | −0,03 |
> | 397 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+288% · −28,7%** | +50% · −4,8% | +32% | −5,0% | 4,4 | 63 d | −4,3% | +26% | 0,11 |
> | 398 | 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+204% · −30,9%** | +49% · −7,1% | +31% | −6,0% | 3,9 | 56 d | −4,1% | +23% | 0,23 |
> | 399 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+319% · −43,6%** | +57% · −8,6% | +36% | −6,0% | 3,8 | 55 d | −3,8% | +26% | 0,15 |
> | 400 | IFR ·TEN + Pullback ·PUL | **+96% · −12,9%** | +51% · −5,9% | +34% | −3,5% | 6,6 | 73 d | −3,1% | +21% | −0,08 |
> | 401 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+334% · −30,5%** | +55% · −5,8% | +32% | −4,5% | 4,6 | 64 d | −4,5% | +25% | 0,11 |
> | 402 | ADX ·ADX + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+227% · −43,2%** | +55% · −9,9% | +33% | −6,8% | 3,6 | 55 d | −3,2% | +25% | 0,16 |
> | 403 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+182% · −37,4%** | +39% · −7,4% | +28% | −3,8% | 4,1 | 64 d | −3,7% | +20% | 0,06 |
> | 404 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+306% · −43,9%** | +57% · −8,9% | +36% | −6,2% | 4,4 | 65 d | −3,9% | +25% | 0,29 |
> | 405 | Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+153% · −24,1%** | +40% · −5,0% | +27% | −3,7% | 3,8 | 54 d | −4,1% | +21% | 0,09 |
> | 406 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+338% · −30,5%** | +55% · −5,8% | +32% | −4,5% | 4,6 | 64 d | −4,5% | +24% | 0,13 |
> | 407 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+148% · −25,8%** | +52% · −8,4% | +32% | −6,3% | 4,7 | 65 d | −4,2% | +25% | 0,03 |
> | 408 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+139% · −37,7%** | +40% · −9,1% | +28% | −3,6% | 4,6 | 49 d | −5,3% | +15% | 0,00 |
> | 409 | IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+184% · −34,8%** | +61% · −11,8% | +41% | −11,1% | 4,4 | 57 d | −4,8% | +30% | 0,51 |
> | 410 | IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+197% · −29,4%** | +40% · −5,0% | +27% | −5,0% | 3,7 | 63 d | −3,0% | +23% | 0,09 |
> | 411 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+217% · −31,5%** | +43% · −5,8% | +31% | −5,1% | 4,1 | 64 d | −3,8% | +26% | 0,06 |
> | 412 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+209% · −32,8%** | +43% · −6,0% | +31% | −5,6% | 4,0 | 56 d | −4,3% | +27% | −0,00 |
> | 413 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+222% · −30,7%** | +43% · −5,4% | +28% | −4,5% | 3,7 | 56 d | −3,7% | +23% | 0,14 |
> | 414 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+161% · −31,9%** | +37% · −5,7% | +28% | −6,1% | 3,5 | 63 d | −2,1% | +25% | 0,09 |
> | 415 | Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+154% · −28,2%** | +41% · −6,3% | +27% | −5,3% | 3,8 | 48 d | −4,4% | +19% | 0,10 |
> | 416 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+201% · −34,7%** | +42% · −6,5% | +29% | −4,2% | 4,3 | 65 d | −3,8% | +20% | −0,02 |
> | 417 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+242% · −42,0%** | +49% · −8,5% | +34% | −8,6% | 3,5 | 58 d | −2,6% | +29% | 0,21 |
> | 418 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+147% · −23,8%** | +41% · −5,4% | +29% | −5,6% | 3,8 | 61 d | −3,7% | +26% | 0,18 |
> | 419 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+185% · −35,9%** | +50% · −9,2% | +32% | −9,5% | 4,5 | 65 d | −4,1% | +25% | 0,33 |
> | 420 | MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+184% · −35,8%** | +47% · −8,9% | +31% | −8,4% | 3,6 | 40 d | −4,1% | +23% | 0,30 |

> [!example]- Combinações 421 a 450 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 421 | ADX ·ADX + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+345% · −49,1%** | +62% · −10,5% | +39% | −8,5% | 3,7 | 56 d | −3,6% | +29% | 0,32 |
> | 422 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+169% · −29,2%** | +43% · −6,8% | +31% | −3,7% | 4,4 | 64 d | −4,5% | +23% | −0,01 |
> | 423 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+334% · −32,6%** | +55% · −6,1% | +32% | −5,4% | 4,2 | 64 d | −4,2% | +24% | 0,24 |
> | 424 | MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+239% · −34,5%** | +54% · −8,4% | +35% | −7,6% | 3,6 | 52 d | −3,8% | +26% | 0,37 |
> | 425 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+220% · −26,8%** | +42% · −4,3% | +28% | −3,2% | 3,7 | 60 d | −3,5% | +24% | 0,09 |
> | 426 | Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+245% · −44,4%** | +50% · −9,1% | +33% | −7,0% | 4,4 | 63 d | −4,7% | +24% | 0,22 |
> | 427 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+184% · −25,8%** | +47% · −6,1% | +29% | −4,5% | 3,9 | 57 d | −4,3% | +20% | 0,11 |
> | 428 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+357% · −44,5%** | +62% · −9,2% | +37% | −7,6% | 4,9 | 54 d | −5,6% | +27% | 0,41 |
> | 429 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+193% · −28,1%** | +41% · −4,9% | +30% | −5,1% | 3,6 | 61 d | −3,3% | +23% | 0,06 |
> | 430 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+278% · −47,7%** | +52% · −9,3% | +32% | −7,0% | 3,5 | 56 d | −3,1% | +25% | 0,22 |
> | 431 | Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+92% · −22,9%** | +37% · −7,0% | +27% | −6,4% | 3,4 | 38 d | −3,6% | +18% | 0,06 |
> | 432 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+305% · −43,9%** | +60% · −9,2% | +36% | −6,8% | 5,0 | 56 d | −5,5% | +28% | 0,21 |
> | 433 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+201% · −34,9%** | +50% · −8,5% | +35% | −8,0% | 4,0 | 69 d | −2,1% | +28% | 0,23 |
> | 434 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+184% · −26,1%** | +39% · −4,4% | +28% | −6,0% | 3,3 | 59 d | −2,1% | +24% | 0,11 |
> | 435 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+274% · −41,8%** | +51% · −8,0% | +31% | −5,1% | 3,3 | 57 d | −2,2% | +21% | 0,20 |
> | 436 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+271% · −39,0%** | +51% · −8,0% | +31% | −7,5% | 4,3 | 65 d | −4,1% | +27% | 0,18 |
> | 437 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+215% · −24,3%** | +41% · −3,8% | +27% | −3,6% | 4,8 | 75 d | −1,9% | +23% | 0,10 |
> | 438 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+145% · −26,9%** | +41% · −6,3% | +28% | −6,4% | 4,5 | 67 d | −3,8% | +23% | −0,03 |
> | 439 | Quinta ·QUI + Tendência ·TEN ⚠️ | **+80% · −21,7%** | +45% · −9,8% | +32% | −7,4% | 3,9 | 51 d | −4,7% | +19% | −0,11 |
> | 440 | Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+147% · −31,8%** | +42% · −7,5% | +31% | −7,9% | 3,5 | 63 d | −2,8% | +25% | 0,18 |
> | 441 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+245% · −30,7%** | +47% · −5,3% | +33% | −7,0% | 3,9 | 63 d | −4,1% | +26% | 0,13 |
> | 442 | Pullback ·PUL + Rompe 200 ·ROM | **+41% · −19,7%** | +27% · −9,7% | +21% | −5,3% | 4,5 | 75 d | −0,8% | +11% | 0,30 |
> | 443 | ADX ·ADX + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+364% · −51,6%** | +63% · −11,3% | +38% | −8,8% | 3,7 | 55 d | −4,0% | +28% | 0,29 |
> | 444 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+383% · −40,8%** | +62% · −7,8% | +39% | −5,4% | 5,7 | 64 d | −5,4% | +24% | 0,17 |
> | 445 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+313% · −46,8%** | +57% · −9,7% | +36% | −7,2% | 3,6 | 60 d | −3,5% | +28% | 0,25 |
> | 446 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+124% · −23,3%** | +36% · −4,9% | +27% | −5,4% | 3,2 | 57 d | −1,1% | +23% | 0,13 |
> | 447 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+315% · −46,0%** | +60% · −8,9% | +36% | −7,8% | 5,1 | 57 d | −5,6% | +24% | 0,25 |
> | 448 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+341% · −43,8%** | +57% · −8,4% | +35% | −5,5% | 3,9 | 64 d | −3,8% | +26% | 0,14 |
> | 449 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+214% · −37,0%** | +43% · −7,2% | +31% | −6,3% | 3,7 | 64 d | −3,5% | +23% | 0,14 |
> | 450 | Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+299% · −36,2%** | +54% · −6,8% | +32% | −6,2% | 3,9 | 47 d | −4,8% | +28% | 0,24 |

> [!example]- Combinações 451 a 480 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 451 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+149% · −20,4%** | +41% · −4,7% | +29% | −4,7% | 3,7 | 63 d | −3,6% | +22% | 0,01 |
> | 452 | 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+167% · −37,9%** | +44% · −9,8% | +31% | −5,2% | 4,0 | 64 d | −4,2% | +20% | 0,11 |
> | 453 | ADX ·ADX + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+243% · −43,1%** | +48% · −8,3% | +29% | −5,8% | 3,4 | 59 d | −2,8% | +22% | 0,13 |
> | 454 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+108% · −12,9%** | +40% · −3,5% | +28% | −1,8% | 6,3 | 79 d | −1,6% | +20% | −0,09 |
> | 455 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+287% · −49,1%** | +56% · −10,0% | +34% | −4,8% | 5,7 | 63 d | −5,6% | +19% | 0,09 |
> | 456 | Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+91% · −18,6%** | +36% · −5,5% | +27% | −4,3% | 3,4 | 55 d | −3,3% | +20% | 0,04 |
> | 457 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+201% · −20,8%** | +47% · −4,4% | +29% | −3,7% | 4,8 | 75 d | −2,3% | +23% | 0,10 |
> | 458 | MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+128% · −30,3%** | +38% · −7,0% | +28% | −7,5% | 3,2 | 40 d | −3,4% | +21% | 0,14 |
> | 459 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+219% · −32,2%** | +44% · −6,1% | +27% | −5,8% | 4,1 | 65 d | −3,9% | +23% | 0,03 |
> | 460 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+304% · −29,8%** | +51% · −5,6% | +31% | −2,6% | 6,2 | 77 d | −2,3% | +20% | 0,05 |
> | 461 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+346% · −41,4%** | +61% · −8,2% | +33% | −5,0% | 3,9 | 52 d | −4,8% | +24% | 0,26 |
> | 462 | IFR ·TEN + Rompe 200 ·ROM | **+78% · −14,3%** | +43% · −6,8% | +30% | −5,6% | 3,2 | 58 d | −1,3% | +20% | 0,34 |
> | 463 | Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+136% · −27,1%** | +49% · −8,8% | +35% | −9,6% | 3,8 | 63 d | −3,9% | +26% | 0,11 |
> | 464 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+163% · −33,4%** | +45% · −7,2% | +30% | −3,8% | 4,7 | 65 d | −4,7% | +21% | 0,01 |
> | 465 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+252% · −38,8%** | +51% · −7,7% | +34% | −8,2% | 4,8 | 65 d | −4,8% | +31% | 0,18 |
> | 466 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+366% · −35,7%** | +60% · −7,0% | +35% | −6,9% | 4,2 | 54 d | −5,2% | +28% | 0,25 |
> | 467 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+300% · −32,7%** | +53% · −6,1% | +32% | −5,1% | 4,1 | 45 d | −5,3% | +25% | 0,11 |
> | 468 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+281% · −46,7%** | +52% · −9,2% | +32% | −7,1% | 3,3 | 56 d | −2,9% | +24% | 0,22 |
> | 469 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+270% · −41,9%** | +55% · −7,7% | +35% | −6,9% | 5,0 | 61 d | −5,5% | +30% | 0,13 |
> | 470 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+191% · −31,9%** | +41% · −5,7% | +30% | −6,4% | 4,1 | 67 d | −3,4% | +26% | 0,17 |
> | 471 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+227% · −49,3%** | +47% · −10,2% | +32% | −5,1% | 4,8 | 55 d | −5,7% | +18% | 0,07 |
> | 472 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+200% · −32,8%** | +49% · −8,0% | +35% | −6,8% | 4,0 | 64 d | −4,3% | +27% | 0,10 |
> | 473 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+204% · −32,6%** | +43% · −6,3% | +29% | −4,2% | 4,0 | 65 d | −3,9% | +21% | −0,01 |
> | 474 | MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+189% · −38,4%** | +42% · −7,4% | +31% | −8,3% | 3,4 | 63 d | −2,4% | +28% | 0,18 |
> | 475 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+273% · −35,5%** | +50% · −6,2% | +31% | −3,5% | 5,0 | 69 d | −4,3% | +20% | 0,05 |
> | 476 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+200% · −32,2%** | +41% · −5,7% | +28% | −5,2% | 3,4 | 54 d | −3,5% | +24% | 0,15 |
> | 477 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+157% · −32,3%** | +36% · −6,0% | +26% | −3,7% | 3,7 | 64 d | −3,5% | +22% | 0,05 |
> | 478 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+127% · −31,4%** | +32% · −5,9% | +23% | −3,0% | 5,0 | 76 d | −2,5% | +16% | 0,02 |
> | 479 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+191% · −28,1%** | +41% · −4,8% | +30% | −5,1% | 3,6 | 63 d | −3,6% | +24% | 0,04 |
> | 480 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+253% · −44,7%** | +49% · −9,4% | +32% | −3,6% | 4,6 | 67 d | −4,3% | +22% | −0,01 |

> [!example]- Combinações 481 a 510 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 481 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+223% · −32,2%** | +45% · −6,1% | +29% | −5,1% | 4,1 | 67 d | −3,5% | +26% | 0,02 |
> | 482 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+335% · −41,9%** | +61% · −8,3% | +39% | −8,1% | 4,3 | 65 d | −4,5% | +30% | 0,35 |
> | 483 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+222% · −31,6%** | +53% · −7,9% | +31% | −5,6% | 4,2 | 65 d | −4,3% | +25% | 0,09 |
> | 484 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+367% · −39,4%** | +60% · −7,9% | +35% | −5,5% | 4,5 | 37 d | −6,0% | +23% | 0,20 |
> | 485 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+264% · −33,7%** | +48% · −6,2% | +32% | −5,9% | 3,9 | 62 d | −4,4% | +25% | 0,15 |
> | 486 | MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+201% · −35,8%** | +41% · −6,8% | +28% | −6,4% | 3,3 | 53 d | −3,7% | +23% | 0,17 |
> | 487 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+304% · −41,8%** | +55% · −7,6% | +34% | −6,1% | 4,8 | 63 d | −5,4% | +23% | 0,20 |
> | 488 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+296% · −43,7%** | +67% · −11,3% | +41% | −8,0% | 3,8 | 60 d | −4,3% | +30% | 0,27 |
> | 489 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+200% · −42,7%** | +44% · −7,9% | +30% | −6,4% | 4,5 | 65 d | −4,8% | +22% | 0,16 |
> | 490 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+115% · −22,8%** | +35% · −5,2% | +24% | −2,3% | 5,4 | 76 d | −3,0% | +18% | −0,05 |
> | 491 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+372% · −40,2%** | +59% · −7,9% | +35% | −4,5% | 5,5 | 64 d | −5,6% | +22% | 0,15 |
> | 492 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+256% · −37,9%** | +52% · −7,4% | +31% | −5,8% | 4,5 | 56 d | −5,6% | +21% | 0,16 |
> | 493 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+240% · −30,0%** | +47% · −5,3% | +29% | −3,4% | 4,3 | 65 d | −4,5% | +21% | 0,07 |
> | 494 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+211% · −32,1%** | +43% · −5,9% | +31% | −5,6% | 3,8 | 56 d | −4,6% | +26% | 0,06 |
> | 495 | 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+208% · −40,0%** | +44% · −8,0% | +31% | −6,5% | 3,6 | 54 d | −4,4% | +28% | 0,15 |
> | 496 | IFR ·TEN + Tendência ·TEN | **+144% · −27,0%** | +71% · −13,5% | +46% | −11,3% | 5,1 | 57 d | −5,9% | +26% | 0,44 |
> | 497 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+141% · −30,4%** | +34% · −5,3% | +26% | −5,7% | 3,1 | 55 d | −2,5% | +21% | 0,10 |
> | 498 | IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+213% · −38,5%** | +44% · −7,5% | +31% | −7,4% | 3,7 | 67 d | −2,6% | +29% | 0,15 |
> | 499 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+241% · −37,2%** | +48% · −7,1% | +34% | −7,7% | 3,6 | 54 d | −4,4% | +27% | 0,15 |
> | 500 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+340% · −42,8%** | +59% · −8,8% | +37% | −6,5% | 4,4 | 44 d | −5,8% | +24% | 0,30 |
> | 501 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+304% · −33,0%** | +53% · −7,1% | +32% | −5,9% | 3,7 | 39 d | −4,9% | +24% | 0,20 |
> | 502 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+227% · −31,3%** | +46% · −6,2% | +30% | −5,8% | 3,6 | 57 d | −4,2% | +23% | 0,18 |
> | 503 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+284% · −44,9%** | +54% · −9,3% | +35% | −6,4% | 4,2 | 65 d | −4,4% | +26% | 0,16 |
> | 504 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+128% · −15,0%** | +45% · −4,6% | +31% | −3,8% | 3,5 | 63 d | −3,6% | +23% | 0,02 |
> | 505 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+138% · −23,3%** | +33% · −4,0% | +25% | −4,0% | 2,9 | 46 d | −1,6% | +22% | 0,08 |
> | 506 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+194% · −38,0%** | +43% · −7,3% | +29% | −7,4% | 4,9 | 74 d | −3,4% | +18% | 0,07 |
> | 507 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+183% · −24,1%** | +39% · −4,1% | +24% | −2,5% | 4,6 | 74 d | −3,1% | +19% | −0,02 |
> | 508 | IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+201% · −24,3%** | +47% · −5,2% | +30% | −4,8% | 4,3 | 75 d | −2,1% | +25% | 0,21 |
> | 509 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+252% · −29,3%** | +56% · −7,7% | +32% | −4,5% | 3,9 | 47 d | −5,3% | +23% | 0,09 |
> | 510 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+202% · −41,5%** | +45% · −7,5% | +30% | −6,4% | 4,3 | 65 d | −4,6% | +23% | 0,16 |

> [!example]- Combinações 511 a 540 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 511 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+287% · −29,2%** | +51% · −5,4% | +32% | −3,0% | 5,5 | 64 d | −5,7% | +23% | −0,00 |
> | 512 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+171% · −26,1%** | +44% · −5,9% | +31% | −7,9% | 3,2 | 59 d | −2,8% | +25% | 0,25 |
> | 513 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+218% · −24,6%** | +42% · −3,8% | +27% | −3,6% | 4,3 | 75 d | −2,1% | +23% | 0,11 |
> | 514 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+286% · −36,7%** | +51% · −7,1% | +32% | −4,1% | 5,6 | 64 d | −5,7% | +21% | 0,16 |
> | 515 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+346% · −36,6%** | +59% · −7,4% | +37% | −5,3% | 4,9 | 64 d | −5,5% | +26% | 0,17 |
> | 516 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+134% · −26,3%** | +32% · −4,6% | +25% | −4,6% | 3,7 | 64 d | −3,9% | +22% | 0,02 |
> | 517 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+225% · −30,5%** | +46% · −5,7% | +30% | −4,2% | 4,1 | 66 d | −4,1% | +23% | 0,04 |
> | 518 | ADX ·ADX + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+230% · −42,0%** | +55% · −9,5% | +32% | −6,2% | 3,4 | 59 d | −3,5% | +24% | 0,15 |
> | 519 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+313% · −54,8%** | +61% · −11,7% | +37% | −6,2% | 4,4 | 65 d | −4,8% | +26% | 0,19 |
> | 520 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+272% · −42,1%** | +65% · −10,3% | +37% | −5,9% | 5,6 | 57 d | −6,1% | +20% | 0,21 |
> | 521 | 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+130% · −15,3%** | +45% · −4,1% | +28% | −3,6% | 3,8 | 65 d | −3,8% | +24% | 0,00 |
> | 522 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+246% · −42,1%** | +48% · −8,2% | +29% | −5,8% | 3,2 | 59 d | −2,6% | +23% | 0,11 |
> | 523 | Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+250% · −28,5%** | +56% · −7,0% | +32% | −5,0% | 4,2 | 47 d | −5,8% | +20% | 0,26 |
> | 524 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+198% · −32,0%** | +44% · −6,2% | +29% | −6,0% | 4,2 | 65 d | −4,7% | +26% | 0,02 |
> | 525 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+367% · −54,5%** | +67% · −11,8% | +40% | −5,6% | 5,8 | 41 d | −6,7% | +21% | 0,27 |
> | 526 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+179% · −36,3%** | +41% · −7,3% | +29% | −6,5% | 3,5 | 49 d | −4,6% | +18% | 0,19 |
> | 527 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+285% · −29,8%** | +60% · −7,3% | +34% | −3,6% | 5,9 | 77 d | −3,4% | +21% | 0,12 |
> | 528 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+142% · −35,9%** | +41% · −8,4% | +28% | −3,5% | 4,3 | 49 d | −5,8% | +16% | −0,04 |
> | 529 | IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+114% · −23,3%** | +43% · −7,1% | +30% | −7,6% | 3,1 | 58 d | −2,1% | +26% | 0,31 |
> | 530 | GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+146% · −28,1%** | +53% · −9,4% | +32% | −7,8% | 4,4 | 65 d | −5,0% | +21% | 0,36 |
> | 531 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+235% · −43,9%** | +50% · −8,5% | +31% | −7,6% | 4,8 | 63 d | −5,7% | +20% | 0,20 |
> | 532 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+397% · −40,2%** | +64% · −7,9% | +38% | −5,7% | 4,1 | 65 d | −4,6% | +27% | 0,30 |
> | 533 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+236% · −49,4%** | +51% · −9,9% | +33% | −7,5% | 4,4 | 61 d | −5,6% | +21% | 0,20 |
> | 534 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+300% · −36,1%** | +53% · −6,8% | +32% | −6,8% | 3,9 | 47 d | −5,3% | +24% | 0,31 |
> | 535 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+255% · −36,4%** | +49% · −6,3% | +32% | −4,1% | 3,4 | 57 d | −4,0% | +23% | 0,13 |
> | 536 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+223% · −31,9%** | +47% · −5,9% | +31% | −5,5% | 5,5 | 74 d | −4,1% | +27% | 0,03 |
> | 537 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+267% · −41,0%** | +51% · −8,6% | +31% | −8,3% | 4,1 | 65 d | −4,6% | +25% | 0,30 |
> | 538 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+251% · −49,2%** | +49% · −10,9% | +32% | −4,7% | 4,3 | 67 d | −4,4% | +21% | 0,16 |
> | 539 | 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+188% · −27,0%** | +59% · −8,4% | +36% | −6,6% | 3,7 | 56 d | −4,8% | +28% | 0,30 |
> | 540 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+322% · −33,1%** | +56% · −6,5% | +35% | −6,5% | 5,3 | 64 d | −5,8% | +27% | 0,16 |

> [!example]- Combinações 541 a 570 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 541 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+276% · −39,3%** | +52% · −7,7% | +33% | −5,9% | 4,7 | 55 d | −6,1% | +19% | 0,21 |
> | 542 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+143% · −31,4%** | +41% · −7,2% | +28% | −7,6% | 4,3 | 67 d | −4,4% | +20% | 0,13 |
> | 543 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+290% · −38,7%** | +66% · −9,6% | +41% | −6,6% | 4,3 | 65 d | −4,9% | +28% | 0,30 |
> | 544 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+205% · −26,8%** | +49% · −5,9% | +31% | −4,5% | 3,5 | 61 d | −4,1% | +25% | 0,16 |
> | 545 | 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+143% · −32,8%** | +40% · −8,1% | +29% | −5,1% | 3,6 | 64 d | −4,0% | +22% | 0,05 |
> | 546 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+259% · −45,6%** | +64% · −11,4% | +40% | −8,9% | 5,0 | 54 d | −6,3% | +28% | 0,45 |
> | 547 | Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+361% · −42,6%** | +60% · −8,7% | +35% | −6,7% | 4,8 | 47 d | −6,4% | +21% | 0,33 |
> | 548 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+250% · −46,6%** | +50% · −8,7% | +34% | −5,6% | 4,0 | 61 d | −5,1% | +22% | 0,12 |
> | 549 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+256% · −42,9%** | +49% · −8,9% | +32% | −3,3% | 4,4 | 67 d | −4,6% | +23% | 0,03 |
> | 550 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+204% · −37,8%** | +44% · −6,4% | +30% | −5,2% | 4,7 | 73 d | −3,9% | +24% | 0,10 |
> | 551 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+182% · −26,3%** | +39% · −4,2% | +28% | −5,6% | 3,1 | 56 d | −3,0% | +21% | 0,08 |
> | 552 | Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+139% · −30,6%** | +34% · −5,3% | +26% | −5,8% | 3,0 | 53 d | −3,1% | +24% | 0,05 |
> | 553 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+220% · −34,4%** | +45% · −6,7% | +29% | −6,0% | 3,9 | 67 d | −3,8% | +24% | 0,11 |
> | 554 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+216% · −34,4%** | +44% · −6,7% | +28% | −6,7% | 3,9 | 65 d | −4,5% | +21% | 0,14 |
> | 555 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+186% · −32,8%** | +40% · −5,9% | +29% | −6,3% | 3,4 | 64 d | −3,3% | +25% | 0,12 |
> | 556 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+169% · −23,5%** | +44% · −5,2% | +31% | −6,8% | 3,1 | 59 d | −2,9% | +24% | 0,08 |
> | 557 | Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+268% · −35,0%** | +50% · −6,9% | +30% | −5,1% | 4,9 | 67 d | −5,1% | +19% | 0,15 |
> | 558 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+179% · −41,6%** | +41% · −7,9% | +29% | −5,6% | 4,6 | 67 d | −4,9% | +19% | 0,06 |
> | 559 | 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+154% · −30,8%** | +52% · −10,2% | +36% | −5,5% | 4,4 | 64 d | −5,4% | +23% | −0,03 |
> | 560 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+280% · −53,1%** | +56% · −11,5% | +34% | −5,4% | 5,5 | 63 d | −6,1% | +17% | 0,24 |
> | 561 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+441% · −41,5%** | +67% · −8,3% | +39% | −6,1% | 4,8 | 39 d | −6,6% | +26% | 0,32 |
> | 562 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+114% · −31,4%** | +35% · −7,7% | +24% | −4,1% | 4,9 | 76 d | −3,6% | +15% | 0,06 |
> | 563 | MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+97% · −16,7%** | +37% · −4,6% | +25% | −5,9% | 3,3 | 64 d | −3,0% | +19% | 0,15 |
> | 564 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+261% · −36,2%** | +50% · −7,3% | +30% | −7,3% | 3,8 | 49 d | −5,4% | +19% | 0,19 |
> | 565 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+251% · −39,7%** | +49% · −8,2% | +32% | −8,5% | 3,8 | 67 d | −3,8% | +28% | 0,13 |
> | 566 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+335% · −36,2%** | +56% · −7,0% | +33% | −4,4% | 4,8 | 64 d | −5,7% | +24% | 0,18 |
> | 567 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+92% · −21,6%** | +27% · −4,0% | +22% | −3,7% | 3,3 | 65 d | −2,8% | +20% | 0,04 |
> | 568 | MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+230% · −39,5%** | +45% · −7,8% | +31% | −7,8% | 3,1 | 51 d | −3,8% | +24% | 0,18 |
> | 569 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+232% · −38,6%** | +47% · −7,4% | +33% | −6,1% | 3,7 | 61 d | −4,7% | +23% | 0,14 |
> | 570 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+196% · −22,8%** | +48% · −5,1% | +34% | −5,6% | 3,7 | 63 d | −4,6% | +26% | 0,08 |

> [!example]- Combinações 571 a 600 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 571 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+201% · −39,9%** | +43% · −8,0% | +29% | −5,1% | 3,8 | 65 d | −4,4% | +18% | 0,14 |
> | 572 | GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+160% · −38,7%** | +45% · −9,4% | +30% | −5,3% | 4,5 | 65 d | −5,3% | +18% | 0,10 |
> | 573 | IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+112% · −19,2%** | +42% · −5,8% | +30% | −6,2% | 2,9 | 57 d | −2,1% | +23% | 0,11 |
> | 574 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+290% · −29,2%** | +51% · −5,4% | +32% | −3,0% | 5,2 | 64 d | −6,0% | +24% | 0,02 |
> | 575 | GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+309% · −38,8%** | +68% · −9,4% | +39% | −6,8% | 5,0 | 60 d | −6,2% | +25% | 0,36 |
> | 576 | Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+140% · −28,1%** | +48% · −9,0% | +30% | −7,7% | 3,9 | 61 d | −5,2% | +19% | 0,23 |
> | 577 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+231% · −43,6%** | +47% · −9,0% | +33% | −7,1% | 3,5 | 54 d | −4,7% | +22% | 0,30 |
> | 578 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+187% · −26,1%** | +39% · −4,4% | +28% | −6,0% | 3,0 | 59 d | −2,4% | +24% | 0,13 |
> | 579 | MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+116% · −29,2%** | +43% · −9,7% | +32% | −8,5% | 3,2 | 55 d | −4,0% | +25% | 0,15 |
> | 580 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+258% · −34,6%** | +47% · −6,4% | +31% | −5,8% | 3,2 | 62 d | −3,5% | +24% | 0,23 |
> | 581 | MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+186% · −32,2%** | +46% · −7,6% | +31% | −6,9% | 3,2 | 54 d | −4,1% | +26% | 0,23 |
> | 582 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+352% · −42,0%** | +62% · −8,4% | +36% | −6,5% | 5,2 | 54 d | −6,6% | +24% | 0,16 |
> | 583 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+272% · −40,1%** | +55% · −7,7% | +35% | −6,9% | 4,7 | 65 d | −5,6% | +29% | 0,16 |
> | 584 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+253% · −39,3%** | +52% · −7,3% | +31% | −5,8% | 4,5 | 47 d | −6,5% | +20% | 0,18 |
> | 585 | GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+237% · −35,8%** | +47% · −6,7% | +29% | −4,7% | 4,1 | 65 d | −5,0% | +19% | 0,13 |
> | 586 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+231% · −36,8%** | +47% · −7,3% | +32% | −7,6% | 3,8 | 65 d | −4,5% | +23% | 0,13 |
> | 587 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+121% · −20,1%** | +30% · −2,7% | +22% | −3,8% | 3,0 | 61 d | −2,7% | +19% | 0,07 |
> | 588 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+349% · −57,3%** | +65% · −12,5% | +39% | −6,4% | 5,1 | 76 d | −4,0% | +25% | 0,21 |
> | 589 | 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+195% · −32,4%** | +50% · −7,6% | +35% | −7,2% | 3,8 | 56 d | −5,4% | +29% | 0,10 |
> | 590 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+129% · −27,8%** | +37% · −6,5% | +28% | −6,0% | 3,0 | 58 d | −2,7% | +24% | 0,11 |
> | 591 | GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+172% · −40,8%** | +59% · −14,0% | +37% | −6,1% | 5,2 | 63 d | −6,3% | +19% | 0,10 |
> | 592 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+133% · −30,5%** | +34% · −5,7% | +24% | −6,3% | 3,7 | 67 d | −3,7% | +22% | 0,04 |
> | 593 | GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+219% · −33,8%** | +53% · −8,6% | +31% | −6,7% | 4,1 | 65 d | −5,0% | +22% | 0,27 |
> | 594 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+116% · −30,6%** | +36% · −7,5% | +24% | −4,1% | 4,6 | 76 d | −3,7% | +16% | 0,03 |
> | 595 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+301% · −33,2%** | +53% · −7,1% | +32% | −5,9% | 3,7 | 37 d | −5,8% | +25% | 0,22 |
> | 596 | 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+130% · −25,2%** | +46% · −7,8% | +33% | −5,4% | 3,9 | 64 d | −5,1% | +25% | −0,06 |
> | 597 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+172% · −29,5%** | +45% · −7,0% | +32% | −6,7% | 3,4 | 64 d | −4,1% | +26% | 0,11 |
> | 598 | MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+170% · −32,1%** | +56% · −10,7% | +35% | −9,7% | 3,5 | 42 d | −5,3% | +27% | 0,48 |
> | 599 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+138% · −23,5%** | +33% · −3,8% | +25% | −4,2% | 2,8 | 58 d | −1,8% | +22% | 0,04 |
> | 600 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+192% · −42,5%** | +43% · −8,7% | +29% | −8,3% | 4,4 | 74 d | −4,0% | +17% | 0,23 |

> [!example]- Combinações 601 a 630 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 601 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+233% · −52,4%** | +51% · −11,0% | +33% | −8,4% | 4,1 | 61 d | −5,7% | +19% | 0,37 |
> | 602 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+270% · −36,8%** | +48% · −7,2% | +29% | −4,0% | 4,6 | 64 d | −6,0% | +20% | 0,12 |
> | 603 | Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+331% · −42,7%** | +56% · −8,7% | +33% | −5,6% | 4,3 | 64 d | −5,7% | +22% | 0,26 |
> | 604 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+224% · −31,3%** | +46% · −6,2% | +30% | −5,8% | 3,5 | 55 d | −5,0% | +22% | 0,19 |
> | 605 | IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+183% · −29,4%** | +46% · −6,7% | +29% | −6,5% | 3,3 | 64 d | −3,9% | +24% | 0,20 |
> | 606 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+185% · −23,5%** | +39% · −4,4% | +28% | −5,1% | 2,9 | 59 d | −2,4% | +22% | 0,06 |
> | 607 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+262% · −41,1%** | +50% · −8,6% | +31% | −8,4% | 4,0 | 65 d | −5,1% | +20% | 0,20 |
> | 608 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+334% · −43,0%** | +57% · −8,8% | +34% | −4,2% | 3,9 | 65 d | −5,0% | +23% | 0,14 |
> | 609 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+145% · −32,1%** | +40% · −7,8% | +29% | −5,1% | 3,5 | 64 d | −4,3% | +23% | 0,11 |
> | 610 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+223% · −34,4%** | +45% · −6,7% | +29% | −6,0% | 3,7 | 67 d | −4,0% | +25% | 0,13 |
> | 611 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+181% · −28,7%** | +39% · −5,1% | +25% | −3,8% | 4,4 | 76 d | −3,5% | +17% | 0,05 |
> | 612 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+206% · −36,8%** | +43% · −7,0% | +31% | −5,3% | 4,2 | 75 d | −3,5% | +18% | 0,09 |
> | 613 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+275% · −43,8%** | +52% · −8,6% | +31% | −6,3% | 2,9 | 55 d | −2,8% | +23% | 0,27 |
> | 614 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+251% · −31,7%** | +48% · −5,9% | +30% | −4,4% | 4,1 | 64 d | −5,6% | +23% | 0,11 |
> | 615 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+239% · −38,0%** | +47% · −6,8% | +28% | −4,1% | 2,8 | 57 d | −2,0% | +21% | 0,13 |
> | 616 | MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+130% · −30,4%** | +38% · −7,1% | +28% | −7,5% | 3,0 | 58 d | −3,1% | +23% | 0,14 |
> | 617 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+254% · −39,7%** | +50% · −8,2% | +32% | −8,5% | 3,6 | 67 d | −3,9% | +27% | 0,16 |
> | 618 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+167% · −39,6%** | +40% · −8,2% | +27% | −8,8% | 3,6 | 65 d | −4,4% | +18% | 0,16 |
> | 619 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+172% · −33,8%** | +60% · −11,7% | +37% | −11,6% | 4,3 | 65 d | −5,5% | +30% | 0,43 |
> | 620 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+147% · −22,7%** | +40% · −4,9% | +29% | −4,7% | 3,4 | 63 d | −4,4% | +23% | −0,02 |
> | 621 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+254% · −31,0%** | +48% · −5,9% | +30% | −4,4% | 4,4 | 64 d | −5,9% | +24% | 0,12 |
> | 622 | GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+163% · −37,4%** | +45% · −8,7% | +30% | −5,4% | 4,2 | 65 d | −5,4% | +19% | 0,10 |
> | 623 | Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+141% · −24,1%** | +48% · −7,4% | +30% | −5,6% | 3,7 | 61 d | −5,1% | +22% | 0,12 |
> | 624 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+332% · −36,3%** | +56% · −7,1% | +33% | −4,4% | 4,7 | 64 d | −6,1% | +23% | 0,15 |
> | 625 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+291% · −46,4%** | +59% · −9,7% | +38% | −9,4% | 4,4 | 61 d | −6,2% | +33% | 0,37 |
> | 626 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+222% · −34,6%** | +47% · −6,6% | +31% | −6,7% | 4,9 | 74 d | −4,7% | +27% | 0,20 |
> | 627 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+254% · −27,0%** | +48% · −4,8% | +30% | −3,7% | 4,3 | 64 d | −5,8% | +23% | 0,03 |
> | 628 | IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+197% · −38,4%** | +51% · −9,7% | +35% | −9,6% | 3,8 | 67 d | −4,3% | +30% | 0,29 |
> | 629 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+371% · −38,2%** | +60% · −7,7% | +35% | −7,9% | 4,1 | 64 d | −5,5% | +27% | 0,33 |
> | 630 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+307% · −29,9%** | +52% · −5,6% | +31% | −2,7% | 6,0 | 90 d | −2,0% | +21% | 0,03 |

> [!example]- Combinações 631 a 660 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 631 | ADX ·ADX + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+277% · −48,4%** | +53% · −10,1% | +32% | −8,3% | 3,2 | 59 d | −4,2% | +26% | 0,27 |
> | 632 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+257% · −41,3%** | +60% · −10,3% | +35% | −6,8% | 3,0 | 57 d | −3,5% | +23% | 0,36 |
> | 633 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+293% · −38,0%** | +53% · −7,9% | +32% | −6,8% | 5,1 | 76 d | −4,5% | +19% | 0,22 |
> | 634 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+185% · −26,3%** | +40% · −4,2% | +28% | −5,5% | 2,9 | 56 d | −3,3% | +21% | 0,12 |
> | 635 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+133% · −30,6%** | +33% · −5,6% | +25% | −5,4% | 4,1 | 79 d | −2,4% | +16% | 0,09 |
> | 636 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+188% · −29,0%** | +40% · −5,0% | +29% | −5,0% | 3,2 | 64 d | −3,6% | +24% | 0,10 |
> | 637 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+127% · −23,3%** | +37% · −5,0% | +27% | −5,3% | 2,8 | 58 d | −2,4% | +23% | 0,12 |
> | 638 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+193% · −41,4%** | +52% · −11,1% | +30% | −5,8% | 4,7 | 63 d | −6,4% | +15% | 0,21 |
> | 639 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+284% · −50,6%** | +56% · −10,6% | +34% | −4,6% | 5,9 | 66 d | −6,2% | +18% | 0,09 |
> | 640 | Pôr do sol ·POR + Tendência ·TEN | **+82% · −20,0%** | +45% · −9,7% | +32% | −7,4% | 3,2 | 55 d | −4,5% | +22% | −0,00 |
> | 641 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+136% · −25,4%** | +33% · −4,3% | +25% | −4,8% | 3,3 | 64 d | −4,2% | +23% | 0,04 |
> | 642 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+220% · −43,2%** | +48% · −9,2% | +32% | −10,7% | 4,3 | 74 d | −4,2% | +22% | 0,24 |
> | 643 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+315% · −30,4%** | +65% · −7,5% | +36% | −6,0% | 4,4 | 64 d | −6,0% | +27% | 0,26 |
> | 644 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+343% · −36,6%** | +59% · −7,4% | +37% | −5,3% | 4,7 | 64 d | −6,3% | +25% | 0,14 |
> | 645 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+258% · −36,0%** | +50% · −7,3% | +30% | −7,3% | 3,8 | 37 d | −6,3% | +20% | 0,19 |
> | 646 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+257% · −41,9%** | +50% · −7,0% | +33% | −4,7% | 3,7 | 64 d | −5,2% | +25% | −0,00 |
> | 647 | IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+115% · −14,1%** | +59% · −6,5% | +38% | −6,4% | 3,7 | 59 d | −5,5% | +28% | 0,10 |
> | 648 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+187% · −40,5%** | +50% · −9,7% | +33% | −6,9% | 4,3 | 65 d | −5,7% | +24% | 0,16 |
> | 649 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+189% · −32,8%** | +40% · −6,0% | +29% | −6,3% | 3,2 | 64 d | −3,6% | +25% | 0,16 |
> | 650 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+300% · −38,7%** | +52% · −7,6% | +32% | −3,9% | 5,7 | 81 d | −4,0% | +18% | 0,08 |
> | 651 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+249% · −29,5%** | +56% · −7,8% | +32% | −4,2% | 4,0 | 47 d | −6,3% | +22% | 0,12 |
> | 652 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+222% · −38,9%** | +48% · −7,9% | +32% | −8,7% | 3,9 | 65 d | −5,2% | +27% | 0,14 |
> | 653 | MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+108% · −20,2%** | +33% · −3,9% | +23% | −5,2% | 3,6 | 73 d | −2,8% | +20% | 0,10 |
> | 654 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+331% · −41,8%** | +60% · −8,8% | +33% | −6,8% | 4,5 | 54 d | −6,8% | +21% | 0,29 |
> | 655 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+222% · −44,9%** | +45% · −8,7% | +30% | −4,4% | 5,0 | 81 d | −3,7% | +16% | 0,11 |
> | 656 | Bollinger ·TEN + Tendência ·TEN | **+127% · −24,0%** | +64% · −11,8% | +37% | −9,2% | 4,2 | 42 d | −6,7% | +23% | 0,39 |
> | 657 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+195% · −34,3%** | +44% · −6,8% | +29% | −7,0% | 4,1 | 67 d | −5,1% | +27% | 0,11 |
> | 658 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+310% · −31,6%** | +53% · −5,8% | +32% | −6,6% | 4,7 | 65 d | −6,0% | +25% | 0,15 |
> | 659 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+294% · −37,6%** | +52% · −7,6% | +31% | −6,1% | 3,6 | 67 d | −4,1% | +26% | 0,11 |
> | 660 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+184% · −27,9%** | +39% · −4,9% | +24% | −3,8% | 4,2 | 76 d | −3,7% | +18% | 0,03 |

> [!example]- Combinações 661 a 690 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 661 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+223% · −39,7%** | +45% · −8,0% | +31% | −7,7% | 3,5 | 63 d | −4,9% | +21% | 0,28 |
> | 662 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+182% · −39,9%** | +41% · −7,4% | +29% | −5,6% | 4,2 | 67 d | −5,3% | +20% | 0,04 |
> | 663 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+179% · −44,4%** | +40% · −9,4% | +29% | −5,7% | 3,4 | 64 d | −4,7% | +19% | 0,05 |
> | 664 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+314% · −32,5%** | +56% · −6,5% | +35% | −5,6% | 4,1 | 45 d | −6,7% | +27% | 0,14 |
> | 665 | GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+268% · −40,7%** | +50% · −8,1% | +31% | −4,8% | 4,8 | 74 d | −4,8% | +18% | 0,17 |
> | 666 | GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+267% · −44,8%** | +55% · −8,7% | +35% | −8,1% | 4,6 | 65 d | −6,0% | +29% | 0,31 |
> | 667 | ADX ·ADX + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+260% · −49,9%** | +61% · −12,3% | +36% | −9,2% | 3,3 | 59 d | −4,8% | +28% | 0,39 |
> | 668 | ADX ·ADX + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+227% · −42,9%** | +55% · −10,7% | +33% | −7,7% | 3,2 | 60 d | −4,4% | +23% | 0,23 |
> | 669 | Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+128% · −26,6%** | +38% · −5,8% | +28% | −6,4% | 2,8 | 53 d | −3,6% | +24% | 0,02 |
> | 670 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+313% · −40,5%** | +58% · −8,4% | +34% | −7,0% | 4,5 | 56 d | −6,7% | +25% | 0,12 |
> | 671 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+283% · −32,9%** | +52% · −6,2% | +33% | −7,0% | 3,9 | 64 d | −5,6% | +26% | 0,15 |
> | 672 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+225% · −38,3%** | +46% · −7,5% | +30% | −3,5% | 3,7 | 67 d | −4,4% | +24% | 0,03 |
> | 673 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+159% · −42,5%** | +38% · −8,7% | +29% | −8,1% | 3,0 | 55 d | −4,0% | +18% | 0,24 |
> | 674 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+281% · −34,2%** | +52% · −7,0% | +33% | −4,7% | 4,5 | 67 d | −5,6% | +22% | 0,11 |
> | 675 | ADX ·ADX + Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+343% · −54,8%** | +62% · −11,4% | +35% | −7,0% | 4,0 | 50 d | −6,5% | +22% | 0,27 |
> | 676 | IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+125% · −23,4%** | +37% · −4,9% | +27% | −5,6% | 2,9 | 61 d | −3,1% | +24% | 0,07 |
> | 677 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+123% · −25,4%** | +36% · −5,8% | +27% | −6,5% | 3,4 | 64 d | −4,8% | +24% | 0,08 |
> | 678 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+309% · −57,5%** | +62% · −12,8% | +37% | −7,6% | 4,1 | 65 d | −5,6% | +25% | 0,33 |
> | 679 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+177% · −28,1%** | +46% · −6,3% | +33% | −6,8% | 3,3 | 63 d | −4,7% | +26% | 0,14 |
> | 680 | Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+126% · −30,5%** | +38% · −7,0% | +28% | −7,6% | 3,0 | 47 d | −4,5% | +25% | 0,06 |
> | 681 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+361% · −43,6%** | +64% · −8,9% | +40% | −7,9% | 4,3 | 44 d | −7,0% | +33% | 0,31 |
> | 682 | MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+173% · −32,7%** | +46% · −7,8% | +32% | −8,2% | 3,2 | 64 d | −4,1% | +27% | 0,26 |
> | 683 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+144% · −23,4%** | +39% · −5,0% | +29% | −3,6% | 3,6 | 67 d | −4,3% | +24% | 0,02 |
> | 684 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+286% · −32,9%** | +52% · −6,1% | +33% | −6,9% | 4,1 | 64 d | −5,9% | +25% | 0,18 |
> | 685 | GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+240% · −34,2%** | +47% · −6,1% | +29% | −4,7% | 3,9 | 65 d | −5,4% | +20% | 0,13 |
> | 686 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+269% · −38,5%** | +51% · −7,0% | +32% | −5,9% | 4,1 | 65 d | −5,6% | +24% | 0,21 |
> | 687 | IFR ·TEN + Tendência ·TEN + Onda ·OND | **+183% · −34,9%** | +61% · −11,8% | +41% | −11,3% | 4,0 | 67 d | −5,1% | +35% | 0,33 |
> | 688 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+196% · −36,2%** | +43% · −7,1% | +29% | −7,4% | 4,5 | 77 d | −4,2% | +19% | 0,07 |
> | 689 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+302% · −44,4%** | +54% · −8,6% | +33% | −5,4% | 3,2 | 65 d | −3,7% | +26% | 0,15 |
> | 690 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+172% · −23,5%** | +44% · −5,5% | +31% | −6,7% | 2,8 | 59 d | −2,9% | +24% | 0,13 |

> [!example]- Combinações 691 a 720 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 691 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+304% · −38,1%** | +53% · −7,5% | +32% | −3,9% | 5,6 | 83 d | −3,7% | +19% | 0,07 |
> | 692 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+237% · −44,5%** | +57% · −12,0% | +36% | −4,7% | 4,2 | 67 d | −5,4% | +23% | 0,09 |
> | 693 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+213% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,9 | 53 d | −4,3% | +22% | 0,12 |
> | 694 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+183% · −37,0%** | +42% · −7,3% | +26% | −4,7% | 4,3 | 71 d | −5,2% | +18% | 0,03 |
> | 695 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+205% · −32,2%** | +51% · −8,0% | +32% | −6,8% | 3,7 | 67 d | −4,8% | +27% | 0,04 |
> | 696 | VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+166% · −37,7%** | +46% · −9,3% | +32% | −8,6% | 3,4 | 53 d | −5,5% | +18% | 0,37 |
> | 697 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+83% · −14,4%** | +28% · −3,0% | +23% | −3,2% | 3,9 | 81 d | −2,0% | +18% | −0,02 |
> | 698 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+257% · −38,0%** | +50% · −7,6% | +30% | −8,2% | 3,6 | 53 d | −5,8% | +18% | 0,32 |
> | 699 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+192% · −37,7%** | +50% · −9,1% | +35% | −7,2% | 4,1 | 75 d | −4,2% | +18% | 0,22 |
> | 700 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+103% · −25,4%** | +40% · −7,7% | +27% | −3,7% | 4,7 | 76 d | −4,7% | +17% | −0,09 |
> | 701 | GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+219% · −41,7%** | +72% · −14,1% | +43% | −8,4% | 5,6 | 54 d | −7,5% | +25% | 0,43 |
> | 702 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+250% · −41,7%** | +50% · −8,8% | +32% | −9,3% | 3,5 | 67 d | −4,4% | +28% | 0,28 |
> | 703 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+227% · −28,2%** | +45% · −5,5% | +29% | −2,9% | 6,3 | 92 d | −2,7% | +18% | 0,08 |
> | 704 | MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+232% · −39,6%** | +46% · −7,8% | +31% | −7,8% | 2,8 | 53 d | −4,0% | +24% | 0,21 |
> | 705 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+236% · −36,9%** | +46% · −6,5% | +28% | −3,5% | 3,2 | 65 d | −4,2% | +20% | 0,03 |
> | 706 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+275% · −37,1%** | +50% · −6,9% | +30% | −4,2% | 3,7 | 77 d | −2,1% | +22% | 0,14 |
> | 707 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+255% · −43,9%** | +51% · −8,8% | +33% | −6,6% | 3,7 | 76 d | −2,9% | +23% | 0,15 |
> | 708 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+224% · −38,9%** | +48% · −7,9% | +32% | −8,7% | 3,8 | 65 d | −5,3% | +27% | 0,16 |
> | 709 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+122% · −29,8%** | +37% · −7,1% | +27% | −7,0% | 3,9 | 79 d | −2,9% | +16% | 0,20 |
> | 710 | Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+26% · −11,1%** | +20% · −5,0% | +17% | −4,5% | 2,7 | 64 d | −1,7% | +14% | 0,02 |
> | 711 | Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+128% · −30,5%** | +38% · −7,0% | +28% | −7,6% | 2,8 | 53 d | −4,1% | +25% | 0,10 |
> | 712 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+202% · −33,3%** | +43% · −6,3% | +29% | −6,9% | 3,7 | 67 d | −4,7% | +25% | −0,01 |
> | 713 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+316% · −40,5%** | +59% · −8,4% | +34% | −6,9% | 4,3 | 56 d | −6,8% | +26% | 0,14 |
> | 714 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+159% · −24,3%** | +35% · −4,2% | +24% | −2,5% | 4,9 | 89 d | −2,7% | +21% | 0,04 |
> | 715 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+213% · −28,6%** | +43% · −5,1% | +27% | −5,7% | 3,7 | 67 d | −4,9% | +21% | 0,14 |
> | 716 | IFR ·TEN + MACD ·TEN | **+102% · −19,0%** | +54% · −9,0% | +37% | −9,9% | 2,8 | 58 d | −3,6% | +27% | 0,49 |
> | 717 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+251% · −39,1%** | +59% · −10,3% | +34% | −9,6% | 4,0 | 65 d | −5,7% | +28% | 0,37 |
> | 718 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+310% · −42,5%** | +59% · −9,0% | +34% | −7,8% | 4,2 | 60 d | −6,5% | +24% | 0,30 |
> | 719 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+298% · −37,6%** | +52% · −7,6% | +31% | −6,1% | 3,4 | 67 d | −4,2% | +27% | 0,13 |
> | 720 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+103% · −28,0%** | +28% · −5,1% | +22% | −2,3% | 3,1 | 64 d | −4,1% | +19% | 0,02 |

> [!example]- Combinações 721 a 750 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 721 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+215% · −52,4%** | +49% · −11,0% | +33% | −9,7% | 3,9 | 61 d | −6,1% | +20% | 0,27 |
> | 722 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+269% · −29,1%** | +59% · −7,1% | +36% | −4,2% | 5,4 | 64 d | −7,0% | +24% | 0,08 |
> | 723 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+286% · −47,2%** | +55% · −9,8% | +36% | −7,9% | 3,7 | 76 d | −3,3% | +26% | 0,21 |
> | 724 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+157% · −23,5%** | +53% · −7,3% | +36% | −9,4% | 3,0 | 59 d | −4,4% | +26% | 0,28 |
> | 725 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+202% · −32,2%** | +50% · −8,0% | +30% | −7,7% | 3,8 | 65 d | −5,5% | +23% | 0,12 |
> | 726 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+189% · −53,5%** | +44% · −12,4% | +30% | −7,7% | 4,0 | 65 d | −5,8% | +15% | 0,24 |
> | 727 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+167% · −25,0%** | +44% · −5,5% | +26% | −3,5% | 4,2 | 76 d | −4,4% | +18% | −0,02 |
> | 728 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+197% · −34,3%** | +44% · −6,8% | +29% | −7,0% | 3,9 | 67 d | −5,2% | +27% | 0,12 |
> | 729 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+253% · −45,0%** | +51% · −8,0% | +34% | −5,6% | 3,8 | 65 d | −5,4% | +23% | 0,14 |
> | 730 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+181% · −42,7%** | +40% · −8,9% | +29% | −5,8% | 3,4 | 64 d | −5,0% | +20% | 0,10 |
> | 731 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+298% · −39,6%** | +53% · −7,2% | +32% | −3,8% | 2,9 | 65 d | −3,0% | +22% | 0,14 |
> | 732 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+228% · −26,3%** | +44% · −4,8% | +29% | −2,1% | 5,5 | 92 d | −2,8% | +19% | −0,00 |
> | 733 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+209% · −34,9%** | +44% · −7,0% | +31% | −5,4% | 4,1 | 78 d | −3,8% | +19% | 0,11 |
> | 734 | 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+183% · −35,1%** | +40% · −6,7% | +29% | −6,4% | 3,2 | 65 d | −4,2% | +22% | 0,08 |
> | 735 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+245% · −44,8%** | +50% · −9,5% | +32% | −9,4% | 3,5 | 67 d | −4,5% | +22% | 0,17 |
> | 736 | ADX ·ADX + Bollinger ·TEN + Tendência ·TEN | **+212% · −45,6%** | +68% · −15,3% | +38% | −8,7% | 3,4 | 60 d | −5,3% | +27% | 0,35 |
> | 737 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+291% · −47,8%** | +55% · −8,7% | +36% | −6,9% | 3,5 | 64 d | −5,3% | +27% | 0,13 |
> | 738 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+277% · −36,0%** | +53% · −7,2% | +34% | −7,1% | 3,8 | 67 d | −5,2% | +30% | 0,14 |
> | 739 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+256% · −42,7%** | +50% · −7,9% | +33% | −6,0% | 3,4 | 64 d | −5,2% | +23% | 0,12 |
> | 740 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+183% · −37,9%** | +41% · −7,6% | +29% | −10,8% | 2,8 | 61 d | −3,5% | +23% | 0,30 |
> | 741 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+330% · −39,8%** | +58% · −7,8% | +35% | −8,0% | 3,6 | 47 d | −6,3% | +27% | 0,33 |
> | 742 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+312% · −49,0%** | +59% · −10,0% | +38% | −8,1% | 3,8 | 76 d | −3,6% | +28% | 0,16 |
> | 743 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+210% · −26,1%** | +51% · −6,4% | +32% | −3,1% | 5,6 | 92 d | −3,1% | +19% | 0,02 |
> | 744 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+157% · −28,3%** | +36% · −5,2% | +23% | −4,0% | 3,3 | 67 d | −4,1% | +19% | 0,03 |
> | 745 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+83% · −20,6%** | +29% · −4,7% | +23% | −4,9% | 3,0 | 65 d | −3,7% | +22% | 0,07 |
> | 746 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+281% · −49,2%** | +52% · −10,9% | +33% | −5,0% | 4,8 | 64 d | −6,9% | +20% | 0,17 |
> | 747 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+236% · −31,7%** | +45% · −5,8% | +27% | −4,3% | 3,7 | 64 d | −5,8% | +21% | 0,09 |
> | 748 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+167% · −34,5%** | +39% · −6,3% | +29% | −7,1% | 2,6 | 55 d | −3,1% | +24% | 0,09 |
> | 749 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+135% · −17,0%** | +32% · −2,5% | +25% | −3,7% | 3,2 | 66 d | −4,1% | +20% | −0,02 |
> | 750 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+333% · −59,0%** | +66% · −13,2% | +40% | −8,7% | 4,0 | 65 d | −6,0% | +30% | 0,40 |

> [!example]- Combinações 751 a 780 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 751 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+222% · −45,0%** | +46% · −9,5% | +30% | −4,5% | 3,6 | 67 d | −4,8% | +22% | 0,10 |
> | 752 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+199% · −46,4%** | +44% · −8,9% | +30% | −5,0% | 4,2 | 67 d | −5,9% | +19% | 0,08 |
> | 753 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+166% · −27,0%** | +36% · −4,6% | +25% | −6,1% | 3,4 | 73 d | −3,0% | +18% | 0,12 |
> | 754 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+224% · −41,8%** | +46% · −8,5% | +30% | −4,4% | 4,9 | 83 d | −4,0% | +17% | 0,10 |
> | 755 | MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+165% · −37,9%** | +39% · −7,3% | +29% | −8,3% | 2,9 | 57 d | −4,2% | +25% | 0,13 |
> | 756 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+121% · −17,1%** | +35% · −3,2% | +27% | −5,1% | 3,3 | 65 d | −4,7% | +22% | −0,07 |
> | 757 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+92% · −28,0%** | +30% · −6,7% | +23% | −3,2% | 3,2 | 64 d | −4,6% | +19% | 0,01 |
> | 758 | 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+131% · −32,6%** | +47% · −11,0% | +33% | −7,4% | 3,4 | 64 d | −5,2% | +23% | 0,21 |
> | 759 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+208% · −28,5%** | +41% · −5,0% | +25% | −2,4% | 5,4 | 92 d | −3,1% | +16% | 0,05 |
> | 760 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+170% · −39,5%** | +41% · −8,2% | +27% | −8,8% | 3,4 | 65 d | −5,0% | +19% | 0,16 |
> | 761 | Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+207% · −46,9%** | +52% · −11,1% | +33% | −6,0% | 4,9 | 81 d | −4,5% | +15% | 0,23 |
> | 762 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+282% · −35,1%** | +53% · −6,9% | +33% | −7,8% | 3,6 | 64 d | −5,7% | +27% | 0,30 |
> | 763 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+289% · −45,7%** | +54% · −9,0% | +35% | −6,7% | 4,0 | 80 d | −3,6% | +22% | 0,18 |
> | 764 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+187% · −34,4%** | +49% · −8,4% | +32% | −5,6% | 3,6 | 65 d | −5,4% | +20% | 0,06 |
> | 765 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+315% · −46,5%** | +57% · −10,1% | +36% | −6,3% | 4,8 | 64 d | −7,0% | +25% | 0,20 |
> | 766 | VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+201% · −43,4%** | +46% · −8,8% | +32% | −9,1% | 3,1 | 50 d | −5,3% | +26% | 0,32 |
> | 767 | IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+169% · −26,2%** | +45% · −5,7% | +31% | −7,2% | 2,9 | 64 d | −3,7% | +22% | 0,23 |
> | 768 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+180% · −38,9%** | +49% · −9,4% | +32% | −9,6% | 4,3 | 75 d | −5,0% | +19% | 0,19 |
> | 769 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+105% · −23,9%** | +41% · −6,9% | +26% | −3,5% | 4,4 | 76 d | −4,9% | +18% | −0,11 |
> | 770 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+179% · −49,7%** | +40% · −11,3% | +29% | −7,3% | 3,2 | 64 d | −4,7% | +18% | 0,20 |
> | 771 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+334% · −49,4%** | +62% · −10,5% | +39% | −8,6% | 3,2 | 65 d | −4,5% | +29% | 0,26 |
> | 772 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+256% · −45,2%** | +50% · −9,7% | +33% | −5,7% | 4,8 | 83 d | −4,1% | +22% | 0,13 |
> | 773 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+153% · −38,2%** | +37% · −6,9% | +26% | −3,4% | 4,6 | 78 d | −4,7% | +15% | 0,05 |
> | 774 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+171% · −31,7%** | +38% · −6,0% | +26% | −3,5% | 3,9 | 72 d | −4,9% | +22% | −0,04 |
> | 775 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+122% · −28,2%** | +37% · −6,7% | +25% | −7,1% | 3,4 | 67 d | −4,6% | +24% | 0,01 |
> | 776 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+169% · −39,5%** | +38% · −8,2% | +26% | −4,6% | 3,7 | 72 d | −4,6% | +20% | 0,04 |
> | 777 | Quinta ·QUI + Bollinger ·TEN ⚠️ | **+59% · −8,4%** | +35% · −2,8% | +21% | −1,5% | 3,3 | 70 d | −4,1% | +18% | 0,04 |
> | 778 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+131% · −28,8%** | +48% · −8,7% | +32% | −9,0% | 4,1 | 67 d | −5,8% | +23% | 0,05 |
> | 779 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+222% · −52,9%** | +47% · −11,6% | +32% | −6,4% | 4,4 | 67 d | −6,2% | +15% | 0,23 |
> | 780 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+229% · −40,7%** | +48% · −7,9% | +34% | −8,0% | 3,7 | 73 d | −4,3% | +26% | 0,23 |

> [!example]- Combinações 781 a 810 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 781 | Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+358% · −41,0%** | +61% · −8,1% | +36% | −7,0% | 3,8 | 53 d | −6,7% | +31% | 0,29 |
> | 782 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+209% · −44,7%** | +44% · −9,3% | +32% | −9,2% | 3,2 | 64 d | −4,8% | +23% | 0,22 |
> | 783 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+252% · −40,4%** | +50% · −7,9% | +33% | −6,9% | 3,5 | 67 d | −4,9% | +27% | 0,14 |
> | 784 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+279% · −47,4%** | +55% · −9,9% | +36% | −8,0% | 3,5 | 76 d | −2,9% | +27% | 0,12 |
> | 785 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+305% · −43,4%** | +54% · −8,3% | +33% | −5,4% | 3,0 | 65 d | −4,0% | +25% | 0,18 |
> | 786 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+417% · −41,6%** | +67% · −8,8% | +37% | −4,6% | 3,8 | 64 d | −6,1% | +25% | 0,28 |
> | 787 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+302% · −41,5%** | +58% · −8,2% | +36% | −7,3% | 4,4 | 66 d | −6,3% | +29% | 0,20 |
> | 788 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+212% · −26,2%** | +51% · −6,4% | +32% | −3,0% | 5,6 | 92 d | −3,5% | +20% | 0,00 |
> | 789 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+119% · −26,0%** | +31% · −4,5% | +25% | −6,1% | 2,9 | 65 d | −3,6% | +23% | 0,04 |
> | 790 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+191% · −49,4%** | +44% · −11,0% | +30% | −6,2% | 4,3 | 74 d | −5,2% | +17% | 0,09 |
> | 791 | Donchian ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+282% · −32,6%** | +63% · −8,0% | +36% | −6,7% | 3,9 | 45 d | −7,0% | +28% | 0,26 |
> | 792 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+321% · −43,3%** | +60% · −9,1% | +36% | −5,0% | 3,5 | 65 d | −5,3% | +28% | 0,15 |
> | 793 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+442% · −55,4%** | +72% · −11,2% | +40% | −7,4% | 4,3 | 54 d | −7,4% | +26% | 0,37 |
> | 794 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+399% · −53,8%** | +70% · −11,1% | +39% | −7,1% | 3,9 | 65 d | −6,0% | +27% | 0,36 |
> | 795 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+279% · −39,1%** | +52% · −7,9% | +30% | −5,2% | 4,4 | 65 d | −6,6% | +17% | 0,16 |
> | 796 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+254% · −45,4%** | +50% · −9,8% | +33% | −5,7% | 4,9 | 81 d | −4,7% | +21% | 0,12 |
> | 797 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+271% · −32,8%** | +49% · −6,2% | +30% | −6,8% | 3,8 | 65 d | −5,9% | +25% | 0,16 |
> | 798 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+208% · −32,2%** | +52% · −8,0% | +32% | −6,7% | 3,5 | 67 d | −5,0% | +28% | 0,09 |
> | 799 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+189% · −33,8%** | +40% · −6,6% | +26% | −6,3% | 3,3 | 67 d | −4,3% | +23% | 0,08 |
> | 800 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+211% · −27,7%** | +42% · −4,8% | +25% | −2,2% | 5,3 | 92 d | −3,4% | +17% | 0,03 |
> | 801 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+300% · −35,2%** | +54% · −7,0% | +33% | −6,2% | 4,4 | 74 d | −5,3% | +29% | 0,14 |
> | 802 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+322% · −50,5%** | +59% · −10,0% | +38% | −8,0% | 4,0 | 80 d | −4,0% | +27% | 0,20 |
> | 803 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+161% · −31,3%** | +38% · −6,3% | +28% | −8,3% | 3,6 | 78 d | −3,1% | +20% | 0,21 |
> | 804 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+272% · −36,9%** | +52% · −7,1% | +32% | −6,0% | 3,9 | 65 d | −6,0% | +25% | 0,21 |
> | 805 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+170% · −25,9%** | +44% · −5,5% | +26% | −3,5% | 4,0 | 76 d | −4,5% | +20% | −0,04 |
> | 806 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+306% · −38,1%** | +57% · −7,6% | +36% | −9,1% | 3,6 | 45 d | −6,6% | +28% | 0,31 |
> | 807 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+96% · −25,3%** | +32% · −5,7% | +22% | −4,2% | 3,5 | 72 d | −4,3% | +18% | 0,00 |
> | 808 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+265% · −37,3%** | +51% · −7,6% | +31% | −6,8% | 3,7 | 65 d | −5,7% | +26% | 0,10 |
> | 809 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+234% · −33,0%** | +45% · −5,8% | +28% | −4,5% | 3,4 | 72 d | −4,0% | +22% | 0,01 |
> | 810 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+343% · −53,4%** | +63% · −12,1% | +37% | −4,9% | 4,7 | 54 d | −7,8% | +22% | 0,18 |

> [!example]- Combinações 811 a 840 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 811 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+272% · −35,7%** | +50% · −7,2% | +31% | −5,2% | 3,5 | 65 d | −5,3% | +21% | 0,12 |
> | 812 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+175% · −29,3%** | +45% · −7,0% | +32% | −6,7% | 3,0 | 64 d | −4,5% | +26% | 0,18 |
> | 813 | GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+222% · −33,3%** | +54% · −7,1% | +32% | −4,7% | 4,0 | 65 d | −6,2% | +21% | 0,13 |
> | 814 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+235% · −26,8%** | +55% · −6,4% | +34% | −4,8% | 4,3 | 64 d | −6,8% | +26% | 0,04 |
> | 815 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+330% · −44,5%** | +57% · −9,7% | +34% | −9,4% | 3,3 | 65 d | −5,0% | +28% | 0,32 |
> | 816 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+239% · −48,4%** | +51% · −9,5% | +33% | −7,5% | 4,3 | 75 d | −5,2% | +22% | 0,22 |
> | 817 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+182% · −21,9%** | +38% · −3,9% | +24% | −2,4% | 4,7 | 92 d | −3,0% | +18% | 0,03 |
> | 818 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+316% · −53,9%** | +62% · −11,3% | +37% | −6,3% | 4,2 | 76 d | −4,9% | +27% | 0,19 |
> | 819 | ADX ·ADX + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+223% · −37,3%** | +54% · −9,0% | +31% | −5,5% | 2,5 | 57 d | −3,2% | +23% | 0,23 |
> | 820 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+275% · −42,1%** | +52% · −8,6% | +33% | −7,9% | 4,4 | 64 d | −7,0% | +21% | 0,19 |
> | 821 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+226% · −37,1%** | +45% · −7,3% | +30% | −3,1% | 5,3 | 90 d | −4,0% | +18% | 0,03 |
> | 822 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+295% · −39,6%** | +52% · −8,2% | +31% | −7,0% | 3,3 | 67 d | −4,7% | +25% | 0,25 |
> | 823 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+301% · −44,8%** | +57% · −9,7% | +36% | −8,4% | 4,0 | 55 d | −7,1% | +23% | 0,41 |
> | 824 | Quinta ·QUI + Pullback ·PUL ⚠️ | **+39% · −9,3%** | +26% · −4,2% | +21% | −2,7% | 6,2 | 105 d | −2,4% | +14% | −0,03 |
> | 825 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+258% · −43,9%** | +51% · −8,9% | +33% | −6,7% | 3,6 | 77 d | −3,4% | +24% | 0,14 |
> | 826 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+266% · −54,3%** | +54% · −11,2% | +34% | −5,8% | 4,3 | 77 d | −4,8% | +22% | 0,05 |
> | 827 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+225% · −43,3%** | +46% · −8,9% | +30% | −4,5% | 3,4 | 67 d | −4,9% | +23% | 0,13 |
> | 828 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+220% · −40,9%** | +48% · −8,5% | +32% | −9,6% | 3,6 | 65 d | −5,8% | +28% | 0,29 |
> | 829 | MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+117% · −30,3%** | +44% · −9,9% | +32% | −10,5% | 3,1 | 47 d | −5,6% | +23% | 0,31 |
> | 830 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+346% · −55,0%** | +62% · −10,9% | +35% | −5,6% | 3,8 | 65 d | −6,0% | +23% | 0,18 |
> | 831 | GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+209% · −31,9%** | +54% · −7,7% | +34% | −7,0% | 4,7 | 74 d | −5,8% | +29% | 0,15 |
> | 832 | ADX ·ADX + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+302% · −46,3%** | +54% · −9,3% | +33% | −6,7% | 3,0 | 65 d | −4,2% | +26% | 0,24 |
> | 833 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+247% · −40,3%** | +50% · −7,8% | +33% | −5,8% | 4,4 | 81 d | −4,6% | +25% | 0,07 |
> | 834 | IFR ·TEN + Pôr do sol ·POR | **+78% · −12,3%** | +43% · −5,9% | +29% | −3,8% | 3,4 | 76 d | −3,2% | +20% | −0,13 |
> | 835 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+297% · −50,2%** | +58% · −9,9% | +37% | −7,7% | 3,1 | 64 d | −4,8% | +24% | 0,33 |
> | 836 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+245% · −30,0%** | +46% · −5,7% | +28% | −5,2% | 5,4 | 92 d | −3,9% | +20% | 0,16 |
> | 837 | MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+177% · −29,0%** | +38% · −5,2% | +27% | −7,1% | 3,6 | 74 d | −4,5% | +23% | 0,12 |
> | 838 | ADX ·ADX + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+272% · −45,0%** | +52% · −9,1% | +32% | −7,3% | 3,2 | 65 d | −4,9% | +26% | 0,12 |
> | 839 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+155% · −37,5%** | +45% · −9,8% | +29% | −10,2% | 3,4 | 65 d | −5,5% | +20% | 0,12 |
> | 840 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+279% · −31,7%** | +52% · −5,8% | +33% | −6,1% | 3,4 | 45 d | −6,5% | +26% | 0,08 |

> [!example]- Combinações 841 a 870 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 841 | GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+351% · −44,6%** | +62% · −9,1% | +37% | −7,7% | 4,2 | 65 d | −6,6% | +32% | 0,31 |
> | 842 | MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+167% · −37,9%** | +39% · −7,3% | +29% | −8,3% | 2,6 | 57 d | −3,9% | +24% | 0,15 |
> | 843 | MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+160% · −30,7%** | +54% · −10,3% | +38% | −9,4% | 3,2 | 64 d | −5,4% | +29% | 0,35 |
> | 844 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+258% · −35,5%** | +52% · −7,7% | +31% | −4,9% | 4,2 | 70 d | −6,1% | +22% | 0,06 |
> | 845 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+321% · −41,6%** | +56% · −8,7% | +33% | −9,3% | 3,6 | 64 d | −6,0% | +23% | 0,33 |
> | 846 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+302% · −38,7%** | +53% · −7,4% | +31% | −3,6% | 2,7 | 65 d | −3,1% | +21% | 0,15 |
> | 847 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+272% · −35,3%** | +50% · −6,8% | +30% | −7,9% | 3,5 | 64 d | −5,9% | +25% | 0,26 |
> | 848 | MACD ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+215% · −39,5%** | +53% · −10,1% | +34% | −10,1% | 3,0 | 51 d | −5,6% | +25% | 0,36 |
> | 849 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+222% · −37,2%** | +46% · −6,5% | +30% | −4,1% | 2,6 | 55 d | −3,8% | +22% | 0,10 |
> | 850 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+277% · −42,6%** | +51% · −8,2% | +31% | −5,3% | 3,0 | 65 d | −4,3% | +22% | 0,14 |
> | 851 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+213% · −34,0%** | +44% · −6,3% | +31% | −8,3% | 2,6 | 64 d | −3,3% | +22% | 0,24 |
> | 852 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+307% · −54,9%** | +61% · −11,7% | +37% | −6,7% | 5,3 | 66 d | −7,2% | +22% | 0,27 |
> | 853 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+242% · −29,4%** | +46% · −5,4% | +29% | −4,4% | 4,1 | 83 d | −3,7% | +23% | 0,02 |
> | 854 | ADX ·ADX + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+336% · −45,1%** | +58% · −8,9% | +35% | −5,7% | 2,8 | 65 d | −3,9% | +24% | 0,32 |
> | 855 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+255% · −38,5%** | +51% · −7,4% | +33% | −6,9% | 3,4 | 67 d | −5,0% | +28% | 0,18 |
> | 856 | Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+69% · −8,5%** | +30% · −1,6% | +20% | −0,8% | 3,0 | 70 d | −3,5% | +17% | 0,08 |
> | 857 | Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+194% · −28,2%** | +47% · −6,5% | +28% | −3,3% | 5,4 | 92 d | −4,0% | +16% | 0,11 |
> | 858 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+347% · −46,2%** | +61% · −9,5% | +34% | −4,4% | 4,0 | 76 d | −4,9% | +25% | 0,18 |
> | 859 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+392% · −45,9%** | +65% · −9,7% | +38% | −8,0% | 4,1 | 39 d | −7,8% | +26% | 0,45 |
> | 860 | Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+282% · −40,2%** | +62% · −10,1% | +36% | −5,4% | 5,7 | 81 d | −5,4% | +18% | 0,17 |
> | 861 | GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+253% · −38,3%** | +58% · −8,9% | +34% | −4,9% | 4,7 | 74 d | −6,0% | +20% | 0,13 |
> | 862 | IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+127% · −23,4%** | +37% · −4,9% | +27% | −5,5% | 2,7 | 67 d | −2,5% | +23% | 0,09 |
> | 863 | MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+99% · −20,1%** | +38% · −5,9% | +25% | −7,5% | 3,2 | 73 d | −3,7% | +21% | 0,19 |
> | 864 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+260% · −33,6%** | +49% · −7,0% | +32% | −4,4% | 5,4 | 102 d | −2,9% | +23% | 0,09 |
> | 865 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+199% · −48,5%** | +43% · −10,2% | +30% | −4,1% | 3,8 | 67 d | −5,8% | +18% | 0,01 |
> | 866 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+248% · −48,2%** | +51% · −9,7% | +34% | −6,8% | 3,6 | 65 d | −6,0% | +21% | 0,28 |
> | 867 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+259% · −40,7%** | +50% · −7,9% | +33% | −5,5% | 3,8 | 80 d | −3,9% | +23% | 0,08 |
> | 868 | ADX ·ADX + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+305% · −47,8%** | +56% · −9,4% | +34% | −7,8% | 3,5 | 74 d | −4,4% | +27% | 0,14 |
> | 869 | ADX ·ADX + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+255% · −41,0%** | +50% · −7,6% | +33% | −5,3% | 2,7 | 64 d | −3,9% | +22% | 0,13 |
> | 870 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+194% · −47,8%** | +44% · −10,4% | +30% | −6,3% | 4,1 | 75 d | −5,3% | +18% | 0,10 |

> [!example]- Combinações 871 a 900 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 871 | MACD ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+153% · −34,4%** | +43% · −8,3% | +32% | −9,2% | 2,7 | 57 d | −4,6% | +25% | 0,12 |
> | 872 | GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+148% · −36,4%** | +53% · −11,8% | +34% | −5,6% | 4,3 | 65 d | −6,9% | +21% | 0,02 |
> | 873 | MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+212% · −40,1%** | +45% · −8,0% | +32% | −8,8% | 2,9 | 65 d | −4,3% | +23% | 0,26 |
> | 874 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+257% · −45,8%** | +51% · −9,0% | +34% | −6,9% | 3,1 | 64 d | −5,1% | +26% | 0,14 |
> | 875 | Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+241% · −32,1%** | +47% · −6,1% | +29% | −5,8% | 4,5 | 83 d | −4,5% | +24% | 0,14 |
> | 876 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+238% · −34,0%** | +45% · −6,0% | +28% | −4,5% | 3,2 | 72 d | −4,2% | +23% | 0,02 |
> | 877 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+258% · −33,6%** | +49% · −7,0% | +32% | −4,4% | 5,5 | 102 d | −3,1% | +22% | 0,10 |
> | 878 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+215% · −36,7%** | +45% · −7,0% | +32% | −7,6% | 2,6 | 53 d | −4,6% | +22% | 0,19 |
> | 879 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+277% · −34,6%** | +53% · −7,2% | +33% | −6,9% | 3,3 | 47 d | −6,5% | +29% | 0,25 |
> | 880 | IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+353% · −42,3%** | +58% · −8,6% | +37% | −7,5% | 4,3 | 90 d | −3,5% | +28% | 0,27 |
> | 881 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+275% · −33,1%** | +49% · −6,2% | +30% | −7,0% | 3,6 | 64 d | −6,2% | +24% | 0,18 |
> | 882 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+282% · −47,5%** | +56% · −9,9% | +36% | −8,0% | 3,3 | 76 d | −3,5% | +26% | 0,15 |
> | 883 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+226% · −25,9%** | +43% · −4,2% | +29% | −4,1% | 4,0 | 83 d | −3,8% | +23% | 0,02 |
> | 884 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+402% · −45,2%** | +66% · −9,9% | +36% | −7,9% | 3,9 | 60 d | −7,0% | +26% | 0,29 |
> | 885 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+268% · −37,3%** | +51% · −7,6% | +31% | −6,8% | 3,5 | 65 d | −5,8% | +26% | 0,11 |
> | 886 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+338% · −49,6%** | +59% · −10,3% | +36% | −7,6% | 2,9 | 65 d | −4,4% | +27% | 0,34 |
> | 887 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+190% · −46,4%** | +45% · −10,2% | +30% | −12,0% | 3,3 | 65 d | −5,4% | +22% | 0,35 |
> | 888 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+190% · −39,3%** | +51% · −9,2% | +33% | −6,9% | 4,1 | 73 d | −5,7% | +26% | 0,18 |
> | 889 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+284% · −49,9%** | +56% · −10,8% | +36% | −9,1% | 3,5 | 75 d | −4,3% | +27% | 0,31 |
> | 890 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+250% · −55,8%** | +52% · −12,0% | +35% | −7,6% | 4,4 | 67 d | −6,8% | +20% | 0,25 |
> | 891 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+275% · −42,3%** | +57% · −9,0% | +34% | −7,5% | 4,1 | 66 d | −6,6% | +30% | 0,15 |
> | 892 | GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+204% · −31,6%** | +65% · −10,9% | +35% | −7,9% | 4,0 | 65 d | −6,6% | +26% | 0,32 |
> | 893 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+259% · −42,1%** | +51% · −8,5% | +35% | −9,5% | 3,2 | 69 d | −4,7% | +27% | 0,39 |
> | 894 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+175% · −30,4%** | +39% · −5,7% | +27% | −4,7% | 3,0 | 67 d | −4,2% | +22% | 0,00 |
> | 895 | Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+117% · −26,6%** | +44% · −8,3% | +32% | −8,9% | 2,6 | 53 d | −4,6% | +25% | 0,09 |
> | 896 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+239% · −30,9%** | +45% · −5,6% | +27% | −4,3% | 3,5 | 64 d | −6,1% | +22% | 0,10 |
> | 897 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+172% · −38,8%** | +38% · −8,0% | +26% | −4,6% | 3,5 | 72 d | −4,9% | +21% | 0,05 |
> | 898 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+166% · −44,3%** | +45% · −12,0% | +32% | −7,8% | 3,3 | 64 d | −5,8% | +20% | 0,16 |
> | 899 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+239% · −35,7%** | +46% · −6,1% | +28% | −3,5% | 2,9 | 65 d | −4,5% | +19% | 0,05 |
> | 900 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+245% · −28,2%** | +46% · −5,0% | +28% | −4,3% | 4,7 | 92 d | −3,9% | +21% | 0,07 |

> [!example]- Combinações 901 a 930 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 901 | ADX ·ADX + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+271% · −42,4%** | +52% · −8,5% | +31% | −6,4% | 2,7 | 57 d | −4,8% | +24% | 0,21 |
> | 902 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+289% · −47,1%** | +55% · −9,9% | +36% | −7,9% | 3,6 | 80 d | −3,7% | +25% | 0,22 |
> | 903 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+165% · −31,4%** | +38% · −5,6% | +28% | −6,4% | 2,5 | 65 d | −2,7% | +23% | 0,12 |
> | 904 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+274% · −38,8%** | +50% · −7,8% | +31% | −8,1% | 3,2 | 67 d | −4,7% | +26% | 0,14 |
> | 905 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+274% · −52,2%** | +55% · −10,4% | +37% | −8,1% | 3,6 | 61 d | −6,6% | +26% | 0,35 |
> | 906 | IFR ·TEN | **+68% · −11,2%** | +68% · −11,2% | +43% | −7,5% | 3,7 | 59 d | −6,9% | +28% | — |
> | 907 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+365% · −44,6%** | +61% · −9,5% | +36% | −6,9% | 4,1 | 64 d | −7,2% | +27% | 0,38 |
> | 908 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+121% · −26,2%** | +31% · −4,5% | +25% | −6,2% | 2,6 | 65 d | −3,3% | +22% | 0,05 |
> | 909 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+411% · −53,7%** | +71% · −10,5% | +41% | −7,2% | 4,1 | 64 d | −7,1% | +29% | 0,32 |
> | 910 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+212% · −33,9%** | +43% · −6,5% | +28% | −3,2% | 4,2 | 74 d | −5,8% | +17% | 0,05 |
> | 911 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+238% · −26,9%** | +55% · −6,3% | +34% | −4,8% | 4,2 | 64 d | −7,2% | +25% | 0,08 |
> | 912 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+206% · −34,4%** | +52% · −8,7% | +32% | −7,9% | 3,4 | 67 d | −5,5% | +25% | 0,27 |
> | 913 | MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+111% · −20,1%** | +33% · −4,0% | +23% | −5,2% | 2,7 | 67 d | −3,0% | +20% | 0,07 |
> | 914 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+240% · −43,3%** | +58% · −10,0% | +37% | −6,4% | 3,6 | 64 d | −6,4% | +27% | 0,07 |
> | 915 | MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+229% · −42,8%** | +46% · −8,7% | +31% | −9,0% | 3,1 | 69 d | −4,5% | +25% | 0,27 |
> | 916 | Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+329% · −41,0%** | +58% · −7,8% | +35% | −6,5% | 5,0 | 81 d | −5,5% | +26% | 0,18 |
> | 917 | ADX ·ADX + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+275% · −45,1%** | +53% · −9,2% | +32% | −7,4% | 3,1 | 65 d | −5,0% | +25% | 0,14 |
> | 918 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+108% · −16,2%** | +33% · −3,1% | +23% | −4,0% | 2,7 | 67 d | −2,8% | +19% | 0,11 |
> | 919 | Donchian ·TEN + IFR ·TEN + Pullback ·PUL | **+195% · −26,3%** | +62% · −9,0% | +37% | −4,5% | 5,8 | 92 d | −4,6% | +20% | 0,14 |
> | 920 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+369% · −43,4%** | +64% · −9,1% | +40% | −7,8% | 4,2 | 64 d | −7,3% | +29% | 0,39 |
> | 921 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+225% · −42,3%** | +47% · −7,9% | +31% | −5,9% | 3,1 | 65 d | −5,0% | +25% | 0,09 |
> | 922 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+337% · −39,8%** | +60% · −8,6% | +33% | −5,9% | 4,2 | 70 d | −6,4% | +23% | 0,14 |
> | 923 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+308% · −39,6%** | +55% · −7,7% | +33% | −6,0% | 3,3 | 76 d | −3,7% | +23% | 0,13 |
> | 924 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+235% · −31,3%** | +55% · −7,6% | +34% | −5,9% | 3,9 | 64 d | −6,9% | +24% | 0,26 |
> | 925 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+124% · −17,0%** | +36% · −3,1% | +27% | −5,4% | 3,0 | 64 d | −5,1% | +21% | −0,02 |
> | 926 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+289% · −50,8%** | +58% · −11,2% | +37% | −9,4% | 3,4 | 65 d | −5,9% | +25% | 0,35 |
> | 927 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+202% · −38,6%** | +43% · −7,7% | +29% | −8,0% | 3,4 | 72 d | −4,8% | +23% | 0,13 |
> | 928 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+187% · −36,0%** | +40% · −7,2% | +26% | −7,2% | 3,2 | 67 d | −4,8% | +22% | 0,12 |
> | 929 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+263% · −47,6%** | +54% · −10,0% | +32% | −4,5% | 3,6 | 77 d | −4,3% | +22% | 0,20 |
> | 930 | Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+70% · −11,9%** | +30% · −2,6% | +20% | −2,8% | 3,4 | 78 d | −3,5% | +17% | 0,03 |

> [!example]- Combinações 931 a 960 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 931 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+185% · −34,4%** | +41% · −6,5% | +29% | −6,4% | 3,0 | 67 d | −4,5% | +22% | 0,14 |
> | 932 | ADX ·ADX + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+239% · −44,2%** | +59% · −11,5% | +37% | −8,7% | 3,6 | 76 d | −4,5% | +25% | 0,29 |
> | 933 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+367% · −50,6%** | +64% · −10,0% | +36% | −4,9% | 5,0 | 66 d | −7,5% | +19% | 0,20 |
> | 934 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+183% · −35,8%** | +40% · −7,0% | +29% | −9,9% | 3,1 | 73 d | −3,7% | +20% | 0,16 |
> | 935 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+205% · −33,2%** | +43% · −6,3% | +29% | −7,1% | 3,5 | 72 d | −5,0% | +26% | 0,02 |
> | 936 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+221% · −50,7%** | +59% · −13,4% | +37% | −9,7% | 4,0 | 61 d | −7,4% | +21% | 0,43 |
> | 937 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+120% · −30,5%** | +37% · −7,4% | +26% | −8,2% | 3,3 | 67 d | −5,2% | +21% | 0,08 |
> | 938 | MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+118% · −29,0%** | +44% · −9,6% | +32% | −8,5% | 2,8 | 69 d | −3,3% | +27% | 0,20 |
> | 939 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+235% · −39,7%** | +58% · −10,5% | +36% | −10,9% | 3,4 | 67 d | −5,4% | +30% | 0,32 |
> | 940 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+337% · −47,2%** | +63% · −10,4% | +37% | −10,3% | 4,1 | 56 d | −7,7% | +29% | 0,35 |
> | 941 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+237% · −39,0%** | +46% · −7,1% | +28% | −3,8% | 2,8 | 65 d | −4,2% | +22% | 0,12 |
> | 942 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+250% · −45,0%** | +49% · −9,5% | +31% | −4,9% | 4,2 | 67 d | −6,7% | +21% | 0,12 |
> | 943 | MACD ·TEN + Pullback ·PUL | **+64% · −15,6%** | +37% · −7,6% | +29% | −6,7% | 4,4 | 99 d | −3,0% | +23% | −0,18 |
> | 944 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+311% · −52,2%** | +63% · −10,8% | +36% | −4,6% | 3,9 | 57 d | −7,5% | +25% | 0,19 |
> | 945 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+269% · −52,9%** | +54% · −10,8% | +33% | −5,4% | 4,1 | 80 d | −4,9% | +23% | 0,05 |
> | 946 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+137% · −31,8%** | +34% · −5,9% | +26% | −8,8% | 3,1 | 73 d | −3,6% | +20% | 0,17 |
> | 947 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+182% · −32,1%** | +50% · −8,1% | +32% | −7,8% | 3,9 | 67 d | −6,3% | +28% | 0,05 |
> | 948 | GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+268% · −41,3%** | +52% · −8,0% | +32% | −7,2% | 3,8 | 65 d | −6,5% | +23% | 0,31 |
> | 949 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+339% · −46,2%** | +61% · −9,6% | +36% | −7,3% | 4,1 | 39 d | −8,3% | +21% | 0,44 |
> | 950 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+296% · −38,8%** | +53% · −7,4% | +32% | −4,5% | 3,3 | 67 d | −5,4% | +25% | 0,13 |
> | 951 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+363% · −39,4%** | +60% · −7,9% | +35% | −5,5% | 4,5 | 70 d | −6,8% | +22% | 0,21 |
> | 952 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+300% · −41,5%** | +57% · −8,2% | +36% | −7,3% | 4,4 | 66 d | −7,2% | +29% | 0,17 |
> | 953 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+217% · −38,4%** | +54% · −9,6% | +36% | −8,0% | 3,5 | 69 d | −5,6% | +25% | 0,34 |
> | 954 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+283% · −40,9%** | +55% · −8,4% | +33% | −9,4% | 3,3 | 42 d | −6,8% | +23% | 0,33 |
> | 955 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+202% · −46,8%** | +43% · −9,6% | +30% | −4,1% | 3,6 | 67 d | −5,8% | +19% | 0,03 |
> | 956 | GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+168% · −28,2%** | +44% · −6,6% | +26% | −5,1% | 3,8 | 76 d | −5,1% | +17% | 0,12 |
> | 957 | MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+198% · −36,7%** | +51% · −9,1% | +36% | −9,9% | 2,8 | 53 d | −5,3% | +23% | 0,31 |
> | 958 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+57% · −19,5%** | +23% · −4,2% | +19% | −2,0% | 5,0 | 119 d | −0,8% | +15% | 0,06 |
> | 959 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+192% · −44,6%** | +44% · −9,6% | +30% | −11,2% | 3,5 | 75 d | −4,8% | +23% | 0,20 |
> | 960 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+248% · −28,1%** | +46% · −5,0% | +28% | −4,3% | 4,8 | 92 d | −4,3% | +22% | 0,06 |

> [!example]- Combinações 961 a 990 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 961 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+262% · −43,2%** | +51% · −9,0% | +31% | −5,3% | 4,3 | 56 d | −8,1% | +21% | 0,00 |
> | 962 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+393% · −48,8%** | +70% · −10,2% | +41% | −6,5% | 4,8 | 54 d | −8,8% | +26% | 0,35 |
> | 963 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+263% · −56,0%** | +55% · −12,3% | +34% | −6,1% | 4,0 | 76 d | −5,4% | +21% | 0,18 |
> | 964 | ADX ·ADX + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+276% · −50,3%** | +56% · −10,8% | +36% | −9,2% | 3,2 | 75 d | −4,0% | +29% | 0,25 |
> | 965 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+321% · −52,7%** | +59% · −10,7% | +36% | −8,0% | 3,5 | 80 d | −3,7% | +23% | 0,39 |
> | 966 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+281% · −32,3%** | +53% · −5,9% | +33% | −6,0% | 3,3 | 45 d | −6,8% | +25% | 0,13 |
> | 967 | GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+225% · −32,3%** | +54% · −7,4% | +32% | −4,8% | 3,8 | 65 d | −6,7% | +23% | 0,13 |
> | 968 | GPS médias ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+253% · −42,7%** | +64% · −10,5% | +40% | −9,1% | 4,4 | 65 d | −7,5% | +31% | 0,34 |
> | 969 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+208% · −39,8%** | +52% · −9,8% | +33% | −4,4% | 5,4 | 89 d | −5,0% | +17% | 0,05 |
> | 970 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+307% · −42,0%** | +57% · −9,1% | +36% | −7,2% | 4,0 | 67 d | −6,7% | +26% | 0,29 |
> | 971 | GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+104% · −31,8%** | +41% · −10,4% | +27% | −5,9% | 4,1 | 76 d | −5,6% | +15% | 0,19 |
> | 972 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+258% · −39,9%** | +51% · −7,3% | +33% | −5,0% | 2,6 | 64 d | −4,2% | +21% | 0,16 |
> | 973 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+249% · −34,6%** | +49% · −7,2% | +28% | −4,8% | 3,9 | 71 d | −6,2% | +20% | 0,03 |
> | 974 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+325% · −42,1%** | +61% · −8,4% | +39% | −7,5% | 3,7 | 65 d | −6,6% | +32% | 0,28 |
> | 975 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+278% · −44,3%** | +53% · −9,2% | +34% | −7,4% | 3,7 | 64 d | −6,9% | +25% | 0,32 |
> | 976 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+153% · −48,4%** | +37% · −9,5% | +27% | −3,4% | 3,9 | 74 d | −5,7% | +15% | 0,00 |
> | 977 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+250% · −45,2%** | +51% · −9,4% | +33% | −7,8% | 3,3 | 67 d | −5,4% | +26% | 0,28 |
> | 978 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+274% · −46,5%** | +55% · −10,0% | +36% | −8,3% | 4,4 | 81 d | −5,3% | +29% | 0,25 |
> | 979 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+276% · −36,3%** | +51% · −7,1% | +32% | −6,9% | 4,5 | 83 d | −5,1% | +26% | 0,17 |
> | 980 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+221% · −42,4%** | +47% · −7,9% | +32% | −5,5% | 4,3 | 76 d | −5,9% | +23% | 0,03 |
> | 981 | GPS médias ·TEN + IFR ·TEN | **+134% · −25,8%** | +69% · −13,1% | +40% | −10,0% | 4,3 | 65 d | −7,4% | +27% | 0,46 |
> | 982 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+249% · −38,1%** | +48% · −7,4% | +31% | −6,1% | 3,5 | 69 d | −5,7% | +22% | 0,23 |
> | 983 | ADX ·ADX + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+255% · −42,9%** | +51% · −8,2% | +33% | −6,1% | 2,6 | 65 d | −4,0% | +25% | 0,24 |
> | 984 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+275% · −44,7%** | +52% · −9,3% | +34% | −8,6% | 3,4 | 69 d | −5,5% | +25% | 0,46 |
> | 985 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+240% · −42,6%** | +59% · −10,2% | +37% | −7,2% | 3,8 | 80 d | −4,6% | +26% | 0,14 |
> | 986 | Donchian ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+389% · −46,0%** | +65% · −9,7% | +38% | −8,1% | 4,4 | 66 d | −7,3% | +31% | 0,33 |
> | 987 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+314% · −41,1%** | +55% · −7,7% | +33% | −5,2% | 4,1 | 101 d | −2,2% | +22% | 0,17 |
> | 988 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+286% · −43,3%** | +54% · −9,1% | +33% | −10,6% | 3,4 | 39 d | −7,3% | +22% | 0,43 |
> | 989 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+257% · −52,1%** | +54% · −10,4% | +34% | −7,7% | 3,8 | 55 d | −7,6% | +18% | 0,41 |
> | 990 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+235% · −36,8%** | +45% · −7,2% | +28% | −5,4% | 3,2 | 72 d | −4,6% | +21% | 0,13 |

> [!example]- Combinações 991 a 1020 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 991 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+132% · −23,1%** | +47% · −7,1% | +33% | −5,3% | 3,4 | 67 d | −5,7% | +27% | 0,08 |
> | 992 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+265% · −45,5%** | +53% · −9,4% | +32% | −4,2% | 3,7 | 80 d | −4,6% | +23% | 0,07 |
> | 993 | Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+198% · −35,9%** | +41% · −6,7% | +28% | −6,5% | 3,4 | 78 d | −4,0% | +24% | 0,10 |
> | 994 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+144% · −26,0%** | +40% · −6,1% | +24% | −4,2% | 3,1 | 67 d | −5,0% | +21% | 0,01 |
> | 995 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+198% · −37,0%** | +42% · −7,1% | +28% | −4,3% | 4,6 | 89 d | −4,8% | +18% | 0,09 |
> | 996 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+276% · −44,5%** | +51% · −7,8% | +31% | −5,7% | 4,1 | 97 d | −2,8% | +22% | 0,06 |
> | 997 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+304% · −45,6%** | +56% · −9,5% | +34% | −7,7% | 2,7 | 57 d | −5,0% | +24% | 0,29 |
> | 998 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+161% · −28,8%** | +37% · −5,7% | +28% | −7,4% | 4,1 | 99 d | −2,8% | +19% | 0,09 |
> | 999 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+173% · −35,0%** | +40% · −6,6% | +27% | −5,6% | 2,9 | 67 d | −4,7% | +19% | 0,09 |
> | 1000 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+177% · −31,9%** | +39% · −6,5% | +27% | −4,2% | 4,3 | 92 d | −4,1% | +18% | 0,08 |
> | 1001 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+266% · −32,9%** | +61% · −8,0% | +37% | −9,0% | 3,7 | 64 d | −7,0% | +28% | 0,34 |
> | 1002 | MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+155% · −34,4%** | +44% · −8,3% | +32% | −9,2% | 2,4 | 57 d | −4,2% | +25% | 0,18 |
> | 1003 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+295% · −47,9%** | +58% · −10,0% | +35% | −5,7% | 3,7 | 80 d | −4,6% | +27% | 0,20 |
> | 1004 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+344% · −42,1%** | +59% · −8,4% | +33% | −6,3% | 3,8 | 65 d | −6,8% | +22% | 0,13 |
> | 1005 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+282% · −33,8%** | +62% · −9,2% | +36% | −7,8% | 3,6 | 39 d | −7,6% | +27% | 0,40 |
> | 1006 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+204% · −43,2%** | +45% · −8,9% | +32% | −9,0% | 3,2 | 73 d | −4,6% | +22% | 0,39 |
> | 1007 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+208% · −40,0%** | +53% · −10,3% | +34% | −4,8% | 3,4 | 67 d | −5,9% | +25% | 0,04 |
> | 1008 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+235% · −36,7%** | +47% · −7,0% | +32% | −6,1% | 3,3 | 73 d | −4,9% | +24% | 0,19 |
> | 1009 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+125% · −21,0%** | +36% · −5,0% | +27% | −4,3% | 2,7 | 73 d | −2,1% | +20% | 0,07 |
> | 1010 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+201% · −38,1%** | +44% · −7,7% | +30% | −8,1% | 2,9 | 67 d | −4,7% | +24% | 0,12 |
> | 1011 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+211% · −38,1%** | +52% · −9,8% | +33% | −4,4% | 5,3 | 92 d | −4,9% | +18% | 0,05 |
> | 1012 | GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+264% · −39,3%** | +51% · −8,2% | +31% | −7,7% | 3,4 | 65 d | −6,3% | +27% | 0,24 |
> | 1013 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+209% · −52,1%** | +54% · −14,1% | +36% | −6,9% | 4,8 | 67 d | −7,7% | +16% | 0,21 |
> | 1014 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+323% · −36,5%** | +70% · −9,4% | +42% | −7,0% | 4,6 | 64 d | −8,2% | +27% | 0,33 |
> | 1015 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+266% · −51,3%** | +66% · −14,0% | +39% | −6,3% | 5,4 | 66 d | −8,2% | +18% | 0,23 |
> | 1016 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+307% · −43,6%** | +57% · −8,8% | +32% | −4,2% | 3,4 | 65 d | −6,2% | +26% | 0,18 |
> | 1017 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+125% · −43,8%** | +34% · −9,4% | +24% | −8,1% | 3,4 | 75 d | −4,9% | +14% | 0,09 |
> | 1018 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+269% · −34,9%** | +49% · −6,7% | +30% | −3,8% | 4,3 | 81 d | −5,5% | +20% | 0,10 |
> | 1019 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+300% · −39,7%** | +53% · −7,6% | +32% | −4,5% | 3,2 | 67 d | −5,5% | +26% | 0,16 |
> | 1020 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+297% · −51,7%** | +54% · −10,3% | +34% | −5,9% | 4,6 | 67 d | −7,6% | +18% | 0,21 |

> [!example]- Combinações 1021 a 1050 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1021 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+369% · −51,9%** | +68% · −10,4% | +40% | −7,0% | 3,5 | 65 d | −6,4% | +30% | 0,32 |
> | 1022 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+278% · −41,0%** | +51% · −7,8% | +31% | −5,1% | 3,0 | 80 d | −2,3% | +20% | 0,19 |
> | 1023 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+156% · −33,3%** | +43% · −8,2% | +28% | −4,7% | 3,5 | 72 d | −5,7% | +22% | −0,07 |
> | 1024 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+256% · −47,7%** | +52% · −9,6% | +34% | −8,1% | 2,9 | 65 d | −5,2% | +28% | 0,24 |
> | 1025 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+228% · −39,1%** | +47% · −7,0% | +31% | −4,6% | 3,1 | 67 d | −5,3% | +23% | 0,06 |
> | 1026 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+301% · −43,3%** | +54% · −9,2% | +33% | −6,4% | 3,9 | 70 d | −6,6% | +24% | 0,26 |
> | 1027 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+292% · −59,0%** | +59% · −12,6% | +37% | −7,2% | 3,9 | 77 d | −5,5% | +26% | 0,19 |
> | 1028 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+182% · −36,4%** | +41% · −7,3% | +29% | −6,5% | 3,3 | 75 d | −4,8% | +19% | 0,20 |
> | 1029 | IFR ·TEN + Pullback ·PUL + Onda ·OND | **+135% · −23,4%** | +48% · −7,3% | +34% | −6,6% | 3,1 | 63 d | −6,1% | +26% | 0,09 |
> | 1030 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+268% · −49,8%** | +65% · −12,7% | +41% | −10,3% | 3,6 | 77 d | −4,9% | +29% | 0,41 |
> | 1031 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+205% · −40,0%** | +45% · −7,9% | +32% | −7,8% | 3,2 | 75 d | −4,5% | +23% | 0,26 |
> | 1032 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+279% · −39,0%** | +62% · −9,3% | +35% | −4,9% | 2,7 | 65 d | −4,5% | +23% | 0,29 |
> | 1033 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+229% · −29,4%** | +53% · −7,0% | +31% | −5,7% | 4,8 | 92 d | −4,9% | +22% | 0,15 |
> | 1034 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+190% · −35,9%** | +41% · −7,2% | +26% | −7,2% | 3,0 | 67 d | −5,1% | +23% | 0,11 |
> | 1035 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+223% · −40,6%** | +48% · −7,5% | +32% | −5,5% | 4,1 | 76 d | −6,0% | +22% | 0,06 |
> | 1036 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+287% · −65,6%** | +59% · −15,8% | +37% | −7,0% | 4,2 | 78 d | −5,7% | +20% | 0,22 |
> | 1037 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+184% · −32,0%** | +50% · −8,1% | +32% | −7,8% | 3,6 | 67 d | −6,5% | +27% | 0,09 |
> | 1038 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+227% · −53,7%** | +48% · −11,1% | +33% | −6,6% | 3,4 | 65 d | −6,4% | +22% | 0,17 |
> | 1039 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+235% · −49,8%** | +53% · −10,4% | +32% | −10,6% | 3,9 | 57 d | −8,0% | +18% | 0,37 |
> | 1040 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+158% · −33,2%** | +38% · −6,2% | +28% | −8,7% | 3,2 | 75 d | −4,5% | +21% | 0,21 |
> | 1041 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+206% · −34,4%** | +52% · −7,7% | +33% | −4,4% | 2,5 | 57 d | −4,7% | +21% | 0,06 |
> | 1042 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+241% · −34,1%** | +57% · −9,1% | +36% | −5,9% | 5,2 | 102 d | −4,3% | +24% | 0,21 |
> | 1043 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+222% · −35,2%** | +53% · −8,0% | +31% | −4,7% | 2,9 | 77 d | −2,5% | +20% | 0,15 |
> | 1044 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+258% · −47,8%** | +51% · −10,3% | +32% | −7,1% | 3,7 | 65 d | −7,0% | +18% | 0,24 |
> | 1045 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+323% · −38,5%** | +59% · −7,9% | +35% | −4,4% | 3,8 | 64 d | −7,4% | +23% | 0,11 |
> | 1046 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+228% · −41,2%** | +47% · −7,8% | +31% | −5,8% | 2,9 | 65 d | −5,4% | +26% | 0,11 |
> | 1047 | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+81% · −21,5%** | +29% · −4,9% | +23% | −5,0% | 2,5 | 65 d | −4,0% | +23% | 0,05 |
> | 1048 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+263% · −35,7%** | +61% · −9,1% | +38% | −6,3% | 4,3 | 67 d | −7,5% | +23% | 0,20 |
> | 1049 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+272% · −41,2%** | +57% · −8,7% | +34% | −7,5% | 4,1 | 66 d | −7,4% | +29% | 0,13 |
> | 1050 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+294% · −43,8%** | +56% · −9,4% | +34% | −9,5% | 3,4 | 65 d | −6,4% | +27% | 0,31 |

> [!example]- Combinações 1051 a 1080 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1051 | ADX ·ADX + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+271% · −48,0%** | +53% · −10,1% | +32% | −8,4% | 2,9 | 65 d | −5,4% | +27% | 0,21 |
> | 1052 | 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+170% · −34,7%** | +46% · −8,5% | +32% | −8,4% | 3,0 | 67 d | −5,2% | +23% | 0,23 |
> | 1053 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+260% · −44,8%** | +52% · −8,7% | +34% | −6,9% | 2,9 | 65 d | −5,4% | +25% | 0,18 |
> | 1054 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+167% · −33,8%** | +46% · −7,7% | +32% | −7,0% | 3,6 | 75 d | −5,4% | +20% | 0,17 |
> | 1055 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+268% · −50,3%** | +56% · −10,3% | +34% | −9,2% | 4,8 | 78 d | −6,3% | +18% | 0,26 |
> | 1056 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+181% · −36,9%** | +40% · −7,2% | +25% | −7,6% | 3,1 | 67 d | −5,5% | +17% | 0,07 |
> | 1057 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+244% · −29,6%** | +46% · −5,5% | +28% | −4,3% | 3,7 | 83 d | −4,4% | +23% | 0,03 |
> | 1058 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+168% · −27,4%** | +36% · −4,7% | +25% | −6,3% | 2,8 | 74 d | −3,2% | +18% | 0,13 |
> | 1059 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+122% · −30,5%** | +38% · −7,4% | +26% | −8,2% | 3,0 | 67 d | −5,3% | +23% | 0,06 |
> | 1060 | ADX ·ADX + Donchian ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+363% · −56,8%** | +67% · −11,6% | +38% | −8,3% | 3,6 | 60 d | −7,5% | +29% | 0,29 |
> | 1061 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+277% · −37,6%** | +61% · −9,8% | +35% | −8,0% | 3,2 | 67 d | −5,8% | +29% | 0,27 |
> | 1062 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+225% · −33,2%** | +47% · −6,3% | +30% | −5,4% | 3,6 | 87 d | −3,6% | +25% | 0,13 |
> | 1063 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+299% · −41,6%** | +53% · −7,9% | +32% | −4,7% | 2,6 | 69 d | −3,6% | +24% | 0,23 |
> | 1064 | Donchian ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+231% · −41,7%** | +58% · −10,1% | +37% | −7,7% | 4,5 | 81 d | −5,9% | +27% | 0,21 |
> | 1065 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+230% · −42,5%** | +47% · −9,1% | +29% | −8,9% | 3,3 | 73 d | −5,3% | +21% | 0,17 |
> | 1066 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Bollinger ·TEN | **+242% · −36,0%** | +58% · −9,4% | +33% | −9,5% | 3,6 | 39 d | −8,2% | +20% | 0,38 |
> | 1067 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+49% · −19,3%** | +24% · −6,0% | +20% | −3,0% | 4,5 | 121 d | −1,2% | +14% | 0,05 |
> | 1068 | ADX ·ADX + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+302% · −51,4%** | +57% · −11,1% | +35% | −9,6% | 3,0 | 65 d | −5,6% | +26% | 0,31 |
> | 1069 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+256% · −54,1%** | +56% · −11,4% | +36% | −10,8% | 4,0 | 73 d | −6,4% | +24% | 0,46 |
> | 1070 | ADX ·ADX + Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+280% · −41,3%** | +55% · −8,0% | +31% | −6,0% | 2,9 | 60 d | −5,9% | +24% | 0,18 |
> | 1071 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+294% · −53,4%** | +61% · −11,4% | +37% | −7,0% | 4,3 | 69 d | −7,4% | +26% | 0,22 |
> | 1072 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+334% · −39,8%** | +59% · −8,7% | +33% | −5,9% | 4,2 | 70 d | −7,2% | +22% | 0,16 |
> | 1073 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+132% · −43,0%** | +34% · −9,1% | +26% | −5,0% | 3,2 | 78 d | −4,0% | +14% | 0,11 |
> | 1074 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+280% · −43,7%** | +53% · −9,3% | +34% | −6,2% | 3,9 | 70 d | −6,9% | +26% | 0,19 |
> | 1075 | ADX ·ADX + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+261% · −48,2%** | +65% · −12,7% | +41% | −10,4% | 3,3 | 76 d | −4,8% | +30% | 0,29 |
> | 1076 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+243% · −37,4%** | +49% · −7,4% | +31% | −8,3% | 3,4 | 64 d | −6,8% | +21% | 0,14 |
> | 1077 | Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+144% · −23,0%** | +34% · −4,0% | +23% | −4,4% | 3,8 | 93 d | −3,6% | +22% | 0,04 |
> | 1078 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+289% · −35,8%** | +51% · −6,8% | +33% | −8,3% | 3,1 | 76 d | −4,2% | +21% | 0,28 |
> | 1079 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+319% · −53,2%** | +61% · −10,2% | +37% | −5,5% | 3,3 | 67 d | −6,1% | +26% | 0,14 |
> | 1080 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+234% · −53,5%** | +51% · −11,5% | +32% | −5,8% | 3,4 | 67 d | −6,1% | +22% | 0,13 |

> [!example]- Combinações 1081 a 1110 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1081 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+261% · −56,5%** | +56% · −11,9% | +35% | −7,1% | 3,3 | 65 d | −6,4% | +27% | 0,19 |
> | 1082 | ADX ·ADX + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+283% · −43,8%** | +63% · −11,0% | +37% | −7,3% | 2,8 | 65 d | −5,2% | +28% | 0,31 |
> | 1083 | Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+214% · −29,3%** | +44% · −5,5% | +27% | −5,9% | 3,6 | 79 d | −5,1% | +24% | 0,08 |
> | 1084 | Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+34% · −11,2%** | +20% · −2,9% | +17% | −2,7% | 2,3 | 67 d | −1,9% | +16% | 0,06 |
> | 1085 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+121% · −23,5%** | +36% · −5,2% | +27% | −5,4% | 4,2 | 106 d | −3,3% | +17% | 0,01 |
> | 1086 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+176% · −33,6%** | +40% · −6,3% | +27% | −5,6% | 2,8 | 67 d | −4,8% | +20% | 0,09 |
> | 1087 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+177% · −54,9%** | +42% · −11,8% | +30% | −6,0% | 3,7 | 67 d | −6,8% | +18% | 0,09 |
> | 1088 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+311% · −42,2%** | +58% · −8,8% | +32% | −3,8% | 3,2 | 65 d | −6,3% | +25% | 0,16 |
> | 1089 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+198% · −51,5%** | +44% · −11,6% | +30% | −5,3% | 3,5 | 67 d | −6,4% | +17% | 0,16 |
> | 1090 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+246% · −36,8%** | +49% · −7,4% | +28% | −5,7% | 3,9 | 71 d | −6,8% | +18% | 0,11 |
> | 1091 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+395% · −51,1%** | +72% · −10,3% | +38% | −5,1% | 3,7 | 60 d | −7,8% | +26% | 0,35 |
> | 1092 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+179% · −44,6%** | +41% · −8,9% | +29% | −6,5% | 4,0 | 78 d | −5,8% | +18% | 0,19 |
> | 1093 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+241% · −35,0%** | +46% · −6,1% | +28% | −3,7% | 2,9 | 81 d | −2,4% | +18% | 0,08 |
> | 1094 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+225% · −46,5%** | +49% · −8,9% | +32% | −8,0% | 3,1 | 77 d | −3,9% | +27% | 0,14 |
> | 1095 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+211% · −38,0%** | +53% · −9,6% | +34% | −4,8% | 3,3 | 67 d | −6,1% | +26% | 0,11 |
> | 1096 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+412% · −53,3%** | +68% · −10,5% | +38% | −6,3% | 3,6 | 64 d | −7,3% | +27% | 0,31 |
> | 1097 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+343% · −55,2%** | +65% · −11,9% | +38% | −7,8% | 4,1 | 74 d | −6,6% | +23% | 0,33 |
> | 1098 | 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+119% · −24,9%** | +61% · −12,3% | +41% | −8,9% | 3,7 | 64 d | −7,6% | +30% | 0,16 |
> | 1099 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+220% · −36,2%** | +53% · −8,4% | +31% | −4,5% | 2,8 | 65 d | −5,2% | +21% | 0,10 |
> | 1100 | Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+220% · −31,5%** | +52% · −7,6% | +29% | −5,7% | 3,5 | 64 d | −7,2% | +22% | 0,20 |
> | 1101 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+127% · −42,9%** | +34% · −9,2% | +24% | −8,3% | 3,2 | 75 d | −5,0% | +15% | 0,08 |
> | 1102 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+245% · −36,8%** | +49% · −7,3% | +31% | −8,3% | 3,5 | 64 d | −7,2% | +20% | 0,18 |
> | 1103 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+167% · −49,7%** | +41% · −11,0% | +28% | −7,6% | 3,3 | 67 d | −6,2% | +17% | 0,17 |
> | 1104 | Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+265% · −36,1%** | +49% · −6,9% | +30% | −5,1% | 4,7 | 83 d | −5,9% | +18% | 0,16 |
> | 1105 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+210% · −41,5%** | +45% · −8,6% | +28% | −4,4% | 4,9 | 94 d | −5,3% | +17% | 0,07 |
> | 1106 | MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+153% · −27,7%** | +41% · −6,4% | +27% | −8,3% | 2,6 | 71 d | −3,5% | +18% | 0,23 |
> | 1107 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+279% · −46,0%** | +55% · −8,9% | +36% | −7,5% | 3,1 | 65 d | −6,2% | +28% | 0,12 |
> | 1108 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+228% · −39,7%** | +50% · −8,2% | +31% | −6,4% | 3,9 | 74 d | −6,3% | +25% | 0,03 |
> | 1109 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+318% · −48,6%** | +60% · −10,2% | +38% | −7,9% | 3,8 | 64 d | −7,8% | +24% | 0,39 |
> | 1110 | Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+169% · −21,6%** | +44% · −5,1% | +25% | −3,2% | 4,2 | 92 d | −4,8% | +18% | 0,03 |

> [!example]- Combinações 1111 a 1140 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1111 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+250% · −38,4%** | +50% · −7,8% | +33% | −5,8% | 4,2 | 91 d | −5,0% | +26% | 0,10 |
> | 1112 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+225% · −36,1%** | +46% · −7,1% | +30% | −3,9% | 2,3 | 64 d | −4,2% | +22% | 0,11 |
> | 1113 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+190% · −41,9%** | +41% · −8,0% | +26% | −5,4% | 2,2 | 64 d | −3,6% | +21% | 0,12 |
> | 1114 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+274% · −34,9%** | +50% · −6,4% | +30% | −4,1% | 3,9 | 106 d | −2,7% | +20% | 0,06 |
> | 1115 | GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+222% · −37,1%** | +54% · −8,7% | +32% | −6,3% | 3,7 | 65 d | −7,4% | +20% | 0,27 |
> | 1116 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+151% · −28,5%** | +37% · −5,1% | +26% | −5,1% | 3,6 | 81 d | −5,1% | +20% | −0,03 |
> | 1117 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+247% · −46,5%** | +52% · −9,1% | +35% | −7,9% | 4,0 | 74 d | −6,6% | +27% | 0,19 |
> | 1118 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+229% · −44,4%** | +47% · −9,6% | +29% | −9,7% | 3,1 | 65 d | −6,2% | +20% | 0,30 |
> | 1119 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+256% · −46,2%** | +53% · −8,8% | +32% | −4,0% | 4,4 | 70 d | −7,7% | +20% | 0,08 |
> | 1120 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+210% · −24,6%** | +41% · −3,9% | +25% | −1,8% | 4,3 | 101 d | −4,3% | +18% | −0,01 |
> | 1121 | GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+295% · −43,3%** | +53% · −8,9% | +32% | −5,4% | 3,2 | 67 d | −6,0% | +23% | 0,26 |
> | 1122 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+334% · −51,0%** | +63% · −10,2% | +37% | −5,5% | 4,5 | 67 d | −8,1% | +23% | 0,22 |
> | 1123 | IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+253% · −32,0%** | +47% · −5,7% | +30% | −6,3% | 3,4 | 89 d | −3,5% | +21% | 0,21 |
> | 1124 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+230% · −33,5%** | +45% · −6,1% | +30% | −6,3% | 3,1 | 81 d | −3,7% | +23% | 0,15 |
> | 1125 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+265% · −41,7%** | +51% · −8,7% | +31% | −5,3% | 4,1 | 64 d | −8,4% | +22% | 0,02 |
> | 1126 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+309% · −48,3%** | +58% · −9,3% | +35% | −8,4% | 3,9 | 69 d | −7,1% | +22% | 0,40 |
> | 1127 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+241% · −55,3%** | +50% · −13,1% | +33% | −8,5% | 3,3 | 67 d | −6,3% | +21% | 0,20 |
> | 1128 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+292% · −43,4%** | +56% · −8,9% | +34% | −8,7% | 4,0 | 64 d | −8,2% | +25% | 0,16 |
> | 1129 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+243% · −41,8%** | +59% · −10,3% | +37% | −7,2% | 3,5 | 80 d | −5,2% | +25% | 0,14 |
> | 1130 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+111% · −17,3%** | +41% · −4,9% | +30% | −7,9% | 3,1 | 65 d | −6,2% | +25% | −0,03 |
> | 1131 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+163% · −28,9%** | +37% · −5,3% | +28% | −8,4% | 2,6 | 66 d | −4,8% | +21% | 0,13 |
> | 1132 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+151% · −24,9%** | +40% · −5,5% | +27% | −7,0% | 3,0 | 77 d | −3,9% | +17% | 0,14 |
> | 1133 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+321% · −39,2%** | +60% · −7,5% | +35% | −5,1% | 3,5 | 64 d | −7,4% | +25% | 0,25 |
> | 1134 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+85% · −19,7%** | +36% · −6,1% | +23% | −4,4% | 3,2 | 72 d | −5,6% | +18% | −0,07 |
> | 1135 | ADX ·ADX + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+259% · −46,3%** | +59% · −11,3% | +35% | −6,7% | 4,0 | 101 d | −3,8% | +23% | 0,13 |
> | 1136 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+242% · −37,1%** | +47% · −7,2% | +28% | −4,0% | 2,6 | 76 d | −2,1% | +21% | 0,11 |
> | 1137 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+157% · −38,7%** | +43% · −10,2% | +28% | −6,1% | 3,2 | 72 d | −5,7% | +20% | 0,14 |
> | 1138 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+294% · −40,5%** | +69% · −10,8% | +39% | −9,0% | 4,1 | 60 d | −8,8% | +27% | 0,31 |
> | 1139 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+178% · −34,6%** | +41% · −6,6% | +29% | −7,5% | 3,5 | 76 d | −5,6% | +25% | 0,01 |
> | 1140 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+253% · −44,4%** | +49% · −9,3% | +31% | −4,9% | 4,0 | 72 d | −7,1% | +22% | 0,15 |

> [!example]- Combinações 1141 a 1170 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1141 | VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+155% · −44,9%** | +39% · −9,5% | +29% | −8,8% | 2,9 | 72 d | −4,7% | +22% | 0,23 |
> | 1142 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+204% · −40,4%** | +44% · −7,5% | +29% | −5,4% | 2,8 | 65 d | −5,7% | +23% | 0,10 |
> | 1143 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+204% · −38,1%** | +44% · −7,7% | +30% | −8,0% | 2,8 | 67 d | −5,1% | +24% | 0,13 |
> | 1144 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+115% · −20,2%** | +42% · −6,6% | +30% | −6,1% | 2,6 | 73 d | −3,3% | +22% | 0,11 |
> | 1145 | Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+298% · −38,8%** | +55% · −7,5% | +33% | −6,4% | 4,2 | 81 d | −6,1% | +28% | 0,17 |
> | 1146 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+283% · −43,6%** | +53% · −9,3% | +34% | −6,2% | 4,0 | 72 d | −7,1% | +27% | 0,23 |
> | 1147 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+329% · −42,5%** | +58% · −8,4% | +35% | −7,9% | 3,1 | 67 d | −6,0% | +29% | 0,34 |
> | 1148 | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+142% · −22,7%** | +33% · −3,9% | +24% | −4,5% | 3,7 | 93 d | −3,9% | +22% | 0,04 |
> | 1149 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+143% · −20,5%** | +33% · −3,4% | +23% | −3,5% | 3,6 | 94 d | −3,8% | +20% | −0,00 |
> | 1150 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+183% · −36,8%** | +40% · −7,2% | +25% | −7,8% | 3,0 | 67 d | −5,8% | +18% | 0,07 |
> | 1151 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+205% · −41,9%** | +43% · −8,7% | +26% | −7,9% | 4,5 | 91 d | −5,5% | +15% | 0,20 |
> | 1152 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+283% · −42,0%** | +57% · −8,9% | +34% | −8,3% | 3,8 | 70 d | −7,1% | +26% | 0,22 |
> | 1153 | GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+219% · −45,3%** | +48% · −8,9% | +32% | −6,6% | 4,0 | 76 d | −6,5% | +25% | 0,19 |
> | 1154 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+260% · −48,4%** | +52% · −10,9% | +31% | −6,2% | 4,0 | 65 d | −8,2% | +20% | 0,17 |
> | 1155 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+304% · −42,1%** | +57% · −9,0% | +36% | −7,2% | 4,1 | 70 d | −7,5% | +25% | 0,28 |
> | 1156 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+149% · −29,3%** | +42% · −7,5% | +30% | −9,6% | 3,9 | 100 d | −3,9% | +19% | 0,20 |
> | 1157 | Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+212% · −29,1%** | +43% · −5,3% | +27% | −6,0% | 3,5 | 83 d | −4,7% | +25% | 0,07 |
> | 1158 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+230% · −38,3%** | +45% · −7,6% | +30% | −6,4% | 3,4 | 64 d | −7,4% | +22% | 0,15 |
> | 1159 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+197% · −35,1%** | +41% · −6,8% | +28% | −8,9% | 3,0 | 75 d | −4,7% | +18% | 0,24 |
> | 1160 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+207% · −38,9%** | +56% · −10,2% | +36% | −11,1% | 3,4 | 65 d | −7,2% | +29% | 0,33 |
> | 1161 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+198% · −25,9%** | +40% · −4,1% | +27% | −3,7% | 3,5 | 99 d | −2,8% | +21% | 0,04 |
> | 1162 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+152% · −39,3%** | +38% · −7,9% | +27% | −10,3% | 3,3 | 78 d | −4,9% | +19% | 0,07 |
> | 1163 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+238% · −46,3%** | +58% · −12,8% | +37% | −7,6% | 4,9 | 83 d | −6,3% | +22% | 0,26 |
> | 1164 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+155% · −39,6%** | +46% · −10,5% | +29% | −11,2% | 3,2 | 67 d | −6,2% | +19% | 0,34 |
> | 1165 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+164% · −32,4%** | +44% · −8,5% | +29% | −5,6% | 4,2 | 92 d | −5,1% | +19% | 0,17 |
> | 1166 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+256% · −63,5%** | +55% · −15,0% | +35% | −6,9% | 3,5 | 74 d | −6,1% | +22% | 0,20 |
> | 1167 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+230% · −40,6%** | +50% · −8,6% | +31% | −6,4% | 3,7 | 74 d | −6,5% | +25% | 0,04 |
> | 1168 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+272% · −44,3%** | +54% · −9,1% | +35% | −6,2% | 3,5 | 67 d | −7,0% | +28% | 0,14 |
> | 1169 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+291% · −44,1%** | +54% · −8,0% | +35% | −5,9% | 4,3 | 107 d | −4,2% | +23% | 0,06 |
> | 1170 | Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+226% · −29,3%** | +54% · −7,0% | +31% | −5,8% | 4,0 | 83 d | −5,6% | +25% | 0,10 |

> [!example]- Combinações 1171 a 1200 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1171 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+215% · −33,1%** | +43% · −6,5% | +28% | −3,2% | 3,9 | 78 d | −6,1% | +18% | 0,02 |
> | 1172 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+159% · −31,1%** | +43% · −7,5% | +28% | −4,7% | 3,3 | 72 d | −6,1% | +23% | −0,03 |
> | 1173 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+166% · −27,7%** | +38% · −5,4% | +28% | −5,5% | 2,3 | 68 d | −2,6% | +22% | 0,06 |
> | 1174 | Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+312% · −37,4%** | +66% · −9,6% | +37% | −6,0% | 4,4 | 70 d | −8,1% | +25% | 0,32 |
> | 1175 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+252% · −45,7%** | +54% · −9,9% | +34% | −8,9% | 3,7 | 69 d | −7,0% | +29% | 0,19 |
> | 1176 | Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+268% · −35,1%** | +50% · −6,4% | +30% | −7,4% | 3,0 | 57 d | −6,8% | +25% | 0,21 |
> | 1177 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+227% · −38,0%** | +48% · −7,2% | +31% | −6,2% | 3,0 | 81 d | −3,8% | +23% | 0,15 |
> | 1178 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+261% · −31,6%** | +62% · −7,4% | +38% | −7,9% | 3,3 | 45 d | −8,1% | +29% | 0,26 |
> | 1179 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+188% · −33,5%** | +49% · −8,3% | +32% | −9,3% | 3,2 | 72 d | −5,8% | +27% | 0,08 |
> | 1180 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+216% · −28,5%** | +43% · −5,1% | +27% | −5,7% | 3,8 | 92 d | −4,5% | +22% | 0,13 |
> | 1181 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+298% · −43,4%** | +54% · −9,2% | +33% | −6,3% | 3,9 | 70 d | −7,4% | +23% | 0,26 |
> | 1182 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+241% · −44,5%** | +49% · −9,4% | +31% | −9,2% | 3,2 | 64 d | −6,9% | +21% | 0,30 |
> | 1183 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+150% · −52,0%** | +37% · −10,6% | +27% | −4,7% | 3,8 | 76 d | −6,3% | +13% | 0,10 |
> | 1184 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+215% · −37,5%** | +45% · −7,5% | +28% | −6,0% | 2,9 | 76 d | −4,3% | +22% | 0,11 |
> | 1185 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+202% · −38,4%** | +44% · −7,8% | +30% | −7,5% | 3,7 | 83 d | −5,1% | +26% | 0,18 |
> | 1186 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+137% · −39,1%** | +34% · −8,0% | +26% | −10,8% | 2,7 | 67 d | −5,2% | +21% | 0,17 |
> | 1187 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+238% · −50,0%** | +51% · −10,0% | +32% | −5,4% | 3,4 | 76 d | −5,7% | +24% | 0,06 |
> | 1188 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+309% · −52,3%** | +58% · −10,1% | +33% | −5,5% | 3,2 | 65 d | −6,7% | +24% | 0,18 |
> | 1189 | GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+181% · −34,3%** | +50% · −8,8% | +32% | −9,0% | 3,5 | 67 d | −7,0% | +29% | 0,29 |
> | 1190 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+215% · −43,1%** | +46% · −9,3% | +30% | −9,8% | 2,9 | 67 d | −5,6% | +24% | 0,12 |
> | 1191 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+237% · −41,0%** | +49% · −7,6% | +31% | −6,7% | 5,0 | 102 d | −5,2% | +21% | 0,07 |
> | 1192 | GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+151% · −35,0%** | +54% · −11,2% | +34% | −5,7% | 4,1 | 73 d | −7,1% | +22% | 0,05 |
> | 1193 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+206% · −46,6%** | +45% · −8,7% | +31% | −7,5% | 2,9 | 77 d | −4,2% | +24% | 0,13 |
> | 1194 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+370% · −45,0%** | +66% · −9,2% | +36% | −6,4% | 3,4 | 75 d | −5,8% | +25% | 0,27 |
> | 1195 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+269% · −44,1%** | +53% · −8,9% | +32% | −4,1% | 3,4 | 80 d | −5,3% | +25% | 0,05 |
> | 1196 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+333% · −46,1%** | +60% · −8,9% | +34% | −4,7% | 4,4 | 70 d | −8,1% | +22% | 0,18 |
> | 1197 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+329% · −56,6%** | +69% · −12,3% | +39% | −7,4% | 3,7 | 60 d | −8,5% | +29% | 0,40 |
> | 1198 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+255% · −33,3%** | +57% · −8,1% | +33% | −9,2% | 3,4 | 65 d | −7,3% | +27% | 0,33 |
> | 1199 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+290% · −39,0%** | +53% · −6,5% | +30% | −3,9% | 4,0 | 97 d | −4,5% | +20% | 0,12 |
> | 1200 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+216% · −41,8%** | +46% · −8,6% | +30% | −6,8% | 4,6 | 120 d | −3,8% | +16% | 0,25 |

> [!example]- Combinações 1201 a 1230 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1201 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+306% · −45,7%** | +58% · −9,5% | +32% | −5,1% | 3,2 | 65 d | −6,7% | +25% | 0,28 |
> | 1202 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+280% · −34,2%** | +52% · −6,3% | +30% | −4,3% | 4,7 | 94 d | −5,6% | +18% | 0,04 |
> | 1203 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+173% · −33,9%** | +46% · −8,6% | +28% | −8,3% | 3,0 | 67 d | −5,9% | +25% | 0,14 |
> | 1204 | Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+167% · −22,5%** | +43% · −5,2% | +25% | −3,3% | 4,2 | 92 d | −5,2% | +17% | 0,07 |
> | 1205 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+351% · −42,3%** | +64% · −8,9% | +38% | −6,1% | 3,4 | 64 d | −7,5% | +25% | 0,32 |
> | 1206 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+203% · −40,2%** | +45% · −7,9% | +32% | −7,9% | 3,1 | 75 d | −5,3% | +25% | 0,16 |
> | 1207 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+294% · −55,9%** | +73% · −15,6% | +42% | −8,3% | 4,0 | 76 d | −6,7% | +28% | 0,39 |
> | 1208 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+193% · −24,2%** | +47% · −5,1% | +28% | −2,4% | 4,3 | 100 d | −4,8% | +17% | −0,01 |
> | 1209 | MACD ·TEN + Tendência ·TEN | **+106% · −30,3%** | +56% · −15,6% | +40% | −13,4% | 3,1 | 58 d | −7,1% | +29% | 0,61 |
> | 1210 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+326% · −45,1%** | +64% · −9,8% | +37% | −9,2% | 3,5 | 65 d | −7,5% | +34% | 0,29 |
> | 1211 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+234% · −47,9%** | +59% · −12,0% | +38% | −7,5% | 3,5 | 65 d | −7,4% | +23% | 0,30 |
> | 1212 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+222% · −33,0%** | +46% · −6,3% | +30% | −5,5% | 3,6 | 88 d | −4,5% | +26% | 0,13 |
> | 1213 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+255% · −28,3%** | +47% · −4,9% | +30% | −5,3% | 3,3 | 92 d | −3,4% | +20% | 0,13 |
> | 1214 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+233% · −42,5%** | +47% · −9,1% | +29% | −8,8% | 3,2 | 73 d | −5,7% | +22% | 0,17 |
> | 1215 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+185% · −35,8%** | +41% · −7,0% | +29% | −10,0% | 2,8 | 73 d | −4,5% | +20% | 0,20 |
> | 1216 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+181% · −40,6%** | +43% · −8,6% | +32% | −10,3% | 2,9 | 74 d | −4,7% | +25% | 0,26 |
> | 1217 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+214% · −26,5%** | +43% · −4,9% | +27% | −4,5% | 3,2 | 83 d | −4,2% | +22% | 0,02 |
> | 1218 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+269% · −28,8%** | +47% · −5,0% | +29% | −2,9% | 4,2 | 84 d | −5,9% | +21% | 0,00 |
> | 1219 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+314% · −47,9%** | +57% · −10,2% | +34% | −8,4% | 3,4 | 64 d | −7,7% | +22% | 0,39 |
> | 1220 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+225% · −42,1%** | +47% · −8,8% | +31% | −6,9% | 4,0 | 83 d | −5,8% | +22% | 0,21 |
> | 1221 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+139% · −40,9%** | +41% · −10,3% | +28% | −4,7% | 4,0 | 78 d | −6,5% | +14% | 0,19 |
> | 1222 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+249% · −36,7%** | +49% · −7,4% | +28% | −5,7% | 3,7 | 71 d | −7,2% | +19% | 0,09 |
> | 1223 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+241% · −45,5%** | +53% · −9,8% | +32% | −9,7% | 3,9 | 70 d | −7,6% | +21% | 0,20 |
> | 1224 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+130% · −32,8%** | +34% · −5,4% | +24% | −3,7% | 3,2 | 80 d | −5,0% | +16% | 0,04 |
> | 1225 | ADX ·ADX + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+238% · −40,4%** | +59% · −9,8% | +37% | −6,7% | 2,4 | 65 d | −4,9% | +24% | 0,29 |
> | 1226 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+179% · −31,9%** | +39% · −6,6% | +27% | −4,2% | 4,0 | 100 d | −4,5% | +19% | 0,07 |
> | 1227 | GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+143% · −28,3%** | +40% · −6,9% | +24% | −5,3% | 3,0 | 72 d | −5,6% | +18% | 0,07 |
> | 1228 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+352% · −39,1%** | +60% · −8,3% | +33% | −4,1% | 3,8 | 97 d | −4,4% | +21% | 0,15 |
> | 1229 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+219% · −35,5%** | +52% · −8,6% | +30% | −6,0% | 3,1 | 72 d | −5,7% | +24% | 0,08 |
> | 1230 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+170% · −35,8%** | +46% · −9,1% | +32% | −12,8% | 2,8 | 73 d | −4,7% | +21% | 0,35 |

> [!example]- Combinações 1231 a 1260 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1231 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+297% · −62,5%** | +60% · −14,3% | +37% | −6,3% | 4,7 | 67 d | −8,8% | +17% | 0,30 |
> | 1232 | MACD ·TEN + Bollinger ·TEN | **+87% · −16,8%** | +47% · −7,9% | +29% | −10,1% | 2,8 | 70 d | −5,4% | +20% | 0,45 |
> | 1233 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+166% · −24,6%** | +36% · −4,0% | +25% | −5,2% | 2,7 | 78 d | −3,5% | +17% | 0,11 |
> | 1234 | IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+238% · −45,0%** | +49% · −9,4% | +34% | −9,8% | 3,6 | 95 d | −4,1% | +31% | 0,32 |
> | 1235 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+280% · −43,0%** | +51% · −7,3% | +31% | −5,3% | 3,9 | 112 d | −3,3% | +23% | 0,05 |
> | 1236 | GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+207% · −44,8%** | +53% · −12,1% | +34% | −6,1% | 3,2 | 67 d | −6,6% | +23% | 0,26 |
> | 1237 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+163% · −28,8%** | +37% · −5,7% | +28% | −7,4% | 3,8 | 106 d | −3,8% | +18% | 0,10 |
> | 1238 | GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+186% · −44,1%** | +51% · −11,0% | +33% | −8,4% | 4,0 | 76 d | −6,8% | +23% | 0,32 |
> | 1239 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+175% · −39,0%** | +41% · −7,1% | +29% | −5,5% | 3,3 | 76 d | −5,8% | +24% | 0,03 |
> | 1240 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+326% · −47,5%** | +58% · −8,9% | +35% | −6,4% | 3,4 | 65 d | −7,4% | +23% | 0,31 |
> | 1241 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+231% · −45,0%** | +50% · −9,3% | +31% | −4,4% | 3,2 | 76 d | −5,6% | +23% | 0,16 |
> | 1242 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+237% · −36,0%** | +46% · −7,2% | +29% | −5,7% | 2,8 | 67 d | −5,6% | +22% | 0,11 |
> | 1243 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+251% · −41,3%** | +49% · −7,8% | +31% | −6,8% | 3,0 | 77 d | −4,6% | +22% | 0,13 |
> | 1244 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+134% · −23,1%** | +33% · −3,9% | +25% | −4,0% | 3,9 | 119 d | −3,0% | +16% | 0,01 |
> | 1245 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+180% · −34,8%** | +41% · −6,7% | +29% | −7,5% | 3,3 | 76 d | −5,7% | +24% | 0,03 |
> | 1246 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+271% · −39,2%** | +51% · −7,5% | +31% | −5,5% | 2,7 | 74 d | −4,2% | +22% | 0,11 |
> | 1247 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+285% · −47,9%** | +54% · −9,8% | +33% | −5,7% | 4,5 | 83 d | −6,4% | +17% | 0,28 |
> | 1248 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+235% · −41,4%** | +50% · −8,1% | +30% | −4,1% | 3,1 | 77 d | −5,1% | +24% | 0,07 |
> | 1249 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+268% · −43,9%** | +54% · −9,3% | +34% | −11,6% | 3,1 | 64 d | −7,0% | +23% | 0,39 |
> | 1250 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+320% · −56,2%** | +67% · −11,9% | +40% | −8,8% | 3,5 | 65 d | −7,6% | +34% | 0,32 |
> | 1251 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+74% · −15,0%** | +31% · −4,6% | +25% | −4,1% | 3,8 | 120 d | −2,4% | +19% | −0,09 |
> | 1252 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+242% · −36,1%** | +61% · −10,0% | +35% | −6,5% | 4,0 | 70 d | −8,0% | +23% | 0,13 |
> | 1253 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+170% · −37,5%** | +40% · −7,6% | +27% | −7,9% | 3,7 | 94 d | −4,7% | +20% | 0,06 |
> | 1254 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+307% · −55,1%** | +64% · −11,8% | +36% | −5,3% | 3,9 | 74 d | −7,0% | +24% | 0,33 |
> | 1255 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+191% · −40,0%** | +52% · −10,4% | +36% | −10,1% | 3,1 | 75 d | −5,5% | +25% | 0,50 |
> | 1256 | GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+174% · −42,0%** | +62% · −14,3% | +39% | −9,8% | 3,8 | 65 d | −8,4% | +27% | 0,44 |
> | 1257 | MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+57% · −13,5%** | +27% · −3,4% | +22% | −5,8% | 2,4 | 75 d | −2,4% | +21% | 0,02 |
> | 1258 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+203% · −39,6%** | +44% · −7,3% | +29% | −5,5% | 2,6 | 80 d | −2,8% | +22% | 0,14 |
> | 1259 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+353% · −44,5%** | +65% · −9,7% | +36% | −8,3% | 3,9 | 69 d | −7,9% | +31% | 0,29 |
> | 1260 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+304% · −43,8%** | +56% · −9,1% | +31% | −7,7% | 3,0 | 65 d | −6,7% | +22% | 0,24 |

> [!example]- Combinações 1261 a 1290 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1261 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+210% · −40,1%** | +54% · −9,5% | +34% | −6,3% | 2,9 | 65 d | −6,2% | +26% | 0,06 |
> | 1262 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+92% · −18,6%** | +30% · −3,8% | +23% | −1,5% | 2,7 | 72 d | −5,0% | +19% | −0,03 |
> | 1263 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+151% · −43,7%** | +38% · −9,2% | +27% | −11,3% | 3,1 | 75 d | −5,5% | +18% | 0,20 |
> | 1264 | GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+252% · −40,0%** | +60% · −9,2% | +36% | −7,9% | 3,7 | 65 d | −8,1% | +26% | 0,40 |
> | 1265 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+257% · −34,2%** | +58% · −7,9% | +34% | −4,7% | 3,7 | 107 d | −3,6% | +21% | 0,12 |
> | 1266 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+392% · −40,9%** | +64% · −8,6% | +35% | −4,2% | 4,7 | 121 d | −4,2% | +23% | 0,16 |
> | 1267 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+212% · −41,4%** | +48% · −8,5% | +32% | −10,0% | 3,6 | 74 d | −6,6% | +26% | 0,20 |
> | 1268 | IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+230% · −36,8%** | +45% · −7,1% | +30% | −7,2% | 3,5 | 101 d | −3,5% | +23% | 0,25 |
> | 1269 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+149% · −34,2%** | +37% · −6,6% | +26% | −6,5% | 3,5 | 81 d | −5,5% | +24% | 0,05 |
> | 1270 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+240% · −39,2%** | +50% · −7,8% | +31% | −6,7% | 4,7 | 102 d | −5,3% | +22% | 0,06 |
> | 1271 | IFR ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+224% · −41,9%** | +56% · −11,0% | +39% | −11,1% | 3,7 | 95 d | −4,5% | +33% | 0,39 |
> | 1272 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+313% · −50,8%** | +59% · −9,5% | +33% | −5,4% | 3,1 | 65 d | −6,8% | +25% | 0,17 |
> | 1273 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+206% · −34,4%** | +43% · −6,5% | +26% | −6,3% | 3,8 | 99 d | −4,5% | +16% | 0,09 |
> | 1274 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+278% · −33,7%** | +50% · −6,1% | +30% | −3,7% | 3,8 | 112 d | −3,3% | +19% | 0,04 |
> | 1275 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+312% · −48,0%** | +60% · −10,2% | +35% | −5,4% | 3,9 | 70 d | −8,0% | +24% | 0,17 |
> | 1276 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+260% · −37,2%** | +61% · −9,0% | +38% | −6,3% | 4,4 | 70 d | −8,5% | +22% | 0,20 |
> | 1277 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+226% · −42,4%** | +47% · −8,9% | +31% | −5,6% | 3,9 | 81 d | −6,2% | +23% | 0,15 |
> | 1278 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+213% · −30,5%** | +44% · −5,4% | +31% | −7,5% | 2,5 | 76 d | −3,4% | +21% | 0,10 |
> | 1279 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+191% · −35,1%** | +40% · −6,5% | +28% | −4,5% | 3,6 | 89 d | −5,0% | +17% | 0,11 |
> | 1280 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+178% · −49,2%** | +50% · −13,9% | +33% | −8,3% | 3,9 | 74 d | −7,2% | +17% | 0,23 |
> | 1281 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+198% · −35,2%** | +44% · −6,7% | +30% | −5,3% | 3,6 | 76 d | −6,4% | +22% | 0,03 |
> | 1282 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+236% · −40,1%** | +59% · −10,2% | +38% | −9,0% | 3,2 | 67 d | −6,7% | +30% | 0,33 |
> | 1283 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+249% · −46,4%** | +62% · −12,4% | +36% | −5,3% | 3,6 | 80 d | −6,0% | +25% | 0,18 |
> | 1284 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+258% · −57,7%** | +56% · −12,9% | +35% | −8,3% | 3,1 | 65 d | −7,0% | +26% | 0,29 |
> | 1285 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+268% · −49,2%** | +51% · −9,6% | +32% | −4,8% | 3,2 | 65 d | −7,2% | +19% | 0,16 |
> | 1286 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+244% · −37,6%** | +50% · −7,7% | +32% | −7,7% | 2,9 | 67 d | −6,2% | +24% | 0,07 |
> | 1287 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+249% · −55,4%** | +64% · −15,0% | +38% | −6,8% | 3,9 | 77 d | −6,7% | +23% | 0,15 |
> | 1288 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+337% · −46,1%** | +62% · −9,5% | +35% | −6,6% | 3,1 | 65 d | −7,0% | +29% | 0,36 |
> | 1289 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+386% · −56,8%** | +65% · −12,0% | +36% | −5,8% | 4,8 | 120 d | −4,6% | +22% | 0,19 |
> | 1290 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+308% · −49,6%** | +59% · −10,7% | +36% | −5,4% | 4,1 | 70 d | −8,3% | +23% | 0,13 |

> [!example]- Combinações 1291 a 1320 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1291 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+282% · −37,9%** | +54% · −7,2% | +35% | −5,7% | 2,9 | 76 d | −5,0% | +24% | 0,12 |
> | 1292 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+201% · −40,2%** | +44% · −8,3% | +30% | −8,9% | 2,7 | 67 d | −5,6% | +23% | 0,26 |
> | 1293 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+156% · −36,2%** | +37% · −6,9% | +27% | −6,7% | 2,7 | 72 d | −5,2% | +21% | −0,01 |
> | 1294 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+196% · −23,8%** | +47% · −4,9% | +27% | −2,2% | 4,3 | 101 d | −5,3% | +18% | −0,04 |
> | 1295 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+259% · −45,3%** | +55% · −9,3% | +34% | −5,7% | 3,3 | 76 d | −5,9% | +27% | 0,19 |
> | 1296 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+181% · −26,8%** | +47% · −6,4% | +30% | −4,2% | 3,8 | 91 d | −5,4% | +19% | 0,14 |
> | 1297 | GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+155% · −27,7%** | +53% · −8,5% | +30% | −5,1% | 3,7 | 76 d | −6,7% | +19% | 0,03 |
> | 1298 | ADX ·ADX + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+200% · −43,5%** | +45% · −8,7% | +31% | −7,6% | 2,7 | 76 d | −4,3% | +26% | 0,07 |
> | 1299 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+280% · −42,0%** | +56% · −8,9% | +34% | −8,3% | 3,8 | 70 d | −7,9% | +25% | 0,22 |
> | 1300 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+135% · −29,9%** | +33% · −5,4% | +25% | −5,3% | 3,7 | 119 d | −3,0% | +17% | 0,09 |
> | 1301 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+227% · −50,1%** | +50% · −9,7% | +34% | −8,9% | 2,7 | 76 d | −4,5% | +26% | 0,13 |
> | 1302 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+180% · −42,0%** | +40% · −8,7% | +25% | −9,1% | 2,9 | 67 d | −6,3% | +16% | 0,19 |
> | 1303 | Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+296% · −44,6%** | +58% · −9,2% | +36% | −8,5% | 4,0 | 79 d | −6,8% | +28% | 0,34 |
> | 1304 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+274% · −39,4%** | +52% · −7,5% | +31% | −5,6% | 2,6 | 74 d | −4,3% | +21% | 0,12 |
> | 1305 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+282% · −48,7%** | +58% · −10,2% | +35% | −5,6% | 3,6 | 76 d | −6,5% | +28% | 0,17 |
> | 1306 | Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+249% · −37,0%** | +57% · −9,1% | +33% | −5,2% | 4,1 | 70 d | −8,3% | +20% | 0,17 |
> | 1307 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+211% · −34,6%** | +45% · −6,6% | +28% | −3,3% | 4,3 | 102 d | −5,2% | +18% | −0,02 |
> | 1308 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+283% · −35,0%** | +52% · −6,3% | +29% | −4,3% | 4,5 | 94 d | −6,0% | +19% | 0,02 |
> | 1309 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+207% · −36,6%** | +53% · −8,7% | +33% | −5,4% | 2,3 | 65 d | −4,8% | +24% | 0,22 |
> | 1310 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+190% · −49,7%** | +45% · −10,1% | +31% | −9,9% | 3,3 | 73 d | −6,3% | +22% | 0,23 |
> | 1311 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+309% · −40,3%** | +54% · −8,0% | +34% | −7,1% | 3,8 | 86 d | −5,6% | +25% | 0,35 |
> | 1312 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+247% · −42,6%** | +47% · −8,8% | +31% | −6,7% | 3,6 | 90 d | −5,1% | +21% | 0,21 |
> | 1313 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+160% · −30,5%** | +44% · −7,4% | +30% | −6,2% | 2,7 | 67 d | −5,7% | +22% | 0,03 |
> | 1314 | GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+295% · −41,2%** | +55% · −7,5% | +34% | −6,2% | 3,7 | 74 d | −7,1% | +27% | 0,16 |
> | 1315 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+229% · −43,6%** | +48% · −9,0% | +30% | −7,3% | 3,1 | 65 d | −7,2% | +19% | 0,21 |
> | 1316 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+331% · −52,0%** | +63% · −10,6% | +38% | −5,5% | 4,5 | 70 d | −8,9% | +22% | 0,22 |
> | 1317 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+215% · −26,6%** | +43% · −5,4% | +27% | −4,8% | 3,4 | 92 d | −4,5% | +21% | 0,11 |
> | 1318 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+254% · −41,7%** | +50% · −8,2% | +29% | −4,0% | 3,2 | 77 d | −5,7% | +22% | 0,06 |
> | 1319 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+81% · −18,6%** | +33% · −5,6% | +25% | −2,2% | 2,8 | 67 d | −6,0% | +21% | −0,15 |
> | 1320 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+330% · −47,7%** | +60% · −9,0% | +34% | −4,6% | 4,4 | 70 d | −8,8% | +20% | 0,18 |

> [!example]- Combinações 1321 a 1350 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1321 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+194% · −36,9%** | +51% · −8,7% | +30% | −4,5% | 4,6 | 94 d | −6,1% | +17% | 0,00 |
> | 1322 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+191% · −32,2%** | +63% · −11,0% | +38% | −9,4% | 3,3 | 67 d | −7,2% | +31% | 0,27 |
> | 1323 | Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+199% · −32,4%** | +41% · −5,7% | +28% | −5,5% | 3,1 | 90 d | −4,0% | +23% | 0,07 |
> | 1324 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+176% · −25,3%** | +38% · −4,6% | +26% | −5,5% | 3,3 | 88 d | −4,6% | +22% | 0,03 |
> | 1325 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+190% · −23,0%** | +39% · −3,9% | +27% | −5,0% | 3,5 | 93 d | −4,6% | +19% | 0,01 |
> | 1326 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+152% · −49,5%** | +38% · −10,1% | +27% | −4,7% | 3,6 | 76 d | −6,6% | +14% | 0,07 |
> | 1327 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+237% · −38,2%** | +47% · −7,5% | +29% | −10,0% | 4,2 | 91 d | −6,0% | +20% | 0,26 |
> | 1328 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+233% · −33,3%** | +45% · −6,1% | +30% | −6,3% | 3,3 | 101 d | −3,4% | +22% | 0,16 |
> | 1329 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+131% · −30,7%** | +33% · −5,7% | +25% | −5,3% | 2,4 | 71 d | −4,7% | +20% | 0,04 |
> | 1330 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+194% · −34,4%** | +43% · −6,6% | +29% | −6,7% | 3,0 | 72 d | −6,0% | +24% | −0,01 |
> | 1331 | Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+200% · −36,0%** | +41% · −6,7% | +28% | −6,5% | 3,1 | 87 d | −4,2% | +24% | 0,12 |
> | 1332 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+243% · −53,0%** | +52% · −11,5% | +35% | −7,7% | 3,9 | 74 d | −7,4% | +25% | 0,21 |
> | 1333 | Donchian ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+342% · −39,3%** | +71% · −10,1% | +40% | −7,3% | 4,4 | 70 d | −8,9% | +23% | 0,40 |
> | 1334 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+208% · −33,7%** | +43% · −6,3% | +26% | −6,4% | 3,8 | 99 d | −4,9% | +17% | 0,09 |
> | 1335 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+126% · −31,8%** | +38% · −7,7% | +28% | −11,3% | 2,7 | 75 d | −4,9% | +21% | 0,34 |
> | 1336 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+225% · −46,7%** | +50% · −9,8% | +35% | −10,3% | 2,8 | 73 d | −5,3% | +27% | 0,41 |
> | 1337 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+212% · −37,3%** | +43% · −6,6% | +28% | −4,3% | 3,8 | 78 d | −6,7% | +16% | 0,16 |
> | 1338 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+252% · −29,0%** | +46% · −4,9% | +30% | −5,4% | 3,1 | 92 d | −3,7% | +20% | 0,08 |
> | 1339 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+178% · −37,2%** | +41% · −6,5% | +29% | −5,4% | 3,2 | 76 d | −5,9% | +25% | 0,03 |
> | 1340 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+210% · −30,8%** | +53% · −7,6% | +33% | −5,6% | 3,7 | 87 d | −5,5% | +24% | 0,11 |
> | 1341 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+176% · −34,5%** | +40% · −6,8% | +27% | −7,4% | 2,6 | 72 d | −4,9% | +21% | 0,04 |
> | 1342 | Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+80% · −12,3%** | +27% · −1,8% | +19% | −1,8% | 3,1 | 96 d | −3,1% | +18% | 0,04 |
> | 1343 | 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+252% · −38,2%** | +48% · −7,4% | +31% | −7,1% | 3,2 | 90 d | −4,4% | +22% | 0,23 |
> | 1344 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+127% · −41,5%** | +33% · −8,8% | +24% | −4,8% | 2,7 | 72 d | −5,5% | +16% | 0,03 |
> | 1345 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+348% · −39,0%** | +60% · −8,3% | +33% | −4,1% | 3,9 | 97 d | −5,3% | +22% | 0,17 |
> | 1346 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+183% · −25,7%** | +47% · −6,6% | +29% | −3,7% | 3,9 | 102 d | −4,9% | +21% | 0,02 |
> | 1347 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+360% · −46,7%** | +64% · −10,2% | +36% | −9,3% | 3,9 | 70 d | −8,3% | +26% | 0,39 |
> | 1348 | ADX ·ADX + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+210% · −41,7%** | +54% · −10,2% | +34% | −7,8% | 2,7 | 65 d | −6,3% | +27% | 0,20 |
> | 1349 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+236% · −55,5%** | +50% · −13,1% | +32% | −8,3% | 3,3 | 64 d | −8,1% | +20% | 0,34 |
> | 1350 | GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+248% · −37,3%** | +59% · −9,8% | +34% | −8,8% | 3,3 | 65 d | −7,8% | +28% | 0,26 |

> [!example]- Combinações 1351 a 1380 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1351 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+230% · −44,8%** | +48% · −9,5% | +29% | −6,7% | 3,4 | 65 d | −8,0% | +21% | 0,10 |
> | 1352 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+336% · −53,2%** | +68% · −11,2% | +41% | −8,1% | 4,4 | 66 d | −9,6% | +30% | 0,38 |
> | 1353 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+169% · −48,1%** | +41% · −10,5% | +28% | −7,5% | 3,2 | 73 d | −6,3% | +18% | 0,18 |
> | 1354 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+151% · −33,5%** | +37% · −6,4% | +26% | −6,5% | 3,3 | 81 d | −5,7% | +23% | 0,06 |
> | 1355 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+261% · −41,6%** | +54% · −8,6% | +34% | −10,5% | 3,0 | 60 d | −7,8% | +24% | 0,31 |
> | 1356 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+47% · −9,1%** | +24% · −2,6% | +20% | −1,7% | 4,5 | 149 d | −2,2% | +16% | 0,04 |
> | 1357 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+224% · −35,5%** | +47% · −7,1% | +32% | −7,0% | 3,0 | 67 d | −6,8% | +26% | 0,12 |
> | 1358 | Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+184% · −38,9%** | +49% · −9,1% | +31% | −5,9% | 4,2 | 89 d | −6,4% | +18% | 0,15 |
> | 1359 | GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+145% · −28,3%** | +41% · −6,9% | +24% | −5,3% | 2,8 | 72 d | −5,7% | +20% | 0,04 |
> | 1360 | GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+85% · −25,2%** | +36% · −8,1% | +24% | −6,0% | 3,1 | 72 d | −6,3% | +17% | 0,03 |
> | 1361 | 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+252% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 3,0 | 90 d | −4,0% | +21% | 0,11 |
> | 1362 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+109% · −28,2%** | +43% · −9,4% | +28% | −9,8% | 3,0 | 67 d | −6,8% | +25% | 0,03 |
> | 1363 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+147% · −34,4%** | +35% · −6,6% | +24% | −4,9% | 2,6 | 72 d | −5,2% | +21% | 0,03 |
> | 1364 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+225% · −44,2%** | +50% · −9,3% | +31% | −7,8% | 3,7 | 76 d | −6,9% | +24% | 0,20 |
> | 1365 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+176% · −33,8%** | +46% · −8,6% | +28% | −8,3% | 2,8 | 67 d | −6,3% | +24% | 0,13 |
> | 1366 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+239% · −46,6%** | +53% · −9,8% | +32% | −9,7% | 3,9 | 70 d | −8,4% | +20% | 0,20 |
> | 1367 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+346% · −57,6%** | +65% · −12,1% | +39% | −8,0% | 3,5 | 64 d | −8,6% | +29% | 0,35 |
> | 1368 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+252% · −37,5%** | +51% · −7,4% | +33% | −7,1% | 3,4 | 87 d | −5,1% | +25% | 0,19 |
> | 1369 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+419% · −50,9%** | +71% · −10,6% | +39% | −6,3% | 4,5 | 70 d | −9,3% | +23% | 0,39 |
> | 1370 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+241% · −46,9%** | +60% · −11,5% | +38% | −9,0% | 2,7 | 65 d | −6,4% | +29% | 0,31 |
> | 1371 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+247% · −37,5%** | +50% · −7,7% | +32% | −7,7% | 2,8 | 67 d | −6,4% | +24% | 0,12 |
> | 1372 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+280% · −41,9%** | +54% · −8,9% | +31% | −8,2% | 3,6 | 71 d | −7,7% | +24% | 0,17 |
> | 1373 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+219% · −24,5%** | +51% · −5,5% | +29% | −4,6% | 3,5 | 73 d | −7,1% | +24% | 0,06 |
> | 1374 | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+211% · −25,9%** | +50% · −5,6% | +32% | −5,4% | 3,8 | 99 d | −5,0% | +25% | 0,09 |
> | 1375 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+194% · −26,9%** | +40% · −4,8% | +26% | −5,0% | 4,5 | 128 d | −3,7% | +17% | 0,07 |
> | 1376 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+356% · −57,8%** | +70% · −11,6% | +41% | −9,1% | 4,0 | 76 d | −7,6% | +30% | 0,34 |
> | 1377 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+229% · −49,4%** | +51% · −10,6% | +34% | −8,6% | 3,8 | 83 d | −6,2% | +24% | 0,28 |
> | 1378 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+277% · −41,9%** | +53% · −8,9% | +31% | −8,2% | 3,6 | 71 d | −7,8% | +23% | 0,18 |
> | 1379 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+202% · −43,6%** | +46% · −8,7% | +31% | −7,6% | 2,6 | 76 d | −4,4% | +26% | 0,09 |
> | 1380 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+160% · −38,8%** | +38% · −8,0% | +29% | −6,5% | 3,2 | 95 d | −4,0% | +19% | 0,13 |

> [!example]- Combinações 1381 a 1410 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1381 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+182% · −45,0%** | +42% · −9,4% | +30% | −10,4% | 2,5 | 69 d | −5,1% | +23% | 0,33 |
> | 1382 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+182% · −40,1%** | +41% · −7,9% | +30% | −9,3% | 2,4 | 69 d | −5,1% | +24% | 0,20 |
> | 1383 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+203% · −35,9%** | +44% · −7,0% | +30% | −6,1% | 3,2 | 83 d | −5,1% | +24% | 0,05 |
> | 1384 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+168% · −22,6%** | +43% · −5,6% | +25% | −2,4% | 3,6 | 100 d | −4,7% | +20% | 0,02 |
> | 1385 | Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+220% · −26,7%** | +68% · −8,8% | +40% | −6,9% | 4,1 | 67 d | −9,0% | +29% | 0,25 |
> | 1386 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+220% · −39,1%** | +44% · −7,1% | +28% | −4,3% | 3,7 | 122 d | −2,7% | +19% | 0,06 |
> | 1387 | ADX ·ADX + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+307% · −53,0%** | +59% · −10,8% | +34% | −6,7% | 3,0 | 65 d | −7,3% | +23% | 0,27 |
> | 1388 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+211% · −33,9%** | +44% · −6,0% | +28% | −6,0% | 3,2 | 76 d | −6,1% | +25% | 0,01 |
> | 1389 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+253% · −49,4%** | +53% · −9,9% | +32% | −5,1% | 4,7 | 83 d | −7,2% | +19% | 0,17 |
> | 1390 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+248% · −37,5%** | +50% · −7,7% | +33% | −5,2% | 2,1 | 64 d | −4,8% | +23% | 0,07 |
> | 1391 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+291% · −42,5%** | +54% · −8,1% | +32% | −6,7% | 2,3 | 65 d | −5,2% | +19% | 0,33 |
> | 1392 | ADX ·ADX + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+254% · −47,0%** | +61% · −11,8% | +36% | −9,4% | 2,8 | 65 d | −6,7% | +28% | 0,27 |
> | 1393 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+259% · −60,3%** | +57% · −13,6% | +35% | −7,7% | 4,3 | 75 d | −8,2% | +17% | 0,30 |
> | 1394 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+211% · −44,6%** | +45% · −9,5% | +28% | −11,5% | 2,9 | 67 d | −6,7% | +21% | 0,22 |
> | 1395 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+177% · −37,2%** | +42% · −7,4% | +29% | −8,9% | 3,2 | 76 d | −6,2% | +27% | 0,15 |
> | 1396 | Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+221% · −39,2%** | +47% · −8,1% | +31% | −6,9% | 3,4 | 79 d | −6,3% | +26% | 0,16 |
> | 1397 | MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+99% · −16,5%** | +38% · −4,6% | +25% | −6,0% | 2,3 | 76 d | −3,3% | +19% | 0,13 |
> | 1398 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+246% · −38,0%** | +47% · −7,3% | +31% | −6,0% | 3,7 | 92 d | −5,5% | +21% | 0,22 |
> | 1399 | Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+184% · −35,9%** | +47% · −8,8% | +31% | −8,5% | 3,2 | 87 d | −4,8% | +25% | 0,22 |
> | 1400 | Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+183% · −32,3%** | +46% · −7,6% | +31% | −7,0% | 3,2 | 90 d | −4,5% | +24% | 0,09 |
> | 1401 | Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+295% · −38,8%** | +54% · −7,5% | +33% | −6,5% | 3,9 | 81 d | −6,9% | +28% | 0,15 |
> | 1402 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+227% · −29,6%** | +46% · −6,1% | +30% | −5,1% | 3,6 | 102 d | −4,6% | +22% | 0,11 |
> | 1403 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+234% · −43,6%** | +50% · −8,8% | +30% | −4,2% | 3,0 | 76 d | −5,7% | +24% | 0,14 |
> | 1404 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+240% · −36,0%** | +47% · −7,2% | +29% | −5,7% | 2,6 | 67 d | −5,9% | +23% | 0,12 |
> | 1405 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+236% · −52,5%** | +51% · −11,1% | +32% | −5,8% | 3,2 | 76 d | −6,2% | +23% | 0,12 |
> | 1406 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+178% · −25,7%** | +38% · −4,6% | +26% | −5,7% | 3,2 | 94 d | −4,4% | +22% | 0,05 |
> | 1407 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+278% · −51,2%** | +58% · −10,4% | +35% | −6,8% | 4,0 | 70 d | −8,7% | +24% | 0,25 |
> | 1408 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+198% · −48,8%** | +44% · −10,0% | +30% | −6,3% | 3,7 | 79 d | −6,8% | +17% | 0,16 |
> | 1409 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+301% · −40,3%** | +54% · −7,7% | +33% | −9,5% | 2,9 | 66 d | −6,9% | +24% | 0,29 |
> | 1410 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+214% · −45,1%** | +47% · −9,8% | +30% | −10,7% | 2,7 | 67 d | −6,1% | +22% | 0,29 |

> [!example]- Combinações 1411 a 1440 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1411 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+283% · −42,6%** | +52% · −8,7% | +33% | −3,8% | 4,6 | 89 d | −6,9% | +21% | 0,02 |
> | 1412 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+193% · −22,9%** | +39% · −3,9% | +27% | −5,0% | 3,4 | 99 d | −4,3% | +19% | 0,05 |
> | 1413 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+259% · −62,6%** | +56% · −14,4% | +35% | −7,0% | 3,5 | 80 d | −6,3% | +23% | 0,19 |
> | 1414 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+315% · −53,6%** | +69% · −11,0% | +39% | −7,0% | 3,3 | 65 d | −8,1% | +30% | 0,32 |
> | 1415 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+173% · −34,0%** | +39% · −6,4% | +27% | −5,1% | 3,1 | 83 d | −5,0% | +23% | 0,07 |
> | 1416 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+268% · −47,7%** | +58% · −10,5% | +35% | −6,5% | 3,7 | 69 d | −8,4% | +27% | 0,17 |
> | 1417 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+216% · −30,4%** | +44% · −5,8% | +31% | −7,5% | 2,3 | 76 d | −3,5% | +20% | 0,15 |
> | 1418 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+209% · −38,9%** | +47% · −7,9% | +29% | −8,1% | 3,7 | 83 d | −6,3% | +22% | 0,14 |
> | 1419 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+167% · −31,5%** | +38% · −5,6% | +28% | −6,4% | 2,3 | 80 d | −2,4% | +23% | 0,13 |
> | 1420 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+339% · −42,7%** | +65% · −8,7% | +38% | −6,2% | 3,1 | 57 d | −8,3% | +26% | 0,26 |
> | 1421 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+244% · −41,9%** | +50% · −9,4% | +33% | −9,2% | 4,2 | 120 d | −4,7% | +21% | 0,28 |
> | 1422 | Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+252% · −35,9%** | +58% · −9,1% | +33% | −5,3% | 4,1 | 81 d | −7,3% | +21% | 0,17 |
> | 1423 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+269% · −43,3%** | +57% · −9,3% | +34% | −8,4% | 3,8 | 80 d | −7,0% | +28% | 0,31 |
> | 1424 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+205% · −33,4%** | +42% · −6,2% | +26% | −5,0% | 2,6 | 72 d | −5,3% | +20% | 0,05 |
> | 1425 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+174% · −36,6%** | +40% · −7,4% | +27% | −8,3% | 2,5 | 72 d | −5,2% | +22% | 0,09 |
> | 1426 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+229% · −30,3%** | +44% · −5,6% | +30% | −7,8% | 3,2 | 85 d | −5,1% | +20% | 0,13 |
> | 1427 | ADX ·ADX + IFR ·TEN + Tendência ·TEN | **+224% · −45,2%** | +73% · −14,8% | +44% | −10,1% | 3,5 | 80 d | −6,5% | +30% | 0,37 |
> | 1428 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+263% · −44,0%** | +55% · −8,8% | +33% | −5,7% | 3,1 | 77 d | −6,0% | +26% | 0,18 |
> | 1429 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+163% · −30,4%** | +45% · −7,4% | +30% | −6,2% | 2,6 | 67 d | −5,9% | +23% | 0,04 |
> | 1430 | 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+192% · −27,1%** | +40% · −4,8% | +27% | −6,4% | 3,3 | 96 d | −4,4% | +20% | 0,13 |
> | 1431 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+239% · −37,0%** | +60% · −10,0% | +35% | −6,5% | 4,1 | 70 d | −9,0% | +22% | 0,15 |
> | 1432 | VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+190% · −40,6%** | +41% · −8,3% | +28% | −5,9% | 3,5 | 94 d | −5,1% | +16% | 0,22 |
> | 1433 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+159% · −34,1%** | +37% · −6,4% | +27% | −6,9% | 2,5 | 72 d | −5,3% | +22% | 0,00 |
> | 1434 | GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+194% · −40,4%** | +45% · −7,6% | +30% | −6,5% | 3,5 | 76 d | −6,9% | +26% | 0,10 |
> | 1435 | VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+121% · −44,0%** | +38% · −11,6% | +28% | −6,9% | 3,1 | 84 d | −4,8% | +14% | 0,23 |
> | 1436 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+121% · −36,9%** | +37% · −9,3% | +28% | −5,1% | 3,4 | 95 d | −4,8% | +15% | 0,06 |
> | 1437 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+156% · −34,6%** | +38% · −6,0% | +27% | −6,1% | 3,0 | 78 d | −5,5% | +21% | 0,07 |
> | 1438 | ADX ·ADX + IFR ·TEN + Bollinger ·TEN | **+207% · −34,5%** | +66% · −11,3% | +36% | −5,8% | 2,6 | 80 d | −4,2% | +21% | 0,33 |
> | 1439 | VWAP ·TEN + IFR ·TEN + Tendência ·TEN | **+154% · −35,4%** | +55% · −11,4% | +37% | −9,9% | 3,4 | 75 d | −7,0% | +21% | 0,46 |
> | 1440 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+223% · −51,8%** | +49% · −10,5% | +33% | −7,6% | 3,5 | 73 d | −7,4% | +23% | 0,23 |

> [!example]- Combinações 1441 a 1470 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1441 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+218% · −34,8%** | +45% · −7,3% | +30% | −5,9% | 4,0 | 120 d | −4,6% | +17% | 0,10 |
> | 1442 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+303% · −53,1%** | +60% · −11,8% | +39% | −10,4% | 3,3 | 101 d | −4,0% | +29% | 0,33 |
> | 1443 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+176% · −43,9%** | +40% · −8,2% | +28% | −4,0% | 2,8 | 72 d | −6,0% | +20% | 0,04 |
> | 1444 | Donchian ·TEN + Pullback ·PUL + Tendência ·TEN | **+194% · −42,0%** | +64% · −13,9% | +39% | −6,5% | 5,4 | 91 d | −7,3% | +17% | 0,19 |
> | 1445 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+185% · −49,7%** | +50% · −13,0% | +34% | −5,5% | 3,3 | 67 d | −7,9% | +18% | 0,10 |
> | 1446 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+290% · −50,2%** | +60% · −11,5% | +35% | −11,6% | 3,3 | 65 d | −8,2% | +24% | 0,35 |
> | 1447 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+263% · −48,9%** | +51% · −9,4% | +32% | −5,8% | 3,7 | 74 d | −7,8% | +19% | 0,21 |
> | 1448 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+220% · −41,6%** | +49% · −8,2% | +33% | −7,8% | 3,5 | 76 d | −7,0% | +27% | 0,15 |
> | 1449 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+337% · −57,3%** | +63% · −11,7% | +37% | −7,9% | 3,0 | 65 d | −7,6% | +28% | 0,37 |
> | 1450 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+167% · −42,5%** | +46% · −10,8% | +32% | −7,3% | 3,8 | 78 d | −7,2% | +20% | 0,16 |
> | 1451 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+154% · −27,7%** | +43% · −6,7% | +31% | −7,2% | 2,1 | 73 d | −3,5% | +23% | 0,13 |
> | 1452 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+66% · −13,4%** | +25% · −2,9% | +21% | −3,9% | 2,1 | 76 d | −2,3% | +20% | 0,03 |
> | 1453 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+222% · −36,1%** | +47% · −7,2% | +31% | −5,7% | 3,6 | 89 d | −5,9% | +27% | 0,07 |
> | 1454 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+260% · −46,6%** | +53% · −9,5% | +34% | −6,6% | 3,9 | 75 d | −8,0% | +19% | 0,25 |
> | 1455 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+221% · −41,2%** | +44% · −7,7% | +28% | −5,2% | 3,2 | 112 d | −2,3% | +22% | 0,11 |
> | 1456 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+365% · −50,5%** | +71% · −10,1% | +39% | −6,3% | 3,3 | 65 d | −8,3% | +29% | 0,32 |
> | 1457 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+196% · −34,4%** | +43% · −6,4% | +29% | −6,7% | 2,8 | 72 d | −6,2% | +23% | 0,04 |
> | 1458 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+184% · −22,6%** | +39% · −4,2% | +28% | −4,5% | 2,8 | 92 d | −3,2% | +20% | 0,02 |
> | 1459 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+249% · −39,6%** | +48% · −7,8% | +32% | −10,6% | 2,6 | 67 d | −6,1% | +26% | 0,42 |
> | 1460 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+309% · −42,4%** | +56% · −8,5% | +31% | −6,8% | 3,1 | 71 d | −7,0% | +25% | 0,12 |
> | 1461 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+231% · −38,1%** | +46% · −7,6% | +28% | −9,0% | 2,8 | 65 d | −7,1% | +20% | 0,17 |
> | 1462 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+123% · −23,1%** | +36% · −5,2% | +27% | −5,4% | 3,6 | 119 d | −3,9% | +16% | 0,02 |
> | 1463 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+349% · −52,8%** | +61% · −10,6% | +34% | −5,7% | 4,1 | 97 d | −6,1% | +24% | 0,18 |
> | 1464 | GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+278% · −41,0%** | +62% · −10,5% | +36% | −6,0% | 3,1 | 67 d | −7,4% | +27% | 0,30 |
> | 1465 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+271% · −44,4%** | +55% · −9,6% | +35% | −10,6% | 2,8 | 67 d | −6,6% | +25% | 0,29 |
> | 1466 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+243% · −39,6%** | +50% · −8,3% | +32% | −8,6% | 2,8 | 67 d | −6,7% | +25% | 0,26 |
> | 1467 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+217% · −43,0%** | +46% · −9,2% | +30% | −9,8% | 2,7 | 73 d | −5,8% | +25% | 0,16 |
> | 1468 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+282% · −43,6%** | +58% · −8,7% | +35% | −6,8% | 3,2 | 87 d | −5,2% | +25% | 0,25 |
> | 1469 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+195% · −49,9%** | +44% · −10,4% | +30% | −6,3% | 3,7 | 83 d | −6,4% | +16% | 0,18 |
> | 1470 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+227% · −37,2%** | +57% · −9,3% | +35% | −10,7% | 3,2 | 64 d | −8,5% | +22% | 0,34 |

> [!example]- Combinações 1471 a 1500 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1471 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+284% · −53,8%** | +55% · −10,6% | +32% | −4,6% | 3,3 | 80 d | −6,2% | +21% | 0,18 |
> | 1472 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+154% · −25,3%** | +40% · −5,6% | +27% | −7,2% | 2,5 | 78 d | −4,1% | +16% | 0,18 |
> | 1473 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+129% · −40,8%** | +33% · −8,6% | +24% | −4,7% | 2,6 | 72 d | −5,5% | +17% | 0,02 |
> | 1474 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+134% · −31,2%** | +38% · −7,6% | +25% | −3,2% | 3,6 | 101 d | −5,0% | +14% | 0,07 |
> | 1475 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+199% · −37,5%** | +44% · −7,0% | +29% | −5,7% | 2,3 | 76 d | −3,6% | +22% | 0,09 |
> | 1476 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+154% · −26,7%** | +36% · −5,1% | +25% | −4,7% | 3,5 | 109 d | −4,3% | +20% | 0,07 |
> | 1477 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+327% · −45,7%** | +58% · −7,8% | +33% | −5,0% | 3,7 | 105 d | −5,1% | +22% | 0,17 |
> | 1478 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+115% · −38,7%** | +37% · −10,1% | +25% | −8,9% | 3,1 | 78 d | −6,0% | +15% | 0,01 |
> | 1479 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+246% · −33,7%** | +48% · −6,4% | +30% | −7,0% | 3,2 | 83 d | −5,7% | +24% | 0,16 |
> | 1480 | Tendência ·TEN | **+72% · −23,6%** | +72% · −23,6% | +48% | −16,1% | 3,8 | 54 d | −11,1% | +22% | — |
> | 1481 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+181% · −30,5%** | +40% · −5,6% | +24% | −6,5% | 3,3 | 91 d | −5,1% | +17% | 0,10 |
> | 1482 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+168% · −46,0%** | +39% · −10,0% | +27% | −9,1% | 2,7 | 72 d | −5,9% | +20% | 0,03 |
> | 1483 | GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+148% · −40,2%** | +54% · −13,6% | +34% | −7,7% | 3,9 | 76 d | −8,0% | +18% | 0,31 |
> | 1484 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+330% · −64,9%** | +63% · −15,1% | +37% | −7,7% | 3,2 | 65 d | −8,2% | +23% | 0,38 |
> | 1485 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+213% · −34,7%** | +44% · −5,9% | +27% | −5,8% | 3,1 | 76 d | −6,3% | +24% | 0,02 |
> | 1486 | IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+184% · −25,5%** | +46% · −5,5% | +29% | −4,9% | 3,2 | 103 d | −3,8% | +23% | 0,07 |
> | 1487 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+179% · −37,1%** | +40% · −7,3% | +25% | −7,6% | 3,2 | 83 d | −5,7% | +16% | 0,15 |
> | 1488 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+257% · −43,2%** | +51% · −9,0% | +31% | −5,9% | 3,8 | 81 d | −7,0% | +19% | 0,26 |
> | 1489 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+232% · −44,4%** | +48% · −9,3% | +29% | −6,7% | 3,2 | 65 d | −8,3% | +22% | 0,12 |
> | 1490 | Rompe 200 ·ROM + Tendência ·TEN | **+81% · −26,3%** | +45% · −11,6% | +32% | −10,4% | 3,3 | 76 d | −6,8% | +16% | 0,26 |
> | 1491 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+264% · −55,1%** | +56% · −11,5% | +35% | −7,1% | 3,2 | 76 d | −6,5% | +28% | 0,19 |
> | 1492 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL | **+111% · −23,2%** | +42% · −7,3% | +30% | −7,9% | 3,8 | 119 d | −4,6% | +17% | 0,12 |
> | 1493 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+216% · −46,4%** | +48% · −9,4% | +30% | −5,5% | 3,1 | 80 d | −5,9% | +23% | 0,14 |
> | 1494 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+294% · −42,6%** | +54% · −8,0% | +35% | −5,5% | 4,2 | 122 d | −4,6% | +24% | 0,06 |
> | 1495 | Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+297% · −43,1%** | +54% · −9,1% | +33% | −7,6% | 3,9 | 83 d | −7,0% | +22% | 0,35 |
> | 1496 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+182% · −32,8%** | +40% · −5,9% | +29% | −5,3% | 3,3 | 98 d | −4,7% | +20% | 0,11 |
> | 1497 | MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+287% · −41,6%** | +52% · −8,4% | +34% | −8,3% | 3,0 | 90 d | −4,5% | +22% | 0,32 |
> | 1498 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+314% · −39,8%** | +70% · −11,1% | +37% | −7,7% | 4,1 | 70 d | −9,4% | +24% | 0,34 |
> | 1499 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+254% · −43,9%** | +51% · −8,9% | +29% | −4,2% | 3,0 | 76 d | −6,3% | +21% | 0,15 |
> | 1500 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+286% · −47,6%** | +54% · −10,7% | +32% | −10,8% | 2,6 | 67 d | −6,3% | +25% | 0,32 |

> [!example]- Combinações 1501 a 1530 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1501 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+268% · −39,0%** | +51% · −7,6% | +31% | −5,7% | 2,2 | 66 d | −5,3% | +22% | 0,12 |
> | 1502 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+395% · −48,1%** | +67% · −10,1% | +37% | −6,3% | 3,7 | 70 d | −8,6% | +25% | 0,32 |
> | 1503 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+257% · −49,0%** | +52% · −11,1% | +32% | −12,1% | 3,1 | 73 d | −6,8% | +25% | 0,40 |
> | 1504 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+257% · −48,3%** | +55% · −10,0% | +34% | −6,6% | 3,1 | 76 d | −6,4% | +27% | 0,31 |
> | 1505 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+246% · −42,9%** | +60% · −11,5% | +35% | −7,0% | 3,9 | 65 d | −10,0% | +22% | 0,11 |
> | 1506 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+244% · −33,5%** | +48% · −6,4% | +30% | −7,0% | 3,3 | 83 d | −5,9% | +25% | 0,15 |
> | 1507 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+247% · −40,7%** | +51% · −7,9% | +33% | −6,3% | 2,0 | 64 d | −5,2% | +23% | 0,22 |
> | 1508 | Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+132% · −20,4%** | +37% · −4,5% | +25% | −4,6% | 3,2 | 94 d | −4,9% | +21% | −0,00 |
> | 1509 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+323% · −42,4%** | +57% · −9,1% | +34% | −8,6% | 2,8 | 67 d | −6,9% | +24% | 0,25 |
> | 1510 | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+131% · −22,6%** | +37% · −5,2% | +25% | −5,9% | 3,3 | 93 d | −5,1% | +23% | 0,10 |
> | 1511 | Donchian ·TEN + IFR ·TEN + Bollinger ·TEN | **+233% · −30,1%** | +70% · −10,7% | +37% | −5,9% | 3,8 | 70 d | −8,9% | +24% | 0,30 |
> | 1512 | IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+199% · −30,3%** | +50% · −7,0% | +35% | −9,6% | 2,4 | 76 d | −4,5% | +21% | 0,27 |
> | 1513 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+286% · −44,8%** | +56% · −9,3% | +34% | −6,0% | 4,3 | 91 d | −6,9% | +20% | 0,17 |
> | 1514 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+273% · −28,6%** | +48% · −4,8% | +29% | −2,9% | 3,9 | 92 d | −6,2% | +22% | 0,02 |
> | 1515 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+177% · −36,8%** | +40% · −7,4% | +27% | −8,4% | 2,4 | 72 d | −5,3% | +22% | 0,12 |
> | 1516 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+308% · −62,8%** | +62% · −14,4% | +38% | −7,5% | 2,8 | 65 d | −7,3% | +26% | 0,31 |
> | 1517 | Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN | **+180% · −23,4%** | +57% · −7,0% | +31% | −3,1% | 4,4 | 100 d | −6,4% | +17% | 0,02 |
> | 1518 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+179% · −44,6%** | +51% · −12,3% | +33% | −14,2% | 3,1 | 75 d | −6,6% | +25% | 0,42 |
> | 1519 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+148% · −31,0%** | +35% · −5,7% | +24% | −2,4% | 3,4 | 106 d | −4,4% | +15% | 0,03 |
> | 1520 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+137% · −37,7%** | +35% · −7,6% | +27% | −7,8% | 2,4 | 73 d | −5,0% | +19% | 0,20 |
> | 1521 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+231% · −44,5%** | +46% · −9,5% | +28% | −10,0% | 2,6 | 64 d | −7,1% | +20% | 0,29 |
> | 1522 | VWAP ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+189% · −40,2%** | +52% · −10,2% | +36% | −10,2% | 3,0 | 75 d | −6,4% | +27% | 0,37 |
> | 1523 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+290% · −49,4%** | +55% · −9,4% | +34% | −6,9% | 2,3 | 65 d | −5,8% | +23% | 0,36 |
> | 1524 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+330% · −42,7%** | +58% · −8,3% | +35% | −5,8% | 2,2 | 64 d | −5,8% | +23% | 0,25 |
> | 1525 | GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+196% · −38,5%** | +45% · −7,4% | +30% | −6,5% | 3,3 | 76 d | −7,0% | +25% | 0,13 |
> | 1526 | GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+206% · −43,2%** | +55% · −10,8% | +36% | −7,2% | 3,8 | 76 d | −8,0% | +24% | 0,15 |
> | 1527 | MACD ·TEN + Tendência ·TEN + Onda ·OND | **+141% · −34,4%** | +52% · −11,6% | +37% | −12,7% | 2,6 | 57 d | −7,3% | +27% | 0,38 |
> | 1528 | Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+293% · −42,1%** | +55% · −8,5% | +33% | −7,7% | 3,6 | 83 d | −6,6% | +26% | 0,27 |
> | 1529 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+162% · −38,7%** | +38% · −8,0% | +29% | −6,6% | 3,1 | 100 d | −4,2% | +20% | 0,15 |
> | 1530 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+204% · −35,1%** | +42% · −6,8% | +26% | −5,9% | 2,5 | 72 d | −5,7% | +22% | 0,10 |

> [!example]- Combinações 1531 a 1560 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1531 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+291% · −49,4%** | +57% · −10,5% | +36% | −6,6% | 4,7 | 120 d | −5,7% | +18% | 0,30 |
> | 1532 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+309% · −49,5%** | +61% · −10,0% | +32% | −5,1% | 2,9 | 65 d | −7,7% | +22% | 0,25 |
> | 1533 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+247% · −43,4%** | +52% · −9,2% | +34% | −8,2% | 3,4 | 79 d | −6,8% | +29% | 0,24 |
> | 1534 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+178% · −35,8%** | +41% · −7,0% | +28% | −7,5% | 2,8 | 79 d | −5,3% | +25% | 0,13 |
> | 1535 | GPS médias ·TEN + Pullback ·PUL | **+94% · −26,5%** | +51% · −12,7% | +31% | −6,1% | 4,0 | 76 d | −8,3% | +17% | −0,02 |
> | 1536 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+321% · −52,6%** | +60% · −10,4% | +36% | −5,5% | 3,7 | 72 d | −8,5% | +26% | 0,13 |
> | 1537 | ADX ·ADX + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+186% · −45,7%** | +52% · −10,4% | +34% | −8,7% | 2,6 | 76 d | −5,3% | +26% | 0,04 |
> | 1538 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+326% · −54,8%** | +64% · −11,7% | +38% | −6,8% | 4,7 | 80 d | −8,5% | +21% | 0,39 |
> | 1539 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+204% · −39,2%** | +47% · −8,1% | +29% | −6,6% | 3,1 | 74 d | −6,9% | +25% | 0,00 |
> | 1540 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+243% · −39,7%** | +51% · −7,7% | +33% | −6,2% | 3,0 | 67 d | −7,4% | +26% | 0,08 |
> | 1541 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+222% · −40,0%** | +49% · −8,3% | +33% | −7,8% | 3,3 | 76 d | −7,1% | +26% | 0,18 |
> | 1542 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+245% · −38,8%** | +48% · −7,5% | +31% | −6,6% | 3,6 | 78 d | −7,2% | +21% | 0,19 |
> | 1543 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+134% · −42,4%** | +34% · −8,9% | +26% | −5,0% | 3,1 | 100 d | −4,3% | +15% | 0,12 |
> | 1544 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+238% · −49,7%** | +50% · −11,0% | +32% | −7,2% | 3,4 | 72 d | −8,0% | +21% | 0,19 |
> | 1545 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+330% · −43,9%** | +60% · −9,6% | +34% | −7,5% | 3,2 | 63 d | −9,1% | +22% | 0,31 |
> | 1546 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+189% · −39,0%** | +51% · −9,5% | +33% | −7,4% | 2,4 | 81 d | −3,7% | +24% | 0,26 |
> | 1547 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+240% · −47,5%** | +62% · −12,1% | +36% | −5,6% | 4,3 | 70 d | −9,9% | +21% | 0,17 |
> | 1548 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+387% · −57,2%** | +68% · −12,0% | +40% | −6,7% | 4,9 | 120 d | −5,9% | +24% | 0,23 |
> | 1549 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+311% · −49,7%** | +61% · −11,3% | +34% | −10,6% | 3,7 | 70 d | −8,8% | +21% | 0,38 |
> | 1550 | ADX ·ADX + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+177% · −41,3%** | +47% · −10,3% | +28% | −7,1% | 2,0 | 64 d | −5,2% | +22% | 0,20 |
> | 1551 | Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+186% · −32,3%** | +47% · −7,6% | +31% | −7,1% | 3,0 | 90 d | −4,8% | +24% | 0,13 |
> | 1552 | Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+197% · −26,2%** | +49% · −6,1% | +29% | −6,0% | 3,3 | 81 d | −6,4% | +24% | 0,04 |
> | 1553 | GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+87% · −24,3%** | +36% · −7,7% | +23% | −5,9% | 2,8 | 72 d | −6,5% | +18% | −0,01 |
> | 1554 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+349% · −41,6%** | +61% · −7,8% | +34% | −6,0% | 2,8 | 64 d | −7,7% | +24% | 0,31 |
> | 1555 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+210% · −50,7%** | +44% · −10,2% | +29% | −4,2% | 3,4 | 74 d | −7,7% | +15% | 0,08 |
> | 1556 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+155% · −33,2%** | +36% · −6,3% | +26% | −7,4% | 3,2 | 107 d | −3,9% | +20% | 0,11 |
> | 1557 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+255% · −34,7%** | +47% · −6,4% | +31% | −5,9% | 2,9 | 92 d | −4,2% | +21% | 0,17 |
> | 1558 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+283% · −45,4%** | +56% · −8,6% | +34% | −4,8% | 2,6 | 67 d | −6,6% | +27% | 0,13 |
> | 1559 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+111% · −28,2%** | +43% · −9,3% | +28% | −9,8% | 2,8 | 67 d | −6,9% | +24% | 0,03 |
> | 1560 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+237% · −38,1%** | +47% · −7,8% | +29% | −6,6% | 2,6 | 67 d | −6,5% | +21% | 0,24 |

> [!example]- Combinações 1561 a 1590 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1561 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+223% · −38,0%** | +44% · −6,8% | +28% | −4,1% | 3,4 | 122 d | −3,1% | +19% | 0,04 |
> | 1562 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+303% · −44,5%** | +57% · −8,2% | +33% | −7,1% | 3,5 | 74 d | −7,8% | +26% | 0,14 |
> | 1563 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+238% · −39,8%** | +46% · −8,3% | +29% | −8,3% | 2,5 | 72 d | −5,8% | +21% | 0,14 |
> | 1564 | GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+174% · −36,0%** | +46% · −9,3% | +28% | −9,4% | 2,8 | 67 d | −6,9% | +23% | 0,24 |
> | 1565 | GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+207% · −34,9%** | +67% · −11,1% | +37% | −6,9% | 3,7 | 65 d | −9,7% | +23% | 0,34 |
> | 1566 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+240% · −49,5%** | +51% · −11,3% | +33% | −13,1% | 2,7 | 73 d | −6,0% | +28% | 0,35 |
> | 1567 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+248% · −50,9%** | +56% · −10,4% | +36% | −9,7% | 3,5 | 73 d | −7,9% | +29% | 0,36 |
> | 1568 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+316% · −42,9%** | +58% · −7,7% | +33% | −5,2% | 3,5 | 97 d | −5,5% | +23% | 0,13 |
> | 1569 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+223% · −42,2%** | +47% · −8,8% | +31% | −6,8% | 3,6 | 83 d | −6,6% | +21% | 0,21 |
> | 1570 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+156% · −41,2%** | +37% · −8,4% | +27% | −7,8% | 2,5 | 72 d | −5,7% | +19% | 0,12 |
> | 1571 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+170% · −36,2%** | +48% · −9,2% | +28% | −6,2% | 3,8 | 83 d | −7,1% | +18% | 0,07 |
> | 1572 | VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+246% · −41,4%** | +48% · −8,3% | +31% | −7,3% | 3,7 | 100 d | −5,6% | +19% | 0,34 |
> | 1573 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+210% · −59,0%** | +47% · −12,3% | +31% | −6,3% | 3,9 | 120 d | −5,0% | +14% | 0,29 |
> | 1574 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+347% · −56,5%** | +68% · −12,1% | +41% | −8,0% | 4,2 | 70 d | −10,0% | +26% | 0,48 |
> | 1575 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+263% · −44,6%** | +62% · −12,3% | +39% | −8,1% | 3,7 | 70 d | −8,9% | +28% | 0,40 |
> | 1576 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+192% · −36,5%** | +43% · −7,6% | +28% | −7,2% | 3,7 | 120 d | −4,7% | +18% | 0,18 |
> | 1577 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+200% · −51,8%** | +46% · −11,0% | +30% | −5,6% | 3,5 | 76 d | −7,6% | +17% | 0,08 |
> | 1578 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+289% · −44,2%** | +55% · −8,9% | +32% | −5,6% | 3,0 | 76 d | −6,5% | +26% | 0,17 |
> | 1579 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+378% · −64,6%** | +76% · −15,5% | +42% | −7,4% | 4,4 | 73 d | −9,5% | +26% | 0,41 |
> | 1580 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+139% · −51,3%** | +41% · −13,8% | +29% | −4,8% | 3,6 | 76 d | −7,7% | +13% | 0,03 |
> | 1581 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+185% · −29,3%** | +40% · −5,0% | +29% | −5,2% | 2,9 | 92 d | −4,5% | +21% | 0,04 |
> | 1582 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+285% · −50,4%** | +57% · −9,3% | +35% | −5,3% | 2,8 | 67 d | −7,2% | +27% | 0,12 |
> | 1583 | Donchian ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+277% · −39,1%** | +64% · −9,7% | +37% | −8,5% | 3,7 | 70 d | −9,0% | +30% | 0,32 |
> | 1584 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+267% · −48,8%** | +55% · −9,5% | +37% | −8,2% | 3,0 | 65 d | −8,1% | +28% | 0,29 |
> | 1585 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+318% · −53,2%** | +61% · −10,6% | +36% | −6,7% | 3,6 | 72 d | −8,6% | +25% | 0,25 |
> | 1586 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+207% · −41,5%** | +45% · −8,4% | +27% | −11,2% | 2,9 | 69 d | −7,2% | +20% | 0,34 |
> | 1587 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+286% · −42,0%** | +52% · −8,5% | +33% | −3,8% | 4,4 | 92 d | −7,2% | +22% | 0,06 |
> | 1588 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+330% · −51,1%** | +64% · −10,6% | +39% | −8,7% | 3,8 | 70 d | −9,3% | +27% | 0,38 |
> | 1589 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+354% · −53,1%** | +65% · −10,2% | +37% | −7,7% | 4,1 | 70 d | −9,8% | +24% | 0,42 |
> | 1590 | ADX ·ADX + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+277% · −43,3%** | +55% · −8,7% | +36% | −7,5% | 2,0 | 64 d | −5,5% | +23% | 0,26 |

> [!example]- Combinações 1591 a 1620 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1591 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+266% · −49,2%** | +58% · −10,2% | +35% | −6,5% | 3,8 | 71 d | −9,2% | +27% | 0,15 |
> | 1592 | ADX ·ADX + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+328% · −47,9%** | +59% · −10,0% | +36% | −7,8% | 2,4 | 65 d | −6,4% | +24% | 0,27 |
> | 1593 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+168% · −50,3%** | +40% · −11,5% | +27% | −10,4% | 2,5 | 72 d | −6,0% | +18% | 0,19 |
> | 1594 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+184% · −34,9%** | +48% · −8,8% | +31% | −4,3% | 4,1 | 92 d | −6,9% | +19% | 0,07 |
> | 1595 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+181% · −36,5%** | +40% · −7,1% | +25% | −7,6% | 3,2 | 83 d | −6,1% | +17% | 0,14 |
> | 1596 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+193% · −41,3%** | +43% · −8,6% | +29% | −8,1% | 2,8 | 72 d | −6,6% | +25% | 0,16 |
> | 1597 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+180% · −53,5%** | +42% · −11,2% | +30% | −6,0% | 3,5 | 78 d | −7,2% | +19% | 0,08 |
> | 1598 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+264% · −39,4%** | +53% · −7,0% | +32% | −4,6% | 3,7 | 119 d | −5,0% | +22% | 0,15 |
> | 1599 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+238% · −42,3%** | +51% · −8,8% | +33% | −8,7% | 3,7 | 120 d | −4,8% | +22% | 0,23 |
> | 1600 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+298% · −42,4%** | +56% · −7,8% | +33% | −4,4% | 4,1 | 120 d | −5,4% | +21% | 0,19 |
> | 1601 | ADX ·ADX + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+292% · −40,1%** | +54% · −7,3% | +35% | −5,4% | 3,6 | 122 d | −4,1% | +23% | 0,12 |
> | 1602 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+234% · −35,4%** | +57% · −9,3% | +30% | −6,3% | 3,6 | 71 d | −8,8% | +21% | 0,07 |
> | 1603 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+195% · −35,1%** | +41% · −6,8% | +28% | −8,9% | 3,2 | 107 d | −4,3% | +19% | 0,23 |
> | 1604 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+182% · −34,1%** | +39% · −6,4% | +26% | −4,1% | 2,6 | 72 d | −6,1% | +18% | 0,01 |
> | 1605 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+313% · −40,4%** | +57% · −8,4% | +33% | −7,7% | 4,4 | 94 d | −7,1% | +22% | 0,19 |
> | 1606 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+161% · −34,7%** | +45% · −8,5% | +30% | −7,3% | 2,5 | 67 d | −6,5% | +20% | 0,23 |
> | 1607 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+250% · −37,3%** | +51% · −7,3% | +33% | −7,2% | 3,3 | 88 d | −6,0% | +26% | 0,17 |
> | 1608 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+201% · −37,6%** | +45% · −7,0% | +29% | −5,7% | 2,2 | 77 d | −3,7% | +22% | 0,09 |
> | 1609 | ADX ·ADX + Donchian ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+276% · −56,2%** | +59% · −11,8% | +36% | −8,7% | 3,4 | 78 d | −7,2% | +29% | 0,26 |
> | 1610 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+275% · −52,2%** | +57% · −10,8% | +35% | −6,8% | 3,9 | 70 d | −9,5% | +23% | 0,24 |
> | 1611 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+286% · −43,5%** | +67% · −11,7% | +41% | −9,4% | 4,0 | 70 d | −9,8% | +27% | 0,53 |
> | 1612 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+144% · −33,0%** | +51% · −11,2% | +32% | −6,9% | 3,1 | 72 d | −7,5% | +24% | 0,01 |
> | 1613 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+288% · −44,5%** | +68% · −11,7% | +36% | −5,3% | 3,1 | 65 d | −8,4% | +28% | 0,35 |
> | 1614 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+286% · −62,8%** | +63% · −14,8% | +38% | −8,1% | 3,3 | 77 d | −7,0% | +24% | 0,40 |
> | 1615 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+115% · −43,6%** | +37% · −11,9% | +25% | −10,8% | 3,0 | 75 d | −6,7% | +14% | 0,21 |
> | 1616 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+197% · −35,0%** | +52% · −8,3% | +30% | −4,5% | 4,2 | 102 d | −6,5% | +18% | −0,02 |
> | 1617 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+279% · −51,6%** | +58% · −11,7% | +37% | −9,3% | 3,6 | 70 d | −9,0% | +23% | 0,52 |
> | 1618 | VWAP ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+177% · −34,9%** | +46% · −8,5% | +30% | −6,2% | 3,6 | 95 d | −5,9% | +17% | 0,23 |
> | 1619 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+134% · −35,4%** | +34% · −6,7% | +26% | −3,7% | 3,4 | 120 d | −4,2% | +16% | 0,05 |
> | 1620 | Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+249% · −37,6%** | +58% · −9,0% | +33% | −6,8% | 4,1 | 83 d | −7,8% | +18% | 0,29 |

> [!example]- Combinações 1621 a 1650 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1621 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+195% · −37,2%** | +41% · −7,4% | +28% | −9,7% | 3,2 | 103 d | −4,5% | +22% | 0,32 |
> | 1622 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+269% · −43,1%** | +51% · −9,2% | +32% | −9,0% | 2,6 | 65 d | −7,0% | +24% | 0,31 |
> | 1623 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+170% · −43,6%** | +41% · −9,0% | +28% | −6,3% | 3,4 | 94 d | −5,7% | +19% | 0,09 |
> | 1624 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+196% · −46,2%** | +44% · −10,1% | +30% | −12,9% | 2,5 | 72 d | −6,1% | +23% | 0,18 |
> | 1625 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+262% · −46,2%** | +51% · −10,0% | +31% | −12,8% | 2,6 | 65 d | −7,2% | +22% | 0,39 |
> | 1626 | MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+151% · −28,5%** | +35% · −4,8% | +25% | −6,9% | 2,5 | 85 d | −3,8% | +17% | 0,09 |
> | 1627 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+224% · −39,3%** | +48% · −7,9% | +32% | −9,7% | 2,8 | 72 d | −6,7% | +24% | 0,13 |
> | 1628 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+336% · −47,1%** | +60% · −10,5% | +34% | −10,1% | 3,0 | 71 d | −7,6% | +28% | 0,32 |
> | 1629 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+119% · −30,3%** | +37% · −6,5% | +26% | −3,8% | 3,0 | 80 d | −6,1% | +18% | −0,02 |
> | 1630 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+205% · −38,5%** | +51% · −9,2% | +31% | −5,8% | 3,4 | 122 d | −3,6% | +20% | 0,11 |
> | 1631 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+279% · −44,4%** | +56% · −9,3% | +34% | −7,9% | 3,3 | 65 d | −9,1% | +29% | 0,15 |
> | 1632 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+213% · −38,5%** | +54% · −9,0% | +34% | −6,2% | 2,7 | 72 d | −6,6% | +25% | 0,12 |
> | 1633 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+255% · −35,6%** | +50% · −6,4% | +28% | −3,8% | 3,2 | 105 d | −4,5% | +21% | 0,10 |
> | 1634 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+229% · −49,1%** | +49% · −10,2% | +31% | −4,2% | 4,0 | 91 d | −7,0% | +16% | 0,10 |
> | 1635 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+171% · −44,3%** | +40% · −9,5% | +27% | −9,3% | 2,6 | 72 d | −6,2% | +21% | 0,06 |
> | 1636 | GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+211% · −36,5%** | +44% · −6,8% | +28% | −7,2% | 3,0 | 76 d | −6,7% | +25% | 0,13 |
> | 1637 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+213% · −51,7%** | +47% · −11,7% | +31% | −8,7% | 2,7 | 72 d | −6,7% | +22% | 0,14 |
> | 1638 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+188% · −52,7%** | +46% · −11,2% | +31% | −11,0% | 3,1 | 73 d | −7,3% | +20% | 0,37 |
> | 1639 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+258% · −55,9%** | +57% · −11,2% | +37% | −9,7% | 2,7 | 81 d | −5,4% | +24% | 0,33 |
> | 1640 | IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+181% · −26,2%** | +45% · −5,7% | +29% | −4,8% | 2,9 | 99 d | −4,1% | +23% | 0,05 |
> | 1641 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+287% · −46,0%** | +57% · −8,8% | +34% | −4,6% | 2,6 | 67 d | −6,7% | +27% | 0,15 |
> | 1642 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+244% · −37,4%** | +48% · −7,6% | +31% | −8,3% | 3,0 | 76 d | −6,8% | +26% | 0,14 |
> | 1643 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+89% · −33,7%** | +27% · −6,5% | +21% | −3,1% | 2,9 | 91 d | −4,8% | +13% | 0,01 |
> | 1644 | IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+236% · −28,2%** | +54% · −6,4% | +33% | −7,0% | 2,9 | 92 d | −4,8% | +21% | 0,23 |
> | 1645 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+305% · −44,6%** | +57% · −9,1% | +36% | −6,4% | 3,8 | 81 d | −7,8% | +29% | 0,17 |
> | 1646 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+303% · −33,6%** | +53% · −6,1% | +32% | −6,1% | 3,4 | 82 d | −6,9% | +26% | 0,12 |
> | 1647 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pullback ·PUL | **+203% · −35,7%** | +53% · −9,4% | +33% | −7,7% | 4,0 | 120 d | −5,4% | +17% | 0,23 |
> | 1648 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+291% · −38,9%** | +53% · −6,5% | +30% | −3,8% | 3,4 | 105 d | −5,3% | +20% | 0,05 |
> | 1649 | 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+119% · −18,1%** | +35% · −3,7% | +23% | −3,5% | 2,7 | 99 d | −3,2% | +17% | 0,07 |
> | 1650 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+207% · −39,4%** | +46% · −8,0% | +29% | −8,1% | 3,6 | 83 d | −7,1% | +21% | 0,15 |

> [!example]- Combinações 1651 a 1680 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1651 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+241% · −43,4%** | +47% · −8,5% | +29% | −5,5% | 1,9 | 67 d | −4,7% | +20% | 0,17 |
> | 1652 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+208% · −30,2%** | +53% · −7,2% | +33% | −5,6% | 3,6 | 88 d | −6,6% | +26% | 0,08 |
> | 1653 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+179% · −29,5%** | +39% · −5,9% | +27% | −3,4% | 3,4 | 106 d | −5,1% | +21% | 0,01 |
> | 1654 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+250% · −50,5%** | +53% · −10,3% | +32% | −5,1% | 4,2 | 83 d | −8,1% | +18% | 0,18 |
> | 1655 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+193% · −33,0%** | +41% · −6,0% | +28% | −4,5% | 3,4 | 106 d | −5,2% | +18% | 0,12 |
> | 1656 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+148% · −39,8%** | +43% · −10,4% | +32% | −8,9% | 3,1 | 99 d | −4,8% | +20% | 0,27 |
> | 1657 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+170% · −22,2%** | +45% · −5,2% | +31% | −5,9% | 2,7 | 92 d | −4,0% | +20% | 0,09 |
> | 1658 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+207% · −36,1%** | +42% · −6,8% | +26% | −5,9% | 2,4 | 72 d | −5,9% | +21% | 0,11 |
> | 1659 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+217% · −43,8%** | +58% · −11,5% | +34% | −5,4% | 3,2 | 77 d | −6,9% | +27% | 0,15 |
> | 1660 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+277% · −44,6%** | +57% · −9,4% | +34% | −9,2% | 3,9 | 83 d | −7,5% | +23% | 0,37 |
> | 1661 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+320% · −47,8%** | +62% · −10,2% | +39% | −9,7% | 3,8 | 80 d | −8,1% | +33% | 0,43 |
> | 1662 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+288% · −48,9%** | +58% · −9,3% | +35% | −5,2% | 2,7 | 67 d | −7,2% | +28% | 0,15 |
> | 1663 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+273% · −45,9%** | +63% · −10,9% | +39% | −7,3% | 4,3 | 122 d | −5,5% | +25% | 0,15 |
> | 1664 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+241% · −40,0%** | +47% · −8,3% | +29% | −8,5% | 2,4 | 72 d | −5,9% | +21% | 0,17 |
> | 1665 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+253% · −37,2%** | +48% · −7,1% | +31% | −3,7% | 3,8 | 89 d | −7,0% | +23% | 0,06 |
> | 1666 | Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+72% · −13,0%** | +30% · −3,0% | +20% | −2,4% | 2,7 | 96 d | −3,8% | +18% | −0,02 |
> | 1667 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+346% · −54,3%** | +61% · −11,2% | +34% | −5,7% | 4,2 | 97 d | −6,9% | +23% | 0,19 |
> | 1668 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+307% · −63,0%** | +64% · −14,2% | +37% | −5,7% | 3,9 | 74 d | −9,0% | +23% | 0,19 |
> | 1669 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+128% · −37,0%** | +33% · −7,3% | +24% | −6,7% | 3,4 | 120 d | −4,4% | +17% | −0,00 |
> | 1670 | GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+138% · −28,1%** | +41% · −6,6% | +28% | −6,8% | 3,3 | 81 d | −6,8% | +21% | −0,04 |
> | 1671 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+248% · −43,5%** | +51% · −8,6% | +34% | −7,0% | 2,3 | 67 d | −6,0% | +24% | 0,08 |
> | 1672 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+194% · −44,5%** | +45% · −9,6% | +30% | −11,2% | 3,4 | 95 d | −5,8% | +24% | 0,21 |
> | 1673 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+183% · −35,3%** | +40% · −6,1% | +25% | −4,2% | 3,1 | 122 d | −2,5% | +19% | 0,05 |
> | 1674 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+203% · −44,0%** | +44% · −7,9% | +29% | −6,0% | 3,5 | 122 d | −4,2% | +19% | 0,06 |
> | 1675 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+275% · −49,9%** | +56% · −10,3% | +37% | −9,4% | 2,2 | 65 d | −6,1% | +24% | 0,28 |
> | 1676 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+222% · −41,8%** | +57% · −10,3% | +34% | −8,7% | 4,7 | 102 d | −7,1% | +22% | 0,19 |
> | 1677 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+324% · −51,1%** | +61% · −9,8% | +36% | −5,5% | 3,5 | 72 d | −8,8% | +26% | 0,16 |
> | 1678 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+266% · −44,8%** | +54% · −8,9% | +33% | −6,3% | 2,6 | 67 d | −6,9% | +28% | 0,13 |
> | 1679 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+220% · −34,9%** | +46% · −7,3% | +30% | −5,9% | 3,9 | 128 d | −4,5% | +18% | 0,10 |
> | 1680 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+331% · −54,9%** | +65% · −10,9% | +39% | −8,1% | 3,1 | 60 d | −9,5% | +30% | 0,28 |

> [!example]- Combinações 1681 a 1710 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1681 | Donchian ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+280% · −44,3%** | +63% · −12,1% | +37% | −8,4% | 3,7 | 70 d | −9,6% | +25% | 0,47 |
> | 1682 | MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+58% · −13,4%** | +27% · −3,7% | +22% | −5,7% | 1,8 | 76 d | −2,7% | +20% | −0,00 |
> | 1683 | Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+199% · −28,6%** | +49% · −6,9% | +29% | −7,5% | 3,3 | 83 d | −6,5% | +22% | 0,26 |
> | 1684 | GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+263% · −39,1%** | +52% · −6,9% | +32% | −6,1% | 3,3 | 76 d | −7,5% | +27% | 0,11 |
> | 1685 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+298% · −60,5%** | +64% · −13,8% | +38% | −9,3% | 4,1 | 70 d | −10,5% | +21% | 0,47 |
> | 1686 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+288% · −42,0%** | +55% · −8,0% | +31% | −5,9% | 3,3 | 97 d | −5,5% | +24% | 0,25 |
> | 1687 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+255% · −34,2%** | +49% · −6,0% | +32% | −3,8% | 3,4 | 122 d | −4,0% | +21% | 0,00 |
> | 1688 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+209% · −58,4%** | +48% · −13,4% | +33% | −6,9% | 3,8 | 78 d | −8,3% | +15% | 0,28 |
> | 1689 | Rompe 200 ·ROM + Bollinger ·TEN | **+62% · −12,7%** | +36% · −5,4% | +21% | −4,4% | 2,9 | 96 d | −4,6% | +17% | 0,04 |
> | 1690 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+94% · −27,3%** | +30% · −6,6% | +23% | −3,2% | 2,8 | 89 d | −5,0% | +20% | 0,04 |
> | 1691 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+240% · −49,2%** | +50% · −10,8% | +32% | −7,4% | 3,3 | 72 d | −8,3% | +22% | 0,24 |
> | 1692 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+314% · −38,5%** | +57% · −7,1% | +31% | −4,4% | 2,8 | 67 d | −7,6% | +24% | 0,21 |
> | 1693 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+192% · −38,8%** | +41% · −7,1% | +26% | −4,3% | 2,4 | 87 d | −3,2% | +18% | 0,11 |
> | 1694 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+250% · −40,9%** | +47% · −8,5% | +31% | −11,0% | 3,1 | 103 d | −4,6% | +22% | 0,36 |
> | 1695 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+252% · −28,5%** | +55% · −6,6% | +32% | −4,0% | 4,2 | 92 d | −7,3% | +22% | 0,07 |
> | 1696 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+129% · −34,1%** | +33% · −6,6% | +24% | −3,3% | 2,6 | 82 d | −5,2% | +18% | −0,05 |
> | 1697 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+164% · −30,0%** | +44% · −7,7% | +29% | −4,5% | 3,6 | 101 d | −5,9% | +20% | 0,03 |
> | 1698 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+133% · −18,2%** | +32% · −2,6% | +22% | −2,4% | 2,7 | 102 d | −3,0% | +17% | 0,06 |
> | 1699 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+261% · −50,6%** | +54% · −11,5% | +35% | −11,1% | 3,2 | 70 d | −8,4% | +25% | 0,45 |
> | 1700 | Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+218% · −39,8%** | +47% · −8,2% | +31% | −7,0% | 3,3 | 83 d | −6,6% | +25% | 0,14 |
> | 1701 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+165% · −29,3%** | +37% · −5,3% | +25% | −6,4% | 3,1 | 104 d | −4,5% | +18% | 0,15 |
> | 1702 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+202% · −49,6%** | +45% · −10,2% | +31% | −6,5% | 2,6 | 67 d | −7,0% | +24% | 0,18 |
> | 1703 | Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+181% · −42,6%** | +48% · −9,4% | +31% | −5,8% | 3,7 | 83 d | −7,4% | +17% | 0,15 |
> | 1704 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+185% · −31,0%** | +40% · −5,9% | +26% | −3,8% | 2,9 | 78 d | −6,4% | +19% | 0,05 |
> | 1705 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+311% · −53,1%** | +75% · −14,3% | +43% | −7,3% | 4,5 | 70 d | −11,5% | +23% | 0,47 |
> | 1706 | VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+227% · −48,2%** | +48% · −10,4% | +30% | −8,4% | 3,0 | 67 d | −8,1% | +18% | 0,33 |
> | 1707 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+237% · −25,9%** | +44% · −4,1% | +27% | −3,4% | 3,4 | 92 d | −6,1% | +22% | 0,05 |
> | 1708 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+184% · −31,8%** | +39% · −5,9% | +25% | −3,8% | 3,3 | 122 d | −3,7% | +17% | 0,02 |
> | 1709 | ADX ·ADX + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+218% · −54,6%** | +60% · −15,3% | +35% | −7,8% | 3,0 | 67 d | −8,3% | +23% | 0,27 |
> | 1710 | GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+217% · −44,6%** | +49% · −8,9% | +33% | −9,0% | 3,2 | 76 d | −7,5% | +29% | 0,29 |

> [!example]- Combinações 1711 a 1740 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1711 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+256% · −51,6%** | +58% · −11,8% | +35% | −12,9% | 3,6 | 70 d | −9,4% | +23% | 0,45 |
> | 1712 | ADX ·ADX + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+254% · −39,2%** | +60% · −9,8% | +35% | −7,2% | 2,5 | 74 d | −5,9% | +23% | 0,25 |
> | 1713 | Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+259% · −40,7%** | +61% · −9,9% | +38% | −7,8% | 4,4 | 90 d | −8,0% | +20% | 0,40 |
> | 1714 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+228% · −41,0%** | +49% · −8,0% | +32% | −6,9% | 2,2 | 77 d | −4,5% | +22% | 0,12 |
> | 1715 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+221% · −53,2%** | +48% · −11,0% | +33% | −7,5% | 3,5 | 83 d | −7,0% | +22% | 0,24 |
> | 1716 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+250% · −47,7%** | +53% · −10,3% | +33% | −7,6% | 3,0 | 67 d | −8,3% | +21% | 0,17 |
> | 1717 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+266% · −62,7%** | +58% · −15,1% | +36% | −6,0% | 4,0 | 74 d | −9,4% | +18% | 0,27 |
> | 1718 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+198% · −48,1%** | +46% · −10,5% | +29% | −8,2% | 3,9 | 102 d | −6,4% | +16% | 0,09 |
> | 1719 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+233% · −38,3%** | +48% · −7,3% | +29% | −5,8% | 3,5 | 75 d | −8,3% | +23% | 0,01 |
> | 1720 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+213% · −49,2%** | +44% · −9,6% | +29% | −4,3% | 3,3 | 74 d | −8,0% | +16% | 0,06 |
> | 1721 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+157% · −32,5%** | +36% · −6,1% | +26% | −7,4% | 3,0 | 107 d | −4,1% | +20% | 0,14 |
> | 1722 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+258% · −34,7%** | +50% · −6,6% | +28% | −3,5% | 3,2 | 105 d | −4,8% | +21% | 0,07 |
> | 1723 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+261% · −42,5%** | +53% · −9,0% | +32% | −9,2% | 3,2 | 71 d | −8,4% | +27% | 0,16 |
> | 1724 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+299% · −61,3%** | +64% · −13,2% | +39% | −10,0% | 3,4 | 74 d | −8,2% | +29% | 0,35 |
> | 1725 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+236% · −48,8%** | +48% · −9,4% | +32% | −6,3% | 3,6 | 122 d | −4,6% | +24% | 0,06 |
> | 1726 | Pullback ·PUL | **+32% · −9,1%** | +32% · −9,1% | +25% | −4,6% | 5,6 | 137 d | −5,5% | +11% | — |
> | 1727 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+202% · −50,4%** | +47% · −10,5% | +30% | −5,6% | 3,4 | 76 d | −8,0% | +18% | 0,06 |
> | 1728 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+233% · −43,1%** | +50% · −8,2% | +30% | −4,8% | 2,6 | 72 d | −6,7% | +24% | 0,15 |
> | 1729 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+213% · −40,2%** | +58% · −10,7% | +34% | −8,3% | 3,5 | 74 d | −8,6% | +27% | 0,16 |
> | 1730 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+168% · −23,3%** | +44% · −5,2% | +31% | −5,9% | 2,6 | 92 d | −4,0% | +21% | 0,00 |
> | 1731 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+186% · −31,9%** | +40% · −5,8% | +26% | −4,2% | 2,4 | 72 d | −6,1% | +19% | 0,01 |
> | 1732 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+351% · −53,2%** | +65% · −10,6% | +38% | −6,6% | 4,3 | 119 d | −6,2% | +26% | 0,20 |
> | 1733 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+350% · −50,5%** | +64% · −9,8% | +34% | −4,7% | 3,6 | 94 d | −6,5% | +22% | 0,17 |
> | 1734 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+218% · −35,5%** | +43% · −7,0% | +28% | −8,4% | 3,1 | 103 d | −4,9% | +22% | 0,27 |
> | 1735 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+176% · −45,8%** | +41% · −9,7% | +28% | −5,2% | 2,6 | 72 d | −6,6% | +19% | 0,12 |
> | 1736 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+156% · −27,7%** | +36% · −4,9% | +26% | −6,5% | 3,0 | 107 d | −4,3% | +17% | 0,05 |
> | 1737 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+168% · −37,1%** | +46% · −9,5% | +28% | −10,2% | 2,8 | 67 d | −7,8% | +17% | 0,18 |
> | 1738 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+227% · −43,4%** | +51% · −9,2% | +32% | −9,4% | 3,1 | 74 d | −7,5% | +29% | 0,16 |
> | 1739 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+389% · −63,7%** | +73% · −14,2% | +39% | −6,6% | 3,5 | 70 d | −9,4% | +24% | 0,36 |
> | 1740 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+212% · −52,4%** | +46% · −10,2% | +31% | −4,9% | 4,2 | 128 d | −5,3% | +16% | 0,14 |

> [!example]- Combinações 1741 a 1770 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1741 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+156% · −46,1%** | +46% · −12,2% | +31% | −8,3% | 3,2 | 75 d | −7,6% | +18% | 0,15 |
> | 1742 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+258% · −32,9%** | +49% · −5,9% | +31% | −3,7% | 3,4 | 122 d | −4,3% | +20% | 0,02 |
> | 1743 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+248% · −39,7%** | +51% · −8,1% | +33% | −8,0% | 3,0 | 91 d | −5,6% | +28% | 0,31 |
> | 1744 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+305% · −53,8%** | +60% · −12,2% | +36% | −6,3% | 3,9 | 83 d | −7,9% | +22% | 0,30 |
> | 1745 | GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+169% · −32,1%** | +60% · −11,1% | +37% | −10,7% | 3,3 | 67 d | −9,3% | +31% | 0,30 |
> | 1746 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+187% · −42,4%** | +45% · −9,1% | +30% | −10,1% | 2,9 | 75 d | −7,0% | +25% | 0,12 |
> | 1747 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+185% · −44,3%** | +45% · −9,6% | +30% | −11,4% | 2,7 | 67 d | −7,6% | +26% | 0,30 |
> | 1748 | 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+169% · −29,2%** | +45% · −6,6% | +32% | −6,9% | 2,9 | 92 d | −5,1% | +22% | 0,02 |
> | 1749 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+220% · −52,7%** | +59% · −14,0% | +35% | −6,8% | 3,2 | 76 d | −7,6% | +25% | 0,12 |
> | 1750 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+244% · −42,3%** | +48% · −8,1% | +29% | −5,1% | 1,8 | 67 d | −4,8% | +19% | 0,19 |
> | 1751 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+277% · −56,6%** | +59% · −11,5% | +37% | −7,4% | 3,4 | 76 d | −8,0% | +30% | 0,16 |
> | 1752 | IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+114% · −23,4%** | +43% · −7,1% | +30% | −7,7% | 2,5 | 84 d | −4,5% | +26% | 0,25 |
> | 1753 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+378% · −45,4%** | +65% · −9,2% | +36% | −6,3% | 3,6 | 97 d | −6,3% | +24% | 0,37 |
> | 1754 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+233% · −54,8%** | +52% · −12,0% | +34% | −9,0% | 2,8 | 65 d | −8,1% | +21% | 0,37 |
> | 1755 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+234% · −49,5%** | +48% · −9,6% | +32% | −7,6% | 3,3 | 122 d | −4,0% | +23% | 0,15 |
> | 1756 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+232% · −38,8%** | +48% · −7,8% | +29% | −10,0% | 3,2 | 83 d | −6,7% | +21% | 0,20 |
> | 1757 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+130% · −42,5%** | +35% · −8,8% | +25% | −11,5% | 2,4 | 73 d | −5,9% | +19% | 0,14 |
> | 1758 | MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+109% · −25,9%** | +34% · −5,9% | +27% | −8,3% | 2,8 | 94 d | −4,7% | +24% | 0,12 |
> | 1759 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+243% · −54,5%** | +53% · −10,5% | +35% | −8,6% | 2,2 | 65 d | −6,5% | +24% | 0,37 |
> | 1760 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+294% · −37,3%** | +53% · −6,6% | +30% | −3,6% | 3,4 | 106 d | −5,6% | +19% | 0,02 |
> | 1761 | Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+115% · −26,6%** | +44% · −8,3% | +32% | −8,8% | 2,9 | 92 d | −5,0% | +26% | −0,02 |
> | 1762 | VWAP ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+219% · −38,1%** | +45% · −7,2% | +31% | −8,2% | 3,0 | 91 d | −5,6% | +25% | 0,22 |
> | 1763 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+232% · −42,2%** | +48% · −8,4% | +30% | −7,4% | 3,0 | 73 d | −7,6% | +20% | 0,22 |
> | 1764 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+190% · −45,2%** | +43% · −8,8% | +29% | −5,2% | 3,5 | 89 d | −6,7% | +18% | 0,14 |
> | 1765 | GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+194% · −39,7%** | +65% · −14,0% | +40% | −6,8% | 3,1 | 67 d | −8,7% | +28% | 0,26 |
> | 1766 | Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+311% · −48,9%** | +71% · −11,9% | +38% | −6,3% | 4,2 | 70 d | −11,4% | +21% | 0,38 |
> | 1767 | ADX ·ADX + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+192% · −47,9%** | +52% · −12,1% | +34% | −9,8% | 2,8 | 80 d | −6,1% | +26% | 0,25 |
> | 1768 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL | **+128% · −38,7%** | +48% · −13,2% | +32% | −5,2% | 3,8 | 78 d | −8,5% | +15% | 0,10 |
> | 1769 | VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+154% · −49,5%** | +47% · −14,0% | +31% | −9,9% | 3,0 | 67 d | −8,3% | +16% | 0,35 |
> | 1770 | ADX ·ADX + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+247% · −46,5%** | +52% · −9,5% | +34% | −8,2% | 2,2 | 67 d | −6,1% | +25% | 0,21 |

> [!example]- Combinações 1771 a 1800 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1771 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+248% · −49,6%** | +58% · −11,2% | +35% | −11,7% | 3,3 | 70 d | −9,0% | +28% | 0,36 |
> | 1772 | GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+130% · −26,9%** | +47% · −8,6% | +26% | −6,0% | 2,8 | 72 d | −7,3% | +21% | 0,03 |
> | 1773 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+358% · −62,2%** | +72% · −13,5% | +40% | −6,3% | 3,2 | 65 d | −9,5% | +27% | 0,33 |
> | 1774 | Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+207% · −32,9%** | +53% · −8,1% | +33% | −7,1% | 3,2 | 91 d | −6,1% | +29% | 0,29 |
> | 1775 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+192% · −32,8%** | +43% · −6,4% | +28% | −6,4% | 3,5 | 120 d | −5,1% | +18% | 0,09 |
> | 1776 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+224% · −43,3%** | +51% · −9,1% | +32% | −9,4% | 3,2 | 74 d | −8,0% | +30% | 0,14 |
> | 1777 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+316% · −49,4%** | +64% · −10,4% | +39% | −7,7% | 3,3 | 71 d | −9,0% | +32% | 0,31 |
> | 1778 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+266% · −42,4%** | +60% · −11,2% | +38% | −5,1% | 4,7 | 89 d | −8,5% | +22% | 0,12 |
> | 1779 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+305% · −41,4%** | +55% · −8,5% | +31% | −6,8% | 3,2 | 83 d | −6,7% | +24% | 0,11 |
> | 1780 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+189% · −35,8%** | +50% · −9,1% | +33% | −8,0% | 3,1 | 83 d | −6,4% | +26% | 0,17 |
> | 1781 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+282% · −47,1%** | +57% · −9,2% | +34% | −5,5% | 2,5 | 67 d | −7,2% | +28% | 0,27 |
> | 1782 | Donchian ·TEN + IFR ·TEN + Tendência ·TEN | **+244% · −38,7%** | +76% · −12,6% | +45% | −9,0% | 4,3 | 70 d | −11,8% | +23% | 0,52 |
> | 1783 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+198% · −35,0%** | +49% · −8,4% | +30% | −4,4% | 3,6 | 78 d | −8,2% | +17% | 0,13 |
> | 1784 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+237% · −48,6%** | +61% · −12,6% | +36% | −5,3% | 4,0 | 70 d | −10,9% | +20% | 0,16 |
> | 1785 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+141% · −49,7%** | +42% · −13,1% | +29% | −4,8% | 3,4 | 76 d | −8,2% | +14% | 0,01 |
> | 1786 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+215% · −42,5%** | +54% · −11,6% | +32% | −11,3% | 3,0 | 73 d | −7,7% | +22% | 0,36 |
> | 1787 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+237% · −40,6%** | +61% · −9,7% | +35% | −7,6% | 4,2 | 83 d | −8,5% | +20% | 0,37 |
> | 1788 | VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+252% · −48,0%** | +51% · −10,1% | +31% | −7,0% | 3,6 | 83 d | −7,5% | +17% | 0,36 |
> | 1789 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+330% · −46,3%** | +61% · −8,7% | +36% | −5,6% | 3,8 | 120 d | −5,7% | +23% | 0,21 |
> | 1790 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+279% · −50,5%** | +55% · −11,4% | +34% | −9,7% | 3,2 | 70 d | −8,9% | +22% | 0,50 |
> | 1791 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN | **+191% · −34,2%** | +49% · −8,4% | +29% | −8,6% | 3,8 | 99 d | −6,8% | +16% | 0,20 |
> | 1792 | GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+266% · −39,8%** | +52% · −7,0% | +32% | −6,1% | 3,1 | 76 d | −7,6% | +26% | 0,14 |
> | 1793 | Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+326% · −49,3%** | +61% · −9,7% | +34% | −5,9% | 4,3 | 83 d | −8,6% | +19% | 0,31 |
> | 1794 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+247% · −54,2%** | +53% · −12,6% | +32% | −10,8% | 3,2 | 65 d | −9,4% | +20% | 0,20 |
> | 1795 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+176% · −55,7%** | +42% · −12,1% | +30% | −7,2% | 3,3 | 78 d | −7,7% | +16% | 0,21 |
> | 1796 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+263% · −42,6%** | +66% · −11,4% | +38% | −10,7% | 3,7 | 70 d | −10,3% | +27% | 0,45 |
> | 1797 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+227% · −46,5%** | +48% · −8,3% | +32% | −7,2% | 3,3 | 122 d | −4,2% | +25% | 0,02 |
> | 1798 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+147% · −32,9%** | +35% · −6,2% | +24% | −9,5% | 2,9 | 109 d | −4,0% | +18% | 0,19 |
> | 1799 | Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+129% · −20,0%** | +37% · −4,4% | +25% | −4,6% | 3,0 | 98 d | −5,3% | +22% | −0,02 |
> | 1800 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+192% · −33,8%** | +64% · −10,7% | +38% | −6,0% | 2,2 | 65 d | −6,6% | +23% | 0,25 |

> [!example]- Combinações 1801 a 1830 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1801 | MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+154% · −28,6%** | +35% · −4,8% | +25% | −6,9% | 2,3 | 87 d | −3,8% | +17% | 0,10 |
> | 1802 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+246% · −40,3%** | +51% · −7,6% | +33% | −6,2% | 2,8 | 72 d | −7,5% | +25% | 0,14 |
> | 1803 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+217% · −33,4%** | +43% · −6,4% | +28% | −7,5% | 3,2 | 107 d | −5,0% | +20% | 0,15 |
> | 1804 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+232% · −44,3%** | +47% · −9,4% | +29% | −10,3% | 2,5 | 72 d | −6,5% | +21% | 0,18 |
> | 1805 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+142% · −27,7%** | +40% · −6,5% | +28% | −8,5% | 3,1 | 107 d | −4,8% | +19% | 0,05 |
> | 1806 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+236% · −46,4%** | +47% · −8,7% | +30% | −4,8% | 2,6 | 67 d | −7,4% | +20% | 0,15 |
> | 1807 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+225% · −34,3%** | +54% · −8,3% | +31% | −4,2% | 2,6 | 107 d | −3,2% | +19% | 0,12 |
> | 1808 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+263% · −42,1%** | +49% · −8,7% | +30% | −8,8% | 3,5 | 84 d | −7,2% | +20% | 0,19 |
> | 1809 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+201% · −27,3%** | +49% · −7,1% | +29% | −6,3% | 3,2 | 92 d | −6,0% | +23% | 0,16 |
> | 1810 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+83% · −17,6%** | +34% · −5,3% | +25% | −2,5% | 2,5 | 72 d | −6,5% | +20% | −0,06 |
> | 1811 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+283% · −51,2%** | +58% · −10,1% | +35% | −6,6% | 2,7 | 67 d | −7,7% | +26% | 0,25 |
> | 1812 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+208% · −40,0%** | +45% · −8,1% | +32% | −7,8% | 2,9 | 98 d | −5,1% | +23% | 0,28 |
> | 1813 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+230% · −41,0%** | +49% · −8,0% | +32% | −6,9% | 2,1 | 81 d | −4,0% | +21% | 0,14 |
> | 1814 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+215% · −49,0%** | +47% · −10,0% | +31% | −4,9% | 4,2 | 129 d | −5,3% | +17% | 0,15 |
> | 1815 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+200% · −33,4%** | +42% · −6,2% | +28% | −6,7% | 2,7 | 72 d | −7,2% | +24% | 0,11 |
> | 1816 | Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+243% · −36,1%** | +48% · −7,1% | +30% | −8,2% | 3,0 | 83 d | −6,2% | +27% | 0,24 |
> | 1817 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+183% · −49,3%** | +50% · −12,8% | +34% | −6,7% | 3,7 | 83 d | −7,9% | +18% | 0,17 |
> | 1818 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+140% · −39,8%** | +43% · −10,4% | +29% | −13,5% | 2,9 | 78 d | −6,8% | +20% | 0,19 |
> | 1819 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+267% · −47,4%** | +51% · −8,8% | +32% | −5,8% | 3,5 | 78 d | −8,2% | +20% | 0,19 |
> | 1820 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+194% · −47,2%** | +44% · −10,2% | +30% | −9,0% | 2,7 | 78 d | −6,3% | +18% | 0,18 |
> | 1821 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+152% · −27,8%** | +42% · −6,2% | +31% | −7,2% | 2,3 | 83 d | −4,3% | +24% | 0,09 |
> | 1822 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+367% · −48,9%** | +64% · −9,9% | +36% | −5,5% | 2,7 | 67 d | −7,7% | +29% | 0,31 |
> | 1823 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+348% · −54,7%** | +67% · −11,5% | +38% | −4,9% | 4,5 | 120 d | −6,6% | +24% | 0,22 |
> | 1824 | MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+139% · −25,7%** | +48% · −8,2% | +30% | −10,3% | 2,2 | 77 d | −4,8% | +16% | 0,35 |
> | 1825 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+211% · −43,3%** | +54% · −11,8% | +35% | −7,5% | 3,7 | 81 d | −8,2% | +24% | 0,27 |
> | 1826 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+162% · −37,7%** | +36% · −7,7% | +25% | −8,7% | 2,8 | 105 d | −4,2% | +18% | 0,17 |
> | 1827 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+216% · −50,1%** | +47% · −11,2% | +31% | −8,9% | 2,6 | 73 d | −6,8% | +23% | 0,20 |
> | 1828 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+225% · −39,1%** | +47% · −7,4% | +27% | −3,6% | 2,5 | 67 d | −7,0% | +23% | 0,07 |
> | 1829 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+290% · −49,3%** | +70% · −13,6% | +40% | −7,1% | 3,8 | 70 d | −10,7% | +25% | 0,34 |
> | 1830 | Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+234% · −44,8%** | +57% · −12,1% | +35% | −6,6% | 4,0 | 83 d | −8,4% | +22% | 0,28 |

> [!example]- Combinações 1831 a 1860 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1831 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+176% · −35,6%** | +41% · −7,0% | +28% | −7,5% | 2,5 | 83 d | −5,2% | +25% | 0,12 |
> | 1832 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+201% · −34,1%** | +44% · −6,8% | +29% | −5,0% | 2,1 | 81 d | −4,0% | +19% | 0,03 |
> | 1833 | GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+140% · −28,9%** | +41% · −6,7% | +28% | −6,6% | 3,1 | 81 d | −7,0% | +20% | −0,01 |
> | 1834 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+168% · −32,4%** | +44% · −7,5% | +27% | −4,9% | 3,2 | 122 d | −4,1% | +18% | 0,02 |
> | 1835 | Pôr do sol ·POR + Pullback ·PUL | **+40% · −8,6%** | +26% · −3,7% | +21% | −3,0% | 3,7 | 160 d | −3,7% | +16% | −0,07 |
> | 1836 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+254% · −45,0%** | +50% · −9,0% | +31% | −5,8% | 3,5 | 81 d | −7,9% | +18% | 0,25 |
> | 1837 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+186% · −47,7%** | +50% · −12,2% | +34% | −6,8% | 3,7 | 80 d | −8,4% | +19% | 0,15 |
> | 1838 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+268% · −43,2%** | +56% · −8,4% | +36% | −9,1% | 2,8 | 67 d | −8,0% | +26% | 0,30 |
> | 1839 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+235% · −55,7%** | +54% · −12,0% | +33% | −8,2% | 3,7 | 75 d | −9,2% | +19% | 0,25 |
> | 1840 | Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+160% · −33,2%** | +45% · −8,0% | +29% | −6,6% | 3,0 | 83 d | −6,4% | +24% | 0,18 |
> | 1841 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+205% · −36,1%** | +44% · −7,1% | +30% | −6,1% | 2,9 | 91 d | −5,7% | +23% | 0,07 |
> | 1842 | ADX ·ADX + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+290% · −53,5%** | +69% · −13,8% | +38% | −7,3% | 3,0 | 65 d | −9,1% | +26% | 0,35 |
> | 1843 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+265% · −41,0%** | +50% · −8,0% | +31% | −7,6% | 2,7 | 72 d | −7,2% | +24% | 0,12 |
> | 1844 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+96% · −31,4%** | +28% · −5,8% | +23% | −8,5% | 2,8 | 120 d | −2,9% | +17% | 0,08 |
> | 1845 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+239% · −42,0%** | +47% · −8,9% | +29% | −9,4% | 2,4 | 72 d | −6,4% | +22% | 0,25 |
> | 1846 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+234% · −41,3%** | +49% · −7,9% | +30% | −4,5% | 2,7 | 77 d | −6,4% | +25% | 0,02 |
> | 1847 | GPS médias ·TEN + Tendência ·TEN | **+137% · −37,9%** | +72% · −19,5% | +43% | −9,3% | 3,9 | 67 d | −11,6% | +22% | 0,38 |
> | 1848 | VWAP ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+230% · −38,0%** | +55% · −9,6% | +35% | −8,0% | 3,7 | 100 d | −6,6% | +22% | 0,42 |
> | 1849 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+234% · −38,8%** | +47% · −7,1% | +31% | −5,6% | 3,0 | 122 d | −3,4% | +23% | 0,15 |
> | 1850 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+169% · −32,8%** | +46% · −7,8% | +32% | −7,1% | 3,2 | 98 d | −5,8% | +21% | 0,20 |
> | 1851 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+267% · −53,6%** | +53% · −12,3% | +34% | −7,1% | 4,1 | 87 d | −8,2% | +20% | 0,24 |
> | 1852 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+205% · −42,2%** | +44% · −7,3% | +29% | −5,6% | 3,4 | 122 d | −4,7% | +20% | 0,05 |
> | 1853 | 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+236% · −34,7%** | +55% · −8,4% | +35% | −7,8% | 2,9 | 92 d | −5,4% | +22% | 0,27 |
> | 1854 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+227% · −51,7%** | +49% · −11,2% | +31% | −4,9% | 4,0 | 91 d | −7,9% | +14% | 0,25 |
> | 1855 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+217% · −48,4%** | +48% · −9,0% | +32% | −7,3% | 2,2 | 67 d | −6,4% | +23% | 0,28 |
> | 1856 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+291% · −47,0%** | +62% · −10,2% | +37% | −10,4% | 3,7 | 80 d | −8,5% | +33% | 0,37 |
> | 1857 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+251% · −43,4%** | +52% · −8,5% | +34% | −7,0% | 2,2 | 67 d | −6,3% | +24% | 0,14 |
> | 1858 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+115% · −34,6%** | +31% · −6,3% | +24% | −4,4% | 2,8 | 91 d | −5,4% | +17% | −0,03 |
> | 1859 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+267% · −38,2%** | +53% · −6,8% | +31% | −4,3% | 3,6 | 122 d | −5,1% | +22% | 0,12 |
> | 1860 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+156% · −34,1%** | +38% · −6,6% | +27% | −7,7% | 2,5 | 76 d | −6,1% | +20% | 0,02 |

> [!example]- Combinações 1861 a 1890 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1861 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+270% · −42,5%** | +54% · −8,3% | +31% | −7,4% | 3,0 | 74 d | −7,9% | +28% | 0,09 |
> | 1862 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+139% · −31,8%** | +35% · −5,9% | +26% | −8,8% | 2,7 | 98 d | −4,6% | +19% | 0,18 |
> | 1863 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+143% · −32,4%** | +40% · −8,0% | +29% | −9,6% | 2,9 | 107 d | −4,6% | +22% | 0,27 |
> | 1864 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+302% · −63,6%** | +65% · −15,2% | +37% | −7,0% | 3,7 | 78 d | −8,7% | +22% | 0,32 |
> | 1865 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+161% · −30,8%** | +36% · −5,6% | +25% | −7,2% | 2,8 | 106 d | −4,4% | +18% | 0,06 |
> | 1866 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+205% · −40,0%** | +43% · −7,4% | +26% | −4,1% | 1,9 | 75 d | −4,4% | +20% | 0,11 |
> | 1867 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+256% · −53,5%** | +53% · −9,9% | +35% | −8,9% | 3,1 | 122 d | −4,0% | +27% | 0,16 |
> | 1868 | GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+165% · −34,5%** | +47% · −8,6% | +32% | −9,8% | 3,0 | 76 d | −7,7% | +25% | 0,12 |
> | 1869 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+200% · −43,1%** | +53% · −11,8% | +34% | −12,5% | 2,6 | 67 d | −7,6% | +25% | 0,32 |
> | 1870 | GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+291% · −43,8%** | +57% · −8,9% | +35% | −8,5% | 3,1 | 74 d | −8,1% | +28% | 0,33 |
> | 1871 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+186% · −55,5%** | +43% · −10,9% | +29% | −6,2% | 3,2 | 83 d | −7,1% | +16% | 0,21 |
> | 1872 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+263% · −36,6%** | +61% · −8,3% | +33% | −5,7% | 4,3 | 94 d | −8,1% | +19% | 0,12 |
> | 1873 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+233% · −57,3%** | +54% · −12,4% | +33% | −8,2% | 3,5 | 70 d | −10,0% | +18% | 0,23 |
> | 1874 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+206% · −37,2%** | +43% · −6,5% | +26% | −3,1% | 1,8 | 75 d | −4,4% | +18% | 0,09 |
> | 1875 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Bollinger ·TEN | **+327% · −40,5%** | +72% · −10,5% | +38% | −5,4% | 3,8 | 97 d | −7,0% | +24% | 0,32 |
> | 1876 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+205% · −40,2%** | +45% · −7,9% | +32% | −7,9% | 2,8 | 92 d | −5,5% | +24% | 0,20 |
> | 1877 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+161% · −34,6%** | +45% · −8,8% | +30% | −9,6% | 2,4 | 72 d | −6,4% | +22% | 0,06 |
> | 1878 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+212% · −30,2%** | +53% · −8,0% | +33% | −6,5% | 3,4 | 102 d | −6,2% | +24% | 0,20 |
> | 1879 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+310% · −55,7%** | +62% · −11,0% | +38% | −7,6% | 2,7 | 67 d | −8,0% | +31% | 0,32 |
> | 1880 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+158% · −37,8%** | +37% · −7,7% | +24% | −8,0% | 2,4 | 75 d | −6,0% | +19% | 0,08 |
> | 1881 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+311% · −48,8%** | +61% · −9,6% | +37% | −7,7% | 2,5 | 67 d | −7,4% | +30% | 0,32 |
> | 1882 | Donchian ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+282% · −41,4%** | +68% · −10,6% | +41% | −9,5% | 4,0 | 80 d | −9,4% | +32% | 0,39 |
> | 1883 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+123% · −35,2%** | +37% · −8,7% | +28% | −5,1% | 3,3 | 120 d | −5,0% | +16% | 0,09 |
> | 1884 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+168% · −36,9%** | +48% · −9,4% | +28% | −6,3% | 3,8 | 87 d | −7,9% | +17% | 0,10 |
> | 1885 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+136% · −30,5%** | +39% · −7,3% | +25% | −3,2% | 3,3 | 106 d | −5,7% | +15% | 0,04 |
> | 1886 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+220% · −42,4%** | +58% · −10,9% | +34% | −4,5% | 3,0 | 80 d | −7,1% | +26% | 0,13 |
> | 1887 | IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+215% · −33,3%** | +51% · −8,0% | +33% | −8,2% | 2,8 | 101 d | −4,9% | +24% | 0,31 |
> | 1888 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+239% · −47,6%** | +48% · −8,8% | +32% | −6,4% | 3,4 | 122 d | −5,0% | +24% | 0,06 |
> | 1889 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+175% · −33,3%** | +40% · −6,2% | +27% | −4,9% | 2,8 | 91 d | −5,7% | +23% | 0,07 |
> | 1890 | Donchian ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+322% · −45,4%** | +59% · −9,5% | +36% | −8,9% | 3,6 | 83 d | −7,9% | +31% | 0,38 |

> [!example]- Combinações 1891 a 1920 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1891 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+235% · −36,6%** | +47% · −6,4% | +31% | −4,4% | 3,1 | 122 d | −4,0% | +21% | 0,06 |
> | 1892 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN | **+223% · −47,9%** | +62% · −12,5% | +36% | −12,3% | 3,7 | 70 d | −10,9% | +20% | 0,43 |
> | 1893 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+273% · −40,0%** | +53% · −7,9% | +34% | −6,3% | 3,3 | 81 d | −7,7% | +30% | 0,11 |
> | 1894 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+234% · −38,5%** | +46% · −7,7% | +28% | −9,2% | 2,7 | 72 d | −7,4% | +19% | 0,20 |
> | 1895 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+213% · −39,7%** | +48% · −8,1% | +31% | −8,6% | 3,2 | 102 d | −5,6% | +20% | 0,18 |
> | 1896 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+340% · −65,2%** | +68% · −14,9% | +39% | −5,9% | 4,4 | 120 d | −6,8% | +22% | 0,22 |
> | 1897 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+167% · −29,2%** | +37% · −5,3% | +25% | −6,4% | 2,9 | 106 d | −4,8% | +19% | 0,14 |
> | 1898 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+198% · −54,3%** | +47% · −11,9% | +30% | −6,5% | 3,3 | 76 d | −8,5% | +15% | 0,25 |
> | 1899 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+181% · −35,1%** | +47% · −8,8% | +30% | −11,3% | 3,1 | 107 d | −5,3% | +20% | 0,43 |
> | 1900 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+184% · −39,3%** | +40% · −7,9% | +26% | −5,7% | 2,4 | 72 d | −6,6% | +17% | 0,12 |
> | 1901 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+212% · −55,6%** | +48% · −13,2% | +31% | −9,8% | 2,6 | 72 d | −7,2% | +21% | 0,31 |
> | 1902 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+158% · −37,5%** | +46% · −9,8% | +29% | −10,2% | 3,2 | 95 d | −6,3% | +21% | 0,13 |
> | 1903 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+296% · −42,3%** | +58% · −8,3% | +34% | −5,5% | 3,4 | 119 d | −5,5% | +22% | 0,20 |
> | 1904 | BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+209% · −51,4%** | +44% · −10,4% | +29% | −5,5% | 3,2 | 74 d | −8,6% | +14% | 0,19 |
> | 1905 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+311% · −47,2%** | +57% · −9,7% | +32% | −4,9% | 2,6 | 72 d | −7,2% | +26% | 0,15 |
> | 1906 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+202% · −41,3%** | +47% · −8,8% | +29% | −7,9% | 3,1 | 79 d | −7,4% | +26% | 0,11 |
> | 1907 | VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+126% · −38,4%** | +39% · −10,1% | +29% | −10,4% | 2,3 | 73 d | −6,0% | +20% | 0,38 |
> | 1908 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+294% · −56,7%** | +57% · −12,1% | +35% | −6,3% | 4,3 | 128 d | −6,0% | +19% | 0,19 |
> | 1909 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+154% · −39,6%** | +38% · −8,0% | +27% | −10,5% | 3,2 | 118 d | −5,1% | +20% | 0,08 |
> | 1910 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+196% · −38,3%** | +41% · −7,6% | +28% | −10,9% | 2,7 | 107 d | −3,9% | +20% | 0,21 |
> | 1911 | Donchian ·TEN + Bollinger ·TEN + Tendência ·TEN | **+233% · −38,5%** | +71% · −13,0% | +39% | −7,6% | 3,9 | 70 d | −11,5% | +21% | 0,41 |
> | 1912 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+119% · −14,7%** | +34% · −2,6% | +23% | −2,3% | 2,5 | 102 d | −3,4% | +16% | 0,07 |
> | 1913 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+319% · −44,9%** | +61% · −8,5% | +37% | −5,7% | 3,8 | 122 d | −5,7% | +24% | 0,17 |
> | 1914 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+187% · −38,1%** | +50% · −10,0% | +34% | −10,4% | 2,5 | 72 d | −7,0% | +25% | 0,29 |
> | 1915 | GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+182% · −38,1%** | +51% · −8,9% | +33% | −7,1% | 3,3 | 76 d | −8,5% | +24% | 0,05 |
> | 1916 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+216% · −45,9%** | +58% · −12,3% | +34% | −5,8% | 3,0 | 76 d | −7,6% | +25% | 0,32 |
> | 1917 | 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+83% · −27,6%** | +34% · −9,2% | +25% | −4,7% | 2,9 | 89 d | −6,0% | +19% | 0,10 |
> | 1918 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+142% · −26,9%** | +41% · −6,7% | +27% | −6,2% | 3,1 | 109 d | −5,3% | +21% | 0,10 |
> | 1919 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+202% · −45,1%** | +45% · −9,5% | +32% | −9,5% | 2,9 | 94 d | −5,7% | +26% | 0,20 |
> | 1920 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+232% · −47,6%** | +49% · −9,7% | +31% | −4,1% | 4,0 | 99 d | −7,4% | +17% | 0,07 |

> [!example]- Combinações 1921 a 1950 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1921 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+169% · −39,9%** | +47% · −10,2% | +33% | −12,4% | 2,3 | 73 d | −6,2% | +26% | 0,43 |
> | 1922 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+200% · −32,5%** | +43% · −6,3% | +28% | −4,4% | 3,0 | 122 d | −3,9% | +21% | 0,07 |
> | 1923 | ADX ·ADX + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+185% · −37,5%** | +51% · −9,2% | +33% | −7,5% | 2,1 | 76 d | −5,2% | +24% | 0,21 |
> | 1924 | Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+200% · −26,5%** | +50% · −6,6% | +29% | −5,9% | 3,0 | 91 d | −6,3% | +23% | 0,06 |
> | 1925 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+236% · −52,5%** | +51% · −12,0% | +34% | −8,2% | 3,9 | 120 d | −6,3% | +19% | 0,33 |
> | 1926 | GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+241% · −45,3%** | +51% · −9,6% | +33% | −7,6% | 2,8 | 72 d | −7,9% | +26% | 0,25 |
> | 1927 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+223% · −51,2%** | +59% · −13,5% | +35% | −6,3% | 3,1 | 77 d | −7,8% | +26% | 0,12 |
> | 1928 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+156% · −39,8%** | +37% · −8,3% | +24% | −8,9% | 2,3 | 72 d | −6,5% | +17% | 0,14 |
> | 1929 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+235% · −45,3%** | +50% · −9,9% | +29% | −9,6% | 3,0 | 70 d | −8,9% | +18% | 0,18 |
> | 1930 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+260% · −40,0%** | +50% · −6,9% | +33% | −4,7% | 3,6 | 122 d | −5,5% | +24% | 0,03 |
> | 1931 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN | **+144% · −37,5%** | +54% · −13,3% | +34% | −13,8% | 3,0 | 74 d | −8,1% | +21% | 0,39 |
> | 1932 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+282% · −40,2%** | +55% · −7,6% | +31% | −4,7% | 2,9 | 97 d | −5,4% | +22% | 0,09 |
> | 1933 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+259% · −41,4%** | +52% · −8,1% | +34% | −7,0% | 3,0 | 121 d | −4,4% | +23% | 0,15 |
> | 1934 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+283% · −50,2%** | +55% · −11,1% | +33% | −9,9% | 2,6 | 67 d | −7,8% | +23% | 0,36 |
> | 1935 | MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+163% · −25,3%** | +43% · −6,0% | +29% | −7,6% | 3,0 | 94 d | −6,0% | +23% | 0,11 |
> | 1936 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+266% · −45,5%** | +53% · −9,1% | +32% | −7,9% | 2,8 | 107 d | −4,5% | +19% | 0,39 |
> | 1937 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN | **+224% · −38,4%** | +75% · −13,6% | +41% | −9,1% | 4,0 | 70 d | −12,5% | +24% | 0,45 |
> | 1938 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+179% · −38,9%** | +41% · −7,1% | +27% | −5,6% | 3,0 | 122 d | −4,0% | +21% | 0,05 |
> | 1939 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+211% · −39,6%** | +47% · −8,0% | +31% | −8,7% | 3,0 | 88 d | −6,5% | +21% | 0,15 |
> | 1940 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+241% · −37,3%** | +48% · −7,3% | +31% | −6,3% | 2,9 | 74 d | −7,9% | +25% | 0,15 |
> | 1941 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+268% · −33,4%** | +49% · −5,7% | +30% | −6,1% | 2,9 | 82 d | −6,7% | +24% | 0,08 |
> | 1942 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+216% · −50,1%** | +49% · −10,1% | +33% | −7,6% | 3,1 | 80 d | −7,6% | +26% | 0,15 |
> | 1943 | GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+262% · −41,5%** | +52% · −7,9% | +32% | −7,3% | 3,1 | 76 d | −8,0% | +27% | 0,24 |
> | 1944 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+222% · −41,2%** | +47% · −8,2% | +27% | −4,2% | 2,5 | 67 d | −7,5% | +22% | 0,12 |
> | 1945 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+209% · −33,2%** | +53% · −8,5% | +33% | −7,7% | 3,2 | 91 d | −6,7% | +24% | 0,37 |
> | 1946 | GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+133% · −27,9%** | +47% · −8,8% | +26% | −6,0% | 2,6 | 72 d | −7,5% | +23% | −0,00 |
> | 1947 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+189% · −37,1%** | +43% · −7,6% | +28% | −7,3% | 3,4 | 120 d | −5,5% | +17% | 0,18 |
> | 1948 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+186% · −34,1%** | +40% · −5,9% | +25% | −3,7% | 2,8 | 122 d | −3,1% | +19% | 0,02 |
> | 1949 | Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+170% · −32,2%** | +56% · −10,6% | +35% | −9,9% | 3,0 | 90 d | −6,4% | +26% | 0,28 |
> | 1950 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+348% · −54,6%** | +64% · −11,1% | +38% | −6,6% | 4,3 | 119 d | −7,0% | +25% | 0,21 |

> [!example]- Combinações 1951 a 1980 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1951 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+183% · −32,2%** | +40% · −6,2% | +26% | −4,7% | 2,8 | 80 d | −6,9% | +17% | 0,14 |
> | 1952 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+298% · −44,8%** | +58% · −9,6% | +37% | −8,8% | 3,4 | 83 d | −7,8% | +32% | 0,35 |
> | 1953 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+249% · −49,3%** | +58% · −9,7% | +33% | −6,1% | 2,7 | 65 d | −8,9% | +28% | 0,10 |
> | 1954 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+208% · −39,3%** | +43% · −7,2% | +26% | −3,8% | 1,8 | 75 d | −4,5% | +19% | 0,11 |
> | 1955 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+133% · −34,6%** | +39% · −8,6% | +26% | −6,5% | 2,4 | 72 d | −6,8% | +22% | 0,05 |
> | 1956 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+220% · −33,3%** | +43% · −6,4% | +28% | −7,5% | 3,0 | 107 d | −5,2% | +19% | 0,18 |
> | 1957 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+215% · −35,3%** | +44% · −6,9% | +28% | −5,3% | 2,8 | 121 d | −3,7% | +20% | 0,02 |
> | 1958 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+230% · −46,0%** | +49% · −8,4% | +32% | −7,3% | 3,2 | 122 d | −4,7% | +24% | 0,04 |
> | 1959 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+210% · −36,9%** | +46% · −7,4% | +29% | −7,2% | 3,5 | 102 d | −6,6% | +23% | 0,07 |
> | 1960 | VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+152% · −29,3%** | +41% · −7,0% | +27% | −8,3% | 3,0 | 104 d | −5,4% | +19% | 0,28 |
> | 1961 | Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+123% · −31,0%** | +45% · −10,4% | +28% | −4,6% | 3,5 | 101 d | −6,7% | +13% | 0,19 |
> | 1962 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+209% · −44,4%** | +45% · −7,9% | +30% | −6,3% | 3,1 | 122 d | −4,3% | +23% | 0,10 |
> | 1963 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+367% · −51,9%** | +65% · −11,2% | +37% | −6,1% | 2,7 | 67 d | −8,3% | +29% | 0,31 |
> | 1964 | Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+271% · −46,9%** | +54% · −9,9% | +34% | −7,5% | 3,3 | 83 d | −7,7% | +29% | 0,27 |
> | 1965 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+200% · −40,1%** | +47% · −8,4% | +29% | −8,0% | 3,2 | 83 d | −7,3% | +25% | 0,10 |
> | 1966 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+217% · −38,2%** | +44% · −7,6% | +29% | −8,0% | 2,4 | 72 d | −6,9% | +22% | 0,14 |
> | 1967 | GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+229% · −38,1%** | +58% · −9,9% | +36% | −9,9% | 2,7 | 67 d | −8,3% | +26% | 0,26 |
> | 1968 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+219% · −48,5%** | +49% · −9,5% | +33% | −7,6% | 3,2 | 79 d | −8,0% | +27% | 0,16 |
> | 1969 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+207% · −33,3%** | +44% · −6,1% | +31% | −8,9% | 3,1 | 117 d | −5,2% | +22% | 0,16 |
> | 1970 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+172% · −29,2%** | +46% · −6,6% | +32% | −6,9% | 2,7 | 92 d | −5,5% | +22% | 0,13 |
> | 1971 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+301% · −53,7%** | +71% · −14,2% | +41% | −7,4% | 3,6 | 72 d | −10,6% | +28% | 0,30 |
> | 1972 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+302% · −55,9%** | +62% · −11,8% | +35% | −9,1% | 3,5 | 70 d | −10,7% | +19% | 0,43 |
> | 1973 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+239% · −33,5%** | +57% · −7,7% | +35% | −4,8% | 3,2 | 122 d | −4,9% | +22% | 0,07 |
> | 1974 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+273% · −47,9%** | +59% · −10,3% | +37% | −9,0% | 3,6 | 80 d | −8,9% | +28% | 0,42 |
> | 1975 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+292% · −42,2%** | +55% · −7,2% | +31% | −4,6% | 3,0 | 105 d | −5,4% | +21% | 0,17 |
> | 1976 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+147% · −49,0%** | +38% · −10,3% | +27% | −8,3% | 3,0 | 80 d | −7,4% | +13% | 0,24 |
> | 1977 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+240% · −44,7%** | +47% · −8,1% | +30% | −4,8% | 2,5 | 67 d | −7,8% | +21% | 0,17 |
> | 1978 | Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+198% · −29,0%** | +50% · −6,9% | +29% | −7,7% | 3,0 | 83 d | −7,0% | +27% | 0,18 |
> | 1979 | GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+320% · −46,3%** | +58% · −9,5% | +35% | −7,0% | 2,7 | 67 d | −8,5% | +26% | 0,27 |
> | 1980 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+293% · −43,1%** | +57% · −8,3% | +35% | −5,5% | 3,5 | 119 d | −6,0% | +23% | 0,21 |

> [!example]- Combinações 1981 a 2010 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 1981 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+322% · −66,9%** | +70% · −15,7% | +40% | −8,3% | 3,6 | 74 d | −10,1% | +27% | 0,41 |
> | 1982 | BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+262% · −49,9%** | +51% · −9,8% | +32% | −7,1% | 3,4 | 78 d | −8,7% | +18% | 0,32 |
> | 1983 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+253% · −42,3%** | +52% · −8,5% | +36% | −8,5% | 2,9 | 103 d | −5,4% | +27% | 0,32 |
> | 1984 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+275% · −43,8%** | +54% · −9,4% | +31% | −9,0% | 3,5 | 83 d | −8,2% | +22% | 0,28 |
> | 1985 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+265% · −52,7%** | +54% · −10,7% | +33% | −6,2% | 3,8 | 127 d | −5,7% | +22% | 0,13 |
> | 1986 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+251% · −38,2%** | +51% · −7,8% | +33% | −5,3% | 2,0 | 76 d | −5,1% | +22% | 0,12 |
> | 1987 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+156% · −38,0%** | +38% · −6,8% | +27% | −7,0% | 2,6 | 80 d | −6,4% | +20% | 0,13 |
> | 1988 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+206% · −51,3%** | +49% · −10,7% | +33% | −9,9% | 3,1 | 76 d | −8,4% | +25% | 0,23 |
> | 1989 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+209% · −41,9%** | +48% · −8,9% | +31% | −10,0% | 2,9 | 91 d | −6,1% | +23% | 0,32 |
> | 1990 | Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+256% · −41,7%** | +67% · −11,3% | +38% | −9,6% | 3,9 | 80 d | −9,7% | +32% | 0,34 |
> | 1991 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+287% · −57,7%** | +61% · −12,8% | +38% | −7,6% | 3,1 | 67 d | −9,6% | +23% | 0,35 |
> | 1992 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+327% · −47,9%** | +63% · −9,7% | +35% | −6,2% | 2,7 | 65 d | −8,9% | +29% | 0,28 |
> | 1993 | ADX ·ADX + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+195% · −42,0%** | +66% · −13,6% | +40% | −9,0% | 2,5 | 65 d | −8,2% | +30% | 0,24 |
> | 1994 | Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+122% · −20,9%** | +31% · −3,4% | +22% | −4,7% | 2,3 | 102 d | −3,2% | +16% | 0,03 |
> | 1995 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+188% · −57,4%** | +45% · −13,8% | +31% | −8,8% | 2,6 | 67 d | −8,2% | +17% | 0,23 |
> | 1996 | Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR | **+170% · −26,4%** | +57% · −9,2% | +34% | −5,3% | 3,7 | 102 d | −7,0% | +23% | 0,05 |
> | 1997 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+236% · −51,9%** | +52% · −11,6% | +34% | −12,6% | 2,6 | 73 d | −7,3% | +26% | 0,39 |
> | 1998 | ADX ·ADX + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+232% · −39,3%** | +59% · −9,7% | +37% | −6,8% | 1,8 | 64 d | −6,5% | +24% | 0,23 |
> | 1999 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+164% · −34,9%** | +45% · −8,8% | +29% | −9,8% | 2,3 | 72 d | −6,5% | +22% | 0,11 |
> | 2000 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+130% · −30,3%** | +34% · −5,9% | +24% | −6,7% | 2,5 | 81 d | −6,1% | +21% | 0,01 |
> | 2001 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+114% · −24,9%** | +35% · −5,5% | +23% | −2,9% | 2,8 | 103 d | −5,2% | +17% | 0,02 |
> | 2002 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+267% · −53,6%** | +52% · −10,4% | +32% | −6,4% | 3,3 | 122 d | −5,2% | +21% | 0,23 |
> | 2003 | 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+177% · −23,7%** | +45% · −5,4% | +29% | −6,9% | 3,0 | 99 d | −5,9% | +20% | 0,09 |
> | 2004 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+163% · −29,7%** | +36% · −5,4% | +25% | −7,3% | 2,7 | 106 d | −4,6% | +17% | 0,09 |
> | 2005 | Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+204% · −25,4%** | +63% · −7,8% | +34% | −6,7% | 3,3 | 73 d | −9,4% | +26% | 0,24 |
> | 2006 | BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+138% · −53,7%** | +42% · −14,3% | +29% | −6,3% | 3,3 | 76 d | −8,9% | +12% | 0,20 |
> | 2007 | Bollinger ·TEN | **+52% · −6,9%** | +52% · −6,9% | +26% | −3,6% | 2,6 | 70 d | −8,1% | +18% | — |
> | 2008 | Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+343% · −49,9%** | +65% · −9,7% | +37% | −7,2% | 3,5 | 74 d | −9,8% | +29% | 0,32 |
> | 2009 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+264% · −56,9%** | +54% · −11,6% | +33% | −8,8% | 2,7 | 100 d | −5,1% | +23% | 0,43 |
> | 2010 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+175% · −39,3%** | +46% · −9,6% | +28% | −6,1% | 2,3 | 87 d | −4,5% | +19% | 0,17 |

> [!example]- Combinações 2011 a 2040 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2011 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+210% · −39,5%** | +44% · −7,9% | +27% | −10,4% | 3,1 | 91 d | −6,6% | +19% | 0,25 |
> | 2012 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+243% · −46,4%** | +64% · −12,4% | +38% | −7,5% | 3,0 | 76 d | −8,0% | +30% | 0,39 |
> | 2013 | 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+106% · −15,1%** | +39% · −4,1% | +25% | −3,6% | 2,5 | 102 d | −4,0% | +15% | 0,05 |
> | 2014 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+170% · −34,6%** | +45% · −7,8% | +27% | −4,8% | 2,8 | 122 d | −3,4% | +20% | 0,09 |
> | 2015 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+245% · −43,5%** | +51% · −9,2% | +34% | −8,2% | 3,2 | 83 d | −7,6% | +30% | 0,21 |
> | 2016 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN | **+273% · −41,0%** | +62% · −9,2% | +33% | −4,6% | 3,4 | 105 d | −6,6% | +21% | 0,10 |
> | 2017 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+217% · −35,5%** | +45% · −6,9% | +28% | −5,3% | 2,9 | 122 d | −3,8% | +19% | 0,03 |
> | 2018 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+125% · −29,5%** | +38% · −7,0% | +28% | −10,2% | 2,9 | 120 d | −4,6% | +18% | 0,18 |
> | 2019 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+203% · −32,6%** | +43% · −6,1% | +28% | −6,8% | 2,6 | 72 d | −7,5% | +25% | 0,13 |
> | 2020 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+189% · −34,9%** | +48% · −8,4% | +28% | −6,6% | 2,4 | 72 d | −7,0% | +21% | 0,07 |
> | 2021 | IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+152% · −31,4%** | +43% · −7,4% | +31% | −8,3% | 2,4 | 106 d | −3,6% | +25% | 0,26 |
> | 2022 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+223% · −55,7%** | +51% · −12,3% | +33% | −8,9% | 3,3 | 76 d | −9,0% | +20% | 0,23 |
> | 2023 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+175% · −41,2%** | +40% · −7,8% | +27% | −5,7% | 1,6 | 67 d | −5,5% | +20% | 0,08 |
> | 2024 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+281% · −65,8%** | +56% · −15,8% | +33% | −6,2% | 3,1 | 78 d | −8,1% | +19% | 0,21 |
> | 2025 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+273% · −43,2%** | +54% · −8,3% | +31% | −7,4% | 2,9 | 74 d | −8,3% | +28% | 0,10 |
> | 2026 | ADX ·ADX + Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+239% · −37,2%** | +58% · −8,3% | +31% | −4,7% | 3,1 | 105 d | −5,9% | +22% | 0,19 |
> | 2027 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+368% · −54,4%** | +68% · −12,0% | +35% | −6,2% | 2,6 | 65 d | −8,7% | +28% | 0,30 |
> | 2028 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+254% · −42,9%** | +52% · −8,3% | +30% | −5,6% | 2,4 | 67 d | −7,8% | +26% | 0,18 |
> | 2029 | GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+138% · −33,4%** | +41% · −8,3% | +28% | −8,4% | 3,0 | 81 d | −7,5% | +24% | 0,17 |
> | 2030 | ADX ·ADX + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+220% · −43,9%** | +46% · −8,6% | +29% | −7,3% | 1,7 | 64 d | −6,4% | +20% | 0,19 |
> | 2031 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+208% · −44,9%** | +45% · −8,7% | +30% | −7,5% | 2,8 | 122 d | −3,8% | +25% | 0,13 |
> | 2032 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+231% · −34,7%** | +56% · −9,3% | +30% | −6,4% | 3,7 | 83 d | −8,8% | +20% | 0,09 |
> | 2033 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+238% · −42,7%** | +58% · −11,0% | +32% | −5,0% | 2,9 | 77 d | −7,8% | +23% | 0,14 |
> | 2034 | Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL | **+181% · −37,8%** | +63% · −12,5% | +35% | −6,5% | 4,5 | 102 d | −8,4% | +17% | 0,13 |
> | 2035 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+281% · −59,5%** | +61% · −14,3% | +36% | −10,5% | 3,1 | 70 d | −9,8% | +22% | 0,39 |
> | 2036 | Donchian ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+207% · −36,7%** | +54% · −9,5% | +35% | −7,6% | 3,4 | 89 d | −7,8% | +30% | 0,16 |
> | 2037 | VWAP ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+274% · −44,9%** | +53% · −9,3% | +34% | −8,6% | 3,1 | 100 d | −6,2% | +26% | 0,35 |
> | 2038 | GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+184% · −36,2%** | +51% · −8,7% | +33% | −7,1% | 3,2 | 76 d | −8,6% | +22% | 0,10 |
> | 2039 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+230% · −49,7%** | +50% · −9,7% | +33% | −8,9% | 2,6 | 106 d | −4,6% | +25% | 0,16 |
> | 2040 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+200% · −46,5%** | +46% · −9,9% | +29% | −8,4% | 3,6 | 110 d | −6,8% | +17% | 0,09 |

> [!example]- Combinações 2041 a 2070 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2041 | GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+110% · −30,5%** | +44% · −10,3% | +28% | −11,3% | 2,7 | 74 d | −7,7% | +23% | 0,23 |
> | 2042 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+144% · −27,7%** | +40% · −6,5% | +28% | −8,5% | 2,8 | 107 d | −5,2% | +18% | 0,12 |
> | 2043 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+225% · −41,1%** | +47% · −8,6% | +27% | −3,7% | 2,4 | 67 d | −7,6% | +23% | 0,09 |
> | 2044 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+188% · −45,4%** | +50% · −11,1% | +33% | −7,0% | 3,4 | 122 d | −5,5% | +20% | 0,12 |
> | 2045 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+258% · −53,4%** | +68% · −14,5% | +40% | −8,8% | 3,7 | 70 d | −12,2% | +25% | 0,49 |
> | 2046 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+324% · −60,7%** | +62% · −13,5% | +38% | −7,5% | 4,1 | 128 d | −6,3% | +25% | 0,23 |
> | 2047 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+236% · −50,9%** | +49% · −9,6% | +30% | −6,3% | 2,9 | 122 d | −4,3% | +21% | 0,22 |
> | 2048 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+166% · −30,0%** | +44% · −7,7% | +29% | −4,5% | 3,3 | 106 d | −6,3% | +21% | 0,02 |
> | 2049 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+202% · −31,0%** | +42% · −4,8% | +28% | −5,8% | 2,5 | 72 d | −7,5% | +22% | 0,07 |
> | 2050 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+230% · −30,7%** | +45% · −5,4% | +30% | −5,3% | 3,3 | 92 d | −7,3% | +24% | 0,02 |
> | 2051 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+228% · −34,5%** | +47% · −6,6% | +31% | −5,4% | 2,9 | 122 d | −4,4% | +21% | 0,02 |
> | 2052 | Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+168% · −28,8%** | +57% · −9,7% | +34% | −5,9% | 3,4 | 91 d | −7,7% | +19% | 0,36 |
> | 2053 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+134% · −28,5%** | +39% · −6,2% | +26% | −5,3% | 2,4 | 77 d | −6,3% | +21% | −0,02 |
> | 2054 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+87% · −30,8%** | +30% · −7,4% | +24% | −11,3% | 2,6 | 120 d | −3,3% | +17% | 0,17 |
> | 2055 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+253% · −53,2%** | +54% · −11,6% | +34% | −7,4% | 3,8 | 91 d | −8,5% | +19% | 0,27 |
> | 2056 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+114% · −39,8%** | +31% · −7,5% | +24% | −5,7% | 2,7 | 91 d | −5,9% | +15% | 0,05 |
> | 2057 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+186% · −43,3%** | +43% · −8,7% | +27% | −4,2% | 3,2 | 122 d | −5,1% | +19% | 0,07 |
> | 2058 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+250% · −51,7%** | +51% · −9,8% | +30% | −4,4% | 2,6 | 77 d | −7,1% | +22% | 0,19 |
> | 2059 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+173% · −47,4%** | +40% · −10,3% | +28% | −5,2% | 2,7 | 83 d | −6,6% | +18% | 0,11 |
> | 2060 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+236% · −51,5%** | +53% · −10,7% | +30% | −4,7% | 3,2 | 97 d | −6,7% | +21% | 0,13 |
> | 2061 | Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+155% · −23,3%** | +52% · −7,9% | +28% | −3,5% | 3,4 | 101 d | −6,8% | +21% | −0,01 |
> | 2062 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+207% · −48,9%** | +49% · −11,0% | +33% | −13,2% | 2,7 | 75 d | −7,7% | +27% | 0,35 |
> | 2063 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+217% · −43,5%** | +48% · −8,7% | +30% | −5,2% | 3,3 | 122 d | −5,4% | +25% | 0,04 |
> | 2064 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+254% · −48,5%** | +53% · −9,4% | +33% | −11,1% | 2,9 | 73 d | −8,6% | +23% | 0,44 |
> | 2065 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+374% · −59,0%** | +66% · −12,8% | +38% | −8,2% | 3,8 | 97 d | −7,9% | +27% | 0,40 |
> | 2066 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+263% · −45,5%** | +54% · −9,6% | +34% | −6,8% | 4,2 | 120 d | −7,2% | +20% | 0,27 |
> | 2067 | Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+154% · −23,2%** | +52% · −7,5% | +28% | −4,8% | 3,5 | 95 d | −7,5% | +17% | 0,16 |
> | 2068 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+200% · −51,1%** | +45% · −10,3% | +31% | −6,5% | 2,7 | 83 d | −6,6% | +23% | 0,16 |
> | 2069 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+222% · −36,0%** | +54% · −9,3% | +32% | −7,4% | 2,4 | 67 d | −8,0% | +23% | 0,26 |
> | 2070 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+271% · −55,0%** | +58% · −11,8% | +35% | −7,7% | 3,8 | 83 d | −9,1% | +22% | 0,38 |

> [!example]- Combinações 2071 a 2100 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2071 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+179% · −33,2%** | +41% · −6,3% | +28% | −6,2% | 2,4 | 91 d | −5,2% | +22% | 0,06 |
> | 2072 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+237% · −37,0%** | +56% · −9,2% | +35% | −5,0% | 3,8 | 89 d | −8,7% | +25% | 0,14 |
> | 2073 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+156% · −45,8%** | +45% · −12,8% | +29% | −12,0% | 2,4 | 72 d | −7,4% | +20% | 0,15 |
> | 2074 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+290% · −44,8%** | +58% · −8,7% | +35% | −6,7% | 3,2 | 119 d | −5,9% | +25% | 0,31 |
> | 2075 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+192% · −50,8%** | +42% · −11,7% | +28% | −9,1% | 2,8 | 72 d | −8,6% | +17% | 0,20 |
> | 2076 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+277% · −60,5%** | +57% · −13,6% | +35% | −5,2% | 3,9 | 92 d | −8,5% | +18% | 0,21 |
> | 2077 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+285% · −39,0%** | +55% · −7,8% | +31% | −4,7% | 2,8 | 97 d | −5,7% | +21% | 0,10 |
> | 2078 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+206% · −44,5%** | +48% · −8,9% | +30% | −5,1% | 2,7 | 77 d | −7,3% | +26% | 0,02 |
> | 2079 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+188% · −52,6%** | +44% · −10,7% | +29% | −6,2% | 3,5 | 120 d | −6,3% | +17% | 0,22 |
> | 2080 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+196% · −39,5%** | +41% · −8,1% | +27% | −3,6% | 3,3 | 92 d | −7,3% | +19% | 0,04 |
> | 2081 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+223% · −63,2%** | +50% · −14,3% | +32% | −4,6% | 4,0 | 91 d | −8,9% | +14% | 0,14 |
> | 2082 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+263% · −54,2%** | +54% · −11,3% | +33% | −6,2% | 3,9 | 127 d | −6,2% | +21% | 0,14 |
> | 2083 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+247% · −40,9%** | +62% · −9,9% | +35% | −5,7% | 3,4 | 119 d | −6,2% | +24% | 0,29 |
> | 2084 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+193% · −48,6%** | +46% · −9,7% | +31% | −10,1% | 3,1 | 95 d | −6,7% | +23% | 0,26 |
> | 2085 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+171% · −33,8%** | +38% · −6,4% | +25% | −3,5% | 2,4 | 72 d | −7,4% | +21% | 0,03 |
> | 2086 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+289% · −43,3%** | +54% · −7,0% | +31% | −4,8% | 3,0 | 105 d | −5,9% | +21% | 0,19 |
> | 2087 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+235% · −37,7%** | +56% · −9,4% | +35% | −5,0% | 4,0 | 98 d | −8,3% | +23% | 0,08 |
> | 2088 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+184% · −45,4%** | +42% · −9,8% | +27% | −11,7% | 2,3 | 73 d | −6,9% | +22% | 0,21 |
> | 2089 | Pôr do sol ·POR + Bollinger ·TEN | **+61% · −7,9%** | +35% · −3,1% | +21% | −1,2% | 2,5 | 104 d | −4,6% | +17% | −0,03 |
> | 2090 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+238% · −45,2%** | +50% · −9,9% | +28% | −9,8% | 2,9 | 70 d | −9,2% | +19% | 0,18 |
> | 2091 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+168% · −42,9%** | +41% · −8,9% | +28% | −9,4% | 2,1 | 72 d | −6,6% | +19% | 0,13 |
> | 2092 | ADX ·ADX + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+163% · −42,2%** | +46% · −10,0% | +30% | −7,0% | 3,0 | 122 d | −4,7% | +21% | 0,07 |
> | 2093 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+185% · −38,2%** | +41% · −7,3% | +30% | −9,5% | 2,2 | 82 d | −5,3% | +23% | 0,26 |
> | 2094 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+185% · −50,5%** | +44% · −10,6% | +28% | −4,9% | 2,5 | 80 d | −6,5% | +19% | 0,15 |
> | 2095 | GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+180% · −35,8%** | +49% · −8,5% | +32% | −8,9% | 2,6 | 72 d | −8,2% | +25% | 0,11 |
> | 2096 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+144% · −36,0%** | +42% · −9,0% | +29% | −9,1% | 2,3 | 72 d | −7,0% | +22% | 0,07 |
> | 2097 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+206% · −41,4%** | +43% · −7,3% | +29% | −5,6% | 3,6 | 131 d | −5,2% | +22% | 0,00 |
> | 2098 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+269% · −38,6%** | +51% · −7,9% | +31% | −4,9% | 3,2 | 122 d | −5,3% | +18% | 0,20 |
> | 2099 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+257% · −42,7%** | +52% · −8,1% | +30% | −5,6% | 2,4 | 67 d | −7,9% | +25% | 0,17 |
> | 2100 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+135% · −34,2%** | +40% · −8,3% | +26% | −6,5% | 2,3 | 72 d | −7,0% | +22% | 0,09 |

> [!example]- Combinações 2101 a 2130 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2101 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+242% · −45,2%** | +48% · −9,1% | +29% | −6,3% | 1,8 | 75 d | −5,2% | +20% | 0,23 |
> | 2102 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+174% · −42,2%** | +41% · −8,1% | +29% | −6,9% | 3,0 | 96 d | −6,5% | +22% | 0,19 |
> | 2103 | ADX ·ADX + VWAP ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+235% · −50,1%** | +49% · −9,8% | +30% | −7,6% | 2,7 | 112 d | −4,8% | +21% | 0,30 |
> | 2104 | ADX ·ADX + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+246% · −54,9%** | +56% · −11,7% | +35% | −8,4% | 2,7 | 67 d | −8,9% | +30% | 0,24 |
> | 2105 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+220% · −50,7%** | +56% · −12,9% | +36% | −8,4% | 3,5 | 122 d | −5,9% | +26% | 0,14 |
> | 2106 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+266% · −53,4%** | +57% · −11,3% | +32% | −4,7% | 3,7 | 120 d | −6,8% | +20% | 0,19 |
> | 2107 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+188% · −38,6%** | +53% · −10,2% | +32% | −8,5% | 3,0 | 74 d | −9,1% | +27% | 0,04 |
> | 2108 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+248% · −60,7%** | +59% · −13,9% | +36% | −11,7% | 3,3 | 70 d | −11,0% | +22% | 0,50 |
> | 2109 | Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+261% · −51,8%** | +58% · −10,9% | +35% | −7,7% | 3,5 | 83 d | −8,8% | +26% | 0,32 |
> | 2110 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+214% · −38,9%** | +45% · −8,0% | +29% | −8,6% | 2,5 | 76 d | −7,2% | +21% | 0,12 |
> | 2111 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+152% · −29,6%** | +37% · −5,4% | +25% | −5,2% | 2,4 | 91 d | −5,1% | +22% | 0,03 |
> | 2112 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+221% · −43,6%** | +47% · −9,1% | +31% | −11,4% | 2,8 | 73 d | −8,6% | +21% | 0,22 |
> | 2113 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+244% · −57,6%** | +65% · −15,8% | +39% | −9,3% | 3,0 | 76 d | −8,7% | +30% | 0,38 |
> | 2114 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+219% · −54,5%** | +49% · −11,9% | +33% | −8,8% | 3,1 | 83 d | −7,9% | +20% | 0,37 |
> | 2115 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+156% · −37,8%** | +38% · −7,3% | +29% | −7,2% | 3,0 | 125 d | −4,7% | +23% | 0,08 |
> | 2116 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+186% · −32,5%** | +41% · −6,3% | +26% | −6,1% | 2,5 | 81 d | −6,7% | +20% | 0,01 |
> | 2117 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+306% · −64,8%** | +70% · −14,6% | +40% | −8,3% | 3,2 | 73 d | −9,8% | +32% | 0,32 |
> | 2118 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+314% · −51,2%** | +64% · −10,4% | +36% | −4,5% | 3,8 | 122 d | −6,6% | +26% | 0,17 |
> | 2119 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+213% · −37,5%** | +45% · −7,5% | +29% | −7,0% | 2,7 | 78 d | −7,5% | +22% | 0,20 |
> | 2120 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+210% · −30,4%** | +53% · −8,0% | +33% | −6,6% | 3,5 | 102 d | −7,2% | +25% | 0,21 |
> | 2121 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+152% · −24,6%** | +35% · −4,1% | +25% | −5,4% | 2,1 | 94 d | −4,0% | +16% | 0,08 |
> | 2122 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+122% · −17,9%** | +35% · −3,4% | +23% | −3,5% | 2,3 | 102 d | −4,0% | +17% | 0,09 |
> | 2123 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+217% · −38,4%** | +47% · −8,0% | +31% | −9,7% | 3,3 | 120 d | −6,1% | +20% | 0,26 |
> | 2124 | GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+197% · −36,3%** | +50% · −8,3% | +30% | −7,7% | 2,9 | 76 d | −8,3% | +25% | 0,09 |
> | 2125 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+135% · −32,6%** | +33% · −5,7% | +22% | −4,0% | 2,6 | 81 d | −6,8% | +13% | 0,06 |
> | 2126 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+176% · −46,1%** | +43% · −9,0% | +28% | −6,2% | 2,9 | 77 d | −8,2% | +19% | 0,05 |
> | 2127 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+101% · −24,3%** | +33% · −5,7% | +24% | −7,1% | 3,0 | 129 d | −4,2% | +17% | 0,11 |
> | 2128 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+198% · −27,4%** | +49% · −7,1% | +29% | −6,4% | 3,2 | 96 d | −7,1% | +23% | 0,18 |
> | 2129 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+161% · −47,0%** | +45% · −11,9% | +31% | −5,4% | 2,6 | 72 d | −8,1% | +20% | 0,07 |
> | 2130 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+301% · −39,2%** | +56% · −7,7% | +33% | −4,0% | 3,7 | 128 d | −6,0% | +21% | 0,07 |

> [!example]- Combinações 2131 a 2160 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2131 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+248% · −43,8%** | +53% · −8,8% | +32% | −8,4% | 2,7 | 71 d | −8,9% | +28% | 0,07 |
> | 2132 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+178% · −40,1%** | +41% · −7,4% | +27% | −5,3% | 1,6 | 67 d | −5,8% | +20% | 0,10 |
> | 2133 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+203% · −42,3%** | +45% · −7,9% | +30% | −6,8% | 2,7 | 122 d | −4,0% | +23% | 0,04 |
> | 2134 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+192% · −47,8%** | +51% · −11,8% | +34% | −8,2% | 3,0 | 122 d | −5,1% | +26% | 0,16 |
> | 2135 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+364% · −40,4%** | +63% · −8,4% | +37% | −4,5% | 4,1 | 120 d | −7,5% | +24% | 0,14 |
> | 2136 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+162% · −37,0%** | +45% · −9,5% | +30% | −10,9% | 2,3 | 72 d | −7,1% | +23% | 0,24 |
> | 2137 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+193% · −45,9%** | +44% · −9,8% | +29% | −12,7% | 2,3 | 64 d | −8,5% | +22% | 0,32 |
> | 2138 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+338% · −43,9%** | +62% · −8,3% | +34% | −5,7% | 2,4 | 65 d | −8,6% | +24% | 0,24 |
> | 2139 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+238% · −35,7%** | +47% · −6,1% | +31% | −4,4% | 2,8 | 122 d | −4,4% | +20% | 0,05 |
> | 2140 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+252% · −46,9%** | +52% · −10,5% | +32% | −10,9% | 2,6 | 73 d | −8,2% | +27% | 0,31 |
> | 2141 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+171% · −31,0%** | +47% · −8,1% | +28% | −5,1% | 3,7 | 110 d | −7,4% | +20% | −0,02 |
> | 2142 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+132% · −22,4%** | +32% · −4,1% | +25% | −4,1% | 2,3 | 92 d | −5,0% | +19% | −0,01 |
> | 2143 | GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+132% · −29,8%** | +48% · −9,6% | +27% | −7,5% | 2,6 | 72 d | −8,4% | +19% | 0,19 |
> | 2144 | ADX ·ADX + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+187% · −38,9%** | +41% · −7,1% | +26% | −5,6% | 1,8 | 74 d | −5,6% | +19% | 0,06 |
> | 2145 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+185% · −55,9%** | +45% · −12,5% | +31% | −7,1% | 3,0 | 78 d | −8,5% | +16% | 0,24 |
> | 2146 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+310% · −58,4%** | +62% · −12,4% | +38% | −7,6% | 4,0 | 128 d | −6,5% | +28% | 0,18 |
> | 2147 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+154% · −36,2%** | +38% · −7,2% | +27% | −8,9% | 2,5 | 81 d | −6,6% | +22% | 0,08 |
> | 2148 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+136% · −33,0%** | +34% · −6,1% | +26% | −9,7% | 2,7 | 107 d | −5,2% | +19% | 0,05 |
> | 2149 | Pôr do sol ·POR + Rompe 200 ·ROM | **+28% · −10,2%** | +20% · −4,5% | +17% | −3,4% | 1,9 | 94 d | −2,9% | +16% | −0,07 |
> | 2150 | VWAP ·TEN + Pullback ·PUL + Tendência ·TEN | **+111% · −38,3%** | +43% · −12,7% | +32% | −7,5% | 3,2 | 120 d | −6,0% | +15% | 0,21 |
> | 2151 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+222% · −25,7%** | +51% · −5,5% | +29% | −4,6% | 3,2 | 92 d | −7,5% | +23% | 0,09 |
> | 2152 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+192% · −35,9%** | +48% · −8,8% | +28% | −6,6% | 2,3 | 72 d | −7,2% | +21% | 0,11 |
> | 2153 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+188% · −36,1%** | +41% · −6,6% | +26% | −4,9% | 1,7 | 76 d | −5,1% | +18% | 0,04 |
> | 2154 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+294% · −54,9%** | +61% · −11,7% | +35% | −6,0% | 3,7 | 120 d | −6,9% | +25% | 0,20 |
> | 2155 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+290% · −54,1%** | +56% · −11,1% | +35% | −8,3% | 3,3 | 78 d | −9,3% | +23% | 0,43 |
> | 2156 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+269% · −58,7%** | +61% · −12,1% | +38% | −9,6% | 2,7 | 67 d | −9,2% | +31% | 0,31 |
> | 2157 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+207% · −39,2%** | +44% · −7,8% | +27% | −10,2% | 2,9 | 91 d | −6,9% | +20% | 0,25 |
> | 2158 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+205% · −36,7%** | +44% · −7,2% | +28% | −9,7% | 2,7 | 83 d | −6,9% | +20% | 0,15 |
> | 2159 | 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+72% · −17,9%** | +41% · −8,7% | +29% | −4,3% | 2,5 | 67 d | −8,8% | +24% | −0,19 |
> | 2160 | ADX ·ADX + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+212% · −49,2%** | +56% · −11,6% | +36% | −9,3% | 3,2 | 122 d | −5,5% | +27% | 0,11 |

> [!example]- Combinações 2161 a 2190 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2161 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+256% · −44,6%** | +53% · −9,6% | +32% | −10,0% | 3,1 | 83 d | −8,1% | +25% | 0,28 |
> | 2162 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+285% · −41,1%** | +58% · −8,2% | +35% | −5,6% | 3,2 | 122 d | −5,5% | +23% | 0,12 |
> | 2163 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+287% · −40,6%** | +58% · −8,1% | +34% | −5,6% | 3,1 | 122 d | −5,5% | +22% | 0,13 |
> | 2164 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+126% · −20,2%** | +37% · −4,8% | +27% | −4,1% | 2,6 | 125 d | −3,4% | +21% | −0,01 |
> | 2165 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+113% · −21,1%** | +30% · −3,0% | +23% | −5,0% | 1,9 | 87 d | −4,0% | +18% | 0,05 |
> | 2166 | VWAP ·TEN + Donchian ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+274% · −47,0%** | +56% · −9,5% | +34% | −9,3% | 3,2 | 81 d | −8,7% | +26% | 0,39 |
> | 2167 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+186% · −32,2%** | +41% · −6,2% | +26% | −4,7% | 2,6 | 80 d | −7,3% | +18% | 0,10 |
> | 2168 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+209% · −43,4%** | +54% · −11,8% | +35% | −7,4% | 3,4 | 81 d | −9,2% | +23% | 0,25 |
> | 2169 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+246% · −50,8%** | +54% · −10,7% | +34% | −6,8% | 3,5 | 83 d | −9,1% | +24% | 0,23 |
> | 2170 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+136% · −28,2%** | +33% · −4,8% | +22% | −2,5% | 2,6 | 91 d | −6,2% | +15% | −0,01 |
> | 2171 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+158% · −40,1%** | +38% · −8,2% | +24% | −9,1% | 2,2 | 73 d | −6,9% | +18% | 0,13 |
> | 2172 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+250% · −46,2%** | +55% · −9,5% | +34% | −5,4% | 2,6 | 76 d | −7,7% | +27% | 0,12 |
> | 2173 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+220% · −50,1%** | +51% · −10,4% | +32% | −12,0% | 3,7 | 102 d | −7,8% | +19% | 0,27 |
> | 2174 | GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+160% · −33,9%** | +55% · −11,8% | +31% | −11,4% | 2,6 | 67 d | −9,1% | +27% | 0,35 |
> | 2175 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+271% · −33,5%** | +50% · −5,6% | +30% | −6,0% | 2,6 | 82 d | −7,0% | +23% | 0,13 |
> | 2176 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+101% · −21,6%** | +32% · −4,3% | +25% | −6,8% | 2,0 | 86 d | −4,6% | +18% | 0,05 |
> | 2177 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+356% · −36,7%** | +60% · −7,2% | +33% | −4,3% | 3,7 | 105 d | −7,7% | +23% | 0,12 |
> | 2178 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+203% · −34,6%** | +43% · −6,3% | +28% | −4,1% | 2,7 | 122 d | −4,4% | +20% | 0,05 |
> | 2179 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+108% · −38,5%** | +31% · −7,9% | +22% | −8,0% | 2,5 | 95 d | −5,4% | +16% | 0,04 |
> | 2180 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+266% · −54,5%** | +63% · −11,1% | +36% | −9,1% | 2,6 | 65 d | −9,5% | +30% | 0,30 |
> | 2181 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+146% · −30,2%** | +34% · −5,4% | +24% | −8,2% | 3,0 | 146 d | −3,8% | +18% | 0,11 |
> | 2182 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+253% · −64,1%** | +56% · −15,3% | +35% | −8,2% | 3,3 | 106 d | −6,9% | +20% | 0,33 |
> | 2183 | GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+181% · −41,2%** | +51% · −10,1% | +33% | −8,6% | 3,1 | 76 d | −9,2% | +27% | 0,27 |
> | 2184 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+231% · −34,6%** | +48% · −6,7% | +31% | −5,5% | 2,9 | 122 d | −5,0% | +20% | 0,03 |
> | 2185 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+177% · −50,9%** | +52% · −13,6% | +34% | −13,1% | 2,9 | 75 d | −9,0% | +23% | 0,47 |
> | 2186 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+154% · −39,7%** | +38% · −7,4% | +27% | −7,0% | 2,6 | 91 d | −6,1% | +19% | 0,16 |
> | 2187 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+96% · −39,0%** | +33% · −10,2% | +23% | −10,4% | 2,2 | 72 d | −7,2% | +15% | 0,09 |
> | 2188 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+172% · −52,0%** | +42% · −10,6% | +30% | −6,2% | 2,8 | 81 d | −7,7% | +22% | 0,06 |
> | 2189 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Tendência ·TEN | **+288% · −63,9%** | +77% · −18,6% | +42% | −7,6% | 3,6 | 74 d | −11,7% | +25% | 0,40 |
> | 2190 | Donchian ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+228% · −33,4%** | +55% · −8,2% | +33% | −9,2% | 2,9 | 83 d | −7,7% | +27% | 0,31 |

> [!example]- Combinações 2191 a 2220 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2191 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+108% · −40,7%** | +29% · −8,6% | +23% | −7,7% | 2,5 | 106 d | −5,1% | +17% | 0,06 |
> | 2192 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+303% · −47,1%** | +57% · −9,5% | +33% | −5,0% | 3,9 | 91 d | −9,3% | +17% | 0,21 |
> | 2193 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+297% · −56,2%** | +57% · −11,9% | +35% | −5,6% | 3,9 | 129 d | −6,5% | +21% | 0,07 |
> | 2194 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+204% · −43,1%** | +46% · −8,2% | +29% | −4,7% | 3,1 | 90 d | −7,6% | +18% | 0,07 |
> | 2195 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+117% · −41,1%** | +36% · −11,0% | +26% | −6,5% | 2,3 | 72 d | −7,4% | +15% | 0,11 |
> | 2196 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+171% · −41,7%** | +41% · −8,8% | +28% | −9,4% | 2,0 | 72 d | −6,7% | +20% | 0,15 |
> | 2197 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+189% · −39,6%** | +43% · −7,6% | +27% | −4,0% | 3,0 | 122 d | −5,3% | +22% | −0,01 |
> | 2198 | Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+138% · −28,6%** | +41% · −6,9% | +27% | −6,8% | 2,4 | 87 d | −6,0% | +25% | 0,05 |
> | 2199 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+271% · −48,9%** | +58% · −10,4% | +35% | −11,5% | 2,7 | 71 d | −9,0% | +29% | 0,30 |
> | 2200 | GPS médias ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+205% · −42,5%** | +57% · −10,5% | +37% | −10,1% | 3,1 | 76 d | −9,3% | +28% | 0,35 |
> | 2201 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+202% · −33,4%** | +49% · −8,4% | +31% | −9,7% | 2,9 | 107 d | −6,0% | +21% | 0,32 |
> | 2202 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Tendência ·TEN | **+198% · −54,1%** | +54% · −12,9% | +34% | −6,6% | 4,2 | 128 d | −7,0% | +15% | 0,30 |
> | 2203 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+258% · −35,7%** | +50% · −6,5% | +28% | −3,4% | 2,7 | 106 d | −5,6% | +19% | 0,06 |
> | 2204 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+326% · −48,6%** | +61% · −10,2% | +34% | −9,1% | 2,6 | 71 d | −9,0% | +28% | 0,25 |
> | 2205 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+205% · −46,6%** | +48% · −9,6% | +30% | −6,2% | 2,6 | 76 d | −7,8% | +28% | 0,15 |
> | 2206 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+215% · −41,3%** | +47% · −7,1% | +29% | −5,0% | 2,8 | 105 d | −5,8% | +22% | 0,12 |
> | 2207 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+212% · −64,9%** | +48% · −15,7% | +31% | −6,3% | 3,4 | 120 d | −6,6% | +18% | 0,08 |
> | 2208 | GPS médias ·TEN + Quinta ·QUI ⚠️ | **+75% · −20,6%** | +43% · −9,7% | +27% | −7,2% | 2,8 | 72 d | −9,3% | +19% | −0,21 |
> | 2209 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+253% · −44,9%** | +52% · −9,1% | +30% | −6,5% | 2,3 | 67 d | −8,3% | +26% | 0,25 |
> | 2210 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+235% · −39,2%** | +48% · −7,5% | +29% | −4,7% | 2,7 | 122 d | −4,4% | +17% | 0,19 |
> | 2211 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+190% · −39,8%** | +54% · −10,6% | +32% | −8,4% | 2,9 | 74 d | −9,2% | +26% | 0,07 |
> | 2212 | ADX ·ADX + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+226% · −49,6%** | +50% · −10,6% | +34% | −10,0% | 2,6 | 106 d | −5,2% | +27% | 0,23 |
> | 2213 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+241% · −55,6%** | +49% · −11,9% | +32% | −6,8% | 3,1 | 78 d | −9,1% | +19% | 0,23 |
> | 2214 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+310% · −47,3%** | +60% · −9,0% | +34% | −7,2% | 2,8 | 97 d | −6,4% | +24% | 0,28 |
> | 2215 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+217% · −37,9%** | +44% · −7,4% | +29% | −6,6% | 2,6 | 92 d | −6,1% | +22% | 0,19 |
> | 2216 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+131% · −46,7%** | +34% · −9,1% | +25% | −4,6% | 2,7 | 85 d | −6,9% | +15% | 0,06 |
> | 2217 | ADX ·ADX + Donchian ·TEN + Bollinger ·TEN + Tendência ·TEN | **+326% · −55,4%** | +73% · −15,1% | +39% | −7,6% | 4,0 | 97 d | −9,0% | +25% | 0,35 |
> | 2218 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+253% · −50,8%** | +52% · −9,4% | +30% | −4,2% | 2,5 | 80 d | −7,2% | +22% | 0,15 |
> | 2219 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+239% · −50,1%** | +49% · −9,1% | +30% | −6,3% | 2,8 | 122 d | −4,7% | +20% | 0,23 |
> | 2220 | VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+195% · −34,8%** | +42% · −6,8% | +28% | −9,4% | 2,5 | 104 d | −5,2% | +22% | 0,26 |

> [!example]- Combinações 2221 a 2250 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2221 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+217% · −38,9%** | +45% · −8,0% | +29% | −8,5% | 2,4 | 76 d | −7,3% | +20% | 0,13 |
> | 2222 | Donchian ·TEN + MACD ·TEN + Pullback ·PUL | **+151% · −30,5%** | +53% · −10,7% | +33% | −6,5% | 3,5 | 101 d | −7,7% | +21% | 0,13 |
> | 2223 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+240% · −59,8%** | +55% · −13,7% | +34% | −5,9% | 3,4 | 79 d | −10,0% | +20% | 0,21 |
> | 2224 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+163% · −39,0%** | +40% · −7,5% | +25% | −4,3% | 2,3 | 80 d | −6,5% | +22% | 0,03 |
> | 2225 | ADX ·ADX + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+324% · −54,6%** | +64% · −10,7% | +37% | −7,9% | 2,7 | 67 d | −9,5% | +30% | 0,28 |
> | 2226 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+249% · −53,9%** | +56% · −10,6% | +35% | −7,2% | 2,7 | 76 d | −8,4% | +30% | 0,11 |
> | 2227 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+220% · −42,1%** | +48% · −8,3% | +30% | −5,0% | 3,0 | 122 d | −5,5% | +24% | 0,03 |
> | 2228 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+177% · −38,0%** | +40% · −6,8% | +27% | −4,5% | 1,6 | 72 d | −5,8% | +19% | 0,07 |
> | 2229 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+235% · −41,4%** | +48% · −8,2% | +29% | −5,9% | 2,4 | 112 d | −4,2% | +19% | 0,28 |
> | 2230 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+220% · −66,2%** | +50% · −14,5% | +32% | −5,9% | 3,7 | 83 d | −9,8% | +13% | 0,28 |
> | 2231 | ADX ·ADX + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+248% · −63,9%** | +53% · −15,2% | +31% | −7,3% | 2,4 | 65 d | −9,2% | +19% | 0,29 |
> | 2232 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+242% · −52,6%** | +52% · −11,2% | +34% | −8,4% | 2,9 | 122 d | −5,1% | +22% | 0,32 |
> | 2233 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+188% · −37,3%** | +48% · −8,8% | +29% | −4,5% | 1,7 | 75 d | −5,4% | +19% | 0,13 |
> | 2234 | Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+235% · −51,7%** | +62% · −14,0% | +36% | −6,8% | 3,9 | 83 d | −10,4% | +18% | 0,37 |
> | 2235 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+309% · −51,7%** | +65% · −10,9% | +37% | −8,4% | 2,6 | 65 d | −9,9% | +30% | 0,32 |
> | 2236 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+226% · −60,4%** | +50% · −13,7% | +32% | −4,7% | 3,8 | 91 d | −9,3% | +15% | 0,12 |
> | 2237 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+175% · −35,3%** | +39% · −5,7% | +27% | −3,7% | 2,5 | 91 d | −6,1% | +21% | −0,01 |
> | 2238 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+147% · −46,2%** | +37% · −9,3% | +27% | −7,0% | 3,3 | 120 d | −6,5% | +14% | 0,09 |
> | 2239 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+249% · −50,5%** | +52% · −10,4% | +30% | −5,4% | 2,5 | 76 d | −7,6% | +21% | 0,27 |
> | 2240 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+266% · −51,9%** | +52% · −10,5% | +33% | −7,6% | 2,5 | 67 d | −8,9% | +24% | 0,36 |
> | 2241 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+155% · −45,5%** | +37% · −9,9% | +27% | −7,0% | 2,5 | 103 d | −5,1% | +19% | 0,14 |
> | 2242 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+131% · −27,7%** | +47% · −9,1% | +32% | −11,7% | 2,9 | 107 d | −6,1% | +20% | 0,27 |
> | 2243 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+185% · −34,0%** | +51% · −8,6% | +33% | −6,5% | 2,0 | 81 d | −5,6% | +21% | 0,05 |
> | 2244 | ADX ·ADX + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+144% · −35,7%** | +41% · −8,2% | +25% | −4,9% | 1,8 | 87 d | −4,2% | +19% | 0,08 |
> | 2245 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+276% · −39,4%** | +54% · −7,9% | +34% | −6,3% | 3,1 | 89 d | −8,0% | +29% | 0,17 |
> | 2246 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+266% · −50,3%** | +54% · −10,3% | +32% | −6,6% | 3,2 | 76 d | −9,8% | +18% | 0,21 |
> | 2247 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+156% · −35,9%** | +39% · −7,2% | +27% | −8,8% | 2,4 | 81 d | −6,7% | +21% | 0,10 |
> | 2248 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+163% · −45,3%** | +46% · −11,2% | +31% | −5,4% | 2,4 | 72 d | −8,2% | +21% | 0,10 |
> | 2249 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+224% · −33,9%** | +46% · −5,9% | +30% | −3,2% | 2,6 | 122 d | −4,1% | +19% | 0,05 |
> | 2250 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL | **+214% · −49,9%** | +57% · −13,6% | +34% | −5,5% | 4,0 | 91 d | −9,8% | +15% | 0,24 |

> [!example]- Combinações 2251 a 2280 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2251 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+207% · −44,6%** | +48% · −9,5% | +32% | −8,4% | 3,0 | 89 d | −7,6% | +24% | 0,24 |
> | 2252 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+196% · −36,0%** | +44% · −7,3% | +30% | −7,3% | 2,1 | 72 d | −7,2% | +21% | 0,06 |
> | 2253 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+168% · −31,2%** | +45% · −7,4% | +26% | −8,9% | 3,0 | 91 d | −7,5% | +17% | 0,17 |
> | 2254 | BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+236% · −47,1%** | +48% · −9,7% | +30% | −6,0% | 2,5 | 72 d | −8,4% | +19% | 0,26 |
> | 2255 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+251% · −43,2%** | +53% · −8,9% | +32% | −8,3% | 2,7 | 71 d | −9,2% | +28% | 0,12 |
> | 2256 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+253% · −45,0%** | +55% · −9,2% | +33% | −5,3% | 2,5 | 76 d | −7,8% | +27% | 0,13 |
> | 2257 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Tendência ·TEN | **+275% · −53,9%** | +55% · −10,9% | +36% | −7,3% | 3,4 | 122 d | −6,3% | +22% | 0,22 |
> | 2258 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+265% · −46,5%** | +53% · −9,9% | +30% | −9,4% | 3,5 | 91 d | −8,7% | +17% | 0,22 |
> | 2259 | Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+208% · −43,2%** | +54% · −11,7% | +35% | −9,0% | 3,2 | 83 d | −8,7% | +21% | 0,40 |
> | 2260 | ADX ·ADX + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+232% · −45,1%** | +60% · −11,1% | +38% | −9,1% | 2,0 | 67 d | −7,5% | +25% | 0,24 |
> | 2261 | IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+156% · −23,2%** | +53% · −7,3% | +36% | −8,3% | 2,4 | 92 d | −5,6% | +21% | 0,21 |
> | 2262 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+197% · −37,5%** | +42% · −7,2% | +29% | −8,1% | 2,4 | 84 d | −6,1% | +22% | 0,30 |
> | 2263 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+189% · −41,9%** | +43% · −8,3% | +27% | −3,9% | 2,9 | 122 d | −5,2% | +20% | 0,04 |
> | 2264 | BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+182% · −51,1%** | +51% · −14,1% | +34% | −8,3% | 3,3 | 83 d | −9,0% | +16% | 0,36 |
> | 2265 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+266% · −46,9%** | +66% · −11,9% | +38% | −6,1% | 2,4 | 67 d | −8,9% | +30% | 0,31 |
> | 2266 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+171% · −43,4%** | +41% · −9,0% | +28% | −9,9% | 3,2 | 128 d | −5,5% | +17% | 0,24 |
> | 2267 | Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+109% · −20,3%** | +33% · −4,6% | +23% | −6,2% | 2,2 | 102 d | −4,2% | +16% | 0,03 |
> | 2268 | Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+230% · −37,1%** | +57% · −9,5% | +30% | −7,5% | 3,5 | 83 d | −9,5% | +19% | 0,24 |
> | 2269 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+250% · −63,5%** | +52% · −15,0% | +31% | −6,0% | 2,5 | 74 d | −8,3% | +20% | 0,21 |
> | 2270 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+219% · −36,0%** | +55% · −8,3% | +35% | −5,9% | 2,9 | 122 d | −5,2% | +22% | 0,13 |
> | 2271 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+280% · −55,6%** | +59% · −11,6% | +36% | −7,6% | 3,5 | 119 d | −7,1% | +27% | 0,13 |
> | 2272 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+189% · −44,7%** | +49% · −10,8% | +33% | −7,1% | 3,7 | 130 d | −6,2% | +21% | −0,01 |
> | 2273 | Donchian ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+171% · −36,0%** | +58% · −12,5% | +36% | −6,3% | 3,8 | 90 d | −9,7% | +20% | 0,15 |
> | 2274 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+323% · −53,4%** | +66% · −11,4% | +35% | −6,9% | 2,6 | 65 d | −10,0% | +29% | 0,26 |
> | 2275 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+267% · −57,2%** | +57% · −11,6% | +37% | −9,6% | 3,0 | 122 d | −5,4% | +24% | 0,42 |
> | 2276 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+237% · −60,6%** | +54% · −14,1% | +34% | −5,8% | 3,5 | 83 d | −9,6% | +19% | 0,23 |
> | 2277 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+295% · −46,4%** | +59% · −10,2% | +34% | −10,2% | 2,9 | 74 d | −9,4% | +31% | 0,31 |
> | 2278 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+206% · −38,7%** | +44% · −7,1% | +29% | −5,6% | 2,4 | 122 d | −3,2% | +21% | 0,12 |
> | 2279 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+268% · −51,6%** | +68% · −12,9% | +40% | −7,1% | 2,6 | 67 d | −9,6% | +30% | 0,30 |
> | 2280 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+227% · −44,1%** | +49% · −9,0% | +32% | −8,1% | 2,3 | 106 d | −4,4% | +25% | 0,23 |

> [!example]- Combinações 2281 a 2310 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2281 | MACD ·TEN + Rompe 200 ·ROM | **+49% · −13,4%** | +31% · −6,0% | +24% | −9,6% | 1,9 | 95 d | −3,7% | +22% | 0,08 |
> | 2282 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+233% · −32,5%** | +45% · −5,3% | +30% | −5,5% | 3,1 | 92 d | −7,6% | +23% | 0,05 |
> | 2283 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+165% · −56,0%** | +47% · −15,8% | +33% | −7,9% | 3,2 | 78 d | −9,5% | +18% | 0,21 |
> | 2284 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+258% · −40,3%** | +50% · −7,7% | +29% | −3,9% | 3,1 | 122 d | −5,8% | +23% | 0,04 |
> | 2285 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+186% · −33,0%** | +49% · −7,7% | +31% | −5,0% | 2,8 | 122 d | −5,0% | +22% | 0,15 |
> | 2286 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+269% · −59,0%** | +57% · −13,0% | +35% | −6,3% | 3,5 | 83 d | −9,4% | +19% | 0,25 |
> | 2287 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+222% · −45,5%** | +51% · −9,8% | +32% | −10,2% | 2,9 | 83 d | −8,0% | +29% | 0,28 |
> | 2288 | Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+242% · −44,0%** | +52% · −9,1% | +34% | −9,4% | 2,9 | 83 d | −7,9% | +29% | 0,34 |
> | 2289 | GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+190% · −37,5%** | +48% · −9,4% | +28% | −7,7% | 2,3 | 72 d | −7,7% | +22% | 0,23 |
> | 2290 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+225% · −42,8%** | +55% · −10,9% | +32% | −7,1% | 1,6 | 67 d | −6,5% | +20% | 0,32 |
> | 2291 | Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+111% · −20,8%** | +34% · −4,6% | +23% | −6,1% | 2,1 | 102 d | −3,8% | +16% | 0,04 |
> | 2292 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+232% · −47,5%** | +51% · −10,6% | +33% | −12,0% | 2,3 | 67 d | −8,4% | +28% | 0,29 |
> | 2293 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+201% · −43,5%** | +46% · −8,4% | +32% | −7,9% | 3,0 | 96 d | −7,0% | +28% | 0,18 |
> | 2294 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+196% · −52,4%** | +46% · −12,1% | +29% | −9,5% | 3,7 | 120 d | −7,3% | +15% | 0,25 |
> | 2295 | GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+184% · −34,4%** | +41% · −7,1% | +26% | −7,5% | 2,5 | 81 d | −7,1% | +21% | 0,07 |
> | 2296 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+216% · −54,8%** | +50% · −12,9% | +30% | −12,1% | 2,5 | 67 d | −9,3% | +20% | 0,31 |
> | 2297 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+133% · −30,0%** | +33% · −5,5% | +25% | −5,4% | 2,3 | 99 d | −5,0% | +20% | 0,08 |
> | 2298 | VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+217% · −43,1%** | +44% · −9,1% | +29% | −8,0% | 2,5 | 94 d | −6,1% | +21% | 0,31 |
> | 2299 | Donchian ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+168% · −26,5%** | +56% · −9,2% | +34% | −4,9% | 3,7 | 102 d | −8,4% | +22% | 0,07 |
> | 2300 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+229% · −62,6%** | +54% · −13,7% | +33% | −9,0% | 3,5 | 83 d | −9,6% | +17% | 0,39 |
> | 2301 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+248% · −48,2%** | +55% · −10,2% | +34% | −6,5% | 2,5 | 74 d | −8,3% | +30% | 0,26 |
> | 2302 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+186% · −33,1%** | +48% · −8,0% | +31% | −9,0% | 2,6 | 72 d | −8,9% | +25% | 0,26 |
> | 2303 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+244% · −58,6%** | +54% · −13,9% | +34% | −6,0% | 2,9 | 72 d | −10,2% | +19% | 0,18 |
> | 2304 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+117% · −35,7%** | +37% · −8,4% | +26% | −5,0% | 2,7 | 91 d | −6,8% | +15% | 0,11 |
> | 2305 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+205% · −46,4%** | +48% · −9,6% | +32% | −8,3% | 2,9 | 81 d | −8,4% | +25% | 0,20 |
> | 2306 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+146% · −39,0%** | +38% · −8,0% | +27% | −10,4% | 2,6 | 81 d | −7,4% | +24% | 0,04 |
> | 2307 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+174% · −50,4%** | +42% · −10,0% | +30% | −6,3% | 2,7 | 81 d | −7,8% | +23% | 0,06 |
> | 2308 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+219% · −45,4%** | +50% · −10,0% | +31% | −8,1% | 2,5 | 72 d | −8,8% | +22% | 0,13 |
> | 2309 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+210% · −49,8%** | +48% · −11,2% | +32% | −8,4% | 2,9 | 81 d | −8,6% | +20% | 0,30 |
> | 2310 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+311% · −47,6%** | +61% · −9,3% | +32% | −4,4% | 3,1 | 97 d | −7,3% | +23% | 0,15 |

> [!example]- Combinações 2311 a 2340 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2311 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+219% · −53,1%** | +52% · −11,2% | +31% | −8,0% | 2,6 | 80 d | −7,7% | +22% | 0,32 |
> | 2312 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+219% · −42,0%** | +46% · −8,0% | +29% | −6,3% | 1,8 | 76 d | −5,8% | +19% | 0,13 |
> | 2313 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+258% · −51,8%** | +55% · −11,9% | +31% | −13,4% | 2,8 | 70 d | −10,3% | +22% | 0,41 |
> | 2314 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+368% · −59,3%** | +69% · −12,8% | +41% | −9,1% | 3,9 | 119 d | −8,1% | +29% | 0,44 |
> | 2315 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+256% · −41,0%** | +53% · −8,7% | +32% | −6,5% | 3,3 | 111 d | −7,2% | +22% | 0,14 |
> | 2316 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+166% · −40,4%** | +46% · −9,3% | +30% | −6,7% | 2,8 | 122 d | −5,2% | +23% | 0,06 |
> | 2317 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+284% · −50,6%** | +60% · −10,5% | +34% | −6,2% | 2,6 | 67 d | −9,8% | +25% | 0,26 |
> | 2318 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+190% · −38,2%** | +42% · −7,2% | +26% | −5,6% | 1,7 | 76 d | −5,7% | +19% | 0,06 |
> | 2319 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+199% · −38,8%** | +41% · −7,9% | +27% | −3,6% | 3,0 | 92 d | −7,6% | +20% | 0,05 |
> | 2320 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+223% · −40,3%** | +54% · −10,7% | +32% | −11,1% | 2,3 | 72 d | −7,9% | +22% | 0,32 |
> | 2321 | MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+153% · −37,9%** | +44% · −9,5% | +32% | −10,7% | 2,7 | 101 d | −6,1% | +26% | 0,28 |
> | 2322 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+221% · −42,9%** | +49% · −9,1% | +33% | −10,2% | 2,1 | 67 d | −7,9% | +21% | 0,27 |
> | 2323 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+191% · −36,5%** | +49% · −8,5% | +28% | −4,1% | 1,6 | 75 d | −5,6% | +19% | 0,16 |
> | 2324 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+205% · −36,5%** | +44% · −6,4% | +29% | −4,3% | 2,4 | 122 d | −3,8% | +19% | 0,09 |
> | 2325 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+141% · −24,7%** | +40% · −5,9% | +27% | −5,1% | 2,7 | 115 d | −5,6% | +21% | 0,07 |
> | 2326 | IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+168% · −25,4%** | +55% · −7,9% | +34% | −6,8% | 2,6 | 106 d | −5,8% | +24% | 0,22 |
> | 2327 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+187% · −62,2%** | +46% · −14,6% | +29% | −6,5% | 2,4 | 77 d | −7,5% | +19% | 0,12 |
> | 2328 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+186% · −52,6%** | +53% · −14,5% | +33% | −7,4% | 3,2 | 76 d | −10,5% | +17% | 0,22 |
> | 2329 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+251% · −52,4%** | +56% · −10,2% | +35% | −7,2% | 2,7 | 76 d | −8,5% | +30% | 0,13 |
> | 2330 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+188% · −43,5%** | +45% · −8,7% | +28% | −5,6% | 2,3 | 76 d | −7,2% | +25% | 0,11 |
> | 2331 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+116% · −38,0%** | +32% · −6,9% | +24% | −5,6% | 2,5 | 91 d | −6,3% | +16% | 0,02 |
> | 2332 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+140% · −26,8%** | +40% · −6,7% | +27% | −6,3% | 2,9 | 111 d | −6,1% | +20% | 0,12 |
> | 2333 | 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+109% · −18,2%** | +40% · −5,3% | +25% | −5,5% | 2,2 | 102 d | −4,5% | +17% | 0,19 |
> | 2334 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+186% · −45,7%** | +42% · −9,9% | +26% | −11,9% | 2,2 | 75 d | −7,3% | +23% | 0,21 |
> | 2335 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+170% · −47,1%** | +41% · −10,3% | +28% | −13,1% | 2,0 | 73 d | −6,8% | +25% | 0,15 |
> | 2336 | 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+157% · −29,1%** | +55% · −9,4% | +38% | −9,7% | 2,7 | 92 d | −6,8% | +23% | 0,25 |
> | 2337 | VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+166% · −36,9%** | +45% · −9,4% | +26% | −10,1% | 2,9 | 83 d | −8,1% | +16% | 0,29 |
> | 2338 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+116% · −30,0%** | +30% · −5,5% | +21% | −7,3% | 2,8 | 150 d | −4,1% | +14% | 0,09 |
> | 2339 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+181% · −39,1%** | +42% · −7,3% | +29% | −6,9% | 2,5 | 122 d | −4,0% | +23% | 0,10 |
> | 2340 | Donchian ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+205% · −38,4%** | +54% · −9,1% | +35% | −7,6% | 3,3 | 89 d | −8,8% | +29% | 0,11 |

> [!example]- Combinações 2341 a 2370 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2341 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+212% · −53,0%** | +48% · −11,4% | +30% | −4,9% | 2,8 | 122 d | −5,3% | +18% | 0,19 |
> | 2342 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+117% · −36,7%** | +37% · −9,4% | +25% | −9,1% | 3,0 | 120 d | −6,1% | +16% | 0,02 |
> | 2343 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+145% · −37,7%** | +41% · −9,7% | +30% | −7,7% | 2,2 | 82 d | −6,4% | +23% | 0,20 |
> | 2344 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+149% · −30,6%** | +40% · −7,3% | +27% | −9,6% | 2,4 | 106 d | −5,2% | +19% | 0,16 |
> | 2345 | BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+196% · −51,9%** | +51% · −13,9% | +32% | −5,8% | 3,1 | 74 d | −10,6% | +15% | 0,18 |
> | 2346 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+277% · −45,9%** | +55% · −9,1% | +32% | −5,7% | 2,6 | 76 d | −8,4% | +27% | 0,14 |
> | 2347 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+293% · −57,0%** | +59% · −12,1% | +36% | −7,5% | 3,6 | 127 d | −6,8% | +26% | 0,23 |
> | 2348 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+175% · −32,8%** | +40% · −6,2% | +26% | −4,1% | 2,3 | 122 d | −3,4% | +19% | 0,05 |
> | 2349 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+147% · −40,3%** | +36% · −8,1% | +25% | −9,5% | 2,0 | 73 d | −6,9% | +22% | 0,05 |
> | 2350 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+268% · −52,1%** | +54% · −10,5% | +33% | −5,2% | 3,4 | 128 d | −6,3% | +23% | 0,08 |
> | 2351 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+216% · −37,5%** | +45% · −7,5% | +29% | −7,0% | 2,5 | 78 d | −7,8% | +23% | 0,18 |
> | 2352 | Donchian ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+234% · −37,2%** | +59% · −9,5% | +37% | −9,3% | 3,0 | 91 d | −7,9% | +28% | 0,38 |
> | 2353 | Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+109% · −18,2%** | +33% · −3,8% | +23% | −4,4% | 1,8 | 94 d | −4,1% | +15% | 0,02 |
> | 2354 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+275% · −67,9%** | +57% · −16,6% | +34% | −8,5% | 2,4 | 65 d | −9,7% | +24% | 0,40 |
> | 2355 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+146% · −34,2%** | +36% · −5,8% | +24% | −3,3% | 1,6 | 75 d | −5,7% | +19% | 0,04 |
> | 2356 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+191% · −48,3%** | +45% · −10,8% | +31% | −12,8% | 2,0 | 67 d | −7,8% | +23% | 0,36 |
> | 2357 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+207% · −37,0%** | +45% · −7,3% | +27% | −9,8% | 2,6 | 83 d | −7,2% | +19% | 0,17 |
> | 2358 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+168% · −47,5%** | +41% · −10,3% | +28% | −10,3% | 2,0 | 72 d | −7,2% | +18% | 0,29 |
> | 2359 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+258% · −42,5%** | +53% · −9,1% | +32% | −9,2% | 3,3 | 99 d | −8,1% | +26% | 0,14 |
> | 2360 | Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+153% · −23,4%** | +51% · −8,0% | +28% | −3,4% | 3,4 | 100 d | −8,2% | +19% | 0,03 |
> | 2361 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+315% · −47,5%** | +61% · −9,5% | +32% | −4,1% | 3,0 | 97 d | −7,2% | +24% | 0,13 |
> | 2362 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+187% · −55,0%** | +45% · −12,1% | +31% | −7,0% | 2,9 | 78 d | −8,9% | +17% | 0,24 |
> | 2363 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+233% · −46,9%** | +53% · −9,6% | +33% | −7,3% | 2,6 | 77 d | −8,1% | +28% | 0,14 |
> | 2364 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+182% · −36,9%** | +42% · −6,8% | +29% | −6,2% | 2,5 | 122 d | −4,2% | +21% | 0,01 |
> | 2365 | Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+116% · −30,5%** | +45% · −9,9% | +32% | −10,7% | 2,7 | 90 d | −7,1% | +28% | 0,24 |
> | 2366 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+189% · −42,3%** | +45% · −9,1% | +30% | −10,1% | 2,8 | 92 d | −7,1% | +25% | 0,15 |
> | 2367 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+199% · −35,9%** | +44% · −7,3% | +30% | −7,3% | 2,0 | 72 d | −7,3% | +20% | 0,10 |
> | 2368 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+154% · −31,6%** | +38% · −5,8% | +27% | −5,7% | 2,4 | 87 d | −6,3% | +22% | 0,01 |
> | 2369 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+171% · −31,1%** | +45% · −7,2% | +27% | −4,3% | 2,9 | 131 d | −4,8% | +17% | −0,01 |
> | 2370 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+183% · −46,8%** | +46% · −9,3% | +31% | −9,6% | 2,7 | 76 d | −8,7% | +26% | 0,14 |

> [!example]- Combinações 2371 a 2400 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2371 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+240% · −57,6%** | +52% · −11,9% | +33% | −5,9% | 2,9 | 122 d | −5,6% | +23% | 0,19 |
> | 2372 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+208% · −52,8%** | +48% · −11,5% | +32% | −9,5% | 2,9 | 83 d | −8,2% | +19% | 0,43 |
> | 2373 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+195% · −37,4%** | +42% · −7,2% | +29% | −7,9% | 2,6 | 103 d | −5,9% | +22% | 0,28 |
> | 2374 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+244% · −50,7%** | +52% · −10,1% | +34% | −7,2% | 2,9 | 122 d | −5,7% | +22% | 0,20 |
> | 2375 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+118% · −33,9%** | +36% · −8,4% | +26% | −4,6% | 2,3 | 82 d | −6,8% | +18% | −0,06 |
> | 2376 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+304% · −39,8%** | +56% · −7,7% | +33% | −3,8% | 3,6 | 130 d | −6,4% | +21% | 0,05 |
> | 2377 | VWAP ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+214% · −44,7%** | +56% · −11,5% | +33% | −9,8% | 2,9 | 73 d | −10,0% | +20% | 0,41 |
> | 2378 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+156% · −34,3%** | +42% · −8,6% | +27% | −4,7% | 2,5 | 72 d | −8,8% | +20% | 0,05 |
> | 2379 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+195% · −46,9%** | +52% · −11,1% | +34% | −8,3% | 2,9 | 122 d | −5,6% | +25% | 0,17 |
> | 2380 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+204% · −40,6%** | +44% · −7,6% | +27% | −5,9% | 1,5 | 72 d | −6,0% | +17% | 0,18 |
> | 2381 | MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+140% · −28,5%** | +39% · −6,5% | +27% | −9,2% | 2,2 | 99 d | −4,9% | +17% | 0,19 |
> | 2382 | GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+214% · −40,9%** | +46% · −8,6% | +29% | −9,6% | 2,4 | 76 d | −7,8% | +22% | 0,22 |
> | 2383 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+206% · −43,9%** | +45% · −8,7% | +29% | −8,0% | 2,8 | 78 d | −8,8% | +16% | 0,23 |
> | 2384 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+300% · −54,8%** | +57% · −11,3% | +34% | −5,2% | 3,8 | 129 d | −6,9% | +22% | 0,07 |
> | 2385 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+180% · −35,6%** | +41% · −7,0% | +29% | −10,2% | 2,3 | 112 d | −4,6% | +23% | 0,26 |
> | 2386 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+278% · −57,5%** | +56% · −11,8% | +33% | −6,6% | 2,5 | 77 d | −7,9% | +25% | 0,37 |
> | 2387 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+176% · −42,2%** | +43% · −8,6% | +27% | −8,6% | 3,1 | 110 d | −7,1% | +18% | 0,06 |
> | 2388 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+265% · −40,9%** | +51% · −8,7% | +32% | −8,2% | 2,2 | 67 d | −8,4% | +21% | 0,25 |
> | 2389 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+145% · −46,3%** | +37% · −10,1% | +25% | −10,3% | 2,0 | 72 d | −7,2% | +20% | 0,11 |
> | 2390 | Quinta ·QUI ⚠️ | **+18% · −2,6%** | +18% · −2,6% | +17% | −3,7% | 2,5 | 176 d | −2,0% | +15% | — |
> | 2391 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+185% · −63,3%** | +45% · −15,1% | +30% | −6,5% | 2,5 | 82 d | −7,4% | +18% | 0,14 |
> | 2392 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+145% · −41,6%** | +38% · −8,5% | +26% | −10,2% | 2,2 | 83 d | −6,2% | +21% | 0,12 |
> | 2393 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+156% · −50,8%** | +39% · −10,3% | +28% | −5,9% | 2,6 | 83 d | −7,4% | +20% | 0,11 |
> | 2394 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+197% · −59,8%** | +47% · −14,0% | +31% | −4,5% | 3,1 | 81 d | −9,4% | +15% | 0,09 |
> | 2395 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Bollinger ·TEN | **+327% · −48,4%** | +62% · −10,3% | +34% | −6,4% | 3,2 | 120 d | −6,8% | +20% | 0,36 |
> | 2396 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Tendência ·TEN | **+244% · −47,9%** | +63% · −12,4% | +39% | −8,5% | 3,7 | 84 d | −10,4% | +20% | 0,51 |
> | 2397 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+195% · −36,8%** | +44% · −7,1% | +29% | −5,9% | 2,0 | 77 d | −6,5% | +23% | 0,12 |
> | 2398 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+169% · −45,0%** | +43% · −9,8% | +30% | −13,3% | 2,5 | 76 d | −8,1% | +26% | 0,20 |
> | 2399 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+157% · −36,8%** | +37% · −6,4% | +26% | −4,6% | 2,4 | 122 d | −4,1% | +20% | 0,03 |
> | 2400 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+113% · −24,4%** | +30% · −4,4% | +23% | −5,4% | 2,8 | 168 d | −3,8% | +17% | 0,07 |

> [!example]- Combinações 2401 a 2430 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2401 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+160% · −33,3%** | +44% · −6,8% | +29% | −4,9% | 2,6 | 91 d | −6,9% | +23% | −0,01 |
> | 2402 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+222% · −41,2%** | +46% · −7,7% | +29% | −6,4% | 1,7 | 76 d | −5,9% | +19% | 0,14 |
> | 2403 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+245% · −65,5%** | +55% · −15,9% | +35% | −7,2% | 3,6 | 83 d | −10,3% | +18% | 0,31 |
> | 2404 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+236% · −38,7%** | +49% · −6,2% | +30% | −4,7% | 2,5 | 72 d | −8,9% | +23% | 0,08 |
> | 2405 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+165% · −30,7%** | +45% · −7,3% | +26% | −8,7% | 2,9 | 91 d | −7,6% | +17% | 0,17 |
> | 2406 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+203% · −38,3%** | +43% · −6,9% | +29% | −4,9% | 2,9 | 122 d | −5,6% | +21% | −0,00 |
> | 2407 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+135% · −30,9%** | +38% · −7,3% | +26% | −11,0% | 2,9 | 153 d | −4,5% | +18% | 0,21 |
> | 2408 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+282% · −54,4%** | +62% · −11,2% | +38% | −8,9% | 3,5 | 83 d | −10,0% | +31% | 0,39 |
> | 2409 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+78% · −36,1%** | +29% · −8,5% | +22% | −4,4% | 2,5 | 91 d | −6,6% | +10% | 0,05 |
> | 2410 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+241% · −46,7%** | +53% · −9,0% | +30% | −3,7% | 3,2 | 110 d | −7,2% | +23% | 0,04 |
> | 2411 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+255% · −37,4%** | +50% · −6,4% | +33% | −8,2% | 2,8 | 82 d | −8,3% | +27% | 0,16 |
> | 2412 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+249% · −37,9%** | +50% · −7,7% | +33% | −5,4% | 2,7 | 122 d | −5,3% | +19% | 0,16 |
> | 2413 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+223% · −45,7%** | +50% · −10,0% | +31% | −8,1% | 2,4 | 72 d | −8,9% | +23% | 0,13 |
> | 2414 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+282% · −54,9%** | +59% · −11,0% | +36% | −7,6% | 3,4 | 127 d | −6,6% | +26% | 0,15 |
> | 2415 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+232% · −45,8%** | +52% · −9,8% | +34% | −11,7% | 2,8 | 91 d | −7,5% | +23% | 0,40 |
> | 2416 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+159% · −32,7%** | +45% · −7,6% | +29% | −5,1% | 2,4 | 122 d | −4,0% | +21% | 0,10 |
> | 2417 | BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+247% · −50,2%** | +60% · −13,0% | +36% | −7,7% | 3,3 | 78 d | −10,7% | +20% | 0,39 |
> | 2418 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+215% · −38,4%** | +47% · −8,0% | +31% | −9,7% | 3,3 | 120 d | −7,0% | +21% | 0,25 |
> | 2419 | GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+247% · −41,3%** | +60% · −9,9% | +36% | −8,0% | 3,0 | 76 d | −9,9% | +28% | 0,28 |
> | 2420 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+287% · −58,8%** | +59% · −12,9% | +36% | −8,7% | 3,5 | 119 d | −7,6% | +25% | 0,32 |
> | 2421 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+266% · −40,1%** | +54% · −7,3% | +33% | −6,1% | 2,6 | 73 d | −9,0% | +25% | 0,24 |
> | 2422 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+266% · −60,3%** | +57% · −13,5% | +35% | −6,2% | 3,4 | 83 d | −10,0% | +18% | 0,27 |
> | 2423 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+98% · −30,6%** | +28% · −5,6% | +23% | −8,6% | 2,6 | 176 d | −3,2% | +18% | 0,09 |
> | 2424 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+188% · −36,9%** | +50% · −8,7% | +33% | −6,0% | 2,4 | 122 d | −4,4% | +21% | 0,15 |
> | 2425 | GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+186% · −35,2%** | +41% · −7,0% | +26% | −7,5% | 2,4 | 81 d | −7,2% | +21% | 0,07 |
> | 2426 | ADX ·ADX + VWAP ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+257% · −54,6%** | +54% · −10,5% | +33% | −8,9% | 2,3 | 77 d | −7,3% | +23% | 0,33 |
> | 2427 | ADX ·ADX + Pullback ·PUL + Bollinger ·TEN | **+156% · −31,7%** | +54% · −9,9% | +30% | −5,8% | 2,9 | 122 d | −5,8% | +19% | 0,05 |
> | 2428 | GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+227% · −41,6%** | +59% · −10,5% | +38% | −8,1% | 2,7 | 72 d | −9,8% | +27% | 0,26 |
> | 2429 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+158% · −44,9%** | +47% · −11,5% | +31% | −8,5% | 3,0 | 95 d | −7,8% | +19% | 0,18 |
> | 2430 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+183% · −47,5%** | +42% · −10,5% | +27% | −12,7% | 2,2 | 73 d | −7,8% | +21% | 0,31 |

> [!example]- Combinações 2431 a 2460 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2431 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+157% · −37,9%** | +37% · −7,5% | +27% | −5,5% | 2,3 | 104 d | −5,3% | +21% | 0,10 |
> | 2432 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+242% · −54,6%** | +56% · −11,6% | +34% | −10,2% | 2,6 | 80 d | −8,0% | +24% | 0,39 |
> | 2433 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+148% · −39,0%** | +38% · −8,0% | +27% | −10,5% | 2,5 | 81 d | −7,5% | +23% | 0,07 |
> | 2434 | VWAP ·TEN + Donchian ·TEN + Bollinger ·TEN + Tendência ·TEN | **+238% · −46,3%** | +59% · −11,9% | +34% | −7,9% | 3,3 | 81 d | −10,2% | +18% | 0,48 |
> | 2435 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+216% · −38,7%** | +53% · −10,0% | +30% | −11,9% | 2,5 | 73 d | −8,8% | +21% | 0,36 |
> | 2436 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+62% · −32,8%** | +25% · −8,2% | +20% | −8,5% | 2,7 | 179 d | −3,4% | +12% | 0,08 |
> | 2437 | Donchian ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+256% · −39,8%** | +63% · −10,0% | +39% | −8,3% | 3,2 | 83 d | −9,5% | +34% | 0,31 |
> | 2438 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+213% · −40,4%** | +47% · −8,6% | +31% | −10,6% | 3,1 | 120 d | −6,6% | +21% | 0,39 |
> | 2439 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+159% · −30,5%** | +37% · −5,6% | +28% | −7,3% | 2,9 | 146 d | −4,7% | +19% | 0,05 |
> | 2440 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+167% · −39,1%** | +40% · −7,7% | +28% | −9,0% | 2,4 | 91 d | −6,3% | +19% | 0,08 |
> | 2441 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+291% · −48,8%** | +59% · −10,3% | +33% | −8,0% | 2,6 | 77 d | −8,3% | +24% | 0,37 |
> | 2442 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+275% · −67,8%** | +60% · −16,6% | +38% | −9,4% | 3,2 | 106 d | −7,4% | +25% | 0,41 |
> | 2443 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+278% · −71,4%** | +66% · −18,8% | +39% | −7,8% | 2,9 | 73 d | −10,7% | +23% | 0,43 |
> | 2444 | Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+251% · −33,2%** | +58% · −7,4% | +33% | −8,1% | 2,8 | 82 d | −8,3% | +25% | 0,24 |
> | 2445 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+260% · −41,9%** | +63% · −11,3% | +34% | −10,5% | 3,4 | 83 d | −10,2% | +25% | 0,37 |
> | 2446 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+202% · −44,6%** | +43% · −9,6% | +27% | −10,5% | 2,0 | 72 d | −7,4% | +22% | 0,15 |
> | 2447 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+151% · −33,3%** | +38% · −6,4% | +26% | −5,5% | 2,4 | 122 d | −4,2% | +21% | 0,03 |
> | 2448 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+262% · −61,5%** | +60% · −14,6% | +35% | −7,4% | 3,7 | 83 d | −11,1% | +17% | 0,29 |
> | 2449 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+268% · −36,8%** | +53% · −7,4% | +31% | −3,7% | 3,2 | 130 d | −5,9% | +20% | 0,06 |
> | 2450 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+116% · −36,0%** | +36% · −9,1% | +26% | −4,5% | 2,5 | 91 d | −6,7% | +17% | −0,08 |
> | 2451 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+134% · −33,6%** | +34% · −6,4% | +25% | −7,1% | 1,6 | 77 d | −5,7% | +17% | 0,03 |
> | 2452 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+170% · −33,8%** | +45% · −8,3% | +28% | −5,8% | 2,2 | 72 d | −8,2% | +18% | 0,08 |
> | 2453 | ADX ·ADX + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+186% · −32,5%** | +48% · −7,8% | +31% | −5,1% | 2,9 | 122 d | −5,8% | +19% | 0,01 |
> | 2454 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+172% · −48,5%** | +43% · −10,8% | +27% | −9,5% | 3,1 | 102 d | −7,5% | +16% | 0,16 |
> | 2455 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+220% · −35,9%** | +44% · −6,8% | +29% | −6,8% | 2,4 | 95 d | −6,3% | +23% | 0,24 |
> | 2456 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+169% · −34,5%** | +39% · −5,8% | +26% | −3,6% | 2,8 | 122 d | −5,5% | +21% | 0,03 |
> | 2457 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+164% · −32,9%** | +46% · −8,1% | +30% | −8,1% | 2,5 | 83 d | −7,3% | +25% | 0,10 |
> | 2458 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+213% · −51,9%** | +47% · −10,3% | +30% | −4,9% | 2,9 | 122 d | −5,8% | +19% | 0,07 |
> | 2459 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+223% · −41,2%** | +46% · −8,4% | +30% | −6,7% | 2,7 | 82 d | −8,2% | +27% | 0,16 |
> | 2460 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+199% · −51,5%** | +54% · −14,8% | +35% | −11,6% | 2,5 | 73 d | −9,0% | +23% | 0,36 |

> [!example]- Combinações 2461 a 2490 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2461 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+148% · −30,6%** | +35% · −5,5% | +24% | −8,4% | 2,8 | 172 d | −4,0% | +17% | 0,11 |
> | 2462 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+148% · −30,5%** | +53% · −10,3% | +34% | −8,7% | 2,3 | 72 d | −8,5% | +23% | 0,21 |
> | 2463 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+231% · −47,8%** | +51% · −9,4% | +32% | −5,2% | 2,0 | 67 d | −8,0% | +23% | 0,25 |
> | 2464 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+310% · −61,8%** | +65% · −13,8% | +37% | −5,8% | 3,7 | 119 d | −8,2% | +24% | 0,18 |
> | 2465 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+86% · −24,9%** | +30% · −6,1% | +24% | −9,5% | 2,6 | 174 d | −3,3% | +16% | 0,04 |
> | 2466 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+173% · −42,1%** | +49% · −10,8% | +30% | −4,9% | 3,1 | 122 d | −6,4% | +22% | 0,01 |
> | 2467 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+199% · −51,9%** | +45% · −10,6% | +31% | −7,7% | 2,5 | 83 d | −7,5% | +22% | 0,28 |
> | 2468 | Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+82% · −17,7%** | +28% · −4,2% | +23% | −3,9% | 2,7 | 171 d | −3,9% | +19% | −0,01 |
> | 2469 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+135% · −36,2%** | +35% · −7,1% | +25% | −8,2% | 1,6 | 73 d | −6,3% | +18% | 0,09 |
> | 2470 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+253% · −62,8%** | +53% · −14,5% | +31% | −6,1% | 2,4 | 74 d | −8,6% | +21% | 0,19 |
> | 2471 | VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+166% · −35,6%** | +38% · −6,9% | +26% | −5,6% | 2,5 | 100 d | −6,1% | +17% | 0,18 |
> | 2472 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Tendência ·TEN | **+218% · −58,8%** | +63% · −16,5% | +37% | −10,5% | 3,3 | 75 d | −12,8% | +18% | 0,49 |
> | 2473 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+161% · −30,8%** | +38% · −5,6% | +28% | −7,2% | 2,9 | 182 d | −4,4% | +18% | 0,08 |
> | 2474 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+198% · −33,0%** | +41% · −5,7% | +28% | −7,9% | 1,9 | 92 d | −5,1% | +15% | 0,12 |
> | 2475 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+223% · −31,9%** | +45% · −5,8% | +30% | −8,0% | 3,1 | 139 d | −5,5% | +21% | 0,18 |
> | 2476 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+249% · −63,2%** | +58% · −15,0% | +34% | −5,1% | 2,9 | 80 d | −9,4% | +21% | 0,25 |
> | 2477 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+196% · −38,1%** | +45% · −7,8% | +30% | −8,5% | 2,1 | 72 d | −7,8% | +22% | 0,23 |
> | 2478 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+109% · −15,5%** | +40% · −4,2% | +25% | −4,0% | 2,1 | 102 d | −4,7% | +15% | 0,13 |
> | 2479 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+193% · −40,8%** | +41% · −7,7% | +26% | −5,2% | 2,0 | 112 d | −3,7% | +20% | 0,10 |
> | 2480 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+184% · −38,4%** | +41% · −7,0% | +26% | −6,1% | 2,6 | 122 d | −5,1% | +17% | 0,17 |
> | 2481 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+253% · −41,6%** | +52% · −8,7% | +32% | −6,5% | 3,3 | 111 d | −7,7% | +21% | 0,13 |
> | 2482 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+120% · −33,8%** | +37% · −7,7% | +26% | −5,0% | 2,6 | 88 d | −7,3% | +16% | 0,06 |
> | 2483 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+186% · −46,3%** | +41% · −8,8% | +27% | −4,2% | 2,6 | 80 d | −8,3% | +17% | 0,10 |
> | 2484 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+157% · −44,9%** | +37% · −9,7% | +27% | −7,1% | 2,3 | 105 d | −5,4% | +20% | 0,18 |
> | 2485 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+305% · −50,1%** | +58% · −9,6% | +34% | −5,0% | 2,1 | 67 d | −8,6% | +26% | 0,30 |
> | 2486 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+173% · −47,4%** | +41% · −10,4% | +28% | −13,3% | 1,9 | 73 d | −7,0% | +24% | 0,19 |
> | 2487 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+151% · −26,9%** | +41% · −6,2% | +27% | −7,2% | 3,0 | 129 d | −5,6% | +18% | 0,15 |
> | 2488 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+207% · −40,1%** | +54% · −10,1% | +30% | −4,6% | 2,3 | 67 d | −9,3% | +25% | 0,14 |
> | 2489 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+264% · −51,4%** | +58% · −10,5% | +33% | −6,4% | 3,0 | 110 d | −7,2% | +26% | 0,17 |
> | 2490 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+139% · −29,5%** | +34% · −5,3% | +26% | −7,9% | 2,7 | 137 d | −4,4% | +17% | 0,11 |

> [!example]- Combinações 2491 a 2520 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2491 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+145% · −44,3%** | +36% · −9,5% | +25% | −6,8% | 2,9 | 129 d | −5,4% | +13% | 0,11 |
> | 2492 | VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+194% · −40,8%** | +42% · −8,1% | +29% | −8,9% | 2,5 | 105 d | −6,1% | +20% | 0,37 |
> | 2493 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+245% · −44,4%** | +51% · −8,0% | +31% | −5,2% | 3,1 | 128 d | −6,0% | +22% | 0,15 |
> | 2494 | ADX ·ADX + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+191% · −39,4%** | +49% · −9,5% | +29% | −5,5% | 1,6 | 75 d | −6,1% | +20% | 0,21 |
> | 2495 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+161% · −38,5%** | +45% · −9,3% | +30% | −6,4% | 1,4 | 67 d | −6,8% | +20% | 0,08 |
> | 2496 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+169% · −30,9%** | +45% · −7,7% | +28% | −5,1% | 2,6 | 80 d | −8,5% | +18% | 0,13 |
> | 2497 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+203% · −33,9%** | +42% · −6,3% | +28% | −4,2% | 2,8 | 130 d | −5,0% | +18% | −0,00 |
> | 2498 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+158% · −37,1%** | +39% · −7,1% | +29% | −7,3% | 2,9 | 138 d | −4,9% | +22% | 0,12 |
> | 2499 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+166% · −26,9%** | +37% · −4,7% | +25% | −5,5% | 2,9 | 142 d | −4,9% | +16% | 0,09 |
> | 2500 | MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+200% · −34,9%** | +41% · −6,5% | +28% | −9,1% | 1,9 | 90 d | −5,3% | +16% | 0,22 |
> | 2501 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+144% · −35,7%** | +43% · −8,3% | +29% | −7,9% | 2,5 | 80 d | −7,9% | +23% | 0,12 |
> | 2502 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+166% · −37,0%** | +38% · −6,1% | +25% | −5,4% | 2,5 | 85 d | −7,3% | +18% | 0,06 |
> | 2503 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+237% · −46,1%** | +49% · −9,3% | +30% | −9,6% | 1,5 | 67 d | −6,8% | +19% | 0,37 |
> | 2504 | ADX ·ADX + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+200% · −35,1%** | +51% · −8,9% | +31% | −6,9% | 2,6 | 122 d | −5,3% | +21% | 0,09 |
> | 2505 | ADX ·ADX + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+213% · −34,5%** | +55% · −8,6% | +35% | −7,1% | 2,8 | 122 d | −5,8% | +22% | 0,11 |
> | 2506 | BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+170% · −53,0%** | +42% · −11,3% | +30% | −7,3% | 2,6 | 81 d | −8,4% | +21% | 0,20 |
> | 2507 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+191% · −42,3%** | +45% · −8,2% | +28% | −5,6% | 2,2 | 77 d | −7,3% | +26% | 0,09 |
> | 2508 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+217% · −44,2%** | +46% · −8,0% | +29% | −7,0% | 2,6 | 122 d | −5,2% | +17% | 0,21 |
> | 2509 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+128% · −39,9%** | +35% · −7,3% | +25% | −7,5% | 2,2 | 80 d | −7,1% | +16% | 0,06 |
> | 2510 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+172% · −38,3%** | +40% · −8,3% | +28% | −8,8% | 2,9 | 129 d | −5,5% | +18% | 0,12 |
> | 2511 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR | **+179% · −32,8%** | +49% · −8,3% | +31% | −8,3% | 3,4 | 128 d | −6,8% | +18% | 0,17 |
> | 2512 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+239% · −49,9%** | +54% · −10,1% | +30% | −4,4% | 3,1 | 119 d | −7,0% | +22% | 0,10 |
> | 2513 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+272% · −48,6%** | +60% · −10,2% | +37% | −8,4% | 2,5 | 76 d | −8,6% | +30% | 0,31 |
> | 2514 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+175% · −49,3%** | +44% · −10,1% | +28% | −7,1% | 2,7 | 77 d | −9,1% | +18% | 0,15 |
> | 2515 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+269% · −50,4%** | +56% · −10,2% | +32% | −4,4% | 3,7 | 128 d | −7,4% | +21% | 0,06 |
> | 2516 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+217% · −61,7%** | +53% · −14,6% | +33% | −7,7% | 2,5 | 80 d | −8,3% | +20% | 0,32 |
> | 2517 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+144% · −38,0%** | +42% · −9,9% | +25% | −10,5% | 2,2 | 73 d | −8,0% | +18% | 0,13 |
> | 2518 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+103% · −21,3%** | +32% · −4,4% | +25% | −7,0% | 1,7 | 87 d | −4,9% | +17% | 0,09 |
> | 2519 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Tendência ·TEN | **+327% · −55,7%** | +77% · −15,0% | +44% | −8,7% | 4,2 | 119 d | −9,2% | +27% | 0,41 |
> | 2520 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+199% · −58,6%** | +48% · −13,5% | +31% | −4,3% | 3,0 | 81 d | −9,8% | +16% | 0,08 |

> [!example]- Combinações 2521 a 2550 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2521 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+231% · −61,9%** | +51% · −14,3% | +33% | −6,0% | 2,1 | 72 d | −8,0% | +23% | 0,13 |
> | 2522 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+162% · −40,6%** | +46% · −10,0% | +30% | −7,4% | 1,4 | 67 d | −6,8% | +21% | 0,18 |
> | 2523 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+209% · −65,4%** | +49% · −15,9% | +31% | −6,6% | 3,2 | 120 d | −7,2% | +16% | 0,19 |
> | 2524 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+215% · −30,5%** | +52% · −7,1% | +33% | −7,4% | 3,3 | 92 d | −9,1% | +25% | 0,11 |
> | 2525 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+236% · −68,5%** | +53% · −17,3% | +34% | −7,9% | 3,2 | 120 d | −7,2% | +21% | 0,21 |
> | 2526 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+307% · −48,8%** | +63% · −9,7% | +38% | −8,1% | 3,1 | 122 d | −6,6% | +25% | 0,33 |
> | 2527 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+195% · −56,7%** | +46% · −12,2% | +33% | −8,6% | 2,7 | 78 d | −8,9% | +26% | 0,21 |
> | 2528 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+150% · −44,7%** | +38% · −8,8% | +27% | −7,0% | 3,1 | 120 d | −6,9% | +15% | 0,07 |
> | 2529 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+172% · −50,4%** | +43% · −10,5% | +28% | −7,1% | 2,8 | 83 d | −8,7% | +17% | 0,18 |
> | 2530 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+238% · −38,3%** | +48% · −7,5% | +29% | −4,7% | 2,5 | 122 d | −5,0% | +16% | 0,19 |
> | 2531 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+218% · −63,9%** | +52% · −15,1% | +34% | −7,4% | 3,0 | 76 d | −10,9% | +19% | 0,26 |
> | 2532 | Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+268% · −44,8%** | +54% · −8,9% | +31% | −8,7% | 2,9 | 83 d | −8,9% | +26% | 0,22 |
> | 2533 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+135% · −29,4%** | +38% · −5,6% | +25% | −2,2% | 2,8 | 120 d | −6,3% | +17% | −0,03 |
> | 2534 | GPS médias ·TEN + Pôr do sol ·POR | **+77% · −21,6%** | +44% · −10,3% | +27% | −7,2% | 2,6 | 73 d | −9,6% | +17% | −0,23 |
> | 2535 | ADX ·ADX + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+186% · −44,8%** | +52% · −11,2% | +34% | −9,9% | 2,5 | 106 d | −6,0% | +29% | 0,19 |
> | 2536 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+192% · −50,0%** | +48% · −11,0% | +30% | −13,2% | 2,9 | 83 d | −8,9% | +19% | 0,36 |
> | 2537 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+258% · −54,3%** | +55% · −10,4% | +35% | −7,3% | 2,0 | 67 d | −8,3% | +26% | 0,31 |
> | 2538 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+261% · −52,4%** | +58% · −10,9% | +33% | −6,4% | 3,2 | 102 d | −8,0% | +26% | 0,18 |
> | 2539 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+218% · −47,9%** | +50% · −10,5% | +31% | −8,9% | 2,4 | 72 d | −9,3% | +21% | 0,30 |
> | 2540 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+132% · −42,8%** | +35% · −8,9% | +25% | −11,7% | 2,3 | 95 d | −6,0% | +20% | 0,15 |
> | 2541 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+239% · −38,5%** | +58% · −8,4% | +31% | −4,3% | 2,7 | 106 d | −6,6% | +20% | 0,11 |
> | 2542 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN + Onda ·OND ⚠️ | **+218% · −50,6%** | +48% · −9,9% | +33% | −6,7% | 2,7 | 81 d | −8,7% | +26% | 0,15 |
> | 2543 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+314% · −36,1%** | +56% · −6,8% | +31% | −4,1% | 3,0 | 105 d | −7,6% | +22% | 0,13 |
> | 2544 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL | **+184% · −47,9%** | +53% · −13,3% | +31% | −10,9% | 3,5 | 102 d | −9,0% | +15% | 0,24 |
> | 2545 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+213% · −39,6%** | +45% · −8,1% | +29% | −7,9% | 2,5 | 78 d | −8,4% | +21% | 0,29 |
> | 2546 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+233% · −62,9%** | +55% · −15,2% | +34% | −7,1% | 3,4 | 83 d | −10,5% | +18% | 0,39 |
> | 2547 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+206% · −54,4%** | +56% · −14,8% | +37% | −9,8% | 3,1 | 83 d | −9,7% | +23% | 0,47 |
> | 2548 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+167% · −46,8%** | +39% · −10,3% | +26% | −8,8% | 2,2 | 72 d | −8,4% | +18% | 0,13 |
> | 2549 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+157% · −34,4%** | +37% · −6,5% | +24% | −5,5% | 1,7 | 73 d | −6,9% | +18% | 0,10 |
> | 2550 | BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN | **+128% · −52,5%** | +49% · −19,6% | +34% | −7,1% | 3,1 | 76 d | −11,6% | +12% | 0,16 |

> [!example]- Combinações 2551 a 2580 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2551 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+343% · −61,1%** | +65% · −13,6% | +37% | −7,0% | 3,5 | 83 d | −11,3% | +19% | 0,43 |
> | 2552 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+138% · −30,5%** | +34% · −5,5% | +22% | −3,9% | 2,4 | 85 d | −7,1% | +14% | 0,02 |
> | 2553 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+252% · −51,6%** | +55% · −11,4% | +35% | −10,5% | 2,9 | 83 d | −9,0% | +28% | 0,37 |
> | 2554 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+258% · −55,2%** | +58% · −12,0% | +33% | −7,3% | 3,0 | 102 d | −7,7% | +25% | 0,29 |
> | 2555 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+177% · −32,6%** | +48% · −8,3% | +31% | −8,3% | 3,4 | 120 d | −7,8% | +19% | 0,16 |
> | 2556 | Donchian ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+204% · −39,6%** | +55% · −10,3% | +35% | −9,1% | 2,9 | 83 d | −9,0% | +27% | 0,31 |
> | 2557 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+288% · −59,8%** | +60% · −12,9% | +34% | −7,3% | 2,5 | 76 d | −8,9% | +23% | 0,39 |
> | 2558 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+264% · −58,2%** | +59% · −12,2% | +36% | −7,5% | 2,2 | 67 d | −9,3% | +26% | 0,34 |
> | 2559 | BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+286% · −50,9%** | +56% · −10,2% | +35% | −8,4% | 2,9 | 80 d | −9,9% | +27% | 0,33 |
> | 2560 | VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+204% · −39,9%** | +45% · −8,3% | +28% | −11,2% | 2,5 | 83 d | −7,8% | +22% | 0,27 |
> | 2561 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+327% · −38,5%** | +60% · −7,9% | +35% | −4,1% | 3,5 | 122 d | −7,7% | +22% | 0,13 |
> | 2562 | Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+102% · −25,4%** | +40% · −8,1% | +25% | −4,2% | 2,9 | 111 d | −7,0% | +15% | 0,04 |
> | 2563 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+294% · −62,2%** | +57% · −14,4% | +34% | −5,5% | 3,5 | 83 d | −11,1% | +15% | 0,26 |
> | 2564 | 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+119% · −21,7%** | +36% · −4,8% | +27% | −5,8% | 2,3 | 101 d | −5,8% | +20% | −0,06 |
> | 2565 | VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+174% · −42,4%** | +51% · −11,6% | +33% | −12,8% | 2,6 | 75 d | −9,4% | +28% | 0,32 |
> | 2566 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+242% · −51,4%** | +54% · −12,0% | +34% | −11,3% | 2,4 | 72 d | −9,4% | +26% | 0,34 |
> | 2567 | Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+104% · −24,6%** | +40% · −7,7% | +25% | −4,2% | 2,7 | 103 d | −6,8% | +17% | −0,00 |
> | 2568 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+201% · −53,1%** | +44% · −10,9% | +27% | −4,5% | 2,5 | 94 d | −6,9% | +18% | 0,07 |
> | 2569 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+166% · −33,1%** | +46% · −8,2% | +30% | −8,0% | 2,3 | 91 d | −6,5% | +24% | 0,14 |
> | 2570 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+176% · −48,7%** | +43% · −10,8% | +28% | −6,5% | 2,4 | 72 d | −9,3% | +18% | 0,02 |
> | 2571 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+290% · −58,3%** | +58% · −12,7% | +36% | −7,4% | 3,7 | 127 d | −7,6% | +26% | 0,22 |
> | 2572 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+110% · −40,0%** | +30% · −8,4% | +23% | −7,8% | 2,3 | 111 d | −5,4% | +18% | 0,09 |
> | 2573 | Donchian ·TEN + Bollinger ·TEN + Onda ·OND | **+183% · −26,8%** | +60% · −8,6% | +33% | −8,3% | 2,9 | 83 d | −9,2% | +27% | 0,21 |
> | 2574 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+182% · −39,2%** | +46% · −10,3% | +29% | −4,7% | 3,2 | 92 d | −9,0% | +19% | 0,13 |
> | 2575 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+205% · −42,6%** | +44% · −8,2% | +27% | −7,5% | 1,4 | 72 d | −6,6% | +19% | 0,27 |
> | 2576 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+199% · −41,2%** | +45% · −7,7% | +30% | −6,2% | 1,2 | 71 d | −6,5% | +17% | 0,08 |
> | 2577 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+239% · −63,3%** | +57% · −14,9% | +35% | −8,8% | 2,5 | 78 d | −8,6% | +26% | 0,41 |
> | 2578 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+206% · −45,5%** | +46% · −9,0% | +28% | −4,1% | 1,8 | 72 d | −7,5% | +23% | 0,04 |
> | 2579 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+196% · −36,9%** | +53% · −9,5% | +32% | −9,3% | 3,3 | 102 d | −8,7% | +25% | 0,14 |
> | 2580 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+136% · −30,0%** | +35% · −5,7% | +26% | −8,7% | 2,3 | 125 d | −4,3% | +21% | 0,11 |

> [!example]- Combinações 2581 a 2610 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2581 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+144% · −45,4%** | +38% · −9,9% | +27% | −11,9% | 2,4 | 81 d | −8,0% | +22% | 0,20 |
> | 2582 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+159% · −39,6%** | +40% · −7,7% | +30% | −10,0% | 2,1 | 94 d | −5,7% | +24% | 0,20 |
> | 2583 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+188% · −30,9%** | +48% · −6,6% | +31% | −7,9% | 2,4 | 72 d | −9,2% | +24% | 0,15 |
> | 2584 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+187% · −45,6%** | +44% · −9,9% | +30% | −12,6% | 2,2 | 72 d | −8,5% | +26% | 0,18 |
> | 2585 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+214% · −63,8%** | +49% · −15,2% | +31% | −5,9% | 3,3 | 128 d | −6,8% | +19% | 0,06 |
> | 2586 | VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+202% · −51,4%** | +48% · −11,3% | +32% | −9,8% | 2,6 | 83 d | −8,3% | +24% | 0,36 |
> | 2587 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+180% · −33,4%** | +41% · −6,4% | +29% | −8,9% | 2,2 | 114 d | −4,8% | +21% | 0,09 |
> | 2588 | Donchian ·TEN + GPS médias ·TEN + Tendência ·TEN | **+222% · −49,9%** | +76% · −18,1% | +43% | −7,7% | 3,9 | 82 d | −15,0% | +21% | 0,47 |
> | 2589 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+176% · −36,9%** | +49% · −9,6% | +31% | −9,4% | 3,2 | 120 d | −7,3% | +17% | 0,36 |
> | 2590 | 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+120% · −29,9%** | +36% · −7,2% | +27% | −7,3% | 2,2 | 99 d | −5,8% | +21% | 0,15 |
> | 2591 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+170% · −49,1%** | +41% · −11,0% | +28% | −14,1% | 1,9 | 73 d | −7,4% | +23% | 0,29 |
> | 2592 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+119% · −43,0%** | +39% · −11,6% | +27% | −15,0% | 2,1 | 73 d | −8,0% | +20% | 0,30 |
> | 2593 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+194% · −41,0%** | +43% · −8,3% | +29% | −11,6% | 2,2 | 73 d | −8,5% | +21% | 0,19 |
> | 2594 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+229% · −46,3%** | +48% · −10,3% | +30% | −10,4% | 2,0 | 67 d | −8,6% | +21% | 0,34 |
> | 2595 | Donchian ·TEN + IFR ·TEN + Onda ·OND | **+194% · −30,1%** | +65% · −10,2% | +39% | −7,9% | 3,2 | 91 d | −9,3% | +29% | 0,33 |
> | 2596 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+198% · −35,1%** | +40% · −5,8% | +27% | −2,3% | 2,6 | 92 d | −7,5% | +21% | −0,04 |
> | 2597 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+191% · −43,2%** | +50% · −10,1% | +32% | −6,6% | 3,4 | 131 d | −6,7% | +23% | −0,01 |
> | 2598 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN | **+202% · −44,7%** | +72% · −16,2% | +40% | −6,4% | 2,9 | 77 d | −10,2% | +30% | 0,42 |
> | 2599 | GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+118% · −28,2%** | +37% · −6,5% | +26% | −6,9% | 2,3 | 81 d | −7,5% | +20% | −0,05 |
> | 2600 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+116% · −23,0%** | +30% · −3,7% | +21% | −5,8% | 2,7 | 171 d | −4,3% | +15% | 0,04 |
> | 2601 | Rompe 200 ·ROM | **+20% · −10,4%** | +20% · −10,4% | +17% | −10,7% | 1,2 | 94 d | −3,3% | +11% | — |
> | 2602 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+188% · −39,2%** | +41% · −7,9% | +27% | −8,2% | 1,8 | 73 d | −7,1% | +18% | 0,15 |
> | 2603 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+221% · −49,8%** | +49% · −10,7% | +30% | −11,2% | 2,5 | 74 d | −9,6% | +22% | 0,18 |
> | 2604 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+235% · −60,7%** | +52% · −13,7% | +33% | −5,9% | 2,0 | 72 d | −8,1% | +24% | 0,15 |
> | 2605 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+251% · −52,8%** | +55% · −10,9% | +33% | −6,6% | 3,0 | 122 d | −6,6% | +22% | 0,22 |
> | 2606 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+147% · −45,2%** | +37% · −9,9% | +25% | −10,5% | 1,9 | 73 d | −7,4% | +21% | 0,15 |
> | 2607 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+255% · −65,9%** | +56% · −15,9% | +36% | −8,3% | 2,0 | 67 d | −8,9% | +27% | 0,33 |
> | 2608 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+211% · −35,7%** | +45% · −7,2% | +29% | −6,5% | 2,4 | 80 d | −8,1% | +23% | 0,11 |
> | 2609 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+246% · −50,9%** | +51% · −9,7% | +34% | −6,2% | 3,0 | 125 d | −6,5% | +23% | 0,18 |
> | 2610 | VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+92% · −23,4%** | +37% · −7,8% | +27% | −10,0% | 2,7 | 129 d | −5,4% | +17% | 0,30 |

> [!example]- Combinações 2611 a 2640 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2611 | Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+140% · −29,7%** | +41% · −7,3% | +27% | −6,7% | 2,2 | 91 d | −6,4% | +24% | 0,07 |
> | 2612 | VWAP ·TEN + GPS médias ·TEN + Tendência ·TEN | **+144% · −47,3%** | +56% · −16,9% | +35% | −11,9% | 2,9 | 75 d | −11,0% | +18% | 0,45 |
> | 2613 | Donchian ·TEN + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+249% · −50,3%** | +68% · −13,3% | +40% | −8,5% | 3,5 | 83 d | −11,8% | +29% | 0,37 |
> | 2614 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+153% · −53,1%** | +39% · −11,2% | +28% | −7,1% | 2,5 | 83 d | −7,9% | +18% | 0,18 |
> | 2615 | VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+106% · −29,4%** | +33% · −7,0% | +23% | −9,8% | 2,7 | 155 d | −4,8% | +14% | 0,17 |
> | 2616 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+187% · −45,3%** | +48% · −9,8% | +30% | −11,4% | 2,5 | 76 d | −9,2% | +25% | 0,14 |
> | 2617 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+247% · −50,3%** | +52% · −9,7% | +34% | −7,2% | 2,8 | 122 d | −6,1% | +21% | 0,21 |
> | 2618 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+253% · −50,5%** | +51% · −9,7% | +30% | −4,6% | 2,0 | 72 d | −8,1% | +22% | 0,15 |
> | 2619 | Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+73% · −20,6%** | +32% · −6,2% | +25% | −6,9% | 2,2 | 101 d | −5,6% | +24% | 0,19 |
> | 2620 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+193% · −40,9%** | +54% · −10,2% | +32% | −10,4% | 3,3 | 95 d | −9,2% | +22% | 0,32 |
> | 2621 | Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+119% · −20,0%** | +43% · −6,2% | +28% | −6,4% | 2,7 | 100 d | −7,3% | +23% | 0,04 |
> | 2622 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+159% · −33,6%** | +43% · −8,3% | +27% | −4,6% | 2,3 | 72 d | −9,1% | +22% | 0,08 |
> | 2623 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+174% · −47,8%** | +43% · −10,6% | +27% | −9,6% | 3,0 | 102 d | −7,9% | +17% | 0,16 |
> | 2624 | VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+181% · −49,5%** | +46% · −10,8% | +31% | −11,1% | 2,5 | 76 d | −9,3% | +25% | 0,31 |
> | 2625 | ADX ·ADX + Donchian ·TEN + Bollinger ·TEN + Onda ·OND | **+264% · −42,6%** | +64% · −9,7% | +35% | −6,4% | 2,7 | 97 d | −7,3% | +23% | 0,22 |
> | 2626 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+303% · −62,5%** | +59% · −14,4% | +35% | −6,7% | 2,1 | 67 d | −9,2% | +24% | 0,33 |
> | 2627 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+244% · −72,3%** | +59% · −18,7% | +35% | −6,3% | 2,9 | 75 d | −11,0% | +19% | 0,25 |
> | 2628 | ADX ·ADX + GPS médias ·TEN + Tendência ·TEN | **+205% · −53,9%** | +73% · −19,7% | +42% | −8,9% | 2,9 | 76 d | −11,1% | +27% | 0,36 |
> | 2629 | VWAP ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+144% · −37,6%** | +43% · −9,4% | +32% | −9,7% | 2,9 | 131 d | −5,7% | +25% | 0,22 |
> | 2630 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+205% · −44,9%** | +44% · −9,7% | +27% | −10,7% | 1,9 | 73 d | −7,6% | +23% | 0,19 |
> | 2631 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+270% · −45,2%** | +52% · −8,9% | +32% | −7,1% | 1,4 | 66 d | −7,4% | +17% | 0,27 |
> | 2632 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pullback ·PUL | **+282% · −41,4%** | +66% · −9,9% | +38% | −5,0% | 3,6 | 128 d | −7,6% | +23% | 0,16 |
> | 2633 | MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+140% · −24,6%** | +39% · −5,4% | +26% | −7,4% | 1,8 | 98 d | −4,8% | +16% | 0,13 |
> | 2634 | ADX ·ADX + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+189% · −45,2%** | +52% · −10,1% | +34% | −8,7% | 2,5 | 122 d | −5,5% | +25% | 0,09 |
> | 2635 | VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+168% · −35,0%** | +38% · −6,7% | +26% | −5,8% | 2,4 | 100 d | −6,3% | +18% | 0,19 |
> | 2636 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+255% · −43,5%** | +54% · −8,4% | +33% | −6,3% | 2,1 | 65 d | −9,8% | +25% | 0,21 |
> | 2637 | Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+253% · −44,6%** | +63% · −11,1% | +34% | −9,5% | 2,8 | 74 d | −10,9% | +31% | 0,25 |
> | 2638 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+158% · −35,6%** | +37% · −6,1% | +23% | −3,8% | 1,9 | 122 d | −2,9% | +18% | 0,05 |
> | 2639 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+118% · −29,2%** | +30% · −5,3% | +21% | −7,4% | 2,6 | 176 d | −4,3% | +15% | 0,08 |
> | 2640 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+254% · −64,2%** | +59% · −15,5% | +37% | −9,0% | 3,3 | 83 d | −11,0% | +23% | 0,46 |

> [!example]- Combinações 2641 a 2670 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2641 | VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+177% · −47,2%** | +42% · −10,2% | +30% | −10,7% | 2,1 | 94 d | −5,8% | +26% | 0,29 |
> | 2642 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+104% · −23,6%** | +32% · −5,3% | +23% | −7,8% | 2,7 | 169 d | −4,8% | +15% | 0,05 |
> | 2643 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+143% · −64,4%** | +39% · −13,6% | +28% | −8,1% | 2,6 | 78 d | −9,3% | +12% | 0,27 |
> | 2644 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+101% · −19,3%** | +32% · −3,8% | +24% | −5,7% | 1,5 | 87 d | −4,9% | +16% | 0,05 |
> | 2645 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+202% · −46,7%** | +44% · −10,3% | +27% | −11,5% | 1,9 | 72 d | −7,9% | +21% | 0,28 |
> | 2646 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+103% · −37,9%** | +34% · −9,0% | +25% | −5,9% | 2,4 | 91 d | −7,3% | +16% | −0,01 |
> | 2647 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+358% · −55,2%** | +64% · −11,3% | +38% | −5,6% | 4,2 | 128 d | −8,7% | +25% | 0,15 |
> | 2648 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+136% · −46,0%** | +37% · −9,2% | +25% | −4,6% | 2,5 | 82 d | −8,3% | +15% | −0,02 |
> | 2649 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Onda ·OND | **+197% · −39,5%** | +55% · −10,3% | +34% | −11,0% | 2,8 | 91 d | −8,5% | +22% | 0,37 |
> | 2650 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+294% · −54,2%** | +63% · −11,6% | +38% | −7,8% | 2,3 | 67 d | −9,9% | +28% | 0,27 |
> | 2651 | VWAP ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+202% · −37,7%** | +50% · −9,5% | +32% | −9,0% | 2,5 | 92 d | −7,3% | +23% | 0,40 |
> | 2652 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + MACD ·TEN | **+274% · −45,7%** | +68% · −10,6% | +39% | −7,3% | 3,2 | 119 d | −7,9% | +24% | 0,40 |
> | 2653 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+272% · −49,4%** | +57% · −9,8% | +32% | −4,4% | 3,5 | 128 d | −7,4% | +22% | 0,04 |
> | 2654 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+142% · −37,5%** | +42% · −8,9% | +29% | −7,9% | 2,5 | 91 d | −7,5% | +21% | 0,16 |
> | 2655 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+166% · −48,3%** | +42% · −9,9% | +30% | −10,1% | 2,3 | 76 d | −8,6% | +22% | 0,22 |
> | 2656 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+194% · −61,6%** | +48% · −14,9% | +31% | −5,6% | 3,0 | 81 d | −10,3% | +14% | 0,25 |
> | 2657 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+165% · −53,9%** | +41% · −12,5% | +29% | −8,5% | 2,1 | 72 d | −8,5% | +18% | 0,18 |
> | 2658 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+297% · −53,5%** | +62% · −11,2% | +37% | −7,3% | 2,1 | 67 d | −9,3% | +27% | 0,27 |
> | 2659 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+218% · −38,1%** | +56% · −9,2% | +32% | −7,6% | 3,1 | 83 d | −10,2% | +25% | 0,08 |
> | 2660 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+209% · −33,2%** | +53% · −8,1% | +33% | −4,1% | 2,4 | 122 d | −5,1% | +20% | 0,10 |
> | 2661 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+179% · −47,0%** | +43% · −10,3% | +28% | −6,5% | 2,3 | 72 d | −9,4% | +19% | 0,02 |
> | 2662 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Bollinger ·TEN | **+271% · −45,7%** | +64% · −10,6% | +35% | −6,2% | 2,9 | 105 d | −7,7% | +23% | 0,34 |
> | 2663 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+120% · −23,2%** | +31% · −4,1% | +25% | −4,9% | 2,5 | 219 d | −3,5% | +20% | −0,01 |
> | 2664 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+138% · −30,2%** | +35% · −5,7% | +26% | −8,7% | 2,3 | 126 d | −4,5% | +20% | 0,14 |
> | 2665 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+143% · −39,6%** | +41% · −10,3% | +30% | −7,5% | 2,4 | 107 d | −6,1% | +22% | 0,11 |
> | 2666 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+234% · −46,0%** | +50% · −9,9% | +30% | −7,2% | 2,8 | 77 d | −10,1% | +19% | 0,19 |
> | 2667 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+265% · −50,2%** | +54% · −9,5% | +34% | −4,7% | 2,8 | 122 d | −6,2% | +24% | 0,14 |
> | 2668 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+242% · −37,3%** | +58% · −8,4% | +31% | −3,8% | 2,7 | 106 d | −7,0% | +19% | 0,08 |
> | 2669 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+204% · −46,7%** | +46% · −9,4% | +29% | −4,6% | 1,9 | 72 d | −7,9% | +24% | 0,10 |
> | 2670 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+288% · −51,2%** | +57% · −11,4% | +33% | −9,0% | 2,4 | 72 d | −9,9% | +23% | 0,31 |

> [!example]- Combinações 2671 a 2700 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2671 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+126% · −44,7%** | +35% · −8,8% | +25% | −8,4% | 2,2 | 80 d | −7,6% | +14% | 0,17 |
> | 2672 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+125% · −33,0%** | +37% · −8,0% | +28% | −12,8% | 2,5 | 107 d | −6,4% | +19% | 0,15 |
> | 2673 | BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+163% · −40,0%** | +47% · −9,8% | +32% | −7,1% | 2,8 | 96 d | −8,0% | +25% | 0,15 |
> | 2674 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+196% · −41,4%** | +44% · −8,4% | +29% | −11,8% | 2,1 | 72 d | −8,8% | +20% | 0,23 |
> | 2675 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+248% · −38,1%** | +61% · −9,4% | +35% | −4,9% | 3,2 | 127 d | −7,1% | +22% | 0,14 |
> | 2676 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+201% · −41,6%** | +45% · −7,7% | +30% | −6,2% | 1,2 | 71 d | −6,8% | +17% | 0,14 |
> | 2677 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+166% · −46,1%** | +41% · −9,9% | +28% | −10,5% | 2,7 | 120 d | −6,3% | +21% | 0,23 |
> | 2678 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+284% · −69,3%** | +68% · −17,8% | +39% | −7,5% | 3,6 | 83 d | −13,0% | +19% | 0,50 |
> | 2679 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+195% · −51,9%** | +48% · −10,9% | +31% | −9,4% | 2,8 | 83 d | −9,2% | +22% | 0,21 |
> | 2680 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+199% · −43,2%** | +45% · −8,3% | +31% | −7,4% | 1,2 | 71 d | −6,8% | +18% | 0,19 |
> | 2681 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+212% · −49,5%** | +48% · −11,2% | +32% | −8,6% | 3,2 | 120 d | −7,8% | +22% | 0,33 |
> | 2682 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+288% · −50,9%** | +57% · −11,6% | +32% | −12,2% | 2,5 | 82 d | −8,5% | +22% | 0,34 |
> | 2683 | VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+143% · −45,3%** | +42% · −12,5% | +30% | −9,4% | 2,3 | 105 d | −6,2% | +20% | 0,30 |
> | 2684 | BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+235% · −52,6%** | +49% · −10,7% | +32% | −6,9% | 2,6 | 76 d | −9,7% | +23% | 0,19 |
> | 2685 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+247% · −61,5%** | +56% · −14,3% | +34% | −6,6% | 3,2 | 122 d | −7,3% | +20% | 0,23 |
> | 2686 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+273% · −48,4%** | +53% · −9,9% | +30% | −4,7% | 2,0 | 72 d | −8,5% | +23% | 0,15 |
> | 2687 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+214% · −54,1%** | +51% · −11,7% | +33% | −8,2% | 2,7 | 76 d | −10,4% | +25% | 0,21 |
> | 2688 | Donchian ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+219% · −37,5%** | +70% · −13,2% | +41% | −7,3% | 3,8 | 98 d | −10,9% | +26% | 0,33 |
> | 2689 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+245% · −52,2%** | +58% · −10,7% | +33% | −7,5% | 2,6 | 78 d | −9,4% | +29% | 0,24 |
> | 2690 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+97% · −24,4%** | +28% · −4,6% | +23% | −7,2% | 2,5 | 213 d | −3,4% | +15% | 0,04 |
> | 2691 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+186% · −37,5%** | +42% · −7,3% | +31% | −9,8% | 2,7 | 146 d | −5,3% | +21% | 0,21 |
> | 2692 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+337% · −53,0%** | +66% · −10,6% | +35% | −7,3% | 2,9 | 97 d | −8,3% | +27% | 0,35 |
> | 2693 | GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+127% · −30,7%** | +49% · −9,2% | +31% | −9,3% | 2,8 | 81 d | −9,9% | +20% | 0,10 |
> | 2694 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+206% · −40,8%** | +45% · −8,4% | +32% | −12,3% | 2,2 | 112 d | −5,4% | +23% | 0,32 |
> | 2695 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+230% · −62,4%** | +52% · −14,5% | +33% | −7,2% | 2,0 | 72 d | −8,6% | +22% | 0,25 |
> | 2696 | BB explosão ·TEN + IFR ·TEN + Tendência ·TEN | **+170% · −50,6%** | +61% · −18,4% | +39% | −9,5% | 3,4 | 83 d | −11,8% | +18% | 0,46 |
> | 2697 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+246% · −46,5%** | +53% · −10,0% | +32% | −9,3% | 2,7 | 83 d | −9,0% | +29% | 0,25 |
> | 2698 | ADX ·ADX + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+207% · −42,4%** | +55% · −11,0% | +30% | −5,4% | 2,2 | 67 d | −10,0% | +23% | 0,23 |
> | 2699 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+191% · −44,5%** | +45% · −9,5% | +30% | −12,0% | 2,6 | 120 d | −6,4% | +21% | 0,25 |
> | 2700 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+232% · −51,7%** | +48% · −11,9% | +30% | −14,3% | 1,9 | 73 d | −8,0% | +25% | 0,37 |

> [!example]- Combinações 2701 a 2730 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2701 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+215% · −39,6%** | +46% · −6,4% | +28% | −4,0% | 2,8 | 129 d | −6,0% | +18% | 0,06 |
> | 2702 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+201% · −32,5%** | +41% · −5,8% | +28% | −8,1% | 1,8 | 92 d | −5,6% | +15% | 0,18 |
> | 2703 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+169% · −46,2%** | +39% · −10,1% | +26% | −9,0% | 2,1 | 72 d | −8,7% | +19% | 0,16 |
> | 2704 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+261% · −60,6%** | +55% · −13,4% | +33% | −5,1% | 2,9 | 76 d | −11,7% | +16% | 0,23 |
> | 2705 | ADX ·ADX + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+212% · −52,6%** | +58% · −13,1% | +38% | −11,4% | 2,4 | 106 d | −6,3% | +28% | 0,29 |
> | 2706 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Tendência ·TEN | **+239% · −64,9%** | +65% · −19,6% | +39% | −9,1% | 3,2 | 106 d | −8,5% | +23% | 0,41 |
> | 2707 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+123% · −32,2%** | +37% · −6,7% | +24% | −3,5% | 2,4 | 81 d | −8,3% | +13% | 0,01 |
> | 2708 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+202% · −51,0%** | +50% · −10,4% | +34% | −12,7% | 2,6 | 78 d | −9,4% | +30% | 0,39 |
> | 2709 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+148% · −38,8%** | +37% · −7,8% | +26% | −10,0% | 2,5 | 120 d | −6,1% | +18% | 0,19 |
> | 2710 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+80% · −34,0%** | +29% · −8,2% | +22% | −4,2% | 2,3 | 91 d | −7,1% | +12% | −0,00 |
> | 2711 | ADX ·ADX + VWAP ·TEN + Bollinger ·TEN + Tendência ·TEN | **+221% · −53,0%** | +57% · −13,6% | +34% | −8,3% | 2,6 | 122 d | −5,9% | +22% | 0,41 |
> | 2712 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+248% · −38,5%** | +48% · −7,8% | +31% | −9,8% | 2,3 | 112 d | −5,7% | +22% | 0,29 |
> | 2713 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+230% · −44,9%** | +49% · −9,5% | +30% | −12,7% | 2,5 | 83 d | −8,3% | +22% | 0,38 |
> | 2714 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pullback ·PUL | **+186% · −59,3%** | +48% · −13,7% | +31% | −10,3% | 2,7 | 76 d | −10,5% | +15% | 0,27 |
> | 2715 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Tendência ·TEN | **+279% · −57,2%** | +67% · −15,9% | +39% | −6,7% | 3,9 | 129 d | −8,3% | +22% | 0,18 |
> | 2716 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+183% · −58,6%** | +45% · −13,6% | +31% | −8,0% | 2,8 | 83 d | −9,4% | +15% | 0,39 |
> | 2717 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+165% · −39,7%** | +46% · −9,0% | +30% | −6,6% | 2,9 | 131 d | −5,9% | +22% | 0,04 |
> | 2718 | Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+216% · −36,9%** | +70% · −12,7% | +35% | −8,9% | 3,4 | 83 d | −12,4% | +21% | 0,28 |
> | 2719 | MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+92% · −21,6%** | +37% · −6,5% | +27% | −10,0% | 1,8 | 86 d | −6,0% | +18% | 0,18 |
> | 2720 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+318% · −37,0%** | +56% · −7,0% | +31% | −3,9% | 2,9 | 105 d | −7,9% | +21% | 0,14 |
> | 2721 | GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+169% · −39,0%** | +62% · −13,0% | +39% | −9,9% | 2,9 | 76 d | −12,1% | +24% | 0,29 |
> | 2722 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+268% · −44,2%** | +53% · −8,9% | +31% | −5,5% | 3,2 | 95 d | −9,5% | +18% | 0,20 |
> | 2723 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+162% · −31,4%** | +45% · −7,9% | +29% | −4,7% | 2,1 | 122 d | −4,5% | +20% | 0,07 |
> | 2724 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+168% · −52,4%** | +42% · −11,9% | +29% | −8,7% | 2,0 | 72 d | −8,5% | +19% | 0,21 |
> | 2725 | VWAP ·TEN + IFR ·TEN + MACD ·TEN | **+115% · −29,5%** | +44% · −9,7% | +32% | −13,9% | 2,7 | 120 d | −6,7% | +19% | 0,46 |
> | 2726 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+203% · −48,7%** | +47% · −10,7% | +31% | −10,0% | 2,3 | 72 d | −9,8% | +22% | 0,16 |
> | 2727 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+211% · −47,4%** | +48% · −10,0% | +32% | −14,1% | 2,0 | 66 d | −9,4% | +23% | 0,36 |
> | 2728 | Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+186% · −40,7%** | +54% · −11,0% | +32% | −10,2% | 2,9 | 83 d | −9,7% | +27% | 0,26 |
> | 2729 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+232% · −48,0%** | +50% · −8,7% | +32% | −4,5% | 2,0 | 80 d | −7,5% | +24% | 0,12 |
> | 2730 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+169% · −40,0%** | +41% · −7,8% | +27% | −9,1% | 2,2 | 91 d | −6,8% | +19% | 0,10 |

> [!example]- Combinações 2731 a 2760 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2731 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+218% · −51,1%** | +49% · −11,3% | +30% | −11,0% | 2,6 | 82 d | −9,3% | +21% | 0,14 |
> | 2732 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+233% · −48,2%** | +51% · −9,8% | +32% | −6,7% | 1,9 | 72 d | −8,2% | +24% | 0,13 |
> | 2733 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+207% · −47,2%** | +47% · −9,5% | +28% | −4,5% | 1,8 | 72 d | −8,0% | +24% | 0,11 |
> | 2734 | Donchian ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+229% · −44,5%** | +60% · −12,1% | +38% | −10,6% | 2,9 | 83 d | −9,9% | +33% | 0,44 |
> | 2735 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+196% · −54,6%** | +47% · −11,4% | +31% | −9,2% | 2,4 | 120 d | −5,8% | +23% | 0,32 |
> | 2736 | GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+117% · −30,3%** | +38% · −7,7% | +26% | −8,7% | 2,3 | 81 d | −8,0% | +22% | 0,03 |
> | 2737 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+144% · −60,3%** | +38% · −12,7% | +28% | −6,5% | 2,8 | 95 d | −8,4% | +13% | 0,13 |
> | 2738 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+72% · −32,8%** | +24% · −6,3% | +20% | −6,3% | 2,3 | 210 d | −3,2% | +14% | 0,05 |
> | 2739 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+136% · −38,8%** | +36% · −7,1% | +27% | −7,7% | 2,0 | 81 d | −7,2% | +23% | 0,02 |
> | 2740 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+132% · −34,7%** | +40% · −8,0% | +26% | −4,8% | 1,4 | 75 d | −6,7% | +20% | 0,04 |
> | 2741 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+287% · −43,6%** | +65% · −11,4% | +35% | −8,8% | 3,0 | 99 d | −8,6% | +25% | 0,27 |
> | 2742 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+233% · −47,1%** | +50% · −10,5% | +29% | −10,6% | 2,9 | 83 d | −9,8% | +17% | 0,31 |
> | 2743 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+197% · −47,4%** | +48% · −10,5% | +30% | −12,4% | 3,0 | 102 d | −8,4% | +22% | 0,23 |
> | 2744 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+151% · −37,0%** | +38% · −6,6% | +27% | −7,2% | 2,3 | 96 d | −6,7% | +23% | 0,11 |
> | 2745 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+277% · −48,9%** | +54% · −10,1% | +30% | −4,5% | 2,0 | 72 d | −8,6% | +23% | 0,16 |
> | 2746 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+277% · −44,2%** | +53% · −9,1% | +31% | −5,9% | 3,1 | 99 d | −8,9% | +18% | 0,15 |
> | 2747 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+98% · −40,2%** | +32% · −10,8% | +24% | −10,3% | 2,3 | 109 d | −6,3% | +17% | 0,17 |
> | 2748 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+216% · −51,0%** | +48% · −9,9% | +30% | −4,7% | 2,6 | 122 d | −6,3% | +20% | 0,04 |
> | 2749 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+173% · −44,2%** | +49% · −11,7% | +30% | −5,0% | 2,9 | 122 d | −7,0% | +20% | 0,16 |
> | 2750 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+235% · −63,2%** | +55% · −14,7% | +35% | −7,3% | 3,1 | 83 d | −11,0% | +22% | 0,27 |
> | 2751 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+158% · −50,9%** | +39% · −9,8% | +26% | −4,6% | 2,7 | 99 d | −8,0% | +12% | 0,11 |
> | 2752 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+191% · −39,5%** | +41% · −8,0% | +27% | −8,4% | 1,7 | 73 d | −7,5% | +17% | 0,16 |
> | 2753 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+172% · −30,9%** | +46% · −7,7% | +28% | −5,1% | 2,4 | 80 d | −9,0% | +19% | 0,08 |
> | 2754 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+238% · −43,7%** | +60% · −11,1% | +33% | −7,3% | 2,2 | 67 d | −10,3% | +28% | 0,34 |
> | 2755 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+235% · −41,0%** | +47% · −7,6% | +29% | −5,4% | 1,4 | 76 d | −6,6% | +17% | 0,10 |
> | 2756 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+144% · −32,7%** | +41% · −7,2% | +24% | −4,4% | 1,9 | 122 d | −3,7% | +16% | 0,08 |
> | 2757 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+169% · −41,5%** | +38% · −8,6% | +26% | −12,1% | 1,8 | 103 d | −5,0% | +22% | 0,30 |
> | 2758 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+202% · −46,0%** | +46% · −9,2% | +29% | −5,4% | 2,8 | 95 d | −8,5% | +17% | 0,16 |
> | 2759 | GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+142% · −34,1%** | +43% · −8,6% | +29% | −9,9% | 2,3 | 81 d | −8,1% | +21% | 0,05 |
> | 2760 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+197% · −55,1%** | +46% · −11,2% | +31% | −8,0% | 2,4 | 120 d | −6,0% | +21% | 0,22 |

> [!example]- Combinações 2761 a 2790 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2761 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+134% · −50,3%** | +37% · −10,7% | +25% | −6,0% | 2,5 | 81 d | −8,9% | +13% | 0,10 |
> | 2762 | BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+214% · −51,5%** | +49% · −11,0% | +33% | −8,8% | 2,8 | 94 d | −8,5% | +25% | 0,31 |
> | 2763 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL | **+285% · −62,5%** | +61% · −14,3% | +35% | −5,7% | 3,3 | 128 d | −7,5% | +20% | 0,24 |
> | 2764 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+304% · −38,4%** | +70% · −10,1% | +39% | −5,4% | 3,6 | 119 d | −9,1% | +25% | 0,28 |
> | 2765 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Bollinger ·TEN + Tendência ·TEN | **+320% · −61,3%** | +63% · −13,7% | +35% | −7,5% | 3,3 | 120 d | −8,4% | +22% | 0,41 |
> | 2766 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+139% · −37,1%** | +36% · −7,8% | +27% | −7,9% | 2,2 | 120 d | −5,2% | +20% | 0,22 |
> | 2767 | VWAP ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+247% · −48,2%** | +53% · −9,7% | +33% | −10,6% | 2,5 | 76 d | −9,9% | +27% | 0,35 |
> | 2768 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN | **+208% · −64,5%** | +58% · −18,7% | +36% | −6,5% | 3,6 | 91 d | −12,1% | +13% | 0,30 |
> | 2769 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+176% · −52,8%** | +43% · −12,3% | +28% | −7,5% | 2,3 | 72 d | −9,9% | +17% | 0,18 |
> | 2770 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+204% · −43,8%** | +45% · −9,2% | +28% | −11,3% | 2,4 | 81 d | −8,6% | +25% | 0,18 |
> | 2771 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+172% · −49,5%** | +42% · −9,8% | +28% | −6,7% | 2,4 | 122 d | −5,7% | +19% | 0,14 |
> | 2772 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+306% · −59,8%** | +62% · −13,5% | +36% | −6,7% | 3,2 | 83 d | −11,8% | +20% | 0,41 |
> | 2773 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Onda ·OND | **+267% · −44,0%** | +68% · −10,3% | +39% | −7,4% | 3,0 | 122 d | −7,3% | +25% | 0,29 |
> | 2774 | ADX ·ADX + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+172% · −36,2%** | +47% · −8,4% | +28% | −6,3% | 1,6 | 76 d | −6,9% | +18% | 0,06 |
> | 2775 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+220% · −45,3%** | +58% · −12,6% | +31% | −12,6% | 2,8 | 74 d | −12,0% | +19% | 0,38 |
> | 2776 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+191% · −35,9%** | +51% · −8,4% | +32% | −5,8% | 2,2 | 122 d | −4,9% | +20% | 0,14 |
> | 2777 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Bollinger ·TEN | **+220% · −38,8%** | +55% · −9,6% | +32% | −6,3% | 2,4 | 122 d | −5,7% | +17% | 0,36 |
> | 2778 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+176% · −38,5%** | +42% · −7,5% | +30% | −8,3% | 2,3 | 91 d | −7,2% | +23% | 0,14 |
> | 2779 | ADX ·ADX + Donchian ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+246% · −55,3%** | +63% · −15,2% | +37% | −8,2% | 3,6 | 127 d | −8,4% | +22% | 0,29 |
> | 2780 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+146% · −41,1%** | +38% · −8,3% | +26% | −10,4% | 2,0 | 91 d | −6,5% | +20% | 0,15 |
> | 2781 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+146% · −38,3%** | +42% · −9,9% | +25% | −10,7% | 2,1 | 75 d | −8,5% | +20% | 0,14 |
> | 2782 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+150% · −38,1%** | +38% · −7,7% | +26% | −10,2% | 2,5 | 128 d | −5,6% | +19% | 0,19 |
> | 2783 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+271% · −42,5%** | +53% · −8,9% | +31% | −5,5% | 3,0 | 90 d | −9,9% | +19% | 0,16 |
> | 2784 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+225% · −36,9%** | +47% · −6,3% | +31% | −8,4% | 2,3 | 82 d | −8,1% | +24% | 0,11 |
> | 2785 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN | **+292% · −53,4%** | +76% · −14,5% | +40% | −5,9% | 3,8 | 119 d | −9,7% | +27% | 0,40 |
> | 2786 | Donchian ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+168% · −44,7%** | +59% · −12,8% | +36% | −8,4% | 3,3 | 95 d | −10,3% | +17% | 0,38 |
> | 2787 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+292% · −55,5%** | +65% · −11,9% | +37% | −8,0% | 2,3 | 67 d | −10,7% | +30% | 0,27 |
> | 2788 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+159% · −51,5%** | +41% · −11,0% | +28% | −7,8% | 2,5 | 81 d | −9,1% | +18% | 0,06 |
> | 2789 | BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+221% · −47,7%** | +55% · −12,1% | +33% | −6,4% | 2,3 | 72 d | −10,3% | +21% | 0,33 |
> | 2790 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+226% · −51,4%** | +52% · −11,4% | +34% | −11,9% | 2,3 | 72 d | −9,8% | +29% | 0,32 |

> [!example]- Combinações 2791 a 2820 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2791 | GPS médias ·TEN + Rompe 200 ·ROM | **+76% · −25,7%** | +44% · −12,1% | +27% | −9,4% | 2,5 | 74 d | −10,7% | +17% | 0,28 |
> | 2792 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+169% · −39,2%** | +41% · −7,3% | +28% | −5,4% | 1,2 | 76 d | −6,4% | +17% | 0,06 |
> | 2793 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+203% · −44,5%** | +55% · −11,7% | +33% | −6,6% | 3,0 | 122 d | −7,4% | +27% | 0,12 |
> | 2794 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+252% · −69,5%** | +61% · −17,3% | +36% | −6,0% | 3,4 | 83 d | −12,9% | +15% | 0,32 |
> | 2795 | 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+165% · −27,8%** | +36% · −4,7% | +25% | −6,1% | 1,8 | 111 d | −4,8% | +15% | 0,08 |
> | 2796 | VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+54% · −32,2%** | +27% · −11,1% | +21% | −12,2% | 2,5 | 193 d | −4,2% | +11% | 0,20 |
> | 2797 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+160% · −37,1%** | +39% · −7,3% | +29% | −11,1% | 2,3 | 136 d | −4,4% | +23% | 0,30 |
> | 2798 | VWAP ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+181% · −37,7%** | +48% · −9,7% | +32% | −10,6% | 2,5 | 103 d | −7,1% | +23% | 0,51 |
> | 2799 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+222% · −49,5%** | +58% · −13,9% | +36% | −9,7% | 3,2 | 95 d | −9,9% | +22% | 0,42 |
> | 2800 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+103% · −23,5%** | +33% · −5,7% | +24% | −7,1% | 2,6 | 168 d | −4,9% | +18% | 0,11 |
> | 2801 | Donchian ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+122% · −27,7%** | +45% · −7,9% | +28% | −3,1% | 3,0 | 120 d | −7,7% | +15% | −0,05 |
> | 2802 | BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+183% · −48,6%** | +41% · −9,6% | +27% | −5,4% | 2,5 | 83 d | −8,8% | +15% | 0,16 |
> | 2803 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+174% · −50,6%** | +49% · −11,6% | +32% | −6,5% | 3,0 | 89 d | −9,8% | +17% | 0,23 |
> | 2804 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+200% · −58,1%** | +47% · −12,9% | +30% | −4,6% | 3,1 | 95 d | −9,5% | +16% | 0,12 |
> | 2805 | GPS médias ·TEN + MACD ·TEN | **+100% · −28,2%** | +55% · −14,5% | +34% | −15,1% | 2,5 | 72 d | −11,4% | +28% | 0,33 |
> | 2806 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+194% · −37,2%** | +53% · −9,6% | +32% | −9,3% | 3,3 | 102 d | −9,7% | +23% | 0,15 |
> | 2807 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Tendência ·TEN | **+196% · −52,4%** | +45% · −10,7% | +30% | −6,9% | 2,9 | 130 d | −6,4% | +18% | 0,20 |
> | 2808 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+251% · −45,2%** | +53% · −9,4% | +32% | −7,4% | 3,0 | 121 d | −7,7% | +20% | 0,29 |
> | 2809 | Donchian ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+169% · −37,9%** | +58% · −12,6% | +36% | −6,3% | 3,5 | 95 d | −11,0% | +19% | 0,13 |
> | 2810 | VWAP ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+193% · −38,3%** | +42% · −7,1% | +29% | −7,9% | 2,1 | 95 d | −6,6% | +24% | 0,18 |
> | 2811 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+156% · −51,7%** | +39% · −10,7% | +28% | −7,2% | 2,4 | 83 d | −8,3% | +19% | 0,16 |
> | 2812 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+224% · −38,7%** | +47% · −7,4% | +31% | −9,4% | 2,3 | 83 d | −8,2% | +25% | 0,25 |
> | 2813 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+236% · −48,8%** | +51% · −9,9% | +31% | −6,7% | 1,8 | 72 d | −8,3% | +24% | 0,15 |
> | 2814 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+238% · −41,6%** | +48% · −7,7% | +29% | −5,5% | 1,4 | 76 d | −6,7% | +16% | 0,15 |
> | 2815 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+120% · −46,9%** | +38% · −12,0% | +27% | −4,7% | 2,5 | 85 d | −8,5% | +16% | 0,03 |
> | 2816 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+235% · −47,0%** | +51% · −8,7% | +32% | −4,3% | 2,0 | 80 d | −7,6% | +23% | 0,12 |
> | 2817 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+154% · −26,9%** | +41% · −6,2% | +27% | −7,2% | 2,8 | 142 d | −5,9% | +17% | 0,15 |
> | 2818 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+323% · −59,3%** | +64% · −12,9% | +39% | −6,8% | 3,6 | 111 d | −9,8% | +22% | 0,38 |
> | 2819 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+188% · −41,5%** | +41% · −8,6% | +27% | −9,2% | 1,7 | 72 d | −8,0% | +19% | 0,24 |
> | 2820 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+237% · −57,8%** | +59% · −12,7% | +36% | −11,0% | 3,0 | 83 d | −10,9% | +26% | 0,40 |

> [!example]- Combinações 2821 a 2850 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2821 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+215% · −39,7%** | +55% · −9,8% | +32% | −7,6% | 3,3 | 99 d | −9,8% | +24% | 0,04 |
> | 2822 | ADX ·ADX + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+130% · −32,8%** | +48% · −10,4% | +27% | −5,9% | 1,8 | 97 d | −5,5% | +17% | 0,12 |
> | 2823 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+237% · −45,7%** | +51% · −9,9% | +30% | −7,2% | 2,6 | 77 d | −10,4% | +20% | 0,16 |
> | 2824 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+152% · −47,5%** | +39% · −9,1% | +28% | −6,0% | 2,2 | 81 d | −8,0% | +23% | 0,04 |
> | 2825 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+224% · −57,8%** | +49% · −12,0% | +33% | −8,1% | 2,9 | 128 d | −6,7% | +22% | 0,24 |
> | 2826 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+178% · −40,5%** | +41% · −8,1% | +30% | −9,2% | 2,0 | 103 d | −5,8% | +25% | 0,13 |
> | 2827 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+214% · −56,7%** | +50% · −11,0% | +33% | −8,3% | 2,7 | 122 d | −6,7% | +23% | 0,20 |
> | 2828 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+256% · −44,2%** | +51% · −9,3% | +31% | −11,9% | 2,2 | 82 d | −8,1% | +23% | 0,32 |
> | 2829 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+182% · −33,1%** | +46% · −7,6% | +29% | −3,1% | 2,8 | 92 d | −8,9% | +21% | −0,07 |
> | 2830 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+235% · −57,6%** | +56% · −12,8% | +33% | −7,9% | 3,1 | 83 d | −11,6% | +19% | 0,21 |
> | 2831 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+223% · −51,8%** | +53% · −11,4% | +35% | −11,3% | 2,6 | 83 d | −9,3% | +27% | 0,46 |
> | 2832 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+214% · −36,0%** | +45% · −7,2% | +29% | −6,4% | 2,2 | 80 d | −8,4% | +22% | 0,11 |
> | 2833 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+149% · −35,2%** | +54% · −12,2% | +34% | −13,6% | 2,1 | 72 d | −9,4% | +23% | 0,28 |
> | 2834 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+278% · −52,2%** | +61% · −10,6% | +35% | −6,4% | 3,2 | 120 d | −8,5% | +29% | 0,17 |
> | 2835 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+178% · −38,1%** | +47% · −9,2% | +28% | −5,7% | 2,0 | 122 d | −4,6% | +18% | 0,15 |
> | 2836 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+168% · −35,0%** | +38% · −5,9% | +25% | −5,4% | 2,3 | 91 d | −7,7% | +19% | 0,04 |
> | 2837 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+218% · −38,2%** | +47% · −7,1% | +31% | −5,9% | 2,2 | 122 d | −5,2% | +18% | 0,13 |
> | 2838 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+162% · −35,1%** | +45% · −7,1% | +29% | −5,0% | 2,4 | 92 d | −7,8% | +22% | 0,01 |
> | 2839 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+180% · −46,6%** | +41% · −10,2% | +27% | −10,2% | 1,8 | 72 d | −8,5% | +17% | 0,20 |
> | 2840 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+247% · −56,7%** | +52% · −12,1% | +33% | −8,0% | 2,7 | 78 d | −10,8% | +18% | 0,44 |
> | 2841 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+247% · −43,7%** | +50% · −7,8% | +31% | −4,6% | 2,8 | 129 d | −6,5% | +21% | 0,06 |
> | 2842 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+229% · −52,2%** | +54% · −11,7% | +33% | −13,6% | 2,2 | 70 d | −10,2% | +28% | 0,32 |
> | 2843 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+200% · −58,1%** | +45% · −12,8% | +30% | −7,5% | 2,6 | 76 d | −10,6% | +14% | 0,28 |
> | 2844 | ADX ·ADX + IFR ·TEN + MACD ·TEN + Onda ·OND | **+212% · −40,9%** | +57% · −10,4% | +36% | −9,0% | 2,0 | 106 d | −5,9% | +24% | 0,28 |
> | 2845 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+273% · −50,0%** | +54% · −10,5% | +30% | −5,4% | 2,0 | 72 d | −9,0% | +24% | 0,25 |
> | 2846 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+222% · −61,5%** | +63% · −18,5% | +39% | −7,8% | 3,3 | 83 d | −12,9% | +19% | 0,47 |
> | 2847 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+262% · −60,8%** | +57% · −14,2% | +35% | −7,5% | 3,1 | 95 d | −9,9% | +17% | 0,42 |
> | 2848 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+136% · −48,7%** | +37% · −10,1% | +25% | −6,0% | 2,4 | 81 d | −8,9% | +14% | 0,06 |
> | 2849 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+210% · −43,2%** | +59% · −11,6% | +35% | −12,0% | 2,9 | 83 d | −10,4% | +31% | 0,34 |
> | 2850 | GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+119% · −30,4%** | +38% · −7,6% | +26% | −8,6% | 2,2 | 81 d | −8,2% | +21% | 0,05 |

> [!example]- Combinações 2851 a 2880 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2851 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+126% · −36,7%** | +39% · −9,4% | +29% | −9,0% | 2,3 | 115 d | −6,0% | +21% | 0,24 |
> | 2852 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+251% · −50,1%** | +54% · −10,2% | +33% | −6,3% | 2,1 | 76 d | −8,8% | +26% | 0,14 |
> | 2853 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+121% · −23,0%** | +36% · −5,0% | +27% | −5,8% | 2,1 | 101 d | −6,2% | +19% | 0,03 |
> | 2854 | Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+156% · −37,7%** | +58% · −12,5% | +32% | −8,8% | 3,4 | 95 d | −11,0% | +17% | 0,31 |
> | 2855 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+148% · −46,3%** | +39% · −9,2% | +28% | −10,8% | 2,1 | 80 d | −8,2% | +19% | 0,22 |
> | 2856 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+244% · −45,1%** | +51% · −8,2% | +29% | −6,9% | 2,6 | 128 d | −6,1% | +19% | 0,27 |
> | 2857 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+148% · −42,2%** | +45% · −11,0% | +27% | −5,6% | 2,1 | 77 d | −8,6% | +22% | 0,08 |
> | 2858 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+198% · −50,9%** | +48% · −10,5% | +31% | −9,4% | 2,7 | 83 d | −9,6% | +23% | 0,19 |
> | 2859 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+168% · −39,2%** | +37% · −7,9% | +26% | −11,1% | 1,8 | 107 d | −5,1% | +19% | 0,21 |
> | 2860 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+224% · −39,6%** | +45% · −6,5% | +30% | −5,3% | 2,4 | 90 d | −8,2% | +24% | −0,00 |
> | 2861 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+144% · −33,8%** | +43% · −8,5% | +29% | −9,9% | 2,2 | 81 d | −8,3% | +21% | 0,08 |
> | 2862 | ADX ·ADX + Rompe 200 ·ROM + Tendência ·TEN | **+151% · −43,8%** | +55% · −14,9% | +35% | −9,5% | 2,8 | 122 d | −7,0% | +23% | 0,19 |
> | 2863 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+132% · −42,5%** | +34% · −9,0% | +26% | −11,4% | 2,1 | 109 d | −6,0% | +21% | 0,19 |
> | 2864 | VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+144% · −40,4%** | +42% · −10,7% | +25% | −11,8% | 2,1 | 73 d | −9,2% | +17% | 0,28 |
> | 2865 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+194% · −47,3%** | +47% · −10,5% | +30% | −12,2% | 3,0 | 102 d | −9,0% | +21% | 0,22 |
> | 2866 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+233% · −45,2%** | +52% · −8,5% | +32% | −7,7% | 2,5 | 119 d | −6,8% | +25% | 0,22 |
> | 2867 | GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+170% · −34,2%** | +46% · −8,2% | +28% | −7,9% | 2,3 | 81 d | −8,8% | +21% | 0,03 |
> | 2868 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+128% · −43,5%** | +35% · −8,4% | +25% | −8,4% | 2,0 | 80 d | −8,0% | +15% | 0,15 |
> | 2869 | VWAP ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+153% · −35,5%** | +43% · −8,9% | +28% | −7,8% | 2,4 | 100 d | −7,3% | +17% | 0,33 |
> | 2870 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+219% · −46,0%** | +46% · −8,6% | +27% | −4,0% | 3,0 | 99 d | −9,3% | +14% | 0,08 |
> | 2871 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+210% · −48,7%** | +51% · −10,6% | +32% | −11,7% | 2,9 | 102 d | −8,8% | +24% | 0,23 |
> | 2872 | IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+115% · −19,6%** | +43% · −6,3% | +30% | −5,9% | 2,3 | 138 d | −4,8% | +23% | 0,03 |
> | 2873 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+239% · −50,5%** | +50% · −11,1% | +30% | −7,4% | 2,3 | 72 d | −10,5% | +19% | 0,16 |
> | 2874 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+239% · −53,2%** | +54% · −12,3% | +33% | −14,8% | 2,5 | 82 d | −9,4% | +25% | 0,38 |
> | 2875 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+205% · −51,0%** | +46% · −11,6% | +29% | −6,2% | 2,7 | 99 d | −8,4% | +16% | 0,18 |
> | 2876 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+215% · −44,5%** | +56% · −11,9% | +32% | −8,7% | 3,1 | 95 d | −9,9% | +22% | 0,26 |
> | 2877 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+184% · −50,6%** | +44% · −10,2% | +29% | −6,3% | 2,7 | 99 d | −8,5% | +17% | 0,10 |
> | 2878 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+110% · −37,8%** | +32% · −7,2% | +24% | −6,7% | 1,9 | 82 d | −7,3% | +19% | 0,05 |
> | 2879 | Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+158% · −31,6%** | +57% · −11,2% | +32% | −7,3% | 3,6 | 110 d | −10,3% | +21% | −0,01 |
> | 2880 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+112% · −32,4%** | +31% · −5,3% | +24% | −5,2% | 1,9 | 86 d | −6,8% | +22% | −0,03 |

> [!example]- Combinações 2881 a 2910 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2881 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Bollinger ·TEN | **+193% · −39,8%** | +51% · −10,3% | +30% | −13,4% | 2,6 | 91 d | −8,9% | +21% | 0,46 |
> | 2882 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+121% · −29,8%** | +46% · −9,4% | +29% | −7,6% | 2,2 | 77 d | −8,9% | +22% | −0,07 |
> | 2883 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+234% · −49,2%** | +50% · −10,3% | +32% | −8,5% | 2,7 | 99 d | −8,5% | +21% | 0,18 |
> | 2884 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+222% · −49,7%** | +62% · −13,1% | +34% | −5,0% | 3,1 | 105 d | −9,2% | +23% | 0,11 |
> | 2885 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+251% · −53,3%** | +63% · −14,2% | +37% | −6,6% | 3,3 | 128 d | −8,0% | +24% | 0,14 |
> | 2886 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+203% · −60,4%** | +50% · −14,0% | +34% | −10,4% | 2,7 | 83 d | −10,0% | +20% | 0,49 |
> | 2887 | VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+158% · −42,8%** | +40% · −8,7% | +30% | −11,5% | 2,1 | 109 d | −6,0% | +27% | 0,33 |
> | 2888 | GPS médias ·TEN + Bollinger ·TEN | **+120% · −29,5%** | +62% · −14,9% | +31% | −9,6% | 2,5 | 72 d | −12,2% | +23% | 0,25 |
> | 2889 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+172% · −39,9%** | +41% · −7,4% | +27% | −5,5% | 1,1 | 76 d | −6,7% | +17% | 0,10 |
> | 2890 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN | **+234% · −53,8%** | +60% · −13,9% | +34% | −5,7% | 2,3 | 77 d | −9,4% | +23% | 0,36 |
> | 2891 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+217% · −40,3%** | +47% · −7,5% | +31% | −6,8% | 2,1 | 122 d | −5,2% | +20% | 0,26 |
> | 2892 | ADX ·ADX + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+174% · −38,3%** | +47% · −9,1% | +28% | −7,2% | 1,5 | 74 d | −7,6% | +19% | 0,14 |
> | 2893 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+147% · −43,7%** | +36% · −9,3% | +25% | −6,9% | 2,6 | 148 d | −5,7% | +14% | 0,11 |
> | 2894 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+250% · −56,9%** | +53% · −12,2% | +33% | −5,2% | 3,2 | 111 d | −9,1% | +20% | 0,19 |
> | 2895 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+237% · −41,9%** | +50% · −8,2% | +30% | −4,3% | 2,6 | 122 d | −6,7% | +25% | 0,03 |
> | 2896 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+282% · −71,1%** | +63% · −18,0% | +35% | −6,9% | 2,3 | 67 d | −12,5% | +21% | 0,40 |
> | 2897 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+232% · −49,8%** | +51% · −10,3% | +32% | −7,6% | 1,8 | 72 d | −8,7% | +25% | 0,24 |
> | 2898 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+171% · −50,5%** | +42% · −10,7% | +30% | −10,3% | 2,8 | 118 d | −8,0% | +18% | 0,25 |
> | 2899 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+307% · −51,5%** | +58% · −10,9% | +33% | −7,6% | 2,0 | 72 d | −9,3% | +24% | 0,32 |
> | 2900 | VWAP ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+244% · −41,7%** | +49% · −7,8% | +32% | −10,2% | 2,1 | 97 d | −6,7% | +25% | 0,34 |
> | 2901 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+166% · −38,2%** | +38% · −6,6% | +25% | −6,5% | 2,3 | 85 d | −8,2% | +17% | 0,14 |
> | 2902 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+174% · −38,3%** | +40% · −8,3% | +27% | −9,0% | 2,6 | 148 d | −5,8% | +18% | 0,13 |
> | 2903 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+200% · −47,5%** | +46% · −9,7% | +29% | −5,4% | 2,8 | 111 d | −8,1% | +16% | 0,19 |
> | 2904 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+196% · −36,6%** | +43% · −7,1% | +28% | −6,6% | 2,2 | 83 d | −8,0% | +24% | 0,07 |
> | 2905 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+145% · −36,2%** | +42% · −8,4% | +28% | −6,0% | 2,1 | 122 d | −5,3% | +21% | 0,07 |
> | 2906 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+244% · −61,6%** | +59% · −14,6% | +37% | −8,4% | 2,8 | 80 d | −11,7% | +27% | 0,38 |
> | 2907 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+210% · −40,9%** | +54% · −10,2% | +30% | −4,3% | 2,2 | 76 d | −9,4% | +25% | 0,11 |
> | 2908 | ADX ·ADX + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+233% · −55,0%** | +65% · −14,3% | +39% | −9,4% | 2,5 | 76 d | −11,1% | +33% | 0,28 |
> | 2909 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+156% · −42,7%** | +46% · −11,3% | +31% | −12,0% | 1,8 | 72 d | −8,9% | +20% | 0,32 |
> | 2910 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+275% · −61,9%** | +62% · −14,0% | +38% | −8,8% | 2,9 | 83 d | −11,1% | +26% | 0,42 |

> [!example]- Combinações 2911 a 2940 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2911 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+106% · −23,8%** | +33% · −5,3% | +22% | −7,9% | 2,6 | 210 d | −5,1% | +15% | 0,05 |
> | 2912 | ADX ·ADX + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+236% · −42,8%** | +48% · −8,1% | +29% | −6,1% | 1,4 | 76 d | −7,1% | +17% | 0,20 |
> | 2913 | ADX ·ADX + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR | **+251% · −37,1%** | +62% · −9,4% | +35% | −4,8% | 3,1 | 130 d | −7,3% | +21% | 0,11 |
> | 2914 | BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+170% · −33,3%** | +46% · −8,0% | +28% | −6,2% | 2,4 | 80 d | −9,6% | +17% | 0,26 |
> | 2915 | ADX ·ADX + MACD ·TEN + Bollinger ·TEN | **+162% · −38,7%** | +56% · −13,1% | +32% | −8,5% | 1,9 | 87 d | −6,9% | +21% | 0,35 |
> | 2916 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+165% · −25,2%** | +36% · −3,7% | +25% | −4,7% | 1,7 | 111 d | −5,0% | +14% | 0,06 |
> | 2917 | ADX ·ADX + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+234% · −47,1%** | +64% · −12,6% | +38% | −7,0% | 2,4 | 76 d | −10,3% | +30% | 0,30 |
> | 2918 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+162% · −50,1%** | +41% · −10,4% | +28% | −7,8% | 2,4 | 81 d | −9,4% | +19% | 0,04 |
> | 2919 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+197% · −43,4%** | +46% · −8,4% | +30% | −7,9% | 2,0 | 122 d | −4,9% | +20% | 0,30 |
> | 2920 | Donchian ·TEN + IFR ·TEN + MACD ·TEN | **+195% · −31,4%** | +65% · −11,1% | +39% | −9,2% | 3,2 | 102 d | −10,1% | +28% | 0,51 |
> | 2921 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+233% · −58,4%** | +56% · −13,2% | +33% | −7,9% | 3,3 | 95 d | −11,3% | +18% | 0,24 |
> | 2922 | IFR ·TEN + MACD ·TEN + Onda ·OND | **+140% · −27,6%** | +50% · −8,8% | +35% | −10,0% | 2,2 | 119 d | −6,0% | +25% | 0,33 |
> | 2923 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN | **+327% · −62,3%** | +65% · −13,6% | +35% | −5,8% | 3,1 | 97 d | −10,0% | +22% | 0,37 |
> | 2924 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+235% · −39,9%** | +47% · −7,2% | +29% | −6,2% | 2,2 | 122 d | −5,5% | +18% | 0,19 |
> | 2925 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+107% · −33,3%** | +42% · −10,8% | +29% | −5,6% | 2,6 | 91 d | −8,9% | +17% | 0,05 |
> | 2926 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+267% · −52,2%** | +58% · −10,9% | +35% | −9,1% | 2,2 | 80 d | −8,7% | +25% | 0,33 |
> | 2927 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+203% · −54,8%** | +46% · −11,2% | +28% | −6,6% | 1,7 | 67 d | −9,2% | +22% | 0,25 |
> | 2928 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+112% · −35,9%** | +32% · −7,0% | +24% | −6,6% | 1,8 | 82 d | −7,4% | +20% | 0,05 |
> | 2929 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+192% · −44,5%** | +42% · −9,6% | +28% | −7,6% | 2,5 | 92 d | −8,5% | +19% | 0,05 |
> | 2930 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+245% · −43,9%** | +52% · −8,4% | +34% | −8,9% | 2,1 | 122 d | −5,3% | +20% | 0,33 |
> | 2931 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+186% · −45,2%** | +46% · −8,7% | +31% | −9,8% | 2,6 | 92 d | −8,9% | +26% | 0,19 |
> | 2932 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Onda ·OND | **+154% · −38,9%** | +46% · −9,9% | +30% | −11,8% | 2,3 | 91 d | −7,9% | +20% | 0,22 |
> | 2933 | Donchian ·TEN + GPS médias ·TEN + Onda ·OND | **+174% · −39,7%** | +65% · −14,1% | +37% | −11,5% | 2,7 | 76 d | −12,8% | +28% | 0,29 |
> | 2934 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+162% · −25,5%** | +37% · −4,3% | +28% | −6,8% | 2,4 | 168 d | −4,8% | +20% | −0,00 |
> | 2935 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+218% · −39,4%** | +48% · −6,7% | +29% | −5,1% | 2,5 | 128 d | −6,1% | +21% | 0,10 |
> | 2936 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+105% · −35,8%** | +34% · −8,4% | +25% | −5,9% | 2,2 | 91 d | −7,7% | +18% | −0,04 |
> | 2937 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+119% · −40,7%** | +39% · −10,7% | +27% | −13,7% | 2,2 | 95 d | −7,3% | +21% | 0,14 |
> | 2938 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+161% · −39,6%** | +40% · −7,7% | +30% | −10,2% | 1,9 | 104 d | −5,9% | +23% | 0,25 |
> | 2939 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+176% · −40,6%** | +49% · −10,3% | +30% | −4,6% | 2,8 | 130 d | −6,8% | +23% | −0,01 |
> | 2940 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+132% · −40,5%** | +35% · −8,2% | +25% | −10,7% | 2,4 | 140 d | −5,5% | +21% | 0,08 |

> [!example]- Combinações 2941 a 2970 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2941 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+192% · −45,4%** | +55% · −11,9% | +33% | −7,0% | 2,4 | 81 d | −9,7% | +28% | 0,12 |
> | 2942 | GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+200% · −38,9%** | +52% · −10,3% | +32% | −11,1% | 2,2 | 76 d | −9,6% | +21% | 0,27 |
> | 2943 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+147% · −37,3%** | +38% · −7,0% | +26% | −8,8% | 1,8 | 91 d | −6,4% | +18% | 0,06 |
> | 2944 | ADX ·ADX + MACD ·TEN + Tendência ·TEN | **+178% · −50,0%** | +63% · −17,5% | +40% | −11,5% | 2,8 | 122 d | −7,5% | +29% | 0,37 |
> | 2945 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+159% · −35,6%** | +38% · −6,1% | +26% | −4,3% | 2,1 | 131 d | −4,5% | +19% | 0,01 |
> | 2946 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+171% · −46,0%** | +48% · −12,7% | +29% | −15,2% | 2,1 | 73 d | −9,6% | +23% | 0,41 |
> | 2947 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+102% · −20,7%** | +33% · −4,7% | +24% | −6,0% | 2,4 | 171 d | −4,8% | +15% | 0,03 |
> | 2948 | ADX ·ADX + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+168% · −39,3%** | +48% · −8,7% | +32% | −8,0% | 2,2 | 122 d | −5,5% | +22% | 0,07 |
> | 2949 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+115% · −35,9%** | +31% · −6,9% | +24% | −10,9% | 1,6 | 107 d | −5,0% | +20% | 0,13 |
> | 2950 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+192% · −37,7%** | +41% · −7,7% | +28% | −10,9% | 2,2 | 112 d | −6,2% | +21% | 0,18 |
> | 2951 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Tendência ·TEN | **+229% · −53,1%** | +60% · −13,6% | +38% | −9,4% | 2,8 | 122 d | −7,3% | +23% | 0,39 |
> | 2952 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+245% · −47,5%** | +52% · −9,4% | +30% | −5,5% | 2,0 | 72 d | −9,6% | +23% | 0,10 |
> | 2953 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+220% · −61,1%** | +55% · −14,3% | +32% | −5,4% | 2,5 | 77 d | −10,5% | +22% | 0,21 |
> | 2954 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL | **+252% · −51,6%** | +66% · −13,8% | +36% | −5,6% | 3,6 | 128 d | −9,0% | +22% | 0,17 |
> | 2955 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+175% · −56,1%** | +44% · −12,4% | +29% | −4,5% | 2,6 | 83 d | −10,0% | +17% | 0,07 |
> | 2956 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+205% · −46,8%** | +58% · −12,7% | +35% | −10,4% | 2,3 | 72 d | −11,5% | +23% | 0,33 |
> | 2957 | Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+164% · −35,5%** | +47% · −9,0% | +30% | −9,6% | 2,2 | 95 d | −7,3% | +28% | 0,26 |
> | 2958 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+154% · −35,1%** | +38% · −6,4% | +27% | −7,1% | 2,1 | 96 d | −7,0% | +23% | 0,10 |
> | 2959 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+138% · −32,9%** | +33% · −6,2% | +23% | −8,4% | 1,7 | 106 d | −5,4% | +19% | 0,14 |
> | 2960 | VWAP ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+192% · −40,9%** | +43% · −8,1% | +29% | −9,4% | 2,1 | 105 d | −6,6% | +25% | 0,29 |
> | 2961 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+202% · −41,7%** | +46% · −8,5% | +33% | −12,2% | 2,0 | 112 d | −5,8% | +26% | 0,37 |
> | 2962 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+233% · −40,4%** | +47% · −7,8% | +29% | −7,6% | 2,1 | 84 d | −8,0% | +18% | 0,08 |
> | 2963 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+183% · −60,8%** | +54% · −18,1% | +34% | −6,4% | 2,9 | 81 d | −12,7% | +15% | 0,24 |
> | 2964 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+212% · −53,1%** | +45% · −11,0% | +30% | −6,7% | 2,5 | 83 d | −9,3% | +20% | 0,25 |
> | 2965 | Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+99% · −20,2%** | +38% · −6,5% | +25% | −8,5% | 1,8 | 102 d | −5,8% | +16% | 0,12 |
> | 2966 | BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+211% · −38,2%** | +45% · −7,7% | +29% | −7,9% | 2,2 | 80 d | −9,0% | +23% | 0,23 |
> | 2967 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+248% · −54,7%** | +63% · −14,9% | +37% | −6,6% | 3,4 | 128 d | −8,6% | +23% | 0,15 |
> | 2968 | Donchian ·TEN + MACD ·TEN + Bollinger ·TEN | **+184% · −28,1%** | +60% · −9,9% | +33% | −8,9% | 3,0 | 99 d | −9,9% | +26% | 0,40 |
> | 2969 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+220% · −37,1%** | +47% · −7,1% | +31% | −5,9% | 2,1 | 122 d | −5,5% | +17% | 0,16 |
> | 2970 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Tendência ·TEN ⚠️ | **+261% · −64,0%** | +55% · −15,1% | +35% | −6,0% | 2,7 | 120 d | −7,7% | +22% | 0,15 |

> [!example]- Combinações 2971 a 3000 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 2971 | VWAP ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+220% · −44,3%** | +47% · −9,1% | +32% | −11,0% | 2,2 | 108 d | −6,6% | +26% | 0,41 |
> | 2972 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+74% · −22,0%** | +27% · −4,7% | +21% | −2,4% | 1,6 | 111 d | −4,8% | +17% | 0,04 |
> | 2973 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+193% · −54,8%** | +48% · −11,9% | +31% | −10,3% | 2,6 | 83 d | −10,1% | +20% | 0,35 |
> | 2974 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+79% · −30,4%** | +29% · −6,6% | +22% | −2,5% | 2,5 | 130 d | −5,9% | +13% | −0,06 |
> | 2975 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+162% · −37,2%** | +38% · −6,5% | +25% | −6,0% | 1,9 | 82 d | −7,9% | +22% | 0,03 |
> | 2976 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL | **+77% · −25,5%** | +33% · −8,6% | +26% | −13,5% | 2,4 | 211 d | −4,6% | +16% | 0,15 |
> | 2977 | VWAP ·TEN + IFR ·TEN + Bollinger ·TEN | **+139% · −26,9%** | +49% · −8,8% | +30% | −10,3% | 2,9 | 129 d | −7,1% | +18% | 0,36 |
> | 2978 | MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+110% · −23,1%** | +34% · −5,1% | +26% | −6,5% | 2,4 | 253 d | −4,6% | +21% | 0,01 |
> | 2979 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+184% · −36,0%** | +42% · −6,8% | +29% | −6,3% | 2,1 | 130 d | −4,8% | +20% | 0,02 |
> | 2980 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+188% · −48,7%** | +44% · −9,1% | +28% | −4,7% | 2,3 | 122 d | −6,0% | +21% | 0,05 |
> | 2981 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+139% · −32,4%** | +41% · −6,5% | +27% | −5,0% | 1,9 | 92 d | −6,8% | +21% | −0,02 |
> | 2982 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+242% · −42,5%** | +62% · −11,6% | +36% | −11,8% | 3,0 | 99 d | −10,0% | +29% | 0,33 |
> | 2983 | GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+122% · −34,5%** | +46% · −11,6% | +29% | −9,1% | 2,1 | 74 d | −9,8% | +23% | 0,24 |
> | 2984 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN | **+266% · −69,4%** | +68% · −17,9% | +38% | −7,1% | 2,8 | 82 d | −11,8% | +22% | 0,44 |
> | 2985 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Tendência ·TEN | **+316% · −61,9%** | +66% · −13,9% | +39% | −8,3% | 3,4 | 128 d | −8,6% | +23% | 0,43 |
> | 2986 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+170% · −39,5%** | +38% · −8,0% | +26% | −11,3% | 1,7 | 107 d | −5,3% | +18% | 0,25 |
> | 2987 | GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+173% · −35,0%** | +46% · −8,2% | +28% | −7,8% | 2,2 | 81 d | −8,9% | +20% | 0,05 |
> | 2988 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+258% · −51,0%** | +55% · −11,8% | +33% | −10,3% | 2,6 | 77 d | −11,5% | +23% | 0,39 |
> | 2989 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+196% · −42,3%** | +44% · −8,3% | +30% | −9,9% | 1,9 | 84 d | −7,4% | +19% | 0,08 |
> | 2990 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+206% · −37,2%** | +44% · −6,5% | +29% | −4,7% | 2,5 | 130 d | −5,9% | +20% | 0,02 |
> | 2991 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+246% · −60,9%** | +55% · −14,0% | +31% | −5,0% | 2,3 | 72 d | −11,2% | +19% | 0,22 |
> | 2992 | ADX ·ADX + IFR ·TEN + Rompe 200 ·ROM | **+147% · −32,0%** | +54% · −10,3% | +33% | −6,6% | 2,1 | 122 d | −5,6% | +23% | 0,25 |
> | 2993 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+221% · −50,1%** | +51% · −10,1% | +31% | −7,1% | 2,7 | 122 d | −7,2% | +22% | 0,18 |
> | 2994 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+227% · −37,1%** | +47% · −6,4% | +31% | −8,6% | 2,1 | 82 d | −8,4% | +24% | 0,17 |
> | 2995 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+273% · −50,7%** | +57% · −10,4% | +33% | −8,3% | 1,9 | 67 d | −10,4% | +23% | 0,28 |
> | 2996 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+150% · −36,8%** | +37% · −7,2% | +27% | −6,9% | 1,9 | 82 d | −7,8% | +20% | −0,01 |
> | 2997 | GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+142% · −36,0%** | +43% · −9,3% | +29% | −11,3% | 2,2 | 81 d | −8,8% | +22% | 0,22 |
> | 2998 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+161% · −48,5%** | +49% · −12,8% | +31% | −8,1% | 2,7 | 83 d | −10,7% | +18% | 0,16 |
> | 2999 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+139% · −33,3%** | +42% · −8,3% | +28% | −7,1% | 2,1 | 122 d | −5,5% | +22% | 0,11 |
> | 3000 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+189% · −37,7%** | +50% · −8,9% | +32% | −6,3% | 2,6 | 122 d | −7,0% | +22% | 0,06 |

> [!example]- Combinações 3001 a 3030 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3001 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pullback ·PUL | **+226% · −44,6%** | +49% · −8,0% | +32% | −6,5% | 2,4 | 122 d | −6,3% | +18% | 0,21 |
> | 3002 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+189% · −46,5%** | +43% · −9,4% | +26% | −5,5% | 2,4 | 81 d | −9,9% | +15% | 0,07 |
> | 3003 | IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+113% · −22,0%** | +43% · −6,7% | +30% | −5,8% | 2,2 | 121 d | −6,0% | +24% | −0,04 |
> | 3004 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+63% · −32,0%** | +25% · −8,0% | +20% | −8,6% | 2,1 | 215 d | −3,7% | +13% | 0,07 |
> | 3005 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+276% · −47,6%** | +57% · −10,0% | +35% | −9,8% | 2,9 | 111 d | −8,8% | +25% | 0,36 |
> | 3006 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+168% · −41,9%** | +42% · −8,7% | +29% | −11,7% | 2,2 | 101 d | −7,1% | +21% | 0,19 |
> | 3007 | ADX ·ADX + Pullback ·PUL + Tendência ·TEN | **+175% · −46,6%** | +60% · −16,1% | +38% | −8,8% | 3,5 | 131 d | −8,6% | +23% | 0,05 |
> | 3008 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+293% · −48,9%** | +72% · −12,8% | +36% | −5,6% | 2,8 | 97 d | −9,6% | +25% | 0,32 |
> | 3009 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+182% · −51,5%** | +44% · −11,2% | +29% | −7,2% | 2,8 | 99 d | −9,4% | +16% | 0,22 |
> | 3010 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+195% · −32,5%** | +41% · −6,2% | +28% | −8,1% | 2,3 | 138 d | −5,4% | +20% | 0,13 |
> | 3011 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+250% · −51,2%** | +55% · −11,3% | +31% | −12,3% | 2,4 | 76 d | −10,9% | +26% | 0,32 |
> | 3012 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+189% · −33,5%** | +49% · −7,7% | +31% | −4,8% | 2,6 | 130 d | −6,4% | +18% | −0,01 |
> | 3013 | ADX ·ADX + IFR ·TEN + Onda ·OND | **+171% · −34,0%** | +62% · −11,5% | +38% | −9,0% | 1,8 | 81 d | −7,9% | +23% | 0,24 |
> | 3014 | VWAP ·TEN + Pullback ·PUL + Bollinger ·TEN | **+95% · −24,4%** | +37% · −7,8% | +24% | −11,3% | 2,7 | 171 d | −6,0% | +15% | 0,15 |
> | 3015 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + IFR ·TEN | **+281% · −60,7%** | +65% · −13,9% | +36% | −8,8% | 3,1 | 120 d | −9,0% | +24% | 0,40 |
> | 3016 | BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+159% · −53,1%** | +48% · −14,3% | +33% | −8,1% | 2,5 | 81 d | −10,3% | +23% | 0,18 |
> | 3017 | Tendência ·TEN + Onda ·OND | **+105% · −26,5%** | +57% · −13,1% | +40% | −13,7% | 2,6 | 92 d | −9,2% | +28% | 0,30 |
> | 3018 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN | **+282% · −64,4%** | +62% · −15,1% | +38% | −8,7% | 3,1 | 95 d | −11,0% | +22% | 0,52 |
> | 3019 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+210% · −55,6%** | +49% · −11,2% | +31% | −5,8% | 2,5 | 122 d | −6,7% | +24% | 0,19 |
> | 3020 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+175% · −41,7%** | +51% · −10,7% | +31% | −6,3% | 2,1 | 80 d | −8,9% | +26% | 0,12 |
> | 3021 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+238% · −64,6%** | +59% · −15,7% | +35% | −8,5% | 2,4 | 74 d | −11,3% | +26% | 0,41 |
> | 3022 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+160% · −47,5%** | +40% · −9,3% | +26% | −4,5% | 2,6 | 102 d | −8,3% | +13% | 0,07 |
> | 3023 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+209% · −66,5%** | +50% · −16,5% | +32% | −7,8% | 2,6 | 119 d | −7,5% | +23% | 0,21 |
> | 3024 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+179% · −41,1%** | +41% · −8,6% | +27% | −8,4% | 2,1 | 80 d | −9,0% | +17% | 0,20 |
> | 3025 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+151% · −40,0%** | +46% · −10,2% | +27% | −4,8% | 2,0 | 80 d | −8,7% | +23% | 0,05 |
> | 3026 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+187% · −34,1%** | +51% · −8,7% | +33% | −6,5% | 1,9 | 122 d | −5,2% | +20% | 0,07 |
> | 3027 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+133% · −45,1%** | +40% · −12,1% | +26% | −9,3% | 2,7 | 131 d | −6,6% | +13% | 0,24 |
> | 3028 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+123% · −30,5%** | +46% · −9,8% | +29% | −7,6% | 2,1 | 77 d | −9,2% | +22% | 0,03 |
> | 3029 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+146% · −34,9%** | +41% · −8,1% | +24% | −4,3% | 1,6 | 122 d | −4,3% | +18% | 0,04 |
> | 3030 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+155% · −46,6%** | +44% · −13,0% | +28% | −11,7% | 2,1 | 72 d | −10,4% | +19% | 0,30 |

> [!example]- Combinações 3031 a 3060 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3031 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+172% · −33,3%** | +39% · −5,6% | +26% | −3,6% | 2,4 | 130 d | −5,9% | +20% | 0,04 |
> | 3032 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+153% · −33,3%** | +38% · −6,4% | +26% | −5,5% | 2,0 | 130 d | −4,7% | +20% | 0,04 |
> | 3033 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL | **+199% · −53,9%** | +55% · −14,1% | +34% | −5,7% | 2,7 | 122 d | −7,4% | +20% | 0,17 |
> | 3034 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+300% · −57,6%** | +64% · −12,6% | +35% | −8,9% | 3,0 | 83 d | −13,5% | +19% | 0,40 |
> | 3035 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+266% · −45,8%** | +54% · −9,6% | +31% | −6,4% | 2,9 | 95 d | −10,4% | +17% | 0,31 |
> | 3036 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+167% · −27,3%** | +37% · −4,6% | +25% | −6,1% | 1,7 | 111 d | −5,3% | +15% | 0,11 |
> | 3037 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+138% · −32,7%** | +34% · −6,0% | +26% | −9,9% | 2,4 | 149 d | −5,5% | +18% | 0,09 |
> | 3038 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+190% · −40,6%** | +51% · −10,0% | +30% | −8,2% | 1,3 | 72 d | −8,1% | +17% | 0,37 |
> | 3039 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+88% · −25,0%** | +30% · −6,1% | +24% | −9,7% | 2,2 | 188 d | −4,5% | +15% | 0,06 |
> | 3040 | BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+183% · −36,3%** | +51% · −9,3% | +34% | −9,4% | 1,9 | 72 d | −9,6% | +21% | 0,23 |
> | 3041 | 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+97% · −16,3%** | +51% · −7,5% | +29% | −7,1% | 1,8 | 102 d | −6,1% | +14% | 0,34 |
> | 3042 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+197% · −40,6%** | +44% · −7,4% | +29% | −5,2% | 2,3 | 122 d | −6,3% | +18% | 0,19 |
> | 3043 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+223% · −60,3%** | +55% · −13,9% | +32% | −5,4% | 2,4 | 77 d | −10,6% | +23% | 0,18 |
> | 3044 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+221% · −69,6%** | +56% · −17,3% | +33% | −6,1% | 2,4 | 74 d | −11,5% | +21% | 0,19 |
> | 3045 | Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+156% · −33,8%** | +57% · −11,2% | +32% | −7,3% | 3,4 | 102 d | −11,7% | +19% | 0,02 |
> | 3046 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+247% · −49,8%** | +54% · −10,2% | +32% | −6,5% | 2,7 | 128 d | −7,0% | +20% | 0,32 |
> | 3047 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+150% · −45,2%** | +39% · −9,2% | +28% | −10,8% | 2,0 | 80 d | −8,5% | +20% | 0,22 |
> | 3048 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+158% · −54,0%** | +41% · −11,9% | +28% | −8,7% | 2,4 | 81 d | −10,0% | +17% | 0,19 |
> | 3049 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+152% · −36,1%** | +38% · −7,0% | +27% | −7,0% | 1,8 | 82 d | −7,9% | +20% | 0,02 |
> | 3050 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+90% · −20,7%** | +37% · −6,3% | +27% | −8,5% | 2,5 | 169 d | −5,6% | +16% | 0,03 |
> | 3051 | ADX ·ADX + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+204% · −41,4%** | +53% · −10,3% | +32% | −8,1% | 1,5 | 76 d | −7,9% | +19% | 0,26 |
> | 3052 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+265% · −45,4%** | +52% · −9,8% | +32% | −11,0% | 2,0 | 82 d | −8,5% | +19% | 0,28 |
> | 3053 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+170% · −37,0%** | +40% · −6,6% | +27% | −6,9% | 1,9 | 89 d | −7,4% | +18% | 0,01 |
> | 3054 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pullback ·PUL | **+159% · −38,7%** | +46% · −10,7% | +30% | −11,7% | 2,7 | 131 d | −6,8% | +19% | 0,26 |
> | 3055 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+217% · −63,5%** | +55% · −15,3% | +32% | −6,3% | 2,4 | 76 d | −11,1% | +20% | 0,35 |
> | 3056 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+147% · −36,5%** | +36% · −7,1% | +25% | −5,3% | 2,4 | 148 d | −5,6% | +16% | 0,03 |
> | 3057 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+98% · −37,7%** | +34% · −9,9% | +23% | −10,6% | 2,1 | 95 d | −7,3% | +16% | 0,09 |
> | 3058 | MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+185% · −33,0%** | +47% · −7,8% | +31% | −10,5% | 1,7 | 92 d | −6,5% | +14% | 0,29 |
> | 3059 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+222% · −44,3%** | +46% · −8,0% | +27% | −3,8% | 2,9 | 99 d | −9,7% | +15% | 0,04 |
> | 3060 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+235% · −44,0%** | +51% · −7,7% | +31% | −5,4% | 2,6 | 128 d | −6,8% | +24% | 0,14 |

> [!example]- Combinações 3061 a 3090 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3061 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN | **+276% · −73,1%** | +62% · −19,6% | +36% | −6,9% | 3,6 | 128 d | −9,3% | +18% | 0,27 |
> | 3062 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+184% · −34,9%** | +46% · −7,4% | +29% | −3,1% | 2,6 | 92 d | −9,3% | +22% | −0,03 |
> | 3063 | VWAP ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+147% · −39,6%** | +45% · −10,0% | +33% | −13,1% | 1,9 | 95 d | −6,9% | +26% | 0,43 |
> | 3064 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Tendência ·TEN | **+313% · −72,2%** | +69% · −18,9% | +40% | −8,1% | 3,5 | 119 d | −10,5% | +22% | 0,45 |
> | 3065 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+197% · −41,4%** | +45% · −7,8% | +30% | −7,0% | 2,0 | 122 d | −5,5% | +17% | 0,20 |
> | 3066 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+247% · −58,2%** | +53% · −12,8% | +33% | −5,2% | 3,0 | 111 d | −9,3% | +19% | 0,17 |
> | 3067 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN | **+200% · −38,4%** | +54% · −10,3% | +34% | −12,4% | 3,1 | 120 d | −9,1% | +22% | 0,49 |
> | 3068 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+94% · −35,5%** | +28% · −7,0% | +23% | −9,2% | 2,2 | 171 d | −4,7% | +19% | 0,08 |
> | 3069 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+178% · −39,5%** | +42% · −8,2% | +30% | −9,9% | 1,9 | 81 d | −8,3% | +21% | 0,12 |
> | 3070 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+218% · −47,7%** | +48% · −8,8% | +32% | −6,1% | 2,3 | 122 d | −6,4% | +22% | 0,15 |
> | 3071 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+206% · −45,8%** | +45% · −9,7% | +29% | −4,9% | 2,5 | 99 d | −8,4% | +17% | 0,03 |
> | 3072 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+180% · −41,6%** | +50% · −11,0% | +32% | −15,1% | 2,1 | 73 d | −10,5% | +22% | 0,41 |
> | 3073 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+125% · −41,7%** | +35% · −8,9% | +25% | −11,6% | 1,9 | 81 d | −8,4% | +24% | 0,10 |
> | 3074 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+260% · −44,0%** | +53% · −8,9% | +32% | −7,7% | 2,2 | 121 d | −6,4% | +19% | 0,30 |
> | 3075 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+161% · −30,5%** | +44% · −7,6% | +29% | −4,8% | 2,2 | 130 d | −5,2% | +17% | 0,04 |
> | 3076 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+210% · −41,2%** | +46% · −7,6% | +29% | −7,7% | 2,2 | 122 d | −6,0% | +18% | 0,17 |
> | 3077 | BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+186% · −47,0%** | +41% · −9,0% | +27% | −5,4% | 2,4 | 85 d | −9,2% | +16% | 0,13 |
> | 3078 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+156% · −33,8%** | +44% · −7,6% | +29% | −4,5% | 2,5 | 122 d | −6,9% | +22% | 0,09 |
> | 3079 | ADX ·ADX + BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN | **+234% · −65,0%** | +61% · −19,6% | +35% | −8,0% | 2,3 | 74 d | −11,3% | +21% | 0,39 |
> | 3080 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+188% · −42,8%** | +42% · −8,3% | +27% | −6,9% | 1,9 | 122 d | −5,3% | +16% | 0,22 |
> | 3081 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+218% · −46,4%** | +51% · −9,2% | +32% | −7,1% | 2,6 | 95 d | −9,3% | +25% | 0,16 |
> | 3082 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+226% · −41,3%** | +46% · −6,7% | +30% | −5,2% | 2,3 | 90 d | −8,5% | +24% | 0,04 |
> | 3083 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+198% · −37,5%** | +51% · −9,7% | +32% | −9,1% | 2,3 | 78 d | −10,3% | +23% | 0,38 |
> | 3084 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+157% · −39,8%** | +39% · −7,3% | +27% | −6,5% | 1,5 | 108 d | −5,2% | +20% | 0,05 |
> | 3085 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+171% · −59,4%** | +44% · −13,9% | +29% | −5,6% | 2,6 | 83 d | −10,5% | +15% | 0,18 |
> | 3086 | Donchian ·TEN + IFR ·TEN | **+155% · −27,2%** | +77% · −14,2% | +43% | −7,7% | 3,6 | 102 d | −13,3% | +24% | 0,48 |
> | 3087 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+244% · −56,5%** | +56% · −13,4% | +33% | −8,3% | 2,8 | 91 d | −10,8% | +18% | 0,20 |
> | 3088 | VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+145% · −34,9%** | +35% · −6,9% | +24% | −10,2% | 2,3 | 131 d | −5,6% | +20% | 0,17 |
> | 3089 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+190% · −53,5%** | +46% · −10,1% | +31% | −8,1% | 2,2 | 122 d | −6,2% | +22% | 0,14 |
> | 3090 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+140% · −33,3%** | +33% · −6,3% | +23% | −8,5% | 1,6 | 106 d | −5,6% | +19% | 0,16 |

> [!example]- Combinações 3091 a 3120 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3091 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+150% · −33,7%** | +37% · −6,9% | +26% | −9,2% | 2,3 | 129 d | −5,7% | +17% | 0,13 |
> | 3092 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+184% · −50,4%** | +48% · −11,2% | +30% | −12,9% | 2,4 | 83 d | −9,7% | +24% | 0,30 |
> | 3093 | VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+146% · −30,5%** | +42% · −7,2% | +30% | −9,4% | 2,6 | 182 d | −6,1% | +20% | 0,17 |
> | 3094 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+265% · −49,5%** | +55% · −8,4% | +34% | −6,5% | 2,6 | 128 d | −6,9% | +23% | 0,15 |
> | 3095 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+184% · −36,8%** | +41% · −6,2% | +26% | −4,5% | 2,3 | 131 d | −5,6% | +15% | 0,09 |
> | 3096 | Donchian ·TEN + Pullback ·PUL + Onda ·OND | **+148% · −33,2%** | +53% · −9,7% | +33% | −7,1% | 2,5 | 91 d | −9,4% | +26% | 0,13 |
> | 3097 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+235% · −41,3%** | +47% · −8,1% | +29% | −7,6% | 2,0 | 84 d | −8,1% | +18% | 0,13 |
> | 3098 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Bollinger ·TEN | **+277% · −48,7%** | +54% · −8,8% | +31% | −5,5% | 2,8 | 129 d | −7,3% | +18% | 0,21 |
> | 3099 | ADX ·ADX + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+244% · −49,1%** | +52% · −10,0% | +30% | −6,9% | 1,9 | 72 d | −10,2% | +24% | 0,20 |
> | 3100 | GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+199% · −41,9%** | +45% · −8,3% | +30% | −10,1% | 1,9 | 84 d | −7,6% | +19% | 0,14 |
> | 3101 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN | **+284% · −62,5%** | +58% · −14,3% | +32% | −4,6% | 2,9 | 102 d | −9,8% | +18% | 0,20 |
> | 3102 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+182% · −33,4%** | +41% · −6,4% | +29% | −8,9% | 2,1 | 134 d | −5,0% | +20% | 0,16 |
> | 3103 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+221% · −52,7%** | +62% · −14,4% | +34% | −5,6% | 2,9 | 119 d | −8,8% | +22% | 0,27 |
> | 3104 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+226% · −47,7%** | +51% · −9,6% | +32% | −7,9% | 2,7 | 102 d | −9,1% | +22% | 0,22 |
> | 3105 | VWAP ·TEN + Donchian ·TEN + Tendência ·TEN + Onda ·OND | **+191% · −47,6%** | +56% · −12,0% | +36% | −11,0% | 2,6 | 83 d | −10,9% | +27% | 0,44 |
> | 3106 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+209% · −54,8%** | +49% · −12,1% | +31% | −7,1% | 2,3 | 106 d | −7,3% | +23% | 0,29 |
> | 3107 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+121% · −37,0%** | +38% · −8,8% | +26% | −6,4% | 1,6 | 122 d | −4,4% | +20% | 0,05 |
> | 3108 | VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+125% · −29,9%** | +39% · −7,3% | +28% | −11,1% | 2,2 | 138 d | −5,1% | +22% | 0,27 |
> | 3109 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+225% · −54,4%** | +49% · −11,9% | +31% | −9,8% | 2,0 | 72 d | −10,4% | +19% | 0,40 |
> | 3110 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+128% · −29,5%** | +38% · −7,0% | +28% | −10,2% | 2,4 | 140 d | −5,8% | +17% | 0,20 |
> | 3111 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+180% · −39,8%** | +42% · −7,9% | +30% | −9,3% | 1,9 | 112 d | −6,0% | +24% | 0,21 |
> | 3112 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+204% · −50,6%** | +47% · −11,5% | +29% | −14,2% | 1,9 | 73 d | −9,6% | +25% | 0,34 |
> | 3113 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+158% · −47,6%** | +46% · −13,4% | +31% | −16,9% | 1,8 | 73 d | −9,1% | +27% | 0,36 |
> | 3114 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+164% · −25,8%** | +37% · −4,4% | +28% | −7,0% | 2,3 | 168 d | −5,1% | +20% | 0,05 |
> | 3115 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+171% · −37,1%** | +41% · −6,7% | +27% | −5,0% | 1,9 | 122 d | −5,4% | +17% | 0,14 |
> | 3116 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+146% · −48,0%** | +40% · −10,6% | +28% | −14,5% | 1,9 | 76 d | −9,0% | +25% | 0,28 |
> | 3117 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+219% · −43,0%** | +49% · −7,7% | +32% | −7,0% | 2,4 | 122 d | −6,8% | +19% | 0,18 |
> | 3118 | BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+151% · −48,7%** | +39% · −9,5% | +28% | −7,2% | 2,1 | 81 d | −8,9% | +23% | 0,12 |
> | 3119 | ADX ·ADX + IFR ·TEN + MACD ·TEN | **+175% · −36,2%** | +61% · −12,0% | +38% | −8,4% | 2,2 | 122 d | −6,2% | +22% | 0,37 |
> | 3120 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+117% · −36,3%** | +31% · −7,0% | +24% | −11,1% | 1,5 | 107 d | −5,3% | +19% | 0,17 |

> [!example]- Combinações 3121 a 3150 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3121 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+209% · −43,1%** | +48% · −8,5% | +30% | −5,5% | 2,6 | 122 d | −7,4% | +25% | 0,03 |
> | 3122 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+236% · −55,2%** | +53% · −11,5% | +36% | −10,1% | 2,7 | 106 d | −9,1% | +30% | 0,38 |
> | 3123 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+170% · −42,0%** | +42% · −8,8% | +29% | −11,9% | 2,0 | 109 d | −6,6% | +20% | 0,22 |
> | 3124 | BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+149% · −50,2%** | +39% · −10,1% | +28% | −7,2% | 2,1 | 83 d | −8,6% | +22% | 0,12 |
> | 3125 | Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+98% · −17,6%** | +38% · −5,3% | +25% | −6,5% | 1,7 | 100 d | −6,1% | +14% | −0,02 |
> | 3126 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+159% · −39,1%** | +38% · −7,2% | +24% | −5,8% | 1,8 | 122 d | −5,0% | +16% | 0,14 |
> | 3127 | ADX ·ADX + Quinta ·QUI + Tendência ·TEN ⚠️ | **+150% · −43,4%** | +55% · −14,5% | +35% | −8,9% | 2,9 | 130 d | −7,5% | +25% | 0,04 |
> | 3128 | Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+99% · −18,1%** | +38% · −5,5% | +25% | −6,2% | 1,5 | 102 d | −5,7% | +14% | 0,03 |
> | 3129 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+201% · −43,5%** | +54% · −9,9% | +32% | −5,6% | 2,3 | 106 d | −7,6% | +21% | 0,14 |
> | 3130 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+161% · −35,0%** | +39% · −6,7% | +29% | −10,0% | 2,1 | 143 d | −4,9% | +20% | 0,16 |
> | 3131 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+166% · −44,1%** | +42% · −9,4% | +29% | −13,2% | 2,0 | 101 d | −6,9% | +23% | 0,32 |
> | 3132 | ADX ·ADX + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+175% · −36,7%** | +59% · −12,1% | +32% | −6,4% | 1,4 | 75 d | −8,1% | +19% | 0,33 |
> | 3133 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+232% · −49,2%** | +51% · −10,5% | +30% | −8,1% | 2,6 | 83 d | −10,9% | +18% | 0,31 |
> | 3134 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+140% · −35,5%** | +35% · −7,0% | +27% | −6,8% | 2,2 | 140 d | −5,2% | +21% | 0,17 |
> | 3135 | Donchian ·TEN + Tendência ·TEN + Onda ·OND | **+191% · −39,9%** | +66% · −13,0% | +41% | −10,6% | 2,9 | 89 d | −12,1% | +33% | 0,40 |
> | 3136 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+189% · −61,6%** | +45% · −14,4% | +29% | −5,9% | 2,5 | 127 d | −7,0% | +20% | 0,07 |
> | 3137 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+171% · −56,4%** | +42% · −12,1% | +28% | −4,9% | 2,3 | 128 d | −6,3% | +20% | 0,05 |
> | 3138 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+248% · −48,1%** | +52% · −9,6% | +30% | −5,4% | 1,9 | 74 d | −9,7% | +22% | 0,11 |
> | 3139 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+168% · −38,4%** | +40% · −7,3% | +27% | −8,1% | 2,0 | 89 d | −7,8% | +19% | 0,07 |
> | 3140 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+196% · −46,1%** | +45% · −8,5% | +31% | −6,6% | 2,1 | 81 d | −9,1% | +22% | 0,14 |
> | 3141 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+183% · −44,6%** | +45% · −8,8% | +28% | −4,7% | 1,8 | 77 d | −8,6% | +22% | 0,01 |
> | 3142 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+92% · −19,0%** | +36% · −5,5% | +27% | −8,6% | 1,3 | 87 d | −6,4% | +16% | 0,11 |
> | 3143 | GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+171% · −36,9%** | +47% · −9,1% | +28% | −9,6% | 2,2 | 81 d | −9,5% | +22% | 0,18 |
> | 3144 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+177% · −47,3%** | +44% · −9,4% | +29% | −6,6% | 2,4 | 91 d | −9,1% | +21% | 0,07 |
> | 3145 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+176% · −47,2%** | +50% · −11,6% | +32% | −6,7% | 3,2 | 128 d | −8,8% | +18% | 0,26 |
> | 3146 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+187% · −49,0%** | +44% · −10,0% | +29% | −6,3% | 2,6 | 102 d | −8,9% | +18% | 0,08 |
> | 3147 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+134% · −39,3%** | +43% · −10,4% | +29% | −13,5% | 2,3 | 81 d | −9,9% | +25% | 0,18 |
> | 3148 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL | **+212% · −56,9%** | +50% · −13,0% | +32% | −8,8% | 3,3 | 120 d | −10,0% | +14% | 0,30 |
> | 3149 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+231% · −51,6%** | +56% · −11,0% | +34% | −9,8% | 2,1 | 77 d | −9,9% | +25% | 0,32 |
> | 3150 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+251% · −48,2%** | +58% · −9,8% | +33% | −6,1% | 2,6 | 102 d | −9,0% | +27% | 0,11 |

> [!example]- Combinações 3151 a 3180 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3151 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+286% · −60,2%** | +62% · −14,5% | +34% | −6,3% | 2,4 | 76 d | −11,6% | +23% | 0,39 |
> | 3152 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+193% · −61,7%** | +49% · −14,2% | +32% | −7,9% | 2,6 | 83 d | −11,1% | +20% | 0,23 |
> | 3153 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR | **+257% · −59,9%** | +58% · −12,9% | +33% | −5,3% | 2,9 | 127 d | −8,1% | +22% | 0,18 |
> | 3154 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+191% · −47,1%** | +44% · −9,5% | +26% | −5,5% | 2,3 | 81 d | −10,3% | +16% | 0,04 |
> | 3155 | MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+108% · −22,9%** | +34% · −5,0% | +27% | −6,3% | 2,3 | 209 d | −5,0% | +22% | −0,03 |
> | 3156 | VWAP ·TEN + Donchian ·TEN + Bollinger ·TEN + Onda ·OND | **+191% · −37,3%** | +51% · −9,6% | +30% | −12,7% | 2,3 | 83 d | −9,6% | +21% | 0,33 |
> | 3157 | Donchian ·TEN + MACD ·TEN + Tendência ·TEN | **+195% · −44,4%** | +66% · −16,4% | +41% | −10,4% | 3,2 | 95 d | −12,7% | +25% | 0,60 |
> | 3158 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Tendência ·TEN | **+213% · −67,6%** | +55% · −17,1% | +35% | −10,4% | 2,8 | 83 d | −12,5% | +18% | 0,47 |
> | 3159 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+133% · −46,4%** | +41% · −12,8% | +27% | −13,5% | 1,7 | 72 d | −9,6% | +20% | 0,28 |
> | 3160 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+165% · −37,9%** | +38% · −6,7% | +25% | −5,9% | 1,9 | 82 d | −8,3% | +22% | 0,02 |
> | 3161 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+125% · −39,1%** | +33% · −7,9% | +23% | −6,6% | 2,3 | 148 d | −5,5% | +15% | 0,07 |
> | 3162 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+170% · −56,3%** | +42% · −12,0% | +28% | −5,7% | 2,3 | 120 d | −6,8% | +19% | 0,13 |
> | 3163 | VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+103% · −39,3%** | +34% · −9,9% | +26% | −6,5% | 2,3 | 129 d | −6,0% | +15% | 0,14 |
> | 3164 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+188% · −45,1%** | +50% · −12,5% | +29% | −13,7% | 1,8 | 72 d | −9,8% | +23% | 0,35 |
> | 3165 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+124% · −34,3%** | +38% · −8,5% | +27% | −9,6% | 1,4 | 77 d | −7,7% | +17% | 0,08 |
> | 3166 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+204% · −52,2%** | +52% · −11,9% | +33% | −14,7% | 2,4 | 83 d | −10,1% | +28% | 0,38 |
> | 3167 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+322% · −49,1%** | +63% · −9,9% | +36% | −5,3% | 3,2 | 120 d | −9,9% | +25% | 0,15 |
> | 3168 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+150% · −43,4%** | +38% · −9,2% | +27% | −8,5% | 1,8 | 81 d | −8,4% | +21% | 0,14 |
> | 3169 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+250% · −60,7%** | +58% · −14,4% | +33% | −5,8% | 2,8 | 119 d | −8,6% | +19% | 0,34 |
> | 3170 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+233% · −44,0%** | +62% · −11,3% | +36% | −10,7% | 2,6 | 83 d | −11,0% | +30% | 0,27 |
> | 3171 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+217% · −41,8%** | +46% · −6,2% | +28% | −3,7% | 2,6 | 159 d | −6,5% | +19% | 0,03 |
> | 3172 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+104% · −40,7%** | +34% · −10,2% | +25% | −7,4% | 2,2 | 91 d | −8,4% | +15% | 0,12 |
> | 3173 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+180% · −45,7%** | +45% · −8,9% | +28% | −6,1% | 1,8 | 76 d | −9,1% | +24% | 0,07 |
> | 3174 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+220% · −59,2%** | +52% · −13,5% | +33% | −6,3% | 2,7 | 122 d | −7,8% | +22% | 0,19 |
> | 3175 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+229% · −60,9%** | +57% · −14,2% | +33% | −8,8% | 3,1 | 95 d | −12,1% | +17% | 0,41 |
> | 3176 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+175% · −44,9%** | +51% · −11,6% | +31% | −7,4% | 2,0 | 77 d | −9,6% | +27% | 0,23 |
> | 3177 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+242% · −61,1%** | +55% · −13,8% | +33% | −7,9% | 2,8 | 129 d | −7,7% | +19% | 0,34 |
> | 3178 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN ⚠️ | **+217% · −56,1%** | +50% · −12,5% | +32% | −6,5% | 2,5 | 83 d | −10,4% | +20% | 0,14 |
> | 3179 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Tendência ·TEN | **+172% · −57,0%** | +52% · −16,5% | +35% | −9,2% | 2,7 | 83 d | −11,6% | +16% | 0,48 |
> | 3180 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+197% · −51,8%** | +45% · −10,3% | +30% | −5,6% | 2,7 | 131 d | −6,9% | +19% | 0,08 |

> [!example]- Combinações 3181 a 3210 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3181 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+193% · −47,7%** | +45% · −9,1% | +31% | −6,6% | 2,1 | 83 d | −8,9% | +22% | 0,09 |
> | 3182 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+185% · −42,6%** | +52% · −10,4% | +34% | −8,1% | 1,0 | 71 d | −8,5% | +17% | 0,24 |
> | 3183 | VWAP ·TEN + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+171% · −47,5%** | +52% · −12,4% | +34% | −12,6% | 2,4 | 78 d | −11,5% | +28% | 0,36 |
> | 3184 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+56% · −12,1%** | +26% · −3,7% | +22% | −4,4% | 1,6 | 147 d | −3,3% | +18% | 0,06 |
> | 3185 | VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL | **+105% · −38,5%** | +43% · −13,7% | +28% | −12,6% | 2,8 | 118 d | −8,8% | +15% | 0,15 |
> | 3186 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+195% · −43,9%** | +42% · −9,3% | +28% | −7,8% | 2,3 | 92 d | −8,8% | +19% | 0,08 |
> | 3187 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+114% · −37,6%** | +31% · −7,5% | +24% | −4,9% | 2,2 | 171 d | −5,2% | +16% | 0,10 |
> | 3188 | GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+175% · −37,3%** | +58% · −12,9% | +32% | −9,3% | 2,1 | 77 d | −10,1% | +22% | 0,28 |
> | 3189 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+142% · −40,7%** | +43% · −10,1% | +29% | −9,0% | 2,2 | 91 d | −8,6% | +20% | 0,31 |
> | 3190 | BB explosão ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+202% · −51,3%** | +56% · −13,4% | +37% | −9,9% | 2,8 | 94 d | −10,5% | +28% | 0,36 |
> | 3191 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+215% · −51,6%** | +46% · −10,4% | +30% | −6,7% | 2,3 | 83 d | −9,7% | +21% | 0,23 |
> | 3192 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+204% · −51,9%** | +45% · −10,4% | +27% | −4,1% | 2,4 | 122 d | −6,9% | +19% | 0,03 |
> | 3193 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+196% · −43,9%** | +45% · −8,9% | +30% | −11,0% | 1,9 | 84 d | −8,0% | +20% | 0,23 |
> | 3194 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+179% · −51,5%** | +45% · −10,6% | +28% | −7,6% | 2,5 | 122 d | −7,3% | +18% | 0,20 |
> | 3195 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+143% · −51,7%** | +38% · −10,3% | +25% | −5,0% | 2,3 | 128 d | −6,3% | +15% | 0,06 |
> | 3196 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+224% · −49,1%** | +51% · −9,7% | +31% | −7,1% | 2,5 | 122 d | −7,3% | +21% | 0,18 |
> | 3197 | ADX ·ADX + IFR ·TEN + Pullback ·PUL | **+172% · −31,8%** | +59% · −10,0% | +36% | −6,2% | 2,7 | 122 d | −8,0% | +20% | 0,08 |
> | 3198 | Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+124% · −29,2%** | +45% · −8,0% | +28% | −2,8% | 2,7 | 120 d | −8,5% | +17% | −0,08 |
> | 3199 | VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+135% · −40,2%** | +36% · −8,1% | +27% | −8,5% | 2,0 | 125 d | −5,7% | +23% | 0,14 |
> | 3200 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN | **+258% · −77,7%** | +69% · −21,7% | +39% | −7,6% | 2,8 | 82 d | −13,5% | +20% | 0,46 |
> | 3201 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+187% · −49,5%** | +45% · −10,2% | +28% | −4,6% | 2,2 | 122 d | −6,6% | +20% | 0,11 |
> | 3202 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+191% · −41,8%** | +43% · −8,0% | +27% | −7,1% | 1,8 | 122 d | −5,4% | +15% | 0,22 |
> | 3203 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+304% · −59,3%** | +64% · −12,9% | +37% | −5,9% | 2,7 | 119 d | −8,6% | +25% | 0,33 |
> | 3204 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+204% · −54,7%** | +51% · −13,0% | +32% | −12,7% | 2,0 | 72 d | −11,1% | +21% | 0,36 |
> | 3205 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+133% · −42,1%** | +41% · −11,1% | +27% | −12,3% | 1,8 | 77 d | −8,9% | +22% | 0,07 |
> | 3206 | 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+151% · −25,7%** | +41% · −5,1% | +27% | −6,5% | 1,7 | 111 d | −5,8% | +13% | 0,06 |
> | 3207 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+127% · −31,0%** | +33% · −6,1% | +23% | −4,2% | 2,0 | 161 d | −4,8% | +17% | 0,02 |
> | 3208 | GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+233% · −42,8%** | +47% · −8,6% | +29% | −8,8% | 2,0 | 84 d | −8,5% | +19% | 0,22 |
> | 3209 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+135% · −36,4%** | +34% · −6,4% | +24% | −4,6% | 1,6 | 131 d | −3,8% | +19% | 0,03 |
> | 3210 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+254% · −60,6%** | +57% · −13,5% | +33% | −5,4% | 3,0 | 127 d | −8,5% | +21% | 0,21 |

> [!example]- Combinações 3211 a 3240 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3211 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+176% · −49,3%** | +44% · −10,4% | +29% | −8,0% | 2,5 | 87 d | −10,0% | +20% | 0,22 |
> | 3212 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+189% · −46,5%** | +53% · −12,1% | +31% | −5,5% | 1,7 | 72 d | −9,8% | +25% | 0,08 |
> | 3213 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+229% · −48,2%** | +49% · −9,9% | +30% | −9,7% | 1,2 | 71 d | −8,7% | +19% | 0,31 |
> | 3214 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+164% · −47,4%** | +50% · −12,3% | +31% | −8,1% | 2,6 | 83 d | −11,2% | +19% | 0,12 |
> | 3215 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+218% · −46,6%** | +46% · −8,9% | +27% | −5,4% | 2,8 | 99 d | −10,2% | +13% | 0,18 |
> | 3216 | Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+73% · −16,0%** | +32% · −5,2% | +25% | −5,6% | 2,3 | 188 d | −5,4% | +20% | −0,00 |
> | 3217 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+200% · −52,5%** | +49% · −10,7% | +32% | −9,0% | 2,5 | 83 d | −10,6% | +25% | 0,22 |
> | 3218 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+224% · −40,1%** | +46% · −8,2% | +31% | −10,9% | 2,2 | 138 d | −5,6% | +22% | 0,35 |
> | 3219 | BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+118% · −50,3%** | +38% · −13,2% | +27% | −6,2% | 2,4 | 95 d | −9,1% | +13% | 0,13 |
> | 3220 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+182% · −62,1%** | +48% · −14,8% | +29% | −5,7% | 2,3 | 78 d | −10,7% | +17% | 0,21 |
> | 3221 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+268% · −48,4%** | +57% · −9,5% | +35% | −8,8% | 2,8 | 115 d | −8,9% | +29% | 0,30 |
> | 3222 | ADX ·ADX + Donchian ·TEN + Tendência ·TEN + Onda ·OND | **+262% · −57,5%** | +69% · −15,5% | +40% | −9,8% | 3,3 | 127 d | −9,3% | +30% | 0,31 |
> | 3223 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+174% · −58,5%** | +45% · −13,5% | +29% | −5,6% | 2,5 | 83 d | −10,9% | +16% | 0,16 |
> | 3224 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+212% · −65,8%** | +50% · −15,9% | +32% | −7,8% | 2,4 | 119 d | −7,8% | +24% | 0,20 |
> | 3225 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+197% · −32,5%** | +42% · −6,2% | +28% | −8,0% | 2,2 | 150 d | −5,6% | +19% | 0,16 |
> | 3226 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+288% · −47,4%** | +58% · −9,9% | +34% | −7,9% | 2,6 | 83 d | −11,5% | +26% | 0,32 |
> | 3227 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+216% · −62,8%** | +60% · −18,8% | +37% | −7,9% | 1,9 | 72 d | −10,6% | +25% | 0,31 |
> | 3228 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+191% · −42,5%** | +46% · −8,4% | +30% | −8,4% | 1,9 | 122 d | −5,8% | +20% | 0,25 |
> | 3229 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+223% · −49,1%** | +50% · −10,2% | +32% | −7,9% | 2,7 | 111 d | −9,0% | +21% | 0,25 |
> | 3230 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Tendência ·TEN | **+272% · −59,3%** | +69% · −16,9% | +40% | −9,7% | 3,4 | 127 d | −9,9% | +28% | 0,43 |
> | 3231 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+179% · −43,3%** | +42% · −9,2% | +27% | −11,0% | 1,9 | 81 d | −9,0% | +24% | 0,12 |
> | 3232 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+158% · −33,4%** | +37% · −5,5% | +26% | −3,6% | 2,1 | 161 d | −5,1% | +17% | −0,01 |
> | 3233 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+186% · −29,8%** | +48% · −6,2% | +31% | −7,7% | 2,5 | 103 d | −8,9% | +25% | 0,10 |
> | 3234 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+191% · −39,3%** | +45% · −7,5% | +28% | −4,8% | 2,3 | 122 d | −6,7% | +23% | 0,06 |
> | 3235 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+213% · −54,8%** | +49% · −10,9% | +31% | −5,9% | 2,3 | 122 d | −6,8% | +23% | 0,16 |
> | 3236 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+181% · −41,1%** | +42% · −8,6% | +27% | −8,4% | 2,0 | 80 d | −9,4% | +18% | 0,19 |
> | 3237 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+125% · −30,1%** | +37% · −6,3% | +24% | −3,4% | 2,2 | 91 d | −8,8% | +15% | −0,04 |
> | 3238 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+197% · −57,9%** | +49% · −13,2% | +30% | −6,3% | 2,9 | 99 d | −11,1% | +14% | 0,11 |
> | 3239 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+164% · −48,5%** | +49% · −13,7% | +31% | −8,4% | 2,2 | 73 d | −12,2% | +18% | 0,13 |
> | 3240 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+163% · −46,0%** | +41% · −9,7% | +28% | −12,3% | 1,6 | 72 d | −9,5% | +22% | 0,10 |

> [!example]- Combinações 3241 a 3270 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3241 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+226% · −61,2%** | +57% · −13,7% | +35% | −9,2% | 2,2 | 77 d | −10,8% | +29% | 0,33 |
> | 3242 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+244% · −41,3%** | +49% · −8,0% | +29% | −6,4% | 2,5 | 99 d | −9,1% | +19% | 0,14 |
> | 3243 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+211% · −40,3%** | +44% · −7,7% | +29% | −7,9% | 1,9 | 81 d | −9,0% | +20% | 0,13 |
> | 3244 | VWAP ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+132% · −39,4%** | +49% · −14,0% | +34% | −10,9% | 2,3 | 107 d | −7,9% | +23% | 0,38 |
> | 3245 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+286% · −48,5%** | +60% · −9,8% | +34% | −5,3% | 2,7 | 102 d | −9,8% | +26% | 0,12 |
> | 3246 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+207% · −61,9%** | +52% · −14,8% | +34% | −7,6% | 2,5 | 81 d | −12,0% | +23% | 0,23 |
> | 3247 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+182% · −46,3%** | +45% · −9,0% | +28% | −6,1% | 1,8 | 76 d | −9,1% | +23% | 0,08 |
> | 3248 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+215% · −47,0%** | +50% · −9,4% | +33% | −9,7% | 2,0 | 122 d | −6,1% | +20% | 0,32 |
> | 3249 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+198% · −36,7%** | +43% · −6,9% | +28% | −6,5% | 2,0 | 90 d | −8,3% | +24% | 0,12 |
> | 3250 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+197% · −57,7%** | +50% · −12,8% | +34% | −9,9% | 2,4 | 83 d | −10,6% | +24% | 0,40 |
> | 3251 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+205% · −47,4%** | +49% · −9,3% | +31% | −7,5% | 1,8 | 76 d | −9,3% | +23% | 0,10 |
> | 3252 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+163% · −41,9%** | +49% · −11,0% | +29% | −11,4% | 2,8 | 110 d | −9,7% | +18% | 0,15 |
> | 3253 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+194% · −60,0%** | +50% · −14,1% | +30% | −7,3% | 2,8 | 91 d | −12,0% | +13% | 0,27 |
> | 3254 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN | **+245% · −53,5%** | +68% · −14,6% | +37% | −8,3% | 2,9 | 102 d | −10,4% | +28% | 0,37 |
> | 3255 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+95% · −34,9%** | +29% · −6,8% | +23% | −9,3% | 1,9 | 176 d | −4,4% | +18% | 0,10 |
> | 3256 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+166% · −61,8%** | +43% · −14,3% | +31% | −9,6% | 2,6 | 95 d | −9,8% | +16% | 0,31 |
> | 3257 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+131% · −33,0%** | +35% · −6,3% | +24% | −5,0% | 1,3 | 122 d | −4,5% | +19% | 0,00 |
> | 3258 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+161% · −38,0%** | +38% · −6,9% | +24% | −5,9% | 1,6 | 122 d | −5,1% | +16% | 0,12 |
> | 3259 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+185% · −46,3%** | +46% · −10,2% | +31% | −11,7% | 1,6 | 72 d | −9,6% | +24% | 0,30 |
> | 3260 | ADX ·ADX + IFR ·TEN + Quinta ·QUI ⚠️ | **+146% · −29,7%** | +53% · −9,9% | +33% | −6,3% | 2,2 | 122 d | −6,5% | +19% | 0,08 |
> | 3261 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+167% · −33,3%** | +37% · −5,4% | +26% | −4,4% | 2,4 | 142 d | −6,1% | +19% | 0,15 |
> | 3262 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+188% · −49,0%** | +44% · −10,1% | +26% | −6,7% | 2,3 | 81 d | −10,8% | +14% | 0,18 |
> | 3263 | VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+173% · −57,1%** | +50% · −13,8% | +32% | −8,2% | 2,9 | 120 d | −9,3% | +15% | 0,42 |
> | 3264 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+138% · −28,8%** | +35% · −4,8% | +26% | −7,3% | 2,0 | 182 d | −4,7% | +17% | 0,04 |
> | 3265 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+161% · −43,7%** | +49% · −11,7% | +29% | −11,1% | 3,0 | 110 d | −10,3% | +17% | 0,14 |
> | 3266 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+208% · −40,0%** | +48% · −7,2% | +29% | −5,4% | 2,3 | 127 d | −6,7% | +23% | 0,07 |
> | 3267 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+264% · −58,4%** | +61% · −13,5% | +36% | −7,4% | 2,1 | 72 d | −12,0% | +26% | 0,34 |
> | 3268 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+295% · −38,3%** | +66% · −9,0% | +35% | −5,2% | 2,7 | 105 d | −9,4% | +23% | 0,27 |
> | 3269 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+245% · −46,3%** | +51% · −8,1% | +29% | −5,5% | 2,4 | 129 d | −6,7% | +17% | 0,19 |
> | 3270 | 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+108% · −21,5%** | +41% · −6,4% | +30% | −8,6% | 2,1 | 101 d | −7,6% | +20% | 0,07 |

> [!example]- Combinações 3271 a 3300 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3271 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+171% · −39,0%** | +40% · −7,2% | +27% | −8,0% | 1,9 | 89 d | −8,0% | +19% | 0,11 |
> | 3272 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+260% · −69,8%** | +62% · −17,3% | +37% | −6,7% | 2,1 | 72 d | −12,6% | +24% | 0,35 |
> | 3273 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+174% · −47,9%** | +42% · −9,4% | +28% | −6,8% | 2,3 | 131 d | −6,1% | +20% | 0,15 |
> | 3274 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+189% · −50,0%** | +48% · −10,3% | +31% | −8,8% | 2,3 | 81 d | −10,7% | +26% | 0,14 |
> | 3275 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+170% · −31,0%** | +39% · −4,8% | +26% | −3,2% | 2,1 | 130 d | −5,8% | +18% | −0,01 |
> | 3276 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+192% · −39,3%** | +46% · −7,5% | +30% | −7,0% | 1,9 | 122 d | −6,0% | +18% | 0,11 |
> | 3277 | ADX ·ADX + Donchian ·TEN + Bollinger ·TEN | **+223% · −41,0%** | +72% · −13,1% | +36% | −5,2% | 2,6 | 106 d | −9,2% | +22% | 0,27 |
> | 3278 | BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+162% · −39,6%** | +38% · −7,2% | +26% | −7,4% | 1,9 | 81 d | −8,8% | +21% | 0,14 |
> | 3279 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+220% · −54,8%** | +51% · −12,0% | +32% | −6,5% | 2,4 | 83 d | −10,5% | +21% | 0,16 |
> | 3280 | Donchian ·TEN + Tendência ·TEN | **+156% · −40,1%** | +79% · −20,1% | +45% | −10,3% | 3,3 | 98 d | −17,0% | +20% | 0,63 |
> | 3281 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Tendência ·TEN | **+180% · −66,7%** | +49% · −16,6% | +32% | −9,2% | 2,5 | 81 d | −12,4% | +14% | 0,31 |
> | 3282 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+221% · −44,9%** | +51% · −8,9% | +32% | −7,1% | 2,7 | 102 d | −9,7% | +26% | 0,16 |
> | 3283 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+155% · −39,8%** | +42% · −10,4% | +28% | −14,5% | 1,6 | 107 d | −6,1% | +20% | 0,41 |
> | 3284 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+207% · −67,0%** | +50% · −16,7% | +33% | −9,0% | 2,4 | 108 d | −8,3% | +21% | 0,30 |
> | 3285 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+114% · −29,8%** | +36% · −7,4% | +25% | −5,2% | 2,1 | 131 d | −5,6% | +19% | 0,03 |
> | 3286 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+206% · −53,0%** | +49% · −11,0% | +31% | −8,8% | 2,5 | 122 d | −7,5% | +23% | 0,20 |
> | 3287 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+192% · −47,0%** | +53% · −12,3% | +31% | −5,2% | 1,7 | 72 d | −9,9% | +24% | 0,12 |
> | 3288 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+223% · −58,4%** | +52% · −13,1% | +32% | −6,4% | 2,6 | 122 d | −7,9% | +23% | 0,20 |
> | 3289 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+113% · −39,9%** | +36% · −10,4% | +24% | −8,9% | 2,4 | 128 d | −6,7% | +14% | 0,13 |
> | 3290 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+163% · −35,0%** | +39% · −6,7% | +29% | −10,0% | 2,0 | 182 d | −4,8% | +19% | 0,20 |
> | 3291 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+133% · −36,9%** | +40% · −9,4% | +26% | −7,3% | 2,5 | 148 d | −6,6% | +14% | 0,06 |
> | 3292 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+209% · −44,1%** | +46% · −9,3% | +29% | −4,9% | 2,3 | 99 d | −8,7% | +18% | 0,03 |
> | 3293 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+235% · −46,0%** | +52% · −7,5% | +32% | −6,5% | 2,3 | 127 d | −6,8% | +22% | 0,12 |
> | 3294 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+218% · −70,5%** | +55% · −17,9% | +34% | −6,1% | 2,4 | 82 d | −11,4% | +20% | 0,21 |
> | 3295 | GPS médias ·TEN | **+67% · −23,3%** | +67% · −23,3% | +36% | −15,3% | 2,4 | 74 d | −20,3% | +16% | — |
> | 3296 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN | **+197% · −65,9%** | +56% · −20,5% | +35% | −7,4% | 3,0 | 128 d | −8,9% | +18% | 0,18 |
> | 3297 | BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+121% · −48,0%** | +38% · −12,5% | +27% | −6,3% | 2,3 | 85 d | −9,6% | +14% | 0,10 |
> | 3298 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+96% · −32,8%** | +29% · −5,5% | +22% | −5,8% | 1,6 | 98 d | −6,5% | +17% | 0,03 |
> | 3299 | VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+87% · −38,8%** | +38% · −13,8% | +25% | −14,6% | 1,9 | 74 d | −10,3% | +15% | 0,29 |
> | 3300 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Bollinger ·TEN | **+272% · −52,7%** | +56% · −10,0% | +32% | −8,6% | 2,6 | 128 d | −7,4% | +19% | 0,40 |

> [!example]- Combinações 3301 a 3330 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3301 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+217% · −61,3%** | +54% · −14,5% | +33% | −9,6% | 2,8 | 91 d | −12,5% | +18% | 0,27 |
> | 3302 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+129% · −46,6%** | +35% · −10,2% | +26% | −12,9% | 1,3 | 77 d | −8,0% | +21% | 0,17 |
> | 3303 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+195% · −34,6%** | +43% · −6,5% | +29% | −5,2% | 2,1 | 122 d | −6,5% | +21% | −0,01 |
> | 3304 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+196% · −60,6%** | +49% · −13,9% | +32% | −7,9% | 2,5 | 83 d | −11,4% | +21% | 0,22 |
> | 3305 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+221% · −48,3%** | +47% · −9,3% | +28% | −4,4% | 1,5 | 72 d | −9,4% | +20% | 0,15 |
> | 3306 | Donchian ·TEN + Bollinger ·TEN | **+141% · −24,1%** | +69% · −12,5% | +34% | −5,7% | 3,2 | 100 d | −12,9% | +20% | 0,19 |
> | 3307 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+214% · −49,1%** | +49% · −10,4% | +28% | −8,3% | 1,9 | 77 d | −9,6% | +21% | 0,28 |
> | 3308 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+200% · −39,9%** | +53% · −9,2% | +31% | −4,6% | 2,7 | 129 d | −7,7% | +19% | 0,13 |
> | 3309 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+123% · −48,4%** | +41% · −13,0% | +27% | −6,1% | 2,3 | 82 d | −10,9% | +13% | 0,03 |
> | 3310 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+217% · −49,9%** | +48% · −10,3% | +29% | −8,8% | 2,4 | 81 d | −11,3% | +19% | 0,20 |
> | 3311 | MACD ·TEN + Quinta ·QUI ⚠️ | **+47% · −9,7%** | +30% · −4,4% | +24% | −7,1% | 1,7 | 153 d | −4,3% | +20% | −0,04 |
> | 3312 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+146% · −56,8%** | +39% · −12,2% | +28% | −6,6% | 2,7 | 120 d | −8,8% | +14% | 0,13 |
> | 3313 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+160% · −48,3%** | +49% · −13,6% | +29% | −12,4% | 2,8 | 102 d | −10,4% | +15% | 0,35 |
> | 3314 | 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+64% · −22,1%** | +29% · −6,8% | +22% | −4,0% | 1,5 | 111 d | −5,8% | +17% | −0,01 |
> | 3315 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+232% · −58,2%** | +51% · −12,5% | +31% | −5,5% | 2,5 | 83 d | −11,9% | +17% | 0,21 |
> | 3316 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+239% · −42,3%** | +50% · −8,9% | +32% | −9,1% | 2,1 | 83 d | −9,5% | +23% | 0,31 |
> | 3317 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+127% · −38,5%** | +35% · −8,0% | +25% | −10,2% | 1,9 | 94 d | −7,9% | +22% | 0,02 |
> | 3318 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+160% · −51,6%** | +50% · −14,1% | +31% | −9,2% | 2,5 | 83 d | −11,8% | +17% | 0,38 |
> | 3319 | BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+211% · −53,7%** | +46% · −11,2% | +30% | −7,9% | 2,3 | 83 d | −10,2% | +19% | 0,33 |
> | 3320 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Tendência ·TEN | **+238% · −68,2%** | +58% · −16,2% | +36% | −8,9% | 2,9 | 95 d | −12,0% | +17% | 0,52 |
> | 3321 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+250% · −43,1%** | +51% · −7,4% | +31% | −4,4% | 2,6 | 159 d | −6,9% | +20% | 0,04 |
> | 3322 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+159% · −36,7%** | +39% · −6,7% | +27% | −5,8% | 1,4 | 122 d | −4,8% | +19% | 0,03 |
> | 3323 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+149% · −37,9%** | +55% · −12,7% | +34% | −8,9% | 1,2 | 72 d | −8,9% | +20% | 0,26 |
> | 3324 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+201% · −42,7%** | +55% · −10,1% | +32% | −6,8% | 2,6 | 127 d | −7,6% | +24% | 0,24 |
> | 3325 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+189% · −44,7%** | +43% · −8,9% | +27% | −8,3% | 1,8 | 122 d | −5,8% | +18% | 0,28 |
> | 3326 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR | **+109% · −31,4%** | +43% · −9,9% | +29% | −5,6% | 2,3 | 91 d | −9,5% | +18% | −0,03 |
> | 3327 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+208% · −48,0%** | +50% · −9,5% | +31% | −7,4% | 1,8 | 76 d | −9,4% | +23% | 0,12 |
> | 3328 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN + MACD ·TEN | **+270% · −53,7%** | +59% · −10,6% | +35% | −8,7% | 2,6 | 128 d | −7,5% | +20% | 0,42 |
> | 3329 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+225% · −48,0%** | +62% · −12,3% | +34% | −4,8% | 2,9 | 127 d | −8,8% | +25% | 0,09 |
> | 3330 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN | **+320% · −72,0%** | +66% · −18,9% | +36% | −7,3% | 2,9 | 97 d | −11,8% | +20% | 0,41 |

> [!example]- Combinações 3331 a 3360 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3331 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+233% · −57,8%** | +49% · −12,5% | +30% | −5,5% | 2,3 | 120 d | −7,7% | +22% | 0,18 |
> | 3332 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+181% · −43,6%** | +42% · −9,2% | +27% | −11,2% | 1,9 | 81 d | −9,1% | +24% | 0,15 |
> | 3333 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+135% · −40,6%** | +41% · −10,6% | +27% | −12,5% | 1,7 | 77 d | −9,1% | +23% | 0,14 |
> | 3334 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL | **+136% · −47,1%** | +42% · −12,5% | +29% | −9,1% | 2,8 | 120 d | −9,1% | +14% | 0,22 |
> | 3335 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+225% · −49,8%** | +48% · −11,3% | +30% | −13,2% | 1,7 | 72 d | −10,2% | +22% | 0,31 |
> | 3336 | Donchian ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+128% · −26,1%** | +47% · −8,5% | +30% | −7,3% | 2,6 | 110 d | −9,4% | +23% | 0,12 |
> | 3337 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+321% · −58,9%** | +61% · −12,9% | +35% | −5,9% | 3,0 | 111 d | −10,9% | +20% | 0,36 |
> | 3338 | ADX ·ADX + VWAP ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+188% · −52,9%** | +47% · −10,2% | +31% | −9,3% | 2,1 | 122 d | −6,7% | +24% | 0,26 |
> | 3339 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+256% · −49,8%** | +63% · −13,5% | +34% | −6,0% | 1,9 | 72 d | −11,2% | +25% | 0,32 |
> | 3340 | BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+124% · −33,7%** | +37% · −7,7% | +24% | −5,3% | 2,2 | 85 d | −9,4% | +12% | 0,12 |
> | 3341 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+172% · −54,1%** | +43% · −11,4% | +31% | −8,5% | 2,1 | 85 d | −9,1% | +24% | 0,17 |
> | 3342 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+224% · −47,3%** | +48% · −9,4% | +28% | −4,2% | 1,4 | 72 d | −9,5% | +19% | 0,15 |
> | 3343 | BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+260% · −48,4%** | +52% · −9,2% | +33% | −7,4% | 2,1 | 81 d | −10,1% | +22% | 0,29 |
> | 3344 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+156% · −39,0%** | +46% · −9,2% | +30% | −6,2% | 1,0 | 77 d | −7,9% | +16% | 0,02 |
> | 3345 | 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+153% · −27,7%** | +41% · −6,3% | +27% | −8,2% | 1,6 | 111 d | −6,1% | +14% | 0,20 |
> | 3346 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+215% · −58,0%** | +51% · −13,9% | +32% | −7,4% | 2,4 | 83 d | −11,0% | +19% | 0,30 |
> | 3347 | ADX ·ADX + GPS médias ·TEN + Bollinger ·TEN | **+193% · −42,2%** | +67% · −14,7% | +34% | −6,2% | 2,1 | 72 d | −13,1% | +28% | 0,35 |
> | 3348 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+237% · −45,2%** | +50% · −7,3% | +31% | −4,6% | 2,4 | 128 d | −7,2% | +21% | 0,02 |
> | 3349 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+144% · −33,9%** | +42% · −7,6% | +28% | −5,0% | 2,2 | 131 d | −6,0% | +19% | −0,02 |
> | 3350 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+178% · −37,3%** | +43% · −7,4% | +30% | −8,2% | 2,1 | 108 d | −7,6% | +23% | 0,14 |
> | 3351 | ADX ·ADX + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+157% · −40,9%** | +46% · −9,9% | +30% | −7,1% | 1,0 | 76 d | −8,1% | +17% | 0,18 |
> | 3352 | ADX ·ADX + Donchian ·TEN + IFR ·TEN | **+232% · −40,8%** | +77% · −12,8% | +42% | −6,8% | 3,1 | 127 d | −9,4% | +24% | 0,37 |
> | 3353 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+191% · −48,5%** | +48% · −10,0% | +31% | −8,8% | 2,2 | 81 d | −10,9% | +27% | 0,14 |
> | 3354 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+249% · −51,3%** | +51% · −10,3% | +30% | −7,3% | 2,7 | 99 d | −10,8% | +18% | 0,22 |
> | 3355 | ADX ·ADX + Tendência ·TEN + Onda ·OND | **+173% · −48,4%** | +63% · −16,3% | +40% | −11,8% | 2,2 | 106 d | −8,0% | +30% | 0,23 |
> | 3356 | VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM + Onda ·OND | **+133% · −41,5%** | +42% · −10,8% | +28% | −13,3% | 1,9 | 95 d | −7,9% | +22% | 0,30 |
> | 3357 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+242% · −47,9%** | +51% · −9,2% | +30% | −7,3% | 2,4 | 83 d | −11,4% | +22% | 0,18 |
> | 3358 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+189% · −37,7%** | +43% · −5,9% | +26% | −3,9% | 2,3 | 158 d | −6,1% | +19% | 0,02 |
> | 3359 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+178% · −43,2%** | +42% · −9,2% | +27% | −9,3% | 2,0 | 80 d | −9,9% | +16% | 0,32 |
> | 3360 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+119% · −37,0%** | +33% · −7,5% | +26% | −12,2% | 2,1 | 181 d | −5,3% | +21% | 0,19 |

> [!example]- Combinações 3361 a 3390 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3361 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+200% · −54,5%** | +46% · −10,7% | +31% | −8,0% | 2,3 | 131 d | −6,5% | +20% | 0,24 |
> | 3362 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+200% · −56,6%** | +50% · −12,7% | +30% | −6,3% | 2,9 | 99 d | −11,5% | +15% | 0,08 |
> | 3363 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+169% · −32,9%** | +56% · −10,5% | +34% | −4,4% | 2,7 | 92 d | −11,7% | +22% | 0,00 |
> | 3364 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+181% · −48,4%** | +44% · −9,5% | +28% | −6,2% | 2,5 | 130 d | −7,3% | +19% | 0,07 |
> | 3365 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+216% · −53,1%** | +50% · −10,8% | +34% | −9,2% | 2,1 | 83 d | −9,6% | +22% | 0,31 |
> | 3366 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+267% · −39,9%** | +53% · −7,0% | +33% | −5,5% | 2,4 | 105 d | −9,0% | +22% | 0,13 |
> | 3367 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+237% · −60,7%** | +55% · −13,3% | +35% | −9,8% | 2,4 | 83 d | −11,1% | +24% | 0,37 |
> | 3368 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+190% · −48,1%** | +53% · −12,8% | +31% | −6,0% | 1,7 | 72 d | −10,5% | +26% | 0,24 |
> | 3369 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+211% · −59,6%** | +51% · −12,3% | +34% | −10,6% | 2,2 | 122 d | −6,8% | +24% | 0,35 |
> | 3370 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+186% · −52,1%** | +46% · −12,0% | +31% | −15,5% | 1,6 | 73 d | −9,7% | +23% | 0,32 |
> | 3371 | MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+138% · −24,7%** | +39% · −5,3% | +27% | −7,2% | 2,0 | 167 d | −5,1% | +16% | 0,10 |
> | 3372 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+163% · −47,5%** | +41% · −10,6% | +28% | −13,8% | 1,6 | 72 d | −10,0% | +23% | 0,27 |
> | 3373 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Onda ·OND | **+261% · −52,4%** | +59% · −10,1% | +35% | −8,4% | 2,6 | 130 d | −7,4% | +20% | 0,33 |
> | 3374 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+192% · −40,4%** | +43% · −7,7% | +28% | −8,7% | 1,9 | 81 d | −9,4% | +23% | 0,15 |
> | 3375 | Donchian ·TEN + Rompe 200 ·ROM + Onda ·OND | **+127% · −30,2%** | +48% · −9,8% | +30% | −9,3% | 2,1 | 95 d | −8,6% | +28% | 0,23 |
> | 3376 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + MACD ·TEN + Pôr do sol ·POR | **+200% · −40,6%** | +46% · −7,5% | +30% | −7,0% | 1,8 | 122 d | −6,0% | +16% | 0,20 |
> | 3377 | BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND ⚠️ | **+192% · −48,8%** | +45% · −10,2% | +31% | −7,8% | 2,1 | 83 d | −9,5% | +23% | 0,25 |
> | 3378 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+134% · −35,4%** | +42% · −9,0% | +28% | −11,5% | 1,8 | 91 d | −7,9% | +19% | 0,10 |
> | 3379 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+131% · −46,9%** | +36% · −10,3% | +26% | −13,1% | 1,2 | 77 d | −8,2% | +21% | 0,20 |
> | 3380 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+201% · −53,0%** | +45% · −10,8% | +27% | −4,4% | 2,3 | 122 d | −7,4% | +17% | 0,15 |
> | 3381 | BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+140% · −34,7%** | +43% · −8,0% | +29% | −7,5% | 2,1 | 96 d | −8,3% | +24% | 0,06 |
> | 3382 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+155% · −44,4%** | +40% · −9,1% | +26% | −7,0% | 1,8 | 77 d | −9,7% | +20% | 0,02 |
> | 3383 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+190% · −63,0%** | +49% · −15,3% | +32% | −8,8% | 2,5 | 83 d | −11,9% | +19% | 0,36 |
> | 3384 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+263% · −54,8%** | +55% · −12,4% | +31% | −9,1% | 1,7 | 72 d | −10,6% | +24% | 0,35 |
> | 3385 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+153% · −33,0%** | +37% · −6,3% | +26% | −4,8% | 1,9 | 131 d | −5,3% | +18% | −0,02 |
> | 3386 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+90% · −19,3%** | +36% · −5,4% | +27% | −8,2% | 1,6 | 117 d | −5,9% | +16% | −0,00 |
> | 3387 | VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+126% · −33,6%** | +37% · −8,3% | +24% | −11,1% | 1,6 | 106 d | −6,4% | +20% | 0,28 |
> | 3388 | VWAP ·TEN + Donchian ·TEN + Bollinger ·TEN | **+153% · −31,4%** | +54% · −10,4% | +30% | −12,5% | 2,6 | 95 d | −10,7% | +17% | 0,41 |
> | 3389 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+167% · −58,5%** | +44% · −14,4% | +29% | −12,2% | 1,9 | 72 d | −11,7% | +17% | 0,22 |
> | 3390 | ADX ·ADX + GPS médias ·TEN + Pullback ·PUL | **+160% · −43,0%** | +59% · −15,3% | +34% | −6,2% | 2,9 | 122 d | −9,3% | +23% | 0,11 |

> [!example]- Combinações 3391 a 3420 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3391 | MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+150% · −25,6%** | +42% · −5,9% | +31% | −9,2% | 2,2 | 168 d | −5,9% | +20% | 0,09 |
> | 3392 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Tendência ·TEN | **+233% · −69,7%** | +57% · −17,5% | +36% | −8,7% | 2,7 | 120 d | −9,0% | +20% | 0,43 |
> | 3393 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+245% · −47,7%** | +52% · −9,8% | +30% | −7,0% | 2,4 | 122 d | −7,9% | +21% | 0,21 |
> | 3394 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Tendência ·TEN + Onda ·OND | **+265% · −66,3%** | +60% · −15,5% | +38% | −9,5% | 2,5 | 106 d | −9,2% | +30% | 0,33 |
> | 3395 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+166% · −45,6%** | +41% · −9,8% | +28% | −12,4% | 1,5 | 73 d | −9,7% | +22% | 0,16 |
> | 3396 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+222% · −53,1%** | +51% · −11,4% | +32% | −6,4% | 1,5 | 72 d | −10,0% | +21% | 0,08 |
> | 3397 | Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+26% · −4,9%** | +19% · −2,0% | +17% | −1,9% | 1,2 | 191 d | −2,1% | +13% | 0,24 |
> | 3398 | Donchian ·TEN + GPS médias ·TEN + MACD ·TEN | **+180% · −38,7%** | +65% · −13,1% | +37% | −12,7% | 3,1 | 102 d | −13,3% | +25% | 0,43 |
> | 3399 | VWAP ·TEN + Donchian ·TEN + IFR ·TEN | **+164% · −32,6%** | +59% · −11,3% | +35% | −11,4% | 3,1 | 120 d | −10,9% | +19% | 0,46 |
> | 3400 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+163% · −56,4%** | +44% · −12,5% | +29% | −10,8% | 2,3 | 83 d | −10,7% | +17% | 0,21 |
> | 3401 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+266% · −58,8%** | +54% · −13,0% | +32% | −5,4% | 2,8 | 95 d | −11,7% | +17% | 0,22 |
> | 3402 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+138% · −36,9%** | +36% · −6,6% | +27% | −7,8% | 1,9 | 101 d | −7,5% | +22% | 0,03 |
> | 3403 | Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+129% · −28,6%** | +48% · −9,4% | +30% | −8,8% | 2,4 | 111 d | −8,7% | +21% | 0,30 |
> | 3404 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+180% · −45,6%** | +44% · −8,9% | +29% | −6,5% | 2,2 | 91 d | −9,5% | +22% | 0,06 |
> | 3405 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL + Onda ·OND | **+230% · −55,5%** | +52% · −11,2% | +33% | −6,4% | 2,4 | 122 d | −7,8% | +25% | 0,17 |
> | 3406 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+159% · −59,3%** | +43% · −13,2% | +31% | −10,3% | 2,1 | 81 d | −10,4% | +21% | 0,27 |
> | 3407 | Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+209% · −39,5%** | +52% · −8,5% | +33% | −7,1% | 2,3 | 90 d | −10,1% | +27% | 0,11 |
> | 3408 | BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN + Onda ·OND ⚠️ | **+208% · −49,8%** | +46% · −9,8% | +30% | −6,8% | 2,1 | 83 d | −9,9% | +24% | 0,15 |
> | 3409 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+189% · −45,6%** | +48% · −9,8% | +30% | −11,5% | 2,4 | 102 d | −9,3% | +25% | 0,16 |
> | 3410 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+229% · −66,6%** | +57% · −16,1% | +34% | −6,3% | 2,9 | 95 d | −13,4% | +17% | 0,25 |
> | 3411 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+69% · −33,5%** | +31% · −10,9% | +23% | −3,9% | 2,2 | 99 d | −8,6% | +10% | −0,06 |
> | 3412 | BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+170% · −49,3%** | +46% · −12,9% | +29% | −5,6% | 2,4 | 85 d | −10,8% | +16% | 0,18 |
> | 3413 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+126% · −46,8%** | +41% · −12,3% | +26% | −6,0% | 2,3 | 82 d | −11,0% | +15% | −0,01 |
> | 3414 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+204% · −49,0%** | +50% · −9,8% | +31% | −8,6% | 1,8 | 76 d | −9,9% | +24% | 0,21 |
> | 3415 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pullback ·PUL | **+281% · −50,1%** | +57% · −9,9% | +34% | −6,1% | 2,8 | 129 d | −8,4% | +19% | 0,23 |
> | 3416 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+182% · −53,1%** | +55% · −14,6% | +34% | −12,0% | 2,5 | 83 d | −12,5% | +23% | 0,44 |
> | 3417 | ADX ·ADX + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+228% · −40,5%** | +48% · −7,4% | +32% | −6,5% | 2,0 | 122 d | −6,6% | +23% | 0,11 |
> | 3418 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+173% · −36,8%** | +49% · −8,2% | +29% | −5,0% | 2,3 | 128 d | −7,1% | +20% | 0,06 |
> | 3419 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+218% · −49,7%** | +59% · −13,3% | +35% | −8,7% | 1,7 | 72 d | −10,8% | +25% | 0,30 |
> | 3420 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+198% · −39,1%** | +44% · −7,0% | +29% | −4,5% | 2,3 | 130 d | −6,8% | +16% | 0,07 |

> [!example]- Combinações 3421 a 3450 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3421 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+261% · −56,8%** | +57% · −12,5% | +31% | −7,3% | 2,8 | 91 d | −13,3% | +15% | 0,23 |
> | 3422 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+281% · −55,3%** | +63% · −12,2% | +36% | −9,8% | 2,9 | 111 d | −10,9% | +22% | 0,37 |
> | 3423 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pullback ·PUL | **+231% · −46,4%** | +59% · −10,9% | +35% | −5,9% | 2,7 | 129 d | −8,1% | +22% | 0,14 |
> | 3424 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+235% · −56,9%** | +52% · −11,9% | +31% | −5,5% | 2,5 | 83 d | −12,2% | +18% | 0,19 |
> | 3425 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+105% · −36,5%** | +34% · −9,2% | +26% | −14,3% | 1,4 | 107 d | −6,2% | +21% | 0,28 |
> | 3426 | MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+127% · −24,5%** | +46% · −7,6% | +30% | −10,5% | 1,7 | 100 d | −7,1% | +15% | 0,28 |
> | 3427 | BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+211% · −48,2%** | +46% · −9,2% | +30% | −6,8% | 2,1 | 81 d | −10,3% | +23% | 0,16 |
> | 3428 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+187% · −45,5%** | +53% · −11,8% | +32% | −6,0% | 2,8 | 111 d | −10,3% | +17% | 0,19 |
> | 3429 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+248% · −45,3%** | +51% · −8,1% | +29% | −5,5% | 2,3 | 129 d | −6,9% | +16% | 0,18 |
> | 3430 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+221% · −47,7%** | +48% · −9,8% | +28% | −5,2% | 1,4 | 72 d | −9,9% | +20% | 0,24 |
> | 3431 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+192% · −53,1%** | +47% · −9,9% | +31% | −8,1% | 2,1 | 130 d | −6,3% | +21% | 0,17 |
> | 3432 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+284% · −57,0%** | +58% · −12,6% | +34% | −7,5% | 2,4 | 83 d | −11,5% | +22% | 0,34 |
> | 3433 | VWAP ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+132% · −38,6%** | +49% · −13,7% | +28% | −14,7% | 1,9 | 73 d | −12,0% | +19% | 0,37 |
> | 3434 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+225% · −53,6%** | +51% · −11,6% | +31% | −6,4% | 1,5 | 72 d | −10,1% | +20% | 0,13 |
> | 3435 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+142% · −53,5%** | +43% · −14,7% | +31% | −7,8% | 2,4 | 95 d | −9,8% | +19% | 0,20 |
> | 3436 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+215% · −71,0%** | +56% · −18,5% | +34% | −7,3% | 2,3 | 82 d | −11,9% | +19% | 0,34 |
> | 3437 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+247% · −40,7%** | +50% · −8,0% | +29% | −6,4% | 2,4 | 99 d | −9,5% | +20% | 0,14 |
> | 3438 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+198% · −39,4%** | +42% · −6,6% | +28% | −5,4% | 1,8 | 90 d | −8,3% | +23% | 0,02 |
> | 3439 | VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+179% · −45,7%** | +42% · −10,1% | +27% | −12,5% | 1,9 | 81 d | −9,5% | +25% | 0,25 |
> | 3440 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+147% · −45,8%** | +39% · −9,9% | +28% | −13,1% | 2,0 | 94 d | −8,5% | +25% | 0,13 |
> | 3441 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+133% · −36,5%** | +34% · −7,0% | +25% | −8,0% | 1,7 | 120 d | −6,2% | +19% | 0,08 |
> | 3442 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+79% · −35,3%** | +28% · −9,1% | +22% | −9,9% | 1,3 | 108 d | −6,1% | +18% | 0,07 |
> | 3443 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN | **+187% · −54,7%** | +51% · −14,9% | +29% | −5,2% | 2,2 | 94 d | −9,2% | +18% | 0,15 |
> | 3444 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+203% · −37,6%** | +54% · −9,2% | +34% | −7,7% | 1,9 | 122 d | −6,4% | +18% | 0,30 |
> | 3445 | ADX ·ADX + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+121% · −34,1%** | +47% · −11,0% | +29% | −6,8% | 1,1 | 75 d | −8,8% | +21% | 0,17 |
> | 3446 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+242% · −63,7%** | +57% · −14,8% | +36% | −8,5% | 1,7 | 72 d | −11,0% | +24% | 0,27 |
> | 3447 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+173% · −55,3%** | +42% · −11,6% | +28% | −4,7% | 2,2 | 129 d | −6,6% | +21% | 0,02 |
> | 3448 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+158% · −31,1%** | +36% · −5,7% | +24% | −4,5% | 1,7 | 120 d | −6,3% | +17% | 0,05 |
> | 3449 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+187% · −48,5%** | +44% · −10,7% | +29% | −12,4% | 1,9 | 83 d | −9,3% | +23% | 0,28 |
> | 3450 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+219% · −42,9%** | +57% · −10,7% | +34% | −5,7% | 2,5 | 122 d | −8,3% | +27% | 0,11 |

> [!example]- Combinações 3451 a 3480 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3451 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+179% · −44,3%** | +48% · −12,1% | +31% | −10,2% | 2,4 | 92 d | −10,5% | +19% | 0,17 |
> | 3452 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+146% · −52,2%** | +44% · −13,1% | +28% | −6,1% | 2,6 | 99 d | −10,9% | +11% | 0,23 |
> | 3453 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+234% · −73,6%** | +60% · −19,4% | +37% | −8,6% | 2,3 | 82 d | −12,0% | +24% | 0,42 |
> | 3454 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR | **+165% · −55,5%** | +45% · −12,1% | +29% | −10,8% | 2,2 | 82 d | −11,1% | +18% | 0,20 |
> | 3455 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Tendência ·TEN | **+250% · −61,3%** | +67% · −17,9% | +40% | −8,2% | 3,2 | 111 d | −12,8% | +18% | 0,53 |
> | 3456 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+101% · −22,7%** | +29% · −4,3% | +23% | −6,1% | 1,5 | 188 d | −3,8% | +17% | 0,03 |
> | 3457 | ADX ·ADX + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+219% · −42,6%** | +55% · −10,6% | +32% | −7,0% | 1,2 | 76 d | −8,8% | +16% | 0,26 |
> | 3458 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+125% · −31,0%** | +36% · −7,4% | +24% | −9,7% | 1,6 | 106 d | −6,6% | +18% | 0,15 |
> | 3459 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR | **+190% · −44,0%** | +53% · −11,2% | +32% | −6,1% | 2,8 | 111 d | −10,5% | +18% | 0,14 |
> | 3460 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+198% · −60,8%** | +47% · −13,1% | +30% | −5,8% | 2,8 | 111 d | −10,4% | +15% | 0,19 |
> | 3461 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+160% · −58,5%** | +50% · −16,9% | +32% | −6,0% | 2,5 | 83 d | −13,0% | +16% | 0,18 |
> | 3462 | Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR | **+130% · −25,9%** | +48% · −8,4% | +30% | −7,3% | 2,6 | 129 d | −8,0% | +22% | 0,12 |
> | 3463 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+252% · −54,5%** | +52% · −10,7% | +31% | −7,1% | 1,4 | 72 d | −10,2% | +20% | 0,32 |
> | 3464 | BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+160% · −48,0%** | +46% · −13,0% | +31% | −6,9% | 2,4 | 111 d | −8,8% | +18% | 0,25 |
> | 3465 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+124% · −33,9%** | +32% · −6,3% | +23% | −9,5% | 1,7 | 146 d | −5,0% | +19% | 0,17 |
> | 3466 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Tendência ·TEN | **+274% · −62,9%** | +58% · −14,5% | +35% | −6,8% | 3,0 | 159 d | −8,6% | +19% | 0,26 |
> | 3467 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+245% · −60,6%** | +55% · −13,7% | +33% | −6,7% | 2,6 | 129 d | −8,1% | +21% | 0,22 |
> | 3468 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN | **+271% · −65,4%** | +62% · −15,1% | +36% | −7,0% | 2,7 | 119 d | −9,5% | +25% | 0,42 |
> | 3469 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+186% · −58,5%** | +46% · −12,9% | +32% | −12,4% | 2,0 | 83 d | −9,6% | +22% | 0,42 |
> | 3470 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Onda ·OND ⚠️ | **+144% · −31,2%** | +35% · −5,9% | +24% | −8,7% | 2,1 | 181 d | −5,7% | +18% | 0,06 |
> | 3471 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+216% · −58,6%** | +52% · −13,2% | +29% | −5,3% | 1,9 | 72 d | −12,4% | +20% | 0,20 |
> | 3472 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+221% · −47,2%** | +48% · −8,2% | +32% | −6,1% | 2,2 | 130 d | −6,7% | +21% | 0,20 |
> | 3473 | BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+229% · −58,9%** | +52% · −13,3% | +31% | −6,4% | 2,5 | 83 d | −12,7% | +16% | 0,33 |
> | 3474 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+219% · −39,9%** | +47% · −6,6% | +29% | −4,2% | 2,3 | 158 d | −6,6% | +19% | 0,08 |
> | 3475 | Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+201% · −40,0%** | +68% · −13,6% | +37% | −10,5% | 3,0 | 102 d | −12,9% | +26% | 0,28 |
> | 3476 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+137% · −34,1%** | +42% · −9,0% | +28% | −11,9% | 2,3 | 110 d | −8,5% | +19% | 0,22 |
> | 3477 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+159% · −38,9%** | +39% · −7,0% | +27% | −6,5% | 1,4 | 122 d | −5,3% | +20% | 0,06 |
> | 3478 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+144% · −52,0%** | +44% · −14,0% | +31% | −7,8% | 2,2 | 85 d | −10,2% | +21% | 0,19 |
> | 3479 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+218% · −47,3%** | +59% · −12,6% | +33% | −9,3% | 2,5 | 83 d | −13,5% | +20% | 0,38 |
> | 3480 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+216% · −49,1%** | +51% · −10,2% | +32% | −8,4% | 2,4 | 95 d | −10,2% | +24% | 0,32 |

> [!example]- Combinações 3481 a 3510 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3481 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN | **+181% · −48,1%** | +55% · −13,3% | +33% | −15,8% | 2,8 | 102 d | −11,5% | +22% | 0,46 |
> | 3482 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+175% · −52,7%** | +44% · −10,8% | +31% | −8,5% | 2,0 | 85 d | −9,5% | +24% | 0,19 |
> | 3483 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+203% · −47,7%** | +46% · −10,6% | +30% | −11,7% | 1,9 | 80 d | −10,4% | +20% | 0,42 |
> | 3484 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+294% · −56,0%** | +59% · −12,5% | +33% | −7,2% | 1,7 | 72 d | −11,1% | +21% | 0,27 |
> | 3485 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+302% · −46,3%** | +61% · −10,1% | +36% | −7,5% | 2,7 | 128 d | −8,7% | +21% | 0,33 |
> | 3486 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Onda ·OND | **+135% · −37,2%** | +42% · −9,0% | +28% | −11,7% | 1,6 | 91 d | −8,0% | +18% | 0,15 |
> | 3487 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+290% · −49,4%** | +60% · −10,1% | +34% | −5,3% | 2,6 | 110 d | −10,1% | +27% | 0,13 |
> | 3488 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Bollinger ·TEN + Onda ·OND | **+263% · −50,2%** | +56% · −8,9% | +32% | −8,9% | 2,2 | 120 d | −7,8% | +19% | 0,30 |
> | 3489 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+146% · −31,3%** | +35% · −5,9% | +24% | −8,8% | 2,0 | 183 d | −5,5% | +17% | 0,09 |
> | 3490 | VWAP ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+165% · −40,3%** | +47% · −10,4% | +33% | −12,1% | 1,9 | 112 d | −7,1% | +27% | 0,34 |
> | 3491 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Bollinger ·TEN | **+293% · −49,8%** | +58% · −10,2% | +34% | −8,8% | 2,8 | 111 d | −10,9% | +22% | 0,42 |
> | 3492 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+237% · −43,1%** | +61% · −11,1% | +36% | −8,5% | 3,0 | 124 d | −10,0% | +22% | 0,33 |
> | 3493 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+158% · −32,3%** | +42% · −6,4% | +27% | −3,4% | 2,1 | 92 d | −9,1% | +21% | −0,01 |
> | 3494 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN | **+205% · −62,1%** | +64% · −18,7% | +36% | −7,2% | 2,3 | 77 d | −13,7% | +23% | 0,44 |
> | 3495 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+233% · −52,1%** | +54% · −11,5% | +33% | −11,2% | 2,6 | 111 d | −9,8% | +20% | 0,38 |
> | 3496 | VWAP ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+153% · −31,7%** | +42% · −6,8% | +28% | −6,0% | 2,4 | 137 d | −7,1% | +18% | 0,21 |
> | 3497 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+221% · −54,6%** | +51% · −12,0% | +32% | −7,7% | 1,5 | 72 d | −10,6% | +22% | 0,22 |
> | 3498 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+145% · −50,4%** | +38% · −9,8% | +25% | −4,7% | 2,1 | 131 d | −6,3% | +16% | 0,02 |
> | 3499 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+147% · −52,3%** | +47% · −14,5% | +30% | −10,1% | 2,3 | 81 d | −12,3% | +18% | 0,18 |
> | 3500 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+154% · −38,6%** | +43% · −8,8% | +28% | −7,3% | 2,1 | 85 d | −10,1% | +18% | 0,14 |
> | 3501 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+123% · −51,0%** | +41% · −14,1% | +27% | −7,8% | 2,2 | 82 d | −11,6% | +12% | 0,22 |
> | 3502 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+250% · −46,7%** | +54% · −9,4% | +32% | −5,7% | 2,5 | 128 d | −7,9% | +18% | 0,19 |
> | 3503 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN | **+218% · −55,5%** | +52% · −12,8% | +31% | −11,7% | 2,2 | 77 d | −12,9% | +18% | 0,41 |
> | 3504 | VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+167% · −33,4%** | +46% · −8,4% | +32% | −11,5% | 2,0 | 133 d | −6,0% | +22% | 0,28 |
> | 3505 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+124% · −61,3%** | +36% · −12,6% | +26% | −7,8% | 2,0 | 85 d | −9,5% | +13% | 0,20 |
> | 3506 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+182% · −51,4%** | +42% · −11,8% | +28% | −14,1% | 1,3 | 72 d | −10,1% | +22% | 0,39 |
> | 3507 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+213% · −46,3%** | +47% · −9,9% | +31% | −11,2% | 2,2 | 92 d | −9,5% | +22% | 0,20 |
> | 3508 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+254% · −62,5%** | +56% · −14,1% | +34% | −8,8% | 2,5 | 83 d | −13,3% | +21% | 0,43 |
> | 3509 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+224% · −47,8%** | +50% · −10,0% | +32% | −8,3% | 2,2 | 95 d | −9,3% | +25% | 0,17 |
> | 3510 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+187% · −35,6%** | +41% · −6,0% | +26% | −4,6% | 2,2 | 161 d | −6,2% | +14% | 0,08 |

> [!example]- Combinações 3511 a 3540 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3511 | Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+103% · −25,3%** | +40% · −7,0% | +25% | −2,8% | 2,2 | 120 d | −7,9% | +19% | −0,03 |
> | 3512 | Donchian ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+126% · −30,5%** | +48% · −8,7% | +30% | −7,1% | 2,0 | 95 d | −8,5% | +24% | −0,04 |
> | 3513 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+155% · −31,6%** | +43% · −6,8% | +29% | −4,1% | 2,2 | 130 d | −6,8% | +19% | −0,05 |
> | 3514 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+263% · −60,1%** | +54% · −13,6% | +32% | −5,3% | 2,9 | 111 d | −11,3% | +16% | 0,24 |
> | 3515 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+112% · −37,9%** | +31% · −7,7% | +24% | −11,2% | 1,2 | 112 d | −5,9% | +19% | 0,10 |
> | 3516 | Donchian ·TEN + GPS médias ·TEN | **+144% · −35,3%** | +77% · −17,9% | +39% | −11,5% | 3,3 | 110 d | −17,9% | +20% | 0,41 |
> | 3517 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+183% · −47,3%** | +45% · −9,1% | +28% | −6,2% | 2,4 | 130 d | −7,3% | +20% | 0,07 |
> | 3518 | BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN | **+157% · −32,3%** | +55% · −10,6% | +32% | −7,2% | 2,2 | 80 d | −12,6% | +19% | 0,33 |
> | 3519 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+98% · −32,4%** | +33% · −8,0% | +23% | −9,2% | 2,2 | 140 d | −6,6% | +18% | −0,00 |
> | 3520 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+153% · −25,1%** | +41% · −5,1% | +27% | −6,5% | 1,5 | 111 d | −6,4% | +13% | 0,13 |
> | 3521 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+217% · −50,2%** | +59% · −12,2% | +35% | −5,8% | 1,8 | 80 d | −9,9% | +26% | 0,29 |
> | 3522 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+175% · −41,7%** | +43% · −8,0% | +30% | −9,2% | 2,1 | 108 d | −8,1% | +24% | 0,27 |
> | 3523 | GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+106% · −29,7%** | +43% · −9,1% | +28% | −9,6% | 2,0 | 82 d | −10,5% | +21% | −0,09 |
> | 3524 | VWAP ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+195% · −39,0%** | +43% · −7,1% | +29% | −8,1% | 2,1 | 125 d | −6,8% | +23% | 0,22 |
> | 3525 | ADX ·ADX + Rompe 200 ·ROM + Bollinger ·TEN | **+132% · −35,0%** | +49% · −11,4% | +27% | −6,2% | 1,6 | 112 d | −6,4% | +21% | 0,14 |
> | 3526 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Tendência ·TEN | **+200% · −51,1%** | +45% · −9,7% | +30% | −5,7% | 2,5 | 161 d | −7,3% | +19% | 0,10 |
> | 3527 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+169% · −39,3%** | +39% · −8,0% | +26% | −7,9% | 1,9 | 92 d | −8,7% | +18% | 0,07 |
> | 3528 | VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+137% · −39,6%** | +36% · −7,9% | +27% | −8,6% | 1,9 | 131 d | −5,9% | +24% | 0,17 |
> | 3529 | ADX ·ADX + Pôr do sol ·POR + Tendência ·TEN | **+153% · −42,3%** | +55% · −13,7% | +35% | −8,2% | 2,7 | 131 d | −8,2% | +24% | 0,06 |
> | 3530 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+291% · −68,3%** | +65% · −16,5% | +36% | −7,3% | 2,9 | 95 d | −15,2% | +18% | 0,44 |
> | 3531 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+247% · −56,0%** | +56% · −12,4% | +35% | −9,4% | 1,5 | 72 d | −10,9% | +21% | 0,26 |
> | 3532 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+109% · −33,0%** | +29% · −6,4% | +23% | −6,3% | 1,9 | 181 d | −5,3% | +16% | 0,01 |
> | 3533 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+221% · −51,8%** | +51% · −11,1% | +32% | −8,8% | 2,5 | 111 d | −9,6% | +19% | 0,38 |
> | 3534 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+218% · −43,1%** | +46% · −6,6% | +28% | −3,8% | 2,4 | 159 d | −7,1% | +18% | −0,01 |
> | 3535 | BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+107% · −36,8%** | +43% · −12,4% | +29% | −7,1% | 2,3 | 91 d | −10,4% | +15% | 0,31 |
> | 3536 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+209% · −50,0%** | +47% · −11,0% | +28% | −7,9% | 1,9 | 77 d | −10,7% | +20% | 0,14 |
> | 3537 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+196% · −44,9%** | +42% · −9,6% | +29% | −13,6% | 1,4 | 112 d | −6,2% | +18% | 0,35 |
> | 3538 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+268% · −42,8%** | +52% · −6,9% | +31% | −4,4% | 2,8 | 128 d | −9,0% | +23% | 0,13 |
> | 3539 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+116% · −44,8%** | +34% · −8,7% | +23% | −6,1% | 1,9 | 87 d | −9,2% | +15% | 0,03 |
> | 3540 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+219% · −57,3%** | +52% · −12,8% | +29% | −5,3% | 1,8 | 72 d | −12,4% | +21% | 0,17 |

> [!example]- Combinações 3541 a 3570 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3541 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+147% · −49,5%** | +39% · −10,3% | +28% | −11,6% | 1,9 | 91 d | −9,1% | +18% | 0,35 |
> | 3542 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+134% · −40,6%** | +35% · −8,0% | +23% | −8,0% | 1,9 | 91 d | −8,9% | +13% | 0,11 |
> | 3543 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+197% · −53,5%** | +46% · −10,4% | +28% | −5,7% | 1,4 | 72 d | −10,5% | +19% | 0,12 |
> | 3544 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Tendência ·TEN + Onda ·OND | **+252% · −64,0%** | +60% · −14,1% | +36% | −9,3% | 2,7 | 128 d | −8,7% | +24% | 0,36 |
> | 3545 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+194% · −39,3%** | +46% · −7,4% | +30% | −7,0% | 1,8 | 122 d | −6,5% | +17% | 0,14 |
> | 3546 | VWAP ·TEN + MACD ·TEN + Tendência ·TEN | **+116% · −37,8%** | +46% · −13,3% | +33% | −13,0% | 2,1 | 120 d | −7,7% | +23% | 0,58 |
> | 3547 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+226% · −59,1%** | +54% · −13,0% | +32% | −6,0% | 2,0 | 78 d | −11,5% | +22% | 0,18 |
> | 3548 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+62% · −24,1%** | +25% · −5,4% | +20% | −6,7% | 1,6 | 210 d | −4,4% | +13% | 0,01 |
> | 3549 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+195% · −63,6%** | +47% · −13,6% | +30% | −5,8% | 2,6 | 111 d | −10,0% | +14% | 0,22 |
> | 3550 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+138% · −42,7%** | +36% · −9,2% | +27% | −14,1% | 1,2 | 112 d | −6,0% | +19% | 0,27 |
> | 3551 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+127% · −41,9%** | +36% · −8,9% | +25% | −11,7% | 1,8 | 94 d | −8,5% | +24% | 0,12 |
> | 3552 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+207% · −53,5%** | +53% · −11,7% | +34% | −11,4% | 2,2 | 83 d | −11,4% | +27% | 0,35 |
> | 3553 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+302% · −43,9%** | +57% · −7,8% | +34% | −5,7% | 2,8 | 128 d | −9,1% | +23% | 0,14 |
> | 3554 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+108% · −36,2%** | +30% · −7,2% | +22% | −4,7% | 1,6 | 124 d | −5,7% | +18% | 0,01 |
> | 3555 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+187% · −52,5%** | +48% · −11,2% | +31% | −9,8% | 2,2 | 83 d | −11,3% | +25% | 0,31 |
> | 3556 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+205% · −59,9%** | +54% · −13,9% | +33% | −9,3% | 2,4 | 83 d | −13,1% | +22% | 0,24 |
> | 3557 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL | **+171% · −51,8%** | +50% · −13,9% | +31% | −8,2% | 2,7 | 100 d | −11,6% | +17% | 0,23 |
> | 3558 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+139% · −31,1%** | +42% · −7,7% | +28% | −6,2% | 1,9 | 130 d | −6,2% | +19% | −0,03 |
> | 3559 | VWAP ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+181% · −32,5%** | +47% · −8,1% | +30% | −10,3% | 2,1 | 139 d | −6,5% | +21% | 0,30 |
> | 3560 | VWAP ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+125% · −28,0%** | +38% · −6,3% | +28% | −9,4% | 1,9 | 182 d | −5,4% | +19% | 0,06 |
> | 3561 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+220% · −62,3%** | +52% · −14,5% | +33% | −7,1% | 2,8 | 111 d | −10,9% | +20% | 0,28 |
> | 3562 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+163% · −57,2%** | +51% · −16,4% | +32% | −6,0% | 2,4 | 83 d | −13,4% | +17% | 0,16 |
> | 3563 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+182% · −41,4%** | +42% · −8,0% | +27% | −5,4% | 2,0 | 99 d | −8,5% | +19% | 0,03 |
> | 3564 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+128% · −55,6%** | +38% · −12,5% | +26% | −9,7% | 2,0 | 82 d | −10,7% | +13% | 0,11 |
> | 3565 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+237% · −45,5%** | +52% · −7,6% | +32% | −6,5% | 2,1 | 127 d | −7,1% | +22% | 0,13 |
> | 3566 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL | **+238% · −69,5%** | +61% · −17,4% | +34% | −5,7% | 2,7 | 102 d | −11,7% | +18% | 0,27 |
> | 3567 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+247% · −51,9%** | +56% · −10,6% | +35% | −6,9% | 1,6 | 76 d | −10,1% | +23% | 0,26 |
> | 3568 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+251% · −70,6%** | +59% · −18,3% | +34% | −6,5% | 2,9 | 127 d | −9,9% | +20% | 0,21 |
> | 3569 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+127% · −53,6%** | +36% · −11,3% | +26% | −6,3% | 2,0 | 95 d | −8,9% | +15% | 0,12 |
> | 3570 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+198% · −36,7%** | +44% · −6,5% | +29% | −5,1% | 1,9 | 122 d | −6,8% | +20% | 0,04 |

> [!example]- Combinações 3571 a 3600 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3571 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+248% · −71,5%** | +58% · −18,9% | +35% | −6,4% | 3,0 | 127 d | −10,0% | +19% | 0,24 |
> | 3572 | MACD ·TEN + Pôr do sol ·POR | **+49% · −11,2%** | +30% · −5,4% | +24% | −7,5% | 1,3 | 147 d | −4,4% | +19% | −0,01 |
> | 3573 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+138% · −42,7%** | +36% · −7,9% | +24% | −4,5% | 2,2 | 111 d | −8,5% | +14% | 0,05 |
> | 3574 | Donchian ·TEN + Pullback ·PUL | **+112% · −27,5%** | +58% · −12,6% | +34% | −4,7% | 3,0 | 120 d | −11,3% | +14% | 0,01 |
> | 3575 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+160% · −35,8%** | +38% · −6,1% | +24% | −4,3% | 1,6 | 131 d | −5,3% | +13% | 0,11 |
> | 3576 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+247% · −62,3%** | +61% · −14,6% | +36% | −11,2% | 3,0 | 111 d | −12,7% | +22% | 0,47 |
> | 3577 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+176% · −49,2%** | +41% · −9,2% | +25% | −4,1% | 1,7 | 97 d | −7,9% | +20% | 0,07 |
> | 3578 | VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+104% · −37,4%** | +34% · −9,6% | +26% | −6,7% | 2,2 | 171 d | −6,3% | +16% | 0,16 |
> | 3579 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+172% · −51,8%** | +50% · −13,2% | +31% | −5,8% | 2,3 | 122 d | −8,0% | +21% | 0,15 |
> | 3580 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Onda ·OND | **+174% · −46,9%** | +55% · −12,5% | +33% | −14,7% | 2,3 | 83 d | −12,0% | +27% | 0,35 |
> | 3581 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+239% · −63,1%** | +57% · −14,1% | +32% | −8,4% | 1,8 | 72 d | −13,1% | +24% | 0,38 |
> | 3582 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+119% · −33,4%** | +32% · −6,4% | +26% | −10,7% | 1,9 | 183 d | −5,5% | +19% | 0,06 |
> | 3583 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+187% · −53,5%** | +47% · −11,6% | +30% | −9,3% | 2,6 | 111 d | −10,2% | +16% | 0,24 |
> | 3584 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pullback ·PUL | **+247% · −59,2%** | +58% · −13,3% | +33% | −7,6% | 2,8 | 128 d | −9,4% | +20% | 0,23 |
> | 3585 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+186% · −52,3%** | +51% · −14,0% | +35% | −8,7% | 2,4 | 111 d | −9,3% | +24% | 0,35 |
> | 3586 | VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+167% · −40,6%** | +38% · −8,6% | +26% | −12,1% | 1,4 | 112 d | −6,4% | +19% | 0,26 |
> | 3587 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+192% · −45,6%** | +52% · −12,4% | +32% | −6,5% | 2,4 | 99 d | −10,4% | +17% | 0,13 |
> | 3588 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+226% · −67,6%** | +57% · −16,5% | +34% | −6,3% | 3,0 | 111 d | −13,1% | +16% | 0,26 |
> | 3589 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+106% · −35,7%** | +42% · −12,4% | +28% | −6,9% | 2,1 | 91 d | −9,7% | +17% | −0,01 |
> | 3590 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+135% · −41,9%** | +36% · −8,1% | +27% | −9,2% | 1,8 | 101 d | −8,0% | +23% | 0,15 |
> | 3591 | ADX ·ADX + BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+172% · −64,2%** | +52% · −19,7% | +33% | −8,6% | 2,3 | 96 d | −9,8% | +18% | 0,28 |
> | 3592 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+212% · −62,0%** | +51% · −14,4% | +30% | −4,6% | 2,5 | 128 d | −8,4% | +16% | 0,20 |
> | 3593 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+66% · −21,0%** | +29% · −6,4% | +22% | −3,9% | 1,2 | 111 d | −6,3% | +16% | 0,07 |
> | 3594 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+149% · −46,1%** | +40% · −9,9% | +28% | −13,2% | 1,9 | 95 d | −8,6% | +24% | 0,17 |
> | 3595 | Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+66% · −16,0%** | +25% · −3,7% | +21% | −5,2% | 1,5 | 221 d | −4,0% | +16% | 0,01 |
> | 3596 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+225% · −62,2%** | +60% · −15,1% | +35% | −8,2% | 2,0 | 76 d | −13,1% | +29% | 0,34 |
> | 3597 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+115% · −42,6%** | +38% · −10,7% | +27% | −9,7% | 2,0 | 91 d | −9,4% | +15% | 0,15 |
> | 3598 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN | **+205% · −47,3%** | +53% · −12,0% | +30% | −5,2% | 2,7 | 99 d | −12,6% | +14% | 0,18 |
> | 3599 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+252% · −60,6%** | +54% · −13,5% | +30% | −4,3% | 2,4 | 105 d | −10,0% | +19% | 0,19 |
> | 3600 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+212% · −50,7%** | +47% · −11,2% | +28% | −7,9% | 1,8 | 77 d | −10,8% | +21% | 0,14 |

> [!example]- Combinações 3601 a 3630 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3601 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+161% · −43,6%** | +39% · −8,3% | +26% | −3,1% | 2,3 | 130 d | −7,4% | +14% | −0,00 |
> | 3602 | BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+173% · −47,6%** | +47% · −12,1% | +29% | −5,7% | 2,2 | 85 d | −11,3% | +17% | 0,15 |
> | 3603 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+161% · −59,0%** | +45% · −13,6% | +29% | −11,6% | 2,2 | 83 d | −11,6% | +15% | 0,38 |
> | 3604 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+97% · −32,9%** | +32% · −8,3% | +24% | −8,4% | 2,1 | 176 d | −6,2% | +17% | −0,02 |
> | 3605 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+193% · −56,4%** | +47% · −13,4% | +30% | −10,7% | 2,2 | 99 d | −9,7% | +16% | 0,24 |
> | 3606 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+171% · −51,7%** | +51% · −14,3% | +31% | −6,2% | 2,1 | 108 d | −8,7% | +20% | 0,29 |
> | 3607 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR | **+189% · −52,6%** | +47% · −11,2% | +30% | −9,3% | 2,5 | 102 d | −10,6% | +17% | 0,23 |
> | 3608 | GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+108% · −30,2%** | +44% · −9,1% | +28% | −9,5% | 2,0 | 82 d | −10,7% | +19% | −0,02 |
> | 3609 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+144% · −43,6%** | +39% · −8,6% | +28% | −10,2% | 1,8 | 91 d | −8,8% | +22% | 0,14 |
> | 3610 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Tendência ·TEN | **+264% · −65,0%** | +60% · −15,3% | +36% | −9,2% | 2,8 | 129 d | −9,1% | +24% | 0,46 |
> | 3611 | MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+90% · −22,5%** | +31% · −4,9% | +24% | −7,9% | 1,4 | 188 d | −4,3% | +17% | 0,04 |
> | 3612 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+126% · −48,4%** | +34% · −10,8% | +25% | −9,3% | 1,9 | 120 d | −7,4% | +16% | 0,04 |
> | 3613 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+237% · −59,7%** | +61% · −13,7% | +36% | −10,2% | 2,7 | 95 d | −13,3% | +26% | 0,39 |
> | 3614 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN | **+149% · −49,8%** | +59% · −18,2% | +35% | −11,1% | 2,4 | 83 d | −15,5% | +18% | 0,48 |
> | 3615 | BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+207% · −50,5%** | +46% · −10,0% | +30% | −8,0% | 2,0 | 83 d | −10,8% | +23% | 0,26 |
> | 3616 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+124% · −35,8%** | +38% · −8,3% | +26% | −6,0% | 1,4 | 131 d | −5,0% | +19% | 0,03 |
> | 3617 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+174% · −39,8%** | +47% · −10,5% | +29% | −10,9% | 1,5 | 77 d | −9,9% | +18% | 0,32 |
> | 3618 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+187% · −52,1%** | +45% · −10,5% | +29% | −7,2% | 1,3 | 76 d | −9,6% | +21% | 0,22 |
> | 3619 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+164% · −57,7%** | +42% · −13,9% | +29% | −10,1% | 2,0 | 95 d | −9,1% | +17% | 0,33 |
> | 3620 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+88% · −49,7%** | +28% · −10,1% | +22% | −8,5% | 1,9 | 120 d | −7,5% | +11% | 0,11 |
> | 3621 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+213% · −59,7%** | +52% · −13,3% | +33% | −7,2% | 2,5 | 95 d | −11,5% | +24% | 0,21 |
> | 3622 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+139% · −46,3%** | +38% · −9,1% | +26% | −8,3% | 1,9 | 87 d | −9,7% | +20% | 0,05 |
> | 3623 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+173% · −39,1%** | +41% · −7,0% | +27% | −5,0% | 1,8 | 130 d | −6,0% | +17% | 0,13 |
> | 3624 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN + Pôr do sol ·POR | **+252% · −46,5%** | +54% · −9,4% | +32% | −5,6% | 2,4 | 129 d | −8,0% | +17% | 0,19 |
> | 3625 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+180% · −62,7%** | +56% · −18,6% | +36% | −10,2% | 2,4 | 83 d | −14,7% | +21% | 0,47 |
> | 3626 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+53% · −24,8%** | +26% · −7,7% | +21% | −9,7% | 1,8 | 210 d | −5,3% | +13% | −0,03 |
> | 3627 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+160% · −39,9%** | +38% · −8,3% | +29% | −12,9% | 2,1 | 183 d | −6,1% | +21% | 0,19 |
> | 3628 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+145% · −59,5%** | +40% · −13,5% | +29% | −9,8% | 2,0 | 85 d | −10,0% | +18% | 0,28 |
> | 3629 | ADX ·ADX + Donchian ·TEN + Tendência ·TEN | **+232% · −55,8%** | +78% · −21,1% | +43% | −9,4% | 3,3 | 128 d | −12,0% | +25% | 0,39 |
> | 3630 | BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+139% · −50,4%** | +44% · −13,3% | +31% | −8,0% | 2,0 | 83 d | −10,6% | +25% | 0,09 |

> [!example]- Combinações 3631 a 3660 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3631 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+128% · −36,6%** | +39% · −9,4% | +29% | −9,3% | 2,0 | 140 d | −6,5% | +22% | 0,28 |
> | 3632 | ADX ·ADX + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+229% · −48,9%** | +61% · −12,9% | +33% | −7,1% | 1,8 | 74 d | −12,6% | +24% | 0,25 |
> | 3633 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Tendência ·TEN | **+184% · −57,1%** | +53% · −15,4% | +35% | −10,4% | 2,3 | 128 d | −7,7% | +22% | 0,43 |
> | 3634 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+175% · −48,5%** | +50% · −13,0% | +29% | −7,2% | 2,2 | 82 d | −13,3% | +15% | 0,17 |
> | 3635 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+251% · −53,0%** | +56% · −11,4% | +33% | −9,6% | 2,2 | 83 d | −12,1% | +27% | 0,31 |
> | 3636 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+80% · −28,0%** | +25% · −4,8% | +21% | −8,4% | 1,4 | 213 d | −4,1% | +17% | 0,08 |
> | 3637 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+104% · −29,6%** | +34% · −6,9% | +26% | −5,0% | 2,1 | 199 d | −6,2% | +18% | 0,09 |
> | 3638 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+218% · −63,5%** | +51% · −15,1% | +33% | −7,1% | 2,6 | 111 d | −10,5% | +19% | 0,29 |
> | 3639 | ADX ·ADX + VWAP ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+159% · −50,7%** | +48% · −13,3% | +31% | −8,9% | 2,2 | 130 d | −7,3% | +20% | 0,29 |
> | 3640 | BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+100% · −35,5%** | +34% · −8,3% | +25% | −6,9% | 1,7 | 86 d | −9,1% | +22% | −0,02 |
> | 3641 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+125% · −31,7%** | +31% · −5,7% | +23% | −8,6% | 1,6 | 174 d | −5,0% | +16% | 0,15 |
> | 3642 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+137% · −35,2%** | +35% · −6,4% | +27% | −7,0% | 1,9 | 171 d | −5,9% | +21% | 0,09 |
> | 3643 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Tendência ·TEN | **+273% · −68,9%** | +66% · −17,2% | +38% | −7,5% | 3,0 | 128 d | −10,5% | +22% | 0,42 |
> | 3644 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Onda ·OND | **+260% · −63,8%** | +62% · −14,0% | +36% | −7,1% | 2,5 | 119 d | −9,8% | +27% | 0,34 |
> | 3645 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+106% · −48,6%** | +31% · −10,9% | +23% | −10,5% | 1,2 | 85 d | −8,1% | +16% | 0,12 |
> | 3646 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+121% · −33,7%** | +33% · −6,5% | +25% | −10,9% | 1,7 | 191 d | −5,2% | +18% | 0,10 |
> | 3647 | ADX ·ADX + Pôr do sol ·POR + Bollinger ·TEN | **+133% · −32,0%** | +48% · −10,0% | +27% | −5,2% | 1,6 | 130 d | −5,7% | +16% | 0,08 |
> | 3648 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+295% · −59,9%** | +62% · −13,0% | +37% | −7,3% | 2,9 | 128 d | −9,8% | +24% | 0,37 |
> | 3649 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+237% · −53,0%** | +51% · −12,0% | +31% | −11,4% | 1,8 | 77 d | −11,3% | +22% | 0,33 |
> | 3650 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+287% · −55,8%** | +62% · −12,1% | +33% | −8,7% | 2,4 | 120 d | −9,3% | +22% | 0,36 |
> | 3651 | BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+217% · −59,3%** | +60% · −16,6% | +34% | −7,2% | 2,4 | 83 d | −15,6% | +18% | 0,42 |
> | 3652 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Tendência ·TEN ⚠️ | **+245% · −59,6%** | +54% · −13,1% | +33% | −6,4% | 2,7 | 127 d | −9,6% | +18% | 0,32 |
> | 3653 | BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+197% · −37,5%** | +52% · −9,2% | +32% | −8,4% | 2,0 | 83 d | −11,0% | +24% | 0,27 |
> | 3654 | GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+107% · −31,9%** | +44% · −10,5% | +28% | −11,8% | 2,0 | 81 d | −11,4% | +22% | 0,22 |
> | 3655 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN | **+218% · −59,5%** | +66% · −17,4% | +37% | −10,2% | 3,0 | 111 d | −14,9% | +18% | 0,50 |
> | 3656 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+173% · −63,7%** | +52% · −19,5% | +33% | −7,5% | 2,3 | 119 d | −9,2% | +19% | 0,16 |
> | 3657 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN | **+207% · −65,9%** | +57% · −16,2% | +34% | −12,5% | 2,6 | 95 d | −14,1% | +17% | 0,48 |
> | 3658 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+194% · −41,3%** | +43% · −7,3% | +25% | −4,4% | 2,2 | 99 d | −9,9% | +16% | 0,06 |
> | 3659 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+87% · −33,5%** | +38% · −11,5% | +25% | −12,8% | 2,0 | 95 d | −9,4% | +17% | 0,00 |
> | 3660 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Tendência ·TEN | **+126% · −58,0%** | +36% · −12,2% | +26% | −7,9% | 1,9 | 85 d | −9,8% | +14% | 0,19 |

> [!example]- Combinações 3661 a 3690 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3661 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL | **+184% · −58,5%** | +57% · −17,2% | +33% | −8,2% | 2,8 | 99 d | −14,7% | +14% | 0,27 |
> | 3662 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + MACD ·TEN | **+179% · −60,4%** | +49% · −14,0% | +32% | −14,0% | 2,2 | 83 d | −12,2% | +20% | 0,44 |
> | 3663 | Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+71% · −19,2%** | +31% · −5,5% | +25% | −5,5% | 1,9 | 186 d | −5,9% | +21% | −0,07 |
> | 3664 | GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+131% · −33,8%** | +51% · −11,7% | +33% | −13,8% | 2,0 | 81 d | −11,6% | +22% | 0,26 |
> | 3665 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+269% · −44,0%** | +52% · −6,5% | +31% | −4,0% | 2,6 | 128 d | −9,0% | +21% | 0,00 |
> | 3666 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+272% · −66,7%** | +64% · −15,8% | +37% | −8,3% | 2,9 | 111 d | −12,7% | +20% | 0,40 |
> | 3667 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+232% · −51,5%** | +55% · −11,4% | +34% | −10,5% | 2,1 | 83 d | −11,8% | +25% | 0,29 |
> | 3668 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+70% · −28,3%** | +27% · −6,5% | +22% | −11,0% | 1,3 | 174 d | −4,6% | +18% | 0,11 |
> | 3669 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+210% · −42,3%** | +48% · −7,3% | +29% | −5,2% | 2,1 | 130 d | −7,0% | +22% | 0,07 |
> | 3670 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN | **+199% · −68,0%** | +56% · −17,3% | +33% | −9,9% | 2,0 | 78 d | −12,6% | +20% | 0,42 |
> | 3671 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+127% · −58,6%** | +38% · −13,7% | +26% | −11,2% | 1,9 | 81 d | −11,5% | +12% | 0,26 |
> | 3672 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+174% · −49,5%** | +42% · −9,6% | +25% | −4,5% | 1,8 | 97 d | −8,4% | +18% | 0,12 |
> | 3673 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+207% · −39,5%** | +44% · −7,2% | +27% | −6,1% | 1,4 | 122 d | −6,1% | +16% | 0,21 |
> | 3674 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+167% · −45,5%** | +51% · −11,5% | +31% | −6,2% | 1,7 | 76 d | −11,2% | +24% | 0,03 |
> | 3675 | BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+142% · −32,7%** | +43% · −7,5% | +29% | −7,4% | 1,9 | 101 d | −8,7% | +23% | 0,06 |
> | 3676 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+156% · −46,9%** | +38% · −10,3% | +25% | −11,5% | 1,3 | 77 d | −9,6% | +17% | 0,29 |
> | 3677 | ADX ·ADX + Bollinger ·TEN + Onda ·OND | **+160% · −35,5%** | +57% · −11,5% | +32% | −8,8% | 1,3 | 76 d | −10,0% | +18% | 0,21 |
> | 3678 | ADX ·ADX + GPS médias ·TEN + Rompe 200 ·ROM | **+137% · −43,1%** | +54% · −15,5% | +31% | −6,8% | 1,9 | 77 d | −12,2% | +23% | 0,24 |
> | 3679 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+108% · −47,0%** | +32% · −10,5% | +23% | −10,6% | 1,1 | 85 d | −8,2% | +16% | 0,14 |
> | 3680 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+126% · −34,3%** | +32% · −6,4% | +23% | −9,7% | 1,6 | 174 d | −5,2% | +18% | 0,17 |
> | 3681 | GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+156% · −38,1%** | +45% · −9,2% | +30% | −9,2% | 1,8 | 84 d | −9,6% | +18% | 0,01 |
> | 3682 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+160% · −33,9%** | +37% · −6,3% | +24% | −5,5% | 1,6 | 120 d | −6,9% | +18% | 0,09 |
> | 3683 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN | **+251% · −45,6%** | +62% · −11,5% | +34% | −7,2% | 2,9 | 111 d | −12,8% | +18% | 0,39 |
> | 3684 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN | **+204% · −71,3%** | +65% · −23,1% | +38% | −8,3% | 2,3 | 82 d | −14,7% | +21% | 0,44 |
> | 3685 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+186% · −49,6%** | +44% · −9,7% | +28% | −4,5% | 1,9 | 120 d | −7,5% | +19% | 0,13 |
> | 3686 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Tendência ·TEN | **+196% · −51,0%** | +55% · −14,5% | +36% | −11,3% | 2,8 | 120 d | −11,1% | +21% | 0,58 |
> | 3687 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+193% · −62,2%** | +53% · −14,6% | +32% | −7,7% | 2,0 | 77 d | −13,1% | +26% | 0,19 |
> | 3688 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+137% · −38,7%** | +35% · −7,4% | +23% | −8,1% | 1,8 | 91 d | −9,3% | +14% | 0,09 |
> | 3689 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+162% · −46,2%** | +41% · −9,1% | +27% | −6,8% | 2,2 | 111 d | −9,1% | +19% | 0,09 |
> | 3690 | BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+170% · −49,9%** | +47% · −13,1% | +29% | −7,2% | 2,2 | 85 d | −11,9% | +15% | 0,30 |

> [!example]- Combinações 3691 a 3720 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3691 | BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+70% · −37,8%** | +32% · −12,5% | +23% | −6,2% | 2,0 | 91 d | −10,1% | +8% | 0,16 |
> | 3692 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+204% · −51,3%** | +57% · −14,3% | +33% | −14,4% | 2,4 | 98 d | −11,5% | +22% | 0,36 |
> | 3693 | GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+158% · −36,7%** | +56% · −12,0% | +31% | −10,7% | 2,0 | 81 d | −12,4% | +21% | 0,20 |
> | 3694 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+135% · −36,3%** | +40% · −9,2% | +26% | −7,4% | 2,3 | 159 d | −7,2% | +15% | 0,06 |
> | 3695 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+102% · −33,5%** | +35% · −7,6% | +25% | −6,8% | 1,6 | 86 d | −9,1% | +22% | −0,02 |
> | 3696 | VWAP ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+155% · −32,5%** | +42% · −7,0% | +28% | −6,0% | 2,3 | 142 d | −7,4% | +19% | 0,24 |
> | 3697 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+146% · −41,9%** | +40% · −8,6% | +28% | −10,1% | 1,7 | 87 d | −9,1% | +22% | 0,15 |
> | 3698 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+175% · −53,5%** | +46% · −11,5% | +28% | −6,8% | 2,5 | 99 d | −11,6% | +16% | 0,06 |
> | 3699 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR | **+92% · −20,7%** | +37% · −6,6% | +27% | −8,5% | 2,1 | 171 d | −6,7% | +15% | 0,06 |
> | 3700 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + MACD ·TEN | **+183% · −44,0%** | +52% · −10,0% | +34% | −9,0% | 1,8 | 122 d | −7,0% | +18% | 0,38 |
> | 3701 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+220% · −72,0%** | +60% · −18,3% | +37% | −8,7% | 2,1 | 78 d | −14,4% | +28% | 0,34 |
> | 3702 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+148% · −59,1%** | +42% · −13,7% | +28% | −13,3% | 2,0 | 81 d | −12,0% | +16% | 0,26 |
> | 3703 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+175% · −38,0%** | +39% · −7,7% | +27% | −11,7% | 2,0 | 181 d | −6,3% | +20% | 0,21 |
> | 3704 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+95% · −29,3%** | +28% · −5,1% | +23% | −7,8% | 1,5 | 211 d | −4,6% | +16% | 0,02 |
> | 3705 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Bollinger ·TEN | **+171% · −39,5%** | +47% · −8,4% | +28% | −6,4% | 2,2 | 131 d | −7,2% | +15% | 0,18 |
> | 3706 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+100% · −36,5%** | +30% · −7,3% | +24% | −11,9% | 1,3 | 174 d | −4,6% | +20% | 0,11 |
> | 3707 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+175% · −48,0%** | +42% · −8,9% | +28% | −5,5% | 2,1 | 161 d | −6,7% | +18% | 0,10 |
> | 3708 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+150% · −37,7%** | +45% · −9,3% | +27% | −4,6% | 2,1 | 122 d | −8,0% | +23% | 0,01 |
> | 3709 | VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+85% · −34,8%** | +31% · −8,8% | +24% | −12,1% | 2,0 | 183 d | −6,1% | +20% | 0,20 |
> | 3710 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+135% · −44,5%** | +35% · −9,5% | +23% | −9,5% | 1,8 | 85 d | −9,8% | +12% | 0,21 |
> | 3711 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+239% · −42,2%** | +49% · −6,5% | +29% | −3,6% | 2,1 | 105 d | −9,1% | +20% | 0,03 |
> | 3712 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+185% · −59,3%** | +49% · −13,4% | +32% | −7,6% | 2,2 | 83 d | −12,4% | +24% | 0,15 |
> | 3713 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+222% · −69,8%** | +57% · −17,5% | +34% | −7,2% | 2,9 | 111 d | −13,9% | +15% | 0,42 |
> | 3714 | BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+198% · −54,3%** | +52% · −14,9% | +33% | −8,8% | 2,2 | 83 d | −12,5% | +21% | 0,45 |
> | 3715 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+186% · −48,9%** | +44% · −9,5% | +28% | −4,2% | 1,9 | 128 d | −7,0% | +21% | 0,01 |
> | 3716 | BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+234% · −54,8%** | +51% · −11,5% | +33% | −9,2% | 2,0 | 83 d | −11,3% | +24% | 0,36 |
> | 3717 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+186% · −48,4%** | +53% · −13,0% | +32% | −7,1% | 2,6 | 111 d | −11,1% | +15% | 0,39 |
> | 3718 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+159% · −64,4%** | +45% · −15,8% | +30% | −9,3% | 2,2 | 83 d | −12,5% | +15% | 0,25 |
> | 3719 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pullback ·PUL | **+201% · −60,1%** | +49% · −13,4% | +31% | −6,6% | 2,3 | 128 d | −8,1% | +18% | 0,23 |
> | 3720 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+173% · −53,8%** | +46% · −11,7% | +31% | −10,4% | 2,0 | 82 d | −11,8% | +26% | 0,18 |

> [!example]- Combinações 3721 a 3750 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3721 | Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+260% · −60,6%** | +54% · −13,7% | +32% | −6,6% | 2,7 | 111 d | −12,2% | +15% | 0,35 |
> | 3722 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+203% · −55,9%** | +46% · −11,6% | +28% | −5,7% | 1,8 | 97 d | −8,7% | +22% | 0,20 |
> | 3723 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+282% · −45,6%** | +59% · −8,3% | +36% | −7,9% | 2,2 | 102 d | −9,9% | +25% | 0,27 |
> | 3724 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+214% · −61,4%** | +50% · −14,2% | +30% | −4,6% | 2,4 | 129 d | −8,3% | +17% | 0,09 |
> | 3725 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+176% · −55,7%** | +42% · −12,0% | +28% | −7,2% | 2,0 | 85 d | −10,8% | +15% | 0,26 |
> | 3726 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+158% · −38,5%** | +47% · −9,0% | +30% | −6,7% | 1,8 | 122 d | −7,0% | +18% | 0,27 |
> | 3727 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+215% · −54,7%** | +48% · −11,1% | +31% | −6,0% | 1,9 | 120 d | −7,8% | +25% | 0,12 |
> | 3728 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+217% · −59,4%** | +55% · −13,6% | +31% | −9,0% | 2,5 | 128 d | −8,7% | +20% | 0,31 |
> | 3729 | VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+151% · −40,9%** | +37% · −8,6% | +26% | −12,9% | 1,5 | 130 d | −5,7% | +21% | 0,27 |
> | 3730 | GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+218% · −42,6%** | +54% · −11,1% | +32% | −9,9% | 1,9 | 84 d | −10,5% | +18% | 0,25 |
> | 3731 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+243% · −45,1%** | +50% · −9,5% | +29% | −7,3% | 2,4 | 111 d | −10,0% | +18% | 0,26 |
> | 3732 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+151% · −48,4%** | +39% · −10,7% | +28% | −12,8% | 1,8 | 120 d | −7,6% | +19% | 0,20 |
> | 3733 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+188% · −42,1%** | +44% · −8,5% | +29% | −11,0% | 1,7 | 90 d | −9,3% | +21% | 0,12 |
> | 3734 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+115% · −38,9%** | +37% · −10,1% | +24% | −9,0% | 2,1 | 159 d | −6,8% | +15% | 0,12 |
> | 3735 | Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+182% · −36,2%** | +49% · −9,0% | +31% | −8,7% | 2,0 | 95 d | −9,9% | +26% | 0,23 |
> | 3736 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+155% · −41,0%** | +39% · −7,3% | +27% | −7,6% | 1,8 | 131 d | −6,4% | +18% | 0,16 |
> | 3737 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+150% · −53,0%** | +42% · −11,5% | +28% | −9,4% | 1,9 | 82 d | −11,7% | +21% | 0,20 |
> | 3738 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN | **+249% · −52,7%** | +54% · −11,1% | +32% | −10,2% | 2,4 | 95 d | −12,4% | +17% | 0,43 |
> | 3739 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+248% · −59,4%** | +55% · −13,1% | +33% | −6,7% | 2,5 | 159 d | −8,3% | +21% | 0,23 |
> | 3740 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+148% · −62,9%** | +41% · −13,0% | +27% | −9,9% | 2,3 | 99 d | −10,9% | +11% | 0,28 |
> | 3741 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+202% · −59,7%** | +60% · −17,1% | +32% | −7,0% | 1,7 | 72 d | −15,9% | +21% | 0,40 |
> | 3742 | VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+127% · −29,9%** | +39% · −6,3% | +28% | −9,3% | 1,7 | 184 d | −5,6% | +18% | 0,12 |
> | 3743 | VWAP ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+93% · −41,6%** | +39% · −13,4% | +29% | −9,6% | 2,2 | 129 d | −7,7% | +14% | 0,36 |
> | 3744 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+255% · −59,9%** | +55% · −12,9% | +30% | −4,2% | 2,3 | 105 d | −10,3% | +20% | 0,16 |
> | 3745 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+238% · −71,0%** | +62% · −18,0% | +37% | −9,7% | 2,9 | 111 d | −14,4% | +20% | 0,51 |
> | 3746 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+192% · −51,6%** | +48% · −11,0% | +31% | −9,6% | 2,0 | 82 d | −12,2% | +24% | 0,16 |
> | 3747 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+177% · −48,1%** | +42% · −9,1% | +25% | −4,0% | 1,7 | 97 d | −8,5% | +19% | 0,08 |
> | 3748 | GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+111% · −31,7%** | +59% · −16,3% | +35% | −12,2% | 2,0 | 77 d | −14,4% | +24% | 0,25 |
> | 3749 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+156% · −40,0%** | +39% · −8,2% | +28% | −9,9% | 1,2 | 83 d | −8,8% | +15% | 0,12 |
> | 3750 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN | **+131% · −38,5%** | +50% · −13,0% | +34% | −11,0% | 2,2 | 91 d | −11,3% | +23% | 0,41 |

> [!example]- Combinações 3751 a 3780 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3751 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+224% · −49,5%** | +51% · −10,4% | +31% | −8,0% | 2,2 | 122 d | −8,3% | +23% | 0,18 |
> | 3752 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL | **+238% · −65,6%** | +55% · −15,8% | +33% | −5,7% | 2,5 | 129 d | −8,9% | +21% | 0,22 |
> | 3753 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+146% · −46,7%** | +44% · −11,9% | +28% | −4,3% | 2,4 | 119 d | −9,8% | +12% | 0,06 |
> | 3754 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + Onda ·OND | **+233% · −50,5%** | +68% · −13,1% | +37% | −7,9% | 2,5 | 102 d | −11,7% | +31% | 0,28 |
> | 3755 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+200% · −41,0%** | +44% · −7,6% | +29% | −4,5% | 2,2 | 131 d | −7,4% | +15% | 0,07 |
> | 3756 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+154% · −48,5%** | +40% · −10,4% | +26% | −7,8% | 1,8 | 83 d | −10,2% | +19% | 0,11 |
> | 3757 | Donchian ·TEN + Pôr do sol ·POR + Onda ·OND | **+128% · −32,2%** | +48% · −9,4% | +30% | −7,0% | 1,8 | 92 d | −9,2% | +23% | 0,02 |
> | 3758 | GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+183% · −42,2%** | +51% · −10,8% | +33% | −13,0% | 1,7 | 84 d | −9,9% | +19% | 0,27 |
> | 3759 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+165% · −45,5%** | +40% · −9,1% | +25% | −6,1% | 1,9 | 87 d | −10,5% | +17% | 0,05 |
> | 3760 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+179% · −47,6%** | +44% · −10,6% | +29% | −10,4% | 1,8 | 83 d | −10,3% | +22% | 0,14 |
> | 3761 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+237% · −45,3%** | +52% · −8,6% | +34% | −8,6% | 1,6 | 122 d | −6,8% | +20% | 0,28 |
> | 3762 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+220% · −56,9%** | +54% · −12,6% | +31% | −7,8% | 2,6 | 128 d | −9,2% | +21% | 0,18 |
> | 3763 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+269% · −50,4%** | +70% · −13,5% | +38% | −7,0% | 2,5 | 102 d | −12,1% | +29% | 0,30 |
> | 3764 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+132% · −40,6%** | +36% · −7,6% | +25% | −7,3% | 1,4 | 131 d | −5,6% | +17% | 0,12 |
> | 3765 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN | **+195% · −70,3%** | +50% · −18,2% | +32% | −7,2% | 2,5 | 128 d | −9,0% | +16% | 0,27 |
> | 3766 | ADX ·ADX + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+118% · −33,1%** | +38% · −7,9% | +26% | −6,5% | 1,2 | 122 d | −6,2% | +19% | 0,00 |
> | 3767 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+162% · −56,6%** | +45% · −12,6% | +27% | −4,6% | 1,8 | 80 d | −11,3% | +20% | 0,06 |
> | 3768 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+182% · −37,6%** | +48% · −8,4% | +31% | −7,4% | 1,8 | 90 d | −9,9% | +25% | 0,02 |
> | 3769 | BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+139% · −36,3%** | +42% · −9,1% | +29% | −9,3% | 1,7 | 82 d | −10,3% | +20% | 0,09 |
> | 3770 | ADX ·ADX + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+167% · −47,2%** | +52% · −12,2% | +31% | −8,0% | 1,6 | 76 d | −11,9% | +25% | 0,20 |
> | 3771 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR | **+175% · −50,9%** | +51% · −12,8% | +31% | −5,4% | 2,1 | 122 d | −8,1% | +22% | 0,10 |
> | 3772 | BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+141% · −48,8%** | +44% · −12,6% | +31% | −7,9% | 1,9 | 83 d | −11,0% | +25% | 0,12 |
> | 3773 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+176% · −48,0%** | +65% · −17,4% | +36% | −7,4% | 1,6 | 72 d | −13,8% | +27% | 0,32 |
> | 3774 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+186% · −59,1%** | +54% · −17,1% | +33% | −6,2% | 2,7 | 111 d | −12,8% | +16% | 0,22 |
> | 3775 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+187% · −58,0%** | +49% · −12,9% | +32% | −7,5% | 2,1 | 83 d | −12,5% | +25% | 0,16 |
> | 3776 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+209% · −54,8%** | +48% · −12,1% | +29% | −8,7% | 2,0 | 82 d | −12,3% | +23% | 0,17 |
> | 3777 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+151% · −50,4%** | +41% · −10,6% | +28% | −8,0% | 2,0 | 86 d | −11,1% | +22% | 0,04 |
> | 3778 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+175% · −58,1%** | +45% · −12,7% | +29% | −6,7% | 1,9 | 120 d | −8,1% | +19% | 0,20 |
> | 3779 | MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+92% · −22,6%** | +31% · −5,2% | +24% | −8,1% | 1,3 | 188 d | −4,9% | +17% | 0,06 |
> | 3780 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+257% · −59,9%** | +58% · −13,3% | +36% | −7,8% | 2,5 | 115 d | −10,8% | +27% | 0,34 |

> [!example]- Combinações 3781 a 3810 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3781 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+198% · −57,5%** | +51% · −13,2% | +30% | −6,5% | 1,6 | 73 d | −12,7% | +23% | 0,15 |
> | 3782 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+132% · −35,7%** | +34% · −7,0% | +26% | −9,9% | 1,8 | 179 d | −6,0% | +19% | 0,03 |
> | 3783 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+220% · −61,2%** | +56% · −14,1% | +33% | −9,5% | 1,5 | 72 d | −13,5% | +25% | 0,33 |
> | 3784 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+97% · −26,6%** | +27% · −4,6% | +20% | −7,1% | 1,5 | 171 d | −5,3% | +16% | 0,08 |
> | 3785 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+219% · −53,5%** | +53% · −11,6% | +31% | −8,7% | 2,3 | 99 d | −11,3% | +20% | 0,16 |
> | 3786 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+202% · −50,3%** | +49% · −10,3% | +30% | −8,7% | 2,0 | 129 d | −7,2% | +20% | 0,31 |
> | 3787 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+147% · −58,2%** | +40% · −12,9% | +29% | −10,0% | 1,8 | 85 d | −10,4% | +18% | 0,28 |
> | 3788 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+102% · −36,8%** | +30% · −7,3% | +24% | −12,1% | 1,1 | 176 d | −4,8% | +19% | 0,14 |
> | 3789 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+261% · −60,7%** | +58% · −14,7% | +32% | −7,3% | 1,7 | 73 d | −13,8% | +24% | 0,34 |
> | 3790 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+206% · −50,5%** | +55% · −12,6% | +31% | −5,6% | 1,3 | 72 d | −12,2% | +20% | 0,32 |
> | 3791 | Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+278% · −61,6%** | +59% · −14,0% | +35% | −7,9% | 2,4 | 95 d | −13,3% | +24% | 0,37 |
> | 3792 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Bollinger ·TEN | **+179% · −54,5%** | +45% · −12,0% | +27% | −10,8% | 2,0 | 81 d | −12,9% | +14% | 0,26 |
> | 3793 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN | **+166% · −41,1%** | +47% · −11,0% | +29% | −10,8% | 1,8 | 80 d | −12,2% | +17% | 0,40 |
> | 3794 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+143% · −32,6%** | +35% · −6,1% | +24% | −5,9% | 1,6 | 107 d | −7,9% | +19% | 0,09 |
> | 3795 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+234% · −54,6%** | +54% · −11,9% | +29% | −7,7% | 2,3 | 90 d | −13,8% | +18% | 0,17 |
> | 3796 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+170% · −46,2%** | +51% · −11,7% | +31% | −6,4% | 1,6 | 77 d | −11,3% | +23% | 0,06 |
> | 3797 | VWAP ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+124% · −40,1%** | +40% · −10,3% | +29% | −11,2% | 1,9 | 130 d | −6,9% | +25% | 0,31 |
> | 3798 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + IFR ·TEN | **+207% · −51,3%** | +60% · −13,7% | +35% | −9,2% | 2,5 | 122 d | −9,6% | +24% | 0,38 |
> | 3799 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+106% · −47,5%** | +33% · −10,5% | +25% | −12,2% | 1,4 | 82 d | −9,7% | +18% | 0,22 |
> | 3800 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+296% · −70,8%** | +65% · −18,3% | +38% | −7,0% | 2,6 | 127 d | −9,9% | +23% | 0,36 |
> | 3801 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+200% · −41,3%** | +52% · −8,8% | +31% | −4,7% | 2,5 | 159 d | −8,4% | +20% | −0,00 |
> | 3802 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+145% · −50,4%** | +38% · −9,9% | +25% | −4,8% | 2,0 | 161 d | −6,8% | +18% | −0,02 |
> | 3803 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Onda ·OND | **+155% · −41,8%** | +48% · −11,2% | +31% | −15,2% | 1,9 | 101 d | −9,2% | +22% | 0,41 |
> | 3804 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+161% · −63,7%** | +46% · −15,5% | +30% | −9,3% | 2,1 | 83 d | −12,9% | +16% | 0,25 |
> | 3805 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+116% · −31,7%** | +36% · −7,4% | +25% | −4,8% | 1,8 | 161 d | −6,1% | +18% | 0,00 |
> | 3806 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+206% · −55,1%** | +46% · −11,2% | +28% | −5,5% | 1,7 | 97 d | −8,8% | +22% | 0,17 |
> | 3807 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+146% · −36,4%** | +42% · −8,5% | +26% | −6,0% | 1,6 | 130 d | −6,2% | +14% | 0,18 |
> | 3808 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+201% · −63,5%** | +54% · −14,5% | +35% | −10,1% | 2,1 | 83 d | −13,1% | +28% | 0,38 |
> | 3809 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+242% · −54,0%** | +53% · −11,9% | +31% | −7,1% | 1,2 | 72 d | −12,0% | +17% | 0,27 |
> | 3810 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+244% · −71,9%** | +59% · −19,0% | +35% | −7,7% | 2,7 | 127 d | −10,4% | +18% | 0,35 |

> [!example]- Combinações 3811 a 3840 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3811 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+191% · −48,9%** | +57% · −12,7% | +35% | −9,6% | 1,6 | 76 d | −12,2% | +24% | 0,26 |
> | 3812 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+162% · −46,3%** | +39% · −9,4% | +26% | −11,3% | 1,8 | 85 d | −10,3% | +17% | 0,25 |
> | 3813 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+203% · −50,2%** | +55% · −12,3% | +35% | −8,1% | 2,1 | 125 d | −7,9% | +23% | 0,34 |
> | 3814 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+136% · −38,6%** | +42% · −10,0% | +28% | −13,2% | 2,2 | 128 d | −8,0% | +19% | 0,37 |
> | 3815 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+111% · −46,0%** | +32% · −9,3% | +25% | −10,1% | 1,9 | 120 d | −8,0% | +15% | 0,10 |
> | 3816 | VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+113% · −34,5%** | +35% · −8,5% | +24% | −12,5% | 1,6 | 146 d | −6,0% | +20% | 0,30 |
> | 3817 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+231% · −54,1%** | +53% · −11,8% | +31% | −10,2% | 1,7 | 77 d | −11,7% | +24% | 0,30 |
> | 3818 | BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+182% · −60,5%** | +49% · −14,3% | +32% | −9,0% | 2,1 | 83 d | −12,9% | +23% | 0,32 |
> | 3819 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+227% · −69,1%** | +62% · −16,9% | +37% | −9,0% | 2,5 | 95 d | −15,1% | +24% | 0,42 |
> | 3820 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+117% · −35,0%** | +33% · −6,4% | +25% | −7,6% | 1,2 | 98 d | −7,8% | +17% | 0,02 |
> | 3821 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+200% · −41,8%** | +45% · −7,7% | +30% | −8,3% | 1,9 | 130 d | −7,0% | +18% | 0,17 |
> | 3822 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+285% · −64,1%** | +59% · −15,2% | +35% | −7,9% | 2,7 | 111 d | −12,7% | +20% | 0,47 |
> | 3823 | VWAP ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+179% · −37,6%** | +48% · −9,3% | +32% | −10,5% | 2,1 | 123 d | −8,0% | +26% | 0,37 |
> | 3824 | ADX ·ADX + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+207% · −54,4%** | +59% · −15,3% | +35% | −8,3% | 1,4 | 72 d | −13,1% | +21% | 0,26 |
> | 3825 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+173% · −37,7%** | +41% · −6,7% | +27% | −4,2% | 1,8 | 131 d | −6,5% | +14% | 0,07 |
> | 3826 | VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+115% · −42,2%** | +39% · −11,5% | +27% | −15,0% | 1,7 | 81 d | −11,0% | +25% | 0,26 |
> | 3827 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN | **+211% · −68,4%** | +67% · −21,3% | +38% | −8,3% | 2,9 | 111 d | −17,1% | +16% | 0,54 |
> | 3828 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+226% · −58,1%** | +55% · −12,6% | +35% | −9,1% | 2,1 | 83 d | −13,4% | +26% | 0,31 |
> | 3829 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+240% · −47,4%** | +51% · −7,4% | +31% | −4,9% | 2,2 | 131 d | −7,9% | +21% | 0,03 |
> | 3830 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+126% · −52,5%** | +34% · −12,2% | +25% | −10,8% | 1,8 | 120 d | −7,9% | +14% | 0,19 |
> | 3831 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+272% · −47,8%** | +54% · −10,1% | +32% | −9,9% | 2,4 | 111 d | −10,5% | +23% | 0,35 |
> | 3832 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+250% · −60,3%** | +55% · −13,7% | +30% | −5,0% | 2,3 | 105 d | −10,8% | +18% | 0,27 |
> | 3833 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+95% · −30,3%** | +33% · −7,3% | +22% | −4,9% | 1,3 | 161 d | −5,3% | +17% | 0,01 |
> | 3834 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+182% · −68,0%** | +48% · −15,4% | +31% | −7,8% | 2,3 | 95 d | −12,4% | +15% | 0,30 |
> | 3835 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+197% · −58,9%** | +51% · −13,7% | +30% | −7,4% | 1,5 | 73 d | −13,3% | +22% | 0,28 |
> | 3836 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+184% · −60,9%** | +49% · −14,0% | +30% | −7,5% | 1,7 | 78 d | −12,1% | +24% | 0,16 |
> | 3837 | GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+158% · −38,8%** | +45% · −9,4% | +29% | −8,9% | 1,7 | 89 d | −9,8% | +18% | 0,09 |
> | 3838 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+153% · −49,5%** | +42% · −10,1% | +28% | −8,0% | 2,0 | 86 d | −11,3% | +23% | 0,04 |
> | 3839 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+163% · −47,0%** | +41% · −9,6% | +25% | −7,0% | 1,9 | 87 d | −11,0% | +15% | 0,14 |
> | 3840 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+146% · −32,7%** | +42% · −7,2% | +28% | −4,7% | 1,9 | 161 d | −6,5% | +18% | −0,03 |

> [!example]- Combinações 3841 a 3870 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3841 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+169% · −38,5%** | +40% · −6,6% | +27% | −6,7% | 1,8 | 130 d | −6,9% | +18% | 0,16 |
> | 3842 | VWAP ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+124% · −33,7%** | +39% · −8,2% | +29% | −9,3% | 1,9 | 133 d | −6,9% | +24% | 0,12 |
> | 3843 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+156% · −68,7%** | +46% · −16,9% | +30% | −10,5% | 2,1 | 83 d | −13,4% | +14% | 0,40 |
> | 3844 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+161% · −59,2%** | +45% · −13,6% | +27% | −5,7% | 1,7 | 80 d | −11,9% | +19% | 0,12 |
> | 3845 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+237% · −50,9%** | +55% · −10,7% | +35% | −10,0% | 2,4 | 111 d | −10,7% | +29% | 0,39 |
> | 3846 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Onda ·OND | **+165% · −48,6%** | +50% · −12,6% | +31% | −8,5% | 2,3 | 95 d | −12,4% | +22% | 0,21 |
> | 3847 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Bollinger ·TEN | **+229% · −48,6%** | +59% · −11,7% | +32% | −7,2% | 2,3 | 129 d | −8,4% | +17% | 0,37 |
> | 3848 | BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+245% · −60,0%** | +56% · −13,3% | +34% | −8,3% | 2,1 | 83 d | −13,9% | +26% | 0,34 |
> | 3849 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+184% · −61,9%** | +54% · −17,8% | +33% | −6,2% | 2,6 | 111 d | −12,3% | +15% | 0,24 |
> | 3850 | ADX ·ADX + VWAP ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+147% · −38,5%** | +43% · −9,4% | +26% | −7,9% | 1,5 | 122 d | −6,9% | +17% | 0,25 |
> | 3851 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+304% · −59,2%** | +61% · −12,9% | +33% | −5,7% | 2,1 | 105 d | −9,7% | +23% | 0,32 |
> | 3852 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+158% · −31,5%** | +44% · −6,4% | +29% | −4,1% | 1,9 | 130 d | −7,2% | +18% | −0,01 |
> | 3853 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Tendência ·TEN | **+174% · −67,8%** | +50% · −17,2% | +33% | −13,0% | 2,1 | 83 d | −13,9% | +19% | 0,49 |
> | 3854 | BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+180% · −49,0%** | +52% · −12,5% | +35% | −8,7% | 1,9 | 83 d | −11,7% | +23% | 0,28 |
> | 3855 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+203% · −53,4%** | +49% · −10,4% | +31% | −6,0% | 1,8 | 108 d | −8,6% | +24% | 0,12 |
> | 3856 | BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+108% · −49,8%** | +44% · −18,3% | +30% | −6,8% | 2,3 | 95 d | −11,9% | +14% | 0,10 |
> | 3857 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+233% · −53,1%** | +53% · −9,7% | +35% | −8,7% | 1,8 | 122 d | −7,4% | +24% | 0,30 |
> | 3858 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL | **+94% · −39,4%** | +39% · −13,1% | +28% | −8,6% | 2,0 | 91 d | −11,0% | +16% | 0,05 |
> | 3859 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN | **+202% · −72,8%** | +51% · −16,8% | +33% | −7,9% | 3,0 | 128 d | −11,8% | +13% | 0,36 |
> | 3860 | BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+176% · −50,7%** | +55% · −13,7% | +34% | −11,2% | 2,1 | 83 d | −13,9% | +28% | 0,35 |
> | 3861 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN + Onda ·OND | **+225% · −66,6%** | +53% · −16,2% | +34% | −8,1% | 2,4 | 122 d | −9,5% | +26% | 0,18 |
> | 3862 | ADX ·ADX + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+144% · −37,0%** | +44% · −8,7% | +30% | −7,4% | 1,3 | 122 d | −6,5% | +19% | 0,04 |
> | 3863 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+116% · −33,7%** | +31% · −6,3% | +24% | −10,1% | 1,4 | 182 d | −5,3% | +17% | 0,10 |
> | 3864 | VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN | **+149% · −44,4%** | +59% · −15,7% | +33% | −15,6% | 2,7 | 110 d | −14,1% | +17% | 0,44 |
> | 3865 | VWAP ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+149% · −35,0%** | +44% · −8,7% | +32% | −12,7% | 1,9 | 182 d | −6,3% | +21% | 0,36 |
> | 3866 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+112% · −31,9%** | +34% · −7,7% | +24% | −11,2% | 1,6 | 174 d | −5,7% | +17% | 0,22 |
> | 3867 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN | **+194% · −75,3%** | +57% · −20,4% | +34% | −8,8% | 2,0 | 82 d | −13,7% | +19% | 0,45 |
> | 3868 | BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+110% · −48,2%** | +44% · −17,4% | +30% | −6,9% | 2,1 | 86 d | −12,5% | +15% | 0,07 |
> | 3869 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+143% · −46,5%** | +40% · −9,4% | +28% | −11,5% | 1,7 | 91 d | −9,7% | +22% | 0,30 |
> | 3870 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+198% · −63,1%** | +52% · −16,1% | +33% | −11,8% | 2,0 | 83 d | −12,8% | +19% | 0,40 |

> [!example]- Combinações 3871 a 3900 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3871 | ADX ·ADX + IFR ·TEN + Pôr do sol ·POR | **+148% · −30,3%** | +53% · −9,9% | +33% | −5,9% | 1,9 | 130 d | −7,2% | +18% | 0,04 |
> | 3872 | ADX ·ADX + MACD ·TEN + Rompe 200 ·ROM | **+111% · −36,3%** | +45% · −12,0% | +29% | −8,9% | 1,3 | 122 d | −6,6% | +22% | 0,12 |
> | 3873 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+140% · −56,8%** | +40% · −12,4% | +29% | −10,0% | 1,7 | 83 d | −10,6% | +22% | 0,19 |
> | 3874 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+143% · −60,1%** | +40% · −13,8% | +29% | −10,9% | 1,8 | 85 d | −10,9% | +16% | 0,40 |
> | 3875 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL | **+170% · −58,1%** | +45% · −12,9% | +29% | −11,9% | 2,3 | 99 d | −11,4% | +15% | 0,31 |
> | 3876 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+138% · −30,7%** | +33% · −5,6% | +23% | −7,4% | 1,6 | 173 d | −5,8% | +16% | 0,12 |
> | 3877 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+128% · −46,7%** | +34% · −10,2% | +25% | −9,4% | 1,8 | 123 d | −7,4% | +17% | 0,06 |
> | 3878 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+90% · −35,3%** | +27% · −7,0% | +21% | −7,5% | 1,3 | 181 d | −5,2% | +17% | 0,07 |
> | 3879 | ADX ·ADX + Donchian ·TEN + Rompe 200 ·ROM + Onda ·OND | **+194% · −40,3%** | +55% · −9,1% | +32% | −6,9% | 2,1 | 127 d | −8,3% | +24% | 0,18 |
> | 3880 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Tendência ·TEN | **+183% · −54,0%** | +51% · −14,1% | +34% | −7,5% | 2,6 | 161 d | −8,8% | +20% | 0,19 |
> | 3881 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+224% · −67,5%** | +54% · −15,3% | +34% | −10,3% | 2,5 | 111 d | −11,6% | +18% | 0,44 |
> | 3882 | BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+159% · −60,4%** | +51% · −18,1% | +32% | −7,3% | 2,4 | 95 d | −14,0% | +15% | 0,38 |
> | 3883 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+144% · −48,0%** | +39% · −10,5% | +28% | −12,9% | 1,5 | 82 d | −10,2% | +23% | 0,19 |
> | 3884 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Tendência ·TEN | **+179% · −54,3%** | +42% · −11,4% | +28% | −7,3% | 1,9 | 85 d | −11,2% | +16% | 0,26 |
> | 3885 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+138% · −49,5%** | +39% · −10,2% | +26% | −9,2% | 1,8 | 87 d | −10,5% | +19% | 0,12 |
> | 3886 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+250% · −42,3%** | +63% · −9,4% | +36% | −7,0% | 2,3 | 105 d | −11,1% | +24% | 0,30 |
> | 3887 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+211% · −43,6%** | +47% · −7,4% | +29% | −4,4% | 1,9 | 131 d | −7,1% | +20% | 0,01 |
> | 3888 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN | **+151% · −57,5%** | +51% · −16,6% | +32% | −13,7% | 2,1 | 83 d | −14,3% | +16% | 0,45 |
> | 3889 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+190% · −43,6%** | +44% · −8,3% | +29% | −11,1% | 1,6 | 90 d | −9,6% | +20% | 0,18 |
> | 3890 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+121% · −41,1%** | +39% · −10,9% | +27% | −13,9% | 2,1 | 140 d | −7,4% | +23% | 0,16 |
> | 3891 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+213% · −44,9%** | +46% · −9,6% | +30% | −10,8% | 1,4 | 83 d | −9,8% | +15% | 0,28 |
> | 3892 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN + Tendência ·TEN | **+213% · −64,8%** | +53% · −15,3% | +32% | −10,4% | 2,1 | 83 d | −14,7% | +16% | 0,46 |
> | 3893 | BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+140% · −38,0%** | +43% · −9,2% | +29% | −9,2% | 1,9 | 101 d | −9,3% | +25% | 0,26 |
> | 3894 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+223% · −55,9%** | +54% · −12,2% | +31% | −7,8% | 2,4 | 128 d | −9,2% | +22% | 0,18 |
> | 3895 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+209% · −52,0%** | +47% · −11,7% | +28% | −8,8% | 1,8 | 83 d | −11,2% | +19% | 0,27 |
> | 3896 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN | **+209% · −50,2%** | +59% · −13,5% | +36% | −10,2% | 2,5 | 111 d | −11,8% | +21% | 0,49 |
> | 3897 | VWAP ·TEN + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+166% · −43,9%** | +48% · −11,9% | +29% | −14,3% | 1,7 | 81 d | −11,7% | +25% | 0,30 |
> | 3898 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+102% · −33,1%** | +30% · −6,3% | +24% | −10,6% | 1,1 | 191 d | −4,9% | +17% | 0,08 |
> | 3899 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+231% · −54,3%** | +53% · −11,6% | +30% | −7,8% | 2,4 | 99 d | −13,5% | +17% | 0,20 |
> | 3900 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+189% · −47,6%** | +44% · −8,9% | +28% | −4,2% | 1,9 | 130 d | −7,1% | +22% | 0,01 |

> [!example]- Combinações 3901 a 3930 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3901 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Bollinger ·TEN | **+175% · −43,6%** | +48% · −10,6% | +29% | −9,3% | 1,6 | 122 d | −7,2% | +16% | 0,40 |
> | 3902 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+184% · −60,3%** | +48% · −13,8% | +29% | −4,8% | 2,4 | 120 d | −10,1% | +18% | 0,09 |
> | 3903 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+136% · −50,5%** | +38% · −10,6% | +26% | −9,2% | 1,9 | 95 d | −10,2% | +18% | 0,14 |
> | 3904 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+159% · −60,0%** | +45% · −14,0% | +27% | −5,7% | 1,8 | 82 d | −11,8% | +18% | 0,15 |
> | 3905 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+114% · −32,4%** | +36% · −7,4% | +24% | −7,3% | 1,9 | 159 d | −6,8% | +15% | 0,05 |
> | 3906 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+200% · −45,7%** | +46% · −10,1% | +30% | −10,9% | 1,7 | 83 d | −11,0% | +24% | 0,33 |
> | 3907 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+211% · −61,0%** | +52% · −13,9% | +33% | −7,2% | 2,4 | 111 d | −11,1% | +23% | 0,20 |
> | 3908 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+175% · −47,9%** | +43% · −8,2% | +30% | −9,8% | 1,7 | 130 d | −6,7% | +18% | 0,17 |
> | 3909 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+148% · −40,4%** | +39% · −7,1% | +27% | −8,3% | 1,6 | 130 d | −6,6% | +18% | 0,16 |
> | 3910 | Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+57% · −16,3%** | +27% · −4,8% | +22% | −7,3% | 1,0 | 220 d | −4,7% | +16% | −0,02 |
> | 3911 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+78% · −29,7%** | +26% · −5,5% | +21% | −9,1% | 1,0 | 179 d | −5,0% | +17% | 0,04 |
> | 3912 | GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+156% · −40,1%** | +45% · −9,9% | +30% | −10,3% | 1,7 | 89 d | −10,3% | +19% | 0,23 |
> | 3913 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR | **+139% · −34,7%** | +42% · −9,2% | +28% | −12,1% | 2,1 | 148 d | −7,5% | +18% | 0,24 |
> | 3914 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+119% · −31,1%** | +38% · −8,1% | +26% | −5,6% | 1,1 | 131 d | −5,6% | +17% | −0,02 |
> | 3915 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Onda ·OND | **+219% · −48,7%** | +61% · −11,4% | +36% | −8,5% | 2,1 | 127 d | −8,4% | +24% | 0,28 |
> | 3916 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+189% · −48,2%** | +45% · −10,4% | +28% | −9,3% | 1,9 | 87 d | −11,5% | +20% | 0,20 |
> | 3917 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+256% · −44,7%** | +54% · −8,1% | +33% | −5,2% | 2,1 | 110 d | −9,8% | +23% | 0,07 |
> | 3918 | MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+90% · −22,6%** | +30% · −5,2% | +24% | −6,2% | 1,1 | 255 d | −4,7% | +16% | 0,02 |
> | 3919 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+272% · −46,0%** | +52% · −6,6% | +31% | −4,0% | 2,4 | 128 d | −9,3% | +21% | 0,02 |
> | 3920 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+122% · −33,6%** | +38% · −7,6% | +26% | −5,0% | 1,4 | 161 d | −5,7% | +16% | 0,04 |
> | 3921 | ADX ·ADX + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+175% · −35,4%** | +47% · −8,5% | +28% | −6,4% | 1,5 | 122 d | −7,0% | +18% | 0,08 |
> | 3922 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+176% · −38,0%** | +49% · −7,6% | +29% | −4,6% | 2,1 | 158 d | −7,6% | +20% | 0,03 |
> | 3923 | MACD ·TEN + Pullback ·PUL + Onda ·OND | **+98% · −22,8%** | +39% · −7,1% | +30% | −9,4% | 2,0 | 210 d | −6,8% | +24% | 0,06 |
> | 3924 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+216% · −54,7%** | +52% · −12,1% | +31% | −8,8% | 2,4 | 114 d | −11,0% | +19% | 0,15 |
> | 3925 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN + Onda ·OND | **+270% · −55,2%** | +57% · −10,7% | +33% | −6,7% | 2,0 | 108 d | −9,7% | +25% | 0,29 |
> | 3926 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+181% · −62,1%** | +49% · −14,4% | +30% | −7,5% | 1,8 | 82 d | −12,1% | +23% | 0,19 |
> | 3927 | ADX ·ADX + BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+266% · −66,2%** | +58% · −15,5% | +34% | −8,6% | 2,1 | 96 d | −11,0% | +26% | 0,31 |
> | 3928 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN + Onda ·OND ⚠️ | **+200% · −64,8%** | +50% · −15,4% | +33% | −7,9% | 1,9 | 96 d | −9,9% | +26% | 0,13 |
> | 3929 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Tendência ·TEN | **+264% · −74,5%** | +63% · −20,4% | +38% | −8,9% | 2,7 | 127 d | −11,0% | +23% | 0,45 |
> | 3930 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN | **+206% · −54,1%** | +47% · −11,3% | +28% | −9,3% | 2,3 | 99 d | −12,3% | +13% | 0,28 |

> [!example]- Combinações 3931 a 3960 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3931 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + MACD ·TEN | **+237% · −60,8%** | +59% · −14,0% | +34% | −10,9% | 2,4 | 128 d | −9,5% | +25% | 0,40 |
> | 3932 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+122% · −42,4%** | +48% · −15,1% | +30% | −17,0% | 1,6 | 77 d | −12,6% | +23% | 0,33 |
> | 3933 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+115% · −46,0%** | +39% · −12,1% | +27% | −10,7% | 1,8 | 91 d | −10,5% | +14% | 0,34 |
> | 3934 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+142% · −34,9%** | +35% · −6,7% | +24% | −6,8% | 1,6 | 107 d | −8,4% | +18% | 0,13 |
> | 3935 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+215% · −63,9%** | +52% · −15,2% | +33% | −8,3% | 2,4 | 111 d | −11,4% | +18% | 0,41 |
> | 3936 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+90% · −40,6%** | +28% · −8,1% | +22% | −7,1% | 1,9 | 159 d | −6,9% | +13% | 0,01 |
> | 3937 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Onda ·OND | **+178% · −42,2%** | +52% · −9,7% | +34% | −9,0% | 1,7 | 122 d | −7,7% | +18% | 0,28 |
> | 3938 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+203% · −57,2%** | +59% · −15,8% | +36% | −8,5% | 2,3 | 95 d | −13,5% | +21% | 0,35 |
> | 3939 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL | **+178% · −66,5%** | +50% · −15,9% | +30% | −11,3% | 2,4 | 99 d | −14,0% | +13% | 0,32 |
> | 3940 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN + Tendência ·TEN | **+199% · −60,2%** | +47% · −13,6% | +31% | −11,0% | 1,9 | 83 d | −12,2% | +19% | 0,49 |
> | 3941 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+171% · −38,0%** | +40% · −7,3% | +27% | −4,8% | 1,2 | 122 d | −6,6% | +16% | 0,03 |
> | 3942 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+184% · −39,3%** | +49% · −8,6% | +31% | −7,2% | 1,7 | 90 d | −10,3% | +24% | 0,10 |
> | 3943 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+274% · −68,3%** | +65% · −16,5% | +34% | −7,0% | 2,3 | 94 d | −13,9% | +20% | 0,39 |
> | 3944 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+154% · −39,8%** | +44% · −10,4% | +28% | −10,4% | 1,9 | 98 d | −10,3% | +19% | 0,10 |
> | 3945 | VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+123% · −34,4%** | +32% · −6,7% | +23% | −9,9% | 1,4 | 169 d | −5,7% | +19% | 0,11 |
> | 3946 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL ⚠️ | **+169% · −39,8%** | +40% · −5,9% | +27% | −5,2% | 1,7 | 130 d | −6,8% | +16% | 0,04 |
> | 3947 | Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN | **+246% · −61,0%** | +63% · −17,9% | +36% | −7,1% | 2,7 | 111 d | −15,0% | +16% | 0,46 |
> | 3948 | VWAP ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+92% · −33,3%** | +38% · −10,4% | +29% | −7,2% | 2,2 | 171 d | −7,6% | +16% | 0,12 |
> | 3949 | VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Tendência ·TEN | **+175% · −56,3%** | +43% · −12,2% | +28% | −8,8% | 1,9 | 85 d | −11,7% | +14% | 0,37 |
> | 3950 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+71% · −28,7%** | +27% · −6,6% | +22% | −11,3% | 1,2 | 213 d | −5,1% | +17% | 0,12 |
> | 3951 | ADX ·ADX + VWAP ·TEN + Tendência ·TEN + Onda ·OND | **+177% · −55,8%** | +53% · −14,5% | +35% | −10,6% | 2,0 | 122 d | −8,4% | +23% | 0,32 |
> | 3952 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+155% · −44,2%** | +38% · −9,5% | +25% | −10,3% | 1,3 | 95 d | −8,7% | +18% | 0,18 |
> | 3953 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+174% · −59,0%** | +46% · −13,7% | +29% | −8,0% | 1,9 | 120 d | −8,6% | +18% | 0,32 |
> | 3954 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Tendência ·TEN | **+206% · −60,2%** | +61% · −17,7% | +36% | −8,5% | 2,4 | 122 d | −10,3% | +23% | 0,39 |
> | 3955 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+177% · −47,2%** | +44% · −10,6% | +29% | −10,3% | 1,8 | 95 d | −10,2% | +22% | 0,13 |
> | 3956 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+152% · −49,8%** | +40% · −10,9% | +26% | −7,9% | 1,8 | 95 d | −10,1% | +18% | 0,11 |
> | 3957 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+149% · −58,3%** | +40% · −11,6% | +26% | −8,3% | 2,2 | 119 d | −10,0% | +12% | 0,14 |
> | 3958 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+157% · −46,5%** | +40% · −9,8% | +26% | −11,7% | 1,5 | 82 d | −10,9% | +21% | 0,21 |
> | 3959 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL | **+113% · −49,2%** | +48% · −18,1% | +30% | −8,4% | 2,1 | 86 d | −15,2% | +12% | 0,19 |
> | 3960 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR + Onda ·OND | **+206% · −52,5%** | +49% · −9,9% | +31% | −5,9% | 1,7 | 108 d | −8,7% | +23% | 0,11 |

> [!example]- Combinações 3961 a 3990 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3961 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Onda ·OND | **+162% · −55,3%** | +45% · −12,2% | +29% | −12,0% | 2,0 | 91 d | −12,1% | +20% | 0,28 |
> | 3962 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+171% · −57,2%** | +46% · −12,9% | +28% | −7,7% | 2,4 | 111 d | −12,2% | +14% | 0,19 |
> | 3963 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+173% · −44,0%** | +42% · −8,6% | +28% | −9,6% | 1,3 | 122 d | −6,8% | +19% | 0,26 |
> | 3964 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN | **+275% · −65,4%** | +59% · −15,1% | +33% | −6,8% | 2,3 | 110 d | −11,4% | +23% | 0,38 |
> | 3965 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+188% · −50,7%** | +45% · −11,0% | +28% | −10,1% | 1,8 | 83 d | −12,4% | +19% | 0,29 |
> | 3966 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Tendência ·TEN | **+133% · −61,7%** | +43% · −16,9% | +30% | −8,8% | 2,5 | 120 d | −11,4% | +12% | 0,29 |
> | 3967 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+147% · −55,0%** | +41% · −12,6% | +27% | −12,5% | 1,4 | 77 d | −12,0% | +19% | 0,18 |
> | 3968 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+191% · −43,8%** | +43% · −8,0% | +26% | −5,4% | 2,2 | 111 d | −10,4% | +14% | 0,15 |
> | 3969 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+139% · −31,6%** | +34% · −5,1% | +26% | −8,1% | 1,4 | 182 d | −5,7% | +16% | 0,07 |
> | 3970 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+86% · −32,4%** | +31% · −6,8% | +23% | −6,5% | 1,3 | 107 d | −8,0% | +19% | 0,01 |
> | 3971 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+165% · −48,2%** | +41% · −10,0% | +25% | −7,0% | 1,8 | 87 d | −11,4% | +16% | 0,10 |
> | 3972 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL | **+168% · −49,6%** | +51% · −13,0% | +31% | −8,1% | 2,4 | 130 d | −9,0% | +20% | 0,19 |
> | 3973 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+282% · −57,0%** | +60% · −13,3% | +33% | −9,7% | 2,3 | 99 d | −13,1% | +21% | 0,34 |
> | 3974 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+239% · −40,9%** | +49% · −6,5% | +29% | −4,4% | 2,3 | 127 d | −9,2% | +22% | 0,09 |
> | 3975 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+151% · −37,7%** | +36% · −7,6% | +26% | −11,4% | 1,4 | 181 d | −5,7% | +19% | 0,18 |
> | 3976 | VWAP ·TEN + Donchian ·TEN + Pullback ·PUL | **+122% · −37,9%** | +47% · −12,8% | +30% | −10,6% | 2,4 | 148 d | −8,7% | +13% | 0,22 |
> | 3977 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+215% · −59,2%** | +52% · −13,9% | +29% | −6,4% | 1,8 | 82 d | −12,9% | +19% | 0,29 |
> | 3978 | BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+150% · −39,5%** | +43% · −9,5% | +28% | −7,8% | 1,7 | 86 d | −10,9% | +23% | 0,11 |
> | 3979 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+179% · −51,0%** | +45% · −10,9% | +29% | −6,4% | 1,0 | 77 d | −10,9% | +17% | 0,08 |
> | 3980 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+270% · −42,1%** | +54% · −6,9% | +32% | −5,3% | 2,3 | 127 d | −9,3% | +22% | 0,16 |
> | 3981 | BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN | **+113% · −34,2%** | +43% · −10,6% | +26% | −5,1% | 2,0 | 91 d | −12,3% | +12% | 0,07 |
> | 3982 | BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+194% · −51,0%** | +53% · −13,4% | +33% | −8,9% | 1,9 | 83 d | −13,3% | +25% | 0,33 |
> | 3983 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+181% · −35,1%** | +50% · −8,4% | +32% | −6,7% | 1,8 | 122 d | −8,1% | +22% | 0,09 |
> | 3984 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN + Onda ·OND ⚠️ | **+179% · −55,6%** | +46% · −12,2% | +32% | −12,2% | 1,7 | 83 d | −11,3% | +26% | 0,35 |
> | 3985 | BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+171% · −55,0%** | +44% · −11,7% | +31% | −9,7% | 1,9 | 101 d | −10,0% | +25% | 0,30 |
> | 3986 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+163% · −47,9%** | +44% · −10,5% | +31% | −12,8% | 1,7 | 91 d | −10,2% | +24% | 0,37 |
> | 3987 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+160% · −51,1%** | +47% · −13,0% | +31% | −7,3% | 2,1 | 131 d | −8,0% | +20% | 0,15 |
> | 3988 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+131% · −53,4%** | +42% · −14,4% | +27% | −5,9% | 2,0 | 129 d | −8,2% | +17% | 0,02 |
> | 3989 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN | **+203% · −57,7%** | +52% · −13,0% | +33% | −12,5% | 2,4 | 111 d | −11,6% | +19% | 0,49 |
> | 3990 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL + Onda ·OND | **+221% · −45,5%** | +59% · −9,8% | +35% | −6,2% | 2,3 | 128 d | −9,2% | +23% | 0,11 |

> [!example]- Combinações 3991 a 4020 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 3991 | BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN | **+158% · −50,5%** | +56% · −18,4% | +34% | −8,1% | 2,1 | 85 d | −15,5% | +16% | 0,43 |
> | 3992 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+141% · −33,7%** | +42% · −7,7% | +28% | −6,2% | 1,7 | 131 d | −6,8% | +18% | −0,01 |
> | 3993 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+173% · −29,7%** | +58% · −9,1% | +35% | −11,2% | 2,4 | 112 d | −11,6% | +28% | 0,33 |
> | 3994 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN | **+174% · −46,5%** | +64% · −16,7% | +37% | −8,5% | 2,6 | 111 d | −14,6% | +17% | 0,51 |
> | 3995 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+299% · −45,7%** | +58% · −9,0% | +32% | −7,6% | 2,2 | 128 d | −8,9% | +19% | 0,34 |
> | 3996 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+178% · −52,5%** | +46% · −11,4% | +29% | −7,8% | 1,0 | 76 d | −11,4% | +18% | 0,21 |
> | 3997 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+179% · −63,5%** | +49% · −15,5% | +30% | −8,4% | 1,8 | 82 d | −12,6% | +22% | 0,29 |
> | 3998 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+195% · −41,6%** | +54% · −9,2% | +32% | −5,6% | 2,0 | 127 d | −8,3% | +22% | 0,03 |
> | 3999 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN | **+195% · −63,2%** | +50% · −14,1% | +32% | −9,8% | 1,9 | 120 d | −8,9% | +21% | 0,40 |
> | 4000 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+148% · −59,0%** | +51% · −17,1% | +30% | −5,9% | 1,7 | 77 d | −14,5% | +19% | 0,17 |
> | 4001 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+114% · −32,3%** | +35% · −7,8% | +24% | −11,5% | 1,5 | 174 d | −6,0% | +16% | 0,24 |
> | 4002 | Pôr do sol ·POR | **+20% · −3,0%** | +20% · −3,0% | +17% | −2,7% | 0,4 | 191 d | −5,0% | +12% | — |
> | 4003 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+184% · −39,3%** | +43% · −7,1% | +27% | −7,5% | 1,4 | 122 d | −7,2% | +17% | 0,14 |
> | 4004 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL | **+158% · −58,0%** | +48% · −16,4% | +31% | −6,4% | 2,1 | 128 d | −8,4% | +21% | 0,12 |
> | 4005 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Tendência ·TEN + Onda ·OND | **+251% · −72,9%** | +63% · −19,3% | +38% | −9,0% | 2,4 | 119 d | −11,6% | +27% | 0,37 |
> | 4006 | BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+172% · −60,3%** | +56% · −17,4% | +36% | −9,7% | 2,0 | 83 d | −15,9% | +26% | 0,38 |
> | 4007 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+161% · −47,0%** | +41% · −9,2% | +27% | −7,7% | 2,1 | 111 d | −10,0% | +18% | 0,15 |
> | 4008 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+146% · −53,2%** | +39% · −11,1% | +26% | −6,0% | 1,6 | 119 d | −8,1% | +20% | 0,11 |
> | 4009 | Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+210% · −36,9%** | +54% · −8,4% | +35% | −11,2% | 2,1 | 115 d | −10,0% | +26% | 0,30 |
> | 4010 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Tendência ·TEN | **+195% · −67,9%** | +58% · −21,4% | +36% | −10,1% | 2,2 | 119 d | −10,3% | +24% | 0,40 |
> | 4011 | VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+151% · −46,0%** | +47% · −12,7% | +31% | −15,8% | 1,4 | 77 d | −12,3% | +23% | 0,30 |
> | 4012 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+182% · −46,4%** | +43% · −10,1% | +27% | −6,3% | 2,2 | 130 d | −8,6% | +18% | 0,11 |
> | 4013 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+201% · −58,0%** | +51% · −13,4% | +30% | −6,5% | 1,5 | 77 d | −12,8% | +24% | 0,15 |
> | 4014 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL | **+118% · −56,3%** | +42% · −16,2% | +28% | −12,7% | 1,8 | 82 d | −14,1% | +12% | 0,27 |
> | 4015 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+180% · −70,6%** | +48% · −16,0% | +31% | −7,8% | 2,4 | 111 d | −12,0% | +14% | 0,30 |
> | 4016 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+153% · −38,0%** | +36% · −7,6% | +25% | −11,5% | 1,3 | 183 d | −5,7% | +18% | 0,21 |
> | 4017 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+198% · −57,7%** | +48% · −13,8% | +29% | −13,5% | 1,5 | 77 d | −13,0% | +19% | 0,38 |
> | 4018 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+179% · −47,0%** | +42% · −10,3% | +27% | −6,3% | 2,3 | 192 d | −8,3% | +17% | 0,11 |
> | 4019 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+212% · −67,7%** | +57% · −16,6% | +32% | −6,2% | 2,3 | 110 d | −11,9% | +19% | 0,22 |
> | 4020 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + IFR ·TEN + Onda ·OND | **+172% · −57,8%** | +49% · −13,0% | +32% | −12,8% | 1,9 | 83 d | −13,1% | +25% | 0,37 |

> [!example]- Combinações 4021 a 4050 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4021 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+99% · −32,1%** | +32% · −8,0% | +24% | −8,5% | 1,8 | 181 d | −6,6% | +16% | 0,05 |
> | 4022 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+175% · −62,8%** | +52% · −18,9% | +33% | −7,1% | 2,3 | 127 d | −9,3% | +21% | 0,13 |
> | 4023 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+157% · −39,1%** | +44% · −10,2% | +28% | −10,6% | 1,8 | 92 d | −10,7% | +18% | 0,16 |
> | 4024 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+203% · −64,1%** | +50% · −14,8% | +32% | −7,9% | 1,8 | 96 d | −10,0% | +26% | 0,14 |
> | 4025 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+106% · −42,7%** | +37% · −10,6% | +24% | −6,7% | 1,8 | 87 d | −11,3% | +16% | −0,02 |
> | 4026 | VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+115% · −38,9%** | +39% · −10,3% | +27% | −13,2% | 1,8 | 94 d | −10,3% | +25% | 0,04 |
> | 4027 | VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+86% · −27,2%** | +29% · −6,4% | +20% | −9,4% | 1,5 | 171 d | −6,1% | +15% | 0,11 |
> | 4028 | BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN | **+149% · −59,5%** | +61% · −23,3% | +37% | −8,6% | 2,3 | 95 d | −18,3% | +16% | 0,51 |
> | 4029 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+192% · −49,3%** | +45% · −10,4% | +27% | −9,3% | 1,8 | 87 d | −11,9% | +21% | 0,17 |
> | 4030 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN | **+109% · −41,3%** | +45% · −14,9% | +30% | −18,9% | 1,9 | 98 d | −10,5% | +23% | 0,41 |
> | 4031 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM | **+184% · −58,3%** | +47% · −12,6% | +30% | −10,2% | 2,4 | 120 d | −11,1% | +14% | 0,40 |
> | 4032 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+191% · −58,5%** | +51% · −13,3% | +31% | −10,1% | 2,4 | 111 d | −12,7% | +19% | 0,24 |
> | 4033 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+48% · −26,7%** | +21% · −6,3% | +18% | −8,3% | 0,9 | 210 d | −5,1% | +14% | 0,04 |
> | 4034 | Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+146% · −32,1%** | +51% · −9,4% | +30% | −5,0% | 2,0 | 92 d | −11,9% | +23% | 0,02 |
> | 4035 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+208% · −59,0%** | +52% · −13,7% | +32% | −11,4% | 1,3 | 77 d | −12,1% | +25% | 0,29 |
> | 4036 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+220% · −40,4%** | +56% · −8,3% | +33% | −4,7% | 2,1 | 105 d | −10,9% | +22% | 0,05 |
> | 4037 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+120% · −32,3%** | +39% · −8,0% | +26% | −6,6% | 1,2 | 130 d | −6,3% | +19% | 0,02 |
> | 4038 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + MACD ·TEN | **+196% · −57,5%** | +57% · −15,6% | +35% | −7,7% | 2,1 | 122 d | −9,1% | +26% | 0,37 |
> | 4039 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+289% · −48,4%** | +57% · −8,2% | +34% | −5,6% | 2,4 | 128 d | −10,0% | +24% | 0,12 |
> | 4040 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+142% · −55,4%** | +40% · −11,8% | +29% | −10,1% | 1,6 | 85 d | −11,0% | +23% | 0,21 |
> | 4041 | VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+125% · −34,5%** | +32% · −6,8% | +23% | −10,0% | 1,3 | 171 d | −5,9% | +19% | 0,12 |
> | 4042 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+132% · −53,3%** | +42% · −14,3% | +27% | −5,8% | 2,0 | 128 d | −8,4% | +15% | 0,14 |
> | 4043 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + IFR ·TEN | **+234% · −49,4%** | +63% · −12,4% | +36% | −7,4% | 2,4 | 129 d | −9,6% | +19% | 0,39 |
> | 4044 | Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+143% · −30,4%** | +50% · −8,8% | +31% | −5,2% | 2,1 | 103 d | −11,4% | +24% | −0,07 |
> | 4045 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+135% · −39,6%** | +36% · −7,3% | +25% | −7,4% | 1,3 | 161 d | −6,0% | +16% | 0,12 |
> | 4046 | ADX ·ADX + Donchian ·TEN + GPS médias ·TEN | **+208% · −50,9%** | +77% · −18,6% | +39% | −6,8% | 2,8 | 127 d | −12,7% | +25% | 0,36 |
> | 4047 | VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+71% · −35,1%** | +32% · −12,3% | +24% | −14,0% | 1,1 | 108 d | −8,0% | +19% | 0,27 |
> | 4048 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+115% · −37,2%** | +33% · −7,4% | +25% | −9,0% | 1,2 | 106 d | −8,2% | +18% | 0,08 |
> | 4049 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+178% · −40,5%** | +51% · −10,2% | +31% | −6,2% | 2,0 | 122 d | −9,0% | +25% | 0,10 |
> | 4050 | Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+144% · −34,1%** | +51% · −11,7% | +31% | −6,7% | 2,3 | 115 d | −11,5% | +22% | 0,21 |

> [!example]- Combinações 4051 a 4080 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4051 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+134% · −35,0%** | +34% · −6,8% | +26% | −10,1% | 1,6 | 179 d | −6,3% | +18% | 0,09 |
> | 4052 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+156% · −48,8%** | +41% · −9,8% | +26% | −7,6% | 1,9 | 122 d | −8,5% | +19% | 0,13 |
> | 4053 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+186% · −38,9%** | +43% · −7,1% | +27% | −7,6% | 1,3 | 122 d | −7,3% | +16% | 0,16 |
> | 4054 | BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+142% · −54,3%** | +44% · −15,1% | +31% | −9,3% | 2,2 | 111 d | −10,9% | +18% | 0,34 |
> | 4055 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+90% · −45,7%** | +29% · −9,8% | +22% | −8,7% | 1,8 | 128 d | −7,8% | +11% | 0,08 |
> | 4056 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+127% · −37,3%** | +34% · −6,1% | +24% | −5,0% | 1,7 | 161 d | −6,8% | +16% | 0,07 |
> | 4057 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+208% · −68,4%** | +58% · −17,6% | +32% | −7,1% | 2,2 | 102 d | −12,6% | +18% | 0,35 |
> | 4058 | ADX ·ADX + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR | **+204% · −42,4%** | +55% · −9,4% | +32% | −5,4% | 2,1 | 158 d | −8,2% | +20% | 0,12 |
> | 4059 | VWAP ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+114% · −31,6%** | +42% · −10,7% | +27% | −13,8% | 1,3 | 106 d | −8,4% | +18% | 0,41 |
> | 4060 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN | **+237% · −62,3%** | +67% · −17,8% | +38% | −7,0% | 2,7 | 132 d | −11,0% | +22% | 0,43 |
> | 4061 | VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+61% · −29,0%** | +29% · −9,4% | +23% | −15,5% | 1,1 | 174 d | −5,7% | +19% | 0,28 |
> | 4062 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + MACD ·TEN | **+136% · −47,6%** | +44% · −12,5% | +30% | −13,7% | 1,8 | 91 d | −11,2% | +20% | 0,44 |
> | 4063 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+155% · −42,1%** | +38% · −6,7% | +27% | −6,0% | 1,8 | 161 d | −6,9% | +16% | 0,07 |
> | 4064 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+158% · −44,5%** | +38% · −9,5% | +25% | −10,5% | 1,3 | 95 d | −9,1% | +19% | 0,20 |
> | 4065 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Rompe 200 ·ROM + Onda ·OND | **+201% · −52,4%** | +49% · −11,1% | +31% | −7,2% | 1,7 | 108 d | −9,2% | +26% | 0,25 |
> | 4066 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+111% · −25,4%** | +30% · −4,1% | +23% | −5,3% | 1,2 | 205 d | −5,7% | +15% | 0,04 |
> | 4067 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+218% · −48,6%** | +48% · −9,5% | +29% | −7,7% | 2,2 | 111 d | −11,0% | +19% | 0,23 |
> | 4068 | VWAP ·TEN + Bollinger ·TEN + Tendência ·TEN | **+141% · −31,9%** | +50% · −9,8% | +32% | −8,7% | 2,3 | 137 d | −9,1% | +19% | 0,49 |
> | 4069 | Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+57% · −16,3%** | +27% · −4,3% | +22% | −5,2% | 0,8 | 279 d | −5,1% | +14% | −0,02 |
> | 4070 | Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Onda ·OND | **+204% · −47,9%** | +59% · −12,4% | +36% | −9,1% | 2,4 | 111 d | −12,5% | +27% | 0,38 |
> | 4071 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+228% · −61,3%** | +57% · −14,1% | +32% | −8,4% | 1,6 | 78 d | −14,9% | +23% | 0,31 |
> | 4072 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+104% · −34,0%** | +33% · −8,4% | +26% | −13,0% | 1,4 | 174 d | −6,2% | +18% | 0,13 |
> | 4073 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+217% · −60,3%** | +51% · −13,7% | +30% | −4,3% | 2,2 | 159 d | −8,5% | +18% | 0,05 |
> | 4074 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+94% · −33,3%** | +29% · −6,1% | +22% | −6,9% | 1,1 | 118 d | −7,7% | +17% | −0,00 |
> | 4075 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pullback ·PUL | **+184% · −39,7%** | +50% · −9,5% | +32% | −5,9% | 2,2 | 131 d | −8,7% | +16% | 0,17 |
> | 4076 | VWAP ·TEN + IFR ·TEN | **+81% · −20,7%** | +46% · −10,1% | +32% | −13,7% | 2,2 | 169 d | −8,2% | +16% | 0,34 |
> | 4077 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+205% · −46,4%** | +47% · −9,5% | +30% | −8,7% | 2,3 | 192 d | −8,3% | +22% | 0,16 |
> | 4078 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+202% · −56,1%** | +50% · −11,8% | +32% | −9,0% | 1,1 | 77 d | −11,7% | +18% | 0,25 |
> | 4079 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pullback ·PUL | **+206% · −64,3%** | +52% · −15,2% | +32% | −7,1% | 2,3 | 120 d | −10,9% | +22% | 0,21 |
> | 4080 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+144% · −35,9%** | +35% · −6,7% | +24% | −6,8% | 1,5 | 107 d | −8,8% | +19% | 0,10 |

> [!example]- Combinações 4081 a 4110 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4081 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+187% · −59,0%** | +48% · −13,3% | +29% | −4,6% | 2,3 | 122 d | −10,2% | +19% | 0,06 |
> | 4082 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+194% · −49,9%** | +49% · −10,4% | +31% | −9,5% | 2,1 | 122 d | −9,5% | +23% | 0,18 |
> | 4083 | VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+69% · −30,2%** | +27% · −7,3% | +22% | −11,8% | 0,9 | 171 d | −5,7% | +19% | 0,05 |
> | 4084 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN | **+198% · −76,1%** | +58% · −19,4% | +35% | −11,0% | 2,5 | 111 d | −15,9% | +15% | 0,53 |
> | 4085 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+138% · −40,8%** | +35% · −8,1% | +27% | −12,6% | 1,2 | 179 d | −6,0% | +18% | 0,13 |
> | 4086 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+149% · −52,0%** | +39% · −10,6% | +26% | −5,7% | 1,5 | 119 d | −8,2% | +21% | 0,07 |
> | 4087 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+173% · −56,3%** | +47% · −12,5% | +28% | −7,7% | 2,3 | 111 d | −12,5% | +15% | 0,15 |
> | 4088 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+115% · −31,8%** | +36% · −7,5% | +24% | −4,9% | 1,7 | 161 d | −6,9% | +15% | −0,01 |
> | 4089 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+173% · −58,9%** | +50% · −13,5% | +30% | −7,6% | 1,5 | 77 d | −13,9% | +23% | 0,12 |
> | 4090 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+214% · −66,6%** | +58% · −16,3% | +32% | −6,1% | 2,3 | 110 d | −12,1% | +20% | 0,19 |
> | 4091 | VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+138% · −57,6%** | +40% · −12,7% | +29% | −11,5% | 1,6 | 85 d | −11,5% | +20% | 0,34 |
> | 4092 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+213% · −58,1%** | +53% · −13,5% | +31% | −9,6% | 2,3 | 115 d | −11,8% | +18% | 0,32 |
> | 4093 | Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+182% · −64,9%** | +54% · −18,0% | +33% | −7,7% | 2,4 | 111 d | −13,4% | +13% | 0,42 |
> | 4094 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN + Onda ·OND | **+197% · −54,7%** | +52% · −12,0% | +33% | −11,5% | 2,2 | 102 d | −12,2% | +24% | 0,40 |
> | 4095 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+215% · −47,1%** | +48% · −9,7% | +28% | −7,0% | 2,0 | 122 d | −9,1% | +21% | 0,19 |
> | 4096 | ADX ·ADX + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+145% · −39,1%** | +44% · −9,4% | +30% | −8,5% | 1,2 | 122 d | −7,2% | +20% | 0,15 |
> | 4097 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+55% · −23,1%** | +26% · −7,3% | +21% | −9,8% | 1,5 | 210 d | −6,1% | +12% | −0,00 |
> | 4098 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+170% · −59,8%** | +49% · −13,9% | +30% | −7,7% | 1,5 | 78 d | −13,8% | +23% | 0,13 |
> | 4099 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+193% · −43,3%** | +43% · −8,3% | +26% | −5,3% | 2,1 | 111 d | −10,8% | +15% | 0,10 |
> | 4100 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+203% · −43,4%** | +53% · −8,5% | +31% | −4,4% | 2,3 | 159 d | −8,9% | +19% | −0,03 |
> | 4101 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+108% · −42,3%** | +31% · −8,9% | +23% | −9,3% | 1,2 | 120 d | −7,6% | +18% | 0,05 |
> | 4102 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+219% · −69,1%** | +55% · −17,0% | +35% | −10,3% | 1,8 | 96 d | −10,6% | +27% | 0,33 |
> | 4103 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+124% · −30,7%** | +32% · −5,7% | +23% | −8,5% | 1,2 | 171 d | −6,1% | +16% | 0,08 |
> | 4104 | VWAP ·TEN + Pôr do sol ·POR + Tendência ·TEN + Onda ·OND | **+126% · −34,4%** | +40% · −8,1% | +29% | −9,5% | 1,8 | 171 d | −7,1% | +23% | 0,19 |
> | 4105 | VWAP ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+133% · −31,8%** | +39% · −7,9% | +26% | −11,5% | 1,9 | 181 d | −7,3% | +19% | 0,17 |
> | 4106 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Quinta ·QUI ⚠️ | **+158% · −36,2%** | +46% · −8,5% | +30% | −5,6% | 1,8 | 130 d | −7,7% | +15% | 0,12 |
> | 4107 | BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+163% · −39,4%** | +48% · −9,6% | +33% | −10,6% | 1,9 | 108 d | −10,0% | +24% | 0,32 |
> | 4108 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+128% · −37,1%** | +36% · −6,5% | +25% | −8,2% | 1,2 | 130 d | −6,6% | +17% | 0,07 |
> | 4109 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+263% · −60,4%** | +57% · −13,6% | +33% | −5,0% | 2,4 | 128 d | −10,2% | +21% | 0,17 |
> | 4110 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN + Onda ·OND | **+265% · −63,6%** | +60% · −14,0% | +33% | −7,0% | 2,0 | 97 d | −12,0% | +26% | 0,30 |

> [!example]- Combinações 4111 a 4140 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4111 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+148% · −35,2%** | +43% · −8,1% | +26% | −6,1% | 1,5 | 131 d | −6,9% | +13% | 0,17 |
> | 4112 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+111% · −51,4%** | +35% · −10,8% | +24% | −9,9% | 1,6 | 86 d | −11,2% | +15% | 0,07 |
> | 4113 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+166% · −37,3%** | +38% · −7,6% | +26% | −10,6% | 1,3 | 177 d | −6,2% | +18% | 0,14 |
> | 4114 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+157% · −42,5%** | +41% · −7,6% | +27% | −6,7% | 1,9 | 111 d | −9,7% | +23% | 0,03 |
> | 4115 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+268% · −62,6%** | +58% · −14,4% | +36% | −8,3% | 2,7 | 181 d | −10,3% | +23% | 0,41 |
> | 4116 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+153% · −54,9%** | +47% · −15,7% | +32% | −11,4% | 1,8 | 95 d | −11,2% | +18% | 0,40 |
> | 4117 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+70% · −25,9%** | +26% · −5,7% | +22% | −9,9% | 1,0 | 213 d | −5,5% | +14% | 0,09 |
> | 4118 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+145% · −38,4%** | +37% · −6,9% | +25% | −6,4% | 1,3 | 130 d | −6,7% | +17% | 0,11 |
> | 4119 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+180% · −50,3%** | +46% · −10,2% | +29% | −9,2% | 1,9 | 122 d | −8,8% | +22% | 0,18 |
> | 4120 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+189% · −58,5%** | +48% · −13,0% | +28% | −4,3% | 2,1 | 128 d | −9,0% | +18% | 0,11 |
> | 4121 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+111% · −48,8%** | +33% · −10,3% | +25% | −11,6% | 1,8 | 120 d | −8,9% | +14% | 0,21 |
> | 4122 | Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+58% · −15,7%** | +28% · −4,6% | +22% | −7,2% | 1,1 | 231 d | −5,6% | +15% | 0,02 |
> | 4123 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+117% · −39,1%** | +39% · −10,3% | +27% | −13,3% | 1,7 | 95 d | −10,5% | +24% | 0,10 |
> | 4124 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+149% · −53,2%** | +39% · −10,6% | +26% | −4,9% | 1,6 | 127 d | −7,6% | +20% | 0,05 |
> | 4125 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+158% · −47,7%** | +42% · −9,4% | +26% | −7,6% | 1,8 | 122 d | −8,6% | +20% | 0,12 |
> | 4126 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+168% · −61,1%** | +50% · −14,6% | +30% | −9,0% | 1,5 | 78 d | −14,3% | +24% | 0,26 |
> | 4127 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+233% · −58,1%** | +54% · −12,8% | +31% | −4,9% | 2,0 | 120 d | −10,0% | +22% | 0,14 |
> | 4128 | ADX ·ADX + GPS médias ·TEN + Onda ·OND | **+155% · −47,1%** | +62% · −16,7% | +36% | −8,7% | 1,5 | 77 d | −15,6% | +25% | 0,24 |
> | 4129 | ADX ·ADX + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+84% · −30,0%** | +37% · −9,5% | +24% | −6,7% | 1,2 | 131 d | −6,6% | +18% | 0,00 |
> | 4130 | VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+88% · −27,3%** | +30% · −6,3% | +20% | −9,5% | 1,3 | 171 d | −6,3% | +16% | 0,10 |
> | 4131 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+173% · −42,1%** | +42% · −8,0% | +28% | −8,5% | 1,3 | 130 d | −6,8% | +17% | 0,16 |
> | 4132 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+147% · −36,1%** | +44% · −8,5% | +30% | −7,5% | 1,1 | 130 d | −6,6% | +19% | 0,07 |
> | 4133 | VWAP ·TEN + Donchian ·TEN + Tendência ·TEN | **+162% · −52,4%** | +60% · −16,3% | +37% | −9,5% | 2,8 | 128 d | −13,4% | +17% | 0,59 |
> | 4134 | VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+84% · −27,1%** | +30% · −6,2% | +24% | −10,2% | 1,5 | 192 d | −6,3% | +17% | 0,01 |
> | 4135 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN + Onda ·OND | **+165% · −65,8%** | +50% · −16,0% | +33% | −12,6% | 1,8 | 83 d | −14,7% | +23% | 0,41 |
> | 4136 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+159% · −44,4%** | +41% · −8,3% | +26% | −6,2% | 1,9 | 130 d | −8,0% | +19% | 0,06 |
> | 4137 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+194% · −57,7%** | +51% · −12,9% | +31% | −10,1% | 2,3 | 111 d | −13,0% | +20% | 0,21 |
> | 4138 | Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+208% · −61,5%** | +52% · −14,1% | +33% | −8,4% | 2,2 | 111 d | −12,0% | +22% | 0,35 |
> | 4139 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+144% · −32,6%** | +41% · −7,7% | +26% | −6,0% | 1,6 | 120 d | −8,4% | +17% | 0,09 |
> | 4140 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Tendência ·TEN | **+204% · −64,4%** | +60% · −19,7% | +37% | −9,3% | 2,4 | 111 d | −14,0% | +19% | 0,56 |

> [!example]- Combinações 4141 a 4170 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4141 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+121% · −33,9%** | +38% · −8,4% | +27% | −9,4% | 1,5 | 124 d | −7,6% | +18% | 0,06 |
> | 4142 | BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+149% · −48,3%** | +55% · −17,3% | +36% | −7,8% | 2,2 | 115 d | −11,6% | +20% | 0,29 |
> | 4143 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+204% · −50,2%** | +47% · −9,6% | +29% | −6,2% | 2,1 | 159 d | −8,4% | +17% | 0,20 |
> | 4144 | VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+86% · −30,2%** | +30% · −6,3% | +24% | −10,4% | 1,3 | 211 d | −6,0% | +16% | 0,06 |
> | 4145 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+234% · −60,0%** | +57% · −12,8% | +34% | −12,0% | 2,3 | 115 d | −12,3% | +23% | 0,38 |
> | 4146 | MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+81% · −22,5%** | +35% · −6,9% | +27% | −11,4% | 1,2 | 188 d | −6,0% | +17% | 0,17 |
> | 4147 | ADX ·ADX + VWAP ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+184% · −41,4%** | +43% · −7,7% | +27% | −9,0% | 1,4 | 122 d | −7,7% | +19% | 0,22 |
> | 4148 | ADX ·ADX + Donchian ·TEN + Rompe 200 ·ROM | **+161% · −38,4%** | +59% · −12,4% | +32% | −6,2% | 2,1 | 128 d | −9,4% | +21% | 0,18 |
> | 4149 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + MACD ·TEN + Onda ·OND | **+224% · −59,0%** | +54% · −12,1% | +34% | −8,4% | 1,7 | 108 d | −9,4% | +26% | 0,31 |
> | 4150 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+151% · −43,6%** | +41% · −8,4% | +28% | −11,0% | 1,2 | 122 d | −7,4% | +19% | 0,23 |
> | 4151 | VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+136% · −46,3%** | +45% · −12,8% | +30% | −16,8% | 1,7 | 94 d | −11,1% | +26% | 0,33 |
> | 4152 | BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+125% · −40,1%** | +40% · −9,8% | +29% | −10,2% | 1,6 | 102 d | −9,8% | +23% | 0,12 |
> | 4153 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+140% · −29,5%** | +34% · −5,0% | +26% | −7,1% | 1,2 | 202 d | −6,0% | +15% | 0,05 |
> | 4154 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+114% · −58,8%** | +39% · −15,9% | +28% | −8,5% | 1,8 | 95 d | −11,7% | +13% | 0,22 |
> | 4155 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+175% · −41,9%** | +50% · −10,9% | +32% | −14,2% | 1,6 | 90 d | −11,5% | +22% | 0,33 |
> | 4156 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+252% · −44,3%** | +61% · −8,5% | +35% | −5,1% | 2,5 | 128 d | −11,1% | +23% | 0,08 |
> | 4157 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+151% · −46,8%** | +46% · −12,4% | +26% | −7,9% | 1,8 | 87 d | −13,5% | +16% | 0,15 |
> | 4158 | BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+140% · −51,2%** | +47% · −14,0% | +30% | −10,2% | 1,8 | 86 d | −14,4% | +23% | 0,18 |
> | 4159 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+185% · −58,7%** | +59% · −17,4% | +34% | −8,4% | 1,4 | 77 d | −16,3% | +25% | 0,35 |
> | 4160 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+157% · −61,1%** | +45% · −14,0% | +32% | −13,0% | 1,6 | 85 d | −12,0% | +26% | 0,43 |
> | 4161 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+167% · −39,4%** | +40% · −7,6% | +27% | −8,4% | 1,4 | 98 d | −9,6% | +17% | 0,14 |
> | 4162 | ADX ·ADX + BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+198% · −65,0%** | +50% · −15,6% | +33% | −9,1% | 1,8 | 101 d | −10,5% | +26% | 0,25 |
> | 4163 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Bollinger ·TEN | **+236% · −59,9%** | +53% · −12,7% | +31% | −7,5% | 2,0 | 122 d | −9,4% | +21% | 0,39 |
> | 4164 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+217% · −47,9%** | +48% · −9,5% | +29% | −7,4% | 1,9 | 95 d | −11,9% | +24% | 0,12 |
> | 4165 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+132% · −31,2%** | +40% · −7,0% | +26% | −3,5% | 1,3 | 130 d | −7,0% | +17% | 0,04 |
> | 4166 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM + Onda ·OND | **+194% · −50,7%** | +49% · −9,0% | +30% | −9,5% | 1,7 | 128 d | −8,0% | +20% | 0,25 |
> | 4167 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pullback ·PUL | **+232% · −54,2%** | +52% · −10,4% | +32% | −7,3% | 2,1 | 159 d | −8,6% | +18% | 0,23 |
> | 4168 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+185% · −58,9%** | +51% · −12,3% | +31% | −9,4% | 2,0 | 95 d | −13,6% | +24% | 0,16 |
> | 4169 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Tendência ·TEN | **+232% · −72,2%** | +69% · −24,2% | +39% | −9,1% | 2,7 | 129 d | −12,9% | +19% | 0,46 |
> | 4170 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+168% · −51,2%** | +44% · −11,1% | +29% | −9,6% | 1,5 | 83 d | −12,5% | +19% | 0,09 |

> [!example]- Combinações 4171 a 4200 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4171 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+106% · −46,1%** | +38% · −11,9% | +24% | −7,8% | 1,7 | 87 d | −12,3% | +14% | 0,07 |
> | 4172 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+149% · −41,7%** | +39% · −6,5% | +27% | −6,8% | 1,5 | 131 d | −7,2% | +16% | 0,04 |
> | 4173 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+115% · −30,5%** | +31% · −4,9% | +21% | −4,0% | 1,6 | 133 d | −7,4% | +15% | 0,03 |
> | 4174 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+187% · −59,7%** | +47% · −13,6% | +28% | −4,5% | 2,2 | 189 d | −8,6% | +17% | 0,15 |
> | 4175 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+147% · −61,0%** | +51% · −18,4% | +30% | −7,4% | 1,6 | 82 d | −15,2% | +18% | 0,32 |
> | 4176 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+189% · −61,0%** | +51% · −14,4% | +31% | −10,9% | 2,3 | 111 d | −13,5% | +18% | 0,37 |
> | 4177 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+85% · −36,5%** | +31% · −8,4% | +23% | −7,7% | 1,3 | 111 d | −8,7% | +16% | 0,07 |
> | 4178 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+152% · −44,3%** | +40% · −7,8% | +28% | −9,5% | 1,2 | 130 d | −6,9% | +17% | 0,13 |
> | 4179 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+208% · −44,7%** | +47% · −9,5% | +30% | −8,9% | 2,3 | 190 d | −8,7% | +23% | 0,17 |
> | 4180 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+191% · −58,2%** | +47% · −12,9% | +28% | −4,3% | 1,9 | 158 d | −8,1% | +19% | 0,06 |
> | 4181 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Onda ·OND | **+215% · −56,3%** | +53% · −10,9% | +33% | −10,8% | 1,7 | 128 d | −8,1% | +20% | 0,34 |
> | 4182 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+218% · −47,9%** | +49% · −10,0% | +28% | −7,0% | 1,9 | 122 d | −9,2% | +20% | 0,18 |
> | 4183 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+171% · −68,9%** | +47% · −17,6% | +30% | −8,3% | 1,9 | 120 d | −9,9% | +16% | 0,34 |
> | 4184 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN | **+168% · −63,0%** | +57% · −18,8% | +33% | −9,7% | 1,6 | 82 d | −15,5% | +24% | 0,39 |
> | 4185 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+182% · −49,3%** | +46% · −9,8% | +29% | −9,2% | 1,8 | 122 d | −8,9% | +21% | 0,18 |
> | 4186 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+151% · −49,9%** | +43% · −10,3% | +29% | −10,5% | 1,6 | 86 d | −12,1% | +21% | 0,13 |
> | 4187 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+206% · −64,0%** | +56% · −15,7% | +33% | −9,2% | 1,3 | 77 d | −15,3% | +21% | 0,29 |
> | 4188 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+141% · −31,1%** | +35% · −5,2% | +26% | −8,2% | 1,3 | 192 d | −6,2% | +15% | 0,12 |
> | 4189 | VWAP ·TEN + BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN + Onda ·OND | **+194% · −57,4%** | +47% · −12,4% | +31% | −11,0% | 1,7 | 85 d | −12,8% | +23% | 0,39 |
> | 4190 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+106% · −34,4%** | +34% · −8,5% | +26% | −13,2% | 1,2 | 157 d | −6,6% | +17% | 0,20 |
> | 4191 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+114% · −37,3%** | +32% · −7,5% | +24% | −11,3% | 1,1 | 176 d | −6,2% | +18% | 0,15 |
> | 4192 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+64% · −15,3%** | +29% · −3,6% | +22% | −3,1% | 1,2 | 181 d | −6,2% | +15% | 0,03 |
> | 4193 | VWAP ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+109% · −34,0%** | +36% · −8,6% | +28% | −13,9% | 1,7 | 183 d | −7,0% | +19% | 0,19 |
> | 4194 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+227% · −65,0%** | +56% · −15,5% | +36% | −9,6% | 2,2 | 111 d | −12,5% | +27% | 0,44 |
> | 4195 | VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+70% · −30,4%** | +27% · −7,4% | +22% | −11,9% | 0,8 | 179 d | −5,9% | +18% | 0,10 |
> | 4196 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+160% · −55,6%** | +53% · −15,8% | +30% | −8,8% | 2,4 | 111 d | −14,9% | +15% | 0,19 |
> | 4197 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+200% · −62,1%** | +52% · −13,9% | +31% | −6,2% | 1,8 | 110 d | −10,4% | +25% | 0,13 |
> | 4198 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+221% · −47,0%** | +48% · −9,3% | +28% | −7,7% | 2,1 | 111 d | −11,3% | +20% | 0,20 |
> | 4199 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+124% · −46,6%** | +35% · −8,9% | +23% | −4,7% | 1,5 | 130 d | −7,4% | +18% | 0,02 |
> | 4200 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+130% · −38,9%** | +36% · −6,6% | +25% | −8,1% | 1,1 | 131 d | −6,7% | +17% | 0,09 |

> [!example]- Combinações 4201 a 4230 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4201 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Tendência ·TEN | **+229% · −61,6%** | +64% · −18,0% | +38% | −8,8% | 2,5 | 159 d | −10,5% | +21% | 0,44 |
> | 4202 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+130% · −49,3%** | +39% · −10,1% | +26% | −9,6% | 1,6 | 86 d | −12,1% | +22% | 0,11 |
> | 4203 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+134% · −33,5%** | +40% · −7,9% | +26% | −4,3% | 1,3 | 130 d | −7,1% | +20% | 0,07 |
> | 4204 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+161% · −52,3%** | +47% · −13,6% | +27% | −5,2% | 1,6 | 97 d | −10,4% | +20% | 0,16 |
> | 4205 | ADX ·ADX + Tendência ·TEN | **+139% · −45,8%** | +73% · −24,1% | +44% | −12,3% | 2,6 | 131 d | −11,7% | +29% | 0,28 |
> | 4206 | VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+91% · −37,1%** | +32% · −9,6% | +25% | −15,4% | 1,1 | 183 d | −6,1% | +21% | 0,26 |
> | 4207 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+229% · −56,7%** | +54% · −12,4% | +30% | −8,6% | 2,3 | 111 d | −14,3% | +15% | 0,32 |
> | 4208 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+96% · −36,3%** | +33% · −9,3% | +23% | −6,3% | 1,4 | 124 d | −7,7% | +17% | 0,03 |
> | 4209 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+168% · −37,4%** | +38% · −7,6% | +26% | −10,8% | 1,3 | 179 d | −6,4% | +18% | 0,20 |
> | 4210 | VWAP ·TEN + BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN | **+164% · −56,8%** | +48% · −16,0% | +30% | −9,7% | 1,8 | 85 d | −14,4% | +15% | 0,49 |
> | 4211 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+180% · −46,5%** | +44% · −8,8% | +27% | −6,2% | 1,8 | 159 d | −7,7% | +18% | 0,13 |
> | 4212 | VWAP ·TEN + Donchian ·TEN + Onda ·OND | **+123% · −35,3%** | +50% · −12,2% | +31% | −16,0% | 1,7 | 95 d | −11,0% | +20% | 0,38 |
> | 4213 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+141% · −35,8%** | +35% · −6,4% | +24% | −6,2% | 1,4 | 119 d | −8,5% | +16% | 0,02 |
> | 4214 | ADX ·ADX + Pullback ·PUL + Rompe 200 ·ROM | **+104% · −29,8%** | +42% · −9,6% | +27% | −6,3% | 1,8 | 161 d | −7,7% | +19% | 0,09 |
> | 4215 | VWAP ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+94% · −29,7%** | +39% · −9,9% | +29% | −7,3% | 2,0 | 210 d | −8,0% | +18% | 0,19 |
> | 4216 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+109% · −36,0%** | +31% · −5,7% | +22% | −4,9% | 1,1 | 161 d | −6,4% | +14% | 0,04 |
> | 4217 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+211% · −45,7%** | +47% · −9,0% | +30% | −10,5% | 1,4 | 122 d | −8,0% | +19% | 0,32 |
> | 4218 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+113% · −44,5%** | +33% · −8,8% | +24% | −10,3% | 1,8 | 128 d | −8,4% | +16% | 0,09 |
> | 4219 | BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+100% · −38,8%** | +35% · −9,5% | +25% | −8,6% | 1,6 | 106 d | −9,7% | +20% | 0,16 |
> | 4220 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+164% · −37,4%** | +46% · −8,9% | +30% | −6,0% | 1,3 | 130 d | −7,2% | +20% | 0,12 |
> | 4221 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+171% · −51,8%** | +45% · −11,3% | +29% | −9,5% | 1,5 | 83 d | −12,6% | +19% | 0,12 |
> | 4222 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+228% · −56,0%** | +52% · −13,1% | +31% | −10,4% | 1,6 | 83 d | −13,6% | +19% | 0,28 |
> | 4223 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+242% · −62,8%** | +58% · −14,2% | +33% | −10,2% | 2,0 | 95 d | −15,4% | +25% | 0,33 |
> | 4224 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN | **+124% · −42,0%** | +39% · −10,3% | +25% | −10,6% | 1,7 | 91 d | −12,1% | +12% | 0,23 |
> | 4225 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+183% · −53,2%** | +45% · −11,6% | +28% | −9,0% | 1,6 | 86 d | −12,6% | +21% | 0,12 |
> | 4226 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+147% · −33,6%** | +41% · −8,0% | +25% | −6,3% | 1,5 | 120 d | −8,5% | +16% | 0,09 |
> | 4227 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+128% · −47,6%** | +43% · −12,4% | +28% | −10,7% | 1,7 | 87 d | −13,0% | +21% | 0,12 |
> | 4228 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+104% · −47,3%** | +37% · −12,4% | +24% | −7,9% | 1,8 | 95 d | −11,9% | +13% | 0,12 |
> | 4229 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN | **+239% · −67,2%** | +55% · −16,1% | +33% | −8,9% | 2,3 | 111 d | −14,2% | +15% | 0,50 |
> | 4230 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR | **+178% · −57,4%** | +46% · −12,3% | +29% | −6,7% | 1,8 | 130 d | −8,2% | +18% | 0,18 |

> [!example]- Combinações 4231 a 4260 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4231 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+140% · −40,4%** | +36% · −8,2% | +27% | −12,8% | 1,1 | 179 d | −6,3% | +18% | 0,20 |
> | 4232 | MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+80% · −23,8%** | +34% · −6,3% | +27% | −8,9% | 0,8 | 255 d | −5,7% | +15% | −0,02 |
> | 4233 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+177% · −73,0%** | +48% · −16,3% | +31% | −9,1% | 2,2 | 111 d | −12,9% | +13% | 0,45 |
> | 4234 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+134% · −37,8%** | +36% · −6,7% | +25% | −6,0% | 1,2 | 161 d | −6,5% | +14% | 0,10 |
> | 4235 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+74% · −40,6%** | +26% · −8,5% | +20% | −8,4% | 1,1 | 120 d | −8,1% | +13% | 0,05 |
> | 4236 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+148% · −37,6%** | +38% · −6,7% | +25% | −6,6% | 1,2 | 130 d | −7,0% | +17% | 0,13 |
> | 4237 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+153% · −50,5%** | +43% · −10,5% | +29% | −10,4% | 1,6 | 86 d | −12,3% | +21% | 0,13 |
> | 4238 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+251% · −59,1%** | +58% · −12,8% | +33% | −11,0% | 2,3 | 111 d | −14,8% | +20% | 0,41 |
> | 4239 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+176% · −39,5%** | +48% · −8,6% | +28% | −4,4% | 1,9 | 158 d | −8,4% | +17% | 0,00 |
> | 4240 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+129% · −48,8%** | +36% · −10,9% | +26% | −14,0% | 1,2 | 111 d | −8,7% | +19% | 0,29 |
> | 4241 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+132% · −49,8%** | +39% · −10,3% | +26% | −9,6% | 1,5 | 86 d | −12,2% | +21% | 0,10 |
> | 4242 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Tendência ·TEN ⚠️ | **+173% · −68,5%** | +46% · −17,4% | +30% | −7,0% | 2,0 | 128 d | −9,3% | +18% | 0,23 |
> | 4243 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN | **+228% · −67,5%** | +59% · −16,3% | +34% | −8,4% | 2,3 | 128 d | −10,7% | +19% | 0,43 |
> | 4244 | VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM | **+103% · −42,2%** | +42% · −14,0% | +27% | −12,7% | 2,1 | 129 d | −9,5% | +13% | 0,34 |
> | 4245 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+220% · −39,0%** | +57% · −8,4% | +33% | −5,6% | 2,3 | 127 d | −11,0% | +24% | 0,20 |
> | 4246 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+175% · −41,0%** | +42% · −7,6% | +28% | −8,7% | 1,2 | 130 d | −7,1% | +16% | 0,20 |
> | 4247 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL + Onda ·OND | **+225% · −64,0%** | +55% · −14,7% | +33% | −6,2% | 2,2 | 128 d | −10,2% | +25% | 0,19 |
> | 4248 | ADX ·ADX + MACD ·TEN + Quinta ·QUI ⚠️ | **+110% · −34,1%** | +44% · −11,1% | +29% | −7,5% | 1,3 | 131 d | −7,1% | +18% | 0,05 |
> | 4249 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN | **+226% · −71,0%** | +62% · −18,0% | +35% | −9,2% | 2,3 | 114 d | −13,1% | +23% | 0,42 |
> | 4250 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+110% · −54,3%** | +35% · −11,9% | +24% | −11,1% | 1,5 | 87 d | −12,0% | +14% | 0,15 |
> | 4251 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN | **+235% · −62,3%** | +64% · −17,9% | +33% | −5,6% | 2,2 | 110 d | −13,4% | +20% | 0,37 |
> | 4252 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+156% · −52,9%** | +42% · −11,6% | +26% | −10,9% | 1,6 | 86 d | −13,1% | +15% | 0,22 |
> | 4253 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Tendência ·TEN | **+147% · −65,5%** | +52% · −20,5% | +33% | −12,1% | 2,0 | 95 d | −16,5% | +14% | 0,51 |
> | 4254 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+187% · −64,6%** | +54% · −14,6% | +33% | −10,2% | 1,5 | 82 d | −14,6% | +24% | 0,31 |
> | 4255 | MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+81% · −19,4%** | +45% · −9,3% | +32% | −13,7% | 1,3 | 117 d | −8,7% | +15% | 0,27 |
> | 4256 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+177% · −56,5%** | +46% · −13,6% | +28% | −14,7% | 1,6 | 83 d | −14,4% | +19% | 0,43 |
> | 4257 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+97% · −28,8%** | +32% · −6,6% | +23% | −4,8% | 1,3 | 142 d | −7,0% | +16% | −0,04 |
> | 4258 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+186% · −53,8%** | +45% · −11,8% | +28% | −8,9% | 1,6 | 86 d | −12,7% | +20% | 0,11 |
> | 4259 | ADX ·ADX + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+143% · −30,9%** | +52% · −9,5% | +33% | −5,6% | 2,0 | 130 d | −9,0% | +20% | 0,01 |
> | 4260 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+126% · −46,0%** | +36% · −10,2% | +26% | −12,8% | 0,9 | 85 d | −10,5% | +18% | 0,16 |

> [!example]- Combinações 4261 a 4290 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4261 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+217% · −49,2%** | +48% · −9,7% | +29% | −8,6% | 2,1 | 111 d | −11,8% | +18% | 0,31 |
> | 4262 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL + Onda ·OND | **+140% · −58,1%** | +43% · −13,3% | +28% | −13,4% | 1,6 | 86 d | −13,5% | +21% | 0,24 |
> | 4263 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+172% · −42,4%** | +40% · −6,0% | +27% | −5,3% | 1,5 | 161 d | −7,1% | +15% | 0,07 |
> | 4264 | ADX ·ADX + MACD ·TEN + Pullback ·PUL | **+132% · −36,3%** | +49% · −10,9% | +32% | −7,1% | 1,9 | 161 d | −8,2% | +20% | −0,00 |
> | 4265 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+164% · −51,3%** | +47% · −13,2% | +27% | −4,7% | 1,5 | 97 d | −10,5% | +21% | 0,11 |
> | 4266 | Bollinger ·TEN + Onda ·OND | **+88% · −18,0%** | +48% · −8,5% | +29% | −10,0% | 1,3 | 104 d | −9,5% | +12% | 0,16 |
> | 4267 | 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+57% · −21,1%** | +34% · −10,4% | +25% | −7,3% | 1,1 | 114 d | −8,5% | +16% | 0,20 |
> | 4268 | BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN + Onda ·OND | **+138% · −51,4%** | +44% · −13,7% | +31% | −9,4% | 1,8 | 101 d | −11,7% | +23% | 0,28 |
> | 4269 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+127% · −31,4%** | +37% · −7,6% | +24% | −10,0% | 1,4 | 173 d | −6,9% | +17% | 0,21 |
> | 4270 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+60% · −26,2%** | +29% · −8,3% | +23% | −13,8% | 1,0 | 213 d | −6,0% | +15% | 0,12 |
> | 4271 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+169% · −40,7%** | +40% · −7,6% | +27% | −8,5% | 1,3 | 98 d | −9,9% | +17% | 0,13 |
> | 4272 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+172% · −51,4%** | +44% · −11,6% | +28% | −11,1% | 1,8 | 111 d | −10,2% | +18% | 0,20 |
> | 4273 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+154% · −43,8%** | +41% · −7,5% | +28% | −9,7% | 1,1 | 131 d | −7,0% | +16% | 0,16 |
> | 4274 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR | **+212% · −63,2%** | +52% · −14,5% | +31% | −6,0% | 2,1 | 129 d | −9,5% | +23% | 0,18 |
> | 4275 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+204% · −51,1%** | +48% · −9,6% | +30% | −7,7% | 1,8 | 159 d | −8,1% | +18% | 0,21 |
> | 4276 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+265% · −52,4%** | +55% · −9,8% | +32% | −9,0% | 2,0 | 115 d | −11,2% | +24% | 0,28 |
> | 4277 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pullback ·PUL + Onda ·OND | **+221% · −55,1%** | +52% · −9,6% | +32% | −8,1% | 1,9 | 129 d | −8,8% | +19% | 0,20 |
> | 4278 | BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+71% · −31,5%** | +32% · −10,0% | +23% | −3,7% | 2,0 | 130 d | −9,2% | +12% | −0,14 |
> | 4279 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+154% · −39,7%** | +39% · −8,1% | +28% | −9,7% | 1,3 | 115 d | −8,7% | +15% | 0,08 |
> | 4280 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Pôr do sol ·POR | **+117% · −41,4%** | +39% · −10,2% | +27% | −9,7% | 1,8 | 120 d | −9,8% | +16% | 0,13 |
> | 4281 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+178% · −53,3%** | +46% · −11,3% | +29% | −10,1% | 1,8 | 122 d | −9,3% | +23% | 0,28 |
> | 4282 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+113% · −33,7%** | +31% · −6,3% | +24% | −9,8% | 0,9 | 187 d | −6,2% | +17% | 0,06 |
> | 4283 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN + Onda ·OND | **+224% · −55,6%** | +49% · −11,1% | +30% | −6,2% | 1,9 | 122 d | −9,7% | +24% | 0,15 |
> | 4284 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+147% · −38,4%** | +37% · −6,1% | +25% | −5,0% | 1,1 | 131 d | −7,0% | +14% | 0,08 |
> | 4285 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+126% · −48,7%** | +43% · −12,9% | +28% | −10,7% | 1,8 | 95 d | −12,5% | +19% | 0,15 |
> | 4286 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+81% · −34,6%** | +29% · −8,8% | +22% | −10,1% | 1,1 | 181 d | −6,5% | +18% | 0,13 |
> | 4287 | BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+182% · −55,1%** | +46% · −12,3% | +28% | −10,3% | 1,6 | 86 d | −13,2% | +22% | 0,25 |
> | 4288 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+156% · −47,3%** | +41% · −8,4% | +27% | −8,1% | 1,8 | 111 d | −10,6% | +22% | 0,11 |
> | 4289 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+116% · −55,0%** | +40% · −15,2% | +28% | −8,6% | 1,7 | 95 d | −12,1% | +14% | 0,22 |
> | 4290 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Onda ·OND | **+202% · −61,4%** | +52% · −13,3% | +31% | −6,2% | 1,8 | 110 d | −10,5% | +24% | 0,12 |

> [!example]- Combinações 4291 a 4320 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4291 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+86% · −24,5%** | +29% · −5,3% | +20% | −7,6% | 1,3 | 210 d | −6,5% | +13% | 0,10 |
> | 4292 | GPS médias ·TEN + Onda ·OND | **+97% · −31,7%** | +55% · −15,5% | +34% | −14,6% | 1,7 | 86 d | −16,7% | +20% | 0,21 |
> | 4293 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+129% · −40,3%** | +35% · −6,7% | +24% | −5,2% | 1,5 | 161 d | −7,2% | +15% | 0,06 |
> | 4294 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN | **+206% · −57,9%** | +63% · −16,6% | +35% | −10,1% | 2,3 | 128 d | −11,2% | +22% | 0,39 |
> | 4295 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+206% · −55,8%** | +50% · −12,5% | +31% | −11,3% | 1,6 | 86 d | −13,5% | +21% | 0,32 |
> | 4296 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+158% · −41,5%** | +39% · −6,8% | +27% | −6,1% | 1,6 | 161 d | −7,4% | +15% | 0,07 |
> | 4297 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Onda ·OND | **+133% · −44,5%** | +44% · −11,4% | +30% | −12,8% | 1,5 | 91 d | −11,9% | +24% | 0,34 |
> | 4298 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+166% · −52,4%** | +52% · −14,5% | +33% | −8,3% | 0,9 | 77 d | −14,1% | +17% | 0,24 |
> | 4299 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + IFR ·TEN | **+173% · −54,6%** | +54% · −15,4% | +33% | −11,9% | 2,3 | 120 d | −13,6% | +15% | 0,50 |
> | 4300 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+117% · −38,1%** | +33% · −7,4% | +25% | −9,1% | 1,1 | 114 d | −8,6% | +18% | 0,08 |
> | 4301 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+190% · −45,1%** | +45% · −7,9% | +30% | −9,0% | 1,5 | 130 d | −7,8% | +19% | 0,16 |
> | 4302 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Pôr do sol ·POR | **+130% · −55,7%** | +40% · −12,3% | +27% | −13,7% | 1,5 | 87 d | −12,6% | +19% | 0,21 |
> | 4303 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+121% · −40,3%** | +40% · −9,8% | +27% | −9,7% | 1,2 | 131 d | −7,2% | +17% | 0,24 |
> | 4304 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+88% · −32,7%** | +36% · −11,2% | +27% | −12,0% | 1,9 | 176 d | −8,2% | +17% | 0,10 |
> | 4305 | VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+40% · −26,7%** | +22% · −8,7% | +19% | −11,7% | 0,9 | 210 d | −6,1% | +13% | 0,03 |
> | 4306 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+162% · −50,4%** | +48% · −12,5% | +31% | −7,4% | 2,0 | 161 d | −8,5% | +19% | 0,18 |
> | 4307 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+149% · −44,9%** | +44% · −11,2% | +28% | −4,2% | 2,3 | 130 d | −10,3% | +13% | 0,01 |
> | 4308 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+163% · −54,6%** | +53% · −15,3% | +30% | −8,8% | 2,2 | 111 d | −15,4% | +16% | 0,15 |
> | 4309 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+196% · −51,7%** | +49% · −8,6% | +30% | −8,1% | 1,6 | 129 d | −8,1% | +18% | 0,12 |
> | 4310 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+127% · −44,7%** | +41% · −10,8% | +25% | −5,9% | 2,0 | 111 d | −11,6% | +13% | 0,08 |
> | 4311 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+214% · −47,1%** | +48% · −9,1% | +29% | −7,5% | 1,9 | 111 d | −11,5% | +23% | 0,13 |
> | 4312 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+254% · −62,8%** | +58% · −14,4% | +34% | −8,0% | 2,0 | 123 d | −10,1% | +26% | 0,33 |
> | 4313 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+161% · −46,8%** | +41% · −8,8% | +26% | −4,5% | 1,3 | 119 d | −8,8% | +20% | 0,09 |
> | 4314 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+232% · −59,2%** | +62% · −17,0% | +38% | −6,9% | 2,7 | 185 d | −11,9% | +20% | 0,39 |
> | 4315 | VWAP ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+113% · −35,0%** | +35% · −8,9% | +24% | −13,0% | 1,2 | 169 d | −6,8% | +20% | 0,23 |
> | 4316 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+241% · −50,3%** | +53% · −10,8% | +31% | −10,1% | 1,9 | 122 d | −9,9% | +23% | 0,38 |
> | 4317 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+216% · −56,9%** | +62% · −15,9% | +33% | −10,0% | 2,3 | 111 d | −17,6% | +16% | 0,41 |
> | 4318 | BB explosão ·TEN + MACD ·TEN + Tendência ·TEN + Onda ·OND | **+160% · −55,3%** | +49% · −15,3% | +34% | −11,0% | 1,8 | 101 d | −12,3% | +26% | 0,38 |
> | 4319 | BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+140% · −37,7%** | +35% · −7,4% | +24% | −7,7% | 1,4 | 119 d | −9,0% | +17% | 0,08 |
> | 4320 | ADX ·ADX + Donchian ·TEN + MACD ·TEN | **+187% · −45,9%** | +67% · −15,4% | +37% | −7,6% | 2,2 | 128 d | −10,3% | +23% | 0,35 |

> [!example]- Combinações 4321 a 4350 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4321 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+178% · −44,5%** | +49% · −11,0% | +28% | −5,8% | 2,1 | 111 d | −12,8% | +15% | 0,16 |
> | 4322 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+96% · −43,9%** | +34% · −12,0% | +24% | −12,1% | 1,0 | 95 d | −10,0% | +17% | 0,10 |
> | 4323 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+210% · −63,9%** | +52% · −15,0% | +31% | −6,0% | 2,2 | 189 d | −9,1% | +22% | 0,21 |
> | 4324 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+159% · −53,6%** | +42% · −11,8% | +25% | −11,1% | 1,6 | 87 d | −13,4% | +16% | 0,20 |
> | 4325 | IFR ·TEN + Onda ·OND | **+103% · −22,7%** | +55% · −11,1% | +37% | −9,2% | 1,9 | 127 d | −9,3% | +27% | 0,24 |
> | 4326 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL | **+161% · −63,5%** | +43% · −14,4% | +29% | −9,1% | 1,7 | 129 d | −8,6% | +19% | 0,22 |
> | 4327 | ADX ·ADX + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+161% · −51,2%** | +47% · −13,4% | +27% | −5,5% | 1,5 | 97 d | −11,0% | +18% | 0,23 |
> | 4328 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+177% · −49,6%** | +43% · −11,4% | +28% | −13,6% | 1,1 | 85 d | −11,5% | +18% | 0,33 |
> | 4329 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Onda ·OND | **+211% · −69,2%** | +62% · −16,9% | +35% | −9,0% | 2,0 | 102 d | −14,8% | +27% | 0,35 |
> | 4330 | GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+144% · −39,8%** | +54% · −13,7% | +34% | −12,8% | 1,6 | 89 d | −13,5% | +18% | 0,25 |
> | 4331 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+87% · −34,5%** | +31% · −7,8% | +23% | −7,6% | 1,2 | 111 d | −9,1% | +18% | 0,03 |
> | 4332 | VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+121% · −34,9%** | +38% · −8,8% | +28% | −13,0% | 1,6 | 179 d | −7,4% | +20% | 0,16 |
> | 4333 | VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+113% · −62,7%** | +40% · −16,7% | +28% | −10,4% | 1,7 | 95 d | −12,7% | +12% | 0,40 |
> | 4334 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+202% · −58,0%** | +61% · −15,4% | +35% | −11,2% | 2,2 | 115 d | −14,5% | +20% | 0,37 |
> | 4335 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+109% · −55,4%** | +35% · −12,4% | +24% | −10,9% | 1,6 | 95 d | −11,7% | +13% | 0,17 |
> | 4336 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+64% · −28,2%** | +26% · −6,5% | +19% | −4,3% | 1,3 | 137 d | −7,3% | +13% | −0,02 |
> | 4337 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+130% · −54,3%** | +38% · −11,9% | +25% | −9,8% | 1,9 | 120 d | −11,0% | +14% | 0,09 |
> | 4338 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+176% · −50,2%** | +45% · −11,2% | +29% | −11,3% | 1,8 | 111 d | −10,7% | +22% | 0,27 |
> | 4339 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+155% · −54,8%** | +42% · −12,3% | +26% | −12,0% | 1,6 | 87 d | −13,9% | +14% | 0,34 |
> | 4340 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+137% · −58,3%** | +39% · −13,2% | +26% | −7,7% | 1,7 | 129 d | −8,7% | +14% | 0,20 |
> | 4341 | BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+167% · −42,4%** | +40% · −8,5% | +27% | −9,9% | 1,3 | 98 d | −10,4% | +18% | 0,22 |
> | 4342 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Onda ·OND | **+158% · −61,4%** | +57% · −17,9% | +33% | −9,8% | 1,4 | 82 d | −17,6% | +24% | 0,32 |
> | 4343 | 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+100% · −24,5%** | +32% · −5,5% | +25% | −7,0% | 1,1 | 205 d | −6,5% | +14% | 0,03 |
> | 4344 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+231% · −58,7%** | +54% · −13,0% | +31% | −5,8% | 2,0 | 127 d | −10,1% | +21% | 0,26 |
> | 4345 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Tendência ·TEN | **+175% · −67,8%** | +47% · −16,8% | +30% | −7,1% | 1,9 | 129 d | −9,4% | +19% | 0,22 |
> | 4346 | VWAP ·TEN + IFR ·TEN + Onda ·OND | **+114% · −29,1%** | +45% · −9,1% | +32% | −12,7% | 1,6 | 182 d | −7,5% | +20% | 0,30 |
> | 4347 | VWAP ·TEN + BB explosão ·TEN + IFR ·TEN | **+105% · −44,0%** | +45% · −15,6% | +30% | −13,2% | 1,6 | 91 d | −13,7% | +14% | 0,43 |
> | 4348 | BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+145% · −35,3%** | +41% · −8,6% | +26% | −7,4% | 1,5 | 120 d | −9,2% | +18% | 0,21 |
> | 4349 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Tendência ·TEN | **+167% · −71,7%** | +55% · −20,8% | +34% | −10,3% | 2,2 | 111 d | −15,8% | +13% | 0,59 |
> | 4350 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN | **+189% · −57,8%** | +53% · −16,0% | +31% | −7,5% | 1,5 | 97 d | −11,4% | +23% | 0,36 |

> [!example]- Combinações 4351 a 4380 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4351 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + 1ª vela 80 ·VEL ⚠️ | **+218% · −56,8%** | +52% · −11,3% | +33% | −8,7% | 1,6 | 120 d | −9,6% | +22% | 0,33 |
> | 4352 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+187% · −52,6%** | +45% · −10,3% | +29% | −6,3% | 1,3 | 119 d | −9,1% | +20% | 0,12 |
> | 4353 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Bollinger ·TEN + Tendência ·TEN | **+232% · −69,7%** | +54% · −17,5% | +32% | −7,8% | 2,0 | 120 d | −11,2% | +19% | 0,43 |
> | 4354 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+182% · −48,4%** | +44% · −8,4% | +27% | −6,1% | 1,7 | 159 d | −8,0% | +17% | 0,12 |
> | 4355 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+95% · −40,8%** | +30% · −8,1% | +23% | −10,5% | 1,1 | 120 d | −8,6% | +17% | 0,10 |
> | 4356 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+183% · −59,7%** | +51% · −12,5% | +31% | −9,5% | 2,1 | 111 d | −13,3% | +23% | 0,16 |
> | 4357 | BB explosão ·TEN + Rompe 200 ·ROM + Tendência ·TEN | **+108% · −52,1%** | +44% · −18,8% | +30% | −8,9% | 2,1 | 111 d | −13,4% | +12% | 0,33 |
> | 4358 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+159% · −58,2%** | +53% · −17,0% | +30% | −9,9% | 2,2 | 114 d | −16,0% | +13% | 0,40 |
> | 4359 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Bollinger ·TEN | **+193% · −60,2%** | +46% · −13,0% | +28% | −7,1% | 1,8 | 128 d | −9,3% | +17% | 0,24 |
> | 4360 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+116% · −38,2%** | +32% · −7,3% | +22% | −7,8% | 1,2 | 108 d | −9,5% | +15% | 0,10 |
> | 4361 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+107% · −44,3%** | +33% · −8,8% | +25% | −10,7% | 1,5 | 120 d | −9,2% | +19% | 0,07 |
> | 4362 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+69% · −28,6%** | +27% · −6,1% | +22% | −10,0% | 0,6 | 222 d | −6,2% | +15% | 0,02 |
> | 4363 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+92% · −33,8%** | +32% · −8,4% | +25% | −13,8% | 0,8 | 211 d | −6,3% | +17% | 0,17 |
> | 4364 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+206% · −51,2%** | +47% · −8,9% | +29% | −4,8% | 2,0 | 159 d | −9,0% | +16% | 0,08 |
> | 4365 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+128% · −56,6%** | +39% · −12,6% | +27% | −13,5% | 1,6 | 95 d | −12,2% | +18% | 0,22 |
> | 4366 | VWAP ·TEN + BB explosão ·TEN + Tendência ·TEN + Onda ·OND | **+129% · −57,8%** | +45% · −16,5% | +32% | −13,1% | 1,5 | 85 d | −14,2% | +23% | 0,42 |
> | 4367 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+115% · −48,2%** | +38% · −13,7% | +27% | −12,2% | 1,6 | 120 d | −9,7% | +15% | 0,17 |
> | 4368 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+139% · −45,0%** | +36% · −9,6% | +25% | −11,5% | 1,3 | 98 d | −10,5% | +18% | 0,25 |
> | 4369 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Tendência ·TEN | **+195% · −70,7%** | +52% · −17,5% | +34% | −11,5% | 2,2 | 120 d | −13,4% | +18% | 0,56 |
> | 4370 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL | **+138% · −59,8%** | +46% · −15,2% | +29% | −11,0% | 2,2 | 119 d | −13,4% | +11% | 0,31 |
> | 4371 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+110% · −46,1%** | +34% · −10,2% | +26% | −13,4% | 0,9 | 95 d | −10,3% | +21% | 0,16 |
> | 4372 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN | **+178% · −60,0%** | +59% · −17,5% | +34% | −12,8% | 2,2 | 114 d | −16,6% | +20% | 0,48 |
> | 4373 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+178% · −49,9%** | +46% · −9,3% | +30% | −8,9% | 1,8 | 111 d | −11,1% | +26% | 0,17 |
> | 4374 | MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+81% · −21,7%** | +34% · −6,8% | +27% | −9,1% | 0,8 | 263 d | −6,3% | +15% | 0,07 |
> | 4375 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Onda ·OND | **+217% · −66,7%** | +57% · −15,5% | +34% | −8,7% | 1,8 | 110 d | −11,2% | +27% | 0,33 |
> | 4376 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+229% · −51,4%** | +51% · −11,5% | +30% | −12,1% | 1,9 | 111 d | −12,0% | +18% | 0,39 |
> | 4377 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+169% · −52,9%** | +43% · −12,1% | +28% | −10,9% | 1,9 | 124 d | −9,8% | +17% | 0,18 |
> | 4378 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+251% · −66,8%** | +64% · −15,8% | +36% | −8,1% | 2,1 | 114 d | −12,9% | +23% | 0,36 |
> | 4379 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + MACD ·TEN + Pôr do sol ·POR | **+206% · −50,7%** | +49% · −9,2% | +30% | −7,7% | 1,7 | 159 d | −8,2% | +17% | 0,21 |
> | 4380 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+130% · −40,3%** | +36% · −6,6% | +25% | −6,7% | 1,0 | 161 d | −6,9% | +14% | 0,04 |

> [!example]- Combinações 4381 a 4410 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4381 | ADX ·ADX + IFR ·TEN | **+134% · −29,5%** | +71% · −14,3% | +41% | −8,5% | 1,9 | 122 d | −10,2% | +20% | 0,38 |
> | 4382 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+165% · −46,6%** | +42% · −9,3% | +28% | −10,3% | 1,0 | 122 d | −8,1% | +20% | 0,23 |
> | 4383 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Tendência ·TEN | **+134% · −60,5%** | +45% · −17,8% | +32% | −12,9% | 1,7 | 95 d | −13,4% | +18% | 0,53 |
> | 4384 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL ⚠️ | **+206% · −40,7%** | +70% · −11,8% | +38% | −6,4% | 2,0 | 105 d | −14,4% | +24% | 0,24 |
> | 4385 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL | **+171% · −61,3%** | +55% · −18,0% | +32% | −5,8% | 2,2 | 120 d | −13,2% | +18% | 0,22 |
> | 4386 | ADX ·ADX + VWAP ·TEN + IFR ·TEN + Pôr do sol ·POR | **+160% · −38,1%** | +46% · −9,0% | +30% | −5,4% | 1,6 | 131 d | −8,3% | +14% | 0,13 |
> | 4387 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+145% · −56,2%** | +41% · −13,1% | +27% | −12,4% | 1,5 | 95 d | −11,9% | +18% | 0,16 |
> | 4388 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+109% · −42,6%** | +33% · −8,6% | +24% | −10,9% | 1,4 | 120 d | −9,2% | +20% | 0,08 |
> | 4389 | VWAP ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+91% · −33,5%** | +32% · −8,4% | +25% | −13,6% | 0,9 | 263 d | −6,4% | +18% | 0,11 |
> | 4390 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+90% · −43,3%** | +30% · −9,4% | +23% | −11,9% | 0,9 | 98 d | −10,0% | +19% | 0,11 |
> | 4391 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+128% · −59,8%** | +38% · −11,7% | +25% | −9,6% | 1,8 | 111 d | −11,1% | +12% | 0,20 |
> | 4392 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+263% · −56,5%** | +61% · −12,6% | +34% | −9,8% | 2,2 | 128 d | −11,1% | +25% | 0,34 |
> | 4393 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+190% · −51,7%** | +45% · −9,8% | +29% | −6,3% | 1,2 | 119 d | −9,1% | +20% | 0,13 |
> | 4394 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+80% · −26,9%** | +28% · −6,3% | +22% | −8,4% | 0,9 | 212 d | −6,4% | +15% | 0,05 |
> | 4395 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+157% · −64,1%** | +47% · −14,9% | +29% | −11,5% | 2,1 | 111 d | −14,1% | +14% | 0,25 |
> | 4396 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Tendência ·TEN | **+220% · −76,0%** | +59% · −21,2% | +35% | −8,4% | 2,4 | 129 d | −12,5% | +18% | 0,48 |
> | 4397 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR | **+150% · −47,5%** | +46% · −12,2% | +29% | −8,8% | 1,9 | 111 d | −12,3% | +19% | 0,17 |
> | 4398 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+187% · −59,4%** | +47% · −12,5% | +31% | −7,4% | 1,6 | 122 d | −9,3% | +25% | 0,14 |
> | 4399 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Onda ·OND | **+161% · −53,3%** | +43% · −10,8% | +28% | −6,4% | 1,6 | 122 d | −9,2% | +23% | 0,14 |
> | 4400 | VWAP ·TEN + MACD ·TEN + Bollinger ·TEN | **+102% · −32,6%** | +40% · −11,0% | +26% | −15,7% | 1,4 | 174 d | −7,4% | +17% | 0,49 |
> | 4401 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+124% · −45,8%** | +36% · −10,2% | +26% | −12,6% | 0,9 | 95 d | −10,4% | +18% | 0,11 |
> | 4402 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Tendência ·TEN + Onda ·OND | **+187% · −67,0%** | +53% · −16,4% | +34% | −11,3% | 2,1 | 111 d | −14,0% | +22% | 0,47 |
> | 4403 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+199% · −52,6%** | +46% · −10,1% | +28% | −5,8% | 1,3 | 101 d | −10,6% | +19% | 0,11 |
> | 4404 | BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+151% · −49,5%** | +46% · −13,5% | +27% | −9,0% | 1,7 | 95 d | −14,6% | +15% | 0,28 |
> | 4405 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL + Onda ·OND ⚠️ | **+162% · −54,0%** | +42% · −10,7% | +28% | −5,6% | 1,7 | 130 d | −8,6% | +23% | 0,03 |
> | 4406 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Onda ·OND | **+198% · −53,5%** | +49% · −8,4% | +30% | −8,1% | 1,5 | 129 d | −8,3% | +17% | 0,15 |
> | 4407 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+158% · −39,7%** | +46% · −9,4% | +30% | −6,3% | 1,0 | 122 d | −8,2% | +16% | 0,10 |
> | 4408 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN | **+198% · −68,4%** | +67% · −21,5% | +36% | −8,0% | 2,2 | 114 d | −15,6% | +20% | 0,46 |
> | 4409 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL | **+200% · −62,6%** | +58% · −18,7% | +33% | −5,6% | 2,3 | 159 d | −10,4% | +17% | 0,21 |
> | 4410 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+134% · −52,1%** | +42% · −13,8% | +27% | −5,5% | 1,9 | 161 d | −8,7% | +18% | −0,03 |

> [!example]- Combinações 4411 a 4440 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4411 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+152% · −54,5%** | +41% · −11,1% | +26% | −8,4% | 2,1 | 130 d | −10,4% | +13% | 0,12 |
> | 4412 | VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+41% · −25,9%** | +22% · −8,4% | +18% | −11,9% | 0,7 | 210 d | −6,5% | +14% | 0,04 |
> | 4413 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+228% · −45,6%** | +57% · −10,9% | +32% | −8,3% | 2,3 | 124 d | −12,3% | +20% | 0,31 |
> | 4414 | ADX ·ADX + Pullback ·PUL + Onda ·OND | **+127% · −34,2%** | +50% · −10,4% | +32% | −8,6% | 1,7 | 131 d | −8,6% | +20% | 0,05 |
> | 4415 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+180% · −43,2%** | +49% · −10,8% | +28% | −5,8% | 2,0 | 111 d | −13,3% | +16% | 0,11 |
> | 4416 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+236% · −56,8%** | +54% · −12,2% | +31% | −4,9% | 1,9 | 127 d | −10,3% | +23% | 0,14 |
> | 4417 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Bollinger ·TEN | **+176% · −50,6%** | +52% · −13,9% | +30% | −11,8% | 1,8 | 95 d | −15,2% | +21% | 0,39 |
> | 4418 | VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL ⚠️ | **+143% · −39,6%** | +52% · −14,1% | +32% | −14,6% | 1,8 | 102 d | −13,5% | +20% | 0,37 |
> | 4419 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+150% · −52,2%** | +43% · −11,2% | +29% | −11,7% | 1,6 | 95 d | −12,7% | +22% | 0,27 |
> | 4420 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Tendência ·TEN ⚠️ | **+214% · −67,7%** | +53% · −16,8% | +34% | −7,6% | 1,7 | 120 d | −10,3% | +22% | 0,37 |
> | 4421 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+129% · −35,4%** | +39% · −8,0% | +25% | −7,7% | 1,4 | 108 d | −10,4% | +20% | 0,17 |
> | 4422 | BB explosão ·TEN + IFR ·TEN + Onda ·OND | **+129% · −35,7%** | +51% · −11,7% | +34% | −10,2% | 1,7 | 101 d | −12,2% | +25% | 0,28 |
> | 4423 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+121% · −55,0%** | +39% · −12,1% | +27% | −13,1% | 1,3 | 86 d | −13,8% | +22% | 0,15 |
> | 4424 | VWAP ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+112% · −31,3%** | +35% · −7,7% | +24% | −11,1% | 1,2 | 183 d | −7,0% | +18% | 0,10 |
> | 4425 | BB explosão ·TEN + MACD ·TEN + Tendência ·TEN | **+131% · −54,6%** | +52% · −20,8% | +35% | −10,9% | 2,0 | 111 d | −14,2% | +20% | 0,50 |
> | 4426 | Donchian ·TEN + Rompe 200 ·ROM | **+93% · −26,3%** | +51% · −12,6% | +29% | −6,8% | 2,4 | 179 d | −11,1% | +14% | 0,25 |
> | 4427 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + GPS médias ·TEN + Onda ·OND | **+223% · −58,1%** | +59% · −12,8% | +34% | −10,8% | 2,2 | 128 d | −11,2% | +25% | 0,32 |
> | 4428 | VWAP ·TEN + Tendência ·TEN + Onda ·OND | **+114% · −33,6%** | +46% · −11,0% | +33% | −13,2% | 1,8 | 135 d | −8,8% | +26% | 0,40 |
> | 4429 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+99% · −35,4%** | +33% · −9,1% | +23% | −6,2% | 1,3 | 142 d | −7,7% | +17% | 0,04 |
> | 4430 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+141% · −45,3%** | +36% · −9,7% | +24% | −11,7% | 1,2 | 98 d | −10,8% | +19% | 0,23 |
> | 4431 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+114% · −40,0%** | +32% · −8,2% | +22% | −9,2% | 1,3 | 108 d | −10,0% | +13% | 0,16 |
> | 4432 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+191% · −48,3%** | +47% · −9,7% | +31% | −11,8% | 1,0 | 122 d | −8,4% | +20% | 0,30 |
> | 4433 | ADX ·ADX + Donchian ·TEN + Pullback ·PUL | **+186% · −41,7%** | +64% · −13,5% | +36% | −5,7% | 2,4 | 159 d | −11,3% | +21% | 0,07 |
> | 4434 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+222% · −64,0%** | +57% · −13,2% | +34% | −11,0% | 2,0 | 115 d | −13,8% | +28% | 0,32 |
> | 4435 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+79% · −44,9%** | +30% · −11,0% | +23% | −9,4% | 1,7 | 128 d | −9,2% | +10% | 0,05 |
> | 4436 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+173% · −50,7%** | +50% · −13,0% | +31% | −5,4% | 1,7 | 128 d | −9,3% | +22% | 0,10 |
> | 4437 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+164% · −57,8%** | +46% · −14,1% | +30% | −16,1% | 1,5 | 95 d | −12,5% | +22% | 0,38 |
> | 4438 | Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+177% · −45,5%** | +50% · −11,5% | +28% | −7,0% | 2,0 | 111 d | −13,9% | +14% | 0,28 |
> | 4439 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+195% · −63,7%** | +54% · −15,6% | +32% | −14,0% | 2,0 | 111 d | −13,8% | +18% | 0,41 |
> | 4440 | MACD ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+127% · −29,5%** | +38% · −6,4% | +28% | −9,6% | 1,1 | 202 d | −6,9% | +14% | 0,04 |

> [!example]- Combinações 4441 a 4470 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4441 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+123% · −55,5%** | +40% · −12,3% | +27% | −13,2% | 1,3 | 86 d | −13,9% | +23% | 0,16 |
> | 4442 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+102% · −52,6%** | +39% · −14,5% | +25% | −13,0% | 1,4 | 87 d | −14,8% | +14% | 0,16 |
> | 4443 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+197% · −51,7%** | +47% · −11,1% | +29% | −8,1% | 1,6 | 122 d | −9,5% | +22% | 0,14 |
> | 4444 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+144% · −59,4%** | +41% · −14,5% | +27% | −13,4% | 1,5 | 95 d | −12,4% | +17% | 0,32 |
> | 4445 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+165% · −45,0%** | +42% · −8,8% | +28% | −8,7% | 1,0 | 130 d | −7,7% | +18% | 0,10 |
> | 4446 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+129% · −40,4%** | +34% · −6,4% | +24% | −3,7% | 1,4 | 161 d | −7,8% | +13% | 0,02 |
> | 4447 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+170% · −60,3%** | +47% · −14,2% | +28% | −14,0% | 1,4 | 86 d | −14,9% | +23% | 0,35 |
> | 4448 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+255% · −53,9%** | +53% · −8,5% | +32% | −6,5% | 2,0 | 129 d | −10,3% | +19% | 0,18 |
> | 4449 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+93% · −45,0%** | +30% · −8,9% | +23% | −11,4% | 1,2 | 120 d | −9,1% | +15% | 0,16 |
> | 4450 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+159% · −61,7%** | +48% · −14,6% | +28% | −11,6% | 2,0 | 111 d | −14,5% | +15% | 0,24 |
> | 4451 | Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+212% · −51,8%** | +48% · −10,0% | +29% | −8,9% | 1,9 | 111 d | −12,4% | +22% | 0,25 |
> | 4452 | ADX ·ADX + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+196% · −52,4%** | +47% · −10,0% | +28% | −7,0% | 1,3 | 101 d | −11,0% | +20% | 0,20 |
> | 4453 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Tendência ·TEN | **+190% · −72,3%** | +51% · −18,9% | +33% | −9,5% | 2,0 | 128 d | −10,4% | +21% | 0,44 |
> | 4454 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+148% · −55,7%** | +42% · −12,0% | +28% | −12,0% | 1,7 | 111 d | −11,6% | +17% | 0,27 |
> | 4455 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+151% · −44,2%** | +39% · −6,5% | +27% | −6,9% | 1,4 | 161 d | −7,7% | +15% | 0,06 |
> | 4456 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+127% · −59,2%** | +40% · −13,7% | +27% | −14,5% | 1,5 | 95 d | −13,1% | +16% | 0,35 |
> | 4457 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+167% · −52,8%** | +45% · −11,7% | +29% | −10,9% | 1,5 | 95 d | −13,1% | +20% | 0,26 |
> | 4458 | ADX ·ADX + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+136% · −40,9%** | +53% · −14,4% | +31% | −6,0% | 2,0 | 122 d | −11,3% | +25% | 0,06 |
> | 4459 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+189% · −53,9%** | +49% · −12,0% | +32% | −12,8% | 1,5 | 95 d | −13,1% | +19% | 0,29 |
> | 4460 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + Onda ·OND | **+197% · −44,0%** | +55% · −9,3% | +32% | −5,6% | 1,8 | 131 d | −9,1% | +21% | 0,05 |
> | 4461 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+154% · −68,6%** | +48% · −16,0% | +29% | −12,5% | 2,0 | 111 d | −15,0% | +13% | 0,41 |
> | 4462 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+163% · −45,1%** | +41% · −8,9% | +26% | −4,4% | 1,2 | 122 d | −8,9% | +20% | 0,08 |
> | 4463 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+210% · −61,6%** | +55% · −14,3% | +30% | −12,6% | 2,0 | 111 d | −16,3% | +15% | 0,44 |
> | 4464 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+79% · −51,2%** | +31% · −12,8% | +23% | −11,3% | 1,6 | 120 d | −10,3% | +9% | 0,23 |
> | 4465 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+124% · −49,5%** | +36% · −11,2% | +26% | −14,1% | 0,9 | 95 d | −11,0% | +19% | 0,27 |
> | 4466 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+156% · −40,2%** | +45% · −7,8% | +30% | −7,2% | 1,5 | 131 d | −8,5% | +16% | 0,14 |
> | 4467 | VWAP ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+139% · −38,3%** | +41% · −10,0% | +28% | −14,8% | 1,2 | 181 d | −7,3% | +20% | 0,37 |
> | 4468 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+159% · −50,2%** | +41% · −11,4% | +27% | −14,4% | 1,1 | 90 d | −12,5% | +21% | 0,37 |
> | 4469 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+145% · −51,7%** | +40% · −12,0% | +29% | −15,6% | 1,0 | 95 d | −11,0% | +19% | 0,33 |
> | 4470 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+204% · −49,2%** | +47% · −9,8% | +30% | −9,8% | 2,0 | 192 d | −9,2% | +21% | 0,29 |

> [!example]- Combinações 4471 a 4500 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4471 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL + Onda ·OND | **+165% · −53,1%** | +42% · −10,2% | +28% | −5,7% | 1,6 | 130 d | −8,7% | +22% | 0,02 |
> | 4472 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+180% · −63,5%** | +51% · −13,4% | +31% | −10,8% | 2,0 | 114 d | −14,1% | +22% | 0,32 |
> | 4473 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+223% · −59,0%** | +51% · −12,4% | +31% | −8,1% | 1,3 | 101 d | −11,3% | +20% | 0,29 |
> | 4474 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+197% · −65,5%** | +56% · −13,7% | +34% | −12,1% | 2,0 | 114 d | −14,7% | +27% | 0,38 |
> | 4475 | VWAP ·TEN + GPS médias ·TEN | **+78% · −33,3%** | +47% · −17,4% | +29% | −20,0% | 1,7 | 98 d | −15,1% | +16% | 0,37 |
> | 4476 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+130% · −57,4%** | +38% · −11,5% | +25% | −9,7% | 1,7 | 111 d | −11,5% | +13% | 0,18 |
> | 4477 | MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+128% · −31,5%** | +38% · −7,0% | +28% | −10,8% | 1,2 | 192 d | −7,3% | +15% | 0,21 |
> | 4478 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN | **+170% · −65,9%** | +52% · −16,3% | +31% | −15,2% | 2,0 | 111 d | −15,5% | +18% | 0,49 |
> | 4479 | ADX ·ADX + Pôr do sol ·POR + Rompe 200 ·ROM | **+86% · −28,9%** | +37% · −9,4% | +24% | −5,9% | 1,0 | 161 d | −7,3% | +17% | −0,05 |
> | 4480 | VWAP ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+77% · −27,9%** | +33% · −9,2% | +21% | −13,3% | 1,3 | 171 d | −7,6% | +15% | 0,25 |
> | 4481 | Donchian ·TEN + 1ª vela 80 ·VEL ⚠️ | **+132% · −30,0%** | +67% · −14,3% | +37% | −8,4% | 2,1 | 112 d | −16,6% | +27% | 0,18 |
> | 4482 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+112% · −46,3%** | +34% · −10,2% | +26% | −13,6% | 0,9 | 98 d | −10,6% | +20% | 0,18 |
> | 4483 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+199% · −52,3%** | +48% · −11,2% | +29% | −8,2% | 1,5 | 122 d | −9,6% | +21% | 0,17 |
> | 4484 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN | **+204% · −49,9%** | +55% · −13,0% | +31% | −10,0% | 1,9 | 111 d | −14,5% | +20% | 0,43 |
> | 4485 | VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+40% · −22,5%** | +22% · −5,4% | +18% | −9,4% | 0,5 | 210 d | −6,7% | +10% | 0,02 |
> | 4486 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+138% · −47,2%** | +37% · −10,3% | +25% | −12,6% | 1,2 | 98 d | −11,4% | +17% | 0,33 |
> | 4487 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+181% · −51,5%** | +44% · −10,4% | +26% | −9,4% | 1,8 | 111 d | −12,4% | +14% | 0,24 |
> | 4488 | ADX ·ADX + Quinta ·QUI + Pullback ·PUL ⚠️ | **+102% · −30,6%** | +41% · −9,7% | +27% | −6,4% | 1,7 | 161 d | −8,6% | +16% | −0,05 |
> | 4489 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN + Onda ·OND | **+189% · −55,3%** | +57% · −14,3% | +35% | −7,9% | 1,5 | 108 d | −11,3% | +26% | 0,29 |
> | 4490 | ADX ·ADX + BB explosão ·TEN + Tendência ·TEN + Onda ·OND | **+186% · −66,2%** | +58% · −20,1% | +36% | −10,2% | 1,6 | 101 d | −12,9% | +28% | 0,31 |
> | 4491 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+109% · −49,1%** | +35% · −11,2% | +26% | −14,9% | 0,9 | 95 d | −11,1% | +22% | 0,29 |
> | 4492 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+162% · −56,4%** | +44% · −11,6% | +29% | −8,7% | 1,1 | 101 d | −10,7% | +20% | 0,20 |
> | 4493 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+100% · −24,8%** | +32% · −4,7% | +25% | −5,6% | 1,0 | 279 d | −6,9% | +13% | 0,01 |
> | 4494 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+259% · −46,9%** | +54% · −8,2% | +32% | −5,1% | 1,9 | 130 d | −10,1% | +22% | 0,11 |
> | 4495 | Donchian ·TEN + Quinta ·QUI ⚠️ | **+92% · −23,3%** | +50% · −10,6% | +29% | −4,7% | 2,3 | 139 d | −12,1% | +17% | −0,14 |
> | 4496 | VWAP ·TEN + GPS médias ·TEN + Onda ·OND | **+105% · −39,4%** | +45% · −14,2% | +30% | −18,1% | 1,5 | 94 d | −14,4% | +27% | 0,29 |
> | 4497 | BB explosão ·TEN + IFR ·TEN | **+97% · −34,4%** | +54% · −17,6% | +35% | −8,9% | 2,0 | 119 d | −15,1% | +16% | 0,39 |
> | 4498 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Onda ·OND ⚠️ | **+204% · −52,4%** | +49% · −10,2% | +31% | −6,4% | 1,5 | 122 d | −9,7% | +22% | 0,13 |
> | 4499 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+238% · −54,3%** | +53% · −10,5% | +32% | −9,8% | 1,8 | 111 d | −12,9% | +27% | 0,34 |
> | 4500 | ADX ·ADX + BB explosão ·TEN + IFR ·TEN | **+159% · −53,9%** | +61% · −19,6% | +36% | −7,2% | 1,9 | 122 d | −11,5% | +23% | 0,39 |

> [!example]- Combinações 4501 a 4530 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4501 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL + Onda ·OND | **+128% · −48,1%** | +37% · −10,3% | +27% | −13,7% | 1,5 | 120 d | −10,1% | +23% | 0,22 |
> | 4502 | VWAP ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+114% · −31,4%** | +35% · −7,7% | +24% | −11,2% | 1,1 | 183 d | −7,3% | +17% | 0,15 |
> | 4503 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+132% · −35,7%** | +39% · −8,3% | +25% | −7,8% | 1,3 | 108 d | −10,8% | +19% | 0,13 |
> | 4504 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+138% · −58,6%** | +39% · −12,7% | +26% | −6,4% | 1,6 | 159 d | −8,6% | +15% | 0,09 |
> | 4505 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+250% · −50,7%** | +55% · −9,3% | +33% | −10,1% | 1,8 | 128 d | −10,3% | +20% | 0,36 |
> | 4506 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+163% · −45,2%** | +41% · −8,3% | +26% | −3,8% | 1,2 | 130 d | −8,3% | +19% | 0,03 |
> | 4507 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+224% · −49,5%** | +50% · −8,2% | +30% | −7,8% | 1,8 | 128 d | −10,2% | +20% | 0,27 |
> | 4508 | VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+88% · −33,1%** | +38% · −11,2% | +25% | −13,1% | 1,9 | 140 d | −9,6% | +18% | 0,04 |
> | 4509 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL ⚠️ | **+178% · −57,1%** | +45% · −12,1% | +29% | −8,3% | 1,5 | 128 d | −9,2% | +19% | 0,19 |
> | 4510 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+168% · −58,3%** | +43% · −12,4% | +26% | −7,1% | 1,4 | 120 d | −10,0% | +18% | 0,22 |
> | 4511 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+97% · −34,0%** | +34% · −7,6% | +24% | −6,7% | 1,1 | 161 d | −7,6% | +15% | 0,07 |
> | 4512 | VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR | **+104% · −33,4%** | +42% · −10,5% | +26% | −10,8% | 1,7 | 159 d | −8,9% | +15% | 0,11 |
> | 4513 | ADX ·ADX + Bollinger ·TEN | **+119% · −32,1%** | +63% · −16,1% | +32% | −7,9% | 1,5 | 122 d | −9,6% | +18% | 0,37 |
> | 4514 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+168% · −45,6%** | +42% · −8,9% | +28% | −8,9% | 0,9 | 130 d | −8,0% | +17% | 0,16 |
> | 4515 | VWAP ·TEN + BB explosão ·TEN + Tendência ·TEN | **+104% · −60,3%** | +46% · −22,2% | +32% | −12,1% | 1,6 | 95 d | −16,6% | +12% | 0,57 |
> | 4516 | MACD ·TEN | **+40% · −10,5%** | +40% · −10,5% | +31% | −16,7% | 1,2 | 189 d | −7,6% | +21% | — |
> | 4517 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+223% · −42,6%** | +57% · −8,7% | +33% | −4,5% | 2,0 | 127 d | −11,3% | +21% | 0,08 |
> | 4518 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+209% · −53,0%** | +47% · −9,1% | +29% | −4,8% | 1,9 | 159 d | −9,4% | +16% | 0,08 |
> | 4519 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR | **+150% · −54,3%** | +42% · −11,4% | +27% | −12,2% | 1,7 | 111 d | −12,0% | +18% | 0,26 |
> | 4520 | VWAP ·TEN + Pullback ·PUL | **+46% · −24,5%** | +29% · −12,1% | +24% | −15,6% | 1,6 | 210 d | −8,2% | +11% | 0,09 |
> | 4521 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+127% · −40,8%** | +40% · −10,7% | +29% | −16,3% | 1,0 | 179 d | −7,4% | +18% | 0,34 |
> | 4522 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+102% · −34,1%** | +34% · −8,4% | +26% | −12,6% | 0,8 | 182 d | −7,2% | +18% | 0,06 |
> | 4523 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+102% · −26,0%** | +33% · −5,2% | +25% | −7,1% | 1,0 | 205 d | −7,2% | +14% | 0,11 |
> | 4524 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+95% · −43,8%** | +30% · −8,8% | +23% | −11,6% | 1,1 | 120 d | −9,5% | +16% | 0,15 |
> | 4525 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN | **+136% · −60,0%** | +61% · −23,6% | +34% | −8,4% | 1,5 | 94 d | −19,8% | +20% | 0,47 |
> | 4526 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+100% · −53,6%** | +39% · −15,0% | +25% | −12,8% | 1,5 | 95 d | −14,3% | +13% | 0,17 |
> | 4527 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+196% · −53,2%** | +48% · −11,6% | +29% | −9,2% | 1,6 | 122 d | −10,0% | +24% | 0,28 |
> | 4528 | BB explosão ·TEN + Tendência ·TEN | **+98% · −51,0%** | +56% · −28,3% | +37% | −11,5% | 1,9 | 111 d | −19,3% | +12% | 0,56 |
> | 4529 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+91% · −43,5%** | +30% · −9,4% | +23% | −12,1% | 0,9 | 108 d | −10,1% | +20% | 0,12 |
> | 4530 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+183% · −49,6%** | +44% · −8,4% | +27% | −4,7% | 1,6 | 159 d | −8,6% | +15% | 0,07 |

> [!example]- Combinações 4531 a 4560 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4531 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+133% · −36,8%** | +41% · −8,6% | +27% | −6,8% | 1,1 | 130 d | −8,3% | +15% | 0,10 |
> | 4532 | ADX ·ADX + Quinta ·QUI + Onda ·OND ⚠️ | **+107% · −30,6%** | +44% · −10,8% | +29% | −7,8% | 1,0 | 130 d | −8,1% | +18% | −0,07 |
> | 4533 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pullback ·PUL | **+101% · −46,9%** | +36% · −12,5% | +26% | −13,3% | 1,6 | 120 d | −11,0% | +15% | 0,23 |
> | 4534 | Donchian ·TEN + MACD ·TEN + Onda ·OND | **+152% · −32,8%** | +56% · −11,2% | +35% | −11,3% | 2,1 | 181 d | −10,2% | +28% | 0,36 |
> | 4535 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN | **+145% · −65,4%** | +54% · −19,4% | +31% | −14,9% | 1,9 | 111 d | −18,4% | +13% | 0,52 |
> | 4536 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+121% · −41,5%** | +39% · −9,3% | +27% | −7,9% | 1,1 | 161 d | −7,8% | +15% | 0,15 |
> | 4537 | 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+139% · −25,6%** | +48% · −7,6% | +30% | −9,5% | 1,4 | 205 d | −7,9% | +11% | 0,26 |
> | 4538 | ADX ·ADX + MACD ·TEN + Pôr do sol ·POR | **+112% · −32,9%** | +44% · −10,5% | +29% | −7,1% | 1,1 | 161 d | −7,8% | +17% | 0,04 |
> | 4539 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+159% · −48,6%** | +41% · −9,7% | +27% | −7,7% | 2,0 | 192 d | −9,6% | +17% | 0,18 |
> | 4540 | BB explosão ·TEN + Pullback ·PUL | **+61% · −34,9%** | +37% · −17,8% | +26% | −6,3% | 1,8 | 108 d | −14,7% | +7% | −0,01 |
> | 4541 | Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL | **+135% · −48,6%** | +52% · −17,2% | +31% | −6,1% | 2,3 | 130 d | −14,3% | +11% | 0,22 |
> | 4542 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+184% · −50,0%** | +45% · −10,3% | +26% | −9,6% | 1,7 | 111 d | −12,8% | +15% | 0,22 |
> | 4543 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+134% · −38,7%** | +42% · −9,3% | +28% | −8,8% | 1,1 | 130 d | −8,3% | +18% | 0,24 |
> | 4544 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+184% · −39,1%** | +41% · −7,6% | +27% | −7,6% | 1,4 | 128 d | −9,2% | +15% | 0,09 |
> | 4545 | ADX ·ADX + Donchian ·TEN + Quinta ·QUI ⚠️ | **+160% · −39,0%** | +58% · −12,2% | +32% | −5,7% | 2,0 | 136 d | −10,4% | +19% | 0,03 |
> | 4546 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+127% · −42,0%** | +40% · −10,1% | +25% | −4,6% | 1,9 | 129 d | −10,5% | +15% | 0,01 |
> | 4547 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+146% · −58,4%** | +42% · −12,8% | +28% | −13,1% | 1,7 | 111 d | −12,5% | +15% | 0,40 |
> | 4548 | BB explosão ·TEN + Tendência ·TEN + Onda ·OND | **+128% · −51,6%** | +52% · −19,0% | +35% | −11,1% | 1,7 | 102 d | −15,2% | +27% | 0,36 |
> | 4549 | VWAP ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+154% · −37,8%** | +43% · −10,0% | +28% | −13,8% | 1,2 | 179 d | −7,9% | +18% | 0,33 |
> | 4550 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+144% · −54,7%** | +47% · −15,7% | +28% | −14,3% | 1,5 | 95 d | −17,1% | +15% | 0,44 |
> | 4551 | ADX ·ADX + Rompe 200 ·ROM + Onda ·OND | **+108% · −33,4%** | +45% · −10,7% | +29% | −9,0% | 0,9 | 122 d | −9,1% | +20% | 0,10 |
> | 4552 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+140% · −51,8%** | +49% · −14,2% | +32% | −13,4% | 1,4 | 95 d | −15,6% | +22% | 0,32 |
> | 4553 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+160% · −41,5%** | +47% · −10,3% | +31% | −11,3% | 1,1 | 130 d | −8,4% | +18% | 0,34 |
> | 4554 | VWAP ·TEN + Donchian ·TEN + Quinta ·QUI ⚠️ | **+103% · −33,2%** | +42% · −10,6% | +27% | −10,5% | 1,9 | 148 d | −10,1% | +15% | 0,09 |
> | 4555 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+220% · −54,7%** | +52% · −12,0% | +32% | −11,6% | 1,6 | 122 d | −10,3% | +24% | 0,34 |
> | 4556 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+207% · −63,8%** | +52% · −15,2% | +31% | −6,9% | 2,0 | 189 d | −10,0% | +21% | 0,30 |
> | 4557 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+180% · −53,6%** | +45% · −10,9% | +26% | −10,6% | 1,7 | 111 d | −13,3% | +13% | 0,35 |
> | 4558 | Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN | **+165% · −46,0%** | +59% · −16,0% | +31% | −8,2% | 1,9 | 111 d | −18,1% | +14% | 0,40 |
> | 4559 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+99% · −57,0%** | +39% · −16,2% | +25% | −14,2% | 1,4 | 95 d | −15,4% | +12% | 0,37 |
> | 4560 | ADX ·ADX + BB explosão ·TEN + Tendência ·TEN | **+160% · −65,0%** | +63% · −26,7% | +38% | −10,5% | 2,1 | 127 d | −13,0% | +20% | 0,41 |

> [!example]- Combinações 4561 a 4590 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4561 | Donchian ·TEN + Pôr do sol ·POR | **+93% · −25,1%** | +51% · −11,5% | +29% | −4,7% | 2,1 | 131 d | −11,7% | +20% | −0,19 |
> | 4562 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Onda ·OND | **+170% · −63,6%** | +59% · −16,3% | +34% | −12,0% | 1,9 | 115 d | −17,4% | +25% | 0,39 |
> | 4563 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+137% · −57,6%** | +44% · −13,7% | +29% | −16,0% | 1,3 | 95 d | −14,4% | +25% | 0,37 |
> | 4564 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN | **+118% · −57,6%** | +44% · −16,7% | +29% | −17,4% | 1,4 | 95 d | −16,0% | +18% | 0,46 |
> | 4565 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+92% · −40,2%** | +30% · −8,4% | +23% | −10,6% | 0,9 | 120 d | −9,5% | +19% | 0,04 |
> | 4566 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+117% · −39,6%** | +40% · −8,3% | +27% | −8,7% | 0,9 | 131 d | −8,2% | +15% | 0,05 |
> | 4567 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pullback ·PUL | **+143% · −45,0%** | +43% · −10,4% | +29% | −8,2% | 1,6 | 161 d | −8,8% | +16% | 0,16 |
> | 4568 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+120% · −56,8%** | +40% · −12,8% | +27% | −14,5% | 1,3 | 95 d | −14,3% | +21% | 0,31 |
> | 4569 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+116% · −38,3%** | +38% · −8,4% | +26% | −7,1% | 1,5 | 161 d | −8,6% | +16% | 0,15 |
> | 4570 | ADX ·ADX + VWAP ·TEN + Bollinger ·TEN + Onda ·OND | **+170% · −40,5%** | +49% · −9,6% | +29% | −10,0% | 1,2 | 122 d | −9,6% | +17% | 0,29 |
> | 4571 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+143% · −53,4%** | +42% · −10,8% | +28% | −11,7% | 1,6 | 111 d | −12,2% | +21% | 0,19 |
> | 4572 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+130% · −35,8%** | +34% · −6,6% | +25% | −6,8% | 1,2 | 160 d | −8,2% | +15% | −0,00 |
> | 4573 | VWAP ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+103% · −37,2%** | +34% · −9,6% | +26% | −14,4% | 0,9 | 179 d | −7,7% | +19% | 0,26 |
> | 4574 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+168% · −57,2%** | +43% · −12,2% | +26% | −8,4% | 1,3 | 120 d | −10,5% | +17% | 0,30 |
> | 4575 | ADX ·ADX + Donchian ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+240% · −45,0%** | +63% · −10,4% | +36% | −6,5% | 1,9 | 127 d | −12,1% | +25% | 0,23 |
> | 4576 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+226% · −50,5%** | +50% · −7,9% | +30% | −6,6% | 1,7 | 129 d | −10,1% | +18% | 0,14 |
> | 4577 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+155% · −58,1%** | +46% · −13,7% | +30% | −15,2% | 1,3 | 95 d | −14,8% | +23% | 0,33 |
> | 4578 | MACD ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+129% · −29,0%** | +38% · −6,5% | +28% | −9,4% | 1,0 | 202 d | −7,6% | +14% | 0,14 |
> | 4579 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+125% · −51,8%** | +43% · −14,2% | +28% | −11,7% | 1,7 | 111 d | −13,6% | +18% | 0,30 |
> | 4580 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+136% · −44,6%** | +36% · −9,6% | +25% | −11,4% | 1,1 | 108 d | −11,1% | +20% | 0,16 |
> | 4581 | Donchian ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+169% · −37,4%** | +59% · −11,6% | +35% | −10,6% | 1,7 | 115 d | −13,0% | +27% | 0,25 |
> | 4582 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN | **+203% · −56,3%** | +49% · −12,1% | +29% | −13,2% | 1,7 | 111 d | −13,8% | +18% | 0,47 |
> | 4583 | BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+130% · −37,5%** | +39% · −9,0% | +25% | −8,9% | 1,4 | 111 d | −11,5% | +18% | 0,24 |
> | 4584 | ADX ·ADX + BB explosão ·TEN + Bollinger ·TEN | **+149% · −54,3%** | +56% · −20,0% | +30% | −6,4% | 1,3 | 97 d | −14,4% | +21% | 0,37 |
> | 4585 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+144% · −50,0%** | +47% · −13,3% | +28% | −9,7% | 1,7 | 122 d | −11,2% | +20% | 0,27 |
> | 4586 | VWAP ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+76% · −24,9%** | +32% · −7,8% | +21% | −10,9% | 1,3 | 210 d | −7,9% | +14% | 0,13 |
> | 4587 | VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR | **+62% · −26,6%** | +29% · −8,4% | +23% | −14,1% | 0,9 | 188 d | −7,6% | +14% | 0,17 |
> | 4588 | VWAP ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+94% · −34,7%** | +38% · −11,9% | +28% | −18,0% | 1,2 | 174 d | −8,1% | +19% | 0,39 |
> | 4589 | ADX ·ADX + GPS médias ·TEN + MACD ·TEN | **+162% · −42,8%** | +62% · −15,2% | +36% | −8,8% | 1,9 | 122 d | −12,7% | +30% | 0,33 |
> | 4590 | ADX ·ADX + Pôr do sol ·POR + Onda ·OND | **+109% · −31,2%** | +45% · −10,9% | +29% | −7,9% | 0,9 | 131 d | −8,3% | +17% | −0,01 |

> [!example]- Combinações 4591 a 4620 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4591 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Onda ·OND | **+198% · −61,5%** | +52% · −14,1% | +31% | −7,6% | 1,7 | 127 d | −10,9% | +25% | 0,26 |
> | 4592 | ADX ·ADX + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+119% · −31,8%** | +46% · −10,0% | +29% | −5,5% | 1,1 | 130 d | −8,7% | +19% | 0,00 |
> | 4593 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN | **+163% · −59,9%** | +52% · −16,7% | +32% | −8,7% | 1,7 | 128 d | −10,7% | +20% | 0,40 |
> | 4594 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+201% · −49,0%** | +56% · −13,4% | +31% | −9,1% | 1,8 | 122 d | −11,9% | +23% | 0,37 |
> | 4595 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+129% · −39,0%** | +35% · −7,9% | +25% | −8,3% | 1,2 | 137 d | −8,6% | +16% | 0,06 |
> | 4596 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+167% · −42,1%** | +48% · −10,7% | +30% | −7,1% | 2,0 | 197 d | −10,2% | +18% | 0,08 |
> | 4597 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+171% · −51,0%** | +46% · −10,6% | +29% | −9,5% | 1,5 | 122 d | −10,6% | +22% | 0,11 |
> | 4598 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN | **+192% · −63,2%** | +47% · −14,4% | +29% | −10,0% | 1,4 | 120 d | −10,8% | +20% | 0,41 |
> | 4599 | Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN + Onda ·OND | **+200% · −52,2%** | +55% · −12,9% | +31% | −9,6% | 1,7 | 111 d | −15,3% | +25% | 0,31 |
> | 4600 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+104% · −30,3%** | +33% · −6,5% | +21% | −3,7% | 1,4 | 133 d | −9,1% | +16% | 0,02 |
> | 4601 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+103% · −33,9%** | +34% · −8,4% | +26% | −12,8% | 0,7 | 187 d | −7,6% | +17% | 0,17 |
> | 4602 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+164% · −48,7%** | +51% · −13,5% | +32% | −13,4% | 1,7 | 114 d | −13,2% | +23% | 0,32 |
> | 4603 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+140% · −57,9%** | +39% · −12,1% | +26% | −6,3% | 1,5 | 159 d | −9,0% | +16% | 0,08 |
> | 4604 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+141% · −50,1%** | +45% · −13,8% | +28% | −10,1% | 1,7 | 114 d | −13,1% | +18% | 0,28 |
> | 4605 | ADX ·ADX + VWAP ·TEN + Bollinger ·TEN | **+134% · −39,0%** | +51% · −12,3% | +29% | −8,9% | 1,4 | 131 d | −9,1% | +13% | 0,40 |
> | 4606 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+98% · −42,2%** | +34% · −11,3% | +24% | −12,3% | 1,0 | 120 d | −10,0% | +18% | 0,14 |
> | 4607 | VWAP ·TEN + Tendência ·TEN | **+83% · −35,7%** | +48% · −16,7% | +34% | −11,9% | 2,1 | 174 d | −11,0% | +16% | 0,60 |
> | 4608 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN + Onda ·OND | **+161% · −67,4%** | +52% · −15,2% | +31% | −14,3% | 1,7 | 111 d | −16,1% | +22% | 0,41 |
> | 4609 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + MACD ·TEN | **+167% · −51,5%** | +53% · −13,8% | +32% | −11,9% | 1,7 | 122 d | −11,5% | +23% | 0,37 |
> | 4610 | Rompe 200 ·ROM + Onda ·OND | **+49% · −17,0%** | +31% · −7,9% | +24% | −11,3% | 0,7 | 346 d | −7,3% | +14% | 0,18 |
> | 4611 | VWAP ·TEN + Donchian ·TEN + MACD ·TEN | **+126% · −35,2%** | +49% · −12,6% | +31% | −16,6% | 2,0 | 131 d | −11,8% | +20% | 0,55 |
> | 4612 | VWAP ·TEN + Rompe 200 ·ROM + Onda ·OND | **+61% · −30,9%** | +30% · −10,4% | +23% | −16,3% | 0,7 | 171 d | −7,9% | +19% | 0,24 |
> | 4613 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+111% · −49,8%** | +38% · −13,0% | +25% | −6,0% | 1,3 | 127 d | −9,7% | +16% | 0,08 |
> | 4614 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + IFR ·TEN + Onda ·OND | **+187% · −61,4%** | +50% · −13,0% | +32% | −9,9% | 1,5 | 122 d | −10,7% | +22% | 0,33 |
> | 4615 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL ⚠️ | **+217% · −59,3%** | +63% · −17,0% | +35% | −6,5% | 1,9 | 123 d | −12,4% | +23% | 0,32 |
> | 4616 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL + Onda ·OND | **+137% · −43,3%** | +44% · −9,5% | +29% | −9,1% | 1,4 | 131 d | −9,1% | +16% | 0,14 |
> | 4617 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+99% · −37,1%** | +35% · −7,9% | +23% | −6,8% | 0,9 | 161 d | −8,1% | +14% | 0,06 |
> | 4618 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+173% · −51,6%** | +46% · −10,8% | +29% | −9,5% | 1,5 | 122 d | −10,7% | +21% | 0,13 |
> | 4619 | ADX ·ADX + MACD ·TEN + Onda ·OND | **+133% · −38,6%** | +52% · −11,9% | +34% | −10,2% | 0,9 | 122 d | −9,5% | +19% | 0,20 |
> | 4620 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Onda ·OND | **+145% · −52,4%** | +42% · −10,3% | +28% | −11,9% | 1,5 | 111 d | −12,6% | +22% | 0,20 |

> [!example]- Combinações 4621 a 4650 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4621 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+131% · −51,2%** | +37% · −9,8% | +25% | −8,4% | 1,8 | 130 d | −10,6% | +14% | 0,10 |
> | 4622 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+144% · −44,7%** | +43% · −12,3% | +27% | −13,5% | 1,1 | 108 d | −11,8% | +18% | 0,38 |
> | 4623 | Donchian ·TEN + MACD ·TEN | **+117% · −27,3%** | +62% · −13,9% | +36% | −11,6% | 2,4 | 167 d | −14,6% | +27% | 0,56 |
> | 4624 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pullback ·PUL | **+196% · −68,6%** | +52% · −16,7% | +31% | −7,7% | 1,9 | 159 d | −10,5% | +16% | 0,28 |
> | 4625 | VWAP ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+69% · −27,3%** | +31% · −8,9% | +24% | −11,9% | 0,8 | 181 d | −7,9% | +16% | 0,00 |
> | 4626 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+135% · −56,1%** | +44% · −15,3% | +28% | −6,8% | 1,4 | 127 d | −10,0% | +23% | 0,13 |
> | 4627 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+122% · −36,5%** | +38% · −9,3% | +27% | −10,7% | 1,3 | 210 d | −8,3% | +19% | 0,21 |
> | 4628 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Rompe 200 ·ROM | **+166% · −46,8%** | +50% · −12,1% | +30% | −8,0% | 1,7 | 159 d | −9,6% | +18% | 0,27 |
> | 4629 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+97% · −48,4%** | +34% · −13,8% | +25% | −13,7% | 1,0 | 115 d | −10,7% | +15% | 0,29 |
> | 4630 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+116% · −41,2%** | +32% · −8,2% | +22% | −9,3% | 1,2 | 121 d | −10,4% | +14% | 0,14 |
> | 4631 | ADX ·ADX + Donchian ·TEN + Onda ·OND | **+181% · −44,1%** | +67% · −14,1% | +37% | −7,8% | 1,8 | 128 d | −11,2% | +23% | 0,21 |
> | 4632 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+145% · −46,9%** | +47% · −12,0% | +28% | −8,1% | 1,7 | 130 d | −10,5% | +21% | 0,12 |
> | 4633 | VWAP ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+60% · −26,9%** | +29% · −8,8% | +23% | −13,9% | 0,6 | 213 d | −7,6% | +16% | −0,03 |
> | 4634 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+140% · −50,6%** | +39% · −10,0% | +26% | −6,3% | 1,1 | 122 d | −9,9% | +20% | 0,07 |
> | 4635 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+198% · −49,1%** | +47% · −8,6% | +30% | −8,1% | 1,8 | 197 d | −9,5% | +24% | 0,10 |
> | 4636 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + MACD ·TEN | **+190% · −53,5%** | +56% · −13,7% | +33% | −10,0% | 1,7 | 159 d | −9,8% | +18% | 0,41 |
> | 4637 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Pôr do sol ·POR | **+123% · −40,9%** | +40% · −9,0% | +27% | −8,2% | 1,0 | 161 d | −8,3% | +14% | 0,16 |
> | 4638 | ADX ·ADX + VWAP ·TEN + Rompe 200 ·ROM + Onda ·OND | **+117% · −38,5%** | +40% · −8,9% | +27% | −10,6% | 1,0 | 130 d | −8,8% | +18% | 0,19 |
> | 4639 | ADX ·ADX + BB explosão ·TEN + Bollinger ·TEN + Onda ·OND | **+183% · −55,5%** | +53% · −14,7% | +31% | −7,4% | 1,2 | 101 d | −13,6% | +19% | 0,27 |
> | 4640 | ADX ·ADX + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+84% · −29,4%** | +36% · −9,6% | +24% | −6,0% | 0,9 | 161 d | −8,2% | +13% | 0,03 |
> | 4641 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+241% · −61,1%** | +59% · −13,3% | +34% | −7,8% | 1,7 | 124 d | −11,4% | +27% | 0,28 |
> | 4642 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN | **+128% · −45,5%** | +40% · −12,5% | +26% | −15,0% | 1,1 | 98 d | −13,9% | +18% | 0,46 |
> | 4643 | ADX ·ADX + VWAP ·TEN + Tendência ·TEN | **+147% · −53,3%** | +57% · −19,2% | +36% | −10,4% | 1,9 | 161 d | −10,9% | +21% | 0,40 |
> | 4644 | ADX ·ADX + GPS médias ·TEN + Pôr do sol ·POR | **+139% · −38,7%** | +54% · −13,4% | +31% | −5,6% | 1,9 | 130 d | −11,4% | +25% | 0,02 |
> | 4645 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pullback ·PUL | **+169% · −66,8%** | +49% · −16,8% | +30% | −9,1% | 1,9 | 128 d | −12,5% | +17% | 0,27 |
> | 4646 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+118% · −55,9%** | +36% · −12,4% | +24% | −7,7% | 1,2 | 129 d | −9,4% | +15% | 0,14 |
> | 4647 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Tendência ·TEN + Onda ·OND | **+181% · −70,9%** | +51% · −17,9% | +33% | −9,6% | 1,5 | 120 d | −12,3% | +26% | 0,36 |
> | 4648 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+169% · −52,5%** | +46% · −11,2% | +29% | −10,9% | 1,5 | 122 d | −11,2% | +25% | 0,24 |
> | 4649 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+228% · −52,3%** | +50% · −7,9% | +30% | −6,7% | 1,6 | 129 d | −10,4% | +17% | 0,17 |
> | 4650 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN | **+168% · −52,7%** | +51% · −14,2% | +29% | −12,4% | 1,6 | 111 d | −16,3% | +14% | 0,47 |

> [!example]- Combinações 4651 a 4680 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4651 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+142% · −49,7%** | +40% · −9,4% | +26% | −6,2% | 1,0 | 122 d | −10,0% | +19% | 0,06 |
> | 4652 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN + Onda ·OND | **+197% · −56,6%** | +49% · −12,0% | +29% | −12,7% | 1,5 | 111 d | −14,4% | +22% | 0,38 |
> | 4653 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+163% · −57,4%** | +44% · −11,9% | +29% | −7,4% | 1,1 | 122 d | −10,2% | +20% | 0,11 |
> | 4654 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+81% · −40,7%** | +31% · −10,5% | +23% | −9,5% | 1,6 | 159 d | −9,7% | +12% | 0,04 |
> | 4655 | Donchian ·TEN + BB explosão ·TEN + Tendência ·TEN | **+171% · −63,2%** | +66% · −24,5% | +39% | −9,3% | 2,4 | 190 d | −17,4% | +14% | 0,62 |
> | 4656 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+131% · −38,3%** | +35% · −7,7% | +25% | −8,3% | 1,1 | 160 d | −8,7% | +15% | 0,09 |
> | 4657 | VWAP ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+77% · −25,2%** | +33% · −7,9% | +21% | −11,1% | 1,2 | 210 d | −8,3% | +13% | 0,15 |
> | 4658 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Onda ·OND | **+182% · −52,2%** | +56% · −12,8% | +33% | −10,4% | 1,5 | 129 d | −10,1% | +18% | 0,30 |
> | 4659 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+147% · −45,7%** | +47% · −11,5% | +28% | −8,0% | 1,7 | 130 d | −10,6% | +20% | 0,12 |
> | 4660 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+139% · −61,7%** | +40% · −13,8% | +27% | −8,8% | 1,2 | 129 d | −9,6% | +19% | 0,20 |
> | 4661 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI ⚠️ | **+175% · −60,7%** | +54% · −17,7% | +31% | −5,3% | 1,9 | 189 d | −10,6% | +18% | 0,17 |
> | 4662 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Bollinger ·TEN | **+231% · −67,4%** | +56% · −16,0% | +31% | −8,4% | 1,9 | 128 d | −12,9% | +18% | 0,42 |
> | 4663 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + MACD ·TEN + Onda ·OND | **+190% · −54,0%** | +51% · −11,6% | +32% | −12,2% | 1,5 | 122 d | −11,4% | +24% | 0,31 |
> | 4664 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+171% · −57,5%** | +43% · −12,1% | +26% | −7,0% | 1,3 | 128 d | −10,1% | +17% | 0,20 |
> | 4665 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Onda ·OND | **+100% · −46,6%** | +38% · −13,1% | +28% | −17,2% | 0,8 | 98 d | −13,7% | +21% | 0,37 |
> | 4666 | BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN + Onda ·OND | **+155% · −42,2%** | +45% · −10,5% | +29% | −11,1% | 1,2 | 108 d | −12,8% | +17% | 0,29 |
> | 4667 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+166% · −56,5%** | +44% · −11,5% | +29% | −7,3% | 1,1 | 122 d | −10,3% | +19% | 0,11 |
> | 4668 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+200% · −47,9%** | +47% · −8,5% | +30% | −8,1% | 1,7 | 192 d | −9,6% | +24% | 0,13 |
> | 4669 | VWAP ·TEN + Pôr do sol ·POR + Onda ·OND | **+61% · −29,3%** | +29% · −8,9% | +23% | −14,1% | 0,4 | 222 d | −7,8% | +14% | 0,09 |
> | 4670 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+86% · −31,1%** | +36% · −10,2% | +25% | −6,9% | 1,2 | 124 d | −10,1% | +16% | −0,07 |
> | 4671 | ADX ·ADX + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+121% · −30,8%** | +47% · −9,5% | +29% | −4,9% | 1,1 | 130 d | −9,3% | +17% | 0,09 |
> | 4672 | Pullback ·PUL + Onda ·OND | **+63% · −19,9%** | +37% · −9,5% | +29% | −8,7% | 1,6 | 229 d | −9,2% | +22% | 0,10 |
> | 4673 | BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN | **+115% · −49,9%** | +50% · −18,4% | +31% | −14,5% | 1,6 | 111 d | −17,7% | +20% | 0,43 |
> | 4674 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Tendência ·TEN | **+160% · −69,7%** | +53% · −22,4% | +34% | −9,3% | 1,8 | 128 d | −12,2% | +18% | 0,45 |
> | 4675 | ADX ·ADX + Pôr do sol ·POR + Pullback ·PUL | **+104% · −32,9%** | +42% · −9,7% | +27% | −6,0% | 1,5 | 161 d | −9,4% | +15% | −0,08 |
> | 4676 | BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+103% · −32,3%** | +33% · −7,2% | +22% | −5,4% | 1,4 | 133 d | −9,7% | +13% | 0,08 |
> | 4677 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+120% · −55,8%** | +36% · −11,5% | +24% | −6,3% | 1,1 | 159 d | −8,9% | +16% | 0,07 |
> | 4678 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+64% · −46,4%** | +27% · −11,1% | +21% | −10,9% | 1,0 | 121 d | −10,6% | +10% | 0,12 |
> | 4679 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+211% · −56,8%** | +49% · −11,8% | +29% | −9,0% | 1,2 | 120 d | −11,4% | +21% | 0,37 |
> | 4680 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+238% · −54,7%** | +55% · −9,5% | +33% | −10,1% | 1,6 | 128 d | −11,1% | +20% | 0,30 |

> [!example]- Combinações 4681 a 4710 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4681 | ADX ·ADX + VWAP ·TEN + MACD ·TEN + Onda ·OND | **+140% · −47,1%** | +46% · −11,0% | +31% | −12,5% | 1,0 | 130 d | −9,2% | +18% | 0,29 |
> | 4682 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL ⚠️ | **+212% · −64,9%** | +55% · −15,3% | +32% | −9,5% | 1,6 | 128 d | −11,3% | +21% | 0,38 |
> | 4683 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+149% · −48,2%** | +46% · −12,2% | +29% | −5,9% | 1,1 | 119 d | −11,5% | +21% | 0,21 |
> | 4684 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR | **+137% · −55,2%** | +44% · −14,9% | +28% | −6,4% | 1,3 | 128 d | −10,1% | +22% | 0,09 |
> | 4685 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+116% · −38,3%** | +38% · −8,3% | +26% | −5,1% | 1,4 | 161 d | −9,3% | +13% | 0,02 |
> | 4686 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+113% · −49,4%** | +38% · −12,5% | +25% | −5,6% | 1,3 | 161 d | −9,1% | +19% | 0,00 |
> | 4687 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+154% · −48,5%** | +41% · −8,9% | +27% | −8,2% | 1,8 | 197 d | −10,2% | +21% | 0,12 |
> | 4688 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+135% · −38,8%** | +42% · −8,8% | +27% | −7,0% | 1,0 | 161 d | −8,7% | +14% | 0,16 |
> | 4689 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+141% · −46,1%** | +45% · −12,3% | +28% | −9,0% | 1,7 | 124 d | −12,4% | +20% | 0,07 |
> | 4690 | BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+133% · −35,1%** | +48% · −11,9% | +28% | −9,0% | 1,3 | 120 d | −12,0% | +16% | 0,28 |
> | 4691 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+169% · −41,2%** | +48% · −10,2% | +29% | −7,1% | 1,9 | 192 d | −10,5% | +20% | 0,09 |
> | 4692 | ADX ·ADX + VWAP ·TEN + IFR ·TEN | **+146% · −39,1%** | +55% · −12,1% | +34% | −7,7% | 1,6 | 131 d | −10,4% | +15% | 0,35 |
> | 4693 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pullback ·PUL | **+192% · −51,5%** | +54% · −12,1% | +32% | −6,3% | 1,9 | 159 d | −11,4% | +17% | 0,20 |
> | 4694 | Donchian ·TEN | **+83% · −23,6%** | +83% · −23,6% | +42% | −10,5% | 2,3 | 169 d | −24,5% | +17% | — |
> | 4695 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM | **+170% · −65,9%** | +49% · −16,1% | +29% | −9,1% | 1,7 | 129 d | −11,5% | +15% | 0,35 |
> | 4696 | BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+142% · −38,7%** | +36% · −7,3% | +24% | −7,6% | 1,3 | 144 d | −9,4% | +17% | 0,06 |
> | 4697 | BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND ⚠️ | **+184% · −41,0%** | +42% · −8,6% | +27% | −9,2% | 1,4 | 137 d | −9,7% | +16% | 0,21 |
> | 4698 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN | **+186% · −72,8%** | +59% · −19,6% | +33% | −10,6% | 1,9 | 128 d | −14,6% | +18% | 0,45 |
> | 4699 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+174% · −54,6%** | +52% · −14,3% | +33% | −8,2% | 1,1 | 119 d | −11,8% | +21% | 0,28 |
> | 4700 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+143% · −50,8%** | +39% · −9,5% | +26% | −5,2% | 1,1 | 130 d | −9,5% | +19% | 0,00 |
> | 4701 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+138% · −60,8%** | +41% · −13,9% | +27% | −10,4% | 1,2 | 128 d | −10,2% | +19% | 0,29 |
> | 4702 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Onda ·OND | **+97% · −45,1%** | +36% · −11,8% | +26% | −13,9% | 1,3 | 120 d | −12,0% | +20% | 0,21 |
> | 4703 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+105% · −36,9%** | +36% · −8,4% | +27% | −9,9% | 1,0 | 124 d | −10,1% | +17% | 0,06 |
> | 4704 | VWAP ·TEN + Pullback ·PUL + Onda ·OND | **+75% · −27,8%** | +34% · −9,0% | +26% | −14,4% | 1,2 | 211 d | −8,6% | +17% | 0,17 |
> | 4705 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR | **+177% · −59,9%** | +54% · −17,1% | +31% | −5,0% | 1,8 | 158 d | −11,1% | +19% | 0,11 |
> | 4706 | ADX ·ADX + Donchian ·TEN + Pôr do sol ·POR | **+163% · −39,8%** | +59% · −11,6% | +32% | −5,3% | 1,8 | 158 d | −11,0% | +18% | −0,01 |
> | 4707 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+187% · −39,8%** | +41% · −7,6% | +27% | −7,7% | 1,4 | 163 d | −9,3% | +15% | 0,12 |
> | 4708 | Pôr do sol ·POR + Onda ·OND | **+49% · −16,1%** | +31% · −6,4% | +24% | −8,2% | 0,5 | 307 d | −8,0% | +11% | −0,03 |
> | 4709 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+84% · −44,0%** | +32% · −10,9% | +24% | −13,5% | 1,0 | 120 d | −11,2% | +16% | 0,19 |
> | 4710 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL | **+121% · −54,9%** | +49% · −20,7% | +30% | −7,2% | 1,8 | 159 d | −11,1% | +16% | 0,11 |

> [!example]- Combinações 4711 a 4740 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4711 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+196% · −53,6%** | +47% · −10,7% | +30% | −9,5% | 1,7 | 197 d | −10,1% | +25% | 0,26 |
> | 4712 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+125% · −48,3%** | +41% · −11,3% | +26% | −6,1% | 1,9 | 197 d | −11,2% | +12% | 0,14 |
> | 4713 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+200% · −65,3%** | +53% · −15,4% | +30% | −9,8% | 1,5 | 120 d | −14,4% | +19% | 0,41 |
> | 4714 | 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+55% · −13,7%** | +33% · −5,7% | +25% | −5,2% | 1,0 | 278 d | −8,4% | +14% | −0,24 |
> | 4715 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+134% · −56,4%** | +46% · −16,5% | +29% | −16,0% | 1,4 | 111 d | −15,3% | +18% | 0,39 |
> | 4716 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Onda ·OND | **+119% · −40,7%** | +40% · −8,4% | +27% | −8,9% | 0,8 | 161 d | −8,7% | +14% | 0,10 |
> | 4717 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN | **+189% · −70,1%** | +53% · −17,5% | +32% | −10,5% | 1,7 | 129 d | −12,1% | +20% | 0,44 |
> | 4718 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+113% · −48,4%** | +39% · −12,3% | +25% | −5,5% | 1,2 | 131 d | −9,8% | +18% | 0,02 |
> | 4719 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+167% · −47,2%** | +49% · −13,0% | +30% | −8,2% | 1,8 | 197 d | −10,7% | +17% | 0,27 |
> | 4720 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+146% · −67,0%** | +46% · −17,0% | +28% | −10,4% | 1,5 | 120 d | −13,8% | +16% | 0,34 |
> | 4721 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+98% · −37,3%** | +34% · −7,9% | +23% | −4,8% | 0,8 | 161 d | −8,8% | +11% | 0,04 |
> | 4722 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + MACD ·TEN | **+164% · −68,2%** | +50% · −17,4% | +31% | −12,0% | 1,5 | 120 d | −14,1% | +21% | 0,41 |
> | 4723 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+138% · −45,7%** | +37% · −9,7% | +24% | −11,5% | 1,0 | 121 d | −11,4% | +20% | 0,17 |
> | 4724 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+168% · −57,1%** | +44% · −13,8% | +28% | −11,9% | 1,8 | 197 d | −10,7% | +16% | 0,34 |
> | 4725 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN ⚠️ | **+195% · −51,8%** | +54% · −14,9% | +31% | −10,2% | 1,7 | 124 d | −13,8% | +21% | 0,32 |
> | 4726 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+183% · −53,1%** | +55% · −14,8% | +33% | −10,7% | 1,4 | 122 d | −12,4% | +24% | 0,34 |
> | 4727 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+181% · −51,5%** | +46% · −11,1% | +29% | −6,4% | 1,0 | 122 d | −11,0% | +17% | 0,11 |
> | 4728 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+176% · −51,0%** | +45% · −9,8% | +30% | −9,0% | 1,8 | 192 d | −10,7% | +26% | 0,17 |
> | 4729 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI ⚠️ | **+173% · −66,0%** | +48% · −15,9% | +29% | −7,7% | 1,6 | 159 d | −10,7% | +17% | 0,23 |
> | 4730 | Donchian ·TEN + BB explosão ·TEN + Tendência ·TEN + Onda ·OND | **+197% · −61,9%** | +60% · −18,3% | +37% | −9,4% | 2,2 | 192 d | −14,8% | +25% | 0,44 |
> | 4731 | ADX ·ADX + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+144% · −40,7%** | +55% · −13,8% | +34% | −8,6% | 0,8 | 122 d | −10,7% | +15% | 0,23 |
> | 4732 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+119% · −47,2%** | +40% · −13,2% | +28% | −16,7% | 1,1 | 124 d | −10,7% | +21% | 0,37 |
> | 4733 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Quinta ·QUI ⚠️ | **+167% · −48,0%** | +50% · −11,1% | +30% | −6,3% | 1,6 | 159 d | −10,5% | +15% | 0,14 |
> | 4734 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+219% · −55,9%** | +52% · −10,0% | +33% | −11,3% | 1,7 | 197 d | −10,4% | +25% | 0,32 |
> | 4735 | ADX ·ADX + GPS médias ·TEN | **+125% · −41,9%** | +71% · −22,5% | +38% | −8,4% | 1,7 | 122 d | −17,9% | +30% | 0,42 |
> | 4736 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+120% · −54,7%** | +36% · −12,0% | +24% | −7,7% | 1,1 | 159 d | −9,5% | +16% | 0,12 |
> | 4737 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+154% · −55,1%** | +42% · −11,2% | +27% | −8,0% | 1,1 | 128 d | −10,3% | +19% | 0,16 |
> | 4738 | VWAP ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+71% · −26,1%** | +31% · −8,5% | +24% | −12,1% | 0,7 | 212 d | −8,4% | +14% | 0,15 |
> | 4739 | BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Bollinger ·TEN | **+105% · −33,7%** | +34% · −7,6% | +22% | −5,2% | 1,3 | 133 d | −10,2% | +15% | 0,02 |
> | 4740 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+55% · −27,5%** | +27% · −8,0% | +20% | −3,8% | 1,0 | 137 d | −9,6% | +14% | −0,08 |

> [!example]- Combinações 4741 a 4770 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4741 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN | **+91% · −54,7%** | +45% · −20,9% | +28% | −17,7% | 1,3 | 111 d | −20,0% | +12% | 0,51 |
> | 4742 | 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+89% · −23,6%** | +36% · −6,4% | +27% | −8,5% | 0,9 | 364 d | −8,4% | +11% | −0,07 |
> | 4743 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI ⚠️ | **+148% · −48,6%** | +46% · −12,0% | +29% | −5,1% | 1,1 | 127 d | −10,9% | +20% | 0,07 |
> | 4744 | ADX ·ADX + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+150% · −57,7%** | +51% · −16,6% | +30% | −5,9% | 1,6 | 122 d | −14,6% | +21% | 0,12 |
> | 4745 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR + Onda ·OND | **+107% · −37,9%** | +37% · −8,5% | +27% | −10,0% | 0,9 | 124 d | −10,5% | +16% | 0,07 |
> | 4746 | VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+136% · −47,2%** | +37% · −10,6% | +25% | −12,9% | 1,1 | 121 d | −11,9% | +21% | 0,27 |
> | 4747 | BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+84% · −33,1%** | +31% · −7,2% | +23% | −7,1% | 0,9 | 142 d | −9,5% | +16% | −0,05 |
> | 4748 | VWAP ·TEN + Rompe 200 ·ROM | **+33% · −26,5%** | +23% · −13,5% | +19% | −18,5% | 0,7 | 210 d | −8,5% | +11% | 0,22 |
> | 4749 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+157% · −54,2%** | +42% · −10,8% | +27% | −8,2% | 1,0 | 128 d | −10,4% | +18% | 0,17 |
> | 4750 | VWAP ·TEN + Bollinger ·TEN + Onda ·OND | **+102% · −31,9%** | +40% · −10,9% | +26% | −15,5% | 1,0 | 183 d | −9,0% | +18% | 0,32 |
> | 4751 | BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR | **+77% · −34,1%** | +34% · −10,8% | +25% | −9,2% | 1,0 | 121 d | −11,9% | +20% | −0,00 |
> | 4752 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR | **+141% · −61,0%** | +41% · −13,5% | +27% | −9,0% | 1,2 | 159 d | −9,7% | +18% | 0,19 |
> | 4753 | VWAP ·TEN + MACD ·TEN + Onda ·OND | **+82% · −34,2%** | +36% · −11,8% | +28% | −18,6% | 0,7 | 191 d | −8,7% | +19% | 0,36 |
> | 4754 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+148% · −49,2%** | +46% · −12,9% | +29% | −8,8% | 1,9 | 192 d | −11,8% | +18% | 0,21 |
> | 4755 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+103% · −39,8%** | +35% · −9,7% | +23% | −10,3% | 1,1 | 121 d | −12,3% | +13% | 0,19 |
> | 4756 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR + Pullback ·PUL | **+118% · −41,3%** | +38% · −8,7% | +26% | −5,2% | 1,3 | 161 d | −9,8% | +12% | 0,02 |
> | 4757 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+154% · −42,9%** | +39% · −9,1% | +28% | −11,2% | 1,2 | 198 d | −9,2% | +16% | 0,22 |
> | 4758 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+182% · −63,5%** | +52% · −15,5% | +31% | −11,0% | 1,4 | 120 d | −14,8% | +22% | 0,37 |
> | 4759 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+84% · −46,3%** | +32% · −12,2% | +24% | −14,8% | 0,9 | 120 d | −12,3% | +15% | 0,32 |
> | 4760 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL + Onda ·OND | **+152% · −62,0%** | +44% · −13,4% | +29% | −9,8% | 1,4 | 130 d | −11,0% | +20% | 0,20 |
> | 4761 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+189% · −54,5%** | +48% · −12,2% | +31% | −14,6% | 1,8 | 192 d | −11,2% | +21% | 0,42 |
> | 4762 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM | **+174% · −60,7%** | +55% · −18,0% | +31% | −5,6% | 1,9 | 191 d | −11,7% | +17% | 0,30 |
> | 4763 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+191% · −49,5%** | +54% · −12,5% | +33% | −11,5% | 1,8 | 197 d | −11,3% | +23% | 0,36 |
> | 4764 | 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+90% · −25,0%** | +37% · −7,4% | +27% | −10,2% | 0,9 | 209 d | −8,9% | +13% | 0,22 |
> | 4765 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + 1ª vela 80 ·VEL ⚠️ | **+211% · −50,8%** | +58% · −10,5% | +34% | −8,8% | 1,6 | 129 d | −12,5% | +18% | 0,33 |
> | 4766 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+154% · −54,7%** | +42% · −11,5% | +27% | −9,6% | 1,0 | 128 d | −10,9% | +19% | 0,28 |
> | 4767 | ADX ·ADX + BB explosão ·TEN + Pullback ·PUL + Onda ·OND | **+150% · −55,9%** | +48% · −14,7% | +31% | −7,3% | 1,4 | 130 d | −11,3% | +24% | 0,12 |
> | 4768 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL | **+127% · −60,4%** | +44% · −17,1% | +28% | −8,2% | 1,5 | 159 d | −10,8% | +15% | 0,22 |
> | 4769 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+153% · −46,5%** | +48% · −12,1% | +31% | −11,5% | 0,8 | 130 d | −10,1% | +18% | 0,28 |
> | 4770 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Onda ·OND | **+178% · −68,7%** | +53% · −16,4% | +32% | −11,0% | 1,5 | 128 d | −12,7% | +22% | 0,37 |

> [!example]- Combinações 4771 a 4800 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4771 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Onda ·OND | **+153% · −66,8%** | +50% · −16,2% | +31% | −12,3% | 1,3 | 120 d | −15,8% | +26% | 0,35 |
> | 4772 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN + Onda ·OND | **+158% · −52,4%** | +53% · −14,3% | +32% | −12,1% | 1,4 | 122 d | −13,8% | +24% | 0,29 |
> | 4773 | VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Onda ·OND | **+111% · −56,7%** | +44% · −16,3% | +29% | −16,8% | 1,2 | 117 d | −17,6% | +23% | 0,38 |
> | 4774 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR | **+175% · −65,4%** | +49% · −15,4% | +29% | −7,7% | 1,5 | 159 d | −11,0% | +18% | 0,21 |
> | 4775 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + Pôr do sol ·POR | **+170% · −49,8%** | +50% · −11,2% | +30% | −6,2% | 1,5 | 159 d | −10,8% | +15% | 0,14 |
> | 4776 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+106% · −41,0%** | +35% · −10,2% | +23% | −10,5% | 1,0 | 121 d | −12,8% | +15% | 0,17 |
> | 4777 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+114% · −46,3%** | +40% · −13,1% | +28% | −16,2% | 0,8 | 115 d | −13,5% | +18% | 0,32 |
> | 4778 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+153% · −48,0%** | +46% · −12,9% | +26% | −7,9% | 1,7 | 130 d | −14,0% | +18% | 0,10 |
> | 4779 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+176% · −60,5%** | +46% · −13,0% | +30% | −11,5% | 1,1 | 128 d | −11,1% | +21% | 0,35 |
> | 4780 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+88% · −29,2%** | +37% · −9,3% | +25% | −7,2% | 1,1 | 148 d | −10,1% | +16% | −0,03 |
> | 4781 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+81% · −41,4%** | +32% · −10,9% | +24% | −13,6% | 0,8 | 121 d | −12,3% | +21% | 0,09 |
> | 4782 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Bollinger ·TEN + Onda ·OND | **+185% · −61,3%** | +48% · −13,3% | +29% | −10,5% | 1,1 | 122 d | −12,6% | +21% | 0,33 |
> | 4783 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+143% · −46,3%** | +45% · −12,6% | +28% | −9,0% | 1,6 | 131 d | −12,6% | +21% | 0,08 |
> | 4784 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Quinta ·QUI + Onda ·OND ⚠️ | **+133% · −48,1%** | +38% · −9,6% | +26% | −8,2% | 1,6 | 140 d | −11,6% | +20% | 0,00 |
> | 4785 | VWAP ·TEN + Quinta ·QUI ⚠️ | **+32% · −19,8%** | +22% · −9,1% | +19% | −14,9% | 0,5 | 210 d | −8,9% | +10% | −0,14 |
> | 4786 | VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+104% · −42,7%** | +35% · −10,9% | +23% | −12,1% | 1,1 | 121 d | −13,4% | +12% | 0,31 |
> | 4787 | Donchian ·TEN + BB explosão ·TEN + GPS médias ·TEN | **+149% · −58,0%** | +64% · −21,9% | +35% | −12,1% | 2,1 | 197 d | −20,8% | +14% | 0,55 |
> | 4788 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+148% · −64,9%** | +46% · −16,0% | +28% | −9,1% | 1,5 | 128 d | −13,3% | +18% | 0,21 |
> | 4789 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Onda ·OND | **+83% · −42,3%** | +33% · −11,0% | +24% | −13,8% | 0,7 | 121 d | −12,4% | +20% | 0,12 |
> | 4790 | MACD ·TEN + Onda ·OND | **+71% · −23,6%** | +41% · −9,8% | +31% | −14,5% | 0,6 | 255 d | −8,9% | +13% | 0,25 |
> | 4791 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+65% · −42,4%** | +27% · −10,6% | +21% | −11,1% | 0,9 | 128 d | −11,0% | +12% | 0,09 |
> | 4792 | BB explosão ·TEN + MACD ·TEN + Bollinger ·TEN | **+119% · −37,3%** | +45% · −12,6% | +28% | −11,0% | 1,2 | 121 d | −14,9% | +20% | 0,38 |
> | 4793 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN | **+196% · −65,4%** | +60% · −19,6% | +35% | −7,8% | 1,8 | 191 d | −12,4% | +23% | 0,41 |
> | 4794 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Quinta ·QUI ⚠️ | **+65% · −36,6%** | +27% · −8,6% | +20% | −9,2% | 0,9 | 159 d | −9,9% | +13% | 0,03 |
> | 4795 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+151% · −47,5%** | +46% · −11,5% | +29% | −4,8% | 1,1 | 130 d | −11,0% | +20% | 0,08 |
> | 4796 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI ⚠️ | **+119% · −57,0%** | +42% · −14,0% | +27% | −10,9% | 1,6 | 130 d | −13,7% | +12% | 0,22 |
> | 4797 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+150% · −64,2%** | +46% · −15,6% | +28% | −9,1% | 1,5 | 128 d | −13,4% | +19% | 0,20 |
> | 4798 | Pôr do sol ·POR + 1ª vela 80 ·VEL ⚠️ | **+56% · −15,1%** | +34% · −6,5% | +24% | −5,0% | 0,8 | 275 d | −9,2% | +13% | 0,08 |
> | 4799 | BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN + Onda ·OND ⚠️ | **+128% · −37,5%** | +39% · −8,9% | +25% | −8,1% | 1,2 | 133 d | −11,1% | +16% | 0,06 |
> | 4800 | MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+116% · −29,5%** | +44% · −9,1% | +32% | −13,5% | 1,0 | 212 d | −9,4% | +12% | 0,27 |

> [!example]- Combinações 4801 a 4830 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4801 | BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+83% · −35,6%** | +31% · −8,0% | +23% | −8,9% | 1,0 | 162 d | −10,0% | +17% | 0,03 |
> | 4802 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI ⚠️ | **+94% · −45,3%** | +43% · −16,1% | +27% | −9,3% | 1,7 | 130 d | −15,5% | +14% | 0,08 |
> | 4803 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+174% · −55,5%** | +46% · −10,2% | +30% | −10,3% | 1,6 | 197 d | −11,6% | +25% | 0,30 |
> | 4804 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+166% · −58,8%** | +47% · −13,2% | +30% | −11,8% | 0,9 | 122 d | −12,9% | +21% | 0,30 |
> | 4805 | VWAP ·TEN + MACD ·TEN | **+53% · −26,9%** | +33% · −13,5% | +26% | −21,5% | 0,8 | 213 d | −9,4% | +15% | 0,54 |
> | 4806 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Pôr do sol ·POR | **+86% · −42,2%** | +32% · −10,7% | +24% | −13,7% | 0,9 | 128 d | −11,7% | +18% | 0,18 |
> | 4807 | ADX ·ADX + Donchian ·TEN | **+148% · −41,5%** | +79% · −21,2% | +40% | −7,7% | 1,8 | 158 d | −15,6% | +21% | 0,26 |
> | 4808 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Onda ·OND | **+151% · −59,2%** | +50% · −16,4% | +32% | −9,5% | 0,9 | 122 d | −13,2% | +20% | 0,26 |
> | 4809 | VWAP ·TEN + BB explosão ·TEN + Bollinger ·TEN + Onda ·OND | **+125% · −47,1%** | +41% · −12,5% | +26% | −14,8% | 0,9 | 121 d | −14,7% | +21% | 0,35 |
> | 4810 | Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+90% · −25,4%** | +37% · −7,2% | +27% | −8,3% | 0,8 | 367 d | −9,3% | +11% | 0,11 |
> | 4811 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR | **+120% · −53,0%** | +42% · −13,3% | +26% | −11,2% | 1,5 | 130 d | −14,1% | +13% | 0,20 |
> | 4812 | Donchian ·TEN + Onda ·OND | **+116% · −30,1%** | +62% · −14,2% | +36% | −11,0% | 1,8 | 185 d | −13,4% | +29% | 0,27 |
> | 4813 | BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN | **+139% · −49,3%** | +55% · −18,3% | +30% | −10,9% | 1,7 | 130 d | −18,9% | +16% | 0,40 |
> | 4814 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Bollinger ·TEN | **+156% · −60,1%** | +49% · −17,1% | +28% | −9,1% | 1,2 | 128 d | −12,9% | +18% | 0,42 |
> | 4815 | ADX ·ADX + VWAP ·TEN + 1ª vela 80 ·VEL ⚠️ | **+122% · −38,5%** | +49% · −12,9% | +31% | −10,0% | 0,9 | 131 d | −10,9% | +15% | 0,33 |
> | 4816 | BB explosão ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Onda ·OND ⚠️ | **+118% · −36,9%** | +38% · −9,0% | +27% | −8,9% | 1,0 | 160 d | −10,6% | +14% | 0,00 |
> | 4817 | Quinta ·QUI + Onda ·OND ⚠️ | **+48% · −20,0%** | +30% · −8,2% | +24% | −8,6% | 0,5 | 263 d | −9,3% | +12% | −0,26 |
> | 4818 | VWAP ·TEN + BB explosão ·TEN + MACD ·TEN | **+75% · −45,4%** | +36% · −16,0% | +26% | −18,6% | 0,8 | 120 d | −16,0% | +16% | 0,48 |
> | 4819 | ADX ·ADX + Rompe 200 ·ROM | **+75% · −29,3%** | +45% · −14,4% | +28% | −9,1% | 0,9 | 161 d | −10,3% | +20% | 0,03 |
> | 4820 | BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM + Onda ·OND | **+85% · −36,8%** | +31% · −7,9% | +23% | −8,8% | 0,9 | 171 d | −10,1% | +17% | 0,02 |
> | 4821 | ADX ·ADX + VWAP ·TEN + GPS médias ·TEN | **+134% · −48,2%** | +56% · −17,2% | +32% | −11,1% | 1,5 | 130 d | −14,7% | +22% | 0,37 |
> | 4822 | VWAP ·TEN + Donchian ·TEN | **+93% · −35,4%** | +53% · −17,2% | +31% | −17,0% | 1,8 | 159 d | −15,7% | +14% | 0,55 |
> | 4823 | ADX ·ADX + VWAP ·TEN + Rompe 200 ·ROM | **+88% · −35,3%** | +39% · −11,3% | +26% | −9,8% | 0,9 | 161 d | −10,3% | +14% | 0,19 |
> | 4824 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI ⚠️ | **+100% · −52,5%** | +44% · −19,2% | +27% | −7,3% | 1,1 | 128 d | −12,7% | +18% | 0,07 |
> | 4825 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+132% · −59,8%** | +40% · −12,7% | +27% | −9,6% | 0,9 | 130 d | −11,5% | +19% | 0,13 |
> | 4826 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+135% · −54,9%** | +44% · −15,0% | +29% | −7,8% | 1,3 | 196 d | −10,7% | +21% | 0,21 |
> | 4827 | VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM | **+56% · −48,4%** | +30% · −15,2% | +22% | −15,2% | 0,7 | 121 d | −15,2% | +8% | 0,32 |
> | 4828 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + MACD ·TEN + Onda ·OND | **+150% · −64,6%** | +45% · −14,7% | +30% | −12,5% | 0,9 | 128 d | −12,3% | +21% | 0,33 |
> | 4829 | VWAP ·TEN + BB explosão ·TEN + Bollinger ·TEN | **+94% · −42,5%** | +40% · −15,0% | +25% | −14,5% | 0,9 | 121 d | −17,4% | +12% | 0,47 |
> | 4830 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM | **+107% · −57,4%** | +40% · −16,4% | +26% | −9,9% | 1,0 | 129 d | −12,2% | +15% | 0,29 |

> [!example]- Combinações 4831 a 4860 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4831 | BB explosão ·TEN + 1ª vela 80 ·VEL + Bollinger ·TEN + Onda ·OND ⚠️ | **+171% · −40,8%** | +47% · −10,4% | +29% | −10,2% | 1,2 | 137 d | −12,0% | +14% | 0,25 |
> | 4832 | BB explosão ·TEN + Pullback ·PUL + Onda ·OND | **+91% · −36,5%** | +39% · −12,2% | +28% | −9,4% | 1,4 | 137 d | −12,7% | +23% | 0,10 |
> | 4833 | BB explosão ·TEN + Pôr do sol ·POR + Rompe 200 ·ROM | **+56% · −30,0%** | +28% · −9,4% | +20% | −6,1% | 1,0 | 150 d | −11,1% | +12% | −0,08 |
> | 4834 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Onda ·OND | **+134% · −59,0%** | +41% · −12,4% | +27% | −9,7% | 0,9 | 130 d | −11,6% | +18% | 0,14 |
> | 4835 | ADX ·ADX + VWAP ·TEN + MACD ·TEN | **+111% · −44,4%** | +46% · −14,8% | +30% | −11,5% | 0,9 | 161 d | −10,7% | +14% | 0,37 |
> | 4836 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+147% · −49,8%** | +46% · −13,2% | +29% | −9,9% | 1,7 | 197 d | −12,9% | +17% | 0,35 |
> | 4837 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + GPS médias ·TEN | **+137% · −65,8%** | +52% · −20,7% | +31% | −11,6% | 1,4 | 128 d | −17,0% | +18% | 0,45 |
> | 4838 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + MACD ·TEN | **+128% · −63,3%** | +45% · −18,7% | +29% | −11,7% | 1,1 | 129 d | −12,6% | +20% | 0,40 |
> | 4839 | BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN + Onda ·OND | **+130% · −38,5%** | +39% · −9,2% | +25% | −8,0% | 1,1 | 144 d | −11,6% | +16% | 0,05 |
> | 4840 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+181% · −58,2%** | +48% · −12,1% | +31% | −13,9% | 1,6 | 197 d | −11,9% | +25% | 0,36 |
> | 4841 | BB explosão ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+120% · −37,5%** | +38% · −9,3% | +27% | −9,1% | 1,0 | 163 d | −10,7% | +13% | 0,06 |
> | 4842 | VWAP ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+92% · −34,1%** | +39% · −11,8% | +28% | −17,4% | 0,7 | 187 d | −10,1% | +17% | 0,33 |
> | 4843 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+143% · −48,9%** | +46% · −11,4% | +29% | −8,7% | 1,6 | 197 d | −12,6% | +23% | 0,10 |
> | 4844 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Onda ·OND | **+131% · −58,9%** | +41% · −12,6% | +27% | −11,1% | 0,9 | 130 d | −12,0% | +21% | 0,25 |
> | 4845 | ADX ·ADX + MACD ·TEN | **+100% · −35,8%** | +56% · −17,7% | +35% | −11,8% | 1,0 | 161 d | −11,1% | +19% | 0,24 |
> | 4846 | BB explosão ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+92% · −32,1%** | +38% · −10,2% | +23% | −5,3% | 1,2 | 133 d | −12,7% | +14% | 0,08 |
> | 4847 | BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN + Onda ·OND | **+129% · −40,2%** | +40% · −9,8% | +25% | −9,8% | 1,2 | 137 d | −12,2% | +17% | 0,19 |
> | 4848 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL ⚠️ | **+130% · −47,5%** | +53% · −17,7% | +32% | −12,4% | 1,5 | 131 d | −17,0% | +21% | 0,33 |
> | 4849 | BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM | **+94% · −48,6%** | +43% · −17,8% | +27% | −10,8% | 1,6 | 134 d | −16,9% | +12% | 0,36 |
> | 4850 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR + Onda ·OND | **+145% · −47,7%** | +46% · −10,7% | +29% | −8,6% | 1,7 | 197 d | −13,0% | +25% | 0,10 |
> | 4851 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR | **+96% · −44,1%** | +43% · −15,4% | +27% | −9,3% | 1,6 | 134 d | −16,1% | +16% | 0,01 |
> | 4852 | ADX ·ADX + BB explosão ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+129% · −53,8%** | +44% · −14,0% | +28% | −6,7% | 0,9 | 130 d | −12,2% | +19% | 0,05 |
> | 4853 | VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL ⚠️ | **+87% · −44,0%** | +39% · −16,1% | +27% | −16,8% | 0,8 | 124 d | −13,9% | +17% | 0,37 |
> | 4854 | BB explosão ·TEN + Quinta ·QUI + Rompe 200 ·ROM ⚠️ | **+54% · −32,0%** | +27% · −10,1% | +20% | −6,3% | 1,1 | 249 d | −10,4% | +10% | 0,02 |
> | 4855 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+184% · −54,0%** | +54% · −10,9% | +33% | −10,6% | 1,6 | 197 d | −12,4% | +26% | 0,30 |
> | 4856 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI ⚠️ | **+108% · −58,5%** | +40% · −16,4% | +26% | −8,2% | 1,0 | 159 d | −11,6% | +16% | 0,16 |
> | 4857 | ADX ·ADX + VWAP ·TEN + Onda ·OND | **+107% · −42,6%** | +46% · −13,6% | +30% | −12,5% | 0,7 | 131 d | −11,7% | +15% | 0,25 |
> | 4858 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL ⚠️ | **+143% · −57,0%** | +47% · −15,4% | +30% | −10,7% | 0,9 | 128 d | −13,4% | +20% | 0,35 |
> | 4859 | ADX ·ADX + Pullback ·PUL | **+93% · −31,2%** | +52% · −14,8% | +32% | −8,7% | 1,5 | 161 d | −13,2% | +16% | −0,07 |
> | 4860 | Donchian ·TEN + BB explosão ·TEN + Pôr do sol ·POR | **+116% · −43,4%** | +48% · −14,9% | +28% | −6,6% | 1,7 | 197 d | −15,2% | +14% | 0,04 |

> [!example]- Combinações 4861 a 4890 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4861 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL ⚠️ | **+157% · −52,9%** | +50% · −15,2% | +31% | −14,2% | 1,6 | 197 d | −13,2% | +17% | 0,41 |
> | 4862 | BB explosão ·TEN + GPS médias ·TEN + Bollinger ·TEN + Onda ·OND | **+170% · −55,0%** | +52% · −15,7% | +30% | −11,4% | 1,5 | 133 d | −16,2% | +21% | 0,30 |
> | 4863 | VWAP ·TEN + BB explosão ·TEN + Pullback ·PUL | **+71% · −46,5%** | +34% · −15,4% | +25% | −13,3% | 1,4 | 159 d | −13,5% | +8% | 0,22 |
> | 4864 | Donchian ·TEN + BB explosão ·TEN + Quinta ·QUI ⚠️ | **+114% · −45,2%** | +47% · −15,9% | +28% | −6,6% | 1,7 | 197 d | −14,6% | +12% | 0,12 |
> | 4865 | ADX ·ADX + BB explosão ·TEN + 1ª vela 80 ·VEL ⚠️ | **+137% · −50,7%** | +55% · −17,9% | +33% | −7,0% | 1,0 | 127 d | −15,1% | +20% | 0,28 |
> | 4866 | BB explosão ·TEN + GPS médias ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+120% · −49,1%** | +43% · −13,1% | +28% | −10,5% | 1,5 | 140 d | −14,8% | +21% | 0,07 |
> | 4867 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN | **+155% · −49,4%** | +60% · −17,0% | +34% | −8,8% | 1,4 | 159 d | −13,9% | +15% | 0,38 |
> | 4868 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR | **+110% · −57,7%** | +40% · −15,9% | +26% | −8,1% | 1,0 | 159 d | −11,7% | +16% | 0,14 |
> | 4869 | VWAP ·TEN + Pôr do sol ·POR | **+33% · −21,5%** | +23% · −9,2% | +19% | −15,2% | 0,3 | 210 d | −10,3% | +8% | −0,02 |
> | 4870 | Donchian ·TEN + BB explosão ·TEN + 1ª vela 80 ·VEL ⚠️ | **+155% · −47,6%** | +58% · −14,8% | +34% | −9,9% | 1,6 | 197 d | −13,9% | +19% | 0,33 |
> | 4871 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL ⚠️ | **+111% · −34,6%** | +44% · −11,9% | +30% | −13,3% | 1,1 | 233 d | −10,8% | +17% | 0,26 |
> | 4872 | ADX ·ADX + VWAP ·TEN + Quinta ·QUI ⚠️ | **+87% · −36,8%** | +39% · −11,3% | +26% | −7,3% | 0,8 | 161 d | −11,2% | +11% | 0,05 |
> | 4873 | ADX ·ADX + VWAP ·TEN + Pullback ·PUL | **+106% · −40,4%** | +44% · −12,8% | +29% | −7,8% | 1,3 | 161 d | −12,6% | +12% | 0,12 |
> | 4874 | VWAP ·TEN + BB explosão ·TEN + Quinta ·QUI ⚠️ | **+55% · −41,9%** | +29% · −13,5% | +22% | −12,8% | 0,8 | 128 d | −13,8% | +10% | 0,09 |
> | 4875 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN + Onda ·OND | **+186% · −63,7%** | +60% · −18,3% | +35% | −8,1% | 1,6 | 191 d | −13,5% | +27% | 0,32 |
> | 4876 | BB explosão ·TEN + GPS médias ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+156% · −52,6%** | +51% · −14,9% | +32% | −12,2% | 1,4 | 133 d | −16,0% | +19% | 0,29 |
> | 4877 | BB explosão ·TEN + GPS médias ·TEN + Pôr do sol ·POR + Onda ·OND | **+122% · −49,6%** | +43% · −13,3% | +28% | −10,5% | 1,4 | 140 d | −15,0% | +21% | 0,07 |
> | 4878 | BB explosão ·TEN + Pôr do sol ·POR + Bollinger ·TEN | **+94% · −33,5%** | +38% · −10,8% | +23% | −5,3% | 1,1 | 133 d | −13,3% | +16% | −0,01 |
> | 4879 | BB explosão ·TEN + GPS médias ·TEN + Rompe 200 ·ROM + Onda ·OND | **+120% · −51,1%** | +43% · −14,0% | +28% | −12,2% | 1,4 | 140 d | −15,5% | +22% | 0,28 |
> | 4880 | BB explosão ·TEN + GPS médias ·TEN | **+85% · −46,6%** | +53% · −25,3% | +31% | −14,3% | 1,5 | 134 d | −24,2% | +13% | 0,60 |
> | 4881 | ADX ·ADX + 1ª vela 80 ·VEL ⚠️ | **+109% · −32,0%** | +60% · −15,9% | +36% | −8,8% | 0,8 | 130 d | −12,9% | +20% | 0,29 |
> | 4882 | ADX ·ADX + Donchian ·TEN + BB explosão ·TEN | **+162% · −62,3%** | +66% · −24,5% | +36% | −8,2% | 1,6 | 191 d | −15,4% | +19% | 0,44 |
> | 4883 | VWAP ·TEN + Bollinger ·TEN | **+67% · −25,6%** | +39% · −12,8% | +24% | −17,4% | 1,1 | 210 d | −11,2% | +13% | 0,50 |
> | 4884 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR + Onda ·OND | **+131% · −52,8%** | +44% · −13,5% | +28% | −6,8% | 0,9 | 138 d | −12,4% | +19% | 0,04 |
> | 4885 | BB explosão ·TEN + Rompe 200 ·ROM + Bollinger ·TEN | **+94% · −35,4%** | +38% · −11,7% | +23% | −7,5% | 1,2 | 133 d | −14,1% | +12% | 0,19 |
> | 4886 | ADX ·ADX + Quinta ·QUI ⚠️ | **+74% · −27,5%** | +44% · −13,8% | +28% | −8,8% | 0,8 | 161 d | −11,6% | +14% | −0,04 |
> | 4887 | BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM ⚠️ | **+87% · −36,1%** | +37% · −12,6% | +25% | −9,0% | 1,0 | 273 d | −11,0% | +17% | 0,18 |
> | 4888 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Onda ·OND | **+141% · −57,7%** | +42% · −12,1% | +28% | −13,2% | 1,5 | 197 d | −13,1% | +20% | 0,34 |
> | 4889 | BB explosão ·TEN + MACD ·TEN + Quinta ·QUI ⚠️ | **+76% · −36,2%** | +34% · −11,7% | +25% | −9,1% | 1,1 | 220 d | −11,3% | +18% | 0,05 |
> | 4890 | ADX ·ADX + VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN | **+160% · −67,4%** | +56% · −20,7% | +32% | −9,9% | 1,5 | 191 d | −14,2% | +17% | 0,46 |

> [!example]- Combinações 4891 a 4920 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4891 | ADX ·ADX + BB explosão ·TEN + Rompe 200 ·ROM + Onda ·OND | **+129% · −52,7%** | +44% · −13,6% | +28% | −8,1% | 0,9 | 138 d | −12,9% | +20% | 0,19 |
> | 4892 | Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Onda ·OND | **+142% · −53,5%** | +47% · −12,0% | +29% | −10,4% | 1,5 | 197 d | −13,6% | +22% | 0,29 |
> | 4893 | BB explosão ·TEN + MACD ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+142% · −43,4%** | +44% · −10,6% | +31% | −12,8% | 1,0 | 210 d | −11,4% | +15% | 0,25 |
> | 4894 | ADX ·ADX + VWAP ·TEN + Pôr do sol ·POR | **+89% · −38,7%** | +39% · −11,4% | +25% | −7,5% | 0,7 | 161 d | −11,9% | +10% | 0,06 |
> | 4895 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Onda ·OND | **+159% · −59,9%** | +47% · −12,5% | +30% | −14,7% | 1,5 | 197 d | −13,6% | +25% | 0,43 |
> | 4896 | BB explosão ·TEN + GPS médias ·TEN + Onda ·OND | **+110% · −50,9%** | +50% · −18,9% | +31% | −14,2% | 1,3 | 140 d | −20,1% | +22% | 0,34 |
> | 4897 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM | **+118% · −61,3%** | +42% · −15,1% | +27% | −12,5% | 1,5 | 197 d | −14,7% | +11% | 0,41 |
> | 4898 | BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM + Onda ·OND | **+105% · −41,9%** | +37% · −9,6% | +27% | −11,7% | 0,9 | 233 d | −11,2% | +18% | 0,21 |
> | 4899 | VWAP ·TEN + BB explosão ·TEN + Rompe 200 ·ROM + Onda ·OND | **+81% · −44,1%** | +33% · −12,1% | +24% | −15,4% | 0,8 | 137 d | −13,0% | +20% | 0,28 |
> | 4900 | ADX ·ADX + BB explosão ·TEN + Pôr do sol ·POR | **+103% · −51,5%** | +45% · −18,6% | +27% | −6,8% | 1,0 | 161 d | −12,8% | +20% | −0,02 |
> | 4901 | BB explosão ·TEN + 1ª vela 80 ·VEL + Rompe 200 ·ROM + Onda ·OND ⚠️ | **+118% · −41,3%** | +39% · −9,9% | +27% | −10,8% | 1,0 | 284 d | −11,3% | +15% | 0,20 |
> | 4902 | VWAP ·TEN + 1ª vela 80 ·VEL ⚠️ | **+62% · −27,1%** | +37% · −13,7% | +27% | −18,8% | 0,6 | 181 d | −11,6% | +16% | 0,38 |
> | 4903 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN + Onda ·OND | **+164% · −55,7%** | +52% · −13,4% | +33% | −11,5% | 1,5 | 197 d | −14,3% | +28% | 0,38 |
> | 4904 | Donchian ·TEN + BB explosão ·TEN + Rompe 200 ·ROM | **+114% · −50,2%** | +48% · −16,3% | +28% | −8,4% | 1,5 | 197 d | −16,0% | +10% | 0,37 |
> | 4905 | ADX ·ADX + Onda ·OND | **+97% · −33,6%** | +56% · −16,1% | +35% | −12,1% | 0,6 | 131 d | −13,5% | +18% | 0,10 |
> | 4906 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN + Onda ·OND | **+121% · −61,5%** | +46% · −17,5% | +29% | −12,5% | 0,8 | 130 d | −14,8% | +20% | 0,32 |
> | 4907 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + MACD ·TEN | **+137% · −56,7%** | +47% · −16,0% | +30% | −15,6% | 1,5 | 197 d | −15,4% | +16% | 0,54 |
> | 4908 | Donchian ·TEN + BB explosão ·TEN + MACD ·TEN | **+136% · −50,4%** | +55% · −18,4% | +33% | −12,1% | 1,5 | 197 d | −16,8% | +18% | 0,52 |
> | 4909 | ADX ·ADX + Pôr do sol ·POR | **+76% · −31,0%** | +45% · −13,7% | +27% | −8,2% | 0,6 | 161 d | −12,6% | +12% | −0,11 |
> | 4910 | BB explosão ·TEN + Bollinger ·TEN + Onda ·OND | **+118% · −40,1%** | +46% · −13,6% | +28% | −11,0% | 1,0 | 144 d | −15,9% | +15% | 0,24 |
> | 4911 | BB explosão ·TEN + Bollinger ·TEN | **+83% · −35,2%** | +47% · −18,2% | +26% | −8,6% | 1,0 | 137 d | −20,3% | +13% | 0,35 |
> | 4912 | VWAP ·TEN + Onda ·OND | **+52% · −27,6%** | +34% · −14,1% | +26% | −21,5% | 0,3 | 222 d | −11,6% | +15% | 0,31 |
> | 4913 | VWAP ·TEN + BB explosão ·TEN + Pôr do sol ·POR | **+57% · −38,1%** | +29% · −12,8% | +22% | −13,0% | 0,7 | 159 d | −14,4% | +12% | 0,07 |
> | 4914 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN + Onda ·OND | **+132% · −57,9%** | +48% · −14,6% | +30% | −15,2% | 1,3 | 197 d | −16,1% | +22% | 0,43 |
> | 4915 | ADX ·ADX + BB explosão ·TEN + Onda ·OND | **+118% · −55,7%** | +52% · −20,5% | +32% | −9,3% | 0,7 | 138 d | −16,9% | +19% | 0,24 |
> | 4916 | VWAP ·TEN + Donchian ·TEN + BB explosão ·TEN | **+108% · −58,5%** | +49% · −19,9% | +30% | −15,3% | 1,3 | 197 d | −19,1% | +10% | 0,59 |
> | 4917 | Donchian ·TEN + BB explosão ·TEN | **+104% · −48,0%** | +61% · −25,2% | +34% | −10,5% | 1,4 | 202 d | −23,0% | +10% | 0,66 |
> | 4918 | BB explosão ·TEN + Pôr do sol ·POR | **+47% · −29,2%** | +31% · −14,3% | +22% | −6,2% | 0,7 | 155 d | −16,0% | +12% | −0,34 |
> | 4919 | ADX ·ADX + VWAP ·TEN + BB explosão ·TEN | **+98% · −60,2%** | +46% · −23,5% | +29% | −11,3% | 0,9 | 159 d | −16,0% | +16% | 0,43 |
> | 4920 | BB explosão ·TEN + MACD ·TEN + Rompe 200 ·ROM | **+76% · −38,0%** | +35% · −12,6% | +25% | −10,7% | 1,0 | 233 d | −12,8% | +16% | 0,21 |

> [!example]- Combinações 4921 a 4943 de 4943 (clique para abrir)
> | # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano | 1 contrato: pior queda | Retorno ÷ queda (treino) | Dias no vermelho | Pior 60 dias | Pior ano | Correlação |
> |---|---|---|---|---|---|---|---|---|---|---|
> | 4921 | ADX ·ADX + BB explosão ·TEN + Rompe 200 ·ROM | **+101% · −51,5%** | +45% · −18,7% | +27% | −7,3% | 1,0 | 197 d | −13,5% | +16% | 0,21 |
> | 4922 | Donchian ·TEN + BB explosão ·TEN + Onda ·OND | **+132% · −53,8%** | +55% · −16,6% | +33% | −11,8% | 1,3 | 202 d | −17,8% | +26% | 0,38 |
> | 4923 | ADX ·ADX + BB explosão ·TEN + MACD ·TEN | **+124% · −57,9%** | +52% · −22,1% | +32% | −9,4% | 1,0 | 197 d | −14,0% | +24% | 0,33 |
> | 4924 | BB explosão ·TEN + Pôr do sol ·POR + Onda ·OND | **+76% · −36,6%** | +35% · −11,3% | +25% | −9,7% | 0,7 | 186 d | −13,2% | +15% | −0,05 |
> | 4925 | ADX ·ADX + VWAP ·TEN | **+78% · −39,9%** | +48% · −20,3% | +30% | −12,3% | 0,6 | 161 d | −16,9% | +8% | 0,33 |
> | 4926 | BB explosão ·TEN + Quinta ·QUI + Onda ·OND ⚠️ | **+74% · −35,5%** | +34% · −11,1% | +25% | −9,8% | 0,8 | 258 d | −13,1% | +15% | −0,06 |
> | 4927 | 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+80% · −24,2%** | +45% · −11,3% | +32% | −13,8% | 0,6 | 367 d | −12,8% | +8% | 0,29 |
> | 4928 | ADX ·ADX | **+65% · −30,8%** | +65% · −30,8% | +38% | −15,4% | 0,4 | 161 d | −23,5% | +12% | — |
> | 4929 | BB explosão ·TEN + Rompe 200 ·ROM + Onda ·OND | **+74% · −40,4%** | +35% · −12,4% | +25% | −12,0% | 0,7 | 284 d | −13,9% | +16% | 0,19 |
> | 4930 | BB explosão ·TEN + MACD ·TEN + Onda ·OND | **+96% · −42,4%** | +42% · −12,8% | +30% | −13,9% | 0,7 | 234 d | −14,6% | +16% | 0,27 |
> | 4931 | BB explosão ·TEN + 1ª vela 80 ·VEL + Onda ·OND ⚠️ | **+108% · −42,0%** | +44% · −13,3% | +30% | −12,7% | 0,8 | 287 d | −14,7% | +12% | 0,22 |
> | 4932 | BB explosão ·TEN + Quinta ·QUI ⚠️ | **+46% · −31,5%** | +30% · −15,7% | +22% | −6,4% | 0,8 | 262 d | −15,1% | +10% | −0,14 |
> | 4933 | BB explosão ·TEN + 1ª vela 80 ·VEL ⚠️ | **+77% · −33,0%** | +45% · −16,0% | +30% | −11,8% | 0,8 | 285 d | −15,9% | +15% | 0,16 |
> | 4934 | VWAP ·TEN | **+25% · −19,7%** | +25% · −19,7% | +21% | −30,3% | 0,2 | 210 d | −16,3% | +4% | — |
> | 4935 | ADX ·ADX + BB explosão ·TEN | **+91% · −54,5%** | +56% · −30,5% | +32% | −10,8% | 0,8 | 233 d | −19,7% | +19% | 0,40 |
> | 4936 | VWAP ·TEN + BB explosão ·TEN + Onda ·OND | **+73% · −44,6%** | +36% · −15,0% | +26% | −18,6% | 0,6 | 233 d | −17,0% | +21% | 0,36 |
> | 4937 | 1ª vela 80 ·VEL ⚠️ | **+47% · −13,6%** | +47% · −13,6% | +32% | −12,8% | 0,6 | 298 d | −16,0% | +9% | — |
> | 4938 | BB explosão ·TEN + Rompe 200 ·ROM | **+47% · −34,3%** | +31% · −17,0% | +22% | −9,8% | 0,7 | 267 d | −17,2% | +7% | 0,19 |
> | 4939 | BB explosão ·TEN + MACD ·TEN | **+67% · −37,8%** | +41% · −19,5% | +29% | −14,7% | 0,7 | 267 d | −18,4% | +19% | 0,35 |
> | 4940 | VWAP ·TEN + BB explosão ·TEN | **+48% · −44,1%** | +33% · −21,8% | +24% | −19,9% | 0,6 | 233 d | −21,8% | +7% | 0,56 |
> | 4941 | BB explosão ·TEN + Onda ·OND | **+66% · −41,1%** | +41% · −19,7% | +29% | −14,9% | 0,5 | 302 d | −20,2% | +13% | 0,22 |
> | 4942 | Onda ·OND | **+41% · −19,8%** | +41% · −19,8% | +30% | −18,7% | 0,2 | 422 d | −18,8% | +5% | — |
> | 4943 | BB explosão ·TEN | **+39% · −33,3%** | +39% · −33,3% | +26% | −14,0% | 0,5 | 287 d | −31,4% | +3% | — |

*⚠️ = tem setup com dia da semana escolhido pelo autor do vídeo (fora da recomendação). Ao ano e pior queda com 1 contrato por R\$ 10 mil (capital dividido). Correlação = média entre os setups da combinação. **Retorno ÷ queda, dias no vermelho e pior 60 dias** são medidos no TREINO (até 2023) e **sem o CDI**: é com eles que a recomendada é escolhida, e o CDI pingando todo dia preencheria as quedas pequenas e esconderia a diferença entre as combinações. Retorno ÷ queda de 2 = rendeu por ano o dobro da pior queda. **1% dividido** = 1% de risco repartido entre os setups (0,5% cada com 2, 0,33% com 3, 0,25% com 4): o mesmo risco total em todas as linhas, a comparação mais justa entre combinações. **1% por setup** = cada setup arrisca 1% do capital total em cada operação (veja abaixo) — com mais setups, mais risco aberto ao mesmo tempo, por isso as combinações grandes rendem e caem mais.*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

![Correlação mensal entre os setups](setups/img/carteira_correlacao.png)

*Correlação do resultado mensal, medido com risco de 1% do capital por operação em cada setup — é como a carteira é operada, e é a mesma definição usada nos estudos.*

**Famílias (a sigla ·XXX ao lado de cada setup)**

| Sigla | Setups da família | Correlação média dentro dela |
|---|---|---|
| **·TEN** ⚠️ | VWAP, Donchian, BB explosão, GPS médias, IFR, MACD, Bollinger, Tendência | 0,45 |
| **·ADX** | ADX | — |
| **·VEL** | 1ª vela 80 | — |
| **·QUI** | Quinta | — |
| **·PUL** | Pullback | — |
| **·POR** | Pôr do sol | — |
| **·ROM** | Rompe 200 | — |
| **·OND** | Onda | — |

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
