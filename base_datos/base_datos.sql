CREATE DATABASE ng_basuras_db;

USE ng_basuras_db;

CREATE TABLE basura(
	id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(180),
	description VARCHAR(255),
	image VARCHAR(200),
	create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE basura to basuras;

DESCRIBE basuras;