import express from "express";
import connectDataBase from "./config/db.js";
import userRouter from "./routers/userRoutes.js";
import authRouter from "./routers/authRouters.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

connectDataBase();

app.get("/", (req, res) => {
  res.send("This is a express server");
});

app.use("/users", userRouter);
app.use("/auth", authRouter);

app.listen("3000", () => {
  console.log("Server is running on Port: 3000...");
});
