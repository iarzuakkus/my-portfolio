// src/components/projects/design-showcase/DesignLightbox.jsx
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function DesignLightbox({ item, position, count, onClose, onPrevious, onNext }) {
  const { t } = useLanguage();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();

      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll("button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  return createPortal(
    <div className="design-lightbox" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={dialogRef} className="design-lightbox-dialog" role="dialog" aria-modal="true" aria-label={item.title}>
        <button ref={closeRef} className="design-lightbox-close" type="button" aria-label={t("Galeriyi kapat")} onClick={onClose}>
          <Icon icon="material-symbols:close-rounded" aria-hidden="true" />
        </button>
        <button className="design-lightbox-arrow is-left" type="button" aria-label={t("Önceki tasarım")} onClick={onPrevious}>
          <Icon icon="lucide:chevron-left" aria-hidden="true" />
        </button>
        <img src={item.src} alt={`${item.title}, ${item.category}`} />
        <button className="design-lightbox-arrow is-right" type="button" aria-label={t("Sonraki tasarım")} onClick={onNext}>
          <Icon icon="lucide:chevron-right" aria-hidden="true" />
        </button>
        <footer>
          <span>{item.title}</span>
          <small>{item.category} · {item.year} · {String(position + 1).padStart(2, "0")}/{String(count).padStart(2, "0")}</small>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
