# Ejercicio 14 — Número de la cara de un dado (al azar)

## Enunciado

Mostrar en letras el número de la cara de un dado obtenido al azar (valor entre 1 y 6).

## Análisis

- **Entrada:** ninguna (el valor se genera al azar).
- **Salida:** el número obtenido, escrito en letras ("Uno" a "Seis").
- Se usa el operador **`random`** de la tabla de operadores: `random(6)` devuelve un valor entre 0 y 5, por lo que sumando 1 se obtiene un valor entre 1 y 6 (mismo criterio que el ejemplo `random(10)+1 → del 1 al 10` del apunte).
- Estructura de **decisiones anidadas** encadenadas: se compara el valor obtenido contra 1, 2, 3, 4 y 5; si no coincide con ninguno, por descarte solo puede ser 6.

## Resolución

Pseudocódigo:

```
Inicio
  dado <- random(6) + 1
  Si dado = 1 Entonces
    Mostrar "Uno"
  Sino
    Si dado = 2 Entonces
      Mostrar "Dos"
    Sino
      Si dado = 3 Entonces
        Mostrar "Tres"
      Sino
        Si dado = 4 Entonces
          Mostrar "Cuatro"
        Sino
          Si dado = 5 Entonces
            Mostrar "Cinco"
          Sino
            Mostrar "Seis"
          FinSi
        FinSi
      FinSi
    FinSi
  FinSi
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **dado ← random(6)+1**: se genera un valor entero al azar entre 1 y 6.
3. Se encadenan **cinco decisiones anidadas**, cada una preguntando si `dado` es igual a 1, 2, 3, 4 o 5, en ese orden.
4. Apenas una de esas comparaciones da verdadera, se muestra la palabra correspondiente y el algoritmo termina.
5. Si ninguna de las cinco se cumple, por descarte el valor solo puede ser 6, y se muestra "Seis" directamente (sin necesidad de una sexta comparación).

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Cierra la unidad combinando dos temas vistos por separado: las decisiones anidadas (para resolver una alternativa múltiple, similar a un "switch") y el operador `random`.

## Nota sobre ambigüedades del enunciado

El apunte no fija un rango de salida para `random`; se tomó como referencia el propio ejemplo de la tabla del apunte (`random(10)+1` para el rango 1–10) y se adaptó a 6 caras: `random(6)+1`.
