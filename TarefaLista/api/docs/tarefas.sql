DROP DATABASE IF EXISTS tarefas;

CREATE DATABASE tarefas;

USE tarefas;

CREATE TABLE
  status (
    id INT NOT NULL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
  );

CREATE TABLE
  tarefas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255),
    data_inicio DATE NOT NULL,
    data_fim DATE,
    status_id INT NOT NULL,
    FOREIGN KEY (status_id) REFERENCES status (id)
  );

INSERT INTO
  status
VALUES
  (1, "Aberto"),
  (2, "Executando"),
  (3, "Finalizado");