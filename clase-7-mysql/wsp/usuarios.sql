CREATE TABLE usuarios (
    usuario_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(45),
    email VARCHAR(100),
    password VARCHAR(255),
    created_at DATE
);

INSERT INTO usuarios(username, email, password_hash, created_at)
VALUES ("pepe", "pepe@pepe.com", "pepe123", CURRENT_TIMESTAMP()),
("maria", "maria@pepe.com", "maria123", CURRENT_TIMESTAMP()),
("Carlita", "jose@pepe.com", "jose123", CURRENT_TIMESTAMP()),
("david", "david@pepe.com", "david123", CURRENT_TIMESTAMP()),
("carla", "carla@pepe.com", "carla123", CURRENT_TIMESTAMP()),
("chocho", "chocho@pepe.com", "chocho123", CURRENT_TIMESTAMP());


-- TAREA
INSERT INTO usuarios(username, email, password_hash, created_at)
VALUES 
("leonel", "leonel@example.com", "leonel123", CURRENT_TIMESTAMP()),
("juan", "juan@example.com", "juan123", CURRENT_TIMESTAMP()),
("Carlita", "Carlita@pepe.com", "Carlita123", CURRENT_TIMESTAMP());

ALTER TABLE usuarios ADD status VARCHAR(30);

UPDATE usuarios SET status="active";

SELECT * FROM usuarios; 
-- sacar el id de juan y carlita

UPDATE usuarios SET status = "disabled" WHERE usuario_id = 15;
UPDATE usuarios SET username = "Carlota" WHERE usuario_id = 16;
