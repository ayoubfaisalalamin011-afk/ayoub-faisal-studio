import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Language = 'en' | 'ar';
const LocaleContext = createContext<{ language: Language; toggleLanguage: () => void; t: (en: string, ar: string) => string }>({ language: 'ar', toggleLanguage: () => {}, t: (_en, ar) => ar });
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');
  useEffect(() => {
    const saved = sessionStorage.getItem('portfolio-language');
    if (saved === 'en') setLanguage('en');
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);
  const toggleLanguage = () => setLanguage(current => {
    const next = current === 'en' ? 'ar' : 'en';
    sessionStorage.setItem('portfolio-language', next);
    return next;
  });
  return <LocaleContext.Provider value={{ language, toggleLanguage, t: (en, ar) => language === 'en' ? en : ar }}>{children}</LocaleContext.Provider>;
}
export const useLocale = () => useContext(LocaleContext);
