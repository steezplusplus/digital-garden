import { Metadata } from 'next';
import { Suspense } from 'react';

import Gallery from '@/components/layout/sections/gallery';
import Projects, { ProjectsSkeleton } from '@/components/layout/sections/projects';
import About, { AboutSkeleton } from '@/components/layout/sections/about';

export const metadata: Metadata = {
  title: "Jesse's Digital Garden",
};

export default function HomePage() {
  return (
    <>
      <Gallery />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<AboutSkeleton />}>
        <About />
      </Suspense>
    </>
  );
}
