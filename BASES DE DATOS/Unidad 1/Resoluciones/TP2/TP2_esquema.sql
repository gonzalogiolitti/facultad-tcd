-- =============================================================================
-- Bases de Datos - Tecnicatura Universitaria en Ciencia de Datos (UGR) - 2026
-- Unidad I - Trabajo Practico 2 - Estudios de Caso
--   Caso 1: Institucion de Arte      -> base  u1_tp2_arte
--   Caso 2: Sistema de Reservas Autos-> base  u1_tp2_reservas
--   Caso 3: Cadena de Farmacias      -> base  u1_tp2_farmacias
-- Probado en MariaDB 11.8.6.
--
-- Los casos 1 y 2 siguen el DER de referencia de la catedra (archivos
-- 'erdplus (4).png' y 'erdplus (5).png'): entidades en MAYUSCULA singular,
-- atributos en camelCase, PK subrayada, atributos multivaluados y opcionales.
-- Aqui se traduce a nombres snake_case en minuscula para el DDL.
-- =============================================================================


-- #############################################################################
-- CASO 1 - INSTITUCION DE ARTE
--   PINTOR(nombre PK, ciudad_natal, fecha_fallecimiento (opc), corriente_artistica (multivaluado))
--   CUADRO(id_cuadro PK, titulo)
--   MUSEO(nombre PK, direccion, ciudad)
--   pinta  : PINTOR (1,N) --- (1,N) CUADRO           [N:M]
--   exhibe : MUSEO  (0,N) --- (0,N) CUADRO  con inicio_expo / final_expo (opc)
--            Un cuadro puede exponerse VARIAS VECES en el MISMO museo en
--            distintos momentos => inicio_expo forma parte de la PK de 'exhibe'.
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp2_arte;
CREATE DATABASE u1_tp2_arte CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp2_arte;

CREATE TABLE pintor (
    nombre                VARCHAR(120)  NOT NULL,          -- los nombres no se repiten -> PK natural
    ciudad_natal          VARCHAR(80)   NULL,
    fecha_fallecimiento   DATE          NULL,              -- (O) opcional: puede estar vivo
    CONSTRAINT pk_pintor PRIMARY KEY (nombre)
) ENGINE=InnoDB;

-- Atributo multivaluado 'corriente_artistica' de PINTOR -> tabla propia
CREATE TABLE pintor_corriente (
    nombre_pintor         VARCHAR(120)  NOT NULL,
    corriente_artistica   VARCHAR(80)   NOT NULL,
    CONSTRAINT pk_pintor_corriente PRIMARY KEY (nombre_pintor, corriente_artistica),
    CONSTRAINT fk_pintcorr_pintor
        FOREIGN KEY (nombre_pintor) REFERENCES pintor (nombre)
        ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE cuadro (
    id_cuadro   INT           NOT NULL AUTO_INCREMENT,
    titulo      VARCHAR(160)  NOT NULL,
    CONSTRAINT pk_cuadro PRIMARY KEY (id_cuadro)
) ENGINE=InnoDB;

CREATE TABLE museo (
    nombre      VARCHAR(120)  NOT NULL,                    -- el nombre del museo no se repite
    direccion   VARCHAR(160)  NOT NULL,
    ciudad      VARCHAR(80)   NOT NULL,
    CONSTRAINT pk_museo PRIMARY KEY (nombre)
) ENGINE=InnoDB;

-- Relacion N:M 'pinta' (un cuadro puede ser pintado por varios pintores)
CREATE TABLE pinta (
    nombre_pintor   VARCHAR(120)  NOT NULL,
    id_cuadro       INT           NOT NULL,
    CONSTRAINT pk_pinta PRIMARY KEY (nombre_pintor, id_cuadro),
    CONSTRAINT fk_pinta_pintor
        FOREIGN KEY (nombre_pintor) REFERENCES pintor (nombre)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_pinta_cuadro
        FOREIGN KEY (id_cuadro) REFERENCES cuadro (id_cuadro)
        ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

-- Relacion N:M 'exhibe' con datos propios y multiples exposiciones por par
CREATE TABLE exhibe (
    nombre_museo   VARCHAR(120)  NOT NULL,
    id_cuadro      INT           NOT NULL,
    inicio_expo    DATE          NOT NULL,
    final_expo     DATE          NULL,                     -- (O) puede seguir expuesto
    CONSTRAINT pk_exhibe PRIMARY KEY (nombre_museo, id_cuadro, inicio_expo),
    CONSTRAINT fk_exhibe_museo
        FOREIGN KEY (nombre_museo) REFERENCES museo (nombre)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_exhibe_cuadro
        FOREIGN KEY (id_cuadro) REFERENCES cuadro (id_cuadro)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT chk_exhibe_fechas CHECK (final_expo IS NULL OR final_expo >= inicio_expo)
) ENGINE=InnoDB;


-- #############################################################################
-- CASO 2 - SISTEMA DE RESERVAS DE AUTOS
--   CLIENTE(dni PK, nombre, direccion)
--   RESERVA(nro_reserva PK, descripcion, fecha_inicio, fecha_fin)
--   COCHE(patente PK, modelo, marca)
--   GARAGE(id_garage PK, direccion)
--   AGENCIA(id_agencia PK, nombre, direccion)
--   efectua  : CLIENTE (0,N) --- (1,1) RESERVA   [1:N]  (hay clientes sin reservas)
--   realiza  : AGENCIA (0,N) --- (1,1) RESERVA   [1:N]
--   involucra: RESERVA (1,N) --- (0,N) COCHE     [N:M]
--   estaciona: GARAGE  (0,N) --- (1,1) COCHE     [1:N]  (garage fijo, no cambia)
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp2_reservas;
CREATE DATABASE u1_tp2_reservas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp2_reservas;

CREATE TABLE cliente (
    dni         INT           NOT NULL,
    nombre      VARCHAR(120)  NOT NULL,
    direccion   VARCHAR(160)  NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY (dni)
) ENGINE=InnoDB;

CREATE TABLE garage (
    id_garage   INT           NOT NULL AUTO_INCREMENT,
    direccion   VARCHAR(160)  NOT NULL,
    CONSTRAINT pk_garage PRIMARY KEY (id_garage)
) ENGINE=InnoDB;

CREATE TABLE agencia (
    id_agencia   INT           NOT NULL AUTO_INCREMENT,
    nombre       VARCHAR(120)  NOT NULL,
    direccion    VARCHAR(160)  NOT NULL,
    CONSTRAINT pk_agencia PRIMARY KEY (id_agencia)
) ENGINE=InnoDB;

CREATE TABLE coche (
    patente     VARCHAR(10)   NOT NULL,
    modelo      VARCHAR(80)   NOT NULL,
    marca       VARCHAR(80)   NOT NULL,
    id_garage   INT           NOT NULL,                    -- (1,1) garage asignado fijo
    CONSTRAINT pk_coche PRIMARY KEY (patente),
    CONSTRAINT fk_coche_garage
        FOREIGN KEY (id_garage) REFERENCES garage (id_garage)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE reserva (
    nro_reserva    INT           NOT NULL,
    descripcion    VARCHAR(255)  NULL,
    fecha_inicio   DATE          NOT NULL,
    fecha_fin      DATE          NOT NULL,
    dni_cliente    INT           NOT NULL,                 -- (1,1) una reserva la hace 1 cliente
    id_agencia     INT           NOT NULL,                 -- (1,1) una reserva es en 1 agencia
    CONSTRAINT pk_reserva PRIMARY KEY (nro_reserva),
    CONSTRAINT fk_reserva_cliente
        FOREIGN KEY (dni_cliente) REFERENCES cliente (dni)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_reserva_agencia
        FOREIGN KEY (id_agencia) REFERENCES agencia (id_agencia)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_reserva_fechas CHECK (fecha_fin >= fecha_inicio)
) ENGINE=InnoDB;

-- Relacion N:M 'involucra' (una reserva involucra varios coches)
CREATE TABLE reserva_coche (
    nro_reserva   INT           NOT NULL,
    patente       VARCHAR(10)   NOT NULL,
    CONSTRAINT pk_reserva_coche PRIMARY KEY (nro_reserva, patente),
    CONSTRAINT fk_rc_reserva
        FOREIGN KEY (nro_reserva) REFERENCES reserva (nro_reserva)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_rc_coche
        FOREIGN KEY (patente) REFERENCES coche (patente)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;


-- #############################################################################
-- CASO 3 - CADENA DE FARMACIAS
--   CIUDAD(codigo_postal PK, nombre)
--   FARMACEUTICO(matricula PK, nombre, apellido) - 1:1 con CIUDAD
--   FARMACIA(id_farmacia PK, calle, numero) - dias_guardia multivaluado
--   EMPLEADO(cuit PK, nombre, fecha_ingreso) - enfermedades multivaluado
--   LABORATORIO(nombre PK, domicilio, duenio_nombre, duenio_apellido)
--   MEDICAMENTO(id_medicamento PK surrogate; UNIQUE(nombre, presentacion); precio)
--   MONODROGA(nombre_cientifico PK, nombre_comercial)
--   ACCION_TERAPEUTICA(nombre PK, tiempo_efecto)
--   composicion       : MEDICAMENTO (1,N) --- (0,N) MONODROGA  con 'cantidad'  [N:M]
--   medicamento_accion: MEDICAMENTO (0,N) --- (0,N) ACCION_TERAPEUTICA          [N:M]
--   stock             : FARMACIA (0,N) --- (0,N) MEDICAMENTO con 'cantidad'     [N:M]
--   ciudad-farmacia   : CIUDAD (1,N) --- (1,1) FARMACIA                         [1:N]
--   laboratorio-medic.: LABORATORIO (1,N) --- (1,1) MEDICAMENTO                 [1:N]
-- #############################################################################
DROP DATABASE IF EXISTS u1_tp2_farmacias;
CREATE DATABASE u1_tp2_farmacias CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp2_farmacias;

CREATE TABLE ciudad (
    codigo_postal   VARCHAR(10)   NOT NULL,
    nombre          VARCHAR(80)   NOT NULL,
    CONSTRAINT pk_ciudad PRIMARY KEY (codigo_postal),
    CONSTRAINT uq_ciudad_nombre UNIQUE (nombre)
) ENGINE=InnoDB;

-- Por cada ciudad existe UN UNICO farmaceutico -> relacion 1:1.
-- Se implementa con FK UNIQUE + NOT NULL hacia ciudad.
CREATE TABLE farmaceutico (
    matricula       INT           NOT NULL AUTO_INCREMENT,
    nombre          VARCHAR(120)  NOT NULL,
    apellido        VARCHAR(120)  NOT NULL,
    codigo_postal   VARCHAR(10)   NOT NULL,
    CONSTRAINT pk_farmaceutico PRIMARY KEY (matricula),
    CONSTRAINT uq_farmaceutico_ciudad UNIQUE (codigo_postal),   -- 1 farmaceutico por ciudad
    CONSTRAINT fk_farmaceutico_ciudad
        FOREIGN KEY (codigo_postal) REFERENCES ciudad (codigo_postal)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE farmacia (
    id_farmacia     INT           NOT NULL AUTO_INCREMENT,
    calle           VARCHAR(120)  NOT NULL,
    numero          VARCHAR(10)   NOT NULL,
    codigo_postal   VARCHAR(10)   NOT NULL,                 -- (1,1) una farmacia en 1 ciudad
    CONSTRAINT pk_farmacia PRIMARY KEY (id_farmacia),
    CONSTRAINT fk_farmacia_ciudad
        FOREIGN KEY (codigo_postal) REFERENCES ciudad (codigo_postal)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Atributo multivaluado 'dias_guardia' de FARMACIA
CREATE TABLE farmacia_dia_guardia (
    id_farmacia   INT           NOT NULL,
    dia           VARCHAR(15)   NOT NULL,                   -- 'Lunes', 'Martes', ...
    CONSTRAINT pk_farmacia_dia_guardia PRIMARY KEY (id_farmacia, dia),
    CONSTRAINT fk_fdg_farmacia
        FOREIGN KEY (id_farmacia) REFERENCES farmacia (id_farmacia)
        ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE empleado (
    cuit            CHAR(13)      NOT NULL,
    nombre          VARCHAR(120)  NOT NULL,
    fecha_ingreso   DATE          NOT NULL,
    id_farmacia     INT           NOT NULL,                 -- (1,1) trabaja en 1 sola farmacia
    CONSTRAINT pk_empleado PRIMARY KEY (cuit),
    CONSTRAINT fk_empleado_farmacia
        FOREIGN KEY (id_farmacia) REFERENCES farmacia (id_farmacia)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Atributo multivaluado 'enfermedades' de EMPLEADO
CREATE TABLE empleado_enfermedad (
    cuit_empleado      CHAR(13)      NOT NULL,
    nombre_enfermedad  VARCHAR(120)  NOT NULL,
    CONSTRAINT pk_empleado_enfermedad PRIMARY KEY (cuit_empleado, nombre_enfermedad),
    CONSTRAINT fk_ee_empleado
        FOREIGN KEY (cuit_empleado) REFERENCES empleado (cuit)
        ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE laboratorio (
    nombre            VARCHAR(120)  NOT NULL,               -- el nombre es unico -> PK
    domicilio         VARCHAR(160)  NOT NULL,
    duenio_nombre     VARCHAR(120)  NOT NULL,
    duenio_apellido   VARCHAR(120)  NOT NULL,
    CONSTRAINT pk_laboratorio PRIMARY KEY (nombre)
) ENGINE=InnoDB;

CREATE TABLE medicamento (
    id_medicamento    INT             NOT NULL AUTO_INCREMENT,   -- PK sustituta
    nombre            VARCHAR(120)    NOT NULL,
    presentacion      VARCHAR(120)    NOT NULL,
    precio            DECIMAL(12,2)   NOT NULL,                  -- mismo para todas las farmacias
    nombre_laboratorio VARCHAR(120)   NOT NULL,                  -- (1,1) laboratorio que lo comercializa
    CONSTRAINT pk_medicamento PRIMARY KEY (id_medicamento),
    CONSTRAINT uq_medicamento_nombre_present UNIQUE (nombre, presentacion),
    CONSTRAINT fk_medicamento_laboratorio
        FOREIGN KEY (nombre_laboratorio) REFERENCES laboratorio (nombre)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_medicamento_precio CHECK (precio >= 0)
) ENGINE=InnoDB;

CREATE TABLE monodroga (
    nombre_cientifico   VARCHAR(160)  NOT NULL,
    nombre_comercial    VARCHAR(160)  NULL,
    CONSTRAINT pk_monodroga PRIMARY KEY (nombre_cientifico)
) ENGINE=InnoDB;

-- Relacion N:M 'composicion' con atributo 'cantidad' (mg de la monodroga en el medicamento)
CREATE TABLE composicion (
    id_medicamento      INT            NOT NULL,
    nombre_cientifico   VARCHAR(160)   NOT NULL,
    cantidad            DECIMAL(10,2)  NOT NULL,            -- p.ej. 125.00 (mg)
    unidad              VARCHAR(10)    NOT NULL DEFAULT 'mg',
    CONSTRAINT pk_composicion PRIMARY KEY (id_medicamento, nombre_cientifico),
    CONSTRAINT fk_comp_medicamento
        FOREIGN KEY (id_medicamento) REFERENCES medicamento (id_medicamento)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_comp_monodroga
        FOREIGN KEY (nombre_cientifico) REFERENCES monodroga (nombre_cientifico)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_comp_cantidad CHECK (cantidad > 0)
) ENGINE=InnoDB;

CREATE TABLE accion_terapeutica (
    nombre          VARCHAR(120)  NOT NULL,
    tiempo_efecto   VARCHAR(60)   NULL,                     -- p.ej. '4 horas'
    CONSTRAINT pk_accion_terapeutica PRIMARY KEY (nombre)
) ENGINE=InnoDB;

-- Relacion N:M 'medicamento_accion' (una accion se repite para distintos medicamentos)
CREATE TABLE medicamento_accion (
    id_medicamento   INT           NOT NULL,
    nombre_accion    VARCHAR(120)  NOT NULL,
    CONSTRAINT pk_medicamento_accion PRIMARY KEY (id_medicamento, nombre_accion),
    CONSTRAINT fk_ma_medicamento
        FOREIGN KEY (id_medicamento) REFERENCES medicamento (id_medicamento)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_ma_accion
        FOREIGN KEY (nombre_accion) REFERENCES accion_terapeutica (nombre)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Relacion N:M 'stock': cada farmacia tiene su stock de cada medicamento que vende
CREATE TABLE stock (
    id_farmacia      INT   NOT NULL,
    id_medicamento   INT   NOT NULL,
    cantidad         INT   NOT NULL DEFAULT 0,
    CONSTRAINT pk_stock PRIMARY KEY (id_farmacia, id_medicamento),
    CONSTRAINT fk_stock_farmacia
        FOREIGN KEY (id_farmacia) REFERENCES farmacia (id_farmacia)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_stock_medicamento
        FOREIGN KEY (id_medicamento) REFERENCES medicamento (id_medicamento)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_stock_cantidad CHECK (cantidad >= 0)
) ENGINE=InnoDB;

-- Datos de ejemplo del enunciado (Dorixina Forte) --------------------------------
INSERT INTO laboratorio (nombre, domicilio, duenio_nombre, duenio_apellido)
VALUES ('Roemmers', 'Av. Rafael Obligado 2457, CABA', 'Alberto', 'Roemmers');

INSERT INTO medicamento (nombre, presentacion, precio, nombre_laboratorio)
VALUES ('Dorixina Forte', 'Caja de 20 comprimidos', 136.00, 'Roemmers');

INSERT INTO monodroga (nombre_cientifico, nombre_comercial) VALUES
    ('Clonixinato de lisina', 'Clonixinato de lisina'),
    ('Dextropropoxifeno napsilato', 'Dextropropoxifeno');

INSERT INTO composicion (id_medicamento, nombre_cientifico, cantidad, unidad) VALUES
    (1, 'Clonixinato de lisina', 125.00, 'mg'),
    (1, 'Dextropropoxifeno napsilato', 98.00, 'mg');

INSERT INTO accion_terapeutica (nombre, tiempo_efecto) VALUES
    ('Analgesica', '4 horas'),
    ('Antiinflamatoria', '4 horas');

INSERT INTO medicamento_accion (id_medicamento, nombre_accion) VALUES
    (1, 'Analgesica'),
    (1, 'Antiinflamatoria');

-- =============================================================================
-- Fin del script TP2
-- =============================================================================
