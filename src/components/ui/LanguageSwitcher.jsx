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

  const targetLanguage = currentLanguage === 'en' ? t('language.spanish') : t('language.english');

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-accent)] transition-colors"
      aria-label={`${t('language.switchTo')} ${targetLanguage}`}
      title={`${t('language.switchTo')} ${targetLanguage}`}
    >
      <span className={currentLanguage === 'en' ? 'text-[var(--color-accent)]' : ''}>EN</span>
      <span className="text-[var(--gray-300)]">/</span>
      <span className={currentLanguage === 'es' ? 'text-[var(--color-accent)]' : ''}>ES</span>
    </button>
  );
};

export default LanguageSwitcher;
