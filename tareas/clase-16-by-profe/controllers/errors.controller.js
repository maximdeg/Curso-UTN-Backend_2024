import { getProductsJSON } from "./products.controller.js";
import ResponseBuilder from "../utils/ResponseBuiledrs.util.js";
import { ERRORS } from "../data/data.errors.js";

// POSIBLES ERRORES:
// CHECK - El producto ya existe, ya existe un proyecto con el mismo title STATUS: 400
// - El enviado no tiene los campos necesarios STATUS: 400 (opcional: especificar los campos faltantes)
// - El stock es negativo STATUS: 400
// - El stock no es un numero STATUS: 400
// - El precio no es un numero STATUS: 400
// - El precio es negativo STATUS: 400
// - El title no es un string STATUS: 400
// - El title es vacio STATUS: 400
// - La categoria no es un string valido o no es una de las categorias existentes STATUS: 400 (OPCIONAL categorias_existentes: 'ropa', 'electrodomestico', 'jugueteria')
// - Error de lectura de archivo STATUS: 500
// - Las propiedades recibidas deben ser validas, significa que no podemos recibir una propiedad que no existe Status: 400 (opcional: especificar las propiedades validas y la que esta/an mal)

const productExists = async (title) => {
  try {
    const products = await getProductsJSON();
    if (products.find((p) => p.title === title)) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};

const validateFields = (product) => {
  const VALID_PROPERTIES = ["title", "price", "stock", "category"];
  const invalid_properties = [];
  const valid_properties = [];

  for (let property in product) {
    console.log(product[property]);
    if (!VALID_PROPERTIES.includes(property)) {
      invalid_properties.push(property);
    } else {
      valid_properties.push(property);
    }
  }

  if (invalid_properties.length > 0) {
    console.log(invalid_properties);
    return `Invalid properties: ${invalid_properties.join(", ")}`;
  }

  // console.log(valid_properties.length, VALID_PROPERTIES.length);
  if (valid_properties.length != VALID_PROPERTIES.length) {
    console.log("ENTRO");
    return `Missing properties: ${valid_properties
      .filter((property) => !VALID_PROPERTIES.includes(property))
      .join(", ")}`;
  }

  return undefined;
};

const handleErrors = (from, value) => {
  for (const error in ERRORS) {
    if (ERRORS[error].key === from) {
      if (!ERRORS[error].validate(value)) {
        return ERRORS[error].message;
      }
    }
  }
};

export const validateProduct = async (method, product) => {
  try {
    const errorMessages = [];
    const validationErrors = validateFields(product);
    const doesProductExists = await productExists(product.title);

    if (validationErrors !== undefined) {
      errorMessages.push(validationErrors);
    }

    for (const property in product) {
      if (!product[property]) {
        errorMessages.push(`Please complete the field: ${property}`);
      } else if (handleErrors(property, product[property])) {
        errorMessages.push(handleErrors(property, product[property]));
      }
    }

    if (method === "create" && doesProductExists) {
      errorMessages.push(ERRORS.PRODUCTS_EXISTS.message);
    }

    return errorMessages;
  } catch (err) {
    console.error(err);
  }
};
