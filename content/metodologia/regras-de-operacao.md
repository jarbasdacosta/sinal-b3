---
title: "🎯 Regras de operação"
date: 2026-10-22
tags: [metodologia]
description: Tendência MME9 e Entradas do método: regras e testes
---

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

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.
