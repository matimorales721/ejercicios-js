const formEjercicioBuclesFunciones7 = document.getElementById("formEjercicioBuclesFunciones7");

formEjercicioBuclesFunciones7.addEventListener("submit", (e) => {
  e.preventDefault();
  const palabra = formEjercicioBuclesFunciones7.querySelector("#palabra_bf7").value;

  document.getElementById("mensaje_ejercicioBuclesFunciones7").textContent = esPalindromo(palabra)
    ? palabra + " es un palíndromo."
    : palabra + " no es un palíndromo.";
});

function esPalindromo(palabra) {
  const palabraSinEspacios = palabra.replace(/\s+/g, "").toLowerCase();
  const palabraReversa = palabraSinEspacios.split("").reverse().join("");
  return palabraSinEspacios === palabraReversa;
}
