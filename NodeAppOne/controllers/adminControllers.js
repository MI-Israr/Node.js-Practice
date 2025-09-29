import {
  createAdminService,
  getAllUsersService,
  deleteUserByAdminService,
} from "../services/adminServices.js";

// Create a new admin (only existing admin can do this)
// export const createAdmin = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, gender } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ error: "Email already registered" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const admin = await User.create({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//       gender,
//       role: "admin", // Force role to admin
//     });

//     res.status(201).json({
//       message: "Admin created successfully",
//       admin: { id: admin._id, email: admin.email, role: admin.role },
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const createAdmin = async (req, res) => {
  try {
    const admin = await createAdminService(req.body);

    res.status(201).json({
      message: "Admin created successfully",
      admin: { id: admin._id, email: admin.email, role: admin.role },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users

// export const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({ users });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user
// export const deleteUserByAdmin = async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
export const deleteUserByAdmin = async (req, res) => {
  try {
    const user = await deleteUserByAdminService(req.params.id);

    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
