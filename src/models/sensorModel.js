var database = require("../database/config");

function buscarPorPontoRef(pontoRef) {
  var instrucaoSql = `SELECT * FROM sensor WHERE pontoDeReferencia = '${pontoRef}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(modelo, status, pontoRef, fkCamara) {
  var instrucaoSql = `INSERT INTO sensor (modelo, status, pontoDeReferencia, fkCamara) VALUES ('${modelo}', '${status}', '${pontoRef}', ${fkCamara})`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorPontoRef, cadastrar };
