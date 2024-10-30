import ProductRepository from "../repositories/product.repository.js";
import ResponseBuilder from "../utils/builders/responseBuilder.js";
import { validateFormController } from "./errors.controller.js.js";

// PENSAR POR CADA FUNCION:
// QUE RECIBO
// QUE DEVUELVO

const responseBuilder = (ok, status, message, payload) => {
  return new ResponseBuilder().setOk(ok).setStatus(status).setMessage(message).setPayload(payload).build();
};

export const getAllProductsController = async (req, res) => {
  try {
    const products = await ProductRepository.getAll();

    if (products.length === 0) {
      return res.status(400).json(responseBuilder(false, 400, "BAD_REQUEST", { detail: "No products found" }));
    }

    return res.status(200).json(responseBuilder(true, 200, "SUCCESS", { products }));
  } catch (err) {
    const response = responseBuilder(false, 500, "SERVER_ERROR", { detail: "Failed to get all the products", error: err.message });
    res.status(500).json(response);
  }
};

export const getProductByIdController = async (req, res) => {
  try {
    const { product_id } = req.params;

    console.log(product_id);

    if (!product_id) {
      return res.status(400).json(responseBuilder(false, 400, "WRONG_ID_AUTHENTICATION", { detail: "Product id is required for this request" }));
    }

    const product_found = await ProductRepository.getById(product_id);

    if (!product_found) {
      return res.status(404).json(responseBuilder(false, 404, "NOT_FOUND", { detail: "Product not found or the product ID is wrong" }));
    }

    if (!product_found.active) {
      return res.status(404).json(responseBuilder(false, 404, "DOES_NOT_EXIST", { detail: "This product does not exist any longer" }));
    }

    return res.status(200).json(responseBuilder(true, 200, "SUCCESS", { product_found }));
  } catch (err) {
    res.status(500).json(responseBuilder(false, 500, "SERVER_ERROR", { detail: "Failed to get the product", error: err.message }));
  }
};

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, stock, category, seller_id } = req.body;

    const new_product = {
      name,
      description,
      price,
      stock,
      category,
      seller_id,
    };

    const errors = validateFormController(new_product);

    if (Object.entries(errors).length) {
      return res.status(400).json(responseBuilder(false, 400, "DATA_VALIDATION_ERRORS", { errors: errors }));
    }

    const created_product = await ProductRepository.createProduct(new_product);
    const response = responseBuilder(true, 200, "SUCCESS", { created_product });
    return res.status(200).json(response);
  } catch (err) {
    const response = responseBuilder(false, 500, "SERVER_ERROR", { detail: "Failed to create the product", error: err.message });
    res.status(500).json(response);
  }
};

export const updateProductByIdController = async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = req.body;
    const updated_product = await ProductRepository.updateProductById(product_id, product);
    const response = responseBuilder(true, 200, "SUCCESS", { product: updated_product });
    return res.status(200).json(response);
  } catch (err) {
    const response = responseBuilder(false, 500, "SERVER_ERROR", { detail: "Failed to update the product", error: err.message });
    res.status(500).json(response);
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await ProductRepository.deleteProductById(product_id);
    const response = responseBuilder(true, 202, "SUCCESS", { deleted_product: product });
    return res.status(202).json(response);
  } catch (err) {
    const response = responseBuilder(false, 500, "SERVER_ERROR", { detail: "Failed to delete the product", error: err.message });
  }
};
