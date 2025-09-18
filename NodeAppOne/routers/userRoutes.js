import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  patchUser,
  updateUser,
} from "../controllers/userControllers.js";
import { validateUser } from "../middlewares/validateUser.js";

const router = express.Router();

router.post("/", validateUser, createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.patch("/:id", patchUser);
router.delete("/:id", deleteUser);

export default router;
