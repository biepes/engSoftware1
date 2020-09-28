const User = require('../models/Usuario');
const Session = require('../models/Session')

module.exports = {
    async update(req, res) {
        let { session } = req.body
        const {sintomasGerais} = req.body;
        const {comorbidades} = req.body;
        const {sintomasEspecificos} = req.body;

        let user = await Session.findOne({ session: session})
        user = await User.findOne({ username: user['user'] });
        const idade = user['idade'];

        sintomas = sintomasGerais['dorGarganta'] + 3*sintomasGerais['difRespirar'] + 10*sintomasGerais['febre'] + sintomasGerais['tosse'];

        outrasDoencas = comorbidades['diabetes'] + comorbidades['doencaCardiaca'] + comorbidades['doencaRenal'] + comorbidades['doencaRespiratoria'] + comorbidades['pressaoAlta'];

        outrosSintomas = sintomasEspecificos['bocaOuDedoRoxo'] + sintomasEspecificos['palidez'] + sintomasEspecificos['pressaoBaixa'] + sintomasEspecificos['respiracaoRapida'] + sintomasEspecificos['desmaio'];

        let resposta;

        switch (sintomas) {
            case 11: // febre + (dor garganta OU tosse)
            case 12: // febre + dor garganta + tosse
                if (idade >= 60)
                    if (!outrasDoencas)
                        resposta = 1;
                    else
                        resposta = 3;
                else // idade < 60
                    if (!outrosSintomas) 
                        resposta = 2;
                    else
                        resposta = 4;
                break;
            case 13: // febre + dificuldade respirar
            case 14: // febre + dificuldade respirar + (tosse OU dor de garganta)
            case 15: // todos sintomas
                resposta = 4;
                break;
            default:
                resposta = 1; 
        }

        user = await User.findOneAndUpdate({username: user}, {condicao: resposta})

        return res.json(resposta)

    }
};
