// backend/services/participants.service.js

require('dotenv').config(); // Cargar las variables del archivo .env

const { Pool } = require('pg');

// Usar la URL de conexión completa desde .env sin SSL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Usar la URL completa del .env
  // No se requiere 'ssl' en la configuración local
});

// Obtener todos los estudiantes registrados
async function getAllparticipants() {
  const query = 'SELECT * FROM participants'; // Obtener todos los estudiantes sin filtro
  try {
    const result = await pool.query(query);
    return result.rows; // Retorna todos los estudiantes
  } catch (error) {
    console.error('Error en la consulta SQL:', error);
    throw error; // Lanza el error para manejarlo en el controlador
  }
}

module.exports = { getAllparticipants };
