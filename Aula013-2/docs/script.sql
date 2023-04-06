DROP DATABASE IF EXISTS bonificacoes;

CREATE DATABASE bonificacoes CHARSET = UTF8 COLLATE utf8_unicode_ci;

USE bonificacoes;

CREATE TABLE
  funcionaro (
    matricula INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    data_admissao DATE NOT NULL,
    salario FLOAT NOT NULL,
    data_pagto DATE NOT NULL,
    desempenho INT NOT NULL,
    bonificacao FLOAT
  );

SELECT
  *
FROM
  funcionaro;