---
title: Metodologia
date: 2026-01-01
tags: [metodologia]
---

# Metodologia — Sinal de Crise B3

## IMA — Índice de Mudanças Abruptas

Método desenvolvido pelos professores **Marco Antonio Leonel Caetano** (ITA/INSPER) e **Takashi Yoneyama** (ITA), publicado na revista **Physica-A** (Elsevier, 2007-2012).

### Como funciona

1. **Detrending duplo**: remove tendência linear (MQO) + sazonalidade cosseno `a·cos(ω·t + φ)` do log-preço
2. **Wavelet Chapéu Mexicano (CWT)**: decompõe o resíduo em espectro tempo-frequência
3. **Energia de alta frequência**: mede a proporção de energia em oscilações rápidas
4. **Sinal IMA Crash**: `energia_alta_freq / volatilidade` → próximo de 1 = mercado sob tensão
5. **Sinal IMA Entrada**: `energia_baixa_freq / volatilidade` → próximo de 1 = oportunidade de compra

> *"Quando há alta frequência de movimentações com volatilidade baixa, é sinal de que o mercado está esperando algum evento para se definir e as mudanças tendem a ser abruptas."* — Prof. Caetano

### Referências
- Caetano & Yoneyama, **Physica A 383** (2007) 519–526
- Caetano & Yoneyama, **Physica A 388** (2009) 3563–3571
- Caetano & Yoneyama, **Physica A 391** (2012) 4877–4882

---

## LPPL — Log-Periodic Power Law

Modelo desenvolvido pelo Prof. **Didier Sornette** (ETH-Zurich), baseado em analogias com física de terremotos.

### Equação

```
ln(P(t)) ≈ A + B(tc-t)^m + C(tc-t)^m · cos(ω·ln(tc-t) + φ)
```

Onde `tc` é o **tempo crítico** estimado para o crash.

### Como funciona
- Detecta crescimento **super-exponencial** com oscilações log-periódicas aceleradas
- Padrão típico de bolha especulativa antes do colapso
- Estima a data provável do crash (`tc`)

---

## Backtesting (2010-2026)

| Crise | Detecção | Antecedência |
|---|---|---|
| Europeia 2011 | ✅ | 30 dias |
| Brasil 2015 | ✅ | 45 dias |
| Greve/Eleições 2018 | ✅ | 29 dias |
| Covid-19 2020 | ✅ | 20 dias |
| Hídrica/Fiscal 2021 | ✅ | 20 dias |
| Juros/Eleições 2022 | ✅ | 2 dias |
| Fiscal/Trump 2024 | ✅ | 28 dias |

**7/7 crises detectadas** | Antecedência média: 25 dias | 75 falsos alarmes/ano

---

## Aviso Legal

> Este site é um estudo acadêmico e não constitui recomendação de investimento. Os sinais aqui publicados são para fins educacionais e de pesquisa. Invista sempre com análise própria e consulte um assessor de investimentos.
