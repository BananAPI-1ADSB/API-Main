var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT * FROM vw_alertas LIMIT 5 ORDER BY dataHora DESC`;

  return database.executar(instrucaoSql);
}

module.exports = { listar };
