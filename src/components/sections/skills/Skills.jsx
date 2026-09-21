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
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiSonarqube,
  SiRedis,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { FaGitAlt, FaJava } from 'react-icons/fa';
import { portfolioData } from '../../../data/portfolioData';
import SectionHeading from '../../common/SectionHeading';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from '../../../utils/animations';

const CATEGORY_ORDER = ['Frontend', 'Backend', 'Database', 'DevOps'];

export default function Skills() {
  const { t } = useTranslation();
  const {
    skills: { technologies },
  } = portfolioData;

  const getIconComponent = (iconName) => {
    const icons = {
      SiReact,
      SiAngular,
      SiNextdotjs,
      SiRedux,
      SiJavascript,
      SiTypescript,
      SiTailwindcss,
      SiSass,
      SiNodedotjs,
      SiCsharp,
      FaJava,
      SiMicrosoftsqlserver,
      FaGitAlt,
      VscAzure,
      SiFigma,
      SiPostman,
      SiTestinglibrary,
      SiGo,
      SiPostgresql,
      SiMongodb,
      SiDocker,
      SiGithubactions,
      SiSonarqube,
      SiRedis,
    };
    return icons[iconName];
  };

  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: technologies.filter((tech) => tech.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="w-full flex flex-col items-center py-20 px-4 bg-[var(--color-background)]">
      <div className="w-full max-w-[var(--max-width-sections)] flex flex-col items-center">
        <SectionHeading title={t('header.skills')} description={t('skills.description')} />

        <div className="w-full flex flex-col gap-10">
          {grouped.map((group) => (
            <motion.div
              key={group.category}
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInUp}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4">
                {t(`skills.categories.${group.category}`)}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
                variants={staggerContainer}
              >
                {group.items.map((tech, index) => {
                  const IconComponent = getIconComponent(tech.icon);
                  return (
                    <motion.div
                      key={`${tech.name}-${index}`}
                      className="bg-white border border-[var(--gray-200)] rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-[var(--color-accent)] transition-colors"
                      variants={staggerItem}
                    >
                      <div className="text-2xl text-[var(--text-secondary)]">
                        {IconComponent ? (
                          <IconComponent />
                        ) : (
                          <span className="text-lg font-bold">{tech.name.charAt(0)}</span>
                        )}
                      </div>
                      <span className="text-sm font-medium text-[var(--text-secondary)] text-center leading-tight">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
