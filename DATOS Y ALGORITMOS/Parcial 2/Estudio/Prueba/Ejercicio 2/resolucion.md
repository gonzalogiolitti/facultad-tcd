# Prueba / Ejercicio 2 — Sucursales (Ejercicio 4: arreglos, solo PseInt)

## Enunciado

Ver [enunciado.md](enunciado.md).

## Resolución

- Código: [algoritmo.psc](algoritmo.psc). El enunciado pide solo PseInt, por eso no hay diagrama.
- Intercalación en el subproceso `IntercalarVentas` y búsqueda secuencial en la función `BuscarMonto`, que devuelve cuántas veces aparece el monto.

## Explicación paso a paso

1. **Carga (a).** Dos `Para` leen A (6 días, `Dimension A[6]`) y B (4 días, `Dimension B[4]`). C se declara con `Dimension C[10]`.
2. **Intercalación (b).** En `IntercalarVentas(A, B, C)` (los tres por referencia, así C queda armado en el principal):
   - Tres índices: `i` recorre A, `j` recorre B y `p` escribe en C.
   - `Mientras i <= 6 Y j <= 4`: se copia el menor de `A[i]` y `B[j]` a `C[p]`, avanza el índice de ese arreglo y siempre avanza `p`. Si son iguales, sale primero el de A.
   - Al salir, uno de los dos se agotó. Si `i > 6` se agotó A y se copia el resto de B (`Para m ← j hasta 4`). Si no, se agotó B y se copia el resto de A (`Para m ← i hasta 6`).
   - El principal muestra C.
3. **Búsqueda secuencial (c).** `BuscarMonto(C, k)` recorre **todo** C, sin cortar en la primera aparición. Cada vez que `C[m] = k` suma 1 a `veces` y muestra la posición. Devuelve `veces`.
4. **Principal.** Si `cantidad > 0` muestra cuántas veces aparece; si es 0, "Monto no registrado".

## Pruebas ejecutadas

C con A = 1200, 2500, 2500, 4000, 6100, 9000 y B = 800, 2500, 5000, 9000: `800, 1200, 2500, 2500, 2500, 4000, 5000, 6100, 9000, 9000`.

| Monto k | Salida |
|---|---|
| 2500 | Posiciones 3, 4 y 5 · "aparece 3 veces" |
| 9000 | Posiciones 9 y 10 · "aparece 2 veces" |
| 800 | Posición 1 · "aparece 1 veces" |
| 3000 | "Monto no registrado" |

Otros dos pares para el merge:

| A | B | C | Caso |
|---|---|---|---|
| 50, 60, 70, 80, 90, 100 | 1, 2, 3, 4 | 1, 2, 3, 4, 50, 60, 70, 80, 90, 100 | B se termina primero y se copia el resto de A |
| 1, 2, 3, 4, 5, 6 | 10, 20, 30, 40 | 1, 2, 3, 4, 5, 6, 10, 20, 30, 40 | A se termina primero y se copia el resto de B |

Todo coincide con los valores esperados del enunciado.

## Errores típicos evitados

- La condición del `Mientras` es `(i <= 6) Y (j <= 4)`, con los límites de cada arreglo (6 y 4), no los de C.
- El resto se copia del arreglo que quedó con elementos: se decide con `Si i > 6`.
- La búsqueda no corta en la primera aparición: recorre los 10 elementos para contar todas y mostrar todas las posiciones.
- La función asigna su variable de retorno (`veces`) desde el principio.

## Nota

El mensaje dice "aparece 1 veces" cuando hay una sola aparición; es solo cuestión de texto y no afecta la lógica.
