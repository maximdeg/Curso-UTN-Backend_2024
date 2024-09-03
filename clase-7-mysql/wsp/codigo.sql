-- usuarios
-- contactos
-- chats

ALTER TABLE usuarios
MODIFY username VARCHAR(45) NOT NULL;

ALTER TABLE usuarios RENAME COLUMN password to password_hash;



CREATE DATABASE whatsapp_schema;

-- // codigo del profe
CREATE TABLE usuarios (
	usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE 
)

CREATE TABLE contactos (
	contacto_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL UNIQUE,
    contacto_usuario_id INT NOT NULL UNIQUE,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (contacto_usuario_id) REFERENCES usuarios(usuario_id)
)


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

