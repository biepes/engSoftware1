const User = require('../models/Usuario');
const User = require('../models/Usuario');

module.exports = {
    async update(req, res) {
        const { user } = req.body
        const {sintomasGerais} = req.body;
        const {comorbidades} = req.body;
        const {sintomasEspecificos} = req.body;

        const idade = 45; // pegar do user

        sintomas = sintomasGerais['dorGarganta'] + 3*sintomasGerais['difRespirar'] + 10*sintomasGerais['febre'] + sintomasGerais['tosse'];

        outrasDoencas = comorbidades['diabetico'] + comorbidades['cardiaco'] + comorbidades['doencaRenal'] + comorbidades['doencaRespiratorio'] + comorbidades['pressaoAlta'];

        outrosSintomas = sintomasEspecificos['roxo'] + sintomasEspecificos['palidez'] + sintomasEspecificos['pressaoBaixa'] + sintomasEspecificos['respiraRapido'] + sintomasEspecificos['desmaio'];

        let resposta; // precisa disso?

        switch (sintomas) {
            case 0: // nenhum sintoma geral
                resposta = 1;
                break;
            case 11: // febre + (dor garganta OU tosse)
            case 12: // febre + dor garganta + tosse
                if (idade >= 60)
                    if (!outrasDoencas)
                        resposta = 2;
                    else
                        resposta = 4;
                else // idade < 60
                    if (!outrosSintomas) 
                        resposta = 3;
                    else
                        resposta = 5;
                break;
            case 13: // febre + dificuldade respirar
            case 14: // febre + dificuldade respirar + (tosse OU dor de garganta)
            case 15: // todos sintomas
                resposta = 5;
                break;
            default:
                resposta = 2; 
        }

        console.log(resposta); // tirar

        user = await User.findOneAndUpdate({email: user}, {condicao: resposta})

    }
};
