const burgerMenu = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')
const listOfLinks = document.querySelectorAll('.nav-links li')

burgerMenu.addEventListener('click', (event) => {
    nav.classList.toggle('nav-active')

    listOfLinks.forEach((li, index) => {
        if (li.style.animation) {
            li.style.animation = ''
        } else {
            li.style.animation = `fade 1s ease ${index / 5}s 1`
        }
    })

    burgerMenu.classList.toggle('toggle')
})

