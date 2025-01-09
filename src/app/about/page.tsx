'use client';

import React, { useState, useEffect } from 'react';
import RegularTetrahedron from '@/components/RegularTetrahedron';
import HoverInfoDisplay from '@/components/HoverInfoDisplay';
import SkillsSection from '@/components/SkillsSection';
import Lenis from '@studio-freight/lenis'
import '@/app/styles.css';




const About = () => {
  const [hoveredUrl, setHoveredUrl] = useState('');

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none relative h-screen w-full">
        <div className="pointer-events-auto">
          <RegularTetrahedron setHoveredUrl={setHoveredUrl} />
        </div>
        <div className="absolute top-20 w-full text-center">
          <HoverInfoDisplay text={hoveredUrl} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="title">&quot;ABOUT&quot;</h1>
        </div>
      </div>
      
      <div className="min-h-screen bg-black p-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative min-h-screen">
            <SkillsSection />
          </div>
          <div className="space-y-6 text-white">
            <p>More content...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;