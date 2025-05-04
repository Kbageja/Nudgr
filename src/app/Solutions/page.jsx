"use client";
import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
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
    { 
      id: 1, 
      title: "Team Task Assignment", 
      description: "Effortlessly assign tasks to your team members, set priorities, and define deadlines to streamline project execution." 
    },
    { 
      id: 2, 
      title: "Performance Tracking", 
      description: "Analyze individual and team performance based on completed tasks to ensure accountability and recognize top performers." 
    },
    { 
      id: 3, 
      title: "Timely Submission Monitoring", 
      description: "Track task deadlines and get real-time updates to ensure every project milestone is completed on time." 
    },
    { 
      id: 4, 
      title: "Remote Workforce Management", 
      description: "Manage distributed teams effectively with task delegation, progress tracking, and centralized reporting — all in one platform." 
    },
    { 
      id: 5, 
      title: "Client and Project Coordination", 
      description: "Organize client-related tasks, assign internal responsibilities, and monitor delivery timelines to maintain strong client relationships." 
    },
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
    <>
      <Head>
        <title>Task Management Solutions | Nudgr Productivity Tools</title>
        <meta 
          name="description" 
          content="Discover Nudgr's comprehensive task management solutions including team assignment, performance tracking, and remote workforce management for enhanced productivity." 
        />
        <meta 
          name="keywords" 
          content="Nudgr , task management software, team productivity tools, performance tracking system, remote work solutions, project coordination platform " 
        />
        <meta property="og:title" content="Task Management Solutions | Nudgr Productivity Tools" />
        <meta 
          property="og:description" 
          content="Explore Nudgr's innovative solutions for team task management, performance tracking, and efficient project coordination." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nudgr.vercel.app/#services" />
        <meta property="og:image" content="https://nudgr.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Task Management Solutions | Nudgr Productivity Tools" />
        <meta 
          name="twitter:description" 
          content="Boost your team's efficiency with Nudgr's task management and performance tracking solutions." 
        />
        <meta name="twitter:image" content="https://nudgr.vercel.app/og-image.png" />
        <link rel="canonical" href="https://nudgr.vercel.app/#services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Task Management Solutions",
            "description": "Nudgr's comprehensive task management solutions for teams and businesses",
            "url": "https://nudgr.vercel.app/#services",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": services.map((service, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            }
          })}
        </script>
      </Head>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mx-auto my-10 py-6 px-4 text-white"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* Header with line */}
        <motion.div 
          className="relative w-full flex items-center justify-center mb-8"
          variants={itemVariants}
        >
          <div className="absolute w-full border-t border-gray-300"></div>
          <motion.div 
            className="relative bg-white text-black rounded-2xl px-4 text-center shadow-md"
            whileHover={{ scale: 1.05 }}
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <span className="text-gray-800 font-medium text-sm">Solutions</span>
          </motion.div>
        </motion.div>
        
        {/* Solution title */}
        <motion.h1 
          className="text-4xl text-center mb-12 mt-24 font-akatab font-bold text-black"
          variants={itemVariants}
          itemProp="name"
        >
          Solutions Offered
        </motion.h1>
        
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
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <div
                    className={`rounded-[46px] px-2 flex items-center justify-center shadow-md h-[234px] mx-auto ${
                      index === 1 ? 'bg-[#E9EBFD] text-black' : 'bg-zinc-100 bg-opacity-60 text-black'
                    }`}
                    style={{
                      width: '100%',
                      maxWidth: '390px',
                      backdropFilter: 'blur(4px)',
                      border: index === 1 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
                    }}
                  >
                    <div className="text-center p-4" itemScope itemType="https://schema.org/Service">
                      <h2 className="font-medium text-xl pb-10" itemProp="name">{service.title}</h2>
                      <p className={`text-sm font-light ${index === 1 ? 'text-gray-600' : 'text-gray-700'}`} itemProp="description">
                        {service.description}
                      </p>
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
                activeIndex === index ? 'bg-blue-500' : 'bg-gray-400'
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to ${services[index].title} service`}
              aria-current={activeIndex === index ? "true" : "false"}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Services;