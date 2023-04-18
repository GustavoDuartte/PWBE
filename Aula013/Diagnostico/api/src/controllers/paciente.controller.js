const con = require("../dao/connect");
const Paciente = require("../models/paciente.model");

const read = (req, res) => {
  con.query(new Paciente(req.body).read(), (err, result) => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(200).json(result);
  });
};

const createPaciente = (req, res) => {
  con.query(new Paciente(req.body).create(), (err, result) => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(201).json(result);
  });
};

const update = (req, res) => {
  con.query(new Paciente(req.body).update(), (err, result) => {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(400).json(err);
    }
  });
};

const delet = (req, res) => {
  con.query(new Paciente(req.params).del(), (err, result) => {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.send("Erro: " + err).end();
    }
  });
};

const readNome = (req, res) => {
  const { nome_completo } = req.query;

  const query = `SELECT * FROM paciente WHERE nome_completo = '${nome_completo}'`;

  con.query(query, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

module.exports = {
  read,
  delet,
  createPaciente,
  update,
  readNome,
};
