"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HoverInfoDisplay from "./HoverInfoDisplay";

const navItems = [
  { path: "/", label: '"HOME"' },
  { path: "/about", label: '"ABOUT"' },
  { path: "/blog", label: '"BLOG"' },
  { path: "/link", label: '"LINK"' },
];

export default function HoverNavigation() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Left trigger */}
      <div 
        className="fixed left-0 top-0 h-full w-20 z-40 group"
        onMouseEnter={() => setIsOpen(true)}
      />

      {/* Right trigger */}
      <div 
        className="fixed right-0 top-0 h-full w-20 z-40 group"
        onMouseEnter={() => setIsOpen(true)}
      />

      {/* Navigation */}
      <div 
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="h-full flex items-center justify-center">
          <ul className="space-y-16">
            {navItems.map((item) => (
              <li 
                key={item.path}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-4xl font-mono tracking-wide transition-colors text-center ${
                    pathname === item.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx global>{`
        .content-wrapper {
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
        .group:hover ~ .content-wrapper {
          opacity: 0.3;
        }
      `}</style>
      <HoverInfoDisplay text={hoveredItem ? hoveredItem.replace(/"/g, '') : ''} />
    </>
  );
}