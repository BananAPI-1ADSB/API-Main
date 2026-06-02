var database = require("../database/config");

function buscarUm(nome) {
  var instrucaoSql = `SELECT * FROM entreposto WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, fkEmpresa) {
  var instrucaoSql = `INSERT INTO entreposto (nome, fkEmpresa) VALUES ('${nome}', '${fkEmpresa}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarUm, cadastrar };
