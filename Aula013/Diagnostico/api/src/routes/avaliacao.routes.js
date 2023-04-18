const express = require("express");
const router = express.Router();

const Pacientecontroller = require("../controllers/paciente.controller");

router.post("/create", Pacientecontroller.createPaciente);
router.get("/read", Pacientecontroller.read);
router.get("/readnome", Pacientecontroller.readNome);
router.put("/update/:id", Pacientecontroller.update);
router.delete("/del/:id", Pacientecontroller.delet);

module.exports = router;
