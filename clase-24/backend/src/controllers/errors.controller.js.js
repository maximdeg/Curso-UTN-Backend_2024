import { ERRORS } from "../data/errors.js";

const handleErrors = (from, value) => {
  for (const key in ERRORS) {
    if (ERRORS[key].property === from) {
      if (!ERRORS[key].validate(value)) {
        return ERRORS[key];
      }
    }
  }
};

export const validateFormController = (newProduct) => {
  const errors = {};
  let error;
  for (const property in newProduct) {
    if (newProduct[property] === undefined) {
      errors[property] = ERRORS.EMPTY_FIELD;
    } else {
      error = handleErrors(property, newProduct[property]);
      if (error) {
        errors[property] = error;
      }
    }
  }

  if (Object.keys(errors).length === 0) {
    return null;
  } else {
    return errors;
  }
};
