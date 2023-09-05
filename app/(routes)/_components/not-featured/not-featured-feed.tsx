import { Suspense } from 'react';

import { NotFeatured, NotFeaturedProps } from './not-featured';

type NotFeaturedFeedProps = NotFeaturedProps & { key: string };

// TODO Update project list
const notFeaturedProjects: NotFeaturedFeedProps[] = [
  {
    displayName: 'Acessible Web Components',
    repoName: 'Accessible-Web-Components',
    key: 'Accessible-Web-Components-0',
  },
  {
    displayName: 'History Plotter',
    repoName: 'history-plotter',
    key: 'history-plotter-1',
  },
  {
    displayName: 'Istanbul Stock Exchange Analysis',
    repoName: 'Istanbul-Stock-Exchange-Analysis',
    key: 'Istanbul-Stock-Exchange-Analysis-2',
  },
];

// TODO Create better suspsene fallback that creates less CLS
export function NotFeaturedFeed() {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {notFeaturedProjects.map((project) => (
        <Suspense key={project.key} fallback={<p>Loading...</p>}>
          <NotFeatured {...project} />
        </Suspense>
      ))}
    </div>
  );
}
