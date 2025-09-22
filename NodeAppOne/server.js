import express from "express";
import connectDataBase from "./config/db.js";
import userRouter from "./routers/userRoutes.js";
import authRouter from "./routers/authRouters.js";

const app = express();
app.use(express.json());

connectDataBase();

app.get("/", (req, res) => {
  res.send("This is a express server");
});
// Routes
app.use("/users", userRouter); // Protected user operations
app.use("/auth", authRouter); // Login + Signup

app.listen("3000", () => {
  console.log("Server is running on Port: 3000...");
});
