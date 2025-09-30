import { Suspense } from 'react';
import { Metadata } from 'next';

import { ReposFeed, ReposFeedSkeleton } from '@/components/repos-feed/repos-feed';
import GallerySection from '@/components/sections/gallery-section';
import AboutSection from '@/components/sections/about-section';
import ProjectSection from '@/components/sections/project-section';

export const metadata: Metadata = {
  title: "Jesse's Digital Garden",
};

export const revalidate = 3600; // revalidate at most every hour

export default function HomePage() {
  return (
    <>
      <GallerySection />
      <ProjectSection />
      <AboutSection />
      <OldProjectSection />
    </>
  );
}

function OldProjectSection() {
  return (
    <div>
      <h2 id="project-id" className="mb-4 text-3xl">
        Most recently updated projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
        <Suspense fallback={<ReposFeedSkeleton />}>
          <ReposFeed />
        </Suspense>
      </div>
    </div>
  )
}