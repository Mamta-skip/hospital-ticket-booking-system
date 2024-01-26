import mongoose from "mongoose";

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
    timeSlots: {
      type: [String],
      required: true,
    }
  },
  { timestamps: true } // Move timestamps outside the object
);

const Timeslot = mongoose.model("Timeslot", timeslotSchema);
export default Timeslot;
