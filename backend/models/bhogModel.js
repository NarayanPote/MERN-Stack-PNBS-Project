import mongoose from "mongoose";


const bhogSchema = mongoose.Schema(
  {
    days: {
      type: String,
      required: true,
    },
    pack: {
      type: String,
      required: true,
    },
    amount: {
        type: String,
        required: true,
      },
      coupan: {
        type: String,
       
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
  },
  {
    timestamps: true,
  }
);





const Bhog = mongoose.model("Bhog", bhogSchema);


export default Bhog;
