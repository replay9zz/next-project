'use client';

import React, { useState } from 'react';
import RegularTetrahedron from '@/components/RegularTetrahedron';
import HoverInfoDisplay from '@/components/HoverInfoDisplay';

export default function BlogHeader() {
  const [hoveredUrl, setHoveredUrl] = useState('');

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="relative h-full w-full">
        <RegularTetrahedron setHoveredUrl={setHoveredUrl} />
        <div className="absolute top-20 w-full text-center">
          <HoverInfoDisplay text={hoveredUrl} />
        </div>
        <h1 className="title">&quot;BLOG&quot;</h1>
      </div>
    </div>
  );
}