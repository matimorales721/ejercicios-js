const formEjercicioBuclesFunciones10 = document.getElementById("formEjercicioBuclesFunciones10");

formEjercicioBuclesFunciones10.addEventListener("submit", (e) => {
  e.preventDefault();

  let contraseñaAleatoria;
  let esValida = false;

  while (!esValida) { // el problema de este bucle es que puede demorar muchas iteraciones en encontrar una contraseña válida
    contraseñaAleatoria = generarContraseñaAleatoria();
    esValida = validarContraseña(contraseñaAleatoria);
  }

  document.getElementById(
    "mensaje_ejercicioBuclesFunciones10"
  ).textContent = `La contraseña generada es: ${contraseñaAleatoria}`;
});

function generarContraseñaAleatoria() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let contraseña = "";
  for (let i = 1; i <= 8; i++) {
    contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return contraseña;
}

function validarContraseña(contraseña) {
  const longitudValida = contraseña.length === 8;
  const tieneNumero = /\d/.test(contraseña);
  const tieneMayuscula = /[A-Z]/.test(contraseña);
  const tieneCaracterEspecial = /[!@#$%^&*]/.test(contraseña);
  return longitudValida && tieneNumero && tieneMayuscula && tieneCaracterEspecial;
}
