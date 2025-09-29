import express from "express";
import * as authController from "../controllers/authControllers.js";
import { loginSchema } from "../validations/authValidation.js";
import { userSchema } from "../validations/userValidations.js";
import { validate } from "../middlewares/userMiddleware.js";

const router = express.Router();

router.post("/signup", validate(userSchema), authController.signup);
router.post("/login", validate(loginSchema), authController.login);
router.post("/logout", authController.logout);

export default router;
