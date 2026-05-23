var empresaModel = require("../models/empresaModel");

function cadastrar(req, res) {
  var nome = req.body.nome;
  var cnpj = req.body.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(nome, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  cadastrar,
};
