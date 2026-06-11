const section = document.getElementById("section");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    if (section.style.display === "none") {
        section.style.display = "block";
        button.textContent = "Esconder";
    } else {
        section.style.display = "none";
        button.textContent = "Mostrar";
    };
});