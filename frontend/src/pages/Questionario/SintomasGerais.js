import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  const [sintomasGerais, setSintomasGerais] = useState({
    difRespirar: false,
    dorGarganta: false,
    febre: false,
    tosse: false,
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sintomas Gerais
      </Typography>
      <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="difRespirar" value={sintomasGerais['difRespirar']} onChange={(event) => {setSintomasGerais({...sintomasGerais, difRespirar: event.target.checked})}} />}
            label="Dificuldade de Respirar"
          />
      </Grid>
      <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="dorGarganta" value={sintomasGerais['dorGarganta']} onChange={(event) => {setSintomasGerais({...sintomasGerais, dorGarganta: event.target.checked})}} />}
              
            label="Dor de Garganta"
          />
      </Grid>
      <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="febre" value={sintomasGerais['febre']} onChange={(event) => {setSintomasGerais({...sintomasGerais, febre: event.target.checked})}} />}
            label="Febre"
          />
      </Grid>
      <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="tosse" value={sintomasGerais['tosse']} onChange={(event) => {setSintomasGerais({...sintomasGerais, tosse: event.target.checked})}} />}
            label="Tosse"
          />
      </Grid>
    </React.Fragment>
  );
}