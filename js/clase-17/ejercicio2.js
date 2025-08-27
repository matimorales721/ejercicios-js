const formEjercicioClase17_2 = document.getElementById("formEjercicioClase17_2");
let lista = formEjercicioClase17_2.querySelector("#listaTareas-c17");

formEjercicioClase17_2.querySelector("#agregarTarea-c17").addEventListener("click", (e) => {
  let nuevaTarea = formEjercicioClase17_2.querySelector("#nuevaTarea-c17").value.trim();

  if (nuevaTarea !== "") {
    let li = document.createElement("li");
    li.textContent = nuevaTarea;

    let checkCompletada = document.createElement("input");
    checkCompletada.type = "checkbox";
    checkCompletada.style.marginLeft = "10px";
    checkCompletada.addEventListener("change", () => {
      if (checkCompletada.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.marginLeft = "10px";
    botonEliminar.addEventListener("click", () => {
      lista.removeChild(li);
    });

    li.appendChild(checkCompletada);
    li.appendChild(botonEliminar);
    lista.appendChild(li);
    formEjercicioClase17_2.querySelector("#nuevaTarea-c17").value = "";
  }
});
