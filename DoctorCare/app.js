const navEl = document.querySelector(".nav-container");

document.addEventListener("scroll", (event) => {
    if(scrollY > 0) {
        navEl.classList.add("fixed");   
    }
    else {
        navEl.classList.remove("fixed");
    }
})

const openMenuEl = document.querySelector(".open-menu");
const closeMenuEl = document.querySelector(".close-menu");
const menuEl = document.querySelector(".menu");
const headerEl = document.querySelector("header");

openMenuEl.addEventListener("click", (event) => {
    openMenuEl.classList.add("hidden");
    closeMenuEl.classList.add("show");
    menuEl.classList.add("show-menu");
    navEl.classList.add("svg-white");
    document.body.style.overflow = "hidden";
    menuEl.style.animation = "fade 0.8s ease 0s 1 normal";
})

closeMenuEl.addEventListener("click", (event) => {
    openMenuEl.classList.remove("hidden");
    closeMenuEl.classList.remove("show");
    menuEl.classList.remove("show-menu");
    navEl.classList.remove("svg-white");
    document.body.style.overflow = "visible";
})