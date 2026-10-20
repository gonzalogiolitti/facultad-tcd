# Ejercicio 05

## Enunciado

Dado el importe bruto de una factura calcular el resultado de bonificarlo con un 4%. Al monto obtenido calcularle el IVA. Finalmente informar el importe bruto, el valor de la bonificación, el importe bruto bonificado, el monto correspondiente al IVA y el importe neto resultante.

## Análisis

- **Entrada:** el importe bruto (`bruto`).
- **Proceso:** bonificación del 4 % → bruto bonificado → IVA sobre el bruto bonificado → neto = bruto bonificado + IVA.
- **Salida:** importe bruto, bonificación, bruto bonificado, IVA e importe neto.
- **Estructura:** **Secuencial**, con dos constantes y varios resultados intermedios.

**Ambigüedades y supuestos:**

- Se usa IVA 21 % (no indicado en el enunciado).
- "Importe neto" se interpreta como el total final: bruto bonificado + IVA.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_05
   tasa_bonif <- 0.04
   tasa_iva <- 0.21
   Leer bruto
   bonificacion <- bruto * tasa_bonif
   bruto_bonificado <- bruto - bonificacion
   iva <- bruto_bonificado * tasa_iva
   neto <- bruto_bonificado + iva
   Escribir "Importe bruto: ", bruto
   Escribir "Bonificación: ", bonificacion
   Escribir "Importe bruto bonificado: ", bruto_bonificado
   Escribir "IVA: ", iva
   Escribir "Importe neto: ", neto
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **tasa_bonif ← 0.04** y **tasa_iva ← 0.21**: constantes del problema.
3. **Leer bruto**.
4. **bonificacion ← bruto * tasa_bonif**: valor del descuento (4 % del bruto).
5. **bruto_bonificado ← bruto - bonificacion**: importe luego del descuento.
6. **iva ← bruto_bonificado * tasa_iva**: el IVA se calcula sobre el monto ya bonificado, como pide el enunciado.
7. **neto ← bruto_bonificado + iva**: importe final a pagar.
8. **Escribir** los cinco valores pedidos, en el orden del enunciado.
9. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| bruto 1000 → `1000` | Importe bruto: 1000<br>Bonificación: 40<br>Importe bruto bonificado: 960<br>IVA: 201.6<br>Importe neto: 1161.6 |
| bruto 250 → `250` | Importe bruto: 250<br>Bonificación: 10<br>Importe bruto bonificado: 240<br>IVA: 50.4<br>Importe neto: 290.4 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

El orden de los cálculos importa: el IVA se aplica **después** de la bonificación. Los resultados intermedios en variables permiten informarlos todos al final.
