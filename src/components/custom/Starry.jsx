'use client';

import React from 'react';

const StarryBackground = () => {
  return (
    <div className="starry-background fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <style jsx>{`
        .starry-background {
          background-color: white;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .starry-background::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(#000000 1px, transparent 1px),
                          radial-gradient(#000000 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: 0 0, 25px 25px;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
};

export default StarryBackground;