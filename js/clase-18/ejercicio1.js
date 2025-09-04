const formEjercicioClase18_1 = document.getElementById("formEjercicioClase18_1");

let contador = 0;
cambiarColor(contador);

formEjercicioClase18_1.querySelector("#incrementar").addEventListener("click", (e) => {
  e.preventDefault();
  contador++;
  formEjercicioClase18_1.querySelector("#contador").value = contador;
  cambiarColor(contador);
});

formEjercicioClase18_1.querySelector("#decrementar").addEventListener("click", (e) => {
  e.preventDefault();
  contador--;
  formEjercicioClase18_1.querySelector("#contador").value = contador;
  cambiarColor(contador);
});

formEjercicioClase18_1.querySelector("#reiniciar").addEventListener("click", (e) => {
  e.preventDefault();
  contador = 0;
  formEjercicioClase18_1.querySelector("#contador").value = contador;
  cambiarColor(contador);
});

function cambiarColor(contador) {
  if (contador >= 0) {
    formEjercicioClase18_1.querySelector("#contador").style.color = "green";
  } else {
    formEjercicioClase18_1.querySelector("#contador").style.color = "red";
  }
}
