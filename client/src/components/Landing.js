import React from 'react';
import AppHeader from './AppHeader';
import HeroSection from './HeroSection';
import Features from './Features';
import Technologies from './Technologies';

function Landing() {
  return (
    <div>
      <AppHeader />
      <HeroSection />
      <Features />
      <Technologies />
    </div>
  )
}

export default Landing;