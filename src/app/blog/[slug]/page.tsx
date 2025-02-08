import React from 'react';
import { getPostData, getPostHtml, getAllPostSlugs } from '../utils';

// 動的ルートのパラメータを生成
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostData(params.slug);
  const contentHtml = await getPostHtml(post.content || '');

  return (
    <article className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <time className="text-sm text-zinc-400">{post.date}</time>
            <span className="text-sm text-zinc-400">{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-xl text-zinc-300">{post.excerpt}</p>
        </div>
        
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
      </div>
    </article>
  );
}