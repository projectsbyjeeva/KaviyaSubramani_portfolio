/* ==========================================
   COURIER PRIME PORTFOLIO
   TYPING.JS
========================================== */

const typingElement = document.getElementById("typing-text");

const words = [

    "Courier Management Systems.",

    "Logistics Platforms.",

    "Parcel Tracking Applications.",

    "Fleet Management Software.",

    "Business Automation Solutions.",

    "Delivery Management Systems.",

    "Modern Web Applications.",

    "Cloud Based Enterprise Solutions."

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 80;
const deletingSpeed = 40;
const pauseTime = 1800;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, pauseTime);

            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

            charIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);

}

/* ==========================================
   START ANIMATION
========================================== */

window.addEventListener("DOMContentLoaded", () => {

    if (typingElement) {

        typeEffect();

    }

});