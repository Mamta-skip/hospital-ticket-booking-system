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
import adminRoutes from './routes/adminRoutes.js';




app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser())
 

//using the cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // Respond to OPTIONS requests with a 200 status
  } else {
    next();
  }
});



database(); 
//using the routes

app.use("/api/v1/users",userRoutes);
app.use("/api/v1/tickets",ticketRoutes);

  const PORT = process.env.PORT || 3000;


app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)
})


export { app}