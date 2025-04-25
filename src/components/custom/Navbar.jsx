"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar({ sectionRefs }) {
  const router = useRouter();
  const [atTop, setAtTop] = useState(true);

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

  const handleNavClick = (id) => {
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
      // Prevent default behavior
      if (event) event.preventDefault();

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
      <button
        onClick={() => handleNavClick("home")}
        className="text-gray-800 text-xl font-medium cursor-pointer hover:text-gray-900 transition-colors duration-300"
      >
        Nudgr
      </button>
      <div className="flex items-center space-x-8">
        <button
          onClick={() => handleNavClick("aboutus")}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          About Us
        </button>
        <button
          onClick={() => handleNavClick("services")}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          Services
        </button>
        <button
          onClick={() => handleNavClick("tutorial")}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          Tutorial
        </button>
        <button
          onClick={() => handleNavClick("contactus")}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          Contact Us
        </button>
        <Link
          href="https://task-management-lcdm-qn5peodnc-kinshuks-projects-25193fa4.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-black border-1 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            Try Now
          </button>
        </Link>
      </div>
    </nav>
  );
}
