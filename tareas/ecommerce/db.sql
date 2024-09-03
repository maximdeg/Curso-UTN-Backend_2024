-- TAREA MySQL ECOMMERCE CON CARRITO:
-- Dado esta estructura debemos escribir el codigo SQL para poder crear las tablas y sus respectivas relaciones.
-- Tablas:




-- Compradores
    -- id
    -- nombre
    -- email
    -- direccion
    -- telefono
    -- fecha_registro


-- Productos
    -- id
    -- nombre
    -- descripcion TEXT
    --precio DECIMAL(10,2)
    --stock
    --fecha_creacion


-- Carritos
    -- id
    -- comprador_id FOREIGN KEY
    -- fecha_creacion


-- Carritos_Productos
    -- id
    -- carrito_id
    -- producto_id
    -- Cantidad
    -- fecha_agregado
-- Una vez desarrollado probar el flujo insertando manualmente datos con PHPMyAdmin o gestor de preferencia.


-- EXECUTED

CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE compradores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    direccion VARCHAR(150) UNIQUE,
    telefono VARCHAR(20),
    fecha_registro DATE
);

CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) UNIQUE,
    descripcion TEXT,
    precio DECIMAL(10,2),
    stock INT,
    fecha_creacion DATE
);

CREATE TABLE carritos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    comprador_id INT,
    fecha_creacion DATE,
    FOREIGN KEY (comprador_id) REFERENCES compradores(id)
);

CREATE TABLE carritos_productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    carrito_id INT,
    producto_id INT,
    cantidad INT,
    fecha_agregado DATE,
    FOREIGN KEY (carrito_id) REFERENCES carritos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);