---
title: Carteira de setups
date: 2026-10-26
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 26/10/2026 21:03 BRT · dados de 01/11/2021 a 26/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R$ 10.000, operando os 3 setups juntos (capital dividido igualmente, capital no CDI)
> - **R$ 58.599** (+43% ao ano · pior queda −10% · Sharpe 1,61)
> - CDI: **R$ 18.119** (+13% ao ano) · Ibovespa: **R$ 16.732** (+11% ao ano · pior queda −21%)
> - A combinação com o **melhor retorno por risco (Sharpe)** foi: **Tendência Forte do Dia + ADX da Manhã + IFR de Tendência**.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Todas as combinações

Cada linha divide R$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A melhor combinação é a que rende mais **por unidade de risco**, não necessariamente a que rende mais.

| Combinação | R$ 10 mil viraram | Ao ano | Pior queda | Sharpe | Pior ano | Anos acima do CDI |
|---|---|---|---|---|---|---|
| Tendência Forte do Dia + ADX da Manhã + IFR de Tendência ⭐ | R$ 58.599 | +43,1% | −10,1% | 1,61 | +29,9% | 100% |
| IFR de Tendência | R$ 57.840 | +42,7% | −7,5% | 1,59 | +28,3% | 100% |
| Tendência Forte do Dia + IFR de Tendência | R$ 62.447 | +44,9% | −11,3% | 1,59 | +26,3% | 100% |
| ADX da Manhã + IFR de Tendência | R$ 54.155 | +40,8% | −8,5% | 1,51 | +20,3% | 100% |
| Tendência Forte do Dia + ADX da Manhã | R$ 57.863 | +42,7% | −12,3% | 1,41 | +29,2% | 100% |
| Tendência Forte do Dia | R$ 64.671 | +46,0% | −16,1% | 1,28 | +21,6% | 100% |
| ADX da Manhã | R$ 48.116 | +37,5% | −15,4% | 1,03 | +12,0% | 75% |
| *CDI* | *R$ 18.119* | *+12,8%* | *0%* | — | — | — |
| *Ibovespa comprado* | *R$ 16.732* | *+11,0%* | *−20,9%* | *0,01* | — | — |

*Anos acima do CDI conta só os anos completos.*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

| | Tendência Forte do Dia | ADX da Manhã | IFR de Tendência |
|---|---|---|---|
| **Tendência Forte do Dia** | 1,00 | 0,32 | 0,41 |
| **ADX da Manhã** | 0,32 | 1,00 | 0,32 |
| **IFR de Tendência** | 0,41 | 0,32 | 1,00 |

*Correlação do resultado mensal.*

- **Tendência Forte do Dia** e **ADX da Manhã** operaram no mesmo dia em 65% dos dias em que pelo menos um deles operou.
- **Tendência Forte do Dia** e **IFR de Tendência** operaram no mesmo dia em 50% dos dias em que pelo menos um deles operou.
- **ADX da Manhã** e **IFR de Tendência** operaram no mesmo dia em 48% dos dias em que pelo menos um deles operou.

![Quedas da carteira](setups/img/carteira_queda.png)

## Ano a ano

| Ano | Tendência Forte do Dia | ADX da Manhã | IFR de Tendência | Carteira (todos) | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|
| 2021* | −1,7% | +2,1% | −3,6% | −1,0% | +1,3% | −0,7% | ADX da Manhã |
| 2022 | +58,4% | +29,8% | +51,5% | +47,1% | +12,3% | +4,7% | Tendência Forte do Dia |
| 2023 | +50,3% | +12,0% | +28,3% | +29,9% | +13,0% | +22,3% | Tendência Forte do Dia |
| 2024 | +21,6% | +36,5% | +30,7% | +29,9% | +10,8% | −10,4% | ADX da Manhã |
| 2025 | +32,2% | +65,9% | +55,3% | +51,4% | +14,2% | +34,0% | ADX da Manhã |
| 2026* | +71,9% | +43,1% | +52,0% | +57,3% | +11,4% | +9,6% | Tendência Forte do Dia |
| **Acumulado no período** | **+546,7%** | **+381,2%** | **+478,4%** | **+486,0%** | **+81,2%** | **+67,3%** | **Tendência Forte do Dia** |
| **R$ 10.000 viraram** | **R$ 64.671** | **R$ 48.116** | **R$ 57.840** | **R$ 58.599** | **R$ 18.119** | **R$ 16.732** | |
| **Média ao ano** | **+46,0%** | **+37,5%** | **+42,7%** | **+43,1%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | Tendência Forte do Dia | ADX da Manhã | IFR de Tendência | Carteira (todos) | CDI | Ibovespa |
> |---|---|---|---|---|---|---|
> | nov/2021 | −2,9% | +1,3% | −1,9% | −1,1% | +0,6% | −3,4% |
> | dez/2021 | +1,2% | +0,8% | −1,8% | +0,1% | +0,7% | +2,9% |
> | jan/2022 | −0,1% | +2,7% | +6,4% | +3,1% | +0,7% | +7,0% |
> | fev/2022 | −1,1% | −1,1% | −2,6% | −1,6% | +0,8% | +0,9% |
> | mar/2022 | +10,1% | +4,5% | +7,8% | +7,5% | +0,9% | +6,1% |
> | abr/2022 | +4,8% | −4,1% | +0,6% | +0,4% | +0,8% | −10,1% |
> | mai/2022 | −1,2% | +6,6% | +2,0% | +2,5% | +1,0% | +3,2% |
> | jun/2022 | +3,3% | −1,2% | +3,5% | +1,9% | +1,0% | −11,5% |
> | jul/2022 | −0,6% | −2,9% | +1,0% | −0,8% | +1,0% | +4,7% |
> | ago/2022 | +12,6% | +12,3% | +11,5% | +12,2% | +1,2% | +6,2% |
> | set/2022 | +8,3% | −1,7% | −1,2% | +1,8% | +1,1% | +0,5% |
> | out/2022 | +4,1% | +6,3% | +6,2% | +5,6% | +1,0% | +5,5% |
> | nov/2022 | +0,3% | −1,0% | +1,7% | +0,4% | +1,0% | −3,1% |
> | dez/2022 | +7,6% | +7,2% | +6,2% | +7,1% | +1,1% | −2,4% |
> | jan/2023 | +14,1% | −0,1% | +2,0% | +5,2% | +1,1% | +3,4% |
> | fev/2023 | +7,4% | +7,9% | +1,4% | +5,5% | +0,9% | −7,5% |
> | mar/2023 | +3,1% | −2,9% | +0,4% | +0,2% | +1,2% | −2,9% |
> | abr/2023 | −2,0% | +7,4% | +2,2% | +2,5% | +0,9% | +2,5% |
> | mai/2023 | −2,2% | +3,9% | +0,7% | +0,9% | +1,1% | +3,7% |
> | jun/2023 | +10,0% | −4,6% | +1,3% | +2,1% | +1,1% | +9,0% |
> | jul/2023 | +4,8% | +3,2% | +5,9% | +4,7% | +1,1% | +3,3% |
> | ago/2023 | +2,9% | +0,6% | +5,1% | +2,9% | +1,1% | −5,1% |
> | set/2023 | +0,4% | −1,6% | +0,1% | −0,3% | +1,0% | +0,7% |
> | out/2023 | +0,5% | +1,0% | +3,6% | +1,7% | +1,0% | −2,9% |
> | nov/2023 | +2,7% | +3,4% | +2,1% | +2,8% | +0,9% | +12,5% |
> | dez/2023 | +1,1% | −5,7% | +0,6% | −1,4% | +0,9% | +5,4% |
> | jan/2024 | +5,6% | +10,5% | −0,9% | +5,0% | +1,0% | −4,8% |
> | fev/2024 | +9,9% | +7,2% | +5,8% | +7,6% | +0,8% | +1,0% |
> | mar/2024 | +1,7% | −5,6% | +1,5% | −0,8% | +0,8% | −0,7% |
> | abr/2024 | −7,4% | +3,2% | +5,1% | +0,2% | +0,9% | −1,7% |
> | mai/2024 | −0,3% | −4,0% | −1,4% | −1,9% | +0,8% | −3,0% |
> | jun/2024 | −0,1% | −0,9% | +1,3% | +0,2% | +0,8% | +1,5% |
> | jul/2024 | −1,1% | −1,9% | +3,6% | +0,2% | +0,9% | +3,0% |
> | ago/2024 | +2,7% | +4,7% | +2,1% | +3,2% | +0,9% | +6,5% |
> | set/2024 | +4,8% | +2,2% | +2,2% | +3,1% | +0,8% | −3,1% |
> | out/2024 | −2,5% | +6,2% | +1,4% | +1,7% | +0,9% | −1,6% |
> | nov/2024 | +0,1% | +2,3% | +4,5% | +2,3% | +0,8% | −3,1% |
> | dez/2024 | +7,4% | +9,0% | +2,2% | +6,2% | +0,8% | −4,3% |
> | jan/2025 | +11,9% | +8,6% | +5,3% | +8,7% | +1,0% | +4,9% |
> | fev/2025 | +4,5% | +5,5% | +6,0% | +5,4% | +1,0% | −2,6% |
> | mar/2025 | +8,4% | +7,3% | −0,4% | +5,1% | +1,0% | +6,1% |
> | abr/2025 | −6,7% | +0,7% | +0,1% | −1,9% | +1,1% | +3,7% |
> | mai/2025 | +5,4% | +10,5% | +6,8% | +7,6% | +1,1% | +1,5% |
> | jun/2025 | −4,5% | +2,0% | +2,3% | −0,1% | +1,1% | +1,3% |
> | jul/2025 | −0,9% | +4,0% | +0,9% | +1,4% | +1,3% | −4,2% |
> | ago/2025 | +6,9% | +8,2% | +14,6% | +10,0% | +1,2% | +6,3% |
> | set/2025 | −2,4% | +3,8% | −3,5% | −0,7% | +1,2% | +3,4% |
> | out/2025 | −2,9% | +5,1% | +2,1% | +1,4% | +1,3% | +2,3% |
> | nov/2025 | +7,8% | +7,3% | +5,9% | +7,0% | +1,1% | +6,4% |
> | dez/2025 | +2,5% | −9,7% | +5,7% | −0,6% | +1,1% | +1,3% |
> | jan/2026 | +11,3% | +7,3% | +4,8% | +7,9% | +1,2% | +12,6% |
> | fev/2026 | −6,6% | −10,0% | +1,6% | −5,1% | +1,0% | +4,1% |
> | mar/2026 | +15,3% | +1,9% | +1,2% | +6,1% | +1,2% | −0,7% |
> | abr/2026 | +5,8% | +23,4% | +7,0% | +11,9% | +1,1% | −0,1% |
> | mai/2026 | −2,8% | −1,8% | +5,1% | +0,2% | +1,1% | −7,2% |
> | jun/2026 | −0,5% | −2,9% | −2,6% | −1,9% | +1,1% | −1,0% |
> | jul/2026 | +13,5% | −0,1% | +8,9% | +7,5% | +1,2% | +3,5% |
> | ago/2026 | +9,9% | +1,9% | +5,8% | +5,9% | +1,1% | −0,3% |
> | set/2026 | +4,2% | +16,4% | −0,6% | +6,7% | +1,1% | +5,0% |
> | out/2026 | +7,8% | +4,4% | +12,4% | +8,4% | +0,8% | −5,2% |
> | **Acumulado** | **+546,7%** | **+381,2%** | **+478,4%** | **+486,0%** | **+81,2%** | **+67,3%** |

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
