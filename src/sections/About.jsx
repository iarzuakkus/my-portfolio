import { useState } from "react";
import { Icon } from "@iconify/react";
import CourseCard from "../components/about/CourseCard";
import { academicEducation, sectorEducation } from "../data/aboutEducationData";

function AcademicLogo() {
  const [hasError, setHasError] = useState(false);

  return (
    <span className="about-card-logo is-violet">
      {!hasError && (
        <img
          src={academicEducation.logo}
          alt={academicEducation.logoAlt}
          onError={() => setHasError(true)}
        />
      )}
      {hasError && <span>{academicEducation.fallback}</span>}
    </span>
  );
}

export default function About() {
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const expandedCourseIndex = sectorEducation.findIndex(
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
    <section className="section section-about" id="about">
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
          aria-label="Hakkımda ve eğitim bilgilerim"
        >
          <div className="about-intro">
            <div className="about-title-group">
              <h2>
                Akademik
                <br />
                Yolculuğum<span>.</span>
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
                  <h3>Eğitimim</h3>
                  <p>Akademik yolculuğum.</p>
                </div>
              </header>

              <article className="about-education-card">
                <AcademicLogo />

                <div className="about-education-content">
                  <h4>{academicEducation.title}</h4>
                  <p className="about-record-title">{academicEducation.provider}</p>
                  <p className="about-faculty">{academicEducation.faculty}</p>
                </div>

                <dl className="about-education-meta">
                  <div>
                    <dt>
                      <Icon icon="fa7-solid:graduation-cap" aria-hidden="true" />
                      Mezuniyet
                    </dt>
                    <dd>{academicEducation.date}</dd>
                  </div>
                  <div>
                    <dt>
                      <Icon icon="ph:globe-simple-bold" aria-hidden="true" />
                      Dil
                    </dt>
                    <dd>İngilizce – B1</dd>
                  </div>
                  <div>
                    <dt>
                      <Icon icon="mage:pen-fill" aria-hidden="true" />
                      GNO
                    </dt>
                    <dd>{academicEducation.grade}</dd>
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
                  <h3>Sektörel Eğitimlerim</h3>
                  <p>İçerik ve kazanımlar için bir eğitimi açabilirsin.</p>
                </div>
              </header>

              <div className={courseGridClassName}>
                {sectorEducation.map((course) => (
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
