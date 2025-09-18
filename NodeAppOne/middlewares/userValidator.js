import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, "FirstName is required"),
  lastName: z.string().min(1, "LastName is required"),
  email: z.string().email("Valid Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender must be male or female" }),
  }),
});

export const validateUser = (req, res, next) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.errors.map((err) => err.message);
    return res.status(400).json({ errors });
  }

  next();
};
