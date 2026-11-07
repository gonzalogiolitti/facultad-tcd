# Ejercicio 05 — Pregunta 1 (apellidos: ordenar y buscar)

## Enunciado

Ver [enunciado.md](enunciado.md): cargar 10 apellidos, mostrarlos, ordenarlos con burbuja (subproceso `OrdenarApellidos`) y buscar uno con búsqueda secuencial (función `BuscarAlumno`, devuelve la posición).

## Resolución

- Código corregido: [algoritmo.psc](algoritmo.psc) (el original, intacto, está en [algoritmo_original.psc](algoritmo_original.psc)).
- Diagramas (uno por módulo, espejo del `.psc`):
  - [diagrama_principal.drawio](diagrama_principal.drawio) / `.png`
  - [diagrama_ordenar.drawio](diagrama_ordenar.drawio) / `.png` (`OrdenarApellidos`)
  - [diagrama_buscar.drawio](diagrama_buscar.drawio) / `.png` (`BuscarAlumno`)

## Explicación paso a paso

1. **Principal.** Un `Para i ← 1 , 10 , 1` lee `ap[i]` (se conoce la cantidad: 10). Otro `Para` muestra la lista. Después llama a `OrdenarApellidos(ap)` y a `posicion ← BuscarAlumno(ap)`.
2. **OrdenarApellidos (burbuja).** `Para i ← 1 , 9 , 1` (una pasada menos que la longitud, para no leer `ap[11]`). Por dentro, `Para j ← 9 , i , -1` compara `ap[j]` con `ap[j+1]`; si están al revés, los intercambia con `aux` (los tres pasos van en un solo rectángulo). Al final muestra el arreglo ordenado.
3. **BuscarAlumno (secuencial).** Lee `k`, hace `i ← 1` y avanza con `MQ i <= 10 and ap[i] <> k`. Al salir, si `i <= 10` encontró `k` en `i`; si no, `i` llegó a 11 y no está. En cada rama muestra el mensaje y asigna el valor de retorno: `posicion ← i` o `posicion ← 0`. Como avanza de menor a mayor y corta en la primera coincidencia, con apellidos repetidos devuelve la **primera aparición**.
4. **Por qué no lee `ap[11]`.** PseInt evalúa el `Y` en cortocircuito: si `i <= 10` es falso, no mira `ap[i]`. Probado: con el orden invertido (`ap[i] <> k Y i <= 10`) y un apellido ausente da `ERROR 303: Subindice (11) fuera de rango (1...10)`. **No hace falta** una variable `encontrado`.

## Pruebas ejecutadas (algoritmo.psc)

Apellidos: Rojas, Perez, Gomez, Diaz, Lopez, Acosta, Vega, Suarez, Mora, Castro. Ordenados: Acosta, Castro, Diaz, Gomez, Lopez, Mora, Perez, Rojas, Suarez, Vega.

| Buscado | Salida |
|---|---|
| Perez (está) | El alumno con apellido: Perez está en la posición: 7 |
| Zapata (no está) | El alumno con apellido: Zapata no está registrado en este curso. |
| Acosta (primero) | ... está en la posición: 1 |
| Vega (último) | ... está en la posición: 10 |
| Gomez (repetido, 2 veces) | ... está en la posición: 4 (la primera) |

## Qué cambié respecto del original

Se confirmaron dos de las tres sospechas; la tercera se descartó como error.

1. `Definir apellidos Como Caracter` → `Definir ap Como Caracter`. **Confirmada:** `apellidos` no se usaba; el arreglo es `ap`.
2. `Dimensionar ap[10]` → `Dimension ap[10]`. **Descartada como error:** PseInt acepta `Dimensionar` (el original corre sin errores). Lo cambié solo para usar la palabra que usa la cátedra (Arreglos.pdf, `Dimension a[5]`).
3. `BuscarAlumno` no asignaba `posicion`. **Confirmada** (probado: tras la llamada `posicion` valía 0 aun con el apellido en la posición 7). Agregué `posicion <- i` en el `Si` y `posicion <- 0` en el `SiNo`.

Lo demás (burbuja, `Para` hasta 9, guarda del `Mientras`, mensajes) quedó igual.

## Notas sobre los diagramas

- **Condición:** el `.psc` usa `Y`; el diagrama dice `and` (como las diapositivas) y sin los paréntesis externos: `MQ i <= 10 and ap[i] <> k`.
- **No se dibujan** los avisos `"Ingrese el apellido del alumno: "` y `"Ingrese el apellido a buscar: "` (van justo antes de un `Leer`). Tampoco `Definir` ni `Dimension`.
- **SUPUESTO — subprocesos y funciones:** no encontré en la convención de la cátedra (CONVENCION_CATEDRA.md ni en el texto de los PDF Arreglos, Práctica arreglos, Ordenamiento y búsqueda y PSEINT) cómo se dibuja un subproceso o una función. Usé una representación simple: **círculo con el nombre del módulo al inicio**, **círculo `Fin`** y las llamadas como **rectángulo de proceso** en el principal. El valor de retorno de `BuscarAlumno` se ve en `posicion ← i` / `posicion ← 0`. Revisé el texto, no cada imagen de las diapositivas: si la cátedra lo dibuja distinto, hay que ajustarlo.
- En el principal, las dos llamadas van juntas en un rectángulo (convención: acciones consecutivas de proceso en una sola figura).
