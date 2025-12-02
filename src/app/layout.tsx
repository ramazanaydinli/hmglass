import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "HM Glass - Cam Balkon, PVC Doğrama ve Tadilat",
  description: "Antalya'da cam balkon, PVC doğrama, alüminyum sistemleri ve anahtar teslim tadilat hizmetleri.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
