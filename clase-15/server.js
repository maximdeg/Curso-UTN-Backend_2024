import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.post("/enviar", (req, res) => {
  res.send("Recibido");
  console.log(req.body);
});

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
