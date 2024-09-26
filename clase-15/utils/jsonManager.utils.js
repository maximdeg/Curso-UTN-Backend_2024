import filesystem from "fs";

const crearJson = async (fileName, data) => {
  /* Prodrian manejar errores */
  /* Podrian hacer validaciones */
  const file = `./public/${fileName}.json`;
  await filesystem.promises.writeFile(file, JSON.stringify(data), {
    encoding: "utf-8",
  });
};

const leerJson = async fileName => {
  /* Prodrian manejar errores */
  /* Podrian hacer validaciones */
  const file = `./public/${fileName}.json`;
  const json = await filesystem.promises.readFile(file, { encoding: "utf-8" });
  return JSON.parse(json);
};

export { crearJson, leerJson };
