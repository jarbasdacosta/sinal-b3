---
title: Metodologia
tags: [metodologia]
---

# 📖 Metodologia — v5.1

## IMA Wavelet (Caetano)

O **Índice de Mudanças Abruptas** segue Caetano & Yoneyama
(Physica-A 383, 2007, 519-526; livro *Mudanças Abruptas no Mercado
Financeiro*, Érica, 2013): a série de preços passa por detrending duplo
(tendência log-linear + componente cosseno) e o ruído residual é
decomposto pela **Transformada Wavelet Contínua com Chapéu Mexicano**.
O índice segue o artigo de 2009: ζ(t) = n(t)/N — a fração dos
coeficientes wavelet (normalizados por escala, 32 escalas × 4 barras)
que ultrapassam o corte de 0,8σ na faixa mais recente. A escala é
**absoluta**: ζ=0,90 tem o mesmo significado hoje e daqui a dois anos.

**Leitura correta (v5.1).** Na borda direita da série — que é o que um
sinal em tempo real enxerga — o coeficiente do Chapéu Mexicano é positivo
quando o preço termina *acima* da tendência. Por isso o ζ publicado
(coeficientes positivos) mede **esticamento acima da tendência**: sobe em
altas fortes e cai em quedas. Exemplo real: a alta de 187 mil para 209 mil
pontos em out/2026 levou o ζ de 2% para 77%. Ele é um indicador de **risco
de reversão de topo**, não de "queda em curso".

Validação: replica o Kruskal-Wallis do artigo em 2003–2008
(p=0,007/0,002) — topos com ζ≥0,90 precederam quedas maiores e mais
longas; em 2015–2025, AUC causal 0,58 contra 0,50 do motor anterior.
Não serve para cravar a data do crash (teste de Molchan negativo).

O espectrograma histórico (página de gráficos) é calculado com a série
inteira, ou seja, *com dados futuros*: ali cada data é vista do meio da
janela. O ζ em tempo real, na borda, concorda só parcialmente com ele
(correlação ~0,4 em simulação) — não compare os dois diretamente.

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

Na v5.1 o risco é o próprio ζ Topo, tanto no diário quanto no intraday.
A média ponderada antiga (60% ζ + 40% LPPL) foi abandonada: o LPPL fica em
0% na maior parte do tempo, então o risco diário nunca passava de 60% e o
🔴 era matematicamente inalcançável. O LPPL continua publicado como
evidência complementar de bolha. As zonas usam
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

Pesos em uso: **100% ζ + 0% LPPL**.

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
