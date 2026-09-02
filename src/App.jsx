import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSymbols from './components/FloatingSymbols';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isScanning, setIsScanning] = React.useState(false);
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash]);

  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 800);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="app-container">
        <Navbar onNavClick={triggerScan} />
      <FloatingSymbols />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />

      {/* Modern Transition Overlay */}
      <div className={`scanline-transition ${isScanning ? 'active' : ''}`}>
        <div className="scanline-overlay"></div>
        <div className="scanline-bar"></div>
      </div>
    </div>
    </>
  );
}

export default App;
