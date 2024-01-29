import Ticket from '../models/ticketModels.js';

const bookAppointment = async (req, res) => {
  try {
    const {
      department,
      name,
      email,
      phone,
      sex,
      age,
      date,
      timeSlot,
      bloodgroup,
    } = req.body;

    // You may want to perform additional validation here

    const newTicket = new Ticket({
      department,
      name,
      email,
      phone,
      sex,
      age,
      date,
      timeSlot,
      bloodgroup,
    });

    const savedTicket = await newTicket.save();

    res.status(201).json(savedTicket);
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default bookAppointment;
