const text = document.getElementById("text");
const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");

redButton.addEventListener("click", () => {
    text.style.color = "red";
});

greenButton.addEventListener("click", () => {
    text.style.color = "green";
});

blueButton.addEventListener("click", () => {
    text.style.color = "blue";
});