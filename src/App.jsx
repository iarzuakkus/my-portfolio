import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Work from "./sections/Work";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        İçeriğe geç
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
