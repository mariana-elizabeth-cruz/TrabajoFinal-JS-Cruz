console.log("Inicio de pruebas");
let nombre = "";
let apellido = "";
let edad = 0;
let cantidad = 1;
let dia = "";

alert("¡¡¡Inscripciones!!!");

for (let usuario = 1; usuario <= cantidad; usuario++){
    // let continuar = prompt("Desea continuar: SI / NO");
    // if (continuar.toUpperCase == "NO") {
    //     break;
    // }
    alert("Vamos a inciar la inscripción de tu curso...");
    pedirDatos();

    if(edad < 18) {
        cantidad += 1;
        alert("No se puede asignar un turno. Debes ser mayor de edad.");
    }
    if (edad >= 18 ) {
        alert("Ahora vamos a asignarte un turno");
        // Asignamos dia y horarios
        asignarTurno();
        
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
    // Pedimos el nomnbre, apellido y edad al usuario 
    cargarNombre();
    cargarApellido();
    cargarEdad();

}

// Controlar nombre
function cargarNombre() {
    let continuar = true;
    while (continuar) {
        let testNombre = prompt("¿Podrías decirme tu nombre?");    
        if (testNombre.length != 0) {
            nombre = testNombre;
            continuar = false;
        } else {
            alert("Debe ingresar su nombre...")
        }
    }
}

// Controlar apellido
function cargarApellido() {
    let continuar = true;
    while (continuar) {
        let testApellido = prompt("¿Cúal es tu apellido ".concat(nombre, "?")); 
        if (testApellido.length != 0) {
            apellido = testApellido;
            continuar = false;
        } else {
            alert("Debe ingresar su apellido...")
        }
    }
}

// Controlar edad
function cargarEdad() {
    let continuar = true;
    while (continuar) {
        testEdad = parseInt(prompt("Ingrese su edad"));
        if(isNaN(testEdad) && testEdad.length != 0) {
            alert("Debe ingresar su edad (solo se permiten números)");
        } else {
            edad = testEdad;
            continuar = false;
        }
    }
}

//Funcion para otorgar turno
function asignarTurno() {
    do {
        alert("Los dias disponibles son LUNES, MIERCOLES, VIERNES Y SABADO");
        dia = prompt("Ingrese el día que desea iniciar el curso");
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
            default:
                let incorrecto = true;
                if (incorrecto) {
                    cantidad += 1;
                    alert("EL día ingresado es incorrecto");
                }
                break;
        }
    } while (dia.toUpperCase() == "MARTES" || dia.toUpperCase() == "JUEVES" || dia.toUpperCase() == "DOMINGO");
    
}

// pruebas por consola
console.log("El nombre ingresado es: ".concat(nombre," ",apellido));
console.log("La edad ingresada es: ".concat(edad," años"));


