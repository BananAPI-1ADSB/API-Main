var alertaModel = require("../models/alertaModel");

function registrar(req, res) {
  var mensagem = req.body.mensagem;
  var fkLeitura = req.body.fkLeitura;

  alertaModel.registrar(mensagem, fkLeitura).then((resultado) => {
    res.status(201).json(resultado);
  });
}

module.exports = {
  registrar,
};
