var database = require("../database/config");

function registrar(mensagem, fkLeitura) {
  var instrucaoSql = `INSERT INTO alerta (mensagem, fkLeitura) VALUES ('${mensagem}', ${fkLeitura})`;

  return database.executar(instrucaoSql);
}

module.exports = { registrar };
