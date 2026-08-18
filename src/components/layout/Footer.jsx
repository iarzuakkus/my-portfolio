import { portfolio } from "../../data/portfolioData";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Footer() {
  const { localize } = useLanguage();
  const localizedPortfolio = localize(portfolio);
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} {localizedPortfolio.person.shortName}</p>
      </div>
    </footer>
  );
}
