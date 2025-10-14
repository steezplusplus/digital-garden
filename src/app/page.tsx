import { Metadata } from 'next';
import { Suspense } from 'react';

import Gallery from '@/components/layout/sections/gallery';
import Projects, { ProjectsSkeleton } from '@/components/layout/sections/projects';

export const revalidate = 3600; // Revalidate this page every hour.

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
    </>
  );
}
