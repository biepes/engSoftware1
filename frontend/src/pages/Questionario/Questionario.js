import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Cookies from 'universal-cookie';

// Gerenciamento de Estado
import { connect } from 'react-redux';
import { setIsAuthenticated } from '../../actions';
// Routes
import { withRouter } from 'react-router-dom';

import api from '../../services/api'
import Respostas from './respostas'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Sintomas gerais', 'Comorbidades', 'Sintomas especificos'];

const stepsComponents = {
0: [
  ['difRespirar', 'Dificuldade de Respirar'],
  ['dorGarganta', 'Dor de Garganta'],
  ['febre', 'Febre'],
  ['tosse', 'Tosse']
],
1: [
  ['diabetes', 'Diabetes'],
  ['doencaCardiaca', 'Doença Cardíaca'],
  ['doencaRenal', 'Doença Renal Crônica'],
  ['doencaRespiratoria', 'Doença Respiratória Crônica'],
  ['pressaoAlta', 'Pressão Alta']

],
2: [
  ['bocaOuDedoRoxo', 'Boca ou ponta dos dedos roxa'],
  ['palidez', 'Palidez'],
  ['pressaoBaixa', 'Pressão baixa'],
  ['respiracaoRapida', 'Respirando muito rápido'],
  ['desmaio', 'Sensação de desmaio'],
]}

const stepsComponentsTime = [
  ['today','Hoje'],
  ['oneToSeven','1 a 7 dia(s)'],
  ['eightToFourTeen', '8 a 14 dias'],
  ['moreFourTeen', 'Mais de 14 dias']
]

const Questionario = () => {
  const classes = useStyles();
  const [resposta, setResposta] = useState(1)
  const [activeStep, setActiveStep] = useState(0);
  const [questoes, setQuestoes] = useState({
    0: {
    difRespirar: false,
    dorGarganta: false,
    febre: false,
    tosse: false,
    tempo: {
      today: false,
      oneToSeven: false,
      eightToFourTeen: false,
      moreFourTeen: false
    }
  },
  1: {
    diabetes: false,
    doencaCardiaca: false,
    doencaRenal: false,
    doencaRespiratoria: false,
    pressaoAlta: false
  },
  2: {
    bocaOuDedoRoxo: false,
    palidez: false,
    pressaoBaixa: false,
    respiracaoRapida: false,
    desmaio: false
  }})

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const titulo = (title0, title1, title2) => {
    if (activeStep === 0) {
      return(
        <Typography variant="h6" gutterBottom>
          {title0}
        </Typography>
      )
    }
    if (activeStep === 1) {
      return(
        <Typography variant="h6" gutterBottom>
          {title1}
        </Typography>
      )
    }
    if (activeStep === 2) {
      return(
        <Typography variant="h6" gutterBottom>
          {title2}
        </Typography>
      )
    }
  }

  useEffect(() => {
    if (activeStep === steps.length) {
      respostaQuestionario();
    }
  }, [activeStep])
  const cookies = new Cookies();
  const respostaQuestionario = async () => {
    const res = await api.post('/question', {
      sintomasGerais: questoes[0],
      comorbidades: questoes[1],
      sintomasEspecificos: questoes[2],
      session: cookies.get('session')
    })
    await setResposta(res.data)
  }

  return (
    <React.Fragment>
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Questionário
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Respostas resposta={resposta} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                
                {titulo('Quais sintomas está sentindo?', 'Possui alguma dessas doenças?', 'Possui outros sinais e/ou sintomas?')}
                {stepsComponents[activeStep].map((label, index) => (
                  <Grid key={index} item xs={12}>
                    <FormControlLabel
                      control={<Checkbox color="secondary" name={label[0]} checked={questoes[activeStep][label[0]]} onChange={(event) => {setQuestoes({...questoes, [activeStep]: {...questoes[activeStep], [event.target.name]: event.target.checked}})}} />}
                      label={label[1]}
                    />
                  </Grid>
                ))}
                {titulo('Há quanto tempo sente esse(s) sintoma(s)?')}
                {stepsComponentsTime.map((label, index) => {
                  if (activeStep === 0){
                    return(
                      <Grid key={index} item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox color="secondary" name={label[0]} 
                            checked={questoes[activeStep]['tempo'][label[0]]} 
                            onChange={async (event) => {
                              setQuestoes({...questoes, [activeStep]: {...questoes[activeStep], tempo: { 
                                today: false,
                                oneToSeven: false,
                                eightToFourTeen: false,
                                moreFourTeen: false,
                                [event.target.name]: event.target.checked }}})
                              }} 
                          />}
                          label={label[1]}
                        />
                      </Grid>
                    )
                    
                  }
                })}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Anterior
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Encerrar Questionário' : 'Próximo'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </div>
    </React.Fragment>
  );
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
});
  
const mapDispatchToProps = (dispatch) => ({
setIsAuthenticated: (isAuthenticated) => dispatch(setIsAuthenticated(isAuthenticated)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questionario));