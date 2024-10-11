const express = require('express');
const Appointment = require('../models/Appointment'); // Ensure you have the Appointment model imported
const router = express.Router();

// Route to get available time slots for a specific date
router.get('/available-times', async (req, res) => {
  const { date } = req.query; // Expect date in query parameters

  try {
    const bookedAppointments = await Appointment.find({ date: new Date(date) });
    const bookedTimes = bookedAppointments.map(app => app.time);

    // Filter out booked times from the available time slots
    const allTimeSlots = ["10 PM (UTC+5)", "11 PM (UTC+5)", "12 AM (UTC+5)", "1 AM (UTC+5)", "2 AM (UTC+5)", "3 AM (UTC+5)"];
    const availableTimes = allTimeSlots.filter(time => !bookedTimes.includes(time));

    res.json({ availableTimes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
