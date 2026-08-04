import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ProjectImage from "./ProjectImage";

const isVideo = (source) => /\.(mp4|webm|ogg)$/i.test(source);

export default function ProjectGallery({ project }) {
  const images = [project.media.cover, ...project.media.gallery];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = images[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [project.id]);

  return (
    <div
      className={`project-media project-gallery${
        project.media.orientation === "portrait" ? " is-portrait" : ""
      }`}
    >
      <div className="project-gallery-main">
        {isVideo(activeMedia) ? (
          <video key={activeMedia} controls playsInline preload="metadata">
            <source src={activeMedia} type="video/mp4" />
            Tarayıcın bu videoyu oynatmayı desteklemiyor.
          </video>
        ) : (
          <ProjectImage
            src={activeMedia}
            alt={`${project.title} ekranı ${activeIndex + 1}`}
            icon={project.icon}
          />
        )}
        <span className="project-gallery-counter">
          {activeIndex + 1} / {images.length}
        </span>
      </div>

      <div
        className="project-gallery-thumbs"
        aria-label={`${project.title} görselleri`}
        style={{ "--gallery-count": images.length }}
      >
        {images.map((image, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            type="button"
            aria-label={`${index + 1}. görseli göster`}
            aria-pressed={index === activeIndex}
            key={image}
            onClick={() => setActiveIndex(index)}
          >
            {isVideo(image) ? (
              <>
                <video src={image} muted playsInline preload="metadata" aria-hidden="true" />
                <span className="project-gallery-video-badge">
                  <Icon icon="tabler:player-play-filled" aria-hidden="true" />
                </span>
              </>
            ) : (
              <ProjectImage src={image} alt="" icon={project.icon} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
