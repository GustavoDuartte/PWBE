const con = require("../dao/connect");
const Tarefa = require("../models/tarefas");

const app = (req, res) => {
  con.query(new Tarefa(req.body).read(), (err, result) => {
    if (err) {
      res.send("Erro: " + err).end();
    }

    res.render("index", { titulo: "Tarefas a Fazer", dados: result });
  });
};

const create = (req, res) => {
  con.query(new Tarefa(req.body).create(), (err, result) => {
    if (err) {
      res.send("Erro: " + err).end();
    }
    res.status(201).redirect("/");
  });
};

const update = (req, res) => {
  con.query(new Tarefa(req.body).update(), (err, result) => {
    if (result.affectedRows > 0) res.redirect("/");
    else res.send("Erro: " + err).end();
  });
};

const excluir = (req, res) => {
  con.query(new Tarefa(req.params).del(), (err, result) => {
    if (result.affectedRows > 0) res.redirect("/");
    else res.send("Erro: " + err).end();
  });
};

module.exports = {
  app,
  excluir,
  create,
  update,
};
