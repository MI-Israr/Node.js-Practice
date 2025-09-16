import express from "express";
import connectDataBase from "./config/db.js";
import userRouter from "./routers/userRoutes.js";

const app = express();
app.use(express.json());

connectDataBase();

app.get("/", (req, res) => {
  res.send("This is a express server");
});

app.use("/users", userRouter);

app.listen("3000", () => {
  console.log("Server is running on Port: 3000...");
});
