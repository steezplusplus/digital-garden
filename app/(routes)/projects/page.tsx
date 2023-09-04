import { Metadata } from 'next';

import { getRepos } from '@/octokit';
import { SnapContainer, SnapSection } from './_components/scroll-snap';

export const metadata: Metadata = {
  title: "Jesse's Projects",
};

export default async function ProjectPage() {
  const repos = await getRepos();

  return (
    <SnapContainer>
      {repos.map((repo) => (
        <SnapSection key={repo.name}>
          <div className="flex flex-col">
            <h2 className="text-2xl">{repo.name}</h2>
            <p>{repo.description}</p>
            <p>Last updated {repo.updated_at}</p>
            <a href={repo.url}>Github link</a>
            {repo.homepage && <a href={repo.homepage}>Live link</a>}
            <p>{repo.num_stars} stars</p>
          </div>
        </SnapSection>
      ))}
    </SnapContainer>
  );
}
