const canvas = document.querySelector("#meme");
const context = canvas.getContext("2d");
const canvasContainer = document.querySelector(".canvas-container");

const input = document.querySelector("#input-image");


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