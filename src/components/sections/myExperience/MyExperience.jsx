import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolioData';
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  staggerItem,
  scaleIn,
  buttonHover,
  cardHover,
  defaultViewport
} from '../../../utils/animations';

export default function MyExperience() {
  const { t, i18n } = useTranslation();
  const { experience } = portfolioData;
  const currentLang = i18n.language;

  // Handle company logo click
  const handleCompanyClick = (website) => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id='experience' className="w-full bg-[var(--color-black)] text-white py-16 px-4">
      <div className="w-full max-w-[var(--max-width-sections)] mx-auto">
        {/* Título */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <h2 className="text-[length:var(--font-size-h2)] md:text-[length:var(--font-size-h1)] font-bold text-white mb-4">
            {t('sections.experience')}
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line - Vertical line connecting all experiences */}
          <div className="absolute left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500"></div>

          {/* Experience Items */}
          <motion.div 
            className="space-y-12 md:space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={staggerItem}
              >
                {/* Timeline Dot - Visible on all screen sizes */}
                <div className="absolute left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-white rounded-full border-4 border-[var(--color-black)] z-10 group-hover:bg-gray-200 transition-all duration-300"></div>

                {/* Experience Card */}
                <div className="ml-8 md:ml-16 mr-4 md:mr-0 bg-[var(--gray-800)] border border-[var(--gray-500)] rounded-xl p-6 md:p-8 hover:border-gray-400 transition-all duration-300">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div className="flex items-center">
                      {/* Company Logo */}
                      <div className="mr-4">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={exp.company[currentLang]}
                            className="w-12 h-12 rounded-full object-cover cursor-pointer transition-all duration-300 hover:opacity-80"
                            onClick={() => handleCompanyClick(exp.website)}
                          />
                        ) : (
                          <div className="w-12 h-12 bg-[var(--gray-500)] rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:bg-gray-600">
                            {exp.company[currentLang][0]}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg md:text-xl text-white leading-tight">
                          {exp.position[currentLang]}
                        </h3>
                        <p 
                          className="text-[var(--gray-300)] text-sm md:text-base font-medium cursor-pointer hover:text-white transition-colors duration-300"
                          onClick={() => handleCompanyClick(exp.website)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleCompanyClick(exp.website)}
                        >
                          {exp.company[currentLang]}
                        </p>
                      </div>
                    </div>
                    
                    {/* Period */}
                    <div className="flex items-center">
                      <span className="inline-block px-3 py-1 bg-[var(--gray-500)] text-white text-xs md:text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-400">
                        {exp.period[currentLang]}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {exp.description[currentLang]}
                  </div>

                  {/* Optional: Skills/Technologies */}
                  {exp.technologies && (
                    <div className="mt-4 pt-4 border-t border-[var(--gray-500)]">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="inline-block px-2 py-1 bg-[var(--text-secondary)] text-[var(--text-muted)] text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
