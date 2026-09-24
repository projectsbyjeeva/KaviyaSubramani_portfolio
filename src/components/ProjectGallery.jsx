import { useState } from "react";
import { assetUrl } from "../utils";

export default function ProjectGallery({ name, screenshots }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = screenshots[activeIndex];
  return (
    <div className="project-gallery">
      <figure>
        <a
          className="gallery-preview"
          href={assetUrl(active.src)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name} screenshot at full size`}
        >
          <img
            src={assetUrl(active.src)}
            alt={`${name} — ${active.caption}`}
            width={active.width}
            height={active.height}
            loading="lazy"
            decoding="async"
          />
          <span className="gallery-expand">View full size ↗</span>
        </a>
        <figcaption aria-live="polite">{active.caption}</figcaption>
      </figure>
      <div className="gallery-thumbnails" aria-label={`${name} screenshots`}>
        {screenshots.map((shot, index) => (
          <button
            type="button"
            key={shot.src}
            aria-label={`Show ${shot.caption}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={assetUrl(shot.src)}
              alt=""
              width={shot.width}
              height={shot.height}
              loading="lazy"
              decoding="async"
            />
            <span>{shot.caption}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
