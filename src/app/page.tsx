import { Suspense } from 'react';
import { Metadata } from 'next';

import GallerySection from '@/components/sections/gallery-section';
import ProjectSection, { ProjectSectionSkeleton } from '@/components/sections/project-section';
import AboutSection from '@/components/sections/about-section';

export const metadata: Metadata = {
  title: "Jesse's Digital Garden",
};

export default function HomePage() {
  return (
    <>
      <GallerySection />
      <Suspense fallback={<ProjectSectionSkeleton />}>
        <ProjectSection />
      </Suspense>
      <AboutSection />
    </>
  );
}
