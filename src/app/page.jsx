'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import Navbar from '@/components/custom/Navbar';
import HeroSection from '@/components/custom/Herosection';
import About from './About/page';
import Services from './Solutions/page';
import Tutorial from './Tutorial/page';
import Footer from './ContactUs/page';

export default function Home() {
  const pathname = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);
  const heroRef = useRef(null);

  const sectionRefs = {
    aboutus: useRef(null),
    services: useRef(null),
    tutorial: useRef(null),
    contactus: useRef(null),
  };

  // Function to handle smooth scrolling with animation
  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId]?.current;
    if (section) {
      setIsScrolling(true);
      
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Reset scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  // Scroll to section when hash changes or on initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && sectionRefs[hash]?.current) {
        scrollToSection(hash);
      }
    };

    // Handle initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pathname]);

  // Auto-update URL when manually scrolling
  useEffect(() => {
    // Only observe scroll if not programmatically scrolling
    if (isScrolling) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update URL while programmatic scrolling is happening
        if (isScrolling) return;
        
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const sectionId = visibleEntries[0].target.id;
          
          // If we're at the hero section, set URL to root
          if (sectionId === 'hero') {
            if (window.location.pathname !== '/' || window.location.hash !== '') {
              window.history.replaceState(null, '', '/');
            }
          } else {
            // For other sections, use hash
            if (window.location.hash !== `#${sectionId}`) {
              window.history.replaceState(null, '', `/#${sectionId}`);
            }
          }
        }
      },
      { threshold: 0.3, rootMargin: '-5% 0px -5% 0px' }
    );

    // Observe hero section
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Observe all other sections
    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar sectionRefs={sectionRefs} />
      
      <section id="hero" ref={heroRef} className="min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          <div className="my-8 mx-6 md:mx-12">
            <HeroSection />
          </div>
        </div>
      </section>

      <section id="aboutus" ref={sectionRefs.aboutus} className="min-h-screen py-16">
        <About />
      </section>

      <section id="services" ref={sectionRefs.services} className="min-h-screen py-16">
        <Services />
      </section>

      <section id="tutorial" ref={sectionRefs.tutorial} className="min-h-screen py-16">
        <Tutorial />
      </section>

      <section id="contactus" ref={sectionRefs.contactus} className="">
        <Footer />
      </section>
    </div>
  );
}