# Ejercicio 03

## Enunciado

Dadas las medidas de dos ángulos de un triángulo determinar la medida del tercero e informar el resultado.

## Análisis

- **Entrada:** dos ángulos (en grados): `angulo1` y `angulo2`.
- **Proceso:** los ángulos interiores de un triángulo suman 180°, entonces `angulo3 = 180 - angulo1 - angulo2`.
- **Salida:** la medida del tercer ángulo.
- **Estructura:** **Secuencial**.

**Ambigüedades y supuestos:**

- El enunciado no pide validar los datos. Si `angulo1 + angulo2 >= 180` el resultado es 0 o negativo y no existe tal triángulo.

**Alternativas:**

- Agregar una decisión `Si angulo1 + angulo2 < 180` para informar un error en caso contrario (decisión doble).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_03
   Leer angulo1, angulo2
   angulo3 <- 180 - angulo1 - angulo2
   Escribir "El tercer ángulo mide: ", angulo3
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer angulo1, angulo2**.
3. **angulo3 ← 180 - angulo1 - angulo2**: se resta de 180 los dos ángulos conocidos.
4. **Escribir** el tercer ángulo.
5. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 60° y 70° → `60, 70` | El tercer ángulo mide: 50 |
| 90° y 45° → `90, 45` | El tercer ángulo mide: 45 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Problema secuencial que usa una propiedad geométrica conocida. Validar los datos de entrada sería una mejora natural cuando se vea decisión.
