DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola CHARSET=UTF8 COLLATE utf8_general_ci;
USE escola;

CREATE TABLE professores(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  especialidade VARCHAR(255)
);

CREATE TABLE turmas(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nomeTurma VARCHAR(255) NOT NULL,
  sigla VARCHAR(255) NOT NULL,
  idprofessor INT NOT NULL,
  FOREIGN KEY (idprofessor) REFERENCES professores(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE alunos(
  ra INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  nascto VARCHAR(255) NOT NULL,
  idturma INT NOT NULL,
  FOREIGN KEY (idturma) REFERENCES turmas(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO professores VALUES
(null,"Wellington","TI"),
(null,"Reenye","TI"),
(null,"Karen","Pedadoga"),
(null,"Georgia","Pedadoga"),
(null,"Kazu","Eletronica"),
(null,"Ivo","Eletronica");

INSERT INTO turmas VALUES
(null,"Desenvolvimento","2DES",1),
(null,"Desenvolvimento","3DES",2),
(null,"Eletronica","3EA",6),
(null,"Eletronica","2EA",5),
(null,"Administração","1ADM",3),
(null,"Administração","2ADM",4);

INSERT INTO alunos VALUES
(null,"Gustavo","2003-10-18",1),
(null,"Isaac","1999-07-15",1),
(null,"Gustavo","2000-01-01",2),
(null,"Leandro","1971-01-10",4),
(null,"Marina","1969-09-11",6),
(null,"Jorge","2000-07-30",5);