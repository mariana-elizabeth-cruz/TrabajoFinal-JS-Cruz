class Contacto {
    constructor(id, nombre, apellido, email, mensaje) {
        this.id = id;
        this.nombre = nombre.trim();
        this.apellido = apellido.trim();
        this.email = email.trim();
        this.mensaje = mensaje;
    }
    toString() {
        return this.nombre.toUpperCase();
    }
}

let misMensajes = [];

function enviarMensaje() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    let mensajeria = new Contacto(
        generarId(misMensajes),
        nombre,
        apellido,
        email,
        mensaje
    );

    // verificamos que todos los datos sean ingresados
    if (nombre.trim() === "") {
        return false;
    }
    if (apellido.trim() === "") {
        return false;
    }
    if (email.trim() === "") {
        return false;
    }
    if (mensaje === "") {
        return false;
    }

    console.log("se envio los siguientes mensajes: ", mensajeria);
    misMensajes.push(mensajeria);
    return true;
}

//Generamos un Id
function generarId(collection = []) {
    let numeroAleatorio = Math.round(Math.random() * 1001);
    while (collection.some((elemento) => elemento.id === numeroAleatorio)) {
        console.log("numero repetido, se va a generar otro");
        numeroAleatorio = Math.round(Math.random() * 1001);
    }
    return numeroAleatorio;
}

// se recupera el formulario
const enviarMsj = document.getElementById("enviarMsj");

// Capturar evento del formulario
enviarMsj.addEventListener("submit", (event) => {
    event.preventDefault();

    let resultado = enviarMensaje();
    if (resultado) {
        Swal.fire({
            icon: 'success',
            title: 'Su mensaje se envio exitosamente!',
            showConfirmButton: false,
            timer: 3000
        })
        console.log("enviado");
        borrarMensaje()
        return resultado;
    }
});

function borrarMensaje() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
}