var express = require("express");
var router = express.Router();

var camaraController = require("../controllers/camaraController");

router.post("/cadastrar", function (req, res) {
  camaraController.cadastrar(req, res);
});

router.post("/listar", function (req, res) {
  camaraController.listar(req, res);
});

router.post("/buscarTodas", function (req, res) {
  camaraController.buscarTodas(req, res);
});

module.exports = router;
