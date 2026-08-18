// src/components/projects/ProjectMedia.jsx
import { Icon } from "@iconify/react";
import { useLanguage } from "../../i18n/LanguageContext";
import DesignShowcaseCarousel from "./design-showcase/DesignShowcaseCarousel";
import ProjectGallery from "./ProjectGallery";
import ProjectImage from "./ProjectImage";
import ProjectTextShowcase from "./ProjectTextShowcase";

export default function ProjectMedia({ project, compact = false }) {
  const { t } = useLanguage();
  if (!project.media) {
    if (compact) {
      return (
        <div className="project-media project-media--compact-icon">
          <Icon icon={project.icon} aria-hidden="true" />
        </div>
      );
    }

    return <ProjectTextShowcase project={project} />;
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
          alt={`${project.title} ${t("kapak görseli")}`}
          icon={project.icon}
        />
      </div>
    );
  }

  return <ProjectGallery project={project} />;
}
