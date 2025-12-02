"use client";

import { useLanguage } from "@/context/LanguageContext";
import { UserGroupIcon, CheckBadgeIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function About() {
    const { t } = useLanguage();

    // Özel Asaydın/Marka Gölgesi
    const customShadowStyle = {
        boxShadow: "0 20px 40px -10px rgba(240, 84, 84, 0.15)"
    };

    return (
        <section className="bg-white py-12 sm:py-20 relative overflow-hidden" id="about">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-hm-orange uppercase mb-4">
                        {t.about.badge}
                    </h2>
                    <p className="text-3xl font-bold tracking-tight text-hm-dark sm:text-5xl">
                        {t.about.title} <span className="text-hm-orange">{t.about.titleHighlight}</span>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 font-light">
                        {t.about.description}
                    </p>
                </div>

                {/* Ana İçerik */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
                    <div>
                        <h3 className="text-4xl font-bold text-hm-dark mb-6 leading-tight">
                            {t.about.aboutTitle}
                        </h3>
                        <div className="mb-6"></div>
                    </div>
                    <div className="space-y-6 text-lg leading-8 text-gray-600 font-light">
                        <p>{t.about.aboutText1}</p>
                        <p>{t.about.aboutText2}</p>
                    </div>
                </div>

                {/* Misyon & Vizyon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {/* Misyon */}
                    <div 
                        className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-100/50 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                        style={customShadowStyle} // ÖZEL GÖLGE EKLENDİ
                    >
                        <h4 className="text-xl font-bold text-hm-dark mb-4 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-hm-orange"></span>
                            {t.about.missionTitle}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            {t.about.missionText}
                        </p>
                    </div>

                    {/* Vizyon */}
                    <div 
                        className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-100/50 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                        style={customShadowStyle} // ÖZEL GÖLGE EKLENDİ
                    >
                        <h4 className="text-xl font-bold text-hm-dark mb-4 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-hm-orange"></span>
                            {t.about.visionTitle}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            {t.about.visionText}
                        </p>
                    </div>
                </div>

                {/* Neden Biz? */}
                <div>
                    <h3 className="text-3xl font-bold text-hm-dark mb-16 text-center">
                        {t.about.whyUsTitle}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {/* 1. Madde */}
                        <div className="flex flex-col items-center group">
                            <div 
                                className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-hm-orange mb-6 group-hover:bg-hm-orange group-hover:text-white transition-all duration-500 border border-gray-100/50"
                                style={customShadowStyle} // İKON KUTUSUNA ÖZEL GÖLGE EKLENDİ
                            >
                                <UserGroupIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-hm-dark mb-3">
                                {t.about.whyUs[0].title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {t.about.whyUs[0].description}
                            </p>
                        </div>

                        {/* 2. Madde */}
                        <div className="flex flex-col items-center group">
                            <div 
                                className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-hm-orange mb-6 group-hover:bg-hm-orange group-hover:text-white transition-all duration-500 border border-gray-100/50"
                                style={customShadowStyle} // İKON KUTUSUNA ÖZEL GÖLGE EKLENDİ
                            >
                                <CheckBadgeIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-hm-dark mb-3">
                                {t.about.whyUs[1].title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {t.about.whyUs[1].description}
                            </p>
                        </div>

                        {/* 3. Madde */}
                        <div className="flex flex-col items-center group">
                            <div 
                                className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-hm-orange mb-6 group-hover:bg-hm-orange group-hover:text-white transition-all duration-500 border border-gray-100/50"
                                style={customShadowStyle} // İKON KUTUSUNA ÖZEL GÖLGE EKLENDİ
                            >
                                <ClockIcon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-hm-dark mb-3">
                                {t.about.whyUs[2].title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {t.about.whyUs[2].description}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}