import { useEffect } from "react";

const targets = [
  ".hero-copy",
  ".hero-panel",
  ".about-layout > *",
  ".impact-row > div",
  ".section-heading",
  ".skills-heading",
  ".section-title-row",
  ".timeline-item",
  ".tech-card",
  ".work-card",
  ".education-layout > div:first-child",
  ".education-list article",
  ".contact-shell",
].join(", ");

export default function useScrollReveal(mainRef) {
  useEffect(() => {
    const root = mainRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !("IntersectionObserver" in window)) return;

    const elements = [...root.querySelectorAll(targets)];
    let observer;
    const setup = () => {
      observer?.disconnect();
      elements.forEach((element) => {
        element.classList.remove("reveal-ready", "scroll-reveal");
      });
      if (motion.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(
            ({
              target,
              isIntersecting,
              intersectionRatio,
              boundingClientRect,
            }) => {
              if (isIntersecting && intersectionRatio >= 0.12) {
                target.classList.add("scroll-reveal");
              } else if (
                boundingClientRect.bottom <= 0 ||
                boundingClientRect.top >= window.innerHeight
              ) {
                // Replay only after completely leaving the screen, avoiding edge flicker.
                target.classList.remove("scroll-reveal");
              }
            },
          );
        },
        { threshold: [0, 0.12] },
      );
      elements.forEach((element) => {
        element.classList.add("reveal-ready");
        if (element.matches(".tech-card, .impact-row > div")) {
          const index = [...element.parentElement.children].indexOf(element);
          element.style.setProperty("--reveal-delay", `${index * 110}ms`);
        }
        observer.observe(element);
      });
    };
    setup();
    motion.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", setup);
      elements.forEach((element) => {
        element.classList.remove("reveal-ready", "scroll-reveal");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [mainRef]);
}
