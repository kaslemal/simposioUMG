// backend/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const verifyRoutes = require('./services/verification/verify.routes');
const checkinRoutes = require('./services/checkin/checkin.routes');
const certRoutes = require('./services/certificate/cert.routes');
const participantsRoutes = require('./services/participants.routes');  // Asegúrate de importar las rutas

// Rutas
const authRoutes = require('./services/auth/auth.routes');
const publicRegisterRoutes = require('./services/public-register/public.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dashboardRoutes = require('./services/dashboard/dashboard.routes');

// Servir archivos subidos
app.use('/uploads', express.static('uploads'));

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/public', publicRegisterRoutes);
app.use('/api/verify', verifyRoutes);
app.use('/api/checkin', checkinRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/cert', certRoutes);

// Usar las rutas de estudiantes con un prefijo '/api/participants'
app.use('/api/participants', participantsRoutes);  // El prefijo ya se agrega aquí

const adminRoutes = require('./services/admin-participants/admin.routes');
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
