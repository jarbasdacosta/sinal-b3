---
title: Metodologia Sinal de Crise
tags: [metodologia]
---

# 📖 Metodologia — v5.3

<!-- v7-creditos -->
> [!quote] Créditos
> O Sinal de Crise do **Ondaleta** é baseado no trabalho do **Prof. Marco Antonio Leonel Caetano** (IMA Wavelet, Caetano & Yoneyama) e do **Prof. Didier Sornette** (LPPL, ETH-Zurich), **adaptado, calibrado no Ibovespa e mantido por Jarbas Daniel da Costa**. Os autores citados não participam do produto. Conteúdo educacional, não recomendação.

> [!abstract] Em uma frase
> O Sinal de Crise do Ondaleta mede **o quanto o Ibovespa está esticado em relação à própria tendência**, olhando ao mesmo tempo para várias escalas de tempo. Esticado para cima é **ζ Topo**; esticado para baixo é **ζ Fundo**. Os momentos úteis para agir não são quando o ζ está alto, e sim **quando ele entra numa faixa ou começa a desinflar**.

> [!warning] Antes de tudo
> Nada aqui é recomendação de investimento. São **estatísticas de 26 anos de Ibovespa** (2000–2026) que mostram em que situações as chances ficaram historicamente a favor ou contra. Nenhuma situação tem 100% de acerto, e o passado não garante o futuro. Use como **filtro de contexto** para o seu método, com stop e gestão de risco.

---

## 1. Como o modelo funciona (sem matemática)

Imagine o gráfico do Ibovespa dos últimos 252 pregões (um ano).

**Passo 1 — tirar a tendência.** O modelo traça a curva que melhor descreve a direção do último ano (uma tendência exponencial) e um ciclo lento por cima dela. O que sobra é o **resíduo**: quanto o preço está acima ou abaixo do "caminho normal".

**Passo 2 — olhar o resíduo com 32 lupas.** A *transformada wavelet* (com a função **Chapéu Mexicano**, como no método do Prof. Caetano) funciona como um conjunto de lupas de tamanhos diferentes: algumas enxergam movimentos de poucos dias, outras de várias semanas. Cada lupa responde a uma pergunta: *"na minha escala, o preço de agora está anormalmente acima ou abaixo da tendência?"*

**Passo 3 — contar quantas lupas concordam.** O **ζ (zeta)** é simplesmente a **porcentagem das lupas** que, nos últimos 4 pregões, enxergam o preço esticado além de um limite (0,8 desvio):

- **ζ Topo** = % das lupas que veem o preço **esticado para cima**.
- **ζ Fundo** = % das lupas que veem o preço **esticado para baixo**.

ζ Topo = 90% quer dizer que **quase todas as escalas** concordam: o preço subiu demais, rápido demais, em relação à tendência. É a fórmula do artigo de Caetano & Yoneyama (2009): ζ = n/N.

> [!example] Exemplo real
> Em outubro de 2026 o Ibovespa foi de 187 mil para 209 mil pontos em poucos dias. O ζ Topo saiu de 2% para 77%: a maioria das escalas passou a enxergar o preço muito acima da tendência.

### O LPPL (Prof. Sornette)

É um segundo modelo, independente. Procura o **formato** de bolha: subida que acelera cada vez mais (super-exponencial), com oscilações que ficam mais rápidas. Ele testa 45 janelas de tempo diferentes (de 60 a 500 pregões) e mede **em quantas delas** o formato de bolha aparece:

- **LPPL bolha** — alta acelerando (risco de crash).
- **LPPL antibolha** — queda acelerando (risco de repique forte).

Abaixo de ~30% é ruído normal (mesmo séries aleatórias chegam a 20%). Acima de 50% é evidência forte. O LPPL ainda não tem estatística própria de longo prazo; por isso é exibido como **informação complementar** e não define a zona.

---

## 2. O que 26 anos de dados mostram

Estudo com **6.370 pregões** (2000–2026). O ζ foi calculado **como teria sido visto em tempo real**, ou seja, só com os dados disponíveis em cada dia. Para cada situação, medimos o que o Ibovespa fez **depois**.

**A referência (um dia qualquer):**

| Horizonte | Subiu | Retorno mediano | Caiu 5%+ em algum momento | Subiu 5%+ em algum momento |
|---|---|---|---|---|
| 20 pregões (~1 mês) | 56% | +1,1% | 31% | 41% |
| 60 pregões (~3 meses) | 60% | +3,3% | 52% | 66% |

**As situações que fizeram diferença nos dois períodos testados (2000–2014 e 2015–2026):**

| Situação | O que aconteceu depois | vs. referência | Confiança |
|---|---|---|---|
| 🚀 **ζ Topo sobe para 30–60%** (vindo de menos de 30%) | Subiu em **69%** das vezes no mês e **70%** em 3 meses; caiu 5%+ no mês só **24%** | 56% / 60% / 31% | ⭐⭐⭐ (78 casos) |
| 📉 **ζ Topo desinfla** (cai abaixo de 45% depois de passar de 60%) | Caiu 5%+ em **39%** das vezes em 20 pregões; **60%** em 60 pregões | 31% / 52% | ⭐⭐ (56 casos) |
| 📉 **ζ Topo desinfla do 🔴** (cai abaixo de 75% depois de passar de 90%) | Caiu 5%+ em **45%** das vezes em 20 pregões | 31% | ⭐⭐ (31 casos) |
| 🔪 **ζ Fundo dispara** (passa de 90%) | Subiu só **42%** das vezes em 60 pregões; retorno mediano **−1,9%** | 60% / +3,3% | ⭐⭐⭐ (31 casos) |
| 🌱 **ζ Fundo desinfla** (cai abaixo de 75% depois de passar de 90%) | Subiu em **66%** das vezes em 60 pregões; retorno mediano **+4,8%** | 60% / +3,3% | ⭐ (32 casos) |
| 🔴 **ζ Topo ≥ 90%** (estar na zona) | Chance de subir mais 5% em 20 pregões cai para **32%** | 41% | ⭐ |

> [!info]- Como ler as estrelas (clique para expandir)
> Cada situação foi comparada com **5.000 sorteios de datas aleatórias**. ⭐⭐⭐ = no período completo, o resultado ficou entre os **5%** mais extremos dos sorteios, e a direção se repetiu nos dois períodos. ⭐⭐ = entre os **11%** mais extremos, mesma direção nos dois períodos. ⭐ = mesma direção nos dois períodos, mas dentro do que o acaso explica. Como testamos dezenas de combinações, algumas parecem boas por acaso; por isso só entram aqui as que se repetiram nas duas metades da história.

---

## 3. Como usar na prática

Pense no ζ como um **semáforo de contexto** para o seu método, não como um botão de compra e venda.

### Do lado da compra

> [!success] 🚀 Momento de força — ζ Topo subindo para 30–60%
> O preço começou a se afastar da tendência para cima, mas ainda não esticou demais. **Historicamente, a alta continuou**: 69% subiu no mês seguinte e 70% em 3 meses, com **menos** risco de queda que um dia qualquer (24% contra 31%). Favorece **manter ou montar posição comprada** e dar espaço ao movimento. Só vale quando o ζ Topo **sobe** de menos de 30% — quando ele cai de cima para essa faixa, o resultado foi igual ao acaso.

> [!tip] 🌱 Fundo se desfazendo — ζ Fundo caindo de volta abaixo de 75%
> Depois de uma queda forte (ζ Fundo ≥ 90%), o esticamento para baixo começa a desaparecer. É **o melhor momento estatístico para comprar depois de uma queda**: 66% subiu em 3 meses, contra 42% de quem comprou no auge do pânico. A vantagem sobre um dia qualquer é pequena — o ganho real é **evitar comprar cedo demais**.

> [!danger] 🔪 Não segure a faca — ζ Fundo disparando (≥ 90%)
> Parece barato, mas **historicamente a queda continuou**: só 42% subiu em 3 meses, e metade das vezes ainda caiu mais 5% no mês seguinte. **Espere o ζ Fundo começar a cair.**

### Do lado da proteção / venda

> [!warning] 🟡🔴 Esticado — ζ Topo ≥ 60%
> O preço está bem acima da tendência. **Isso, sozinho, não é sinal de queda**: o índice continuou subindo tanto quanto num dia qualquer. Mas o **potencial de alta encolhe** (no 🔴, chance de subir mais 5% cai de 41% para 32%). Bom momento para **não aumentar posição, subir o stop e realizar parte do lucro**.

> [!failure] 📉 Esticamento desinflando — ζ Topo caindo
> **Este é o momento de risco.** Quando o ζ Topo volta para baixo de 45% depois de ter passado de 60% (ou abaixo de 75% depois de 90%), a chance de uma queda de 5%+ no mês seguinte sobe de 31% para 39–45%. Favorece **reduzir exposição comprada ou proteger** (hedge, stop mais curto).

### Neutro

> [!note] 😐 Tudo baixo — ζ Topo e ζ Fundo abaixo de 30%
> Sem vantagem estatística para nenhum lado. **Siga o seu método normal.**

### Resumo de bolso

| Você vê | Estatística a favor de |
|---|---|
| ζ Topo **subindo** para 30–60% | 🟢 manter / comprar |
| ζ Topo ≥ 60% | 🟡 não aumentar, subir stop, realizar parcial |
| ζ Topo **caindo** de volta | 🟠 proteger / reduzir |
| ζ Fundo **disparando** ≥ 90% | ⛔ não comprar ainda |
| ζ Fundo **caindo** de volta | 🟢 comprar com stop |
| Tudo abaixo de 30% | ⚪ neutro |

> [!important] Horizonte
> Estas estatísticas são do **diário (D1)** e valem para **semanas a meses** (20–60 pregões). Para day trade no WIN, use como **viés do dia** (a favor ou contra a direção principal), não como gatilho de entrada. O ζ do intraday (15 min) ainda **não foi validado estatisticamente**.

---

## 4. O que o modelo NÃO faz

- **Não prevê a data do crash.** O ζ alto não diz "vai cair amanhã". O teste de antecipação (Molchan) foi negativo.
- **Não acerta sempre.** Em 3 de cada 10 vezes, a situação "favorável" deu errado.
- **Não substitui stop.** As quedas que vêm depois de um ζ Topo desinflando podem ser rápidas.
- **Não enxerga notícia.** Eventos externos (política, juros, exterior) movem o mercado sem aviso espectral.

---

## 5. Os alertas (v5.3)

O **e-mail e o Telegram do diário (19h)** só disparam nos dias em que acontece um dos 5 eventos — os momentos em que a estatística mostrou vantagem:

| Alerta | Dispara quando | Estatística favorece |
|---|---|---|
| 🚀 **Força** | ζ Topo sobe de menos de 30% para 30–60% | manter / comprar |
| 📉 **Esticamento desinflando** | ζ Topo volta abaixo de 45% depois de passar de 60% | proteger / reduzir |
| 📉 **Esticamento extremo desinflando** | ζ Topo volta abaixo de 75% depois de passar de 90% | proteger / reduzir |
| 🔪 **Queda forte** | ζ Fundo passa de 90% | não comprar ainda |
| 🌱 **Fundo se desfazendo** | ζ Fundo volta abaixo de 75% depois de passar de 90% | comprar com stop |

Historicamente são uns **8 a 10 alertas por ano**. Cada tipo de evento só se repete depois de 20 pregões, e o "desinflando" do amarelo é suprimido quando vem logo depois do "desinflando" do vermelho (é o mesmo episódio).

Nos outros dias, o site mostra a **Situação** (o semáforo do resumo de bolso). O **fechamento do intraday (18h25)** continua chegando todo dia por e-mail, com o **viés do diário** — a última situação do D1 — para orientar o pregão seguinte. Os eventos **não** são calculados no intraday (15 min), porque lá a estatística ainda não foi validada.

## 6. As zonas do sinal

| Zona | Entra quando | Sai quando | Significado |
|---|---|---|---|
| 🟢 VERDE | — | — | Preço na faixa normal em torno da tendência |
| 🟡 AMARELO | ζ Topo ≥ 60% | ζ Topo < 45% | Preço esticado para cima |
| 🔴 VERMELHO | ζ Topo ≥ 90% | ζ Topo < 75% | Esticamento extremo (limiar de Caetano) |

As zonas têm **histerese** (entram num nível e saem em outro mais baixo) para não ficar trocando todo dia. **Atenção:** pela estatística acima, **a saída do 🟡/🔴 é mais importante que a entrada** — é quando o esticamento desinfla que o risco aparece.

---

## 7. Detalhes técnicos

> [!info]- IMA Wavelet — parâmetros (clique para expandir)
> - Janela de 252 pregões (D1) ou 252 barras de 15 min (intraday).
> - Pré-processamento: tendência exponencial + componente cosseno (Caetano & Yoneyama 2009, eqs. 7-8).
> - CWT Chapéu Mexicano, escalas 1 a 32; normalização **por escala** (MAD → desvios).
> - ζ = fração dos 128 coeficientes (32 escalas × 4 barras) além de ±0,8σ.
> - Validação: replica o Kruskal-Wallis do artigo em 2003–2008 (p = 0,007/0,002); AUC causal 0,58 em 2015–2025.
> - Na borda direita (tempo real), o coeficiente positivo indica preço **acima** da tendência — por isso ζ Topo mede esticamento para cima.
> - O espectrograma histórico é calculado com a série inteira (vê o futuro); o ζ em tempo real concorda só parcialmente com ele.

> [!info]- LPPL DS-Confidence — parâmetros (clique para expandir)
> - Reformulação de Filimonov & Sornette (2013): A, B, C₁, C₂ por mínimos quadrados; otimização só em (tc, m, ω).
> - 45 janelas (60 a 500 pregões, passo 10) terminando na mesma data.
> - Filtros: 0,05 < m < 0,95 · 6 < ω < 13 · tc até min(0,4·L, 120) pregões à frente · ≥ 2,5 oscilações · amortecimento ≥ 0,5 · erro < 60% do de uma reta.
> - Confiança = fração de janelas válidas, separada pelo sinal de B: **bolha** (B < 0) e **antibolha** (B > 0).

> [!info]- Histórico de versões (clique para expandir)
> - **v5.3** (20/10/2026) — Alertas por **evento** (Força, Desinflando, Queda forte, Fundo se desfazendo) no lugar dos alertas por zona; situação do dia no site; viés do diário no intraday; eventos marcados no gráfico.
> - **v5.2** (20/10/2026) — LPPL com 45 janelas e antibolha; estudo estatístico de 26 anos; esta página.
> - **v5.1** (20/10/2026) — Correções: ζ Topo/Fundo com o significado certo; risco = ζ (antes 60% ζ + 40% LPPL, o que tornava o 🔴 impossível); cache por ativo no multi-ativo; datas do diário (estavam um dia atrasadas).
> - **v5.0** (15/07/2026) — Motor fiel ao artigo de Caetano (ζ = n/N).
> - **v4** (07/2026) — LPPL DS-Confidence, histerese, correções de janela.

---

## Referências

- Caetano, M.A.L.; Yoneyama, T. *Characterizing abrupt changes in the stock prices using a wavelet decomposition method*. Physica A 383 (2007) 519–526.
- Caetano, M.A.L.; Yoneyama, T. *A new indicator of imminent occurrence of drawdown in the stock market*. Physica A 388 (2009) 3563–3571.
- Caetano, M.A.L. *Mudanças Abruptas no Mercado Financeiro*. Érica, 2013.
- Sornette, D. *Why Stock Markets Crash*. Princeton, 2003.
- Filimonov, V.; Sornette, D. *A stable and robust calibration scheme of the log-periodic power law model*. Physica A 392 (2013) 3698–3707.

> [!quote] Aviso
> Estudo acadêmico e estatístico. Não constitui recomendação de investimento. Resultados passados não garantem resultados futuros.

<!-- v9-entradas -->
## Entradas do método

> [!warning] Em teste ao vivo desde 23/10/2026
> Estas regras foram escolhidas olhando o histórico — e quem testa muitas regras sempre acha algumas que deram certo por acaso (**overfitting de backtest** / viés de escolha). Por isso: (1) os números abaixo são os de um teste **fora da amostra**, não os do backtest escolhido; (2) a partir de 23/10/2026 as regras ficam congeladas e o site mostra um **placar ao vivo** separado — esse é o único resultado limpo.

Depois de um **setup**, o método espera uma confirmação antes de comprar. **Só compra:** nenhuma regra de venda passou.

| Regra | Setup | Entrada (no fechamento) | Stop | Saída |
|---|---|---|---|---|
| **Diário · Nadaraya** ✅ | sinal de fundo forte/moderado nos últimos 10 pregões | o kernel Nadaraya-Watson (Rational Quadratic, lookback 12) vira para cima | menor mínima dos últimos 5 pregões | a linha rápida (lookback 10) cruza para baixo |
| **Semanal · Semáforo N2** ✅ | sinal de fundo nas últimas 10 semanas | um fundo do semáforo nível 2 (13/8/5) fica fixo: 5 candles sem mínima menor | mínima do fundo; vai para o preço de entrada quando ganha o que arrisca | um topo do semáforo nível 3 (34/21/12) fica fixo |
| **H4 · Semáforo N2** 🧪 *(em teste, sem aviso)* | sinal de fundo nos últimos 10 candles de 4h | igual ao semanal | igual | igual |
| **Diário · Semáforo N3 após ζ** 🧪 *(em observação, sem aviso)* | ζ Fundo ≥ 60% nos últimos 10 pregões | um fundo do semáforo nível 3 fica fixo (12 candles) | igual | igual |

Todas: no máximo 60 candles por operação; reentrada permitida dentro da janela do setup. O semáforo é calculado como no MT5, mas só conta o ponto **fixo** (o indicador original repinta). O Nadaraya é o kernel sem repintura (o envelope padrão usa candles futuros e, sem repintura, não funcionou).

### Como as regras foram testadas

1. **Mais de 150 regras** testadas no Ibovespa 2000–2026: rompimento de máxima/mínima, os três níveis do semáforo e o Nadaraya-Watson (envelope e kernel), com várias entradas e saídas.
2. **Walk-forward (fora da amostra):** a cada ano de 2008 em diante, a melhor regra foi escolhida **só com os anos anteriores** e operada no ano seguinte. Isso mede se "escolher a melhor pelo passado" funciona de verdade.
3. **PBO (probabilidade de overfitting do backtest):** o histórico foi dividido em 10 blocos e, em 252 combinações, a melhor regra de uma metade foi conferida na outra.

| Tempo e lado | Escolhendo pelo passado (fora da amostra) | Regra escolhida ao acaso | PBO | Leitura |
|---|---|---|---|---|
| Diário · compra | **+2,0% a +3,5%** por operação | +0,4% | **6%** | a escolha se sustenta ✅ |
| Semanal · compra | +6% a +10% | **+4,7%** | 33% | funciona, mas quase qualquer regra serve: o ganho vem do setup |
| Diário · venda | +0,5% (faixa inclui perda) | −0,2% | **73%** | overfitting ❌ |
| Semanal · venda | −2,5% | −0,3% | 31% | não funciona ❌ |

*O backtest das regras escolhidas mostrava +3,2% (diário) e +15,8% (semanal) por operação; fora da amostra a expectativa realista é de **+2% a +3%** no diário e **~+5%** no semanal, com poucas operações por ano. O H4 tem só 2 anos de dados e não pôde ser testado fora da amostra. A lista de quais sinais são fortes ou moderados também saiu destes dados — mais uma razão para acompanhar o placar ao vivo. Custo de 0,05% por operação, índice à vista, sem impostos (no WIN o comprado paga o carrego dos juros). Estatística histórica, não recomendação.*

<!-- v10-tendencia -->
## Tendência MME9

> [!warning] Em teste ao vivo desde 23/10/2026
> Regra simples, testada no Ibovespa 2000–2026. Não é teste fora da amostra; por isso, a partir de 23/10/2026 o site mostra um **placar ao vivo** separado.

**Só compra**, no **Diário** e no **Semanal**:

| | Regra |
|---|---|
| **Sinal de compra** | um candle **fecha acima da MME9** (o anterior fechou abaixo ou em cima) |
| **Entrada** | o preço passa da **máxima desse candle** em até 3 candles (ordem stop de compra) |
| **Sinal de saída** | um candle **fecha abaixo da MME9** |
| **Saída** | o preço passa da **mínima desse candle** em até 3 candles |
| **Stop de segurança** | 10% abaixo do preço de entrada |
| **Semanal** | o sinal só conta com a semana fechada; a entrada e a saída podem acontecer em qualquer dia da semana |

### O que os estudos mostraram (Ibovespa 2000–2026, custo 0,05% por operação)

- **Diário:** cerca de **+14% ao ano** com maior queda de **35%**, contra +9,6% ao ano e 60% de queda de quem comprou e segurou (Sharpe 0,75 contra 0,34). Fica comprado só parte do tempo e fica de fora da maior parte das grandes quedas.
- **Semanal:** cerca de **+9% ao ano**, perto de comprar e segurar, mas com maior queda de **29%** contra 57%: no semanal o ganho é a queda menor, não o retorno.
- **Não é ajuste fino:** o resultado se manteve com médias simples de 5 a 50 no diário e de 8 a 21 no semanal.
- **Vender** (ficar sempre posicionado, comprado ou vendido) **não funcionou**: a venda perde dinheiro no Ibovespa. Por isso, só compra.
- **Stops apertados pioram** o resultado. O stop de 10% praticamente não muda o histórico e protege de um tombo grande sem sinal.
- **Menos da metade das operações dá lucro** (40% no diário, 48% no semanal) e a perda é limitada pelo stop; o resultado vem das poucas que pegam uma tendência longa (até +22% no diário e +60% no semanal). É preciso disciplina para seguir todas.

### Radar de grande queda (só contexto)

Nota de 0 a 100% de sobrevenda **ao mesmo tempo** no mensal, no semanal e no diário (Bollinger, CCI, RSI, MACD-V, distância das médias, bottom tail, haramis com a mãe abaixo da Bollinger e o ζ do IMA). As condições e o nível de alerta foram escolhidos só com 2001–2013 e testados em 2014–2026: o radar esteve ligado perto dos **7 grandes fundos** do período, com poucos alarmes falsos. **Mas avisa cedo:** em média o preço ainda caiu mais 13% nos 6 meses seguintes, e comprar no alerta rendeu menos do que comprar num dia qualquer. Esperar um gatilho de virada dentro da zona também não superou o acaso. Por isso ele aparece só como contexto ("estamos numa grande queda"), não como sinal de compra.

<!-- v11-raros -->
## Sinais raros de grande fundo e topos (v11)

**Sinais raros de grande fundo.** Três condições que aparecem menos de uma vez por ano e quase sempre perto de um grande fundo do Ibovespa (queda de 20% ou mais). Foram conferidas separando 2001–2013 e 2014–2026, com o candle fechado, e comparadas com 40 Ibovespas embaralhados:

| Sinal | Desde 2001 | Perto de grande fundo | 12 meses depois (média) | Pior queda em 6 meses | Acaso igual ou melhor |
|---|---|---|---|---|---|
| **Semanal:** RSI ≤ 30 e CCI ≤ −200 no mesmo candle 🔥 | 8 | 8 de 8 | **+41%** | −10% | 14% |
| **Mensal:** mínima abaixo da Bollinger inferior | 11 | 8 de 11 | **+26%** | −12% | 15% |
| **Diário:** RSI ≤ 30 e MACD-V ≤ −150 no mesmo candle | 17 | 10 de 17 | **+27%** | −8% | 2% |

Um dia qualquer no mesmo período: +14% em 12 meses. **Avisam a região, não o dia:** o preço ainda pode cair antes de subir (a mensal costuma vir cedo). São poucos casos, então é indício, não garantia. Ficam separados dos 14 sinais (não mudam as Entradas do método). O harami semanal com a mãe abaixo da Bollinger também foi testado e **não** passou (no teste, só 30% perto de grande fundo).

**Topos rebaixados.** Depois dos sinais de topo o Ibovespa subiu como num dia qualquer: 6 meses depois ele estava mais baixo em 14% a 75% das vezes, conforme o sinal, contra 37% de um dia qualquer, e nenhuma regra de venda passou no walk-forward. Por isso nenhum sinal de topo é "forte" e eles não vão mais para o Telegram. 🟠 **Topo = aviso para proteger** (subir o stop, realizar parte), não para vender.

<!-- v12-venda -->
## Venda em mercado de baixa e alerta raro de topo (v12)

**A venda continua sem regra aprovada.** Foi testada de novo só em mercado de baixa (preço abaixo da MMA200, MME9 semanal caindo, os dois juntos ou MMA200 caindo), com três setups (fechou abaixo da MME9, sinal de topo do site, ζ Topo) no diário e no semanal, e também somando o carrego que o vendido ganha no WIN. Algumas combinações ficaram positivas no histórico (por exemplo, no diário, vender o rompimento depois de fechar abaixo da MME9 com a MME9 semanal caindo: cerca de +1% por operação no WIN), mas **escolher a melhor pelo passado (walk-forward) perdeu dinheiro** (−0,5% por operação) e ficou **abaixo de 90% dos Ibovespas embaralhados**. Ou seja: o que parecia bom era sorte. Vender o Ibovespa, mesmo em baixa, não mostrou vantagem.

**Alerta raro de topo (mensal): RSI ≥ 75 e MACD-V ≥ 130.** Desde 2001 apareceu 8 vezes (com o mês fechado). 3 meses depois o índice estava mais baixo em 5 de 8 vezes e, 6 meses depois, em 6 de 8; nos três últimos casos (2018, 2019 e fevereiro de 2026), em todos. A maior queda média nos 6 meses seguintes foi de −22%. **Mas 12 meses depois o Ibovespa subiu +17% em média.** Por isso ele é um aviso de **proteção de curto prazo** (subir o stop, realizar parte, não aumentar a compra), e não de venda. São poucos casos: é indício, não garantia.
