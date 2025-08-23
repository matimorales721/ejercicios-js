var acordeon = document.getElementsByClassName("accordion");

// Se le agrega un evento click a cada botón del acordeón
for (let i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", (e) => {
    e.target.classList.toggle("active");

    var panel = e.target.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let acordeon16 = document.getElementById("clase16");
acordeon16.click();
