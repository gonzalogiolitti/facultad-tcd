-- =============================================================================
-- Bases de Datos - Tecnicatura Universitaria en Ciencia de Datos (UGR) - 2026
-- Unidad I - Trabajo Practico 3
-- Ejercicio 1: De explicacion coloquial a DER y Modelo Relacional
--   a) Biblioteca   -> base  u1_tp3_biblioteca
--   b) Tienda ropa  -> base  u1_tp3_tienda_ropa
--   c) Hospital     -> base  u1_tp3_hospital
--   d) Restaurante  -> base  u1_tp3_restaurante
-- Probado en MariaDB 11.8.6.
-- =============================================================================


-- #############################################################################
-- a) BIBLIOTECA
--   "Un libro puede ser prestado a uno o mas usuarios, y un usuario puede tener
--    prestados uno o mas libros. Cada prestamo tiene fecha de inicio y fecha de fin."
--   LIBRO (1,N) --- (0,N) USUARIO  [N:M]  a traves de PRESTAMO.
--   Un mismo libro se presta muchas veces a lo largo del tiempo => 'fecha_inicio'
--   integra la PK de PRESTAMO.
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp3_biblioteca;
CREATE DATABASE u1_tp3_biblioteca CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp3_biblioteca;

CREATE TABLE libro (
    id_libro   INT           NOT NULL AUTO_INCREMENT,
    titulo     VARCHAR(200)  NOT NULL,
    autor      VARCHAR(160)  NOT NULL,
    isbn       VARCHAR(20)   NULL,
    CONSTRAINT pk_libro PRIMARY KEY (id_libro),
    CONSTRAINT uq_libro_isbn UNIQUE (isbn)
) ENGINE=InnoDB;

CREATE TABLE usuario (
    id_usuario   INT           NOT NULL AUTO_INCREMENT,
    nombre       VARCHAR(120)  NOT NULL,
    email        VARCHAR(160)  NULL,
    CONSTRAINT pk_usuario PRIMARY KEY (id_usuario)
) ENGINE=InnoDB;

CREATE TABLE prestamo (
    id_libro       INT    NOT NULL,
    id_usuario     INT    NOT NULL,
    fecha_inicio   DATE   NOT NULL,
    fecha_fin      DATE   NULL,                            -- NULL => prestamo vigente
    CONSTRAINT pk_prestamo PRIMARY KEY (id_libro, id_usuario, fecha_inicio),
    CONSTRAINT fk_prestamo_libro
        FOREIGN KEY (id_libro) REFERENCES libro (id_libro)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_prestamo_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_prestamo_fechas CHECK (fecha_fin IS NULL OR fecha_fin >= fecha_inicio)
) ENGINE=InnoDB;


-- #############################################################################
-- b) TIENDA DE ROPA
--   "Cada prenda tiene color, talla y precio. Los clientes compran una o mas
--    prendas en una misma compra. Cada compra tiene fecha y total."
--   CLIENTE (0,N) --- (1,1) COMPRA           [1:N]
--   COMPRA  (1,N) --- (0,N) PRENDA           [N:M]  con 'cantidad'
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp3_tienda_ropa;
CREATE DATABASE u1_tp3_tienda_ropa CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp3_tienda_ropa;

CREATE TABLE cliente (
    id_cliente   INT           NOT NULL AUTO_INCREMENT,
    nombre       VARCHAR(120)  NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY (id_cliente)
) ENGINE=InnoDB;

CREATE TABLE prenda (
    id_prenda   INT             NOT NULL AUTO_INCREMENT,
    tipo        VARCHAR(60)     NOT NULL,                  -- remera, pantalon, campera...
    color       VARCHAR(40)     NOT NULL,
    talla       VARCHAR(10)     NOT NULL,                  -- S, M, L, 42, ...
    precio      DECIMAL(12,2)   NOT NULL,
    CONSTRAINT pk_prenda PRIMARY KEY (id_prenda),
    CONSTRAINT chk_prenda_precio CHECK (precio >= 0)
) ENGINE=InnoDB;

CREATE TABLE compra (
    id_compra    INT             NOT NULL AUTO_INCREMENT,
    fecha        DATETIME        NOT NULL,
    total        DECIMAL(12,2)   NOT NULL DEFAULT 0,
    id_cliente   INT             NOT NULL,                 -- (1,1) cada compra es de 1 cliente
    CONSTRAINT pk_compra PRIMARY KEY (id_compra),
    CONSTRAINT fk_compra_cliente
        FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_compra_total CHECK (total >= 0)
) ENGINE=InnoDB;

CREATE TABLE detalle_compra (
    id_compra   INT   NOT NULL,
    id_prenda   INT   NOT NULL,
    cantidad    INT   NOT NULL DEFAULT 1,
    CONSTRAINT pk_detalle_compra PRIMARY KEY (id_compra, id_prenda),
    CONSTRAINT fk_dc_compra
        FOREIGN KEY (id_compra) REFERENCES compra (id_compra)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_dc_prenda
        FOREIGN KEY (id_prenda) REFERENCES prenda (id_prenda)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_dc_cantidad CHECK (cantidad > 0)
) ENGINE=InnoDB;


-- #############################################################################
-- c) HOSPITAL
--   "Cada departamento tiene un nombre y un jefe. Los medicos trabajan en uno o
--    mas departamentos, y un departamento puede tener uno o mas medicos."
--   DEPARTAMENTO (0,1) --- (0,N) MEDICO   'jefe'      [1:N]  (jefe es un medico)
--   MEDICO (1,N) --- (1,N) DEPARTAMENTO   'trabaja_en'[N:M]
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp3_hospital;
CREATE DATABASE u1_tp3_hospital CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp3_hospital;

CREATE TABLE medico (
    matricula      INT           NOT NULL AUTO_INCREMENT,
    nombre         VARCHAR(120)  NOT NULL,
    especialidad   VARCHAR(80)   NOT NULL,
    CONSTRAINT pk_medico PRIMARY KEY (matricula)
) ENGINE=InnoDB;

CREATE TABLE departamento (
    id_departamento   INT           NOT NULL AUTO_INCREMENT,
    nombre            VARCHAR(80)   NOT NULL,
    matricula_jefe    INT           NULL,                  -- (0,1) el jefe es un medico
    CONSTRAINT pk_departamento PRIMARY KEY (id_departamento),
    CONSTRAINT uq_departamento_nombre UNIQUE (nombre),
    CONSTRAINT fk_departamento_jefe
        FOREIGN KEY (matricula_jefe) REFERENCES medico (matricula)
        ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE trabaja_en (
    matricula         INT   NOT NULL,
    id_departamento   INT   NOT NULL,
    CONSTRAINT pk_trabaja_en PRIMARY KEY (matricula, id_departamento),
    CONSTRAINT fk_te_medico
        FOREIGN KEY (matricula) REFERENCES medico (matricula)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_te_departamento
        FOREIGN KEY (id_departamento) REFERENCES departamento (id_departamento)
        ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;


-- #############################################################################
-- d) RESTAURANTE
--   PLATO (nombre, descripcion, precio) - especialidad de un CHEF.
--   PLATO cuenta con INGREDIENTES (N:M, con cantidad).
--   INGREDIENTE (stock) provisto por un PROVEEDOR (1,1).
--   Clientes piden uno o mas platos en una MESA (numero, capacidad).
--   MESA atendida por un MOZO (1,1).  -> se modela PEDIDO por mesa.
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp3_restaurante;
CREATE DATABASE u1_tp3_restaurante CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp3_restaurante;

CREATE TABLE proveedor (
    id_proveedor   INT           NOT NULL AUTO_INCREMENT,
    nombre         VARCHAR(120)  NOT NULL,
    telefono       VARCHAR(30)   NULL,
    CONSTRAINT pk_proveedor PRIMARY KEY (id_proveedor)
) ENGINE=InnoDB;

CREATE TABLE chef (
    matricula   INT           NOT NULL AUTO_INCREMENT,
    nombre      VARCHAR(120)  NOT NULL,
    CONSTRAINT pk_chef PRIMARY KEY (matricula)
) ENGINE=InnoDB;

CREATE TABLE mozo (
    legajo      INT           NOT NULL AUTO_INCREMENT,
    nombre      VARCHAR(120)  NOT NULL,
    CONSTRAINT pk_mozo PRIMARY KEY (legajo)
) ENGINE=InnoDB;

CREATE TABLE cliente (
    id_cliente   INT           NOT NULL AUTO_INCREMENT,
    nombre       VARCHAR(120)  NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY (id_cliente)
) ENGINE=InnoDB;

CREATE TABLE ingrediente (
    id_ingrediente   INT           NOT NULL AUTO_INCREMENT,
    nombre           VARCHAR(120)  NOT NULL,
    stock            DECIMAL(12,2) NOT NULL DEFAULT 0,
    id_proveedor     INT           NOT NULL,              -- (1,1) provisto por un proveedor
    CONSTRAINT pk_ingrediente PRIMARY KEY (id_ingrediente),
    CONSTRAINT fk_ingrediente_proveedor
        FOREIGN KEY (id_proveedor) REFERENCES proveedor (id_proveedor)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_ingrediente_stock CHECK (stock >= 0)
) ENGINE=InnoDB;

CREATE TABLE plato (
    id_plato       INT             NOT NULL AUTO_INCREMENT,
    nombre         VARCHAR(120)    NOT NULL,
    descripcion    VARCHAR(255)    NULL,
    precio         DECIMAL(12,2)   NOT NULL,
    matricula_chef INT             NOT NULL,              -- (1,1) especialidad de un chef
    CONSTRAINT pk_plato PRIMARY KEY (id_plato),
    CONSTRAINT fk_plato_chef
        FOREIGN KEY (matricula_chef) REFERENCES chef (matricula)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_plato_precio CHECK (precio >= 0)
) ENGINE=InnoDB;

-- Relacion N:M 'receta' (un plato cuenta con ingredientes)
CREATE TABLE receta (
    id_plato        INT            NOT NULL,
    id_ingrediente  INT            NOT NULL,
    cantidad        DECIMAL(10,2)  NOT NULL DEFAULT 1,
    CONSTRAINT pk_receta PRIMARY KEY (id_plato, id_ingrediente),
    CONSTRAINT fk_receta_plato
        FOREIGN KEY (id_plato) REFERENCES plato (id_plato)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_receta_ingrediente
        FOREIGN KEY (id_ingrediente) REFERENCES ingrediente (id_ingrediente)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_receta_cantidad CHECK (cantidad > 0)
) ENGINE=InnoDB;

CREATE TABLE mesa (
    numero_mesa   INT   NOT NULL,
    capacidad     INT   NOT NULL,
    legajo_mozo   INT   NOT NULL,                          -- (1,1) atendida por un mozo
    CONSTRAINT pk_mesa PRIMARY KEY (numero_mesa),
    CONSTRAINT fk_mesa_mozo
        FOREIGN KEY (legajo_mozo) REFERENCES mozo (legajo)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_mesa_capacidad CHECK (capacidad > 0)
) ENGINE=InnoDB;

CREATE TABLE pedido (
    id_pedido     INT        NOT NULL AUTO_INCREMENT,
    fecha_hora    DATETIME   NOT NULL,
    numero_mesa   INT        NOT NULL,                     -- el pedido se hace en una mesa
    id_cliente    INT        NULL,                         -- opcional: cliente que pide
    CONSTRAINT pk_pedido PRIMARY KEY (id_pedido),
    CONSTRAINT fk_pedido_mesa
        FOREIGN KEY (numero_mesa) REFERENCES mesa (numero_mesa)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_pedido_cliente
        FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
        ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

-- Relacion N:M 'detalle_pedido' (uno o mas platos por pedido)
CREATE TABLE detalle_pedido (
    id_pedido   INT   NOT NULL,
    id_plato    INT   NOT NULL,
    cantidad    INT   NOT NULL DEFAULT 1,
    CONSTRAINT pk_detalle_pedido PRIMARY KEY (id_pedido, id_plato),
    CONSTRAINT fk_dp_pedido
        FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_dp_plato
        FOREIGN KEY (id_plato) REFERENCES plato (id_plato)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_dp_cantidad CHECK (cantidad > 0)
) ENGINE=InnoDB;

-- =============================================================================
-- Fin del script TP3
-- =============================================================================
