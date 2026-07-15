/* ==========================================
   COURIER PRIME PORTFOLIO
   MENU.JS
========================================== */

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

const menuLinks = document.querySelectorAll(".menu-links a");

/* ===========================
   OPEN MENU
=========================== */

function openMenu() {

    sideMenu.classList.add("show");
    overlay.classList.add("show");

    document.body.style.overflow = "hidden";

}

/* ===========================
   CLOSE MENU
=========================== */

function closeMenu() {

    sideMenu.classList.remove("show");
    overlay.classList.remove("show");

    document.body.style.overflow = "auto";

}

/* ===========================
   EVENTS
=========================== */

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);


/* ===========================
   ESC KEY
=========================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeMenu();

    }

});


/* ===========================
   ACTIVE MENU
=========================== */

menuLinks.forEach(link => {

    link.addEventListener("click", function () {

        menuLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

        closeMenu();

    });

});


/* ===========================
   SMOOTH SCROLL
=========================== */

menuLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            const section = document.querySelector(href);

            if (section) {

                section.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    });

});


/* ===========================
   CLOSE ON WINDOW RESIZE
=========================== */

window.addEventListener("resize", function () {

    if (window.innerWidth > 992) {

        closeMenu();

    }

});


/* ===========================
   MENU ANIMATION
=========================== */

menuBtn.addEventListener("mouseenter", () => {

    menuBtn.style.transform = "rotate(90deg)";

});

menuBtn.addEventListener("mouseleave", () => {

    menuBtn.style.transform = "rotate(0deg)";

});


/* ===========================
   PREVENT DOUBLE CLICK
=========================== */

let menuOpen = false;

menuBtn.addEventListener("click", function () {

    menuOpen = true;

});

closeBtn.addEventListener("click", function () {

    menuOpen = false;

});

overlay.addEventListener("click", function () {

    menuOpen = false;

});