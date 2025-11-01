import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';


export const metadata: Metadata = {
  title: {
    default: 'Aman Antuley | Insights & Innovations',
    template: '%s | Aman Antuley',
  },
  description:
    'Exploring technology, creativity, and innovation — one idea at a time.',
  openGraph: {
    title: 'Aman Antuley | Insights & Innovations',
    description:
      'Exploring technology, creativity, and innovation — one idea at a time.',
    url: 'https://aman-antuley-blog.com', // Replace with actual URL
    siteName: 'Aman Antuley | Insights & Innovations',
    images: [
      {
        url: '/og-image.png', // Replace with actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Antuley | Insights & Innovations',
    description:
      'Exploring technology, creativity, and innovation — one idea at a time.',
    // creator: '@amanantuley', // Replace with actual Twitter handle
    images: ['/twitter-image.png'], // Replace with actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased'
        )}
      >
        <Providers>
            <div className="relative flex min-h-dvh flex-col">
                 <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"/>
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
            <Toaster />
        </Providers>
      </body>
    </html>
  );
}
