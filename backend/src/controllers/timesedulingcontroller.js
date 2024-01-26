

import Timeslot from '../models/timeslot.js';

// Controller to create a new appointment
const createAppointment = async (req, res) => {
  try {
    const { labelText, selectedDate } = req.body;
    const interval = 20; // Interval in minutes
    const startTime = new Date(`2000-01-01 09:00`);
    const endTime = new Date(`2000-01-01 16:00`);

    const timeSlots = [];
    let current = startTime;

    while (current <= endTime) {
      timeSlots.push(current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      current = new Date(current.getTime() + interval * 60000);
    }

    // Create a new appointment with populated time slots
    const appointment = new Timeslot({
      labelText,
      selectedDate,
      timeSlots,
    });

    // Save the appointment to the database
    await appointment.save();

    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default createAppointment;
