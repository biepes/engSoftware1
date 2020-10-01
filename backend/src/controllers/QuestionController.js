const User = require("../models/Usuario");
const Session = require("../models/Session");

module.exports = {
  async update(req, res) {
    const { session } = req.body;
    const { sintomasGerais } = req.body;
    const { comorbidades } = req.body;
    const { sintomasEspecificos } = req.body;

    let user = await Session.findOne({ session: session });
    user = await User.storage.findOne({ username: user["user"] });
    const idade = user["idade"];

    const resposta = User.generateResponse(
      sintomasGerais,
      comorbidades,
      sintomasEspecificos,
      idade
    );

    user = await User.storage.findOneAndUpdate(
      { username: user },
      { condicao: resposta }
    );

    return res.json(resposta);
  },
};
