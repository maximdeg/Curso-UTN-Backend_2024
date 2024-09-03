"use strict";
// Tema pendiente de typescript
// ARRAYS
const nombres = ["pepe", "juan", "pedro"];
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayEspecial = ["pepe", 1];
const mostrarEdad = (nombre, edad) => {
    console.log(`hola ${nombre}, tienes ${edad} años`);
};
const producto_1 = {
    nombre: "computadora",
    precio: 1000,
    id: 1,
    descripcion: "computadora de escritorio",
};
const producto_2 = {
    nombre: "computadora",
    precio: 1000,
    id: 2,
    descripcion: "TV Noblex",
};
const lista_productos = [producto_1, producto_2];
const tvNoblex = lista_productos.find((producto) => {
    return producto.id === 2;
});
console.log(tvNoblex);
const listaPrecios = [
    { precio: 10 },
    { precio: 20 },
    { precio: 41 },
    { precio: 50 },
];
const preciosMenores40 = listaPrecios.map((precio) => {
    return precio.precio < 40;
});
console.log(preciosMenores40);
// POO en TypeScript
