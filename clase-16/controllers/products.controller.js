import fs from "fs";
import ResponseBuilder from "../utils/ResponseBuiledrs.util.js";
import { validateProduct } from "./errors.controller.js";

const responseBuilder = (ok, status, message) => {
  const response = new ResponseBuilder().setOk(ok).setStatus(status).setPayload({ message: message }).build();
  return response;
};

export const getProductsJSON = async () => {
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
    console.log(req.body);

    const newProduct = {
      id: Date.now(),
      title,
      price,
      category,
      stock,
    };

    const errors = await validateProduct("create", req.body);
    if (errors.length > 0) return res.json(responseBuilder(false, 400, errors));

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

    const errors = await validateProduct("update", req.body);
    if (errors.length > 0) return res.json(responseBuilder(false, 400, errors));

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

/*
POSIBLES ERRORES:
- El producto ya existe, ya existe un proyecto con el mismo title STATUS: 400
- El enviado no tiene los campos necesarios STATUS: 400 (opcional: especificar los campos faltantes)
- El stock es negativo STATUS: 400
- El stock no es un numero STATUS: 400
- El precio no es un numero STATUS: 400
- El precio es negativo STATUS: 400
- El title no es un string STATUS: 400
- El title es vacio STATUS: 400
- La categoria no es un string valido o no es una de las categorias existentes STATUS: 400 (OPCIONAL categorias_existentes: 'ropa', 'electrodomestico', 'jugueteria')        
- Error de lectura de archivo STATUS: 500
- Las propiedades recibidas deben ser validas, significa que no podemos recibir una propiedad que no existe Status: 400 (opcional: especificar las propiedades validas y la que esta/an mal)


COMO SABER SI HAY PROPIEDADES INVALIDAS?

const producto = {
    title: 'nuevo nombre tv',
    price: 2000,
    stock: 2,
    propiedad_falsa: true,
    nombre: 'pepe',
    teclado: true
}

const PROPIEDADES_VALIDAS = ['title', 'price', 'stock']
const propiedades_invalidas = []

for(let propiedad in producto){
    if(!PROPIEDADES_VALIDAS.includes(propiedad)){
        propiedades_invalidas.push(propiedad)
    }
}

console.log(propiedades_invalidas)
*/
