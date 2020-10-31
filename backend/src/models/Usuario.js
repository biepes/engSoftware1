const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  cpf: Number,
  cep: Number,
  email: String,
  username: String,
  senha: String,
  condicao: Number,
});

const generateResponse = (
  sintomasGerais,
  comorbidades,
  sintomasEspecificos,
  idade
) => {
  const sintomas =
    sintomasGerais["dorGarganta"] +
    3 * sintomasGerais["difRespirar"] +
    10 * sintomasGerais["febre"] +
    sintomasGerais["tosse"];

  const outrasDoencas =
    comorbidades["diabetes"] +
    comorbidades["doencaCardiaca"] +
    comorbidades["doencaRenal"] +
    comorbidades["doencaRespiratoria"] +
    comorbidades["pressaoAlta"];

  const outrosSintomas =
    sintomasEspecificos["bocaOuDedoRoxo"] +
    sintomasEspecificos["palidez"] +
    sintomasEspecificos["pressaoBaixa"] +
    sintomasEspecificos["respiracaoRapida"] +
    sintomasEspecificos["desmaio"];

  let resposta;

  switch (sintomas) {
    case 11: // febre + (dor garganta OU tosse)
    case 12: // febre + dor garganta + tosse
      if (idade >= 60)
        if (!outrasDoencas) resposta = 1;
        else resposta = 3;
      // idade < 60
      else if (!outrosSintomas) resposta = 2;
      else resposta = 4;
      break;
    case 13: // febre + dificuldade respirar
    case 14: // febre + dificuldade respirar + (tosse OU dor de garganta)
    case 15: // todos sintomas
      resposta = 4;
      break;
    default:
      resposta = 1;
  }

  return resposta;
};

module.exports = {
  storage: mongoose.model("Usuario", UserSchema),
  generateResponse,
};
