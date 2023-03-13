const express = require("express");
const router = express.Router();

const tarefaController = require("../controllers/tarefas.controller");

router.get("/tarefas", tarefaController.tarefas);
router.post("/nova", tarefaController.nova);
router.put("/update/:id", tarefaController.update);
router.delete("/delet/:id", tarefaController.delet);

module.exports = router;
