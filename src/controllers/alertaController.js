var alertaModel = require("../models/alertaModel");

function listar(req, res) {

  alertaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  listar,
};
