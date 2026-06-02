var database = require("../database/config");

function buscarPorCep(cep) {
  var instrucaoSql = `SELECT * FROM endereco WHERE CEP = '${cep}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(
  cep,
  rua,
  bairro,
  numero,
  complemento,
  cidade,
  siglaEstado,
  fkEmpresa,
  fkEntreposto,
) {
  var instrucaoSql = `INSERT INTO empresa VALUES (DEFAULT, '${cep}', '${rua}', '${bairro}', '${numero}', '${complemento}', '${cidade}', '${siglaEstado}', ${fkEmpresa}, ${fkEntreposto})`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCep, cadastrar };
