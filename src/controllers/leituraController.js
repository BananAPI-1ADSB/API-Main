var leituraModel = require("../models/leituraModel");

function listar(req, res) {
  var fkSensor = req.body.fkSensor;

  leituraModel.listarPorSensor(fkSensor).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  listar,
};
