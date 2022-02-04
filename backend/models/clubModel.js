import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const clubSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    
    country: {
      type: Array,
      required: true,
    },
    state: {
      type: Array,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    pincode: {
      type: Number,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    website: {
      type: String,
    },
    clubregistrationnumber: {
      type: Number,
    },
    yearofestabilishment: {
      type: Date,
    },
    trustformed: {
      type: Boolean,
    },
    aandgregister: {
      type: Boolean,
    },
    clublogo: {
      type: String,
    },
    
  },
  {
    timestamps: true,
  }
);



clubSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  // will encrypt password everytime its saved
  clubSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  const Club = mongoose.model("Club", clubSchema);
  
  export default Club;
  
