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
        <div className="absolute top-20 left-1/2 -translate-x-1/2">
          <HoverInfoDisplay text={hoveredUrl} />
        </div>
        <div className="navigation-layer">
          <h1 className="title">
            "LINK"
          </h1>
          <div className="github-link">
            <a href="https://github.com/replay9zz" target="_blank" rel="noopener noreferrer">
              "GitHub"
            </a>             
          </div>
          <div className="instagram-link">
            <a href="https://www.instagram.com/hirokiokabe_o.o_/" target="_blank" rel="noopener noreferrer">
              "Instagram"
            </a>
          </div>
          <div className="hackthebox-academy-link">
            <a href="https://academy.hackthebox.com/dashboard" target="_blank" rel="noopener noreferrer">
              "HTBAcademy"
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;