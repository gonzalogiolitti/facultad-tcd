-- =============================================================================
-- Bases de Datos - Tecnicatura Universitaria en Ciencia de Datos (UGR) - 2026
-- Unidad I - Trabajo Practico 4
-- Estudio de Caso: Aplicacion de Musica en linea      -> base  u1_tp4_musica
-- Probado en MariaDB 11.8.6.
--
-- Entidades:
--   USUARIO(id_usuario PK, nombre, email UQ, fecha_nacimiento)
--   ARTISTA(id_artista PK, nombre, genero_musical, biografia)
--   ALBUM(id_album PK, titulo, fecha_lanzamiento, duracion_total, id_artista FK)
--   CANCION(id_cancion PK, titulo, genero, duracion, isrc UQ, id_artista_autor FK)
--   LISTA_REPRODUCCION(id_lista PK, nombre, fecha_creacion, id_usuario FK; UQ(id_usuario,nombre))
-- Relaciones:
--   ARTISTA (1,1) --- (0,N) ALBUM              'lanza'         [1:N]
--   ARTISTA (1,1) --- (1,N) CANCION            'compone/autor' [1:N]  (unico autor)
--   CANCION (0,N) --- (1,N) ALBUM              'contiene'      [N:M]  (single o varios albumes)
--   USUARIO (1,1) --- (0,N) LISTA_REPRODUCCION 'crea'          [1:N]  (no se comparten)
--   LISTA   (0,N) --- (0,N) CANCION            'incluye'       [N:M]  (con orden)
--   USUARIO (0,N) --- (0,N) CANCION            'historial'     [N:M]  (con fecha_hora)
-- =============================================================================
DROP DATABASE IF EXISTS u1_tp4_musica;
CREATE DATABASE u1_tp4_musica CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE u1_tp4_musica;

CREATE TABLE usuario (
    id_usuario         INT           NOT NULL AUTO_INCREMENT,
    nombre             VARCHAR(120)  NOT NULL,
    email              VARCHAR(160)  NOT NULL,
    fecha_nacimiento   DATE          NULL,
    CONSTRAINT pk_usuario PRIMARY KEY (id_usuario),
    CONSTRAINT uq_usuario_email UNIQUE (email)
) ENGINE=InnoDB;

CREATE TABLE artista (
    id_artista       INT           NOT NULL AUTO_INCREMENT,
    nombre           VARCHAR(160)  NOT NULL,
    genero_musical   VARCHAR(80)   NULL,
    biografia        TEXT          NULL,
    CONSTRAINT pk_artista PRIMARY KEY (id_artista)
) ENGINE=InnoDB;

CREATE TABLE album (
    id_album           INT           NOT NULL AUTO_INCREMENT,
    titulo             VARCHAR(200)  NOT NULL,
    fecha_lanzamiento  DATE          NULL,
    duracion_total     INT           NULL,                 -- segundos (derivado: suma de canciones)
    id_artista         INT           NOT NULL,             -- (1,1) artista que lo lanzo
    CONSTRAINT pk_album PRIMARY KEY (id_album),
    CONSTRAINT fk_album_artista
        FOREIGN KEY (id_artista) REFERENCES artista (id_artista)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_album_duracion CHECK (duracion_total IS NULL OR duracion_total >= 0)
) ENGINE=InnoDB;

CREATE TABLE cancion (
    id_cancion         INT           NOT NULL AUTO_INCREMENT,
    titulo             VARCHAR(200)  NOT NULL,
    genero             VARCHAR(80)   NULL,
    duracion           INT           NOT NULL,             -- segundos
    isrc               CHAR(12)      NULL,                 -- International Standard Recording Code
    id_artista_autor   INT           NOT NULL,             -- (1,1) unico autor
    CONSTRAINT pk_cancion PRIMARY KEY (id_cancion),
    CONSTRAINT uq_cancion_isrc UNIQUE (isrc),
    CONSTRAINT fk_cancion_artista
        FOREIGN KEY (id_artista_autor) REFERENCES artista (id_artista)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_cancion_duracion CHECK (duracion >= 0)
) ENGINE=InnoDB;

-- Relacion N:M 'contiene': una cancion puede pertenecer a 0..N albumes;
-- un album contiene 1..N canciones (no puede estar vacio -> se controla por aplicacion/trigger).
CREATE TABLE cancion_album (
    id_cancion   INT   NOT NULL,
    id_album     INT   NOT NULL,
    nro_pista    INT   NULL,                               -- posicion de la cancion en el album
    CONSTRAINT pk_cancion_album PRIMARY KEY (id_cancion, id_album),
    CONSTRAINT uq_cancion_album_pista UNIQUE (id_album, nro_pista),
    CONSTRAINT fk_ca_cancion
        FOREIGN KEY (id_cancion) REFERENCES cancion (id_cancion)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_ca_album
        FOREIGN KEY (id_album) REFERENCES album (id_album)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT chk_ca_pista CHECK (nro_pista IS NULL OR nro_pista > 0)
) ENGINE=InnoDB;

CREATE TABLE lista_reproduccion (
    id_lista         INT           NOT NULL AUTO_INCREMENT,
    nombre           VARCHAR(120)  NOT NULL,
    fecha_creacion   DATETIME      NOT NULL,
    id_usuario       INT           NOT NULL,               -- (1,1) pertenece a un unico usuario
    CONSTRAINT pk_lista_reproduccion PRIMARY KEY (id_lista),
    CONSTRAINT uq_lista_usuario_nombre UNIQUE (id_usuario, nombre),  -- sin listas repetidas
    CONSTRAINT fk_lista_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

-- Relacion N:M 'incluye': cualquier combinacion de canciones en una lista
CREATE TABLE lista_cancion (
    id_lista     INT   NOT NULL,
    id_cancion   INT   NOT NULL,
    orden        INT   NULL,                               -- orden manual dentro de la lista
    CONSTRAINT pk_lista_cancion PRIMARY KEY (id_lista, id_cancion),
    CONSTRAINT fk_lc_lista
        FOREIGN KEY (id_lista) REFERENCES lista_reproduccion (id_lista)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_lc_cancion
        FOREIGN KEY (id_cancion) REFERENCES cancion (id_cancion)
        ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

-- Relacion N:M 'historial': canciones que cada usuario escucho, con marca temporal
CREATE TABLE historial_reproduccion (
    id_usuario   INT        NOT NULL,
    id_cancion   INT        NOT NULL,
    fecha_hora   DATETIME   NOT NULL,
    CONSTRAINT pk_historial PRIMARY KEY (id_usuario, id_cancion, fecha_hora),
    CONSTRAINT fk_hist_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_hist_cancion
        FOREIGN KEY (id_cancion) REFERENCES cancion (id_cancion)
        ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

-- =============================================================================
-- Fin del script TP4
-- =============================================================================
