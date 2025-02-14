// src/routes/alumnosRoutes.js
const express = require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnosController');

// POST -> Crear
router.post('/', alumnosController.createAlumno);
// GET -> Listar todos
router.get('/', alumnosController.getAllAlumnos);
// GET -> Obtener uno por ID
router.get('/:id', alumnosController.getAlumnoById);
// PUT -> Actualizar
router.put('/:id', alumnosController.updateAlumno);
// DELETE -> Eliminar
router.delete('/:id', alumnosController.deleteAlumno);

module.exports = router;
