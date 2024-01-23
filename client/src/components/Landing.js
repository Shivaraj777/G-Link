import React from 'react';
import AppHeader from './AppHeader';
import HeroSection from './HeroSection';
import Features from './Features';
import Technologies from './Technologies';
import Contact from './Contact';

function Landing() {
  return (
    <div>
      <AppHeader />
      <HeroSection />
      <Features />
      <Technologies />
      <Contact />
    </div>
  )
}

export default Landing;