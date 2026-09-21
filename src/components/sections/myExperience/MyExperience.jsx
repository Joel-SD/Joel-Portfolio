import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolioData';
import SectionHeading from '../../common/SectionHeading';
import {
  staggerContainer,
  staggerItem,
  defaultViewport,
} from '../../../utils/animations';

const splitBullets = (text) =>
  text
    .split('\n')
    .map((line) => line.replace(/^•\s*/, '').trim())
    .filter(Boolean);

export default function MyExperience() {
  const { t, i18n } = useTranslation();
  const { experience } = portfolioData;
  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';

  const handleCompanyClick = (website) => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="experience" className="w-full bg-[var(--color-black)] text-white py-20 px-4">
      <div className="w-full max-w-[var(--max-width-sections)] mx-auto">
        <SectionHeading title={t('sections.experience')} light />

        <div className="relative">
          <div className="absolute left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0 top-0 bottom-0 w-0.5 bg-[var(--gray-800)]" />

          <motion.div
            className="space-y-12 md:space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {experience.map((exp, index) => (
              <motion.div key={index} className="relative" variants={staggerItem}>
                <div className="absolute left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-[var(--color-accent-bright)] rounded-full border-4 border-[var(--color-black)] z-10" />

                <div className="ml-8 md:ml-16 mr-4 md:mr-0 bg-[var(--gray-800)] border border-[var(--gray-600)] rounded-xl p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div className="flex items-center">
                      <div className="mr-4">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={exp.company[currentLang]}
                            className="w-12 h-12 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => handleCompanyClick(exp.website)}
                          />
                        ) : (
                          <div className="w-12 h-12 bg-[var(--gray-500)] rounded-full flex items-center justify-center text-white font-bold">
                            {exp.company[currentLang][0]}
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="font-bold text-lg md:text-xl text-white leading-tight">
                          {exp.position[currentLang]}
                        </h3>
                        <p
                          className="text-[var(--gray-300)] text-sm md:text-base font-medium cursor-pointer hover:text-[var(--color-accent-bright)] transition-colors"
                          onClick={() => handleCompanyClick(exp.website)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleCompanyClick(exp.website)}
                        >
                          {exp.company[currentLang]}
                        </p>
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 bg-[var(--gray-600)] text-white text-xs md:text-sm font-medium rounded-full">
                      {exp.period[currentLang]}
                    </span>
                  </div>

                  <ul className="space-y-2 text-[var(--text-on-dark)] text-sm md:text-base leading-relaxed list-disc pl-5">
                    {splitBullets(exp.description[currentLang]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  {exp.technologies ? (
                    <div className="mt-4 pt-4 border-t border-[var(--gray-500)]">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block px-2 py-1 bg-[var(--gray-600)] text-[var(--text-on-dark)] text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
