// File: C:\Users\ASUS\my-portfolio\src\components\header\HeaderRight.jsx

import projectIcon from "../../assets/icons/project.svg";
import userIcon from "../../assets/icons/user.svg";
import mailIcon from "../../assets/icons/mail.svg";
import downloadIcon from "../../assets/icons/download.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import jobIcon from "../../assets/icons/job.svg";

export default function HeaderRight() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="header-right">
      {/* Hakkımda */}
      <button
        className="nav-btn color-1"
        onClick={() => scrollToSection("about")}
        aria-label="Hakkımda"
      >
        <img src={userIcon} alt="Hakkımda" className="icon" />
        <span className="btn-text">Hakkımda</span>
      </button>

      {/* Deneyim */}
      <button
        className="nav-btn color-2"
        onClick={() => scrollToSection("experience")}
        aria-label="Deneyim"
      >
        <img src={jobIcon} alt="Deneyim" className="icon" />
        <span className="btn-text">Deneyim</span>
      </button>

      {/* Projeler */}
      <button
        className="nav-btn color-3"
        onClick={() => scrollToSection("projects")}
        aria-label="Projeler"
      >
        <img src={projectIcon} alt="Projeler" className="icon" />
        <span className="btn-text">Projeler</span>
      </button>

      {/* İletişim */}
      <button
        className="nav-btn color-4"
        onClick={() => scrollToSection("contact")}
        aria-label="İletişim"
      >
        <img src={mailIcon} alt="İletişim" className="icon" />
        <span className="btn-text">İletişim</span>
      </button>

      {/* CV */}
      <a
        className="nav-btn color-5"
        href="/resume.pdf"
        download
        aria-label="CV"
      >
        <img src={downloadIcon} alt="CV" className="icon" />
        <span className="btn-text">CV</span>
      </a>

      {/* GitHub */}
      <a
        className="nav-btn color-6"
        href="https://github.com/iarzuakkus"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <img src={githubIcon} alt="GitHub" className="icon" />
        <span className="btn-text">GitHub</span>
      </a>

      {/* LinkedIn */}
      <a
        className="nav-btn color-7"
        href="https://www.linkedin.com/in/i-arzu-akkus/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        <span className="btn-text">LinkedIn</span>
      </a>
    </div>
  );
}
