const express = require("express");
const router = express.Router();

const Funcionariocontroller = require("../controllers/funcionario.controller");

router.post("/create", Funcionariocontroller.createFuncionario);
router.get("/", Funcionariocontroller.read);
router.put("/update/:id", Funcionariocontroller.update);
router.delete("/del/:id", Funcionariocontroller.delet);

module.exports = router;
