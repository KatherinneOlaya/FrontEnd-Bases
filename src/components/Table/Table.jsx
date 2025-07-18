import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

export default function BasicTable() {
  const [rows, setRows] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/ordenes-recientes')
    .then(res => res.json())
    .then(data => {
      console.log("Datos recibidos del backend:", data); // <---- AGREGA ESTO
      setRows(data);
    });
}, []);


  return (
    <div className="Table">
      <h3>Ordenes recientes</h3>
      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="left">Id Orden</TableCell>
              <TableCell align="left">Precio&nbsp;($)</TableCell>
              <TableCell align="left">Dirección</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={row.ID_Orden || idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{row.Nombre_Plato}</TableCell>
                <TableCell align="left">{row.ID_ORDEN}</TableCell>
                <TableCell align="left">{row.PRECIO_PLATO}</TableCell>
                <TableCell align="left">{row.DIRECCION_PEDIDO}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}