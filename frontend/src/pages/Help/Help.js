import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
// Gerenciamento de Estado
import { connect } from "react-redux";
// Routes
import { withRouter } from "react-router-dom";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const Help = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>O que são Coronavírus?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Os coronavírus são uma grande família de vírus que podem causar
            desde resfriados comuns até doenças respiratórias mais graves e de
            importância para a saúde pública como a Síndrome Respiratória Aguda
            Grave (SARS) e a Síndrome Respiratória do Oriente Médio (MERS). O
            novo coronavírus descoberto em dezembro de 2019 na China
            (SARS-CoV-2) é o agente causador da doença pelo coronavírus 2019
            (COVID-19).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Quais são os sintomas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A Doença pelo Coronavírus 2019 (Covid-19) é similar a uma “gripe”.
            Geralmente é uma doença leve ou moderada, mas alguns casos podem
            ficar graves. Os sintomas mais comuns são: febre, tosse e/ou
            dificuldade para respirar. Alguns pacientes podem apresentar
            cansaço, dores no corpo, mal estar em geral, congestão nasal,
            corrimento nasal, dor de garganta ou dor no peito. Esses sintomas
            geralmente são leves e começam gradualmente. Algumas pessoas são
            infectadas, mas não apresentam sintomas ou apresentam sintomas
            leves, quase que imperceptíveis. A maioria das pessoas (cerca de
            80%) se recupera da doença sem precisar de tratamento especial.
            Cerca de 1 em cada 6 pessoas que adoecem pelo COVID-19 podem
            apresentar a forma grave da doença. Pessoas idosas e portadoras de
            certas condições crônicas como pressão alta, doenças
            cardiovasculares e diabetes, têm um maior risco de desenvolver a
            forma grave. Pessoas com febre, tosse e dificuldade em respirar
            devem procurar atendimento médico imediato. Deve-se utilizar uma
            máscara como forma de prevenir a dispersão de gotículas
            respiratórias ao tossir, espirrar ou falar, combinando com a lavagem
            ou higienização das mãos. Após o atendimento, deve-se seguir as
            orientações médicas, evitando frequentar ambientes públicos ou mesmo
            de trabalho, buscando permanecer em casa até desaparecimento dos
            sintomas. Isso irá prevenir a propagação de vírus e a ocorrência de
            novas infecções.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Como se transmite?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Expelidas do nariz e da boca quando uma pessoa infectada tosse,
            espirra ou fala, mesmo quando ela apresenta sintomas leves ou não se
            sentem doentes. Essas gotículas podem ficar depositadas em objetos
            ou superfícies por horas, e outras pessoas podem adquirir o vírus ao
            tocar nesses objetos ou superfícies contaminadas e depois tocar nos
            olhos, nariz ou boca. Também podem se infectar ao respirar
            diretamente gotículas respiratórias de uma pessoa infectada quando
            ela tosse ou espirra ou pelo contato direto como toque ou aperto de
            mão. Por isso é importante ficar a mais de 2 metros de distância de
            uma pessoa doente, e lavar as mãos com água e sabão ou álcool gel.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Como se prevenir?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Devem ser adotadas medidas gerais de prevenção e etiqueta
              respiratória, tais como:
            </p>
            <p>
              - Lave regularmente e cuidadosamente as mãos com água e sabão, ou
              higienize-as com álcool-gel 70%. Dessa forma é possível eliminar
              os vírus que possam estar em suas mãos.
            </p>
            <p>
              - Mantenha pelo menos 2 metros de distância entre você e qualquer
              pessoa que esteja tossindo ou espirrando. Dessa forma é possível
              diminuir o risco de respirar gotículas respiratórias que contenham
              vírus, se a pessoa estiver doente.
            </p>
            <p>
              - Evite tocar nos olhos, nariz e boca com as mãos não lavadas.
              Dessa forma pode-se evitar que as mãos que estejam contaminadas
              possam transferir vírus para os olhos, nariz ou boca, deixando-o
              doente.
            </p>
            <p>
              - Certifique-se de que você e as pessoas ao seu redor pratiquem
              uma boa etiqueta respiratória. Isso significa cobrir a boca e o
              nariz com o antebraço ou com um lenço descartável quando tossir ou
              espirrar. Em seguida, descarte o lenço usado imediatamente. Dessa
              forma você protege as pessoas ao seu redor contra vírus como
              resfriado, gripe e COVID-19.
            </p>
            <p>
              - Manter ambientes bem ventilados e evitar o compartilhamento de
              objetos de uso pessoal, com talheres, pratos, copos ou garrafas.
              Com isso você contribui para evitar a disseminação de doenças
              respiratórias.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Quando usar uma máscara?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Use uma máscara, se estiver tossindo ou espirrando para evitar
              transmitir vírus para outras pessoas.
            </p>
            <p>
              Para pessoas saudáveis, use uma máscara somente se você estiver
              cuidando de uma pessoa com suspeita de infecção por coronavírus.
            </p>
            <p>
              As máscaras são eficazes somente quando usadas em combinação com a
              limpeza frequente das mãos com água e sabão ou higienizadas com
              álcool gel 70%.
            </p>
            <p>
              Ao usar uma máscara, deve-se saber como usá-la e descartá-la
              adequadamente.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Como funciona a vigilância e notificação de casos no Brasil?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Todos os casos devem ser registrados por serviços públicos e
              privados de saúde no Brasil, por meio do formulário eletrônico,
              dentro das primeiras 24 horas a partir da suspeita clínica. A
              partir de 01 de março de 2020, passou a vigorar as seguintes
              definições operacionais para a saúde pública nacional.
            </p>
            <p>
              #1. CASO SUSPEITO DE DOENÇA PELO CORONAVÍRUS 2019 (COVID-19)
              SITUAÇÃO 1: Febre E pelo menos um sinal ou sintoma respiratório
              (tosse, dificuldade para respirar, batimento das asas nasais entre
              outros) E histórico de viagem para área com transmissão local, de
              acordo com a OMS, nos últimos 14 dias anteriores ao aparecimento
              dos sinais ou sintomas; OU SITUAÇÃO 2: Febre E pelo menos um sinal
              ou sintoma respiratório (tosse, dificuldade para respirar,
              batimento das asas nasais entre outros) E histórico de contato
              próximo de caso suspeito para o coronavírus (COVID-19), nos
              últimos 14 dias anteriores ao aparecimento dos sinais ou
              sintomas*.
            </p>
            <p>
              #2. CASO PROVÁVEL DE DOENÇA PELO CORONAVÍRUS 2019 (COVID-19)
              Contato próximo domiciliar de caso confirmado laboratorial, que
              apresentar febre E/OU qualquer sintoma respiratório, dentro de 14
              dias após o último contato com o paciente.
            </p>
            <p>
              #3. CASO CONFIRMADO DE DOENÇA PELO CORONAVÍRUS 2019 (COVID-19) A)
              CRITÉRIO LABORATORIAL: Resultado positivo em RT-PCR, pelo
              protocolo Charité. B) CRITÉRIO CLÍNICO-EPIDEMIOLÓGICO: Contato
              próximo domiciliar de caso confirmado laboratorial, que apresentar
              febre E/OU qualquer sintoma respiratório, dentro de 14 dias após o
              último contato com o paciente e para o qual não foi possível a
              investigação laboratorial específica.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Como é feito o diagnóstico?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O diagnóstico do coronavírus é feito por meio da coleta de materiais
            respiratórios de pacientes classificados como casos suspeitos de
            COVID-19. As amostras são encaminhadas para os Laboratórios Centrais
            de Saúde Pública (Lacen) dos Estados para realização de exames de
            biologia molecular para detecção do RNA viral.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Existe vacina, medicamento ou tratamento?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Até o momento, não há vacina disponível contra o COVID-19.</p>
            <p>
              Existe tratamento disponível, que evita o agravamento da doença e
              reduz o desconforto. No entanto, ainda não há medicamento
              específico para eliminar o coronavírus.
            </p>
            <p>
              A grande maioria dos casos são autolimitados, ou seja, são curados
              espontaneamente. Segundo a Organização Mundial da Saúde, cerca de
              80% dos casos são leves. A maior preocupação é quando a doença
              atinge idosos ou pessoas com doenças crônicas (hipertensão,
              doenças cardíacas, diabetes, etc), nas quais o risco de
              complicações aumenta. Pessoas com quadro grave da doença devem ser
              hospitalizadas.
            </p>
            <p>
              Os casos graves devem ser encaminhados a um Hospital de Referência
              para isolamento e tratamento. Os casos leves devem ser
              acompanhados pela Atenção Primária em Saúde (APS) e instituídas
              medidas de precaução domiciliar.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(Help));
