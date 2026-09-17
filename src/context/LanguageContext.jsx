import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const getInitialLanguage = () => {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved) return saved;
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
  };

  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage);

  const changeLanguage = useCallback((language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    localStorage.setItem('preferredLanguage', language);
  }, [i18n]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');

    if (savedLanguage && savedLanguage !== currentLanguage) {
      changeLanguage(savedLanguage);
    } else if (!savedLanguage) {
      const browserLanguage = navigator.language || navigator.userLanguage;
      const detectedLanguage = browserLanguage.startsWith('es') ? 'es' : 'en';

      if (detectedLanguage !== currentLanguage) {
        changeLanguage(detectedLanguage);
      }
    }

    const handleLanguageChange = (language) => {
      setCurrentLanguage(language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, currentLanguage, changeLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
