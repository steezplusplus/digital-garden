import { Suspense } from 'react';

import { FeaturedProject, FeaturedProjectProps } from './featured-project';
type FeaturedProjectFeed = FeaturedProjectProps & { key: string };

const featProjects: FeaturedProjectFeed[] = [
  {
    displayName: 'E-commerce Store',
    repoName: 'ecommerce-store',
    showBadge: true,
    key: 'ecommerce-store-0',
    websiteUrl: 'https://ecommerce-store-steez.vercel.app/',
  },
  {
    displayName: 'E-commerce Admin',
    showBadge: true,
    repoName: 'ecommerce-admin',
    key: 'ecommerce-admin-1',
    websiteUrl: 'https://ecommerce-admin-steez.vercel.app/',
  },
  {
    displayName: 'Chirp Chirp',
    showBadge: true,
    repoName: 'chirp-chirp',
    key: 'chirp-chirp-2',
    websiteUrl: 'https://chirp-chirp-steez.vercel.app/',
  },
  {
    displayName: 'Acessible Web Components',
    showBadge: true,
    repoName: 'accessible-web-components',
    key: 'accessible-web-components-3',
    websiteUrl: 'https://steezplusplus.vercel.app/',
  },
  {
    displayName: 'History Plotter',
    showBadge: false,
    repoName: 'history-plotter',
    key: 'history-plotter-4',
    websiteUrl: '',
  },
  {
    displayName: 'Bluetooth Stalker',
    showBadge: false,
    repoName: 'bluetooth-stalker',
    key: 'bluetooth-stalker-5',
    websiteUrl: '',
  },
];

// TODO Create better suspsene fallback that creates less CLS
export function FeaturedProjectsFeed() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
      {featProjects.map((featuredProject) => (
        <Suspense
          key={featuredProject.key}
          fallback={<p>Loading project...</p>}
        >
          <FeaturedProject
            displayName={featuredProject.displayName}
            repoName={featuredProject.repoName}
            showBadge={featuredProject.showBadge}
            websiteUrl={featuredProject.websiteUrl}
          />
        </Suspense>
      ))}
    </div>
  );
}
