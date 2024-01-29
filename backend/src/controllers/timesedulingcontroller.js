// createAppointment controller
import Timeslot from '../models/timeslot.js';

const createAppointment = async (req, res) => {
  try {
    const { labelText, selectedDate, selectedTimeSlots } = req.body;

    // Create a new appointment with selected time slots
    const appointment = new Timeslot({
      labelText,
      selectedDate, // Assuming selectedDate is in the format 'YYYY-MM-DD'
      timeSlots: selectedTimeSlots,
    });

    // Save the appointment to the database
    await appointment.save();

    console.log('Appointment saved successfully');
    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default createAppointment;
