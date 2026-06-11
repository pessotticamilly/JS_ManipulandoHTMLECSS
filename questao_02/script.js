const input = document.getElementById("input");
const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    let inputValue = input.value;

    if (inputValue && inputValue.trim()) {
        text.textContent = `Bem vindo, ${inputValue}!`;
    } else {
        text.textContent = `Digite um nome`;
    };
});