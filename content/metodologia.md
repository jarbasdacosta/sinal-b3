---
title: Metodologia
tags: [metodologia]
---

# 📖 Metodologia — v4

## IMA Wavelet (Caetano)

O **Índice de Mudanças Abruptas** segue Caetano & Yoneyama
(Physica-A 383, 2007, 519-526; livro *Mudanças Abruptas no Mercado
Financeiro*, Érica, 2013): a série de preços passa por detrending duplo
(tendência log-linear + componente cosseno) e o ruído residual é
decomposto pela **Transformada Wavelet Contínua com Chapéu Mexicano**.
Energia concentrada nas escalas de alta frequência com baixa
volatilidade é o padrão espectral que antecede mudanças abruptas —
o "tufão" nos espectrogramas de Caetano.

**Na v4**, o valor bruto (energia alta-freq ÷ volatilidade) é convertido
em **rank-percentil móvel de 2 anos**: um IMA de 85% significa
literalmente que o estresse espectral está acima de 85% dos últimos
500 pregões. Isso torna o score interpretável e comparável no tempo.

## LPPL DS-Confidence (Sornette)

Bolhas especulativas seguem a **Log-Periodic Power Law** de Sornette:
crescimento super-exponencial com oscilações log-periódicas acelerando
rumo ao tempo crítico *tc*. A v4 implementa o indicador de confiança do
**Financial Crisis Observatory** (ETH-Zurich):

1. Reformulação de Filimonov & Sornette (2013): parâmetros lineares
   (A, B, C₁, C₂) resolvidos por mínimos quadrados; otimização apenas
   em (tc, m, ω).
2. Ajuste em **múltiplas janelas** (60 a 504 pregões) terminando na
   mesma data.
3. Cada ajuste só é aceito se passar nos filtros de bolha positiva:
   0.05 < m < 0.95 · 6 < ω < 13 · B < 0 · tc plausível ·
   ≥ 2.5 oscilações · damping ≥ 0.5 · SSE < 60% do ajuste linear
   (o modelo precisa explicar mais que uma simples tendência).
4. **Confiança = fração de janelas com ajuste válido.**

Diferente da v3 (que media o número de oscilações de um único fit e
saturava em ~87% em qualquer tendência), a confiança v4 fica em ~0%
em séries sem estrutura de bolha e sobe apenas quando várias escalas
concordam.

## Sinal combinado e zonas

`Risco = peso_IMA × IMA + peso_LPPL × LPPL` (pesos calibrados por
backtest; onde LPPL não está disponível, 100% IMA). As zonas usam
**histerese**: entra em 🟡/🔴 ao cruzar o limiar de entrada e só sai ao
cruzar o de saída (10 p.p. abaixo), eliminando o flip-flop diário.

## Backtest e calibração

Backtest 15y do ^BVSP (calibrado em 2026-07-04 20:53):

| Métrica | 🟡 AMARELO | 🔴 VERMELHO |
|---|---|---|
| Limiar de entrada (histerese −10 p.p. na saída) | 66% | 71% |
| Crises detectadas | 4/7 | 2/7 |
| Falsos alarmes/ano | 10.1 | 0.8 |
| Antecedência média | 22.8 dias | 25.5 dias |

Pesos calibrados: **70% IMA + 30% LPPL**.

## Referências

- Caetano, M.A.L.; Yoneyama, T. *Characterizing abrupt changes in the
  stock prices using a wavelet decomposition method*. Physica-A 383
  (2007) 519-526.
- Caetano, M.A.L. *Mudanças Abruptas no Mercado Financeiro*. Érica, 2013.
- Sornette, D. *Why Stock Markets Crash*. Princeton, 2003.
- Filimonov, V.; Sornette, D. *A stable and robust calibration scheme
  of the log-periodic power law model*. Physica-A 392 (2013) 3698-3707.
- Sornette, D. et al. *Real-time prediction of Bitcoin bubble crashes*
  / FCO Cockpit, ETH-Zurich.

> [!quote]- Aviso
> Estudo acadêmico. Não constitui recomendação de investimento.
