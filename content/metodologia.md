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

**Na v5**, o índice segue fielmente o artigo: ζ(t) = n(t)/N — a fração
dos coeficientes wavelet (normalizados por escala) que ultrapassam o
corte de 0,8σ na faixa recente. A escala é **absoluta**: ζ=0,90 tem o
mesmo significado hoje e daqui a dois anos. Validação: replica o
Kruskal-Wallis do artigo em 2003–2008 (p=0,007/0,002); em 2015–2025,
AUC 0,58 contra 0,50 do motor anterior. ζ **classifica a severidade do
movimento em curso** — não antecipa o início da queda (o próprio
Caetano registra que ζ sobe com atraso).

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

Backtest 15y do ^BVSP (calibrado em —):

| Métrica | 🟡 AMARELO | 🔴 VERMELHO |
|---|---|---|
| Limiar de entrada (histerese −10 p.p. na saída) | 60% | 90% |
| Crises detectadas | —/— | —/— |
| Falsos alarmes/ano | — | — |
| Antecedência média | — dias | — dias |

Pesos calibrados: **60% IMA + 40% LPPL**.

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
