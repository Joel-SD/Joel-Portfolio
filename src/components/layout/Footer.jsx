import React from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const { contact, personalInfo } = portfolioData;
  const linkedin = personalInfo.socialLinks.find((link) => link.name === 'linkedin')?.url;

  return (
    <footer className="w-full bg-[var(--color-black)] text-white py-8">
      <div className="w-full max-w-[var(--max-width-sections)] mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo_website.svg"
              alt={t('footer.logoAlt')}
              className="w-9 h-9"
            />
            <p className="text-sm text-gray-300">{t('footer.copyright', { year: currentYear })}</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-300 hover:text-[var(--color-accent-bright)] transition-colors"
            >
              {contact.email}
            </a>
            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--color-accent-bright)] transition-colors"
              >
                LinkedIn
              </a>
            ) : null}
            <span className="text-gray-500">{t('footer.location')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
