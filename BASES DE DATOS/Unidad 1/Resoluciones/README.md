# Unidad 1 – Resoluciones de Trabajos Prácticos

Bases de Datos · Tecnicatura Universitaria en Ciencia de Datos (UGR) · 2026

## Contenido

| TP | Tema | Resolución | Script SQL |
|---|---|---|---|
| **TP1** | De explicación coloquial a DER (4 incisos) | [TP1/TP1_resolucion.md](TP1/TP1_resolucion.md) | [TP1/TP1_esquema.sql](TP1/TP1_esquema.sql) |
| **TP2** | Estudios de caso: Arte, Reservas de autos, Farmacias | [TP2/TP2_resolucion.md](TP2/TP2_resolucion.md) | [TP2/TP2_esquema.sql](TP2/TP2_esquema.sql) |
| **TP3** | De explicación coloquial a DER + Modelo Relacional (4 incisos) | [TP3/TP3_resolucion.md](TP3/TP3_resolucion.md) | [TP3/TP3_esquema.sql](TP3/TP3_esquema.sql) |
| **TP4** | Estudio de caso: Aplicación de música | [TP4/TP4_resolucion.md](TP4/TP4_resolucion.md) | [TP4/TP4_esquema.sql](TP4/TP4_esquema.sql) |

## Ejercicios que quedaron pendientes por falta de material

- **TP1 – Ejercicio 2** (DER 1, 2, 3): son imágenes que no están en la carpeta de la materia.
- **TP3 – Ejercicio 2** (incisos a–e): ídem, son DER en imagen no incluidos.

En ambos casos el `.md` correspondiente deja documentado el método de resolución; falta
adjuntar las imágenes para completarlos.

## Cómo importar en MariaDB

Cada script crea sus bases desde cero (`DROP DATABASE IF EXISTS` + `CREATE DATABASE`), así que
se puede reejecutar sin errores.

### Desde la terminal (WSL)

```bash
cd "Unidad 1/Resoluciones"
mariadb -ugonza -p1234 -h127.0.0.1 -P3306 < TP1/TP1_esquema.sql
mariadb -ugonza -p1234 -h127.0.0.1 -P3306 < TP2/TP2_esquema.sql
mariadb -ugonza -p1234 -h127.0.0.1 -P3306 < TP3/TP3_esquema.sql
mariadb -ugonza -p1234 -h127.0.0.1 -P3306 < TP4/TP4_esquema.sql
```

### Desde DBeaver

`Archivo → Abrir` el `.sql`, seleccionar la conexión MariaDB y ejecutar el script completo
(`Alt+X`). Luego `Refrescar` (F5) el árbol de bases de datos.

## Bases de datos resultantes (12)

```
u1_tp1_a_departamentos      u1_tp2_arte             u1_tp3_biblioteca      u1_tp4_musica
u1_tp1_b_jefes              u1_tp2_reservas         u1_tp3_tienda_ropa
u1_tp1_c_pedidos            u1_tp2_farmacias        u1_tp3_hospital
u1_tp1_d_consultorio                                u1_tp3_restaurante
```

## Convenciones aplicadas

- **Modelado:** notación ERDPlus (Chen modificada de la cátedra). Cardinalidades en pares
  `(mín, máx)`. Atributos multivaluados y relaciones N:M → tablas propias.
- **Nombres:** en español, `snake_case`, tablas en singular, tablas puente `entidad_entidad`
  o `detalle_x`.
- **SQL:** MariaDB 11.8.6, motor `InnoDB`, juego de caracteres `utf8mb4`. PK con
  `AUTO_INCREMENT` salvo claves naturales del enunciado (CUIL, DNI, patente, ISBN, nombre…).
  FK con `ON UPDATE CASCADE` y `ON DELETE` según la semántica (`RESTRICT`, `CASCADE` o
  `SET NULL`). Restricciones `CHECK` para dominios (precios ≥ 0, fechas coherentes, etc.).
