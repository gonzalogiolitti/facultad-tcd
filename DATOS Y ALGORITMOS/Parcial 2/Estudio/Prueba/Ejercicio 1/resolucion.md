# Prueba / Ejercicio 1 — Cine (Ejercicio 3: diagrama y PseInt, con Para)

## Enunciado

Ver [enunciado.md](enunciado.md).

## Análisis

- **¿Para o Mientras?** `Para`: se conoce la cantidad, 7 funciones.
- **¿Hay rombo?** Sí:
  - sala 1 o sala 2 (precio);
  - más de 100 espectadores (descuento);
  - nuevo máximo de espectadores.
- **¿Qué se calcula?** Un acumulador (recaudación total), un contador (funciones con descuento), un acumulador de espectadores (para el promedio) y un máximo con su posición.

## Resolución

- Código: [algoritmo.psc](algoritmo.psc).
- Diagrama (espejo del código): [diagrama.drawio](diagrama.drawio) / [diagrama.png](diagrama.png).

## Explicación paso a paso

1. Se inicializan `total`, `conDescuento` y `sumaEspectadores` en 0, `nroMax` en 0 y `maxEspectadores` en **-1**.
2. `Para nroFuncion ← 1 , 7 , 1`: por cada función se leen la sala y los espectadores.
3. Si `sala = 1` el precio es 4000; si no, 7000. `recaudacion ← espectadores * precio`.
4. Si `espectadores > 100` (estrictamente mayor): `recaudacion ← recaudacion * 0.85` y `conDescuento` suma 1. Con exactamente 100 no hay descuento.
5. `total` suma la recaudación y `sumaEspectadores` suma los espectadores.
6. Si `espectadores > maxEspectadores`, se guardan el máximo y el número de función. Con `>` (y no `>=`) un empate no reemplaza al anterior, así que queda **la primera**.
7. Fuera del `Para`: `promedio ← sumaEspectadores / 7` y se muestran los cuatro resultados.

**Por qué el máximo arranca en -1:** si arrancara en 0 y las 7 funciones tuvieran 0 espectadores, `espectadores > maxEspectadores` nunca sería verdadero y `nroMax` quedaría sin asignar (en 0). Con -1 la primera función siempre se registra, y en ese caso informa "la función 1 con 0".

## Pruebas ejecutadas

| Entrada (sala, espectadores) | Salida |
|---|---|
| (1, 80) (2, 120) (1, 100) (2, 150) (1, 30) (2, 90) (1, 130) | Total $3518500 · Con descuento 3 · Función 4 con 150 · Promedio 100 |
| Las 7 funciones con 0 espectadores | Total $0 · Con descuento 0 · Función 1 con 0 · Promedio 0 |
| Las 7 funciones sala 1 con 100 | Total $2800000 · Con descuento 0 (100 no lleva descuento) |
| (1, 50) (2, 90) (1, 90) y el resto con 10 | Función 2 con 90 (empate: la primera) |
| (2, 101) y el resto con 0 | Total $600950 · Con descuento 1 |

Los dos primeros casos coinciden con los valores esperados del enunciado.

## Diagrama

Espejo de `algoritmo.psc`: mismos nombres, textos y orden. No se dibujan los avisos "Ingrese..." (van justo antes de un `Leer`). `Sí` a la derecha y `No` a la izquierda, sin círculos de unión. El `Para` tiene su hexágono y su `Fin (Para)`; las dos lecturas y las tres decisiones están dentro del ciclo.

## Notas

- `funcion` es palabra reservada de PseInt (de `Funcion`), por eso la variable del `Para` se llama `nroFuncion`.
- PseInt muestra el total sin separador de miles: `$3518500` equivale a $3.518.500.
- Se supone que la sala ingresada es 1 o 2 (el enunciado no pide validarla).
