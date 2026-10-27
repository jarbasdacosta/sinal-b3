---
title: Primeira Vela de 80 Minutos
date: 2026-10-27
tags: [setup, win]
---

**Se a primeira vela de 80 minutos do dia fecha forte (quase sem sombra contra), entra a favor às 10h20 com alvo longo, break even e stop móvel.**

🟡 promissor · Mini índice (WIN) · gráfico de 80 minutos · só a primeira vela do dia (9h00–10h20)

🎬 **Vídeo de origem:** [Arthur 777 – "encontrei algo muito estranho no mini índice"](https://youtu.be/UFLCVkzcghU) · testado de forma independente nos nossos dados em 27/10/2026 · página gerada em 27/10/2026 08:55 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 38.481** na versão ATR 0,15 / 1,28 com o capital no CDI (+31% ao ano · pior queda −12%)
> - **R\$ 27.296** na versão como no vídeo: ter–qui, pontos fixos com o capital no CDI (+23% ao ano · pior queda −14%)
> - **R\$ 27.639** na versão ter–qui, sombra em ATR com o capital no CDI (+23% ao ano · pior queda −17%)
> - **R\$ 23.271** na versão todos os dias, sombra em ATR com o capital no CDI (+19% ao ano · pior queda −20%)
> - **R\$ 38.108** na versão 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR com o capital no CDI (+31% ao ano · pior queda −9%)
> - **R\$ 18.119** só no CDI (+13% ao ano)
> - **R\$ 16.732** comprado no Ibovespa (+11% ao ano · pior queda −21%)
>
> - **R\$ 66.119** na versão ATR 0,15 / 1,28 **arriscando 1% do capital por operação** (+47% ao ano · pior queda −14%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/primeira-vela-80-min_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Primeira vela** | a vela das 9h00 (80 min) **fecha positiva** | a vela das 9h00 **fecha negativa** |
| **2. Força** | **sombra superior** de no máximo 300 pts (em ATR aqui) | **sombra inferior** de no máximo 300 pts |
| **Entrada** | compra a mercado às 10h20 | vende a mercado às 10h20 |
| **Stop · alvo** | 600 · 2.500 pts no vídeo → em ATR aqui | igual |
| **Break even** | quando uma vela de 80 min fecha no lucro, o stop vai para o preço de entrada | igual |
| **Stop móvel** | depois de uma vela fechar com 300+ pts de lucro, stop na mínima de cada vela que fecha | na máxima de cada vela que fecha |

- **Versão principal (escolhida só pelo treino): ATR 0,15 / 1,28** — stop 0,154 ATR · alvo 1,285 ATR (8,3× o stop); hoje ≈ 566 pts de stop e 4.714 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 3.670 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas.

### As versões testadas

| | ATR 0,15 / 1,28 (principal) | como no vídeo: ter–qui, pontos fixos | ter–qui, sombra em ATR | todos os dias, sombra em ATR | 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR |
|---|---|---|---|---|---|
| Regra | stop 0,154 ATR · alvo 1,285 ATR (8,3× o stop) | stop 600 · alvo 2.500 pts | stop 600 · alvo 2.500 pts | stop 600 · alvo 2.500 pts | stop 300 · alvo 2.500 pts |
| Acerto | 22% | 35% | 33% | 32% | 21% |
| Payoff | 5,15 | 2,26 | 2,37 | 2,26 | 5,26 |
| Treino → teste (pts por operação) | +41,9 → +119,9 | −1,1 → +90,7 | −19,8 → +106,3 | −4,5 → +41,9 | +51,6 → +109,2 |
| Retorno ao ano (+ CDI) | +31,4% | +22,6% | +22,9% | +18,7% | +31,1% |
| Pior queda (+ CDI) | −11,7% | −14,4% | −16,9% | −20,2% | −9,0% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,15 / 1,28

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 208 | 264 | 472 |
| Operações por mês | 7,7 | 7,8 | 7,7 |
| Taxa de acerto | 19,2% | 23,5% | 21,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 63% / 14% | 3% / 56% / 17% | 2% / 59% / 16% |
| Stop típico | 300 pts | 285 pts | 293 pts |
| Ganho médio · perda média | +1.311 · −260 pts | +1.358 · −260 pts | +1.340 · −260 pts |
| Payoff (ganho médio ÷ perda média) | 5,04 | 5,22 | 5,15 |
| Fator de lucro (total ganho ÷ total perdido) | 1,20 | 1,60 | 1,42 |
| Resultado médio por operação | +41,9 pts (+56,9 sem custo) | +119,9 pts (+134,9 sem custo) | +85,5 pts (+100,5 sem custo) |
| **Lucro líquido** | **+8.716 pts · R\$ 1.743** | **+31.653 pts · R\$ 6.331** | **+40.369 pts · R\$ 8.074** |
| Pior queda (drawdown) | −8.323 pts · −R\$ 1.665 | −7.481 pts · −R\$ 1.496 | −8.323 pts · −R\$ 1.665 |
| Maior sequência de perdas | 19 seguidas | 18 seguidas | 19 seguidas |
| Compras: acerto · lucro | 21% · +8.696 pts | 24% · +15.750 pts | 23% · +24.446 pts |
| Vendas: acerto · lucro | 17% · +20 pts | 23% · +15.903 pts | 21% · +15.923 pts |

### Versão como no vídeo: ter–qui, pontos fixos

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 206 | 256 | 462 |
| Operações por mês | 7,6 | 7,5 | 7,6 |
| Taxa de acerto | 32,5% | 36,3% | 34,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 44% / 1% | 2% / 37% / 7% | 3% / 40% / 5% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +834 · −403 pts | +898 · −370 pts | +871 · −385 pts |
| Payoff (ganho médio ÷ perda média) | 2,07 | 2,43 | 2,26 |
| Fator de lucro (total ganho ÷ total perdido) | 1,00 | 1,39 | 1,20 |
| Resultado médio por operação | −1,1 pts (+13,9 sem custo) | +90,7 pts (+105,7 sem custo) | +49,8 pts (+64,8 sem custo) |
| **Lucro líquido** | **−235 pts · −R\$ 47** | **+23.230 pts · R\$ 4.646** | **+22.995 pts · R\$ 4.599** |
| Pior queda (drawdown) | −11.090 pts · −R\$ 2.218 | −6.225 pts · −R\$ 1.245 | −11.090 pts · −R\$ 2.218 |
| Maior sequência de perdas | 11 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 33% · −1.580 pts | 34% · +11.095 pts | 34% · +9.515 pts |
| Vendas: acerto · lucro | 32% · +1.345 pts | 38% · +12.135 pts | 36% · +13.480 pts |

### Versão ter–qui, sombra em ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 208 | 264 | 472 |
| Operações por mês | 7,7 | 7,8 | 7,7 |
| Taxa de acerto | 30,3% | 36,0% | 33,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 46% / 2% | 4% / 39% / 7% | 3% / 42% / 5% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +874 · −408 pts | +988 · −389 pts | +942 · −398 pts |
| Payoff (ganho médio ÷ perda média) | 2,14 | 2,54 | 2,37 |
| Fator de lucro (total ganho ÷ total perdido) | 0,93 | 1,43 | 1,19 |
| Resultado médio por operação | −19,8 pts (−4,8 sem custo) | +106,3 pts (+121,3 sem custo) | +50,8 pts (+65,8 sem custo) |
| **Lucro líquido** | **−4.120 pts · −R\$ 824** | **+28.075 pts · R\$ 5.615** | **+23.955 pts · R\$ 4.791** |
| Pior queda (drawdown) | −12.555 pts · −R\$ 2.511 | −5.470 pts · −R\$ 1.094 | −12.555 pts · −R\$ 2.511 |
| Maior sequência de perdas | 14 seguidas | 11 seguidas | 14 seguidas |
| Compras: acerto · lucro | 31% · −3.345 pts | 36% · +14.985 pts | 34% · +11.640 pts |
| Vendas: acerto · lucro | 30% · −775 pts | 36% · +13.090 pts | 33% · +12.315 pts |

### Versão todos os dias, sombra em ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 349 | 443 | 792 |
| Operações por mês | 12,9 | 13,0 | 13,0 |
| Taxa de acerto | 31,2% | 33,2% | 32,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 45% / 4% | 3% / 43% / 7% | 3% / 44% / 6% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +883 · −407 pts | +934 · −401 pts | +912 · −404 pts |
| Payoff (ganho médio ÷ perda média) | 2,17 | 2,33 | 2,26 |
| Fator de lucro (total ganho ÷ total perdido) | 0,98 | 1,16 | 1,08 |
| Resultado médio por operação | −4,5 pts (+10,5 sem custo) | +41,9 pts (+56,9 sem custo) | +21,5 pts (+36,5 sem custo) |
| **Lucro líquido** | **−1.555 pts · −R\$ 311** | **+18.575 pts · R\$ 3.715** | **+17.020 pts · R\$ 3.404** |
| Pior queda (drawdown) | −11.440 pts · −R\$ 2.288 | −14.620 pts · −R\$ 2.924 | −14.620 pts · −R\$ 2.924 |
| Maior sequência de perdas | 12 seguidas | 16 seguidas | 16 seguidas |
| Compras: acerto · lucro | 31% · −5.110 pts | 35% · +14.850 pts | 33% · +9.740 pts |
| Vendas: acerto · lucro | 31% · +3.555 pts | 31% · +3.725 pts | 31% · +7.280 pts |

### Versão 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 208 | 264 | 472 |
| Operações por mês | 7,7 | 7,8 | 7,7 |
| Taxa de acerto | 19,7% | 22,7% | 21,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 62% / 14% | 3% / 59% / 16% | 3% / 61% / 15% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +1.274 · −249 pts | +1.312 · −244 pts | +1.296 · −246 pts |
| Payoff (ganho médio ÷ perda média) | 5,13 | 5,37 | 5,26 |
| Fator de lucro (total ganho ÷ total perdido) | 1,26 | 1,58 | 1,43 |
| Resultado médio por operação | +51,6 pts (+66,6 sem custo) | +109,2 pts (+124,2 sem custo) | +83,8 pts (+98,8 sem custo) |
| **Lucro líquido** | **+10.725 pts · R\$ 2.145** | **+28.840 pts · R\$ 5.768** | **+39.565 pts · R\$ 7.913** |
| Pior queda (drawdown) | −7.015 pts · −R\$ 1.403 | −4.595 pts · −R\$ 919 | −7.015 pts · −R\$ 1.403 |
| Maior sequência de perdas | 19 seguidas | 14 seguidas | 19 seguidas |
| Compras: acerto · lucro | 21% · +9.130 pts | 22% · +15.140 pts | 22% · +24.270 pts |
| Vendas: acerto · lucro | 18% · +1.595 pts | 23% · +13.700 pts | 21% · +15.295 pts |

![Pontos acumulados com 1 contrato](setups/img/primeira-vela-80-min_pontos.png)

> [!info]- O que significa cada número (clique para abrir)
> - **Taxa de acerto:** de cada 100 operações, quantas deram lucro.
> - **Payoff:** o ganho médio de uma operação boa dividido pela perda média de uma ruim. Payoff 2 = ganha o dobro do que perde.
> - **Fator de lucro:** tudo o que foi ganho dividido por tudo o que foi perdido. Acima de 1 = deu lucro.
> - **Risco/retorno:** o tamanho do alvo comparado com o do stop.
> - **Drawdown (pior queda):** a maior distância entre o ponto mais alto do lucro acumulado e o fundo que veio depois — o pior momento que alguém teria passado seguindo o setup.
> - **Sharpe:** quanto o investimento rendeu acima do CDI para cada unidade de oscilação. Acima de 1 é muito bom.
> - **Treino e teste:** os parâmetros vêm do vídeo; 2024 em diante funciona como prova — se o setup só funcionasse no passado, o teste ia mostrar.

## Comparação com o CDI e com o Ibovespa comprado

A conta usa **R\$ 10.000 de capital para cada contrato** (o número de contratos cresce junto com o capital). Na versão **+ CDI** o capital fica aplicado no CDI / Tesouro Selic (aceito como garantia) e o resultado do setup soma por cima — é a comparação justa. Na **pura**, o capital fica parado. Na coluna **risco 1%**, cada operação usa o número de contratos que faz o stop (mais o custo) custar 1% do capital — em geral 3 a 4 vezes mais contratos que 1 por R\$ 10 mil. O Ibovespa já inclui dividendos. Sem imposto.

*Colunas: cada versão com 1 contrato por R\$ 10 mil e o capital no CDI · **risco 1%** = a versão principal arriscando 1% por operação · **pura** = a principal sem o CDI.*

| | ATR 0,15 / 1,28 | como no vídeo: ter–qui, pontos fixos | ter–qui, sombra em ATR | todos os dias, sombra em ATR | 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR | risco 1% | pura | CDI | Ibovespa |
|---|---|---|---|---|---|---|---|---|---|
| **R\$ 10.000 viraram** | **R\$ 38.481** | **R\$ 27.296** | **R\$ 27.639** | **R\$ 23.271** | **R\$ 38.108** | **R\$ 66.119** | **R\$ 21.245** | **R\$ 18.119** | **R\$ 16.732** |
| Retorno ao ano | +31,4% | +22,6% | +22,9% | +18,7% | +31,1% | +46,6% | +16,5% | +12,8% | +11,0% |
| Pior queda | −11,7% | −14,4% | −16,9% | −20,2% | −9,0% | −13,6% | −15,6% | +0,0% | −20,9% |
| Oscilação ao ano | 14,9% | 14,4% | 15,3% | 19,2% | 14,0% | 22,4% | 14,9% | 0,1% | 18,6% |
| Sharpe (acima do CDI) | 1,10 | 0,65 | 0,64 | 0,36 | 1,15 | 1,28 | 0,29 | — | 0,01 |
| Meses acima do CDI | 63% | 52% | 55% | 50% | 62% | 65% | 52% | — | 55% |
| Meses acima do Ibovespa | 58% | 52% | 50% | 50% | 58% | 68% | 47% | 45% | — |
| Pior mês · melhor mês | −6,2% · +13,8% | −6,3% · +10,1% | −6,4% · +13,2% | −10,4% · +15,5% | −3,9% · +13,5% | −6,8% · +17,3% | −7,0% · +12,7% | +0,6% · +1,3% | −11,5% · +12,6% |

![Quedas](setups/img/primeira-vela-80-min_queda.png)

### Ano a ano

| Ano | ATR 0,15 / 1,28 | como no vídeo: ter–qui, pontos fixos | ter–qui, sombra em ATR | todos os dias, sombra em ATR | 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR | risco 1% | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|
| 2021* | +7,7% | +9,8% | +1,6% | −1,4% | +6,5% | +10,2% | +1,3% | −0,7% | risco 1% |
| 2022 | +9,1% | −0,2% | −0,4% | +3,2% | +14,7% | +7,2% | +12,3% | +4,7% | 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR |
| 2023 | +27,7% | +14,3% | +14,3% | +18,0% | +27,8% | +36,6% | +13,0% | +22,3% | risco 1% |
| 2024 | +37,8% | +32,8% | +32,9% | +32,0% | +29,8% | +73,1% | +10,8% | −10,4% | risco 1% |
| 2025 | +46,7% | +39,4% | +47,4% | +54,7% | +44,5% | +77,3% | +14,2% | +34,0% | risco 1% |
| 2026* | +26,9% | +17,8% | +21,9% | −5,0% | +30,0% | +33,6% | +11,4% | +9,6% | risco 1% |
| **Acumulado no período** | **+284,8%** | **+173,0%** | **+176,4%** | **+132,7%** | **+281,1%** | **+561,2%** | **+81,2%** | **+67,3%** | **risco 1%** |
| **R\$ 10.000 viraram** | **R\$ 38.481** | **R\$ 27.296** | **R\$ 27.639** | **R\$ 23.271** | **R\$ 38.108** | **R\$ 66.119** | **R\$ 18.119** | **R\$ 16.732** | |
| **Média ao ano** | **+31,4%** | **+22,6%** | **+22,9%** | **+18,7%** | **+31,1%** | **+46,6%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano](setups/img/primeira-vela-80-min_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,15 / 1,28 | como no vídeo: ter–qui, pontos fixos | ter–qui, sombra em ATR | todos os dias, sombra em ATR | 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|
> | nov/2021 | +1,9% | +10,1% | +2,9% | −0,4% | +1,9% | +2,2% | +0,6% | −3,4% |
> | dez/2021 | +5,6% | −0,2% | −1,2% | −1,0% | +4,5% | +7,8% | +0,7% | +2,9% |
> | jan/2022 | +2,1% | +2,0% | +2,1% | −2,8% | +2,0% | +3,2% | +0,7% | +7,0% |
> | fev/2022 | −0,0% | −0,0% | −1,2% | −1,7% | +0,2% | −0,8% | +0,8% | +0,9% |
> | mar/2022 | −3,1% | −6,3% | −6,3% | −3,0% | −2,9% | −5,0% | +0,9% | +6,1% |
> | abr/2022 | −0,9% | +1,2% | +1,4% | −2,4% | −1,1% | −2,2% | +0,8% | −10,1% |
> | mai/2022 | +13,8% | +10,1% | +12,3% | +12,9% | +13,5% | +17,3% | +1,0% | +3,2% |
> | jun/2022 | −4,0% | −4,9% | −3,8% | +2,0% | −3,8% | −6,6% | +1,0% | −11,5% |
> | jul/2022 | −0,2% | −2,3% | −2,3% | −10,4% | +0,1% | −1,6% | +1,0% | +4,7% |
> | ago/2022 | +6,7% | +1,9% | +1,9% | +8,6% | +5,6% | +10,8% | +1,2% | +6,2% |
> | set/2022 | −1,0% | −2,6% | −2,6% | +0,9% | −0,8% | −1,9% | +1,1% | +0,5% |
> | out/2022 | −2,9% | −1,5% | −3,9% | +2,0% | −2,7% | −4,0% | +1,0% | +5,5% |
> | nov/2022 | −3,1% | −1,4% | −3,9% | −6,8% | −1,5% | −3,0% | +1,0% | −3,1% |
> | dez/2022 | +2,8% | +4,8% | +7,6% | +6,2% | +6,5% | +3,3% | +1,1% | −2,4% |
> | jan/2023 | +4,3% | +7,5% | +9,6% | +15,0% | +5,0% | +5,1% | +1,1% | +3,4% |
> | fev/2023 | +1,3% | −2,1% | −2,1% | −8,0% | +1,5% | +1,4% | +0,9% | −7,5% |
> | mar/2023 | +1,7% | +1,2% | +1,2% | −1,7% | +1,8% | +1,8% | +1,2% | −2,9% |
> | abr/2023 | −0,7% | −3,7% | −3,7% | −6,6% | −0,5% | −1,3% | +0,9% | +2,5% |
> | mai/2023 | +4,3% | +2,4% | +2,4% | +2,0% | +4,3% | +6,8% | +1,1% | +3,7% |
> | jun/2023 | +3,0% | +1,2% | +1,2% | +0,6% | +2,9% | +4,7% | +1,1% | +9,0% |
> | jul/2023 | +5,8% | +9,8% | +9,8% | +15,5% | +6,1% | +9,2% | +1,1% | +3,3% |
> | ago/2023 | −3,6% | −5,2% | −5,2% | −6,7% | −3,9% | −6,8% | +1,1% | −5,1% |
> | set/2023 | −0,8% | −1,2% | −1,2% | −1,0% | −2,3% | −2,2% | +1,0% | +0,7% |
> | out/2023 | +1,2% | −4,2% | −4,9% | +0,4% | +0,5% | +1,2% | +1,0% | −2,9% |
> | nov/2023 | +9,6% | +10,1% | +8,8% | +12,0% | +9,5% | +15,9% | +0,9% | +12,5% |
> | dez/2023 | −0,7% | −0,8% | −0,8% | −1,4% | +0,6% | −2,4% | +0,9% | +5,4% |
> | jan/2024 | +7,5% | +9,9% | +6,7% | +2,1% | +7,4% | +14,6% | +1,0% | −4,8% |
> | fev/2024 | +1,8% | +6,8% | +6,8% | +0,4% | +1,3% | +2,9% | +0,8% | +1,0% |
> | mar/2024 | +0,8% | −0,5% | −1,3% | −3,7% | +0,5% | +0,6% | +0,8% | −0,7% |
> | abr/2024 | +2,8% | −1,3% | −1,3% | +4,6% | +2,5% | +3,8% | +0,9% | −1,7% |
> | mai/2024 | +4,6% | +3,3% | +2,8% | +0,9% | +4,3% | +8,9% | +0,8% | −3,0% |
> | jun/2024 | +1,5% | +2,9% | +2,9% | +2,5% | +0,4% | +3,1% | +0,8% | +1,5% |
> | jul/2024 | +3,6% | +1,7% | +1,1% | −2,6% | +1,8% | +8,6% | +0,9% | +3,0% |
> | ago/2024 | +6,2% | +2,8% | +4,1% | +6,0% | +5,6% | +11,5% | +0,9% | +6,5% |
> | set/2024 | +0,8% | +0,8% | +2,0% | +4,7% | +0,7% | +1,4% | +0,8% | −3,1% |
> | out/2024 | −1,7% | −4,4% | −3,1% | −1,9% | −2,5% | −4,2% | +0,9% | −1,6% |
> | nov/2024 | +2,5% | −1,2% | +0,1% | +8,1% | +2,5% | +3,3% | +0,8% | −3,1% |
> | dez/2024 | +2,2% | +8,6% | +8,6% | +7,9% | +2,3% | +3,1% | +0,8% | −4,3% |
> | jan/2025 | +6,4% | +6,3% | +6,3% | +9,7% | +5,8% | +10,2% | +1,0% | +4,9% |
> | fev/2025 | +2,1% | −1,3% | −2,3% | +3,2% | +1,9% | +2,9% | +1,0% | −2,6% |
> | mar/2025 | +5,2% | +6,5% | +6,5% | +7,7% | +7,0% | +8,0% | +1,0% | +6,1% |
> | abr/2025 | +1,7% | +1,5% | +0,2% | −2,6% | +1,4% | +2,6% | +1,1% | +3,7% |
> | mai/2025 | +5,9% | +6,5% | +7,8% | +8,1% | +6,3% | +9,8% | +1,1% | +1,5% |
> | jun/2025 | +0,2% | −0,2% | −0,2% | +2,6% | +0,5% | +0,1% | +1,1% | +1,3% |
> | jul/2025 | +2,5% | −0,0% | +0,7% | +5,9% | −0,1% | +3,0% | +1,3% | −4,2% |
> | ago/2025 | +6,8% | +3,3% | +6,0% | +5,0% | +6,9% | +9,7% | +1,2% | +6,3% |
> | set/2025 | +2,9% | +7,8% | +7,8% | +7,3% | +2,8% | +4,0% | +1,2% | +3,4% |
> | out/2025 | +1,4% | +0,9% | +2,1% | −2,9% | +1,3% | +1,3% | +1,3% | +2,3% |
> | nov/2025 | +5,5% | +7,2% | +7,2% | +7,3% | +5,2% | +8,8% | +1,1% | +6,4% |
> | dez/2025 | −1,2% | −3,9% | −1,9% | −5,6% | −1,1% | −0,9% | +1,1% | +1,3% |
> | jan/2026 | +5,6% | +5,2% | +5,7% | +3,1% | +6,0% | +8,1% | +1,2% | +12,6% |
> | fev/2026 | +13,8% | +7,9% | +13,2% | +9,0% | +7,4% | +11,6% | +1,0% | +4,1% |
> | mar/2026 | −1,7% | −1,1% | +1,3% | −1,3% | +1,6% | −1,0% | +1,2% | −0,7% |
> | abr/2026 | +5,1% | +6,1% | +2,2% | +3,6% | +3,6% | +5,9% | +1,1% | −0,1% |
> | mai/2026 | −1,8% | +2,1% | −1,7% | −6,4% | +1,4% | −2,0% | +1,1% | −7,2% |
> | jun/2026 | −0,4% | −1,4% | −1,7% | −4,4% | −2,1% | −0,5% | +1,1% | −1,0% |
> | jul/2026 | +10,1% | +6,7% | +5,4% | +7,8% | +5,9% | +12,2% | +1,2% | +3,5% |
> | ago/2026 | +4,8% | −2,6% | +0,9% | −2,2% | +2,8% | +4,9% | +1,1% | −0,3% |
> | set/2026 | −3,5% | −1,5% | +2,1% | −2,8% | +3,4% | −3,0% | +1,1% | +5,0% |
> | out/2026 | −6,2% | −4,1% | −6,4% | −9,8% | −2,9% | −5,1% | +0,8% | −5,2% |
> | **Acumulado** | **+284,8%** | **+173,0%** | **+176,4%** | **+132,7%** | **+281,1%** | **+561,2%** | **+81,2%** | **+67,3%** |

### E se o capital por contrato for outro?

| Capital por contrato | ATR 0,15 / 1,28 + CDI | como no vídeo: ter–qui, pontos fixos + CDI | ter–qui, sombra em ATR + CDI | todos os dias, sombra em ATR + CDI | 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR + CDI |
|---|---|---|---|---|---|
| R\$ 5.000 | +50% ao ano · pior queda −24% | +31% ao ano · pior queda −32% | +31% ao ano · pior queda −36% | +20% ao ano · pior queda −42% | +50% ao ano · pior queda −20% |
| R\$ 10.000 | +31% ao ano · pior queda −12% | +23% ao ano · pior queda −14% | +23% ao ano · pior queda −17% | +19% ao ano · pior queda −20% | +31% ao ano · pior queda −9% |
| R\$ 20.000 | +22% ao ano · pior queda −5% | +18% ao ano · pior queda −5% | +18% ao ano · pior queda −6% | +16% ao ano · pior queda −8% | +22% ao ano · pior queda −3% |
| R\$ 40.000 | +17% ao ano · pior queda −1% | +15% ao ano · pior queda −1% | +15% ao ano · pior queda −1% | +15% ao ano · pior queda −3% | +17% ao ano · pior queda −1% |

*Referência: CDI +13% ao ano · Ibovespa +11% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 27/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 462 operações, 35% de acerto e fator de lucro 1,27. O vídeo mostra: stop 300: 677 operações, 21% de acerto, payoff 5,65; stop 600: fator de lucro 1,61, 27% de acerto (2018–2026, só terça a quinta, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,14R por operação no treino (p 0,268) e +0,46R no teste (p 0,001). |
| **É sorte de parâmetro?** | 7 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,04 a +0,46R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,14 → +0,46R · sem o filtro da sombra: +0,03 → +0,32R · sombra máxima de 150: +0,56 → +0,39R · sombra máxima de 500: +0,07 → +0,34R · todos os dias da semana: +0,09 → +0,19R · sem break even: +0,14 → +0,43R · sem stop móvel: +0,15 → +0,44R · sem break even e sem stop móvel: +0,15 → +0,41R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,14 → +0,46R · 25 pts: +0,10 → +0,42R · 30 pts: +0,09 → +0,41R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,15 / 1,28 foi de −R\$ 1.665 por contrato (começou em mai/2022, recuperada em jul/2023); 19 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,15 / 1,28 + CDI ficou abaixo do CDI em 37% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2022.
- **Acerto de ~22%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 26/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
