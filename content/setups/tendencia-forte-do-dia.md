---
title: Tendência Forte do Dia
date: 2026-10-26
tags: [setup, win]
---

**Entra a favor do dia que já mostrou força: preço do lado certo das 3 médias, bem longe da abertura e uma vela confirmando.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · sinais da 1ª vela do dia até 17h00

🎬 **Vídeo de origem:** [Arthur 777 – "encontrei uma coisa absurda nos testes"](https://youtu.be/N4CJ9Yv8To8) · testado de forma independente nos nossos dados em 25 e 26/10/2026 · página gerada em 26/10/2026 23:00 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R$ 10.000 aplicados em nov/2021 viraram
> - **R$ 64.671** na versão ATR 0,36 / 0,15 / 3,75× com o capital no CDI (+46% ao ano · pior queda −16%)
> - **R$ 47.850** na versão ATR ≈ 400/400 com o capital no CDI (+37% ao ano · pior queda −13%)
> - **R$ 55.763** na versão pontos fixos 400/400 com o capital no CDI (+42% ao ano · pior queda −13%)
> - **R$ 18.119** só no CDI (+13% ao ano)
> - **R$ 16.732** comprado no Ibovespa (+11% ao ano · pior queda −21%)
>
> - **R$ 136.688** na versão ATR 0,36 / 0,15 / 3,75× **arriscando 1% do capital por operação** (+70% ao ano · pior queda −24%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/tendencia-forte-do-dia_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Tendência** | a vela **fecha acima** das médias exponenciais de 9, 50 e 200 períodos | a vela **fecha abaixo** das três médias |
| **2. Força do dia** | o fechamento está **pelo menos 0,36 ATR acima** da abertura do dia (≈ 1.321 pts hoje) | o fechamento está **pelo menos 0,36 ATR abaixo** da abertura do dia |
| **3. Gatilho** | a vela **fecha acima da máxima** da vela anterior | a vela **fecha abaixo da mínima** da vela anterior |
| **Entrada** | compra **a mercado** na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop** | **0,15 ATR** abaixo da entrada (≈ 550 pts hoje) | 0,15 ATR acima da entrada |
| **Alvo** | **3,75 × o stop** = 0,56 ATR (≈ 2.064 pts hoje) | o mesmo, para baixo |
| **Fim do dia** | se não bateu stop nem alvo, zera às 18h20 | igual |

- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 3.670 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Quantas operações:** sem limite por dia, mas uma de cada vez — enquanto o dia continuar forte, o setup entra de novo depois que a operação anterior termina.
- **A ordem das médias entre si não importa**, só o preço estar do mesmo lado das três.
- **A ideia:** em dia de tendência forte, cada nova vela de força tende a ter continuação.
- **De onde veio:** o vídeo usa 700 / 400 / 1.500 pontos fixos. Aqui esses valores viraram múltiplos do ATR (testado em 26/10/2026), porque 700 pontos era 0,7% do índice em 2021 e hoje é menos da metade.

### As versões testadas

| | ATR 0,36 / 0,15 / 3,75× (principal) | ATR ≈ 400/400 | pontos fixos 400/400 |
|---|---|---|---|
| Regra | distância 0,36 ATR · stop 0,15 ATR · alvo 3,75× o stop | distância 0,36 ATR · stop 0,21 ATR · alvo = stop (o 700/400/400 do vídeo em ATR) | distância 700 · stop 400 · alvo 400 pts (a versão antiga, para comparar) |
| Acerto | 34% | 55% | 55% |
| Payoff | 2,26 | 0,93 | 0,94 |
| Treino → teste (pts por operação) | +44,6 → +36,3 | +27,7 → +17,5 | +24,0 → +21,2 |
| Retorno ao ano (+ CDI) | +46,0% | +37,3% | +41,6% |
| Pior queda (+ CDI) | −16,1% | −12,8% | −13,4% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R$ = pontos × R$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,36 / 0,15 / 3,75×

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 715 | 1.036 | 1.751 |
| Operações por mês | 26,5 | 30,5 | 28,7 |
| Taxa de acerto | 36,1% | 33,4% | 34,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 12% / 60% / 28% | 16% / 62% / 22% | 14% / 61% / 24% |
| Stop típico | 286 pts | 281 pts | 282 pts |
| Ganho médio · perda média | +659 · −302 pts | +759 · −326 pts | +716 · −316 pts |
| Payoff (ganho médio ÷ perda média) | 2,18 | 2,33 | 2,26 |
| Fator de lucro (total ganho ÷ total perdido) | 1,23 | 1,17 | 1,19 |
| Resultado médio por operação | +44,6 pts (+59,6 sem custo) | +36,3 pts (+51,3 sem custo) | +39,7 pts (+54,7 sem custo) |
| **Lucro líquido** | **+31.898 pts · R$ 6.380** | **+37.642 pts · R$ 7.528** | **+69.540 pts · R$ 13.908** |
| Pior queda (drawdown) | −5.514 pts · −R$ 1.103 | −9.728 pts · −R$ 1.946 | −9.728 pts · −R$ 1.946 |
| Maior sequência de perdas | 14 seguidas | 14 seguidas | 14 seguidas |
| Compras: acerto · lucro | 38% · +16.421 pts | 34% · +26.023 pts | 36% · +42.444 pts |
| Vendas: acerto · lucro | 34% · +15.477 pts | 33% · +11.619 pts | 33% · +27.096 pts |

### Versão ATR ≈ 400/400

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 1.014 | 1.456 | 2.470 |
| Operações por mês | 37,6 | 42,8 | 40,5 |
| Taxa de acerto | 55,3% | 54,2% | 54,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 38% / 15% | 48% / 40% / 12% | 48% / 39% / 13% |
| Stop típico | 402 pts | 390 pts | 396 pts |
| Ganho médio · perda média | +370 · −396 pts | +392 · −426 pts | +383 · −414 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,92 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,16 | 1,09 | 1,12 |
| Resultado médio por operação | +27,7 pts (+42,7 sem custo) | +17,5 pts (+32,5 sem custo) | +21,7 pts (+36,7 sem custo) |
| **Lucro líquido** | **+28.091 pts · R$ 5.618** | **+25.453 pts · R$ 5.091** | **+53.544 pts · R$ 10.709** |
| Pior queda (drawdown) | −8.238 pts · −R$ 1.648 | −8.516 pts · −R$ 1.703 | −8.516 pts · −R$ 1.703 |
| Maior sequência de perdas | 8 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 56% · +14.763 pts | 55% · +14.052 pts | 55% · +28.816 pts |
| Vendas: acerto · lucro | 55% · +13.328 pts | 54% · +11.401 pts | 54% · +24.729 pts |

### Versão pontos fixos 400/400

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 1.131 | 1.591 | 2.722 |
| Operações por mês | 41,9 | 46,8 | 44,6 |
| Taxa de acerto | 54,8% | 54,6% | 54,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 48% / 39% / 13% | 49% / 40% / 11% | 49% / 40% / 12% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +357 · −380 pts | +360 · −386 pts | +359 · −383 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,93 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 1,14 | 1,12 | 1,13 |
| Resultado médio por operação | +24,0 pts (+39,0 sem custo) | +21,2 pts (+36,2 sem custo) | +22,3 pts (+37,3 sem custo) |
| **Lucro líquido** | **+27.155 pts · R$ 5.431** | **+33.665 pts · R$ 6.733** | **+60.820 pts · R$ 12.164** |
| Pior queda (drawdown) | −8.935 pts · −R$ 1.787 | −10.310 pts · −R$ 2.062 | −10.310 pts · −R$ 2.062 |
| Maior sequência de perdas | 8 seguidas | 10 seguidas | 10 seguidas |
| Compras: acerto · lucro | 56% · +14.665 pts | 55% · +19.400 pts | 55% · +34.065 pts |
| Vendas: acerto · lucro | 54% · +12.490 pts | 54% · +14.265 pts | 54% · +26.755 pts |

![Pontos acumulados com 1 contrato](setups/img/tendencia-forte-do-dia_pontos.png)

> [!info]- O que significa cada número (clique para abrir)
> - **Taxa de acerto:** de cada 100 operações, quantas deram lucro.
> - **Payoff:** o ganho médio de uma operação boa dividido pela perda média de uma ruim. Payoff 2 = ganha o dobro do que perde.
> - **Fator de lucro:** tudo o que foi ganho dividido por tudo o que foi perdido. Acima de 1 = deu lucro.
> - **Risco/retorno:** o tamanho do alvo comparado com o do stop.
> - **Drawdown (pior queda):** a maior distância entre o ponto mais alto do lucro acumulado e o fundo que veio depois — o pior momento que alguém teria passado seguindo o setup.
> - **Sharpe:** quanto o investimento rendeu acima do CDI para cada unidade de oscilação. Acima de 1 é muito bom.
> - **Treino e teste:** os parâmetros vêm do vídeo; 2024 em diante funciona como prova — se o setup só funcionasse no passado, o teste ia mostrar.

## Comparação com o CDI e com o Ibovespa comprado

A conta usa **R$ 10.000 de capital para cada contrato** (o número de contratos cresce junto com o capital). Na versão **+ CDI** o capital fica aplicado no CDI / Tesouro Selic (aceito como garantia) e o resultado do setup soma por cima — é a comparação justa. Na **pura**, o capital fica parado. Na coluna **risco 1%**, cada operação usa o número de contratos que faz o stop (mais o custo) custar 1% do capital — em geral 3 a 4 vezes mais contratos que 1 por R$ 10 mil. O Ibovespa já inclui dividendos. Sem imposto.

*Colunas: cada versão com 1 contrato por R$ 10 mil e o capital no CDI · **risco 1%** = a versão principal arriscando 1% por operação · **pura** = a principal sem o CDI.*

| | ATR 0,36 / 0,15 / 3,75× | ATR ≈ 400/400 | pontos fixos 400/400 | risco 1% | pura | CDI | Ibovespa |
|---|---|---|---|---|---|---|---|
| **R$ 10.000 viraram** | **R$ 64.671** | **R$ 47.850** | **R$ 55.763** | **R$ 136.688** | **R$ 35.713** | **R$ 18.119** | **R$ 16.732** |
| Retorno ao ano | +46,0% | +37,3% | +41,6% | +69,9% | +29,4% | +12,8% | +11,0% |
| Pior queda | −16,1% | −12,8% | −13,4% | −23,6% | −17,7% | +0,0% | −20,9% |
| Oscilação ao ano | 22,0% | 20,1% | 19,3% | 32,7% | 22,0% | 0,1% | 18,6% |
| Sharpe (acima do CDI) | 1,28 | 1,08 | 1,27 | 1,41 | 0,73 | — | 0,01 |
| Meses acima do CDI | 60% | 58% | 58% | 60% | 57% | — | 55% |
| Meses acima do Ibovespa | 62% | 55% | 57% | 62% | 57% | 45% | — |
| Pior mês · melhor mês | −7,4% · +15,3% | −7,2% · +14,0% | −6,3% · +16,5% | −13,6% · +22,4% | −8,2% · +13,9% | +0,6% · +1,3% | −11,5% · +12,6% |

![Quedas](setups/img/tendencia-forte-do-dia_queda.png)

### Ano a ano

| Ano | ATR 0,36 / 0,15 / 3,75× | ATR ≈ 400/400 | pontos fixos 400/400 | risco 1% | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|
| 2021* | −1,7% | +0,3% | −5,2% | −2,9% | +1,3% | −0,7% | CDI |
| 2022 | +58,4% | +72,5% | +68,7% | +94,7% | +12,3% | +4,7% | risco 1% |
| 2023 | +50,3% | +26,0% | +33,5% | +78,7% | +13,0% | +22,3% | risco 1% |
| 2024 | +21,6% | +29,5% | +31,5% | +31,5% | +10,8% | −10,4% | pontos fixos 400/400 |
| 2025 | +32,2% | +22,2% | +19,8% | +62,2% | +14,2% | +34,0% | risco 1% |
| 2026* | +71,9% | +38,7% | +65,6% | +89,7% | +11,4% | +9,6% | risco 1% |
| **Acumulado no período** | **+546,7%** | **+378,5%** | **+457,6%** | **+1266,9%** | **+81,2%** | **+67,3%** | **risco 1%** |
| **R$ 10.000 viraram** | **R$ 64.671** | **R$ 47.850** | **R$ 55.763** | **R$ 136.688** | **R$ 18.119** | **R$ 16.732** | |
| **Média ao ano** | **+46,0%** | **+37,3%** | **+41,6%** | **+69,9%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano](setups/img/tendencia-forte-do-dia_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,36 / 0,15 / 3,75× | ATR ≈ 400/400 | pontos fixos 400/400 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|---|---|
> | nov/2021 | −2,9% | −1,2% | −5,5% | −3,9% | +0,6% | −3,4% |
> | dez/2021 | +1,2% | +1,5% | +0,4% | +1,1% | +0,7% | +2,9% |
> | jan/2022 | −0,1% | +1,0% | +2,8% | −0,2% | +0,7% | +7,0% |
> | fev/2022 | −1,1% | −1,3% | −4,1% | −2,5% | +0,8% | +0,9% |
> | mar/2022 | +10,1% | +9,3% | +15,0% | +16,3% | +0,9% | +6,1% |
> | abr/2022 | +4,8% | +10,5% | +12,8% | +8,2% | +0,8% | −10,1% |
> | mai/2022 | −1,2% | +2,6% | −3,1% | −2,5% | +1,0% | +3,2% |
> | jun/2022 | +3,3% | −2,0% | −4,6% | +4,9% | +1,0% | −11,5% |
> | jul/2022 | −0,6% | −0,7% | −0,3% | −1,1% | +1,0% | +4,7% |
> | ago/2022 | +12,6% | +11,8% | +12,3% | +22,4% | +1,2% | +6,2% |
> | set/2022 | +8,3% | +9,7% | +8,8% | +11,7% | +1,1% | +0,5% |
> | out/2022 | +4,1% | +14,0% | +10,1% | +5,3% | +1,0% | +5,5% |
> | nov/2022 | +0,3% | −3,2% | +0,0% | +0,4% | +1,0% | −3,1% |
> | dez/2022 | +7,6% | +5,8% | +6,5% | +8,9% | +1,1% | −2,4% |
> | jan/2023 | +14,1% | +11,4% | +16,5% | +18,3% | +1,1% | +3,4% |
> | fev/2023 | +7,4% | +0,8% | +0,1% | +11,1% | +0,9% | −7,5% |
> | mar/2023 | +3,1% | +1,4% | +1,7% | +4,6% | +1,2% | −2,9% |
> | abr/2023 | −2,0% | −2,3% | −3,9% | −3,5% | +0,9% | +2,5% |
> | mai/2023 | −2,2% | −7,2% | −5,8% | −4,6% | +1,1% | +3,7% |
> | jun/2023 | +10,0% | +6,3% | +8,0% | +17,7% | +1,1% | +9,0% |
> | jul/2023 | +4,8% | +5,2% | +6,3% | +7,7% | +1,1% | +3,3% |
> | ago/2023 | +2,9% | +3,3% | +4,1% | +4,4% | +1,1% | −5,1% |
> | set/2023 | +0,4% | −0,3% | −2,5% | +0,3% | +1,0% | +0,7% |
> | out/2023 | +0,5% | +4,4% | +2,0% | +0,0% | +1,0% | −2,9% |
> | nov/2023 | +2,7% | +3,1% | +3,8% | +4,0% | +0,9% | +12,5% |
> | dez/2023 | +1,1% | −1,6% | +1,0% | +2,3% | +0,9% | +5,4% |
> | jan/2024 | +5,6% | +4,3% | +5,5% | +9,7% | +1,0% | −4,8% |
> | fev/2024 | +9,9% | +6,5% | +5,6% | +18,8% | +0,8% | +1,0% |
> | mar/2024 | +1,7% | +0,4% | −0,9% | +2,9% | +0,8% | −0,7% |
> | abr/2024 | −7,4% | −1,8% | +0,2% | −13,6% | +0,9% | −1,7% |
> | mai/2024 | −0,3% | +4,2% | +1,2% | −1,1% | +0,8% | −3,0% |
> | jun/2024 | −0,1% | −0,8% | −0,9% | −0,9% | +0,8% | +1,5% |
> | jul/2024 | −1,1% | +0,3% | −1,8% | −2,5% | +0,9% | +3,0% |
> | ago/2024 | +2,7% | +3,1% | +7,3% | +5,4% | +0,9% | +6,5% |
> | set/2024 | +4,8% | −1,4% | −0,7% | +8,8% | +0,8% | −3,1% |
> | out/2024 | −2,5% | +0,2% | −3,6% | −6,1% | +0,9% | −1,6% |
> | nov/2024 | +0,1% | +3,8% | +5,2% | −0,7% | +0,8% | −3,1% |
> | dez/2024 | +7,4% | +7,8% | +11,7% | +11,1% | +0,8% | −4,3% |
> | jan/2025 | +11,9% | +9,2% | +7,8% | +21,4% | +1,0% | +4,9% |
> | fev/2025 | +4,5% | +6,4% | +4,1% | +7,2% | +1,0% | −2,6% |
> | mar/2025 | +8,4% | +5,3% | +5,4% | +13,2% | +1,0% | +6,1% |
> | abr/2025 | −6,7% | −3,0% | −2,2% | −9,0% | +1,1% | +3,7% |
> | mai/2025 | +5,4% | +1,7% | +1,9% | +10,3% | +1,1% | +1,5% |
> | jun/2025 | −4,5% | −3,2% | −4,5% | −7,0% | +1,1% | +1,3% |
> | jul/2025 | −0,9% | −0,7% | −1,8% | −2,3% | +1,3% | −4,2% |
> | ago/2025 | +6,9% | +4,4% | +5,1% | +10,2% | +1,2% | +6,3% |
> | set/2025 | −2,4% | −3,7% | −5,2% | −5,1% | +1,2% | +3,4% |
> | out/2025 | −2,9% | +0,6% | −0,8% | −6,2% | +1,3% | +2,3% |
> | nov/2025 | +7,8% | +5,4% | +7,4% | +14,5% | +1,1% | +6,4% |
> | dez/2025 | +2,5% | −1,1% | +2,0% | +7,5% | +1,1% | +1,3% |
> | jan/2026 | +11,3% | +6,7% | +12,0% | +16,8% | +1,2% | +12,6% |
> | fev/2026 | −6,6% | +3,6% | +3,5% | −5,4% | +1,0% | +4,1% |
> | mar/2026 | +15,3% | +6,5% | −6,3% | +13,4% | +1,2% | −0,7% |
> | abr/2026 | +5,8% | +9,2% | +14,3% | +6,6% | +1,1% | −0,1% |
> | mai/2026 | −2,8% | −7,2% | +7,1% | −3,1% | +1,1% | −7,2% |
> | jun/2026 | −0,5% | +4,9% | −2,0% | −0,5% | +1,1% | −1,0% |
> | jul/2026 | +13,5% | +10,9% | +10,9% | +16,5% | +1,2% | +3,5% |
> | ago/2026 | +9,9% | +4,6% | +0,9% | +11,3% | +1,1% | −0,3% |
> | set/2026 | +4,2% | −2,0% | +6,7% | +5,0% | +1,1% | +5,0% |
> | out/2026 | +7,8% | −2,5% | +6,4% | +8,3% | +0,8% | −5,2% |
> | **Acumulado** | **+546,7%** | **+378,5%** | **+457,6%** | **+1266,9%** | **+81,2%** | **+67,3%** |

### E se o capital por contrato for outro?

| Capital por contrato | ATR 0,36 / 0,15 / 3,75× + CDI | ATR ≈ 400/400 + CDI | pontos fixos 400/400 + CDI |
|---|---|---|---|
| R$ 5.000 | +80% ao ano · pior queda −32% | +61% ao ano · pior queda −26% | +72% ao ano · pior queda −28% |
| R$ 10.000 | +46% ao ano · pior queda −16% | +37% ao ano · pior queda −13% | +42% ao ano · pior queda −13% |
| R$ 20.000 | +29% ao ano · pior queda −7% | +25% ao ano · pior queda −6% | +27% ao ano · pior queda −6% |
| R$ 40.000 | +21% ao ano · pior queda −3% | +19% ao ano · pior queda −2% | +20% ao ano · pior queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +11% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 25 e 26/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Sim. No 1.500/400 o vídeo mostra 32% de acerto, payoff 2,52 e fator de lucro 1,19; nos nossos dados deu 36%, 2,10 e 1,21 (sem custo). |
| **Ganha do acaso?** | Sim. Na versão principal, entradas em horários quaisquer com o mesmo stop e alvo perdem 0,05R por operação; o setup ganha +0,12R no teste (p < 0,001). |
| **Pontos fixos, % do preço ou ATR?** | ATR. Do treino para o teste o índice subiu ~23%, mas a oscilação diária em pontos ficou igual (ATR ~1.900 pts). Com % do preço o stop cresceu demais e o resultado caiu à metade; com ATR ficou igual ou melhor. |
| **É sorte de parâmetro?** | Não. Na grade em ATR (distância 0,25 a 0,45 × stop 0,15 a 0,30 × alvo 1 a 3,75× o stop), 35 das 36 combinações deram lucro no treino **e** no teste. A versão principal foi a melhor no treino, e as vizinhas também são boas. |
| **Cada condição importa?** | Sim. Tirar as médias, a distância ou o gatilho piora; cada condição sozinha não funciona. |
| **Aguenta custo maior?** | Na versão em pontos, até uns 30 pts por operação (o lucro só zerava com ~36 pts). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,36 / 0,15 / 3,75× foi de −R$ 1.946 por contrato (começou em mai/2026, recuperada em jul/2026); 14 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,36 / 0,15 / 3,75× + CDI ficou abaixo do CDI em 40% dos meses. O resultado aparece no ano.
- **Escolha entre 36 combinações:** a versão principal foi a melhor do treino numa grade de 36; as vizinhas também funcionam, mas é normal ela render um pouco menos daqui para frente.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 26/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
