import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    localStorage.setItem('preferredLanguage', language);
  };

  useEffect(() => {
    // Verificar si hay un idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    if (savedLanguage && savedLanguage !== currentLanguage) {
      // Si hay un idioma guardado, usarlo
      changeLanguage(savedLanguage);
    } else if (!savedLanguage) {
      // Si no hay idioma guardado, detectar del navegador
      const browserLanguage = navigator.language || navigator.userLanguage;
      const detectedLanguage = browserLanguage.startsWith('es') ? 'es' : 'en';
      
      // Solo cambiar si es diferente al actual
      if (detectedLanguage !== currentLanguage) {
        changeLanguage(detectedLanguage);
      }
    }

    // Escuchar cambios de idioma de i18next
    const handleLanguageChange = (language) => {
      setCurrentLanguage(language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
