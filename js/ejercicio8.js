const formEjercicio8 = document.getElementById("formEjercicio8");

formEjercicio8.addEventListener("submit", (e) => {
  e.preventDefault();

  const frase = formEjercicio8.querySelector("#frase_8").value;
  //console.log("frase", frase);

  let fraseInvertida = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
  }

  let fraseInvertida2 = frase.split("").reverse().join("");

  document.getElementById("mensaje_8").textContent = `Frase invertida: ${fraseInvertida2}`;
});
