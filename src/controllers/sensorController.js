var sensorModel = require("../models/sensorModel");

function cadastrar(req, res) {
  var modelo = req.body.modelo;
  var status = req.body.status;
  var pontoRef = req.body.pontoRef
  var fkCamara = req.body.fkCamara

  sensorModel.buscarPorPontoRef(pontoRef).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(409)
        .json({ mensagem: `Um sensor de modelo ${modelo} já foi posicionado em ${pontoRef}` });
    } else {
      sensorModel.cadastrar(modelo, status, pontoRef, fkCamara).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  cadastrar,
};
