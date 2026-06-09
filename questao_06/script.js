const section = document.getElementById("section");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
});