// routes/appointmentRoutes.js
const express = require('express');
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const router = express.Router();

// Route to create a new appointment
router.post('/', createAppointment);

// Route to get all appointments (optional)
router.get('/', getAppointments);

module.exports = router;
