import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ProjectImage({ src, alt, icon }) {
  const { t } = useLanguage();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <span className="project-image-placeholder" aria-label={`${alt} ${t("görsel alanı")}`}>
        <Icon icon={icon} aria-hidden="true" />
        <small>{t("Görsel eklenecek")}</small>
      </span>
    );
  }

  return <img src={src} alt={alt} onError={() => setFailed(true)} />;
}
