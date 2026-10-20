# Ejercicio 04

## Enunciado

Dado como dato el importe de una factura, calcular el valor correspondiente al IVA e informarlo.

## Análisis

- **Entrada:** el importe de la factura (`importe`).
- **Proceso:** `iva = importe * 0.21` (la alícuota se guarda en una constante `tasa_iva`).
- **Salida:** el valor del IVA.
- **Estructura:** **Secuencial**, con una constante.

**Ambigüedades y supuestos:**

- El enunciado no indica la alícuota; se toma 21 %, la misma que usa el apunte de la cátedra.
- Se asume que el importe de la factura es el importe neto (sin IVA) sobre el que se calcula el impuesto.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_04
   tasa_iva <- 0.21
   Leer importe
   iva <- importe * tasa_iva
   Escribir "El IVA es: ", iva
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **tasa_iva ← 0.21**: se asigna la constante (alícuota general del IVA en Argentina, 21 %).
3. **Leer importe**.
4. **iva ← importe * tasa_iva**.
5. **Escribir** el IVA.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| importe 1000 → `1000` | El IVA es: 210 |
| importe 250.5 → `250.5` | El IVA es: 52.605 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Guardar la alícuota en una constante evita "números mágicos" en las fórmulas: si cambia el IVA, se modifica un solo lugar.
