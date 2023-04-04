const con = require("../dao/connect");
const Tarefa = require("../models/tarefas");

const app = (req, res) => {
  con.query(new Tarefa(req.body).read(), (err, result) => {
    if (err) {
      res.render("erro", { err: err });
    }

    res.render("index", { titulo: "tarefas a fazer", dados: result });
  });
};

module.exports = {
  app,
};
