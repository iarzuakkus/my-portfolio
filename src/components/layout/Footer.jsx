import { portfolio } from "../../data/portfolioData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} {portfolio.person.shortName}</p>
        <p>Merak, disiplin ve özenle geliştirildi.</p>
      </div>
    </footer>
  );
}
