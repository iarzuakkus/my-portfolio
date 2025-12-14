// File: C:\Users\ASUS\my-portfolio\src\components\header\HeaderRight.jsx
import projectIcon from "../../assets/icons/project.svg";
import userIcon from "../../assets/icons/user.svg";
import mailIcon from "../../assets/icons/mail.svg";
import downloadIcon from "../../assets/icons/download.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import jobIcon from "../../assets/icons/job.svg";

export default function HeaderRight({ isOpen }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    /* isOpen prop'u sayesinde mobil menü açılıp kapanacak */
    <div className={`header-right ${isOpen ? "open" : ""}`}>
      {/* Hakkımda */}
      <button className="nav-btn pink" onClick={() => scrollToSection("about")}>
        <img src={userIcon} alt="" className="icon" />
        <span className="btn-text">Hakkımda</span>
      </button>

      {/* Deneyim */}
      <button className="nav-btn blue" onClick={() => scrollToSection("experience")}>
        <img src={jobIcon} alt="" className="icon" />
        <span className="btn-text">Deneyim</span>
      </button>

      {/* Projeler */}
      <button className="nav-btn lime" onClick={() => scrollToSection("projects")}>
        <img src={projectIcon} alt="" className="icon" />
        <span className="btn-text">Projeler</span>
      </button>

      {/* İletişim */}
      <button className="nav-btn orange" onClick={() => scrollToSection("contact")}>
        <img src={mailIcon} alt="" className="icon" />
        <span className="btn-text">İletişim</span>
      </button>

      {/* CV */}
      <a className="nav-btn yellow" href="/resume.pdf" download>
        <img src={downloadIcon} alt="" className="icon" />
        <span className="btn-text">CV</span>
      </a>

      {/* GitHub */}
      <a className="nav-btn purple" href="https://github.com/iarzuakkus" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="" className="icon" />
        <span className="btn-text">GitHub</span>
      </a>

      {/* LinkedIn */}
      <a className="nav-btn soft-blue" href="https://www.linkedin.com/in/i-arzu-akkus/" target="_blank" rel="noreferrer">
        <img src={linkedinIcon} alt="" className="icon" />
        <span className="btn-text">LinkedIn</span>
      </a>
    </div>
  );
}