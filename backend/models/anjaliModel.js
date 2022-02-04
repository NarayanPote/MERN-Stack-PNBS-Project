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
    slot6: {
      type: String,
      
    },
    slot7: {
      type: String,
      
    },
    slot8: {
      type: String,
      
    },
    slot9: {
      type: String,
      
    },
    slot10: {
      type: String,
      
    },
    slot11: {
      type: String,
      
    },
    slot12: {
      type: String,
      
    },
    slot13: {
      type: String,
      
    },
    slot14: {
      type: String,
      
    },
    slot15: {
      type: String,
      
    },
    slot16: {
      type: String,
      
    },
    slot17: {
      type: String,
      
    },
    slot18: {
      type: String,
      
    },
    slot19: {
      type: String,
      
    },
    slot20: {
      type: String,
      
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Club",
      },

    
    },

);




const Anjali = mongoose.model("Anjali", anjaliSchema);


export default Anjali;