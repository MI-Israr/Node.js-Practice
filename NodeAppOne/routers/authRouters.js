import express from "express";
import { signup, login } from "../controllers/authControllers.js";
import { validateLogin, validateUser } from "../middlewares/userValidator.js";

const router = express.Router();

router.post("/signup", validateUser, signup);
router.post("/login", validateLogin, login);

export default router;
