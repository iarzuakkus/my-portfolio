// src/components/projects/ProjectMedia.jsx
import { Icon } from "@iconify/react";
import DesignShowcaseCarousel from "./design-showcase/DesignShowcaseCarousel";
import ProjectGallery from "./ProjectGallery";
import ProjectImage from "./ProjectImage";

export default function ProjectMedia({ project, compact = false }) {
  if (!project.media) {
    if (compact) {
      return (
        <div className="project-media project-media--compact-icon">
          <Icon icon={project.icon} aria-hidden="true" />
        </div>
      );
    }

    return (
      <div className="project-media project-media--text-only">
        <Icon icon={project.icon} aria-hidden="true" />
        <strong>Görselsiz proje</strong>
        <span>Proje açıklaması ve kaynak kod bağlantısıyla sunuluyor.</span>
      </div>
    );
  }

  if (project.media.variant === "design-orbit") {
    if (compact) {
      return (
        <div className="project-media project-media--compact-icon">
          <Icon icon={project.icon} aria-hidden="true" />
        </div>
      );
    }

    return <DesignShowcaseCarousel project={project} />;
  }

  if (compact) {
    if (project.compactUseIcon) {
      return (
        <div className="project-media project-media--compact-icon">
          <Icon icon={project.icon} aria-hidden="true" />
        </div>
      );
    }

    return (
      <div className="project-media project-media--compact-icon">
        <ProjectImage
          src={project.media.cardCover ?? project.media.cover}
          alt={`${project.title} kapak görseli`}
          icon={project.icon}
        />
      </div>
    );
  }

  return <ProjectGallery project={project} />;
}
