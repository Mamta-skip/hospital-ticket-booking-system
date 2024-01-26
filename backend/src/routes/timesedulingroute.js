// timesedulingroute.js

import express from 'express';
import createAppointment from '../controllers/timesedulingcontroller.js';

const router = express.Router();

// Route to create a new appointment
router.post('/appointments', createAppointment);

export default router; // Default export
