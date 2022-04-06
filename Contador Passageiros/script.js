let counter = document.getElementById("counter")
let count = 0

let saveEl = document.getElementById("save-el")

function increment() {
    count++
    counter.innerText = count
}


function save() {
    saveEl.textContent += `${count} - `

    count = 0
    counter.innerText = count
}