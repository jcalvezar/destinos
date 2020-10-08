import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
//import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>

    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Destinos" />
    </ListItem>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
  </div>
);