import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgressBar from '../common/ScrollProgressBar';
import { LanguageProvider } from '../../context/LanguageContext';

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="relative w-full">
        <ScrollProgressBar />
        <Header />
        <main className="flex flex-col items-center pt-20 w-full bg-[var(--color-background)]">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
