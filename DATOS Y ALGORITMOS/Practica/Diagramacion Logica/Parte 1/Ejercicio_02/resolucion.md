# Ejercicio 02 — Concatenar nombre y apellido

## Enunciado

Ingresar un nombre y un apellido en variables distintas. Mostrar, en forma concatenada, el nombre seguido del apellido.

## Análisis

- **Entradas:** `nombre` y `apellido`, ambas alfanuméricas.
- **Salida:** `nombreCompleto`, el resultado de concatenar ambas variables.
- Estructura **secuencial**.

## Resolución

Pseudocódigo:

```
Inicio
  Leer nombre, apellido
  nombreCompleto <- nombre + " " + apellido
  Mostrar nombreCompleto
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer nombre, apellido**: se piden los dos datos alfanuméricos.
3. **nombreCompleto ← nombre + " " + apellido**: se concatenan con un espacio en el medio.
4. **Mostrar nombreCompleto**: se muestra el resultado.
5. **Fin**: fin del algoritmo.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Ejemplo típico de estructura secuencial que trabaja con variables alfanuméricas en lugar de numéricas, reforzando la distinción vista en la unidad (`A1="20"` vs. `G1=20`).

## Nota sobre ambigüedades del enunciado

El apunte no especifica el operador de concatenación de cadenas ni si debe haber un espacio entre nombre y apellido. Se asumió el operador `+` (convención habitual en pseudocódigo) y un espacio intermedio, por ser el resultado más natural de "mostrar el nombre seguido del apellido".
