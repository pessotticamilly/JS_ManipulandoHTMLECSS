const text = document.getElementById("text");
const increaseButton = document.getElementById("increase");

let value = 0;
text.textContent = value;

increaseButton.addEventListener("click", () => {
    value++;
    text.textContent = value;
});