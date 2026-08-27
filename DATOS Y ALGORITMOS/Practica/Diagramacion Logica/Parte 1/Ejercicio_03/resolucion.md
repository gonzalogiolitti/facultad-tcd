# Ejercicio 03 — Perímetro de una circunferencia (radio válido)

## Enunciado

Ingresar el radio de una circunferencia. Si el radio ingresado es mayor a cero, calcular y mostrar su perímetro (la longitud de la circunferencia).

## Análisis

- **Entrada:** `radio`.
- **Salida:** `perimetro`, solo si `radio > 0`.
- **Fórmula:** `perimetro = 2 * π * radio`.
- Estructura de **decisión simple**: si la condición no se cumple, el algoritmo no realiza ninguna acción y termina directamente.

## Resolución

Pseudocódigo:

```
Inicio
  Leer radio
  Si radio > 0 Entonces
    perimetro <- 2 * 3.1416 * radio
    Mostrar perimetro
  FinSi
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer radio**: se ingresa el radio.
3. **¿radio > 0?**: se evalúa la condición de validez.
4. **Sí** → se calcula el perímetro y se muestra.
5. **No** → no se ejecuta ninguna acción, el flujo va directo a Fin.
6. **Fin**: fin del algoritmo.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Primer ejemplo de estructura de decisión simple (si/entonces, sin rama "sino"): el control de un dato de entrada antes de operar con él es un patrón muy frecuente en algoritmos.

## Nota sobre ambigüedades del enunciado

El apunte no especifica el valor de π a utilizar; se tomó 3.1416. Tampoco indica qué hacer si el radio no es válido (a diferencia del Problema 4, que sí lo pide) — por eso acá el flujo simplemente no muestra nada en ese caso.
