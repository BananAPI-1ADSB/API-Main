const { GoogleGenAI } = require("@google/genai");
const chatIA = new GoogleGenAI({ apiKey: process.env.BOBIA_KEY });

function gerarResposta(req, res) {
  var pergunta = req.body.pergunta;

  chatIA.models
    .generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: process.env.BOBIA_CTX,
      },
      contents: pergunta,
    })
    .then((data) => {
      var resposta = data.text;
      var tokens = data.usageMetadata;

      console.log(resposta);
      console.log("Uso de Tokens: ", tokens);

      res.status(200).json({ resposta });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Erro interno do servidor" });
    });
}

module.exports = {
  gerarResposta,
};
