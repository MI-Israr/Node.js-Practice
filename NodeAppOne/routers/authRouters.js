import express from "express";
import { signup, login, logout } from "../controllers/authControllers.js";
import { validateLogin, validateUser } from "../middlewares/userValidator.js";

const router = express.Router();

router.post("/signup", validateUser, signup);
router.post("/login", validateLogin, login);
router.post("/logout", logout);

export default router;
