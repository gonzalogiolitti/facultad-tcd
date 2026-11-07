# Informe de comparación con los símbolos de la profesora — PILOTO (4 ejercicios)

Alcance: solo se compararon 4 ejercicios. El lote completo no se corrió. No se modificó ningún diagrama ni `.psc`.
Cada ejercicio tiene su carpeta `referencia_profesora/` con los recortes de la profesora, `lado_a_lado.png`, `comparacion_formas.png` y `comparacion.md`.

## 1. Ejercicios y referencia usada

| Ejercicio | Referencia usada (archivo, página) | Coincide | Diferencias |
|---|---|---|---|
| Practica/Parcial_1/Ejercicio_01 (Para) | AyD-diagramacionlogica-parte2 p.14, 16, 28, 36 | 7 SÍ / 4 PARCIAL / 1 SIN REF | Proporción del hexágono, de la cápsula y del Display. Dos Display seguidas (ella a veces junta dos salidas en una). |
| Practica/Parcial_1/Ejercicio_02 (Mientras) | parte2 p.39, 40, 42, 45 | 6 SÍ / 3 PARCIAL / 2 SIN REF | Hexágono MQ (reparto del texto y `<>` frente a `!=`), cápsula, Display. Sin referencia para la llamada a función dentro del proceso ni para la condición compuesta. |
| Practica/1_Practica_1/Ejercicio_08 (decisión anidada) | parte1 p.26 y 35; Práctica 1 p.8 (mismo enunciado) | 6 SÍ / 1 PARCIAL / 1 NO | `Y` en vez de `and`. Display. |
| Parcial 2/Estudio/Ejercicio_05 (arreglos, subproceso, función) | Arreglos p.8; parte2 p.28 y 42 | 4 SÍ / 4 PARCIAL / 5 SIN REF | Notación `ap[i]` frente a `a_i`; `<>`. Subproceso, función, llamadas, burbuja y búsqueda sin diagrama de referencia. |

**Conteo de coincidencias** (44 construcciones comparadas): SÍ 23 · PARCIAL 12 · NO 1 · SIN REFERENCIA 8.

## 2. Diferencias agrupadas por construcción

| Construcción | Diferencia | Dónde |
|---|---|---|
| Display | Nuestro `shape=display` tiene tope y base planos y esquinas derechas redondeadas. La suya es una cuña con lados rectos y arco a la derecha. En la suya el texto toca el arco y se corta; en la nuestra entra siempre. | Los 4 |
| Hexágono Para / MQ | Misma figura. El nuestro es más alto y menos alargado. En el MQ ella separa "MQ" y la condición. | Ej01, Ej02, Ej05 |
| Cápsula Fin (Para) / Fin (MQ) | Misma idea, sin flecha de retorno en ambas. La nuestra es más ovalada. | Ej01, Ej02, Ej05 |
| Entrada | Misma orientación (el lado superior sube hacia la derecha). La nuestra tiene menos pendiente. Ella escribe `leer a_i` solo en Arreglos p.8. | Todos |
| Condición compuesta | Ella escribe `and`. Nosotros `Y` en Ej08. En Ej05, `and` con `<>`. | Ej08, Ej05 |
| Operador distinto | Ella escribe `!=`; nosotros `<>`. | Ej02, Ej05 |
| Salidas seguidas | Dos Display nuestras frente a una Display con dos líneas en parte2 p.36 y 45. Ella usa también una Display por salida (p.16, 28). | Ej01 |
| Unión de ramas | En parte2 p.36 la unión es una línea sin punta; en nuestro diagrama entra con una punta de flecha. | Ej01 |
| Arreglos | Ella `a_i` con subíndice y `<-`; nosotros `ap[i]` y `←`. | Ej05 |
| Subproceso, función, llamadas | Sin diagrama en ningún material de la cátedra. Nuestra representación (círculo con el nombre, círculo `Fin`, rectángulo de proceso) es un SUPUESTO. | Ej05 |

## 3. Variantes de la propia profesora

La forma mayoritaria es la de las diapositivas de diagramación lógica (parte1 y parte2). Lo demás es variante de ella.

| Variante de ella | Archivo y página | Forma mayoritaria |
|---|---|---|
| Sí a la izquierda y No a la derecha | Práctica 1 p.8 | `Sí` a la derecha y `No` a la izquierda (parte1 p.18–37) |
| `si` a la izquierda y `no` abajo | Práctica 1 p.7 | Igual que la anterior |
| `si` / `no` sin tilde y en minúscula | Práctica 1 p.7, 8, 12 | `Sí` / `No` con tilde |
| `^` en vez de `and` | Práctica 1 p.8 | `and` (parte1 p.35, 37; parte2 p.42) |
| Procesos con esquinas redondeadas | Práctica 1 p.3 (ej.2) y p.12 | Rectángulo sin redondeo (parte1 p.4, 7; parte2 p.10, 14, 22) |
| Óvalos en vez de círculos para Inicio/Fin | Práctica 1 p.7, 8, 12; Arreglos p.8 | Círculo (parte1 p.3–5, 7) |
| `Leer` escrito dentro de la entrada | Práctica 1 p.3 (ej.2), 8, 12; Arreglos p.8 (`leer a_i`) | Solo las variables (parte1 p.4, 7, 12, 21, 23) |
| Figura Documento para la salida, con gris, `<-` y `a_i` | Arreglos p.8 | Display (cuña con arco) |
| Asignación dentro de la forma de entrada (`R=random(100)+1`) | parte2 p.26 | La asignación en rectángulo (Clase 2) |
| Entrada con esquinas inferiores redondeadas | Práctica 1 p.7, 8, 12 | Trapecio sin redondeo (parte1, parte2) |

## 4. Lo que NO se pudo verificar

- Subprocesos, funciones y llamadas: no hay ningún diagrama en parte1, parte2, Arreglos, Práctica 1, PSEINT, Práctica arreglos ni Ordenamiento y búsqueda. Quedó como SIN REFERENCIA y SUPUESTO.
- Burbuja, búsqueda secuencial e intercambio con `aux` en diagrama de flujo: solo hay texto, tablas y Chapin (Arreglos p.20, 31, 60, 62; parte1 p.13).
- Solo se miraron las páginas citadas: no se revisaron todas las diapositivas de AyD-intro ni la Práctica 1 completa.
- Las ampliaciones de `comparacion_formas.png` parten de imágenes de baja resolución; el borde exacto de las figuras de ella es aproximado.
- No se pudo comparar el aspecto de las figuras en pantalla, solo sus imágenes exportadas.
- En Ej08, `lado_a_lado.png` queda chico porque el PNG es muy ancho; el original sí se lee.

## 5. Ajuste de notación en el generador (aplicado después del piloto)

`scripts/psc2drawio.py` dibuja las condiciones, asignaciones y cabecera del Para con la notación de las diapositivas (`<>`→`!=`, `Y`→`and`, `O`→`or`, `NO`→`not`, `MOD`→`mod`, `raiz`→`sqrt`, `sen`→`sin`, `azar`→`random`). Con `and`/`or`, cada comparación va entre paréntesis, como en parte2 p.42 y parte1 p.37. El `.psc` no cambia, y lo que no tiene equivalente (`Mayusculas`, `ConvertirANumero`) queda igual.

Se regeneraron 21 diagramas; los originales están en `Contenido/Originales/_respaldo_diagramas_2/`. **Las tablas de las secciones 1 y 2 y los `comparacion.md` del piloto describen los diagramas antes de ese cambio**: en ellos, `Y` (Ej08) y `<>` (Ej02, Ej05) ya no aplican.
