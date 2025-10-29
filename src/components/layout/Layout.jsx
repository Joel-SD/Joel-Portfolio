import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { LanguageProvider } from '../../context/LanguageContext';

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="relative w-full">
        <Header />
        <main className="flex flex-col items-center gap-14 pt-20 pb-12 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
