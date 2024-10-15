import express from "express";
import {
  registerUserController,
  verifyMailValidationTokenController,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerUserController);

authRouter.get(
  "/verify/:verification_token",
  verifyMailValidationTokenController
);
export default authRouter;
