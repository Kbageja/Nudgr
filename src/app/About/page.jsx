'use client';

import React, { useRef } from 'react';
import Head from 'next/head';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

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
    <>
      <Head>
        <title>About Nudgr - Task Tracking Software & Productivity Solutions</title>
        <meta 
          name="description" 
          content="Learn about Nudgr's innovative task tracking software that helps businesses improve productivity, monitor employee performance, and streamline workflow management." 
        />
        <meta 
          name="keywords" 
          content="Nudgr , Kinshuk Bageja ,task tracking software, employee productivity, workflow management, performance tracking, team management tools, Nudgr about us , task Management Software" 
        />
        <meta property="og:title" content="About Nudgr - Task Tracking Software & Productivity Solutions" />
        <meta 
          property="og:description" 
          content="Discover how Nudgr's task tracking software transforms workplace productivity with real-time performance monitoring and efficient workflow management." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nudgr.vercel.app/#aboutus" />
        <meta property="og:image" content="/Aboutme.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nudgr - Task Tracking Software & Productivity Solutions" />
        <meta 
          name="twitter:description" 
          content="Nudgr provides cutting-edge task tracking software to help businesses monitor employee performance and boost productivity." 
        />
        <meta name="twitter:image" content="/Aboutme.jpg" />
        <link rel="canonical" href="https://nudgr.vercel.app/#aboutus" />
      </Head>

      <motion.div 
        className="mx-auto py-8 px-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        {/* Header with line */}
        <motion.div 
          className="relative w-full flex items-center justify-center mb-8"
          variants={itemVariants}
        >
          <div className="absolute w-full border-t border-gray-300"></div>
          <motion.div 
            className="relative bg-blue-50 rounded-2xl px-4 text-center shadow-sm shadow-gray-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 itemProp="headline" className="text-gray-800 font-medium text-sm">About US</h1>
          </motion.div>
        </motion.div>

        {/* First Section: About Company + Tasks */}
        <div className="flex flex-col mx-16 mt-20 md:flex-row gap-8">
          {/* Left side: Main content */}
          <motion.div 
            className="flex-1"
            variants={itemVariants}
            itemScope
            itemType="https://schema.org/Organization"
          >
            <motion.h1 
              className="text-3xl text-black font-bold mb-6 font-akatab"
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
              itemProp="name"
            >
              About Our Company
            </motion.h1>
            
            <motion.div 
              className="space-y-4 max-w-3xl"
              variants={containerVariants}
              itemProp="description"
            >
              <motion.p className="text-gray-800" variants={itemVariants}>
                At <span itemProp="name">Nudgr</span>, we believe in efficiency, accountability, and seamless workflow 
                management. Our cutting-edge <span itemProp="makesOffer">Task Tracking Software</span> is designed to help 
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
        
        {/* Second Section: About Me with image on left and content on right */}
        <div className="flex flex-col mx-16 mt-20 md:flex-row gap-8">
          {/* Left side: Image */}
          <motion.div 
            className="md:w-1/3 flex justify-center items-center"
            variants={containerVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            custom={3}
          >
            <motion.div 
              className="relative w-96 h-64 md:h-80 overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/Aboutme.jpg"
                alt="Kinshuk Bageja - Computer Science Student and Web Developer"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right side: About Me content */}
          <motion.div 
            className="flex-1"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            custom={4}
            itemScope
            itemType="https://schema.org/Person"
          >
            <motion.h2 
              className="text-2xl text-black font-bold mb-6 flex items-center font-akatab"
              whileHover={{ scale: 1.02 }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="space-y-4 max-w-3xl"
              variants={containerVariants}
            >
              <motion.h3 
                className="font-bold text-lg text-blue-900"
                variants={itemVariants}
                itemProp="name"
              >
                Kinshuk Bageja
              </motion.h3>
              
              <motion.p className="text-gray-800" variants={itemVariants} itemProp="description">
                Currently I am pursuing <span itemProp="hasOccupation">Bachelors in Technology</span> from <span itemProp="alumniOf">Indraprastha University, Delhi</span>
                and major in <span itemProp="knowsAbout">Computer Science</span> with minor specialisation in <span itemProp="knowsAbout">AI and ML</span>.
              </motion.p>
              
              <motion.p className="text-gray-800" variants={itemVariants}>
                I have honed my skills in <span itemProp="knowsAbout">Web Development</span>, learning languages like <span itemProp="knowsAbout">React, Next, 
                TypeScript</span> and more. I have <span itemProp="hasOccupation">2 internship experiences</span>: building an <span itemProp="knowsAbout">IVF software</span> and 
                delivering an <span itemProp="knowsAbout">e-commerce website</span> for a client.
              </motion.p>
              
              <motion.p className="text-gray-800" variants={itemVariants}>
                Apart from these formal experiences, I have participated in various <span itemProp="award">Hackathons</span> - 
                organizing them, mentoring participants, and even winning one at <span itemProp="award">IIT Delhi</span>.
              </motion.p>
              
              <motion.div 
                className="flex mt-4"
                variants={itemVariants}
              >
                
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default About;