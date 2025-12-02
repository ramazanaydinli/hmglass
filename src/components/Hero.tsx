"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <div className="relative isolate overflow-hidden bg-hm-dark py-24 sm:py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        {t.hero.title} <span className="text-hm-orange">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        {t.hero.description}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link
                            href="/#contact"
                            className="rounded-md bg-hm-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-orange transition-colors"
                        >
                            {t.hero.ctaPrimary}
                        </Link>
                        <Link href="/#services" className="text-sm font-semibold leading-6 text-white hover:text-hm-orange transition-colors">
                            {t.hero.ctaSecondary} <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
