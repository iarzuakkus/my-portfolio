// src/components/projects/design-showcase/DesignCarouselItem.jsx
import { useState } from "react";

const initialRatio = (shape) => {
  if (shape === "portrait") return 0.7;
  if (shape === "landscape") return 1.45;
  return 1;
};

export default function DesignCarouselItem({ item, offset, onSelect, onOpen }) {
  const isActive = offset === 0;
  const [aspectRatio, setAspectRatio] = useState(() => initialRatio(item.shape));
  const visualShape = aspectRatio < 0.82 ? "portrait" : aspectRatio > 1.28 ? "landscape" : "square";

  const handleClick = () => {
    if (isActive) onOpen();
    else onSelect(offset);
  };

  return (
    <button
      className={`design-carousel-item design-carousel-item--${visualShape} design-carousel-item--${offset < 0 ? "left" : offset > 0 ? "right" : "active"}`}
      data-offset={offset}
      style={{ "--design-aspect": aspectRatio }}
      type="button"
      aria-current={isActive ? "true" : undefined}
      aria-label={isActive ? `${item.title} tasarımını büyüt` : `${item.title} tasarımını merkeze getir`}
      onClick={handleClick}
    >
      <img
        src={item.src}
        alt={`${item.title}, ${item.category}`}
        loading={isActive || Math.abs(offset) === 1 ? "eager" : "lazy"}
        draggable="false"
        onLoad={(event) => {
          const { naturalWidth, naturalHeight } = event.currentTarget;
          if (naturalWidth && naturalHeight) setAspectRatio(naturalWidth / naturalHeight);
        }}
      />
    </button>
  );
}
