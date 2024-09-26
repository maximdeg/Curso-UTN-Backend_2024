import fs from "fs";
import ResponseBuilder from "../utils/ResponseBuiledrs.util.js";

const responseBuilder = (ok, status, message) => {
  const response = new ResponseBuilder().setOk(ok).setStatus(status).setPayload({ message: message }).build();
  return response;
};

const getProductsJSON = async () => {
  try {
    const data = await fs.promises.readFile("./data/data.products.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};

const appendProductJSON = async (product) => {
  try {
    const products = await getProductsJSON();
    products.push(product);
    await fs.promises.writeFile("./data/data.products.json", JSON.stringify(products));
  } catch (err) {
    console.error(err);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await getProductsJSON();
    return res.json(responseBuilder(true, 200, products));
  } catch (err) {
    console.error(err);
    return res.json(responseBuilder(false, 500, "ERROR on getAllProducts 💥💥💥"));
  }
};

export const createProduct = async (req, res) => {
  try {
    const { title, price, category, stock } = req.body;

    const newProduct = {
      id: Date.now(),
      title,
      price,
      category,
      stock,
    };

    const products = await getProductsJSON();

    await appendProductJSON(newProduct);

    return res.json(responseBuilder(true, 201, products));
  } catch (err) {
    console.error(err);
    return res.json(responseBuilder(false, 500, "ERROR on createProduct 💥💥💥"));
  }
};

export const getProductById = async (req, res) => {
  try {
    const { product_id } = req.params;
    if (!product_id) return res.json(responseBuilder(false, 404, "Product ID not found"));

    const products = await getProductsJSON();
    const product = products.find((product) => product.id == product_id);
    if (!product) return res.json(responseBuilder(false, 404, "Product not found"));

    return res.json(responseBuilder(true, 200, product));
  } catch (err) {
    console.error(err);
    return res.json(responseBuilder(false, 500, "ERROR on getProductById 💥💥💥"));
  }
};

export const updateProductById = async (req, res) => {
  try {
    const { product_id } = req.params;
    if (!product_id) return res.json(responseBuilder(false, 404, "Product ID not found"));

    const { title, price, category, stock } = req.body;
    const products = await getProductsJSON();

    const newProducts = products.map((product) => {
      if (product.id == product_id) {
        product.title = title;
        product.price = price;
        product.category = category;
        product.stock = stock;
      }
      return product;
    });

    fs.promises.writeFile("./data/data.products.json", JSON.stringify(newProducts));

    return res.json(responseBuilder(true, 200, "Product updated"));
  } catch (err) {
    console.error(err);
    return res.json(responseBuilder(false, 500, "ERROR on updateProductById 💥💥💥"));
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const { product_id } = req.params;
    if (!product_id) return res.json(responseBuilder(false, 404, "Product ID not found"));

    const products = await getProductsJSON();
    const newProducts = products.filter((product) => product.id != product_id);

    fs.promises.writeFile("./data/data.products.json", JSON.stringify(newProducts));

    return res.json(responseBuilder(true, 200, "Product deleted"));
  } catch (err) {
    console.error(err);
    return res.json(responseBuilder(false, 500, "ERROR on deleteProductById 💥💥💥"));
  }
};
