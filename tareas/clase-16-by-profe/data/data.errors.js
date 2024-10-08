const validateTitle = (title) => {
  return title.length > 0 && typeof title === "string" && title.trim().length > 0;
};

const validatePrice = (price) => {
  return typeof price === "number" && price > 0;
};

const validateStock = (stock) => {
  return typeof stock === "number" && stock >= 0;
};

const validateCategory = (category) => {
  return (
    (typeof category === "string" && category.toLowerCase() === "ropa") ||
    category.toLowerCase() === "electrodomestico" ||
    category.toLowerCase() === "jugueteria"
  );
};

export const ERRORS = {
  PRODUCTS_EXISTS: {
    code: 1,
    message: "A product with that title already exists",
    name: "PRODUCT_EXISTS",
    validate: null,
  },
  INVALID_PROPERTY: {
    code: 2,
    message: "Invalid property",
    name: "INVALID_PROPERTY",
    validate: null,
  },
  EMPTY_FIELD: {
    code: 3,
    message: "Empty field",
    name: "EMPTY_FIELD",
    validate: null,
  },
  MISSING_PROPERTY: {
    code: 4,
    message: "Missing property",
    name: "MISSING_PROPERTY",
    validate: null,
  },
  INVALID_VALUE_STOCK: {
    code: 5,
    message: "Invalid value for stock",
    name: "INVALID_VALUE_STOCK",
    validate: validateStock,
    key: "stock",
  },
  INVALID_VALUE_PRICE: {
    code: 6,
    message: "Invalid value for price",
    name: "INVALID_VALUE_PRICE",
    validate: validatePrice,
    key: "price",
  },
  INVALID_VALUE_TITLE: {
    code: 7,
    message: "Invalid value for title",
    name: "INVALID_VALUE_TITLE",
    validate: validateTitle,
    key: "title",
  },
  INVALID_VALUE_CATEGORY: {
    code: 8,
    message: "Invalid value for category, it can be Ropa, Electrodomestico or Jugueteria",
    name: "INVALID_VALUE_CATEGORY",
    validate: validateCategory,
    key: "category",
  },
};
