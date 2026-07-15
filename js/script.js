/* ==========================================
   COURIER PRIME PORTFOLIO
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       PAGE LOADER
    ========================== */

    const loader = document.getElementById("loader");

    if (loader) {

        window.addEventListener("load", () => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            setTimeout(() => {

                loader.remove();

            }, 500);

        });

    }

    /* ==========================
       HERO FADE ANIMATION
    ========================== */

    const heroLeft = document.querySelector(".hero-left");
    const heroRight = document.querySelector(".hero-right");

    if (heroLeft) {

        heroLeft.style.opacity = "0";
        heroLeft.style.transform = "translateX(-50px)";

        setTimeout(() => {

            heroLeft.style.transition = "all .8s ease";
            heroLeft.style.opacity = "1";
            heroLeft.style.transform = "translateX(0)";

        }, 300);

    }

    if (heroRight) {

        heroRight.style.opacity = "0";
        heroRight.style.transform = "translateX(50px)";

        setTimeout(() => {

            heroRight.style.transition = "all .8s ease";
            heroRight.style.opacity = "1";
            heroRight.style.transform = "translateX(0)";

        }, 500);

    }

    /* ==========================
       BUTTON HOVER EFFECT
    ========================== */

    const buttons = document.querySelectorAll(".btn-primary, .btn-outline");

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-4px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0)";

        });

    });

    /* ==========================
       FLOATING BACKGROUND
    ========================== */

    const circles = document.querySelectorAll(".circle");

    window.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        circles.forEach((circle, index) => {

            const speed = (index + 1) * 12;

            circle.style.transform =
                `translate(${x * speed}px, ${y * speed}px)`;

        });

    });

    /* ==========================
       STICKY HERO SHADOW
    ========================== */

    window.addEventListener("scroll", () => {

        const heroCard = document.querySelector(".hero-card");

        if (!heroCard) return;

        if (window.scrollY > 20) {

            heroCard.style.boxShadow =
                "0 30px 70px rgba(0,0,0,.55)";

        } else {

            heroCard.style.boxShadow =
                "0 20px 60px rgba(0,0,0,.45)";

        }

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    /* ==========================
       ACTIVE BUTTON RIPPLE
    ========================== */

    document.querySelectorAll(".btn-primary").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const rect = this.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

    /* ==========================
       CONSOLE MESSAGE
    ========================== */

    console.log(
        "%cCourier Prime Portfolio Loaded Successfully 🚀",
        "color:#FFC107;font-size:16px;font-weight:bold;"
    );

});