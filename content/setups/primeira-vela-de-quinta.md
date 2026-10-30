---
title: Primeira Vela de Quinta
date: 2026-10-30
tags: [setup, win]
---

**Na quinta-feira, entra no rompimento da primeira vela de 15 minutos do dia, na direção da cor dela, com stop e alvo iguais.**

🟡 promissor · dia escolhido pelo autor · Mini índice (WIN) · gráfico de 15 minutos · só a primeira vela do dia

🎬 **Vídeo de origem:** [Arthur 777 – "descobri um padrão bizarro no mini índice"](https://youtu.be/5pmW0UMnXwE) · testado de forma independente nos nossos dados em 27/10/2026 · página gerada em 30/10/2026 18:42 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 21.646** na versão ATR 0,21 / 0,21 com o capital no CDI (+17% ao ano · pior queda −4%)
> - **R\$ 19.004** na versão todos os dias com o capital no CDI (+14% ao ano · pior queda −8%)
> - **R\$ 22.635** na versão só quinta (vídeo) com o capital no CDI (+18% ao ano · pior queda −3%)
> - **R\$ 26.393** na versão só quinta, entrada a mercado (vídeo) com o capital no CDI (+22% ao ano · pior queda −4%)
> - **R\$ 22.626** na versão só quinta, corpo de 100+ (vídeo) com o capital no CDI (+18% ao ano · pior queda −2%)
> - **R\$ 23.721** na versão todos os dias, entrada a mercado com o capital no CDI (+19% ao ano · pior queda −16%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 16.029** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 23.158** na versão ATR 0,21 / 0,21 **arriscando 1% do capital por operação** (+18% ao ano · pior queda −3%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> Ainda sem operações. O resultado aparece aqui conforme os dias passam.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/primeira-vela-de-quinta_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Primeira vela** | a vela das 9h00 fecha **positiva** | a vela das 9h00 fecha **negativa** |
| **2. Dia** | **quinta-feira** (no vídeo) | igual |
| **Entrada** | ordem de compra na **máxima** dela (só na vela seguinte) | ordem de venda na **mínima** |
| **Stop · alvo** | 400 · 400 pts no vídeo → em ATR aqui | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 0,21** — stop 0,206 ATR · alvo 0,206 ATR (1,0× o stop); hoje ≈ 919 pts de stop e 919 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.465 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| | ATR 0,21 / 0,21 (principal) | todos os dias | só quinta (vídeo) | só quinta, entrada a mercado (vídeo) | só quinta, corpo de 100+ (vídeo) | todos os dias, entrada a mercado |
|---|---|---|---|---|---|---|
| Regra | stop 0,206 ATR · alvo 0,206 ATR (1,0× o stop) | stop 400 · alvo 400 pts | stop 400 · alvo 400 pts | stop 400 · alvo 400 pts | stop 400 · alvo 400 pts | stop 400 · alvo 400 pts |
| Acerto | 64% | 53% | 63% | 62% | 65% | 53% |
| Payoff | 0,84 | 0,93 | 0,93 | 0,94 | 0,93 | 0,93 |
| Treino → teste (pts por operação) | +106,6 → +66,2 | +30,4 → −11,8 | +104,3 → +75,7 | +96,1 → +65,5 | +124,1 → +88,2 | +10,2 → +14,5 |
| Retorno ao ano (+ CDI) | +16,9% | +13,9% | +17,9% | +21,7% | +17,9% | +19,1% |
| Pior queda (+ CDI) | −3,7% | −8,4% | −2,5% | −3,9% | −2,0% | −15,7% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 0,21

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 46 | 62 | 108 |
| Operações por mês | 1,7 | 1,8 | 1,8 |
| Taxa de acerto | 65,2% | 62,9% | 63,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 65% / 35% / 0% | 63% / 37% / 0% | 64% / 36% / 0% |
| Stop típico | 389 pts | 382 pts | 385 pts |
| Ganho médio · perda média | +387 · −420 pts | +402 · −503 pts | +396 · −469 pts |
| Payoff (ganho médio ÷ perda média) | 0,92 | 0,80 | 0,84 |
| Fator de lucro (total ganho ÷ total perdido) | 1,73 | 1,35 | 1,49 |
| Resultado médio por operação | +106,6 pts (+121,6 sem custo) | +66,2 pts (+81,2 sem custo) | +83,4 pts (+98,4 sem custo) |
| **Lucro líquido** | **+4.904 pts · R\$ 981** | **+4.102 pts · R\$ 820** | **+9.006 pts · R\$ 1.801** |
| Pior queda (drawdown) | −1.031 pts · −R\$ 206 | −3.467 pts · −R\$ 693 | −3.467 pts · −R\$ 693 |
| Maior sequência de perdas | 2 seguidas | 4 seguidas | 4 seguidas |
| Compras: acerto · lucro | 59% · +1.064 pts | 59% · +2.031 pts | 59% · +3.095 pts |
| Vendas: acerto · lucro | 71% · +3.839 pts | 67% · +2.071 pts | 68% · +5.911 pts |

### Versão todos os dias

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 282 | 382 | 664 |
| Operações por mês | 10,4 | 11,2 | 10,9 |
| Taxa de acerto | 55,7% | 50,5% | 52,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 56% / 44% / 0% | 50% / 49% / 1% | 53% / 47% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +383 · −415 pts | +384 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,92 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,17 | 0,94 | 1,03 |
| Resultado médio por operação | +30,4 pts (+45,4 sem custo) | −11,8 pts (+3,2 sem custo) | +6,1 pts (+21,1 sem custo) |
| **Lucro líquido** | **+8.570 pts · R\$ 1.714** | **−4.490 pts · −R\$ 898** | **+4.080 pts · R\$ 816** |
| Pior queda (drawdown) | −4.200 pts · −R\$ 840 | −7.760 pts · −R\$ 1.552 | −7.760 pts · −R\$ 1.552 |
| Maior sequência de perdas | 5 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 55% · +3.205 pts | 50% · −2.510 pts | 52% · +695 pts |
| Vendas: acerto · lucro | 56% · +5.365 pts | 51% · −1.980 pts | 53% · +3.385 pts |

### Versão só quinta (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 57 | 75 | 132 |
| Operações por mês | 2,1 | 2,2 | 2,2 |
| Taxa de acerto | 64,9% | 61,3% | 62,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 65% / 35% / 0% | 61% / 39% / 0% | 63% / 37% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +385 · −415 pts | +385 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,72 | 1,47 | 1,57 |
| Resultado médio por operação | +104,3 pts (+119,3 sem custo) | +75,7 pts (+90,7 sem custo) | +88,0 pts (+103,0 sem custo) |
| **Lucro líquido** | **+5.945 pts · R\$ 1.189** | **+5.675 pts · R\$ 1.135** | **+11.620 pts · R\$ 2.324** |
| Pior queda (drawdown) | −1.780 pts · −R\$ 356 | −2.550 pts · −R\$ 510 | −2.550 pts · −R\$ 510 |
| Maior sequência de perdas | 4 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 59% · +1.595 pts | 56% · +1.090 pts | 57% · +2.685 pts |
| Vendas: acerto · lucro | 70% · +4.350 pts | 66% · +4.585 pts | 68% · +8.935 pts |

### Versão só quinta, entrada a mercado (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 108 | 139 | 247 |
| Operações por mês | 4,0 | 4,1 | 4,0 |
| Taxa de acerto | 63,9% | 59,7% | 61,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 64% / 36% / 0% | 60% / 40% / 1% | 62% / 38% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +385 · −408 pts | +385 · −411 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 1,64 | 1,40 | 1,50 |
| Resultado médio por operação | +96,1 pts (+111,1 sem custo) | +65,5 pts (+80,5 sem custo) | +78,9 pts (+93,9 sem custo) |
| **Lucro líquido** | **+10.380 pts · R\$ 2.076** | **+9.105 pts · R\$ 1.821** | **+19.485 pts · R\$ 3.897** |
| Pior queda (drawdown) | −1.810 pts · −R\$ 362 | −2.490 pts · −R\$ 498 | −2.520 pts · −R\$ 504 |
| Maior sequência de perdas | 4 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 65% · +5.945 pts | 60% · +3.870 pts | 62% · +9.815 pts |
| Vendas: acerto · lucro | 63% · +4.435 pts | 60% · +5.235 pts | 61% · +9.670 pts |

### Versão só quinta, corpo de 100+ (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 46 | 62 | 108 |
| Operações por mês | 1,7 | 1,8 | 1,8 |
| Taxa de acerto | 67,4% | 62,9% | 64,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 67% / 33% / 0% | 63% / 37% / 0% | 65% / 35% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +385 · −415 pts | +385 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,92 | 1,57 | 1,71 |
| Resultado médio por operação | +124,1 pts (+139,1 sem custo) | +88,2 pts (+103,2 sem custo) | +103,5 pts (+118,5 sem custo) |
| **Lucro líquido** | **+5.710 pts · R\$ 1.142** | **+5.470 pts · R\$ 1.094** | **+11.180 pts · R\$ 2.236** |
| Pior queda (drawdown) | −860 pts · −R\$ 172 | −1.660 pts · −R\$ 332 | −1.660 pts · −R\$ 332 |
| Maior sequência de perdas | 2 seguidas | 4 seguidas | 4 seguidas |
| Compras: acerto · lucro | 59% · +1.270 pts | 59% · +1.565 pts | 59% · +2.835 pts |
| Vendas: acerto · lucro | 75% · +4.440 pts | 67% · +3.905 pts | 70% · +8.345 pts |

### Versão todos os dias, entrada a mercado

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 540 | 699 | 1.239 |
| Operações por mês | 20,0 | 20,6 | 20,3 |
| Taxa de acerto | 53,1% | 53,6% | 53,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 53% / 47% / 0% | 53% / 46% / 1% | 53% / 46% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +384 · −413 pts | +384 · −414 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,05 | 1,08 | 1,07 |
| Resultado médio por operação | +10,2 pts (+25,2 sem custo) | +14,5 pts (+29,5 sem custo) | +12,6 pts (+27,6 sem custo) |
| **Lucro líquido** | **+5.500 pts · R\$ 1.100** | **+10.160 pts · R\$ 2.032** | **+15.660 pts · R\$ 3.132** |
| Pior queda (drawdown) | −12.015 pts · −R\$ 2.403 | −5.250 pts · −R\$ 1.050 | −12.015 pts · −R\$ 2.403 |
| Maior sequência de perdas | 9 seguidas | 7 seguidas | 9 seguidas |
| Compras: acerto · lucro | 55% · +7.625 pts | 55% · +8.025 pts | 55% · +15.650 pts |
| Vendas: acerto · lucro | 51% · −2.125 pts | 52% · +2.135 pts | 52% · +10 pts |

![Pontos acumulados com 1 contrato](setups/img/primeira-vela-de-quinta_pontos.png)

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

| | ATR 0,21 / 0,21 | todos os dias | só quinta (vídeo) | só quinta, entrada a mercado (vídeo) | só quinta, corpo de 100+ (vídeo) | todos os dias, entrada a mercado | risco 1% | pura | CDI | Ibovespa |
|---|---|---|---|---|---|---|---|---|---|---|
| **R\$ 10.000 viraram** | **R\$ 21.646** | **R\$ 19.004** | **R\$ 22.635** | **R\$ 26.393** | **R\$ 22.626** | **R\$ 23.721** | **R\$ 23.158** | **R\$ 11.923** | **R\$ 18.156** | **R\$ 16.029** |
| Retorno ao ano | +16,9% | +13,9% | +17,9% | +21,7% | +17,9% | +19,1% | +18,5% | +3,6% | +12,8% | +10,0% |
| Pior queda | −3,7% | −8,4% | −2,5% | −3,9% | −2,0% | −15,7% | −2,6% | −6,8% | +0,0% | −20,9% |
| Oscilação ao ano | 4,1% | 9,2% | 4,1% | 5,6% | 3,7% | 12,6% | 4,4% | 4,1% | 0,1% | 18,6% |
| Sharpe (acima do CDI) | 0,88 | 0,15 | 1,12 | 1,39 | 1,22 | 0,49 | 1,13 | −2,04 | — | −0,04 |
| Meses acima do CDI | 50% | 53% | 48% | 53% | 45% | 60% | 48% | 22% | — | 55% |
| Meses acima do Ibovespa | 50% | 52% | 52% | 53% | 50% | 48% | 50% | 42% | 45% | — |
| Pior mês · melhor mês | −2,1% · +3,4% | −4,8% · +5,6% | −1,3% · +3,5% | −2,1% · +5,0% | −0,6% · +3,4% | −5,1% · +8,8% | −1,0% · +3,9% | −3,1% · +2,4% | +0,6% · +1,3% | −11,5% · +12,6% |

![Quedas](setups/img/primeira-vela-de-quinta_queda.png)

### Ano a ano

| Ano | ATR 0,21 / 0,21 | todos os dias | só quinta (vídeo) | só quinta, entrada a mercado (vídeo) | só quinta, corpo de 100+ (vídeo) | todos os dias, entrada a mercado | risco 1% | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | +4,0% | +0,5% | +2,7% | +3,4% | +2,0% | +5,7% | +4,2% | +1,3% | −0,7% | todos os dias, entrada a mercado |
| 2022 | +18,1% | +14,9% | +16,8% | +21,6% | +19,8% | −0,6% | +19,1% | +12,3% | +4,7% | só quinta, entrada a mercado (vídeo) |
| 2023 | +15,3% | +29,1% | +19,5% | +24,4% | +17,8% | +33,5% | +16,4% | +13,0% | +22,3% | todos os dias, entrada a mercado |
| 2024 | +16,4% | +0,9% | +19,8% | +20,9% | +18,1% | +2,5% | +19,2% | +10,8% | −10,4% | só quinta, entrada a mercado (vídeo) |
| 2025 | +21,9% | +17,4% | +20,7% | +18,9% | +18,0% | +22,5% | +23,5% | +14,2% | +34,0% | Ibovespa |
| 2026* | +7,7% | +7,6% | +9,1% | +17,4% | +12,8% | +34,8% | +9,0% | +11,6% | +5,0% | todos os dias, entrada a mercado |
| **Acumulado no período** | **+116,5%** | **+90,0%** | **+126,3%** | **+163,9%** | **+126,3%** | **+137,2%** | **+131,6%** | **+81,6%** | **+60,3%** | **só quinta, entrada a mercado (vídeo)** |
| **R\$ 10.000 viraram** | **R\$ 21.646** | **R\$ 19.004** | **R\$ 22.635** | **R\$ 26.393** | **R\$ 22.626** | **R\$ 23.721** | **R\$ 23.158** | **R\$ 18.156** | **R\$ 16.029** | |
| **Média ao ano** | **+16,9%** | **+13,9%** | **+17,9%** | **+21,7%** | **+17,9%** | **+19,1%** | **+18,5%** | **+12,8%** | **+10,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 29/10/2026.

![Retorno por ano](setups/img/primeira-vela-de-quinta_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 0,21 | todos os dias | só quinta (vídeo) | só quinta, entrada a mercado (vídeo) | só quinta, corpo de 100+ (vídeo) | todos os dias, entrada a mercado | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | +1,6% | +0,1% | +2,9% | +2,1% | +1,4% | +1,5% | +1,5% | +0,6% | −3,4% |
> | dez/2021 | +2,4% | +0,4% | −0,2% | +1,3% | +0,6% | +4,1% | +2,6% | +0,7% | +2,9% |
> | jan/2022 | +1,4% | +2,0% | +1,4% | +2,2% | +1,4% | −2,3% | +1,6% | +0,7% | +7,0% |
> | fev/2022 | +0,7% | +2,0% | +0,7% | +0,6% | +0,7% | +2,6% | +0,7% | +0,8% | +0,9% |
> | mar/2022 | +0,9% | +1,5% | +0,9% | −0,0% | +0,9% | −0,6% | +0,9% | +0,9% | +6,1% |
> | abr/2022 | +2,2% | +5,3% | +2,4% | +3,2% | +2,4% | +6,0% | +2,7% | +0,8% | −10,1% |
> | mai/2022 | +1,9% | +0,8% | +1,8% | +0,9% | +1,8% | −4,4% | +2,0% | +1,0% | +3,2% |
> | jun/2022 | +3,4% | −0,2% | +3,4% | +2,5% | +3,4% | −2,1% | +3,9% | +1,0% | −11,5% |
> | jul/2022 | +1,0% | −0,1% | +1,0% | +0,9% | +1,0% | −3,6% | +0,9% | +1,0% | +4,7% |
> | ago/2022 | +0,2% | −0,8% | +0,3% | +1,0% | +0,3% | −5,1% | +0,1% | +1,2% | +6,2% |
> | set/2022 | +2,9% | +1,6% | +1,8% | +5,0% | +2,6% | +6,1% | +3,0% | +1,1% | +0,5% |
> | out/2022 | −0,1% | +0,8% | +0,1% | +0,9% | +0,1% | −2,8% | −0,1% | +1,0% | +5,5% |
> | nov/2022 | +1,0% | +0,6% | −0,6% | +0,9% | +1,0% | +5,3% | +1,0% | +1,0% | −3,1% |
> | dez/2022 | +1,2% | +0,7% | +2,6% | +1,7% | +2,6% | +1,2% | +1,0% | +1,1% | −2,4% |
> | jan/2023 | +1,1% | +2,5% | +1,1% | −0,6% | +1,1% | −1,2% | +1,1% | +1,1% | +3,4% |
> | fev/2023 | +2,7% | +3,9% | +1,6% | +0,8% | +2,5% | −0,4% | +2,8% | +0,9% | −7,5% |
> | mar/2023 | +0,3% | +0,0% | +0,3% | +1,8% | +0,3% | +2,8% | +0,2% | +1,2% | −2,9% |
> | abr/2023 | +0,8% | −1,8% | +0,9% | +2,4% | +0,9% | −2,8% | +0,8% | +0,9% | +2,5% |
> | mai/2023 | +1,1% | +4,1% | +3,5% | +4,3% | +2,7% | +7,9% | +1,0% | +1,1% | +3,7% |
> | jun/2023 | +1,8% | +3,1% | +1,8% | +0,9% | +1,8% | +4,5% | +2,0% | +1,1% | +9,0% |
> | jul/2023 | +1,0% | +4,7% | +1,0% | +2,6% | +1,0% | +6,1% | +1,0% | +1,1% | +3,3% |
> | ago/2023 | +1,0% | +1,5% | +1,1% | +3,4% | +1,1% | +8,8% | +1,1% | +1,1% | −5,1% |
> | set/2023 | +1,6% | +3,8% | +1,8% | +1,7% | +1,8% | +3,6% | +1,9% | +1,0% | +0,7% |
> | out/2023 | +0,9% | −0,9% | +0,9% | +1,7% | +0,9% | −2,1% | +0,9% | +1,0% | −2,9% |
> | nov/2023 | +0,7% | +3,8% | +1,6% | +0,8% | +0,8% | +1,9% | +0,8% | +0,9% | +12,5% |
> | dez/2023 | +1,4% | +1,3% | +2,3% | +2,3% | +1,6% | +1,0% | +1,7% | +0,9% | +5,4% |
> | jan/2024 | +0,3% | +3,0% | +0,1% | −0,8% | +0,1% | −3,7% | −0,0% | +1,0% | −4,8% |
> | fev/2024 | +1,3% | −0,3% | +1,6% | −0,2% | +1,6% | +0,2% | +1,7% | +0,8% | +1,0% |
> | mar/2024 | +1,9% | −1,9% | +2,4% | +4,0% | +2,4% | +2,6% | +2,7% | +0,8% | −0,7% |
> | abr/2024 | +1,5% | −2,0% | −0,0% | +0,8% | −0,0% | −3,0% | +1,7% | +0,9% | −1,7% |
> | mai/2024 | +1,4% | +1,9% | +2,3% | +2,3% | +1,5% | +3,7% | +1,7% | +0,8% | −3,0% |
> | jun/2024 | +0,8% | −1,3% | −0,1% | +0,7% | +0,7% | +0,1% | +0,7% | +0,8% | +1,5% |
> | jul/2024 | +1,4% | −2,7% | +3,3% | +3,2% | +1,7% | +0,1% | +1,8% | +0,9% | +3,0% |
> | ago/2024 | +1,1% | +0,4% | +1,6% | +3,1% | +1,6% | +5,1% | +1,6% | +0,9% | +6,5% |
> | set/2024 | +0,7% | −1,7% | +0,8% | +0,7% | +0,8% | −3,8% | +0,7% | +0,8% | −3,1% |
> | out/2024 | +1,6% | +2,1% | +3,3% | +1,6% | +3,3% | −0,6% | +1,8% | +0,9% | −1,6% |
> | nov/2024 | +0,7% | +0,5% | +0,7% | +2,3% | +0,7% | +0,4% | +0,7% | +0,8% | −3,1% |
> | dez/2024 | +2,5% | +3,0% | +2,4% | +1,5% | +2,4% | +1,9% | +2,7% | +0,8% | −4,3% |
> | jan/2025 | +1,0% | +2,4% | +1,0% | +0,0% | +1,0% | +1,9% | +1,0% | +1,0% | +4,9% |
> | fev/2025 | +2,4% | +4,7% | +1,7% | +2,5% | +0,9% | +5,2% | +2,9% | +1,0% | −2,6% |
> | mar/2025 | +0,6% | +3,0% | +0,8% | +0,8% | +0,8% | +5,3% | +0,8% | +1,0% | +6,1% |
> | abr/2025 | +3,4% | −1,8% | +1,8% | +2,5% | +1,0% | +0,4% | +3,0% | +1,1% | +3,7% |
> | mai/2025 | +1,8% | +1,5% | +1,8% | +1,0% | +1,8% | +1,2% | +2,0% | +1,1% | +1,5% |
> | jun/2025 | +1,9% | +2,3% | +1,9% | +3,4% | +1,9% | +3,7% | +2,0% | +1,1% | +1,3% |
> | jul/2025 | +2,1% | −4,6% | +2,8% | +0,3% | +2,1% | −4,2% | +2,2% | +1,3% | −4,2% |
> | ago/2025 | +2,0% | +5,0% | +2,7% | +1,0% | +1,9% | +4,6% | +2,1% | +1,2% | +6,3% |
> | set/2025 | +0,5% | −3,1% | −0,5% | −2,1% | +0,4% | −2,7% | +0,2% | +1,2% | +3,4% |
> | out/2025 | +2,6% | +3,3% | +2,8% | +3,6% | +2,8% | +2,9% | +3,1% | +1,3% | +2,3% |
> | nov/2025 | +1,1% | +2,3% | +1,1% | +2,6% | +1,1% | +2,1% | +1,1% | +1,1% | +6,4% |
> | dez/2025 | +0,7% | +1,6% | +1,0% | +1,8% | +1,0% | +0,4% | +1,0% | +1,1% | +1,3% |
> | jan/2026 | +3,0% | +2,3% | +2,7% | +2,7% | +2,7% | +6,2% | +3,1% | +1,2% | +12,6% |
> | fev/2026 | −2,1% | +5,6% | +0,9% | +0,9% | +0,9% | +2,9% | −1,0% | +1,0% | +4,1% |
> | mar/2026 | +1,2% | +1,7% | +1,1% | +1,1% | +1,1% | −1,1% | +1,2% | +1,2% | −0,7% |
> | abr/2026 | +1,0% | −4,8% | +1,0% | +5,0% | +1,0% | +2,0% | +1,0% | +1,1% | −0,1% |
> | mai/2026 | +2,1% | +4,8% | +2,6% | +4,2% | +3,4% | +5,3% | +2,0% | +1,1% | −7,2% |
> | jun/2026 | +1,1% | +2,3% | +1,1% | +0,2% | +1,1% | +1,2% | +1,1% | +1,1% | −1,0% |
> | jul/2026 | −1,1% | −2,4% | −1,3% | +0,2% | −0,5% | +2,1% | −0,8% | +1,2% | +3,5% |
> | ago/2026 | −1,4% | +0,7% | −0,6% | +1,0% | −0,6% | +2,8% | −0,9% | +1,1% | −0,3% |
> | set/2026 | +1,1% | +0,7% | +0,2% | −0,7% | +1,1% | +4,5% | +1,1% | +1,1% | +5,0% |
> | out/2026 | +2,6% | −3,1% | +1,0% | +1,7% | +1,8% | +4,5% | +2,0% | +1,0% | −9,2% |
> | **Acumulado** | **+116,5%** | **+90,0%** | **+126,3%** | **+163,9%** | **+126,3%** | **+137,2%** | **+131,6%** | **+81,6%** | **+60,3%** |

### E se o capital por contrato for outro?

| Capital por contrato | ATR 0,21 / 0,21 + CDI | todos os dias + CDI | só quinta (vídeo) + CDI | só quinta, entrada a mercado (vídeo) + CDI | só quinta, corpo de 100+ (vídeo) + CDI | todos os dias, entrada a mercado + CDI |
|---|---|---|---|---|---|---|
| R\$ 5.000 | +21% ao ano · pior queda −8% | +14% ao ano · pior queda −22% | +23% ao ano · pior queda −7% | +31% ao ano · pior queda −9% | +23% ao ano · pior queda −5% | +24% ao ano · pior queda −32% |
| R\$ 10.000 | +17% ao ano · pior queda −4% | +14% ao ano · pior queda −8% | +18% ao ano · pior queda −3% | +22% ao ano · pior queda −4% | +18% ao ano · pior queda −2% | +19% ao ano · pior queda −16% |
| R\$ 20.000 | +15% ao ano · pior queda −1% | +13% ao ano · pior queda −3% | +15% ao ano · pior queda −1% | +17% ao ano · pior queda −1% | +15% ao ano · pior queda −1% | +16% ao ano · pior queda −6% |
| R\$ 40.000 | +14% ao ano · pior queda −0% | +13% ao ano · pior queda −1% | +14% ao ano · pior queda −0% | +15% ao ano · pior queda −0% | +14% ao ano · pior queda −0% | +15% ao ano · pior queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 27/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 662 operações, 53% de acerto e fator de lucro 1,12. O vídeo mostra: 126 operações · 70% de acerto · fator de lucro 2,41 (out/2021–2026, só quintas, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,27R por operação no treino (p 0,025) e +0,22R no teste (p 0,012). |
| **É sorte de parâmetro?** | 9 de 9 combinações de stop × alvo deram lucro no treino **e** no teste (+0,11 a +0,28R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,27 → +0,22R · só segunda: −0,10 → −0,05R · só terça: +0,08 → −0,04R · só quarta: −0,11 → +0,09R · só quinta: +0,27 → +0,22R · só sexta: +0,05 → −0,07R · entrada a mercado: +0,26 → +0,18R · corpo de 200+: +0,33 → +0,11R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,27 → +0,22R · 25 pts: +0,24 → +0,20R · 30 pts: +0,23 → +0,18R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 0,21 foi de −R\$ 693 por contrato (começou em jan/2026, ainda não recuperada); 4 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 0,21 + CDI ficou abaixo do CDI em 50% dos meses. O resultado aparece no ano.
- **Dia da semana escolhido pelo autor (só a quinta-feira):** o vídeo testou todos os dias no mesmo período que usamos e mostrou o que deu certo — pode ser sorte. Por regra, fica no máximo como promissor e **fora da carteira recomendada** até os dados novos confirmarem.
- **Opera pouco** (~1,8 operações por mês): os números têm mais incerteza.
- **Anos negativos:** 2026.
- **As vendas carregam o setup:** compras +0,14R × vendas +0,33R por operação.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 29/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
