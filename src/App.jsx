// File: src/App.jsx

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Header />

      {/* SNAP ALANI: Header yüksekliğini düşerek çalışacak */}
      <main className="snap-scroll">
        <section id="hero" className="snap-section">
          <Hero />
        </section>

        <section id="about" className="snap-section">
          <About />
        </section>
      </main>
    </>
  );
}

export default App;
