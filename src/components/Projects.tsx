"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        src: "/hm1.jpg",
        alt: "HM Glass Dükkan Cephesi",
        title: "Mağaza Cephesi",
        description: "Modern ve davetkar mağaza girişimiz.",
    },
    {
        id: 2,
        src: "/hm2.jpg",
        alt: "HM Glass Bina Görünümü",
        title: "Genel Görünüm",
        description: "Geniş hizmet kapasitemizle hizmetinizdeyiz.",
    },
    {
        id: 3,
        src: "/hm3.jpg",
        alt: "Duşakabin Uygulaması",
        title: "Duşakabin Sistemleri",
        description: "Şık ve kullanışlı özel tasarım duşakabinler.",
    },
    {
        id: 4,
        src: "/hm4.jpg",
        alt: "PVC Pencere",
        title: "PVC Pencere Sistemleri",
        description: "Yüksek yalıtımlı ve estetik PVC doğrama çözümleri.",
    },
    {
        id: 5,
        src: "/hm5.jpg",
        alt: "Korkuluk",
        title: "Korkuluk Sistemleri",
        description: "Güvenli ve şık alüminyum korkuluk uygulamaları.",
    },
    {
        id: 6,
        src: "/hm6.jpg",
        alt: "Pimapen Çift Kapı",
        title: "Pimapen Kapı",
        description: "Dayanıklı ve fonksiyonel çift kanat kapı sistemleri.",
    },
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Otomatik geçiş için efekt
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // 5 saniyede bir değişir

        return () => clearInterval(timer);
    }, [currentIndex]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === projects.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="bg-white py-24 sm:py-32" id="projects">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-hm-orange">Projelerimiz</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-hm-dark sm:text-4xl">
                        Son Çalışmalarımızdan Kareler
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Kalite ve estetiği buluşturduğumuz örnek uygulamalarımız.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto group">
                    {/* Ana Resim ve Kontroller */}
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                        <Image
                            src={projects[currentIndex].src}
                            alt={projects[currentIndex].alt}
                            fill
                            className="object-contain duration-500 ease-in-out"
                            priority
                        />

                        {/* Sol Ok */}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 z-10">
                            <button
                                onClick={prevSlide}
                                aria-label="Önceki"
                                className="bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                        </div>

                        {/* Sağ Ok */}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 z-10">
                            <button
                                onClick={nextSlide}
                                aria-label="Sonraki"
                                className="bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Açıklama (Resmin Altında) */}
                    <div className="mt-6 text-center px-4">
                        <h3 className="text-xl font-bold text-hm-dark">{projects[currentIndex].title}</h3>
                        <p className="mt-2 text-base text-gray-600">{projects[currentIndex].description}</p>
                    </div>

                    {/* Alt Noktalar (Dots) */}
                    <div className="flex justify-center py-2 mt-2 gap-2">
                        {projects.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className={`text-2xl cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? "text-hm-orange scale-125" : "text-gray-300 hover:text-gray-400"
                                    }`}
                            >
                                •
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
