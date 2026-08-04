import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ProjectImage({ src, alt, icon }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <span className="project-image-placeholder" aria-label={`${alt} görsel alanı`}>
        <Icon icon={icon} aria-hidden="true" />
        <small>Görsel eklenecek</small>
      </span>
    );
  }

  return <img src={src} alt={alt} onError={() => setFailed(true)} />;
}
