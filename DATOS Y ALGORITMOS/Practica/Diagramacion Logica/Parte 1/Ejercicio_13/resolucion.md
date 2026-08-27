# Ejercicio 13 — Divisible por 7 y mayor a 40

## Enunciado

Ingresar un número entero para saber si es divisible por 7 y, a la vez, mayor a 40.

## Análisis

- **Entrada:** `n`.
- **Salida:** mensaje indicando si cumple o no ambas condiciones.
- La condición combina `mod` (para la divisibilidad) con el operador **`and`** (deben cumplirse las dos comparaciones).

## Resolución

Pseudocódigo:

```
Inicio
  Leer n
  Si ((n mod 7) = 0) and (n > 40) Entonces
    Mostrar "Cumple ambas condiciones"
  Sino
    Mostrar "No cumple las condiciones"
  FinSi
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer n**: se ingresa el número.
3. **¿(n mod 7 = 0) and (n > 40)?**: ambas condiciones deben cumplirse a la vez.
4. **Sí** → el número es divisible por 7 y mayor a 40.
5. **No** → no cumple (al menos) una de las dos condiciones.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Combina `mod` con `and` en una sola condición doble, reforzando ambos conceptos vistos por separado en problemas anteriores.

## Nota sobre ambigüedades del enunciado

El enunciado dice "saber si" sin especificar qué mostrar en cada caso; se asumió que corresponde informar el resultado en ambas ramas (decisión doble), ya que "saber" implica poder ver la respuesta sea cual sea.
