import express from "express";
import connectDataBase from "./config/db.js";
import mainRouter from "./routers/index.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

connectDataBase();

app.get("/", (req, res) => {
  res.send("This is a express server");
});

app.use("/", mainRouter);

app.listen("3000", () => {
  console.log("Server is running on Port: 3000...");
});
