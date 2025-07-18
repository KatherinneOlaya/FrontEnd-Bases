const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3001; // Usa este puerto para el backend, NO 3306
app.use(cors());

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RPDrfc87',
  database: 'bases_datos'
});

DB.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
    return;
  }
  console.log('✅ Conexión exitosa a MySQL');
});

// TEST CONNECTION ENDPOINT
app.get('/test', (req, res) => {
  DB.query('SELECT "Hola desde MySQL" AS mensaje', (err, results) => {
    if (err) {
      console.error('❌ Error en la consulta de prueba:', err);
      return res.status(500).json({ error: 'Error en la prueba de conexión' });
    }
    res.json(results[0]);
  });
});

// ORDENES RECIENTES
app.get('/ordenes-recientes', (req, res) => {
  const query = `
    SELECT P.NOMBRE_PLATO AS Nombre_Plato, O.ID_ORDEN, S_P.PRECIO_PLATO, O.DIRECCION_PEDIDO
    FROM ((ORDEN AS O 
      INNER JOIN PLATO_ORDEN AS P_O ON O.ID_ORDEN = P_O.ID_ORDEN AND O.ID_SEDE = P_O.ID_SEDE)
      INNER JOIN SEDE_PLATO AS S_P ON S_P.ID_PLATO = P_O.ID_PLATO AND S_P.ID_SEDE = P_O.ID_SEDE)
      INNER JOIN PLATO AS P ON P.ID_PLATO = S_P.ID_PLATO 
    ORDER BY O.FECHA_ORDEN DESC 
    LIMIT 3;
  `;

  DB.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error en la consulta de órdenes recientes:', err);
      return res.status(500).json({ error: 'Error en la consulta' });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});
