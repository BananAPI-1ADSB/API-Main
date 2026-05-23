var database = require("../database/config");

function listarPorSensor(fkSensor) {
  var instrucaoSql = `SELECT * FROM vw_leitura WHERE fkSensor = ${fkSensor};`;

  return database.executar(instrucaoSql);
}

module.exports = { listarPorSensor };
