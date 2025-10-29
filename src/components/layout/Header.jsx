import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../hooks/useToast';
import { portfolioData } from '../../data/portfolioData';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import {
  fadeInDown,
  staggerContainer,
  staggerItem,
  buttonHover,
  buttonTap
} from '../../utils/animations';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLang = i18n.language;
  const toast = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Handle resume download with toast notifications
  const handleResumeDownload = async () => {
    const { resume } = portfolioData;
    const fileName = resume.fileName[currentLang];
    
    try {
      // Show loading toast
      const loadingToastId = toast.showLoading(t('resume.downloading'));

      const link = document.createElement('a');
      link.href = `/assets/documents/${fileName}`;
      link.download = fileName;
      
      // Add event listeners to track download
      return new Promise((resolve, reject) => {
        link.addEventListener('load', () => {
          toast.updateToast(loadingToastId, toast.messages.cvDownloadSuccess(fileName));
          resolve();
        });
        
        link.addEventListener('error', () => {
          toast.updateToast(loadingToastId, toast.messages.cvDownloadError(), 'error');
          reject();
        });

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Simulate success after a brief delay (since we can't reliably detect file download completion)
        setTimeout(() => {
          toast.updateToast(loadingToastId, toast.messages.cvDownloadSuccess(fileName));
          resolve();
        }, 1000);
      });
      
    } catch (error) {
      console.error('Download error:', error);
      toast.messages.cvDownloadError();
    } finally {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t('header.about'), action: () => scrollToSection('about') },
    { name: t('header.skills'), action: () => scrollToSection('skills') },
    { name: t('header.experience'), action: () => scrollToSection('experience') },
    { name: t('header.aboutMe'), action: () => scrollToSection('aboutMe') },
    { name: t('header.contact'), action: () => scrollToSection('contact') },
    { name: t('header.resume'), action: handleResumeDownload },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.button 
          onClick={() => scrollToSection('hero')} 
          className="text-[var(--text-primary)] font-display font-bold text-[length:var(--font-size-xl)] hover:text-[var(--text-secondary)] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Joel Carrasco
        </motion.button>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={link.action}
              className="inline-block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors min-w-fit cursor-pointer"
              variants={staggerItem}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              {link.name}
            </motion.button>
          ))}

          <LanguageSwitcher />
        </motion.nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-[var(--text-secondary)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="bg-white md:hidden bg-background fixed left-0 w-full top-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >            <div className="container mx-auto flex flex-col items-center h-screen px-4 py-6 space-y-0 justify-between">
              {/* Contenido del menú */}
              <div className="flex-1 flex flex-col items-center  w-full space-y-0">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={link.action}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] w-full text-center py-4 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    {link.name}
                  </motion.button>
                ))}

                {/* Mobile Language Switcher */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <LanguageSwitcher />
                </motion.div>
              </div>

              {/* Close button at the bottom */}
              <div className="w-full flex justify-center pb-8">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-8 py-3 transition-colors bg-[var(--gray-100)] rounded-full font-medium text-base"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 }}
                >
                  {currentLang === 'en' ? 'Close' : 'Cerrar'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
