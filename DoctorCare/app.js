const navEl = document.querySelector(".nav-container");
const headerEl = document.querySelector("#home");
const servicesEl = document.querySelector(".services")
const menuEl = document.querySelector(".menu");
const openMenuEl = document.querySelector(".open-menu");
const closeMenuEl = document.querySelector(".close-menu");
const backToTopBtn = document.querySelector(".back-to-top");

const sr = ScrollReveal({
    reset: true,
    origin: "top",
    distance: "30px"
});

sr.reveal(`
#home,
#home img,
#home .stats,
#services,
#services .card,
#about-us,
#about-us img,
#contact,
#contact img,
.copyright
`);

document.addEventListener("scroll", (event) => {
    fixedNavbar();
    showBackToTopBtn();
})

const fixedNavbar = () => {
    if(scrollY > 0) {
        navEl.classList.add("fixed");   
    }
    else {
        navEl.classList.remove("fixed");
    }
}

const showBackToTopBtn = () => {
    if(scrollY > 500) {
        backToTopBtn.classList.add("show-back-to-top");
    }
    else {
        backToTopBtn.classList.remove("show-back-to-top");
    }
}

const openMenu = (event) => {
    openMenuEl.classList.add("hidden");
    closeMenuEl.classList.add("show");
    menuEl.classList.add("show-menu");
    navEl.classList.add("svg-white");
    document.body.style.overflow = "hidden";
    menuEl.style.animation = "show 0.3s ease 0s 1 normal";
}

const closeMenu = (event) => {
    openMenuEl.classList.remove("hidden");
    closeMenuEl.classList.remove("show");
    menuEl.classList.remove("show-menu");
    navEl.classList.remove("svg-white");
    document.body.style.overflow = "visible";
}

openMenuEl.addEventListener("click", openMenu);
closeMenuEl.addEventListener("click", closeMenu);
