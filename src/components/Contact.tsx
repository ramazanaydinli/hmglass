"use client";

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    // Asaydın Yapı benzeri turuncu gölge efekti
    const glowShadow = {
        boxShadow: "0 0 60px -15px rgba(240, 84, 84, 0.3)"
    };

    return (
        // DÜZELTME: Arka planı tamamen KOYU (hm-dark) yaptık.
        // Yazılar beyaz olacak.
        <section className="bg-hm-dark py-16 sm:py-24 relative overflow-hidden" id="contact">

            {/* Arka Planda Dekoratif Işıklar (Turuncu Glow) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-hm-orange/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-hm-orange/5 rounded-full blur-[80px]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

                {/* Header - Koyu Zemin İçin Beyaz Metinler */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-hm-orange uppercase mb-4">
                        {t.contact.badge}
                    </h2>
                    <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        {t.contact.title} <span className="text-hm-orange">{t.contact.titleHighlight}</span>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400 font-light">
                        {t.contact.description}
                    </p>
                </div>

                {/* Ana Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Sol Taraf: İletişim Bilgileri (Koyu Temaya Uygun) */}
                    <div className="flex flex-col space-y-10">

                        {/* Adres Kutusu */}
                        <div className="flex items-start gap-6 group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-hm-orange flex items-center justify-center text-white shrink-0 shadow-lg shadow-hm-orange/20">
                                <MapPinIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {t.contact.addressTitle}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light whitespace-pre-line">
                                    {t.contact.addressText}
                                </p>
                            </div>
                        </div>

                        {/* Telefon Kutusu (Mobil) - DÜZELTİLDİ */}
                        <div className="flex items-start gap-6 group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-hm-orange flex items-center justify-center text-white shrink-0 shadow-lg shadow-hm-orange/20">
                                <PhoneIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {t.contact.phoneTitle}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light mb-1">
                                    {t.contact.mobileDescription} {/* YENİ ANAHTAR */}
                                </p>
                                <a href="tel:+905421901757" className="text-2xl font-bold text-white hover:text-hm-orange transition-colors">
                                    +90 542 190 17 57
                                </a>
                            </div>
                        </div>

                        {/* Sabit Telefon Kutusu - DÜZELTİLDİ */}
                        <div className="flex items-start gap-6 group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-hm-orange flex items-center justify-center text-white shrink-0 shadow-lg shadow-hm-orange/20">
                                <PhoneIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {t.contact.landlineTitle}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light mb-1">
                                    {t.contact.landlineDescription} {/* YENİ ANAHTAR */}
                                </p>
                                <a href="tel:+902422272802" className="text-2xl font-bold text-white hover:text-hm-orange transition-colors">
                                    +90 242 227 28 02
                                </a>
                            </div>
                        </div>

                        {/* CTA Butonu (Acil Servis Çağır) */}
                        <div
                            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-hm-orange to-red-600 p-8 text-center shadow-2xl transition-transform hover:-translate-y-1"
                            style={glowShadow}
                        >
                            <h4 className="text-2xl font-bold text-white mb-2 relative z-10">
                                {t.contact.ctaTitle}
                            </h4>
                            <p className="text-white/90 mb-6 relative z-10">
                                {t.contact.ctaDescription}
                            </p>
                            <a
                                href="tel:+905421901757"
                                className="inline-flex items-center justify-center gap-2 bg-white text-hm-orange px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors relative z-10"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                <span>{t.contact.ctaButton}</span>
                            </a>
                        </div>

                    </div>

                    {/* Sağ Taraf: Harita */}
                    <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
                        {/* Haritayı hafif koyu modda göstermek için invert filtresi kullanıyoruz */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.963476839352!2d30.65586607656209!3d36.91508207221376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391d4e0d9b0b3%3A0x6a0a0a0a0a0a0a0a!2sAntalya!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Harita Üzerine Marka Logosu veya Bilgi Kutusu (Opsiyonel) */}
                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                            <p className="text-sm font-bold text-hm-dark">HM Glass Merkez</p>
                            <p className="text-xs text-gray-500">Antalya / Kepez</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}