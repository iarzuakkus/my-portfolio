// src/components/header/HeaderRight.jsx

import projectIcon from "../../assets/icons/project.svg";
import userIcon from "../../assets/icons/user.svg";
import mailIcon from "../../assets/icons/mail.svg";
import downloadIcon from "../../assets/icons/download.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

export default function HeaderRight() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="header-right">
      {/* Projects */}
      <button
        className="btn purple"
        onClick={() => scrollToSection("projects")}
      >
        <img src={projectIcon} alt="Projects" className="icon" />
        Projects
      </button>

      {/* About */}
      <button
        className="btn btn-icon green"
        onClick={() => scrollToSection("about")}
        aria-label="About Me"
      >
        <img src={userIcon} alt="About" className="icon" />
      </button>

      {/* Contact */}
      <button
        className="btn btn-icon lime"
        onClick={() => scrollToSection("contact")}
        aria-label="Contact"
      >
        <img src={mailIcon} alt="Contact" className="icon" />
      </button>

      {/* Resume */}
      <a
        className="btn orange"
        href="/resume.pdf"
        download
      >
        <img src={downloadIcon} alt="Resume" className="icon" />
        Resume
      </a>

      {/* GitHub */}
      <a
        className="btn btn-icon yellow"
        href="https://github.com/iarzuakkus"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="GitHub" className="icon" />
      </a>

      {/* LinkedIn */}
      <a
        className="btn btn-icon purple"
        href="https://www.linkedin.com/in/i-arzu-akkus/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="icon" />
      </a>
    </div>
  );
}
