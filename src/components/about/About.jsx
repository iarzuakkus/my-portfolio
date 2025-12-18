// File: src/components/about/About.jsx
import PageBackground from "../background/PageBackground";
import "./about.css";

export default function About() {
  const squares = [
    { r: 4, c: 4 }, { r: 7, c: 3 }, { r: 10, c: 5 }, 
    { r: 13, c: 3 }, { r: 16, c: 5 }, { r: 2, c: 6 },
    { r: 19, c: 3 },

    { r: 3, c: 18 }, { r: 6, c: 20 }, { r: 9, c: 18 }, 
    { r: 12, c: 21 }, { r: 15, c: 19 }, { r: 18, c: 21 },
    { r: 5, c: 23 }, { r: 11, c: 24 },

    { r: 2, c: 10 }, { r: 3, c: 13 }, { r: 2, c: 16 }, 
    { r: 4, c: 8 }, { r: 3, c: 22 },

    { r: 17, c: 8 }, { r: 18, c: 11 }, { r: 17, c: 15 }, 
    { r: 19, c: 13 }, { r: 18, c: 18 },

    { r: 6, c: 1 }, { r: 14, c: 1 }, { r: 1, c: 25 }, 
    { r: 20, c: 25 }, { r: 1, c: 2 }
  ];

  return (
    <PageBackground variant="grid">
      {/* 🔴 SECTION = sadece arka plan + snap */}
      <section className="about-section" id="about">

        {/* Arka plan kareleri (AYNI, DOKUNMADIK) */}
        <div className="fixed-grid-layer">
          {squares.map((s, i) => (
            <div
              key={i}
              className="about-grid-square"
              style={{ gridRow: s.r, gridColumn: s.c }}
            />
          ))}
        </div>

        {/* 🔴 INNER WRAPPER = padding + içerik */}
        <div className="section-inner about-inner">
          <div className="about-card">
            <h2 className="about-title">Hakkımda...</h2>
            <p>
              Bilgisayar mühendisiyim ve yapay zekâ ile doğal dil işleme alanlarında
              uygulamaya dayalı çalışmalar yapıyorum. Eğitim ve staj süreçlerimde
              veri analizi, makine öğrenmesi, NLP ve yazılım geliştirme konularında
              farklı projeler üzerinde çalıştım. Yeni teknolojileri öğrenirken
              sadece teoride kalmamaya, öğrendiklerimi projeler üzerinden
              pekiştirmeye özen gösteriyorum.
            </p>
            <p>
              Turkcell’in uzun soluklu yapay zekâ programı ve staj deneyimlerim,
              bana düzenli çalışma alışkanlığı kazandırdı ve teknik konulara daha
              sistemli yaklaşmamı sağladı. Öğrenmeye açık, sorumluluk almaktan
              çekinmeyen ve kendini sürekli geliştirmeye odaklanan bir mühendis
              olarak üretmeye devam ediyorum.
            </p>
          </div>
        </div>

      </section>
    </PageBackground>
  );
}
