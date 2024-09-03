class Empleado {
    constructor(nombre, sueldo, fecha_de_contratacion, puesto, id_empleado) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_de_contratacion = fecha_de_contratacion;
        this.id_empleado = id_empleado;
        this.puesto = puesto;
    }
    aumentarSueldo(aumento) {
        this.sueldo = this.sueldo + aumento;
        return this.sueldo;
    }
    presentar() {
        alert('Hola, me llamo ' + this.nombre + ' y trabajo como ' + this.puesto);
    }
}
class Pasante extends Empleado {
    constructor(nombre, sueldo, fecha_de_contratacion, puesto, id_empleado, tiempo_prueba_en_meses) {
        super(nombre, sueldo, fecha_de_contratacion, puesto, id_empleado);
        this.tiempo_prueba_en_meses = tiempo_prueba_en_meses;
        this.activo = true;
    }
    presentar() {
        alert('Hola, soy el pasante ' + this.nombre + ' y trabajo como ' + this.puesto);
    }
    finalizarPasantia() {
        this.activo = false;
    }
}
export { Empleado, Pasante };
