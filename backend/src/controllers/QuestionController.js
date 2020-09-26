const User = require('../models/Usuario');
const User = require('../models/Usuario');

module.exports = {
    async update(req, res) {
        const { user } = req.body
        const {sintomasGerais} = req.body;
        const {comorbidades} = req.body;
        const {sintomasEspecificos} = req.body;

        if (sintomasGerais['difRespirar']) {
            let resposta = 1
        }
        sintomasGerais['dorGarganta']
        sintomasGerais['febre']
        sintomasGerais['tosse']
        // gerar resposta

        user = await User.findOneAndUpdate({email: user}, {condicao: resposta})

    }
};