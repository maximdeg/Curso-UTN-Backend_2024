let nombre: string | null = "pepe";
nombre = null;

console.log("hola " + nombre);

let datoRandom: any = true;
console.log(datoRandom);

// funcion sumar a+b y devuelve a+b
function sumar(a: string, b: number): any {
  return a + b;
}

console.log(sumar("hola", 2));

// cuando hay un ? al final de un parametro significa que el valor es opcional
const saludar = (edad?: number, nombre?: string) => {
  console.log("mi edad es: " + edad);
  if (nombre) {
    return `hola ${nombre}`;
  } else {
    return `Hola, no se tu nombre`;
  }
};

console.log(saludar());

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}

const persona: Persona = {
  nombre: "pepe",
  apellido: "perez",
  edad: 20,
};

const persona_2: Persona = {
  nombre: "luis",
  apellido: "perez",
  edad: 20,
};

const saludarPersona = (persona: Persona): void => {
  console.log(`hola ${persona.nombre} ${persona.apellido}`);
};

saludarPersona(persona);

// TAREA

function calcularIva(numero: number): number {
  return numero * 1.21;
}

interface Factura {
  iva: string;
  total: number;
  base: number;
}
function obtenerImpuestoIva(num: number): Factura {
  return { iva: "21% del numero recibido", total: calcularIva(num), base: num };
}

console.log(obtenerImpuestoIva(1000));

// TAREA 2

interface Personaje {
  nombre: string;
  edad: number;
  ciudadOrigen: string;
  vida: number;
  ataque: number;
  defensa: number;
  magia: number;
}

function crearPersonaje(
  nombre: string,
  edad: number,
  ciudadOrigen: string
): Personaje {
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
