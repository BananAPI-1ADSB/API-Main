var entrepostoModel = require("../models/entrepostoModel");

function cadastrar(req, res) {
  var nome = req.body.nome;
  var fkEmpresa = req.body.fkEmpresa;

  entrepostoModel.buscarUm(nome).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(409)
        .json({ mensagem: `O entreposto ${nome} já foi cadastrado.` });
    } else {
      entrepostoModel.cadastrar(nome, fkEmpresa).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  cadastrar,
};
