import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/material';
import './Table.css'

function createData(Hamburguesa, Id, Ventas, Precio, Estado) {
  return { Hamburguesa, Id, Ventas, Precio, Estado };
}

/* ESTO TENGO QUE CAMBIARLO EN LA BASE DE DATOS */
const rows = [
  createData('El Chato', 1, 8, 32, 'En Stock'),
  createData('El Amado', 2, 10, 40, 'Sin Stock'),
  createData('El Parrillero', 3, 11.2, 38, 'En Stock'),
  
];

const makeStyle=(Status)=>{
    if(Status == 'En Stock')
    {
        return {
            background : ('rgb(145 254 159 / 47%'),
            color : 'green'
        }
    }
    else if(Status == 'Sin Stock')
    {
    return {
        background : '#ffadad8f',
        color : 'red'
    }
}
    else 
    {
    return {
        background : '#59bfff',
        color : 'white'
    }
}
}

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Ordenes recientes</h3>

      <TableContainer component={Paper}
      style={{boxShadow : '0px 13px 20px 0px #80808029'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
  <TableRow>
    <TableCell>Producto</TableCell>
    <TableCell align="left">Id</TableCell>
    <TableCell align="left">Ventas</TableCell>
    <TableCell align="left">Precio&nbsp;($)</TableCell>
    <TableCell align="left">Estado</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {rows.map((row) => (
    <TableRow key={row.Id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">{row.Hamburguesa}</TableCell>
      <TableCell align="left">{row.Id}</TableCell>
      <TableCell align="left">{row.Ventas}</TableCell>
      <TableCell align="left">{row.Precio}</TableCell>
      <TableCell align="left">
        <span className="Estado" style={makeStyle(row.Estado)}>{row.Estado}</span>
      </TableCell>
      <TableCell align = 'left' className="Details">Details</TableCell>
    </TableRow>
  ))}
</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
