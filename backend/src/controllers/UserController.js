const User = require('../models/Usuario')

module.exports = {
    async store(req, res) {
        const {nome} = req.body;
        const cpf = parseInt(req.body.cpf);
        const cep = parseInt(req.body.cep);
        const {email} = req.body;
        const {senha} = req.body;

        let user = await User.findOne({ email })

        if (!user) {
            user = await User.create({nome, cpf, cep, email, senha});
            return res.json(user);
        } else {
            return res.json(null)
        }

    }
};