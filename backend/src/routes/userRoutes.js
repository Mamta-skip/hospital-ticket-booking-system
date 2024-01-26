import {registerUser, loginUser,getUserDetails} from "../controllers/userControllers.js";
import authMiddleware from '../middlewares/authMiddleware.js'
import isAdmin from "../middlewares/adminMiddleware.js";

import express from 'express';  

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);



// Routes that require authentication and admin role
router.get("/", authMiddleware, isAdmin, getUserDetails);



export default router;