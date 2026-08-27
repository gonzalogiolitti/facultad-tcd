# Ejercicio 11 — Hipotenusa de un triángulo rectángulo

## Enunciado

Se ingresan por teclado los catetos de un triángulo rectángulo. Se desea hallar y mostrar su hipotenusa.

## Análisis

- **Entradas:** `cateto1`, `cateto2`.
- **Salida:** `hipotenusa`.
- **Fórmula (teorema de Pitágoras):** `hipotenusa = sqrt(cateto1^2 + cateto2^2)`.
- Estructura **secuencial**.

## Resolución

Pseudocódigo:

```
Inicio
  Leer cateto1, cateto2
  hipotenusa <- sqrt(cateto1^2 + cateto2^2)
  Mostrar hipotenusa
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer cateto1, cateto2**: se ingresan los dos catetos.
3. **hipotenusa ← sqrt(cateto1²+cateto2²)**: se aplica el teorema de Pitágoras usando los operadores `^` (potencia) y `sqrt` (raíz cuadrada) de la tabla de la unidad.
4. **Mostrar hipotenusa**: se muestra el resultado.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Ejemplo secuencial que combina dos operadores matemáticos de la tabla (`^` y `sqrt`) en una sola fórmula.
