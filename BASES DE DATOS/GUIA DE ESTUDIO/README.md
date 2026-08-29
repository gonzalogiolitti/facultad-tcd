# GUÍA DE ESTUDIO — Bases de Datos

Tecnicatura Universitaria en Ciencia de Datos (UGR) · Bases de Datos · 2° año · 2026

Guía pensada para estudiar **desde cero**: cada carpeta tiene un `conceptos.md`
(explicación, definiciones, esquemas en texto y errores comunes) y un `practica.md`
(ejercicios **resueltos** paso a paso, con el razonamiento explicado). Los ejemplos son
cotidianos (kiosco, gimnasio, veterinaria, videoclub, peluquería, blog...) y **no repiten**
los dominios de los Trabajos Prácticos. Notación de la cátedra: **ERDPlus / Chen
modificada** para el modelado, **SQL estándar** (con notas para MariaDB 11.8) para las
consultas.

## Estructura y correspondencia con el programa oficial

| Carpeta | Programa oficial | Contenido |
|---|---|---|
| `01 - Introduccion a las BBDD` | Unidad 0 | dato/información/BD, SGBD, niveles de abstracción, esquema vs. instancia, modelos, cliente-servidor, DDL/DML/DCL/TCL |
| `02 - Modelado ER` | Unidad I | entidades, atributos (simple/compuesto/multivaluado/derivado), claves, relaciones, cardinalidad `(mín,máx)`, entidad débil |
| `03 - Modelo Relacional` | Unidad I | tabla/tupla/atributo, claves PK/FK, integridad, reglas de mapeo DER → MR |
| `04 - Normalizacion` | Unidad I | anomalías, dependencias funcionales, 1FN, 2FN, 3FN (mención BCNF) |
| `05 - SQL` | Unidad II | DDL, DML, SELECT, WHERE, JOIN, agregación, GROUP BY/HAVING, subconsultas, operadores de conjunto, vistas |
| `06 - Transacciones e Integridad` | Unidad III | transacción, ACID, concurrencia, niveles de aislamiento, bloqueos, recuperación, restricciones |
| `07 - Bases de Datos NoSQL` | Unidad IV | tipos NoSQL, JSON/XML, modelado documental (embeber vs. referenciar), consultas MongoDB, CAP |
| `08 - ORM` | Unidad V | desajuste objeto-relacional, mapeo clase↔tabla, migraciones, CRUD ORM vs. SQL, problema N+1 |

> La consigna original planteaba 5 carpetas (Introducción → ER → Relacional →
> Normalización → SQL). Se ampliaron a **8** para cubrir el **programa real completo**
> (Unidades 0 a V), agregando Transacciones, NoSQL y ORM, útiles para el TPI y el examen
> final.

## Cómo usar la guía

1. Leé `conceptos.md` de la unidad.
2. Resolvé mentalmente cada ejercicio de `practica.md` **antes** de mirar la resolución.
3. Al final de cada `practica.md` hay una **autoevaluación** con respuestas colapsadas.

## Relación con el resto de la carpeta

- Los enunciados y resoluciones de los Trabajos Prácticos están en
  `../Unidad 1/` y `../Unidad 1/Resoluciones/`.
- Esta guía es material de estudio complementario; **no** reemplaza el apunte de la
  cátedra (`../Unidad 0/Apunte de Bases de datos.md`) ni la bibliografía obligatoria.
