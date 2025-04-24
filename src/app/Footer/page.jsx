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
      className="bg-zinc-900 py-12 px-4 md:px-20 lg:px-40"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-full flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white">✅ Taskie</h1>
            </div>

            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/kinshuk-bageja-993800255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/aditya7483thakur/Ai-finance-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:kinshukbageja@gmail.com"
                className="text-white hover:text-gray-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdEmail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 text-white mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm"
          >
            &copy; {currentYear} Taskie. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm mt-4 md:mt-0"
          >
            Built with ❤️ to manage your tasks smarter
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
