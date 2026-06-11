const input = document.getElementById("input");
const button = document.getElementById("button");
const information = document.getElementById("information");

button.addEventListener("click", () => {
    const inputValue = input.value;

    if (inputValue && inputValue.trim()) {
        if(inputValue.includes("@")) {
            information.textContent = "E-mail válido";
            information.style.color = "green";
        } else {
            information.textContent = "E-mail inválido";
            information.style.color = "red";
        };
    } else {
        information.textContent = "Digite um e-mail";
        information.style.color = "black";
    };
});