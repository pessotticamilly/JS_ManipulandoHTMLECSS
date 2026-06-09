const image = document.getElementById("image");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    if (image.src === "http://127.0.0.1:5500/questao_07/assets/autorretrato.jpg") {
        image.src = "assets/girassois.jpg"
    }
    else {
        image.src = "assets/autorretrato.jpg"
    }
})