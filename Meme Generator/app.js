const canvas = document.querySelector("#meme");
const context = canvas.getContext("2d");
const canvasContainer = document.querySelector(".canvas-container");
const canvasWidth = 500;
const canvasHeight = 300;

const input = document.querySelector("#input-image");
const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");


/* ------------ GERA FONTSIZE OPTIONS PARA O SELECT --------------- */

const generateAllFontSizesOptions = () => {
    const fontSizeSelect = document.querySelector("#font-size");

    for(let i = 18; i <= 52; i += 2) {
        fontSizeSelect.insertAdjacentHTML("afterbegin", `<option value=${i}>${i}</option>`);
    }
}

generateAllFontSizesOptions();

/* ------------ GET PROPRIEDADES DA FONTE --------------- */

const getCurrentFont = () => {
    const fontFamilySelect = document.querySelector("#font-family");
    
    return fontFamilySelect.value;
}

const getCurrentFontSize = () => {
    const fontSizeSelect = document.querySelector("#font-size");

    return fontSizeSelect.value;
}

/* ------------ ADICIONA A IMAGEM NA TELA --------------- */
input.addEventListener("change", (event) => {
    const reader = new FileReader();
    const image = new Image();

    reader.readAsDataURL(input.files[0]);

    reader.onload = function() {
        image.src = reader.result;
        image.id = "meme-image";
    }

    image.onload = function() {
        if(canvasContainer.getElementsByTagName("img").length >= 1) {
            const element = canvasContainer.querySelector("img");
            canvasContainer.removeChild(element);
        }

        canvasContainer.insertAdjacentElement("beforeend", image);
    }
})


/* ------------ ADICIONA O TEXTO NA PARTE DE CIMA --------------- */
topText.addEventListener("input", (event) => {
    const currentFont = getCurrentFont();
    const currentFontSize = getCurrentFontSize();

    context.font = `${currentFontSize/10}rem ${currentFont}`;

    context.clearRect(0, 0, canvasWidth, 30);
    context.fillText(topText.value, 30, 30);
})

bottomText.addEventListener("input", (event) => {
    const currentFont = getCurrentFont();
    const currentFontSize = getCurrentFontSize();

    context.font = `${currentFontSize/10}rem ${currentFont}`;

    context.clearRect(0, canvasHeight-100, canvasWidth, canvasHeight);
    context.fillText(bottomText.value, 30, canvasHeight - 30);
})

