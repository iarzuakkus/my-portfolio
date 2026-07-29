export const portfolio = {
  person: {
    name: "İ. Arzu Akkuş",
    shortName: "Arzu Akkuş",
    role: "Bilgisayar Mühendisi",
    specialty: "Yapay zekâ, doğal dil işleme ve veri odaklı ürünler",
    summary:
      "Veriyi anlamlı ürünlere dönüştüren, araştırma ile yazılım geliştirmeyi aynı problem çözme sürecinde buluşturan bir bilgisayar mühendisiyim.",
    location: "Türkiye",
    availability: "Yeni fırsatlara ve iş birliklerine açık",
  },
  navigation: [
    { label: "Hakkımda", href: "#about" },
    { label: "Yetkinlikler", href: "#capabilities" },
    { label: "Deneyim", href: "#experience" },
    { label: "Çalışmalar", href: "#work" },
    { label: "İletişim", href: "#contact" },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/iarzuakkus",
      description: "Kod ve proje depoları",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/i-arzu-akkus/",
      description: "Profesyonel profil",
    },
  ],
  about: [
    "Yapay zekâ ve doğal dil işleme alanlarında uygulamaya dayalı çalışmalar yürütüyorum. Veri analizi, makine öğrenmesi ve yazılım geliştirme disiplinlerini bir araya getirerek gerçek problemlere anlaşılır ve sürdürülebilir çözümler üretmeye odaklanıyorum.",
    "Eğitim, program ve staj deneyimlerimde teknik araştırmayı çalışan prototiplere dönüştürme fırsatı buldum. Öğrenme sürecimi yalnızca teoriyle değil; deneyerek, ölçerek ve sonuçları iyileştirerek ilerletiyorum.",
  ],
  principles: [
    {
      number: "01",
      title: "Problemi doğru tanımla",
      text: "Çözümden önce bağlamı, kullanıcı ihtiyacını ve başarı ölçütünü netleştiririm.",
    },
    {
      number: "02",
      title: "Veriyle doğrula",
      text: "Kararları varsayımlardan çok gözlemlenebilir sonuçlar ve ölçümler üzerine kurarım.",
    },
    {
      number: "03",
      title: "Sade geliştir",
      text: "Okunabilir, modüler ve geliştirilebilir sistemleri kısa vadeli karmaşıklığa tercih ederim.",
    },
  ],
  capabilities: [
    {
      title: "Yapay Zekâ & ML",
      description:
        "Veri hazırlamadan model değerlendirmeye uzanan deneysel makine öğrenmesi süreçleri.",
      skills: ["Python", "Makine Öğrenmesi", "Model Değerlendirme", "Veri Ön İşleme"],
    },
    {
      title: "Doğal Dil İşleme",
      description:
        "Metin verisini anlamlandıran sınıflandırma, analiz ve bilgi çıkarımı yaklaşımları.",
      skills: ["NLP", "Metin Analizi", "Dil Modelleri", "Özellik Çıkarımı"],
    },
    {
      title: "Veri & Yazılım",
      description:
        "Analiz çıktısını kullanılabilir, sürdürülebilir yazılım çözümlerine dönüştürme.",
      skills: ["Veri Analizi", "Prototipleme", "Git", "Yazılım Geliştirme"],
    },
  ],
  experience: [
    {
      type: "Uzun Soluklu Program",
      title: "Yapay Zekâ Gelişim Programı",
      organization: "Turkcell",
      description:
        "Yapay zekâ odağında düzenli ve uygulamalı bir öğrenme süreci; teknik konulara sistemli yaklaşım, sürekli gelişim ve proje disiplini.",
    },
    {
      type: "Uygulamalı Deneyim",
      title: "Staj Çalışmaları",
      organization: "Profesyonel deneyim",
      description:
        "Veri analizi, makine öğrenmesi, doğal dil işleme ve yazılım geliştirme alanlarında farklı problemler üzerine uygulamalı çalışmalar.",
    },
    {
      type: "Akademik Temel",
      title: "Bilgisayar Mühendisliği",
      organization: "Lisans eğitimi",
      description:
        "Algoritmik düşünme, problem çözme ve yazılım mühendisliği temellerini uygulamalı projelerle güçlendiren mühendislik eğitimi.",
    },
  ],
  workAreas: [
    {
      index: "A",
      title: "Metin Zekâsı",
      description:
        "Metin verisini sınıflandırma, örüntüleri ortaya çıkarma ve ham içeriği kullanılabilir bilgiye dönüştürme.",
      tags: ["NLP", "Text Analytics", "Python"],
    },
    {
      index: "B",
      title: "Makine Öğrenmesi Deneyleri",
      description:
        "Probleme uygun yaklaşımı belirleme, veri hazırlama, model kurma ve sonuçları karşılaştırmalı değerlendirme.",
      tags: ["Machine Learning", "Evaluation", "Data"],
    },
    {
      index: "C",
      title: "Veri Odaklı Prototipler",
      description:
        "Analiz ve araştırma çıktılarını anlaşılır arayüzlere veya tekrar kullanılabilir yazılım akışlarına taşıma.",
      tags: ["Prototyping", "Software", "Product Thinking"],
    },
  ],
};
