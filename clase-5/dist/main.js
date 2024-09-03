import { Empleado, Pasante } from "./Types/Empleado.js";
class ManejadorEmpleados {
    constructor(empresa) {
        this.id_empleados = 0;
        this.empleados = [];
        this.empresa = empresa;
    }
    agregar_empleado(nombre, sueldo, fecha_de_contratacion, puesto) {
        const nuevoEmpleado = new Empleado(nombre, sueldo, fecha_de_contratacion, puesto, this.id_empleados++);
        this.empleados.push(nuevoEmpleado);
        return this.empleados;
    }
    obtener_empleado_por_id(id) {
        return this.empleados.find((empleado) => {
            return empleado.id_empleado === id;
        });
    }
    obtener_empleados_por_puesto(puesto) {
        return this.empleados.filter((empleado) => (empleado.puesto === puesto));
    }
}
const manejadorEmpleados = new ManejadorEmpleados('Banco de la pampa');
manejadorEmpleados.agregar_empleado('Martin Gubler', 1800000, '20/08/2024', 'Developer');
manejadorEmpleados.agregar_empleado('Guillermo Eduardo', 2000000, '20/08/2024', 'Project Manager');
const guille = manejadorEmpleados.obtener_empleado_por_id(1);
const developersBancoDeLaPampa = manejadorEmpleados.obtener_empleados_por_puesto('Developer');
const pasante_1 = new Pasante('Pepe', 200000, '20/8/2024', 'Developer', 2, 3);
console.log(developersBancoDeLaPampa);
/* guille.aumentarSueldo(40000) */
pasante_1.aumentarSueldo(30000);
pasante_1.finalizarPasantia();
/* guille.presentar() */
/* pasante_1.presentar() */
/* console.log(pasante_1) */
/*
console.log(guille) */ 
