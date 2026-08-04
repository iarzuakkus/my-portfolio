import { useState } from "react";
import { Icon } from "@iconify/react";

const education = {
  title: "Bilgisayar Mühendisliği",
  provider: "Süleyman Demirel Üniversitesi",
  faculty: "Mühendislik Fakültesi",
  date: "2021 – 2025",
  graduation: "2025",
  grade: "2,99 / 4",
  logo: "/logos/sdu-logo.png",
  logoAlt: "Süleyman Demirel Üniversitesi logosu",
  fallback: "SDÜ",
};

const completedCourses = [
  {
    id: "teknokampus-ai",
    title: "Teknokampüs Yapay Zekâ ve Robotik Eğitimi",
    provider: "Medeniyet Teknopark",
    date: "02/2026 – 07/2026",
    icon: "carbon:machine-learning-model",
    accent: "violet",
    details: [
      "Yüz yüze yapay zekâ ve robotik eğitimi",
      "Matematiksel temeller ve makine öğrenmesi uygulamaları",
      "Program sonu projesi: MemorAI",
    ],
    notes:
      "Eğitim sürecini, yapay zekâ destekli kişisel bilgi asistanı MemorAI projesini geliştirerek tamamladım.",
  },
  {
    id: "edutech-analysis",
    title: "EndTech Veri ve İş Analistliği Eğitimi",
    provider: "EduTech",
    date: "05/2026 – 07/2026",
    icon: "ep:data-analysis",
    accent: "turquoise",
    details: [
      "Veri analizi süreçleri",
      "İş analizi yöntemleri",
      "Analitik problem çözme çalışmaları",
    ],
    notes:
      "Veri analizi ve iş analistliği süreçlerine yönelik uygulamalı eğitim programına katıldım.",
  },
  {
    id: "turkcell-ai",
    title: "Geleceği Yazan Kadınlar Yapay Zekâ Programı",
    provider: "Turkcell",
    date: "01/2025 – 10/2025",
    logo: "/logos/turkcell-logo.png",
    logoAlt: "Turkcell logosu",
    fallback: "Turkcell",
    accent: "coral",
    details: [
      "Python, SQL ve veri işleme",
      "Makine öğrenmesi ve derin öğrenme",
      "NLP, metin temizleme ve embedding teknikleri",
    ],
    notes:
      "İki modüllü programda makine öğrenmesi ve doğal dil işleme üzerine uygulamalı çalışmalar yaparak NLP projeleri geliştirdim.",
  },
];

function LogoMark({ item }) {
  const [hasError, setHasError] = useState(false);

  if (item.icon) {
    return (
      <span className={`about-card-icon is-${item.accent}`} aria-hidden="true">
        <Icon icon={item.icon} />
      </span>
    );
  }

  return (
    <span className={`about-card-logo is-${item.accent ?? "violet"}`}>
      {!hasError && (
        <img src={item.logo} alt={item.logoAlt} onError={() => setHasError(true)} />
      )}
      {hasError && <span>{item.fallback}</span>}
    </span>
  );
}

export default function About() {
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const toggleCourse = (courseId) => {
    setExpandedCourseId((current) => (current === courseId ? null : courseId));
  };

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
                  <LogoMark item={education} />

                  <div className="about-education-content">
                    <h4>{education.provider}</h4>
                    <p className="about-record-title">{education.title}</p>
                    <p className="about-faculty">{education.faculty}</p>
                  </div>

                  <dl className="about-education-meta">
                    <div>
                      <dt>
                        <Icon icon="fa7-solid:graduation-cap" aria-hidden="true" />
                        Mezuniyet
                      </dt>
                      <dd>{education.date}</dd>
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
                      <dd>{education.grade}</dd>
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
                    <p>Detayı görmek için bir karta tıklayabilirsin.</p>
                  </div>
                </header>

                <div className={`about-course-grid${expandedCourseId ? " has-selection" : ""}`}>
                  {completedCourses.map((course) => {
                    const isExpanded = expandedCourseId === course.id;
                    const isCondensed = expandedCourseId && !isExpanded;

                    return (
                      <article
                        className={[
                          "about-course-card",
                          `is-${course.accent}`,
                          isExpanded ? "is-expanded" : "",
                          isCondensed ? "is-condensed" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        key={course.id}
                      >
                        <button
                          className="about-card-action"
                          type="button"
                          onClick={() => toggleCourse(course.id)}
                          aria-expanded={isExpanded}
                          aria-label={`${course.title} detaylarını ${
                            isExpanded ? "kapat" : "aç"
                          }`}
                        />

                        <LogoMark item={course} />

                        <div className="about-course-summary">
                          <h4>{course.title}</h4>
                          <p className="about-record-title">{course.provider}</p>
                          <p className="about-record-period">
                            <Icon icon="lets-icons:date-today" aria-hidden="true" />
                            {course.date}
                          </p>
                        </div>

                        <div className="about-course-details" aria-hidden={!isExpanded}>
                          <ul>
                            {course.details.map((detail) => (
                              <li key={detail}>
                                <Icon
                                  icon="material-symbols:check-circle-rounded"
                                  aria-hidden="true"
                                />
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <div className="about-course-note">
                            <Icon icon="mage:pen" aria-hidden="true" />
                            <p>{course.notes}</p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            </div>
        </article>
      </div>
    </section>
  );
}
