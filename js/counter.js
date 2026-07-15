/* ==========================================
   COURIER PRIME PORTFOLIO
   COUNTER.JS
========================================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

/* ==========================================
   COUNTER ANIMATION
========================================== */

function runCounter() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = parseInt(counter.getAttribute("data-target"));

        const duration = 2000;

        const increment = target / (duration / 16);

        let current = 0;

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

    });

}

/* ==========================================
   OBSERVER
========================================== */

const statsSection = document.querySelector(".statistics");

if (statsSection) {

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    runCounter();

                }

            });

        },

        {
            threshold: 0.4
        }

    );

    observer.observe(statsSection);

}

/* ==========================================
   OPTIONAL SYMBOLS
========================================== */

window.addEventListener("load", () => {

    counters.forEach(counter => {

        const target = counter.getAttribute("data-target");

        if (target === "99") {

            counter.setAttribute("data-suffix", "%");

        }

        if (target === "20") {

            counter.setAttribute("data-suffix", "+");

        }

        if (target === "150") {

            counter.setAttribute("data-suffix", "+");

        }

    });

});

/* ==========================================
   ADD SUFFIX AFTER COUNTING
========================================== */

function applySuffix() {

    counters.forEach(counter => {

        const suffix = counter.getAttribute("data-suffix");

        if (suffix && !counter.innerText.includes(suffix)) {

            counter.innerText += suffix;

        }

    });

}

setTimeout(applySuffix, 2200);