import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema(
  {
    department: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter your email'],
      unique: true,
    },
    phone: {
      type: String, // Assuming the phone number can be a string
      required: true,
      match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: String, // or Number, based on your preference
      required: true,
    },
    date: {
      type: Date, // Adjust the type based on the format you want to store
      required: true,
    },
    timeSlot: {
      type: String, // or another appropriate type
      required: true,
    },
    bloodgroup: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model('Ticket', ticketSchema);
export default Ticket;
