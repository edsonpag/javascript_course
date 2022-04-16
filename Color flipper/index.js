const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const body = document.body
const spanColorElement = document.querySelector('.color')
const buttonElement = document.querySelector('.btn')

document.onload = changeBackgroundColor()

buttonElement.addEventListener('click', (event) => {
    changeBackgroundColor()
})

function changeBackgroundColor() {
    let hexColor = '#'

    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNuber()]
    }

    body.style.background = hexColor
    spanColorElement.innerText = hexColor
}

function getRandomNuber() {
    return Math.floor(Math.random() * hex.length)
}