'use client';

import React, { useState } from 'react';
import RegularTetrahedron from '@/components/RegularTetrahedron';
import HoverInfoDisplay from '@/components/HoverInfoDisplay';
import '@/app/styles.css';

const About = () => {
  const [hoveredUrl, setHoveredUrl] = useState('');

  return (
    <div className="relative min-h-screen">
      <div className="relative h-screen w-full">
        <RegularTetrahedron setHoveredUrl={setHoveredUrl} />
        <div className="absolute top-20 w-full text-center">
          <HoverInfoDisplay text={hoveredUrl} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="title">&quot;ABOUT&quot;</h1>
        </div>
      </div>
      
      <div className="min-h-screen bg-black p-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Us</h2>
          <div className="space-y-6">
            <p>Your content goes here...</p>
            <p>More content...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;