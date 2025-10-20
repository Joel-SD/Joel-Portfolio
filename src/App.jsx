import React from 'react';
import './App.css';
import './index.css';
import Hero from './components/sections/hero/Hero';
import Layout from './components/layout/Layout';
import Skills from './components/sections/skills/Skills';
import MyExperience from './components/sections/myExperience/MyExperience';
import AboutMe from './components/sections/aboutMe/AboutMe';
import ContactMe from './components/sections/ContactMe/ContactMe';

function App() {
  return (
    <Layout>
      <Hero></Hero>
      <Skills></Skills>
      <MyExperience></MyExperience>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </Layout>
  );
}

export default App;
