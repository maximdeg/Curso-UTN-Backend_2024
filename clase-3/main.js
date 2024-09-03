"use strict";
let nombre = "pepe";
nombre = null;
console.log("hola " + nombre);
let datoRandom = true;
console.log(datoRandom);
// funcion sumar a+b y devuelve a+b
function sumar(a, b) {
    return a + b;
}
console.log(sumar("hola", 2));
// cuando hay un ? al final de un parametro significa que el valor es opcional
const saludar = (edad, nombre) => {
    console.log("mi edad es: " + edad);
    if (nombre) {
        return `hola ${nombre}`;
    }
    else {
        return `Hola, no se tu nombre`;
    }
};
console.log(saludar());
const persona = {
    nombre: "pepe",
    apellido: "perez",
    edad: 20,
};
const persona_2 = {
    nombre: "luis",
    apellido: "perez",
    edad: 20,
};
const saludarPersona = (persona) => {
    console.log(`hola ${persona.nombre} ${persona.apellido}`);
};
saludarPersona(persona);
// TAREA
function calcularIva(numero) {
    return numero * 1.21;
}
function obtenerImpuestoIva(num) {
    return { iva: "21% del numero recibido", total: calcularIva(num), base: num };
}
console.log(obtenerImpuestoIva(1000));
function crearPersonaje(nombre, edad, ciudadOrigen) {
    return {
        nombre,
        edad,
        ciudadOrigen,
        vida: 100,
        ataque: 10,
        defensa: 10,
        magia: 10,
    };
}
console.log(crearPersonaje("pepe", 20, "madrid"));
