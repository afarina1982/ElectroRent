CREATE DATABASE `electrorentDB`;

USE `electrorentDB`;

CREATE TABLE `cliente` (
  `rut` VARCHAR(12) PRIMARY KEY NOT NULL,
  `nombre` VARCHAR(100),
  `correo` VARCHAR(100),
  `direccion` VARCHAR(255)
);

CREATE TABLE `dispositivo` (
  `id` VARCHAR(36) PRIMARY KEY NOT NULL,
  `codigo` VARCHAR(50),
  `marca` VARCHAR(100),
  `modelo` VARCHAR(100),
  `estado` VARCHAR(50),
  `id_categoria` INT NOT NULL
);

CREATE TABLE `categoria` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `nombre` VARCHAR(100)
);

CREATE TABLE `arriendo` (
  `id` VARCHAR(36) PRIMARY KEY NOT NULL,
  `rut_cliente` VARCHAR(12) NOT NULL,
  `fecha_inicio` DATE,
  `fecha_fin` DATE,
  `costo_total` INT
);

CREATE TABLE `arriendo_dispositivo` (
  `id_arriendo` VARCHAR(36) NOT NULL,
  `id_dispositivo` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id_arriendo`, `id_dispositivo`)
);

CREATE TABLE `inventario` (
  `id_dispositivo` VARCHAR(36) PRIMARY KEY NOT NULL,
  `estado_inventario` VARCHAR(50),
  `ubicacion` VARCHAR(255)
);

ALTER TABLE `dispositivo` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `arriendo` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut`);

ALTER TABLE `arriendo_dispositivo` ADD FOREIGN KEY (`id_arriendo`) REFERENCES `arriendo` (`id`);

ALTER TABLE `arriendo_dispositivo` ADD FOREIGN KEY (`id_dispositivo`) REFERENCES `dispositivo` (`id`);

ALTER TABLE `inventario` ADD FOREIGN KEY (`id_dispositivo`) REFERENCES `dispositivo` (`id`);