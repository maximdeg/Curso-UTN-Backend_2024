// # Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en JavaScript
// En este ejercicio, vamos a crear un sistema básico de historial utilizando Programación Orientada a Objetos (POO) en JavaScript.
// Imagina que tienes una lista de acciones que un usuario realiza en una aplicación, y quieres guardar esas acciones en un historial
// para poder verlas más tarde, eliminarlas individualmente o limpiar todo el historial.
// ## Objetivo
// - **Crear una clase de historial** donde se puedan agregar, eliminar por ID y eliminar todas las acciones.
// - **Usar métodos avanzados de arrays** como `filter`, `find`, y `findIndex` para gestionar el historial.
// - **Aplicar conceptos de POO** como clases, objetos, métodos y encapsulamiento.
// ## Tareas
// 1. **Definir una clase `Historial`**:
//    - Esta clase tendrá una propiedad interna para almacenar las acciones en un array.
//    - Incluirá métodos para agregar una nueva acción, eliminar una acción por ID, eliminar todas las acciones y mostrar el historial.
// 2. **Crear una clase `Accion`**:
//    - Cada acción será representada por una instancia de la clase `Accion`.
//    - Esta clase tendrá propiedades para `id`, `descripcion` y `fecha`.
// 3. **Crear métodos en la clase `Historial`**:
//    - **`agregarAccion(accion)`**: Método para agregar una nueva acción al historial.
//    - **`eliminarAccionPorID(id)`**: Método para eliminar una acción específica del historial usando su ID.
//    - **`eliminarTodo()`**: Método para eliminar todas las acciones del historial.
//    - **`mostrarHistorial()`**: Método para mostrar en la consola todas las acciones en el historial.
class Accion {
    constructor(id, date, description) {
        this.id = 0;
        this.id = id;
        this.date = date;
        this.description = description;
        this.active = true;
    }
    mostrarDetalle() {
        console.log("Description: " + this.description);
    }
}
class AccionInicioSesion extends Accion {
    constructor(id, date, description, dispositivoOrigen) {
        super(id, date, description);
        this.dispositivoOrigen = dispositivoOrigen;
    }
    mostrarDetalle() {
        super.mostrarDetalle();
        console.log("Description: " +
            this.description +
            "\nDispositivo Origen: " +
            this.dispositivoOrigen);
    }
}
class Cambio {
    constructor(id_cambio, valor_anterior, nuevo_valor) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.nuevo_valor = nuevo_valor;
    }
    mostrarCambio() {
        console.log(`Valor anterior: "${this.valor_anterior}"\nValor actual: "${this.nuevo_valor}"`);
    }
}
class AccionActualizacionPerfil extends Accion {
    constructor(id, date, description, cambios) {
        super(id, date, description);
        this.cambios = cambios;
    }
    mostrarDetalle() {
        super.mostrarDetalle();
        console.log("Cambios realizados:");
        this.cambios.forEach((cambio) => cambio.mostrarCambio());
    }
}
class AccionCompra extends Accion {
    constructor(id, date, description, productos, total) {
        super(id, date, description);
        this.productos = productos;
        this.total = total;
    }
    mostrarDetalle() {
        super.mostrarDetalle();
        console.log(`Sus productos son: ${this.productos} \n Y su total es: ${this.total}`);
    }
}
class AccionEnvioMensaje extends Accion {
    constructor(id, date, description, destinatario, mensaje) {
        super(id, date, description);
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }
    mostrarDetalle() {
        super.mostrarDetalle();
        console.log(`Mensaje: ${this.mensaje}\nDestinatario: ${this.destinatario}`);
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
const historial = new Historial();
const inicioSesion = new AccionInicioSesion(1, new Date(), "Usuario inicio sesion", "Computadora MAC");
const actualizarPerfil = new AccionActualizacionPerfil(2, new Date(), "Actualizacion de perfil", [new Cambio(1, "pepe@pepe.com", "pepe@gmail.com")]);
const compra = new AccionCompra(3, new Date(), "Compra de producos", ["Monitor", "Teclado", "Mouse"], 5000);
const enviarMensaje = new AccionEnvioMensaje(4, new Date(), "Envio de mensaje", "Pepe", "Hola Pepe. Como estas? Me prestas dinero para un monitor, teclado y mouse");
historial.agregarAccion(inicioSesion);
historial.agregarAccion(actualizarPerfil);
historial.agregarAccion(compra);
historial.agregarAccion(enviarMensaje);
historial.mostrarHistorial();
inicioSesion.mostrarDetalle();
actualizarPerfil.mostrarDetalle();
compra.mostrarDetalle();
enviarMensaje.mostrarDetalle();
// historial.eliminarAccionPorID(1);
// historial.mostrarHistorial();
// historial.eliminarTodo();
// historial.mostrarHistorial();
