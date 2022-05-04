const navEl = document.querySelector(".nav-container");

document.addEventListener("scroll", (event) => {
    if(scrollY > 0) {
        navEl.classList.add("fixed");   
    }
    else {
        navEl.classList.remove("fixed");
    }
})