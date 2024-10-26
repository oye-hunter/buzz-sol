const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

router.get('/available-times', async (req, res) => {
  const { date } = req.query;
  const currentTime = new Date();

  try {
    // Fetch booked appointments for the given date
    const bookedAppointments = await Appointment.find({ date: new Date(date) });
    const bookedTimes = bookedAppointments.map(app => app.time);

    const allTimeSlots = ["10 PM (UTC+5)", "11 PM (UTC+5)", "12 AM (UTC+5)", "1 AM (UTC+5)", "2 AM (UTC+5)", "3 AM (UTC+5)"];

    const availableTimes = allTimeSlots.filter(time => {
      // Check if the slot is booked
      if (bookedTimes.includes(time)) return false;

      // Parse time slot and compare with current time to exclude past slots
      const [timeHour, timePeriod] = time.split(" ");
      let hour = parseInt(timeHour);
      hour = timePeriod === "PM" && hour !== 12 ? hour + 12 : hour === 12 && timePeriod === "AM" ? 0 : hour; // Adjust 12-hour format to 24-hour

      const slotTime = new Date(date);
      slotTime.setHours(hour, 0, 0, 0);

      return slotTime > currentTime;
    });

    res.json({ availableTimes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
