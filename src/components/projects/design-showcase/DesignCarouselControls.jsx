// src/components/projects/design-showcase/DesignCarouselControls.jsx
import { Icon } from "@iconify/react";

export default function DesignCarouselControls({ onPrevious, onNext }) {
  return (
    <div className="design-carousel-controls" aria-label="Tasarım galerisi kontrolleri">
      <button type="button" aria-label="Önceki tasarım" onClick={onPrevious}>
        <Icon icon="lucide:chevron-left" aria-hidden="true" />
      </button>
      <button type="button" aria-label="Sonraki tasarım" onClick={onNext}>
        <Icon icon="lucide:chevron-right" aria-hidden="true" />
      </button>
    </div>
  );
}
