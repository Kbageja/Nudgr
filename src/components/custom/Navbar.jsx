import React from 'react';

export default function Navbar() {
    return (
      <nav className="bg-white p-4 flex justify-between items-center">
        <div className="text-gray-800 text-xl font-medium">Taskie</div>
        <div className="flex items-center space-x-8">
          <a href="/aboutUs" className="text-gray-600 hover:text-gray-800">AboutUs</a>
          <a href="/services" className="text-gray-600 hover:text-gray-800">Services</a>
          <button className="bg-black text-white px-4 py-1 rounded-4xl hover:bg-gray-800">
            Try Now
          </button>
        </div>
      </nav>
    );
  }