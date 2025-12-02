"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageIcon } from "@heroicons/react/24/outline";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navigation = [
        { name: t.header.home, href: "/" },
        { name: t.header.services, href: "/#services" },
        { name: t.header.projects, href: "/#projects" },
        { name: t.header.about, href: "/#about" },
        { name: t.header.contact, href: "/#contact" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                {/* LOGO */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">HM Glass</span>
                        <div className="relative h-16 w-64">
                            <Image
                                src="/hmglass_big_logo.png"
                                alt="HM Glass Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-hm-dark"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-hm-dark hover:text-hm-orange transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* LANGUAGE SWITCHER & CTA BUTTON */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-4">
                    <button
                        onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-hm-dark hover:bg-gray-100 transition-colors"
                    >
                        <LanguageIcon className="w-4 h-4" />
                        <span>{language === "tr" ? "EN" : "TR"}</span>
                    </button>

                    <Link href="/#contact" className="rounded-md bg-hm-dark px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hm-orange transition-colors">
                        {t.contact.ctaButton}
                    </Link>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-hm-dark">HM<span className="text-hm-orange">glass</span></span>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-hm-dark hover:bg-gray-50 hover:text-hm-orange"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6 space-y-2">
                                    <button
                                        onClick={() => {
                                            setLanguage(language === "tr" ? "en" : "tr");
                                            setMobileMenuOpen(false);
                                        }}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-hm-dark hover:bg-gray-100 transition-colors w-full"
                                    >
                                        <LanguageIcon className="w-4 h-4" />
                                        <span>{language === "tr" ? "English" : "Türkçe"}</span>
                                    </button>
                                    <Link
                                        href="/#contact"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-hm-dark hover:bg-hm-orange transition-colors text-center"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {t.contact.ctaButton}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
