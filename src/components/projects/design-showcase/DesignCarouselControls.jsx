// src/components/projects/design-showcase/DesignCarouselControls.jsx
import { Icon } from "@iconify/react";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function DesignCarouselControls({ onPrevious, onNext }) {
  const { t } = useLanguage();
  return (
    <div className="design-carousel-controls" aria-label={t("Tasarım galerisi kontrolleri")}>
      <button type="button" aria-label={t("Önceki tasarım")} onClick={onPrevious}>
        <Icon icon="lucide:chevron-left" aria-hidden="true" />
      </button>
      <button type="button" aria-label={t("Sonraki tasarım")} onClick={onNext}>
        <Icon icon="lucide:chevron-right" aria-hidden="true" />
      </button>
    </div>
  );
}
