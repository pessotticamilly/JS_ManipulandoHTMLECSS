const image = document.getElementById("image");
const button = document.getElementById("button");

let imageNumber = 1;

button.addEventListener("click", () => {
    if (imageNumber === 1) {
        image.src = "assets/girassois.jpg";
        imageNumber = 2;
    } else {
        image.src = "assets/autorretrato.jpg"
        imageNumber = 1;
    };
});