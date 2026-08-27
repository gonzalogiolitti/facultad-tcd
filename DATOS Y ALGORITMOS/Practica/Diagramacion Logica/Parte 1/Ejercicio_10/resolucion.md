# Ejercicio 10 — Seno y coseno de un ángulo

## Enunciado

Se lee desde el teclado el valor de un ángulo en grados. Se desea mostrar el coseno y el seno de dicho ángulo.

## Análisis

- **Entrada:** `angulo`.
- **Salidas:** `coseno`, `seno`.
- Estructura **secuencial**, usando las funciones matemáticas `cos` y `sin` de la tabla de operadores de la unidad.

## Resolución

Pseudocódigo:

```
Inicio
  Leer angulo
  coseno <- cos(angulo)
  seno <- sin(angulo)
  Mostrar coseno, seno
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer angulo**: se ingresa el ángulo en grados.
3. **coseno ← cos(angulo)**: se calcula el coseno.
4. **seno ← sin(angulo)**: se calcula el seno.
5. **Mostrar coseno, seno**: se muestran ambos resultados.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Ejemplo secuencial que reutiliza las funciones trigonométricas de la tabla de "otros operadores" del apunte.

## Nota sobre ambigüedades del enunciado

El apunte no aclara si `sin`/`cos` operan en grados o en radianes. Como el enunciado pide expresamente el ángulo "en grados", se asume que las funciones del pseudocódigo trabajan directamente con esa unidad.
