# Ejercicio 12

## Enunciado

Una distribuidora de libros vende a librerías y a particulares. Aplica bonificaciones por cantidad según el siguiente criterio:
i) A librerías: hasta 24 unidades, el 20%. Más de 24 unidades, el 25%.
ii) A particulares: menos de 6 unidades, nada; desde 6 y hasta 18 unidades, el 5%. Más de 18 unidades, el 10%.
El tipo de cliente está codificado como “L” para librerías y “P” para particulares. Dado el importe bruto de una compra de libros, el tipo de cliente de que se trata y la cantidad total pedida por el mismo, determinar el importe bruto bonificado.

## Análisis

- **Entrada:** el importe bruto (`importe`), el tipo de cliente (`tipo`: "L" o "P") y la cantidad de unidades (`cantidad`).
- **Proceso:** según el tipo y la cantidad se elige el `porcentaje` de bonificación; luego `bonificado = importe - importe * porcentaje`.
- **Salida:** el importe bruto bonificado.
- **Estructura:** **Decisiones anidadas**: primero el tipo de cliente y, dentro de cada uno, tramos de cantidad. Después, una secuencia común de cálculo y salida.

**Ambigüedades y supuestos:**

- Cualquier tipo distinto de "L" se trata como particular ("P"); el enunciado solo prevé esos dos códigos.
- Los límites ("hasta 24", "desde 6 y hasta 18") se consideran incluidos, como dice el texto.
- La "bonificación" es un descuento sobre el importe bruto.

**Alternativas:**

- Usar `Y` en lugar de anidar: `Si cantidad >= 6 Y cantidad <= 18`.
- Calcular directamente el importe en cada rama, sin variable `porcentaje` (repite el cálculo).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_12
   Leer importe, tipo, cantidad
   Si tipo = "L" Entonces
      Si cantidad <= 24 Entonces
         porcentaje <- 0.20
      SiNo
         porcentaje <- 0.25
      FinSi
   SiNo
      Si cantidad < 6 Entonces
         porcentaje <- 0
      SiNo
         Si cantidad <= 18 Entonces
            porcentaje <- 0.05
         SiNo
            porcentaje <- 0.10
         FinSi
      FinSi
   FinSi
   bonificado <- importe - importe * porcentaje
   Escribir "El importe bruto bonificado es: ", bonificado
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer importe, tipo, cantidad**.
3. **¿tipo = "L"?**  **Sí** (librería): **¿cantidad ≤ 24?** → 20 %; si no → 25 %.
4. **No** (particular): **¿cantidad < 6?** → 0 %; si no, **¿cantidad ≤ 18?** → 5 %; si no → 10 %.
5. Todas las ramas terminan con la variable `porcentaje` asignada, por lo que el cálculo posterior es **común**: **bonificado ← importe - importe * porcentaje**.
6. **Escribir** el importe bonificado.
7. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| L, 10 u. → `1000, L, 10` | El importe bruto bonificado es: 800 |
| L, 24 u. (límite) → `1000, L, 24` | El importe bruto bonificado es: 800 |
| L, 30 u. → `1000, L, 30` | El importe bruto bonificado es: 750 |
| P, 3 u. → `1000, P, 3` | El importe bruto bonificado es: 1000 |
| P, 6 u. (límite) → `1000, P, 6` | El importe bruto bonificado es: 950 |
| P, 18 u. (límite) → `1000, P, 18` | El importe bruto bonificado es: 950 |
| P, 19 u. → `1000, P, 19` | El importe bruto bonificado es: 900 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Asignar el porcentaje dentro de las decisiones y calcular **una sola vez** al final evita repetir la fórmula. Las decisiones anidadas modelan bien criterios que dependen de otro criterio (tipo → cantidad).
