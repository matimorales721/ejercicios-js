const formEjercicioBuclesFunciones1 = document.getElementById("formEjercicioBuclesFunciones1");

formEjercicioBuclesFunciones1.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = formEjercicioBuclesFunciones1.querySelector("#numero_bf1").value;
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + numero * i + "<br>";
  }

  document.getElementById("mensaje_ejercicioBuclesFunciones1").innerHTML = resultado;
});
