var database = require("../database/config");

function buscarPorNome(nome) {
  var instrucaoSql = `SELECT * FROM camara WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function listar(idEntreposto) {
  var instrucaoSql = `SELECT * FROM camara WHERE fkEntreposto = ${idEntreposto}`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, tipo, fkEntreposto) {
  var instrucaoSql = `INSERT INTO camara (nome, tipo, fkEntreposto) VALUES ('${nome}', '${tipo}', ${fkEntreposto})`;

  return database.executar(instrucaoSql);
}

function buscarTodas(fkEntreposto) {
  var instrucaoSql = `SELECT * FROM vw_camara WHERE fkEntreposto = ${fkEntreposto}`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorNome, cadastrar, listar, buscarTodas };
