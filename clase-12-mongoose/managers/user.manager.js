import User from "../models/user.model.js";
import { ERRORES } from "../constants/errors.js";

/**
 * Crea un usuario en la base de datos.
 * @param {string} name
 * @param {string} email
 * @param {string} role
 * @param {string} password
 * @param {string} phone
 * @param {string} address
 */
export const createUser = async (name, email, role, password, phone, address) => {
  try {
    const user = new User({
      name,
      email,
      role,
      password,
      phone,
      address,
    });

    await user.save();

    console.log("USER SAVED");
  } catch (err) {
    const customError = ERRORES[err.code];
    console.error("ERROR 💥💥💥:", customError.message);
  }
};

export const findUserByID = async (id) => {
  try {
    if (!id) throw { error: "NO ID" };

    const result = await User.findById(id);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id, data) => {
  try {
    // NEW: true devuelve el objeto actualizado, no el viejo
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

    console.log("Updated user 🧑‍🦲:", updatedUser);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    console.log("Deleted user 🧑‍🦲:", deletedUser);
  } catch (error) {
    console.error(error);
  }
};
