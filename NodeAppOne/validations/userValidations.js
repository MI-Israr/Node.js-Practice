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
