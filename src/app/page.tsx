import { Suspense } from 'react';
import { Metadata } from 'next';

import GallerySection from '@/components/layout/sections/gallery-section';
import ProjectSection, {
  ProjectSectionSkeleton,
} from '@/components/layout/sections/project-section';

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
    </>
  );
}
