import { useEffect, useRef, useState } from "react";

const links = [
  ["about", "About"],
  ["experience", "Experience"],
  ["skills", "Stack"],
  ["projects", "Work"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="wordmark" href="#home" aria-label="Kaviya Subramani home">
          ks<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-nav">
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menu <span aria-hidden="true">{open ? "−" : "＋"}</span>
          </button>
          {open && (
            <nav id="mobile-menu" aria-label="Mobile navigation">
              {links.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
