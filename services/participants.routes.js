// backend/services/participants.routes.js

const express = require('express');
const { getAllparticipants } = require('./participants.service');
const router = express.Router();

// Ruta para obtener todos los estudiantes registrados
router.get('/', async (req, res) => {
    try {
      const participants = await getAllparticipants();
      res.json(participants); // Devuelve todos los estudiantes
    } catch (error) {
      console.error("Error al obtener estudiantes:", error); // Mostrar detalles del error
      res.status(500).json({ error: 'Error al obtener estudiantes.' });
    }
  });

module.exports = router;
