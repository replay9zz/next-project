// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import RegularTetrahedron from '@/components/RegularTetrahedron';
import HoverInfoDisplay from '@/components/HoverInfoDisplay';
import '@/app/styles.css';

const Home = () => {
  const [hoveredUrl, setHoveredUrl] = useState('');

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="relative h-full w-full">
        <RegularTetrahedron setHoveredUrl={setHoveredUrl} />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none">
          <HoverInfoDisplay text={hoveredUrl} />
        </div>
        <h1 className="title">&quot;HOME&quot;</h1>
      </div>
    </div>
  );
};

export default Home;