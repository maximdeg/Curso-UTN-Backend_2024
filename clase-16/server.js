import express from "express";
import productRoutes from "./routes/product.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/ping", (req, res) => {
  res.json({
    ok: true,
    status: 200,
    code: "SUCCESSFUL",
    payload: {
      message: "pong",
    },
  });
});

app.post("/ping", (req, res) => {
  const { message } = req.body;
  const respuesta = {
    ok: true,
    status: 200,
    code: "SUCCESSFUL",
    payload: {
      message,
    },
  };

  console.log(respuesta);
  res.status(200).send(respuesta);
});

app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
