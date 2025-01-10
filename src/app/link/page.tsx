// src/app/link/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import RegularTetrahedron from '@/components/RegularTetrahedron';
import HoverInfoDisplay from '@/components/HoverInfoDisplay';
import Lenis from '@studio-freight/lenis'
import '@/app/styles.css';

const Link = () => {
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
      <div className="relative h-full w-full">

        <div className="fixed inset-0">
          <RegularTetrahedron setHoveredUrl={setHoveredUrl} />  
          <div className="absolute top-20 w-full text-center">
            <HoverInfoDisplay text={hoveredUrl} />
          </div>
          <h1 className="title">&quot;LINK&quot;</h1>
        </div>
        <div className="relative h-full overflow-y-auto">
          <div className="h-[200vh] pt-20">
            <div className="link-github-1">
              <a href="https://github.com/replay9zz" target="_blank" rel="noopener noreferrer">
                &quot;GITHUB&quot;
              </a>             
            </div>
            <div className="link-tryhackme-1">
              <a href="https://tryhackme.com/r/p/replays" target="_blank" rel="noopener noreferrer">
                &quot;THM&quot;
              </a>
            </div>
            <div className="link-hackthebox-academy-1">
              <a href="https://academy.hackthebox.com/dashboard" target="_blank" rel="noopener noreferrer">
                &quot;HTBA&quot;
              </a>
            </div>
            <div className="link-newsite-1">
              <a href="https://your-new-link.com" target="_blank" rel="noopener noreferrer">
                &quot;NewSite&quot;
              </a>
            </div>
            <div className="link-newsite-2">
              <a href="https://your-new-link.com" target="_blank" rel="noopener noreferrer">
                &quot;NewSite&quot;
              </a>
            </div>
            <div className="link-newsite-3">
              <a href="https://your-new-link.com" target="_blank" rel="noopener noreferrer">
                &quot;NewSite&quot;
              </a>
            </div>
            <div className="link-newsite-4">
              <a href="https://your-new-link.com" target="_blank" rel="noopener noreferrer">
                &quot;NewSite&quot;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;