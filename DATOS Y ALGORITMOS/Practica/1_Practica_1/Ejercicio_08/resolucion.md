# Ejercicio 08

## Enunciado

Una fábrica desea controlar la calidad de dos piezas, A y B de las cuales se dan como dato el tipo de pieza y su medida en milímetros. Se debe indicar si la pieza cumple con las especificaciones de calidad que son las siguientes:
- Las piezas tipo A deben medir 165 mm y se admite un error de +/- 2 mm
- Las piezas tipo B deben medir 180 mm y se admite un error de +/- 3 mm

## Análisis

- **Entrada:** el tipo de pieza (`tipo`, "A" o "B") y su medida en mm (`medida`).
- **Proceso:** pieza A: válida si 165 ± 2 → entre 163 y 167. Pieza B: válida si 180 ± 3 → entre 177 y 183.
- **Salida:** un mensaje que indica si la pieza cumple o no con la calidad.
- **Estructura:** **Decisiones anidadas** con operador `Y` (primero se decide el tipo y luego el rango de medida).

**Ambigüedades y supuestos:**

- El tipo se ingresa en mayúscula ("A" o "B").
- Los límites del rango se consideran **incluidos** ("+/- 2 mm" admite exactamente 163 y 167).
- Se agrega la rama "tipo inválido"; el enunciado solo menciona A y B.

**Alternativas:**

- Usar el valor absoluto: `abs(medida - 165) <= 2` y `abs(medida - 180) <= 3`.
- Una sola condición con `O`: `(tipo = "A" Y …) O (tipo = "B" Y …)`.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_08
   Leer tipo, medida
   Si tipo = "A" Entonces
      Si medida >= 163 Y medida <= 167 Entonces
         Escribir "La pieza A cumple con la calidad"
      SiNo
         Escribir "La pieza A NO cumple con la calidad"
      FinSi
   SiNo
      Si tipo = "B" Entonces
         Si medida >= 177 Y medida <= 183 Entonces
            Escribir "La pieza B cumple con la calidad"
         SiNo
            Escribir "La pieza B NO cumple con la calidad"
         FinSi
      SiNo
         Escribir "Tipo de pieza inválido"
      FinSi
   FinSi
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer tipo, medida**.
3. **¿tipo = "A"?**
4. **Sí** → se verifica **¿medida ≥ 163 Y medida ≤ 167?**: si se cumple, la pieza A cumple; si no, no cumple.
5. **No** → se pregunta **¿tipo = "B"?**: si es B se verifica **¿medida ≥ 177 Y medida ≤ 183?** y se informa el resultado.
6. Si el tipo no es "A" ni "B" se informa que el tipo es inválido.
7. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| A, 164 → `A, 164` | La pieza A cumple con la calidad |
| A, 163 (límite) → `A, 163` | La pieza A cumple con la calidad |
| A, 170 → `A, 170` | La pieza A NO cumple con la calidad |
| B, 180 → `B, 180` | La pieza B cumple con la calidad |
| B, 184 → `B, 184` | La pieza B NO cumple con la calidad |
| C, 100 → `C, 100` | Tipo de pieza inválido |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Se combinan decisiones anidadas (el tipo determina qué rango usar) con operadores lógicos (los dos límites del rango). Las tolerancias "±" se traducen a un intervalo cerrado.
