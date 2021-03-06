const User = require("../models/Usuario");

module.exports = {
  async store(req, res) {
    const { nome } = req.body;
    const idade = parseInt(req.body.idade);
    const cpf = parseInt(req.body.cpf);
    const cep = req.body.cep;
    const { email } = req.body;
    const { username } = req.body;
    const { senha } = req.body;
    let user = await User.storage.findOne({ username });

    if (!user) {
      user = await User.storage.create({
        nome,
        idade,
        cpf,
        cep,
        email,
        username,
        senha,
        condicao: null,
      });
      return res.json(user);
    } else {
      return res.json(null);
    }
  },
};
