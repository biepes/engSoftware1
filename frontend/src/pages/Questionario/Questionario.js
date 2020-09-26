import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './SintomasGerais.js';
import PaymentForm from './PaymentForm';
import Review from './Review';

import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Gerenciamento de Estado
import { connect } from 'react-redux';
import { setIsAuthenticated } from '../../actions';
// Routes
import { withRouter } from 'react-router-dom';

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

const stepsComponents = {0: [
  'difRespirar',
  'dorGarganta',
  'febre',
  'tosse'
],
1: [
  'a',
  'a',
  'a',
  'tosse'
],
2: [
  'b',
  'b',
  'b',
  'tosbse'
]}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const Questionario = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [sintomasGerais, setSintomasGerais] = useState({
    difRespirar: false,
    dorGarganta: false,
    febre: false,
    tosse: false,
  });
  const [comorbidades, setComorbidades] = useState([]);
  const [sintomasEspecificos, setSintomasEspecificos] = useState([]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Questionario
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
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {stepsComponents[activeStep].map((label) => (
                  <Grid key={label} item xs={12}>
                    <FormControlLabel
                      // control={<Checkbox color="secondary" name="difRespirar" value={sintomasGerais['difRespirar']} onChange={(event) => {setSintomasGerais({...sintomasGerais, difRespirar: event.target.checked})}} />}
                      label={label}
                    />
                  </Grid>
                ))}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </main>
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