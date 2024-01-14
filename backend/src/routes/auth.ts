import { Router } from "express";
import authController from "../controllers/auth";
const router = Router();

router.post("/check-email", authController.checkEmail);

router.post("/register", authController.signUp);
router.get("/google", authController.googleAuth);
router.get("/google/callback", authController.googleAuthCallback);

export default router;
