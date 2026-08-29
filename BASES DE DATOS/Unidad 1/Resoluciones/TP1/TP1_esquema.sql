-- =============================================================================
-- Bases de Datos - Tecnicatura Universitaria en Ciencia de Datos (UGR) - 2026
-- Unidad I - Trabajo Practico 1
-- Ejercicio 1: De explicacion coloquial a Diagrama de Entidad-Relacion
--
-- Este script crea UNA base de datos por cada inciso (a, b, c, d) del Ejercicio 1.
-- Probado en MariaDB 11.8.6.
--
-- Notacion / convenciones:
--   * Nombres de tablas y columnas en espanol, en minusculas y snake_case.
--   * Entidades -> tablas en singular.  Relaciones N:M -> tablas intermedias.
--   * PK marcada con PRIMARY KEY;  FK marcada con FOREIGN KEY (linea que apunta
--     a la PK referida, tal como en el modelo relacional de la catedra).
--   * Motor InnoDB (soporta claves foraneas) y juego de caracteres utf8mb4.
-- =============================================================================


-- #############################################################################
-- INCISO a) Departamento - Empleado
--   "Un departamento (ID, Nombre). Un empleado (CUIL, Nombre). Cada empleado
--    forma parte de UN departamento; un departamento puede tener MUCHOS empleados."
--   Relacion 'pertenece':  EMPLEADO (1,1) ---- (0,N) DEPARTAMENTO
--   Mapeo 1:N -> la PK de DEPARTAMENTO viaja como FK (obligatoria) a EMPLEADO.
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp1_a_departamentos;
CREATE DATABASE u1_tp1_a_departamentos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp1_a_departamentos;

CREATE TABLE departamento (
    id_departamento   INT           NOT NULL AUTO_INCREMENT,
    nombre            VARCHAR(80)   NOT NULL,
    CONSTRAINT pk_departamento PRIMARY KEY (id_departamento),
    CONSTRAINT uq_departamento_nombre UNIQUE (nombre)
) ENGINE=InnoDB;

CREATE TABLE empleado (
    cuil              CHAR(13)      NOT NULL,               -- formato XX-XXXXXXXX-X
    nombre            VARCHAR(120)  NOT NULL,
    id_departamento   INT           NOT NULL,              -- participacion total (1,1)
    CONSTRAINT pk_empleado PRIMARY KEY (cuil),
    CONSTRAINT fk_empleado_departamento
        FOREIGN KEY (id_departamento) REFERENCES departamento (id_departamento)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;


-- #############################################################################
-- INCISO b) Jerarquia de jefes (relacion unaria / recursiva)
--   "Un empleado puede tener HASTA UN jefe, que es otro empleado de la planta.
--    Un empleado jefe puede tener VARIOS empleados a su cargo."
--   Relacion 'reporta_a':  EMPLEADO (0,1) ---- (0,N) EMPLEADO
--   Mapeo 1:N unaria -> FK 'cuil_jefe' (opcional, NULL) hacia la misma tabla.
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp1_b_jefes;
CREATE DATABASE u1_tp1_b_jefes CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp1_b_jefes;

CREATE TABLE empleado (
    cuil        CHAR(13)      NOT NULL,
    nombre      VARCHAR(120)  NOT NULL,
    cuil_jefe   CHAR(13)      NULL,                        -- NULL => sin jefe (0,1)
    CONSTRAINT pk_empleado PRIMARY KEY (cuil),
    CONSTRAINT fk_empleado_jefe
        FOREIGN KEY (cuil_jefe) REFERENCES empleado (cuil)
        ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;
-- Nota: la regla "un empleado no puede ser su propio jefe" no se expresa como
-- CHECK porque MariaDB no admite CHECK sobre una columna con accion referencial
-- (ON UPDATE CASCADE / ON DELETE SET NULL). Se controla por aplicacion/trigger.


-- #############################################################################
-- INCISO c) Pedido - Producto - Proveedor
--   PEDIDO (precio, cantidad_productos) posee MAS DE UN producto.
--   PRODUCTO (stock, costo_unitario) puede estar en MUCHOS pedidos y estar
--            enlazado a UN SOLO proveedor.
--   PROVEEDOR (nombre, telefono) puede proveer VARIOS articulos.
--   Relacion 'contiene':  PEDIDO (1,N) ---- (0,N) PRODUCTO   -> N:M (tabla puente)
--   Relacion 'provee'  :  PRODUCTO (0,1) ---- (0,N) PROVEEDOR -> 1:N (FK en producto)
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp1_c_pedidos;
CREATE DATABASE u1_tp1_c_pedidos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp1_c_pedidos;

CREATE TABLE proveedor (
    id_proveedor   INT           NOT NULL AUTO_INCREMENT,
    nombre         VARCHAR(120)  NOT NULL,
    telefono       VARCHAR(30)   NULL,
    CONSTRAINT pk_proveedor PRIMARY KEY (id_proveedor)
) ENGINE=InnoDB;

CREATE TABLE producto (
    id_producto     INT             NOT NULL AUTO_INCREMENT,
    stock           INT             NOT NULL DEFAULT 0,
    costo_unitario  DECIMAL(12,2)   NOT NULL,
    id_proveedor    INT             NULL,                  -- (0,1): "un solo proveedor"
    CONSTRAINT pk_producto PRIMARY KEY (id_producto),
    CONSTRAINT fk_producto_proveedor
        FOREIGN KEY (id_proveedor) REFERENCES proveedor (id_proveedor)
        ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT chk_producto_stock CHECK (stock >= 0),
    CONSTRAINT chk_producto_costo CHECK (costo_unitario >= 0)
) ENGINE=InnoDB;

CREATE TABLE pedido (
    id_pedido           INT             NOT NULL AUTO_INCREMENT,
    precio              DECIMAL(12,2)   NOT NULL,
    cantidad_productos  INT             NOT NULL,
    CONSTRAINT pk_pedido PRIMARY KEY (id_pedido),
    CONSTRAINT chk_pedido_precio CHECK (precio >= 0),
    CONSTRAINT chk_pedido_cantidad CHECK (cantidad_productos > 0)
) ENGINE=InnoDB;

-- Relacion N:M 'contiene'  (un pedido lleva 1..N productos; un producto en 0..N pedidos)
CREATE TABLE pedido_producto (
    id_pedido     INT   NOT NULL,
    id_producto   INT   NOT NULL,
    cantidad      INT   NOT NULL DEFAULT 1,
    CONSTRAINT pk_pedido_producto PRIMARY KEY (id_pedido, id_producto),
    CONSTRAINT fk_pp_pedido
        FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_pp_producto
        FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_pp_cantidad CHECK (cantidad > 0)
) ENGINE=InnoDB;


-- #############################################################################
-- INCISO d) Medico - Paciente - Consultorio
--   "Un medico (nombre, especialidad) atiende pacientes (nombre, consulta)
--    en un consultorio (numero_consultorio)."
--   Relacion TERNARIA 'atiende' entre MEDICO, PACIENTE y CONSULTORIO.
--   Un mismo medico atiende a muchos pacientes en distintos consultorios y en
--   distintos momentos -> se agrega 'fecha_hora' para identificar cada atencion.
--   Mapeo relacion ternaria -> tabla 'atencion' con FK a las 3 entidades.
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp1_d_consultorio;
CREATE DATABASE u1_tp1_d_consultorio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp1_d_consultorio;

CREATE TABLE medico (
    matricula      INT           NOT NULL AUTO_INCREMENT,
    nombre         VARCHAR(120)  NOT NULL,
    especialidad   VARCHAR(80)   NOT NULL,
    CONSTRAINT pk_medico PRIMARY KEY (matricula)
) ENGINE=InnoDB;

CREATE TABLE paciente (
    id_paciente    INT           NOT NULL AUTO_INCREMENT,
    nombre         VARCHAR(120)  NOT NULL,
    consulta       VARCHAR(255)  NULL,                     -- motivo de consulta
    CONSTRAINT pk_paciente PRIMARY KEY (id_paciente)
) ENGINE=InnoDB;

CREATE TABLE consultorio (
    numero_consultorio   INT   NOT NULL,
    CONSTRAINT pk_consultorio PRIMARY KEY (numero_consultorio)
) ENGINE=InnoDB;

-- Relacion ternaria 'atiende'
CREATE TABLE atencion (
    matricula            INT        NOT NULL,
    id_paciente          INT        NOT NULL,
    numero_consultorio   INT        NOT NULL,
    fecha_hora           DATETIME   NOT NULL,
    CONSTRAINT pk_atencion PRIMARY KEY (matricula, id_paciente, numero_consultorio, fecha_hora),
    CONSTRAINT fk_atencion_medico
        FOREIGN KEY (matricula) REFERENCES medico (matricula)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_atencion_paciente
        FOREIGN KEY (id_paciente) REFERENCES paciente (id_paciente)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_atencion_consultorio
        FOREIGN KEY (numero_consultorio) REFERENCES consultorio (numero_consultorio)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- =============================================================================
-- Fin del script TP1
-- =============================================================================
