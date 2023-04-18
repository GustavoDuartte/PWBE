DROP DATABASE IF EXISTS avaliacao_fisica;

CREATE DATABASE avaliacao_fisica CHARSET = UTF8 COLLATE utf8_unicode_ci;

USE avaliacao_fisica;

CREATE TABLE
  paciente (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    nascimento DATE NOT NULL,
    peso FLOAT NOT NULL,
    altura FLOAT NOT NULL,
    idade INT,
    imc FLOAT,
    diagnostico VARCHAR(255)
  );