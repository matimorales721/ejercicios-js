const formEjercicio4 = document.getElementById("formEjercicio4");

formEjercicio4.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero1 = formEjercicio4.querySelector("#numero_1_4").value;
  const numero2 = formEjercicio4.querySelector("#numero_2_4").value;
  const numero3 = formEjercicio4.querySelector("#numero_3_4").value;
  const numero4 = formEjercicio4.querySelector("#numero_4_4").value;
  const numero5 = formEjercicio4.querySelector("#numero_5_4").value;

  //console.log("numeros", numero1, numero2, numero3, numero4, numero5);

  let array = [numero1, numero2, numero3, numero4, numero5];
  let texto = "";

  array.forEach((numero, index) => {
    if (numero % 2 == 0) {
      texto += `El número ${numero} es par. `;
    } else {
      texto += `El número ${numero} es impar. `;
    }
  });
  document.getElementById("mensaje_4").textContent = texto;
});
