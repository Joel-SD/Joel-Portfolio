import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolioData';
import BoySVG from '../../ui/icons/BoySVG';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import {
  heroAnimation,
  fadeInLeft,
  imageReveal,
  staggerContainer,
  staggerItem,
  iconButtonHover,
  iconButtonTap,
} from '../../../utils/animations';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  window.scrollTo({
    top: element.offsetTop - 96,
    behavior: 'smooth',
  });
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const { personalInfo } = portfolioData;
  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';
  const breakpoint = useBreakpoint();
  const isCompact = breakpoint === 'xs' || breakpoint === 'sm';

  const socialIcons = [
    { id: 1, Icon: SiGithub, url: personalInfo.socialLinks.find((link) => link.name === 'github')?.url, label: 'GitHub' },
    { id: 2, Icon: SiLinkedin, url: personalInfo.socialLinks.find((link) => link.name === 'linkedin')?.url, label: 'LinkedIn' },
  ];

  return (
    <motion.section
      id="hero"
      className="w-full max-w-[var(--max-width-sections)] min-h-[calc(100vh-5rem)] flex items-center px-4 pt-16 pb-20 md:pt-24 md:pb-28"
      initial="hidden"
      animate="visible"
      variants={heroAnimation}
    >
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
        <motion.div
          className="flex justify-center shrink-0"
          variants={imageReveal}
          initial="hidden"
          animate="visible"
        >
          <BoySVG
            width={isCompact ? 280 : 470}
            height={isCompact ? 270 : 455}
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 text-[length:var(--font-size-3xl)] md:text-[length:var(--font-size-5xl)] text-[var(--text-primary)]"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col gap-2 leading-tight">
            <p>
              {t('hero.greeting')}{' '}
              <span className="font-bold">{personalInfo.name}.</span>
            </p>
            <p>{personalInfo.title[currentLang]}</p>
            <p>
              {t('hero.location')} <b>{personalInfo.location[currentLang]}.</b>
            </p>
          </div>

          <p className="text-[var(--text-muted)] text-[length:var(--font-size-lg)] md:text-[length:var(--font-size-xl)] max-w-xl leading-relaxed">
            {personalInfo.bio[currentLang]}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-base">
            <motion.button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="px-5 py-3 rounded-lg bg-[var(--color-black)] text-white font-medium hover:bg-[var(--color-accent)] transition-colors"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.ctaContact')}
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollToSection('experience')}
              className="px-5 py-3 rounded-lg border-2 border-[var(--color-black)] text-[var(--text-primary)] font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.ctaExperience')}
            </motion.button>
          </div>

          <motion.div
            className="flex gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {socialIcons.map(({ id, Icon, url, label }) => (
              <motion.a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                variants={staggerItem}
                whileHover={iconButtonHover}
                whileTap={iconButtonTap}
              >
                <Icon size={36} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
