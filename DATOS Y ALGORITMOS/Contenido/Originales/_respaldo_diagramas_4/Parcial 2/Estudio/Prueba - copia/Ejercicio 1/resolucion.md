# Ejercicio 1 — Cajero automático (Ejercicio 5: diagrama y PseInt, con Mientras)

## Enunciado

Ver [enunciado.md](enunciado.md).

## Análisis

- **¿Para o Mientras?** `Mientras`: no se sabe cuántas extracciones hay; el ingreso termina con 0 o un monto negativo. La condición del enunciado es de **corte** ("hasta que sea 0 o negativo"), así que el `MQ` va al revés: sigue **mientras `monto > 0`**.
- **¿Hay rombo?** Sí:
  - `monto > saldo` (rechazar o descontar);
  - `monto > maxima` (nueva más alta);
  - `validas = 0` (mensaje final).
- **¿Qué se calcula?** Dos contadores (válidas y rechazadas), el saldo que se va descontando y un máximo (la extracción válida más alta).

## Resolución

- Código: [algoritmo.psc](algoritmo.psc).
- Diagrama (espejo del código): [diagrama.drawio](diagrama.drawio) / [diagrama.png](diagrama.png).

## Explicación paso a paso

1. Se inicializan `validas`, `rechazadas` y `maxima` en 0. **La más alta no arranca con el saldo**: con 0 alcanza porque solo se considera un monto válido (positivo).
2. Se lee el `saldo` inicial y, **antes del ciclo**, el primer `monto`.
3. `Mientras monto > 0`: 0 y los negativos cortan el ingreso y no se procesan.
4. Si `monto > saldo`: "Fondos insuficientes" y `rechazadas` suma 1, sin tocar el saldo. Un monto **igual** al saldo no entra acá: es válido y deja el saldo en 0.
5. Si no: `saldo ← saldo - monto`, `validas` suma 1 y, si `monto > maxima`, se actualiza la más alta.
6. **Al final del cuerpo** se lee el siguiente `monto` (segunda entrada del monto).
7. Fuera del ciclo se muestran válidas, rechazadas y saldo final. Para el último mensaje se usa el **contador de válidas**: si `validas = 0` muestra "Sin extracciones"; si no, la más alta.

## Pruebas ejecutadas

| Entrada | Salida |
|---|---|
| Saldo 50000; 20000, 35000, 10000, 15000, 5000, 0 | "Fondos insuficientes" · Válidas 4 · Rechazadas 1 · Saldo final $0 · Más alta $20000 |
| Saldo 1000; 5000, -1 | "Fondos insuficientes" · Válidas 0 · Rechazadas 1 · Saldo $1000 · "Sin extracciones" |
| Saldo 50000; 0 | Válidas 0 · Rechazadas 0 · Saldo $50000 · "Sin extracciones" |
| Saldo 50000; 50000, 0 (monto = saldo) | Válidas 1 · Rechazadas 0 · Saldo $0 · Más alta $50000 |
| Saldo 30000; 30000, 1, 0 | Válidas 1 · Rechazadas 1 · Saldo $0 · Más alta $30000 |

Los tres primeros coinciden con los valores esperados del enunciado.

## Diagrama

Espejo de `algoritmo.psc`: mismos nombres, textos y orden.
- No se dibujan los avisos "Ingrese..." (van justo antes de un `Leer`).
- Las dos entradas del monto están dibujadas: una antes del `MQ` y otra al final del cuerpo.
- Hay dos entradas más al inicio (`saldo` y el primer `monto`), y los rombos usan `Sí` a la derecha y `No` a la izquierda, sin círculos de unión.

## Notas

- PseInt muestra los importes sin separador de miles: `$20000` equivale a $20.000.
- La condición `monto > 0` es la inversa de "0 o negativo" del enunciado; es el error típico de este ejercicio.
