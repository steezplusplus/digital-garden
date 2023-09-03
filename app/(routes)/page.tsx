import { Metadata } from 'next';

import { getRepos } from '@/octokit';
import { SnapContainer, SnapSection } from './_components/scroll-snap';

export const metadata: Metadata = {
  title: "Jesse's Homepage",
};

export default async function HomePage() {
  // const user = await getUser(); // TODO
  const repos = await getRepos();

  return (
    <SnapContainer>
      {repos.map((repo) => (
        <SnapSection key={repo.name}>
          <h2 className="text-2xl">{repo.name}</h2>
          <p>{repo.description}</p>
          <p>Last updated {repo.updated_at}</p>
          <a href={repo.url}>Github link</a>
          <p>{repo.num_stars} stars</p>
        </SnapSection>
      ))}
    </SnapContainer>
  );
}
