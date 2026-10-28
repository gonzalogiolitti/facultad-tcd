# LEEME — Entrega Final, Bases de Datos 2026 (Gonzalo Giolitti)

## Estructura

```
Entrega_Final/
├── LEEME.md                      este archivo
├── verificar_todo.sh             corre HE4 y HE5 contra MariaDB, OK/ERROR por script
├── .venv/                        entorno Python local (python-docx, reportlab)
├── _entrada/                     consignas y material fuente que me pasaste (solo lectura)
├── HE1_Arquitecturas/            PDF completo, copiado tal cual
├── HE2_Gimnasio/                 DER (.erdplus) + resolución + validación + DOCX/PDF
├── HE3_Concesionaria/            DER + MR (PNG) + resolución + SQL + DOCX/PDF
├── HE4_Bolsa/                    DER + MR (PNG) + SQL + Manual + DOCX/PDF
└── HE5_TPI_Taller/                documento + DER (PNG) + SQL final + avances 1/2/3 + DOCX/PDF
```

## Estado por hito

### HE1 — Arquitecturas de las BBDD — ✔ completo
PDF de 7 páginas ya terminado, copiado sin tocar.

### HE2 — Gimnasio — ✔ completo
Cardinalidades corregidas (`dicta`, `tiene`), `edad` derivada +
`fecha_nacimiento` en ALUMNO y PROFESOR, `telefono` sin multivaluado, sin
`(O)(O)` duplicado. El primer PNG que habías dejado era una versión vieja
(PK de ACTIVIDAD = `id_actividad` en vez de `nombre`, sin `edad`) — lo
descarté y quedó guardado aparte como
`UGR-BBDD26-HE2_Giolitti_DER.NO_USAR_version_vieja.png` (lo podés borrar
cuando quieras). **El segundo PNG que dejaste sí coincide** con el
`.erdplus` corregido — lo comparé punto por punto (PK de ACTIVIDAD =
`nombre`, `edad` derivada en las dos entidades, `(O)` una sola vez,
cardinalidades `dicta`/`tiene` correctas) y ya está insertado en el
documento y el PDF.

### HE3 — Concesionaria — ✔ completo
Sin cambios esta vuelta. DER y MR en PNG ya insertados, SQL probado.

### HE4 — Bolsa de valores — ✔ completo
Sin cambios esta vuelta. DER y MR en PNG ya insertados, `.sql` probado
(`verificar_todo.sh` → OK).

### HE5 — TPI (taller mecánico) — ✔ completo, última pasada terminada
- **PNG del DER**: lo comparé contra el `.erdplus` corregido (cardinalidades
  de `tiene`/`genera`, `total_orden` derivado, `costo_aplicado` en
  `incluye`, `precio_aplicado` en `usa`) — coincide en todo, lo inserté.
- **Texto ajustado**: "en cada orden trabajan uno o más técnicos" →
  "a cada orden se le asignan uno o más técnicos", en el documento final y
  en el Avance #1 (el Avance #2 no tenía esa frase exacta, tenía otra
  redacción distinta que no hacía falta tocar).
- **Tabla de cardinalidades**: la sección 2 del documento tiene la tabla
  de 10 filas (relación | entidad | (mín,máx) | justificación
  explícita/inferida), más la nota de por qué `asigna`/`incluye`/`usa` son
  relaciones N:M aparte y no atributos de ORDEN_TRABAJO.
- **Documento reordenado y recortado** (última pasada):
  - Orden final: encabezado/título → Alumno/Materia/Caso (como 3 líneas
    separadas, no una sola corrida) → 1. Situación → 2. Diagrama (imagen +
    tabla) → 3. Modelo Relacional → 4. Procedimiento/trigger/perfiles →
    5. Cobertura por unidad.
  - La imagen del DER ya no va pegada al título: está dentro de la
    sección 2, sola en una página horizontal (landscape), recortada al
    contenido sin márgenes en blanco y al tamaño máximo que entra en esa
    página.
  - Corregido un bug real del generador de documentos: cada renglón del
    `.md` se estaba convirtiendo en un párrafo de Word separado (con
    espacio extra entre cada uno), en vez de unirse en párrafos normales
    con ajuste de línea automático. Ahora los renglones consecutivos de un
    mismo párrafo se unen en uno solo.
  - Sacada la sección "Entrega" completa (link de la encuesta, referencias
    a `avances/` y nombres de archivo) y la referencia a
    `avances/Avance2/` en la sección 3 (quedó solo "Avance #2", sin ruta).
  - Tildes corregidas en título, subtítulo y encabezado de página.
  - Resultado: **4 páginas**, revisadas una por una convertidas a imagen.
- `.erdplus`: se borró el nodo `Label` suelto con el texto viejo de
  "TPI ADELANTO..." (traía la regla de cardinalidades desactualizada). No
  se tocó nada más del diagrama — cardinalidades re-verificadas, iguales
  a antes (ver tabla abajo).
- `.sql`: sacados los comentarios de las líneas 4–5 ("Version final...") y
  cambiado "rompería" por "rompe" (solo ASCII). Vuelto a correr completo en
  MariaDB: **mismos conteos finales que siempre** (cliente=5, tecnico=4,
  servicio=6, repuesto=7, vehiculo=6, orden_trabajo=8, orden_tecnico=9,
  orden_servicio=7, orden_repuesto=10, auditoria_stock=1,
  auditoria_servicio_eliminado=1).

**Cardinalidades verificadas en `UGR-BBDD26-HE5_Giolitti_DER.erdplus` (sin cambios):**
```
tiene     CLIENTE          Mandatory  One   ||
tiene     VEHICULO         Optional   Many  o<
genera    VEHICULO         Mandatory  One   ||
genera    ORDEN_TRABAJO    Optional   Many  o<
asigna    ORDEN_TRABAJO    Optional   Many  o<
asigna    TECNICO          Optional   Many  o<
incluye   ORDEN_TRABAJO    Optional   Many  o<
incluye   SERVICIO         Optional   Many  o<
usa       ORDEN_TRABAJO    Optional   Many  o<
usa       REPUESTO         Optional   Many  o<
```

## Verificación de SQL (`verificar_todo.sh`, corrida de esta vuelta)

```
=== HE4 - Bolsa de valores ===
OK - UGR-BBDD26-HE4_Giolitti_SQL.sql

=== HE5 - Taller mecanico (TPI) ===
OK - UGR-BBDD26-HE5_Giolitti_SQL.sql
```

Sin errores en ninguno de los dos (los `GRANT`/`REVOKE`/`SHOW GRANTS` de
HE5 también corrieron bien, ya con `GRANT OPTION` activo).

## DOCX y PDF (HE2–HE5)

Regenerados los 4 con el estilo uniforme de siempre. Convertí las 25
páginas resultantes a imagen y las revisé una por una: sin texto cortado,
sin tablas partidas, encabezado y pie de página uniformes en las 4,
imágenes del DER visibles en HE3/HE4/HE5, recuadro de placeholder en HE2
(a propósito, por el PNG inválido).

## PNG — los 4 ya están insertados

| Hito | Estado |
|---|---|
| HE2 | ✔ insertado (segunda versión que dejaste, corregida) |
| HE3 | ✔ insertado |
| HE4 | ✔ insertado |
| HE5 | ✔ insertado |

## Pasos manuales que te quedan

1. Ejecutar los `.sql` en DBeaver con **Alt+X** (script completo, sin
   selección). Si falla algún bloque con `DELIMITER $$`, seleccionalo
   entero y usá **Ctrl+Enter**.
2. Revisar los PDF finales vos también (yo los miré convertidos a imagen,
   pero no está de más una pasada tuya antes de entregar).
3. Podés borrar `UGR-BBDD26-HE2_Giolitti_DER.NO_USAR_version_vieja.png` de
   `HE2_Gimnasio/` cuando quieras — ya no se usa para nada.

## Encuesta del profesor (HE5, opcional)
https://forms.gle/VYPYz9Uqki6jr2yRA
