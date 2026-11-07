# Ejercicio 07 — Estacionamiento (Pregunta 1: diagrama y PseInt)

## Enunciado

Ver [enunciado.md](enunciado.md).

## Análisis

- **¿Para o Mientras?** `Mientras`: no se sabe cuántos vehículos hay; el ingreso termina con el centinela `X`. Se lee el tipo **antes** del ciclo y **al final del cuerpo**.
- **¿Hay rombo?** Sí:
  - tipo válido (A, M o C) o no, para pedir o no las horas;
  - A / M / C, para elegir la tarifa;
  - más de 8 horas, para el descuento;
  - importe mayor que el máximo;
  - sin movimientos, al final.
- **¿Qué se calcula?** Contadores por tipo, el total recaudado (acumulador) y el importe más alto (máximo).

## Resolución

- Código: [algoritmo.psc](algoritmo.psc).
- Diagrama (espejo del código): [diagrama.drawio](diagrama.drawio) / [diagrama.png](diagrama.png).

## Explicación paso a paso

1. Se inicializan en 0 los contadores `autos`, `motos` y `camionetas`, el acumulador `total` y el `maximo`.
2. Se lee el tipo y se pasa a mayúscula con `Mayusculas`, así `a` y `A` valen lo mismo.
3. `Mientras tipo <> "X"`: el ciclo corre hasta que el tipo es X. Con X no se piden horas.
4. Si el tipo es A, M o C: se leen las horas y se elige la tarifa (1500, 800 o 2200) sumando 1 al contador del tipo. Después `importe <- horas * tarifa`.
5. Si `horas > 8`, el importe se multiplica por 0,9 (descuento del 10% solo para ese vehículo). Con exactamente 8 horas no hay descuento.
6. `total` suma el importe, y si el importe supera a `maximo`, lo reemplaza.
7. Si el tipo no es A, M, C ni X: se muestra "Tipo inválido" y no se piden horas.
8. Al final del cuerpo se vuelve a leer el tipo (y se pasa a mayúscula), para evaluar el siguiente vehículo.
9. Fuera del ciclo: si `autos + motos + camionetas = 0` se muestra "Sin movimientos"; si no, las tres cantidades, el total y el importe más alto.

## Pruebas ejecutadas

| Entrada | Salida |
|---|---|
| A 3, M 10, C 2, A 9, Z, X | "Tipo inválido"; Autos 2, Motos 1, Camionetas 1; Total $28250; Importe más alto $12150 |
| M 8, X | Autos 0, Motos 1, Camionetas 0; Total $6400 (8 horas: sin descuento) |
| X | "Sin movimientos" |
| a 3, x (minúsculas) | Autos 1; Total $4500 |
| Z, X (solo inválidos) | "Tipo inválido" y "Sin movimientos" |
| m 9, c 8, x | Total $24080; Importe más alto $17600 (9 h moto con descuento; 8 h camioneta sin descuento) |

Los tres primeros casos coinciden con los valores esperados del enunciado.

## Diagrama

Espejo de `algoritmo.psc`: mismos nombres, textos, condiciones y orden.
- Notación de las diapositivas: `<>` → `!=` y `O` → `or`, cada comparación entre paréntesis.
- No se dibujan los avisos "Ingrese..." (van justo antes de un `Leer`).
- Las condiciones anidadas A / M / C van como rombos, con `Sí` a la derecha y `No` a la izquierda, sin círculos de unión.

## Conclusión

Es un `Mientras` con centinela, lectura antes y al final del cuerpo, decisiones anidadas, contadores, acumulador y máximo. Los errores típicos son leer el tipo solo una vez, descontar con 8 horas en vez de más de 8, y no considerar los casos "sin movimientos" ni minúsculas.

## Notas

- Un vehículo con tipo inválido no cuenta como "registrado": si solo se ingresan tipos inválidos y X, el resultado es "Sin movimientos".
- El máximo arranca en 0; sirve porque todos los importes son positivos.
