const formEjercicioExtra = document.getElementById("formEjercicioExtra");

formEjercicioExtra.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = formEjercicioExtra.querySelector("#nombre_extra").value;
  const hobbie1 = formEjercicioExtra.querySelector("#hobby_1_extra").value;
  const hobbie2 = formEjercicioExtra.querySelector("#hobby_2_extra").value;
  const hobbie3 = formEjercicioExtra.querySelector("#hobby_3_extra").value;
  //console.log("nombre", nombre);
  //console.log("hobbies", hobbie1, hobbie2, hobbie3);

  const texto = `Hola ${nombre}! Qué buenos hobbies: ${hobbie1}, ${hobbie2}, ${hobbie3}`;

  document.getElementById("mensaje_extra").textContent = texto;
});
