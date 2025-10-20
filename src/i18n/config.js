import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    detection: {
      // Orden de detección: navegador, localStorage, HTML tag
      order: ['navigator', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      // Guardar la preferencia en localStorage
      caches: ['localStorage'],
      // Solo detectar idiomas soportados
      excludeCacheFor: ['cimode'],
      // Convertir códigos de idioma (ej: es-ES -> es)
      convertDetectedLanguage: (lng) => lng.split('-')[0]
    },
    interpolation: {
      escapeValue: false,
    },
    // Evitar warnings en desarrollo
    debug: process.env.NODE_ENV === 'development',
  });

export default i18n;
