const express = require("express");
const router = express.Router();

const nomeCompletoController = require("../controllers/nomecompleto.controller");

router.get("/nomecompleto", nomeCompletoController.nomecompleto);

module.exports = router;
