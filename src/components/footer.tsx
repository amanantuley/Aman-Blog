import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-sm">
              Exploring technology, creativity, and innovation — one idea at a
              time.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold font-headline">About Me</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                I’m Aman Antuley, a Computer Engineering student passionate
                about AI, full-stack development, and digital innovation.
                Through this blog, I share ideas, insights, and experiences
                from my tech journey.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold font-headline">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline">Subscribe</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Get the latest insights and innovations delivered to your inbox.
            </p>
            <form className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                aria-label="Email for newsletter"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aman Antuley. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
