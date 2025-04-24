'use client';

import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7
      }
    }
  };

  const taskVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.7
      }
    })
  };

  return (
    <motion.div 
      className="mx-auto my-20 py-8 px-4"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
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
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gray-800 font-medium text-sm">About US</span>
        </motion.div>
      </motion.div>

      {/* Flex container for main content and tasks */}
      <div className="flex flex-col mx-16 my-20 md:flex-row gap-8">
        {/* Left side: Main content */}
        <motion.div 
          className="flex-1"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl text-black font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={controls}
            custom={0}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3 }
              }
            }}
          >
            About Our Company
          </motion.h1>
          
          <motion.div 
            className="space-y-4 max-w-3xl"
            variants={containerVariants}
          >
            <motion.p className="text-gray-800" variants={itemVariants}>
              At Taskle, we believe in efficiency, accountability, and seamless workflow 
              management. Our cutting-edge Task Tracking Software is designed to help 
              businesses stay on top of employee tasks, monitor performance, and drive 
              productivity like never before.
            </motion.p>
            
            <motion.p className="text-gray-800" variants={itemVariants}>
              With our intuitive platform, managers can assign tasks, track progress in real 
              time, and review employee performance with data-driven insights. Whether 
              you're leading a small team or managing a large workforce, our solution 
              ensures that every task is completed efficiently and on time.
            </motion.p>
            
            <motion.p 
              className="text-gray-800" 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              Join us in transforming workplace productivity and making performance 
              tracking effortless. Take control of your team's success today!
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right side: Task status indicators */}
        <motion.div 
          className="md:w-1/3 flex flex-col justify-center space-y-4"
          variants={containerVariants}
        >
          <motion.div 
            className="flex items-center gap-6 bg-green-100 rounded-full py-3 px-5 shadow-sm"
            variants={taskVariants}
            custom={0}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="bg-green-500 rounded-full p-2 mr-3 shadow-inner"
              animate={controls}
              variants={{
                hidden: { rotate: 0 },
                visible: { 
                  rotate: 360,
                  transition: { duration: 0.5 }
                }
              }}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </motion.div>
            <span className="text-gray-800 font-medium">Task 1 Done</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6 bg-gray-100 rounded-full py-3 px-5 w-4/5 self-center shadow-sm"
            variants={taskVariants}
            custom={1}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gray-300 rounded-full p-2 mr-3 shadow-inner">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span className="text-gray-800 font-medium">Task 2</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6 bg-gray-100 rounded-full py-3 px-5 w-4/5 self-center shadow-sm"
            variants={taskVariants}
            custom={2}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gray-300 rounded-full p-2 mr-3 shadow-inner">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span className="text-gray-800 font-medium">Task 3</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;