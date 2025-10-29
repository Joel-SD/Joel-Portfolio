/**
 * Framer Motion Animation Utilities
 * Standardized animations for consistent behavior across the portfolio
 */

// ====================
// VIEWPORT SETTINGS
// ====================
// Mejores prácticas: usar once: true para mejor performance
export const defaultViewport = {
  once: true, // Anima solo una vez cuando entra en viewport
  amount: 0.2, // Trigger cuando 20% del elemento es visible
  margin: "0px 0px -100px 0px" // Trigger un poco antes de que sea visible
};

// ====================
// TIMING CONSTANTS
// ====================
export const duration = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2
};

export const ease = {
  smooth: [0.6, 0.01, 0.05, 0.95],
  easeOut: [0.17, 0.67, 0.83, 0.67],
  easeInOut: [0.43, 0.13, 0.23, 0.96],
  spring: { type: "spring", stiffness: 100, damping: 15 }
};

// ====================
// FADE ANIMATIONS
// ====================
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.normal,
      ease: ease.easeOut
    }
  }
};

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.smooth
    }
  }
};

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.smooth
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.slow,
      ease: ease.smooth
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.slow,
      ease: ease.smooth
    }
  }
};

// ====================
// SCALE ANIMATIONS
// ====================
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.normal,
      ease: ease.easeOut
    }
  }
};

export const scaleInBounce = {
  hidden: { 
    opacity: 0, 
    scale: 0.3 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: duration.slow
    }
  }
};

// ====================
// STAGGER ANIMATIONS
// ====================
// Para contenedores con múltiples elementos hijos
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: ease.easeOut
    }
  }
};

// ====================
// HOVER EFFECTS
// ====================
// Estándar para todos los botones
export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: duration.fast,
    ease: ease.easeOut
  }
};

export const buttonTap = {
  scale: 0.95
};

// Para botones con iconos
export const iconButtonHover = {
  scale: 1.1,
  rotate: 5,
  transition: {
    duration: duration.fast,
    ease: ease.easeOut
  }
};

export const iconButtonTap = {
  scale: 0.9,
  rotate: -5
};

// Para cards/tarjetas
export const cardHover = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    duration: duration.fast,
    ease: ease.easeOut
  }
};

// ====================
// SLIDE ANIMATIONS
// ====================
export const slideInFromLeft = {
  hidden: { 
    x: -50,
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: duration.slow,
      ease: ease.smooth
    }
  }
};

export const slideInFromRight = {
  hidden: { 
    x: 50,
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: duration.slow,
      ease: ease.smooth
    }
  }
};

// ====================
// PAGE TRANSITIONS
// ====================
export const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.normal,
      ease: ease.easeInOut
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration.fast
    }
  }
};

// ====================
// TITLE/HEADING ANIMATIONS
// ====================
export const titleReveal = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.smooth,
      delay: 0.2
    }
  }
};

// ====================
// CUSTOM COMBINATIONS
// ====================
// Para Hero Section - entrada dramática
export const heroAnimation = {
  hidden: { 
    opacity: 0, 
    scale: 0.98,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.smooth,
      delay: 0.1
    }
  }
};

// Para imágenes con efecto parallax ligero
export const imageReveal = {
  hidden: { 
    opacity: 0, 
    scale: 1.1 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.verySlow,
      ease: ease.smooth
    }
  }
};

// Para formularios
export const formFieldAnimation = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.normal,
      ease: ease.easeOut
    }
  }
};

// ====================
// UTILITY FUNCTIONS
// ====================
/**
 * Genera un delay escalonado para múltiples elementos
 * @param {number} index - Índice del elemento
 * @param {number} baseDelay - Delay base en segundos
 * @returns {number} Delay calculado
 */
export const getStaggerDelay = (index, baseDelay = 0.1) => {
  return index * baseDelay;
};

/**
 * Crea una variante personalizada con fade y dirección
 * @param {string} direction - 'up', 'down', 'left', 'right'
 * @param {number} distance - Distancia de desplazamiento
 * @param {number} customDuration - Duración personalizada
 * @returns {object} Variante de animación
 */
export const createFadeVariant = (direction = 'up', distance = 60, customDuration = duration.slow) => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return {
    hidden: { 
      opacity: 0, 
      ...directionMap[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: customDuration,
        ease: ease.smooth
      }
    }
  };
};
