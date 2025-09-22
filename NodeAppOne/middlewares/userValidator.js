import { z } from "zod";
import jwt from "jsonwebtoken";

export const userSchema = z.object({
  firstName: z.string().min(1, "FirstName is required"),
  lastName: z.string().min(1, "LastName is required"),
  email: z.string().email("Valid Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender must be male or female" }),
  }),
});

export const loginSchema = z.object({
  email: z.string().email("Valid Email required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const validateLogin = (req, res, next) => {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.errors.map((err) => err.message);
    return res.status(400).json({ errors });
  }
  next();
};

export const validateUser = (req, res, next) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.errors.map((err) => err.message);
    return res.status(400).json({ errors });
  }

  next();
};

export const tokenValidate = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
