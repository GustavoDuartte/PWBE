const express = require("express");
const router = express.Router();

const Alunos = require("../controllers/Alunos");
const Professores = require("../controllers/professores");
const Turmas = require("../controllers/turmas.js");

router.get("/", Alunos.teste);
router.post("/aluno", Alunos.criar);
router.post("/alunos", Alunos.criarVarios);
router.get("/alunos", Alunos.listar);
router.get("/aluno/:ra", Alunos.buscar);
router.put("/aluno/:ra", Alunos.atualizar);
router.delete("/aluno/:ra", Alunos.deletar);

router.post("/professor", Professores.criar);
router.post("/professores", Professores.criarVarios);
router.get("/professores", Professores.listar);
router.get("/professor/:id", Professores.buscar);
router.put("/professores/:id", Professores.atualizar);
router.delete("/professores/:id", Professores.deletar);

router.post("/turma", Turmas.criar);
router.post("/turmas", Turmas.criarVarias);
router.get("/turmas", Turmas.listar);
router.get("/turma/:id", Turmas.buscar);
router.put("/turmas/:id", Turmas.atualizar);
router.delete("/turmas/:id", Turmas.deletar);

module.exports = router;
