"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar({ sectionRefs }) {
  const router = useRouter();
  const [atTop, setAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check scroll position to determine if navbar is at top
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (id, event) => {
    if (event) event.preventDefault();
    
    // Close mobile menu if it's open
    setIsMenuOpen(false);

    if (id === "home") {
      // Go to home page and scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Update URL to root with no hash
      window.history.pushState(null, "", "/");
      return;
    }

    const ref = sectionRefs[id];
    if (ref?.current) {
      // Update URL without full navigation
      window.history.pushState(null, "", `/#${id}`);

      // Smooth scroll with enhanced animation
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`bg-white p-4 sticky top-0 z-50 flex justify-between items-center transition-shadow duration-300 ${
        !atTop ? "shadow-sm" : ""
      }`}
    >
      {/* Logo */}
      <button
        onClick={(e) => handleNavClick("home", e)}
        className="text-gray-800 text-xl font-bold font-akatab cursor-pointer hover:text-gray-900 transition-colors duration-300"
      >
        Nudgr.
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <button
          onClick={(e) => handleNavClick("aboutus", e)}
          className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
        >
          About Us
        </button>
        <button
          onClick={(e) => handleNavClick("services", e)}
          className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
        >
          Services
        </button>
        <button
          onClick={(e) => handleNavClick("tutorial", e)}
          className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
        >
          Tutorial
        </button>
        <button
          onClick={(e) => handleNavClick("contactus", e)}
          className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
        >
          Contact Us
        </button>
        <Link
          href="https://task-management-lcdm-qn5peodnc-kinshuks-projects-25193fa4.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black hover:border-black border transition-colors duration-300">
            Try Now
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300">
          <div 
            className="mobile-menu-container fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out h-full"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex flex-col space-y-1 p-4">
                <button
                  onClick={(e) => handleNavClick("home", e)}
                  className="p-3 text-left hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={(e) => handleNavClick("aboutus", e)}
                  className="p-3 text-left hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  About Us
                </button>
                <button
                  onClick={(e) => handleNavClick("services", e)}
                  className="p-3 text-left hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  Services
                </button>
                <button
                  onClick={(e) => handleNavClick("tutorial", e)}
                  className="p-3 text-left hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  Tutorial
                </button>
                <button
                  onClick={(e) => handleNavClick("contactus", e)}
                  className="p-3 text-left hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  Contact Us
                </button>
              </div>

              {/* Mobile Menu Footer with Try Now Button */}
              <div className="mt-auto p-4 border-t">
                <Link
                  href="https://task-management-lcdm-qn5peodnc-kinshuks-projects-25193fa4.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                    Try Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}