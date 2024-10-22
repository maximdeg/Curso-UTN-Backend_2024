import express from "express";
import {
  registerUserController,
  verifyMailValidationTokenController,
  loginController,
  forgotPasswordController,
  resetPasswordController,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerUserController);

authRouter.get(
  "/verify/:verification_token",
  verifyMailValidationTokenController
);

authRouter.post("/login", loginController);
authRouter.post("/forgot-password", forgotPasswordController);
authRouter.put("/reset-password/:token", resetPasswordController);

export default authRouter;
