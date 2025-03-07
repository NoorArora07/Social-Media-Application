import express from "express";
import { login } from "../controllers/authControllers.js";
import { sendOtp, verifyOtp, resetPassword } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/login", login);
router.post("/send-otp/:email", sendOtp);
router.post("/verify-otp/:email", verifyOtp);
router.post("/reset-password/:email", resetPassword);

export default router;
