import express from "express";
import statusRouter from "./routes/status.router.js";
import ENV from "./config/enviroment.config.js";
import mongoose from "./db/config.js";
import authRouter from "./routes/auth.router.js";

const app = express();
const PORT = ENV.PORT || 3000;

app.use(express.json());

app.use("/api/status", statusRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
