const filesystem = require("fs");

const crearTxt = (direccion_y_nombre, contenido) => {
  filesystem.writeFileSync("./archivos/" + direccion_y_nombre + ".txt", contenido, "utf-8");
};
const leerTxt = (direccion_y_nombre) => {
  const data = filesystem.readFileSync("./archivos/" + direccion_y_nombre, "utf-8");
  console.log(`El contenido de ${direccion_y_nombre} es: ` + data);
};

const agregarTexto = (direccion_y_nombre, contenido) => {
  filesystem.appendFileSync("./archivos/" + direccion_y_nombre, `\n${contenido}`, "utf-8");
};

const crearCarpeta = (carpeta) => {
  filesystem.mkdirSync(`./archivos/${carpeta}`);
};

const crearJSON = (direccion_y_nombre, contenido) => {
  filesystem.writeFileSync(`./archivos/json/${direccion_y_nombre}.json`, JSON.stringify(contenido), "utf-8");
  console.log(`./archivos/json/${direccion_y_nombre}.json ha sido creado con exito 👍😎`);
};

const getJSONArray = () => {
  const data = filesystem.readFileSync("./archivos/json/personas.json", "utf-8");
  return JSON.parse(data);
};

const agregarJSON = (direccion_y_nombre, contenido) => {
  // console.log(direccion_y_nombre, contenido);
  const JSONArray = getJSONArray();
  JSONArray.push(contenido);
  filesystem.writeFileSync(`./archivos/json/${direccion_y_nombre}.json`, JSON.stringify(JSONArray), "utf-8");
};

module.exports = {
  crearCarpeta: crearCarpeta,
  agregarTexto: agregarTexto,
  crearTxt: crearTxt,
  crearJSON,
  agregarJSON,
  leerTxt,
};
