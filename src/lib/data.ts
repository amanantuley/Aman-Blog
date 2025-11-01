import { PlaceHolderImages } from './placeholder-images';
import type { Author, Category, Post, Project } from './types';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

const AUTHORS: Author[] = [
  {
    id: 'author-1',
    name: 'Aman Antuley',
    avatar: getImage('author-aman'),
    bio: 'I’m Aman Antuley, a Computer Engineering student passionate about AI, full-stack development, and digital innovation. Through this blog, I share ideas, insights, and experiences from my tech journey.',
  },
];

const CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'AI', slug: 'ai' },
  { id: 'cat-2', name: 'Web Development', slug: 'web-development' },
  { id: 'cat-3', name: 'Tech Trends', slug: 'tech-trends' },
  { id: 'cat-4', name: 'Personal Insights', slug: 'personal-insights' },
];

const POSTS: Post[] = [
  {
    id: 'post-1',
    slug: 'the-future-of-ai',
    title: 'The Future of Artificial Intelligence: Predictions for the Next Decade',
    excerpt:
      'AI is evolving at an unprecedented pace. In this post, we explore the potential breakthroughs and societal impacts we can expect in the coming years.',
    content:
      'The field of Artificial Intelligence (AI) is one of the most exciting and rapidly advancing areas of technology today. From autonomous vehicles to personalized medicine, AI is poised to revolutionize countless industries. This post delves into what the next ten years might hold for AI development, covering topics like general intelligence, ethical considerations, and the future of work.',
    image: getImage('post-ai-future'),
    publishedAt: '2024-07-15',
    author: AUTHORS[0],
    category: CATEGORIES[0],
  },
  {
    id: 'post-2',
    slug: 'mastering-react-hooks',
    title: 'From Novice to Ninja: A Deep Dive into Mastering React Hooks',
    excerpt:
      'Unlock the full potential of functional components in React. This guide covers everything from useState to custom hooks, with practical examples.',
    content:
      'React Hooks have fundamentally changed how we write React applications. They allow developers to use state and other React features in functional components, leading to cleaner and more reusable code. This article provides a comprehensive overview of built-in hooks like useState, useEffect, and useContext, and guides you through creating your own custom hooks to encapsulate complex logic.',
    image: getImage('post-react-mastery'),
    publishedAt: '2024-07-10',
    author: AUTHORS[0],
    category: CATEGORIES[1],
  },
  {
    id: 'post-3',
    slug: 'top-tech-trends-2024',
    title: 'Top 5 Tech Trends to Watch in 2024',
    excerpt:
      'The technology landscape is always shifting. Here are the top five trends, from quantum computing to the metaverse, that are set to define the year.',
    content:
      'Staying ahead of the curve is crucial in the tech world. This year, several key trends are emerging that will shape the future of technology and business. We will explore the rise of generative AI, the practical applications of quantum computing, the evolution of the metaverse, advancements in sustainable tech, and the increasing importance of cybersecurity in an interconnected world.',
    image: getImage('post-tech-trends-2024'),
    publishedAt: '2024-06-28',
    author: AUTHORS[0],
    category: CATEGORIES[2],
  },
  {
    id: 'post-4',
    slug: 'navigating-imposter-syndrome',
    title: 'The Developer’s Dilemma: Navigating Imposter Syndrome in Tech',
    excerpt:
      'Imposter syndrome is a common struggle in the tech industry. This post shares personal experiences and practical strategies for overcoming it.',
    content:
      'Do you ever feel like a fraud, despite your accomplishments? You\'re not alone. Imposter syndrome is rampant in the fast-paced, high-stakes world of technology. This personal reflection explores the root causes of these feelings and offers actionable advice on how to build confidence, embrace your expertise, and thrive in your career.',
    image: getImage('post-imposter-syndrome'),
    publishedAt: '2024-06-15',
    author: AUTHORS[0],
    category: CATEGORIES[3],
  },
  {
    id: 'post-5',
    slug: 'llm-deep-dive',
    title: 'A Deep Dive into Large Language Models',
    excerpt: 'Beyond the hype: understanding the architecture and training process of models like GPT-4.',
    content: 'Large Language Models (LLMs) are everywhere, but how do they actually work? This technical deep dive breaks down the transformer architecture, attention mechanisms, and the massive-scale training processes that make these models possible. We\'ll explore the challenges of data collection, model alignment, and the computational resources required to build a state-of-the-art LLM.',
    image: getImage('post-llm-deep-dive'),
    publishedAt: '2024-05-30',
    author: AUTHORS[0],
    category: CATEGORIES[0],
  },
  {
    id: 'post-6',
    slug: 'whats-new-in-nextjs',
    title: 'Exploring the New Features in Next.js',
    excerpt: 'A comprehensive look at the latest version of Next.js and how its new features can improve your development workflow and application performance.',
    content: 'The latest release of Next.js brings a host of exciting features, from improved server components to enhanced image optimization. This post will walk you through the key updates, providing code examples and practical tips on how to leverage these new tools to build faster, more scalable web applications.',
    image: getImage('post-nextjs-14'),
    publishedAt: '2024-05-22',
    author: AUTHORS[0],
    category: CATEGORIES[1],
  },
  {
    id: 'post-7',
    slug: 'introduction-to-quantum-computing',
    title: 'Quantum Computing: The Next Frontier?',
    excerpt: 'An introduction to the mind-bending world of quantum computing and its potential to solve some of the world\'s most complex problems.',
    content: 'Quantum computing promises to revolutionize fields from medicine to materials science. But what is it, and how does it differ from classical computing? This article explains the fundamental concepts of qubits, superposition, and entanglement in an accessible way, and discusses the current state of quantum technology and the challenges that lie ahead.',
    image: getImage('post-quantum-computing'),
    publishedAt: '2024-05-10',
    author: AUTHORS[0],
    category: CATEGORIES[2],
  },
  {
    id: 'post-8',
    slug: 'my-journey-as-a-developer',
    title: 'From "Hello World" to Full-Stack: My Journey as a Developer',
    excerpt: 'A personal reflection on the ups and downs of learning to code and growing into a software engineer.',
    content: 'Every developer has a unique story. This post chronicles my personal journey, from writing my first line of code to building complex full-stack applications. I\'ll share the resources that helped me most, the challenges I faced, and the key lessons I\'ve learned about perseverance, continuous learning, and finding your passion in the world of software development.',
    image: getImage('post-dev-journey'),
    publishedAt: '2024-04-25',
    author: AUTHORS[0],
    category: CATEGORIES[3],
  }
];

const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Personal Portfolio Website',
    description: 'A responsive and animated portfolio site built with Next.js and Tailwind CSS to showcase my projects and skills.',
    link: '#',
    image: getImage('project-portfolio'),
  },
  {
    id: 'proj-2',
    title: 'Full-Stack E-commerce Platform',
    description: 'A complete e-commerce solution featuring product listings, a shopping cart, and a secure checkout process using Stripe.',
    link: '#',
    image: getImage('project-ecom'),
  },
  {
    id: 'proj-3',
    title: 'AI-Powered Customer Service Chatbot',
    description: 'A chatbot built with the OpenAI API to handle customer inquiries and provide instant support on a mock business website.',
    link: '#',
    image: getImage('project-ai-chatbot'),
  },
];

const HACKATHONS: Project[] = [
  {
    id: 'hack-1',
    title: 'Data Visualization for Social Good',
    description: 'Developed an interactive dashboard to visualize public health data, winning "Best Use of Data" at a university hackathon.',
    link: '#',
    image: getImage('project-data-viz'),
  },
  {
    id: 'hack-2',
    title: 'AI-Enhanced Learning App',
    description: 'Created a mobile app that uses AI to generate personalized study guides, earning a finalist position in a national coding competition.',
    link: '#',
    image: getImage('project-ai-chatbot'),
  },
];


export const getPosts = () => POSTS.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
export const getPostBySlug = (slug: string) => POSTS.find(p => p.slug === slug);
export const getRelatedPosts = (currentPost: Post) => POSTS.filter(p => p.category.id === currentPost.category.id && p.id !== currentPost.id).slice(0, 3);
export const getCategories = () => CATEGORIES;
export const getCategoryBySlug = (slug: string) => CATEGORIES.find(c => c.slug === slug);
export const getAuthors = () => AUTHORS;
export const getProjects = () => PROJECTS;
export const getHackathons = () => HACKATHONS;
