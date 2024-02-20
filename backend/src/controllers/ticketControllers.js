// import Ticket from '../models/ticketModels.js';

// const bookAppointment = async (req, res) => {
//   try {
//     const {
//       department,
//       name,
//       email,
//       phone,
//       sex,
//       age,
//       date,
//       timeSlot,
//       bloodgroup,
//     } = req.body;

//     // You may want to perform additional validation here

//     const newTicket = new Ticket({
//       department,
//       name,
//       email,
//       phone,
//       sex,
//       age,
//       date,
//       timeSlot,
//       bloodgroup,
//     });

//     const savedTicket = await newTicket.save();

//     res.status(201).json(savedTicket);
//   } catch (error) {
//     console.error('Error booking appointment:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
// export default bookAppointment;



// controllers/ticketControllers.js

import Ticket from '../models/ticketModels.js';

// Function to book a new appointment
export const bookAppointment = async (req, res) => {
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

// Function to get booked time slots for a specific date
export const getBookedTimeSlots = async (req, res) => {
  try {
    const { date } = req.params;

    // Convert date to a Date object
    const formattedDate = new Date(date);

    // Find all tickets for the specified date and select only the timeSlot field
    const bookedSlots = await Ticket.find({ date: formattedDate }).select('timeSlot');

    res.status(200).json({ bookedSlots });
  } catch (error) {
    console.error('Error fetching booked time slots:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
