var camaraModel = require("../models/camaraModel");

function cadastrar(req, res) {
  var nome = req.body.nome;
  var tipo = req.body.tipo;
  var fkEntreposto = req.body.fkEntreposto;

  camaraModel.buscarPorNome(nome).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(409)
        .json({ mensagem: `O entreposto ${nome} já foi cadastrado` });
    } else {
      camaraModel.cadastrar(nome, tipo, fkEntreposto).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

function listar(req, res) {
  let idEntreposto = Number(req.body.fkEntreposto);

  camaraModel.listar(idEntreposto).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarTodas(req, res) {
  let idEntreposto = Number(req.body.fkEntreposto);

  camaraModel.buscarTodas(idEntreposto).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  cadastrar,
  listar,
  buscarTodas,
};
