# Ejercicio 12 — Par o impar

## Enunciado

Ingresar un número natural por teclado. Se desea saber y mostrar si es par o impar.

## Análisis

- **Entrada:** `n`.
- **Salida:** "Es par" o "Es impar".
- Se usa el operador **`mod`** (módulo/resto de la división) de la tabla de operadores: un número es par cuando el resto de dividirlo por 2 es 0.

## Resolución

Pseudocódigo:

```
Inicio
  Leer n
  Si (n mod 2) = 0 Entonces
    Mostrar "Es par"
  Sino
    Mostrar "Es impar"
  FinSi
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer n**: se ingresa el número.
3. **¿(n mod 2) = 0?**: se evalúa el resto de dividir `n` por 2.
4. **Sí** → el número es par.
5. **No** → el número es impar.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Ejemplo clásico de uso del operador `mod` dentro de una decisión doble.
