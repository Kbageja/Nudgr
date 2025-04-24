import React from 'react';

function About() {
  return (
    <div className="mx-auto my-20 py-8 px-4">
      {/* Header with line */}
      <div className="relative w-full flex items-center justify-center mb-8">
        <div className="absolute w-full border-t border-gray-300"></div>
        <div className="relative bg-white  rounded-2xl px-4 text-center shadow-sm shadow-gray-300
">
          <span className="text-gray-800 font-medium text-sm">About US</span>
        </div>
      </div>

      {/* Flex container for main content and tasks */}
      <div className="flex flex-col mx-16 my-20  md:flex-row gap-8">
        {/* Left side: Main content */}
        <div className="flex-1">
          <h1 className="text-3xl text-black font-bold mb-6">About Our Company</h1>
          
          <div className="space-y-4 max-w-3xl">
            <p className="text-gray-800">
              At Taskle, we believe in efficiency, accountability, and seamless workflow 
              management. Our cutting-edge Task Tracking Software is designed to help 
              businesses stay on top of employee tasks, monitor performance, and drive 
              productivity like never before.
            </p>
            
            <p className="text-gray-800">
              With our intuitive platform, managers can assign tasks, track progress in real 
              time, and review employee performance with data-driven insights. Whether 
              you're leading a small team or managing a large workforce, our solution 
              ensures that every task is completed efficiently and on time.
            </p>
            
            <p className="text-gray-800">
              Join us in transforming workplace productivity and making performance 
              tracking effortless. Take control of your team's success today!
            </p>
          </div>
        </div>

        {/* Right side: Task status indicators */}
        <div className="md:w-1/3 flex flex-col justify-center space-y-4">
  <div className="flex items-center gap-6 bg-green-100 rounded-full py-3 px-5 shadow-sm">
    <div className="bg-green-500 rounded-full p-2 mr-3 shadow-inner">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <span className="text-gray-800 font-medium">Task 1 Done</span>
  </div>
  
  <div className="flex items-center gap-6 bg-gray-100 rounded-full py-3 px-5 w-4/5 self-center shadow-sm">
    <div className="bg-gray-300 rounded-full p-2 mr-3 shadow-inner">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
    <span className="text-gray-800 font-medium">Task 2</span>
  </div>
  
  <div className="flex items-center gap-6 bg-gray-100 rounded-full py-3 px-5 w-4/5 self-center shadow-sm">
    <div className="bg-gray-300 rounded-full p-2 mr-3 shadow-inner">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
    <span className="text-gray-800 font-medium">Task 3</span>
  </div>
</div>
      </div>
    </div>
  );
}

export default About;