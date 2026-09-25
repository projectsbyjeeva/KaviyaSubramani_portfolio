import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        available > 0
          ? Math.min(1, Math.max(0, window.scrollY / available))
          : 1;
      barRef.current.style.setProperty("--scroll-progress", progress);
      barRef.current.setAttribute("aria-valuenow", Math.round(progress * 100));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(schedule)
        : null;
    observer?.observe(document.body);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      ref={barRef}
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    >
      <div className="scroll-progress-fill" />
    </div>
  );
}
