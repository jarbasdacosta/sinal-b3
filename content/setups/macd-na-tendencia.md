---
title: MACD na Tendência
date: 2026-10-27
tags: [setup, win]
---

**Dia já forte (longe da abertura e além do extremo de ontem) com o MACD subindo a favor: entra com break even.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · velas das 9h00 às 11h30 e das 14h00 às 16h00

🎬 **Vídeo de origem:** [Arthur 777 – "parecia uma coincidência, mas não era"](https://youtu.be/eHvY4bvS95c) · testado de forma independente nos nossos dados em 27/10/2026 · página gerada em 27/10/2026 09:58 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 36.752** na versão ATR 0,21 / 1,03 com o capital no CDI (+30% ao ano · pior queda −15%)
> - **R\$ 36.965** na versão como no vídeo: pontos fixos, com stop móvel com o capital no CDI (+30% ao ano · pior queda −8%)
> - **R\$ 41.559** na versão distância em ATR, sem stop móvel com o capital no CDI (+33% ao ano · pior queda −11%)
> - **R\$ 30.619** na versão alvo 400 · stop 400 (vídeo), ATR, sem stop móvel com o capital no CDI (+25% ao ano · pior queda −8%)
> - **R\$ 41.164** na versão alvo 2.000 (vídeo), ATR, sem stop móvel com o capital no CDI (+33% ao ano · pior queda −13%)
> - **R\$ 18.128** só no CDI (+13% ao ano)
> - **R\$ 16.732** comprado no Ibovespa (+11% ao ano · pior queda −21%)
>
> - **R\$ 52.701** na versão ATR 0,21 / 1,03 **arriscando 1% do capital por operação** (+40% ao ano · pior queda −11%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> Ainda sem operações. O resultado aparece aqui conforme os dias passam.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/macd-na-tendencia_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Vela a favor** | vela **positiva** | vela **negativa** |
| **2. Força do dia** | fecha **pelo menos 700 pts acima** da abertura do dia (em ATR aqui) | fecha **pelo menos 700 pts abaixo** da abertura |
| **3. MACD** | histograma **acima de zero** e **subindo** | histograma **abaixo de zero** e **caindo** |
| **4. Dia anterior** | fecha **acima da máxima** do dia anterior | fecha **abaixo da mínima** do dia anterior |
| **Entrada** | compra a mercado na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop · alvo** | 400 · 1.500 pts no vídeo → em ATR aqui | igual |
| **Break even** | stop no preço de entrada quando uma vela fecha com 100+ pts de lucro (sem stop móvel: no treino ele atrapalhou) | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 755 pts de stop e 3.776 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 3.670 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| | ATR 0,21 / 1,03 (principal) | como no vídeo: pontos fixos, com stop móvel | distância em ATR, sem stop móvel | alvo 400 · stop 400 (vídeo), ATR, sem stop móvel | alvo 2.000 (vídeo), ATR, sem stop móvel |
|---|---|---|---|---|---|
| Regra | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | stop 400 · alvo 1.500 pts | stop 400 · alvo 1.500 pts | stop 400 · alvo 400 pts | stop 400 · alvo 2.000 pts |
| Acerto | 22% | 30% | 23% | 44% | 22% |
| Payoff | 4,43 | 2,91 | 4,42 | 1,47 | 4,73 |
| Treino → teste (pts por operação) | +22,3 → +57,2 | +19,3 → +49,4 | +24,8 → +61,4 | +17,0 → +24,4 | +28,5 → +60,2 |
| Retorno ao ano (+ CDI) | +30,2% | +30,3% | +33,5% | +25,4% | +33,2% |
| Pior queda (+ CDI) | −15,4% | −8,2% | −10,6% | −8,4% | −13,1% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 351 | 543 | 894 |
| Operações por mês | 13,0 | 16,0 | 14,7 |
| Taxa de acerto | 21,4% | 22,5% | 22,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 35% / 20% | 5% / 35% / 20% | 4% / 35% / 20% |
| Stop típico | 394 pts | 381 pts | 388 pts |
| Ganho médio · perda média | +869 · −208 pts | +1.050 · −231 pts | +981 · −222 pts |
| Payoff (ganho médio ÷ perda média) | 4,18 | 4,55 | 4,43 |
| Fator de lucro (total ganho ÷ total perdido) | 1,14 | 1,32 | 1,25 |
| Resultado médio por operação | +22,3 pts (+37,3 sem custo) | +57,2 pts (+72,2 sem custo) | +43,5 pts (+58,5 sem custo) |
| **Lucro líquido** | **+7.832 pts · R\$ 1.566** | **+31.050 pts · R\$ 6.210** | **+38.881 pts · R\$ 7.776** |
| Pior queda (drawdown) | −5.855 pts · −R\$ 1.171 | −8.898 pts · −R\$ 1.780 | −8.898 pts · −R\$ 1.780 |
| Maior sequência de perdas | 16 seguidas | 17 seguidas | 17 seguidas |
| Compras: acerto · lucro | 26% · +6.493 pts | 24% · +18.056 pts | 25% · +24.549 pts |
| Vendas: acerto · lucro | 17% · +1.339 pts | 21% · +12.994 pts | 19% · +14.333 pts |

### Versão como no vídeo: pontos fixos, com stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 376 | 616 | 992 |
| Operações por mês | 13,9 | 18,1 | 16,3 |
| Taxa de acerto | 30,9% | 29,4% | 29,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 37% / 7% | 6% / 36% / 6% | 5% / 36% / 7% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +578 · −230 pts | +700 · −221 pts | +652 · −224 pts |
| Payoff (ganho médio ÷ perda média) | 2,51 | 3,16 | 2,91 |
| Fator de lucro (total ganho ÷ total perdido) | 1,12 | 1,32 | 1,24 |
| Resultado médio por operação | +19,3 pts (+34,3 sem custo) | +49,4 pts (+64,4 sem custo) | +38,0 pts (+53,0 sem custo) |
| **Lucro líquido** | **+7.245 pts · R\$ 1.449** | **+30.460 pts · R\$ 6.092** | **+37.705 pts · R\$ 7.541** |
| Pior queda (drawdown) | −3.630 pts · −R\$ 726 | −5.200 pts · −R\$ 1.040 | −5.200 pts · −R\$ 1.040 |
| Maior sequência de perdas | 14 seguidas | 18 seguidas | 18 seguidas |
| Compras: acerto · lucro | 34% · +4.640 pts | 32% · +26.360 pts | 33% · +31.000 pts |
| Vendas: acerto · lucro | 28% · +2.605 pts | 27% · +4.100 pts | 27% · +6.705 pts |

### Versão distância em ATR, sem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 355 | 583 | 938 |
| Operações por mês | 13,1 | 17,1 | 15,4 |
| Taxa de acerto | 21,7% | 23,3% | 22,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 35% / 18% | 10% / 38% / 15% | 8% / 37% / 16% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +822 · −196 pts | +964 · −213 pts | +913 · −207 pts |
| Payoff (ganho médio ÷ perda média) | 4,19 | 4,52 | 4,42 |
| Fator de lucro (total ganho ÷ total perdido) | 1,16 | 1,38 | 1,30 |
| Resultado médio por operação | +24,8 pts (+39,8 sem custo) | +61,4 pts (+76,4 sem custo) | +47,5 pts (+62,5 sem custo) |
| **Lucro líquido** | **+8.810 pts · R\$ 1.762** | **+35.775 pts · R\$ 7.155** | **+44.585 pts · R\$ 8.917** |
| Pior queda (drawdown) | −4.020 pts · −R\$ 804 | −6.840 pts · −R\$ 1.368 | −6.840 pts · −R\$ 1.368 |
| Maior sequência de perdas | 18 seguidas | 23 seguidas | 23 seguidas |
| Compras: acerto · lucro | 26% · +7.150 pts | 25% · +28.310 pts | 25% · +35.460 pts |
| Vendas: acerto · lucro | 17% · +1.660 pts | 22% · +7.465 pts | 20% · +9.125 pts |

### Versão alvo 400 · stop 400 (vídeo), ATR, sem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 496 | 798 | 1.294 |
| Operações por mês | 18,4 | 23,5 | 21,2 |
| Taxa de acerto | 42,5% | 44,7% | 43,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 40% / 32% / 4% | 43% / 33% / 4% | 42% / 33% / 4% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +371 · −245 pts | +374 · −258 pts | +373 · −253 pts |
| Payoff (ganho médio ÷ perda média) | 1,51 | 1,45 | 1,47 |
| Fator de lucro (total ganho ÷ total perdido) | 1,12 | 1,17 | 1,15 |
| Resultado médio por operação | +17,0 pts (+32,0 sem custo) | +24,4 pts (+39,4 sem custo) | +21,6 pts (+36,6 sem custo) |
| **Lucro líquido** | **+8.435 pts · R\$ 1.687** | **+19.490 pts · R\$ 3.898** | **+27.925 pts · R\$ 5.585** |
| Pior queda (drawdown) | −4.810 pts · −R\$ 962 | −5.475 pts · −R\$ 1.095 | −5.475 pts · −R\$ 1.095 |
| Maior sequência de perdas | 9 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 44% · +4.850 pts | 47% · +16.235 pts | 46% · +21.085 pts |
| Vendas: acerto · lucro | 41% · +3.585 pts | 42% · +3.255 pts | 42% · +6.840 pts |

### Versão alvo 2.000 (vídeo), ATR, sem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 351 | 570 | 921 |
| Operações por mês | 13,0 | 16,8 | 15,1 |
| Taxa de acerto | 21,1% | 21,9% | 21,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 34% / 20% | 6% / 37% / 17% | 4% / 36% / 18% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +856 · −192 pts | +1.018 · −209 pts | +958 · −203 pts |
| Payoff (ganho médio ÷ perda média) | 4,45 | 4,87 | 4,73 |
| Fator de lucro (total ganho ÷ total perdido) | 1,19 | 1,37 | 1,30 |
| Resultado médio por operação | +28,5 pts (+43,5 sem custo) | +60,2 pts (+75,2 sem custo) | +48,1 pts (+63,1 sem custo) |
| **Lucro líquido** | **+10.020 pts · R\$ 2.004** | **+34.320 pts · R\$ 6.864** | **+44.340 pts · R\$ 8.868** |
| Pior queda (drawdown) | −3.870 pts · −R\$ 774 | −8.450 pts · −R\$ 1.690 | −8.450 pts · −R\$ 1.690 |
| Maior sequência de perdas | 20 seguidas | 25 seguidas | 25 seguidas |
| Compras: acerto · lucro | 25% · +7.390 pts | 24% · +28.140 pts | 24% · +35.530 pts |
| Vendas: acerto · lucro | 17% · +2.630 pts | 20% · +6.180 pts | 19% · +8.810 pts |

![Pontos acumulados com 1 contrato](setups/img/macd-na-tendencia_pontos.png)

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

| | ATR 0,21 / 1,03 | como no vídeo: pontos fixos, com stop móvel | distância em ATR, sem stop móvel | alvo 400 · stop 400 (vídeo), ATR, sem stop móvel | alvo 2.000 (vídeo), ATR, sem stop móvel | risco 1% | pura | CDI | Ibovespa |
|---|---|---|---|---|---|---|---|---|---|
| **R\$ 10.000 viraram** | **R\$ 36.752** | **R\$ 36.965** | **R\$ 41.559** | **R\$ 30.619** | **R\$ 41.164** | **R\$ 52.701** | **R\$ 20.280** | **R\$ 18.128** | **R\$ 16.732** |
| Retorno ao ano | +30,2% | +30,3% | +33,5% | +25,4% | +33,2% | +40,0% | +15,4% | +12,8% | +11,0% |
| Pior queda | −15,4% | −8,2% | −10,6% | −8,4% | −13,1% | −10,5% | −16,7% | +0,0% | −20,9% |
| Oscilação ao ano | 17,0% | 14,2% | 15,9% | 11,8% | 16,5% | 18,7% | 17,0% | 0,1% | 18,6% |
| Sharpe (acima do CDI) | 0,93 | 1,09 | 1,14 | 0,96 | 1,09 | 1,25 | 0,22 | — | 0,01 |
| Meses acima do CDI | 63% | 58% | 67% | 65% | 70% | 65% | 50% | — | 55% |
| Meses acima do Ibovespa | 53% | 57% | 58% | 58% | 60% | 60% | 48% | 45% | — |
| Pior mês · melhor mês | −7,1% · +13,1% | −3,1% · +13,6% | −4,8% · +13,8% | −5,2% · +11,2% | −6,8% · +13,9% | −5,3% · +15,3% | −8,1% · +11,8% | +0,6% · +1,3% | −11,5% · +12,6% |

![Quedas](setups/img/macd-na-tendencia_queda.png)

### Ano a ano

| Ano | ATR 0,21 / 1,03 | como no vídeo: pontos fixos, com stop móvel | distância em ATR, sem stop móvel | alvo 400 · stop 400 (vídeo), ATR, sem stop móvel | alvo 2.000 (vídeo), ATR, sem stop móvel | risco 1% | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|
| 2021* | −2,9% | +2,9% | −1,0% | +0,6% | −3,1% | −2,8% | +1,3% | −0,7% | como no vídeo: pontos fixos, com stop móvel |
| 2022 | +20,7% | +13,4% | +17,4% | +22,0% | +23,9% | +27,8% | +12,3% | +4,7% | risco 1% |
| 2023 | +25,7% | +26,5% | +29,6% | +22,6% | +28,3% | +30,3% | +13,0% | +22,3% | risco 1% |
| 2024 | +36,6% | +18,1% | +37,3% | +23,4% | +35,8% | +51,6% | +10,8% | −10,4% | risco 1% |
| 2025 | +40,1% | +56,6% | +47,4% | +29,1% | +48,9% | +60,7% | +14,2% | +34,0% | risco 1% |
| 2026* | +30,4% | +35,4% | +36,4% | +27,7% | +32,2% | +33,7% | +11,5% | +9,6% | distância em ATR, sem stop móvel |
| **Acumulado no período** | **+267,5%** | **+269,7%** | **+315,6%** | **+206,2%** | **+311,6%** | **+427,0%** | **+81,3%** | **+67,3%** | **risco 1%** |
| **R\$ 10.000 viraram** | **R\$ 36.752** | **R\$ 36.965** | **R\$ 41.559** | **R\$ 30.619** | **R\$ 41.164** | **R\$ 52.701** | **R\$ 18.128** | **R\$ 16.732** | |
| **Média ao ano** | **+30,2%** | **+30,3%** | **+33,5%** | **+25,4%** | **+33,2%** | **+40,0%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano](setups/img/macd-na-tendencia_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 1,03 | como no vídeo: pontos fixos, com stop móvel | distância em ATR, sem stop móvel | alvo 400 · stop 400 (vídeo), ATR, sem stop móvel | alvo 2.000 (vídeo), ATR, sem stop móvel | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|
> | nov/2021 | −0,3% | +2,6% | −1,2% | −0,4% | −1,2% | −0,3% | +0,6% | −3,4% |
> | dez/2021 | −2,6% | +0,2% | +0,2% | +1,0% | −2,0% | −2,5% | +0,7% | +2,9% |
> | jan/2022 | +3,0% | +0,1% | +2,9% | +0,8% | +2,6% | +3,8% | +0,7% | +7,0% |
> | fev/2022 | −1,9% | −2,1% | −1,3% | −1,3% | −1,3% | −2,7% | +0,8% | +0,9% |
> | mar/2022 | +5,7% | +5,3% | +5,5% | +3,5% | +6,5% | +6,7% | +0,9% | +6,1% |
> | abr/2022 | +1,9% | −0,2% | +1,1% | +2,1% | +1,1% | +2,1% | +0,8% | −10,1% |
> | mai/2022 | −0,2% | +0,8% | +0,3% | +0,6% | +0,3% | −0,4% | +1,0% | +3,2% |
> | jun/2022 | +0,9% | −0,2% | +0,1% | −0,4% | +1,1% | +0,8% | +1,0% | −11,5% |
> | jul/2022 | +1,3% | +1,1% | +1,3% | +2,0% | +1,3% | +1,9% | +1,0% | +4,7% |
> | ago/2022 | +5,2% | −0,4% | +5,0% | −0,1% | +6,0% | +6,5% | +1,2% | +6,2% |
> | set/2022 | +7,2% | +5,4% | +4,0% | +1,6% | +5,0% | +7,8% | +1,1% | +0,5% |
> | out/2022 | +1,6% | −0,1% | −0,3% | +3,4% | −0,4% | +1,9% | +1,0% | +5,5% |
> | nov/2022 | −6,0% | +3,3% | −3,2% | +1,3% | −3,2% | −4,3% | +1,0% | −3,1% |
> | dez/2022 | +1,0% | +0,0% | +1,0% | +7,0% | +3,0% | +1,4% | +1,1% | −2,4% |
> | jan/2023 | +4,5% | +6,1% | +4,8% | +4,9% | +5,4% | +4,5% | +1,1% | +3,4% |
> | fev/2023 | −0,5% | −0,8% | −1,1% | −1,0% | −1,1% | −0,6% | +0,9% | −7,5% |
> | mar/2023 | +5,9% | +3,4% | +5,0% | +2,9% | +6,5% | +6,8% | +1,2% | −2,9% |
> | abr/2023 | −4,4% | −3,1% | −3,2% | −5,2% | −5,0% | −5,2% | +0,9% | +2,5% |
> | mai/2023 | +2,8% | +2,7% | +2,5% | −0,5% | +2,5% | +3,1% | +1,1% | +3,7% |
> | jun/2023 | +2,1% | +1,9% | +1,3% | +1,4% | +1,8% | +2,3% | +1,1% | +9,0% |
> | jul/2023 | +5,1% | +7,8% | +8,2% | +7,2% | +5,1% | +6,2% | +1,1% | +3,3% |
> | ago/2023 | −0,1% | +1,0% | +0,8% | +3,8% | +0,8% | −0,3% | +1,1% | −5,1% |
> | set/2023 | +0,5% | −0,1% | −0,9% | +2,2% | −0,9% | +0,5% | +1,0% | +0,7% |
> | out/2023 | +2,6% | +3,7% | +4,4% | +5,5% | +4,4% | +3,5% | +1,0% | −2,9% |
> | nov/2023 | +3,6% | −0,5% | +2,8% | +0,2% | +3,3% | +4,4% | +0,9% | +12,5% |
> | dez/2023 | +1,6% | +2,0% | +2,0% | −0,2% | +3,0% | +2,2% | +0,9% | +5,4% |
> | jan/2024 | +0,4% | +0,9% | +0,4% | +2,0% | +0,4% | +0,3% | +1,0% | −4,8% |
> | fev/2024 | +9,9% | +6,6% | +9,3% | +6,4% | +10,4% | +13,8% | +0,8% | +1,0% |
> | mar/2024 | −0,7% | −1,4% | +1,8% | +2,4% | +1,7% | −1,7% | +0,8% | −0,7% |
> | abr/2024 | −1,0% | +1,6% | −1,8% | −1,0% | −1,8% | −1,4% | +0,9% | −1,7% |
> | mai/2024 | −1,5% | −2,4% | −2,4% | −2,7% | −2,4% | −2,1% | +0,8% | −3,0% |
> | jun/2024 | +4,0% | +3,5% | +3,9% | +3,6% | +3,9% | +6,0% | +0,8% | +1,5% |
> | jul/2024 | −0,7% | +0,8% | −1,8% | −0,1% | −1,8% | −1,0% | +0,9% | +3,0% |
> | ago/2024 | +5,8% | +2,1% | +5,4% | +3,2% | +5,4% | +8,3% | +0,9% | +6,5% |
> | set/2024 | +2,2% | −0,2% | +1,8% | −2,3% | +0,8% | +3,3% | +0,8% | −3,1% |
> | out/2024 | +3,6% | +1,6% | +3,5% | +4,4% | +3,0% | +5,0% | +0,9% | −1,6% |
> | nov/2024 | +3,2% | +0,4% | +4,0% | +2,7% | +5,4% | +4,9% | +0,8% | −3,1% |
> | dez/2024 | +7,1% | +3,5% | +8,8% | +3,0% | +6,8% | +8,2% | +0,8% | −4,3% |
> | jan/2025 | +9,0% | +10,1% | +8,4% | +6,7% | +10,5% | +12,1% | +1,0% | +4,9% |
> | fev/2025 | +4,1% | +2,9% | +3,0% | +1,0% | +4,0% | +5,0% | +1,0% | −2,6% |
> | mar/2025 | +2,4% | +4,4% | +2,2% | +2,6% | +3,2% | +2,8% | +1,0% | +6,1% |
> | abr/2025 | −7,1% | −0,3% | −4,4% | −3,5% | −3,5% | −5,3% | +1,1% | +3,7% |
> | mai/2025 | +4,0% | +2,0% | +2,5% | +5,2% | +4,3% | +5,2% | +1,1% | +1,5% |
> | jun/2025 | +0,6% | +0,3% | +2,6% | +1,9% | +1,7% | +1,0% | +1,1% | +1,3% |
> | jul/2025 | +2,1% | +4,8% | +3,6% | −1,0% | +2,4% | +2,6% | +1,3% | −4,2% |
> | ago/2025 | +13,1% | +13,6% | +13,8% | +11,2% | +13,9% | +15,3% | +1,2% | +6,3% |
> | set/2025 | −3,3% | −0,5% | −2,5% | −2,1% | −4,5% | −4,5% | +1,2% | +3,4% |
> | out/2025 | +1,7% | +4,0% | +1,5% | +5,4% | +1,5% | +1,7% | +1,3% | +2,3% |
> | nov/2025 | +7,6% | +4,1% | +6,5% | +3,7% | +7,0% | +10,5% | +1,1% | +6,4% |
> | dez/2025 | +1,5% | +1,3% | +3,4% | −4,2% | +1,5% | +3,8% | +1,1% | +1,3% |
> | jan/2026 | +10,5% | +3,5% | +7,8% | +5,2% | +10,9% | +11,1% | +1,2% | +12,6% |
> | fev/2026 | +3,1% | +2,9% | +0,7% | +3,6% | +1,7% | +2,2% | +1,0% | +4,1% |
> | mar/2026 | +9,2% | +5,0% | +4,0% | −2,5% | +3,4% | +6,4% | +1,2% | −0,7% |
> | abr/2026 | +1,4% | +0,8% | +1,3% | +0,3% | +3,3% | +2,2% | +1,1% | −0,1% |
> | mai/2026 | +3,6% | +7,6% | +5,3% | +5,8% | +1,8% | +3,2% | +1,1% | −7,2% |
> | jun/2026 | −3,2% | −1,7% | −4,8% | −3,6% | −6,8% | −2,5% | +1,1% | −1,0% |
> | jul/2026 | +6,1% | +6,1% | +4,3% | +8,3% | +4,1% | +6,1% | +1,2% | +3,5% |
> | ago/2026 | +5,1% | +2,8% | +4,4% | +1,6% | +1,2% | +4,5% | +1,1% | −0,3% |
> | set/2026 | −2,3% | +3,0% | +6,5% | +5,0% | +6,6% | −0,4% | +1,1% | +5,0% |
> | out/2026 | −5,5% | +1,1% | +2,6% | +1,6% | +3,1% | −2,5% | +0,9% | −5,2% |
> | **Acumulado** | **+267,5%** | **+269,7%** | **+315,6%** | **+206,2%** | **+311,6%** | **+427,0%** | **+81,3%** | **+67,3%** |

### E se o capital por contrato for outro?

| Capital por contrato | ATR 0,21 / 1,03 + CDI | como no vídeo: pontos fixos, com stop móvel + CDI | distância em ATR, sem stop móvel + CDI | alvo 400 · stop 400 (vídeo), ATR, sem stop móvel + CDI | alvo 2.000 (vídeo), ATR, sem stop móvel + CDI |
|---|---|---|---|---|---|
| R\$ 5.000 | +46% ao ano · pior queda −30% | +48% ao ano · pior queda −17% | +54% ao ano · pior queda −22% | +38% ao ano · pior queda −17% | +53% ao ano · pior queda −26% |
| R\$ 10.000 | +30% ao ano · pior queda −15% | +30% ao ano · pior queda −8% | +33% ao ano · pior queda −11% | +25% ao ano · pior queda −8% | +33% ao ano · pior queda −13% |
| R\$ 20.000 | +22% ao ano · pior queda −7% | +22% ao ano · pior queda −4% | +23% ao ano · pior queda −5% | +19% ao ano · pior queda −4% | +23% ao ano · pior queda −6% |
| R\$ 40.000 | +17% ao ano · pior queda −3% | +17% ao ano · pior queda −2% | +18% ao ano · pior queda −2% | +16% ao ano · pior queda −1% | +18% ao ano · pior queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +11% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 27/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 992 operações, 30% de acerto e fator de lucro 1,36. O vídeo mostra: 1.329 operações · 30% de acerto · fator de lucro 1,40 · payoff 1,92 (desde 2021, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,08R por operação no treino (p 0,063) e +0,17R no teste (p 0,000). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,06 a +0,17R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,08 → +0,17R · sem o MACD: +0,08 → +0,10R · MACD linha em vez do histograma: +0,08 → +0,14R · sem 'MACD subindo': +0,07 → +0,15R · sem a máxima/mínima do dia anterior: +0,02 → +0,07R · sem a distância da abertura: +0,08 → +0,08R · sem o horário (velas das 9h00 às 17h00): +0,06 → +0,12R · sem break even: +0,03 → +0,15R · COM stop móvel (como no vídeo): +0,05 → +0,12R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,08 → +0,17R · 25 pts: +0,05 → +0,15R · 30 pts: +0,04 → +0,13R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 1.780 por contrato (começou em set/2026, ainda não recuperada); 17 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 37% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021.
- **As compras carregam o setup:** compras +0,19R × vendas +0,09R por operação.
- **Acerto de ~22%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 26/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
