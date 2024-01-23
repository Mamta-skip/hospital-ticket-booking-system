import express from 'express';
const router = express.Router();
import authMiddleware from '../middlewares/authMiddleware.js'
import isAdmin from "../middlewares/adminMiddleware.js";
const getUser = async (req, res) => {
    try {
        const user = await User.find()
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
router.get("/users",authMiddleware,isAdmin,getUser)

export default router;