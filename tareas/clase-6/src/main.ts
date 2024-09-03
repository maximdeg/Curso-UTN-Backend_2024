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
    id: number = 0;
    date: Date;
    description: string;
    active: Boolean;

    constructor(id: number, date: Date, description: string) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.active = true;
    }

    mostrarDetalle(): void {
        console.log(
            `Ocurrio esto ${this.description} el dia ${this.date.getDay()}/${
                this.date.getMonth
            } `
        );
    }
}

class AccionInicioSesion extends Accion {
    dispositivoOrigen: string;

    constructor(
        id: number,
        date: Date,
        description: string,
        dispositivoOrigen: string
    ) {
        super(id, date, description);
        this.dispositivoOrigen = dispositivoOrigen;
    }

    mostrarDetalle(): void {
        super.mostrarDetalle();
        console.log(
            "Description: " +
                this.description +
                "\nDispositivo Origen: " +
                this.dispositivoOrigen
        );
    }
}

class Cambio {
    id_cambio: number;
    valor_anterior: string;
    nuevo_valor: string;
    constructor(
        id_cambio: number,
        valor_anterior: string,
        nuevo_valor: string
    ) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.nuevo_valor = nuevo_valor;
    }

    mostrarCambio(): void {
        console.log(
            `Valor anterior: "${this.valor_anterior}"\nValor actual: "${this.nuevo_valor}"`
        );
    }
}

class AccionActualizacionPerfil extends Accion {
    cambios: Cambio[];

    constructor(
        id: number,
        date: Date,
        description: string,
        cambios: Cambio[]
    ) {
        super(id, date, description);
        this.cambios = cambios;
    }

    mostrarDetalle(): void {
        super.mostrarDetalle();

        console.log("Cambios realizados:");
        this.cambios.forEach((cambio) => cambio.mostrarCambio());
    }
}

class AccionCompra extends Accion {
    productos: Array<string>;
    total: number;

    constructor(
        id: number,
        date: Date,
        description: string,
        productos: Array<string>,
        total: number
    ) {
        super(id, date, description);
        this.productos = productos;
        this.total = total;
    }

    mostrarDetalle(): void {
        super.mostrarDetalle();

        console.log(
            `Sus productos son: ${this.productos} \n Y su total es: ${this.total}`
        );
    }
}

class AccionEnvioMensaje extends Accion {
    destinatario: string;
    mensaje: string;

    constructor(
        id: number,
        date: Date,
        description: string,
        destinatario: string,
        mensaje: string
    ) {
        super(id, date, description);
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }

    mostrarDetalle(): void {
        super.mostrarDetalle();

        console.log(
            `Mensaje: ${this.mensaje}\nDestinatario: ${this.destinatario}`
        );
    }
}

class Historial {
    historial: Array<Accion> = [];

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

const historial = new Historial();

const inicioSesion = new AccionInicioSesion(
    1,
    new Date(),
    "Usuario inicio sesion",
    "Computadora MAC"
);

const actualizarPerfil = new AccionActualizacionPerfil(
    2,
    new Date(),
    "Actualizacion de perfil",
    [new Cambio(1, "pepe@pepe.com", "pepe@gmail.com")]
);

const compra = new AccionCompra(
    3,
    new Date(),
    "Compra de producos",
    ["Monitor", "Teclado", "Mouse"],
    5000
);

const enviarMensaje = new AccionEnvioMensaje(
    4,
    new Date(),
    "Envio de mensaje",
    "Pepe",
    "Hola Pepe. Como estas? Me prestas dinero para un monitor, teclado y mouse"
);

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
