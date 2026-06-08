var database = require("../database/config");

function listarPorSensor(fkSensor) {
  var instrucaoSql = `SELECT * FROM leitura WHERE fkSensor = ${fkSensor};`;

  return database.executar(instrucaoSql);
}

module.exports = { listarPorSensor };
