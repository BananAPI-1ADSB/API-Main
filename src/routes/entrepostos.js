var express = require("express");
var router = express.Router();

var entrepostoController = require("../controllers/entrepostoController");

router.post("/cadastrar", function (req, res) {
  entrepostoController.cadastrar(req, res);
});

router.post("/listar", function (req, res) {
  entrepostoController.listar(req, res);
});

module.exports = router;
