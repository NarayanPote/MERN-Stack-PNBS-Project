import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import path from "path";

// import clubRoutes from "./routes/clubRoutes.js";
import anjali1Routes from "./routes/anjali1Routes.js";
import anjaliRoutes from "./routes/anjaliRoutes.js";
import bhogRoutes from "./routes/bhogRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express(); // main thing

app.use(express.json()); // to accept json data

// app.use("/api/clubs", clubRoutes);
app.use("/api/anjalis1", anjali1Routes);
app.use("/api/anjalis", anjaliRoutes);
app.use("/api/bhogs", bhogRoutes);
app.use("/api/users", userRoutes);

// --------------------------deployment------------------------------
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}..`)
);

