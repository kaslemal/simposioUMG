// src/app.js
require('dotenv').config(); // Para leer .env
const express = require('express');
const app = express();
const alumnosRoutes = require('./routes/alumnosRoutes');

// Middleware para leer JSON en las peticiones
app.use(express.json());

// Rutas
app.use('/api/alumnos', alumnosRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
