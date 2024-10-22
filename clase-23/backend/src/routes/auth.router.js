import express from "express";
import {
  registerUserController,
  verifyMailValidationTokenController,
  loginController,
  forgotPasswordController,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerUserController);

authRouter.get(
  "/verify/:verification_token",
  verifyMailValidationTokenController
);

authRouter.post("/login", loginController);
authRouter.post("/forgot-password", forgotPasswordController);

export default authRouter;
