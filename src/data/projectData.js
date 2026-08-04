const imageSet = (folder, count = 4) => ({
  cover: `/projects/${folder}/cover.webp`,
  gallery: Array.from({ length: count }, (_, index) =>
    `/projects/${folder}/${String(index + 1).padStart(2, "0")}.webp`,
  ),
});

export const projects = [
  {
    id: "warehouse-optimizer",
    title: "Warehouse Optimizer",
    category: "Optimizasyon Uygulaması",
    description:
      "Depo, raf, lokasyon ve koli verilerini etkileşimli 3D haritada görselleştiren; kapasite takibi, sipariş yönetimi, stok tahsisi ve ürün yerleşimi optimizasyonu sağlayan bir uygulama geliştirdim. Simülasyon senaryolarıyla forklift ve transpalet hareketlerini adım adım izlenebilir hâle getirdim.",
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib"],
    icon: "mdi:warehouse",
    compactUseIcon: true,
    tone: "violet",
    media: {
      cover: "/projects/warehouse-optimizer/01.webp",
      gallery: [
        "/projects/warehouse-optimizer/02.webp",
        "/projects/warehouse-optimizer/03.webp",
        "/projects/warehouse-optimizer/04.webp",
        "/projects/warehouse-optimizer/05.webp",
      ],
    },
  },
  {
    id: "memorai",
    title: "MemorAI",
    category: "Yapay Zekâ & RAG",
    description:
      "Web içeriklerini analiz ederek kişisel bilgi hafızasına kaydeden, kaynaklara dayalı soruları yanıtlayan ve otomatik notlar oluşturan Adaptive RAG tabanlı Chrome eklentisi.",
    tags: ["Python", "RAG", "LLM", "Chrome Extension"],
    icon: "eos-icons:ai",
    badgeLogo: "/projects/memorai/logo.svg",
    tone: "berry",
    media: {
      cardCover: "/projects/memorai/logo.svg",
      cover: "/projects/memorai/1.png",
      gallery: [
        "/projects/memorai/2.png",
        "/projects/memorai/3.png",
        "/projects/memorai/4.png",
      ],
      orientation: "portrait",
    },
  },
  {
    id: "harita-uygulamasi",
    title: "Harita Uygulaması",
    category: "Web & CBS",
    description:
      "Harita üzerinde nokta, çizgi ve alan oluşturma, düzenleme, listeleme ve kaydetme işlemlerini sağlayan etkileşimli web uygulaması.",
    tags: [".NET 8", "EF Core", "PostGIS", "OpenLayers"],
    icon: "tabler:map-2",
    compactUseIcon: true,
    tone: "coral",
    media: {
      cover: "/projects/harita-uygulamasi/1.png",
      gallery: [
        "/projects/harita-uygulamasi/2.png",
        "/projects/harita-uygulamasi/3.png",
        "/projects/harita-uygulamasi/4.png",
        "/projects/harita-uygulamasi/5.png",
      ],
    },
  },
  {
    id: "otonom-arac",
    title: "Otonom Araç",
    category: "Robotik Prototip",
    description:
      "Arduino ile çevresindeki engelleri algılayıp yön değiştiren otonom araç prototipi. Yarışmada 77 takım arasından ikinci oldu.",
    tags: ["Arduino", "Sensörler", "C++", "Prototipleme"],
    icon: "mdi:car-connected",
    compactUseIcon: true,
    tone: "mint",
    media: {
      cover: "/projects/otonom-arac/1.jpeg",
      gallery: [
        "/projects/otonom-arac/2.jpeg",
        "/projects/otonom-arac/3.jpeg",
        "/projects/otonom-arac/4.jpeg",
        "/projects/otonom-arac/v1.mp4",
      ],
    },
  },
  {
    id: "tasarim-calismalari",
    title: "Tasarım Çalışmalarım",
    category: "Görsel Tasarım",
    description:
      "Etkinlik afişleri, özel gün içerikleri, sosyal medya paylaşımları ve ekip materyallerinden oluşan seçili tasarım çalışmaları.",
    tags: ["Tasarım", "İçerik Üretimi", "Sosyal Medya", "Takım Çalışması"],
    icon: "mdi:paint-outline",
    tone: "rose",
    media: {
      cover: "/projects/tasarim-calismalari/1.png",
      gallery: [
        { src: "/projects/tasarim-calismalari/1.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/2.png", shape: "portrait" },
        { src: "/projects/tasarim-calismalari/3.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/4.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/5.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/6.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/7.png", shape: "landscape" },
        { src: "/projects/tasarim-calismalari/8.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/9.png", shape: "portrait" },
        { src: "/projects/tasarim-calismalari/10.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/11.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/12.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/13.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/14.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/15.png", shape: "square" },
        { src: "/projects/tasarim-calismalari/16.png", shape: "square" },
      ],
      variant: "design-orbit",
    },
  },
  {
    id: "veri-kazima",
    title: "Veri Kazıma",
    category: "Data Mining",
    description:
      "25 bin firma bilgisini herhangi bir ücretli araç veya proxy kullanmadan iki haftada otomatik olarak toplayan veri kazıma projesi.",
    tags: ["Python", "Web Scraping", "Automation"],
    icon: "mdi:database-search",
    tone: "blue",
    github: "https://github.com/iarzuakkus",
    media: null,
  },
];
