const express = require("express");
const router = express.Router();

const Tarefacontroller = require("../controllers/tarefas.controller");

router.get("/", Tarefacontroller.app);

module.exports = router;
