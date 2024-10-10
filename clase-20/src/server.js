import express from "express";
import dotenv from "dotenv";
import statusRouter from "./routes/status.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log(process.env);

app.use("/api/status", statusRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
