import * as authService from "../services/authServices.js";

// Signup
export const signup = async (req, res) => {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json({
      message: "Signup successful",
      user: { id: user._id, firstName, lastName, email, gender, role },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export const signup = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, gender } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already registered" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//       gender,
//     });

//     res.status(201).json({
//       message: "Signup successful",
//       user: { id: user._id, firstName, lastName, email, gender },
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Login

export const login = async (req, res) => {
  try {
    const { user, token } = await authService.login(req.body);
    const { firstName, lastName, email } = user;

    res.cookie("token", token);
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: user.role
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(400).json({ error: "Invalid email or password" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ error: "Invalid email or password" });

//     const payload = { id: user._id, email: user.email };
//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: process.env.JWT_EXPIRES_IN || "1h",
//     });
//     res.cookie("token", token);
//     res.status(200).json({
//       message: "Login successful",
//       user: {
//         id: user._id,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

//Logout

export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
