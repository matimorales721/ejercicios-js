const formEjercicioClase17_4 = document.getElementById("formEjercicioClase17_4");
let fecha,
  formato = "24 horas";
// let fechaFormateada, dia, mes, año;

formEjercicioClase17_4.querySelector("#cambiarFormato-c17").addEventListener("click", (e) => {
  formato = formato === "24 horas" ? "12 horas" : "24 horas";
  cambiarHora();
});

cambiarHora();

function cambiarHora() {
  fecha = new Date();

  // No me gusta como se ve el toDateString() y lo armo yo => despues vi que habia una que ya lo hacia
  //   dia = fecha.getDate().toString().padStart(2, "0");
  //   mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  //   año = fecha.getFullYear().toString();
  //   fechaFormateada = `${dia}/${mes}/${año}`;

  formEjercicioClase17_4.querySelector("#fecha-c17").textContent = fecha.toLocaleDateString();

  // Hora
  if (formato === "12 horas") {
    let hora = fecha.getHours();
    hora = hora % 12; // ej 19 % 12 = 7
    hora = hora ? hora : 12; // El 0 se convierte en 12
    formEjercicioClase17_4.querySelector("#hora-c17").textContent = hora.toString().padStart(2, "0");
  } else {
    formEjercicioClase17_4.querySelector("#hora-c17").textContent = fecha.getHours().toString().padStart(2, "0");
  }

  formEjercicioClase17_4.querySelector("#minutos-c17").textContent = fecha.getMinutes().toString().padStart(2, "0");
  formEjercicioClase17_4.querySelector("#segundos-c17").textContent = fecha.getSeconds().toString().padStart(2, "0");

  // Formato
  if (formato === "24 horas") {
    formEjercicioClase17_4.querySelector("#formato-c17").textContent = "HS";
  } else {
    formEjercicioClase17_4.querySelector("#formato-c17").textContent = fecha.getHours() >= 12 ? "PM" : "AM";
  }

  setTimeout(cambiarHora, 1000); // Llamo a cambiarHora dentro de cambiarHora para que se haga cada 1 segundo (1000 milisegundos)
}
