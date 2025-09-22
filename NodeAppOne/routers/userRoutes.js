import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  patchUser,
  updateUser,
} from "../controllers/userControllers.js";

import { signup } from "../controllers/authControllers.js";

import { tokenValidate, validateUser } from "../middlewares/userValidator.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", validateUser, signup);
router.get("/:id", getUserById);
router.put("/:id", tokenValidate, updateUser);
router.patch("/:id", tokenValidate, patchUser);
router.delete("/:id", tokenValidate, deleteUser);

export default router;
