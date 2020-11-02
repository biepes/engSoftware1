import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect, useState } from "react";
// Gerenciamento de Estado
import { connect } from "react-redux";
// Routes
import { withRouter } from "react-router-dom";

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
const CasosRegiao = () => {
  const classes = useStyles();

  const [dataGeral, setdataGeral] = useState({
    confirmados: { total: 0 },
    obitos: { total: 0 },
  });

  const [dataRegioes, setDataRegioes] = useState([
    {
      _id: "Centro-Oeste",
      listaMunicipios: [{ _id: "", casosAcumulado: 0, obitosAcumulado: 0 }],
    },
  ]);

  useEffect(() => {
    const getInfo = async (targetUrl) => {
      var proxyUrl = "https://cors-anywhere.herokuapp.com/";
      return await fetch(proxyUrl + targetUrl)
        .then((blob) => blob.json())
        .then((data) => {
          return data;
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    };

    const getGeral = async () => {
      const data = await getInfo(
        "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi"
      );
      setdataGeral(data);
    };
    getGeral();

    const getRegioes = async () => {
      let data = await getInfo(
        "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalSintese"
      );
      data.shift();
      setDataRegioes(data);
    };
    getRegioes();
  }, []);

  return (
    <React.Fragment>
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <h1>Brasil</h1>
          <h3>Casos confirmados: {dataGeral.confirmados.total}</h3>
          <h3>Obitos: {dataGeral.obitos.total}</h3>
        </Paper>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Estado</TableCell>
              <TableCell align="right">Região</TableCell>
              <TableCell align="right">Casos</TableCell>
              <TableCell align="right">Óbitos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRegioes.map((regiao) =>
              regiao.listaMunicipios.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell align="right">{regiao._id}</TableCell>
                  <TableCell align="right">{row.casosAcumulado}</TableCell>
                  <TableCell align="right">{row.obitosAcumulado}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(CasosRegiao));
