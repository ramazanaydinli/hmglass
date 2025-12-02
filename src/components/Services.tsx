"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Services() {
    const { t } = useLanguage();

    return (
        <section className="bg-transparent py-12 sm:py-20 relative overflow-hidden" id="services">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                
                {/* Başlık Bölümü */}
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-hm-orange uppercase mb-4">
                        {t.services.badge}
                    </h2>
                    <p className="text-3xl font-bold tracking-tight text-hm-dark sm:text-5xl">
                        {t.services.title} <span className="text-hm-orange">{t.services.titleHighlight}</span>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 font-light">
                        {t.services.description}
                    </p>
                </div>

                {/* Grid - Kartlar */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.services.items.map((service, index) => (
                        <div 
                            key={index} 
                            // Kart yapısı:
                            // 1. Standart Tailwind shadow yerine özel stil kullanıldı.
                            // 2. Hover durumunda arka plan siyaha, yazı beyaza dönüyor.
                            className="group relative flex flex-col justify-between h-full rounded-3xl bg-white p-10 transition-all duration-500 hover:bg-hm-dark hover:-translate-y-2 border border-gray-100"
                            style={{
                                // ASAYDIN TARZI GÖLGE:
                                // Hafif turuncu/kırmızımsı yumuşak bir parlama
                                boxShadow: "0 20px 40px -10px rgba(240, 84, 84, 0.15)"
                            }}
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-hm-dark transition-colors duration-500 group-hover:text-white">
                                    {service.title}
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-gray-500 transition-colors duration-500 group-hover:text-gray-300">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-8 flex items-center pt-8 border-t border-gray-100 group-hover:border-gray-700 transition-colors duration-500">
                                <Link href="/#contact" className="text-sm font-bold text-hm-dark transition-colors duration-500 group-hover:text-hm-orange">
                                    İletişime Geç
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}