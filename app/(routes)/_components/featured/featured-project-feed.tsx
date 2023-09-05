import { Suspense } from 'react';

import { FeaturedProject, FeaturedProjectProps } from './featured-project';
type FeaturedProjectFeed = FeaturedProjectProps & { key: string };

const featProjects: FeaturedProjectFeed[] = [
  {
    displayName: 'E-commerce Store',
    repoName: 'ecommerce-store',
    key: 'ecommerce-store-0',
  },
  {
    displayName: 'E-commerce Admin',
    repoName: 'ecommerce-admin',
    key: 'ecommerce-admin-1',
  },
  {
    displayName: 'Chirp Chirp',
    repoName: 'chirp-chirp',
    key: 'chirp-chirp-2',
  },
];

// TODO Create better suspsene fallback that creates less CLS
export async function FeaturedProjectsFeed() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {featProjects.map((featuredProject) => (
        <Suspense
          key={featuredProject.key}
          fallback={<p>Loading project...</p>}
        >
          <FeaturedProject
            displayName={featuredProject.displayName}
            repoName={featuredProject.repoName}
          />
        </Suspense>
      ))}
    </div>
  );
}
