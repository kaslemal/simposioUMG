// src/models/alumnoModel.js
const db = require('../config/db');

const Alumno = {
  async create(data) {
    const sql = `INSERT INTO alumnos 
      (carnet_parte1, carnet_parte2, carnet_parte3, primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, telefono, correoElectronico, fechaNacimiento)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await db.execute(sql, [
      data.carnet_parte1,
      data.carnet_parte2,
      data.carnet_parte3,
      data.primerNombre,
      data.segundoNombre,
      data.apellidoPaterno,
      data.apellidoMaterno,
      data.telefono,
      data.correoElectronico,
      data.fechaNacimiento
    ]);
    return result;
  },

  async getAll() {
    const [rows] = await db.execute(`SELECT * FROM alumnos`);
    return rows;
  },

  async getById(id) {
    const [rows] = await db.execute(`SELECT * FROM alumnos WHERE id = ?`, [id]);
    return rows[0];
  },

  async update(id, data) {
    const sql = `UPDATE alumnos SET
      carnet_parte1 = ?,
      carnet_parte2 = ?,
      carnet_parte3 = ?,
      primerNombre = ?,
      segundoNombre = ?,
      apellidoPaterno = ?,
      apellidoMaterno = ?,
      telefono = ?,
      correoElectronico = ?,
      fechaNacimiento = ?
      WHERE id = ?`;
    const [result] = await db.execute(sql, [
      data.carnet_parte1,
      data.carnet_parte2,
      data.carnet_parte3,
      data.primerNombre,
      data.segundoNombre,
      data.apellidoPaterno,
      data.apellidoMaterno,
      data.telefono,
      data.correoElectronico,
      data.fechaNacimiento,
      id
    ]);
    return result;
  },

  async delete(id) {
    const [result] = await db.execute(`DELETE FROM alumnos WHERE id = ?`, [id]);
    return result;
  }
};

module.exports = Alumno;
