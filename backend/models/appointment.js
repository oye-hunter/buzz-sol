// models/Appointment.js
const mongoose = require('mongoose');

// Define the Appointment schema
const appointmentSchema = new mongoose.Schema({
  
  serviceName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  note: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true
  }
});

// Create the Appointment model
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
