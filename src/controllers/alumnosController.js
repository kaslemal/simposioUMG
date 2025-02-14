// src/controllers/alumnosController.js
const Alumno = require('../models/alumnoModel');

// Crear alumno
exports.createAlumno = async (req, res) => {
  try {
    const result = await Alumno.create(req.body);
    // result.insertId: el ID autogenerado
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el alumno' });
  }
};

// Obtener todos
exports.getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.getAll();
    res.status(200).json(alumnos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los alumnos' });
  }
};

// Obtener por ID
exports.getAlumnoById = async (req, res) => {
  try {
    const alumno = await Alumno.getById(req.params.id);
    if (!alumno) {
      return res.status(404).json({ error: 'Alumno no encontrado' });
    }
    res.status(200).json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el alumno' });
  }
};

// Actualizar
exports.updateAlumno = async (req, res) => {
  try {
    const result = await Alumno.update(req.params.id, req.body);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Alumno no encontrado' });
    }
    res.status(200).json({ message: 'Alumno actualizado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el alumno' });
  }
};

// Eliminar
exports.deleteAlumno = async (req, res) => {
  try {
    const result = await Alumno.delete(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Alumno no encontrado' });
    }
    res.status(200).json({ message: 'Alumno eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el alumno' });
  }
};
