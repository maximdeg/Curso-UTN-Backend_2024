import express from "express";
import { getPingController } from "../controllers/status.controller.js";
import { verifyTokenMiddleware } from "../middlewares/auth.middleware.js";

const statusRouter = express.Router();

statusRouter.get("/status/ping", getPingController);

statusRouter.get(
  "/protected-route/ping",
  verifyTokenMiddleware,
  getPingController
);

export default statusRouter;
