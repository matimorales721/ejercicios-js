const formEjercicioBuclesFunciones5 = document.getElementById("formEjercicioBuclesFunciones5");

formEjercicioBuclesFunciones5.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = parseInt(formEjercicioBuclesFunciones5.querySelector("#numero_bf5").value);

  const factorial = calcularFactorial(numero);

  document.getElementById("mensaje_ejercicioBuclesFunciones5").innerHTML = numero + "! = " + factorial + ".";
});

function calcularFactorial(n) {
  let resultado = 1;
  let arrayNumeros = [];

  for (let i = n; i >= 1; i--) {
    arrayNumeros.push(i);
    resultado *= i;
  }
  return arrayNumeros.join(" x ") + " = " + resultado;
}
