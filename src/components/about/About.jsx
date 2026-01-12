// File: src/components/about/About.jsx

import PageBackground from "../background/PageBackground";
import "./about.css";

export default function About() {
  return (
    <>
      {/* 🔴 DOT BACKGROUND (renkler about.css içinden gelir) */}
      <PageBackground className="about-section" />

      {/* 🔴 ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-card">
            
            {/* ÜST BAR */}
            <div className="about-card-header">
              Hakkımda
            </div>

            {/* İÇERİK */}
            <div className="about-card-content">
              <p>
                Bilgisayar mühendisiyim ve yapay zekâ ile doğal dil işleme
                alanlarında uygulamaya dayalı çalışmalar yapıyorum. Eğitim ve
                staj süreçlerimde veri analizi, makine öğrenmesi, NLP ve yazılım
                geliştirme konularında farklı projeler üzerinde çalıştım.
                Öğrendiklerimi projeler üzerinden pekiştirmeye özen
                gösteriyorum.
              </p>

              <p>
                Turkcell’in uzun soluklu yapay zekâ programı ve staj
                deneyimlerim, bana düzenli çalışma alışkanlığı kazandırdı ve
                teknik konulara daha sistemli yaklaşmamı sağladı. Öğrenmeye
                açık, sorumluluk almaktan çekinmeyen ve kendini sürekli
                geliştirmeye odaklanan bir mühendis olarak üretmeye devam
                ediyorum.
              </p>
            </div>

            {/* ALT NAV (ileride slider / ok için hazır) */}
            <div className="about-card-footer">
              <button aria-label="previous" />
              <button aria-label="next" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
