import { Empleado, Pasante } from "./Types/Empleados.js";
class ManejadorEmpleados {
    constructor() {
        this.id_manejador = 0;
        this.id_empleado = 0;
        this.empleados = [];
    }
    agregar_empleado(nombre, sueldo, fecha_de_contratacion, puesto) {
        const nuevoEmpleado = new Empleado(
            nombre,
            sueldo,
            fecha_de_contratacion,
            puesto,
            this.id_empleado++
        );
        this.empleados.push(nuevoEmpleado);
        console.log("Empleado agregado: ", nuevoEmpleado.nombre);
    }
    obtener_empleado_por_id(idBuscado) {
        return this.empleados.find((empleado) => {
            return empleado.id_empleado === idBuscado;
        });
    }
    obtener_empleados_por_tipo(puesto) {
        return this.empleados.filter((empleado) => {
            return empleado.puesto === puesto;
        });
    }
}
const manejadorEmpleados = new ManejadorEmpleados();
manejadorEmpleados.agregar_empleado("Manuel", 10000, "12/01/2024", "Developer");
manejadorEmpleados.agregar_empleado(
    "Manuela",
    2010000,
    "12/11/2024",
    "Designer"
);
manejadorEmpleados.agregar_empleado(
    "Manuelita",
    40010000,
    "12/10/2024",
    "Developer"
);
const manuelita = manejadorEmpleados.obtener_empleado_por_id(2);
const developers = manejadorEmpleados.obtener_empleados_por_tipo("Developer");
const pasante_1 = new Pasante("Pepe", 2000000, "12/12/2024", "Developer", 3, 6);
console.log(developers);
console.log(manuelita);
console.log(pasante_1);
pasante_1.aumentarSueldo(30000);
console.log(pasante_1);
pasante_1.finalizarPasantia();
console.log(pasante_1);
manuelita.presentar();
pasante_1.presentar();
