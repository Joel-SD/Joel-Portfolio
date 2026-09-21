import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, defaultViewport } from '../../utils/animations';

const SectionHeading = ({ title, highlight, description, light = false, align = 'center' }) => {
  const isLeft = align === 'left';

  return (
    <motion.div
      className={`mb-10 md:mb-12 ${isLeft ? 'text-left' : 'text-center'}`}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
    >
      <h2
        className={`text-[length:var(--font-size-4xl)] md:text-[length:var(--font-size-5xl)] font-bold mb-4 ${
          light ? 'text-white' : 'text-[var(--text-primary)]'
        }`}
      >
        {title}
        {highlight ? (
          <>
            {' '}
            <span className="text-[var(--color-accent)]">{highlight}</span>
          </>
        ) : null}
      </h2>
      <div
        className={`h-0.5 w-16 bg-[var(--color-accent)] rounded-full ${isLeft ? '' : 'mx-auto'}`}
      />
      {description ? (
        <p
          className={`mt-4 text-[length:var(--font-size-lg)] max-w-2xl ${
            light ? 'text-[var(--gray-300)]' : 'text-[var(--text-muted)]'
          } ${isLeft ? '' : 'mx-auto'}`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
