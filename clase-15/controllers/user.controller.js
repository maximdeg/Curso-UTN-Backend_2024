import { leerJson } from "../utils/jsonManager.util.js";

const getUserByName = async name => {
  try {
    const users = await leerJson("users");
    const searchedUser = users.find(user => user.name === name);
    return searchedUser;
  } catch (error) {
    console.error(error);
  }
};
export { getUserByName };
