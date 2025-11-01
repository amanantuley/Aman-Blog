import Link from 'next/link';
import {
  getHackathons,
  getPosts,
  getProjects,
} from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PostCard } from '@/components/post-card';
import { ProjectCard } from '@/components/project-card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const recentPosts = getPosts().slice(0, 3);
  const featuredProjects = getProjects().slice(0, 2);
  const hackathonHighlights = getHackathons().slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center py-16 md:py-24 fade-in">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Aman Antuley
        </h1>
        <p className="mt-4 text-2xl md:text-4xl font-headline text-primary">
          Insights & Innovations
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Exploring technology, creativity, and innovation — one idea at a time.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/blog">Read The Blog</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-headline">Recent Posts</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="py-16 fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-headline">Featured Projects</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="py-16 fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-headline">
            Hackathon Highlights
          </h2>
          <Button variant="ghost" asChild>
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {hackathonHighlights.map((hackathon) => (
            <ProjectCard key={hackathon.id} project={hackathon} />
          ))}
        </div>
      </section>
    </div>
  );
}
