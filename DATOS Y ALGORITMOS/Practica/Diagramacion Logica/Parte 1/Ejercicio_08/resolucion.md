# Ejercicio 08 — Verificar si un número está en la primera docena

## Enunciado

Solicitar al usuario un número natural y verificar si el número ingresado se encuentra dentro de la primera docena de números naturales, es decir, entre el 1 y el 12.

## Análisis

- **Entrada:** `n`.
- **Salida:** mensaje indicando si `n` pertenece o no al rango [1, 12].
- La condición combina **dos comparaciones con el operador lógico `and`** (conjunción): ambas deben cumplirse simultáneamente.

## Resolución

Pseudocódigo:

```
Inicio
  Leer n
  Si (n >= 1) and (n <= 12) Entonces
    Mostrar "Está en la primera docena"
  Sino
    Mostrar "No está en la primera docena"
  FinSi
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer n**: se ingresa el número.
3. **¿(n≥1) and (n≤12)?**: ambas condiciones deben ser verdaderas a la vez.
4. **Sí** → el número está en la primera docena.
5. **No** → el número está fuera de ese rango.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Aplica directamente la tabla de conjunción lógica (`and`) vista en la unidad: el resultado solo es verdadero cuando las dos variables lógicas involucradas lo son.
