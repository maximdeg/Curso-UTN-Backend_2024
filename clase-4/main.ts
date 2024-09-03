// Tema pendiente de typescript
// ARRAYS

const nombres: string[] = ["pepe", "juan", "pedro"];

const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayEspecial: [string, number] = ["pepe", 1];

const mostrarEdad = (nombre: string, edad: number): void => {
    console.log(`hola ${nombre}, tienes ${edad} años`);
};

interface Producto {
    nombre: string;
    precio: number;
    id: number;
    descripcion: string;
}

const producto_1: Producto = {
    nombre: "computadora",
    precio: 1000,
    id: 1,
    descripcion: "computadora de escritorio",
};

const producto_2: Producto = {
    nombre: "computadora",
    precio: 1000,
    id: 2,
    descripcion: "TV Noblex",
};

const lista_productos: Producto[] = [producto_1, producto_2];

const tvNoblex: Producto | undefined = lista_productos.find(
    (producto: Producto): boolean => {
        return producto.id === 2;
    }
);

console.log(tvNoblex);

// TAREA

/* Quiero un array de booleanos donde los productos cuyo precio sea menor a 40 esten como true, pero los que sean mayores o iguales esten como false

[
    {precio: 10},
    {precio: 20},
    {precio: 41},
    {precio: 50}
]

return 

[
    true,
    true,
    false,
    false
]
*/

interface Precio {
    precio: number;
}

const listaPrecios: Precio[] = [
    { precio: 10 },
    { precio: 20 },
    { precio: 41 },
    { precio: 50 },
];

const preciosMenores40: boolean[] = listaPrecios.map(
    (precio: Precio): boolean => {
        return precio.precio < 40;
    }
);

console.log(preciosMenores40);
// POO en TypeScript
