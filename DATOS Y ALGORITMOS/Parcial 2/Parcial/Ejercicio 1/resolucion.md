# Ejercicio 1 — Candidatos: ordenar con selección del mínimo

## Enunciado

En un proceso de selección laboral se evalúan 8 candidatos y se guardan sus puntajes en un vector. Se solicita clasificar el arreglo de forma creciente (de menor a mayor) utilizando el algoritmo de selección del mínimo.

Formato permitido: solo PseInt (`algoritmo.psc`).

## Análisis

- **¿Para o Mientras?** Para: el vector tiene 8 elementos fijos.
- **¿Hay rombo?** Sí, dentro del recorrido: si el elemento `j` es menor que el mínimo actual, se actualiza la posición del mínimo.
- **¿Qué se calcula?** Nada nuevo: se reordena el mismo vector.
- **Método pedido:** selección del mínimo (no burbuja).

## Resolución

1. Se cargan los 8 puntajes con un `Para`.
2. `Para i` de 1 a 7 (el último elemento ya queda en su lugar solo):
   - `posMin ← i`.
   - `Para j` de `i+1` a 8: si `puntajes[j] < puntajes[posMin]`, `posMin ← j`.
   - Si `posMin <> i`, se intercambian `puntajes[i]` y `puntajes[posMin]` con una variable auxiliar.
3. Se muestra el vector ordenado con un `Para`.

## Explicación paso a paso

Cada vuelta del `Para` externo deja fijo el menor del tramo que falta ordenar. Con `i = 1` busca el menor de las 8 posiciones y lo pone primero; con `i = 2`, el menor de las posiciones 2 a 8, y así. La búsqueda del mínimo solo guarda la **posición**, y el intercambio se hace una sola vez por vuelta, al terminar de buscar.

## Diagrama

No lleva: el enunciado pide solo `.psc`.

## Pruebas

| Entrada | Salida |
|---|---|
| 70 55 90 55 100 20 85 60 | 20 55 55 60 70 85 90 100 (con repetidos) |
| 1 2 3 4 5 6 7 8 (ya ordenado) | igual |
| 8 7 6 5 4 3 2 1 (inverso) | 1 2 3 4 5 6 7 8 |

## Conclusión

Selección del mínimo = dos `Para` anidados, el interno busca la posición del menor y el externo lo intercambia con la posición `i`. Error típico: llevar el `Para` externo hasta 8 (sobra una vuelta) o intercambiar dentro del `Para` interno (eso ya sería otro método).
