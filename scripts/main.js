// Lista de Provincia
const prov = [
  new Ciudad(1, "Jujuy"),
  new Ciudad(2, "La Pampa"),
  new Ciudad(3, "Entre Rios"),
  new Ciudad(4, "La Rioja"),
  new Ciudad(5, "Misiones"),
  new Ciudad(6, "Salta"),
  new Ciudad(7, "Corrientes"),
  new Ciudad(8, "Río Negro"),
  new Ciudad(9, "Santiago del Estero"),
  new Ciudad(10, "Córdoba"),
];

// Creamos una lista para las provincias
let listaProv = document.getElementById("provincia");
prov.forEach((unaProvincia) => {
  let item = document.createElement("option");
  item.value = unaProvincia.id.toString();
  item.innerText = unaProvincia.provincia;
  listaProv.append(item);
});

let usuariosJSON = [];
// Creamos un array de personas vacio
let misUsuarios = [];

// para local storage
function listarInscriptos(collection = []) {
  let bodyTable = document.getElementById("inscribirTableBody");
  bodyTable.innerHTML = "";
  collection.forEach((unUsuario) => {
    let grabar = document.createElement("tr");
    grabar.innerHTML = `<tr>
        <td scope="row">${unUsuario.id}</td>
        <td>${unUsuario.nombre.toUpperCase()}</td>
        <td>${unUsuario.apellido.toUpperCase()}</td>
        <td>${unUsuario.dni}</td>
        </tr>`;
    bodyTable.append(grabar);
  });
}

// Preguntamos si el objeto es nulo
if (localStorage.getItem("misUsuarios")) {
  // recuperar usuarios
  usuariosJSON = JSON.parse(localStorage.getItem("misUsuarios"));

  misUsuarios = usuariosJSON.map(
    (elemento) =>
      new Persona(
        elemento.id,
        elemento.nombre,
        elemento.apellido,
        elemento.direccion,
        elemento.email,
        elemento.dni,
        elemento.localidad,
        elemento.edad,
        elemento.provincia,
        elemento.acepto
      )
  );
  //Se ordena los datos ingresados
  misUsuarios.sort((primero, segundo) => primero.id - segundo.id);

  listarInscriptos(misUsuarios);
}

// Ingresamos los datos de las personas
function inscribirUsuarios() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const direccion = document.getElementById("direccion").value;
  const email = document.getElementById("email").value;
  const dni = document.getElementById("dni").value;
  const localidad = document.getElementById("localidad").value;
  const edad = document.getElementById("edad").value;
  const provincia = document.getElementById("provincia").value;
  const acepto = document.getElementById("acepto").checked;

  // buscamos nombre y apellido
  let inscripto = buscarInscripto(nombre, apellido);

  // recuperar provincias
  const unaProvincia = prov.find((e) => e.id.toString() === provincia);
  // Se instancia un objeto con los datos de persona
  if (!inscripto) {
    inscripto = new Persona(
      generarTurno(misUsuarios),
      nombre,
      apellido,
      direccion,
      email,
      dni,
      localidad,
      edad,
      unaProvincia,
      acepto
    );

    // Buscamos el DNI del usurio ingresado y evaluamos si existe o no.
    const buscar = buscarDni(dni);
    if (buscar) {
      console.log("el DNI ya existe!");
      return false;
    }

    if (direccion.trim() === "") {
      return false;
    }
    if (email.trim() === "") {
    } else if (!validarEmail(email)) {
      return false;
    }
    if (dni.trim() === "") {
      return false;
    }
    if (localidad.trim() === "") {
      return false;
    }
    if (edad.trim() === "") {
      return false;
    }

    console.log("los inscriptos son: ", inscripto);
    // Se agrega un inscripto nuevo a la lista
    misUsuarios.push(inscripto);

    // Almacenar los datos en el local storage
    localStorage.setItem("misUsuarios", JSON.stringify(misUsuarios));
  } else {
    // informa un error al ingresar los mismos datos
    console.log("error de inscripcion");
    const btn = document.querySelector("#enviar");

    btn.addEventListener("click", () => {
      Swal.fire({
        icon: "error",
        title: "Algo salio mal",
        text: "Error al ingresar los datos",
      });
    });
    return false;
  }

  // Armar una lista de personas
  listarInscriptos(misUsuarios);
  return true;
}

//metodo para buscar nuevo usuario
function buscarInscripto(nombre, apellido) {
  return misUsuarios.find(
    (estu) =>
      estu.nombre.toUpperCase() === nombre.toUpperCase() &&
      estu.apellido.toUpperCase() === apellido.toUpperCase()
  );
}

//buscamos el dni ingresado
function buscarDni(dni) {
  return misUsuarios.find((es) => es.dni === dni);
}

//Generamos un Id que sera el numero de Turno asignado
function generarTurno(collection = []) {
  let numeroAleatorio = Math.round(Math.random() * 101);
  while (collection.some((elemento) => elemento.id === numeroAleatorio)) {
    console.log(
      "Este turno ya fue asignado a otra persona. Ahora vamos a generar otro."
    );
    numeroAleatorio = Math.round(Math.random() * 101);
  }
  return numeroAleatorio;
}

// Borrar los campos para un nuevo ingreso
function borrarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("localidad").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("provincia").value = "";
  document.getElementById("acepto").value = "off";
}

// validacion de email
function validarEmail(email) {
  // Expresión regular para validar el formato de un email
  const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return mail.test(email);
}

// se recupera el formulario
const formulario = document.getElementById("formulario");

// Capturar evento del formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  let resultado = inscribirUsuarios();
  if (resultado) {
    Swal.fire({
      title: "Listo!",
      text: "Te inscribiste correctamente al curso de Meditación!",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
    console.log("Se agregaron personsas");
    borrarCampos();
    return resultado;
  } else {
    console.log("no se ingreso nada");
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Verifica que todos los datos esten completos.",
    });
    event.target.classList.add("was-validated");
    return false;
  }
});

// localStorage.clear();

