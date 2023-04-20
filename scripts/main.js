alert("¡¡¡Inscripciones Abiertas!!!");

// creacion de clase Usuario
class Usuario {
    constructor(nombre, apellido, dni, edad, correo, provincia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
        this.correo = correo;
        this.provincia = provincia;
    }
}

// Crear array de usuarios
let misUsuarios = [];

let verificar = "SI";

// Ingreso de datos
do {
    alert("Vamos a inciar la inscripción de tu curso...");
    pedirDatos();
    const unUsuario = new Usuario(nombre, apellido, dni, edad, correo, provincia);
    misUsuarios.push(unUsuario);

    // Se asigna un turno dependiendo de la edad
    controlarInscripcion(nombre, edad);

    verificar = prompt("¿Desea realizar otra inscripción? SI/NO");

} while (verificar.toUpperCase() != "NO");


// mostrar lista de usuarios inscriptos
misUsuarios.forEach( (lista)=> {
    console.log("Datos personales de los Inscriptos: ", lista);
} )


// Pedimos los datos al usuario 
function pedirDatos() {
    cargarNombre();
    cargarApellido();
    cargarDni();
    cargarEdad();
    cargarCorreo();
    cargarProvincia();
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

// Controlar DNI
function cargarDni() {
    let continuar = true;
    while (continuar) {
        testDni = parseInt(prompt("Ingrese su número de DNI:"));
        if(isNaN(testDni) && testDni.length != 0) {
            alert("Debe ingresar su DNI (solo se permiten números)");
        } else {
            dni = testDni;
            continuar = false;
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

// Controlar Correo
function cargarCorreo() {
    let continuar = true;
    while (continuar) {
        let testCorreo = prompt("Ingrese su correo electronico");    
        if (testCorreo.length != 0) {
            correo = testCorreo;
            continuar = false;
        } else {
            alert("Debe ingresar su correo electronico")
        }
    }
}

// Controlar Provincia
function cargarProvincia() {
    let continuar = true;
    while (continuar) {
        let testProv = prompt("¿Cúal es tu provincia?");    
        if (testProv.length != 0) {
            provincia = testProv;
            continuar = false;
        } else {
            alert("Debe ingresar su nombre...")
        }
    }
}

function controlarInscripcion (nombre, edad) {
    // Control de edad
    if(edad < 18) {
        alert("Lo siento ".concat(nombre, ", no se puede asignar un turno. Debes ser mayor de edad."));
    }
    if (edad >= 18 ) {
        alert("Ahora vamos a asignarte un turno ".concat(nombre));

        // Asignamos una fecha a la inscripcion 
        asignarTurno();
    }
}

//Funcion para otorgar turno
function asignarTurno() {
    let fechaLunes = new Date(2023, 5, 15, 18, 00, 00);
    let fechaMiercoles = new Date(2023, 5, 17, 17, 00, 00);
    let fechaViernes = new Date(2023, 5, 19, 19, 30, 00);
    let fechaSabado = new Date(2023, 5, 20, 10, 30, 00);

    const MENSAJE = nombre + " tu curso inicia: ";
    const INFORMACION = "Se te asigno el siguiente número de comisión: ";

    // generar un numero para la comision
    const generarNumero = () => {
        return Math.round( Math.random() * 10 )
    }

    do {
        alert("Los dias disponibles son LUNES, MIERCOLES, VIERNES Y SABADO");
        dia = prompt("Ingrese el día que desea iniciar el curso");
        switch (dia.toUpperCase()) {
            case "LUNES":
                console.log(MENSAJE, fechaLunes);
                console.log(INFORMACION, generarNumero());          
                break;
            case "MIERCOLES":
                    console.log(MENSAJE, fechaMiercoles);
                    console.log(INFORMACION, generarNumero());
                break;
            case "VIERNES":
                    console.log(MENSAJE, fechaViernes);
                    console.log(INFORMACION, generarNumero());
                break;
            case "SABADO":
                    console.log(MENSAJE, fechaSabado);
                    console.log(INFORMACION, generarNumero());
                break;
            default:
                let incorrecto = true;
                if (incorrecto) {
                    alert("EL día ingresado es incorrecto");
                }
                break;
        }
    } while (dia.toUpperCase() == "MARTES" || dia.toUpperCase() == "JUEVES" || dia.toUpperCase() == "DOMINGO");
}


let nombres = misUsuarios.map((usuario) => usuario.nombre);
console.log("Bienvenidos a nuestros nuevos inscriptos: ", nombres);