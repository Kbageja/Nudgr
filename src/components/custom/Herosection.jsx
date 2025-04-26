'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    // Check if we're on the home route without a hash
    setIsHome(pathname === '/' && !window.location.hash);
  }, [pathname]);

  const handleViewDemo = (e) => {
    e.preventDefault();
    // Navigate to the tutorial section
    window.location.href = '/#tutorial';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 1.2
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#000",
      color: "#fff",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div
      className="p-8 md:p-16 rounded-b-[5rem] md:rounded-b-[10rem] h-auto md:h-[500px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(189,198,255,0.5) 100%)'
      }}
    >
      {/* Dots background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #808080 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Main Content with Framer Motion */}
      <motion.div 
        className="flex flex-col items-center justify-center h-full text-center relative z-10"
        initial="hidden"
        animate={isHome ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-black text-4xl md:text-5xl font-bold font-akatab mb-3"
          variants={itemVariants}
        >
          Your Smart Solution for Task
        </motion.h1>
        
        <motion.h1 
          className="text-black text-4xl md:text-5xl font-akatab font-bold mb-3"
          variants={itemVariants}
        >
          &
        </motion.h1>
        
        <motion.h1 
          className="text-black text-4xl md:text-5xl font-akatab font-bold mb-12"
          variants={itemVariants}
        >
          Performance Management.
        </motion.h1>
        
        {/* Button with hover animation */}
        <motion.button 
          onClick={handleViewDemo}
          className="border border-gray-400 bg-gray-100 text-gray-800 px-8 py-2 rounded-full"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          View demo
        </motion.button>
      </motion.div>
    </div>
  );
}