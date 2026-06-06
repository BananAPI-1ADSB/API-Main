var database = require("../database/config");

function listarPorSensor(fkSensor) {
  var instrucaoSql = `SELECT * FROM leitura WHERE fkSensor = 1;`;

  return database.executar(instrucaoSql);
}

module.exports = { listarPorSensor };
