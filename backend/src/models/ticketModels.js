import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
    {
        department:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:[true, "plesae enter your email"],
            unique:true
        },
        phone:{
            type:Number,
            required:true
        },
        sex:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            required:true
        },
        bloodgroup:{
            type:String,
            required:false
        }
       
        },
    
    {timestamps:true});

const Ticket = mongoose.model("Ticket",ticketSchema);
export default Ticket;