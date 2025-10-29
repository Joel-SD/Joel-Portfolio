import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolioData';
import BoySVG from '../../ui/icons/BoySVG';
import '../../../index.css';
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
  defaultViewport
} from '../../../utils/animations';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const { personalInfo } = portfolioData;
  const currentLang = i18n.language;
  const breakpoint = useBreakpoint();

  const socialIcons = [
    { id: 1, Icon: SiGithub },
    { id: 2, Icon: SiLinkedin },
  ];

  return (
    <motion.section 
      id="hero" 
      className="p-4  max-w-[var(--max-width-sections)]"
      initial="hidden"
      animate="visible"
      variants={heroAnimation}
    >
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <motion.div 
          className="flex justify-center"
          variants={imageReveal}
          initial="hidden"
          animate="visible"
        >
          <BoySVG
            width={breakpoint === 'sm' ? 470 : null}
            height={breakpoint === 'sm' ? 500 : null}
          />
        </motion.div>
        <motion.div 
          className="flex flex-col gap-4 text-[length:var(--font-size-3xl)] md:text-[length:var(--font-size-5xl)]"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
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
                className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors duration-300"
                variants={staggerItem}
                whileHover={iconButtonHover}
                whileTap={iconButtonTap}
              >
                <Icon size={44} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
