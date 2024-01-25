import React from 'react';
import AppHeader from './AppHeader';
import HeroSection from './HeroSection';
import Features from './Features';
import Technologies from './Technologies';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTopWizard from './ScrollToTopWizard';

function Landing() {
  return (
    <div>
      <AppHeader />
      <HeroSection />
      <Features />
      <Technologies />
      <Contact />
      <Footer />
      <ScrollToTopWizard />
    </div>
  )
}

export default Landing;