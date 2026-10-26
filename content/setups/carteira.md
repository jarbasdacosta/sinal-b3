---
title: Carteira de setups
date: 2026-10-26
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 26/10/2026 20:32 BRT · dados de 01/11/2021 a 26/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R$ 10.000, operando os 2 setups juntos (capital dividido igualmente, capital no CDI)
> - **R$ 57.863** (+43% ao ano · pior queda −12% · Sharpe 1,41)
> - CDI: **R$ 18.119** (+13% ao ano) · Ibovespa: **R$ 16.732** (+11% ao ano · pior queda −21%)
> - A combinação com o **melhor retorno por risco (Sharpe)** foi: **Tendência Forte do Dia + ADX da Manhã**.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](img/carteira_curva.png)

## Todas as combinações

Cada linha divide R$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A melhor combinação é a que rende mais **por unidade de risco**, não necessariamente a que rende mais.

| Combinação | R$ 10 mil viraram | Ao ano | Pior queda | Sharpe | Pior ano | Anos acima do CDI |
|---|---|---|---|---|---|---|
| Tendência Forte do Dia + ADX da Manhã ⭐ | R$ 57.863 | +42,7% | −12,3% | 1,41 | +29,2% | 100% |
| Tendência Forte do Dia | R$ 64.671 | +46,0% | −16,1% | 1,28 | +21,6% | 100% |
| ADX da Manhã | R$ 48.116 | +37,5% | −15,4% | 1,03 | +12,0% | 75% |
| *CDI* | *R$ 18.119* | *+12,8%* | *0%* | — | — | — |
| *Ibovespa comprado* | *R$ 16.732* | *+11,0%* | *−20,9%* | *0,01* | — | — |

*Anos acima do CDI conta só os anos completos.*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

| | Tendência Forte do Dia | ADX da Manhã |
|---|---|---|
| **Tendência Forte do Dia** | 1,00 | 0,32 |
| **ADX da Manhã** | 0,32 | 1,00 |

*Correlação do resultado mensal.*

- **Tendência Forte do Dia** e **ADX da Manhã** operaram no mesmo dia em 65% dos dias em que pelo menos um deles operou.

![Quedas da carteira](img/carteira_queda.png)

## Ano a ano

| Ano | Tendência Forte do Dia | ADX da Manhã | Carteira (todos) | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|
| 2021* | −1,7% | +2,1% | +0,3% | +1,3% | −0,7% | ADX da Manhã |
| 2022 | +58,4% | +29,8% | +44,4% | +12,3% | +4,7% | Tendência Forte do Dia |
| 2023 | +50,3% | +12,0% | +30,4% | +13,0% | +22,3% | Tendência Forte do Dia |
| 2024 | +21,6% | +36,5% | +29,2% | +10,8% | −10,4% | ADX da Manhã |
| 2025 | +32,2% | +65,9% | +49,0% | +14,2% | +34,0% | ADX da Manhã |
| 2026* | +71,9% | +43,1% | +59,1% | +11,4% | +9,6% | Tendência Forte do Dia |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano da carteira](img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | Tendência Forte do Dia | ADX da Manhã | Carteira (todos) | CDI | Ibovespa |
> |---|---|---|---|---|---|
> | nov/2021 | −2,9% | +1,3% | −0,8% | +0,6% | −3,4% |
> | dez/2021 | +1,2% | +0,8% | +1,1% | +0,7% | +2,9% |
> | jan/2022 | −0,1% | +2,7% | +1,4% | +0,7% | +7,0% |
> | fev/2022 | −1,1% | −1,1% | −1,1% | +0,8% | +0,9% |
> | mar/2022 | +10,1% | +4,5% | +7,4% | +0,9% | +6,1% |
> | abr/2022 | +4,8% | −4,1% | +0,3% | +0,8% | −10,1% |
> | mai/2022 | −1,2% | +6,6% | +2,7% | +1,0% | +3,2% |
> | jun/2022 | +3,3% | −1,2% | +1,1% | +1,0% | −11,5% |
> | jul/2022 | −0,6% | −2,9% | −1,7% | +1,0% | +4,7% |
> | ago/2022 | +12,6% | +12,3% | +12,5% | +1,2% | +6,2% |
> | set/2022 | +8,3% | −1,7% | +3,2% | +1,1% | +0,5% |
> | out/2022 | +4,1% | +6,3% | +5,3% | +1,0% | +5,5% |
> | nov/2022 | +0,3% | −1,0% | −0,3% | +1,0% | −3,1% |
> | dez/2022 | +7,6% | +7,2% | +7,5% | +1,1% | −2,4% |
> | jan/2023 | +14,1% | −0,1% | +6,8% | +1,1% | +3,4% |
> | fev/2023 | +7,4% | +7,9% | +7,7% | +0,9% | −7,5% |
> | mar/2023 | +3,1% | −2,9% | +0,1% | +1,2% | −2,9% |
> | abr/2023 | −2,0% | +7,4% | +2,6% | +0,9% | +2,5% |
> | mai/2023 | −2,2% | +3,9% | +0,9% | +1,1% | +3,7% |
> | jun/2023 | +10,0% | −4,6% | +2,5% | +1,1% | +9,0% |
> | jul/2023 | +4,8% | +3,2% | +4,0% | +1,1% | +3,3% |
> | ago/2023 | +2,9% | +0,6% | +1,7% | +1,1% | −5,1% |
> | set/2023 | +0,4% | −1,6% | −0,6% | +1,0% | +0,7% |
> | out/2023 | +0,5% | +1,0% | +0,8% | +1,0% | −2,9% |
> | nov/2023 | +2,7% | +3,4% | +3,1% | +0,9% | +12,5% |
> | dez/2023 | +1,1% | −5,7% | −2,3% | +0,9% | +5,4% |
> | jan/2024 | +5,6% | +10,5% | +8,1% | +1,0% | −4,8% |
> | fev/2024 | +9,9% | +7,2% | +8,5% | +0,8% | +1,0% |
> | mar/2024 | +1,7% | −5,6% | −2,0% | +0,8% | −0,7% |
> | abr/2024 | −7,4% | +3,2% | −2,2% | +0,9% | −1,7% |
> | mai/2024 | −0,3% | −4,0% | −2,1% | +0,8% | −3,0% |
> | jun/2024 | −0,1% | −0,9% | −0,4% | +0,8% | +1,5% |
> | jul/2024 | −1,1% | −1,9% | −1,5% | +0,9% | +3,0% |
> | ago/2024 | +2,7% | +4,7% | +3,8% | +0,9% | +6,5% |
> | set/2024 | +4,8% | +2,2% | +3,5% | +0,8% | −3,1% |
> | out/2024 | −2,5% | +6,2% | +1,8% | +0,9% | −1,6% |
> | nov/2024 | +0,1% | +2,3% | +1,2% | +0,8% | −3,1% |
> | dez/2024 | +7,4% | +9,0% | +8,2% | +0,8% | −4,3% |
> | jan/2025 | +11,9% | +8,6% | +10,3% | +1,0% | +4,9% |
> | fev/2025 | +4,5% | +5,5% | +5,0% | +1,0% | −2,6% |
> | mar/2025 | +8,4% | +7,3% | +7,9% | +1,0% | +6,1% |
> | abr/2025 | −6,7% | +0,7% | −3,0% | +1,1% | +3,7% |
> | mai/2025 | +5,4% | +10,5% | +8,0% | +1,1% | +1,5% |
> | jun/2025 | −4,5% | +2,0% | −1,2% | +1,1% | +1,3% |
> | jul/2025 | −0,9% | +4,0% | +1,6% | +1,3% | −4,2% |
> | ago/2025 | +6,9% | +8,2% | +7,6% | +1,2% | +6,3% |
> | set/2025 | −2,4% | +3,8% | +0,7% | +1,2% | +3,4% |
> | out/2025 | −2,9% | +5,1% | +1,1% | +1,3% | +2,3% |
> | nov/2025 | +7,8% | +7,3% | +7,5% | +1,1% | +6,4% |
> | dez/2025 | +2,5% | −9,7% | −3,7% | +1,1% | +1,3% |
> | jan/2026 | +11,3% | +7,3% | +9,4% | +1,2% | +12,6% |
> | fev/2026 | −6,6% | −10,0% | −8,3% | +1,0% | +4,1% |
> | mar/2026 | +15,3% | +1,9% | +8,6% | +1,2% | −0,7% |
> | abr/2026 | +5,8% | +23,4% | +14,4% | +1,1% | −0,1% |
> | mai/2026 | −2,8% | −1,8% | −2,2% | +1,1% | −7,2% |
> | jun/2026 | −0,5% | −2,9% | −1,7% | +1,1% | −1,0% |
> | jul/2026 | +13,5% | −0,1% | +6,7% | +1,2% | +3,5% |
> | ago/2026 | +9,9% | +1,9% | +6,0% | +1,1% | −0,3% |
> | set/2026 | +4,2% | +16,4% | +10,3% | +1,1% | +5,0% |
> | out/2026 | +7,8% | +4,4% | +6,4% | +0,8% | −5,2% |

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
