import {registerUser, loginUser} from "../controllers/userControllers.js";
import authMiddleware from '../middlewares/authMiddleware.js'
import isAdmin from "../middlewares/adminMiddleware.js";

import express from 'express';  

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);


//router.post("/logout",authMiddleware,logoutUser)


export default router;