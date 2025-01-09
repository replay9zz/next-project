// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import RegularTetrahedron from '@/components/RegularTetrahedron';
import HoverInfoDisplay from '@/components/HoverInfoDisplay';
import '@/app/styles.css';
import Lenis from '@studio-freight/lenis';

const Home = () => {
 const [hoveredUrl, setHoveredUrl] = useState('');
 const [isVisible, setIsVisible] = useState(false);

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

 useEffect(() => {
   const referrer = document.referrer;
   const isInternalNavigation = referrer.includes(window.location.origin);

   if (!isInternalNavigation) {
     setIsVisible(true);
     const timer = setTimeout(() => {
       setIsVisible(false);
     }, 3000);
     return () => clearTimeout(timer);
   }
 }, []);

 return (
   <div className="fixed inset-0 overflow-hidden">
     <div className="relative h-full w-full">
       <RegularTetrahedron setHoveredUrl={setHoveredUrl} />
       <div className="absolute top-20 w-full text-center">
         <HoverInfoDisplay text={hoveredUrl} />
       </div>
       <h1 className="title">&quot;HOME&quot;</h1>
       {isVisible && (
         <div className="absolute bottom-10 w-full pointer-events-none flex justify-center">
           <div className="flex flex-col items-center space-y-4 bg-black/50 p-6 rounded-lg text-white animate-fadeOut">
             <p className="text-lg font-medium">Click the vertices to begin</p>
           </div>
         </div>
       )}
     </div>
   </div>
 );
};

export default Home;