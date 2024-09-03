class Accion {
    constructor(date, description) {
        this.id = 0;
        this.date = date;
        this.description = description;
        this.active = true;
    }
}
class Historial {
    constructor(historial = []) {
        this.historial = [];
        this.historial = historial;
    }
    agregarAccion(accion) {
        this.historial.push(accion);
        console.log("Accion agredada: ", accion);
    }
    eliminarAccionPorID(idParaEliminar) {
        this.historial = this.historial.filter((accion) => accion.id != idParaEliminar);
    }
    eliminarTodo() {
        this.historial.forEach((accion) => {
            if (accion.active)
                accion.active = false;
        });
    }
    mostrarHistorial() {
        this.historial.forEach((accion) => {
            if (accion.active)
                return console.log(accion);
        });
    }
}
export { Historial };
// class Historial{
//     constructor(public historial: Array<Accion> = []){
//         this.historial = historial;
//     }
// }
