const con = require("../dao/conn");

const tarefas = (req, res) => {
  let query = `SELECT * FROM tarefas`;

  con.query(query, (err, result) => {
    if (err) {
      res.status(400).json(err).end();
    }

    res.status(200).json({ tarefa: result }).end();
  });
};

const nova = (req, res) => {
  const { tarefa, data_inicio } = req.body;

  let query = `INSERT INTO tarefas VALUES (null, '${tarefa}', '${data_inicio}', null , 1 )`;

  con.query(query, (err, result) => {
    if (err) {
      res.status(400).json(err).end();
    }

    res.status(201).json().end();
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { data_fim, status_id } = req.body;

  let query = `UPDATE tarefas SET data_fim = '${data_fim}', status_id = '${status_id}' WHERE id= ${id} `;

  con.query(query, (err, result) => {
    if (err) {
      res.status(400).json(err).end();
    }

    res.status(202).json().end();
  });
};

const delet = (req, res) => {
  const { id } = req.params;

  let query = `DELETE FROM tarefas WHERE id= ${id}`;

  con.query(query, (err, result) => {
    if (err) {
      res.status(400).json(err).end();
    }

    res.status(202).json().end();
  });
};

module.exports = {
  tarefas,
  nova,
  update,
  delet,
};
