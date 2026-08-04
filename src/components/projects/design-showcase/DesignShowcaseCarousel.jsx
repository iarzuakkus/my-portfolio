// src/components/projects/design-showcase/DesignShowcaseCarousel.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DesignCarouselControls from "./DesignCarouselControls";
import DesignCarouselIndicators from "./DesignCarouselIndicators";
import DesignCarouselItem from "./DesignCarouselItem";
import DesignLightbox from "./DesignLightbox";

const normalize = (index, length) => (index + length) % length;
const visibleOffsets = [-3, -2, -1, 0, 1, 2, 3];

const categoryForShape = (shape) => {
  if (shape === "portrait") return "Dikey Tasarım";
  if (shape === "landscape") return "Yatay Tasarım";
  return "Sosyal Medya Tasarımı";
};

export default function DesignShowcaseCarousel({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const pointerRef = useRef(null);
  const movedRef = useRef(false);

  const items = useMemo(
    () => project.media.gallery.map((entry, index) => {
      const image = typeof entry === "string" ? { src: entry, shape: "square" } : entry;
      return {
        ...image,
        id: `${project.id}-${index + 1}`,
        title: `Tasarım Çalışması ${String(index + 1).padStart(2, "0")}`,
        category: categoryForShape(image.shape),
        year: "2024",
      };
    }),
    [project],
  );

  const goTo = useCallback((index) => {
    setActiveIndex(normalize(index, items.length));
  }, [items.length]);
  const previous = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    [activeIndex - 1, activeIndex + 1].forEach((index) => {
      const image = new Image();
      image.src = items[normalize(index, items.length)].src;
    });
  }, [activeIndex, items]);

  const handleKeyDown = (event) => {
    if (isLightboxOpen) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const activeItem = items[activeIndex];

  return (
    <div
      className="project-media project-design-showcase"
      role="region"
      aria-label="Tasarım çalışmaları galerisi"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <div className="design-carousel-stage">
        <div
          className="design-carousel-track"
          onPointerDown={(event) => {
            pointerRef.current = { x: event.clientX, id: event.pointerId };
            movedRef.current = false;
            event.currentTarget.classList.add("is-dragging");
            event.currentTarget.setPointerCapture?.(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!pointerRef.current) return;
            const distance = event.clientX - pointerRef.current.x;
            if (Math.abs(distance) > 7) movedRef.current = true;
            event.currentTarget.style.setProperty("--drag-shift", `${Math.max(-70, Math.min(70, distance))}px`);
          }}
          onPointerUp={(event) => {
            if (!pointerRef.current) return;
            const distance = event.clientX - pointerRef.current.x;
            event.currentTarget.classList.remove("is-dragging");
            event.currentTarget.style.setProperty("--drag-shift", "0px");
            pointerRef.current = null;
            event.currentTarget.releasePointerCapture?.(event.pointerId);
            if (Math.abs(distance) > 44) distance > 0 ? previous() : next();
          }}
          onPointerCancel={(event) => {
            pointerRef.current = null;
            event.currentTarget.classList.remove("is-dragging");
            event.currentTarget.style.setProperty("--drag-shift", "0px");
          }}
        >
          {visibleOffsets.map((offset) => {
            const itemIndex = normalize(activeIndex + offset, items.length);
            return (
              <DesignCarouselItem
                key={items[itemIndex].id}
                item={items[itemIndex]}
                offset={offset}
                onSelect={(step) => {
                  if (!movedRef.current) goTo(activeIndex + step);
                }}
                onOpen={() => !movedRef.current && setLightboxOpen(true)}
              />
            );
          })}
        </div>
        <DesignCarouselControls onPrevious={previous} onNext={next} />
      </div>

      <div className="design-carousel-footer">
        <DesignCarouselIndicators activeIndex={activeIndex} count={items.length} onSelect={goTo} />
      </div>

      {isLightboxOpen && (
        <DesignLightbox
          item={activeItem}
          position={activeIndex}
          count={items.length}
          onClose={() => setLightboxOpen(false)}
          onPrevious={previous}
          onNext={next}
        />
      )}
    </div>
  );
}
