// // ticketRoutes.js
// import express from 'express';
// import bookAppointment from '../controllers/ticketControllers.js';

// const router = express.Router();

// // Handle POST requests to create a new ticket
// router.post('/', bookAppointment);

// export default router;





// routes/ticketRoutes.js

import express from 'express';
import {bookAppointment} from '../controllers/ticketControllers.js';
import { getBookedTimeSlots } from '../controllers/ticketControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const router = express.Router();

// Handle POST requests to create a new ticket
router.post('/',authMiddleware, bookAppointment);

// Handle GET requests to get booked time slots for a specific date

router.get('/booked/:selectedDate', getBookedTimeSlots);

export default router;
