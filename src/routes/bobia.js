var express = require("express");
var router = express.Router();

var bobiaController = require("../controllers/bobiaController");

router.post("/perguntar", function (req, res) {
  bobiaController.gerarResposta(req, res);
});

module.exports = router;
