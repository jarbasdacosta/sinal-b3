---
title: ADX da Manhã
date: 2026-10-26
tags: [setup, win]
---

**Aposta curta e barata no começo da tendência das 10h às 11h: vela a favor com o ADX subindo, stop pequeno e alvo bem longo.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · só as velas das 10h00, 10h15, 10h30, 10h45 e 11h00

🎬 **Vídeo de origem:** [Arthur 777 – "esse indicador é bizarro no mini índice"](https://youtu.be/D9mwdxexECE) · testado de forma independente nos nossos dados em 26/10/2026 · página gerada em 26/10/2026 22:30 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R$ 10.000 aplicados em nov/2021 viraram
> - **R$ 48.116** na versão filtro 0,89% com o capital no CDI (+37% ao ano · pior queda −15%)
> - **R$ 42.044** na versão como no vídeo com o capital no CDI (+34% ao ano · pior queda −13%)
> - **R$ 18.119** só no CDI (+13% ao ano)
> - **R$ 16.732** comprado no Ibovespa (+11% ao ano · pior queda −21%)
>
> - **R$ 119.255** na versão filtro 0,89% **arriscando 1% do capital por operação** (+65% ao ano · pior queda −31%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/adx-da-manha_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Horário** | a vela começa entre 10h00 e 11h00 | igual |
| **2. Vela a favor** | a vela é **positiva** (fecha acima da abertura) | a vela é **negativa** (fecha abaixo da abertura) |
| **3. ADX(9, média 9)** | o ADX está **subindo** (maior que na vela anterior) | o ADX está **subindo** também — o ADX mede a força do movimento, não a direção |
| **4. Filtro** | a vela tem **no máximo 0,89% do preço** de tamanho (≈ 1.587 pts hoje; evita dias de volatilidade anormal) | igual |
| **Entrada** | compra **a mercado** na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop** | **0,15%** abaixo da entrada (≈ 267 pts hoje) | 0,15% acima da entrada |
| **Alvo** | **1,30%** acima da entrada (≈ 2.317 pts hoje) | 1,30% abaixo da entrada |
| **Fim do dia** | se não bateu stop nem alvo, zera às 18h20 | igual |

- **Uma operação de cada vez.** Se tomar stop cedo, pode entrar de novo numa vela seguinte ainda dentro da janela das 10h às 11h.
- **Acerta pouco e ganha muito quando acerta:** cerca de 1 em cada 5 operações dá lucro, mas o ganho médio é 5 a 6 vezes a perda média.
- **Sem condução do trade** (sem stop no zero a zero), exatamente como no vídeo.
- **De onde veio:** no vídeo o filtro é de 1.000 pontos fixos e a venda é com o ADX descendo. Aqui o filtro virou 0,89% do preço (com o índice subindo, os 1.000 pts barravam cada vez mais velas normais) e a venda usa o ADX subindo (escolhidos no treino, testados em 26/10/2026).

### As versões testadas

| | filtro 0,89% (principal) | como no vídeo |
|---|---|---|
| Regra | venda com ADX subindo · filtro 0,89% do preço · alvo 1,30% · stop 0,15% | venda com ADX descendo · filtro 1.000 pts · alvo 1,30% · stop 0,15% |
| Acerto | 18% | 18% |
| Payoff | 5,21 | 5,21 |
| Treino → teste (pts por operação) | +9,8 → +46,8 | +7,9 → +41,1 |
| Retorno ao ano (+ CDI) | +37,5% | +33,8% |
| Pior queda (+ CDI) | −15,4% | −13,2% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R$ = pontos × R$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão filtro 0,89%

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 818 | 968 | 1.786 |
| Operações por mês | 30,3 | 28,5 | 29,3 |
| Taxa de acerto | 15,2% | 21,1% | 18,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 8% / 84% / 8% | 6% / 78% / 16% | 7% / 81% / 12% |
| Stop típico | 167 pts | 208 pts | 189 pts |
| Ganho médio · perda média | +1.086 · −182 pts | +1.124 · −241 pts | +1.110 · −213 pts |
| Payoff (ganho médio ÷ perda média) | 5,95 | 4,67 | 5,21 |
| Fator de lucro (total ganho ÷ total perdido) | 1,06 | 1,25 | 1,17 |
| Resultado médio por operação | +9,8 pts (+24,8 sem custo) | +46,8 pts (+61,8 sem custo) | +29,9 pts (+44,9 sem custo) |
| **Lucro líquido** | **+8.040 pts · R$ 1.608** | **+45.340 pts · R$ 9.068** | **+53.380 pts · R$ 10.676** |
| Pior queda (drawdown) | −6.554 pts · −R$ 1.311 | −9.419 pts · −R$ 1.884 | −9.419 pts · −R$ 1.884 |
| Maior sequência de perdas | 24 seguidas | 18 seguidas | 24 seguidas |
| Compras: acerto · lucro | 15% · +627 pts | 20% · +17.056 pts | 17% · +17.683 pts |
| Vendas: acerto · lucro | 16% · +7.413 pts | 22% · +28.284 pts | 19% · +35.697 pts |

### Versão como no vídeo

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 923 | 1.037 | 1.960 |
| Operações por mês | 34,2 | 30,5 | 32,1 |
| Taxa de acerto | 14,8% | 20,9% | 18,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 8% / 84% / 7% | 6% / 78% / 16% | 7% / 81% / 12% |
| Stop típico | 168 pts | 205 pts | 189 pts |
| Ganho médio · perda média | +1.100 · −182 pts | +1.085 · −235 pts | +1.091 · −209 pts |
| Payoff (ganho médio ÷ perda média) | 6,03 | 4,61 | 5,21 |
| Fator de lucro (total ganho ÷ total perdido) | 1,05 | 1,22 | 1,15 |
| Resultado médio por operação | +7,9 pts (+22,9 sem custo) | +41,1 pts (+56,1 sem custo) | +25,5 pts (+40,5 sem custo) |
| **Lucro líquido** | **+7.301 pts · R$ 1.460** | **+42.629 pts · R$ 8.526** | **+49.931 pts · R$ 9.986** |
| Pior queda (drawdown) | −9.325 pts · −R$ 1.865 | −7.054 pts · −R$ 1.411 | −9.325 pts · −R$ 1.865 |
| Maior sequência de perdas | 32 seguidas | 30 seguidas | 32 seguidas |
| Compras: acerto · lucro | 14% · −2.086 pts | 22% · +31.214 pts | 19% · +29.128 pts |
| Vendas: acerto · lucro | 15% · +9.388 pts | 20% · +11.415 pts | 18% · +20.803 pts |

![Pontos acumulados com 1 contrato](setups/img/adx-da-manha_pontos.png)

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

| | filtro 0,89% | como no vídeo | risco 1% | pura | CDI | Ibovespa |
|---|---|---|---|---|---|---|
| **R$ 10.000 viraram** | **R$ 48.116** | **R$ 42.044** | **R$ 119.255** | **R$ 26.567** | **R$ 18.119** | **R$ 16.732** |
| Retorno ao ano | +37,5% | +33,8% | +65,2% | +21,9% | +12,8% | +11,0% |
| Pior queda | −15,4% | −13,2% | −30,8% | −17,2% | +0,0% | −20,9% |
| Oscilação ao ano | 21,4% | 22,1% | 49,1% | 21,4% | 0,1% | 18,6% |
| Sharpe (acima do CDI) | 1,03 | 0,88 | 1,02 | 0,47 | — | 0,01 |
| Meses acima do CDI | 63% | 60% | 60% | 55% | — | 55% |
| Meses acima do Ibovespa | 60% | 57% | 63% | 52% | 45% | — |
| Pior mês · melhor mês | −10,0% · +23,4% | −7,4% · +15,6% | −19,1% · +38,5% | −10,9% · +22,1% | +0,6% · +1,3% | −11,5% · +12,6% |

![Quedas](setups/img/adx-da-manha_queda.png)

### Ano a ano

| Ano | filtro 0,89% | como no vídeo | risco 1% | CDI | Ibovespa | Quem ganhou |
|---|---|---|---|---|---|---|
| 2021* | +2,1% | −2,8% | +2,0% | +1,3% | −0,7% | filtro 0,89% |
| 2022 | +29,8% | +26,8% | +51,0% | +12,3% | +4,7% | risco 1% |
| 2023 | +12,0% | +11,5% | +7,4% | +13,0% | +22,3% | Ibovespa |
| 2024 | +36,5% | +63,7% | +71,5% | +10,8% | −10,4% | risco 1% |
| 2025 | +65,9% | +42,1% | +161,6% | +14,2% | +34,0% | risco 1% |
| 2026* | +43,1% | +31,6% | +60,5% | +11,4% | +9,6% | risco 1% |
| **Acumulado no período** | **+381,2%** | **+320,4%** | **+1092,6%** | **+81,2%** | **+67,3%** | **risco 1%** |
| **R$ 10.000 viraram** | **R$ 48.116** | **R$ 42.044** | **R$ 119.255** | **R$ 18.119** | **R$ 16.732** | |
| **Média ao ano** | **+37,5%** | **+33,8%** | **+65,2%** | **+12,8%** | **+11,0%** | |

\* ano parcial: os dados vão de 01/11/2021 a 26/10/2026.

![Retorno por ano](setups/img/adx-da-manha_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | filtro 0,89% | como no vídeo | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|---|
> | nov/2021 | +1,3% | +1,8% | +2,1% | +0,6% | −3,4% |
> | dez/2021 | +0,8% | −4,5% | −0,0% | +0,7% | +2,9% |
> | jan/2022 | +2,7% | +2,2% | +5,7% | +0,7% | +7,0% |
> | fev/2022 | −1,1% | +5,6% | −4,6% | +0,8% | +0,9% |
> | mar/2022 | +4,5% | +0,6% | +10,4% | +0,9% | +6,1% |
> | abr/2022 | −4,1% | −2,9% | −12,3% | +0,8% | −10,1% |
> | mai/2022 | +6,6% | +5,1% | +16,7% | +1,0% | +3,2% |
> | jun/2022 | −1,2% | +1,2% | −5,5% | +1,0% | −11,5% |
> | jul/2022 | −2,9% | −6,5% | −11,1% | +1,0% | +4,7% |
> | ago/2022 | +12,3% | +5,6% | +32,9% | +1,2% | +6,2% |
> | set/2022 | −1,7% | −5,7% | −7,1% | +1,1% | +0,5% |
> | out/2022 | +6,3% | +2,5% | +14,5% | +1,0% | +5,5% |
> | nov/2022 | −1,0% | +13,4% | −5,2% | +1,0% | −3,1% |
> | dez/2022 | +7,2% | +4,5% | +17,7% | +1,1% | −2,4% |
> | jan/2023 | −0,1% | +1,2% | −2,8% | +1,1% | +3,4% |
> | fev/2023 | +7,9% | +1,7% | +20,2% | +0,9% | −7,5% |
> | mar/2023 | −2,9% | +9,3% | −11,3% | +1,2% | −2,9% |
> | abr/2023 | +7,4% | +4,4% | +20,2% | +0,9% | +2,5% |
> | mai/2023 | +3,9% | −3,2% | +8,6% | +1,1% | +3,7% |
> | jun/2023 | −4,6% | −0,2% | −13,7% | +1,1% | +9,0% |
> | jul/2023 | +3,2% | +1,5% | +5,8% | +1,1% | +3,3% |
> | ago/2023 | +0,6% | −2,6% | −0,7% | +1,1% | −5,1% |
> | set/2023 | −1,6% | −1,8% | −5,5% | +1,0% | +0,7% |
> | out/2023 | +1,0% | +7,4% | +0,7% | +1,0% | −2,9% |
> | nov/2023 | +3,4% | −1,6% | +7,3% | +0,9% | +12,5% |
> | dez/2023 | −5,7% | −4,2% | −14,2% | +0,9% | +5,4% |
> | jan/2024 | +10,5% | +10,5% | +24,2% | +1,0% | −4,8% |
> | fev/2024 | +7,2% | +13,5% | +16,0% | +0,8% | +1,0% |
> | mar/2024 | −5,6% | −4,0% | −14,1% | +0,8% | −0,7% |
> | abr/2024 | +3,2% | +7,2% | +6,2% | +0,9% | −1,7% |
> | mai/2024 | −4,0% | +7,5% | −10,5% | +0,8% | −3,0% |
> | jun/2024 | −0,9% | +0,2% | −3,9% | +0,8% | +1,5% |
> | jul/2024 | −1,9% | −3,9% | −6,0% | +0,9% | +3,0% |
> | ago/2024 | +4,7% | +4,9% | +9,3% | +0,9% | +6,5% |
> | set/2024 | +2,2% | +3,8% | +3,4% | +0,8% | −3,1% |
> | out/2024 | +6,2% | +2,0% | +13,3% | +0,9% | −1,6% |
> | nov/2024 | +2,3% | +2,9% | +3,8% | +0,8% | −3,1% |
> | dez/2024 | +9,0% | +7,3% | +21,3% | +0,8% | −4,3% |
> | jan/2025 | +8,6% | +11,0% | +19,5% | +1,0% | +4,9% |
> | fev/2025 | +5,5% | +8,9% | +11,8% | +1,0% | −2,6% |
> | mar/2025 | +7,3% | +6,5% | +16,4% | +1,0% | +6,1% |
> | abr/2025 | +0,7% | −7,4% | +0,4% | +1,1% | +3,7% |
> | mai/2025 | +10,5% | +9,4% | +22,7% | +1,1% | +1,5% |
> | jun/2025 | +2,0% | +5,5% | +2,5% | +1,1% | +1,3% |
> | jul/2025 | +4,0% | +2,0% | +6,9% | +1,3% | −4,2% |
> | ago/2025 | +8,2% | −2,4% | +17,5% | +1,2% | +6,3% |
> | set/2025 | +3,8% | −0,8% | +6,4% | +1,2% | +3,4% |
> | out/2025 | +5,1% | +3,7% | +8,9% | +1,3% | +2,3% |
> | nov/2025 | +7,3% | +7,5% | +13,4% | +1,1% | +6,4% |
> | dez/2025 | −9,7% | −6,2% | −19,1% | +1,1% | +1,3% |
> | jan/2026 | +7,3% | +6,0% | +12,6% | +1,2% | +12,6% |
> | fev/2026 | −10,0% | −4,1% | −16,9% | +1,0% | +4,1% |
> | mar/2026 | +1,9% | +15,6% | +2,0% | +1,2% | −0,7% |
> | abr/2026 | +23,4% | +1,0% | +38,5% | +1,1% | −0,1% |
> | mai/2026 | −1,8% | −0,1% | −4,5% | +1,1% | −7,2% |
> | jun/2026 | −2,9% | −2,3% | −6,5% | +1,1% | −1,0% |
> | jul/2026 | −0,1% | +8,4% | −1,6% | +1,2% | +3,5% |
> | ago/2026 | +1,9% | −2,8% | +2,1% | +1,1% | −0,3% |
> | set/2026 | +16,4% | +10,4% | +27,8% | +1,1% | +5,0% |
> | out/2026 | +4,4% | −2,3% | +5,8% | +0,8% | −5,2% |
> | **Acumulado** | **+381,2%** | **+320,4%** | **+1092,6%** | **+81,2%** | **+67,3%** |

### E se o capital por contrato for outro?

| Capital por contrato | filtro 0,89% + CDI | como no vídeo + CDI |
|---|---|---|
| R$ 5.000 | +60% ao ano · pior queda −30% | +51% ao ano · pior queda −29% |
| R$ 10.000 | +37% ao ano · pior queda −15% | +34% ao ano · pior queda −13% |
| R$ 20.000 | +25% ao ano · pior queda −7% | +24% ao ano · pior queda −6% |
| R$ 40.000 | +19% ao ano · pior queda −3% | +18% ao ano · pior queda −3% |

*Referência: CDI +13% ao ano · Ibovespa +11% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 26/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Sim. O vídeo mostra 1.940 operações, 18% de acerto, payoff 6,09 e fator de lucro 1,35 (sem custo); nos nossos dados deu 1.960 operações, 18%, 5,67 e 1,25. |
| **Ganha do acaso?** | No **teste** sim (versão principal: p 0,008 contra entradas quaisquer no mesmo horário). No **treino** não (setup ~+10 pts por operação, acaso ≈ 0, p 0,28). |
| **Filtro em pontos, % ou ATR?** | Em pontos fixos era o pior dos quatro jeitos; em % do preço ou em ATR o resultado melhora (Sharpe de 0,91 para 1,0–1,1). Stop e alvo continuam melhores em % do que em ATR neste setup. |
| **É sorte de parâmetro?** | Não. Stop 0,10/0,15/0,20% × alvo 0,65/1,0/1,3/1,6%: 11 das 12 combinações deram lucro no treino **e** no teste — mas no treino todas ganham pouco (+1 a +19 pts). |
| **Cada condição importa?** | O ADX e o horário importam: sem o ADX cai para +4|+8 pts por operação; o dia inteiro, em vez das 10h–11h, fica negativo no teste. A cor da vela pesa pouco. |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão filtro 0,89% foi de −R$ 1.884 por contrato (começou em nov/2025, recuperada em abr/2026); 24 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão filtro 0,89% + CDI ficou abaixo do CDI em 37% dos meses. O resultado aparece no ano.
- **Treino fraco:** em 2021–2023 o setup ganhou só ~10 pts por operação e não bateu o acaso; com custo de 25 pts já seria zero. Quase todo o lucro veio de 2024–2025.
- **Acerto de ~18%:** sequências longas de stops são normais neste setup.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 26/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
