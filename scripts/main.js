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
})

// Creamos personas
let misUsuarios = [];

// se recupera el formulario
const formulario = document.getElementById("formulario");

function listarInscriptos() {
    let bodyTable = document.getElementById("inscribirTableBody");
    bodyTable.innerHTML = "";
    misUsuarios.forEach((unUsuario) => {
        let grabar = document.createElement("tr");
        grabar.innerHTML = `<tr>
        <td scope="row">${unUsuario.id}</td>
        <td>${unUsuario.nombre.toString()}</td>
        <td>${unUsuario.apellido.toString()}</td>
        </tr>`;
        bodyTable.append(grabar);
    });
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
    const unaProvincia = document.getElementById("provincia").value;

    // Verificar la existencia de los datos
    let inscripto = buscarInscripto(nombre, apellido);
    
    // const datos = 
    // Se instancia un objeto con los datos de persona
    if(!inscripto) {
        inscripto = new Persona(
            generarTurno(misUsuarios),
            nombre,
            apellido,
            direccion,
            email,
            dni,
            localidad,
            edad,
            unaProvincia
            
        );

        console.log("los inscriptos son: ", inscripto);
        // Se agrega un inscripto nuevo a la lista
        misUsuarios.push(inscripto);
    }

    // Buscamos el DNI del usurio ingresado y evaluamos si existe o no.
    let unDni = buscarDni(parseInt(dni));
    if(unDni) {
        // informar error
        mostrarError([inscripto.toString() + ", ya existe el DNI ingresado."]);

        return false;
    }

    // Armar una lista
    // listarInscriptos();
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

function buscarDni(dni) {
  return misUsuarios.find(
    (es) => 
    es.dni === parseInt(dni)
  );
}

function generarTurno( collection = []) {
    let numeroAleatorio = Math.round( Math.random() * 101 );
    while (collection.some((elemento) => elemento.id === numeroAleatorio) ) {
        console.log("Este turno ya fue asignado a otra persona. Ahora vamos a generar otro.");
        numeroAleatorio = Math.round( Math.random() * 101 );
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

}


// Capturar evento del formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  hideMessage();
  let error = inscribirUsuarios();
  if(error.length > 0) {
    showErrorMessage(error);
    return false;
  }
  let resultado = inscribirUsuarios();
    if (resultado) {
      showSuccessMessage(["Estudiante inscripto en el curso de Meditación!"]);
      borrarCampos();
    }
    return resultado;

});


  // Administrar mensajes

  function mostrarError(
    mensaje = [],
    tipo = "success",
    titulo = "Operación exitosa!"
  ) {
    let messagesContainer = document.getElementById("messages");
    let messageBody = document.createElement("div");
    messageBody.setAttribute("role", "alert");
    messageBody.setAttribute("class", `alert alert-${tipo}`);
  
    // Personalisamos el mensaje con título y una división con los mensajes
    let titleBody = document.createElement("h4");
    titleBody.setAttribute("class", "alert-heading");
    titleBody.innerText = titulo;
    messageBody.append(titleBody);
  
    let divider = document.createElement("hr");
    messageBody.append(divider);
  
    // Añadimos unos a uno cada uno de los mensajes
    mensaje.forEach((msjs) => {
      let messageItem = document.createElement("p");
      messageItem.setAttribute("class", "mb-0");
      messageItem.innerText = msjs;
      messageBody.append(messageItem);
    });
  
    messagesContainer.append(messageBody);
  }
  
  function hideMessage() {
    let messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML = "";
  }
  
  function showSuccessMessage(messages = []) {
    mostrarError(messages, "success");
  }
  
  function showErrorMessage(messages = []) {
    mostrarError(messages, "danger", "Encontramos errores :(");
  }

