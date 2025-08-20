const formEjercicio10 = document.getElementById("formEjercicio10");

formEjercicio10.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = formEjercicio10.querySelector("#adivinanza_10").value;
  //console.log("adivinanza", numero);

  let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
  //console.log("numeroAleatorio", numeroAleatorio);
  let texto = "";
  if (numero == numeroAleatorio) {
    texto = `¡Felicidades! Adivinaste el número: ${numeroAleatorio}`;
  } else if (numero < numeroAleatorio) {
    texto = `El número es mayor que ${numero}`;
  } else {
    texto = `El número es menor que ${numero}`;
  }
  document.getElementById("mensaje_10").textContent = texto;
});
