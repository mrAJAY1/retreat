import { Router } from "express";
import authController from "../controllers/auth";
const router = Router();

router.post("/check-email", authController.checkEmail);

router.post("/register", authController.signUp);
router.get("/google", authController.googleAuth);
router.get("/google/callback", authController.googleAuthCallback);
router.get("/complete_signup", authController.completeSignup);
router.post("/complete_signup", authController.completeSignupPost);
export default router;
