const formEjercicio6 = document.getElementById("formEjercicio6");

formEjercicio6.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = formEjercicio6.querySelector("#nombre_6").value;

  //console.log("nombre", nombre);

  const array = [
    "Juan",
    "Pedro",
    "Gaston",
    "Luis",
    "Jacinto",
    "Camila",
    "Julieta",
    "Luciana",
    "Marta",
    "Monica",
    "Leonardo",
    "Diego",
    "Victor",
  ];
  if (array.includes(nombre)) {
    document.getElementById("mensaje_6").textContent = `Existe ${nombre} en la Lista, podés pasar.`;
  } else {
    document.getElementById("mensaje_6").textContent = `No existe ${nombre} en la Lista, no podés pasar.`;
  }
});
