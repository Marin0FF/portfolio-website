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
    <header>
      <Navbar />
    </header>
    <main>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default App;
