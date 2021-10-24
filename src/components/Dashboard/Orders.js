import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, link, amount) {
  return { id, date, name, link, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2020',
    'Transmission and Distribution',
    'Transmission-and-distribution.csv',
    312.44,
  ),
  createData(
    1,
    '19 Jun, 2020',
    'Business and Travel - air & sea',
    'Business-travel.csv',
    866.99,
  ),
  createData(
    2,
    '08 Jul, 2020',
    'Water Supply',
    'water-supply.csv',
    94.39,
  ),  createData(
    3,
    '11 Sept, 2020',
    'UK Electricity',
    'electricity-uk.csv',
    1294.39,
  ),
  createData(
    4,
    '08 Oct, 2020',
    'Material Use',
    'material-use.csv',
    79.88,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Data upload history</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Link to file</TableCell>
            <TableCell align="right">tCO2e</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.link}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more history
      </Link>
    </React.Fragment>
  );
}
