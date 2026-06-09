const input = document.getElementById("input");
const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    let name = input.value;

    if (name) {
        text.textContent = `Bem vindo, ${name}!`;
    } else {
        text.textContent = `Digite seu nome`;
    }
});