# Ejercicio 07 — Suma de dos números con corrección de signo

## Enunciado

Ingresar dos números por teclado y sumarlos. En caso de que alguno de los números sea negativo, previo a la suma se le debe cambiar el signo.

## Análisis

- **Entradas:** `n1`, `n2`.
- **Salida:** `suma` (siempre de valores no negativos).
- Estructura de **decisiones independientes**: las dos decisiones (`n1 < 0`, `n2 < 0`) no dependen una de la otra, por lo que se ubican una debajo de la otra, en cualquier orden.

## Resolución

Pseudocódigo:

```
Inicio
  Leer n1, n2
  Si n1 < 0 Entonces
    n1 <- -n1
  FinSi
  Si n2 < 0 Entonces
    n2 <- -n2
  FinSi
  suma <- n1 + n2
  Mostrar suma
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer n1, n2**: se ingresan los dos números.
3. **Primera decisión independiente**: si `n1 < 0`, se le cambia el signo.
4. **Segunda decisión independiente**: si `n2 < 0`, se le cambia el signo.
5. **suma ← n1 + n2**: se suman los valores ya corregidos.
6. **Mostrar suma**: se muestra el resultado.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Es el ejemplo que da el apunte justo después de introducir las decisiones independientes: dos condiciones que se evalúan una tras otra sin estar relacionadas entre sí (a diferencia de las decisiones anidadas del Problema 6).
