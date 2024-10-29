import ProductRepository from "../repositories/product.repository.js";
import ResponseBuilder from "../utils/builders/responseBuilder.js";

// PENSAR POR CADA FUNCION:
// QUE RECIBO
// QUE DEVUELVO

const responseBuilder = (ok, status, message, payload) => {
  return new ResponseBuilder().setOk(ok).setStatus(status).setMessage(message).setPayload(payload).build();
};

export const getAllProductsController = async (req, res) => {
  try {
    const products = await ProductRepository.getAll();
    const response = responseBuilder(true, 200, "SUCCESS", { products });

    return res.status(200).json(response);
  } catch (err) {
    const response = responseBuilder(false, 500, "SERVER_ERROR", { detail: "Failed to get all the products", error: err.message });
    res.status(500).json(response);
  }
};

export const getProductByIdController = async (req, res) => {
  try {
    const { product_id } = req.params;
    const product_found = await ProductRepository.getById(product_id);
    const response = responseBuilder(true, 200, "SUCCESS", { product_found });
    return res.status(200).json(response);
  } catch (err) {
    const response = responseBuilder(false, 500, "SERVER_ERROR", { detail: "Failed to get the product", error: err.message });
    res.status(500).json(response);
  }
};

export const createProductController = async (req, res) => {
  try {
    const product = req.body;
    const created_product = await ProductRepository.createProduct(product);
    const response = responseBuilder(true, 200, "SUCCESS", { created_product });
    return res.status(200).json(response);
  } catch (err) {
    const response = responseBuilder(false, 500, "SERVER_ERROR", { detail: "Failed to get the product", error: err.message });
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
