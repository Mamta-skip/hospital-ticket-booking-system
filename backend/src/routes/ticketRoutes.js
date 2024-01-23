import  {createTicket} from '../controllers/ticketControllers.js'
import express from 'express';
const router = express.Router();
import authMiddleware from '../middlewares/authMiddleware.js'
router.post("/create",createTicket);



export default router;