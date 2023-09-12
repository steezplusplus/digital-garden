import type { Metadata } from 'next';
import { Lora } from 'next/font/google';

import './globals.css';
import { Nav } from './_components/nav/nav';
import { Footer } from './_components/footer/footer';
import { Providers } from './_components/providers/providers';

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jesse's Digital Garden",
  description: 'A collection of expertly built programming projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
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
