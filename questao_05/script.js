const text = document.getElementById("text");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

let size = 16;
text.style.fontSize = size + "px";

decreaseButton.addEventListener("click", () => {
    size--
    text.style.fontSize = size + "px";
});

increaseButton.addEventListener("click", () => {
    size++
    text.style.fontSize = size + "px";
});