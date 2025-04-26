// components/custom/StarryBackground.jsx
'use client';

import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars(); // Recreate stars when resizing
    };
    
    window.addEventListener('resize', handleResize);
    
    // Star properties
    const stars = [];
    const totalStars = 80;
    
    // Create stars with blue colors
    const createStars = () => {
      stars.length = 0; // Clear existing stars
      
      // Blue color variations
      const blueColors = [
        '0, 51, 153', // Deep blue
        '0, 102, 204', // Medium blue
        '51, 153, 255', // Light blue
        '25, 25, 112', // Midnight blue
        '65, 105, 225'  // Royal blue
      ];
      
      for (let i = 0; i < totalStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2 ; // Slightly larger stars for visibility
        const opacity = Math.random() * 0.8 + 0.2; // Between 0.2 and 1
        const twinkleSpeed = Math.random() * 0.02 + 0.003; // Randomize twinkle speed
        const twinkleDirection = Math.random() > 0.5 ? 1 : -1; // Random direction
        const colorIndex = Math.floor(Math.random() * blueColors.length);
        
        stars.push({
          x,
          y,
          radius,
          opacity,
          currentOpacity: opacity,
          twinkleSpeed,
          twinkleDirection,
          color: blueColors[colorIndex]
        });
      }
    };
    
    createStars();
    
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        // Update star twinkle effect
        star.currentOpacity += star.twinkleSpeed * star.twinkleDirection;
        
        // Change direction if opacity limits reached
        if (star.currentOpacity <= 0.1 || star.currentOpacity >= 1) {
          star.twinkleDirection *= -1;
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${star.currentOpacity})`;
        ctx.fill();
      });
      
      // Occasionally add a shooting star
      if (Math.random() < 0.008) {
        createShootingStar(ctx, canvas.width, canvas.height);
      }
      
      requestAnimationFrame(animate);
    };
    
    // Create shooting star with blue color
    const createShootingStar = (ctx, width, height) => {
      const x = Math.random() * width;
      const y = Math.random() * (height / 3); // Start in top third of screen
      const length = Math.random() * 100 + 50; // Longer shooting stars
      const angle = Math.PI / 4 + (Math.random() * Math.PI / 4); // Between 45 and 90 degrees
      
      const startX = x;
      const startY = y;
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
      
      // Draw shooting star with blue gradient
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, 'rgba(51, 153, 255, 0)');
      gradient.addColorStop(0.5, 'rgba(51, 153, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(51, 153, 255, 0)');
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Add a glow effect
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = 'rgba(51, 153, 255, 0.2)';
      ctx.lineWidth = 4;
      ctx.stroke();
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ backgroundColor: '#ffffff' }} // White background
    />
  );
};

export default StarryBackground;