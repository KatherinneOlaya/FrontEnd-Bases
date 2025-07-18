const express = require('express');
const mysql = require('mysql');

const app = express()
const PORT  = 3001

const DB = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password: '',
    database: 'bases_datos'
}
);

DB.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a MySQL');
});



// PETICION GET

app.get('/ordenes-recientes', (req, res) => {
  const query = `
    SELECT
      p.NOMBRE_PLATO AS producto,
      po.ID_ORDEN AS id,
      po.CANTIDAD AS ventas,
      sp.PRECIO_PLATO AS precio,
      CASE
        WHEN sp.PRECIO_PLATO > 0 THEN 'En Stock'
        ELSE 'Sin Stock'
      END AS estado
    FROM PLATO p
    JOIN PLATO_ORDEN po ON p.ID_PLATO = po.ID_PLATO
    JOIN SEDE_PLATO sp ON sp.ID_PLATO = p.ID_PLATO
    LIMIT 5;
  `;

  DB.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la consulta' });
    res.json(results);
  });
});