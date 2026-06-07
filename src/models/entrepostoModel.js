var database = require("../database/config");

function buscarUm(nome) {
  var instrucaoSql = `SELECT * FROM entreposto WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, fkEmpresa) {
  var instrucaoSql = `INSERT INTO entreposto (nome, fkEmpresa) VALUES ('${nome}', ${fkEmpresa})`;

  return database.executar(instrucaoSql);
}

function listar(fkEmpresa) {
  var instrucaoSql = `SELECT e.idEntreposto, e.nome FROM entreposto e WHERE e.fkEmpresa = ${fkEmpresa};`;

  return database.executar(instrucaoSql);
} 

module.exports = { buscarUm, cadastrar, listar };
