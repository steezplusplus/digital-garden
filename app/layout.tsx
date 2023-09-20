import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { Nav } from './_components/nav/nav';
import { Footer } from './_components/footer/footer';
import { Providers } from './_components/providers/providers';

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jesse's Digital Garden",
  description: 'An open source web dev portfolio',
  openGraph: {
    title: "Jesse's Digital Garden",
    description: 'An open source web dev portfolio',
    url: 'https://digital-garden-steez.vercel.app/',
    siteName: "Jesse's Digital Garden",
    images: [
      {
        url: './primry.jpg',
        width: 800,
        height: 600,
      },
      {
        url: './primary.jpg',
        width: 1800,
        height: 1600,
        alt: 'Image of neon light tubes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Analytics />
        <Providers>
          <nav>
            <Nav />
          </nav>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
