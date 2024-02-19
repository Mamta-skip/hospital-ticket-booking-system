// timesedulingroute.js

import express from 'express';
import createAppointment from '../controllers/timesedulingcontroller.js';
import isAdmin from '../middlewares/adminMiddleware.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();
// router.use(authMiddleware);
// Route to create a new appointment
router.post('/appointments', createAppointment);

export default router; // Default export
