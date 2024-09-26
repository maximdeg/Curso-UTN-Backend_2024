import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../controllers/products.controller.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);

productRouter.put("/:product_id", updateProductById);
productRouter.get("/:product_id", getProductById);
productRouter.delete("/:product_id", deleteProductById);

export default productRouter;
