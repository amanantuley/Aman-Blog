import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { Post } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PostCardProps {
  post: Post;
  className?: string;
}

export function PostCard({ post, className }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card
        className={cn(
          'h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1',
          className
        )}
      >
        <CardHeader className="p-0">
          <div className="aspect-[16/10] overflow-hidden">
            <Image
              src={post.image.imageUrl}
              alt={post.image.description}
              data-ai-hint={post.image.imageHint}
              width={600}
              height={375}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Badge variant="outline" className="mb-2">
            {post.category.name}
          </Badge>
          <h3 className="text-xl font-bold font-headline leading-tight">
            {post.title}
          </h3>
          <p className="mt-2 text-muted-foreground text-sm">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={post.author.avatar.imageUrl}
                alt={post.author.name}
              />
              <AvatarFallback>
                {post.author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span>{post.author.name}</span>
          </div>
          <time dateTime={post.publishedAt}>
            {format(new Date(post.publishedAt), 'MMM d, yyyy')}
          </time>
        </CardFooter>
      </Card>
    </Link>
  );
}
