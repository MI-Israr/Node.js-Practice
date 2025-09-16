import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);

const connectDataBase = () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Mongodb is connected");
    })
    .catch((err) => {
      console.log("MongoDB Connection Failed:", err);
    });
};

export default connectDataBase;
