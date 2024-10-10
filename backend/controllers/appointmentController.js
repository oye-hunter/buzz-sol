// controllers/appointmentController.js
const Appointment = require('../models/Appointment');

// Controller to create a new appointment
const createAppointment = async (req, res) => {
  const { serviceName, name, email, phoneNumber, note, date, time, amount } = req.body;

  try {
    // Create a new appointment document
    const newAppointment = new Appointment({
      serviceName,
      name,
      email,
      phoneNumber,
      note,
      date,
      time,
      amount
    });

    // Save the appointment to the database
    await newAppointment.save();

    // Respond with the created appointment
    res.status(201).json({ message: 'Appointment created successfully', newAppointment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Controller to get all appointments (optional)
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  createAppointment,
  getAppointments
};
