import express from "express";
import { createUser, getUsers } from "../controllers/userControllers";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;
