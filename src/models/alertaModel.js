var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT * FROM vw_alerta`;

  return database.executar(instrucaoSql);
}

module.exports = { listar };
