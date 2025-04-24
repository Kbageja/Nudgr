"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    { id: 1, title: "Small Businesses", description: "Task management solutions for growing teams" },
    { id: 2, title: "Startups", description: "Agile workflow tools for innovative companies" },
    { id: 3, title: "Enterprises", description: "Comprehensive performance tracking for large organizations" },
    { id: 4, title: "Remote Teams", description: "Collaboration tools for distributed workforces" },
    { id: 5, title: "Agencies", description: "Client and project management solutions" },
  ];
  
  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [services.length]);

  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5
      }
    })
  };

  const getVisibleServices = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return [services[activeIndex]];
    }
    
    // For desktop: return 3 items (previous, current, next)
    const result = [];
    const prevIndex = (activeIndex - 1 + services.length) % services.length;
    const nextIndex = (activeIndex + 1) % services.length;
    
    result.push(services[prevIndex]);
    result.push(services[activeIndex]);
    result.push(services[nextIndex]);
    
    return result;
  };
  
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mx-auto my-10 py-6 px-4 text-black"
    >
      {/* Header with line */}
      <motion.div 
        className="relative w-full flex items-center justify-center mb-8"
        variants={itemVariants}
      >
        <div className="absolute w-full border-t border-gray-300"></div>
        <motion.div 
          className="relative bg-white rounded-2xl px-4 text-center shadow-sm shadow-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gray-800 font-medium text-sm">Solutions</span>
        </motion.div>
      </motion.div>
      
      {/* Solution title */}
      <motion.h2 
        className="text-4xl text-center mb-12 mt-24"
        variants={itemVariants}
      >
        Solutions Offered
      </motion.h2>
      
      {/* Carousel container */}
      <div className="relative overflow-hidden my-16 md:mx-24 min-h-[300px]">
        <AnimatePresence custom={direction} initial={false}>
          <div className="flex justify-center">
            {getVisibleServices().map((service, index) => (
              <motion.div
                key={service.id}
                className="md:w-1/3 w-full p-6"
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                whileHover={{ scale: index === 1 ? 1.05 : 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`rounded-[46px] px-2 flex items-center justify-center shadow-md h-[234px] mx-auto ${
                    index === 1 ? 'bg-[#E9EBFD]' : 'bg-gray-100'
                  }`}
                  style={{
                    width: '100%',
                    maxWidth: '390px'
                  }}
                >
                  <div className="text-center p-4">
                    <h3 className="font-medium text-lg">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
      
      {/* Navigation dots */}
      <motion.div 
        className="flex justify-center mt-8 space-x-2"
        variants={itemVariants}
      >
        {services.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;