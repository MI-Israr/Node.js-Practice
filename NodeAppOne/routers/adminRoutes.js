import express from "express";
import {
  createAdmin,
  getAllUsers,
  deleteUserByAdmin,
} from "../controllers/adminControllers.js";
import {
  tokenValidate,
  authorizeRoles,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

// Only admins can access these routes
router.post("/create", tokenValidate, authorizeRoles("admin"), createAdmin);
router.get("/users", tokenValidate, authorizeRoles(["admin"]), getAllUsers);
router.delete(
  "/users/:id",
  tokenValidate,
  authorizeRoles("admin"),
  deleteUserByAdmin
);

export default router;
