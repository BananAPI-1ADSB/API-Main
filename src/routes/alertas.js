var express = require("express");
var router = express.Router();

var alertaController = require("../controllers/alertaController");

router.get("/registrar", function (req, res) {
  alertaController.registrar(req, res);
});

module.exports = router;
