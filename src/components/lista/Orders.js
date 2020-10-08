import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, address, client, amount) {
  return { id, date, name, shipTo, address, client, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'Corcega 4431', 'Bill Clinton', '07:00'),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'Corcega 4431', 'Barak Obama', '08:00'),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'Corcega 4431', 'George W. Bush', '09:00'),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'Corcega 4431', 'Donald Trump', '10:00'),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'Corcega 4431', 'Ronald Reagan', '11:00'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Proximos Viajes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Hora</TableCell>
            <TableCell>Viajante</TableCell>
            <TableCell>Localidad/Provincia</TableCell>
            <TableCell>Dirección</TableCell>
            <TableCell align="right">Cliente</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell align="right">{row.client}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Descargar Excel
        </Link>
      </div>
    </React.Fragment>
  );
}