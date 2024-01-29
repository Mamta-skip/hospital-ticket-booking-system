import mongoose from 'mongoose';

const timeslotSchema = mongoose.Schema(
  {
    labelText: {
      type: String,
      required: true,
    },
    selectedDate: {
      type: Date,
      required: true,
    },
    timeSlots: [
      {
        type: String, // Corrected the type to String
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Timeslot = mongoose.model('Timeslot', timeslotSchema);
export default Timeslot;
