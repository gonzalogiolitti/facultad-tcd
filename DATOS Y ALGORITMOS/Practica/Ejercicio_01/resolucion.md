# Ejercicio 01 — Área de un rectángulo

## Enunciado

Elaborar un diagrama de flujo que muestre los pasos para calcular el área de un
rectángulo, ingresando la base (`b`) y la altura (`h`).

## Análisis

- **Datos de entrada:** base (`b`) y altura (`h`) del rectángulo, ambos numéricos.
- **Dato de salida:** área del rectángulo.
- **Fórmula:** `area = b * h`.
- No hay condiciones ni repeticiones involucradas — es un algoritmo de **estructura
  secuencial** (se ejecuta de forma lineal, sin bifurcaciones), el tipo de flujo más simple
  visto en la unidad de diagramación lógica.

## Resolución

Pseudocódigo:

```
Inicio
  Leer b, h
  area <- b * h
  Mostrar area
Fin
```

## Explicación

1. **Inicio**: marca el comienzo del algoritmo.
2. **Leer b, h**: se solicitan por teclado los dos datos necesarios (entrada).
3. **area ← b \* h**: se calcula el área multiplicando base por altura (proceso).
4. **Mostrar area**: se muestra el resultado obtenido (salida).
5. **Fin**: marca el final del algoritmo.

Cada símbolo del diagrama respeta la convención estándar de diagramación lógica:
óvalo/terminador para Inicio y Fin, paralelogramo para entrada/salida de datos, y
rectángulo para los procesos (cálculos).

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio) — diagrama de flujo secuencial con 5 pasos:
Inicio → Leer b, h → area ← b\*h → Mostrar area → Fin.

## Conclusión

El cálculo del área de un rectángulo es un ejemplo típico de algoritmo secuencial: entrada
de datos, un único proceso de cálculo y salida del resultado, sin necesidad de estructuras
de decisión. Es la misma lógica que utiliza el apunte de la materia en el "Problema 1"
(`Contenido/AyD-diagramacionlogica-parte1.md`), que además calcula el perímetro — si se
quisiera extender este ejercicio, bastaría con agregar un proceso adicional
`perimetro ← 2 * (b + h)` y mostrarlo junto con el área.
