const input = document.getElementById("input");
const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    const inputValue = input.value;

    if (inputValue && inputValue.trim()) {
        if(inputValue.includes("@")) {
            text.textContent = "E-mail válido";
            text.style.color = "green";
        } else {
            text.textContent = "E-mail inválido";
            text.style.color = "red";
        };
    } else {
        text.textContent = "Digite um e-mail";
        text.style.color = "black";
    };
});