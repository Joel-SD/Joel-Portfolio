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

export default function Work() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';
  const { caseStudies } = portfolioData;

  return (
    <section id="work" className="w-full bg-[var(--color-black)] py-20 px-4">
      <div className="w-full max-w-[var(--max-width-sections)] mx-auto">
        <SectionHeading
          title={t('sections.projects')}
          description={t('work.description')}
          light
        />

        <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              className="bg-[var(--gray-800)] border border-[var(--gray-600)] rounded-xl p-6 md:p-8"
              variants={staggerItem}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-bright)] mb-2">
                    {String(index + 1).padStart(2, '0')} · {study.company[currentLang]}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {study.title[currentLang]}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm md:text-base leading-relaxed">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-bright)] mb-2">
                    {t('work.problem')}
                  </p>
                  <p className="text-[var(--text-on-dark)]">{study.problem[currentLang]}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-bright)] mb-2">
                    {t('work.did')}
                  </p>
                  <p className="text-[var(--text-on-dark)]">{study.did[currentLang]}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-bright)] mb-2">
                    {t('work.result')}
                  </p>
                  <p className="text-[var(--text-on-dark)]">{study.result[currentLang]}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[var(--gray-600)]">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--gray-600)] text-[var(--text-on-dark)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
