const formEjercicioBuclesFunciones6 = document.getElementById("formEjercicioBuclesFunciones6");

formEjercicioBuclesFunciones6.addEventListener("submit", (e) => {
  e.preventDefault();

  let listaPrimos = [];

  for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
      listaPrimos.push(i);
    }
  }

  document.getElementById("mensaje_ejercicioBuclesFunciones6").textContent = listaPrimos.join(", ");
});

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
