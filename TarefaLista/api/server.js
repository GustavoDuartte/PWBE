const express = require("express");
const cors = require("cors");

const calculadoraRoutes = require("./routes/calculadora.routes");
const nomeRoutes = require("./routes/nome.routes");
const randomRoutes = require("./routes/random.routes");
const nomecompletoRoutes = require("./routes/nomecompleto.routes");
const tarefaRoutes = require("./routes/tarefas.routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/calculadora", calculadoraRoutes);
app.use("/nome", nomeRoutes);
app.use(randomRoutes);
app.use(nomecompletoRoutes);
app.use(tarefaRoutes);

app.listen(3000);
