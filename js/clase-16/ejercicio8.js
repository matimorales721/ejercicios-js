const formEjercicioBuclesFunciones8 = document.getElementById("formEjercicioBuclesFunciones8");

formEjercicioBuclesFunciones8.addEventListener("submit", (e) => {
  e.preventDefault();

  const numeroRandom = Math.floor(Math.random() * 100) + 1;
  let resultado;

  if (numeroRandom % 3 === 0 && numeroRandom % 5 === 0) {
    resultado = "FizzBuzz";
  } else if (numeroRandom % 3 === 0) {
    resultado = "Fizz";
  } else if (numeroRandom % 5 === 0) {
    resultado = "Buzz";
  } else {
    resultado = numeroRandom;
  }

  document.getElementById("mensaje_ejercicioBuclesFunciones8").textContent = resultado;
});
