const burgerMenu = document.querySelector('.burger-menu')
const navbarLinks = document.querySelector('.links')
const allLinks = document.querySelectorAll('.links li')

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