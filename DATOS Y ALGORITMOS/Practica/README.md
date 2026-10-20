# Práctica – Datos y Algoritmos

Espacio de trabajo para la resolución de ejercicios de la materia. Los ejercicios se agrupan
por tema (una carpeta por tema, con subcarpetas por "Parte" cuando el apunte correspondiente
está dividido en varias entregas). Cada ejercicio vive en su propia carpeta `Ejercicio_NN/` con:

- `enunciado.md` — enunciado tal como fue provisto.
- `resolucion.md` — análisis, resolución paso a paso, explicación y conclusión.
- `diagrama.drawio` — diagrama de flujo con la convención visual de la cátedra (fondo negro, líneas y texto blancos).
- `algoritmo.psc` — pseudocódigo PseInt, ejecutado y verificado (solo en las carpetas nuevas, 1 y 2).

## Temas

| Tema | Fuente | Ejercicios | Contenido |
|---|---|---|---|
| [Diagramación Lógica](./Diagramacion%20Logica/README.md) | Apunte `AyD-diagramacionlogica-parte1.md` | 14 | Estructuras secuenciales, de decisión (simple, doble, anidada, independiente) y operadores lógicos/matemáticos. Pseudocódigo con sintaxis propia (no PseInt) |
| [1_Practica_1](./1_Practica_1/README.md) | `Contenido/Actividades/Práctica 1.md` | 12 | Estructuras **secuenciales** (ej. 1–5) y de **decisión** simple, doble y anidada (ej. 6–12): promedios, IVA, día de la semana, control de calidad, máximo de seis números, bonificaciones |
| [2_Repeticion_Para_Mientras](./2_Repeticion_Para_Mientras/README.md) | `Contenido/Actividades/ejercicios repeticion para y mq enunciados.md` | 14 | Estructuras de **repetición**: `Para` (ej. 1–6, 8), `Mientras` (ej. 9–14), acumuladores, contadores, máximos y centinelas |

## Convenciones

- Los diagramas siguen la convención de la cátedra: círculo (inicio/fin), paralelogramo (entrada), triángulo (salida), rectángulo (proceso) y rombo con "Sí"/"No" (decisión).
- Las carpetas `1_Practica_1` y `2_Repeticion_Para_Mientras` usan sintaxis PseInt real (`Algoritmo`/`FinAlgoritmo`, `Leer`, `Escribir`, `SiNo`) y cada `algoritmo.psc` coincide con el código de su `resolucion.md`.
- Los enunciados ambiguos se resolvieron con la interpretación más razonable, anotada en la sección de análisis de cada `resolucion.md`.
