const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  cpf: Number,
  cep: String,
  email: String,
  username: String,
  senha: String,
  condicao: Number,
});

const storage = mongoose.model("Usuario", UserSchema);

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

const verifyNearbyCases = async (user) => {
  const confirmados = await verifyByCondition(user, 4);
  const suspeitos = await verifyByCondition(user, 3);
  const descartado1 = await verifyByCondition(user, 1);
  const descartado2 = await verifyByCondition(user, 2);

  return {
    confirmados: confirmados.length,
    suspeitos: suspeitos.length,
    descartados: descartado1.length + descartado2.length,
  };
};

const verifyByCondition = async (user, condition) => {
  return await storage.find({
    condicao: condition,
    cep: {
      $regex: `^${user.cep.substring(0, 5)}-(?!${user.cep.substring(6, 9)}.*)`,
    },
  });
};

// /^[${user.cep.toString().substring(0, 5)}]{0,5}
module.exports = {
  storage: storage,
  generateResponse,
  verifyNearbyCases,
};
