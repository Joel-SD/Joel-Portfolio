import React from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../../data/portfolioData';
import BoySVG from '../../ui/icons/BoySVG';
import '../../../index.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const { personalInfo } = portfolioData;
  const currentLang = i18n.language;
  const breakpoint = useBreakpoint();

  const socialIcons = [
    { id: 1, Icon: SiGithub, url: personalInfo.socialLinks.find(link => link.name === 'github')?.url, label: 'GitHub' },
    { id: 2, Icon: SiLinkedin, url: personalInfo.socialLinks.find(link => link.name === 'linkedin')?.url, label: 'LinkedIn' },
  ];

  return (
    <section id="about" className="p-4  max-w-[var(--max-width-sections)]">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="flex justify-center">
          <BoySVG
            width={breakpoint === 'sm' ? 470 : null}
            height={breakpoint === 'sm' ? 500 : null}
          />
        </div>
        <div className="flex flex-col gap-4 text-[length:var(--font-size-3xl)] md:text-[length:var(--font-size-5xl)]">
          <div className="flex flex-col gap-2">
            <p>
              {t('hero.greeting')}{' '}
              <span className=" font-bold">{personalInfo.name}.</span>
            </p>

            <p>{personalInfo.title[currentLang]}</p>

            <p>
              {t('hero.location')} <b>{personalInfo.location[currentLang]}.</b>
            </p>
          </div>

          <p className="text-[var(--text-muted)] text-[length:var(--font-size-lg)] md:text-[length:var(--font-size-xl)]">
            {personalInfo.bio[currentLang]}
          </p>

          <div className="flex gap-4">
            {socialIcons.map(({ id, Icon, url, label }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon size={44} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
