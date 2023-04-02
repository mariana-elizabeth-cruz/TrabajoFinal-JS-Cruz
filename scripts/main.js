console.log("Inicio de pruebas");
let nombre = "";
let apellido = "";
let edad = 0;
let cantidad = 2;

alert("¡¡¡Bienvenido!!!");


for (let usuario = 1; usuario <= cantidad; usuario++){
    alert("Vamos a inciar la inscripción de tu curso...");
    pedirDatos();

    // Se controla la edad 
    if(isNaN(edad)) {
        cantidad += 1;
        alert("No es un numero");
    }
    if(edad < 18) {
        cantidad += 1;
        alert("No se puede asignar un turno. Debes ser mayor de edad.");
    }
    if (edad >= 18 ) {
        alert("Ahora vamos a asignarte un turno");
    }

    // cantidad de turnos restantes
    let faltanUsuarios = cantidad - usuario;
    let mensaje = "Aun quedan " + faltanUsuarios + " lugares disponibles ";
    if (faltanUsuarios == 1) {
        mensaje = "Queda solo 1 lugar para el cierre de la inscrión al curso de Meditación";
    }
    if (faltanUsuarios == 0) {
        mensaje = "Lo siento, ya no quedan lugares. Nos vemos en la próxima edición.";
    }
    alert(mensaje);

}

function pedirDatos() {
    // Pedimos el nomnbre y apellido del usuario 
    nombre = prompt("¿Podrías decirme tu nombre?");
    apellido = prompt("¿Cúal es tu apellido ".concat(nombre, "?"));
    // Se ingresa la edad del usuario
    edad = parseInt(prompt("Ingrese su edad"));

}

function asignarTurno() {
    alert("Los dias disponibles son LUNES, MARTES Y MIERCOLES");
    let dia = prompt("Ingrese el día que desea iniciar el curso");

    while (dia.toUpperCase() != "MARTES" || dia.toUpperCase() != "JUEVES" || dia.toUpperCase() != "DOMINGO") {
        switch (dia.toUpperCase()) {
        case "LUNES":
            alert(nombre + ", te espero el Lunes a las 18hs." );
            break;
        case "MIERCOLES":
                alert(nombre + ", te espero el Miércoles a las 18hs." );
            break;
        case "VIERNES":
                alert(nombre + ", te espero el Viernes a las 18hs." );
            break;
        case "SABADO":
                alert(nombre + ", te espero el Sábado a las 18hs." );
            break;
        }
    }
    
}


// let asignarDia = pedirDatos();
// alert(asignarDia);

// function controlarEdad(suEdad) {
//     if (isNaN(suEdad)) {
//         return "Error. Debe ingresar un número para su edad."
//     }
// }

// pruebas por consola
console.log("El nombre ingresado es: ".concat(nombre," ",apellido));
console.log("La edad ingresada es: ".concat(edad," años"));


