import express from "express";
import { getPingController } from "../controllers/status.controller.js";

const statusRouter = express.Router();

statusRouter.get("/status/ping", getPingController);

export default statusRouter;
