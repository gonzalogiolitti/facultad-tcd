# Ejercicio 1 — Notas (Ejercicio 7: diagrama y PseInt, con Para)

## Enunciado

Ver [enunciado.md](enunciado.md).

## Análisis

- **¿Para o Mientras?** `Para`: se conoce la cantidad, 6 alumnos.
- **¿Hay rombo?** Sí, dos, dentro del `Para`:
  - `nota >= 6` (cuenta un aprobado);
  - `nota < minima` (nueva nota más baja).
- **¿Qué se calcula?** Un contador (aprobados), un acumulador (suma de notas, para el promedio) y un mínimo.

## Resolución

- Código: [algoritmo.psc](algoritmo.psc).
- Diagrama (espejo del código): [diagrama.drawio](diagrama.drawio) / [diagrama.png](diagrama.png).

## Explicación paso a paso

1. Se inicializan `aprobados` y `suma` en 0 y `minima` en **11**. Un valor alto garantiza que la primera nota (máximo 10) la reemplace. Si arrancara en 0, ninguna nota sería menor y la mínima nunca se actualizaría.
2. `Para i ← 1 , 6 , 1`: por cada alumno se lee la nota.
3. Si `nota >= 6`, suma 1 a `aprobados`. Es `>=` y no `>`: el 6 aprueba.
4. `suma ← suma + nota` acumula la nota, y si `nota < minima`, se guarda como nueva mínima.
5. **Después de cerrar el `Para`**: `promedio ← suma / 6`. Dividir adentro del ciclo daría un promedio parcial en cada vuelta.
6. Se muestran aprobados, nota más baja y promedio.

## Pruebas ejecutadas

| Entrada | Salida |
|---|---|
| 8, 4, 6, 9, 5, 7 | Aprobados 4 · Más baja 4 · Promedio 6,5 (PseInt: `6.5`) |
| 6, 6, 6, 6, 6, 6 | Aprobados 6 · Más baja 6 · Promedio 6 |
| 3, 3, 3, 3, 3, 3 | Aprobados 0 · Más baja 3 · Promedio 3 |
| 10 ×6 | Aprobados 6 · Más baja 10 · Promedio 10 |
| 0 ×6 | Aprobados 0 · Más baja 0 · Promedio 0 |
| 10, 10, 10, 10, 10, 2 (mínima en la última) | Aprobados 5 · Más baja 2 · Promedio 8,67 |

Los tres primeros casos coinciden con los valores esperados del enunciado.

## Diagrama

Espejo de `algoritmo.psc`: mismos nombres, textos y orden. No se dibuja el aviso "Ingrese la nota..." (va justo antes de un `Leer`). El `Para` tiene su hexágono y su `Fin (Para)`; la lectura y las dos decisiones están dentro del ciclo, y la división y las salidas, después.

## Notas

- Los resultados se muestran con tres `Escribir` (uno por dato).
- Como el enunciado fija notas de 0 a 10, no se valida el rango.
