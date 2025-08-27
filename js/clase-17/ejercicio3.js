const formEjercicioClase17_3 = document.getElementById("formEjercicioClase17_3");

formEjercicioClase17_3.querySelector(".galeria-c17").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    formEjercicioClase17_3.querySelector("#imagenPrincipal-c17").src = e.target.src;
  }
});
