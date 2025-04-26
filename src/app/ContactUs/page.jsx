"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          {/* Logo and Company Name */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-4 mb-6 sm:mb-0"
          >
            <h1 className="text-xl sm:text-2xl font-bold text-white">✅ Nudgr</h1>
          </motion.div>
          
          {/* Social Icons */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex space-x-5"
          >
            <motion.a
              href="https://www.linkedin.com/in/kinshuk-bageja-993800255/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/Kbageja/Nudgr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="mailto:kinshukbageja@gmail.com"
              className="text-white hover:text-gray-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <MdEmail className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
        </div>



        {/* Divider */}
        <div className="border-t border-gray-700 mt-6"></div>
        
        {/* Copyright and tagline */}
        <div className="text-gray-400 mt-6 flex flex-col sm:flex-row justify-between items-center">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs sm:text-sm text-center sm:text-left"
          >
            &copy; {currentYear} Nudgr. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xs sm:text-sm mt-3 sm:mt-0 text-center"
          >
            Built with ❤️ to manage your tasks smarter
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;