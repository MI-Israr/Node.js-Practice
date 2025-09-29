import express from "express";
import * as userControllers from "../controllers/userControllers.js";
import { signup } from "../controllers/authControllers.js";
import { tokenValidate } from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/userMiddleware.js";
import { userSchema } from "../validations/userValidations.js";

const router = express.Router();

// router.get("/", userControllers.getUsers);
router.post("/", validate(userSchema), signup);
router.get("/:id", userControllers.getUserById);
router.put("/:id", tokenValidate, userControllers.updateUser);
router.patch("/:id", tokenValidate, userControllers.patchUser);
// router.delete("/:id", tokenValidate, userControllers.deleteUser);

export default router;
