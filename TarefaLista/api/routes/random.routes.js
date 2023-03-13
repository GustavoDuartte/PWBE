const express = require("express");
const router = express.Router();

const RandomController = require("../controllers/random.controller");

router.get("/random", RandomController.random);

module.exports = router;
