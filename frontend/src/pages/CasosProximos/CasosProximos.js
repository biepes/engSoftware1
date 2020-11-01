import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
// Gerenciamento de Estado
import { connect } from "react-redux";
// Routes
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import api from "../../services/api";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
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
}));
const CasosProximos = () => {
  const classes = useStyles();
  const cookies = new Cookies();
  const [casosConfirmados, setCasosConfirmados] = useState(0);
  const [casosSuspeitos, setCasosSuspeitos] = useState(0);
  const [casosDescartados, setCasosDescartados] = useState(0);

  useEffect(() => {
    const getCasos = async () => {
      const nearby = await api.get("/nearbycases", {
        params: {
          session: cookies.get("session"),
        },
      });
      setCasosConfirmados(nearby.data.confirmados);
      setCasosSuspeitos(nearby.data.suspeitos);
      setCasosDescartados(nearby.data.descartados);
    };
    getCasos();
  }, []);

  return (
    <React.Fragment>
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          Casos confirmados: {casosConfirmados}
        </Paper>
        <Paper className={classes.paper}>
          Casos suspeitos: {casosSuspeitos}
        </Paper>
        <Paper className={classes.paper}>
          Casos descartados: {casosDescartados}
        </Paper>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(CasosProximos));
