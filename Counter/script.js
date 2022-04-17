let counter = 0
let counterElement = document.querySelector('#counter-score')
const btnsElement = document.querySelectorAll('.btn')

btnsElement.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const classList = event.currentTarget.classList

        if(classList.contains('decrease')) {
            counter--
            counterElement.innerText = counter
        }
        else if(classList.contains('reset')) {
            counter = 0
            counterElement.innerText = counter
        }
        else {
            counter++
            counterElement.innerText = counter
        }

        if(counter > 0) {
            counterElement.style.color = 'green'
        }
        else if(counter < 0) {
            counterElement.style.color = 'red'
        }
        else {
            counterElement.style.color = 'black'
        }
    })
})