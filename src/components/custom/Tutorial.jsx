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
      <div className="mx-auto rounded-[73px] overflow-hidden bg-gray-200 h-[650px] max-w-7xl my-36">
        {/* Video element using file from public folder */}
        <video 
          className="w-full h-full object-cover"
          controls
          poster="/DemoThumb.png" // Optional: placeholder image until video loads
        >
          <source src="Demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Tutorial