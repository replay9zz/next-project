'use client';

import React, { useState, useEffect } from 'react';
import RegularTetrahedron from '@/components/RegularTetrahedron';
import HoverInfoDisplay from '@/components/HoverInfoDisplay';
import Lenis from '@studio-freight/lenis'
import '@/app/styles.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 13",
    excerpt: "Learn how to build modern web applications with Next.js 13's new app directory and server components.",
    date: "2024-01-30",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can streamline your styling workflow and make your development process more efficient.",
    date: "2024-01-28",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Understanding TypeScript",
    excerpt: "A comprehensive guide to TypeScript and how it can improve your JavaScript development experience.",
    date: "2024-01-25",
    readTime: "6 min read"
  }
];

const Blog = () => {
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
    <div className="min-h-screen">
      {/* Original Tetrahedron Section */}
      <div className="h-screen relative overflow-hidden">
        <div className="relative h-full w-full">
          <RegularTetrahedron setHoveredUrl={setHoveredUrl} />
          <div className="absolute top-20 w-full text-center">
            <HoverInfoDisplay text={hoveredUrl} />
          </div>
          <h1 className="title">&quot;BLOG&quot;</h1>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Latest Posts</h2>
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-zinc-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <time className="text-sm text-zinc-400">{post.date}</time>
                  <span className="text-sm text-zinc-400">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-zinc-300">{post.excerpt}</p>
                <div className="mt-4">
                  <button className="text-blue-400 hover:text-blue-300 font-medium">
                    Read more →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;