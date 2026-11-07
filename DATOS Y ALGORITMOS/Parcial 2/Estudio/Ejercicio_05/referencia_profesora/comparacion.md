# Comparación con la profesora — Parcial 2 / Estudio / Ejercicio_05 (arreglos, subproceso, función)

Nuestro: `../diagrama_principal.png`, `../diagrama_ordenar.png`, `../diagrama_buscar.png`. Imágenes: `lado_a_lado.png`, `comparacion_formas.png`. Solo se comparó; no se modificó nada.

Referencias usadas (miradas página por página):
- Arreglos, pág. 8 (único flujograma con arreglos)
- AyD-diagramacionlogica-parte2, pág. 28 (Para decreciente `,-1`) y pág. 42 (MQ con `and`)
- Revisadas sin diagrama de flujo: Arreglos pág. 20, 31 (tablas y texto); pág. 60 y 62 (diagramas de Chapin); Práctica arreglos y Ordenamiento y búsqueda (solo enunciados); parte1 pág. 13 (intercambio: solo texto).

| Construcción | Profesora | Nuestro | Coincide | Nota |
|---|---|---|---|---|
| Para sobre arreglo + entrada | `para i <- 1, 5, 1` / `leer a_i` / `fin (para)` (Arreglos p.8) | `Para i ← 1 , 10 , 1` / `ap[i]` / `Fin (Para)` | PARCIAL | Misma estructura. Ella escribe `leer a_i` con subíndice y `<-`, en gris; en las diapositivas de parte2 la entrada lleva solo la variable. Nosotros: solo `ap[i]` y `←`. |
| Para decreciente | `Para i ← N , 1 ,-1` (parte2 p.28) | `Para j ← 9 , i , -1` | SÍ | Falta el espacio tras la coma. El límite `i` es una variable, como `N`. |
| Para anidado | Sin diagrama de flujo (solo Chapin, Arreglos p.60 y 62) | Dos hexágonos y dos `Fin (Para)` anidados | SIN REFERENCIA | |
| Intercambio con `aux` en un rectángulo | Sin diagrama (parte1 p.13 es texto). Varias asignaciones juntas en un rectángulo: parte2 p.42 | `aux ← ap[j]` / `ap[j] ← ap[j+1]` / `ap[j+1] ← aux` en uno | PARCIAL | Se apoya solo en la regla general de agrupar asignaciones. No hay diagrama de un swap. |
| Decisión `ap[j] > ap[j+1]` | Rombo con `Sí` derecha / `No` izquierda (parte1 p.26) | Igual | SÍ | Para el rombo en sí. La burbuja no tiene diagrama. |
| MQ con `and` | `MQ (N mod 2 =0) and (N>20)` (parte2 p.42) | `MQ i <= 10 and ap[i] <> k` | PARCIAL | Mismo `and`. Ella parentetiza cada operando y escribe `!=`; nosotros `<>`. |
| Fin (MQ) y Fin (Para) | Cápsula, sin flecha de retorno | Igual | SÍ | Cápsula más ovalada. |
| Búsqueda secuencial, salida "no está" | Sin diagrama (Arreglos p.31 es texto; p.33 es pseudocódigo) | `i <= 10` → mensajes + `posicion ← i` / `posicion ← 0` | SIN REFERENCIA | |
| Display | Cuña con arco | `shape=display` | PARCIAL | Ver Ejercicio_01. Arreglos p.8 usa la figura Documento para `sum` (variante de ella). |
| **Subproceso** | No hay diagrama en ningún material | Círculo con el nombre (`OrdenarApellidos`) + círculo `Fin` | SIN REFERENCIA | SUPUESTO nuestro. |
| **Función** | No hay diagrama en ningún material | Círculo con el nombre (`BuscarAlumno`) + círculo `Fin`; retorno por `posicion ← ...` | SIN REFERENCIA | SUPUESTO nuestro. |
| **Llamadas** `OrdenarApellidos(ap)` / `posicion ← BuscarAlumno(ap)` | No hay | Rectángulo de proceso | SIN REFERENCIA | SUPUESTO nuestro. |
| Inicio / Fin del principal | Círculo (ovalado y en minúscula en Arreglos p.8) | Círculo `Inicio` / `Fin` | SÍ | |

Resumen: las partes que ella dibuja sí coinciden (Para, MQ, rombo, cápsulas, entrada, Display). Todo lo propio de Ejercicio_05, es decir subproceso, función, llamadas, burbuja y búsqueda en diagrama, no tiene referencia en los materiales de la cátedra.
