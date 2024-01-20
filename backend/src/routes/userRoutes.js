import {registerUser, loginUser, logoutUser} from "../controllers/userControllers.js";
import {verifyJwt} from "../middlewares/authMiddleware.js"
import express from 'express';  

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);

router.post("/logout",verifyJwt,logoutUser)


export default router;