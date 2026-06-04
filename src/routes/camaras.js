var express = require("express");
var router = express.Router();

var camaraController = require("../controllers/camaraController");

router.post("/cadastrar", function (req, res) {
  camaraController.cadastrar(req, res);
});

module.exports = router;
