---
title: Vai na Onda
date: 2026-10-27
tags: [setup, win]
---

**Três velas seguidas para o mesmo lado, renovando a máxima (ou a mínima) do dia com volume acima da média: entra a favor da onda.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · velas das 9h45 às 16h00

🎬 **Vídeo de origem:** [Arthur 777 – "achei um padrão bizarro no mini índice"](https://youtu.be/5JZC82O-0Nc) · testado de forma independente nos nossos dados em 27/10/2026 · página gerada em 27/10/2026 09:35 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 35.680** na versão ATR 0,21 / 1,03 com o capital no CDI (+29% ao ano · pior queda −19%)
> - **R\$ 24.178** na versão como no vídeo (todos os dias) com o capital no CDI (+20% ao ano · pior queda −20%)
> - **R\$ 21.566** na versão sem as sextas (vídeo) com o capital no CDI (+17% ao ano · pior queda −19%)
> - **R\$ 27.051** na versão até 17h00 com o capital no CDI (+22% ao ano · pior queda −17%)
> - **R\$ 25.775** na versão alvo 800 com o capital no CDI (+21% ao ano · pior queda −21%)
> - **R\$ 35.768** na versão alvo 2.000 com o capital no CDI (+29% ao ano · pior queda −18%)
> - **R\$ 18.128** só no CDI (+13% ao ano)
> - **R\$ 16.732** comprado no Ibovespa (+11% ao ano · pior queda −21%)
>
> - **R\$ 53.107** na versão ATR 0,21 / 1,03 **arriscando 1% do capital por operação** (+40% ao ano · pior queda −20%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> Ainda sem operações. O resultado aparece aqui conforme os dias passam.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/vai-na-onda_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Sequência** | **3 velas positivas** seguidas | **3 velas negativas** seguidas |
| **2. Extremo do dia** | a última **renova a máxima do dia** | a última **renova a mínima do dia** |
| **3. Volume** | volume da última **acima da média exponencial de 10** do volume | igual |
| **Entrada** | compra a mercado na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop · alvo** | 400 · 400 pts no vídeo → em ATR aqui | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 755 pts de stop e 3.776 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 3.670 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| | ATR 0,21 / 1,03 (principal) | como no vídeo (todos os dias) | sem as sextas (vídeo) | até 17h00 | alvo 800 | alvo 2.000 |
|---|---|---|---|---|---|---|
| Regra | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | stop 400 · alvo 400 pts | stop 400 · alvo 400 pts | stop 400 · alvo 400 pts | stop 400 · alvo 800 pts | stop 400 · alvo 2.000 pts |
| Acerto | 35% | 53% | 53% | 53% | 39% | 34% |
| Payoff | 2,05 | 0,94 | 0,94 | 0,94 | 1,64 | 2,19 |
| Treino → teste (pts por operação) | +4,7 → +60,5 | −14,5 → +31,8 | −11,2 → +26,1 | −6,6 → +30,1 | −10,7 → +37,7 | −0,5 → +59,4 |
| Retorno ao ano (+ CDI) | +29,4% | +19,6% | +16,8% | +22,3% | +21,1% | +29,5% |
| Pior queda (+ CDI) | −18,7% | −20,0% | −18,7% | −17,0% | −20,8% | −17,7% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 556 | 626 | 1.182 |
| Operações por mês | 20,6 | 18,4 | 19,4 |
| Taxa de acerto | 32,9% | 37,5% | 35,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 4% / 62% / 35% | 5% / 56% / 39% | 4% / 59% / 37% |
| Stop típico | 402 pts | 389 pts | 395 pts |
| Ganho médio · perda média | +864 · −417 pts | +893 · −440 pts | +880 · −429 pts |
| Payoff (ganho médio ÷ perda média) | 2,07 | 2,03 | 2,05 |
| Fator de lucro (total ganho ÷ total perdido) | 1,02 | 1,22 | 1,12 |
| Resultado médio por operação | +4,7 pts (+19,7 sem custo) | +60,5 pts (+75,5 sem custo) | +34,3 pts (+49,3 sem custo) |
| **Lucro líquido** | **+2.606 pts · R\$ 521** | **+37.899 pts · R\$ 7.580** | **+40.505 pts · R\$ 8.101** |
| Pior queda (drawdown) | −13.413 pts · −R\$ 2.683 | −10.155 pts · −R\$ 2.031 | −13.413 pts · −R\$ 2.683 |
| Maior sequência de perdas | 11 seguidas | 12 seguidas | 12 seguidas |
| Compras: acerto · lucro | 33% · +861 pts | 38% · +13.473 pts | 36% · +14.334 pts |
| Vendas: acerto · lucro | 33% · +1.744 pts | 37% · +24.426 pts | 35% · +26.171 pts |

### Versão como no vídeo (todos os dias)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 823 | 912 | 1.735 |
| Operações por mês | 30,5 | 26,8 | 28,4 |
| Taxa de acerto | 49,7% | 55,6% | 52,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 47% / 6% | 53% / 41% / 7% | 50% / 44% / 6% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +373 · −397 pts | +371 · −393 pts | +372 · −395 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,93 | 1,18 | 1,05 |
| Resultado médio por operação | −14,5 pts (+0,5 sem custo) | +31,8 pts (+46,8 sem custo) | +9,8 pts (+24,8 sem custo) |
| **Lucro líquido** | **−11.905 pts · −R\$ 2.381** | **+28.960 pts · R\$ 5.792** | **+17.055 pts · R\$ 3.411** |
| Pior queda (drawdown) | −18.155 pts · −R\$ 3.631 | −6.450 pts · −R\$ 1.290 | −18.155 pts · −R\$ 3.631 |
| Maior sequência de perdas | 7 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 50% · −5.730 pts | 59% · +25.225 pts | 55% · +19.495 pts |
| Vendas: acerto · lucro | 50% · −6.175 pts | 52% · +3.735 pts | 51% · −2.440 pts |

### Versão sem as sextas (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 647 | 721 | 1.368 |
| Operações por mês | 24,0 | 21,2 | 22,4 |
| Taxa de acerto | 50,2% | 54,9% | 52,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 46% / 6% | 52% / 41% / 7% | 50% / 44% / 7% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +371 · −397 pts | +370 · −393 pts | +371 · −395 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,94 | 1,15 | 1,05 |
| Resultado médio por operação | −11,2 pts (+3,8 sem custo) | +26,1 pts (+41,1 sem custo) | +8,5 pts (+23,5 sem custo) |
| **Lucro líquido** | **−7.250 pts · −R\$ 1.450** | **+18.830 pts · R\$ 3.766** | **+11.580 pts · R\$ 2.316** |
| Pior queda (drawdown) | −16.900 pts · −R\$ 3.380 | −6.120 pts · −R\$ 1.224 | −16.900 pts · −R\$ 3.380 |
| Maior sequência de perdas | 8 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 51% · −2.420 pts | 60% · +21.545 pts | 56% · +19.125 pts |
| Vendas: acerto · lucro | 50% · −4.830 pts | 50% · −2.715 pts | 50% · −7.545 pts |

### Versão até 17h00

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 883 | 964 | 1.847 |
| Operações por mês | 32,7 | 28,4 | 30,3 |
| Taxa de acerto | 50,7% | 55,5% | 53,2% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 45% / 8% | 51% / 40% / 9% | 49% / 42% / 9% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +367 · −391 pts | +366 · −389 pts | +366 · −390 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,97 | 1,17 | 1,07 |
| Resultado médio por operação | −6,6 pts (+8,4 sem custo) | +30,1 pts (+45,1 sem custo) | +12,6 pts (+27,6 sem custo) |
| **Lucro líquido** | **−5.820 pts · −R\$ 1.164** | **+29.010 pts · R\$ 5.802** | **+23.190 pts · R\$ 4.638** |
| Pior queda (drawdown) | −15.290 pts · −R\$ 3.058 | −7.135 pts · −R\$ 1.427 | −15.290 pts · −R\$ 3.058 |
| Maior sequência de perdas | 7 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 50% · −4.715 pts | 59% · +25.025 pts | 55% · +20.310 pts |
| Vendas: acerto · lucro | 51% · −1.105 pts | 52% · +3.985 pts | 52% · +2.880 pts |

### Versão alvo 800

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 664 | 756 | 1.420 |
| Operações por mês | 24,6 | 22,2 | 23,3 |
| Taxa de acerto | 37,2% | 41,3% | 39,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 25% / 58% / 17% | 30% / 53% / 17% | 27% / 56% / 17% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +640 · −396 pts | +649 · −392 pts | +645 · −394 pts |
| Payoff (ganho médio ÷ perda média) | 1,62 | 1,66 | 1,64 |
| Fator de lucro (total ganho ÷ total perdido) | 0,96 | 1,16 | 1,06 |
| Resultado médio por operação | −10,7 pts (+4,3 sem custo) | +37,7 pts (+52,7 sem custo) | +15,1 pts (+30,1 sem custo) |
| **Lucro líquido** | **−7.130 pts · −R\$ 1.426** | **+28.525 pts · R\$ 5.705** | **+21.395 pts · R\$ 4.279** |
| Pior queda (drawdown) | −17.925 pts · −R\$ 3.585 | −7.810 pts · −R\$ 1.562 | −17.925 pts · −R\$ 3.585 |
| Maior sequência de perdas | 11 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 39% · +2.105 pts | 43% · +17.700 pts | 41% · +19.805 pts |
| Vendas: acerto · lucro | 35% · −9.235 pts | 40% · +10.825 pts | 38% · +1.590 pts |

### Versão alvo 2.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 584 | 644 | 1.228 |
| Operações por mês | 21,6 | 18,9 | 20,1 |
| Taxa de acerto | 31,5% | 36,0% | 33,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 4% / 63% / 33% | 6% / 57% / 37% | 5% / 60% / 35% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +852 · −393 pts | +856 · −389 pts | +855 · −391 pts |
| Payoff (ganho médio ÷ perda média) | 2,17 | 2,20 | 2,19 |
| Fator de lucro (total ganho ÷ total perdido) | 1,00 | 1,24 | 1,12 |
| Resultado médio por operação | −0,5 pts (+14,5 sem custo) | +59,4 pts (+74,4 sem custo) | +31,0 pts (+46,0 sem custo) |
| **Lucro líquido** | **−265 pts · −R\$ 53** | **+38.280 pts · R\$ 7.656** | **+38.015 pts · R\$ 7.603** |
| Pior queda (drawdown) | −14.825 pts · −R\$ 2.965 | −8.635 pts · −R\$ 1.727 | −14.825 pts · −R\$ 2.965 |
| Maior sequência de perdas | 11 seguidas | 16 seguidas | 16 seguidas |
| Compras: acerto · lucro | 33% · +3.345 pts | 37% · +11.680 pts | 35% · +15.025 pts |
| Vendas: acerto · lucro | 31% · −3.610 pts | 36% · +26.600 pts | 33% · +22.990 pts |

![Pontos acumulados com 1 contrato](setups/img/vai-na-onda_pontos.png)

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

| | ATR 0,21 / 1,03 | como no vídeo (todos os dias) | sem as sextas (vídeo) | até 17h00 | alvo 800 | alvo 2.000 | risco 1% | pura | CDI | Ibovespa |
|---|---|---|---|---|---|---|---|---|---|---|
| **R\$ 10.000 viraram** | **R\$ 35.680** | **R\$ 24.178** | **R\$ 21.566** | **R\$ 27.051** | **R\$ 25.775** | **R\$ 35.768** | **R\$ 53.107** | **R\$ 19.687** | **R\$ 18.128** | **R\$ 16.732** |
| Retorno ao ano | +29,4% | +19,6% | +16,8% | +22,3% | +21,1% | +29,5% | +40,2% | +14,7% | +12,8% | +11,0% |
| Pior queda | −18,7% | −20,0% | −18,7% | −17,0% | −20,8% | −17,7% | −19,8% | −25,8% | +0,0% | −20,9% |
| Oscilação ao ano | 23,3% | 15,1% | 13,3% | 15,4% | 18,7% | 21,7% | 26,0% | 23,3% | 0,1% | 18,6% |
| Sharpe (acima do CDI) | 0,70 | 0,46 | 0,33 | 0,60 | 0,47 | 0,74 | 0,97 | 0,19 | — | 0,01 |
| Meses acima do CDI | 57% | 45% | 48% | 55% | 50% | 57% | 63% | 45% | — | 55% |
| Meses acima do Ibovespa | 52% | 57% | 50% | 55% | 55% | 57% | 55% | 47% | 45% | — |
| Pior mês · melhor mês | −9,5% · +27,4% | −8,6% · +11,4% | −9,9% · +9,7% | −7,4% · +13,1% | −8,9% · +13,6% | −12,2% · +25,3% | −10,6% · +24,1% | −10,3% · +25,8% | +0,6% · +1,3% | −11,5% · +12,6% |

![Quedas](setups/img/vai-na-onda_queda.png)

### Ano a ano

| Ano | ATR 0,21 / 1,03 | como no vídeo (todos os dias) | sem as sextas (vídeo) | até 17h00 | alvo 800 | alvo 2.000 | risco 1% | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|---|---|
| 2021* | −3,9% | −5,4% | −9,3% | −4,6% | −1,3% | −13,8% | −3,7% | +1,3% | −0,7% | CDI |
| 2022 | +5,0% | +1,6% | +6,8% | +2,7% | −3,7% | +17,1% | +8,2% | +12,3% | +4,7% | alvo 2.000 |
| 2023 | +26,9% | +2,9% | +10,9% | +13,0% | +13,6% | +24,3% | +36,6% | +13,0% | +22,3% | risco 1% |
| 2024 | +62,1% | +30,2% | +18,3% | +29,3% | +46,0% | +60,5% | +97,1% | +10,8% | −10,4% | risco 1% |
| 2025 | +22,7% | +39,0% | +28,3% | +38,2% | +28,2% | +34,8% | +36,3% | +14,2% | +34,0% | como no vídeo (todos os dias) |
| 2026* | +40,0% | +35,0% | +32,3% | +36,8% | +27,6% | +31,7% | +38,9% | +11,5% | +9,6% | ATR 0,21 / 1,03 |
| **Acumulado no período** | **+256,8%** | **+141,8%** | **+115,7%** | **+170,5%** | **+157,7%** | **+257,7%** | **+431,1%** | **+81,3%** | **+67,3%** | **risco 1%** |
| **R\$ 10.000 viraram** | **R\$ 35.680** | **R\$ 24.178** | **R\$ 21.566** | **R\$ 27.051** | **R\$ 25.775** | **R\$ 35.768** | **R\$ 53.107** | **R\$ 18.128** | **R\$ 16.732** | |
| **Média ao ano** | **+29,4%** | **+19,6%** | **+16,8%** | **+22,3%** | **+21,1%** | **+29,5%** | **+40,2%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano](setups/img/vai-na-onda_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 1,03 | como no vídeo (todos os dias) | sem as sextas (vídeo) | até 17h00 | alvo 800 | alvo 2.000 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|---|---|
> | nov/2021 | −8,9% | −5,4% | −5,9% | −5,4% | −5,7% | −12,2% | −8,4% | +0,6% | −3,4% |
> | dez/2021 | +5,5% | +0,1% | −3,6% | +0,8% | +4,7% | −1,8% | +5,1% | +0,7% | +2,9% |
> | jan/2022 | −0,7% | −3,6% | −4,0% | −2,9% | −0,6% | −1,2% | −0,7% | +0,7% | +7,0% |
> | fev/2022 | +1,1% | −2,4% | −1,3% | −1,6% | −1,2% | +4,4% | +2,0% | +0,8% | +0,9% |
> | mar/2022 | +9,0% | +4,7% | +0,8% | +4,7% | +4,9% | +9,7% | +10,8% | +0,9% | +6,1% |
> | abr/2022 | −2,0% | −1,7% | −1,0% | −1,1% | −2,2% | −4,2% | −3,4% | +0,8% | −10,1% |
> | mai/2022 | +0,4% | −0,3% | +4,0% | +1,4% | +1,7% | +1,6% | +1,3% | +1,0% | +3,2% |
> | jun/2022 | +0,1% | −5,4% | −2,1% | −6,2% | −6,3% | −4,8% | −0,2% | +1,0% | −11,5% |
> | jul/2022 | −5,0% | −4,0% | −0,3% | −4,0% | −3,2% | −3,5% | −6,9% | +1,0% | +4,7% |
> | ago/2022 | +10,3% | +7,0% | +4,8% | +7,4% | +6,6% | +9,2% | +12,6% | +1,2% | +6,2% |
> | set/2022 | −3,0% | +2,6% | +2,0% | +3,0% | −1,9% | −2,1% | −2,9% | +1,1% | +0,5% |
> | out/2022 | −1,5% | +7,2% | +3,3% | +5,5% | −0,6% | +6,7% | −0,9% | +1,0% | +5,5% |
> | nov/2022 | +4,5% | +0,1% | +1,4% | +0,1% | +1,2% | +3,5% | +3,6% | +1,0% | −3,1% |
> | dez/2022 | −6,8% | −1,7% | −0,6% | −2,6% | −1,6% | −1,9% | −5,5% | +1,1% | −2,4% |
> | jan/2023 | +7,2% | +0,2% | +0,4% | +1,8% | +1,0% | +4,5% | +7,3% | +1,1% | +3,4% |
> | fev/2023 | −9,5% | −8,6% | −9,9% | −7,4% | −8,9% | −9,7% | −10,6% | +0,9% | −7,5% |
> | mar/2023 | −3,7% | −1,7% | −1,4% | −0,9% | −1,9% | −3,3% | −4,3% | +1,2% | −2,9% |
> | abr/2023 | +1,4% | −2,3% | −0,7% | −2,3% | +3,4% | +1,8% | +1,7% | +0,9% | +2,5% |
> | mai/2023 | +1,7% | +1,0% | +1,2% | +0,6% | +1,0% | +1,2% | +1,7% | +1,1% | +3,7% |
> | jun/2023 | +7,4% | +1,3% | +3,1% | +2,1% | +3,9% | +6,8% | +10,4% | +1,1% | +9,0% |
> | jul/2023 | −1,7% | −1,0% | −2,2% | +0,6% | −2,1% | −1,6% | −2,1% | +1,1% | +3,3% |
> | ago/2023 | +5,6% | +5,0% | +5,1% | +5,0% | +5,3% | +7,1% | +6,8% | +1,1% | −5,1% |
> | set/2023 | −3,5% | −0,6% | +1,0% | −0,1% | −1,0% | −3,2% | −5,8% | +1,0% | +0,7% |
> | out/2023 | +6,1% | +2,6% | +5,4% | +3,0% | +2,3% | +3,9% | +8,1% | +1,0% | −2,9% |
> | nov/2023 | +5,7% | +2,9% | +4,6% | +3,3% | +4,0% | +6,9% | +6,8% | +0,9% | +12,5% |
> | dez/2023 | +8,9% | +4,8% | +4,9% | +7,4% | +6,8% | +9,4% | +14,6% | +0,9% | +5,4% |
> | jan/2024 | +4,0% | −3,7% | −1,9% | −3,3% | +5,5% | +6,1% | +5,3% | +1,0% | −4,8% |
> | fev/2024 | +2,8% | −3,3% | +0,0% | −4,1% | +2,1% | +4,1% | +3,8% | +0,8% | +1,0% |
> | mar/2024 | −1,3% | +2,1% | −0,2% | +2,1% | −1,1% | −1,0% | −2,7% | +0,8% | −0,7% |
> | abr/2024 | +5,2% | +5,8% | +2,0% | +5,1% | +7,9% | +4,2% | +7,0% | +0,9% | −1,7% |
> | mai/2024 | +0,8% | −0,6% | −1,6% | −0,6% | −1,2% | +0,3% | +1,2% | +0,8% | −3,0% |
> | jun/2024 | +0,5% | −0,5% | +0,4% | −0,4% | −0,8% | −0,2% | −0,4% | +0,8% | +1,5% |
> | jul/2024 | +7,1% | +5,5% | +2,9% | +5,5% | +5,4% | +5,9% | +14,0% | +0,9% | +3,0% |
> | ago/2024 | +3,4% | +5,1% | +6,1% | +5,4% | +3,9% | +5,7% | +5,0% | +0,9% | +6,5% |
> | set/2024 | +10,5% | +9,2% | +2,8% | +9,6% | +10,2% | +11,7% | +15,9% | +0,8% | −3,1% |
> | out/2024 | +0,6% | −0,4% | +1,4% | +0,5% | −0,4% | −1,1% | +1,1% | +0,9% | −1,6% |
> | nov/2024 | +5,7% | +1,7% | −0,6% | +1,6% | +0,5% | +5,7% | +8,8% | +0,8% | −3,1% |
> | dez/2024 | +10,7% | +6,6% | +5,9% | +5,4% | +7,3% | +7,6% | +12,6% | +0,8% | −4,3% |
> | jan/2025 | +8,5% | +11,4% | +9,7% | +13,1% | +12,5% | +10,9% | +11,4% | +1,0% | +4,9% |
> | fev/2025 | +5,4% | +8,8% | +5,3% | +7,3% | +4,1% | +5,5% | +7,1% | +1,0% | −2,6% |
> | mar/2025 | +1,4% | +0,4% | −1,7% | +0,4% | +3,3% | +0,3% | +2,3% | +1,0% | +6,1% |
> | abr/2025 | −7,0% | −0,9% | −3,0% | −1,7% | −5,1% | −2,8% | −4,8% | +1,1% | +3,7% |
> | mai/2025 | +8,2% | +0,3% | +1,2% | −0,4% | +5,5% | +8,7% | +10,4% | +1,1% | +1,5% |
> | jun/2025 | +2,0% | +0,7% | +0,9% | +0,7% | +2,5% | +2,7% | +2,6% | +1,1% | +1,3% |
> | jul/2025 | −1,4% | +0,6% | +0,1% | +1,4% | +0,4% | −1,5% | −1,8% | +1,3% | −4,2% |
> | ago/2025 | +1,5% | +4,4% | +2,2% | +3,8% | +1,2% | +2,3% | +1,5% | +1,2% | +6,3% |
> | set/2025 | +2,8% | +4,7% | +4,8% | +4,3% | +0,1% | +1,5% | +3,8% | +1,2% | +3,4% |
> | out/2025 | −0,0% | +4,1% | +5,0% | +4,1% | +0,2% | −0,3% | −0,3% | +1,3% | +2,3% |
> | nov/2025 | −1,9% | −2,2% | −0,7% | −1,3% | −0,8% | −0,2% | −2,4% | +1,1% | +6,4% |
> | dez/2025 | +2,2% | +1,9% | +2,1% | +1,9% | +2,1% | +3,8% | +2,8% | +1,1% | +1,3% |
> | jan/2026 | +0,9% | +7,0% | +5,5% | +7,8% | −0,9% | +3,7% | +3,2% | +1,2% | +12,6% |
> | fev/2026 | +3,9% | +8,2% | +8,3% | +7,3% | +5,8% | +1,0% | +2,9% | +1,0% | +4,1% |
> | mar/2026 | +15,5% | −0,2% | −0,7% | −1,0% | +1,5% | +2,5% | +9,6% | +1,2% | −0,7% |
> | abr/2026 | +5,0% | −0,1% | −1,5% | +1,3% | +0,9% | +4,5% | +5,2% | +1,1% | −0,1% |
> | mai/2026 | −4,6% | −1,4% | +0,4% | −2,6% | −2,3% | −6,2% | −3,5% | +1,1% | −7,2% |
> | jun/2026 | −2,7% | −1,0% | −0,7% | −1,6% | −2,8% | −1,0% | −1,7% | +1,1% | −1,0% |
> | jul/2026 | +27,4% | +7,2% | +6,5% | +9,0% | +13,6% | +25,3% | +24,1% | +1,2% | +3,5% |
> | ago/2026 | +1,7% | +0,2% | −1,9% | +1,2% | +5,4% | −1,8% | +1,6% | +1,1% | −0,3% |
> | set/2026 | +1,0% | +7,7% | +9,6% | +7,7% | +4,3% | +7,1% | +0,8% | +1,1% | +5,0% |
> | out/2026 | −9,3% | +3,5% | +3,6% | +3,5% | +0,2% | −4,2% | −6,0% | +0,9% | −5,2% |
> | **Acumulado** | **+256,8%** | **+141,8%** | **+115,7%** | **+170,5%** | **+157,7%** | **+257,7%** | **+431,1%** | **+81,3%** | **+67,3%** |

### E se o capital por contrato for outro?

| Capital por contrato | ATR 0,21 / 1,03 + CDI | como no vídeo (todos os dias) + CDI | sem as sextas (vídeo) + CDI | até 17h00 + CDI | alvo 800 + CDI | alvo 2.000 + CDI |
|---|---|---|---|---|---|---|
| R\$ 5.000 | +41% ao ano · pior queda −41% | +24% ao ano · pior queda −45% | +19% ao ano · pior queda −42% | +30% ao ano · pior queda −39% | +26% ao ano · pior queda −47% | +42% ao ano · pior queda −38% |
| R\$ 10.000 | +29% ao ano · pior queda −19% | +20% ao ano · pior queda −20% | +17% ao ano · pior queda −19% | +22% ao ano · pior queda −17% | +21% ao ano · pior queda −21% | +29% ao ano · pior queda −18% |
| R\$ 20.000 | +22% ao ano · pior queda −9% | +16% ao ano · pior queda −7% | +15% ao ano · pior queda −8% | +18% ao ano · pior queda −6% | +17% ao ano · pior queda −6% | +22% ao ano · pior queda −8% |
| R\$ 40.000 | +17% ao ano · pior queda −4% | +15% ao ano · pior queda −2% | +14% ao ano · pior queda −3% | +15% ao ano · pior queda −2% | +15% ao ano · pior queda −2% | +17% ao ano · pior queda −3% |

*Referência: CDI +13% ao ano · Ibovespa +11% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 27/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1735 operações, 53% de acerto e fator de lucro 1,14. O vídeo mostra: ~3.078 operações · 54% de acerto · fator de lucro 1,22 · payoff 1,01 (desde 2016, sem as sextas, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,03R por operação no treino (p 0,599) e +0,18R no teste (p 0,000). |
| **É sorte de parâmetro?** | 6 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,05 a +0,24R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,03 → +0,18R · sem o volume: +0,02 → +0,12R · sem renovar o extremo do dia: +0,07 → +0,11R · 2 velas em vez de 3: +0,01 → +0,12R · 4 velas em vez de 3: +0,04 → +0,20R · volume com média de 20: +0,01 → +0,14R · sem o horário (velas das 9h00 às 17h30): +0,05 → +0,11R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,03 → +0,18R · 25 pts: +0,01 → +0,15R · 30 pts: −0,00 → +0,14R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 2.683 por contrato (começou em abr/2022, recuperada em dez/2023); 12 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 43% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021, 2022.
- **Acerto de ~36%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 26/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
