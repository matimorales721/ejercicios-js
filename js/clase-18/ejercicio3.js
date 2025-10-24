const formEjercicioClase18_3 = document.getElementById("formEjercicioClase18_3");
let nombre,
  email,
  contraseña,
  confirmacion = "";
let erroresFormulario = [];

// evento input en el campo nombre
formEjercicioClase18_3.querySelector("#nombre-c18").addEventListener("input", () => {
  console.log("input nombre");
  nombre = formEjercicioClase18_3.querySelector("#nombre-c18").value.trim();
  validarNombre(nombre);
  verificarFormulario();
});

// evento input en el campo email
formEjercicioClase18_3.querySelector("#email-c18").addEventListener("input", () => {
  console.log("input email");
  email = formEjercicioClase18_3.querySelector("#email-c18").value.trim();
  validarEmail(email);
  verificarFormulario();
});

// evento input en el campo contraseña
formEjercicioClase18_3.querySelector("#password-c18").addEventListener("input", () => {
  console.log("input contraseña");
  contraseña = formEjercicioClase18_3.querySelector("#password-c18").value.trim();
  validarContraseña(contraseña);
  verificarFormulario();
});

// evento input en el campo confirmación
formEjercicioClase18_3.querySelector("#confirm-password-c18").addEventListener("input", () => {
  console.log("input confirmación");
  confirmacion = formEjercicioClase18_3.querySelector("#confirm-password-c18").value.trim();
  contraseña = formEjercicioClase18_3.querySelector("#password-c18").value.trim();
  validarConfirmacion(confirmacion, contraseña);
  verificarFormulario();
});

formEjercicioClase18_3.querySelector("#submit-c18").addEventListener("submit", (e) => {
  e.preventDefault();
  const formularioValido = erroresFormulario.length === 0;
  if (formularioValido) {
    // enviarFormulario(nombre, email, contraseña);
    formEjercicioClase18_3.querySelector("#message-registro-c18").textContent = "Formulario enviado exitosamente.";
  } else {
    formEjercicioClase18_3.querySelector("#message-registro-c18").textContent = "Hay errores en el formulario.";
  }
});

function validarNombre(nombre) {
  //erroresFormulario.remove("nombre");
  erroresFormulario = erroresFormulario.filter((error) => error !== "nombre");
  formEjercicioClase18_3.querySelector("#error-nombre-c18").textContent = "";
  if (nombre === "") {
    formEjercicioClase18_3.querySelector("#error-nombre-c18").textContent = "El campo nombre es obligatorio";
    erroresFormulario.push("nombre");
  } else {
    if (nombre.length < 3) {
      formEjercicioClase18_3.querySelector("#error-nombre-c18").textContent =
        "El nombre debe tener al menos 3 caracteres";
      erroresFormulario.push("nombre");
    }
  }
}

function validarEmail(email) {
  erroresFormulario = erroresFormulario.filter((error) => error !== "email");
  formEjercicioClase18_3.querySelector("#error-email-c18").textContent = "";
  if (email === "") {
    formEjercicioClase18_3.querySelector("#error-email-c18").textContent = "El campo email es obligatorio";
    erroresFormulario.push("email");
  } else {
    if (!validarEmail(email)) {
      formEjercicioClase18_3.querySelector("#error-email-c18").textContent = "El email no es válido";
      erroresFormulario.push("email");
    }
  }
}

function validarContraseña(contraseña) {
  erroresFormulario = erroresFormulario.filter((error) => error !== "password");
  formEjercicioClase18_3.querySelector("#error-password-c18").textContent = "";
  if (contraseña === "") {
    formEjercicioClase18_3.querySelector("#error-password-c18").textContent = "El campo contraseña es obligatorio";
    erroresFormulario.push("password");
  } else {
    if (!validarContrasena(contraseña)) {
      formEjercicioClase18_3.querySelector("#error-password-c18").textContent =
        "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números";
      erroresFormulario.push("password");
    }
  }
}

function validarConfirmacion(confirmacion, contraseña) {
  erroresFormulario = erroresFormulario.filter((error) => error !== "confirm-password");
  formEjercicioClase18_3.querySelector("#error-confirm-password-c18").textContent = "";

  if (confirmacion === "") {
    formEjercicioClase18_3.querySelector("#error-confirm-password-c18").textContent =
      "El campo confirmación es obligatorio";
    erroresFormulario.push("confirm-password");
  } else {
    if (confirmacion !== contraseña) {
      formEjercicioClase18_3.querySelector("#error-confirm-password-c18").textContent =
        "La confirmación no coincide con la contraseña";
      erroresFormulario.push("confirm-password");
    }
  }
}

function verificarFormulario() {
  //     formularioValido = true;
  //   formEjercicioClase18_3.querySelector("#error-nombre-c18").textContent = "";
  //   formEjercicioClase18_3.querySelector("#error-email-c18").textContent = "";
  //   formEjercicioClase18_3.querySelector("#error-password-c18").textContent = "";
  //     formEjercicioClase18_3.querySelector("#error-confirm-password-c18").textContent = "";

  if (erroresFormulario.length > 0) {
    formEjercicioClase18_3.querySelector("#submit-c18").disabled = true;
  } else {
    formEjercicioClase18_3.querySelector("#submit-c18").disabled = false;
  }
}

// buscadas en internet
function validarEmail(email) {
  // Expresión regular para validar un formato de correo electrónico estándar
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validarContrasena(contrasena) {
  // Expresión regular para validar la contraseña: mínimo 8 caracteres, que incluya mayúsculas, minúsculas y números
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(contrasena);
}
