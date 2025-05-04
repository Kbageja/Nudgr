import React from 'react'
import Head from 'next/head'

function Tutorial() {
  return (
    <>
      <Head>
        <title>Nudgr Tutorial - How to Use Our Task Management System</title>
        <meta 
          name="description" 
          content="Learn how to use Nudgr's task management system with our step-by-step tutorial video. Master team task assignment, performance tracking, and productivity tools." 
        />
        <meta 
          name="keywords" 
          content="Nudgr tutorial, task management tutorial, productivity tools guide, team task assignment, performance tracking software, how to use Nudgr" 
        />
        <meta property="og:title" content="Nudgr Tutorial - How to Use Our Task Management System" />
        <meta 
          property="og:description" 
          content="Watch our tutorial video to learn how to maximize productivity with Nudgr's task management and performance tracking features." 
        />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content="https://yourwebsite.com/tutorial" />
        <meta property="og:image" content="https://img.youtube.com/vi/PKzXX07A22Q/maxresdefault.jpg" />
        <meta property="og:video" content="https://www.youtube.com/embed/PKzXX07A22Q" />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content="Nudgr Tutorial - How to Use Our Task Management System" />
        <meta 
          name="twitter:description" 
          content="Learn how to use all features of Nudgr's productivity platform with our comprehensive tutorial." 
        />
        <meta name="twitter:image" content="https://img.youtube.com/vi/PKzXX07A22Q/maxresdefault.jpg" />
        <meta name="twitter:player" content="https://www.youtube.com/embed/PKzXX07A22Q" />
        <meta name="twitter:player:width" content="1280" />
        <meta name="twitter:player:height" content="720" />
        <link rel="canonical" href="https://yourwebsite.com/tutorial" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Nudgr Task Management System Tutorial",
            "description": "Complete guide to using Nudgr's productivity and task management platform",
            "thumbnailUrl": "https://img.youtube.com/vi/PKzXX07A22Q/maxresdefault.jpg",
            "uploadDate": "2023-01-01T08:00:00+08:00",
            "duration": "PT5M33S",
            "contentUrl": "https://www.youtube.com/embed/PKzXX07A22Q",
            "embedUrl": "https://www.youtube.com/embed/PKzXX07A22Q",
            "interactionCount": "12345"
          })}
        </script>
      </Head>

      <div className="mx-auto my-20 py-8 px-4">
        {/* Header with line */}
        <div className="relative w-full flex items-center justify-center mb-8">
          <div className="absolute w-full border-t border-gray-300"></div>
          <div className="relative bg-white rounded-2xl px-4 text-center shadow-sm shadow-gray-300">
            <h1 className="text-gray-800 font-medium text-sm">Tutorial</h1>
          </div>
        </div>
        
        {/* Video container */}
        <div 
          className="mx-auto rounded-4xl overflow-hidden bg-gray-200 h-[650px] max-w-7xl my-36"
          itemScope 
          itemType="https://schema.org/VideoObject"
        >
          {/* Add the missing properties here */}
          <meta itemProp="name" content="Nudgr Task Management System Tutorial" />
          <meta itemProp="description" content="Complete guide to using Nudgr's productivity and task management platform" />
          <meta itemProp="thumbnailUrl" content="https://img.youtube.com/vi/PKzXX07A22Q/maxresdefault.jpg" />
          <meta itemProp="uploadDate" content="2023-01-01T08:00:00+08:00" />
          <meta itemProp="duration" content="PT5M33S" />
          <meta itemProp="contentUrl" content="https://www.youtube.com/embed/PKzXX07A22Q" />
          
          {/* Embed YouTube Video */}
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/PKzXX07A22Q"
            title="Nudgr Task Management System - Complete Tutorial"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            aria-label="Nudgr tutorial video player"
            itemProp="embedUrl"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Tutorial