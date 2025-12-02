"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import tr from "@/locales/tr.json";
import en from "@/locales/en.json";

type Language = "tr" | "en";
type Translations = typeof tr;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("tr");
    const [translations, setTranslations] = useState<Translations>(tr);

    useEffect(() => {
        // Load language from localStorage
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage && (savedLanguage === "tr" || savedLanguage === "en")) {
            setLanguageState(savedLanguage);
            setTranslations(savedLanguage === "tr" ? tr : en);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        setTranslations(lang === "tr" ? tr : en);
        localStorage.setItem("language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
