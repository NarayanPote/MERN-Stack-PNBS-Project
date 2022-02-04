import Bhog from "../models/bhogModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Bhog.find({ user: req.user._id });
  res.json(notes);
});


// const getNoteById = asyncHandler(async (req, res) => {
//   const note = await Note.findById(req.params.id);

//   if (note) {
//     res.json(note);
//   } else {
//     res.status(404).json({ message: "Note not found" });
//   }

//   res.json(note);
// });


const CreateNote = asyncHandler(async (req, res) => {
  const { days, pack, amount } = req.body;

  if (!days || !pack || !amount) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const note = new Bhog({ user: req.user._id, days, pack, amount });

    const createdNote = await note.save();

    res.status(201).json(createdNote);
  }
});


// const DeleteNote = asyncHandler(async (req, res) => {
//   const note = await Note.findById(req.params.id);

//   if (note.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("You can't perform this action");
//   }

//   if (note) {
//     await note.remove();
//     res.json({ message: "Note Removed" });
//   } else {
//     res.status(404);
//     throw new Error("Note not Found");
//   }
// });


// const UpdateNote = asyncHandler(async (req, res) => {
//   const { title, content, category } = req.body;

//   const note = await Note.findById(req.params.id);

//   if (note.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("You can't perform this action");
//   }

//   if (note) {
//     note.title = title;
//     note.content = content;
//     note.category = category;

//     const updatedNote = await note.save();
//     res.json(updatedNote);
//   } else {
//     res.status(404);
//     throw new Error("Note not found");
//   }
// });

// export { getNoteById, getNotes, CreateNote, DeleteNote, UpdateNote };

export { getNotes, CreateNote};
