const formEjercicioBuclesFunciones4 = document.getElementById("formEjercicioBuclesFunciones4");

formEjercicioBuclesFunciones4.addEventListener("submit", (e) => {
  e.preventDefault();

  let listaPalabrasUsuario = formEjercicioBuclesFunciones4.querySelector("#lista_palabras_bf4").value;
  let arrayPalabras = listaPalabrasUsuario.split(",").map((palabra) => palabra.trim().toLowerCase());
  let palabraBuscada = formEjercicioBuclesFunciones4.querySelector("#palabra_buscada_bf4").value.trim();

  if (arrayPalabras.includes(palabraBuscada.toLowerCase())) {
    document.getElementById("mensaje_ejercicioBuclesFunciones4").textContent =
      "La palabra '" + palabraBuscada + "' está en la lista.";
  } else {
    document.getElementById("mensaje_ejercicioBuclesFunciones4").textContent =
      "La palabra '" + palabraBuscada + "' no está en la lista.";
  }
});
