import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useToast } from '../../hooks/useToast';
import { portfolioData } from '../../data/portfolioData';
import LanguageSwitcher from '../ui/LanguageSwitcher';

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
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('hero')} 
          className="text-[var(--text-primary)] font-display font-bold text-[length:var(--font-size-xl)] hover:text-[var(--text-secondary)] transition-colors"
        >
          Joel Carrasco
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="inline-block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors min-w-fit cursor-pointer"
            >
              {link.name}
            </button>
          ))}

          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[var(--text-secondary)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`bg-white md:hidden bg-background fixed left-0 w-full top-0 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        <div className="container mx-auto flex flex-col items-center h-screen px-4 py-6 space-y-0">
          {/* Close button at the top */}
          <div className="w-full flex justify-end mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-2 transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={link.action}
              className={`text-[var(--text-secondary)] hover:text-[var(--text-primary)] w-full text-center py-4 transition-all duration-300 cursor-pointer
                ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }
              `}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMobileMenuOpen
                  ? 'translateY(0)'
                  : 'translateY(-20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {link.name}
            </button>
          ))}

          {/* Mobile Language Switcher */}
          <div
            className={`pt-4 transition-all duration-300
            ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }
          `}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${(navLinks.length + 1) * 50}ms`
                : '0ms',
              transform: isMobileMenuOpen
                ? 'translateY(0)'
                : 'translateY(-20px)',
              opacity: isMobileMenuOpen ? 1 : 0,
            }}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
