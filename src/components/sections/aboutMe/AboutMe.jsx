import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolioData';
import BoySVG2 from '../../ui/icons/BoySVG2';
import SectionHeading from '../../common/SectionHeading';
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from '../../../utils/animations';

const StatCard = ({ value, label, currentLang }) => (
  <motion.div
    className="text-center p-4 bg-[var(--gray-50)] rounded-lg border border-[var(--gray-200)]"
    variants={staggerItem}
  >
    <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">{value}</div>
    <div className="text-sm text-[var(--gray-600)]">{label[currentLang]}</div>
  </motion.div>
);

export default function AboutMe() {
  const { t, i18n } = useTranslation();
  const { personalInfo, stats } = portfolioData;
  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';

  return (
    <section id="aboutMe" className="w-full bg-white py-20 px-4">
      <div className="w-full max-w-[var(--max-width-sections)] mx-auto">
        <SectionHeading title={t('about.title')} highlight={t('about.highlight')} />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <motion.div
            className="w-full sm:w-80 lg:w-96 flex justify-center lg:justify-start flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <div className="relative bg-white border border-[var(--gray-200)] rounded-2xl p-6">
              <BoySVG2 />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
              {personalInfo.aboutMe[currentLang]}
            </p>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-4 max-w-md"
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
