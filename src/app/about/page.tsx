import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const metadata = {
  title: 'About Me',
  description: 'Learn more about Aman Antuley, a Computer Engineering student passionate about AI, full-stack development, and digital innovation.',
};

export default function AboutPage() {
  const authorImage = PlaceHolderImages.find(img => img.id === 'author-aman');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 fade-in">
             {authorImage && (
                <div className="aspect-square relative rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
                    <Image
                    src={authorImage.imageUrl}
                    alt="Aman Antuley"
                    fill
                    className="object-cover"
                    data-ai-hint={authorImage.imageHint}
                    />
                </div>
            )}
          </div>
          <div className="md:col-span-2 fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              A Passion for Building the Future.
            </h1>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I’m <span className="text-foreground font-semibold">Aman Antuley</span>, a Computer Engineering student with a relentless curiosity for technology and a drive to create meaningful digital experiences.
              </p>
              <p>
                My journey into the world of tech began with a simple fascination for how things work. That curiosity has since grown into a deep passion for AI, full-stack development, and the endless possibilities of digital innovation. I thrive on challenges, whether it's architecting a complex application, training a machine learning model, or collaborating with a team to bring an idea to life during a fast-paced hackathon.
              </p>
              <p>
                Through this blog, I aim to demystify complex topics, share insights from my projects, and document my continuous learning journey. My goal is to not only showcase my work but also to connect with fellow enthusiasts and contribute to our collective growth as creators and innovators.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
                 <Button asChild>
                    <Link href="/contact">Get In Touch</Link>
                </Button>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="#" aria-label="Twitter">
                            <Twitter className="h-5 w-5" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href="#" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href="#" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
