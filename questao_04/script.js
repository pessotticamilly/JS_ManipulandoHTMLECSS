const text = document.getElementById("text");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const redButton = document.getElementById("red");

greenButton.addEventListener("click", () => {
    text.style.color = "green";
});

blueButton.addEventListener("click", () => {
    text.style.color = "blue";
});

redButton.addEventListener("click", () => {
    text.style.color = "red";
});