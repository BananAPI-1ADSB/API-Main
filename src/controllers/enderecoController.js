var enderecoModel = require("../models/enderecoModel");

function cadastrar(req, res) {
  var cep = req.body.cep;
  var rua = req.body.rua;
  var bairro = req.body.bairro;
  var numero = req.body.numero;
  var complemento = req.body.complemento;
  var cidade = req.body.cidade;
  var siglaEstado = req.body.bairro;
  var fkEmpresa = req.body.fkEmpresa;
  var fkEntreposto = req.body.fkEntreposto;

  enderecoModel.buscarPorCep(cep).then((resultado) => {
    if (resultado.length > 0) {
      res.status(409).json({ mensagem: `O CEP ${cep} já foi cadastrado` });
    } else {
      enderecoModel
        .cadastrar(
          cep,
          rua,
          bairro,
          numero,
          complemento,
          cidade,
          siglaEstado,
          fkEmpresa,
          fkEntreposto,
        )
        .then((resultado) => {
          res.status(201).json(resultado);
        });
    }
  });
}

module.exports = {
  cadastrar,
};
