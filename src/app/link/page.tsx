// src/app/link/page.tsx

'use client';

import React, { useState } from 'react';
import RegularTetrahedron from '@/components/RegularTetrahedron';
import HoverInfoDisplay from '@/components/HoverInfoDisplay';
import '@/app/styles.css';

const Link = () => {
  const [hoveredUrl, setHoveredUrl] = useState('');

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="relative h-full w-full">
        <RegularTetrahedron setHoveredUrl={setHoveredUrl} />
        <div className="absolute top-20 w-full text-center">
          <HoverInfoDisplay text={hoveredUrl} />
        </div>
        <div className="navigation-layer">
          <h1 className="title">
            &quot;LINK&quot;
          </h1>
          <div className="link-github-1">
            <a href="https://github.com/replay9zz" target="_blank" rel="noopener noreferrer">
              &quot;GitHub&quot;
            </a>             
          </div>
          <div className="link-tryhackme-1">
            <a href="https://tryhackme.com/r/p/replays" target="_blank" rel="noopener noreferrer">
              &quot;TryHackMe&quot;
            </a>
          </div>
          <div className="link-hackthebox-academy-1">
            <a href="https://academy.hackthebox.com/dashboard" target="_blank" rel="noopener noreferrer">
              &quot;HTBAcademy&quot;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;