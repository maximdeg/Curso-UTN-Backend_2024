// POO en JS

const producto_1 = {
    nombre: "computadora",
    precio: 1000,
    id: 1,
};

const producto_2 = {
    nombre: "computadora",
    precio: 1000,
    id: 1,
};
const producto_3 = {
    nombre: "computadora",
    precio: 1000,
    id: 1,
};

let id_counter = 1;

const crearProducto = (nombre, precio) => {
    return {
        nombre,
        precio,
        id: id_counter++,
    };
};

const producto_4 = crearProducto("computadora", 1000);
const producto_5 = crearProducto("computadora", 1000);
const producto_6 = crearProducto("computadora", 1000);
