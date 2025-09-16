import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);

const ConnectDatabase = () => {
  mongoose
    .connect(DB)
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => {
      console.log("mongoDB error", err);
    });
};

export default ConnectDatabase;
