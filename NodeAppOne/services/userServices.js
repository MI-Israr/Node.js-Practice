import User from "../models/userModels.js";

// Get all users
export const getAllUsers = async () => {
  return await User.find();
};

// Get user by ID
export const getUserByIdService = async (id) => {
  return await User.findById(id);
};

// Update user PUT
export const updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Patch user
export const patchUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Delete user
export const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};
