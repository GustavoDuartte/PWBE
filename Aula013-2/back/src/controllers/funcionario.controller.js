const con = require("../dao/connect");
const Funcionario = require("../models/funcionario.model");

const read = (req, res) => {
  con.query(new Funcionario(req.body).read(), (err, result) => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(200).json(result);
  });
};

const createFuncionario = (req, res) => {
  con.query(new Funcionario(req.body).create(), (err, result) => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(201).json(result);
  });
};

const update = (req, res) => {
  con.query(new Funcionario(req.body).update(), (err, result) => {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(400).json(err);
    }
  });
};

const delet = (req, res) => {
  con.query(new Funcionario(req.params).del(), (err, result) => {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.send("Erro: " + err).end();
    }
  });
};

module.exports = {
  read,
  delet,
  createFuncionario,
  update,
};
