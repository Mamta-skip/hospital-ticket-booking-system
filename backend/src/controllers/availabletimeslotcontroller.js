import Timeslot from "../models/timeslot.js";
const getAvailableTimeSlots = async (req, res) => {
  try {
    const { selectedDate } = req.params;
    console.log('Received selectedDate:', selectedDate);

    // Check if selectedDate is a valid date string
    const selectedDateObject = new Date(selectedDate);
    if (isNaN(selectedDateObject.getTime())) {
      console.error('Invalid date format');
      return res.status(400).json({ error: 'Invalid date format' });
    }

    // Find the appointment for the specified date and time
    const appointment = await Timeslot.findOne({
      selectedDate: selectedDateObject,
    }).sort({ selectedDate: 1 });

    if (!appointment) {
      console.log('No appointment found for the selected date');
      return res.status(404).json({ message: 'No appointments found for the selected date' });
    }

    // Log the fetched appointment to check if it's getting retrieved correctly
    console.log('Fetched appointment:', appointment);

    // Return the available time slots
    res.status(200).json({ timeSlots: appointment.timeSlots });
  } catch (error) {
    console.error('Error in getAvailableTimeSlots:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getAvailableTimeSlots;
