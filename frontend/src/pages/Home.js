import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from "react";
// Gerenciamento de Estado
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(4),
      width: theme.spacing(40),
      height: theme.spacing(30),
    },
  },
  paper: {
    display: 'flex',
    justifyContent:'center',
    height: '100%'
  },
  tip: {
    alignSelf: 'center'
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.links}>
      <Link href="#/app/questionario">
        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.tip} component="h1" variant="h6">
            Questionário
          </Typography>
        </Paper>
      </Link>
      <Link href="#/app/casosproximos">
        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.tip} component="h1" variant="h6">
            Casos Próximos
          </Typography>
        </Paper>
      </Link>
      <Link href="#/app/casosregiao">
        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.tip} component="h1" variant="h6">
            Casos Por Região
          </Typography>
        </Paper>
      </Link>
      <Link href="#/app/hospitais">
        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.tip} component="h1" variant="h6">
            Hospitais
          </Typography>
        </Paper>
      </Link>
      <Link href="#/app/help">
        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.tip} component="h1" variant="h6">
            Help
          </Typography>
        </Paper>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(Home));
