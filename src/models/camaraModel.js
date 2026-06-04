var database = require("../database/config");

function buscarPorNome(nome) {
  var instrucaoSql = `SELECT * FROM camara WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, tipo, fkEntreposto) {
  var instrucaoSql = `INSERT INTO camara (nome, tipo, fkEntreposto) VALUES ('${nome}', '${tipo}', ${fkEntreposto})`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorNome, cadastrar };
