// Navbar.jsx


// HeroSection.jsx

import HeroSection from '@/components/custom/Herosection';
import Navbar from '@/components/custom/Navbar';
import React from 'react';
import About from './About/page';
import Services from './Services/page';
import Tutorial from './Tutorial/page';
import Footer from './Footer/page';
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <Navbar />
        <div className="my-8 mx-6 md:mx-12">
          <HeroSection />
        </div>
      </div>
      <About/>
      <Services/>
      <Tutorial/>
      <Footer/>
    </div>
  );
}


