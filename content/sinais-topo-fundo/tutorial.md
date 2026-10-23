---
title: Tutorial
tags: [sinais, tutorial]
---

# 📘 Tutorial — Sinais de Topo e Fundo

<!-- v7-creditos -->
> [!quote] Créditos
> Os Sinais de Topo e Fundo do **Ondaleta** são baseados no trabalho de **Oliver Velez** (candles), **J. Welles Wilder** (RSI), **Donald Lambert** (CCI), **John Bollinger** (Bandas) e **Alex Spiroglou** (MACD-V), **adaptados e testados no Ibovespa por Jarbas Daniel da Costa**. Os autores citados não participam do produto. Conteúdo educacional, não recomendação.

> [!abstract] Em uma frase
> São 14 sinais de candle e de indicador que, no Ibovespa de 2000 a 2026, apareceram perto de topos e fundos importantes **bem mais vezes que o acaso**. Cada sinal só vale no tempo gráfico em que foi validado. A página [Sinais de Topo e Fundo](sinais-topo-fundo/) mostra os de hoje, e o indicador **SinaisTopoFundo** marca os mesmos no MT5.

> [!warning] Antes de tudo
> É estatística histórica, não recomendação. Nenhum sinal acerta sempre: os melhores acertaram de 60% a 90% das vezes e pegaram, no máximo, 1 em cada 3 topos ou fundos. Use como **contexto** para o seu método, sempre com stop.

---

## 1. Os ingredientes

**Candles de Oliver Velez** — o candle diz quem venceu a briga daquele período:

| Candle | Como reconhecer | O que significa |
|---|---|---|
| **Bottom tail** (martelo no fundo) | Sombra de baixo com pelo menos metade do candle | Os vendedores empurraram para baixo e os compradores devolveram |
| **Top tail** (martelo invertido no topo) | Sombra de cima com pelo menos metade do candle | Os compradores empurraram para cima e os vendedores devolveram |
| **Bull 180** | Candle vermelho forte seguido de verde forte que fecha lá em cima, acima do meio do vermelho | Virada completa de sentimento para alta |
| **Bear 180** | Verde forte seguido de vermelho forte que fecha lá embaixo | Virada completa para baixa |
| **Elefante** | Candle com pelo menos o dobro do tamanho médio, quase todo corpo | Força extrema — ou exaustão, quando aparece no fim de um movimento |

**Indicadores** (mesmos parâmetros dos seus indicadores MQL5): RSI(14), CCI(20), MACD-V(12, 26, 9) e Bollinger(20, 2). **"Fora → dentro"** = o candle fechou fora da banda e, em até 3 candles, voltou a fechar dentro.

---

## 2. Os sinais

**Fundos** (seta verde para cima):

| Código | Sinal | Mensal | Semanal | Diário | H4 |
|---|---|---|---|---|---|
| **BT+RSI** | Bottom tail com RSI ≤ 30 nos últimos 3 candles | — | 100% · 4,9× | **73% · 3,2×** | 50% · 3,3× |
| **BT+CCI** | Bottom tail com CCI ≤ −200 | 100% · 7,9× | **73% · 3,4×** | **57% · 2,8×** | 100% · 5,2× |
| **BT+BB** | Bottom tail tocando a Bollinger inferior | 80% · 6,1× | 54% · 2,3× | 51% · 2,3× | 53% · 3,1× |
| **FD+RSI** | Fora → dentro da BB inferior com RSI ≤ 30 | — | **88% · 3,2×** | **71% · 2,8×** | 50% · 2,5× |
| **FD+CCI** | Fora → dentro da BB inferior com CCI ≤ −200 | — | **89% · 3,2×** | 54% · 2,1× | 38% · 2,1× |
| **B180+BB** | Bull 180 depois de tocar a BB inferior | — | **67% · 3,1×** | 49% · 2,3× | — |
| **ELEF-** | Elefante de baixa no fim da queda (clímax de venda) | — | 67% · 3,2× | 43% · 2,0× | — |

**Topos** (seta vermelha para baixo):

| Código | Sinal | Mensal | Semanal | Diário | H4 |
|---|---|---|---|---|---|
| **S180** | Bear 180 | **62% · 4,3×** | 38% · 1,6× | — | — |
| **S180+BB** | Bear 180 depois de tocar a BB superior | 75% · 6,0× | 44% · 2,1× | — | — |
| **S180+CCI** | Bear 180 com CCI ≥ 200 | — | — | 50% · 2,3× | — |
| **FD+CCI** | Fora → dentro da BB superior com CCI ≥ 200 | **50% · 2,7×** | **68% · 2,6×** | 40% · 1,7× | 39% · 2,2× |
| **TT+RSI** | Top tail com RSI ≥ 70 | **38% · 2,5×** | — | 35% · 1,6× | — |
| **MV-** | MACD-V vira "verde sem brilho" acima de +130 (semanal) ou +150 | 75% · 5,3× | 46% · 2,0× | — | 62% · 3,8× |
| **RSI75+MV** | RSI ≥ 75 e MACD-V ≥ 130 | **62% · 2,7×** | 56% · 1,6× | — | 80% · 2,5× |

**Como ler cada célula:** "73% · 3,2×" = quando o sinal apareceu, um fundo (ou topo) importante estava a poucos candles em 73% das vezes — **3,2 vezes** o que um sinal aleatório conseguiria. **Negrito** = sinal **forte**; o resto = **moderado**; "—" = não validado naquele tempo gráfico (o indicador não mostra).

> [!info]- Como "topo e fundo importante" foi definido (clique para expandir)
> Um ZigZag por reversão: 20% no mensal, 10% no semanal, 6% no diário e 3% no H4. "Perto" = até 1 candle (mensal), 2 (semanal) ou 3 (diário e H4) do pivô. O acaso foi medido deslocando o sinal no tempo 300 vezes. Forte = vantagem em 2000–2014 **e** em 2015–2026 com lift de pelo menos 2,5×.

---

## 3. Como usar

1. **Comece pelo tempo gráfico maior.** Um **S180 mensal** (Bear 180) marcou 1 em cada 3 grandes topos do Ibovespa. Um **BT+CCI semanal** acertou 73% dos fundos em que apareceu.
2. **Fundos são mais confiáveis que topos.** Fundos nascem de pânico, e o pânico leva os indicadores ao extremo. Topos nascem de cansaço, com indicadores menos extremos — por isso há menos sinais de topo fortes.
3. **O sinal confirma, não adivinha.** Os sinais de reentrada (FD) aparecem 1 a 3 candles **depois** do extremo. Você entra um pouco mais caro, em troca de confirmação.
4. **Defina o stop no extremo do sinal.** Abaixo da mínima do bottom tail ou do Bull 180; acima da máxima do top tail ou do Bear 180.
5. **No day trade (WIN)**, use os sinais do diário e do H4 como **viés do dia**, não como gatilho de entrada. Os tempos gráficos menores (M1 a H1) não foram estudados.

---

## 4. No site

Os sinais de topo e fundo ficam numa **pasta própria**, separada do Sinal de Crise B3 (IMA + LPPL):

- **[Sinais de Topo e Fundo](sinais-topo-fundo/)** — atualizada todo dia às 19h: sinais do fechamento, fortes ainda na janela, sinais em formação e os últimos sinais fortes de todos os tempos gráficos.
- **[Todos os sinais](sinais-topo-fundo/todos-os-sinais)** — histórico de cada tempo gráfico, fortes e moderados.

**Como os fortes chamam atenção:**

| Situação | Onde aparece | Como |
|---|---|---|
| 🔥 **Sinal forte novo** | Topo da página inicial, do relatório diário e da página dos sinais | Bloco grande, com borda grossa e piscando, verde (fundo) ou vermelho (topo) |
| 🔥 **Sinal forte novo** | **Telegram** | Mensagem às 19h com o sinal, o acerto e o link (uma vez por sinal) |
| 🔥 **Forte ainda na janela** | Topo da página inicial e dos sinais | Bloco menor com "2º de 3 pregões da janela" — o pivô ainda pode estar se formando |
| 🔥 **Forte em formação** | Topo da página inicial e dos sinais | Aviso amarelo: semanal/mensal que pode sumir até o candle fechar |
| Sinal moderado | Página inicial e dos sinais | Nota discreta, sem Telegram |

**Janela** = quantos candles depois do sinal o topo/fundo costumava aparecer no estudo: 1 no mensal, 2 no semanal, 3 no diário e no H4.

**Semanal** só conta na sexta (candle fechado) e **mensal** só no último pregão do mês; antes disso aparecem como "em formação".

---

## 5. No MT5 — indicador SinaisTopoFundo

**Instalar:**

1. Copie `SinaisTopoFundo_v1.mq5` para a pasta `MQL5/Indicators/Jarbas/` do MT5.
2. Abra no MetaEditor e compile (F7).
3. Arraste o indicador para um gráfico do **IBOV** (ou WIN) em **MN1, W1, D1 ou H4**.

**O que aparece:**

- **Setas** — verde para cima = fundo; vermelha para baixo = topo. **Grossa** = forte; **fina** = moderado.
- **Código do sinal** embaixo/em cima da seta (ex.: `BT+RSI`). Passe o mouse para ver o nome, o acerto e o lift naquele tempo gráfico.
- **Painel** no canto superior direito com os últimos sinais.
- **Alerta** popup (e push, se ligado) quando um sinal aparece num candle que acabou de fechar.

**Parâmetros principais:**

| Parâmetro | Padrão | Para que serve |
|---|---|---|
| InpOnlyValidated | true | Mostra só os sinais validados no tempo gráfico atual. Em outros tempos gráficos não mostra nada — desligue para ver os sinais sem validação |
| InpShowModerate | true | Desligue para ver só os fortes |
| InpShowLabels | true | Código do sinal no gráfico |
| InpAlertPopup / InpAlertPush | true / false | Alertas no candle fechado |

O indicador **não repinta**: só avalia candles fechados.

---

## 6. Limitações

- **Poucos casos no mensal** (15 topos e 15 fundos em 26 anos) — uma ocorrência a mais muda bastante a porcentagem.
- **H4 com só 3 anos** de dados (limite do Yahoo) — será revalidado com o histórico do MT5.
- **Definições operacionais dos candles** — Oliver Velez descreve os padrões de forma qualitativa; os critérios usados estão na seção 1.
- **Os sinais não pegam a maioria dos pivôs** — muitos topos e fundos acontecem sem sinal nenhum.

> [!quote]- Aviso
> Estudo estatístico. Não constitui recomendação de investimento.

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
