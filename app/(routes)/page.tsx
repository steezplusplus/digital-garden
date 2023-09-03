import { Metadata } from 'next';

import { getRepos, getUser } from '@/octokit';
import { SnapContainer, SnapSection } from './_components/scroll-snap';

export const metadata: Metadata = {
  title: "Jesse's Homepage",
};

export default async function HomePage() {
  const user = await getUser();
  const repos = await getRepos();
  console.log(user, repos);

  return (
    <SnapContainer>
      <SnapSection>
        <h2 className="text-2xl">Ecommerce Admin</h2>
      </SnapSection>
      <SnapSection>
        <h2 className="text-2xl">Ecommerce Store</h2>
      </SnapSection>
      <SnapSection>
        <h2 className="text-2xl">Accessible Web Components</h2>
      </SnapSection>
      <SnapSection>
        <h2 className="text-2xl">Chirp Chirp</h2>
      </SnapSection>
    </SnapContainer>
  );
}
