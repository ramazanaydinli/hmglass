import type { Metadata } from "next";
import Script from "next/script"; // JSON-LD için gerekli
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

// Hizmetler ve Bölgeleri birleştirerek güçlü bir SEO açıklaması oluşturuyoruz
const descriptionText = "Antalya, Kepez, Muratpaşa, Konyaaltı, Lara, Varsak ve Dokuma bölgelerinde Cam Balkon, PVC Doğrama, Panjur, Sineklik, Duşakabin, Çelik Kapı ve Anahtar Teslim Tadilat hizmetleri. Kaliteli işçilik ve profesyonel çözümler.";

export const metadata: Metadata = {
  // Title'ı biraz daha dinamik ve kapsayıcı yapıyoruz
  title: {
    default: "HM Glass | Antalya Cam Balkon, PVC Doğrama & Tadilat",
    template: "%s | HM Glass Antalya",
  },
  description: descriptionText,
  // Google artık meta keywords'e çok bakmasa da diğer motorlar ve yerel dizinler için doldurmak iyidir
  keywords: [
    // Hizmetler
    "Antalya Cam Balkon", "PVC Doğrama", "Alüminyum Doğrama", "Panjur Sistemleri", 
    "Sineklik Modelleri", "Duşakabin", "Çelik Kapı", "Mutfak Dolabı", "Banyo Dolabı", 
    "Anahtar Teslim Tadilat", "Laminant Parke", "Demir Doğrama", "Ayna Dekorasyon",
    // Bölgeler (İlçe + Hizmet kombinasyonları için genel)
    "Antalya", "Kepez", "Muratpaşa", "Konyaaltı", 
    // Mahalleler
    "Lara", "Meltem", "Varsak", "Dokuma", "Ahatlı", "Arapsuyu", 
    "Bahçelievler", "Fener", "Kızıltoprak", "Güzeloluk"
  ],
  authors: [{ name: "HM Glass" }],
  creator: "HM Glass",
  publisher: "HM Glass",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Sosyal Medya Paylaşımları için (WhatsApp, Facebook vb. link atınca çıkan kart)
  openGraph: {
    title: "HM Glass | Antalya Cam Balkon ve Yapı Sistemleri",
    description: descriptionText,
    url: "https://hmglass.com.tr", // Burası domain adresiniz olmalı
    siteName: "HM Glass",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo.png", // Varsa güzel bir kapak fotoğrafı yolu (örn: /hero-bg.jpg) daha iyi olur
        width: 800,
        height: 600,
        alt: "HM Glass Antalya Yapı Sistemleri",
      },
    ],
  },
  // Antalya için Coğrafi Etiketler (Geo Tags)
  other: {
    "geo.region": "TR-07",
    "geo.placename": "Antalya",
    "geo.position": "36.8841;30.7056", // Antalya merkez koordinatları (Yaklaşık)
    "ICBM": "36.8841, 30.7056",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png", // Apple cihazlar için ikon
  },
};

// JSON-LD Yapısal Verisi (Google'ın işletmeyi anlaması için çok önemli)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness", // Veya 'GeneralContractor'
  "name": "HM Glass",
  "image": "https://hmglass.com.tr/logo.png", // Domain başa eklenmeli
  "description": descriptionText,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Antalya",
    "addressRegion": "Antalya",
    "addressCountry": "TR"
  },
  "areaServed": [
    // Hizmet verilen ilçeler ve mahalleler
    { "@type": "Place", "name": "Antalya" },
    { "@type": "Place", "name": "Kepez" },
    { "@type": "Place", "name": "Muratpaşa" },
    { "@type": "Place", "name": "Konyaaltı" },
    { "@type": "Place", "name": "Lara" },
    { "@type": "Place", "name": "Varsak" },
    { "@type": "Place", "name": "Dokuma" },
    { "@type": "Place", "name": "Meltem" },
    { "@type": "Place", "name": "Arapsuyu" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Yapı ve Dekorasyon Hizmetleri",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cam Balkon Sistemleri" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PVC ve Alüminyum Doğrama" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tadilat ve Dekorasyon" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Panjur ve Sineklik" } }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {/* JSON-LD Scriptini ekliyoruz */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <LanguageProvider>
          <Header />
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}