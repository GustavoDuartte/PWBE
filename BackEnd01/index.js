//Importação
const express = require("express");

//Corpo
const raiz = (req, res) => {
  res.send("Back End Ativo!");
};

const interacao = (req, res) => {
  let nome = req.query.nome;
  let idade = req.query.idade;
  res.send(`Oi ${nome}, voce tem ${idade} anos de idade `);
};

//Configuração HTTP
const app = express();
app.get("/", raiz);
app.get("/interacao", interacao);

//texto no console
app.listen(3000, () => {
  console.log("Respondendo na porta 3000.");
});
