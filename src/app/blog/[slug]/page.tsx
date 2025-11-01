import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { getPostBySlug, getRelatedPosts } from '@/lib/data';
import { generateSEOMetaData } from '@/ai/flows/generate-seo-metadata';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PostCard } from '@/components/post-card';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  try {
    const seoData = await generateSEOMetaData({ blogPostContent: post.content });
    return {
      title: seoData.titleTag,
      description: seoData.metaDescription,
      openGraph: {
        title: seoData.titleTag,
        description: seoData.metaDescription,
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author.name],
        images: [
          {
            url: post.image.imageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.titleTag,
        description: seoData.metaDescription,
        images: [post.image.imageUrl],
      },
    };
  } catch (error) {
    console.error('AI SEO metadata generation failed, falling back to post data:', error);
    return {
      title: post.title,
      description: post.excerpt,
    };
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <article className="bg-background">
      <header className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src={post.image.imageUrl}
          alt={post.image.description}
          data-ai-hint={post.image.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </header>
      
      <div className="container -mt-16 md:-mt-24 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-10">
            <div className="text-center">
              <Badge variant="outline">{post.category.name}</Badge>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold font-headline">
                {post.title}
              </h1>
              <div className="mt-6 flex justify-center items-center gap-4 text-sm text-muted-foreground">
                 <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.author.avatar.imageUrl} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{post.author.name}</span>
                </div>
                <span>•</span>
                <time dateTime={post.publishedAt}>
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </time>
              </div>
            </div>

            <Separator className="my-8" />
            
            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90">
                <p className="lead text-xl !-mt-2">{post.excerpt}</p>
                <p>{post.content}</p>
            </div>
          </Card>

          <Card className="mt-12 p-8">
            <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                    <AvatarImage src={post.author.avatar.imageUrl} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm text-muted-foreground">Written by</p>
                    <h4 className="text-xl font-bold font-headline">{post.author.name}</h4>
                    <p className="mt-2 text-muted-foreground">{post.author.bio}</p>
                </div>
            </div>
          </Card>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24">
            <div className="container">
                <h2 className="text-3xl font-bold font-headline text-center">Related Posts</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                    {relatedPosts.map(relatedPost => (
                        <PostCard key={relatedPost.id} post={relatedPost} />
                    ))}
                </div>
            </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-3xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Join the Discussion</CardTitle>
                    <CardDescription>Share your thoughts and comments.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your name" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Your email" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="comment">Comment</Label>
                            <Textarea id="comment" placeholder="Write your comment here..." />
                        </div>
                        <Button className="w-fit">Post Comment</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </section>

    </article>
  );
}
