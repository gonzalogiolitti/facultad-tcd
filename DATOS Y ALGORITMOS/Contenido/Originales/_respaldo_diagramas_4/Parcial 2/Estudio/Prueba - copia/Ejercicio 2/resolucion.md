# Ejercicio 2 — Temperaturas (Ejercicio 6: arreglos, solo PseInt)

## Enunciado

Ver [enunciado.md](enunciado.md).

## Resolución

- Código: [algoritmo.psc](algoritmo.psc). El enunciado pide solo PseInt, por eso no hay diagrama.
- Ordenamiento por **selección** (el que pide el enunciado, no burbuja), de mayor a menor, en el subproceso `OrdenarTemperaturas`.
- Promedio en la función `CalcularPromedio`, y búsqueda secuencial en la función `BuscarTemperatura`.

## Explicación paso a paso

1. **Carga (a).** Un `Para i <- 1 hasta 8` lee `temp[i]` (`Dimension temp[8]`).
2. **Selección (b).** En `OrdenarTemperaturas(v Por Referencia)`:
   - `Para i <- 1 hasta 7`: el externo llega a N-1.
   - Parte con `posMayor <- i` y, en el `Para j <- i + 1 hasta 8`, si `v[j] > v[posMayor]` guarda la **posición** (no el valor) en `posMayor`.
   - Al terminar la pasada hace **un solo intercambio** con `aux` (si `posMayor <> i`): el mayor del tramo queda en `i`. Para ordenar de mayor a menor se busca el máximo.
3. **Promedio (c).** `CalcularPromedio` suma las 8 temperaturas y devuelve `suma / 8`. El promedio se define como **Real** en el principal: si fuera Entero se truncaría a 27 en vez de 27,25. El principal recorre el arreglo y cuenta cuántas temperaturas son mayores al promedio.
4. **Búsqueda secuencial (d).** `BuscarTemperatura` parte de `i <- 1` y avanza con `Mientras i <= 8 Y v[i] <> t`: la guarda del rango va primero, así no se pasa de la posición 8 ni lee `v[9]`. Al salir, si `i <= 8` devuelve `i` (la **primera** posición, porque corta al encontrarla); si no, 0.
5. **Principal.** Si `posicion > 0` muestra "Temperatura encontrada en la posición: ..."; si no, "No registrada".

## Pruebas ejecutadas

Entrada: 24, 31, 28, 31, 19, 35, 28, 22.
Ordenadas: 35, 31, 31, 28, 28, 24, 22, 19 · Promedio: 27,25 (PseInt lo muestra como 27.25) · Superan el promedio: 5.

| Temperatura buscada | Salida |
|---|---|
| 28 | posición 4 (la primera de las dos) |
| 35 | posición 1 |
| 19 | posición 8 |
| 30 | "No registrada" |
| 31 | posición 2 |
| 24 | posición 6 |

Otros casos: arreglo ya ordenado de mayor a menor (busca 5, posición 8), en orden inverso (1, 2, ..., 8: promedio 4,5, superan 4) y todos iguales (20 ×8: promedio 20, superan 0, posición 1).

Los resultados del enunciado (orden, promedio, superan y las cuatro búsquedas) coinciden.

## Errores típicos evitados

- Selección: externo de 1 a 7 e interno de i+1 a 8, guardando la posición y con un único intercambio por pasada.
- `promedio` como Real, para que no trunque.
- La búsqueda no se pasa de la posición 8.
- Se usa selección y no burbuja, como pide el enunciado.
