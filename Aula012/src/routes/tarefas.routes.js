const express = require("express");
const router = express.Router();

const Tarefacontroller = require("../controllers/tarefas.controller");

router.post("/create", Tarefacontroller.create);
router.get("/", Tarefacontroller.app);
router.put("/update", Tarefacontroller.update);
router.delete("/del/:id", Tarefacontroller.excluir);

module.exports = router;
