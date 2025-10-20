import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);
  };

  const getTooltipText = () => {
    const targetLanguage = currentLanguage === 'en' ? t('language.spanish') : t('language.english');
    return `${t('language.switchTo')} ${targetLanguage}`;
  };

  const USFlag = () => {
    return (
      <svg width="24" height="16" viewBox="0 0 24 16" className="rounded-sm" aria-label="United States Flag">
        <rect width="24" height="16" fill="#B22234"/>
        <rect width="24" height="1.23" y="1.23" fill="#FFFFFF"/>
        <rect width="24" height="1.23" y="3.69" fill="#FFFFFF"/>
        <rect width="24" height="1.23" y="6.15" fill="#FFFFFF"/>
        <rect width="24" height="1.23" y="8.62" fill="#FFFFFF"/>
        <rect width="24" height="1.23" y="11.08" fill="#FFFFFF"/>
        <rect width="24" height="1.23" y="13.54" fill="#FFFFFF"/>
        <rect width="9.6" height="8.62" fill="#3C3B6E"/>
      </svg>
    );
  };

  const SpainFlag = () => {
    return (
      <svg width="24" height="16" viewBox="0 0 24 16" className="rounded-sm" aria-label="Spanish Flag">
        <rect width="24" height="4" fill="#AA151B"/>
        <rect width="24" height="8" y="4" fill="#F1BF00"/>
        <rect width="24" height="4" y="12" fill="#AA151B"/>
        <rect x="6" y="6" width="4" height="4" fill="#AA151B" rx="0.5"/>
      </svg>
    );
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-[var(--gray-300)] bg-white hover:bg-[var(--gray-100)] transition-all duration-[var(--transition-normal)] cursor-pointer shadow-sm hover:shadow-md group"
      aria-label={getTooltipText()}
      title={getTooltipText()}
    >
      {/* Bandera actual */}
      <div className="flex-shrink-0">
        {currentLanguage === 'en' ? <USFlag /> : <SpainFlag />}
      </div>
      
      {/* Código del idioma */}
      <span className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
        {currentLanguage}
      </span>

      {/* Flecha indicativa */}
      <svg 
        className="w-3 h-3 text-[var(--text-secondary)] transition-transform duration-[var(--transition-fast)] group-hover:scale-110"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    </button>
  );
};

export default LanguageSwitcher;
