import express from "express";
import userRouter from "./userRoutes.js";
import authRouter from "./authRouters.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
