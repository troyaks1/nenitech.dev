import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { en, type Translations } from './en';
import { pt } from './pt';

type Lang = 'en' | 'pt';

interface I18nContextType {
  t: Translations;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextType>({
  t: en,
  lang: 'en',
  setLang: () => {},
});

const translations: Record<Lang, Translations> = { en, pt };

function detectLanguage(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'pt') return stored;

  const browserLang = navigator.language || '';
  if (browserLang.startsWith('pt')) return 'pt';
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLanguage);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ t: translations[lang], lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
