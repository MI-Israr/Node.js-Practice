import User from "../models/userModels.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

export const signup = async ({
  firstName,
  lastName,
  email,
  password,
  gender,
}) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("Email already registered");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    gender,
  });

  return {
    id: user._id,
    firstName,
    lastName,
    email,
    gender,
  };
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  const payload = { id: user._id, email: user.email };
  const token = generateToken(payload);

  return {
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    token,
  };
};
