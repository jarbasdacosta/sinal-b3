---
title: MACD na Tendência
date: 2026-10-27
tags: [setup, win]
---

**Dia já forte (longe da abertura e além do extremo de ontem) com o MACD subindo a favor: entra com break even e stop móvel.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · velas das 9h00 às 11h30 e das 14h00 às 16h00

🎬 **Vídeo de origem:** [Arthur 777 – "parecia uma coincidência, mas não era"](https://youtu.be/eHvY4bvS95c) · testado de forma independente nos nossos dados em 27/10/2026 · página gerada em 27/10/2026 08:55 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 30.766** na versão ATR 0,21 / 1,03 com o capital no CDI (+26% ao ano · pior queda −12%)
> - **R\$ 36.947** na versão como no vídeo: pontos fixos com o capital no CDI (+30% ao ano · pior queda −8%)
> - **R\$ 29.278** na versão distância em ATR com o capital no CDI (+24% ao ano · pior queda −11%)
> - **R\$ 30.603** na versão alvo 400 · stop 400 (vídeo), ATR com o capital no CDI (+25% ao ano · pior queda −8%)
> - **R\$ 28.758** na versão alvo 2.000 (vídeo), ATR com o capital no CDI (+24% ao ano · pior queda −11%)
> - **R\$ 18.119** só no CDI (+13% ao ano)
> - **R\$ 16.732** comprado no Ibovespa (+11% ao ano · pior queda −21%)
>
> - **R\$ 38.621** na versão ATR 0,21 / 1,03 **arriscando 1% do capital por operação** (+31% ao ano · pior queda −11%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

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
| **Break even · stop móvel** | stop no preço de entrada com 100+ pts de lucro; stop na mínima de cada vela com 500+ pts | igual, pela máxima |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 755 pts de stop e 3.776 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 3.670 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas.

### As versões testadas

| | ATR 0,21 / 1,03 (principal) | como no vídeo: pontos fixos | distância em ATR | alvo 400 · stop 400 (vídeo), ATR | alvo 2.000 (vídeo), ATR |
|---|---|---|---|---|---|
| Regra | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | stop 400 · alvo 1.500 pts | stop 400 · alvo 1.500 pts | stop 400 · alvo 400 pts | stop 400 · alvo 2.000 pts |
| Acerto | 30% | 30% | 28% | 44% | 28% |
| Payoff | 2,79 | 2,91 | 2,95 | 1,47 | 2,97 |
| Treino → teste (pts por operação) | +16,6 → +40,8 | +19,3 → +49,4 | +15,8 → +33,7 | +17,0 → +24,4 | +18,1 → +31,7 |
| Retorno ao ano (+ CDI) | +25,6% | +30,3% | +24,3% | +25,4% | +23,9% |
| Pior queda (+ CDI) | −12,2% | −8,2% | −10,7% | −8,4% | −11,2% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 363 | 569 | 932 |
| Operações por mês | 13,4 | 16,7 | 15,3 |
| Taxa de acerto | 29,5% | 30,1% | 29,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 36% / 6% | 2% / 34% / 7% | 2% / 35% / 7% |
| Stop típico | 393 pts | 379 pts | 386 pts |
| Ganho médio · perda média | +608 · −231 pts | +712 · −248 pts | +672 · −241 pts |
| Payoff (ganho médio ÷ perda média) | 2,64 | 2,88 | 2,79 |
| Fator de lucro (total ganho ÷ total perdido) | 1,10 | 1,24 | 1,19 |
| Resultado médio por operação | +16,6 pts (+31,6 sem custo) | +40,8 pts (+55,8 sem custo) | +31,4 pts (+46,4 sem custo) |
| **Lucro líquido** | **+6.032 pts · R\$ 1.206** | **+23.222 pts · R\$ 4.644** | **+29.254 pts · R\$ 5.851** |
| Pior queda (drawdown) | −5.629 pts · −R\$ 1.126 | −7.024 pts · −R\$ 1.405 | −7.024 pts · −R\$ 1.405 |
| Maior sequência de perdas | 16 seguidas | 17 seguidas | 17 seguidas |
| Compras: acerto · lucro | 31% · +1.328 pts | 33% · +20.847 pts | 32% · +22.175 pts |
| Vendas: acerto · lucro | 28% · +4.704 pts | 27% · +2.375 pts | 27% · +7.078 pts |

### Versão como no vídeo: pontos fixos

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

### Versão distância em ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 368 | 606 | 974 |
| Operações por mês | 13,6 | 17,8 | 16,0 |
| Taxa de acerto | 29,9% | 27,6% | 28,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 35% / 7% | 5% / 37% / 7% | 5% / 36% / 7% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +568 · −219 pts | +705 · −222 pts | +651 · −221 pts |
| Payoff (ganho médio ÷ perda média) | 2,59 | 3,18 | 2,95 |
| Fator de lucro (total ganho ÷ total perdido) | 1,10 | 1,21 | 1,17 |
| Resultado médio por operação | +15,8 pts (+30,8 sem custo) | +33,7 pts (+48,7 sem custo) | +27,0 pts (+42,0 sem custo) |
| **Lucro líquido** | **+5.830 pts · R\$ 1.166** | **+20.445 pts · R\$ 4.089** | **+26.275 pts · R\$ 5.255** |
| Pior queda (drawdown) | −4.225 pts · −R\$ 845 | −6.935 pts · −R\$ 1.387 | −6.935 pts · −R\$ 1.387 |
| Maior sequência de perdas | 16 seguidas | 23 seguidas | 23 seguidas |
| Compras: acerto · lucro | 31% · +580 pts | 29% · +21.335 pts | 30% · +21.915 pts |
| Vendas: acerto · lucro | 29% · +5.250 pts | 26% · −890 pts | 27% · +4.360 pts |

### Versão alvo 400 · stop 400 (vídeo), ATR

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

### Versão alvo 2.000 (vídeo), ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 365 | 594 | 959 |
| Operações por mês | 13,5 | 17,5 | 15,7 |
| Taxa de acerto | 29,6% | 27,4% | 28,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 35% / 7% | 3% / 36% / 7% | 2% / 36% / 7% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +574 · −216 pts | +695 · −219 pts | +647 · −218 pts |
| Payoff (ganho médio ÷ perda média) | 2,66 | 3,17 | 2,97 |
| Fator de lucro (total ganho ÷ total perdido) | 1,12 | 1,20 | 1,17 |
| Resultado médio por operação | +18,1 pts (+33,1 sem custo) | +31,7 pts (+46,7 sem custo) | +26,5 pts (+41,5 sem custo) |
| **Lucro líquido** | **+6.610 pts · R\$ 1.322** | **+18.820 pts · R\$ 3.764** | **+25.430 pts · R\$ 5.086** |
| Pior queda (drawdown) | −4.340 pts · −R\$ 868 | −8.175 pts · −R\$ 1.635 | −8.175 pts · −R\$ 1.635 |
| Maior sequência de perdas | 16 seguidas | 22 seguidas | 22 seguidas |
| Compras: acerto · lucro | 31% · +195 pts | 29% · +19.640 pts | 30% · +19.835 pts |
| Vendas: acerto · lucro | 29% · +6.415 pts | 26% · −820 pts | 27% · +5.595 pts |

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

| | ATR 0,21 / 1,03 | como no vídeo: pontos fixos | distância em ATR | alvo 400 · stop 400 (vídeo), ATR | alvo 2.000 (vídeo), ATR | risco 1% | pura | CDI | Ibovespa |
|---|---|---|---|---|---|---|---|---|---|
| **R\$ 10.000 viraram** | **R\$ 30.766** | **R\$ 36.947** | **R\$ 29.278** | **R\$ 30.603** | **R\$ 28.758** | **R\$ 38.621** | **R\$ 16.984** | **R\$ 18.119** | **R\$ 16.732** |
| Retorno ao ano | +25,6% | +30,3% | +24,3% | +25,4% | +23,9% | +31,5% | +11,3% | +12,8% | +11,0% |
| Pior queda | −12,2% | −8,2% | −10,7% | −8,4% | −11,2% | −10,5% | −13,6% | +0,0% | −20,9% |
| Oscilação ao ano | 15,1% | 14,2% | 13,6% | 11,8% | 13,8% | 16,0% | 15,0% | 0,1% | 18,6% |
| Sharpe (acima do CDI) | 0,79 | 1,09 | 0,78 | 0,96 | 0,75 | 1,04 | −0,01 | — | 0,01 |
| Meses acima do CDI | 58% | 58% | 62% | 65% | 63% | 62% | 43% | — | 55% |
| Meses acima do Ibovespa | 53% | 57% | 58% | 58% | 58% | 58% | 50% | 45% | — |
| Pior mês · melhor mês | −7,1% · +14,7% | −3,1% · +13,6% | −5,0% · +13,6% | −5,2% · +11,2% | −5,5% · +14,7% | −5,3% · +17,1% | −8,1% · +13,4% | +0,6% · +1,3% | −11,5% · +12,6% |

![Quedas](setups/img/macd-na-tendencia_queda.png)

### Ano a ano

| Ano | ATR 0,21 / 1,03 | como no vídeo: pontos fixos | distância em ATR | alvo 400 · stop 400 (vídeo), ATR | alvo 2.000 (vídeo), ATR | risco 1% | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|
| 2021* | +1,4% | +2,9% | +0,9% | +0,6% | +1,0% | +1,2% | +1,3% | −0,7% | como no vídeo: pontos fixos |
| 2022 | +10,2% | +13,4% | +10,0% | +22,0% | +10,7% | +13,3% | +12,3% | +4,7% | alvo 400 · stop 400 (vídeo), ATR |
| 2023 | +27,8% | +26,5% | +28,4% | +22,6% | +29,4% | +32,8% | +13,0% | +22,3% | risco 1% |
| 2024 | +14,2% | +18,1% | +15,5% | +23,4% | +15,0% | +18,4% | +10,8% | −10,4% | alvo 400 · stop 400 (vídeo), ATR |
| 2025 | +42,0% | +56,6% | +46,7% | +29,1% | +43,0% | +62,3% | +14,2% | +34,0% | risco 1% |
| 2026* | +32,9% | +35,4% | +21,3% | +27,6% | +20,9% | +31,9% | +11,4% | +9,6% | como no vídeo: pontos fixos |
| **Acumulado no período** | **+207,7%** | **+269,5%** | **+192,8%** | **+206,0%** | **+187,6%** | **+286,2%** | **+81,2%** | **+67,3%** | **risco 1%** |
| **R\$ 10.000 viraram** | **R\$ 30.766** | **R\$ 36.947** | **R\$ 29.278** | **R\$ 30.603** | **R\$ 28.758** | **R\$ 38.621** | **R\$ 18.119** | **R\$ 16.732** | |
| **Média ao ano** | **+25,6%** | **+30,3%** | **+24,3%** | **+25,4%** | **+23,9%** | **+31,5%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano](setups/img/macd-na-tendencia_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 1,03 | como no vídeo: pontos fixos | distância em ATR | alvo 400 · stop 400 (vídeo), ATR | alvo 2.000 (vídeo), ATR | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|
> | nov/2021 | +1,2% | +2,6% | +0,2% | −0,4% | +0,2% | +1,1% | +0,6% | −3,4% |
> | dez/2021 | +0,1% | +0,2% | +0,7% | +1,0% | +0,8% | +0,1% | +0,7% | +2,9% |
> | jan/2022 | −0,3% | +0,1% | −0,7% | +0,8% | −0,7% | −0,5% | +0,7% | +7,0% |
> | fev/2022 | −1,9% | −2,1% | −1,3% | −1,3% | −1,3% | −2,7% | +0,8% | +0,9% |
> | mar/2022 | +6,1% | +5,3% | +5,5% | +3,5% | +6,5% | +7,5% | +0,9% | +6,1% |
> | abr/2022 | +0,0% | −0,2% | −0,9% | +2,1% | −0,9% | −0,4% | +0,8% | −10,1% |
> | mai/2022 | +0,7% | +0,8% | −0,1% | +0,6% | −0,1% | +0,4% | +1,0% | +3,2% |
> | jun/2022 | +1,4% | −0,2% | +0,6% | −0,4% | +1,6% | +1,7% | +1,0% | −11,5% |
> | jul/2022 | +1,1% | +1,1% | +1,1% | +2,0% | +1,1% | +1,6% | +1,0% | +4,7% |
> | ago/2022 | +0,7% | −0,4% | +0,6% | −0,1% | +0,6% | +0,6% | +1,2% | +6,2% |
> | set/2022 | +5,8% | +5,4% | +3,5% | +1,6% | +3,5% | +6,3% | +1,1% | +0,5% |
> | out/2022 | −0,8% | −0,1% | −0,9% | +3,4% | −1,5% | −0,5% | +1,0% | +5,5% |
> | nov/2022 | −4,0% | +3,3% | −1,1% | +1,3% | −1,1% | −2,7% | +1,0% | −3,1% |
> | dez/2022 | +1,5% | +0,0% | +3,4% | +7,0% | +2,7% | +1,7% | +1,1% | −2,4% |
> | jan/2023 | +4,6% | +6,1% | +5,2% | +4,9% | +5,5% | +4,7% | +1,1% | +3,4% |
> | fev/2023 | −0,2% | −0,8% | −0,8% | −1,0% | −0,8% | −0,2% | +0,9% | −7,5% |
> | mar/2023 | +4,2% | +3,4% | +3,4% | +2,9% | +4,0% | +4,9% | +1,2% | −2,9% |
> | abr/2023 | −2,9% | −3,1% | −3,1% | −5,2% | −3,5% | −3,4% | +0,9% | +2,5% |
> | mai/2023 | +2,1% | +2,7% | +1,8% | −0,5% | +1,8% | +2,3% | +1,1% | +3,7% |
> | jun/2023 | +2,1% | +1,9% | +1,9% | +1,4% | +1,9% | +2,4% | +1,1% | +9,0% |
> | jul/2023 | +8,9% | +7,8% | +8,7% | +7,2% | +8,1% | +11,0% | +1,1% | +3,3% |
> | ago/2023 | +1,0% | +1,0% | +1,9% | +3,8% | +1,9% | +1,1% | +1,1% | −5,1% |
> | set/2023 | +1,4% | −0,1% | +0,6% | +2,2% | +0,6% | +1,8% | +1,0% | +0,7% |
> | out/2023 | +2,2% | +3,7% | +4,1% | +5,5% | +4,1% | +2,7% | +1,0% | −2,9% |
> | nov/2023 | +0,3% | −0,5% | −0,1% | +0,2% | −0,1% | +0,0% | +0,9% | +12,5% |
> | dez/2023 | +1,6% | +2,0% | +2,0% | −0,2% | +3,0% | +2,2% | +0,9% | +5,4% |
> | jan/2024 | +1,3% | +0,9% | +1,1% | +2,0% | +1,1% | +1,9% | +1,0% | −4,8% |
> | fev/2024 | +7,3% | +6,6% | +7,1% | +6,4% | +7,1% | +10,0% | +0,8% | +1,0% |
> | mar/2024 | −1,3% | −1,4% | +0,1% | +2,4% | +0,1% | −2,7% | +0,8% | −0,7% |
> | abr/2024 | −0,4% | +1,6% | −0,8% | −1,0% | −0,8% | −0,3% | +0,9% | −1,7% |
> | mai/2024 | −0,8% | −2,4% | −2,4% | −2,7% | −2,4% | −1,1% | +0,8% | −3,0% |
> | jun/2024 | +2,4% | +3,5% | +3,4% | +3,6% | +3,4% | +3,6% | +0,8% | +1,5% |
> | jul/2024 | −2,1% | +0,8% | −1,2% | −0,1% | −1,2% | −3,7% | +0,9% | +3,0% |
> | ago/2024 | +4,1% | +2,1% | +2,7% | +3,2% | +2,7% | +6,3% | +0,9% | +6,5% |
> | set/2024 | −0,5% | −0,2% | −1,1% | −2,3% | −1,5% | −0,7% | +0,8% | −3,1% |
> | out/2024 | +1,9% | +1,6% | +2,0% | +4,4% | +2,0% | +2,5% | +0,9% | −1,6% |
> | nov/2024 | −0,8% | +0,4% | +1,2% | +2,7% | +1,2% | −1,0% | +0,8% | −3,1% |
> | dez/2024 | +2,7% | +3,5% | +2,6% | +3,0% | +2,6% | +2,9% | +0,8% | −4,3% |
> | jan/2025 | +7,5% | +10,1% | +7,7% | +6,7% | +6,9% | +10,3% | +1,0% | +4,9% |
> | fev/2025 | +2,4% | +2,9% | +2,1% | +1,0% | +2,1% | +2,8% | +1,0% | −2,6% |
> | mar/2025 | +2,9% | +4,4% | +2,7% | +2,6% | +3,7% | +3,5% | +1,0% | +6,1% |
> | abr/2025 | −7,1% | −0,3% | −4,4% | −3,5% | −3,5% | −5,3% | +1,1% | +3,7% |
> | mai/2025 | +3,8% | +2,0% | +2,0% | +5,2% | +2,1% | +4,8% | +1,1% | +1,5% |
> | jun/2025 | +0,9% | +0,3% | +2,0% | +1,9% | +2,0% | +1,1% | +1,1% | +1,3% |
> | jul/2025 | +3,3% | +4,8% | +4,8% | −1,0% | +3,5% | +4,1% | +1,3% | −4,2% |
> | ago/2025 | +14,7% | +13,6% | +13,6% | +11,2% | +14,7% | +17,1% | +1,2% | +6,3% |
> | set/2025 | +0,4% | −0,5% | +0,3% | −2,1% | −1,2% | +0,1% | +1,2% | +3,4% |
> | out/2025 | +4,2% | +4,0% | +4,1% | +5,4% | +4,1% | +5,0% | +1,3% | +2,3% |
> | nov/2025 | +4,3% | +4,1% | +3,7% | +3,7% | +3,4% | +6,1% | +1,1% | +6,4% |
> | dez/2025 | −0,3% | +1,3% | +1,5% | −4,2% | −0,4% | +1,4% | +1,1% | +1,3% |
> | jan/2026 | +6,6% | +3,5% | +3,1% | +5,2% | +4,1% | +6,7% | +1,2% | +12,6% |
> | fev/2026 | +8,0% | +2,9% | +1,9% | +3,6% | +2,9% | +5,2% | +1,0% | +4,1% |
> | mar/2026 | +8,1% | +5,0% | +2,3% | −2,5% | +1,4% | +5,6% | +1,2% | −0,7% |
> | abr/2026 | −3,5% | +0,8% | −2,1% | +0,3% | −2,1% | −1,9% | +1,1% | −0,1% |
> | mai/2026 | +5,4% | +7,6% | +3,0% | +5,8% | +2,2% | +4,6% | +1,1% | −7,2% |
> | jun/2026 | −2,7% | −1,7% | −5,0% | −3,6% | −5,5% | −2,1% | +1,1% | −1,0% |
> | jul/2026 | +1,9% | +6,1% | +2,7% | +8,3% | +1,6% | +2,3% | +1,2% | +3,5% |
> | ago/2026 | +8,6% | +2,8% | +5,5% | +1,6% | +5,0% | +7,0% | +1,1% | −0,3% |
> | set/2026 | +3,0% | +3,0% | +7,4% | +5,0% | +8,4% | +3,8% | +1,1% | +5,0% |
> | out/2026 | −5,4% | +1,0% | +1,3% | +1,5% | +1,8% | −2,5% | +0,8% | −5,2% |
> | **Acumulado** | **+207,7%** | **+269,5%** | **+192,8%** | **+206,0%** | **+187,6%** | **+286,2%** | **+81,2%** | **+67,3%** |

### E se o capital por contrato for outro?

| Capital por contrato | ATR 0,21 / 1,03 + CDI | como no vídeo: pontos fixos + CDI | distância em ATR + CDI | alvo 400 · stop 400 (vídeo), ATR + CDI | alvo 2.000 (vídeo), ATR + CDI |
|---|---|---|---|---|---|
| R\$ 5.000 | +37% ao ano · pior queda −25% | +48% ao ano · pior queda −17% | +35% ao ano · pior queda −22% | +38% ao ano · pior queda −17% | +34% ao ano · pior queda −23% |
| R\$ 10.000 | +26% ao ano · pior queda −12% | +30% ao ano · pior queda −8% | +24% ao ano · pior queda −11% | +25% ao ano · pior queda −8% | +24% ao ano · pior queda −11% |
| R\$ 20.000 | +19% ao ano · pior queda −6% | +22% ao ano · pior queda −4% | +19% ao ano · pior queda −5% | +19% ao ano · pior queda −4% | +18% ao ano · pior queda −5% |
| R\$ 40.000 | +16% ao ano · pior queda −3% | +17% ao ano · pior queda −2% | +16% ao ano · pior queda −2% | +16% ao ano · pior queda −1% | +16% ao ano · pior queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +11% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 27/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 992 operações, 30% de acerto e fator de lucro 1,36. O vídeo mostra: 1.329 operações · 30% de acerto · fator de lucro 1,40 · payoff 1,92 (desde 2021, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,05R por operação no treino (p 0,227) e +0,12R no teste (p 0,000). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,05 a +0,12R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,05 → +0,12R · sem o MACD: +0,06 → +0,06R · MACD linha em vez do histograma: +0,05 → +0,10R · sem 'MACD subindo': +0,03 → +0,09R · sem a máxima/mínima do dia anterior: −0,01 → +0,05R · sem a distância da abertura: +0,04 → +0,06R · sem o horário (velas das 9h00 às 17h00): +0,04 → +0,08R · sem break even: +0,02 → +0,11R · sem stop móvel: +0,08 → +0,17R · sem break even e sem stop móvel: +0,03 → +0,15R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,05 → +0,12R · 25 pts: +0,03 → +0,09R · 30 pts: +0,02 → +0,08R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 1.405 por contrato (começou em set/2026, ainda não recuperada); 17 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 42% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2022.
- **As compras carregam o setup:** compras +0,14R × vendas +0,05R por operação.
- **Acerto de ~30%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 26/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
