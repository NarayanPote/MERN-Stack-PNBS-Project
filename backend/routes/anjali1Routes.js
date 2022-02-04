import express from "express";
import {
  
  getNotes,
  CreateNote,
  
} from "../controllers/anjali1Controller.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getNotes);
// router
//   .route("/:id")
//   .get(getNoteById)
//   .delete(protect, DeleteNote)
//   .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);

export default router;
