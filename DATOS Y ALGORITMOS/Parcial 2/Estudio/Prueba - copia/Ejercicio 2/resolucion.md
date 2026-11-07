# Ejercicio 2 — Intercalación (Ejercicio 8: arreglos, solo PseInt)

## Enunciado

Ver [enunciado.md](enunciado.md).

## Resolución

- Código: [algoritmo.psc](algoritmo.psc). El enunciado pide solo PseInt, por eso no hay diagrama.
- Intercalación en el subproceso `IntercalarArreglos`, con los tres arreglos por referencia.

## Explicación paso a paso

1. **Carga.** Dos `Para` leen A (3 elementos, `Dimension A[3]`) y B (2 elementos, `Dimension B[2]`). C se declara con `Dimension C[5]` (3 + 2).
2. **Intercalación.** En `IntercalarArreglos(A, B, C)`:
   - Tres índices: `i` recorre A, `j` recorre B y `p` escribe en C, los tres desde 1.
   - `Mientras i <= 3 Y j <= 2`: se copia el menor de `A[i]` y `B[j]` a `C[p]`, avanza el índice de ese arreglo y siempre avanza `p`. Si son iguales, sale primero el de A.
   - Al salir, uno de los dos se agotó. Si `i > 3` se agotó A y se copia el resto de B (`Para m <- j hasta 2`). Si no, se agotó B y se copia el resto de A (`Para m <- i hasta 3`).
3. **Principal.** Muestra C con un `Para` de 1 a 5.

## Pruebas ejecutadas

| A | B | C | Caso |
|---|---|---|---|
| 2, 5, 9 | 3, 4 | 2, 3, 4, 5, 9 | intercalado normal |
| 10, 20, 30 | 1, 2 | 1, 2, 10, 20, 30 | B se termina primero: se copia el resto de A |
| 1, 2, 3 | 8, 9 | 1, 2, 3, 8, 9 | A se termina primero: se copia el resto de B |
| 1, 5, 5 | 5, 5 | 1, 5, 5, 5, 5 | valores repetidos |
| 1, 3, 5 | 2, 4 | 1, 2, 3, 4, 5 | alternados |

Los tres primeros coinciden con los valores esperados del enunciado.

## Errores típicos evitados

- La condición del `Mientras` usa los límites de cada arreglo: `(i <= 3) Y (j <= 2)`, no el 5 de C.
- El resto se copia del arreglo que quedó con elementos, decidido con `Si i > 3`.
- C tiene exactamente 5 posiciones y el índice `p` nunca pasa de 5.
- Los arreglos A y B se asumen ya ordenados de menor a mayor, como dice el enunciado.
