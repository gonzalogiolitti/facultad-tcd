# Comparación con la profesora — 1_Practica_1/Ejercicio_08 (decisión anidada)

Nuestro: `../diagrama.png`. Imágenes: `lado_a_lado.png`, `comparacion_formas.png`. Solo se comparó; no se modificó nada.

Referencias usadas (miradas página por página):
- AyD-diagramacionlogica-parte1, pág. 26 (Problema 6: anidada) y pág. 35 (Problema 8: condición con `and`)
- Actividades/Práctica 1, pág. 8: es **el mismo enunciado** (piezas A y B, 163–167 y 177–183). Es una variante de ella: `si` a la izquierda y `^`.

| Construcción | Profesora | Nuestro | Coincide | Nota |
|---|---|---|---|---|
| Inicio / Fin | Círculo (parte1) | Círculo | SÍ | En Práctica 1 p.8 son óvalos (variante de ella). |
| Entrada | Teclado con solo las variables: `A,B` (p.26) | `tipo,medida` | SÍ | En Práctica 1 p.8 dice `Leer p, m` (variante de ella). |
| Rombo, `Sí` derecha / `No` izquierda | Sí (p.26, 35) | Sí | SÍ | En Práctica 1 p.8 es al revés (`si` izquierda / `no` derecha). |
| Decisión anidada | Segundo rombo en la rama `No` del primero (p.26) | `tipo = "A"` → `No` → `tipo = "B"` | SÍ | Misma estructura. La solución de ella en Práctica 1 p.8 anida en ambas ramas y no valida el tipo; la nuestra agrega "Tipo de pieza inválido". |
| Condición compuesta | `(N > 0)and(N < 13)` con `and` (p.35); `m>=163 ^ m<=167` (Práctica 1) | `medida >= 163 Y medida <= 167` | NO | Usamos `Y`, que no aparece en sus figuras: ella usa `and` (diapositivas) o `^` (Práctica 1). Este diagrama es de antes del cambio a `and`. |
| Ramas que se juntan | Con líneas, sin círculo (p.26) | Con líneas, sin círculo | SÍ | Nuestras ramas entran a `Fin` por un bus largo; en p.26 se unen por tramos. |
| Display | Cuña con arco | `shape=display` | PARCIAL | Ver Ejercicio_01. Los textos largos entran. |
| Etiquetas | `Sí` / `No` con tilde (parte1) | `Sí` / `No` | SÍ | Práctica 1: `si` / `no` sin tilde (variante de ella). |

Resumen: coincide en símbolos y estructura. La única diferencia real es `Y` en lugar de `and`.
Nota de legibilidad: el PNG es muy ancho (2608 px) y en `lado_a_lado.png` queda pequeño. El original se lee bien.
