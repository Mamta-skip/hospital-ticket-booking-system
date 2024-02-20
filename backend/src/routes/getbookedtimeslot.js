import express from 'express';
 import  {getBookedTimeSlots}  from '../controllers/ticketControllers.js';

const router = express.Router();



// Handle GET requests to get booked time slots for a specific date

router.get('/booked/:date', getBookedTimeSlots);


export default router;