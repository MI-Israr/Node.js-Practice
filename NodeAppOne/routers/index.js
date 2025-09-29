import express from "express";
import userRouter from "./userRoutes.js";
import authRouter from "./authRouters.js";
import adminRouter from "./adminRoutes.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/admin", adminRouter);

export default router;
