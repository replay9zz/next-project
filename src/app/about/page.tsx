// src/app/about/page.tsx
'use client';

import React, { useState } from 'react';
import RegularTetrahedron from '@/components/RegularTetrahedron';
import HoverInfoDisplay from '@/components/HoverInfoDisplay';
import '@/app/styles.css';

const About = () => {
  const [hoveredUrl, setHoveredUrl] = useState('');

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="relative h-full w-full">
        <RegularTetrahedron setHoveredUrl={setHoveredUrl} />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none">
          <HoverInfoDisplay text={hoveredUrl} />
        </div>
        <h1 className="title">&quot;ABOUT&quot;</h1>
      </div>
    </div>
  );
};

export default About;