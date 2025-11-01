import type { ImagePlaceholder } from './placeholder-images';

export type Author = {
  id: string;
  name: string;
  avatar: ImagePlaceholder;
  bio: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: ImagePlaceholder;
  publishedAt: string;
  author: Author;
  category: Category;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: ImagePlaceholder;
};
