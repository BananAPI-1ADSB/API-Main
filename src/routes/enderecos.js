var express = require("express");
var router = express.Router();

var enderecosController = require("../controllers/enderecosController");

router.post("/cadastrar", function (req, res) {
  enderecosController.cadastrar(req, res);
});

module.exports = router;
