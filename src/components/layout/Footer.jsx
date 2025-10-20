import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="w-full bg-[var(--color-black)] text-white py-4">
      <div className="w-full max-w-[var(--max-width-sections)] mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center mb-2 sm:mb-0">
            <img 
              src="/Joel-Portfolio/logo_website.svg" 
              alt={t('footer.logoAlt')}
              className="w-9 h-9"
            />
          </div>
          {/* Copyright and Tech Info */}
          <div className="text-sm text-center sm:text-right text-gray-300">
            <p>{t('footer.copyright', { year: currentYear })} {t('footer.madeWith')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
