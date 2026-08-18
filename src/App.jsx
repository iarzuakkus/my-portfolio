import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import useViewportZoomState from "./hooks/useViewportZoomState";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  useViewportZoomState();
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t("İ. Arzu Akkuş — Bilgisayar Mühendisi");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        t("İ. Arzu Akkuş - Yapay zekâ, doğal dil işleme ve veri odaklı ürünler geliştiren bilgisayar mühendisi."),
      );
  }, [t]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("İçeriğe geç")}
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
