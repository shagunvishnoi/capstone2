import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedMovies from './components/FeaturedMovies';
import Featured2 from './components/Featured2';
import TestimonialAndFooter from './components/TestimonialAndFooter';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedMovies />
      <Featured2 />
      <TestimonialAndFooter />
    </div>
  );
}

export default App;
