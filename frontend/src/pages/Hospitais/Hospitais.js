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
import api from "../../services/api";

const useStyles = makeStyles((theme) => ({
  table: {
      maxHeight: theme.spacing(100)
  }
}));
const Hospitais = () => {
  const classes = useStyles();
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const getCasos = async () => {
        const response = await api.get("/hospitals");
        setHospitals(response.data)
    };
    getCasos();
  }, []);

  return (
    <React.Fragment>
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>UF</TableCell>
              <TableCell align="right">Cidade</TableCell>
              <TableCell align="right">Hospital</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hospitals.map((regiao) => (
              <TableRow key={regiao._id}>
                <TableCell component="th" scope="row">
                  {regiao.uf}
                </TableCell>
                <TableCell align="right">{regiao.cidade}</TableCell>
                <TableCell align="right">{regiao.hospital}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(Hospitais));
