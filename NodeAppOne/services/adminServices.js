import User from "../models/userModels.js";
import bcrypt from "bcrypt";

// Create a new admin
export const createAdminService = async ({
  firstName,
  lastName,
  email,
  password,
  gender,
}) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("Email already registered");

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    gender,
    role: "admin", // force admin role
  });

  return admin;
};

// Get all users
export const getAllUsersService = async () => {
  return await User.find();
};

// Delete user
export const deleteUserByAdminService = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error("User not found");
  return user;
};
