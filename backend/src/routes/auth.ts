import { Router } from "express";
import authController from "../controllers/auth";
const router = Router();

router.post("/check-email", authController.checkEmail);

router.post("/register", authController.signUp);

export default router;
