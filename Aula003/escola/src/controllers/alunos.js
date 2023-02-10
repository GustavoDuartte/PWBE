const aluno = require("../models/aluno");

var alunos = [];

const teste = (req, res) => {
  res.json("API resp").end();
};

const criar = (req, res) => {
  const aluno = new Aluno(req.body.ra, req.body.nome, req.body.nascto);
  alunos.push(aluno);
  res.status(201).end();
};

const listar = (req, res) => {
  request.status(200).json(alunos).end();
};

module.exports = {
  teste,
  criar,
  listar,
};
