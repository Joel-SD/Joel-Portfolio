import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import Hero from './components/sections/hero/Hero';
import Layout from './components/layout/Layout';
import Skills from './components/sections/skills/Skills';
import MyExperience from './components/sections/myExperience/MyExperience';
import AboutMe from './components/sections/aboutMe/AboutMe';
import ContactMe from './components/sections/ContactMe/ContactMe';

function App() {
  // Asegurar que la página cargue en la parte superior
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <MyExperience />
      <Skills />
      <AboutMe />
      <ContactMe />
    </Layout>
  );
}

export default App;
