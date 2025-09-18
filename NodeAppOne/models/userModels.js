import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  age: {
    type: Number,
    min: [10, "Age must be above 10"],
    max: [100, "Age must be below 100"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  photoUrl: {
    type: String,
    default:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fuser%2520icon%2F&psig=AOvVaw3ddHmNpNfsTDAMyZwWJh5w&ust=1758085899880000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCPp7_C3I8DFQAAAAAdAAAAABAK",
  },
  about: {
    type: String,
    maxlength: [200, "About section cannot exceed 200 characters"],
  },
  skills: {
    type: [String],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
