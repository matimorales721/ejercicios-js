const formEjercicioBuclesFunciones9 = document.getElementById("formEjercicioBuclesFunciones9");

formEjercicioBuclesFunciones9.addEventListener("submit", (e) => {
  e.preventDefault();

  const personas = [
    { nombre: "Sabina", edad: 28 },
    { nombre: "Honoria", edad: 32 },
    { nombre: "Tránsito", edad: 29 },
    { nombre: "Higinio", edad: 31 },
    { nombre: "Ufano", edad: 27 },
    { nombre: "Hilario", edad: 26 },
    { nombre: "Jacinta", edad: 34 },
    { nombre: "Cándido", edad: 33 },
    { nombre: "Teodosia", edad: 36 },
  ];

  const masJoven = encontrarMasJoven(personas);
  const promedio = calcularPromedioEdades(personas);

  document.getElementById("mensaje_ejercicioBuclesFunciones9").innerHTML = `La lista de personas es: <ul>${personas
    .map((p) => `<li>${p.nombre} (${p.edad} años)</li>`)
    .join("")}</ul>`;

  document.getElementById(
    "mensaje_ejercicioBuclesFunciones9_masJoven"
  ).textContent = `La persona más joven es: ${masJoven.nombre}, ${masJoven.edad} años.`;

  document.getElementById(
    "mensaje_ejercicioBuclesFunciones9_promedio"
  ).textContent = `El promedio de edades es: ${promedio} años.`;
});

function encontrarMasJoven(personas) {
  //return personas.reduce((joven, persona) => (persona.edad < joven.edad ? persona : joven)); (copilot)
  if (personas.length === 0) return null;

  let joven = personas[0];
  personas.forEach((persona) => {
    if (persona.edad < joven.edad) {
      joven = persona;
    }
  });
  return joven;
}

function calcularPromedioEdades(personas) {
  //const total = personas.reduce((sum, persona) => sum + persona.edad, 0);
  //return total / personas.length; (copilot)

  if (personas.length === 0) return null;

  let total = 0;
  personas.forEach((persona) => {
    total += persona.edad;
  });
  return Math.round((total / personas.length) * 100) / 100; // Redondear a 2 decimales
}
