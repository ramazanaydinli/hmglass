"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const projectImages = [
    "/hm1.jpg",
    "/hm2.jpg",
    "/hm3.jpg",
    "/hm4.jpg",
    "/hm5.jpg",
    "/hm6.jpg",
];

export default function Projects() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Slide Geçiş Fonksiyonları
    const prevSlide = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? t.projects.items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, t.projects.items.length]);

    const nextSlide = useCallback(() => {
        const isLastSlide = currentIndex === t.projects.items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, t.projects.items.length]);

    // HATA VEREN KISIM BURASIYDI: slideIndex: number olarak düzelttik
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    // Klavye Kontrolleri
    useEffect(() => {
        // Burada da e (event) için KeyboardEvent türünü belirttik
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isModalOpen) return;
            if (e.key === "Escape") setIsModalOpen(false);
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === "ArrowRight") nextSlide();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isModalOpen, prevSlide, nextSlide]);

    // Otomatik Kaydırma
    useEffect(() => {
        if (isModalOpen) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, isModalOpen, nextSlide]);

    return (
        <>
            <section className="bg-white py-12 sm:py-20 relative" id="projects">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    
                    {/* Başlık Bölümü */}
                    <div className="mx-auto max-w-2xl text-center mb-20">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-hm-orange uppercase mb-4">
                            {t.projects.badge}
                        </h2>
                        <p className="text-3xl font-bold tracking-tight text-hm-dark sm:text-5xl">
                            {t.projects.title} <span className="text-hm-orange">{t.projects.titleHighlight}</span>
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600 font-light">
                            {t.projects.description}
                        </p>
                    </div>

                    {/* Slider Alanı */}
                    <div className="relative max-w-5xl mx-auto group">
                        
                        {/* Resim Container */}
                        <div 
                            className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-3xl shadow-sm border border-gray-100/50 bg-gray-50 cursor-zoom-in"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Image
                                src={projectImages[currentIndex]}
                                alt={t.projects.items[currentIndex].title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                            />
                            
                            {/* Resim Üzerindeki Karartma */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                            {/* Büyüteç İkonu */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30 text-white">
                                    <MagnifyingGlassPlusIcon className="w-8 h-8" />
                                </div>
                            </div>

                            {/* Metin Alanı */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white pointer-events-none">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider uppercase border border-white/30 rounded-full backdrop-blur-sm">
                                    {t.projects.items[currentIndex].category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                                    {t.projects.items[currentIndex].title}
                                </h3>
                                <p className="text-gray-300 max-w-2xl text-sm md:text-base font-light">
                                    {t.projects.items[currentIndex].description}
                                </p>
                            </div>
                        </div>

                        {/* Navigasyon Okları */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-hm-dark transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-hm-dark transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>

                        {/* Nokta Navigasyon */}
                        <div className="flex justify-center gap-3 mt-8">
                            {t.projects.items.map((_, slideIndex) => (
                                <button
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${
                                        currentIndex === slideIndex 
                                        ? "w-8 bg-hm-orange" 
                                        : "w-2 bg-gray-200 hover:bg-gray-300"
                                    }`}
                                    aria-label={`Go to slide ${slideIndex + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* LIGHTBOX / MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
                    
                    {/* Kapat Butonu */}
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        <XMarkIcon className="w-10 h-10" />
                    </button>

                    {/* Modal Sol Ok */}
                    <button 
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        <ChevronLeftIcon className="w-10 h-10" />
                    </button>

                    {/* Modal Resim */}
                    <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
                        <Image
                            src={projectImages[currentIndex]}
                            alt="Full Screen Project"
                            fill
                            className="object-contain"
                            priority
                        />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-white/90">
                            <h3 className="text-xl font-bold">{t.projects.items[currentIndex].title}</h3>
                            <p className="text-sm text-white/60 mt-1">{currentIndex + 1} / {t.projects.items.length}</p>
                        </div>
                    </div>

                    {/* Modal Sağ Ok */}
                    <button 
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        <ChevronRightIcon className="w-10 h-10" />
                    </button>
                </div>
            )}
        </>
    );
}