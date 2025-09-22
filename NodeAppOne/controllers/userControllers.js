import jwt from "jsonwebtoken";
import User from "../models/userModels.js";
import bcrypt from "bcrypt";
// export const createUser = async (req, res) => {
//   try {
//     const { firstName, lastName, password, gender, email } = req.body;

//     // hash password
//     const hash = await bcrypt.hash(password, 10);

//     // create user in DB
//     const user = await User.create({
//       firstName,
//       lastName,
//       email,
//       password: hash,
//       gender,
//     });

//     // payload for JWT
//     const payload = { id: user._id, email: user.email };

//     // sign token
//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.status(201).json({
//       message: "User Created Successfully",
//       token,
//       data: user,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ error: "User Not Found..." });
    res.status(200).json({ message: "User Updated Successfully", data: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const patchUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ error: "User Not Found..." });
    res.status(200).json({ message: "User Updated Successfully", data: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "User Not Found..." });
    res.status(200).json({ message: "User deleted Successfully", data: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
