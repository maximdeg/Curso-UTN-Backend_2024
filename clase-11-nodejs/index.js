const { nombre, calcularPrecioConIva } = require("./utils/calculosVarios.js");
const { formatearPrecio } = require("./utils/formatos.js");
const { leerTxt, crearTxt, crearCarpeta, agregarTexto, crearJSON, agregarJSON } = require("./utils/sistemaArchivos.js");
const { validarEmail, validarNumero, validarNombre } = require("./utils/validaciones.js");

let email_recibido = "pepe@pepe.com";
let email_recibido2 = "pepe";
console.log(validarEmail(email_recibido));
console.log(validarEmail(email_recibido2));

let nombre1 = "pepe";
let nombre2 = "pepe2";
console.log(validarNombre(nombre1));
console.log(validarNombre(nombre2));

let numero = 5;
let numero2 = 5.5;
let numero3 = "c";
console.log(validarNumero(numero));
console.log(validarNumero(numero2));
console.log(validarNumero(numero3));

const precio_taza = 25;
const precioConIva = calcularPrecioConIva(precio_taza);

console.log(nombre);
console.log(formatearPrecio(precioConIva.precio_final));

const persona = [
  {
    nombre: "pepe",
    edad: "98",
  },
];

const persona2 = {
  nombre: "juan",
  edad: "27",
};

const persona3 = {
  nombre: "jose",
  edad: "37",
};

crearJSON("personas", persona);
agregarJSON("personas", persona2);
agregarJSON("personas", persona3);

crearTxt("create", "HELLO WORLD!!! 🚀🚀🚀🚀");
agregarTexto("create.txt", "HELLO WORLD!!! 🚀🚀🚀🚀");
leerTxt("create.txt");
leerTxt("/json/personas.json");
