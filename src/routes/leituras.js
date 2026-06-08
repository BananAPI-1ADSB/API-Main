var express = require("express");
var router = express.Router();

var leituraController = require("../controllers/leituraController");

router.post("/listar", function (req, res) {
  leituraController.listar(req, res);
});

module.exports = router;
