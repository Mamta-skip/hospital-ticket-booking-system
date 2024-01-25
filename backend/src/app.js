import express from 'express';
import cors from 'cors';
import database from './db/database.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });

const app = express()

//importing the routes

import userRoutes from './routes/userRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';





app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser())
 

//using the cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);


database(); 
//using the routes


app.use("/api/v1/users",userRoutes);
app.use("/api/v1/tickets",ticketRoutes);


  const PORT = process.env.PORT || 3000;


app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)
})


export { app}