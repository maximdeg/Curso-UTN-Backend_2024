type Puesto = "Project Manager" | "Developer" | "Designer" | "Merketing";

class Empleado {
    nombre: string;
    sueldo: number;
    fecha_de_contratacion: string;
    id_empleado: number;
    puesto: Puesto;

    constructor(
        nombre: string,
        sueldo: number,
        fecha_de_contratacion: string,
        puesto: Puesto,
        id_empleado: number
    ) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_de_contratacion = fecha_de_contratacion;
        this.puesto = puesto;
        this.id_empleado = id_empleado;
    }

    aumentarSueldo(aumento): number {
        this.sueldo += aumento;
        return this.sueldo;
    }

    presentar(): void {
        alert("Hola, me llamo " + this.nombre + " y soy " + this.puesto);
    }
}

class Pasante extends Empleado {
    tiempo_prueba_en_meses: number;
    activo: boolean;

    constructor(
        nombre: string,
        sueldo: number,
        fecha_de_contratacion: string,
        puesto: Puesto,
        id_empleado: number,
        tiempo_prueba_en_meses: number
    ) {
        super(nombre, sueldo, fecha_de_contratacion, puesto, id_empleado);
        this.tiempo_prueba_en_meses = tiempo_prueba_en_meses;
        this.activo = true;
    }

    presentar(): void {
        alert(
            "Hola, soy el pasante " +
                this.nombre +
                " y trabajo como " +
                this.puesto
        );
    }

    finalizarPasantia() {
        this.activo = false;
    }
}

export { Empleado, Puesto, Pasante };
