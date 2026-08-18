import { useState } from "react";
import { Icon } from "@iconify/react";
import CourseCard from "../components/about/CourseCard";
import { academicEducation, sectorEducation } from "../data/aboutEducationData";
import { useLanguage } from "../i18n/LanguageContext";

function AcademicLogo({ education }) {
  const [hasError, setHasError] = useState(false);

  return (
    <span className="about-card-logo is-violet">
      {!hasError && (
        <img
          src={education.logo}
          alt={education.logoAlt}
          onError={() => setHasError(true)}
        />
      )}
      {hasError && <span>{education.fallback}</span>}
    </span>
  );
}

export default function About() {
  const { t, localize } = useLanguage();
  const localizedAcademicEducation = localize(academicEducation);
  const localizedSectorEducation = localize(sectorEducation);
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const expandedCourseIndex = localizedSectorEducation.findIndex(
    (course) => course.id === expandedCourseId,
  );

  const toggleCourse = (courseId) => {
    setExpandedCourseId((current) => (current === courseId ? null : courseId));
  };

  const courseGridClassName = [
    "sector-course-grid",
    expandedCourseId ? "has-selection" : "",
    expandedCourseIndex >= 0 ? `has-selection-at-${expandedCourseIndex + 1}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={`section section-about${expandedCourseId ? " has-expanded-course" : ""}`}
      id="about"
    >
      <div className="about-background-patterns" aria-hidden="true">
        <Icon className="about-pattern about-pattern-dots-top" icon="pajamas:dot-grid" />
        <Icon className="about-pattern about-pattern-spiral" icon="iconoir:spiral" />
        <Icon className="about-pattern about-pattern-dots-bottom" icon="pajamas:dot-grid" />
        <span className="about-wave-line about-wave-line-one" />
        <span className="about-wave-line about-wave-line-two" />
        <span className="about-wave-line about-wave-line-three" />
      </div>

      <div className="shell about-shell">
        <article
          className="about-page about-profile-page"
          aria-label={t("Hakkımda ve eğitim bilgilerim")}
        >
          <div className="about-intro">
            <div className="about-title-group">
              <h2>
                {t("Akademik")}
                <br />
                {t("Yolculuğum")}<span>.</span>
              </h2>
            </div>
          </div>

          <div className="about-records">
            <section className="about-record-section about-education">
              <header className="about-record-heading">
                <span className="about-record-icon is-violet" aria-hidden="true">
                  <Icon icon="fa7-solid:graduation-cap" />
                </span>
                <div>
                  <h3>{t("Eğitimim")}</h3>
                  <p>{t("Akademik yolculuğum.")}</p>
                </div>
              </header>

              <article className="about-education-card">
                <AcademicLogo education={localizedAcademicEducation} />

                <div className="about-education-content">
                  <h4>{localizedAcademicEducation.title}</h4>
                  <p className="about-record-title">{localizedAcademicEducation.provider}</p>
                  <p className="about-faculty">{localizedAcademicEducation.faculty}</p>
                </div>

                <dl className="about-education-meta">
                  <div>
                    <dt>
                      <Icon icon="fa7-solid:graduation-cap" aria-hidden="true" />
                      {t("Mezuniyet")}
                    </dt>
                    <dd>{localizedAcademicEducation.date}</dd>
                  </div>
                  <div>
                    <dt>
                      <Icon icon="ph:globe-simple-bold" aria-hidden="true" />
                      {t("Dil")}
                    </dt>
                    <dd>{t("İngilizce – B1")}</dd>
                  </div>
                  <div>
                    <dt>
                      <Icon icon="mage:pen-fill" aria-hidden="true" />
                      {t("GNO")}
                    </dt>
                    <dd>{localizedAcademicEducation.grade}</dd>
                  </div>
                </dl>
              </article>
            </section>

            <section className="about-record-section about-courses">
              <header className="about-record-heading">
                <span className="about-record-icon is-turquoise" aria-hidden="true">
                  <Icon icon="ph:medal-fill" />
                </span>
                <div>
                  <h3>{t("Sektörel Eğitimlerim")}</h3>
                  <p>{t("İçerik ve kazanımlar için bir eğitimi açabilirsin.")}</p>
                </div>
              </header>

              <div className={courseGridClassName}>
                {localizedSectorEducation.map((course) => (
                  <CourseCard
                    course={course}
                    expanded={expandedCourseId === course.id}
                    condensed={Boolean(expandedCourseId && expandedCourseId !== course.id)}
                    onToggle={() => toggleCourse(course.id)}
                    key={course.id}
                  />
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
