import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import ProjectSection from './components/Projects';
import AboutSection from './components/About';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ProjectSection />
    <AboutSection />
    <ContactSection />
    <Footer />
    </>
  );
}

export default App;
