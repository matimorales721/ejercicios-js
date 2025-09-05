const formEjercicioClase18_2 = document.getElementById("formEjercicioClase18_2");
let ul_tareas = formEjercicioClase18_2.querySelector("#ul_listaTareas_c18");
let tareasFiltradas = [];

/*
  Ejemplo de estructura html de la lista de tareas usando <ul>
  <ul>
    <li>Tarea 1 <input type="checkbox" /> <button>Eliminar</button></li>
    <li>Tarea 2 <input type="checkbox" /> <button>Eliminar</button></li>
    <li>Tarea 3 <input type="checkbox" /> <button>Eliminar</button></li>
  </ul>

  Se vería así en la pantalla:
  - Tarea 1 ✅ |Eliminar|
  - Tarea 2 ❌ |Eliminar|
  - Tarea 3 ✅ |Eliminar|
*/

// evento click en el boton agregar tarea
formEjercicioClase18_2.querySelector("#agregarTarea-c18").addEventListener("click", (e) => {
  // traigo del DOM el valor del input con la nueva tarea
  let nuevaTarea = formEjercicioClase18_2.querySelector("#nuevaTarea-c18").value.trim();

  if (nuevaTarea == "") {
    return; // si el input está vacío, no hago nada
  }

  // creo el elemento <li>
  let li = document.createElement("li");
  li.textContent = nuevaTarea;
  formEjercicioClase18_2.querySelector("#nuevaTarea-c18").value = ""; // limpio el input

  // Al <li> le quiero agregar sus propios children:
  // un input (checkbox para marcar como completada) y un button (para eliminar)

  // creo un elemento Checkbox para marcar como completada
  let checkCompletada = document.createElement("input");
  checkCompletada.type = "checkbox";
  checkCompletada.style.marginLeft = "10px";

  // tengo que agregar un evento change al checkbox, para tachar la tarea
  checkCompletada.addEventListener("change", () => {
    if (checkCompletada.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  // creo un elemento Botón para eliminar la tarea
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.style.marginLeft = "10px";

  // tambien tengo que agregar un evento click al boton eliminar, para eliminar la tarea
  botonEliminar.addEventListener("click", () => {
    ul_tareas.removeChild(li);
  });

  // appendeo el checkbox y el botón como children del <li>
  li.appendChild(checkCompletada);
  li.appendChild(botonEliminar);

  // por último, appendeo el <li> al <ul>
  ul_tareas.appendChild(li);

  formEjercicioClase18_2.querySelector("#filtro-c18").dispatchEvent(new Event("change"));
});

// evento cambio de selector
// pongo en un array tareasFiltradas las tareas que no cumplen el filtro, y las saco del ul
formEjercicioClase18_2.querySelector("#filtro-c18").addEventListener("change", (e) => {
  let valorFiltro = e.target.value;

  // si tengo tareas filtradas de antes, las vuelvo a agregar al ul
  tareasFiltradas.forEach((element) => {
    ul_tareas.appendChild(element);
  });
  tareasFiltradas = [];

  // Filtrar elementos según el valor del filtro
  // recorro la lista de children del ul, osea los li
  Array.from(ul_tareas.children).forEach((li_tarea) => {
    // obtengo el valor del checkbox (si está tildado o no)
    let tarea_completada = li_tarea.children[0].checked;

    if (valorFiltro === "completadas") {
      if (!tarea_completada) {
        // el filtro es completadas, y la tarea NO está completada => la saco del ul y la guardo en el array
        tareasFiltradas.push(li_tarea);
        ul_tareas.removeChild(li_tarea);
      }
    } else if (valorFiltro === "pendientes") {
      if (tarea_completada) {
        // el filtro es pendientes, y la tarea está completada => la saco del ul y la guardo en el array
        tareasFiltradas.push(li_tarea);
        ul_tareas.removeChild(li_tarea);
      }
    }
  });
});
