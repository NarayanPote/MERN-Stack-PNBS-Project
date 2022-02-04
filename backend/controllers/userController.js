import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

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
  const { name, email, password,  address, country, state, city, pincode, contact, website, clubregistrationnumber, yearofestabilishment, trustformed, aandgregister, clublogo } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    address, country, state, city, pincode, contact, website, clubregistrationnumber, yearofestabilishment, trustformed, aandgregister, clublogo,
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
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.country = req.body.country || user.country;
    user.state = req.body.state || user.state;
    user.city = req.body.city || user.city;
    user.pincode = req.body.pincode || user.pincode;
    user.contact = req.body.contact || user.contact;
    user.website = req.body.website || user.website;
    user.clubregistrationnumber = req.body.clubregistrationnumber || user.clubregistrationnumber;
    user.yearofestabilishment = req.body.yearofestabilishment || user.yearofestabilishment;
    user.trustformed = req.body.trustformed || user.trustformed;
    user.aandgregister = req.body.aandgregister || user.aandgregister;
    user.clublogo = req.body.clublogo || user.clublogo;


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
