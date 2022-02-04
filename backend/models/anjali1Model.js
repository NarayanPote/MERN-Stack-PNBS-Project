import mongoose from "mongoose";


const anjaliSchema = mongoose.Schema(
  {
    day: {
      type: String,
      
    },

    slot1: {
      type: String,
      
    },
    slot2: {
      type: String,
      
    },
    slot3: {
      type: String,
      
    },
    slot4: {
      type: String,
      
    },
    slot5: {
      type: String,
      
    },
   

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Club",
      },

    
    },

);




const Anjali1 = mongoose.model("Anjali1", anjaliSchema);


export default Anjali1;