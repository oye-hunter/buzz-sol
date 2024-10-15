const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

router.get('/available-times', async (req, res) => {
  const { date } = req.query;

  try {
    const bookedAppointments = await Appointment.find({ date: new Date(date) });
    const bookedTimes = bookedAppointments.map(app => app.time);

    const allTimeSlots = ["10 PM (UTC+5)", "11 PM (UTC+5)", "12 AM (UTC+5)", "1 AM (UTC+5)", "2 AM (UTC+5)", "3 AM (UTC+5)"];
    const availableTimes = allTimeSlots.filter(time => !bookedTimes.includes(time));

    res.json({ availableTimes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
