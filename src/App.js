import React from 'react'
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import ProjectSection from './components/Projects'
import AboutSection from './components/About'
import ContactSection from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path="/">
          <header>
            <Navbar />
          </header>
          <main>
            <HeroSection/>
            <ProjectSection/>
            <AboutSection/>
            <ContactSection/>
          </main>
          <footer>
            <Footer />
          </footer>
        </Route>
      </Switch>

      {background && <Route path="/:slug" children={<Modal />} />}
    </>
  );
}

export default App;
