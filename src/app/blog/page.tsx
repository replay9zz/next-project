import React from 'react';
import Link from 'next/link';
import BlogHeader from './components/BlogHeader';
import SmoothScroll from './components/SmoothScroll';
import '@/app/styles.css';
import { getAllPosts } from './utils';

export default async function Blog() {
  const blogPosts = await getAllPosts();

  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <BlogHeader />

      {/* Blog Posts Section */}
      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Latest Posts</h2>
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-zinc-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <time className="text-sm text-zinc-400">{post.date}</time>
                  <span className="text-sm text-zinc-400">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-zinc-300">{post.excerpt}</p>
                <div className="mt-4">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}