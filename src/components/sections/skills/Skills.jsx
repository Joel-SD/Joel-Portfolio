import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiTestinglibrary,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiRedux,
  SiNextdotjs,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiPostman,
  SiFigma,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { FaGitAlt, FaJava } from 'react-icons/fa';
import { portfolioData } from '../../../data/portfolioData';
import {
  fadeInUp,
  scaleInBounce,
  staggerContainer,
  staggerItem,
  defaultViewport
} from '../../../utils/animations';

export default function Skills() {
  const { t } = useTranslation();
  const { skills: { technologies } } = portfolioData;

  const getIconComponent = (iconName) => {
    const icons = {
      SiReact, SiAngular, SiNextdotjs, SiRedux, SiJavascript,
      SiTypescript, SiTailwindcss, SiSass, SiNodedotjs,
      SiCsharp, FaJava, SiMicrosoftsqlserver, FaGitAlt,
      VscAzure, SiFigma, SiPostman, SiTestinglibrary
    };
    return icons[iconName];
  };

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center py-16 px-4"
    >
      <div className="w-full max-w-[var(--max-width-sections)] flex flex-col items-center">
        {/* Título */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <h2 className="text-[length:var(--font-size-4xl)] md:text-[length:var(--font-size-5xl)] font-bold text-[var(--text-primary)] mb-4">
            {t('sections.skills')} <span className="text-[var(--color-neutral)]">Skills</span>
          </h2>
          <p className="text-[length:var(--font-size-p2)] text-[var(--color-neutral)] max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Grid de Skills con diseño moderno */}
        <div className="w-full max-w-6xl">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {technologies.map((tech, index) => {
              const IconComponent = getIconComponent(tech.icon);
              return (
                <motion.div
                  key={`${tech.label}-${index}`}
                  className="group relative bg-white border-2 border-[var(--gray-100)] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center transition-all duration-500 ease-out hover:border-[var(--color-black)] hover:shadow-2xl hover:shadow-black/10 cursor-pointer overflow-hidden"
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background gradient hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gray-50)] via-white to-[var(--gray-50)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                  
                  {/* Animated background circle */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="w-0 h-0 bg-[var(--color-black)] rounded-full group-hover:w-20 group-hover:h-20 transition-all duration-500 ease-out opacity-5"></div>
                  </div>

                  {/* Icono */}
                  <div className="relative z-10 text-3xl md:text-4xl mb-3 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    <IconComponent />
                  </div>
                  
                  {/* Label */}
                  <span className="relative z-10 text-xs md:text-sm font-semibold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] text-center leading-tight transition-all duration-500 ease-out group-hover:scale-105">
                    {tech.name}
                  </span>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
                </motion.div>
              )})}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
