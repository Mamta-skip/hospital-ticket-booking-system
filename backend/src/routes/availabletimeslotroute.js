// routes/clientRoutes.js
import express from 'express';

// availabletimeslotroute.js
import getAvailableTimeSlots from '../controllers/availabletimeslotcontroller.js';


const router = express.Router();

// Route to get available time slots for a selected date
router.get('/book/:selectedDate', getAvailableTimeSlots);

export default router;
