"use client"
import React, { useEffect, useState } from 'react';

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  
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
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [services.length]);
  
  // Function to get the visible services with wrap-around
  const getVisibleServices = () => {
    // For mobile: return only the active item
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return [{
        ...services[activeIndex],
        isCenter: true
      }];
    }
    
    // For desktop: return 3 items with the middle one highlighted
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + services.length) % services.length;
      result.push({
        ...services[index],
        isCenter: i === 0
      });
    }
    return result;
  };
  
  return (
    <div className="mx-auto my-10 py-6 px-4 text-black">
      {/* Header with line */}
      <div className="relative w-full flex items-center justify-center mb-8">
        <div className="absolute w-full border-t border-gray-300"></div>
        <div className="relative bg-white rounded-2xl px-4 text-center shadow-sm shadow-gray-300">
          <span className="text-gray-800 font-medium text-sm">Solutions</span>
        </div>
      </div>
      
      {/* Solution title */}
      <h2 className="text-4xl text-center mb-12 mt-24">Solutions Offered</h2>
      
      {/* Carousel container */}
      <div className="relative overflow-hidden my-16 md:mx-24">
        <div className="flex ">
          {getVisibleServices().map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="md:w-1/3 w-full p-6  my-10 transition-all duration-500"
            >
              <div
                className={`rounded-[46px] px-2 flex items-center justify-center shadow-md ${
                  service.isCenter ? 'bg-[#E9EBFD]' : 'bg-gray-100'
                }`}
                style={{
                  width: '100%',
                  maxWidth: '390px', 
                  height: '234px',
                  margin: '0 auto'
                }}
              >
                <div className="text-center">
                  <h3 className="font-medium text-lg">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;