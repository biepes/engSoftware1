import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Gerenciamento de Estado
import { connect } from 'react-redux';
import { setIsAuthenticated } from '../actions';
import Cookies from 'universal-cookie';

// Routes
import { withRouter } from 'react-router-dom';

import api from '../services/api'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Login = ({setIsAuthenticated, history}) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const cookies = new Cookies();
  useEffect(() => {
    const verifysession = async () => {
      const response = await api.get('/verifysession', {
        params: {
          'session': cookies.get('session')
        },
      })

      if (response.data) {
        setIsAuthenticated(true);
        history.push('/app')
      } else {
        setIsAuthenticated(false);
      }
    }
    verifysession()
    
  }, [])

  const doLogin = async () => {
    const response = await api.post('/createsession', {
      username: username,
      senha: password
    })

    if (response.data) {
      cookies.set('session',response.data.session, {path: '/'})
      await setIsAuthenticated(true);
      history.push('/app/home')
    } else {
      setError(true)
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuário"
            name="username"
            error={error}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={doLogin}
            className={classes.submit}
          >
            Fazer Login
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="#/signup" variant="body2">
                {"Criar Conta"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  setIsAuthenticated: (isAuthenticated) => dispatch(setIsAuthenticated(isAuthenticated)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));