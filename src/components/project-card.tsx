import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link href={project.link} className="group block" target="_blank" rel="noopener noreferrer">
      <Card
        className={cn(
          'h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/50 flex flex-col',
          className
        )}
      >
        <CardHeader className="p-0">
          <div className="aspect-[16/10] overflow-hidden">
            <Image
              src={project.image.imageUrl}
              alt={project.image.description}
              data-ai-hint={project.image.imageHint}
              width={600}
              height={375}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold font-headline">{project.title}</h3>
          <p className="mt-2 text-muted-foreground text-sm flex-grow">
            {project.description}
          </p>
          <div className="mt-4 flex items-center text-primary font-semibold text-sm">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
