// src/components/projects/design-showcase/DesignCarouselIndicators.jsx
import { useLanguage } from "../../../i18n/LanguageContext";

const normalize = (index, length) => (index + length) % length;

export default function DesignCarouselIndicators({ activeIndex, count, onSelect }) {
  const { t } = useLanguage();
  const visibleIndexes = [-2, -1, 0, 1, 2].map((offset) => normalize(activeIndex + offset, count));

  return (
    <div className="design-carousel-indicators" aria-label={t("Tasarım seçimi")}>
      {visibleIndexes.map((index) => (
        <button
          key={index}
          type="button"
          className={index === activeIndex ? "is-active" : ""}
          aria-label={`${index + 1}. ${t("tasarıma git")}`}
          aria-current={index === activeIndex ? "true" : undefined}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
