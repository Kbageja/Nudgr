"use client"
import React from 'react';

export default function HeroSection() {
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
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
        <h1 className="text-black text-4xl md:text-5xl font-bold mb-3">
          Your Smart Solution for Task
        </h1>
        <h1 className="text-black text-4xl md:text-5xl font-bold mb-3">
          &
        </h1>
        <h1 className="text-black text-4xl md:text-5xl font-bold mb-12">
          Performance Management.
        </h1>
        
        {/* Button */}
        <button className="border border-gray-400 bg-gray-100 text-gray-800 px-8 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
          View demo
        </button>
      </div>
    </div>
  );
}