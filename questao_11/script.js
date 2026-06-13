const div = document.getElementById("div");
const widthInput = document.getElementById("widthInput"); 
const heightInput = document.getElementById("heightInput"); 

widthInput.addEventListener("input", () => {
    const width = widthInput.value;
    div.style.width = width + "px"; 
});

heightInput.addEventListener("input", () => {
    const height = heightInput.value;
    div.style.height = height + "px";
});

// solução 01

// const backgroundButtons = document.querySelectorAll(".backgroundButton");
// const borderButtons = document.querySelectorAll(".borderButton");

// backgroundButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         div.style.backgroundColor = button.dataset.color;
//     });
// });

// borderButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         div.style.border = "5px solid " + button.dataset.color;
//     });
// });

// solução 02

const colorButtons = document.querySelectorAll(".colorButton");

colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const color = button.dataset.color;
        const type = button.dataset.type;

        if (type === "background") {
            div.style.backgroundColor = color;
        };

        if (type === "border") {
            div.style.border = `5px solid ${color}`;
        };
    });
});