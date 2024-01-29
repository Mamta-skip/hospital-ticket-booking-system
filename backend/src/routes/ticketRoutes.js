// ticketRoutes.js
import express from 'express';
import bookAppointment from '../controllers/ticketControllers.js';

const router = express.Router();

// Handle POST requests to create a new ticket
router.post('/', bookAppointment);

export default router;
