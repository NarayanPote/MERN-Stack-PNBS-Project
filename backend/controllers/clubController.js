import asyncHandler from "express-async-handler";
import Club from "../models/clubModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Club.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        country : user.country, 
        state : user.state, 
        city : user.city, 
        pincode : user.pincode, 
        contact : user.contact, 
        website : user.website, 
        clubregistrationnumber : user.clubregistrationnumber, 
        yearofestabilishment : user.yearofestabilishment, 
        trustformed : user.trustformed, 
        aandgregister : user.aandgregister, 
        clublogo : user.clublogo,
       token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, address, country, state, city, pincode, contact, email, password, website, clubregistrationnumber, yearofestabilishment, trustformed, aandgregister, clublogo } = req.body;

  const userExists = await Club.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await Club.create({
    name, address, country, state, city, pincode, contact, email, password, website, clubregistrationnumber, yearofestabilishment, trustformed, aandgregister, clublogo
  });

  if (user) {
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        country : user.country, 
        state : user.state, 
        city : user.city, 
        pincode : user.pincode, 
        contact : user.contact, 
        website : user.website, 
        clubregistrationnumber : user.clubregistrationnumber, 
        yearofestabilishment : user.yearofestabilishment, 
        trustformed : user.trustformed, 
        aandgregister : user.aandgregister, 
        clublogo : user.clublogo,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await Club.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
        country : updatedUser.country, 
        state : updatedUser.state, 
        city : updatedUser.city, 
        pincode : updatedUser.pincode, 
        contact : updatedUser.contact, 
        website : updatedUser.website, 
        clubregistrationnumber : updatedUser.clubregistrationnumber, 
        yearofestabilishment : updatedUser.yearofestabilishment, 
        trustformed : updatedUser.trustformed, 
        aandgregister : updatedUser.aandgregister, 
        clublogo : updatedUser.clublogo,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export { authUser, updateUserProfile, registerUser };
