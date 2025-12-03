import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Statik çıktı almak için gerekli */
  output: "export",
  
  /* GitHub Pages'de resimlerin görünmesi için optimizasyonu kapatıyoruz */
  images: {
    unoptimized: true,
  },
  
  reactCompiler: true,
};

export default nextConfig;