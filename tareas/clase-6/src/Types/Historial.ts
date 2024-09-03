class Accion {
    id: number = 0;
    date: string;
    description: string;
    active: Boolean;

    constructor(date: string, description: string) {
        this.date = date;
        this.description = description;
        this.active = true;
    }
}

class Historial {
    public historial: Array<Accion> = [];
    constructor(historial: Array<Accion> = []) {
        this.historial = historial;
    }

    agregarAccion(accion: Accion): void {
        this.historial.push(accion);
        console.log("Accion agredada: ", accion);
    }

    eliminarAccionPorID(idParaEliminar: number): void {
        this.historial = this.historial.filter(
            (accion: Accion): Boolean => accion.id != idParaEliminar
        );
    }

    eliminarTodo(): void {
        this.historial.forEach((accion: Accion) => {
            if (accion.active) accion.active = false;
        });
    }

    mostrarHistorial(): void {
        this.historial.forEach((accion: Accion): void => {
            if (accion.active) return console.log(accion);
        });
    }
}

export { Historial };

// class Historial{
//     constructor(public historial: Array<Accion> = []){
//         this.historial = historial;
//     }
// }
