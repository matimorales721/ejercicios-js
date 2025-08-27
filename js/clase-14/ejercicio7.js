const formEjercicio7 = document.getElementById("formEjercicio7");

formEjercicio7.addEventListener("submit", (e) => {
  e.preventDefault();

  const palabra = formEjercicio7.querySelector("#palabra_7").value;
  //console.log("palabra", palabra);

  let cantidadVocales = 0;
  palabra.split("").forEach((letra) => {
    if ("aeiou".includes(letra.toLowerCase())) {
      cantidadVocales++;
    }
  });

  document.getElementById("mensaje_7").textContent = `Cantidad de vocales en la palabra: ${cantidadVocales}`;
});