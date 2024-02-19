import express from 'express';
import cors from 'cors';
import database from './db/database.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });

const app = express()

// Importing the routes
import userRoutes from './routes/userRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';

import  timesedulingRoutes from './routes/timesedulingroute.js';
import availabletimeslotRoutes from './routes/availabletimeslotroute.js';

import getBookedTimeSlots from './routes/getbookedtimeslot.js';



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


// Using the routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tickets", ticketRoutes);
app.use("/api/v1/admins", timesedulingRoutes); 
app.use("/api/v1/clients",availabletimeslotRoutes );
app.use("/api/v1/clients",getBookedTimeSlots);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
