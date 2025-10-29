import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolioData';
import BoySVG2 from '../../ui/icons/BoySVG2';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleInBounce,
  staggerContainer,
  staggerItem,
  cardHover,
  defaultViewport
} from '../../../utils/animations';

// Componente para las estadísticas
const StatCard = ({ value, label, currentLang }) => (
  <motion.div 
    className={`
      text-center p-4 bg-[var(--gray-50)] rounded-lg 
      border border-[var(--gray-200)] 
      hover:border-[var(--color-primary)] 
      transition-all duration-300
      transform group
      ${label[currentLang] === (currentLang === 'en' ? 'Coffee Cups' : 'Tazas de Café') ? 'col-span-2 md:col-span-1' : ''}
    `}
    variants={staggerItem}
    whileHover={cardHover}
  >
    <div className="text-2xl font-bold text-[var(--color-primary)] mb-1 group-hover:scale-110 transition-transform duration-300">
      {value}
    </div>
    <div className="text-sm text-[var(--gray-600)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
      {label[currentLang]}
    </div>
  </motion.div>
);

// Componente para el título de la sección
const SectionTitle = ({ currentLang }) => {
  const titles = {
    en: { title: 'About', highlight: 'Me' },
    es: { title: 'Sobre', highlight: 'Mí' }
  };

  return (
    <motion.div 
      className="text-center mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
    >
      <h2 className="text-[length:var(--font-size-4xl)] md:text-[length:var(--font-size-5xl)] font-bold text-[var(--text-primary)] mb-4">
        {titles[currentLang].title}{' '}
        <span className="text-[var(--color-primary)]">
          {titles[currentLang].highlight}
        </span>
      </h2>
      <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
    </motion.div>
  );
};

// Componente principal AboutMe
export default function AboutMe() {
  const { t, i18n } = useTranslation();
  const { personalInfo } = portfolioData;
  const currentLang = i18n.language;
  const bioMessage = personalInfo.aboutMe[currentLang];

  const { stats } = portfolioData;

  return (
    <section id="aboutMe" className="w-full bg-white py-16 px-4">
      <div className="w-full max-w-[var(--max-width-sections)] mx-auto">
        <SectionTitle currentLang={currentLang} />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Imagen del perfil con efectos */}
          <motion.div 
            className="w-full sm:w-80 lg:w-96 flex justify-center lg:justify-start flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <div className="relative group cursor-pointer">
              <div 
                className="
                  absolute inset-0 bg-[var(--color-primary)] opacity-10 
                  rounded-2xl transform rotate-3 
                  group-hover:rotate-6 transition-transform duration-300
                "
              />
              <div 
                className="
                  relative bg-white border-2 border-[var(--gray-200)] 
                  rounded-2xl p-6 shadow-lg 
                  group-hover:shadow-xl group-hover:scale-[1.02]
                  transition-all duration-300
                "
              >
                <BoySVG2 />
              </div>
            </div>
          </motion.div>

          {/* Contenido y estadísticas */}
          <motion.div 
            className="flex-1 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            {/* Título móvil */}
            <div className="block lg:hidden text-center mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-secondary)]">
                {currentLang === 'en' ? 'About ' : 'Sobre '}
                <span className="text-[var(--color-primary)]">
                  {currentLang === 'en' ? 'Me' : 'Mí'}
                </span>
              </h3>
            </div>

            {/* Bio */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <div 
                className="
                  whitespace-pre-line prose prose-lg
                  prose-headings:text-[var(--text-primary)]
                  prose-p:text-[var(--text-muted)]
                  prose-strong:text-[var(--text-secondary)]
                "
              >
                <p className="first-line:font-medium first-line:text-[var(--text-secondary)]">
                  {bioMessage}
                </p>
              </div>
            </div>

            {/* Estadísticas con animación */}
            <motion.div 
              className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {stats.map((stat, index) => (
                <StatCard 
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  currentLang={currentLang}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
