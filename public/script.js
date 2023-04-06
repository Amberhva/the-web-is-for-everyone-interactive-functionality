// Opening and closing the hamburger menu
const body = document.querySelector("body"),
    navMenu = body.querySelector(".menu-content"),
    navOpenBtn = body.querySelector(".navOpen-btn"),
    navCloseBtn = navMenu.querySelector(".navClose-btn");

if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
        navMenu.classList.add("open");
        body.style.overflowY = "hidden";
    });
}

if (navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
        body.style.overflowY = "scroll";
    });
}

// When scrolling, change the background of the header
window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 5) {
        document.querySelector("header").classList.add("header-active");
    } else {
        document.querySelector("header").classList.remove("header-active");
    }
});

// Adds a class called 'js-enabled' to show JavaScript made components on the website (animations etc.)
document.body.classList.add("js-enabled");
