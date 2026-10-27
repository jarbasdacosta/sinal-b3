---
title: Carteira de setups
date: 2026-10-26
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 26/10/2026 21:31 BRT · dados de 01/11/2021 a 26/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R$ 10.000, operando os 4 setups juntos (capital dividido igualmente, capital no CDI)
> - **R$ 50.491** (+39% ao ano · pior queda −7% · Sharpe 1,76)
> - CDI: **R$ 18.119** (+13% ao ano) · Ibovespa: **R$ 16.732** (+11% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média** — R$ 42.957, +34% ao ano, pior queda −4%.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

| # | Setup | Sharpe | Retorno acima do CDI ÷ pior queda | Teste ÷ treino | Meses acima do CDI | Ao ano | Pior queda | Correlação com os outros | Operações por mês | Como opera |
|---|---|---|---|---|---|---|---|---|---|---|
| 1º | [**IFR de Tendência**](ifr-de-tendencia) | 1,59 | 4,0 | 150% | 72% | +43% | −7% | 0,19 | 12,6 | entra na força medida pelo IFR · 10h–11h e 14h–16h |
| 2º | [**Tendência Forte do Dia**](tendencia-forte-do-dia) | 1,28 | 2,1 | 81% | 60% | +46% | −16% | 0,25 | 28,7 | segue a tendência já formada (rompimento longe da abertura) · o dia todo, até 17h |
| 3º | [**ADX da Manhã**](adx-da-manha) | 1,03 | 1,6 | 150% | 63% | +37% | −15% | 0,22 | 29,3 | pega o começo da tendência (ADX subindo), stop curto · 10h–11h |
| 4º | [**Pullback na Média**](pullback-na-media) | 1,20 | 2,8 | 28% | 60% | +26% | −5% | −0,04 | 5,0 | entra na volta da correção até a média · 10h30–12h30 e 14h45–15h45 |

*Como o ranking é feito: cada setup ganha uma posição em 4 critérios — **Sharpe** (retorno acima do CDI por oscilação), **retorno acima do CDI ÷ pior queda** (quanto rende para cada 1% de queda que você aguenta), **teste ÷ treino** (quanto do resultado por operação de 2021–2023 se manteve em 2024 em diante; 100% = manteve tudo) e **meses acima do CDI**. Vale a média das 4 posições. Correlação baixa com os outros é bom para a carteira, mas não entra na nota de cada setup.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes:

| Perfil | Combinação | R$ 10 mil viraram | Ao ano | Pior queda | Sharpe | Sharpe treino → teste |
|---|---|---|---|---|---|---|
| ⭐ **Melhor equilíbrio** (recomendada) | IFR de Tendência + Pullback na Média | R$ 42.957 | +34,3% | −3,5% | 1,94 | 2,15 → 1,80 |
| 📈 Maior retorno | Tendência Forte do Dia | R$ 64.671 | +46,0% | −16,1% | 1,28 | 1,58 → 1,12 |
| 🛡️ Menor queda | IFR de Tendência + Pullback na Média | R$ 42.957 | +34,3% | −3,5% | 1,94 | 2,15 → 1,80 |

**Por que a recomendada é IFR de Tendência + Pullback na Média:** ela fica entre as melhores nos três critérios ao mesmo tempo — Sharpe 1,94, rende 6,1× acima do CDI para cada 1% de pior queda, e o Sharpe ficou em 2,15 no treino e 1,80 no teste (não depende de um período só). A correlação média entre os setups dela é −0,17: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com Tendência Forte do Dia, ADX da Manhã, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever.

## Todas as combinações

Cada linha divide R$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios: **Sharpe**, **retorno acima do CDI ÷ pior queda** e o **pior Sharpe entre treino e teste** (para não premiar o que só deu certo num período).

| # | Combinação | R$ 10 mil viraram | Ao ano | Pior queda | Retorno ÷ queda | Sharpe | Sharpe treino → teste | Pior ano | Correlação entre eles |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IFR de Tendência + Pullback na Média ⭐ | R$ 42.957 | +34,3% | −3,5% | 6,1 | 1,94 | 2,15 → 1,80 | +20,6% | −0,17 |
| 2 | Tendência Forte do Dia + IFR de Tendência + Pullback na Média | R$ 50.106 | +38,6% | −7,2% | 3,6 | 1,77 | 2,11 → 1,58 | +21,1% | 0,09 |
| 3 | Tendência Forte do Dia + ADX da Manhã + IFR de Tendência + Pullback na Média | R$ 50.491 | +38,8% | −7,3% | 3,6 | 1,76 | 1,79 → 1,76 | +25,0% | 0,15 |
| 4 | ADX da Manhã + IFR de Tendência + Pullback na Média | R$ 45.566 | +36,0% | −6,2% | 3,7 | 1,75 | 1,54 → 1,89 | +20,4% | 0,06 |
| 5 | IFR de Tendência | R$ 57.840 | +42,7% | −7,5% | 4,0 | 1,59 | 1,40 → 1,73 | +28,3% | — |
| 6 | Tendência Forte do Dia + ADX da Manhã + IFR de Tendência | R$ 58.599 | +43,1% | −10,1% | 3,0 | 1,61 | 1,46 → 1,73 | +29,9% | 0,35 |
| 7 | Tendência Forte do Dia + IFR de Tendência | R$ 62.447 | +44,9% | −11,3% | 2,8 | 1,59 | 1,74 → 1,53 | +26,3% | 0,41 |
| 8 | Tendência Forte do Dia + ADX da Manhã + Pullback na Média | R$ 47.712 | +37,2% | −8,8% | 2,8 | 1,59 | 1,68 → 1,54 | +23,0% | 0,12 |
| 9 | Tendência Forte do Dia + Pullback na Média | R$ 45.853 | +36,1% | −7,6% | 3,1 | 1,52 | 2,03 → 1,18 | +16,4% | 0,03 |
| 10 | ADX da Manhã + IFR de Tendência | R$ 54.155 | +40,8% | −8,5% | 3,3 | 1,51 | 1,00 → 1,83 | +20,3% | 0,32 |
| 11 | Tendência Forte do Dia + ADX da Manhã | R$ 57.863 | +42,7% | −12,3% | 2,4 | 1,41 | 1,26 → 1,51 | +29,2% | 0,32 |
| 12 | ADX da Manhã + Pullback na Média | R$ 39.653 | +32,2% | −8,7% | 2,2 | 1,38 | 1,24 → 1,48 | +16,3% | 0,02 |
| 13 | Pullback na Média | R$ 30.735 | +25,5% | −4,6% | 2,8 | 1,20 | 1,87 → 0,63 | +10,8% | — |
| 14 | Tendência Forte do Dia | R$ 64.671 | +46,0% | −16,1% | 2,1 | 1,28 | 1,58 → 1,12 | +21,6% | — |
| 15 | ADX da Manhã | R$ 48.116 | +37,5% | −15,4% | 1,6 | 1,03 | 0,45 → 1,41 | +12,0% | — |
| | *CDI* | *R$ 18.119* | *+12,8%* | *0%* | — | — | — | — | — |
| | *Ibovespa comprado* | *R$ 16.732* | *+11,0%* | *−20,9%* | — | *0,01* | — | — | — |

*Retorno ÷ queda = retorno ao ano acima do CDI dividido pela pior queda (2 = rendeu por ano o dobro da pior queda).*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

| | Tendência Forte do Dia | ADX da Manhã | IFR de Tendência | Pullback na Média |
|---|---|---|---|---|
| **Tendência Forte do Dia** | 1,00 | 0,32 | 0,41 | 0,03 |
| **ADX da Manhã** | 0,32 | 1,00 | 0,32 | 0,02 |
| **IFR de Tendência** | 0,41 | 0,32 | 1,00 | −0,17 |
| **Pullback na Média** | 0,03 | 0,02 | −0,17 | 1,00 |

*Correlação do resultado mensal.*

- **Tendência Forte do Dia** e **ADX da Manhã** operaram no mesmo dia em 65% dos dias em que pelo menos um deles operou.
- **Tendência Forte do Dia** e **IFR de Tendência** operaram no mesmo dia em 50% dos dias em que pelo menos um deles operou.
- **Tendência Forte do Dia** e **Pullback na Média** operaram no mesmo dia em 27% dos dias em que pelo menos um deles operou.
- **ADX da Manhã** e **IFR de Tendência** operaram no mesmo dia em 48% dos dias em que pelo menos um deles operou.
- **ADX da Manhã** e **Pullback na Média** operaram no mesmo dia em 20% dos dias em que pelo menos um deles operou.
- **IFR de Tendência** e **Pullback na Média** operaram no mesmo dia em 10% dos dias em que pelo menos um deles operou.

![Quedas da carteira](setups/img/carteira_queda.png)

## Ano a ano

| Ano | Tendência Forte do Dia | ADX da Manhã | IFR de Tendência | Pullback na Média | Carteira (todos) | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|---|---|
| 2021* | −1,7% | +2,1% | −3,6% | +7,5% | +1,1% | +1,3% | −0,7% | Pullback na Média |
| 2022 | +58,4% | +29,8% | +51,5% | +47,1% | +47,5% | +12,3% | +4,7% | Tendência Forte do Dia |
| 2023 | +50,3% | +12,0% | +28,3% | +19,7% | +27,5% | +13,0% | +22,3% | Tendência Forte do Dia |
| 2024 | +21,6% | +36,5% | +30,7% | +10,8% | +25,0% | +10,8% | −10,4% | ADX da Manhã |
| 2025 | +32,2% | +65,9% | +55,3% | +21,2% | +43,6% | +14,2% | +34,0% | ADX da Manhã |
| 2026* | +71,9% | +43,1% | +52,0% | +20,9% | +47,9% | +11,4% | +9,6% | Tendência Forte do Dia |
| **Acumulado no período** | **+546,7%** | **+381,2%** | **+478,4%** | **+207,4%** | **+404,9%** | **+81,2%** | **+67,3%** | **Tendência Forte do Dia** |
| **R$ 10.000 viraram** | **R$ 64.671** | **R$ 48.116** | **R$ 57.840** | **R$ 30.735** | **R$ 50.491** | **R$ 18.119** | **R$ 16.732** | |
| **Média ao ano** | **+46,0%** | **+37,5%** | **+42,7%** | **+25,5%** | **+38,8%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | Tendência Forte do Dia | ADX da Manhã | IFR de Tendência | Pullback na Média | Carteira (todos) | CDI | Ibovespa |
> |---|---|---|---|---|---|---|---|
> | nov/2021 | −2,9% | +1,3% | −1,9% | +2,6% | −0,2% | +0,6% | −3,4% |
> | dez/2021 | +1,2% | +0,8% | −1,8% | +4,8% | +1,3% | +0,7% | +2,9% |
> | jan/2022 | −0,1% | +2,7% | +6,4% | +5,1% | +3,6% | +0,7% | +7,0% |
> | fev/2022 | −1,1% | −1,1% | −2,6% | +2,7% | −0,5% | +0,8% | +0,9% |
> | mar/2022 | +10,1% | +4,5% | +7,8% | +2,6% | +6,3% | +0,9% | +6,1% |
> | abr/2022 | +4,8% | −4,1% | +0,6% | +2,2% | +0,9% | +0,8% | −10,1% |
> | mai/2022 | −1,2% | +6,6% | +2,0% | +2,2% | +2,4% | +1,0% | +3,2% |
> | jun/2022 | +3,3% | −1,2% | +3,5% | +3,6% | +2,4% | +1,0% | −11,5% |
> | jul/2022 | −0,6% | −2,9% | +1,0% | +2,5% | +0,1% | +1,0% | +4,7% |
> | ago/2022 | +12,6% | +12,3% | +11,5% | +4,7% | +10,3% | +1,2% | +6,2% |
> | set/2022 | +8,3% | −1,7% | −1,2% | +2,8% | +2,0% | +1,1% | +0,5% |
> | out/2022 | +4,1% | +6,3% | +6,2% | +4,4% | +5,3% | +1,0% | +5,5% |
> | nov/2022 | +0,3% | −1,0% | +1,7% | +6,8% | +2,0% | +1,0% | −3,1% |
> | dez/2022 | +7,6% | +7,2% | +6,2% | −0,2% | +5,2% | +1,1% | −2,4% |
> | jan/2023 | +14,1% | −0,1% | +2,0% | +3,3% | +4,7% | +1,1% | +3,4% |
> | fev/2023 | +7,4% | +7,9% | +1,4% | −1,4% | +3,8% | +0,9% | −7,5% |
> | mar/2023 | +3,1% | −2,9% | +0,4% | +2,3% | +0,8% | +1,2% | −2,9% |
> | abr/2023 | −2,0% | +7,4% | +2,2% | +0,3% | +2,0% | +0,9% | +2,5% |
> | mai/2023 | −2,2% | +3,9% | +0,7% | +4,8% | +1,8% | +1,1% | +3,7% |
> | jun/2023 | +10,0% | −4,6% | +1,3% | +0,7% | +1,8% | +1,1% | +9,0% |
> | jul/2023 | +4,8% | +3,2% | +5,9% | +0,1% | +3,5% | +1,1% | +3,3% |
> | ago/2023 | +2,9% | +0,6% | +5,1% | +1,0% | +2,4% | +1,1% | −5,1% |
> | set/2023 | +0,4% | −1,6% | +0,1% | +0,9% | −0,0% | +1,0% | +0,7% |
> | out/2023 | +0,5% | +1,0% | +3,6% | +3,0% | +2,1% | +1,0% | −2,9% |
> | nov/2023 | +2,7% | +3,4% | +2,1% | +2,4% | +2,7% | +0,9% | +12,5% |
> | dez/2023 | +1,1% | −5,7% | +0,6% | +0,7% | −0,9% | +0,9% | +5,4% |
> | jan/2024 | +5,6% | +10,5% | −0,9% | +1,4% | +4,1% | +1,0% | −4,8% |
> | fev/2024 | +9,9% | +7,2% | +5,8% | −0,1% | +5,6% | +0,8% | +1,0% |
> | mar/2024 | +1,7% | −5,6% | +1,5% | +2,1% | −0,1% | +0,8% | −0,7% |
> | abr/2024 | −7,4% | +3,2% | +5,1% | +0,5% | +0,3% | +0,9% | −1,7% |
> | mai/2024 | −0,3% | −4,0% | −1,4% | −0,6% | −1,5% | +0,8% | −3,0% |
> | jun/2024 | −0,1% | −0,9% | +1,3% | +2,7% | +0,8% | +0,8% | +1,5% |
> | jul/2024 | −1,1% | −1,9% | +3,6% | +0,4% | +0,2% | +0,9% | +3,0% |
> | ago/2024 | +2,7% | +4,7% | +2,1% | +0,1% | +2,4% | +0,9% | +6,5% |
> | set/2024 | +4,8% | +2,2% | +2,2% | +6,2% | +3,9% | +0,8% | −3,1% |
> | out/2024 | −2,5% | +6,2% | +1,4% | −1,4% | +0,9% | +0,9% | −1,6% |
> | nov/2024 | +0,1% | +2,3% | +4,5% | −2,0% | +1,2% | +0,8% | −3,1% |
> | dez/2024 | +7,4% | +9,0% | +2,2% | +1,2% | +5,0% | +0,8% | −4,3% |
> | jan/2025 | +11,9% | +8,6% | +5,3% | +1,3% | +6,8% | +1,0% | +4,9% |
> | fev/2025 | +4,5% | +5,5% | +6,0% | +3,2% | +4,8% | +1,0% | −2,6% |
> | mar/2025 | +8,4% | +7,3% | −0,4% | −0,5% | +3,7% | +1,0% | +6,1% |
> | abr/2025 | −6,7% | +0,7% | +0,1% | +0,3% | −1,4% | +1,1% | +3,7% |
> | mai/2025 | +5,4% | +10,5% | +6,8% | +2,0% | +6,2% | +1,1% | +1,5% |
> | jun/2025 | −4,5% | +2,0% | +2,3% | +3,8% | +0,9% | +1,1% | +1,3% |
> | jul/2025 | −0,9% | +4,0% | +0,9% | +2,9% | +1,8% | +1,3% | −4,2% |
> | ago/2025 | +6,9% | +8,2% | +14,6% | −0,7% | +7,2% | +1,2% | +6,3% |
> | set/2025 | −2,4% | +3,8% | −3,5% | +1,6% | −0,1% | +1,2% | +3,4% |
> | out/2025 | −2,9% | +5,1% | +2,1% | +3,6% | +2,0% | +1,3% | +2,3% |
> | nov/2025 | +7,8% | +7,3% | +5,9% | −0,8% | +5,0% | +1,1% | +6,4% |
> | dez/2025 | +2,5% | −9,7% | +5,7% | +2,9% | +0,3% | +1,1% | +1,3% |
> | jan/2026 | +11,3% | +7,3% | +4,8% | −0,2% | +5,9% | +1,2% | +12,6% |
> | fev/2026 | −6,6% | −10,0% | +1,6% | −2,0% | −4,3% | +1,0% | +4,1% |
> | mar/2026 | +15,3% | +1,9% | +1,2% | +5,3% | +6,0% | +1,2% | −0,7% |
> | abr/2026 | +5,8% | +23,4% | +7,0% | +2,2% | +9,5% | +1,1% | −0,1% |
> | mai/2026 | −2,8% | −1,8% | +5,1% | +0,4% | +0,3% | +1,1% | −7,2% |
> | jun/2026 | −0,5% | −2,9% | −2,6% | +3,4% | −0,6% | +1,1% | −1,0% |
> | jul/2026 | +13,5% | −0,1% | +8,9% | +0,3% | +5,7% | +1,2% | +3,5% |
> | ago/2026 | +9,9% | +1,9% | +5,8% | +4,1% | +5,5% | +1,1% | −0,3% |
> | set/2026 | +4,2% | +16,4% | −0,6% | +6,0% | +6,5% | +1,1% | +5,0% |
> | out/2026 | +7,8% | +4,4% | +12,4% | −0,2% | +6,2% | +0,8% | −5,2% |
> | **Acumulado** | **+546,7%** | **+381,2%** | **+478,4%** | **+207,4%** | **+404,9%** | **+81,2%** | **+67,3%** |

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
