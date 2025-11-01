'use client';
import { useState } from 'react';
import { getCategories, getPosts } from '@/lib/data';
import { PostCard } from '@/components/post-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Category } from '@/lib/types';

const posts = getPosts();
const categories = [{ id: 'all', name: 'All', slug: 'all' }, ...getCategories()];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  const filteredPosts = selectedCategory.id === 'all'
    ? posts
    : posts.filter(post => post.category.id === selectedCategory.id);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Insights & Innovations
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Welcome to my digital journal. Here, I explore topics in AI, web development, and technology, sharing my latest thoughts and discoveries.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-12 fade-in" style={{ animationDelay: '0.2s' }}>
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory.id === category.id ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 fade-in" style={{ animationDelay: '0.4s' }}>
        {filteredPosts.map((post, index) => (
          <div key={post.id} className="fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
