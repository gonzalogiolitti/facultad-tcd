# Ejercicio 08 — Ventas de 10 días (Pregunta 2: arreglos, solo PseInt)

## Enunciado

Ver [enunciado.md](enunciado.md).

## Resolución

- Código: [algoritmo.psc](algoritmo.psc). Como el enunciado pide solo PseInt, no hay diagrama.
- Método de ordenamiento: **burbuja** (el que pide el enunciado), en el subproceso `OrdenarVentas`.
- Búsqueda: **binaria**, en la función `BuscarVenta`, que devuelve la posición (0 si no está).

## Explicación paso a paso

1. **Carga (a).** `Para i <- 1 hasta 10` lee `ventas[i]`. El arreglo se declara con `Dimension ventas[10]`, y el `Para` llega justo hasta 10, la dimensión.
2. **Burbuja (b).** En `OrdenarVentas(v Por Referencia)`:
   - `Para i <- 1 hasta 9`: hasta uno menos que la longitud.
   - `Para j <- 9 hasta i con paso -1`: parte del final y llega hasta `i`.
   - Compara `v[j]` con `v[j+1]` y, si están al revés, los intercambia con `aux`.
   - Como el arreglo viaja **por referencia**, queda ordenado en el principal.
3. **Búsqueda binaria (c).** En `BuscarVenta(v Por Referencia, monto)`:
   - Parte con `inf <- 1`, `sup <- 10` y `posicion <- 0`.
   - `Mientras inf <= sup Y posicion = 0`: calcula `medio <- trunc((inf + sup) / 2)`.
   - Si `v[medio] = monto`, guarda `posicion <- medio`; si `monto` es menor, `sup <- medio - 1`; si no, `inf <- medio + 1`.
   - Si no lo encuentra, `inf` supera a `sup` y la función devuelve 0.
4. **Principal.** Muestra las ventas ordenadas, pide el monto y llama a `posicion <- BuscarVenta(ventas, monto)`. Si `posicion > 0` muestra "Venta encontrada en la posición: ...", y si no, "Venta no encontrada".

## Pruebas ejecutadas

Entrada: 5200, 1800, 9900, 3100, 7400, 2600, 8800, 4500, 6000, 1200.
Ordenadas: 1200, 1800, 2600, 3100, 4500, 5200, 6000, 7400, 8800, 9900.

| Monto buscado | Salida |
|---|---|
| 4500 | Venta encontrada en la posición: 5 |
| 1200 | Venta encontrada en la posición: 1 |
| 9900 | Venta encontrada en la posición: 10 |
| 5000 | Venta no encontrada |
| 100 (menor que todas) | Venta no encontrada |
| 99999 (mayor que todas) | Venta no encontrada |
| 5200 / 1800 | posiciones 6 y 2 |

Los cuatro primeros coinciden con los valores esperados del enunciado.

## Detalles que evitan errores

- **Fuera de rango:** la condición `inf <= sup` va antes de leer `v[medio]`, y `medio` siempre queda entre `inf` y `sup`. El ejemplo de la cátedra (Arreglos p.42) usa `round`, que no existe en PseInt (es `redon`), y puede leer fuera de rango con un valor mayor que todos. Por eso se usa `trunc` y la guarda.
- **Retorno:** la función asigna `posicion` en todos los caminos (arranca en 0).
- **Requisito:** la búsqueda binaria solo sirve con el arreglo ya ordenado, por eso se ordena antes de buscar.
- **Repetidos:** si el monto está repetido, la búsqueda binaria devuelve una de sus posiciones, no necesariamente la primera.
