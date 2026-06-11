const text = document.getElementById("text");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

let value = 0;
text.textContent = value;

decreaseButton.addEventListener("click", () => {
    value--;
    text.textContent = value;
});

resetButton.addEventListener("click", () => {
    value = 0;
    text.textContent = value;
});

increaseButton.addEventListener("click", () => {
    value++;
    text.textContent = value;
});