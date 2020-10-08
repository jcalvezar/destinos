import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Cuadro from './Cuadro';
//import Deposits from './Deposits';
//import Orders from './Orders';
//import Title from './Title';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Administrador() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
  return (
          <Grid container spacing={3}>
            {/* Usuarios */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Cuadro titulo="Usuarios" />
              </Paper>
            </Grid>
            
            {/* Secciones */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Cuadro titulo="Secciones" />
              </Paper>
            </Grid>

            {/* Roles */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Cuadro titulo="Roles" />
              </Paper>
            </Grid>

            {/* Bitacora */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Cuadro titulo="Bitacora" />
              </Paper>
            </Grid>

          </Grid>
  );
}