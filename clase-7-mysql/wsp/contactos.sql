CREATE TABLE contactos (
    contacto_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id_fk INT UNIQUE,
    contacto_usuario_id_fk INT NOT NULL UNIQUE,
    created_at DATE,
    FOREIGN KEY (usuario_id_fk) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (contacto_usuario_id_fk) REFERENCES usuarios(usuario_id)
)

INSERT INTO contactos (usuario_id_fk, contacto_usuario_id_fk, created_at)
VALUES (8, 1, CURRENT_TIMESTAMP()),
(1, 8, CURRENT_TIMESTAMP()),
(9, 13, CURRENT_TIMESTAMP()),
(10, 11, CURRENT_TIMESTAMP());

