import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
//import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Lista from '../lista/Lista';
import Tabla from '../tabla/Tabla';
import Mapa from '../mapa/Mapa';
//import Calendario from '../calendario/Calendario';
//import Calendario from '../calendario/Calendario';
import Calendario from '../Calendar/Calendar';
import MaterialUIPickers from '../selectores/Selectores';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
	<Box p={0}>
            {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
}));

export default function Nota() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [texto, setTexto] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleTextoChange = (newValue) => {
      setTexto(newValue);
  }

  return (
    <div className={classes.root}>
      <Paper style={{marginBottom: 20,}}>
        <MaterialUIPickers />
      </Paper>
      <Paper square>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Lista" {...a11yProps(0)} />
          <Tab label="Calendario" {...a11yProps(1)} />
          <Tab label="Mapa" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Tabla />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Calendario />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Mapa />
      </TabPanel>
    </div>
  );
}
