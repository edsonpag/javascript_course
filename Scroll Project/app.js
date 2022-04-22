const burgerMenu = document.querySelector('.burger-menu')
const navbarLinks = document.querySelector('.links')
const allLinks = document.querySelectorAll('.links li')
const headerEl = document.querySelector('header')
const arrowUpEl = document.querySelector('.arrow-up-container')
const dateEl = document.querySelector('.date')

dateEl.textContent = new Date().getFullYear()

burgerMenu.addEventListener('click', (event) => {

    burgerMenu.classList.toggle('active-burger-menu')
    navbarLinks.classList.toggle('active-links')
    
    allLinks.forEach((item, index) => {
        if(item.style.animation === '') {
            item.style.animation = `fade 1s ease ${index / 5 + 0.2}s 1 normal`
        } else {
            item.style.animation = ''
        }
    })
})

window.addEventListener('scroll', (event) => {
    const scrollHeight = window.scrollY
    const navbarHeight = headerEl.getBoundingClientRect().height

    // fixed navbar
    if(scrollHeight > navbarHeight) {
        headerEl.classList.add('fixed-navbar')
    } 
    else {
        headerEl.classList.remove('fixed-navbar')
    }

    // fixed arrow up
    if(scrollHeight > 350) {
        arrowUpEl.style.visibility = "visible"
    } 
    else {
        arrowUpEl.style.visibility = "hidden"
    }
})
