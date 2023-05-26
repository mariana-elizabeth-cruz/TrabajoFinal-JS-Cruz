
// Usando Rutas relativas
function recuperarComentario() {
  
  let bodyTable = document.getElementById("tableBody");
  bodyTable.innerHTML = "";
  toggleLoadingContainer(true);
  fetch("./../data/comment.json")
    .then((res) => res.json())
    .then((data) => {
      // Obtenemos la colección de comentarios
      data.forEach((coment) => {
        let record = document.createElement("tr");
        record.innerHTML = `<tr>
      <td scope="row">${coment.id}</td>
      <td scope="row">${coment.name}</td>
      <td scope="row">${coment.email}</td>
      <td scope="row">${coment.body}</td>
      </tr>`;
        bodyTable.append(record);
      });
    })
    .catch((error) => {
      let record = document.createElement("tr");
      record.innerHTML = `<tr>
        <td colspan="3" scope="row">Ocurrio un error al recuperar los datos</td>
      </tr>`;
      bodyTable.append(record);
    })
    .finally(() => {
      toggleLoadingContainer(false);
      console.log("Fin del proceso")

    });
}

recuperarComentario();

