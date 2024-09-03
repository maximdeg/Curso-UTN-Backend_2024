CREATE TABLE chats(
    chat_id INT PRIMARY KEY AUTO_INCREMENT,
    enviado_por_fk INT NOT NULL,
    recibido_por_fk INT NOT NULL,
    mensaje TEXT NOT NULL,
    created_at DATE,
    FOREIGN KEY (enviado_por_fk) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (recibido_por_fk) REFERENCES usuarios(usuario_id)
);

INSERT INTO chats (enviado_por_fk, recibido_por_fk, mensaje, created_at)
VALUES (1, 8, "hola", CURRENT_TIMESTAMP()),
(8, 1, "hola", CURRENT_TIMESTAMP()),
(9, 10, "hola", CURRENT_TIMESTAMP()),
(10, 9, "hola", CURRENT_TIMESTAMP()),
(11, 13, "hola", CURRENT_TIMESTAMP());