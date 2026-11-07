# LEEME — Entrega Final, Bases de Datos 2026 (Gonzalo Giolitti)

Entrega del recuperatorio de HE4 y del Trabajo Práctico Integrador
(taller mecánico), con correcciones del profesor. Vencimiento: martes
10 de noviembre, 12 h.

## Estructura final

```
Entrega_Final/
├── LEEME.md
├── verificar_todo.sh                        corre HE4 y HE5 contra MariaDB
├── .tools/                                  generador de DOCX/PDF (uso interno)
├── .venv/                                   entorno Python local
├── _entrada/                                consignas y material fuente (solo lectura)
├── HE1_Arquitecturas/                       PDF completo (sin cambios)
├── HE2_Gimnasio/
│   ├── UGR-BBDD26-HE2_Giolitti_*            DER, resolución, validación, DOCX/PDF
│   └── Avance1_Integrador/                  Avance #1 del TPI (taller), PDF+DOCX
├── HE3_Concesionaria/
│   ├── UGR-BBDD26-HE3_Giolitti_*            DER, MR, resolución, SQL, DOCX/PDF
│   └── Avance2_Integrador/                  Avance #2 del TPI (taller), PDF+DOCX
├── HE4_Bolsa/                               ← RECUPERATORIO
│   ├── UGR-BBDD26-HE4_Giolitti_*            DER, MR, SQL (con CHECK), Manual, DOCX/PDF
│   ├── Recomendaciones_Profesor.md          restricciones de integridad (CHECK)
│   └── Avance3_Integrador/                  Avance #3 del TPI (taller), PDF+DOCX+.sql
└── HE5_TPI_Taller/                          ← INTEGRADOR
    ├── UGR-BBDD26-HE5_Giolitti_*            documento, DER, MR, SQL final, DOCX/PDF
    ├── Recomendaciones_Profesor.md          stock inicial / descuento una sola vez
    ├── Cobertura_TPI.md
    ├── avances/                             Avance #1/#2/#3 viejos (ver nota abajo)
    └── Entrega_Avances/                     copia de los 3 PDF de avance + el .sql
```

## A) HE4 — Restricciones de integridad (CHECK) — ✔ hecho

El profesor recomendó agregar `CHECK` (antes los habíamos sacado por no
verse en clase). Agregué 5, con nombre, sin `ENGINE` ni `CHARSET`:
`chk_movimiento_tipo`, `chk_movimiento_cantidad`, `chk_portafolio_cantidad`,
`chk_activo_precio`, `chk_cuenta_saldo`.

- Las semillas (incluidos los activos 13/14) siguen entrando sin error; los
  `COUNT(*)` finales dan lo mismo de siempre.
- Agregué la sección "Pruebas de restricciones" al final del `.sql`, con 2
  `INSERT` comentados que tienen que fallar. Los probé aparte contra
  MariaDB: los dos los rechaza (`chk_movimiento_cantidad` y
  `chk_movimiento_tipo`).
- Manual: sección nueva "Restricciones de integridad", DOCX/PDF
  regenerados y revisados página por página (4 páginas).
- Detalle completo en `HE4_Bolsa/Recomendaciones_Profesor.md`.

**Bug real encontrado y corregido en el generador de documentos** (afectaba
HE2, HE3, HE4 y potencialmente cualquier lista): los renglones de
continuación de una viñeta o de un ítem numerado se estaban separando en un
párrafo aparte en vez de seguir pegados a su viñeta/número. También una
itálica de un asterisco (`*texto*`) se comía por error el `*` de
`SELECT * FROM ...` cuando había dos code-spans en el mismo párrafo.
Corregidos los dos, y por eso regeneré y revisé de nuevo HE2, HE3, HE4 y
HE5 completos (ver más abajo).

## B) Integrador — Stock (descuento doble) — ✔ hecho

El profesor preguntó si el stock inicial (que ya contemplaba lo usado) no
se descontaría dos veces con el trigger. Tenía razón en sospecharlo: en la
versión anterior el trigger se creaba **después** de las semillas, así que
auditaba de menos. Reordené el script: ahora los triggers se crean
**antes** de las semillas, y `repuesto.stock` se carga con el stock
**inicial** real (31, 54, 14, 6, 9, 48, 7). Agregué al final una consulta
de control (stock actual + usado = stock inicial).

Corrí el script completo en MariaDB y confirmé:

| Tabla | Filas |
|---|---|
| cliente | 5 |
| tecnico | 4 |
| servicio | 6 |
| repuesto | 7 |
| vehiculo | 6 |
| orden_trabajo | 8 |
| orden_tecnico | 9 |
| orden_servicio | 7 |
| orden_repuesto | 10 |
| auditoria_stock | **10** (antes daba 1) |
| auditoria_servicio_eliminado | 1 |

Control de stock: los 7 repuestos reconstruyen exacto 31, 54, 14, 6, 9, 48, 7.

Documento de HE5 (sección 4): agregadas las 2 líneas sobre stock inicial y
la consulta de control. Sigue en **5 páginas**, revisado completo.

Los 7 `.sql` de `avances/Avance3/` **no los actualicé uno por uno** —
dejé una nota (`avances/Avance3/NOTA_version_reemplazada.md`) explicando
que quedaron reemplazados por el `.sql` final, porque mantener dos
versiones completas del mismo sistema en paralelo es más trabajo y más
riesgo de desincronización. Decime si para la entrega te hace falta
igual que los separe en 7 archivos a partir del final.

Detalle completo en `HE5_TPI_Taller/Recomendaciones_Profesor.md`.

## C) Avances del Integrador recuperados — ✔ hecho

No existía ninguno en el formato y la carpeta que pedías (los de
`HE5_TPI_Taller/avances/` son la versión vieja, en `.md` sin imágenes).
Armé los 3 nuevos, con el mismo encabezado/estilo que el resto, usando el
DER y MR finales (`UGR-BBDD26-HE5_Giolitti_DER.png` / `_MR.png`) para que
diseño e implementación coincidan:

- **Avance #1** → `HE2_Gimnasio/Avance1_Integrador/` — situación coloquial
  + DER (imagen, página horizontal). 3 páginas.
- **Avance #2** → `HE3_Concesionaria/Avance2_Integrador/` — problemática
  ajustada, DER + MR (imágenes) con PK/FK, verificación 1FN/2FN/3FN tabla
  por tabla, y la nota de que ERDPlus llama ASIGNA/INCLUYE/USA a lo que en
  el SQL es orden_tecnico/orden_servicio/orden_repuesto. 4 páginas.
- **Avance #3** → `HE4_Bolsa/Avance3_Integrador/` — el `.sql` final
  copiado al lado, más una explicación de consultas/procedimientos/
  triggers/vistas/permisos/auditoría en **1 página**.

Los 3 PDF (y el `.sql` del Avance #3) están además reunidos en
`HE5_TPI_Taller/Entrega_Avances/` para subir fácil.

## D) Verificación

**`verificar_todo.sh`:**
```
=== HE4 - Bolsa de valores ===
OK - UGR-BBDD26-HE4_Giolitti_SQL.sql

=== HE5 - Taller mecanico (TPI) ===
OK - UGR-BBDD26-HE5_Giolitti_SQL.sql
```
Sin errores (los `GRANT`/`REVOKE`/`SHOW GRANTS` de HE5 también corrieron
bien, con `GRANT OPTION` activo).

**Consistencia cruzada (MR del documento = tablas del `.sql` = atributos
del `.erdplus`):** comparé columna por columna en HE4 y HE5 — **sin
diferencias** en ninguno de los dos.

**Revisión visual:** convertí a imagen y miré página por página los 4
documentos principales (HE2, HE3, HE4, HE5) y los 3 Avances nuevos — 7
documentos en total. Sin texto cortado, sin tablas partidas, sin
páginas casi vacías.

## E) Pendiente de tu parte

1. Ejecutar los `.sql` en DBeaver con **Alt+X** (completo, sin selección).
   Si falla un bloque `DELIMITER $$`, seleccionalo entero y usá
   **Ctrl+Enter**.
2. Decidir si usás la nota de "versión reemplazada" para los 7 `.sql` del
   Avance #3 viejo, o si preferís que los separe desde el `.sql` final.
3. Una revisión tuya de los PDF antes de subirlos.

**Nota sobre "las tres `Recomendaciones_Profesor.md`":** solo generé 2
(HE4 y HE5-Integrador), porque las tareas A y B solo pedían una cada una.
No encontré en el pedido una tercera recomendación del profesor para
anotar — si hay una que no quedó registrada en este documento, decime
cuál es y la agrego.

## Qué subir, por tarea de la plataforma

**1. HE4 (recuperatorio):**
- `HE4_Bolsa/UGR-BBDD26-HE4_Giolitti_Manual.pdf` (documento)
- `HE4_Bolsa/UGR-BBDD26-HE4_Giolitti_SQL.sql`
- `HE4_Bolsa/UGR-BBDD26-HE4_Giolitti_DER.erdplus` y `_DER.png`
- `HE4_Bolsa/UGR-BBDD26-HE4_Giolitti_MR.png`
- `HE4_Bolsa/UGR-BBDD26-HE4_Giolitti_Manual.docx` (si piden editable)

**2. Avances #1, #2 y #3:**
- `HE5_TPI_Taller/Entrega_Avances/UGR-BBDD26-HE2_Giolitti_Avance1.pdf`
- `HE5_TPI_Taller/Entrega_Avances/UGR-BBDD26-HE3_Giolitti_Avance2.pdf`
- `HE5_TPI_Taller/Entrega_Avances/UGR-BBDD26-HE4_Giolitti_Avance3.pdf`

**3. HE5 (integrador):**
- `HE5_TPI_Taller/UGR-BBDD26-HE5_Giolitti_Documento.pdf`
- `HE5_TPI_Taller/UGR-BBDD26-HE5_Giolitti_Documento.docx` (si hace falta)
- `HE5_TPI_Taller/UGR-BBDD26-HE5_Giolitti_SQL.sql`

## Encuesta del profesor (HE5, opcional)
https://forms.gle/VYPYz9Uqki6jr2yRA
