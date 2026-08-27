# Ejercicio 01 — Perímetro y área de un rectángulo

## Enunciado

Ingresar la base (`b`) y la altura (`h`) de un rectángulo. Calcular y mostrar su perímetro y su área.

## Análisis

- **Entradas:** base (`b`) y altura (`h`), ambos numéricos.
- **Salidas:** `area` y `perimetro`.
- **Fórmulas:** `area = b * h` y `perimetro = 2 * (b + h)`.
- Estructura **secuencial**: no hay decisiones ni repeticiones, solo entrada, dos cálculos y salida.

## Resolución

Pseudocódigo:

```
Inicio
  Leer b, h
  area <- b * h
  perimetro <- 2 * (b + h)
  Mostrar area, perimetro
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer b, h**: se piden por teclado la base y la altura.
3. **area ← b·h**: se calcula el área.
4. **perimetro ← 2·(b+h)**: se calcula el perímetro.
5. **Mostrar area, perimetro**: se muestran ambos resultados.
6. **Fin**: fin del algoritmo.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Este es el "Problema 1" del apunte de Diagramación Lógica, el ejemplo introductorio de estructura secuencial. Reemplaza a la versión inicial que habíamos resuelto (que solo calculaba el área) para cubrir el enunciado completo del apunte, que también pide el perímetro.
