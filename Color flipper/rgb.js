const body = document.body
const buttonElement = document.querySelector('.btn')
const spanColorElement = document.querySelector('.color')

document.onload = changeBackgroundColor()
buttonElement.addEventListener('click', (event) => {
    changeBackgroundColor()
})


function changeBackgroundColor() {
    const red = getRandomNuber()
    const green = getRandomNuber()
    const blue = getRandomNuber()

    body.style.background = `rgb(${red}, ${green}, ${blue})`
    spanColorElement.innerText = `rgb(${red}, ${green}, ${blue})`
}

function getRandomNuber() {
    return Math.floor(Math.random() * 256) // número aleatorio 0 - 255
}