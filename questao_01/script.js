const input = document.getElementById("input");
const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    text.innerHTML = `<p>${input.value}</p>` + text.innerHTML;
});