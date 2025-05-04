import React from 'react'

function Tutorial() {
  return (
    <div className="mx-auto my-20 py-8 px-4">
      {/* Header with line */}
      <div className="relative w-full flex items-center justify-center mb-8">
        <div className="absolute w-full border-t border-gray-300"></div>
        <div className="relative bg-white rounded-2xl px-4 text-center shadow-sm shadow-gray-300">
          <span className="text-gray-800 font-medium text-sm">Tutorial</span>
        </div>
      </div>
      
      {/* Video container */}
      <div className="mx-auto rounded-4xl overflow-hidden bg-gray-200 h-[650px] max-w-7xl my-36">
        {/* Embed YouTube Video */}
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/WPqGylce3r8"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Tutorial
