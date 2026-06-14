const previewCard = document.getElementById("previewCard");

// Texto
const fontSizeInput = document.getElementById("fontSizeInput");
const increaseFontSizeButton = document.getElementById("increaseFontSizeButton");
const decreaseFontSizeButton = document.getElementById("decreaseFontSizeButton");
const fontFamilySelect = document.getElementById("fontFamilySelect");

fontSizeInput.addEventListener("input", () => {
    previewCard.style.fontSize = `${fontSizeInput.value}px`;
});

increaseFontSizeButton.addEventListener("click", () => {
    fontSizeInput.value++;
    previewCard.style.fontSize = `${fontSizeInput.value}px`;
});

decreaseFontSizeButton.addEventListener("click", () => {
    if (fontSizeInput.value > 8) {
        fontSizeInput.value--;
        previewCard.style.fontSize = `${fontSizeInput.value}px`;
    }
});

fontFamilySelect.addEventListener("change", () => {
    previewCard.style.fontFamily = fontFamilySelect.value;
});

// Dimensões
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");

const increaseWidthButton = document.getElementById("increaseWidthButton");
const decreaseWidthButton = document.getElementById("decreaseWidthButton");

const increaseHeightButton = document.getElementById("increaseHeightButton");
const decreaseHeightButton = document.getElementById("decreaseHeightButton");

widthInput.addEventListener("input", () => {
    previewCard.style.width = `${widthInput.value}px`;
});

increaseWidthButton.addEventListener("click", () => {
    widthInput.value = Number(widthInput.value) + 10;
    previewCard.style.width = `${widthInput.value}px`;
});

decreaseWidthButton.addEventListener("click", () => {
    if (widthInput.value > 100) {
        widthInput.value = Number(widthInput.value) - 10;
        previewCard.style.width = `${widthInput.value}px`;
    }
});

heightInput.addEventListener("input", () => {
    previewCard.style.height = `${heightInput.value}px`;
});

increaseHeightButton.addEventListener("click", () => {
    heightInput.value = Number(heightInput.value) + 10;
    previewCard.style.height = `${heightInput.value}px`;
});

decreaseHeightButton.addEventListener("click", () => {
    if (heightInput.value > 100) {
        heightInput.value = Number(heightInput.value) - 10;
        previewCard.style.height = `${heightInput.value}px`;
    }
});

// Cores
const backgroundColorInput = document.getElementById("backgroundColorInput");
const borderColorInput = document.getElementById("borderColorInput");

backgroundColorInput.addEventListener("input", () => {
    previewCard.style.backgroundColor = backgroundColorInput.value;
});

borderColorInput.addEventListener("input", () => {
    previewCard.style.borderColor = borderColorInput.value;
});

// Borda
const borderStyleSelect = document.getElementById("borderStyleSelect");
const borderRadiusInput = document.getElementById("borderRadiusInput");
const borderRadiusValue = document.getElementById("borderRadiusValue");

borderStyleSelect.addEventListener("change", () => {
    previewCard.style.borderStyle = borderStyleSelect.value;
});

borderRadiusInput.addEventListener("input", () => {

    borderRadiusValue.textContent =
        `${borderRadiusInput.value}%`;

    previewCard.style.borderRadius =
        `${borderRadiusInput.value}%`;

});

// // Tema
// const themeSwitch = document.getElementById("themeSwitch");

// themeSwitch.addEventListener("change", () => {
//     document.body.classList.toggle("dark-mode");
// });