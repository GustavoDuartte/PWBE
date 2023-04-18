const express = require("express");
const router = express.Router();

const Funcionariocontroller = require("../controllers/funcionario.controller");

router.post("/create", Funcionariocontroller.createFuncionario);
router.get("/read", Funcionariocontroller.read);
router.get("/readnome", Funcionariocontroller.readNome);
router.put("/update", Funcionariocontroller.update);
router.delete("/del/:matricula", Funcionariocontroller.delet);

module.exports = router;
