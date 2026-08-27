# Ejercicio 04 — Perímetro de una circunferencia (con control de error)

## Enunciado

Ingresar el radio de una circunferencia y mostrar su perímetro, siempre que el radio sea mayor a cero. Si el radio ingresado es erróneo (cero o negativo), mostrar el cartel "Error".

## Análisis

- **Entrada:** `radio`.
- **Salidas:** `perimetro` (si es válido) o el cartel "Error" (si no lo es).
- Estructura de **decisión doble** (si/entonces/sino): a diferencia del Problema 3, ahora ambas ramas tienen una acción definida.

## Resolución

Pseudocódigo:

```
Inicio
  Leer radio
  Si radio > 0 Entonces
    perimetro <- 2 * 3.1416 * radio
    Mostrar perimetro
  Sino
    Mostrar "Error"
  FinSi
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer radio**: se ingresa el radio.
3. **¿radio > 0?**: se evalúa la condición.
4. **Sí** → se calcula y muestra el perímetro.
5. **No** → se muestra el cartel "Error".
6. Ambas ramas confluyen antes de **Fin**.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Extiende el Problema 3 agregando la rama "sino": es el ejemplo del apunte que introduce formalmente la decisión doble, donde ambas alternativas producen una salida.

## Nota sobre ambigüedades del enunciado

Se mantiene el mismo valor de π (3.1416) asumido en el Problema 3.
